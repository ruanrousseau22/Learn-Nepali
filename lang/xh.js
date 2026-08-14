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

   STATUS: Zone 1 complete (s1–s7, 35 lessons). NOT in LANG_CATALOG yet — the course
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
]},

/* ---------- s3 · The x click ---------- */
{"id":"xh_s3","title":"The x click","step":"learn","meta":"The gee-up sound — made at the side teeth","vocab":[["xela","XEH-lah","tell"],["uxolo","oo-XAW-law","sorry"],["ixesha","ee-XEH-shah","time"],["xoxa","XAW-xah","chat"],["ixoxo","ee-XAW-xaw","frog"]],"ex":[
{"t":"note","tag":"The lateral click","q":"The sound you make to a horse","body":"<p>The letter <b>x</b> is the <b>lateral click</b> — the sharp <i>gee-up</i> sound riders make to a horse, made by pulling the tongue away from the SIDE teeth. It is never an English ks.</p><p>Your most important x word is <b>uxolo</b> — <i>sorry</i>, also <i>excuse me</i>. You will use it every day.</p>","eg":[["uxolo","oo-XAW-law","sorry"],["xela","XEH-lah","tell"]]},
{"t":"li","q":"Which word do you hear?","say":"uxolo","o":["uxolo","xela"],"a":0},
{"t":"mc","q":"What does uxolo mean?","o":["sorry","tell","time"],"a":0},
{"t":"note","tag":"More x words","q":"Time, chat and a frog","body":"<p><b>ixesha</b> is <i>time</i>, <b>xoxa</b> is <i>to chat</i>, and <b>ixoxo</b> — with two clicks — is a <i>frog</i>. Try the frog word slowly: ee-CLICK-aw-CLICK-aw.</p>","eg":[["ixesha","ee-XEH-shah","time"],["xoxa","XAW-xah","chat"],["ixoxo","ee-XAW-xaw","frog"]]},
{"t":"li","q":"Which word do you hear?","say":"ixoxo","o":["ixoxo","xoxa","ixesha"],"a":0},
{"t":"mc","q":"ixesha means…","o":["time","frog","chat"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"xela","o":["xela","xoxa"],"a":0},
{"t":"mc","q":"Which one means chat?","o":["xoxa","xela","uxolo"],"a":0}
]},
{"id":"xh_s3_2","title":"Hearing the x click","step":"recognize","meta":"c and x side by side","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"ixesha","o":["ixesha","ixoxo","uxolo"],"a":0},
{"t":"mc","q":"What does xela mean?","o":["tell","chat","sorry"],"a":0},
{"t":"li","q":"c or x — which word do you hear?","say":"cela","o":["cela","xela"],"a":0},
{"t":"mc","q":"Which one means frog?","o":["ixoxo","ixesha","icici"],"a":0},
{"t":"li","q":"c or x — which word do you hear?","say":"xela","o":["xela","cela"],"a":0},
{"t":"mc","q":"Someone bumps you and says Uxolo! — they mean…","o":["sorry","hello","goodbye"],"a":0}
]},
{"id":"xh_s3_3","title":"Building x words","step":"build","meta":"Assemble the lateral click","vocab":[],"ex":[
{"t":"fill","q":"Complete: sorry","s":"u___olo","o":["x","c","q"],"a":0},
{"t":"wb","q":"Build the word: time","a":["ixesha"],"pool":["ixesha","ixoxo","xela"]},
{"t":"fill","q":"Complete: chat","s":"xo___a","o":["x","c","k"],"a":0},
{"t":"wb","q":"Build the word: frog","a":["ixoxo"],"pool":["ixoxo","ixesha","uxolo"]},
{"t":"li","q":"Which word do you hear?","say":"xoxa","o":["xoxa","xela","ixoxo"],"a":0}
]},
{"id":"xh_s3_4","title":"x in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["xela","tell"],["uxolo","sorry"],["ixesha","time"]]},
{"t":"li","q":"Which word do you hear?","say":"uxolo","o":["uxolo","ixoxo","xoxa"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["xoxa","chat"],["ixoxo","frog"]]},
{"t":"mc","q":"The gee-up click made at the side teeth is written…","o":["x","c","q"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"ixesha","o":["ixesha","xela","icici"],"a":0}
]},
{"id":"xh_s3_5","title":"Checkpoint: the x click","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ixesha mean?","o":["time","frog","door"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"xela","o":["xela","xoxa","uxolo"],"a":0},
{"t":"mc","q":"Which one means sorry?","o":["uxolo","xoxa","enkosi"],"a":0},
{"t":"mc","q":"What does ixoxo mean?","o":["frog","time","earring"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"ixoxo","o":["ixoxo","ixesha","cula"],"a":0},
{"t":"mc","q":"Review — which one means sing?","o":["cula","cela","xela"],"a":0}
]},

/* ---------- s4 · The q click ---------- */
{"id":"xh_s4","title":"The q click","step":"learn","meta":"The cork-pop — the loudest click","vocab":[["qala","QAH-lah","begin"],["qonda","QAWN-dah","understand"],["andiqondi","ahn-dee-QAWN-dee","I do not understand"],["iqanda","ee-QAHN-dah","egg"],["iqela","ee-QEH-lah","team"]],"ex":[
{"t":"note","tag":"The cork-pop click","q":"The loudest click of the three","body":"<p>The letter <b>q</b> is the <b>post-alveolar click</b> — pull the whole tongue down sharply from the roof of the mouth, like a cork popping from a bottle. It is the loudest and deepest of the three clicks.</p><p>Your most useful q word from day one: <b>andiqondi</b> — <i>I do not understand</i>.</p>","eg":[["qonda","QAWN-dah","understand"],["andiqondi","ahn-dee-QAWN-dee","I do not understand"]]},
{"t":"li","q":"Which one do you hear?","say":"andiqondi","o":["andiqondi","qonda"],"a":0},
{"t":"mc","q":"What does andiqondi mean?","o":["I do not understand","understand","begin"],"a":0},
{"t":"note","tag":"More q words","q":"Begin, an egg and a team","body":"<p><b>qala</b> is <i>to begin</i>, <b>iqanda</b> is <i>an egg</i>, and <b>iqela</b> is <i>a team</i> — the word you will hear shouted at every soccer match in Khayelitsha.</p>","eg":[["qala","QAH-lah","begin"],["iqanda","ee-QAHN-dah","egg"],["iqela","ee-QEH-lah","team"]]},
{"t":"li","q":"Which word do you hear?","say":"iqanda","o":["iqanda","iqela","qala"],"a":0},
{"t":"mc","q":"iqela means…","o":["team","egg","begin"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"qala","o":["qala","qonda"],"a":0}
]},
{"id":"xh_s4_2","title":"Hearing the q click","step":"recognize","meta":"All three clicks side by side","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"qonda","o":["qonda","qala","iqanda"],"a":0},
{"t":"mc","q":"What does iqanda mean?","o":["egg","team","frog"],"a":0},
{"t":"li","q":"c, x or q — which word do you hear?","say":"qala","o":["qala","cula","xela"],"a":0},
{"t":"mc","q":"Which one means begin?","o":["qala","qonda","iqela"],"a":0},
{"t":"li","q":"c, x or q — which word do you hear?","say":"cima","o":["cima","xela","qala"],"a":0},
{"t":"mc","q":"You are lost in a conversation. You say…","o":["Andiqondi","Iqanda","Qala"],"a":0}
]},
{"id":"xh_s4_3","title":"Building q words","step":"build","meta":"Assemble the cork-pop","vocab":[],"ex":[
{"t":"fill","q":"Complete: egg","s":"i___anda","o":["q","c","x"],"a":0},
{"t":"wb","q":"Build the phrase: I do not understand","a":["andiqondi"],"pool":["andiqondi","qonda","qala"]},
{"t":"fill","q":"Complete: team","s":"iqe___a","o":["l","nd","ng"],"a":0},
{"t":"wb","q":"Build the word: begin","a":["qala"],"pool":["qala","iqela","iqanda"]},
{"t":"li","q":"Which word do you hear?","say":"iqela","o":["iqela","iqanda","qonda"],"a":0}
]},
{"id":"xh_s4_4","title":"q in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["qala","begin"],["qonda","understand"],["iqanda","egg"]]},
{"t":"li","q":"Which word do you hear?","say":"andiqondi","o":["andiqondi","iqela","qala"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["andiqondi","I do not understand"],["iqela","team"]]},
{"t":"mc","q":"The loud cork-pop click from the roof of the mouth is written…","o":["q","c","x"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"qonda","o":["qonda","qala","ucango"],"a":0}
]},
{"id":"xh_s4_5","title":"Checkpoint: the q click","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does qonda mean?","o":["understand","begin","tell"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"iqanda","o":["iqanda","iqela","ixoxo"],"a":0},
{"t":"mc","q":"Which one means team?","o":["iqela","iqanda","imoto"],"a":0},
{"t":"mc","q":"When you do not follow what someone said, you say…","o":["Andiqondi","Uxolo","Hamba"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"qala","o":["qala","cela","xela"],"a":0},
{"t":"mc","q":"Review — which one means sorry?","o":["uxolo","ixesha","cinga"],"a":0}
]},

/* ---------- s5 · Click variants ---------- */
{"id":"xh_s5","title":"Clicks with company","step":"learn","meta":"Aspirated, voiced and nasal clicks — and the name isiXhosa","vocab":[["isiXhosa","ee-see-XHAW-sah","the Xhosa language"],["nceda","NCEH-dah","please"],["incwadi","een-CWAH-dee","book"],["iqhude","ee-QHOO-deh","rooster"],["umngqusho","oom-NGQOO-shaw","samp and beans"],["ingca","een-GCAH","grass"]],"ex":[
{"t":"note","tag":"Clicks change clothes","q":"The h, the g and the n","body":"<p>Each click has three companions. Add <b>h</b> and it comes with a puff of air: the <b>xh</b> in <b>isiXhosa</b> — the name of the language itself! Add <b>n</b> and it hums through the nose: <b>nceda</b>, <i>please</i>. Add <b>g</b> and it turns deep and voiced: <b>ingca</b>, <i>grass</i>.</p><p>Do not memorise the system — just listen and copy, word by word.</p>","eg":[["isiXhosa","ee-see-XHAW-sah","the Xhosa language"],["nceda","NCEH-dah","please"],["ingca","een-GCAH","grass"]]},
{"t":"li","q":"Which one do you hear?","say":"isiXhosa","o":["isiXhosa","nceda"],"a":0},
{"t":"mc","q":"What does nceda mean?","o":["please","book","grass"],"a":0},
{"t":"note","tag":"Real words, real food","q":"A book, a rooster and lunch","body":"<p><b>incwadi</b> is <i>a book</i>, <b>iqhude</b> is <i>a rooster</i> (hear the puff on qh), and <b>umngqusho</b> — samp and beans — is the beloved Xhosa dish you will be offered in any Eastern Cape home. Say it slowly: oom-NGQOO-shaw. If you can order umngqusho, your clicks have arrived.</p>","eg":[["incwadi","een-CWAH-dee","book"],["iqhude","ee-QHOO-deh","rooster"],["umngqusho","oom-NGQOO-shaw","samp and beans"]]},
{"t":"li","q":"Which word do you hear?","say":"umngqusho","o":["umngqusho","incwadi","iqhude"],"a":0},
{"t":"mc","q":"incwadi means…","o":["book","rooster","samp and beans"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"ingca","o":["ingca","nceda"],"a":0},
{"t":"mc","q":"Which one means the Xhosa language?","o":["isiXhosa","umngqusho","incwadi"],"a":0}
]},
{"id":"xh_s5_2","title":"Hearing the variants","step":"recognize","meta":"Plain click or dressed-up click?","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"iqhude","o":["iqhude","iqanda","iqela"],"a":0},
{"t":"mc","q":"What does umngqusho mean?","o":["samp and beans","grass","egg"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"nceda","o":["nceda","cela","ingca"],"a":0},
{"t":"mc","q":"Which one means grass?","o":["ingca","incwadi","ixesha"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"incwadi","o":["incwadi","ingca","nceda"],"a":0},
{"t":"mc","q":"To say please when asking for something, use…","o":["nceda","uxolo","ewe"],"a":0}
]},
{"id":"xh_s5_3","title":"Building variant words","step":"build","meta":"Spell the dressed-up clicks","vocab":[],"ex":[
{"t":"fill","q":"Complete the language name","s":"isi___osa","o":["Xh","X","Q"],"a":0},
{"t":"wb","q":"Build the word: please","a":["nceda"],"pool":["nceda","ingca","cela"]},
{"t":"fill","q":"Complete: book","s":"i___wadi","o":["nc","ng","nq"],"a":0},
{"t":"wb","q":"Build the word: samp and beans","a":["umngqusho"],"pool":["umngqusho","incwadi","iqhude"]},
{"t":"li","q":"Which word do you hear?","say":"isiXhosa","o":["isiXhosa","incwadi","umngqusho"],"a":0}
]},
{"id":"xh_s5_4","title":"Variants in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["isiXhosa","the Xhosa language"],["nceda","please"],["incwadi","book"]]},
{"t":"li","q":"Which word do you hear?","say":"iqhude","o":["iqhude","umngqusho","ingca"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["iqhude","rooster"],["umngqusho","samp and beans"],["ingca","grass"]]},
{"t":"mc","q":"The xh in isiXhosa is the x click plus…","o":["a puff of air","a hum through the nose","a deep voiced sound"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"nceda","o":["nceda","incwadi","isiXhosa"],"a":0}
]},
{"id":"xh_s5_5","title":"Checkpoint: click variants","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does iqhude mean?","o":["rooster","egg","book"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"umngqusho","o":["umngqusho","ingca","iqhude"],"a":0},
{"t":"mc","q":"Which one means please?","o":["nceda","uxolo","enkosi"],"a":0},
{"t":"mc","q":"What does ingca mean?","o":["grass","samp and beans","team"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"incwadi","o":["incwadi","nceda","iqanda"],"a":0},
{"t":"mc","q":"Review — which one means I do not understand?","o":["andiqondi","umngqusho","xoxa"],"a":0}
]},

/* ---------- s6 · Special consonants ---------- */
{"id":"xh_s6","title":"The special consonants","step":"learn","meta":"hl, dl, ty, nj, ny — the last new sounds","vocab":[["hlala","HLAH-lah","sit down"],["indlu","EEN-dloo","house"],["ukutya","oo-KOO-tyah","food"],["inja","EEN-jah","dog"],["inyama","ee-NYAH-mah","meat"],["tshintsha","TSHEEN-tshah","change"]],"ex":[
{"t":"note","tag":"The blown l","q":"hl — an l made of air","body":"<p><b>hl</b> is an <i>l</i> you blow instead of voice — put your tongue in the l position and push air past the sides, no humming. <b>hlala</b> means <i>sit down</i> or <i>stay</i>. Its voiced twin <b>dl</b> hums: <b>indlu</b>, <i>house</i>.</p>","eg":[["hlala","HLAH-lah","sit down"],["indlu","EEN-dloo","house"]]},
{"t":"li","q":"Which word do you hear?","say":"hlala","o":["hlala","indlu"],"a":0},
{"t":"mc","q":"What does indlu mean?","o":["house","sit down","food"],"a":0},
{"t":"note","tag":"Soft sounds","q":"ty, nj and ny","body":"<p><b>ty</b> is a very soft t against the roof of the mouth: <b>ukutya</b>, <i>food</i>. <b>nj</b> as in <b>inja</b> (<i>dog</i>) and <b>ny</b> as in <b>inyama</b> (<i>meat</i>) are like the ny in canyon. And <b>tsh</b> is simply ch: <b>tshintsha</b>, <i>to change</i> — also what Cape Town taxi drivers shout about your coins.</p>","eg":[["ukutya","oo-KOO-tyah","food"],["inja","EEN-jah","dog"],["inyama","ee-NYAH-mah","meat"]]},
{"t":"li","q":"Which word do you hear?","say":"ukutya","o":["ukutya","inyama","inja"],"a":0},
{"t":"mc","q":"inyama means…","o":["meat","dog","house"],"a":0},
{"t":"note","tag":"One more","q":"tsh is just ch","body":"<p><b>tsh</b> is the easiest of the lot — the ch of <i>church</i>. <b>tshintsha</b> means <i>to change</i>: change seats, change plans, and the small change a taxi conductor asks for.</p>","eg":[["tshintsha","TSHEEN-tshah","change"]]},
{"t":"li","q":"Which word do you hear?","say":"tshintsha","o":["tshintsha","hlala"],"a":0},
{"t":"mc","q":"Which one means change?","o":["tshintsha","hlala","ukutya"],"a":0}
]},
{"id":"xh_s6_2","title":"Hearing the special sounds","step":"recognize","meta":"Fine ears for fine sounds","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"indlu","o":["indlu","inja","inyama"],"a":0},
{"t":"mc","q":"What does hlala mean?","o":["sit down","change","house"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"inja","o":["inja","inyama","indlu"],"a":0},
{"t":"mc","q":"Which one means food?","o":["ukutya","inyama","umngqusho"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"inyama","o":["inyama","inja","ukutya"],"a":0},
{"t":"mc","q":"What does inja mean?","o":["dog","meat","frog"],"a":0}
]},
{"id":"xh_s6_3","title":"Building special sounds","step":"build","meta":"Spell hl, dl and friends","vocab":[],"ex":[
{"t":"fill","q":"Complete: sit down","s":"___ala","o":["hl","dl","tsh"],"a":0},
{"t":"wb","q":"Build the word: house","a":["indlu"],"pool":["indlu","inja","hlala"]},
{"t":"fill","q":"Complete: food","s":"uku___a","o":["ty","tsh","ny"],"a":0},
{"t":"wb","q":"Build the word: meat","a":["inyama"],"pool":["inyama","ukutya","inja"]},
{"t":"li","q":"Which word do you hear?","say":"hlala","o":["hlala","tshintsha","indlu"],"a":0}
]},
{"id":"xh_s6_4","title":"Special sounds in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["hlala","sit down"],["indlu","house"],["ukutya","food"]]},
{"t":"li","q":"Which word do you hear?","say":"inja","o":["inja","indlu","hlala"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["inja","dog"],["inyama","meat"],["tshintsha","change"]]},
{"t":"mc","q":"The blown l with no humming is written…","o":["hl","dl","ny"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"ukutya","o":["ukutya","tshintsha","inyama"],"a":0}
]},
{"id":"xh_s6_5","title":"Checkpoint: special sounds","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ukutya mean?","o":["food","meat","house"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"indlu","o":["indlu","inyama","iqanda"],"a":0},
{"t":"mc","q":"Which one means dog?","o":["inja","inyama","iqhude"],"a":0},
{"t":"mc","q":"What does tshintsha mean?","o":["change","sit down","begin"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"hlala","o":["hlala","indlu","ukutya"],"a":0},
{"t":"mc","q":"Review — which one means book?","o":["incwadi","ingca","into"],"a":0}
]},

/* ---------- s7 · Sounds together: first greetings ---------- */
{"id":"xh_s7","title":"Your first greetings","step":"learn","meta":"Put the sounds to work — Molo!","vocab":[["molo","MAW-law","hello (to one person)"],["molweni","mawl-WEH-nee","hello (to several people)"],["enkosi","ehn-KAW-see","thank you"],["kakhulu","kah-KHOO-loo","very much"],["hamba kakuhle","HAHM-bah kah-KOO-hleh","go well (goodbye to the one leaving)"],["sala kakuhle","SAH-lah kah-KOO-hleh","stay well (goodbye to the one staying)"]],"ex":[
{"t":"note","tag":"The golden rule","q":"Greet first, always","body":"<p>In Xhosa culture you greet <b>before anything else</b> — before a question, before a purchase, before asking directions. Skipping the greeting is genuinely rude.</p><p><b>Molo!</b> to one person, <b>Molweni!</b> to more than one. Your sounds are ready — every letter here is one you know.</p>","eg":[["molo","MAW-law","hello (to one person)"],["molweni","mawl-WEH-nee","hello (to several people)"]]},
{"t":"li","q":"Which greeting do you hear?","say":"molweni","o":["molweni","molo"],"a":0},
{"t":"mc","q":"You walk up to THREE people. You say…","o":["Molweni","Molo","Enkosi"],"a":0},
{"t":"note","tag":"Thanks","q":"Enkosi — and enkosi kakhulu","body":"<p><b>Enkosi</b> is <i>thank you</i>; add <b>kakhulu</b> (<i>very much</i>) and you have warm, full thanks: <b>Enkosi kakhulu!</b> Notice the aspirated kh — a k with a puff of air, not a click.</p>","eg":[["enkosi","ehn-KAW-see","thank you"],["kakhulu","kah-KHOO-loo","very much"]]},
{"t":"li","q":"Which word do you hear?","say":"enkosi","o":["enkosi","kakhulu"],"a":0},
{"t":"mc","q":"What does kakhulu add to enkosi?","o":["very much","please","again"],"a":0},
{"t":"note","tag":"Two goodbyes","q":"Who stays says one, who leaves says the other","body":"<p>Xhosa goodbyes come in a pair. The person STAYING says <b>Hamba kakuhle</b> — <i>go well</i> — to the one leaving. The person LEAVING says <b>Sala kakuhle</b> — <i>stay well</i> — to the one staying. Think about who is moving and you will never mix them up.</p>","eg":[["hamba kakuhle","HAHM-bah kah-KOO-hleh","go well"],["sala kakuhle","SAH-lah kah-KOO-hleh","stay well"]]},
{"t":"li","q":"Which goodbye do you hear?","say":"hamba kakuhle","o":["hamba kakuhle","sala kakuhle"],"a":0},
{"t":"mc","q":"You are LEAVING. To the friend staying behind you say…","o":["Sala kakuhle","Hamba kakuhle","Molweni"],"a":0}
]},
{"id":"xh_s7_2","title":"Hearing the greetings","step":"recognize","meta":"One person or many? Coming or going?","vocab":[],"ex":[
{"t":"li","q":"Which greeting do you hear?","say":"molo","o":["molo","molweni","enkosi"],"a":0},
{"t":"mc","q":"What does enkosi mean?","o":["thank you","hello","goodbye"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"sala kakuhle","o":["sala kakuhle","hamba kakuhle"],"a":0},
{"t":"mc","q":"Molo is for…","o":["one person","several people","only children"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"kakhulu","o":["kakhulu","enkosi","molo"],"a":0},
{"t":"mc","q":"Your friend is walking away. You call…","o":["Hamba kakuhle","Sala kakuhle","Andiqondi"],"a":0}
]},
{"id":"xh_s7_3","title":"Building greetings","step":"build","meta":"Assemble hello, thanks and goodbye","vocab":[],"ex":[
{"t":"fill","q":"Complete the greeting to a group","s":"Mol___ni","o":["we","o","a"],"a":0},
{"t":"wb","q":"Build: thank you very much","a":["enkosi","kakhulu"],"pool":["enkosi","kakhulu","molo"]},
{"t":"fill","q":"Complete: go well","s":"Hamba kaku___e","o":["hl","dl","tsh"],"a":0},
{"t":"wb","q":"Build: stay well","a":["sala","kakuhle"],"pool":["sala","kakuhle","hamba"]},
{"t":"li","q":"Which one do you hear?","say":"molweni","o":["molweni","molo","kakhulu"],"a":0}
]},
{"id":"xh_s7_4","title":"Greetings in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["molo","hello (to one person)"],["molweni","hello (to several people)"],["enkosi","thank you"]]},
{"t":"li","q":"Which one do you hear?","say":"hamba kakuhle","o":["hamba kakuhle","sala kakuhle","molweni"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["kakhulu","very much"],["hamba kakuhle","go well"],["sala kakuhle","stay well"]]},
{"t":"mc","q":"Before asking a stranger for directions, you first…","o":["greet them","apologise","say your name"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"enkosi","o":["enkosi","molweni","sala kakuhle"],"a":0}
]},
{"id":"xh_s7_5","title":"Checkpoint: the sounds of Xhosa","step":"checkpoint","meta":"Zone 1 complete — show it all","vocab":[],"ex":[
{"t":"mc","q":"Which greeting is for several people?","o":["Molweni","Molo","Enkosi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"molo","o":["molo","molweni","enkosi"],"a":0},
{"t":"mc","q":"The person staying behind says…","o":["Hamba kakuhle","Sala kakuhle","Nceda"],"a":0},
{"t":"mc","q":"Review — the tsk-tsk dental click is written…","o":["c","x","q"],"a":0},
{"t":"mc","q":"Review — which one means please?","o":["nceda","enkosi","uxolo"],"a":0},
{"t":"li","q":"Review — which word do you hear?","say":"isiXhosa","o":["isiXhosa","umngqusho","incwadi"],"a":0},
{"t":"mc","q":"Review — which one means house?","o":["indlu","inja","imoto"],"a":0}
]},

/* ---------- g1 · How are you? ---------- */
{"id":"xh_g1","title":"How are you?","step":"learn","meta":"The exchange that opens every conversation","vocab":[["unjani","oon-JAH-nee","how are you?"],["kunjani","koon-JAH-nee","how is it going?"],["ndiyaphila","ndee-yah-PEE-lah","I am fine"],["ndikhona","ndee-KHAW-nah","I am okay"],["wena","WEH-nah","you"],["nawe","NAH-weh","you too"]],"ex":[
{"t":"note","tag":"After Molo","q":"The question that always follows","body":"<p>After the greeting comes the question: <b>Unjani?</b> — <i>how are you?</i> The classic answer is <b>Ndiyaphila</b> — <i>I am fine</i>, literally <i>I am living</i>.</p><p>Look inside the words: <b>u-</b> means <i>you</i> and <b>ndi-</b> means <i>I</i>. Those two little pieces will start almost every sentence you ever say.</p>","eg":[["unjani","oon-JAH-nee","how are you?"],["ndiyaphila","ndee-yah-PEE-lah","I am fine"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyaphila","o":["ndiyaphila","unjani"],"a":0},
{"t":"mc","q":"What does unjani mean?","o":["how are you?","I am fine","thank you"],"a":0},
{"t":"note","tag":"Street answers","q":"Kunjani and the everyday reply","body":"<p>Friends often ask <b>Kunjani?</b> — <i>how is it going?</i> And the most common everyday answer in Cape Town is not a textbook word at all: <b>Ndikhona</b> — literally <i>I am here</i>, meaning <i>I am okay, hanging in there</i>.</p>","eg":[["kunjani","koon-JAH-nee","how is it going?"],["ndikhona","ndee-KHAW-nah","I am okay"]]},
{"t":"li","q":"Which one do you hear?","say":"ndikhona","o":["ndikhona","kunjani"],"a":0},
{"t":"mc","q":"ndikhona literally means I am here — people use it to say…","o":["I am okay","I am lost","I am leaving"],"a":0},
{"t":"note","tag":"Bounce it back","q":"Wena — and you?","body":"<p>Never let the question die with you. <b>Wena</b> is <i>you</i>, so <b>Wena unjani?</b> bounces it back — <i>and you, how are you?</i> If someone wishes you well, <b>nawe</b> — <i>you too</i> — returns the kindness.</p>","eg":[["wena","WEH-nah","you"],["nawe","NAH-weh","you too"]]},
{"t":"li","q":"Which one do you hear?","say":"wena","o":["wena","nawe"],"a":0},
{"t":"mc","q":"To bounce the question back — and you? — you say…","o":["Wena unjani?","Ndikhona","Molweni"],"a":0}
]},
{"id":"xh_g1_2","title":"Hearing the exchange","step":"recognize","meta":"Question or answer?","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"unjani","o":["unjani","kunjani","ndiyaphila"],"a":0},
{"t":"mc","q":"What does ndiyaphila mean?","o":["I am fine","how are you?","you too"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kunjani","o":["kunjani","unjani","ndikhona"],"a":0},
{"t":"mc","q":"Which one means you?","o":["wena","nawe","unjani"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nawe","o":["nawe","wena","ndiyaphila"],"a":0},
{"t":"mc","q":"A friend asks Kunjani? A natural reply is…","o":["Ndikhona","Molweni","Uxolo"],"a":0}
]},
{"id":"xh_g1_3","title":"Building the exchange","step":"build","meta":"Say it yourself","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am fine","s":"Ndiyaphi___, enkosi.","o":["la","lo","le"],"a":0},
{"t":"wb","q":"Build: and you, how are you?","a":["wena","unjani"],"pool":["wena","unjani","nawe"]},
{"t":"fill","q":"Complete the casual question","s":"Ku___ani?","o":["nj","ny","ng"],"a":0},
{"t":"wb","q":"Build: I am okay","a":["ndikhona"],"pool":["ndikhona","ndiyaphila","wena"]},
{"t":"li","q":"Which one do you hear?","say":"ndiyaphila","o":["ndiyaphila","ndikhona","nawe"],"a":0}
]},
{"id":"xh_g1_4","title":"The exchange in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["unjani","how are you?"],["ndiyaphila","I am fine"],["ndikhona","I am okay"]]},
{"t":"li","q":"Which one do you hear?","say":"unjani","o":["unjani","wena","kunjani"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["kunjani","how is it going?"],["wena","you"],["nawe","you too"]]},
{"t":"mc","q":"The ndi- at the start of ndiyaphila means…","o":["I","you","we"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kunjani","o":["kunjani","ndikhona","unjani"],"a":0}
]},
{"id":"xh_g1_5","title":"Checkpoint: how are you?","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Someone greets you: Molo! Unjani? — you reply…","o":["Ndiyaphila, enkosi","Hamba kakuhle","Andiqondi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndikhona","o":["ndikhona","ndiyaphila","kunjani"],"a":0},
{"t":"mc","q":"What does wena mean?","o":["you","I","you too"],"a":0},
{"t":"mc","q":"The u- at the start of unjani means…","o":["you","I","they"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nawe","o":["nawe","wena","enkosi"],"a":0},
{"t":"mc","q":"Review — hello to several people is…","o":["Molweni","Molo","Enkosi"],"a":0}
]},

/* ---------- g2 · Names ---------- */
{"id":"xh_g2","title":"What is your name?","step":"learn","meta":"Introduce yourself like a local","vocab":[["igama","ee-GAH-mah","name"],["lam","LAHM","my"],["lakho","LAH-kaw","your"],["Igama lakho ngubani?","ee-GAH-mah LAH-kaw ngoo-BAH-nee","what is your name?"],["NdinguSipho","ndeen-goo-SEE-paw","I am Sipho"],["Ungubani?","oon-goo-BAH-nee","who are you?"]],"ex":[
{"t":"note","tag":"Names","q":"Igama — the name","body":"<p><b>Igama</b> is <i>name</i>. <b>Igama lam</b> — <i>my name</i>; <b>igama lakho</b> — <i>your name</i>. The question literally asks <i>your name is who?</i>: <b>Igama lakho ngubani?</b></p>","eg":[["igama","ee-GAH-mah","name"],["lam","LAHM","my"],["lakho","LAH-kaw","your"]]},
{"t":"li","q":"Which one do you hear?","say":"igama","o":["igama","lakho"],"a":0},
{"t":"mc","q":"What does lam mean?","o":["my","your","name"],"a":0},
{"t":"note","tag":"Answering","q":"Ndingu- plus your name","body":"<p>To say who you are, glue <b>ndingu-</b> (<i>I am</i>) straight onto your name: <b>NdinguSipho</b> — <i>I am Sipho</i>. And <b>Ungubani?</b> asks <i>who are you?</i> directly.</p><p>Full introduction: <b>Molo! Igama lam nguSipho. Wena, igama lakho ngubani?</b></p>","eg":[["Igama lakho ngubani?","ee-GAH-mah LAH-kaw ngoo-BAH-nee","what is your name?"],["NdinguSipho","ndeen-goo-SEE-paw","I am Sipho"],["Ungubani?","oon-goo-BAH-nee","who are you?"]]},
{"t":"li","q":"Which one do you hear?","say":"Ungubani?","o":["Ungubani?","NdinguSipho"],"a":0},
{"t":"mc","q":"NdinguSipho means…","o":["I am Sipho","who is Sipho?","your name is Sipho"],"a":0},
{"t":"li","q":"Which question do you hear?","say":"Igama lakho ngubani?","o":["Igama lakho ngubani?","Ungubani?"],"a":0},
{"t":"mc","q":"What does lakho mean?","o":["your","my","who"],"a":0}
]},
{"id":"xh_g2_2","title":"Hearing names","step":"recognize","meta":"Who is asking what?","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"lam","o":["lam","lakho","igama"],"a":0},
{"t":"mc","q":"Igama lakho ngubani? asks about…","o":["your name","my name","your home"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"NdinguSipho","o":["NdinguSipho","Ungubani?","igama"],"a":0},
{"t":"mc","q":"Which one means who are you?","o":["Ungubani?","Unjani?","Uvela phi?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"lakho","o":["lakho","lam","wena"],"a":0},
{"t":"mc","q":"igama lam means…","o":["my name","your name","a person"],"a":0}
]},
{"id":"xh_g2_3","title":"Building introductions","step":"build","meta":"Put your name into Xhosa","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am Sipho","s":"Ndingu___ipho","o":["S","Th","B"],"a":0},
{"t":"wb","q":"Build: my name","a":["igama","lam"],"pool":["igama","lam","lakho"]},
{"t":"fill","q":"Complete the question: your name is who?","s":"Igama lakho ngu___ani?","o":["b","ph","nj"],"a":0},
{"t":"wb","q":"Build: what is your name? (literally: name your who?)","a":["igama","lakho","ngubani"],"pool":["igama","lakho","ngubani","lam"]},
{"t":"li","q":"Which one do you hear?","say":"igama","o":["igama","lam","Ungubani?"],"a":0}
]},
{"id":"xh_g2_4","title":"Names in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["igama","name"],["lam","my"],["lakho","your"]]},
{"t":"li","q":"Which one do you hear?","say":"Ungubani?","o":["Ungubani?","Igama lakho ngubani?","NdinguSipho"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["NdinguSipho","I am Sipho"],["Ungubani?","who are you?"]]},
{"t":"mc","q":"To answer Ungubani?, you start with…","o":["Ndingu-","Lakho","Unjani"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"lam","o":["lam","igama","lakho"],"a":0}
]},
{"id":"xh_g2_5","title":"Checkpoint: names","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does igama mean?","o":["name","person","greeting"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Igama lakho ngubani?","o":["Igama lakho ngubani?","Ungubani?","NdinguSipho"],"a":0},
{"t":"mc","q":"Which one means your?","o":["lakho","lam","wena"],"a":0},
{"t":"mc","q":"Someone asks Ungubani? — a good answer is…","o":["NdinguSipho","Ndiyaphila","Enkosi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"lakho","o":["lakho","lam","nawe"],"a":0},
{"t":"mc","q":"Review — which one means I am fine?","o":["ndiyaphila","ndikhona","unjani"],"a":0}
]},

/* ---------- g3 · People around you ---------- */
{"id":"xh_g3","title":"People around you","step":"learn","meta":"Person, people — your first noun-class pair","vocab":[["umntu","OOM-ntoo","person"],["abantu","ah-BAHN-too","people"],["indoda","een-DAW-dah","man"],["umntwana","oom-NTWAH-nah","child"],["abantwana","ah-bahn-TWAH-nah","children"],["umhlobo","oom-HLAW-baw","friend"]],"ex":[
{"t":"note","tag":"One and many","q":"um- becomes aba-","body":"<p>Here is the famous Xhosa pattern in its friendliest form. <b>umntu</b> is <i>a person</i>; swap <b>um-</b> for <b>aba-</b> and you get <b>abantu</b> — <i>people</i>. The same word gave the world the idea of <b>ubuntu</b>: a person is a person through other people.</p>","eg":[["umntu","OOM-ntoo","person"],["abantu","ah-BAHN-too","people"]]},
{"t":"li","q":"One or many — which do you hear?","say":"abantu","o":["abantu","umntu"],"a":0},
{"t":"mc","q":"What does umntu mean?","o":["person","people","man"],"a":0},
{"t":"note","tag":"The same trick again","q":"Child and children","body":"<p>The pattern repeats: <b>umntwana</b> — <i>child</i>; <b>abantwana</b> — <i>children</i>. Once your ear catches um-/aba-, you can guess hundreds of plurals for free.</p>","eg":[["umntwana","oom-NTWAH-nah","child"],["abantwana","ah-bahn-TWAH-nah","children"]]},
{"t":"li","q":"One child or many — which do you hear?","say":"abantwana","o":["abantwana","umntwana"],"a":0},
{"t":"mc","q":"abantwana means…","o":["children","child","friends"],"a":0},
{"t":"note","tag":"Two more people","q":"A man and a friend","body":"<p><b>indoda</b> is <i>a man</i> and <b>umhlobo</b> is <i>a friend</i> — the word you will use most once people start feeding you umngqusho.</p>","eg":[["indoda","een-DAW-dah","man"],["umhlobo","oom-HLAW-baw","friend"]]},
{"t":"li","q":"Which one do you hear?","say":"umhlobo","o":["umhlobo","indoda"],"a":0},
{"t":"mc","q":"Which one means friend?","o":["umhlobo","umntu","indoda"],"a":0}
]},
{"id":"xh_g3_2","title":"Hearing people words","step":"recognize","meta":"Singular or plural, by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"umntu","o":["umntu","abantu","umntwana"],"a":0},
{"t":"mc","q":"What does indoda mean?","o":["man","friend","child"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umntwana","o":["umntwana","abantwana","umhlobo"],"a":0},
{"t":"mc","q":"Which one means people?","o":["abantu","umntu","abantwana"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"indoda","o":["indoda","umhlobo","umntu"],"a":0},
{"t":"mc","q":"To make umntwana plural, um- becomes…","o":["aba-","imi-","izi-"],"a":0}
]},
{"id":"xh_g3_3","title":"Building people words","step":"build","meta":"Swap the prefixes yourself","vocab":[],"ex":[
{"t":"fill","q":"Complete: people","s":"___ntu","o":["aba","um","imi"],"a":0},
{"t":"wb","q":"Build the word: children","a":["abantwana"],"pool":["abantwana","umntwana","abantu"]},
{"t":"fill","q":"Complete: friend","s":"um___obo","o":["hl","dl","tsh"],"a":0},
{"t":"wb","q":"Build the word: man","a":["indoda"],"pool":["indoda","umntu","umhlobo"]},
{"t":"li","q":"Which one do you hear?","say":"abantu","o":["abantu","abantwana","indoda"],"a":0}
]},
{"id":"xh_g3_4","title":"People in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umntu","person"],["abantu","people"],["indoda","man"]]},
{"t":"li","q":"Which one do you hear?","say":"umhlobo","o":["umhlobo","umntwana","abantu"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umntwana","child"],["abantwana","children"],["umhlobo","friend"]]},
{"t":"mc","q":"The idea that a person is a person through other people is called…","o":["ubuntu","umntu","indoda"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"abantwana","o":["abantwana","umntwana","umhlobo"],"a":0}
]},
{"id":"xh_g3_5","title":"Checkpoint: people","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does abantu mean?","o":["people","person","children"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umntwana","o":["umntwana","abantwana","umntu"],"a":0},
{"t":"mc","q":"Which one means man?","o":["indoda","umhlobo","umntu"],"a":0},
{"t":"mc","q":"The plural of umntu is…","o":["abantu","abantwana","imintu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umhlobo","o":["umhlobo","indoda","abantu"],"a":0},
{"t":"mc","q":"Review — what does ndikhona mean?","o":["I am okay","I am Sipho","how are you?"],"a":0}
]},

/* ---------- g4 · Polite words on the street ---------- */
{"id":"xh_g4","title":"Bhuti, sisi and thank you","step":"learn","meta":"How Cape Town actually addresses people","vocab":[["bhuti","BHOO-tee","bro (young man)"],["sisi","SEE-see","sis (young woman)"],["ndiyabulela","ndee-yah-boo-LEH-lah","I thank you"],["akunani","ah-koo-NAH-nee","no problem"],["Uxolo bhuti","oo-XAW-law BHOO-tee","excuse me, bro"],["Enkosi sisi","ehn-KAW-see SEE-see","thank you, sis"]],"ex":[
{"t":"note","tag":"Street address","q":"Everyone is bhuti or sisi","body":"<p>In Cape Town you address a young man as <b>bhuti</b> (<i>bro</i>) and a young woman as <b>sisi</b> (<i>sis</i>) — warm, normal and expected, even with strangers. Elders are <b>tata</b> and <b>mama</b>; those come with the family words.</p><p>So: <b>Uxolo bhuti</b> — <i>excuse me, bro</i> — opens a question to a stranger politely.</p>","eg":[["bhuti","BHOO-tee","bro (young man)"],["sisi","SEE-see","sis (young woman)"],["Uxolo bhuti","oo-XAW-law BHOO-tee","excuse me, bro"]]},
{"t":"li","q":"Which one do you hear?","say":"bhuti","o":["bhuti","sisi"],"a":0},
{"t":"mc","q":"You stop a young woman to ask directions. You open with…","o":["Uxolo sisi","Uxolo bhuti","Hamba"],"a":0},
{"t":"note","tag":"Fuller thanks","q":"Ndiyabulela and akunani","body":"<p><b>Ndiyabulela</b> is a fuller, warmer <i>I thank you</i> — lovely after real help. The gracious reply is <b>akunani</b> — <i>no problem, it is nothing</i>.</p>","eg":[["ndiyabulela","ndee-yah-boo-LEH-lah","I thank you"],["akunani","ah-koo-NAH-nee","no problem"],["Enkosi sisi","ehn-KAW-see SEE-see","thank you, sis"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyabulela","o":["ndiyabulela","akunani"],"a":0},
{"t":"mc","q":"Someone thanks you warmly. You wave it off with…","o":["Akunani","Ndiyabulela","Molweni"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Enkosi sisi","o":["Enkosi sisi","Uxolo bhuti"],"a":0},
{"t":"mc","q":"ndiyabulela means…","o":["I thank you","no problem","excuse me"],"a":0}
]},
{"id":"xh_g4_2","title":"Hearing polite words","step":"recognize","meta":"Bro, sis and gratitude by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"sisi","o":["sisi","bhuti","akunani"],"a":0},
{"t":"mc","q":"What does akunani mean?","o":["no problem","thank you","excuse me"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uxolo bhuti","o":["Uxolo bhuti","Enkosi sisi","ndiyabulela"],"a":0},
{"t":"mc","q":"bhuti is the friendly address for…","o":["a young man","a young woman","an elder"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"akunani","o":["akunani","ndiyabulela","sisi"],"a":0},
{"t":"mc","q":"Which one is the warmer, fuller thank you?","o":["ndiyabulela","enkosi","akunani"],"a":0}
]},
{"id":"xh_g4_3","title":"Building polite phrases","step":"build","meta":"Politeness, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: I thank you","s":"Ndiyabu___la","o":["le","la","lo"],"a":0},
{"t":"wb","q":"Build: excuse me, bro","a":["uxolo","bhuti"],"pool":["uxolo","bhuti","sisi"]},
{"t":"fill","q":"Complete: no problem","s":"Akuna___","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: thank you, sis","a":["enkosi","sisi"],"pool":["enkosi","sisi","bhuti"]},
{"t":"li","q":"Which one do you hear?","say":"bhuti","o":["bhuti","akunani","sisi"],"a":0}
]},
{"id":"xh_g4_4","title":"Polite words in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["bhuti","bro (young man)"],["sisi","sis (young woman)"],["akunani","no problem"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyabulela","o":["ndiyabulela","Enkosi sisi","akunani"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndiyabulela","I thank you"],["Uxolo bhuti","excuse me, bro"],["Enkosi sisi","thank you, sis"]]},
{"t":"mc","q":"A stranger your age helped you. Warmest thanks…","o":["Ndiyabulela bhuti","Akunani","Ungubani?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"sisi","o":["sisi","bhuti","enkosi"],"a":0}
]},
{"id":"xh_g4_5","title":"Checkpoint: polite words","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndiyabulela mean?","o":["I thank you","no problem","who are you?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uxolo bhuti","o":["Uxolo bhuti","Enkosi sisi","akunani"],"a":0},
{"t":"mc","q":"The reply that waves off thanks is…","o":["akunani","ndiyabulela","molo"],"a":0},
{"t":"mc","q":"sisi is the friendly address for…","o":["a young woman","a young man","a child"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"akunani","o":["akunani","bhuti","ndiyabulela"],"a":0},
{"t":"mc","q":"Review — which one means people?","o":["abantu","umntu","abantwana"],"a":0}
]},

/* ---------- g5 · Where are you from? ---------- */
{"id":"xh_g5","title":"Where are you from?","step":"learn","meta":"Uvela phi? — and the little e- of places","vocab":[["phi?","PEE","where?"],["Uvela phi?","oo-VEH-lah PEE","where are you from?"],["ndivela","ndee-VEH-lah","I come from"],["eKapa","eh-KAH-pah","in Cape Town"],["eGoli","eh-GAW-lee","in Johannesburg"],["eMonti","eh-MAWN-tee","in East London"]],"ex":[
{"t":"note","tag":"The question","q":"Uvela phi?","body":"<p><b>Phi?</b> is <i>where?</i> — and <b>Uvela phi?</b> asks <i>where do you come from?</i> You answer with <b>ndivela</b> — <i>I come from</i>.</p><p>The ph in phi is a p with a puff of air — never an f.</p>","eg":[["phi?","PEE","where?"],["Uvela phi?","oo-VEH-lah PEE","where are you from?"],["ndivela","ndee-VEH-lah","I come from"]]},
{"t":"li","q":"Which one do you hear?","say":"Uvela phi?","o":["Uvela phi?","ndivela"],"a":0},
{"t":"mc","q":"What does phi mean?","o":["where?","who?","how?"],"a":0},
{"t":"note","tag":"Places wear e-","q":"eKapa, eGoli, eMonti","body":"<p>Place names put on a little <b>e-</b> to mean <i>in / at / from</i> that place: <b>eKapa</b> — Cape Town, <b>eGoli</b> — Johannesburg (<i>the place of gold</i>), <b>eMonti</b> — East London. So: <b>Ndivela eKapa</b> — <i>I am from Cape Town</i>.</p>","eg":[["eKapa","eh-KAH-pah","in Cape Town"],["eGoli","eh-GAW-lee","in Johannesburg"],["eMonti","eh-MAWN-tee","in East London"]]},
{"t":"li","q":"Which place do you hear?","say":"eKapa","o":["eKapa","eGoli","eMonti"],"a":0},
{"t":"mc","q":"eGoli — the place of gold — is…","o":["Johannesburg","Cape Town","East London"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndivela","o":["ndivela","eMonti"],"a":0},
{"t":"mc","q":"Ndivela eKapa means…","o":["I come from Cape Town","I live in Cape Town","where is Cape Town?"],"a":0}
]},
{"id":"xh_g5_2","title":"Hearing places","step":"recognize","meta":"Cities and the question word","vocab":[],"ex":[
{"t":"li","q":"Which place do you hear?","say":"eGoli","o":["eGoli","eKapa","eMonti"],"a":0},
{"t":"mc","q":"What does ndivela mean?","o":["I come from","where?","I live"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eMonti","o":["eMonti","eGoli","eKapa"],"a":0},
{"t":"mc","q":"Which one means where?","o":["phi?","ngubani?","unjani?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"phi?","o":["phi?","ndivela","eKapa"],"a":0},
{"t":"mc","q":"eMonti is…","o":["East London","Johannesburg","Cape Town"],"a":0}
]},
{"id":"xh_g5_3","title":"Building origins","step":"build","meta":"Say where you are from","vocab":[],"ex":[
{"t":"fill","q":"Complete: I come from Cape Town","s":"Ndivela e___apa.","o":["K","G","M"],"a":0},
{"t":"wb","q":"Build: where are you from?","a":["uvela","phi"],"pool":["uvela","phi","ndivela"]},
{"t":"fill","q":"Complete: Johannesburg","s":"eGo___","o":["li","lo","la"],"a":0},
{"t":"wb","q":"Build: I come from Johannesburg","a":["ndivela","eGoli"],"pool":["ndivela","eGoli","eKapa"]},
{"t":"li","q":"Which one do you hear?","say":"eKapa","o":["eKapa","eMonti","phi?"],"a":0}
]},
{"id":"xh_g5_4","title":"Origins in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["phi?","where?"],["ndivela","I come from"],["eKapa","in Cape Town"]]},
{"t":"li","q":"Which one do you hear?","say":"Uvela phi?","o":["Uvela phi?","eGoli","ndivela"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["eGoli","in Johannesburg"],["eMonti","in East London"]]},
{"t":"mc","q":"The little e- on a place name means…","o":["in or at that place","the big one","far away"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eMonti","o":["eMonti","eKapa","eGoli"],"a":0}
]},
{"id":"xh_g5_5","title":"Checkpoint: where from","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Uvela phi? asks…","o":["where are you from?","where do you live?","who are you?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndivela","o":["ndivela","phi?","eGoli"],"a":0},
{"t":"mc","q":"Which one is Cape Town?","o":["eKapa","eGoli","eMonti"],"a":0},
{"t":"mc","q":"A full answer to Uvela phi? is…","o":["Ndivela eMonti","NdinguSipho","Ndiyaphila"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eGoli","o":["eGoli","eMonti","eKapa"],"a":0},
{"t":"mc","q":"Review — which one means friend?","o":["umhlobo","indoda","bhuti"],"a":0}
]},

/* ---------- g6 · Where do you live? ---------- */
{"id":"xh_g6","title":"Where do you live?","step":"learn","meta":"Uhlala phi? — Khayelitsha, Gugulethu and home ground","vocab":[["Uhlala phi?","oo-HLAH-lah PEE","where do you live?"],["ndihlala","ndee-HLAH-lah","I live"],["eKhayelitsha","eh-kah-yeh-LEE-tshah","in Khayelitsha"],["eGugulethu","eh-goo-goo-LEH-too","in Gugulethu"],["ilokishi","ee-law-KEE-shee","township"],["idolophu","ee-daw-LAW-poo","town"]],"ex":[
{"t":"note","tag":"Living somewhere","q":"hlala again — sit, stay, live","body":"<p>You met <b>hlala</b> as <i>sit down</i>. The same verb means <i>to live somewhere</i>: <b>Uhlala phi?</b> — <i>where do you live?</i> — and <b>ndihlala</b> — <i>I live…</i></p>","eg":[["Uhlala phi?","oo-HLAH-lah PEE","where do you live?"],["ndihlala","ndee-HLAH-lah","I live"]]},
{"t":"li","q":"Which one do you hear?","say":"Uhlala phi?","o":["Uhlala phi?","ndihlala"],"a":0},
{"t":"mc","q":"Uhlala phi? asks…","o":["where do you live?","where are you from?","how are you?"],"a":0},
{"t":"note","tag":"Cape Town ground","q":"Khayelitsha and Gugulethu","body":"<p>The two great Xhosa-speaking homes of Cape Town: <b>eKhayelitsha</b> — <i>new home</i> — and <b>eGugulethu</b> — <i>our pride</i>. Say them with their meanings and they stop being long words.</p>","eg":[["eKhayelitsha","eh-kah-yeh-LEE-tshah","in Khayelitsha"],["eGugulethu","eh-goo-goo-LEH-too","in Gugulethu"]]},
{"t":"li","q":"Which place do you hear?","say":"eKhayelitsha","o":["eKhayelitsha","eGugulethu"],"a":0},
{"t":"mc","q":"eGugulethu means…","o":["our pride","new home","gold place"],"a":0},
{"t":"note","tag":"Township and town","q":"ilokishi and idolophu","body":"<p><b>ilokishi</b> is <i>a township</i> and <b>idolophu</b> is <i>a town</i> — both everyday words borrowed long ago (location, dorp) and fully Xhosa now.</p>","eg":[["ilokishi","ee-law-KEE-shee","township"],["idolophu","ee-daw-LAW-poo","town"]]},
{"t":"li","q":"Which one do you hear?","say":"ilokishi","o":["ilokishi","idolophu"],"a":0},
{"t":"mc","q":"idolophu means…","o":["town","township","home"],"a":0}
]},
{"id":"xh_g6_2","title":"Hearing home ground","step":"recognize","meta":"Places to live, by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndihlala","o":["ndihlala","Uhlala phi?","ilokishi"],"a":0},
{"t":"mc","q":"What does ilokishi mean?","o":["township","town","house"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eGugulethu","o":["eGugulethu","eKhayelitsha","eKapa"],"a":0},
{"t":"mc","q":"Ndihlala eKhayelitsha means…","o":["I live in Khayelitsha","I come from Gugulethu","where is Khayelitsha?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"idolophu","o":["idolophu","ilokishi","ndihlala"],"a":0},
{"t":"mc","q":"eKhayelitsha means…","o":["new home","our pride","big town"],"a":0}
]},
{"id":"xh_g6_3","title":"Building home phrases","step":"build","meta":"Say where you live","vocab":[],"ex":[
{"t":"fill","q":"Complete: I live in Gugulethu","s":"Ndihlala eGugule___u.","o":["th","t","tsh"],"a":0},
{"t":"wb","q":"Build: where do you live?","a":["uhlala","phi"],"pool":["uhlala","phi","ndihlala"]},
{"t":"fill","q":"Complete: township","s":"iloki___i","o":["sh","tsh","s"],"a":0},
{"t":"wb","q":"Build: I live in Khayelitsha","a":["ndihlala","eKhayelitsha"],"pool":["ndihlala","eKhayelitsha","idolophu"]},
{"t":"li","q":"Which one do you hear?","say":"eGugulethu","o":["eGugulethu","idolophu","ilokishi"],"a":0}
]},
{"id":"xh_g6_4","title":"Home ground in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uhlala phi?","where do you live?"],["ndihlala","I live"],["ilokishi","township"]]},
{"t":"li","q":"Which place do you hear?","say":"eKhayelitsha","o":["eKhayelitsha","eGugulethu","eMonti"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["eKhayelitsha","in Khayelitsha"],["eGugulethu","in Gugulethu"],["idolophu","town"]]},
{"t":"mc","q":"hlala means sit down AND…","o":["live somewhere","come from","walk"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ilokishi","o":["ilokishi","idolophu","eGugulethu"],"a":0}
]},
{"id":"xh_g6_5","title":"Checkpoint: where you live","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Uhlala phi? asks…","o":["where do you live?","where are you from?","what is your name?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndihlala","o":["ndihlala","ilokishi","eKhayelitsha"],"a":0},
{"t":"mc","q":"Which one means township?","o":["ilokishi","idolophu","indlu"],"a":0},
{"t":"mc","q":"A full answer to Uhlala phi? is…","o":["Ndihlala eGugulethu","Ndivela phi","Ndiyabulela"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eGugulethu","o":["eGugulethu","eKhayelitsha","eKapa"],"a":0},
{"t":"mc","q":"Review — Uvela phi? asks…","o":["where are you from?","where do you live?","who is this?"],"a":0}
]},

/* ---------- g7 · Do you speak Xhosa? ---------- */
{"id":"xh_g7","title":"Do you speak Xhosa?","step":"learn","meta":"The learner survival kit","vocab":[["Uthetha isiXhosa?","oo-TEH-tah ee-see-XHAW-sah","do you speak Xhosa?"],["ndithetha","ndee-TEH-tah","I speak"],["kancinci","kahn-CEEN-cee","a little"],["Uyaqonda?","oo-yah-QAWN-dah","do you understand?"],["ndiyaqonda","ndee-yah-QAWN-dah","I understand"],["Ndifunda isiXhosa","ndee-FOON-dah ee-see-XHAW-sah","I am learning Xhosa"]],"ex":[
{"t":"note","tag":"The magic sentence","q":"Ndifunda isiXhosa","body":"<p>Say <b>Ndifunda isiXhosa</b> — <i>I am learning Xhosa</i> — anywhere in Cape Town and watch faces light up. It is the sentence that turns strangers into teachers.</p><p><b>Uthetha isiXhosa?</b> asks <i>do you speak Xhosa?</i>; answer honestly with <b>ndithetha kancinci</b> — <i>I speak a little</i>.</p>","eg":[["Ndifunda isiXhosa","ndee-FOON-dah ee-see-XHAW-sah","I am learning Xhosa"],["Uthetha isiXhosa?","oo-TEH-tah ee-see-XHAW-sah","do you speak Xhosa?"],["ndithetha","ndee-TEH-tah","I speak"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndifunda isiXhosa","o":["Ndifunda isiXhosa","Uthetha isiXhosa?"],"a":0},
{"t":"mc","q":"What does ndithetha mean?","o":["I speak","I learn","I understand"],"a":0},
{"t":"note","tag":"A little","q":"kancinci — the honest word","body":"<p><b>Kancinci</b> is <i>a little</i> — the learner word you will say a hundred times: <b>Ndithetha isiXhosa kancinci</b>. Its opposite from the greetings, <b>kakhulu</b>, means <i>a lot</i>.</p>","eg":[["kancinci","kahn-CEEN-cee","a little"]]},
{"t":"li","q":"Which one do you hear?","say":"kancinci","o":["kancinci","ndithetha"],"a":0},
{"t":"mc","q":"Ndithetha isiXhosa kancinci means…","o":["I speak a little Xhosa","I speak Xhosa well","I do not speak Xhosa"],"a":0},
{"t":"note","tag":"Checking in","q":"Uyaqonda?","body":"<p>You met <b>qonda</b> with the q click. Now the pair that keeps every conversation alive: <b>Uyaqonda?</b> — <i>do you understand?</i> — and <b>ndiyaqonda</b> — <i>I understand</i>. When you do not: <b>andiqondi</b>, from the sounds zone, is still your friend.</p>","eg":[["Uyaqonda?","oo-yah-QAWN-dah","do you understand?"],["ndiyaqonda","ndee-yah-QAWN-dah","I understand"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyaqonda","o":["ndiyaqonda","Uyaqonda?"],"a":0},
{"t":"mc","q":"Uyaqonda? asks…","o":["do you understand?","do you speak?","are you learning?"],"a":0}
]},
{"id":"xh_g7_2","title":"Hearing the survival kit","step":"recognize","meta":"Speaking, learning, understanding","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Uthetha isiXhosa?","o":["Uthetha isiXhosa?","Ndifunda isiXhosa","ndithetha"],"a":0},
{"t":"mc","q":"What does kancinci mean?","o":["a little","a lot","again"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uyaqonda?","o":["Uyaqonda?","ndiyaqonda","kancinci"],"a":0},
{"t":"mc","q":"Which one means I understand?","o":["ndiyaqonda","andiqondi","ndithetha"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndithetha","o":["ndithetha","ndiyaqonda","Ndifunda isiXhosa"],"a":0},
{"t":"mc","q":"The sentence that makes strangers into teachers is…","o":["Ndifunda isiXhosa","Uyaqonda?","Akunani"],"a":0}
]},
{"id":"xh_g7_3","title":"Building learner phrases","step":"build","meta":"Your survival kit, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: I speak a little","s":"Ndithetha kancin___.","o":["ci","ce","ca"],"a":0},
{"t":"wb","q":"Build: I am learning Xhosa","a":["ndifunda","isiXhosa"],"pool":["ndifunda","isiXhosa","ndithetha"]},
{"t":"fill","q":"Complete: do you understand?","s":"Uya___onda?","o":["q","c","x"],"a":0},
{"t":"wb","q":"Build: do you speak Xhosa?","a":["uthetha","isiXhosa"],"pool":["uthetha","isiXhosa","kancinci"]},
{"t":"li","q":"Which one do you hear?","say":"kancinci","o":["kancinci","ndiyaqonda","ndithetha"],"a":0}
]},
{"id":"xh_g7_4","title":"The kit in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndithetha","I speak"],["kancinci","a little"],["ndiyaqonda","I understand"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndifunda isiXhosa","o":["Ndifunda isiXhosa","Uthetha isiXhosa?","Uyaqonda?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uthetha isiXhosa?","do you speak Xhosa?"],["Uyaqonda?","do you understand?"]]},
{"t":"mc","q":"You lost the thread. From the sounds zone, you say…","o":["Andiqondi","Ndiyaqonda","Kancinci"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uyaqonda?","o":["Uyaqonda?","ndiyaqonda","kancinci"],"a":0}
]},
{"id":"xh_g7_5","title":"Checkpoint: Zone 2 complete","step":"checkpoint","meta":"Greetings and people — show it all","vocab":[],"ex":[
{"t":"mc","q":"Uthetha isiXhosa? — your honest answer…","o":["Ndithetha kancinci","Ndiyaphila","Akunani"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyaqonda","o":["ndiyaqonda","ndithetha","kancinci"],"a":0},
{"t":"mc","q":"What does Ndifunda isiXhosa mean?","o":["I am learning Xhosa","I speak Xhosa well","do you speak Xhosa?"],"a":0},
{"t":"mc","q":"Review — Igama lakho ngubani? asks…","o":["your name","your home","your health"],"a":0},
{"t":"mc","q":"Review — the friendly address for a young man is…","o":["bhuti","sisi","tata"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"Uhlala phi?","o":["Uhlala phi?","Uvela phi?","Unjani"],"a":0},
{"t":"mc","q":"Review — the plural of umntwana is…","o":["abantwana","abantu","imintwana"],"a":0}
]},

/* ---------- f1 · Mother & father ---------- */
{"id":"xh_f1","title":"Mother and father","step":"learn","meta":"The words that also address every elder","vocab":[["umama","oo-MAH-mah","mother"],["utata","oo-TAH-tah","father"],["umakhulu","oo-mah-KHOO-loo","grandmother"],["utatomkhulu","oo-tah-tawm-KHOO-loo","grandfather"],["Molo tata","MAW-law TAH-tah","hello sir"],["Molo mama","MAW-law MAH-mah","hello madam"]],"ex":[
{"t":"note","tag":"Family first","q":"Umama and utata","body":"<p><b>Umama</b> is <i>mother</i> and <b>utata</b> is <i>father</i>. Kin words wear a bare <b>u-</b> in front — a small noun class reserved for people you call by name and family.</p>","eg":[["umama","oo-MAH-mah","mother"],["utata","oo-TAH-tah","father"]]},
{"t":"li","q":"Which one do you hear?","say":"umama","o":["umama","utata"],"a":0},
{"t":"mc","q":"What does utata mean?","o":["father","mother","grandfather"],"a":0},
{"t":"note","tag":"Grandparents","q":"The great ones","body":"<p><b>Umakhulu</b> — <i>grandmother</i>, literally <i>the great mother</i> — and <b>utatomkhulu</b> — <i>grandfather</i>, <i>the great father</i>. Grandmothers hold Xhosa families together; you will hear <i>makhulu</i> spoken with real warmth.</p>","eg":[["umakhulu","oo-mah-KHOO-loo","grandmother"],["utatomkhulu","oo-tah-tawm-KHOO-loo","grandfather"]]},
{"t":"li","q":"Which one do you hear?","say":"umakhulu","o":["umakhulu","utatomkhulu"],"a":0},
{"t":"mc","q":"umakhulu means…","o":["grandmother","grandfather","mother"],"a":0},
{"t":"note","tag":"Respect address","q":"Every elder is tata or mama","body":"<p>Here is the respect rule that opens doors: any man your parents age is addressed as <b>tata</b>, any woman as <b>mama</b> — related or not. <b>Molo tata</b>, <b>Molo mama</b>: the polite greeting to any elder in the street, the shop, the taxi.</p>","eg":[["Molo tata","MAW-law TAH-tah","hello sir"],["Molo mama","MAW-law MAH-mah","hello madam"]]},
{"t":"li","q":"Which greeting do you hear?","say":"Molo mama","o":["Molo mama","Molo tata"],"a":0},
{"t":"mc","q":"An older man you do not know helps you. You greet him…","o":["Molo tata","Molo bhuti","Molweni"],"a":0}
]},
{"id":"xh_f1_2","title":"Hearing the elders","step":"recognize","meta":"Mother, father, the great ones","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"utata","o":["utata","umama","umakhulu"],"a":0},
{"t":"mc","q":"What does umama mean?","o":["mother","madam only","sister"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utatomkhulu","o":["utatomkhulu","umakhulu","utata"],"a":0},
{"t":"mc","q":"Which one means grandfather?","o":["utatomkhulu","umakhulu","utata"],"a":0},
{"t":"li","q":"Which greeting do you hear?","say":"Molo tata","o":["Molo tata","Molo mama","Molweni"],"a":0},
{"t":"mc","q":"The address words for elders you do not know are…","o":["tata and mama","bhuti and sisi","wena and nawe"],"a":0}
]},
{"id":"xh_f1_3","title":"Building family words","step":"build","meta":"Assemble mother, father and the greetings","vocab":[],"ex":[
{"t":"fill","q":"Complete: grandmother","s":"umakhu___","o":["lu","la","lo"],"a":0},
{"t":"wb","q":"Build: hello madam","a":["molo","mama"],"pool":["molo","mama","tata"]},
{"t":"fill","q":"Complete: father","s":"u___ta","o":["ta","da","tha"],"a":0},
{"t":"wb","q":"Build: hello sir","a":["molo","tata"],"pool":["molo","tata","mama"]},
{"t":"li","q":"Which one do you hear?","say":"umama","o":["umama","umakhulu","utata"],"a":0}
]},
{"id":"xh_f1_4","title":"Elders in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umama","mother"],["utata","father"],["umakhulu","grandmother"]]},
{"t":"li","q":"Which one do you hear?","say":"Molo tata","o":["Molo tata","Molo mama","utatomkhulu"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["utatomkhulu","grandfather"],["Molo tata","hello sir"],["Molo mama","hello madam"]]},
{"t":"mc","q":"Kin words wear which little prefix?","o":["u-","i-","um-"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utata","o":["utata","umama","Molo mama"],"a":0}
]},
{"id":"xh_f1_5","title":"Checkpoint: mother & father","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does umakhulu mean?","o":["grandmother","grandfather","mother"],"a":0},
{"t":"li","q":"Which greeting do you hear?","say":"Molo mama","o":["Molo mama","Molo tata","umama"],"a":0},
{"t":"mc","q":"Which one means father?","o":["utata","utatomkhulu","umama"],"a":0},
{"t":"mc","q":"An elder woman drops her bag. After helping, she thanks you and you say…","o":["Akunani mama","Hamba kakuhle","Ungubani?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utatomkhulu","o":["utatomkhulu","utata","umakhulu"],"a":0},
{"t":"mc","q":"Review — the friendly address for a young woman is…","o":["sisi","mama","wena"],"a":0}
]},

/* ---------- f2 · Brothers & sisters ---------- */
{"id":"xh_f2","title":"Brothers and sisters","step":"learn","meta":"ubhuti, usisi — and the oo- plural","vocab":[["ubhuti","oo-BHOO-tee","brother"],["usisi","oo-SEE-see","sister"],["oobhuti","aw-BHOO-tee","brothers"],["oosisi","aw-SEE-see","sisters"],["umzala","oom-ZAH-lah","cousin"]],"ex":[
{"t":"note","tag":"Siblings","q":"From street address to family","body":"<p>You already use <b>bhuti</b> and <b>sisi</b> on the street. With the kin prefix <b>u-</b> they become the family words: <b>ubhuti</b> — <i>brother</i>, <b>usisi</b> — <i>sister</i>.</p>","eg":[["ubhuti","oo-BHOO-tee","brother"],["usisi","oo-SEE-see","sister"]]},
{"t":"li","q":"Which one do you hear?","say":"ubhuti","o":["ubhuti","usisi"],"a":0},
{"t":"mc","q":"What does usisi mean?","o":["sister","brother","cousin"],"a":0},
{"t":"note","tag":"The oo- plural","q":"One usisi, many oosisi","body":"<p>Kin words make their plural with <b>oo-</b>: <b>oobhuti</b> — <i>brothers</i>, <b>oosisi</b> — <i>sisters</i>. That is the second plural pattern you own, after um- to aba-.</p>","eg":[["oobhuti","aw-BHOO-tee","brothers"],["oosisi","aw-SEE-see","sisters"]]},
{"t":"li","q":"One or many — which do you hear?","say":"oosisi","o":["oosisi","usisi"],"a":0},
{"t":"mc","q":"oobhuti means…","o":["brothers","brother","sisters"],"a":0},
{"t":"note","tag":"Cousins","q":"Umzala — halfway a sibling","body":"<p><b>Umzala</b> is <i>cousin</i> — and in Xhosa families cousins are close enough that the line between cousin and sibling barely exists.</p>","eg":[["umzala","oom-ZAH-lah","cousin"]]},
{"t":"li","q":"Which one do you hear?","say":"umzala","o":["umzala","ubhuti"],"a":0},
{"t":"mc","q":"Which one means cousin?","o":["umzala","usisi","oobhuti"],"a":0}
]},
{"id":"xh_f2_2","title":"Hearing siblings","step":"recognize","meta":"One sibling or several","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"usisi","o":["usisi","oosisi","ubhuti"],"a":0},
{"t":"mc","q":"What does oosisi mean?","o":["sisters","sister","brothers"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"oobhuti","o":["oobhuti","ubhuti","umzala"],"a":0},
{"t":"mc","q":"Which one means brother?","o":["ubhuti","oobhuti","umzala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umzala","o":["umzala","usisi","oobhuti"],"a":0},
{"t":"mc","q":"The kin plural prefix is…","o":["oo-","aba-","izi-"],"a":0}
]},
{"id":"xh_f2_3","title":"Building sibling words","step":"build","meta":"Singulars and plurals by hand","vocab":[],"ex":[
{"t":"fill","q":"Complete: brothers","s":"___bhuti","o":["oo","u","aba"],"a":0},
{"t":"wb","q":"Build the word: sister","a":["usisi"],"pool":["usisi","oosisi","umzala"]},
{"t":"fill","q":"Complete: cousin","s":"um___ala","o":["z","dl","ts"],"a":0},
{"t":"wb","q":"Build the word: sisters","a":["oosisi"],"pool":["oosisi","usisi","ubhuti"]},
{"t":"li","q":"Which one do you hear?","say":"ubhuti","o":["ubhuti","oobhuti","usisi"],"a":0}
]},
{"id":"xh_f2_4","title":"Siblings in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ubhuti","brother"],["usisi","sister"],["umzala","cousin"]]},
{"t":"li","q":"Which one do you hear?","say":"oosisi","o":["oosisi","oobhuti","usisi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["oobhuti","brothers"],["oosisi","sisters"]]},
{"t":"mc","q":"usisi with the street sense of sis drops its prefix to become…","o":["sisi","oosisi","umzala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usisi","o":["usisi","umzala","ubhuti"],"a":0}
]},
{"id":"xh_f2_5","title":"Checkpoint: siblings","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does umzala mean?","o":["cousin","brother","uncle"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"oobhuti","o":["oobhuti","ubhuti","oosisi"],"a":0},
{"t":"mc","q":"The plural of usisi is…","o":["oosisi","abasisi","izisisi"],"a":0},
{"t":"mc","q":"Which one means brother?","o":["ubhuti","umzala","utata"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usisi","o":["usisi","oosisi","umzala"],"a":0},
{"t":"mc","q":"Review — which one means grandmother?","o":["umakhulu","utatomkhulu","umama"],"a":0}
]},

/* ---------- f3 · My family ---------- */
{"id":"xh_f3","title":"My family","step":"learn","meta":"Wam and wakho — my and your, for people","vocab":[["intsapho","een-TSAH-paw","family"],["abazali","ah-bah-ZAH-lee","parents"],["umama wam","oo-MAH-mah WAHM","my mother"],["utata wakho","oo-TAH-tah WAH-kaw","your father"],["usisi wam","oo-SEE-see WAHM","my sister"],["ubhuti wakho","oo-BHOO-tee WAH-kaw","your brother"]],"ex":[
{"t":"note","tag":"The family","q":"Intsapho and abazali","body":"<p><b>Intsapho</b> is <i>the family</i> and <b>abazali</b> are <i>the parents</i> — an aba- plural you can now read at sight.</p>","eg":[["intsapho","een-TSAH-paw","family"],["abazali","ah-bah-ZAH-lee","parents"]]},
{"t":"li","q":"Which one do you hear?","say":"abazali","o":["abazali","intsapho"],"a":0},
{"t":"mc","q":"What does intsapho mean?","o":["family","parents","children"],"a":0},
{"t":"note","tag":"My and your","q":"Wam and wakho follow the person","body":"<p>With people, <i>my</i> is <b>wam</b> and <i>your</i> is <b>wakho</b>, placed AFTER the noun: <b>umama wam</b> — <i>my mother</i>; <b>utata wakho</b> — <i>your father</i>.</p><p>You met <b>lam/lakho</b> with igama — the little word changes shape to match its noun. Do not memorise the system; your ear will collect the pairs.</p>","eg":[["umama wam","oo-MAH-mah WAHM","my mother"],["utata wakho","oo-TAH-tah WAH-kaw","your father"]]},
{"t":"li","q":"Which one do you hear?","say":"umama wam","o":["umama wam","utata wakho"],"a":0},
{"t":"mc","q":"utata wakho means…","o":["your father","my father","your brother"],"a":0},
{"t":"note","tag":"Practice pairs","q":"My sister, your brother","body":"<p>The same pattern rolls on: <b>usisi wam</b> — <i>my sister</i>, <b>ubhuti wakho</b> — <i>your brother</i>. Wam for mine, wakho for yours — after the person.</p>","eg":[["usisi wam","oo-SEE-see WAHM","my sister"],["ubhuti wakho","oo-BHOO-tee WAH-kaw","your brother"]]},
{"t":"li","q":"Which one do you hear?","say":"ubhuti wakho","o":["ubhuti wakho","usisi wam"],"a":0},
{"t":"mc","q":"Which one means my sister?","o":["usisi wam","usisi wakho","ubhuti wam"],"a":0}
]},
{"id":"xh_f3_2","title":"Hearing mine and yours","step":"recognize","meta":"Wam or wakho?","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"intsapho","o":["intsapho","abazali","umama wam"],"a":0},
{"t":"mc","q":"What does abazali mean?","o":["parents","family","grandparents"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utata wakho","o":["utata wakho","umama wam","ubhuti wakho"],"a":0},
{"t":"mc","q":"Which one means my mother?","o":["umama wam","umama wakho","utata wam"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usisi wam","o":["usisi wam","ubhuti wakho","abazali"],"a":0},
{"t":"mc","q":"The word for my that follows a person is…","o":["wam","lam","nam"],"a":0}
]},
{"id":"xh_f3_3","title":"Building family phrases","step":"build","meta":"Mine and yours, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: my mother","s":"umama ___","o":["wam","wakho","lam"],"a":0},
{"t":"wb","q":"Build: your father","a":["utata","wakho"],"pool":["utata","wakho","wam"]},
{"t":"fill","q":"Complete: parents","s":"aba___ali","o":["z","s","dl"],"a":0},
{"t":"wb","q":"Build: my sister","a":["usisi","wam"],"pool":["usisi","wam","wakho"]},
{"t":"li","q":"Which one do you hear?","say":"abazali","o":["abazali","intsapho","utata wakho"],"a":0}
]},
{"id":"xh_f3_4","title":"Family phrases in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["intsapho","family"],["abazali","parents"],["umama wam","my mother"]]},
{"t":"li","q":"Which one do you hear?","say":"ubhuti wakho","o":["ubhuti wakho","usisi wam","utata wakho"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["utata wakho","your father"],["usisi wam","my sister"],["ubhuti wakho","your brother"]]},
{"t":"mc","q":"With igama the pair was lam/lakho; with people it is…","o":["wam and wakho","nam and nakho","yam and yakho"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umama wam","o":["umama wam","abazali","usisi wam"],"a":0}
]},
{"id":"xh_f3_5","title":"Checkpoint: my family","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does abazali mean?","o":["parents","family","cousins"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"intsapho","o":["intsapho","abazali","umzala"],"a":0},
{"t":"mc","q":"Which one means your brother?","o":["ubhuti wakho","ubhuti wam","oobhuti"],"a":0},
{"t":"mc","q":"umama wam means…","o":["my mother","your mother","my grandmother"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utata wakho","o":["utata wakho","utata","umama wam"],"a":0},
{"t":"mc","q":"Review — which one means people?","o":["abantu","abazali","abantwana"],"a":0}
]},

/* ---------- f4 · Who is this? ---------- */
{"id":"xh_f4","title":"Who is this?","step":"learn","meta":"Introduce your people","vocab":[["lo","LAW","this person"],["Ngubani lo?","ngoo-BAH-nee LAW","who is this?"],["yena","YEH-nah","he or she"],["Lo ngumama wam","LAW ngoo-MAH-mah WAHM","this is my mother"],["Lo ngutata wam","LAW ngoo-TAH-tah WAHM","this is my father"],["nguye","NGOO-yeh","it is him"]],"ex":[
{"t":"note","tag":"Pointing politely","q":"Lo — this person","body":"<p><b>Lo</b> is <i>this person</i>, and <b>Ngubani lo?</b> asks <i>who is this?</i> You met ngubani with names — here it points at people.</p>","eg":[["lo","LAW","this person"],["Ngubani lo?","ngoo-BAH-nee LAW","who is this?"]]},
{"t":"li","q":"Which one do you hear?","say":"Ngubani lo?","o":["Ngubani lo?","lo"],"a":0},
{"t":"mc","q":"Ngubani lo? asks…","o":["who is this?","where is this?","what is this?"],"a":0},
{"t":"note","tag":"Introducing","q":"Lo ngu- — this is…","body":"<p>To introduce someone, point with lo and glue <b>ngu-</b> to the person: <b>Lo ngumama wam</b> — <i>this is my mother</i>. <b>Lo ngutata wam</b> — <i>this is my father</i>. The same ngu- you used in NdinguSipho.</p>","eg":[["Lo ngumama wam","LAW ngoo-MAH-mah WAHM","this is my mother"],["Lo ngutata wam","LAW ngoo-TAH-tah WAHM","this is my father"]]},
{"t":"li","q":"Which introduction do you hear?","say":"Lo ngumama wam","o":["Lo ngumama wam","Lo ngutata wam"],"a":0},
{"t":"mc","q":"Lo ngutata wam means…","o":["this is my father","this is your father","who is my father?"],"a":0},
{"t":"note","tag":"He and she","q":"Yena — one word for both","body":"<p>Xhosa has no he/she split: <b>yena</b> covers both, and <b>nguye</b> answers <i>it is him</i> or <i>it is her</i>. One pronoun, zero gender headaches — a freebie.</p>","eg":[["yena","YEH-nah","he or she"],["nguye","NGOO-yeh","it is him"]]},
{"t":"li","q":"Which one do you hear?","say":"yena","o":["yena","nguye"],"a":0},
{"t":"mc","q":"yena means…","o":["he or she","only he","only she"],"a":0}
]},
{"id":"xh_f4_2","title":"Hearing introductions","step":"recognize","meta":"Who is who","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"lo","o":["lo","yena","nguye"],"a":0},
{"t":"mc","q":"What does nguye mean?","o":["it is him","who is this?","this person"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Lo ngutata wam","o":["Lo ngutata wam","Lo ngumama wam","Ngubani lo?"],"a":0},
{"t":"mc","q":"To introduce your mother you say…","o":["Lo ngumama wam","Ngubani lo?","Umama wakho"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nguye","o":["nguye","yena","lo"],"a":0},
{"t":"mc","q":"Xhosa pronouns and gender…","o":["yena covers he and she","yena is only she","every noun has a gender"],"a":0}
]},
{"id":"xh_f4_3","title":"Building introductions","step":"build","meta":"Present your family","vocab":[],"ex":[
{"t":"fill","q":"Complete: this is my mother","s":"Lo ngumama ___.","o":["wam","wakho","lam"],"a":0},
{"t":"wb","q":"Build: who is this?","a":["ngubani","lo"],"pool":["ngubani","lo","yena"]},
{"t":"fill","q":"Complete: it is him","s":"ngu___","o":["ye","ya","yo"],"a":0},
{"t":"wb","q":"Build: this is my father","a":["lo","ngutata","wam"],"pool":["lo","ngutata","wam","wakho"]},
{"t":"li","q":"Which one do you hear?","say":"Ngubani lo?","o":["Ngubani lo?","Lo ngumama wam","yena"],"a":0}
]},
{"id":"xh_f4_4","title":"Introductions in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["lo","this person"],["yena","he or she"],["nguye","it is him"]]},
{"t":"li","q":"Which one do you hear?","say":"Lo ngumama wam","o":["Lo ngumama wam","Lo ngutata wam","Ngubani lo?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ngubani lo?","who is this?"],["Lo ngutata wam","this is my father"]]},
{"t":"mc","q":"The ngu- of introductions also appeared in…","o":["NdinguSipho","Ndiyaphila","Molweni"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"yena","o":["yena","lo","nguye"],"a":0}
]},
{"id":"xh_f4_5","title":"Checkpoint: who is this","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Ngubani lo? asks…","o":["who is this?","who are you?","where is he?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Lo ngutata wam","o":["Lo ngutata wam","Lo ngumama wam","nguye"],"a":0},
{"t":"mc","q":"Which one means he or she?","o":["yena","lo","wena"],"a":0},
{"t":"mc","q":"A friend points at your photo and asks Ngubani lo? about your mom. You say…","o":["Lo ngumama wam","Umama wakho","Ngubani"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nguye","o":["nguye","yena","lam"],"a":0},
{"t":"mc","q":"Review — which one means your father?","o":["utata wakho","utata wam","utatomkhulu"],"a":0}
]},

/* ---------- f5 · Respect & clan names ---------- */
{"id":"xh_f5","title":"Respect and clan names","step":"learn","meta":"Intlonipho — how Xhosa honour works","vocab":[["intlonipho","een-tlaw-NEE-paw","respect"],["isiduko","ee-see-DOO-kaw","clan name"],["amaXhosa","ah-mah-XHAW-sah","the Xhosa people"],["umXhosa","oom-XHAW-sah","a Xhosa person"],["Uxolo tata","oo-XAW-law TAH-tah","excuse me, sir"],["Enkosi mama","ehn-KAW-see MAH-mah","thank you, madam"]],"ex":[
{"t":"note","tag":"Respect","q":"Intlonipho carries the culture","body":"<p><b>Intlonipho</b> — <i>respect</i> — is the quiet engine of Xhosa life: elders greeted first, both hands to give and receive, tata and mama for every elder. Get intlonipho right and grammar mistakes are instantly forgiven.</p>","eg":[["intlonipho","een-tlaw-NEE-paw","respect"],["Uxolo tata","oo-XAW-law TAH-tah","excuse me, sir"],["Enkosi mama","ehn-KAW-see MAH-mah","thank you, madam"]]},
{"t":"li","q":"Which one do you hear?","say":"intlonipho","o":["intlonipho","Uxolo tata"],"a":0},
{"t":"mc","q":"What does intlonipho mean?","o":["respect","clan name","greeting"],"a":0},
{"t":"note","tag":"The people","q":"AmaXhosa and umXhosa","body":"<p>The people are <b>amaXhosa</b>; one person is <b>umXhosa</b>. Same pattern you know — um- for one, a plural prefix for many (this class uses ama-).</p>","eg":[["amaXhosa","ah-mah-XHAW-sah","the Xhosa people"],["umXhosa","oom-XHAW-sah","a Xhosa person"]]},
{"t":"li","q":"One or many — which do you hear?","say":"amaXhosa","o":["amaXhosa","umXhosa"],"a":0},
{"t":"mc","q":"umXhosa means…","o":["a Xhosa person","the Xhosa people","the Xhosa language"],"a":0},
{"t":"note","tag":"Clan names","q":"Isiduko — the deeper name","body":"<p>Every Xhosa person carries an <b>isiduko</b> — a clan name older than their surname. Nelson Mandela was <i>Madiba</i>: that famous name is his isiduko. Calling someone by their clan name is the deepest everyday honour — if a friend tells you theirs, treasure it.</p>","eg":[["isiduko","ee-see-DOO-kaw","clan name"]]},
{"t":"li","q":"Which one do you hear?","say":"isiduko","o":["isiduko","amaXhosa"],"a":0},
{"t":"mc","q":"Madiba — the name the world used for Mandela — is his…","o":["isiduko","igama","idolophu"],"a":0}
]},
{"id":"xh_f5_2","title":"Hearing respect words","step":"recognize","meta":"People, clans, honour","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"umXhosa","o":["umXhosa","amaXhosa","isiduko"],"a":0},
{"t":"mc","q":"What does isiduko mean?","o":["clan name","respect","surname"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Enkosi mama","o":["Enkosi mama","Uxolo tata","intlonipho"],"a":0},
{"t":"mc","q":"Which one means the Xhosa people?","o":["amaXhosa","umXhosa","isiXhosa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uxolo tata","o":["Uxolo tata","Enkosi mama","umXhosa"],"a":0},
{"t":"mc","q":"Giving and receiving with both hands shows…","o":["intlonipho","isiduko","igama"],"a":0}
]},
{"id":"xh_f5_3","title":"Building respect words","step":"build","meta":"Honour, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: respect","s":"intloni___o","o":["ph","p","b"],"a":0},
{"t":"wb","q":"Build: excuse me, sir","a":["uxolo","tata"],"pool":["uxolo","tata","mama"]},
{"t":"fill","q":"Complete: the Xhosa people","s":"___Xhosa","o":["ama","um","isi"],"a":0},
{"t":"wb","q":"Build: thank you, madam","a":["enkosi","mama"],"pool":["enkosi","mama","tata"]},
{"t":"li","q":"Which one do you hear?","say":"amaXhosa","o":["amaXhosa","umXhosa","intlonipho"],"a":0}
]},
{"id":"xh_f5_4","title":"Respect in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["intlonipho","respect"],["isiduko","clan name"],["umXhosa","a Xhosa person"]]},
{"t":"li","q":"Which one do you hear?","say":"isiduko","o":["isiduko","intlonipho","amaXhosa"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["amaXhosa","the Xhosa people"],["Uxolo tata","excuse me, sir"],["Enkosi mama","thank you, madam"]]},
{"t":"mc","q":"isiXhosa, umXhosa, amaXhosa — the prefixes mean…","o":["language, person, people","people, language, person","person, people, language"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"intlonipho","o":["intlonipho","isiduko","Enkosi mama"],"a":0}
]},
{"id":"xh_f5_5","title":"Checkpoint: respect","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does intlonipho mean?","o":["respect","clan name","family"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umXhosa","o":["umXhosa","amaXhosa","umzala"],"a":0},
{"t":"mc","q":"A clan name older than the surname is the…","o":["isiduko","igama","intsapho"],"a":0},
{"t":"mc","q":"You need to pass an elder man in a full taxi. You say…","o":["Uxolo tata","Hamba","Uxolo bhuti"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amaXhosa","o":["amaXhosa","isiduko","intlonipho"],"a":0},
{"t":"mc","q":"Review — intsapho means…","o":["family","parents","respect"],"a":0}
]},

/* ---------- f6 · Is anyone home? ---------- */
{"id":"xh_f6","title":"Is anyone home?","step":"learn","meta":"Ukhona, akekho — asking after people","vocab":[["ikhaya","ee-KHAH-yah","home"],["Ukhona utata?","oo-KHAW-nah oo-TAH-tah","is father there?"],["ukhona","oo-KHAW-nah","he is here"],["akekho","ah-KEH-kaw","he is not here"],["Uphi umama?","OO-pee oo-MAH-mah","where is mother?"],["usekhaya","oo-seh-KHAH-yah","she is at home"]],"ex":[
{"t":"note","tag":"Home","q":"Ikhaya — more than a house","body":"<p><b>Ikhaya</b> is <i>home</i> — indlu is the building, ikhaya is where your people are. Khayelitsha carries it: <i>ikhaya elitsha</i>, new home.</p>","eg":[["ikhaya","ee-KHAH-yah","home"]]},
{"t":"li","q":"Which one do you hear?","say":"ikhaya","o":["ikhaya","indlu"],"a":0},
{"t":"mc","q":"What does ikhaya mean?","o":["home","house","family"],"a":0},
{"t":"note","tag":"Present or absent","q":"Ukhona and akekho","body":"<p>Knock on a door: <b>Ukhona utata?</b> — <i>is father there?</i> The answers: <b>ukhona</b> — <i>he is here</i> — or <b>akekho</b> — <i>he is not here</i>. You know ndikhona (I am here) from greetings; ukhona is the same word wearing the u- of he/she.</p>","eg":[["Ukhona utata?","oo-KHAW-nah oo-TAH-tah","is father there?"],["ukhona","oo-KHAW-nah","he is here"],["akekho","ah-KEH-kaw","he is not here"]]},
{"t":"li","q":"Present or absent — which do you hear?","say":"akekho","o":["akekho","ukhona"],"a":0},
{"t":"mc","q":"akekho means…","o":["he is not here","he is here","he is at home"],"a":0},
{"t":"note","tag":"Where is she?","q":"Uphi and usekhaya","body":"<p><b>Uphi umama?</b> — <i>where is mother?</i> — the phi you know, pointed at a person. A common answer: <b>usekhaya</b> — <i>she is at home</i>.</p>","eg":[["Uphi umama?","OO-pee oo-MAH-mah","where is mother?"],["usekhaya","oo-seh-KHAH-yah","she is at home"]]},
{"t":"li","q":"Which one do you hear?","say":"usekhaya","o":["usekhaya","Uphi umama?"],"a":0},
{"t":"mc","q":"Uphi umama? asks…","o":["where is mother?","is mother there?","how is mother?"],"a":0}
]},
{"id":"xh_f6_2","title":"Hearing home words","step":"recognize","meta":"Here, not here, at home","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ukhona","o":["ukhona","akekho","ikhaya"],"a":0},
{"t":"mc","q":"What does usekhaya mean?","o":["she is at home","she is not here","where is she?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ukhona utata?","o":["Ukhona utata?","Uphi umama?","usekhaya"],"a":0},
{"t":"mc","q":"Which one means he is not here?","o":["akekho","ukhona","usekhaya"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uphi umama?","o":["Uphi umama?","Ukhona utata?","ikhaya"],"a":0},
{"t":"mc","q":"indlu is the building; the word for home-where-your-people-are is…","o":["ikhaya","ilokishi","intsapho"],"a":0}
]},
{"id":"xh_f6_3","title":"Building home phrases","step":"build","meta":"Ask after people","vocab":[],"ex":[
{"t":"fill","q":"Complete: he is not here","s":"ake___o","o":["kh","k","q"],"a":0},
{"t":"wb","q":"Build: is father there?","a":["ukhona","utata"],"pool":["ukhona","utata","akekho"]},
{"t":"fill","q":"Complete: she is at home","s":"use___aya","o":["kh","k","q"],"a":0},
{"t":"wb","q":"Build: where is mother?","a":["uphi","umama"],"pool":["uphi","umama","ukhona"]},
{"t":"li","q":"Which one do you hear?","say":"ikhaya","o":["ikhaya","usekhaya","akekho"],"a":0}
]},
{"id":"xh_f6_4","title":"Home words in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ikhaya","home"],["ukhona","he is here"],["akekho","he is not here"]]},
{"t":"li","q":"Which one do you hear?","say":"Ukhona utata?","o":["Ukhona utata?","usekhaya","Uphi umama?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ukhona utata?","is father there?"],["Uphi umama?","where is mother?"],["usekhaya","she is at home"]]},
{"t":"mc","q":"ndikhona is I am here; ukhona is…","o":["he or she is here","you are here","we are here"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"akekho","o":["akekho","ikhaya","ukhona"],"a":0}
]},
{"id":"xh_f6_5","title":"Checkpoint: anyone home","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Ukhona utata? asks…","o":["is father there?","where is father?","how is father?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usekhaya","o":["usekhaya","ukhona","ikhaya"],"a":0},
{"t":"mc","q":"You knock; the child says Akekho. Father is…","o":["not here","at home","on his way"],"a":0},
{"t":"mc","q":"Which one means home?","o":["ikhaya","indlu","idolophu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uphi umama?","o":["Uphi umama?","Ukhona utata?","akekho"],"a":0},
{"t":"mc","q":"Review — Khayelitsha means…","o":["new home","our pride","big town"],"a":0}
]},

/* ---------- f7 · Family conversation ---------- */
{"id":"xh_f7","title":"Family conversation","step":"learn","meta":"We and they — the concord set completes","vocab":[["Unjani umama?","oon-JAH-nee oo-MAH-mah","how is your mother?"],["uphilile","oo-pee-LEE-leh","she is well"],["sonke","SAWN-keh","all of us"],["sihlala","see-HLAH-lah","we live"],["bahlala","bah-HLAH-lah","they live"],["kunye","KOO-nyeh","together"]],"ex":[
{"t":"note","tag":"Asking after family","q":"Unjani umama?","body":"<p>Real Xhosa small talk asks after the family: <b>Unjani umama?</b> — <i>how is your mother?</i> The warm answer: <b>uphilile</b> — <i>she is well</i>.</p>","eg":[["Unjani umama?","oon-JAH-nee oo-MAH-mah","how is your mother?"],["uphilile","oo-pee-LEE-leh","she is well"]]},
{"t":"li","q":"Which one do you hear?","say":"uphilile","o":["uphilile","Unjani umama?"],"a":0},
{"t":"mc","q":"uphilile means…","o":["she is well","she is here","she is at home"],"a":0},
{"t":"note","tag":"We and they","q":"Si- and ba- complete the set","body":"<p>You own ndi- (<i>I</i>) and u- (<i>you / he / she</i>). Now the last two: <b>si-</b> is <i>we</i> and <b>ba-</b> is <i>they</i>. <b>Sihlala eKapa</b> — <i>we live in Cape Town</i>; <b>bahlala eGugulethu</b> — <i>they live in Gugulethu</i>. That is the whole everyday person set.</p>","eg":[["sihlala","see-HLAH-lah","we live"],["bahlala","bah-HLAH-lah","they live"]]},
{"t":"li","q":"We or they — which do you hear?","say":"bahlala","o":["bahlala","sihlala"],"a":0},
{"t":"mc","q":"sihlala means…","o":["we live","they live","I live"],"a":0},
{"t":"note","tag":"Together","q":"Sonke and kunye","body":"<p><b>Sonke</b> is <i>all of us</i> and <b>kunye</b> is <i>together</i>: <b>Sihlala kunye sonke</b> — <i>we all live together</i> — the sentence that describes half the homes in Khayelitsha, three generations under one roof.</p>","eg":[["sonke","SAWN-keh","all of us"],["kunye","KOO-nyeh","together"]]},
{"t":"li","q":"Which one do you hear?","say":"sonke","o":["sonke","kunye"],"a":0},
{"t":"mc","q":"kunye means…","o":["together","all of us","at home"],"a":0}
]},
{"id":"xh_f7_2","title":"Hearing the conversation","step":"recognize","meta":"We, they, well and together","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"sihlala","o":["sihlala","bahlala","sonke"],"a":0},
{"t":"mc","q":"What does sonke mean?","o":["all of us","together","we live"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Unjani umama?","o":["Unjani umama?","uphilile","kunye"],"a":0},
{"t":"mc","q":"Which one means they live?","o":["bahlala","sihlala","ndihlala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kunye","o":["kunye","sonke","uphilile"],"a":0},
{"t":"mc","q":"Someone asks Unjani umama? Mom is fine, so…","o":["Uphilile, enkosi","Akekho","Ndiyaphila"],"a":0}
]},
{"id":"xh_f7_3","title":"Building we and they","step":"build","meta":"The concord set, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: we live in Cape Town","s":"___hlala eKapa.","o":["si","ba","ndi"],"a":0},
{"t":"wb","q":"Build: they live in Gugulethu","a":["bahlala","eGugulethu"],"pool":["bahlala","eGugulethu","sihlala"]},
{"t":"fill","q":"Complete: she is well","s":"uphili___","o":["le","la","lo"],"a":0},
{"t":"wb","q":"Build: we all live together","a":["sihlala","kunye","sonke"],"pool":["sihlala","kunye","sonke","bahlala"]},
{"t":"li","q":"Which one do you hear?","say":"bahlala","o":["bahlala","sihlala","kunye"],"a":0}
]},
{"id":"xh_f7_4","title":"The conversation in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Unjani umama?","how is your mother?"],["uphilile","she is well"],["kunye","together"]]},
{"t":"li","q":"Which one do you hear?","say":"sonke","o":["sonke","kunye","bahlala"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["sihlala","we live"],["bahlala","they live"],["sonke","all of us"]]},
{"t":"mc","q":"The full everyday person set is…","o":["ndi-, u-, si-, ba-","um-, aba-, oo-, ama-","lo, yena, wena, nguye"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"uphilile","o":["uphilile","sonke","sihlala"],"a":0}
]},
{"id":"xh_f7_5","title":"Checkpoint: Zone 3 complete","step":"checkpoint","meta":"Family & respect — show it all","vocab":[],"ex":[
{"t":"mc","q":"Unjani umama? — mom is well, so you answer…","o":["Uphilile, enkosi","Ukhona","Sonke"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"sihlala","o":["sihlala","bahlala","uphilile"],"a":0},
{"t":"mc","q":"Which one means they live?","o":["bahlala","sihlala","ndihlala"],"a":0},
{"t":"mc","q":"Review — Lo ngumama wam means…","o":["this is my mother","where is my mother?","your mother is here"],"a":0},
{"t":"mc","q":"Review — the clan name older than a surname is the…","o":["isiduko","igama","intlonipho"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"akekho","o":["akekho","ukhona","usekhaya"],"a":0},
{"t":"mc","q":"Review — the plural of ubhuti is…","o":["oobhuti","ababhuti","abahuti"],"a":0}
]},

/* ---------- n1 · Numbers 1–5 ---------- */
{"id":"xh_n1","title":"Numbers one to five","step":"learn","meta":"Counting begins — inye to zintlanu","vocab":[["inye","EE-nyeh","1"],["zimbini","zeem-BEE-nee","2"],["zintathu","zeen-TAH-too","3"],["zine","ZEE-neh","4"],["zintlanu","zeen-TLAH-noo","5"]],"ex":[
{"t":"note","tag":"Counting","q":"One, two, three","body":"<p>Counting in Xhosa: <b>inye</b> — one, <b>zimbini</b> — two, <b>zintathu</b> — three. Say them in rhythm; the zi- at the front is the counting voice.</p>","eg":[["inye","EE-nyeh","1"],["zimbini","zeem-BEE-nee","2"],["zintathu","zeen-TAH-too","3"]]},
{"t":"li","q":"Which number do you hear?","say":"zimbini","o":["zimbini","inye","zintathu"],"a":0},
{"t":"mc","q":"What is zintathu?","o":["3","2","5"],"a":0},
{"t":"note","tag":"Four and five","q":"Zine and zintlanu","body":"<p><b>Zine</b> — four, <b>zintlanu</b> — five, with the blown tl you learned in hl words. That is one hand counted.</p><p>Real-life honesty: in South Africa, prices, phone numbers and ages are usually said in <b>English</b>, even mid-Xhosa sentence. The native numbers still matter — for counting things, for the days of the week you are about to meet, and for understanding elders.</p>","eg":[["zine","ZEE-neh","4"],["zintlanu","zeen-TLAH-noo","5"]]},
{"t":"li","q":"Which number do you hear?","say":"zintlanu","o":["zintlanu","zine"],"a":0},
{"t":"mc","q":"What is zine?","o":["4","5","1"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"inye","o":["inye","zine","zimbini"],"a":0},
{"t":"mc","q":"Prices and phone numbers in daily SA speech are usually said…","o":["in English","in old Xhosa","never aloud"],"a":0}
]},
{"id":"xh_n1_2","title":"Hearing 1–5","step":"recognize","meta":"Numbers by ear","vocab":[],"ex":[
{"t":"li","q":"Which number do you hear?","say":"zintathu","o":["zintathu","zintlanu","zimbini"],"a":0},
{"t":"mc","q":"Which one is 2?","o":["zimbini","zine","inye"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zine","o":["zine","inye","zintlanu"],"a":0},
{"t":"mc","q":"What is zintlanu?","o":["5","4","3"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zimbini","o":["zimbini","zintathu","zine"],"a":0},
{"t":"mc","q":"Which one is 1?","o":["inye","zine","zimbini"],"a":0}
]},
{"id":"xh_n1_3","title":"Building 1–5","step":"build","meta":"Spell the numbers","vocab":[],"ex":[
{"t":"fill","q":"Complete: 2","s":"zimbi___","o":["ni","ne","na"],"a":0},
{"t":"wb","q":"Build the number: 3","a":["zintathu"],"pool":["zintathu","zintlanu","zine"]},
{"t":"fill","q":"Complete: 5","s":"zin___anu","o":["tl","hl","dl"],"a":0},
{"t":"wb","q":"Build the number: 1","a":["inye"],"pool":["inye","zine","zimbini"]},
{"t":"li","q":"Which number do you hear?","say":"zintlanu","o":["zintlanu","zintathu","inye"],"a":0}
]},
{"id":"xh_n1_4","title":"1–5 in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the number","pairs":[["inye","1"],["zimbini","2"],["zintathu","3"]]},
{"t":"li","q":"Which number do you hear?","say":"zine","o":["zine","zimbini","zintlanu"],"a":0},
{"t":"match","q":"Match the number","pairs":[["zine","4"],["zintlanu","5"]]},
{"t":"mc","q":"Count up: inye, zimbini, … what comes next?","o":["zintathu","zine","zintlanu"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zintathu","o":["zintathu","zine","inye"],"a":0}
]},
{"id":"xh_n1_5","title":"Checkpoint: 1–5","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What is zimbini?","o":["2","3","4"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"inye","o":["inye","zimbini","zine"],"a":0},
{"t":"mc","q":"Which one is 5?","o":["zintlanu","zintathu","zine"],"a":0},
{"t":"mc","q":"Count up: zintathu, zine, … what comes next?","o":["zintlanu","zimbini","inye"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zintlanu","o":["zintlanu","zine","zintathu"],"a":0},
{"t":"mc","q":"Review — which one means all of us?","o":["sonke","kunye","sihlala"],"a":0}
]},

/* ---------- n2 · Numbers 6–10 ---------- */
{"id":"xh_n2","title":"Numbers six to ten","step":"learn","meta":"The second hand — with a double-click surprise","vocab":[["zintandathu","zeen-tahn-DAH-too","6"],["sixhenxe","see-XHEN-xeh","7"],["sibhozo","see-BAW-zaw","8"],["lithoba","lee-TAW-bah","9"],["lishumi","lee-SHOO-mee","10"]],"ex":[
{"t":"note","tag":"Six to eight","q":"Zintandathu, sixhenxe, sibhozo","body":"<p><b>Zintandathu</b> — six. Then the famous one: <b>sixhenxe</b> — seven — TWO clicks in one number (xh… x…). Every learner trips on it; every Xhosa speaker smiles when you land it. <b>Sibhozo</b> — eight — is your reward: no clicks at all.</p>","eg":[["zintandathu","zeen-tahn-DAH-too","6"],["sixhenxe","see-XHEN-xeh","7"],["sibhozo","see-BAW-zaw","8"]]},
{"t":"li","q":"Which number do you hear?","say":"sixhenxe","o":["sixhenxe","sibhozo","zintandathu"],"a":0},
{"t":"mc","q":"What is sixhenxe?","o":["7","6","8"],"a":0},
{"t":"note","tag":"Nine and ten","q":"Lithoba and lishumi","body":"<p><b>Lithoba</b> — nine, <b>lishumi</b> — ten. Both hands counted: you can now count everything from amaqanda in a tray to taxis in a rank.</p>","eg":[["lithoba","lee-TAW-bah","9"],["lishumi","lee-SHOO-mee","10"]]},
{"t":"li","q":"Which number do you hear?","say":"lishumi","o":["lishumi","lithoba"],"a":0},
{"t":"mc","q":"What is lithoba?","o":["9","10","8"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zintandathu","o":["zintandathu","sibhozo","sixhenxe"],"a":0},
{"t":"mc","q":"The number with two clicks in it is…","o":["sixhenxe","sibhozo","lishumi"],"a":0}
]},
{"id":"xh_n2_2","title":"Hearing 6–10","step":"recognize","meta":"The upper hand by ear","vocab":[],"ex":[
{"t":"li","q":"Which number do you hear?","say":"sibhozo","o":["sibhozo","sixhenxe","lithoba"],"a":0},
{"t":"mc","q":"Which one is 10?","o":["lishumi","lithoba","zintandathu"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"lithoba","o":["lithoba","lishumi","sibhozo"],"a":0},
{"t":"mc","q":"What is zintandathu?","o":["6","7","9"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"sixhenxe","o":["sixhenxe","zintandathu","lishumi"],"a":0},
{"t":"mc","q":"Which one is 8?","o":["sibhozo","sixhenxe","lithoba"],"a":0}
]},
{"id":"xh_n2_3","title":"Building 6–10","step":"build","meta":"Spell the upper hand","vocab":[],"ex":[
{"t":"fill","q":"Complete: 7","s":"si___enxe","o":["xh","x","qh"],"a":0},
{"t":"wb","q":"Build the number: 10","a":["lishumi"],"pool":["lishumi","lithoba","sibhozo"]},
{"t":"fill","q":"Complete: 8","s":"sibho___o","o":["z","s","dl"],"a":0},
{"t":"wb","q":"Build the number: 6","a":["zintandathu"],"pool":["zintandathu","zintathu","sixhenxe"]},
{"t":"li","q":"Which number do you hear?","say":"lithoba","o":["lithoba","zintandathu","sixhenxe"],"a":0}
]},
{"id":"xh_n2_4","title":"6–10 in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the number","pairs":[["zintandathu","6"],["sixhenxe","7"],["sibhozo","8"]]},
{"t":"li","q":"Which number do you hear?","say":"lishumi","o":["lishumi","sibhozo","lithoba"],"a":0},
{"t":"match","q":"Match the number","pairs":[["lithoba","9"],["lishumi","10"]]},
{"t":"mc","q":"Count up: sixhenxe, sibhozo, … what comes next?","o":["lithoba","lishumi","zintandathu"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"sibhozo","o":["sibhozo","lithoba","zintandathu"],"a":0}
]},
{"id":"xh_n2_5","title":"Checkpoint: 6–10","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What is sibhozo?","o":["8","7","9"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zintandathu","o":["zintandathu","sixhenxe","lishumi"],"a":0},
{"t":"mc","q":"Which one is 9?","o":["lithoba","lishumi","sibhozo"],"a":0},
{"t":"mc","q":"What is lishumi?","o":["10","9","6"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"sixhenxe","o":["sixhenxe","sibhozo","lithoba"],"a":0},
{"t":"mc","q":"Review — what is zintlanu?","o":["5","4","6"],"a":0}
]},

/* ---------- n3 · The working week ---------- */
{"id":"xh_n3","title":"Monday to Friday","step":"learn","meta":"The days are built from your numbers","vocab":[["uMvulo","oom-VOO-law","Monday"],["uLwesibini","oo-lweh-see-BEE-nee","Tuesday"],["uLwesithathu","oo-lweh-see-TAH-too","Wednesday"],["uLwesine","oo-lweh-SEE-neh","Thursday"],["uLwesihlanu","oo-lweh-see-HLAH-noo","Friday"]],"ex":[
{"t":"note","tag":"The opener","q":"Monday opens the week","body":"<p><b>UMvulo</b> — Monday — comes from <i>vula</i>, to open: the day that opens the week.</p>","eg":[["uMvulo","oom-VOO-law","Monday"]]},
{"t":"li","q":"Which one do you hear?","say":"uMvulo","o":["uMvulo","umzala"],"a":0},
{"t":"mc","q":"uMvulo — the day that opens the week — is…","o":["Monday","Sunday","Friday"],"a":0},
{"t":"note","tag":"Numbered days","q":"Your numbers pay off","body":"<p>Now the payoff for learning numbers: Tuesday to Friday are literally <i>the second</i>, <i>the third</i>, <i>the fourth</i>, <i>the fifth</i>. <b>uLwesibini</b> (bini — two), <b>uLwesithathu</b> (thathu — three), <b>uLwesine</b> (ne — four), <b>uLwesihlanu</b> (hlanu — five). Hear the number inside each day and you never mix them up.</p>","eg":[["uLwesibini","oo-lweh-see-BEE-nee","Tuesday"],["uLwesithathu","oo-lweh-see-TAH-too","Wednesday"],["uLwesine","oo-lweh-SEE-neh","Thursday"]]},
{"t":"li","q":"Which day do you hear?","say":"uLwesithathu","o":["uLwesithathu","uLwesibini","uLwesine"],"a":0},
{"t":"mc","q":"uLwesine carries the number four — it is…","o":["Thursday","Tuesday","Wednesday"],"a":0},
{"t":"note","tag":"Friday","q":"The fifth day","body":"<p><b>uLwesihlanu</b> — the fifth day — Friday. The best-loved day of the working week, in any language.</p>","eg":[["uLwesihlanu","oo-lweh-see-HLAH-noo","Friday"]]},
{"t":"li","q":"Which day do you hear?","say":"uLwesihlanu","o":["uLwesihlanu","uLwesine","uMvulo"],"a":0},
{"t":"mc","q":"Which day is Tuesday?","o":["uLwesibini","uLwesithathu","uMvulo"],"a":0}
]},
{"id":"xh_n3_2","title":"Hearing the week","step":"recognize","meta":"Which day is it?","vocab":[],"ex":[
{"t":"li","q":"Which day do you hear?","say":"uLwesibini","o":["uLwesibini","uLwesine","uLwesithathu"],"a":0},
{"t":"mc","q":"uLwesithathu is…","o":["Wednesday","Tuesday","Thursday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uLwesine","o":["uLwesine","uLwesihlanu","uMvulo"],"a":0},
{"t":"mc","q":"Which day is Friday?","o":["uLwesihlanu","uLwesine","uLwesibini"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uMvulo","o":["uMvulo","uLwesibini","uLwesihlanu"],"a":0},
{"t":"mc","q":"The number hiding inside uLwesibini is…","o":["two","three","five"],"a":0}
]},
{"id":"xh_n3_3","title":"Building the week","step":"build","meta":"Assemble the days","vocab":[],"ex":[
{"t":"fill","q":"Complete: Wednesday (the third day)","s":"uLwesi___athu","o":["th","t","tl"],"a":0},
{"t":"wb","q":"Build the day: Friday","a":["uLwesihlanu"],"pool":["uLwesihlanu","uLwesine","uMvulo"]},
{"t":"fill","q":"Complete: Monday","s":"uMvu___","o":["lo","la","le"],"a":0},
{"t":"wb","q":"Build the day: Tuesday","a":["uLwesibini"],"pool":["uLwesibini","uLwesithathu","uLwesihlanu"]},
{"t":"li","q":"Which day do you hear?","say":"uLwesine","o":["uLwesine","uLwesithathu","uLwesibini"],"a":0}
]},
{"id":"xh_n3_4","title":"The week in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the day","pairs":[["uMvulo","Monday"],["uLwesibini","Tuesday"],["uLwesithathu","Wednesday"]]},
{"t":"li","q":"Which day do you hear?","say":"uLwesihlanu","o":["uLwesihlanu","uLwesine","uLwesithathu"],"a":0},
{"t":"match","q":"Match the day","pairs":[["uLwesine","Thursday"],["uLwesihlanu","Friday"]]},
{"t":"mc","q":"The days run uMvulo, uLwesibini, … what comes next?","o":["uLwesithathu","uLwesine","uLwesihlanu"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uLwesithathu","o":["uLwesithathu","uMvulo","uLwesine"],"a":0}
]},
{"id":"xh_n3_5","title":"Checkpoint: the week","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"uLwesihlanu is…","o":["Friday","Thursday","Monday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uLwesibini","o":["uLwesibini","uLwesihlanu","uMvulo"],"a":0},
{"t":"mc","q":"Which day carries the number three?","o":["uLwesithathu","uLwesibini","uLwesine"],"a":0},
{"t":"mc","q":"uMvulo comes from vula, to…","o":["open","close","rest"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uMvulo","o":["uMvulo","uLwesine","uLwesithathu"],"a":0},
{"t":"mc","q":"Review — what is sixhenxe?","o":["7","6","8"],"a":0}
]},

/* ---------- n4 · Weekend & today ---------- */
{"id":"xh_n4","title":"The weekend","step":"learn","meta":"uMgqibelo, iCawa — and namhlanje","vocab":[["uMgqibelo","oom-gqee-BEH-law","Saturday"],["iCawa","ee-CAH-wah","Sunday"],["impelaveki","eem-peh-lah-VEH-kee","weekend"],["iveki","ee-VEH-kee","week"],["namhlanje","nahm-HLAHN-jeh","today"]],"ex":[
{"t":"note","tag":"Saturday","q":"The day that finishes","body":"<p><b>uMgqibelo</b> — Saturday — hides the deep gq click and comes from <i>gqibela</i>, to finish: the day the working week is done.</p>","eg":[["uMgqibelo","oom-gqee-BEH-law","Saturday"]]},
{"t":"li","q":"Which day do you hear?","say":"uMgqibelo","o":["uMgqibelo","uLwesihlanu"],"a":0},
{"t":"mc","q":"uMgqibelo — from gqibela, to finish — is…","o":["Saturday","Sunday","Monday"],"a":0},
{"t":"note","tag":"Sunday","q":"iCawa — with your first click","body":"<p><b>iCawa</b> — Sunday — starts with the dental c click you mastered first. The word also means <i>church</i>: in Xhosa life, Sunday and church share a name.</p>","eg":[["iCawa","ee-CAH-wah","Sunday"]]},
{"t":"li","q":"Which day do you hear?","say":"iCawa","o":["iCawa","uMgqibelo"],"a":0},
{"t":"mc","q":"iCawa means Sunday and also…","o":["church","market","rest"],"a":0},
{"t":"note","tag":"Week and today","q":"Iveki, impelaveki, namhlanje","body":"<p><b>Iveki</b> is <i>the week</i> and <b>impelaveki</b> — <i>the end of the week</i> — is the weekend. <b>Namhlanje</b> is <i>today</i>: Yiveki entsha namhlanje — but one word at a time.</p>","eg":[["iveki","ee-VEH-kee","week"],["impelaveki","eem-peh-lah-VEH-kee","weekend"],["namhlanje","nahm-HLAHN-jeh","today"]]},
{"t":"li","q":"Which one do you hear?","say":"impelaveki","o":["impelaveki","iveki","namhlanje"],"a":0},
{"t":"mc","q":"namhlanje means…","o":["today","week","weekend"],"a":0}
]},
{"id":"xh_n4_2","title":"Hearing the weekend","step":"recognize","meta":"Weekend words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"iveki","o":["iveki","impelaveki","iCawa"],"a":0},
{"t":"mc","q":"What does impelaveki mean?","o":["weekend","week","Sunday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uMgqibelo","o":["uMgqibelo","iCawa","namhlanje"],"a":0},
{"t":"mc","q":"Which one is Sunday?","o":["iCawa","uMgqibelo","uMvulo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"namhlanje","o":["namhlanje","iveki","uMgqibelo"],"a":0},
{"t":"mc","q":"The deep gq click hides inside…","o":["uMgqibelo","iCawa","iveki"],"a":0}
]},
{"id":"xh_n4_3","title":"Building weekend words","step":"build","meta":"Assemble the days off","vocab":[],"ex":[
{"t":"fill","q":"Complete: Saturday","s":"uM___ibelo","o":["gq","q","gc"],"a":0},
{"t":"wb","q":"Build: weekend","a":["impelaveki"],"pool":["impelaveki","iveki","namhlanje"]},
{"t":"fill","q":"Complete: Sunday","s":"i___awa","o":["C","X","Q"],"a":0},
{"t":"wb","q":"Build: today","a":["namhlanje"],"pool":["namhlanje","iveki","iCawa"]},
{"t":"li","q":"Which one do you hear?","say":"iCawa","o":["iCawa","uMgqibelo","impelaveki"],"a":0}
]},
{"id":"xh_n4_4","title":"The weekend in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["uMgqibelo","Saturday"],["iCawa","Sunday"],["impelaveki","weekend"]]},
{"t":"li","q":"Which one do you hear?","say":"iveki","o":["iveki","namhlanje","iCawa"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["iveki","week"],["namhlanje","today"]]},
{"t":"mc","q":"Namhlanje yiCawa means today is…","o":["Sunday","Saturday","Monday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uMgqibelo","o":["uMgqibelo","uLwesihlanu","iCawa"],"a":0}
]},
{"id":"xh_n4_5","title":"Checkpoint: the weekend","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does iveki mean?","o":["week","weekend","today"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"impelaveki","o":["impelaveki","iveki","uMgqibelo"],"a":0},
{"t":"mc","q":"Which one is Saturday?","o":["uMgqibelo","iCawa","uLwesihlanu"],"a":0},
{"t":"mc","q":"iCawa shares its name with…","o":["church","school","market"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"namhlanje","o":["namhlanje","impelaveki","iCawa"],"a":0},
{"t":"mc","q":"Review — uLwesine is…","o":["Thursday","Tuesday","Friday"],"a":0}
]},

/* ---------- n5 · Yesterday, tomorrow, now ---------- */
{"id":"xh_n5","title":"Yesterday and tomorrow","step":"learn","meta":"Placing yourself in time","vocab":[["izolo","ee-ZAW-law","yesterday"],["ngomso","NGAWM-saw","tomorrow"],["ngoku","NGAW-koo","now"],["kusasa","koo-SAH-sah","in the morning"],["ebusuku","eh-boo-SOO-koo","at night"]],"ex":[
{"t":"note","tag":"Three days","q":"Izolo, namhlanje, ngomso","body":"<p>The time line of every conversation: <b>izolo</b> — yesterday, namhlanje — today (you know it), <b>ngomso</b> — tomorrow. Sobonana ngomso — see you tomorrow — you will hear it at every parting.</p>","eg":[["izolo","ee-ZAW-law","yesterday"],["ngomso","NGAWM-saw","tomorrow"]]},
{"t":"li","q":"Which one do you hear?","say":"ngomso","o":["ngomso","izolo"],"a":0},
{"t":"mc","q":"What does izolo mean?","o":["yesterday","tomorrow","today"],"a":0},
{"t":"note","tag":"Right now","q":"Ngoku","body":"<p><b>Ngoku</b> is <i>now</i> — and in Cape Town speech you will hear <i>ngoku ngoku</i>, now-now, which somehow means <i>very soon but not quite now</i>. South African time has its own grammar.</p>","eg":[["ngoku","NGAW-koo","now"]]},
{"t":"li","q":"Which one do you hear?","say":"ngoku","o":["ngoku","ngomso"],"a":0},
{"t":"mc","q":"ngoku ngoku — now-now — really means…","o":["very soon","immediately","yesterday"],"a":0},
{"t":"note","tag":"Morning and night","q":"Kusasa and ebusuku","body":"<p><b>Kusasa</b> — <i>in the morning</i> (also <i>tomorrow morning</i>) — and <b>ebusuku</b> — <i>at night</i>. Sobonana kusasa: see you in the morning.</p>","eg":[["kusasa","koo-SAH-sah","in the morning"],["ebusuku","eh-boo-SOO-koo","at night"]]},
{"t":"li","q":"Which one do you hear?","say":"ebusuku","o":["ebusuku","kusasa"],"a":0},
{"t":"mc","q":"kusasa means…","o":["in the morning","at night","yesterday"],"a":0}
]},
{"id":"xh_n5_2","title":"Hearing time words","step":"recognize","meta":"When exactly?","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"izolo","o":["izolo","ngomso","ngoku"],"a":0},
{"t":"mc","q":"What does ngomso mean?","o":["tomorrow","yesterday","now"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kusasa","o":["kusasa","ebusuku","izolo"],"a":0},
{"t":"mc","q":"Which one means at night?","o":["ebusuku","kusasa","ngoku"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ngoku","o":["ngoku","ngomso","kusasa"],"a":0},
{"t":"mc","q":"Sobonana ngomso means see you…","o":["tomorrow","tonight","now"],"a":0}
]},
{"id":"xh_n5_3","title":"Building time words","step":"build","meta":"Place events in time","vocab":[],"ex":[
{"t":"fill","q":"Complete: tomorrow","s":"ngo___o","o":["ms","mz","nts"],"a":0},
{"t":"wb","q":"Build: see you tomorrow","a":["sobonana","ngomso"],"pool":["sobonana","ngomso","izolo"]},
{"t":"fill","q":"Complete: at night","s":"ebusu___","o":["ku","ko","kho"],"a":0},
{"t":"wb","q":"Build: yesterday","a":["izolo"],"pool":["izolo","ngoku","kusasa"]},
{"t":"li","q":"Which one do you hear?","say":"ngomso","o":["ngomso","ngoku","ebusuku"],"a":0}
]},
{"id":"xh_n5_4","title":"Time in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["izolo","yesterday"],["ngomso","tomorrow"],["ngoku","now"]]},
{"t":"li","q":"Which one do you hear?","say":"kusasa","o":["kusasa","ngomso","ngoku"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["kusasa","in the morning"],["ebusuku","at night"]]},
{"t":"mc","q":"The natural order is izolo, namhlanje, …","o":["ngomso","ngoku","kusasa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ebusuku","o":["ebusuku","izolo","kusasa"],"a":0}
]},
{"id":"xh_n5_5","title":"Checkpoint: time words","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ngoku mean?","o":["now","tomorrow","in the morning"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izolo","o":["izolo","ebusuku","ngomso"],"a":0},
{"t":"mc","q":"Which one means in the morning?","o":["kusasa","ebusuku","izolo"],"a":0},
{"t":"mc","q":"A friend says Sobonana kusasa. You will meet…","o":["in the morning","at night","yesterday"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ngoku","o":["ngoku","kusasa","izolo"],"a":0},
{"t":"mc","q":"Review — impelaveki means…","o":["weekend","week","Sunday"],"a":0}
]},

/* ---------- n6 · When? ---------- */
{"id":"xh_n6","title":"When?","step":"learn","meta":"Nini — and putting on a day","vocab":[["nini?","NEE-nee","when?"],["Uza nini?","OO-zah NEE-nee","when are you coming?"],["ngoMvulo","ngawm-VOO-law","on Monday"],["ngeCawa","ngeh-CAH-wah","on Sunday"],["kaninzi","kah-NEEN-zee","often"]],"ex":[
{"t":"note","tag":"The question","q":"Nini — when?","body":"<p><b>Nini?</b> is <i>when?</i> — and with iza (come) from your first lessons: <b>Uza nini?</b> — <i>when are you coming?</i> — the question every Xhosa household asks visitors.</p>","eg":[["nini?","NEE-nee","when?"],["Uza nini?","OO-zah NEE-nee","when are you coming?"]]},
{"t":"li","q":"Which one do you hear?","say":"Uza nini?","o":["Uza nini?","nini?"],"a":0},
{"t":"mc","q":"Uza nini? asks…","o":["when are you coming?","where are you going?","who is coming?"],"a":0},
{"t":"note","tag":"On a day","q":"Ngo- and nge- dress the days","body":"<p>To say ON a day, days take <b>ngo-</b> or <b>nge-</b>: <b>ngoMvulo</b> — <i>on Monday</i>, <b>ngeCawa</b> — <i>on Sunday</i>. So: Ndiza ngoMvulo — I am coming on Monday.</p>","eg":[["ngoMvulo","ngawm-VOO-law","on Monday"],["ngeCawa","ngeh-CAH-wah","on Sunday"]]},
{"t":"li","q":"Which one do you hear?","say":"ngoMvulo","o":["ngoMvulo","ngeCawa"],"a":0},
{"t":"mc","q":"ngeCawa means…","o":["on Sunday","on Monday","next week"],"a":0},
{"t":"note","tag":"Often","q":"Kaninzi — many times","body":"<p><b>Kaninzi</b> — <i>often, many times</i>. Ndiza kaninzi — I come often. The ka- makes a how-many-times word; ninzi is <i>many</i>.</p>","eg":[["kaninzi","kah-NEEN-zee","often"]]},
{"t":"li","q":"Which one do you hear?","say":"kaninzi","o":["kaninzi","nini?"],"a":0},
{"t":"mc","q":"kaninzi means…","o":["often","never","once"],"a":0}
]},
{"id":"xh_n6_2","title":"Hearing when","step":"recognize","meta":"Questions and days by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"nini?","o":["nini?","kaninzi","Uza nini?"],"a":0},
{"t":"mc","q":"What does ngoMvulo mean?","o":["on Monday","on Sunday","every day"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ngeCawa","o":["ngeCawa","ngoMvulo","nini?"],"a":0},
{"t":"mc","q":"Which one means when?","o":["nini?","phi?","ngubani?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uza nini?","o":["Uza nini?","ngeCawa","kaninzi"],"a":0},
{"t":"mc","q":"Ndiza ngoMvulo means…","o":["I am coming on Monday","I came yesterday","come on Monday"],"a":0}
]},
{"id":"xh_n6_3","title":"Building when-phrases","step":"build","meta":"Ask and answer about time","vocab":[],"ex":[
{"t":"fill","q":"Complete: when are you coming?","s":"Uza ni___?","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: I am coming on Monday","a":["ndiza","ngoMvulo"],"pool":["ndiza","ngoMvulo","ngeCawa"]},
{"t":"fill","q":"Complete: on Sunday","s":"nge___awa","o":["C","X","Q"],"a":0},
{"t":"wb","q":"Build: when? often!","a":["nini","kaninzi"],"pool":["nini","kaninzi","ngomso"]},
{"t":"li","q":"Which one do you hear?","say":"ngeCawa","o":["ngeCawa","Uza nini?","ngoMvulo"],"a":0}
]},
{"id":"xh_n6_4","title":"When in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["nini?","when?"],["Uza nini?","when are you coming?"],["kaninzi","often"]]},
{"t":"li","q":"Which one do you hear?","say":"ngoMvulo","o":["ngoMvulo","ngeCawa","nini?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ngoMvulo","on Monday"],["ngeCawa","on Sunday"]]},
{"t":"mc","q":"Uza nini? — Ndiza … (tomorrow). Complete the answer.","o":["ngomso","izolo","ngoku"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kaninzi","o":["kaninzi","ngeCawa","Uza nini?"],"a":0}
]},
{"id":"xh_n6_5","title":"Checkpoint: when","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Nini? asks…","o":["when?","where?","who?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ngoMvulo","o":["ngoMvulo","kaninzi","ngeCawa"],"a":0},
{"t":"mc","q":"Which one means often?","o":["kaninzi","nini?","ngoku"],"a":0},
{"t":"mc","q":"A friend asks Uza nini? You will come on Sunday, so…","o":["Ndiza ngeCawa","Ndiza izolo","Uza ngoMvulo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uza nini?","o":["Uza nini?","nini?","ngoMvulo"],"a":0},
{"t":"mc","q":"Review — what does ngomso mean?","o":["tomorrow","yesterday","today"],"a":0}
]},

/* ---------- n7 · Day, month, year ---------- */
{"id":"xh_n7","title":"Day, month, year","step":"learn","meta":"The big units — and your daily habit","vocab":[["usuku","oo-SOO-koo","day"],["inyanga","ee-NYAH-ngah","month"],["unyaka","oo-NYAH-kah","year"],["yonke imihla","YAWN-keh ee-MEE-hlah","every day"],["Ndifunda isiXhosa yonke imihla","ndee-FOON-dah ee-see-XHAW-sah YAWN-keh ee-MEE-hlah","I learn Xhosa every day"]],"ex":[
{"t":"note","tag":"The units","q":"Usuku, inyanga, unyaka","body":"<p><b>Usuku</b> — a day. <b>Inyanga</b> — a month, and also <i>the moon</i>: months follow the moon. <b>Unyaka</b> — a year.</p>","eg":[["usuku","oo-SOO-koo","day"],["inyanga","ee-NYAH-ngah","month"],["unyaka","oo-NYAH-kah","year"]]},
{"t":"li","q":"Which one do you hear?","say":"inyanga","o":["inyanga","unyaka","usuku"],"a":0},
{"t":"mc","q":"inyanga means month and also…","o":["the moon","the sun","the week"],"a":0},
{"t":"note","tag":"The habit","q":"Yonke imihla — every day","body":"<p><b>Yonke imihla</b> — <i>every day</i>. And the sentence that will actually get you fluent: <b>Ndifunda isiXhosa yonke imihla</b> — <i>I learn Xhosa every day</i>. Say it, then make it true.</p>","eg":[["yonke imihla","YAWN-keh ee-MEE-hlah","every day"],["Ndifunda isiXhosa yonke imihla","ndee-FOON-dah ee-see-XHAW-sah YAWN-keh ee-MEE-hlah","I learn Xhosa every day"]]},
{"t":"li","q":"Which one do you hear?","say":"yonke imihla","o":["yonke imihla","usuku"],"a":0},
{"t":"mc","q":"Yonke imihla means…","o":["every day","every year","all night"],"a":0},
{"t":"li","q":"Which sentence do you hear?","say":"Ndifunda isiXhosa yonke imihla","o":["Ndifunda isiXhosa yonke imihla","Ndifunda isiXhosa"],"a":0},
{"t":"mc","q":"What does unyaka mean?","o":["year","month","day"],"a":0}
]},
{"id":"xh_n7_2","title":"Hearing the units","step":"recognize","meta":"Day, month, year by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"usuku","o":["usuku","unyaka","inyanga"],"a":0},
{"t":"mc","q":"Which one means month?","o":["inyanga","unyaka","iveki"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"unyaka","o":["unyaka","usuku","yonke imihla"],"a":0},
{"t":"mc","q":"From short to long: usuku, iveki, inyanga, …","o":["unyaka","izolo","impelaveki"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"yonke imihla","o":["yonke imihla","inyanga","usuku"],"a":0},
{"t":"mc","q":"Ndifunda isiXhosa yonke imihla means…","o":["I learn Xhosa every day","I speak Xhosa a little","I learned Xhosa last year"],"a":0}
]},
{"id":"xh_n7_3","title":"Building the units","step":"build","meta":"Assemble your habit","vocab":[],"ex":[
{"t":"fill","q":"Complete: month","s":"inya___a","o":["ng","ny","nk"],"a":0},
{"t":"wb","q":"Build: every day","a":["yonke","imihla"],"pool":["yonke","imihla","usuku"]},
{"t":"fill","q":"Complete: year","s":"unya___","o":["ka","ko","kha"],"a":0},
{"t":"wb","q":"Build: I learn Xhosa every day","a":["ndifunda","isiXhosa","yonke","imihla"],"pool":["ndifunda","isiXhosa","yonke","imihla","kancinci"]},
{"t":"li","q":"Which one do you hear?","say":"inyanga","o":["inyanga","yonke imihla","unyaka"],"a":0}
]},
{"id":"xh_n7_4","title":"The units in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["usuku","day"],["inyanga","month"],["unyaka","year"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndifunda isiXhosa yonke imihla","o":["Ndifunda isiXhosa yonke imihla","yonke imihla","Ndifunda isiXhosa"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["yonke imihla","every day"],["Ndifunda isiXhosa yonke imihla","I learn Xhosa every day"]]},
{"t":"mc","q":"Months follow the moon — which word carries both meanings?","o":["inyanga","unyaka","usuku"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usuku","o":["usuku","inyanga","unyaka"],"a":0}
]},
{"id":"xh_n7_5","title":"Checkpoint: Zone 4 complete","step":"checkpoint","meta":"Numbers, days & time — show it all","vocab":[],"ex":[
{"t":"mc","q":"What does usuku mean?","o":["day","week","month"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"unyaka","o":["unyaka","inyanga","usuku"],"a":0},
{"t":"mc","q":"Review — count up: zintlanu, zintandathu, … what comes next?","o":["sixhenxe","sibhozo","lithoba"],"a":0},
{"t":"mc","q":"Review — uLwesibini carries the number two — it is…","o":["Tuesday","Wednesday","Monday"],"a":0},
{"t":"li","q":"Review — which day do you hear?","say":"iCawa","o":["iCawa","uMgqibelo","uMvulo"],"a":0},
{"t":"mc","q":"Review — Sobonana ngomso means see you…","o":["tomorrow","in the morning","on Sunday"],"a":0},
{"t":"mc","q":"The sentence that gets you fluent…","o":["Ndifunda isiXhosa yonke imihla","Andiqondi","Hamba kakuhle"],"a":0}
]},

/* ---------- d1 · Hungry & thirsty ---------- */
{"id":"xh_d1","title":"Hungry and thirsty","step":"learn","meta":"The two feelings that start every meal","vocab":[["ndilambile","ndee-lahm-BEE-leh","I am hungry"],["ndinxaniwe","ndee-nxah-NEE-weh","I am thirsty"],["ndifuna","ndee-FOO-nah","I want"],["amanzi","ah-MAHN-zee","water"],["Ndicela amanzi","ndee-CEH-lah ah-MAHN-zee","may I have water"]],"ex":[
{"t":"note","tag":"Two feelings","q":"Ndilambile, ndinxaniwe","body":"<p><b>Ndilambile</b> — <i>I am hungry</i>. <b>Ndinxaniwe</b> — <i>I am thirsty</i> — with the nasal nx click humming in the middle. Say them and any Xhosa household will move to feed you.</p>","eg":[["ndilambile","ndee-lahm-BEE-leh","I am hungry"],["ndinxaniwe","ndee-nxah-NEE-weh","I am thirsty"]]},
{"t":"li","q":"Hungry or thirsty — which do you hear?","say":"ndinxaniwe","o":["ndinxaniwe","ndilambile"],"a":0},
{"t":"mc","q":"What does ndilambile mean?","o":["I am hungry","I am thirsty","I am tired"],"a":0},
{"t":"note","tag":"Wanting and asking","q":"Ndifuna — and the polite ndicela","body":"<p><b>Ndifuna</b> is <i>I want</i> — direct and fine among friends. But the polite request uses cela, your first click verb: <b>Ndicela amanzi</b> — <i>may I have water, please</i>. Ndicela is the magic key of Xhosa politeness — it will carry you through shops, taxis and kitchens.</p>","eg":[["ndifuna","ndee-FOO-nah","I want"],["amanzi","ah-MAHN-zee","water"],["Ndicela amanzi","ndee-CEH-lah ah-MAHN-zee","may I have water"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndicela amanzi","o":["Ndicela amanzi","ndifuna"],"a":0},
{"t":"mc","q":"The POLITE way to ask for something starts with…","o":["Ndicela","Ndifuna","Hayi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amanzi","o":["amanzi","ndifuna"],"a":0},
{"t":"mc","q":"amanzi means…","o":["water","food","tea"],"a":0}
]},
{"id":"xh_d1_2","title":"Hearing hunger","step":"recognize","meta":"Feelings and requests by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndilambile","o":["ndilambile","ndinxaniwe","ndifuna"],"a":0},
{"t":"mc","q":"What does ndinxaniwe mean?","o":["I am thirsty","I am hungry","I want"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndifuna","o":["ndifuna","amanzi","ndilambile"],"a":0},
{"t":"mc","q":"Ndicela amanzi means…","o":["may I have water","I am drinking water","the water is cold"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndicela amanzi","o":["Ndicela amanzi","amanzi","ndinxaniwe"],"a":0},
{"t":"mc","q":"Which one means I want?","o":["ndifuna","ndicela","ndilambile"],"a":0}
]},
{"id":"xh_d1_3","title":"Building requests","step":"build","meta":"Ask politely","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am hungry","s":"Ndilambi___","o":["le","la","lo"],"a":0},
{"t":"wb","q":"Build: may I have water","a":["ndicela","amanzi"],"pool":["ndicela","amanzi","ndifuna"]},
{"t":"fill","q":"Complete: I am thirsty","s":"Ndin___aniwe","o":["x","c","q"],"a":0},
{"t":"wb","q":"Build: I want water","a":["ndifuna","amanzi"],"pool":["ndifuna","amanzi","ndicela"]},
{"t":"li","q":"Which one do you hear?","say":"ndinxaniwe","o":["ndinxaniwe","ndilambile","Ndicela amanzi"],"a":0}
]},
{"id":"xh_d1_4","title":"Hunger in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndilambile","I am hungry"],["ndinxaniwe","I am thirsty"],["amanzi","water"]]},
{"t":"li","q":"Which one do you hear?","say":"ndifuna","o":["ndifuna","ndilambile","amanzi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndifuna","I want"],["Ndicela amanzi","may I have water"]]},
{"t":"mc","q":"At a stranger you would rather use…","o":["Ndicela","Ndifuna","Iza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndilambile","o":["ndilambile","ndinxaniwe","ndifuna"],"a":0}
]},
{"id":"xh_d1_5","title":"Checkpoint: hungry & thirsty","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndinxaniwe mean?","o":["I am thirsty","I am hungry","I am full"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amanzi","o":["amanzi","ndifuna","ndilambile"],"a":0},
{"t":"mc","q":"The polite request for water is…","o":["Ndicela amanzi","Ndifuna amanzi","Amanzi ngoku"],"a":0},
{"t":"mc","q":"Which one means I want?","o":["ndifuna","ndilambile","ndicela"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndinxaniwe","o":["ndinxaniwe","amanzi","Ndicela amanzi"],"a":0},
{"t":"mc","q":"Review — what does ukutya mean?","o":["food","water","meat"],"a":0}
]},

/* ---------- d2 · The staples ---------- */
{"id":"xh_d2","title":"The staples","step":"learn","meta":"Bread, amasi and the drinks","vocab":[["isonka","ee-SAWN-kah","bread"],["amasi","ah-MAH-see","sour milk"],["iti","EE-tee","tea"],["ikofu","ee-KAW-foo","coffee"],["irayisi","ee-rah-YEE-see","rice"]],"ex":[
{"t":"note","tag":"Daily bread","q":"Isonka and irayisi","body":"<p><b>Isonka</b> — <i>bread</i> — anchors every Xhosa breakfast; <b>irayisi</b> — <i>rice</i> — anchors the Sunday plate. Both are everyday words you will hear in any kitchen and any shop.</p>","eg":[["isonka","ee-SAWN-kah","bread"],["irayisi","ee-rah-YEE-see","rice"]]},
{"t":"li","q":"Which one do you hear?","say":"isonka","o":["isonka","irayisi"],"a":0},
{"t":"mc","q":"What does isonka mean?","o":["bread","rice","milk"],"a":0},
{"t":"note","tag":"The beloved one","q":"Amasi — sour milk","body":"<p><b>Amasi</b> — thick sour milk — is comfort food itself, poured over umphokoqo (crumbly maize porridge) on a hot day. If a family offers you amasi, you are being treated as one of their own.</p>","eg":[["amasi","ah-MAH-see","sour milk"]]},
{"t":"li","q":"Which one do you hear?","say":"amasi","o":["amasi","isonka"],"a":0},
{"t":"mc","q":"amasi is…","o":["sour milk","fresh water","sweet tea"],"a":0},
{"t":"note","tag":"Hot drinks","q":"Iti and ikofu","body":"<p><b>Iti</b> — <i>tea</i> — and <b>ikofu</b> — <i>coffee</i>. Tea is the drink of visiting: sit down anywhere and iti appears before the second sentence.</p>","eg":[["iti","EE-tee","tea"],["ikofu","ee-KAW-foo","coffee"]]},
{"t":"li","q":"Which drink do you hear?","say":"ikofu","o":["ikofu","iti"],"a":0},
{"t":"mc","q":"Which one means tea?","o":["iti","ikofu","amasi"],"a":0}
]},
{"id":"xh_d2_2","title":"Hearing the staples","step":"recognize","meta":"Kitchen words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"irayisi","o":["irayisi","isonka","amasi"],"a":0},
{"t":"mc","q":"What does ikofu mean?","o":["coffee","tea","bread"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iti","o":["iti","ikofu","irayisi"],"a":0},
{"t":"mc","q":"Which one means rice?","o":["irayisi","isonka","amasi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amasi","o":["amasi","iti","isonka"],"a":0},
{"t":"mc","q":"Poured over umphokoqo on a hot day…","o":["amasi","ikofu","amanzi"],"a":0}
]},
{"id":"xh_d2_3","title":"Building the staples","step":"build","meta":"Spell the kitchen","vocab":[],"ex":[
{"t":"fill","q":"Complete: bread","s":"ison___a","o":["k","kh","q"],"a":0},
{"t":"wb","q":"Build: may I have tea","a":["ndicela","iti"],"pool":["ndicela","iti","ikofu"]},
{"t":"fill","q":"Complete: coffee","s":"iko___u","o":["f","v","ph"],"a":0},
{"t":"wb","q":"Build: may I have bread","a":["ndicela","isonka"],"pool":["ndicela","isonka","irayisi"]},
{"t":"li","q":"Which one do you hear?","say":"isonka","o":["isonka","amasi","ikofu"],"a":0}
]},
{"id":"xh_d2_4","title":"Staples in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["isonka","bread"],["amasi","sour milk"],["iti","tea"]]},
{"t":"li","q":"Which one do you hear?","say":"ikofu","o":["ikofu","iti","irayisi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ikofu","coffee"],["irayisi","rice"]]},
{"t":"mc","q":"You sit down to visit. Before the second sentence appears…","o":["iti","irayisi","amasi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"irayisi","o":["irayisi","amasi","isonka"],"a":0}
]},
{"id":"xh_d2_5","title":"Checkpoint: the staples","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does amasi mean?","o":["sour milk","coffee","porridge"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iti","o":["iti","ikofu","amasi"],"a":0},
{"t":"mc","q":"Which one means bread?","o":["isonka","irayisi","ikofu"],"a":0},
{"t":"mc","q":"Ndicela ikofu means…","o":["may I have coffee","I am drinking coffee","the coffee is hot"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ikofu","o":["ikofu","isonka","irayisi"],"a":0},
{"t":"mc","q":"Review — which one means I am hungry?","o":["ndilambile","ndinxaniwe","ndifuna"],"a":0}
]},

/* ---------- d3 · Eating & drinking ---------- */
{"id":"xh_d3","title":"Eating and drinking","step":"learn","meta":"Nditya, ndisela — and asking what","vocab":[["nditya","ndee-TYAH","I eat"],["ndisela","ndee-SEH-lah","I drink"],["ntoni?","NTAW-nee","what?"],["Utya ntoni?","oo-TYAH NTAW-nee","what are you eating?"],["Ndisela iti","ndee-SEH-lah EE-tee","I am drinking tea"]],"ex":[
{"t":"note","tag":"The verbs","q":"Nditya and ndisela","body":"<p><b>Nditya</b> — <i>I eat</i> — the soft ty from ukutya. <b>Ndisela</b> — <i>I drink</i>. Careful with a beautiful trap: <b>sela</b> (drink) has a plain s, but <b>cela</b> (ask for) begins with the click. One click apart: Ndisela iti — I drink tea; Ndicela iti — may I have tea.</p>","eg":[["nditya","ndee-TYAH","I eat"],["ndisela","ndee-SEH-lah","I drink"],["Ndisela iti","ndee-SEH-lah EE-tee","I am drinking tea"]]},
{"t":"li","q":"Eat or drink — which do you hear?","say":"ndisela","o":["ndisela","nditya"],"a":0},
{"t":"mc","q":"What does nditya mean?","o":["I eat","I drink","I want"],"a":0},
{"t":"li","q":"Click or no click — which do you hear?","say":"Ndisela iti","o":["Ndisela iti","Ndicela amanzi"],"a":0},
{"t":"note","tag":"What?","q":"Ntoni — the last question word","body":"<p><b>Ntoni?</b> is <i>what?</i> — completing your question set with phi (where), nini (when) and ngubani (who). <b>Utya ntoni?</b> — <i>what are you eating?</i> — the friendliest question at any shared table.</p>","eg":[["ntoni?","NTAW-nee","what?"],["Utya ntoni?","oo-TYAH NTAW-nee","what are you eating?"]]},
{"t":"li","q":"Which one do you hear?","say":"Utya ntoni?","o":["Utya ntoni?","ntoni?"],"a":0},
{"t":"mc","q":"Utya ntoni? asks…","o":["what are you eating?","what are you drinking?","are you hungry?"],"a":0},
{"t":"mc","q":"ntoni completes your question words. It means…","o":["what?","when?","where?"],"a":0}
]},
{"id":"xh_d3_2","title":"Hearing the verbs","step":"recognize","meta":"Eat, drink, what","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"nditya","o":["nditya","ndisela","ntoni?"],"a":0},
{"t":"mc","q":"What does ndisela mean?","o":["I drink","I eat","I ask for"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ntoni?","o":["ntoni?","nditya","Utya ntoni?"],"a":0},
{"t":"mc","q":"Ndisela iti means…","o":["I am drinking tea","may I have tea","I like tea"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndisela iti","o":["Ndisela iti","Utya ntoni?","ndisela"],"a":0},
{"t":"mc","q":"One click apart: cela and sela. Cela means…","o":["ask for","drink","eat"],"a":0}
]},
{"id":"xh_d3_3","title":"Building meals","step":"build","meta":"Say what you eat and drink","vocab":[],"ex":[
{"t":"fill","q":"Complete: I eat","s":"Ndi___a","o":["ty","tsh","t"],"a":0},
{"t":"wb","q":"Build: I am drinking coffee","a":["ndisela","ikofu"],"pool":["ndisela","ikofu","nditya"]},
{"t":"fill","q":"Complete: what are you eating?","s":"Utya nto___?","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: I eat bread","a":["nditya","isonka"],"pool":["nditya","isonka","ndisela"]},
{"t":"li","q":"Which one do you hear?","say":"Utya ntoni?","o":["Utya ntoni?","Ndisela iti","ntoni?"],"a":0}
]},
{"id":"xh_d3_4","title":"Meals in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["nditya","I eat"],["ndisela","I drink"],["ntoni?","what?"]]},
{"t":"li","q":"Which one do you hear?","say":"ndisela","o":["ndisela","nditya","ntoni?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Utya ntoni?","what are you eating?"],["Ndisela iti","I am drinking tea"]]},
{"t":"mc","q":"Your question words: phi, nini, ngubani, …","o":["ntoni","yena","lam"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nditya","o":["nditya","Ndisela iti","Utya ntoni?"],"a":0}
]},
{"id":"xh_d3_5","title":"Checkpoint: eating & drinking","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ntoni mean?","o":["what?","who?","when?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndisela","o":["ndisela","nditya","ndifuna"],"a":0},
{"t":"mc","q":"Someone asks Utya ntoni? You are eating bread…","o":["Nditya isonka","Ndisela isonka","Ndicela iti"],"a":0},
{"t":"mc","q":"Which pair is one click apart?","o":["cela and sela","tya and sela","funa and cela"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nditya","o":["nditya","ntoni?","ndisela"],"a":0},
{"t":"mc","q":"Review — which one means sour milk?","o":["amasi","amanzi","iti"],"a":0}
]},

/* ---------- d4 · Meat & the braai ---------- */
{"id":"xh_d4","title":"Meat and the braai","step":"learn","meta":"Ishisanyama — where Saturday happens","vocab":[["ishisanyama","ee-shee-sah-NYAH-mah","braai place"],["inkukhu","een-KOO-khoo","chicken"],["intlanzi","een-TLAHN-zee","fish"],["amaqanda","ah-mah-QAHN-dah","eggs"],["Nditya inyama","ndee-TYAH ee-NYAH-mah","I am eating meat"]],"ex":[
{"t":"note","tag":"Fire and meat","q":"Ishisanyama — burn the meat","body":"<p><b>Ishisanyama</b> — literally <i>burn-the-meat</i> — is the braai spot: the butcher-grill where Saturday afternoon happens, meat straight from the fire, music loud, everyone welcome. Inyama — <i>meat</i> — you learned with the sounds; now say <b>Nditya inyama</b> at the source.</p>","eg":[["ishisanyama","ee-shee-sah-NYAH-mah","braai place"],["Nditya inyama","ndee-TYAH ee-NYAH-mah","I am eating meat"]]},
{"t":"li","q":"Which one do you hear?","say":"ishisanyama","o":["ishisanyama","Nditya inyama"],"a":0},
{"t":"mc","q":"An ishisanyama is…","o":["a braai place","a fish market","a tea room"],"a":0},
{"t":"note","tag":"From the yard","q":"Chicken, fish — and the egg plural","body":"<p><b>Inkukhu</b> — <i>chicken</i>; <b>intlanzi</b> — <i>fish</i> (Cape Town is a fish city). And a plural payoff: one iqanda, many <b>amaqanda</b> — the i- of the egg swaps to ama-, just like amaXhosa.</p>","eg":[["inkukhu","een-KOO-khoo","chicken"],["intlanzi","een-TLAHN-zee","fish"],["amaqanda","ah-mah-QAHN-dah","eggs"]]},
{"t":"li","q":"Which one do you hear?","say":"intlanzi","o":["intlanzi","inkukhu"],"a":0},
{"t":"mc","q":"What does inkukhu mean?","o":["chicken","fish","eggs"],"a":0},
{"t":"li","q":"One egg or many — which do you hear?","say":"amaqanda","o":["amaqanda","iqanda"],"a":0},
{"t":"mc","q":"The plural of iqanda is…","o":["amaqanda","ooqanda","iziqanda"],"a":0}
]},
{"id":"xh_d4_2","title":"Hearing the braai","step":"recognize","meta":"Meat words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"inkukhu","o":["inkukhu","intlanzi","amaqanda"],"a":0},
{"t":"mc","q":"What does intlanzi mean?","o":["fish","chicken","meat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Nditya inyama","o":["Nditya inyama","ishisanyama","inkukhu"],"a":0},
{"t":"mc","q":"Which one means eggs?","o":["amaqanda","inkukhu","intlanzi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ishisanyama","o":["ishisanyama","intlanzi","Nditya inyama"],"a":0},
{"t":"mc","q":"Ishisanyama literally means…","o":["burn the meat","cold meat","meat house"],"a":0}
]},
{"id":"xh_d4_3","title":"Building braai words","step":"build","meta":"Order at the fire","vocab":[],"ex":[
{"t":"fill","q":"Complete: chicken","s":"inku___u","o":["kh","k","q"],"a":0},
{"t":"wb","q":"Build: may I have meat","a":["ndicela","inyama"],"pool":["ndicela","inyama","intlanzi"]},
{"t":"fill","q":"Complete: fish","s":"in___anzi","o":["tl","hl","dl"],"a":0},
{"t":"wb","q":"Build: I am eating chicken","a":["nditya","inkukhu"],"pool":["nditya","inkukhu","amaqanda"]},
{"t":"li","q":"Which one do you hear?","say":"amaqanda","o":["amaqanda","inkukhu","ishisanyama"],"a":0}
]},
{"id":"xh_d4_4","title":"The braai in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ishisanyama","braai place"],["inkukhu","chicken"],["intlanzi","fish"]]},
{"t":"li","q":"Which one do you hear?","say":"intlanzi","o":["intlanzi","amaqanda","inkukhu"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["amaqanda","eggs"],["Nditya inyama","I am eating meat"]]},
{"t":"mc","q":"iqanda is to amaqanda as umXhosa is to…","o":["amaXhosa","isiXhosa","ooXhosa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"inkukhu","o":["inkukhu","intlanzi","ishisanyama"],"a":0}
]},
{"id":"xh_d4_5","title":"Checkpoint: the braai","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ishisanyama mean?","o":["braai place","kitchen","fire"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Nditya inyama","o":["Nditya inyama","inkukhu","intlanzi"],"a":0},
{"t":"mc","q":"Which one means fish?","o":["intlanzi","inkukhu","inyama"],"a":0},
{"t":"mc","q":"Many eggs are…","o":["amaqanda","iqanda","amaqhude"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ishisanyama","o":["ishisanyama","amaqanda","Nditya inyama"],"a":0},
{"t":"mc","q":"Review — Utya ntoni? asks…","o":["what are you eating?","what do you want?","are you hungry?"],"a":0}
]},

/* ---------- d5 · From the garden ---------- */
{"id":"xh_d5","title":"From the garden","step":"learn","meta":"Maize, potatoes and the qh fruit","vocab":[["umbona","oom-BAW-nah","maize"],["iitapile","ee-tah-PEE-leh","potatoes"],["itumato","ee-too-MAH-taw","tomato"],["itswele","ee-TSWEH-leh","onion"],["isiqhamo","ee-see-QHAH-maw","fruit"]],"ex":[
{"t":"note","tag":"The grain of home","q":"Umbona — maize","body":"<p><b>Umbona</b> — <i>maize</i> — is the grain behind half the Xhosa table: umngqusho is made of it, umphokoqo is made of it, and roasted cobs are sold at every taxi rank.</p>","eg":[["umbona","oom-BAW-nah","maize"]]},
{"t":"li","q":"Which one do you hear?","say":"umbona","o":["umbona","isonka"],"a":0},
{"t":"mc","q":"What does umbona mean?","o":["maize","potato","onion"],"a":0},
{"t":"note","tag":"The pot friends","q":"Potatoes, tomato, onion","body":"<p>The three that start every pot: <b>iitapile</b> — <i>potatoes</i>, <b>itumato</b> — <i>tomato</i>, <b>itswele</b> — <i>onion</i>. Old borrowings, fully at home in Xhosa now.</p>","eg":[["iitapile","ee-tah-PEE-leh","potatoes"],["itumato","ee-too-MAH-taw","tomato"],["itswele","ee-TSWEH-leh","onion"]]},
{"t":"li","q":"Which one do you hear?","say":"itswele","o":["itswele","itumato","iitapile"],"a":0},
{"t":"mc","q":"itumato means…","o":["tomato","potato","fruit"],"a":0},
{"t":"note","tag":"Sweetness","q":"Isiqhamo — fruit","body":"<p><b>Isiqhamo</b> — <i>fruit</i> — carries the aspirated qh you met in iqhude. An isi- word, like isiXhosa and isiduko: the class of things and qualities.</p>","eg":[["isiqhamo","ee-see-QHAH-maw","fruit"]]},
{"t":"li","q":"Which one do you hear?","say":"isiqhamo","o":["isiqhamo","umbona"],"a":0},
{"t":"mc","q":"Which one means fruit?","o":["isiqhamo","itswele","umbona"],"a":0}
]},
{"id":"xh_d5_2","title":"Hearing the garden","step":"recognize","meta":"Veg by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"iitapile","o":["iitapile","itumato","itswele"],"a":0},
{"t":"mc","q":"What does itswele mean?","o":["onion","tomato","maize"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"itumato","o":["itumato","iitapile","isiqhamo"],"a":0},
{"t":"mc","q":"Which one means potatoes?","o":["iitapile","itumato","umbona"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isiqhamo","o":["isiqhamo","itswele","umbona"],"a":0},
{"t":"mc","q":"Umngqusho and umphokoqo are both made from…","o":["umbona","iitapile","irayisi"],"a":0}
]},
{"id":"xh_d5_3","title":"Building garden words","step":"build","meta":"Fill the pot","vocab":[],"ex":[
{"t":"fill","q":"Complete: maize","s":"umbo___","o":["na","no","ne"],"a":0},
{"t":"wb","q":"Build: may I have fruit","a":["ndicela","isiqhamo"],"pool":["ndicela","isiqhamo","itswele"]},
{"t":"fill","q":"Complete: fruit","s":"isi___amo","o":["qh","q","xh"],"a":0},
{"t":"wb","q":"Build: I am eating potatoes","a":["nditya","iitapile"],"pool":["nditya","iitapile","itumato"]},
{"t":"li","q":"Which one do you hear?","say":"itswele","o":["itswele","isiqhamo","iitapile"],"a":0}
]},
{"id":"xh_d5_4","title":"The garden in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umbona","maize"],["iitapile","potatoes"],["itumato","tomato"]]},
{"t":"li","q":"Which one do you hear?","say":"umbona","o":["umbona","itumato","itswele"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["itswele","onion"],["isiqhamo","fruit"]]},
{"t":"mc","q":"isiqhamo, isiXhosa, isiduko share the class prefix…","o":["isi-","i-","um-"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iitapile","o":["iitapile","itswele","umbona"],"a":0}
]},
{"id":"xh_d5_5","title":"Checkpoint: the garden","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does iitapile mean?","o":["potatoes","tomatoes","onions"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"itumato","o":["itumato","itswele","iitapile"],"a":0},
{"t":"mc","q":"Which one means onion?","o":["itswele","itumato","isiqhamo"],"a":0},
{"t":"mc","q":"The maize behind umngqusho is…","o":["umbona","irayisi","isonka"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isiqhamo","o":["isiqhamo","umbona","itumato"],"a":0},
{"t":"mc","q":"Review — which one means chicken?","o":["inkukhu","intlanzi","inyama"],"a":0}
]},

/* ---------- d6 · I like it — and I do not ---------- */
{"id":"xh_d6","title":"Likes and dislikes","step":"learn","meta":"Ndithanda — and your first negative","vocab":[["ndithanda","ndee-TAHN-dah","I like"],["andithandi","ahn-dee-TAHN-dee","I do not like"],["Uthanda ntoni?","oo-TAHN-dah NTAW-nee","what do you like?"],["Ndithanda iti kakhulu","ndee-TAHN-dah EE-tee kah-KHOO-loo","I like tea very much"]],"ex":[
{"t":"note","tag":"Liking","q":"Ndithanda","body":"<p><b>Ndithanda</b> — <i>I like</i>, also <i>I love</i>. Add kakhulu from your greetings for feeling: <b>Ndithanda iti kakhulu</b> — <i>I like tea very much</i>. And ask back: <b>Uthanda ntoni?</b> — <i>what do you like?</i></p>","eg":[["ndithanda","ndee-TAHN-dah","I like"],["Ndithanda iti kakhulu","ndee-TAHN-dah EE-tee kah-KHOO-loo","I like tea very much"],["Uthanda ntoni?","oo-TAHN-dah NTAW-nee","what do you like?"]]},
{"t":"li","q":"Which one do you hear?","say":"ndithanda","o":["ndithanda","Uthanda ntoni?"],"a":0},
{"t":"mc","q":"What does ndithanda mean?","o":["I like","I eat","I want"],"a":0},
{"t":"note","tag":"The negative","q":"A…i wraps the verb","body":"<p>Now the secret you have been carrying since the sounds zone: <b>andithandi</b> — <i>I do NOT like</i>. The negative wraps the verb in <b>a-…-i</b>: ndithanda becomes a-ndithand-i. And andiqondi — your old friend — is exactly the same wrap around qonda. You have been speaking negatives all along.</p>","eg":[["andithandi","ahn-dee-TAHN-dee","I do not like"]]},
{"t":"li","q":"Like or dislike — which do you hear?","say":"andithandi","o":["andithandi","ndithanda"],"a":0},
{"t":"mc","q":"The negative wraps the verb in…","o":["a- and -i","ndi- and -a","u- and -e"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndithanda iti kakhulu","o":["Ndithanda iti kakhulu","Uthanda ntoni?"],"a":0},
{"t":"mc","q":"andiqondi is the a…i wrap around…","o":["qonda","thanda","funda"],"a":0}
]},
{"id":"xh_d6_2","title":"Hearing likes","step":"recognize","meta":"Yes-feelings and no-feelings","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Uthanda ntoni?","o":["Uthanda ntoni?","ndithanda","andithandi"],"a":0},
{"t":"mc","q":"What does andithandi mean?","o":["I do not like","I like a lot","I do not eat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndithanda","o":["ndithanda","andithandi","Ndithanda iti kakhulu"],"a":0},
{"t":"mc","q":"Uthanda ntoni? asks…","o":["what do you like?","what are you eating?","do you like tea?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"andithandi","o":["andithandi","ndithanda","Uthanda ntoni?"],"a":0},
{"t":"mc","q":"Ndithanda iti kakhulu means…","o":["I like tea very much","I drink tea daily","tea is delicious"],"a":0}
]},
{"id":"xh_d6_3","title":"Building feelings","step":"build","meta":"Say what you love","vocab":[],"ex":[
{"t":"fill","q":"Complete: I do not like","s":"___ndithandi","o":["a","e","u"],"a":0},
{"t":"wb","q":"Build: I like tea very much","a":["ndithanda","iti","kakhulu"],"pool":["ndithanda","iti","kakhulu","andithandi"]},
{"t":"fill","q":"Complete: what do you like?","s":"Uthanda nto___?","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: I like amasi","a":["ndithanda","amasi"],"pool":["ndithanda","amasi","andithandi"]},
{"t":"li","q":"Which one do you hear?","say":"Ndithanda iti kakhulu","o":["Ndithanda iti kakhulu","andithandi","ndithanda"],"a":0}
]},
{"id":"xh_d6_4","title":"Feelings in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndithanda","I like"],["andithandi","I do not like"]]},
{"t":"li","q":"Which one do you hear?","say":"andithandi","o":["andithandi","ndithanda","Uthanda ntoni?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uthanda ntoni?","what do you like?"],["Ndithanda iti kakhulu","I like tea very much"]]},
{"t":"mc","q":"By the same wrap, I do not eat would be…","o":["anditvi","anditye","andityi"],"a":2},
{"t":"li","q":"Which one do you hear?","say":"ndithanda","o":["ndithanda","Ndithanda iti kakhulu","andithandi"],"a":0}
]},
{"id":"xh_d6_5","title":"Checkpoint: likes","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndithanda mean?","o":["I like","I do not like","I am hungry"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uthanda ntoni?","o":["Uthanda ntoni?","Ndithanda iti kakhulu","andithandi"],"a":0},
{"t":"mc","q":"Which one means I do not like?","o":["andithandi","ndithanda","andiqondi"],"a":0},
{"t":"mc","q":"Someone offers amasi and you love it…","o":["Ndithanda amasi kakhulu","Andithandi amasi","Uthanda ntoni?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"andithandi","o":["andithandi","ndithanda","ntoni?"],"a":0},
{"t":"mc","q":"Review — which one means fruit?","o":["isiqhamo","itswele","umbona"],"a":0}
]},

/* ---------- d7 · At the table ---------- */
{"id":"xh_d7","title":"At the table","step":"learn","meta":"Delicious, no thank you — and being fed","vocab":[["mnandi","MNAHN-dee","delicious"],["Kumnandi!","koom-NAHN-dee","it is delicious!"],["hayi enkosi","HAH-yee ehn-KAW-see","no thank you"],["Ufuna ntoni?","oo-FOO-nah NTAW-nee","what do you want?"],["Ndifuna ukutya","ndee-FOO-nah oo-KOO-tyah","I want food"]],"ex":[
{"t":"note","tag":"The compliment","q":"Kumnandi — say it and mean it","body":"<p><b>Mnandi</b> is <i>delicious, sweet, nice</i> — and <b>Kumnandi!</b> is the whole review: <i>it is delicious!</i> In a Xhosa home, guests are ALWAYS fed — visiting and eating are the same event — and Kumnandi is how you honour the cook.</p>","eg":[["mnandi","MNAHN-dee","delicious"],["Kumnandi!","koom-NAHN-dee","it is delicious!"]]},
{"t":"li","q":"Which one do you hear?","say":"Kumnandi!","o":["Kumnandi!","mnandi"],"a":0},
{"t":"mc","q":"Kumnandi! means…","o":["it is delicious!","it is hot!","more please!"],"a":0},
{"t":"note","tag":"Offering","q":"Ufuna ntoni? — and saying no kindly","body":"<p>The host asks <b>Ufuna ntoni?</b> — <i>what do you want?</i> Answer with ndifuna or ndicela: <b>Ndifuna ukutya</b> — <i>I want food</i>. And when you truly cannot eat more, decline gently: <b>hayi enkosi</b> — <i>no thank you</i> — best delivered with Kumnandi kakhulu attached.</p>","eg":[["Ufuna ntoni?","oo-FOO-nah NTAW-nee","what do you want?"],["Ndifuna ukutya","ndee-FOO-nah oo-KOO-tyah","I want food"],["hayi enkosi","HAH-yee ehn-KAW-see","no thank you"]]},
{"t":"li","q":"Which one do you hear?","say":"Ufuna ntoni?","o":["Ufuna ntoni?","Ndifuna ukutya"],"a":0},
{"t":"mc","q":"To decline more food kindly…","o":["Hayi enkosi","Hayi hamba","Andiqondi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndifuna ukutya","o":["Ndifuna ukutya","hayi enkosi"],"a":0},
{"t":"mc","q":"In a Xhosa home, guests are…","o":["always fed","asked to cook","left alone"],"a":0}
]},
{"id":"xh_d7_2","title":"Hearing the table","step":"recognize","meta":"Compliments and offers","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"mnandi","o":["mnandi","Kumnandi!","hayi enkosi"],"a":0},
{"t":"mc","q":"What does Ufuna ntoni? ask?","o":["what do you want?","what do you like?","what are you eating?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hayi enkosi","o":["hayi enkosi","Ufuna ntoni?","mnandi"],"a":0},
{"t":"mc","q":"Ndifuna ukutya means…","o":["I want food","I like food","the food is nice"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Kumnandi!","o":["Kumnandi!","Ndifuna ukutya","mnandi"],"a":0},
{"t":"mc","q":"mnandi means…","o":["delicious","hungry","full"],"a":0}
]},
{"id":"xh_d7_3","title":"Building table talk","step":"build","meta":"Honour the cook","vocab":[],"ex":[
{"t":"fill","q":"Complete: it is delicious!","s":"Kumnan___!","o":["di","de","da"],"a":0},
{"t":"wb","q":"Build: no thank you","a":["hayi","enkosi"],"pool":["hayi","enkosi","mnandi"]},
{"t":"fill","q":"Complete: what do you want?","s":"U___na ntoni?","o":["fu","fa","fo"],"a":0},
{"t":"wb","q":"Build: I want food","a":["ndifuna","ukutya"],"pool":["ndifuna","ukutya","mnandi"]},
{"t":"li","q":"Which one do you hear?","say":"mnandi","o":["mnandi","hayi enkosi","Kumnandi!"],"a":0}
]},
{"id":"xh_d7_4","title":"The table in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["mnandi","delicious"],["Kumnandi!","it is delicious!"],["hayi enkosi","no thank you"]]},
{"t":"li","q":"Which one do you hear?","say":"Ufuna ntoni?","o":["Ufuna ntoni?","Ndifuna ukutya","Kumnandi!"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ufuna ntoni?","what do you want?"],["Ndifuna ukutya","I want food"]]},
{"t":"mc","q":"The kindest way to stop a generous host…","o":["Hayi enkosi, kumnandi kakhulu","Hayi hayi hayi","Andithandi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hayi enkosi","o":["hayi enkosi","mnandi","Ufuna ntoni?"],"a":0}
]},
{"id":"xh_d7_5","title":"Checkpoint: Zone 5 complete","step":"checkpoint","meta":"Food & drink — show it all","vocab":[],"ex":[
{"t":"mc","q":"Kumnandi! tells the cook…","o":["it is delicious","you are slow","I am full"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndifuna ukutya","o":["Ndifuna ukutya","Ufuna ntoni?","hayi enkosi"],"a":0},
{"t":"mc","q":"Review — the polite request formula begins…","o":["Ndicela","Ndifuna","Nditya"],"a":0},
{"t":"mc","q":"Review — which one means I do not like?","o":["andithandi","ndithanda","andiqondi"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"amasi","o":["amasi","amanzi","iti"],"a":0},
{"t":"mc","q":"Review — an ishisanyama serves…","o":["meat from the fire","fruit and veg","tea and bread"],"a":0},
{"t":"mc","q":"Review — the plural of iqanda is…","o":["amaqanda","iziqanda","ooqanda"],"a":0}
]}
];

const XH_UNITS=[
{"n":1,"t":"The sounds of Xhosa","d":"Vowels, clicks and the rhythm of the language","lessons":["xh_s1","xh_s1_2","xh_s1_3","xh_s1_4","xh_s1_5","xh_s2","xh_s2_2","xh_s2_3","xh_s2_4","xh_s2_5","xh_s3","xh_s3_2","xh_s3_3","xh_s3_4","xh_s3_5","xh_s4","xh_s4_2","xh_s4_3","xh_s4_4","xh_s4_5","xh_s5","xh_s5_2","xh_s5_3","xh_s5_4","xh_s5_5","xh_s6","xh_s6_2","xh_s6_3","xh_s6_4","xh_s6_5","xh_s7","xh_s7_2","xh_s7_3","xh_s7_4","xh_s7_5"]}
,
{"n":2,"t":"Greetings & people","d":"Unjani, names, bhuti nosisi — meeting Cape Town","lessons":["xh_g1","xh_g1_2","xh_g1_3","xh_g1_4","xh_g1_5","xh_g2","xh_g2_2","xh_g2_3","xh_g2_4","xh_g2_5","xh_g3","xh_g3_2","xh_g3_3","xh_g3_4","xh_g3_5","xh_g4","xh_g4_2","xh_g4_3","xh_g4_4","xh_g4_5","xh_g5","xh_g5_2","xh_g5_3","xh_g5_4","xh_g5_5","xh_g6","xh_g6_2","xh_g6_3","xh_g6_4","xh_g6_5","xh_g7","xh_g7_2","xh_g7_3","xh_g7_4","xh_g7_5"]}
,
{"n":3,"t":"Family & respect","d":"Intsapho, intlonipho — the people closest to you","lessons":["xh_f1","xh_f1_2","xh_f1_3","xh_f1_4","xh_f1_5","xh_f2","xh_f2_2","xh_f2_3","xh_f2_4","xh_f2_5","xh_f3","xh_f3_2","xh_f3_3","xh_f3_4","xh_f3_5","xh_f4","xh_f4_2","xh_f4_3","xh_f4_4","xh_f4_5","xh_f5","xh_f5_2","xh_f5_3","xh_f5_4","xh_f5_5","xh_f6","xh_f6_2","xh_f6_3","xh_f6_4","xh_f6_5","xh_f7","xh_f7_2","xh_f7_3","xh_f7_4","xh_f7_5"]}
,
{"n":4,"t":"Numbers, days & time","d":"Amanani neentsuku — counting and the calendar","lessons":["xh_n1","xh_n1_2","xh_n1_3","xh_n1_4","xh_n1_5","xh_n2","xh_n2_2","xh_n2_3","xh_n2_4","xh_n2_5","xh_n3","xh_n3_2","xh_n3_3","xh_n3_4","xh_n3_5","xh_n4","xh_n4_2","xh_n4_3","xh_n4_4","xh_n4_5","xh_n5","xh_n5_2","xh_n5_3","xh_n5_4","xh_n5_5","xh_n6","xh_n6_2","xh_n6_3","xh_n6_4","xh_n6_5","xh_n7","xh_n7_2","xh_n7_3","xh_n7_4","xh_n7_5"]}
,
{"n":5,"t":"Food & drink","d":"Ukutya nokusela — the table and the braai","lessons":["xh_d1","xh_d1_2","xh_d1_3","xh_d1_4","xh_d1_5","xh_d2","xh_d2_2","xh_d2_3","xh_d2_4","xh_d2_5","xh_d3","xh_d3_2","xh_d3_3","xh_d3_4","xh_d3_5","xh_d4","xh_d4_2","xh_d4_3","xh_d4_4","xh_d4_5","xh_d5","xh_d5_2","xh_d5_3","xh_d5_4","xh_d5_5","xh_d6","xh_d6_2","xh_d6_3","xh_d6_4","xh_d6_5","xh_d7","xh_d7_2","xh_d7_3","xh_d7_4","xh_d7_5"]}
];

const XH_SYM={"xh_s1":"a e i","xh_s2":"c","xh_s3":"x","xh_s4":"q","xh_s5":"xh","xh_s6":"hl","xh_s7":"Molo","xh_g1":"Unjani","xh_g2":"igama","xh_g3":"abantu","xh_g4":"bhuti","xh_g5":"eKapa","xh_g6":"phi?","xh_g7":"kancinci","xh_f1":"utata","xh_f2":"usisi","xh_f3":"wam","xh_f4":"lo","xh_f5":"isiduko","xh_f6":"ikhaya","xh_f7":"sonke","xh_n1":"1-5","xh_n2":"6-10","xh_n3":"uMvulo","xh_n4":"iCawa","xh_n5":"izolo","xh_n6":"nini?","xh_n7":"unyaka","xh_d1":"amanzi","xh_d2":"isonka","xh_d3":"nditya","xh_d4":"inyama","xh_d5":"umbona","xh_d6":"thanda","xh_d7":"mnandi"};

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
