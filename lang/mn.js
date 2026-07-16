/* ===== MONGOLIAN LANGUAGE PACK (scaffold — coming soon) =====
   Structure, art & branding only; no lessons yet. The curriculum will be
   Mongolian-DRIVEN and researched before any content ships (see CLAUDE.md
   Multi-language expansion). Modern Mongolian in Mongolia uses CYRILLIC —
   system fonts cover it, no webfont needed. Romanization scheme: to be
   defined with Zone 1.
   Art: secular Mongolia — endless steppe under a huge sky, distant ridge,
   two gers (round felt tents), grazing horses. Mascot: chestnut foal. */

/* --- hero: vast steppe, gers & horses right, huge calm sky over the title --- */
const MN_HERO='<circle class="orb-glow" cx="930" cy="118" r="76"/><circle class="orb" cx="930" cy="118" r="46"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="120" cy="58" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="240" cy="104" r="1.2"/><circle cx="360" cy="46" r="2"/><circle cx="470" cy="122" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="600" cy="60" r="1.3"/><circle cx="700" cy="112" r="1.5" class="tw" style="animation-delay:2s"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="74" rx="28" ry="11"/><ellipse cx="78" cy="69" rx="22" ry="13"/><ellipse cx="26" cy="72" rx="20" ry="10"/></g>'
/* steppe larks */
+'<g class="art-detail" fill="none" stroke="var(--mtn-mid)" stroke-width="1.8" stroke-linecap="round" opacity=".5" aria-hidden="true"><path d="M185 94 q6 -5 12 0 q6 -5 12 0"/><path d="M258 112 q5 -4.5 10 0 q5 -4.5 10 0"/></g>'
/* far: one long low ridge, gently higher on the right */
+'<path class="far" d="M0 250 Q150 244 300 247 Q450 242 600 246 Q720 242 800 236 Q880 222 960 230 Q1040 212 1120 224 Q1170 216 1200 220 L1200 320 L0 320 Z"/>'
/* mid: rolling steppe with two gers on the right */
+'<path class="mid" d="M0 320 L0 290 Q300 280 600 286 Q900 294 1200 282 L1200 320 Z '
/* ger 1: dome + wall + door */
+'M796 268 Q796 240 836 240 Q876 240 876 268 Z M800 268 L872 268 L872 284 L800 284 Z M830 284 L830 270 L842 270 L842 284 Z M834 240 L834 232 L838 232 L838 240 Z '
/* ger 2 (smaller, further right) */
+'M912 272 Q912 250 942 250 Q972 250 972 272 Z M916 272 L968 272 L968 284 L916 284 Z M938 284 L938 274 L948 274 L948 284 Z '
/* grass-wave texture under the title */
+'<path class="snow" opacity=".2" d="M70 260 Q220 254 370 258 L368 264 Q220 258 74 266 Z"/>'
+'<path class="snow" opacity=".2" d="M150 272 Q300 264 430 270 L428 276 Q300 268 154 278 Z"/>'
/* near: grass band with grazing horses (fine detail) */
+'<g class="near"><path d="M0 302 Q160 272 320 296 Q480 316 640 290 Q800 266 960 298 Q1080 312 1200 294 L1200 320 L0 320 Z"/></g>'
+'<g class="near art-detail">'
/* grazing horse: body, dipped neck+head, legs, tail */
+'<path d="M1044 300 L1044 284 Q1044 276 1054 275 L1082 275 Q1092 276 1092 284 L1092 300 L1086 300 L1086 288 L1060 288 L1060 300 L1054 300 L1054 288 Q1050 288 1049 292 L1049 300 Z"/>'
+'<path d="M1054 276 Q1046 278 1042 286 L1036 296 L1031 295 L1038 282 Q1042 274 1052 273 Z"/>'
+'<path d="M1092 282 Q1098 284 1097 292 L1096 298 L1092 297 Z"/>'
/* second smaller horse */
+'<path d="M1128 298 L1128 287 Q1128 281 1136 280 L1156 280 Q1163 281 1163 287 L1163 298 L1158 298 L1158 290 L1140 290 L1140 298 L1135 298 L1135 290 Q1132 290 1131 293 L1131 298 Z"/>'
+'<path d="M1136 281 Q1130 282 1127 288 L1122 296 L1118 295 L1124 285 Q1127 279 1134 278 Z"/>'
+'</g>';

/* --- band: calm left, ger + ridge right --- */
const MN_BAND='<circle class="orb-glow" cx="1046" cy="88" r="36"/><circle class="orb" cx="1046" cy="88" r="21"/>'
+'<path class="far" d="M0 152 Q100 146 200 150 Q300 144 400 148 Q500 144 600 148 Q700 144 780 146 Q860 132 940 140 Q1020 124 1100 134 Q1160 128 1200 132 L1200 200 L0 200 Z"/>'
+'<path class="mid" d="M0 200 L0 176 Q300 168 600 174 Q900 182 1200 172 L1200 200 Z"/>'
/* ger (fine detail) */
+'<g class="mid art-detail"><path d="M872 170 Q872 152 898 152 Q924 152 924 170 Z M875 170 L921 170 L921 180 L875 180 Z M894 180 L894 172 L902 172 L902 180 Z"/></g>'
+'<g class="near"><path d="M0 188 Q300 164 600 178 Q900 194 1200 176 L1200 200 L0 200 Z"/></g>';

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

/* register the scaffold — the engine shows coming-soon states while empty */
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
  lessons:[],units:[],unitsIntensive:[],sym:{},
  vowels:[],cons:[],nums:[],srsSeed:[]
});
