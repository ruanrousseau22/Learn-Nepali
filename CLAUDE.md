# CLAUDE.md — Bhasaly

Guidance for working in this repo. Read this fully before making changes.

## What this is
Bhasaly (formerly Sajilo Nepali; भाषा bhasa = "language") is a **single-file
HTML** language-learning web app, faith-forward (Christian ministry context).
Nepali + Khmer are shipped. Everything — HTML, CSS, and JS — lives in one file.

- **Live file in this repo: `index.html`** (keep this exact filename — Netlify
  serves it as the site root).
- Live at **bhasaly.com** (primary domain on Netlify; **sajilonepali.com**
  301-redirects to it and both are whitelisted in Supabase Auth).
- **Netlify** auto-deploys on every push to this repo (1–2 min). **Supabase** handles
  login + progress sync (keys already in the HTML — don't touch).
- Owner: Ruan (Mac user). Prefers highly specific, actionable help.
- **Status (July 2026):** Nepali complete (main + Intensive tracks); Khmer live
  in early access at 7 zones and growing zone by zone. Read the
  "Multi-language expansion" section below before touching any of it.

## Repo layout
- `index.html` — the whole app + the inline Nepali pack
- `lang/km.js` — Khmer pack (data, art, registerPack call)
- `audio/` — Nepali recorded clips + `manifest.json`; `audio_strings.json` is
  its committed strings source (regenerated from the pack July 2026 during the
  audio health check that re-recorded मान्छे — the one seed word that had been
  falling back to device TTS, heard as a female voice)
- `audio-km/` + `audio_strings_km.json` — Khmer clips, manifest and strings source
- `generate_audio.py` — per-language edge-tts generator (see Audio)
- `_redirects` — Netlify rules 301-ing sajilonepali.com → bhasaly.com
- `og-image.png` + `og-card.svg` — the 1200×630 social share card (referenced by
  `og:image` / `twitter:card summary_large_image` in the head) and its editable
  SVG source. To regenerate on this Mac (no Node/Chrome): wrap the SVG content
  in a 1200×1200 canvas at y-offset 285 (qlmanage crops non-square SVGs), then
  `qlmanage -t -s 1200 -o . wrapped.svg` and `sips -c 630 1200` to center-crop.
  Chat apps cache link previews for days after the image changes.
- `.claude/launch.json` (untracked) — preview servers `sajilo` (port 8642) and
  `sajilo-alt` (8647) for local validation via the Claude Code browser panel

## Golden rules
1. **Always work directly on `index.html`.** Edit it in place.
2. **Never break any shipped language.** Two tracks share the file; changes to the
   Intensive track must leave the main course provably untouched, and new-language
   work must leave every shipped language pack provably untouched.
3. **Validate before committing** (see Validation below). Never commit a build that
   fails `node --check` or the jsdom smoke test.
4. **Regenerate that language's audio strings file whenever spoken content
   changes** (`audio_strings.json` / `audio_strings_km.json` — see Audio), then
   run `generate_audio.py` for that language and commit the new clips + manifest.
5. Keep the UI minimal and uncluttered. Faith-forward but never preachy in mechanics.

## Architecture
**Language packs (since July 2026).** Nepali data lives inline as `NE_*` consts
(`NE_LESSONS`, `NE_UNITS`, `NE_UNITS_INTENSIVE`, `NE_SYM`, `NE_VOWELS`, `NE_CONS`,
`NE_NUMS`, `NE_SRS_SEED`), bundled into `PACKS.ne` via `registerPack({...})` (see
the LANGUAGE PACKS block after `NE_SYM`). The pack also carries `ttsLocale`,
`script` (native-script regex), `audioBase`, `storageKey`, and voice-picker
predicates. `applyPack(code)` assigns the active pack to the global bindings the
engine reads (`LESSONS`, `UNITS`, `UNITS_INTENSIVE`, `SYM`, `VOWELS`, `CONS`,
`NUMS`, `SRS_SEED`, `LESSON_MAP`, `AUDIO_BASE`, `LANG`). **The engine never reads
`NE_*` directly.** Future languages load from `lang/<code>.js` and call
`registerPack`.

**Language switcher (since July 2026).** `LANG_CATALOG` (next to `switchLang`)
lists offered languages; the Settings "Course language" row auto-hides while it
has one entry, so shipping a language = add `{code,label}` + `lang/<code>.js`.
`switchLang(code)` lazy-loads the pack script, saves the outgoing language,
applies the pack, reloads state/audio-manifest/voices, calls `applyBranding()`
(hero h1 from `pack.brand`, hides the Intensive tab when `unitsIntensive` is
empty) and rebuilds all views. The header mark is the fixed Bhasaly tree
(inline SVG, color `--tree` with a dark-mode variant) — packs do not brand it. Umbrella name (July 2026): **Bhasaly** —
title/meta/header/footer/favicon renamed; hero h1 stays per-language.
**Storage keys stay `sajilo_*`** (renaming them would orphan user progress).

**Per-language art (since July 2026).** Every language gets national scenery:
the built-in SVGs are the Nepali art (snow-capped Himalaya, terraced
hillsides, village house + yeti; the hero's near hill runs edge to edge —
the old centered valley pine was removed July 2026 because it duplicated
the Bhasaly tree logo), captured once by `applyArt()` as the default; a pack overrides via `art:{hero,band,mascot}` —
innerHTML strings for `.hero-mtns` / `.pb-mtns` (keep the layer classes
`orb/far/mid/near` + cloud/star groups so engine CSS animates them; every
hill path must close along the SVG bottom edge — `…L1200 H L0 H Z` — or the
pale far layer peeks through under it, a real bug fixed July 2026) and a
`mascot(mood)` function (moods `happy/cheer/oops`, 64×64 viewBox). Mascots
render via `artMascot()` — never call `mascotSVG()` directly at new call
sites. `applyArt()` also stamps `data-lang` on `<html>`, which drives the
per-language scenery palette in CSS (`:root[data-lang="km"]` light + dark
blocks next to the theme vars). Khmer art (stilt house, sugar palms, rice
paddies, baby-elephant mascot) lives in `lang/km.js` (`KM_HERO`, `KM_BAND`,
`KM_MASCOT`). **Art must be secular** — see Design / content rules.

**State & storage.** `S` is the merged working state the engine reads. On disk it
splits: `sajilo_global` = global stats shared across languages (XP, streak, daily,
total/correct — Duolingo model) + device prefs (theme/rom/voice/sound/autoNext,
never synced); `sajilo_<code>` = per-language `{done, srs, words}` (`lPick`/
`gPick`/`prefsPick` define the split). `migrateLegacy()` converts the old `sajilo`
blob once (kept as backup; `resetAll` clears every `sajilo*` key). Cloud rows are
`data:{v:2, global, langs:{<code>:{done,srs,words}}}`; v1 flat rows from old
cached clients are treated as `{global:gPick(d), langs:{ne:lPick(d)}}` on pull.

**Access codes (since July 2026).** `S.unlocks` (array, in `sajilo_global` via
`gPick` and in the cloud v2 global blob; `mergeGlobal` unions it, so unlocking
on any logged-in device unlocks everywhere). Code **`ffh`** ("fine fragrance
Himalayas") unlocks the Nepali Language Intensive — entered in Settings →
"Additional content" (`applyCode`/`hasIntensive`/`paintUnlock`). The Intensive
tab shows only when `UNITS_INTENSIVE.length && hasIntensive()`; `show()` also
guards direct navigation. `resetAll` clears unlocks with everything else.

Two tracks share one `LESSONS` array (`NE_LESSONS` ends right before `NE_VOWELS`).
- Zones live in `UNITS` (main course, `#path-root`, tab "Learn") and
  `UNITS_INTENSIVE` (`#path-root-intensive`, tab "Intensive").
- Shared renderer: `buildPath(units, rootId)`. Helpers: `curTrack`, `trackOf`,
  `buildTrack`, `startLesson`, `renderEx`, `advance`, `finishLesson`, `exitLesson`,
  `lessonById`.
- **Node symbols come from the `SYM` map** (`NE_SYM` in the Nepali pack), keyed by
  each topic's *learn-lesson id* — NOT the lesson `emoji` field (which is unused in
  rendering). Both tracks use Devanagari node symbols (no emoji on nodes).
- The Intensive page header carries one "💡 Advice for Intensive" `.pb-btn` that
  opens `#resources-modal` (start-with-the-script advice + resource accordions,
  incl. ministry material — Intensive-only). The Alphabet page header carries a
  "🃏 Alphabet flashcards" `.pb-btn` → `#alphacards-modal`: a simple
  flip-to-reveal deck over the active pack's `VOWELS/CONS/NUMS` (`acMenu`/
  `acStart`/`acFlip`/`acGrade` — misses requeue until cleared; not SRS, so the
  Review word deck stays vocab-only).

Current size: Nepali main course = 10 zones / 315 lessons / 63 topics; Language
Intensive = 12 weeks / 312 lessons (300 + 12 weekly tests) / 60 topics. Khmer
(early access, `lang/km.js`) = 7 zones / 245 lessons / 49 topics, no Intensive
(Zone 3 "Describe your world": to be, adjectives as stative verbs, negation,
colors, have, want/need, street small talk; Zone 4 "Daily life": core verbs +
no-conjugation, time markers កំពុង/នឹង/ហើយ, food, drinks, family incl. the
បង politeness note, routine, places with នៅ/ជិត/ឆ្ងាយ; Zone 5 "Out & about":
money/riel-vs-dollars/thousands ពាន់, shopping & bargaining ចុះថ្លៃ, transport
with ជិះ + fare-first note, directions ឆ្វេង/ស្តាំ/ត្រង់, weather & the two
seasons, body parts, health via the ឈឺ + body-part pattern; Zone 6 "Connect &
converse": past with បាន + មិនបាន…ទេ, the អាច…បាន can-sandwich vs ចេះ,
question words នរណា/ពេលណា/ហេតុអ្វី/ម៉េច + ម៉េចដែរ, feelings in ចិត្ត
(សប្បាយចិត្ត/ពិបាកចិត្ត/ខឹង/ខ្លាច/នឹក/ស្រឡាញ់), connectors
ប៉ុន្តែ/ព្រោះ/បើ, comparisons ជាង/ជាងគេ/ដូចគ្នា, opinions គិតថា +
ប្រហែល/ពិត/មែនទេ/មែនហើយ; Zone 7 "Sound like a local": age-based address
terms ពូ/មីង/តា/យាយ/អូន + formal លោក/លោកស្រី, requests with សូម + verb
vs សុំ + thing + the host word អញ្ជើញ, must ត្រូវ/ត្រូវតែ + ត្រូវហើយ/ខុស
right-and-wrong + មិនបាច់ទេ no need, ever/used-to ធ្លាប់ + times ម្តង/ដង/
ច្រើនដង, days of the week ថ្ងៃច័ន្ទ…ថ្ងៃអាទិត្យ + សប្តាហ៍, dates &
months by number ខែមួយ vs មួយខែ + ថ្ងៃទី + ខួបកំណើត birthday,
occupations via the អ្នក + verb doer trick + កសិករ/ធ្វើស្រែ).

### Schemas
- Lesson: `{id, emoji, title, step, meta, vocab:[[deva,rom,gloss]], ex:[...]}`
- Unit: `{n, t, d, lessons:[ids]}`
- A topic = 5 lessons: `learn → recognize → build → mix → checkpoint`.
  Intensive ids: `li_wWdD` / `li_wWdD_2.._5`.
- Weekly test = ONE lesson `li_wNtest` with `step:'test'`, titled just "Test",
  `ex:[]` in the data — `buildTestEx` deals a fresh random 20 tap-only questions
  from that week's pool on every attempt (mc/fill/wb/match, no listen/hear
  prompts, ≤3 match rounds, ~4 per topic-day). Renders as its own node in normal
  zone colors with the week number (Devanagari numeral) as symbol; pass = 80%
  first-try correct (`finishTest`); audio fully muted while active (`testMuted`);
  optional — the next week unlocks off the last core lesson, not the test.
- Exercise types: `note{tag,q,body,tip?,eg?}`, `mc{q,d?,r?,o,a}`, `fill{q,s,o,a}`,
  `li{q,say,o,a}`, `wb{q,a:[ordered],pool:[shuffled]}`, `match{q,pairs:[[deva,gloss]]}`,
  `tr{q,a,r,h?}`.

### Engine invariants (added July 2026 — respect these when touching lesson flow)
- Lessons run on a session queue `exQ` (copy of `l.ex`): a wrong answer requeues
  that question at the end ("↻ Try again" tag, `curE>=exQBase`) until answered
  correctly. **Tests are exempt** — fixed dealt 20, scored on first tries
  (`lessonCorrect`, incremented in `finishQuestion` only when `ok&&!breakCombo`).
- **Never use native `confirm()`** — use the in-app dialog `askConfirm(title,msg,
  okLabel,onOk)` / `closeConfirm()` (#confirm-modal). All modals close on backdrop
  click + Escape via `closeModalById`.
- Streak advances **only on real practice** (`updateStreak()` in `finishQuestion`
  and `srsGrade`), never on load — `checkStreakBreak()` on load just zeroes a
  broken streak. Don't re-add `updateStreak()` to `load()`.
- Cloud sync **merges** via `mergeGlobal` + `mergeLang` (union of done, max XP,
  more-advanced SRS card, device prefs stay local, active `lang` stays local) —
  never blob-overwrite `S` from the cloud; push the v2 payload from `cloudData()`.
- `speak()`/`speakSlow()` are muted during tests via `testMuted()`. Speaker icons
  use `spkSVG()` (inline SVG) — never the 🔊 emoji.
- Keyboard: lessons accept 1–9 (pick option), Enter/Space (check/continue), Esc
  (exit w/ confirm when ≥2 exercises in); review accepts Space + 1/2/3 (H/G/E).
- Paths scroll to the current node (`scrollToCurrent`, `.topic-row.has-next`) —
  respect `SMOOTH` (prefers-reduced-motion). Hero CTA `heroGo()` does the same.
- `lessonById` is a Map lookup (`LESSON_MAP`); `buildPath` uses a `doneSet` Set.
- CSS: `.section` must keep longhand top/bottom padding (shorthand kills `.wrap`'s
  side gutters on `wrap section` elements — this was a real mobile bug).

## Multi-language expansion
Researched roadmap (demand vs competition) — Phase 1: Nepali (done), Khmer
(early access live), Amharic (next new language) · Phase 2: Burmese, Sinhala,
Lao · Phase 3: Pashto, Mongolian, Kinyarwanda, Luganda.

**Where things stand / next up:**
- Khmer grows zone by zone (Zones 1–7 shipped — Zone 7 "Sound like a local"
  landed July 2026 and completed the Nepali arc mirror. Zone 8 candidates:
  telling clock time ម៉ោង (the biggest remaining gap vs Nepali), visiting &
  hosting (មកលេង, ភ្ញៀវ guest phrases), formal month names as recognition
  vocab, phone & messaging). Append to `KM_UNITS`/`KM_LESSONS` in
  `lang/km.js`, add SYM entries, regen audio.
- **Before dropping the "early access" label, a native Khmer speaker should
  review Zones 2–7** (content was written against standard beginner material,
  unreviewed by a native).
- A new language = new `lang/<code>.js` pack + `LANG_CATALOG` entry + art
  (secular!) + audio dir + font added to the Devanagari font stacks if its
  script needs one (the Khmer step is the template — see Step 3 below).
- Keep sajilonepali.com registered — old links depend on the 301.

Decisions made (July 2026):
- **One app with a language switcher** — Learn path, Alphabet, and Review all
  follow the active language. NOT separate sites.
- Refactor to **language packs**: one object per language bundling
  LESSONS/UNITS/SYM/alphabet arrays/SRS_SEED/ttsLocale/audio dir/hero branding.
  Engine reads the active pack. Nepali stays inline in index.html; other
  languages load on demand from `lang/<code>.js` so initial load stays light.
- **Per-language progress** (storage key `sajilo_<code>`; Supabase progress rows
  gain a lang discriminator), **global streak/XP** across languages (Duolingo
  model). One-time migration: existing `sajilo` blob → `sajilo_ne`.
- Khmer launch scope was Zones 1–2, labeled early access, growing zone by zone
  (now at 7 zones / 245 lessons). **No Intensive track for Khmer** (that
  curriculum is Nepal-ministry-specific).
- Khmer content rules: two consonant series, subscript consonants (ជើង), no word
  spaces; **pick ONE romanization scheme and enforce it** (same rule as Nepali:
  no Khmer script in rom fields — scan `[ក-៿]`). Audio via edge-tts
  `km-KH-PisethNeural` (male) / `km-KH-SreymomNeural` (female) for now; Ruan may
  record **native voices later** — keep the pipeline voice-agnostic (per-language
  audio dir + manifest, same FNV-1a hashing).
- **Branding — DONE (July 2026): Bhasaly** (भाषा bhasa "language" + -ly).
  In-app rename, tree logo, bhasaly.com primary on Netlify DNS (sajilonepali.com
  kept as a 301 redirect — do not let it lapse), Supabase Site URL + redirect
  allowlist updated, og:url points at bhasaly.com.
- **Step 1 — DONE (July 2026): the language-pack refactor with Nepali provably
  untouched** — 63 main nodes + 60 topics + 12 tests all render identically, full
  validation green (see Architecture → Language packs). Golden rule 2 is now:
  never break any shipped language.
- **Step 2 — DONE (July 2026): the language switcher** — per-language storage
  (`sajilo_<code>` + one-time `sajilo` → `sajilo_ne` migration), global streak/XP
  in `sajilo_global`, cloud payload v2 with per-language blobs (v1 rows still
  merge), audio manifest + voices reload on switch, pack-driven branding, Settings
  picker hidden until `LANG_CATALOG` has ≥2 entries (see Architecture → Language
  switcher / State & storage).
- **Step 3 — DONE (July 2026): Khmer early access** — `lang/km.js` (2 zones /
  70 lessons / 14 topics: script incl. two series + subscripts, then greetings,
  pronouns, numbers to 100, courtesy, introductions, time words), catalog entry
  "Khmer — ខ្មែរ · early access", pack-driven alphabet labels (`pack.alpha` →
  `#alpha-native`, `#pdeva-*`), Noto Sans Khmer appended to every Devanagari
  font stack (Google Fonts serves it only when Khmer glyphs render), Khmer
  romanization scheme documented at the top of `lang/km.js` (ASCII only;
  aspirates kh/chh/th/ph; consonant names carry their series vowel), audio via
  `generate_audio.py --lang km` → `audio-km/`. Khmer grows zone by zone from
  here — next zones append to `KM_UNITS`/`KM_LESSONS` in `lang/km.js`.

## Design / content rules
- **Course content is secular language learning** (Ruan, July 2026): every
  language course — Nepali main, Khmer, future languages — teaches the language
  in the best, most efficient way with everyday secular content, NO ministry or
  Christian material. The ONE exception is the Nepali **Language Intensive**
  track, which is ministry-centered by design (built for Ruan's community);
  that is also why no other language gets an Intensive.
- No Devanagari *typing* where Roman suffices (tap-based mc/li/wb/match; ≤1 `tr` per day).
- Teach-before-test. Colloquial Nepali (मेरो for all possessives).
- **Romanization fields contain NO native script** (`vocab[i][1]` and `ex.r`):
  scan `[ऀ-ॿ]` for Nepali, `[ក-៿]` for Khmer (each pack's `script` regex).
- Sensitive topics (suicide/abuse/addiction) handled soberly as recognition vocab,
  framed by care — never gamified.
- **No religious buildings or symbols in the artwork of ANY language** (Ruan:
  Christian conviction — depicting temples is idolatry). Secular imagery only:
  landscapes, nature, homes, daily life, animals. No temples/pagodas/stupas/
  shrines/monks/prayer flags, however iconic (no Angkor Wat for Cambodia, no
  stupas for Nepal, no rock churches for Amharic).

## Audio system
Recorded MP3s first, device TTS fallback.
- Runtime hash `audioKey(s)` = **FNV-1a** over UTF-8 bytes
  (`h=0x811c9dc5`; per byte `h^=b; h=(h*0x01000193)&0xFFFFFFFF`; 8-hex).
- `AUDIO_BASE='audio/'`. App fetches `audio/manifest.json` (a JSON **array of 8-hex
  keys**) and plays `audio/<key>.mp3` if the key is present, else falls back to TTS.
- Lessons **prefetch** their recorded clips on start (`prefetchLesson`) for instant playback.
- Spoken strings = vocab `[0]`, every `say`, mc `d` + correct option, fill's `s` with
  `___` filled, wb `a.join(' ')`, match `pairs[i][0]`, tr `a`, and alphabet
  `VOWELS/CONS/NUMS`. **Exclude `step:'test'` lessons** — tests are silent and
  reuse already-recorded content anyway.

### Regenerating audio
`generate_audio.py` is per-language: `--lang ne` (default) reads
`audio_strings.json` → `audio/`; `--lang km` reads `audio_strings_km.json` →
`audio-km/`. Strings files are plain JSON arrays of native-script strings; the
script hashes them itself. **Defaults to the MALE voice** (`ne-NP-SagarNeural` /
`km-KH-PisethNeural`; `--voice female` = `ne-NP-HemkalaNeural` /
`km-KH-SreymomNeural`).

- Whenever lesson/spoken content changes, **regenerate that language's strings
  file first** (extract every spoken native-script string per the list above).
- To (re)generate audio locally:
  ```
  pip install edge-tts          # once
  # switching voice? delete the outdir first so all clips regenerate:
  rm -rf audio-km
  python3 generate_audio.py --lang km   # --voice female / --rate -10% available
  ```
- edge-tts needs internet (Microsoft TTS). It's resumable (skips existing files).

## Validation (run before every commit)
1. `node --check` on the largest `<script>` block.
2. jsdom smoke test: stub `speechSynthesis`, `SpeechSynthesisUtterance`, `scrollTo`,
   `fetch`, `matchMedia`, `HTMLMediaElement.play`. Note: top-level `const`s
   (`LESSONS`, `UNITS_INTENSIVE`, `audioKey`, etc.) are NOT on `window`; to inspect
   them, inject `window.__X = X` on a throwaway copy.
3. Romanization scan per pack `script` regex: native script must NOT appear in
   `vocab[1]` or `ex.r` (`[\u0900-\u097F]` Nepali, `[ក-៿]` Khmer).
4. Integrity (run for the language you touched): answer indices in range; li
   `o[a] === say` and no duplicate options; wb answers ⊆ pool AND pool bigger
   than the answer (real distractors); match pairs well-formed, no dup keys or
   values; every topic exactly 5 lessons in learn→recognize→build→mix→checkpoint
   order; every learn-lesson id has a SYM entry (exception: `li_wNtest` nodes
   are single lessons with `ex:[]` — instead check the week's eligible question
   pool holds ≥20 for `buildTestEx` to deal from).
5. Prove untouched languages untouched: evaluate each pack's data consts from
   `git show HEAD:` vs working tree and hash-compare JSON per structure; plus
   fresh-state DOM fingerprints (topic-row/cdot counts + innerHTML hash of
   `#path-root`, `#path-root-intensive`, alphabet grids) before/after.
6. Inline-handler safety: strings interpolated into `onclick` handlers (vocab `[0]`,
   `ex.d`, `ex.say`, match `pairs[i][0]`) must not contain `'`, `"`, `<`, `>`, or `\`
   — one apostrophe silently breaks that card's HTML.
7. No Node on this Mac: for 1–2, extract the `<script>` block and parse it via
   `osascript -l JavaScript` with `new Function(src)`, then smoke-test in a browser
   (`python3 -m http.server`).

## Git / deploy
- Local repo: `~/Desktop/Learn-Nepali`. Push triggers Netlify redeploy.
- `git push` password = GitHub **Personal Access Token** (not the account password).
- The `audio/` and `audio-km/` folders must sit at the **top level** of the
  repo, next to the HTML.
- Verify after deploy: hard-refresh bhasaly.com; Settings → Pronunciation voice
  should read "Using recorded Nepali audio" (or "… Khmer audio" after switching
  language); tapping an alphabet letter plays the voice; sajilonepali.com still
  301s to bhasaly.com.
