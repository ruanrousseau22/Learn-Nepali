# XHOSA.md — the isiXhosa build plan (first African course)

Staged plan for the `xh` course, in the spirit of ROADMAP.md. Written Aug 2026,
alongside the Asia & Africa rebrand. **Do not deploy any stage until Ruan says
so.** Status legend: [ ] planned · [~] in progress · [x] done.

## STANDING ORDER (Ruan, Aug 2026 — autonomous run)

Work WITHOUT further prompting through: Zones 5-12 -> checkpoint-review
orphan pass -> Short-term trip pack -> art (hero/band/mascot, Eastern
Cape secular scenery) -> faith pack (all six stories, CONTEMPORARY
Xhosa, BSSA 2023 register) -> ship wiring (LANG_CATALOG, flag,
landing pages, og-xh, JSON-LD, keywords, attribution in terms +
Settings). Check everything continually (checker after every zone,
extractor parse, audio 0-failures, periodic browser smoke). Commit
per stage. DO NOT push/deploy — Ruan says when.

## Why Xhosa, and what is different about this build

- ~8M first-language speakers (Eastern & Western Cape, South Africa), second-
  largest home language in SA. First African course after the rebrand.
- **Audio is NOT edge-tts.** There is no Azure Xhosa voice. Clips come from
  **UBC-NLP/Simba-TTS-xho** (VITS, Hugging Face, CC-BY-4.0, EMNLP 2025 "Voice
  of a Continent"), run LOCALLY via `generate_audio_xh.py` + the
  `xhosa-tts` venv. Ruan approved the voice by ear (Aug 2026 listening test,
  click-heavy samples).
  - **Attribution is a license obligation**: at ship, add a credit line to
    `terms.html` acknowledgements ("Xhosa audio synthesized with Simba-TTS by
    UBC-NLP, CC-BY-4.0") and make the Settings voice line for xh read
    "Using recorded Xhosa audio (Simba TTS, UBC-NLP)".
  - Never run two generators for xh at once (same `.part` discipline as
    `generate_audio.py`).
- Latin script → `latin:true` (like uz/jv): no alphabet tab, no alphabet
  landing page. The **Sounds zone replaces the alphabet zone** pedagogically —
  clicks are taught as lessons with audio, not as a letter grid.
- Positioning: Ruan first said "additional content"; the rebrand implies a
  listed course. **Decide at ship time** — default plan is a normal listed
  course (landing pages, JSON-LD, keywords), since the title already says
  African.

## Audience & register (Ruan, Aug 2026)

- Built for **Xhosa speakers and learners in Cape Town** — urban, young,
  code-switching reality ("slang Xhosa" exists; the course teaches standard
  spoken Xhosa, kept conversational, never literary).
- **Faith content register**: NO archaic traditional Xhosa — young Capetonians
  do not understand it. The reference for church vocabulary is the
  **Bible Society of South Africa 2023 isiXhosa translation** (contemporary
  language; the 1859/1975 Bible is famously archaic — avoid its forms).
  Faith paras are paraphrase (house rule) in everyday conversational Xhosa.
  The More page should link the 2023 version on bible.com when the faith
  pack ships (curl-verify the language page then).

## Research base (per Golden-rule 2: how Xhosa is actually TAUGHT)

- *Teach Yourself Complete Xhosa* (Kirsch & Magona) — the standard self-study
  course: starts with clicks + greetings, then builds noun classes, subject/
  object concords, tenses, commands, possessives systematically.
- UW–Madison LCTL self-instructional Xhosa lessons (greetings-first ordering).
- Cross-checks: Wiktionary, Omniglot, SA phrasebooks; prefer everyday spoken
  urban+rural Xhosa over literary register. Flag genuinely unresolved calls in
  a lesson `note`, never guess.

## Language facts that drive the design

- **Clicks**: c (dental), x (lateral), q (post-alveolar), each with aspirated
  (ch/xh/qh), voiced (gc/gx/gq) and nasal (nc/nx/nq) variants. Must be taught
  FIRST and drilled with audio — this is the alphabet-zone equivalent.
- **Noun classes** (the engine of the grammar): everything agrees with the
  noun's class. Teach GRADUALLY, one or two classes per zone, always through
  vocabulary (um-/aba- people, u-/oo- names & kin, isi-/izi- things &
  languages, i-/ama-, in-/izin-, um-/imi-, ulu-, ubu-, uku-). Never present
  the full 15-class table — introduce each class with its words and its
  subject concord, the TY way.
- **Verbs**: agglutinative; subject concord + stem (ndi-ya-phila). Present,
  perfect -ile, future -za ku-. Negatives a-...-i. Commands = bare stem.
- **Stress/length**: penultimate syllable — encode in the rom respellings.
- **Register**: respect carried by address terms (tata, mama, bhuti, sisi)
  and plural imperatives; `nceda` (please) is genuinely used in speech —
  production-worthy, unlike ne कृपया. Greetings are culturally load-bearing:
  greet before ANY interaction; Molo (one person) / Molweni (several).
- **Real-life vocabulary reality**: numbers above ~5 and prices are usually
  said in English in daily SA speech — teach native numbers 1–10 for
  recognition + the English-loan reality in a culture note (register rule:
  teach what people actually SAY).

## Romanization scheme (documented at top of lang/xh.js too)

Native slot [0] is the real Latin orthography. Rom slot [1] is an ASCII
pronunciation respelling: hyphenated syllables, CAPS on the stressed
(penultimate) syllable, English-ish vowels (aw/eh/ee/oh/oo), clicks KEPT as
their letters inside square-free respelling with the Sounds zone carrying the
click explanations — e.g. molo → "MAW-law", enkosi → "en-KAW-see",
ndiyaphila → "ndee-yah-PEE-lah", ndicela → "ndee-CEH-lah" (c = dental click).

## The 12 zones (content decides topic sizes; ~7 topics each is a guide)

1. **The sounds of Xhosa** — vowels & friendly consonants; the c click; the
   x click; the q click; click variants (aspirated, voiced, nasal); special
   consonants (hl, dl, tsh, ny, kr, ngc…); sounds in real words + greeting
   preview. (Replaces the alphabet zone; li-heavy.)
2. **Greetings & people** — Molo/Molweni, Unjani?/Ndiyaphila, names
   (Igama lam ngu-…, Ungubani?), goodbyes (hamba/sala kakuhle), yes/no/
   thanks/sorry; classes 1/2 (um-/aba-) through people words.
3. **Family & respect** — umama, utata, usisi, ubhuti, kin terms (1a/2a),
   my/your possessives (-am, -akho), who-is-this, respect address culture.
4. **Numbers, days & time** — 1–10, counting phrases, the English-numbers
   reality (culture note), days of the week, today/tomorrow/yesterday,
   time-of-day greetings.
5. **Food & drink** — staples (isonka, amasi, umngqusho, inyama, amanzi,
   iti, umphokoqo), I want/like (ndifuna/ndithanda), eat/drink verbs, braai
   & shared-meal culture; classes 9/10 (in-/izin-) + 5/6 (i-/ama-).
6. **Around the home** — indlu & rooms, everyday objects (7/8 isi-/izi-),
   live/stay (ukuhlala), where questions (-phi?), locative e-/-ini intro.
7. **Getting around** — minibus-taxi culture (the real transport), go/come/
   walk (ukuya/ukuza/ukuhamba), directions, town places (evenkileni,
   esikolweni, edolophini), locatives consolidated.
8. **Shopping & money** — imali, Yimalini? (how much), buy/sell (ukuthenga/
   ukuthengisa), spaza & market culture, this/that demonstratives,
   quantities.
9. **Work & school** — jobs (3/4 um-/imi- + 11), umsebenzi, school words,
   daily-routine verbs, present-tense negative (a-…-i).
10. **Body & health** — body parts, sick/hurt (ukugula, ubuhlungu), clinic
    phrases, commands/imperatives (drilled here, TY-style).
11. **Past & future** — perfect -ile, narrative past, future -za ku-,
    weather, telling what happened / what will happen.
12. **Conversation & community** — feelings, invitations, visiting
    etiquette, phone phrases, ubuntu as a culture note, mixed conversation
    consolidation.

Grammar thread: concords ride along with each class as its vocabulary
arrives; checkpoint review-mcs recycle earlier zones per the orphan rule
(hosts checkpoint-then-mix, total lesson cap 15).

## Build stages

- [x] Voice decision (Simba-TTS-xho listening test, Ruan approved)
- [x] `generate_audio_xh.py` — local Simba pipeline: reads
      `audio_strings_xh.json`, writes FNV-1a-named MP3s + `manifest.json`
      into `audio-xh/`; resumable; MP3 via lameenc (no ffmpeg on this Mac).
      Venv: ~/.bhasaly-xhosa-tts (durable, survives sessions).
- [x] Pack skeleton `lang/xh.js` (latin:true) + extractor taught `xh`.
      LANG_CATALOG + LANG_FLAGS deliberately DEFERRED to ship (a stray
      deploy must not expose a half course); test via console injection:
      LANG_CATALOG.push({code:'xh',label:'Xhosa — isiXhosa'}).
- [x] Zone 1 (Sounds) COMPLETE — s1 vowels, s2 c click, s3 x click, s4 q
      click, s5 variants (isiXhosa/nceda/umngqusho), s6 hl/dl/ty/nj/tsh,
      s7 first greetings (molo/molweni/enkosi/goodbye pair). 35 lessons,
      216 exercises, 75 clips. Integrity checker: scratchpad check_xh.py
      pattern (teach-before-test + all engine invariants) — recreate it
      each session and run after EVERY authoring pass; it caught 2 real
      violations on first run.
- [x] Zone 2 (Greetings & people) COMPLETE — g1 how-are-you (unjani/
      kunjani/ndiyaphila/ndikhona/wena/nawe), g2 names (igama lam/lakho,
      Ungubani?, NdinguSipho), g3 people + um-/aba- pair (umntu/abantu,
      umntwana/abantwana, indoda, umhlobo, ubuntu note), g4 street
      politeness (bhuti/sisi address culture, ndiyabulela, akunani),
      g5 where-from (Uvela phi?, ndivela, eKapa/eGoli/eMonti, locative
      e- note), g6 where-you-live (Uhlala phi?, ndihlala, eKhayelitsha/
      eGugulethu with their meanings, ilokishi/idolophu), g7 learner
      survival kit (Uthetha isiXhosa?, ndithetha kancinci, Uyaqonda?/
      ndiyaqonda, Ndifunda isiXhosa). 35 lessons, 215 exercises, 60 new
      clips (135 total). Checker passed first run.
- [x] Zone 3 (Family & respect) COMPLETE (105 lessons total, 649 ex,
      188 clips — checker caught 1 distractor-before-note, fixed): f1 umama/utata (+makhulu grandparents,
      Molo tata/mama address), f2 ubhuti/usisi + oo- plurals + umzala,
      f3 my-family possessives (intsapho, abazali, umama wam / utata
      wakho — wam/wakho with kin vs lam/lakho with igama), f4 who-is-
      this (Ngubani lo?, Lo ngumama wam, yena), f5 respect & clan names
      (intlonipho, isiduko, amaXhosa/umXhosa), f6 is-anyone-home
      (ikhaya, Ukhona utata?, ukhona/akekho, usekhaya), f7 family
      conversation + si-/ba- concords (sonke, sihlala/bahlala, kunye,
      Unjani umama?, uphilile) — completes the ndi/u/si/ba person set.
- [x] Zone 4 (Numbers, days & time) COMPLETE (140 lessons total, 864 ex,
      217 clips): n1 1-5, n2 6-10 (sixhenxe double-click), n3 Mon-Fri
      built from the numbers (uLwesibini=2nd day...), n4 weekend
      (uMgqibelo/iCawa also-church note, impelaveki, namhlanje),
      n5 izolo/ngomso/ngoku (now-now note)/kusasa/ebusuku, n6 nini? +
      ngo-/nge- day forms + kaninzi, n7 usuku/inyanga(moon)/unyaka +
      yonke imihla habit sentence. English-numbers reality note in n1.
      Checker caught 1 distractor-before-note (uLwesibini), fixed.
- [x] Zone 5 (Food & drink) COMPLETE (175 lessons, 1077 ex, 267 clips):
      d1 ndilambile/ndinxaniwe/ndifuna + the Ndicela politeness formula,
      d2 staples (isonka/amasi/iti/ikofu/irayisi), d3 nditya/ndisela +
      ntoni? (+ cela/sela one-click-apart trap), d4 braai (ishisanyama,
      inkukhu, intlanzi, amaqanda i->ama- plural), d5 garden (umbona
      behind umngqusho, iitapile/itumato/itswele, isiqhamo), d6
      ndithanda + FIRST NEGATIVE a-...-i (andithandi, explains
      andiqondi), d7 table culture (Kumnandi!, hayi enkosi, guests
      always fed). Checker caught 1 (itswele), fixed.
- [ ] Zone 6 (Around the home): h1 rooms (igumbi/ikhitshi/igumbi
      lokulala/ifestile/iyadi), h2 objects (isitulo/itafile/ibhedi/
      isitya/umbane + load-shedding note), h3 isi-/izi- pair drills
      (izitulo/izitya/isipili), h4 where-is-it (iphi?/apha/phaya/
      phantsi/phezulu), h5 kitchen tools (ikomityi/ibhotile/imela/
      icephe/imbiza), h6 home verbs (ndipheka/ndihlamba/ndilala/
      ndivuka/ndiphumla), h7 locative -ini (ekhitshini/endlwini +
      phrases).
- [ ] Zones 7–9.
- [ ] Zones 10–12 + weekly-style checkpoint review pass + cold-test
      measurement (MANDATORY before ship — the ur/uz/jv lesson).
- [ ] Art: South African secular scenery (Table Mountain silhouette hero,
      aloe/protea/acacia, rondavel homesteads, ocean; palette: fynbos greens/
      ocean blue/Karoo ochre — three distinct hue steps). Mascot TBD.
- [ ] Short-term trip pack (contextualized: taxi phrases, braai, spaza,
      load-shedding vocabulary?, greetings-first etiquette).
- [ ] Ship checklist: SEO refresh (keywords "learn Xhosa, isiXhosa app…",
      JSON-LD teaches + Course), gen_landing maps (NO alphabet page),
      og-xh card, landing pages regen, attribution lines (terms + Settings),
      faith pack LATER (isiXhosa Bible 1996 exists — same 255-string recipe).

## Measurement traps specific to xh

- Latin pack: the pack `script` regex cannot separate native from rom by
  codepoints — the roms are hyphenated/CAPS respellings; scan for THAT shape
  instead (uz/jv precedent).
- Clicks in `say` strings: the Simba voice pronounces clicks well (verified);
  never respell a click away in the native slot.
- English loans (numbers, prices) are legitimate NATIVE content in SA speech;
  don't "fix" them into pure Xhosa the street doesn't use.
