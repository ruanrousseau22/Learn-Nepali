/* ============================================================================
   URDU — lang/ur.js
   ----------------------------------------------------------------------------
   Bhasaly's SECOND right-to-left course, after Pashto. Urdu is written in
   NASTALIQ, not the Naskh style Pashto uses: the baseline steps down across a
   word, so index.html carries a :root[data-lang="ur"] font block with extra
   line-height. RTL behaviour is shared with Pashto via :is() selectors and
   RTL_CODES.

   ROMANIZATION (ASCII, phonetic — NOT ALA-LC). Reuses the Pashto conventions
   so a learner of both is not retrained:
     aspirates          kh gh ch th ph bh dh jh   (the do-chashmi he)
     retroflexes        doubled: tt dd rr         (ٹ ڈ ڑ)
     long vowels        aa ee oo                  (short: a i u)
     nasal vowel        n after the vowel         (haan, nahin)
     ain / hamza        not written; the vowel carries it
   No Urdu script may appear in a rom field (validation scans [\u0600-\u06FF]).

   VARIETY: standard Pakistani Urdu as spoken in Lahore/Karachi. Spoken Urdu and
   spoken Hindi are the same language; what this course teaches that a Hindi
   course does not is the script, and the Persian/Arabic-leaning vocabulary of
   the formal register.

   ART: Hunza and the Karakoram — deliberately WARM and DRY so it does not read
   as Nepal again (Nepal owns cool blue-green Himalaya + yaks + pines). Angular
   rust spires, apricot orchards in blossom, a decorated jingle truck and a
   markhor. No mosques, madrasas or minarets — the secular-art rule.
   ============================================================================ */

const UR_HERO='<circle class="orb-glow" cx="238" cy="96" r="74"/><circle class="orb" cx="238" cy="96" r="44"/><g class="hero-stars" aria-hidden="true"><circle cx="520" cy="52" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="640" cy="98" r="1.2"/><circle cx="760" cy="44" r="2"/><circle cx="880" cy="70" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="1010" cy="52" r="1.3"/><circle cx="1120" cy="86" r="1.5" class="tw" style="animation-delay:2s"/></g><g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g><g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="128" rx="40" ry="15"/><ellipse cx="100" cy="122" rx="28" ry="17"/><ellipse cx="30" cy="125" rx="26" ry="13"/></g><g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="70" rx="28" ry="11"/><ellipse cx="78" cy="65" rx="22" ry="13"/><ellipse cx="26" cy="68" rx="20" ry="10"/></g><path class="far" d="M0 258 Q160 254 320 256 Q460 252 600 250 L680 246 L720 240 L764 168 L816 208 L872 124 L928 190 L988 108 L1048 184 L1104 146 L1156 196 L1200 172 L1200 320 L0 320 Z"/><path class="snow" d="M764.0 168.0 L787.4 186.0 L757.8 189.0 L763.3 185.0 L770.9 191.0 L778.5 184.0 L753.0 186.0 Z"/><path class="snow" d="M872.0 124.0 L889.0 144.0 L862.9 147.0 L867.8 143.0 L874.4 149.0 L881.1 142.0 L858.7 144.0 Z"/><path class="snow" d="M988.0 108.0 L1005.4 130.0 L976.6 133.0 L981.9 129.0 L989.3 135.0 L996.7 128.0 L971.9 130.0 Z"/><path class="snow" d="M1104.0 146.0 L1120.6 162.0 L1086.1 165.0 L1092.5 161.0 L1101.3 167.0 L1110.2 160.0 L1080.4 162.0 Z"/><path class="mid" d="M0 320 L0 300 Q90 282 210 270 Q320 260 430 266 Q560 275 700 281 Q880 287 1040 277 Q1120 271 1200 275 L1200 320 Z"/><path class="snow" opacity=".2" d="M18 296 Q110 280 224 269 L226 274 Q112 285 22 301 Z"/><path class="snow" opacity=".17" d="M40 305 Q140 289 258 279 L260 284 Q142 294 44 310 Z"/><path class="snow" opacity=".14" d="M300 264 Q430 268 560 276 L559 281 Q430 273 301 269 Z"/><path class="snow" opacity=".12" d="M700 283 Q880 290 1030 280 L1031 285 Q880 295 700 288 Z"/><g class="near"><path d="M0 320 L0 298 Q150 287 320 295 Q490 303 660 293 Q830 283 1000 291 Q1110 296 1200 290 L1200 320 Z"/></g><g transform="translate(150,291) scale(0.55)" aria-hidden="true"><path fill="var(--tyre)" d="M12 0 L12 -16 L15.5 -16 L15.5 0 Z M20 0 L20 -16 L23.5 -16 L23.5 0 Z M38 0 L38 -16 L41.5 -16 L41.5 0 Z M45 0 L45 -16 L48.5 -16 L48.5 0 Z"/><path fill="var(--hide)" d="M8 -16 C6 -30 16 -37 30 -37 C44 -37 52 -30 50 -16 Z"/><path fill="var(--hide)" d="M10 -31 L3 -45 L15 -47 L19 -34 Z"/><path fill="var(--hide)" d="M1 -47 C-4 -51 2 -57 9 -55 L17 -49 L11 -42 Z"/><path fill="var(--hide)" d="M4 -44 L2 -35 L8 -38 Z"/><path fill="none" stroke="var(--tyre)" stroke-width="2.6" stroke-linecap="round" d="M9 -55 C13 -66 22 -68 24 -59 C25.5 -52 19 -50 17 -57"/><path fill="none" stroke="var(--tyre)" stroke-width="2.2" stroke-linecap="round" d="M4 -55 C6 -67 17 -71 20 -62"/><circle cx="6" cy="-50" r="1.5" fill="var(--tyre)"/></g><g transform="translate(288,295) scale(0.62)" aria-hidden="true"><circle cx="26" cy="-10" r="10" fill="var(--tyre)"/><circle cx="26" cy="-10" r="4" fill="var(--wood)"/><circle cx="98" cy="-10" r="10" fill="var(--tyre)"/><circle cx="98" cy="-10" r="4" fill="var(--wood)"/><path fill="var(--wood)" d="M6 -20 L118 -20 L118 -13 L6 -13 Z"/><path fill="var(--crimson)" d="M6 -20 L6 -56 L78 -56 L78 -20 Z"/><path fill="var(--orb)" d="M6 -40 L78 -40 L78 -34 L6 -34 Z"/><path fill="var(--orb)" d="M6 -53 L78 -53 L78 -50 L6 -50 Z"/><path fill="var(--crimson)" d="M78 -20 L78 -48 L114 -48 L118 -34 L118 -20 Z"/><path class="snow" d="M96 -44 L112 -44 L115 -34 L96 -34 Z"/><path fill="var(--orb)" d="M74 -56 L74 -72 L120 -72 L120 -56 Z"/><path fill="var(--crimson)" d="M74 -72 L84 -82 L110 -82 L120 -72 Z"/><path fill="var(--wood)" d="M80 -60 L114 -60 L114 -57 L80 -57 Z"/></g><g transform="translate(470,302) scale(0.72)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g><g transform="translate(546,300) scale(0.58)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g><g transform="translate(620,296) scale(0.64)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g><g transform="translate(1002,292) scale(0.6)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g><g transform="translate(1074,294) scale(0.48)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g>'
+'<g transform="translate(196,272) scale(0.42)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g><g transform="translate(262,268) scale(0.36)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g>';

const UR_BAND='<circle class="orb-glow" cx="1046" cy="60" r="34"/><circle class="orb" cx="1046" cy="60" r="20"/><path class="far" d="M0 156 Q200 152 420 154 Q560 152 700 150 L740 146 L784 104 L830 138 L880 78 L930 128 L986 96 L1040 140 Q1120 146 1200 148 L1200 200 L0 200 Z"/><path class="snow" d="M784.0 104.0 L801.6 117.0 L774.7 120.0 L779.7 116.0 L786.6 122.0 L793.5 115.0 L770.4 117.0 Z"/><path class="snow" d="M880.0 78.0 L895.0 93.0 L871.4 96.0 L875.8 92.0 L881.8 98.0 L887.9 91.0 L867.5 93.0 Z"/><path class="snow" d="M986.0 96.0 L1002.0 109.0 L968.7 112.0 L974.9 108.0 L983.4 114.0 L991.9 107.0 L963.2 109.0 Z"/><path class="mid" d="M0 200 L0 186 Q90 172 200 164 Q300 158 400 163 Q560 171 720 176 Q900 181 1060 173 Q1140 169 1200 172 L1200 200 Z"/><path class="snow" opacity=".2" d="M16 183 Q100 170 210 163 L212 168 Q102 175 20 188 Z"/><path class="snow" opacity=".15" d="M290 162 Q420 166 540 172 L539 177 Q420 171 291 167 Z"/><g class="near"><path d="M0 200 L0 185 Q150 177 320 182 Q490 187 660 180 Q830 173 1000 179 Q1110 182 1200 178 L1200 200 Z"/></g><g transform="translate(190,182) scale(0.38)" aria-hidden="true"><circle cx="26" cy="-10" r="10" fill="var(--tyre)"/><circle cx="26" cy="-10" r="4" fill="var(--wood)"/><circle cx="98" cy="-10" r="10" fill="var(--tyre)"/><circle cx="98" cy="-10" r="4" fill="var(--wood)"/><path fill="var(--wood)" d="M6 -20 L118 -20 L118 -13 L6 -13 Z"/><path fill="var(--crimson)" d="M6 -20 L6 -56 L78 -56 L78 -20 Z"/><path fill="var(--orb)" d="M6 -40 L78 -40 L78 -34 L6 -34 Z"/><path fill="var(--orb)" d="M6 -53 L78 -53 L78 -50 L6 -50 Z"/><path fill="var(--crimson)" d="M78 -20 L78 -48 L114 -48 L118 -34 L118 -20 Z"/><path class="snow" d="M96 -44 L112 -44 L115 -34 L96 -34 Z"/><path fill="var(--orb)" d="M74 -56 L74 -72 L120 -72 L120 -56 Z"/><path fill="var(--crimson)" d="M74 -72 L84 -82 L110 -82 L120 -72 Z"/><path fill="var(--wood)" d="M80 -60 L114 -60 L114 -57 L80 -57 Z"/></g><g transform="translate(368,183) scale(0.4)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g><g transform="translate(424,184) scale(0.32)" aria-hidden="true"><path fill="var(--bark)" d="M-2.4 0 C-2 -14 -3 -24 -2 -34 L3 -34 C4 -24 3 -14 3.4 0 Z"/><circle cx="0" cy="-42" r="13" fill="var(--blossom)"/><circle cx="-11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="11" cy="-36" r="9" fill="var(--blossom)"/><circle cx="0" cy="-30" r="8" fill="var(--blossom)"/></g><g transform="translate(636,181) scale(0.32)" aria-hidden="true"><path fill="var(--tyre)" d="M12 0 L12 -16 L15.5 -16 L15.5 0 Z M20 0 L20 -16 L23.5 -16 L23.5 0 Z M38 0 L38 -16 L41.5 -16 L41.5 0 Z M45 0 L45 -16 L48.5 -16 L48.5 0 Z"/><path fill="var(--hide)" d="M8 -16 C6 -30 16 -37 30 -37 C44 -37 52 -30 50 -16 Z"/><path fill="var(--hide)" d="M10 -31 L3 -45 L15 -47 L19 -34 Z"/><path fill="var(--hide)" d="M1 -47 C-4 -51 2 -57 9 -55 L17 -49 L11 -42 Z"/><path fill="var(--hide)" d="M4 -44 L2 -35 L8 -38 Z"/><path fill="none" stroke="var(--tyre)" stroke-width="2.6" stroke-linecap="round" d="M9 -55 C13 -66 22 -68 24 -59 C25.5 -52 19 -50 17 -57"/><path fill="none" stroke="var(--tyre)" stroke-width="2.2" stroke-linecap="round" d="M4 -55 C6 -67 17 -71 20 -62"/><circle cx="6" cy="-50" r="1.5" fill="var(--tyre)"/></g>';

function UR_MASCOT(m){
  var base='<path fill="#8C6239" d="M18 60 L18 44 L23 44 L23 60 Z M27 60 L27 44 L32 44 L32 60 Z M36 60 L36 44 L41 44 L41 60 Z M45 60 L45 44 L50 44 L50 60 Z"/>'
    +'<ellipse cx="34" cy="40" rx="19" ry="14" fill="#A8763F"/>'
    +'<circle cx="18" cy="26" r="12" fill="#A8763F"/>'
    +'<path fill="#8C6239" d="M13 34 L10 46 L18 42 Z"/>'
    +'<path fill="none" stroke="#4A3A2A" stroke-width="3" stroke-linecap="round" d="M14 15 C18 4 30 2 32 12 C33.5 21 24 22 22 13"/>'
    +'<path fill="none" stroke="#4A3A2A" stroke-width="2.6" stroke-linecap="round" d="M9 17 C11 4 24 0 27 10"/>'
    +'<ellipse cx="8" cy="30" rx="4" ry="3" fill="#C79358"/>';
  var f;
  if(m==='cheer')f='<path d="M12 22 Q15 18 18 22" fill="none" stroke="#2f2a24" stroke-width="2.2" stroke-linecap="round"/>'
    +'<path d="M22 23 Q25 19 28 23" fill="none" stroke="#2f2a24" stroke-width="2.2" stroke-linecap="round"/>'
    +'<circle cx="11" cy="33" r="3" fill="var(--crimson)" opacity="0.2"/>'
    +'<path d="M12 28 Q16 33 21 28" fill="none" stroke="#2f2a24" stroke-width="2" stroke-linecap="round"/>';
  else if(m==='oops')f='<path d="M11 21 Q14.5 19.5 18 21" fill="none" stroke="#2f2a24" stroke-width="1.5" stroke-linecap="round"/>'
    +'<path d="M22 22 Q25.5 20.5 29 22" fill="none" stroke="#2f2a24" stroke-width="1.5" stroke-linecap="round"/>'
    +'<circle cx="14" cy="25" r="2.3" fill="#2f2a24"/><circle cx="25" cy="26" r="2.3" fill="#2f2a24"/>'
    +'<ellipse cx="18" cy="32" rx="3" ry="2.4" fill="#2f2a24" opacity=".55"/>';
  else f='<circle cx="14" cy="24" r="2.4" fill="#2f2a24"/><circle cx="25" cy="25" r="2.4" fill="#2f2a24"/>'
    +'<path d="M13 30 Q17 34 22 30" fill="none" stroke="#2f2a24" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+base+f+'</svg>';
}

/* Curriculum is built in ROADMAP Phase 2 (stages 2A-2E). */
const UR_LESSONS=[],UR_UNITS=[],UR_SYM={},UR_VOWELS=[],UR_CONS=[],UR_NUMS=[],UR_SRS_SEED=[];

registerPack({
  code:'ur',
  name:'Urdu',
  nativeName:'اردو',
  ttsLocale:'ur-PK',
  script:/[\u0600-\u06FF\u0750-\u077F]/, /* Arabic + Arabic Supplement */
  audioBase:'audio-ur/',
  storageKey:'sajilo_ur',
  brand:{h1:'Learn <em>Urdu</em>'},
  alpha:{native:'اردو حروفِ تہجی',vowels:'حرکات',cons:'حروف',nums:'اعداد',review:'دہرائی',settings:'ترتیبات'},
  art:{hero:UR_HERO,band:UR_BAND,mascot:UR_MASCOT},
  voiceTest:v=>/^ur(\b|[-_])/i.test(v.lang)||/urdu/i.test(v.name),
  fbVoiceTest:v=>/^hi(\b|[-_])/i.test(v.lang),
  fbVoiceName:'Hindi',
  lessons:UR_LESSONS,units:UR_UNITS,unitsIntensive:[],sym:UR_SYM,
  vowels:UR_VOWELS,cons:UR_CONS,nums:UR_NUMS,srsSeed:UR_SRS_SEED
});
