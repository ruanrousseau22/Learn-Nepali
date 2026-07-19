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
/* gulls over the water */
+'<g class="art-detail" fill="none" stroke="var(--mtn-far)" stroke-width="1.8" stroke-linecap="round" opacity=".65" aria-hidden="true"><path d="M190 96 q6 -5 12 0 q6 -5 12 0"/><path d="M262 114 q5 -4.5 10 0 q5 -4.5 10 0"/></g>'
/* far: the sea to the left, misty tea highlands rising right of the title */
+'<path class="far" d="M0 254 L600 254 Q660 252 720 250 Q770 226 830 234 Q880 200 950 216 Q1010 184 1080 204 Q1140 192 1200 200 L1200 320 L0 320 Z"/>'
/* a tiny catamaran sail out at sea (fine detail) */
+'<g class="art-detail" aria-hidden="true"><path class="snow" d="M596 250 L596 232 L608 250 Z"/><path fill="var(--tree)" d="M590 254 Q602 258 616 254 L613 250 L593 250 Z"/></g>'
/* mid: the warm sandy shore */
+'<path class="mid" d="M0 320 L0 284 Q300 276 600 282 Q900 288 1200 278 L1200 320 Z"/>'
/* soft wave lines under the title */
+'<path class="snow" opacity=".28" d="M70 264 Q220 258 370 262 L368 268 Q220 262 74 270 Z"/>'
+'<path class="snow" opacity=".28" d="M150 276 Q300 268 430 274 L428 280 Q300 272 154 282 Z"/>'
/* stilt fishermen — the iconic silhouettes, perched over the shallows */
+'<g class="art-detail" aria-hidden="true">'
/* each: slim pole, small side-perch, seated figure with a long rod angled to the sea */
+'</g>'
/* coconut palms leaning over the shore */
+'<g class="near">'
+'<path d="M1046 296 C1052 254 1046 220 1056 190 L1063 192 C1053 222 1060 256 1054 298 Z"/>'
+'<path d="M1059 190 C1038 176 1014 173 995 181 C1016 180 1038 186 1056 195 Z M1059 190 C1078 174 1102 170 1122 177 C1102 179 1080 186 1062 195 Z M1059 190 C1050 170 1035 159 1015 157 C1035 166 1048 177 1056 192 Z M1059 190 C1068 170 1083 159 1103 157 C1083 166 1070 177 1062 192 Z M1059 190 C1057 168 1049 152 1035 143 C1047 156 1054 172 1056 190 Z'
+' M1054 196 m-3.4 0 a3.4 3.4 0 1 0 6.8 0 a3.4 3.4 0 1 0 -6.8 0 M1064 196 m-3.4 0 a3.4 3.4 0 1 0 6.8 0 a3.4 3.4 0 1 0 -6.8 0"/>'
+'<path d="M1152 298 C1146 264 1152 238 1144 214 L1150 212 C1158 238 1152 266 1158 298 Z"/>'
+'<path d="M1146 214 C1128 204 1108 202 1092 209 C1109 208 1128 212 1144 219 Z M1146 214 C1162 200 1182 196 1199 202 C1182 204 1163 210 1148 218 Z M1146 214 C1140 197 1128 187 1111 185 C1128 192 1139 202 1144 216 Z M1146 214 C1153 197 1165 188 1182 186 C1166 194 1155 204 1148 216 Z"/>'
+'</g>'
/* near: lush green shore */
+'<g class="near"><path d="M0 304 Q160 286 320 298 Q480 310 640 298 Q800 286 960 300 Q1080 308 1200 298 L1200 320 L0 320 Z"/></g>';

/* --- band: calm sea left, palm + headland right --- */
const SI_BAND='<circle class="orb-glow" cx="1046" cy="88" r="36"/><circle class="orb" cx="1046" cy="88" r="21"/>'
+'<path class="far" d="M0 154 L700 154 Q740 152 780 150 Q830 134 890 140 Q950 122 1010 132 Q1080 122 1140 130 Q1170 128 1200 130 L1200 200 L0 200 Z"/>'
+'<path class="mid" d="M0 200 L0 174 Q300 166 600 172 Q900 178 1200 170 L1200 200 Z"/>'
/* stilt fisherman (fine detail) */
/* palm */
+'<g class="near"><path d="M1076 186 C1080 158 1076 136 1082 116 L1087 117 C1081 138 1086 160 1082 188 Z"/>'
+'<path d="M1084 116 C1070 106 1054 104 1041 109 C1055 109 1070 113 1082 120 Z M1084 116 C1097 105 1113 102 1126 107 C1113 109 1098 114 1086 120 Z M1084 116 C1078 103 1069 95 1056 93 C1069 99 1078 107 1082 117 Z M1084 116 C1090 103 1099 95 1112 93 C1100 99 1091 107 1086 117 Z"/></g>'
+'<g class="near"><path d="M0 188 Q300 168 600 178 Q900 190 1200 178 L1200 200 L0 200 Z"/></g>';

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
  {n:7,t:'Then & now',d:'The past tense, done-already, can & commands',lessons:['si_past','si_past_2','si_past_3','si_past_4','si_past_5','si_past2','si_past2_2','si_past2_3','si_past2_4','si_past2_5','si_pastneg','si_pastneg_2','si_pastneg_3','si_pastneg_4','si_pastneg_5','si_perf','si_perf_2','si_perf_3','si_perf_4','si_perf_5','si_can','si_can_2','si_can_3','si_can_4','si_can_5','si_nna','si_nna_2','si_nna_3','si_nna_4','si_nna_5','si_want2','si_want2_2','si_want2_3','si_want2_4','si_want2_5']},
  {n:8,t:'Out & about',d:'Rides, directions, tickets, hotel, months & phone',lessons:['si_ride','si_ride_2','si_ride_3','si_ride_4','si_ride_5','si_dir','si_dir_2','si_dir_3','si_dir_4','si_dir_5','si_tik','si_tik_2','si_tik_3','si_tik_4','si_tik_5','si_hotel','si_hotel_2','si_hotel_3','si_hotel_4','si_hotel_5','si_month','si_month_2','si_month_3','si_month_4','si_month_5','si_phone','si_phone_2','si_phone_3','si_phone_4','si_phone_5','si_ask','si_ask_2','si_ask_3','si_ask_4','si_ask_5']},
  {n:9,t:'Say more',d:'But, because, if — thinking, work & getting help',lessons:['si_but','si_but_2','si_but_3','si_but_4','si_but_5','si_if','si_if_2','si_if_3','si_if_4','si_if_5','si_think','si_think_2','si_think_3','si_think_4','si_think_5','si_job','si_job_2','si_job_3','si_job_4','si_job_5','si_hobby','si_hobby_2','si_hobby_3','si_hobby_4','si_hobby_5','si_day','si_day_2','si_day_3','si_day_4','si_day_5','si_help','si_help_2','si_help_3','si_help_4','si_help_5']},
  {n:10,t:'Your Sinhala life',d:'Family, small talk, not-yet, home & your story',lessons:['si_fam','si_fam_2','si_fam_3','si_fam_4','si_fam_5','si_age','si_age_2','si_age_3','si_age_4','si_age_5','si_yet','si_yet_2','si_yet_3','si_yet_4','si_yet_5','si_lang','si_lang_2','si_lang_3','si_lang_4','si_lang_5','si_house','si_house_2','si_house_3','si_house_4','si_house_5','si_weekpl','si_weekpl_2','si_weekpl_3','si_weekpl_4','si_weekpl_5','si_story','si_story_2','si_story_3','si_story_4','si_story_5']},
  {n:11,t:'Little extras',d:'Pace, clothes, animals, nature & how long',lessons:['si_pace','si_pace_2','si_pace_3','si_pace_4','si_pace_5','si_wear','si_wear_2','si_wear_3','si_wear_4','si_wear_5','si_animal','si_animal_2','si_animal_3','si_animal_4','si_animal_5','si_nature','si_nature_2','si_nature_3','si_nature_4','si_nature_5','si_which','si_which_2','si_which_3','si_which_4','si_which_5','si_deg','si_deg_2','si_deg_3','si_deg_4','si_deg_5','si_dur','si_dur_2','si_dur_3','si_dur_4','si_dur_5']},
  {n:12,t:'Make Sri Lanka home',d:'Big numbers, errands, guests, fruit & warm polish',lessons:['si_lakh','si_lakh_2','si_lakh_3','si_lakh_4','si_lakh_5','si_errand','si_errand_2','si_errand_3','si_errand_4','si_errand_5','si_guest','si_guest_2','si_guest_3','si_guest_4','si_guest_5','si_fruit','si_fruit_2','si_fruit_3','si_fruit_4','si_fruit_5','si_taste','si_taste_2','si_taste_3','si_taste_4','si_taste_5','si_oba','si_oba_2','si_oba_3','si_oba_4','si_oba_5','si_home','si_home_2','si_home_3','si_home_4','si_home_5']},
];

const SI_SYM={si_c1:'ක',si_c2:'ත',si_c3:'ප',si_c4:'ච',si_c5:'ඳ',si_v1:'කා',si_v2:'තේ',
si_greet:'ආයු',si_pron:'මම',si_people:'අම්මා',si_num1:'පහ',si_court:'හරි',si_intro:'නම',si_time1:'අද',
si_sov:'කනවා',si_be:'ඉන්නවා',si_dem:'මේක',si_neg:'නෑ',si_yn:'ද',si_wh:'කවුද',si_want:'ඕනැ',
si_ta:'මට',si_gee:'මගේ',si_ekka:'එක්ක',si_place:'උඩ',si_town:'පාර',si_food:'ආප්ප',si_kade:'කඩේ',
si_num2:'දොළහ',si_tens:'පනහ',si_money:'සල්ලි',si_shop:'ගණන්',si_time2:'වෙලාව',si_days:'ඉරිදා',si_count:'දෙකක්',
si_adj:'ලොකු',si_adj2:'ලස්සන',si_color:'රතු',si_cmp:'වඩා',si_feel:'මහන්සි',si_wx:'වැස්ස',si_body:'ඔළුව',
si_past:'කෑවා',si_past2:'කළා',si_pastneg:'ගියේ',si_perf:'කාලා',si_can:'පුළුවන්',si_nna:'එන්න',si_want2:'යමු',
si_ride:'බස්',si_dir:'වමට',si_tik:'ටිකට්',si_hotel:'යතුර',si_month:'මාසය',si_phone:'ෆෝන්',si_ask:'දුර',
si_but:'ඒත්',si_if:'නම්',si_think:'මතක',si_job:'වැඩ',si_hobby:'සින්දු',si_day:'උදේ',si_help:'උදව්',
si_fam:'පවුල',si_age:'වයස',si_yet:'තාම',si_lang:'ආයෙත්',si_house:'පූසා',si_weekpl:'හෙට',si_story:'පස්සේ',
si_pace:'හෙමින්',si_wear:'සරම',si_animal:'අලියා',si_nature:'ගඟ',si_which:'මොන',si_deg:'ගොඩක්',si_dur:'කල්',
si_lakh:'දාහ',si_errand:'රෙදි',si_guest:'අමුත්තෝ',si_fruit:'තැඹිලි',si_taste:'සැරයි',si_oba:'ඔබ',si_home:'වගේ'};

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
{t:'mc',q:'What sound does this letter make?',d:'ක',o:['ka','ga','na','ma'],a:0},
{t:'mc',q:'And this one?',d:'ග',o:['ga','ka','na','ma'],a:0},
{t:'note',tag:'Hum it',q:'න and ම',body:'<p><span class="deva">න</span> = <b>na</b>. <span class="deva">ම</span> = <b>ma</b>. Both hum through the nose.</p>',eg:[['න','na','n as in no'],['ම','ma','m as in me']]},
{t:'mc',q:'What sound does this letter make?',d:'න',o:['na','ma','ka','ga'],a:0},
{t:'mc',q:'Which sound is this?',d:'ම',o:['ma','na','ga','ka'],a:0}]},
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
{t:'mc',q:'What sound does this letter make?',d:'ම',o:['ma','na','ka','ga'],a:0},
{t:'li',q:'Listen — which letter?',say:'ක',o:['ක','ග','න','ම'],a:0},
{t:'mc',q:'Which letter is the g sound?',o:['ග','ක','න','ම'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'න',o:['na','ka','ma','ga'],a:0},
{t:'li',q:'Listen — which letter?',say:'ග',o:['ග','ක','ම','න'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ක','ka'],['ග','ga'],['ම','ma'],['න','na']]},
{t:'mc',q:'Sinhala letters are round because…',o:['they were written on palm leaves','ink was expensive','they copied English','printers demanded it'],a:0}]},
{id:'si_c1_5',title:'Checkpoint',step:'checkpoint',meta:'ක ග න ම mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ක',o:['ka','ga','na','ma'],a:0},
{t:'li',q:'Listen — which letter?',say:'ග',o:['ග','ක','න','ම'],a:0},
{t:'mc',q:'Which letter says ma?',o:['ම','න','ක','ග'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ග',o:['ga','ka','ma','na'],a:0},
{t:'li',q:'Listen — which letter?',say:'න',o:['න','ම','ක','ග'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ක','ka'],['ග','ga'],['න','na'],['ම','ma']]}]},

/* --- Topic 2: the two T families ත ද ට ඩ --- */
{id:'si_c2',title:'The two T families',step:'learn',meta:'ත ද ට ඩ — soft & hard',vocab:[['ත','tha','soft t — tongue on teeth'],['ද','dha','soft d — tongue on teeth'],['ට','ta','hard t — tongue curled back'],['ඩ','da','hard d — tongue curled back']],ex:[
{t:'note',tag:'Tongue on teeth',q:'ත and ද — the SOFT pair',body:'<p><span class="deva">ත</span> = <b>tha</b> — a soft t with the tongue touching the teeth. It is <b>not</b> the th of "thin" — just a gentle t. This is exactly how Sri Lankans write English too: rice is <span class="deva">බත්</span>, spelled <b>bath</b>.</p><p><span class="deva">ද</span> = <b>dha</b> — its voiced twin, a soft d.</p>',eg:[['ත','tha','soft t'],['ද','dha','soft d']]},
{t:'mc',q:'What sound does this letter make?',d:'ත',o:['tha','dha','ta','da'],a:0},
{t:'mc',q:'And this one?',d:'ද',o:['dha','tha','ta','da'],a:0},
{t:'note',tag:'Curl it back',q:'ට and ඩ — the HARD pair',body:'<p><span class="deva">ට</span> = <b>ta</b> — a hard, knocky t, tongue curled back to the roof of the mouth. <span class="deva">ඩ</span> = <b>da</b> — a hard d.</p><p>Sinhala keeps the soft and hard families strictly apart — they make different words. Let the audio train your ear: soft <span class="deva">ත</span> sounds gentle, hard <span class="deva">ට</span> knocks.</p>',eg:[['ට','ta','hard t'],['ඩ','da','hard d']]},
{t:'mc',q:'What sound does this letter make?',d:'ට',o:['ta','tha','da','dha'],a:0},
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
{t:'mc',q:'What sound does this letter make?',d:'ඩ',o:['da','dha','ta','tha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ත',o:['ත','ට','ද','ඩ'],a:0},
{t:'mc',q:'Which is the soft d, tongue on teeth?',o:['ද','ඩ','ට','ත'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ත',o:['tha','ta','dha','da'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඩ',o:['ඩ','ද','ත','ට'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ත','tha'],['ට','ta'],['ඩ','da'],['ද','dha']]},
{t:'mc',q:'බත් (rice) is romanized bath because…',o:['ත is the soft tongue-on-teeth t','it sounds like English bath','ත is silent','b changes the t'],a:0}]},
{id:'si_c2_5',title:'Checkpoint',step:'checkpoint',meta:'ත ද ට ඩ mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ත',o:['tha','ta','dha','da'],a:0},
{t:'li',q:'Listen — which letter?',say:'ට',o:['ට','ත','ඩ','ද'],a:0},
{t:'mc',q:'Which letter is the hard d?',o:['ඩ','ද','ට','ත'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ද',o:['dha','da','tha','ta'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඩ',o:['ඩ','ට','ද','ත'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ත','tha'],['ද','dha'],['ට','ta'],['ඩ','da']]}]},

/* --- Topic 3: ප බ ස හ --- */
{id:'si_c3',title:'P, B, S & H',step:'learn',meta:'ප බ ස හ',vocab:[['ප','pa','consonant: p'],['බ','ba','consonant: b'],['ස','sa','consonant: s'],['හ','ha','consonant: h']],ex:[
{t:'note',tag:'Lips together',q:'ප and බ',body:'<p><span class="deva">ප</span> = <b>pa</b>, like the p in "spin".</p><p><span class="deva">බ</span> = <b>ba</b> — its voiced twin, the b of "boy". You already know it from <span class="deva">බත්</span> bath (rice).</p>',eg:[['ප','pa','p'],['බ','ba','b']]},
{t:'mc',q:'What sound does this letter make?',d:'ප',o:['pa','ba','sa','ha'],a:0},
{t:'mc',q:'And this one?',d:'බ',o:['ba','pa','sa','ha'],a:0},
{t:'note',tag:'Hiss & breathe',q:'ස and හ',body:'<p><span class="deva">ස</span> = <b>sa</b>, the s of "see" — it hisses.</p><p><span class="deva">හ</span> = <b>ha</b>, the h of "hat" — pure breath.</p>',eg:[['ස','sa','s as in see'],['හ','ha','h as in hat']]},
{t:'mc',q:'What sound does this letter make?',d:'ස',o:['sa','ha','pa','ba'],a:0},
{t:'mc',q:'Which sound is this?',d:'හ',o:['ha','sa','ba','pa'],a:0}]},
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
{t:'mc',q:'What sound does this letter make?',d:'හ',o:['ha','sa','pa','ba'],a:0},
{t:'li',q:'Listen — which letter?',say:'ප',o:['ප','බ','ස','හ'],a:0},
{t:'mc',q:'Which letter is the b sound?',o:['බ','ප','ස','හ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ස',o:['sa','ha','ba','pa'],a:0},
{t:'li',q:'Listen — which letter?',say:'බ',o:['බ','ප','හ','ස'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ප','pa'],['ස','sa'],['හ','ha'],['බ','ba']]}]},
{id:'si_c3_5',title:'Checkpoint',step:'checkpoint',meta:'ප බ ස හ mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ප',o:['pa','ba','sa','ha'],a:0},
{t:'li',q:'Listen — which letter?',say:'බ',o:['බ','ප','ස','හ'],a:0},
{t:'mc',q:'Which letter says sa?',o:['ස','හ','බ','ප'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'හ',o:['ha','pa','ba','sa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ස',o:['ස','හ','ප','බ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ප','pa'],['බ','ba'],['ස','sa'],['හ','ha']]}]},

/* --- Topic 4: ච ජ ය ර ල ව --- */
{id:'si_c4',title:'Ch, J & the gliders',step:'learn',meta:'ච ජ ය ර ල ව',vocab:[['ච','cha','consonant: ch'],['ජ','ja','consonant: j'],['ය','ya','consonant: y'],['ර','ra','consonant: r'],['ල','la','consonant: l'],['ව','wa','consonant: w']],ex:[
{t:'note',tag:'Ch & J',q:'ච and ජ',body:'<p><span class="deva">ච</span> = <b>cha</b>, the ch of "chat".</p><p><span class="deva">ජ</span> = <b>ja</b> — its voiced twin, the j of "jam".</p>',eg:[['ච','cha','ch as in chat'],['ජ','ja','j as in jam']]},
{t:'mc',q:'What sound does this letter make?',d:'ච',o:['cha','ja','ya','ra'],a:0},
{t:'mc',q:'And this one?',d:'ජ',o:['ja','cha','la','wa'],a:0},
{t:'note',tag:'Gliding letters',q:'ය ර ල ව',body:'<p><span class="deva">ය</span> = <b>ya</b>. <span class="deva">ර</span> = <b>ra</b> — lightly rolled. <span class="deva">ල</span> = <b>la</b>.</p><p><span class="deva">ව</span> = <b>wa</b> — between an English v and w, lips barely touching. You will meet it in <span class="deva">වතුර</span> <b>wathura</b> (water).</p>',eg:[['ය','ya','y'],['ර','ra','r (light roll)'],['ල','la','l'],['ව','wa','w']]},
{t:'mc',q:'What sound does this letter make?',d:'ර',o:['ra','la','ya','wa'],a:0},
{t:'mc',q:'Which sound is this?',d:'ව',o:['wa','ya','ra','la'],a:0}]},
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
{t:'mc',q:'What sound does this letter make?',d:'ල',o:['la','ra','ya','wa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ව',o:['ව','ය','ල','ර'],a:0},
{t:'mc',q:'Which letter is the ch sound?',o:['ච','ජ','ය','ව'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ය',o:['ya','ra','la','wa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ච',o:['ච','ජ','ර','ල'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ජ','ja'],['ය','ya'],['ල','la'],['ව','wa']]},
{t:'mc',q:'The r in ර is…',o:['lightly rolled','silent','an English r','a growl'],a:0}]},
{id:'si_c4_5',title:'Checkpoint',step:'checkpoint',meta:'ච ජ ය ර ල ව mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ච',o:['cha','ja','la','ra'],a:0},
{t:'li',q:'Listen — which letter?',say:'ර',o:['ර','ල','ය','ව'],a:0},
{t:'mc',q:'Which letter says ya?',o:['ය','ර','ල','ව'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ව',o:['wa','la','ya','ra'],a:0},
{t:'li',q:'Listen — which letter?',say:'ජ',o:['ජ','ච','ය','ල'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ච','cha'],['ජ','ja'],['ර','ra'],['ව','wa']]}]},

/* --- Topic 5: the half-nasals ඟ ඬ ඳ ඹ --- */
{id:'si_c5',title:'The half-nasals',step:'learn',meta:'ඟ ඬ ඳ ඹ — Sinhala’s special trick',vocab:[['ඟ','nga','half-nasal: ng+g in one beat'],['ඬ','nda','half-nasal: n+hard d'],['ඳ','ndha','half-nasal: n+soft d'],['ඹ','mba','half-nasal: m+b'],['අඹ','amba','mango']],ex:[
{t:'note',tag:'One beat',q:'The half-nasal letters',body:'<p>Here is something almost no other script has: letters with a tiny <b>hum tucked inside</b>. <span class="deva">ඹ</span> = <b>mba</b> — an m melting straight into a b, said as <b>one quick beat</b>.</p><p>Your first real word: <span class="deva">අඹ</span> <b>amba</b> — mango!</p>',eg:[['ඹ','mba','m+b in one beat'],['අඹ','amba','mango']]},
{t:'mc',q:'What sound does this letter make?',d:'ඹ',o:['mba','ndha','nda','nga'],a:0},
{t:'mc',q:'What does අඹ mean?',d:'අඹ',r:'amba',o:['mango','water','rice','tea'],a:0},
{t:'note',tag:'The whole family',q:'ඟ ඬ ඳ',body:'<p><span class="deva">ඟ</span> = <b>nga</b>, like the middle of "finger" said fast. <span class="deva">ඬ</span> = <b>nda</b> (hard d). <span class="deva">ඳ</span> = <b>ndha</b> (soft d) — you will meet it in <span class="deva">හොඳ</span> <b>hondha</b> (good).</p><p>Related: the little circle <span class="deva">ං</span> adds an <b>ng</b> hum after a vowel — it is the "n" of <span class="deva">සිංහල</span> <b>Sinhala</b> itself.</p>',eg:[['ඟ','nga','ng+g'],['ඬ','nda','n+hard d'],['ඳ','ndha','n+soft d']]},
{t:'mc',q:'What sound does this letter make?',d:'ඳ',o:['ndha','mba','nga','nda'],a:0},
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
{t:'mc',q:'What sound does this letter make?',d:'ඟ',o:['nga','nda','mba','ndha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඹ',o:['ඹ','ඟ','ඳ','ඬ'],a:0},
{t:'mc',q:'Which letter hides m+b in one beat?',o:['ඹ','ඳ','ඟ','ඬ'],a:0},
{t:'mc',q:'What does this word say?',d:'අඹ',o:['amba','anda','anga','andha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඟ',o:['ඟ','ඬ','ඹ','ඳ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ඟ','nga'],['ඹ','mba'],['ඳ','ndha'],['ඬ','nda']]},
{t:'mc',q:'ඳ vs ඬ — the difference is…',o:['soft d vs hard d','loud vs quiet','long vs short','none at all'],a:0}]},
{id:'si_c5_5',title:'Checkpoint',step:'checkpoint',meta:'ඟ ඬ ඳ ඹ mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ඹ',o:['mba','nga','nda','ndha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඳ',o:['ඳ','ඬ','ඟ','ඹ'],a:0},
{t:'mc',q:'Which letter says nda (hard d)?',o:['ඬ','ඳ','ඹ','ඟ'],a:0},
{t:'mc',q:'What does අඹ mean?',d:'අඹ',r:'amba',o:['mango','good','hello','water'],a:0},
{t:'li',q:'Listen — which letter?',say:'ඟ',o:['ඟ','ඹ','ඳ','ඬ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ඟ','nga'],['ඬ','nda'],['ඳ','ndha'],['ඹ','mba']]}]},

/* --- Topic 6: vowel signs & the vowel killer --- */
{id:'si_v1',title:'Adding vowels',step:'learn',meta:'කා කැ කි කු කෙ කො ක්',vocab:[['කා','kaa','k + long aa'],['කැ','kae','k + the a of cat'],['කි','ki','k + i'],['කු','ku','k + u'],['කෙ','ke','k + e'],['කො','ko','k + o'],['ක්','k','k alone — vowel killed']],ex:[
{t:'note',tag:'Change the vowel',q:'The built-in "a"',body:'<p>Every consonant already says "a": <span class="deva">ක</span> = <b>ka</b>. Add a <b>vowel sign</b> and that "a" changes: <span class="deva">කා</span> = <b>kaa</b> — held longer.</p><p>In this course a <b>doubled</b> vowel always means "hold it": <b>ee</b> is the ay of "say", <b>oo</b> the o of "go", <b>uu</b> the u of "moon".</p>',eg:[['ක','ka','built-in a'],['කා','kaa','long aa']]},
{t:'note',tag:'The Sri Lankan special',q:'කැ — the a of "cat"',body:'<p><span class="deva">කැ</span> = <b>kae</b> — the flat a of "cat". Sinhala is the <b>only</b> script in the region with its own sign for this everyday sound.</p><p>The others sit all around the letter: <span class="deva">කි</span> <b>ki</b>, <span class="deva">කු</span> <b>ku</b>, <span class="deva">කෙ</span> <b>ke</b>, <span class="deva">කො</span> <b>ko</b>. Always read the consonant first, then the vowel.</p>',eg:[['කැ','kae','a of cat'],['කි','ki','i'],['කු','ku','u'],['කෙ','ke','e'],['කො','ko','o']]},
{t:'mc',q:'What does this say?',d:'කා',o:['kaa','ki','ku','ke'],a:0},
{t:'mc',q:'What does this say?',d:'කැ',o:['kae','kaa','ko','ke'],a:0},
{t:'note',tag:'The vowel killer',q:'ක් — hal kirima',body:'<p>The little hook <span class="deva">්</span> is the <b>hal kirima</b> — the vowel killer. It switches the built-in "a" OFF: <span class="deva">ක්</span> = just <b>k</b>.</p><p>That is how Sinhala words end in a bare consonant: <span class="deva">බත්</span> <b>bath</b> (rice) ends in a killed <span class="deva">ත්</span>.</p>',eg:[['ක','ka','a switched on'],['ක්','k','a killed']]},
{t:'mc',q:'What does this say?',d:'කු',o:['ku','ki','ko','ke'],a:0},
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
{t:'mc',q:'What does this say?',d:'කො',o:['ko','ke','kaa','ku'],a:0},
{t:'li',q:'Listen — which one?',say:'කි',o:['කි','කු','කෙ','කා'],a:0},
{t:'mc',q:'Which is kaa (long a)?',o:['කා','කු','කැ','කො'],a:0},
{t:'mc',q:'What does this say?',d:'කෙ',o:['ke','ki','ko','ku'],a:0},
{t:'li',q:'Listen — which one?',say:'කො',o:['කො','කා','කෙ','කු'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['කා','kaa'],['කු','ku'],['කො','ko'],['කැ','kae']]},
{t:'mc',q:'බත් ends in a bare t sound because of…',o:['the vowel killer ්','a silent letter','English influence','the letter බ'],a:0}]},
{id:'si_v1_5',title:'Checkpoint',step:'checkpoint',meta:'Vowel signs mastered?',vocab:[],ex:[
{t:'mc',q:'What does this say?',d:'කා',o:['kaa','ku','ke','ko'],a:0},
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
{t:'mc',q:'What does this word say?',d:'වතුර',o:['wathura','bath','thee','amba'],a:0},
{t:'li',q:'Listen — which word?',say:'හොඳයි',o:['හොඳයි','වතුර','අඹ','තේ'],a:0},
{t:'mc',q:'What does අඹ mean?',d:'අඹ',o:['mango','rice','water','tea'],a:0},
{t:'mc',q:'What does this word say?',d:'තේ',o:['thee','bath','wathura','hondhayi'],a:0},
{t:'li',q:'Listen — which word?',say:'බත්',o:['බත්','තේ','වතුර','හොඳයි'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['වතුර','water'],['බත්','rice'],['අඹ','mango'],['ආයුබෝවන්','hello']]},
{t:'mc',q:'You just read real Sinhala words. The secret was…',o:['sounding out each letter','memorizing shapes','guessing','translation apps'],a:0}]},
{id:'si_v2_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 1 complete?',vocab:[],ex:[
{t:'mc',q:'What does this word say?',d:'බත්',o:['bath','thee','wathura','amba'],a:0},
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
{id:'si_people',title:'Terms of address',step:'learn',meta:'අම්මා තාත්තා අයියා අක්කා නංගී මල්ලී',vocab:[['අම්මා','ammaa','mother'],['තාත්තා','thaaththaa','father'],['අයියා','ayiyaa','older brother'],['අක්කා','akkaa','older sister'],['නංගී','nangii','younger sister'],['මල්ලී','mallii','younger brother']],ex:[
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
{id:'si_court',title:'Courtesy expressions',step:'learn',meta:'ස්තූතියි කරුණාකරලා සමාවෙන්න හරි',vocab:[['ස්තූතියි','sthuuthiyi','thank you'],['කරුණාකරලා','karunaakaralaa','please'],['සමාවෙන්න','samaawenna','sorry / excuse me'],['කමක් නෑ','kamak naee','no problem'],['හරි','hari','okay / right']],ex:[
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
{id:'si_intro',title:'Introductions',step:'learn',meta:'මගේ නම … & no word for "is"',vocab:[['නම','nama','name'],['මගේ නම','magee nama','my name'],['ඔයාගේ නම මොකක්ද','oyaagee nama mokakdha','what is your name?'],['යාළුවා','yaaluwaa','friend'],['මේ','mee','this (before a noun)']],ex:[
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
{id:'si_dem',title:'Demonstratives',step:'learn',meta:'මේක ඕක අරක ඒක — 4-way pointing',vocab:[['මේක','meeka','this (near me)'],['ඕක','ooka','that (near you)'],['අරක','araka','that over there (visible)'],['ඒක','eeka','it / that (out of sight)'],['පොත','potha','book']],ex:[
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
{id:'si_neg',title:'Negation',step:'learn',meta:'-න්නේ නෑ & නෙමෙයි',vocab:[['නෑ','naee','no / not'],['දන්නවා','dhannawaa','knows'],['මම දන්නේ නෑ','mama dhannee naee','I do not know'],['මම කන්නේ නෑ','mama kannee naee','I do not eat'],['නෙමෙයි','nemeyi','is not (for nouns)']],ex:[
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
{id:'si_shop',title:'Bargaining',step:'learn',meta:'ගණන් වැඩියි … අඩු කරන්න',vocab:[['ගණන් වැඩියි','ganan waediyi','too expensive'],['ලාබයි','laabayi','cheap'],['අඩු කරන්න','adu karanna','please reduce it'],['ටිකක් අඩු කරන්න','tikak adu karanna','reduce it a little'],['මම මේක ගන්නවා','mama meeka gannawaa','I will take this'],['ගන්නවා','gannawaa','takes / buys']],ex:[
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
{id:'si_adj',title:'Predicate -යි',step:'learn',meta:'ලොකුයි පොඩියි රසයි',vocab:[['ලොකුයි','lokuyi','is big'],['පොඩියි','podiyi','is small'],['රසයි','rasayi','is tasty'],['නරකයි','narakayi','is bad'],['ලොකු','loku','big (before a noun)']],ex:[
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

/* ===================== ZONE 7 · THEN & NOW ===================== */
/* --- Topic 43: the vowel-change past --- */
{id:'si_past',title:'The past tense',step:'learn',meta:'කෑවා බිව්වා ගියා ආවා',vocab:[['කෑවා','kaeaewaa','ate'],['බිව්වා','biwwaa','drank'],['ගියා','giyaa','went'],['ආවා','aawaa','came'],['මම ඊයේ ගමට ගියා','mama iiyee gamata giyaa','I went to the village yesterday']],ex:[
{t:'note',tag:'The vowel flips',q:'කනවා → කෑවා',body:'<p>Sinhala makes the past by <b>changing the vowel inside</b> the verb: <span class="deva">කනවා</span> eats → <span class="deva">කෑවා</span> <b>kaeaewaa</b> ate · <span class="deva">බොනවා</span> → <span class="deva">බිව්වා</span> <b>biwwaa</b> drank.</p><p>Still ONE form for everyone: <span class="deva">මම කෑවා, අපි කෑවා, එයා කෑවා</span>.</p>',eg:[['කනවා → කෑවා','kanawaa → kaeaewaa','eats → ate'],['බොනවා → බිව්වා','bonawaa → biwwaa','drinks → drank']]},
{t:'mc',q:'What does කෑවා mean?',d:'කෑවා',r:'kaeaewaa',o:['ate','eats','will eat','is eating'],a:0},
{t:'mc',q:'"Drank" =',o:['බිව්වා','බොනවා','කෑවා','ගියා'],a:0},
{t:'note',tag:'Went & came',q:'ගියා & ආවා',body:'<p>The two travel verbs change completely: <span class="deva">යනවා</span> → <span class="deva">ගියා</span> <b>giyaa</b> went · <span class="deva">එනවා</span> → <span class="deva">ආවා</span> <b>aawaa</b> came.</p><p><span class="deva">මම ඊයේ ගමට ගියා</span> — I went to the village yesterday. Your Zone 2 time words suddenly have a lot more to do!</p>',eg:[['යනවා → ගියා','yanawaa → giyaa','goes → went'],['එනවා → ආවා','enawaa → aawaa','comes → came'],['මම ඊයේ ගමට ගියා','mama iiyee gamata giyaa','I went to the village yesterday']]},
{t:'mc',q:'What does ගියා mean?',d:'ගියා',r:'giyaa',o:['went','goes','came','will go'],a:0},
{t:'wb',q:'Build: I went to the village yesterday',a:['මම','ඊයේ','ගමට','ගියා'],pool:['මම','ඊයේ','ගමට','ගියා','යනවා']},
{t:'mc',q:'එයා ආවා means…',d:'එයා ආවා',r:'eyaa aawaa',o:['he / she came','he / she comes','come here!','he / she left'],a:0}]},
{id:'si_past_2',title:'Hear the past',step:'recognize',meta:'Present or past?',vocab:[],ex:[
{t:'li',q:'Listen — which verb?',say:'කෑවා',o:['කෑවා','කනවා','බිව්වා','ගියා'],a:0},
{t:'li',q:'Listen — which verb?',say:'ගියා',o:['ගියා','යනවා','ආවා','කෑවා'],a:0},
{t:'mc',q:'Which is the PAST of බොනවා?',o:['බිව්වා','බොන්නේ','බීවනවා','බොනවද'],a:0},
{t:'mc',q:'මම ඊයේ තේ බිව්වා means…',d:'මම ඊයේ තේ බිව්වා',r:'mama iiyee thee biwwaa',o:['I drank tea yesterday','I drink tea daily','I will drink tea','drink the tea!'],a:0},
{t:'li',q:'Listen — which verb?',say:'ආවා',o:['ආවා','ගියා','එනවා','කෑවා'],a:0},
{t:'mc',q:'The past is made by…',o:['changing the vowel inside the verb','adding a word before','a new ending only','tone of voice'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මම ඊයේ ගමට ගියා',o:['මම ඊයේ ගමට ගියා','මම ගමට යනවා','එයා ආවා','මම බත් කෑවා'],a:0}]},
{id:'si_past_3',title:'Build it',step:'build',meta:'Say what happened',vocab:[],ex:[
{t:'match',q:'Match present and past',pairs:[['කනවා','කෑවා'],['බොනවා','බිව්වා'],['යනවා','ගියා'],['එනවා','ආවා']]},
{t:'wb',q:'Build: I ate rice',a:['මම','බත්','කෑවා'],pool:['මම','බත්','කෑවා','කනවා']},
{t:'mc',q:'"She came home yesterday" =',o:['එයා ඊයේ ගෙදර ආවා','එයා හෙට ගෙදර එනවා','එයා ගෙදර යනවා','එයා ඊයේ ගියා'],a:0},
{t:'wb',q:'Build: we drank tea',a:['අපි','තේ','බිව්වා'],pool:['අපි','තේ','බිව්වා','බොනවා']},
{t:'li',q:'Listen — which verb?',say:'බිව්වා',o:['බිව්වා','බොනවා','කෑවා','ආවා'],a:0},
{t:'mc',q:'ඊයේ pairs naturally with…',o:['ගියා','යනවා','හෙට','දැන්'],a:0}]},
{id:'si_past_4',title:'Mix it',step:'mix',meta:'Yesterday’s stories',vocab:[],ex:[
{t:'mc',q:'What does ආවා mean?',d:'ආවා',r:'aawaa',o:['came','went','ate','comes'],a:0},
{t:'wb',q:'Build: father went to the shop',a:['තාත්තා','කඩේට','ගියා'],pool:['තාත්තා','කඩේට','ගියා','යනවා']},
{t:'li',q:'Listen — which sentence?',say:'අපි තේ බිව්වා',o:['අපි තේ බිව්වා','මම තේ බිව්වා','අපි තේ බොනවා','අපි බත් කෑවා'],a:0},
{t:'mc',q:'Pick the PAST sentence:',o:['මම ආප්ප කෑවා','මම ආප්ප කනවා','මම ආප්ප කන්නේ නෑ','මට ආප්ප ඕනැ'],a:0},
{t:'li',q:'Listen — which verb?',say:'කනවා',o:['කනවා','කෑවා','බිව්වා','ගියා'],a:0},
{t:'match',q:'Match sentence and meaning',pairs:[['මම ගමට ගියා','I went to the village'],['එයා ආවා','he / she came'],['අපි බත් කෑවා','we ate rice'],['මම තේ බිව්වා','I drank tea']]},
{t:'mc',q:'How many past forms per verb (for all persons)?',o:['one','three','six','it depends'],a:0}]},
{id:'si_past_5',title:'Checkpoint',step:'checkpoint',meta:'First pasts mastered?',vocab:[],ex:[
{t:'mc',q:'"Ate" =',o:['කෑවා','කනවා','බිව්වා','ගියා'],a:0},
{t:'wb',q:'Build: I went home yesterday',a:['මම','ඊයේ','ගෙදර','ගියා'],pool:['මම','ඊයේ','ගෙදර','ගියා','ආවා']},
{t:'li',q:'Listen — which verb?',say:'ගියා',o:['ගියා','ආවා','යනවා','කෑවා'],a:0},
{t:'mc',q:'The past of එනවා is…',o:['ආවා','ගියා','එන්නා','ඊවා'],a:0},
{t:'li',q:'Listen — which sentence?',say:'මම බත් කෑවා',o:['මම බත් කෑවා','මම බත් කනවා','අපි බත් කෑවා','මම තේ බිව්වා'],a:0},
{t:'match',q:'Match present and past',pairs:[['කනවා','කෑවා'],['බොනවා','බිව්වා'],['යනවා','ගියා'],['එනවා','ආවා']]}]},

/* --- Topic 44: more pasts --- */
{id:'si_past2',title:'Irregular pasts',step:'learn',meta:'කළා ගත්තා දුන්නා කිව්වා හිටියා',vocab:[['කළා','kalaa','did'],['ගත්තා','gaththaa','took / bought'],['දුන්නා','dhunnaa','gave'],['කිව්වා','kiwwaa','said'],['හිටියා','hitiyaa','was / stayed (living)'],['තිබුණා','thibunaa','was / there was (thing)']],ex:[
{t:'note',tag:'The busy three',q:'කළා ගත්තා දුන්නා',body:'<p><span class="deva">කරනවා</span> → <span class="deva">කළා</span> <b>kalaa</b> did · <span class="deva">ගන්නවා</span> → <span class="deva">ගත්තා</span> <b>gaththaa</b> took, bought · <span class="deva">දෙනවා</span> → <span class="deva">දුන්නා</span> <b>dhunnaa</b> gave.</p><p><span class="deva">මම ආප්ප ගත්තා</span> — I bought hoppers. Your kadē verbs now work yesterday too!</p>',eg:[['කරනවා → කළා','karanawaa → kalaa','does → did'],['ගන්නවා → ගත්තා','gannawaa → gaththaa','takes → took'],['දෙනවා → දුන්නා','dhenawaa → dhunnaa','gives → gave']]},
{t:'mc',q:'What does ගත්තා mean?',d:'ගත්තා',r:'gaththaa',o:['took / bought','gave','did','said'],a:0},
{t:'mc',q:'"Gave" =',o:['දුන්නා','ගත්තා','කළා','කිව්වා'],a:0},
{t:'note',tag:'Said & was',q:'කිව්වා · හිටියා · තිබුණා',body:'<p><span class="deva">කිව්වා</span> <b>kiwwaa</b> = said. And the two be-verbs: <span class="deva">ඉන්නවා</span> → <span class="deva">හිටියා</span> <b>hitiyaa</b> (living things) · <span class="deva">තියෙනවා</span> → <span class="deva">තිබුණා</span> <b>thibunaa</b> (things).</p><p><span class="deva">අම්මා ගෙදර හිටියා</span> — mother was at home. <span class="deva">බත් තිබුණා</span> — there was rice.</p>',eg:[['කිව්වා','kiwwaa','said'],['අම්මා ගෙදර හිටියා','ammaa gedhara hitiyaa','mother was at home'],['බත් තිබුණා','bath thibunaa','there was rice']]},
{t:'mc',q:'අම්මා ගෙදර හිටියා means…',d:'අම්මා ගෙදර හිටියා',r:'ammaa gedhara hitiyaa',o:['mother was at home','mother is at home','mother went home','mother came home'],a:0},
{t:'wb',q:'Build: I bought hoppers',a:['මම','ආප්ප','ගත්තා'],pool:['මම','ආප්ප','ගත්තා','දුන්නා']},
{t:'mc',q:'Which past goes with THINGS being somewhere?',o:['තිබුණා','හිටියා','ගත්තා','කළා'],a:0}]},
{id:'si_past2_2',title:'Hear them',step:'recognize',meta:'Spot the new pasts',vocab:[],ex:[
{t:'li',q:'Listen — which verb?',say:'කළා',o:['කළා','ගත්තා','දුන්නා','කිව්වා'],a:0},
{t:'li',q:'Listen — which verb?',say:'දුන්නා',o:['දුන්නා','ගත්තා','කළා','හිටියා'],a:0},
{t:'mc',q:'Which is the past of කරනවා?',o:['කළා','කිව්වා','ගත්තා','කෑවා'],a:0},
{t:'mc',q:'එයා මොකක්ද කිව්වේ? — කිව්වා means…',o:['said','asked','did','heard'],a:0},
{t:'li',q:'Listen — which verb?',say:'හිටියා',o:['හිටියා','තිබුණා','ගියා','ආවා'],a:0},
{t:'mc',q:'"There was water" =',o:['වතුර තිබුණා','වතුර හිටියා','වතුර තියෙනවා','වතුර ගත්තා'],a:0},
{t:'li',q:'Listen — which verb?',say:'ගත්තා',o:['ගත්තා','ගියා','දුන්නා','කළා'],a:0}]},
{id:'si_past2_3',title:'Build it',step:'build',meta:'What everyone did',vocab:[],ex:[
{t:'match',q:'Match present and past',pairs:[['කරනවා','කළා'],['ගන්නවා','ගත්තා'],['දෙනවා','දුන්නා'],['කියනවා','කිව්වා']]},
{t:'wb',q:'Build: mother gave tea',a:['අම්මා','තේ','දුන්නා'],pool:['අම්මා','තේ','දුන්නා','ගත්තා']},
{t:'mc',q:'"He was at the shop" =',o:['එයා කඩේ හිටියා','එයා කඩේ තිබුණා','එයා කඩේ ඉන්නවා','එයා කඩේට ගියා'],a:0},
{t:'wb',q:'Build: there was rice at home',a:['ගෙදර','බත්','තිබුණා'],pool:['ගෙදර','බත්','තිබුණා','හිටියා']},
{t:'li',q:'Listen — which verb?',say:'තිබුණා',o:['තිබුණා','හිටියා','තියෙනවා','දුන්නා'],a:0},
{t:'mc',q:'මම මේක ගත්තා means…',d:'මම මේක ගත්තා',r:'mama meeka gaththaa',o:['I bought this','I will take this','give me this','I sold this'],a:0}]},
{id:'si_past2_4',title:'Mix it',step:'mix',meta:'All the pasts together',vocab:[],ex:[
{t:'mc',q:'What does කිව්වා mean?',d:'කිව්වා',r:'kiwwaa',o:['said','gave','took','was'],a:0},
{t:'wb',q:'Build: the friend was at the village',a:['යාළුවා','ගමේ','හිටියා'],pool:['යාළුවා','ගමේ','හිටියා','තිබුණා']},
{t:'li',q:'Listen — which sentence?',say:'මම ආප්ප ගත්තා',o:['මම ආප්ප ගත්තා','මම ආප්ප කෑවා','අම්මා තේ දුන්නා','මම මේක ගත්තා'],a:0},
{t:'mc',q:'හිටියා vs තිබුණා is the past of…',o:['ඉන්නවා vs තියෙනවා','යනවා vs එනවා','කනවා vs බොනවා','ගන්නවා vs දෙනවා'],a:0},
{t:'li',q:'Listen — which verb?',say:'කිව්වා',o:['කිව්වා','කළා','කෑවා','බිව්වා'],a:0},
{t:'match',q:'Match sentence and meaning',pairs:[['මම වැඩ කළා','I did work'],['එයා කිව්වා','he / she said'],['අම්මා දුන්නා','mother gave'],['බත් තිබුණා','there was rice']]},
{t:'mc',q:'"I bought a ticket to the village"? You have every piece except…',o:['the word ticket — next zone!','the past tense','the -ට ending','the word village'],a:0}]},
{id:'si_past2_5',title:'Checkpoint',step:'checkpoint',meta:'Pasts mastered?',vocab:[],ex:[
{t:'mc',q:'"Did" =',o:['කළා','ගත්තා','දුන්නා','කිව්වා'],a:0},
{t:'wb',q:'Build: I gave money',a:['මම','සල්ලි','දුන්නා'],pool:['මම','සල්ලි','දුන්නා','ගත්තා']},
{t:'li',q:'Listen — which verb?',say:'ගත්තා',o:['ගත්තා','දුන්නා','කළා','හිටියා'],a:0},
{t:'mc',q:'"Mother was at home" =',o:['අම්මා ගෙදර හිටියා','අම්මා ගෙදර තිබුණා','අම්මා ගෙදර ඉන්නවා','අම්මා ගෙදර ගියා'],a:0},
{t:'li',q:'Listen — which verb?',say:'හිටියා',o:['හිටියා','තිබුණා','ආවා','ගියා'],a:0},
{t:'match',q:'Match present and past',pairs:[['කරනවා','කළා'],['ගන්නවා','ගත්තා'],['ඉන්නවා','හිටියා'],['තියෙනවා','තිබුණා']]}]},

/* --- Topic 45: past negative & questions --- */
{id:'si_pastneg',title:'Past negation & questions',step:'learn',meta:'ගියේ නෑ … ගියාද?',vocab:[['ගියේ නෑ','giyee naee','did not go'],['කෑවේ නෑ','kaeaewee naee','did not eat'],['ගියාද','giyaadha','did (you) go?'],['කෑවද','kaeaewadha','did (you) eat?'],['මම ඊයේ ගියේ නෑ','mama iiyee giyee naee','I did not go yesterday']],ex:[
{t:'note',tag:'No in the past',q:'-ා → -ේ නෑ',body:'<p>Past negatives swap the final <b>-ා</b> for <b>-ේ</b> and add <span class="deva">නෑ</span>: <span class="deva">ගියා</span> → <span class="deva">ගියේ නෑ</span> <b>giyee naee</b> did not go · <span class="deva">කෑවා</span> → <span class="deva">කෑවේ නෑ</span> did not eat.</p><p>Same shape you learned in Zone 3 — <span class="deva">කන්නේ නෑ</span> — just built on the past stem.</p>',eg:[['ගියා → ගියේ නෑ','giyaa → giyee naee','went → did not go'],['කෑවා → කෑවේ නෑ','kaeaewaa → kaeaewee naee','ate → did not eat']]},
{t:'mc',q:'"Did not go" =',o:['ගියේ නෑ','යන්නේ නෑ','ගියා නෑ','නෑ ගියා'],a:0},
{t:'mc',q:'මම කෑවේ නෑ means…',d:'මම කෑවේ නෑ',r:'mama kaeaewee naee',o:['I did not eat','I do not eat','I will not eat','I ate'],a:0},
{t:'note',tag:'Did you…?',q:'past + ද',body:'<p>Past questions take the same magic <span class="deva">ද</span>: <span class="deva">ගියාද</span> <b>giyaadha</b> — did you go? · <span class="deva">කෑවද</span> — did you eat?</p><p>Echo answers, as always: <span class="deva">ගියා</span> (went!) or <span class="deva">ගියේ නෑ</span> (did not).</p>',eg:[['ඔයා ගමට ගියාද','oyaa gamata giyaadha','did you go to the village?'],['ගියා','giyaa','(yes,) went'],['ගියේ නෑ','giyee naee','(no,) did not go']]},
{t:'mc',q:'ඔයා තේ බිව්වද? You did. Echo answer:',o:['බිව්වා','බිව්වේ නෑ','ඔව් ඔව් ඔව්','බොනවා'],a:0},
{t:'wb',q:'Build: I did not go yesterday',a:['මම','ඊයේ','ගියේ','නෑ'],pool:['මම','ඊයේ','ගියේ','නෑ','ගියා']},
{t:'mc',q:'"Did you eat?" =',o:['කෑවද','කනවද','කෑවේ නෑ','කන්නද'],a:0}]},
{id:'si_pastneg_2',title:'Hear it',step:'recognize',meta:'Did or did not?',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ගියේ නෑ',o:['ගියේ නෑ','ගියා','යන්නේ නෑ','කෑවේ නෑ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කෑවද',o:['කෑවද','කෑවා','කනවද','ගියාද'],a:0},
{t:'mc',q:'Which asks "did you go?"',o:['ගියාද','ගියා','යනවද','ගියේ නෑ'],a:0},
{t:'mc',q:'එයා ආවේ නෑ means…',d:'එයා ආවේ නෑ',r:'eyaa aawee naee',o:['he / she did not come','he / she came','do not come','he / she will come'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කෑවේ නෑ',o:['කෑවේ නෑ','කන්නේ නෑ','කෑවා','ගියේ නෑ'],a:0},
{t:'mc',q:'Past negative = past stem + …',o:['-ේ නෑ','-ා නෑ','නෙමෙයි','-ද'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ගියාද',o:['ගියාද','ගියා','කෑවද','යනවද'],a:0}]},
{id:'si_pastneg_3',title:'Build it',step:'build',meta:'Ask & deny',vocab:[],ex:[
{t:'match',q:'Match past and its negative',pairs:[['ගියා','ගියේ නෑ'],['කෑවා','කෑවේ නෑ'],['ආවා','ආවේ නෑ'],['බිව්වා','බිව්වේ නෑ']]},
{t:'wb',q:'Ask: did you go to the shop?',a:['ඔයා','කඩේට','ගියාද'],pool:['ඔයා','කඩේට','ගියාද','ගියා']},
{t:'mc',q:'"We did not eat rice" =',o:['අපි බත් කෑවේ නෑ','අපි බත් කන්නේ නෑ','අපි බත් කෑවා','බත් නෙමෙයි'],a:0},
{t:'wb',q:'Build: mother did not come',a:['අම්මා','ආවේ','නෑ'],pool:['අම්මා','ආවේ','නෑ','ආවා']},
{t:'li',q:'Listen — which phrase?',say:'ආවේ නෑ',o:['ආවේ නෑ','ගියේ නෑ','ආවා','එන්නේ නෑ'],a:0},
{t:'mc',q:'ඔයා ඊයේ වැඩ කළාද? You did not. Echo:',o:['කළේ නෑ','කළා','කරන්නේ නෑ','නෙමෙයි'],a:0}]},
{id:'si_pastneg_4',title:'Mix it',step:'mix',meta:'Yesterday, yes & no',vocab:[],ex:[
{t:'mc',q:'Pick the QUESTION:',o:['ඔයා ගමට ගියාද','මම ගමට ගියා','මම ගියේ නෑ','එයා ආවා'],a:0},
{t:'wb',q:'Answer: I did not eat',a:['මම','කෑවේ','නෑ'],pool:['මම','කෑවේ','නෑ','කෑවා']},
{t:'li',q:'Listen — which phrase?',say:'ඔයා ගමට ගියාද',o:['ඔයා ගමට ගියාද','මම ගමට ගියා','ඔයා කඩේට ගියාද','ඔයා ගමට යනවද'],a:0},
{t:'mc',q:'කන්නේ නෑ vs කෑවේ නෑ:',o:['does not eat vs did not eat','did not eat vs does not eat','both past','both present'],a:0},
{t:'li',q:'Listen — which phrase?',say:'බිව්වේ නෑ',o:['බිව්වේ නෑ','බිව්වා','බොන්නේ නෑ','කෑවේ නෑ'],a:0},
{t:'match',q:'Match question and no-answer',pairs:[['ගියාද','ගියේ නෑ'],['කෑවද','කෑවේ නෑ'],['ආවාද','ආවේ නෑ'],['කළාද','කළේ නෑ']]},
{t:'mc',q:'තාත්තා ආවද? — he came. Echo:',o:['ආවා','ආවේ නෑ','එනවා','ගියා'],a:0}]},
{id:'si_pastneg_5',title:'Checkpoint',step:'checkpoint',meta:'Past no & ask mastered?',vocab:[],ex:[
{t:'mc',q:'"Did not come" =',o:['ආවේ නෑ','එන්නේ නෑ','ආවා','ආවද'],a:0},
{t:'wb',q:'Ask: did you eat rice?',a:['ඔයා','බත්','කෑවද'],pool:['ඔයා','බත්','කෑවද','කෑවා']},
{t:'li',q:'Listen — which phrase?',say:'ගියේ නෑ',o:['ගියේ නෑ','ගියාද','ගියා','ආවේ නෑ'],a:0},
{t:'mc',q:'"I did not buy this" =',o:['මම මේක ගත්තේ නෑ','මම මේක ගත්තා','මම මේක ගන්නේ නෑ','මට මේක එපා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කෑවද',o:['කෑවද','ගියාද','කෑවා','කනවද'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ගියාද','did you go?'],['ගියේ නෑ','did not go'],['කෑවද','did you eat?'],['කෑවේ නෑ','did not eat']]}]},

/* --- Topic 46: the -laa perfect --- */
{id:'si_perf',title:'Already done: -ලා',step:'learn',meta:'බත් කාලද? — the friendliest question',vocab:[['කාලා','kaalaa','eaten (already)'],['ගිහිල්ලා','gihillaa','gone'],['ඇවිල්ලා','aewillaa','come / arrived'],['කරලා','karalaa','done'],['බත් කාලද','bath kaaladha','have you eaten?']],ex:[
{t:'note',tag:'Done & dusted',q:'the -ලා form',body:'<p>Swap the past ending for <b>-ලා</b> and the action is <b>already done</b>: <span class="deva">කාලා</span> <b>kaalaa</b> eaten · <span class="deva">ගිහිල්ලා</span> <b>gihillaa</b> gone · <span class="deva">ඇවිල්ලා</span> <b>aewillaa</b> arrived · <span class="deva">කරලා</span> <b>karalaa</b> done.</p><p><span class="deva">මම කාලා</span> — I have (already) eaten. Recognize <span class="deva">ගිහිල්ලා</span>? It hides inside <span class="deva">ගිහින් එන්නම්</span>!</p>',eg:[['මම කාලා','mama kaalaa','I have eaten'],['එයා ගිහිල්ලා','eyaa gihillaa','he / she has gone'],['අම්මා ඇවිල්ලා','ammaa aewillaa','mother has arrived']]},
{t:'mc',q:'What does කාලා mean?',d:'කාලා',r:'kaalaa',o:['(already) eaten','eating now','will eat','did not eat'],a:0},
{t:'mc',q:'"He has gone" =',o:['එයා ගිහිල්ලා','එයා යනවා','එයා ගියේ නෑ','එයා ඇවිල්ලා'],a:0},
{t:'note',tag:'The warm question',q:'බත් කාලද?',body:'<p>In Sri Lanka the warmest everyday question is not about weather — it is <span class="deva">බත් කාලද</span> <b>bath kaaladha</b> — have you eaten rice? It really means: are you well? are you cared for?</p><p>Answers: <span class="deva">කාලා</span> (eaten!) or <span class="deva">තාම නෑ</span>? — you will meet <span class="deva">තාම</span> properly in Zone 10.</p>',eg:[['බත් කාලද','bath kaaladha','have you eaten? (= how are you!)'],['කාලා','kaalaa','(yes,) eaten']]},
{t:'mc',q:'බත් කාලද really asks…',d:'බත් කාලද',r:'bath kaaladha',o:['are you well / cared for?','are you hungry right now?','do you cook?','is the rice good?'],a:0},
{t:'wb',q:'Ask: have you eaten rice?',a:['බත්','කාලද'],pool:['බත්','කාලද','කෑවද']},
{t:'mc',q:'ගිහිල්ලා hides inside which goodbye?',o:['ගිහින් එන්නම්','ආයුබෝවන්','කොහොමද','ස්තූතියි'],a:0}]},
{id:'si_perf_2',title:'Hear it',step:'recognize',meta:'Already done?',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'කාලා',o:['කාලා','කෑවා','කනවා','කරලා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'බත් කාලද',o:['බත් කාලද','බත් කෑවද','බත් කනවද','කාලා'],a:0},
{t:'mc',q:'Which means "gone (already)"?',o:['ගිහිල්ලා','ගියා','යනවා','ගියේ නෑ'],a:0},
{t:'mc',q:'අම්මා ඇවිල්ලා means…',d:'අම්මා ඇවිල්ලා',r:'ammaa aewillaa',o:['mother has arrived','mother is coming','mother went','mother did not come'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ගිහිල්ලා',o:['ගිහිල්ලා','ඇවිල්ලා','ගියා','කාලා'],a:0},
{t:'mc',q:'වැඩ කරලා means…',d:'වැඩ කරලා',r:'waeda karalaa',o:['the work is done','working now','will work','no work'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඇවිල්ලා',o:['ඇවිල්ලා','ගිහිල්ලා','ආවා','කරලා'],a:0}]},
{id:'si_perf_3',title:'Build it',step:'build',meta:'Say what is done',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['කාලා','eaten'],['ගිහිල්ලා','gone'],['ඇවිල්ලා','arrived'],['කරලා','done']]},
{t:'wb',q:'Say: I have eaten',a:['මම','කාලා'],pool:['මම','කාලා','කෑවා']},
{t:'mc',q:'Your friend asks බත් කාලද. You have. Answer:',o:['කාලා','කෑවද','බත්','ගිහිල්ලා'],a:0},
{t:'wb',q:'Say: father has gone to the shop',a:['තාත්තා','කඩේට','ගිහිල්ලා'],pool:['තාත්තා','කඩේට','ගිහිල්ලා','ගියා']},
{t:'li',q:'Listen — which phrase?',say:'මම කාලා',o:['මම කාලා','මම කෑවා','බත් කාලද','මම ගිහිල්ලා'],a:0},
{t:'mc',q:'The -ලා form says the action is…',o:['already complete','happening now','impossible','planned'],a:0}]},
{id:'si_perf_4',title:'Mix it',step:'mix',meta:'-ලා in real life',vocab:[],ex:[
{t:'mc',q:'You knock; the shop owner ගිහිල්ලා. The shop is…',o:['unattended — he has gone','busy — he is in','closed forever','open as usual'],a:0},
{t:'wb',q:'Say: mother has arrived home',a:['අම්මා','ගෙදර','ඇවිල්ලා'],pool:['අම්මා','ගෙදර','ඇවිල්ලා','ගිහිල්ලා']},
{t:'li',q:'Listen — which phrase?',say:'වැඩ කරලා',o:['වැඩ කරලා','වැඩ කළා','කරලා','වැඩ කරනවා'],a:0},
{t:'mc',q:'කෑවා vs කාලා:',o:['ate (then) vs eaten (already)','same meaning','eaten vs ate','will eat vs eats'],a:0},
{t:'li',q:'Listen — which phrase?',say:'බත් කාලද',o:['බත් කාලද','බත් කෑවද','කාලා','බත් තියෙනවද'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මම කාලා','I have eaten'],['එයා ගිහිල්ලා','she has gone'],['අම්මා ඇවිල්ලා','mother has arrived'],['වැඩ කරලා','the work is done']]},
{t:'mc',q:'Why is බත් කාලද the warmest question?',o:['it asks if you are cared for','rice is expensive','it is about cooking skill','it is very formal'],a:0}]},
{id:'si_perf_5',title:'Checkpoint',step:'checkpoint',meta:'-ලා mastered?',vocab:[],ex:[
{t:'mc',q:'"(Already) eaten" =',o:['කාලා','කෑවා','කනවා','කෑවද'],a:0},
{t:'wb',q:'Ask the warm question: have you eaten rice?',a:['බත්','කාලද'],pool:['බත්','කාලද','තියෙනවද']},
{t:'li',q:'Listen — which phrase?',say:'ගිහිල්ලා',o:['ගිහිල්ලා','ඇවිල්ලා','කාලා','ගියා'],a:0},
{t:'mc',q:'"The work is done" =',o:['වැඩ කරලා','වැඩ කළා','වැඩ කරනවා','වැඩ නෑ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කාලා',o:['කාලා','කරලා','කෑවා','ආවා'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['කාලා','eaten'],['ගිහිල්ලා','gone'],['ඇවිල්ලා','arrived'],['බත් කාලද','have you eaten?']]}]},

/* --- Topic 47: can & cannot --- */
{id:'si_can',title:'Can: පුළුවන් & බෑ',step:'learn',meta:'මට පුළුවන් — the power pair',vocab:[['පුළුවන්','puluwan','can / able'],['බෑ','baee','cannot'],['මට පුළුවන්','mata puluwan','I can'],['මට බෑ','mata baee','I cannot'],['මට සිංහල පුළුවන්','mata sinhala puluwan','I can (speak) Sinhala'],['යන්න','yanna','to go']],ex:[
{t:'note',tag:'The power pair',q:'පුළුවන් & බෑ',body:'<p>Can and cannot ride the dative, like wants and feelings: <span class="deva">මට පුළුවන්</span> <b>mata puluwan</b> — I can. <span class="deva">මට බෑ</span> <b>mata baee</b> — I cannot.</p><p><span class="deva">මට සිංහල පුළුවන්</span> — I can (speak) Sinhala. Say it proudly; you have earned it.</p>',eg:[['මට පුළුවන්','mata puluwan','I can'],['මට බෑ','mata baee','I cannot'],['මට සිංහල පුළුවන්','mata sinhala puluwan','I can speak Sinhala']]},
{t:'mc',q:'What does පුළුවන් mean?',d:'පුළුවන්',r:'puluwan',o:['can / able','must','want','done'],a:0},
{t:'mc',q:'"I cannot" =',o:['මට බෑ','මට එපා','මට නෑ','බෑ මම'],a:0},
{t:'note',tag:'Can DO',q:'verb-න්න + පුළුවන්',body:'<p>To say you can DO something, the verb takes <b>-න්න</b>: <span class="deva">යන්න</span> <b>yanna</b> to go — <span class="deva">මට යන්න පුළුවන්</span> = I can go · <span class="deva">මට යන්න බෑ</span> = I cannot go.</p><p>Ask: <span class="deva">පුළුවන්ද</span> <b>puluwandha</b>? Answer: <span class="deva">පුළුවන්</span> or <span class="deva">බෑ</span>.</p>',eg:[['මට යන්න පුළුවන්','mata yanna puluwan','I can go'],['මට යන්න බෑ','mata yanna baee','I cannot go'],['පුළුවන්ද','puluwandha','can you?']]},
{t:'mc',q:'"I cannot go" =',o:['මට යන්න බෑ','මට යන්න පුළුවන්','මම යන්නේ නෑ','මට එපා'],a:0},
{t:'wb',q:'Say: I can speak Sinhala',a:['මට','සිංහල','පුළුවන්'],pool:['මට','සිංහල','පුළුවන්','බෑ']},
{t:'mc',q:'හෙට එන්න පුළුවන්ද? You can. Answer:',o:['පුළුවන්','බෑ','ඕනැ','එපා'],a:0}]},
{id:'si_can_2',title:'Hear it',step:'recognize',meta:'Can or cannot?',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'පුළුවන්',o:['පුළුවන්','බෑ','ඕනැ','එපා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට බෑ',o:['මට බෑ','මට පුළුවන්','මට එපා','මට නෑ'],a:0},
{t:'mc',q:'Which asks "can you?"',o:['පුළුවන්ද','පුළුවන්','බෑද','ඕනැද'],a:0},
{t:'mc',q:'මට සිංහල ටිකක් පුළුවන් means…',d:'මට සිංහල ටිකක් පුළුවන්',r:'mata sinhala tikak puluwan',o:['I can speak a little Sinhala','I cannot speak Sinhala','Sinhala is easy','I want Sinhala lessons'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට සිංහල පුළුවන්',o:['මට සිංහල පුළුවන්','මට සිංහල බෑ','මට පුළුවන්','සිංහල පුළුවන්ද'],a:0},
{t:'mc',q:'The little word riding under can/cannot is…',o:['මට — to me','මම — I','මගේ — my','මේ — this'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට යන්න බෑ',o:['මට යන්න බෑ','මට යන්න පුළුවන්','මම යන්නේ නෑ','මට බෑ'],a:0}]},
{id:'si_can_3',title:'Build it',step:'build',meta:'Powers & limits',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['මට පුළුවන්','I can'],['මට බෑ','I cannot'],['පුළුවන්ද','can you?'],['මට යන්න පුළුවන්','I can go']]},
{t:'wb',q:'Say: I cannot go today',a:['මට','අද','යන්න','බෑ'],pool:['මට','අද','යන්න','බෑ','පුළුවන්']},
{t:'mc',q:'"Can you come tomorrow?" =',o:['හෙට එන්න පුළුවන්ද','හෙට එනවද','හෙට ආවාද','හෙට එන්න බෑ'],a:0},
{t:'wb',q:'Say: I can eat hoppers — hoppers first after මට',a:['මට','ආප්ප','කන්න','පුළුවන්'],pool:['මට','ආප්ප','කන්න','පුළුවන්','බෑ']},
{t:'li',q:'Listen — which word?',say:'බෑ',o:['බෑ','නෑ','දැන්','මට'],a:0},
{t:'mc',q:'The -න්න on යන්න makes it…',o:['"to go" — ready for පුළුවන්','past tense','a question','a command only'],a:0}]},
{id:'si_can_4',title:'Mix it',step:'mix',meta:'Real cans & cannots',vocab:[],ex:[
{t:'mc',q:'A seller pushes; you truly cannot pay. Firm & polite:',o:['මට බෑ','මට පුළුවන්','හරි හරි','දෙන්න'],a:0},
{t:'wb',q:'Ask: can you come to the village?',a:['ඔයාට','ගමට','එන්න','පුළුවන්ද'],pool:['ඔයාට','ගමට','එන්න','පුළුවන්ද','බෑ']},
{t:'li',q:'Listen — which phrase?',say:'මට යන්න පුළුවන්',o:['මට යන්න පුළුවන්','මට යන්න බෑ','මට පුළුවන්','යන්න පුළුවන්ද'],a:0},
{t:'mc',q:'බෑ vs නෑ:',o:['cannot vs no / not','no vs cannot','both cannot','both no'],a:0},
{t:'li',q:'Listen — which phrase?',say:'පුළුවන්ද',o:['පුළුවන්ද','පුළුවන්','බෑ','ඕනැද'],a:0},
{t:'match',q:'Match question and honest answer',pairs:[['සිංහල පුළුවන්ද','ටිකක් පුළුවන්'],['හෙට එන්න පුළුවන්ද','පුළුවන්'],['අද යන්න පුළුවන්ද','බෑ'],['ආප්ප කන්න පුළුවන්ද','පුළුවන්!']]},
{t:'mc',q:'Which Zone 3 pattern does පුළුවන් share?',o:['මට ඕනැ — the dative subject','මම කනවා','මේක තේද','ඔව් / නෑ'],a:0}]},
{id:'si_can_5',title:'Checkpoint',step:'checkpoint',meta:'Can & cannot mastered?',vocab:[],ex:[
{t:'mc',q:'"I can" =',o:['මට පුළුවන්','මම පුළුවන්','මට බෑ','පුළුවන්ද'],a:0},
{t:'wb',q:'Say: I can speak a little Sinhala',a:['මට','සිංහල','ටිකක්','පුළුවන්'],pool:['මට','සිංහල','ටිකක්','පුළුවන්','බෑ']},
{t:'li',q:'Listen — which phrase?',say:'මට පුළුවන්',o:['මට පුළුවන්','මට බෑ','පුළුවන්ද','මට ඕනැ'],a:0},
{t:'mc',q:'"I cannot come" =',o:['මට එන්න බෑ','මම එන්නේ නෑ','මට එන්න පුළුවන්','මට එපා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට බෑ',o:['මට බෑ','මට නෑ','මට පුළුවන්','බෑ'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['පුළුවන්','can'],['බෑ','cannot'],['යන්න','to go'],['පුළුවන්ද','can you?']]}]},

/* --- Topic 48: -nna commands --- */
{id:'si_nna',title:'Polite commands: -න්න',step:'learn',meta:'එන්න! යන්න! ඉන්න!',vocab:[['එන්න','enna','come!'],['ඉන්න','inna','wait! / stay!'],['බලන්න','balanna','look!'],['කියන්න','kiyanna','say it! / tell me'],['කන්න','kanna','eat!'],['යන්න එපා','yanna epaa','do not go!']],ex:[
{t:'note',tag:'The reveal',q:'-න්න was here all along',body:'<p>The <b>-න්න</b> form is also the polite command: <span class="deva">එන්න</span> come! · <span class="deva">ඉන්න</span> wait! · <span class="deva">බලන්න</span> look! · <span class="deva">කියන්න</span> tell me! · <span class="deva">කන්න</span> eat!</p><p>You have been using it since Zone 4: <span class="deva">දෙන්න</span> give! · <span class="deva">අඩු කරන්න</span> reduce it! One shape, two jobs: to-do and please-do.</p>',eg:[['එන්න','enna','come!'],['ඉන්න','inna','wait!'],['බලන්න','balanna','look!'],['කන්න','kanna','eat!']]},
{t:'mc',q:'What does එන්න mean?',d:'එන්න',r:'enna',o:['come!','go!','wait!','look!'],a:0},
{t:'mc',q:'"Wait a little!" =',o:['ටිකක් ඉන්න','ටිකක් එන්න','ටිකක් යන්න','ටිකක් කන්න'],a:0},
{t:'note',tag:'Do NOT',q:'-න්න + එපා',body:'<p>Your do-not-want word makes commands negative: <span class="deva">යන්න එපා</span> <b>yanna epaa</b> — do not go! · <span class="deva">බලන්න එපා</span> — do not look!</p><p>Hosts will command you warmly: <span class="deva">කන්න කන්න!</span> — eat, eat! Refusing is hard. That is the point.</p>',eg:[['යන්න එපා','yanna epaa','do not go!'],['කන්න කන්න','kanna kanna','eat, eat!']]},
{t:'mc',q:'යන්න එපා means…',d:'යන්න එපා',r:'yanna epaa',o:['do not go!','go away!','I do not want to go','gone already'],a:0},
{t:'wb',q:'Say: look at this! — start මේක',a:['මේක','බලන්න'],pool:['මේක','බලන්න','කියන්න']},
{t:'mc',q:'Which command have you known since the kadē?',o:['දෙන්න','ඉන්න','බලන්න','කියන්න'],a:0}]},
{id:'si_nna_2',title:'Hear them',step:'recognize',meta:'Which command?',vocab:[],ex:[
{t:'li',q:'Listen — which command?',say:'එන්න',o:['එන්න','ඉන්න','යන්න','කන්න'],a:0},
{t:'li',q:'Listen — which command?',say:'බලන්න',o:['බලන්න','කියන්න','එන්න','ඉන්න'],a:0},
{t:'mc',q:'Which means "tell me / say it"?',o:['කියන්න','බලන්න','කන්න','ඉන්න'],a:0},
{t:'mc',q:'A host says කන්න කන්න! They mean…',o:['eat, please eat!','stop eating','pay first','cook with me'],a:0},
{t:'li',q:'Listen — which command?',say:'ඉන්න',o:['ඉන්න','එන්න','ඉන්නවා','යන්න'],a:0},
{t:'mc',q:'Negative command = -න්න + …',o:['එපා','නෑ','බෑ','නෙමෙයි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'යන්න එපා',o:['යන්න එපා','එන්න එපා','යන්න','මට එපා'],a:0}]},
{id:'si_nna_3',title:'Build it',step:'build',meta:'Give kind orders',vocab:[],ex:[
{t:'match',q:'Match command and meaning',pairs:[['එන්න','come!'],['ඉන්න','wait!'],['බලන්න','look!'],['කියන්න','tell me!']]},
{t:'wb',q:'Say: come home!',a:['ගෙදර','එන්න'],pool:['ගෙදර','එන්න','යන්න']},
{t:'mc',q:'"Do not look!" =',o:['බලන්න එපා','බලන්න නෑ','බලන්නේ නෑ','එපා බලන්න'],a:0},
{t:'wb',q:'Say: wait a little!',a:['ටිකක්','ඉන්න'],pool:['ටිකක්','ඉන්න','එන්න']},
{t:'li',q:'Listen — which command?',say:'කන්න',o:['කන්න','කියන්න','එන්න','කනවා'],a:0},
{t:'mc',q:'ආයෙත් කියන්න would mean… (ආයෙත් = again, Zone 10 preview)',o:['say it again!','never say it','said already','ask me'],a:0}]},
{id:'si_nna_4',title:'Mix it',step:'mix',meta:'Commands in the wild',vocab:[],ex:[
{t:'mc',q:'Your friend is about to leave too early:',o:['යන්න එපා — ඉන්න!','යන්න යන්න','ගිහින් එන්නම්','එන්න එපා'],a:0},
{t:'wb',q:'Say: eat hoppers!',a:['ආප්ප','කන්න'],pool:['ආප්ප','කන්න','බලන්න']},
{t:'li',q:'Listen — which phrase?',say:'මෙතන ඉන්න',o:['මෙතන ඉන්න','මෙතන එන්න','ටිකක් ඉන්න','ඉන්න'],a:0},
{t:'mc',q:'ඉන්න vs ඉන්නවා:',o:['wait! vs is (staying)','is vs wait!','both commands','both statements'],a:0},
{t:'li',q:'Listen — which command?',say:'කියන්න',o:['කියන්න','කන්න','බලන්න','දෙන්න'],a:0},
{t:'match',q:'Match situation and command',pairs:[['guest at your door','එන්න එන්න!'],['food on the table','කන්න!'],['friend leaving early','යන්න එපා'],['show me something','බලන්න']]},
{t:'mc',q:'The -න්න shape works as…',o:['both "to do" and "please do"','only commands','only with පුළුවන්','past tense'],a:0}]},
{id:'si_nna_5',title:'Checkpoint',step:'checkpoint',meta:'Commands mastered?',vocab:[],ex:[
{t:'mc',q:'"Come!" =',o:['එන්න','යන්න','ඉන්න','එනවා'],a:0},
{t:'wb',q:'Say: do not go!',a:['යන්න','එපා'],pool:['යන්න','එපා','නෑ']},
{t:'li',q:'Listen — which command?',say:'එන්න',o:['එන්න','ඉන්න','කන්න','එන්නම්'],a:0},
{t:'mc',q:'"Look!" =',o:['බලන්න','කියන්න','බලනවා','බැලුවා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කන්න කන්න',o:['කන්න කන්න','කන්න','එන්න එන්න','යන්න එපා'],a:0},
{t:'match',q:'Match command and meaning',pairs:[['එන්න','come!'],['යන්න එපා','do not go!'],['ඉන්න','wait!'],['කන්න','eat!']]}]},

/* --- Topic 49: want to DO & let's --- */
{id:'si_want2',title:'Want to do & let’s',step:'learn',meta:'මට යන්න ඕනැ … අපි යමු!',vocab:[['මට යන්න ඕනැ','mata yanna oonae','I want to go'],['මට කන්න ඕනැ','mata kanna oonae','I want to eat'],['යමු','yamu','let’s go'],['කමු','kamu','let’s eat'],['අපි ගමට යමු','api gamata yamu','let’s go to the village']],ex:[
{t:'note',tag:'Want to DO',q:'-න්න + ඕනැ',body:'<p>Zone 3 gave you <span class="deva">මට තේ ඕනැ</span> — I want tea. Add the <b>-න්න</b> form and you can want ACTIONS: <span class="deva">මට යන්න ඕනැ</span> <b>mata yanna oonae</b> — I want to go · <span class="deva">මට කන්න ඕනැ</span> — I want to eat.</p><p>The refusal works too: <span class="deva">මට යන්න එපා</span>? Better: <span class="deva">මට යන්න බෑ</span> or plain <span class="deva">මට එපා</span>.</p>',eg:[['මට යන්න ඕනැ','mata yanna oonae','I want to go'],['මට කන්න ඕනැ','mata kanna oonae','I want to eat'],['මට ගෙදර යන්න ඕනැ','mata gedhara yanna oonae','I want to go home']]},
{t:'mc',q:'මට යන්න ඕනැ means…',d:'මට යන්න ඕනැ',r:'mata yanna oonae',o:['I want to go','I can go','go away','I went'],a:0},
{t:'mc',q:'"I want to eat hoppers" =',o:['මට ආප්ප කන්න ඕනැ','මට ආප්ප ඕනැ කන්න','මම ආප්ප කනවා','මට ආප්ප පුළුවන්'],a:0},
{t:'note',tag:'Let’s!',q:'-මු = together',body:'<p>Swap -නවා for <b>-මු</b> and you invite everyone along: <span class="deva">යමු</span> <b>yamu</b> — let’s go! · <span class="deva">කමු</span> <b>kamu</b> — let’s eat! · <span class="deva">බලමු</span> — let’s see!</p><p><span class="deva">අපි ගමට යමු</span> — let’s go to the village. The friendliest verb ending in the language.</p>',eg:[['යමු','yamu','let’s go!'],['කමු','kamu','let’s eat!'],['අපි ගමට යමු','api gamata yamu','let’s go to the village']]},
{t:'mc',q:'What does යමු mean?',d:'යමු',r:'yamu',o:['let’s go','go!','I go','went'],a:0},
{t:'wb',q:'Say: let’s go to the village',a:['අපි','ගමට','යමු'],pool:['අපි','ගමට','යමු','යන්න']},
{t:'mc',q:'Food is ready. You call the family:',o:['කමු කමු!','කන්න එපා','කෑවා','කන්නේ නෑ'],a:0}]},
{id:'si_want2_2',title:'Hear it',step:'recognize',meta:'Wants & lets',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'මට යන්න ඕනැ',o:['මට යන්න ඕනැ','මට කන්න ඕනැ','මට යන්න බෑ','යමු'],a:0},
{t:'li',q:'Listen — which word?',say:'යමු',o:['යමු','කමු','යන්න','යනවා'],a:0},
{t:'mc',q:'Which means "let’s eat"?',o:['කමු','කන්න','කනවා','කාලා'],a:0},
{t:'mc',q:'මට ගෙදර යන්න ඕනැ means…',d:'මට ගෙදර යන්න ඕනැ',r:'mata gedhara yanna oonae',o:['I want to go home','I can go home','go home!','I went home'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අපි ගමට යමු',o:['අපි ගමට යමු','මට ගමට යන්න ඕනැ','අපි ගමට යනවා','ගමට යන්න'],a:0},
{t:'mc',q:'The -මු ending means…',o:['let us — together','I alone','you must','maybe'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට කන්න ඕනැ',o:['මට කන්න ඕනැ','මට යන්න ඕනැ','කමු','මට බත් ඕනැ'],a:0}]},
{id:'si_want2_3',title:'Build it',step:'build',meta:'Plans & invitations',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['මට යන්න ඕනැ','I want to go'],['යමු','let’s go'],['කමු','let’s eat'],['මට කන්න ඕනැ','I want to eat']]},
{t:'wb',q:'Say: I want to go home',a:['මට','ගෙදර','යන්න','ඕනැ'],pool:['මට','ගෙදර','යන්න','ඕනැ','යමු']},
{t:'mc',q:'"Let’s see!" (බලනවා → ?)',o:['බලමු','බලන්න','බැලුවා','බලනවද'],a:0},
{t:'wb',q:'Invite: let’s drink tea',a:['තේ','බොමු'],pool:['තේ','බොමු','බොන්න']},
{t:'li',q:'Listen — which word?',say:'කමු',o:['කමු','යමු','කන්න','කනවා'],a:0},
{t:'mc',q:'Which pattern is ඕනැ using with යන්න?',o:['dative subject — මට','plain subject — මම','possession — මගේ','question — ද'],a:0}]},
{id:'si_want2_4',title:'Mix it',step:'mix',meta:'Making plans together',vocab:[],ex:[
{t:'mc',q:'Friend: අපි කඩේට යමු! You are tired:',o:['මට බෑ — මට මහන්සියි','යමු!','මට යන්න ඕනැ','පුළුවන්'],a:0},
{t:'wb',q:'Say: I want to drink water',a:['මට','වතුර','බොන්න','ඕනැ'],pool:['මට','වතුර','බොන්න','ඕනැ','බොමු']},
{t:'li',q:'Listen — which phrase?',say:'අපි යමු',o:['අපි යමු','අපි කමු','යමු','අපි යනවා'],a:0},
{t:'mc',q:'යන්න ඕනැ vs යන්න පුළුවන්:',o:['want to go vs can go','can go vs want to go','both want','both can'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට ගෙදර යන්න ඕනැ',o:['මට ගෙදර යන්න ඕනැ','මට ගමට යන්න ඕනැ','අපි ගෙදර යමු','මට යන්න බෑ'],a:0},
{t:'match',q:'Match invitation and meaning',pairs:[['යමු','let’s go'],['කමු','let’s eat'],['බොමු','let’s drink'],['බලමු','let’s see']]},
{t:'mc',q:'Zone 7 complete! You can now speak about…',o:['past, done, can, commands & wishes','only the present','only questions','only food'],a:0}]},
{id:'si_want2_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 7 complete?',vocab:[],ex:[
{t:'mc',q:'"I want to go" =',o:['මට යන්න ඕනැ','මට යන්න පුළුවන්','මම යනවා','යමු'],a:0},
{t:'wb',q:'Invite: let’s eat hoppers',a:['ආප්ප','කමු'],pool:['ආප්ප','කමු','කන්න']},
{t:'li',q:'Listen — which phrase?',say:'යමු',o:['යමු','කමු','යන්න','ඕනැ'],a:0},
{t:'mc',q:'"Let’s go home" =',o:['අපි ගෙදර යමු','මට ගෙදර යන්න ඕනැ','ගෙදර යන්න','අපි ගෙදර ගියා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට කන්න ඕනැ',o:['මට කන්න ඕනැ','මට යන්න ඕනැ','කමු','මට ඕනැ'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මට යන්න ඕනැ','I want to go'],['මට යන්න බෑ','I cannot go'],['යන්න එපා','do not go!'],['යමු','let’s go!']]}]},

/* ===================== ZONE 8 · OUT & ABOUT ===================== */
/* --- Topic 50: rides --- */
{id:'si_ride',title:'Getting around',step:'learn',meta:'කෝච්චිය ත්‍රීවීල් එක පයින්',vocab:[['කෝච්චිය','kochchiya','train'],['ත්‍රීවීල් එක','thriiwiil eka','the three-wheeler'],['පයින්','payin','on foot'],['බස් ස්ටෑන්ඩ් එක','bas staend eka','the bus stand'],['මම කෝච්චියේ යනවා','mama kochchiyee yanawaa','I go by train']],ex:[
{t:'note',tag:'Wheels of Lanka',q:'කෝච්චිය & ත්‍රීවීල් එක',body:'<p><span class="deva">කෝච්චිය</span> <b>kochchiya</b> = the train — the coast line to Galle hugs the ocean. <span class="deva">ත්‍රීවීල් එක</span> <b>thriiwiil eka</b> = the three-wheeler, king of short trips (your loanword-<span class="deva">එක</span> pattern again).</p><p>By train: <span class="deva">කෝච්චියේ</span> — same -ේ trick as <span class="deva">බස් එකේ</span>.</p>',eg:[['කෝච්චිය','kochchiya','train'],['ත්‍රීවීල් එක','thriiwiil eka','three-wheeler'],['මම කෝච්චියේ යනවා','mama kochchiyee yanawaa','I go by train']]},
{t:'mc',q:'What does කෝච්චිය mean?',d:'කෝච්චිය',r:'kochchiya',o:['train','bus','three-wheeler','boat'],a:0},
{t:'mc',q:'"The three-wheeler" =',o:['ත්‍රීවීල් එක','බස් එක','කාර් එක','කෝච්චිය'],a:0},
{t:'note',tag:'Feet & stands',q:'පයින් & බස් ස්ටෑන්ඩ් එක',body:'<p><span class="deva">පයින්</span> <b>payin</b> = on foot: <span class="deva">මම පයින් යනවා</span> — I walk (go on foot).</p><p><span class="deva">බස් ස්ටෑන්ඩ් එක</span> <b>bas staend eka</b> = the bus stand — three English words wearing a Sinhala <span class="deva">එක</span>. Ask: <span class="deva">බස් ස්ටෑන්ඩ් එක කොහෙද</span>?</p>',eg:[['පයින්','payin','on foot'],['මම පයින් යනවා','mama payin yanawaa','I walk'],['බස් ස්ටෑන්ඩ් එක කොහෙද','bas staend eka kohedha','where is the bus stand?']]},
{t:'mc',q:'මම පයින් යනවා means…',d:'මම පයින් යනවා',r:'mama payin yanawaa',o:['I go on foot','I go by bus','my feet hurt','I go fast'],a:0},
{t:'wb',q:'Ask: where is the bus stand?',a:['බස් ස්ටෑන්ඩ් එක','කොහෙද'],pool:['බස් ස්ටෑන්ඩ් එක','කොහෙද','කොහෙන්ද']},
{t:'mc',q:'"I went by train" =',o:['මම කෝච්චියේ ගියා','මම කෝච්චිය ගියා','මම කෝච්චියට ගියා','කෝච්චිය ආවා'],a:0}]},
{id:'si_ride_2',title:'Hear it',step:'recognize',meta:'Rides by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'කෝච්චිය',o:['කෝච්චිය','ත්‍රීවීල් එක','බස් එක','කාර් එක'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ත්‍රීවීල් එක',o:['ත්‍රීවීල් එක','බස් එක','කෝච්චිය','ටිකට් එක'],a:0},
{t:'mc',q:'Which means "on foot"?',o:['පයින්','පාර','පාට','පස්සේ'],a:0},
{t:'mc',q:'කෝච්චියේ has the same -ේ as…',o:['බස් එකේ — by bus','කඩේට — to the shop','මගේ — my','කොහෙද — where'],a:0},
{t:'li',q:'Listen — which word?',say:'පයින්',o:['පයින්','පාර','පස්සේ','පහ'],a:0},
{t:'mc',q:'Short hops around town usually take…',o:['ත්‍රීවීල් එක','කෝච්චිය','the plane','a boat'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම කෝච්චියේ යනවා',o:['මම කෝච්චියේ යනවා','මම බස් එකේ යනවා','මම පයින් යනවා','කෝච්චිය ආවා'],a:0}]},
{id:'si_ride_3',title:'Build it',step:'build',meta:'How will you go?',vocab:[],ex:[
{t:'match',q:'Match ride and meaning',pairs:[['කෝච්චිය','train'],['ත්‍රීවීල් එක','three-wheeler'],['බස් එක','bus'],['පයින්','on foot']]},
{t:'wb',q:'Say: I go to Colombo by train — Colombo = කොළඹ',a:['මම','කෝච්චියේ','කොළඹට','යනවා'],pool:['මම','කෝච්චියේ','කොළඹට','යනවා','පයින්'],},
{t:'mc',q:'"We went by three-wheeler" =',o:['අපි ත්‍රීවීල් එකේ ගියා','අපි ත්‍රීවීල් එක ගියා','අපි ත්‍රීවීල් එකට ආවා','ත්‍රීවීල් එක යනවා'],a:0},
{t:'wb',q:'Say: I walk to school',a:['මම','පයින්','ඉස්කෝලේට','යනවා'],pool:['මම','පයින්','ඉස්කෝලේට','යනවා','බස් එකේ']},
{t:'li',q:'Listen — which phrase?',say:'බස් ස්ටෑන්ඩ් එක',o:['බස් ස්ටෑන්ඩ් එක','බස් එක','ත්‍රීවීල් එක','ස්ටෑන්ඩ් එක'],a:0},
{t:'mc',q:'The Galle train is famous because…',o:['the line hugs the ocean','it is the fastest','it is underground','it is free'],a:0}]},
{id:'si_ride_4',title:'Mix it',step:'mix',meta:'Trips & pasts',vocab:[],ex:[
{t:'mc',q:'මම ඊයේ කෝච්චියේ කොළඹට ගියා means…',d:'මම ඊයේ කෝච්චියේ කොළඹට ගියා',r:'mama iiyee kochchiyee Kolambata giyaa',o:['I went to Colombo by train yesterday','I go to Colombo daily','the train to Colombo left','I will go to Colombo'],a:0},
{t:'wb',q:'Ask: can we go by three-wheeler?',a:['අපිට','ත්‍රීවීල් එකේ','යන්න','පුළුවන්ද'],pool:['අපිට','ත්‍රීවීල් එකේ','යන්න','පුළුවන්ද','යමු']},
{t:'li',q:'Listen — which phrase?',say:'මම පයින් යනවා',o:['මම පයින් යනවා','මම පයින් ගියා','මම බස් එකේ යනවා','පයින් යමු'],a:0},
{t:'mc',q:'Rain is coming and it is far. Best line:',o:['ත්‍රීවීල් එකේ යමු','පයින් යමු','මෙතන ඉන්න','කෝච්චිය එපා'],a:0},
{t:'li',q:'Listen — which word?',say:'කොළඹ',o:['කොළඹ','කොහෙද','කොළ','ගම'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['කෝච්චියේ','by train'],['පයින්','on foot'],['ත්‍රීවීල් එකේ','by three-wheeler'],['කොළඹට','to Colombo']]},
{t:'mc',q:'බස් ස්ටෑන්ඩ් එක is built from…',o:['English words + Sinhala එක','pure old Sinhala','Tamil + Sinhala','Portuguese + එක'],a:0}]},
{id:'si_ride_5',title:'Checkpoint',step:'checkpoint',meta:'Rides mastered?',vocab:[],ex:[
{t:'mc',q:'"Train" =',o:['කෝච්චිය','බස් එක','කාර් එක','ත්‍රීවීල් එක'],a:0},
{t:'wb',q:'Say: I go by train',a:['මම','කෝච්චියේ','යනවා'],pool:['මම','කෝච්චියේ','යනවා','කෝච්චිය']},
{t:'li',q:'Listen — which phrase?',say:'ත්‍රීවීල් එකේ',o:['ත්‍රීවීල් එකේ','ත්‍රීවීල් එක','බස් එකේ','කෝච්චියේ'],a:0},
{t:'mc',q:'"On foot" =',o:['පයින්','පාරෙන්','පස්සේ','ළඟ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'බස් ස්ටෑන්ඩ් එක කොහෙද',o:['බස් ස්ටෑන්ඩ් එක කොහෙද','කඩේ කොහෙද','බස් එක කොහෙද','ඉස්කෝලේ කොහෙද'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['කෝච්චිය','train'],['පයින්','on foot'],['කොළඹ','Colombo'],['බස් ස්ටෑන්ඩ් එක','bus stand']]}]},

/* --- Topic 51: directions --- */
{id:'si_dir',title:'Directions',step:'learn',meta:'වමට දකුණට කෙළින්ම — the tuk-tuk toolkit',vocab:[['වමට','wamata','to the left'],['දකුණට','dhakunata','to the right'],['කෙළින්ම','kelinma','straight ahead'],['නවත්තන්න','nawaththanna','stop! (please stop)'],['මෙතන','methana','here'],['මෙතන නවත්තන්න','methana nawaththanna','stop here please']],ex:[
{t:'note',tag:'Left & right',q:'වමට · දකුණට · කෙළින්ම',body:'<p>Steer any ride with three words: <span class="deva">වමට</span> <b>wamata</b> left · <span class="deva">දකුණට</span> <b>dhakunata</b> right · <span class="deva">කෙළින්ම</span> <b>kelinma</b> straight ahead.</p><p>Spot the -ට? Left and right are literally "TO the left, TO the right".</p>',eg:[['වමට','wamata','to the left'],['දකුණට','dhakunata','to the right'],['කෙළින්ම','kelinma','straight ahead']]},
{t:'mc',q:'What does වමට mean?',d:'වමට',r:'wamata',o:['to the left','to the right','straight','stop'],a:0},
{t:'mc',q:'"Straight ahead" =',o:['කෙළින්ම','වමට','දකුණට','මෙතන'],a:0},
{t:'note',tag:'The magic stop',q:'මෙතන නවත්තන්න',body:'<p>The phrase every three-wheeler passenger needs: <span class="deva">මෙතන නවත්තන්න</span> <b>methana nawaththanna</b> — stop here, please! (<span class="deva">මෙතන</span> = here — the place-cousin of <span class="deva">මේක</span>; <span class="deva">නවත්තන්න</span> = your -න්න command.)</p>',eg:[['මෙතන','methana','here'],['නවත්තන්න','nawaththanna','please stop'],['මෙතන නවත්තන්න','methana nawaththanna','stop here please']]},
{t:'mc',q:'මෙතන නවත්තන්න means…',d:'මෙතන නවත්තන්න',r:'methana nawaththanna',o:['stop here please','go faster','turn around','wait for me'],a:0},
{t:'wb',q:'Tell the driver: stop here',a:['මෙතන','නවත්තන්න'],pool:['මෙතන','නවත්තන්න','වමට']},
{t:'mc',q:'නවත්තන්න ends in -න්න because it is…',o:['a polite command','past tense','a question','a noun'],a:0}]},
{id:'si_dir_2',title:'Hear them',step:'recognize',meta:'Which way?',vocab:[],ex:[
{t:'li',q:'Listen — which direction?',say:'වමට',o:['වමට','දකුණට','කෙළින්ම','මෙතන'],a:0},
{t:'li',q:'Listen — which direction?',say:'කෙළින්ම',o:['කෙළින්ම','වමට','දකුණට','නවත්තන්න'],a:0},
{t:'mc',q:'Which means "to the right"?',o:['දකුණට','වමට','කෙළින්ම','ළඟට'],a:0},
{t:'mc',q:'The -ට in වමට / දකුණට is…',o:['your old friend "to"','a plural','past tense','a question'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මෙතන නවත්තන්න',o:['මෙතන නවත්තන්න','නවත්තන්න','මෙතන ඉන්න','වමට යන්න'],a:0},
{t:'mc',q:'මෙතන is the place-cousin of…',o:['මේක','ඕක','ඒක','අරක'],a:0},
{t:'li',q:'Listen — which direction?',say:'දකුණට',o:['දකුණට','වමට','දුර','දෙකට'],a:0}]},
{id:'si_dir_3',title:'Build it',step:'build',meta:'Guide the driver',vocab:[],ex:[
{t:'match',q:'Match direction and meaning',pairs:[['වමට','left'],['දකුණට','right'],['කෙළින්ම','straight'],['නවත්තන්න','stop!']]},
{t:'wb',q:'Say: go to the left',a:['වමට','යන්න'],pool:['වමට','යන්න','දකුණට']},
{t:'mc',q:'"Go straight, then stop here" — order the pieces:',o:['කෙළින්ම යන්න — මෙතන නවත්තන්න','මෙතන යන්න — කෙළින්ම නවත්තන්න','නවත්තන්න — කෙළින්ම','වමට — දකුණට'],a:0},
{t:'wb',q:'Say: turn right — literally go to the right',a:['දකුණට','යන්න'],pool:['දකුණට','යන්න','වමට']},
{t:'li',q:'Listen — which word?',say:'නවත්තන්න',o:['නවත්තන්න','නටන්න','එන්න','ඉන්න'],a:0},
{t:'mc',q:'කඩේ ළඟ නවත්තන්න means…',o:['stop near the shop','stop inside the shop','the shop is closed','go past the shop'],a:0}]},
{id:'si_dir_4',title:'Mix it',step:'mix',meta:'A three-wheeler ride',vocab:[],ex:[
{t:'mc',q:'The driver asks කොහෙටද? — to the station:',o:['ස්ටේෂන් එකට','ස්ටේෂන් එකේ','ස්ටේෂන් එක','මෙතන'],a:0},
{t:'wb',q:'Direct: go straight ahead',a:['කෙළින්ම','යන්න'],pool:['කෙළින්ම','යන්න','නවත්තන්න']},
{t:'li',q:'Listen — which phrase?',say:'වමට යන්න',o:['වමට යන්න','දකුණට යන්න','කෙළින්ම යන්න','වමට'],a:0},
{t:'mc',q:'Your stop is coming up:',o:['මෙතන නවත්තන්න','කෙළින්ම යන්න','දකුණට','ගිහින් එන්නම්'],a:0},
{t:'li',q:'Listen — which word?',say:'මෙතන',o:['මෙතන','මේක','මට','මාසය'],a:0},
{t:'match',q:'Match instruction and meaning',pairs:[['වමට යන්න','turn left'],['දකුණට යන්න','turn right'],['කෙළින්ම යන්න','go straight'],['මෙතන නවත්තන්න','stop here']]},
{t:'mc',q:'Then you pay and say…',o:['ස්තූතියි','සමාවෙන්න','ඕනැ','එපා'],a:0}]},
{id:'si_dir_5',title:'Checkpoint',step:'checkpoint',meta:'Directions mastered?',vocab:[],ex:[
{t:'mc',q:'"To the left" =',o:['වමට','දකුණට','කෙළින්ම','මෙතන'],a:0},
{t:'wb',q:'Say: stop here please',a:['මෙතන','නවත්තන්න'],pool:['මෙතන','නවත්තන්න','යන්න']},
{t:'li',q:'Listen — which direction?',say:'දකුණට',o:['දකුණට','වමට','කෙළින්ම','දෙකට'],a:0},
{t:'mc',q:'"Straight ahead" =',o:['කෙළින්ම','ළඟ','දුර','පයින්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කෙළින්ම යන්න',o:['කෙළින්ම යන්න','වමට යන්න','මෙතන නවත්තන්න','දකුණට යන්න'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['වමට','left'],['දකුණට','right'],['මෙතන','here'],['නවත්තන්න','stop!']]}]},

/* --- Topic 52: tickets --- */
{id:'si_tik',title:'Tickets & the train',step:'learn',meta:'කොළඹට ටිකට් එකක් දෙන්න',vocab:[['ටිකට් එක','tikat eka','the ticket'],['ස්ටේෂන් එක','steshan eka','the station'],['කොළඹ','Kolamba','Colombo'],['මට කොළඹට ටිකට් එකක් දෙන්න','mata Kolambata tikat ekak dhenna','one ticket to Colombo please'],['කෝච්චිය කීයටද','kochchiya kiiyatadha','at what time is the train?']],ex:[
{t:'note',tag:'One ticket please',q:'the ticket sentence',body:'<p>All your machinery clicks together at the counter: <span class="deva">මට කොළඹට ටිකට් එකක් දෙන්න</span> <b>mata Kolambata tikat ekak dhenna</b> — to me, to-Colombo, a ticket, please give!</p><p><span class="deva">ටිකට් එක</span>, <span class="deva">ස්ටේෂන් එක</span> — the loanword-<span class="deva">එක</span> squad grows.</p>',eg:[['ටිකට් එක','tikat eka','ticket'],['ස්ටේෂන් එක','steshan eka','station'],['මට කොළඹට ටිකට් එකක් දෙන්න','mata Kolambata tikat ekak dhenna','one ticket to Colombo please']]},
{t:'mc',q:'What does ටිකට් එක mean?',d:'ටිකට් එක',r:'tikat eka',o:['the ticket','the till','the queue','the token'],a:0},
{t:'mc',q:'"One ticket to Colombo please" =',o:['මට කොළඹට ටිකට් එකක් දෙන්න','මට ටිකට් කොළඹට එකක්','කොළඹ ටිකට් මට දෙන්න','ටිකට් එක කීයද'],a:0},
{t:'note',tag:'When does it leave?',q:'කීයටද returns',body:'<p>Your Zone 5 time-question runs the timetable: <span class="deva">කෝච්චිය කීයටද</span> <b>kochchiya kiiyatadha</b> — at what time is the train? Answer: <span class="deva">දෙකට</span> — at two!</p><p>And the price: <span class="deva">ටිකට් එක කීයද</span> — how much is the ticket?</p>',eg:[['කෝච්චිය කීයටද','kochchiya kiiyatadha','when is the train?'],['දෙකට','dhekata','at two'],['ටිකට් එක කීයද','tikat eka kiiyadha','how much is the ticket?']]},
{t:'mc',q:'කෝච්චිය කීයටද asks…',d:'කෝච්චිය කීයටද',r:'kochchiya kiiyatadha',o:['at what time is the train?','how much is the train?','where is the train?','is this the train?'],a:0},
{t:'wb',q:'Ask: how much is the ticket?',a:['ටිකට් එක','කීයද'],pool:['ටිකට් එක','කීයද','කීයටද']},
{t:'mc',q:'"Where is the station?" =',o:['ස්ටේෂන් එක කොහෙද','ස්ටේෂන් එක කීයද','ස්ටේෂන් එකට','ස්ටේෂන් එකේ'],a:0}]},
{id:'si_tik_2',title:'Hear it',step:'recognize',meta:'At the counter',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ටිකට් එක',o:['ටිකට් එක','ස්ටේෂන් එක','බස් එක','ටිකක්'],a:0},
{t:'li',q:'Listen — which word?',say:'කොළඹ',o:['කොළඹ','කොහොමද','ගම','කඩේ'],a:0},
{t:'mc',q:'Which asks the TIME of the train?',o:['කෝච්චිය කීයටද','කෝච්චිය කීයද','කෝච්චිය කොහෙද','කෝච්චියද'],a:0},
{t:'mc',q:'ටිකට් එකක් — the -ක් makes it…',o:['"a / one" ticket','the ticket','tickets','no ticket'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට කොළඹට ටිකට් එකක් දෙන්න',o:['මට කොළඹට ටිකට් එකක් දෙන්න','මට තේ එකක් දෙන්න','ටිකට් එක කීයද','කෝච්චිය කීයටද'],a:0},
{t:'mc',q:'The answer to කීයටද sounds like…',o:['තුනට — at three','තුනයි — it is three','තුනක් — three of them','තිහ — thirty'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කෝච්චිය කීයටද',o:['කෝච්චිය කීයටද','ටිකට් එක කීයද','කෝච්චිය කොහෙද','බස් එක කීයටද'],a:0}]},
{id:'si_tik_3',title:'Build it',step:'build',meta:'Buy your ticket',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ටිකට් එක','the ticket'],['ස්ටේෂන් එක','the station'],['කීයටද','at what time?'],['කීයද','how much?']]},
{t:'wb',q:'Order: one ticket to Colombo please',a:['මට','කොළඹට','ටිකට්','එකක්','දෙන්න'],pool:['මට','කොළඹට','ටිකට්','එකක්','දෙන්න','එකේ']},
{t:'mc',q:'"The train went" =',o:['කෝච්චිය ගියා','කෝච්චිය යනවා','කෝච්චිය ආවා','කෝච්චිය ගිහින්'],a:0},
{t:'wb',q:'Ask: at what time is the bus?',a:['බස් එක','කීයටද'],pool:['බස් එක','කීයටද','කීයද']},
{t:'li',q:'Listen — which phrase?',say:'ස්ටේෂන් එක කොහෙද',o:['ස්ටේෂන් එක කොහෙද','ටිකට් එක කීයද','ස්ටේෂන් එකට','බස් ස්ටෑන්ඩ් එක කොහෙද'],a:0},
{t:'mc',q:'Two tickets? Use your counting pattern:',o:['ටිකට් දෙකක්','දෙක ටිකට්','ටිකට් දෙක','දෙකයි ටිකට්'],a:0}]},
{id:'si_tik_4',title:'Mix it',step:'mix',meta:'Catch that train',vocab:[],ex:[
{t:'mc',q:'කෝච්චිය දෙකට එනවා. It is 1:30 now. You have…',o:['half an hour','two hours','no time','the wrong station'],a:0},
{t:'wb',q:'Ask: did the train go?',a:['කෝච්චිය','ගියාද'],pool:['කෝච්චිය','ගියාද','ගියා']},
{t:'li',q:'Listen — which phrase?',say:'ටිකට් දෙකක් දෙන්න',o:['ටිකට් දෙකක් දෙන්න','ටිකට් එකක් දෙන්න','තේ දෙකක් දෙන්න','ටිකට් එක කීයද'],a:0},
{t:'mc',q:'The clerk says සීයයි. The ticket costs…',o:['100 rupees','50 rupees','7 rupees','nothing'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කෝච්චිය ආවා',o:['කෝච්චිය ආවා','කෝච්චිය ගියා','කෝච්චිය එනවා','බස් එක ආවා'],a:0},
{t:'match',q:'Match line and moment',pairs:[['ටිකට් එකක් දෙන්න','at the counter'],['කීයටද','checking the time'],['කෝච්චිය ආවා','on the platform'],['මෙතන නවත්තන්න','in the three-wheeler']]},
{t:'mc',q:'You missed it! කෝච්චිය…',o:['ගිහිල්ලා','ඇවිල්ලා','එනවා','තියෙනවා'],a:0}]},
{id:'si_tik_5',title:'Checkpoint',step:'checkpoint',meta:'Tickets mastered?',vocab:[],ex:[
{t:'mc',q:'"The ticket" =',o:['ටිකට් එක','ටිකක්','ස්ටේෂන් එක','තිකට'],a:0},
{t:'wb',q:'Order: one ticket to Colombo please',a:['මට','කොළඹට','ටිකට්','එකක්','දෙන්න'],pool:['මට','කොළඹට','ටිකට්','එකක්','දෙන්න','කීයද']},
{t:'li',q:'Listen — which phrase?',say:'කෝච්චිය කීයටද',o:['කෝච්චිය කීයටද','කෝච්චිය කීයද','බස් එක කීයටද','කීයටද'],a:0},
{t:'mc',q:'"Where is the station?" =',o:['ස්ටේෂන් එක කොහෙද','ස්ටේෂන් එක කීයටද','ස්ටේෂන් එකක්','ස්ටේෂන් එකේ යනවා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ටිකට් එක',o:['ටිකට් එක','ටිකට් එකක්','ටිකක්','ස්ටේෂන් එක'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ටිකට් එකක්','a ticket'],['ස්ටේෂන් එක','the station'],['කොළඹට','to Colombo'],['කීයටද','at what time?']]}]},

/* --- Topic 53: hotel --- */
{id:'si_hotel',title:'A place to stay',step:'learn',meta:'කාමරයක් තියෙනවද?',vocab:[['හෝටලේ','hootalee','hotel (often: eatery!)'],['කාමරය','kaamaraya','room'],['යතුර','yathura','key'],['කාමරයක් තියෙනවද','kaamarayak thiyenawadha','is there a room?'],['දවසකට කීයද','dhawasakata kiiyadha','how much per day?']],ex:[
{t:'note',tag:'A funny false friend',q:'හෝටලේ',body:'<p><span class="deva">හෝටලේ</span> <b>hootalee</b> means hotel — but along any Lankan road it usually means a little <b>eatery</b>! Rice-and-curry, short eats, milk tea.</p><p>For a bed, ask about the <span class="deva">කාමරය</span> <b>kaamaraya</b> — room: <span class="deva">කාමරයක් තියෙනවද</span> — is there a room?</p>',eg:[['හෝටලේ','hootalee','hotel / eatery'],['කාමරය','kaamaraya','room'],['කාමරයක් තියෙනවද','kaamarayak thiyenawadha','is there a room?']]},
{t:'mc',q:'Roadside හෝටලේ usually serves…',d:'හෝටලේ',r:'hootalee',o:['rice, curry and tea','only beds','coffee only','nothing — it is a bank'],a:0},
{t:'mc',q:'"Is there a room?" =',o:['කාමරයක් තියෙනවද','කාමරය කොහෙද','කාමරයක් ඕනැ','කාමරේ ඉන්නවද'],a:0},
{t:'note',tag:'Price & key',q:'දවසකට කීයද · යතුර',body:'<p>Ask the rate per day: <span class="deva">දවසකට කීයද</span> <b>dhawasakata kiiyadha</b> — for a day, how much? (<span class="deva">දවස</span> day + -ක් + -ට!)</p><p>Then collect the <span class="deva">යතුර</span> <b>yathura</b> — key: <span class="deva">යතුර දෙන්න</span>.</p>',eg:[['දවසකට කීයද','dhawasakata kiiyadha','how much per day?'],['යතුර','yathura','key'],['යතුර දෙන්න','yathura dhenna','the key please']]},
{t:'mc',q:'දවසකට කීයද asks…',d:'දවසකට කීයද',r:'dhawasakata kiiyadha',o:['how much per day?','what day is it?','how many days?','when do you open?'],a:0},
{t:'wb',q:'Ask: is there a room?',a:['කාමරයක්','තියෙනවද'],pool:['කාමරයක්','තියෙනවද','ඉන්නවද']},
{t:'mc',q:'What does යතුර mean?',d:'යතුර',r:'yathura',o:['key','door','lock','bell'],a:0}]},
{id:'si_hotel_2',title:'Hear it',step:'recognize',meta:'Checking in',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'කාමරය',o:['කාමරය','යතුර','හෝටලේ','කඩේ'],a:0},
{t:'li',q:'Listen — which word?',say:'යතුර',o:['යතුර','යනවා','යමු','කාමරය'],a:0},
{t:'mc',q:'Which asks "is there a room?"',o:['කාමරයක් තියෙනවද','කාමරය කීයද','කාමරයක් දෙන්න','කාමරේ කවුද'],a:0},
{t:'mc',q:'දවසකට breaks into…',o:['දවස + ක් + ට','දවස + කට','දව + සකට','it is one word'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කාමරයක් තියෙනවද',o:['කාමරයක් තියෙනවද','කාමරය කොහෙද','දවසකට කීයද','යතුර දෙන්න'],a:0},
{t:'mc',q:'You are hungry on the road. Look for…',o:['a හෝටලේ','a ස්ටේෂන් එක','a යතුර','a කාමරය'],a:0},
{t:'li',q:'Listen — which phrase?',say:'දවසකට කීයද',o:['දවසකට කීයද','මේක කීයද','කීයටද','දවස කීයද'],a:0}]},
{id:'si_hotel_3',title:'Build it',step:'build',meta:'Get the room',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['හෝටලේ','hotel / eatery'],['කාමරය','room'],['යතුර','key'],['දවසකට','per day']]},
{t:'wb',q:'Ask: how much per day?',a:['දවසකට','කීයද'],pool:['දවසකට','කීයද','කීයටද']},
{t:'mc',q:'"The key please" =',o:['යතුර දෙන්න','යතුර ගන්න','යතුරක් තියෙනවද','යතුර කොහෙද'],a:0},
{t:'wb',q:'Say: the room is big',a:['කාමරය','ලොකුයි'],pool:['කාමරය','ලොකුයි','ලොකු']},
{t:'li',q:'Listen — which phrase?',say:'යතුර දෙන්න',o:['යතුර දෙන්න','යතුර ගන්න','තේ එකක් දෙන්න','යතුර කොහෙද'],a:0},
{t:'mc',q:'ගණන් වැඩියි! Your Zone 5 move:',o:['ටිකක් අඩු කරන්න','මම මේක ගන්නවා','හරි හරි','දෙන්න'],a:0}]},
{id:'si_hotel_4',title:'Mix it',step:'mix',meta:'A night in the hills',vocab:[],ex:[
{t:'mc',q:'කාමරයක් තියෙනවද? — තියෙනවා! Now ask the rate:',o:['දවසකට කීයද','කීයටද','යතුර දෙන්න','කාමරය කොහෙද'],a:0},
{t:'wb',q:'Say: I want a room — a room = කාමරයක්',a:['මට','කාමරයක්','ඕනැ'],pool:['මට','කාමරයක්','ඕනැ','තියෙනවා']},
{t:'li',q:'Listen — which phrase?',say:'කාමරය ලස්සනයි',o:['කාමරය ලස්සනයි','කාමරය ලොකුයි','කාමරයක් තියෙනවද','ලස්සනයි'],a:0},
{t:'mc',q:'It is cold up here at night, so pack for…',o:['සීතලයි','රස්නෙයි','වැස්ස only','the beach'],a:0},
{t:'li',q:'Listen — which word?',say:'හෝටලේ',o:['හෝටලේ','ගෙදර','කඩේ','කාමරය'],a:0},
{t:'match',q:'Match line and moment',pairs:[['කාමරයක් තියෙනවද','asking for a room'],['දවසකට කීයද','asking the rate'],['යතුර දෙන්න','taking the key'],['කාමරය ලස්සනයි','the happy verdict']]},
{t:'mc',q:'Leaving next morning, warmly:',o:['ගිහින් එන්නම්','යන්න එපා','ආයුබෝවන් only','මට බෑ'],a:0}]},
{id:'si_hotel_5',title:'Checkpoint',step:'checkpoint',meta:'Hotel mastered?',vocab:[],ex:[
{t:'mc',q:'"Room" =',o:['කාමරය','යතුර','හෝටලේ','ගෙදර'],a:0},
{t:'wb',q:'Ask: is there a room?',a:['කාමරයක්','තියෙනවද'],pool:['කාමරයක්','තියෙනවද','ඕනැද']},
{t:'li',q:'Listen — which word?',say:'යතුර',o:['යතුර','කාමරය','යමු','දවස'],a:0},
{t:'mc',q:'"How much per day?" =',o:['දවසකට කීයද','දවස කීයද','කීයටද','දවසක් කීයක්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කාමරයක් තියෙනවද',o:['කාමරයක් තියෙනවද','කාමරය ලොකුයි','යතුර දෙන්න','දවසකට කීයද'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['කාමරය','room'],['යතුර','key'],['හෝටලේ','hotel / eatery'],['දවසකට කීයද','how much per day?']]}]},

/* --- Topic 54: months & the year --- */
{id:'si_month',title:'Months & the year',step:'learn',meta:'ජනවාරි … දෙසැම්බර් + අලුත් අවුරුද්ද',vocab:[['මාසය','maasaya','month'],['අවුරුද්ද','awurudhdha','year'],['ජනවාරි','janawaari','January'],['අප්‍රේල්','apreel','April'],['අගෝස්තු','agoosthu','August'],['දෙසැම්බර්','dhesaembar','December'],['අලුත් අවුරුද්ද','aluth awurudhdha','the (April) new year']],ex:[
{t:'note',tag:'Borrowed months',q:'ජනවාරි to දෙසැම්බර්',body:'<p>Good news: the months are loanwords you almost know — <span class="deva">ජනවාරි, පෙබරවාරි, මාර්තු, අප්‍රේල්, මැයි, ජූනි, ජූලි, අගෝස්තු, සැප්තැම්බර්, ඔක්තෝබර්, නොවැම්බර්, දෙසැම්බර්</span>.</p><p><span class="deva">මාසය</span> <b>maasaya</b> = month · <span class="deva">අවුරුද්ද</span> <b>awurudhdha</b> = year.</p>',eg:[['ජනවාරි','janawaari','January'],['ජූලි','juuli','July'],['මාසය','maasaya','month'],['අවුරුද්ද','awurudhdha','year']]},
{t:'mc',q:'What does මාසය mean?',d:'මාසය',r:'maasaya',o:['month','year','week','season'],a:0},
{t:'mc',q:'"December" =',o:['දෙසැම්බර්','දොළහ','දෙකක්','සැප්තැම්බර්'],a:0},
{t:'note',tag:'The April festival',q:'අලුත් අවුරුද්ද',body:'<p><span class="deva">අලුත් අවුරුද්ද</span> <b>aluth awurudhdha</b> — literally NEW YEAR (your Zone 6 word <span class="deva">අලුත්</span>!) — lands in <span class="deva">අප්‍රේල්</span>: the island’s biggest family holiday. Everyone travels <span class="deva">ගමට</span>, kitchens fill with sweets, games spill into the gardens.</p>',eg:[['අලුත් අවුරුද්ද','aluth awurudhdha','the new year (April)'],['අලුත් අවුරුද්ද අප්‍රේල් මාසයේ','aluth awurudhdha apreel maasayee','the new year is in April']]},
{t:'mc',q:'අලුත් අවුරුද්ද literally means…',d:'අලුත් අවුරුද්ද',r:'aluth awurudhdha',o:['new year','old year','April','holiday'],a:0},
{t:'wb',q:'Say: the new year is in the month of April',a:['අලුත් අවුරුද්ද','අප්‍රේල්','මාසයේ'],pool:['අලුත් අවුරුද්ද','අප්‍රේල්','මාසයේ','ජනවාරි']},
{t:'mc',q:'At අලුත් අවුරුද්ද, everyone travels…',o:['ගමට — to the family village','කොළඹට only','abroad','nowhere'],a:0}]},
{id:'si_month_2',title:'Hear them',step:'recognize',meta:'Months by ear',vocab:[],ex:[
{t:'li',q:'Listen — which month?',say:'ජනවාරි',o:['ජනවාරි','ජූලි','ජූනි','මැයි'],a:0},
{t:'li',q:'Listen — which month?',say:'අගෝස්තු',o:['අගෝස්තු','අප්‍රේල්','ඔක්තෝබර්','මාර්තු'],a:0},
{t:'mc',q:'Which is April?',o:['අප්‍රේල්','අගෝස්තු','මැයි','ජූනි'],a:0},
{t:'mc',q:'අවුරුද්ද is…',d:'අවුරුද්ද',r:'awurudhdha',o:['year','month','new','April'],a:0},
{t:'li',q:'Listen — which word?',say:'මාසය',o:['මාසය','මට','මෙතන','වයස'],a:0},
{t:'mc',q:'The months are easy because…',o:['they are loanwords','they are numbers','there are only six','they rhyme'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අලුත් අවුරුද්ද',o:['අලුත් අවුරුද්ද','අවුරුද්ද','අලුත් කඩේ','මාසය'],a:0}]},
{id:'si_month_3',title:'Build it',step:'build',meta:'Talk about the year',vocab:[],ex:[
{t:'match',q:'Match month and meaning',pairs:[['ජනවාරි','January'],['අප්‍රේල්','April'],['අගෝස්තු','August'],['දෙසැම්බර්','December']]},
{t:'wb',q:'Say: I am going to the village in April — in April = අප්‍රේල් මාසයේ',a:['මම','අප්‍රේල් මාසයේ','ගමට','යනවා'],pool:['මම','අප්‍රේල් මාසයේ','ගමට','යනවා','ජූලි']},
{t:'mc',q:'"This month" would use which pointer?',o:['මේ මාසයේ','ඒ මාසය','අර මාසය','ඕක මාසය'],a:0},
{t:'wb',q:'Say: the new year is in April',a:['අලුත් අවුරුද්ද','අප්‍රේල්','මාසයේ'],pool:['අලුත් අවුරුද්ද','අප්‍රේල්','මාසයේ','දෙසැම්බර්'],},
{t:'li',q:'Listen — which month?',say:'දෙසැම්බර්',o:['දෙසැම්බර්','සැප්තැම්බර්','නොවැම්බර්','ඔක්තෝබර්'],a:0},
{t:'mc',q:'මාසය vs සතිය vs දවස:',o:['month vs week vs day','day vs week vs month','week vs month vs day','year vs month vs week'],a:0}]},
{id:'si_month_4',title:'Mix it',step:'mix',meta:'The island year',vocab:[],ex:[
{t:'mc',q:'Sweets, village trips, garden games — the season is…',o:['අලුත් අවුරුද්ද','දෙසැම්බර් only','වැස්ස','හැට'],a:0},
{t:'wb',q:'Ask: are you going to the village for new year? — start ඔයා',a:['ඔයා','අලුත් අවුරුද්දට','ගමට','යනවද'],pool:['ඔයා','අලුත් අවුරුද්දට','ගමට','යනවද','ගියාද']},
{t:'li',q:'Listen — which month?',say:'අප්‍රේල්',o:['අප්‍රේල්','අගෝස්තු','මැයි','මාර්තු'],a:0},
{t:'mc',q:'මම ජූලි මාසයේ ලංකාවට ආවා means…',o:['I came to Sri Lanka in July','I go every July','July is hot in Lanka','I will come in July'],a:0},
{t:'li',q:'Listen — which word?',say:'අවුරුද්ද',o:['අවුරුද්ද','මාසය','සතිය','අලුත්'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['දවස','day'],['සතිය','week'],['මාසය','month'],['අවුරුද්ද','year']]},
{t:'mc',q:'අලුත් අවුරුද්ද reuses which Zone 6 word?',o:['අලුත් — new','ලොකු — big','පරණ — old','ලස්සන — beautiful'],a:0}]},
{id:'si_month_5',title:'Checkpoint',step:'checkpoint',meta:'Months mastered?',vocab:[],ex:[
{t:'mc',q:'"Month" =',o:['මාසය','අවුරුද්ද','සතිය','දවස'],a:0},
{t:'wb',q:'Say: the new year is in April',a:['අලුත් අවුරුද්ද','අප්‍රේල්','මාසයේ'],pool:['අලුත් අවුරුද්ද','අප්‍රේල්','මාසයේ','මාසය']},
{t:'li',q:'Listen — which month?',say:'ජූලි',o:['ජූලි','ජූනි','ජනවාරි','මැයි'],a:0},
{t:'mc',q:'"Year" =',o:['අවුරුද්ද','මාසය','අලුත්','දවස'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අලුත් අවුරුද්ද',o:['අලුත් අවුරුද්ද','අලුත් පොත','අවුරුද්ද','පරණ අවුරුද්ද'],a:0},
{t:'match',q:'Match month and meaning',pairs:[['ජනවාරි','January'],['මැයි','May'],['ඔක්තෝබර්','October'],['දෙසැම්බර්','December']]}]},

/* --- Topic 55: phone --- */
{id:'si_phone',title:'Phone & photos',step:'learn',meta:'ෆෝන් එක නම්බර් එක කෝල් එකක්',vocab:[['ෆෝන් එක','foon eka','the phone'],['නම්බර් එක','nambar eka','the number'],['කෝල් එකක් දෙන්න','kool ekak dhenna','give me a call'],['ෆොටෝ එකක්','fotoo ekak','a photo'],['ෆොටෝ එකක් ගන්න පුළුවන්ද','fotoo ekak ganna puluwandha','may I take a photo?']],ex:[
{t:'note',tag:'The එක squad again',q:'ෆෝන් · නම්බර් · කෝල්',body:'<p>Modern life rides the loanword pattern: <span class="deva">ෆෝන් එක</span> phone · <span class="deva">නම්බර් එක</span> number · and the lovely <span class="deva">කෝල් එකක් දෙන්න</span> <b>kool ekak dhenna</b> — GIVE me a call!</p><p><span class="deva">ඔයාගේ නම්බර් එක මොකක්ද</span> — what is your number?</p>',eg:[['ෆෝන් එක','foon eka','the phone'],['කෝල් එකක් දෙන්න','kool ekak dhenna','give me a call'],['ඔයාගේ නම්බර් එක මොකක්ද','oyaagee nambar eka mokakdha','what is your number?']]},
{t:'mc',q:'කෝල් එකක් දෙන්න means…',d:'කෝල් එකක් දෙන්න',r:'kool ekak dhenna',o:['give me a call','answer the phone','hang up','buy me a phone'],a:0},
{t:'mc',q:'"What is your number?" =',o:['ඔයාගේ නම්බර් එක මොකක්ද','ඔයාගේ නම මොකක්ද','නම්බර් එක කීයද','ෆෝන් එක කොහෙද'],a:0},
{t:'note',tag:'May I?',q:'ෆොටෝ එකක් ගන්න පුළුවන්ද',body:'<p>Photos take <span class="deva">ගන්නවා</span> — you TAKE them: <span class="deva">ෆොටෝ එකක් ගන්න පුළුවන්ද</span> <b>fotoo ekak ganna puluwandha</b> — may I take a photo?</p><p>Asking first is good manners anywhere — and it turns strangers into friends here.</p>',eg:[['ෆොටෝ එකක්','fotoo ekak','a photo'],['ෆොටෝ එකක් ගන්න පුළුවන්ද','fotoo ekak ganna puluwandha','may I take a photo?']]},
{t:'mc',q:'ෆොටෝ එකක් ගන්න පුළුවන්ද asks…',o:['may I take a photo?','can you send the photo?','is the photo good?','where is the camera?'],a:0},
{t:'wb',q:'Ask: may I take a photo?',a:['ෆොටෝ','එකක්','ගන්න','පුළුවන්ද'],pool:['ෆොටෝ','එකක්','ගන්න','පුළුවන්ද','දෙන්න']},
{t:'mc',q:'Photos pair with which verb?',o:['ගන්නවා — take','දෙනවා — give','කනවා — eat','බලනවා — look'],a:0}]},
{id:'si_phone_2',title:'Hear it',step:'recognize',meta:'Phone talk',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ෆෝන් එක',o:['ෆෝන් එක','ෆොටෝ එකක්','නම්බර් එක','කෝල් එකක්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කෝල් එකක් දෙන්න',o:['කෝල් එකක් දෙන්න','ෆොටෝ එකක් ගන්න','තේ එකක් දෙන්න','නම්බර් එක දෙන්න'],a:0},
{t:'mc',q:'Which is "the number"?',o:['නම්බර් එක','නම','නම්බර් එකක්','කෝල් එක'],a:0},
{t:'mc',q:'මගේ ෆෝන් එක නැති වුණා would mean… (නැති = lost, Zone 9!)',o:['my phone is lost','my phone is new','call my phone','my phone is old'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඔයාගේ නම්බර් එක මොකක්ද',o:['ඔයාගේ නම්බර් එක මොකක්ද','ඔයාගේ නම මොකක්ද','නම්බර් එක','කෝල් එකක් දෙන්න'],a:0},
{t:'mc',q:'Before photographing someone, ask…',o:['ෆොටෝ එකක් ගන්න පුළුවන්ද','කෝල් එකක් දෙන්න','මේක කීයද','ඉන්න'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ෆොටෝ එකක්',o:['ෆොටෝ එකක්','ෆෝන් එක','ටිකට් එකක්','ෆොටෝ'],a:0}]},
{id:'si_phone_3',title:'Build it',step:'build',meta:'Numbers & calls',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ෆෝන් එක','the phone'],['නම්බර් එක','the number'],['කෝල් එකක්','a call'],['ෆොටෝ එකක්','a photo']]},
{t:'wb',q:'Say: give me a call tomorrow',a:['හෙට','කෝල් එකක්','දෙන්න'],pool:['හෙට','කෝල් එකක්','දෙන්න','ගන්න']},
{t:'mc',q:'"Take a photo!" (command) =',o:['ෆොටෝ එකක් ගන්න','ෆොටෝ එකක් දෙන්න','ෆොටෝ ගත්තා','ෆොටෝ බලන්න'],a:0},
{t:'wb',q:'Ask: what is your number?',a:['ඔයාගේ','නම්බර් එක','මොකක්ද'],pool:['ඔයාගේ','නම්බර් එක','මොකක්ද','කීයද']},
{t:'li',q:'Listen — which phrase?',say:'නම්බර් එක',o:['නම්බර් එක','නම','ෆෝන් එක','අම්මා'],a:0},
{t:'mc',q:'The pattern under ALL of these words is…',o:['English loan + එක','pure Sinhala','numbers','the dative'],a:0}]},
{id:'si_phone_4',title:'Mix it',step:'mix',meta:'Staying in touch',vocab:[],ex:[
{t:'mc',q:'New friend at the kadē. To stay in touch:',o:['ඔයාගේ නම්බර් එක මොකක්ද','ඔයාගේ නම මොකක්ද','ඔයා කවුද','කෝල් එක කීයද'],a:0},
{t:'wb',q:'Promise: I will give a call tomorrow — I give tomorrow a call',a:['මම','හෙට','කෝල් එකක්','දෙනවා'],pool:['මම','හෙට','කෝල් එකක්','දෙනවා','දුන්නා']},
{t:'li',q:'Listen — which phrase?',say:'ෆොටෝ එකක් ගන්න පුළුවන්ද',o:['ෆොටෝ එකක් ගන්න පුළුවන්ද','ෆොටෝ එකක් ගන්න','කෝල් එකක් දෙන්න පුළුවන්ද','ෆොටෝ එකක් දෙන්න'],a:0},
{t:'mc',q:'They say පුළුවන් පුළුවන්! and smile. You may…',o:['take the photo','not take it','pay first','leave quickly'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ෆෝන් එක කොහෙද',o:['ෆෝන් එක කොහෙද','ෆෝන් එක','නම්බර් එක මොකක්ද','යතුර කොහෙද'],a:0},
{t:'match',q:'Match line and moment',pairs:[['නම්බර් එක මොකක්ද','swapping contacts'],['කෝල් එකක් දෙන්න','asking to be called'],['ෆොටෝ එකක් ගන්න පුළුවන්ද','before the shutter'],['ෆෝන් එක කොහෙද','patting your pockets']]},
{t:'mc',q:'මම ඊයේ කෝල් එකක් දුන්නා means…',o:['I gave a call yesterday','call me yesterday','I got a call','I will call'],a:0}]},
{id:'si_phone_5',title:'Checkpoint',step:'checkpoint',meta:'Phone mastered?',vocab:[],ex:[
{t:'mc',q:'"Give me a call" =',o:['කෝල් එකක් දෙන්න','කෝල් එකක් ගන්න','ෆෝන් එක දෙන්න','නම්බර් එක දෙන්න'],a:0},
{t:'wb',q:'Ask: may I take a photo?',a:['ෆොටෝ','එකක්','ගන්න','පුළුවන්ද'],pool:['ෆොටෝ','එකක්','ගන්න','පුළුවන්ද','බෑ']},
{t:'li',q:'Listen — which phrase?',say:'කෝල් එකක් දෙන්න',o:['කෝල් එකක් දෙන්න','ෆොටෝ එකක් ගන්න','යතුර දෙන්න','නම්බර් එක'],a:0},
{t:'mc',q:'"The phone" =',o:['ෆෝන් එක','ෆොටෝ එක','කෝල් එක','නම්බර් එක'],a:0},
{t:'li',q:'Listen — which phrase?',say:'නම්බර් එක මොකක්ද',o:['නම්බර් එක මොකක්ද','නම මොකක්ද','නම්බර් එක','මොකක්ද'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ෆෝන් එක','phone'],['නම්බර් එක','number'],['කෝල් එකක් දෙන්න','give me a call'],['ෆොටෝ එකක්','a photo']]}]},

/* --- Topic 56: asking the way --- */
{id:'si_ask',title:'Asking the way',step:'learn',meta:'දුරද? ළඟද? — the four theres',vocab:[['දුර','dhura','far'],['ළඟද දුරද','langadha dhuradha','near or far?'],['ඔතන','othana','there (by you)'],['අතන','athana','over there'],['එතන','ethana','there (we mentioned)'],['පයින් යන්න පුළුවන්ද','payin yanna puluwandha','can I walk there?']],ex:[
{t:'note',tag:'Near or far?',q:'දුර & ළඟ',body:'<p><span class="deva">දුර</span> <b>dhura</b> = far — the partner of your old <span class="deva">ළඟ</span> near. Ask: <span class="deva">ළඟද දුරද</span> — near or far?</p><p>Then the golden follow-up: <span class="deva">පයින් යන්න පුළුවන්ද</span> — can I walk it? Answers: <span class="deva">පුළුවන්</span> — or <span class="deva">දුරයි!</span> take a three-wheeler.</p>',eg:[['දුර','dhura','far'],['ළඟද දුරද','langadha dhuradha','near or far?'],['දුරයි','dhurayi','it is far']]},
{t:'mc',q:'What does දුර mean?',d:'දුර',r:'dhura',o:['far','near','here','straight'],a:0},
{t:'mc',q:'ළඟද දුරද asks…',d:'ළඟද දුරද',r:'langadha dhuradha',o:['near or far?','left or right?','now or later?','big or small?'],a:0},
{t:'note',tag:'The four theres',q:'මෙතන ඔතන අතන එතන',body:'<p>Places point four ways, exactly like things: <span class="deva">මෙතන</span> here (by me) · <span class="deva">ඔතන</span> <b>othana</b> there by YOU · <span class="deva">අතන</span> <b>athana</b> over there (visible) · <span class="deva">එතන</span> <b>ethana</b> there (the place we mentioned).</p><p><span class="deva">කඩේ අතන</span> — the shop is over there!</p>',eg:[['මෙතන','methana','here'],['ඔතන','othana','there by you'],['අතන','athana','over there'],['එතන','ethana','there (mentioned)']]},
{t:'mc',q:'A place you can SEE across the road:',o:['අතන','මෙතන','ඔතන','එතන'],a:0},
{t:'wb',q:'Ask: can I walk there? — literally can go on foot',a:['පයින්','යන්න','පුළුවන්ද'],pool:['පයින්','යන්න','පුළුවන්ද','දුරද']},
{t:'mc',q:'The answer is දුරයි. You should…',o:['take a ride','walk happily','stay home','run'],a:0}]},
{id:'si_ask_2',title:'Hear it',step:'recognize',meta:'Distances by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'දුර',o:['දුර','ළඟ','දොර? — no','දවස'],a:0},
{t:'li',q:'Listen — which word?',say:'අතන',o:['අතන','ඔතන','එතන','මෙතන'],a:0},
{t:'mc',q:'"There, by you" =',o:['ඔතන','අතන','මෙතන','එතන'],a:0},
{t:'mc',q:'ඉස්කෝලේ දුරයි means…',o:['the school is far','the school is near','walk to school','the school is closed'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ළඟද දුරද',o:['ළඟද දුරද','දුරද','ළඟද','දුරයි'],a:0},
{t:'mc',q:'The four theres mirror which Zone 3 set?',o:['මේක ඕක අරක ඒක','මම ඔයා එයා අපි','ද ඔව් නෑ','ඕනැ එපා'],a:0},
{t:'li',q:'Listen — which word?',say:'එතන',o:['එතන','අතන','ඔතන','මෙතන'],a:0}]},
{id:'si_ask_3',title:'Build it',step:'build',meta:'Find your way',vocab:[],ex:[
{t:'match',q:'Match place-word and meaning',pairs:[['මෙතන','here'],['ඔතන','there (by you)'],['අතන','over there'],['එතන','there (mentioned)']]},
{t:'wb',q:'Ask: is the station near or far? — station first',a:['ස්ටේෂන් එක','ළඟද','දුරද'],pool:['ස්ටේෂන් එක','ළඟද','දුරද','කොහෙද']},
{t:'mc',q:'"The shop is over there" =',o:['කඩේ අතන','කඩේ මෙතන','කඩේ දුර','අතන කඩේ ද'],a:0},
{t:'wb',q:'Ask: can I walk to the village?',a:['ගමට','පයින්','යන්න','පුළුවන්ද'],pool:['ගමට','පයින්','යන්න','පුළුවන්ද','දුරයි']},
{t:'li',q:'Listen — which word?',say:'ඔතන',o:['ඔතන','අතන','ඕක','මෙතන'],a:0},
{t:'mc',q:'දුරයි uses which little machine?',o:['-යි "is" on an adjective','the dative මට','the -ක් counter','the question ද'],a:0}]},
{id:'si_ask_4',title:'Mix it',step:'mix',meta:'Lost & found',vocab:[],ex:[
{t:'mc',q:'You ask a granny the way; she points across the paddy field:',o:['අතන!','ඔතන!','මෙතන!','එපා!'],a:0},
{t:'wb',q:'Ask: is the kade near? — කඩේ ළඟද',a:['කඩේ','ළඟද'],pool:['කඩේ','ළඟද','දුරද']},
{t:'li',q:'Listen — which phrase?',say:'පයින් යන්න පුළුවන්ද',o:['පයින් යන්න පුළුවන්ද','පයින් යනවා','යන්න පුළුවන්ද','පයින් යමු'],a:0},
{t:'mc',q:'ළඟයි! — the reply means…',o:['it is near — walk!','it is far — ride!','it is closed','wrong way'],a:0},
{t:'li',q:'Listen — which word?',say:'දුරයි',o:['දුරයි','දුර','ළඟයි','ළඟ'],a:0},
{t:'match',q:'Match answer and your move',pairs:[['ළඟයි','walk it'],['දුරයි','take the three-wheeler'],['අතන','look across'],['එතන','the place you both know']]},
{t:'mc',q:'Zone 8 done — you can now travel using…',o:['rides, directions, tickets, rooms & questions','only the bus','maps only','English'],a:0}]},
{id:'si_ask_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 8 complete?',vocab:[],ex:[
{t:'mc',q:'"Far" =',o:['දුර','ළඟ','අතන','පයින්'],a:0},
{t:'wb',q:'Ask: near or far?',a:['ළඟද','දුරද'],pool:['ළඟද','දුරද','කොහෙද']},
{t:'li',q:'Listen — which word?',say:'අතන',o:['අතන','එතන','ඔතන','මෙතන'],a:0},
{t:'mc',q:'"Over there (visible)" =',o:['අතන','ඔතන','එතන','මෙතන'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ළඟද දුරද',o:['ළඟද දුරද','ළඟයි','දුරයි','කොහෙද'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['දුර','far'],['ළඟ','near'],['මෙතන','here'],['අතන','over there']]}]},

/* ===================== ZONE 9 · SAY MORE ===================== */
/* --- Topic 57: but & because --- */
{id:'si_but',title:'But & because',step:'learn',meta:'ඒත් හැබැයි නිසා',vocab:[['ඒත්','eeth','but'],['හැබැයි','haebaeyi','but / mind you'],['නිසා','nisaa','because of (comes AFTER)'],['ඒ නිසා','ee nisaa','so / therefore'],['වැස්ස නිසා','waessa nisaa','because of the rain']],ex:[
{t:'note',tag:'Two buts',q:'ඒත් & හැබැයි',body:'<p><span class="deva">ඒත්</span> <b>eeth</b> = but. <span class="deva">හැබැයි</span> <b>haebaeyi</b> = but / mind you — the street favorite.</p><p><span class="deva">මට යන්න ඕනැ — ඒත් සල්ලි නෑ</span>. I want to go — but no money. A whole mood in one line.</p>',eg:[['ඒත්','eeth','but'],['හැබැයි','haebaeyi','but, mind you'],['මට යන්න ඕනැ ඒත් සල්ලි නෑ','mata yanna oonae eeth salli naee','I want to go but there is no money']]},
{t:'mc',q:'What does ඒත් mean?',d:'ඒත්',r:'eeth',o:['but','because','so','and'],a:0},
{t:'mc',q:'The street-favorite "but" is…',o:['හැබැයි','නිසා','ඒ නිසා','නම්'],a:0},
{t:'note',tag:'Because — behind!',q:'නිසා',body:'<p><span class="deva">නිසා</span> <b>nisaa</b> = because of — and true to Sinhala style it comes AFTER its reason: <span class="deva">වැස්ස නිසා</span> — because of the rain.</p><p><span class="deva">වැස්ස නිසා අපි ගියේ නෑ</span> — because of the rain, we did not go. And <span class="deva">ඒ නිසා</span> = so / therefore.</p>',eg:[['වැස්ස නිසා','waessa nisaa','because of the rain'],['වැස්ස නිසා අපි ගියේ නෑ','waessa nisaa api giyee naee','we did not go because of the rain'],['ඒ නිසා','ee nisaa','so / therefore']]},
{t:'mc',q:'වැස්ස නිසා means…',d:'වැස්ස නිසා',r:'waessa nisaa',o:['because of the rain','despite the rain','before the rain','it is raining'],a:0},
{t:'wb',q:'Build: we did not go because of the rain — reason first',a:['වැස්ස','නිසා','අපි','ගියේ','නෑ'],pool:['වැස්ස','නිසා','අපි','ගියේ','නෑ','ඒත්'],},
{t:'mc',q:'නිසා sits…',o:['after its reason','before its reason','at the start','at the very end only'],a:0}]},
{id:'si_but_2',title:'Hear it',step:'recognize',meta:'Buts by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ඒත්',o:['ඒත්','ඒක','එතන','ඒ නිසා'],a:0},
{t:'li',q:'Listen — which word?',say:'හැබැයි',o:['හැබැයි','හෙට','හතර','නිසා'],a:0},
{t:'mc',q:'Which means "because of"?',o:['නිසා','ඒත්','හැබැයි','නම්'],a:0},
{t:'mc',q:'මට බඩගිනියි — ඒ නිසා කමු! Here ඒ නිසා means…',o:['so / therefore','but','because','maybe'],a:0},
{t:'li',q:'Listen — which phrase?',say:'වැස්ස නිසා',o:['වැස්ස නිසා','ඒ නිසා','වැස්ස','නිසා'],a:0},
{t:'mc',q:'ලස්සනයි හැබැයි ගණන් වැඩියි means…',o:['beautiful, but too expensive','cheap and beautiful','ugly but cheap','beautiful because cheap'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඒ නිසා',o:['ඒ නිසා','නිසා','ඒත්','ඒක'],a:0}]},
{id:'si_but_3',title:'Build it',step:'build',meta:'Join your thoughts',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ඒත්','but'],['හැබැයි','but, mind you'],['නිසා','because of'],['ඒ නිසා','so / therefore']]},
{t:'wb',q:'Build: I want to eat but there is no rice',a:['මට','කන්න','ඕනැ','ඒත්','බත්','නෑ'],pool:['මට','කන්න','ඕනැ','ඒත්','බත්','නෑ','නිසා']},
{t:'mc',q:'"Because of the work" =',o:['වැඩ නිසා','නිසා වැඩ','වැඩ ඒත්','ඒ නිසා වැඩ'],a:0},
{t:'wb',q:'Build: it is raining, so let us not go — end with යන්න එපා? No: අපි යන්නේ නෑ',a:['වහිනවා','ඒ නිසා','අපි','යන්නේ','නෑ'],pool:['වහිනවා','ඒ නිසා','අපි','යන්නේ','නෑ','ඒත්'],},
{t:'li',q:'Listen — which word?',say:'නිසා',o:['නිසා','නෑ','නම','මෙතන'],a:0},
{t:'mc',q:'මහන්සියි — ඒ නිසා මම…',o:['ගෙදර යනවා','කඩේට යමු','නටනවා','දුවනවා'],a:0}]},
{id:'si_but_4',title:'Mix it',step:'mix',meta:'Real connections',vocab:[],ex:[
{t:'mc',q:'මට ආප්ප ඕනැ — හැබැයි … Finish naturally:',o:['සල්ලි නෑ','සල්ලි තියෙනවා','ආප්ප ඕනැ','කමු'],a:0},
{t:'wb',q:'Explain: I did not come because of the rain',a:['වැස්ස','නිසා','මම','ආවේ','නෑ'],pool:['වැස්ස','නිසා','මම','ආවේ','නෑ','ඒත්'],},
{t:'li',q:'Listen — which phrase?',say:'ඒත් සල්ලි නෑ',o:['ඒත් සල්ලි නෑ','සල්ලි නෑ','හැබැයි සල්ලි නෑ','ඒ නිසා සල්ලි නෑ'],a:0},
{t:'mc',q:'වැඩ නිසා මට එන්න බෑ means…',o:['I cannot come because of work','work cannot come','but I have work','so I will come to work'],a:0},
{t:'li',q:'Listen — which word?',say:'හැබැයි',o:['හැබැයි','ඒත්','නිසා','බෑ'],a:0},
{t:'match',q:'Match sentence and meaning',pairs:[['වැස්ස නිසා ගියේ නෑ','did not go — rain'],['වැඩ නිසා එන්න බෑ','cannot come — work'],['ඒත් සල්ලි නෑ','but no money'],['ඒ නිසා කමු','so let us eat']]},
{t:'mc',q:'English puts because FIRST; Sinhala puts නිසා…',o:['after the reason','first as well','nowhere','on the verb'],a:0}]},
{id:'si_but_5',title:'Checkpoint',step:'checkpoint',meta:'Connectors mastered?',vocab:[],ex:[
{t:'mc',q:'"But" =',o:['ඒත්','නිසා','නම්','ඒ නිසා'],a:0},
{t:'wb',q:'Build: because of the rain we did not go',a:['වැස්ස','නිසා','අපි','ගියේ','නෑ'],pool:['වැස්ස','නිසා','අපි','ගියේ','නෑ','හැබැයි'],},
{t:'li',q:'Listen — which word?',say:'ඒත්',o:['ඒත්','එතන','ඒක','නිසා'],a:0},
{t:'mc',q:'"So / therefore" =',o:['ඒ නිසා','නිසා','ඒත්','හැබැයි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'වැඩ නිසා',o:['වැඩ නිසා','වැස්ස නිසා','ඒ නිසා','වැඩ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ඒත්','but'],['නිසා','because of'],['ඒ නිසා','therefore'],['හැබැයි','mind you']]}]},

/* --- Topic 58: if --- */
{id:'si_if',title:'If: නම්',step:'learn',meta:'වැස්ස නම් … පුළුවන් නම්',vocab:[['නම්','nam','if'],['වැස්ස නම්','waessa nam','if it rains'],['පුළුවන් නම්','puluwan nam','if possible'],['හෙට වැස්ස නම් අපි යන්නේ නෑ','heta waessa nam api yannee naee','if it rains tomorrow we are not going']],ex:[
{t:'note',tag:'Little if',q:'X නම්',body:'<p>The whole English IF is one little tag: <span class="deva">නම්</span> <b>nam</b> — placed AFTER the condition, Sinhala style.</p><p><span class="deva">වැස්ස නම්</span> — if it rains · <span class="deva">පුළුවන් නම්</span> — if possible · <span class="deva">ඕනැ නම්</span> — if you want.</p>',eg:[['වැස්ස නම්','waessa nam','if it rains'],['පුළුවන් නම්','puluwan nam','if possible'],['ඕනැ නම්','oonae nam','if you want']]},
{t:'mc',q:'What does නම් mean?',d:'නම්',r:'nam',o:['if','but','because','when'],a:0},
{t:'mc',q:'"If possible" =',o:['පුළුවන් නම්','නම් පුළුවන්','පුළුවන්ද','බෑ නම්'],a:0},
{t:'note',tag:'If-sentences',q:'condition නම්, result',body:'<p><span class="deva">හෙට වැස්ස නම් අපි යන්නේ නෑ</span> — if it rains tomorrow, we are not going.</p><p><span class="deva">ඕනැ නම් ගන්න</span> — if you want it, take it! Condition first, <span class="deva">නම්</span> tag, then the result. Watch out: <span class="deva">නම්</span> also means NAME — context tells you which.</p>',eg:[['හෙට වැස්ස නම් අපි යන්නේ නෑ','heta waessa nam api yannee naee','if it rains tomorrow we are not going'],['ඕනැ නම් ගන්න','oonae nam ganna','take it if you want']]},
{t:'mc',q:'හෙට වැස්ස නම් අපි යන්නේ නෑ — when do you stay home?',o:['if it rains tomorrow','every day','if it is sunny','never'],a:0},
{t:'wb',q:'Build: if you want, take it',a:['ඕනැ','නම්','ගන්න'],pool:['ඕනැ','නම්','ගන්න','දෙන්න']},
{t:'mc',q:'නම් can also mean…',o:['name — context decides','no','yes','now'],a:0}]},
{id:'si_if_2',title:'Hear it',step:'recognize',meta:'Ifs by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'වැස්ස නම්',o:['වැස්ස නම්','වැස්ස නිසා','පුළුවන් නම්','වැස්ස'],a:0},
{t:'li',q:'Listen — which phrase?',say:'පුළුවන් නම්',o:['පුළුවන් නම්','පුළුවන්ද','බෑ නම්','ඕනැ නම්'],a:0},
{t:'mc',q:'Which means "if you want"?',o:['ඕනැ නම්','ඕනැ නිසා','ඕනැද','එපා නම්'],a:0},
{t:'mc',q:'නම් sits…',o:['after the condition','before the condition','on the verb','anywhere'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඕනැ නම් ගන්න',o:['ඕනැ නම් ගන්න','ඕනැ නම්','පුළුවන් නම් එන්න','ගන්න'],a:0},
{t:'mc',q:'නිසා vs නම්:',o:['because vs if','if vs because','both if','both because'],a:0},
{t:'li',q:'Listen — which phrase?',say:'හෙට වැස්ස නම්',o:['හෙට වැස්ස නම්','වැස්ස නම්','හෙට වැස්ස නිසා','අද වැස්ස නම්'],a:0}]},
{id:'si_if_3',title:'Build it',step:'build',meta:'Make conditions',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['වැස්ස නම්','if it rains'],['පුළුවන් නම්','if possible'],['ඕනැ නම්','if you want'],['වැස්ස නිසා','because of rain']]},
{t:'wb',q:'Build: if it rains, we are not going',a:['වැස්ස','නම්','අපි','යන්නේ','නෑ'],pool:['වැස්ස','නම්','අපි','යන්නේ','නෑ','නිසා'],},
{t:'mc',q:'"If possible, come tomorrow" =',o:['පුළුවන් නම් හෙට එන්න','පුළුවන්ද හෙට එන්න','හෙට නම් පුළුවන්','පුළුවන් නිසා එන්න'],a:0},
{t:'wb',q:'Offer: if you want, eat!',a:['ඕනැ','නම්','කන්න'],pool:['ඕනැ','නම්','කන්න','කමු']},
{t:'li',q:'Listen — which word?',say:'නම්',o:['නම්','නම','නෑ','දම්? — no'],a:0},
{t:'mc',q:'මහන්සි නම් ඉන්න means…',o:['if you are tired, stay / rest','stay tired','tiredness remains','do not rest'],a:0}]},
{id:'si_if_4',title:'Mix it',step:'mix',meta:'Ifs in real plans',vocab:[],ex:[
{t:'mc',q:'Friend: හෙට මුහුදට යමුද? You, watching clouds:',o:['වැස්ස නම් බෑ','වැස්ස නිසා ඔව්','පුළුවන් නම් නෑ','ඕනැ නම් වැස්ස'],a:0},
{t:'wb',q:'Build: if there is no money, I am not buying — money first',a:['සල්ලි','නෑ','නම්','මම','ගන්නේ','නෑ'],pool:['සල්ලි','නෑ','නම්','මම','ගන්නේ','නෑ','ඕනැ'],},
{t:'li',q:'Listen — which phrase?',say:'පුළුවන් නම් එන්න',o:['පුළුවන් නම් එන්න','පුළුවන් නම්','ඕනැ නම් ගන්න','එන්න'],a:0},
{t:'mc',q:'ඕනැ නම් at the kadē politely means…',o:['only if you like','you must','never','pay first'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඕනැ නම්',o:['ඕනැ නම්','ඕනැ නිසා','පුළුවන් නම්','එපා නම්'],a:0},
{t:'match',q:'Match condition and result',pairs:[['වැස්ස නම්','අපි යන්නේ නෑ'],['මහන්සි නම්','ඉන්න'],['බඩගිනි නම්','කන්න'],['පුළුවන් නම්','එන්න']]},
{t:'mc',q:'One tag, after the condition — that is the whole grammar of…',o:['if','because','but','and'],a:0}]},
{id:'si_if_5',title:'Checkpoint',step:'checkpoint',meta:'If mastered?',vocab:[],ex:[
{t:'mc',q:'"If" =',o:['නම්','නිසා','ඒත්','ද'],a:0},
{t:'wb',q:'Build: if it rains tomorrow, we are not going',a:['හෙට','වැස්ස','නම්','අපි','යන්නේ','නෑ'],pool:['හෙට','වැස්ස','නම්','අපි','යන්නේ','නෑ','නිසා'],},
{t:'li',q:'Listen — which phrase?',say:'පුළුවන් නම්',o:['පුළුවන් නම්','ඕනැ නම්','වැස්ස නම්','පුළුවන්'],a:0},
{t:'mc',q:'"Take it if you want" =',o:['ඕනැ නම් ගන්න','ගන්න ඕනැ නම්? — order!','ඕනැ නිසා ගන්න','ගන්නවා නම්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'වැස්ස නම්',o:['වැස්ස නම්','වැස්ස නිසා','වැස්ස','නම්'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['නම්','if'],['නිසා','because of'],['පුළුවන් නම්','if possible'],['ඕනැ නම්','if you want']]}]},

/* --- Topic 59: think & remember --- */
{id:'si_think',title:'Think & remember',step:'learn',meta:'හිතනවා මතකයි අමතක වුණා',vocab:[['හිතනවා','hithanawaa','thinks'],['මතක','mathaka','memory'],['මට මතකයි','mata mathakayi','I remember'],['අමතක වුණා','amathaka unaa','forgot'],['මට අමතක වුණා','mata amathaka unaa','I forgot']],ex:[
{t:'note',tag:'Inside your head',q:'හිතනවා',body:'<p><span class="deva">හිතනවා</span> <b>hithanawaa</b> = think: <span class="deva">මම හිතනවා</span> — I think (so). <span class="deva">ඉන්න, මම හිතන්නම්</span>? Simpler: <span class="deva">ටිකක් ඉන්න</span> — let me think a moment!</p>',eg:[['හිතනවා','hithanawaa','thinks'],['මම හිතනවා','mama hithanawaa','I think so']]},
{t:'mc',q:'What does හිතනවා mean?',d:'හිතනවා',r:'hithanawaa',o:['thinks','remembers','forgets','knows'],a:0},
{t:'mc',q:'"I think so" =',o:['මම හිතනවා','මට හිතනවා','මම දන්නවා','මට මතකයි'],a:0},
{t:'note',tag:'Memory speaks dative',q:'මතකයි & අමතක වුණා',body:'<p>Remembering rides <span class="deva">මට</span>, like feelings: <span class="deva">මට මතකයි</span> <b>mata mathakayi</b> — I remember (memory-is to me). Forgetting HAPPENS to you: <span class="deva">මට අමතක වුණා</span> <b>mata amathaka unaa</b> — I forgot (<span class="deva">වුණා</span> = became).</p><p><span class="deva">නම මට අමතක වුණා</span> — the name slipped my mind. The politest confession in the language.</p>',eg:[['මට මතකයි','mata mathakayi','I remember'],['මට අමතක වුණා','mata amathaka unaa','I forgot'],['නම මට අමතක වුණා','nama mata amathaka unaa','I forgot the name']]},
{t:'mc',q:'මට මතකයි means…',d:'මට මතකයි',r:'mata mathakayi',o:['I remember','I think','I forgot','I know'],a:0},
{t:'wb',q:'Confess: I forgot',a:['මට','අමතක','වුණා'],pool:['මට','අමතක','වුණා','මතකයි']},
{t:'mc',q:'Which family do මතකයි & අමතක වුණා ride with?',o:['මට — like feelings & wants','මම — like verbs','මගේ — possession','ද — questions'],a:0}]},
{id:'si_think_2',title:'Hear it',step:'recognize',meta:'Head & heart',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'හිතනවා',o:['හිතනවා','හිටියා','ඉන්නවා','මතක'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට මතකයි',o:['මට මතකයි','මට අමතක වුණා','මම හිතනවා','මට තේරෙනවා'],a:0},
{t:'mc',q:'Which means "I forgot"?',o:['මට අමතක වුණා','මට මතකයි','මම හිතනවා','මම දන්නේ නෑ'],a:0},
{t:'mc',q:'වුණා means…',d:'වුණා',r:'unaa',o:['became / happened','went','was','did'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට අමතක වුණා',o:['මට අමතක වුණා','මට මතකයි','අමතක වුණා','මට තේරුණා? — no'],a:0},
{t:'mc',q:'ඔයාට මතකද? asks…',o:['do you remember?','do you think?','did you forget?','do you know?'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම හිතනවා',o:['මම හිතනවා','මට මතකයි','මම දන්නවා','හිතනවා'],a:0}]},
{id:'si_think_3',title:'Build it',step:'build',meta:'Remember & admit',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['මම හිතනවා','I think so'],['මට මතකයි','I remember'],['මට අමතක වුණා','I forgot'],['මම දන්නේ නෑ','I do not know']]},
{t:'wb',q:'Say: I forgot the name — name first',a:['නම','මට','අමතක','වුණා'],pool:['නම','මට','අමතක','වුණා','මතකයි']},
{t:'mc',q:'"Do you remember?" =',o:['ඔයාට මතකද','ඔයා මතකයි','මට මතකද','මතක ඔයාද'],a:0},
{t:'wb',q:'Say: I remember the village',a:['මට','ගම','මතකයි'],pool:['මට','ගම','මතකයි','අමතක']},
{t:'li',q:'Listen — which word?',say:'මතකයි',o:['මතකයි','මතක','අමතක','මහන්සියි'],a:0},
{t:'mc',q:'You blank on a friendly aunty at the kadē:',o:['සමාවෙන්න — නම මට අමතක වුණා','ඔයා කවුද!','මට මතකයි','යන්න'],a:0}]},
{id:'si_think_4',title:'Mix it',step:'mix',meta:'Minds in motion',vocab:[],ex:[
{t:'mc',q:'කෝච්චිය කීයටද? — you are not sure:',o:['මම හිතනවා දෙකට','මට මතකයි','දෙකට!','අමතක වුණා දෙකට'],a:0},
{t:'wb',q:'Ask: do you remember the shop? — shop first',a:['කඩේ','ඔයාට','මතකද'],pool:['කඩේ','ඔයාට','මතකද','මතකයි']},
{t:'li',q:'Listen — which phrase?',say:'නම මට අමතක වුණා',o:['නම මට අමතක වුණා','මට අමතක වුණා','නම මට මතකයි','නම මොකක්ද'],a:0},
{t:'mc',q:'මතකයි vs අමතක වුණා:',o:['remember vs forgot','forgot vs remember','both think','both forgot'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඔයාට මතකද',o:['ඔයාට මතකද','මට මතකයි','ඔයාට පුළුවන්ද','මතකද'],a:0},
{t:'match',q:'Match phrase and moment',pairs:[['මම හිතනවා','giving a guess'],['මට මතකයි','warm certainty'],['මට අමතක වුණා','the honest blank'],['ටිකක් ඉන්න','buying a moment']]},
{t:'mc',q:'The -යි in මතකයි is the same "is" as in…',o:['හොඳයි & ලොකුයි','ඕනැ','ද','නම්'],a:0}]},
{id:'si_think_5',title:'Checkpoint',step:'checkpoint',meta:'Think & remember mastered?',vocab:[],ex:[
{t:'mc',q:'"I remember" =',o:['මට මතකයි','මම මතකයි','මට අමතක වුණා','මම හිතනවා'],a:0},
{t:'wb',q:'Confess: I forgot the name',a:['නම','මට','අමතක','වුණා'],pool:['නම','මට','අමතක','වුණා','නිසා']},
{t:'li',q:'Listen — which phrase?',say:'මට මතකයි',o:['මට මතකයි','මට අමතක වුණා','ඔයාට මතකද','මතකයි'],a:0},
{t:'mc',q:'"Thinks" =',o:['හිතනවා','දන්නවා','මතකයි','තේරෙනවා'],a:0},
{t:'li',q:'Listen — which word?',say:'අමතක',o:['අමතක','මතක','අම්මා','අතන'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['හිතනවා','thinks'],['මට මතකයි','I remember'],['මට අමතක වුණා','I forgot'],['වුණා','became']]}]},

/* --- Topic 60: work --- */
{id:'si_job',title:'Work',step:'learn',meta:'රස්සාව වැඩ ඔෆිස් එක',vocab:[['වැඩ','waeda','work'],['රස්සාව','rassaawa','job'],['ඔෆිස් එක','ofis eka','the office'],['ගුරුවරයා','guruwarayaa','teacher'],['ගොවියා','goviyaa','farmer'],['මම වැඩ කරනවා','mama waeda karanawaa','I work']],ex:[
{t:'note',tag:'Doing the doing',q:'වැඩ කරනවා',body:'<p><span class="deva">වැඩ</span> <b>waeda</b> = work — and you DO it: <span class="deva">මම වැඩ කරනවා</span> — I work. <span class="deva">වැඩ කරලා</span>? Done, from Zone 7!</p><p><span class="deva">රස්සාව</span> <b>rassaawa</b> = the job itself · <span class="deva">ඔෆිස් එක</span> — yes, the එක squad clocks in too.</p>',eg:[['මම වැඩ කරනවා','mama waeda karanawaa','I work'],['රස්සාව','rassaawa','job'],['ඔෆිස් එක','ofis eka','the office']]},
{t:'mc',q:'What does වැඩ mean?',d:'වැඩ',r:'waeda',o:['work','job title','office','money'],a:0},
{t:'mc',q:'"I work" =',o:['මම වැඩ කරනවා','මම වැඩ','මට වැඩ ඕනැ','මම රස්සාව'],a:0},
{t:'note',tag:'Who does what',q:'ගුරුවරයා & ගොවියා',body:'<p><span class="deva">ගුරුවරයා</span> <b>guruwarayaa</b> = teacher · <span class="deva">ගොවියා</span> <b>goviyaa</b> = farmer — the two great professions of the village.</p><p>Ask someone theirs: <span class="deva">ඔයා මොනවද කරන්නේ</span> — what do you do? (Questions love that <b>-න්නේ</b> shape — you met it in negatives!)</p>',eg:[['ගුරුවරයා','guruwarayaa','teacher'],['ගොවියා','goviyaa','farmer'],['ඔයා මොනවද කරන්නේ','oyaa monawadha karannee','what do you do?']]},
{t:'mc',q:'What does ගොවියා mean?',d:'ගොවියා',r:'goviyaa',o:['farmer','teacher','driver','doctor'],a:0},
{t:'wb',q:'Ask: what do you do?',a:['ඔයා','මොනවද','කරන්නේ'],pool:['ඔයා','මොනවද','කරන්නේ','කරනවා']},
{t:'mc',q:'"Mother is a teacher" — no "is" needed:',o:['අම්මා ගුරුවරයෙක්','අම්මා ගුරුවරයා ඉන්නවා','අම්මා ගුරුවරයා තියෙනවා','ගුරුවරයා අම්මා ද'],a:0}]},
{id:'si_job_2',title:'Hear it',step:'recognize',meta:'Work talk',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'වැඩ',o:['වැඩ','වඩා','වැස්ස','රස්සාව'],a:0},
{t:'li',q:'Listen — which word?',say:'රස්සාව',o:['රස්සාව','වැස්ස','රස','ඔෆිස් එක'],a:0},
{t:'mc',q:'Which is "the office"?',o:['ඔෆිස් එක','රස්සාව','වැඩ','ඉස්කෝලේ'],a:0},
{t:'mc',q:'ගුරුවරයා works at…',o:['ඉස්කෝලේ','කඩේ','ගම','ඔෆිස් එක only'],a:0},
{t:'li',q:'Listen — which word?',say:'ගොවියා',o:['ගොවියා','ගුරුවරයා','ගම','ගෙදර'],a:0},
{t:'mc',q:'මම ඔෆිස් එකේ වැඩ කරනවා means…',o:['I work at the office','I own an office','the office works','I walk to the office'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඔයා මොනවද කරන්නේ',o:['ඔයා මොනවද කරන්නේ','මොනවද ඕනැ','ඔයා කවුද','මොකක්ද කරන්නේ'],a:0}]},
{id:'si_job_3',title:'Build it',step:'build',meta:'Say your work',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['වැඩ','work'],['රස්සාව','job'],['ගුරුවරයා','teacher'],['ගොවියා','farmer']]},
{t:'wb',q:'Say: I work at the office',a:['මම','ඔෆිස් එකේ','වැඩ','කරනවා'],pool:['මම','ඔෆිස් එකේ','වැඩ','කරනවා','කළා']},
{t:'mc',q:'"Father is a farmer" =',o:['තාත්තා ගොවියෙක්','තාත්තා ගොවියා ඉන්නවා','ගොවියා තාත්තා ද','තාත්තා ගොවියාට'],a:0},
{t:'wb',q:'Say: I worked yesterday',a:['මම','ඊයේ','වැඩ','කළා'],pool:['මම','ඊයේ','වැඩ','කළා','කරනවා']},
{t:'li',q:'Listen — which word?',say:'ගුරුවරයා',o:['ගුරුවරයා','ගොවියා','දොස්තර','යාළුවා'],a:0},
{t:'mc',q:'The -යෙක් on ගුරුවරයෙක් is the people-version of…',o:['-ක් — "a / one"','-ට — to','-ගේ — of','-යි — is'],a:0}]},
{id:'si_job_4',title:'Mix it',step:'mix',meta:'A working week',vocab:[],ex:[
{t:'mc',q:'ඔයා මොනවද කරන්නේ? You teach:',o:['මම ගුරුවරයෙක්','මම ගොවියෙක්','මම වැඩ','ඉස්කෝලේ'],a:0},
{t:'wb',q:'Excuse: I cannot come because of work',a:['වැඩ','නිසා','මට','එන්න','බෑ'],pool:['වැඩ','නිසා','මට','එන්න','බෑ','නම්'],},
{t:'li',q:'Listen — which phrase?',say:'මම වැඩ කරනවා',o:['මම වැඩ කරනවා','මම වැඩ කළා','වැඩ කරලා','මම වැඩ කරන්නේ නෑ'],a:0},
{t:'mc',q:'ගොවියා the farmer grows the island’s…',o:['බත් — the rice','තේ only','මාළු','පොත්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඔෆිස් එකේ',o:['ඔෆිස් එකේ','ඔෆිස් එක','බස් එකේ','කඩේ'],a:0},
{t:'match',q:'Match person and place',pairs:[['ගුරුවරයා','ඉස්කෝලේ'],['ගොවියා','the paddy field'],['දොස්තර','the clinic'],['කඩේ අයියා','the kadē']]},
{t:'mc',q:'වැඩ ගොඩක් තියෙනවා — ගොඩක් likely means…',o:['a lot (of work)','none','finished','easy'],a:0}]},
{id:'si_job_5',title:'Checkpoint',step:'checkpoint',meta:'Work mastered?',vocab:[],ex:[
{t:'mc',q:'"Work" =',o:['වැඩ','රස්සාව','ඔෆිස් එක','සල්ලි'],a:0},
{t:'wb',q:'Say: I work',a:['මම','වැඩ','කරනවා'],pool:['මම','වැඩ','කරනවා','ඕනැ']},
{t:'li',q:'Listen — which word?',say:'රස්සාව',o:['රස්සාව','වැඩ','වැස්ස','රසයි'],a:0},
{t:'mc',q:'"Teacher" =',o:['ගුරුවරයා','ගොවියා','දොස්තර','අයියා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඔයා මොනවද කරන්නේ',o:['ඔයා මොනවද කරන්නේ','මොනවද ඕනැ','ඔයා කොහෙන්ද','මොකක්ද'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['වැඩ','work'],['රස්සාව','job'],['ඔෆිස් එක','office'],['ගොවියා','farmer']]}]},

/* --- Topic 61: free time --- */
{id:'si_hobby',title:'Free time',step:'learn',meta:'ක්‍රිකට් සින්දු මුහුද',vocab:[['ක්‍රිකට්','kriket','cricket'],['සින්දු','sindhu','songs'],['අහනවා','ahanawaa','listens / asks'],['නටනවා','natanawaa','dances'],['මුහුද','muhudha','the sea'],['මම ක්‍රිකට් වලට කැමතියි','mama kriket walata kaemathiyi','I like cricket']],ex:[
{t:'note',tag:'The island religion? Cricket!',q:'ක්‍රිකට්',body:'<p>Say <span class="deva">ක්‍රිකට්</span> <b>kriket</b> anywhere on the island and faces light up.</p><p>Liking things properly takes <b>-වලට</b>: <span class="deva">මම ක්‍රිකට් වලට කැමතියි</span> — I like cricket (your Zone 3 <span class="deva">කැමතියි</span>, now with its full pattern: liked-thing + <span class="deva">වලට</span>).</p>',eg:[['ක්‍රිකට්','kriket','cricket'],['මම ක්‍රිකට් වලට කැමතියි','mama kriket walata kaemathiyi','I like cricket']]},
{t:'mc',q:'The nationwide obsession is…',o:['ක්‍රිකට්','ෆෝන් එක','කෝච්චිය','තේ only'],a:0},
{t:'mc',q:'"I like cricket" =',o:['මම ක්‍රිකට් වලට කැමතියි','මට ක්‍රිකට් ඕනැ','මම ක්‍රිකට් කනවා','ක්‍රිකට් හොඳයි ද'],a:0},
{t:'note',tag:'Songs & the sea',q:'සින්දු අහනවා · මුහුදට යනවා',body:'<p><span class="deva">සින්දු</span> <b>sindhu</b> = songs · <span class="deva">අහනවා</span> <b>ahanawaa</b> = listen (and ask!): <span class="deva">මම සින්දු අහනවා</span>. <span class="deva">නටනවා</span> <b>natanawaa</b> = dance.</p><p>And the island favorite: <span class="deva">මුහුද</span> <b>muhudha</b> — the sea. <span class="deva">අපි මුහුදට යමු!</span></p>',eg:[['සින්දු අහනවා','sindhu ahanawaa','listens to songs'],['නටනවා','natanawaa','dances'],['අපි මුහුදට යමු','api muhudhata yamu','let’s go to the sea']]},
{t:'mc',q:'What does මුහුද mean?',d:'මුහුද',r:'muhudha',o:['the sea','the river','the hill','the pool'],a:0},
{t:'wb',q:'Invite: let’s go to the sea',a:['අපි','මුහුදට','යමු'],pool:['අපි','මුහුදට','යමු','ගමට']},
{t:'mc',q:'අහනවා means listen AND…',d:'අහනවා',r:'ahanawaa',o:['ask','answer','sing','dance'],a:0}]},
{id:'si_hobby_2',title:'Hear it',step:'recognize',meta:'Fun by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ක්‍රිකට්',o:['ක්‍රිකට්','ටිකට්','කෝච්චිය','සින්දු'],a:0},
{t:'li',q:'Listen — which word?',say:'සින්දු',o:['සින්දු','සිංහල','ඉස්කෝලේ','මුහුද'],a:0},
{t:'mc',q:'Which verb means "dances"?',o:['නටනවා','අහනවා','නානවා','නවත්තනවා'],a:0},
{t:'mc',q:'මම සින්දු අහනවා means…',o:['I listen to songs','I sing songs','I write songs','I dance'],a:0},
{t:'li',q:'Listen — which word?',say:'මුහුද',o:['මුහුද','මාසය','ගම','මෙතන'],a:0},
{t:'mc',q:'The like-pattern is thing + …',o:['වලට කැමතියි','ට ඕනැ','නිසා','කැමති නම්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම ක්‍රිකට් වලට කැමතියි',o:['මම ක්‍රිකට් වලට කැමතියි','මම කැමතියි','ක්‍රිකට් හොඳයි','මට ක්‍රිකට් ඕනැ'],a:0}]},
{id:'si_hobby_3',title:'Build it',step:'build',meta:'What you love',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ක්‍රිකට්','cricket'],['සින්දු','songs'],['මුහුද','the sea'],['නටනවා','dances']]},
{t:'wb',q:'Say: I like songs',a:['මම','සින්දු','වලට','කැමතියි'],pool:['මම','සින්දු','වලට','කැමතියි','අහනවා']},
{t:'mc',q:'"We went to the sea yesterday" =',o:['අපි ඊයේ මුහුදට ගියා','අපි මුහුදට යමු','අපි මුහුදේ ගියා','මුහුද ආවා'],a:0},
{t:'wb',q:'Say: I listen to songs at night',a:['මම','රෑ','සින්දු','අහනවා'],pool:['මම','රෑ','සින්දු','අහනවා','නටනවා']},
{t:'li',q:'Listen — which word?',say:'නටනවා',o:['නටනවා','නානවා','අහනවා','යනවා'],a:0},
{t:'mc',q:'ඔයා ක්‍රිකට් වලට කැමතිද? You are not:',o:['කැමති නෑ','කැමතියි','ඕනැ','බෑ'],a:0}]},
{id:'si_hobby_4',title:'Mix it',step:'mix',meta:'Weekend joys',vocab:[],ex:[
{t:'mc',q:'Sunny Sunday, friends free. The classic plan:',o:['අපි මුහුදට යමු','අපි ඔෆිස් එකට යමු','වැඩ කරමු','ගෙදර ඉන්න'],a:0},
{t:'wb',q:'Ask: do you like cricket? — කැමතිද at the end',a:['ඔයා','ක්‍රිකට්','වලට','කැමතිද'],pool:['ඔයා','ක්‍රිකට්','වලට','කැමතිද','කැමතියි']},
{t:'li',q:'Listen — which phrase?',say:'අපි මුහුදට යමු',o:['අපි මුහුදට යමු','අපි ගමට යමු','මුහුදට ගියා','අපි මුහුදේ'],a:0},
{t:'mc',q:'සින්දු අහමු! means…',o:['let’s listen to songs','sing louder','stop the music','I heard a song'],a:0},
{t:'li',q:'Listen — which word?',say:'අහනවා',o:['අහනවා','නටනවා','අතන','ආවා'],a:0},
{t:'match',q:'Match activity and verb',pairs:[['සින්දු','අහනවා'],['ක්‍රිකට්','බලනවා'],['මුහුදට','යනවා'],['party time','නටනවා']]},
{t:'mc',q:'The -වලට in ක්‍රිකට් වලට is cousin to…',o:['-ට — to/for','-ගේ — of','-යි — is','එක — one'],a:0}]},
{id:'si_hobby_5',title:'Checkpoint',step:'checkpoint',meta:'Free time mastered?',vocab:[],ex:[
{t:'mc',q:'"The sea" =',o:['මුහුද','ගඟ? — later!','වතුර','මාසය'],a:0},
{t:'wb',q:'Say: I like cricket',a:['මම','ක්‍රිකට්','වලට','කැමතියි'],pool:['මම','ක්‍රිකට්','වලට','කැමතියි','ඕනැ']},
{t:'li',q:'Listen — which word?',say:'සින්දු',o:['සින්දු','සිංහල','මුහුද','නටනවා'],a:0},
{t:'mc',q:'"Listens" =',o:['අහනවා','නටනවා','බලනවා','කියනවා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'සින්දු අහනවා',o:['සින්දු අහනවා','සින්දු නටනවා','ක්‍රිකට් බලනවා','අහනවා'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ක්‍රිකට්','cricket'],['මුහුද','sea'],['අහනවා','listens'],['නටනවා','dances']]}]},

/* --- Topic 62: your day --- */
{id:'si_day',title:'Your day',step:'learn',meta:'නැගිටිනවා නානවා උයනවා නිදාගන්නවා',vocab:[['නැගිටිනවා','naegitinawaa','gets up'],['නානවා','naanawaa','bathes'],['උයනවා','uyanawaa','cooks'],['නිදාගන්නවා','nidhaagannawaa','sleeps'],['උදේට','udheeta','in the morning'],['මම උදේට නැගිටිනවා','mama udheeta naegitinawaa','I get up in the morning']],ex:[
{t:'note',tag:'Morning moves',q:'නැගිටිනවා & නානවා',body:'<p><span class="deva">නැගිටිනවා</span> <b>naegitinawaa</b> = get up · <span class="deva">නානවා</span> <b>naanawaa</b> = bathe — in Lanka often a joyful well-side or river affair.</p><p><span class="deva">උදේට</span> — in the morning (your -ට on the day-part!): <span class="deva">මම උදේට නැගිටිනවා</span>.</p>',eg:[['නැගිටිනවා','naegitinawaa','gets up'],['නානවා','naanawaa','bathes'],['මම උදේට නැගිටිනවා','mama udheeta naegitinawaa','I get up in the morning']]},
{t:'mc',q:'What does නැගිටිනවා mean?',d:'නැගිටිනවා',r:'naegitinawaa',o:['gets up','sleeps','bathes','cooks'],a:0},
{t:'mc',q:'"Bathes" =',o:['නානවා','උයනවා','නටනවා','නිදාගන්නවා'],a:0},
{t:'note',tag:'Evening winds down',q:'උයනවා & නිදාගන්නවා',body:'<p><span class="deva">උයනවා</span> <b>uyanawaa</b> = cook: <span class="deva">අම්මා බත් උයනවා</span> — mother cooks rice.</p><p><span class="deva">නිදාගන්නවා</span> <b>nidhaagannawaa</b> = sleep — literally TAKE sleep (<span class="deva">ගන්නවා</span> hiding inside!). <span class="deva">මම රෑ නිදාගන්නවා</span>.</p>',eg:[['උයනවා','uyanawaa','cooks'],['අම්මා බත් උයනවා','ammaa bath uyanawaa','mother cooks rice'],['නිදාගන්නවා','nidhaagannawaa','sleeps']]},
{t:'mc',q:'What does උයනවා mean?',d:'උයනවා',r:'uyanawaa',o:['cooks','eats','washes','sleeps'],a:0},
{t:'wb',q:'Say: mother cooks rice',a:['අම්මා','බත්','උයනවා'],pool:['අම්මා','බත්','උයනවා','කනවා']},
{t:'mc',q:'Which verb hides ගන්නවා inside?',o:['නිදාගන්නවා','නානවා','උයනවා','නැගිටිනවා'],a:0}]},
{id:'si_day_2',title:'Hear it',step:'recognize',meta:'The daily verbs',vocab:[],ex:[
{t:'li',q:'Listen — which verb?',say:'නැගිටිනවා',o:['නැගිටිනවා','නිදාගන්නවා','නානවා','නටනවා'],a:0},
{t:'li',q:'Listen — which verb?',say:'උයනවා',o:['උයනවා','යනවා','අහනවා','නානවා'],a:0},
{t:'mc',q:'Which means "sleeps"?',o:['නිදාගන්නවා','නැගිටිනවා','නානවා','ඉන්නවා'],a:0},
{t:'mc',q:'උදේට is built from…',o:['උදේ + ට','උදේ + ද','උදා + ඉට','it is one piece'],a:0},
{t:'li',q:'Listen — which verb?',say:'නානවා',o:['නානවා','නටනවා','උයනවා','යනවා'],a:0},
{t:'mc',q:'මම රෑ නිදාගන්නවා means…',o:['I sleep at night','I get up at night','I bathe at night','I dream'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම උදේට නැගිටිනවා',o:['මම උදේට නැගිටිනවා','මම රෑ නිදාගන්නවා','මම නානවා','උදේට'],a:0}]},
{id:'si_day_3',title:'Build it',step:'build',meta:'Order your morning',vocab:[],ex:[
{t:'match',q:'Match verb and meaning',pairs:[['නැගිටිනවා','gets up'],['නානවා','bathes'],['උයනවා','cooks'],['නිදාගන්නවා','sleeps']]},
{t:'wb',q:'Say: I get up in the morning',a:['මම','උදේට','නැගිටිනවා'],pool:['මම','උදේට','නැගිටිනවා','නිදාගන්නවා']},
{t:'mc',q:'"I bathe, then I eat" — natural order with පස්සේ:',o:['මම නානවා — පස්සේ කනවා','මම කනවා — පස්සේ නානවා? — also a life!','පස්සේ නානවා','නානවා කනවා ද'],a:0},
{t:'wb',q:'Say: I sleep at night',a:['මම','රෑ','නිදාගන්නවා'],pool:['මම','රෑ','නිදාගන්නවා','නැගිටිනවා']},
{t:'li',q:'Listen — which verb?',say:'නිදාගන්නවා',o:['නිදාගන්නවා','නැගිටිනවා','ගන්නවා','නානවා'],a:0},
{t:'mc',q:'අම්මා උදේට ආප්ප උයනවා — breakfast is…',o:['hoppers','rice only','bread','tea only'],a:0}]},
{id:'si_day_4',title:'Mix it',step:'mix',meta:'Dawn to dark',vocab:[],ex:[
{t:'mc',q:'First thing after waking, many islanders…',o:['නානවා — the morning bathe','නිදාගන්නවා again','නටනවා','ක්‍රිකට්'],a:0},
{t:'wb',q:'Say: I got up in the morning — the past of නැගිටිනවා is නැගිට්ටා',a:['මම','උදේට','නැගිට්ටා'],pool:['මම','උදේට','නැගිට්ටා','නැගිටිනවා']},
{t:'li',q:'Listen — which phrase?',say:'අම්මා බත් උයනවා',o:['අම්මා බත් උයනවා','අම්මා බත් කනවා','මම බත් උයනවා','බත් උයනවා'],a:0},
{t:'mc',q:'උයනවා → the -ලා done-form would be…',o:['උයලා','උයන්න','උයමු','ඉව්වා'],a:0},
{t:'li',q:'Listen — which word?',say:'උදේට',o:['උදේට','උදේ','රෑ','හවසට'],a:0},
{t:'match',q:'Match time and deed',pairs:[['උදේට','නැගිටිනවා'],['උදේ','නානවා'],['හවස','උයනවා'],['රෑ','නිදාගන්නවා']]},
{t:'mc',q:'A whole day told in four verbs — that is the power of…',o:['a small, well-chosen vocabulary','long words','grammar tables','luck'],a:0}]},
{id:'si_day_5',title:'Checkpoint',step:'checkpoint',meta:'Your day mastered?',vocab:[],ex:[
{t:'mc',q:'"Gets up" =',o:['නැගිටිනවා','නිදාගන්නවා','නානවා','උයනවා'],a:0},
{t:'wb',q:'Say: mother cooks rice in the morning',a:['අම්මා','උදේට','බත්','උයනවා'],pool:['අම්මා','උදේට','බත්','උයනවා','කනවා']},
{t:'li',q:'Listen — which verb?',say:'නානවා',o:['නානවා','නටනවා','නිදාගන්නවා','උයනවා'],a:0},
{t:'mc',q:'"Sleeps" =',o:['නිදාගන්නවා','නැගිටිනවා','ඉන්නවා','නානවා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම රෑ නිදාගන්නවා',o:['මම රෑ නිදාගන්නවා','මම උදේට නැගිටිනවා','මම නානවා','රෑ නිදාගන්නවා'],a:0},
{t:'match',q:'Match verb and meaning',pairs:[['නැගිටිනවා','gets up'],['උයනවා','cooks'],['නානවා','bathes'],['නිදාගන්නවා','sleeps']]}]},

/* --- Topic 63: help & safety --- */
{id:'si_help',title:'Help & safety',step:'learn',meta:'මට උදව් ඕනැ — words that protect',vocab:[['උදව්','udhaw','help'],['මට උදව් ඕනැ','mata udhaw oonae','I need help'],['උදව් කරන්න','udhaw karanna','please help'],['පොලීසිය','poliisiya','the police'],['නැති වුණා','naethi unaa','got lost / went missing'],['ප්‍රවේසමෙන්','praweesamen','carefully! / take care']],ex:[
{t:'note',tag:'Asking for help',q:'උදව්',body:'<p><span class="deva">උදව්</span> <b>udhaw</b> = help. Two ways to reach for it: <span class="deva">මට උදව් ඕනැ</span> — I need help · <span class="deva">උදව් කරන්න</span> — please help!</p><p>Serious words, taught soberly — you will probably never need them, and knowing them makes you braver.</p>',eg:[['මට උදව් ඕනැ','mata udhaw oonae','I need help'],['උදව් කරන්න','udhaw karanna','please help']]},
{t:'mc',q:'මට උදව් ඕනැ means…',d:'මට උදව් ඕනැ',r:'mata udhaw oonae',o:['I need help','I can help','help arrived','no help needed'],a:0},
{t:'mc',q:'"Please help!" =',o:['උදව් කරන්න','උදව් ඕනැද','උදව් නෑ','උදව් කළා'],a:0},
{t:'note',tag:'Lost & guarded',q:'නැති වුණා · පොලීසිය · ප්‍රවේසමෙන්',body:'<p><span class="deva">නැති වුණා</span> <b>naethi unaa</b> — went missing: <span class="deva">මගේ ෆෝන් එක නැති වුණා</span> — my phone is lost. Report it to the <span class="deva">පොලීසිය</span> <b>poliisiya</b>.</p><p>And the parting blessing everyone gives a traveler: <span class="deva">ප්‍රවේසමෙන්!</span> <b>praweesamen</b> — go carefully.</p>',eg:[['මගේ ෆෝන් එක නැති වුණා','magee foon eka naethi unaa','my phone is lost'],['පොලීසිය','poliisiya','police'],['ප්‍රවේසමෙන්','praweesamen','take care!']]},
{t:'mc',q:'මගේ බෑග් එක නැති වුණා means…',o:['my bag is lost','my bag is new','I found a bag','carry my bag'],a:0},
{t:'wb',q:'Say: I need help',a:['මට','උදව්','ඕනැ'],pool:['මට','උදව්','ඕනැ','එපා']},
{t:'mc',q:'A friend leaves on a long trip. You call…',o:['ප්‍රවේසමෙන්!','පොලීසිය!','නැති වුණා!','උදව්!'],a:0}]},
{id:'si_help_2',title:'Hear it',step:'recognize',meta:'The protecting words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'උදව්','o':['උදව්','උදේ','උයනවා','වැඩ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට උදව් ඕනැ',o:['මට උදව් ඕනැ','උදව් කරන්න','මට උදව් එපා','උදව්'],a:0},
{t:'mc',q:'Which is "the police"?',o:['පොලීසිය','පොලිස් එක? — no, පොලීසිය','ඔෆිස් එක','ගුරුවරයා'],a:0},
{t:'mc',q:'නැති වුණා uses which verb?',o:['වුණා — became','ගියා — went','ආවා — came','කළා — did'],a:0},
{t:'li',q:'Listen — which word?',say:'ප්‍රවේසමෙන්',o:['ප්‍රවේසමෙන්','පොලීසිය','පස්සේ','පුළුවන්'],a:0},
{t:'mc',q:'ප්‍රවේසමෙන් යන්න means…',o:['go carefully','go quickly','do not go','go far'],a:0},
{t:'li',q:'Listen — which phrase?',say:'උදව් කරන්න',o:['උදව් කරන්න','අඩු කරන්න','වැඩ කරන්න','උදව් ඕනැ'],a:0}]},
{id:'si_help_3',title:'Build it',step:'build',meta:'Say it clearly',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['මට උදව් ඕනැ','I need help'],['උදව් කරන්න','please help'],['පොලීසිය','police'],['ප්‍රවේසමෙන්','take care!']]},
{t:'wb',q:'Report: my phone is lost',a:['මගේ','ෆෝන් එක','නැති','වුණා'],pool:['මගේ','ෆෝන් එක','නැති','වුණා','මතකයි']},
{t:'mc',q:'"Where is the police (station)?" =',o:['පොලීසිය කොහෙද','පොලීසිය කීයද','පොලීසිය කවුද','පොලීසියට'],a:0},
{t:'wb',q:'Ask a passerby: please help me — මට first',a:['මට','උදව්','කරන්න'],pool:['මට','උදව්','කරන්න','ඕනැ']},
{t:'li',q:'Listen — which phrase?',say:'නැති වුණා',o:['නැති වුණා','අමතක වුණා','නෑ','නැති'],a:0},
{t:'mc',q:'නැති වුණා vs අමතක වුණා:',o:['lost vs forgot','forgot vs lost','both lost','both forgot'],a:0}]},
{id:'si_help_4',title:'Mix it',step:'mix',meta:'Calm in a pinch',vocab:[],ex:[
{t:'mc',q:'Your bag is gone at the station. First words:',o:['මගේ බෑග් එක නැති වුණා — උදව් කරන්න','ප්‍රවේසමෙන්','ගිහින් එන්නම්','මට මතකයි'],a:0},
{t:'wb',q:'Ask: where is the police?',a:['පොලීසිය','කොහෙද'],pool:['පොලීසිය','කොහෙද','කවුද']},
{t:'li',q:'Listen — which phrase?',say:'මගේ ෆෝන් එක නැති වුණා',o:['මගේ ෆෝන් එක නැති වුණා','මගේ බෑග් එක නැති වුණා','ෆෝන් එක කොහෙද','නැති වුණා'],a:0},
{t:'mc',q:'Someone helps you kindly. You say…',o:['බොහොම ස්තූතියි — many thanks','ප්‍රවේසමෙන්','කමක් නෑ','හරි'],a:0},
{t:'li',q:'Listen — which word?',say:'පොලීසිය',o:['පොලීසිය','ප්‍රවේසමෙන්','පොත','පවුල'],a:0},
{t:'match',q:'Match situation and line',pairs:[['lost phone','නැති වුණා'],['need a hand','උදව් කරන්න'],['friend departing','ප්‍රවේසමෙන්'],['serious trouble','පොලීසිය කොහෙද']]},
{t:'mc',q:'Zone 9 gives you words that…',o:['connect thoughts & protect you','only order food','only tell time','decorate'],a:0}]},
{id:'si_help_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 9 complete?',vocab:[],ex:[
{t:'mc',q:'"Help" =',o:['උදව්','වැඩ','උදේ','පොලීසිය'],a:0},
{t:'wb',q:'Say: I need help',a:['මට','උදව්','ඕනැ'],pool:['මට','උදව්','ඕනැ','කරන්න']},
{t:'li',q:'Listen — which phrase?',say:'උදව් කරන්න',o:['උදව් කරන්න','මට උදව් ඕනැ','අඩු කරන්න','කරන්න'],a:0},
{t:'mc',q:'"Take care!" =',o:['ප්‍රවේසමෙන්','ප්‍රවේසම් නෑ','පොලීසිය','ගිහින් එන්නම්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'නැති වුණා',o:['නැති වුණා','වුණා','අමතක වුණා','නැති'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['උදව්','help'],['පොලීසිය','police'],['නැති වුණා','got lost'],['ප්‍රවේසමෙන්','carefully!']]}]},

/* ===================== ZONE 10 · YOUR SINHALA LIFE ===================== */
/* --- Topic 64: family round 2 --- */
{id:'si_fam',title:'The whole family',step:'learn',meta:'පවුල මහත්තයා නෝනා පුතා දුව',vocab:[['පවුල','pawula','family'],['මහත්තයා','mahaththayaa','husband (also: sir)'],['නෝනා','noonaa','wife (also: madam)'],['පුතා','puthaa','son (also: any dear boy)'],['දුව','dhuwa','daughter (also: any dear girl)'],['ළමයි','lamayi','children']],ex:[
{t:'note',tag:'The household',q:'පවුල',body:'<p><span class="deva">පවුල</span> <b>pawula</b> = family. <span class="deva">මහත්තයා</span> <b>mahaththayaa</b> = husband — and also "sir"! <span class="deva">නෝනා</span> <b>noonaa</b> = wife — and also "madam". Warm words wearing two hats, like your Zone 2 siblings.</p>',eg:[['පවුල','pawula','family'],['මහත්තයා','mahaththayaa','husband / sir'],['නෝනා','noonaa','wife / madam']]},
{t:'mc',q:'What does පවුල mean?',d:'පවුල',r:'pawula',o:['family','house','village','couple'],a:0},
{t:'mc',q:'මහත්තයා can mean…',d:'මහත්තයා',r:'mahaththayaa',o:['husband AND sir','only husband','only teacher','grandfather'],a:0},
{t:'note',tag:'Dear ones',q:'පුතා · දුව · ළමයි',body:'<p><span class="deva">පුතා</span> <b>puthaa</b> = son · <span class="deva">දුව</span> <b>dhuwa</b> = daughter · <span class="deva">ළමයි</span> <b>lamayi</b> = children.</p><p>And here is the warmth again: elders call ANY young man <span class="deva">පුතා</span> and any young woman <span class="deva">දුව</span> — you may be adopted on a bus.</p>',eg:[['පුතා','puthaa','son'],['දුව','dhuwa','daughter'],['ළමයි','lamayi','children']]},
{t:'mc',q:'A granny on the bus calls you පුතා. She is being…',o:['warm — you are family now','rude','confused','formal'],a:0},
{t:'wb',q:'Say: the family is at home',a:['පවුල','ගෙදර','ඉන්නවා'],pool:['පවුල','ගෙදර','ඉන්නවා','තියෙනවා']},
{t:'mc',q:'"Children" =',o:['ළමයි','පුතා','දුව','පවුල'],a:0}]},
{id:'si_fam_2',title:'Hear them',step:'recognize',meta:'Family by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'පවුල',o:['පවුල','පුතා','පොත','පාර'],a:0},
{t:'li',q:'Listen — which word?',say:'නෝනා',o:['නෝනා','අම්මා','දුව','නම'],a:0},
{t:'mc',q:'Which means "daughter"?',o:['දුව','පුතා','නංගී','ළමයි'],a:0},
{t:'mc',q:'ළමයි ඉස්කෝලේ ගියා means…',o:['the children went to school','the children are at school','send the children','school is over'],a:0},
{t:'li',q:'Listen — which word?',say:'පුතා',o:['පුතා','පවුල','පූසා','දුව'],a:0},
{t:'mc',q:'The wife of the house is…',o:['නෝනා','මහත්තයා','අක්කා','දුව'],a:0},
{t:'li',q:'Listen — which word?',say:'ළමයි',o:['ළමයි','ළඟ','ලමයි? — same!','මලයි? — no'],a:0}]},
{id:'si_fam_3',title:'Build it',step:'build',meta:'Talk family',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['පවුල','family'],['මහත්තයා','husband'],['නෝනා','wife'],['ළමයි','children']]},
{t:'wb',q:'Say: the children are at home',a:['ළමයි','ගෙදර','ඉන්නවා'],pool:['ළමයි','ගෙදර','ඉන්නවා','හිටියා']},
{t:'mc',q:'"My son" =',o:['මගේ පුතා','මගේ දුව','පුතා මගේ','මට පුතා'],a:0},
{t:'wb',q:'Say: the daughter went to school',a:['දුව','ඉස්කෝලේට','ගියා'],pool:['දුව','ඉස්කෝලේට','ගියා','යනවා']},
{t:'li',q:'Listen — which word?',say:'මහත්තයා',o:['මහත්තයා','මහන්සියි','නෝනා','මතකයි'],a:0},
{t:'mc',q:'Addressing a shop’s lady-owner politely:',o:['නෝනා','දුව','ළමයි','ඔබ'],a:0}]},
{id:'si_fam_4',title:'Mix it',step:'mix',meta:'A full house',vocab:[],ex:[
{t:'mc',q:'මගේ පවුල ගමේ ඉන්නවා means…',d:'මගේ පවුල ගමේ ඉන්නවා',r:'magee pawula gamee innawaa',o:['my family lives in the village','my family visited the village','the village is my family','my family left the village'],a:0},
{t:'wb',q:'Say: mother cooked rice for the children — children get -ට!',a:['අම්මා','ළමයින්ට','බත්','උයනවා'],pool:['අම්මා','ළමයින්ට','බත්','උයනවා','ළමයි'],},
{t:'li',q:'Listen — which phrase?',say:'මගේ පවුල',o:['මගේ පවුල','මගේ පුතා','අපේ ගෙදර','පවුල'],a:0},
{t:'mc',q:'Old uncle to young you: පුතා, මෙතන එන්න. He wants you to…',o:['come here','go away','sit down','sing'],a:0},
{t:'li',q:'Listen — which word?',say:'දුව',o:['දුව','දුර','දවස','පුතා'],a:0},
{t:'match',q:'Match pair',pairs:[['මහත්තයා','husband'],['නෝනා','wife'],['පුතා','son'],['දුව','daughter']]},
{t:'mc',q:'Which Zone 2 warmth does පුතා/දුව continue?',o:['family words as address','the no-copula rule','echo answers','the dative'],a:0}]},
{id:'si_fam_5',title:'Checkpoint',step:'checkpoint',meta:'Family mastered?',vocab:[],ex:[
{t:'mc',q:'"Family" =',o:['පවුල','ගෙදර','ළමයි','අම්මා'],a:0},
{t:'wb',q:'Say: my family lives in the village',a:['මගේ','පවුල','ගමේ','ඉන්නවා'],pool:['මගේ','පවුල','ගමේ','ඉන්නවා','තියෙනවා']},
{t:'li',q:'Listen — which word?',say:'නෝනා',o:['නෝනා','මහත්තයා','දුව','අක්කා'],a:0},
{t:'mc',q:'"Son" =',o:['පුතා','දුව','මල්ලී','ළමයි'],a:0},
{t:'li',q:'Listen — which word?',say:'පවුල',o:['පවුල','පුතා','ළමයි','පූසා'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['පවුල','family'],['පුතා','son'],['දුව','daughter'],['ළමයි','children']]}]},

/* --- Topic 65: age & small talk --- */
{id:'si_age',title:'Age & small talk',step:'learn',meta:'වයස කීයද? බැඳලද? — friendly, not nosy!',vocab:[['වයස','wayasa','age'],['ඔයාගේ වයස කීයද','oyaagee wayasa kiiyadha','how old are you?'],['මට අවුරුදු විස්සයි','mata awurudhu wissayi','I am twenty'],['බැඳලද','baendhaladha','are you married?'],['ළමයි ඉන්නවද','lamayi innawadha','do you have children?']],ex:[
{t:'note',tag:'The friendly trio',q:'age · married · children',body:'<p>New Lankan friends will ask, beaming: <span class="deva">ඔයාගේ වයස කීයද</span> — how old are you? <span class="deva">බැඳලද</span> <b>baendhaladha</b> — married? (literally TIED — your -ලා form!) <span class="deva">ළමයි ඉන්නවද</span> — children?</p><p>This is not nosy here — it is how strangers become family. Answer lightly, ask back!</p>',eg:[['ඔයාගේ වයස කීයද','oyaagee wayasa kiiyadha','how old are you?'],['බැඳලද','baendhaladha','married?'],['ළමයි ඉන්නවද','lamayi innawadha','any children?']]},
{t:'mc',q:'බැඳලද literally asks if you are…',d:'බැඳලද',r:'baendhaladha',o:['tied — married','tired','busy','tall'],a:0},
{t:'mc',q:'These questions in Lanka are…',o:['normal friendliness','rude','police matters','only for elders'],a:0},
{t:'note',tag:'Saying your age',q:'මට අවුරුදු විස්සයි',body:'<p>Age rides the dative (of course): <span class="deva">මට අවුරුදු විස්සයි</span> <b>mata awurudhu wissayi</b> — to-me years twenty-are = I am twenty.</p><p><span class="deva">අවුරුදු</span> is <span class="deva">අවුරුද්ද</span> in its combining coat, like <span class="deva">විසි</span> from <span class="deva">විස්ස</span>.</p>',eg:[['මට අවුරුදු විස්සයි','mata awurudhu wissayi','I am 20'],['මට අවුරුදු තිහයි','mata awurudhu thihayi','I am 30']]},
{t:'mc',q:'මට අවුරුදු තිහයි means…',o:['I am thirty','I have thirty rupees','thirty years ago','my thirtieth year was hard'],a:0},
{t:'wb',q:'Answer: I am twenty',a:['මට','අවුරුදු','විස්සයි'],pool:['මට','අවුරුදු','විස්සයි','විස්ස']},
{t:'mc',q:'Married? — you are. Warm echo:',o:['බැඳලා','බැන්දේ නෑ','ඔව් ඔව් ඔව්','ළමයි'],a:0}]},
{id:'si_age_2',title:'Hear it',step:'recognize',meta:'Small talk by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'වයස',o:['වයස','වැඩ','වතුර','අවුරුදු'],a:0},
{t:'li',q:'Listen — which phrase?',say:'බැඳලද',o:['බැඳලද','බැඳලා','ළමයි ඉන්නවද','කාලද'],a:0},
{t:'mc',q:'Which asks about children?',o:['ළමයි ඉන්නවද','ළමයි කීයද','ළමයි කොහෙද','ළමයි ද'],a:0},
{t:'mc',q:'ඔයාගේ වයස කීයද uses කීයද because age is…',o:['a number','a secret','a place','a name'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට අවුරුදු විස්සයි',o:['මට අවුරුදු විස්සයි','මට අවුරුදු තිහයි','අවුරුදු විස්ස','මට විස්සයි'],a:0},
{t:'mc',q:'Unmarried? The echo:',o:['බැන්දේ නෑ','බැඳලා','නෑ නෑ නෑ','එපා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ළමයි ඉන්නවද',o:['ළමයි ඉන්නවද','ළමයි ඉන්නවා','බැඳලද','ළමයි කීයද'],a:0}]},
{id:'si_age_3',title:'Build it',step:'build',meta:'Answer & ask back',vocab:[],ex:[
{t:'match',q:'Match question and topic',pairs:[['වයස කීයද','age'],['බැඳලද','marriage'],['ළමයි ඉන්නවද','children'],['කොහෙන්ද','origins']]},
{t:'wb',q:'Ask: how old are you?',a:['ඔයාගේ','වයස','කීයද'],pool:['ඔයාගේ','වයස','කීයද','කීයටද']},
{t:'mc',q:'"I am forty" =',o:['මට අවුරුදු හතළිහයි','මට අවුරුදු හතරයි','මම හතළිහ','අවුරුදු හතළිහ'],a:0},
{t:'wb',q:'Answer: yes, two children — ඉන්නවා + දෙන්නෙක්? Simply:',a:['ළමයි','දෙන්නෙක්','ඉන්නවා'],pool:['ළමයි','දෙන්නෙක්','ඉන්නවා','දෙකක්']},
{t:'li',q:'Listen — which phrase?',say:'ඔයාගේ වයස කීයද',o:['ඔයාගේ වයස කීයද','වයස කීයද','ඔයාගේ නම මොකක්ද','මට අවුරුදු විස්සයි'],a:0},
{t:'mc',q:'People are counted with -නෙක්: two children =',o:['දෙන්නෙක්','දෙකක්','දෙකයි','දෙක'],a:0}]},
{id:'si_age_4',title:'Mix it',step:'mix',meta:'Bus-seat friendship',vocab:[],ex:[
{t:'mc',q:'The aunty beside you smiles: බැඳලද? A cheerful truthful no:',o:['නෑ — බැන්දේ නෑ','ඔව් — බැන්දේ නෑ','එපා','මට බෑ'],a:0},
{t:'wb',q:'Ask back politely: and your children? — ඔයාගේ ළමයි ඉන්නවද',a:['ඔයාගේ','ළමයි','ඉන්නවද'],pool:['ඔයාගේ','ළමයි','ඉන්නවද','කීයද']},
{t:'li',q:'Listen — which phrase?',say:'බැඳලා',o:['බැඳලා','බැඳලද','බැන්දේ නෑ','කාලා'],a:0},
{t:'mc',q:'She says පුතා දෙන්නෙක් දුව එක්කෙනෙක්. She has…',o:['two sons and a daughter','one son and two daughters','three daughters','no children'],a:0},
{t:'li',q:'Listen — which word?',say:'අවුරුදු',o:['අවුරුදු','අවුරුද්ද','වයස','විස්ස'],a:0},
{t:'match',q:'Match answer and question',pairs:[['මට අවුරුදු තිහයි','වයස කීයද'],['බැඳලා','බැඳලද'],['ළමයි ඉන්නවා','ළමයි ඉන්නවද'],['මම ඇමරිකාවෙන්','කොහෙන්ද']]},
{t:'mc',q:'The small-talk trio turns strangers into…',o:['family','customers','rivals','statistics'],a:0}]},
{id:'si_age_5',title:'Checkpoint',step:'checkpoint',meta:'Small talk mastered?',vocab:[],ex:[
{t:'mc',q:'"Age" =',o:['වයස','අවුරුද්ද','වැඩ','නම'],a:0},
{t:'wb',q:'Answer: I am twenty',a:['මට','අවුරුදු','විස්සයි'],pool:['මට','අවුරුදු','විස්සයි','තිහයි']},
{t:'li',q:'Listen — which phrase?',say:'බැඳලද',o:['බැඳලද','බැඳලා','කාලද','ඉන්නවද'],a:0},
{t:'mc',q:'"Do you have children?" =',o:['ළමයි ඉන්නවද','ළමයි තියෙනවද','ළමයි කීයද','ළමයිද'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මට අවුරුදු විස්සයි',o:['මට අවුරුදු විස්සයි','මට අවුරුදු තිහයි','විස්සයි','මට විස්ස'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['වයස කීයද','how old?'],['බැඳලද','married?'],['ළමයි ඉන්නවද','children?'],['මට අවුරුදු විස්සයි','I am 20']]}]},

/* --- Topic 66: not yet --- */
{id:'si_yet',title:'Not yet: තාම',step:'learn',meta:'තාම නෑ — the gentlest answer',vocab:[['තාම','thaama','still / yet'],['තාම නෑ','thaama naee','not yet'],['මම තාම ඉගෙනගන්නවා','mama thaama igenagannawaa','I am still learning'],['ඉගෙනගන්නවා','igenagannawaa','learns'],['තාම කාලා නෑ','thaama kaalaa naee','have not eaten yet']],ex:[
{t:'note',tag:'Still & yet',q:'තාම',body:'<p>One little word holds both STILL and YET: <span class="deva">තාම</span> <b>thaama</b>.</p><p><span class="deva">තාම නෑ</span> — not yet! The perfect gentle answer to <span class="deva">බැඳලද?</span> and half of life’s other questions. <span class="deva">බත් කාලද?</span> — <span class="deva">තාම නෑ</span>.</p>',eg:[['තාම','thaama','still / yet'],['තාම නෑ','thaama naee','not yet'],['තාම කාලා නෑ','thaama kaalaa naee','not eaten yet']]},
{t:'mc',q:'What does තාම නෑ mean?',d:'තාම නෑ',r:'thaama naee',o:['not yet','never','not at all','still yes'],a:0},
{t:'mc',q:'බත් කාලද? — you are about to eat:',o:['තාම නෑ','කාලා','කෑවේ නෑ','එපා'],a:0},
{t:'note',tag:'Still learning',q:'ඉගෙනගන්නවා',body:'<p><span class="deva">ඉගෙනගන්නවා</span> <b>igenagannawaa</b> = learn (another verb with <span class="deva">ගන්නවා</span> tucked inside — you TAKE knowledge!).</p><p>Your new favorite sentence: <span class="deva">මම තාම සිංහල ඉගෙනගන්නවා</span> — I am still learning Sinhala. Instant smiles, instant patience, instant friends.</p>',eg:[['ඉගෙනගන්නවා','igenagannawaa','learns'],['මම තාම සිංහල ඉගෙනගන්නවා','mama thaama sinhala igenagannawaa','I am still learning Sinhala']]},
{t:'mc',q:'මම තාම සිංහල ඉගෙනගන්නවා means…',o:['I am still learning Sinhala','I have finished Sinhala','I teach Sinhala','I forgot Sinhala'],a:0},
{t:'wb',q:'Say: I am still learning Sinhala',a:['මම','තාම','සිංහල','ඉගෙනගන්නවා'],pool:['මම','තාම','සිංහල','ඉගෙනගන්නවා','පුළුවන්'],},
{t:'mc',q:'Which verb hides inside ඉගෙනගන්නවා?',o:['ගන්නවා','දෙනවා','යනවා','කනවා'],a:0}]},
{id:'si_yet_2',title:'Hear it',step:'recognize',meta:'Yet by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'තාම',o:['තාම','තව','දැන්','මාම? — no'],a:0},
{t:'li',q:'Listen — which phrase?',say:'තාම නෑ',o:['තාම නෑ','තව නෑ','නෑ','තාම'],a:0},
{t:'mc',q:'Which means "learns"?',o:['ඉගෙනගන්නවා','නිදාගන්නවා','ගන්නවා','දන්නවා'],a:0},
{t:'mc',q:'තාම vs දැන්:',o:['still vs now','now vs still','both now','both still'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම තාම සිංහල ඉගෙනගන්නවා',o:['මම තාම සිංහල ඉගෙනගන්නවා','මට සිංහල පුළුවන්','මම සිංහල ඉගෙනගන්නවා','තාම නෑ'],a:0},
{t:'mc',q:'තාම කාලා නෑ combines තාම with which zone’s form?',o:['Zone 7’s -ලා perfect','Zone 3’s -න්නේ නෑ','Zone 5’s -යි','Zone 4’s -ට'],a:0},
{t:'li',q:'Listen — which word?',say:'ඉගෙනගන්නවා',o:['ඉගෙනගන්නවා','නිදාගන්නවා','ගන්නවා','ඉන්නවා'],a:0}]},
{id:'si_yet_3',title:'Build it',step:'build',meta:'The graceful not-yet',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['තාම','still / yet'],['තාම නෑ','not yet'],['ඉගෙනගන්නවා','learns'],['තාම කාලා නෑ','not eaten yet']]},
{t:'wb',q:'Answer: not eaten yet',a:['තාම','කාලා','නෑ'],pool:['තාම','කාලා','නෑ','කෑවා']},
{t:'mc',q:'"The train has not come yet" =',o:['කෝච්චිය තාම ආවේ නෑ','කෝච්චිය තාම එනවා','කෝච්චිය ආවා','කෝච්චිය තාම ගියා'],a:0},
{t:'wb',q:'Say: the children are still at school',a:['ළමයි','තාම','ඉස්කෝලේ'],pool:['ළමයි','තාම','ඉස්කෝලේ','ගියා'],},
{t:'li',q:'Listen — which phrase?',say:'තාම කාලා නෑ',o:['තාම කාලා නෑ','තාම නෑ','කාලා','බත් කාලද'],a:0},
{t:'mc',q:'බැඳලද? — the gentle classic:',o:['තාම නෑ','බෑ','එපා','නෙමෙයි'],a:0}]},
{id:'si_yet_4',title:'Mix it',step:'mix',meta:'Patience, patience',vocab:[],ex:[
{t:'mc',q:'Someone rattles off fast Sinhala. Your shield:',o:['මම තාම සිංහල ඉගෙනගන්නවා — හෙමින් කියන්න?','මට සිංහල පුළුවන්!','තාම නෑ','ගිහින් එන්නම්'],a:0},
{t:'wb',q:'Say: I have not gone to Colombo yet — start මම',a:['මම','තාම','කොළඹට','ගිහිල්ලා','නෑ'],pool:['මම','තාම','කොළඹට','ගිහිල්ලා','නෑ','ගියා'],},
{t:'li',q:'Listen — which phrase?',say:'තාම ආවේ නෑ',o:['තාම ආවේ නෑ','තාම ගියේ නෑ','ආවේ නෑ','තාම නෑ'],a:0},
{t:'mc',q:'ළමයි තාම නිදාගන්නවා — the house should be…',o:['quiet','loud','empty','open'],a:0},
{t:'li',q:'Listen — which word?',say:'තාම',o:['තාම','තව','දැන්','අද'],a:0},
{t:'match',q:'Match question and not-yet answer',pairs:[['බත් කාලද','තාම නෑ'],['කෝච්චිය ආවද','තාම ආවේ නෑ'],['බැඳලද','තාම නෑ!'],['වැඩ කරලාද','තාම කරලා නෑ']]},
{t:'mc',q:'තාම plus your perfect -ලා gives you…',o:['the have-not-yet-done pattern','the future','commands','plurals'],a:0}]},
{id:'si_yet_5',title:'Checkpoint',step:'checkpoint',meta:'Not-yet mastered?',vocab:[],ex:[
{t:'mc',q:'"Not yet" =',o:['තාම නෑ','තව නෑ','දැන් නෑ','නෑ තාම? — order!'],a:0},
{t:'wb',q:'Say: I am still learning Sinhala',a:['මම','තාම','සිංහල','ඉගෙනගන්නවා'],pool:['මම','තාම','සිංහල','ඉගෙනගන්නවා','දන්නවා'],},
{t:'li',q:'Listen — which phrase?',say:'තාම නෑ',o:['තාම නෑ','තාම','නෑ','තව එකක්'],a:0},
{t:'mc',q:'"Learns" =',o:['ඉගෙනගන්නවා','ගන්නවා','දන්නවා','හිතනවා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම තාම ඉගෙනගන්නවා',o:['මම තාම ඉගෙනගන්නවා','මම ඉගෙනගන්නවා','තාම කාලා නෑ','මම තාම'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['තාම','still'],['තාම නෑ','not yet'],['ඉගෙනගන්නවා','learns'],['තාම ආවේ නෑ','not come yet']]}]},

/* --- Topic 67: language talk --- */
{id:'si_lang',title:'Language talk',step:'learn',meta:'හෙමින් කියන්න · ආයෙත් කියන්න',vocab:[['හෙමින්','hemin','slowly'],['හෙමින් කියන්න','hemin kiyanna','say it slowly'],['ආයෙත්','aayeth','again'],['ආයෙත් කියන්න','aayeth kiyanna','say it again'],['සිංහලෙන් මොකක්ද','sinhalen mokakdha','what is it in Sinhala?']],ex:[
{t:'note',tag:'Your two rescues',q:'හෙමින් & ආයෙත්',body:'<p>The learner’s twin lifelines: <span class="deva">හෙමින් කියන්න</span> <b>hemin kiyanna</b> — say it slowly · <span class="deva">ආයෙත් කියන්න</span> <b>aayeth kiyanna</b> — say it again.</p><p>Both ride your -න්න command from Zone 7. Sri Lankans LOVE being asked — patience arrives with a smile.</p>',eg:[['හෙමින් කියන්න','hemin kiyanna','say it slowly'],['ආයෙත් කියන්න','aayeth kiyanna','say it again']]},
{t:'mc',q:'හෙමින් කියන්න means…',d:'හෙමින් කියන්න',r:'hemin kiyanna',o:['say it slowly','say it loudly','stop talking','speak English'],a:0},
{t:'mc',q:'"Say it again" =',o:['ආයෙත් කියන්න','හෙමින් කියන්න','කියන්න එපා','මොකක්ද'],a:0},
{t:'note',tag:'Harvesting words',q:'සිංහලෙන් මොකක්ද',body:'<p>Point at anything and harvest its name: <span class="deva">සිංහලෙන් මොකක්ද</span> <b>sinhalen mokakdha</b> — what is it in Sinhala? (<span class="deva">සිංහලෙන්</span> — IN/FROM Sinhala, your -එන් ending!)</p><p>This one question can teach you the whole island.</p>',eg:[['සිංහලෙන් මොකක්ද','sinhalen mokakdha','what is it in Sinhala?'],['මේක සිංහලෙන් මොකක්ද','meeka sinhalen mokakdha','what is this in Sinhala?']]},
{t:'mc',q:'මේක සිංහලෙන් මොකක්ද asks…',o:['what is this in Sinhala?','do you speak Sinhala?','is this Sinhala?','who speaks Sinhala?'],a:0},
{t:'wb',q:'Ask: say it slowly please',a:['හෙමින්','කියන්න'],pool:['හෙමින්','කියන්න','ආයෙත්']},
{t:'mc',q:'සිංහලෙන් uses which little ending?',o:['-එන් — in / from','-ට — to','-ගේ — of','-යි — is'],a:0}]},
{id:'si_lang_2',title:'Hear it',step:'recognize',meta:'Rescue lines by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'හෙමින්',o:['හෙමින්','ආයෙත්','හෙට','හවස'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ආයෙත් කියන්න',o:['ආයෙත් කියන්න','හෙමින් කියන්න','කියන්න','ආයෙත්'],a:0},
{t:'mc',q:'Which means "again"?',o:['ආයෙත්','හෙමින්','තාම','තව'],a:0},
{t:'mc',q:'Too fast! Your line:',o:['හෙමින් කියන්න','ඉක්මනට කියන්න','කියන්න එපා','මොකක්ද'],a:0},
{t:'li',q:'Listen — which phrase?',say:'සිංහලෙන් මොකක්ද',o:['සිංහලෙන් මොකක්ද','සිංහල පුළුවන්ද','මොකක්ද','සිංහලෙන්'],a:0},
{t:'mc',q:'ආයෙත් + your -laa form: ආයෙත් කාලා?! means…',o:['eaten AGAIN — the second lunch','never eaten','not yet','eat slowly'],a:0},
{t:'li',q:'Listen — which phrase?',say:'හෙමින් කියන්න',o:['හෙමින් කියන්න','ආයෙත් කියන්න','හෙමින්','කියන්න'],a:0}]},
{id:'si_lang_3',title:'Build it',step:'build',meta:'Learn out loud',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['හෙමින් කියන්න','say it slowly'],['ආයෙත් කියන්න','say it again'],['සිංහලෙන් මොකක්ද','what is it in Sinhala?'],['මට තේරෙන්නේ නෑ','I do not understand']]},
{t:'wb',q:'Ask: what is this in Sinhala?',a:['මේක','සිංහලෙන්','මොකක්ද'],pool:['මේක','සිංහලෙන්','මොකක්ද','සිංහල']},
{t:'mc',q:'"Please say it again slowly" =',o:['ආයෙත් හෙමින් කියන්න','හෙමින් ආයෙත්','කියන්න කියන්න','ආයෙත් එපා'],a:0},
{t:'wb',q:'Ask: say it again please',a:['ආයෙත්','කියන්න'],pool:['ආයෙත්','කියන්න','අහන්න']},
{t:'li',q:'Listen — which word?',say:'ආයෙත්',o:['ආයෙත්','ඒත්','අතන','ආවා'],a:0},
{t:'mc',q:'After they repeat slowly and you get it:',o:['දැන් තේරෙනවා — ස්තූතියි!','තාම නෑ','මට බෑ','ගිහින් එන්නම්'],a:0}]},
{id:'si_lang_4',title:'Mix it',step:'mix',meta:'The learner’s toolkit',vocab:[],ex:[
{t:'mc',q:'Granny names a fruit you never heard. Harvest it:',o:['ආයෙත් කියන්න — හෙමින්','ඔව් ඔව්','එපා','මට මතකයි'],a:0},
{t:'wb',q:'Say the full rescue: I am still learning — say it slowly',a:['මම','තාම','ඉගෙනගන්නවා','—','හෙමින්','කියන්න'],pool:['මම','තාම','ඉගෙනගන්නවා','—','හෙමින්','කියන්න','ආයෙත්'],},
{t:'li',q:'Listen — which phrase?',say:'මේක සිංහලෙන් මොකක්ද',o:['මේක සිංහලෙන් මොකක්ද','සිංහලෙන් මොකක්ද','මේක මොකක්ද','මේක සිංහලද'],a:0},
{t:'mc',q:'They answer අඹ! You already knew it from…',o:['Zone 1 — the half-nasals','Zone 5 — money','Zone 8 — tickets','nowhere'],a:0},
{t:'li',q:'Listen — which word?',say:'සිංහලෙන්',o:['සිංහලෙන්','සිංහල','හෙමින්','ලංකාවෙන්'],a:0},
{t:'match',q:'Match need and line',pairs:[['too fast','හෙමින් කියන්න'],['missed it','ආයෙත් කියන්න'],['new thing','සිංහලෙන් මොකක්ද'],['got it!','දැන් තේරෙනවා']]},
{t:'mc',q:'The best classroom on the island is…',o:['every conversation','a book','an app alone','silence'],a:0}]},
{id:'si_lang_5',title:'Checkpoint',step:'checkpoint',meta:'Language talk mastered?',vocab:[],ex:[
{t:'mc',q:'"Slowly" =',o:['හෙමින්','ආයෙත්','තාම','ළඟ'],a:0},
{t:'wb',q:'Ask: what is this in Sinhala?',a:['මේක','සිංහලෙන්','මොකක්ද'],pool:['මේක','සිංහලෙන්','මොකක්ද','කොහෙද']},
{t:'li',q:'Listen — which phrase?',say:'ආයෙත් කියන්න',o:['ආයෙත් කියන්න','හෙමින් කියන්න','ආයෙත්','කියන්න එපා'],a:0},
{t:'mc',q:'"Say it slowly" =',o:['හෙමින් කියන්න','ආයෙත් කියන්න','හෙමින් යන්න','කියන්න'],a:0},
{t:'li',q:'Listen — which word?',say:'ආයෙත්',o:['ආයෙත්','ඒත්','අද','ආවා'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['හෙමින්','slowly'],['ආයෙත්','again'],['සිංහලෙන්','in Sinhala'],['කියන්න','say it!']]}]},

/* --- Topic 68: at home --- */
{id:'si_house',title:'At home',step:'learn',meta:'කුස්සිය වත්ත බල්ලා පූසා',vocab:[['කුස්සිය','kussiya','kitchen'],['වත්ත','waththa','garden / compound'],['බල්ලා','ballaa','dog'],['පූසා','puusaa','cat'],['බල්ලා වත්තේ ඉන්නවා','ballaa waththee innawaa','the dog is in the garden']],ex:[
{t:'note',tag:'Heart of the house',q:'කුස්සිය & වත්ත',body:'<p><span class="deva">කුස්සිය</span> <b>kussiya</b> = kitchen — where everything happens. <span class="deva">වත්ත</span> <b>waththa</b> = the garden compound around a Lankan home: coconut, banana, jak, a well.</p><p><span class="deva">අම්මා කුස්සියේ ඉන්නවා</span> — mother is in the kitchen.</p>',eg:[['කුස්සිය','kussiya','kitchen'],['වත්ත','waththa','garden'],['අම්මා කුස්සියේ ඉන්නවා','ammaa kussiyee innawaa','mother is in the kitchen']]},
{t:'mc',q:'What does කුස්සිය mean?',d:'කුස්සිය',r:'kussiya',o:['kitchen','garden','room','well'],a:0},
{t:'mc',q:'A Lankan වත්ත typically holds…',o:['coconut, banana and a well','a parking lot','snow','nothing'],a:0},
{t:'note',tag:'The residents',q:'බල්ලා & පූසා',body:'<p><span class="deva">බල්ලා</span> <b>ballaa</b> = dog · <span class="deva">පූසා</span> <b>puusaa</b> = cat. Living things — so they take <span class="deva">ඉන්නවා</span>, of course.</p><p><span class="deva">බල්ලා වත්තේ ඉන්නවා</span> — the dog is in the garden · <span class="deva">පූසා කුස්සියේ!</span> — the cat is in the kitchen (naturally, near the fish).</p>',eg:[['බල්ලා','ballaa','dog'],['පූසා','puusaa','cat'],['බල්ලා වත්තේ ඉන්නවා','ballaa waththee innawaa','the dog is in the garden']]},
{t:'mc',q:'What does පූසා mean?',d:'පූසා',r:'puusaa',o:['cat','dog','bird','goat'],a:0},
{t:'wb',q:'Say: the dog is in the garden',a:['බල්ලා','වත්තේ','ඉන්නවා'],pool:['බල්ලා','වත්තේ','ඉන්නවා','තියෙනවා']},
{t:'mc',q:'Animals take ඉන්නවා because they are…',o:['living beings','fast','small','loud'],a:0}]},
{id:'si_house_2',title:'Hear it',step:'recognize',meta:'Around the house',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'කුස්සිය',o:['කුස්සිය','පූසා','කෝච්චිය','වත්ත'],a:0},
{t:'li',q:'Listen — which word?',say:'බල්ලා',o:['බල්ලා','පූසා','ළමයි','බත්'],a:0},
{t:'mc',q:'Which is the garden?',o:['වත්ත','කුස්සිය','ගෙදර','පාර'],a:0},
{t:'mc',q:'පූසා කුස්සියේ ඉන්නවා — the cat is…',o:['in the kitchen','in the garden','on the roof','lost'],a:0},
{t:'li',q:'Listen — which word?',say:'පූසා',o:['පූසා','පුතා','බල්ලා','පවුල'],a:0},
{t:'mc',q:'වත්තේ is වත්ත wearing…',o:['the -ේ "in/at" coat','the -ට "to"','the -ක් "a"','nothing new'],a:0},
{t:'li',q:'Listen — which phrase?',say:'බල්ලා වත්තේ ඉන්නවා',o:['බල්ලා වත්තේ ඉන්නවා','පූසා කුස්සියේ ඉන්නවා','බල්ලා ඉන්නවා','වත්තේ'],a:0}]},
{id:'si_house_3',title:'Build it',step:'build',meta:'Who is where at home',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['කුස්සිය','kitchen'],['වත්ත','garden'],['බල්ලා','dog'],['පූසා','cat']]},
{t:'wb',q:'Say: mother is in the kitchen',a:['අම්මා','කුස්සියේ','ඉන්නවා'],pool:['අම්මා','කුස්සියේ','ඉන්නවා','උයනවා']},
{t:'mc',q:'"The cat is under the chair" =',o:['පූසා පුටුව යට ඉන්නවා','පූසා පුටුව උඩ ඉන්නවා','පූසා පුටුව යට තියෙනවා','පුටුව පූසා යට'],a:0},
{t:'wb',q:'Say: the children are in the garden',a:['ළමයි','වත්තේ','ඉන්නවා'],pool:['ළමයි','වත්තේ','ඉන්නවා','කුස්සියේ']},
{t:'li',q:'Listen — which word?',say:'වත්ත',o:['වත්ත','වත්තේ','වතුර','වයස'],a:0},
{t:'mc',q:'අම්මා කුස්සියේ බත් උයනවා ties together zones…',o:['home + places + daily verbs','only food','only family','none'],a:0}]},
{id:'si_house_4',title:'Mix it',step:'mix',meta:'A living compound',vocab:[],ex:[
{t:'mc',q:'Fish disappears from the kitchen. Chief suspect:',o:['පූසා','බල්ලා','ළමයි','අයියා'],a:0},
{t:'wb',q:'Say: the dog was in the garden — past!',a:['බල්ලා','වත්තේ','හිටියා'],pool:['බල්ලා','වත්තේ','හිටියා','ඉන්නවා']},
{t:'li',q:'Listen — which phrase?',say:'පූසා කුස්සියේ ඉන්නවා',o:['පූසා කුස්සියේ ඉන්නවා','බල්ලා වත්තේ ඉන්නවා','පූසා ඉන්නවා','අම්මා කුස්සියේ ඉන්නවා'],a:0},
{t:'mc',q:'Guests arrive; the dog barks. You call:',o:['බල්ලා! ඉන්න!','පූසා! එන්න!','ළමයි! යන්න!','අම්මා! බලන්න!'],a:0},
{t:'li',q:'Listen — which word?',say:'කුස්සියේ',o:['කුස්සියේ','කුස්සිය','වත්තේ','කඩේ'],a:0},
{t:'match',q:'Match resident and haunt',pairs:[['අම්මා','කුස්සිය'],['බල්ලා','වත්ත'],['පූසා','wherever it likes'],['ළමයි','ඉස්කෝලේ']]},
{t:'mc',q:'The -ේ on කුස්සියේ / වත්තේ / ගමේ marks…',o:['in / at a place','to a place','from a place','ownership'],a:0}]},
{id:'si_house_5',title:'Checkpoint',step:'checkpoint',meta:'Home mastered?',vocab:[],ex:[
{t:'mc',q:'"Kitchen" =',o:['කුස්සිය','වත්ත','කාමරය','ගෙදර'],a:0},
{t:'wb',q:'Say: the cat is in the kitchen',a:['පූසා','කුස්සියේ','ඉන්නවා'],pool:['පූසා','කුස්සියේ','ඉන්නවා','වත්තේ']},
{t:'li',q:'Listen — which word?',say:'බල්ලා',o:['බල්ලා','පූසා','බත්','ළමයි'],a:0},
{t:'mc',q:'"Garden / compound" =',o:['වත්ත','කුස්සිය','පාර','ගම'],a:0},
{t:'li',q:'Listen — which word?',say:'පූසා',o:['පූසා','පුතා','පාර','බල්ලා'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['කුස්සිය','kitchen'],['වත්ත','garden'],['බල්ලා','dog'],['පූසා','cat']]}]},

/* --- Topic 69: plans & the week --- */
{id:'si_weekpl',title:'Plans & the week',step:'learn',meta:'අනිද්දා පෙරේදා සති අන්තය',vocab:[['අනිද්දා','anidhdhaa','day after tomorrow'],['පෙරේදා','pereedhaa','day before yesterday'],['සති අන්තය','sathi anthaya','the weekend'],['මම හෙට ගමට යනවා','mama heta gamata yanawaa','I am going to the village tomorrow']],ex:[
{t:'note',tag:'Two more days',q:'අනිද්දා & පෙරේදා',body:'<p>Sinhala keeps single words where English needs phrases: <span class="deva">අනිද්දා</span> <b>anidhdhaa</b> = the day AFTER tomorrow · <span class="deva">පෙරේදා</span> <b>pereedhaa</b> = the day BEFORE yesterday.</p><p>Your timeline: <span class="deva">පෙරේදා — ඊයේ — අද — හෙට — අනිද්දා</span>.</p>',eg:[['අනිද්දා','anidhdhaa','day after tomorrow'],['පෙරේදා','pereedhaa','day before yesterday']]},
{t:'mc',q:'What does අනිද්දා mean?',d:'අනිද්දා',r:'anidhdhaa',o:['day after tomorrow','tomorrow','day before yesterday','next week'],a:0},
{t:'mc',q:'The full timeline, oldest first:',o:['පෙරේදා ඊයේ අද හෙට අනිද්දා','අනිද්දා හෙට අද ඊයේ පෙරේදා','අද හෙට ඊයේ','ඊයේ පෙරේදා අද'],a:0},
{t:'note',tag:'Weekend plans',q:'සති අන්තය',body:'<p><span class="deva">සති අන්තය</span> <b>sathi anthaya</b> = the weekend (week-END, literally!).</p><p>Present tense IS your future — plan away: <span class="deva">මම හෙට ගමට යනවා</span> — I am going to the village tomorrow · <span class="deva">සති අන්තයේ අපි මුහුදට යමු!</span></p>',eg:[['සති අන්තය','sathi anthaya','weekend'],['සති අන්තයේ අපි මුහුදට යමු','sathi anthayee api muhudhata yamu','let’s go to the sea this weekend']]},
{t:'mc',q:'සති අන්තය is built from…',o:['week + end','Saturday + Sunday','sun + rest','holiday + day'],a:0},
{t:'wb',q:'Plan: I am going to the village tomorrow',a:['මම','හෙට','ගමට','යනවා'],pool:['මම','හෙට','ගමට','යනවා','ගියා']},
{t:'mc',q:'Which zone taught you present = future too?',o:['Zone 3 — the freebie','Zone 7','Zone 5','none'],a:0}]},
{id:'si_weekpl_2',title:'Hear it',step:'recognize',meta:'Days ahead & behind',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'අනිද්දා',o:['අනිද්දා','පෙරේදා','ඉරිදා','අද'],a:0},
{t:'li',q:'Listen — which word?',say:'පෙරේදා',o:['පෙරේදා','අනිද්දා','ඊයේ','බදාදා'],a:0},
{t:'mc',q:'Which is "the weekend"?',o:['සති අන්තය','සතිය','සෙනසුරාදා','ඉරිදා'],a:0},
{t:'mc',q:'මම අනිද්දා එනවා means…',o:['I am coming the day after tomorrow','I came two days ago','I come every day','I am coming now'],a:0},
{t:'li',q:'Listen — which phrase?',say:'සති අන්තය',o:['සති අන්තය','සතිය','අන්තිමට','සිකුරාදා'],a:0},
{t:'mc',q:'පෙරේදා pairs with which tense?',o:['the past — ගියා කෑවා','the future','commands','none'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම හෙට ගමට යනවා',o:['මම හෙට ගමට යනවා','මම ඊයේ ගමට ගියා','අපි ගමට යමු','මම අනිද්දා එනවා'],a:0}]},
{id:'si_weekpl_3',title:'Build it',step:'build',meta:'Line up your days',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['පෙරේදා','day before yesterday'],['ඊයේ','yesterday'],['හෙට','tomorrow'],['අනිද්දා','day after tomorrow']]},
{t:'wb',q:'Plan: let’s go to the sea this weekend',a:['සති අන්තයේ','අපි','මුහුදට','යමු'],pool:['සති අන්තයේ','අපි','මුහුදට','යමු','ගමට']},
{t:'mc',q:'"I came the day before yesterday" =',o:['මම පෙරේදා ආවා','මම පෙරේදා එනවා','මම අනිද්දා ආවා','මම ඊයේ එනවා'],a:0},
{t:'wb',q:'Plan: he is coming the day after tomorrow',a:['එයා','අනිද්දා','එනවා'],pool:['එයා','අනිද්දා','එනවා','ආවා']},
{t:'li',q:'Listen — which word?',say:'සති අන්තයේ',o:['සති අන්තයේ','සති අන්තය','සතියේ','අන්තිමට'],a:0},
{t:'mc',q:'අනිද්දා + present verb =',o:['a future plan','a memory','a command','a question'],a:0}]},
{id:'si_weekpl_4',title:'Mix it',step:'mix',meta:'The week fills up',vocab:[],ex:[
{t:'mc',q:'Today is Friday. සති අන්තයේ මොනවද කරන්නේ? Dream answer:',o:['මුහුදට යනවා!','වැඩ විතරයි','නිදාගන්නවා විතරද','ඔෆිස් එකට'],a:0},
{t:'wb',q:'Recall: we went to the sea the day before yesterday',a:['අපි','පෙරේදා','මුහුදට','ගියා'],pool:['අපි','පෙරේදා','මුහුදට','ගියා','යනවා']},
{t:'li',q:'Listen — which word?',say:'අනිද්දා',o:['අනිද්දා','අද','ඉරිදා','පෙරේදා'],a:0},
{t:'mc',q:'හෙට වැඩ — අනිද්දා නිදහස්! (නිදහස් = free) You rest…',o:['the day after tomorrow','tomorrow','today','never'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අපි මුහුදට යමු',o:['අපි මුහුදට යමු','අපි ගමට යමු','මුහුදට ගියා','සති අන්තයේ'],a:0},
{t:'match',q:'Match day and deed',pairs:[['පෙරේදා','ගියා — went'],['අද','ඉන්නවා — home'],['හෙට','වැඩ — work'],['අනිද්දා','මුහුද — sea!']]},
{t:'mc',q:'One tense, five days, endless plans — thanks to…',o:['present-covers-future','six new endings','English','luck'],a:0}]},
{id:'si_weekpl_5',title:'Checkpoint',step:'checkpoint',meta:'Plans mastered?',vocab:[],ex:[
{t:'mc',q:'"Day after tomorrow" =',o:['අනිද්දා','පෙරේදා','හෙට','ඊයේ'],a:0},
{t:'wb',q:'Plan: I am going to Colombo the day after tomorrow',a:['මම','අනිද්දා','කොළඹට','යනවා'],pool:['මම','අනිද්දා','කොළඹට','යනවා','පෙරේදා']},
{t:'li',q:'Listen — which word?',say:'පෙරේදා',o:['පෙරේදා','අනිද්දා','ඉරිදා','ඊයේ'],a:0},
{t:'mc',q:'"The weekend" =',o:['සති අන්තය','සතිය','ඉරිදා','අන්තිමට'],a:0},
{t:'li',q:'Listen — which phrase?',say:'සති අන්තයේ අපි මුහුදට යමු',o:['සති අන්තයේ අපි මුහුදට යමු','අපි මුහුදට යමු','සති අන්තයේ','හෙට මුහුදට යනවා'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['පෙරේදා','2 days back'],['ඊයේ','yesterday'],['අනිද්දා','2 days ahead'],['සති අන්තය','weekend']]}]},

/* --- Topic 70: tell your day --- */
{id:'si_story',title:'Tell your story',step:'learn',meta:'ඉස්සෙල්ලා … ඊට පස්සේ … අන්තිමට',vocab:[['ඉස්සෙල්ලා','issellaa','first (of all)'],['ඊට පස්සේ','iita passee','after that'],['අන්තිමට','anthimata','finally / in the end'],['ඉස්සෙල්ලා මම කනවා','issellaa mama kanawaa','first I eat']],ex:[
{t:'note',tag:'Story glue',q:'ඉස්සෙල්ලා · ඊට පස්සේ · අන්තිමට',body:'<p>Three sign-posts turn sentences into a STORY: <span class="deva">ඉස්සෙල්ලා</span> <b>issellaa</b> — first · <span class="deva">ඊට පස්සේ</span> <b>iita passee</b> — after that (your Zone 2 <span class="deva">පස්සේ</span>, upgraded) · <span class="deva">අන්තිමට</span> <b>anthimata</b> — finally.</p>',eg:[['ඉස්සෙල්ලා','issellaa','first'],['ඊට පස්සේ','iita passee','after that'],['අන්තිමට','anthimata','finally']]},
{t:'mc',q:'What does ඉස්සෙල්ලා mean?',d:'ඉස්සෙල්ලා',r:'issellaa',o:['first','finally','after that','yesterday'],a:0},
{t:'mc',q:'"After that" =',o:['ඊට පස්සේ','ඉස්සෙල්ලා','අන්තිමට','ඒ නිසා'],a:0},
{t:'note',tag:'A day in order',q:'your first story',body:'<p>Put your Zone 9 day on the rails: <span class="deva">ඉස්සෙල්ලා මම නැගිටිනවා. ඊට පස්සේ මම නානවා. ඊට පස්සේ කනවා. අන්තිමට වැඩ කරනවා.</span></p><p>First I get up. Then I bathe. Then I eat. Finally — work. You just told a story in Sinhala.</p>',eg:[['ඉස්සෙල්ලා මම නැගිටිනවා','issellaa mama naegitinawaa','first I get up'],['ඊට පස්සේ මම නානවා','iita passee mama naanawaa','after that I bathe'],['අන්තිමට වැඩ කරනවා','anthimata waeda karanawaa','finally, work']]},
{t:'mc',q:'Which sign-post CLOSES a story?',o:['අන්තිමට','ඉස්සෙල්ලා','ඊට පස්සේ','නම්'],a:0},
{t:'wb',q:'Begin the story: first I get up',a:['ඉස්සෙල්ලා','මම','නැගිටිනවා'],pool:['ඉස්සෙල්ලා','මම','නැගිටිනවා','අන්තිමට']},
{t:'mc',q:'ඊට පස්සේ upgrades which old word?',o:['පස්සේ','ඉස්සර','පස්ස','පසේ'],a:0}]},
{id:'si_story_2',title:'Hear it',step:'recognize',meta:'Story flow by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ඉස්සෙල්ලා',o:['ඉස්සෙල්ලා','අන්තිමට','ඊට පස්සේ','ඉස්කෝලේ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඊට පස්සේ',o:['ඊට පස්සේ','පස්සේ','ඉස්සෙල්ලා','ඒ නිසා'],a:0},
{t:'mc',q:'Which means "finally"?',o:['අන්තිමට','ඉස්සෙල්ලා','ඊට පස්සේ','තාම'],a:0},
{t:'mc',q:'ඉස්සෙල්ලා කනවා — ඊට පස්සේ යනවා means…',o:['first eat, then go','go before eating','eat while going','never eat'],a:0},
{t:'li',q:'Listen — which word?',say:'අන්තිමට',o:['අන්තිමට','අනිද්දා','ඉස්සෙල්ලා','අතන'],a:0},
{t:'mc',q:'Story order:',o:['ඉස්සෙල්ලා → ඊට පස්සේ → අන්තිමට','අන්තිමට → ඉස්සෙල්ලා','ඊට පස්සේ first','any order'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ඉස්සෙල්ලා මම නැගිටිනවා',o:['ඉස්සෙල්ලා මම නැගිටිනවා','ඊට පස්සේ මම නානවා','මම නැගිටිනවා','අන්තිමට වැඩ'],a:0}]},
{id:'si_story_3',title:'Build it',step:'build',meta:'Chain a story',vocab:[],ex:[
{t:'match',q:'Match sign-post and meaning',pairs:[['ඉස්සෙල්ලා','first'],['ඊට පස්සේ','after that'],['අන්තිමට','finally'],['ඒ නිසා','therefore']]},
{t:'wb',q:'Continue: after that I bathe',a:['ඊට පස්සේ','මම','නානවා'],pool:['ඊට පස්සේ','මම','නානවා','ඉස්සෙල්ලා']},
{t:'mc',q:'"Finally I sleep" =',o:['අන්තිමට මම නිදාගන්නවා','ඉස්සෙල්ලා නිදාගන්නවා','ඊට පස්සේ නැගිටිනවා','අන්තිමට නැගිටිනවා'],a:0},
{t:'wb',q:'Tell yesterday: first we went to the sea — past!',a:['ඉස්සෙල්ලා','අපි','මුහුදට','ගියා'],pool:['ඉස්සෙල්ලා','අපි','මුහුදට','ගියා','යනවා']},
{t:'li',q:'Listen — which phrase?',say:'අන්තිමට වැඩ කරනවා',o:['අන්තිමට වැඩ කරනවා','ඉස්සෙල්ලා වැඩ කරනවා','වැඩ කරනවා','අන්තිමට'],a:0},
{t:'mc',q:'Stories also love your Zone 7 pasts — pick the story-past:',o:['ඉස්සෙල්ලා අපි කඩේට ගියා','ඉස්සෙල්ලා අපි කඩේට යනවා','කඩේට යමු','කඩේ ගිහිල්ලා'],a:0}]},
{id:'si_story_4',title:'Mix it',step:'mix',meta:'Yesterday, in order',vocab:[],ex:[
{t:'mc',q:'Open your tale of yesterday:',o:['ඉස්සෙල්ලා මම උදේට නැගිට්ටා','අන්තිමට මම නැගිට්ටා','ඊට පස්සේ','මම නැගිටිනවා හෙට'],a:0},
{t:'wb',q:'Middle: after that we ate hoppers',a:['ඊට පස්සේ','අපි','ආප්ප','කෑවා'],pool:['ඊට පස්සේ','අපි','ආප්ප','කෑවා','කනවා']},
{t:'li',q:'Listen — which phrase?',say:'ඊට පස්සේ මම නානවා',o:['ඊට පස්සේ මම නානවා','ඉස්සෙල්ලා මම නානවා','මම නානවා','ඊට පස්සේ'],a:0},
{t:'mc',q:'Close it warmly:',o:['අන්තිමට අපි ගෙදර ආවා','ඉස්සෙල්ලා ගෙදර','ඊට පස්සේ ඉස්සෙල්ලා','නම් ගෙදර'],a:0},
{t:'li',q:'Listen — which word?',say:'ඉස්සෙල්ලා',o:['ඉස්සෙල්ලා','අන්තිමට','ඉස්කෝලේ','ඊයේ'],a:0},
{t:'match',q:'Match story beat and line',pairs:[['opening','ඉස්සෙල්ලා නැගිට්ටා'],['middle','ඊට පස්සේ මුහුදට ගියා'],['turn','ඒත් වැස්ස ආවා!'],['ending','අන්තිමට ගෙදර ආවා']]},
{t:'mc',q:'Ten zones in — you can now…',o:['tell your whole day in Sinhala','only greet','only count','only order tea'],a:0}]},
{id:'si_story_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 10 complete?',vocab:[],ex:[
{t:'mc',q:'"First" =',o:['ඉස්සෙල්ලා','අන්තිමට','ඊට පස්සේ','ඉස්සර'],a:0},
{t:'wb',q:'Tell: first I get up — then finish your own way!',a:['ඉස්සෙල්ලා','මම','නැගිටිනවා'],pool:['ඉස්සෙල්ලා','මම','නැගිටිනවා','නිදාගන්නවා']},
{t:'li',q:'Listen — which phrase?',say:'ඊට පස්සේ',o:['ඊට පස්සේ','ඉස්සෙල්ලා','අන්තිමට','පස්සේ'],a:0},
{t:'mc',q:'"Finally we came home" =',o:['අන්තිමට අපි ගෙදර ආවා','ඉස්සෙල්ලා ගෙදර ආවා','අපි ගෙදර යමු','අන්තිමට ගෙදර යනවා'],a:0},
{t:'li',q:'Listen — which word?',say:'අන්තිමට',o:['අන්තිමට','අනිද්දා','ඉස්සෙල්ලා','අද'],a:0},
{t:'match',q:'Match sign-post and meaning',pairs:[['ඉස්සෙල්ලා','first'],['ඊට පස්සේ','after that'],['අන්තිමට','finally'],['තාම','still']]}]},

/* ===================== ZONE 11 · LITTLE EXTRAS ===================== */
/* --- Topic 71: pace --- */
{id:'si_pace',title:'Slow & fast',step:'learn',meta:'හෙමින් හෙමින් … ඉක්මනට!',vocab:[['ඉක්මනට','ikmanata','quickly'],['දැන්ම','dhaenma','right now'],['පරක්කු','parakku','late'],['මම පරක්කු වුණා','mama parakku wunaa','I am late'],['හෙමින් හෙමින්','hemin hemin','slowly slowly — no rush']],ex:[
{t:'note',tag:'Island tempo',q:'හෙමින් හෙමින්',body:'<p>You know <span class="deva">හෙමින්</span>. Doubled, it becomes a philosophy: <span class="deva">හෙමින් හෙමින්</span> <b>hemin hemin</b> — slowly-slowly, no rush, things will come.</p><p>The opposite: <span class="deva">ඉක්මනට</span> <b>ikmanata</b> — quickly! And <span class="deva">දැන්ම</span> <b>dhaenma</b> = RIGHT now (<span class="deva">දැන්</span> + the emphatic <span class="deva">ම</span>).</p>',eg:[['හෙමින් හෙමින්','hemin hemin','slowly slowly'],['ඉක්මනට','ikmanata','quickly'],['දැන්ම','dhaenma','right now']]},
{t:'mc',q:'What does ඉක්මනට mean?',d:'ඉක්මනට',r:'ikmanata',o:['quickly','slowly','later','right now'],a:0},
{t:'mc',q:'දැන්ම is දැන් plus…',o:['the emphatic ම','the question ද','the counter ක්','the dative ට'],a:0},
{t:'note',tag:'Running behind',q:'පරක්කු',body:'<p><span class="deva">පරක්කු</span> <b>parakku</b> = late: <span class="deva">මම පරක්කු වුණා</span> <b>mama parakku wunaa</b> — I am late! (<span class="deva">වුණා</span> = became — a handy little verb.)</p><p><span class="deva">බස් එක පරක්කුයි</span> — the bus is late. Say it with a shrug; the bus knows no clock.</p>',eg:[['මම පරක්කු වුණා','mama parakku wunaa','I am late'],['බස් එක පරක්කුයි','bas eka parakkuyi','the bus is late']]},
{t:'mc',q:'මම පරක්කු වුණා means…',d:'මම පරක්කු වුණා',r:'mama parakku wunaa',o:['I am late','I am early','I am fast','I waited'],a:0},
{t:'wb',q:'Say: come quickly!',a:['ඉක්මනට','එන්න'],pool:['ඉක්මනට','එන්න','හෙමින්'],},
{t:'mc',q:'The taxi is waiting. You call inside:',o:['ඉක්මනට! ඉක්මනට!','හෙමින් හෙමින්','පරක්කුයි','ඉන්න'],a:0}]},
{id:'si_pace_2',title:'Hear it',step:'recognize',meta:'Tempo by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ඉක්මනට',o:['ඉක්මනට','හෙමින්','දැන්ම','පරක්කු'],a:0},
{t:'li',q:'Listen — which phrase?',say:'හෙමින් හෙමින්',o:['හෙමින් හෙමින්','හෙමින්','ඉක්මනට','දැන්ම'],a:0},
{t:'mc',q:'Which means "right now"?',o:['දැන්ම','දැන්','පස්සේ','ඉක්මනට'],a:0},
{t:'mc',q:'බස් එක පරක්කුයි means…',o:['the bus is late','the bus is fast','the bus left','no bus today'],a:0},
{t:'li',q:'Listen — which word?',say:'පරක්කු',o:['පරක්කු','පස්සේ','ඉක්මනට','පුළුවන්'],a:0},
{t:'mc',q:'The island’s pace-philosophy is…',o:['හෙමින් හෙමින්','ඉක්මනට','දැන්ම','පරක්කු'],a:0},
{t:'li',q:'Listen — which word?',say:'දැන්ම',o:['දැන්ම','දැන්','තාම','ඉක්මනට'],a:0}]},
{id:'si_pace_3',title:'Build it',step:'build',meta:'Set the speed',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['හෙමින්','slowly'],['ඉක්මනට','quickly'],['දැන්ම','right now'],['පරක්කු','late']]},
{t:'wb',q:'Confess: I am late',a:['මම','පරක්කු','වුණා'],pool:['මම','පරක්කු','වුණා','පරක්කුයි']},
{t:'mc',q:'"Go slowly!" (to a speeding three-wheeler) =',o:['හෙමින් යන්න','ඉක්මනට යන්න','දැන්ම යන්න','යන්න එපා'],a:0},
{t:'wb',q:'Order: come right now!',a:['දැන්ම','එන්න'],pool:['දැන්ම','එන්න','පස්සේ']},
{t:'li',q:'Listen — which phrase?',say:'මම පරක්කු වුණා',o:['මම පරක්කු වුණා','බස් එක පරක්කුයි','මම පරක්කුයි','පරක්කු වුණා'],a:0},
{t:'mc',q:'වුණා means…',d:'වුණා',r:'wunaa',o:['became','went','was (living)','did'],a:0}]},
{id:'si_pace_4',title:'Mix it',step:'mix',meta:'Hurry & calm',vocab:[],ex:[
{t:'mc',q:'කෝච්චිය දැන්ම එනවා! You should…',o:['ඉක්මනට යන්න','හෙමින් හෙමින්','ඉන්න','පස්සේ යන්න'],a:0},
{t:'wb',q:'Soothe: eat slowly slowly',a:['හෙමින්','හෙමින්','කන්න'],pool:['හෙමින්','හෙමින්','කන්න','ඉක්මනට'],},
{t:'li',q:'Listen — which phrase?',say:'ඉක්මනට එන්න',o:['ඉක්මනට එන්න','දැන්ම එන්න','හෙමින් එන්න','එන්න'],a:0},
{t:'mc',q:'Friend apologizes: සමාවෙන්න, මම පරක්කු වුණා. You smile:',o:['කමක් නෑ','ඉක්මනට','දැන්ම','එපා'],a:0},
{t:'li',q:'Listen — which word?',say:'හෙමින්',o:['හෙමින්','හෙට','ඉක්මනට','දැන්ම'],a:0},
{t:'match',q:'Match situation and word',pairs:[['train leaving','ඉක්මනට!'],['hot tea','හෙමින් හෙමින්'],['urgent call','දැන්ම'],['missed the bus','පරක්කු වුණා']]},
{t:'mc',q:'ඉක්මනට hides which little ending?',o:['-ට — the "to" doing manner-work','-ක් — a/one','-ද — question','-ම — emphasis'],a:0}]},
{id:'si_pace_5',title:'Checkpoint',step:'checkpoint',meta:'Pace mastered?',vocab:[],ex:[
{t:'mc',q:'"Quickly" =',o:['ඉක්මනට','හෙමින්','දැන්ම','පරක්කු'],a:0},
{t:'wb',q:'Say: the bus is late',a:['බස් එක','පරක්කුයි'],pool:['බස් එක','පරක්කුයි','පරක්කු']},
{t:'li',q:'Listen — which word?',say:'දැන්ම',o:['දැන්ම','දැන්','හෙමින්','තාම'],a:0},
{t:'mc',q:'"Slowly slowly" =',o:['හෙමින් හෙමින්','ඉක්මනට','දැන්ම දැන්ම','පරක්කු'],a:0},
{t:'li',q:'Listen — which word?',say:'ඉක්මනට',o:['ඉක්මනට','ඉස්සෙල්ලා','දැන්ම','එකට'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['හෙමින්','slowly'],['ඉක්මනට','quickly'],['පරක්කු','late'],['දැන්ම','right now']]}]},

/* --- Topic 72: clothes --- */
{id:'si_wear',title:'Clothes & the sarama',step:'learn',meta:'සරම කමිසය සපත්තු',vocab:[['ඇඳුම්','aendhum','clothes'],['සරම','sarama','sarong'],['කමිසය','kamisaya','shirt'],['සපත්තු','sapaththu','shoes'],['අඳිනවා','andhinawaa','wears / puts on']],ex:[
{t:'note',tag:'The king of comfort',q:'සරම',body:'<p><span class="deva">ඇඳුම්</span> <b>aendhum</b> = clothes. And the king of Lankan comfort: <span class="deva">සරම</span> <b>sarama</b> — the sarong, a simple cloth tube worn from the waist. Evening uniform of the whole island.</p><p><span class="deva">කමිසය</span> <b>kamisaya</b> = shirt · <span class="deva">සපත්තු</span> <b>sapaththu</b> = shoes.</p>',eg:[['සරම','sarama','sarong'],['කමිසය','kamisaya','shirt'],['සපත්තු','sapaththu','shoes']]},
{t:'mc',q:'What does සරම mean?',d:'සරම',r:'sarama',o:['sarong','shirt','shoes','hat'],a:0},
{t:'mc',q:'"Shoes" =',o:['සපත්තු','කමිසය','ඇඳුම්','සරම'],a:0},
{t:'note',tag:'Wearing',q:'අඳිනවා',body:'<p><span class="deva">අඳිනවා</span> <b>andhinawaa</b> = wear, put on (spot the half-nasal <span class="deva">ඳ</span>!): <span class="deva">මම සරම අඳිනවා</span> — I wear a sarong.</p><p>House etiquette: <span class="deva">සපත්තු</span> come OFF at the door. Bare feet are welcome feet.</p>',eg:[['මම සරම අඳිනවා','mama sarama andhinawaa','I wear a sarong'],['සපත්තු ගලවන්න? — just remember: off at the door!','sapaththu — off at the door','shoes off inside']]},
{t:'mc',q:'What does අඳිනවා mean?',d:'අඳිනවා',r:'andhinawaa',o:['wears','washes','buys','folds'],a:0},
{t:'wb',q:'Say: I wear a sarong',a:['මම','සරම','අඳිනවා'],pool:['මම','සරම','අඳිනවා','කමිසය']},
{t:'mc',q:'Entering a Lankan home, your සපත්තු…',o:['come off at the door','stay on','go in a bag','are admired'],a:0}]},
{id:'si_wear_2',title:'Hear it',step:'recognize',meta:'Wardrobe by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'සරම',o:['සරම','කමිසය','සපත්තු','ඇඳුම්'],a:0},
{t:'li',q:'Listen — which word?',say:'සපත්තු',o:['සපත්තු','සරම','සතිය','කමිසය'],a:0},
{t:'mc',q:'Which word means "clothes"?',o:['ඇඳුම්','අඳිනවා','සරම','කමිසය'],a:0},
{t:'mc',q:'මම කමිසය අඳිනවා means…',o:['I put on a shirt','I wash a shirt','I bought a shirt','the shirt is mine'],a:0},
{t:'li',q:'Listen — which word?',say:'කමිසය',o:['කමිසය','කුස්සිය','සරම','කාමරය'],a:0},
{t:'mc',q:'The evening uniform of the island:',o:['සරම','කමිසය','සපත්තු','ටයි එක'],a:0},
{t:'li',q:'Listen — which word?',say:'අඳිනවා',o:['අඳිනවා','අහනවා','ඉන්නවා','උයනවා'],a:0}]},
{id:'si_wear_3',title:'Build it',step:'build',meta:'Dress the day',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['සරම','sarong'],['කමිසය','shirt'],['සපත්තු','shoes'],['ඇඳුම්','clothes']]},
{t:'wb',q:'Say: father wears a sarong',a:['තාත්තා','සරම','අඳිනවා'],pool:['තාත්තා','සරම','අඳිනවා','සපත්තු']},
{t:'mc',q:'"New clothes" =',o:['අලුත් ඇඳුම්','ඇඳුම් අලුත්','පරණ ඇඳුම්','අලුත්ම'],a:0},
{t:'wb',q:'Ask: how much is the shirt?',a:['කමිසය','කීයද'],pool:['කමිසය','කීයද','කීයක්']},
{t:'li',q:'Listen — which phrase?',say:'මම සරම අඳිනවා',o:['මම සරම අඳිනවා','මම කමිසය අඳිනවා','සරම අඳිනවා','මම සපත්තු අඳිනවා'],a:0},
{t:'mc',q:'අඳිනවා shows off which special letters?',o:['the half-nasal ඳ','the retroflex ට','double ස','the vowel killer'],a:0}]},
{id:'si_wear_4',title:'Mix it',step:'mix',meta:'Market wardrobe',vocab:[],ex:[
{t:'mc',q:'Buying a sarong, the price stings:',o:['ගණන් වැඩියි — ටිකක් අඩු කරන්න','ලාබයි!','මම අඳිනවා','සපත්තු එපා'],a:0},
{t:'wb',q:'Say: I bought new shoes — past!',a:['මම','අලුත්','සපත්තු','ගත්තා'],pool:['මම','අලුත්','සපත්තු','ගත්තා','අඳිනවා']},
{t:'li',q:'Listen — which word?',say:'ඇඳුම්',o:['ඇඳුම්','අඳිනවා','ඉඳිආප්ප','අම්මා'],a:0},
{t:'mc',q:'Evening at home — the කමිසය comes off and the ___ goes on:',o:['සරම','සපත්තු','ටිකට් එක','කමිසය'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අලුත් ඇඳුම්',o:['අලුත් ඇඳුම්','පරණ ඇඳුම්','අලුත් සරම','ඇඳුම්'],a:0},
{t:'match',q:'Match item and place',pairs:[['සපත්තු','at the door'],['සරම','evening comfort'],['කමිසය','town wear'],['අලුත් ඇඳුම්','new year!']]},
{t:'mc',q:'අලුත් අවුරුද්දට everyone gets…',o:['අලුත් ඇඳුම්','පරණ සපත්තු','පරණ ඇඳුම්','nothing'],a:0}]},
{id:'si_wear_5',title:'Checkpoint',step:'checkpoint',meta:'Clothes mastered?',vocab:[],ex:[
{t:'mc',q:'"Sarong" =',o:['සරම','කමිසය','ඇඳුම්','සපත්තු'],a:0},
{t:'wb',q:'Say: I wear a shirt',a:['මම','කමිසය','අඳිනවා'],pool:['මම','කමිසය','අඳිනවා','ගත්තා']},
{t:'li',q:'Listen — which word?',say:'සරම',o:['සරම','සපත්තු','කමිසය','සතිය'],a:0},
{t:'mc',q:'"Wears" =',o:['අඳිනවා','අහනවා','ගන්නවා','උයනවා'],a:0},
{t:'li',q:'Listen — which word?',say:'සපත්තු',o:['සපත්තු','සරම','ඇඳුම්','සල්ලි'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ඇඳුම්','clothes'],['සරම','sarong'],['සපත්තු','shoes'],['අඳිනවා','wears']]}]},

/* --- Topic 73: animals --- */
{id:'si_animal',title:'Animals',step:'learn',meta:'අලියා වඳුරා කුරුල්ලා හරකා',vocab:[['අලියා','aliyaa','elephant'],['වඳුරා','wandhuraa','monkey'],['කුරුල්ලා','kurullaa','bird'],['හරකා','harakaa','cow / bull'],['අලියා ඉන්නවා','aliyaa innawaa','there is an elephant']],ex:[
{t:'note',tag:'The gentle giant',q:'අලියා',body:'<p><span class="deva">අලියා</span> <b>aliyaa</b> = elephant — Sri Lanka’s beloved giant. You may genuinely meet one on the road.</p><p><span class="deva">වඳුරා</span> <b>wandhuraa</b> = monkey (another humming <span class="deva">ඳ</span>) — you WILL genuinely meet many, and guard your lunch.</p>',eg:[['අලියා','aliyaa','elephant'],['වඳුරා','wandhuraa','monkey']]},
{t:'mc',q:'What does අලියා mean?',d:'අලියා',r:'aliyaa',o:['elephant','monkey','cow','dog'],a:0},
{t:'mc',q:'Guard your lunch from the…',o:['වඳුරා','අලියා','කුරුල්ලා','පූසා'],a:0},
{t:'note',tag:'Field & sky',q:'හරකා & කුරුල්ලා',body:'<p><span class="deva">හරකා</span> <b>harakaa</b> = cow or bull, ambling down the middle of any road with full right of way. <span class="deva">කුරුල්ලා</span> <b>kurullaa</b> = bird.</p><p>All living — so all take <span class="deva">ඉන්නවා</span>: <span class="deva">වත්තේ කුරුල්ලෝ ඉන්නවා</span> — there are birds in the garden.</p>',eg:[['හරකා','harakaa','cow'],['කුරුල්ලා','kurullaa','bird'],['අලියා ඉන්නවා','aliyaa innawaa','there is an elephant']]},
{t:'mc',q:'What does හරකා mean?',d:'හරකා',r:'harakaa',o:['cow / bull','goat','horse','buffalo only'],a:0},
{t:'wb',q:'Warn: there is an elephant!',a:['අලියා','ඉන්නවා'],pool:['අලියා','ඉන්නවා','තියෙනවා']},
{t:'mc',q:'Animals take ඉන්නවා because…',o:['they are living beings','they move','they are big','tradition'],a:0}]},
{id:'si_animal_2',title:'Hear them',step:'recognize',meta:'Creatures by ear',vocab:[],ex:[
{t:'li',q:'Listen — which animal?',say:'අලියා',o:['අලියා','වඳුරා','හරකා','බල්ලා'],a:0},
{t:'li',q:'Listen — which animal?',say:'කුරුල්ලා',o:['කුරුල්ලා','වඳුරා','පූසා','හරකා'],a:0},
{t:'mc',q:'Which is the monkey?',o:['වඳුරා','අලියා','හරකා','කුරුල්ලා'],a:0},
{t:'mc',q:'පාරේ හරකා ඉන්නවා means…',o:['there is a cow on the road','the cow ran away','cows eat grass','beware of dogs'],a:0},
{t:'li',q:'Listen — which animal?',say:'වඳුරා',o:['වඳුරා','අලියා','කුරුල්ලා','බල්ලා'],a:0},
{t:'mc',q:'Which animal has full right of way on the road?',o:['හරකා','පූසා','කුරුල්ලා','none'],a:0},
{t:'li',q:'Listen — which animal?',say:'හරකා',o:['හරකා','වඳුරා','අලියා','හරි'],a:0}]},
{id:'si_animal_3',title:'Build it',step:'build',meta:'Who lives where',vocab:[],ex:[
{t:'match',q:'Match animal and meaning',pairs:[['අලියා','elephant'],['වඳුරා','monkey'],['කුරුල්ලා','bird'],['හරකා','cow']]},
{t:'wb',q:'Say: there are monkeys in the garden — monkeys = වඳුරෝ',a:['වත්තේ','වඳුරෝ','ඉන්නවා'],pool:['වත්තේ','වඳුරෝ','ඉන්නවා','තියෙනවා']},
{t:'mc',q:'"The elephant is big!" =',o:['අලියා ලොකුයි','අලියා ලොකු','ලොකු අලියා ද','අලියා ඉන්නවා'],a:0},
{t:'wb',q:'Say: the bird is on the tree — tree = ගහ උඩ? use ගස: ගස උඩ',a:['කුරුල්ලා','ගස','උඩ','ඉන්නවා'],pool:['කුරුල්ලා','ගස','උඩ','ඉන්නවා','යට']},
{t:'li',q:'Listen — which phrase?',say:'අලියා ඉන්නවා',o:['අලියා ඉන්නවා','වඳුරා ඉන්නවා','අලියා ලොකුයි','හරකා ඉන්නවා'],a:0},
{t:'mc',q:'වඳුරා flaunts which Sinhala specialty letter?',o:['ඳ — the half-nasal','ට — retroflex','ං — the circle','ෆ — fa'],a:0}]},
{id:'si_animal_4',title:'Mix it',step:'mix',meta:'Roadside safari',vocab:[],ex:[
{t:'mc',q:'The three-wheeler stops suddenly — පාරේ අලියා! You say…',o:['ෆොටෝ එකක් ගන්න පුළුවන්ද!','ඉක්මනට යන්න!','අලියා එපා','හෙමින් හෙමින්'],a:0},
{t:'wb',q:'Tell: we saw an elephant yesterday — saw = දැක්කා',a:['අපි','ඊයේ','අලියා','දැක්කා'],pool:['අපි','ඊයේ','අලියා','දැක්කා','බැලුවා']},
{t:'li',q:'Listen — which phrase?',say:'වත්තේ වඳුරෝ ඉන්නවා',o:['වත්තේ වඳුරෝ ඉන්නවා','වත්තේ කුරුල්ලෝ ඉන්නවා','වඳුරා ඉන්නවා','ගසේ කුරුල්ලා'],a:0},
{t:'mc',q:'The monkeys took the bananas! කේසෙල්? — next zone. For now:',o:['වඳුරෝ! අයියෝ!','හරි හොඳයි','ස්තූතියි','කමක් නෑ'],a:0},
{t:'li',q:'Listen — which word?',say:'කුරුල්ලා',o:['කුරුල්ලා','කුස්සිය','වඳුරා','කකුල'],a:0},
{t:'match',q:'Match animal and habit',pairs:[['අලියා','roadside giant'],['වඳුරා','lunch thief'],['හරකා','road king'],['කුරුල්ලා','dawn singer']]},
{t:'mc',q:'දැක්කා (saw) is the past of…',o:['දකිනවා — sees','දෙනවා — gives','දන්නවා — knows','අඳිනවා — wears'],a:0}]},
{id:'si_animal_5',title:'Checkpoint',step:'checkpoint',meta:'Animals mastered?',vocab:[],ex:[
{t:'mc',q:'"Elephant" =',o:['අලියා','වඳුරා','හරකා','බල්ලා'],a:0},
{t:'wb',q:'Warn: there is a cow on the road',a:['පාරේ','හරකා','ඉන්නවා'],pool:['පාරේ','හරකා','ඉන්නවා','තියෙනවා']},
{t:'li',q:'Listen — which animal?',say:'වඳුරා',o:['වඳුරා','අලියා','කුරුල්ලා','හරකා'],a:0},
{t:'mc',q:'"Bird" =',o:['කුරුල්ලා','වඳුරා','පූසා','හරකා'],a:0},
{t:'li',q:'Listen — which animal?',say:'අලියා',o:['අලියා','හරකා','බල්ලා','වඳුරා'],a:0},
{t:'match',q:'Match animal and meaning',pairs:[['අලියා','elephant'],['වඳුරා','monkey'],['කුරුල්ලා','bird'],['හරකා','cow']]}]},

/* --- Topic 74: nature --- */
{id:'si_nature',title:'Nature',step:'learn',meta:'කන්ද ගඟ වැව ගස මල',vocab:[['කන්ද','kandha','mountain / hill'],['ගඟ','ganga','river'],['වැව','waewa','tank / lake'],['ගස','gasa','tree'],['මල','mala','flower']],ex:[
{t:'note',tag:'The green island',q:'කන්ද & ගඟ',body:'<p><span class="deva">කන්ද</span> <b>kandha</b> = mountain — the tea-covered heart of the island. <span class="deva">ගඟ</span> <b>ganga</b> = river (that humming <span class="deva">ඟ</span>!) — the longest is the මහවැලි ගඟ.</p>',eg:[['කන්ද','kandha','mountain'],['ගඟ','ganga','river']]},
{t:'mc',q:'What does කන්ද mean?',d:'කන්ද',r:'kandha',o:['mountain','river','lake','forest'],a:0},
{t:'mc',q:'"River" =',o:['ගඟ','වැව','මුහුද','ගස'],a:0},
{t:'note',tag:'The ancient gift',q:'වැව',body:'<p><span class="deva">වැව</span> <b>waewa</b> = a man-made lake. Ancient kings built thousands of these to hold the monsoon and feed the rice fields — many are over a thousand years old and still working.</p><p><span class="deva">ගස</span> <b>gasa</b> = tree · <span class="deva">මල</span> <b>mala</b> = flower.</p>',eg:[['වැව','waewa','tank / lake'],['ගස','gasa','tree'],['මල','mala','flower']]},
{t:'mc',q:'A වැව is…',d:'වැව',r:'waewa',o:['an ancient man-made lake','a natural sea','a waterfall','a well'],a:0},
{t:'wb',q:'Say: the village is near the lake',a:['ගම','වැව','ළඟ'],pool:['ගම','වැව','ළඟ','උඩ']},
{t:'mc',q:'"Flower" =',o:['මල','ගස','මල් නෑ','කොළ'],a:0}]},
{id:'si_nature_2',title:'Hear it',step:'recognize',meta:'Landscape by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'කන්ද',o:['කන්ද','ගඟ','වැව','ගම'],a:0},
{t:'li',q:'Listen — which word?',say:'ගඟ',o:['ගඟ','ගස','ගම','වැව'],a:0},
{t:'mc',q:'Which is the tank/lake?',o:['වැව','ගඟ','මුහුද','කන්ද'],a:0},
{t:'mc',q:'The tea country lives on the…',o:['කන්ද','මුහුද','වැව','පාර'],a:0},
{t:'li',q:'Listen — which word?',say:'මල',o:['මල','මම','ගස','මාළු'],a:0},
{t:'mc',q:'The වැව system was built by…',o:['ancient kings, for rice','the British','nature','last year'],a:0},
{t:'li',q:'Listen — which word?',say:'ගස',o:['ගස','ගඟ','ගම','මල'],a:0}]},
{id:'si_nature_3',title:'Build it',step:'build',meta:'Paint the landscape',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['කන්ද','mountain'],['ගඟ','river'],['වැව','lake'],['මල','flower']]},
{t:'wb',q:'Say: there are flowers in the garden — flowers = මල්',a:['වත්තේ','මල්','තියෙනවා'],pool:['වත්තේ','මල්','තියෙනවා','ඉන්නවා']},
{t:'mc',q:'"The mountain is beautiful" =',o:['කන්ද ලස්සනයි','ලස්සන කන්ද','කන්ද ලොකුයි','කන්දට ලස්සනයි'],a:0},
{t:'wb',q:'Say: we bathe in the river',a:['අපි','ගඟේ','නානවා'],pool:['අපි','ගඟේ','නානවා','බොනවා']},
{t:'li',q:'Listen — which phrase?',say:'කන්ද ලස්සනයි',o:['කන්ද ලස්සනයි','ගඟ ලස්සනයි','ලංකාව ලස්සනයි','කන්ද ලොකුයි'],a:0},
{t:'mc',q:'Flowers on things: මල් vs මල is…',o:['plural vs one','one vs plural','same','red vs white'],a:0}]},
{id:'si_nature_4',title:'Mix it',step:'mix',meta:'Out in the green',vocab:[],ex:[
{t:'mc',q:'ගඟේ නාමුද? means…',o:['shall we bathe in the river?','is the river deep?','where is the river?','the river is cold'],a:0},
{t:'wb',q:'Describe: the lake is near the mountain',a:['වැව','කන්ද','ළඟ'],pool:['වැව','කන්ද','ළඟ','උඩ'],},
{t:'li',q:'Listen — which phrase?',say:'ගඟේ නානවා',o:['ගඟේ නානවා','වැවේ නානවා','ගඟ ලස්සනයි','නානවා'],a:0},
{t:'mc',q:'කුරුල්ලා ගසේ, මල වත්තේ, හරකා පාරේ — the -ේ means…',o:['in / at each place','to each place','from each place','of each place'],a:0},
{t:'li',q:'Listen — which word?',say:'වැව',o:['වැව','වැඩ','ගඟ','වතුර'],a:0},
{t:'match',q:'Match place and life',pairs:[['කන්ද','tea bushes'],['ගඟ','the evening bathe'],['වැව','rice water'],['ගස','the bird’s home']]},
{t:'mc',q:'Which pair shows off the half-nasals?',o:['ගඟ & කන්ද','ගස & මල','වැව & ගම','මුහුද & පාර'],a:0}]},
{id:'si_nature_5',title:'Checkpoint',step:'checkpoint',meta:'Nature mastered?',vocab:[],ex:[
{t:'mc',q:'"Mountain" =',o:['කන්ද','ගඟ','වැව','ගස'],a:0},
{t:'wb',q:'Say: the river is beautiful',a:['ගඟ','ලස්සනයි'],pool:['ගඟ','ලස්සනයි','ලස්සන']},
{t:'li',q:'Listen — which word?',say:'ගඟ',o:['ගඟ','ගස','කන්ද','ගම'],a:0},
{t:'mc',q:'"Tree" =',o:['ගස','මල','ගඟ','කොළ'],a:0},
{t:'li',q:'Listen — which word?',say:'කන්ද',o:['කන්ද','වැව','ගඟ','කඩේ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['කන්ද','mountain'],['ගඟ','river'],['ගස','tree'],['මල','flower']]}]},

/* --- Topic 75: which & or --- */
{id:'si_which',title:'Which one? Or?',step:'learn',meta:'මොන එකද? තේද නැත්නම් කෝපිද?',vocab:[['මොන','mona','which'],['මොන එකද','mona ekadha','which one?'],['නැත්නම්','naethnam','or / or else'],['කෝපි','kopi','coffee'],['තේද නැත්නම් කෝපිද','theedha naethnam kopidha','tea or coffee?']],ex:[
{t:'note',tag:'Choosing',q:'මොන … ද',body:'<p><span class="deva">මොන</span> <b>mona</b> = which: <span class="deva">මොන එකද</span> <b>mona ekadha</b> — which one? · <span class="deva">මොන පාටද</span> — which color? (You met this in Zone 6!)</p>',eg:[['මොන එකද','mona ekadha','which one?'],['මොන පාටද','mona paatadha','which color?']]},
{t:'mc',q:'What does මොන එකද ask?',d:'මොන එකද',r:'mona ekadha',o:['which one?','how many?','whose?','where?'],a:0},
{t:'mc',q:'"Which color?" =',o:['මොන පාටද','පාට මොනද','මොනද පාට','කොහෙ පාටද'],a:0},
{t:'note',tag:'Or',q:'නැත්නම්',body:'<p>Offer a choice with <span class="deva">නැත්නම්</span> <b>naethnam</b> — or: <span class="deva">තේද නැත්නම් කෝපිද</span> <b>theedha naethnam kopidha</b> — tea, or coffee? (<span class="deva">කෝපි</span> — one more loanword friend.)</p><p>It also means OR ELSE: <span class="deva">ඉක්මනට — නැත්නම් පරක්කු වෙනවා!</span></p>',eg:[['තේද නැත්නම් කෝපිද','theedha naethnam kopidha','tea or coffee?'],['කෝපි','kopi','coffee']]},
{t:'mc',q:'What does නැත්නම් mean?',d:'නැත්නම්',r:'naethnam',o:['or / or else','and','but','because'],a:0},
{t:'wb',q:'Offer: tea or coffee?',a:['තේද','නැත්නම්','කෝපිද'],pool:['තේද','නැත්නම්','කෝපිද','තේ']},
{t:'mc',q:'Notice: BOTH choices wear…',o:['the question ද','the counter ක්','the dative ට','nothing'],a:0}]},
{id:'si_which_2',title:'Hear it',step:'recognize',meta:'Choices by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'මොන එකද',o:['මොන එකද','මොකක්ද','මොන පාටද','කෝපිද'],a:0},
{t:'li',q:'Listen — which word?',say:'නැත්නම්',o:['නැත්නම්','නෑ','නම්','මොන'],a:0},
{t:'mc',q:'Which is "coffee"?',o:['කෝපි','තේ','කිරි','කෝල්'],a:0},
{t:'mc',q:'තේද නැත්නම් කෝපිද — you answer…',o:['තේ!','ඔව්','නෑ','ද'],a:0},
{t:'li',q:'Listen — which phrase?',say:'තේද නැත්නම් කෝපිද',o:['තේද නැත්නම් කෝපිද','තේ එකක් දෙන්න','කෝපි එකක්','මොන එකද'],a:0},
{t:'mc',q:'නැත්නම් as a warning means…',o:['or else','never','not yet','because'],a:0},
{t:'li',q:'Listen — which word?',say:'කෝපි',o:['කෝපි','කෝල්','තේ','කොපි'],a:0}]},
{id:'si_which_3',title:'Build it',step:'build',meta:'Offer choices',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['මොන','which'],['මොන එකද','which one?'],['නැත්නම්','or'],['කෝපි','coffee']]},
{t:'wb',q:'Ask: bus or train? — bus first',a:['බස් එකේද','නැත්නම්','කෝච්චියේද'],pool:['බස් එකේද','නැත්නම්','කෝච්චියේද','බස් එක']},
{t:'mc',q:'"Which book?" =',o:['මොන පොතද','මොකක් පොත','පොත මොනද','කාගේ පොතද'],a:0},
{t:'wb',q:'Offer: hoppers or string hoppers?',a:['ආප්පද','නැත්නම්','ඉඳිආප්පද'],pool:['ආප්පද','නැත්නම්','ඉඳිආප්පද','ආප්ප']},
{t:'li',q:'Listen — which phrase?',say:'මොන පාටද',o:['මොන පාටද','මොන එකද','මොකක් පාටද','රතු පාටද'],a:0},
{t:'mc',q:'The kadē owner holds up two saramas:',o:['මොන එකද?','මොකක්ද?','කවුද?','කීයක්ද?'],a:0}]},
{id:'si_which_4',title:'Mix it',step:'mix',meta:'Decisions, decisions',vocab:[],ex:[
{t:'mc',q:'අද මුහුදටද නැත්නම් කන්දටද? means…',o:['to the sea today, or the mountain?','sea or rain today?','is the sea near the mountain?','no trip today'],a:0},
{t:'wb',q:'Ask: this one or that one? — use මේකද / ඕකද',a:['මේකද','නැත්නම්','ඕකද'],pool:['මේකද','නැත්නම්','ඕකද','මොන'],},
{t:'li',q:'Listen — which phrase?',say:'මොන එකද ඕනැ',o:['මොන එකද ඕනැ','මොන එකද','මොනවද ඕනැ','මොකක්ද ඕනැ'],a:0},
{t:'mc',q:'Late for the train: ඉක්මනට — නැත්නම්…',o:['කෝච්චිය යනවා!','තේ බොමු','හෙමින් හෙමින්','පරක්කු එපා'],a:0},
{t:'li',q:'Listen — which word?',say:'මොන',o:['මොන','මොකක්','මට','නම්'],a:0},
{t:'match',q:'Match choice-question and topic',pairs:[['මොන පාටද','color'],['මොන එකද','item'],['තේද කෝපිද','drink'],['මුහුදටද කන්දටද','trip']]},
{t:'mc',q:'A full choice-question needs ද…',o:['on each option','only once','never','on නැත්නම්'],a:0}]},
{id:'si_which_5',title:'Checkpoint',step:'checkpoint',meta:'Choices mastered?',vocab:[],ex:[
{t:'mc',q:'"Which one?" =',o:['මොන එකද','මොකක්ද','කවුද','කීයද'],a:0},
{t:'wb',q:'Offer: tea or coffee?',a:['තේද','නැත්නම්','කෝපිද'],pool:['තේද','නැත්නම්','කෝපිද','නම්'],},
{t:'li',q:'Listen — which word?',say:'නැත්නම්',o:['නැත්නම්','නම්','නෑ','මොන'],a:0},
{t:'mc',q:'"Coffee" =',o:['කෝපි','තේ','කිරි තේ','වතුර'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මොන එකද',o:['මොන එකද','මොන පාටද','මොකක්ද','ඕකද'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['මොන','which'],['නැත්නම්','or'],['මොන එකද','which one?'],['කෝපි','coffee']]}]},

/* --- Topic 76: degrees --- */
{id:'si_deg',title:'A lot & a little',step:'learn',meta:'ගොඩක් හරිම පොඩ්ඩක්',vocab:[['ගොඩක්','godak','a lot / many'],['හරිම','harima','very'],['පොඩ්ඩක්','poddak','a tiny bit'],['මට සිංහල පොඩ්ඩක් පුළුවන්','mata sinhala poddak puluwan','I can speak a tiny bit of Sinhala']],ex:[
{t:'note',tag:'Heaps',q:'ගොඩක්',body:'<p><span class="deva">ගොඩක්</span> <b>godak</b> = a lot, many, heaps (literally a HEAP!): <span class="deva">වැඩ ගොඩක් තියෙනවා</span> — there is a lot of work · <span class="deva">ගොඩක් ස්තූතියි</span> — thanks a lot!</p>',eg:[['ගොඩක්','godak','a lot'],['වැඩ ගොඩක්','waeda godak','lots of work'],['ගොඩක් ස්තූතියි','godak sthuuthiyi','thanks a lot']]},
{t:'mc',q:'What does ගොඩක් mean?',d:'ගොඩක්',r:'godak',o:['a lot','a little','enough','none'],a:0},
{t:'mc',q:'"Thanks a lot!" =',o:['ගොඩක් ස්තූතියි','පොඩ්ඩක් ස්තූතියි','හරිම ස්තූතියි','ස්තූතියි ගොඩ'],a:0},
{t:'note',tag:'Very & tiny',q:'හරිම & පොඩ්ඩක්',body:'<p><span class="deva">හරිම</span> <b>harima</b> = very (your <span class="deva">හරි</span> + that emphatic <span class="deva">ම</span>): <span class="deva">හරිම ලස්සනයි</span> — very beautiful! <span class="deva">හරිම රසයි</span> — so tasty!</p><p><span class="deva">පොඩ්ඩක්</span> <b>poddak</b> = a tiny bit: <span class="deva">මට සිංහල පොඩ්ඩක් පුළුවන්</span> — the humble truth that charms everyone.</p>',eg:[['හරිම ලස්සනයි','harima lassanayi','very beautiful'],['පොඩ්ඩක්','poddak','a tiny bit'],['මට සිංහල පොඩ්ඩක් පුළුවන්','mata sinhala poddak puluwan','I can speak a tiny bit of Sinhala']]},
{t:'mc',q:'හරිම is built from…',o:['හරි + emphatic ම','හර + im','a new root','English very'],a:0},
{t:'wb',q:'Compliment: very tasty!',a:['හරිම','රසයි'],pool:['හරිම','රසයි','ගොඩක්'],},
{t:'mc',q:'පොඩ්ඩක් vs ටිකක්:',o:['tiny bit vs a little — cousins!','opposites','same word','plural vs singular'],a:0}]},
{id:'si_deg_2',title:'Hear it',step:'recognize',meta:'Degrees by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ගොඩක්',o:['ගොඩක්','පොඩ්ඩක්','ටිකක්','හරිම'],a:0},
{t:'li',q:'Listen — which word?',say:'හරිම',o:['හරිම','හරි','ගොඩක්','හෙමින්'],a:0},
{t:'mc',q:'Which means "a tiny bit"?',o:['පොඩ්ඩක්','ගොඩක්','හරිම','ලොකුම'],a:0},
{t:'mc',q:'හරිම ලස්සනයි means…',o:['very beautiful','quite nice','a bit pretty','the most beautiful'],a:0},
{t:'li',q:'Listen — which word?',say:'පොඩ්ඩක්',o:['පොඩ්ඩක්','පොඩියි','ටිකක්','ගොඩක්'],a:0},
{t:'mc',q:'වැඩ ගොඩක් තියෙනවා — your evening is…',o:['busy','free','short','finished'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ගොඩක් ස්තූතියි',o:['ගොඩක් ස්තූතියි','බොහොම ස්තූතියි','ස්තූතියි','හරිම ස්තූතියි'],a:0}]},
{id:'si_deg_3',title:'Build it',step:'build',meta:'Turn the volume',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ගොඩක්','a lot'],['හරිම','very'],['පොඩ්ඩක්','a tiny bit'],['ටිකක්','a little']]},
{t:'wb',q:'Say: I can speak a tiny bit of Sinhala',a:['මට','සිංහල','පොඩ්ඩක්','පුළුවන්'],pool:['මට','සිංහල','පොඩ්ඩක්','පුළුවන්','ගොඩක්'],},
{t:'mc',q:'"Very hot (weather)!" =',o:['හරිම රස්නෙයි','ගොඩක් රස්නෙයි','රස්නෙයි ම','පොඩ්ඩක් රස්නෙයි'],a:0},
{t:'wb',q:'Thank warmly: thanks a lot',a:['ගොඩක්','ස්තූතියි'],pool:['ගොඩක්','ස්තූතියි','පොඩ්ඩක්'],},
{t:'li',q:'Listen — which phrase?',say:'හරිම ලස්සනයි',o:['හරිම ලස්සනයි','ලස්සනයි','හරිම රසයි','ලස්සනම'],a:0},
{t:'mc',q:'There is a lot of rain: වැස්ස…',o:['ගොඩක්','පොඩ්ඩක්','හරිම','ම'],a:0}]},
{id:'si_deg_4',title:'Mix it',step:'mix',meta:'Big feelings',vocab:[],ex:[
{t:'mc',q:'The hoppers are outstanding tonight:',o:['හරිම රසයි!','රසයි','පොඩ්ඩක් රසයි','කමක් නෑ'],a:0},
{t:'wb',q:'Say: there are a lot of monkeys in the garden',a:['වත්තේ','වඳුරෝ','ගොඩක්','ඉන්නවා'],pool:['වත්තේ','වඳුරෝ','ගොඩක්','ඉන්නවා','පොඩ්ඩක්'],},
{t:'li',q:'Listen — which phrase?',say:'මට සිංහල පොඩ්ඩක් පුළුවන්',o:['මට සිංහල පොඩ්ඩක් පුළුවන්','මට සිංහල පුළුවන්','මට සිංහල ටිකක් පුළුවන්','සිංහල පොඩ්ඩක්'],a:0},
{t:'mc',q:'Your humble answer wins what?',o:['smiles & patient teachers','confusion','silence','a discount'],a:0},
{t:'li',q:'Listen — which word?',say:'හරිම',o:['හරිම','හරි','ගොඩක්','ම'],a:0},
{t:'match',q:'Match amount and word',pairs:[['heaps','ගොඩක්'],['very','හරිම'],['a little','ටිකක්'],['a tiny bit','පොඩ්ඩක්']]},
{t:'mc',q:'The emphatic ම appears in…',o:['හරිම & දැන්ම & ලොකුම','ගොඩක් & ටිකක්','only questions','the past tense'],a:0}]},
{id:'si_deg_5',title:'Checkpoint',step:'checkpoint',meta:'Degrees mastered?',vocab:[],ex:[
{t:'mc',q:'"A lot" =',o:['ගොඩක්','පොඩ්ඩක්','හරිම','ටිකක්'],a:0},
{t:'wb',q:'Compliment: very beautiful!',a:['හරිම','ලස්සනයි'],pool:['හරිම','ලස්සනයි','ගොඩක්'],},
{t:'li',q:'Listen — which word?',say:'පොඩ්ඩක්',o:['පොඩ්ඩක්','ගොඩක්','පොඩියි','හරිම'],a:0},
{t:'mc',q:'"Thanks a lot" =',o:['ගොඩක් ස්තූතියි','ස්තූතියි','පොඩ්ඩක් ස්තූතියි','හරි ස්තූතියි'],a:0},
{t:'li',q:'Listen — which word?',say:'ගොඩක්',o:['ගොඩක්','පොඩ්ඩක්','ටිකක්','එකක්'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ගොඩක්','a lot'],['හරිම','very'],['පොඩ්ඩක්','tiny bit'],['දැන්ම','right now']]}]},

/* --- Topic 77: how long --- */
{id:'si_dur',title:'How long?',step:'learn',meta:'කොච්චර කල් … මාස තුනක්',vocab:[['කොච්චර කල්','kochchara kal','how long?'],['මාස තුනක්','maasa thunak','three months'],['අවුරුදු දෙකක්','awurudhu dhekak','two years'],['මම ලංකාවේ මාස තුනක් හිටියා','mama lankaawee maasa thunak hitiyaa','I stayed in Sri Lanka three months']],ex:[
{t:'note',tag:'Stretch of time',q:'කොච්චර කල්',body:'<p><span class="deva">කොච්චර කල්</span> <b>kochchara kal</b> = how long? (<span class="deva">කොච්චර</span> = how much · <span class="deva">කල්</span> = a stretch of time.)</p><p><span class="deva">ඔයා ලංකාවේ කොච්චර කල් හිටියද</span> — how long did you stay in Sri Lanka?</p>',eg:[['කොච්චර කල්','kochchara kal','how long?'],['කොච්චර කල් හිටියද','kochchara kal hitiyadha','how long did you stay?']]},
{t:'mc',q:'What does කොච්චර කල් ask?',d:'කොච්චර කල්',r:'kochchara kal',o:['how long?','how far?','how much money?','how many people?'],a:0},
{t:'mc',q:'කොච්චර is a cousin of…',o:['කීයද — how much','කවුද — who','කොහෙද — where','මොන — which'],a:0},
{t:'note',tag:'Counting time',q:'මාස තුනක් · අවුරුදු දෙකක්',body:'<p>Durations use your counting pattern on time-words: <span class="deva">මාස තුනක්</span> <b>maasa thunak</b> — three months · <span class="deva">අවුරුදු දෙකක්</span> — two years · <span class="deva">දවස් දෙකක්</span> — two days.</p><p><span class="deva">මම ලංකාවේ මාස තුනක් හිටියා</span> — I stayed in Sri Lanka three months.</p>',eg:[['මාස තුනක්','maasa thunak','three months'],['අවුරුදු දෙකක්','awurudhu dhekak','two years'],['මම ලංකාවේ මාස තුනක් හිටියා','mama lankaawee maasa thunak hitiyaa','I stayed three months']]},
{t:'mc',q:'"Two years" =',o:['අවුරුදු දෙකක්','අවුරුද්ද දෙක','දෙක අවුරුදු','අවුරුදු දෙකයි'],a:0},
{t:'wb',q:'Say: I stayed three months in Sri Lanka',a:['මම','ලංකාවේ','මාස','තුනක්','හිටියා'],pool:['මම','ලංකාවේ','මාස','තුනක්','හිටියා','ඉන්නවා'],},
{t:'mc',q:'Duration rides which old pattern?',o:['thing + number + ක්','number + යි','-ට','-ගේ'],a:0}]},
{id:'si_dur_2',title:'Hear it',step:'recognize',meta:'Durations by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'කොච්චර කල්',o:['කොච්චර කල්','කීයද','කීයටද','කොහෙද'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මාස තුනක්',o:['මාස තුනක්','අවුරුදු දෙකක්','දවස් දෙකක්','මාසය'],a:0},
{t:'mc',q:'Which is "two days"?',o:['දවස් දෙකක්','දවස දෙක','දෙක දවස්','දවසකට'],a:0},
{t:'mc',q:'ඔයා කොච්චර කල් හිටියද — the answer shape:',o:['මාස තුනක්','තුනට','තුනයි','තුන'],a:0},
{t:'li',q:'Listen — which phrase?',say:'අවුරුදු දෙකක්',o:['අවුරුදු දෙකක්','මාස දෙකක්','අවුරුදු විස්සයි','දෙකක්'],a:0},
{t:'mc',q:'කල් means…',o:['a stretch of time','a clock','yesterday','always'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම ලංකාවේ මාස තුනක් හිටියා',o:['මම ලංකාවේ මාස තුනක් හිටියා','මම ලංකාවේ හිටියා','මාස තුනක්','මම මාස දෙකක් හිටියා'],a:0}]},
{id:'si_dur_3',title:'Build it',step:'build',meta:'Say your stay',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['කොච්චර කල්','how long?'],['මාස තුනක්','three months'],['අවුරුදු දෙකක්','two years'],['දවස් දෙකක්','two days']]},
{t:'wb',q:'Ask: how long did you stay?',a:['කොච්චර','කල්','හිටියද'],pool:['කොච්චර','කල්','හිටියද','හිටියා'],},
{t:'mc',q:'"I am staying two days" (present!) =',o:['මම දවස් දෙකක් ඉන්නවා','මම දවස් දෙකක් හිටියා','මම දෙකට ඉන්නවා','දවස් දෙකයි'],a:0},
{t:'wb',q:'Say: he stayed two years in the village',a:['එයා','ගමේ','අවුරුදු','දෙකක්','හිටියා'],pool:['එයා','ගමේ','අවුරුදු','දෙකක්','හිටියා','ඉන්නවා'],},
{t:'li',q:'Listen — which phrase?',say:'දවස් දෙකක්',o:['දවස් දෙකක්','මාස දෙකක්','දෙකක්','දවසකට'],a:0},
{t:'mc',q:'දවසකට කීයද vs දවස් දෙකක්:',o:['per day vs for two days','both prices','both durations','same meaning'],a:0}]},
{id:'si_dur_4',title:'Mix it',step:'mix',meta:'Your Lankan timeline',vocab:[],ex:[
{t:'mc',q:'New friend asks: ලංකාවේ කොච්චර කල් ඉන්නවද? You:',o:['මාස තුනක්','තුනයි','මාසය','කල්'],a:0},
{t:'wb',q:'Tell: we stayed at the hotel two days',a:['අපි','හෝටලේ','දවස්','දෙකක්','හිටියා'],pool:['අපි','හෝටලේ','දවස්','දෙකක්','හිටියා','ඉන්නවා'],},
{t:'li',q:'Listen — which phrase?',say:'කොච්චර කල් හිටියද',o:['කොච්චර කල් හිටියද','කොච්චර කල්','කීයටද','කොහෙද හිටියේ'],a:0},
{t:'mc',q:'මම සිංහල මාස හයක් ඉගෙනගත්තා means…',o:['I studied Sinhala six months','Sinhala takes six months','I will study six months','six easy months'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මාස හයක්',o:['මාස හයක්','මාස තුනක්','හයක්','මාසය'],a:0},
{t:'match',q:'Match duration and life',pairs:[['දවස් දෙකක්','a beach hop'],['මාස තුනක්','a real visit'],['අවුරුදු දෙකක්','a Lankan life'],['කොච්චර කල්','the friendly question']]},
{t:'mc',q:'Zone 11 done — your Sinhala now stretches across…',o:['time itself','only today','only questions','the menu'],a:0}]},
{id:'si_dur_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 11 complete?',vocab:[],ex:[
{t:'mc',q:'"How long?" =',o:['කොච්චර කල්','කීයද','කීයටද','කවදද'],a:0},
{t:'wb',q:'Answer: three months',a:['මාස','තුනක්'],pool:['මාස','තුනක්','තුනයි'],},
{t:'li',q:'Listen — which phrase?',say:'අවුරුදු දෙකක්',o:['අවුරුදු දෙකක්','මාස දෙකක්','අවුරුදු විස්සයි','දවස් දෙකක්'],a:0},
{t:'mc',q:'"I stayed two years" =',o:['මම අවුරුදු දෙකක් හිටියා','මම අවුරුදු දෙකක් ඉන්නවා','මට අවුරුදු දෙකයි','අවුරුදු දෙකක් තිබුණා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කොච්චර කල්',o:['කොච්චර කල්','කොච්චර','කල්','කීයක්'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['කොච්චර කල්','how long?'],['දවස් දෙකක්','two days'],['මාස තුනක්','three months'],['අවුරුදු දෙකක්','two years']]}]},

/* ===================== ZONE 12 · MAKE SRI LANKA HOME ===================== */
/* --- Topic 78: big numbers --- */
{id:'si_lakh',title:'Big numbers',step:'learn',meta:'දාහ … ලක්ෂය',vocab:[['දාහ','dhaaha','1000'],['දෙදාහ','dhedhaaha','2000'],['පන්දාහ','pandhaaha','5000'],['ලක්ෂය','lakshaya','100,000 — a lakh'],['රුපියල් දාහයි','rupiyal dhaahayi','it is 1000 rupees']],ex:[
{t:'note',tag:'Thousands',q:'දාහ',body:'<p><span class="deva">දාහ</span> <b>dhaaha</b> = 1000. Combining forms again: <span class="deva">දෙදාහ</span> 2000 · <span class="deva">පන්දාහ</span> 5000.</p><p>Prices still answer with -යි: <span class="deva">රුපියල් දාහයි</span> — it is 1000 rupees.</p>',eg:[['දාහ','dhaaha','1000'],['දෙදාහ','dhedhaaha','2000'],['රුපියල් දාහයි','rupiyal dhaahayi','it is 1000 rupees']]},
{t:'mc',q:'What is දාහ?',d:'දාහ',r:'dhaaha',o:['1000','100','10,000','500'],a:0},
{t:'mc',q:'"5000" =',o:['පන්දාහ','පහ දාහ','පනහ','පන්සීය'],a:0},
{t:'note',tag:'The lakh',q:'ලක්ෂය',body:'<p>South Asia counts big money in lakhs: <span class="deva">ලක්ෂය</span> <b>lakshaya</b> = 100,000. A three-wheeler costs a few <span class="deva">ලක්ෂ</span>; land is talked of in <span class="deva">ලක්ෂ</span> per perch.</p>',eg:[['ලක්ෂය','lakshaya','100,000'],['ලක්ෂ දෙකක්','laksha dhekak','two lakhs']]},
{t:'mc',q:'A lakh (ලක්ෂය) is…',d:'ලක්ෂය',r:'lakshaya',o:['100,000','10,000','1,000,000','1000'],a:0},
{t:'wb',q:'Price: it is 1000 rupees',a:['රුපියල්','දාහයි'],pool:['රුපියල්','දාහයි','දාහ'],},
{t:'mc',q:'"Two lakhs" =',o:['ලක්ෂ දෙකක්','දෙක ලක්ෂ','ලක්ෂය දෙක','දෙදාහ'],a:0}]},
{id:'si_lakh_2',title:'Hear them',step:'recognize',meta:'Big sums by ear',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'දාහ',o:['දාහ','දහය','දාහතර','දෙදාහ'],a:0},
{t:'li',q:'Listen — which number?',say:'ලක්ෂය',o:['ලක්ෂය','දාහ','පන්දාහ','සීය'],a:0},
{t:'mc',q:'Which is 2000?',o:['දෙදාහ','දෙක දාහ','දොළහ','දෙසීය'],a:0},
{t:'mc',q:'රුපියල් පන්දාහයි means…',o:['it is 5000 rupees','it is 500 rupees','5000 rupees please','it is a lakh'],a:0},
{t:'li',q:'Listen — which number?',say:'පන්දාහ',o:['පන්දාහ','පනහ','දාහ','පහ'],a:0},
{t:'mc',q:'දාහ vs දහය:',o:['1000 vs 10','10 vs 1000','both 10','both 1000'],a:0},
{t:'li',q:'Listen — which phrase?',say:'රුපියල් දාහයි',o:['රුපියල් දාහයි','රුපියල් සීයයි','දාහයි','රුපියල් පන්දාහයි'],a:0}]},
{id:'si_lakh_3',title:'Build it',step:'build',meta:'Handle big prices',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['දාහ','1000'],['දෙදාහ','2000'],['පන්දාහ','5000'],['ලක්ෂය','100,000']]},
{t:'wb',q:'Price: it is 2000 rupees',a:['රුපියල්','දෙදාහයි'],pool:['රුපියල්','දෙදාහයි','දෙදාහ'],},
{t:'mc',q:'The sarama costs දාහයි. That is…',o:['1000 rupees','100 rupees','a lakh','free'],a:0},
{t:'wb',q:'Say: two lakhs',a:['ලක්ෂ','දෙකක්'],pool:['ලක්ෂ','දෙකක්','දෙදාහ'],},
{t:'li',q:'Listen — which number?',say:'දෙදාහ',o:['දෙදාහ','දාහ','දෙක','දොළහ'],a:0},
{t:'mc',q:'Big-number price + your bargaining kit:',o:['ගණන් වැඩියි — අඩු කරන්න','ලාබයි — දෙන්න','දාහ එපා','මට බෑ'],a:0}]},
{id:'si_lakh_4',title:'Mix it',step:'mix',meta:'Money that matters',vocab:[],ex:[
{t:'mc',q:'කෝච්චි ටිකට් එක සීයයි — බස් එක පනහයි. Cheaper ride:',o:['බස් එක','කෝච්චිය','ත්‍රීවීල් එක','පයින්'],a:0},
{t:'wb',q:'Report: the room is 5000 per day — start කාමරය',a:['කාමරය','දවසකට','පන්දාහයි'],pool:['කාමරය','දවසකට','පන්දාහයි','පන්දාහ'],},
{t:'li',q:'Listen — which phrase?',say:'ලක්ෂ දෙකක්',o:['ලක්ෂ දෙකක්','ලක්ෂය','දෙදාහ','මාස දෙකක්'],a:0},
{t:'mc',q:'Counting ladder, small to large:',o:['සීය → දාහ → ලක්ෂය','දාහ → සීය → ලක්ෂය','ලක්ෂය → දාහ → සීය','සීය → ලක්ෂය → දාහ'],a:0},
{t:'li',q:'Listen — which number?',say:'පන්දාහ',o:['පන්දාහ','පන්සීය','දාහ','පනහ'],a:0},
{t:'match',q:'Match price and thing',pairs:[['විස්සයි','a tea'],['සීයයි','a good lunch'],['දාහයි','a sarama'],['ලක්ෂ දෙකක්','a three-wheeler']]},
{t:'mc',q:'The combining pattern දෙ-/පන්- echoes…',o:['විසි එක & පනස් පහ from Zone 5','the -ලා perfect','the dative','plurals'],a:0}]},
{id:'si_lakh_5',title:'Checkpoint',step:'checkpoint',meta:'Big numbers mastered?',vocab:[],ex:[
{t:'mc',q:'"1000" =',o:['දාහ','දහය','සීය','ලක්ෂය'],a:0},
{t:'wb',q:'Price: it is 1000 rupees',a:['රුපියල්','දාහයි'],pool:['රුපියල්','දාහයි','සීයයි'],},
{t:'li',q:'Listen — which number?',say:'ලක්ෂය',o:['ලක්ෂය','දාහ','ලක්ෂ දෙකක්','පන්දාහ'],a:0},
{t:'mc',q:'"A lakh" =',o:['100,000','10,000','1000','a million'],a:0},
{t:'li',q:'Listen — which number?',say:'දාහ',o:['දාහ','දහය','දෙදාහ','දාහතර'],a:0},
{t:'match',q:'Match number and value',pairs:[['සීය','100'],['දාහ','1000'],['පන්දාහ','5000'],['ලක්ෂය','100,000']]}]},

/* --- Topic 79: errands --- */
{id:'si_errand',title:'Errands',step:'learn',meta:'කොණ්ඩේ රෙදි හදන්න',vocab:[['කොණ්ඩේ','kondee','hair'],['කොණ්ඩේ කපන්න','kondee kapanna','a haircut please'],['රෙදි','redhi','clothes / laundry'],['හෝදනවා','hoodhanawaa','washes'],['හදනවා','hadhanawaa','makes / fixes'],['ෆෝන් එක හදන්න පුළුවන්ද','foon eka hadhanna puluwandha','can you fix the phone?']],ex:[
{t:'note',tag:'Town errands',q:'කොණ්ඩේ කපන්න',body:'<p>Errand day! <span class="deva">කොණ්ඩේ</span> <b>kondee</b> = hair; at the salon just say <span class="deva">කොණ්ඩේ කපන්න</span> — cut my hair please (<span class="deva">කපනවා</span> = cut).</p><p><span class="deva">රෙදි</span> <b>redhi</b> = clothes/laundry · <span class="deva">හෝදනවා</span> <b>hoodhanawaa</b> = wash: <span class="deva">රෙදි හෝදනවා</span>.</p>',eg:[['කොණ්ඩේ කපන්න','kondee kapanna','a haircut please'],['රෙදි හෝදනවා','redhi hoodhanawaa','washes the clothes']]},
{t:'mc',q:'What does කොණ්ඩේ mean?',d:'කොණ්ඩේ',r:'kondee',o:['hair','head','comb','hat'],a:0},
{t:'mc',q:'"Washes clothes" =',o:['රෙදි හෝදනවා','රෙදි අඳිනවා','රෙදි කපනවා','රෙදි උයනවා'],a:0},
{t:'note',tag:'The fixer word',q:'හදනවා',body:'<p><span class="deva">හදනවා</span> <b>hadhanawaa</b> = make AND fix — the handiest verb in town: <span class="deva">ෆෝන් එක හදන්න පුළුවන්ද</span> — can you fix the phone? <span class="deva">කෑම හදනවා</span> — making food.</p><p>The answer you hope for: <span class="deva">පුළුවන් — හෙට එන්න</span>.</p>',eg:[['හදනවා','hadhanawaa','makes / fixes'],['ෆෝන් එක හදන්න පුළුවන්ද','foon eka hadhanna puluwandha','can you fix the phone?']]},
{t:'mc',q:'හදනවා means…',d:'හදනවා',r:'hadhanawaa',o:['makes AND fixes','only cooks','breaks','sells'],a:0},
{t:'wb',q:'Ask: can you fix the phone?',a:['ෆෝන් එක','හදන්න','පුළුවන්ද'],pool:['ෆෝන් එක','හදන්න','පුළුවන්ද','හෝදන්න'],},
{t:'mc',q:'At the salon you say…',o:['කොණ්ඩේ කපන්න','කොණ්ඩේ හදන්න','කොණ්ඩේ දෙන්න','කොණ්ඩේ ගන්න'],a:0}]},
{id:'si_errand_2',title:'Hear it',step:'recognize',meta:'Errands by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'රෙදි',o:['රෙදි','රොටී','කොණ්ඩේ','ඇඳුම්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'කොණ්ඩේ කපන්න',o:['කොණ්ඩේ කපන්න','රෙදි හෝදන්න','කොණ්ඩේ','හදන්න'],a:0},
{t:'mc',q:'Which verb means "washes"?',o:['හෝදනවා','හදනවා','අඳිනවා','උයනවා'],a:0},
{t:'mc',q:'අම්මා කෑම හදනවා means…',o:['mother is making food','mother is washing food','mother eats','mother sells food'],a:0},
{t:'li',q:'Listen — which word?',say:'හදනවා',o:['හදනවා','හෝදනවා','අඳිනවා','නානවා'],a:0},
{t:'mc',q:'The tricky twins හදනවා / හෝදනවා:',o:['fix vs wash','wash vs fix','both wash','both fix'],a:0},
{t:'li',q:'Listen — which phrase?',say:'රෙදි හෝදනවා',o:['රෙදි හෝදනවා','රෙදි හදනවා','කොණ්ඩේ කපනවා','ඇඳුම් අඳිනවා'],a:0}]},
{id:'si_errand_3',title:'Build it',step:'build',meta:'Run the errands',vocab:[],ex:[
{t:'match',q:'Match errand and meaning',pairs:[['කොණ්ඩේ කපන්න','haircut'],['රෙදි හෝදනවා','laundry'],['හදනවා','fixing'],['කෑම හදනවා','cooking']]},
{t:'wb',q:'Say: I wash clothes today',a:['මම','අද','රෙදි','හෝදනවා'],pool:['මම','අද','රෙදි','හෝදනවා','හදනවා'],},
{t:'mc',q:'"Can you fix the shoes?" =',o:['සපත්තු හදන්න පුළුවන්ද','සපත්තු හෝදන්න පුළුවන්ද','සපත්තු කපන්න','සපත්තු ගන්න'],a:0},
{t:'wb',q:'At the salon: cut my hair please',a:['කොණ්ඩේ','කපන්න'],pool:['කොණ්ඩේ','කපන්න','හෝදන්න'],},
{t:'li',q:'Listen — which phrase?',say:'කෑම හදනවා',o:['කෑම හදනවා','කෑම කනවා','බත් උයනවා','රෙදි හෝදනවා'],a:0},
{t:'mc',q:'උයනවා vs හදනවා for food:',o:['cook (on fire) vs make — both heard daily','identical','opposite','wash vs cook'],a:0}]},
{id:'si_errand_4',title:'Mix it',step:'mix',meta:'A full Saturday',vocab:[],ex:[
{t:'mc',q:'Phone died, hair long, clothes piled. First stop with a dead phone:',o:['ෆෝන් එක හදන්න පුළුවන්ද','කොණ්ඩේ කපන්න','රෙදි හෝදනවා','තේ එකක්'],a:0},
{t:'wb',q:'Plan: after that I cut my hair — after that = ඊට පස්සේ',a:['ඊට පස්සේ','මම','කොණ්ඩේ','කපනවා'],pool:['ඊට පස්සේ','මම','කොණ්ඩේ','කපනවා','කපන්න'],},
{t:'li',q:'Listen — which phrase?',say:'ෆෝන් එක හදන්න පුළුවන්ද',o:['ෆෝන් එක හදන්න පුළුවන්ද','ෆොටෝ එකක් ගන්න පුළුවන්ද','ෆෝන් එක කොහෙද','හදන්න පුළුවන්ද'],a:0},
{t:'mc',q:'He answers: පුළුවන් — හෙට එන්න. Your phone is ready…',o:['tomorrow','today','next week','never'],a:0},
{t:'li',q:'Listen — which word?',say:'කොණ්ඩේ',o:['කොණ්ඩේ','කඩේ','රෙදි','කන්ද'],a:0},
{t:'match',q:'Match errand and shop',pairs:[['කොණ්ඩේ කපන්න','the salon'],['ෆෝන් එක හදන්න','the repair stall'],['රෙදි','the laundry line'],['කෑම හදන්න','the kitchen']]},
{t:'mc',q:'අන්තිමට රෙදි හෝදලා — the laundry is…',o:['done — the -ලා!','still wet','tomorrow','lost'],a:0}]},
{id:'si_errand_5',title:'Checkpoint',step:'checkpoint',meta:'Errands mastered?',vocab:[],ex:[
{t:'mc',q:'"Fixes / makes" =',o:['හදනවා','හෝදනවා','කපනවා','අඳිනවා'],a:0},
{t:'wb',q:'Ask: can you fix the phone?',a:['ෆෝන් එක','හදන්න','පුළුවන්ද'],pool:['ෆෝන් එක','හදන්න','පුළුවන්ද','බෑ'],},
{t:'li',q:'Listen — which phrase?',say:'කොණ්ඩේ කපන්න',o:['කොණ්ඩේ කපන්න','රෙදි හෝදන්න','කොණ්ඩේ හදන්න','කපන්න'],a:0},
{t:'mc',q:'"Laundry / clothes (to wash)" =',o:['රෙදි','ඇඳුම් only','සරම','කොණ්ඩේ'],a:0},
{t:'li',q:'Listen — which word?',say:'හෝදනවා',o:['හෝදනවා','හදනවා','හිටියා','නානවා'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['කොණ්ඩේ','hair'],['රෙදි','laundry'],['හෝදනවා','washes'],['හදනවා','fixes']]}]},

/* --- Topic 80: guests --- */
{id:'si_guest',title:'Guests & visiting',step:'learn',meta:'ඇතුළට එන්න! වාඩිවෙන්න!',vocab:[['අමුත්තෝ','amuththoo','guests'],['ඇතුළට එන්න','aethulata enna','come inside!'],['වාඩිවෙන්න','waadiwenna','sit down please'],['තේ බොන්න එන්න','thee bonna enna','come drink tea!'],['ගෙදරට එන්න','gedharata enna','come to our home!']],ex:[
{t:'note',tag:'The open door',q:'ගෙදරට එන්න',body:'<p>Lankan friendship ends every good chat the same way: <span class="deva">ගෙදරට එන්න</span> <b>gedharata enna</b> — come to our home! It is meant.</p><p><span class="deva">අමුත්තෝ</span> <b>amuththoo</b> = guests — and guests outrank everyone.</p>',eg:[['ගෙදරට එන්න','gedharata enna','come to our home!'],['අමුත්තෝ','amuththoo','guests']]},
{t:'mc',q:'ගෙදරට එන්න means…',d:'ගෙදරට එන්න',r:'gedharata enna',o:['come to our home!','go home!','I am going home','welcome back'],a:0},
{t:'mc',q:'"Guests" =',o:['අමුත්තෝ','යාළුවෝ','ළමයි','අම්මලා'],a:0},
{t:'note',tag:'The welcome dance',q:'ඇතුළට එන්න · වාඩිවෙන්න',body:'<p>At the door: <span class="deva">ඇතුළට එන්න</span> <b>aethulata enna</b> — come inside! Then always: <span class="deva">වාඩිවෙන්න</span> <b>waadiwenna</b> — please sit!</p><p>And before you can blink: <span class="deva">තේ බොන්න එන්න</span> — come drink tea. Refusing takes three tries; surrender early.</p>',eg:[['ඇතුළට එන්න','aethulata enna','come inside!'],['වාඩිවෙන්න','waadiwenna','please sit'],['තේ බොන්න එන්න','thee bonna enna','come drink tea!']]},
{t:'mc',q:'What does වාඩිවෙන්න mean?',d:'වාඩිවෙන්න',r:'waadiwenna',o:['please sit down','please stand','please leave','please wait'],a:0},
{t:'wb',q:'Welcome: come inside!',a:['ඇතුළට','එන්න'],pool:['ඇතුළට','එන්න','යන්න'],},
{t:'mc',q:'The tea offer: your wisest move is to…',o:['accept with ස්තූතියි','refuse three times','pay for it','bring your own'],a:0}]},
{id:'si_guest_2',title:'Hear it',step:'recognize',meta:'Welcome by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ඇතුළට එන්න',o:['ඇතුළට එන්න','ගෙදරට එන්න','වාඩිවෙන්න','එන්න'],a:0},
{t:'li',q:'Listen — which word?',say:'වාඩිවෙන්න',o:['වාඩිවෙන්න','ඇතුළට','අමුත්තෝ','ඉන්න'],a:0},
{t:'mc',q:'Which phrase invites you to the house?',o:['ගෙදරට එන්න','ගෙදර යන්න','ගෙදරින් එන්න','ගෙදර ඉන්න'],a:0},
{t:'mc',q:'අමුත්තෝ ඇවිල්ලා! means…',o:['guests have arrived!','the guests left','no guests today','invite the guests'],a:0},
{t:'li',q:'Listen — which phrase?',say:'තේ බොන්න එන්න',o:['තේ බොන්න එන්න','තේ එකක් දෙන්න','තේ බොමු','ඇතුළට එන්න'],a:0},
{t:'mc',q:'Guests in a Lankan home outrank…',o:['everyone','the cat only','nobody','the TV'],a:0},
{t:'li',q:'Listen — which word?',say:'අමුත්තෝ',o:['අමුත්තෝ','අම්මා','මහත්තයා','ළමයි'],a:0}]},
{id:'si_guest_3',title:'Build it',step:'build',meta:'Host & be hosted',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ගෙදරට එන්න','come to our home'],['ඇතුළට එන්න','come inside'],['වාඩිවෙන්න','please sit'],['අමුත්තෝ','guests']]},
{t:'wb',q:'Invite: come drink tea!',a:['තේ','බොන්න','එන්න'],pool:['තේ','බොන්න','එන්න','යන්න'],},
{t:'mc',q:'The welcome order at the door:',o:['ඇතුළට එන්න → වාඩිවෙන්න → තේ','තේ → ඇතුළට','වාඩිවෙන්න → ඇතුළට','ගිහින් එන්නම් first'],a:0},
{t:'wb',q:'Report: guests have arrived',a:['අමුත්තෝ','ඇවිල්ලා'],pool:['අමුත්තෝ','ඇවිල්ලා','ආවා'],},
{t:'li',q:'Listen — which phrase?',say:'ගෙදරට එන්න',o:['ගෙදරට එන්න','ඇතුළට එන්න','ගෙදර එන්න','ගෙදරට යන්න'],a:0},
{t:'mc',q:'Your host commands කන්න කන්න! You…',o:['eat — happily','refuse firmly','pay','leave'],a:0}]},
{id:'si_guest_4',title:'Mix it',step:'mix',meta:'An afternoon visit',vocab:[],ex:[
{t:'mc',q:'You knock. The door opens wide:',o:['ඇතුළට එන්න! ඇතුළට එන්න!','කවුද?','යන්න','පස්සේ එන්න'],a:0},
{t:'wb',q:'Host: sit — I will bring tea — sit = වාඩිවෙන්න, bring = ගේනවා? just say: වාඩිවෙන්න — තේ ගේනවා? Keep it simple: වාඩිවෙන්න',a:['වාඩිවෙන්න'],pool:['වාඩිවෙන්න','ඉන්න'],},
{t:'li',q:'Listen — which phrase?',say:'අමුත්තෝ ඇවිල්ලා',o:['අමුත්තෝ ඇවිල්ලා','අම්මා ඇවිල්ලා','අමුත්තෝ','ඇවිල්ලා'],a:0},
{t:'mc',q:'Leaving after a lovely visit:',o:['ගිහින් එන්නම් — ගොඩක් ස්තූතියි!','ආයුබෝවන් only','යනවා','එපා'],a:0},
{t:'li',q:'Listen — which phrase?',say:'වාඩිවෙන්න',o:['වාඩිවෙන්න','ඇතුළට එන්න','වඳුරා','ඉන්න'],a:0},
{t:'match',q:'Match moment and line',pairs:[['at the door','ඇතුළට එන්න'],['in the room','වාඩිවෙන්න'],['the kettle sings','තේ බොන්න එන්න'],['goodbye','ගිහින් එන්නම්']]},
{t:'mc',q:'And as YOU leave, they will surely call…',o:['ආයෙත් එන්න! — come again!','ඉක්මනට යන්න','පරක්කුයි','නැත්නම්'],a:0}]},
{id:'si_guest_5',title:'Checkpoint',step:'checkpoint',meta:'Hosting mastered?',vocab:[],ex:[
{t:'mc',q:'"Come inside!" =',o:['ඇතුළට එන්න','ගෙදරට යන්න','එළියට එන්න','ඉන්න'],a:0},
{t:'wb',q:'Invite: come to our home!',a:['ගෙදරට','එන්න'],pool:['ගෙදරට','එන්න','යන්න'],},
{t:'li',q:'Listen — which word?',say:'අමුත්තෝ',o:['අමුත්තෝ','අම්මලා','යාළුවෝ','මහත්තයා'],a:0},
{t:'mc',q:'"Please sit" =',o:['වාඩිවෙන්න','ඉන්න','එන්න','නිදාගන්න'],a:0},
{t:'li',q:'Listen — which phrase?',say:'තේ බොන්න එන්න',o:['තේ බොන්න එන්න','තේ බොමු','ඇතුළට එන්න','තේ එකක් දෙන්න'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['අමුත්තෝ','guests'],['ඇතුළට එන්න','come inside'],['වාඩිවෙන්න','sit please'],['ආයෙත් එන්න','come again!']]}]},

/* --- Topic 81: fruit --- */
{id:'si_fruit',title:'Fruits',step:'learn',meta:'තැඹිලි කෙසෙල් කොස් දොඩම්',vocab:[['තැඹිලි','thaembili','king coconut'],['කෙසෙල්','kesel','banana'],['කොස්','kos','jackfruit'],['දොඩම්','dhodam','orange'],['තැඹිලි ගෙඩියක්','thaembili gediyak','one king coconut']],ex:[
{t:'note',tag:'The orange coconut',q:'තැඹිලි',body:'<p><span class="deva">තැඹිලි</span> <b>thaembili</b> — the king coconut: bright orange, sold at every roadside, machete-opened while you wait. Nature’s own bottled drink (spot the humming <span class="deva">ඹ</span>!).</p><p>Order one: <span class="deva">තැඹිලි ගෙඩියක් දෙන්න</span> (<span class="deva">ගෙඩිය</span> = a round fruit — the fruit counter-word).</p>',eg:[['තැඹිලි','thaembili','king coconut'],['තැඹිලි ගෙඩියක් දෙන්න','thaembili gediyak dhenna','one king coconut please']]},
{t:'mc',q:'A තැඹිලි is…',d:'තැඹිලි',r:'thaembili',o:['the orange king coconut you drink','a mango','a spice','a sweet'],a:0},
{t:'mc',q:'Fruit get counted with…',o:['ගෙඩියක්','එකක් only','දෙනෙක්','ටිකක්'],a:0},
{t:'note',tag:'Sweet friends',q:'කෙසෙල් කොස් දොඩම්',body:'<p><span class="deva">කෙසෙල්</span> <b>kesel</b> = banana (a dozen island varieties!) · <span class="deva">කොස්</span> <b>kos</b> = jackfruit, the giant that feeds whole families · <span class="deva">දොඩම්</span> <b>dhodam</b> = orange.</p><p>And your very first word returns: <span class="deva">අඹ</span> — mango, king of them all.</p>',eg:[['කෙසෙල්','kesel','banana'],['කොස්','kos','jackfruit'],['දොඩම්','dhodam','orange'],['අඹ','amba','mango']]},
{t:'mc',q:'What does කෙසෙල් mean?',d:'කෙසෙල්',r:'kesel',o:['banana','jackfruit','orange','papaya'],a:0},
{t:'wb',q:'Order: one king coconut please',a:['තැඹිලි','ගෙඩියක්','දෙන්න'],pool:['තැඹිලි','ගෙඩියක්','දෙන්න','එකක්'],},
{t:'mc',q:'The giant fruit that feeds families:',o:['කොස්','දොඩම්','කෙසෙල්','අඹ'],a:0}]},
{id:'si_fruit_2',title:'Hear them',step:'recognize',meta:'Fruit by ear',vocab:[],ex:[
{t:'li',q:'Listen — which fruit?',say:'තැඹිලි',o:['තැඹිලි','කෙසෙල්','දොඩම්','අඹ'],a:0},
{t:'li',q:'Listen — which fruit?',say:'කොස්',o:['කොස්','කෙසෙල්','දොඩම්','ගස'],a:0},
{t:'mc',q:'Which is the banana?',o:['කෙසෙල්','කොස්','දොඩම්','තැඹිලි'],a:0},
{t:'mc',q:'The roadside drink, opened by machete:',o:['තැඹිලි','තේ','කෝපි','කිරි'],a:0},
{t:'li',q:'Listen — which fruit?',say:'දොඩම්',o:['දොඩම්','දාහ','කොස්','අඹ'],a:0},
{t:'mc',q:'තැඹිලි flaunts which special letter?',o:['ඹ — the half-nasal mb','ට — retroflex','ං — the circle','ක් — killed k'],a:0},
{t:'li',q:'Listen — which fruit?',say:'කෙසෙල්',o:['කෙසෙල්','කොස්','කඩේ','තැඹිලි'],a:0}]},
{id:'si_fruit_3',title:'Build it',step:'build',meta:'Fill the basket',vocab:[],ex:[
{t:'match',q:'Match fruit and meaning',pairs:[['තැඹිලි','king coconut'],['කෙසෙල්','banana'],['කොස්','jackfruit'],['දොඩම්','orange']]},
{t:'wb',q:'Order: give me two bananas — bananas + count',a:['කෙසෙල්','දෙකක්','දෙන්න'],pool:['කෙසෙල්','දෙකක්','දෙන්න','ගෙඩියක්'],},
{t:'mc',q:'"How much is the jackfruit?" =',o:['කොස් කීයද','කොස් කීයක්ද','කොස් කොහෙද','කොස්ද'],a:0},
{t:'wb',q:'Say: I like mangoes — the -වලට pattern!',a:['මම','අඹ','වලට','කැමතියි'],pool:['මම','අඹ','වලට','කැමතියි','ඕනැ'],},
{t:'li',q:'Listen — which phrase?',say:'තැඹිලි ගෙඩියක්',o:['තැඹිලි ගෙඩියක්','තැඹිලි','කෙසෙල් ගෙඩියක්','ගෙඩියක්'],a:0},
{t:'mc',q:'Thirsty on a hot road — the perfect stop:',o:['තැඹිලි ගෙඩියක්','කෝපි එකක්','බත්','සපත්තු'],a:0}]},
{id:'si_fruit_4',title:'Mix it',step:'mix',meta:'Market of colors',vocab:[],ex:[
{t:'mc',q:'දොඩම් මොන පාටද? Naturally…',o:['තැඹිලි පාට! — orange!','රතු','නිල්','කළු'],a:0},
{t:'wb',q:'Tell: the monkeys ate the bananas! — past!',a:['වඳුරෝ','කෙසෙල්','කෑවා'],pool:['වඳුරෝ','කෙසෙල්','කෑවා','කනවා'],},
{t:'li',q:'Listen — which phrase?',say:'අඹ වලට කැමතියි',o:['අඹ වලට කැමතියි','කොස් වලට කැමතියි','අඹ ඕනැ','කැමතියි'],a:0},
{t:'mc',q:'The fruit-counter ගෙඩිය pairs with your Zone 5…',o:['-ක් counting (දෙකක්)','-යි prices','-ට endings','-ම emphasis'],a:0},
{t:'li',q:'Listen — which fruit?',say:'අඹ',o:['අඹ','කොස්','දොඩම්','තැඹිලි'],a:0},
{t:'match',q:'Match fruit and fame',pairs:[['තැඹිලි','the roadside drink'],['කොස්','the family-feeder'],['කෙසෙල්','the dozen varieties'],['අඹ','the king']]},
{t:'mc',q:'From Zone 1’s අඹ to Zone 12’s market — you have learned…',o:['the whole fruit stall','only two fruits','no fruits','the prices only'],a:0}]},
{id:'si_fruit_5',title:'Checkpoint',step:'checkpoint',meta:'Fruit mastered?',vocab:[],ex:[
{t:'mc',q:'"King coconut" =',o:['තැඹිලි','කොස්','පොල්','දොඩම්'],a:0},
{t:'wb',q:'Order: one king coconut please',a:['තැඹිලි','ගෙඩියක්','දෙන්න'],pool:['තැඹිලි','ගෙඩියක්','දෙන්න','දෙකක්'],},
{t:'li',q:'Listen — which fruit?',say:'කොස්',o:['කොස්','කෙසෙල්','දොඩම්','අඹ'],a:0},
{t:'mc',q:'"Banana" =',o:['කෙසෙල්','කොස්','තැඹිලි','මල'],a:0},
{t:'li',q:'Listen — which fruit?',say:'තැඹිලි',o:['තැඹිලි','දොඩම්','කෙසෙල්','අඹ'],a:0},
{t:'match',q:'Match fruit and meaning',pairs:[['තැඹිලි','king coconut'],['කෙසෙල්','banana'],['දොඩම්','orange'],['අඹ','mango']]}]},

/* --- Topic 82: tastes --- */
{id:'si_taste',title:'Tastes',step:'learn',meta:'සැරයි! පැණි රසයි ඇඹුල්',vocab:[['සැරයි','saerayi','it is spicy!'],['පැණි රසයි','paeni rasayi','it is sweet'],['ඇඹුල්','aembul','sour'],['තිත්තයි','thiththayi','it is bitter'],['හරිම සැරයි','harima saerayi','very spicy!']],ex:[
{t:'note',tag:'The fire test',q:'සැරයි',body:'<p>The one taste-word you NEED on the spice island: <span class="deva">සැරයි</span> <b>saerayi</b> — it is spicy-hot! Often upgraded: <span class="deva">හරිම සැරයි!</span></p><p>The kadē will ask kindly: <span class="deva">සැරයිද?</span> Answer honestly. Your tongue will thank you.</p>',eg:[['සැරයි','saerayi','spicy!'],['හරිම සැරයි','harima saerayi','VERY spicy'],['සැරයිද','saerayidha','is it spicy?']]},
{t:'mc',q:'What does සැරයි mean?',d:'සැරයි',r:'saerayi',o:['it is spicy','it is sweet','it is sour','it is cold'],a:0},
{t:'mc',q:'The kadē asks සැරයිද? — you cannot handle heat:',o:['සැර එපා!','සැරයි!','හරිම සැරයි','ඔව්'],a:0},
{t:'note',tag:'The sweet & the sharp',q:'පැණි රසයි · ඇඹුල් · තිත්තයි',body:'<p><span class="deva">පැණි රසයි</span> <b>paeni rasayi</b> = sweet (<span class="deva">පැණි</span> = honey/treacle!) · <span class="deva">ඇඹුල්</span> <b>aembul</b> = sour (that <span class="deva">ඹ</span> again) · <span class="deva">තිත්තයි</span> <b>thiththayi</b> = bitter.</p><p><span class="deva">තැඹිලි පැණි රසයි</span> — king coconut is sweet. Life is good.</p>',eg:[['පැණි රසයි','paeni rasayi','sweet'],['ඇඹුල්','aembul','sour'],['තිත්තයි','thiththayi','bitter']]},
{t:'mc',q:'පැණි රසයි literally means…',o:['honey-tasty — sweet','fire-tasty','water-tasty','salt-tasty'],a:0},
{t:'wb',q:'Warn a friend: very spicy!',a:['හරිම','සැරයි'],pool:['හරිම','සැරයි','පැණි'],},
{t:'mc',q:'"Sour" =',o:['ඇඹුල්','තිත්ත','පැණි','සැර'],a:0}]},
{id:'si_taste_2',title:'Hear it',step:'recognize',meta:'Tongue by ear',vocab:[],ex:[
{t:'li',q:'Listen — which taste?',say:'සැරයි',o:['සැරයි','රසයි','තිත්තයි','ඇඹුල්'],a:0},
{t:'li',q:'Listen — which phrase?',say:'පැණි රසයි',o:['පැණි රසයි','හරිම රසයි','රසයි','සැරයි'],a:0},
{t:'mc',q:'Which is "bitter"?',o:['තිත්තයි','ඇඹුල්','සැරයි','පැණි'],a:0},
{t:'mc',q:'මිරිස් ගොඩක් — the curry will be…',o:['සැරයි','පැණි රසයි','ඇඹුල්','තිත්තයි'],a:0},
{t:'li',q:'Listen — which word?',say:'ඇඹුල්',o:['ඇඹුල්','අඹ','ඇඳුම්','තිත්ත'],a:0},
{t:'mc',q:'Answering සැරයිද honestly saves…',o:['your tongue','money','time','face'],a:0},
{t:'li',q:'Listen — which phrase?',say:'හරිම සැරයි',o:['හරිම සැරයි','සැරයි','හරිම රසයි','සැර එපා'],a:0}]},
{id:'si_taste_3',title:'Build it',step:'build',meta:'Describe the plate',vocab:[],ex:[
{t:'match',q:'Match taste and meaning',pairs:[['සැරයි','spicy'],['පැණි රසයි','sweet'],['ඇඹුල්','sour'],['තිත්තයි','bitter']]},
{t:'wb',q:'Say: the king coconut is sweet',a:['තැඹිලි','පැණි','රසයි'],pool:['තැඹිලි','පැණි','රසයි','සැරයි'],},
{t:'mc',q:'"Not spicy, please" — your kadē kit:',o:['සැර එපා','සැරයි','සැර ඕනැ','සැර දෙන්න'],a:0},
{t:'wb',q:'React: the curry is very spicy!',a:['හොදි','හරිම','සැරයි'],pool:['හොදි','හරිම','සැරයි','රසයි'],},
{t:'li',q:'Listen — which word?',say:'තිත්තයි',o:['තිත්තයි','තිත්ත','ඇඹුල්','සැරයි'],a:0},
{t:'mc',q:'Lime on the tongue:',o:['ඇඹුල්','පැණි රසයි','තිත්තයි','සැරයි'],a:0}]},
{id:'si_taste_4',title:'Mix it',step:'mix',meta:'A brave plate',vocab:[],ex:[
{t:'mc',q:'First bite, eyes water, but so good:',o:['සැරයි — ඒත් හරිම රසයි!','තිත්තයි','ඇඹුල් එපා','පැණි රසයි'],a:0},
{t:'wb',q:'Ask: is this spicy?',a:['මේක','සැරයිද'],pool:['මේක','සැරයිද','සැරයි'],},
{t:'li',q:'Listen — which phrase?',say:'සැර එපා',o:['සැර එපා','සැරයි','මට එපා','හරිම සැරයි'],a:0},
{t:'mc',q:'මේ දොඩම් ටිකක් ඇඹුල් means…',o:['this orange is a bit sour','the orange is sweet','oranges are bitter','no oranges'],a:0},
{t:'li',q:'Listen — which word?',say:'පැණි',o:['පැණි','පැණි රසයි','පනහ','පාට'],a:0},
{t:'match',q:'Match food and taste',pairs:[['මිරිස් හොදි','සැරයි'],['තැඹිලි','පැණි රසයි'],['lime','ඇඹුල්'],['strong tea leaf','තිත්තයි']]},
{t:'mc',q:'Four tastes + හරිම + එපා = you can now…',o:['order exactly what your tongue wants','only eat rice','avoid all curry','cook'],a:0}]},
{id:'si_taste_5',title:'Checkpoint',step:'checkpoint',meta:'Tastes mastered?',vocab:[],ex:[
{t:'mc',q:'"Spicy!" =',o:['සැරයි','රසයි','ඇඹුල්','තිත්තයි'],a:0},
{t:'wb',q:'Plead: not spicy please',a:['සැර','එපා'],pool:['සැර','එපා','ඕනැ'],},
{t:'li',q:'Listen — which phrase?',say:'පැණි රසයි',o:['පැණි රසයි','හරිම සැරයි','රසයි','ඇඹුල්'],a:0},
{t:'mc',q:'"Sour" =',o:['ඇඹුල්','තිත්ත','පැණි','සැර'],a:0},
{t:'li',q:'Listen — which word?',say:'සැරයි',o:['සැරයි','සරම','රසයි','සැර'],a:0},
{t:'match',q:'Match taste and meaning',pairs:[['සැරයි','spicy'],['පැණි රසයි','sweet'],['ඇඹුල්','sour'],['තිත්තයි','bitter']]}]},

/* --- Topic 83: polite polish --- */
{id:'si_oba',title:'Polite forms',step:'learn',meta:'බොහොම ස්තූතියි · ඔබ as recognition',vocab:[['බොහොම','bohoma','very much'],['බොහොම ස්තූතියි','bohoma sthuuthiyi','thank you very much'],['බොහොම හොඳයි','bohoma hondhayi','very good'],['කරුණාකර','karunaakara','please (formal)'],['ඔබ','oba','you (formal — recognize it)']],ex:[
{t:'note',tag:'The golden thanks',q:'බොහොම ස්තූතියි',body:'<p><span class="deva">බොහොම</span> <b>bohoma</b> = very much. The warmest thanks on the island: <span class="deva">බොහොම ස්තූතියි</span> <b>bohoma sthuuthiyi</b> — thank you very much.</p><p>Also: <span class="deva">බොහොම හොඳයි</span> — very good, well done!</p>',eg:[['බොහොම ස්තූතියි','bohoma sthuuthiyi','thank you very much'],['බොහොම හොඳයි','bohoma hondhayi','very good!']]},
{t:'mc',q:'බොහොම ස්තූතියි means…',d:'බොහොම ස්තූතියි',r:'bohoma sthuuthiyi',o:['thank you very much','thanks a little','you are welcome','goodbye'],a:0},
{t:'mc',q:'බොහොම vs ගොඩක් vs හරිම:',o:['all crank things up — bohoma is the politest','all mean small','opposites','only one is real'],a:0},
{t:'note',tag:'Signs & speeches',q:'ඔබ & කරුණාකර',body:'<p>Formal Sinhala — announcements, signs, TV — swaps your street words: <span class="deva">ඔබ</span> <b>oba</b> for <span class="deva">ඔයා</span>, and <span class="deva">කරුණාකර</span> <b>karunaakara</b> for <span class="deva">කරුණාකරලා</span>.</p><p><span class="deva">කරුණාකර රැඳී සිටින්න</span> — please wait (says every queue sign). Recognize it; keep speaking the warm street way.</p>',eg:[['ඔබ','oba','you (formal)'],['කරුණාකර','karunaakara','please (formal)']]},
{t:'mc',q:'Where do you meet ඔබ and කරුණාකර?',o:['signs, TV & announcements','the kadē','the kade','never'],a:0},
{t:'wb',q:'Thank warmly: thank you very much',a:['බොහොම','ස්තූතියි'],pool:['බොහොම','ස්තූතියි','ගොඩක්'],},
{t:'mc',q:'A sign says කරුණාකර රැඳී සිටින්න. It asks you to…',o:['please wait','please leave','please pay','please sing'],a:0}]},
{id:'si_oba_2',title:'Hear it',step:'recognize',meta:'Polish by ear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'බොහොම ස්තූතියි',o:['බොහොම ස්තූතියි','ගොඩක් ස්තූතියි','ස්තූතියි','බොහොම හොඳයි'],a:0},
{t:'li',q:'Listen — which word?',say:'බොහොම',o:['බොහොම','ගොඩක්','හරිම','බොහෝ'],a:0},
{t:'mc',q:'Which is the FORMAL please?',o:['කරුණාකර','කරුණාකරලා','දෙන්න','බොහොම'],a:0},
{t:'mc',q:'බොහොම හොඳයි! is perfect for…',o:['praising warmly','complaining','ordering','refusing'],a:0},
{t:'li',q:'Listen — which word?',say:'කරුණාකර',o:['කරුණාකර','කරුණාකරලා','කරන්න','බොහොම'],a:0},
{t:'mc',q:'You SAY ඔයා; signs SAY…',o:['ඔබ','ඕක','ඔව්','ඔතන'],a:0},
{t:'li',q:'Listen — which phrase?',say:'බොහොම හොඳයි',o:['බොහොම හොඳයි','බොහොම ස්තූතියි','හරිම හොඳයි','හොඳයි'],a:0}]},
{id:'si_oba_3',title:'Build it',step:'build',meta:'Shine your manners',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['බොහොම ස්තූතියි','thank you very much'],['බොහොම හොඳයි','very good'],['කරුණාකර','please (formal)'],['ඔබ','you (formal)']]},
{t:'wb',q:'Praise: very good!',a:['බොහොම','හොඳයි'],pool:['බොහොම','හොඳයි','ස්තූතියි'],},
{t:'mc',q:'Street pair ↔ formal pair:',o:['ඔයා/කරුණාකරලා ↔ ඔබ/කරුණාකර','ඔබ ↔ ඕක','ඔයා ↔ ඔව්','same words'],a:0},
{t:'wb',q:'Thank the helpful stranger: thank you very much',a:['බොහොම','ස්තූතියි'],pool:['බොහොම','ස්තූතියි','හොඳයි'],},
{t:'li',q:'Listen — which word?',say:'ඔබ',o:['ඔබ','ඔයා','ඔව්','අඹ'],a:0},
{t:'mc',q:'Your teacher nails a lesson. You say…',o:['බොහොම හොඳයි!','ගණන් වැඩියි','කමක් නෑ','එපා'],a:0}]},
{id:'si_oba_4',title:'Mix it',step:'mix',meta:'Grace notes',vocab:[],ex:[
{t:'mc',q:'The kadē aunty refuses payment for the tea:',o:['බොහොම බොහොම ස්තූතියි!','හරි','කීයද','එපා'],a:0},
{t:'wb',q:'Full warm thanks: thank you very much — again!',a:['බොහොම','ස්තූතියි'],pool:['බොහොම','ස්තූතියි','ආයෙත්'],},
{t:'li',q:'Listen — which phrase?',say:'කරුණාකර රැඳී සිටින්න',o:['කරුණාකර රැඳී සිටින්න','කරුණාකරලා ඉන්න','ටිකක් ඉන්න','වාඩිවෙන්න'],a:0},
{t:'mc',q:'That sign-phrase is the FORMAL twin of your street…',o:['ටිකක් ඉන්න','යන්න එපා','වාඩිවෙන්න','එන්න'],a:0},
{t:'li',q:'Listen — which word?',say:'බොහොම',o:['බොහොම','බොහෝ','හරිම','ගොඩක්'],a:0},
{t:'match',q:'Match register',pairs:[['street you','ඔයා'],['sign you','ඔබ'],['street please','කරුණාකරලා'],['sign please','කරුණාකර']]},
{t:'mc',q:'Why learn the formal twins at all?',o:['to READ the island, while speaking warmly','to sound stiff','they are required','no reason'],a:0}]},
{id:'si_oba_5',title:'Checkpoint',step:'checkpoint',meta:'Polish mastered?',vocab:[],ex:[
{t:'mc',q:'"Thank you very much" =',o:['බොහොම ස්තූතියි','ස්තූතියි','ගොඩක් හොඳයි','බොහොම'],a:0},
{t:'wb',q:'Praise: very good!',a:['බොහොම','හොඳයි'],pool:['බොහොම','හොඳයි','සැරයි'],},
{t:'li',q:'Listen — which phrase?',say:'බොහොම ස්තූතියි',o:['බොහොම ස්තූතියි','බොහොම හොඳයි','ස්තූතියි','කරුණාකර'],a:0},
{t:'mc',q:'The formal "you" on signs:',o:['ඔබ','ඔයා','එයා','අපි'],a:0},
{t:'li',q:'Listen — which word?',say:'කරුණාකර',o:['කරුණාකර','කරුණාකරලා','බොහොම','කරන්න'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['බොහොම','very much'],['බොහොම ස්තූතියි','warmest thanks'],['කරුණාකර','formal please'],['ඔබ','formal you']]}]},

/* --- Topic 84: make it home --- */
{id:'si_home',title:'Make it home',step:'learn',meta:'ලංකාව මගේ ගෙදර වගේ',vocab:[['වගේ','wagee','like / as'],['ගෙදර වගේ','gedhara wagee','like home'],['ආදරෙයි','aadhareyi','loves'],['මම ලංකාවට ආදරෙයි','mama lankaawata aadhareyi','I love Sri Lanka'],['ලංකාව මගේ ගෙදර වගේ','lankaawa magee gedhara wagee','Sri Lanka is like my home']],ex:[
{t:'note',tag:'Like home',q:'වගේ',body:'<p><span class="deva">වගේ</span> <b>wagee</b> = like, as: <span class="deva">ගෙදර වගේ</span> — like home · <span class="deva">අම්මා වගේ</span> — like a mother · <span class="deva">මම ලංකාව මගේ ගම වගේ දැනෙනවා</span>? Simply: <span class="deva">ලංකාව මගේ ගෙදර වගේ</span> — Sri Lanka is like my home.</p>',eg:[['වගේ','wagee','like'],['ගෙදර වගේ','gedhara wagee','like home'],['ලංකාව මගේ ගෙදර වගේ','lankaawa magee gedhara wagee','Sri Lanka is like my home']]},
{t:'mc',q:'What does වගේ mean?',d:'වගේ',r:'wagee',o:['like / as','very','with','because'],a:0},
{t:'mc',q:'"Like a mother" =',o:['අම්මා වගේ','අම්මාට වගේ','වගේ අම්මා','අම්මාගේ'],a:0},
{t:'note',tag:'The last word',q:'ආදරෙයි',body:'<p>One word to keep forever: <span class="deva">ආදරෙයි</span> <b>aadhareyi</b> — loves. It rides the dative, like every feeling: <span class="deva">මම ලංකාවට ආදරෙයි</span> — I love Sri Lanka. <span class="deva">මම ඔයාට ආදරෙයි</span> — I love you.</p><p>Say the first one to any Sri Lankan and watch the whole day change.</p>',eg:[['මම ලංකාවට ආදරෙයි','mama lankaawata aadhareyi','I love Sri Lanka'],['මම ඔයාට ආදරෙයි','mama oyaata aadhareyi','I love you']]},
{t:'mc',q:'මම ලංකාවට ආදරෙයි means…',d:'මම ලංකාවට ආදරෙයි',r:'mama lankaawata aadhareyi',o:['I love Sri Lanka','Sri Lanka loves me','I live in Sri Lanka','Sri Lanka is lovely'],a:0},
{t:'wb',q:'Declare: Sri Lanka is like my home',a:['ලංකාව','මගේ','ගෙදර','වගේ'],pool:['ලංකාව','මගේ','ගෙදර','වගේ','ආදරෙයි'],},
{t:'mc',q:'ආදරෙයි rides which pattern one last time?',o:['the dative -ට','the -ලා perfect','the -මු hortative','plain SOV'],a:0}]},
{id:'si_home_2',title:'Hear it',step:'recognize',meta:'Belonging by ear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'වගේ',o:['වගේ','වැව','මගේ','වයස'],a:0},
{t:'li',q:'Listen — which phrase?',say:'මම ලංකාවට ආදරෙයි',o:['මම ලංකාවට ආදරෙයි','මම ඔයාට ආදරෙයි','ලංකාව ලස්සනයි','ආදරෙයි'],a:0},
{t:'mc',q:'Which word means "loves"?',o:['ආදරෙයි','කැමතියි','ඕනැ','වගේ'],a:0},
{t:'mc',q:'කැමතියි vs ආදරෙයි:',o:['likes vs loves','loves vs likes','both like','both love'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ගෙදර වගේ',o:['ගෙදර වගේ','ගෙදරට','මගේ ගෙදර','ගෙදර'],a:0},
{t:'mc',q:'ලංකාව මගේ ගෙදර වගේ needs a word for "is":',o:['no — nouns side by side, as always','yes, always','only in writing','only formally'],a:0},
{t:'li',q:'Listen — which word?',say:'ආදරෙයි',o:['ආදරෙයි','ආයෙත්','අපේ','කැමතියි'],a:0}]},
{id:'si_home_3',title:'Build it',step:'build',meta:'Say what you feel',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['වගේ','like / as'],['ගෙදර වගේ','like home'],['ආදරෙයි','loves'],['මම ලංකාවට ආදරෙයි','I love Sri Lanka']]},
{t:'wb',q:'Declare: I love Sri Lanka',a:['මම','ලංකාවට','ආදරෙයි'],pool:['මම','ලංකාවට','ආදරෙයි','කැමතියි'],},
{t:'mc',q:'"The kadē aunty is like a mother" =',o:['කඩේ නෝනා අම්මා වගේ','කඩේ නෝනා අම්මාට','අම්මා කඩේ වගේ','නෝනා වගේ අම්මා'],a:0},
{t:'wb',q:'Say: the village is like my home',a:['ගම','මගේ','ගෙදර','වගේ'],pool:['ගම','මගේ','ගෙදර','වගේ','ළඟ'],},
{t:'li',q:'Listen — which phrase?',say:'මම ඔයාට ආදරෙයි',o:['මම ඔයාට ආදරෙයි','මම ලංකාවට ආදරෙයි','ඔයාට ආදරෙයි','මම කැමතියි'],a:0},
{t:'mc',q:'Twelve zones of tools inside one sentence — ලංකාව මගේ ගෙදර වගේ uses…',o:['no-copula + -ගේ + වගේ','the past tense','questions','commands'],a:0}]},
{id:'si_home_4',title:'Mix it',step:'mix',meta:'The journey home',vocab:[],ex:[
{t:'mc',q:'Your kadē aunty asks why you keep coming back:',o:['ලංකාව මගේ ගෙදර වගේ','ගණන් ලාබයි','බත් ඕනැ','දුරයි'],a:0},
{t:'wb',q:'Tell your friend: you are like family — family = පවුල',a:['ඔයා','මගේ','පවුල','වගේ'],pool:['ඔයා','මගේ','පවුල','වගේ','ආදරෙයි'],},
{t:'li',q:'Listen — which phrase?',say:'ලංකාව මගේ ගෙදර වගේ',o:['ලංකාව මගේ ගෙදර වගේ','ගම මගේ ගෙදර වගේ','ලංකාව ලස්සනයි','මගේ ගෙදර'],a:0},
{t:'mc',q:'And the reply that will come, beaming:',o:['ආයෙත් එන්න! ගෙදරට එන්න!','කීයද','මොකක්ද','පරක්කුයි'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ආයුබෝවන්',o:['ආයුබෝවන්','ආදරෙයි','ආයෙත්','ගිහින් එන්නම්'],a:0},
{t:'match',q:'Match your journey',pairs:[['Zone 1','ක — the first letter'],['Zone 3','මට ඕනැ'],['Zone 7','කෑවා — the past'],['Zone 12','ආදරෙයි']]},
{t:'mc',q:'You started with ආයුබෝවන්. You finish with…',o:['ආදරෙයි','බෑ','එපා','නෑ'],a:0}]},
{id:'si_home_5',title:'Checkpoint',step:'checkpoint',meta:'The course complete!',vocab:[],ex:[
{t:'mc',q:'"Like / as" =',o:['වගේ','වඩා','වලට','වැව'],a:0},
{t:'wb',q:'One last time: I love Sri Lanka',a:['මම','ලංකාවට','ආදරෙයි'],pool:['මම','ලංකාවට','ආදරෙයි','වගේ'],},
{t:'li',q:'Listen — which phrase?',say:'මම ලංකාවට ආදරෙයි',o:['මම ලංකාවට ආදරෙයි','මම ඔයාට ආදරෙයි','ලංකාවට ආදරෙයි','මම ආදරෙයි'],a:0},
{t:'mc',q:'"Sri Lanka is like my home" =',o:['ලංකාව මගේ ගෙදර වගේ','ලංකාවේ මගේ ගෙදර','මගේ ගෙදර ලංකාව ද','ලංකාව ගෙදරට වගේ'],a:0},
{t:'li',q:'Listen — which word?',say:'වගේ',o:['වගේ','මගේ','වැව','ආයෙත්'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['වගේ','like'],['ආදරෙයි','loves'],['ගෙදර වගේ','like home'],['බොහොම ස්තූතියි','thank you very much']]}]},
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
