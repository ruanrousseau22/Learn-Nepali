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
]}
];

const XH_UNITS=[
{"n":1,"t":"The sounds of Xhosa","d":"Vowels, clicks and the rhythm of the language","lessons":["xh_s1","xh_s1_2","xh_s1_3","xh_s1_4","xh_s1_5","xh_s2","xh_s2_2","xh_s2_3","xh_s2_4","xh_s2_5","xh_s3","xh_s3_2","xh_s3_3","xh_s3_4","xh_s3_5","xh_s4","xh_s4_2","xh_s4_3","xh_s4_4","xh_s4_5","xh_s5","xh_s5_2","xh_s5_3","xh_s5_4","xh_s5_5","xh_s6","xh_s6_2","xh_s6_3","xh_s6_4","xh_s6_5","xh_s7","xh_s7_2","xh_s7_3","xh_s7_4","xh_s7_5"]}
];

const XH_SYM={"xh_s1":"a e i","xh_s2":"c","xh_s3":"x","xh_s4":"q","xh_s5":"xh","xh_s6":"hl","xh_s7":"Molo"};

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
