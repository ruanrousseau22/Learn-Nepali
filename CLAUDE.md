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
- **Status (July 2026):** all three courses complete at 12 zones each —
  Nepali (main 12 zones / 385 lessons + the Intensive track), Khmer
  (12 zones / 420 lessons; early-access label dropped July 2026), and
  Burmese (12 zones / 420 lessons; Zones 3–12 shipped in one July 2026
  build-out, staged A–E, curriculum below).
  Read the "Multi-language expansion" section below before touching any of it.

## Repo layout
- `index.html` — the whole app + the inline Nepali pack
- `lang/km.js` — Khmer pack (data, art, registerPack call)
- `lang/my.js` — Burmese pack (Zone 1 · The Script; data, secular art, registerPack)
- `audio/` — Nepali recorded clips + `manifest.json`; `audio_strings.json` is
  its committed strings source (regenerated from the pack July 2026 during the
  audio health check that re-recorded मान्छे — the one seed word that had been
  falling back to device TTS, heard as a female voice)
- `audio-km/` + `audio_strings_km.json` — Khmer clips, manifest and strings source
- `audio-my/` + `audio_strings_my.json` — Burmese clips, manifest and strings source
  (934 clips for 935 strings: ဎ / U+100E, a rare Pali letter, has no clip —
  edge-tts returns no audio for it, so it gracefully falls back to device TTS)
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
  the site ranks for "learn &lt;language&gt;". Currently: Nepali + Khmer + Burmese.
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
- **Sinhala (`lang/si.js`) IN PROGRESS — Zone 1 "The Script" live (July 2026,
  Stage A; catalog label "· early access").** 7 topics / 35 lessons: ක ග න ම;
  the two T families ත ද ට ඩ (dental-vs-retroflex is THE consonant story);
  ප බ ස හ; ච ජ ය ර ල ව; the half-nasals ඟ ඬ ඳ ඹ (unique to Sinhala); vowel
  signs incl. කැ (the "a of cat" — no other regional script has it) + hal
  kirima ක්; first words වතුර/බත්/තේ/හොඳයි/ආයුබෝවන්. Romanization (documented
  at the top of `lang/si.js`): Sri Lankan convention — soft dental th/dh vs
  hard retroflex t/d, doubled long vowels, ae for ඇ; the course teaches
  SPOKEN Sinhala (diglossia: colloquial verbs never conjugate for person —
  teach that as the freebie). The researched 12-zone roadmap sits in the
  si.js header — build Zones 2+ from it, Burmese-style (research-first,
  Sinhala-driven). SI_NUMS teaches spoken number words (modern Sinhala
  writes Western digits). Audio: 83/86 clips via `si-LK-SameeraNeural`
  (ඞ ඣ ඦ get no edge-tts audio → device TTS fallback, like Burmese ဎ);
  extractor + generator both know `si` now. SEO/JSON-LD still pending —
  add the Course entry + title/keywords when the course ships properly.
- **Scaffolds live for the remaining three languages (July 2026):**
  Lao (`lo`), Pashto (`ps`), Mongolian (`mn`) — `lang/<code>.js` packs with
  EMPTY lessons/units/alphabet, full secular art (hero/band/mascot: Mekong
  karsts + baby buffalo; Hindu Kush + markhor kid; steppe gers + foal),
  catalog entries labeled "· coming soon", flags in
  `LANG_FLAGS`, CSS palettes, fonts (Noto Sans Sinhala/Lao/Arabic in every
  script font stack), and empty `audio-<code>/manifest.json`. The engine shows
  a `comingSoonHTML()` card on the Learn path & Alphabet pages while a pack
  has no lessons/letters (guards in `buildPath`/`buildAlpha`). NO Course
  entries in the JSON-LD yet — add them (plus title/keywords) only when each
  course actually ships. **Pashto is right-to-left** — word banks/fills need
  an RTL pass before its Zone 1. Building one out = fill the pack arrays the
  way Burmese was built (research-first, zone by zone), then remove nothing:
  the coming-soon states vanish on their own once lessons exist.
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
