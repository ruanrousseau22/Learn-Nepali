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
  {n:2,t:'Foundations',d:'Greetings, people, numbers & your day',lessons:['si_greet','si_greet_2','si_greet_3','si_greet_4','si_greet_5','si_pron','si_pron_2','si_pron_3','si_pron_4','si_pron_5','si_people','si_people_2','si_people_3','si_people_4','si_people_5','si_num1','si_num1_2','si_num1_3','si_num1_4','si_num1_5','si_court','si_court_2','si_court_3','si_court_4','si_court_5','si_intro','si_intro_2','si_intro_3','si_intro_4','si_intro_5','si_time1','si_time1_2','si_time1_3','si_time1_4','si_time1_5']},
  {n:3,t:'Say a sentence',d:'The sentence engine — verbs, no & questions',lessons:['si_sov','si_sov_2','si_sov_3','si_sov_4','si_sov_5','si_be','si_be_2','si_be_3','si_be_4','si_be_5','si_dem','si_dem_2','si_dem_3','si_dem_4','si_dem_5','si_neg','si_neg_2','si_neg_3','si_neg_4','si_neg_5','si_yn','si_yn_2','si_yn_3','si_yn_4','si_yn_5','si_wh','si_wh_2','si_wh_3','si_wh_4','si_wh_5','si_want','si_want_2','si_want_3','si_want_4','si_want_5']},
  {n:4,t:'Cases & places',d:'The little endings -ta -gee -en & real places',lessons:['si_ta','si_ta_2','si_ta_3','si_ta_4','si_ta_5','si_gee','si_gee_2','si_gee_3','si_gee_4','si_gee_5','si_ekka','si_ekka_2','si_ekka_3','si_ekka_4','si_ekka_5','si_place','si_place_2','si_place_3','si_place_4','si_place_5','si_town','si_town_2','si_town_3','si_town_4','si_town_5','si_food','si_food_2','si_food_3','si_food_4','si_food_5','si_kade','si_kade_2','si_kade_3','si_kade_4','si_kade_5']},
  {n:5,t:'How many',d:'Numbers, rupees, bargaining, time & the week',lessons:['si_num2','si_num2_2','si_num2_3','si_num2_4','si_num2_5','si_tens','si_tens_2','si_tens_3','si_tens_4','si_tens_5','si_money','si_money_2','si_money_3','si_money_4','si_money_5','si_shop','si_shop_2','si_shop_3','si_shop_4','si_shop_5','si_time2','si_time2_2','si_time2_3','si_time2_4','si_time2_5','si_days','si_days_2','si_days_3','si_days_4','si_days_5','si_count','si_count_2','si_count_3','si_count_4','si_count_5']},
  {n:6,t:'Describe it',d:'Adjectives, colors, feelings, weather & health',lessons:['si_adj','si_adj_2','si_adj_3','si_adj_4','si_adj_5','si_adj2','si_adj2_2','si_adj2_3','si_adj2_4','si_adj2_5','si_color','si_color_2','si_color_3','si_color_4','si_color_5','si_cmp','si_cmp_2','si_cmp_3','si_cmp_4','si_cmp_5','si_feel','si_feel_2','si_feel_3','si_feel_4','si_feel_5','si_wx','si_wx_2','si_wx_3','si_wx_4','si_wx_5','si_body','si_body_2','si_body_3','si_body_4','si_body_5']},
];

const SI_SYM={si_c1:'ක',si_c2:'ත',si_c3:'ප',si_c4:'ච',si_c5:'ඳ',si_v1:'කා',si_v2:'තේ',
si_greet:'ආයු',si_pron:'මම',si_people:'අම්මා',si_num1:'පහ',si_court:'හරි',si_intro:'නම',si_time1:'අද',
si_sov:'කනවා',si_be:'ඉන්නවා',si_dem:'මේක',si_neg:'නෑ',si_yn:'ද',si_wh:'කවුද',si_want:'ඕනැ',
si_ta:'මට',si_gee:'මගේ',si_ekka:'එක්ක',si_place:'උඩ',si_town:'පාර',si_food:'ආප්ප',si_kade:'කඩේ',
si_num2:'දොළහ',si_tens:'පනහ',si_money:'සල්ලි',si_shop:'ගණන්',si_time2:'වෙලාව',si_days:'ඉරිදා',si_count:'දෙකක්',
si_adj:'ලොකු',si_adj2:'ලස්සන',si_color:'රතු',si_cmp:'වඩා',si_feel:'මහන්සි',si_wx:'වැස්ස',si_body:'ඔළුව'};

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

/* ===================== ZONE 2 · FOUNDATIONS ===================== */
/* --- Topic 8: hello & how are you --- */
{id:'si_greet',title:'Hello & how are you',step:'learn',meta:'කොහොමද & the going-coming goodbye',vocab:[['ආයුබෝවන්','aayuboowan','hello'],['කොහොමද','kohomadha','how are you?'],['හොඳින්','hondhin','fine / well'],['ගිහින් එන්නම්','gihin ennam','goodbye — I will go and come back'],['ගිහින් එන්න','gihin enna','goodbye — the reply']],ex:[
{t:'note',tag:'Say hello',q:'ආයුබෝවන් & කොහොමද',body:'<p>You know <span class="deva">ආයුබෝවන්</span>. Between people who know each other, the real everyday greeting is just <span class="deva">කොහොමද</span> <b>kohomadha</b> — "how (is it)?"</p><p>The easy reply: <span class="deva">හොඳින්</span> <b>hondhin</b> — "fine".</p>',eg:[['කොහොමද','kohomadha','how are you?'],['හොඳින්','hondhin','fine']]},
{t:'mc',q:'Someone greets you: කොහොමද. A good reply?',d:'කොහොමද',r:'kohomadha',o:['හොඳින්','ගිහින් එන්නම්','වතුර','බත්'],a:0},
{t:'mc',q:'What does කොහොමද mean?',d:'කොහොමද',r:'kohomadha',o:['how are you?','goodbye','thank you','what time?'],a:0},
{t:'note',tag:'Going, coming back',q:'The Sri Lankan goodbye',body:'<p>There is no real word for "goodbye". The person leaving says <span class="deva">ගිහින් එන්නම්</span> <b>gihin ennam</b> — "I will go and come back". The other replies <span class="deva">ගිහින් එන්න</span> <b>gihin enna</b> — "go and come back".</p><p>Nobody ever just leaves — everyone comes back.</p>',eg:[['ගිහින් එන්නම්','gihin ennam','I will go & come'],['ගිහින් එන්න','gihin enna','go & come (reply)']]},
{t:'mc',q:'You are the one leaving. You say…',o:['ගිහින් එන්නම්','ගිහින් එන්න','කොහොමද','හොඳින්'],a:0},
{t:'mc',q:'Your friend says ගිහින් එන්නම්. You reply…',o:['ගිහින් එන්න','ගිහින් එන්නම්','හොඳින්','ආයුබෝවන්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කොහොමද',o:['කොහොමද','ආයුබෝවන්','හොඳින්','ගිහින් එන්නම්'],a:0}]},
{id:'si_greet_2',title:'Hear it',step:'recognize',meta:'Spot the greetings',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'හොඳින්',o:['හොඳින්','කොහොමද','ගිහින් එන්න','ආයුබෝවන්'],a:0},
{t:'mc',q:'Which phrase means "fine / well"?',o:['හොඳින්','කොහොමද','ගිහින් එන්නම්','ඔව්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ගිහින් එන්නම්',o:['ගිහින් එන්නම්','ගිහින් එන්න','කොහොමද','හොඳින්'],a:0},
{t:'mc',q:'ගිහින් එන්නම් literally means…',o:['I will go and come back','goodbye forever','good night','see you at home'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ආයුබෝවන්',o:['ආයුබෝවන්','කොහොමද','හොඳින්','ගිහින් එන්න'],a:0},
{t:'mc',q:'Friends often greet each other with just…',o:['කොහොමද','ආයුබෝවන්','ගිහින් එන්න','ස්තූතියි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ගිහින් එන්න',o:['ගිහින් එන්න','ගිහින් එන්නම්','හොඳින්','කොහොමද'],a:0}]},
{id:'si_greet_3',title:'Pair them up',step:'build',meta:'Match greeting and meaning',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ආයුබෝවන්','hello'],['කොහොමද','how are you?'],['හොඳින්','fine'],['ගිහින් එන්නම්','I will go & come']]},
{t:'mc',q:'The reply to ගිහින් එන්නම් is…',o:['ගිහින් එන්න','ගිහින් එන්නම්','ඔව්','හොඳින්'],a:0},
{t:'mc',q:'Which phrase asks how someone is?',o:['කොහොමද','හොඳින්','ආයුබෝවන්','ගිහින් එන්න'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කොහොමද',o:['කොහොමද','හොඳින්','ගිහින් එන්නම්','ආයුබෝවන්'],a:0},
{t:'mc',q:'හොඳින් is built from a word you know:',o:['හොඳ — good','තේ — tea','වතුර — water','බත් — rice'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ගිහින් එන්න','go & come (reply)'],['හොඳින්','fine'],['කොහොමද','how are you?'],['ආයුබෝවන්','hello']]}]},
{id:'si_greet_4',title:'Mix it',step:'mix',meta:'A little conversation',vocab:[],ex:[
{t:'mc',q:'Put the exchange in order: greeting first…',o:['කොහොමද → හොඳින්','හොඳින් → කොහොමද','ගිහින් එන්න → ආයුබෝවන්','හොඳින් → ගිහින් එන්නම්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ගිහින් එන්නම්',o:['ගිහින් එන්නම්','ගිහින් එන්න','ආයුබෝවන්','කොහොමද'],a:0},
{t:'mc',q:'What does හොඳින් mean?',d:'හොඳින්',r:'hondhin',o:['fine / well','hello','how?','goodbye'],a:0},
{t:'mc',q:'A shopkeeper you know sees you. Most natural greeting?',o:['කොහොමද','ඔව්','ගිහින් එන්නම්','නෑ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'හොඳින්',o:['හොඳින්','හොඳයි','කොහොමද','ගිහින් එන්න'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['කොහොමද','how are you?'],['ගිහින් එන්නම්','I will go & come'],['ගිහින් එන්න','go & come (reply)'],['ආයුබෝවන්','hello']]},
{t:'mc',q:'Why does nobody say a final "goodbye"?',o:['the phrase promises to come back','goodbyes are rude','there is no word for going','people never leave'],a:0}]},
{id:'si_greet_5',title:'Checkpoint',step:'checkpoint',meta:'Greetings mastered?',vocab:[],ex:[
{t:'mc',q:'How do you ask "how are you?"',o:['කොහොමද','හොඳින්','ගිහින් එන්න','ආයුබෝවන්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ගිහින් එන්න',o:['ගිහින් එන්න','ගිහින් එන්නම්','කොහොමද','හොඳින්'],a:0},
{t:'mc',q:'Reply "fine":',o:['හොඳින්','ඔව්','ගිහින් එන්නම්','ආයුබෝවන්'],a:0},
{t:'mc',q:'You are leaving. You say…',o:['ගිහින් එන්නම්','ගිහින් එන්න','කොහොමද','හොඳින්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කොහොමද',o:['කොහොමද','ආයුබෝවන්','ගිහින් එන්නම්','හොඳින්'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ආයුබෝවන්','hello'],['කොහොමද','how are you?'],['හොඳින්','fine'],['ගිහින් එන්න','go & come (reply)']]}]},

/* --- Topic 9: pronouns --- */
{id:'si_pron',title:'I, you & we',step:'learn',meta:'මම ඔයා එයා අපි',vocab:[['මම','mama','I'],['ඔයා','oyaa','you (friendly)'],['එයා','eyaa','he / she'],['අපි','api','we'],['ඔබ','oba','you (formal — signs & TV)']],ex:[
{t:'note',tag:'Four little words',q:'මම ඔයා එයා අපි',body:'<p><span class="deva">මම</span> <b>mama</b> = I · <span class="deva">ඔයා</span> <b>oyaa</b> = you · <span class="deva">එයා</span> <b>eyaa</b> = he OR she · <span class="deva">අපි</span> <b>api</b> = we.</p><p>Notice: <span class="deva">එයා</span> covers he AND she — spoken Sinhala has no gender to memorize.</p>',eg:[['මම','mama','I'],['ඔයා','oyaa','you'],['එයා','eyaa','he / she'],['අපි','api','we']]},
{t:'mc',q:'What does මම mean?',d:'මම',r:'mama',o:['I','you','we','he'],a:0},
{t:'mc',q:'What does අපි mean?',d:'අපි',r:'api',o:['we','I','you','she'],a:0},
{t:'note',tag:'Friendly vs formal',q:'ඔයා and ඔබ',body:'<p><span class="deva">ඔයා</span> <b>oyaa</b> is for friends, family and people your age — you will use it constantly.</p><p><span class="deva">ඔබ</span> <b>oba</b> is the formal "you" of announcements, signs and TV. Recognize it; you will rarely need to say it. With strangers, Sinhala prefers something warmer — the next lesson!</p>',eg:[['ඔයා','oyaa','you (friendly)'],['ඔබ','oba','you (formal)']]},
{t:'mc',q:'Which "you" do you use with a friend?',o:['ඔයා','ඔබ','එයා','අපි'],a:0},
{t:'mc',q:'එයා means…',d:'එයා',r:'eyaa',o:['he or she — both','only he','only she','it'],a:0}]},
{id:'si_pron_2',title:'Hear them',step:'recognize',meta:'Spot මම ඔයා එයා අපි',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'මම',o:['මම','ඔයා','එයා','අපි'],a:0},
{t:'li',q:'Listen — which word?',say:'අපි',o:['අපි','එයා','මම','ඔයා'],a:0},
{t:'mc',q:'Which word means "you" (friendly)?',o:['ඔයා','ඔබ','මම','අපි'],a:0},
{t:'mc',q:'Which word means "he / she"?',o:['එයා','අපි','මම','ඔයා'],a:0},
{t:'li',q:'Listen — which word?',say:'ඔයා',o:['ඔයා','ඔබ','එයා','අපි'],a:0},
{t:'mc',q:'Where would you meet ඔබ?',o:['signs and TV','only in songs','never','between best friends'],a:0},
{t:'li',q:'Listen — which word?',say:'එයා',o:['එයා','ඔයා','අපි','මම'],a:0}]},
{id:'si_pron_3',title:'Pair them up',step:'build',meta:'Match pronoun and meaning',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['මම','I'],['ඔයා','you'],['එයා','he / she'],['අපි','we']]},
{t:'mc',q:'Which word means "we"?',o:['අපි','මම','එයා','ඔබ'],a:0},
{t:'mc',q:'Which word means "I"?',o:['මම','අපි','ඔයා','එයා'],a:0},
{t:'li',q:'Listen — which word?',say:'ඔයා',o:['ඔයා','එයා','අපි','මම'],a:0},
{t:'mc',q:'Spoken Sinhala pronouns have…',o:['no gender for he/she','three genders','a royal form you must use','no word for we'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['අපි','we'],['එයා','he / she'],['ඔයා','you'],['මම','I']]}]},
{id:'si_pron_4',title:'Mix it',step:'mix',meta:'All the pronouns',vocab:[],ex:[
{t:'mc',q:'What does එයා mean?',d:'එයා',r:'eyaa',o:['he / she','I','we','you (formal)'],a:0},
{t:'li',q:'Listen — which word?',say:'මම',o:['මම','අපි','ඔයා','එයා'],a:0},
{t:'mc',q:'Which is the FORMAL you?',o:['ඔබ','ඔයා','එයා','අපි'],a:0},
{t:'mc',q:'"We" in Sinhala is…',d:'අපි',r:'api',o:['අපි','මම','ඔයා','ඔබ'],a:0},
{t:'li',q:'Listen — which word?',say:'අපි',o:['අපි','මම','එයා','ඔයා'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['මම','I'],['අපි','we'],['ඔබ','you (formal)'],['එයා','he / she']]},
{t:'mc',q:'Talking to your friend Nimal, "you" is…',o:['ඔයා','ඔබ','එයා','මම'],a:0}]},
{id:'si_pron_5',title:'Checkpoint',step:'checkpoint',meta:'Pronouns mastered?',vocab:[],ex:[
{t:'mc',q:'What does මම mean?',d:'මම',r:'mama',o:['I','we','you','she'],a:0},
{t:'li',q:'Listen — which word?',say:'එයා',o:['එයා','අපි','මම','ඔයා'],a:0},
{t:'mc',q:'Which word means "we"?',o:['අපි','ඔයා','මම','ඔබ'],a:0},
{t:'mc',q:'The friendly everyday "you" is…',o:['ඔයා','ඔබ','අපි','එයා'],a:0},
{t:'li',q:'Listen — which word?',say:'ඔයා',o:['ඔයා','මම','අපි','එයා'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['මම','I'],['ඔයා','you'],['එයා','he / she'],['අපි','we']]}]},

/* --- Topic 10: family words as address --- */
{id:'si_people',title:'Calling people',step:'learn',meta:'අම්මා තාත්තා අයියා අක්කා නංගී මල්ලී',vocab:[['අම්මා','ammaa','mother'],['තාත්තා','thaaththaa','father'],['අයියා','ayiyaa','older brother'],['අක්කා','akkaa','older sister'],['නංගී','nangii','younger sister'],['මල්ලී','mallii','younger brother']],ex:[
{t:'note',tag:'The family six',q:'අම්මා තාත්තා & the siblings',body:'<p><span class="deva">අම්මා</span> <b>ammaa</b> mother · <span class="deva">තාත්තා</span> <b>thaaththaa</b> father.</p><p>Siblings split by age, not just gender: <span class="deva">අයියා</span> <b>ayiyaa</b> older brother · <span class="deva">අක්කා</span> <b>akkaa</b> older sister · <span class="deva">මල්ලී</span> <b>mallii</b> younger brother · <span class="deva">නංගී</span> <b>nangii</b> younger sister.</p>',eg:[['අයියා','ayiyaa','older brother'],['අක්කා','akkaa','older sister'],['මල්ලී','mallii','younger brother'],['නංගී','nangii','younger sister']]},
{t:'mc',q:'What does අම්මා mean?',d:'අම්මා',r:'ammaa',o:['mother','father','older sister','younger brother'],a:0},
{t:'mc',q:'Which word is "older brother"?',d:'අයියා',r:'ayiyaa',o:['අයියා','මල්ලී','අක්කා','තාත්තා'],a:0},
{t:'note',tag:'Everyone is family',q:'Address terms',body:'<p>Here is the warm secret of Sinhala: these words are used with <b>strangers</b> too. The waiter is <span class="deva">අයියා</span>, the shop lady is <span class="deva">අක්කා</span>, anyone younger is <span class="deva">මල්ලී</span> or <span class="deva">නංගී</span>.</p><p>It is friendly AND polite — the whole island is one big family.</p>',tip:'When unsure of age, guess older — it flatters no one and offends no one.'},
{t:'mc',q:'You call the young waiter over. Naturally you say…',o:['අයියා','ඔබ','අම්මා','තාත්තා'],a:0},
{t:'mc',q:'The lady at the shop, a bit older than you, is…',o:['අක්කා','නංගී','අම්මා','මල්ලී'],a:0}]},
{id:'si_people_2',title:'Hear them',step:'recognize',meta:'Spot the family words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'අම්මා',o:['අම්මා','අක්කා','තාත්තා','අයියා'],a:0},
{t:'li',q:'Listen — which word?',say:'අයියා',o:['අයියා','අම්මා','මල්ලී','අක්කා'],a:0},
{t:'mc',q:'Which word means "father"?',o:['තාත්තා','අම්මා','අයියා','මල්ලී'],a:0},
{t:'mc',q:'Which word means "younger sister"?',o:['නංගී','අක්කා','අම්මා','මල්ලී'],a:0},
{t:'li',q:'Listen — which word?',say:'නංගී',o:['නංගී','මල්ලී','අක්කා','අයියා'],a:0},
{t:'mc',q:'අක්කා is…',d:'අක්කා',r:'akkaa',o:['older sister','younger sister','mother','older brother'],a:0},
{t:'li',q:'Listen — which word?',say:'තාත්තා',o:['තාත්තා','අම්මා','අයියා','නංගී'],a:0}]},
{id:'si_people_3',title:'Pair them up',step:'build',meta:'Match person and meaning',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['අම්මා','mother'],['තාත්තා','father'],['අයියා','older brother'],['අක්කා','older sister']]},
{t:'mc',q:'Which word means "younger brother"?',o:['මල්ලී','අයියා','නංගී','තාත්තා'],a:0},
{t:'mc',q:'Siblings in Sinhala split by…',o:['age — older or younger','height','who was loudest','school year'],a:0},
{t:'li',q:'Listen — which word?',say:'මල්ලී',o:['මල්ලී','නංගී','අයියා','අම්මා'],a:0},
{t:'mc',q:'Why call a stranger අයියා?',o:['it is friendly and polite','it is a joke','you forgot their name','it means sir only'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['නංගී','younger sister'],['මල්ලී','younger brother'],['අක්කා','older sister'],['අයියා','older brother']]}]},
{id:'si_people_4',title:'Mix it',step:'mix',meta:'Family & strangers',vocab:[],ex:[
{t:'mc',q:'What does තාත්තා mean?',d:'තාත්තා',r:'thaaththaa',o:['father','mother','older brother','younger sister'],a:0},
{t:'li',q:'Listen — which word?',say:'අක්කා',o:['අක්කා','අම්මා','නංගී','අයියා'],a:0},
{t:'mc',q:'A schoolgirl younger than you helps you. She is…',o:['නංගී','අක්කා','අම්මා','අයියා'],a:0},
{t:'mc',q:'What does මල්ලී mean?',d:'මල්ලී',r:'mallii',o:['younger brother','older brother','father','younger sister'],a:0},
{t:'li',q:'Listen — which word?',say:'අම්මා',o:['අම්මා','අක්කා','තාත්තා','මල්ලී'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['අම්මා','mother'],['අයියා','older brother'],['නංගී','younger sister'],['තාත්තා','father']]},
{t:'mc',q:'Unsure of a stranger’s age? The safe warm guess:',o:['older — අයියා or අක්කා','younger — මල්ලී or නංගී','skip the word','use ඔබ loudly'],a:0}]},
{id:'si_people_5',title:'Checkpoint',step:'checkpoint',meta:'People words mastered?',vocab:[],ex:[
{t:'mc',q:'Which word means "mother"?',o:['අම්මා','තාත්තා','අක්කා','නංගී'],a:0},
{t:'li',q:'Listen — which word?',say:'අයියා',o:['අයියා','අක්කා','මල්ලී','තාත්තා'],a:0},
{t:'mc',q:'Older sister is…',o:['අක්කා','නංගී','අම්මා','මල්ලී'],a:0},
{t:'mc',q:'The waiter (a young man) is naturally called…',o:['අයියා','තාත්තා','ඔබ','අම්මා'],a:0},
{t:'li',q:'Listen — which word?',say:'නංගී',o:['නංගී','මල්ලී','අක්කා','අම්මා'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['අම්මා','mother'],['තාත්තා','father'],['මල්ලී','younger brother'],['නංගී','younger sister']]}]},

/* --- Topic 11: numbers 1-10 --- */
{id:'si_num1',title:'One to ten',step:'learn',meta:'එක දෙක තුන … දහය',vocab:[['එක','eka','1'],['දෙක','dheka','2'],['තුන','thuna','3'],['හතර','hathara','4'],['පහ','paha','5'],['හය','haya','6'],['හත','hatha','7'],['අට','ata','8'],['නවය','nawaya','9'],['දහය','dhahaya','10']],ex:[
{t:'note',tag:'One to five',q:'එක දෙක තුන හතර පහ',body:'<p><span class="deva">එක</span> <b>eka</b> 1 · <span class="deva">දෙක</span> <b>dheka</b> 2 · <span class="deva">තුන</span> <b>thuna</b> 3 · <span class="deva">හතර</span> <b>hathara</b> 4 · <span class="deva">පහ</span> <b>paha</b> 5.</p><p>Modern Sinhala writes the digits 1 2 3 — you only need the <b>spoken</b> words.</p>',eg:[['එක','eka','1'],['දෙක','dheka','2'],['තුන','thuna','3'],['හතර','hathara','4'],['පහ','paha','5']]},
{t:'mc',q:'What is දෙක?',d:'දෙක',r:'dheka',o:['2','1','3','5'],a:0},
{t:'mc',q:'What is පහ?',d:'පහ',r:'paha',o:['5','4','2','10'],a:0},
{t:'note',tag:'Six to ten',q:'හය හත අට නවය දහය',body:'<p><span class="deva">හය</span> <b>haya</b> 6 · <span class="deva">හත</span> <b>hatha</b> 7 · <span class="deva">අට</span> <b>ata</b> 8 · <span class="deva">නවය</span> <b>nawaya</b> 9 · <span class="deva">දහය</span> <b>dhahaya</b> 10.</p><p>Watch the near-twins: <b>haya</b> 6 vs <b>hatha</b> 7 — the 7 has your soft th.</p>',eg:[['හය','haya','6'],['හත','hatha','7'],['අට','ata','8'],['නවය','nawaya','9'],['දහය','dhahaya','10']]},
{t:'mc',q:'What is හත?',d:'හත',r:'hatha',o:['7','6','8','9'],a:0},
{t:'mc',q:'What is දහය?',d:'දහය',r:'dhahaya',o:['10','9','8','2'],a:0}]},
{id:'si_num1_2',title:'Hear the numbers',step:'recognize',meta:'Spot 1-10 by ear',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'තුන',o:['තුන','දෙක','හතර','පහ'],a:0},
{t:'li',q:'Listen — which number?',say:'හය',o:['හය','හත','අට','පහ'],a:0},
{t:'mc',q:'Which is 4?',o:['හතර','හත','අට','තුන'],a:0},
{t:'mc',q:'Which is 9?',o:['නවය','දහය','අට','හය'],a:0},
{t:'li',q:'Listen — which number?',say:'අට',o:['අට','හත','නවය','එක'],a:0},
{t:'mc',q:'හය is…',d:'හය',r:'haya',o:['6','7','5','8'],a:0},
{t:'li',q:'Listen — which number?',say:'එක',o:['එක','දෙක','අට','දහය'],a:0}]},
{id:'si_num1_3',title:'Pair them up',step:'build',meta:'Match number and value',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['එක','1'],['දෙක','2'],['තුන','3'],['හතර','4'],['පහ','5']]},
{t:'mc',q:'Which is 8?',o:['අට','හත','හය','නවය'],a:0},
{t:'mc',q:'Which is 10?',o:['දහය','නවය','පහ','දෙක'],a:0},
{t:'li',q:'Listen — which number?',say:'නවය',o:['නවය','දහය','හතර','අට'],a:0},
{t:'mc',q:'The tricky twins are 6 and 7:',o:['හය then හත','හත then හය','අට then නවය','එක then දෙක'],a:0},
{t:'match',q:'Match number and value',pairs:[['හය','6'],['හත','7'],['අට','8'],['නවය','9'],['දහය','10']]}]},
{id:'si_num1_4',title:'Mix it',step:'mix',meta:'All ten together',vocab:[],ex:[
{t:'mc',q:'What is හතර?',d:'හතර',r:'hathara',o:['4','7','6','9'],a:0},
{t:'li',q:'Listen — which number?',say:'පහ',o:['පහ','හතර','හය','අට'],a:0},
{t:'mc',q:'Which is 3?',o:['තුන','දෙක','හතර','හත'],a:0},
{t:'mc',q:'What is නවය?',d:'නවය',r:'nawaya',o:['9','10','8','6'],a:0},
{t:'li',q:'Listen — which number?',say:'දහය',o:['දහය','නවය','දෙක','හය'],a:0},
{t:'match',q:'Match number and value',pairs:[['දෙක','2'],['පහ','5'],['හත','7'],['දහය','10']]},
{t:'li',q:'Listen — which number?',say:'හත',o:['හත','හය','අට','හතර'],a:0}]},
{id:'si_num1_5',title:'Checkpoint',step:'checkpoint',meta:'1-10 mastered?',vocab:[],ex:[
{t:'mc',q:'What is එක?',d:'එක',r:'eka',o:['1','2','10','5'],a:0},
{t:'li',q:'Listen — which number?',say:'හතර',o:['හතර','හත','තුන','පහ'],a:0},
{t:'mc',q:'Which is 6?',o:['හය','හත','අට','පහ'],a:0},
{t:'mc',q:'What is අට?',d:'අට',r:'ata',o:['8','7','9','4'],a:0},
{t:'li',q:'Listen — which number?',say:'දෙක',o:['දෙක','එක','දහය','තුන'],a:0},
{t:'match',q:'Match number and value',pairs:[['තුන','3'],['හය','6'],['නවය','9'],['දහය','10']]}]},

/* --- Topic 12: courtesies --- */
{id:'si_court',title:'Little courtesies',step:'learn',meta:'ස්තූතියි කරුණාකරලා සමාවෙන්න හරි',vocab:[['ස්තූතියි','sthuuthiyi','thank you'],['කරුණාකරලා','karunaakaralaa','please'],['සමාවෙන්න','samaawenna','sorry / excuse me'],['කමක් නෑ','kamak naee','no problem'],['හරි','hari','okay / right']],ex:[
{t:'note',tag:'Thanks & please',q:'ස්තූතියි & කරුණාකරලා',body:'<p><span class="deva">ස්තූතියි</span> <b>sthuuthiyi</b> = thank you. <span class="deva">කරුණාකරලා</span> <b>karunaakaralaa</b> = please — literally "having shown kindness".</p><p>Heads-up: Sinhala speakers say please and thank you <b>less</b> than English does — warmth lives in the family words and the smile instead.</p>',eg:[['ස්තූතියි','sthuuthiyi','thank you'],['කරුණාකරලා','karunaakaralaa','please']]},
{t:'mc',q:'What does ස්තූතියි mean?',d:'ස්තූතියි',r:'sthuuthiyi',o:['thank you','please','sorry','okay'],a:0},
{t:'mc',q:'Which word means "please"?',o:['කරුණාකරලා','ස්තූතියි','සමාවෙන්න','හරි'],a:0},
{t:'note',tag:'Oops & OK',q:'සමාවෙන්න · කමක් නෑ · හරි',body:'<p><span class="deva">සමාවෙන්න</span> <b>samaawenna</b> = sorry / excuse me. The gracious reply: <span class="deva">කමක් නෑ</span> <b>kamak naee</b> — "no problem".</p><p>And meet <span class="deva">හරි</span> <b>hari</b> — okay!, right!, fine!, deal! You will hear it fifty times a day.</p>',eg:[['සමාවෙන්න','samaawenna','sorry'],['කමක් නෑ','kamak naee','no problem'],['හරි','hari','okay!']]},
{t:'mc',q:'You bump someone in the market. You say…',o:['සමාවෙන්න','ස්තූතියි','හරි','කරුණාකරලා'],a:0},
{t:'mc',q:'Someone says සමාවෙන්න to you. Gracious reply?',o:['කමක් නෑ','ස්තූතියි','සමාවෙන්න','කරුණාකරලා'],a:0}]},
{id:'si_court_2',title:'Hear them',step:'recognize',meta:'Spot the courtesy words',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ස්තූතියි',o:['ස්තූතියි','සමාවෙන්න','කරුණාකරලා','හරි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'හරි',o:['හරි','කමක් නෑ','ස්තූතියි','සමාවෙන්න'],a:0},
{t:'mc',q:'Which phrase means "no problem"?',o:['කමක් නෑ','හරි','ස්තූතියි','කරුණාකරලා'],a:0},
{t:'mc',q:'හරි means…',d:'හරි',r:'hari',o:['okay / right','sorry','thank you','please'],a:0},
{t:'li',q:'Listen — which phrase?',say:'සමාවෙන්න',o:['සමාවෙන්න','ස්තූතියි','කමක් නෑ','කරුණාකරලා'],a:0},
{t:'mc',q:'Which phrase means "sorry / excuse me"?',o:['සමාවෙන්න','කමක් නෑ','හරි','ස්තූතියි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කරුණාකරලා',o:['කරුණාකරලා','සමාවෙන්න','ස්තූතියි','හරි'],a:0}]},
{id:'si_court_3',title:'Pair them up',step:'build',meta:'Match phrase and meaning',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ස්තූතියි','thank you'],['කරුණාකරලා','please'],['සමාවෙන්න','sorry'],['හරි','okay!']]},
{t:'mc',q:'The reply to a "sorry" is…',o:['කමක් නෑ','සමාවෙන්න','ස්තූතියි','කරුණාකරලා'],a:0},
{t:'mc',q:'Agreeing to a plan, you say…',o:['හරි','සමාවෙන්න','කමක් නෑ','ස්තූතියි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කමක් නෑ',o:['කමක් නෑ','හරි','සමාවෙන්න','ස්තූතියි'],a:0},
{t:'mc',q:'කරුණාකරලා literally means…',o:['having shown kindness','right now','one more time','with money'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['කමක් නෑ','no problem'],['හරි','okay!'],['ස්තූතියි','thank you'],['සමාවෙන්න','sorry']]}]},
{id:'si_court_4',title:'Mix it',step:'mix',meta:'Courtesy in action',vocab:[],ex:[
{t:'mc',q:'Someone hands you tea. You say…',o:['ස්තූතියි','සමාවෙන්න','හරි','කමක් නෑ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'හරි',o:['හරි','ස්තූතියි','කමක් නෑ','කරුණාකරලා'],a:0},
{t:'mc',q:'What does සමාවෙන්න mean?',d:'සමාවෙන්න',r:'samaawenna',o:['sorry / excuse me','thank you','no problem','okay'],a:0},
{t:'mc',q:'"Deal!" at the market — the one word:',o:['හරි','ඔව්','කමක් නෑ','ස්තූතියි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ස්තූතියි',o:['ස්තූතියි','කරුණාකරලා','සමාවෙන්න','හරි'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ස්තූතියි','thank you'],['සමාවෙන්න','sorry'],['කමක් නෑ','no problem'],['කරුණාකරලා','please']]},
{t:'mc',q:'Sinhala says please/thanks less than English because…',o:['warmth lives in family words and smiles','politeness is rude','the words are too long','only children thank'],a:0}]},
{id:'si_court_5',title:'Checkpoint',step:'checkpoint',meta:'Courtesies mastered?',vocab:[],ex:[
{t:'mc',q:'Thank you =',o:['ස්තූතියි','සමාවෙන්න','හරි','කමක් නෑ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'සමාවෙන්න',o:['සමාවෙන්න','ස්තූතියි','කරුණාකරලා','හරි'],a:0},
{t:'mc',q:'Which phrase means "please"?',o:['කරුණාකරලා','හරි','කමක් නෑ','ස්තූතියි'],a:0},
{t:'mc',q:'The fifty-times-a-day word for "okay!":',o:['හරි','ඔව්','කමක් නෑ','සමාවෙන්න'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කමක් නෑ',o:['කමක් නෑ','කරුණාකරලා','ස්තූතියි','සමාවෙන්න'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ස්තූතියි','thank you'],['කරුණාකරලා','please'],['කමක් නෑ','no problem'],['හරි','okay!']]}]},

/* --- Topic 13: introductions --- */
{id:'si_intro',title:'Who are you?',step:'learn',meta:'මගේ නම … & no word for "is"',vocab:[['නම','nama','name'],['මගේ නම','magee nama','my name'],['ඔයාගේ නම මොකක්ද','oyaagee nama mokakdha','what is your name?'],['යාළුවා','yaaluwaa','friend'],['මේ','mee','this (before a noun)']],ex:[
{t:'note',tag:'Names',q:'මගේ නම …',body:'<p><span class="deva">නම</span> <b>nama</b> = name (hear the echo of English "name"? They are ancient cousins!).</p><p><span class="deva">මගේ නම නිමල්</span> <b>magee nama Nimal</b> = my name (is) Nimal. Notice — <b>no word for "is"</b>. Two nouns side by side make a full sentence in Sinhala.</p>',eg:[['මගේ නම නිමල්','magee nama Nimal','my name is Nimal']]},
{t:'mc',q:'What does නම mean?',d:'නම',r:'nama',o:['name','friend','this','my'],a:0},
{t:'mc',q:'මගේ නම කමලා means…',d:'මගේ නම කමලා',r:'magee nama Kamalaa',o:['my name is Kamala','your name is Kamala','who is Kamala?','Kamala is here'],a:0},
{t:'note',tag:'Ask back',q:'ඔයාගේ නම මොකක්ද',body:'<p>Ask a name with <span class="deva">ඔයාගේ නම මොකක්ද</span> <b>oyaagee nama mokakdha</b> — "your name what?" (<b>mokakdha</b> = what? — the full question toolkit comes in Zone 3.)</p><p>Introduce someone with <span class="deva">මේ</span>: <span class="deva">මේ මගේ යාළුවා</span> <b>mee magee yaaluwaa</b> = this (is) my friend — again, no "is"!</p>',eg:[['ඔයාගේ නම මොකක්ද','oyaagee nama mokakdha','what is your name?'],['මේ මගේ යාළුවා','mee magee yaaluwaa','this is my friend']]},
{t:'mc',q:'How do you ask a name?',o:['ඔයාගේ නම මොකක්ද','මගේ නම නිමල්','මේ මගේ යාළුවා','කොහොමද'],a:0},
{t:'mc',q:'What does යාළුවා mean?',d:'යාළුවා',r:'yaaluwaa',o:['friend','name','brother','teacher'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මගේ නම',o:['මගේ නම','ඔයාගේ නම මොකක්ද','යාළුවා','මේ'],a:0}]},
{id:'si_intro_2',title:'Hear it',step:'recognize',meta:'Names by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'නම',o:['නම','මම','මේ','නෑ'],a:0},
{t:'li',q:'Listen — which word?',say:'යාළුවා',o:['යාළුවා','අයියා','ඔයා','අම්මා'],a:0},
{t:'mc',q:'Which phrase asks a name?',o:['ඔයාගේ නම මොකක්ද','මගේ නම','මේ මගේ යාළුවා','ගිහින් එන්නම්'],a:0},
{t:'mc',q:'මේ මගේ යාළුවා means…',d:'මේ මගේ යාළුවා',o:['this is my friend','my friend left','your friend is here','who is your friend?'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඔයාගේ නම මොකක්ද',o:['ඔයාගේ නම මොකක්ද','මගේ නම','මේ මගේ යාළුවා','කොහොමද'],a:0},
{t:'mc',q:'How many words for "is" did those sentences need?',o:['none — nouns sit side by side','one','two','it depends on gender'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මේ මගේ යාළුවා',o:['මේ මගේ යාළුවා','ඔයාගේ නම මොකක්ද','මගේ නම','යාළුවා'],a:0}]},
{id:'si_intro_3',title:'Build it',step:'build',meta:'Introduce yourself',vocab:[],ex:[
{t:'wb',q:'Say: my name is Nimal',a:['මගේ','නම','නිමල්'],pool:['මගේ','නම','නිමල්','ඔයාගේ']},
{t:'mc',q:'Which word means "friend"?',o:['යාළුවා','නම','මේ','මම'],a:0},
{t:'wb',q:'Say: this is my friend',a:['මේ','මගේ','යාළුවා'],pool:['මේ','මගේ','යාළුවා','නම']},
{t:'li',q:'Listen — which phrase?',say:'මගේ නම',o:['මගේ නම','යාළුවා','මේ','නම'],a:0},
{t:'mc',q:'මගේ නම කමලා. Who is speaking?',o:['Kamala','Nimal','a friend of Kamala','unknown'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['නම','name'],['යාළුවා','friend'],['මගේ නම','my name'],['මේ','this']]}]},
{id:'si_intro_4',title:'Mix it',step:'mix',meta:'A first meeting',vocab:[],ex:[
{t:'mc',q:'Someone asks ඔයාගේ නම මොකක්ද. You answer…',o:['මගේ නම නිමල්','ඔයාගේ නම මොකක්ද','මේ මගේ යාළුවා','හොඳින්'],a:0},
{t:'wb',q:'Ask: what is your name?',a:['ඔයාගේ','නම','මොකක්ද'],pool:['ඔයාගේ','නම','මොකක්ද','මගේ']},
{t:'li',q:'Listen — which word?',say:'යාළුවා',o:['යාළුවා','නම','අක්කා','ඔයා'],a:0},
{t:'mc',q:'Two nouns side by side (මගේ නම නිමල්) make…',o:['a complete sentence','half a sentence','a question','a list only'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඔයාගේ නම මොකක්ද',o:['ඔයාගේ නම මොකක්ද','මගේ නම','මේ මගේ යාළුවා','ස්තූතියි'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මගේ නම','my name'],['ඔයාගේ නම මොකක්ද','what is your name?'],['මේ මගේ යාළුවා','this is my friend'],['යාළුවා','friend']]},
{t:'mc',q:'The word that introduces someone standing next to you:',o:['මේ','නම','ඔයා','හරි'],a:0}]},
{id:'si_intro_5',title:'Checkpoint',step:'checkpoint',meta:'Introductions mastered?',vocab:[],ex:[
{t:'mc',q:'What does නම mean?',d:'නම',r:'nama',o:['name','friend','I','this'],a:0},
{t:'wb',q:'Say: my name is Kamala',a:['මගේ','නම','කමලා'],pool:['මගේ','නම','කමලා','මොකක්ද']},
{t:'mc',q:'How do you ask a name?',o:['ඔයාගේ නම මොකක්ද','මගේ නම නිමල්','කොහොමද','මේ මගේ යාළුවා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මේ මගේ යාළුවා',o:['මේ මගේ යාළුවා','මගේ නම','ඔයාගේ නම මොකක්ද','යාළුවා'],a:0},
{t:'mc',q:'Sinhala needs a word for "is" between nouns:',o:['no — they sit side by side','yes, always','only for names','only in questions'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['නම','name'],['මගේ නම','my name'],['යාළුවා','friend'],['මේ','this']]}]},

/* --- Topic 14: time words --- */
{id:'si_time1',title:'Today & tomorrow',step:'learn',meta:'අද හෙට ඊයේ දැන් උදේ හවස රෑ',vocab:[['අද','adha','today'],['හෙට','heta','tomorrow'],['ඊයේ','iiyee','yesterday'],['දැන්','dhaen','now'],['පස්සේ','passee','later'],['උදේ','udhee','morning'],['හවස','hawasa','evening'],['රෑ','raee','night']],ex:[
{t:'note',tag:'The three days',q:'අද හෙට ඊයේ',body:'<p><span class="deva">අද</span> <b>adha</b> today · <span class="deva">හෙට</span> <b>heta</b> tomorrow · <span class="deva">ඊයේ</span> <b>iiyee</b> yesterday.</p><p>Plus the pair you will use constantly: <span class="deva">දැන්</span> <b>dhaen</b> now · <span class="deva">පස්සේ</span> <b>passee</b> later.</p>',eg:[['අද','adha','today'],['හෙට','heta','tomorrow'],['ඊයේ','iiyee','yesterday'],['දැන්','dhaen','now'],['පස්සේ','passee','later']]},
{t:'mc',q:'What does හෙට mean?',d:'හෙට',r:'heta',o:['tomorrow','today','yesterday','now'],a:0},
{t:'mc',q:'What does දැන් mean?',d:'දැන්',r:'dhaen',o:['now','later','night','morning'],a:0},
{t:'note',tag:'Parts of the day',q:'උදේ හවස රෑ',body:'<p><span class="deva">උදේ</span> <b>udhee</b> morning · <span class="deva">හවස</span> <b>hawasa</b> evening · <span class="deva">රෑ</span> <b>raee</b> night.</p><p>They stack naturally: <span class="deva">අද උදේ</span> <b>adha udhee</b> = this morning, <span class="deva">හෙට හවස</span> <b>heta hawasa</b> = tomorrow evening.</p>',eg:[['උදේ','udhee','morning'],['හවස','hawasa','evening'],['රෑ','raee','night'],['හෙට හවස','heta hawasa','tomorrow evening']]},
{t:'mc',q:'What does උදේ mean?',d:'උදේ',r:'udhee',o:['morning','evening','night','later'],a:0},
{t:'mc',q:'අද උදේ means…',d:'අද උදේ',r:'adha udhee',o:['this morning','tomorrow morning','last night','this evening'],a:0}]},
{id:'si_time1_2',title:'Hear them',step:'recognize',meta:'Spot the time words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'අද',o:['අද','හෙට','ඊයේ','දැන්'],a:0},
{t:'li',q:'Listen — which word?',say:'රෑ',o:['රෑ','උදේ','හවස','හෙට'],a:0},
{t:'mc',q:'Which word means "yesterday"?',o:['ඊයේ','අද','හෙට','පස්සේ'],a:0},
{t:'mc',q:'Which word means "evening"?',o:['හවස','උදේ','රෑ','දැන්'],a:0},
{t:'li',q:'Listen — which word?',say:'දැන්',o:['දැන්','පස්සේ','අද','රෑ'],a:0},
{t:'mc',q:'පස්සේ means…',d:'පස්සේ',r:'passee',o:['later','now','early','never'],a:0},
{t:'li',q:'Listen — which word?',say:'උදේ',o:['උදේ','හවස','ඊයේ','අද'],a:0}]},
{id:'si_time1_3',title:'Pair them up',step:'build',meta:'Match time and meaning',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['අද','today'],['හෙට','tomorrow'],['ඊයේ','yesterday'],['දැන්','now']]},
{t:'mc',q:'Which word means "night"?',o:['රෑ','හවස','උදේ','දැන්'],a:0},
{t:'mc',q:'හෙට උදේ means…',d:'හෙට උදේ',r:'heta udhee',o:['tomorrow morning','this morning','yesterday morning','tonight'],a:0},
{t:'li',q:'Listen — which word?',say:'හවස',o:['හවස','උදේ','රෑ','පස්සේ'],a:0},
{t:'mc',q:'"Not now — later." The word:',o:['පස්සේ','දැන්','අද','ඊයේ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['උදේ','morning'],['හවස','evening'],['රෑ','night'],['පස්සේ','later']]}]},
{id:'si_time1_4',title:'Mix it',step:'mix',meta:'Stack the time words',vocab:[],ex:[
{t:'mc',q:'What does ඊයේ mean?',d:'ඊයේ',r:'iiyee',o:['yesterday','today','tomorrow','later'],a:0},
{t:'li',q:'Listen — which phrase?',say:'හෙට හවස',o:['හෙට හවස','අද උදේ','ඊයේ රෑ','දැන්'],a:0},
{t:'mc',q:'ඊයේ රෑ means…',d:'ඊයේ රෑ',r:'iiyee raee',o:['last night','tomorrow night','this morning','later tonight'],a:0},
{t:'mc',q:'Which word means "now"?',o:['දැන්','පස්සේ','අද','උදේ'],a:0},
{t:'li',q:'Listen — which word?',say:'හෙට',o:['හෙට','අද','ඊයේ','හවස'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['අද උදේ','this morning'],['හෙට හවස','tomorrow evening'],['ඊයේ රෑ','last night'],['දැන්','now']]},
{t:'mc',q:'Time words stack like…',o:['අද + උදේ = this morning','උදේ + අද = this morning','they never combine','only with numbers'],a:0}]},
{id:'si_time1_5',title:'Checkpoint',step:'checkpoint',meta:'Time words mastered?',vocab:[],ex:[
{t:'mc',q:'What does අද mean?',d:'අද',r:'adha',o:['today','tomorrow','now','yesterday'],a:0},
{t:'li',q:'Listen — which word?',say:'ඊයේ',o:['ඊයේ','අද','හෙට','උදේ'],a:0},
{t:'mc',q:'Which word means "morning"?',o:['උදේ','හවස','රෑ','දැන්'],a:0},
{t:'mc',q:'හෙට රෑ means…',d:'හෙට රෑ',o:['tomorrow night','last night','this evening','later'],a:0},
{t:'li',q:'Listen — which word?',say:'පස්සේ',o:['පස්සේ','දැන්','හවස','රෑ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['අද','today'],['හෙට','tomorrow'],['දැන්','now'],['රෑ','night']]}]},

/* ===================== ZONE 3 · SAY A SENTENCE ===================== */
/* --- Topic 15: SOV & the -nawaa verb --- */
{id:'si_sov',title:'Verbs at the end',step:'learn',meta:'මම බත් කනවා — the sentence engine',vocab:[['කනවා','kanawaa','eats'],['බොනවා','bonawaa','drinks'],['යනවා','yanawaa','goes'],['එනවා','enawaa','comes'],['මම බත් කනවා','mama bath kanawaa','I eat rice']],ex:[
{t:'note',tag:'The golden rule',q:'Verb goes LAST',body:'<p>A Sinhala sentence saves the verb for the end: <span class="deva">මම බත් කනවා</span> <b>mama bath kanawaa</b> — literally "I rice eat".</p><p>Meet your first four verbs, all wearing the <b>-නවා</b> ending: <span class="deva">කනවා</span> eat · <span class="deva">බොනවා</span> drink · <span class="deva">යනවා</span> go · <span class="deva">එනවා</span> come.</p>',eg:[['මම බත් කනවා','mama bath kanawaa','I eat rice'],['මම තේ බොනවා','mama thee bonawaa','I drink tea']]},
{t:'mc',q:'Where does the Sinhala verb sit?',o:['at the end','at the start','after the subject','anywhere'],a:0},
{t:'mc',q:'What does යනවා mean?',d:'යනවා',r:'yanawaa',o:['goes','comes','eats','drinks'],a:0},
{t:'note',tag:'The freebie',q:'One form for everyone',body:'<p>Here is the best news in this whole course: spoken Sinhala verbs <b>never change for the person</b>. <span class="deva">මම කනවා</span>, <span class="deva">අපි කනවා</span>, <span class="deva">එයා කනවා</span> — same word!</p><p>Bonus: it covers the future too. <span class="deva">මම හෙට යනවා</span> <b>mama heta yanawaa</b> = I will go tomorrow. No conjugation tables. Ever.</p>',eg:[['අපි කනවා','api kanawaa','we eat'],['එයා එනවා','eyaa enawaa','he / she comes'],['මම හෙට යනවා','mama heta yanawaa','I will go tomorrow']]},
{t:'wb',q:'Build: I eat rice',a:['මම','බත්','කනවා'],pool:['මම','බත්','කනවා','බොනවා']},
{t:'mc',q:'"We drink tea" — the verb is…',d:'අපි තේ බොනවා',r:'api thee bonawaa',o:['බොනවා','කනවා','යනවා','එනවා'],a:0},
{t:'wb',q:'Build: he comes tomorrow',a:['එයා','හෙට','එනවා'],pool:['එයා','හෙට','එනවා','යනවා']}]},
{id:'si_sov_2',title:'Hear the verbs',step:'recognize',meta:'Spot කනවා බොනවා යනවා එනවා',vocab:[],ex:[
{t:'li',q:'Listen — which verb?',say:'කනවා',o:['කනවා','බොනවා','යනවා','එනවා'],a:0},
{t:'li',q:'Listen — which verb?',say:'එනවා',o:['එනවා','යනවා','කනවා','බොනවා'],a:0},
{t:'mc',q:'Which verb means "drinks"?',o:['බොනවා','කනවා','එනවා','යනවා'],a:0},
{t:'mc',q:'මම බත් කනවා means…',d:'මම බත් කනවා',r:'mama bath kanawaa',o:['I eat rice','I drink tea','I go home','rice eats me'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මම තේ බොනවා',o:['මම තේ බොනවා','මම බත් කනවා','මම හෙට යනවා','එයා එනවා'],a:0},
{t:'mc',q:'අපි කනවා and මම කනවා share the same verb because…',o:['verbs never change for person','api is singular','it is a mistake','kanawaa is special'],a:0},
{t:'li',q:'Listen — which verb?',say:'යනවා',o:['යනවා','එනවා','බොනවා','කනවා'],a:0}]},
{id:'si_sov_3',title:'Build sentences',step:'build',meta:'Subject, thing, verb',vocab:[],ex:[
{t:'match',q:'Match verb and meaning',pairs:[['කනවා','eats'],['බොනවා','drinks'],['යනවා','goes'],['එනවා','comes']]},
{t:'wb',q:'Build: we drink tea',a:['අපි','තේ','බොනවා'],pool:['අපි','තේ','බොනවා','මම']},
{t:'mc',q:'Pick the correct order:',o:['මම බත් කනවා','කනවා මම බත්','බත් කනවා මම','මම කනවා බත්'],a:0},
{t:'wb',q:'Build: she goes home tomorrow — start එයා',a:['එයා','හෙට','ගෙදර','යනවා'],pool:['එයා','හෙට','ගෙදර','යනවා','එනවා']},
{t:'li',q:'Listen — which sentence?',say:'අපි කනවා',o:['අපි කනවා','මම කනවා','එයා එනවා','අපි යනවා'],a:0},
{t:'mc',q:'"I will go tomorrow" uses which verb form?',o:['යනවා — same as today','a special future form','යනවා plus will','none'],a:0}]},
{id:'si_sov_4',title:'Mix it',step:'mix',meta:'Your first real sentences',vocab:[],ex:[
{t:'mc',q:'What does එනවා mean?',d:'එනවා',r:'enawaa',o:['comes','goes','eats','drinks'],a:0},
{t:'wb',q:'Build: I drink water',a:['මම','වතුර','බොනවා'],pool:['මම','වතුර','බොනවා','කනවා']},
{t:'li',q:'Listen — which sentence?',say:'මම හෙට යනවා',o:['මම හෙට යනවා','මම බත් කනවා','අපි තේ බොනවා','එයා එනවා'],a:0},
{t:'mc',q:'එයා අද එනවා means…',d:'එයා අද එනවා',r:'eyaa adha enawaa',o:['he / she comes today','I come today','she came yesterday','we come today'],a:0},
{t:'wb',q:'Build: we eat hoppers — hoppers = ආප්ප',a:['අපි','ආප්ප','කනවා'],pool:['අපි','ආප්ප','කනවා','බත්']},
{t:'match',q:'Match sentence and meaning',pairs:[['මම බත් කනවා','I eat rice'],['අපි තේ බොනවා','we drink tea'],['එයා හෙට එනවා','he comes tomorrow'],['මම ගෙදර යනවා','I go home']]},
{t:'mc',q:'How many verb endings must you memorize for I / you / we / they?',o:['one — the same -නවා','four','six','twelve'],a:0}]},
{id:'si_sov_5',title:'Checkpoint',step:'checkpoint',meta:'Sentence engine running?',vocab:[],ex:[
{t:'mc',q:'What does බොනවා mean?',d:'බොනවා',r:'bonawaa',o:['drinks','eats','comes','goes'],a:0},
{t:'wb',q:'Build: I eat rice',a:['මම','බත්','කනවා'],pool:['මම','බත්','කනවා','යනවා']},
{t:'li',q:'Listen — which verb?',say:'බොනවා',o:['බොනවා','කනවා','එනවා','යනවා'],a:0},
{t:'mc',q:'The verb sits…',o:['last','first','second','before the subject'],a:0},
{t:'wb',q:'Build: we go tomorrow',a:['අපි','හෙට','යනවා'],pool:['අපි','හෙට','යනවා','අද']},
{t:'match',q:'Match verb and meaning',pairs:[['කනවා','eats'],['බොනවා','drinks'],['යනවා','goes'],['එනවා','comes']]}]},

/* --- Topic 16: innawaa vs thiyenawaa --- */
{id:'si_be',title:'Being somewhere',step:'learn',meta:'ඉන්නවා vs තියෙනවා',vocab:[['ඉන්නවා','innawaa','is / stays (people & animals)'],['තියෙනවා','thiyenawaa','is / there is (things)'],['ගෙදර','gedhara','home / house'],['මම ගෙදර ඉන්නවා','mama gedhara innawaa','I am at home'],['වතුර තියෙනවා','wathura thiyenawaa','there is water']],ex:[
{t:'note',tag:'Two ways to be',q:'ඉන්නවා & තියෙනවා',body:'<p>Sinhala has two "to be somewhere" verbs, split by what kind of thing you are:</p><p><b>Living beings</b> use <span class="deva">ඉන්නවා</span> <b>innawaa</b>: <span class="deva">මම ගෙදර ඉන්නවා</span> = I am at home.</p><p><b>Things</b> use <span class="deva">තියෙනවා</span> <b>thiyenawaa</b>: <span class="deva">වතුර තියෙනවා</span> = there is water.</p>',eg:[['මම ගෙදර ඉන්නවා','mama gedhara innawaa','I am at home'],['වතුර තියෙනවා','wathura thiyenawaa','there is water']]},
{t:'mc',q:'Which verb goes with people?',o:['ඉන්නවා','තියෙනවා','කනවා','යනවා'],a:0},
{t:'mc',q:'Which verb goes with things?',o:['තියෙනවා','ඉන්නවා','එනවා','බොනවා'],a:0},
{t:'note',tag:'Home base',q:'ගෙදර',body:'<p><span class="deva">ගෙදර</span> <b>gedhara</b> = house or home — and by itself it already means "at home": <span class="deva">අම්මා ගෙදර ඉන්නවා</span> <b>ammaa gedhara innawaa</b> = mother is at home.</p><p>It also means "homeward": <span class="deva">මම ගෙදර යනවා</span> = I am going home.</p>',eg:[['අම්මා ගෙදර ඉන්නවා','ammaa gedhara innawaa','mother is at home'],['මම ගෙදර යනවා','mama gedhara yanawaa','I am going home']]},
{t:'wb',q:'Build: mother is at home',a:['අම්මා','ගෙදර','ඉන්නවා'],pool:['අම්මා','ගෙදර','ඉන්නවා','තියෙනවා']},
{t:'mc',q:'"There is tea" —',d:'තේ තියෙනවා',r:'thee thiyenawaa',o:['තේ තියෙනවා','තේ ඉන්නවා','තේ කනවා','තේ එනවා'],a:0}]},
{id:'si_be_2',title:'Hear it',step:'recognize',meta:'Living or thing?',vocab:[],ex:[
{t:'li',q:'Listen — which verb?',say:'ඉන්නවා',o:['ඉන්නවා','තියෙනවා','එනවා','යනවා'],a:0},
{t:'li',q:'Listen — which verb?',say:'තියෙනවා',o:['තියෙනවා','ඉන්නවා','බොනවා','කනවා'],a:0},
{t:'mc',q:'අයියා ගෙදර ___ — pick the verb:',o:['ඉන්නවා','තියෙනවා','යනවා','බොනවා'],a:0},
{t:'mc',q:'වතුර ___ — pick the verb:',o:['තියෙනවා','ඉන්නවා','එනවා','කනවා'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මම ගෙදර ඉන්නවා',o:['මම ගෙදර ඉන්නවා','මම ගෙදර යනවා','වතුර තියෙනවා','අම්මා එනවා'],a:0},
{t:'mc',q:'What does ගෙදර mean by itself?',d:'ගෙදර',r:'gedhara',o:['home — and "at home"','only a building','garden','village'],a:0},
{t:'li',q:'Listen — which sentence?',say:'වතුර තියෙනවා',o:['වතුර තියෙනවා','තේ තියෙනවා','මම ඉන්නවා','වතුර බොනවා'],a:0}]},
{id:'si_be_3',title:'Build it',step:'build',meta:'Who is where',vocab:[],ex:[
{t:'match',q:'Match sentence and meaning',pairs:[['මම ගෙදර ඉන්නවා','I am at home'],['වතුර තියෙනවා','there is water'],['මම ගෙදර යනවා','I am going home'],['අම්මා ඉන්නවා','mother is here']]},
{t:'wb',q:'Build: there is tea',a:['තේ','තියෙනවා'],pool:['තේ','තියෙනවා','ඉන්නවා']},
{t:'mc',q:'Why ඉන්නවා for අම්මා but තියෙනවා for වතුර?',o:['living beings vs things','women vs men','big vs small','no reason'],a:0},
{t:'wb',q:'Build: father is at home',a:['තාත්තා','ගෙදර','ඉන්නවා'],pool:['තාත්තා','ගෙදර','ඉන්නවා','යනවා']},
{t:'li',q:'Listen — which verb?',say:'ඉන්නවා',o:['ඉන්නවා','එනවා','තියෙනවා','යනවා'],a:0},
{t:'mc',q:'බත් තියෙනවා means…',d:'බත් තියෙනවා',r:'bath thiyenawaa',o:['there is rice','the rice left','someone eats rice','rice is living'],a:0}]},
{id:'si_be_4',title:'Mix it',step:'mix',meta:'ඉන්නවා තියෙනවා & friends',vocab:[],ex:[
{t:'mc',q:'Pick the right verb: යාළුවා ගෙදර ___',o:['ඉන්නවා','තියෙනවා','බොනවා','තේ'],a:0},
{t:'wb',q:'Build: I am at home today',a:['මම','අද','ගෙදර','ඉන්නවා'],pool:['මම','අද','ගෙදර','ඉන්නවා','හෙට']},
{t:'li',q:'Listen — which sentence?',say:'අම්මා ගෙදර ඉන්නවා',o:['අම්මා ගෙදර ඉන්නවා','මම ගෙදර ඉන්නවා','තාත්තා එනවා','වතුර තියෙනවා'],a:0},
{t:'mc',q:'"There is" for things is…',o:['තියෙනවා','ඉන්නවා','ඕනැ','එනවා'],a:0},
{t:'mc',q:'Which sentence is correct?',o:['වතුර තියෙනවා','වතුර ඉන්නවා','අක්කා තියෙනවා','බත් ඉන්නවා'],a:0},
{t:'mc',q:'මම ගෙදර යනවා vs මම ගෙදර ඉන්නවා — the difference:',o:['going home vs being at home','same meaning','past vs present','question vs statement'],a:0}]},
{id:'si_be_5',title:'Checkpoint',step:'checkpoint',meta:'Two be-verbs mastered?',vocab:[],ex:[
{t:'mc',q:'People and animals use…',o:['ඉන්නවා','තියෙනවා','කනවා','දෙන්න'],a:0},
{t:'wb',q:'Build: there is water',a:['වතුර','තියෙනවා'],pool:['වතුර','තියෙනවා','ඉන්නවා']},
{t:'li',q:'Listen — which verb?',say:'තියෙනවා',o:['තියෙනවා','ඉන්නවා','යනවා','බොනවා'],a:0},
{t:'mc',q:'ගෙදර can mean…',o:['home AND at home','only house','only family','only village'],a:0},
{t:'wb',q:'Build: mother is at home',a:['අම්මා','ගෙදර','ඉන්නවා'],pool:['අම්මා','ගෙදර','ඉන්නවා','එනවා']},
{t:'match',q:'Match sentence and meaning',pairs:[['මම ගෙදර ඉන්නවා','I am at home'],['තේ තියෙනවා','there is tea'],['එයා ගෙදර යනවා','he is going home'],['අපි ඉන්නවා','we are here']]}]},

/* --- Topic 17: 4-way this & that --- */
{id:'si_dem',title:'This, that & THAT',step:'learn',meta:'මේක ඕක අරක ඒක — 4-way pointing',vocab:[['මේක','meeka','this (near me)'],['ඕක','ooka','that (near you)'],['අරක','araka','that over there (visible)'],['ඒක','eeka','it / that (out of sight)'],['පොත','potha','book']],ex:[
{t:'note',tag:'Four, not two',q:'මේක ඕක අරක ඒක',body:'<p>English points two ways (this/that). Sinhala points <b>four</b>:</p><p><span class="deva">මේක</span> <b>meeka</b> — near ME · <span class="deva">ඕක</span> <b>ooka</b> — near YOU · <span class="deva">අරක</span> <b>araka</b> — over there, we can both see it · <span class="deva">ඒක</span> <b>eeka</b> — out of sight, the one we mentioned.</p>',eg:[['මේක','meeka','this by me'],['ඕක','ooka','that by you'],['අරක','araka','that over there'],['ඒක','eeka','it (not visible)']]},
{t:'mc',q:'Something in YOUR OWN hand is…',o:['මේක','ඕක','අරක','ඒක'],a:0},
{t:'mc',q:'Something in the OTHER person’s hand is…',o:['ඕක','මේක','අරක','ඒක'],a:0},
{t:'note',tag:'Point & say',q:'No "is" needed',body:'<p>Point and name — that is a full sentence: <span class="deva">මේක වතුර</span> <b>meeka wathura</b> = this is water. <span class="deva">අරක කඩේ</span>? Wait for Zone 4! For now: <span class="deva">මේක පොත</span>? Better: <span class="deva">මේක මගේ පොත</span> <b>meeka magee potha</b> = this is my book (<span class="deva">පොත</span> <b>potha</b> = book).</p><p>Before a noun the pointers shrink: <span class="deva">මේ පොත</span> <b>mee potha</b> = this book.</p>',eg:[['මේක වතුර','meeka wathura','this is water'],['මේ පොත','mee potha','this book']]},
{t:'mc',q:'මේක වතුර means…',d:'මේක වතුර',r:'meeka wathura',o:['this is water','that was water','is this water?','water, please'],a:0},
{t:'mc',q:'The far-away one you can still SEE:',o:['අරක','ඒක','මේක','ඕක'],a:0}]},
{id:'si_dem_2',title:'Hear them',step:'recognize',meta:'Spot the four pointers',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'මේක',o:['මේක','ඕක','අරක','ඒක'],a:0},
{t:'li',q:'Listen — which word?',say:'ඒක',o:['ඒක','ඕක','මේක','අරක'],a:0},
{t:'mc',q:'Which pointer means "that, near you"?',o:['ඕක','මේක','අරක','ඒක'],a:0},
{t:'mc',q:'Which pointer is for something out of sight?',o:['ඒක','අරක','ඕක','මේක'],a:0},
{t:'li',q:'Listen — which word?',say:'අරක',o:['අරක','ඒක','ඕක','මේක'],a:0},
{t:'mc',q:'What does පොත mean?',d:'පොත',r:'potha',o:['book','shop','water','pot'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මේක වතුර',o:['මේක වතුර','මේක පොත','ඕක තේ','අරක ගෙදර'],a:0}]},
{id:'si_dem_3',title:'Build it',step:'build',meta:'Point at things',vocab:[],ex:[
{t:'match',q:'Match pointer and meaning',pairs:[['මේක','this (by me)'],['ඕක','that (by you)'],['අරක','that (visible, far)'],['ඒක','it (out of sight)']]},
{t:'wb',q:'Build: this is my book',a:['මේක','මගේ','පොත'],pool:['මේක','මගේ','පොත','ඕක']},
{t:'mc',q:'Your friend holds a cup. "Is that tea?" starts with…',o:['ඕක','මේක','ඒක','අරක'],a:0},
{t:'wb',q:'Build: this is water',a:['මේක','වතුර'],pool:['මේක','වතුර','ඒක']},
{t:'li',q:'Listen — which word?',say:'ඕක',o:['ඕක','ඒක','මේක','අරක'],a:0},
{t:'mc',q:'Before a noun, මේක becomes…',o:['මේ','මෙ','මා','it stays මේක'],a:0}]},
{id:'si_dem_4',title:'Mix it',step:'mix',meta:'All four pointers',vocab:[],ex:[
{t:'mc',q:'A bus far down the road, both of you watching:',o:['අරක','මේක','ඕක','ඒක'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මේක මගේ පොත',o:['මේක මගේ පොත','මේක වතුර','ඕක තේ','ඒක බත්'],a:0},
{t:'mc',q:'Talking about a shop you both visited yesterday (not here now):',o:['ඒක','මේක','ඕක','අරක'],a:0},
{t:'wb',q:'Build: that (by you) is tea',a:['ඕක','තේ'],pool:['ඕක','තේ','මේක']},
{t:'li',q:'Listen — which word?',say:'මේක',o:['මේක','ඕක','ඒක','අරක'],a:0},
{t:'match',q:'Match pointer and situation',pairs:[['මේක','in my hand'],['ඕක','in your hand'],['අරක','across the road'],['ඒක','the one we mentioned']]},
{t:'mc',q:'මේ පොත මගේ means…',d:'මේ පොත මගේ',r:'mee potha magee',o:['this book is mine','my book is lost','this is a book','give me the book'],a:0}]},
{id:'si_dem_5',title:'Checkpoint',step:'checkpoint',meta:'4-way pointing mastered?',vocab:[],ex:[
{t:'mc',q:'"This" for the thing in my hand:',o:['මේක','ඕක','අරක','ඒක'],a:0},
{t:'li',q:'Listen — which word?',say:'අරක',o:['අරක','මේක','ඕක','ඒක'],a:0},
{t:'mc',q:'The out-of-sight "it":',o:['ඒක','අරක','ඕක','මේක'],a:0},
{t:'wb',q:'Build: this is my book',a:['මේක','මගේ','පොත'],pool:['මේක','මගේ','පොත','වතුර']},
{t:'li',q:'Listen — which word?',say:'ඒක',o:['ඒක','ඕක','අරක','මේක'],a:0},
{t:'match',q:'Match pointer and meaning',pairs:[['මේක','this (by me)'],['ඕක','that (by you)'],['අරක','that (visible)'],['ඒක','it (unseen)']]}]},

/* --- Topic 18: negation --- */
{id:'si_neg',title:'Say no',step:'learn',meta:'-න්නේ නෑ & නෙමෙයි',vocab:[['නෑ','naee','no / not'],['දන්නවා','dhannawaa','knows'],['මම දන්නේ නෑ','mama dhannee naee','I do not know'],['මම කන්නේ නෑ','mama kannee naee','I do not eat'],['නෙමෙයි','nemeyi','is not (for nouns)']],ex:[
{t:'note',tag:'Flip the verb',q:'-නවා → -න්නේ නෑ',body:'<p>To say NO to a verb, swap <b>-නවා</b> for <b>-න්නේ</b> and add <span class="deva">නෑ</span>: <span class="deva">කනවා</span> → <span class="deva">කන්නේ නෑ</span> <b>kannee naee</b> = does not eat. <span class="deva">යනවා</span> → <span class="deva">යන්නේ නෑ</span>. <span class="deva">බොනවා</span> → <span class="deva">බොන්නේ නෑ</span>.</p><p>Learn this one by heart today: <span class="deva">මම දන්නේ නෑ</span> <b>mama dhannee naee</b> = I do not know (from <span class="deva">දන්නවා</span> <b>dhannawaa</b> = know).</p>',eg:[['කන්නේ නෑ','kannee naee','does not eat'],['මම දන්නේ නෑ','mama dhannee naee','I do not know']]},
{t:'mc',q:'How do you say "does not go"?',o:['යන්නේ නෑ','යනවා නෑ','නෑ යනවා','යන්නවා'],a:0},
{t:'mc',q:'මම දන්නේ නෑ means…',d:'මම දන්නේ නෑ',r:'mama dhannee naee',o:['I do not know','I do not go','I know','who knows?'],a:0},
{t:'note',tag:'Not that thing',q:'නෙමෙයි',body:'<p>For nouns — "this is NOT tea" — use <span class="deva">නෙමෙයි</span> <b>nemeyi</b>: <span class="deva">මේක තේ නෙමෙයි</span> <b>meeka thee nemeyi</b>.</p><p>And plain "no" as an answer is just <span class="deva">නෑ</span> <b>naee</b>.</p>',eg:[['මේක තේ නෙමෙයි','meeka thee nemeyi','this is not tea'],['නෑ','naee','no']]},
{t:'mc',q:'"This is not water" =',o:['මේක වතුර නෙමෙයි','මේක වතුර නෑ','වතුර කන්නේ නෑ','මේක නෑ වතුර'],a:0},
{t:'wb',q:'Build: I do not know',a:['මම','දන්නේ','නෑ'],pool:['මම','දන්නේ','නෑ','දන්නවා']}]},
{id:'si_neg_2',title:'Hear the no',step:'recognize',meta:'Spot the negatives',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'මම දන්නේ නෑ',o:['මම දන්නේ නෑ','මම කන්නේ නෑ','මම දන්නවා','නෙමෙයි'],a:0},
{t:'mc',q:'කන්නේ නෑ is the opposite of…',o:['කනවා','බොනවා','යනවා','දන්නවා'],a:0},
{t:'li',q:'Listen — which word?',say:'නෙමෙයි',o:['නෙමෙයි','නෑ','නම','මම'],a:0},
{t:'mc',q:'Which negative fits a NOUN sentence?',o:['නෙමෙයි','-න්නේ නෑ','දන්නේ','ඔව්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'යන්නේ නෑ',o:['යන්නේ නෑ','කන්නේ නෑ','බොන්නේ නෑ','දන්නේ නෑ'],a:0},
{t:'mc',q:'What does දන්නවා mean?',d:'දන්නවා',r:'dhannawaa',o:['knows','eats','gives','sees'],a:0},
{t:'li',q:'Listen — which word?',say:'නෑ',o:['නෑ','නම','මේ','දැන්'],a:0}]},
{id:'si_neg_3',title:'Build it',step:'build',meta:'Flip verbs to no',vocab:[],ex:[
{t:'match',q:'Match verb and its negative',pairs:[['කනවා','කන්නේ නෑ'],['යනවා','යන්නේ නෑ'],['බොනවා','බොන්නේ නෑ'],['දන්නවා','දන්නේ නෑ']]},
{t:'wb',q:'Build: I do not eat rice',a:['මම','බත්','කන්නේ','නෑ'],pool:['මම','බත්','කන්නේ','නෑ','කනවා']},
{t:'mc',q:'"This is not my book" =',o:['මේක මගේ පොත නෙමෙයි','මේක මගේ පොත නෑ','මගේ පොත කන්නේ නෑ','මේක නෙමෙයි පොත'],a:0},
{t:'wb',q:'Build: this is not tea',a:['මේක','තේ','නෙමෙයි'],pool:['මේක','තේ','නෙමෙයි','නෑ']},
{t:'li',q:'Listen — which phrase?',say:'මම කන්නේ නෑ',o:['මම කන්නේ නෑ','මම දන්නේ නෑ','මම යන්නේ නෑ','මම කනවා'],a:0},
{t:'mc',q:'The survival phrase "I do not know":',o:['මම දන්නේ නෑ','මම දන්නවා','දන්නේ ඔව්','මම නෙමෙයි'],a:0}]},
{id:'si_neg_4',title:'Mix it',step:'mix',meta:'Yes things & no things',vocab:[],ex:[
{t:'mc',q:'එයා එන්නේ නෑ means…',d:'එයා එන්නේ නෑ',r:'eyaa ennee naee',o:['he / she is not coming','he / she is coming','do not come!','nobody came'],a:0},
{t:'wb',q:'Build: we are not going today',a:['අපි','අද','යන්නේ','නෑ'],pool:['අපි','අද','යන්නේ','නෑ','යනවා']},
{t:'li',q:'Listen — which phrase?',say:'මේක තේ නෙමෙයි',o:['මේක තේ නෙමෙයි','මේක වතුර නෙමෙයි','මම දන්නේ නෑ','මේක තේ'],a:0},
{t:'mc',q:'Verb negatives use ___, noun negatives use ___',o:['-න්නේ නෑ / නෙමෙයි','නෙමෙයි / -න්නේ නෑ','නෑ / නෑ','ඔව් / නෑ'],a:0},
{t:'mc',q:'Turn බොනවා negative:',d:'බොනවා',r:'bonawaa',o:['බොන්නේ නෑ','බොනවා නෑ','නෑ බොනවා','බොන්නවා'],a:0},
{t:'match',q:'Match sentence and meaning',pairs:[['මම දන්නේ නෑ','I do not know'],['මේක තේ නෙමෙයි','this is not tea'],['අපි යන්නේ නෑ','we are not going'],['නෑ','no']]},
{t:'wb',q:'Build: father does not drink tea',a:['තාත්තා','තේ','බොන්නේ','නෑ'],pool:['තාත්තා','තේ','බොන්නේ','නෑ','බොනවා']}]},
{id:'si_neg_5',title:'Checkpoint',step:'checkpoint',meta:'Negation mastered?',vocab:[],ex:[
{t:'mc',q:'"I do not know" =',o:['මම දන්නේ නෑ','මම දන්නවා','මම නෙමෙයි','දන්නේ ඔව්'],a:0},
{t:'wb',q:'Build: I am not going',a:['මම','යන්නේ','නෑ'],pool:['මම','යන්නේ','නෑ','යනවා']},
{t:'li',q:'Listen — which phrase?',say:'දන්නේ නෑ',o:['දන්නේ නෑ','කන්නේ නෑ','යන්නේ නෑ','නෙමෙයි'],a:0},
{t:'mc',q:'"This is not rice" =',o:['මේක බත් නෙමෙයි','මේක බත් නෑ','බත් කන්නේ නෑ','මේක නෙමෙයි'],a:0},
{t:'li',q:'Listen — which word?',say:'නෙමෙයි',o:['නෙමෙයි','නෑ','දන්නවා','මේක'],a:0},
{t:'match',q:'Match verb and its negative',pairs:[['කනවා','කන්නේ නෑ'],['එනවා','එන්නේ නෑ'],['දන්නවා','දන්නේ නෑ'],['බොනවා','බොන්නේ නෑ']]}]},

/* --- Topic 19: yes/no questions --- */
{id:'si_yn',title:'Ask yes or no',step:'learn',meta:'…ද? + ඔව් / නෑ',vocab:[['ද','dha','…? (turns it into a question)'],['ඔව්','ov','yes'],['කනවද','kanawadha','eats…?'],['ඔයා යනවද','oyaa yanawadha','are you going?'],['මේක තේද','meeka theedha','is this tea?']],ex:[
{t:'note',tag:'The magic ද',q:'Add ද at the end',body:'<p>Any statement becomes a question with a tiny <span class="deva">ද</span> <b>dha</b> at the end. The verb tucks it in neatly: <span class="deva">යනවා</span> → <span class="deva">යනවද</span> <b>yanawadha</b> going?</p><p><span class="deva">ඔයා යනවද</span> <b>oyaa yanawadha</b> = are you going? · <span class="deva">මේක තේද</span> <b>meeka theedha</b> = is this tea?</p>',eg:[['ඔයා යනවද','oyaa yanawadha','are you going?'],['මේක තේද','meeka theedha','is this tea?']]},
{t:'mc',q:'What does ද do?',o:['turns a sentence into a question','makes it negative','makes it polite','marks the past'],a:0},
{t:'mc',q:'"Are you eating?" =',o:['ඔයා කනවද','ඔයා කනවා','ඔයා කන්නේ නෑ','කනවා ද ඔයා'],a:0},
{t:'note',tag:'Answering',q:'ඔව් · නෑ · or echo the verb',body:'<p><span class="deva">ඔව්</span> <b>ov</b> = yes · <span class="deva">නෑ</span> = no.</p><p>Even more natural: <b>echo the verb</b>. <span class="deva">යනවද?</span> — <span class="deva">යනවා</span> (going!) or <span class="deva">යන්නේ නෑ</span> (not going). Your Zone 3 tools all click together here.</p>',eg:[['ඔව්','ov','yes'],['යනවා','yanawaa','(yes,) going'],['යන්නේ නෑ','yannee naee','(no,) not going']]},
{t:'mc',q:'What does ඔව් mean?',d:'ඔව්',r:'ov',o:['yes','no','maybe','okay'],a:0},
{t:'mc',q:'කනවද? — the echo answer for YES:',o:['කනවා','කන්නේ නෑ','නෑ','නෙමෙයි'],a:0},
{t:'wb',q:'Ask: are you going?',a:['ඔයා','යනවද'],pool:['ඔයා','යනවද','යනවා']}]},
{id:'si_yn_2',title:'Hear the question',step:'recognize',meta:'Statement or question?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ඔයා යනවද',o:['ඔයා යනවද','ඔයා යනවා','මම යනවා','යන්නේ නෑ'],a:0},
{t:'mc',q:'යනවා vs යනවද — the question is…',o:['යනවද','යනවා','both','neither'],a:0},
{t:'li',q:'Listen — which word?',say:'ඔව්',o:['ඔව්','නෑ','ද','හරි'],a:0},
{t:'mc',q:'මේක තේද means…',d:'මේක තේද',r:'meeka theedha',o:['is this tea?','this is tea','not tea','tea please'],a:0},
{t:'li',q:'Listen — which one?',say:'කනවද',o:['කනවද','කනවා','බොනවද','යනවද'],a:0},
{t:'mc',q:'Someone asks බත් කනවද. You are hungry. Echo answer:',o:['කනවා','කන්නේ නෑ','නෙමෙයි','ද'],a:0},
{t:'li',q:'Listen — which one?',say:'මේක තේද',o:['මේක තේද','මේක තේ','මේක වතුර','තේ තියෙනවා'],a:0}]},
{id:'si_yn_3',title:'Build it',step:'build',meta:'Make questions',vocab:[],ex:[
{t:'match',q:'Match question and meaning',pairs:[['ඔයා යනවද','are you going?'],['මේක තේද','is this tea?'],['කනවද','eating?'],['ඔව්','yes']]},
{t:'wb',q:'Ask: is this water?',a:['මේක','වතුරද'],pool:['මේක','වතුරද','වතුර']},
{t:'mc',q:'Turn "එයා එනවා" into a question:',o:['එයා එනවද','එයා එනවා ද නෑ','ද එයා එනවා','එයා ද එනවා ද'],a:0},
{t:'wb',q:'Ask: are you eating rice?',a:['ඔයා','බත්','කනවද'],pool:['ඔයා','බත්','කනවද','කනවා']},
{t:'li',q:'Listen — which one?',say:'යනවද',o:['යනවද','යනවා','එනවද','කනවද'],a:0},
{t:'mc',q:'The two-letter answer pair:',o:['ඔව් / නෑ','හරි / නෑ','ඔව් / නෙමෙයි','ද / නෑ'],a:0}]},
{id:'si_yn_4',title:'Mix it',step:'mix',meta:'Ask & answer',vocab:[],ex:[
{t:'mc',q:'අම්මා ගෙදර ඉන්නවද means…',d:'අම්මා ගෙදර ඉන්නවද',r:'ammaa gedhara innawadha',o:['is mother at home?','mother is at home','mother went home','where is mother?'],a:0},
{t:'wb',q:'Ask: is there water?',a:['වතුර','තියෙනවද'],pool:['වතුර','තියෙනවද','තියෙනවා']},
{t:'li',q:'Listen — which one?',say:'ඔයා කනවද',o:['ඔයා කනවද','ඔයා යනවද','මම කනවා','ඔයා බොනවද'],a:0},
{t:'mc',q:'තේ බොනවද? You want some. Best answers:',o:['ඔව් — or echo බොනවා','නෑ','නෙමෙයි','ද'],a:0},
{t:'mc',q:'Turn "there is rice" into "is there rice?"',o:['බත් තියෙනවද','බත් තියෙනවා','බත් නෙමෙයිද','බත් ද තියෙනවා'],a:0},
{t:'match',q:'Match question and yes-echo',pairs:[['යනවද','යනවා'],['කනවද','කනවා'],['ඉන්නවද','ඉන්නවා'],['තියෙනවද','තියෙනවා']]},
{t:'li',q:'Listen — which one?',say:'තියෙනවද',o:['තියෙනවද','ඉන්නවද','තියෙනවා','යනවද'],a:0}]},
{id:'si_yn_5',title:'Checkpoint',step:'checkpoint',meta:'Questions mastered?',vocab:[],ex:[
{t:'mc',q:'The question-maker is…',o:['ද at the end','ද at the start','a rising voice only','මොකක්'],a:0},
{t:'wb',q:'Ask: are you going home?',a:['ඔයා','ගෙදර','යනවද'],pool:['ඔයා','ගෙදර','යනවද','යනවා']},
{t:'li',q:'Listen — which word?',say:'ඔව්',o:['ඔව්','නෑ','ඔයා','ද'],a:0},
{t:'mc',q:'මේක බත්ද — a natural yes:',o:['ඔව්','නෙමෙයි','යනවා','ද'],a:0},
{t:'li',q:'Listen — which one?',say:'ඉන්නවද',o:['ඉන්නවද','තියෙනවද','ඉන්නවා','යනවද'],a:0},
{t:'match',q:'Match question and meaning',pairs:[['ඔයා යනවද','are you going?'],['මේක තේද','is this tea?'],['බත් තියෙනවද','is there rice?'],['ඉන්නවද','is (someone) in?']]}]},

/* --- Topic 20: wh-questions --- */
{id:'si_wh',title:'Question words',step:'learn',meta:'මොකක්ද කවුද කොහෙද ඇයි',vocab:[['මොකක්ද','mokakdha','what?'],['කවුද','kaudha','who?'],['කොහෙද','kohedha','where?'],['ඇයි','aeyi','why?'],['තේරෙනවා','theerenawaa','understands'],['මට තේරෙන්නේ නෑ','mata theerennee naee','I do not understand']],ex:[
{t:'note',tag:'Built-in ද',q:'මොකක්ද කවුද කොහෙද',body:'<p>The question words carry their own <span class="deva">ද</span>: <span class="deva">මොකක්ද</span> <b>mokakdha</b> what? · <span class="deva">කවුද</span> <b>kaudha</b> who? · <span class="deva">කොහෙද</span> <b>kohedha</b> where? · <span class="deva">ඇයි</span> <b>aeyi</b> why?</p><p><span class="deva">මේක මොකක්ද</span> = what is this? · <span class="deva">එයා කවුද</span> = who is he? · <span class="deva">අම්මා කොහෙද</span> = where is mother?</p>',eg:[['මේක මොකක්ද','meeka mokakdha','what is this?'],['එයා කවුද','eyaa kaudha','who is that?'],['අම්මා කොහෙද','ammaa kohedha','where is mother?']]},
{t:'mc',q:'What does කොහෙද mean?',d:'කොහෙද',r:'kohedha',o:['where?','who?','what?','why?'],a:0},
{t:'mc',q:'මේක මොකක්ද means…',d:'මේක මොකක්ද',r:'meeka mokakdha',o:['what is this?','who is this?','where is this?','is this it?'],a:0},
{t:'note',tag:'The lifesaver',q:'මට තේරෙන්නේ නෑ',body:'<p>Glue two lessons together and you get the most useful sentence a learner owns: <span class="deva">මට තේරෙන්නේ නෑ</span> <b>mata theerennee naee</b> — I do not understand. (<span class="deva">තේරෙනවා</span> <b>theerenawaa</b> = understand; <span class="deva">මට</span> <b>mata</b> = to me — that little word gets a whole lesson next.)</p><p>Understood after all? <span class="deva">දැන් තේරෙනවා</span> — NOW I understand.</p>',eg:[['මට තේරෙන්නේ නෑ','mata theerennee naee','I do not understand'],['දැන් තේරෙනවා','dhaen theerenawaa','now I understand']]},
{t:'mc',q:'The lifesaver phrase means…',d:'මට තේරෙන්නේ නෑ',r:'mata theerennee naee',o:['I do not understand','I do not know','say it again','I am lost'],a:0},
{t:'mc',q:'Which word asks "who?"',o:['කවුද','මොකක්ද','කොහෙද','ඇයි'],a:0},
{t:'wb',q:'Ask: where is mother?',a:['අම්මා','කොහෙද'],pool:['අම්මා','කොහෙද','කවුද']}]},
{id:'si_wh_2',title:'Hear them',step:'recognize',meta:'Spot the question words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'මොකක්ද',o:['මොකක්ද','කවුද','කොහෙද','ඇයි'],a:0},
{t:'li',q:'Listen — which word?',say:'ඇයි',o:['ඇයි','කවුද','මොකක්ද','කොහෙද'],a:0},
{t:'mc',q:'Which word asks "where?"',o:['කොහෙද','කවුද','ඇයි','මොකක්ද'],a:0},
{t:'mc',q:'එයා කවුද means…',d:'එයා කවුද',r:'eyaa kaudha',o:['who is he / she?','where is he?','what is that?','why is she here?'],a:0},
{t:'li',q:'Listen — which word?',say:'කවුද',o:['කවුද','කොහෙද','ඇයි','මොකක්ද'],a:0},
{t:'mc',q:'ඇයි asks…',d:'ඇයි',r:'aeyi',o:['why?','what?','when?','how?'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට තේරෙන්නේ නෑ',o:['මට තේරෙන්නේ නෑ','මම දන්නේ නෑ','දැන් තේරෙනවා','මේක මොකක්ද'],a:0}]},
{id:'si_wh_3',title:'Build it',step:'build',meta:'Ask real questions',vocab:[],ex:[
{t:'match',q:'Match question word and meaning',pairs:[['මොකක්ද','what?'],['කවුද','who?'],['කොහෙද','where?'],['ඇයි','why?']]},
{t:'wb',q:'Ask: what is this?',a:['මේක','මොකක්ද'],pool:['මේක','මොකක්ද','කවුද']},
{t:'mc',q:'Your friend looks upset. You ask…',o:['ඇයි','කවුද','කොහෙද','මොකක්ද'],a:0},
{t:'wb',q:'Say: I do not understand',a:['මට','තේරෙන්නේ','නෑ'],pool:['මට','තේරෙන්නේ','නෑ','තේරෙනවා']},
{t:'li',q:'Listen — which word?',say:'කොහෙද',o:['කොහෙද','කවුද','මොකක්ද','ඇයි'],a:0},
{t:'mc',q:'The question words already contain…',o:['their own ද','a verb','the answer','ඔව්'],a:0}]},
{id:'si_wh_4',title:'Mix it',step:'mix',meta:'What, who, where, why',vocab:[],ex:[
{t:'mc',q:'A stranger knocks. From inside you call…',o:['කවුද','මොකක්ද','කොහෙද','ඇයි'],a:0},
{t:'wb',q:'Ask: who is he?',a:['එයා','කවුද'],pool:['එයා','කවුද','කොහෙද']},
{t:'li',q:'Listen — which phrase?',say:'මේක මොකක්ද',o:['මේක මොකක්ද','එයා කවුද','අම්මා කොහෙද','ඇයි'],a:0},
{t:'mc',q:'You lost your friend in the market. You ask others: යාළුවා ___',o:['කොහෙද','මොකක්ද','ඇයි','ද'],a:0},
{t:'li',q:'Listen — which phrase?',say:'දැන් තේරෙනවා',o:['දැන් තේරෙනවා','මට තේරෙන්නේ නෑ','මම දන්නේ නෑ','තේරෙනවද'],a:0},
{t:'match',q:'Match question and meaning',pairs:[['මේක මොකක්ද','what is this?'],['එයා කවුද','who is that?'],['කඩේ කොහෙද','where is the shop?'],['ඇයි','why?']]},
{t:'mc',q:'Confused by fast Sinhala? Say…',o:['මට තේරෙන්නේ නෑ','දැන් තේරෙනවා','ඔව් ඔව්','ගිහින් එන්නම්'],a:0}]},
{id:'si_wh_5',title:'Checkpoint',step:'checkpoint',meta:'Question words mastered?',vocab:[],ex:[
{t:'mc',q:'"What?" is…',o:['මොකක්ද','කවුද','ඇයි','කොහෙද'],a:0},
{t:'li',q:'Listen — which word?',say:'ඇයි',o:['ඇයි','මොකක්ද','කවුද','කොහෙද'],a:0},
{t:'wb',q:'Ask: where is the book?',a:['පොත','කොහෙද'],pool:['පොත','කොහෙද','මොකක්ද']},
{t:'mc',q:'"I do not understand" =',o:['මට තේරෙන්නේ නෑ','මම දන්නවා','දැන් තේරෙනවා','මට ඕනැ'],a:0},
{t:'li',q:'Listen — which word?',say:'කවුද',o:['කවුද','කොහෙද','ඇයි','ද'],a:0},
{t:'match',q:'Match question word and meaning',pairs:[['මොකක්ද','what?'],['කවුද','who?'],['කොහෙද','where?'],['ඇයි','why?']]}]},

/* --- Topic 21: want & need --- */
{id:'si_want',title:'Want & need',step:'learn',meta:'මට ඕනැ — the dative heart of Sinhala',vocab:[['ඕනැ','oonae','want / need'],['මට','mata','to me'],['එපා','epaa','do not want'],['මට තේ ඕනැ','mata thee oonae','I want tea'],['මට එපා','mata epaa','I do not want it'],['කැමතියි','kaemathiyi','likes']],ex:[
{t:'note',tag:'Wanting, Sinhala style',q:'මට … ඕනැ',body:'<p>Sinhala does not say "I want tea". It says "<b>to me</b> tea is-wanted": <span class="deva">මට තේ ඕනැ</span> <b>mata thee oonae</b>.</p><p><span class="deva">මට</span> = mama + <b>ට</b> "to". The whole family: <span class="deva">ඔයාට</span> <b>oyaata</b> to you · <span class="deva">එයාට</span> <b>eyaata</b> to him/her · <span class="deva">අපිට</span> <b>apita</b> to us. This "to me" pattern is the beating heart of spoken Sinhala — feelings, needs and understanding all use it.</p>',eg:[['මට තේ ඕනැ','mata thee oonae','I want tea'],['ඔයාට මොනවද ඕනැ','oyaata monawadha oonae','what do you want?']]},
{t:'mc',q:'"I want water" =',o:['මට වතුර ඕනැ','මම වතුර ඕනැ','වතුර මට කනවා','මට වතුර එපා'],a:0},
{t:'mc',q:'මට literally means…',d:'මට',r:'mata',o:['to me','I','my','me first'],a:0},
{t:'note',tag:'No thanks & likes',q:'එපා · කැමතියි',body:'<p>The opposite of ඕනැ is the wonderfully firm <span class="deva">එපා</span> <b>epaa</b>: <span class="deva">මට එපා</span> = I do not want it (polite but final — perfect for pushy sellers).</p><p>To LIKE something: <span class="deva">කැමතියි</span> <b>kaemathiyi</b> — <span class="deva">මම කැමතියි</span> = I like (it). Not liking: <span class="deva">කැමති නෑ</span>.</p>',eg:[['මට එපා','mata epaa','I do not want it'],['මම කැමතියි','mama kaemathiyi','I like it'],['කැමති නෑ','kaemathi naee','do not like it']]},
{t:'mc',q:'A seller will not stop. You say, kindly but firmly…',o:['මට එපා','මට ඕනැ','ඔව්','කැමතියි'],a:0},
{t:'wb',q:'Build: I want tea',a:['මට','තේ','ඕනැ'],pool:['මට','තේ','ඕනැ','එපා']},
{t:'mc',q:'What does කැමතියි mean?',d:'කැමතියි',r:'kaemathiyi',o:['likes','wants','needs','eats'],a:0}]},
{id:'si_want_2',title:'Hear it',step:'recognize',meta:'Wants by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'මට තේ ඕනැ',o:['මට තේ ඕනැ','මට එපා','මට වතුර ඕනැ','මම කැමතියි'],a:0},
{t:'mc',q:'Which word means "do not want"?',o:['එපා','ඕනැ','කැමතියි','නෑ'],a:0},
{t:'li',q:'Listen — which word?',say:'ඕනැ',o:['ඕනැ','එපා','ඔව්','ඔයාට'],a:0},
{t:'mc',q:'ඔයාට means…',d:'ඔයාට',r:'oyaata',o:['to you','to me','to us','to him'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට එපා',o:['මට එපා','මට ඕනැ','මම කැමතියි','මට තේරෙන්නේ නෑ'],a:0},
{t:'mc',q:'The want-pattern is…',o:['මට + thing + ඕනැ','මම + thing + ඕනැ','ඕනැ + මට + thing','thing + මම + ඕනැ'],a:0},
{t:'li',q:'Listen — which word?',say:'කැමතියි',o:['කැමතියි','ඕනැ','එපා','තේරෙනවා'],a:0}]},
{id:'si_want_3',title:'Build it',step:'build',meta:'Ask for what you need',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['මට ඕනැ','I want'],['මට එපා','I do not want'],['මම කැමතියි','I like it'],['කැමති නෑ','do not like it']]},
{t:'wb',q:'Build: I want rice',a:['මට','බත්','ඕනැ'],pool:['මට','බත්','ඕනැ','මම']},
{t:'mc',q:'"To us" is…',o:['අපිට','මට','ඔයාට','එයාට'],a:0},
{t:'wb',q:'Build: I do not want tea — start මට',a:['මට','තේ','එපා'],pool:['මට','තේ','එපා','ඕනැ']},
{t:'li',q:'Listen — which word?',say:'එපා',o:['එපා','ඕනැ','ඔව්','අපිට'],a:0},
{t:'mc',q:'Feelings & needs in Sinhala prefer which little word?',o:['මට — to me','මම — I','මගේ — my','මේ — this'],a:0}]},
{id:'si_want_4',title:'Mix it',step:'mix',meta:'Wants, needs & likes',vocab:[],ex:[
{t:'mc',q:'ඔයාට තේ ඕනැද means…',d:'ඔයාට තේ ඕනැද',r:'oyaata thee oonaedha',o:['do you want tea?','I want tea','he wants tea','is this tea?'],a:0},
{t:'wb',q:'Build: I want water',a:['මට','වතුර','ඕනැ'],pool:['මට','වතුර','ඕනැ','තියෙනවා']},
{t:'li',q:'Listen — which phrase?',say:'මම කැමතියි',o:['මම කැමතියි','මට එපා','මට ඕනැ','කැමති නෑ'],a:0},
{t:'mc',q:'Offered food you cannot eat, you decline warmly:',o:['මට එපා — ස්තූතියි','මට ඕනැ','ඔව්','මම දන්නේ නෑ'],a:0},
{t:'mc',q:'එයාට වතුර ඕනැ means…',d:'එයාට වතුර ඕනැ',r:'eyaata wathura oonae',o:['he / she wants water','I want water','give him water','there is water'],a:0},
{t:'match',q:'Match the dative family',pairs:[['මට','to me'],['ඔයාට','to you'],['එයාට','to him / her'],['අපිට','to us']]},
{t:'wb',q:'Ask: do you want rice?',a:['ඔයාට','බත්','ඕනැද'],pool:['ඔයාට','බත්','ඕනැද','ඕනැ']}]},
{id:'si_want_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 3 complete?',vocab:[],ex:[
{t:'mc',q:'"I want tea" =',o:['මට තේ ඕනැ','මම තේ ඕනැ','මට තේ එපා','තේ මම ඕනැ'],a:0},
{t:'wb',q:'Build: I do not want it — two words',a:['මට','එපා'],pool:['මට','එපා','ඕනැ']},
{t:'li',q:'Listen — which phrase?',say:'මට ඕනැ',o:['මට ඕනැ','මට එපා','මම කැමතියි','ඔයාට ඕනැ'],a:0},
{t:'mc',q:'"To him / to her" is…',o:['එයාට','ඔයාට','මට','අපිට'],a:0},
{t:'li',q:'Listen — which word?',say:'ඕනැ',o:['ඕනැ','එපා','කැමතියි','නෑ'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මට තේ ඕනැ','I want tea'],['මට එපා','I do not want it'],['මම කැමතියි','I like it'],['මට තේරෙන්නේ නෑ','I do not understand']]}]},

/* ===================== ZONE 4 · CASES & PLACES ===================== */
/* --- Topic 22: -ta = to/for --- */
{id:'si_ta',title:'To & for: -ට',step:'learn',meta:'ගෙදරට කඩේට ලංකාවට',vocab:[['කඩේ','kadee','shop'],['ගෙදරට','gedharata','(to) home'],['කඩේට','kadeeta','to the shop'],['ලංකාව','lankaawa','Sri Lanka'],['මම කඩේට යනවා','mama kadeeta yanawaa','I am going to the shop']],ex:[
{t:'note',tag:'Stick it on',q:'place + ට = to',body:'<p>You met <span class="deva">මට</span> = "to me". The same <b>ට</b> sticks to places: <span class="deva">ගෙදර</span> → <span class="deva">ගෙදරට</span> <b>gedharata</b> to home · <span class="deva">කඩේ</span> <b>kadee</b> (shop) → <span class="deva">කඩේට</span> <b>kadeeta</b> to the shop.</p><p><span class="deva">මම කඩේට යනවා</span> <b>mama kadeeta yanawaa</b> = I am going to the shop.</p>',eg:[['ගෙදරට','gedharata','to home'],['කඩේට','kadeeta','to the shop'],['මම කඩේට යනවා','mama kadeeta yanawaa','I go to the shop']]},
{t:'mc',q:'What does කඩේ mean?',d:'කඩේ',r:'kadee',o:['shop','home','road','village'],a:0},
{t:'mc',q:'"To the shop" =',o:['කඩේට','කඩේ','කඩේන්','මට'],a:0},
{t:'note',tag:'Where endings do the work',q:'ලංකාවට',body:'<p><span class="deva">ලංකාව</span> <b>lankaawa</b> = Sri Lanka (what everyone calls it). To Sri Lanka: <span class="deva">ලංකාවට</span> <b>lankaawata</b>.</p><p>English uses little words IN FRONT (to, at, from). Sinhala glues little endings ON THE BACK. Same work, opposite end.</p>',eg:[['ලංකාව','lankaawa','Sri Lanka'],['ලංකාවට','lankaawata','to Sri Lanka']]},
{t:'wb',q:'Build: I am going to the shop',a:['මම','කඩේට','යනවා'],pool:['මම','කඩේට','යනවා','කඩේ']},
{t:'mc',q:'අපි ලංකාවට යනවා means…',d:'අපි ලංකාවට යනවා',r:'api lankaawata yanawaa',o:['we are going to Sri Lanka','we live in Sri Lanka','Sri Lanka is far','we came from Sri Lanka'],a:0},
{t:'wb',q:'Build: he is coming home — home(-ward) = ගෙදරට',a:['එයා','ගෙදරට','එනවා'],pool:['එයා','ගෙදරට','එනවා','යනවා']}]},
{id:'si_ta_2',title:'Hear it',step:'recognize',meta:'Spot the -ට',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'කඩේට',o:['කඩේට','කඩේ','ගෙදරට','මට'],a:0},
{t:'li',q:'Listen — which word?',say:'ගෙදරට',o:['ගෙදරට','ගෙදර','කඩේට','ලංකාවට'],a:0},
{t:'mc',q:'කඩේ vs කඩේට — the -ට adds…',o:['"to"','"from"','"at"','nothing'],a:0},
{t:'mc',q:'Which word is just "shop" (no direction)?',o:['කඩේ','කඩේට','ගෙදරට','ලංකාවට'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මම කඩේට යනවා',o:['මම කඩේට යනවා','මම ගෙදරට යනවා','අපි ලංකාවට යනවා','මම කඩේ ඉන්නවා'],a:0},
{t:'mc',q:'ලංකාව is…',d:'ලංකාව',r:'lankaawa',o:['Sri Lanka','the island of tea','Colombo','the shop'],a:0},
{t:'li',q:'Listen — which word?',say:'ලංකාවට',o:['ලංකාවට','ලංකාව','කඩේට','ගෙදරට'],a:0}]},
{id:'si_ta_3',title:'Build it',step:'build',meta:'Going places',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['කඩේ','shop'],['කඩේට','to the shop'],['ගෙදරට','to home'],['ලංකාවට','to Sri Lanka']]},
{t:'wb',q:'Build: we are going home',a:['අපි','ගෙදරට','යනවා'],pool:['අපි','ගෙදරට','යනවා','එනවා']},
{t:'mc',q:'Sinhala marks "to" with…',o:['an ending on the back','a word in front','word order','nothing'],a:0},
{t:'wb',q:'Build: mother is going to the shop',a:['අම්මා','කඩේට','යනවා'],pool:['අම්මා','කඩේට','යනවා','කඩේ']},
{t:'li',q:'Listen — which sentence?',say:'අපි ලංකාවට යනවා',o:['අපි ලංකාවට යනවා','මම කඩේට යනවා','එයා ගෙදරට එනවා','අපි ගෙදර ඉන්නවා'],a:0},
{t:'mc',q:'And the -ට in මට is…',o:['the very same "to"','a different word','part of the pronoun','a mistake'],a:0}]},
{id:'si_ta_4',title:'Mix it',step:'mix',meta:'-ට everywhere',vocab:[],ex:[
{t:'mc',q:'එයා ගෙදරට එනවා means…',d:'එයා ගෙදරට එනවා',r:'eyaa gedharata enawaa',o:['he / she is coming home','he / she left home','come home!','she is at home'],a:0},
{t:'wb',q:'Build: are you going to the shop?',a:['ඔයා','කඩේට','යනවද'],pool:['ඔයා','කඩේට','යනවද','යනවා']},
{t:'li',q:'Listen — which word?',say:'කඩේ',o:['කඩේ','කඩේට','ගෙදර','පොත'],a:0},
{t:'mc',q:'Pick the sentence that says WHERE TO:',o:['මම කඩේට යනවා','මම කඩේ ඉන්නවා','කඩේ තියෙනවා','මේක කඩේ'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මම ගෙදරට යනවා',o:['මම ගෙදරට යනවා','මම කඩේට යනවා','මම ගෙදර ඉන්නවා','අපි යනවා'],a:0},
{t:'match',q:'Match sentence and meaning',pairs:[['මම කඩේට යනවා','I go to the shop'],['එයා ගෙදරට එනවා','she comes home'],['අපි ලංකාවට යනවා','we go to Sri Lanka'],['මම ගෙදර ඉන්නවා','I am at home']]},
{t:'mc',q:'හෙට අපි කඩේට යනවා — when is the trip?',o:['tomorrow','today','yesterday','now'],a:0}]},
{id:'si_ta_5',title:'Checkpoint',step:'checkpoint',meta:'-ට mastered?',vocab:[],ex:[
{t:'mc',q:'"To home" =',o:['ගෙදරට','ගෙදර','ගෙදරෙන්','මට'],a:0},
{t:'wb',q:'Build: I am going to the shop',a:['මම','කඩේට','යනවා'],pool:['මම','කඩේට','යනවා','ඉන්නවා']},
{t:'li',q:'Listen — which word?',say:'ලංකාව',o:['ලංකාව','ලංකාවට','කඩේ','ගෙදර'],a:0},
{t:'mc',q:'The -ට ending means…',o:['to / for','from','with','of'],a:0},
{t:'li',q:'Listen — which word?',say:'කඩේට',o:['කඩේට','ගෙදරට','කඩේ','ලංකාවට'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['කඩේට','to the shop'],['ගෙදරට','to home'],['ලංකාවට','to Sri Lanka'],['මට','to me']]}]},

/* --- Topic 23: possession -gee --- */
{id:'si_gee',title:'Whose?',step:'learn',meta:'මගේ ඔයාගේ එයාගේ අපේ',vocab:[['මගේ','magee','my / mine'],['ඔයාගේ','oyaagee','your / yours'],['එයාගේ','eyaagee','his / hers'],['අපේ','apee','our / ours'],['මගේ පොත','magee potha','my book']],ex:[
{t:'note',tag:'The -ගේ ending',q:'මගේ ඔයාගේ එයාගේ',body:'<p>Ownership takes <b>-ගේ</b> on people: <span class="deva">මගේ</span> <b>magee</b> my · <span class="deva">ඔයාගේ</span> <b>oyaagee</b> your · <span class="deva">එයාගේ</span> <b>eyaagee</b> his/hers.</p><p>"We" bends the rule: <span class="deva">අපේ</span> <b>apee</b> = our. You have used two of these since Zone 2: <span class="deva">මගේ නම</span>, <span class="deva">ඔයාගේ නම</span> — now you know the machinery!</p>',eg:[['මගේ පොත','magee potha','my book'],['ඔයාගේ තේ','oyaagee thee','your tea'],['අපේ ගෙදර','apee gedhara','our home']]},
{t:'mc',q:'What does මගේ mean?',d:'මගේ',r:'magee',o:['my','your','our','his'],a:0},
{t:'mc',q:'"Our" is…',o:['අපේ','අපිගේ','මගේ','එයාගේ'],a:0},
{t:'note',tag:'Whose is it?',q:'කාගේද',body:'<p>Ask "whose?" with <span class="deva">කාගේද</span> <b>kaagedha</b>: <span class="deva">මේ පොත කාගේද</span> — whose book is this?</p><p>Answer with the -ගේ family: <span class="deva">මගේ</span>! Or a person: <span class="deva">අම්මාගේ</span> <b>ammaagee</b> — belonging to mother. Any person can wear -ගේ.</p>',eg:[['මේ පොත කාගේද','mee potha kaagedha','whose book is this?'],['අම්මාගේ','ammaagee','belonging to mother']]},
{t:'mc',q:'මේ පොත කාගේද asks…',d:'මේ පොත කාගේද',r:'mee potha kaagedha',o:['whose book is this?','where is the book?','what book is this?','is this a book?'],a:0},
{t:'wb',q:'Build: this is my book',a:['මේක','මගේ','පොත'],pool:['මේක','මගේ','පොත','ඔයාගේ']},
{t:'mc',q:'Which one is: the tea belonging to mother?',o:['අම්මාගේ තේ','අම්මා තේ','අම්මාට තේ','තේ අම්මා'],a:0}]},
{id:'si_gee_2',title:'Hear it',step:'recognize',meta:'Spot the owners',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'මගේ',o:['මගේ','ඔයාගේ','අපේ','එයාගේ'],a:0},
{t:'li',q:'Listen — which word?',say:'අපේ',o:['අපේ','මගේ','එයාගේ','ඔයාගේ'],a:0},
{t:'mc',q:'Which word means "your"?',o:['ඔයාගේ','මගේ','අපේ','කාගේද'],a:0},
{t:'mc',q:'එයාගේ පොත means…',d:'එයාගේ පොත',r:'eyaagee potha',o:['his / her book','my book','your book','a book'],a:0},
{t:'li',q:'Listen — which word?',say:'ඔයාගේ',o:['ඔයාගේ','එයාගේ','මගේ','අපේ'],a:0},
{t:'mc',q:'"Whose?" is…',o:['කාගේද','කවුද','මොකක්ද','කොහෙද'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මගේ පොත',o:['මගේ පොත','ඔයාගේ පොත','අපේ ගෙදර','මගේ නම'],a:0}]},
{id:'si_gee_3',title:'Build it',step:'build',meta:'Mine, yours, ours',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['මගේ','my'],['ඔයාගේ','your'],['එයාගේ','his / hers'],['අපේ','our']]},
{t:'wb',q:'Build: our home',a:['අපේ','ගෙදර'],pool:['අපේ','ගෙදර','මගේ']},
{t:'mc',q:'Which one is: the book belonging to mother?',o:['අම්මාගේ පොත','අම්මා පොත','අම්මාට පොත','පොත අම්මාගේට'],a:0},
{t:'wb',q:'Ask: whose book is this?',a:['මේ','පොත','කාගේද'],pool:['මේ','පොත','කාගේද','මගේ']},
{t:'li',q:'Listen — which word?',say:'එයාගේ',o:['එයාගේ','ඔයාගේ','අපේ','මගේ'],a:0},
{t:'mc',q:'The odd one out (no -ගේ):',o:['අපේ','මගේ','ඔයාගේ','එයාගේ'],a:0}]},
{id:'si_gee_4',title:'Mix it',step:'mix',meta:'Ownership everywhere',vocab:[],ex:[
{t:'mc',q:'ඔයාගේ තේ means…',d:'ඔයාගේ තේ',r:'oyaagee thee',o:['your tea','my tea','tea for you','you like tea'],a:0},
{t:'wb',q:'Build: this is our shop',a:['මේක','අපේ','කඩේ'],pool:['මේක','අපේ','කඩේ','ගෙදර']},
{t:'li',q:'Listen — which phrase?',say:'අපේ ගෙදර',o:['අපේ ගෙදර','මගේ ගෙදර','අපේ කඩේ','ඔයාගේ නම'],a:0},
{t:'mc',q:'Someone left a book behind. You ask the room:',o:['මේ පොත කාගේද','මේ පොත මොකක්ද','පොත කොහෙද','මේක පොතද'],a:0},
{t:'li',q:'Listen — which word?',say:'කාගේද',o:['කාගේද','කවුද','මගේ','කොහෙද'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මගේ පොත','my book'],['ඔයාගේ තේ','your tea'],['අපේ ගෙදර','our home'],['අම්මාගේ','belonging to mother']]},
{t:'mc',q:'-ට is "to"; -ගේ is…',o:['"of / belonging to"','"from"','"with"','"at"'],a:0}]},
{id:'si_gee_5',title:'Checkpoint',step:'checkpoint',meta:'Possession mastered?',vocab:[],ex:[
{t:'mc',q:'"My" is…',o:['මගේ','මට','මම','මේ'],a:0},
{t:'wb',q:'Build: my name is Nimal',a:['මගේ','නම','නිමල්'],pool:['මගේ','නම','නිමල්','ඔයාගේ']},
{t:'li',q:'Listen — which word?',say:'අපේ',o:['අපේ','මගේ','ඔයාගේ','එයාගේ'],a:0},
{t:'mc',q:'"His / her book" =',o:['එයාගේ පොත','ඔයාගේ පොත','එයාට පොත','පොත එයා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මගේ පොත',o:['මගේ පොත','මගේ නම','අපේ ගෙදර','ඔයාගේ පොත'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['මගේ','my'],['ඔයාගේ','your'],['අපේ','our'],['කාගේද','whose?']]}]},

/* --- Topic 24: with & from --- */
{id:'si_ekka',title:'With & from',step:'learn',meta:'එක්ක & -එන්',vocab:[['එක්ක','ekka','with'],['ඔයා එක්ක','oyaa ekka','with you'],['ලංකාවෙන්','lankaawen','from Sri Lanka'],['ඇමරිකාව','aemarikaawa','America'],['කොහෙන්ද','kohendha','from where?'],['මම ඔයා එක්ක යනවා','mama oyaa ekka yanawaa','I am going with you']],ex:[
{t:'note',tag:'Together',q:'person + එක්ක',body:'<p><span class="deva">එක්ක</span> <b>ekka</b> = with. It follows the person: <span class="deva">ඔයා එක්ක</span> = with you · <span class="deva">අම්මා එක්ක</span> = with mother.</p><p><span class="deva">මම ඔයා එක්ක යනවා</span> <b>mama oyaa ekka yanawaa</b> = I am going with you.</p>',eg:[['ඔයා එක්ක','oyaa ekka','with you'],['යාළුවා එක්ක','yaaluwaa ekka','with a friend']]},
{t:'mc',q:'"With mother" =',o:['අම්මා එක්ක','අම්මාගේ','අම්මාට','එක්ක අම්මා'],a:0},
{t:'mc',q:'එක්ක comes…',o:['after the person','before the person','at the sentence start','inside the verb'],a:0},
{t:'note',tag:'Where from?',q:'-එන් = from',body:'<p>"From" is the ending <b>-එන්</b>: <span class="deva">ලංකාවෙන්</span> <b>lankaawen</b> = from Sri Lanka · <span class="deva">ඇමරිකාවෙන්</span> <b>aemarikaawen</b> = from America.</p><p>Ask origins with <span class="deva">කොහෙන්ද</span> <b>kohendha</b> — from where? <span class="deva">ඔයා කොහෙන්ද?</span> — <span class="deva">මම ඇමරිකාවෙන්</span>. A whole introduction, no verb needed!</p>',eg:[['කොහෙන්ද','kohendha','from where?'],['මම ඇමරිකාවෙන්','mama aemarikaawen','I am from America']]},
{t:'mc',q:'ඔයා කොහෙන්ද asks…',d:'ඔයා කොහෙන්ද',r:'oyaa kohendha',o:['where are you from?','where are you going?','who are you?','how are you?'],a:0},
{t:'wb',q:'Say: I am from America',a:['මම','ඇමරිකාවෙන්'],pool:['මම','ඇමරිකාවෙන්','ඇමරිකාව']},
{t:'mc',q:'"From Sri Lanka" =',o:['ලංකාවෙන්','ලංකාවට','ලංකාව','ලංකාවගේ'],a:0}]},
{id:'si_ekka_2',title:'Hear it',step:'recognize',meta:'With & from by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'එක්ක',o:['එක්ක','එකක්','එක','ඕනැ'],a:0},
{t:'li',q:'Listen — which word?',say:'කොහෙන්ද',o:['කොහෙන්ද','කොහෙද','කවුද','කාගේද'],a:0},
{t:'mc',q:'Which phrase means "with you"?',o:['ඔයා එක්ක','ඔයාගේ','ඔයාට','ඔයා එකක්'],a:0},
{t:'mc',q:'ලංකාවෙන් vs ලංකාවට:',o:['from vs to','to vs from','both mean to','both mean from'],a:0},
{t:'li',q:'Listen — which word?',say:'ලංකාවෙන්',o:['ලංකාවෙන්','ලංකාවට','ලංකාව','ඇමරිකාවෙන්'],a:0},
{t:'mc',q:'What does ඇමරිකාව mean?',d:'ඇමරිකාව',r:'aemarikaawa',o:['America','the Americas only','an American','abroad'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මම ඔයා එක්ක යනවා',o:['මම ඔයා එක්ක යනවා','මම කඩේට යනවා','අපි යනවා','ඔයා කොහෙන්ද'],a:0}]},
{id:'si_ekka_3',title:'Build it',step:'build',meta:'Together & origins',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ඔයා එක්ක','with you'],['ලංකාවෙන්','from Sri Lanka'],['කොහෙන්ද','from where?'],['ලංකාවට','to Sri Lanka']]},
{t:'wb',q:'Build: I am going with mother',a:['මම','අම්මා','එක්ක','යනවා'],pool:['මම','අම්මා','එක්ක','යනවා','එක්කට']},
{t:'mc',q:'The introduction "මම ලංකාවෙන්" needs a verb:',o:['no — it is complete','yes, always','only in writing','only with names'],a:0},
{t:'wb',q:'Ask: where are you from?',a:['ඔයා','කොහෙන්ද'],pool:['ඔයා','කොහෙන්ද','කොහෙද']},
{t:'li',q:'Listen — which word?',say:'ඇමරිකාවෙන්',o:['ඇමරිකාවෙන්','ඇමරිකාව','ලංකාවෙන්','ලංකාව'],a:0},
{t:'mc',q:'"With a friend" =',o:['යාළුවා එක්ක','යාළුවාගේ','යාළුවාට','එක්ක යාළුවා'],a:0}]},
{id:'si_ekka_4',title:'Mix it',step:'mix',meta:'-ට -ගේ එක්ක -එන්',vocab:[],ex:[
{t:'mc',q:'අපි යාළුවා එක්ක කඩේට යනවා means…',d:'අපි යාළුවා එක්ක කඩේට යනවා',r:'api yaaluwaa ekka kadeeta yanawaa',o:['we go to the shop with a friend','our friend owns the shop','friends from the shop','we and the shop'],a:0},
{t:'wb',q:'Say: I am from Sri Lanka',a:['මම','ලංකාවෙන්'],pool:['මම','ලංකාවෙන්','ලංකාවට']},
{t:'li',q:'Listen — which word?',say:'කොහෙද',o:['කොහෙද','කොහෙන්ද','කවුද','මොකක්ද'],a:0},
{t:'mc',q:'කොහෙද vs කොහෙන්ද:',o:['where vs from-where','same word','who vs where','to-where vs where'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අම්මා එක්ක',o:['අම්මා එක්ක','ඔයා එක්ක','අම්මාගේ','අම්මාට'],a:0},
{t:'match',q:'Match the little endings',pairs:[['-ට','to'],['-ගේ','of / belonging'],['එක්ක','with'],['-එන්','from']]},
{t:'mc',q:'Your toolkit so far marks to, of, with, from using…',o:['endings & one little word after','words in front','tone of voice','word order only'],a:0}]},
{id:'si_ekka_5',title:'Checkpoint',step:'checkpoint',meta:'With & from mastered?',vocab:[],ex:[
{t:'mc',q:'"With you" =',o:['ඔයා එක්ක','ඔයාගේ','ඔයාට','ඔයාවෙන්'],a:0},
{t:'wb',q:'Ask: where are you from?',a:['ඔයා','කොහෙන්ද'],pool:['ඔයා','කොහෙන්ද','එක්ක']},
{t:'li',q:'Listen — which word?',say:'එක්ක',o:['එක්ක','එක','ඕනැ','අපේ'],a:0},
{t:'mc',q:'"From America" =',o:['ඇමරිකාවෙන්','ඇමරිකාවට','ඇමරිකාව','ඇමරිකාගේ'],a:0},
{t:'li',q:'Listen — which word?',say:'ලංකාවෙන්',o:['ලංකාවෙන්','ලංකාවට','ඇමරිකාවෙන්','ලංකාව'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ඔයා එක්ක','with you'],['මම ලංකාවෙන්','I am from Sri Lanka'],['කොහෙන්ද','from where?'],['කඩේට','to the shop']]}]},

/* --- Topic 25: where things are --- */
{id:'si_place',title:'Where things are',step:'learn',meta:'උඩ යට ඇතුළේ ළඟ',vocab:[['උඩ','uda','on / on top'],['යට','yata','under'],['ඇතුළේ','aethulee','inside'],['ළඟ','langa','near / next to'],['මේසය','meesaya','table'],['පුටුව','putuwa','chair']],ex:[
{t:'note',tag:'Position words',q:'උඩ යට ඇතුළේ ළඟ',body:'<p>Where is it? <span class="deva">උඩ</span> <b>uda</b> on · <span class="deva">යට</span> <b>yata</b> under · <span class="deva">ඇතුළේ</span> <b>aethulee</b> inside · <span class="deva">ළඟ</span> <b>langa</b> near.</p><p>They come AFTER the place — Sinhala style: <span class="deva">පුටුව යට</span> = under the chair.</p>',eg:[['උඩ','uda','on'],['යට','yata','under'],['ඇතුළේ','aethulee','inside'],['ළඟ','langa','near']]},
{t:'mc',q:'What does යට mean?',d:'යට',r:'yata',o:['under','on','inside','near'],a:0},
{t:'mc',q:'"Near the shop" =',o:['කඩේ ළඟ','ළඟ කඩේ','කඩේ උඩ','කඩේට'],a:0},
{t:'note',tag:'Table & chair',q:'මේසය & the -ේ trick',body:'<p><span class="deva">මේසය</span> <b>meesaya</b> = table (an old Portuguese guest: <i>mesa</i>!) · <span class="deva">පුටුව</span> <b>putuwa</b> = chair.</p><p>Small trick: before a position word, <span class="deva">මේසය</span> usually shortens to <span class="deva">මේසේ</span>: <span class="deva">පොත මේසේ උඩ තියෙනවා</span> <b>potha meesee uda thiyenawaa</b> = the book is on the table.</p>',eg:[['මේසය','meesaya','table'],['පොත මේසේ උඩ තියෙනවා','potha meesee uda thiyenawaa','the book is on the table']]},
{t:'mc',q:'What does මේසය mean?',d:'මේසය',r:'meesaya',o:['table','chair','book','shop'],a:0},
{t:'wb',q:'Build: the book is on the table',a:['පොත','මේසේ','උඩ','තියෙනවා'],pool:['පොත','මේසේ','උඩ','තියෙනවා','යට']},
{t:'mc',q:'Position words come…',o:['after the place','before the place','at the start','inside the verb'],a:0}]},
{id:'si_place_2',title:'Hear it',step:'recognize',meta:'Spot the positions',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'උඩ',o:['උඩ','යට','ළඟ','ඇතුළේ'],a:0},
{t:'li',q:'Listen — which word?',say:'ඇතුළේ',o:['ඇතුළේ','ළඟ','උඩ','යට'],a:0},
{t:'mc',q:'Which word means "near"?',o:['ළඟ','යට','උඩ','ඇතුළේ'],a:0},
{t:'mc',q:'පුටුව යට means…',d:'පුටුව යට',r:'putuwa yata',o:['under the chair','on the chair','near the chair','inside the chair'],a:0},
{t:'li',q:'Listen — which word?',say:'පුටුව',o:['පුටුව','මේසය','පොත','ළඟ'],a:0},
{t:'mc',q:'මේසය came into Sinhala from…',o:['Portuguese','English','Tamil origins of tables','nowhere — it is native'],a:0},
{t:'li',q:'Listen — which word?',say:'ළඟ',o:['ළඟ','යට','උඩ','ඇතුළේ'],a:0}]},
{id:'si_place_3',title:'Build it',step:'build',meta:'Say where it is',vocab:[],ex:[
{t:'match',q:'Match position and meaning',pairs:[['උඩ','on'],['යට','under'],['ඇතුළේ','inside'],['ළඟ','near']]},
{t:'wb',q:'Build: the book is under the chair',a:['පොත','පුටුව','යට','තියෙනවා'],pool:['පොත','පුටුව','යට','තියෙනවා','උඩ']},
{t:'mc',q:'"Inside the shop" =',o:['කඩේ ඇතුළේ','ඇතුළේ කඩේ','කඩේ උඩ','කඩේ ළඟ'],a:0},
{t:'wb',q:'Build: mother is near the shop',a:['අම්මා','කඩේ','ළඟ','ඉන්නවා'],pool:['අම්මා','කඩේ','ළඟ','ඉන්නවා','තියෙනවා']},
{t:'li',q:'Listen — which phrase?',say:'මේසේ උඩ',o:['මේසේ උඩ','පුටුව යට','කඩේ ළඟ','ගෙදර ඇතුළේ'],a:0},
{t:'mc',q:'Book on table: which be-verb?',o:['තියෙනවා','ඉන්නවා','යනවා','ඕනැ'],a:0}]},
{id:'si_place_4',title:'Mix it',step:'mix',meta:'Position practice',vocab:[],ex:[
{t:'mc',q:'පොත මේසේ උඩ තියෙනවා — where is the book?',o:['on the table','under the table','near the table','inside the table'],a:0},
{t:'wb',q:'Build: the tea is inside the house — house/home = ගෙදර',a:['තේ','ගෙදර','ඇතුළේ','තියෙනවා'],pool:['තේ','ගෙදර','ඇතුළේ','තියෙනවා','ළඟ']},
{t:'li',q:'Listen — which word?',say:'යට',o:['යට','උඩ','ළඟ','ඇතුළේ'],a:0},
{t:'mc',q:'"The chair is near the table" =',o:['පුටුව මේසේ ළඟ තියෙනවා','මේසය පුටුව උඩ තියෙනවා','පුටුව මේසේ උඩ ඉන්නවා','පුටුව යට මේසය'],a:0},
{t:'li',q:'Listen — which word?',say:'මේසය',o:['මේසය','පුටුව','මේක','පොත'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මේසේ උඩ','on the table'],['පුටුව යට','under the chair'],['කඩේ ඇතුළේ','inside the shop'],['ගෙදර ළඟ','near the house']]},
{t:'mc',q:'අයියා කඩේ ඇතුළේ ඉන්නවා means…',d:'අයියා කඩේ ඇතුළේ ඉන්නවා',r:'ayiyaa kadee aethulee innawaa',o:['big brother is inside the shop','the shop is near brother','brother owns the shop','brother went to the shop'],a:0}]},
{id:'si_place_5',title:'Checkpoint',step:'checkpoint',meta:'Positions mastered?',vocab:[],ex:[
{t:'mc',q:'"On" is…',o:['උඩ','යට','ළඟ','ඇතුළේ'],a:0},
{t:'wb',q:'Build: the book is on the table',a:['පොත','මේසේ','උඩ','තියෙනවා'],pool:['පොත','මේසේ','උඩ','තියෙනවා','ඉන්නවා']},
{t:'li',q:'Listen — which word?',say:'ඇතුළේ',o:['ඇතුළේ','උඩ','ළඟ','යට'],a:0},
{t:'mc',q:'What does පුටුව mean?',d:'පුටුව',r:'putuwa',o:['chair','table','book','bed'],a:0},
{t:'li',q:'Listen — which word?',say:'උඩ',o:['උඩ','යට','ඇතුළේ','ළඟ'],a:0},
{t:'match',q:'Match position and meaning',pairs:[['උඩ','on'],['යට','under'],['ඇතුළේ','inside'],['ළඟ','near']]}]},

/* --- Topic 26: around town --- */
{id:'si_town',title:'Around town',step:'learn',meta:'පාර ගම ඉස්කෝලේ & bas eka',vocab:[['පාර','paara','road / street'],['ගම','gama','village'],['ඉස්කෝලේ','iskoolee','school'],['බස් එක','bas eka','the bus'],['කාර් එක','kaar eka','the car'],['බස් එකේ','bas eke','by bus']],ex:[
{t:'note',tag:'Out the door',q:'පාර ගම ඉස්කෝලේ',body:'<p><span class="deva">පාර</span> <b>paara</b> road · <span class="deva">ගම</span> <b>gama</b> village — ask any Sri Lankan about their <span class="deva">ගම</span> and watch their face light up; it means their family village, their roots.</p><p><span class="deva">ඉස්කෝලේ</span> <b>iskoolee</b> = school (yes — from English "school"!).</p>',eg:[['පාර','paara','road'],['ගම','gama','village'],['ඉස්කෝලේ','iskoolee','school']]},
{t:'mc',q:'What does ගම mean?',d:'ගම',r:'gama',o:['village','road','school','town'],a:0},
{t:'mc',q:'ඉස්කෝලේ sounds like the English word…',d:'ඉස්කෝලේ',r:'iskoolee',o:['school','scooter','cooler','skill'],a:0},
{t:'note',tag:'The එක trick',q:'බස් එක · කාර් එක',body:'<p>English loanwords ride into Sinhala on <span class="deva">එක</span> ("one"): <span class="deva">බස් එක</span> <b>bas eka</b> the bus · <span class="deva">කාර් එක</span> <b>kaar eka</b> the car.</p><p>"By bus" uses the -ේ form: <span class="deva">මම බස් එකේ යනවා</span> <b>mama bas eke yanawaa</b> = I go by bus.</p>',eg:[['බස් එක','bas eka','the bus'],['මම බස් එකේ යනවා','mama bas eke yanawaa','I go by bus']]},
{t:'mc',q:'"The bus" =',o:['බස් එක','බස්','එක බස්','බස් එකේ'],a:0},
{t:'wb',q:'Build: I go to school by bus',a:['මම','බස් එකේ','ඉස්කෝලේට','යනවා'],pool:['මම','බස් එකේ','ඉස්කෝලේට','යනවා','බස් එක']},
{t:'mc',q:'ඉස්කෝලේට means…',d:'ඉස්කෝලේට',r:'iskooleeta',o:['to school','at school','from school','the school'],a:0}]},
{id:'si_town_2',title:'Hear it',step:'recognize',meta:'Town words by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'පාර',o:['පාර','ගම','පොත','කඩේ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'බස් එක',o:['බස් එක','කාර් එක','බස් එකේ','එකක්'],a:0},
{t:'mc',q:'Which word means "school"?',o:['ඉස්කෝලේ','ගම','පාර','කඩේ'],a:0},
{t:'mc',q:'When Sri Lankans say "my ගම" they mean…',o:['their family village and roots','their house','their garden','their team'],a:0},
{t:'li',q:'Listen — which word?',say:'ගම',o:['ගම','පාර','නම','ගෙදර'],a:0},
{t:'mc',q:'බස් එකේ means…',d:'බස් එකේ',r:'bas eke',o:['by bus / on the bus','the bus','two buses','bus stop'],a:0},
{t:'li',q:'Listen — which word?',say:'ඉස්කෝලේ',o:['ඉස්කෝලේ','කඩේ','ගෙදර','පාර'],a:0}]},
{id:'si_town_3',title:'Build it',step:'build',meta:'Getting around',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['පාර','road'],['ගම','village'],['ඉස්කෝලේ','school'],['බස් එක','the bus']]},
{t:'wb',q:'Build: I go by bus',a:['මම','බස් එකේ','යනවා'],pool:['මම','බස් එකේ','යනවා','බස් එක']},
{t:'mc',q:'"The car" =',o:['කාර් එක','කාර්','එක කාර්','කාර් එකේ'],a:0},
{t:'wb',q:'Ask: where is the school?',a:['ඉස්කෝලේ','කොහෙද'],pool:['ඉස්කෝලේ','කොහෙද','කොහෙන්ද']},
{t:'li',q:'Listen — which phrase?',say:'කාර් එක',o:['කාර් එක','බස් එක','කාර් එකේ','පාර'],a:0},
{t:'mc',q:'Loanwords like bus and car take…',o:['එක after them','ට before them','no marker','the -නවා ending'],a:0}]},
{id:'si_town_4',title:'Mix it',step:'mix',meta:'Around the village',vocab:[],ex:[
{t:'mc',q:'කඩේ පාර ළඟ තියෙනවා means…',d:'කඩේ පාර ළඟ තියෙනවා',r:'kadee paara langa thiyenawaa',o:['the shop is near the road','the road is in the shop','go to the shop','the shop road is long'],a:0},
{t:'wb',q:'Build: we go to the village tomorrow',a:['අපි','හෙට','ගමට','යනවා'],pool:['අපි','හෙට','ගමට','යනවා','ගම']},
{t:'li',q:'Listen — which phrase?',say:'බස් එකේ',o:['බස් එකේ','බස් එක','කාර් එක','එක්ක'],a:0},
{t:'mc',q:'මල්ලී ඉස්කෝලේට යනවා — who is going?',o:['younger brother','older brother','mother','a student we do not know'],a:0},
{t:'li',q:'Listen — which word?',say:'පාර',o:['පාර','ගම','පොත','බත්'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['බස් එකේ','by bus'],['ගමට','to the village'],['ඉස්කෝලේට','to school'],['පාර ළඟ','near the road']]},
{t:'mc',q:'ගමට is to the village; "to school" is…',o:['ඉස්කෝලේට','ඉස්කෝලේ','ඉස්කෝලෙන්','ඉස්කෝලේගේ'],a:0}]},
{id:'si_town_5',title:'Checkpoint',step:'checkpoint',meta:'Town words mastered?',vocab:[],ex:[
{t:'mc',q:'"Road" is…',o:['පාර','ගම','පොත','කඩේ'],a:0},
{t:'wb',q:'Build: I go to school by bus',a:['මම','බස් එකේ','ඉස්කෝලේට','යනවා'],pool:['මම','බස් එකේ','ඉස්කෝලේට','යනවා','ගමට']},
{t:'li',q:'Listen — which word?',say:'ගම',o:['ගම','පාර','ගෙදර','නම'],a:0},
{t:'mc',q:'"The bus" =',o:['බස් එක','බස් එකේ','බස්','එක'],a:0},
{t:'li',q:'Listen — which word?',say:'ඉස්කෝලේ',o:['ඉස්කෝලේ','කඩේ','පාර','ගම'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['පාර','road'],['ගම','village'],['කාර් එක','the car'],['ඉස්කෝලේ','school']]}]},

/* --- Topic 27: food --- */
{id:'si_food',title:'Food!',step:'learn',meta:'පාන් බිත්තර මාළු ආප්ප ඉඳිආප්ප',vocab:[['පාන්','paan','bread'],['බිත්තර','biththara','egg'],['මාළු','maalu','fish'],['එළවළු','elawalu','vegetables'],['කිරි','kiri','milk'],['ආප්ප','aappa','hoppers'],['ඉඳිආප්ප','indhiaappa','string hoppers']],ex:[
{t:'note',tag:'On every table',q:'පාන් බිත්තර මාළු එළවළු කිරි',body:'<p><span class="deva">පාන්</span> <b>paan</b> bread (another Portuguese guest — <i>pão</i>) · <span class="deva">බිත්තර</span> <b>biththara</b> egg · <span class="deva">මාළු</span> <b>maalu</b> fish — this is an island! · <span class="deva">එළවළු</span> <b>elawalu</b> vegetables · <span class="deva">කිරි</span> <b>kiri</b> milk.</p>',eg:[['පාන්','paan','bread'],['බිත්තර','biththara','egg'],['මාළු','maalu','fish'],['කිරි','kiri','milk']]},
{t:'mc',q:'What does මාළු mean?',d:'මාළු',r:'maalu',o:['fish','meat','vegetables','milk'],a:0},
{t:'mc',q:'Which word means "egg"?',o:['බිත්තර','පාන්','කිරි','එළවළු'],a:0},
{t:'note',tag:'The famous ones',q:'ආප්ප & ඉඳිආප්ප',body:'<p><span class="deva">ආප්ප</span> <b>aappa</b> — hoppers: bowl-shaped rice-flour pancakes, crisp at the edge, soft in the middle. With an egg inside: <span class="deva">බිත්තර ආප්ප</span>!</p><p><span class="deva">ඉඳිආප්ප</span> <b>indhiaappa</b> — string hoppers: little steamed nests of rice noodles (spot your humming <span class="deva">ඳ</span>).</p>',eg:[['ආප්ප','aappa','hoppers'],['බිත්තර ආප්ප','biththara aappa','egg hopper'],['ඉඳිආප්ප','indhiaappa','string hoppers']]},
{t:'mc',q:'ආප්ප are…',d:'ආප්ප',r:'aappa',o:['bowl-shaped rice pancakes','rice noodle nests','flat breads','sweet cakes'],a:0},
{t:'wb',q:'Build: I eat string hoppers',a:['මම','ඉඳිආප්ප','කනවා'],pool:['මම','ඉඳිආප්ප','කනවා','බොනවා']},
{t:'mc',q:'බිත්තර ආප්ප is…',d:'බිත්තර ආප්ප',r:'biththara aappa',o:['an egg hopper','scrambled eggs','egg curry','a bread roll'],a:0}]},
{id:'si_food_2',title:'Hear it',step:'recognize',meta:'Food by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'පාන්',o:['පාන්','පාර','මාළු','කිරි'],a:0},
{t:'li',q:'Listen — which word?',say:'ආප්ප',o:['ආප්ප','ඉඳිආප්ප','අඹ','පාන්'],a:0},
{t:'mc',q:'Which word means "vegetables"?',o:['එළවළු','මාළු','බිත්තර','කිරි'],a:0},
{t:'mc',q:'What does කිරි mean?',d:'කිරි',r:'kiri',o:['milk','tea','water','rice'],a:0},
{t:'li',q:'Listen — which word?',say:'මාළු',o:['මාළු','එළවළු','මල්ලී','බත්'],a:0},
{t:'mc',q:'ඉඳිආප්ප are…',o:['steamed rice-noodle nests','egg pancakes','fried breads','coconut sweets'],a:0},
{t:'li',q:'Listen — which word?',say:'බිත්තර',o:['බිත්තර','බත්','පාන්','ආප්ප'],a:0}]},
{id:'si_food_3',title:'Build it',step:'build',meta:'Talk about food',vocab:[],ex:[
{t:'match',q:'Match food and meaning',pairs:[['පාන්','bread'],['බිත්තර','egg'],['මාළු','fish'],['කිරි','milk']]},
{t:'wb',q:'Build: I want fish',a:['මට','මාළු','ඕනැ'],pool:['මට','මාළු','ඕනැ','මාළු එක']},
{t:'mc',q:'"I do not eat fish" =',o:['මම මාළු කන්නේ නෑ','මම මාළු කනවා','මට මාළු ඕනැ','මාළු නෙමෙයි'],a:0},
{t:'wb',q:'Build: we eat hoppers in the morning',a:['අපි','උදේ','ආප්ප','කනවා'],pool:['අපි','උදේ','ආප්ප','කනවා','හවස']},
{t:'li',q:'Listen — which word?',say:'එළවළු',o:['එළවළු','මාළු','ඉඳිආප්ප','වතුර'],a:0},
{t:'mc',q:'"There is bread" =',o:['පාන් තියෙනවා','පාන් ඉන්නවා','පාන් කනවා','පාන් ඕනැ'],a:0}]},
{id:'si_food_4',title:'Mix it',step:'mix',meta:'Meals & wants',vocab:[],ex:[
{t:'mc',q:'මට බිත්තර ආප්ප ඕනැ means…',d:'මට බිත්තර ආප්ප ඕනැ',r:'mata biththara aappa oonae',o:['I want an egg hopper','I ate an egg hopper','eggs and hoppers exist','hoppers do not have egg'],a:0},
{t:'wb',q:'Build: mother drinks milk tea — milk tea = කිරි තේ',a:['අම්මා','කිරි','තේ','බොනවා'],pool:['අම්මා','කිරි','තේ','බොනවා','කනවා']},
{t:'li',q:'Listen — which phrase?',say:'බිත්තර ආප්ප',o:['බිත්තර ආප්ප','ඉඳිආප්ප','ආප්ප','බිත්තර'],a:0},
{t:'mc',q:'Which is TRUE about ආප්ප?',o:['crisp edge, soft middle','always sweet','made of wheat only','eaten only at night'],a:0},
{t:'li',q:'Listen — which word?',say:'කිරි',o:['කිරි','කිරි තේ','බත්','තේ'],a:0},
{t:'match',q:'Match food and meaning',pairs:[['ආප්ප','hoppers'],['ඉඳිආප්ප','string hoppers'],['එළවළු','vegetables'],['බිත්තර','egg']]},
{t:'mc',q:'"Do you eat fish?" =',o:['ඔයා මාළු කනවද','ඔයා මාළු කනවා','මාළු කන්නේ නෑ','මාළු තියෙනවද'],a:0}]},
{id:'si_food_5',title:'Checkpoint',step:'checkpoint',meta:'Food mastered?',vocab:[],ex:[
{t:'mc',q:'"Fish" is…',o:['මාළු','එළවළු','බිත්තර','පාන්'],a:0},
{t:'wb',q:'Build: I eat hoppers',a:['මම','ආප්ප','කනවා'],pool:['මම','ආප්ප','කනවා','ඕනැ']},
{t:'li',q:'Listen — which word?',say:'ඉඳිආප්ප',o:['ඉඳිආප්ප','ආප්ප','එළවළු','බිත්තර'],a:0},
{t:'mc',q:'What does පාන් mean?',d:'පාන්',r:'paan',o:['bread','pan','fish','rice'],a:0},
{t:'li',q:'Listen — which word?',say:'බිත්තර',o:['බිත්තර','කිරි','මාළු','පාන්'],a:0},
{t:'match',q:'Match food and meaning',pairs:[['මාළු','fish'],['කිරි','milk'],['පාන්','bread'],['ආප්ප','hoppers']]}]},

/* --- Topic 28: at the kade --- */
{id:'si_kade',title:'At the kadē',step:'learn',meta:'මට තේ එකක් දෙන්න',vocab:[['දෙන්න','dhenna','please give'],['එකක්','ekak','one / a'],['මට තේ එකක් දෙන්න','mata thee ekak dhenna','please give me a tea'],['තව','thawa','more / another'],['ටිකක්','tikak','a little / some'],['වතුර ටිකක්','wathura tikak','some water']],ex:[
{t:'note',tag:'The magic sentence',q:'මට … දෙන්න',body:'<p>The <span class="deva">කඩේ</span> is the heart of every Sri Lankan street — and one sentence rules it: <span class="deva">මට තේ එකක් දෙන්න</span> <b>mata thee ekak dhenna</b> — "give me a tea, please".</p><p><span class="deva">දෙන්න</span> <b>dhenna</b> = please give (polite on its own — no extra please needed). <span class="deva">එකක්</span> <b>ekak</b> = a / one (එක + ක්).</p>',eg:[['මට තේ එකක් දෙන්න','mata thee ekak dhenna','one tea, please'],['දෙන්න','dhenna','please give']]},
{t:'mc',q:'What does දෙන්න mean?',d:'දෙන්න',r:'dhenna',o:['please give','please take','please go','thank you'],a:0},
{t:'mc',q:'"One tea, please" =',o:['මට තේ එකක් දෙන්න','මට තේ ඕනැ දෙන්න','තේ මට එක','දෙන්න තේ මම'],a:0},
{t:'note',tag:'More & a little',q:'තව · ටිකක්',body:'<p><span class="deva">තව</span> <b>thawa</b> = more: <span class="deva">තව එකක්</span> <b>thawa ekak</b> = one more!</p><p><span class="deva">ටිකක්</span> <b>tikak</b> = a little, some: <span class="deva">වතුර ටිකක් දෙන්න</span> = some water, please. Round it off with <span class="deva">ස්තූතියි</span> and you own the kadē.</p>',eg:[['තව එකක්','thawa ekak','one more'],['වතුර ටිකක් දෙන්න','wathura tikak dhenna','some water, please']]},
{t:'mc',q:'තව එකක් means…',d:'තව එකක්',r:'thawa ekak',o:['one more','a little','the last one','two of them'],a:0},
{t:'wb',q:'Build: please give me some water',a:['මට','වතුර','ටිකක්','දෙන්න'],pool:['මට','වතුර','ටිකක්','දෙන්න','එකක්']},
{t:'mc',q:'What does ටිකක් mean?',d:'ටිකක්',r:'tikak',o:['a little / some','a lot','one','none'],a:0}]},
{id:'si_kade_2',title:'Hear it',step:'recognize',meta:'Kadē phrases by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'මට තේ එකක් දෙන්න',o:['මට තේ එකක් දෙන්න','වතුර ටිකක් දෙන්න','තව එකක්','මට තේ ඕනැ'],a:0},
{t:'mc',q:'Which word means "one / a"?',o:['එකක්','එක්ක','ටිකක්','තව'],a:0},
{t:'li',q:'Listen — which word?',say:'දෙන්න',o:['දෙන්න','එන්නම්','තව','ටිකක්'],a:0},
{t:'mc',q:'ටිකක් vs එකක්:',o:['some vs one','one vs some','both mean one','both mean some'],a:0},
{t:'li',q:'Listen — which phrase?',say:'තව එකක්',o:['තව එකක්','එකක්','ටිකක්','තව'],a:0},
{t:'mc',q:'දෙන්න by itself is…',o:['already polite','rude without please','only for children','written only'],a:0},
{t:'li',q:'Listen — which phrase?',say:'වතුර ටිකක්',o:['වතුර ටිකක්','තේ එකක්','වතුර එකක්','ටිකක්'],a:0}]},
{id:'si_kade_3',title:'Build it',step:'build',meta:'Order like a local',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['දෙන්න','please give'],['එකක්','one / a'],['තව','more'],['ටිකක්','a little']]},
{t:'wb',q:'Build: please give me a tea',a:['මට','තේ','එකක්','දෙන්න'],pool:['මට','තේ','එකක්','දෙන්න','ටිකක්']},
{t:'mc',q:'You finished your tea and want another:',o:['තව එකක් දෙන්න','ටිකක් දෙන්න','මට එපා','තේ නෙමෙයි'],a:0},
{t:'wb',q:'Build: please give me an egg hopper',a:['මට','බිත්තර','ආප්ප','එකක්','දෙන්න'],pool:['මට','බිත්තර','ආප්ප','එකක්','දෙන්න','ටිකක්']},
{t:'li',q:'Listen — which word?',say:'එකක්',o:['එකක්','එක්ක','එක','ටිකක්'],a:0},
{t:'mc',q:'The order pattern is…',o:['මට + thing + එකක් + දෙන්න','දෙන්න + thing + මට','thing + මට + දෙන්න + එකක්','any order works'],a:0}]},
{id:'si_kade_4',title:'Mix it',step:'mix',meta:'A trip to the kadē',vocab:[],ex:[
{t:'mc',q:'You walk in. The owner is older than you. You greet him…',o:['අයියා, කොහොමද','ඔබ, ආයුබෝවන්','එයා!','මල්ලී!'],a:0},
{t:'wb',q:'Order: please give me some milk',a:['මට','කිරි','ටිකක්','දෙන්න'],pool:['මට','කිරි','ටිකක්','දෙන්න','එකක්']},
{t:'li',q:'Listen — which phrase?',say:'තව එකක් දෙන්න',o:['තව එකක් දෙන්න','මට තේ එකක් දෙන්න','වතුර ටිකක් දෙන්න','මට එපා'],a:0},
{t:'mc',q:'They offer more but you are done:',o:['මට එපා — ස්තූතියි','තව එකක්','ඕනැ','දෙන්න'],a:0},
{t:'li',q:'Listen — which word?',say:'තව',o:['තව','ටිකක්','දෙන්න','එකක්'],a:0},
{t:'match',q:'Match order and meaning',pairs:[['තේ එකක්','a tea'],['වතුර ටිකක්','some water'],['තව එකක්','one more'],['බිත්තර ආප්ප එකක්','an egg hopper']]},
{t:'mc',q:'Leaving the kadē you say…',o:['ගිහින් එන්නම්','ගිහින් එන්න','කොහොමද','ඔව්'],a:0}]},
{id:'si_kade_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 4 complete?',vocab:[],ex:[
{t:'mc',q:'"Please give" is…',o:['දෙන්න','ගන්න','එන්න','ඕනැ'],a:0},
{t:'wb',q:'Order: please give me a tea',a:['මට','තේ','එකක්','දෙන්න'],pool:['මට','තේ','එකක්','දෙන්න','තව']},
{t:'li',q:'Listen — which phrase?',say:'වතුර ටිකක් දෙන්න',o:['වතුර ටිකක් දෙන්න','තේ එකක් දෙන්න','තව එකක්','මට වතුර ඕනැ'],a:0},
{t:'mc',q:'"One more" =',o:['තව එකක්','එකක් තව','ටිකක්','එක්ක'],a:0},
{t:'li',q:'Listen — which word?',say:'ටිකක්',o:['ටිකක්','එකක්','තව','දෙන්න'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මට තේ එකක් දෙන්න','a tea, please'],['තව එකක්','one more'],['වතුර ටිකක්','some water'],['ස්තූතියි','thank you']]}]},

/* ===================== ZONE 5 · HOW MANY ===================== */
/* --- Topic 29: 11-20 --- */
{id:'si_num2',title:'Eleven to twenty',step:'learn',meta:'එකොළහ … විස්ස',vocab:[['එකොළහ','ekolaha','11'],['දොළහ','dholaha','12'],['දහතුන','dhahathuna','13'],['දාහතර','dhaahathara','14'],['පහළොව','pahalowa','15'],['දහසය','dhahasaya','16'],['දහහත','dhahahatha','17'],['දහඅට','dhahaata','18'],['දහනවය','dhahanawaya','19'],['විස්ස','wissa','20']],ex:[
{t:'note',tag:'Ten plus',q:'The teens',body:'<p>Most teens are just <b>dhaha-</b> (ten) + the number you know: <span class="deva">දහතුන</span> <b>dhahathuna</b> 13 · <span class="deva">දහසය</span> 16 · <span class="deva">දහහත</span> 17 · <span class="deva">දහඅට</span> 18 · <span class="deva">දහනවය</span> 19.</p><p>Spot the number hiding inside and you have already read it.</p>',eg:[['දහතුන','dhahathuna','10+3 = 13'],['දහසය','dhahasaya','10+6 = 16'],['දහඅට','dhahaata','10+8 = 18']]},
{t:'mc',q:'What is දහතුන?',d:'දහතුන',r:'dhahathuna',o:['13','3','30','12'],a:0},
{t:'mc',q:'What is දහඅට?',d:'දහඅට',r:'dhahaata',o:['18','8','19','16'],a:0},
{t:'note',tag:'The odd ones',q:'11 12 14 15 & 20',body:'<p>Five rebels: <span class="deva">එකොළහ</span> <b>ekolaha</b> 11 · <span class="deva">දොළහ</span> <b>dholaha</b> 12 · <span class="deva">දාහතර</span> <b>dhaahathara</b> 14 · <span class="deva">පහළොව</span> <b>pahalowa</b> 15 · and round <span class="deva">විස්ස</span> <b>wissa</b> 20.</p>',eg:[['එකොළහ','ekolaha','11'],['දොළහ','dholaha','12'],['පහළොව','pahalowa','15'],['විස්ස','wissa','20']]},
{t:'mc',q:'What is දොළහ?',d:'දොළහ',r:'dholaha',o:['12','11','20','15'],a:0},
{t:'mc',q:'What is විස්ස?',d:'විස්ස',r:'wissa',o:['20','12','15','19'],a:0}]},
{id:'si_num2_2',title:'Hear them',step:'recognize',meta:'Teens by ear',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'එකොළහ',o:['එකොළහ','දොළහ','පහළොව','දහතුන'],a:0},
{t:'li',q:'Listen — which number?',say:'විස්ස',o:['විස්ස','දහසය','දොළහ','පහළොව'],a:0},
{t:'mc',q:'Which is 15?',o:['පහළොව','පහ','දහහත','දාහතර'],a:0},
{t:'mc',q:'Which is 14?',o:['දාහතර','හතර','දහහත','දහඅට'],a:0},
{t:'li',q:'Listen — which number?',say:'දහසය',o:['දහසය','දහහත','දහඅට','දහනවය'],a:0},
{t:'mc',q:'දහනවය is…',d:'දහනවය',r:'dhahanawaya',o:['19','9','18','29'],a:0},
{t:'li',q:'Listen — which number?',say:'පහළොව',o:['පහළොව','පහ','එකොළහ','දොළහ'],a:0}]},
{id:'si_num2_3',title:'Pair them up',step:'build',meta:'Match teens',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['එකොළහ','11'],['දොළහ','12'],['දහතුන','13'],['දාහතර','14'],['පහළොව','15']]},
{t:'mc',q:'Which is 17?',o:['දහහත','දහසය','දහඅට','දහතුන'],a:0},
{t:'mc',q:'10+6 gives which word?',o:['දහසය','දහහත','දහතුන','දහනවය'],a:0},
{t:'li',q:'Listen — which number?',say:'දහඅට',o:['දහඅට','දහහත','දහසය','අට'],a:0},
{t:'mc',q:'The pattern in most teens is…',o:['dhaha + the unit','the unit + dhaha','doubling the unit','no pattern'],a:0},
{t:'match',q:'Match number and value',pairs:[['දහසය','16'],['දහහත','17'],['දහඅට','18'],['දහනවය','19'],['විස්ස','20']]}]},
{id:'si_num2_4',title:'Mix it',step:'mix',meta:'11-20 together',vocab:[],ex:[
{t:'mc',q:'What is පහළොව?',d:'පහළොව',r:'pahalowa',o:['15','5','50','14'],a:0},
{t:'li',q:'Listen — which number?',say:'දහතුන',o:['දහතුන','තුන','දහසය','දහනවය'],a:0},
{t:'mc',q:'Which is 11?',o:['එකොළහ','එක','දොළහ','විස්ස'],a:0},
{t:'mc',q:'What is දාහතර?',d:'දාහතර',r:'dhaahathara',o:['14','4','13','15'],a:0},
{t:'li',q:'Listen — which number?',say:'දොළහ',o:['දොළහ','එකොළහ','දහතුන','විස්ස'],a:0},
{t:'match',q:'Match number and value',pairs:[['එකොළහ','11'],['දහහත','17'],['පහළොව','15'],['විස්ස','20']]},
{t:'li',q:'Listen — which number?',say:'දහනවය',o:['දහනවය','නවය','දහඅට','දහසය'],a:0}]},
{id:'si_num2_5',title:'Checkpoint',step:'checkpoint',meta:'Teens mastered?',vocab:[],ex:[
{t:'mc',q:'What is එකොළහ?',d:'එකොළහ',r:'ekolaha',o:['11','12','1','10'],a:0},
{t:'li',q:'Listen — which number?',say:'දාහතර',o:['දාහතර','දහතුන','හතර','පහළොව'],a:0},
{t:'mc',q:'Which is 20?',o:['විස්ස','දහනවය','දොළහ','දහය'],a:0},
{t:'mc',q:'What is දහසය?',d:'දහසය',r:'dhahasaya',o:['16','6','17','60'],a:0},
{t:'li',q:'Listen — which number?',say:'දහහත',o:['දහහත','දහසය','හත','දහඅට'],a:0},
{t:'match',q:'Match number and value',pairs:[['දොළහ','12'],['දාහතර','14'],['දහඅට','18'],['විස්ස','20']]}]},

/* --- Topic 30: tens to 100 --- */
{id:'si_tens',title:'Counting by tens',step:'learn',meta:'තිහ පනහ සීය & the combining trick',vocab:[['තිහ','thiha','30'],['හතළිහ','hathaliha','40'],['පනහ','panaha','50'],['හැට','haeta','60'],['හැත්තෑව','haeththaeewa','70'],['අසූව','asuuwa','80'],['අනූව','anuuwa','90'],['සීය','siiya','100'],['විසි එක','wisi eka','21']],ex:[
{t:'note',tag:'The tens',q:'තිහ … සීය',body:'<p><span class="deva">තිහ</span> <b>thiha</b> 30 · <span class="deva">හතළිහ</span> <b>hathaliha</b> 40 · <span class="deva">පනහ</span> <b>panaha</b> 50 · <span class="deva">හැට</span> <b>haeta</b> 60 · <span class="deva">හැත්තෑව</span> <b>haeththaeewa</b> 70 · <span class="deva">අසූව</span> <b>asuuwa</b> 80 · <span class="deva">අනූව</span> <b>anuuwa</b> 90 · <span class="deva">සීය</span> <b>siiya</b> 100.</p>',eg:[['තිහ','thiha','30'],['පනහ','panaha','50'],['හැට','haeta','60'],['සීය','siiya','100']]},
{t:'mc',q:'What is පනහ?',d:'පනහ',r:'panaha',o:['50','15','5','500'],a:0},
{t:'mc',q:'What is සීය?',d:'සීය',r:'siiya',o:['100','60','90','10'],a:0},
{t:'note',tag:'The combining trick',q:'විසි එක = 21',body:'<p>In between, the ten changes into a short combining shape: <span class="deva">විස්ස</span> → <span class="deva">විසි</span>: <span class="deva">විසි එක</span> <b>wisi eka</b> 21 · <span class="deva">විසි පහ</span> 25.</p><p>Same for the others: <span class="deva">තිස් දෙක</span> <b>this dheka</b> 32 · <span class="deva">පනස් පහ</span> <b>panas paha</b> 55. Hear the ten, hear the unit — done.</p>',eg:[['විසි එක','wisi eka','21'],['තිස් දෙක','this dheka','32'],['පනස් පහ','panas paha','55']]},
{t:'mc',q:'විසි පහ is…',d:'විසි පහ',r:'wisi paha',o:['25','21','52','15'],a:0},
{t:'mc',q:'What is තිස් දෙක?',d:'තිස් දෙක',r:'this dheka',o:['32','23','30','12'],a:0}]},
{id:'si_tens_2',title:'Hear them',step:'recognize',meta:'Tens by ear',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'තිහ',o:['තිහ','තුන','විස්ස','පනහ'],a:0},
{t:'li',q:'Listen — which number?',say:'සීය',o:['සීය','හැට','අසූව','පනහ'],a:0},
{t:'mc',q:'Which is 60?',o:['හැට','හැත්තෑව','හතළිහ','අසූව'],a:0},
{t:'mc',q:'Which is 90?',o:['අනූව','අසූව','නවය','සීය'],a:0},
{t:'li',q:'Listen — which number?',say:'පනහ',o:['පනහ','පහ','පහළොව','හතළිහ'],a:0},
{t:'mc',q:'හැත්තෑව is…',d:'හැත්තෑව',r:'haeththaeewa',o:['70','60','80','7'],a:0},
{t:'li',q:'Listen — which number?',say:'අසූව',o:['අසූව','අනූව','අට','හැට'],a:0}]},
{id:'si_tens_3',title:'Pair them up',step:'build',meta:'Match the tens',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['තිහ','30'],['හතළිහ','40'],['පනහ','50'],['හැට','60']]},
{t:'mc',q:'Which is 40?',o:['හතළිහ','හතර','දාහතර','හැත්තෑව'],a:0},
{t:'mc',q:'"55" =',o:['පනස් පහ','පනහ පහ','පහ පනස්','පස් පනහ'],a:0},
{t:'li',q:'Listen — which number?',say:'හැට',o:['හැට','හත','හැත්තෑව','අට'],a:0},
{t:'mc',q:'In 21-29, විස්ස becomes…',o:['විසි','විස්','විසා','it stays විස්ස'],a:0},
{t:'match',q:'Match number and value',pairs:[['හැත්තෑව','70'],['අසූව','80'],['අනූව','90'],['සීය','100']]}]},
{id:'si_tens_4',title:'Mix it',step:'mix',meta:'Any number to 100',vocab:[],ex:[
{t:'mc',q:'What is හතළිහ?',d:'හතළිහ',r:'hathaliha',o:['40','4','14','44'],a:0},
{t:'li',q:'Listen — which number?',say:'විසි එක',o:['විසි එක','විස්ස','විසි පහ','එකොළහ'],a:0},
{t:'mc',q:'"32" =',o:['තිස් දෙක','තිහ දෙක','දෙතිස්','විසි දෙක'],a:0},
{t:'mc',q:'What is අනූව?',d:'අනූව',r:'anuuwa',o:['90','80','9','19'],a:0},
{t:'li',q:'Listen — which number?',say:'හැත්තෑව',o:['හැත්තෑව','හැට','අසූව','හතළිහ'],a:0},
{t:'match',q:'Match number and value',pairs:[['විසි එක','21'],['තිස් දෙක','32'],['පනස් පහ','55'],['සීය','100']]},
{t:'mc',q:'Count up: තිහ, හතළිහ, ___',o:['පනහ','හැට','විස්ස','සීය'],a:0}]},
{id:'si_tens_5',title:'Checkpoint',step:'checkpoint',meta:'Tens mastered?',vocab:[],ex:[
{t:'mc',q:'What is තිහ?',d:'තිහ',r:'thiha',o:['30','13','3','33'],a:0},
{t:'li',q:'Listen — which number?',say:'අනූව',o:['අනූව','අසූව','නවය','සීය'],a:0},
{t:'mc',q:'Which is 100?',o:['සීය','අනූව','දහය','හැට'],a:0},
{t:'mc',q:'"21" =',o:['විසි එක','විස්ස එක','එක විස්ස','එකොළහ'],a:0},
{t:'li',q:'Listen — which number?',say:'හතළිහ',o:['හතළිහ','හතර','හැට','තිහ'],a:0},
{t:'match',q:'Match number and value',pairs:[['පනහ','50'],['හැට','60'],['අසූව','80'],['සීය','100']]}]},

/* --- Topic 31: rupees & prices --- */
{id:'si_money',title:'Rupees & prices',step:'learn',meta:'මේක කීයද — සල්ලි talk',vocab:[['සල්ලි','salli','money'],['රුපියල්','rupiyal','rupees'],['කීයද','kiiyadha','how much?'],['මේක කීයද','meeka kiiyadha','how much is this?'],['රුපියල් සීයයි','rupiyal siiyayi','it is 100 rupees']],ex:[
{t:'note',tag:'Money words',q:'සල්ලි & රුපියල්',body:'<p><span class="deva">සල්ලි</span> <b>salli</b> = money · <span class="deva">රුපියල්</span> <b>rupiyal</b> = rupees.</p><p>THE shopping question: <span class="deva">මේක කීයද</span> <b>meeka kiiyadha</b> — how much is this? (<span class="deva">කීයද</span> <b>kiiyadha</b> = how much — another question word with its ද built in.)</p>',eg:[['මේක කීයද','meeka kiiyadha','how much is this?'],['සල්ලි','salli','money']]},
{t:'mc',q:'What does කීයද mean?',d:'කීයද',r:'kiiyadha',o:['how much?','how many people?','what time?','which one?'],a:0},
{t:'mc',q:'"How much is this?" =',o:['මේක කීයද','මේක මොකක්ද','කීයද මේක ද','මොකක්ද කීයද'],a:0},
{t:'note',tag:'Answering a price',q:'number + යි',body:'<p>Prices answer with <b>-යි</b> on the number: <span class="deva">රුපියල් සීයයි</span> <b>rupiyal siiyayi</b> = (it is) 100 rupees · <span class="deva">විස්සයි</span> <b>wissayi</b> = it is 20.</p><p>That little <b>-යි</b> means "is" — you have met it inside <span class="deva">හොඳයි</span>! The full story comes in Zone 6.</p>',eg:[['රුපියල් සීයයි','rupiyal siiyayi','it is 100 rupees'],['විස්සයි','wissayi','it is 20']]},
{t:'mc',q:'රුපියල් සීයයි means…',d:'රුපියල් සීයයි',r:'rupiyal siiyayi',o:['it is 100 rupees','100 rupees, please','is it 100 rupees?','it is 10 rupees'],a:0},
{t:'wb',q:'Ask: how much is this?',a:['මේක','කීයද'],pool:['මේක','කීයද','සල්ලි']},
{t:'mc',q:'The -යි in විස්සයි does the job of…',o:['"is"','"and"','"very"','a question'],a:0}]},
{id:'si_money_2',title:'Hear it',step:'recognize',meta:'Prices by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'මේක කීයද',o:['මේක කීයද','මේක මොකක්ද','කීයද','මේක තේද'],a:0},
{t:'mc',q:'Which word means "money"?',o:['සල්ලි','රුපියල්','කීයද','සීය'],a:0},
{t:'li',q:'Listen — which word?',say:'සල්ලි',o:['සල්ලි','මල්ලී','රුපියල්','සීය'],a:0},
{t:'mc',q:'What does රුපියල් mean?',d:'රුපියල්',r:'rupiyal',o:['rupees','riches','a wallet','change'],a:0},
{t:'li',q:'Listen — which phrase?',say:'රුපියල් සීයයි',o:['රුපියල් සීයයි','රුපියල් පනහයි','සීය','සල්ලි'],a:0},
{t:'mc',q:'විස්සයි as a price means…',d:'විස්සයි',r:'wissayi',o:['it is 20','it is 25','20, please','is it 20?'],a:0},
{t:'li',q:'Listen — which word?',say:'කීයද',o:['කීයද','කවුද','කොහෙද','මොකක්ද'],a:0}]},
{id:'si_money_3',title:'Build it',step:'build',meta:'Ask & answer prices',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['සල්ලි','money'],['රුපියල්','rupees'],['කීයද','how much?'],['සීයයි','it is 100']]},
{t:'wb',q:'Ask: how much is this?',a:['මේක','කීයද'],pool:['මේක','කීයද','කවුද']},
{t:'mc',q:'Answer "it is 50 rupees":',o:['රුපියල් පනහයි','රුපියල් පනහ ද','පනහ රුපියල්','රුපියල් සීයයි'],a:0},
{t:'wb',q:'Answer: it is 100 rupees',a:['රුපියල්','සීයයි'],pool:['රුපියල්','සීයයි','සීය']},
{t:'li',q:'Listen — which phrase?',say:'විස්සයි',o:['විස්සයි','විස්ස','සීයයි','විසි එක'],a:0},
{t:'mc',q:'ආප්ප කීයද asks…',d:'ආප්ප කීයද',r:'aappa kiiyadha',o:['how much are the hoppers?','how many hoppers do you have?','are these hoppers?','where are the hoppers?'],a:0}]},
{id:'si_money_4',title:'Mix it',step:'mix',meta:'Price conversations',vocab:[],ex:[
{t:'mc',q:'තේ එක කීයද? — a natural answer:',o:['රුපියල් පනහයි','පනහ ද','තේ එකක් දෙන්න','මට එපා'],a:0},
{t:'wb',q:'Ask the price of the book: පොත කීයද',a:['පොත','කීයද'],pool:['පොත','කීයද','කීයක්']},
{t:'li',q:'Listen — which phrase?',say:'රුපියල් පනහයි',o:['රුපියල් පනහයි','රුපියල් සීයයි','පනහ','රුපියල් විස්සයි'],a:0},
{t:'mc',q:'Turn තිහ into "it is 30":',o:['තිහයි','තිහ ද','තිහක්','තිහට'],a:0},
{t:'li',q:'Listen — which word?',say:'රුපියල්',o:['රුපියල්','සල්ලි','සීය','පනහ'],a:0},
{t:'match',q:'Match price and value',pairs:[['විස්සයි','it is 20'],['තිහයි','it is 30'],['පනහයි','it is 50'],['සීයයි','it is 100']]},
{t:'mc',q:'Which question fits a kadē till?',o:['මේක කීයද','මේක කොහෙද','මේක කවුද','මේක ඇයි'],a:0}]},
{id:'si_money_5',title:'Checkpoint',step:'checkpoint',meta:'Money talk mastered?',vocab:[],ex:[
{t:'mc',q:'"How much is this?" =',o:['මේක කීයද','මේක මොකක්ද','කීයක් ද','මේක සල්ලිද'],a:0},
{t:'wb',q:'Answer: it is 100 rupees',a:['රුපියල්','සීයයි'],pool:['රුපියල්','සීයයි','කීයද']},
{t:'li',q:'Listen — which word?',say:'සල්ලි',o:['සල්ලි','රුපියල්','කීයද','සීයයි'],a:0},
{t:'mc',q:'Prices answer with…',o:['-යි on the number','-ද on the number','the bare number','-ට on the number'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මේක කීයද',o:['මේක කීයද','මේක තේද','කීයද','පොත කීයද'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මේක කීයද','how much is this?'],['රුපියල් සීයයි','it is 100 rupees'],['සල්ලි','money'],['විස්සයි','it is 20']]}]},

/* --- Topic 32: bargaining --- */
{id:'si_shop',title:'Bargain a little',step:'learn',meta:'ගණන් වැඩියි … අඩු කරන්න',vocab:[['ගණන් වැඩියි','ganan waediyi','too expensive'],['ලාබයි','laabayi','cheap'],['අඩු කරන්න','adu karanna','please reduce it'],['ටිකක් අඩු කරන්න','tikak adu karanna','reduce it a little'],['මම මේක ගන්නවා','mama meeka gannawaa','I will take this'],['ගන්නවා','gannawaa','takes / buys']],ex:[
{t:'note',tag:'Too much!',q:'ගණන් වැඩියි',body:'<p>Heard the price? If it stings: <span class="deva">ගණන් වැඩියි</span> <b>ganan waediyi</b> — "the price is too much". The happy opposite: <span class="deva">ලාබයි</span> <b>laabayi</b> — cheap!</p><p>Then ask, with a smile: <span class="deva">ටිකක් අඩු කරන්න</span> <b>tikak adu karanna</b> — reduce it a little. (There is your kadē word <span class="deva">ටිකක්</span> doing diplomacy.)</p>',eg:[['ගණන් වැඩියි','ganan waediyi','too expensive'],['ටිකක් අඩු කරන්න','tikak adu karanna','reduce it a little'],['ලාබයි','laabayi','cheap']]},
{t:'mc',q:'ගණන් වැඩියි means…',d:'ගණන් වැඩියි',r:'ganan waediyi',o:['too expensive','very cheap','good price','no money'],a:0},
{t:'mc',q:'Ask for a better price:',o:['ටිකක් අඩු කරන්න','ගණන් වැඩියි','ලාබයි','මම ගන්නවා'],a:0},
{t:'note',tag:'Seal the deal',q:'මම මේක ගන්නවා',body:'<p>Happy with the price? <span class="deva">මම මේක ගන්නවා</span> <b>mama meeka gannawaa</b> — I will take this (<span class="deva">ගන්නවා</span> <b>gannawaa</b> = take/buy).</p><p>Not happy? Your Zone 3 friend: <span class="deva">මට එපා</span> — and walk slowly. Prices soften behind walking customers.</p>',eg:[['මම මේක ගන්නවා','mama meeka gannawaa','I will take this'],['මට එපා','mata epaa','I do not want it']]},
{t:'mc',q:'What does ගන්නවා mean?',d:'ගන්නවා',r:'gannawaa',o:['takes / buys','gives','sells','reduces'],a:0},
{t:'wb',q:'Say: I will take this',a:['මම','මේක','ගන්නවා'],pool:['මම','මේක','ගන්නවා','දෙන්න']},
{t:'mc',q:'The polite walk-away phrase:',o:['මට එපා','මට ඕනැ','ලාබයි','දෙන්න'],a:0}]},
{id:'si_shop_2',title:'Hear it',step:'recognize',meta:'Bargaining by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ගණන් වැඩියි',o:['ගණන් වැඩියි','ලාබයි','අඩු කරන්න','මම ගන්නවා'],a:0},
{t:'mc',q:'Which word means "cheap"?',o:['ලාබයි','වැඩියි','ගණන්','සල්ලි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අඩු කරන්න',o:['අඩු කරන්න','ටිකක් අඩු කරන්න','ගණන් වැඩියි','දෙන්න'],a:0},
{t:'mc',q:'මම මේක ගන්නවා means…',d:'මම මේක ගන්නවා',r:'mama meeka gannawaa',o:['I will take this','give me this','how much is this?','I do not want this'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ලාබයි',o:['ලාබයි','වැඩියි','ගණන්','සල්ලි'],a:0},
{t:'mc',q:'අඩු කරන්න literally asks to…',o:['make it less','make it more','wrap it up','count again'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම මේක ගන්නවා',o:['මම මේක ගන්නවා','මට මේක එපා','මේක කීයද','ටිකක් අඩු කරන්න'],a:0}]},
{id:'si_shop_3',title:'Build it',step:'build',meta:'Haggle politely',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ගණන් වැඩියි','too expensive'],['ලාබයි','cheap'],['අඩු කරන්න','reduce it'],['ගන්නවා','takes / buys']]},
{t:'wb',q:'Say: reduce it a little',a:['ටිකක්','අඩු','කරන්න'],pool:['ටිකක්','අඩු','කරන්න','වැඩියි']},
{t:'mc',q:'Deal agreed! You say…',o:['හරි, මම මේක ගන්නවා','ගණන් වැඩියි','මට එපා','කීයද'],a:0},
{t:'wb',q:'Complain: too expensive',a:['ගණන්','වැඩියි'],pool:['ගණන්','වැඩියි','ලාබයි']},
{t:'li',q:'Listen — which phrase?',say:'ටිකක් අඩු කරන්න',o:['ටිකක් අඩු කරන්න','අඩු කරන්න','ගණන් වැඩියි','තව එකක් දෙන්න'],a:0},
{t:'mc',q:'The bargaining flow:',o:['කීයද → ගණන් වැඩියි → අඩු කරන්න → ගන්නවා','ගන්නවා → කීයද','අඩු කරන්න → කීයද → එපා → ගන්නවා','any order'],a:0}]},
{id:'si_shop_4',title:'Mix it',step:'mix',meta:'Market day',vocab:[],ex:[
{t:'mc',q:'The seller says රුපියල් සීයයි. It feels steep:',o:['ගණන් වැඩියි — ටිකක් අඩු කරන්න','හරි — ලාබයි','මම ගන්නවා','ඔව්'],a:0},
{t:'wb',q:'Say: I will take the book',a:['මම','පොත','ගන්නවා'],pool:['මම','පොත','ගන්නවා','දෙන්න']},
{t:'li',q:'Listen — which phrase?',say:'ගණන් වැඩියි',o:['ගණන් වැඩියි','ටිකක් අඩු කරන්න','ලාබයි','මට එපා'],a:0},
{t:'mc',q:'A price drops from සීය to පනහ. Now it is…',o:['ලාබයි','වැඩියි','නෑ','එපා'],a:0},
{t:'li',q:'Listen — which word?',say:'ගන්නවා',o:['ගන්නවා','දන්නවා','දෙන්න','යනවා'],a:0},
{t:'match',q:'Match move and phrase',pairs:[['ask price','මේක කීයද'],['push back','ගණන් වැඩියි'],['ask discount','අඩු කරන්න'],['close the deal','මම මේක ගන්නවා']]},
{t:'mc',q:'Bargaining works best with…',o:['a smile and ටිකක්','a frown','shouting','silence'],a:0}]},
{id:'si_shop_5',title:'Checkpoint',step:'checkpoint',meta:'Bargaining mastered?',vocab:[],ex:[
{t:'mc',q:'"Too expensive" =',o:['ගණන් වැඩියි','ලාබයි','අඩු කරන්න','සල්ලි නෑ'],a:0},
{t:'wb',q:'Ask: reduce it a little',a:['ටිකක්','අඩු','කරන්න'],pool:['ටිකක්','අඩු','කරන්න','ගන්නවා']},
{t:'li',q:'Listen — which phrase?',say:'මම මේක ගන්නවා',o:['මම මේක ගන්නවා','මට එපා','ගණන් වැඩියි','මේක කීයද'],a:0},
{t:'mc',q:'"Cheap" =',o:['ලාබයි','වැඩියි','සල්ලි','සීයයි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අඩු කරන්න',o:['අඩු කරන්න','ටිකක් අඩු කරන්න','දෙන්න','කරන්න'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ගණන් වැඩියි','too expensive'],['ලාබයි','cheap'],['ටිකක් අඩු කරන්න','reduce it a little'],['මම මේක ගන්නවා','I will take this']]}]},

/* --- Topic 33: clock time --- */
{id:'si_time2',title:'What time is it?',step:'learn',meta:'වෙලාව කීයද — දෙකයි',vocab:[['වෙලාව','welaawa','time'],['වෙලාව කීයද','welaawa kiiyadha','what time is it?'],['දෙකයි','dhekayi','it is two'],['දෙක හමාර','dheka hamaara','half past two'],['කීයටද','kiiyatadha','at what time?'],['දෙකට','dhekata','at two']],ex:[
{t:'note',tag:'Asking the hour',q:'වෙලාව කීයද',body:'<p><span class="deva">වෙලාව</span> <b>welaawa</b> = time. Ask: <span class="deva">වෙලාව කීයද</span> <b>welaawa kiiyadha</b> — literally "the time is how much?"</p><p>Answer with your price trick — number + යි: <span class="deva">දෙකයි</span> <b>dhekayi</b> it is two · <span class="deva">පහයි</span> it is five. Half past: add <span class="deva">හමාර</span> <b>hamaara</b>: <span class="deva">දෙක හමාර</span> = half past two.</p>',eg:[['වෙලාව කීයද','welaawa kiiyadha','what time is it?'],['දෙකයි','dhekayi','it is two'],['දෙක හමාර','dheka hamaara','half past two']]},
{t:'mc',q:'වෙලාව කීයද asks…',d:'වෙලාව කීයද',r:'welaawa kiiyadha',o:['what time is it?','how much is this?','how long?','what day is it?'],a:0},
{t:'mc',q:'"It is two" =',o:['දෙකයි','දෙක','දෙකට','දෙකද'],a:0},
{t:'note',tag:'AT a time',q:'කීයටද & -ට',body:'<p>"AT what time?" = <span class="deva">කීයටද</span> <b>kiiyatadha</b> — your -ට ending riding on the question!</p><p>Answer the same way: <span class="deva">දෙකට</span> <b>dhekata</b> at two · <span class="deva">උදේ හතට</span> <b>udhee hathata</b> at 7 in the morning. <span class="deva">බස් එක කීයටද?</span> — <span class="deva">තුනට</span>!</p>',eg:[['කීයටද','kiiyatadha','at what time?'],['දෙකට','dhekata','at two'],['උදේ හතට','udhee hathata','at 7 am']]},
{t:'mc',q:'What does කීයටද ask?',d:'කීයටද',r:'kiiyatadha',o:['at what time?','what time is it now?','how many?','how much money?'],a:0},
{t:'wb',q:'Ask: what time is it?',a:['වෙලාව','කීයද'],pool:['වෙලාව','කීයද','කීයටද']},
{t:'mc',q:'"At five" =',o:['පහට','පහයි','පහ','පහද'],a:0}]},
{id:'si_time2_2',title:'Hear it',step:'recognize',meta:'Clock talk by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'වෙලාව කීයද',o:['වෙලාව කීයද','මේක කීයද','කීයටද','වෙලාව'],a:0},
{t:'mc',q:'දෙක හමාර means…',d:'දෙක හමාර',r:'dheka hamaara',o:['half past two','two o clock','two thirty-five','half past twelve'],a:0},
{t:'li',q:'Listen — which phrase?',say:'දෙකයි',o:['දෙකයි','දෙකට','දෙක','දෙක හමාර'],a:0},
{t:'mc',q:'දෙකයි vs දෙකට:',o:['it is two vs at two','at two vs it is two','both mean at two','both mean two things'],a:0},
{t:'li',q:'Listen — which word?',say:'වෙලාව',o:['වෙලාව','එළවළු','සල්ලි','හමාර'],a:0},
{t:'mc',q:'උදේ හතට means…',d:'උදේ හතට',r:'udhee hathata',o:['at 7 in the morning','it is 7 am','7 mornings','before 7'],a:0},
{t:'li',q:'Listen — which word?',say:'කීයටද',o:['කීයටද','කීයද','කීයක්','කවුද'],a:0}]},
{id:'si_time2_3',title:'Build it',step:'build',meta:'Tell the time',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['වෙලාව කීයද','what time is it?'],['දෙකයි','it is two'],['දෙක හමාර','half past two'],['දෙකට','at two']]},
{t:'wb',q:'Ask: at what time is the bus? — bus first',a:['බස් එක','කීයටද'],pool:['බස් එක','කීයටද','කීයද']},
{t:'mc',q:'"It is five" =',o:['පහයි','පහට','පහ හමාර','පහද'],a:0},
{t:'wb',q:'Say: at 7 in the morning',a:['උදේ','හතට'],pool:['උදේ','හතට','හතයි']},
{t:'li',q:'Listen — which phrase?',say:'දෙක හමාර',o:['දෙක හමාර','දෙකයි','දෙකට','හමාර'],a:0},
{t:'mc',q:'හමාර means…',d:'හමාර',r:'hamaara',o:['half (past)','quarter','exactly','almost'],a:0}]},
{id:'si_time2_4',title:'Mix it',step:'mix',meta:'Times of your day',vocab:[],ex:[
{t:'mc',q:'වෙලාව කීයද? The clock shows 3:00.',o:['තුනයි','තුනට','තුන හමාර','තුනද'],a:0},
{t:'wb',q:'Say: we go at two',a:['අපි','දෙකට','යනවා'],pool:['අපි','දෙකට','යනවා','දෙකයි']},
{t:'li',q:'Listen — which phrase?',say:'උදේ හතට',o:['උදේ හතට','හවස හතට','උදේ පහට','හතයි'],a:0},
{t:'mc',q:'The clock shows 4:30.',o:['හතර හමාර','හතරයි','හතරට','හතර දෙක'],a:0},
{t:'li',q:'Listen — which phrase?',say:'තුනට',o:['තුනට','තුනයි','දෙකට','තුන'],a:0},
{t:'match',q:'Match time and phrase',pairs:[['2:00','දෙකයි'],['2:30','දෙක හමාර'],['at 2','දෙකට'],['at what time?','කීයටද']]},
{t:'mc',q:'බස් එක උදේ අටට එනවා means…',d:'බස් එක උදේ අටට එනවා',r:'bas eka udhee atata enawaa',o:['the bus comes at 8 am','the bus is 8 hours late','eight buses come','the bus left at 8'],a:0}]},
{id:'si_time2_5',title:'Checkpoint',step:'checkpoint',meta:'Clock mastered?',vocab:[],ex:[
{t:'mc',q:'"What time is it?" =',o:['වෙලාව කීයද','කීයටද','මේක කීයද','වෙලාව මොකක්ද'],a:0},
{t:'wb',q:'Answer: it is two',a:['දෙකයි'],pool:['දෙකයි','දෙකට']},
{t:'li',q:'Listen — which phrase?',say:'දෙකට',o:['දෙකට','දෙකයි','දෙක හමාර','කීයටද'],a:0},
{t:'mc',q:'"Half past five" =',o:['පහ හමාර','පහයි','පහට','හමාර පහ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'වෙලාව කීයද',o:['වෙලාව කීයද','මේක කීයද','කීයටද','වෙලාව තියෙනවද'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['දෙකයි','it is two'],['දෙකට','at two'],['දෙක හමාර','half past two'],['කීයටද','at what time?']]}]},

/* --- Topic 34: days of the week --- */
{id:'si_days',title:'Days of the week',step:'learn',meta:'ඉරිදා සඳුදා … the sun & moon days',vocab:[['සඳුදා','sandhudhaa','Monday'],['අඟහරුවාදා','angaharuwaadhaa','Tuesday'],['බදාදා','badhaadhaa','Wednesday'],['බ්‍රහස්පතින්දා','brahaspathindhaa','Thursday'],['සිකුරාදා','sikuraadhaa','Friday'],['සෙනසුරාදා','senasuraadhaa','Saturday'],['ඉරිදා','iridhaa','Sunday'],['සතිය','sathiya','week']],ex:[
{t:'note',tag:'Sun-day & Moon-day',q:'ඉරිදා & සඳුදා',body:'<p><span class="deva">ඉර</span> = the sun, so <span class="deva">ඉරිදා</span> <b>iridhaa</b> = Sun-day. <span class="deva">සඳ</span> = the moon, so <span class="deva">සඳුදා</span> <b>sandhudhaa</b> = Moon-day. Exactly like English!</p><p>The rest of the working week: <span class="deva">අඟහරුවාදා</span> Tue · <span class="deva">බදාදා</span> Wed · <span class="deva">බ්‍රහස්පතින්දා</span> Thu · <span class="deva">සිකුරාදා</span> Fri · <span class="deva">සෙනසුරාදා</span> Sat.</p>',eg:[['ඉරිදා','iridhaa','Sunday'],['සඳුදා','sandhudhaa','Monday'],['සිකුරාදා','sikuraadhaa','Friday']]},
{t:'mc',q:'ඉරිදා is named for…',d:'ඉරිදා',r:'iridhaa',o:['the sun','the moon','the sea','rice'],a:0},
{t:'mc',q:'Which day is Monday?',o:['සඳුදා','ඉරිදා','බදාදා','සිකුරාදා'],a:0},
{t:'note',tag:'No "is" needed',q:'අද සඳුදා',body:'<p>Say what day it is by putting two nouns side by side — the trick you learned with names: <span class="deva">අද සඳුදා</span> <b>adha sandhudhaa</b> = today (is) Monday · <span class="deva">හෙට අඟහරුවාදා</span> = tomorrow (is) Tuesday.</p><p><span class="deva">සතිය</span> <b>sathiya</b> = week.</p>',eg:[['අද සඳුදා','adha sandhudhaa','today is Monday'],['හෙට අඟහරුවාදා','heta angaharuwaadhaa','tomorrow is Tuesday'],['සතිය','sathiya','week']]},
{t:'mc',q:'අද සඳුදා means…',d:'අද සඳුදා',r:'adha sandhudhaa',o:['today is Monday','Monday is soon','yesterday was Monday','on Monday'],a:0},
{t:'mc',q:'Which day is Friday?',o:['සිකුරාදා','සෙනසුරාදා','බදාදා','ඉරිදා'],a:0},
{t:'wb',q:'Say: today is Sunday',a:['අද','ඉරිදා'],pool:['අද','ඉරිදා','සඳුදා']}]},
{id:'si_days_2',title:'Hear them',step:'recognize',meta:'Days by ear',vocab:[],ex:[
{t:'li',q:'Listen — which day?',say:'ඉරිදා',o:['ඉරිදා','සඳුදා','බදාදා','සිකුරාදා'],a:0},
{t:'li',q:'Listen — which day?',say:'බදාදා',o:['බදාදා','සඳුදා','සෙනසුරාදා','අඟහරුවාදා'],a:0},
{t:'mc',q:'Which day is Thursday?',o:['බ්‍රහස්පතින්දා','බදාදා','අඟහරුවාදා','සෙනසුරාදා'],a:0},
{t:'mc',q:'සෙනසුරාදා is…',d:'සෙනසුරාදා',r:'senasuraadhaa',o:['Saturday','Sunday','Friday','Tuesday'],a:0},
{t:'li',q:'Listen — which day?',say:'සිකුරාදා',o:['සිකුරාදා','සෙනසුරාදා','ඉරිදා','බදාදා'],a:0},
{t:'mc',q:'What does සතිය mean?',d:'සතිය',r:'sathiya',o:['week','Saturday','day','month'],a:0},
{t:'li',q:'Listen — which day?',say:'සඳුදා',o:['සඳුදා','ඉරිදා','බදාදා','සිකුරාදා'],a:0}]},
{id:'si_days_3',title:'Pair them up',step:'build',meta:'Match the days',vocab:[],ex:[
{t:'match',q:'Match day and meaning',pairs:[['සඳුදා','Monday'],['අඟහරුවාදා','Tuesday'],['බදාදා','Wednesday'],['බ්‍රහස්පතින්දා','Thursday']]},
{t:'mc',q:'Which day is Saturday?',o:['සෙනසුරාදා','සිකුරාදා','සඳුදා','ඉරිදා'],a:0},
{t:'wb',q:'Say: tomorrow is Friday',a:['හෙට','සිකුරාදා'],pool:['හෙට','සිකුරාදා','අද']},
{t:'li',q:'Listen — which day?',say:'අඟහරුවාදා',o:['අඟහරුවාදා','බදාදා','සඳුදා','බ්‍රහස්පතින්දා'],a:0},
{t:'mc',q:'The half-nasal ඟ hides in…',o:['අඟහරුවාදා','ඉරිදා','බදාදා','සතිය'],a:0},
{t:'match',q:'Match day and meaning',pairs:[['සිකුරාදා','Friday'],['සෙනසුරාදා','Saturday'],['ඉරිදා','Sunday'],['සතිය','week']]}]},
{id:'si_days_4',title:'Mix it',step:'mix',meta:'Your week',vocab:[],ex:[
{t:'mc',q:'Sunday and Monday are named for…',o:['the sun and the moon','two kings','rice and tea','the sea and hills'],a:0},
{t:'wb',q:'Say: today is Wednesday',a:['අද','බදාදා'],pool:['අද','බදාදා','හෙට']},
{t:'li',q:'Listen — which day?',say:'බ්‍රහස්පතින්දා',o:['බ්‍රහස්පතින්දා','අඟහරුවාදා','සෙනසුරාදා','බදාදා'],a:0},
{t:'mc',q:'අද සිකුරාදා. හෙට ___',o:['සෙනසුරාදා','ඉරිදා','සඳුදා','බදාදා'],a:0},
{t:'li',q:'Listen — which day?',say:'සෙනසුරාදා',o:['සෙනසුරාදා','සිකුරාදා','සඳුදා','ඉරිදා'],a:0},
{t:'match',q:'Match day and meaning',pairs:[['ඉරිදා','Sunday'],['සඳුදා','Monday'],['බදාදා','Wednesday'],['සිකුරාදා','Friday']]},
{t:'mc',q:'අපි ඉරිදා ගමට යනවා means…',d:'අපි ඉරිදා ගමට යනවා',r:'api iridhaa gamata yanawaa',o:['on Sunday we go to the village','the village rests on Sunday','Sunday is village day','we went last Sunday'],a:0}]},
{id:'si_days_5',title:'Checkpoint',step:'checkpoint',meta:'The week mastered?',vocab:[],ex:[
{t:'mc',q:'Sunday =',o:['ඉරිදා','සඳුදා','සෙනසුරාදා','සිකුරාදා'],a:0},
{t:'li',q:'Listen — which day?',say:'සඳුදා',o:['සඳුදා','ඉරිදා','අඟහරුවාදා','බදාදා'],a:0},
{t:'wb',q:'Say: today is Friday',a:['අද','සිකුරාදා'],pool:['අද','සිකුරාදා','සෙනසුරාදා']},
{t:'mc',q:'Which day is Wednesday?',o:['බදාදා','බ්‍රහස්පතින්දා','සඳුදා','අඟහරුවාදා'],a:0},
{t:'li',q:'Listen — which word?',say:'සතිය',o:['සතිය','සීය','සල්ලි','සිකුරාදා'],a:0},
{t:'match',q:'Match day and meaning',pairs:[['අඟහරුවාදා','Tuesday'],['බ්‍රහස්පතින්දා','Thursday'],['සෙනසුරාදා','Saturday'],['ඉරිදා','Sunday']]}]},

/* --- Topic 35: counting things --- */
{id:'si_count',title:'Counting things',step:'learn',meta:'ආප්ප දෙකක් — thing + number + ක්',vocab:[['දෙකක්','dhekak','two (of something)'],['තුනක්','thunak','three (of something)'],['හතරක්','hatharak','four (of something)'],['ආප්ප දෙකක්','aappa dhekak','two hoppers'],['කීයක්','kiiyak','how many?']],ex:[
{t:'note',tag:'The counting pattern',q:'thing + number + ක්',body:'<p>Counting things flips English around: the thing comes FIRST, then the number wearing <b>-ක්</b>: <span class="deva">ආප්ප දෙකක්</span> <b>aappa dhekak</b> = two hoppers · <span class="deva">තේ තුනක්</span> = three teas.</p><p>That <b>-ක්</b> is your old friend from <span class="deva">එකක්</span> (eka + ක්) — it has been the counting mark all along!</p>',eg:[['ආප්ප දෙකක්','aappa dhekak','two hoppers'],['තේ තුනක්','thee thunak','three teas'],['බිත්තර හතරක්','biththara hatharak','four eggs']]},
{t:'mc',q:'"Two hoppers" =',o:['ආප්ප දෙකක්','දෙක ආප්ප','ආප්ප දෙක','දෙකක් ආප්ප'],a:0},
{t:'mc',q:'What does තුනක් mean?',d:'තුනක්',r:'thunak',o:['three (of something)','third','thirty','only three'],a:0},
{t:'note',tag:'How many?',q:'කීයක්',body:'<p>Ask "how many?" with <span class="deva">කීයක්</span> <b>kiiyak</b>: <span class="deva">කීයක් ඕනැද</span> <b>kiiyak oonaedha</b> — how many do you want?</p><p>Now order like a pro: <span class="deva">මට ආප්ප හතරක් දෙන්න</span> — four hoppers, please!</p>',eg:[['කීයක් ඕනැද','kiiyak oonaedha','how many do you want?'],['මට ආප්ප හතරක් දෙන්න','mata aappa hatharak dhenna','four hoppers, please']]},
{t:'mc',q:'කීයක් ඕනැද asks…',d:'කීයක් ඕනැද',r:'kiiyak oonaedha',o:['how many do you want?','how much is it?','what do you want?','do you want any?'],a:0},
{t:'wb',q:'Order: please give me two teas',a:['මට','තේ','දෙකක්','දෙන්න'],pool:['මට','තේ','දෙකක්','දෙන්න','දෙක'],},
{t:'mc',q:'කීයද vs කීයක්:',o:['how much (price) vs how many (things)','same meaning','how many vs how much','both are prices'],a:0}]},
{id:'si_count_2',title:'Hear it',step:'recognize',meta:'Counted things by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ආප්ප දෙකක්',o:['ආප්ප දෙකක්','තේ දෙකක්','ආප්ප තුනක්','දෙකක්'],a:0},
{t:'mc',q:'Which word means "how many?"',o:['කීයක්','කීයද','කීයටද','කවුද'],a:0},
{t:'li',q:'Listen — which word?',say:'තුනක්',o:['තුනක්','දෙකක්','හතරක්','තුන'],a:0},
{t:'mc',q:'තේ තුනක් means…',d:'තේ තුනක්',r:'thee thunak',o:['three teas','tea for three people','the third tea','tea at three'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කීයක් ඕනැද',o:['කීයක් ඕනැද','කීයද','මොනවද ඕනැ','ඕනැද'],a:0},
{t:'mc',q:'The counting order is…',o:['thing, then number-ක්','number-ක්, then thing','either way','number twice'],a:0},
{t:'li',q:'Listen — which word?',say:'හතරක්',o:['හතරක්','හතර','තුනක්','දෙකක්'],a:0}]},
{id:'si_count_3',title:'Build it',step:'build',meta:'Count your order',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['දෙකක්','two of them'],['තුනක්','three of them'],['හතරක්','four of them'],['කීයක්','how many?']]},
{t:'wb',q:'Order: please give me four hoppers',a:['මට','ආප්ප','හතරක්','දෙන්න'],pool:['මට','ආප්ප','හතරක්','දෙන්න','හතර']},
{t:'mc',q:'"Three eggs" =',o:['බිත්තර තුනක්','තුන බිත්තර','බිත්තර තුන','තුනක් බිත්තර'],a:0},
{t:'wb',q:'Ask: how many do you want?',a:['කීයක්','ඕනැද'],pool:['කීයක්','ඕනැද','කීයද']},
{t:'li',q:'Listen — which phrase?',say:'තේ දෙකක්',o:['තේ දෙකක්','ආප්ප දෙකක්','තේ එකක්','දෙකක්'],a:0},
{t:'mc',q:'එකක් fits the pattern because…',o:['it is eka + ක්','it is irregular','it means only','it is a different word'],a:0}]},
{id:'si_count_4',title:'Mix it',step:'mix',meta:'Orders & amounts',vocab:[],ex:[
{t:'mc',q:'මට ඉඳිආප්ප පහක් දෙන්න means…',d:'මට ඉඳිආප්ප පහක් දෙන්න',r:'mata indhiaappa pahak dhenna',o:['five string hoppers, please','fifty string hoppers','string hoppers at five','no string hoppers'],a:0},
{t:'wb',q:'Order: two egg hoppers please',a:['මට','බිත්තර ආප්ප','දෙකක්','දෙන්න'],pool:['මට','බිත්තර ආප්ප','දෙකක්','දෙන්න','දෙක'],},
{t:'li',q:'Listen — which phrase?',say:'බිත්තර හතරක්',o:['බිත්තර හතරක්','ආප්ප හතරක්','බිත්තර දෙකක්','හතරක්'],a:0},
{t:'mc',q:'The kadē asks කීයක් ඕනැද. You want 3:',o:['තුනක්','තුන','තුනට','තුනයි'],a:0},
{t:'li',q:'Listen — which word?',say:'කීයක්',o:['කීයක්','කීයද','කීයටද','එකක්'],a:0},
{t:'match',q:'Match order and meaning',pairs:[['තේ එකක්','one tea'],['ආප්ප දෙකක්','two hoppers'],['බිත්තර තුනක්','three eggs'],['ඉඳිආප්ප පහක්','five string hoppers']]},
{t:'mc',q:'Number + යි vs number + ක්:',o:['"it is N" vs "N of them"','same thing','price vs time','question vs answer'],a:0}]},
{id:'si_count_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 5 complete?',vocab:[],ex:[
{t:'mc',q:'"Two teas" =',o:['තේ දෙකක්','දෙක තේ','තේ දෙක','දෙකයි තේ'],a:0},
{t:'wb',q:'Order: please give me two hoppers',a:['මට','ආප්ප','දෙකක්','දෙන්න'],pool:['මට','ආප්ප','දෙකක්','දෙන්න','ටිකක්']},
{t:'li',q:'Listen — which phrase?',say:'ආප්ප දෙකක්',o:['ආප්ප දෙකක්','ආප්ප තුනක්','තේ දෙකක්','ආප්ප එකක්'],a:0},
{t:'mc',q:'"How many?" =',o:['කීයක්','කීයද','කීයටද','මොකක්ද'],a:0},
{t:'li',q:'Listen — which word?',say:'දෙකක්',o:['දෙකක්','දෙක','දෙකයි','තුනක්'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['කීයක්','how many?'],['දෙකක්','two of them'],['කීයද','how much?'],['දෙකයි','it is two']]}]},

/* ===================== ZONE 6 · DESCRIBE IT ===================== */
/* --- Topic 36: -yi means is --- */
{id:'si_adj',title:'-යි means "is"',step:'learn',meta:'ලොකුයි පොඩියි රසයි',vocab:[['ලොකුයි','lokuyi','is big'],['පොඩියි','podiyi','is small'],['රසයි','rasayi','is tasty'],['නරකයි','narakayi','is bad'],['ලොකු','loku','big (before a noun)']],ex:[
{t:'note',tag:'The -යි secret',q:'adjective + යි = a sentence',body:'<p>Stick <b>-යි</b> on a describing word and you have a whole sentence: <span class="deva">මේක ලොකුයි</span> <b>meeka lokuyi</b> = this is big · <span class="deva">පොඩියි</span> it is small · <span class="deva">රසයි</span> <b>rasayi</b> it is tasty — THE word to make a cook glow.</p><p>You have known this since day one: <span class="deva">හොඳ</span> + යි = <span class="deva">හොඳයි</span>! And prices too: <span class="deva">සීයයි</span>.</p>',eg:[['මේක ලොකුයි','meeka lokuyi','this is big'],['රසයි','rasayi','tasty!'],['හොඳයි','hondhayi','good!']]},
{t:'mc',q:'What does රසයි mean?',d:'රසයි',r:'rasayi',o:['it is tasty','it is big','it is bad','it is hot'],a:0},
{t:'mc',q:'"This is small" =',o:['මේක පොඩියි','මේක පොඩි','පොඩියි මේක ද','මේක ලොකුයි'],a:0},
{t:'note',tag:'Before a noun',q:'Drop the -යි',body:'<p>In front of a noun the -යි comes off: <span class="deva">ලොකු ගෙදර</span> <b>loku gedhara</b> = a big house · <span class="deva">පොඩි කඩේ</span> = a little shop · <span class="deva">නරක පාර</span> = a bad road.</p><p>So: <span class="deva">ලොකු</span> describes, <span class="deva">ලොකුයි</span> declares.</p>',eg:[['ලොකු ගෙදර','loku gedhara','a big house'],['ගෙදර ලොකුයි','gedhara lokuyi','the house is big']]},
{t:'mc',q:'"A big house" =',o:['ලොකු ගෙදර','ගෙදර ලොකුයි','ලොකුයි ගෙදර','ගෙදර ලොකු ද'],a:0},
{t:'mc',q:'What does නරකයි mean?',d:'නරකයි',r:'narakayi',o:['it is bad','it is good','it is new','it is small'],a:0},
{t:'wb',q:'Say: the tea is tasty',a:['තේ','රසයි'],pool:['තේ','රසයි','රස']}]},
{id:'si_adj_2',title:'Hear it',step:'recognize',meta:'Describing by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ලොකුයි',o:['ලොකුයි','පොඩියි','රසයි','නරකයි'],a:0},
{t:'li',q:'Listen — which word?',say:'රසයි',o:['රසයි','නරකයි','ලොකුයි','හොඳයි'],a:0},
{t:'mc',q:'Which word declares "it is small"?',o:['පොඩියි','පොඩි','ලොකුයි','ටිකක්'],a:0},
{t:'mc',q:'මේක ලොකුයි means…',d:'මේක ලොකුයි',r:'meeka lokuyi',o:['this is big','this is heavy','is this big?','the big one'],a:0},
{t:'li',q:'Listen — which word?',say:'නරකයි',o:['නරකයි','රසයි','පොඩියි','හරි'],a:0},
{t:'mc',q:'ලොකු vs ලොකුයි:',o:['describes vs declares','declares vs describes','same use','big vs bigger'],a:0},
{t:'li',q:'Listen — which word?',say:'පොඩියි',o:['පොඩියි','ලොකුයි','පොඩි','රසයි'],a:0}]},
{id:'si_adj_3',title:'Build it',step:'build',meta:'Declare & describe',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ලොකුයි','is big'],['පොඩියි','is small'],['රසයි','is tasty'],['නරකයි','is bad']]},
{t:'wb',q:'Say: this is big',a:['මේක','ලොකුයි'],pool:['මේක','ලොකුයි','ලොකු']},
{t:'mc',q:'"A small shop" =',o:['පොඩි කඩේ','කඩේ පොඩියි','පොඩියි කඩේ','කඩේ පොඩි'],a:0},
{t:'wb',q:'Say: the hoppers are tasty',a:['ආප්ප','රසයි'],pool:['ආප්ප','රසයි','නරකයි']},
{t:'li',q:'Listen — which phrase?',say:'මේක ලොකුයි',o:['මේක ලොකුයි','මේක පොඩියි','ගෙදර ලොකුයි','ලොකු ගෙදර'],a:0},
{t:'mc',q:'The cook beams when you say…',o:['රසයි','නරකයි','ලොකුයි','කීයද'],a:0}]},
{id:'si_adj_4',title:'Mix it',step:'mix',meta:'Describing the world',vocab:[],ex:[
{t:'mc',q:'ගෙදර ලොකුයි means…',d:'ගෙදර ලොකුයි',r:'gedhara lokuyi',o:['the house is big','a big house','the house is far','the big house left'],a:0},
{t:'wb',q:'Say: this shop is small',a:['මේ','කඩේ','පොඩියි'],pool:['මේ','කඩේ','පොඩියි','පොඩි']},
{t:'li',q:'Listen — which phrase?',say:'තේ රසයි',o:['තේ රසයි','ආප්ප රසයි','තේ හොඳයි','රසයි'],a:0},
{t:'mc',q:'Which is a fragment, not a sentence?',o:['ලොකු ගෙදර','ගෙදර ලොකුයි','මේක පොඩියි','තේ රසයි'],a:0},
{t:'li',q:'Listen — which word?',say:'ලොකු',o:['ලොකු','ලොකුයි','පොඩි','නරක'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ලොකු කඩේ','a big shop'],['කඩේ ලොකුයි','the shop is big'],['පොඩි ගෙදර','a small house'],['බත් රසයි','the rice is tasty']]},
{t:'mc',q:'පාර නරකයි means…',d:'පාර නරකයි',r:'paara narakayi',o:['the road is bad','a bad road','the road is long','turn back'],a:0}]},
{id:'si_adj_5',title:'Checkpoint',step:'checkpoint',meta:'-යි mastered?',vocab:[],ex:[
{t:'mc',q:'"It is tasty" =',o:['රසයි','රස','රසද','රසට'],a:0},
{t:'wb',q:'Say: the house is big',a:['ගෙදර','ලොකුයි'],pool:['ගෙදර','ලොකුයි','ලොකු']},
{t:'li',q:'Listen — which word?',say:'පොඩියි',o:['පොඩියි','ලොකුයි','රසයි','පොඩි'],a:0},
{t:'mc',q:'"A big house" (describing, not declaring):',o:['ලොකු ගෙදර','ගෙදර ලොකුයි','ලොකුයි','ගෙදරයි'],a:0},
{t:'li',q:'Listen — which word?',say:'නරකයි',o:['නරකයි','රසයි','හොඳයි','ලොකුයි'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ලොකුයි','is big'],['පොඩියි','is small'],['රසයි','is tasty'],['ලොකු','big (before a noun)']]}]},

/* --- Topic 37: more adjectives --- */
{id:'si_adj2',title:'More describing words',step:'learn',meta:'ලස්සන උස පරණ අලුත්',vocab:[['ලස්සන','lassana','beautiful'],['ලස්සනයි','lassanayi','is beautiful'],['උස','usa','tall'],['පරණ','parana','old (things)'],['අලුත්','aluth','new']],ex:[
{t:'note',tag:'The compliment',q:'ලස්සනයි',body:'<p><span class="deva">ලස්සන</span> <b>lassana</b> = beautiful. Declared: <span class="deva">ලස්සනයි</span> <b>lassanayi</b> — THE compliment: <span class="deva">ලංකාව ලස්සනයි</span> = Sri Lanka is beautiful. Say it and watch faces light up.</p><p><span class="deva">උස</span> <b>usa</b> = tall: <span class="deva">එයා උසයි</span> = he is tall.</p>',eg:[['ලංකාව ලස්සනයි','lankaawa lassanayi','Sri Lanka is beautiful'],['එයා උසයි','eyaa usayi','he / she is tall']]},
{t:'mc',q:'What does ලස්සනයි mean?',d:'ලස්සනයි',r:'lassanayi',o:['is beautiful','is tall','is new','is tasty'],a:0},
{t:'mc',q:'"Sri Lanka is beautiful" =',o:['ලංකාව ලස්සනයි','ලස්සන ලංකාව','ලංකාව ලස්සන','ලස්සනයි ලංකාව ද'],a:0},
{t:'note',tag:'Old & new',q:'පරණ & අලුත්',body:'<p><span class="deva">පරණ</span> <b>parana</b> = old (for things): <span class="deva">පරණ ගෙදර</span> = an old house · <span class="deva">පරණයි</span> = it is old.</p><p><span class="deva">අලුත්</span> <b>aluth</b> = new: <span class="deva">අලුත් කඩේ</span> = a new shop, <span class="deva">අලුත් පොත</span> = a new book. It likes its spot before the noun.</p>',eg:[['පරණ ගෙදර','parana gedhara','an old house'],['අලුත් පොත','aluth potha','a new book']]},
{t:'mc',q:'What does අලුත් mean?',d:'අලුත්',r:'aluth',o:['new','old','tall','clean'],a:0},
{t:'mc',q:'"An old house" =',o:['පරණ ගෙදර','ගෙදර පරණයි','අලුත් ගෙදර','පරණයි'],a:0},
{t:'wb',q:'Say: he is tall',a:['එයා','උසයි'],pool:['එයා','උසයි','උස']}]},
{id:'si_adj2_2',title:'Hear them',step:'recognize',meta:'Spot the describers',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ලස්සනයි',o:['ලස්සනයි','ලස්සන','උසයි','පරණයි'],a:0},
{t:'li',q:'Listen — which word?',say:'අලුත්',o:['අලුත්','පරණ','උස','ලොකු'],a:0},
{t:'mc',q:'Which word means "tall"?',o:['උස','ලස්සන','පරණ','අලුත්'],a:0},
{t:'mc',q:'පරණ describes…',d:'පරණ',r:'parana',o:['old things','old people','tall things','new things'],a:0},
{t:'li',q:'Listen — which word?',say:'උස',o:['උස','උඩ','අට','ලස්සන'],a:0},
{t:'mc',q:'අලුත් කඩේ means…',d:'අලුත් කඩේ',r:'aluth kadee',o:['a new shop','an old shop','the shop is new','shop again'],a:0},
{t:'li',q:'Listen — which word?',say:'පරණ',o:['පරණ','පාර','අලුත්','පහ'],a:0}]},
{id:'si_adj2_3',title:'Build it',step:'build',meta:'Compliments & things',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ලස්සන','beautiful'],['උස','tall'],['පරණ','old'],['අලුත්','new']]},
{t:'wb',q:'Say: Sri Lanka is beautiful',a:['ලංකාව','ලස්සනයි'],pool:['ලංකාව','ලස්සනයි','ලස්සන']},
{t:'mc',q:'"A new book" =',o:['අලුත් පොත','පොත අලුත්','පරණ පොත','අලුත්යි පොත'],a:0},
{t:'wb',q:'Say: the village is beautiful',a:['ගම','ලස්සනයි'],pool:['ගම','ලස්සනයි','ලොකුයි']},
{t:'li',q:'Listen — which phrase?',say:'ලංකාව ලස්සනයි',o:['ලංකාව ලස්සනයි','ගම ලස්සනයි','ලංකාව ලොකුයි','ලස්සනයි'],a:0},
{t:'mc',q:'"It is old" =',o:['පරණයි','පරණ','අලුත්','පරණට'],a:0}]},
{id:'si_adj2_4',title:'Mix it',step:'mix',meta:'Describe your world',vocab:[],ex:[
{t:'mc',q:'එයා උසයි means…',d:'එයා උසයි',r:'eyaa usayi',o:['he / she is tall','he / she is old','it is high up','he grew'],a:0},
{t:'wb',q:'Say: this is an old book — start මේක',a:['මේක','පරණ','පොතක්'],pool:['මේක','පරණ','පොතක්','පොත'],},
{t:'li',q:'Listen — which word?',say:'ලස්සන',o:['ලස්සන','ලස්සනයි','උස','අලුත්'],a:0},
{t:'mc',q:'Which pair is opposites?',o:['පරණ / අලුත්','ලස්සන / උස','ලොකු / උස','රස / අලුත්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අලුත් පොත',o:['අලුත් පොත','පරණ පොත','අලුත් කඩේ','පොත'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['අලුත් කඩේ','a new shop'],['පරණ ගෙදර','an old house'],['ලස්සන ගම','a beautiful village'],['උස ගෙදර','a tall house']]},
{t:'mc',q:'ගම ලස්සනයි — you just said…',o:['the village is beautiful','a beautiful village','the beautiful one','villages are nice'],a:0}]},
{id:'si_adj2_5',title:'Checkpoint',step:'checkpoint',meta:'Describers mastered?',vocab:[],ex:[
{t:'mc',q:'"Beautiful" is…',o:['ලස්සන','උස','පරණ','රස'],a:0},
{t:'wb',q:'Compliment: Sri Lanka is beautiful',a:['ලංකාව','ලස්සනයි'],pool:['ලංකාව','ලස්සනයි','නරකයි']},
{t:'li',q:'Listen — which word?',say:'උස',o:['උස','උඩ','පරණ','අලුත්'],a:0},
{t:'mc',q:'"New" =',o:['අලුත්','පරණ','ලොකු','ලස්සන'],a:0},
{t:'li',q:'Listen — which word?',say:'ලස්සනයි',o:['ලස්සනයි','ලස්සන','උසයි','රසයි'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ලස්සනයි','is beautiful'],['උසයි','is tall'],['පරණ','old'],['අලුත්','new']]}]},

/* --- Topic 38: colors --- */
{id:'si_color',title:'Colors',step:'learn',meta:'රතු නිල් කොළ කහ සුදු කළු',vocab:[['රතු','rathu','red'],['නිල්','nil','blue'],['කොළ','kola','green'],['කහ','kaha','yellow'],['සුදු','sudhu','white'],['කළු','kalu','black'],['පාට','paata','color']],ex:[
{t:'note',tag:'Six colors',q:'රතු නිල් කොළ කහ සුදු කළු',body:'<p><span class="deva">රතු</span> <b>rathu</b> red · <span class="deva">නිල්</span> <b>nil</b> blue · <span class="deva">කොළ</span> <b>kola</b> green · <span class="deva">කහ</span> <b>kaha</b> yellow · <span class="deva">සුදු</span> <b>sudhu</b> white · <span class="deva">කළු</span> <b>kalu</b> black.</p><p>Two lovely secrets: <span class="deva">කොළ</span> is also the word for LEAF — green is leaf-color. And <span class="deva">කහ</span> is turmeric — the yellow in every curry.</p>',eg:[['රතු','rathu','red'],['නිල්','nil','blue'],['කොළ','kola','green (= leaf)'],['කහ','kaha','yellow (= turmeric)']]},
{t:'mc',q:'What does නිල් mean?',d:'නිල්',r:'nil',o:['blue','green','black','white'],a:0},
{t:'mc',q:'කොළ is green because it also means…',d:'කොළ',r:'kola',o:['leaf','grass','sea','tea'],a:0},
{t:'note',tag:'Asking colors',q:'පාට',body:'<p><span class="deva">පාට</span> <b>paata</b> = color. Ask: <span class="deva">මොකක් පාටද</span> <b>mokak paatadha</b> — what color?</p><p>Answer by declaring: <span class="deva">මේක රතු පාටයි</span> <b>meeka rathu paatayi</b> = this is red. Or describe: <span class="deva">රතු බස් එක</span> = the red bus.</p>',eg:[['මොකක් පාටද','mokak paatadha','what color?'],['මේක රතු පාටයි','meeka rathu paatayi','this is red'],['රතු බස් එක','rathu bas eka','the red bus']]},
{t:'mc',q:'මොකක් පාටද asks…',d:'මොකක් පාටද',r:'mokak paatadha',o:['what color?','what shape?','which one?','how bright?'],a:0},
{t:'mc',q:'"This is red" =',o:['මේක රතු පාටයි','මේක රතු ද','රතු මේකයි','මේක පාට රතුද'],a:0},
{t:'wb',q:'Say: the red bus',a:['රතු','බස් එක'],pool:['රතු','බස් එක','පාට']}]},
{id:'si_color_2',title:'Hear them',step:'recognize',meta:'Colors by ear',vocab:[],ex:[
{t:'li',q:'Listen — which color?',say:'රතු',o:['රතු','කහ','නිල්','කළු'],a:0},
{t:'li',q:'Listen — which color?',say:'සුදු',o:['සුදු','කළු','කොළ','රතු'],a:0},
{t:'mc',q:'Which word means "black"?',o:['කළු','සුදු','නිල්','කහ'],a:0},
{t:'mc',q:'Which word means "yellow"?',o:['කහ','කොළ','රතු','නිල්'],a:0},
{t:'li',q:'Listen — which color?',say:'කොළ',o:['කොළ','කළු','කහ','නිල්'],a:0},
{t:'mc',q:'What does පාට mean?',d:'පාට',r:'paata',o:['color','paint','light','cloth'],a:0},
{t:'li',q:'Listen — which color?',say:'නිල්',o:['නිල්','කොළ','සුදු','රතු'],a:0}]},
{id:'si_color_3',title:'Build it',step:'build',meta:'Color the world',vocab:[],ex:[
{t:'match',q:'Match color and meaning',pairs:[['රතු','red'],['නිල්','blue'],['කොළ','green'],['කහ','yellow']]},
{t:'mc',q:'"The white house" =',o:['සුදු ගෙදර','ගෙදර සුදුයි','සුදු පාට','ගෙදර සුදු'],a:0},
{t:'wb',q:'Ask: what color?',a:['මොකක්','පාටද'],pool:['මොකක්','පාටද','පාට']},
{t:'li',q:'Listen — which color?',say:'කළු',o:['කළු','කොළ','කහ','සුදු'],a:0},
{t:'mc',q:'The tricky twins කොළ and කළු:',o:['green then black','black then green','both green','both black'],a:0},
{t:'match',q:'Match color and meaning',pairs:[['සුදු','white'],['කළු','black'],['රතු','red'],['පාට','color']]}]},
{id:'si_color_4',title:'Mix it',step:'mix',meta:'Colors in sentences',vocab:[],ex:[
{t:'mc',q:'මේක නිල් පාටයි means…',d:'මේක නිල් පාටයි',r:'meeka nil paatayi',o:['this is blue','this is new','is this blue?','blue is nice'],a:0},
{t:'wb',q:'Say: the black car',a:['කළු','කාර් එක'],pool:['කළු','කාර් එක','කොළ']},
{t:'li',q:'Listen — which color?',say:'කහ',o:['කහ','කොළ','කළු','රතු'],a:0},
{t:'mc',q:'Rice on your plate is which color?',o:['සුදු','කළු','නිල්','රතු'],a:0},
{t:'li',q:'Listen — which phrase?',say:'රතු බස් එක',o:['රතු බස් එක','කළු කාර් එක','නිල් පාට','රතු පාටයි'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['රතු බස් එක','the red bus'],['සුදු ගෙදර','the white house'],['කොළ ගම','the green village'],['කළු පුටුව','the black chair']]},
{t:'mc',q:'Turmeric gives Sinhala its word for…',o:['yellow','red','green','orange'],a:0}]},
{id:'si_color_5',title:'Checkpoint',step:'checkpoint',meta:'Colors mastered?',vocab:[],ex:[
{t:'mc',q:'"Red" is…',o:['රතු','නිල්','කහ','සුදු'],a:0},
{t:'li',q:'Listen — which color?',say:'කොළ',o:['කොළ','කළු','නිල්','කහ'],a:0},
{t:'mc',q:'"White" =',o:['සුදු','කළු','කහ','පාට'],a:0},
{t:'wb',q:'Ask: what color?',a:['මොකක්','පාටද'],pool:['මොකක්','පාටද','මොකක්ද']},
{t:'li',q:'Listen — which color?',say:'කළු',o:['කළු','කොළ','සුදු','රතු'],a:0},
{t:'match',q:'Match color and meaning',pairs:[['රතු','red'],['නිල්','blue'],['සුදු','white'],['කළු','black']]}]},

/* --- Topic 39: comparisons --- */
{id:'si_cmp',title:'More & most',step:'learn',meta:'X-ට වඩා … & -ම',vocab:[['වඩා','wadaa','more (than)'],['මේකට වඩා','meekata wadaa','more than this'],['ලොකුම','lokuma','biggest'],['හොඳම','hondhama','best'],['මේක ඒකට වඩා හොඳයි','meeka eekata wadaa hondhayi','this is better than that']],ex:[
{t:'note',tag:'Than = -ට වඩා',q:'Comparing two things',body:'<p>To compare, the loser wears -ට and <span class="deva">වඩා</span> <b>wadaa</b> follows: <span class="deva">මේක ඒකට වඩා හොඳයි</span> <b>meeka eekata wadaa hondhayi</b> — this, compared TO that, is good = this is better than that.</p><p>There is your -ට again — its third job!</p>',eg:[['මේක ඒකට වඩා හොඳයි','meeka eekata wadaa hondhayi','this is better than that'],['මේක ඒකට වඩා ලොකුයි','meeka eekata wadaa lokuyi','this is bigger than that']]},
{t:'mc',q:'වඩා means…',d:'වඩා',r:'wadaa',o:['more (than)','less','the same','very'],a:0},
{t:'mc',q:'In මේක ඒකට වඩා ලොකුයි, which is bigger?',o:['මේක — this one','ඒක — that one','both equal','cannot tell'],a:0},
{t:'note',tag:'The -ම superlative',q:'ලොකුම = biggest',body:'<p>For "the most", glue <b>-ම</b> onto the describing word: <span class="deva">ලොකුම</span> <b>lokuma</b> biggest · <span class="deva">හොඳම</span> <b>hondhama</b> best · <span class="deva">ලස්සනම</span> most beautiful.</p><p><span class="deva">මේක හොඳම කඩේ</span> = this is the best shop.</p>',eg:[['ලොකුම','lokuma','biggest'],['හොඳම','hondhama','best'],['මේක හොඳම කඩේ','meeka hondhama kadee','this is the best shop']]},
{t:'mc',q:'"Best" =',o:['හොඳම','හොඳයි','වඩා හොඳ','හොඳ'],a:0},
{t:'wb',q:'Say: this is better than that',a:['මේක','ඒකට','වඩා','හොඳයි'],pool:['මේක','ඒකට','වඩා','හොඳයි','හොඳම']},
{t:'mc',q:'ලස්සනම means…',d:'ලස්සනම',r:'lassanama',o:['most beautiful','quite beautiful','more beautiful','beautiful too'],a:0}]},
{id:'si_cmp_2',title:'Hear it',step:'recognize',meta:'Comparisons by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'වඩා',o:['වඩා','වැඩියි','උඩ','යට'],a:0},
{t:'li',q:'Listen — which word?',say:'ලොකුම',o:['ලොකුම','ලොකුයි','ලොකු','හොඳම'],a:0},
{t:'mc',q:'Which phrase means "more than this"?',o:['මේකට වඩා','මේක වඩා','වඩා මේක','මේකම'],a:0},
{t:'mc',q:'හොඳම කඩේ means…',d:'හොඳම කඩේ',r:'hondhama kadee',o:['the best shop','a good shop','the better shop','the big shop'],a:0},
{t:'li',q:'Listen — which word?',say:'හොඳම',o:['හොඳම','හොඳයි','ලොකුම','හොඳින්'],a:0},
{t:'mc',q:'The -ම ending makes…',o:['the most (superlative)','a question','a plural','the past'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මේක ඒකට වඩා හොඳයි',o:['මේක ඒකට වඩා හොඳයි','මේක හොඳම කඩේ','මේක හොඳයි','ඒක ලොකුයි'],a:0}]},
{id:'si_cmp_3',title:'Build it',step:'build',meta:'Compare things',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['වඩා','more than'],['ලොකුම','biggest'],['හොඳම','best'],['ලස්සනම','most beautiful']]},
{t:'wb',q:'Say: this is bigger than that',a:['මේක','ඒකට','වඩා','ලොකුයි'],pool:['මේක','ඒකට','වඩා','ලොකුයි','ලොකුම']},
{t:'mc',q:'"The biggest house" =',o:['ලොකුම ගෙදර','ලොකු ගෙදර','ගෙදර ලොකුයි','වඩා ලොකු'],a:0},
{t:'wb',q:'Say: this is the best shop',a:['මේක','හොඳම','කඩේ'],pool:['මේක','හොඳම','කඩේ','හොඳයි']},
{t:'li',q:'Listen — which word?',say:'ලස්සනම',o:['ලස්සනම','ලස්සනයි','ලස්සන','ලොකුම'],a:0},
{t:'mc',q:'In a comparison, -ට sits on…',o:['the thing being beaten','the winner','the verb','වඩා'],a:0}]},
{id:'si_cmp_4',title:'Mix it',step:'mix',meta:'Bigger, better, best',vocab:[],ex:[
{t:'mc',q:'තේ වතුරට වඩා රසයි means…',d:'තේ වතුරට වඩා රසයි',r:'thee wathurata wadaa rasayi',o:['tea is tastier than water','water is tastier than tea','tea and water taste alike','tea is watery'],a:0},
{t:'wb',q:'Say: the best hoppers',a:['හොඳම','ආප්ප'],pool:['හොඳම','ආප්ප','රසයි']},
{t:'li',q:'Listen — which phrase?',say:'මේකට වඩා',o:['මේකට වඩා','ඒකට වඩා','මේක වඩා','වඩා'],a:0},
{t:'mc',q:'මේක ලංකාවේ හොඳම කඩේ — the claim is…',o:['best shop in Sri Lanka','biggest shop around','a good Lankan shop','oldest shop'],a:0},
{t:'li',q:'Listen — which word?',say:'වඩා',o:['වඩා','වැඩියි','යට','අඩු'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ලොකුම ගෙදර','the biggest house'],['හොඳම තේ','the best tea'],['ඒකට වඩා ලොකුයි','bigger than that'],['ලස්සනම ගම','the most beautiful village']]},
{t:'mc',q:'Comparative and superlative in Sinhala need…',o:['-ට වඩා and -ම — no new adjective forms','whole new words','er and est endings','tone changes'],a:0}]},
{id:'si_cmp_5',title:'Checkpoint',step:'checkpoint',meta:'Comparisons mastered?',vocab:[],ex:[
{t:'mc',q:'"Better than that" =',o:['ඒකට වඩා හොඳයි','ඒක වඩා හොඳයි','හොඳම','ඒකට හොඳයි'],a:0},
{t:'wb',q:'Say: this is the best shop',a:['මේක','හොඳම','කඩේ'],pool:['මේක','හොඳම','කඩේ','ලොකුම']},
{t:'li',q:'Listen — which word?',say:'ලොකුම',o:['ලොකුම','ලොකුයි','හොඳම','වඩා'],a:0},
{t:'mc',q:'"Most beautiful" =',o:['ලස්සනම','ලස්සනයි','වඩා ලස්සන','ලස්සන'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඒකට වඩා',o:['ඒකට වඩා','මේකට වඩා','වඩා','ඒකට'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['වඩා','more than'],['ලොකුම','biggest'],['හොඳම','best'],['මේකට වඩා','more than this']]}]},

/* --- Topic 40: feelings --- */
{id:'si_feel',title:'How you feel',step:'learn',meta:'මට බඩගිනියි — belly-fire!',vocab:[['බඩගිනියි','badaginiyi','hungry'],['මහන්සියි','mahansiyi','tired'],['නිදිමතයි','nidhimathayi','sleepy'],['බයයි','bayayi','afraid'],['සතුටුයි','sathutuyi','glad / happy'],['මට බඩගිනියි','mata badaginiyi','I am hungry']],ex:[
{t:'note',tag:'Belly-fire',q:'මට බඩගිනියි',body:'<p>Feelings speak dative — the <span class="deva">මට</span> pattern from "want": <span class="deva">මට බඩගිනියි</span> <b>mata badaginiyi</b> = I am hungry. Literally "to me there is belly-fire" — <span class="deva">බඩ</span> belly + <span class="deva">ගිනි</span> fire!</p><p><span class="deva">මට මහන්සියි</span> <b>mata mahansiyi</b> = I am tired.</p>',eg:[['මට බඩගිනියි','mata badaginiyi','I am hungry'],['මට මහන්සියි','mata mahansiyi','I am tired']]},
{t:'mc',q:'මට බඩගිනියි means…',d:'මට බඩගිනියි',r:'mata badaginiyi',o:['I am hungry','I am angry','my belly hurts','I am full'],a:0},
{t:'mc',q:'බඩගිනි is literally…',o:['belly + fire','belly + water','food + want','fire + food'],a:0},
{t:'note',tag:'More feelings',q:'නිදිමතයි බයයි සතුටුයි',body:'<p><span class="deva">මට නිදිමතයි</span> <b>mata nidhimathayi</b> = I am sleepy · <span class="deva">මට බයයි</span> <b>mata bayayi</b> = I am afraid · <span class="deva">මට සතුටුයි</span> <b>mata sathutuyi</b> = I am glad.</p><p>Ask a friend: <span class="deva">ඔයාට බඩගිනිද</span> <b>oyaata badaginidha</b> — are you hungry?</p>',eg:[['මට නිදිමතයි','mata nidhimathayi','I am sleepy'],['මට බයයි','mata bayayi','I am afraid'],['මට සතුටුයි','mata sathutuyi','I am glad']]},
{t:'mc',q:'What does මට මහන්සියි mean?',d:'මට මහන්සියි',r:'mata mahansiyi',o:['I am tired','I am busy','I am strong','I am late'],a:0},
{t:'mc',q:'Which phrase means "I am sleepy"?',o:['මට නිදිමතයි','මට බයයි','මට සතුටුයි','මට බඩගිනියි'],a:0},
{t:'wb',q:'Say: I am hungry',a:['මට','බඩගිනියි'],pool:['මට','බඩගිනියි','මම']}]},
{id:'si_feel_2',title:'Hear them',step:'recognize',meta:'Feelings by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'මට බඩගිනියි',o:['මට බඩගිනියි','මට මහන්සියි','මට බයයි','මට සතුටුයි'],a:0},
{t:'mc',q:'Which word means "afraid"?',o:['බයයි','සතුටුයි','මහන්සියි','නිදිමතයි'],a:0},
{t:'li',q:'Listen — which word?',say:'මහන්සියි',o:['මහන්සියි','නිදිමතයි','බඩගිනියි','සතුටුයි'],a:0},
{t:'mc',q:'මට සතුටුයි means…',d:'මට සතුටුයි',r:'mata sathutuyi',o:['I am glad','I am sad','I am sleepy','I am shy'],a:0},
{t:'li',q:'Listen — which word?',say:'නිදිමතයි',o:['නිදිමතයි','මහන්සියි','බයයි','නරකයි'],a:0},
{t:'mc',q:'Feelings take which little word?',o:['මට','මම','මගේ','මේ'],a:0},
{t:'li',q:'Listen — which word?',say:'බයයි',o:['බයයි','බඩගිනියි','සතුටුයි','හොඳයි'],a:0}]},
{id:'si_feel_3',title:'Build it',step:'build',meta:'Say how you feel',vocab:[],ex:[
{t:'match',q:'Match feeling and meaning',pairs:[['බඩගිනියි','hungry'],['මහන්සියි','tired'],['නිදිමතයි','sleepy'],['බයයි','afraid']]},
{t:'wb',q:'Say: I am tired',a:['මට','මහන්සියි'],pool:['මට','මහන්සියි','මම']},
{t:'mc',q:'Ask "are you hungry?"',o:['ඔයාට බඩගිනිද','ඔයා බඩගිනියි','මට බඩගිනියි','බඩගිනි ඔයාද'],a:0},
{t:'wb',q:'Say: I am glad',a:['මට','සතුටුයි'],pool:['මට','සතුටුයි','බයයි']},
{t:'li',q:'Listen — which phrase?',say:'මට මහන්සියි',o:['මට මහන්සියි','මට නිදිමතයි','මට බයයි','මට එපා'],a:0},
{t:'mc',q:'Hungry friend + kadē nearby. Your plan:',o:['අපි කඩේට යනවා','අපි ගෙදර ඉන්නවා','මට බයයි','ඉස්කෝලේට යනවා'],a:0}]},
{id:'si_feel_4',title:'Mix it',step:'mix',meta:'Feelings in real life',vocab:[],ex:[
{t:'mc',q:'ඔයාට බඩගිනිද? You just ate:',o:['නෑ','ඔව්','මට බඩගිනියි','දෙන්න'],a:0},
{t:'wb',q:'Say: I am sleepy now',a:['මට','දැන්','නිදිමතයි'],pool:['මට','දැන්','නිදිමතයි','මහන්සියි']},
{t:'li',q:'Listen — which phrase?',say:'මට සතුටුයි',o:['මට සතුටුයි','මට බයයි','මට මහන්සියි','සතුටුයි'],a:0},
{t:'mc',q:'A big black dog barks at you:',o:['මට බයයි','මට සතුටුයි','මට නිදිමතයි','රසයි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඔයාට බඩගිනිද',o:['ඔයාට බඩගිනිද','මට බඩගිනියි','ඔයාට මහන්සිද','බඩගිනියි'],a:0},
{t:'match',q:'Match situation and feeling',pairs:[['no lunch','බඩගිනියි'],['long day','මහන්සියි'],['late night','නිදිමතයි'],['good news','සතුටුයි']]},
{t:'mc',q:'The "to me" feeling-pattern also powered which Zone 3 phrase?',o:['මට ඕනැ','මම කනවා','ඔව්','මේක තේද'],a:0}]},
{id:'si_feel_5',title:'Checkpoint',step:'checkpoint',meta:'Feelings mastered?',vocab:[],ex:[
{t:'mc',q:'"I am hungry" =',o:['මට බඩගිනියි','මම බඩගිනියි','මට බයයි','බඩගිනිද'],a:0},
{t:'wb',q:'Say: I am afraid',a:['මට','බයයි'],pool:['මට','බයයි','සතුටුයි']},
{t:'li',q:'Listen — which word?',say:'සතුටුයි',o:['සතුටුයි','බයයි','මහන්සියි','නිදිමතයි'],a:0},
{t:'mc',q:'"Sleepy" =',o:['නිදිමතයි','මහන්සියි','බඩගිනියි','ලොකුයි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට බඩගිනියි',o:['මට බඩගිනියි','ඔයාට බඩගිනිද','මට මහන්සියි','මට සතුටුයි'],a:0},
{t:'match',q:'Match feeling and meaning',pairs:[['බඩගිනියි','hungry'],['මහන්සියි','tired'],['බයයි','afraid'],['සතුටුයි','glad']]}]},

/* --- Topic 41: weather --- */
{id:'si_wx',title:'Rain & sun',step:'learn',meta:'වැස්ස වහිනවා අව්ව රස්නෙයි',vocab:[['වැස්ස','waessa','rain'],['වහිනවා','wahinawaa','it is raining'],['අව්ව','awwa','sunshine'],['රස්නෙයි','rasneyi','it is hot'],['සීතලයි','siithalayi','it is cold'],['හුළඟ','hulanga','wind']],ex:[
{t:'note',tag:'Island weather',q:'වැස්ස & වහිනවා',body:'<p><span class="deva">වැස්ස</span> <b>waessa</b> = rain. The verb: <span class="deva">වහිනවා</span> <b>wahinawaa</b> — <span class="deva">දැන් වහිනවා</span> = it is raining now. No "it" needed — the sky speaks for itself!</p><p>Two monsoons water the island every year — rain is life here, and everyone talks about it.</p>',eg:[['වැස්ස','waessa','rain'],['දැන් වහිනවා','dhaen wahinawaa','it is raining now']]},
{t:'mc',q:'What does වහිනවා mean?',d:'වහිනවා',r:'wahinawaa',o:['it is raining','it is windy','it is sunny','it is flooding'],a:0},
{t:'mc',q:'"It is raining now" =',o:['දැන් වහිනවා','දැන් වැස්ස','වැස්ස එනවා ද','අද අව්ව'],a:0},
{t:'note',tag:'Hot, cold & wind',q:'රස්නෙයි සීතලයි හුළඟ',body:'<p><span class="deva">අව්ව</span> <b>awwa</b> = sunshine · <span class="deva">රස්නෙයි</span> <b>rasneyi</b> = it is hot (the tropical default!) · <span class="deva">සීතලයි</span> <b>siithalayi</b> = it is cold — save it for the tea-country hills · <span class="deva">හුළඟ</span> <b>hulanga</b> = wind.</p>',eg:[['අද රස්නෙයි','adha rasneyi','today it is hot'],['සීතලයි','siithalayi','it is cold'],['හුළඟ','hulanga','wind']]},
{t:'mc',q:'අද රස්නෙයි means…',d:'අද රස්නෙයි',r:'adha rasneyi',o:['today it is hot','today it is cold','today it rains','today is nice'],a:0},
{t:'mc',q:'What does අව්ව mean?',d:'අව්ව',r:'awwa',o:['sunshine','cloud','sky','heat rash'],a:0},
{t:'wb',q:'Say: it is raining now',a:['දැන්','වහිනවා'],pool:['දැන්','වහිනවා','වැස්ස']}]},
{id:'si_wx_2',title:'Hear it',step:'recognize',meta:'Weather by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'වැස්ස',o:['වැස්ස','අව්ව','හුළඟ','වතුර'],a:0},
{t:'li',q:'Listen — which word?',say:'රස්නෙයි',o:['රස්නෙයි','සීතලයි','රසයි','වහිනවා'],a:0},
{t:'mc',q:'Which word means "wind"?',o:['හුළඟ','අව්ව','වැස්ස','සීතලයි'],a:0},
{t:'mc',q:'සීතලයි means…',d:'සීතලයි',r:'siithalayi',o:['it is cold','it is cool water','it is wet','it is dark'],a:0},
{t:'li',q:'Listen — which word?',say:'අව්ව',o:['අව්ව','වැස්ස','හුළඟ','අඹ'],a:0},
{t:'mc',q:'The island gets its rain from…',o:['two yearly monsoons','one winter','snow melt','no one knows'],a:0},
{t:'li',q:'Listen — which word?',say:'වහිනවා',o:['වහිනවා','වැස්ස','බොනවා','යනවා'],a:0}]},
{id:'si_wx_3',title:'Build it',step:'build',meta:'Talk weather',vocab:[],ex:[
{t:'match',q:'Match weather and meaning',pairs:[['වැස්ස','rain'],['අව්ව','sunshine'],['හුළඟ','wind'],['වහිනවා','it is raining']]},
{t:'wb',q:'Say: today it is hot',a:['අද','රස්නෙයි'],pool:['අද','රස්නෙයි','සීතලයි']},
{t:'mc',q:'In the tea-country hills at night:',o:['සීතලයි','රස්නෙයි','අව්ව','බඩගිනියි'],a:0},
{t:'wb',q:'Say: it is raining today',a:['අද','වහිනවා'],pool:['අද','වහිනවා','අව්ව']},
{t:'li',q:'Listen — which phrase?',say:'දැන් වහිනවා',o:['දැන් වහිනවා','අද රස්නෙයි','දැන් සීතලයි','වැස්ස'],a:0},
{t:'mc',q:'වහිනවා needs an "it" in front:',o:['no — the verb stands alone','yes, always','only in writing','only for storms'],a:0}]},
{id:'si_wx_4',title:'Mix it',step:'mix',meta:'Weather small talk',vocab:[],ex:[
{t:'mc',q:'අද හරි රස්නෙයි nudges you to reply…',o:['ඔව් — රස්නෙයි','නෑ — බඩගිනියි','වතුර ටිකක් දෙන්න','සීතලයි ද'],a:0},
{t:'wb',q:'Say: it is cold today',a:['අද','සීතලයි'],pool:['අද','සීතලයි','රස්නෙයි']},
{t:'li',q:'Listen — which word?',say:'හුළඟ',o:['හුළඟ','අව්ව','වැස්ස','එළවළු'],a:0},
{t:'mc',q:'වැස්ස එනවා likely means…',d:'වැස්ස එනවා',r:'waessa enawaa',o:['rain is coming','the rain left','it rained','the rain is here'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අද රස්නෙයි',o:['අද රස්නෙයි','අද සීතලයි','දැන් වහිනවා','අද අව්ව'],a:0},
{t:'match',q:'Match weather and meaning',pairs:[['රස්නෙයි','it is hot'],['සීතලයි','it is cold'],['දැන් වහිනවා','raining now'],['අව්ව','sunshine']]},
{t:'mc',q:'Rain matters so much here because…',o:['it waters the rice and tea','it cools the beach','roads need washing','it does not'],a:0}]},
{id:'si_wx_5',title:'Checkpoint',step:'checkpoint',meta:'Weather mastered?',vocab:[],ex:[
{t:'mc',q:'"It is raining" =',o:['වහිනවා','වැස්ස','අව්ව','හුළඟ'],a:0},
{t:'wb',q:'Say: today it is hot',a:['අද','රස්නෙයි'],pool:['අද','රස්නෙයි','වහිනවා']},
{t:'li',q:'Listen — which word?',say:'සීතලයි',o:['සීතලයි','රස්නෙයි','සතුටුයි','වැස්ස'],a:0},
{t:'mc',q:'"Rain" (the noun) =',o:['වැස්ස','වහිනවා','වතුර','අව්ව'],a:0},
{t:'li',q:'Listen — which word?',say:'අව්ව',o:['අව්ව','වැස්ස','හුළඟ','අට'],a:0},
{t:'match',q:'Match weather and meaning',pairs:[['වැස්ස','rain'],['අව්ව','sunshine'],['රස්නෙයි','it is hot'],['සීතලයි','it is cold']]}]},

/* --- Topic 42: body & health --- */
{id:'si_body',title:'Body & health',step:'learn',meta:'මට ඔළුව රිදෙනවා — saying where it hurts',vocab:[['ඔළුව','oluwa','head'],['බඩ','bada','stomach'],['අත','atha','hand / arm'],['කකුල','kakula','leg'],['රිදෙනවා','ridhenawaa','hurts'],['බෙහෙත්','beheth','medicine'],['දොස්තර','dhosthara','doctor']],ex:[
{t:'note',tag:'The body',q:'ඔළුව බඩ අත කකුල',body:'<p><span class="deva">ඔළුව</span> <b>oluwa</b> head · <span class="deva">බඩ</span> <b>bada</b> stomach (you know it from belly-fire!) · <span class="deva">අත</span> <b>atha</b> hand or arm · <span class="deva">කකුල</span> <b>kakula</b> leg.</p>',eg:[['ඔළුව','oluwa','head'],['බඩ','bada','stomach'],['අත','atha','hand / arm'],['කකුල','kakula','leg']]},
{t:'mc',q:'What does ඔළුව mean?',d:'ඔළුව',r:'oluwa',o:['head','stomach','leg','hand'],a:0},
{t:'mc',q:'Which word means "leg"?',o:['කකුල','අත','බඩ','ඔළුව'],a:0},
{t:'note',tag:'Where it hurts',q:'මට … රිදෙනවා',body:'<p>Pain speaks dative too: <span class="deva">මට ඔළුව රිදෙනවා</span> <b>mata oluwa ridhenawaa</b> = my head hurts (<span class="deva">රිදෙනවා</span> <b>ridhenawaa</b> = hurts).</p><p>Helpers: <span class="deva">බෙහෙත්</span> <b>beheth</b> = medicine · <span class="deva">දොස්තර</span> <b>dhosthara</b> = doctor. <span class="deva">මට බෙහෙත් ඕනැ</span> = I need medicine.</p>',eg:[['මට ඔළුව රිදෙනවා','mata oluwa ridhenawaa','my head hurts'],['මට බෙහෙත් ඕනැ','mata beheth oonae','I need medicine'],['දොස්තර','dhosthara','doctor']]},
{t:'mc',q:'මට බඩ රිදෙනවා means…',d:'මට බඩ රිදෙනවා',r:'mata bada ridhenawaa',o:['my stomach hurts','I am hungry','my head hurts','I feel sick of it'],a:0},
{t:'mc',q:'Who do you visit when it will not stop?',o:['දොස්තර','අයියා','යාළුවා','කඩේ'],a:0},
{t:'wb',q:'Say: my head hurts',a:['මට','ඔළුව','රිදෙනවා'],pool:['මට','ඔළුව','රිදෙනවා','බඩ']}]},
{id:'si_body_2',title:'Hear it',step:'recognize',meta:'Body words by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ඔළුව',o:['ඔළුව','බඩ','අත','කකුල'],a:0},
{t:'li',q:'Listen — which word?',say:'කකුල',o:['කකුල','අත','ඔළුව','කඩේ'],a:0},
{t:'mc',q:'Which word means "hand / arm"?',o:['අත','කකුල','බඩ','ඔළුව'],a:0},
{t:'mc',q:'What does බෙහෙත් mean?',d:'බෙහෙත්',r:'beheth',o:['medicine','doctor','pain','bandage'],a:0},
{t:'li',q:'Listen — which word?',say:'රිදෙනවා',o:['රිදෙනවා','තියෙනවා','වහිනවා','බොනවා'],a:0},
{t:'mc',q:'දොස්තර is…',d:'දොස්තර',r:'dhosthara',o:['a doctor','a dentist only','a nurse','a chemist'],a:0},
{t:'li',q:'Listen — which word?',say:'බඩ',o:['බඩ','අත','බත්','අට'],a:0}]},
{id:'si_body_3',title:'Build it',step:'build',meta:'Say what hurts',vocab:[],ex:[
{t:'match',q:'Match body part and meaning',pairs:[['ඔළුව','head'],['බඩ','stomach'],['අත','hand / arm'],['කකුල','leg']]},
{t:'wb',q:'Say: my stomach hurts',a:['මට','බඩ','රිදෙනවා'],pool:['මට','බඩ','රිදෙනවා','ඔළුව']},
{t:'mc',q:'"I need medicine" =',o:['මට බෙහෙත් ඕනැ','මට බෙහෙත් එපා','බෙහෙත් තියෙනවා','මම බෙහෙත් කනවා'],a:0},
{t:'wb',q:'Say: my leg hurts',a:['මට','කකුල','රිදෙනවා'],pool:['මට','කකුල','රිදෙනවා','අත']},
{t:'li',q:'Listen — which phrase?',say:'මට ඔළුව රිදෙනවා',o:['මට ඔළුව රිදෙනවා','මට බඩ රිදෙනවා','මට බඩගිනියි','මට මහන්සියි'],a:0},
{t:'mc',q:'The pain pattern is…',o:['මට + body part + රිදෙනවා','මම + body part + රිදෙනවා','body part + මට + ඕනැ','රිදෙනවා first'],a:0}]},
{id:'si_body_4',title:'Mix it',step:'mix',meta:'A visit to the doctor',vocab:[],ex:[
{t:'mc',q:'At the doctor you point and say…',o:['මට බඩ රිදෙනවා','බඩ ලොකුයි','මට බඩගිනියි','බඩ කොහෙද'],a:0},
{t:'wb',q:'Say: I need medicine',a:['මට','බෙහෙත්','ඕනැ'],pool:['මට','බෙහෙත්','ඕනැ','දොස්තර']},
{t:'li',q:'Listen — which phrase?',say:'මට බඩ රිදෙනවා',o:['මට බඩ රිදෙනවා','මට ඔළුව රිදෙනවා','මට කකුල රිදෙනවා','මට බඩගිනියි'],a:0},
{t:'mc',q:'බඩගිනියි vs බඩ රිදෙනවා:',o:['hungry vs stomach-ache','both hungry','both pain','thirsty vs full'],a:0},
{t:'li',q:'Listen — which word?',say:'දොස්තර',o:['දොස්තර','බෙහෙත්','ඉස්කෝලේ','දෙන්න'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මට ඔළුව රිදෙනවා','my head hurts'],['මට බෙහෙත් ඕනැ','I need medicine'],['දොස්තර කොහෙද','where is the doctor?'],['මට බඩ රිදෙනවා','my stomach hurts']]},
{t:'mc',q:'රිදෙනවා rides the same මට pattern as…',o:['ඕනැ and the feelings','කනවා and බොනවා','ඉන්නවා','දෙන්න'],a:0}]},
{id:'si_body_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 6 complete?',vocab:[],ex:[
{t:'mc',q:'"Head" is…',o:['ඔළුව','බඩ','කකුල','අත'],a:0},
{t:'wb',q:'Say: my head hurts',a:['මට','ඔළුව','රිදෙනවා'],pool:['මට','ඔළුව','රිදෙනවා','ඕනැ']},
{t:'li',q:'Listen — which word?',say:'බෙහෙත්',o:['බෙහෙත්','දොස්තර','බිත්තර','බඩ'],a:0},
{t:'mc',q:'"Hurts" =',o:['රිදෙනවා','රසයි','බඩගිනියි','තියෙනවා'],a:0},
{t:'li',q:'Listen — which word?',say:'අත',o:['අත','අට','බඩ','අද'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ඔළුව','head'],['කකුල','leg'],['බෙහෙත්','medicine'],['දොස්තර','doctor']]}]},
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
