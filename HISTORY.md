# HISTORY.md — Bhasaly build log

This is the FULL historical build record — every build narrative, audit,
art-iteration round and superseded design, moved here verbatim from CLAUDE.md
in July 2026 when that file was restructured into a lean steering document.
Nothing was deleted in the move: if CLAUDE.md summarises a rule and you need
the story behind it (what was tried, what failed, exact measurements), grep
here. Section headings are unchanged from the original.

---

# (was) CLAUDE.md — Bhasaly

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
- **Status (July 2026):** ALL ELEVEN courses COMPLETE at 12 zones each —
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
- `index.html` — the app shell, all CSS and the whole engine (~220KB). It no
  longer carries any course data: the Nepali pack was split out to
  `lang/ne.js` in July 2026 so a Khmer or Pashto learner stops downloading
  ~1.1MB of Nepali lessons they will never open (Khmer first load 2027K →
  894K, Pashto 1741K → 608K). **Every language now loads the same way.**
- `lang/ne.js` — Nepali pack (data + registerPack), the app default
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
- `ROADMAP.md` — the staged build plan for the next three courses (Urdu,
  Uzbek, Javanese). **Read it before starting any of that work**; it carries
  the phase order, the art specs and the Latin-script extractor fix.
- `_redirects` — Netlify rules 301-ing sajilonepali.com → bhasaly.com
- `og-image.png` + `og-card.svg` — the 1200×630 social share card (referenced by
  `og:image` / `twitter:card summary_large_image` in the head) and its editable
  SVG source. To regenerate on this Mac (no Node/Chrome): wrap the SVG content
  in a 1200×1200 canvas at y-offset 285 (qlmanage crops non-square SVGs), then
  `qlmanage -t -s 1200 -o . wrapped.svg` and `sips -c 630 1200` to center-crop.
  Chat apps cache link previews for days after the image changes.
- `robots.txt` + `sitemap.xml` — SEO basics (allow-all; sitemap lists the home
  URL + every `/learn-<slug>` landing page). Served from the repo root by Netlify.
  **`sitemap.xml` is GENERATED by `gen_landing.py` — edit that, not the XML.**
- `learn-<slug>.html` (11 files, e.g. `learn-sinhala.html`) + `gen_landing.py` +
  `landing_data.js` — **the SEO landing pages** (July 2026). The SPA is one
  crawlable URL, so these are static, pre-rendered, self-contained pages (inline
  CSS, no app JS) that Google can index without running the app: one per
  language at a clean path (`bhasaly.com/learn-sinhala` — Netlify serves the
  `.html` file at the extensionless path automatically). Each carries real,
  rankable content pulled from the pack — the 20-word SRS seed as an "essential
  words & phrases" table, numbers, and (non-Latin only) the full vowel+consonant
  alphabet grid — plus Course/Breadcrumb/FAQ JSON-LD, and a CTA that deep-links
  into the app via `/?lang=<code>`. **Regenerate after any pack vocab/alphabet
  change**: `python3 gen_landing.py` (reads every pack via `landing_data.js`
  JXA, rewrites all 11 pages + `sitemap.xml`; deterministic). Shipping a new
  language = add its slug/script-font/RTL entries to the maps at the top of
  `gen_landing.py`, rerun. The app's `<footer>` also links to all 11 pages
  (`.foot-langs`) so the highest-authority page seeds the crawl.
  Audited July 2026: committed pages byte-match a fresh regeneration, JSON-LD
  parses on all 11, canonicals/cross-links/sitemap correct. One fix: the
  template styled headings with Fraunces but never loaded it (Georgia
  fallback) — the font link now carries the same Fraunces axis spec as
  index.html, so the landing hero matches the app's brand serif.
- **The `?lang=<code>` deep-link** (boot(), July 2026): a known code in the query
  string overrides `savedLang()` AND forces `S.mode='learn'`, so a `/learn-X`
  landing-page CTA always opens that course even if the last session was faith
  mode. Unknown codes are ignored (falls back to saved/ne).
- **SEO / discoverability lives in the `<head>`** — `<title>`, `meta description`,
  `meta keywords`, `link canonical`, Open Graph + Twitter cards, and a JSON-LD
  `<script type="application/ld+json">` block (`WebSite` + `WebApplication`/
  `EducationalApplication` with a `teaches` array + one `Course` per language).
  **Update all of these when you ship a new language**: add the language to the
  title/description/keywords, the `teaches` array, and add a `Course` entry — so
  the site ranks for "learn &lt;language&gt;". Currently: all eight — Nepali + Khmer + Burmese + Bengali + Sinhala + Lao + Pashto + Mongolian.
- `devserver.py` + `.claude/launch.json` — the local preview servers `sajilo`
  (8642) and `sajilo-alt` (8647). **They deliberately do NOT use
  `python3 -m http.server`**: that sends no `Cache-Control`, so a browser
  heuristically caches from `Last-Modified` and serves a STALE `lang/*.js` or
  `index.html` after an edit — changes look like they never applied. This cost
  hours during the July 2026 ur/uz/jv build, repeatedly. `devserver.py` sends
  `no-store` on every response, so a plain refresh always shows current files.
  If a change ever seems not to have applied, check
  `fetch(url).then(r=>r.headers.get('cache-control'))` before hunting a bug.
  (July 2026: launch.json was found still pointing at `python3 -m http.server`
  — the very server devserver.py replaces — and was corrected to run
  `devserver.py`. launch.json is gitignored, so verify the header check above
  after any fresh clone or machine move.)

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
**Boot (since the July 2026 payload split).** No pack is present at parse
time, so `index.html` cannot call `applyPack('ne')` while parsing any more.
An async `boot()` at the end of the script reads the saved language straight
out of localStorage (`savedLang()`, which also understands the pre-split
`sajilo` blob), fetches ONLY that pack via `loadLangScript`, then calls
`applyPack` and builds the UI. A missing or unknown pack falls back to `ne`;
if that also fails the page shows a plain retry message rather than a blank
screen. This removed the old "render everything in Nepali, then switch"
flash for non-Nepali users — the `if(S.lang!==LANG.code)switchLang(S.lang)`
line at the end of boot is gone because the right pack is loaded up front.
When adding a language, nothing about boot changes.

**Language packs (since July 2026).** Nepali data lives in `lang/ne.js` as `NE_*` consts
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
boats stayed. The Nepali hero/band FINAL FORM (July 2026, settled
after 8 rounds of iteration with Ruan): the ORIGINAL pre-refresh art
restored — the original jagged Himalaya (hero peaks 675/y132, 815/y102,
955/y136, 1080/y148 with the original 4 polygon snow caps; band peaks
805/y78 + 965/y90 with 2 polygons), a warm terraced RIGHT
hill (mid path M640 320 L640 306 Q710 274 800 258 Q900 242 1010 268
Q1110 290 1200 296… with its 3 terrace streaks — lowered from the
original hill and sloped down to x=1200 so it runs edge-to-edge like
the peaks & near green)
and the original rolling near green — BUT with two keepers from the
refresh era: (1) the far ridge flattens to a CALM STRAIGHT sweep under
the "Learn Nepali" title (M0 252 Q150 246 … flowing into the peaks at
x~622; no left hill, no left streaks — the left stays calm), and
(2) the round-6 PINE GROVES in fill="var(--tree)" (hero: grove of 3
h54/42/32 at x1058-1146 + pair h38/28 at x176-222, bases ~y287-292 on
the near crest; band: grove of three at x1058/x1120/x1170). The
village house stays REMOVED; the experimental glacial river, the
left-foothill extension, the three-big-peaks rework and the far2
front ridge (+ its --mtn-far2/--river vars and CSS) were ALL tried
and rolled back — do not reintroduce them. --mtn-far is back to its
original #A7C4DD / dark #21384F. Also from that era: the Jesus faith
hero h1 dropped the Fraunces display font (it rendered "wrinkled")
for Plus Jakarta Sans w700 via the #view-fjesus .hero-text h1 rule;
God's Story keeps Fraunces. Edit via replace_all: the hero markup exists
as THREE verbatim copies (home + both faith pages) and the band as FOUR
verbatim copies.
**Art pass (July 2026 — Ruan's review).** Per-language fixes, all AUDIO-NEUTRAL
(art is never spoken, so all 8 `--check` runs still match):
- **Nepali** — two hero snow caps were drawn OUTSIDE their peaks (cap 1 spilled
  16.7px into the sky, cap 2 by 3.2px). Snow caps are now anchored to the ridge:
  for apex `(ax,ay)` with neighbours `(lx,ly)`/`(rx,ry)` and drop `d`, the base
  corners sit at `ax+(lx-ax)*d/(ly-ay)` and `ax+(rx-ax)*d/(ry-ay)`. **Verify any
  new cap against the ridge maths — do not eyeball it.** Applied to all 3 hero copies.
- **Pashto** — the leftmost peak (790,170) had NO cap while the other four did;
  added. Two existing caps also overflowed and were re-anchored.
- **Khmer** — the mid-layer sugar palm floated ~14px: trunk ended at y=270 while
  the mid ground at that x is y≈284. Trunk extended to 300.
- **Mongolian** — two more (smaller) gers added at x≈796 and x≈738 with doors,
  reading as a camp receding across the steppe.
- **Lao** — the "big purple stuff" was the `far` layer doing DOUBLE DUTY as both
  the karst towers and the river, so it read as one lavender mass. The river is
  now its own band (`--water`, added to the lo palette light+dark and applied via
  inline `fill="var(--water)"` — no new CSS rule needed), `--mtn-far` shifted off
  lavender to blue-grey, and the karsts were redrawn as varied angular towers
  instead of uniform rounded fingers. The stilt house is no longer a dark-green
  silhouette: pale `snow` walls, `var(--crimson)` terracotta roof, `var(--tree)`
  posts/ladder/door. A **leftover fragment from the removed boatman** (a stray
  hook sub-path on the boat, in BOTH hero and band) was deleted.
- **Bengali** — Howrah bridge removed; a hazy violet palm grove fills the far
  bank in its place, plus a **Kolkata auto-rickshaw** (amber body, dark roof and
  wheels) on the bank. The nouka is now warm teak with a curved bamboo canopy
  rather than another dark-green silhouette. Ruan's note: **do not make every
  add-on `var(--tree)` dark green** — vary the palette per object.
- **Sinhala** — the "blue cloud" was the same double-duty bug as Lao: sea and
  "tea highlands" were one blue shape with soft rounded bumps. Now a defined
  highland ridge over its own `--water` sea band, plus a terraced tea hill in the
  warm mid tone and a **wild elephant** on the shore for something unmistakably
  Sri Lankan. A dead empty `<g class="art-detail">` and a dangling
  `/* stilt fisherman */` comment (both leftovers from the removed figures) were
  deleted, in hero and band.
- **Burmese** — checked, no bugs found; left alone.
- **Lao, round 2 (July 2026 sub-page sweep)** — the riverbank "palms" were FIVE
  BARE POLES (hero 3, band 2): a thin dark-green stroke in the `near` group with
  a single `rx="2.6" ry="6"` ellipse on top for a crown. At render they read as
  sticks, not plants — the same leftover-fragment class of bug Ruan had already
  flagged for Lao. Replaced with the Sinhala palm piece (`--bark` trunk + five
  `--tree` fronds, drawn around a local origin, placed by transform): hero
  (1120,244)@0.62, (1162,254)@0.48, (960,258)@0.46; band (1120,138)@0.44,
  (1162,144)@0.38. **Grounding rule for that piece: base = translate-y +
  100*scale, which must land on the near crest at that x.**
### Health check, July 2026 (ur/uz/jv build) — two REAL bugs found
Both were spotted by Ruan and both were **pre-existing, affecting shipped
languages** — not new-language defects:
- **Alphabet tiles clipped their content.** `.glyph .d` is sized for a single
  character (32px), but four shipped packs legitimately put WORDS there —
  **mn, si** (and now uz, jv) teach number WORDS because those languages write
  Western digits — plus long roms in **bn** ("nasal (chondrobindu)") and Burmese
  အော. Six of eleven languages were clipping. Fixed generally in `buildAlpha`:
  it now tags each tile `d-mid`/`d-long`/`d-xlong` and `r-long`/`r-xlong` by
  content length, and CSS steps the font down. **Do not fix this per-language.**
- **"Short-term" appeared in Religious studies** when the faith language was
  Bengali. TWO compounding faults: the `body.faith` rule listing the tabs to
  hide never included `trip`, AND `paintTripTab` writes an **inline** display
  that beats any stylesheet rule anyway. Fixed in `paintTripTab` (it now also
  checks `S.mode`), the CSS selector widened for defence, and — the part that
  bit on the first attempt — **`switchMode` must call `paintTripTab()`**, or the
  tab stays hidden after returning to language mode.
**A measurement trap worth remembering:** testing tile overflow with
`getBoundingClientRect` on the glyph vs its tile reports ZERO problems, because
glyph ink legitimately extends past the line box. `scrollWidth > clientWidth` is
the signal that matches what a person actually sees. Height comparisons
false-positive on every complex script; use width.

**Art review pass for ur/uz/jv (July 2026, Ruan's notes).** All AUDIO-NEUTRAL.
- **The sun was behind the title in all three.** ur/uz/jv all had the orb at
  cx≈240, sitting under "Learn X". Moved right to 1010 / 1000 / 1090, matching
  every other language. **Check orb placement when authoring a new hero.**
- **Urdu read as Nepal-with-different-colours.** The ridge is now KARAKORAM
  rather than Himalaya: narrow rock spires with steep asymmetric faces, a TWIN
  SUMMIT at x=800/845, deliberately uneven spacing, and small caps (11-17px
  wide) because these peaks are more rock than snow. Nepal is rounded-then-
  jagged and Pashto is evenly spaced triangles; this is neither.
- **The Urdu far ridge and the rust hill crowded each other** — only **8px**
  apart at x=320, so they read as one shape. Raising the far ridge would have
  broken the title safe zone, so the MID hill was dropped ~18px instead; the
  gap is now 30-42px. **Measure that gap when a hero has a flat far ridge
  behind a near hill.**
- The Urdu **jingle truck was removed** (Ruan did not like the red against the
  palette), a **second markhor** added in its place, and the apricot blossom
  trees were far too small — scaled 0.72→1.05, 0.58→0.80, 0.64→0.92 etc.
- **Uzbek**: hills lifted (far ~10px, mid ~18px), camels and trees scaled up
  ~1.3x, a **fourth camel** added continuing the recession, and the **cotton
  flecks removed** — seven small white circles on the green read as scattered
  dots, not a crop.
- **Javanese**: the crater rim was a 16px needle point; widened to 44px in the
  hero and the band. Two more banyans and a **second water buffalo** added.
**Round 2 of the same review.** Ruan flagged the far ridge crowding the hill
crest in Uzbek and Javanese too — measured at **3px** (uz, x=350) and **6px**
(jv, x=400). Uzbek's purple dunes were lifted; Javanese's brown terrace hill was
lowered on the LEFT ONLY and blended back to its original line on the right,
because lowering it throughout made the green rise ABOVE it and the brown band
vanished. Urdu needed the same rescue: after the round-1 fix its terraced band
had collapsed to ~1px in places, so all three layers were re-spaced (far ~255,
mid ~278, near ~302). **When you move one layer, measure the band BELOW it too
— fixing the gap above can close the gap below.** Also: the Uzbek melon cart
removed and mulberries taken from 2 to 6 and enlarged; the Urdu markhors moved
right to sit between the two blossom groups with four new trees where they
stood. **The documented y≈235 title safe zone is conservative — the title box
actually measures y=185 at its lowest, so there is ~50px more headroom than the
rule of thumb suggests.**
**Round 3 — tree spacing (Ruan: "different spaces from each other so its not too
organized, but dont let them overlap").** Two Urdu trees genuinely overlapped by
**16px** (a mid-shoulder tree at x=196 against a ground tree at x=212), and
Uzbek's six mulberries sat at 92/88/114/90/80 apart, which reads as a plantation.
Both respaced by hand with an **explicit clearance assertion in the generator**:
crown half-width is 20 x scale for the Urdu apricot and 23 x scale for the Uzbek
mulberry, and every pair — including shoulder-layer against ground-layer — must
clear by >8px. Centre spacings are now 60/72/36/44/74/66/76/74 (ur) and
82/112/58/126/108 (uz). **Assert clearance rather than eyeballing it; overlaps
at these scales are invisible in a thumbnail and obvious on a real screen.**
**Round 4 — even gaps still read as planted.** The first respacing gave Uzbek
gaps of 37/69/17/87/62, which is varied on paper but still reads as a regular
band. What actually works is **CLUSTERS separated by real empty ground**: uz is
now 3 + 2 + 2 with gaps 14/23/79/10/93/21, and ur is 2 + 3 + 3 with 17/22/39/
13/32/36/16/12. Vary the SCALES across the cluster too (0.68-1.15) so size
breaks the rhythm as well as position.
**Two art-checker false positives, so nobody chases them twice:** (1)
`artcheck.py` reads only the LAST 40 chars of a ground path, so Khmer's hero
`mid` looks like it does not close at y=320 — it does, the stilt house is
appended as extra subpaths inside the same `d`. (2) `snowaudit.py` filters
decorative `snow` strips by looking for "opacity" in the path DATA, but Bengali's
water glint carries it as a separate attribute, so that glint gets measured
against the far ridge and reports a 37px overhang. Neither is a defect.
A static sweep (`scratchpad/artcheck.py` pattern) checked all 8 heroes + bands for
ground paths not closing at the bottom edge, geometry outside the canvas, empty
groups and degenerate paths: clean. **Landmarks sitting right of x≈1000 are
cropped on phones by design** (the hero is `xMidYMax slice`, so a 420px viewport
shows only viewBox x≈376–824) — that is the documented "calm centered scenery"
behaviour, not a bug.

**The art is SIZE-INDEPENDENT (July 2026 — Ruan asked for it).** The hero and
band SVGs used to be `position:absolute;inset:0;height:100%` with
`preserveAspectRatio="…slice"`, so a narrow screen centre-CROPPED the scene and
a phone lost everything right of x≈1000 (the Lao house, Sinhala's palms, the
Mongolian gers). They are now `position:absolute;left:0;right:0;bottom:0;
width:100%;height:auto`, so the SVG keeps its own 1200×320 (band 1200×200)
ratio, always spans the full width and is anchored to the bottom edge. **A phone
now shows exactly the same picture as a desktop, just smaller** — proved by
measuring the drawn bounds as a fraction of the art box at 375px and 1280px:
identical element count and identical fractional bounds (x 0→1, y 0.131→1).
Surplus container height above the art is plain sky, which is what the top of
the art is anyway; the mobile `min-height`s were trimmed so that band stays
small. Because nothing is cropped any more, **`art-detail` is no longer hidden on
phones** — that rule is gone. Consequence for authoring: the old "landmarks
right of x≈1000 are cropped on phones by design" note NO LONGER APPLIES; use the
full 0–1200 canvas freely, and only the title safe-zone rule still constrains
placement.

**Language-switch flash — `applyArt` order is load-bearing.** The old code set
`hero.innerHTML` FIRST and flipped `data-lang` after, so the incoming scenery was
inserted while the palette still belonged to the outgoing language. Chromium runs
both in one task and never paints between them, but **iOS Safari can repaint an
existing SVG subtree when a `:root` custom property changes**, which showed as
one language's scenery briefly wearing another's colours (Ruan saw this on his
phone; it does NOT reproduce in the desktop preview). `applyArt` now clears the
old art, THEN sets `data-lang`, THEN inserts the new art, so the worst any stray
frame can show is empty sky already in the new palette. It also adds a 220ms
`.art-in` fade (disabled under `prefers-reduced-motion`). **Do not "simplify"
that order back.** This matters more since lo/si art references `var(--water)`,
which is undefined under any other language's palette.

**The header stays responsive — that is separate from the art.** Breakpoints:
≤820px tabs collapse to the hamburger, ≤700px the mode name hides (globe only),
≤600px the bar and logo shrink, ≤560px the language name hides (flag only). The
size-independent art change did not touch any of these and they were re-verified
after it.

**Object colours — do NOT default to `var(--tree)`** (Ruan, July 2026: "I don't
want that dark green rule to be there"). `--tree` is for FOLIAGE ONLY (palm
fronds, poplars, pomegranate crowns, the Nepali pines). Everything else takes
the colour of the material it actually is, via vars next to `--tree` in `:root`
(all have dark-mode variants):
- `--wood` — boats/hulls, stilt-house posts, beams, ladders, gable finials, palm
  and fruit-tree TRUNKS
- `--hide` — horses and other brown animals
- `--slate` — the Sri Lankan elephant (elephants are grey, not green)
- `--tyre` — wheels, and dark openings like the Lao doorway/shutter
Deliberate colour choices worth keeping: Mongolian ger doors are `--crimson`
(they really are painted orange-red), the Kolkata auto-rickshaw keeps a green
canopy over an `--orb` amber body (Kolkata autos are green-and-yellow), the Lao
roof is `--crimson` terracotta over `snow` walls, and the Bengali nouka is a
`--wood` hull under a `--mtn-mid` straw canopy. When adding art, pick the real
material colour first; reach for `--tree` only if the thing is leaves.
The Sinhala elephant was also redrawn at this point — body/head masses, a
tapering trunk, a darker ear, an eye and a tusk — because once it stopped being
a flat dark silhouette its shape had to actually read.

**Snow caps must be FLUSH, not merely inside (July 2026, rounds 2–3).** Two
different faults, and the second is the one that actually looked wrong:
1. *missing* — both BANDS had an uncapped peak (ne/band 1120,106 and ps/band
   964,92). The bands are separate ridges from the heroes; check both.
2. *misaligned* — a cap can sit entirely INSIDE the peak yet leave a sliver of
   mountain showing beside it, because its outer edges are not collinear with the
   slopes. 12 of 15 caps were like this, the worst 12.5px off.
The fix is to derive each cap from the ridge instead of hand-tuning it. With
apex `(ax,ay)`, neighbour `(nx,ny)` and drop `d`, the base corner is
`(ax+(nx-ax)*d/(ny-ay), ay+d)` kept as a DECIMAL — rounding to whole pixels is
what pushes the edge inside. Draw the cap apex→rightBase→jag→leftBase so the two
outer strokes are exactly the slope segments; the jag must walk monotonically
right→left or the polygon self-intersects. `scratchpad/gencaps.py` holds the
generator; worst gap is now 0.07px. **Re-run it whenever a ridge moves.**

**Sinhala art = JUNGLE & ELEPHANTS (July 2026, Ruan's FOURTH and final pass —
"remove the hill, maybe add some more trees all over and put two elephants drawn
to look like elephants with an elephant colour").** The current art in
`lang/si.js`: a soft jungle-canopy far layer, SEVEN coconut palms spread across
the whole canvas at deliberately uneven spacing and scales (x 110/232/506/640/
1052/1160 at 0.74-1.0 — even spacing read as a plantation), and TWO `--slate`
elephants, a large one at translate(742,216) and a calf at translate(884,238)
scale(0.7), with x 700-1000 left clear behind them so they are not lost in
foliage. An elephant only reads as an elephant with a distinct head mass, a
tapering trunk, a darker ear, an eye, a tusk and TWO LEG PAIRS WITH A GAP —
four evenly spaced legs look like a table. The palm is a reusable local-origin
piece (`--bark` trunk + five `--tree` fronds) placed by transform; **Lao now
reuses that exact piece**, so fix it in both if it changes. The two superseded
descriptions follow for context — the waterfall and the tea country were BOTH
built and BOTH rejected, so do not resurrect either.

**(superseded) Sinhala art = A HIGHLAND WATERFALL (Ruan's third pass).** A sunlit
rock cliff filling the right, a braided white fall over a lip into a plunge pool,
spray, jungle foreground and two palms. Lesson worth keeping: a fall reads as
water only when it is NARROW and braided (two ribbons plus a highlight); a single
wide wedge looks like a monolith.

**(superseded) Sinhala art = TEA COUNTRY (July 2026, Ruan's second pass).** The elephant and
the jagged blue ridge are GONE — he disliked both. It is now the up-country: tall
soft overlapping hill shoulders (never jagged), a dawn mist band in the valley,
a sunlit `mid` tea slope carrying three terrace contour lines, deep green
foreground, and two coconut palms. `--water` was dropped from the si palette when
the tank idea was cut, so si has no water colour any more (lo still does).
Lesson from the iterations: **low flat bands read as nothing** — hill silhouettes
need real height (up to y≈170) and they must OVERLAP to give depth.

**Bengali art = keep it simple (July 2026, Ruan: "congested and overwhelming").**
Removed the violet far-bank palm grove and the nouka entirely. What is left is a
calm river scene: violet water with glints, golden bank, green delta, two
coconut palms, banana leaves far left, and **two Kolkata autos** drawn once
around a local origin and placed twice with `transform="translate() scale()"`.
An auto only reads as a three-wheeler if the front wheel is SMALL and set
forward and the rear wheel is clearly LARGER — with two equal wheels it looks
like a van. Palm trunks use `--bark` (a lighter brown added for trunks) because
`--wood` was too dark against the bank.

**Nepali hero extras (July 2026).** The left approach is ONE lower capped peak at
(566,166) whose flank EASES OFF in stages rather than running as a single
diagonal: a steep, near-angular face of 1.38 running the full 66 units from the
summit down to y=232, then 0.14, 0.06, and the horizon. Both halves matter — the
face has to look like rock, not a rounded hill, and it has to CARRY DOWN a long
way before easing, or the flattening starts too high and the peak reads squat.
The tail is what finally settles the range into the flat.
**The two ends are deliberately DIFFERENT.** Only the LEFT eases into the flat;
the RIGHT keeps going. An earlier version eased both and the range read as
politely ending mid-canvas. The right now runs peak (1056,138) → a HIGH valley at
(1090,176) → a wide capped peak at (1150,108) → and off the page at (1200,190)
part-way down its right face. Two details do the work: the valley is shallow and
set well left, so the last mountain's flank starts high on its neighbour and the
mountain reads WIDE; and the canvas cuts the descending right face rather than a
summit or a rise, which is what makes the range feel like it carries on. Keep the
asymmetry — the left easing exists to settle the range on one side only.
That progression is the whole point — a lower mountain that lets the range settle
gradually into the flat. A shallow dip then leads into the main climb to
(675,132). An earlier two-foothill version was busier, and a single straight
diagonal lost the easing. All five peaks carry a
cap; the lower one takes a smaller drop (11 vs 18–21) so its cap stays ~42 wide
like the rest.
Two YAKS graze at x≈176 and 292. They need THREE tones to read, not one:
**white coat** (`class="snow"`) for the shaggy body, **`--slate` face, legs and
tail** so the animal separates from its own fur, and `--tyre` horns, hooves,
muzzle and eye. All-white was flat and the white tail vanished against the sky.
The body also has to be long and low with a deep shaggy skirt — a compact rounded
one reads as a sheep.
**The trees are deliberately NOT the fir/logo shape** (Ruan: they looked exactly
like the site mark). They are broadleaf — a `--bark` trunk under a cluster of
four `--tree` circles — and the left group sits at x 46–140, clear of the yaks.
All of this lives in index.html, so the hero exists as 3 verbatim copies.
**Changing a ridge silently breaks caps**: adding/removing a vertex changes a
peak's neighbour, so regenerate every cap and re-measure afterwards (this bit
twice — once at 2.52px drift).

**A flat peak makes a spread-out snow cap — lift the peak, don't shrink the cap.**
Cap width is forced by the slopes: `width = (lx-ax)*d/(ly-ay) + (rx-ax)*d/(ry-ay)`,
so a peak only ~20px above its neighbours produces a 90px smear of snow. The
Nepali BAND was the worst offender (caps 55, 91 and 92 wide). Peaks were lifted —
hero 955→118 and 1080→134, band 805→68, 965→66, 1120→84 — which brought every cap
into a consistent 38–46 and gave the range a sharper skyline. **Check cap widths,
not just flushness, whenever a ridge changes**; anything over ~52 means the peak
underneath is too flat. Remember the hero exists as 3 verbatim copies and the band
as 4.

**Reusable art pieces: draw once around a local origin, place with `transform`.**
The Sinhala palms and elephants and the Bengali autos are each defined once with
coordinates around (0,0) and then dropped in with
`transform="translate(x,y) scale(s)"`. That keeps repeated objects identical, lets
them vary in size for depth, and means a fix is a one-place edit. **Caveat:** the
static art sweep reads raw path numbers, so a local-origin shape reports
"geometry outside the canvas" (e.g. y −47..5) — that is a false positive, the
transform puts it on screen. Check placement with a grounding calculation
instead: `translate y + 100*scale` must land at or below the near-band surface.

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
**Bhasaly is an ASIA-FOCUSED app** (Ruan, July 2026). The original roadmap
carried Amharic, Kinyarwanda and Luganda; those are dropped — the app serves
Asian languages that are poorly resourced for learners. All eight shipped
courses are Asian, and the next three are too.

**Urdu (`lang/ur.js`) COMPLETE at 12 zones / 84 topics / 420 lessons**
(July 2026, ROADMAP stages 2A-2D). The app's SECOND right-to-left course, and
the first built with a GENERATOR: topics are authored as vocabulary + notes in
`scratchpad/ur/content*.py` and `build.py` expands each into the house 5-lesson
shape, with the validation rules as assertions so a bad exercise cannot be
written. **Read the verification note below before treating the generator as a
model for uz/jv — and the "teach-before-test repair" section further down: the
generator's one-note-then-quiz lesson shape cold-tested 98.6% of Urdu's vocab
and had to be repaired across all three of its courses.**

Written in **Nastaliq**, not the Naskh Pashto uses, so index.html carries a
`:root[data-lang="ur"]` font block with `line-height:2.05` — verified in a real
word-bank at 375px with no clipping. Z1 "The Script" teaches by SHAPE FAMILY
(ب پ ت ٹ ث share one skeleton; dots decide), the retroflexes ٹ ڈ ڑ written
doubled, the jeem family, aspirates via do-chashmi he ھ. Z2 foundations
(the aap/tum/tu ladder, hoon/hai/hain, 1-10, courtesy with jee). Z3 **gender is
the spine** — nouns are m/f, adjectives agree, SOV, nahin before the verb,
in-situ question words, `ke paas`, `chaahiye`. Z4 postpositions, family, town,
food. Z5 numbers to 100, money, bargaining, the clock. Z6 colours, comparison,
feelings, weather, body, health. Z7 past `thaa`, simple past, **the ergative
ne** (recognition only), future `-gaa/-gee/-ge`, `saknaa`, `chaahiye` vs
`parregaa`, `-iye` imperatives. Z8 transport, directions, tickets, hotel, phone,
dates. Z9 connectors, opinions, work, likes, learner lifelines, help. Z10
address terms, small talk, home, hospitality, plans, storytelling. Z11
frequency, clothes, animals, nature, tastes, reading, little words. Z12 big
numbers, errands, emergencies, wishes, duration, polite register, capstone.
Romanization at the top of `lang/ur.js`. **Known deliberate collision:** خ and
کھ are both `kh`, as are غ and گھ — standard learner practice, flagged in the
Z1 note, audio carries the truth. Audio via `ur-PK-AsadNeural` (558 clips).

### Urdu verification pass (July 2026) — READ THIS BEFORE BUILDING uz/jv
Ruan challenged the build speed and was right to. The first pass researched only
TWO sources and then generated 420 lessons; the structure validated but the
content had not been checked. A proper pass then ran against Wikipedia
"Urdu alphabet" and "Hindustani grammar", Wiktionary, Omniglot numbers, Rekhta
and the Wikivoyage phrasebook. **Findings — all fixed:**
- **ڈ was named `dde`.** Its real name is ڈال `ddaal` (Wiktionary, Wikipedia).
  I had invented it by analogy with ٹے/ڑے, which really are -e names.
- **"what time is it" was `kyaa baje hain`.** The standard is **`kitne baje
  hain`** — literally how many have struck. Cost one clip to fix.
- **موسیقی was romanized `moseeqi`**, matching neither Rekhta's `muusiiqii` nor
  the common Roman Urdu `mausiqi`. Now `mausiqi`.
- `peetaa`/`khaataa` were glossed as if they were dictionary forms; they are
  habitual participles and are now labelled as such.
- 11 gloss inconsistencies unified; 5 genuine homographs (چھ میں کیا بس تو) kept
  with self-explaining glosses, the way the Bengali pack handles shat/ashi.
- **The generator's uniformity was itself a defect.** Every topic had EXACTLY 5
  vocabulary items — `{"5":84}` — where every other pack has a natural spread
  (ne 4-10, km 5-12, si 4-10). At 403 words it was also the thinnest course in
  the app. 59 items were added where content warranted it, giving 457 words and
  a real spread `{5:49,6:15,7:16,8:4}`. **Let content decide topic size.**
- The first generator also produced 20 single-type lessons and no listening in
  `build`/`checkpoint`. Both fixed; li is now in 420/420 lessons at 18.5%.
**The curriculum-SEQUENCE pass (Ruan asked the right question: was the order
researched, or just invented?).** It had been invented. Comparing against
**Georgetown's Beginning Urdu** (Pien & Farooqui, 8 units / 42 lessons) and
**Colloquial Urdu** (Bhatia & Koul, 5 script lessons + 10 units) found four real
problems, all now fixed:
- **The ergative was 3rd of 7 in Zone 7.** Georgetown puts the perfective and
  ergative in Unit 8 of 8 — dead last — and Colloquial Urdu teaches future
  before past. Both treat it as the hardest thing in the language. Zone 7 is now
  thaa -> simple past -> future -> can -> must -> commands -> **ergative last**.
  Topic ids are opaque so nobody's progress broke; only the content moved.
- **The OBLIQUE CASE was never taught.** Georgetown gives it Unit 2. I taught
  postpositions without ever saying the noun in front of one changes:
  `kamraa` but `kamre mein`, `larrkaa` but `larrke ko`. Now taught in Z4 p1.
- **The PRESENT CONTINUOUS was never taught.** Georgetown teaches it beside the
  habitual in Unit 3. I taught only `-taa hoon`, yet used `ho rahee hai` in a
  weather note without explaining it. `jaa rahaa hoon` is now taught in Z4 p7.
- **The SUBJUNCTIVE was never taught.** Georgetown pairs it with the modals in
  Unit 6. `kyaa main jaaoon?` is now taught in Z7 with must/should.
**Standing rule this establishes: research how a language is actually TAUGHT
before designing the zone order — not just what the grammar is.** The Burmese
entry above already said this; Urdu ignored it and had to be corrected.

Verified correct and NOT changed: the habitual `-taa hoon`, the future
`jaaoongaa/jaaoongee/jaayenge`, the ergative rules (perfective transitives only,
verb agrees with the object, no ne with jaanaa/aanaa), `saknaa` with the bare
stem, `chaahiye` vs `parregaa`, the `-iye` imperatives including the irregular
deejiye/keejiye/peejiye/leejiye, `ke paas`, `pasand hai` agreeing with the thing
liked, the causative `-waanaa`, `-e` for masculine plural AND polite address,
derh/dhaai/saarhe for 1:30/2:30/3:30+, and all numbers 1-20, the tens, hazaar
and laakh.

**Uzbek (`lang/uz.js`) COMPLETE at 12 zones / 84 topics / 420 lessons**
(July 2026, ROADMAP Phase 3). The app's **first Latin-script course**, so it is
the first to use `latin:true` — see Phase 0. Verified live: `hasDeva('rahmat')`
is true and `hasDeva('thank you')` is false, and the extracted string set
contains no English glosses at all.

**Sequence researched FIRST**, against Azimova's *Uzbek: An Elementary Textbook*
(Georgetown/CeLCAR) and the Peace Corps Uzbek course — the step Urdu skipped.
Azimova puts **commands and requests third**, so this course does too: they are
the bare stem plus -ing, usable from day one.

Uzbek-driven spine: ONE SET OF PERSON ENDINGS does two jobs (`men talabaman`
I am a student, `men boraman` I go) so it is taught once, early; **possession is
a suffix, not a word** (`kitobim` my book) and gets a whole zone, because Turkic
marks it on the noun; the four cases `-ga -da -dan -ni` get another. Freebies
worth saying aloud: no gender, no articles, and standard Uzbek has **lost vowel
harmony**, so suffixes never shape-shift. Z1 sounds & spelling &middot; Z2
foundations &middot; Z3 the sentence engine &middot; Z4 commands & courtesy
&middot; Z5 possession & family &middot; Z6 cases & places &middot; Z7 numbers,
money & food &middot; Z8 describing &middot; Z9 past, present & future &middot;
Z10 out & about &middot; Z11 extras &middot; Z12 making it home (Navroʻz).
Romanization documented at the top of `lang/uz.js`: it is a PRONUNCIATION
respelling, not a transliteration (x -> kh, oʻ -> aw, gʻ -> gh). Audio via
`uz-UZ-SardorNeural` (529 clips).

**Two things this build caught, worth reusing:**
- **Loanwords whose written form IS the English gloss** (bank, metro, taksi,
  sport) made the mc prompt display its own answer. The generator now flips
  those to the "Which one means X?" direction instead. Expect the same in
  Javanese, which has many Indonesian and Dutch loans.
- **Bare Cyrillic letters got no audio.** `uz-UZ-SardorNeural` returns nothing
  for a lone Ў/Ғ/Қ/Ҳ/Ш. That was a content problem too — Cyrillic is
  recognition-only, so it now lives in the topic NOTE (never spoken) and the
  topic teaches sign words instead. **Never put a bare foreign-script character
  in vocab if the voice cannot say it.**
- **Never run two `generate_audio.py` jobs for the same language at once.** They
  collide on the `.part` files and produce a manifest that disagrees with disk.

**Javanese (`lang/jv.js`) COMPLETE at 12 zones / 84 topics / 420 lessons**
(July 2026, ROADMAP Phase 4). Latin script, `latin:true` like Uzbek. ~68M
speakers and the widest speaker-to-resource gap of any language in the app —
every existing resource points a learner at Indonesian instead.

**THE REGISTER DECISION, made from sources BEFORE authoring.** Javanese ngoko
and krama are not politeness endings; they are largely different vocabularies,
down to the pronouns (aku/kula, kowe/sampeyan). Evidence gathered:
- Wikipedia "Javanese language" — the lexical split is deep and structural.
- The Conversation, reporting Indonesian sociolinguistic research — speakers
  **under 25 avoid krama out of anxiety** about getting it wrong and switch to
  **Indonesian** with elders instead; older speakers explicitly endorse that
  ("better Indonesian than improper Javanese").
- Omniglot — numbers **6-9 are identical in both registers**, a real gift.
- edge-tts `jv-ID-DimasNeural` voices BOTH registers cleanly (tested first).
**Decision: teach NGOKO as the base**, because it is what is actually spoken and
heard, and carry KRAMA as a parallel courtesy set for the situations an outsider
really meets — greeting an elder, thanking, apologising, addressing a stranger.
Zone 9 is the polite-forms zone. The course states plainly that Indonesian is
the honest fallback when unsure, because that is what young Javanese themselves
do. This is the Khmer address-terms shape, and it is defensible from sources
rather than from preference.

Pronunciation is the whole difficulty and the grammar is kind: **final -a is
said -o** (Yogyakarta -> Yogyakarto, basa -> boso) and **dh/th are retroflex**
against dental d/t. No tones, no gender, **no verb conjugation and no tense** —
aspect is four words before the verb (wis / lagi / arep / durung) and negation
picks from three (ora for verbs, dudu for nouns, aja for don't). Z1 sounds &
spelling &middot; Z2 foundations &middot; Z3 the sentence engine &middot; Z4
politeness & daily life &middot; Z5 numbers & time &middot; Z6 describing
&middot; Z7 past, future & opinions &middot; Z8 out & about &middot; Z9 krama &
the home &middot; Z10 Java itself &middot; Z11 community & culture &middot; Z12
making it home. Culture kept secular per the house rule: batik, warung, pasar,
sawah, gamelan, slametan, gotong royong — no candi, and wayang is skipped
because it is tied to Hindu epics. Audio via `jv-ID-DimasNeural`.

**Urdu, Uzbek and Javanese are DONE** (July 2026) — courses at 12 zones each
AND faith packs, all shipped; `ROADMAP.md` holds the staged plan they were
built from. Next candidate: Persian/Dari (`fa-IR`), with the caveat that the
only voice is IRANIAN Persian, so it must ship as Persian and not be
mislabelled Dari.

### The teach-before-test repair (July 2026) — A STANDING RULE for any generator
Ruan caught the ur/uz/jv generator's worst defect after shipping: **it emitted
ONE topical note per learn lesson and then quizzed every word cold.** The
engine never shows `vocab` to the learner — teaching happens ONLY through
`note` exercises — so a learn lesson without word-introducing notes is a blind
quiz. Measured as "new words first seen as a quiz question, never introduced
in a note first": **ur 98.6% (431/437 words), uz 46.7%, jv 42.2%**, against
0–4% in the eight older courses (km's script zone is the model: note "ក and គ"
→ quiz ក → quiz គ). All three were repaired to **0%** (18 commits, July 2026):
- The fix is the house pattern: interleaved notes introducing 2–3 words each
  (real prose + `eg` cards `[native, rom, gloss]` — the rom slot may be `''`),
  placed BEFORE the quizzes of those words, quizzes reordered to follow their
  intro note. Note tags/titles are content-specific, never generic — and the
  prose must say something true and useful (letter shapes, etymologies,
  homographs, culture), not just list the words.
- Urdu also gained `r` rom-hints on word d-mcs across all steps (the km/si
  convention; ne carries them too). uz/jv deliberately do NOT — Latin script
  is readable and my/lo/ps/mn/bn also carry none. Letter-lesson mcs never get
  `r` (the rom is the letter's name — a giveaway). Guard every added `r`
  against equaling an option: loanwords (menu, film, internet, uncle, urdu)
  WILL collide, and the sweep caught ~20.
- **Everything was audio-neutral**: notes/eg/r are never spoken, so all three
  `--check` runs still MATCH and zero clips were regenerated.
- Editing method: the lesson consts are strict JSON — `json.loads` the array,
  edit, `json.dumps(..., ensure_ascii=False, separators=(',',':'))` re-splices
  byte-identically (keep the trailing `;` — ASI masks its loss). Assert every
  original exercise index is used exactly once so nothing is silently dropped.
- Measurement traps: crediting a lesson's own vocab as "taught" hides the
  whole problem (the first tool did); the real check is note-introduction
  BEFORE first quiz, within the lesson, in path order. Case differences and
  inline tags (`<u>`, hyphenated breakdowns like bor-a-man) make words look
  untaught when the note visually shows them — verify by eye before "fixing".
- **The rule: a future course generator must emit interleaved teaching notes
  with eg cards, and a cold-test measurement must run before any new course
  ships.** The uniform one-note shape was the same disease as the generator's
  exactly-5-vocab uniformity documented above.
Also fixed in the same sweep: a stray comma in Nepali `sc_read_2` (left by the
July 21 parity commit's hand-appended exercises) created an `undefined`
exercise — `renderEx` reads `ex.t`, so the lesson froze at that question for
every learner. **When appending exercises to an existing `ex` array by hand,
re-parse the pack and scan for non-object entries afterwards** — the integrity
sweeps now include that check.

**AUDIO IS THE GATE — check it before promising any language.** The pipeline is
edge-tts, and a course with no clips is not shippable: no mainstream OS ships a
voice for these languages either, so the device-TTS fallback is silent too.
Verified July 2026 to have NO edge-tts voice, and therefore NOT buildable:
**Tibetan, Punjabi (125M speakers!), Assamese, Odia, Sindhi, Kashmiri, Kyrgyz,
Tajik, Turkmen, Dhivehi, Bhojpuri, Maithili, Kinyarwanda, Luganda**. Tibetan
was researched in depth — the only options are Meta's `facebook/mms-tts-bod`
(CC-BY-NC, so not licensable for the site), iFlytek's paid Chinese API, or
Monlam AI in Dharamsala (no public API found). Do not re-investigate without
new information. Check a candidate with:
`python3 -m edge_tts --list-voices | grep '^<code>-'`

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

## Short-term (per-pack phrasebook — Bengali, July 2026)
A FOURTH page next to Learn / Alphabet / Review, for someone visiting for a
fortnight rather than studying a course. Built because Ruan's friends are going
to Kolkata for two weeks. **It is a pack feature, not a Bengali special case** —
the tab, the page and its flashcards all appear only when the active pack
defines `trip`, so any language can get one by adding the same field.
- The page is called **Short-term** (Ruan, July 2026); the pack field, view id
  and helpers all stay `trip`.
- **Data** lives in the pack: `trip:{title, native, sections:[{id, t, d,
  note?, lines:[[native, rom, english]]}], frames:[...]}` (`BN_TRIP` in
  `lang/bn.js`, just before `registerPack`). `title` drives the h2 via
  `#trip-title`. There is **no `intro`** — the sentence card under the heading
  was removed at Ruan's request, along with the field. Bengali ships **14 sections / 151 lines**: `first,
  polite, meet, patterns, hear, numbers, ride, way, eat, guest, shop, stay,
  trouble, connect`. The `patterns` section is the load-bearing one — four
  sentence frames (X kothay? / X achhe? / X din / X koto?) that generate most of
  what a visitor needs, so the page teaches production, not just a phrase list.
  `note` is the only field that may contain HTML (`<b>` only).
  **Notes stay SHORT and factual** (Ruan, July 2026): about 20-35 words, one
  or two facts, then stop. No emotional framing and no build-up — a July 2026
  pass cut them 535 -> 367 words, removing lines like "said with a smile",
  "you have made a friend", "Bengalis are genuinely delighted" and "tea is the
  social glue". State the rule, name the phrase, move on. Notes are never
  spoken, so rewriting them is audio-neutral.
- **Content review, July 2026 — findings worth not repeating.** (1) The page
  taught "use `apni` with anyone you have just met" and then used **tumi** forms
  with strangers (`tomar desh kothay`, `bhalo theko` x2). Sweep any new trip pack
  for register consistency against its own politeness note. (2) Numbers stopped
  at 10/20/100/1000, so a visitor could ASK a price and not decode the answer —
  the tens 30-90 plus 150/200 were the gap, and Kolkata quotes in exactly that
  range. (3) Every line was something the visitor SAYS; nothing prepared them for
  the reply, hence the `hear` section. **Treat one-way production as the default
  failure mode of a phrasebook.** (4) `bangla bolte pari` was downgraded to
  `ektu bangla bolte pari` — claiming fluency invites a torrent of Bengali.
  (5) **স before a vowel is `sh` in this pack** (আসি = ashi), but আসুন/বসুন had
  been written `asun`/`bosun`; now `ashun`/`boshun`. (6) The rom scheme collapses
  hard/soft t, producing two REAL homographs — `shat` (সাত 7 / ষাট 60) and `ashi`
  (আসি goodbye / আশি 80). They cannot be romanized apart, so the **gloss** must
  carry the disambiguation. (7) The `X koto?` frame had `দাম` price as an item,
  generating the tautology "How much is the price?"; replaced with `এটা` this.
- **Trim pass, July 2026 (Ruan: make sure it is all relevant, not too many
  words).** 13 lines cut for not earning their place: bare nouns the page
  already covers inside a sentence (`desh`, `rasta`), grammar a fortnight
  visitor never builds (`amader`), English loanwords that teach nothing
  (`phon`, `nombor`, `tram`), lines duplicated in a better section (`dam koto`
  and `nebo` in `patterns`, `thik achhe` in `stay`, `bhalo thakben` in `meet`),
  a near-twin (`apni ki jaben` — bare `jaben` is the real street usage),
  something the frame builder already generates (`jol chai`), and `kolkata`
  (they can say their own city's name). Glosses were cut to the fact:
  parentheticals that merely restated the section note are gone.
  **Every line must be something a visitor SAYS or HEARS, not a dictionary
  entry.**
- **Naturalness fix:** `bujhi` is the habitual "I understand"; what you actually
  say in the moment is **`bujhechhi`**. It was already recorded for the course,
  so the change cost no audio.
- **`guest` exists because of who this was built for** — a short-term team is
  hosted and fed constantly, and Bengali hospitality expects a refusal to take
  about three tries. `arektu?` (what they will be asked) and `pet bhore gechhe`
  (the answer that works) are daily-use, not decoration.
  **Section titles are PLAIN and short** (Ruan, July 2026 — "who you are talking
  to, I feel like that can be better"): the same professional-register rule the
  course node titles follow. Descriptive standard names — Being polite, Sentence
  patterns, Getting around, Directions, At the hotel, Getting help, Conversation
  — never writerly ones ("Who you are talking to", "Four frames that do
  everything", "Phrases that open doors" were all retitled). The flavour belongs
  in the one-line `d` subtitle, which is hidden on phones anyway. Short titles
  also keep every mobile section header to a single 43px line. Retitles are
  audio-neutral.
- **Engine** (index.html, next to the alphabet flashcards): `buildTrip()`
  renders `#trip-root`, `paintTripTab()` hides the tab when `LANG.trip` is
  absent (same pattern as `paintUnlock`), both called from `applyBranding`;
  `show()` reroutes `trip`→`home` when the pack has none and `trip`→`fstory` in
  faith mode. Flashcards are `openTripCards`/`tcMenu`/`tcStart`/`tcRender`/
  `tcFlip`/`tcGrade` over `#tripcards-modal`. **There is ONE entry point** — the
  header's "Shuffle 10" calls `openTripCards()`, which opens the modal and deals
  ten at random from the whole book immediately. The per-section deck menu was
  removed with the second button (July 2026), so `tcMenu` and the `tcStart(i)`
  branches are gone and `tcStart()` takes no arguments. **`.ac-picks`/`.ac-pick`/
  `.ac-sub` survive because the ALPHABET deck still uses them** — only `.tc-all`
  was trip-only and deleted. The card is the **REVIEW flip
  card** (`.flip`/`.flip-inner`/`.flip-front`/`.flip-back` + `RIDGE_SVG`, the
  `.srs-ascent` progress track, `.grades` buttons, Space-then-1/2 keyboard) —
  Ruan asked for it to match Review, so reuse those classes rather than styling
  a new card. Grading is still just requeue-or-drop, not SM-2: the Review deck
  stays vocab-only.
  **The prompt side is ENGLISH** — a traveller needs to PRODUCE Bengali, so the
  card shows the English, you say it, then flip to reveal script + roman +
  audio. That is the opposite of the alphabet deck and deliberate.
- **Audio**: trip lines are spoken, so `extract_audio_strings.js` now walks
  `pack.trip.sections[].lines[][0]` — **appended AFTER the SRS seed**, so every
  existing strings file stayed byte-identical (all 7 others still `--check`
  MATCH). 116 of the 120 lines were already recorded course vocabulary, which is
  why only 4 new clips were needed at launch; the July 2026 content pass added
  27 more, and the trim pass gave one back. `audio_strings_bn.json` is now
  **1426 strings / manifest 1423 keys**
  (the 3 bare signs ং ঃ ঁ still fall back to device TTS). **The frame builder's
  assembled sentences are spoken too** — the extractor walks
  `trip.frames[].items[][0]+f.s` after the trip lines.
  **Reuse that trick when writing a trip pack for another language** — draft the
  lines out of the pack's existing vocabulary wherever the natural phrasing
  allows and the audio is nearly free.
- **ROMAN IS THE PRIMARY LINE, script is third** (Ruan, July 2026: "this is for
  people who are not interested in learning script right now"). Every line and
  card reads **roman -> English -> script**, roman big and bold, script small and
  muted; roman is never gated on `S.rom`. Section `note`s follow the same order —
  they used to lead with script and were rewritten to lead with roman (notes are
  never spoken, so that was audio-neutral).
- **Visual design** (July 2026, Ruan asked for the page to look better — it was
  14 identical white bars): each section carries an **icon** from `TRIP_ICON`,
  a map in index.html keyed by SECTION ID (not stored in the pack), so any future
  trip pack reusing ids like `first`/`eat`/`shop` gets icons for free; unknown
  ids fall back to a circle. They are single-path stroke glyphs inheriting
  `currentColor`, sitting in a `.trip-ic` well tinted with the section accent —
  **the well fills solid with a white glyph when the section is open**, which is
  what makes the open card read as open. The number chip was REPLACED by the
  icon (a phrasebook is a directory, not a sequence). The count moved to an
  accent pill, phrase tiles gained a hover lift plus an accent edge, and the
  speaker became a circular button that fills on hover.
  **`trouble` deliberately uses a LIFE RING, never a medical cross** — the
  no-cross-shapes rule applies to UI glyphs too. Two glyphs had to be redrawn
  after looking at them at 40px: a signpost read as a music note (now a turn
  arrow) and the first car was mushy (now roof-over-body plus two clear wheels).
  **Judge icons blown up to ~40px before shipping; at 19px everything looks
  plausible.**
- **Mobile section headers stay ONE compact bar** (Ruan, July 2026: on a phone
  they "get really big and look a little fat"). The culprit was a mobile rule
  that gave the section description its own row (`flex-basis:100%`), taking the
  header from ~50px to 98px. Below 600px the description is now hidden entirely
  and the row is `flex-wrap:nowrap` with a smaller number chip — 43px, close to
  desktop. The title WRAPS rather than truncating: an earlier attempt used
  `text-overflow:ellipsis`, which clipped "Four frames that do every…". A
  section title must never be cut off; one taller card is the better trade.
- **Page flow**: the twelve sections are **collapsed** (`tripToggle`) so the page
  is scannable — a phrasebook is used standing in the street, not read top to
  bottom — and only `patterns` opens by default. A **Start here** block (a
  `starter` array of native strings pinned above section 1) and a **contents chip
  row** (`tripJump`) were both built and then **REMOVED at Ruan's request**, July
  2026 — do not reintroduce either. The pack field `starter`, the helper
  `tripJump` and the `.trip-starter`/`.trip-toc`/`.tchip` CSS are all gone with
  them.
- **The frame builder** is the teaching centrepiece: `trip.frames[{s,sr,en,t,
  items}]` where `s` is a NATIVE SUFFIX (every Bengali frame is noun-first —
  `X kothay?` / `X achhe?` / `X din` / `X koto?`), so one template covers all
  four. Tapping a noun chip reassembles the sentence and speaks it
  (`tfPick`/`tfOutHTML`). **Each assembled sentence needs a clip**, so the
  extractor also walks `trip.frames[].items[][0]+f.s` (appended after the trip
  lines); 8 of the 24 combinations were already recorded, so this cost 16 clips.
  A new language's frames must be noun-first or the `s` suffix model needs
  extending.
- **Shuffle 10** is the only deck and the only header button.

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
with a Nepali translation). Content scope today: **Nepali only** — but every
course language now has a skeleton pack and the faith picker lists all 8
(see the multi-language bullet below).
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
- **Multi-language faith packs (July 2026): every course language has one.**
  `FAITH_CATALOG` lists all 11. **TRANSLATION STATUS — ALL ELEVEN are
  fully translated and shipped (ne bn my km lo mn ps si ur uz jv), 181
  clips each. There are no skeletons left.** See the "Faith translation
  backlog" section below for the per-language vocabulary decisions and the
  method, which still applies if a THIRD story is ever authored — it would
  have to be written in ne first and then run through the same generator
  for the other ten. A skeleton was = the same two stories / 10+10 sections /
  shared scene art as ne (the `FNE_ART` emblems copied as `F<CODE>_ART`),
  English titles in place, `ne:''` native fields + `paras:[]` empty, a
  header documenting exactly how to translate (the `ne` field name always
  holds the NATIVE string). Engine pieces: `FAITHS{}` registry
  (`registerFaith` stores by code), `switchFaithLang(code)` (driven by the
  faith language picker via `pickLang`; loads the pack, applies the matching
  COURSE pack via `switchLang(code,true)` — the faith lock takes a bypass
  arg — so fonts/TTS/palette/data-lang follow), `applyFaithBrand()` (swaps
  both faith heroes to the pack's `art.hero` and paints h1/sub from story
  `title`/`ne`; the built-in Nepali markup is captured once in `FHERO_DEF`
  and restored for ne), `fui(key)` (faith UI strings — a pack's `ui{}`
  overrides the built-in Nepali `FUI_NE` defaults; skeletons carry English
  placeholders + a native `scriptLabel`), `fnum(n)` (uses a pack's
  `digits[]` — km/my/lo/ps/bn have native numerals; si/mn use Western; ne
  keeps Devanagari), and `faithBase()` = `audio-<code>f/` (per-language
  faith clips; manifest 404s harmlessly for skeletons). Sections with empty
  `paras` render a dashed "Content coming soon" card (`.fsoon`) instead of
  the play row. Extractor + generator already know every `<code>f` (same
  voices as the course) — run them only after a pack is translated.
  Filling in a language = translate its `faith/<code>.js` (ui strings,
  story/section `ne` titles, `note` triples, `paras`), then regen audio.

### Stories library + People God Used pilot (July 2026)
The per-story faith tabs hit their ceiling at three, so faith nav became
**Stories · More · Settings**: `view-flib` lists every story in the loaded
pack as a card, and `view-fstory` became the GENERIC HOST — `openStory(sid)`
sets `FSTORY` and the hero paints from the story's own `ne`/`title`. The
fjesus/facts views were deleted (hero copies 4 -> 2: home + host); legacy
show('fjesus'/'facts') routes through openStory. **Adding a story is now a
pack-only change**, proven the same day: the fourth collection **People God
Used** (`flives` — overview + Joseph, 13 strings, 2 art keys gY1/gY2) went
into faith/ne.js with ZERO index.html edits and rendered/played end-to-end.
**The full collection shipped in Nepali the same day**: Joseph, Moses, Ruth,
David, Elijah, Daniel, Jonah, Esther — 8 lives, 62 spoken strings, art keys
gY1-gY2 + gZ1-gZ7, nef at 313 strings.

**Rolled out to all eleven languages in one session** (July 2026) with
`scratchpad/build_lives.py`, the same shape as `build_acts.py`: a per-language
JSON of natives+roms is merged against `lives_master.json` (English + refs
lifted from faith/ne.js), so EN `[2]` and refs `[3]` are byte-identical by
construction — no localized paras at all in this collection, unlike Acts.
The builder asserts para/section shape, forbidden chars, ASCII roms, and a
per-language Unicode script whitelist. 682 new clips, 0 failures; every faith
pack now carries 4 stories / 313 spoken strings and every `audio-<code>f/`
manifest equals its directory.

Per-language register decisions followed each pack's own header rather than a
template: km royal (ព្រះជាម្ចាស់/ព្រះអម្ចាស់, and Nathan addresses the king as
ព្រះករុណា so ទ្រង់ stays reserved for Jesus); my spoken Judson (ထာဝရဘုရား for
the LORD as in its own Abraham section, အီဂျစ် not အဲဂုတ္တု); si spoken with
honorific nouns only (දෙවියන් වහන්සේ + කළා, never කළ සේක්); lo light ຊົງ-
honorific + ພຣະຜູ້ເປັນເຈົ້າ; uz Egamiz per IBT; jv ngoko + krama inggil with
roms generated from the pack's own a->o respelling map (reproduced 262/263 of
its existing word pairs).

Two traps re-confirmed: the Lao draft was scanned for Thai homoglyphs
(0xE00-0xE7F) BEFORE building — zero this time — and the Bengali "no-clip
character" check fires on ং/ঁ inside ordinary words, which is a FALSE
POSITIVE (they occur 83/50/47 times in the already-recorded fstory/fjesus/
facts prose; the no-clip rule is about bare standalone letters in vocab).
Verified live in the browser: 4 library cards per language, 9 story nodes,
readers render with native section counts (۶/۸, ၆/၈, ໖/໘, ៦/៨) and clips
return 200. `index.html` is byte-untouched across the entire collection —
the pack-only story architecture held exactly as designed.

### Meeting Jesus (`fmeet`) — the fifth story, July 2026

The collection Ruan asked for next: **encounters and parables**. Designed
AGAINST the existing Jesus story rather than beside it — `fjesus` already
tells the lost son, the good Samaritan and the two builders, so all three
are deliberately absent here. What went in instead: five people Jesus met
one-to-one (Nicodemus at night, the woman at the well, the woman they came
to stone, Zacchaeus, Bartimaeus) and five parables he told that `fjesus`
never covers (the lost sheep and the lost coin, the Pharisee and the tax
collector, the sower, the unforgiving servant, the great banquet). Ten
sections x 6 paras + note + 5-beat overview = 75 spoken strings per
language; 825 clips across the eleven.

Eleven new emblems on gradient ids **gX1-gX11** (gW/gY/gZ were taken;
gX was free). Every SVG XML-validated and checked ASCII-only before
insertion — a stray CJK character had slipped into one colour value.

`scratchpad/build_meet.py` generalises `build_lives.py`: run it on `ne`
first and it emits `meet_master.json` (English + refs) as a side effect,
then every other language supplies natives+roms only. **The builder now
asserts on every emitted string, English included** — the first `ne` build
produced un-parseable JS because English possessives ("God's word",
"a hundred days' wages") carried ASCII apostrophes into single-quoted
JS strings. House style is the typographic ’, as the rest of the pack
already used.

Per-language work was again pack-led, not templated: km kept ទ្រង់ for
Jesus throughout (this story is entirely about him); my stayed in the
spoken register with ထာဝရဘုရား only where the OT sense demanded; si used
the honorific-noun-plus-spoken-verb pattern; jv roms were regenerated from
the pack's own a->o map; lo was scanned for Thai homoglyphs before building
(clean) and needed one resume pass after edge-tts dropped 2 clips.

### Stories home + More page restyle (July 2026, Ruan)

**The Stories home read as random** because five very different things were
rendered as one flat list joined by a dashed connector — and that connector
says "do these in order", which is true of three of them and false of the
other two. Fix: the pack now tags each story `kind:'arc'` or
`kind:'collection'`, and `buildFLib()` renders two labelled groups —
**The big story** (numbered 1-2-3, connector drawn) and **Collections**
(no numbers, no connector, "start anywhere"). Cards gained a part count
("10 parts" / "8 stories"). An untagged story falls into Collections, so
the pack-only promise survives a future sixth story.

Two traps hit while building it:
- `#flib-root` still had the `.fnodes` class from the old flat list. Since
  `.fnodes::before` IS the connector, the root painted a second dashed line
  down the whole page, straight through both group headings. The root is a
  container of groups now — the class had to go.
- The connector needs to line up with the step numbers, not the old art
  thumbnails: `1.5px border + 14px padding + half the 22px dot = 26px`,
  verified against the measured badge centre (26.5px) rather than eyeballed.

**The More page** was two flat grey cards with identical washed-out icon
tiles. Restyled to match the story cards: white card + shadow + hover lift,
a per-resource accent driven by one `--fm-accent` custom property (crimson
for the Bible, `--teal` for the film — both already theme-aware, so dark
mode needed no extra rules), a leading accent bar on the logical inline
start, READ/WATCH eyebrows, and the trailing caveat promoted from loose
grey text into a proper bordered note. Verified light + dark, desktop +
375px, and in Urdu — where the page stays deliberately LTR, so the accent
bar correctly stays on the left.

**Second pass, same day (Ruan): quieter, with the language's own art.**
The grouped page still had too many words stacked at the top — a "Stories"
h2, a sentence under it, then a group heading AND a sub for each of the two
groups. Ruan asked for the scenery art back at the top instead ("it was
there before"), and for the wording stripped out.

Result: both faith pages now open with the standard `.page-band`. That was
the right hook rather than a `.hero` copy, because `applyArt()` fills every
`.pb-mtns` via querySelectorAll (the hero is `querySelector` — singular —
and the faith story hero is filled separately by `applyFaithBrand`). So the
bands follow the language for free; verified ne/km/lo/ur all render byte-
identical art to the learn pages' band.

- Stories: art-only band (no heading, no sub at all), then the numbered arc
  with no group heading, then a single **More** heading over the collections.
- More page: `Go deeper` moved INTO the band, matching every other sub-page.

The band must stay at the app's standard 140px — first attempt used 112px
and the mountain peaks were cropped off, because the SVG renders 213px tall
at desktop width and the band shows only its bottom slice.

Naming note: the collections group was briefly called "More", colliding with
the faith nav tab of the same name — Ruan renamed it **"Other stories"** in
the next pass.

**Third pass (Ruan): the full home hero, native-titled.** The slim band was
not what he meant — he wanted the language-learning home page's own hero on
the Stories page, with the page title in the native language as the primary
line over the art, and the simpler band kept for the More page.

- `view-flib` now carries a verbatim copy of the home `.hero`. That makes
  **three** hero copies (home, flib, fstory) and six bands.
- `applyArt()` had to change: it used `querySelector('.hero-mtns')` —
  SINGULAR — so a third hero would simply never have been filled. It now
  uses `querySelectorAll` for heroes exactly as it already did for bands,
  and `ART_DEFAULT.hero` (a string) became `ART_DEFAULT.heroes` (an array),
  mirroring `ART_DEFAULT.bands`. Verified all three heroes hold byte-
  identical art in ne/km/ur/jv, in both modes.
- Title is native-first like every other faith surface: h1 =
  `fui('libTitle')`, English `Knowing God` as the quiet second line.
  `libTitle` was added to all ten non-Nepali packs' `ui` blocks (Nepali uses
  the `FUI_NE` default) — UI strings are NOT spoken, so all 11 still
  `--check` MATCH at 388.
- English wording is deliberately NOT "God's Story": that is already the
  title of the first story in the arc, and reusing it for the page would
  read as a duplicate.

**A real CSS bug found while checking mobile.** The `@media(max-width:560px)`
block for the library sat BEFORE the base `.fnode-art{width:96px}` rule.
Same specificity, so source order decided and the mobile override silently
lost — the thumbnail stayed 96px and story titles were squeezed into ~92px,
wrapping three and four lines on a phone. Moving the media query after the
base rules (and trimming the art to 66px, gap 11px) took titles to two lines
and the text column from 92px to 135px. Worth remembering: in this
single-file stylesheet, later rules win, so overrides must come last.
**Worktree trap (cost an hour):** a Claude-worktree's `.claude/launch.json`
had been scaffolded with `python3 -m http.server` — the exact server the
repo forbids — so the browser heuristic-cached faith/ne.js and served a
stale pack through several force-reloads (the entry, created hours earlier,
stayed "fresh" and never revalidated). Fixed by rewriting the worktree
launch.json to run `devserver.py`; in ANY new worktree, check launch.json
runs devserver.py before trusting the preview, and remember a cached entry
from a bad server can outlive the server switch — verify with
`fetch(url,{cache:'no-store'})` when in doubt.

### Third faith story: Jesus' Followers / Acts (July 2026) — ALL 11 SHIPPED
The Acts story went from outline to all eleven languages in one session,
after the Resources ('More') page shipped the same day. What exists now:
- **Story id `facts`**, tab label "Followers": 6-para overview + 10 sections
  (await, pentecost, together, boldness, scattered, damascus, cornelius,
  sent, chains, ends), 54 paras + 10 notes = **70 spoken strings per
  language**, every para carrying its Acts/Revelation reference. The ends
  section's paras 2-3 are the ONLY localized text (country name, native AND
  English) — the review asserts exactly two EN diffs vs the ne master.
- **Engine**: view-facts cloned from view-fjesus (a FOURTH hero copy now
  exists — replace_all count is 4 for hero edits, 3 for faith-only), tab in
  the faith nav, show() guards, FHERO_DEF/applyFaithBrand/switchFaithLang
  extended. **Rollout guard**: buildFaith() shows the Followers tab only when
  the loaded pack carries the story, and show('facts') falls back to fstory —
  so a cached old pack can never render an empty page.
- **Art**: 11 new shared scene emblems appended to every F*_ART (keys ovacts,
  await..ends; gradient ids gW1-gW11 — gA-gV were taken). Scenes and symbols
  only, no figures.
- **Method (reusable for the next story collection)**: English master + ne
  authored first (scratchpad acts_ne.json), then per-language JSONs of
  [native, rom, en, ref] applied by a builder script that ASSERTS: para count
  and section shape vs master, EN/refs byte-identity (minus the 2 localized),
  no ' " < > \ anywhere, roms ASCII+typographic-punct, and — after it caught
  real mistakes — a per-language Unicode-block whitelist on native strings.
  That last check caught Bengali characters inside a Sinhala line and ~60
  Thai homoglyphs typed into Lao (เ/ค/ม for ເ/ຄ/ມ...), fixed by a Thai→Lao
  homoglyph map plus word-level fixes (ครู→ຄູ, แผล→ແຜ, เช่า→ເຊົ່າ, ต่อ→ຕໍ່).
  **Any future multi-script authoring should run this check.** Pack tails
  differ (ne-style `]});` vs ur-style JSON with trailing comma) — the builder
  handles three tail shapes.
- **Vocabulary/register per language**: each translation was anchored by
  grep-probing the pack's existing 181 strings for its established church
  terms, then Bible-tradition name forms per language (my: Judson ပေတရု/
  ပေါလု; km: KSV ពេត្រុស/ប៉ុល with royal ទ្រង់; bn: BSI পিতর/পৌল Kolkata
  cholito; si: spoken register with un wahanse; lo: Pha Chao/Pha Ong light
  honorifics; ps: Afghan پطروس/پولوس; mn: Петр/Паул + чуулган; ur: پطرس/
  پولس + کلیسیا; uz: Butrus/Pavlus + Quddus + jamoat; jv: Petrus/Paulus +
  pasamuwan, ngoko base with krama inggil for God/Jesus). Church-word choices
  new to the packs: my အသင်းတော်, bn মণ্ডলী, si සභාව, lo ຄຣິສຕະຈັກ, ps
  کلیسا, jv pasamuwan.
- **Audio**: 70 clips generated per language (770 total, 0 failures across
  all runs); every faith pack now holds 251 strings, all 11 --check MATCH,
  all 11 manifests equal their directories.
- Verified in the browser (ne, km, jv sampled): node path renders, reader
  opens, clips serve. As with the whole faith mode, this is research-anchored
  translation, not native review — a native speaker spot-check per language
  remains worthwhile.

### Faith translation backlog (July 2026 — READ THIS BEFORE TRANSLATING)
**Done:** ne (original source), **bn** (Kolkata Bengali, 178 clips in
`audio-bnf/`), **my** (Burmese, 178 clips in `audio-myf/`), **km** (Khmer,
181 clips in `audio-kmf/`, July 2026 — vocabulary checked against Khmer
Bible usage: ព្រះជាម្ចាស់ God / ព្រះអង្គ he-of-God / ព្រះយេស៊ូ Jesus /
ទ្រង់ he-of-Jesus / បាប sin / ដំណឹងល្អ gospel / ឈើឆ្កាង cross /
ព្រះវិញ្ញាណបរិសុទ្ធ Holy Spirit / សម្ពន្ធមេត្រី covenant / ព្យាការី
prophet / សិស្ស disciple / យញ្ញបូជា sacrifice / និរទេស exile /
អាណាចក្រ kingdom, with the royal verbs មានព្រះបន្ទូល said, ប្រទាន gave,
យាងមក came, គង់នៅ dwells, សុគត died), **lo** (Lao, 181 clips in
`audio-lof/`, July 2026 — vocabulary checked against Lao Bible / Lao
church usage: ພຣະເຈົ້າ God / ພຣະອົງ the divine honorific pronoun, used
for both God and Jesus / ພຣະເຢຊູ Jesus / ບາບ sin / ຂ່າວປະເສີດ gospel /
ໄມ້ກາງແຂນ cross / ພຣະວິນຍານບໍລິສຸດ Holy Spirit / ພັນທະສັນຍາ covenant /
ຜູ້ປະກາດພຣະທຳ prophet / ສາວົກ disciple / ເຄື່ອງບູຊາ sacrifice /
ການເນລະເທດ exile / ອານາຈັກ kingdom, with the light honorific register —
the ຊົງ- verb prefix (ຊົງສ້າງ created, ຊົງກ່າວ said), ສະເດັດມາ came,
ສະຖິດ dwells, ສິ້ນພຣະຊົນ died, ຄືນພຣະຊົນ rose), **mn** (Mongolian, 181
clips in `audio-mnf/`, July 2026 — CYRILLIC, and the first faith pack with
NO `digits[]` array, since Mongolian writes Western numerals).
**The mn word for God was a real call:** Бурхан also means Buddha, so the
Bible Society of Mongolia coined Ертөнцийн Эзэн (Lord of the universe) to
dodge the association, and Тэнгэр carries shamanist weight. The pack uses
**Бурхан**, because the Ариун Библи — the translation most Mongolian
churches actually use — uses it, verified against its 2013 text of John
3:16. Other vocabulary: Эзэн Lord / Есүс Jesus / Хүү Son / нүгэл sin /
итгэл faith / аврал salvation / Аврагч Rescuer / сайн мэдээ gospel /
загалмай cross / Ариун Сүнс Holy Spirit / гэрээ covenant / эш үзүүлэгч
prophet / шавь disciple / тахил sacrifice / цөллөг exile / хаанчлал
kingdom / мөнх амь eternal life. Register note: Mongolian church usage is
PLAIN — there is no royal-verb system like Khmer or Lao; respect rides on
word choice (Их Эзэн, Ариун) and the polite та, and the Ариун Библи uses
ordinary past forms for God (хайрласан, өгсөн).
**ps** (Pashto, 181 clips in `audio-psf/`, July 2026 — the first RTL faith
pack). Vocabulary taken from the AFGHAN Pashto Bible (afghanbibles.org),
verified against its Luke 19 + Luke 24 text: خدای God / څښتن Lord /
عیسی Jesus / زوی Son / ګناه sin / خلاصون salvation / پاچاهي kingdom /
صلیب cross / راژوندی کېدل to rise / شاګردان disciples / پیغمبران
prophets / زېری good news / باور believe / روح القدس Holy Spirit /
تړون covenant / قربانی sacrifice / وری lamb / بپتسما baptism.
خدای and عیسی are the ordinary words a Muslim reader already knows —
deliberate, and what the Afghan Pashto Bible itself uses.
**RTL note:** the course RTL pass only covered lesson elements, so faith
mode needed its own rule (added next to it in index.html): `.fread-t`,
`.fback`, `.fne`, `.fnote-tag` get `direction:rtl` under
`:root[data-lang="ps"]`, `.fh-ne`/`.fread-count` get `unicode-bidi:isolate`
so the quiet English stays a unit, and **`.from` is forced back to
`direction:ltr`** — the romanization is pure ASCII and a trailing full stop
was otherwise bidi-shunted to the left end of the line.
**si** (Sinhala, 181 clips in `audio-sif/`, July 2026 — the LAST one; no
`digits[]`, Sinhala writes Western numerals like mn).
**Register decision:** Sinhala is strongly diglossic and the Sinhala Bible
is LITERARY, with honorific verb endings (John 3:16 ...ප්‍රේම කළ සේක්...
දෙවා වදාළ සේක්). This pack deliberately uses SPOKEN Sinhala instead, so it
stays consistent with the course (`lang/si.js` teaches spoken Sinhala) and
does not put liturgical grammar in front of an un-churched reader. Respect
rides on the honorific NOUNS දෙවියන් වහන්සේ / යේසුස් වහන්සේ, which Sinhala
Christians use in ordinary speech, with plain spoken verbs (කළා, දුන්නා).
Vocabulary: පාපය sin / විශ්වාසය faith / ආදරය love / ගැළවීම salvation /
ගැළවුම්කරු Rescuer / ශුභාරංචිය gospel / කුරුසිය cross / ශුද්ධාත්මයාණන්
වහන්සේ Holy Spirit / ගිවිසුම covenant / අනාගතවක්තෘවරයා prophet / ගෝලයා
disciple / පූජාව sacrifice / පිටුවහල් කිරීම exile / රාජ්‍යය kingdom /
උත්ථානය resurrection.

**ur** (Urdu, 181 clips in `audio-urf/`, July 2026). Vocabulary from the
**Urdu Revised Version**, the translation Pakistani churches use, verified
against its John 3:16-17 text: خدا Khuda God (**never** اللہ Allah), یسوع
Yisu Jesus (**never** the Muslim عیسیٰ Isa — note this is the OPPOSITE call
from Uzbek below), خداوند Khudawand LORD, بیٹا Son, گناہ gunah sin, نجات
nijat salvation, ایمان imaan faith, صلیب salib cross, روح القدس
Rooh-ul-Quds Holy Spirit, عہد ahd covenant, نبی nabi prophet, شاگرد
shagird disciple, قربانی qurbani sacrifice, بادشاہی baadshaahi kingdom,
خوشخبری khushkhabri gospel, ہیکل haikal temple, برہ barra lamb, plus the
URD's own **کے وسیلے سے** "by means of" idiom. Register is plain
respectful Urdu — no royal-verb system as in Khmer or Lao. Nastaliq and
RTL were already handled by the course build (`RTL_CODES` and the
`:is([data-lang="ps"],[data-lang="ur"])` faith rules), so no new CSS.
**uz** (Uzbek, 181 clips in `audio-uzf/`, July 2026). Vocabulary from the
**Muqaddas Kitob**, verified against its Mark/John text: Xudo God, **Iso**
Jesus, Rabbiy Lord, Oʻgʻli Son, gunoh sin, najot salvation, Muqaddas Ruh
Holy Spirit, Xudoning Shohligi kingdom, Xushxabar gospel, xoch cross, ahd
covenant, paygʻambar prophet, shogird disciple, qurbonlik sacrifice,
maʼbad temple, Qoʻzi lamb. **The Iso/Yisu contrast with Urdu is the point:
research each language's own Bible rather than reasoning by analogy.**
Respect rides on capitalising divine pronouns (U, Oʻz, Oʻzi), as that
Bible does. No `digits[]` — Uzbek writes Western numerals.
**jv** (Javanese, 181 clips in `audio-jvf/`, July 2026 — the last one).
Vocabulary from the **Kitab Sutji**, verified against Yokanan 3: Gusti
Allah God, Gusti Yesus Jesus, **Panjenengane** the honorific third person
for both, dosa sin, kaslametan salvation, Juru Slamet Rescuer, salib
cross, Roh Suci Holy Spirit, prajanjian covenant, nabi prophet, murid
disciple, kurban sacrifice, Padaleman Suci temple, Cempe lamb, pracaya
believe, Kratoning Allah kingdom, Kabar Becik good news. **Register: the
Sinhala call again.** The Kitab Sutji is formal/krama but `lang/jv.js`
teaches ngoko, so the prose is accessible and respect rides on the
honorific words for God and Jesus (rawuh, ngandika, seda, wungu, miyos,
paring). The Lord's Prayer is the one deliberate krama exception.

**THE BACKLOG IS COMPLETE — all 11 faith packs are translated and shipped
(ne, bn, my, km, lo, mn, ps, si, ur, uz, jv), 181 clips each.**

### Building a faith pack: traps the ur/uz/jv round exposed
The generator lives in `scratchpad/faith/gen_faith.py` and the method above
still holds. Four defects it had, all now fixed — check for them if it is
ever rewritten:
- **`check_rom` NORMALISES and returns** (em dash → " - "); an earlier
  `build()` called it for its assertion but wrote the RAW string, so
  typographic punctuation leaked into ASCII-only romanizations.
- **`overview.start` is a `[native, English]` pair**, not a string. Emitting
  only the native made `start[1]` the second CHARACTER.
- **Section id ≠ art key**: `crossgs` uses `FNE_ART.cross`. Read the mapping
  out of `faith/ne.js` rather than assuming — and note ne.js quotes with
  `'`, not `"`, which a first regex missed.
- **Languages writing Western numerals carry NO `digits[]` at all** (mn, si,
  uz, jv) — `fnum()` falls through to `String(n)`.
**Latin-script faith packs need their own guards.** There is no script regex
to catch a stray lookalike, and a Cyrillic а/с/о/и/г is invisible on review:
two slipped into Uzbek (`barakа`, `ulovига`) and were caught only by an
explicit assert. Uzbek also needs **U+02BB** for oʻ/gʻ and **U+02BC** for the
tutuq belgisi — an ASCII apostrophe would break the inline onclick handlers.
`check(s, where, latin=True)` asserts against both.
**Javanese romanization must be checked mechanically, not by eye.** The rule
is /a/ → o in an open final syllable, spreading leftward through open /a/
syllables (basa→boso, pracaya→procoyo), and it does NOT apply when the final
syllable is closed or suffixed (`kapracayan`, `dosane` stay as written).
`scratchpad/faith/jv_romcheck.py` builds a lexicon from `lang/jv.js` itself
and checks every word; it caught 15 misses, mostly `ora`→`oro`.
**But do not let that lexicon drive an automatic FIXER.** `lang/jv.js`
contains a misaligned row mapping `regane`→`rega`, and the fixer rewrote
"regane wis lunas dibayar" into a different word. The lexicon now only
accepts pairs that are the same word modulo a→o. **This is the same
bulk-automation trap recorded for the gloss-consistency sweep — it applies
to romanization too: verify with a script, edit by hand.**

### Faith-mode audit (July 2026) — what it found, and the rules it set
A full health check ran over all 8 packs (content, translation, code, audio,
rendering). Data integrity, audio and translation quality came back clean:
zero English/scripture-ref drift, zero forbidden chars, zero script
contamination, romanization 100% consistent, no concept omissions, and no
hash collisions between the 1442 faith clips and the 10142 course clips
(worth re-checking if clips are ever added — `playFile` tries the COURSE
manifest first, so a collision would play a vocabulary word inside a Bible
story). Fixes applied:
- **bn and my were each missing 3 paragraphs** — `spread[8]`, `wait[5]`
  (the whole Daniel / lions-den paragraph) and `immanuel[5]`. They had been
  added to `ne` after those two packs shipped and never backfilled, which is
  why they sat at 178 clips. Backfilled + audio regenerated → 181.
- **bn and my also had `abraham` in a different ORDER** than ne (the "Why
  did God choose Abraham?" paragraph sat at index 5 instead of 2); the other
  five packs matched ne. Reordered to match.
- `loadFaithManifest()` is now **awaited** in both callers — it was
  fire-and-forget, so a tap right after switching language raced the fetch
  and fell back to device TTS.
- `.fnode` now sets `color:var(--ink)`. It was the one faith button relying
  on the UA `buttontext` system colour (there is no `color-scheme`
  declaration anywhere), so its text was not bound to the theme.
- Escape now closes the story reader (guarded on `.modal-bg.show` — that is
  the open-modal class in this app, NOT `.open`).
- `FUI_NE.soon`/`soonEn` were inverted (English in the native slot); fixed,
  and the two `.fsoon` render sites now put native in `.deva`.
- The script/roman picker's aria-label said "Show Nepali…" for all 8
  languages; now language-neutral.
- **Faith heroes are NATIVE-FIRST** (Ruan, July 2026): h1 = the native story
  title, `.hero-fsub` = English. This applies to Nepali too — the built-in
  markup used to be English h1 + Nepali subtitle, contradicting the
  native-primary rule. `applyFaithBrand` sets h1 from `st.ne`. The h1 needs
  the multi-script font stack (id-scoped rule beats `.display`/Fraunces,
  which has no Devanagari/Khmer/Myanmar/Sinhala/Lao/Arabic glyphs).
  **The PICKERS stay English** — `MODE_CATALOG` ("Religious studies") and
  `FAITH_CATALOG` ("Khmer — ខ្មែរ") are navigation: a reader has to find
  their own language before the native-first content can help them.
- Pashto only: the `N · Title` middle dot is dropped for a plain gap
  (`.fnode-sep{font-size:0}`), because `·` is near-identical to the
  Arabic-Indic zero ۰ and "۱ ·" read as "۱۰".
**Scripture references verified (July 2026):** all 159 citations were checked
against the passages they claim to retell. One error found and fixed — the
Joshua paragraph narrates the Jordan crossing but cited `Joshua 1 · 6`; the
crossing is Joshua **3** (Joshua 1 is the commissioning, 6 is Jericho), now
`Joshua 1 · 3 · 6`. Everything else was accurate, including the tricky ones
(Malachi 3:1 + Mark 10:45 for the temple-return/ransom pairing, Colossians
2:15 + 1 Cor 2:8 for the rulers who did not understand, 2 Cor 5:21 for the
great exchange). Refs are byte-identical across all 8 packs, so a fix must be
applied to all 8 files. The mixed granularity is deliberate — book-level for
broad summaries (`Ezra · Nehemiah`, `1–2 Kings`), verse-level for specific
retellings, and descriptive where honest (`Malachi → Matthew` for the 400
silent years, `Matthew 7 (the close)`); that is not an inconsistency to fix.
Only 2 paragraphs carry no reference and both are the closing hand-offs.

**The two OVERVIEW illustrations were replaced (July 2026, Ruan: the other art
is good but "the first 2 pictures I dont really like").** `ovstory` was an open
book with a red cross and `ovjesus` a heart with a cross — flat EMBLEMS sitting
among nineteen landscape SCENES, which is exactly why they stood out. Both are
now scenes in the house language (gradient sky, layered receding bands, the
established palette). `ovjesus` is Galilee at golden hour with a small boat,
deliberately calm and non-specific because the cross and the empty tomb already
have their own illustrations. `ovstory` took two goes: the first version was a
dawn vista with a river, which Ruan correctly said looked too like `creation`
directly beneath it — **both were sun + rolling green hills + a winding stream
in the same blues + flower dots, i.e. the same COMPOSITION with a different
sky**. It is now a different KIND of picture: receding mountain ridges at dawn,
no water, no vegetation, far ridges warm and near ones in shadow, so it reads
as depth and span. **When two scenes sit next to each other, vary the
composition, not just the palette.** Gradient ids gU/gV are kept. **The art is duplicated
verbatim in ALL EIGHT faith packs, so any scene edit must be applied to all
eight** — and it is audio-neutral, so all 8 `<code>f` strings files still match.
Two things worth reusing: warm sandy hills (#B3A183 / #9C8F7B, already used in
gP and gR) read against blue water where grey ones vanish into it; and ridge
layers need real value steps or they flatten into one shape.

Future faith work is new CONTENT (Ruan has floated Jesus' followers /
Acts as a third story), not translation. If a third story is ever added,
it has to be authored in ne first and then run through this same
generator pipeline for the other seven.
**Guard that earned its keep (si):** the generator's ASCII-rom check
caught a stray `ā` in one romanization and aborted BEFORE writing the
file — keep that guard. Same for the script-range check below.
**Generator gotcha (cost a full regeneration on lo):** when adapting the
previous language's python generator, the chunk-directory glob is
`os.path.join(SP,'<code>','*.json')` — a `sed` on the string
`scratchpad/<code>` does NOT match it, so the script silently rebuilds
the PREVIOUS language's text under the new filename. Always grep the
generated file for the new script's Unicode range (and for the previous
language's range) before trusting it.
**Do ONE language per session, single-threaded.** A parallel-subagent
attempt across four languages at once blew through the usage limit and
produced nothing — the careful one-at-a-time approach is what actually
shipped bn and my.
Method that worked (mirror it exactly):
1. Read `faith/ne.js` (authoritative source) + a finished pack
   (`faith/bn.js` or `faith/my.js`) as the working example.
2. Slice the skeleton's `const F<CODE>_ART={…}` block (~28.6KB, identical
   language-independent scene art) and reuse it VERBATIM.
3. Write a python generator that emits the whole `faith/<code>.js` (header,
   art const, `registerFaith({code,digits?,ui,stories})`) with
   `para()`/`note()` helpers that JSON-escape every value.
4. Translate ONLY native `[0]` + romanization `[1]`. **English `[2]` and
   the scripture ref `[3]` stay BYTE-IDENTICAL to faith/ne.js** — diffing
   them back against ne is the automated proof of no content drift.
   Native-primary, English quiet second line; storytelling register for the
   un-churched reader; that language's real church vocabulary + honorific
   register for God/Jesus (research it); romanization per the scheme at the
   top of `lang/<code>.js` (no non-ASCII letters); native strings must
   avoid `' " < > \`; paraphrase only; localize the two Nepal references
   (`abraham` note + `newcreation` para) to the new country.
5. Validate: JXA parse (2 stories, 10+10 sections, every section has `ne` +
   3-part `note` + non-empty `paras`), char guards, English/ref diff vs ne.
6. Audio: `extract_audio_strings.js <code>f` → `generate_audio.py --lang
   <code>f` → prune orphans + write `audio-<code>f/manifest.json` (FNV-1a),
   then `extract_audio_strings.js <code>f --check`.
7. Verify in the browser preview (faith mode → switch language → hero art,
   script/roman toggle, console clean) AND confirm ne/bn/my still render.
8. Commit locally; never push without Ruan saying so.
- Future content candidates (Ruan): Jesus' followers / Acts.

### Register relevance pass (July 2026) — teach what people actually SAY
Ruan's brief: no textbook-isms (his example: -nuhos vs the spoken -nus, fixed
earlier), no slang either — relevant spoken language; faith mode understandable
to the everyday person. A marker-grep sweep of all 11 course + 11 faith packs
on the greeting / please / imperative axes found most packs already right
(spoken Sinhala + the kohomada note, Mongolian -aarai imperatives, Lao ຂໍ/ແດ່
with kaluna correctly framed "kindly", Pashto mehrabaani wokrra, Khmer សូម,
Bengali teaching no artificial please, Javanese ngoko, Uzbek iltimos, Urdu
aadaab labeled "respectful"). Three real findings, all FIXED:
- **ne**: courtesy topic production-drilled कृपया as everyday "please" (mc +
  3 tr) and five Intensive sentences calqued "कृपया X-नुस्". Now: recognition
  -only with a "Where is please?" culture note; drills moved to हजुर/हुँदैन/
  हुन्छ/ठीक छ (already recorded); Intensive sentences dropped कृपया (3 new
  clips, strings 2357→2355).
- **ur**: برائے مہربانی was glossed plain "please" (10 vocab+eg rows, matches,
  meaning-mcs). Reglossed "please (formal)" + notes explaining Pakistanis say
  the English word "please" or let keejiye carry it. Audio-neutral. (معاف
  کیجیے is genuine spoken usage — 119 kijiye hits are almost all it; fine.)
- **my (course)**: the script-zone note claimed mingalaba is "the everyday
  Burmese greeting" — it's the polite/formal one; both greeting notes now
  point at ne kaung la / "have you eaten?" as the street register. Notes
  only — audio-neutral.
**DONE in the same July 2026 push: faith/my.js rewritten into SPOKEN
Burmese.** It was 100% literary (121 သည်။, 422 ၏, zero spoken တယ်။ — even the
hero title). All 181 paras/notes were re-registered by hand (သည်→တယ်/ပါတယ်,
၏→ရဲ့, နှင့်→နဲ့, ၌→မှာ, ၍→ပြီး, ကျွန်ုပ်တို့→ကျွန်တော်တို့), plus the 17
literary section titles, both story titles and the ui{} labels; honorific
VOCABULARY kept (ကိုယ်တော်, ကြွလာ, မိန့်တော်မူ); the Lord's Prayer paras keep
church first-person ကျွန်ုပ်တို့ deliberately (how Burmese Christians pray —
same call as the Nepali -नुहोस् prayers); the serpent speaks familiar မင်း,
God says သင်. Proof of fidelity: English [2] + refs byte-identical before/
after; structure identical; 0 literary markers left in content. All 181
audio-myf clips regenerated (same voice), 181 old clips deleted, dir ==
manifest, --check MATCHES. The Khmer faith
royal register (ទ្រង់/ព្រះអង្គ) was reviewed and KEPT — that is how Khmer
Christians actually refer to God, universally understood. Nepali faith prayers
keep -नुहोस् (how Nepali Christians actually pray).
Same pass also shipped: faith mode now follows the current course language on
entry (was: last faith language or ne), requeued wrong answers reshuffle their
options (the _sh clone is stripped on requeue), and 71 orphan clips were
deleted from audio/ (dir now equals manifest at 2355).

### Language-course audit (July 2026) — findings and standing rules
A full health check ran over the language-learning side: 8 courses, ~3,100
lessons, 24,742 exercises, 10,150 course clips, plus the lesson engine.
Structure, safety, romanization and audio came back CLEAN — 645 well-formed
topics, no orphan/duplicate lessons, full SYM coverage, zero inline-handler
breakers, zero native script in rom fields, and every strings file still
matching its pack (`--check` passes for all 8, so no content has drifted from
its recorded audio). Fixes applied:
- **`mascotSVG()` was called directly at 4 render sites** (lesson complete,
  test passed, test failed, review complete), so every non-Nepali course
  showed the Nepali YETI on those screens while the in-lesson feedback bar
  correctly showed the pack mascot. Confirmed in the browser (Khmer: elephant
  in the feedback bar, yeti on completion) and fixed to `artMascot()`.
  **The rule stands: never call `mascotSVG()` outside `artMascot()`.**
- **9 mc questions gave the answer away via the `d` prompt** — `d` renders at
  52px directly above the choices, so "How do you say Hello?" displayed
  नमस्ते with नमस्ते among the options. Same class as the 192 `r`-giveaways
  swept earlier. `d` stripped (ne 3, si 3, lo 2, km 1). **When authoring an
  mc, neither `d` nor `r` may equal one of that exercise's own options.**
- One wb (`experiencer#8`) had no `pool` at all; three sibling copies of the
  same exercise already carried `pool:['मलाई','मन','पर्छ','छु','म']`, so it
  got that. NOTE: the engine falls back to `ex.a` when `pool` is missing
  (`ex.pool?ex.pool.slice():ex.a.slice()`), so such an exercise still RENDERS
  and is solvable — it just has no distractors. A missing pool is a quality
  bug, not a crash; don't mistake one for the other.
- One garbled question (`lo_clothes_3#3`) opened about a hat then pivoted
  mid-sentence to shirts; rewritten.
All of the above are now FIXED, including the two that were first left as
backlog items:
- **Every word-bank exercise now has real distractors.** 120 pools were
  expanded (112 Nepali Intensive, 8 main); distractors are drawn only from
  vocabulary the learner has ALREADY met at that point in the course, exclude
  script-zone letters, and are rotated deterministically so they vary between
  exercises rather than always being म/छ. House style is +1 or +2 tiles and
  that was matched. 25 genuine ORDERING exercises ("put these in order",
  "count down 4 -> 1") keep exact tiles — sequencing is the task there, so
  distractors would be wrong.
- **All gloss inconsistencies resolved** (110 occurrences across 7 packs).
  Curated by hand, never automated: a naive "one gloss contains the other"
  rule produced false matches like 'no'->'not', 'head'->'counter for animals
  (lit. head)' and 'hair'->'hair (Zone 5 review)', which would have damaged
  content. Genuine homographs are deliberately left with two glosses —
  छ six/is, नှစ် two/year, চিনি know/sugar, ຊື່ name/straight, یو we-are/1,
  گاडी vehicle/car, को of/who. Convention applied: word glosses lowercase,
  full utterances capitalised ('Thank you', 'Nice to meet you').
Both edits are AUDIO-NEUTRAL — `pool` is never spoken (only `wb a.join(' ')`)
and glosses are `vocab[2]`, so no clips needed regenerating; `--check` still
matches for all 8 packs.

**Khmer learn-step listening added (July 2026).** A cross-language comparison
found Khmer was the only course whose `learn` lessons were 100% multiple-choice
— 503 exercises, zero listening — while every sibling ran ~20% `li` at that
step. A Khmer learner never HEARD a word in the lesson that introduced it,
which matters most in the language whose whole difficulty is the two consonant
series. 167 `li` exercises were added across all 84 learn lessons (now 75% mc /
25% li, no single-type lessons left).
Rules that made this safe, worth reusing for any future pack:
- **`say` must be an existing vocab word**, so the clip already exists —
  `--check` still matched afterwards and NO audio needed regenerating.
- **Distractors come from the SAME lesson's vocab** (all four options are words
  just introduced), which is a sharper discrimination test than pulling from
  older vocab. Zero lessons needed a fallback.
- **Never put two same-sounding options in one listening exercise** — the
  generator rejects any candidate whose romanisation is already used, so a
  question is always answerable by ear. (Same principle as the Lao rule about
  not pitting ຂ/ຄ against each other.)
- Watch modular arithmetic when rotating through candidates: a first attempt
  used `(hash + i*5) % len` which can only reach gcd(5,len) distinct indices,
  so 7 lessons silently got no exercises. Use a seeded shuffle instead.

Known and NOT bugs, so nobody re-flags them:
- **Nepali `li` exercises use TWO patterns**: pick-the-word (`o[a]===say`) and
  pick-the-MEANING (English options, so `o[a]!==say`). 869 are the latter and
  are correct — the CLAUDE.md `li o[a]===say` rule applies only to the first.
- Teach-before-test is effectively clean once each lesson is credited with its
  own teaching; the residue is compositional forms (हस्पतालमा = hospital+मा)
  and the fact that Khmer and Lao write **no word spaces**, so a naive scan
  reads a whole phrase as one unseen "word".

### Cross-language parity check (July 2026)
Compared all 8 courses on the same structural metrics (zone/topic/lesson counts,
exercise-type mix overall AND per step, exercises per lesson, vocab load per
learn lesson, notes, SRS seed, SYM coverage). Structure came back uniform: every
course is 12 zones, every topic is exactly 5 lessons in
learn→recognize→build→mix→checkpoint order, SYM coverage is complete, no answer
index out of range, no duplicate options, no romanization leaks, and zero risky
strings in the four fields that get interpolated into inline handlers
(`vocab[0]`, `ex.d`, `ex.say`, `pairs[i][0]`).

**Fixed — the learn-step listening gap, round 2.** The Khmer fix earlier in July
searched for lessons that were *100% multiple-choice*, which let a bigger case
slip through: **Sinhala had zero listening in 81 of its 84 learn lessons** (0.5%
of learn exercises vs 12–14% everywhere else). It escaped the earlier sweep only
because its learn lessons carry a `wb`, so they were never "single-type". Three
smaller pockets sat in the same blind spot — the script-zone letter lessons of
Burmese (6), Lao (3) and Pashto (1), which is exactly where hearing the letter
matters most. **105 `li` exercises** were added (si 95, my 6, lo 3, ps 1); all 8
courses now sit in a 12–20% band with **zero** learn lessons lacking listening
and **zero** single-type lessons anywhere.
Same safety rules as the Khmer pass, and they held: `say` is always an existing
vocab word of that same lesson (so the clip already exists — **all four
`--check` runs still MATCH, no audio regenerated**), distractors come from the
same lesson, no two options share a romanization, and selection uses a seeded
shuffle rather than modular stepping. Verified live in the browser: the clip
returns 200, `shufOpts` moves the answer off slot 0, and answering scores.

**The three remaining gaps were then closed (July 2026), all AUDIO-NEUTRAL:**
- **`fill` was entirely absent from Burmese and Sinhala** (0 vs 82–518
  elsewhere). **283 added** (si 145, my 138), one per `build` and one per `mix`
  lesson. The trick that kept it free: a fill's spoken string is
  `s.replace('___', o[a])`, so every sentence was chosen from strings ALREADY
  recorded for that language (existing `wb` answers, multi-word vocab, match
  pairs). Result: **zero strings added or removed** from either set. The
  `audio_strings_*.json` files still changed, because the extractor dedups by
  FIRST occurrence and some sentences now debut in `build` rather than `mix` —
  that is an ORDER change only, and order is irrelevant to audio (clips are
  hashed per string). Always diff the string SET before assuming a `--check`
  failure means new recordings. Topics with no recorded sentence yet (the script
  zone, early number topics) correctly got none, matching where siblings start
  their `fill` coverage (zone 2).
- **SRS seed was 15 in my/si vs 20 elsewhere** — topped up to 20 with words
  already in each pack's vocab (so already recorded): si gained sorry/home/
  money/tomorrow/mother, my gained sorry/home/money/tomorrow/friend, mirroring
  the shape of the ne and bn decks.
- **Khmer's heavier load turned out NOT to be a defect — do not "fix" it.**
  Its zones 2+ average 8.6 new words per learn lesson (max 12) against 5.6–6.5
  elsewhere, and it is not a script-zone artifact. But it also runs 10 exercises
  per learn lesson, so exercises-per-new-word is **1.16 — the same as Bengali's
  1.15**, and a practice-coverage check found Khmer at **0.4% of vocab never
  practised, better than Nepali's 1.8%**. The load is deliberate and fully
  supported. Restructuring topics to spread it would change lesson ids and
  break existing learners' progress for no pedagogical gain.

**That coverage check found a small real gap and 13 fixes shipped.** 19 vocab
items across ne/km/lo/mn/ps were taught but never practised anywhere in their
topic. 13 were genuine misses and got one recognition exercise each, hand-written
to match each lesson's own style (never generated — the gloss-automation lesson
applies). The other **6 are correct as they are and must not be "fixed"**:
Nepali citation infinitives whose topics rightly drill the conjugated forms
(सक्नु→सक्छु/सक्दिनँ, पर्नु→पर्छ/पर्दैन, लाग्नु), the Pashto infinitive
خرڅول (the topic drills پلوري), and pattern templates containing a literal
`...` (म ... सक्छु, मलाई ... चाहियो) which cannot be drilled as written.

**Tooling bug found and fixed:** `extract_audio_strings.js` still read Nepali
from `index.html`, which the July 2026 payload split had emptied — so
`extract_audio_strings.js ne` had been erroring out ever since, and any script
looping over all 8 languages silently skipped ne (a "set unchanged" result from
such a loop is vacuous, not proof). It now loads `lang/ne.js` like every other
pack and `loadNePack` is gone. Nepali had NOT drifted in the meantime —
`--check` matches at 2314 strings.
Clip coverage was re-verified for all 8: zero orphans, every manifest equals its
directory, and exactly **8 strings have no clip — all documented no-edge-tts
characters** (si ඞ ඣ ඦ, my ဎ, bn ং ঃ ঁ, mn Щщ), which fall back to device TTS.
A trap worth remembering: a JS string's `.length` is UTF-16 code units, not
bytes — a Sinhala file that is 605K on disk reads as 441K characters, which
looks alarmingly like a truncated fetch. Do not chase that as a bug.

### Vocabulary recycling & difficulty ramp (July 2026) — analysis, no code change
Asked of all 8 courses: does a word taught in Zone 2 ever come back, and does
the new-word load ramp sensibly?

**The ramp is healthy and flat.** New words per zone sit at 33–49 for every
language except Khmer (53–64 — the same deliberate, practice-backed load
documented above) and Nepali, which dips to 19/15 in Zones 7–8 because those are
grammar zones (can/must/want) that add patterns rather than nouns. No topic
spikes.

**Recycling inside the lesson path varies a lot — but read the number carefully.**
Measuring "taught once, never appears in any later topic" only means something
once the categories are separated, because alphabet letters, numerals and whole
sentences all live in `vocab` alongside ordinary words:
- independent alphabet letters rarely recur in running text (Devanagari ऐ/ओ
  appear as matras, not as independent letters) — expected, and the Alphabet page
  plus its flashcards cover them;
- whole-sentence vocab rows naturally never recur verbatim;
- for **single content words** the orphan rate runs si 19% · bn 19% · my 30% ·
  mn 31% · ps 36% · km 37% · ne 43% · **lo 52%**.

**This is mitigated by design, and the mitigation was verified live.**
`finishLesson` calls `addVocab(l.vocab)` on first completion of every lesson
(index.html), so **every taught word enters the SM-2 review deck automatically**.
Confirmed in the browser: finishing a Sinhala lesson moved the deck 20→25 with
all five words due immediately and carrying their glosses. The lesson path is the
INTRODUCTION channel; the Review tab is the RETENTION channel. Curriculum-level
reappearance is therefore a bonus, not the mechanism — which is the Duolingo/Anki
model and a defensible design.

**Lao is the weakest on both axes** (52% of content words never reappear, and
73.8% of its native-script distractors come from the same topic, the highest of
any pack) — so a Lao learner working only through lessons sees the least of their
older vocabulary. That is a content-authoring opportunity for a future Lao pass,
NOT a bug.

**Do not "fix" distractors in bulk.** Native-script distractors cost no audio
(only an mc's CORRECT option is recorded), so redrawing them from older
vocabulary looks like a free recycling win. It is not safe to automate: "not
previously taught" here also catches legitimate inflected forms of taught words
and deliberate minimal-pair foils in the script lessons. This is exactly the
shape of the gloss-consistency automation that produced false matches — curate by
hand or leave alone. Note also the real tension: for `li` (listening
discrimination) same-lesson distractors are CORRECT and deliberate, per the Khmer
listening pass.

### Progress-safety & cloud sync audit (July 2026) — 31 checks, no defects
The worst possible bug in this app is losing someone's progress, so the merge
path was exercised directly against the real functions (only the network layer
was stubbed, so `cloudPull`/`mergeGlobal`/`mergeLang`/`migrateLegacy` all ran for
real). **Everything passed.** Verified:
- `done` UNIONS across devices; the more-advanced SRS card wins (higher `reps`,
  ties broken by later `due`); words unique to either side are all kept.
- A null or empty cloud row never wipes local progress — it triggers a push
  instead.
- Per-language isolation holds: an inactive language in the payload is written to
  its own `sajilo_<code>` key and never leaks into the active language's state.
- Device prefs (theme/rom/voice/sound/autoNext) survive sync — `prefsPick(S)` is
  re-applied LAST in `cloudPull`, so even a rogue row carrying prefs cannot
  clobber them — and the pushed payload contains no prefs at all.
- The active language stays a per-device choice; `unlocks` union both ways.
- **v1 legacy flat rows** (pre-multi-language clients) still merge correctly as
  Nepali, keeping both sides' lessons and stats.
- **`migrateLegacy` is safe and idempotent**: the old `sajilo` blob moves to
  `sajilo_ne` + `sajilo_global` with SRS schedules (`reps`/`int`/`ef`) and device
  prefs intact, the original is kept as a backup, and re-running it does NOT
  clobber newer progress. `resetAll` then clears the legacy blob along with
  everything else (the `sajilo_ne`/`sajilo_global` keys that remain afterwards are
  freshly re-seeded EMPTY defaults, not leftovers — don't mistake them for a leak).
- A DIFFERENT account signing in on the same device does not inherit the previous
  account's progress or XP, while device prefs survive the switch.

**One deliberate design trade-off, documented so nobody "fixes" it:** XP, totals
and bestStreak merge by `Math.max`, not by sum. Two devices used offline in
parallel therefore keep the larger XP, not the combined total. That is the
correct choice for an idempotent sync — summing would inflate XP every time the
same data is re-pushed. Note what this protects: real LEARNING progress (`done`
and the SRS deck) is never lost because those union; only the cosmetic XP counter
can under-count.

**Two harness traps that cost time here** — both produced convincing false
failures before being diagnosed:
1. Supabase `maybeSingle()` returns a ROW, and the payload lives in `row.data`.
   Stubbing it to return the payload directly makes `cloudPull` skip its merge
   branch entirely and look like it is silently dropping cloud progress.
2. **`switchLang` refuses to switch while the exercise view is active**
   (index.html — deliberate, so a learner never loses a lesson mid-flow). Any
   test that leaves a lesson open will find every later `switchLang` silently
   no-opping, and the app will appear to be merging into the wrong language.
   Call `show('home')` first.

### Mobile & multi-script layout audit (July 2026) — 1 RTL bug fixed
Checked at 375x812 (iPhone width), since most learners are on phones.
**All 8 languages x home / alphabet / review / settings: zero horizontal
overflow.** Lesson screens were exercised for the hard scripts too — the Burmese
match grid (tall stacked glyphs render fully, no clipping), Mongolian long words
(Төрсөн өдрийн мэнд wraps gracefully inside its tile), the Sinhala `fill`
sentence, and the Pashto RTL word bank. Faith mode was checked at mobile as well:
the Pashto reader keeps its native-first hero and right-aligned RTL paragraphs.
Confirm, auth and level-up modals all fit.

**Fixed — a real RTL bug.** The word-bank placeholder rendered as
"…Tap the words below" in Pashto: the string is English but sits inside
`.wb-answer`, which is forced `direction:rtl`, so its trailing ellipsis was
bidi-shunted to the left end. Added `:root[data-lang="ps"] .wb-ph{direction:ltr;
display:inline-block}` — exactly the same fix already applied to `.from` for the
romanization full stop. **This is a recurring trap: any English UI string placed
inside an RTL-forced container needs its own `direction:ltr`.** Verified the
placeholder now reads correctly in Pashto and is unchanged in LTR languages (the
rule is `[data-lang="ps"]`-scoped).

**Also fixed (Ruan asked for it right after): the Pashto nav arrows now mirror.**
All five faith navigation arrows went through two helpers next to `fui`/`fnum` —
`aBack()` and `aNext()`, driven by `RTL_CODES={ps:1}` / `isRTLLang()`. In Pashto
"back" and "previous" now point `→` and "next" points `←`, following the reading
flow; every LTR language is byte-identical to before. **Add future RTL languages
(Urdu, Farsi, Arabic) to `RTL_CODES` and the arrows follow automatically** — do
not hardcode `&larr;`/`&rarr;` at new faith nav sites.

**Measurement traps for whoever audits layout next** — three separate false
alarms came from these:
1. **SVG scenery children** (circle/ellipse/g/path) report bounding boxes outside
   their clipped parent, so a naive "element extends past the viewport" scan
   flags ~25 of them per page. Always confirm against
   `document.documentElement.scrollWidth` — if that equals the viewport width,
   there is no overflow.
2. **Card animation transforms**: jumping `curE` and calling `renderEx()` directly
   bypasses the `advance()`/`animateOut()` flow, leaving `.excard` stuck under a
   `translateX(34px)` that looks exactly like a layout bug.
3. **`exitLesson(true)` is not a force flag** — it opens the "Leave this lesson?"
   confirm, and every measurement taken afterwards is of a view sitting behind a
   modal.

### Performance budget & asset/SEO sweep (July 2026) — 1 boot fix
**Transfer sizes are healthy.** What a learner actually downloads (gzipped, as
Netlify serves it) is `index.html` 56K + pack + manifest:
ps 137K · lo 135K · my 159K · bn/mn 163K · si 176K · km 188K · **ne 269K**
(Nepali is heaviest because it also carries the Intensive track). The July 2026
payload split is doing its job — a Pashto learner no longer pays for the Nepali
pack. Faith packs add ~45K gz and only load in faith mode. Boot on a warm local
server: domInteractive 31ms, 8 resource requests, no failed fetches.

**Asset integrity: zero missing.** Every referenced local asset, all 8 language
packs, all 8 faith packs, all 16 audio manifests, and the root files
(`_redirects`, `robots.txt`, `sitemap.xml`, `og-image.png`, favicons) are present.
Only two third-party runtime hosts: Google Fonts and jsDelivr.

**SEO is complete.** All 8 languages appear in the meta description, keywords,
the JSON-LD `teaches` array, and there are 8 `Course` entries. The `<title>` names
only four plus "& More" — that is CORRECT, not a gap: it is already 77 chars, past
what Google displays, so do not add languages to it. Refreshed `sitemap.xml`
`lastmod` to 2026-07-21. Fonts use `display=swap` + preconnect, and Google Fonts'
`unicode-range` means a learner only downloads the script they actually render.

**Fixed — the Supabase library was blocking app start.** The tag sat immediately
before the inline app script with no `defer`, so `boot()` could not begin until a
third-party CDN responded. That matters for this app's actual audience, on
constrained networks in Nepal, Myanmar and Afghanistan. Added `defer` + an
`id="sb-lib"`, and made `initSupabase` re-run on that script's `load` event if the
library has not arrived yet. Verified all three paths: normal (client still
created), library-missing (no throw, `sb` stays null, listener attached exactly
once even if `initSupabase` is called repeatedly, app fully usable with sync off),
and late-arrival (client wires up when the load event fires). If the CDN is
blocked entirely the app now still boots and works locally — only sync is lost.
**Note for testing this:** `delete window.supabase` does NOT remove the global;
use `window.supabase=undefined` or the test silently proves nothing.

### Resilience & accessibility pass (July 2026)
Both were exercised in the browser rather than read off the source.

**Resilience — all handled, no fixes needed.** Corrupt localStorage (malformed
JSON, `null`, wrong types) recovers to defaults with arrays intact; a
`setItem` that throws (Safari private mode / quota) is swallowed and lessons
still play; a missing pack leaves the app on its current language with `S.lang`
still matching `LANG.code`; a missing audio clip falls back to TTS without
throwing; a failing manifest fetch does not break the page. Rapid input is
safe too — triple-tapping a path node opens ONE lesson with queue and segbar
in agreement, and triple-firing Check scores exactly once (the `phase` guard).

**Accessibility — one real fix.** Every visible interactive element has an
accessible name (83/83 on home, 7/7 in a lesson). Keyboard focus is properly
visible: `button:focus-visible` etc. give a 2.5px saffron outline, verified
with real Tab presses (`:focus-visible` matched, ring drawn), and there is no
global `outline:none`. The one genuine failure was the **Start/Done chip**
under a path node — `color-mix(--zacc 78%, --ink)` on its tinted background
gave **4.31:1** against the 4.5 minimum for 11.5px text. Changed to **70%**,
which lifts it to **4.85** (and the Done chip 4.66 → 5.24) with no visible
design change.
**Caution for whoever measures contrast next:** naive scripted checks here are
unreliable and produced three separate rounds of false failures. Two traps —
(1) computed colours come back as `color(srgb 0.81 0.9 0.86)` with 0–1 floats,
not 0–255, so a regex that grabs the numbers reads them ~255x too dark; (2)
walking up for a background misses gradients and `color-mix` layers, which
yields nonsense like a 1.00 ratio (identical fg/bg) on text that is plainly
legible. Always sanity-check a suspicious number against a screenshot before
"fixing" anything. Dark mode was verified visually and is fine.

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
  stupas for Nepal, no mosques or madrasas for Urdu or Uzbek, no candi for Javanese).
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
