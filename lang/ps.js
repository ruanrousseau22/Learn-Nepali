/* ===== PASHTO LANGUAGE PACK (scaffold — coming soon) =====
   Structure, art & branding only; no lessons yet. The curriculum will be
   Pashto-DRIVEN and researched before any content ships (see CLAUDE.md
   Multi-language expansion). NOTE: Pashto is written right-to-left in the
   Arabic script — lesson UI (word banks, fills) will need an RTL pass
   before Zone 1 ships. Romanization scheme: to be defined with Zone 1.
   Art: secular Afghanistan — snow-capped Hindu Kush, arid valley terraces,
   poplars and a pomegranate orchard. Mascot: markhor kid (national animal). */

/* --- hero: high snowy range far right, calm high-desert sky over the title --- */
const PS_HERO='<circle class="orb-glow" cx="930" cy="118" r="76"/><circle class="orb" cx="930" cy="118" r="46"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="120" cy="58" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="240" cy="104" r="1.2"/><circle cx="360" cy="46" r="2"/><circle cx="470" cy="122" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="600" cy="60" r="1.3"/><circle cx="700" cy="112" r="1.5" class="tw" style="animation-delay:2s"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="74" rx="28" ry="11"/><ellipse cx="78" cy="69" rx="22" ry="13"/><ellipse cx="26" cy="72" rx="20" ry="10"/></g>'
/* mountain swifts */
+'<g class="art-detail" fill="none" stroke="var(--mtn-mid)" stroke-width="1.8" stroke-linecap="round" opacity=".5" aria-hidden="true"><path d="M190 90 q6 -5 12 0 q6 -5 12 0"/><path d="M260 108 q5 -4.5 10 0 q5 -4.5 10 0"/></g>'
/* far: jagged Hindu Kush, peaks only right of the title zone */
+'<path class="far" d="M0 246 Q150 240 300 243 Q450 238 600 242 Q690 238 736 238 L790 172 L826 210 L872 148 L912 196 L956 132 L1002 188 L1044 152 L1088 200 L1128 168 L1168 208 L1200 200 L1200 320 L0 320 Z"/>'
/* snow caps on the three tallest peaks */
+'<path class="snow" d="M872 148 L886 168 L878 170 L872 162 L866 171 L858 168 Z"/>'
+'<path class="snow" d="M956 132 L972 154 L963 156 L956 147 L949 157 L941 153 Z"/>'
+'<path class="snow" d="M1044 152 L1056 168 L1049 170 L1044 162 L1038 171 L1032 167 Z"/>'
/* mid: arid valley terraces with poplar trees right */
+'<path class="mid" d="M0 320 L0 288 Q300 278 600 284 Q900 292 1200 280 L1200 320 Z '
/* slender poplars */
+'M842 286 C844 258 842 232 844 210 L850 210 C852 232 850 258 852 286 Z M847 208 C840 196 840 182 847 172 C854 182 854 196 847 208 Z '
+'M896 288 C898 262 896 238 898 218 L904 218 C906 238 904 262 906 288 Z M901 216 C895 205 895 192 901 183 C907 192 907 205 901 216 Z '
/* pomegranate orchard bushes */
+'M950 286 C942 270 946 256 960 252 C974 256 978 270 970 286 Z M1002 288 C994 272 998 258 1012 254 C1026 258 1030 272 1022 288 Z '
/* dry-field furrow texture under the title */
+'<path class="snow" opacity=".2" d="M70 258 Q220 252 370 256 L368 262 Q220 256 74 264 Z"/>'
+'<path class="snow" opacity=".2" d="M150 270 Q300 262 430 268 L428 274 Q300 266 154 276 Z"/>'
/* near: valley-floor green band */
+'<g class="near"><path d="M0 300 Q160 268 320 294 Q480 316 640 288 Q800 262 960 296 Q1080 312 1200 292 L1200 320 L0 320 Z"/>'
+'<path d="M1102 300 C1104 276 1102 254 1104 236 L1110 236 C1112 254 1110 278 1112 300 Z M1107 234 C1099 220 1099 204 1107 192 C1115 204 1115 220 1107 234 Z"/>'
+'</g>';

/* --- band: calm left, peaks + poplar right --- */
const PS_BAND='<circle class="orb-glow" cx="1046" cy="88" r="36"/><circle class="orb" cx="1046" cy="88" r="21"/>'
+'<path class="far" d="M0 150 Q100 144 200 148 Q300 142 400 146 Q500 142 600 146 Q700 142 772 146 L812 106 L840 132 L876 92 L908 126 L944 100 L976 130 L1016 106 L1048 134 L1120 128 L1200 134 L1200 200 L0 200 Z"/>'
+'<path class="snow" d="M876 92 L888 108 L881 110 L876 103 L870 111 L863 107 Z"/>'
+'<path class="mid" d="M0 200 L0 176 Q300 166 600 174 Q900 182 1200 170 L1200 200 Z"/>'
/* poplar pair (fine detail) */
+'<g class="mid art-detail"><path d="M848 176 C849 158 848 142 849 130 L853 130 C854 142 853 158 854 176 Z M851 128 C846 120 846 111 851 105 C856 111 856 120 851 128 Z"/></g>'
+'<g class="near"><path d="M0 186 Q300 162 600 178 Q900 194 1200 174 L1200 200 L0 200 Z"/>'
+'<path d="M1006 188 C1007 172 1006 158 1007 146 L1011 146 C1012 158 1011 174 1012 188 Z M1009 144 C1004 136 1004 128 1009 122 C1014 128 1014 136 1009 144 Z"/>'
+'</g>';

/* --- mascot: markhor kid (moods: happy / cheer / oops) --- */
function PS_MASCOT(m){
  var base='<path d="M15 20 C10 13 13 6 19 5 C15 10 16 15 19 19 Z" fill="#9A8468"/><path d="M49 20 C54 13 51 6 45 5 C49 10 48 15 45 19 Z" fill="#9A8468"/>' /* little spiral-ish horns */
  +'<ellipse cx="32" cy="45" rx="17" ry="12" fill="#C9B18F"/>' /* body */
  +'<ellipse cx="13" cy="26" rx="5" ry="3.4" fill="#C9B18F" transform="rotate(-24 13 26)"/><ellipse cx="51" cy="26" rx="5" ry="3.4" fill="#C9B18F" transform="rotate(24 51 26)"/>' /* ears */
  +'<circle cx="32" cy="30" r="16.5" fill="#D8C2A0"/>' /* head */
  +'<ellipse cx="32" cy="39" rx="8" ry="6" fill="#EFE2CB"/>' /* muzzle */
  +'<ellipse cx="32" cy="36.6" rx="2.2" ry="1.7" fill="#5b4630"/>' /* nose */
  +'<path d="M27 51 Q32 55 37 51" fill="none" stroke="#B49A76" stroke-width="3.4" stroke-linecap="round"/>'; /* chest fluff */
  var f;
  if(m==='cheer')f='<path d="M22 28 Q25 24.5 28 28" fill="none" stroke="#4a3a26" stroke-width="2.2" stroke-linecap="round"/><path d="M36 28 Q39 24.5 42 28" fill="none" stroke="#4a3a26" stroke-width="2.2" stroke-linecap="round"/><path d="M27 42 Q32 46.5 37 42" fill="none" stroke="#4a3a26" stroke-width="2.2" stroke-linecap="round"/>';
  else if(m==='oops')f='<path d="M21.5 26 Q25 24.8 28.5 26" fill="none" stroke="#4a3a26" stroke-width="1.6" stroke-linecap="round"/><path d="M35.5 26 Q39 24.8 42.5 26" fill="none" stroke="#4a3a26" stroke-width="1.6" stroke-linecap="round"/><circle cx="25" cy="29" r="2" fill="#4a3a26"/><circle cx="39" cy="29" r="2" fill="#4a3a26"/><ellipse cx="32" cy="43" rx="2.2" ry="2.8" fill="#4a3a26"/>';
  else f='<circle cx="25" cy="28.5" r="2.5" fill="#4a3a26"/><circle cx="39" cy="28.5" r="2.5" fill="#4a3a26"/><circle cx="25.8" cy="27.7" r="0.7" fill="#fff"/><circle cx="39.8" cy="27.7" r="0.7" fill="#fff"/><path d="M28 42 Q32 45 36 42" fill="none" stroke="#4a3a26" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+base+f+'</svg>';}

/* register the scaffold — the engine shows coming-soon states while empty */
registerPack({
  code:'ps',
  name:'Pashto',
  nativeName:'پښتو',
  ttsLocale:'ps-AF',
  script:/[؀-ۿݐ-ݿ]/, /* Arabic + Arabic Supplement blocks */
  audioBase:'audio-ps/',
  storageKey:'sajilo_ps',
  brand:{h1:'Learn <em>Pashto</em>'},
  alpha:{native:'پښتو الفبې',vowels:'خپلواک',cons:'بېواک',nums:'شمېرې',review:'تمرین',settings:'امستنې'},
  art:{hero:PS_HERO,band:PS_BAND,mascot:PS_MASCOT},
  voiceTest:v=>/^ps(\b|[-_])/i.test(v.lang)||/pashto/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:[],units:[],unitsIntensive:[],sym:{},
  vowels:[],cons:[],nums:[],srsSeed:[]
});
