#!/usr/bin/env python3
"""Post-deploy verification — the live-site half of the quality toolbox
(audit_pages.py is the pre-deploy half). Run AFTER every deploy:

    python3 verify_deploy.py

Checks the things a deploy can silently break: security headers, caching
split, the old-domain 301, the custom 404, og cards, playable tiles, every
sitemap URL, the IndexNow key, and the PWA files. Zero FAILs is the passing
state; exits non-zero otherwise so it can guard a script.
"""
import re, sys, urllib.request

ORIGIN = 'https://bhasaly.com'
FAILS = []


def req(url, method='GET'):
    r = urllib.request.Request(url, method=method, headers={'User-Agent': 'bhasaly-verify'})
    try:
        with urllib.request.urlopen(r, timeout=20) as resp:
            return resp.status, dict((k.lower(), v) for k, v in resp.headers.items()), \
                (resp.read() if method == 'GET' else b'')
    except urllib.error.HTTPError as e:
        return e.code, dict((k.lower(), v) for k, v in e.headers.items()), \
            (e.read() if method == 'GET' else b'')
    except Exception as e:
        return 0, {'error': str(e)}, b''


def check(label, ok, detail=''):
    print('%s %-52s %s' % ('PASS' if ok else 'FAIL', label, detail if not ok else ''))
    if not ok:
        FAILS.append(label)


# --- root: status + the security-header set ---------------------------------
st, h, body = req(ORIGIN + '/')
check('/ responds 200', st == 200, 'status %s' % st)
for name in ('strict-transport-security', 'x-content-type-options',
             'referrer-policy', 'x-frame-options', 'permissions-policy'):
    check('header: ' + name, name in h)
check('/ description present',
      b'name="description"' in body and b'no account needed' in body.lower())

# --- caching split: clips immutable, manifests revalidating ----------------
st, h, body = req(ORIGIN + '/audio/manifest.json')
check('audio manifest 200 + revalidate', st == 200 and 'max-age=0' in h.get('cache-control', ''),
      h.get('cache-control', ''))
first_key = re.search(rb'"([0-9a-f]{8})"', body)
if first_key:
    st, h, _ = req(ORIGIN + '/audio/%s.mp3' % first_key.group(1).decode(), method='HEAD')
    check('a clip serves immutable', st == 200 and 'immutable' in h.get('cache-control', ''),
          '%s %s' % (st, h.get('cache-control', '')))
else:
    check('a clip serves immutable', False, 'no key found in manifest')

# --- old domain 301 (no-redirect fetch so we see the 301 itself) ------------
import http.client
c = http.client.HTTPSConnection('sajilonepali.com', timeout=20)
c.request('HEAD', '/')
r = c.getresponse()
check('sajilonepali.com sends 301 -> bhasaly.com',
      r.status in (301, 308) and 'bhasaly.com' in (r.getheader('location') or ''),
      '%s %s' % (r.status, r.getheader('location')))
c.close()

# --- custom 404 -------------------------------------------------------------
st, h, body = req(ORIGIN + '/definitely-not-a-page')
check('custom 404 serves', st == 404 and b'Page not found | Bhasaly' in body,
      'status %s' % st)

# --- sitemap: fetch and HEAD every URL --------------------------------------
st, h, body = req(ORIGIN + '/sitemap.xml')
urls = re.findall(r'<loc>([^<]+)</loc>', body.decode('utf-8', 'replace'))
check('sitemap fetches (%d URLs)' % len(urls), st == 200 and len(urls) >= 34)
bad = []
for u in urls:
    stu, _, _ = req(u, method='HEAD')
    if stu != 200:
        bad.append('%s -> %s' % (u, stu))
check('every sitemap URL returns 200', not bad, '; '.join(bad[:3]))

# --- og cards ---------------------------------------------------------------
bad = []
for slug in ('nepali', 'khmer', 'burmese', 'bengali', 'sinhala', 'lao',
             'pashto', 'mongolian', 'urdu', 'uzbek', 'javanese'):
    stu, hu, _ = req(ORIGIN + '/og-%s.png' % slug, method='HEAD')
    if stu != 200 or 'image/png' not in hu.get('content-type', ''):
        bad.append(slug)
check('11 per-language og cards serve', not bad, ','.join(bad))
st, _, body = req(ORIGIN + '/learn-khmer')
check('learn-khmer references its card', b'og-khmer.png' in body)

# --- playable tiles ---------------------------------------------------------
st, _, body = req(ORIGIN + '/nepali-alphabet')
n = body.count(b'class="atile" data-k')
check('nepali-alphabet playable tiles (=55)', n == 55, 'found %d' % n)

# --- IndexNow key + PWA files ----------------------------------------------
st, _, body = req(ORIGIN + '/a622e1f54d0890bbb5540ba7811b006a.txt')
check('IndexNow key file live', st == 200 and b'a622e1f5' in body)
for path in ('/manifest.webmanifest', '/sw.js', '/favicon.svg', '/robots.txt'):
    stu, _, _ = req(ORIGIN + path, method='HEAD')
    check('%s serves' % path, stu == 200, 'status %s' % stu)

print()
if FAILS:
    print('%d FAILURES' % len(FAILS))
    sys.exit(1)
print('ALL CHECKS PASS')
