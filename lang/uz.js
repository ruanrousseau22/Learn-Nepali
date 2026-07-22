/* ============================================================================
   UZBEK — lang/uz.js
   ----------------------------------------------------------------------------
   A LATIN-SCRIPT pack. That is not cosmetic: `latin:true` changes how audio
   strings are extracted, because a script regex cannot tell Uzbek `rahmat`
   from English `thank you`. See ROADMAP Phase 0 and the `nativeVocab` /
   `packNativeSet` pair in extract_audio_strings.js and index.html. Keep the
   `script` regex too — the validation sweeps still use it.

   ROMANIZATION: Uzbek already writes in Latin, so `vocab[i][1]` is a
   PRONUNCIATION RESPELLING, not a transliteration. Do not just copy the native
   form — it earns its place by explaining the unfamiliar letters:
     x  -> kh   (a rasping h, as in Bach)      q  -> deep k, further back
     o' -> aw   (the turned comma matters)     g' -> a soft French r
     sh ch ng are single sounds; there is no vowel harmony to worry about.

   FREEBIES worth teaching as encouragement: no grammatical gender, no
   articles, and standard Uzbek has largely lost the vowel harmony that other
   Turkic languages keep.

   ART: the Silk Road WITHOUT the architecture — almost every famous Uzbek
   building is a madrasa or a mosque, and the secular-art rule rules them out.
   So the scene is land and trade: rounded dunes stepping back into steppe
   (deliberately not peaks, so it cannot read as Urdu), a Bactrian camel
   caravan receding right, a melon cart, cotton in the near band, mulberry
   trees. Turquoise is the accent — a colour, not a symbol.
   ============================================================================ */

const UZ_HERO='<circle class="orb-glow" cx="250" cy="92" r="72"/><circle class="orb" cx="250" cy="92" r="42"/><g class="hero-stars" aria-hidden="true"><circle cx="140" cy="56" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="300" cy="98" r="1.2"/><circle cx="460" cy="44" r="2"/><circle cx="620" cy="72" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="780" cy="52" r="1.3"/><circle cx="960" cy="88" r="1.5" class="tw" style="animation-delay:2s"/></g><g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g><g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="128" rx="40" ry="15"/><ellipse cx="100" cy="122" rx="28" ry="17"/><ellipse cx="30" cy="125" rx="26" ry="13"/></g><g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="70" rx="28" ry="11"/><ellipse cx="78" cy="65" rx="22" ry="13"/><ellipse cx="26" cy="68" rx="20" ry="10"/></g><path class="far" d="M0 252 Q120 246 250 250 Q370 254 470 240 Q580 226 690 236 Q800 246 900 224 Q1000 204 1090 220 Q1150 230 1200 224 L1200 320 L0 320 Z"/><path class="mid" d="M0 320 L0 292 Q130 276 290 268 Q450 260 610 272 Q770 284 930 272 Q1070 262 1200 268 L1200 320 Z"/><path class="snow" opacity=".18" d="M40 288 Q170 274 300 267 L302 272 Q172 279 44 293 Z"/><path class="snow" opacity=".13" d="M640 275 Q800 285 950 275 L951 280 Q800 290 639 280 Z"/><g class="near"><path d="M0 320 L0 298 Q160 287 340 294 Q520 301 700 292 Q880 283 1040 291 Q1130 295 1200 290 L1200 320 Z"/></g><g class="snow" opacity=".75" aria-hidden="true"><circle cx="120" cy="308" r="2.6"/><circle cx="152" cy="312" r="2.2"/><circle cx="196" cy="306" r="2.4"/><circle cx="240" cy="311" r="2"/><circle cx="286" cy="307" r="2.5"/><circle cx="332" cy="312" r="2.1"/><circle cx="378" cy="308" r="2.4"/></g><g transform="translate(292,296) scale(0.72)" aria-hidden="true"><circle cx="16" cy="-8" r="8" fill="var(--tyre)"/><circle cx="16" cy="-8" r="3" fill="var(--wood)"/><circle cx="48" cy="-8" r="8" fill="var(--tyre)"/><circle cx="48" cy="-8" r="3" fill="var(--wood)"/><path fill="var(--wood)" d="M2 -16 L64 -16 L64 -22 L2 -22 Z"/><path fill="var(--wood)" d="M2 -22 L6 -22 L6 -34 L2 -34 Z M60 -22 L64 -22 L64 -34 L60 -34 Z"/><ellipse cx="18" cy="-27" rx="10" ry="7" fill="var(--melon)"/><ellipse cx="36" cy="-28" rx="10" ry="7" fill="var(--melon)"/><ellipse cx="52" cy="-27" rx="9" ry="6.5" fill="var(--melon)"/><ellipse cx="27" cy="-35" rx="9" ry="6.5" fill="var(--melon)"/><path stroke="var(--tyre)" stroke-width="1.1" fill="none" opacity=".45" d="M12 -30 Q18 -22 24 -30 M30 -31 Q36 -23 42 -31 M22 -38 Q27 -30 32 -38"/></g><g transform="translate(178,292) scale(0.62)" aria-hidden="true"><path fill="var(--bark)" d="M-2.6 0 C-2 -12 -3 -22 -2 -30 L3 -30 C4 -22 3 -12 3.6 0 Z"/><circle cx="0" cy="-40" r="15" fill="var(--tree)"/><circle cx="-13" cy="-32" r="10" fill="var(--tree)"/><circle cx="13" cy="-32" r="10" fill="var(--tree)"/></g><g transform="translate(470,302) scale(0.56)" aria-hidden="true"><path fill="var(--bark)" d="M-2.6 0 C-2 -12 -3 -22 -2 -30 L3 -30 C4 -22 3 -12 3.6 0 Z"/><circle cx="0" cy="-40" r="15" fill="var(--tree)"/><circle cx="-13" cy="-32" r="10" fill="var(--tree)"/><circle cx="13" cy="-32" r="10" fill="var(--tree)"/></g><g transform="translate(792,292) scale(0.72)" aria-hidden="true"><path fill="var(--tyre)" d="M10 0 L10 -17 L13.6 -17 L13.6 0 Z M20 0 L20 -17 L23.6 -17 L23.6 0 Z M38 0 L38 -17 L41.6 -17 L41.6 0 Z M46 0 L46 -17 L49.6 -17 L49.6 0 Z"/><path fill="var(--hide)" d="M6 -17 C4 -30 14 -34 30 -34 C46 -34 56 -30 54 -17 Z"/><path fill="var(--hide)" d="M15 -32 C15 -45 30 -45 30 -32 Z"/><path fill="var(--hide)" d="M33 -32 C33 -47 48 -47 48 -32 Z"/><path fill="var(--hide)" d="M8 -30 L1 -47 L10 -50 L17 -32 Z"/><path fill="var(--hide)" d="M-3 -50 C-7 -54 -1 -60 6 -58 L13 -52 L7 -46 Z"/><path fill="var(--hide)" d="M54 -22 L60 -30 L62 -27 L57 -19 Z"/><circle cx="1" cy="-54" r="1.4" fill="var(--tyre)"/></g><g transform="translate(884,288) scale(0.62)" aria-hidden="true"><path fill="var(--tyre)" d="M10 0 L10 -17 L13.6 -17 L13.6 0 Z M20 0 L20 -17 L23.6 -17 L23.6 0 Z M38 0 L38 -17 L41.6 -17 L41.6 0 Z M46 0 L46 -17 L49.6 -17 L49.6 0 Z"/><path fill="var(--hide)" d="M6 -17 C4 -30 14 -34 30 -34 C46 -34 56 -30 54 -17 Z"/><path fill="var(--hide)" d="M15 -32 C15 -45 30 -45 30 -32 Z"/><path fill="var(--hide)" d="M33 -32 C33 -47 48 -47 48 -32 Z"/><path fill="var(--hide)" d="M8 -30 L1 -47 L10 -50 L17 -32 Z"/><path fill="var(--hide)" d="M-3 -50 C-7 -54 -1 -60 6 -58 L13 -52 L7 -46 Z"/><path fill="var(--hide)" d="M54 -22 L60 -30 L62 -27 L57 -19 Z"/><circle cx="1" cy="-54" r="1.4" fill="var(--tyre)"/></g><g transform="translate(962,286) scale(0.52)" aria-hidden="true"><path fill="var(--tyre)" d="M10 0 L10 -17 L13.6 -17 L13.6 0 Z M20 0 L20 -17 L23.6 -17 L23.6 0 Z M38 0 L38 -17 L41.6 -17 L41.6 0 Z M46 0 L46 -17 L49.6 -17 L49.6 0 Z"/><path fill="var(--hide)" d="M6 -17 C4 -30 14 -34 30 -34 C46 -34 56 -30 54 -17 Z"/><path fill="var(--hide)" d="M15 -32 C15 -45 30 -45 30 -32 Z"/><path fill="var(--hide)" d="M33 -32 C33 -47 48 -47 48 -32 Z"/><path fill="var(--hide)" d="M8 -30 L1 -47 L10 -50 L17 -32 Z"/><path fill="var(--hide)" d="M-3 -50 C-7 -54 -1 -60 6 -58 L13 -52 L7 -46 Z"/><path fill="var(--hide)" d="M54 -22 L60 -30 L62 -27 L57 -19 Z"/><circle cx="1" cy="-54" r="1.4" fill="var(--tyre)"/></g>';

const UZ_BAND='<circle class="orb-glow" cx="1046" cy="58" r="34"/><circle class="orb" cx="1046" cy="58" r="20"/><path class="far" d="M0 154 Q140 148 280 152 Q420 156 540 144 Q660 132 780 142 Q900 152 1010 134 Q1110 120 1200 130 L1200 200 L0 200 Z"/><path class="mid" d="M0 200 L0 180 Q140 168 300 162 Q460 156 620 166 Q780 176 940 166 Q1080 158 1200 164 L1200 200 Z"/><path class="snow" opacity=".18" d="M30 176 Q150 165 270 160 L272 165 Q152 170 34 181 Z"/><g class="near"><path d="M0 200 L0 186 Q150 178 320 183 Q490 188 660 181 Q830 174 1000 180 Q1110 183 1200 179 L1200 200 Z"/></g><g transform="translate(236,184) scale(0.42)" aria-hidden="true"><circle cx="16" cy="-8" r="8" fill="var(--tyre)"/><circle cx="16" cy="-8" r="3" fill="var(--wood)"/><circle cx="48" cy="-8" r="8" fill="var(--tyre)"/><circle cx="48" cy="-8" r="3" fill="var(--wood)"/><path fill="var(--wood)" d="M2 -16 L64 -16 L64 -22 L2 -22 Z"/><path fill="var(--wood)" d="M2 -22 L6 -22 L6 -34 L2 -34 Z M60 -22 L64 -22 L64 -34 L60 -34 Z"/><ellipse cx="18" cy="-27" rx="10" ry="7" fill="var(--melon)"/><ellipse cx="36" cy="-28" rx="10" ry="7" fill="var(--melon)"/><ellipse cx="52" cy="-27" rx="9" ry="6.5" fill="var(--melon)"/><ellipse cx="27" cy="-35" rx="9" ry="6.5" fill="var(--melon)"/><path stroke="var(--tyre)" stroke-width="1.1" fill="none" opacity=".45" d="M12 -30 Q18 -22 24 -30 M30 -31 Q36 -23 42 -31 M22 -38 Q27 -30 32 -38"/></g><g transform="translate(700,182) scale(0.44)" aria-hidden="true"><path fill="var(--tyre)" d="M10 0 L10 -17 L13.6 -17 L13.6 0 Z M20 0 L20 -17 L23.6 -17 L23.6 0 Z M38 0 L38 -17 L41.6 -17 L41.6 0 Z M46 0 L46 -17 L49.6 -17 L49.6 0 Z"/><path fill="var(--hide)" d="M6 -17 C4 -30 14 -34 30 -34 C46 -34 56 -30 54 -17 Z"/><path fill="var(--hide)" d="M15 -32 C15 -45 30 -45 30 -32 Z"/><path fill="var(--hide)" d="M33 -32 C33 -47 48 -47 48 -32 Z"/><path fill="var(--hide)" d="M8 -30 L1 -47 L10 -50 L17 -32 Z"/><path fill="var(--hide)" d="M-3 -50 C-7 -54 -1 -60 6 -58 L13 -52 L7 -46 Z"/><path fill="var(--hide)" d="M54 -22 L60 -30 L62 -27 L57 -19 Z"/><circle cx="1" cy="-54" r="1.4" fill="var(--tyre)"/></g><g transform="translate(764,180) scale(0.38)" aria-hidden="true"><path fill="var(--tyre)" d="M10 0 L10 -17 L13.6 -17 L13.6 0 Z M20 0 L20 -17 L23.6 -17 L23.6 0 Z M38 0 L38 -17 L41.6 -17 L41.6 0 Z M46 0 L46 -17 L49.6 -17 L49.6 0 Z"/><path fill="var(--hide)" d="M6 -17 C4 -30 14 -34 30 -34 C46 -34 56 -30 54 -17 Z"/><path fill="var(--hide)" d="M15 -32 C15 -45 30 -45 30 -32 Z"/><path fill="var(--hide)" d="M33 -32 C33 -47 48 -47 48 -32 Z"/><path fill="var(--hide)" d="M8 -30 L1 -47 L10 -50 L17 -32 Z"/><path fill="var(--hide)" d="M-3 -50 C-7 -54 -1 -60 6 -58 L13 -52 L7 -46 Z"/><path fill="var(--hide)" d="M54 -22 L60 -30 L62 -27 L57 -19 Z"/><circle cx="1" cy="-54" r="1.4" fill="var(--tyre)"/></g><g transform="translate(430,183) scale(0.38)" aria-hidden="true"><path fill="var(--bark)" d="M-2.6 0 C-2 -12 -3 -22 -2 -30 L3 -30 C4 -22 3 -12 3.6 0 Z"/><circle cx="0" cy="-40" r="15" fill="var(--tree)"/><circle cx="-13" cy="-32" r="10" fill="var(--tree)"/><circle cx="13" cy="-32" r="10" fill="var(--tree)"/></g>';

function UZ_MASCOT(m){
  var base='<path fill="#8A6A46" d="M18 60 L18 45 L23 45 L23 60 Z M28 60 L28 45 L33 45 L33 60 Z M40 60 L40 45 L45 45 L45 60 Z M50 60 L50 45 L55 45 L55 60 Z"/>'
    +'<ellipse cx="36" cy="40" rx="20" ry="13" fill="#C08F5C"/>'
    +'<path fill="#C08F5C" d="M22 30 C22 20 34 20 34 30 Z"/><path fill="#C08F5C" d="M38 30 C38 18 51 18 51 30 Z"/>'
    +'<path fill="#C08F5C" d="M20 33 L13 17 L22 14 L29 31 Z"/>'
    +'<path fill="#C08F5C" d="M8 15 C3 10 10 3 17 6 L24 12 L17 19 Z"/>'
    +'<ellipse cx="10" cy="12" rx="3.4" ry="2.6" fill="#D8AC7C"/>';
  var f;
  if(m==='cheer')f='<path d="M11 8 Q14 4 17 8" fill="none" stroke="#2f2a24" stroke-width="2.2" stroke-linecap="round"/>'
    +'<path d="M19 11 Q22 7 25 11" fill="none" stroke="#2f2a24" stroke-width="2.2" stroke-linecap="round"/>'
    +'<path d="M12 15 Q16 19 20 15" fill="none" stroke="#2f2a24" stroke-width="2" stroke-linecap="round"/>'
    +'<circle cx="9" cy="18" r="2.8" fill="var(--crimson)" opacity="0.2"/>';
  else if(m==='oops')f='<path d="M10 7 Q13.5 5.5 17 7" fill="none" stroke="#2f2a24" stroke-width="1.5" stroke-linecap="round"/>'
    +'<circle cx="13" cy="11" r="2.3" fill="#2f2a24"/><circle cx="23" cy="13" r="2.3" fill="#2f2a24"/>'
    +'<ellipse cx="17" cy="18" rx="3" ry="2.4" fill="#2f2a24" opacity=".55"/>';
  else f='<circle cx="13" cy="10" r="2.4" fill="#2f2a24"/><circle cx="23" cy="12" r="2.4" fill="#2f2a24"/>'
    +'<path d="M13 17 Q17 20 21 16" fill="none" stroke="#2f2a24" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+base+f+'</svg>';
}

/* Curriculum is built in ROADMAP Phase 3 (stages 3A-3E). */
const UZ_LESSONS=[],UZ_UNITS=[],UZ_SYM={},UZ_VOWELS=[],UZ_CONS=[],UZ_NUMS=[],UZ_SRS_SEED=[];

registerPack({
  code:'uz',
  name:'Uzbek',
  nativeName:'O\u02bbzbekcha',
  ttsLocale:'uz-UZ',
  latin:true,                 /* see the header — changes audio extraction */
  script:/[A-Za-z\u02bb\u02bc]/,
  audioBase:'audio-uz/',
  storageKey:'sajilo_uz',
  brand:{h1:'Learn <em>Uzbek</em>'},
  alpha:{native:'O\u02bbzbek alifbosi',vowels:'Unlilar',cons:'Undoshlar',nums:'Raqamlar',review:'Takrorlash',settings:'Sozlamalar'},
  art:{hero:UZ_HERO,band:UZ_BAND,mascot:UZ_MASCOT},
  voiceTest:v=>/^uz(\b|[-_])/i.test(v.lang)||/uzbek/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:UZ_LESSONS,units:UZ_UNITS,unitsIntensive:[],sym:UZ_SYM,
  vowels:UZ_VOWELS,cons:UZ_CONS,nums:UZ_NUMS,srsSeed:UZ_SRS_SEED
});
