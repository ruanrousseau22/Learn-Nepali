# CLAUDE.md — Sajilo Nepali

Guidance for working in this repo. Read this fully before making changes.

## What this is
Sajilo Nepali is a **single-file HTML** Nepali-learning web app, faith-forward
(Christian ministry context). Everything — HTML, CSS, and JS — lives in one file.

- **Live file in this repo: `index.html`** (keep this exact filename — Netlify serves
  it as the site root. Drafts from chat may be named Sajilo_Nepali_V5.html; their
  contents go into `index.html`).
- Live at **sajilonepali.com**.
- **Netlify** auto-deploys on every push to this repo (1–2 min). **Supabase** handles
  login + progress sync (keys already in the HTML — don't touch).
- Owner: Ruan (Mac user). Prefers highly specific, actionable help.

## Golden rules
1. **Always work directly on `index.html`.** Edit it in place.
2. **Never break the main course.** Two tracks share the file; changes to the
   Intensive track must leave the main course provably untouched.
3. **Validate before committing** (see Validation below). Never commit a build that
   fails `node --check` or the jsdom smoke test.
4. **Regenerate `audio_strings.json` whenever spoken content changes** (see Audio).
5. Keep the UI minimal and uncluttered. Faith-forward but never preachy in mechanics.

## Architecture
Two tracks share one `LESSONS` array (it ends right before `const VOWELS`).
- Zones live in `UNITS` (main course, `#path-root`, tab "Learn") and
  `UNITS_INTENSIVE` (`#path-root-intensive`, tab "Intensive").
- Shared renderer: `buildPath(units, rootId)`. Helpers: `curTrack`, `trackOf`,
  `buildTrack`, `startLesson`, `renderEx`, `advance`, `finishLesson`, `exitLesson`,
  `lessonById`.
- **Node symbols come from the `SYM` map** (`const SYM={...}`), keyed by each topic's
  *learn-lesson id* — NOT the lesson `emoji` field (which is unused in rendering).
  Both tracks use Devanagari node symbols (no emoji on nodes).

Current size: main course = 10 zones / 315 lessons / 63 topics. Language Intensive =
12 weeks / 312 lessons (300 + 12 weekly tests) / 60 topics.

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

## Design / content rules
- No Devanagari *typing* where Roman suffices (tap-based mc/li/wb/match; ≤1 `tr` per day).
- Teach-before-test. Colloquial Nepali (मेरो for all possessives).
- **Romanization fields contain NO Devanagari** (`vocab[i][1]` and `ex.r`).
- Sensitive topics (suicide/abuse/addiction) handled soberly as recognition vocab,
  framed by care — never gamified.

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
`generate_audio.py` reads `audio_strings.json`, synthesizes with edge-tts, writes
`audio/<hash>.mp3` + `manifest.json`. **Defaults to the MALE Nepali voice**
(`ne-NP-SagarNeural`).

- Whenever lesson/spoken content changes, **regenerate `audio_strings.json` first**
  (extract every spoken Devanagari string, hash with the same FNV-1a, write the array).
- To (re)generate audio locally:
  ```
  pip install edge-tts          # once
  # switching voice? delete first so all clips regenerate:
  rm -rf audio
  python3 generate_audio.py     # male by default; --voice female / --rate -10% available
  ```
- edge-tts needs internet (Microsoft TTS). It's resumable (skips existing files).

## Validation (run before every commit)
1. `node --check` on the largest `<script>` block.
2. jsdom smoke test: stub `speechSynthesis`, `SpeechSynthesisUtterance`, `scrollTo`,
   `fetch`, `matchMedia`, `HTMLMediaElement.play`. Note: top-level `const`s
   (`LESSONS`, `UNITS_INTENSIVE`, `audioKey`, etc.) are NOT on `window`; to inspect
   them, inject `window.__X = X` on a throwaway copy.
3. Romanization scan: `[\u0900-\u097F]` must NOT appear in `vocab[1]` or `ex.r`.
4. Integrity: answer indices in range; wb answers ⊆ pool; match pairs well-formed; no
   duplicate options; every topic has exactly 5 lessons (exception: `li_wNtest`
   nodes are single lessons with `ex:[]` — instead check the week's eligible
   question pool holds ≥20 for `buildTestEx` to deal from).
5. Confirm main course (63 nodes) untouched and intensive (60 nodes) all-Devanagari.
6. Inline-handler safety: strings interpolated into `onclick` handlers (vocab `[0]`,
   `ex.d`, `ex.say`, match `pairs[i][0]`) must not contain `'`, `"`, `<`, `>`, or `\`
   — one apostrophe silently breaks that card's HTML.
7. No Node on this Mac: for 1–2, extract the `<script>` block and parse it via
   `osascript -l JavaScript` with `new Function(src)`, then smoke-test in a browser
   (`python3 -m http.server`).

## Git / deploy
- Local repo: `~/Desktop/Learn-Nepali`. Push triggers Netlify redeploy.
- `git push` password = GitHub **Personal Access Token** (not the account password).
- The `audio/` folder must sit at the **top level** of the repo, next to the HTML.
- Verify after deploy: hard-refresh sajilonepali.com; Settings → Pronunciation voice
  should read "Using recorded Nepali audio"; tapping an alphabet letter plays the voice.
