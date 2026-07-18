/* ===== MONGOLIAN LANGUAGE PACK (Zones 1–2 · early access) =====
   Mongolian-DRIVEN curriculum, researched before shipping (Wikivoyage
   Mongolian phrasebook for all core phrases/numbers; Wikipedia Mongolian
   Cyrillic alphabet). Modern Mongolian in Mongolia uses CYRILLIC — system
   fonts cover it, no webfont needed, and it is left-to-right.
   Romanization scheme (enforced — NO Cyrillic in rom fields; scan [Ѐ-ӿ]):
   - Letter tiles teach the distinction ö (Ө) / ü (Ү) — the two letters
     Mongolian added to Cyrillic; these Latin-extended marks are allowed in
     letter-name roms for clarity.
   - WORD romanizations use the informal ASCII convention: ө→o, ү→u
     (ugui, suu, onoodor — as in "Ulaanbaatar"); the AUDIO carries the true
     vowel sounds, and lessons flag the ө/ү distinction where it matters.
   - х = kh, ц = ts, ч = ch, ш = sh, ж = j, з = z, й = i, ы = ii,
     е = ye, ё = yo, ю = yu, я = ya. Long vowels are doubled (uu, aa).
   Zone-1 story: Cyrillic's FALSE FRIENDS (Н=n, Р=r, С=s, В=v, Х=kh look
   like Latin letters but sound different) + the two Mongolian letters Ө Ү
   + vowel harmony as a taste. Zone 2: greetings, pronouns (чи/та split),
   numbers 1–100, courtesy (за! зүгээр!), the -г гэдэг name pattern, days.
   Growing zone by zone from here — next zones append to MN_UNITS/
   MN_LESSONS the way Khmer grew.
   Art: secular Mongolia — endless steppe under a huge sky, distant ridge,
   two gers (round felt tents), grazing horses. Mascot: chestnut foal. */

/* --- hero: vast steppe, gers & horses right, huge calm sky over the title --- */
const MN_HERO='<circle class="orb-glow" cx="930" cy="118" r="76"/><circle class="orb" cx="930" cy="118" r="46"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="120" cy="58" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="240" cy="104" r="1.2"/><circle cx="360" cy="46" r="2"/><circle cx="470" cy="122" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="600" cy="60" r="1.3"/><circle cx="700" cy="112" r="1.5" class="tw" style="animation-delay:2s"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="74" rx="28" ry="11"/><ellipse cx="78" cy="69" rx="22" ry="13"/><ellipse cx="26" cy="72" rx="20" ry="10"/></g>'
/* steppe larks */
+'<g class="art-detail" fill="none" stroke="var(--mtn-far)" stroke-width="1.8" stroke-linecap="round" opacity=".6" aria-hidden="true"><path d="M200 92 q6 -5 12 0 q6 -5 12 0"/><path d="M268 110 q5 -4.5 10 0 q5 -4.5 10 0"/></g>'
/* far: one long blue ridge, breathing gently, a touch higher right */
+'<path class="far" d="M0 252 Q140 246 280 249 Q420 244 560 248 Q680 243 760 240 Q840 230 920 236 Q1000 222 1080 230 Q1150 224 1200 228 L1200 320 L0 320 Z"/>'
/* mid: the golden steppe, wide and calm */
+'<path class="mid" d="M0 320 L0 282 Q200 274 400 279 Q600 284 800 278 Q1000 272 1200 278 L1200 320 Z"/>'
/* grass-shine lines under the title */
+'<path class="snow" opacity=".25" d="M80 292 Q230 286 380 290 L378 296 Q230 290 84 298 Z"/>'
+'<path class="snow" opacity=".25" d="M170 304 Q320 296 450 302 L448 308 Q320 300 174 310 Z"/>'
/* the gers — brilliant white felt, doors to the south */
+'<g class="snow">'
+'<path d="M1004 276 Q1004 240 1048 240 Q1092 240 1092 276 Z"/>'
+'<path d="M1008 276 L1088 276 L1088 300 L1008 300 Z"/>'
+'<path d="M1044 240 L1044 232 L1052 232 L1052 240 Z"/>'
+'<path d="M1116 282 Q1116 256 1148 256 Q1180 256 1180 282 Z"/>'
+'<path d="M1119 282 L1177 282 L1177 300 L1119 300 Z"/>'
+'</g>'
/* ger doors + felt bands */
+'<path fill="var(--tree)" d="M1040 300 L1040 280 L1056 280 L1056 300 Z M1142 300 L1142 286 L1154 286 L1154 300 Z"/>'
+'<g class="art-detail" fill="none" stroke="var(--mtn-mid)" stroke-width="1.6" opacity=".45" aria-hidden="true"><path d="M1010 262 Q1048 254 1086 262"/><path d="M1008 286 L1088 286"/><path d="M1121 270 Q1148 264 1175 270"/></g>'
/* grazing horses (fine detail) */
+'<g class="art-detail" fill="var(--tree)" aria-hidden="true">'
+'<g transform="translate(826,268)"><path d="M16 30 L16 20 L20 20 L20 30 L17 30 Z M26 30 L26 20 L30 20 L30 30 L27 30 Z M40 30 L40 20 L44 20 L44 30 L41 30 Z M50 30 L50 20 L54 20 L54 30 L51 30 Z M14 20 Q12 10 20 9 L44 9 Q54 9 54 16 L54 20 Z M20 9 Q14 10 11 16 Q9 20 5 22 L2 26 Q1 28 4 28 L7 27 Q11 24 13 20 Q15 14 22 12 Z M54 12 Q60 14 61 22 Q58 20 53 17 Z"/></g>'
+'<g transform="translate(906,276) scale(0.72)"><path d="M16 30 L16 20 L20 20 L20 30 L17 30 Z M26 30 L26 20 L30 20 L30 30 L27 30 Z M40 30 L40 20 L44 20 L44 30 L41 30 Z M50 30 L50 20 L54 20 L54 30 L51 30 Z M14 20 Q12 10 20 9 L44 9 Q54 9 54 16 L54 20 Z M20 9 Q14 10 11 16 Q9 20 5 22 L2 26 Q1 28 4 28 L7 27 Q11 24 13 20 Q15 14 22 12 Z M54 12 Q60 14 61 22 Q58 20 53 17 Z"/></g>'
+'</g>'
/* near: green foreground swell */
+'<g class="near"><path d="M0 306 Q160 288 320 300 Q480 312 640 300 Q800 288 960 302 Q1080 310 1200 300 L1200 320 L0 320 Z"/></g>';

/* --- band: calm left, white ger + ridge right --- */
const MN_BAND='<circle class="orb-glow" cx="1046" cy="88" r="36"/><circle class="orb" cx="1046" cy="88" r="21"/>'
+'<path class="far" d="M0 154 Q120 148 240 151 Q360 146 480 150 Q600 146 720 149 Q800 142 880 146 Q960 136 1040 142 Q1120 136 1200 140 L1200 200 L0 200 Z"/>'
+'<path class="mid" d="M0 200 L0 172 Q300 164 600 170 Q900 176 1200 168 L1200 200 Z"/>'
/* white ger */
+'<g class="snow"><path d="M880 168 Q880 148 906 148 Q932 148 932 168 Z"/><path d="M883 168 L929 168 L929 184 L883 184 Z"/><path d="M903 148 L903 143 L909 143 L909 148 Z"/></g>'
+'<path fill="var(--tree)" d="M901 184 L901 172 L911 172 L911 184 Z"/>'
/* grazing horse (fine detail) */
+'<g class="art-detail" fill="var(--tree)" aria-hidden="true"><g transform="translate(1010,158) scale(0.62)"><path d="M16 30 L16 20 L20 20 L20 30 L17 30 Z M26 30 L26 20 L30 20 L30 30 L27 30 Z M40 30 L40 20 L44 20 L44 30 L41 30 Z M50 30 L50 20 L54 20 L54 30 L51 30 Z M14 20 Q12 10 20 9 L44 9 Q54 9 54 16 L54 20 Z M20 9 Q14 10 11 16 Q9 20 5 22 L2 26 Q1 28 4 28 L7 27 Q11 24 13 20 Q15 14 22 12 Z M54 12 Q60 14 61 22 Q58 20 53 17 Z"/></g></g>'
+'<g class="near"><path d="M0 186 Q300 168 600 178 Q900 188 1200 178 L1200 200 L0 200 Z"/></g>';

/* --- mascot: chestnut foal (moods: happy / cheer / oops) --- */
function MN_MASCOT(m){
  var base='<ellipse cx="32" cy="45" rx="16" ry="12" fill="#B97A4B"/>' /* body */
  +'<path d="M15 24 L11 12 L21 18 Z" fill="#8A552F"/><path d="M49 24 L53 12 L43 18 Z" fill="#8A552F"/>' /* ears */
  +'<circle cx="32" cy="30" r="16" fill="#C98A57"/>' /* head */
  +'<path d="M24 15 Q32 9 40 15 L38 20 Q32 15 26 20 Z" fill="#7A4a28"/>' /* forelock */
  +'<ellipse cx="32" cy="40" rx="8.5" ry="6.5" fill="#E8C9A6"/>' /* muzzle */
  +'<circle cx="29" cy="41" r="1.4" fill="#5b3d22"/><circle cx="35" cy="41" r="1.4" fill="#5b3d22"/>' /* nostrils */
  +'<path d="M44 38 Q52 40 54 48 Q48 46 44 42 Z" fill="#7A4a28"/>'; /* tail wisp */
  var f;
  if(m==='cheer')f='<path d="M22 28.5 Q25 25 28 28.5" fill="none" stroke="#4a2f18" stroke-width="2.2" stroke-linecap="round"/><path d="M36 28.5 Q39 25 42 28.5" fill="none" stroke="#4a2f18" stroke-width="2.2" stroke-linecap="round"/><path d="M27 46.5 Q32 50.5 37 46.5" fill="none" stroke="#4a2f18" stroke-width="2.2" stroke-linecap="round"/>';
  else if(m==='oops')f='<path d="M21.5 26.5 Q25 25.3 28.5 26.5" fill="none" stroke="#4a2f18" stroke-width="1.6" stroke-linecap="round"/><path d="M35.5 26.5 Q39 25.3 42.5 26.5" fill="none" stroke="#4a2f18" stroke-width="1.6" stroke-linecap="round"/><circle cx="25" cy="29.5" r="2" fill="#4a2f18"/><circle cx="39" cy="29.5" r="2" fill="#4a2f18"/><ellipse cx="32" cy="47" rx="2.2" ry="2.8" fill="#4a2f18"/>';
  else f='<circle cx="25" cy="29" r="2.5" fill="#4a2f18"/><circle cx="39" cy="29" r="2.5" fill="#4a2f18"/><circle cx="25.8" cy="28.2" r="0.7" fill="#fff"/><circle cx="39.8" cy="28.2" r="0.7" fill="#fff"/><path d="M28 46.5 Q32 49.3 36 46.5" fill="none" stroke="#4a2f18" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+base+f+'</svg>';}

/* ===================== UNITS (2 zones / 14 topics) ===================== */
const MN_UNITS=[
  {n:1,t:'The Script',d:'Монгол цагаан толгой — read Cyrillic',lessons:['mn_c1','mn_c1_2','mn_c1_3','mn_c1_4','mn_c1_5','mn_c2','mn_c2_2','mn_c2_3','mn_c2_4','mn_c2_5','mn_c3','mn_c3_2','mn_c3_3','mn_c3_4','mn_c3_5','mn_c4','mn_c4_2','mn_c4_3','mn_c4_4','mn_c4_5','mn_c5','mn_c5_2','mn_c5_3','mn_c5_4','mn_c5_5','mn_c6','mn_c6_2','mn_c6_3','mn_c6_4','mn_c6_5','mn_c7','mn_c7_2','mn_c7_3','mn_c7_4','mn_c7_5']},
  {n:2,t:'Foundations',d:'Greetings, people, numbers & days',lessons:['mn_greet','mn_greet_2','mn_greet_3','mn_greet_4','mn_greet_5','mn_pron','mn_pron_2','mn_pron_3','mn_pron_4','mn_pron_5','mn_num1','mn_num1_2','mn_num1_3','mn_num1_4','mn_num1_5','mn_num2','mn_num2_2','mn_num2_3','mn_num2_4','mn_num2_5','mn_court','mn_court_2','mn_court_3','mn_court_4','mn_court_5','mn_intro','mn_intro_2','mn_intro_3','mn_intro_4','mn_intro_5','mn_day','mn_day_2','mn_day_3','mn_day_4','mn_day_5']},
];

const MN_SYM={mn_c1:'Аа',mn_c2:'Өө',mn_c3:'Нн',mn_c4:'Бб',mn_c5:'Жж',mn_c6:'Цц',mn_c7:'Ьь',mn_greet:'Сайн',mn_pron:'Би',mn_num1:'нэг',mn_num2:'хорь',mn_court:'За',mn_intro:'нэр',mn_day:'өдөр'};

const MN_VOWELS=[['Аа','a'],['Оо','o'],['Уу','u'],['Ээ','e'],['Ии','i'],['Өө','oe'],['Үү','ue'],['Ыы','ii (hard)'],['Йй','i (short)'],['Ее','ye'],['Ёё','yo'],['Юю','yu'],['Яя','ya']];
const MN_CONS=[['Бб','b'],['Вв','v'],['Гг','g'],['Дд','d'],['Жж','j'],['Зз','z'],['Кк','k (loan)'],['Лл','l'],['Мм','m'],['Нн','n'],['Пп','p (loan)'],['Рр','r'],['Сс','s'],['Тт','t'],['Фф','f (loan)'],['Хх','kh'],['Цц','ts'],['Чч','ch'],['Шш','sh'],['Щщ','shch (loan)'],['Ьь','soft sign'],['Ъъ','hard sign']];
const MN_NUMS=[['нэг','1'],['хоёр','2'],['гурав','3'],['дөрөв','4'],['тав','5'],['зургаа','6'],['долоо','7'],['найм','8'],['ес','9'],['арав','10']];
const MN_SRS_SEED=[['сайн','sain','Good'],['ус','us','Water'],['цай','tsai','Tea'],['гэр','ger','Home / ger'],['сүү','suu','Milk'],['баярлалаа','bayarlalaa','Thank you'],['тийм','tiim','Yes'],['үгүй','ugui','No'],['би','bi','I / me'],['та','ta','You (polite)'],['нэр','ner','Name'],['өнөөдөр','onoodor','Today'],['маргааш','margaash','Tomorrow'],['морь','mori','Horse'],['нар','nar','Sun'],['ном','nom','Book'],['хот','khot','City'],['өдөр','odor','Day'],['за','za','OK'],['уучлаарай','uuchlaarai','Sorry / excuse me']];

/* ===== LESSONS — filled zone by zone below (concatenated into MN_LESSONS) ===== */
const MN_Z1=[
/* ===================== ZONE 1 · THE SCRIPT ===================== */
{id:'mn_c1',title:'First letters',step:'learn',meta:'А О У Э И — the plain vowels',vocab:[['Аа','a','vowel: a'],['Оо','o','vowel: o'],['Уу','u','vowel: u'],['Ээ','e','vowel: e'],['Ии','i','vowel: i']],ex:[
{t:'note',tag:'Start here',q:'Meet Mongolian Cyrillic',body:'<p>Mongolian is written in <b>Cyrillic</b> — the same family as Russian, plus two letters all of Mongolia’s own. It runs left to right, spaces between words, capital and small letters — the mechanics will feel familiar fast.</p><p>Some letters look like Latin and sound the same: <span class="deva">А О У Э И</span> are simply <b>a o u e i</b>.</p>',tip:'Tap the speaker on any letter to hear it.'},
{t:'mc',q:'What sound does this letter make?',d:'Аа',o:['a','o','u','e'],a:0},
{t:'mc',q:'And this one?',d:'Ээ',o:['e','a','i','o'],a:0},
{t:'note',tag:'Long vowels double',q:'аа уу оо',body:'<p>Mongolian loves <b>long vowels</b>, written double: <span class="deva">аа</span>, <span class="deva">уу</span>, <span class="deva">оо</span>. <span class="deva">Сайн байна уу</span> ends in a long <b>uu</b>! Length changes meaning, so the audio is your guide.</p>',eg:[['Аа','a','short a'],['аа','aa','long aa'],['уу','uu','long uu']]},
{t:'mc',q:'What sound does this letter make?',d:'Оо',o:['o','u','a','e'],a:0},
{t:'mc',q:'Doubled vowels (аа, уу) are…',o:['long','silent','nasal','optional'],a:0},
{t:'li',q:'Listen — which letter?',say:'Ии',o:['Ии','Ээ','Аа','Оо'],a:0}]},
{id:'mn_c1_2',title:'Spot the vowels',step:'recognize',meta:'Hear & spot А О У Э И',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'Аа',o:['Аа','Оо','Ээ','Уу'],a:0},
{t:'li',q:'Listen — which letter?',say:'Уу',o:['Уу','Оо','Аа','Ии'],a:0},
{t:'mc',q:'Which letter says e?',o:['Ээ','Аа','Ии','Оо'],a:0},
{t:'mc',q:'Which letter says i?',o:['Ии','Ээ','Аа','Уу'],a:0},
{t:'li',q:'Listen — which letter?',say:'Ээ',o:['Ээ','Аа','Ии','Оо'],a:0},
{t:'mc',q:'Mongolian Cyrillic runs…',o:['left to right','right to left','top to bottom','in circles'],a:0},
{t:'li',q:'Listen — which letter?',say:'Оо',o:['Оо','Уу','Аа','Ээ'],a:0}]},
{id:'mn_c1_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['Аа','a'],['Оо','o'],['Уу','u'],['Ээ','e'],['Ии','i']]},
{t:'mc',q:'Which letter says a?',o:['Аа','Оо','Ээ','Ии'],a:0},
{t:'mc',q:'Which letter says u?',o:['Уу','Оо','Аа','Ээ'],a:0},
{t:'li',q:'Listen — which letter?',say:'Аа',o:['Аа','Ээ','Оо','Ии'],a:0},
{t:'mc',q:'ус (water) reads as…',d:'ус',o:['us','os','es','is'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['Ээ','e'],['Ии','i'],['Уу','u'],['Оо','o']]}]},
{id:'mn_c1_4',title:'Mix it',step:'mix',meta:'All five vowels together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'Уу',o:['u','o','a','e'],a:0},
{t:'li',q:'Listen — which letter?',say:'Ии',o:['Ии','Ээ','Уу','Аа'],a:0},
{t:'mc',q:'Which letter says o?',o:['Оо','Уу','Аа','Ээ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'Ээ',o:['e','i','a','u'],a:0},
{t:'li',q:'Listen — which letter?',say:'Оо',o:['Оо','Аа','Уу','Ээ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['Аа','a'],['Уу','u'],['Ии','i'],['Ээ','e']]},
{t:'mc',q:'A doubled vowel like уу means the sound is…',o:['held longer','skipped','whispered','nasal'],a:0}]},
{id:'mn_c1_5',title:'Checkpoint',step:'checkpoint',meta:'Plain vowels mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'Аа',o:['a','o','e','i'],a:0},
{t:'li',q:'Listen — which letter?',say:'Ээ',o:['Ээ','Аа','Ии','Оо'],a:0},
{t:'mc',q:'Which letter says i?',o:['Ии','Ээ','Уу','Оо'],a:0},
{t:'mc',q:'Read it:',d:'ус',o:['us','su','os','uus'],a:0},
{t:'li',q:'Listen — which letter?',say:'Уу',o:['Уу','Оо','Аа','Ии'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['Аа','a'],['Оо','o'],['Уу','u'],['Ээ','e'],['Ии','i']]},
{t:'mc',q:'Mongolian Cyrillic adds how many letters of its own?',o:['two (Ө and Ү)','none','ten','five'],a:0}]},

{id:'mn_c2',title:'Mongolia’s own letters',step:'learn',meta:'Ө Ү — and Ы Й',vocab:[['Өө','oe','vowel: ö (Mongolian)'],['Үү','ue','vowel: ü (Mongolian)'],['Ыы','ii (hard)','vowel: hard ii'],['Йй','i (short)','the short i / glide']],ex:[
{t:'note',tag:'The special two',q:'Ө and Ү',body:'<p>Meet Mongolia’s own letters! <span class="deva">Ө</span> = <b>ö</b> — like the vowel in English "fur" said roundly. <span class="deva">Ү</span> = <b>ü</b> — like "few" without the f-y. They fill Mongolian words: <span class="deva">сүү</span> milk, <span class="deva">өдөр</span> day, <span class="deva">үгүй</span> no.</p>',tip:'In our romanization words write them simply as o / u — the audio keeps the true sound.'},
{t:'mc',q:'Which letter is the Mongolian ö?',d:'Өө',o:['oe','ue','o','e'],a:0},
{t:'mc',q:'And the Mongolian ü?',d:'Үү',o:['ue','oe','u','i'],a:0},
{t:'note',tag:'Two more i-letters',q:'Ы and Й',body:'<p><span class="deva">Ы</span> = a hard <b>ii</b>, only ever inside/ending words. <span class="deva">Й</span> = a short <b>i</b> glide — it ends words like <span class="deva">сайн</span> <b>sain</b> (there it is, in "hello"!).</p>',eg:[['Ыы','ii','hard ii'],['Йй','i','short i'],['сайн','sain','good']]},
{t:'mc',q:'Which letter ends сайн?',d:'сайн',o:['н','й','с','а'],a:0},
{t:'mc',q:'сүү (milk) uses which special letter?',d:'сүү',o:['Ү','Ө','Ы','Й'],a:0},
{t:'li',q:'Listen — which letter?',say:'Өө',o:['Өө','Үү','Оо','Ээ'],a:0}]},
{id:'mn_c2_2',title:'Hear the specials',step:'recognize',meta:'Spot Ө Ү Ы Й',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'Үү',o:['Үү','Өө','Уу','Ии'],a:0},
{t:'li',q:'Listen — which word?',say:'сүү',o:['сүү','сайн','ус','өдөр'],a:0},
{t:'mc',q:'Which letter is the rounded "fur" vowel?',o:['Өө','Үү','Ыы','Йй'],a:0},
{t:'mc',q:'Which letter is the short i glide?',o:['Йй','Ыы','Ии','Ээ'],a:0},
{t:'li',q:'Listen — which word?',say:'өдөр',o:['өдөр','үгүй','сүү','сайн'],a:0},
{t:'mc',q:'үгүй (no) is full of which letter?',o:['Ү','Ө','Ы','А'],a:0},
{t:'li',q:'Listen — which letter?',say:'Өө',o:['Өө','Оо','Үү','Ээ'],a:0}]},
{id:'mn_c2_3',title:'Build with specials',step:'build',meta:'Match & read',vocab:[['сүү','suu','milk'],['өдөр','odor','day'],['үгүй','ugui','no']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['Өө','oe'],['Үү','ue'],['Ыы','ii (hard)'],['Йй','i (short)']]},
{t:'mc',q:'Read it:',d:'сүү',o:['suu','soo','see','sai'],a:0},
{t:'mc',q:'Read it:',d:'өдөр',o:['odor','udur','ador','eder'],a:0},
{t:'li',q:'Listen — which word?',say:'үгүй',o:['үгүй','сүү','өдөр','сайн'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['сүү','milk'],['өдөр','day'],['үгүй','no']]},
{t:'mc',q:'Ө and Ү exist in Mongolian Cyrillic but not in…',o:['Russian','any language','numbers','writing'],a:0}]},
{id:'mn_c2_4',title:'Mix it',step:'mix',meta:'All the vowels together',vocab:[],ex:[
{t:'mc',q:'What is this letter?',d:'Үү',o:['ue','oe','u','ii'],a:0},
{t:'li',q:'Listen — which word?',say:'сүү',o:['сүү','ус','өдөр','үгүй'],a:0},
{t:'mc',q:'Which letter is the hard ii?',o:['Ыы','Йй','Ии','Ээ'],a:0},
{t:'mc',q:'Read it:',d:'үгүй',o:['ugui','ogoi','agai','egei'],a:0},
{t:'li',q:'Listen — which letter?',say:'Үү',o:['Үү','Өө','Уу','Ыы'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['Өө','oe'],['Үү','ue'],['Уу','u'],['Оо','o']]},
{t:'mc',q:'Which word means "day"?',o:['өдөр','сүү','үгүй','ус'],a:0}]},
{id:'mn_c2_5',title:'Checkpoint',step:'checkpoint',meta:'The specials mastered?',vocab:[],ex:[
{t:'mc',q:'Mongolia’s two own letters are…',o:['Ө and Ү','А and О','Ы and Й','Е and Ё'],a:0},
{t:'li',q:'Listen — which word?',say:'өдөр',o:['өдөр','сүү','үгүй','ус'],a:0},
{t:'mc',q:'Read it:',d:'сүү',o:['suu','soo','sii','sau'],a:0},
{t:'mc',q:'Which letter ends сайн?',o:['й','н','и','ы'],a:0},
{t:'li',q:'Listen — which word?',say:'үгүй',o:['үгүй','өдөр','сүү','сайн'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['сүү','milk'],['өдөр','day'],['үгүй','no'],['ус','water']]},
{t:'mc',q:'In word romanizations we write ө/ү simply as…',o:['o / u','e / i','a / e','they are skipped'],a:0}]},

{id:'mn_c3',title:'The false friends',step:'learn',meta:'Н Р С В Х look Latin — but!',vocab:[['Нн','n','consonant: n (looks like H!)'],['Рр','r','consonant: r (looks like P!)'],['Сс','s','consonant: s (looks like C!)'],['Вв','v','consonant: v (looks like B!)'],['Хх','kh','consonant: kh (looks like X!)']],ex:[
{t:'note',tag:'Do not trust your eyes',q:'Н Р С В Х',body:'<p>Cyrillic’s famous trick: letters that LOOK Latin but sound different. <span class="deva">Н</span> = <b>n</b> (not h!), <span class="deva">Р</span> = <b>r</b> (not p!), <span class="deva">С</span> = <b>s</b> (like c in "city"), <span class="deva">В</span> = <b>v</b> (not b!), <span class="deva">Х</span> = <b>kh</b> (a breathy h).</p>',tip:'So нар (sun) = "nar", not "hap"!'},
{t:'mc',q:'What sound does this letter make?',d:'Нн',o:['n','h','m','r'],a:0},
{t:'mc',q:'And this one?',d:'Рр',o:['r','p','b','n'],a:0},
{t:'note',tag:'Two more tricksters',q:'С В Х',body:'<p><span class="deva">С</span> = <b>s</b>: <span class="deva">сайн</span> sain. <span class="deva">В</span> = <b>v</b>. <span class="deva">Х</span> = <b>kh</b> — a rasping h: <span class="deva">хоёр</span> <b>khoyor</b> = two, <span class="deva">хот</span> <b>khot</b> = city.</p>',eg:[['Сс','s','s as in city'],['Вв','v','v as in van'],['Хх','kh','breathy kh']]},
{t:'mc',q:'What sound does this letter make?',d:'Сс',o:['s','c (k)','ts','sh'],a:0},
{t:'mc',q:'And this one?',d:'Хх',o:['kh','x (ks)','h silent','k'],a:0},
{t:'li',q:'Listen — which letter?',say:'Нн',o:['Нн','Рр','Сс','Хх'],a:0}]},
{id:'mn_c3_2',title:'Hear the tricksters',step:'recognize',meta:'Spot Н Р С В Х',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'Рр',o:['Рр','Нн','Вв','Сс'],a:0},
{t:'li',q:'Listen — which letter?',say:'Хх',o:['Хх','Сс','Нн','Вв'],a:0},
{t:'mc',q:'Which letter says v?',o:['Вв','Нн','Рр','Сс'],a:0},
{t:'mc',q:'Which letter says n?',o:['Нн','Хх','Рр','Вв'],a:0},
{t:'li',q:'Listen — which word?',say:'нар',o:['нар','сар','ус','хот'],a:0},
{t:'mc',q:'нар (sun) romanizes as…',d:'нар',o:['nar','hap','nap','har'],a:0},
{t:'li',q:'Listen — which letter?',say:'Сс',o:['Сс','Хх','Вв','Рр'],a:0}]},
{id:'mn_c3_3',title:'Build the set',step:'build',meta:'Match & read',vocab:[['нар','nar','sun'],['хот','khot','city'],['сар','sar','moon / month']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['Нн','n'],['Рр','r'],['Сс','s'],['Вв','v'],['Хх','kh']]},
{t:'mc',q:'Read it:',d:'нар',o:['nar','hap','nur','rah'],a:0},
{t:'mc',q:'Read it:',d:'хот',o:['khot','xot','hot','kot'],a:0},
{t:'li',q:'Listen — which word?',say:'сар',o:['сар','нар','ус','хот'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['нар','sun'],['сар','moon'],['хот','city']]},
{t:'mc',q:'The false friends teach you to trust…',o:['your ears, not your eyes','your eyes only','guesswork','spelling'],a:0}]},
{id:'mn_c3_4',title:'Mix it',step:'mix',meta:'Tricksters & vowels',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'Вв',o:['v','b','w','f'],a:0},
{t:'li',q:'Listen — which word?',say:'хот',o:['хот','нар','сар','ус'],a:0},
{t:'mc',q:'Which letter says kh?',o:['Хх','Сс','Нн','Рр'],a:0},
{t:'mc',q:'Read it:',d:'сар',o:['sar','car','sap','tsar'],a:0},
{t:'li',q:'Listen — which letter?',say:'Вв',o:['Вв','Нн','Рр','Сс'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['нар','sun'],['хот','city'],['ус','water'],['сүү','milk']]},
{t:'mc',q:'хоёр (two) begins with…',o:['Х (kh)','Н (n)','С (s)','Р (r)'],a:0}]},
{id:'mn_c3_5',title:'Checkpoint',step:'checkpoint',meta:'False friends beaten?',vocab:[],ex:[
{t:'mc',q:'Н sounds like…',o:['n','h','m','p'],a:0},
{t:'li',q:'Listen — which letter?',say:'Хх',o:['Хх','Нн','Сс','Рр'],a:0},
{t:'mc',q:'Р sounds like…',o:['r','p','b','v'],a:0},
{t:'mc',q:'Read it:',d:'нар',o:['nar','hap','par','nab'],a:0},
{t:'li',q:'Listen — which word?',say:'нар',o:['нар','сар','хот','ус'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['Нн','n'],['Рр','r'],['Сс','s'],['Вв','v'],['Хх','kh']]},
{t:'mc',q:'В sounds like…',o:['v','b','w','p'],a:0}]},

{id:'mn_c4',title:'The reliable crew',step:'learn',meta:'Б Г Д З Л М Т',vocab:[['Бб','b','consonant: b'],['Гг','g','consonant: g'],['Дд','d','consonant: d'],['Зз','z','consonant: z'],['Лл','l','consonant: l'],['Мм','m','consonant: m'],['Тт','t','consonant: t']],ex:[
{t:'note',tag:'These behave',q:'Б Г Д З Л М Т',body:'<p>Good news — these seven do what you expect: <span class="deva">Б</span> b, <span class="deva">Г</span> g, <span class="deva">Д</span> d, <span class="deva">З</span> z (dz-ish), <span class="deva">Л</span> l, <span class="deva">М</span> m, <span class="deva">Т</span> t.</p><p><span class="deva">би</span> = <b>bi</b> "I", <span class="deva">та</span> = <b>ta</b> "you", <span class="deva">гэр</span> = <b>ger</b> — the round felt home of the steppe!</p>',eg:[['би','bi','I'],['та','ta','you'],['гэр','ger','ger / home']]},
{t:'mc',q:'What sound does this letter make?',d:'Бб',o:['b','v','p','d'],a:0},
{t:'mc',q:'And this one?',d:'Гг',o:['g','j','k','z'],a:0},
{t:'note',tag:'Your first home',q:'гэр',body:'<p><span class="deva">гэр</span> <b>ger</b> means home — and THE ger, the round white felt tent of the steppe. One word, a whole way of life.</p>',eg:[['гэр','ger','home / ger'],['ном','nom','book'],['мал','mal','livestock']]},
{t:'mc',q:'Read it:',d:'гэр',o:['ger','gar','ber','geer'],a:0},
{t:'mc',q:'Read it:',d:'би',o:['bi','vi','di','bii'],a:0},
{t:'li',q:'Listen — which word?',say:'гэр',o:['гэр','би','та','ном'],a:0}]},
{id:'mn_c4_2',title:'Hear the crew',step:'recognize',meta:'Spot Б Г Д З Л М Т',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'Мм',o:['Мм','Нн','Лл','Бб'],a:0},
{t:'li',q:'Listen — which letter?',say:'Дд',o:['Дд','Тт','Бб','Гг'],a:0},
{t:'mc',q:'Which letter says z?',o:['Зз','Сс','Жж','Цц'],a:0},
{t:'mc',q:'Which letter says l?',o:['Лл','Мм','Нн','Дд'],a:0},
{t:'li',q:'Listen — which word?',say:'ном',o:['ном','нар','мал','гэр'],a:0},
{t:'mc',q:'ном means…',d:'ном',o:['book','sun','city','milk'],a:0},
{t:'li',q:'Listen — which letter?',say:'Тт',o:['Тт','Дд','Бб','Лл'],a:0}]},
{id:'mn_c4_3',title:'Build the set',step:'build',meta:'Match & read words',vocab:[['ном','nom','book'],['мал','mal','livestock'],['зам','zam','road']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['Бб','b'],['Гг','g'],['Дд','d'],['Зз','z'],['Мм','m']]},
{t:'mc',q:'Read it:',d:'ном',o:['nom','hom','nam','mon'],a:0},
{t:'mc',q:'Read it:',d:'зам',o:['zam','sam','jam','zom'],a:0},
{t:'li',q:'Listen — which word?',say:'мал',o:['мал','зам','ном','нар'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ном','book'],['зам','road'],['мал','livestock'],['гэр','home']]},
{t:'mc',q:'мал (livestock) is the wealth of the…',o:['steppe herder','city bank','library','sea'],a:0}]},
{id:'mn_c4_4',title:'Mix it',step:'mix',meta:'Reading real words',vocab:[],ex:[
{t:'mc',q:'Read it:',d:'та',o:['ta','da','tu','at'],a:0},
{t:'li',q:'Listen — which word?',say:'зам',o:['зам','мал','ном','гэр'],a:0},
{t:'mc',q:'Which letter says m?',o:['Мм','Нн','Лл','Бб'],a:0},
{t:'mc',q:'Read it:',d:'мал',o:['mal','nal','mai','lam'],a:0},
{t:'li',q:'Listen — which word?',say:'би',o:['би','та','ус','сүү'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['би','I'],['та','you'],['гэр','home'],['ном','book']]},
{t:'mc',q:'The round felt home of the steppe is the…',o:['гэр','хот','зам','ном'],a:0}]},
{id:'mn_c4_5',title:'Checkpoint',step:'checkpoint',meta:'The crew mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'Зз',o:['z','s','ts','j'],a:0},
{t:'li',q:'Listen — which word?',say:'гэр',o:['гэр','ном','зам','мал'],a:0},
{t:'mc',q:'Read it:',d:'би',o:['bi','vi','bii','ib'],a:0},
{t:'mc',q:'Which letter says t?',o:['Тт','Дд','Лл','Мм'],a:0},
{t:'li',q:'Listen — which word?',say:'ном',o:['ном','мал','нар','зам'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['гэр','home'],['ном','book'],['зам','road'],['мал','livestock'],['би','I']]},
{t:'mc',q:'Which seven letters "behave"?',o:['Б Г Д З Л М Т','Н Р С В Х','Ө Ү Ы Й','Е Ё Ю Я'],a:0}]},

{id:'mn_c5',title:'The hushers & ts',step:'learn',meta:'Ж Ч Ш Ц',vocab:[['Жж','j','consonant: j'],['Чч','ch','consonant: ch'],['Шш','sh','consonant: sh'],['Цц','ts','consonant: ts']],ex:[
{t:'note',tag:'The hushing row',q:'Ж Ч Ш',body:'<p><span class="deva">Ж</span> = <b>j</b> as in "jam", <span class="deva">Ч</span> = <b>ch</b> as in "chai", <span class="deva">Ш</span> = <b>sh</b> as in "shah". <span class="deva">чи</span> = <b>chi</b> "you (informal)"!</p>',eg:[['Жж','j','j as in jam'],['Чч','ch','ch as in chai'],['Шш','sh','sh as in shah']]},
{t:'mc',q:'What sound does this letter make?',d:'Жж',o:['j','z','ch','sh'],a:0},
{t:'mc',q:'And this one?',d:'Шш',o:['sh','ch','s','ts'],a:0},
{t:'note',tag:'The ts letter',q:'Ц',body:'<p><span class="deva">Ц</span> = <b>ts</b> as in "cats" — and it opens the most Mongolian drink of all: <span class="deva">цай</span> <b>tsai</b> = tea! Salty milk tea (сүүтэй цай) warms every ger.</p>',eg:[['Цц','ts','ts as in cats'],['цай','tsai','tea']]},
{t:'mc',q:'What sound does this letter make?',d:'Цц',o:['ts','ch','s','sh'],a:0},
{t:'mc',q:'Read it:',d:'цай',o:['tsai','chai','sai','shai'],a:0},
{t:'li',q:'Listen — which word?',say:'цай',o:['цай','чи','сүү','ус'],a:0}]},
{id:'mn_c5_2',title:'Hear the hushers',step:'recognize',meta:'Spot Ж Ч Ш Ц',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'Чч',o:['Чч','Цц','Шш','Жж'],a:0},
{t:'li',q:'Listen — which letter?',say:'Цц',o:['Цц','Чч','Сс','Шш'],a:0},
{t:'mc',q:'Which letter says sh?',o:['Шш','Чч','Жж','Цц'],a:0},
{t:'mc',q:'Which letter says j?',o:['Жж','Зз','Чч','Шш'],a:0},
{t:'li',q:'Listen — which word?',say:'чи',o:['чи','цай','та','би'],a:0},
{t:'mc',q:'чи means…',d:'чи',o:['you (informal)','tea','I','city'],a:0},
{t:'li',q:'Listen — which letter?',say:'Шш',o:['Шш','Чч','Жж','Цц'],a:0}]},
{id:'mn_c5_3',title:'Build the set',step:'build',meta:'Match & read',vocab:[['цай','tsai','tea'],['чи','chi','you (informal)'],['шинэ','shine','new']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['Жж','j'],['Чч','ch'],['Шш','sh'],['Цц','ts']]},
{t:'mc',q:'Read it:',d:'чи',o:['chi','tsi','shi','ji'],a:0},
{t:'mc',q:'Read it:',d:'шинэ',o:['shine','chine','jine','tsine'],a:0},
{t:'li',q:'Listen — which word?',say:'шинэ',o:['шинэ','цай','чи','сайн'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['цай','tea'],['чи','you'],['шинэ','new']]},
{t:'mc',q:'Ц vs Ч: цай is ___ , чай would be chai',o:['tsai','sai','shai','zai'],a:0}]},
{id:'mn_c5_4',title:'Mix it',step:'mix',meta:'Hushers meet the rest',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'Чч',o:['ch','ts','sh','j'],a:0},
{t:'li',q:'Listen — which word?',say:'цай',o:['цай','чи','шинэ','сүү'],a:0},
{t:'mc',q:'Which letter says ts?',o:['Цц','Чч','Сс','Зз'],a:0},
{t:'mc',q:'Read it:',d:'шинэ',o:['shine','sine','chine','shene'],a:0},
{t:'li',q:'Listen — which letter?',say:'Жж',o:['Жж','Зз','Чч','Шш'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['цай','tea'],['шинэ','new'],['чи','you (informal)'],['гэр','home']]},
{t:'mc',q:'The most Mongolian drink is salty milk…',o:['цай','ус','сүү','айраг'],a:0}]},
{id:'mn_c5_5',title:'Checkpoint',step:'checkpoint',meta:'Hushers mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'Цц',o:['ts','ch','s','sh'],a:0},
{t:'li',q:'Listen — which word?',say:'чи',o:['чи','цай','би','та'],a:0},
{t:'mc',q:'Which letter says sh?',o:['Шш','Жж','Чч','Цц'],a:0},
{t:'mc',q:'Read it:',d:'цай',o:['tsai','chai','shai','zai'],a:0},
{t:'li',q:'Listen — which word?',say:'шинэ',o:['шинэ','чи','цай','гэр'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['Жж','j'],['Чч','ch'],['Шш','sh'],['Цц','ts']]},
{t:'mc',q:'ц opens which beloved word?',o:['цай (tea)','гэр (home)','нар (sun)','ном (book)'],a:0}]},

{id:'mn_c6',title:'The y-team & loans',step:'learn',meta:'Е Ё Ю Я + К П Ф',vocab:[['Ее','ye','vowel: ye'],['Ёё','yo','vowel: yo'],['Юю','yu','vowel: yu'],['Яя','ya','vowel: ya'],['Кк','k','consonant: k (loan)'],['Пп','p','consonant: p (loan)']],ex:[
{t:'note',tag:'Y + vowel in one letter',q:'Е Ё Ю Я',body:'<p>Four letters pack a y-glide + vowel: <span class="deva">Е</span> <b>ye</b>, <span class="deva">Ё</span> <b>yo</b>, <span class="deva">Ю</span> <b>yu</b>, <span class="deva">Я</span> <b>ya</b>. <span class="deva">хоёр</span> <b>khoyor</b> (two) hides a Ё; <span class="deva">ес</span> <b>yes</b> = nine!</p>',eg:[['Ёё','yo','as in yoghurt'],['Яя','ya','as in yard'],['ес','yes','nine']]},
{t:'mc',q:'What sound does this letter make?',d:'Яя',o:['ya','ye','yo','yu'],a:0},
{t:'mc',q:'And this one?',d:'Ёё',o:['yo','ya','yu','ye'],a:0},
{t:'note',tag:'The loan letters',q:'К П Ф Щ',body:'<p><span class="deva">К</span>, <span class="deva">П</span>, <span class="deva">Ф</span>, <span class="deva">Щ</span> mostly appear in borrowed words (кино cinema, парк park). Recognize them and move on — native Mongolian words barely use them.</p>',eg:[['Кк','k','loan k'],['Пп','p','loan p'],['кино','kino','cinema']]},
{t:'mc',q:'Which letter says yu?',d:'Юю',o:['yu','yo','ya','ye'],a:0},
{t:'mc',q:'К П Ф mostly appear in…',o:['borrowed words','every word','numbers','names only'],a:0},
{t:'li',q:'Listen — which letter?',say:'Яя',o:['Яя','Ёё','Юю','Ее'],a:0}]},
{id:'mn_c6_2',title:'Hear the y-team',step:'recognize',meta:'Spot Е Ё Ю Я',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'Ёё',o:['Ёё','Яя','Юю','Ее'],a:0},
{t:'li',q:'Listen — which word?',say:'ес',o:['ес','хоёр','цай','чи'],a:0},
{t:'mc',q:'Which letter says ye?',o:['Ее','Ёё','Юю','Яя'],a:0},
{t:'mc',q:'ес (with Е) means…',o:['nine','two','tea','new'],a:0},
{t:'li',q:'Listen — which word?',say:'хоёр',o:['хоёр','ес','нар','зам'],a:0},
{t:'mc',q:'хоёр (two) hides which y-letter?',o:['Ё','Я','Ю','Е'],a:0},
{t:'li',q:'Listen — which letter?',say:'Юю',o:['Юю','Ёё','Яя','Ее'],a:0}]},
{id:'mn_c6_3',title:'Build the set',step:'build',meta:'Match & read',vocab:[['хоёр','khoyor','two'],['ес','yes','nine'],['кино','kino','cinema']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['Ее','ye'],['Ёё','yo'],['Юю','yu'],['Яя','ya']]},
{t:'mc',q:'Read it:',d:'хоёр',o:['khoyor','khoor','koyer','hoyar'],a:0},
{t:'mc',q:'Read it:',d:'кино',o:['kino','pino','kine','nika'],a:0},
{t:'li',q:'Listen — which word?',say:'кино',o:['кино','хоёр','ес','ном'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['хоёр','two'],['ес','nine'],['кино','cinema']]},
{t:'mc',q:'Which letter says p?',o:['Пп','Рр','Бб','Фф'],a:0}]},
{id:'mn_c6_4',title:'Mix it',step:'mix',meta:'Nearly the whole alphabet',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'Ее',o:['ye','e','yo','ya'],a:0},
{t:'li',q:'Listen — which word?',say:'хоёр',o:['хоёр','ес','кино','цай'],a:0},
{t:'mc',q:'Which letter says ya?',o:['Яя','Ёё','Юю','Ее'],a:0},
{t:'mc',q:'Read it:',d:'ес',o:['yes','es','yos','ye'],a:0},
{t:'li',q:'Listen — which letter?',say:'Ёё',o:['Ёё','Юю','Яя','Ее'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['хоёр','two'],['ес','nine'],['цай','tea'],['шинэ','new']]},
{t:'mc',q:'Щ (shch) belongs with…',o:['the loan letters','the vowels','the specials Ө Ү','the numbers'],a:0}]},
{id:'mn_c6_5',title:'Checkpoint',step:'checkpoint',meta:'The y-team mastered?',vocab:[],ex:[
{t:'mc',q:'Which letter says yo?',o:['Ёё','Ее','Юю','Яя'],a:0},
{t:'li',q:'Listen — which word?',say:'ес',o:['ес','хоёр','кино','чи'],a:0},
{t:'mc',q:'Read it:',d:'хоёр',o:['khoyor','khonor','khoyar','kholor'],a:0},
{t:'mc',q:'Which are loan letters?',o:['К П Ф Щ','Б Г Д','Н Р С','Ө Ү'],a:0},
{t:'li',q:'Listen — which letter?',say:'Яя',o:['Яя','Ёё','Ее','Юю'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['Ее','ye'],['Ёё','yo'],['Юю','yu'],['Яя','ya'],['Кк','k']]},
{t:'mc',q:'The y-team packs a ___ + vowel into one letter',o:['y-glide','consonant','number','space'],a:0}]},

{id:'mn_c7',title:'Signs & first words',step:'learn',meta:'Ь Ъ — and reading for real',vocab:[['Ьь','soft sign','softens the letter before'],['Ъъ','hard sign','separates sounds'],['сайн','sain','good'],['нэр','ner','name'],['монгол','mongol','Mongolian']],ex:[
{t:'note',tag:'The silent signs',q:'Ь and Ъ',body:'<p>Two letters make no sound of their own: <span class="deva">Ь</span> (soft sign) subtly softens/shortens the letter before — <span class="deva">морь</span> <b>mori</b> "horse" ends with it! <span class="deva">Ъ</span> (hard sign) is rare. Recognize them; the audio does the rest.</p>',eg:[['морь','mori','horse'],['Ьь','soft sign','softens']]},
{t:'mc',q:'The soft sign Ь…',o:['softens the letter before','shouts','doubles a vowel','is a number'],a:0},
{t:'mc',q:'морь (horse) ends with…',d:'морь',o:['the soft sign ь','a vowel','кh','the hard sign ъ'],a:0},
{t:'note',tag:'You can read!',q:'сайн · нэр · монгол',body:'<p>Read these — really read them: <span class="deva">сайн</span> <b>sain</b> good, <span class="deva">нэр</span> <b>ner</b> name, <span class="deva">монгол</span> <b>mongol</b> Mongolian, <span class="deva">морь</span> <b>mori</b> horse. The alphabet is yours!</p>',eg:[['сайн','sain','good'],['нэр','ner','name'],['монгол','mongol','Mongolian']]},
{t:'mc',q:'Read it:',d:'сайн',o:['sain','cain','shin','san'],a:0},
{t:'mc',q:'Read it:',d:'монгол',o:['mongol','mohgol','mongal','nongol'],a:0},
{t:'li',q:'Listen — which word?',say:'морь',o:['морь','монгол','нэр','сайн'],a:0}]},
{id:'mn_c7_2',title:'Hear real words',step:'recognize',meta:'Spot the words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'сайн',o:['сайн','нэр','морь','монгол'],a:0},
{t:'li',q:'Listen — which word?',say:'нэр',o:['нэр','нар','ном','гэр'],a:0},
{t:'mc',q:'Which word means "name"?',o:['нэр','нар','ном','сар'],a:0},
{t:'mc',q:'Which word means "horse"?',o:['морь','мал','ном','нар'],a:0},
{t:'li',q:'Listen — which word?',say:'монгол',o:['монгол','морь','сайн','ном'],a:0},
{t:'mc',q:'нэр vs нар: name vs…',o:['sun','moon','book','road'],a:0},
{t:'li',q:'Listen — which word?',say:'сайн',o:['сайн','шинэ','цай','сар'],a:0}]},
{id:'mn_c7_3',title:'Read for real',step:'build',meta:'Words you can sound out',vocab:[['морь','mori','horse'],['айраг','airag','airag (mare milk drink)'],['тал','tal','steppe']],ex:[
{t:'mc',q:'Read it:',d:'нэр',o:['ner','nar','nir','ren'],a:0},
{t:'mc',q:'Read it:',d:'морь',o:['mori','mor','morya','miro'],a:0},
{t:'li',q:'Listen — which word?',say:'тал',o:['тал','мал','зам','нар'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['сайн','good'],['нэр','name'],['морь','horse'],['тал','steppe']]},
{t:'mc',q:'тал means…',d:'тал',o:['steppe','city','tea','mountain'],a:0},
{t:'mc',q:'айраг is Mongolia’s famous…',d:'айраг',o:['fermented mare milk drink','black tea','soup','bread'],a:0}]},
{id:'mn_c7_4',title:'Mix it',step:'mix',meta:'The whole alphabet in play',vocab:[],ex:[
{t:'mc',q:'Read it:',d:'сайн',o:['sain','shin','tsain','san'],a:0},
{t:'li',q:'Listen — which word?',say:'айраг',o:['айраг','морь','цай','сүү'],a:0},
{t:'mc',q:'Read it:',d:'тал',o:['tal','dal','tai','lat'],a:0},
{t:'mc',q:'Which word is the steppe drink?',o:['айраг','цай','сүү','ус'],a:0},
{t:'li',q:'Listen — which word?',say:'монгол',o:['монгол','морь','мал','ном'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['морь','horse'],['тал','steppe'],['айраг','airag'],['монгол','Mongolian']]},
{t:'mc',q:'The soft sign in морь makes the р…',o:['softer','louder','longer','silent'],a:0}]},
{id:'mn_c7_5',title:'Zone 1 checkpoint',step:'checkpoint',meta:'You can read Mongolian!',vocab:[],ex:[
{t:'mc',q:'Read it:',d:'монгол',o:['mongol','mongal','nongol','mogol'],a:0},
{t:'li',q:'Listen — which word?',say:'морь',o:['морь','мал','ном','нэр'],a:0},
{t:'mc',q:'Mongolia’s own two letters are…',o:['Ө and Ү','Ь and Ъ','Е and Ё','К and Ф'],a:0},
{t:'mc',q:'Read it:',d:'сайн',o:['sain','cain','sin','tsain'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['сайн','good'],['нэр','name'],['морь','horse'],['тал','steppe'],['монгол','Mongolian']]},
{t:'mc',q:'The false friends (Н Р С В Х) taught you to trust…',o:['your ears','your eyes','luck','spelling'],a:0},
{t:'mc',q:'Ready for words? Next stop:',o:['Сайн байна уу — hello!','more letters','numbers only','nothing'],a:0}]},
];
const MN_Z2=[
/* ===================== ZONE 2 · FOUNDATIONS ===================== */
{id:'mn_greet',title:'Hello',step:'learn',meta:'Сайн байна уу',vocab:[['Сайн байна уу','sain baina uu','hello'],['Сайн','sain','good / fine'],['Та сайн байна уу','ta sain baina uu','hello (polite)'],['Баярлалаа','bayarlalaa','thank you'],['Баяртай','bayartai','goodbye'],['Юу байна?','yuu baina','what is up? / how are things?']],ex:[
{t:'note',tag:'The double hello',q:'Сайн байна уу',body:'<p><span class="deva">Сайн байна уу</span> <b>sain baina uu</b> = "are (you) well?" — the standard hello. The lovely custom: the reply repeats it back! <span class="deva">Сайн, та сайн байна уу?</span> — "Fine — and are YOU well?"</p>',tip:'сайн = good — the most useful word in Mongolian.'},
{t:'mc',q:'How do you say hello?',o:['Сайн байна уу','Баярлалаа','Баяртай','Юу байна'],a:0},
{t:'mc',q:'сайн means…',o:['good / fine','hello','yes','new'],a:0},
{t:'note',tag:'Thanks & goodbye',q:'Баярлалаа · Баяртай',body:'<p><span class="deva">Баярлалаа</span> <b>bayarlalaa</b> = thank you; <span class="deva">Баяртай</span> <b>bayartai</b> = goodbye — both grown from <span class="deva">баяр</span> "joy": thanks = "joyful!", goodbye = "with joy!" Casual check-in: <span class="deva">Юу байна?</span> = "what is up?"</p>',eg:[['Баярлалаа','bayarlalaa','thank you'],['Баяртай','bayartai','goodbye'],['Юу байна?','yuu baina','what is up?']]},
{t:'mc',q:'"thank you" =',o:['Баярлалаа','Баяртай','Сайн','За'],a:0},
{t:'mc',q:'Баярлалаа and Баяртай both grow from баяр meaning…',o:['joy','tea','day','horse'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Сайн байна уу',o:['Сайн байна уу','Баярлалаа','Баяртай','Юу байна?'],a:0}]},
{id:'mn_greet_2',title:'Hear greetings',step:'recognize',meta:'Spot the phrases',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'Баярлалаа',o:['Баярлалаа','Баяртай','Сайн байна уу','Юу байна?'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Баяртай',o:['Баяртай','Баярлалаа','Сайн','За'],a:0},
{t:'mc',q:'"goodbye" =',o:['Баяртай','Баярлалаа','Сайн байна уу','Тийм'],a:0},
{t:'mc',q:'The casual "what is up?" =',o:['Юу байна?','Сайн байна уу','Баяртай','За'],a:0},
{t:'li',q:'Listen — which word?',say:'Сайн',o:['Сайн','Баяртай','Тийм','За'],a:0},
{t:'mc',q:'The polite hello adds which word?',o:['Та','Чи','Би','Тэр'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Юу байна?',o:['Юу байна?','Сайн байна уу','Баярлалаа','Баяртай'],a:0}]},
{id:'mn_greet_3',title:'Build a greeting',step:'build',meta:'Hello & reply',vocab:[],ex:[
{t:'wb',q:'Build: "hello" (are you well?)',a:['Сайн','байна','уу'],pool:['Сайн','байна','уу','Баяртай']},
{t:'match',q:'Match phrase and meaning',pairs:[['Сайн байна уу','hello'],['Баярлалаа','thank you'],['Баяртай','goodbye'],['Сайн','good']]},
{t:'fill',q:'Complete the reply: "Fine — and are you well?"',s:'Сайн, ___ сайн байна уу?',o:['та','би','тэр','бид'],a:0},
{t:'mc',q:'You are leaving. You say…',o:['Баяртай','Сайн байна уу','Баярлалаа','Юу байна?'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Баярлалаа',o:['Баярлалаа','Баяртай','Сайн байна уу','Сайн'],a:0},
{t:'mc',q:'The reply custom to Сайн байна уу is to…',o:['repeat it back','stay silent','bow only','say no'],a:0}]},
{id:'mn_greet_4',title:'Mix it',step:'mix',meta:'Greetings in play',vocab:[],ex:[
{t:'mc',q:'Say hello:',o:['Сайн байна уу','Баяртай','За','Тийм'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Баяртай',o:['Баяртай','Баярлалаа','Юу байна?','Сайн'],a:0},
{t:'wb',q:'Build: "hello — thank you — goodbye"',a:['Сайн байна уу','Баярлалаа','Баяртай'],pool:['Сайн байна уу','Баярлалаа','Баяртай','Юу байна?']},
{t:'fill',q:'Complete: thank a host warmly',s:'___ !',o:['Баярлалаа','Баяртай','Юу байна','Сайн уу'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['Юу байна?','what is up?'],['Та сайн байна уу','hello (polite)'],['Баяртай','goodbye'],['Баярлалаа','thanks']]},
{t:'li',q:'Listen — which phrase?',say:'Сайн байна уу',o:['Сайн байна уу','Юу байна?','Баярлалаа','Баяртай'],a:0},
{t:'mc',q:'сайн appears in hello AND in…',o:['"fine" (the reply)','goodbye','thanks','numbers'],a:0}]},
{id:'mn_greet_5',title:'Checkpoint',step:'checkpoint',meta:'Greetings mastered?',vocab:[],ex:[
{t:'mc',q:'"thank you" =',o:['Баярлалаа','Баяртай','Сайн байна уу','За'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Сайн байна уу',o:['Сайн байна уу','Баяртай','Баярлалаа','Юу байна?'],a:0},
{t:'mc',q:'"goodbye" =',o:['Баяртай','Баярлалаа','Сайн','Тийм'],a:0},
{t:'wb',q:'Build: "hello" (are you well?)',a:['Сайн','байна','уу'],pool:['Сайн','байна','уу','За']},
{t:'match',q:'Match phrase and meaning',pairs:[['Сайн байна уу','hello'],['Баярлалаа','thank you'],['Баяртай','goodbye'],['Юу байна?','what is up?'],['Сайн','good']]},
{t:'mc',q:'Reply to Сайн байна уу:',o:['Сайн, та сайн байна уу?','Баяртай','Үгүй','За'],a:0},
{t:'li',q:'Listen — which word?',say:'Сайн',o:['Сайн','За','Тийм','Баяртай'],a:0}]},

{id:'mn_pron',title:'I, you, we',step:'learn',meta:'Pronouns & the чи/та split',vocab:[['би','bi','I / me'],['чи','chi','you (informal)'],['та','ta','you (polite)'],['тэр','ter','he / she / that'],['бид','bid','we'],['тэд','ted','they']],ex:[
{t:'note',tag:'The core pair',q:'би · чи · та',body:'<p><span class="deva">би</span> <b>bi</b> = I. For "you", Mongolian splits: <span class="deva">чи</span> <b>chi</b> with friends and kids, <span class="deva">та</span> <b>ta</b> with elders, strangers, teachers — respect matters on the steppe too!</p>',tip:'When in doubt, use та — that is why hello is ТА сайн байна уу.'},
{t:'mc',q:'Which word means "I"?',o:['би','чи','та','тэр'],a:0},
{t:'mc',q:'The polite "you" is…',o:['та','чи','би','тэд'],a:0},
{t:'note',tag:'He, she, we, they',q:'тэр · бид · тэд',body:'<p><span class="deva">тэр</span> <b>ter</b> = he or she (also "that one" — no gender split!). <span class="deva">бид</span> <b>bid</b> = we (often <span class="deva">бид нар</span>), <span class="deva">тэд</span> <b>ted</b> = they.</p>',eg:[['тэр','ter','he / she'],['бид','bid','we'],['тэд','ted','they']]},
{t:'mc',q:'тэр covers…',d:'тэр',o:['he AND she','only he','only she','we'],a:0},
{t:'mc',q:'Which word means "we"?',o:['бид','тэд','та','тэр'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'би',o:['би','чи','та','тэр'],a:0}]},
{id:'mn_pron_2',title:'Hear pronouns',step:'recognize',meta:'Spot who is who',vocab:[],ex:[
{t:'li',q:'Listen — which pronoun?',say:'чи',o:['чи','та','би','тэр'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'бид',o:['бид','тэд','та','тэр'],a:0},
{t:'mc',q:'Which means "they"?',o:['тэд','бид','тэр','та'],a:0},
{t:'mc',q:'Which means "you (informal)"?',o:['чи','та','би','тэр'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'тэр',o:['тэр','тэд','та','чи'],a:0},
{t:'mc',q:'With your teacher, use…',o:['та','чи','би','тэд'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'та',o:['та','чи','тэр','би'],a:0}]},
{id:'mn_pron_3',title:'Build with pronouns',step:'build',meta:'Match & choose',vocab:[],ex:[
{t:'match',q:'Match pronoun and meaning',pairs:[['би','I'],['чи','you (informal)'],['та','you (polite)'],['тэр','he/she']]},
{t:'mc',q:'Point to yourself and say…',o:['би','чи','та','тэр'],a:0},
{t:'mc',q:'Point to your close friend and say…',o:['чи','та','би','тэд'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'тэд',o:['тэд','бид','тэр','та'],a:0},
{t:'match',q:'Match pronoun and meaning',pairs:[['бид','we'],['тэд','they'],['тэр','he/she'],['би','I']]},
{t:'mc',q:'Mongolian marks he vs she…',o:['not at all — тэр covers both','with different words','with endings','with tone'],a:0}]},
{id:'mn_pron_4',title:'Mix it',step:'mix',meta:'Pronouns in the flow',vocab:[],ex:[
{t:'mc',q:'Which means "he/she"?',o:['тэр','тэд','би','чи'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'би',o:['би','чи','бид','та'],a:0},
{t:'fill',q:'Complete: "___ am fine" (I)',s:'___ сайн байна',o:['би','чи','та','тэр'],a:0},
{t:'mc',q:'бид means…',d:'бид',o:['we','they','you all','he'],a:0},
{t:'match',q:'Match pronoun and meaning',pairs:[['би','I'],['чи','you'],['тэд','they'],['тэр','he/she']]},
{t:'li',q:'Listen — which pronoun?',say:'та',o:['та','чи','тэр','тэд'],a:0},
{t:'mc',q:'чи vs та is about…',o:['politeness','gender','number only','age of the speaker'],a:0}]},
{id:'mn_pron_5',title:'Checkpoint',step:'checkpoint',meta:'Pronouns mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "I"?',o:['би','чи','та','тэр'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'бид',o:['бид','тэд','би','та'],a:0},
{t:'mc',q:'Which means "you (polite)"?',o:['та','чи','тэр','тэд'],a:0},
{t:'match',q:'Match pronoun and meaning',pairs:[['би','I'],['чи','you (informal)'],['та','you (polite)'],['тэр','he/she'],['бид','we']]},
{t:'fill',q:'Complete: "he/she is fine"',s:'___ сайн байна',o:['тэр','би','чи','бид'],a:0},
{t:'mc',q:'The polite hello uses which pronoun?',o:['та','чи','би','тэр'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'тэр',o:['тэр','тэд','чи','би'],a:0}]},

{id:'mn_num1',title:'Numbers 1–10',step:'learn',meta:'нэг to арав',vocab:[['нэг','neg','1'],['хоёр','khoyor','2'],['гурав','gurav','3'],['дөрөв','dorov','4'],['тав','tav','5'],['зургаа','zurgaa','6'],['долоо','doloo','7'],['найм','naim','8'],['ес','yes','9'],['арав','arav','10']],ex:[
{t:'note',tag:'Count to five',q:'1–5',body:'<p><span class="deva">нэг</span> <b>neg</b> 1, <span class="deva">хоёр</span> <b>khoyor</b> 2, <span class="deva">гурав</span> <b>gurav</b> 3, <span class="deva">дөрөв</span> <b>dorov</b> 4 (both Ө’s singing!), <span class="deva">тав</span> <b>tav</b> 5.</p>',eg:[['нэг','neg','1'],['хоёр','khoyor','2'],['гурав','gurav','3'],['дөрөв','dorov','4'],['тав','tav','5']]},
{t:'mc',q:'Which is 3?',o:['гурав','хоёр','дөрөв','тав'],a:0},
{t:'mc',q:'Which is 5?',o:['тав','дөрөв','гурав','арав'],a:0},
{t:'note',tag:'Six to ten',q:'6–10',body:'<p><span class="deva">зургаа</span> <b>zurgaa</b> 6, <span class="deva">долоо</span> <b>doloo</b> 7, <span class="deva">найм</span> <b>naim</b> 8, <span class="deva">ес</span> <b>yes</b> 9 (yes = nine!), <span class="deva">арав</span> <b>arav</b> 10.</p>',eg:[['зургаа','zurgaa','6'],['долоо','doloo','7'],['найм','naim','8'],['ес','yes','9'],['арав','arav','10']]},
{t:'mc',q:'Which is 8?',o:['найм','долоо','ес','зургаа'],a:0},
{t:'li',q:'Listen — which number?',say:'арав',o:['арав','тав','гурав','дөрөв'],a:0},
{t:'mc',q:'Which is 10?',o:['арав','ес','тав','нэг'],a:0}]},
{id:'mn_num1_2',title:'Hear numbers',step:'recognize',meta:'Spot 1–10',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'гурав',o:['гурав','хоёр','дөрөв','тав'],a:0},
{t:'li',q:'Listen — which number?',say:'долоо',o:['долоо','зургаа','найм','ес'],a:0},
{t:'mc',q:'Which is 2?',o:['хоёр','гурав','нэг','зургаа'],a:0},
{t:'mc',q:'Which is 9?',o:['ес','найм','долоо','арав'],a:0},
{t:'li',q:'Listen — which number?',say:'нэг',o:['нэг','тав','арав','гурав'],a:0},
{t:'mc',q:'Which is 6?',o:['зургаа','долоо','тав','дөрөв'],a:0},
{t:'li',q:'Listen — which number?',say:'тав',o:['тав','дөрөв','гурав','арав'],a:0}]},
{id:'mn_num1_3',title:'Build with numbers',step:'build',meta:'Match & order',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['нэг','1'],['гурав','3'],['тав','5'],['долоо','7']]},
{t:'match',q:'Match number and value',pairs:[['хоёр','2'],['дөрөв','4'],['зургаа','6'],['арав','10']]},
{t:'mc',q:'Which is 4?',o:['дөрөв','тав','гурав','арав'],a:0},
{t:'wb',q:'Build in order: 1, 2, 3',a:['нэг','хоёр','гурав'],pool:['гурав','нэг','хоёр','тав']},
{t:'li',q:'Listen — which number?',say:'найм',o:['найм','ес','зургаа','долоо'],a:0},
{t:'mc',q:'Which is 7?',o:['долоо','зургаа','найм','дөрөв'],a:0}]},
{id:'mn_num1_4',title:'Mix it',step:'mix',meta:'Numbers at speed',vocab:[],ex:[
{t:'mc',q:'Which is 9?',o:['ес','долоо','найм','арав'],a:0},
{t:'li',q:'Listen — which number?',say:'дөрөв',o:['дөрөв','тав','гурав','арав'],a:0},
{t:'mc',q:'Which is 1?',o:['нэг','хоёр','тав','арав'],a:0},
{t:'wb',q:'Build in order: 8, 9, 10',a:['найм','ес','арав'],pool:['арав','найм','ес','долоо']},
{t:'li',q:'Listen — which number?',say:'зургаа',o:['зургаа','тав','долоо','дөрөв'],a:0},
{t:'match',q:'Match number and value',pairs:[['дөрөв','4'],['найм','8'],['ес','9'],['арав','10']]},
{t:'mc',q:'Which is 5?',o:['тав','зургаа','дөрөв','гурав'],a:0}]},
{id:'mn_num1_5',title:'Checkpoint',step:'checkpoint',meta:'1–10 mastered?',vocab:[],ex:[
{t:'mc',q:'Which is 10?',o:['арав','ес','нэг','тав'],a:0},
{t:'li',q:'Listen — which number?',say:'ес',o:['ес','долоо','зургаа','найм'],a:0},
{t:'mc',q:'Which is 2?',o:['хоёр','гурав','дөрөв','нэг'],a:0},
{t:'match',q:'Match number and value',pairs:[['нэг','1'],['гурав','3'],['тав','5'],['долоо','7'],['ес','9']]},
{t:'li',q:'Listen — which number?',say:'гурав',o:['гурав','дөрөв','хоёр','тав'],a:0},
{t:'wb',q:'Build in order: 4, 5, 6',a:['дөрөв','тав','зургаа'],pool:['тав','зургаа','дөрөв','долоо']},
{t:'mc',q:'Which is 8?',o:['найм','долоо','ес','зургаа'],a:0}]},

{id:'mn_num2',title:'Numbers 11–100',step:'learn',meta:'Teens, tens & зуу',vocab:[['арван нэг','arvan neg','11'],['арван хоёр','arvan khoyor','12'],['хорь','khori','20'],['гуч','guch','30'],['дөч','doch','40'],['зуу','zuu','100']],ex:[
{t:'note',tag:'Teens = арван + digit',q:'11–19',body:'<p>Teens are just <span class="deva">арван</span> (ten-) + the digit: <span class="deva">арван нэг</span> <b>arvan neg</b> 11, <span class="deva">арван тав</span> 15. Completely regular!</p>',eg:[['арван нэг','arvan neg','11'],['арван хоёр','arvan khoyor','12'],['арван тав','arvan tav','15']]},
{t:'mc',q:'Which is 11?',o:['арван нэг','арван хоёр','хорь','арав'],a:0},
{t:'mc',q:'Teens start with…',o:['арван','хорь','зуу','нэг'],a:0},
{t:'note',tag:'The tens',q:'хорь гуч дөч … зуу',body:'<p>Each ten has its own short word: <span class="deva">хорь</span> <b>khori</b> 20, <span class="deva">гуч</span> <b>guch</b> 30, <span class="deva">дөч</span> <b>doch</b> 40, <span class="deva">тавь</span> <b>tavi</b> 50 … up to <span class="deva">зуу</span> <b>zuu</b> = 100. Combine: <span class="deva">хорин нэг</span> = 21.</p>',eg:[['хорь','khori','20'],['гуч','guch','30'],['зуу','zuu','100']]},
{t:'mc',q:'Which is 20?',o:['хорь','гуч','зуу','арав'],a:0},
{t:'mc',q:'Which is 100?',o:['зуу','хорь','арав','гуч'],a:0},
{t:'li',q:'Listen — which number?',say:'хорь',o:['хорь','гуч','зуу','арав'],a:0}]},
{id:'mn_num2_2',title:'Hear bigger numbers',step:'recognize',meta:'Spot teens & tens',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'арван нэг',o:['арван нэг','арван хоёр','хорь','арав'],a:0},
{t:'li',q:'Listen — which number?',say:'гуч',o:['гуч','дөч','хорь','зуу'],a:0},
{t:'mc',q:'Which is 12?',o:['арван хоёр','арван нэг','хорь','хоёр'],a:0},
{t:'mc',q:'Which is 30?',o:['гуч','хорь','дөч','зуу'],a:0},
{t:'li',q:'Listen — which number?',say:'зуу',o:['зуу','хорь','гуч','арав'],a:0},
{t:'mc',q:'Which is 40?',o:['дөч','гуч','хорь','дөрөв'],a:0},
{t:'li',q:'Listen — which number?',say:'арван хоёр',o:['арван хоёр','арван нэг','хоёр','хорь'],a:0}]},
{id:'mn_num2_3',title:'Build bigger numbers',step:'build',meta:'Teens & tens',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['арван нэг','11'],['хорь','20'],['гуч','30'],['зуу','100']]},
{t:'mc',q:'Which is 15?',o:['арван тав','тавь','тав','хорин тав'],a:0},
{t:'wb',q:'Build the number 11',a:['арван','нэг'],pool:['арван','нэг','хорь','арав']},
{t:'mc',q:'Which is 50?',o:['тавь','тав','арван тав','дөч'],a:0},
{t:'li',q:'Listen — which number?',say:'дөч',o:['дөч','гуч','хорь','дөрөв'],a:0},
{t:'match',q:'Match number and value',pairs:[['арван хоёр','12'],['дөч','40'],['тавь','50'],['хорь','20']]}]},
{id:'mn_num2_4',title:'Mix it',step:'mix',meta:'All the way to 100',vocab:[],ex:[
{t:'mc',q:'Which is 100?',o:['зуу','хорь','арав','гуч'],a:0},
{t:'li',q:'Listen — which number?',say:'хорь',o:['хорь','гуч','зуу','дөч'],a:0},
{t:'mc',q:'"21" = хорин + …',o:['нэг','арав','хоёр','зуу'],a:0},
{t:'wb',q:'Build the number 15',a:['арван','тав'],pool:['арван','тав','хорь','тавь']},
{t:'match',q:'Match number and value',pairs:[['хорь','20'],['гуч','30'],['зуу','100'],['арван нэг','11']]},
{t:'li',q:'Listen — which number?',say:'зуу',o:['зуу','хорь','арав','гуч'],a:0},
{t:'mc',q:'The teens are fully regular: арван + …',o:['the digit','nothing','зуу','a ten-word'],a:0}]},
{id:'mn_num2_5',title:'Checkpoint',step:'checkpoint',meta:'11–100 mastered?',vocab:[],ex:[
{t:'mc',q:'Which is 20?',o:['хорь','гуч','зуу','арав'],a:0},
{t:'li',q:'Listen — which number?',say:'арван нэг',o:['арван нэг','арван хоёр','нэг','хорь'],a:0},
{t:'mc',q:'Which is 30?',o:['гуч','хорь','дөч','зуу'],a:0},
{t:'match',q:'Match number and value',pairs:[['арван нэг','11'],['хорь','20'],['гуч','30'],['дөч','40'],['зуу','100']]},
{t:'wb',q:'Build the number 11',a:['арван','нэг'],pool:['арван','нэг','хорь','зуу']},
{t:'mc',q:'Which is 100?',o:['зуу','хорь','тавь','арав'],a:0},
{t:'li',q:'Listen — which number?',say:'гуч',o:['гуч','дөч','хорь','зуу'],a:0}]},

{id:'mn_court',title:'Yes, no, sorry, OK',step:'learn',meta:'Courtesy words',vocab:[['тийм','tiim','yes'],['үгүй','ugui','no'],['уучлаарай','uuchlaarai','sorry / excuse me'],['за','za','OK / alright'],['зүгээр','zugeer','it is fine / no problem'],['болно','bolno','it is possible / can do']],ex:[
{t:'note',tag:'Yes & no',q:'тийм · үгүй',body:'<p><span class="deva">тийм</span> <b>tiim</b> = yes, <span class="deva">үгүй</span> <b>ugui</b> = no (there are your Ү’s!). And the mighty <span class="deva">за</span> <b>za</b> = "OK / right / well then" — Mongolians sprinkle it everywhere.</p>',eg:[['тийм','tiim','yes'],['үгүй','ugui','no'],['за','za','OK']]},
{t:'mc',q:'"yes" =',o:['тийм','үгүй','за','зүгээр'],a:0},
{t:'mc',q:'"no" =',o:['үгүй','тийм','за','болно'],a:0},
{t:'note',tag:'Sorry & no problem',q:'уучлаарай · зүгээр',body:'<p><span class="deva">уучлаарай</span> <b>uuchlaarai</b> = sorry / excuse me. The gracious reply: <span class="deva">зүгээр зүгээр</span> <b>zugeer</b> = "it is fine, no problem". <span class="deva">болно</span> <b>bolno</b> = "it is possible / OK, can do" — the yes of permission.</p>',eg:[['уучлаарай','uuchlaarai','sorry'],['зүгээр','zugeer','no problem'],['болно','bolno','can do']]},
{t:'mc',q:'"sorry / excuse me" =',o:['уучлаарай','зүгээр','за','тийм'],a:0},
{t:'mc',q:'Reply to an apology:',o:['зүгээр зүгээр','уучлаарай','үгүй','болно'],a:0},
{t:'li',q:'Listen — which word?',say:'тийм',o:['тийм','үгүй','за','болно'],a:0}]},
{id:'mn_court_2',title:'Hear courtesy',step:'recognize',meta:'Spot the polite words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'үгүй',o:['үгүй','тийм','за','зүгээр'],a:0},
{t:'li',q:'Listen — which word?',say:'уучлаарай',o:['уучлаарай','зүгээр','баярлалаа','за'],a:0},
{t:'mc',q:'"OK / alright" =',o:['за','тийм','үгүй','болно'],a:0},
{t:'mc',q:'"it is possible / can do" =',o:['болно','зүгээр','за','тийм'],a:0},
{t:'li',q:'Listen — which word?',say:'зүгээр',o:['зүгээр','уучлаарай','за','болно'],a:0},
{t:'mc',q:'зүгээр means…',o:['it is fine / no problem','sorry','yes','goodbye'],a:0},
{t:'li',q:'Listen — which word?',say:'за',o:['за','та','ес','цай'],a:0}]},
{id:'mn_court_3',title:'Build politely',step:'build',meta:'Courtesy in action',vocab:[],ex:[
{t:'wb',q:'Build: "sorry — it is fine!"',a:['уучлаарай','зүгээр'],pool:['уучлаарай','зүгээр','тийм','за']},
{t:'match',q:'Match word and meaning',pairs:[['тийм','yes'],['үгүй','no'],['уучлаарай','sorry'],['за','OK']]},
{t:'fill',q:'Get someone’s attention politely',s:'___ , хот хаана байна?',o:['уучлаарай','тийм','за','үгүй'],a:0},
{t:'mc',q:'Agree cheerfully:',o:['за за','үгүй','уучлаарай','зүгээр'],a:0},
{t:'li',q:'Listen — which word?',say:'болно',o:['болно','зүгээр','тийм','за'],a:0},
{t:'mc',q:'Ask "may I?" — the yes you hope for is…',o:['болно','үгүй','уучлаарай','баяртай'],a:0}]},
{id:'mn_court_4',title:'Mix it',step:'mix',meta:'Politeness in play',vocab:[],ex:[
{t:'mc',q:'"yes" =',o:['тийм','үгүй','за','болно'],a:0},
{t:'li',q:'Listen — which word?',say:'зүгээр',o:['зүгээр','уучлаарай','болно','тийм'],a:0},
{t:'wb',q:'Build: "yes, OK, thanks"',a:['тийм','за','баярлалаа'],pool:['тийм','за','баярлалаа','үгүй']},
{t:'fill',q:'Someone bumps you and apologizes. You:',s:'___ !',o:['зүгээр зүгээр','уучлаарай','үгүй','тийм'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['зүгээр','no problem'],['болно','can do'],['тийм','yes'],['үгүй','no']]},
{t:'mc',q:'за is Mongolia’s all-purpose…',o:['OK / well-then','no','sorry','question'],a:0},
{t:'li',q:'Listen — which word?',say:'уучлаарай',o:['уучлаарай','зүгээр','баярлалаа','баяртай'],a:0}]},
{id:'mn_court_5',title:'Checkpoint',step:'checkpoint',meta:'Courtesy mastered?',vocab:[],ex:[
{t:'mc',q:'"sorry / excuse me" =',o:['уучлаарай','зүгээр','за','тийм'],a:0},
{t:'li',q:'Listen — which word?',say:'тийм',o:['тийм','үгүй','за','болно'],a:0},
{t:'mc',q:'"no" =',o:['үгүй','тийм','за','зүгээр'],a:0},
{t:'wb',q:'Build: "sorry — it is fine!"',a:['уучлаарай','зүгээр'],pool:['уучлаарай','зүгээр','болно','за']},
{t:'match',q:'Match word and meaning',pairs:[['тийм','yes'],['үгүй','no'],['уучлаарай','sorry'],['за','OK'],['зүгээр','no problem']]},
{t:'mc',q:'"it is possible / can do" =',o:['болно','зүгээр','тийм','за'],a:0},
{t:'li',q:'Listen — which word?',say:'үгүй',o:['үгүй','тийм','зүгээр','за'],a:0}]},

{id:'mn_intro',title:'What is your name?',step:'learn',meta:'The … гэдэг pattern',vocab:[['нэр','ner','name'],['Миний нэр','minii ner','my name'],['Намайг Бат гэдэг','namaig Bat gedeg','I am called Bat'],['Таны нэрийг хэн гэдэг вэ?','tany neriig khen gedeg ve','what is your name? (polite)'],['хэн','khen','who'],['Танилцсандаа баяртай байна','taniltssandaa bayartai baina','nice to meet you']],ex:[
{t:'note',tag:'You are "called"',q:'… гэдэг',body:'<p>Mongolian names use "to be called": <span class="deva">Намайг Бат гэдэг</span> <b>namaig Bat gedeg</b> = "me Bat (they) call" = I am called Bat. Ask back politely: <span class="deva">Таны нэрийг хэн гэдэг вэ?</span> = "your name who calls?" (<span class="deva">хэн</span> = who).</p>',tip:'Simpler starter: Миний нэр … — "my name (is) …".'},
{t:'mc',q:'Which word means "name"?',o:['нэр','хэн','гэдэг','нар'],a:0},
{t:'mc',q:'"I am called Bat" =',o:['Намайг Бат гэдэг','Миний Бат','Би нэр Бат','Бат хэн'],a:0},
{t:'note',tag:'Who & meeting',q:'хэн · nice to meet you',body:'<p><span class="deva">хэн</span> <b>khen</b> = who — it sits where the answer goes: <span class="deva">Тэр хэн бэ?</span> = "that who is?" New friends part with <span class="deva">Танилцсандаа баяртай байна</span> = "glad to have met you" — there is баяртай again!</p>',eg:[['хэн','khen','who'],['Миний нэр','minii ner','my name']]},
{t:'mc',q:'"who" =',o:['хэн','нэр','юу','за'],a:0},
{t:'mc',q:'Ask a name politely:',o:['Таны нэрийг хэн гэдэг вэ?','Миний нэр','Намайг гэдэг','Хэн бэ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Миний нэр',o:['Миний нэр','Таны нэр','нэр','хэн'],a:0}]},
{id:'mn_intro_2',title:'Hear introductions',step:'recognize',meta:'Spot the phrases',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'Таны нэрийг хэн гэдэг вэ?',o:['Таны нэрийг хэн гэдэг вэ?','Миний нэр','Намайг Бат гэдэг','хэн'],a:0},
{t:'li',q:'Listen — which word?',say:'хэн',o:['хэн','нэр','юу','за'],a:0},
{t:'mc',q:'Миний means…',o:['my','your','his','name'],a:0},
{t:'mc',q:'Таны means…',o:['your (polite)','my','their','who'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Намайг Бат гэдэг',o:['Намайг Бат гэдэг','Миний нэр','Таны нэрийг хэн гэдэг вэ?','хэн'],a:0},
{t:'mc',q:'гэдэг in the name pattern means…',o:['is called','is big','is here','is good'],a:0},
{t:'li',q:'Listen — which word?',say:'нэр',o:['нэр','нар','хэн','ном'],a:0}]},
{id:'mn_intro_3',title:'Build an intro',step:'build',meta:'Say who you are',vocab:[],ex:[
{t:'wb',q:'Build: "I am called Bat"',a:['Намайг','Бат','гэдэг'],pool:['Намайг','Бат','гэдэг','Миний']},
{t:'match',q:'Match phrase and meaning',pairs:[['нэр','name'],['Миний нэр','my name'],['хэн','who'],['гэдэг','is called']]},
{t:'fill',q:'Complete: "what is your name?" (polite)',s:'Таны нэрийг ___ гэдэг вэ?',o:['хэн','юу','нэр','та'],a:0},
{t:'mc',q:'"that person — who is it?": Тэр ___ бэ?',d:'Тэр хэн бэ?',o:['хэн','юу','нэр','за'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Намайг Бат гэдэг',o:['Намайг Бат гэдэг','Миний нэр','хэн гэдэг вэ','нэр'],a:0},
{t:'mc',q:'The simple starter for your name is…',o:['Миний нэр …','Намайг','гэдэг','хэн бэ'],a:0}]},
{id:'mn_intro_4',title:'Mix it',step:'mix',meta:'A tiny conversation',vocab:[],ex:[
{t:'mc',q:'Ask a name politely:',o:['Таны нэрийг хэн гэдэг вэ?','Миний нэр Бат','Намайг гэдэг','Юу байна?'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Миний нэр',o:['Миний нэр','Таны нэрийг хэн гэдэг вэ?','Намайг Бат гэдэг','хэн'],a:0},
{t:'wb',q:'Build: "my name (is) Saraa"',a:['Миний','нэр','Сараа'],pool:['Миний','нэр','Сараа','гэдэг']},
{t:'fill',q:'Complete: "I am called Saraa"',s:'Намайг Сараа ___',o:['гэдэг','нэр','хэн','байна'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['Намайг Бат гэдэг','I am called Bat'],['Таны нэрийг хэн гэдэг вэ?','what is your name?'],['Миний нэр','my name'],['хэн','who']]},
{t:'mc',q:'хэн sits where the ___ would go',o:['answer','verb','subject','greeting'],a:0},
{t:'li',q:'Listen — which word?',say:'хэн',o:['хэн','нэр','юу','бэ'],a:0}]},
{id:'mn_intro_5',title:'Checkpoint',step:'checkpoint',meta:'Introductions mastered?',vocab:[],ex:[
{t:'mc',q:'"I am called Bat" =',o:['Намайг Бат гэдэг','Миний Бат','Бат хэн бэ','Би Бат нэр'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Таны нэрийг хэн гэдэг вэ?',o:['Таны нэрийг хэн гэдэг вэ?','Намайг Бат гэдэг','Миний нэр','хэн'],a:0},
{t:'mc',q:'"who" =',o:['хэн','юу','нэр','вэ'],a:0},
{t:'wb',q:'Build: "I am called Bat"',a:['Намайг','Бат','гэдэг'],pool:['Намайг','Бат','гэдэг','нэр']},
{t:'match',q:'Match phrase and meaning',pairs:[['нэр','name'],['Миний нэр','my name'],['Намайг … гэдэг','I am called …'],['хэн','who']]},
{t:'mc',q:'Names in Mongolian use the pattern "to be…"',o:['called (гэдэг)','big','made','from'],a:0},
{t:'li',q:'Listen — which phrase?',say:'Намайг Бат гэдэг',o:['Намайг Бат гэдэг','Миний нэр','Таны нэр','хэн бэ'],a:0}]},

{id:'mn_day',title:'Days & time words',step:'learn',meta:'Today, tomorrow & the week',vocab:[['өнөөдөр','onoodor','today'],['маргааш','margaash','tomorrow'],['өчигдөр','ochigdor','yesterday'],['өдөр','odor','day'],['шөнө','shono','night'],['одоо','odoo','now']],ex:[
{t:'note',tag:'The three days',q:'өчигдөр өнөөдөр маргааш',body:'<p><span class="deva">өнөөдөр</span> <b>onoodor</b> = today, <span class="deva">маргааш</span> <b>margaash</b> = tomorrow, <span class="deva">өчигдөр</span> <b>ochigdor</b> = yesterday. Both today and yesterday carry <span class="deva">өдөр</span> "day" inside!</p>',eg:[['өнөөдөр','onoodor','today'],['маргааш','margaash','tomorrow'],['өчигдөр','ochigdor','yesterday']]},
{t:'mc',q:'Which means "today"?',o:['өнөөдөр','маргааш','өчигдөр','өдөр'],a:0},
{t:'mc',q:'Which means "tomorrow"?',o:['маргааш','өнөөдөр','өчигдөр','шөнө'],a:0},
{t:'note',tag:'Day, night, now',q:'өдөр · шөнө · одоо',body:'<p><span class="deva">өдөр</span> <b>odor</b> = day, <span class="deva">шөнө</span> <b>shono</b> = night, <span class="deva">одоо</span> <b>odoo</b> = now. <span class="deva">Сайхан өдөр!</span> = "a beautiful day!"</p>',eg:[['өдөр','odor','day'],['шөнө','shono','night'],['одоо','odoo','now']]},
{t:'mc',q:'Which means "night"?',o:['шөнө','өдөр','одоо','маргааш'],a:0},
{t:'mc',q:'Which means "now"?',o:['одоо','өдөр','шөнө','өнөөдөр'],a:0},
{t:'li',q:'Listen — which word?',say:'өнөөдөр',o:['өнөөдөр','маргааш','өчигдөр','өдөр'],a:0}]},
{id:'mn_day_2',title:'Hear day words',step:'recognize',meta:'Spot the times',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'маргааш',o:['маргааш','өнөөдөр','өчигдөр','шөнө'],a:0},
{t:'li',q:'Listen — which word?',say:'шөнө',o:['шөнө','өдөр','одоо','маргааш'],a:0},
{t:'mc',q:'Which means "yesterday"?',o:['өчигдөр','өнөөдөр','маргааш','одоо'],a:0},
{t:'mc',q:'Which means "day"?',o:['өдөр','шөнө','одоо','нар'],a:0},
{t:'li',q:'Listen — which word?',say:'одоо',o:['одоо','өдөр','шөнө','өнөөдөр'],a:0},
{t:'mc',q:'өнөөдөр and өчигдөр both contain…',o:['өдөр (day)','шөнө (night)','нар (sun)','сар (moon)'],a:0},
{t:'li',q:'Listen — which word?',say:'өчигдөр',o:['өчигдөр','өнөөдөр','маргааш','өдөр'],a:0}]},
{id:'mn_day_3',title:'Build day phrases',step:'build',meta:'Yesterday, today, tomorrow',vocab:[],ex:[
{t:'wb',q:'Order the days: yesterday, today, tomorrow',a:['өчигдөр','өнөөдөр','маргааш'],pool:['өнөөдөр','маргааш','өчигдөр','өдөр']},
{t:'match',q:'Match word and meaning',pairs:[['өнөөдөр','today'],['маргааш','tomorrow'],['өчигдөр','yesterday'],['шөнө','night']]},
{t:'fill',q:'Complete: "a beautiful day!" (сайхан = beautiful)',s:'Сайхан ___ !',o:['өдөр','шөнө','одоо','нэр'],a:0},
{t:'mc',q:'"see you tomorrow" would start with…',o:['маргааш','өчигдөр','шөнө','одоо'],a:0},
{t:'li',q:'Listen — which word?',say:'өдөр',o:['өдөр','одоо','шөнө','нар'],a:0},
{t:'mc',q:'одоо means…',o:['now','later','never','yesterday'],a:0}]},
{id:'mn_day_4',title:'Mix it',step:'mix',meta:'Days & times together',vocab:[],ex:[
{t:'mc',q:'Which means "tomorrow"?',o:['маргааш','өнөөдөр','өчигдөр','шөнө'],a:0},
{t:'li',q:'Listen — which word?',say:'өнөөдөр',o:['өнөөдөр','өчигдөр','маргааш','өдөр'],a:0},
{t:'wb',q:'Build: "today is a beautiful day"',a:['өнөөдөр','сайхан','өдөр','байна'],pool:['өнөөдөр','сайхан','өдөр','байна','шөнө']},
{t:'fill',q:'Complete: "now — tea!"',s:'___ — цай!',o:['одоо','өдөр','шөнө','маргааш'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['өчигдөр','yesterday'],['өдөр','day'],['шөнө','night'],['одоо','now']]},
{t:'mc',q:'маргааш уулзая would mean "let us meet…"',o:['tomorrow','yesterday','tonight','never'],a:0},
{t:'li',q:'Listen — which word?',say:'маргааш',o:['маргааш','өнөөдөр','шөнө','одоо'],a:0}]},
{id:'mn_day_5',title:'Zone 2 checkpoint',step:'checkpoint',meta:'Days & times mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "today"?',o:['өнөөдөр','маргааш','өчигдөр','шөнө'],a:0},
{t:'li',q:'Listen — which word?',say:'өчигдөр',o:['өчигдөр','өнөөдөр','маргааш','өдөр'],a:0},
{t:'mc',q:'Which means "night"?',o:['шөнө','өдөр','одоо','нар'],a:0},
{t:'wb',q:'Order: yesterday, today, tomorrow',a:['өчигдөр','өнөөдөр','маргааш'],pool:['маргааш','өчигдөр','өнөөдөр','одоо']},
{t:'match',q:'Match word and meaning',pairs:[['өнөөдөр','today'],['маргааш','tomorrow'],['өчигдөр','yesterday'],['өдөр','day'],['одоо','now']]},
{t:'mc',q:'Two zones done! In Mongolian you can now say…',o:['Сайн байна уу! Намайг … гэдэг','nothing yet','only numbers','only letters'],a:0},
{t:'li',q:'Listen — which word?',say:'шөнө',o:['шөнө','өдөр','одоо','маргааш'],a:0}]},
];
const MN_LESSONS=[].concat(MN_Z1,MN_Z2);

registerPack({
  code:'mn',
  name:'Mongolian',
  nativeName:'Монгол',
  ttsLocale:'mn-MN',
  script:/[Ѐ-ӿ]/, /* Cyrillic + Cyrillic Supplement (Өө/Үү live in the base block) */
  audioBase:'audio-mn/',
  storageKey:'sajilo_mn',
  brand:{h1:'Learn <em>Mongolian</em>'},
  alpha:{native:'Монгол цагаан толгой',vowels:'Эгшиг',cons:'Гийгүүлэгч',nums:'Тоо',review:'Дасгал',settings:'Тохиргоо'},
  art:{hero:MN_HERO,band:MN_BAND,mascot:MN_MASCOT},
  voiceTest:v=>/^mn(\b|[-_])/i.test(v.lang)||/mongol/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:MN_LESSONS,units:MN_UNITS,unitsIntensive:[],sym:MN_SYM,
  vowels:MN_VOWELS,cons:MN_CONS,nums:MN_NUMS,srsSeed:MN_SRS_SEED
});
