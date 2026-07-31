/* Bhasaly service worker — installability + offline + a persistent audio cache.
 *
 * Caching strategy is deliberately split, because the wrong default here is
 * dangerous in both directions: cache-first on the app would pin learners to
 * a stale build forever, and network-first on audio would throw away the one
 * thing genuinely worth keeping (16k+ immutable clips).
 *
 *   navigation + lang/faith packs + audio manifests -> NETWORK FIRST
 *       A deploy is picked up on the next load; the cache is only a fallback
 *       for being offline. This also keeps `devserver.py` honest — see the
 *       no-store note in CLAUDE.md; a cache-first SW would recreate exactly
 *       the stale-file trap that rule exists to prevent.
 *
 *   audio clips + fonts + icons -> CACHE FIRST
 *       Clip filenames are the FNV-1a hash of the phrase, so a given URL can
 *       never change meaning. Same for the versioned Google Font files.
 *
 * Bump CACHE_VERSION to invalidate everything.
 */
const CACHE_VERSION = 'v1';
const SHELL  = 'bhasaly-shell-' + CACHE_VERSION;
const STATIC = 'bhasaly-static-' + CACHE_VERSION;
const AUDIO  = 'bhasaly-audio-' + CACHE_VERSION;

/* the minimum needed to boot offline; packs arrive via runtime caching
   because a learner only ever needs the one language they study */
const SHELL_URLS = ['/', '/manifest.webmanifest', '/favicon.svg', '/favicon.png'];

/* keep the audio cache from growing without bound on a shared device.
   Cache.keys() resolves in insertion order, so dropping from the front is a
   plain FIFO — good enough, and far simpler than tracking real LRU. */
const AUDIO_MAX = 3000;
const AUDIO_TRIM = 500;

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(SHELL)
      .then(function (c) { return c.addAll(SHELL_URLS); })
      .catch(function () { /* a failed precache must not block activation */ })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (n) {
        /* drop caches from older CACHE_VERSIONs, leave other apps alone */
        if (n.indexOf('bhasaly-') === 0 && n.indexOf(CACHE_VERSION) < 0) return caches.delete(n);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isAudio(url) {
  return /\.mp3$/i.test(url.pathname);
}
function isFontOrIcon(url) {
  return url.hostname === 'fonts.gstatic.com' ||
         url.hostname === 'fonts.googleapis.com' ||
         /\.(svg|png|ico|webmanifest)$/i.test(url.pathname);
}
/* course data and the per-language audio manifests: correctness beats speed,
   these must reflect the current deploy */
function isFreshCritical(url) {
  return /^\/(lang|faith)\//.test(url.pathname) || /manifest\.json$/.test(url.pathname);
}

async function trimAudioCache(cache) {
  const keys = await cache.keys();
  if (keys.length <= AUDIO_MAX) return;
  for (let i = 0; i < AUDIO_TRIM && i < keys.length; i++) await cache.delete(keys[i]);
}

async function cacheFirst(req, cacheName, trim) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  /* opaque (no-cors) responses still cache usefully for fonts/audio; only
     skip genuine errors so a 404 never gets pinned */
  if (res && (res.ok || res.type === 'opaque')) {
    cache.put(req, res.clone()).then(function () { if (trim) trimAudioCache(cache); }).catch(function () {});
  }
  return res;
}

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone()).catch(function () {});
    return res;
  } catch (err) {
    const hit = await cache.match(req);
    if (hit) return hit;
    /* offline with nothing cached: for a navigation, fall back to the shell
       so the app still opens rather than showing the browser error page */
    if (req.mode === 'navigate') {
      const shell = await caches.match('/');
      if (shell) return shell;
    }
    throw err;
  }
}

self.addEventListener('fetch', function (e) {
  const req = e.request;
  /* Only GET. The feedback form POSTs to "/" — intercepting that would
     silently break the one channel users have to report bad content. */
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  /* never touch auth or analytics traffic */
  if (/supabase|umami|plausible/.test(url.hostname) || /supabase/.test(url.pathname)) return;

  if (req.mode === 'navigate')      { e.respondWith(networkFirst(req, SHELL));        return; }
  if (isAudio(url))                 { e.respondWith(cacheFirst(req, AUDIO, true));    return; }
  if (isFreshCritical(url))         { e.respondWith(networkFirst(req, STATIC));       return; }
  if (isFontOrIcon(url))            { e.respondWith(cacheFirst(req, STATIC, false));  return; }
  /* everything else same-origin: network first, cache as an offline fallback */
  if (url.origin === self.location.origin) e.respondWith(networkFirst(req, STATIC));
});
