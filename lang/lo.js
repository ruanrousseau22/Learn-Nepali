/* ===== LAO LANGUAGE PACK (scaffold — coming soon) =====
   Structure, art & branding only; no lessons yet. The curriculum will be
   Lao-DRIVEN and researched before any content ships (see CLAUDE.md
   Multi-language expansion). Romanization scheme: to be defined with Zone 1.
   Art: secular Laos — Mekong river at dusk, limestone karsts, wooden stilt
   house, longtail boat, river reeds. Mascot: baby water buffalo. */

/* --- hero: karsts far right, calm Mekong sky over the title zone --- */
const LO_HERO='<circle class="orb-glow" cx="930" cy="118" r="76"/><circle class="orb" cx="930" cy="118" r="46"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="120" cy="58" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="240" cy="104" r="1.2"/><circle cx="360" cy="46" r="2"/><circle cx="470" cy="122" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="600" cy="60" r="1.3"/><circle cx="700" cy="112" r="1.5" class="tw" style="animation-delay:2s"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="74" rx="28" ry="11"/><ellipse cx="78" cy="69" rx="22" ry="13"/><ellipse cx="26" cy="72" rx="20" ry="10"/></g>'
/* swifts over the river */
+'<g class="art-detail" fill="none" stroke="var(--mtn-mid)" stroke-width="1.8" stroke-linecap="round" opacity=".5" aria-hidden="true"><path d="M180 92 q6 -5 12 0 q6 -5 12 0"/><path d="M255 110 q5 -4.5 10 0 q5 -4.5 10 0"/></g>'
/* far: rounded limestone karsts, tall only right of the title zone */
+'<path class="far" d="M0 246 Q150 240 300 243 Q450 238 600 242 Q680 238 730 240 Q748 196 790 194 Q820 192 838 226 Q852 170 900 168 Q936 167 952 214 Q968 148 1022 146 Q1064 145 1080 206 Q1096 176 1130 176 Q1166 176 1178 222 Q1190 230 1200 232 L1200 320 L0 320 Z"/>'
/* mid: river bank with a wooden stilt house on the right */
+'<path class="mid" d="M0 320 L0 288 Q300 276 600 284 Q900 292 1200 280 L1200 320 Z '
/* stilt house */
+'M816 286 L816 248 L823 248 L823 286 Z M862 288 L862 248 L869 248 L869 288 Z M908 286 L908 248 L915 248 L915 286 Z '
+'M804 252 L804 218 L928 218 L928 252 Z M790 224 L866 176 L942 224 Z '
/* ladder */
+'M836 286 L852 252 L858 252 L842 286 Z '
/* longtail boat on the water */
+'M1000 282 Q1040 292 1084 282 L1076 274 L1010 274 Z M1040 274 L1040 260 L1044 260 L1044 274 Z '
/* calm current lines under the title */
+'<path class="snow" opacity=".22" d="M70 258 Q220 252 370 256 L368 262 Q220 256 74 264 Z"/>'
+'<path class="snow" opacity=".22" d="M150 270 Q300 262 430 268 L428 274 Q300 266 154 276 Z"/>'
/* near: river band with reeds right */
+'<g class="near"><path d="M0 300 Q160 266 320 294 Q480 318 640 288 Q800 260 960 296 Q1080 314 1200 292 L1200 320 L0 320 Z"/>'
+'<path d="M1096 302 C1094 280 1095 258 1093 240 L1097 240 C1099 258 1098 280 1100 302 Z M1108 304 C1108 284 1110 264 1109 246 L1113 246 C1114 264 1112 286 1112 304 Z M1122 302 C1120 282 1121 262 1119 246 L1123 246 C1125 262 1124 284 1126 302 Z"/>'
+'<ellipse cx="1095" cy="238" rx="2.6" ry="6"/><ellipse cx="1111" cy="244" rx="2.6" ry="6"/><ellipse cx="1121" cy="244" rx="2.6" ry="6"/>'
+'</g>';

/* --- band: calm left, karst + boat right --- */
const LO_BAND='<circle class="orb-glow" cx="1046" cy="88" r="36"/><circle class="orb" cx="1046" cy="88" r="21"/>'
+'<path class="far" d="M0 150 Q100 144 200 148 Q300 142 400 146 Q500 142 600 146 Q700 142 770 146 Q788 116 818 114 Q846 113 858 140 Q872 104 912 102 Q948 101 960 138 Q976 112 1010 112 Q1044 112 1056 142 Q1120 132 1200 138 L1200 200 L0 200 Z"/>'
+'<path class="mid" d="M0 200 L0 176 Q300 166 600 174 Q900 182 1200 170 L1200 200 Z"/>'
/* longtail boat (fine detail) */
+'<g class="mid art-detail"><path d="M842 174 Q874 182 908 174 L902 168 L850 168 Z M872 168 L872 156 L876 156 L876 168 Z"/></g>'
+'<g class="near"><path d="M0 186 Q300 160 600 178 Q900 196 1200 174 L1200 200 L0 200 Z"/>'
+'<path d="M1010 190 C1008 172 1009 156 1007 142 L1011 142 C1013 156 1012 174 1014 190 Z M1024 190 C1024 174 1026 158 1025 144 L1029 144 C1030 158 1028 176 1028 190 Z"/>'
+'<ellipse cx="1009" cy="140" rx="2.4" ry="5"/><ellipse cx="1027" cy="142" rx="2.4" ry="5"/>'
+'</g>';

/* --- mascot: baby water buffalo (moods: happy / cheer / oops) --- */
function LO_MASCOT(m){
  var base='<path d="M12 22 C4 18 2 26 9 29 C11 26 12 24 12 22 Z" fill="#8D9AA5"/><path d="M52 22 C60 18 62 26 55 29 C53 26 52 24 52 22 Z" fill="#8D9AA5"/>' /* horns */
  +'<ellipse cx="32" cy="45" rx="17" ry="12" fill="#7C8893"/>' /* body */
  +'<ellipse cx="14" cy="27" rx="5" ry="3.6" fill="#7C8893" transform="rotate(-30 14 27)"/><ellipse cx="50" cy="27" rx="5" ry="3.6" fill="#7C8893" transform="rotate(30 50 27)"/>' /* ears */
  +'<circle cx="32" cy="31" r="16.5" fill="#8D99A4"/>' /* head */
  +'<ellipse cx="32" cy="40" rx="9" ry="6.5" fill="#B9C3CC"/>' /* muzzle */
  +'<circle cx="29" cy="40.5" r="1.5" fill="#4a4f57"/><circle cx="35" cy="40.5" r="1.5" fill="#4a4f57"/>' /* nostrils */
  +'<path d="M24 16 Q32 11 40 16" fill="none" stroke="#6B7681" stroke-width="4" stroke-linecap="round"/>'; /* forelock */
  var f;
  if(m==='cheer')f='<path d="M22 28.5 Q25 25 28 28.5" fill="none" stroke="#343941" stroke-width="2.2" stroke-linecap="round"/><path d="M36 28.5 Q39 25 42 28.5" fill="none" stroke="#343941" stroke-width="2.2" stroke-linecap="round"/><path d="M27 46 Q32 50 37 46" fill="none" stroke="#343941" stroke-width="2.2" stroke-linecap="round"/>';
  else if(m==='oops')f='<path d="M21.5 26.5 Q25 25.3 28.5 26.5" fill="none" stroke="#343941" stroke-width="1.6" stroke-linecap="round"/><path d="M35.5 26.5 Q39 25.3 42.5 26.5" fill="none" stroke="#343941" stroke-width="1.6" stroke-linecap="round"/><circle cx="25" cy="29.5" r="2" fill="#343941"/><circle cx="39" cy="29.5" r="2" fill="#343941"/><ellipse cx="32" cy="47" rx="2.2" ry="2.8" fill="#343941"/>';
  else f='<circle cx="25" cy="29" r="2.5" fill="#343941"/><circle cx="39" cy="29" r="2.5" fill="#343941"/><circle cx="25.8" cy="28.2" r="0.7" fill="#fff"/><circle cx="39.8" cy="28.2" r="0.7" fill="#fff"/><path d="M28 46 Q32 48.8 36 46" fill="none" stroke="#343941" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+base+f+'</svg>';}

/* register the scaffold — the engine shows coming-soon states while empty */
registerPack({
  code:'lo',
  name:'Lao',
  nativeName:'ລາວ',
  ttsLocale:'lo-LA',
  script:/[຀-໿]/, /* Lao block */
  audioBase:'audio-lo/',
  storageKey:'sajilo_lo',
  brand:{h1:'Learn <em>Lao</em>'},
  alpha:{native:'ອັກສອນລາວ',vowels:'ສະຫຼະ',cons:'ພະຍັນຊະນະ',nums:'ຕົວເລກ',review:'ຝຶກ',settings:'ການຕັ້ງຄ່າ'},
  art:{hero:LO_HERO,band:LO_BAND,mascot:LO_MASCOT},
  voiceTest:v=>/^lo(\b|[-_])/i.test(v.lang)||/\blao\b/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:[],units:[],unitsIntensive:[],sym:{},
  vowels:[],cons:[],nums:[],srsSeed:[]
});
