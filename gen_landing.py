# -*- coding: utf-8 -*-
"""Generate static, pre-rendered SEO landing pages — one per language — at
clean paths like /learn-sinhala. These are self-contained (inline CSS, no app
JS), so Google indexes the real vocabulary without running the SPA. Each page
deep-links into the app via /?lang=<code>.

Run from the repo root:  python3 scratchpad/gen_landing.py
Data comes from landing_data.js (JXA), so the pages always reflect
the live packs. Writes learn-<slug>.html at the repo root and rewrites
sitemap.xml.
"""
import html, json, os, subprocess, datetime

ROOT = os.getcwd()
LASTMOD = datetime.date.today().isoformat()
ORIGIN = "https://bhasaly.com"

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
    fams = ["Plus+Jakarta+Sans:wght@400;500;600;700"]
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


def alpha_grid(pairs, native_cls, dir_attr):
    tiles = []
    for r in pairs:
        tiles.append('<div class="atile"><span class="%s"%s>%s</span><span class="ar">%s</span></div>'
                     % (native_cls, dir_attr, esc(r[0]), esc(r[1])))
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


def page(d, others):
    code, name, native = d['code'], d['name'], d['nativeName']
    slug = SLUG[code]
    nat_fam, nat_lh = native_css(code)
    dir_attr = ' dir="rtl"' if code in RTL else ' dir="auto"'
    ncls = "native"
    url = "%s/learn-%s" % (ORIGIN, slug)
    title = "Learn %s — Lessons, Alphabet & Audio | Bhasaly" % name
    desc = ("Learn %s with Bhasaly: %d short lessons across %d levels, the alphabet, "
            "recorded audio, and the essential words and phrases — greetings, numbers and "
            "more. Works on any phone or computer." % (name, d['lessons'], d['zones']))
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
    <p class="lead">Every letter is taught with audio in the course. Vowels first, then consonants.</p>
    <h3>Vowels</h3>
    <div class="agrid">{v}</div>
    <h3>Consonants</h3>
    <div class="agrid">{c}</div>
  </section>""".format(sname=esc(SCRIPT_NAME.get(code, name + ' script')), v=v, c=c)

    intro_script = ("It is written in the Latin alphabet, so it is easy to start reading."
                    if d['latin'] else
                    "You will learn the %s one letter at a time." % SCRIPT_NAME.get(code, 'script'))

    faq_html = "\n".join(
        '<details class="faq"><summary>%s</summary><p>%s</p></details>' % (esc(q), esc(a))
        for q, a in faq_pairs(d))

    other_links = "\n".join(
        '<a href="/learn-%s">%s</a>' % (SLUG[o['code']], esc(o['name'])) for o in others)

    return TEMPLATE.format(
        title=esc(title), desc=esc(desc), kw=esc(kw), url=esc(url), slug=slug,
        fontlink=esc(font_link(code)), natfam=nat_fam, natlh=nat_lh,
        rtl=(' dir="rtl"' if code in RTL else ''),
        name=esc(name), native=esc(native), code=code,
        zones=d['zones'], topics=d['topics'], lessons=d['lessons'],
        desc_intro=("Bhasaly's %s course takes you from your very first words to "
                    "everyday conversation across %d levels — %d topics and %d short, "
                    "tap-based lessons (no typing required). %s Along the way you will pick "
                    "up essential greetings, numbers, and useful phrases, each with a "
                    "recorded audio clip. It runs in any browser on phone or computer, and "
                    "your progress saves automatically."
                    % (esc(name), d['zones'], d['topics'], d['lessons'], esc(intro_script))),
        essentials=essentials, numbers=numbers, alpha_block=alpha_block,
        faq_html=faq_html, other_links=other_links,
        jsonld=jsonld(d, name, slug, desc), year=datetime.date.today().year)


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
<meta property="og:image" content="https://bhasaly.com/og-image.png">
<meta property="og:site_name" content="Bhasaly">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="https://bhasaly.com/og-image.png">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{fontlink}" rel="stylesheet">
<script type="application/ld+json">{jsonld}</script>
<style>
:root{{--paper:#EFF4FB;--paper2:#E0EAF6;--ink:#1B2430;--soft:#5B6B7D;--crimson:#C2362E;
--saffron:#C67911;--saffron-soft:#FCEBCC;--teal:#0F8C74;--line:rgba(27,36,48,.10);--card:#fff;--tree:#2C5F3A;
--r:14px;--shadow:0 1px 2px rgba(27,36,48,.05),0 10px 26px -16px rgba(20,40,80,.30)}}
@media(prefers-color-scheme:dark){{:root{{--paper:#0F1419;--paper2:#19222C;--ink:#E9F0F7;--soft:#93A5B7;
--crimson:#E8836A;--saffron:#E7AD5E;--saffron-soft:#332A1C;--teal:#5FC6B0;--line:rgba(233,240,247,.12);
--card:#1C2630;--tree:#4FA06A;--shadow:0 1px 2px rgba(0,0,0,.25),0 12px 28px -18px rgba(0,0,0,.7)}}}}
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
.logo svg{{width:26px;height:26px;fill:var(--tree)}}
.hlink{{font-size:14.5px;font-weight:600;color:var(--crimson);text-decoration:none}}
.hero{{padding:56px 0 34px;text-align:center;background:
radial-gradient(1200px 400px at 50% -140px,var(--saffron-soft),transparent 70%)}}
.hero h1{{font-family:'Fraunces',Georgia,serif;font-size:clamp(34px,7vw,52px);line-height:1.04;
margin:0 0 6px;letter-spacing:-.02em}}
.hero .nat{{font-size:clamp(22px,5vw,30px);color:var(--saffron);margin:0 0 14px}}
.hero p{{font-size:17px;color:var(--soft);max-width:540px;margin:0 auto 26px}}
.cta{{display:inline-block;background:var(--crimson);color:#fff;text-decoration:none;font-weight:700;
font-size:17px;padding:14px 28px;border-radius:999px;box-shadow:var(--shadow)}}
.cta:hover{{filter:brightness(1.06)}}
.stats{{display:flex;gap:26px;justify-content:center;flex-wrap:wrap;margin-top:26px}}
.stat b{{display:block;font-size:26px;font-weight:700;color:var(--tree)}}
.stat span{{font-size:13px;color:var(--soft)}}
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
@media(max-width:520px){{td.native{{font-size:20px}}.hero{{padding:40px 0 26px}}}}
</style>
</head>
<body>
<header><div class="wrap">
  <a class="logo" href="/"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 4 L45 22 L39 22 L52 38 L44 38 L56 54 L36 54 L36 60 L28 60 L28 54 L8 54 L20 38 L12 38 L25 22 L19 22 Z"/></svg>Bhasaly</a>
  <a class="hlink" href="/?lang={code}">Open Bhasaly &rarr;</a>
</div></header>

<main>
<section class="hero"><div class="wrap">
  <h1>Learn {name}</h1>
  <div class="nat native"{rtl}>{native}</div>
  <p>Step-by-step lessons, the alphabet, and recorded audio &mdash; right in your browser.</p>
  <a class="cta" href="/?lang={code}">Start learning</a>
  <div class="stats">
    <div class="stat"><b>{zones}</b><span>levels</span></div>
    <div class="stat"><b>{topics}</b><span>topics</span></div>
    <div class="stat"><b>{lessons}</b><span>lessons</span></div>
    <div class="stat"><b>Audio</b><span>every word</span></div>
  </div>
</div></section>

<div class="wrap">
  <section class="block" style="border-top:none">
    <h2>About the course</h2>
    <p class="lead">{desc_intro}</p>
  </section>

  <section class="block">
    <h2>Essential {name} words &amp; phrases</h2>
    <p class="lead">The first words worth knowing &mdash; with pronunciation and meaning.</p>
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

  <section class="block">
    <h2>Learn another language</h2>
    <p class="lead">Bhasaly teaches under-served Asian languages.</p>
    <div class="others">{other_links}</div>
  </section>
</div>
</main>

<footer><div class="wrap">
  &copy; {year} Bhasaly &middot; <a href="/">bhasaly.com</a> &middot;
  <a href="/?lang={code}">Open the {name} course</a>
</div></footer>
</body>
</html>
"""


def sitemap(langs):
    urls = ['  <url>\n    <loc>%s/</loc>\n    <lastmod>%s</lastmod>\n'
            '    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>'
            % (ORIGIN, LASTMOD)]
    for d in langs:
        urls.append('  <url>\n    <loc>%s/learn-%s</loc>\n    <lastmod>%s</lastmod>\n'
                    '    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>'
                    % (ORIGIN, SLUG[d['code']], LASTMOD))
    return ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "\n".join(urls) + "\n</urlset>\n")


def main():
    raw = subprocess.check_output(
        ['osascript', '-l', 'JavaScript', 'landing_data.js']).decode('utf-8')
    langs = json.loads(raw)
    for d in langs:
        others = [o for o in langs if o['code'] != d['code']]
        html_out = page(d, others)
        fn = os.path.join(ROOT, 'learn-%s.html' % SLUG[d['code']])
        with open(fn, 'w', encoding='utf-8') as f:
            f.write(html_out)
    with open(os.path.join(ROOT, 'sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write(sitemap(langs))
    print('wrote %d landing pages + sitemap.xml' % len(langs))
    for d in langs:
        print('  /learn-%s' % SLUG[d['code']])


if __name__ == '__main__':
    main()
