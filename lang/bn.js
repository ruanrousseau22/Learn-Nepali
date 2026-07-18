/* ===== BENGALI LANGUAGE PACK (Zones 1–2 · early access) =====
   Bengali-DRIVEN curriculum, researched before shipping (Wikivoyage Bengali
   phrasebook for core phrases/numbers incl. the Akademi -ো teen spellings;
   Wikipedia "Bengali alphabet" for the letter inventory, vowel signs and the
   inherent vowel). Target variety: STANDARD COLLOQUIAL BENGALI as spoken in
   KOLKATA / West Bengal (cholito bhasha — the Rarhi/Nadia-based standard both
   West Bengal and Bangladesh share; we teach the spoken standard, never the
   literary shadhu register). Kolkata word choices where the two banks differ:
   জল water (BD পানি), নুন salt (BD লবণ) — flagged in notes as they appear.
   Romanization scheme (enforced — NO Bengali script in rom fields; scan [ঀ-৿]):
   - ASCII only. The inherent vowel and অ are written "o" (the Bengali ô —
     nomoshkar, mon); ও is also written "o" — the AUDIO carries the o/ô
     difference. আ=a, ই/ঈ=i, উ/ঊ=u, এ=e, ঐ=oi, ঔ=ou, ঋ=ri.
   - LETTER TILES teach the soft/hard T split: dental ত থ দ ধ = "t/d (soft —
     tongue on the teeth)", retroflex ট ঠ ড ঢ = "t/d (hard — the English t/d!)".
     WORD roms collapse both to plain t/th/d/dh, the way Bengali is written
     informally everywhere (taka, thik, dada) — the audio keeps the contrast
     (same convention as the Mongolian ö/ü collapse).
   - Aspirates kh gh chh jh th dh ph bh; চ=ch, জ/য=j, ঝ=jh; শ ষ স=sh (স=s
     where it sounds s: bas); ঙ/ং=ng, ঁ = nasalized vowel written n (chand),
     য়=y, ড়=r (a quick flap — bari), হ=h. Consonant names carry the
     inherent o: ko kho go…
   Zone-1 story: the hidden "o" inside every consonant (মন = mon!) + the মাত্রা
   headline; the vowel-sign dance (ে attaches BEFORE its consonant, ো hugs both
   sides); everyday consonants and the dada/didi street-politeness words; the
   two T families (soft vs hard — English t/d are the HARD ones); the aspirate
   puff of air (mach-bhat!); the three-letters-one-sound sh family + জল vs পানি;
   nasal signs & first sight conjuncts — ending able to read বাংলা and কলকাতা.
   Zone 2: kemon achhen + the reply loop, the তুই/তুমি/আপনি respect ladder
   (সে = he AND she), numbers 1–10, courtesy (achchha! thik achhe!), zero-copula
   introductions, aj/kal time words (kal = tomorrow AND yesterday!), teens to
   বিশ/কুড়ি. Growing zone by zone from here — next zones append to BN_UNITS/
   BN_LESSONS the way Khmer grew.
   Art: secular West Bengal — dawn over the Hooghly river, the Howrah bridge
   silhouette right, a country boat (nouka), coconut palms and the green delta.
   Mascot: Bengal tiger cub. No temples or religious imagery (house rule). */

/* --- hero: the Hooghly at dawn — calm rosy sky over the title, Howrah bridge & palms right --- */
const BN_HERO='<circle class="orb-glow" cx="856" cy="112" r="72"/><circle class="orb" cx="856" cy="112" r="44"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="120" cy="58" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="240" cy="104" r="1.2"/><circle cx="360" cy="46" r="2"/><circle cx="470" cy="122" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="600" cy="60" r="1.3"/><circle cx="700" cy="112" r="1.5" class="tw" style="animation-delay:2s"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="74" rx="28" ry="11"/><ellipse cx="78" cy="69" rx="22" ry="13"/><ellipse cx="26" cy="72" rx="20" ry="10"/></g>'
/* river birds over the water (fine detail) */
+'<g class="art-detail" fill="none" stroke="var(--mtn-far)" stroke-width="1.8" stroke-linecap="round" opacity=".6" aria-hidden="true"><path d="M210 96 q6 -5 12 0 q6 -5 12 0"/><path d="M292 112 q5 -4.5 10 0 q5 -4.5 10 0"/></g>'
/* far: the hazy far bank of the Hooghly — long, low, violet */
+'<path class="far" d="M0 254 Q150 249 300 252 Q450 247 600 250 Q700 246 780 244 Q860 240 940 243 Q1040 238 1120 241 Q1170 239 1200 240 L1200 320 L0 320 Z"/>'
/* the Howrah bridge — steel cantilever silhouette, high right where the phone crop keeps it */
+'<g fill="none" stroke="var(--tree)" stroke-linecap="round" aria-hidden="true">'
+'<path d="M868 246 L868 168 M886 246 L886 168 M868 168 L886 168 M868 196 L886 196 M868 222 L886 222" stroke-width="5"/>'
+'<path d="M1148 246 L1148 168 M1166 246 L1166 168 M1148 168 L1166 168 M1148 196 L1166 196 M1148 222 L1166 222" stroke-width="5"/>'
+'<path d="M886 172 Q1017 128 1148 172" stroke-width="6"/>'
+'<path d="M862 246 L1200 246" stroke-width="6"/>'
+'<path d="M820 226 L868 176 M1200 232 L1166 176" stroke-width="5"/>'
+'</g>'
/* suspender cables (fine detail) */
+'<g class="art-detail" stroke="var(--tree)" stroke-width="1.6" opacity=".6" aria-hidden="true"><path d="M920 158 L920 246 M960 149 L960 246 M1000 144 L1000 246 M1040 144 L1040 246 M1080 148 L1080 246 M1120 157 L1120 246"/></g>'
/* mid: the warm golden riverbank sweeping under the title */
+'<path class="mid" d="M0 320 L0 284 Q200 276 400 281 Q600 286 800 280 Q1000 275 1200 281 L1200 320 Z"/>'
/* water glints on the river, under the title */
+'<path class="snow" opacity=".28" d="M90 258 Q240 252 390 256 L388 262 Q240 256 94 264 Z"/>'
+'<path class="snow" opacity=".28" d="M180 270 Q330 262 470 268 L468 274 Q330 266 184 276 Z"/>'
/* the nouka — a Bengali country boat with its swept prow, afloat on the violet water */
+'<g fill="var(--tree)" aria-hidden="true">'
+'<path d="M560 261 Q600 272 648 272 Q694 272 726 260 Q718 276 692 280 L600 280 Q572 276 560 261 Z"/>'
+'<path d="M636 238 Q652 246 656 260 L640 272 Q630 254 636 238 Z"/>'
+'</g>'
/* boatman with angled oar (fine detail — figure + slanted oar, never a bare cross) */
+'<g class="art-detail" fill="var(--tree)" aria-hidden="true"><circle cx="604" cy="254" r="4.6"/><path d="M598 259 Q604 266 612 262 L612 272 L598 272 Z"/><path d="M613 255 L634 276 L631 279 L610 258 Z"/></g>'
/* coconut palms on the near bank, right of the title zone */
+'<g fill="var(--tree)" aria-hidden="true">'
+'<path d="M752 300 Q748 250 758 212 L764 212 Q758 252 762 300 Z"/>'
+'<path d="M760 214 Q738 200 716 204 Q740 188 762 202 Q770 184 790 178 Q776 194 766 206 Q788 196 806 204 Q784 206 766 214 Q780 222 786 238 Q770 226 760 216 Q750 230 736 234 Q746 220 756 212 Z"/>'
+'<path d="M804 300 Q802 264 808 238 L813 238 Q810 266 812 300 Z"/>'
+'<path d="M810 240 Q794 230 778 234 Q796 220 812 230 Q820 216 836 212 Q824 226 816 234 Q834 228 848 236 Q830 236 816 240 Q826 248 830 260 Q818 250 810 242 Z"/>'
+'</g>'
/* near: the green delta foreground */
+'<g class="near"><path d="M0 306 Q160 290 320 301 Q480 312 640 301 Q800 290 960 303 Q1080 311 1200 302 L1200 320 L0 320 Z"/>'
/* banana leaves rising from the near bank, far left of the title */
+'<path d="M34 306 Q22 280 34 258 Q44 276 42 300 Z M52 306 Q56 278 74 266 Q66 288 58 304 Z M20 308 Q6 292 4 274 Q20 284 26 302 Z"/></g>';

/* --- band: calm water left, nouka & palm right --- */
const BN_BAND='<circle class="orb-glow" cx="1046" cy="86" r="34"/><circle class="orb" cx="1046" cy="86" r="20"/>'
+'<path class="far" d="M0 156 Q150 151 300 154 Q450 149 600 152 Q750 148 900 151 Q1050 146 1200 149 L1200 200 L0 200 Z"/>'
+'<path class="mid" d="M0 200 L0 174 Q300 166 600 172 Q900 178 1200 170 L1200 200 Z"/>'
/* water glint */
+'<path class="snow" opacity=".25" d="M120 163 Q260 157 400 161 L398 166 Q260 161 124 168 Z"/>'
/* small nouka */
+'<g fill="var(--tree)" aria-hidden="true"><path d="M840 160 Q866 167 896 167 Q924 167 944 159 Q938 170 920 173 L862 173 Q848 170 840 160 Z"/><path d="M888 146 Q898 151 900 160 L890 167 Q884 156 888 146 Z"/></g>'
/* palm (fine detail) */
+'<g class="art-detail" fill="var(--tree)" aria-hidden="true"><path d="M1102 186 Q1100 160 1106 142 L1110 142 Q1108 162 1109 186 Z"/><path d="M1107 144 Q1092 136 1078 139 Q1094 128 1108 136 Q1114 124 1128 121 Q1118 132 1111 139 Q1126 134 1138 141 Q1122 141 1111 144 Q1119 151 1123 161 Q1112 152 1106 145 Z"/></g>'
+'<g class="near"><path d="M0 188 Q300 170 600 180 Q900 190 1200 180 L1200 200 L0 200 Z"/></g>';

/* --- mascot: Bengal tiger cub (moods: happy / cheer / oops) --- */
function BN_MASCOT(m){
  var base='<ellipse cx="32" cy="46" rx="16" ry="11.5" fill="#E8913C"/>' /* body */
  +'<path d="M20 42 Q17 47 20 52 L24 50 Q21 46 23 42 Z M44 42 Q47 47 44 52 L40 50 Q43 46 41 42 Z" fill="#7A4318"/>' /* body stripes */
  +'<path d="M16 20 L11 9 L22 14 Z" fill="#C9722A"/><path d="M48 20 L53 9 L42 14 Z" fill="#C9722A"/>' /* ears */
  +'<path d="M17.5 17.5 L14.5 11.5 L20.5 14.5 Z" fill="#F7D9B8"/><path d="M46.5 17.5 L49.5 11.5 L43.5 14.5 Z" fill="#F7D9B8"/>' /* inner ears */
  +'<circle cx="32" cy="29" r="16" fill="#F0A24A"/>' /* head */
  +'<path d="M22 16 L25 22 L19 22 Z M42 16 L39 22 L45 22 Z M32 13.5 L34 20 L30 20 Z" fill="#7A4318"/>' /* forehead stripes */
  +'<path d="M14.5 27 L21 28.5 L15 31.5 Z M49.5 27 L43 28.5 L49 31.5 Z" fill="#7A4318"/>' /* cheek stripes */
  +'<ellipse cx="32" cy="37.5" rx="9" ry="7" fill="#FDF3E4"/>' /* muzzle */
  +'<path d="M32 34.2 L34.6 37 Q32 38.8 29.4 37 Z" fill="#5b3d22"/>'; /* nose */
  var f;
  if(m==='cheer')f='<path d="M21.5 27.5 Q24.5 24 27.5 27.5" fill="none" stroke="#4a2f18" stroke-width="2.2" stroke-linecap="round"/><path d="M36.5 27.5 Q39.5 24 42.5 27.5" fill="none" stroke="#4a2f18" stroke-width="2.2" stroke-linecap="round"/><path d="M26.5 41.5 Q32 46 37.5 41.5" fill="none" stroke="#4a2f18" stroke-width="2.2" stroke-linecap="round"/>';
  else if(m==='oops')f='<path d="M21 25.5 Q24.5 24.3 28 25.5" fill="none" stroke="#4a2f18" stroke-width="1.6" stroke-linecap="round"/><path d="M36 25.5 Q39.5 24.3 43 25.5" fill="none" stroke="#4a2f18" stroke-width="1.6" stroke-linecap="round"/><circle cx="24.5" cy="28.5" r="2" fill="#4a2f18"/><circle cx="39.5" cy="28.5" r="2" fill="#4a2f18"/><ellipse cx="32" cy="42.5" rx="2.2" ry="2.6" fill="#4a2f18"/>';
  else f='<circle cx="24.5" cy="28" r="2.5" fill="#4a2f18"/><circle cx="39.5" cy="28" r="2.5" fill="#4a2f18"/><circle cx="25.3" cy="27.2" r="0.7" fill="#fff"/><circle cx="40.3" cy="27.2" r="0.7" fill="#fff"/><path d="M27.5 41.5 Q32 44.6 36.5 41.5" fill="none" stroke="#4a2f18" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+base+f+'</svg>';}

/* ===================== UNITS (2 zones / 14 topics) ===================== */
const BN_UNITS=[
  {n:1,t:'The Script',d:'বাংলা বর্ণমালা — read Bengali',lessons:['bn_c1','bn_c1_2','bn_c1_3','bn_c1_4','bn_c1_5','bn_c2','bn_c2_2','bn_c2_3','bn_c2_4','bn_c2_5','bn_c3','bn_c3_2','bn_c3_3','bn_c3_4','bn_c3_5','bn_c4','bn_c4_2','bn_c4_3','bn_c4_4','bn_c4_5','bn_c5','bn_c5_2','bn_c5_3','bn_c5_4','bn_c5_5','bn_c6','bn_c6_2','bn_c6_3','bn_c6_4','bn_c6_5','bn_c7','bn_c7_2','bn_c7_3','bn_c7_4','bn_c7_5']},
  {n:2,t:'Foundations',d:'Greetings, people, numbers & time',lessons:['bn_greet','bn_greet_2','bn_greet_3','bn_greet_4','bn_greet_5','bn_pron','bn_pron_2','bn_pron_3','bn_pron_4','bn_pron_5','bn_num1','bn_num1_2','bn_num1_3','bn_num1_4','bn_num1_5','bn_court','bn_court_2','bn_court_3','bn_court_4','bn_court_5','bn_intro','bn_intro_2','bn_intro_3','bn_intro_4','bn_intro_5','bn_time','bn_time_2','bn_time_3','bn_time_4','bn_time_5','bn_num2','bn_num2_2','bn_num2_3','bn_num2_4','bn_num2_5']},
];

const BN_SYM={bn_c1:'অ',bn_c2:'কা',bn_c3:'দা',bn_c4:'ট',bn_c5:'ভ',bn_c6:'শ',bn_c7:'ং',bn_greet:'ভালো',bn_pron:'আমি',bn_num1:'এক',bn_court:'আচ্ছা',bn_intro:'নাম',bn_time:'আজ',bn_num2:'বিশ'};

const BN_VOWELS=[['অ','o'],['আ','a'],['ই','i'],['ঈ','i (long form)'],['উ','u'],['ঊ','u (long form)'],['ঋ','ri'],['এ','e'],['ঐ','oi'],['ও','o (close)'],['ঔ','ou']];
const BN_CONS=[['ক','ko'],['খ','kho'],['গ','go'],['ঘ','gho'],['ঙ','ngo'],['চ','cho'],['ছ','chho'],['জ','jo'],['ঝ','jho'],['ঞ','nyo'],['ট','to (hard)'],['ঠ','tho (hard)'],['ড','do (hard)'],['ঢ','dho (hard)'],['ণ','no (hard)'],['ত','to (soft)'],['থ','tho (soft)'],['দ','do (soft)'],['ধ','dho (soft)'],['ন','no'],['প','po'],['ফ','pho'],['ব','bo'],['ভ','bho'],['ম','mo'],['য','jo (antostho)'],['র','ro'],['ল','lo'],['শ','sho'],['ষ','sho (murdhonno)'],['স','so / sho'],['হ','ho'],['ড়','ro (flap)'],['ঢ়','rho (flap)'],['য়','yo'],['ৎ','t (khondo to)'],['ং','ng (onushshar)'],['ঃ','h (bishorgo)'],['ঁ','nasal (chondrobindu)']];
const BN_NUMS=[['০','0 (shunno)'],['১','1 (ek)'],['২','2 (dui)'],['৩','3 (tin)'],['৪','4 (char)'],['৫','5 (panch)'],['৬','6 (chhoy)'],['৭','7 (shat)'],['৮','8 (at)'],['৯','9 (noy)']];
const BN_SRS_SEED=[['চা','cha','Tea'],['জল','jol','Water'],['ভাত','bhat','Rice (cooked)'],['মাছ','machh','Fish'],['দুধ','dudh','Milk'],['ফল','phol','Fruit'],['মা','ma','Mother'],['বাবা','baba','Father'],['দাদা','dada','Elder brother'],['দিদি','didi','Elder sister'],['নাম','nam','Name'],['বাড়ি','bari','Home / house'],['টাকা','taka','Money'],['দিন','din','Day'],['রাত','rat','Night'],['ভালো','bhalo','Good'],['হ্যাঁ','hyan','Yes'],['না','na','No'],['ধন্যবাদ','dhonnobad','Thank you'],['বাংলা','bangla','Bengali / Bangla']];

/* ===== LESSONS — filled zone by zone below (concatenated into BN_LESSONS) ===== */
const BN_Z1=[
/* ===================== ZONE 1 · THE SCRIPT ===================== */
{id:'bn_c1',title:'The hidden o',step:'learn',meta:'অ আ + ক ম ন — first letters',vocab:[['অ','o','vowel: o (the inherent sound)'],['আ','a','vowel: a'],['ক','ko','consonant: k'],['ম','mo','consonant: m'],['ন','no','consonant: n']],ex:[
{t:'note',tag:'Start here',q:'Meet the Bengali script',body:'<p>Bengali hangs from a headline: the <b>মাত্রা</b> — that horizontal bar running along the top, stitching letters into words. It runs left to right, with spaces between words.</p><p>The big secret: every consonant hides a vowel inside. <span class="deva">ক</span> is not just "k" — it says <b>ko</b>. <span class="deva">ম</span> says <b>mo</b>, <span class="deva">ন</span> says <b>no</b>.</p>',tip:'Tap the speaker on any letter to hear it.'},
{t:'mc',q:'What does this letter say?',d:'ক',o:['ko','ka','ki','ke'],a:0},
{t:'mc',q:'And this one?',d:'ম',o:['mo','no','ma','mi'],a:0},
{t:'note',tag:'Your first word',q:'মন',body:'<p>Put <span class="deva">ম</span> mo + <span class="deva">ন</span> n together: <span class="deva">মন</span> <b>mon</b> = mind, heart. No vowel written — the hidden <b>o</b> does the work! And <span class="deva">মা</span> <b>ma</b> = mother: the <span class="deva">আ</span>-sound attaches to <span class="deva">ম</span> as the little stroke <span class="deva">া</span>.</p>',eg:[['মন','mon','mind / heart'],['মা','ma','mother'],['আম','am','mango']]},
{t:'mc',q:'Read it:',d:'মন',o:['mon','man','min','nom'],a:0},
{t:'mc',q:'Read it:',d:'মা',o:['ma','mo','am','na'],a:0},
{t:'li',q:'Listen — which letter?',say:'অ',o:['অ','আ','ক','ম'],a:0}]},
{id:'bn_c1_2',title:'Spot the letters',step:'recognize',meta:'Hear & spot অ আ ক ম ন',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'আ',o:['আ','অ','ম','ন'],a:0},
{t:'li',q:'Listen — which letter?',say:'ক',o:['ক','ম','ন','আ'],a:0},
{t:'mc',q:'Which letter says mo?',o:['ম','ন','ক','অ'],a:0},
{t:'mc',q:'Which letter says no?',o:['ন','ম','ক','আ'],a:0},
{t:'li',q:'Listen — which word?',say:'মা',o:['মা','আম','মন','নাম'],a:0},
{t:'mc',q:'The bar along the top of Bengali letters is the…',o:['matra (headline)','vowel','accent','space'],a:0},
{t:'li',q:'Listen — which word?',say:'আম',o:['আম','মা','মন','কাক'],a:0}]},
{id:'bn_c1_3',title:'Build first words',step:'build',meta:'মা · আম · নাম · মামা',vocab:[['নাম','nam','name'],['মামা','mama','uncle (mother’s brother)']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['অ','o'],['আ','a'],['ক','ko'],['ম','mo'],['ন','no']]},
{t:'mc',q:'Read it:',d:'নাম',o:['nam','man','nom','mon'],a:0},
{t:'mc',q:'Read it:',d:'মামা',o:['mama','mana','amma','nama'],a:0},
{t:'li',q:'Listen — which word?',say:'নাম',o:['নাম','মামা','মা','মন'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['মা','mother'],['আম','mango'],['নাম','name'],['মন','mind / heart']]},
{t:'mc',q:'নাম (name) will star in "আমার নাম…" meaning…',o:['my name is…','good morning','thank you','what is this'],a:0}]},
{id:'bn_c1_4',title:'Mix it',step:'mix',meta:'The first five letters together',vocab:[],ex:[
{t:'mc',q:'What does this letter say?',d:'ন',o:['no','mo','ko','o'],a:0},
{t:'li',q:'Listen — which word?',say:'মন',o:['মন','মা','নাম','আম'],a:0},
{t:'mc',q:'Which letter says a?',o:['আ','অ','ম','ক'],a:0},
{t:'mc',q:'Read it:',d:'আম',o:['am','ma','om','an'],a:0},
{t:'li',q:'Listen — which word?',say:'মামা',o:['মামা','মা','নাম','মন'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['মামা','uncle'],['নাম','name'],['আম','mango'],['মা','mother']]},
{t:'mc',q:'মন says mon (not "mn") because every consonant hides…',o:['an o sound','a k sound','a space','a number'],a:0}]},
{id:'bn_c1_5',title:'Checkpoint',step:'checkpoint',meta:'First letters mastered?',vocab:[],ex:[
{t:'mc',q:'What does this letter say?',d:'ক',o:['ko','go','cho','po'],a:0},
{t:'li',q:'Listen — which letter?',say:'ম',o:['ম','ন','ক','আ'],a:0},
{t:'mc',q:'Read it:',d:'মন',o:['mon','man','nam','mun'],a:0},
{t:'mc',q:'Read it:',d:'নাম',o:['nam','nom','mon','ma'],a:0},
{t:'li',q:'Listen — which word?',say:'আম',o:['আম','মন','মা','নাম'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['মা','mother'],['আম','mango'],['নাম','name'],['মামা','uncle'],['মন','mind / heart']]},
{t:'mc',q:'The vowel hiding inside every bare consonant is…',o:['o','a','i','u'],a:0}]},

{id:'bn_c2',title:'The vowel dance',step:'learn',meta:'কা কি কু কে কো — vowel signs',vocab:[['কা','ka','ka — the আ sign'],['কি','ki','ki — the ই sign'],['কু','ku','ku — the উ sign'],['কে','ke','ke — the এ sign'],['কো','ko','ko — the ও sign']],ex:[
{t:'note',tag:'Vowels wear costumes',q:'কা কি কু',body:'<p>After a consonant, vowels shrink into <b>signs</b> that dance around the letter. <span class="deva">া</span> stands after: <span class="deva">কা</span> <b>ka</b>. <span class="deva">ি</span> hooks on <b>before</b>: <span class="deva">কি</span> <b>ki</b>. <span class="deva">ু</span> tucks underneath: <span class="deva">কু</span> <b>ku</b>.</p>',tip:'Full letters like আ ই উ appear only at the start of a word.'},
{t:'mc',q:'Read it:',d:'কা',o:['ka','ki','ku','ko'],a:0},
{t:'mc',q:'Read it:',d:'কু',o:['ku','ka','ki','ke'],a:0},
{t:'note',tag:'The famous two',q:'কে and কো',body:'<p>Here is Bengali’s party trick. The <b>e</b> sign <span class="deva">ে</span> is written <b>BEFORE</b> the consonant it follows in sound: <span class="deva">কে</span> = <b>ke</b> — you SEE the sign first, but SAY it second! And the <b>o</b> sign <span class="deva">ো</span> hugs both sides at once: <span class="deva">কো</span>.</p>',eg:[['কে','ke','who?'],['কী','ki','what?'],['কো','ko','ko']]},
{t:'mc',q:'Read it:',d:'কে',o:['ke','ek','ka','ki'],a:0},
{t:'mc',q:'The ে sign is written…',o:['before its consonant','after its consonant','above only','as a full letter'],a:0},
{t:'li',q:'Listen — which syllable?',say:'কি',o:['কি','কা','কু','কে'],a:0}]},
{id:'bn_c2_2',title:'Hear the signs',step:'recognize',meta:'Spot কা কি কু কে কো',vocab:[],ex:[
{t:'li',q:'Listen — which syllable?',say:'কে',o:['কে','কা','কি','কো'],a:0},
{t:'li',q:'Listen — which syllable?',say:'কো',o:['কো','কু','কে','কা'],a:0},
{t:'mc',q:'Which syllable says ku?',o:['কু','কা','কি','কে'],a:0},
{t:'mc',q:'Which syllable says ka?',o:['কা','কু','কো','কি'],a:0},
{t:'li',q:'Listen — which word?',say:'কে',o:['কে','কী','মা','কু'],a:0},
{t:'mc',q:'কী (with the long-i sign ী) means…',o:['what?','who?','mango','name'],a:0},
{t:'li',q:'Listen — which syllable?',say:'কা',o:['কা','কে','কি','কো'],a:0}]},
{id:'bn_c2_3',title:'Build with signs',step:'build',meta:'কে · কী · নুন · কাকু',vocab:[['কে','ke','who?'],['কী','ki','what?'],['নুন','nun','salt (the West Bengal word)'],['কাকু','kaku','uncle (the Kolkata word)']],ex:[
{t:'match',q:'Match syllable and sound',pairs:[['কা','ka'],['কি','ki'],['কু','ku'],['কে','ke'],['কো','ko']]},
{t:'mc',q:'Read it:',d:'নুন',o:['nun','nan','nin','mun'],a:0},
{t:'mc',q:'Read it:',d:'কাকু',o:['kaku','kaka','kuku','kake'],a:0},
{t:'li',q:'Listen — which word?',say:'নুন',o:['নুন','নাম','কাকু','মন'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['কে','who?'],['কী','what?'],['নুন','salt'],['কাকু','uncle']]},
{t:'mc',q:'নুন is the West Bengal word for salt — Bangladesh mostly says…',o:['লবণ (lobon)','নুন too','চিনি','জল'],a:0}]},
{id:'bn_c2_4',title:'Mix it',step:'mix',meta:'Signs on different letters',vocab:[],ex:[
{t:'mc',q:'Read it:',d:'মি',o:['mi','im','ma','mu'],a:0},
{t:'li',q:'Listen — which word?',say:'কাকু',o:['কাকু','মামা','নুন','কী'],a:0},
{t:'mc',q:'Which syllable says ke?',o:['কে','কি','কা','কু'],a:0},
{t:'mc',q:'Read it:',d:'নি',o:['ni','in','na','nu'],a:0},
{t:'li',q:'Listen — which word?',say:'কী',o:['কী','কে','কু','কা'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['নুন','salt'],['কাকু','uncle'],['কে','who?'],['মা','mother']]},
{t:'mc',q:'In কে you SEE the sign first but SAY the…',o:['consonant first','sign first','o first','matra'],a:0}]},
{id:'bn_c2_5',title:'Checkpoint',step:'checkpoint',meta:'Vowel signs mastered?',vocab:[],ex:[
{t:'mc',q:'Read it:',d:'কো',o:['ko','ok','ka','ku'],a:0},
{t:'li',q:'Listen — which syllable?',say:'কু',o:['কু','কি','কা','কো'],a:0},
{t:'mc',q:'Read it:',d:'কী',o:['ki','ke','ka','ko'],a:0},
{t:'mc',q:'Which sign is written before its consonant?',o:['ে (the e sign)','া (the a sign)','ু (the u sign)','the matra'],a:0},
{t:'li',q:'Listen — which word?',say:'কে',o:['কে','কী','নুন','কাকু'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['কা','ka'],['কি','ki'],['কু','ku'],['কে','ke'],['কো','ko']]},
{t:'mc',q:'কে asks ___ and কী asks ___',o:['who / what','what / who','where / when','yes / no'],a:0}]},

{id:'bn_c3',title:'Everyday letters',step:'learn',meta:'ত দ প ব র ল স হ',vocab:[['ত','to (soft)','consonant: soft t'],['দ','do (soft)','consonant: soft d'],['প','po','consonant: p'],['ব','bo','consonant: b'],['র','ro','consonant: r'],['ল','lo','consonant: l'],['স','so / sho','consonant: s'],['হ','ho','consonant: h']],ex:[
{t:'note',tag:'The workhorses',q:'ত দ প ব র ল স হ',body:'<p>Eight letters that carry half of Bengali: <span class="deva">ত</span> to, <span class="deva">দ</span> do (both soft — tongue touching the teeth), <span class="deva">প</span> po, <span class="deva">ব</span> bo, <span class="deva">র</span> ro, <span class="deva">ল</span> lo, <span class="deva">স</span> so, <span class="deva">হ</span> ho.</p><p><span class="deva">বাবা</span> <b>baba</b> = father. <span class="deva">রাত</span> <b>rat</b> = night. <span class="deva">হাত</span> <b>hat</b> = hand.</p>',eg:[['বাবা','baba','father'],['রাত','rat','night'],['হাত','hat','hand']]},
{t:'mc',q:'What does this letter say?',d:'ব',o:['bo','po','do','ro'],a:0},
{t:'mc',q:'And this one?',d:'র',o:['ro','lo','to','ho'],a:0},
{t:'note',tag:'Dada & didi',q:'দাদা · দিদি',body:'<p>Two golden Kolkata words: <span class="deva">দাদা</span> <b>dada</b> = elder brother, <span class="deva">দিদি</span> <b>didi</b> = elder sister. Bengalis use them for EVERYONE — the shopkeeper, the bus conductor, a stranger on the street. Calling someone dada or didi is instant warmth and respect.</p>',eg:[['দাদা','dada','elder brother'],['দিদি','didi','elder sister'],['বাস','bas','bus']]},
{t:'mc',q:'Read it:',d:'দাদা',o:['dada','baba','didi','tata'],a:0},
{t:'mc',q:'Read it:',d:'দিদি',o:['didi','dada','bibi','riri'],a:0},
{t:'li',q:'Listen — which word?',say:'বাবা',o:['বাবা','দাদা','মামা','দিদি'],a:0}]},
{id:'bn_c3_2',title:'Hear the workhorses',step:'recognize',meta:'Spot ত দ প ব র ল স হ',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ত',o:['ত','দ','প','ব'],a:0},
{t:'li',q:'Listen — which letter?',say:'ল',o:['ল','র','ন','হ'],a:0},
{t:'mc',q:'Which letter says so?',o:['স','হ','ল','ব'],a:0},
{t:'mc',q:'Which letter says po?',o:['প','ব','ত','দ'],a:0},
{t:'li',q:'Listen — which word?',say:'রাত',o:['রাত','হাত','বাস','ভাত'],a:0},
{t:'mc',q:'রাত means…',d:'রাত',o:['night','hand','bus','day'],a:0},
{t:'li',q:'Listen — which letter?',say:'হ',o:['হ','স','র','ল'],a:0}]},
{id:'bn_c3_3',title:'Build the set',step:'build',meta:'দাদা · দিদি · বাস · হাত',vocab:[['দাদা','dada','elder brother'],['দিদি','didi','elder sister'],['বাস','bas','bus'],['রাত','rat','night'],['হাত','hat','hand']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ত','to'],['দ','do'],['প','po'],['ব','bo'],['স','so']]},
{t:'mc',q:'Read it:',d:'বাস',o:['bas','sab','bus','das'],a:0},
{t:'mc',q:'Read it:',d:'হাত',o:['hat','rat','tah','hot'],a:0},
{t:'li',q:'Listen — which word?',say:'দিদি',o:['দিদি','দাদা','বাবা','মামা'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['দাদা','elder brother'],['দিদি','elder sister'],['বাস','bus'],['হাত','hand']]},
{t:'mc',q:'On a Kolkata street you can call a shopkeeper…',o:['dada or didi','only his name','nothing','baba'],a:0}]},
{id:'bn_c3_4',title:'Mix it',step:'mix',meta:'Reading real words',vocab:[],ex:[
{t:'mc',q:'Read it:',d:'তা',o:['ta','at','ti','da'],a:0},
{t:'li',q:'Listen — which word?',say:'বাস',o:['বাস','রাত','হাত','নাম'],a:0},
{t:'mc',q:'Which letter says lo?',o:['ল','র','ন','হ'],a:0},
{t:'mc',q:'Read it:',d:'রাত',o:['rat','tar','rot','lat'],a:0},
{t:'li',q:'Listen — which word?',say:'হাত',o:['হাত','রাত','বাস','মন'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['বাবা','father'],['দাদা','elder brother'],['রাত','night'],['হাত','hand']]},
{t:'mc',q:'দাদা and দিদি literally mean elder brother/sister but Bengalis use them for…',o:['almost anyone, warmly','family only','children only','officials only'],a:0}]},
{id:'bn_c3_5',title:'Checkpoint',step:'checkpoint',meta:'Everyday letters mastered?',vocab:[],ex:[
{t:'mc',q:'What does this letter say?',d:'স',o:['so','ho','lo','ro'],a:0},
{t:'li',q:'Listen — which word?',say:'দাদা',o:['দাদা','দিদি','বাবা','তারা'],a:0},
{t:'mc',q:'Read it:',d:'বাবা',o:['baba','dada','mama','baisa'],a:0},
{t:'mc',q:'Which letter says ho?',o:['হ','স','ল','দ'],a:0},
{t:'li',q:'Listen — which word?',say:'রাত',o:['রাত','হাত','বাস','দিদি'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['দাদা','elder brother'],['দিদি','elder sister'],['বাস','bus'],['রাত','night'],['হাত','hand']]},
{t:'mc',q:'ত and দ are soft sounds — the tongue touches…',o:['the teeth','the lips','nothing','the roof, curled back'],a:0}]},

{id:'bn_c4',title:'The two T families',step:'learn',meta:'Soft ত দ vs hard ট ড',vocab:[['ট','to (hard)','consonant: hard t'],['ঠ','tho (hard)','consonant: hard th'],['ড','do (hard)','consonant: hard d'],['ঢ','dho (hard)','consonant: hard dh'],['ড়','ro (flap)','consonant: the quick flap r']],ex:[
{t:'note',tag:'Soft vs hard',q:'ত vs ট',body:'<p>Bengali has TWO t-families. The <b>soft</b> set <span class="deva">ত দ</span>: tongue on the teeth, like Spanish. The <b>hard</b> set <span class="deva">ট ড</span>: tongue curled back — and here is the good news: the hard ones are basically the <b>English t and d</b> you already say!</p>',tip:'In word romanizations we write both as plain t/d — your ears learn the split.'},
{t:'mc',q:'What does this letter say?',d:'ট',o:['to (hard)','to (soft)','po','ro'],a:0},
{t:'mc',q:'And this one?',d:'ড',o:['do (hard)','do (soft)','bo','go'],a:0},
{t:'note',tag:'Money & the flap',q:'টাকা · বাড়ি',body:'<p><span class="deva">টাকা</span> <b>taka</b> = money (hard t — hear it snap!). <span class="deva">ঠিক</span> <b>thik</b> = right, correct. And <span class="deva">ড়</span> is a quick <b>flap r</b>: <span class="deva">বাড়ি</span> <b>bari</b> = home — one of the warmest words in Bengali.</p>',eg:[['টাকা','taka','money'],['ঠিক','thik','right / correct'],['বাড়ি','bari','home']]},
{t:'mc',q:'Read it:',d:'টাকা',o:['taka','kata','tuku','taki'],a:0},
{t:'mc',q:'Read it:',d:'বাড়ি',o:['bari','badi','biri','rabi'],a:0},
{t:'li',q:'Listen — which word?',say:'টাকা',o:['টাকা','ঠিক','বাড়ি','দিন'],a:0}]},
{id:'bn_c4_2',title:'Hear the hard set',step:'recognize',meta:'Spot ট ঠ ড ঢ ড়',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ট',o:['ট','ত','ড','প'],a:0},
{t:'li',q:'Listen — which word?',say:'ঠিক',o:['ঠিক','টাকা','দিন','বাড়ি'],a:0},
{t:'mc',q:'Which letter is the quick flap r?',o:['ড়','র','ড','ল'],a:0},
{t:'mc',q:'Which letter says hard tho?',o:['ঠ','থ','ট','ত'],a:0},
{t:'li',q:'Listen — which word?',say:'বাড়ি',o:['বাড়ি','টাকা','ঠিক','রাত'],a:0},
{t:'mc',q:'ঠিক আছে — the everyday "OK!" — starts with…',o:['hard th (ঠ)','soft th (থ)','k (ক)','s (স)'],a:0},
{t:'li',q:'Listen — which letter?',say:'ড',o:['ড','দ','ট','ব'],a:0}]},
{id:'bn_c4_3',title:'Build the set',step:'build',meta:'টাকা · ঠিক · দিন · বাড়ি',vocab:[['টাকা','taka','money'],['ঠিক','thik','right / correct'],['দিন','din','day'],['বাড়ি','bari','home / house']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ট','to (hard)'],['ত','to (soft)'],['ড','do (hard)'],['দ','do (soft)'],['ড়','ro (flap)']]},
{t:'mc',q:'Read it:',d:'ঠিক',o:['thik','tik','dhik','khit'],a:0},
{t:'mc',q:'Read it:',d:'দিন',o:['din','nid','dan','tin'],a:0},
{t:'li',q:'Listen — which word?',say:'দিন',o:['দিন','ঠিক','টাকা','নুন'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['টাকা','money'],['ঠিক','right'],['দিন','day'],['বাড়ি','home']]},
{t:'mc',q:'টাকা is also the name of…',o:['the currency','a fruit','a bus','a month'],a:0}]},
{id:'bn_c4_4',title:'Mix it',step:'mix',meta:'Both T families in play',vocab:[],ex:[
{t:'mc',q:'What does this letter say?',d:'ঢ',o:['dho (hard)','dho (soft)','to (hard)','ro'],a:0},
{t:'li',q:'Listen — which word?',say:'ঠিক',o:['ঠিক','দিন','টাকা','হাত'],a:0},
{t:'mc',q:'The English t/d sound most like Bengali…',o:['ট and ড (hard)','ত and দ (soft)','প and ব','র and ল'],a:0},
{t:'mc',q:'Read it:',d:'বাড়ি',o:['bari','bori','badi','dari'],a:0},
{t:'li',q:'Listen — which letter?',say:'ড়',o:['ড়','র','ড','ল'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['টাকা','money'],['বাড়ি','home'],['দিন','day'],['রাত','night']]},
{t:'mc',q:'দিন and রাত make the pair…',o:['day and night','right and wrong','home and away','soft and hard'],a:0}]},
{id:'bn_c4_5',title:'Checkpoint',step:'checkpoint',meta:'T families mastered?',vocab:[],ex:[
{t:'mc',q:'Which set is HARD (tongue curled back)?',o:['ট ঠ ড ঢ','ত থ দ ধ','প ফ ব ভ','ক খ গ ঘ'],a:0},
{t:'li',q:'Listen — which word?',say:'টাকা',o:['টাকা','ঠিক','বাড়ি','দিন'],a:0},
{t:'mc',q:'Read it:',d:'ঠিক',o:['thik','tak','dhik','thak'],a:0},
{t:'mc',q:'ড় in বাড়ি sounds like…',o:['a quick flap r','a long l','a hard k','silence'],a:0},
{t:'li',q:'Listen — which word?',say:'বাড়ি',o:['বাড়ি','টাকা','রাত','দিদি'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['টাকা','money'],['ঠিক','right'],['বাড়ি','home'],['দিন','day']]},
{t:'mc',q:'In our word romanizations, soft ত and hard ট are both written…',o:['t — the audio keeps the split','tt','th','different letters'],a:0}]},

{id:'bn_c5',title:'The puff of air',step:'learn',meta:'খ ঘ ছ ঝ ফ ভ — aspirates',vocab:[['খ','kho','consonant: kh'],['ঘ','gho','consonant: gh'],['ছ','chho','consonant: chh'],['ঝ','jho','consonant: jh'],['ফ','pho','consonant: ph'],['ভ','bho','consonant: bh']],ex:[
{t:'note',tag:'Add a puff',q:'ক → খ, প → ফ',body:'<p>Many Bengali consonants come in pairs: plain, and with a <b>puff of air</b>. <span class="deva">ক</span> ko → <span class="deva">খ</span> kho. <span class="deva">প</span> po → <span class="deva">ফ</span> pho. <span class="deva">ব</span> bo → <span class="deva">ভ</span> bho. Hold your palm to your mouth — you should feel the puff!</p>',eg:[['খ','kho','k + puff'],['ফ','pho','p + puff'],['ভ','bho','b + puff']]},
{t:'mc',q:'What does this letter say?',d:'খ',o:['kho','ko','gho','chho'],a:0},
{t:'mc',q:'And this one?',d:'ভ',o:['bho','bo','pho','dho'],a:0},
{t:'note',tag:'Fish & rice',q:'মাছ · ভাত',body:'<p>Now you can read Bengal’s heart: <span class="deva">মাছ</span> <b>machh</b> = fish and <span class="deva">ভাত</span> <b>bhat</b> = rice. The saying goes <b>machhe-bhate Bangali</b> — "fish-and-rice makes a Bengali"! Add <span class="deva">দুধ</span> <b>dudh</b> milk and <span class="deva">ফল</span> <b>phol</b> fruit and you have a market list.</p>',eg:[['মাছ','machh','fish'],['ভাত','bhat','rice'],['দুধ','dudh','milk'],['ফল','phol','fruit']]},
{t:'mc',q:'Read it:',d:'ভাত',o:['bhat','bat','hat','bhet'],a:0},
{t:'mc',q:'Read it:',d:'মাছ',o:['machh','mach','majh','muchh'],a:0},
{t:'li',q:'Listen — which word?',say:'ভাত',o:['ভাত','মাছ','দুধ','ফল'],a:0}]},
{id:'bn_c5_2',title:'Hear the puff',step:'recognize',meta:'Spot খ ঘ ছ ঝ ফ ভ',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ফ',o:['ফ','প','ভ','খ'],a:0},
{t:'li',q:'Listen — which word?',say:'দুধ',o:['দুধ','মাছ','ভাত','ফল'],a:0},
{t:'mc',q:'Which letter says chho?',o:['ছ','চ','ঝ','স'],a:0},
{t:'mc',q:'Which letter says gho?',o:['ঘ','গ','খ','ঝ'],a:0},
{t:'li',q:'Listen — which word?',say:'ফল',o:['ফল','ভাত','দুধ','মাছ'],a:0},
{t:'mc',q:'দুধ means…',d:'দুধ',o:['milk','fish','rice','fruit'],a:0},
{t:'li',q:'Listen — which letter?',say:'ঝ',o:['ঝ','জ','ছ','ঘ'],a:0}]},
{id:'bn_c5_3',title:'Build the set',step:'build',meta:'ভাত · মাছ · দুধ · ফল · ভালো',vocab:[['ভাত','bhat','rice (cooked)'],['মাছ','machh','fish'],['দুধ','dudh','milk'],['ফল','phol','fruit'],['ভালো','bhalo','good']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['খ','kho'],['ঘ','gho'],['ছ','chho'],['ফ','pho'],['ভ','bho']]},
{t:'mc',q:'Read it:',d:'ফল',o:['phol','pol','phal','bhol'],a:0},
{t:'mc',q:'Read it:',d:'ভালো',o:['bhalo','balo','bhelo','halo'],a:0},
{t:'li',q:'Listen — which word?',say:'ভালো',o:['ভালো','ভাত','ফল','মাছ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ভাত','rice'],['মাছ','fish'],['দুধ','milk'],['ফল','fruit']]},
{t:'mc',q:'ভালো (good) is about to star in the reply…',o:['bhalo achhi — I am fine','thik achhe','na','ke'],a:0}]},
{id:'bn_c5_4',title:'Mix it',step:'mix',meta:'Aspirates at the market',vocab:[],ex:[
{t:'mc',q:'What does this letter say?',d:'ছ',o:['chho','cho','jho','sho'],a:0},
{t:'li',q:'Listen — which word?',say:'মাছ',o:['মাছ','ভাত','ফল','দুধ'],a:0},
{t:'mc',q:'Which letter says pho?',o:['ফ','প','ভ','ব'],a:0},
{t:'mc',q:'Read it:',d:'দুধ',o:['dudh','dud','dhud','dubh'],a:0},
{t:'li',q:'Listen — which letter?',say:'ভ',o:['ভ','ব','ফ','ঘ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ভালো','good'],['ভাত','rice'],['দুধ','milk'],['মাছ','fish']]},
{t:'mc',q:'"machhe-bhate Bangali" celebrates…',o:['fish and rice','tea and milk','money and home','day and night'],a:0}]},
{id:'bn_c5_5',title:'Checkpoint',step:'checkpoint',meta:'Aspirates mastered?',vocab:[],ex:[
{t:'mc',q:'The difference between ক and খ is…',o:['a puff of air','the vowel','the matra','nothing'],a:0},
{t:'li',q:'Listen — which word?',say:'ফল',o:['ফল','ভাত','মাছ','দুধ'],a:0},
{t:'mc',q:'Read it:',d:'ভাত',o:['bhat','pat','bhot','hat'],a:0},
{t:'mc',q:'Read it:',d:'মাছ',o:['machh','math','mash','majh'],a:0},
{t:'li',q:'Listen — which word?',say:'দুধ',o:['দুধ','ফল','ভালো','নুন'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ভাত','rice'],['মাছ','fish'],['দুধ','milk'],['ফল','fruit'],['ভালো','good']]},
{t:'mc',q:'ভালো means…',o:['good','bad','big','hot'],a:0}]},

{id:'bn_c6',title:'The sh family',step:'learn',meta:'শ ষ স + চ জ',vocab:[['শ','sho','consonant: sh'],['ষ','sho (murdhonno)','consonant: sh (2nd)'],['স','so / sho','consonant: s / sh (3rd)'],['চ','cho','consonant: ch'],['জ','jo','consonant: j']],ex:[
{t:'note',tag:'Three letters, one sound',q:'শ ষ স',body:'<p>Bengali keeps THREE letters — <span class="deva">শ ষ স</span> — that all mostly say <b>sh</b> today. Spelling remembers history; your mouth only needs one sound. (<span class="deva">স</span> does slip to a plain <b>s</b> in some words, like <span class="deva">বাস</span> bas.)</p>',tip:'Reading is easy — they all say sh. Writing correctly comes with time.'},
{t:'mc',q:'শ ষ স mostly all say…',o:['sh','three different sounds','s only','h'],a:0},
{t:'mc',q:'What does this letter say?',d:'চ',o:['cho','sho','jo','ko'],a:0},
{t:'note',tag:'Tea & water',q:'চা · জল',body:'<p><span class="deva">চা</span> <b>cha</b> = tea — Kolkata runs on it, served in little clay cups. <span class="deva">জল</span> <b>jol</b> = water — and this word is a badge: West Bengal says <b>jol</b>, Bangladesh says <span class="deva">পানি</span> <b>pani</b>. In Sonagachi’s city you will hear <b>jol</b>.</p>',eg:[['চা','cha','tea'],['জল','jol','water'],['দেশ','desh','country'],['মানুষ','manush','person']]},
{t:'mc',q:'Read it:',d:'চা',o:['cha','ja','sha','ch'],a:0},
{t:'mc',q:'Read it:',d:'জল',o:['jol','jal','lij','jhol'],a:0},
{t:'li',q:'Listen — which word?',say:'চা',o:['চা','জল','মাছ','দেশ'],a:0}]},
{id:'bn_c6_2',title:'Hear the family',step:'recognize',meta:'Spot শ ষ স চ জ',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'শ',o:['শ','চ','জ','হ'],a:0},
{t:'li',q:'Listen — which word?',say:'জল',o:['জল','চা','ফল','দেশ'],a:0},
{t:'mc',q:'Which letter says jo?',o:['জ','চ','শ','ঝ'],a:0},
{t:'mc',q:'How many Bengali letters say sh?',o:['three (শ ষ স)','one','two','none'],a:0},
{t:'li',q:'Listen — which word?',say:'দেশ',o:['দেশ','মানুষ','জল','বাস'],a:0},
{t:'mc',q:'দেশ means…',d:'দেশ',o:['country / homeland','city','tea','river'],a:0},
{t:'li',q:'Listen — which letter?',say:'জ',o:['জ','চ','শ','য'],a:0}]},
{id:'bn_c6_3',title:'Build the set',step:'build',meta:'চা · জল · দেশ · মানুষ · শাড়ি',vocab:[['চা','cha','tea'],['জল','jol','water (the West Bengal word)'],['দেশ','desh','country / homeland'],['মানুষ','manush','person / human'],['শাড়ি','shari','sari']],ex:[
{t:'match',q:'Match letter and sound',pairs:[['শ','sho'],['স','so / sho'],['চ','cho'],['জ','jo']]},
{t:'mc',q:'Read it:',d:'মানুষ',o:['manush','manus','namush','manch'],a:0},
{t:'mc',q:'Read it:',d:'শাড়ি',o:['shari','sari','shar','shori'],a:0},
{t:'li',q:'Listen — which word?',say:'মানুষ',o:['মানুষ','দেশ','শাড়ি','জল'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['চা','tea'],['জল','water'],['দেশ','country'],['মানুষ','person']]},
{t:'mc',q:'West Bengal says জল for water — Bangladesh mostly says…',o:['পানি (pani)','জল too','দুধ','চা'],a:0}]},
{id:'bn_c6_4',title:'Mix it',step:'mix',meta:'sh, ch & j in play',vocab:[],ex:[
{t:'mc',q:'What does this letter say?',d:'ষ',o:['sho','kho','jo','cho'],a:0},
{t:'li',q:'Listen — which word?',say:'শাড়ি',o:['শাড়ি','বাড়ি','চা','দেশ'],a:0},
{t:'mc',q:'Which word means tea?',o:['চা','জল','দুধ','ফল'],a:0},
{t:'mc',q:'Read it:',d:'দেশ',o:['desh','dash','seda','jesh'],a:0},
{t:'li',q:'Listen — which word?',say:'চা',o:['চা','জল','মা','ছ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['শাড়ি','sari'],['মানুষ','person'],['জল','water'],['চা','tea']]},
{t:'mc',q:'Kolkata tea often comes in…',o:['little clay cups','silver pots','tall glasses only','coconuts'],a:0}]},
{id:'bn_c6_5',title:'Checkpoint',step:'checkpoint',meta:'The sh family mastered?',vocab:[],ex:[
{t:'mc',q:'Which three letters share the sh sound?',o:['শ ষ স','চ ছ জ','ত ট থ','ক খ গ'],a:0},
{t:'li',q:'Listen — which word?',say:'দেশ',o:['দেশ','জল','চা','মানুষ'],a:0},
{t:'mc',q:'Read it:',d:'জল',o:['jol','jal','jul','lo'],a:0},
{t:'mc',q:'Read it:',d:'চা',o:['cha','ja','sa','ta'],a:0},
{t:'li',q:'Listen — which word?',say:'জল',o:['জল','ফল','দেশ','চা'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['চা','tea'],['জল','water'],['দেশ','country'],['মানুষ','person'],['শাড়ি','sari']]},
{t:'mc',q:'The West Bengal water word is…',o:['জল (jol)','পানি (pani)','দুধ (dudh)','চা (cha)'],a:0}]},

{id:'bn_c7',title:'Signs & real words',step:'learn',meta:'ং ঁ + reading বাংলা',vocab:[['ং','ng (onushshar)','the ng sign'],['ঁ','nasal (chondrobindu)','the moon-dot — nasalizes'],['বাংলা','bangla','Bengali / Bangla'],['কলকাতা','kolkata','Kolkata'],['চাঁদ','chand','moon']],ex:[
{t:'note',tag:'Two little signs',q:'ং and ঁ',body:'<p><span class="deva">ং</span> adds an <b>ng</b>: <span class="deva">বাংলা</span> <b>bangla</b> — the name of the language you are learning! <span class="deva">ঁ</span> — the <b>chondrobindu</b>, "moon-dot" — sends the vowel through your nose: <span class="deva">চাঁদ</span> <b>chand</b> = moon. A moon sign on the moon word!</p>',eg:[['বাংলা','bangla','Bangla'],['চাঁদ','chand','moon']]},
{t:'mc',q:'Read it:',d:'বাংলা',o:['bangla','bagla','banla','balga'],a:0},
{t:'mc',q:'The moon-dot ঁ makes a vowel…',o:['nasal','longer','silent','louder'],a:0},
{t:'note',tag:'Stacked letters',q:'যুক্তাক্ষর',body:'<p>Sometimes two consonants stack into one shape — a <b>conjunct</b>. <span class="deva">হ্যাঁ</span> <b>hyan</b> = yes is one you will use every day: recognize it as a sight word for now. Conjuncts unlock gradually — no need to master them today.</p><p>And now, read this: <span class="deva">কলকাতা</span> <b>kolkata</b>. You just read the city’s name!</p>',eg:[['হ্যাঁ','hyan','yes'],['কলকাতা','kolkata','Kolkata']]},
{t:'mc',q:'Read it:',d:'কলকাতা',o:['kolkata','kalkota','kolkotu','klokata'],a:0},
{t:'mc',q:'হ্যাঁ means…',d:'হ্যাঁ',o:['yes','no','moon','maybe'],a:0},
{t:'li',q:'Listen — which word?',say:'বাংলা',o:['বাংলা','কলকাতা','চাঁদ','হ্যাঁ'],a:0}]},
{id:'bn_c7_2',title:'Hear real words',step:'recognize',meta:'Spot the words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'কলকাতা',o:['কলকাতা','বাংলা','চাঁদ','টাকা'],a:0},
{t:'li',q:'Listen — which word?',say:'চাঁদ',o:['চাঁদ','চা','দিন','হ্যাঁ'],a:0},
{t:'mc',q:'Which word is the language you are learning?',o:['বাংলা','কলকাতা','মানুষ','দেশ'],a:0},
{t:'mc',q:'Which sign is in বাংলা?',o:['ং (ng)','ঁ (nasal)','ঃ','ৎ'],a:0},
{t:'li',q:'Listen — which word?',say:'হ্যাঁ',o:['হ্যাঁ','না','চাঁদ','মা'],a:0},
{t:'mc',q:'চাঁদ means…',o:['moon','sun','star','night'],a:0},
{t:'li',q:'Listen — which word?',say:'বাংলা',o:['বাংলা','বাড়ি','ভালো','বাবা'],a:0}]},
{id:'bn_c7_3',title:'Read for real',step:'build',meta:'Words you can sound out',vocab:[['হ্যাঁ','hyan','yes'],['না','na','no']],ex:[
{t:'mc',q:'Read it:',d:'চাঁদ',o:['chand','chad','chan','chhad'],a:0},
{t:'mc',q:'Read it:',d:'হ্যাঁ',o:['hyan','han','hya','ha'],a:0},
{t:'li',q:'Listen — which word?',say:'না',o:['না','হ্যাঁ','মা','চা'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['বাংলা','Bangla'],['কলকাতা','Kolkata'],['চাঁদ','moon'],['হ্যাঁ','yes']]},
{t:'mc',q:'না means…',d:'না',o:['no','yes','moon','name'],a:0},
{t:'mc',q:'Stacked double-consonant shapes are called…',o:['conjuncts','matras','vowel signs','numbers'],a:0}]},
{id:'bn_c7_4',title:'Mix it',step:'mix',meta:'The whole script in play',vocab:[],ex:[
{t:'mc',q:'Read it:',d:'বাংলা',o:['bangla','bangla desh','bangli','banga'],a:0},
{t:'li',q:'Listen — which word?',say:'চাঁদ',o:['চাঁদ','চা','জল','দিন'],a:0},
{t:'mc',q:'Read it:',d:'কলকাতা',o:['kolkata','kalikata','kolikata','kotakala'],a:0},
{t:'mc',q:'Which word means yes?',o:['হ্যাঁ','না','ঠিক','কে'],a:0},
{t:'li',q:'Listen — which word?',say:'না',o:['না','মা','চা','হ্যাঁ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['হ্যাঁ','yes'],['না','no'],['চাঁদ','moon'],['বাংলা','Bangla']]},
{t:'mc',q:'ং in বাংলা adds which sound?',o:['ng','n','m','g'],a:0}]},
{id:'bn_c7_5',title:'Zone 1 checkpoint',step:'checkpoint',meta:'You can read Bengali!',vocab:[],ex:[
{t:'mc',q:'Read it:',d:'কলকাতা',o:['kolkata','kolkuta','kalkata','katakola'],a:0},
{t:'li',q:'Listen — which word?',say:'বাংলা',o:['বাংলা','কলকাতা','চাঁদ','মানুষ'],a:0},
{t:'mc',q:'Read it:',d:'চাঁদ',o:['chand','chad','chhand','chanda'],a:0},
{t:'mc',q:'Every bare consonant hides which vowel?',o:['o','a','e','i'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['বাংলা','Bangla'],['কলকাতা','Kolkata'],['হ্যাঁ','yes'],['না','no'],['চাঁদ','moon']]},
{t:'mc',q:'The ে sign taught you to SEE first but SAY…',o:['second','first','never','twice'],a:0},
{t:'mc',q:'Ready for words? Next stop:',o:['কেমন আছেন? — how are you!','more letters','numbers only','nothing'],a:0}]},
];
const BN_Z2=[
/* ===================== ZONE 2 · FOUNDATIONS ===================== */
{id:'bn_greet',title:'How are you?',step:'learn',meta:'কেমন আছেন?',vocab:[['নমস্কার','nomoshkar','hello (the common WB greeting)'],['কেমন আছেন?','kemon achhen','how are you? (polite)'],['ভালো আছি','bhalo achhi','I am fine'],['আপনি কেমন আছেন?','apni kemon achhen','and how are YOU?'],['আসি','ashi','goodbye — see you (lit. I come)'],['টাটা','tata','bye (casual)']],ex:[
{t:'note',tag:'The real hello',q:'কেমন আছেন?',body:'<p>The greeting that opens every Bengali conversation: <span class="deva">কেমন আছেন?</span> <b>kemon achhen?</b> = "how are you?" The reply: <span class="deva">ভালো আছি</span> <b>bhalo achhi</b> = "I am fine" — then bounce it back: <span class="deva">আপনি কেমন আছেন?</span></p>',tip:'নমস্কার is the common opener you will hear in Kolkata; Muslim neighbours greet with সালাম. কেমন আছেন works warmly with everyone.'},
{t:'mc',q:'"How are you?" =',o:['কেমন আছেন?','ভালো আছি','আসি','টাটা'],a:0},
{t:'mc',q:'The reply "I am fine" =',o:['ভালো আছি','কেমন আছেন?','নমস্কার','না'],a:0},
{t:'note',tag:'The lovely goodbye',q:'আসি',body:'<p>Bengalis rarely say a heavy "farewell". Leaving, you say <span class="deva">আসি</span> <b>ashi</b> — literally "I come"! — meaning "I will come again". Casual friends just say <span class="deva">টাটা</span> <b>tata</b>.</p>',eg:[['আসি','ashi','see you (I come again)'],['টাটা','tata','bye'],['নমস্কার','nomoshkar','hello']]},
{t:'mc',q:'আসি literally means…',o:['I come (again)','I go forever','good night','thank you'],a:0},
{t:'mc',q:'A casual "bye" =',o:['টাটা','নমস্কার','ভালো আছি','কেমন'],a:0},
{t:'li',q:'Listen — which phrase?',say:'কেমন আছেন?',o:['কেমন আছেন?','ভালো আছি','নমস্কার','আসি'],a:0}]},
{id:'bn_greet_2',title:'Hear greetings',step:'recognize',meta:'Spot the phrases',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ভালো আছি',o:['ভালো আছি','কেমন আছেন?','আসি','টাটা'],a:0},
{t:'li',q:'Listen — which word?',say:'নমস্কার',o:['নমস্কার','আসি','টাটা','ভালো'],a:0},
{t:'mc',q:'Leaving a friend’s home, you say…',o:['আসি','নমস্কার','কেমন আছেন?','হ্যাঁ'],a:0},
{t:'mc',q:'কেমন in কেমন আছেন? asks…',o:['how','who','what','where'],a:0},
{t:'li',q:'Listen — which phrase?',say:'আপনি কেমন আছেন?',o:['আপনি কেমন আছেন?','কেমন আছেন?','ভালো আছি','নমস্কার'],a:0},
{t:'mc',q:'ভালো আছি literally says…',o:['good I-am','how are you','I go','hello'],a:0},
{t:'li',q:'Listen — which word?',say:'আসি',o:['আসি','আছি','টাটা','আজ'],a:0}]},
{id:'bn_greet_3',title:'Build a greeting',step:'build',meta:'Hello & the reply loop',vocab:[],ex:[
{t:'wb',q:'Build: "how are you?" (polite)',a:['কেমন','আছেন'],pool:['কেমন','আছেন','ভালো','আছি']},
{t:'match',q:'Match phrase and meaning',pairs:[['কেমন আছেন?','how are you?'],['ভালো আছি','I am fine'],['আসি','goodbye'],['নমস্কার','hello']]},
{t:'fill',q:'Complete the reply: "I am fine"',s:'___ আছি',o:['ভালো','কেমন','আসি','না'],a:0},
{t:'mc',q:'You are leaving. You say…',o:['আসি','নমস্কার','কেমন আছেন?','হ্যাঁ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ভালো আছি',o:['ভালো আছি','আপনি কেমন আছেন?','টাটা','আসি'],a:0},
{t:'mc',q:'After ভালো আছি, warm Bengalis add…',o:['আপনি কেমন আছেন?','টাটা','না','আসি'],a:0}]},
{id:'bn_greet_4',title:'Mix it',step:'mix',meta:'Greetings in play',vocab:[],ex:[
{t:'mc',q:'Greet the tea-stall didi:',o:['কেমন আছেন?','আসি','টাটা','না'],a:0},
{t:'li',q:'Listen — which phrase?',say:'নমস্কার',o:['নমস্কার','আসি','ভালো আছি','টাটা'],a:0},
{t:'wb',q:'Build the reply: "I am fine — and how are YOU?"',a:['ভালো','আছি','আপনি','কেমন','আছেন'],pool:['ভালো','আছি','আপনি','কেমন','আছেন','টাটা']},
{t:'fill',q:'Complete: the light goodbye',s:'___ !',o:['আসি','আছি','কেমন','ভালো'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['টাটা','bye (casual)'],['আপনি কেমন আছেন?','and how are you?'],['ভালো আছি','I am fine'],['নমস্কার','hello']]},
{t:'li',q:'Listen — which phrase?',say:'কেমন আছেন?',o:['কেমন আছেন?','আপনি কেমন আছেন?','ভালো আছি','নমস্কার'],a:0},
{t:'mc',q:'ভালো turned up in Zone 1 meaning…',o:['good','water','rice','moon'],a:0}]},
{id:'bn_greet_5',title:'Checkpoint',step:'checkpoint',meta:'Greetings mastered?',vocab:[],ex:[
{t:'mc',q:'"How are you?" =',o:['কেমন আছেন?','ভালো আছি','আসি','নমস্কার'],a:0},
{t:'li',q:'Listen — which phrase?',say:'আপনি কেমন আছেন?',o:['আপনি কেমন আছেন?','কেমন আছেন?','ভালো আছি','আসি'],a:0},
{t:'mc',q:'"I am fine" =',o:['ভালো আছি','কেমন আছেন?','টাটা','হ্যাঁ'],a:0},
{t:'wb',q:'Build: "how are you?"',a:['কেমন','আছেন'],pool:['কেমন','আছেন','আসি','ভালো']},
{t:'match',q:'Match phrase and meaning',pairs:[['নমস্কার','hello'],['কেমন আছেন?','how are you?'],['ভালো আছি','I am fine'],['আসি','goodbye'],['টাটা','bye']]},
{t:'mc',q:'The goodbye that promises return is…',o:['আসি','টাটা','নমস্কার','ভালো'],a:0},
{t:'li',q:'Listen — which word?',say:'টাটা',o:['টাটা','আসি','মা','চা'],a:0}]},

{id:'bn_pron',title:'I, you, we',step:'learn',meta:'আমি · তুমি · আপনি',vocab:[['আমি','ami','I / me'],['তুমি','tumi','you (friendly)'],['আপনি','apni','you (polite)'],['সে','she','he / she'],['আমরা','amra','we'],['তারা','tara','they']],ex:[
{t:'note',tag:'The respect ladder',q:'তুমি vs আপনি',body:'<p><span class="deva">আমি</span> <b>ami</b> = I. For "you", Bengali climbs a ladder: <span class="deva">তুমি</span> <b>tumi</b> with friends and equals, <span class="deva">আপনি</span> <b>apni</b> with elders, strangers, anyone owed respect. (A third rung, <span class="deva">তুই</span> <b>tui</b>, is only for small children and the very closest friends.)</p>',tip:'When in doubt, use আপনি — that is why the greeting is Apni kemon achhen.'},
{t:'mc',q:'Which word means "I"?',o:['আমি','তুমি','আপনি','সে'],a:0},
{t:'mc',q:'The polite "you" is…',o:['আপনি','তুমি','তুই','তারা'],a:0},
{t:'note',tag:'The freebie',q:'সে — he AND she',body:'<p>Good news: <span class="deva">সে</span> <b>she</b> means he AND she — Bengali pronouns have <b>no gender at all</b>. <span class="deva">আমরা</span> <b>amra</b> = we, <span class="deva">তারা</span> <b>tara</b> = they.</p>',eg:[['সে','she','he / she'],['আমরা','amra','we'],['তারা','tara','they']]},
{t:'mc',q:'সে covers…',d:'সে',o:['he AND she','only he','only she','we'],a:0},
{t:'mc',q:'Which word means "we"?',o:['আমরা','তারা','আপনি','সে'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'আমি',o:['আমি','তুমি','আপনি','সে'],a:0}]},
{id:'bn_pron_2',title:'Hear pronouns',step:'recognize',meta:'Spot who is who',vocab:[],ex:[
{t:'li',q:'Listen — which pronoun?',say:'তুমি',o:['তুমি','আমি','আপনি','তারা'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'আমরা',o:['আমরা','তারা','আমি','সে'],a:0},
{t:'mc',q:'Which means "they"?',o:['তারা','আমরা','সে','তুমি'],a:0},
{t:'mc',q:'Which means "you (friendly)"?',o:['তুমি','আপনি','আমি','সে'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'সে',o:['সে','তারা','আমি','তুমি'],a:0},
{t:'mc',q:'With an elder, use…',o:['আপনি','তুমি','তুই','সে'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'আপনি',o:['আপনি','তুমি','আমরা','তারা'],a:0}]},
{id:'bn_pron_3',title:'Build with pronouns',step:'build',meta:'Match & choose',vocab:[],ex:[
{t:'match',q:'Match pronoun and meaning',pairs:[['আমি','I'],['তুমি','you (friendly)'],['আপনি','you (polite)'],['সে','he/she']]},
{t:'mc',q:'Point to yourself and say…',o:['আমি','তুমি','আপনি','সে'],a:0},
{t:'mc',q:'Talking to a close friend, use…',o:['তুমি','আপনি','তারা','আমরা'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'তারা',o:['তারা','আমরা','সে','তুমি'],a:0},
{t:'match',q:'Match pronoun and meaning',pairs:[['আমরা','we'],['তারা','they'],['সে','he/she'],['আমি','I']]},
{t:'mc',q:'Bengali marks he vs she…',o:['not at all — সে covers both','with different words','with endings','with tone'],a:0}]},
{id:'bn_pron_4',title:'Mix it',step:'mix',meta:'Pronouns in the flow',vocab:[],ex:[
{t:'mc',q:'Which means "he/she"?',o:['সে','তারা','আমি','তুমি'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'আমি',o:['আমি','আমরা','তুমি','আপনি'],a:0},
{t:'fill',q:'Complete: "___ am fine" (I)',s:'___ ভালো আছি',o:['আমি','তুমি','সে','তারা'],a:0},
{t:'mc',q:'আমরা means…',d:'আমরা',o:['we','they','you all','he'],a:0},
{t:'match',q:'Match pronoun and meaning',pairs:[['আমি','I'],['তুমি','you'],['তারা','they'],['সে','he/she']]},
{t:'li',q:'Listen — which pronoun?',say:'আপনি',o:['আপনি','আমি','তুমি','সে'],a:0},
{t:'mc',q:'তুমি vs আপনি is about…',o:['respect','gender','number only','spelling'],a:0}]},
{id:'bn_pron_5',title:'Checkpoint',step:'checkpoint',meta:'Pronouns mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "I"?',o:['আমি','তুমি','আপনি','সে'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'আমরা',o:['আমরা','তারা','আমি','আপনি'],a:0},
{t:'mc',q:'Which means "you (polite)"?',o:['আপনি','তুমি','সে','তারা'],a:0},
{t:'match',q:'Match pronoun and meaning',pairs:[['আমি','I'],['তুমি','you (friendly)'],['আপনি','you (polite)'],['সে','he/she'],['আমরা','we']]},
{t:'fill',q:'Complete: "he/she is fine"',s:'___ ভালো আছে',o:['সে','আমি','আমরা','আপনি'],a:0},
{t:'mc',q:'The rung of the ladder kept for small children is…',o:['তুই','তুমি','আপনি','সে'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'সে',o:['সে','তারা','তুমি','আমি'],a:0}]},

{id:'bn_num1',title:'Numbers 1–10',step:'learn',meta:'এক to দশ',vocab:[['এক','ek','1'],['দুই','dui','2'],['তিন','tin','3'],['চার','char','4'],['পাঁচ','panch','5'],['ছয়','chhoy','6'],['সাত','shat','7'],['আট','at','8'],['নয়','noy','9'],['দশ','dosh','10']],ex:[
{t:'note',tag:'Count to five',q:'১–৫',body:'<p><span class="deva">এক</span> <b>ek</b> 1, <span class="deva">দুই</span> <b>dui</b> 2, <span class="deva">তিন</span> <b>tin</b> 3, <span class="deva">চার</span> <b>char</b> 4, <span class="deva">পাঁচ</span> <b>panch</b> 5 — there is the moon-dot ঁ, humming through your nose!</p>',eg:[['এক','ek','1'],['দুই','dui','2'],['তিন','tin','3'],['চার','char','4'],['পাঁচ','panch','5']]},
{t:'mc',q:'Which is 3?',o:['তিন','দুই','চার','পাঁচ'],a:0},
{t:'mc',q:'Which is 5?',o:['পাঁচ','চার','তিন','দশ'],a:0},
{t:'note',tag:'Six to ten',q:'৬–১০',body:'<p><span class="deva">ছয়</span> <b>chhoy</b> 6, <span class="deva">সাত</span> <b>shat</b> 7, <span class="deva">আট</span> <b>at</b> 8, <span class="deva">নয়</span> <b>noy</b> 9, <span class="deva">দশ</span> <b>dosh</b> 10. Bengali also writes its own digits: <span class="deva">১ ২ ৩</span>…</p>',eg:[['ছয়','chhoy','6'],['সাত','shat','7'],['আট','at','8'],['নয়','noy','9'],['দশ','dosh','10']]},
{t:'mc',q:'Which is 8?',o:['আট','সাত','নয়','ছয়'],a:0},
{t:'li',q:'Listen — which number?',say:'দশ',o:['দশ','পাঁচ','তিন','চার'],a:0},
{t:'mc',q:'Which is 10?',o:['দশ','নয়','পাঁচ','এক'],a:0}]},
{id:'bn_num1_2',title:'Hear numbers',step:'recognize',meta:'Spot 1–10',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'তিন',o:['তিন','দুই','চার','পাঁচ'],a:0},
{t:'li',q:'Listen — which number?',say:'সাত',o:['সাত','ছয়','আট','নয়'],a:0},
{t:'mc',q:'Which is 2?',o:['দুই','তিন','এক','ছয়'],a:0},
{t:'mc',q:'Which is 9?',o:['নয়','আট','সাত','দশ'],a:0},
{t:'li',q:'Listen — which number?',say:'এক',o:['এক','পাঁচ','দশ','তিন'],a:0},
{t:'mc',q:'Which is 6?',o:['ছয়','সাত','পাঁচ','চার'],a:0},
{t:'li',q:'Listen — which number?',say:'পাঁচ',o:['পাঁচ','চার','তিন','দশ'],a:0}]},
{id:'bn_num1_3',title:'Build with numbers',step:'build',meta:'Match & order',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['এক','1'],['তিন','3'],['পাঁচ','5'],['সাত','7']]},
{t:'match',q:'Match number and value',pairs:[['দুই','2'],['চার','4'],['ছয়','6'],['দশ','10']]},
{t:'mc',q:'Which is 4?',o:['চার','পাঁচ','তিন','দশ'],a:0},
{t:'wb',q:'Build in order: 1, 2, 3',a:['এক','দুই','তিন'],pool:['তিন','এক','দুই','পাঁচ']},
{t:'li',q:'Listen — which number?',say:'আট',o:['আট','নয়','ছয়','সাত'],a:0},
{t:'mc',q:'Which is 7?',o:['সাত','ছয়','আট','চার'],a:0}]},
{id:'bn_num1_4',title:'Mix it',step:'mix',meta:'Numbers at speed',vocab:[],ex:[
{t:'mc',q:'Which is 9?',o:['নয়','সাত','আট','দশ'],a:0},
{t:'li',q:'Listen — which number?',say:'চার',o:['চার','পাঁচ','তিন','দশ'],a:0},
{t:'mc',q:'Which is 1?',o:['এক','দুই','পাঁচ','দশ'],a:0},
{t:'wb',q:'Build in order: 8, 9, 10',a:['আট','নয়','দশ'],pool:['দশ','আট','নয়','সাত']},
{t:'li',q:'Listen — which number?',say:'ছয়',o:['ছয়','পাঁচ','সাত','চার'],a:0},
{t:'match',q:'Match number and value',pairs:[['চার','4'],['আট','8'],['নয়','9'],['দশ','10']]},
{t:'mc',q:'Which is 5?',o:['পাঁচ','ছয়','চার','তিন'],a:0}]},
{id:'bn_num1_5',title:'Checkpoint',step:'checkpoint',meta:'1–10 mastered?',vocab:[],ex:[
{t:'mc',q:'Which is 10?',o:['দশ','নয়','এক','পাঁচ'],a:0},
{t:'li',q:'Listen — which number?',say:'নয়',o:['নয়','সাত','ছয়','আট'],a:0},
{t:'mc',q:'Which is 2?',o:['দুই','তিন','চার','এক'],a:0},
{t:'match',q:'Match number and value',pairs:[['এক','1'],['তিন','3'],['পাঁচ','5'],['সাত','7'],['নয়','9']]},
{t:'li',q:'Listen — which number?',say:'তিন',o:['তিন','চার','দুই','পাঁচ'],a:0},
{t:'wb',q:'Build in order: 4, 5, 6',a:['চার','পাঁচ','ছয়'],pool:['পাঁচ','ছয়','চার','সাত']},
{t:'mc',q:'Which is 8?',o:['আট','সাত','নয়','ছয়'],a:0}]},

{id:'bn_court',title:'Yes, no, thanks',step:'learn',meta:'Courtesy words',vocab:[['হ্যাঁ','hyan','yes'],['না','na','no'],['ধন্যবাদ','dhonnobad','thank you'],['মাফ করবেন','maph korben','sorry / excuse me'],['ঠিক আছে','thik achhe','OK / alright'],['আচ্ছা','achchha','I see / OK / well…']],ex:[
{t:'note',tag:'Yes & no',q:'হ্যাঁ · না',body:'<p><span class="deva">হ্যাঁ</span> <b>hyan</b> = yes, <span class="deva">না</span> <b>na</b> = no. And the mighty <span class="deva">আচ্ছা</span> <b>achchha</b> = "I see / OK / well then" — Bengalis sprinkle it through every conversation.</p>',eg:[['হ্যাঁ','hyan','yes'],['না','na','no'],['আচ্ছা','achchha','I see / OK']]},
{t:'mc',q:'"yes" =',o:['হ্যাঁ','না','আচ্ছা','ঠিক আছে'],a:0},
{t:'mc',q:'"no" =',o:['না','হ্যাঁ','আচ্ছা','ধন্যবাদ'],a:0},
{t:'note',tag:'Thanks & sorry',q:'ধন্যবাদ · মাফ করবেন',body:'<p><span class="deva">ধন্যবাদ</span> <b>dhonnobad</b> = thank you — Bengalis use it a little more formally than English; a warm smile carries most everyday thanks. <span class="deva">মাফ করবেন</span> <b>maph korben</b> = sorry / excuse me — your key to squeezing through a Kolkata crowd. <span class="deva">ঠিক আছে</span> <b>thik achhe</b> = "OK, fine!"</p>',eg:[['ধন্যবাদ','dhonnobad','thank you'],['মাফ করবেন','maph korben','excuse me'],['ঠিক আছে','thik achhe','OK']]},
{t:'mc',q:'"thank you" =',o:['ধন্যবাদ','মাফ করবেন','আচ্ছা','টাটা'],a:0},
{t:'mc',q:'To squeeze through a crowd, say…',o:['মাফ করবেন','ধন্যবাদ','হ্যাঁ','আসি'],a:0},
{t:'li',q:'Listen — which word?',say:'হ্যাঁ',o:['হ্যাঁ','না','আচ্ছা','ধন্যবাদ'],a:0}]},
{id:'bn_court_2',title:'Hear courtesy',step:'recognize',meta:'Spot the polite words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'না',o:['না','হ্যাঁ','আচ্ছা','টাটা'],a:0},
{t:'li',q:'Listen — which word?',say:'ধন্যবাদ',o:['ধন্যবাদ','মাফ করবেন','আচ্ছা','নমস্কার'],a:0},
{t:'mc',q:'"OK / alright" =',o:['ঠিক আছে','হ্যাঁ','না','ধন্যবাদ'],a:0},
{t:'mc',q:'The all-purpose "I see / well…" =',o:['আচ্ছা','ঠিক আছে','মাফ করবেন','না'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ঠিক আছে',o:['ঠিক আছে','আচ্ছা','মাফ করবেন','ভালো আছি'],a:0},
{t:'mc',q:'মাফ করবেন means…',o:['sorry / excuse me','thank you','yes','goodbye'],a:0},
{t:'li',q:'Listen — which word?',say:'আচ্ছা',o:['আচ্ছা','আছি','আসি','আট'],a:0}]},
{id:'bn_court_3',title:'Build politely',step:'build',meta:'Courtesy in action',vocab:[],ex:[
{t:'wb',q:'Build: "sorry — it is OK!"',a:['মাফ করবেন','ঠিক আছে'],pool:['মাফ করবেন','ঠিক আছে','হ্যাঁ','আচ্ছা']},
{t:'match',q:'Match word and meaning',pairs:[['হ্যাঁ','yes'],['না','no'],['ধন্যবাদ','thank you'],['আচ্ছা','I see / OK']]},
{t:'fill',q:'Get someone’s attention politely',s:'___ , দাদা!',o:['মাফ করবেন','ধন্যবাদ','হ্যাঁ','না'],a:0},
{t:'mc',q:'Agree cheerfully:',o:['ঠিক আছে','না','মাফ করবেন','কে'],a:0},
{t:'li',q:'Listen — which phrase?',say:'মাফ করবেন',o:['মাফ করবেন','ঠিক আছে','ধন্যবাদ','আচ্ছা'],a:0},
{t:'mc',q:'A didi hands you tea. You say…',o:['ধন্যবাদ','মাফ করবেন','না','আসি'],a:0}]},
{id:'bn_court_4',title:'Mix it',step:'mix',meta:'Politeness in play',vocab:[],ex:[
{t:'mc',q:'"yes" =',o:['হ্যাঁ','না','আচ্ছা','ঠিক'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ঠিক আছে',o:['ঠিক আছে','মাফ করবেন','ধন্যবাদ','হ্যাঁ'],a:0},
{t:'wb',q:'Build: "yes, OK, thank you"',a:['হ্যাঁ','ঠিক আছে','ধন্যবাদ'],pool:['হ্যাঁ','ঠিক আছে','ধন্যবাদ','না']},
{t:'fill',q:'Someone bumps into you and apologizes. You:',s:'___ !',o:['ঠিক আছে','মাফ করবেন','না','কে'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ঠিক আছে','OK'],['মাফ করবেন','excuse me'],['হ্যাঁ','yes'],['না','no']]},
{t:'mc',q:'আচ্ছা is Bengal’s all-purpose…',o:['I-see / OK / well-then','no','sorry','question'],a:0},
{t:'li',q:'Listen — which word?',say:'ধন্যবাদ',o:['ধন্যবাদ','আচ্ছা','নমস্কার','টাটা'],a:0}]},
{id:'bn_court_5',title:'Checkpoint',step:'checkpoint',meta:'Courtesy mastered?',vocab:[],ex:[
{t:'mc',q:'"sorry / excuse me" =',o:['মাফ করবেন','ধন্যবাদ','আচ্ছা','হ্যাঁ'],a:0},
{t:'li',q:'Listen — which word?',say:'হ্যাঁ',o:['হ্যাঁ','না','আচ্ছা','চা'],a:0},
{t:'mc',q:'"no" =',o:['না','হ্যাঁ','ঠিক আছে','মা'],a:0},
{t:'wb',q:'Build: "sorry — it is OK!"',a:['মাফ করবেন','ঠিক আছে'],pool:['মাফ করবেন','ঠিক আছে','ধন্যবাদ','হ্যাঁ']},
{t:'match',q:'Match word and meaning',pairs:[['হ্যাঁ','yes'],['না','no'],['ধন্যবাদ','thank you'],['ঠিক আছে','OK'],['আচ্ছা','I see']]},
{t:'mc',q:'"thank you" =',o:['ধন্যবাদ','মাফ করবেন','আচ্ছা','আসি'],a:0},
{t:'li',q:'Listen — which word?',say:'না',o:['না','মা','চা','হ্যাঁ'],a:0}]},

{id:'bn_intro',title:'What is your name?',step:'learn',meta:'আমার নাম…',vocab:[['নাম','nam','name'],['আমার নাম','amar nam','my name (is)…'],['আপনার নাম কী?','apnar nam ki','what is your name? (polite)'],['আমার','amar','my'],['আপনার','apnar','your (polite)'],['কে','ke','who']],ex:[
{t:'note',tag:'No "is" needed',q:'আমার নাম রানা',body:'<p>Introduce yourself with two words you can already read: <span class="deva">আমার নাম রানা</span> <b>amar nam Rana</b> = "my name Rana" — Bengali needs <b>no "is"</b>! Ask back politely: <span class="deva">আপনার নাম কী?</span> <b>apnar nam ki?</b> = "your name what?"</p>',tip:'কী (what) sits at the end — right where the answer will go.'},
{t:'mc',q:'Which word means "name"?',o:['নাম','কে','কী','আমার'],a:0},
{t:'mc',q:'"My name (is) Rana" =',o:['আমার নাম রানা','আপনার নাম রানা','রানা কে','নাম কী'],a:0},
{t:'note',tag:'My & your',q:'আমার · আপনার',body:'<p><span class="deva">আমার</span> <b>amar</b> = my, <span class="deva">আপনার</span> <b>apnar</b> = your (polite) — hear <span class="deva">আমি</span> and <span class="deva">আপনি</span> hiding inside them! And <span class="deva">কে</span> <b>ke</b> = who: <span class="deva">সে কে?</span> = "who is that?"</p>',eg:[['আমার','amar','my'],['আপনার','apnar','your'],['কে','ke','who']]},
{t:'mc',q:'"my" =',o:['আমার','আপনার','আমি','কে'],a:0},
{t:'mc',q:'Ask a name politely:',o:['আপনার নাম কী?','আমার নাম কী?','সে কে?','কেমন আছেন?'],a:0},
{t:'li',q:'Listen — which phrase?',say:'আমার নাম',o:['আমার নাম','আপনার নাম কী?','কে','নাম'],a:0}]},
{id:'bn_intro_2',title:'Hear introductions',step:'recognize',meta:'Spot the phrases',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'আপনার নাম কী?',o:['আপনার নাম কী?','আমার নাম','কে','কেমন আছেন?'],a:0},
{t:'li',q:'Listen — which word?',say:'কে',o:['কে','কী','নাম','সে'],a:0},
{t:'mc',q:'আমার means…',o:['my','your','his','name'],a:0},
{t:'mc',q:'আপনার means…',o:['your (polite)','my','their','who'],a:0},
{t:'li',q:'Listen — which word?',say:'নাম',o:['নাম','আমার','কে','মন'],a:0},
{t:'mc',q:'কী in আপনার নাম কী? asks…',o:['what','who','how','where'],a:0},
{t:'li',q:'Listen — which phrase?',say:'আমার নাম',o:['আমার নাম','আপনার নাম কী?','আমি','আমরা'],a:0}]},
{id:'bn_intro_3',title:'Build an intro',step:'build',meta:'Say who you are',vocab:[],ex:[
{t:'wb',q:'Build: "my name (is) Rana"',a:['আমার','নাম','রানা'],pool:['আমার','নাম','রানা','আপনার']},
{t:'match',q:'Match phrase and meaning',pairs:[['নাম','name'],['আমার','my'],['আপনার','your (polite)'],['কে','who']]},
{t:'fill',q:'Complete: "what is your name?" (polite)',s:'আপনার নাম ___ ?',o:['কী','কে','না','আছে'],a:0},
{t:'mc',q:'"Who is that?" = সে ___ ?',d:'সে কে?',o:['কে','কী','নাম','আমার'],a:0},
{t:'li',q:'Listen — which phrase?',say:'আপনার নাম কী?',o:['আপনার নাম কী?','আমার নাম','সে কে?','নাম'],a:0},
{t:'mc',q:'Bengali introductions need no…',o:['word for "is"','name','pronoun','sound'],a:0}]},
{id:'bn_intro_4',title:'Mix it',step:'mix',meta:'A tiny conversation',vocab:[],ex:[
{t:'mc',q:'Ask a name politely:',o:['আপনার নাম কী?','আমার নাম মিতা','সে কে?','কেমন আছেন?'],a:0},
{t:'li',q:'Listen — which phrase?',say:'আমার নাম',o:['আমার নাম','আপনার নাম কী?','কে','ভালো আছি'],a:0},
{t:'wb',q:'Build: "my name (is) Mita"',a:['আমার','নাম','মিতা'],pool:['আমার','নাম','মিতা','কী']},
{t:'fill',q:'Complete: "my ___ (is) Rana"',s:'আমার ___ রানা',o:['নাম','কে','কী','আপনার'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['আমার নাম','my name'],['আপনার নাম কী?','what is your name?'],['কে','who'],['কী','what']]},
{t:'mc',q:'কী sits at the end of the question because…',o:['that is where the answer goes','it is silent','it is a greeting','questions start with it'],a:0},
{t:'li',q:'Listen — which word?',say:'কী',o:['কী','কে','নাম','সে'],a:0}]},
{id:'bn_intro_5',title:'Checkpoint',step:'checkpoint',meta:'Introductions mastered?',vocab:[],ex:[
{t:'mc',q:'"My name (is) Rana" =',o:['আমার নাম রানা','আপনার নাম রানা','রানা কে','আমি নাম'],a:0},
{t:'li',q:'Listen — which phrase?',say:'আপনার নাম কী?',o:['আপনার নাম কী?','আমার নাম','কে','কী'],a:0},
{t:'mc',q:'"who" =',o:['কে','কী','নাম','সে'],a:0},
{t:'wb',q:'Build: "my name (is) Rana"',a:['আমার','নাম','রানা'],pool:['আমার','নাম','রানা','কে']},
{t:'match',q:'Match phrase and meaning',pairs:[['নাম','name'],['আমার নাম','my name'],['আপনার নাম কী?','what is your name?'],['কে','who']]},
{t:'mc',q:'আমার and আপনার grow out of…',o:['আমি and আপনি','নাম and কে','চা and জল','hello and bye'],a:0},
{t:'li',q:'Listen — which word?',say:'নাম',o:['নাম','মন','আম','কে'],a:0}]},

{id:'bn_time',title:'Today & tomorrow',step:'learn',meta:'আজ · কাল · এখন',vocab:[['আজ','aj','today'],['কাল','kal','tomorrow / yesterday'],['এখন','ekhon','now'],['দিন','din','day'],['রাত','rat','night'],['সকাল','shokal','morning']],ex:[
{t:'note',tag:'The two-faced word',q:'কাল',body:'<p>Bengali’s famous time trick: <span class="deva">কাল</span> <b>kal</b> means tomorrow AND yesterday — the day next to today, either side! Context decides. To be crystal clear: <span class="deva">গতকাল</span> <b>gotokal</b> = yesterday, <span class="deva">আগামীকাল</span> <b>agamikal</b> = tomorrow.</p>',eg:[['আজ','aj','today'],['কাল','kal','tomorrow / yesterday'],['এখন','ekhon','now']]},
{t:'mc',q:'Which means "today"?',o:['আজ','কাল','এখন','দিন'],a:0},
{t:'mc',q:'কাল can mean…',d:'কাল',o:['tomorrow AND yesterday','only tomorrow','only yesterday','today'],a:0},
{t:'note',tag:'Day, night, morning',q:'দিন · রাত · সকাল',body:'<p>You know <span class="deva">দিন</span> <b>din</b> day and <span class="deva">রাত</span> <b>rat</b> night from Zone 1. Add <span class="deva">সকাল</span> <b>shokal</b> = morning and <span class="deva">এখন</span> <b>ekhon</b> = now. <span class="deva">সকালে চা?</span> — morning tea?</p>',eg:[['দিন','din','day'],['রাত','rat','night'],['সকাল','shokal','morning']]},
{t:'mc',q:'Which means "morning"?',o:['সকাল','রাত','দিন','কাল'],a:0},
{t:'mc',q:'Which means "now"?',o:['এখন','আজ','কাল','সকাল'],a:0},
{t:'li',q:'Listen — which word?',say:'আজ',o:['আজ','কাল','এখন','দিন'],a:0}]},
{id:'bn_time_2',title:'Hear time words',step:'recognize',meta:'Spot the times',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'কাল',o:['কাল','আজ','সকাল','এখন'],a:0},
{t:'li',q:'Listen — which word?',say:'রাত',o:['রাত','দিন','সকাল','কাল'],a:0},
{t:'mc',q:'"yesterday, for sure" =',o:['গতকাল','আগামীকাল','আজ','এখন'],a:0},
{t:'mc',q:'Which means "day"?',o:['দিন','রাত','সকাল','এখন'],a:0},
{t:'li',q:'Listen — which word?',say:'এখন',o:['এখন','আজ','কাল','রাত'],a:0},
{t:'mc',q:'সকাল contains which smaller word?',o:['কাল','দিন','আজ','রাত'],a:0},
{t:'li',q:'Listen — which word?',say:'সকাল',o:['সকাল','কাল','গতকাল','আজ'],a:0}]},
{id:'bn_time_3',title:'Build time phrases',step:'build',meta:'Yesterday, today, tomorrow',vocab:[['গতকাল','gotokal','yesterday (for sure)'],['আগামীকাল','agamikal','tomorrow (for sure)']],ex:[
{t:'wb',q:'Order the days: yesterday, today, tomorrow',a:['গতকাল','আজ','আগামীকাল'],pool:['আজ','আগামীকাল','গতকাল','এখন']},
{t:'match',q:'Match word and meaning',pairs:[['আজ','today'],['এখন','now'],['সকাল','morning'],['রাত','night']]},
{t:'fill',q:'Complete: "morning tea?"',s:'___ চা?',o:['সকালে','রাত','কাল','নাম'],a:0},
{t:'mc',q:'"see you tomorrow" would use…',o:['আগামীকাল','গতকাল','আজ','এখন'],a:0},
{t:'li',q:'Listen — which word?',say:'দিন',o:['দিন','রাত','এখন','আজ'],a:0},
{t:'mc',q:'এখন means…',o:['now','later','never','yesterday'],a:0}]},
{id:'bn_time_4',title:'Mix it',step:'mix',meta:'Times together',vocab:[],ex:[
{t:'mc',q:'The two-faced day word is…',o:['কাল','আজ','দিন','সকাল'],a:0},
{t:'li',q:'Listen — which word?',say:'আজ',o:['আজ','কাল','আট','আম'],a:0},
{t:'wb',q:'Build: "today morning" (this morning)',a:['আজ','সকাল'],pool:['আজ','সকাল','কাল','রাত']},
{t:'fill',q:'Complete: "now — tea!"',s:'___ — চা!',o:['এখন','রাত','নাম','কে'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['গতকাল','yesterday'],['দিন','day'],['রাত','night'],['এখন','now']]},
{t:'mc',q:'কাল দেখা হবে would mean "see you…"',o:['tomorrow','last year','tonight','never'],a:0},
{t:'li',q:'Listen — which word?',say:'রাত',o:['রাত','হাত','ভাত','সাত'],a:0}]},
{id:'bn_time_5',title:'Checkpoint',step:'checkpoint',meta:'Time words mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "today"?',o:['আজ','কাল','এখন','সকাল'],a:0},
{t:'li',q:'Listen — which word?',say:'কাল',o:['কাল','আজ','সকাল','ফল'],a:0},
{t:'mc',q:'Which means "night"?',o:['রাত','দিন','সকাল','এখন'],a:0},
{t:'wb',q:'Order: yesterday, today, tomorrow',a:['গতকাল','আজ','আগামীকাল'],pool:['আগামীকাল','গতকাল','আজ','সকাল']},
{t:'match',q:'Match word and meaning',pairs:[['আজ','today'],['কাল','tomorrow / yesterday'],['এখন','now'],['দিন','day'],['সকাল','morning']]},
{t:'mc',q:'To say yesterday with NO doubt, use…',o:['গতকাল','কাল','আজ','এখন'],a:0},
{t:'li',q:'Listen — which word?',say:'এখন',o:['এখন','সকাল','আজ','দিন'],a:0}]},

{id:'bn_num2',title:'Numbers 11–20',step:'learn',meta:'এগারো to বিশ',vocab:[['এগারো','egaro','11'],['বারো','baro','12'],['তেরো','tero','13'],['চোদ্দো','choddo','14'],['পনেরো','ponero','15'],['ষোলো','sholo','16'],['সতেরো','shotero','17'],['আঠারো','atharo','18'],['উনিশ','unish','19'],['বিশ','bish','20']],ex:[
{t:'note',tag:'The -ro teens',q:'১১–১৫',body:'<p>Bengali teens each have their own word, most ending in a friendly <b>-ro</b>: <span class="deva">এগারো</span> <b>egaro</b> 11, <span class="deva">বারো</span> <b>baro</b> 12, <span class="deva">তেরো</span> <b>tero</b> 13, <span class="deva">চোদ্দো</span> <b>choddo</b> 14, <span class="deva">পনেরো</span> <b>ponero</b> 15.</p>',eg:[['এগারো','egaro','11'],['বারো','baro','12'],['তেরো','tero','13']]},
{t:'mc',q:'Which is 11?',o:['এগারো','বারো','তেরো','বিশ'],a:0},
{t:'mc',q:'Which is 14?',o:['চোদ্দো','পনেরো','তেরো','সতেরো'],a:0},
{t:'note',tag:'Up to twenty',q:'১৬–২০',body:'<p><span class="deva">ষোলো</span> <b>sholo</b> 16, <span class="deva">সতেরো</span> <b>shotero</b> 17, <span class="deva">আঠারো</span> <b>atharo</b> 18, <span class="deva">উনিশ</span> <b>unish</b> 19, <span class="deva">বিশ</span> <b>bish</b> 20. Market Bengali also loves <span class="deva">কুড়ি</span> <b>kuri</b> — a second word for 20!</p>',eg:[['ষোলো','sholo','16'],['উনিশ','unish','19'],['বিশ','bish','20'],['কুড়ি','kuri','20 (market word)']]},
{t:'mc',q:'Which is 18?',o:['আঠারো','সতেরো','উনিশ','ষোলো'],a:0},
{t:'li',q:'Listen — which number?',say:'বিশ',o:['বিশ','উনিশ','দশ','বারো'],a:0},
{t:'mc',q:'The market word for 20 is…',o:['কুড়ি','বিশ দুই','দশ দশ','এগারো'],a:0}]},
{id:'bn_num2_2',title:'Hear the teens',step:'recognize',meta:'Spot 11–20',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'এগারো',o:['এগারো','বারো','আঠারো','তেরো'],a:0},
{t:'li',q:'Listen — which number?',say:'পনেরো',o:['পনেরো','তেরো','সতেরো','ষোলো'],a:0},
{t:'mc',q:'Which is 12?',o:['বারো','এগারো','তেরো','দুই'],a:0},
{t:'mc',q:'Which is 16?',o:['ষোলো','সতেরো','ছয়','চোদ্দো'],a:0},
{t:'li',q:'Listen — which number?',say:'উনিশ',o:['উনিশ','বিশ','আঠারো','দশ'],a:0},
{t:'mc',q:'Which is 17?',o:['সতেরো','ষোলো','আঠারো','সাত'],a:0},
{t:'li',q:'Listen — which number?',say:'বারো',o:['বারো','এগারো','তেরো','বিশ'],a:0}]},
{id:'bn_num2_3',title:'Build the teens',step:'build',meta:'Match & order',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['এগারো','11'],['তেরো','13'],['পনেরো','15'],['সতেরো','17']]},
{t:'mc',q:'Which is 15?',o:['পনেরো','পাঁচ','ষোলো','চোদ্দো'],a:0},
{t:'wb',q:'Build in order: 11, 12, 13',a:['এগারো','বারো','তেরো'],pool:['তেরো','এগারো','বারো','বিশ']},
{t:'mc',q:'Which is 19?',o:['উনিশ','আঠারো','বিশ','নয়'],a:0},
{t:'li',q:'Listen — which number?',say:'চোদ্দো',o:['চোদ্দো','তেরো','চার','পনেরো'],a:0},
{t:'match',q:'Match number and value',pairs:[['বারো','12'],['চোদ্দো','14'],['আঠারো','18'],['বিশ','20']]}]},
{id:'bn_num2_4',title:'Mix it',step:'mix',meta:'All the way to 20',vocab:[],ex:[
{t:'mc',q:'Which is 20?',o:['বিশ','উনিশ','দশ','বারো'],a:0},
{t:'li',q:'Listen — which number?',say:'ষোলো',o:['ষোলো','সতেরো','ছয়','ফল'],a:0},
{t:'mc',q:'কুড়ি equals…',o:['বিশ','দশ','উনিশ','এগারো'],a:0},
{t:'wb',q:'Build in order: 18, 19, 20',a:['আঠারো','উনিশ','বিশ'],pool:['বিশ','আঠারো','উনিশ','ষোলো']},
{t:'match',q:'Match number and value',pairs:[['পনেরো','15'],['ষোলো','16'],['উনিশ','19'],['এগারো','11']]},
{t:'li',q:'Listen — which number?',say:'আঠারো',o:['আঠারো','এগারো','সতেরো','আট'],a:0},
{t:'mc',q:'Most Bengali teens end in the friendly…',o:['-ro','-ish','-ta','-la'],a:0}]},
{id:'bn_num2_5',title:'Zone 2 checkpoint',step:'checkpoint',meta:'You are speaking Bangla!',vocab:[],ex:[
{t:'mc',q:'Which is 13?',o:['তেরো','বারো','চোদ্দো','তিন'],a:0},
{t:'li',q:'Listen — which number?',say:'সতেরো',o:['সতেরো','ষোলো','আঠারো','সাত'],a:0},
{t:'mc',q:'Which is 14?',o:['চোদ্দো','পনেরো','চার','তেরো'],a:0},
{t:'wb',q:'Build in order: 11, 15, 20',a:['এগারো','পনেরো','বিশ'],pool:['বিশ','এগারো','পনেরো','দশ']},
{t:'match',q:'Match number and value',pairs:[['এগারো','11'],['চোদ্দো','14'],['ষোলো','16'],['উনিশ','19'],['বিশ','20']]},
{t:'mc',q:'Two zones done! In Bengali you can now say…',o:['কেমন আছেন? আমার নাম…','nothing yet','only numbers','only letters'],a:0},
{t:'li',q:'Listen — which number?',say:'এগারো',o:['এগারো','আঠারো','বারো','উনিশ'],a:0}]},
];
const BN_LESSONS=[].concat(BN_Z1,BN_Z2);

registerPack({
  code:'bn',
  name:'Bengali',
  nativeName:'বাংলা',
  ttsLocale:'bn-IN',
  script:/[ঀ-৿]/, /* the Bengali Unicode block */
  audioBase:'audio-bn/',
  storageKey:'sajilo_bn',
  brand:{h1:'Learn <em>Bengali</em>'},
  alpha:{native:'বাংলা বর্ণমালা',vowels:'স্বরবর্ণ',cons:'ব্যঞ্জনবর্ণ',nums:'সংখ্যা',review:'অনুশীলন',settings:'সেটিংস'},
  art:{hero:BN_HERO,band:BN_BAND,mascot:BN_MASCOT},
  voiceTest:v=>/^bn(\b|[-_])/i.test(v.lang)||/bengali|bangla/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:BN_LESSONS,units:BN_UNITS,unitsIntensive:[],sym:BN_SYM,
  vowels:BN_VOWELS,cons:BN_CONS,nums:BN_NUMS,srsSeed:BN_SRS_SEED
});
