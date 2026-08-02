# -*- coding: utf-8 -*-
"""Generate static, pre-rendered SEO landing pages — one per language — at
clean paths like /learn-sinhala. These are self-contained (inline CSS, no app
JS), so Google indexes the real vocabulary without running the SPA. Each page
deep-links into the app via /?lang=<code>.

Run from the repo root:  python3 scratchpad/gen_landing.py
Data comes from landing_data.js (JXA), so the pages always reflect
the live packs. Writes learn-<slug>.html at the repo root and rewrites
sitemap.xml.

sitemap <lastmod> is CONTENT-ADDRESSED, never "today": each URL's date only
moves when that page's bytes actually change (see lastmod_store). Stamping
every URL with the run date on every regeneration teaches Google to ignore
the field entirely, which is what it did before July 2026.
"""
import hashlib, html, json, os, re, subprocess, datetime

ROOT = os.getcwd()
TODAY = datetime.date.today().isoformat()
ORIGIN = "https://bhasaly.com"
# url -> [sha256 of the content that page is generated from, iso date]
LASTMOD_DB = '.lastmod.json'

# slug + the Google-Fonts family for each script (None = covered by Plus Jakarta)
SLUG = {'ne':'nepali','km':'khmer','my':'burmese','bn':'bengali','si':'sinhala',
        'lo':'lao','ps':'pashto','mn':'mongolian','ur':'urdu','uz':'uzbek','jv':'javanese'}
SCRIPT_FONT = {'ne':'Noto Sans Devanagari','km':'Noto Sans Khmer','my':'Noto Sans Myanmar',
               'bn':'Noto Sans Bengali','si':'Noto Sans Sinhala','lo':'Noto Sans Lao',
               'ps':'Noto Sans Arabic','ur':'Noto Nastaliq Urdu'}
RTL = {'ps','ur'}
# what each course calls its writing system, for the alphabet heading + copy
SCRIPT_NAME = {'ne':'Devanagari script','km':'Khmer script','my':'Burmese script',
               'bn':'Bengali script','si':'Sinhala script','lo':'Lao script',
               'ps':'Pashto (Perso-Arabic) script','mn':'Mongolian Cyrillic alphabet',
               'ur':'Urdu (Nastaliq) script'}


def esc(s):
    return html.escape(str(s), quote=True)


def font_link(code):
    # Fraunces matches the app's display serif (the hero h1 + section headings
    # name it); same axis spec as index.html so the italic em renders too.
    fams = ["Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600",
            "Plus+Jakarta+Sans:wght@400;500;600;700"]
    sf = SCRIPT_FONT.get(code)
    if sf:
        w = "wght@400;500;600" if code != 'ur' else "wght@400;500;600"
        fams.append(sf.replace(' ', '+') + ':' + w)
    q = "&family=".join(fams)
    return ("https://fonts.googleapis.com/css2?family=" + q + "&display=swap")


def native_css(code):
    sf = SCRIPT_FONT.get(code)
    fam = ("'%s', " % sf) if sf else ""
    lh = "2.0" if code == 'ur' else "1.5"
    return fam + "'Plus Jakarta Sans', system-ui, sans-serif", lh


def audio_dir(code):
    return 'audio' if code == 'ne' else 'audio-' + code


def fnv1a_py(s):
    """Same hash as the app's audioKey() — keys the recorded clips."""
    h = 0x811C9DC5
    for b in s.encode('utf-8'):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, '08x')


def load_manifest(code):
    try:
        with open(os.path.join(ROOT, audio_dir(code), 'manifest.json'), encoding='utf-8') as f:
            return set(json.load(f))
    except Exception:
        return set()


def rows_table(pairs, native_cls, dir_attr, cols):
    """pairs = list of (native, extra, english?) ; cols is 2 or 3."""
    out = []
    for r in pairs:
        nat = '<td class="%s"%s>%s</td>' % (native_cls, dir_attr, esc(r[0]))
        if cols == 3:
            out.append('<tr>%s<td class="rom">%s</td><td>%s</td></tr>'
                       % (nat, esc(r[1]), esc(r[2])))
        else:
            out.append('<tr>%s<td class="rom">%s</td></tr>' % (nat, esc(r[1])))
    return "\n".join(out)


def alpha_grid(pairs, native_cls, dir_attr, manifest=None):
    """manifest=None keeps plain tiles (learn pages); with a manifest, tiles
    whose clip exists become play buttons (the si/mn letters with no possible
    clip stay plain divs — no dead buttons)."""
    tiles = []
    for r in pairs:
        inner = ('<span class="%s"%s>%s</span><span class="ar">%s</span>'
                 % (native_cls, dir_attr, esc(r[0]), esc(r[1])))
        k = fnv1a_py(r[0]) if manifest is not None else None
        if k and k in manifest:
            tiles.append('<button type="button" class="atile" data-k="%s" '
                         'aria-label="%s — play audio">%s</button>' % (k, esc(r[0]), inner))
        else:
            tiles.append('<div class="atile">%s</div>' % inner)
    return "\n".join(tiles)


def jsonld(d, name, slug, desc):
    course = {
        "@context": "https://schema.org", "@type": "Course",
        "name": "Learn %s" % name, "description": desc,
        "inLanguage": "en", "teaches": name, "educationalLevel": "Beginner",
        "provider": {"@type": "Organization", "name": "Bhasaly", "url": ORIGIN + "/"},
        "hasCourseInstance": {"@type": "CourseInstance", "courseMode": "online",
                              "courseWorkload": "PT30M",
                              "instructor": {"@type": "Organization", "name": "Bhasaly"}},
    }
    crumbs = {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Bhasaly", "item": ORIGIN + "/"},
            {"@type": "ListItem", "position": 2, "name": "Learn %s" % name,
             "item": "%s/learn-%s" % (ORIGIN, slug)},
        ],
    }
    faq = {
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [{"@type": "Question", "name": q,
                        "acceptedAnswer": {"@type": "Answer", "text": a}}
                       for q, a in faq_pairs(d)],
    }
    return json.dumps([course, crumbs, faq], ensure_ascii=False, separators=(',', ':'))


def faq_pairs(d):
    name = d['name']
    if d['latin']:
        script_q = ("No — %s is written in the Latin alphabet you already know, so you "
                    "can start reading it straight away." % name)
    else:
        script_q = ("No. The course starts by teaching the %s one letter at a time, with "
                    "audio, before building into words and sentences."
                    % SCRIPT_NAME.get(d['code'], name + ' script'))
    return [
        ("Do I need an account to learn %s?" % name,
         "No. You can start straight away in your browser. Logging in with an email is "
         "optional and simply syncs your progress across your devices."),
        ("Do I need to know the %s alphabet first?" % name, script_q),
        ("Is there audio for %s?" % name,
         "Yes — every word and phrase plays a clear recorded audio clip, so you pick up "
         "real %s pronunciation from the start." % name),
        ("How long does it take to learn %s?" % name,
         "You learn at your own pace. Most lessons take just a few minutes, and a daily "
         "streak plus a built-in review system help the words stick."),
    ]


# --- scenery: pull the real per-language art + palette out of index.html so the
#     landing hero looks like the app (same scene, same colours) -------------
SCENE_KEYS = ['--sky1', '--sky2', '--mtn-far', '--mtn-mid', '--mtn-near', '--snow',
              '--orb', '--tree', '--wood', '--bark', '--hide', '--slate', '--tyre', '--water']


def _decls(block):
    return dict(re.findall(r'(--[a-z0-9-]+)\s*:\s*([^;}]+)', block or ''))


def scene_assets(index_html):
    """Return (palettes, ne_hero_inner, ne_band_inner). palettes[code] = CSS
    setting the scene vars for light + dark, including the per-language
    data-lang override."""
    base_light = _decls(re.search(r':root\{([^}]*)\}', index_html).group(1))
    base_dark = _decls(re.search(r'\[data-theme="dark"\]\{([^}]*)\}', index_html).group(1))
    palettes = {}
    for code in SLUG:
        m = re.search(r':root\[data-lang="%s"\]\{([^}]*)\}' % code, index_html)
        md = re.search(r':root\[data-theme="dark"\]\[data-lang="%s"\]\{([^}]*)\}' % code, index_html)
        light = {k: base_light[k] for k in SCENE_KEYS if k in base_light}
        light.update(_decls(m.group(1)) if m else {})
        dark = {k: base_dark[k] for k in SCENE_KEYS if k in base_dark}
        dark.update(_decls(md.group(1)) if md else {})
        lp = ';'.join('%s:%s' % (k, v) for k, v in light.items())
        dp = ';'.join('%s:%s' % (k, v) for k, v in dark.items())
        palettes[code] = (':root{%s}\n@media(prefers-color-scheme:dark){:root{%s}}' % (lp, dp))
    # the Nepali default scene is inline in view-home
    seg = index_html[index_html.find('id="view-home"'):]
    i = seg.find('<svg class="hero-mtns"'); i = seg.find('>', i) + 1
    ne_hero = seg[i:seg.find('</svg>', i)]
    # the Nepali default sub-page band (all six copies are verbatim — take the first)
    j = index_html.find('<svg class="pb-mtns"'); j = index_html.find('>', j) + 1
    ne_band = index_html[j:index_html.find('</svg>', j)]
    return palettes, ne_hero, ne_band


def page(d, others, palette_css, ne_hero):
    code, name, native = d['code'], d['name'], d['nativeName']
    hero_inner = d['hero'] or ne_hero
    slug = SLUG[code]
    nat_fam, nat_lh = native_css(code)
    dir_attr = ' dir="rtl"' if code in RTL else ' dir="auto"'
    ncls = "native"
    url = "%s/learn-%s" % (ORIGIN, slug)
    title = "Learn %s — Lessons, Alphabet & Audio | Bhasaly" % name
    # SERPs cut descriptions at ~160 chars — every variant below stays under
    alpha_bit = "" if d['latin'] else "the alphabet, "
    desc = ("Learn %s with Bhasaly: %d short lessons across %d levels, %srecorded "
            "audio and real phrases. No account needed — works on any phone."
            % (name, d['lessons'], d['zones'], alpha_bit))
    kw = ("learn %s, %s for beginners, %s alphabet, %s phrases, %s words, speak %s, "
          "%s course, %s lessons" % ((name,) * 8)).lower()

    # essentials
    essentials = rows_table(d['srsSeed'], ncls, dir_attr, 3)
    numbers = rows_table(d['nums'], ncls, dir_attr, 2)

    alpha_block = ""
    if not d['latin']:
        v = alpha_grid(d['vowels'], ncls, dir_attr)
        c = alpha_grid(d['cons'], ncls, dir_attr)
        alpha_block = """
  <section class="block">
    <h2>The {sname}</h2>
    <p class="lead">Taught one letter at a time, with audio.</p>
    <h3>Vowels</h3>
    <div class="agrid">{v}</div>
    <h3>Consonants</h3>
    <div class="agrid">{c}</div>
  </section>""".format(sname=esc(SCRIPT_NAME.get(code, name + ' script')), v=v, c=c)

    intro_script = ("written in the Latin alphabet you already read"
                    if d['latin'] else "written in the %s" % SCRIPT_NAME.get(code, 'script'))

    faq_html = "\n".join(
        '<details class="faq"><summary>%s</summary><p>%s</p></details>' % (esc(q), esc(a))
        for q, a in faq_pairs(d))

    other_links = "\n".join(
        '<a href="/learn-%s">%s</a>' % (SLUG[o['code']], esc(o['name'])) for o in others)

    # hub -> spoke: this page is the one search finds first, so it has to pass
    # authority on to the reference pages rather than leaving them orphaned
    refs = []
    if not d['latin'] and (d['vowels'] or d['cons']):
        refs.append('<a href="/%s-alphabet">%s alphabet chart</a>' % (slug, esc(name)))
    if d.get('trip') and d['trip']['sections']:
        refs.append('<a href="/%s-phrases">%s phrases for travellers</a>' % (slug, esc(name)))
    ref_block = ""
    if refs:
        ref_block = """
  <section class="block">
    <h2>%s reference</h2>
    <p class="lead">Free to read, and every line is recorded.</p>
    <div class="others">%s</div>
  </section>
""" % (esc(name), "\n".join(refs))

    hero_scene = ('<svg class="hero-scene" viewBox="0 0 1200 320" '
                  'preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" '
                  'aria-hidden="true">%s</svg>' % hero_inner)

    return TEMPLATE.format(
        title=esc(title), desc=esc(desc), kw=esc(kw), url=esc(url), slug=slug,
        fontlink=esc(font_link(code)),
        css=CSS.format(palette=palette_css, natfam=nat_fam, natlh=nat_lh),
        rtl=(' dir="rtl"' if code in RTL else ''),
        palette=palette_css, hero_scene=hero_scene,
        name=esc(name), native=esc(native), code=code,
        zones=d['zones'], topics=d['topics'], lessons=d['lessons'],
        desc_intro=("From your first letters to everyday conversation, Bhasaly teaches %s "
                    "one short, tap-based lesson at a time — %s. Every word carries recorded "
                    "audio, and you learn on any phone or computer."
                    % (esc(name), esc(intro_script))),
        essentials=essentials, numbers=numbers, alpha_block=alpha_block,
        faq_html=faq_html, other_links=other_links, ref_block=ref_block,
        jsonld=jsonld(d, name, slug, desc), year=datetime.date.today().year)


# Shared page CSS. Rendered once via CSS.format(...) and injected as {css};
# .format() does not rescan substituted values, so the CSS braces are safe.
# Light --saffron is darker than the app's (#C67911): the rom column is body
# text here and #9C5E0D is the lightest shade giving 4.5:1 on --paper.
CSS = """:root{{--paper:#EFF4FB;--paper2:#E0EAF6;--ink:#1B2430;--soft:#5B6B7D;--crimson:#C2362E;
--saffron:#9C5E0D;--saffron-soft:#FCEBCC;--teal:#0F8C74;--line:rgba(27,36,48,.10);--card:#fff;--tree:#2C5F3A;
--r:14px;--shadow:0 1px 2px rgba(27,36,48,.05),0 10px 26px -16px rgba(20,40,80,.30)}}
@media(prefers-color-scheme:dark){{:root{{--paper:#0F1419;--paper2:#19222C;--ink:#E9F0F7;--soft:#93A5B7;
--crimson:#E8836A;--saffron:#E7AD5E;--saffron-soft:#332A1C;--teal:#5FC6B0;--line:rgba(233,240,247,.12);
--card:#1C2630;--tree:#4FA06A;--shadow:0 1px 2px rgba(0,0,0,.25),0 12px 28px -18px rgba(0,0,0,.7)}}}}
{palette}
*{{box-sizing:border-box}}
body{{margin:0;background:var(--paper);color:var(--ink);
font-family:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif;line-height:1.6;
-webkit-font-smoothing:antialiased}}
.native{{font-family:{natfam};line-height:{natlh}}}
.wrap{{max-width:820px;margin:0 auto;padding:0 20px}}
header{{position:sticky;top:0;background:color-mix(in srgb,var(--paper) 90%,transparent);
backdrop-filter:blur(12px);border-bottom:1px solid var(--line);z-index:5}}
header .wrap{{display:flex;align-items:center;justify-content:space-between;height:60px}}
.logo{{display:flex;align-items:center;gap:9px;font-weight:700;font-size:19px;color:var(--ink);
text-decoration:none;letter-spacing:-.02em}}
.logo svg{{width:26px;height:26px}}
.hlink{{font-size:14.5px;font-weight:600;color:var(--crimson);text-decoration:none}}
.hero{{position:relative;overflow:hidden;text-align:center;
background:linear-gradient(180deg,var(--sky1),var(--sky2));border-radius:0 0 28px 28px}}
.hero-body{{position:relative;z-index:2;max-width:640px;margin:0 auto;
min-height:270px;display:flex;flex-direction:column;justify-content:center;align-items:center;
padding:36px 20px 150px}}
.hero h1{{font-family:'Fraunces',Georgia,serif;font-size:clamp(34px,7vw,52px);line-height:1.04;
margin:0 0 6px;letter-spacing:-.02em;color:var(--ink)}}
.hero h1 em{{font-style:italic;font-weight:600}}
.hero .nat{{font-size:clamp(22px,5vw,30px);color:var(--saffron);margin:0 0 14px}}
.hero p{{font-size:16.5px;color:var(--soft);max-width:500px;margin:0 auto 24px}}
.cta{{display:inline-block;background:var(--crimson);color:#fff;text-decoration:none;font-weight:700;
font-size:17px;padding:14px 28px;border-radius:999px;box-shadow:var(--shadow)}}
.cta:hover{{filter:brightness(1.06)}}
.stats{{display:flex;gap:24px;justify-content:center;flex-wrap:wrap;margin-top:24px}}
.stat b{{display:block;font-size:24px;font-weight:700;color:var(--tree)}}
.stat span{{font-size:12.5px;color:var(--soft)}}
/* the real per-language scenery fills the foot of the hero, like the app; the
   tall upper sky is cropped by the hero's overflow so text sits on calm sky */
.hero-scene{{position:absolute;left:0;right:0;bottom:0;width:100%;height:auto;z-index:1}}
.hero-scene .far{{fill:var(--mtn-far)}} .hero-scene .mid{{fill:var(--mtn-mid)}}
.hero-scene .near{{fill:var(--mtn-near)}} .hero-scene .snow{{fill:var(--snow)}}
.hero-scene .orb{{fill:var(--orb)}} .hero-scene .orb-glow{{fill:var(--orb);opacity:.3}}
.hero-scene .cloud{{fill:rgba(255,255,255,.6)}} .hero-scene .hero-stars{{display:none}}
@media(prefers-color-scheme:dark){{.hero-scene .cloud{{fill:rgba(199,214,230,.12)}}
.hero-scene .hero-stars{{display:block}} .hero-scene .hero-stars circle{{fill:#fff}}}}
.block{{padding:34px 0;border-top:1px solid var(--line)}}
.block h2{{font-family:'Fraunces',Georgia,serif;font-size:27px;margin:0 0 4px;letter-spacing:-.01em}}
.block h3{{font-size:15px;text-transform:uppercase;letter-spacing:.05em;color:var(--soft);margin:22px 0 10px}}
.lead{{color:var(--soft);margin:0 0 18px}}
table{{width:100%;border-collapse:collapse}}
td{{padding:11px 12px;border-bottom:1px solid var(--line);vertical-align:middle}}
td.native{{font-size:22px;font-weight:600;width:42%}}
td.rom{{color:var(--saffron);font-weight:600;font-size:15px}}
tr td:last-child{{color:var(--soft)}}
.agrid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:10px}}
.atile{{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px 6px;
text-align:center;box-shadow:var(--shadow)}}
.atile .native{{display:block;font-size:28px;font-weight:600;line-height:1.2}}
.atile .ar{{display:block;font-size:12px;color:var(--saffron);font-weight:600;margin-top:3px}}
.faq{{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:4px 16px;margin-bottom:10px}}
.faq summary{{cursor:pointer;font-weight:600;padding:12px 0;list-style:none}}
.faq summary::-webkit-details-marker{{display:none}}
.faq summary::before{{content:"+ ";color:var(--saffron);font-weight:700}}
.faq[open] summary::before{{content:"– "}}
.faq p{{margin:0 0 14px;color:var(--soft)}}
.others{{display:flex;flex-wrap:wrap;gap:9px;margin-top:6px}}
.others a{{background:var(--card);border:1px solid var(--line);border-radius:999px;
padding:8px 15px;font-size:14px;font-weight:600;color:var(--ink);text-decoration:none}}
.others a:hover{{border-color:var(--saffron);color:var(--saffron)}}
.endcta{{text-align:center;padding:44px 0}}
footer{{border-top:1px solid var(--line);padding:26px 0;text-align:center;color:var(--soft);font-size:13.5px}}
footer a{{color:var(--soft)}}
@media(max-width:560px){{td.native{{font-size:20px}}
.hero-body{{min-height:200px;padding:28px 18px 78px}}
.hero h1{{font-size:clamp(30px,9vw,40px)}}}}
"""


TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="keywords" content="{kw}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="https://bhasaly.com/og-image.png?v=3">
<meta property="og:site_name" content="Bhasaly">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="https://bhasaly.com/og-image.png?v=3">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{fontlink}" rel="stylesheet">
<script type="application/ld+json">{jsonld}</script>
<style>
{css}</style>
</head>
<body>
<header><div class="wrap">
  <a class="logo" href="/"><svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke-width="6.4" stroke-linecap="round"><path stroke="var(--crimson)" d="M12 18H34M43 18H52"/><path stroke="var(--saffron)" d="M12 32H23M32 32H52"/><path stroke="var(--teal)" d="M12 46H29M38 46H52"/></g></svg>Bhasaly</a>
  <a class="hlink" href="/?lang={code}">Open Bhasaly &rarr;</a>
</div></header>

<main>
<section class="hero">
  <div class="hero-body">
    <h1>Learn <em>{name}</em></h1>
    <div class="nat native"{rtl}>{native}</div>
    <p>Step-by-step lessons, the alphabet, and recorded audio &mdash; right in your browser.</p>
    <a class="cta" href="/?lang={code}">Start learning</a>
    <div class="stats">
      <div class="stat"><b>{zones}</b><span>levels</span></div>
      <div class="stat"><b>{topics}</b><span>topics</span></div>
      <div class="stat"><b>{lessons}</b><span>lessons</span></div>
      <div class="stat"><b>Audio</b><span>every word</span></div>
    </div>
  </div>
  {hero_scene}
</section>

<div class="wrap">
  <section class="block" style="border-top:none">
    <h2>About the course</h2>
    <p class="lead">{desc_intro}</p>
  </section>

  <section class="block">
    <h2>Essential {name} words &amp; phrases</h2>
    <table><tbody>{essentials}</tbody></table>
  </section>

  <section class="block">
    <h2>Numbers in {name}</h2>
    <table><tbody>{numbers}</tbody></table>
  </section>
  {alpha_block}

  <section class="block">
    <h2>Frequently asked questions</h2>
    {faq_html}
  </section>

  <section class="endcta">
    <a class="cta" href="/?lang={code}">Start the {name} course</a>
  </section>

{ref_block}
  <section class="block">
    <h2>Learn another language</h2>
    <p class="lead">Bhasaly teaches under-served Asian languages.</p>
    <div class="others">{other_links}</div>
  </section>
</div>
</main>

<footer><div class="wrap">
  &copy; {year} Bhasaly &middot; <a href="/">bhasaly.com</a> &middot;
  <a href="/?lang={code}">Open the {name} course</a> &middot;
  <a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a>
</div></footer>
</body>
</html>
"""


# ---------------------------------------------------------------------------
# Sub-pages: /<slug>-alphabet and /<slug>-phrases
#
# Everything below exists because the app is a single URL. Eleven alphabet
# charts, eleven phrasebooks and 3,700 lessons were invisible to search — and
# "khmer alphabet" / "nepali phrases for trekkers" are exactly what people
# type. The data is already in the packs, so these are pure generation.
#
# They share TEMPLATE's CSS via CSS.format(), so a style change lands on every
# page at once. SUB_TEMPLATE differs from TEMPLATE only in the body.
# ---------------------------------------------------------------------------



# the slim scenery band -- shared by the sub-pages and the 404 page
BAND_CSS = """/* slim scenery band, echoing the app's own sub-page band (.page-band) */
.sub-band{position:relative;overflow:hidden;border-radius:0 0 26px 26px;
background:linear-gradient(180deg,var(--sky1),var(--sky2))}
.sub-band-body{position:relative;z-index:2;max-width:820px;margin:0 auto;padding:24px 20px 84px}
/* the band art keeps its tall pieces right of x≈770/1200, like the app; the
   title box is capped so a long h1 wraps instead of running into the art */
.band-title{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 12px;max-width:620px}
.band-title h1{font-family:'Fraunces',Georgia,serif;font-size:clamp(30px,6vw,44px);
line-height:1.06;margin:0;letter-spacing:-.02em}
/* dir="rtl" is kept for correct shaping, but this is a left-aligned layout —
   without this the ur/ps native line drifts to the right edge, away from h1 */
.band-title .nat{font-size:clamp(20px,4.5vw,28px);color:var(--crimson);font-weight:500;text-align:left}
.band-scene{position:absolute;left:0;right:0;bottom:0;width:100%;height:auto;z-index:1;display:block}
.band-scene .far{fill:var(--mtn-far)} .band-scene .mid{fill:var(--mtn-mid)}
.band-scene .near{fill:var(--mtn-near)} .band-scene .snow{fill:var(--snow)}
.band-scene .orb{fill:var(--orb)} .band-scene .orb-glow{fill:var(--orb);opacity:.3}
.band-scene .cloud{fill:rgba(255,255,255,.6)}
@media(prefers-color-scheme:dark){.band-scene .cloud{fill:rgba(199,214,230,.12)}}
"""

SUB_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="keywords" content="{kw}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="https://bhasaly.com/og-image.png?v=3">
<meta property="og:site_name" content="Bhasaly">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="https://bhasaly.com/og-image.png?v=3">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{fontlink}" rel="stylesheet">
<script type="application/ld+json">{jsonld}</script>
<style>
{css}
{band_css}.sub-hero{{padding:26px 0 6px}}
.sub-hero p{{font-size:16.5px;color:var(--soft);margin:0 0 20px;max-width:620px}}
.crumb{{font-size:13.5px;color:var(--soft);margin:0 0 14px}}
.crumb a{{color:var(--soft)}}
.note{{background:var(--saffron-soft);border-radius:12px;padding:12px 15px;margin:0 0 14px;
font-size:14.5px;color:var(--ink)}}
.secd{{color:var(--soft);margin:0 0 12px;font-size:15px}}
.frame h3{{margin-top:26px}}
.frame .fs{{color:var(--soft);font-size:14.5px;margin:0 0 10px}}
button.atile{{font-family:inherit;cursor:pointer;transition:border-color .15s}}
button.atile:hover{{border-color:var(--saffron)}}
button.atile:active .native{{color:var(--saffron)}}
.pl{{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;
margin-right:8px;vertical-align:-7px;border:1px solid var(--line);border-radius:50%;
background:var(--card);cursor:pointer;padding:0}}
.pl svg{{width:14px;height:14px;fill:var(--saffron);stroke:none}}
.pl svg .w{{fill:none;stroke:var(--saffron);stroke-width:1.8;stroke-linecap:round}}
.pl:hover{{border-color:var(--saffron)}}
.print-btn{{display:inline-block;margin-left:10px;background:var(--card);color:var(--ink);
border:1px solid var(--line);font-weight:700;font-size:15px;padding:13px 24px;
border-radius:999px;cursor:pointer;font-family:inherit}}
.print-btn:hover{{border-color:var(--crimson)}}
/* a printed page is the reference sheet people take travelling: content only,
   no chrome, no scenery, rows kept whole */
@media print{{
  header,footer,.crumb,.band-scene,.cta,.pl,.print-btn,.no-print{{display:none!important}}
  body{{background:#fff}}
  .sub-band{{background:none;border-radius:0}}
  .sub-band-body{{padding:0 0 6px;max-width:none}}
  .band-title h1{{font-size:24pt}}
  .sub-hero{{padding:0 0 4px}}
  .block{{padding:12px 0}}
  tr{{page-break-inside:avoid}}
  td{{padding:6px 8px}}
  .note{{background:none;border:1px solid #bbb}}
}}
</style>
</head>
<body>
<header><div class="wrap">
  <a class="logo" href="/"><svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke-width="6.4" stroke-linecap="round"><path stroke="var(--crimson)" d="M12 18H34M43 18H52"/><path stroke="var(--saffron)" d="M12 32H23M32 32H52"/><path stroke="var(--teal)" d="M12 46H29M38 46H52"/></g></svg>Bhasaly</a>
  <a class="hlink" href="{applink}">Open Bhasaly &rarr;</a>
</div></header>

<main>
<section class="sub-band">
  <div class="sub-band-body">
    <p class="crumb"><a href="/">Bhasaly</a> &rsaquo; <a href="/learn-{slug}">Learn {name}</a> &rsaquo; {crumb}</p>
    <div class="band-title"><h1>{h1}</h1><span class="nat {ncls}"{dir_attr}>{native}</span></div>
  </div>
  {band_scene}
</section>

<div class="wrap">
<section class="sub-hero">
  <p>{intro}</p>
  <a class="cta" href="{applink}">{cta}</a>
  <button type="button" class="print-btn" onclick="window.print()">{printlabel}</button>
</section>

{body}

<section class="block no-print">
  <h2>Learn another language</h2>
  <p class="lead">Bhasaly teaches under-served Asian languages.</p>
  <div class="others">{other_links}</div>
</section>

<div class="endcta no-print"><a class="cta" href="{applink}">{cta}</a></div>
</div></main>

<footer><div class="wrap">
  &copy; {year} Bhasaly &middot; <a href="/">bhasaly.com</a> &middot;
  <a href="/learn-{slug}">Learn {name}</a> &middot;
  <a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a>
</div></footer>

<script>
/* recorded clips, straight from this site's own audio dir — same content-hashed
   files the app plays; no clip for an element means it renders without data-k */
(function(){{var B='/{audio_base}/',C={{}};
document.addEventListener('click',function(e){{
  var t=e.target.closest('[data-k]');if(!t)return;
  var k=t.getAttribute('data-k'),a=C[k]||(C[k]=new Audio(B+k+'.mp3'));
  a.currentTime=0;a.play();}});
}})();
</script>
</body>
</html>
"""


def sub_jsonld(name, url, crumb_name, slug, faq=None):
    crumbs = {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Bhasaly", "item": ORIGIN + "/"},
            {"@type": "ListItem", "position": 2, "name": "Learn %s" % name,
             "item": "%s/learn-%s" % (ORIGIN, slug)},
            {"@type": "ListItem", "position": 3, "name": crumb_name, "item": url},
        ],
    }
    out = [crumbs]
    if faq:
        out.append({"@context": "https://schema.org", "@type": "FAQPage",
                    "mainEntity": [{"@type": "Question", "name": q,
                                    "acceptedAnswer": {"@type": "Answer", "text": a}}
                                   for q, a in faq]})
    return json.dumps(out, ensure_ascii=False, separators=(',', ':'))


def sub_shell(d, others, palette_css, ne_band, **kw):
    """Common wiring for both sub-page types."""
    code = d['code']
    nat_fam, nat_lh = native_css(code)
    band_scene = ('<svg class="band-scene" viewBox="0 0 1200 200" '
                  'preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" '
                  'aria-hidden="true">%s</svg>' % (d.get('band') or ne_band))
    return SUB_TEMPLATE.format(
        css=CSS.format(palette=palette_css, natfam=nat_fam, natlh=nat_lh),
        band_css=BAND_CSS, band_scene=band_scene, audio_base=audio_dir(code),
        fontlink=esc(font_link(code)),
        slug=SLUG[code], name=esc(d['name']), code=code,
        ncls="native", dir_attr=(' dir="rtl"' if code in RTL else ' dir="auto"'),
        other_links="\n".join('<a href="/learn-%s">%s</a>' % (SLUG[o['code']], esc(o['name']))
                              for o in others),
        year=datetime.date.today().year, **kw)


def alphabet_page(d, others, palette_css, ne_band):
    code, name = d['code'], d['name']
    slug = SLUG[code]
    sname = SCRIPT_NAME.get(code, name + ' script')
    url = "%s/%s-alphabet" % (ORIGIN, slug)
    man = load_manifest(code)
    nv, nc, nn = len(d['vowels']), len(d['cons']), len(d['nums'])
    title = "%s Alphabet — All %d Letters with Audio | Bhasaly" % (name, nv + nc)
    desc = ("The complete %s alphabet: %d vowels and %d consonants with romanization, "
            "plus the %s numerals 0-9. Tap any letter in Bhasaly to hear it pronounced."
            % (name, nv, nc, name))
    kw = ("%s alphabet, %s letters, %s script, %s alphabet chart, %s vowels, "
          "%s consonants, %s numbers, read %s, %s pronunciation"
          % ((name,) * 9)).lower()
    faq = [
        ("How many letters are in the %s alphabet?" % name,
         "This chart lists %d vowels and %d consonants — %d letters in total — plus the "
         "ten numerals." % (nv, nc, nv + nc)),
        ("Can I hear how each %s letter sounds?" % name,
         "Yes. Open the alphabet in Bhasaly and tap any letter to play a recorded clip of "
         "its sound. No account is needed."),
        ("What is the best way to learn the %s?" % sname,
         "One letter at a time, with sound, then straight into real words. Bhasaly's "
         "%s course starts with the script and builds from there." % name),
    ]
    body = """
<section class="block">
  <h2>Vowels</h2>
  <p class="lead">{nv} letters. The romanization under each letter is how it sounds, not a spelling rule.</p>
  <div class="agrid">{vg}</div>
</section>

<section class="block">
  <h2>Consonants</h2>
  <p class="lead">{nc} letters, in the order the course teaches them.</p>
  <div class="agrid">{cg}</div>
</section>

<section class="block">
  <h2>Numerals</h2>
  <p class="lead">Digits 0-9 as they are written in {name}.</p>
  <div class="agrid">{ng}</div>
</section>

<section class="block no-print">
  <h2>Common questions</h2>
  {faq_html}
</section>""".format(
        nv=nv, nc=nc, name=esc(name),
        vg=alpha_grid(d['vowels'], "native", ' dir="rtl"' if code in RTL else ' dir="auto"', man),
        cg=alpha_grid(d['cons'], "native", ' dir="rtl"' if code in RTL else ' dir="auto"', man),
        ng=alpha_grid(d['nums'], "native", ' dir="auto"', man),
        faq_html="\n  ".join(
            '<details class="faq"><summary>%s</summary><p>%s</p></details>' % (esc(q), esc(a))
            for q, a in faq))

    return sub_shell(
        d, others, palette_css, ne_band,
        title=esc(title), desc=esc(desc), kw=esc(kw), url=esc(url),
        applink="/?lang=%s&amp;v=alphabet" % code,
        crumb="Alphabet", h1="The %s alphabet" % esc(name), native=esc(d['nativeName']),
        intro=esc("Every letter of the %s, with its sound written out. Tap any letter "
                  "to hear it — the whole chart is recorded." % sname),
        cta="Hear every letter &rarr;", printlabel="Print this chart", body=body,
        jsonld=sub_jsonld(name, url, "%s alphabet" % name, slug, faq))


def phrases_page(d, others, palette_css, ne_band):
    code, name = d['code'], d['name']
    slug, t = SLUG[code], d['trip']
    url = "%s/%s-phrases" % (ORIGIN, slug)
    dir_attr = ' dir="rtl"' if code in RTL else ' dir="auto"'
    total = sum(len(s['lines']) for s in t['sections'])
    title = "%s Phrases for Travellers — %d Useful Lines | Bhasaly" % (name, total)
    desc = ("%d %s phrases a visitor actually needs — greetings, food, prices, directions "
            "and the replies you will hear back. Romanized, with recorded audio."
            % (total, name))
    kw = ("%s phrases, %s for travellers, useful %s phrases, %s greetings, "
          "%s travel phrases, basic %s, common %s words, %s phrasebook"
          % ((name,) * 8)).lower()

    man = load_manifest(code)

    def play_btn(native):
        k = fnv1a_py(native)
        if k not in man:
            return ''
        return ('<button type="button" class="pl" data-k="%s" aria-label="%s — play audio">'
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5L13 19V5L7.5 9.5Z"/>'
                '<path class="w" d="M16 9a4.2 4.2 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg></button>'
                % (k, esc(native)))

    parts = []
    for s in t['sections']:
        rows = "\n".join(
            '<tr><td class="rom">%s%s</td><td>%s</td><td class="native"%s>%s</td></tr>'
            % (play_btn(l[0]), esc(l[1]), esc(l[2]), dir_attr, esc(l[0])) for l in s['lines'])
        # s['note'] is authored HTML (<b>…</b>) — emitted raw, exactly as the app renders it
        note = '<div class="note">%s</div>' % s['note'] if s['note'] else ''
        parts.append(
            '<section class="block">\n  <h2>%s</h2>\n  <p class="secd">%s</p>\n  %s'
            '\n  <table>%s</table>\n</section>' % (esc(s['t']), esc(s['d']), note, rows))

    for f in t.get('frames', []):
        rows = "\n".join(
            '<tr><td class="rom">%s%s</td><td>%s</td><td class="native"%s>%s</td></tr>'
            % (play_btn(i[0] + f['s']),
               esc((i[1] + f['sr']).strip()),
               esc(f['en'].replace('___', i[2])),
               dir_attr, esc(i[0] + f['s'])) for i in f['items'])
        parts.append(
            '<section class="block frame">\n  <h2>%s</h2>\n  <p class="fs">%s</p>'
            '\n  <table>%s</table>\n</section>' % (esc(f['t']), esc(f['en']), rows))

    faq = [
        ("How do you say hello in %s?" % name,
         "%s. The greetings section above has the full set, including the reply you are "
         "likely to hear back." % (t['sections'][0]['lines'][0][1].capitalize()
                                   if t['sections'] and t['sections'][0]['lines'] else 'See above')),
        ("Do I need an account to use these %s phrases?" % name,
         "No. Every phrase on this page is open to read, and you can hear all of them in "
         "Bhasaly without signing up."),
        ("Do I need to read the %s script to use these?" % name,
         "No. Every line is romanized first, so you can say it straight away. The script is "
         "there alongside if you want to start reading it."),
    ]
    parts.append('<section class="block no-print">\n  <h2>Common questions</h2>\n  %s\n</section>'
                 % "\n  ".join(
                     '<details class="faq"><summary>%s</summary><p>%s</p></details>'
                     % (esc(q), esc(a)) for q, a in faq))

    return sub_shell(
        d, others, palette_css, ne_band,
        title=esc(title), desc=esc(desc), kw=esc(kw), url=esc(url),
        applink="/?lang=%s&amp;v=trip" % code,
        crumb="Phrases", h1="%s phrases for a short visit" % esc(name),
        native=esc(t['native']),
        intro=esc("The lines a visitor actually uses, and the ones you will hear back. "
                  "Romanized first so you can say them today. Every phrase is recorded — "
                  "tap the speaker to hear it."),
        cta="Hear these phrases &rarr;", printlabel="Print this phrasebook",
        body="\n\n".join(parts),
        jsonld=sub_jsonld(name, url, "%s phrases" % name, slug, faq))


# --- 404 -----------------------------------------------------------------
# Netlify serves 404.html automatically for any missing path. Same look as
# every other page (band + palette), noindex, and NOT in the sitemap or the
# lastmod store — it is not an indexable URL.
NOTFOUND_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found | Bhasaly</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{fontlink}" rel="stylesheet">
<style>
{css}
{band_css}
.sub-hero{{padding:26px 0 6px}}
.sub-hero p{{font-size:16.5px;color:var(--soft);margin:0 0 20px;max-width:620px}}
</style>
</head>
<body>
<header><div class="wrap">
  <a class="logo" href="/"><svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke-width="6.4" stroke-linecap="round"><path stroke="var(--crimson)" d="M12 18H34M43 18H52"/><path stroke="var(--saffron)" d="M12 32H23M32 32H52"/><path stroke="var(--teal)" d="M12 46H29M38 46H52"/></g></svg>Bhasaly</a>
  <a class="hlink" href="/">Open Bhasaly &rarr;</a>
</div></header>

<main>
<section class="sub-band">
  <div class="sub-band-body">
    <div class="band-title"><h1>Page not found</h1></div>
  </div>
  {band_scene}
</section>

<div class="wrap">
<section class="sub-hero">
  <p>That address doesn&rsquo;t exist on Bhasaly &mdash; it may have been mistyped,
  or the page has moved. Everything on the site is one click away:</p>
  <a class="cta" href="/">Open Bhasaly</a>
</section>

<section class="block">
  <h2>The courses</h2>
  <div class="others">{course_links}</div>
</section>
</div>
</main>

<footer><div class="wrap">
  &copy; {year} Bhasaly &middot; <a href="/">bhasaly.com</a> &middot;
  <a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a>
</div></footer>
</body>
</html>
"""


def notfound_page(langs, palette_css, ne_band):
    band_scene = ('<svg class="band-scene" viewBox="0 0 1200 200" '
                  'preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" '
                  'aria-hidden="true">%s</svg>' % ne_band)
    return NOTFOUND_TEMPLATE.format(
        css=CSS.format(palette=palette_css,
                       natfam="'Plus Jakarta Sans', system-ui, sans-serif", natlh="1.5"),
        band_css=BAND_CSS, band_scene=band_scene,
        fontlink=esc(font_link('uz')),
        course_links="\n".join('<a href="/learn-%s">%s</a>' % (SLUG[d['code']], esc(d['name']))
                                for d in langs),
        year=datetime.date.today().year)


def git_date(path):
    """ISO date of the last commit touching path. Used only to seed the
    lastmod store on its first run, so pages that already exist keep an
    honest date instead of all claiming to have changed today."""
    try:
        out = subprocess.check_output(['git', 'log', '-1', '--format=%cs', '--', path],
                                      cwd=ROOT, stderr=subprocess.DEVNULL).decode().strip()
        return out or TODAY
    except Exception:
        return TODAY


def lastmod_store(pages):
    """pages: [(url, generated_content, seed_path)] -> {url: iso date}.

    A URL's date moves ONLY when the sha256 of its content changes. Unchanged
    pages keep their stored date; unseen pages are seeded from git history.
    The store lives in .lastmod.json and is committed with the pages.
    """
    fn = os.path.join(ROOT, LASTMOD_DB)
    try:
        with open(fn, encoding='utf-8') as f:
            db = json.load(f)
    except Exception:
        db = {}
    dates, out = {}, {}
    for url, content, seed_path in pages:
        h = hashlib.sha256(content.encode('utf-8')).hexdigest()
        prev = db.get(url)
        if prev and prev[0] == h:
            date = prev[1]              # byte-identical — the page did not change
        elif prev:
            date = TODAY                # genuinely new content
        else:
            date = git_date(seed_path)  # first run — seed from history
        dates[url], out[url] = date, [h, date]
    with open(fn, 'w', encoding='utf-8') as f:
        json.dump(out, f, indent=1, sort_keys=True)
        f.write('\n')
    return dates


def sitemap(langs, dates):
    urls = ['  <url>\n    <loc>%s/</loc>\n    <lastmod>%s</lastmod>\n'
            '    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>'
            % (ORIGIN, dates[ORIGIN + '/'])]
    for d in langs:
        url = '%s/learn-%s' % (ORIGIN, SLUG[d['code']])
        urls.append('  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n'
                    '    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>'
                    % (url, dates[url]))
    # reference pages: standalone search targets ("khmer alphabet",
    # "nepali phrases"), so they carry real priority, not an afterthought's
    for d in langs:
        for suffix in ('alphabet', 'phrases'):
            url = '%s/%s-%s' % (ORIGIN, SLUG[d['code']], suffix)
            if url not in dates:
                continue          # no alphabet page for a Latin-script pack
            urls.append('  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n'
                        '    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>'
                        % (url, dates[url]))
    for page_name in ('privacy', 'terms'):
        url = '%s/%s' % (ORIGIN, page_name)
        urls.append('  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n'
                    '    <changefreq>yearly</changefreq>\n    <priority>0.2</priority>\n  </url>'
                    % (url, dates[url]))
    return ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "\n".join(urls) + "\n</urlset>\n")


def main():
    raw = subprocess.check_output(
        ['osascript', '-l', 'JavaScript', 'landing_data.js']).decode('utf-8')
    langs = json.loads(raw)
    index_html = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
    palettes, ne_hero, ne_band = scene_assets(index_html)
    # the app itself is the content behind "/" — its own bytes date that URL
    pages = [(ORIGIN + '/', index_html, 'index.html')]
    for d in langs:
        others = [o for o in langs if o['code'] != d['code']]
        html_out = page(d, others, palettes[d['code']], ne_hero)
        slug = SLUG[d['code']]
        fn = 'learn-%s.html' % slug
        with open(os.path.join(ROOT, fn), 'w', encoding='utf-8') as f:
            f.write(html_out)
        pages.append(('%s/learn-%s' % (ORIGIN, slug), html_out, fn))

        # /<slug>-alphabet — skipped for Latin packs (uz, jv): a chart of the
        # Latin letters teaches nothing and would be a thin page.
        if not d['latin'] and (d['vowels'] or d['cons']):
            sub = alphabet_page(d, others, palettes[d['code']], ne_band)
            sfn = '%s-alphabet.html' % slug
            with open(os.path.join(ROOT, sfn), 'w', encoding='utf-8') as f:
                f.write(sub)
            pages.append(('%s/%s-alphabet' % (ORIGIN, slug), sub, sfn))

        # /<slug>-phrases — every pack ships a trip phrasebook
        if d.get('trip') and d['trip']['sections']:
            sub = phrases_page(d, others, palettes[d['code']], ne_band)
            sfn = '%s-phrases.html' % slug
            with open(os.path.join(ROOT, sfn), 'w', encoding='utf-8') as f:
                f.write(sub)
            pages.append(('%s/%s-phrases' % (ORIGIN, slug), sub, sfn))
    with open(os.path.join(ROOT, '404.html'), 'w', encoding='utf-8') as f:
        f.write(notfound_page(langs, palettes['ne'], ne_band))
    # hand-written, not generated — listed here only so the lastmod store
    # dates them from their own bytes like everything else
    for page_name in ('privacy', 'terms'):
        fn = page_name + '.html'
        try:
            body = open(os.path.join(ROOT, fn), encoding='utf-8').read()
        except IOError:
            continue
        pages.append(('%s/%s' % (ORIGIN, page_name), body, fn))
    dates = lastmod_store(pages)
    with open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write(sitemap(langs, dates))
    print('wrote %d pages + sitemap.xml' % (len(pages) - 1))  # "/" is the app, not written here
    for url, _, _ in pages:
        print('  %-44s lastmod %s' % (url, dates[url]))


if __name__ == '__main__':
    main()
