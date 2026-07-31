# GROWTH — marketing & quality plan

The forward plan for **reach and polish**, as opposed to `ROADMAP.md` (which
tracked the ur/uz/jv course builds and is complete). Read alongside
`CLAUDE.md` for the standing rules any change here must respect —
particularly Golden rule 6: **never push without Ruan saying so.**

Written July 2026.

---

## The diagnosis

Bhasaly is eleven complete courses, ~3,700 lessons, **16,286 recorded audio
clips**, five faith stories in eleven languages, eleven phrasebooks, and a
validation discipline stricter than most commercial teams run. Build quality
is not the problem.

The problem is that almost nobody can find it, and there is no way to tell
whether anyone uses it. Measured July 2026:

| | finding |
|---|---|
| **Analytics** | none of any kind — visitor count unknown, completion unknown |
| **Search presence** | `bhasaly.com` returns nothing for its own brand name; an exact-phrase search for text on `/learn-nepali` returns nothing |
| **Indexable URLs** | 12 — the app is one URL with **no routing** (`pushState` count: 0) |
| **Invisible to search** | 11 alphabets, 11 phrasebooks, 55 faith stories, 3,700 lessons |
| **Page weight** | 270KB transferred, DOMContentLoaded 2.9s, `load` 4.1s |

Competitors ranking for "learn nepali" (NepaliGo, Ling, Live Lingua,
nepalgo.de) are not better products. They are findable ones.

**A twelfth language is the lowest-value next move available.** The
content-to-distribution ratio is already lopsided by an order of magnitude.

---

## Tier 0 — Fix the instruments ✅ DONE (July 2026)

Everything else is guesswork without this.

### 0.1 Analytics ✅ shipped, dormant until a provider is configured

`track(name, props)` near the top of the main script in `index.html`. It is a
**no-op until an analytics script loads** — verified: with no provider,
every instrumented path runs without throwing.

Provider-agnostic by design: it speaks both **Umami** (`umami.track`) and
**Plausible** (`window.plausible`), so switching costs nothing in this file.
Two commented `<script>` tags sit in `<head>` — uncomment ONE and fill in the
id.

**Recommended: Umami Cloud free tier** (3 sites, 100k events/month —
comfortably enough). Cookieless, GDPR-safe **without a consent banner**,
and supports custom events. Plausible (~$9/mo) is the more polished
alternative with identical properties.

> Why custom events and not a plain pageview counter: the app is a single
> URL with no routing, so a pageview counter would report exactly one number
> forever. Every question worth asking is a custom event. That requirement
> is what rules out the free pageview-only tools.

**Privacy rule — never break this:** props carry language codes, lesson ids,
step names and counts. Never an email, never free text, never an answer.
`feedback_sent` and `login_link_sent` deliberately count only.

Events instrumented (all verified firing with correct props):

| event | props | answers |
|---|---|---|
| `app_open` | lang, mode, deep, done, streak, returning | how many visits, which course, **first visit or return** |
| `view` | view, lang | which pages get used (this app's pageview; `exercise` omitted — `lesson_start` reports it better) |
| `lesson_start` | lang, step, zone, track, repeat | do people actually start |
| `lesson_complete` | lang, step, zone, track, repeat | do they finish |
| `zone_complete` | lang, zone, track | **the number that matters — how deep into a course people get** |
| `lang_switch` | from, to | which courses pull |
| `mode_switch` | to, lang | is faith mode found at all |
| `faith_story_open` | lang, story | which stories are read |
| `trip_cards` | lang | is the phrasebook used |
| `login_link_sent` | lang | does anyone want sync |
| `feedback_sent` | lang | is the feedback channel alive |

`deep:1` on `app_open` marks arrivals from a `/learn-X` landing page, which
is what connects SEO work to actual course starts.

**First numbers to look at, in order:** `app_open` count → `lesson_start` /
`app_open` (does the front door work) → `zone_complete{zone:1}` /
`lesson_start` (does the product work) → `returning:1` share (does anyone
come back).

### 0.2 Sitemap `lastmod` ✅ fixed

`gen_landing.py` set `LASTMOD = datetime.date.today()` and stamped it on all
12 URLs on every regeneration, whether or not a page changed. Google
de-trusts `lastmod` when it is consistently inaccurate — the sitemap was
actively training it to ignore the field.

Now **content-addressed**: `lastmod_store()` hashes the bytes behind each URL
and a date moves only when that hash changes. State lives in `.lastmod.json`
(committed alongside the pages). First run seeds from `git log` so existing
pages kept honest dates rather than all claiming to have changed today.

Verified: two consecutive runs produce zero churn; corrupting one stored hash
moves exactly one `<lastmod>`; all 11 landing pages stayed byte-identical.

### 0.3 Search Console — **Ruan's action, not automatable**

The verification meta tag is already in `index.html`, so the property exists.
Go read it. Wanted: indexed-page count (should be 12), impressions, and any
coverage errors. Five minutes, and it tells us whether Tier 3 is an
indexation problem or a content-volume problem.

Also worth adding Bing Webmaster Tools — free, and it feeds ChatGPT search.

### 0.4 `.claude/launch.json` ✅ fixed

It was running `python3 -m http.server`, which `CLAUDE.md` explicitly forbids
(heuristic caching serves stale files after edits — the trap that cost hours
once). Now runs `devserver.py`. Confirmed `no-store`.

---

## Tier 1 — Fix the front door

Do this before sending anyone. Batches into one Netlify push with Tier 0.

1. **The home page has no pitch.** A first-time visitor lands directly on the
   Nepali lesson path — nothing says what Bhasaly is, that it is free, that
   there are eleven languages, or that the audio is real recordings. The
   `/learn-nepali` pages do this well; the root URL, which is what gets
   shared and what ranks for the brand, does not. Minimal version: one
   value-prop line plus the language count, shown only to never-visited
   users (`app_open returning:0`), dismissed on first lesson start. Resist
   turning it into a splash screen — the clean landing is an asset.
2. **PWA / installability.** No `manifest.webmanifest`, no service worker. A
   daily-habit app that cannot sit on a phone home screen loses most of its
   retention to being forgotten. Gets: home-screen install, offline use of
   the current pack, persistent audio cache, no browser chrome. Biggest
   retention lever available and it is a few hours.
3. **Browser back is broken.** No routing and no `beforeunload` guard, so a
   back-press or mobile edge-swipe mid-lesson leaves the site and drops the
   session queue. Frequent accident on phones. Fixed by the routing in 3.3.
4. **Defer Supabase.** `index.html` loads 53KB of supabase-js on every
   anonymous visit for a login most people never click. Load it when the
   auth modal opens: ~20% off page weight and a faster DOMContentLoaded.

## Tier 2 — Go get users

SEO takes months; community posts get users tomorrow. Have Tier 0 measuring
and Tier 1 landed first, and ideally Tier 4 before a big push.

5. **The story only Bhasaly can tell: "I built a free course for a language
   no app covers."** Duolingo has no Uzbek, Javanese, Lao, Pashto,
   Mongolian, Sinhala or Khmer; Ling's are thin. That post writes itself for
   r/Nepal, r/Cambodia, r/Myanmar, r/bangladesh, r/srilanka, r/laos,
   r/Mongolia, r/Urdu, r/languagelearning. Post as the builder, honestly,
   **one subreddit at a time** — these communities field "how do I learn X?"
   weekly and have no good answer.
6. **Adjacent communities that convert:** expat and NGO Facebook groups for
   Nepal/Cambodia/Myanmar, trekking forums, Peace Corps alumni, TEFL-in-Asia
   groups, and diaspora parent groups — heritage-language learners are
   underserved and motivated.
7. **Get onto the lists that already rank.** Omniglot links out to learning
   resources for every script and ranks for all of them. The "8 Online Tools
   to Learn Nepali" roundups are one friendly email each.

## Tier 3 — Build the SEO surface

The data already exists and `gen_landing.py` already knows how to render it.
12 → ~35 URLs of genuinely unique content is mostly generation work.

8. **Static alphabet pages** — `/nepali-alphabet`, `/khmer-alphabet`, …
   "Devanagari chart", "Khmer alphabet" and friends are high-volume,
   low-competition searches, and there is a finished audio-enabled chart for
   eleven scripts that Google has never seen.
9. **Static phrasebook pages** — the `trip` packs are the most shareable
   asset in the product and are buried behind a tab. "Nepali phrases for
   trekkers" is what travellers actually search. A printable one-page PDF per
   language is a natural link magnet.
10. **Real URLs for the app** (`/khmer/alphabet` etc.) so the above deep-link
    into the right place instead of dumping everyone on the Nepali path —
    and so 1.3 fixes itself.

## Tier 4 — Legal & trust ✅ DONE (July 2026) — one manual step left

`/privacy` and `/terms` ship as static pages (in the sitemap, linked from the
app footer, from Settings, and from every landing-page footer), and Settings
gained a **Delete account** row that appears only when logged in.

**These drafts need Ruan's read — they are not legal advice.** Two things to
check specifically:

- **`hello@bhasaly.com` is used as the contact address on both pages.** It
  must actually receive mail, or be changed. Everything else routes through
  the in-app feedback form, which does work.
- The Analytics section describes cookieless aggregate counts. That is
  accurate the moment Tier 0.1 is switched on, and harmlessly
  over-discloses until then (over-disclosure is safe; the reverse is not).

### The one manual step: `delete_own_account`

Deleting the progress row works from the browser under the user's own RLS
policy. **Deleting the auth record cannot** — that needs the `service_role`
key, which must never exist in client code. The client calls an RPC instead;
until the function exists that call fails, and the UI says so rather than
claiming a full deletion.

Paste this into the Supabase SQL editor to close the loop:

```sql
create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;
  delete from public.progress where user_id = auth.uid();
  delete from auth.users where id = auth.uid();
end;
$$;

revoke all on function public.delete_own_account() from public, anon;
grant execute on function public.delete_own_account() to authenticated;
```

It is `security definer` so it runs with the owner's rights, but it can only
ever delete `auth.uid()` — the caller's own row — so it cannot be turned
against anyone else.

**Not verified end-to-end:** exercising a real deletion needs a real account,
and creating one was out of scope. Verified instead that the row appears only
when logged in, that the handler exists and parses, and that both partial
failure paths report honestly. Worth one manual run-through on a throwaway
account after deploy.

## Tier 5 — Content quality

12. **No native speaker has reviewed any of the eleven courses.** The
    research-based verification in `CLAUDE.md` is rigorous but it is not the
    same thing. Cheapest fix is half-built already: the feedback form works
    and posts to Netlify. Surface it — a one-tap "spotted a mistake?" at the
    end of each lesson, pre-filled with the lesson id. Turn users into the
    review layer, and watch `feedback_sent`.
13. **Apply the orphan-vocabulary fix beyond Lao.** `CLAUDE.md` records that
    the checkpoint-review pattern cut Lao orphans 201→93 and is reusable,
    audio-neutral and per-language. A measurable retention-of-learning win
    across ten courses.

---

## Standing notes

- **Netlify credits (~15/push):** Tier 0 and Tier 1 batch into one push.
  Never push without Ruan asking.
- **Do Not Track is deliberately not honoured.** Both supported providers are
  cookieless, so no consent is required; Firefox sends DNT by default, and
  respecting it would silently discard a large slice of data for no legal
  benefit. Revisit if the provider changes.
- **Adding a new tracked event:** call `track()` at the site, add a row to
  the table above, and re-verify by stubbing `window.umami` in the preview
  before trusting the numbers.
