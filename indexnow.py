# -*- coding: utf-8 -*-
"""Ping IndexNow so Bing, DuckDuckGo, Yandex and Seznam pick up changed pages
in hours instead of waiting weeks to be crawled.

**Google does NOT participate in IndexNow.** For Google, the sitemap plus
Search Console's Request Indexing remain the only levers.

RUN THIS AFTER DEPLOYING, never before. IndexNow fetches both the key file
and the submitted URLs from the LIVE site to verify them, so pinging before
the push just burns the submission on stale content.

    python3 indexnow.py            # URLs whose sitemap lastmod is today
    python3 indexnow.py --all      # every URL in sitemap.xml
    python3 indexnow.py <url> ...  # specific URLs
    python3 indexnow.py --dry-run  # print the payload, send nothing

The key file must stay at the site root and must be served as plain text.
Losing it (or renaming it) silently breaks every future ping with a 403 —
the key IS the proof of domain ownership.
"""
import datetime, json, os, sys, urllib.request, urllib.error
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.abspath(__file__))
ORIGIN = 'https://bhasaly.com'
HOST = 'bhasaly.com'
KEY = 'a622e1f54d0890bbb5540ba7811b006a'
ENDPOINT = 'https://api.indexnow.org/indexnow'   # shared endpoint: fans out to all participants
SITEMAP = os.path.join(ROOT, 'sitemap.xml')
NS = '{http://www.sitemaps.org/schemas/sitemap/0.9}'


def sitemap_entries():
    """[(loc, lastmod)] straight from the generated sitemap."""
    root = ET.parse(SITEMAP).getroot()
    out = []
    for u in root.findall(NS + 'url'):
        loc = u.find(NS + 'loc')
        mod = u.find(NS + 'lastmod')
        if loc is not None:
            out.append((loc.text, mod.text if mod is not None else None))
    return out


def check_key_file():
    """The key file must exist locally AND be live, or every ping 403s."""
    path = os.path.join(ROOT, KEY + '.txt')
    if not os.path.exists(path):
        sys.exit('MISSING %s.txt — IndexNow cannot verify ownership without it.' % KEY)
    if open(path, encoding='utf-8').read().strip() != KEY:
        sys.exit('%s.txt does not contain the key.' % KEY)
    try:
        with urllib.request.urlopen('%s/%s.txt' % (ORIGIN, KEY), timeout=15) as r:
            live = r.read().decode('utf-8').strip()
        if live != KEY:
            sys.exit('Key file is live but its contents are wrong: %r' % live[:40])
    except urllib.error.HTTPError as e:
        sys.exit('Key file is NOT live (%s). Deploy first — IndexNow reads it from the '
                 'live site to verify you own the domain.' % e.code)
    except Exception as e:
        sys.exit('Could not reach the key file: %s' % e)


def submit(urls, dry=False):
    payload = {'host': HOST, 'key': KEY,
               'keyLocation': '%s/%s.txt' % (ORIGIN, KEY),
               'urlList': urls}
    body = json.dumps(payload).encode('utf-8')
    if dry:
        print(json.dumps(payload, indent=1))
        return 0
    req = urllib.request.Request(
        ENDPOINT, data=body,
        headers={'Content-Type': 'application/json; charset=utf-8'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            code, text = r.status, r.read().decode('utf-8', 'replace')
    except urllib.error.HTTPError as e:
        code, text = e.code, e.read().decode('utf-8', 'replace')
    meanings = {200: 'OK — accepted', 202: 'Accepted — key validation pending',
                400: 'Bad request — malformed payload', 403: 'Forbidden — key not valid or not live',
                422: 'Unprocessable — a URL does not match the host, or the key is wrong',
                429: 'Rate limited — too many requests'}
    print('HTTP %s  %s' % (code, meanings.get(code, '?')))
    if text.strip():
        print(text.strip()[:300])
    return 0 if code in (200, 202) else 1


def main():
    args = [a for a in sys.argv[1:]]
    dry = '--dry-run' in args
    args = [a for a in args if a != '--dry-run']

    explicit = [a for a in args if a.startswith('http')]
    if explicit:
        urls = explicit
    elif '--all' in args:
        urls = [loc for loc, _ in sitemap_entries()]
    else:
        today = datetime.date.today().isoformat()
        urls = [loc for loc, mod in sitemap_entries() if mod == today]
        if not urls:
            print('Nothing changed today (per sitemap lastmod). '
                  'Use --all to resubmit everything.')
            return 0

    bad = [u for u in urls if not u.startswith(ORIGIN)]
    if bad:
        sys.exit('Refusing to submit URLs outside %s: %s' % (ORIGIN, bad[:3]))

    if not dry:
        check_key_file()
    print('Submitting %d URL(s) to IndexNow%s' % (len(urls), ' [dry run]' if dry else ''))
    for u in urls[:5]:
        print('  ' + u)
    if len(urls) > 5:
        print('  … and %d more' % (len(urls) - 5))
    return submit(urls, dry)


if __name__ == '__main__':
    sys.exit(main())
