/* ===== SINHALA LANGUAGE PACK (scaffold — coming soon) =====
   Structure, art & branding only; no lessons yet. The curriculum will be
   Sinhala-DRIVEN and researched before any content ships (see CLAUDE.md
   Multi-language expansion). Romanization scheme: to be defined with Zone 1.
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

/* register the scaffold — the engine shows coming-soon states while empty */
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
  lessons:[],units:[],unitsIntensive:[],sym:{},
  vowels:[],cons:[],nums:[],srsSeed:[]
});
