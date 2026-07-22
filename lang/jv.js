/* ============================================================================
   JAVANESE — lang/jv.js
   ----------------------------------------------------------------------------
   A LATIN-SCRIPT pack — see the note in lang/uz.js and ROADMAP Phase 0. Aksara
   Jawa is heritage script; it is on street signs in Yogyakarta and Solo but it
   is not what the TTS speaks and not what a learner needs. Recognition only,
   and only as a late bonus zone if at all.

   ROMANIZATION: `vocab[i][1]` is a PRONUNCIATION RESPELLING, and it earns its
   keep here more than in Uzbek:
     final a  -> o   (Yogyakarta is said Yogyakarto; sedasa -> sedoso)
     dh / th      retroflex, tongue curled back — NOT the English th
     d  / t       dental, tongue on the teeth
   No tones. The vowel and the two t/d series are the whole pronunciation story.

   THE CENTRAL CURRICULUM DECISION — speech levels. Javanese ngoko and krama
   are not a politeness suffix; they are largely different vocabularies. Ngoko
   is everyday speech and what you will hear; krama is what an outsider is
   addressed in and should use to elders. Even `matur nuwun` (thank you) is
   krama. Proposed approach, to confirm against sources before Zone 2 is
   written: teach ngoko as the base because it is what you hear, and carry
   krama for the courtesy set and address terms — the same shape as the Khmer
   course's age-based address terms. Flag unresolved calls in a lesson `note`
   rather than guessing silently.

   ART: a volcanic cone with a drifting plume — nothing else in the app looks
   like it. Below it terraced sawah, stepped down a slope so it does not repeat
   Khmer's flat paddies, a banyan with aerial roots, and a water buffalo. No
   candi (Borobudur, Prambanan) — the secular-art rule. Wayang and much
   traditional performance are tied to Hindu epics and are out of scope too;
   keep content to batik, warung, pasar, sawah.
   ============================================================================ */

const JV_HERO='<circle class="orb-glow" cx="238" cy="94" r="70"/><circle class="orb" cx="238" cy="94" r="41"/><g class="hero-stars" aria-hidden="true"><circle cx="140" cy="56" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="300" cy="98" r="1.2"/><circle cx="460" cy="44" r="2"/><circle cx="620" cy="72" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="1120" cy="60" r="1.3"/><circle cx="1050" cy="96" r="1.5" class="tw" style="animation-delay:2s"/></g><g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g><g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="128" rx="40" ry="15"/><ellipse cx="100" cy="122" rx="28" ry="17"/><ellipse cx="30" cy="125" rx="26" ry="13"/></g><g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="70" rx="28" ry="11"/><ellipse cx="78" cy="65" rx="22" ry="13"/><ellipse cx="26" cy="68" rx="20" ry="10"/></g><path class="far" d="M0 254 Q170 250 350 252 Q510 250 650 248 L700 246 Q800 198 862 112 L874 102 L890 102 L902 112 Q964 198 1064 244 Q1134 246 1200 244 L1200 320 L0 320 Z"/><g class="snow" opacity=".42" aria-hidden="true"><ellipse cx="884" cy="92" rx="13" ry="7"/><ellipse cx="902" cy="78" rx="16" ry="9"/><ellipse cx="928" cy="64" rx="19" ry="10"/><ellipse cx="960" cy="52" rx="22" ry="11"/><ellipse cx="998" cy="44" rx="18" ry="9"/></g><path class="mid" d="M0 320 L0 288 Q120 270 260 261 Q400 252 540 264 Q690 277 840 269 Q1020 260 1200 267 L1200 320 Z"/><path class="snow" opacity=".3" d="M20 284 Q140 277 268 271 L270 276 Q142 282 24 295 Z"/><path class="snow" opacity=".26" d="M48 294 Q170 287 300 281 L302 286 Q172 292 52 305 Z"/><path class="snow" opacity=".24" d="M360 259 Q500 274 640 282 L639 287 Q500 279 361 273 Z"/><path class="snow" opacity=".2" d="M700 276 Q880 292 1040 283 L1041 288 Q880 297 700 290 Z"/><g class="near"><path d="M0 320 L0 300 Q160 289 340 296 Q520 303 700 293 Q880 284 1040 292 Q1130 296 1200 291 L1200 320 Z"/></g><g transform="translate(214,296) scale(0.72)" aria-hidden="true"><path fill="var(--bark)" d="M-9 0 C-7 -18 -5 -30 -4 -40 L5 -40 C6 -30 8 -18 10 0 Z"/><path fill="var(--bark)" d="M-20 0 C-19 -12 -18 -22 -17 -30 L-13.5 -30 C-14.5 -22 -15.5 -12 -16.5 0 Z M18 0 C17 -12 16 -24 15 -32 L18.5 -32 C19.5 -24 20.5 -12 21.5 0 Z M-30 0 C-29.5 -10 -29 -17 -28 -24 L-25 -24 C-26 -17 -26.5 -10 -27 0 Z M29 0 C28.5 -9 28 -16 27 -22 L30 -22 C31 -16 31.5 -9 32 0 Z"/><ellipse cx="0" cy="-54" rx="34" ry="18" fill="var(--tree)"/><ellipse cx="-24" cy="-44" rx="17" ry="11" fill="var(--tree)"/><ellipse cx="24" cy="-45" rx="17" ry="11" fill="var(--tree)"/><ellipse cx="0" cy="-66" rx="20" ry="11" fill="var(--tree)"/></g><g transform="translate(424,302) scale(0.84)" aria-hidden="true"><path fill="var(--tyre)" d="M12 0 L12 -14 L16 -14 L16 0 Z M22 0 L22 -14 L26 -14 L26 0 Z M40 0 L40 -14 L44 -14 L44 0 Z M49 0 L49 -14 L53 -14 L53 0 Z"/><path fill="var(--slate)" d="M6 -14 C3 -31 15 -38 33 -38 C51 -38 61 -31 58 -14 Z"/><path fill="var(--slate)" d="M8 -32 L0 -44 L13 -48 L20 -34 Z"/><path fill="var(--slate)" d="M-4 -47 C-10 -52 -2 -60 7 -57 L17 -50 L8 -42 Z"/><path fill="var(--tyre)" d="M3 -55 C-4 -68 16 -78 36 -70 C40 -68 42 -64 40 -62 C36 -66 22 -70 12 -63 C8 -60 6 -57 6 -53 Z"/><path fill="var(--tyre)" d="M2 -54 C-6 -62 -22 -62 -28 -52 C-30 -49 -28 -46 -26 -47 C-22 -54 -10 -56 -1 -50 Z"/><circle cx="2" cy="-50" r="1.6" fill="var(--tyre)"/><path fill="var(--slate)" d="M56 -20 L63 -26 L65 -23 L58 -17 Z"/></g><g transform="translate(1080,292) scale(0.48)" aria-hidden="true"><path fill="var(--bark)" d="M-9 0 C-7 -18 -5 -30 -4 -40 L5 -40 C6 -30 8 -18 10 0 Z"/><path fill="var(--bark)" d="M-20 0 C-19 -12 -18 -22 -17 -30 L-13.5 -30 C-14.5 -22 -15.5 -12 -16.5 0 Z M18 0 C17 -12 16 -24 15 -32 L18.5 -32 C19.5 -24 20.5 -12 21.5 0 Z M-30 0 C-29.5 -10 -29 -17 -28 -24 L-25 -24 C-26 -17 -26.5 -10 -27 0 Z M29 0 C28.5 -9 28 -16 27 -22 L30 -22 C31 -16 31.5 -9 32 0 Z"/><ellipse cx="0" cy="-54" rx="34" ry="18" fill="var(--tree)"/><ellipse cx="-24" cy="-44" rx="17" ry="11" fill="var(--tree)"/><ellipse cx="24" cy="-45" rx="17" ry="11" fill="var(--tree)"/><ellipse cx="0" cy="-66" rx="20" ry="11" fill="var(--tree)"/></g>';

const JV_BAND='<circle class="orb-glow" cx="1050" cy="54" r="32"/><circle class="orb" cx="1050" cy="54" r="19"/><path class="far" d="M0 152 Q160 148 330 150 Q470 148 600 146 L640 144 Q720 108 772 56 L782 48 L796 48 L806 56 Q858 108 938 144 Q1070 148 1200 146 L1200 200 L0 200 Z"/><g class="snow" opacity=".38" aria-hidden="true"><ellipse cx="790" cy="40" rx="10" ry="5"/><ellipse cx="806" cy="30" rx="13" ry="7"/><ellipse cx="830" cy="22" rx="15" ry="7"/></g><path class="mid" d="M0 200 L0 182 Q120 170 260 164 Q400 158 540 167 Q690 176 840 170 Q1020 163 1200 168 L1200 200 Z"/><path class="snow" opacity=".2" d="M18 178 Q130 167 250 162 L252 167 Q132 172 22 183 Z"/><g class="near"><path d="M0 200 L0 187 Q150 179 320 184 Q490 189 660 182 Q830 175 1000 181 Q1110 184 1200 180 L1200 200 Z"/></g><g transform="translate(232,184) scale(0.42)" aria-hidden="true"><path fill="var(--bark)" d="M-9 0 C-7 -18 -5 -30 -4 -40 L5 -40 C6 -30 8 -18 10 0 Z"/><path fill="var(--bark)" d="M-20 0 C-19 -12 -18 -22 -17 -30 L-13.5 -30 C-14.5 -22 -15.5 -12 -16.5 0 Z M18 0 C17 -12 16 -24 15 -32 L18.5 -32 C19.5 -24 20.5 -12 21.5 0 Z M-30 0 C-29.5 -10 -29 -17 -28 -24 L-25 -24 C-26 -17 -26.5 -10 -27 0 Z M29 0 C28.5 -9 28 -16 27 -22 L30 -22 C31 -16 31.5 -9 32 0 Z"/><ellipse cx="0" cy="-54" rx="34" ry="18" fill="var(--tree)"/><ellipse cx="-24" cy="-44" rx="17" ry="11" fill="var(--tree)"/><ellipse cx="24" cy="-45" rx="17" ry="11" fill="var(--tree)"/><ellipse cx="0" cy="-66" rx="20" ry="11" fill="var(--tree)"/></g><g transform="translate(414,187) scale(0.46)" aria-hidden="true"><path fill="var(--tyre)" d="M12 0 L12 -14 L16 -14 L16 0 Z M22 0 L22 -14 L26 -14 L26 0 Z M40 0 L40 -14 L44 -14 L44 0 Z M49 0 L49 -14 L53 -14 L53 0 Z"/><path fill="var(--slate)" d="M6 -14 C3 -31 15 -38 33 -38 C51 -38 61 -31 58 -14 Z"/><path fill="var(--slate)" d="M8 -32 L0 -44 L13 -48 L20 -34 Z"/><path fill="var(--slate)" d="M-4 -47 C-10 -52 -2 -60 7 -57 L17 -50 L8 -42 Z"/><path fill="var(--tyre)" d="M3 -55 C-4 -68 16 -78 36 -70 C40 -68 42 -64 40 -62 C36 -66 22 -70 12 -63 C8 -60 6 -57 6 -53 Z"/><path fill="var(--tyre)" d="M2 -54 C-6 -62 -22 -62 -28 -52 C-30 -49 -28 -46 -26 -47 C-22 -54 -10 -56 -1 -50 Z"/><circle cx="2" cy="-50" r="1.6" fill="var(--tyre)"/><path fill="var(--slate)" d="M56 -20 L63 -26 L65 -23 L58 -17 Z"/></g>';

function JV_MASCOT(m){
  var base='<path fill="#4E5A61" d="M18 60 L18 46 L23 46 L23 60 Z M28 60 L28 46 L33 46 L33 60 Z M41 60 L41 46 L46 46 L46 60 Z M51 60 L51 46 L56 46 L56 60 Z"/>'
    +'<ellipse cx="37" cy="41" rx="20" ry="13" fill="#79858E"/>'
    +'<path fill="#79858E" d="M20 34 L13 20 L23 17 L30 32 Z"/>'
    +'<path fill="#79858E" d="M8 18 C3 13 10 6 17 9 L25 15 L18 22 Z"/>'
    +'<path fill="none" stroke="#3C464C" stroke-width="3" stroke-linecap="round" d="M11 10 C1 3 -7 9 -4 16"/>'
    +'<path fill="none" stroke="#3C464C" stroke-width="3" stroke-linecap="round" d="M18 8 C16 -3 28 -5 30 4"/>'
    +'<ellipse cx="10" cy="15" rx="3.4" ry="2.6" fill="#93A0A8"/>';
  var f;
  if(m==='cheer')f='<path d="M11 11 Q14 7 17 11" fill="none" stroke="#2f2a24" stroke-width="2.2" stroke-linecap="round"/>'
    +'<path d="M20 14 Q23 10 26 14" fill="none" stroke="#2f2a24" stroke-width="2.2" stroke-linecap="round"/>'
    +'<path d="M12 19 Q16 23 20 19" fill="none" stroke="#2f2a24" stroke-width="2" stroke-linecap="round"/>'
    +'<circle cx="9" cy="21" r="2.8" fill="var(--crimson)" opacity="0.2"/>';
  else if(m==='oops')f='<path d="M10 10 Q13.5 8.5 17 10" fill="none" stroke="#2f2a24" stroke-width="1.5" stroke-linecap="round"/>'
    +'<circle cx="13" cy="14" r="2.3" fill="#2f2a24"/><circle cx="24" cy="16" r="2.3" fill="#2f2a24"/>'
    +'<ellipse cx="18" cy="21" rx="3" ry="2.4" fill="#2f2a24" opacity=".55"/>';
  else f='<circle cx="13" cy="13" r="2.4" fill="#2f2a24"/><circle cx="24" cy="15" r="2.4" fill="#2f2a24"/>'
    +'<path d="M13 20 Q17 23 21 19" fill="none" stroke="#2f2a24" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+base+f+'</svg>';
}

/* Curriculum is built in ROADMAP Phase 4 (stages 4A-4E). */
const JV_LESSONS=[],JV_UNITS=[],JV_SYM={},JV_VOWELS=[],JV_CONS=[],JV_NUMS=[],JV_SRS_SEED=[];

registerPack({
  code:'jv',
  name:'Javanese',
  nativeName:'Basa Jawa',
  ttsLocale:'jv-ID',
  latin:true,
  script:/[A-Za-z]/,
  audioBase:'audio-jv/',
  storageKey:'sajilo_jv',
  brand:{h1:'Learn <em>Javanese</em>'},
  alpha:{native:'Aksara lan swara',vowels:'Swara',cons:'Aksara',nums:'Angka',review:'Ngulang',settings:'Setelan'},
  art:{hero:JV_HERO,band:JV_BAND,mascot:JV_MASCOT},
  voiceTest:v=>/^jv(\b|[-_])/i.test(v.lang)||/javanese/i.test(v.name),
  fbVoiceTest:v=>/^id(\b|[-_])/i.test(v.lang),
  fbVoiceName:'Indonesian',
  lessons:JV_LESSONS,units:JV_UNITS,unitsIntensive:[],sym:JV_SYM,
  vowels:JV_VOWELS,cons:JV_CONS,nums:JV_NUMS,srsSeed:JV_SRS_SEED
});
