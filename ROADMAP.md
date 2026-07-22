# ROADMAP — Urdu · Uzbek · Javanese

The staged build plan for Bhasaly's next three courses. Read alongside
`CLAUDE.md`, which holds the standing rules this plan assumes. **One stage per
session, single-threaded** — the parallel-subagent approach was tried in July
2026 for the faith packs, burned the usage limit and shipped nothing.

Every stage ends the same way: validate → verify in the browser preview →
commit locally → **never push** (Ruan says when to deploy).

---

## Why these three

| | speakers | why it earns a slot | voice |
|---|---|---|---|
| **Urdu** | ~230M | Pakistan's lingua franca; the big apps skip it, and what exists is mostly Hindi material with a note about script. **Reuses the Pashto RTL work.** | `ur-PK-AsadNeural` |
| **Uzbek** | ~35M | Central Asia, almost no decent learner material. **Latin script — the fastest build of the three.** | `uz-UZ-SardorNeural` |
| **Javanese** | ~68M | The widest speaker-to-resource gap anywhere: everything points learners at Indonesian instead. Latin script. | `jv-ID-DimasNeural` |

All three verified working end-to-end through `edge_tts` in July 2026. Male
voices, matching the house default.

---

## Phase 0 — Foundations ✅ DONE (July 2026)

Ship nothing user-visible. Solve the things that would otherwise be discovered
mid-build.

### 0.1 The Latin-script extractor problem — **the one real blocker**

`extract_audio_strings.js` decides what to speak with `pack.script.test(s)`.
For a Latin-script pack that test cannot tell Uzbek `rahmat` from English
`thank you`. Measured: Mongolian alone has **214 mc correct-options in English**
that the Cyrillic regex silently filters out. Uzbek and Javanese would generate
English clips in an Uzbek voice.

**Shipped fix:** an opt-in `latin:true` on the pack. Only `mc` is genuinely
ambiguous — its `d` prompt and options may be English meanings; every other
spoken field is native by construction. So `nativeVocab(pack)` collects the
unambiguous fields (`vocab[0]`, `say`, `wb a.join(' ')`, `match pairs[i][0]`,
`tr a`, alphabet arrays, SRS seed) and an mc string is kept only if it appears
there. Non-Latin packs still go through `pack.script` and are untouched —
**proved: all 8 shipped strings files still `--check` MATCH.** A synthetic
Uzbek-shaped pack confirmed the new path keeps `rahmat`/`salom`/`xayr` and drops
the English options `thank you`/`goodbye`/`sorry`.

**The plan missed a second half of this, found while implementing:
the ENGINE reads `LANG.script` too.** Two call sites: `collectLessonStrings`
(safe — prefetch is guarded by `AUDIO_KEYS.has`, so a stray English string is
inert) and **`hasDeva`, which decides whether to speak the correct mc option
aloud**. With a Latin regex that would read the English answer in an Uzbek
voice. Fixed with `packNativeSet(pack)` — the same construction as the
extractor, built once and cached on the pack — and `hasDeva` now branches on
`LANG.latin`. **When authoring a Latin pack, set both `latin:true` and a
`script` regex** (the latter is still used by the validation sweeps).

### 0.2 Romanization schemes (document at the top of each pack)

- **Urdu** — phonetic, ASCII, reusing the Pashto conventions: aspirates `kh/gh/
  ch/th/ph`, retroflexes doubled `tt/dd/rr`, long vowels `aa/ee/oo`. NOT ALA-LC.
- **Uzbek** — native spelling is already Latin, so `vocab[i][1]` becomes a
  **pronunciation respelling**, not a transliteration: `x`→`kh`, `q`→ deep k,
  `oʻ`→`aw`, `gʻ`→ French r. Genuinely useful; do not just copy the native form.
- **Javanese** — same idea, and it earns its keep: final `a` is `ɔ`
  (`Yogyakarta` → `Yogyakarto`), plus the retroflex `dh`/`th` vs dental `d`/`t`.

**Consequence:** validation rule 3 in CLAUDE.md ("native script must not appear
in `vocab[1]`/`ex.r`") cannot apply to `uz`/`jv`. Exempt Latin packs explicitly
rather than deleting the check.

### 0.3 Fonts

- **Urdu needs Noto Nastaliq Urdu.** DONE: added to the Google Fonts link and
  applied through a `:root[data-lang="ur"]` block that overrides the shared
  stacks wherever native text is drawn. It is **not** added to the 23 global
  stacks — that would render Pashto in Nastaliq, which is wrong. Because no
  stack outside that block names it, other languages never download it.
  `line-height:2.05` (1.7 for the big alphabet/flip glyphs) because the baseline
  steps down across a word. Verified in the browser: the font loads, the
  cascade renders, and word-bank tiles and mc options do not clip.
- Uzbek and Javanese need nothing — Latin, system fonts.

### 0.4 Engine plumbing

- DONE: `RTL_CODES = {ps:1, ur:1}` — arrows and faith nav mirror automatically.
- DONE: the nine behavioural Pashto RTL rules were **widened with `:is()`**
  rather than duplicated — `.wb-answer`, `.wb-bank`, `.wb-ph`, `.fill-sentence`,
  `.exbig`, the four faith-reader rules, `.from`, and the two `.fnode-*` fixes.
  The `[data-lang="ps"]` **palette** rules and the **Naskh font** rule were
  deliberately NOT widened: Urdu gets its own palette and its own Nastaliq rule.
  Verified Pashto is byte-for-byte unaffected in behaviour (wb-answer rtl,
  placeholder ltr, rom ltr) and that a simulated `data-lang="ur"` picks up all
  of it.
- **MOVED to each language's ship stage: `LANG_CATALOG`, `LANG_FLAGS`, SEO.**
  A catalog entry whose `lang/<code>.js` does not exist would 404 on switch, and
  advertising an unbuilt course in the JSON-LD is wrong. These are per-language,
  not shared infrastructure — they belong in stages 2E / 3E / 4E alongside the
  early-access label. Flags when built: Pakistan, Uzbekistan, Indonesia; all
  official state flags, so the exemption applies — including Pakistan's crescent
  and star, exactly as Cambodia keeps Angkor Wat.
- `alpha` labels for the Alphabet page. **Uzbek and Javanese have no separate
  script**, so that page teaches sounds and spelling: for Uzbek the letters
  `oʻ gʻ sh ch ng` and the unfamiliar `q`/`x`/`h`; for Javanese the a→ɔ rule and
  the retroflex pairs. Zone 1 is titled accordingly, not "The Script".

### 0.5 SEO — deferred to each language's ship stage

Advertising a course that does not exist is worse than advertising it late. Per
CLAUDE.md the `<title>` is already at its display limit — do not lengthen it;
add to the meta description, keywords, the JSON-LD `teaches` array and one
`Course` entry when the course actually ships.

**Exit — met:** all 8 shipped strings files `--check` MATCH, app parses, all 8
languages render with no overflow and no console errors, Pashto RTL intact,
**no user-visible change**.

---

## Phase 1 — Art for all three, up front ✅ DONE (July 2026)

Ruan, July 2026: *"the original artwork, let's just make it really good … I
don't want it to be created poorly and then have to rework it."* The Sinhala art
was rebuilt four times and the Lao art twice. **This phase exists to spend that
effort once, before any curriculum work.**

### The checklist every hero and band must pass

Drawn from the accumulated art rules in CLAUDE.md — treat as a gate, not advice:

1. **Three distinct hue steps** — cool/misty `--mtn-far`, warm contrasting
   `--mtn-mid`, saturated `--mtn-near`. Never three greens or three greys.
2. **Landmarks contrast their layer.** A dark object inside the dark near-band
   disappears. Pale objects use `class="snow"`.
3. **Material colours, never a default green.** `--tree` is FOLIAGE ONLY.
   `--wood` beams and hulls, `--bark` trunks, `--hide` brown animals, `--slate`
   grey animals, `--tyre` wheels and dark openings.
4. **No human figures.** Vehicles, animals, buildings and plants only.
5. **No religious buildings or symbols**, and **no cross shapes anywhere**,
   including UI glyphs.
6. **Title safe zone.** Hero: nothing above y≈235 in x∈[130,710]. Band: keep
   x≲770 low and flat.
7. **Ground paths close along the bottom edge** (`…L1200 H L0 H Z`) or the pale
   far layer peeks through.
8. **Snow caps derived from the ridge, not eyeballed** — `scratchpad/gencaps.py`;
   decimal base corners; cap width under ~52 or the peak beneath is too flat.
9. **Repeated objects drawn once at a local origin, placed by `transform`.**
   Grounding: `translate-y + 100*scale` must land on the near crest at that x.
10. **Judge it at full size before shipping.** Two icons and five "palms"
    shipped as unreadable shapes because they looked plausible small.

### 1.1 Urdu — Hunza and the Karakoram

Must not read as "Nepal again". Nepal owns cool blue-green Himalaya + yaks +
pines, so Pakistan goes **warm and dry**: rust and ochre rock, angular Karakoram
spires rather than Nepal's rounded ridgeline, a terraced valley of **apricot
orchards in blossom** (pale pink — a hue nothing else in the app uses).

Landmarks: a **decorated jingle truck** — genuinely iconic, entirely secular,
and a gift for the material-colour rule (`--crimson` panels, `--orb` amber trim,
`--tyre` wheels, `--wood` bed). A **markhor** with spiral horns (`--hide`, the
national animal). Chinar trees.

### 1.2 Uzbek — the Silk Road, without the architecture

Almost all famous Uzbek buildings are madrasas and mosques, so **build the scene
from land and trade instead**: dunes stepping back into steppe, a **Bactrian
camel caravan** (two humps, `--hide`), a **melon cart** (striped Uzbek melons on
a `--wood` cart), cotton fields as white flecks in the near band.

Palette: sand and ochre far, **turquoise** as the accent — the defining Uzbek
colour, and a colour is not a symbol. Poplars exist but Pashto already uses
them; if used, make them a different silhouette or skip.

### 1.3 Javanese — the volcano

The most distinctive silhouette available to any of the three: **a perfect
volcanic cone with a drifting plume**. Nothing in the app looks like it.

Below it, **terraced sawah** — differentiated from Khmer's flat paddies by being
stepped down a slope with visible contour lines. A **banyan** with aerial roots
(`--bark` trunk and roots, `--tree` crown) and a **water buffalo** (`--slate`).
Deep volcanic grey far, warm terraced green mid, lush near.

**Deliberately skipped:** the becak, too close to Bengali's autos.

**Exit — met:** three heroes, three bands and three mascots shipped in
`lang/ur.js`, `lang/uz.js`, `lang/jv.js`, with light and dark palettes in
index.html. Structural sweep clean (ground paths close, no empty groups, no
degenerate paths, nothing off-canvas). Urdu's 7 snow caps are flush to 0.000px
with every width under 52. The 8 shipped languages are untouched.

**What needed a second pass, and why — read this before authoring more art:**
1. **A flat band reads as nothing.** Urdu's first mid layer was a uniform
   horizontal slab and looked like a brown stripe; it only became a hillside
   once it had a real crest and terrace contour lines following the slope.
   Javanese's sawah had the same fault and the same fix.
2. **Leave enough near band for pieces to stand on.** Urdu's first valley floor
   was ~15px tall, so the truck and markhor appeared to sit on bare earth. Lift
   the crest, then re-ground every placed piece to the new crest.
3. **Contrast the far layer against the SKY, not just the mid.** Uzbek's pale
   sand dunes (#C9B8A0) nearly vanished into the warm sky; cooling them to
   #ADAEB6 restored the three hue steps.
4. **An animal needs its species' silhouette, not a generic body.** The
   Javanese buffalo read as a goat until the horns became wide filled crescents
   sweeping BACK over the shoulders — upright stroked loops are wrong, and
   filled shapes read far better than strokes at this size.
5. **A reusable piece placed in both hero and band appears TWICE in the file.**
   A `str.replace` with an `==1` assertion will fail; use replace-all.

**Still to do when Ruan reviews:** confirm at mobile width and in dark mode.
The palettes are verified to resolve, but the compositions have only been
eyeballed at desktop.

---

## Phase 2 — Urdu (5 sessions)

Each language follows the Sinhala/Bengali staging: 12 zones, 84 topics, 420
lessons, 5 lessons per topic (learn → recognize → build → mix → checkpoint).

**Urdu-driven, not a mirror** — the house rule. What makes Urdu its own thing
and drives the sequence:

- **Grammatical gender with agreement.** Unlike every course shipped except
  Pashto. Adjectives and verbs both agree. This is the spine, and it belongs in
  Zone 3, not buried.
- **The ergative نے in the perfective** — the same phenomenon the Pashto course
  already teaches gently as recognition. Reuse that pedagogy.
- **Three politeness levels** آپ / تم / تو — a ladder like Bengali's, but with
  real verb morphology.
- **Nastaliq reading** is genuinely hard: letters change shape and stack
  diagonally. Zone 1 teaches shape families and dots, ear-led, as Pashto does.

| stage | content |
|---|---|
| **2A** | Z1 script (Nastaliq shape families, retroflexes ٹ ڈ ڑ, aspirates with do-chashmi he ھ, the ye family) · Z2 foundations (سلام, the aap/tum/tu ladder, gender in nouns, numbers, introductions) · Z3 the grammar engine (gender agreement, SOV, ہے/ہیں, نہیں, question words) |
| **2B** | Z4 postpositions کو/سے/میں/پر + family + city + food · Z5 numbers, money, bargaining, clock · Z6 agreeing adjectives, colours, comparison, weather, body |
| **2C** | Z7 past + **the ergative نے** + future گا/گی/گے + can سکنا · Z8 transport, directions, hotel, phone, dates · Z9 connectors, opinions, work, help |
| **2D** | Z10 relationships, small talk, learner lifelines · Z11 extras · Z12 settling in |
| **2E** | `extract_audio_strings.js ur` → `generate_audio.py --lang ur` → manifest → `--check`; SEO Course entry; catalog label; full validation |

## Phase 3 — Uzbek (5 sessions)

**Freebies to lean on as encouragement:** no gender, no articles, and weak-to-
absent vowel harmony in standard Uzbek (unlike other Turkic languages).

**Uzbek-driven spine:** agglutinative suffix stacking is the whole story — the
case system `-ni / -ga / -da / -dan` behaves much like Mongolian's, so that
teaching order transfers. Cyrillic is still widely seen in practice; teach Latin
and add Cyrillic as recognition only, late.

| stage | content |
|---|---|
| **3A** | Z1 sounds & spelling (`oʻ gʻ sh ch ng`, the q/x/h contrasts, the no-gender freebie) · Z2 foundations · Z3 grammar engine (SOV, `-man/-san/-di`, `emas`/`yoʻq`, `-mi` questions) |
| **3B** | Z4 the four cases + places + family · Z5 numbers, soʻm, bozor · Z6 adjectives, colours, weather |
| **3C** | Z7 past/future/ability/necessity · Z8 transport, directions, staying · Z9 connectors, work, free time |
| **3D** | Z10 home and small talk · Z11 extras · Z12 settling in (osh/plov, melons, the chaikhana as a secular teahouse) |
| **3E** | audio, SEO, catalog, validation |

## Phase 4 — Javanese (5 sessions)

**The central curriculum decision, to be researched before Zone 2 is written:
the speech levels.** Javanese `ngoko` and `krama` are not a politeness suffix —
they are largely different vocabularies. Everyday speech is ngoko; what an
outsider is addressed in, and should use to elders, is krama. Even `matur nuwun`
(thank you) is krama.

**Proposed approach, to confirm against sources:** teach ngoko as the base
because it is what you hear, and carry krama for the courtesy set and address
terms — the same shape as the Khmer course's age-based address terms. Flag any
unresolved call inline in a lesson `note` rather than guessing silently.

Aksara Jawa is heritage script and appears on street signs in Yogyakarta and
Solo. **Recognition only, and only as a late bonus zone if at all** — it is not
what the TTS speaks and not what learners need.

Keep content secular: batik, warung, pasar, sawah. Wayang and much traditional
performance are tied to Hindu epics — out of scope under the secular rule.

| stage | content |
|---|---|
| **4A** | Z1 sounds & spelling (the a→ɔ rule, dh/th vs d/t, no tones) · Z2 foundations **including the ngoko/krama decision** · Z3 grammar engine (SVO, no conjugation, `ora`/`boten`, question words) |
| **4B** | Z4 places, family, food · Z5 numbers, money, pasar · Z6 adjectives, colours, weather |
| **4C** | Z7 aspect `wis`/`lagi`/`arep` + ability `iso` · Z8 transport, directions, staying · Z9 connectors, work, free time |
| **4D** | Z10 home and small talk · Z11 extras · Z12 settling in |
| **4E** | audio, SEO, catalog, validation |

---

## Phase 5 — Cross-language QA

Run the checks that already exist, now across 11 courses:

- structural parity (zones, topics, 5-lesson shape, exercise-type mix per step)
- **learn-step listening coverage** — the gap that bit Khmer and then Sinhala.
  Every learn lesson needs `li`, `say` must be an existing vocab word of that
  same lesson so no new audio is needed, distractors from the same lesson, and
  no two options sharing a romanization
- `fill` present in build and mix steps; SRS seed at 20
- mobile at 375px, including **Nastaliq line-height under real Urdu sentences**
- clip coverage: manifest equals directory, zero orphans
- progress/cloud-sync unaffected

---

## Content standards that apply throughout

- **Course content is secular.** No ministry material in any of these three.
  Faith mode is separate, and a faith pack for any of them is future work, not
  part of this plan.
- **Research, not a native reviewer.** Cross-check every uncertain word against
  multiple sources before shipping; flag genuinely unresolved calls in a `note`.
- **Node titles are professional standard terminology**, never cutesy.
- **mc answer-giveaways:** neither `d` nor `r` may equal one of that exercise's
  own options.
- **Word banks need real distractors**, drawn only from vocabulary already met.
- **Inline-handler safety:** `vocab[0]`, `ex.d`, `ex.say`, `match pairs[i][0]`
  must not contain `'`, `"`, `<`, `>` or `\`.
- Regenerate that language's strings file whenever spoken content changes, then
  its audio, and commit the clips with the manifest.
