/* ===== SINHALA LANGUAGE PACK (Zone 1 · The Script — Stage A of 12 zones) =====
   Romanization scheme (ASCII only, enforced — no Sinhala script in rom fields):
   - DENTAL (soft, tongue-on-teeth) t/d are written th/dh: ත tha, ද dha — the
     everyday Sri Lankan convention (බත් "bath", ස්තූතියි "sthuuthiyi").
     th is NEVER the th of English "thin" (Sinhala has no such sound).
   - RETROFLEX (hard, tongue-curled-back) t/d are plain t/d: ට ta, ඩ da.
   - Aspirated Sanskrit/Pali twins (ඛ ඝ ඡ ඨ ඪ ථ ධ ඵ භ) sound the same as the
     plain letters in speech and share their romanization (cf. Burmese pack).
   - Half-nasal (prenasalized) letters — one beat: ඟ nga, ඬ nda, ඳ ndha, ඹ mba.
   - ව = w (wathura), ච = ch, ජ = j, ශ/ෂ = sh, ඤ = nya, ං = ng.
   - Vowels: a aa · ae aee (ඇ ඈ — the a of "cat", short & long) · i ii · u uu ·
     e ee · o oo. DOUBLING = HELD LONGER: ee is the ay of "say", oo the o of
     "go" (never English ee/oo; the u of "moon" is uu).
   - Spoken Sinhala relaxes many unstressed a's toward "uh" (kohomadha) — not
     marked; the recorded audio carries it.
   This course teaches SPOKEN (colloquial) Sinhala. Sinhala is strongly
   diglossic: the literary language (news, print) conjugates verbs and differs
   in grammar; the spoken language does NOT conjugate for person/number — one
   verb form for everyone. Literary forms appear only as flagged recognition
   notes. Researched against Wikipedia "Sinhala language", Wikivoyage Sinhala
   phrasebook, Omniglot, r12a Sinhala orthography notes.

   ROADMAP (Sinhala-driven; 12 zones x 7 topics x 5 = 420 lessons when done):
   Z1 The Script — round letters (palm-leaf story), soft-vs-hard t/d, the
      half-nasals, vowel signs incl. ැ + hal kirima ්, first words. [SHIPPED]
   Z2 Foundations — greetings & kohomadha, pronouns mama/oyaa/eyaa/api (+ the
      no-conjugation freebie), numbers 1-100, courtesy, introductions
      (magee nama...), time words adha/heta/iiyee.
   Z3 Say a sentence — SOV + the -nawaa verb (one form for all!), 4-way
      this/that meeka/ooka/araka/eeka, negation naehae + -nne, yes/no dha +
      ov/naee, wh-words mokakdha/kaudha/koheedha, want-need mata oonae (dative
      subject — Sinhala's signature pattern).
   Z4 Cases & places — case endings -ta/-gee/-en + ekka, place words langa/
      uda/yata/aethulee, towns & places, food, the kadee (tea shop).
   Z5 How many — rupees & prices kiiyadha, big numbers, shopping & bargaining,
      clock time, days of the week, how-many questions.
   Z6 Describe it — adjectives, colors, comparisons wadaa, feelings, weather &
      the two monsoons, body & health (mata amaarui).
   Z7 Then & now — the vowel-change past (kanawaa->kaeaewa family), perfect
      -laa, can mata puluwan, must oonae round 2, ever/never, requests &
      the -nna polite imperative (enna! dhenna!).
   Z8 Out & about — bus/train/three-wheeler + yanawaa/enawaa, directions,
      tickets, hotel, months & dates, phone.
   Z9 Say more — but/because eth/nisaa, if nam, think hithanawaa, jobs,
      hobbies, home routine, help & safety.
   Z10 Your Sinhala life — family, age & small talk, not-yet thaama, language
      talk (sinhala puluwandha?), telling your day.
   Z11 Little extras — need round 2, pace hemin/ikmanata, clothes (the
      sarama), animals, nature kandhu/muhudha, remember/forget mata mathakai.
   Z12 Make Sri Lanka home — lakhs, errands, guests & visiting, fruit (incl.
      thaembili king coconut), polite polish & formal oba as recognition.

   Art: secular Sri Lanka — tea-country hills, south-coast beach, stilt
   fishermen, coconut palms. Mascot: leopard cub. */

/* --- hero: tea hills far right, calm ocean sky over the title zone --- */
const SI_HERO='<circle class="orb-glow" cx="930" cy="118" r="76"/><circle class="orb" cx="930" cy="118" r="46"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="120" cy="58" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="240" cy="104" r="1.2"/><circle cx="360" cy="46" r="2"/><circle cx="470" cy="122" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="600" cy="60" r="1.3"/><circle cx="700" cy="112" r="1.5" class="tw" style="animation-delay:2s"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="74" rx="28" ry="11"/><ellipse cx="78" cy="69" rx="22" ry="13"/><ellipse cx="26" cy="72" rx="20" ry="10"/></g>'
/* gulls over the water (fine detail, hidden on phones) */
+'<g class="art-detail" fill="none" stroke="var(--mtn-mid)" stroke-width="1.8" stroke-linecap="round" opacity=".5" aria-hidden="true"><path d="M170 100 q6 -5 12 0 q6 -5 12 0"/><path d="M240 116 q5 -4.5 10 0 q5 -4.5 10 0"/></g>'
/* far: rolling tea-country hills, rising only right of the title zone */
+'<path class="far" d="M0 244 Q120 236 240 240 Q360 234 480 240 Q600 234 720 238 Q780 210 850 226 Q910 190 980 216 Q1040 178 1110 208 Q1160 190 1200 200 L1200 320 L0 320 Z"/>'
/* mid: coast line with a stilt-fisherman row & a leaning palm on the right */
+'<path class="mid" d="M0 320 L0 286 Q300 274 600 282 Q900 290 1200 278 L1200 320 Z '
/* stilt fishermen: three poles with tiny cross-seats */
+'M812 284 L812 236 L818 236 L818 284 Z M818 244 L836 244 L836 249 L818 249 Z M830 244 L830 236 L834 236 L834 244 Z '
+'M862 286 L862 232 L868 232 L868 286 Z M868 240 L886 240 L886 245 L868 245 Z M880 240 L880 232 L884 232 L884 240 Z '
+'M912 284 L912 238 L918 238 L918 284 Z M918 246 L936 246 L936 251 L918 251 Z M930 246 L930 238 L934 238 L934 246 Z '
/* palm trunk */
+'M1012 280 C1016 246 1013 214 1018 186 L1023 187 C1019 216 1023 248 1020 282 Z '
/* palm fronds */
+'M1020 184 C1002 172 982 169 966 175 C984 174 1003 179 1018 188 Z M1020 184 C1036 170 1056 166 1073 172 C1056 173 1037 179 1022 188 Z M1020 184 C1012 166 999 156 982 154 C999 162 1010 172 1018 186 Z M1020 184 C1028 166 1041 156 1058 154 C1041 162 1030 172 1022 186 Z '
+'M1016 190 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M1024 190 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 Z'
/* soft wave lines under the title (calm texture) */
+'<path class="snow" opacity=".22" d="M70 256 Q220 250 370 254 L368 260 Q220 254 74 262 Z"/>'
+'<path class="snow" opacity=".22" d="M150 268 Q300 260 430 266 L428 272 Q300 264 154 274 Z"/>'
/* near: beach & surf band, a second palm far right */
+'<g class="near"><path d="M0 298 Q160 264 320 292 Q480 316 640 286 Q800 258 960 294 Q1080 312 1200 290 L1200 320 L0 320 Z"/>'
+'<path d="M1108 300 C1112 264 1109 232 1114 202 L1120 204 C1115 234 1120 266 1116 302 Z"/>'
+'<path d="M1117 200 C1097 187 1075 184 1057 191 C1077 189 1098 194 1115 204 Z"/><path d="M1117 200 C1134 185 1156 181 1174 188 C1156 188 1136 194 1119 204 Z"/><path d="M1117 200 C1108 181 1093 170 1074 168 C1093 176 1106 187 1114 202 Z"/><path d="M1117 200 C1126 181 1141 170 1160 168 C1141 176 1128 187 1120 202 Z"/>'
+'<circle cx="1112" cy="205" r="3"/><circle cx="1123" cy="205" r="3"/><circle cx="1117" cy="210" r="3"/>'
+'</g>';

/* --- band: calm left, tea hill + palm right --- */
const SI_BAND='<circle class="orb-glow" cx="1046" cy="88" r="36"/><circle class="orb" cx="1046" cy="88" r="21"/>'
+'<path class="far" d="M0 150 Q100 144 200 148 Q300 142 400 146 Q500 142 600 146 Q700 142 770 146 Q830 124 890 138 Q950 118 1010 134 Q1070 116 1130 132 Q1170 124 1200 130 L1200 200 L0 200 Z"/>'
+'<path class="mid" d="M0 200 L0 176 Q300 166 600 174 Q900 182 1200 170 L1200 200 Z"/>'
/* stilt fisherman + palm (fine detail) */
+'<g class="mid art-detail"><path d="M836 176 L836 140 L841 140 L841 176 Z M841 146 L856 146 L856 151 L841 151 Z M851 146 L851 140 L855 140 L855 146 Z"/></g>'
+'<g class="near"><path d="M0 186 Q300 160 600 178 Q900 196 1200 174 L1200 200 L0 200 Z"/>'
+'<path d="M964 188 C968 162 966 142 970 124 L975 126 C972 144 976 166 974 190 Z"/>'
+'<path d="M972 122 C956 112 940 110 926 116 C942 114 958 118 970 126 Z"/><path d="M972 122 C986 108 1002 104 1016 110 C1002 110 986 116 974 126 Z"/><path d="M972 122 C964 104 952 96 938 94 C952 102 962 110 970 124 Z"/><path d="M972 122 C980 104 992 96 1006 94 C992 102 982 110 974 124 Z"/>'
+'</g>';

/* --- mascot: leopard cub (moods: happy / cheer / oops) --- */
function SI_MASCOT(m){
  var base='<ellipse cx="32" cy="44" rx="17" ry="13" fill="#E8B54C"/>' /* body */
  +'<circle cx="14" cy="22" r="7" fill="#E8B54C"/><circle cx="50" cy="22" r="7" fill="#E8B54C"/>' /* ears */
  +'<circle cx="14" cy="22" r="3.4" fill="#8A5B22"/><circle cx="50" cy="22" r="3.4" fill="#8A5B22"/>'
  +'<circle cx="32" cy="30" r="17" fill="#F0C25E"/>' /* head */
  +'<ellipse cx="32" cy="38" rx="8" ry="6" fill="#FBE8BC"/>' /* muzzle */
  /* rosette spots */
  +'<circle cx="20" cy="24" r="1.7" fill="#8A5B22"/><circle cx="44" cy="24" r="1.7" fill="#8A5B22"/><circle cx="26" cy="18" r="1.4" fill="#8A5B22"/><circle cx="38" cy="18" r="1.4" fill="#8A5B22"/><circle cx="18" cy="46" r="1.7" fill="#8A5B22"/><circle cx="46" cy="46" r="1.7" fill="#8A5B22"/><circle cx="27" cy="50" r="1.4" fill="#8A5B22"/><circle cx="37" cy="50" r="1.4" fill="#8A5B22"/>'
  +'<ellipse cx="32" cy="35.6" rx="2.4" ry="1.8" fill="#7A4A18"/>'; /* nose */
  var f;
  if(m==='cheer')f='<path d="M22 28 Q25 24.5 28 28" fill="none" stroke="#4a3312" stroke-width="2.2" stroke-linecap="round"/><path d="M36 28 Q39 24.5 42 28" fill="none" stroke="#4a3312" stroke-width="2.2" stroke-linecap="round"/><path d="M27 40.5 Q32 45.5 37 40.5" fill="none" stroke="#4a3312" stroke-width="2.2" stroke-linecap="round"/>';
  else if(m==='oops')f='<path d="M21.5 26 Q25 24.8 28.5 26" fill="none" stroke="#4a3312" stroke-width="1.6" stroke-linecap="round"/><path d="M35.5 26 Q39 24.8 42.5 26" fill="none" stroke="#4a3312" stroke-width="1.6" stroke-linecap="round"/><circle cx="25" cy="29" r="2" fill="#4a3312"/><circle cx="39" cy="29" r="2" fill="#4a3312"/><ellipse cx="32" cy="42" rx="2.4" ry="3" fill="#4a3312"/>';
  else f='<circle cx="25" cy="28.5" r="2.5" fill="#4a3312"/><circle cx="39" cy="28.5" r="2.5" fill="#4a3312"/><circle cx="25.8" cy="27.7" r="0.7" fill="#fff"/><circle cx="39.8" cy="27.7" r="0.7" fill="#fff"/><path d="M28 40.5 Q32 43.5 36 40.5" fill="none" stroke="#4a3312" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+base+f+'</svg>';}

const SI_UNITS=[
  {n:1,t:'The Script',d:'සිංහල අකුරු — read & sound out Sinhala',lessons:['si_c1','si_c1_2','si_c1_3','si_c1_4','si_c1_5','si_c2','si_c2_2','si_c2_3','si_c2_4','si_c2_5','si_c3','si_c3_2','si_c3_3','si_c3_4','si_c3_5','si_c4','si_c4_2','si_c4_3','si_c4_4','si_c4_5','si_c5','si_c5_2','si_c5_3','si_c5_4','si_c5_5','si_v1','si_v1_2','si_v1_3','si_v1_4','si_v1_5','si_v2','si_v2_2','si_v2_3','si_v2_4','si_v2_5']},
];

const SI_SYM={si_c1:'ක',si_c2:'ත',si_c3:'ප',si_c4:'ච',si_c5:'ඳ',si_v1:'කා',si_v2:'තේ'};

const SI_VOWELS=[['අ','a'],['ආ','aa'],['ඇ','ae'],['ඈ','aee'],['ඉ','i'],['ඊ','ii'],['උ','u'],['ඌ','uu'],['එ','e'],['ඒ','ee'],['ඔ','o'],['ඕ','oo']];
/* full mishra (mixed) alphabet for the reference grid. The aspirated
   Sanskrit/Pali twins (ඛ ඝ ඡ ඣ ඨ ඪ ථ ධ ඵ භ) plus ඞ ඤ ඦ ශ ෂ ළ are rare or
   sound identical to a common letter in speech — shown here, never drilled.
   Note: ඞ ඣ ඦ have no recorded clips — edge-tts returns no audio for them
   (like Burmese ဎ) — so they gracefully fall back to device TTS. */
const SI_CONS=[['ක','ka'],['ඛ','ka'],['ග','ga'],['ඝ','ga'],['ඞ','nga'],['ඟ','nga'],['ච','cha'],['ඡ','cha'],['ජ','ja'],['ඣ','ja'],['ඤ','nya'],['ඦ','nja'],['ට','ta'],['ඨ','ta'],['ඩ','da'],['ඪ','da'],['ණ','na'],['ඬ','nda'],['ත','tha'],['ථ','tha'],['ද','dha'],['ධ','dha'],['න','na'],['ඳ','ndha'],['ප','pa'],['ඵ','pa'],['බ','ba'],['භ','ba'],['ම','ma'],['ඹ','mba'],['ය','ya'],['ර','ra'],['ල','la'],['ව','wa'],['ශ','sha'],['ෂ','sha'],['ස','sa'],['හ','ha'],['ළ','la'],['ෆ','fa']];
/* modern Sinhala writes numbers with Western digits — the grid teaches the
   spoken number words instead */
const SI_NUMS=[['බිංදුව','bindhuwa (0)'],['එක','eka (1)'],['දෙක','dheka (2)'],['තුන','thuna (3)'],['හතර','hathara (4)'],['පහ','paha (5)'],['හය','haya (6)'],['හත','hatha (7)'],['අට','ata (8)'],['නවය','nawaya (9)']];
const SI_SRS_SEED=[['ආයුබෝවන්','Aayuboowan','Hello'],['ස්තූතියි','Sthuuthiyi','Thank you'],['ඔව්','Ov','Yes'],['නෑ','Naee','No'],['වතුර','Wathura','Water'],['බත්','Bath','Rice / a meal'],['තේ','Thee','Tea'],['හොඳයි','Hondhayi','Good'],['මම','Mama','I'],['ඔයා','Oyaa','You'],['ලොකු','Loku','Big'],['පොඩි','Podi','Small'],['අද','Adha','Today'],['අඹ','Amba','Mango'],['කොහොමද','Kohomadha','How? / How are you?']];

const SI_LESSONS=[
/* ===================== ZONE 1 · THE SCRIPT ===================== */
/* --- Topic 1: ක ග න ම --- */
{id:'si_c1',title:'First letters',step:'learn',meta:'ක ග න ම & how Sinhala works',vocab:[['ක','ka','consonant: k'],['ග','ga','consonant: g'],['න','na','consonant: n'],['ම','ma','consonant: m']],ex:[
{t:'note',tag:'Start here',q:'Meet Sinhala script',body:'<p>Sinhala is written in beautifully <b>round</b> letters, left to right — round for a reason: for centuries they were scratched onto dried palm leaves, and straight lines would split the leaf along its veins.</p><p>Every consonant carries a built-in <b>"a"</b> sound, so the very first letter <span class="deva">ක</span> is already read <b>ka</b>. You will never type — just <b>listen and tap</b>.</p>',tip:'Tap the speaker on any letter to hear it.'},
{t:'note',tag:'Voice it',q:'ක and ග',body:'<p><span class="deva">ක</span> = <b>ka</b> — a plain k.</p><p><span class="deva">ග</span> = <b>ga</b> — the same spot in the mouth, but voiced, like the g in "go".</p>',eg:[['ක','ka','k as in sky'],['ග','ga','g as in go']]},
{t:'mc',q:'What sound does this letter make?',d:'ක',r:'ka',o:['ka','ga','na','ma'],a:0},
{t:'mc',q:'And this one?',d:'ග',r:'ga',o:['ga','ka','na','ma'],a:0},
{t:'note',tag:'Hum it',q:'න and ම',body:'<p><span class="deva">න</span> = <b>na</b>. <span class="deva">ම</span> = <b>ma</b>. Both hum through the nose.</p>',eg:[['න','na','n as in no'],['ම','ma','m as in me']]},
{t:'mc',q:'What sound does this letter make?',d:'න',r:'na',o:['na','ma','ka','ga'],a:0},
{t:'mc',q:'Which sound is this?',d:'ම',r:'ma',o:['ma','na','ga','ka'],a:0}]},
{id:'si_c1_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot ක ග න ම',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ක',o:['ක','ග','න','ම'],a:0},
{t:'li',q:'Listen — which letter?',say:'න',o:['න','ම','ක','ග'],a:0},
{t:'mc',q:'Which letter says ka?',o:['ක','ග','න','ම'],a:0},
{t:'mc',q:'Which letter says ma?',o:['ම','න','ග','ක'],a:0},
{t:'li',q:'Listen — which letter?',say:'ග',o:['ග','ක','න','ම'],a:0},
{t:'mc',q:'ග is the voiced twin of…',d:'ග',r:'ga',o:['ka','na','ma','sa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ම',o:['ම','න','ග','ක'],a:0}]},
{id:'si_c1_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ක','ka'],['ග','ga'],['න','na'],['ම','ma']]},
{t:'mc',q:'Which letter says ga?',o:['ග','ක','න','ම'],a:0},
{t:'mc',q:'Which letter says na?',o:['න','ම','ක','ග'],a:0},
{t:'li',q:'Listen — which letter?',say:'ග',o:['ග','ම','න','ක'],a:0},
{t:'mc',q:'Every Sinhala consonant has a built-in…',o:['"a" sound','tone mark','space after it','capital form'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ම','ma'],['න','na'],['ග','ga'],['ක','ka']]}]},
{id:'si_c1_4',title:'Mix it',step:'mix',meta:'All four letters together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ම',r:'ma',o:['ma','na','ka','ga'],a:0},
{t:'li',q:'Listen — which letter?',say:'ක',o:['ක','ග','න','ම'],a:0},
{t:'mc',q:'Which letter is the g sound?',o:['ග','ක','න','ම'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'න',r:'na',o:['na','ka','ma','ga'],a:0},
{t:'li',q:'Listen — which letter?',say:'ග',o:['ග','ක','ම','න'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ක','ka'],['ග','ga'],['ම','ma'],['න','na']]},
{t:'mc',q:'Sinhala letters are round because…',o:['they were written on palm leaves','ink was expensive','they copied English','printers demanded it'],a:0}]},
{id:'si_c1_5',title:'Checkpoint',step:'checkpoint',meta:'ක ග න ම mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ක',r:'ka',o:['ka','ga','na','ma'],a:0},
{t:'li',q:'Listen — which letter?',say:'ග',o:['ග','ක','න','ම'],a:0},
{t:'mc',q:'Which letter says ma?',o:['ම','න','ක','ග'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ග',r:'ga',o:['ga','ka','ma','na'],a:0},
{t:'li',q:'Listen — which letter?',say:'න',o:['න','ම','ක','ග'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ක','ka'],['ග','ga'],['න','na'],['ම','ma']]}]},

/* --- Topic 2: the two T families ත ද ට ඩ --- */
{id:'si_c2',title:'The two T families',step:'learn',meta:'ත ද ට ඩ — soft & hard',vocab:[['ත','tha','soft t — tongue on teeth'],['ද','dha','soft d — tongue on teeth'],['ට','ta','hard t — tongue curled back'],['ඩ','da','hard d — tongue curled back']],ex:[
{t:'note',tag:'Tongue on teeth',q:'ත and ද — the SOFT pair',body:'<p><span class="deva">ත</span> = <b>tha</b> — a soft t with the tongue touching the teeth. It is <b>not</b> the th of "thin" — just a gentle t. This is exactly how Sri Lankans write English too: rice is <span class="deva">බත්</span>, spelled <b>bath</b>.</p><p><span class="deva">ද</span> = <b>dha</b> — its voiced twin, a soft d.</p>',eg:[['ත','tha','soft t'],['ද','dha','soft d']]},
{t:'mc',q:'What sound does this letter make?',d:'ත',r:'tha',o:['tha','dha','ta','da'],a:0},
{t:'mc',q:'And this one?',d:'ද',r:'dha',o:['dha','tha','ta','da'],a:0},
{t:'note',tag:'Curl it back',q:'ට and ඩ — the HARD pair',body:'<p><span class="deva">ට</span> = <b>ta</b> — a hard, knocky t, tongue curled back to the roof of the mouth. <span class="deva">ඩ</span> = <b>da</b> — a hard d.</p><p>Sinhala keeps the soft and hard families strictly apart — they make different words. Let the audio train your ear: soft <span class="deva">ත</span> sounds gentle, hard <span class="deva">ට</span> knocks.</p>',eg:[['ට','ta','hard t'],['ඩ','da','hard d']]},
{t:'mc',q:'What sound does this letter make?',d:'ට',r:'ta',o:['ta','tha','da','dha'],a:0},
{t:'mc',q:'In this course, th and dh always mean…',o:['soft, tongue-on-teeth sounds','the th of thin','extra breath','silent letters'],a:0}]},
{id:'si_c2_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot ත ද ට ඩ',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ත',o:['ත','ද','ට','ඩ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඩ',o:['ඩ','ට','ත','ද'],a:0},
{t:'mc',q:'Which letter is the SOFT t?',o:['ත','ට','ඩ','ද'],a:0},
{t:'mc',q:'Which letter is the HARD d?',o:['ඩ','ද','ත','ට'],a:0},
{t:'li',q:'Listen — which letter?',say:'ද',o:['ද','ත','ඩ','ට'],a:0},
{t:'mc',q:'ට is…',d:'ට',r:'ta',o:['a hard t, tongue curled back','a soft t on the teeth','the th of thin','an s sound'],a:0},
{t:'li',q:'Listen — which letter?',say:'ට',o:['ට','ත','ද','ඩ'],a:0}]},
{id:'si_c2_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ත','tha'],['ද','dha'],['ට','ta'],['ඩ','da']]},
{t:'mc',q:'Which letter says dha (soft d)?',o:['ද','ඩ','ත','ට'],a:0},
{t:'mc',q:'Which letter says ta (hard t)?',o:['ට','ත','ද','ඩ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ද',o:['ද','ඩ','ට','ත'],a:0},
{t:'mc',q:'The soft pair ත ද is said with the tongue…',o:['touching the teeth','curled back','between the lips','not moving'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ඩ','da'],['ට','ta'],['ද','dha'],['ත','tha']]}]},
{id:'si_c2_4',title:'Mix it',step:'mix',meta:'Soft & hard together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ඩ',r:'da',o:['da','dha','ta','tha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ත',o:['ත','ට','ද','ඩ'],a:0},
{t:'mc',q:'Which is the soft d, tongue on teeth?',o:['ද','ඩ','ට','ත'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ත',r:'tha',o:['tha','ta','dha','da'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඩ',o:['ඩ','ද','ත','ට'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ත','tha'],['ට','ta'],['ඩ','da'],['ද','dha']]},
{t:'mc',q:'බත් (rice) is romanized bath because…',o:['ත is the soft tongue-on-teeth t','it sounds like English bath','ත is silent','b changes the t'],a:0}]},
{id:'si_c2_5',title:'Checkpoint',step:'checkpoint',meta:'ත ද ට ඩ mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ත',r:'tha',o:['tha','ta','dha','da'],a:0},
{t:'li',q:'Listen — which letter?',say:'ට',o:['ට','ත','ඩ','ද'],a:0},
{t:'mc',q:'Which letter is the hard d?',o:['ඩ','ද','ට','ත'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ද',r:'dha',o:['dha','da','tha','ta'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඩ',o:['ඩ','ට','ද','ත'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ත','tha'],['ද','dha'],['ට','ta'],['ඩ','da']]}]},

/* --- Topic 3: ප බ ස හ --- */
{id:'si_c3',title:'P, B, S & H',step:'learn',meta:'ප බ ස හ',vocab:[['ප','pa','consonant: p'],['බ','ba','consonant: b'],['ස','sa','consonant: s'],['හ','ha','consonant: h']],ex:[
{t:'note',tag:'Lips together',q:'ප and බ',body:'<p><span class="deva">ප</span> = <b>pa</b>, like the p in "spin".</p><p><span class="deva">බ</span> = <b>ba</b> — its voiced twin, the b of "boy". You already know it from <span class="deva">බත්</span> bath (rice).</p>',eg:[['ප','pa','p'],['බ','ba','b']]},
{t:'mc',q:'What sound does this letter make?',d:'ප',r:'pa',o:['pa','ba','sa','ha'],a:0},
{t:'mc',q:'And this one?',d:'බ',r:'ba',o:['ba','pa','sa','ha'],a:0},
{t:'note',tag:'Hiss & breathe',q:'ස and හ',body:'<p><span class="deva">ස</span> = <b>sa</b>, the s of "see" — it hisses.</p><p><span class="deva">හ</span> = <b>ha</b>, the h of "hat" — pure breath.</p>',eg:[['ස','sa','s as in see'],['හ','ha','h as in hat']]},
{t:'mc',q:'What sound does this letter make?',d:'ස',r:'sa',o:['sa','ha','pa','ba'],a:0},
{t:'mc',q:'Which sound is this?',d:'හ',r:'ha',o:['ha','sa','ba','pa'],a:0}]},
{id:'si_c3_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot ප බ ස හ',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ප',o:['ප','බ','ස','හ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ස',o:['ස','හ','ප','බ'],a:0},
{t:'mc',q:'Which letter says pa?',o:['ප','බ','ස','හ'],a:0},
{t:'mc',q:'Which letter says ha?',o:['හ','ස','බ','ප'],a:0},
{t:'li',q:'Listen — which letter?',say:'බ',o:['බ','ප','ස','හ'],a:0},
{t:'mc',q:'බ is the voiced twin of…',d:'බ',r:'ba',o:['pa','sa','ha','ma'],a:0},
{t:'li',q:'Listen — which letter?',say:'හ',o:['හ','ස','ප','බ'],a:0}]},
{id:'si_c3_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ප','pa'],['බ','ba'],['ස','sa'],['හ','ha']]},
{t:'mc',q:'Which letter says ba?',o:['බ','ප','ස','හ'],a:0},
{t:'mc',q:'Which letter says sa?',o:['ස','හ','ප','බ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ස',o:['ස','බ','හ','ප'],a:0},
{t:'mc',q:'ස hisses like the s in…',o:['see','sugar','was','vision'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['හ','ha'],['ස','sa'],['බ','ba'],['ප','pa']]}]},
{id:'si_c3_4',title:'Mix it',step:'mix',meta:'All four together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'හ',r:'ha',o:['ha','sa','pa','ba'],a:0},
{t:'li',q:'Listen — which letter?',say:'ප',o:['ප','බ','ස','හ'],a:0},
{t:'mc',q:'Which letter is the b sound?',o:['බ','ප','ස','හ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ස',r:'sa',o:['sa','ha','ba','pa'],a:0},
{t:'li',q:'Listen — which letter?',say:'බ',o:['බ','ප','හ','ස'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ප','pa'],['ස','sa'],['හ','ha'],['බ','ba']]}]},
{id:'si_c3_5',title:'Checkpoint',step:'checkpoint',meta:'ප බ ස හ mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ප',r:'pa',o:['pa','ba','sa','ha'],a:0},
{t:'li',q:'Listen — which letter?',say:'බ',o:['බ','ප','ස','හ'],a:0},
{t:'mc',q:'Which letter says sa?',o:['ස','හ','බ','ප'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'හ',r:'ha',o:['ha','pa','ba','sa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ස',o:['ස','හ','ප','බ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ප','pa'],['බ','ba'],['ස','sa'],['හ','ha']]}]},

/* --- Topic 4: ච ජ ය ර ල ව --- */
{id:'si_c4',title:'Ch, J & the gliders',step:'learn',meta:'ච ජ ය ර ල ව',vocab:[['ච','cha','consonant: ch'],['ජ','ja','consonant: j'],['ය','ya','consonant: y'],['ර','ra','consonant: r'],['ල','la','consonant: l'],['ව','wa','consonant: w']],ex:[
{t:'note',tag:'Ch & J',q:'ච and ජ',body:'<p><span class="deva">ච</span> = <b>cha</b>, the ch of "chat".</p><p><span class="deva">ජ</span> = <b>ja</b> — its voiced twin, the j of "jam".</p>',eg:[['ච','cha','ch as in chat'],['ජ','ja','j as in jam']]},
{t:'mc',q:'What sound does this letter make?',d:'ච',r:'cha',o:['cha','ja','ya','ra'],a:0},
{t:'mc',q:'And this one?',d:'ජ',r:'ja',o:['ja','cha','la','wa'],a:0},
{t:'note',tag:'Gliding letters',q:'ය ර ල ව',body:'<p><span class="deva">ය</span> = <b>ya</b>. <span class="deva">ර</span> = <b>ra</b> — lightly rolled. <span class="deva">ල</span> = <b>la</b>.</p><p><span class="deva">ව</span> = <b>wa</b> — between an English v and w, lips barely touching. You will meet it in <span class="deva">වතුර</span> <b>wathura</b> (water).</p>',eg:[['ය','ya','y'],['ර','ra','r (light roll)'],['ල','la','l'],['ව','wa','w']]},
{t:'mc',q:'What sound does this letter make?',d:'ර',r:'ra',o:['ra','la','ya','wa'],a:0},
{t:'mc',q:'Which sound is this?',d:'ව',r:'wa',o:['wa','ya','ra','la'],a:0}]},
{id:'si_c4_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot ච ජ ය ර ල ව',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ච',o:['ච','ජ','ය','ර'],a:0},
{t:'li',q:'Listen — which letter?',say:'ල',o:['ල','ර','ව','ය'],a:0},
{t:'mc',q:'Which letter says cha?',o:['ච','ජ','ය','ල'],a:0},
{t:'mc',q:'Which letter says wa?',o:['ව','ය','ර','ල'],a:0},
{t:'li',q:'Listen — which letter?',say:'ජ',o:['ජ','ච','ල','ව'],a:0},
{t:'mc',q:'ජ is the voiced twin of…',d:'ජ',r:'ja',o:['cha','ya','la','ra'],a:0},
{t:'li',q:'Listen — which letter?',say:'ය',o:['ය','ර','ල','ව'],a:0}]},
{id:'si_c4_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ච','cha'],['ජ','ja'],['ය','ya'],['ර','ra']]},
{t:'mc',q:'Which letter says ja?',o:['ජ','ච','ර','ය'],a:0},
{t:'mc',q:'Which letter says la?',o:['ල','ර','ව','ය'],a:0},
{t:'li',q:'Listen — which letter?',say:'ර',o:['ර','ල','ය','ව'],a:0},
{t:'mc',q:'ව is said with…',d:'ව',r:'wa',o:['lips barely touching','tongue curled back','a hiss','a hum'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ල','la'],['ව','wa'],['ර','ra'],['ය','ya']]}]},
{id:'si_c4_4',title:'Mix it',step:'mix',meta:'All six together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ල',r:'la',o:['la','ra','ya','wa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ව',o:['ව','ය','ල','ර'],a:0},
{t:'mc',q:'Which letter is the ch sound?',o:['ච','ජ','ය','ව'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ය',r:'ya',o:['ya','ra','la','wa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ච',o:['ච','ජ','ර','ල'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ජ','ja'],['ය','ya'],['ල','la'],['ව','wa']]},
{t:'mc',q:'The r in ර is…',o:['lightly rolled','silent','an English r','a growl'],a:0}]},
{id:'si_c4_5',title:'Checkpoint',step:'checkpoint',meta:'ච ජ ය ර ල ව mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ච',r:'cha',o:['cha','ja','la','ra'],a:0},
{t:'li',q:'Listen — which letter?',say:'ර',o:['ර','ල','ය','ව'],a:0},
{t:'mc',q:'Which letter says ya?',o:['ය','ර','ල','ව'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ව',r:'wa',o:['wa','la','ya','ra'],a:0},
{t:'li',q:'Listen — which letter?',say:'ජ',o:['ජ','ච','ය','ල'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ච','cha'],['ජ','ja'],['ර','ra'],['ව','wa']]}]},

/* --- Topic 5: the half-nasals ඟ ඬ ඳ ඹ --- */
{id:'si_c5',title:'Letters that hum',step:'learn',meta:'ඟ ඬ ඳ ඹ — Sinhala’s special trick',vocab:[['ඟ','nga','half-nasal: ng+g in one beat'],['ඬ','nda','half-nasal: n+hard d'],['ඳ','ndha','half-nasal: n+soft d'],['ඹ','mba','half-nasal: m+b'],['අඹ','amba','mango']],ex:[
{t:'note',tag:'One beat',q:'The half-nasal letters',body:'<p>Here is something almost no other script has: letters with a tiny <b>hum tucked inside</b>. <span class="deva">ඹ</span> = <b>mba</b> — an m melting straight into a b, said as <b>one quick beat</b>.</p><p>Your first real word: <span class="deva">අඹ</span> <b>amba</b> — mango!</p>',eg:[['ඹ','mba','m+b in one beat'],['අඹ','amba','mango']]},
{t:'mc',q:'What sound does this letter make?',d:'ඹ',r:'mba',o:['mba','ndha','nda','nga'],a:0},
{t:'mc',q:'What does අඹ mean?',d:'අඹ',r:'amba',o:['mango','water','rice','tea'],a:0},
{t:'note',tag:'The whole family',q:'ඟ ඬ ඳ',body:'<p><span class="deva">ඟ</span> = <b>nga</b>, like the middle of "finger" said fast. <span class="deva">ඬ</span> = <b>nda</b> (hard d). <span class="deva">ඳ</span> = <b>ndha</b> (soft d) — you will meet it in <span class="deva">හොඳ</span> <b>hondha</b> (good).</p><p>Related: the little circle <span class="deva">ං</span> adds an <b>ng</b> hum after a vowel — it is the "n" of <span class="deva">සිංහල</span> <b>Sinhala</b> itself.</p>',eg:[['ඟ','nga','ng+g'],['ඬ','nda','n+hard d'],['ඳ','ndha','n+soft d']]},
{t:'mc',q:'What sound does this letter make?',d:'ඳ',r:'ndha',o:['ndha','mba','nga','nda'],a:0},
{t:'mc',q:'A half-nasal letter is said as…',o:['one quick beat','two slow beats','a pause','a whisper'],a:0}]},
{id:'si_c5_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot ඟ ඬ ඳ ඹ',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ඹ',o:['ඹ','ඳ','ඬ','ඟ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඟ',o:['ඟ','ඬ','ඹ','ඳ'],a:0},
{t:'mc',q:'Which letter says mba?',o:['ඹ','ඟ','ඬ','ඳ'],a:0},
{t:'mc',q:'Which letter says nga?',o:['ඟ','ඹ','ඳ','ඬ'],a:0},
{t:'li',q:'Listen — which word?',say:'අඹ',o:['අඹ','ඹ','ඟ','ඳ'],a:0},
{t:'mc',q:'ඹ hides which two sounds in one beat?',d:'ඹ',r:'mba',o:['m and b','n and g','s and h','p and t'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඳ',o:['ඳ','ඬ','ඹ','ඟ'],a:0}]},
{id:'si_c5_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ඟ','nga'],['ඬ','nda'],['ඳ','ndha'],['ඹ','mba']]},
{t:'mc',q:'Which letter says ndha (with the soft d)?',o:['ඳ','ඬ','ඹ','ඟ'],a:0},
{t:'mc',q:'Which word means mango?',o:['අඹ','බත්','තේ','ම'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඬ',o:['ඬ','ඳ','ඟ','ඹ'],a:0},
{t:'mc',q:'The circle sign ං adds…',o:['an ng hum after a vowel','a long vowel','a pause','stress'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ඹ','mba'],['ඳ','ndha'],['ඬ','nda'],['ඟ','nga']]}]},
{id:'si_c5_4',title:'Mix it',step:'mix',meta:'All the hums together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ඟ',r:'nga',o:['nga','nda','mba','ndha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඹ',o:['ඹ','ඟ','ඳ','ඬ'],a:0},
{t:'mc',q:'Which letter hides m+b in one beat?',o:['ඹ','ඳ','ඟ','ඬ'],a:0},
{t:'mc',q:'What does this word say?',d:'අඹ',r:'amba',o:['amba','anda','anga','andha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඟ',o:['ඟ','ඬ','ඹ','ඳ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ඟ','nga'],['ඹ','mba'],['ඳ','ndha'],['ඬ','nda']]},
{t:'mc',q:'ඳ vs ඬ — the difference is…',o:['soft d vs hard d','loud vs quiet','long vs short','none at all'],a:0}]},
{id:'si_c5_5',title:'Checkpoint',step:'checkpoint',meta:'ඟ ඬ ඳ ඹ mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ඹ',r:'mba',o:['mba','nga','nda','ndha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඳ',o:['ඳ','ඬ','ඟ','ඹ'],a:0},
{t:'mc',q:'Which letter says nda (hard d)?',o:['ඬ','ඳ','ඹ','ඟ'],a:0},
{t:'mc',q:'What does අඹ mean?',d:'අඹ',r:'amba',o:['mango','good','hello','water'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඟ',o:['ඟ','ඹ','ඳ','ඬ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ඟ','nga'],['ඬ','nda'],['ඳ','ndha'],['ඹ','mba']]}]},

/* --- Topic 6: vowel signs & the vowel killer --- */
{id:'si_v1',title:'Adding vowels',step:'learn',meta:'කා කැ කි කු කෙ කො ක්',vocab:[['කා','kaa','k + long aa'],['කැ','kae','k + the a of cat'],['කි','ki','k + i'],['කු','ku','k + u'],['කෙ','ke','k + e'],['කො','ko','k + o'],['ක්','k','k alone — vowel killed']],ex:[
{t:'note',tag:'Change the vowel',q:'The built-in "a"',body:'<p>Every consonant already says "a": <span class="deva">ක</span> = <b>ka</b>. Add a <b>vowel sign</b> and that "a" changes: <span class="deva">කා</span> = <b>kaa</b> — held longer.</p><p>In this course a <b>doubled</b> vowel always means "hold it": <b>ee</b> is the ay of "say", <b>oo</b> the o of "go", <b>uu</b> the u of "moon".</p>',eg:[['ක','ka','built-in a'],['කා','kaa','long aa']]},
{t:'note',tag:'The Sri Lankan special',q:'කැ — the a of "cat"',body:'<p><span class="deva">කැ</span> = <b>kae</b> — the flat a of "cat". Sinhala is the <b>only</b> script in the region with its own sign for this everyday sound.</p><p>The others sit all around the letter: <span class="deva">කි</span> <b>ki</b>, <span class="deva">කු</span> <b>ku</b>, <span class="deva">කෙ</span> <b>ke</b>, <span class="deva">කො</span> <b>ko</b>. Always read the consonant first, then the vowel.</p>',eg:[['කැ','kae','a of cat'],['කි','ki','i'],['කු','ku','u'],['කෙ','ke','e'],['කො','ko','o']]},
{t:'mc',q:'What does this say?',d:'කා',r:'kaa',o:['kaa','ki','ku','ke'],a:0},
{t:'mc',q:'What does this say?',d:'කැ',r:'kae',o:['kae','kaa','ko','ke'],a:0},
{t:'note',tag:'The vowel killer',q:'ක් — hal kirima',body:'<p>The little hook <span class="deva">්</span> is the <b>hal kirima</b> — the vowel killer. It switches the built-in "a" OFF: <span class="deva">ක්</span> = just <b>k</b>.</p><p>That is how Sinhala words end in a bare consonant: <span class="deva">බත්</span> <b>bath</b> (rice) ends in a killed <span class="deva">ත්</span>.</p>',eg:[['ක','ka','a switched on'],['ක්','k','a killed']]},
{t:'mc',q:'What does this say?',d:'කු',r:'ku',o:['ku','ki','ko','ke'],a:0},
{t:'mc',q:'What does the hook in ක් do?',d:'ක්',r:'k',o:['kills the built-in a','doubles the k','adds an s','marks a question'],a:0}]},
{id:'si_v1_2',title:'Hear the vowel',step:'recognize',meta:'Spot the vowel on ක',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'කා',o:['කා','කි','කු','කෙ'],a:0},
{t:'li',q:'Listen — which one?',say:'කො',o:['කො','කා','කෙ','කු'],a:0},
{t:'mc',q:'Which is ku?',o:['කු','කා','කි','කෙ'],a:0},
{t:'li',q:'Listen — which one?',say:'කැ',o:['කැ','කා','කි','කො'],a:0},
{t:'mc',q:'Which is ki?',o:['කි','කු','කෙ','කා'],a:0},
{t:'li',q:'Listen — which one?',say:'කෙ',o:['කෙ','කො','කා','කු'],a:0},
{t:'mc',q:'You read the consonant first, then…',o:['add the vowel sign','ignore the sign','read right to left','double it'],a:0}]},
{id:'si_v1_3',title:'Pair them up',step:'build',meta:'Match syllable and sound',vocab:[],ex:[
{t:'match',q:'Match syllable and sound',pairs:[['කා','kaa'],['කැ','kae'],['කි','ki'],['කු','ku'],['කො','ko']]},
{t:'mc',q:'Which is kae (a of cat)?',o:['කැ','කා','කෙ','කො'],a:0},
{t:'li',q:'Listen — which one?',say:'කු',o:['කු','කා','කෙ','කො'],a:0},
{t:'mc',q:'Which is bare k, vowel killed?',o:['ක්','ක','කා','කු'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['කෙ','ke'],['කො','ko'],['ක්','k'],['කා','kaa']]},
{t:'mc',q:'A doubled vowel in our spelling means…',o:['hold the sound longer','say it twice','a new consonant','silence'],a:0}]},
{id:'si_v1_4',title:'Mix it',step:'mix',meta:'All the vowels together',vocab:[],ex:[
{t:'mc',q:'What does this say?',d:'කො',r:'ko',o:['ko','ke','kaa','ku'],a:0},
{t:'li',q:'Listen — which one?',say:'කි',o:['කි','කු','කෙ','කා'],a:0},
{t:'mc',q:'Which is kaa (long a)?',o:['කා','කු','කැ','කො'],a:0},
{t:'mc',q:'What does this say?',d:'කෙ',r:'ke',o:['ke','ki','ko','ku'],a:0},
{t:'li',q:'Listen — which one?',say:'කො',o:['කො','කා','කෙ','කු'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['කා','kaa'],['කු','ku'],['කො','ko'],['කැ','kae']]},
{t:'mc',q:'බත් ends in a bare t sound because of…',o:['the vowel killer ්','a silent letter','English influence','the letter බ'],a:0}]},
{id:'si_v1_5',title:'Checkpoint',step:'checkpoint',meta:'Vowel signs mastered?',vocab:[],ex:[
{t:'mc',q:'What does this say?',d:'කා',r:'kaa',o:['kaa','ku','ke','ko'],a:0},
{t:'li',q:'Listen — which one?',say:'කැ',o:['කැ','කා','කො','කු'],a:0},
{t:'mc',q:'Which is ku?',o:['කු','කා','කි','කෙ'],a:0},
{t:'mc',q:'What does this say?',d:'ක්',r:'k',o:['k — vowel killed','ka','kaa','ki'],a:0},
{t:'li',q:'Listen — which one?',say:'කෙ',o:['කෙ','කො','කා','කි'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['කා','kaa'],['කැ','kae'],['කි','ki'],['කු','ku'],['කො','ko']]}]},

/* --- Topic 7: first words --- */
{id:'si_v2',title:'First words',step:'learn',meta:'වතුර බත් තේ හොඳයි ආයුබෝවන්',vocab:[['වතුර','wathura','water'],['බත්','bath','rice / a meal'],['තේ','thee','tea'],['හොඳයි','hondhayi','good!'],['ආයුබෝවන්','aayuboowan','hello']],ex:[
{t:'note',tag:'Read what you know',q:'වතුර · බත් · තේ',body:'<p>Sound these out — you can read them now! <span class="deva">වතුර</span> = <b>wathura</b> (water) · <span class="deva">බත්</span> = <b>bath</b> (rice — THE word for a meal) · <span class="deva">තේ</span> = <b>thee</b> (tea, said "tay").</p>',eg:[['වතුර','wathura','water'],['බත්','bath','rice / meal'],['තේ','thee','tea']]},
{t:'mc',q:'What does වතුර mean?',d:'වතුර',o:['water','rice','tea','mango'],a:0},
{t:'mc',q:'What does බත් mean?',d:'බත්',o:['rice / a meal','water','tea','good'],a:0},
{t:'note',tag:'Say hello',q:'ආයුබෝවන් · හොඳයි',body:'<p>The classic warm Sinhala greeting is <span class="deva">ආයුබෝවන්</span> — <b>aayuboowan</b>, literally a wish for long life. Tap to hear it, then say it back.</p><p>And <span class="deva">හොඳයි</span> <b>hondhayi</b> = "good!" — your humming <span class="deva">ඳ</span> out in the wild.</p>',eg:[['ආයුබෝවන්','aayuboowan','hello'],['හොඳයි','hondhayi','good!']]},
{t:'mc',q:'How do you greet someone?',d:'ආයුබෝවන්',o:['aayuboowan','wathura','bath','thee'],a:0},
{t:'li',q:'Listen — which word?',say:'වතුර',o:['වතුර','බත්','තේ','හොඳයි'],a:0}]},
{id:'si_v2_2',title:'Hear the words',step:'recognize',meta:'වතුර බත් තේ හොඳයි',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'බත්',o:['බත්','වතුර','තේ','අඹ'],a:0},
{t:'mc',q:'Which word means "good!"?',o:['හොඳයි','වතුර','බත්','තේ'],a:0},
{t:'li',q:'Listen — which word?',say:'හොඳයි',o:['හොඳයි','ආයුබෝවන්','වතුර','තේ'],a:0},
{t:'mc',q:'What does තේ mean?',d:'තේ',o:['tea','water','rice','hello'],a:0},
{t:'li',q:'Listen — which word?',say:'ආයුබෝවන්',o:['ආයුබෝවන්','හොඳයි','වතුර','බත්'],a:0},
{t:'mc',q:'ආයුබෝවන් literally wishes you…',o:['long life','good food','safe travels','cool weather'],a:0},
{t:'li',q:'Listen — which word?',say:'තේ',o:['තේ','බත්','වතුර','අඹ'],a:0}]},
{id:'si_v2_3',title:'Pair them up',step:'build',meta:'Match word and meaning',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['වතුර','water'],['බත්','rice'],['තේ','tea'],['හොඳයි','good!']]},
{t:'mc',q:'Which word means water?',o:['වතුර','බත්','තේ','අඹ'],a:0},
{t:'li',q:'Listen — which word?',say:'අඹ',o:['අඹ','බත්','තේ','වතුර'],a:0},
{t:'mc',q:'Which word is the greeting?',o:['ආයුබෝවන්','හොඳයි','වතුර','බත්'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ආයුබෝවන්','hello'],['අඹ','mango'],['තේ','tea'],['වතුර','water']]},
{t:'mc',q:'The ඳ in හොඳයි is…',o:['a half-nasal — n+soft d in one beat','a hard t','silent','a vowel'],a:0}]},
{id:'si_v2_4',title:'Mix it',step:'mix',meta:'All the words together',vocab:[],ex:[
{t:'mc',q:'What does this word say?',d:'වතුර',r:'wathura',o:['wathura','bath','thee','amba'],a:0},
{t:'li',q:'Listen — which word?',say:'හොඳයි',o:['හොඳයි','වතුර','අඹ','තේ'],a:0},
{t:'mc',q:'What does අඹ mean?',d:'අඹ',o:['mango','rice','water','tea'],a:0},
{t:'mc',q:'What does this word say?',d:'තේ',r:'thee',o:['thee','bath','wathura','hondhayi'],a:0},
{t:'li',q:'Listen — which word?',say:'බත්',o:['බත්','තේ','වතුර','හොඳයි'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['වතුර','water'],['බත්','rice'],['අඹ','mango'],['ආයුබෝවන්','hello']]},
{t:'mc',q:'You just read real Sinhala words. The secret was…',o:['sounding out each letter','memorizing shapes','guessing','translation apps'],a:0}]},
{id:'si_v2_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 1 complete?',vocab:[],ex:[
{t:'mc',q:'What does this word say?',d:'බත්',r:'bath',o:['bath','thee','wathura','amba'],a:0},
{t:'li',q:'Listen — which word?',say:'වතුර',o:['වතුර','තේ','බත්','හොඳයි'],a:0},
{t:'mc',q:'Which word means good!?',o:['හොඳයි','ආයුබෝවන්','වතුර','අඹ'],a:0},
{t:'mc',q:'How do you say hello?',d:'ආයුබෝවන්',o:['aayuboowan','hondhayi','wathura','amba'],a:0},
{t:'li',q:'Listen — which word?',say:'තේ',o:['තේ','වතුර','බත්','අඹ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['වතුර','water'],['තේ','tea'],['හොඳයි','good!'],['ආයුබෝවන්','hello']]}]},
];

/* register the pack — coming-soon states vanish now that lessons exist */
registerPack({
  code:'si',
  name:'Sinhala',
  nativeName:'සිංහල',
  ttsLocale:'si-LK',
  script:/[඀-෿]/, /* Sinhala block */
  audioBase:'audio-si/',
  storageKey:'sajilo_si',
  brand:{h1:'Learn <em>Sinhala</em>'},
  alpha:{native:'සිංහල අකුරු',vowels:'ස්වර',cons:'ව්‍යඤ්ජන',nums:'ඉලක්කම්',review:'පුහුණුව',settings:'සැකසුම්'},
  art:{hero:SI_HERO,band:SI_BAND,mascot:SI_MASCOT},
  voiceTest:v=>/^si(\b|[-_])/i.test(v.lang)||/sinhala/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:SI_LESSONS,units:SI_UNITS,unitsIntensive:[],sym:SI_SYM,
  vowels:SI_VOWELS,cons:SI_CONS,nums:SI_NUMS,srsSeed:SI_SRS_SEED
});
