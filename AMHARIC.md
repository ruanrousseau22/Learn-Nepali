# Amharic (am) — build plan & continuity notes

## STANDING ORDER (Ruan, Aug 15 2026 — autonomous build)

"Keep working until zone 12 for amharic, and then build out all the
sections, the religeos section, everything. And then check all your work
continually to make sure everything is really good. … Please do thorough
research on how to teach amharic. Dont deploy anything to netlify until I
give yiou the go ahead."
→ Zones 2–12, orphan/cold-test passes, trip pack, art, faith pack, ship
wiring — all autonomous, checker after every zone, research-grounded.
**NO PUSH / NO DEPLOY until Ruan's explicit go-ahead.** Commit locally
per stage.

Ruan's 13th language (named Aug 15 2026, right after Xhosa shipped).
Working rules identical to the Xhosa build (XHOSA.md): build in stages,
checker after every zone, commit per stage, browser smoke every few zones,
**NOT in LANG_CATALOG until the ship stage**, and **NO deploy without an
explicit instruction from Ruan for this course**.

## Audio — the gate PASSES (unlike Xhosa)

- edge-tts has real voices: **am-ET-AmehaNeural (male, chosen — house
  default is male)**, am-ET-MekdesNeural (female). Normal pipeline:
  `extract_audio_strings.js am` → `generate_audio.py --lang am` →
  `audio-am/`. No Simba-style workaround, no ASR loop needed.
- Smoke-tested Aug 15: sentences render cleanly; a bare fidel letter (ሀ)
  produces 1.78s of speech — edge-tts speaks Ethiopic letters, so the
  alphabet can play letter audio directly. **Per-letter verification with
  the trimmed speech-length method still required during the alphabet
  build** (the si ඞ / mn Щ lesson: some glyphs silently skip).

## Language & register decisions

- **Contemporary spoken Addis Amharic.** SOV, postpositions, definite
  suffix. Audience: everyday conversation, not liturgical Ge'ez register.
- **Gender is unavoidable grammar**: 2nd person m/f (neh/nesh) from the
  first greeting on — teach BOTH forms side by side; that is what people
  actually say (register rule).
- **Politeness**: the V-form እርስዎ (erswo) + 3pl-style verbs for elders is
  real daily usage — teach as recognition + simple production with elders
  (mirrors hajur/aap treatment). እባክህ/እባክሽ (please, gendered) IS used in
  real speech (unlike ne कृपया) — verify sources at build time, then teach
  for production if confirmed.
- **Ethiopian time is mandatory content** (Zone 4): the day counts from
  sunrise — 1 o'clock = 7:00 Western. The single biggest practical trap
  for any visitor and a superb culture hook. The 13-month calendar gets a
  note (recognition only).
- **Rom scheme** (goes at top of lang/am.js): lowercase ASCII syllable
  respelling, ne-style plain words ("selam", "dehna neh"). NO apostrophes
  (banned char in eg/vocab slots) → ejectives written plainly (t, ch, p,
  ts) and EXPLAINED in Zone 1 notes; ቀ-series = q (standard Ethiopianist
  practice, keeps qey/qen distinct); ə → e; gemination written doubled
  (hulett). Fidel never appears in rom slots (script regex scan).

## Script strategy (the fidel is 231+ glyphs — do not drown learners)

- Zone 1 teaches the SYSTEM: consonant row × 7 vowel orders, demonstrated
  on 2-3 high-frequency rows (ለ, መ, ሰ), ejectives, then instant payoff
  words (selam ሰላም from taught letters).
- In-app alphabet arrays: `AM_VOWELS` = the 7 orders on the አ series
  (አ ኡ ኢ ኣ ኤ እ ኦ, glossed by order name + sound); `AM_CONS` = the 33 base
  (1st-order) consonants; `AM_NUMS` = number words in fidel (አንድ … አስር).
  Letters play edge-tts audio (verify each; SPEAK_AS-style names via
  generate_audio.py if any glyph is skipped).
- Course exercises stay tap-based; fidel reading is trained through
  recognition, never typing (house rule: no native typing where Roman
  suffices).

## Research base (rule 2 — how Amharic is actually TAUGHT)

Sequencing cross-checked against: FSI Basic Amharic (the classic 50-unit
sequence: greetings → classroom/family → numbers/time → food → town),
Peace Corps Ethiopia Amharic manuals (survival-first: greetings with
gender, food/buna, market, transport, health — strongly culture-forward),
Colloquial Amharic (Appleyard; fidel-gradual, verb system staged late).
Common thread: greetings + gendered address first, Ethiopian time early,
buna/injera culture as the vocabulary spine, verb tenses late. Vocabulary
verified per-word against Wiktionary/Omniglot/phrasebooks at authoring
time; unresolved calls flagged in lesson notes, never guessed.

## The 12 zones

1. **The sounds & the fidel** (s1-s7): 7-order system on ለ/መ/ሰ rows,
   ejectives (t/ch/p/ts/q), ejective-vs-plain listening, ə order,
   gemination, first words from taught letters (selam, ameseginalehu
   intro), the this-alphabet-is-a-syllabary payoff.
2. **Greetings & people** (g1-g7): selam; dehna neh/nesh + dehna negn;
   tena yistilign (formal register note); names (simih/simish man new?,
   sime … new); awo/aydelem; where-from (kewedet neh/nesh?); man = who;
   sew/sewoch people pair (first plural).
3. **Family & respect** (f1-f7): abbat/ennat/wendim/ehit/ayat; erswo
   V-form; gender endings recap; whose-family possessives (-e/-ih/-ish);
   this-is-my (yihe … new); respect culture note (elders, coffee first).
4. **Numbers, days & Ethiopian time** (n1-n7): and…asser; days
   (segno…ehud, ehud=Sunday/church culture); **the Ethiopian clock**
   (seat counting from sunrise, 1=7:00) + practice; today/tomorrow/
   yesterday (zare/nege/tilantina); the 13-month calendar note.
5. **Food & drink** (d1-d7): injera/wet/dabo/buna/shai; bela/teta
   (eat/drink imperatives + I-forms ebelalehu…); the buna ceremony
   (three rounds: abol/tona/bereka — note); gursha note; tefach
   (delicious); rahab/temeta (hungry/thirsty); ebakih/ebakish requests.
6. **Around the home** (h1-h7): bet, rooms (kifil, matbeja bet kitchen),
   objects (wenber chair, terepeza table, alga bed), buna items, home
   verbs (adersalehu…), locative postpositions (bet wist = in the house).
7. **Getting around** (t1-t7): Addis transport — minibus taxi + weyala
   (conductor) culture, bajaj; wedet? (where to); hid/na (go/come m/f);
   mehed/memtat; near/far (qerb/ruq); Bole, Merkato as places; asking
   the way (menged = road, yet new? where is).
8. **Shopping & money** (m1-m7): birr; sint new? (how much); the gebeya
   (Merkato = Africa's largest market note); wedd/rekash (expensive/
   cheap); bargaining IS expected at gebeya (vs fixed suq prices);
   qenes (reduce!); alle/yellem (there-is/there-isn't — the counter
   pair); demonstratives (yihe/ya).
9. **Work & school** (w1-w7): sera (work); temari/astemari (student/
   teacher); tmhrt bet (school); eserallehu (I work); plural -och
   consolidation (temariwoch); where-do-you-work; the everyday register.
10. **Body & health** (b1-b7): body parts (ras/ej/egr/ayn/joro); amognal
    (it hurts / I am sick — check exact colloquial form at build);
    hakim/hakim bet (doctor/clinic); medhanit (medicine); imperatives
    (na/tequemet sit); yishalegnal (I feel better).
11. **Past & future** (p1-p7): perfective past (hedku I went, serahu I
    worked); future/imperfective (ehedalehu I will go); bendera questions;
    weather (zinab rain, bird cold, muqet heat); tilantina/nege anchors.
12. **Conversation & community** (c1-c7): feelings (des bilognal I am
    happy, dekmognal tired); invitations (ena ble? / buna tetu — come
    drink coffee, THE invitation); ameseginalehu (thank you) deep vs
    egziabher yistilign (may-God-give-for-you thanks — real daily
    Amharic, fine in the secular course as a fixed phrase, note explains);
    learner toolkit (algebagnem I do not understand, qes bel speak
    slowly); melkam guzo / dehna hun farewells; course wrap.

Checkpoint-review orphan pass + cold-test measurement after Zone 12
(same method and traps as XHOSA.md — validate the orphan measurement
against a pre-fix pack from git before believing it).

## Trip pack (contextualized — ask what matters MORE in Ethiopia)

Ethiopian time disambiguation lines ("be habesha akotater" = in Ethiopian
time), buna ceremony etiquette (three rounds, don't leave before bereka),
gursha (being hand-fed is honor — accept), minibus/weyala phrases +
"weraj alle" (getting off!), gebeya bargaining, injera-by-hand (right
hand only), fasting-days awareness note (Wed/Fri vegan menus — cultural,
factual), Amharic-first delight ("amaregna tichilalleh?").

## Faith pack

Ethiopia is majority-Christian (Orthodox Tewahedo since the 4th century —
among the OLDEST Christian nations; also large Protestant/P'ent'ay
community). The newcreation localization says MANY follow Jesus (like xh,
honest numbers) — and the ends-of-the-earth beat can note the Ethiopian
eunuch of Acts 8 carried the message home in the very first generation
(it is IN Acts — perfect localization hook, verify wording at build).
Register: contemporary Amharic — reference the አዲሱ መደበኛ ትርጉም (New
Amharic Standard Version) register, NEVER Ge'ez liturgical forms. Terms:
እግዚአብሔር (Egziabher, God — universal), ኢየሱስ ክርስቶስ (Iyesus Kristos),
መንፈስ ቅዱስ (Menfes Qidus, Holy Spirit). Same 255-string recipe as xh
(builder asserts vs faith/uz.js skeleton; 4 localized country strings).

## Ship checklist (from CLAUDE.md rule 10)

lang/am.js pack + LANG_CATALOG + LANG_FLAGS (Ethiopian flag: green/
yellow/red bands + blue disc with yellow star) + audio-am/ +
**Noto Sans Ethiopic in index.html font stacks (unicode-range)** +
gen_landing maps (SCRIPT_FONT + SCRIPT_NAME 'Ethiopic (fidel) script' —
NOT Latin: amharic-alphabet.html SHIPS) + learn-amharic + amharic-phrases
+ og-amharic.png (browser recipe) + JSON-LD teaches + Course + keywords +
faith resources (bible.com/languages/amh + JESUS Film Amharic — curl-
verify) + extractor/generator taught `am`. LTR script — no RTL work.
Art: secular Ethiopian scenery — Simien-style highlands, gojo/tukul
huts, coffee plants, gelada?/walia ibex? (animals fine), NO churches
(rock-hewn Lalibela is OFF-LIMITS — religious building). Mascot idea:
gelada monkey or walia ibex (national animal).

## Build stages

- [x] Gate check + voice smoke test (Aug 15).
- [x] Skeleton pack + wiring + Zone 1 (s1-s7, 35 lessons, 87 clips; every
      letter clip speech-verified; እ speaks እህ via am SPEAK_AS).
- [x] Zone 2 (Greetings and people, g1-g7) COMPLETE (70 lessons, 420 ex,
      127 clips): dehna neh/nesh/negn + igziabher yimesgen formula
      (taught as fixed phrase, factual note), simih/simish man new +
      sime ... new, time-of-day system (endemin aderk/adersh/walk +
      dehna ider/ideri), erswo + dehna newot + tena yistilign + ato/
      weyzero (+two-hand handshake note), keyet neh/nesh + ke-X negn
      + ityoppya/addis abeba, sew/sewoch FIRST -och plural + gwadegna/
      wend/set, ameseginalehu + dehna hun/hugni + chaw. All grounded
      in the Peace Corps manual (units 2-4; scratchpad/
      pc_amharic_ref.txt holds the extracted source pages). Checker
      caught 1 (non-ASCII ellipsis in a rom), fixed.
- [x] Zone 3 (Family and respect) COMPLETE: abbat/ennat/wendim/ihit,
      betesab/lij/lijoch/ayat, owner endings -e/-ih/-ish/-u/-wa/-wo
      (tied to sime), yih + issu/isswa, gash/weyzerit, man new? +
      gwadegnaye (-ye after vowels).
- [x] Zone 4 (Numbers, days, Ethiopian clock) COMPLETE: 1-10, weekdays
      (maksanyo etymology), weekend + zare/nege/tinant, sint se-at
      new? + yikirta, THE SUNRISE CLOCK (habesha/ferenj, tewat/mata,
      conversions), samint/wer/amet + 13-month note.
- [x] Zone 5 (Food and drink) COMPLETE: injera/wet/dabo/wiha, buna
      ceremony (abol/tona/bereka), rabegn/temagn + ibakih/ibakish,
      ibelalehu/itettalehu + bila/biyi, doro/misir wet + siga/atkilt,
      tafach new + betam + bekagn, inibla/gursha/tsom.
- [x] Zone 6 (Around the home) COMPLETE: bet compounds (madbet,
      megnita bet, shint bet), gibi, furniture + mebrat, yet new? +
      izih/iziya + ALLE/YELLEM, kitchen tools + jebena, -alehu home
      verbs, wist postposition + bet negn. ALSO: purged 6 mixed-script
      mc options that were getting recorded as clips; check_am.py now
      guards against mixed-script correct options.
- [x] Zone 7 (Getting around) COMPLETE (245 lessons, 1467 ex, 320
      clips): town places, ihedalehu/imetalehu + na/ney, wedet + wede
      (before-noun vs wist after-noun), taksi/weyala/weraj alle!/
      bajaj, kirb/ruk, tefahu/irdagn/mengedu (-u = the), inihid/qes
      bel/qoy.
- [x] Zones 8-12 COMPLETE — **COURSE COMPLETE: 420 lessons / 2688
      exercises (incl. 175 review mcs) / 499 clips.** Z8 shopping
      (birr, sint recycle, qenes bargaining, yistugn, haya/hamsa/
      meto), Z9 work/school (temari root, amarigna imaralehu,
      loanword district, ke...iske, min), Z10 body/health (amemegn
      -egn family, hakim bet, chigir yellem), Z11 past/future (-ku
      past, neber, ONE-FORM future + time words, kiremt weather),
      Z12 conversation (des bilognal, welcome arc, algebagnem/gebagn/
      digem, iwedalehu + al-...-m negative, ina/gin/weyim, sefer,
      melkam guzo + berta).
- [x] Post-course passes COMPLETE: cold-test found 3 real issues (the
      match-LHS-notation bug class in c4_4, two arrow-chain options
      that would be spoken) — all fixed, 4 orphan clips pruned, 503→
      499 strings. Orphan pass: 175 reachable orphans → 0 via review
      mcs on checkpoints ≥2 zones later (max load 9 of cap 15;
      letters excluded per the alphabet-separation rule; 38 z11-12
      words left to SM-2 by design). Audio-neutral, --check MATCHES.
      NOTE: check_am.py (scratchpad) now also guards MIXED-SCRIPT
      correct options — that guard caught 8 real recording bugs
      across zones 7-12.
- [x] Orphan review pass + cold-test (see Post-course passes above).
- [x] Trip pack COMPLETE (39ac81c8): 12 sections / 90 lines / 4 frames,
  98% clip reuse (10 new; 509 total). Spines shipped: two-clocks section,
  gendered address, welcome-command culture (giba/bila), buna three
  rounds + gursha, weyala + weraj alle!, gebeya-vs-suk, right-hand
  injera + fasting menus, amarigna imaralehu.
- [x] Art COMPLETE (d6bb3ce7): Simien amba far layer, teff-gold mid,
  highland-green near with gojo huts (--thatch/--wall) + coffee bushes
  (--cherry) + one acacia; gelada mascot (golden mane). Light + dark
  palettes verified in-browser. NO churches by design.
- [x] Faith pack COMPLETE (cf820a17): 255 strings, NASV plainness,
  EN drift vs uz = exactly the 4 Ethiopia strings (Acts 8 eunuch in the
  ends beats; MANY follow Jesus). roms = am_translit.py mechanical
  fidel->ASCII (6th-order vowel dropped word-finally). audio-amf/ via
  generate_audio.py --lang amf (entry added; 0 hash collisions vs
  course manifest). Browser-verified: flib arc, fjesus reader.
- [x] Ship wiring COMPLETE (71d01eb4): catalogs (am FIRST, alphabetical),
  Ethiopian flag, Noto Sans Ethiopic (fonts URL + 22 stacks + bare-fidel
  note rule), FAITH_RESOURCES (both URLs curl-200), JSON-LD Course,
  keywords, footer, gen_landing maps (Ethiopic fidel script — alphabet
  page ships), 37 indexable URLs, og-amharic.png. COMMIT ONLY.
- [ ] Deploy ONLY on Ruan's word — NOT YET GIVEN. Full sequence:
  gen_landing (done) -> validate -> ff-merge main -> push -> indexnow.

## Measurement traps specific to am

- Fidel letters in the alphabet MUST be speech-length verified one by one
  (trimmed-duration method) — assume nothing from the ሀ sample.
- The script regex for rom scanning: Ethiopic block U+1200–137F (+ suppl).
- Gemination is phonemic but unwritten in fidel — roms must carry it
  (hulett) even though the native shows ሁለት; do not "fix" the mismatch.
- Ethiopian-time numbers: never gloss ("1 o'clock") without the Western
  equivalent in the gloss — cold confusion otherwise.
