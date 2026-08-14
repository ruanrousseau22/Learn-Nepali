/* ============================================================================
   XHOSA (isiXhosa) — lang/xh.js
   ----------------------------------------------------------------------------
   The FIRST AFRICAN pack (Aug 2026, with the Asia & Africa rebrand), and the
   first whose audio does NOT come from edge-tts: clips are synthesized locally
   by generate_audio_xh.py with UBC-NLP/Simba-TTS-xho (CC-BY-4.0 — attribution
   ships in terms.html + the Settings voice line). Everything downstream
   (FNV-1a keys, manifest, playFile) is identical to every other pack.

   A LATIN-SCRIPT pack (latin:true), like uz/jv: no alphabet grid zone —
   Zone 1 teaches THE SOUNDS instead, because the clicks are the real
   alphabet here. See XHOSA.md for the full 12-zone plan and build stages.

   ROMANIZATION: the native slot is real Xhosa orthography; vocab[i][1] is a
   PRONUNCIATION RESPELLING — hyphenated syllables, CAPS on the stressed
   (second-to-last) syllable, English-ish vowels:
     a -> ah    e -> eh    i -> ee    o -> aw    u -> oo
   The three click letters are KEPT in the respelling (they are unspellable
   in English); the Sounds zone teaches what they mean:
     c  = dental click (the "tsk-tsk" sound, tongue behind the top teeth)
     x  = lateral click (the "gee-up" sound made at the side teeth)
     q  = post-alveolar click (the loud "cork-pop" from the roof of the mouth)
   Variants taught in s5: +h aspirated (ch/xh/qh), g- voiced, n- nasal.

   FREEBIES worth teaching as encouragement: no grammatical gender, no
   articles, five pure vowels that never change, and dead-regular
   penultimate stress.

   ART: not drawn yet (see XHOSA.md) — Eastern Cape scenery planned: rolling
   green hills to the ocean, aloes and proteas, rondavel homesteads, cattle.
   Until then the engine's default art shows; DO NOT ship without art.

   STATUS: Zone 1 topics s1–s2 built. NOT in LANG_CATALOG yet — the course
   must not become reachable in production until complete. Local testing:
   loadLangScript('xh') + push a catalog entry in the console.
   ============================================================================ */

const XH_VOWELS=[["a","ah"],["e","eh"],["i","ee"],["o","aw"],["u","oo"]];
const XH_CONS=[["c","dental click"],["x","lateral click"],["q","cork-pop click"],["ch","c + puff of air"],["xh","x + puff of air"],["qh","q + puff of air"],["gc","voiced c"],["gx","voiced x"],["gq","voiced q"],["nc","nasal c"],["nx","nasal x"],["nq","nasal q"],["hl","blown l"],["dl","voiced hl"],["tsh","ch as in church"],["ny","ny as in canyon"],["ng","ng as in singer"]];
const XH_NUMS=[["inye","1"],["zimbini","2"],["zintathu","3"],["zine","4"],["zintlanu","5"],["zintandathu","6"],["sixhenxe","7"],["sibhozo","8"],["lithoba","9"],["lishumi","10"]];

const XH_LESSONS=[

/* ---------- s1 · Sounds you already know ---------- */
{"id":"xh_s1","title":"Sounds you already know","step":"learn","meta":"Five pure vowels and your first real words","vocab":[["ewe","EH-weh","yes"],["hayi","HAH-yee","no"],["hamba","HAHM-bah","go!"],["iza","EE-zah","come!"],["imoto","ee-MAW-taw","car"],["into","een-TAW","thing"]],"ex":[
{"t":"note","tag":"Start here","q":"You can already read Xhosa","body":"<p>Xhosa is written in the <b>Latin alphabet</b> — you can read it from the first minute. It has exactly <b>five vowel sounds</b>, and they never change: <b>a</b> as in f<i>a</i>ther, <b>e</b> as in b<i>e</i>d, <b>i</b> as in s<i>ee</i>, <b>o</b> as in l<i>aw</i>, <b>u</b> as in t<i>oo</i>.</p><p>One more rule carries you a long way: the stress is almost always on the <b>second-to-last syllable</b>. Listen for it in the first two words every conversation needs.</p>","eg":[["ewe","EH-weh","yes"],["hayi","HAH-yee","no"]]},
{"t":"mc","q":"Which one means yes?","o":["ewe","hayi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hayi","o":["hayi","ewe"],"a":0},
{"t":"note","tag":"Two commands","q":"Go and come","body":"<p>Xhosa verbs can stand alone as commands. <b>Hamba!</b> is <i>go!</i> and <b>Iza!</b> is <i>come!</i> — you will hear both across every street in the Eastern Cape.</p><p>Notice how every syllable ends in a vowel: <b>ha-mba</b>, <b>i-za</b>. That open rhythm is the sound of the whole language.</p>","eg":[["hamba","HAHM-bah","go!"],["iza","EE-zah","come!"]]},
{"t":"mc","q":"What does hamba mean?","o":["go!","come!","yes"],"a":0},
{"t":"li","q":"Which command do you hear?","say":"iza","o":["iza","hamba"],"a":0},
{"t":"note","tag":"First nouns","q":"Little words in front","body":"<p>Xhosa nouns carry a small prefix that tells you what kind of word they are — you will meet these <b>noun classes</b> gently, one at a time. Many everyday things begin with <b>i-</b>: <b>imoto</b> (car — borrowed from <i>motor</i>) and <b>into</b> (thing).</p>","eg":[["imoto","ee-MAW-taw","car"],["into","een-TAW","thing"]]},
{"t":"mc","q":"imoto means…","o":["car","thing","go!"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"imoto","o":["imoto","into"],"a":0}
]},
{"id":"xh_s1_2","title":"Hearing the vowels","step":"recognize","meta":"Pick the right word by ear and by eye","vocab":[],"ex":[
{"t":"mc","q":"Which one means no?","o":["hayi","ewe","iza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ewe","o":["ewe","hayi","iza"],"a":0},
{"t":"mc","q":"What does into mean?","o":["thing","car","come!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hamba","o":["hamba","iza","imoto"],"a":0},
{"t":"mc","q":"Which one means come!?","o":["iza","hamba","ewe"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"into","o":["into","imoto","ewe"],"a":0}
]},
{"id":"xh_s1_3","title":"Building with sounds","step":"build","meta":"Spell what you hear","vocab":[],"ex":[
{"t":"fill","q":"Complete the word for car","s":"i___to","o":["mo","ma","mu"],"a":0},
{"t":"wb","q":"Build the word: yes","a":["ewe"],"pool":["ewe","hayi","iza"]},
{"t":"fill","q":"Complete the command: go!","s":"ha___a","o":["mb","nd","ng"],"a":0},
{"t":"wb","q":"Build the word: thing","a":["into"],"pool":["into","imoto","ewe"]},
{"t":"mc","q":"Which word is stressed EH-weh?","o":["ewe","hayi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iza","o":["iza","into"],"a":0}
]},
{"id":"xh_s1_4","title":"Vowels in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ewe","yes"],["hayi","no"],["hamba","go!"],["iza","come!"]]},
{"t":"mc","q":"Someone calls Iza! — they want you to…","o":["come","go","stop"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hayi","o":["hayi","hamba","ewe"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["imoto","car"],["into","thing"]]},
{"t":"mc","q":"What does hamba mean?","o":["go!","come!","thing"],"a":0}
]},
{"id":"xh_s1_5","title":"Checkpoint: first sounds","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Which one means yes?","o":["ewe","hayi","iza"],"a":0},
{"t":"mc","q":"What does imoto mean?","o":["car","thing","door"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hamba","o":["hamba","iza","hayi"],"a":0},
{"t":"mc","q":"Which one means thing?","o":["into","imoto","ewe"],"a":0},
{"t":"mc","q":"Someone says Hayi! — they mean…","o":["no","yes","come"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ewe","o":["ewe","into","iza"],"a":0}
]},

/* ---------- s2 · The c click ---------- */
{"id":"xh_s2","title":"The c click","step":"learn","meta":"The tsk-tsk sound — your first click","vocab":[["cela","CEH-lah","ask for"],["cula","COO-lah","sing"],["cima","CEE-mah","switch off"],["icici","ee-CEE-cee","earring"],["ucango","oo-CAH-ngaw","door"],["cinga","CEE-ngah","think"]],"ex":[
{"t":"note","tag":"The dental click","q":"You already make this sound","body":"<p>The letter <b>c</b> in Xhosa is the <b>dental click</b> — the exact <i>tsk-tsk</i> sound English speakers make when disappointed. Press the tip of your tongue behind your top teeth and pull it away sharply.</p><p>Every <b>c</b> you see in this course is that click — never an English k or s. Listen first, then copy.</p>","eg":[["cela","CEH-lah","ask for"],["cula","COO-lah","sing"]]},
{"t":"li","q":"Which word do you hear?","say":"cela","o":["cela","cula"],"a":0},
{"t":"mc","q":"What does cula mean?","o":["sing","ask for","think"],"a":0},
{"t":"note","tag":"Click practice","q":"Clicks in the middle of words","body":"<p>Clicks are ordinary letters — they turn up mid-word too. <b>icici</b> (earring) has two of them, and <b>cima</b> (switch off) starts with one. Say them slowly: ee-CLICK-ee-CLICK-ee.</p>","eg":[["cima","CEE-mah","switch off"],["icici","ee-CEE-cee","earring"]]},
{"t":"li","q":"Which word do you hear?","say":"icici","o":["icici","cima"],"a":0},
{"t":"mc","q":"cima means…","o":["switch off","earring","sing"],"a":0},
{"t":"note","tag":"Two more","q":"A door and a thought","body":"<p><b>ucango</b> is the door and <b>cinga</b> is to think. Both begin with the same tsk click. By the end of this topic the c click will feel like any other letter — that is the goal.</p>","eg":[["ucango","oo-CAH-ngaw","door"],["cinga","CEE-ngah","think"]]},
{"t":"li","q":"Which word do you hear?","say":"ucango","o":["ucango","cinga"],"a":0},
{"t":"mc","q":"Which one means think?","o":["cinga","cela","icici"],"a":0}
]},
{"id":"xh_s2_2","title":"Hearing the c click","step":"recognize","meta":"Tell click words apart by ear","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"cula","o":["cula","cela","cima"],"a":0},
{"t":"mc","q":"What does icici mean?","o":["earring","door","car"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"cinga","o":["cinga","cima","ucango"],"a":0},
{"t":"mc","q":"Which one means ask for?","o":["cela","cula","cinga"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"cima","o":["cima","icici","cula"],"a":0},
{"t":"mc","q":"ucango means…","o":["door","earring","switch off"],"a":0}
]},
{"id":"xh_s2_3","title":"Building click words","step":"build","meta":"Assemble the clicks yourself","vocab":[],"ex":[
{"t":"fill","q":"Complete: sing","s":"___ula","o":["c","k","s"],"a":0},
{"t":"wb","q":"Build the word: earring","a":["icici"],"pool":["icici","ucango","cela"]},
{"t":"fill","q":"Complete: door","s":"uca___o","o":["ng","mb","nd"],"a":0},
{"t":"wb","q":"Build the word: think","a":["cinga"],"pool":["cinga","cima","cula"]},
{"t":"li","q":"Which word do you hear?","say":"cela","o":["cela","cinga"],"a":0},
{"t":"mc","q":"Which word means switch off?","o":["cima","cela","icici"],"a":0}
]},
{"id":"xh_s2_4","title":"Clicks in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["cela","ask for"],["cula","sing"],["cima","switch off"]]},
{"t":"li","q":"Which word do you hear?","say":"ucango","o":["ucango","icici","cula"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["icici","earring"],["ucango","door"],["cinga","think"]]},
{"t":"mc","q":"The tsk-tsk sound behind the top teeth is written…","o":["c","x","q"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"cula","o":["cula","cima","cinga"],"a":0}
]},
{"id":"xh_s2_5","title":"Checkpoint: the c click","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does cela mean?","o":["ask for","sing","think"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"cinga","o":["cinga","cela","cula"],"a":0},
{"t":"mc","q":"Which one means earring?","o":["icici","ucango","cima"],"a":0},
{"t":"mc","q":"What does cima mean?","o":["switch off","door","ask for"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"icici","o":["icici","ucango","cinga"],"a":0},
{"t":"mc","q":"Review — which one means car?","o":["imoto","into","icici"],"a":0}
]}

/* NEXT (see XHOSA.md): s3 the x click · s4 the q click · s5 click variants ·
   s6 special consonants (hl, dl, tsh, ny) · s7 sounds together + greeting
   preview — then Zone 2, Greetings & people. */
];

const XH_UNITS=[
{"n":1,"t":"The sounds of Xhosa","d":"Vowels, clicks and the rhythm of the language","lessons":["xh_s1","xh_s1_2","xh_s1_3","xh_s1_4","xh_s1_5","xh_s2","xh_s2_2","xh_s2_3","xh_s2_4","xh_s2_5"]}
];

const XH_SYM={"xh_s1":"a e i","xh_s2":"c"};

const XH_SRS_SEED=[];

registerPack({
  code:'xh',
  name:'Xhosa',
  nativeName:'isiXhosa',
  ttsLocale:'xh-ZA',
  latin:true,                 /* see the header — changes audio extraction */
  script:/[A-Za-z]/,
  audioBase:'audio-xh/',
  storageKey:'sajilo_xh',
  brand:{h1:'Learn <em>Xhosa</em>'},
  alpha:{native:'Iimpawu zesiXhosa',vowels:'Izikhamiso',cons:'Oonobumba',nums:'Amanani',review:'Uphononongo',settings:'Iisetingi'},
  voiceTest:v=>/^xh(\b|[-_])/i.test(v.lang)||/xhosa/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:XH_LESSONS,units:XH_UNITS,unitsIntensive:[],sym:XH_SYM,
  vowels:XH_VOWELS,cons:XH_CONS,nums:XH_NUMS,srsSeed:XH_SRS_SEED
});
