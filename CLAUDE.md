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
- **Netlify** auto-deploys on every push to this repo (1–2 min) — so **batch
  work and push rarely** (each deploy costs ~15 Netlify credits; see Git /
  deploy). **Supabase** handles
  login + progress sync (keys already in the HTML — don't touch).
- Owner: Ruan (Mac user). Prefers highly specific, actionable help.
- **Status (July 2026):** ALL EIGHT courses COMPLETE at 12 zones each —
  Nepali (main 12 zones / 385 lessons + the Intensive track), Khmer
  (12 zones / 420 lessons), Burmese (12 zones / 420 lessons), Sinhala
  (12 zones / 420 lessons), **Lao** (12 zones / 74 topics / 370 lessons,
  `lang/lo.js`), **Pashto** (12 zones / 74 topics / 370 lessons,
  `lang/ps.js` — the app's first RIGHT-TO-LEFT course; early-access label
  dropped at 12 zones, July 2026), **Mongolian** (**12 zones / 84
  topics / 420 lessons**, `lang/mn.js`, July 2026 — Cyrillic; early-access
  label dropped at 12 zones), and **Bengali** (**12 zones / 84 topics /
  420 lessons**, `lang/bn.js`, July 2026 — Kolkata standard; early-access
  label dropped at 12 zones). Plus the Religious
  studies mode (Nepali). No course carries an early-access label anymore.
  Read the "Multi-language expansion" section below before touching any of it.

## Repo layout
- `index.html` — the whole app + the inline Nepali pack
- `lang/km.js` — Khmer pack (data, art, registerPack call)
- `faith/ne.js` + `audio-nef/` + `audio_strings_nef.json` — Religious studies
  mode content & clips (see the Religious studies section below)
- `lang/my.js` — Burmese pack (Zone 1 · The Script; data, secular art, registerPack)
- `audio/` — Nepali recorded clips + `manifest.json`; `audio_strings.json` is
  its committed strings source (regenerated from the pack July 2026 during the
  audio health check that re-recorded मान्छे — the one seed word that had been
  falling back to device TTS, heard as a female voice)
- `audio-km/` + `audio_strings_km.json` — Khmer clips, manifest and strings source
- `audio-my/` + `audio_strings_my.json` — Burmese clips, manifest and strings source
  (934 clips for 935 strings: ဎ / U+100E, a rare Pali letter, has no clip —
  edge-tts returns no audio for it, so it gracefully falls back to device TTS)
- `audio-si/` + `audio_strings_si.json` — Sinhala clips, manifest and strings source
- `audio-lo/` + `audio_strings_lo.json` — Lao clips, manifest and strings source
  (850 strings via `lo-LA-ChanthavongNeural`)
- `audio-ps/` + `audio_strings_ps.json` — Pashto clips, manifest and strings
  source (824 strings via `ps-AF-GulNawazNeural`)
- `audio-bn/` + `audio_strings_bn.json` — Bengali clips, manifest and strings
  source (1380 strings via `bn-IN-BashkarNeural`; the bare signs
  ং ঃ ঁ get no edge-tts audio → device-TTS fallback, same as Burmese ဎ)
- `audio-mn/` + `audio_strings_mn.json` — Mongolian clips, manifest and
  strings source (1401 clips for 1402 strings via `mn-MN-BataaNeural`: the
  loan letter Щщ gets no edge-tts audio — device-TTS fallback, same as
  Burmese ဎ and the rare Sinhala letters)
- `generate_audio.py` — per-language edge-tts generator (see Audio)
- `extract_audio_strings.js` — JXA extractor that regenerates a language's
  audio strings file from its pack (see Audio → Regenerating audio)
- `_redirects` — Netlify rules 301-ing sajilonepali.com → bhasaly.com
- `og-image.png` + `og-card.svg` — the 1200×630 social share card (referenced by
  `og:image` / `twitter:card summary_large_image` in the head) and its editable
  SVG source. To regenerate on this Mac (no Node/Chrome): wrap the SVG content
  in a 1200×1200 canvas at y-offset 285 (qlmanage crops non-square SVGs), then
  `qlmanage -t -s 1200 -o . wrapped.svg` and `sips -c 630 1200` to center-crop.
  Chat apps cache link previews for days after the image changes.
- `robots.txt` + `sitemap.xml` — SEO basics (allow-all + one URL, https://bhasaly.com/).
  Served from the repo root by Netlify.
- **SEO / discoverability lives in the `<head>`** — `<title>`, `meta description`,
  `meta keywords`, `link canonical`, Open Graph + Twitter cards, and a JSON-LD
  `<script type="application/ld+json">` block (`WebSite` + `WebApplication`/
  `EducationalApplication` with a `teaches` array + one `Course` per language).
  **Update all of these when you ship a new language**: add the language to the
  title/description/keywords, the `teaches` array, and add a `Course` entry — so
  the site ranks for "learn &lt;language&gt;". Currently: all eight — Nepali + Khmer + Burmese + Bengali + Sinhala + Lao + Pashto + Mongolian.
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
empty) and rebuilds all views. **The visible picker is a dropdown in the
HEADER, right of the logo** (`#lang-switch`, `paintHomeLangSwitch()`,
`LANG_FLAGS` inline-SVG flags; moved out of the hero art July 2026 — flag-only
below 560px). The header mark is the fixed Bhasaly tree
(inline SVG, color `--tree` with a dark-mode variant) — packs do not brand it. Umbrella name (July 2026): **Bhasaly** —
title/meta/header/footer/favicon renamed; hero h1 stays per-language.
**Storage keys stay `sajilo_*`** (renaming them would orphan user progress).

**Per-language art (since July 2026).** Every language gets national scenery:
the built-in SVGs are the Nepali art (snow-capped Himalaya, terraced
hillsides, village house; the hero's near hill runs edge to edge —
the old centered valley pine was removed July 2026 because it duplicated
the Bhasaly tree logo), captured once by `applyArt()` as the default; a pack overrides via `art:{hero,band,mascot}` —
The floating hero-banner mascot (`#home-mascot`/`.hero-yeti`) was **removed
July 2026** (Ruan: it cluttered the banner) — the pack `mascot(mood)` now
appears only by the current path node (`.trail-yeti`) and in lesson feedback.
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
**Art quality standard (July 2026 — the Lao/Pashto/Mongolian/Sinhala art
upgrade):** a hero must not read as "dim layers over each other". Two rules
learned the hard way: (1) the language's palette needs THREE DISTINCT HUE
STEPS like Nepali's (cool/misty --mtn-far, warm contrasting --mtn-mid,
saturated green/dark --mtn-near) — never three greens or three grays; (2)
landmark objects (houses, gers, boats, palms, trees) must sit in a layer
that CONTRASTS their background, never inside the same-colored mid path:
white landmarks use class `snow` (gers, the Nepali house walls), dark
silhouettes use
`fill="var(--tree)"` (stilt houses, boats, horses, poplars, the Nepali
house roof — adapts in dark mode and echoes the logo color), accents may
use `var(--crimson)` (pomegranate fruit). Also: no cross-shaped
silhouettes ever. **(3) NO HUMAN FIGURES in scenery art** (Ruan, July
2026 — "little dark green stickmen"): boats, houses, animals and plants
are welcome; people never. The Lao/Bengali boatmen, Burmese leg-rowers
and Sinhala stilt-fishermen were all removed (Sinhala's whole stilt
groups went — bare pole+crossbar would have read as crosses); empty
boats stayed. The July 2026 Nepali hero refresh (per Ruan —
Pashto-LIKE composition, then deliberately DIFFERENTIATED in round 2,
July 2026): the village house is REMOVED; one calm low far ridge sweeps
x0→~730 (band →~775) with the bold peaks right of it, ONE continuous
terraced mid band edge-to-edge, gentle continuous green near — but the
peaks are THREE BIG BOLD PEAKS (July 2026 round 4, per Ruan — "less
mountains that are bigger", prepping faith mode for translation: hero
summits 760/y150 + 940/y92 + 1120/y128 with one flank bend each + 3
large snow caps; band summits 840/y96 + 960/y74 + 1080/y88 — keep the
band's middle apex ≥y74: wide viewports crop the band's top ~y80 under
xMidYMax slice). The round-2 glacial river and round-3 foothills were
REMOVED in round 4 (river CSS + --river vars deleted too). Same round:
the Jesus faith hero h1 dropped the Fraunces display font (it rendered
"wrinkled") for Plus Jakarta Sans w700 via the #view-fjesus .hero-text
h1 rule; God's Story keeps Fraunces. Edit via replace_all: the hero markup exists
as THREE verbatim copies (home + both faith pages) and the band as FOUR
verbatim copies.
**Keep the title zone clear** (Ruan, July 2026 — applies to every language,
hero AND band): the "Learn X" / "The alphabet …" headings must sit on calm
sky/water, not in front of hills, houses or peaks. Safe-zone rule of thumb in
SVG coords: hero — nothing taller than y≈235 in x∈[130,710] (tall scenery
lives right of x≈720, where the phone crop still shows it beside the title);
band — keep x≲770 flat/low. Fine details (fishermen, birds, reeds, the band
house) carry class `art-detail`, hidden ≤560px by an index.html rule so
phones show only the calm centered scenery.

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

Current size: Nepali main course = 12 zones / 385 lessons / 77 topics (Zones
11–12 added July 2026: Zone 11 "Chain your sentences" — the -एर converb,
perfect -एको छ + कहिल्यै, पहिले/त्यसपछि/अन्त्यमा + भर्खर, frequency सधैं/
प्रायः/कहिलेकाहीँ, pace बिस्तारै/छिटो/ढिलो/चाँडै, positions माथि/तल/भित्र/
बाहिर/अगाडि, years & lakhs; Zone 12 "Living in Nepal" — हिमाल/पहाड/नदी/
जङ्गल/गाउँ, animals, clothes incl. टोपी + जुत्ता खोल्नुहोस्, house झ्याल/
खाट/टेबल/कुर्सी/साँचो, fruits आँप/केरा/स्याउ + गुलियो/पिरो, phone & post,
help मद्दत/प्रहरी/होसियार/हरायो — all gap-checked against a main-course-only
vocab extraction so nothing duplicates Zones 1–10); Language
Intensive = 12 weeks / 312 lessons (300 + 12 weekly tests) / 60 topics. Khmer
(`lang/km.js`) = 12 zones / 420 lessons / 84 topics, no Intensive
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
occupations via the អ្នក + verb doer trick + កសិករ/ធ្វើស្រែ; Zone 8 "The
Khmer way": clock time ម៉ោង-first + កន្លះ half + រសៀល/ថ្ងៃត្រង់,
classifiers noun+number+counter នាក់/កែវ/ចាន/ក្បាល, the three jobs of
ឱ្យ give/for/let (+ ឲ្យ spelling note), directionals & serial verbs
យកមក/យកទៅ/ចូលមក/ចេញ/វិញ, eating out ម៉ឺនុយ/អាម៉ុក/បន្ថែម/ខ្ចប់
here-or-takeaway, visiting មកលេង/ភ្ញៀវ/host phrases, phone & messages
ទូរស័ព្ទ/លេខ/ផ្ញើសារ/វ៉ាយហ្វាយ; Zone 9 "Street-smart Khmer": the
colloquial អត់…ទេ negation + echo answers, post-verbal បាន can/manage
(before verb = did, after = can) + អត់បានទេ, timing ទើបតែ just /
កំពុងតែ mid-action / នៅ still, hotel សណ្ឋាគារ/បន្ទប់/ជួល/មួយយប់/
កូនសោ/បន្ទប់ទឹក, pharmacy ហាងលក់ថ្នាំ/ផ្តាសាយ/ក្អក/គ្រុនក្តៅ +
dosage មួយថ្ងៃពីរដង + មុន/ក្រោយញ៉ាំបាយ, bargaining round 2 ពេក too
+ បើទិញពីរ + walk-away អត់ទិញទេ, formal month names មករា…ធ្នូ as
recognition vocab mapped to the ខែ+number system; Zone 10 "Your Khmer
life": to like ចូលចិត្ត enter-the-heart + degrees ណាស់/មិនសូវ/ជាងគេ,
free time ភ្លេង/ច្រៀង/រាំ/កីឡា/បាល់ទាត់/ហែលទឹក, furniture +
positions គ្រែ/តុ/កៅអី/ទ្វារ/បង្អួច + នៅលើ/ក្រោម/ក្នុង, tickets &
journeys សំបុត្រ/កន្លែង + ចេញ/ដល់ម៉ោងប៉ុន្មាន vs duration
ប៉ុន្មានម៉ោង, school សាលារៀន/សរសេរ/ប៊ិច/ក្រដាស/មេរៀន/ពាក្យ, farm
& countryside ជ្រូក/មាន់/ទា/ក្របី/ស្វា/ដើមឈើ/ផ្កា/ស្រុកស្រែ,
wishes & celebrations រីករាយ.../សំណាងល្អ/ស្វាគមន៍/សុខភាព +
សូមឱ្យ... wish-building; Zone 11 "Tell your story": appointments
ណាត់ជួប + រវល់/ទំនេរ busy-or-free, describing people ខ្ពស់/ទាប/ស្គម +
សក់វែង/ខ្លី (sak — Zone 5 review), storytelling connectors ជាដំបូង/
បន្ទាប់មក/ក្រោយមក/ជាចុងក្រោយ + រឿង, border & documents
លិខិតឆ្លងដែន/ព្រំដែន/វីសា/បង្ហាញ/សញ្ជាតិ, work ការិយាល័យ/ប្រជុំ/
ចាប់ផ្តើម/បញ្ចប់/ប្រាក់ខែ/ថ្ងៃឈប់សម្រាក, conversation glue អញ្ចឹង/
ភ្លេច/ចាំបាន/យល់ព្រម, future & hopes អនាគត/សង្ឃឹមថា/ស្រមៃ/បន្ត;
Zone 12 "Make Cambodia home": new fruits ល្ហុង/ម្នាស់/ទុរេន/ក្រូច +
tastes ផ្អែម/ជូរ, kitchen ដាំ/ចៀន/អាំង + ហឹរ/ម្ទេស/ស្ករ/អំបិល, big
riel numbers មុឺន/លាន + ដូរលុយ exchanging, errands កាត់សក់/
បោកខោអាវ/ជួសជុល, emergencies ជួយផង/ប្រយ័ត្ន/គ្រោះថ្នាក់/បាត់/ហៅ,
small-talk trio អាយុប៉ុន្មាន/រៀបការហើយឬនៅ/មានកូនប៉ុន្មាននាក់ +
នៅលីវ, and how-long duration verb+បាន+length+ហើយ + យូរហើយ).

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
- **MC/fill/li options are shuffled at render** (`shufOpts` in `renderEx`, July
  2026 fix): the pack data authors many questions with `a:0`, so without this the
  correct answer always sat in the first slot. `shufOpts` clones the exercise,
  shuffles `o`, and remaps `a` — the **source pack data is never mutated** (the
  clone is stored back into `exQ[curE]`, marked `_sh` so a mid-question re-render
  like a romanization toggle keeps the same order). Keep answers keyed by the
  `o[a]` index, not by option position, and never assume slot 0 is correct.
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
  respect `SMOOTH` (prefers-reduced-motion). (The hero "Start learning" CTA was
  removed July 2026 — the hero is now just the heading over the art.)
- `lessonById` is a Map lookup (`LESSON_MAP`); `buildPath` uses a `doneSet` Set.
- CSS: `.section` must keep longhand top/bottom padding (shorthand kills `.wrap`'s
  side gutters on `wrap section` elements — this was a real mobile bug).

## Multi-language expansion
Researched roadmap (demand vs competition) — Phase 1: Nepali (done), Khmer
(live), Amharic · Phase 2: Burmese (started July 2026 — Zone 1 live), Sinhala,
Lao · Phase 3: Pashto, Mongolian, Kinyarwanda, Luganda.

**Where things stand / next up:**
- **Sinhala (`lang/si.js`) COMPLETE at 12 zones / 84 topics / 420 lessons**
  (July 2026, Stages A–D; early-access label dropped + SEO/JSON-LD Course
  entry added on completion).
  Zone 1 "The Script": ක ග න ම; the two T families ත ද ට ඩ (dental-vs-
  retroflex is THE consonant story); ප බ ස හ; ච ජ ය ර ල ව; the half-nasals
  ඟ ඬ ඳ ඹ (unique to Sinhala); vowel signs incl. කැ + hal kirima ක්; first
  words. Zone 2 "Foundations": kohomadha + the gihin ennam goodbye, pronouns
  mama/oyaa/eyaa/api + formal oba as recognition, family words AS ADDRESS
  TERMS (ayiyaa/akkaa to strangers), numbers 1-10, courtesies + hari, magee
  nama intros (no-copula rule), time words adha/heta/iiyee + day parts.
  Zone 3 "Say a sentence": SOV + one -nawaa form for all persons (the
  freebie) + present-covers-future, innawaa-vs-thiyenawaa animacy, 4-way
  deixis meeka/ooka/araka/eeka, negation -nnee naee + nemeyi for nouns +
  mama dhannee naee, yes/no ...dha + ov/naee + echo answers, wh-words +
  mata theerennee naee, want mata oonae / epaa / kaemathiyi (dative
  subject). Zone 4 "Cases & places": -ta to/for, -gee possession + kaagedha,
  ekka with + -en from + kohendha, positions uda/yata/aethulee/langa +
  meesee-uda locative trick, town words + the loanword "bas eka" pattern +
  bas eke by-bus, food incl. aappa/indhiaappa, the kadee order pattern
  mata X ekak dhenna + thawa/tikak. Zone 5 "How many": teens, tens +
  combining forms (wisi eka), rupees + kiiyadha + number-yi price answers,
  bargaining ganan waediyi/laabayi/adu karanna/gannawaa, clock welaawa
  kiiyadha + N-yi/hamaara/kiiyatadha + N-ta, days of the week (iridhaa
  sun-day, sandhudhaa moon-day), counting thing+number+k (aappa dhekak) +
  kiiyak. Zone 6 "Describe it": -yi predicate adjectives (lokuyi) vs bare
  attributives (loku gedhara), lassanayi/usa/parana/aluth, colors + paata,
  comparisons X-ta wadaa + superlative -ma, dative feelings mata
  badaginiyi (belly-fire!)/mahansiyi/nidhimathayi/bayayi/sathutuyi, weather
  waessa/wahinawaa/rasneyi/siithalayi + the two monsoons, body + mata X
  ridhenawaa + beheth/dhosthara. Zone 7 "Then & now": the vowel-change past
  (kanawaa->kaeaewaa, giyaa/aawaa/kalaa/gaththaa/dhunnaa/kiwwaa +
  hitiyaa-vs-thibunaa animacy in the past), past negative -ee naee + past
  questions -aadha with echo answers, the -laa perfect incl. the warm
  bath kaaladha greeting, can/cannot mata puluwan / baee + infinitive -nna,
  the -nna polite imperative (revealing dhenna/karanna) + yanna epaa
  prohibitive, want-to-do -nna + oonae and the -mu hortative (yamu! kamu!).
  Zone 8 "Out & about": kochchiya/thriiwiil eka/payin + bas staend eka,
  directions wamata/dhakunata/kelinma + methana nawaththanna, tickets
  (mata Kolambata tikat ekak dhenna, kiiyatadha), hotel kaamarayak
  thiyenawadha + dhawasakata kiiyadha + yathura + the hootalee-is-an-eatery
  note, loan-name months + maasaya/awurudhdha + aluth awurudhdha (April new
  year), phone foon eka/nambar eka/kool ekak dhenna/fotoo ekak ganna
  puluwandha, asking the way dhura/langadha dhuradha + the four theres
  methana/othana/athana/ethana. Zone 9 "Say more": eeth/haebaeyi + postposed
  nisaa + ee nisaa, if nam (puluwan nam / oonae nam), hithanawaa + dative
  mata mathakayi / amathaka unaa, work waeda karanawaa + rassaawa/ofis eka/
  guruwarayaa/goviyaa + monawadha karannee, free time kriket + X-walata
  kaemathiyi (the full like-pattern) + sindhu ahanawaa/natanawaa/muhudha,
  daily verbs naegitinawaa/naanawaa/uyanawaa/nidhaagannawaa + udheeta,
  help mata udhaw oonae / udhaw karanna / poliisiya / naethi unaa /
  praweesamen (sober framing). Zone 10 "Your Sinhala life": pawula +
  mahaththayaa/noonaa/puthaa/dhuwa/lamayi as warm address, the small-talk
  trio wayasa kiiyadha / baendhaladha / lamayi innawadha + mata awurudhu
  wissayi + people-counter dhennek, thaama (naee) + igenagannawaa, learner
  lifelines hemin kiyanna / aayeth kiyanna / sinhalen mokakdha, home
  kussiya/waththa/ballaa/puusaa, plans anidhdhaa/pereedhaa/sathi anthaya,
  storytelling issellaa / iita passee / anthimata. Romanization (documented
  at the top of
  `lang/si.js`): Sri Lankan convention — soft dental th/dh vs hard
  retroflex t/d, doubled long vowels, ae for ඇ; the course teaches SPOKEN
  Sinhala (diglossia). Zone 11 "Little extras": pace hemin
  hemin/ikmanata/dhaenma/parakku wunaa, clothes aendhum/sarama/kamisaya/
  sapaththu + andhinawaa (shoes off at the door), animals aliyaa/wandhuraa/
  kurullaa/harakaa, nature kandha/ganga/waewa (the ancient tanks!)/gasa/
  mala, choices mona ekadha + naethnam or + kopi, degrees godak/harima/
  poddak, duration kochchara kal + maasa thunak + hitiyaa. Zone 12 "Make
  Sri Lanka home": thousands dhaaha/dhedhaaha/pandhaaha + lakshaya,
  errands kondee kapanna/redhi hoodhanawaa/hadhanawaa fix-or-make,
  guests amuththoo/aethulata enna/waadiwenna/thee bonna enna + aayeth
  enna, fruit thaembili/kesel/kos/dhodam + gediyak counter, tastes
  saerayi (+saera epaa!)/paeni rasayi/aembul/thiththayi, polite polish
  bohoma sthuuthiyi + formal oba/karunaakara as recognition, capstone
  wagee + mama lankaawata aadhareyi. SI_NUMS teaches spoken number
  words (modern Sinhala writes Western digits). Audio via
  `si-LK-SameeraNeural` (ඞ ඣ ඦ get no edge-tts audio → device TTS
  fallback, like Burmese ဎ); extractor + generator both know `si`.
  Verified spellings against Wikivoyage Sinhala phrasebook (ඕනැ, ගණන්
  වැඩියි, ලාබයි, අඩු කරන්න, -න්නෙ නෑ, days, teens/tens), Wikipedia,
  Omniglot. SEO/JSON-LD still pending — add the Course entry +
  title/keywords when the course ships properly.
- **Lao (`lang/lo.js`) COMPLETE at 12 zones / 74 topics / 370 lessons**
  (July 2026, Lao-driven, research-first per the standard below; catalog
  "coming soon" label dropped + SEO/JSON-LD Course entry + title/keywords
  added on ship; moved into the shipped catalog group). Zones 11–12 added
  July 2026: Zone 11 "Little extras" — frequency ທຸກມື້/ບາງຄັ້ງ/ເລື້ອຍໆ/
  ຕະຫຼອດ, clothes incl. the ສິ້ນ sinh + shoes-off custom, animals ຊ້າງ/
  ຄວາຍ + the ລ້ານຊ້າງ Lan Xang hook, nature ແມ່ນ້ຳຂອງ Mekong/ພູ/ປ່າ/
  ນ້ຳຕົກ, the four tastes ຫວານ/ສົ້ມ/ເຄັມ/ຂົມ + ຈືດ, choosing ເລືອກ/
  ອັນໃດ/ທັງສອງ/ຕ່າງກັນ; Zone 12 "Make Laos home" — ໝາກ-fruits incl.
  ໝາກຫຸ່ງ papaya, cooking verbs ຕົ້ມ/ຈືນ/ປີ້ງ/ໜຶ້ງ/ຕຳ (ping kai! tam mak
  hung!), errands ຕັດຜົມ/ສ້ອມແປງ/ໄປສະນີ/ຮ້ານຂາຍຢາ, guests ແຂກ/ມາຫຼິ້ນ/
  ເຊີນ..., wishes ໂຊກດີ/ຂໍໃຫ້/ສຸກສັນວັນເກີດ + ປີໃໝ່ລາວ Pi Mai (cultural
  name only), duration ດົນປານໃດ/ຕັ້ງແຕ່ + ຂອງ possession + the capstone
  ບ້ານຂອງຂ້ອຍຢູ່ລາວ. Zone 1 "The Script":
  the k-family ກ ຂ ຄ ງ + the THREE tone classes (Lao's answer to Khmer's two
  series — taught by ear, same-sound letters like ຂ/ຄ distinguished as high/
  low, never pitted against each other in listen exercises), ຈ ສ ຊ ຍ, the
  d/t/n row, the labials (ph = a hard p, NOT f — the romanization trap), ຢ ລ
  ວ ຫ ຮ + the silent carrier ອ, then vowels and first readable words. Zone 2
  "Foundations": greetings (sabaidee + the ...ບໍ່ question trick), pronouns
  (ລາວ = he AND she, ພວກ pluralizer), numbers 1–10 & 11–100 (11 = ສິບເອັດ,
  20 = ຊາວ irregular), courtesy (ຂໍ…ແດ່ request frame), intros (no-copula
  name-giving), days & parts of day. Zone 3 "Say a sentence" (the grammar
  engine, taught early): ແມ່ນ (identity) vs ຢູ່ (location), verbs + SVO +
  the no-conjugation freebie, ບໍ່ negation, yes/no …ບໍ່ + echo answers,
  wh-words in situ, ຢາກ want-to vs ຕ້ອງການ need + ມັກ like. Zone 4
  "Where & with": places (ໂຮງ big-building prefix), positions (ໃກ້ near vs
  ໄກ far — a tones-matter pair), family as address terms, food (ເຂົ້າໜຽວ
  sticky rice), ordering (ຂໍ…ແດ່ + ຄິດເງິນ), daily routine. Zone 5 "How many":
  money & ກີບ + ເທົ່າໃດ, big numbers ຮ້ອຍ/ພັນ/ໝື່ນ/ແສນ/ລ້ານ, classifiers
  (noun+number+ໂຕ/ຄົນ/ອັນ/ຄັນ + ຈັກ how-many), clock ໂມງ + ເຄິ່ງ,
  market/bargaining (ແພງໂພດ + ຫຼຸດໄດ້ບໍ່), quantities. Zone 6 "Describe it":
  adjectives-as-stative-verbs (no ແມ່ນ), ສີ colors, ກວ່າ/ທີ່ສຸດ comparisons,
  ໃຈ-feelings, weather & the two seasons, body & ເຈັບ+part. Zone 7 "Then &
  now": ແລ້ວ past + ຍັງບໍ່ not-yet, ຈະ/ຊິ future, ກຳລັງ progressive, ເຄີຍ
  ever, ໄດ້ (able/allowed) vs ເປັນ (know-how) can, ຕ້ອງ/ຄວນ/ຢ່າ modals.
  Zone 8 "Out & about": vehicles + ຂຶ້ນ/ຂີ່, directions, tickets ປີ້ +
  ອອກ/ຮອດ, hotel (ມີຫ້ອງວ່າງບໍ່ + ຄືນລະ), months-by-number + dates + year,
  phone/wifi. Zone 9 "Say more": connectors ແຕ່/ເພາະ/ຖ້າ/ຫຼື, ຄິດວ່າ + ຮູ້/
  ເຂົ້າໃຈ, jobs via ເປັນ, hobbies (ມ່ວນ), home rooms & chores, help & safety
  (ຊ່ວຍແດ່/ຊ່ວຍດ້ວຍ, sober). Zone 10 "Your Lao life": like-degrees (ບໍ່ຄ່ອຍ/
  ຫຼາຍ/ທີ່ສຸດ), age/married/kids small talk, learner lifelines (ເວົ້າຊ້າໆ,
  ...ພາສາລາວວ່າແນວໃດ), furniture & pets, plans (ວ່າງ/ຫຍຸ້ງ/ນຳກັນ),
  storytelling connectors (ທຳອິດ…ສຸດທ້າຍ) + the capstone ຂ້ອຍຮັກລາວ.
  **Romanization scheme documented at the top of `lang/lo.js`** (ASCII,
  no tone marks written — tones taught by ear; ph = hard p not f; aspirates
  kh/th/ph; long vowels doubled). No Intensive (Nepal-specific). Audio via
  `lo-LA-ChanthavongNeural` (ຂ/ຄ etc. are fine; a few mc correct-options mix
  Lao + English but TTS handles them). Extractor + generator both know `lo`.
  Verified against Wikipedia (Lao script/grammar), Wikivoyage Lao phrasebook,
  Omniglot, Preply Lao word/family lists (+ sinh/animals/tastes/fruits
  verified for Zones 11–12 against Preply clothes/animals/fruits lists and
  the Wikipedia green-papaya-salad ໝາກຫຸ່ງ spelling). Zone 13+ candidates:
  Boun Pi Mai round 2 / boat racing as CULTURAL names only, weaving &
  crafts, storytelling round 2 — research each word before shipping, then
  append to `LO_UNITS`/the zone consts in `lang/lo.js`, add SYM entries,
  and regen audio (`extract_audio_strings.js lo` then
  `generate_audio.py --lang lo`).
- **Pashto (`lang/ps.js`) COMPLETE at 12 zones / 74 topics / 370
  lessons** (July 2026, Pashto-driven, research-first; researched
  against Wikipedia Pashto alphabet/grammar, Wikivoyage Pashto phrasebook,
  Omniglot, LingDocs). **The app's first RIGHT-TO-LEFT course** — the RTL
  pass lives in index.html next to the per-language font rules, keyed on
  `:root[data-lang="ps"]`: `.wb-answer`/`.wb-bank` (word-bank tiles
  assemble right-to-left), `.fill-sentence` and `.exbig` flow rtl; every
  tile/option is a single text run so nothing else needed flipping
  (verified via computed styles in the preview panel). Curriculum spine:
  Zone 1 "The Script" — the Perso-Arabic letters by SHAPE FAMILY (dots
  decide the sound), the four retroflexes ټ ډ ړ ڼ (romanized doubled:
  tt/dd/rr/nn), Pashto's own څ ts / ځ dz / ښ x / ږ g (regional values
  noted, audio leads), the ye-family vowels ی ي ې ۍ, first words. Zone 2
  "Foundations" — سلام + the beloved ستړی مه شې, pronouns incl. polite
  تاسو, the PRESENT EQUATIVE PARADIGM یم/یې/دی/ده/یو/دي (with the دی/ده
  he-is/she-is gender split), numbers 1–10 & the own-word tens (شل 20,
  دېرش 30 … سل 100), intros زما نوم … دی, courtesy مهرباني وکړه/بخښنه
  غواړم/پروا نه لري. Zone 3 "Say a sentence" (the grammar engine): GENDER
  + agreeing adjectives BEFORE the noun (غټ/غټه), SOV verbs with the
  -م/-ې/-ي endings (خورم/څښم/ځم/راځم/کوم/وایم), نه negation (+ the
  lifesaver نه پوهېږم), in-situ question words څه/چېرې/څوک/کله/ولې/څنګه,
  have لرم/لرې/لري, want غواړم. Zone 4 "People & places": family (کورنۍ
  built on کور), town places (روغتون health-place, Afghan هوټل =
  eatery), the په…کې CIRCUMPOSITION sandwich, food (ډوډۍ = bread AND
  food), TEA CULTURE (شین چای / تور چای / بوره / چای وڅښه), parts of day +
  کوم/کېږم compound verbs. Zone 5 "How many": پیسې/افغانۍ + څو/څومره,
  ګران(=dear!)/ارزان, hundreds سوه / thousands زر / لک lakh, clock بجې +
  څو بجې دي, Afghan weekday names from شنبه + جمعه day off (recognition),
  bazaar bargaining (ډېر ګران دی! ارزان یې کړه!), quantities ډېر/لږ/نور/
  بس/ټول/هېڅ. Zone 6 "Describe it": agreement round 2 (نوی/نوې, زوړ/زړه,
  ښکلی), colors incl. شین = green AND blue + feminine سره, comparison
  تر…(zə tar taa loy yam) + له ټولو superlative, feelings (ستړی ties back
  to the greeting; ناروغ = un-healthy), weather (ګرمي/یخني/باران/واوره —
  Hindu Kush snow), body + درد کوي pain pattern. Zone 7 "Then & now":
  past equative وم/وې/و/وه/وو, star past verbs لاړم/راغلم (+ لاړ/لاړه/
  راغی/راغله gender), **the ERGATIVE PAST FLIP taught gently as
  recognition** (زه→ما, تا; ما ډوډۍ وخوړه — pattern-recognition only, no
  full paradigm), future به in second position, can = verb+شم (پښتو ویلی
  شم!), must باید + warm commands راشه/کېنه/وخوره + مه prohibitive.
  Zone 8 "Out & about": transport + په موټر کې, directions ښي/کیڼ/مخامخ +
  دلته ودرېږه, hotel خونه/کیلي/تشناب + خالي خونه لرئ, phone شمېره/زنګ
  ووهه/پیغام/واي فای, **مېلمستیا hospitality** (مېلمه/کوربه/راشئ/کور مو
  ودان), learner lifelines (ورو ورو ووایه, بیا ووایه, په پښتو کې څنګه
  وایې, لږ پښتو زده لرم). Zone 9 "Say more"
  (July 2026): connectors خو/ځکه چې/که/یا/نو, mind-verbs فکر کوم/وینم/
  اورم/زده کوم/هېروم + زما په فکر opinions, occupations via the -وونکی
  doer suffix (ښوونکی/زده کوونکی) + بزګر/دوکاندار/موټروان, THE FLIP ROUND
  2 (ما وویل/واورېدل/زده کړل/وکړل + تا څه وویل + هغې she-past-doer),
  کال/میاشت + the four seasons پسرلی/دوبی/منی/ژمی, storytelling لومړی/
  بیا/وروسته/په پای کې + یوه ورځ + کیسه. Zone 10 "Your Pashto life": the
  خوښ like-pattern (زما چای خوښ دی — the liked thing agrees!), small talk
  عمر/کلن/کلنه/ماشومان لرې, village & valley کلی/غر/سیند/باغ/ونه/ګل,
  animals آس/اوښ/وزه/سپی/پیشو/مرغه, the partug-kamis clothes کمیس/پرتوګ/
  پګړۍ/خولۍ/څپلۍ, Afghan fruits انار/انګور/مڼه/هندواڼه/بادام + وچه مېوه.
  Zone 11 "Little extras": frequency هره ورځ/کله کله/تل/هېڅکله, school
  کتاب/قلم/کاغذ + لولم/لیکم, tastes خوږ/تروش/تریخ/مالګه/مرچ, the room
  دروازه/کړکۍ/مېز/چوکۍ/توشک/بام (guests sit on toshaks!), conversation
  glue سمه ده/رښتیا/البته/شاید/یعنې/ضرور, timing اوس/ژر/ناوخته/وخت.
  Zone 12 "Make it home": blessings مبارک شه/ژوندی اوسې/ښه سفر/په خیر
  راغلې, doing-verbs جوړوم/مينځم/پاکوم + the جوړ fix-and-greet root,
  beloved words ملګری/ګاونډی/خلک/وطن/سوله/زړه, the arts اتڼ/سندره/شعر/
  رباب/لنډۍ (the two-line landay!), duration څومره وخت/له پرونه/تر اوسه
  + زه دوه کاله دلته یم, and the capstone مینه: زه له پښتو سره مینه لرم.
  Romanization scheme documented at the top of
  `lang/ps.js` (ASCII; schwa written "a" à la manana; retroflexes doubled;
  ښ=x, ږ=g with regional notes). No Intensive (Nepal-specific). Audio via
  `ps-AF-GulNawazNeural` (824 clips); extractor + generator both know
  `ps`. Zone 13+ candidates: the oblique case round-up, months by name,
  more past-transitive paradigms, proverbs (متلونه) as recognition —
  research each word before shipping.
- **Mongolian (`lang/mn.js`) COMPLETE at 12 zones / 84 topics / 420
  lessons** (July 2026, Mongolian-driven, research-first;
  core phrases/numbers verified against the Wikivoyage Mongolian
  phrasebook; early-access label dropped at 12 zones, July 2026; SEO/JSON-LD
  Course entry + title/keywords added on ship). CYRILLIC, left-to-right,
  system fonts — no webfont or RTL work needed. Zone 1 "The Script" tells
  Cyrillic's own story: the lookalike vowels А О У Э И, Mongolia's OWN
  two letters Ө Ү (+ Ы Й), the FALSE FRIENDS Н Р С В Х (look Latin,
  sound different — the zone's running joke is "trust your ears, not
  your eyes"), the reliable crew Б Г Д З Л М Т, the hushers Ж Ч Ш + Ц
  (цай!), the y-team Е Ё Ю Я + loan letters К П Ф Щ, and the silent
  signs Ь Ъ + first real words (гэр, морь, тал, айраг, монгол). Zone 2
  "Foundations": the repeat-it-back greeting Сайн байна уу (+ Юу байна?),
  pronouns with the чи/та respect split (тэр = he AND she), numbers 1–10
  and the regular арван-teens + own-word tens (хорь/гуч/дөч/тавь → зуу),
  courtesy тийм/үгүй/уучлаарай/за/зүгээр/болно, the Намайг … гэдэг name
  pattern (+ Миний нэр starter, хэн who), and time words өнөөдөр/маргааш/
  өчигдөр/өдөр/шөнө/одоо. Zones 3–8 (July 2026): Zone 3 "Building
  sentences" — байна to-be sentences, the -на/-нэ/-но/-нө present-future
  with NO person conjugation (the freebie), -гүй negation + биш for
  nouns, уу/үү yes-no questions (vowel harmony picks the vowel!) + echo
  answers, юу/хаана/хэн/хэзээ in-situ, надад байна the have-pattern,
  хүсэж байна want. Zone 4 "Cases & places" — family terms (ээж/аав/
  эгч/ах by age), town places, the -д/-т dative-locative, -ын/-ийн
  genitive, -аас/-ээс ablative + хаанаас ирсэн бэ, positions дотор/
  гадаа/дээр/доор, food & the ger kitchen (бууз! сүүтэй цай! the -тай
  with/having suffix). Zone 5 "Numbers & daily life" — мянга/сая big
  numbers, төгрөг money + хэдэн төгрөг вэ, shopping (авна/үнэтэй/хямд),
  clock time хэдэн цаг вэ + цагт, the Tibetan-loan weekday names
  Даваа…Ням (recognition), quantities их/бага/олон/цөөн, the насны
  small-talk trio + Та хэдэн настай вэ. Zone 6 "Describing things" —
  adjectives before nouns with no agreement, colors + the Улаанбаатар
  red-hero hook, comparisons надаас + -аас … илүү, feelings (даарч
  байна — Mongolia's word for freezing!), дуртай + dative liking
  (Би цайнд дуртай), weather тэнгэр/хүйтэн/халуун/салхитай, body parts
  + өвдөж байна. Zone 7 "Past & present" — the -сан/-сэн past, -ж/-ч
  байна progressive (Цай ууж байна), -лаа just-now past, чадна can
  (Би морь унаж чадна!), хэрэгтэй need + ёстой must, -аарай/-ээрэй
  polite requests, тэгээд sequencing + storytelling. Zone 8 "Getting
  around" — transport incl. галт тэрэг the fire-cart train + -аар
  by-vehicle, суух board / буух get off / морь унах ride + Энд бууна,
  directions with THE compass fact (ger doors face south, so баруун =
  right AND west, зүүн = left AND east) + чигээрээ/эргээрэй/зогсоорой,
  tickets билет (тасалбар on signs) + хэзээ хөдлөх вэ, staying зочид
  буудал the guests'-station hotel + өрөө/түлхүүр/хэдэн хоног + Та
  хаана амьдардаг вэ (-даг habitual), phone утас (= thread/wire!) +
  дугаар/залгаарай/вайфай, months by number (нэгдүгээр сар January —
  сар = moon AND month) + өнгөрсөн/энэ/ирэх жил. Zones 9–12 (July 2026):
  Zone 9 "Conversation" — connectors гэхдээ/учраас (postposed!)/эсвэл/бас/
  тэгвэл, mind-verbs гэж бодож байна + санах remember-AND-miss + мартсан,
  jobs багш/малчин/жолооч/оюутан + Би багшаар ажилладаг (-аар as "as"),
  hobbies дуулах/бүжиглэх/зурах/хөгжим сонсох/кино үзэх, наадам sports
  (factual: бөх/морин уралдаан/сур харваа + хурдан/хүчтэй), chores
  цэвэрлэх/угаах/хоол хийх + завгүй busy = free-time-less + амрах,
  learner lifelines Дахиад/Удаан хэлээрэй + Монголоор юу гэдэг вэ + Би
  жаахан монголоор ярьдаг. Zone 10 "The countryside" — the four seasons
  хавар/зун/намар/өвөл + улирал, хөдөө/нутаг homeland/нүүдэлчин nomad/
  нүүх migrate, THE FIVE LIVESTOCK таван хошуу мал (хонь/ямаа/үхэр/
  тэмээ/адуу — адуу herd vs морь riding horse), wild animals чоно/үнэг/
  бүргэд eagle-hunters/буга/загас/шувуу, nature уул/гол/нуур/ой/мод/
  цэцэг, inside the ger эсгий felt/тооно roof-ring/зуух stove + гэр
  барих/буулгах, dishes хуушуур/цуйван/шөл/аарул + Амттай байна +
  Сайхан хооллоорой. Zone 11 "Little extras" — frequency үргэлж/
  ихэвчлэн/заримдаа/өдөр бүр + хэзээ ч + -гүй never, times of day
  өглөө/үд/орой + Өглөөний мэнд/Оройн мэнд, clothes дээл/малгай/гутал/
  цамц/өмд + өмсөх vs тайлах, choosing аль нь/сонгох/хоёулаа/өөр/
  адилхан, pace эрт/оройтох (Би оройтлоо!)/яг/бараг/аль хэдийн/
  аажуухан, reading & writing бичих/унших/хичээл/дэвтэр/харандаа,
  hospitality зочин/Тавтай морилно уу/Ороорой/Суугаарай/Цай уугаарай/
  дайлах + the right-hand custom. Zone 12 "Make Mongolia home" — он vs
  жил (Хэдэн онд төрсөн бэ? + Өнөөдөр сарын хэдэн вэ?), errands засах/
  үс засуулах (-уул causative)/шуудан/мөнгө солих/захиа илгээх, help &
  safety (sober: Туслаарай/аюултай/Болгоомжтой/цагдаа/гээсэн), wishes
  Баяр хүргэе deliver-the-joy/Төрсөн өдрийн мэнд/Шинэ жилийн мэнд/
  Сайхан амраарай/Сайн яваарай + ерөөл, duration хэр удаан + Хоёр жил
  болж байна + саяхан/удахгүй/-аас хойш, little words тухай/шиг/хамт/
  зөвхөн/ганц, capstone хайртай (dative loved one: Би чамд хайртай) +
  зүрх/мөрөөдөл/ирээдүй + Би Монголд хайртай.
  Romanization scheme documented at the top of `lang/mn.js` (letter tiles
  may use ö/ü for the Ө/Ү distinction; WORD roms use the informal ASCII
  ө→o, ү→u convention — ugui, suu, onoodor — with the audio carrying the
  true vowels; х=kh, ц=ts, doubled long vowels). Audio via
  `mn-MN-BataaNeural`; extractor + generator both know `mn`. Zone 13+
  candidates: Цагаан сар round 2 (Сар шинийн мэнд — cultural names only
  per the secular rule), the -вал/-вэл conditional, хэлмэрч
  interpreter & language talk round 2, morin khuur & long song as
  cultural recognition vocab, more -уул causatives — research each word
  before shipping.
- **Bengali (`lang/bn.js`) COMPLETE at 12 zones / 84 topics / 420
  lessons** (early-access label dropped at 12 zones, July 2026) (July 2026, Bengali-driven, research-first; verified against
  the Wikivoyage Bengali phrasebook — incl. the Akademi -ো teen spellings
  এগারো…চোদ্দো — and Wikipedia "Bengali alphabet"; added outside the
  original phase roadmap because Ruan's friends are going to ministry work
  in Kolkata — the course itself is secular per the house rule). Target
  variety: **Standard Colloquial Bengali as spoken in KOLKATA / West
  Bengal** (cholito bhasha, the Rarhi/Nadia-based standard; never the
  literary shadhu register). Kolkata word choices flagged in notes where
  the two banks differ: জল water vs BD পানি, নুন salt vs BD লবণ. Zone 1
  "The Script" tells Bengali's own story: the hidden inherent **ô** (ক =
  ko; মন = mon!) + the মাত্রা headline; the vowel-sign dance (ে written
  BEFORE its consonant — the Burmese-prevowel trick — ো hugging both
  sides); everyday consonants + the দাদা/দিদি street-politeness words;
  the two T families (soft dental ত দ vs hard retroflex ট ড — English
  t/d ARE the hard ones); the aspirate puff (মাছ-ভাত machhe-bhate
  Bangali!); the three-letters-one-sound শ ষ স family + চা/জল; nasal
  signs ং ঁ + first sight conjunct হ্যাঁ, ending reading বাংলা and
  কলকাতা. Zone 2 "Foundations": কেমন আছেন?/ভালো আছি + the reply loop +
  আসি goodbye (নমস্কার taught factually as the common WB greeting;
  Muslim neighbours' সালাম noted in a tip), the তুই/তুমি/আপনি respect
  ladder + সে = he AND she (no gender!), numbers 1–10, courtesy
  (হ্যাঁ/না/ধন্যবাদ/মাফ করবেন/ঠিক আছে/আচ্ছা), zero-copula intros আমার
  নাম… + আপনার নাম কী?, time words আজ/কাল (kal = tomorrow AND
  yesterday!) + গতকাল/আগামীকাল, teens এগারো…বিশ + market কুড়ি.
  Zones 3–6 (July 2026): Zone 3 "Building sentences" — zero-copula
  demonstratives এটা/ওটা/সেটা, the PERSON-based present endings -i/-o/
  -en/-e (করি করো করেন করে; খাওয়া = eat AND drink), আছে/নেই have-and-
  exist + এখানে/ওখানে, negation verb+না / নয় / জানি না-বুঝি না, yes-no
  কি (vs কী!) + echo answers, question words কোথায়/কখন/কেন/কোনটা,
  want/like চাই + -তে চাই + dative আমার…ভালো লাগে. Zone 4 "Cases &
  places" — town words, locative -এ/-তে/-য়, possessive -র/-এর + কার,
  object -কে + কাকে, positions উপরে/নিচে/ভিতরে/বাইরে/কাছে/দূরে +
  টেবিলের উপরে, present continuous -ছি/-ছ/-ছেন/-ছে (কোথায় যাচ্ছ?),
  food & ordering (এক কাপ চা দিন; দিন=give AND day). Zone 5 "Numbers &
  daily life" — tens to একশো (ষাট 60 vs সাত 7 = the retroflex payoff!),
  দাম কত + সস্তা/দামি, the -টা classifier (একটা/দুটো/তিনটে, বইটা the,
  -গুলো plural), shopping লাগবে/নেব/দেবেন/কম করুন/আর/ব্যাস, clock কটা
  বাজে + সাড়ে, weekdays -বার + আজ কী বার, family ভাই/বোন (younger; 
  দাদা/দিদি elder) + ছেলে/মেয়ে/স্বামী/স্ত্রী/পরিবার. Zone 6
  "Describing things" — invariant adjectives, রং colors (হলুদ = yellow
  AND turmeric), চেয়ে/সবচেয়ে comparisons, dative feelings মন খারাপ/
  খিদে-তেষ্টা পেয়েছে/ঘুম পাচ্ছে, weather গরম/ঠান্ডা/বৃষ্টি/বর্ষা, body,
  health ব্যথা/জ্বর/ডাক্তার/ওষুধ. **Node-title register (Ruan, July
  2026): PROFESSIONAL, standard-curriculum terminology** — "The inherent
  vowel", "Vowel signs", "Dental & retroflex", "Aspirated consonants",
  "The three sibilants", "Personal pronouns", "Courtesy expressions";
  never cutesy names ("the vowel dance" was retitled). The mix step is
  titled "Mixed practice". **This register is now the HOUSE STANDARD for
  every language** (Ruan, July 2026): a sweep retitled the casual tier
  across Khmer, Burmese, Sinhala, Pashto and Mongolian (52 nodes — e.g.
  "The magic ឱ្យ"→"The verb ឱ្យ", "Hissing sounds"→"The s family",
  "Letters that hum"→"The half-nasals", "The past flip"→"The ergative
  past", "The reliable crew"→"The familiar consonants"). Descriptive
  communicative titles ("Directions", "At the hotel", "Tell your story")
  and factual cultural ones ("Tea culture", "Guests & melmastia", "At
  the kadee") stay; linguistics terms are used where they exist
  ("false friends" is a real term and stays). Retitles are audio-neutral
  (titles are never spoken). The Nepali main course was already
  professional; the Nepali Intensive keeps Ruan's own ministry titles. Zones 7–12 (July 2026): Z7 "Past & future" — simple past -লাম (গেলাম
  stem-change), perfect -েছি + the beloved ভাত খেয়েছ? greeting, future
  -ব/-বে/-বেন + চা খাবেন?, sequencing প্রথমে/তারপর/শেষে, can -তে পারি,
  need/must দরকার + আমাকে -তে হবে (dative doer!), polite -উন requests.
  Z8 "Getting around" — the tram!, ভাড়া/উঠি/নামি + এখানে নামব,
  directions, tickets + কখন ছাড়বে-পৌঁছাবে + -টায় at-times, loan months
  + এই/গত/আগামী, থাকি + কোথায় থাকো?, phone. Z9 "Conversation" —
  connectors, যদি…তাহলে + না হলে, ভাবি/আমার মনে হয়/সত্যি, জানি-vs-চিনি
  + মনে আছে/ভুলে গেছি/বুঝেছি, work, learner lifelines (আস্তে-আবার বলুন,
  বাংলায় কী বলে?, বাংলা শিখছি), help (sober). Z10 "Everyday life" —
  রোজ routine, home rooms + the ছাদ, hobbies, পড়ি-লিখি-শিখি + ছবি,
  small-talk trio বয়স-বিয়ে-দেশ, hospitality (অতিথি, আরেকটু, খেয়ে যান,
  আবার আসবেন), plans চলো/দেখা হবে/ব্যস্ত-ফাঁকা. Z11 "Nature & living"
  — নদী/পাহাড়/সমুদ্র, animals incl. বাঘ, fruits + টক/ঝাল, clothing +
  পরি-vs-পড়ি homograph + জুতো খোলো, kitchen + চিনি homograph,
  quantities কেজি/অনেক/কিছু, times of day ভোর→রাত. Z12 "Making it
  home" — হাজার/লাখ/কোটি, errands (চুল কাটাতে চাই causative), 
  emergencies বাঁচাও/তাড়াতাড়ি/ভয় নেই (sober), duration কতদিন-কতক্ষণ +
  ধরে-vs-থেকে, wishes (শুভ জন্মদিন, ভালো থেকো, স্বাগতম), postpositions
  সঙ্গে/জন্য/পর্যন্ত, capstone আমি বাংলা ভালোবাসি. Zone 13+ candidates:
  past habitual -তাম, compound verbs (নিয়ে যাওয়া family), relative
  যে-clauses, Bengali-calendar months as cultural names — research
  before shipping.
  Romanization scheme documented at the top of `lang/bn.js` (ASCII;
  inherent vowel & অ AND ও all written "o" — audio carries the ô/o
  split; letter tiles teach soft-vs-hard t/d, word roms collapse both to
  plain t/d — taka, thik, dada — the Mongolian ö/ü precedent). Art:
  dawn over the Hooghly — violet river, Howrah bridge silhouette right
  (a bridge, secular), nouka country boat + boatman, coconut palms,
  banana leaves; mascot = Bengal tiger cub; India flag in LANG_FLAGS.
  Audio via `bn-IN-BashkarNeural` (female `bn-IN-TanishaaNeural`);
  extractor + generator both know `bn`; extractor's COMBINING_ONLY
  regex gained the Bengali vowel signs া-্ ৗ. No Intensive
  (Nepal-specific). Zone 3+ candidates (grow like Khmer; drop the
  early-access label at 12 zones): "Say a sentence" — SOV + zero copula,
  the PERSON-based verb endings (আমি করি / তুমি করো / আপনি করেন / সে
  করে — Bengali conjugates by person+politeness, NOT gender/number),
  আছে/নেই have-and-exist, negation with না, yes/no questions by tone +
  কি; then cases little by little (-এ/-তে locative, -র genitive, -কে
  objective), the -টা/-খানা classifiers, want/like (আমার চাই/ভালো
  লাগে dative subjects) — research each word before shipping, then
  append to `BN_UNITS`/the zone consts in `lang/bn.js`, add SYM
  entries, and regen audio (`extract_audio_strings.js bn` then
  `generate_audio.py --lang bn`).
- **Burmese (`lang/my.js`) COMPLETE at 12 zones / 84 topics / 420 lessons**
  (July 2026, staged A–E). Zone 1 "The Script"; Zone 2 "Foundations";
  Zone 3 "Say a sentence" (ဒါ/အဲဒါ/ဟိုဟာ + ပါ, verbs + …တယ်, future …မယ်,
  negation မ…ဘူး, yes/no …လား + echo answers, wh ဘာ/ဘယ်မှာ/ဘယ်သူ + …လဲ,
  want ချင် + like ကြိုက်); Zone 4 "Where & with" (မှာ/ကို/က/နဲ့, cities,
  kin terms as address ဦး/ဒေါ်/အစ်ကို/အစ်မ/ဆရာ, food, teashop …ပေးပါ);
  Zone 5 "How many" (classifiers ယောက်/ခု/ကောင်/ခွက် + the ta/hna weakening,
  money ကျပ် + ဘယ်လောက်လဲ, big numbers ရာ/ထောင်/သောင်း, bargaining
  လျှော့ပေးပါ/ယူမယ်, clock time နာရီ/ခွဲ, days of the week); Zone 6
  "Describe it" (adjectives-as-stative-verbs, tastes, အ-prefix colors,
  comparisons ပို/ထက်/အ…ဆုံး, feelings, three seasons, body & health);
  Zone 7 "Then & now" (past ခဲ့, now နေ, ever ဖူး, news ပြီ, can နိုင် vs
  know-how တတ် + မြန်မာလို, must ရ, commands verb+ပါ); Zone 8 "Out & about"
  (vehicles + စီး, directions ဘယ်/ညာ/တည့်တည့်/ကွေ့, far/near, tickets &
  stations + ထွက်/ရောက်, hotel + the have-verb ရှိ, calendar လ/နှစ်/ရက်,
  phone); Zone 9 "Say more" (ဒါပေမဲ့/လို့/ပြီးရင် glue, if ရင်, think ထင် +
  နားလည်/ပြန်ပြောပါ, occupations via doer suffixes, hobbies, home routine,
  help & safety); Zone 10 "Your Burmese life" (degrees အရမ်း/သိပ်မ…ဘူး,
  family, age & married small talk, not-yet သေး, language talk, အခု/နောက်မှ/
  ဘယ်တော့, tell-your-day); Zone 11 "Little extras" (need လို, pace
  ဖြည်းဖြည်း/မြန်မြန်, longyi & clothes, animals, nature, remember/forget,
  together/alone + years); Zone 12 "Make Myanmar home" (lakhs သိန်း/သန်း,
  Pali ordinals, errands, စိတ် feelings + ဂရုစိုက်ပါ, guests & visiting,
  -သီး fruits, polite polish ပါ-inside + နော်). Romanization is the h-prefix
  aspiration scheme (hk/hs/ht/hp) so **th stays reserved for သ /θ/**, checked
  finals take **q** (houq, tiq, shiq), words romanized as pronounced (kyanaw,
  chauq) — documented at the top of `lang/my.js`. No Intensive
  (Nepal-specific). Future Zone 13+ candidates: months by loan-name as
  recognition vocab, weather round 2, ချစ်တယ် & relationships, more
  storytelling (ပြောပြ) — research each word before shipping.
- **The Burmese curriculum is Burmese-DRIVEN, not a Nepali/Khmer mirror**
  (Ruan, July 2026 — like the Khmer "Khmer-driven from Zone 8" rule, but from
  the start for Burmese). Researched against how Burmese is actually taught
  (Wikipedia "Burmese grammar", John Okell *Burmese by Ear*, *Burmese for
  Beginners* / Paw Paw Tin, Wikivoyage). What makes Burmese its own thing, and
  drives the sequence:
  - **Verb-final (SOV) grammar with sentence-final verb particles is THE core**
    — teach it early. A Burmese statement ends in the verb + ...တယ် (realis /
    general/present) or ...မယ် (irrealis / future/intention); negation wraps the
    verb မ...ဘူး; yes/no questions add …လား, wh-questions add …လဲ. This "grammar
    engine" should be Zone 3, before piling on vocab.
  - **Bound/postpositional particles** do the work word-order does in English:
    က (subject/from), ကို (object/to), မှာ (at/in), နဲ့ (with/and) — a whole zone.
  - **Classifiers** (noun + number + classifier, e.g. ကလေး ၅ ယောက် "5 children")
    come mid-course, once counting and nouns are solid — not up front.
  - **Tones are taught inside real words/sentences, never in isolation** (Zone 1
    does this) — exaggerate + slow down, let the ear + audio lead.
  - **Lean into the freebies as encouragement**: Burmese has *no* verb
    conjugation, *no* grammatical gender, *no* plural agreement.
  - **Kinship / status terms are used where English uses pronouns** (pronoun
    avoidance, already flagged in Zone 2) — treat family terms as address, not
    just vocab.
  That roadmap was DELIVERED in full as Zones 3–12 (see the zone list above);
  key spellings were verified against Wiktionary as they shipped (ဒါပေမဲ့ not
  ဒါပေမယ့်; တစ်ခါတစ်လေ; ဈေး; တည့်တည့် per asiapearltravels directions).
  **Burmese font gotcha:** its reordering vowels/medials (prevowel ေ, ya-yit ြ,
  ya-pin ျ) shatter into dotted boxes when rendered in the system fallback font.
  Any Burmese must keep **Noto Sans Myanmar in its font stack** — `.deva`/`.mc`/
  `.mtile` etc. already do; bare Burmese in note titles (`.exq`) / prose
  (`.note-body`) is covered by the `:root[data-lang="my"]` font rule next to the
  scenery palette. Put inline Burmese in notes inside `<span class="deva">`.
- Khmer grows zone by zone (Zones 1–12 shipped). **From Zone 8 on, the Khmer
  curriculum is Khmer-driven, not a Nepali mirror** (Ruan, July 2026):
  topics come from what Khmer itself needs — researched against FSI
  Cambodian Basic/Contemporary and the MSU "Basic Khmer" open textbook.
  Zone 8 "The Khmer way" delivered the Khmer-specific machinery (clock time,
  classifiers, ឱ្យ, serial-verb directionals + eating out, visiting, phone);
  Zone 9 "Street-smart Khmer" the colloquial layer (អត់ negation + echo
  answers, post-verbal បាន, ទើបតែ/កំពុងតែ/នៅ timing, hotel, pharmacy,
  bargaining round 2, formal month names); Zone 10 "Your Khmer life" the
  personal layer (ចូលចិត្ត likes, hobbies, house & positions, tickets,
  school, farm, wishes & celebrations); Zone 11 "Tell your story" the
  conversational layer (appointments, describing people, story connectors,
  border & documents, work, chat glue អញ្ចឹង, future & hopes); Zone 12
  "Make Cambodia home" the settling-in layer (fruits & tastes, kitchen,
  big riel numbers, errands, emergencies, the married/kids/age small-talk
  trio, how-long duration). Zone 13 candidates: storytelling round 2
  (ពេលនោះ at that time, ស្រាប់តែ suddenly — research/verify carefully),
  giving & receiving round 2 (ខ្ចី borrow / ឱ្យខ្ចី lend),
  festivals as recognition vocab (ភ្ជុំបិណ្ឌ, បុណ្យអុំទូក — CULTURAL
  NAMES ONLY, no religious teaching, per the secular-content rule),
  nature & trips (សមុទ្រ sea, ភ្នំ review, ព្រៃ forest), and colors
  round 2 + patterns (research each new word against sources before shipping —
  see the research-not-native standard below). Append to `KM_UNITS`/
  `KM_LESSONS` in `lang/km.js`, add SYM entries, regen audio
  (`extract_audio_strings.js km` then `generate_audio.py --lang km`).
- **Content quality is verified by research, not a native reviewer** (Ruan,
  July 2026 — no native speaker is available, and that's fine; the standard is
  "research it well enough to ship confidently"). When a word/spelling/usage is
  uncertain, cross-check it against multiple sources before committing: the MSU
  "Basic Khmer" open textbook, FSI Cambodian, Wiktionary Khmer entries, and
  learner references (learnkhmernow, ling-app). Prefer the colloquial spoken
  form taught by beginner courses over formal/literary variants. Flag any
  genuinely unresolved call inline in the lesson's `note` rather than guessing
  silently. A **staged content health-check of Zones 1–12** (romanization
  consistency, gloss accuracy, natural phrasing, difficulty ramp) is the top
  open task — see the review workflow the new-chat handoff describes.
- A new language = new `lang/<code>.js` pack + `LANG_CATALOG` entry + art
  (secular!) + audio dir + font added to the Devanagari font stacks if its
  script needs one (the Khmer step is the template — see Step 3 below) + an
  inline-SVG flag in `LANG_FLAGS` for the header language switcher + an
  **SEO refresh** (title/description/keywords, JSON-LD `teaches` + a new `Course`
  entry — see Repo layout's SEO note) so the site ranks for "learn &lt;language&gt;".
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
  (now at 12 zones / 420 lessons). **No Intensive track for Khmer** (that
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

## Religious studies (faith mode — July 2026)
A second app MODE next to language learning, chosen from the **mode dropdown
left of the language picker** in the header (`#mode-switch`, styled like the
language switcher; globe = Language learning, book = Religious studies).
Deliberately Christian by design (Ruan) — the secular-content rule does NOT
apply inside this mode; it teaches Christianity with contextualised language
and art. **The audience is NEPALI PEOPLE learning about Jesus** (Ruan, July
2026): Nepali is the PRIMARY language on every surface — hero, tabs, node
titles, story text, the explanations, buttons, even Devanagari numerals in
progress counts — with English as the quiet second line (never English-first
with a Nepali translation). Current scope: **Nepali only** (`FAITH_CATALOG`),
reusing the Nepali pack's art, voices and recorded-audio plumbing.
- **It is a bilingual STORY PATH, not a lesson course** — no XP/exercises.
  Two pages replace Learn/Alphabet/Review while the mode is active (tabs swap
  via `body.faith` CSS): **God's Story** (`view-fstory`) — the whole biblical
  narrative in ten movements, creation → fall (fellowship broken) → covenants
  → Jesus → new creation (framing informed by BibleProject: one unified story
  that leads to Jesus; kept within orthodox/Nicene Christianity) — and
  **Jesus** (`view-fjesus`) — his life and parables (10 moments incl. Jesus
  teaches prayer — the Lord's Prayer paraphrased — and the two builders).
  Settings stays. Finishing every moment of a story shows a completion
  banner (cheer mascot + cross-link button to the other story); open
  stories have a previous-link (`.fprev`). Both pages carry the full
  Nepali HOME HERO art (verbatim static copies). Each page opens with an
  **Overview node** (restyled July 2026 v9 — the old `.fov` gradient card
  is gone): for God's Story an ELEVEN-beat full gospel presentation
  (सुसमाचार — छोटकरीमा; rewritten July 2026 to Ruan's outline — a story
  you can PLAY to someone via the play-all button: creation for
  relationship → friendship broken by our rebellion → God's plan born of
  love → Israel chosen from Abraham to bless all nations → Jesus from
  that nation, virgin-born Son of God → cross as sacrifice +
  resurrection over the darkness → alive at God's right hand, believers
  restored as God's children → the Holy Spirit given → Jesus' return →
  the healing message = the gospel → walk-through transition) and "Who
  is Jesus?" for the Jesus page — authored as
  `overview:{t,ne,art,start,paras}` in the story data, opened via
  `openFNode(sid,'ov')`, rendered like a story (script/roman picker,
  recorded audio, play-all). It renders as the FIRST card *inside* the
  `.fnodes` path, visually identical to the moment cards (unnumbered);
  while nothing is read it carries the mascot + सुरु chip. Its closing
  paragraph and button hand off into detail ("सुरुदेखि हेरौं" — from
  here, the whole story in detail): the button calls `markFOv(sid)`,
  which ticks the overview (stored as `<storyId>-ov` in FAITH_DONE —
  section progress counts stay sections-only) and opens moment 1. The
  old "N moments — start anywhere" line is REMOVED (Ruan, July 2026);
  the progress line appears only once ≥1 moment is read. The extractor
  pulls `overview.paras[i][0]` too.
  Each page is a list of **big-moment NODES (July 2026): none locked, ONE
  short story each** (unlike the 5-lesson language topics). A node card shows
  its scene art + bilingual title + a read-tick; tapping opens the story
  reader in place (`openFNode`/`closeFNode`): enlarged art, the bilingual
  paragraphs, a bilingual "किन महत्त्वपूर्ण · Why it matters" explanation box
  (`note` — a [nepali, roman, english] triple with its own recorded audio;
  the whole Nepali line is tappable to play), and an अगाडि/समाप्त button
  (`markFRead`) that advances to the next moment. `intro` is also a triple.
  **Progress** ("continue where you left off") persists per device in
  localStorage `sajilo_faith` (`{<code>:{done:[sectionIds]}}` —
  `loadFaithDone`/`saveFaithDone`; cleared by resetAll like every sajilo*
  key; not cloud-synced yet). The next unread node carries the mascot and a
  Start/Continue chip. `view-fstory` carries the full Nepali HOME HERO art
  (a verbatim static copy — `applyArt` only targets the FIRST `.hero-mtns`,
  which is view-home's, so the faith hero stays Nepali no matter what);
  `view-fjesus` keeps a page band.
- Content lives in **`faith/ne.js`** (`registerFaith({code,stories})`;
  stories → sections → `{id, t, ne, art, note,
  paras:[[nepali, roman, english, reference?]]}`; scene art = `FNE_ART`,
  SVG scene emblems with gradient skies, viewBox 0 0 120 84, per-scene
  gradient ids gA..gR — scenes & symbols only, no depictions of God or of
  Jesus' face). **Content register (Ruan, July 2026 — "storytelling
  mode"): written for the un-churched reader.** Every person, place and
  church-word is introduced INSIDE the story on first use in its section —
  never assume the reader knows who David, the prophets, Israel, or Mary
  Magdalene are (e.g. kings: "after Egypt Israel settled in their land →
  the best-loved king was a man named David → over hundreds of years many
  kings lived in deep sin → so God kept sending prophets, people chosen to
  speak his words to kings and people → in the end Israel was disciplined,
  forced from their land"). Same for बलि sacrifice, निर्वासन exile, चेला
  disciples, बप्तिस्मा baptism. Rich, flowing narrative — full, not
  shortened; each section bridges from the previous one. Apply this
  standard to ALL future faith content and languages. Other rules in its
  header: paraphrase only
  (never copy Bible translation text), references name the passages, high
  honorific for God/Jesus, vocabulary consistent with the Intensive track
  (परमेश्वर, येशू, पाप, सङ्गति…), Nepali strings must avoid `' " < > \`
  (inline onclick), rom fields ASCII. **Keep `paras[i][0]` AND `note[0]` byte-stable
  unless you regenerate the nef audio** — clips are hashed from those exact
  strings (the extractor pulls both).
- **Script/Roman picker** (`.fpick`, `setFRom`) sits at the top of each open
  story — shows the Nepali as Devanagari or as course-style romanization.
  Mode + fRom are device prefs (`prefsPick`), never synced.
- Engine pieces: `MODE_CATALOG`/`switchMode`/`paintModeSwitch`/`initFaithMode`
  (next to the language-switcher code), `buildFaith`/`fnodesHTML`/`freadHTML`,
  faith reroute in `show()`, and **language is locked while in faith mode**
  (guard at the top of `switchLang`; `paintHomeLangSwitch` lists
  `FAITH_CATALOG` instead and shows the picker even with ONE entry — so the
  faith language dropdown is always visible).
- **Audio**: clips in `audio-nef/` — regenerate with
  `osascript -l JavaScript extract_audio_strings.js nef` (extracts every
  `paras[i][0]`) then `python3 generate_audio.py --lang nef` (same
  `ne-NP-SagarNeural` voice as the course). `playFile` checks the course
  manifest first, then `FAITH_KEYS` (loaded by `loadFaithManifest`).
- Adding a faith language later = `faith/<code>.js` + `FAITH_CATALOG` entry +
  `nef`-style extractor/generator entries + an audio dir.
- Future content candidates (Ruan): Jesus' followers / Acts.

## Design / content rules
- **Course content is secular language learning** (Ruan, July 2026): every
  language course — Nepali main, Khmer, future languages — teaches the language
  in the best, most efficient way with everyday secular content, NO ministry or
  Christian material. TWO exceptions, both deliberate: the Nepali **Language
  Intensive** track (ministry-centered, built for Ruan's community — why no
  other language gets an Intensive), and the whole **Religious studies mode**
  (see its section above), which is Christian teaching by design.
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
  - **Exception — national flags** (Ruan, July 2026): the `LANG_FLAGS`
    inline-SVG flags in the language switcher are exempt — a country's official
    flag is a factual state symbol, not devotional art. Cambodia's flag keeps
    its white Angkor Wat silhouette even though a temple in the *scenery* is
    forbidden. The rule governs authored art (hero/band/mascot), not real flags.

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
  file first** with the committed extractor (JXA — no Node needed; run from the
  repo root):
  ```
  osascript -l JavaScript extract_audio_strings.js km          # lang/km.js  → audio_strings_km.json
  osascript -l JavaScript extract_audio_strings.js my          # lang/my.js  → audio_strings_my.json
  osascript -l JavaScript extract_audio_strings.js lo          # lang/lo.js  → audio_strings_lo.json
  osascript -l JavaScript extract_audio_strings.js ps          # lang/ps.js  → audio_strings_ps.json
  osascript -l JavaScript extract_audio_strings.js mn          # lang/mn.js  → audio_strings_mn.json
  osascript -l JavaScript extract_audio_strings.js ne          # index.html  → audio_strings.json
  osascript -l JavaScript extract_audio_strings.js km --check  # verify only, writes nothing
  ```
  It implements the spoken-strings list above plus the exact committed-file
  conventions: lessons in unit order (main, then Intensive) → alphabet → SRS
  seed, dedup by first occurrence, filter by the pack's `script` regex, skip
  combining-marks-only strings and `step:'test'` lessons. `--check` proves a
  strings file still matches its pack (both were verified byte-identical when
  the tool landed, July 2026).
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
   `o[a] === say` and no duplicate options; **mc `r` must never equal one of
   that exercise's own options** (the rom renders above the choices BEFORE
   answering — a July 2026 sweep removed 192 such answer-giveaways across
   all four packs; keep `r` only where options are meanings, not
   romanizations); wb answers ⊆ pool AND pool bigger
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
- **DEPLOY ONLY WHEN RUAN SAYS SO** (Ruan, July 2026): every push costs ~15
  Netlify credits. NEVER `git push` on your own judgment — commit locally as
  work completes and wait for Ruan to explicitly say "deploy"/"push".
- `git push` password = GitHub **Personal Access Token** (not the account password).
- The `audio/` and `audio-km/` folders must sit at the **top level** of the
  repo, next to the HTML.
- Verify after deploy: hard-refresh bhasaly.com; Settings → Pronunciation voice
  should read "Using recorded Nepali audio" (or "… Khmer audio" after switching
  language); tapping an alphabet letter plays the voice; sajilonepali.com still
  301s to bhasaly.com.
