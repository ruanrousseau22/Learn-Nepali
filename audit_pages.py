#!/usr/bin/env python3
"""Static quality sweep over every shipped page: SEO hygiene (title/desc
lengths, canonical, single h1, JSON-LD parses, og tags, no duplicates),
link integrity, sitemap coverage both directions, page weight, and the
static pages' contrast pairs. Run before a deploy:  python3 audit_pages.py
Zero PROBLEMS is the passing state (Aug 2026)."""
import glob, json, os, re, sys, html

ROOT = os.getcwd()
# 404.html is deliberately noindex, off-sitemap and og-less; skip it.
pages = sorted(p for p in glob.glob('*.html') if p != '404.html')

def text_of(src):
    src = re.sub(r'<script.*?</script>', ' ', src, flags=re.S)
    src = re.sub(r'<style.*?</style>', ' ', src, flags=re.S)
    src = re.sub(r'<[^>]+>', ' ', src)
    return html.unescape(re.sub(r'\s+', ' ', src)).strip()

# pretty path -> file mapping used by the site
def resolves(href):
    if href.startswith('#') or href.startswith('http') or href.startswith('mailto'):
        return None  # handled elsewhere
    p = href.split('#')[0]
    q = ''
    if '?' in p:
        p, q = p.split('?', 1)
    if p in ('', '/'):
        return os.path.exists('index.html')
    p = p.lstrip('/')
    if p.endswith('.html'):
        return os.path.exists(p)
    return os.path.exists(p) or os.path.exists(p + '.html')

problems, externals = [], {}
rows = []
titles, descs = {}, {}

for fn in pages:
    src = open(fn, encoding='utf-8').read()
    t = re.search(r'<title>(.*?)</title>', src, re.S)
    d = re.search(r'<meta name="description" content="([^"]*)"', src)
    canon = re.search(r'<link rel="canonical" href="([^"]*)"', src)
    h1s = re.findall(r'<h1[ >]', src)
    lang = re.search(r'<html[^>]*\blang="([^"]*)"', src)
    viewport = 'name="viewport"' in src
    ogt = 'property="og:title"' in src
    ogi = 'property="og:image"' in src
    fav = 'rel="icon"' in src
    title = html.unescape(t.group(1).strip()) if t else ''
    desc = html.unescape(d.group(1)) if d else ''
    titles.setdefault(title, []).append(fn)
    descs.setdefault(desc, []).append(fn)

    lds, ldbad = 0, 0
    for m in re.findall(r'<script type="application/ld\+json">(.*?)</script>', src, re.S):
        lds += 1
        try:
            json.loads(m)
        except Exception:
            ldbad += 1

    bad_links = []
    for href in re.findall(r'href="([^"]+)"', src):
        if "'" in href:
            continue          # JS string concatenation inside the app script
        if href.startswith('http'):
            externals.setdefault(href, []).append(fn)
            continue
        r = resolves(href)
        if r is False:
            bad_links.append(href)

    words = len(text_of(src).split())
    kb = len(src.encode()) // 1024

    is_app = fn == 'index.html'
    if not title: problems.append((fn, 'no <title>'))
    if len(title) > 62 and not is_app: problems.append((fn, 'title %d chars (display limit ~60): %s' % (len(title), title[:70])))
    if not desc: problems.append((fn, 'no meta description'))
    elif len(desc) > 165: problems.append((fn, 'description %d chars (truncates ~160)' % len(desc)))
    elif len(desc) < 70: problems.append((fn, 'description only %d chars' % len(desc)))
    if not canon: problems.append((fn, 'no canonical'))
    if len(h1s) != 1 and not is_app: problems.append((fn, '%d <h1> tags' % len(h1s)))
    if not lang: problems.append((fn, 'no lang attr on <html>'))
    if not viewport: problems.append((fn, 'no viewport meta'))
    if not ogt: problems.append((fn, 'no og:title'))
    if not ogi: problems.append((fn, 'no og:image'))
    if not fav: problems.append((fn, 'no favicon link'))
    if ldbad: problems.append((fn, '%d JSON-LD blocks fail to parse' % ldbad))
    if lds == 0 and not is_app and fn not in ('privacy.html', 'terms.html'):
        problems.append((fn, 'no JSON-LD'))
    for b in bad_links: problems.append((fn, 'dead internal link: %s' % b))
    rows.append((fn, len(title), len(desc), words, kb, lds))

for title, fns in titles.items():
    if title and len(fns) > 1: problems.append((','.join(fns), 'DUPLICATE title: %s' % title[:60]))
for desc, fns in descs.items():
    if desc and len(fns) > 1: problems.append((','.join(fns), 'DUPLICATE description'))

# sitemap coverage both directions
sm = open('sitemap.xml').read()
sm_urls = set(re.findall(r'<loc>https://bhasaly.com(/[^<]*)</loc>', sm))
disk = set()
for fn in pages:
    if fn == 'index.html': continue
    disk.add('/' + fn[:-5])
missing = disk - sm_urls
extra = {u for u in sm_urls if u != '/'} - disk
if missing: problems.append(('sitemap.xml', 'pages not in sitemap: %s' % sorted(missing)))
if extra: problems.append(('sitemap.xml', 'sitemap URLs with no page: %s' % sorted(extra)))

robots = open('robots.txt').read()
if 'Sitemap:' not in robots: problems.append(('robots.txt', 'no Sitemap: line'))

# contrast of the static pages' key text colours (WCAG relative luminance)
def lum(hexs):
    r, g, b = (int(hexs[i:i+2], 16)/255 for i in (0, 2, 4))
    f = lambda c: c/12.92 if c <= 0.03928 else ((c+0.055)/1.055)**2.4
    return 0.2126*f(r) + 0.7152*f(g) + 0.0722*f(b)
def ratio(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la+0.05)/(lb+0.05)
pairs = [('rom saffron 9C5E0D on paper EFF4FB', '9C5E0D', 'EFF4FB'),
         ('soft 5B6B7D on paper EFF4FB', '5B6B7D', 'EFF4FB'),
         ('crimson C2362E on paper EFF4FB', 'C2362E', 'EFF4FB'),
         ('dark saffron E7AD5E on card 1C2630', 'E7AD5E', '1C2630'),
         ('dark soft 93A5B7 on paper 0F1419', '93A5B7', '0F1419')]
contrast = [(n, round(ratio(a, b), 2)) for n, a, b in pairs]

print('%-28s title desc words   kb  ld' % 'page')
for fn, tl, dl, w, kb, lds in rows:
    print('%-28s %4d %4d %6d %4d %3d' % (fn, tl, dl, w, kb, lds))
print('\nCONTRAST (need 4.5 body / 3.0 large):')
for n, r in contrast: print('  %-38s %s' % (n, r))
print('\nEXTERNAL link targets: %d unique' % len(externals))
for u in sorted(externals): print('  ' + u)
print('\nPROBLEMS (%d):' % len(problems))
for fn, p in problems: print('  %-24s %s' % (fn, p))
