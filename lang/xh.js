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

   ALPHABET AUDIO: bare letters are VITS noise — generate_audio_xh.py
   SPEAK_AS stores syllable demos under the letter keys (a→aa, c→ca, hl→hla
   …; Aug 2026, spectral-flatness verified). Letter tiles therefore SPEAK
   the sound with a vowel, like bn/my letter-name clips. Not a bug.
   ART: Table Mountain + tablecloth cloud (far), ochre veld (mid), fynbos
   green (near) with rondavels, aloe ferox, Nguni cattle, one acacia.
   Mascot: blue crane (indwe). Palette vars incl. --thatch/--wall/--aloe
   live in index.html under data-lang="xh" (light + dark).

   STATUS: COMPLETE (Aug 2026) — 12 zones / 84 topics / 420 lessons / 2861
   exercises (incl. 273 checkpoint-review mcs), trip pack (12 sections /
   90 lines / 4 frames), art, faith pack (faith/xh.js, 255 strings), 541
   course clips + 255 faith clips. Wired into LANG_CATALOG, FAITH_CATALOG,
   LANG_FLAGS, landing pages (learn-xhosa / xhosa-phrases; Latin, so no
   alphabet page), og-xhosa.png, JSON-LD. Build story: XHOSA.md.
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
{"id":"xh_s1_2","title":"Recognize","step":"recognize","meta":"Pick the right word by ear and by eye","vocab":[],"ex":[
{"t":"mc","q":"Which one means no?","o":["hayi","ewe","iza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ewe","o":["ewe","hayi","iza"],"a":0},
{"t":"mc","q":"What does into mean?","o":["thing","car","come!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hamba","o":["hamba","iza","imoto"],"a":0},
{"t":"mc","q":"Which one means come!?","o":["iza","hamba","ewe"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"into","o":["into","imoto","ewe"],"a":0}
]},
{"id":"xh_s1_3","title":"Build","step":"build","meta":"Spell what you hear","vocab":[],"ex":[
{"t":"fill","q":"Complete the word for car","s":"i___to","o":["mo","ma","mu"],"a":0},
{"t":"wb","q":"Build the word: yes","a":["ewe"],"pool":["ewe","hayi","iza"]},
{"t":"fill","q":"Complete the command: go!","s":"ha___a","o":["mb","nd","ng"],"a":0},
{"t":"wb","q":"Build the word: thing","a":["into"],"pool":["into","imoto","ewe"]},
{"t":"mc","q":"Which word is stressed EH-weh?","o":["ewe","hayi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iza","o":["iza","into"],"a":0}
]},
{"id":"xh_s1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ewe","yes"],["hayi","no"],["hamba","go!"],["iza","come!"]]},
{"t":"mc","q":"Someone calls Iza! — they want you to…","o":["come","go","stop"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hayi","o":["hayi","hamba","ewe"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["imoto","car"],["into","thing"]]},
{"t":"mc","q":"What does hamba mean?","o":["go!","come!","thing"],"a":0}
]},
{"id":"xh_s1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_s2_2","title":"Recognize","step":"recognize","meta":"Tell click words apart by ear","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"cula","o":["cula","cela","cima"],"a":0},
{"t":"mc","q":"What does icici mean?","o":["earring","door","car"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"cinga","o":["cinga","cima","ucango"],"a":0},
{"t":"mc","q":"Which one means ask for?","o":["cela","cula","cinga"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"cima","o":["cima","icici","cula"],"a":0},
{"t":"mc","q":"ucango means…","o":["door","earring","switch off"],"a":0}
]},
{"id":"xh_s2_3","title":"Build","step":"build","meta":"Assemble the clicks yourself","vocab":[],"ex":[
{"t":"fill","q":"Complete: sing","s":"___ula","o":["c","k","s"],"a":0},
{"t":"wb","q":"Build the word: earring","a":["icici"],"pool":["icici","ucango","cela"]},
{"t":"fill","q":"Complete: door","s":"uca___o","o":["ng","mb","nd"],"a":0},
{"t":"wb","q":"Build the word: think","a":["cinga"],"pool":["cinga","cima","cula"]},
{"t":"li","q":"Which word do you hear?","say":"cela","o":["cela","cinga"],"a":0},
{"t":"mc","q":"Which word means switch off?","o":["cima","cela","icici"],"a":0}
]},
{"id":"xh_s2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["cela","ask for"],["cula","sing"],["cima","switch off"]]},
{"t":"li","q":"Which word do you hear?","say":"ucango","o":["ucango","icici","cula"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["icici","earring"],["ucango","door"],["cinga","think"]]},
{"t":"mc","q":"The tsk-tsk sound behind the top teeth is written…","o":["c","x","q"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"cula","o":["cula","cima","cinga"],"a":0}
]},
{"id":"xh_s2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_s3_2","title":"Recognize","step":"recognize","meta":"c and x side by side","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"ixesha","o":["ixesha","ixoxo","uxolo"],"a":0},
{"t":"mc","q":"What does xela mean?","o":["tell","chat","sorry"],"a":0},
{"t":"li","q":"c or x — which word do you hear?","say":"cela","o":["cela","xela"],"a":0},
{"t":"mc","q":"Which one means frog?","o":["ixoxo","ixesha","icici"],"a":0},
{"t":"li","q":"c or x — which word do you hear?","say":"xela","o":["xela","cela"],"a":0},
{"t":"mc","q":"Someone bumps you and says Uxolo! — they mean…","o":["sorry","hello","goodbye"],"a":0}
]},
{"id":"xh_s3_3","title":"Build","step":"build","meta":"Assemble the lateral click","vocab":[],"ex":[
{"t":"fill","q":"Complete: sorry","s":"u___olo","o":["x","c","q"],"a":0},
{"t":"wb","q":"Build the word: time","a":["ixesha"],"pool":["ixesha","ixoxo","xela"]},
{"t":"fill","q":"Complete: chat","s":"xo___a","o":["x","c","k"],"a":0},
{"t":"wb","q":"Build the word: frog","a":["ixoxo"],"pool":["ixoxo","ixesha","uxolo"]},
{"t":"li","q":"Which word do you hear?","say":"xoxa","o":["xoxa","xela","ixoxo"],"a":0}
]},
{"id":"xh_s3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["xela","tell"],["uxolo","sorry"],["ixesha","time"]]},
{"t":"li","q":"Which word do you hear?","say":"uxolo","o":["uxolo","ixoxo","xoxa"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["xoxa","chat"],["ixoxo","frog"]]},
{"t":"mc","q":"The gee-up click made at the side teeth is written…","o":["x","c","q"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"ixesha","o":["ixesha","xela","icici"],"a":0}
]},
{"id":"xh_s3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_s4_2","title":"Recognize","step":"recognize","meta":"All three clicks side by side","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"qonda","o":["qonda","qala","iqanda"],"a":0},
{"t":"mc","q":"What does iqanda mean?","o":["egg","team","frog"],"a":0},
{"t":"li","q":"c, x or q — which word do you hear?","say":"qala","o":["qala","cula","xela"],"a":0},
{"t":"mc","q":"Which one means begin?","o":["qala","qonda","iqela"],"a":0},
{"t":"li","q":"c, x or q — which word do you hear?","say":"cima","o":["cima","xela","qala"],"a":0},
{"t":"mc","q":"You are lost in a conversation. You say…","o":["Andiqondi","Iqanda","Qala"],"a":0}
]},
{"id":"xh_s4_3","title":"Build","step":"build","meta":"Assemble the cork-pop","vocab":[],"ex":[
{"t":"fill","q":"Complete: egg","s":"i___anda","o":["q","c","x"],"a":0},
{"t":"wb","q":"Build the phrase: I do not understand","a":["andiqondi"],"pool":["andiqondi","qonda","qala"]},
{"t":"fill","q":"Complete: team","s":"iqe___a","o":["l","nd","ng"],"a":0},
{"t":"wb","q":"Build the word: begin","a":["qala"],"pool":["qala","iqela","iqanda"]},
{"t":"li","q":"Which word do you hear?","say":"iqela","o":["iqela","iqanda","qonda"],"a":0}
]},
{"id":"xh_s4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["qala","begin"],["qonda","understand"],["iqanda","egg"]]},
{"t":"li","q":"Which word do you hear?","say":"andiqondi","o":["andiqondi","iqela","qala"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["andiqondi","I do not understand"],["iqela","team"]]},
{"t":"mc","q":"The loud cork-pop click from the roof of the mouth is written…","o":["q","c","x"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"qonda","o":["qonda","qala","ucango"],"a":0}
]},
{"id":"xh_s4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does qonda mean?","o":["understand","begin","tell"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"iqanda","o":["iqanda","iqela","ixoxo"],"a":0},
{"t":"mc","q":"Which one means team?","o":["iqela","iqanda","imoto"],"a":0},
{"t":"mc","q":"When you do not follow what someone said, you say…","o":["Andiqondi","Uxolo","Hamba"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"qala","o":["qala","cela","xela"],"a":0},
{"t":"mc","q":"Review — which one means sorry?","o":["uxolo","ixesha","cinga"],"a":0}
]},

/* ---------- s5 · Click variants ---------- */
{"id":"xh_s5","title":"The click variants","step":"learn","meta":"Aspirated, voiced and nasal clicks — and the name isiXhosa","vocab":[["isiXhosa","ee-see-XHAW-sah","the Xhosa language"],["nceda","NCEH-dah","please"],["incwadi","een-CWAH-dee","book"],["iqhude","ee-QHOO-deh","rooster"],["umngqusho","oom-NGQOO-shaw","samp and beans"],["ingca","een-GCAH","grass"]],"ex":[
{"t":"note","tag":"Aspirated and nasal clicks","q":"The h, the g and the n","body":"<p>Each click has three companions. Add <b>h</b> and it comes with a puff of air: the <b>xh</b> in <b>isiXhosa</b> — the name of the language itself! Add <b>n</b> and it hums through the nose: <b>nceda</b>, <i>please</i>. Add <b>g</b> and it turns deep and voiced: <b>ingca</b>, <i>grass</i>.</p><p>Do not memorise the system — just listen and copy, word by word.</p>","eg":[["isiXhosa","ee-see-XHAW-sah","the Xhosa language"],["nceda","NCEH-dah","please"],["ingca","een-GCAH","grass"]]},
{"t":"li","q":"Which one do you hear?","say":"isiXhosa","o":["isiXhosa","nceda"],"a":0},
{"t":"mc","q":"What does nceda mean?","o":["please","book","grass"],"a":0},
{"t":"note","tag":"Real words, real food","q":"A book, a rooster and lunch","body":"<p><b>incwadi</b> is <i>a book</i>, <b>iqhude</b> is <i>a rooster</i> (hear the puff on qh), and <b>umngqusho</b> — samp and beans — is the beloved Xhosa dish you will be offered in any Eastern Cape home. Say it slowly: oom-NGQOO-shaw. If you can order umngqusho, your clicks have arrived.</p>","eg":[["incwadi","een-CWAH-dee","book"],["iqhude","ee-QHOO-deh","rooster"],["umngqusho","oom-NGQOO-shaw","samp and beans"]]},
{"t":"li","q":"Which word do you hear?","say":"umngqusho","o":["umngqusho","incwadi","iqhude"],"a":0},
{"t":"mc","q":"incwadi means…","o":["book","rooster","samp and beans"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"ingca","o":["ingca","nceda"],"a":0},
{"t":"mc","q":"Which one means the Xhosa language?","o":["isiXhosa","umngqusho","incwadi"],"a":0}
]},
{"id":"xh_s5_2","title":"Recognize","step":"recognize","meta":"Plain click or dressed-up click?","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"iqhude","o":["iqhude","iqanda","iqela"],"a":0},
{"t":"mc","q":"What does umngqusho mean?","o":["samp and beans","grass","egg"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"nceda","o":["nceda","cela","ingca"],"a":0},
{"t":"mc","q":"Which one means grass?","o":["ingca","incwadi","ixesha"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"incwadi","o":["incwadi","ingca","nceda"],"a":0},
{"t":"mc","q":"To say please when asking for something, use…","o":["nceda","uxolo","ewe"],"a":0}
]},
{"id":"xh_s5_3","title":"Build","step":"build","meta":"Spell the dressed-up clicks","vocab":[],"ex":[
{"t":"fill","q":"Complete the language name","s":"isi___osa","o":["Xh","X","Q"],"a":0},
{"t":"wb","q":"Build the word: please","a":["nceda"],"pool":["nceda","ingca","cela"]},
{"t":"fill","q":"Complete: book","s":"i___wadi","o":["nc","ng","nq"],"a":0},
{"t":"wb","q":"Build the word: samp and beans","a":["umngqusho"],"pool":["umngqusho","incwadi","iqhude"]},
{"t":"li","q":"Which word do you hear?","say":"isiXhosa","o":["isiXhosa","incwadi","umngqusho"],"a":0}
]},
{"id":"xh_s5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["isiXhosa","the Xhosa language"],["nceda","please"],["incwadi","book"]]},
{"t":"li","q":"Which word do you hear?","say":"iqhude","o":["iqhude","umngqusho","ingca"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["iqhude","rooster"],["umngqusho","samp and beans"],["ingca","grass"]]},
{"t":"mc","q":"The xh in isiXhosa is the x click plus…","o":["a puff of air","a hum through the nose","a deep voiced sound"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"nceda","o":["nceda","incwadi","isiXhosa"],"a":0}
]},
{"id":"xh_s5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_s6_2","title":"Recognize","step":"recognize","meta":"Fine ears for fine sounds","vocab":[],"ex":[
{"t":"li","q":"Which word do you hear?","say":"indlu","o":["indlu","inja","inyama"],"a":0},
{"t":"mc","q":"What does hlala mean?","o":["sit down","change","house"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"inja","o":["inja","inyama","indlu"],"a":0},
{"t":"mc","q":"Which one means food?","o":["ukutya","inyama","umngqusho"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"inyama","o":["inyama","inja","ukutya"],"a":0},
{"t":"mc","q":"What does inja mean?","o":["dog","meat","frog"],"a":0}
]},
{"id":"xh_s6_3","title":"Build","step":"build","meta":"Spell hl, dl and friends","vocab":[],"ex":[
{"t":"fill","q":"Complete: sit down","s":"___ala","o":["hl","dl","tsh"],"a":0},
{"t":"wb","q":"Build the word: house","a":["indlu"],"pool":["indlu","inja","hlala"]},
{"t":"fill","q":"Complete: food","s":"uku___a","o":["ty","tsh","ny"],"a":0},
{"t":"wb","q":"Build the word: meat","a":["inyama"],"pool":["inyama","ukutya","inja"]},
{"t":"li","q":"Which word do you hear?","say":"hlala","o":["hlala","tshintsha","indlu"],"a":0}
]},
{"id":"xh_s6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["hlala","sit down"],["indlu","house"],["ukutya","food"]]},
{"t":"li","q":"Which word do you hear?","say":"inja","o":["inja","indlu","hlala"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["inja","dog"],["inyama","meat"],["tshintsha","change"]]},
{"t":"mc","q":"The blown l with no humming is written…","o":["hl","dl","ny"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"ukutya","o":["ukutya","tshintsha","inyama"],"a":0}
]},
{"id":"xh_s6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_s7_2","title":"Recognize","step":"recognize","meta":"One person or many? Coming or going?","vocab":[],"ex":[
{"t":"li","q":"Which greeting do you hear?","say":"molo","o":["molo","molweni","enkosi"],"a":0},
{"t":"mc","q":"What does enkosi mean?","o":["thank you","hello","goodbye"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"sala kakuhle","o":["sala kakuhle","hamba kakuhle"],"a":0},
{"t":"mc","q":"Molo is for…","o":["one person","several people","only children"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"kakhulu","o":["kakhulu","enkosi","molo"],"a":0},
{"t":"mc","q":"Your friend is walking away. You call…","o":["Hamba kakuhle","Sala kakuhle","Andiqondi"],"a":0}
]},
{"id":"xh_s7_3","title":"Build","step":"build","meta":"Assemble hello, thanks and goodbye","vocab":[],"ex":[
{"t":"fill","q":"Complete the greeting to a group","s":"Mol___ni","o":["we","o","a"],"a":0},
{"t":"wb","q":"Build: thank you very much","a":["enkosi","kakhulu"],"pool":["enkosi","kakhulu","molo"]},
{"t":"fill","q":"Complete: go well","s":"Hamba kaku___e","o":["hl","dl","tsh"],"a":0},
{"t":"wb","q":"Build: stay well","a":["sala","kakuhle"],"pool":["sala","kakuhle","hamba"]},
{"t":"li","q":"Which one do you hear?","say":"molweni","o":["molweni","molo","kakhulu"],"a":0}
]},
{"id":"xh_s7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["molo","hello (to one person)"],["molweni","hello (to several people)"],["enkosi","thank you"]]},
{"t":"li","q":"Which one do you hear?","say":"hamba kakuhle","o":["hamba kakuhle","sala kakuhle","molweni"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["kakhulu","very much"],["hamba kakuhle","go well"],["sala kakuhle","stay well"]]},
{"t":"mc","q":"Before asking a stranger for directions, you first…","o":["greet them","apologise","say your name"],"a":0},
{"t":"li","q":"Which word do you hear?","say":"enkosi","o":["enkosi","molweni","sala kakuhle"],"a":0}
]},
{"id":"xh_s7_5","title":"Checkpoint","step":"checkpoint","meta":"Zone 1 complete — show it all","vocab":[],"ex":[
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
{"id":"xh_g1_2","title":"Recognize","step":"recognize","meta":"Question or answer?","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"unjani","o":["unjani","kunjani","ndiyaphila"],"a":0},
{"t":"mc","q":"What does ndiyaphila mean?","o":["I am fine","how are you?","you too"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kunjani","o":["kunjani","unjani","ndikhona"],"a":0},
{"t":"mc","q":"Which one means you?","o":["wena","nawe","unjani"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nawe","o":["nawe","wena","ndiyaphila"],"a":0},
{"t":"mc","q":"A friend asks Kunjani? A natural reply is…","o":["Ndikhona","Molweni","Uxolo"],"a":0}
]},
{"id":"xh_g1_3","title":"Build","step":"build","meta":"Say it yourself","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am fine","s":"Ndiyaphi___, enkosi.","o":["la","lo","le"],"a":0},
{"t":"wb","q":"Build: and you, how are you?","a":["wena","unjani"],"pool":["wena","unjani","nawe"]},
{"t":"fill","q":"Complete the casual question","s":"Ku___ani?","o":["nj","ny","ng"],"a":0},
{"t":"wb","q":"Build: I am okay","a":["ndikhona"],"pool":["ndikhona","ndiyaphila","wena"]},
{"t":"li","q":"Which one do you hear?","say":"ndiyaphila","o":["ndiyaphila","ndikhona","nawe"],"a":0}
]},
{"id":"xh_g1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["unjani","how are you?"],["ndiyaphila","I am fine"],["ndikhona","I am okay"]]},
{"t":"li","q":"Which one do you hear?","say":"unjani","o":["unjani","wena","kunjani"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["kunjani","how is it going?"],["wena","you"],["nawe","you too"]]},
{"t":"mc","q":"The ndi- at the start of ndiyaphila means…","o":["I","you","we"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kunjani","o":["kunjani","ndikhona","unjani"],"a":0}
]},
{"id":"xh_g1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_g2_2","title":"Recognize","step":"recognize","meta":"Who is asking what?","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"lam","o":["lam","lakho","igama"],"a":0},
{"t":"mc","q":"Igama lakho ngubani? asks about…","o":["your name","my name","your home"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"NdinguSipho","o":["NdinguSipho","Ungubani?","igama"],"a":0},
{"t":"mc","q":"Which one means who are you?","o":["Ungubani?","Unjani?","Uvela phi?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"lakho","o":["lakho","lam","wena"],"a":0},
{"t":"mc","q":"igama lam means…","o":["my name","your name","a person"],"a":0}
]},
{"id":"xh_g2_3","title":"Build","step":"build","meta":"Put your name into Xhosa","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am Sipho","s":"Ndingu___ipho","o":["S","Th","B"],"a":0},
{"t":"wb","q":"Build: my name","a":["igama","lam"],"pool":["igama","lam","lakho"]},
{"t":"fill","q":"Complete the question: your name is who?","s":"Igama lakho ngu___ani?","o":["b","ph","nj"],"a":0},
{"t":"wb","q":"Build: what is your name? (literally: name your who?)","a":["igama","lakho","ngubani"],"pool":["igama","lakho","ngubani","lam"]},
{"t":"li","q":"Which one do you hear?","say":"igama","o":["igama","lam","Ungubani?"],"a":0}
]},
{"id":"xh_g2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["igama","name"],["lam","my"],["lakho","your"]]},
{"t":"li","q":"Which one do you hear?","say":"Ungubani?","o":["Ungubani?","Igama lakho ngubani?","NdinguSipho"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["NdinguSipho","I am Sipho"],["Ungubani?","who are you?"]]},
{"t":"mc","q":"To answer Ungubani?, you start with…","o":["Ndingu-","Lakho","Unjani"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"lam","o":["lam","igama","lakho"],"a":0}
]},
{"id":"xh_g2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_g3_2","title":"Recognize","step":"recognize","meta":"Singular or plural, by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"umntu","o":["umntu","abantu","umntwana"],"a":0},
{"t":"mc","q":"What does indoda mean?","o":["man","friend","child"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umntwana","o":["umntwana","abantwana","umhlobo"],"a":0},
{"t":"mc","q":"Which one means people?","o":["abantu","umntu","abantwana"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"indoda","o":["indoda","umhlobo","umntu"],"a":0},
{"t":"mc","q":"To make umntwana plural, um- becomes…","o":["aba-","imi-","izi-"],"a":0}
]},
{"id":"xh_g3_3","title":"Build","step":"build","meta":"Swap the prefixes yourself","vocab":[],"ex":[
{"t":"fill","q":"Complete: people","s":"___ntu","o":["aba","um","imi"],"a":0},
{"t":"wb","q":"Build the word: children","a":["abantwana"],"pool":["abantwana","umntwana","abantu"]},
{"t":"fill","q":"Complete: friend","s":"um___obo","o":["hl","dl","tsh"],"a":0},
{"t":"wb","q":"Build the word: man","a":["indoda"],"pool":["indoda","umntu","umhlobo"]},
{"t":"li","q":"Which one do you hear?","say":"abantu","o":["abantu","abantwana","indoda"],"a":0}
]},
{"id":"xh_g3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umntu","person"],["abantu","people"],["indoda","man"]]},
{"t":"li","q":"Which one do you hear?","say":"umhlobo","o":["umhlobo","umntwana","abantu"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umntwana","child"],["abantwana","children"],["umhlobo","friend"]]},
{"t":"mc","q":"The idea that a person is a person through other people is called…","o":["ubuntu","umntu","indoda"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"abantwana","o":["abantwana","umntwana","umhlobo"],"a":0}
]},
{"id":"xh_g3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_g4_2","title":"Recognize","step":"recognize","meta":"Bro, sis and gratitude by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"sisi","o":["sisi","bhuti","akunani"],"a":0},
{"t":"mc","q":"What does akunani mean?","o":["no problem","thank you","excuse me"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uxolo bhuti","o":["Uxolo bhuti","Enkosi sisi","ndiyabulela"],"a":0},
{"t":"mc","q":"bhuti is the friendly address for…","o":["a young man","a young woman","an elder"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"akunani","o":["akunani","ndiyabulela","sisi"],"a":0},
{"t":"mc","q":"Which one is the warmer, fuller thank you?","o":["ndiyabulela","enkosi","akunani"],"a":0}
]},
{"id":"xh_g4_3","title":"Build","step":"build","meta":"Politeness, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: I thank you","s":"Ndiyabu___la","o":["le","la","lo"],"a":0},
{"t":"wb","q":"Build: excuse me, bro","a":["uxolo","bhuti"],"pool":["uxolo","bhuti","sisi"]},
{"t":"fill","q":"Complete: no problem","s":"Akuna___","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: thank you, sis","a":["enkosi","sisi"],"pool":["enkosi","sisi","bhuti"]},
{"t":"li","q":"Which one do you hear?","say":"bhuti","o":["bhuti","akunani","sisi"],"a":0}
]},
{"id":"xh_g4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["bhuti","bro (young man)"],["sisi","sis (young woman)"],["akunani","no problem"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyabulela","o":["ndiyabulela","Enkosi sisi","akunani"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndiyabulela","I thank you"],["Uxolo bhuti","excuse me, bro"],["Enkosi sisi","thank you, sis"]]},
{"t":"mc","q":"A stranger your age helped you. Warmest thanks…","o":["Ndiyabulela bhuti","Akunani","Ungubani?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"sisi","o":["sisi","bhuti","enkosi"],"a":0}
]},
{"id":"xh_g4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_g5_2","title":"Recognize","step":"recognize","meta":"Cities and the question word","vocab":[],"ex":[
{"t":"li","q":"Which place do you hear?","say":"eGoli","o":["eGoli","eKapa","eMonti"],"a":0},
{"t":"mc","q":"What does ndivela mean?","o":["I come from","where?","I live"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eMonti","o":["eMonti","eGoli","eKapa"],"a":0},
{"t":"mc","q":"Which one means where?","o":["phi?","ngubani?","unjani?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"phi?","o":["phi?","ndivela","eKapa"],"a":0},
{"t":"mc","q":"eMonti is…","o":["East London","Johannesburg","Cape Town"],"a":0}
]},
{"id":"xh_g5_3","title":"Build","step":"build","meta":"Say where you are from","vocab":[],"ex":[
{"t":"fill","q":"Complete: I come from Cape Town","s":"Ndivela e___apa.","o":["K","G","M"],"a":0},
{"t":"wb","q":"Build: where are you from?","a":["uvela","phi"],"pool":["uvela","phi","ndivela"]},
{"t":"fill","q":"Complete: Johannesburg","s":"eGo___","o":["li","lo","la"],"a":0},
{"t":"wb","q":"Build: I come from Johannesburg","a":["ndivela","eGoli"],"pool":["ndivela","eGoli","eKapa"]},
{"t":"li","q":"Which one do you hear?","say":"eKapa","o":["eKapa","eMonti","phi?"],"a":0}
]},
{"id":"xh_g5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["phi?","where?"],["ndivela","I come from"],["eKapa","in Cape Town"]]},
{"t":"li","q":"Which one do you hear?","say":"Uvela phi?","o":["Uvela phi?","eGoli","ndivela"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["eGoli","in Johannesburg"],["eMonti","in East London"]]},
{"t":"mc","q":"The little e- on a place name means…","o":["in or at that place","the big one","far away"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eMonti","o":["eMonti","eKapa","eGoli"],"a":0}
]},
{"id":"xh_g5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
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
{"id":"xh_g6_2","title":"Recognize","step":"recognize","meta":"Places to live, by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndihlala","o":["ndihlala","Uhlala phi?","ilokishi"],"a":0},
{"t":"mc","q":"What does ilokishi mean?","o":["township","town","house"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eGugulethu","o":["eGugulethu","eKhayelitsha","eKapa"],"a":0},
{"t":"mc","q":"Ndihlala eKhayelitsha means…","o":["I live in Khayelitsha","I come from Gugulethu","where is Khayelitsha?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"idolophu","o":["idolophu","ilokishi","ndihlala"],"a":0},
{"t":"mc","q":"eKhayelitsha means…","o":["new home","our pride","big town"],"a":0}
]},
{"id":"xh_g6_3","title":"Build","step":"build","meta":"Say where you live","vocab":[],"ex":[
{"t":"fill","q":"Complete: I live in Gugulethu","s":"Ndihlala eGugule___u.","o":["th","t","tsh"],"a":0},
{"t":"wb","q":"Build: where do you live?","a":["uhlala","phi"],"pool":["uhlala","phi","ndihlala"]},
{"t":"fill","q":"Complete: township","s":"iloki___i","o":["sh","tsh","s"],"a":0},
{"t":"wb","q":"Build: I live in Khayelitsha","a":["ndihlala","eKhayelitsha"],"pool":["ndihlala","eKhayelitsha","idolophu"]},
{"t":"li","q":"Which one do you hear?","say":"eGugulethu","o":["eGugulethu","idolophu","ilokishi"],"a":0}
]},
{"id":"xh_g6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uhlala phi?","where do you live?"],["ndihlala","I live"],["ilokishi","township"]]},
{"t":"li","q":"Which place do you hear?","say":"eKhayelitsha","o":["eKhayelitsha","eGugulethu","eMonti"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["eKhayelitsha","in Khayelitsha"],["eGugulethu","in Gugulethu"],["idolophu","town"]]},
{"t":"mc","q":"hlala means sit down AND…","o":["live somewhere","come from","walk"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ilokishi","o":["ilokishi","idolophu","eGugulethu"],"a":0}
]},
{"id":"xh_g6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Uhlala phi? asks…","o":["where do you live?","where are you from?","what is your name?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndihlala","o":["ndihlala","ilokishi","eKhayelitsha"],"a":0},
{"t":"mc","q":"Which one means township?","o":["ilokishi","idolophu","indlu"],"a":0},
{"t":"mc","q":"A full answer to Uhlala phi? is…","o":["Ndihlala eGugulethu","Ndivela phi","Ndiyabulela"],"a":0},
{"t":"li","q":"Which place do you hear?","say":"eGugulethu","o":["eGugulethu","eKhayelitsha","eKapa"],"a":0},
{"t":"mc","q":"Review — Uvela phi? asks…","o":["where are you from?","where do you live?","who is this?"],"a":0}
]},

/* ---------- g7 · Do you speak Xhosa? ---------- */
{"id":"xh_g7","title":"Do you speak Xhosa?","step":"learn","meta":"The learner survival kit","vocab":[["Uthetha isiXhosa?","oo-TEH-tah ee-see-XHAW-sah","do you speak Xhosa?"],["ndithetha","ndee-TEH-tah","I speak"],["kancinci","kahn-CEEN-cee","a little"],["Uyaqonda?","oo-yah-QAWN-dah","do you understand?"],["ndiyaqonda","ndee-yah-QAWN-dah","I understand"],["Ndifunda isiXhosa","ndee-FOON-dah ee-see-XHAW-sah","I am learning Xhosa"]],"ex":[
{"t":"note","tag":"The learner&rsquo;s sentence","q":"Ndifunda isiXhosa","body":"<p>Say <b>Ndifunda isiXhosa</b> — <i>I am learning Xhosa</i> — anywhere in Cape Town and watch faces light up. It is the sentence that turns strangers into teachers.</p><p><b>Uthetha isiXhosa?</b> asks <i>do you speak Xhosa?</i>; answer honestly with <b>ndithetha kancinci</b> — <i>I speak a little</i>.</p>","eg":[["Ndifunda isiXhosa","ndee-FOON-dah ee-see-XHAW-sah","I am learning Xhosa"],["Uthetha isiXhosa?","oo-TEH-tah ee-see-XHAW-sah","do you speak Xhosa?"],["ndithetha","ndee-TEH-tah","I speak"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndifunda isiXhosa","o":["Ndifunda isiXhosa","Uthetha isiXhosa?"],"a":0},
{"t":"mc","q":"What does ndithetha mean?","o":["I speak","I learn","I understand"],"a":0},
{"t":"note","tag":"A little","q":"kancinci — the honest word","body":"<p><b>Kancinci</b> is <i>a little</i> — the learner word you will say a hundred times: <b>Ndithetha isiXhosa kancinci</b>. Its opposite from the greetings, <b>kakhulu</b>, means <i>a lot</i>.</p>","eg":[["kancinci","kahn-CEEN-cee","a little"]]},
{"t":"li","q":"Which one do you hear?","say":"kancinci","o":["kancinci","ndithetha"],"a":0},
{"t":"mc","q":"Ndithetha isiXhosa kancinci means…","o":["I speak a little Xhosa","I speak Xhosa well","I do not speak Xhosa"],"a":0},
{"t":"note","tag":"Checking in","q":"Uyaqonda?","body":"<p>You met <b>qonda</b> with the q click. Now the pair that keeps every conversation alive: <b>Uyaqonda?</b> — <i>do you understand?</i> — and <b>ndiyaqonda</b> — <i>I understand</i>. When you do not: <b>andiqondi</b>, from the sounds zone, is still your friend.</p>","eg":[["Uyaqonda?","oo-yah-QAWN-dah","do you understand?"],["ndiyaqonda","ndee-yah-QAWN-dah","I understand"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyaqonda","o":["ndiyaqonda","Uyaqonda?"],"a":0},
{"t":"mc","q":"Uyaqonda? asks…","o":["do you understand?","do you speak?","are you learning?"],"a":0}
]},
{"id":"xh_g7_2","title":"Recognize","step":"recognize","meta":"Speaking, learning, understanding","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Uthetha isiXhosa?","o":["Uthetha isiXhosa?","Ndifunda isiXhosa","ndithetha"],"a":0},
{"t":"mc","q":"What does kancinci mean?","o":["a little","a lot","again"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uyaqonda?","o":["Uyaqonda?","ndiyaqonda","kancinci"],"a":0},
{"t":"mc","q":"Which one means I understand?","o":["ndiyaqonda","andiqondi","ndithetha"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndithetha","o":["ndithetha","ndiyaqonda","Ndifunda isiXhosa"],"a":0},
{"t":"mc","q":"The sentence that makes strangers into teachers is…","o":["Ndifunda isiXhosa","Uyaqonda?","Akunani"],"a":0}
]},
{"id":"xh_g7_3","title":"Build","step":"build","meta":"Your survival kit, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: I speak a little","s":"Ndithetha kancin___.","o":["ci","ce","ca"],"a":0},
{"t":"wb","q":"Build: I am learning Xhosa","a":["ndifunda","isiXhosa"],"pool":["ndifunda","isiXhosa","ndithetha"]},
{"t":"fill","q":"Complete: do you understand?","s":"Uya___onda?","o":["q","c","x"],"a":0},
{"t":"wb","q":"Build: do you speak Xhosa?","a":["uthetha","isiXhosa"],"pool":["uthetha","isiXhosa","kancinci"]},
{"t":"li","q":"Which one do you hear?","say":"kancinci","o":["kancinci","ndiyaqonda","ndithetha"],"a":0}
]},
{"id":"xh_g7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndithetha","I speak"],["kancinci","a little"],["ndiyaqonda","I understand"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndifunda isiXhosa","o":["Ndifunda isiXhosa","Uthetha isiXhosa?","Uyaqonda?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uthetha isiXhosa?","do you speak Xhosa?"],["Uyaqonda?","do you understand?"]]},
{"t":"mc","q":"You lost the thread. From the sounds zone, you say…","o":["Andiqondi","Ndiyaqonda","Kancinci"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uyaqonda?","o":["Uyaqonda?","ndiyaqonda","kancinci"],"a":0}
]},
{"id":"xh_g7_5","title":"Checkpoint","step":"checkpoint","meta":"Greetings and people — show it all","vocab":[],"ex":[
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
{"id":"xh_f1_2","title":"Recognize","step":"recognize","meta":"Mother, father, the great ones","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"utata","o":["utata","umama","umakhulu"],"a":0},
{"t":"mc","q":"What does umama mean?","o":["mother","madam only","sister"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utatomkhulu","o":["utatomkhulu","umakhulu","utata"],"a":0},
{"t":"mc","q":"Which one means grandfather?","o":["utatomkhulu","umakhulu","utata"],"a":0},
{"t":"li","q":"Which greeting do you hear?","say":"Molo tata","o":["Molo tata","Molo mama","Molweni"],"a":0},
{"t":"mc","q":"The address words for elders you do not know are…","o":["tata and mama","bhuti and sisi","wena and nawe"],"a":0}
]},
{"id":"xh_f1_3","title":"Build","step":"build","meta":"Assemble mother, father and the greetings","vocab":[],"ex":[
{"t":"fill","q":"Complete: grandmother","s":"umakhu___","o":["lu","la","lo"],"a":0},
{"t":"wb","q":"Build: hello madam","a":["molo","mama"],"pool":["molo","mama","tata"]},
{"t":"fill","q":"Complete: father","s":"u___ta","o":["ta","da","tha"],"a":0},
{"t":"wb","q":"Build: hello sir","a":["molo","tata"],"pool":["molo","tata","mama"]},
{"t":"li","q":"Which one do you hear?","say":"umama","o":["umama","umakhulu","utata"],"a":0}
]},
{"id":"xh_f1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umama","mother"],["utata","father"],["umakhulu","grandmother"]]},
{"t":"li","q":"Which one do you hear?","say":"Molo tata","o":["Molo tata","Molo mama","utatomkhulu"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["utatomkhulu","grandfather"],["Molo tata","hello sir"],["Molo mama","hello madam"]]},
{"t":"mc","q":"Kin words wear which little prefix?","o":["u-","i-","um-"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utata","o":["utata","umama","Molo mama"],"a":0}
]},
{"id":"xh_f1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does umakhulu mean?","o":["grandmother","grandfather","mother"],"a":0},
{"t":"li","q":"Which greeting do you hear?","say":"Molo mama","o":["Molo mama","Molo tata","umama"],"a":0},
{"t":"mc","q":"Which one means father?","o":["utata","utatomkhulu","umama"],"a":0},
{"t":"mc","q":"An elder woman drops her bag. After helping, she thanks you and you say…","o":["Akunani mama","Hamba kakuhle","Ungubani?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utatomkhulu","o":["utatomkhulu","utata","umakhulu"],"a":0},
{"t":"mc","q":"Review — the friendly address for a young woman is…","o":["sisi","mama","wena"],"a":0},
{"t":"mc","q":"Review — which means “yes”?","o":["ewe","andiqondi","icici"],"a":0},
{"t":"mc","q":"Review — which means “ask for”?","o":["cela","nceda","qonda"],"a":0},
{"t":"mc","q":"Review — which means “time”?","o":["ixesha","imoto","incwadi"],"a":0},
{"t":"mc","q":"Review — which means “book”?","o":["incwadi","iqhude","into"],"a":0},
{"t":"mc","q":"Review — which means “hello (to one person)”?","o":["molo","ixesha","umngqusho"],"a":0}
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
{"id":"xh_f2_2","title":"Recognize","step":"recognize","meta":"One sibling or several","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"usisi","o":["usisi","oosisi","ubhuti"],"a":0},
{"t":"mc","q":"What does oosisi mean?","o":["sisters","sister","brothers"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"oobhuti","o":["oobhuti","ubhuti","umzala"],"a":0},
{"t":"mc","q":"Which one means brother?","o":["ubhuti","oobhuti","umzala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umzala","o":["umzala","usisi","oobhuti"],"a":0},
{"t":"mc","q":"The kin plural prefix is…","o":["oo-","aba-","izi-"],"a":0}
]},
{"id":"xh_f2_3","title":"Build","step":"build","meta":"Singulars and plurals by hand","vocab":[],"ex":[
{"t":"fill","q":"Complete: brothers","s":"___bhuti","o":["oo","u","aba"],"a":0},
{"t":"wb","q":"Build the word: sister","a":["usisi"],"pool":["usisi","oosisi","umzala"]},
{"t":"fill","q":"Complete: cousin","s":"um___ala","o":["z","dl","ts"],"a":0},
{"t":"wb","q":"Build the word: sisters","a":["oosisi"],"pool":["oosisi","usisi","ubhuti"]},
{"t":"li","q":"Which one do you hear?","say":"ubhuti","o":["ubhuti","oobhuti","usisi"],"a":0}
]},
{"id":"xh_f2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ubhuti","brother"],["usisi","sister"],["umzala","cousin"]]},
{"t":"li","q":"Which one do you hear?","say":"oosisi","o":["oosisi","oobhuti","usisi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["oobhuti","brothers"],["oosisi","sisters"]]},
{"t":"mc","q":"usisi with the street sense of sis drops its prefix to become…","o":["sisi","oosisi","umzala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usisi","o":["usisi","umzala","ubhuti"],"a":0}
]},
{"id":"xh_f2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does umzala mean?","o":["cousin","brother","uncle"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"oobhuti","o":["oobhuti","ubhuti","oosisi"],"a":0},
{"t":"mc","q":"The plural of usisi is…","o":["oosisi","abasisi","izisisi"],"a":0},
{"t":"mc","q":"Which one means brother?","o":["ubhuti","umzala","utata"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usisi","o":["usisi","oosisi","umzala"],"a":0},
{"t":"mc","q":"Review — which one means grandmother?","o":["umakhulu","utatomkhulu","umama"],"a":0},
{"t":"mc","q":"Review — which means “no”?","o":["hayi","molweni","kakhulu"],"a":0},
{"t":"mc","q":"Review — which means “sing”?","o":["cula","xoxa","cima"],"a":0},
{"t":"mc","q":"Review — which means “chat”?","o":["xoxa","andiqondi","tshintsha"],"a":0},
{"t":"mc","q":"Review — which means “rooster”?","o":["iqhude","indlu","icici"],"a":0},
{"t":"mc","q":"Review — which means “hello (to several people)”?","o":["molweni","incwadi","imoto"],"a":0}
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
{"id":"xh_f3_2","title":"Recognize","step":"recognize","meta":"Wam or wakho?","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"intsapho","o":["intsapho","abazali","umama wam"],"a":0},
{"t":"mc","q":"What does abazali mean?","o":["parents","family","grandparents"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utata wakho","o":["utata wakho","umama wam","ubhuti wakho"],"a":0},
{"t":"mc","q":"Which one means my mother?","o":["umama wam","umama wakho","utata wam"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usisi wam","o":["usisi wam","ubhuti wakho","abazali"],"a":0},
{"t":"mc","q":"The word for my that follows a person is…","o":["wam","lam","nam"],"a":0}
]},
{"id":"xh_f3_3","title":"Build","step":"build","meta":"Mine and yours, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: my mother","s":"umama ___","o":["wam","wakho","lam"],"a":0},
{"t":"wb","q":"Build: your father","a":["utata","wakho"],"pool":["utata","wakho","wam"]},
{"t":"fill","q":"Complete: parents","s":"aba___ali","o":["z","s","dl"],"a":0},
{"t":"wb","q":"Build: my sister","a":["usisi","wam"],"pool":["usisi","wam","wakho"]},
{"t":"li","q":"Which one do you hear?","say":"abazali","o":["abazali","intsapho","utata wakho"],"a":0}
]},
{"id":"xh_f3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["intsapho","family"],["abazali","parents"],["umama wam","my mother"]]},
{"t":"li","q":"Which one do you hear?","say":"ubhuti wakho","o":["ubhuti wakho","usisi wam","utata wakho"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["utata wakho","your father"],["usisi wam","my sister"],["ubhuti wakho","your brother"]]},
{"t":"mc","q":"With igama the pair was lam/lakho; with people it is…","o":["wam and wakho","nam and nakho","yam and yakho"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umama wam","o":["umama wam","abazali","usisi wam"],"a":0}
]},
{"id":"xh_f3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does abazali mean?","o":["parents","family","cousins"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"intsapho","o":["intsapho","abazali","umzala"],"a":0},
{"t":"mc","q":"Which one means your brother?","o":["ubhuti wakho","ubhuti wam","oobhuti"],"a":0},
{"t":"mc","q":"umama wam means…","o":["my mother","your mother","my grandmother"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utata wakho","o":["utata wakho","utata","umama wam"],"a":0},
{"t":"mc","q":"Review — which one means people?","o":["abantu","abazali","abantwana"],"a":0},
{"t":"mc","q":"Review — which means “go!”","o":["hamba","iqanda","hlala"],"a":0},
{"t":"mc","q":"Review — which means “switch off”?","o":["cima","incwadi","ingca"],"a":0},
{"t":"mc","q":"Review — which means “frog”?","o":["ixoxo","qala","xela"],"a":0},
{"t":"mc","q":"Review — which means “samp and beans”?","o":["umngqusho","molo","iqela"],"a":0},
{"t":"mc","q":"Review — which means “very much”?","o":["kakhulu","molo","ukutya"],"a":0}
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
{"id":"xh_f4_2","title":"Recognize","step":"recognize","meta":"Who is who","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"lo","o":["lo","yena","nguye"],"a":0},
{"t":"mc","q":"What does nguye mean?","o":["it is him","who is this?","this person"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Lo ngutata wam","o":["Lo ngutata wam","Lo ngumama wam","Ngubani lo?"],"a":0},
{"t":"mc","q":"To introduce your mother you say…","o":["Lo ngumama wam","Ngubani lo?","Umama wakho"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nguye","o":["nguye","yena","lo"],"a":0},
{"t":"mc","q":"Xhosa pronouns and gender…","o":["yena covers he and she","yena is only she","every noun has a gender"],"a":0}
]},
{"id":"xh_f4_3","title":"Build","step":"build","meta":"Present your family","vocab":[],"ex":[
{"t":"fill","q":"Complete: this is my mother","s":"Lo ngumama ___.","o":["wam","wakho","lam"],"a":0},
{"t":"wb","q":"Build: who is this?","a":["ngubani","lo"],"pool":["ngubani","lo","yena"]},
{"t":"fill","q":"Complete: it is him","s":"ngu___","o":["ye","ya","yo"],"a":0},
{"t":"wb","q":"Build: this is my father","a":["lo","ngutata","wam"],"pool":["lo","ngutata","wam","wakho"]},
{"t":"li","q":"Which one do you hear?","say":"Ngubani lo?","o":["Ngubani lo?","Lo ngumama wam","yena"],"a":0}
]},
{"id":"xh_f4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["lo","this person"],["yena","he or she"],["nguye","it is him"]]},
{"t":"li","q":"Which one do you hear?","say":"Lo ngumama wam","o":["Lo ngumama wam","Lo ngutata wam","Ngubani lo?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ngubani lo?","who is this?"],["Lo ngutata wam","this is my father"]]},
{"t":"mc","q":"The ngu- of introductions also appeared in…","o":["NdinguSipho","Ndiyaphila","Molweni"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"yena","o":["yena","lo","nguye"],"a":0}
]},
{"id":"xh_f4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Ngubani lo? asks…","o":["who is this?","who are you?","where is he?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Lo ngutata wam","o":["Lo ngutata wam","Lo ngumama wam","nguye"],"a":0},
{"t":"mc","q":"Which one means he or she?","o":["yena","lo","wena"],"a":0},
{"t":"mc","q":"A friend points at your photo and asks Ngubani lo? about your mom. You say…","o":["Lo ngumama wam","Umama wakho","Ngubani"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nguye","o":["nguye","yena","lam"],"a":0},
{"t":"mc","q":"Review — which one means your father?","o":["utata wakho","utata wam","utatomkhulu"],"a":0},
{"t":"mc","q":"Review — which means “come!”","o":["iza","molweni","iqhude"],"a":0},
{"t":"mc","q":"Review — which means “earring”?","o":["icici","ingca","umngqusho"],"a":0},
{"t":"mc","q":"Review — which means “begin”?","o":["qala","ixesha","hayi"],"a":0},
{"t":"mc","q":"Review — which means “grass”?","o":["ingca","molo","iqanda"],"a":0}
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
{"id":"xh_f5_2","title":"Recognize","step":"recognize","meta":"People, clans, honour","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"umXhosa","o":["umXhosa","amaXhosa","isiduko"],"a":0},
{"t":"mc","q":"What does isiduko mean?","o":["clan name","respect","surname"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Enkosi mama","o":["Enkosi mama","Uxolo tata","intlonipho"],"a":0},
{"t":"mc","q":"Which one means the Xhosa people?","o":["amaXhosa","umXhosa","isiXhosa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uxolo tata","o":["Uxolo tata","Enkosi mama","umXhosa"],"a":0},
{"t":"mc","q":"Giving and receiving with both hands shows…","o":["intlonipho","isiduko","igama"],"a":0}
]},
{"id":"xh_f5_3","title":"Build","step":"build","meta":"Honour, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: respect","s":"intloni___o","o":["ph","p","b"],"a":0},
{"t":"wb","q":"Build: excuse me, sir","a":["uxolo","tata"],"pool":["uxolo","tata","mama"]},
{"t":"fill","q":"Complete: the Xhosa people","s":"___Xhosa","o":["ama","um","isi"],"a":0},
{"t":"wb","q":"Build: thank you, madam","a":["enkosi","mama"],"pool":["enkosi","mama","tata"]},
{"t":"li","q":"Which one do you hear?","say":"amaXhosa","o":["amaXhosa","umXhosa","intlonipho"],"a":0}
]},
{"id":"xh_f5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["intlonipho","respect"],["isiduko","clan name"],["umXhosa","a Xhosa person"]]},
{"t":"li","q":"Which one do you hear?","say":"isiduko","o":["isiduko","intlonipho","amaXhosa"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["amaXhosa","the Xhosa people"],["Uxolo tata","excuse me, sir"],["Enkosi mama","thank you, madam"]]},
{"t":"mc","q":"isiXhosa, umXhosa, amaXhosa — the prefixes mean…","o":["language, person, people","people, language, person","person, people, language"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"intlonipho","o":["intlonipho","isiduko","Enkosi mama"],"a":0}
]},
{"id":"xh_f5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does intlonipho mean?","o":["respect","clan name","family"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umXhosa","o":["umXhosa","amaXhosa","umzala"],"a":0},
{"t":"mc","q":"A clan name older than the surname is the…","o":["isiduko","igama","intsapho"],"a":0},
{"t":"mc","q":"You need to pass an elder man in a full taxi. You say…","o":["Uxolo tata","Hamba","Uxolo bhuti"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amaXhosa","o":["amaXhosa","isiduko","intlonipho"],"a":0},
{"t":"mc","q":"Review — intsapho means…","o":["family","parents","respect"],"a":0},
{"t":"mc","q":"Review — which means “car”?","o":["imoto","inyama","ingca"],"a":0},
{"t":"mc","q":"Review — which means “think”?","o":["cinga","molweni","uxolo"],"a":0},
{"t":"mc","q":"Review — which means “I do not understand”?","o":["andiqondi","into","isiXhosa"],"a":0},
{"t":"mc","q":"Review — which means “sit down”?","o":["hlala","incwadi","kakhulu"],"a":0}
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
{"id":"xh_f6_2","title":"Recognize","step":"recognize","meta":"Here, not here, at home","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ukhona","o":["ukhona","akekho","ikhaya"],"a":0},
{"t":"mc","q":"What does usekhaya mean?","o":["she is at home","she is not here","where is she?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ukhona utata?","o":["Ukhona utata?","Uphi umama?","usekhaya"],"a":0},
{"t":"mc","q":"Which one means he is not here?","o":["akekho","ukhona","usekhaya"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uphi umama?","o":["Uphi umama?","Ukhona utata?","ikhaya"],"a":0},
{"t":"mc","q":"indlu is the building; the word for home-where-your-people-are is…","o":["ikhaya","ilokishi","intsapho"],"a":0}
]},
{"id":"xh_f6_3","title":"Build","step":"build","meta":"Ask after people","vocab":[],"ex":[
{"t":"fill","q":"Complete: he is not here","s":"ake___o","o":["kh","k","q"],"a":0},
{"t":"wb","q":"Build: is father there?","a":["ukhona","utata"],"pool":["ukhona","utata","akekho"]},
{"t":"fill","q":"Complete: she is at home","s":"use___aya","o":["kh","k","q"],"a":0},
{"t":"wb","q":"Build: where is mother?","a":["uphi","umama"],"pool":["uphi","umama","ukhona"]},
{"t":"li","q":"Which one do you hear?","say":"ikhaya","o":["ikhaya","usekhaya","akekho"],"a":0}
]},
{"id":"xh_f6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ikhaya","home"],["ukhona","he is here"],["akekho","he is not here"]]},
{"t":"li","q":"Which one do you hear?","say":"Ukhona utata?","o":["Ukhona utata?","usekhaya","Uphi umama?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ukhona utata?","is father there?"],["Uphi umama?","where is mother?"],["usekhaya","she is at home"]]},
{"t":"mc","q":"ndikhona is I am here; ukhona is…","o":["he or she is here","you are here","we are here"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"akekho","o":["akekho","ikhaya","ukhona"],"a":0}
]},
{"id":"xh_f6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Ukhona utata? asks…","o":["is father there?","where is father?","how is father?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usekhaya","o":["usekhaya","ukhona","ikhaya"],"a":0},
{"t":"mc","q":"You knock; the child says Akekho. Father is…","o":["not here","at home","on his way"],"a":0},
{"t":"mc","q":"Which one means home?","o":["ikhaya","indlu","idolophu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uphi umama?","o":["Uphi umama?","Ukhona utata?","akekho"],"a":0},
{"t":"mc","q":"Review — Khayelitsha means…","o":["new home","our pride","big town"],"a":0},
{"t":"mc","q":"Review — which means “thing”?","o":["into","xela","inja"],"a":0},
{"t":"mc","q":"Review — which means “tell”?","o":["xela","hayi","umngqusho"],"a":0},
{"t":"mc","q":"Review — which means “team”?","o":["iqela","molweni","ixesha"],"a":0},
{"t":"mc","q":"Review — which means “house”?","o":["indlu","kakhulu","cula"],"a":0}
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
{"id":"xh_f7_2","title":"Recognize","step":"recognize","meta":"We, they, well and together","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"sihlala","o":["sihlala","bahlala","sonke"],"a":0},
{"t":"mc","q":"What does sonke mean?","o":["all of us","together","we live"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Unjani umama?","o":["Unjani umama?","uphilile","kunye"],"a":0},
{"t":"mc","q":"Which one means they live?","o":["bahlala","sihlala","ndihlala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kunye","o":["kunye","sonke","uphilile"],"a":0},
{"t":"mc","q":"Someone asks Unjani umama? Mom is fine, so…","o":["Uphilile, enkosi","Akekho","Ndiyaphila"],"a":0}
]},
{"id":"xh_f7_3","title":"Build","step":"build","meta":"The concord set, assembled","vocab":[],"ex":[
{"t":"fill","q":"Complete: we live in Cape Town","s":"___hlala eKapa.","o":["si","ba","ndi"],"a":0},
{"t":"wb","q":"Build: they live in Gugulethu","a":["bahlala","eGugulethu"],"pool":["bahlala","eGugulethu","sihlala"]},
{"t":"fill","q":"Complete: she is well","s":"uphili___","o":["le","la","lo"],"a":0},
{"t":"wb","q":"Build: we all live together","a":["sihlala","kunye","sonke"],"pool":["sihlala","kunye","sonke","bahlala"]},
{"t":"li","q":"Which one do you hear?","say":"bahlala","o":["bahlala","sihlala","kunye"],"a":0}
]},
{"id":"xh_f7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Unjani umama?","how is your mother?"],["uphilile","she is well"],["kunye","together"]]},
{"t":"li","q":"Which one do you hear?","say":"sonke","o":["sonke","kunye","bahlala"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["sihlala","we live"],["bahlala","they live"],["sonke","all of us"]]},
{"t":"mc","q":"The full everyday person set is…","o":["ndi-, u-, si-, ba-","um-, aba-, oo-, ama-","lo, yena, wena, nguye"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"uphilile","o":["uphilile","sonke","sihlala"],"a":0}
]},
{"id":"xh_f7_5","title":"Checkpoint","step":"checkpoint","meta":"Family & respect — show it all","vocab":[],"ex":[
{"t":"mc","q":"Unjani umama? — mom is well, so you answer…","o":["Uphilile, enkosi","Ukhona","Sonke"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"sihlala","o":["sihlala","bahlala","uphilile"],"a":0},
{"t":"mc","q":"Which one means they live?","o":["bahlala","sihlala","ndihlala"],"a":0},
{"t":"mc","q":"Review — Lo ngumama wam means…","o":["this is my mother","where is my mother?","your mother is here"],"a":0},
{"t":"mc","q":"Review — the clan name older than a surname is the…","o":["isiduko","igama","intlonipho"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"akekho","o":["akekho","ukhona","usekhaya"],"a":0},
{"t":"mc","q":"Review — the plural of ubhuti is…","o":["oobhuti","ababhuti","abahuti"],"a":0},
{"t":"mc","q":"Review — which means “sorry”?","o":["uxolo","ewe","qala"],"a":0},
{"t":"mc","q":"Review — which means “please”?","o":["nceda","iqela","kakhulu"],"a":0},
{"t":"mc","q":"Review — which means “dog”?","o":["inja","into","cima"],"a":0}
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
{"id":"xh_n1_2","title":"Recognize","step":"recognize","meta":"Numbers by ear","vocab":[],"ex":[
{"t":"li","q":"Which number do you hear?","say":"zintathu","o":["zintathu","zintlanu","zimbini"],"a":0},
{"t":"mc","q":"Which one is 2?","o":["zimbini","zine","inye"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zine","o":["zine","inye","zintlanu"],"a":0},
{"t":"mc","q":"What is zintlanu?","o":["5","4","3"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zimbini","o":["zimbini","zintathu","zine"],"a":0},
{"t":"mc","q":"Which one is 1?","o":["inye","zine","zimbini"],"a":0}
]},
{"id":"xh_n1_3","title":"Build","step":"build","meta":"Spell the numbers","vocab":[],"ex":[
{"t":"fill","q":"Complete: 2","s":"zimbi___","o":["ni","ne","na"],"a":0},
{"t":"wb","q":"Build the number: 3","a":["zintathu"],"pool":["zintathu","zintlanu","zine"]},
{"t":"fill","q":"Complete: 5","s":"zin___anu","o":["tl","hl","dl"],"a":0},
{"t":"wb","q":"Build the number: 1","a":["inye"],"pool":["inye","zine","zimbini"]},
{"t":"li","q":"Which number do you hear?","say":"zintlanu","o":["zintlanu","zintathu","inye"],"a":0}
]},
{"id":"xh_n1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the number","pairs":[["inye","1"],["zimbini","2"],["zintathu","3"]]},
{"t":"li","q":"Which number do you hear?","say":"zine","o":["zine","zimbini","zintlanu"],"a":0},
{"t":"match","q":"Match the number","pairs":[["zine","4"],["zintlanu","5"]]},
{"t":"mc","q":"Count up: inye, zimbini, … what comes next?","o":["zintathu","zine","zintlanu"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zintathu","o":["zintathu","zine","inye"],"a":0}
]},
{"id":"xh_n1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What is zimbini?","o":["2","3","4"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"inye","o":["inye","zimbini","zine"],"a":0},
{"t":"mc","q":"Which one is 5?","o":["zintlanu","zintathu","zine"],"a":0},
{"t":"mc","q":"Count up: zintathu, zine, … what comes next?","o":["zintlanu","zimbini","inye"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zintlanu","o":["zintlanu","zine","zintathu"],"a":0},
{"t":"mc","q":"Review — which one means all of us?","o":["sonke","kunye","sihlala"],"a":0},
{"t":"mc","q":"Review — which means “how is it going?”","o":["kunjani","abantwana","ilokishi"],"a":0},
{"t":"mc","q":"Review — which means “my”?","o":["lam","eGoli","eKhayelitsha"],"a":0},
{"t":"mc","q":"Review — which means “children”?","o":["abantwana","eGoli","ndikhona"],"a":0},
{"t":"mc","q":"Review — which means “where are you from?”","o":["Uvela phi?","Uyaqonda?","Igama lakho ngubani?"],"a":0}
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
{"id":"xh_n2_2","title":"Recognize","step":"recognize","meta":"The upper hand by ear","vocab":[],"ex":[
{"t":"li","q":"Which number do you hear?","say":"sibhozo","o":["sibhozo","sixhenxe","lithoba"],"a":0},
{"t":"mc","q":"Which one is 10?","o":["lishumi","lithoba","zintandathu"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"lithoba","o":["lithoba","lishumi","sibhozo"],"a":0},
{"t":"mc","q":"What is zintandathu?","o":["6","7","9"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"sixhenxe","o":["sixhenxe","zintandathu","lishumi"],"a":0},
{"t":"mc","q":"Which one is 8?","o":["sibhozo","sixhenxe","lithoba"],"a":0}
]},
{"id":"xh_n2_3","title":"Build","step":"build","meta":"Spell the upper hand","vocab":[],"ex":[
{"t":"fill","q":"Complete: 7","s":"si___enxe","o":["xh","x","qh"],"a":0},
{"t":"wb","q":"Build the number: 10","a":["lishumi"],"pool":["lishumi","lithoba","sibhozo"]},
{"t":"fill","q":"Complete: 8","s":"sibho___o","o":["z","s","dl"],"a":0},
{"t":"wb","q":"Build the number: 6","a":["zintandathu"],"pool":["zintandathu","zintathu","sixhenxe"]},
{"t":"li","q":"Which number do you hear?","say":"lithoba","o":["lithoba","zintandathu","sixhenxe"],"a":0}
]},
{"id":"xh_n2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the number","pairs":[["zintandathu","6"],["sixhenxe","7"],["sibhozo","8"]]},
{"t":"li","q":"Which number do you hear?","say":"lishumi","o":["lishumi","sibhozo","lithoba"],"a":0},
{"t":"match","q":"Match the number","pairs":[["lithoba","9"],["lishumi","10"]]},
{"t":"mc","q":"Count up: sixhenxe, sibhozo, … what comes next?","o":["lithoba","lishumi","zintandathu"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"sibhozo","o":["sibhozo","lithoba","zintandathu"],"a":0}
]},
{"id":"xh_n2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What is sibhozo?","o":["8","7","9"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"zintandathu","o":["zintandathu","sixhenxe","lishumi"],"a":0},
{"t":"mc","q":"Which one is 9?","o":["lithoba","lishumi","sibhozo"],"a":0},
{"t":"mc","q":"What is lishumi?","o":["10","9","6"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"sixhenxe","o":["sixhenxe","sibhozo","lithoba"],"a":0},
{"t":"mc","q":"Review — what is zintlanu?","o":["5","4","6"],"a":0},
{"t":"mc","q":"Review — which means “I am fine”?","o":["ndiyaphila","ndithetha","eKhayelitsha"],"a":0},
{"t":"mc","q":"Review — which means “your”?","o":["lakho","kancinci","eKapa"],"a":0},
{"t":"mc","q":"Review — which means “friend”?","o":["umhlobo","kunjani","eGugulethu"],"a":0},
{"t":"mc","q":"Review — which means “I come from”?","o":["ndivela","ndikhona","idolophu"],"a":0}
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
{"id":"xh_n3_2","title":"Recognize","step":"recognize","meta":"Which day is it?","vocab":[],"ex":[
{"t":"li","q":"Which day do you hear?","say":"uLwesibini","o":["uLwesibini","uLwesine","uLwesithathu"],"a":0},
{"t":"mc","q":"uLwesithathu is…","o":["Wednesday","Tuesday","Thursday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uLwesine","o":["uLwesine","uLwesihlanu","uMvulo"],"a":0},
{"t":"mc","q":"Which day is Friday?","o":["uLwesihlanu","uLwesine","uLwesibini"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uMvulo","o":["uMvulo","uLwesibini","uLwesihlanu"],"a":0},
{"t":"mc","q":"The number hiding inside uLwesibini is…","o":["two","three","five"],"a":0}
]},
{"id":"xh_n3_3","title":"Build","step":"build","meta":"Assemble the days","vocab":[],"ex":[
{"t":"fill","q":"Complete: Wednesday (the third day)","s":"uLwesi___athu","o":["th","t","tl"],"a":0},
{"t":"wb","q":"Build the day: Friday","a":["uLwesihlanu"],"pool":["uLwesihlanu","uLwesine","uMvulo"]},
{"t":"fill","q":"Complete: Monday","s":"uMvu___","o":["lo","la","le"],"a":0},
{"t":"wb","q":"Build the day: Tuesday","a":["uLwesibini"],"pool":["uLwesibini","uLwesithathu","uLwesihlanu"]},
{"t":"li","q":"Which day do you hear?","say":"uLwesine","o":["uLwesine","uLwesithathu","uLwesibini"],"a":0}
]},
{"id":"xh_n3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the day","pairs":[["uMvulo","Monday"],["uLwesibini","Tuesday"],["uLwesithathu","Wednesday"]]},
{"t":"li","q":"Which day do you hear?","say":"uLwesihlanu","o":["uLwesihlanu","uLwesine","uLwesithathu"],"a":0},
{"t":"match","q":"Match the day","pairs":[["uLwesine","Thursday"],["uLwesihlanu","Friday"]]},
{"t":"mc","q":"The days run uMvulo, uLwesibini, … what comes next?","o":["uLwesithathu","uLwesine","uLwesihlanu"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uLwesithathu","o":["uLwesithathu","uMvulo","uLwesine"],"a":0}
]},
{"id":"xh_n3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"uLwesihlanu is…","o":["Friday","Thursday","Monday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uLwesibini","o":["uLwesibini","uLwesihlanu","uMvulo"],"a":0},
{"t":"mc","q":"Which day carries the number three?","o":["uLwesithathu","uLwesibini","uLwesine"],"a":0},
{"t":"mc","q":"uMvulo comes from vula, to…","o":["open","close","rest"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uMvulo","o":["uMvulo","uLwesine","uLwesithathu"],"a":0},
{"t":"mc","q":"Review — what is sixhenxe?","o":["7","6","8"],"a":0},
{"t":"mc","q":"Review — which means “I am okay”?","o":["ndikhona","abantwana","wena"],"a":0},
{"t":"mc","q":"Review — which means “what is your name?”","o":["Igama lakho ngubani?","Uvela phi?","phi?"],"a":0},
{"t":"mc","q":"Review — which means “bro (young man)”?","o":["bhuti","sisi","eGugulethu"],"a":0},
{"t":"mc","q":"Review — which means “in Cape Town”?","o":["eKapa","igama","ndithetha"],"a":0}
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
{"id":"xh_n4_2","title":"Recognize","step":"recognize","meta":"Weekend words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"iveki","o":["iveki","impelaveki","iCawa"],"a":0},
{"t":"mc","q":"What does impelaveki mean?","o":["weekend","week","Sunday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uMgqibelo","o":["uMgqibelo","iCawa","namhlanje"],"a":0},
{"t":"mc","q":"Which one is Sunday?","o":["iCawa","uMgqibelo","uMvulo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"namhlanje","o":["namhlanje","iveki","uMgqibelo"],"a":0},
{"t":"mc","q":"The deep gq click hides inside…","o":["uMgqibelo","iCawa","iveki"],"a":0}
]},
{"id":"xh_n4_3","title":"Build","step":"build","meta":"Assemble the days off","vocab":[],"ex":[
{"t":"fill","q":"Complete: Saturday","s":"uM___ibelo","o":["gq","q","gc"],"a":0},
{"t":"wb","q":"Build: weekend","a":["impelaveki"],"pool":["impelaveki","iveki","namhlanje"]},
{"t":"fill","q":"Complete: Sunday","s":"i___awa","o":["C","X","Q"],"a":0},
{"t":"wb","q":"Build: today","a":["namhlanje"],"pool":["namhlanje","iveki","iCawa"]},
{"t":"li","q":"Which one do you hear?","say":"iCawa","o":["iCawa","uMgqibelo","impelaveki"],"a":0}
]},
{"id":"xh_n4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["uMgqibelo","Saturday"],["iCawa","Sunday"],["impelaveki","weekend"]]},
{"t":"li","q":"Which one do you hear?","say":"iveki","o":["iveki","namhlanje","iCawa"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["iveki","week"],["namhlanje","today"]]},
{"t":"mc","q":"Namhlanje yiCawa means today is…","o":["Sunday","Saturday","Monday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"uMgqibelo","o":["uMgqibelo","uLwesihlanu","iCawa"],"a":0}
]},
{"id":"xh_n4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does iveki mean?","o":["week","weekend","today"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"impelaveki","o":["impelaveki","iveki","uMgqibelo"],"a":0},
{"t":"mc","q":"Which one is Saturday?","o":["uMgqibelo","iCawa","uLwesihlanu"],"a":0},
{"t":"mc","q":"iCawa shares its name with…","o":["church","school","market"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"namhlanje","o":["namhlanje","impelaveki","iCawa"],"a":0},
{"t":"mc","q":"Review — uLwesine is…","o":["Thursday","Tuesday","Friday"],"a":0},
{"t":"mc","q":"Review — which means “you”?","o":["wena","bhuti","ndikhona"],"a":0},
{"t":"mc","q":"Review — which means “I am Sipho”?","o":["NdinguSipho","ilokishi","lakho"],"a":0},
{"t":"mc","q":"Review — which means “sis (young woman)”?","o":["sisi","umntwana","eMonti"],"a":0},
{"t":"mc","q":"Review — which means “in Johannesburg”?","o":["eGoli","eMonti","ndithetha"],"a":0}
]},

/* ---------- n5 · Yesterday, tomorrow, now ---------- */
{"id":"xh_n5","title":"Yesterday and tomorrow","step":"learn","meta":"Placing yourself in time","vocab":[["izolo","ee-ZAW-law","yesterday"],["ngomso","NGAWM-saw","tomorrow"],["ngoku","NGAW-koo","now"],["kusasa","koo-SAH-sah","in the morning"],["ebusuku","eh-boo-SOO-koo","at night"]],"ex":[
{"t":"note","tag":"Three days","q":"Izolo, namhlanje, ngomso","body":"<p>The time line of every conversation: <b>izolo</b> — yesterday, namhlanje — today (you know it), <b>ngomso</b> — tomorrow. Sobonana ngomso — see you tomorrow — you will hear it at every parting.</p>","eg":[["izolo","ee-ZAW-law","yesterday"],["ngomso","NGAWM-saw","tomorrow"],["Sobonana ngomso","saw-baw-NAH-nah NGAWM-saw","see you tomorrow"]]},
{"t":"li","q":"Which one do you hear?","say":"ngomso","o":["ngomso","izolo"],"a":0},
{"t":"mc","q":"What does izolo mean?","o":["yesterday","tomorrow","today"],"a":0},
{"t":"note","tag":"Right now","q":"Ngoku","body":"<p><b>Ngoku</b> is <i>now</i> — and in Cape Town speech you will hear <i>ngoku ngoku</i>, now-now, which somehow means <i>very soon but not quite now</i>. South African time has its own grammar.</p>","eg":[["ngoku","NGAW-koo","now"]]},
{"t":"li","q":"Which one do you hear?","say":"ngoku","o":["ngoku","ngomso"],"a":0},
{"t":"mc","q":"ngoku ngoku — now-now — really means…","o":["very soon","immediately","yesterday"],"a":0},
{"t":"note","tag":"Morning and night","q":"Kusasa and ebusuku","body":"<p><b>Kusasa</b> — <i>in the morning</i> (also <i>tomorrow morning</i>) — and <b>ebusuku</b> — <i>at night</i>. Sobonana kusasa: see you in the morning.</p>","eg":[["kusasa","koo-SAH-sah","in the morning"],["ebusuku","eh-boo-SOO-koo","at night"]]},
{"t":"li","q":"Which one do you hear?","say":"ebusuku","o":["ebusuku","kusasa"],"a":0},
{"t":"mc","q":"kusasa means…","o":["in the morning","at night","yesterday"],"a":0}
]},
{"id":"xh_n5_2","title":"Recognize","step":"recognize","meta":"When exactly?","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"izolo","o":["izolo","ngomso","ngoku"],"a":0},
{"t":"mc","q":"What does ngomso mean?","o":["tomorrow","yesterday","now"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kusasa","o":["kusasa","ebusuku","izolo"],"a":0},
{"t":"mc","q":"Which one means at night?","o":["ebusuku","kusasa","ngoku"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ngoku","o":["ngoku","ngomso","kusasa"],"a":0},
{"t":"mc","q":"Sobonana ngomso means see you…","o":["tomorrow","tonight","now"],"a":0}
]},
{"id":"xh_n5_3","title":"Build","step":"build","meta":"Place events in time","vocab":[],"ex":[
{"t":"fill","q":"Complete: tomorrow","s":"ngo___o","o":["ms","mz","nts"],"a":0},
{"t":"wb","q":"Build: see you tomorrow","a":["sobonana","ngomso"],"pool":["sobonana","ngomso","izolo"]},
{"t":"fill","q":"Complete: at night","s":"ebusu___","o":["ku","ko","kho"],"a":0},
{"t":"wb","q":"Build: yesterday","a":["izolo"],"pool":["izolo","ngoku","kusasa"]},
{"t":"li","q":"Which one do you hear?","say":"ngomso","o":["ngomso","ngoku","ebusuku"],"a":0}
]},
{"id":"xh_n5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["izolo","yesterday"],["ngomso","tomorrow"],["ngoku","now"]]},
{"t":"li","q":"Which one do you hear?","say":"kusasa","o":["kusasa","ngomso","ngoku"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["kusasa","in the morning"],["ebusuku","at night"]]},
{"t":"mc","q":"The natural order is izolo, namhlanje, …","o":["ngomso","ngoku","kusasa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ebusuku","o":["ebusuku","izolo","kusasa"],"a":0}
]},
{"id":"xh_n5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ngoku mean?","o":["now","tomorrow","in the morning"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izolo","o":["izolo","ebusuku","ngomso"],"a":0},
{"t":"mc","q":"Which one means in the morning?","o":["kusasa","ebusuku","izolo"],"a":0},
{"t":"mc","q":"A friend says Sobonana kusasa. You will meet…","o":["in the morning","at night","yesterday"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ngoku","o":["ngoku","kusasa","izolo"],"a":0},
{"t":"mc","q":"Review — impelaveki means…","o":["weekend","week","Sunday"],"a":0},
{"t":"mc","q":"Review — which means “you too”?","o":["nawe","umntu","eMonti"],"a":0},
{"t":"mc","q":"Review — which means “who are you?”","o":["Ungubani?","Uhlala phi?","phi?"],"a":0},
{"t":"mc","q":"Review — which means “no problem”?","o":["akunani","idolophu","ndihlala"],"a":0},
{"t":"mc","q":"Review — which means “in East London”?","o":["eMonti","kancinci","unjani"],"a":0}
]},

/* ---------- n6 · When? ---------- */
{"id":"xh_n6","title":"When?","step":"learn","meta":"Nini — and putting on a day","vocab":[["nini?","NEE-nee","when?"],["Uza nini?","OO-zah NEE-nee","when are you coming?"],["ngoMvulo","ngawm-VOO-law","on Monday"],["ngeCawa","ngeh-CAH-wah","on Sunday"],["kaninzi","kah-NEEN-zee","often"]],"ex":[
{"t":"note","tag":"The question","q":"Nini — when?","body":"<p><b>Nini?</b> is <i>when?</i> — and with iza (come) from your first lessons: <b>Uza nini?</b> — <i>when are you coming?</i> — the question every Xhosa household asks visitors.</p>","eg":[["nini?","NEE-nee","when?"],["Uza nini?","OO-zah NEE-nee","when are you coming?"]]},
{"t":"li","q":"Which one do you hear?","say":"Uza nini?","o":["Uza nini?","nini?"],"a":0},
{"t":"mc","q":"Uza nini? asks…","o":["when are you coming?","where are you going?","who is coming?"],"a":0},
{"t":"note","tag":"On a day","q":"Ngo- and nge- dress the days","body":"<p>To say ON a day, days take <b>ngo-</b> or <b>nge-</b>: <b>ngoMvulo</b> — <i>on Monday</i>, <b>ngeCawa</b> — <i>on Sunday</i>. So: Ndiza ngoMvulo — I am coming on Monday.</p>","eg":[["ngoMvulo","ngawm-VOO-law","on Monday"],["ngeCawa","ngeh-CAH-wah","on Sunday"],["Ndiza ngoMvulo","NDEE-zah ngawm-VOO-law","I am coming on Monday"]]},
{"t":"li","q":"Which one do you hear?","say":"ngoMvulo","o":["ngoMvulo","ngeCawa"],"a":0},
{"t":"mc","q":"ngeCawa means…","o":["on Sunday","on Monday","next week"],"a":0},
{"t":"note","tag":"Often","q":"Kaninzi — many times","body":"<p><b>Kaninzi</b> — <i>often, many times</i>. Ndiza kaninzi — I come often. The ka- makes a how-many-times word; ninzi is <i>many</i>.</p>","eg":[["kaninzi","kah-NEEN-zee","often"]]},
{"t":"li","q":"Which one do you hear?","say":"kaninzi","o":["kaninzi","nini?"],"a":0},
{"t":"mc","q":"kaninzi means…","o":["often","never","once"],"a":0}
]},
{"id":"xh_n6_2","title":"Recognize","step":"recognize","meta":"Questions and days by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"nini?","o":["nini?","kaninzi","Uza nini?"],"a":0},
{"t":"mc","q":"What does ngoMvulo mean?","o":["on Monday","on Sunday","every day"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ngeCawa","o":["ngeCawa","ngoMvulo","nini?"],"a":0},
{"t":"mc","q":"Which one means when?","o":["nini?","phi?","ngubani?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uza nini?","o":["Uza nini?","ngeCawa","kaninzi"],"a":0},
{"t":"mc","q":"Ndiza ngoMvulo means…","o":["I am coming on Monday","I came yesterday","come on Monday"],"a":0}
]},
{"id":"xh_n6_3","title":"Build","step":"build","meta":"Ask and answer about time","vocab":[],"ex":[
{"t":"fill","q":"Complete: when are you coming?","s":"Uza ni___?","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: I am coming on Monday","a":["ndiza","ngoMvulo"],"pool":["ndiza","ngoMvulo","ngeCawa"]},
{"t":"fill","q":"Complete: on Sunday","s":"nge___awa","o":["C","X","Q"],"a":0},
{"t":"wb","q":"Build: when? often!","a":["nini","kaninzi"],"pool":["nini","kaninzi","ngomso"]},
{"t":"li","q":"Which one do you hear?","say":"ngeCawa","o":["ngeCawa","Uza nini?","ngoMvulo"],"a":0}
]},
{"id":"xh_n6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["nini?","when?"],["Uza nini?","when are you coming?"],["kaninzi","often"]]},
{"t":"li","q":"Which one do you hear?","say":"ngoMvulo","o":["ngoMvulo","ngeCawa","nini?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ngoMvulo","on Monday"],["ngeCawa","on Sunday"]]},
{"t":"mc","q":"Uza nini? — Ndiza … (tomorrow). Complete the answer.","o":["ngomso","izolo","ngoku"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kaninzi","o":["kaninzi","ngeCawa","Uza nini?"],"a":0}
]},
{"id":"xh_n6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Nini? asks…","o":["when?","where?","who?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ngoMvulo","o":["ngoMvulo","kaninzi","ngeCawa"],"a":0},
{"t":"mc","q":"Which one means often?","o":["kaninzi","nini?","ngoku"],"a":0},
{"t":"mc","q":"A friend asks Uza nini? You will come on Sunday, so…","o":["Ndiza ngeCawa","Ndiza izolo","Uza ngoMvulo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uza nini?","o":["Uza nini?","nini?","ngoMvulo"],"a":0},
{"t":"mc","q":"Review — what does ngomso mean?","o":["tomorrow","yesterday","today"],"a":0},
{"t":"mc","q":"Review — which means “name”?","o":["igama","ndivela","NdinguSipho"],"a":0},
{"t":"mc","q":"Review — which means “man”?","o":["indoda","ndihlala","eKhayelitsha"],"a":0},
{"t":"mc","q":"Review — which means “excuse me, bro”?","o":["Uxolo bhuti","Enkosi sisi","Ndifunda isiXhosa"],"a":0},
{"t":"mc","q":"Review — which means “where do you live?”","o":["Uhlala phi?","Igama lakho ngubani?","Uthetha isiXhosa?"],"a":0}
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
{"id":"xh_n7_2","title":"Recognize","step":"recognize","meta":"Day, month, year by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"usuku","o":["usuku","unyaka","inyanga"],"a":0},
{"t":"mc","q":"Which one means month?","o":["inyanga","unyaka","iveki"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"unyaka","o":["unyaka","usuku","yonke imihla"],"a":0},
{"t":"mc","q":"From short to long: usuku, iveki, inyanga, …","o":["unyaka","izolo","impelaveki"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"yonke imihla","o":["yonke imihla","inyanga","usuku"],"a":0},
{"t":"mc","q":"Ndifunda isiXhosa yonke imihla means…","o":["I learn Xhosa every day","I speak Xhosa a little","I learned Xhosa last year"],"a":0}
]},
{"id":"xh_n7_3","title":"Build","step":"build","meta":"Assemble your habit","vocab":[],"ex":[
{"t":"fill","q":"Complete: month","s":"inya___a","o":["ng","ny","nk"],"a":0},
{"t":"wb","q":"Build: every day","a":["yonke","imihla"],"pool":["yonke","imihla","usuku"]},
{"t":"fill","q":"Complete: year","s":"unya___","o":["ka","ko","kha"],"a":0},
{"t":"wb","q":"Build: I learn Xhosa every day","a":["ndifunda","isiXhosa","yonke","imihla"],"pool":["ndifunda","isiXhosa","yonke","imihla","kancinci"]},
{"t":"li","q":"Which one do you hear?","say":"inyanga","o":["inyanga","yonke imihla","unyaka"],"a":0}
]},
{"id":"xh_n7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["usuku","day"],["inyanga","month"],["unyaka","year"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndifunda isiXhosa yonke imihla","o":["Ndifunda isiXhosa yonke imihla","yonke imihla","Ndifunda isiXhosa"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["yonke imihla","every day"],["Ndifunda isiXhosa yonke imihla","I learn Xhosa every day"]]},
{"t":"mc","q":"Months follow the moon — which word carries both meanings?","o":["inyanga","unyaka","usuku"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"usuku","o":["usuku","inyanga","unyaka"],"a":0}
]},
{"id":"xh_n7_5","title":"Checkpoint","step":"checkpoint","meta":"Numbers, days & time — show it all","vocab":[],"ex":[
{"t":"mc","q":"What does usuku mean?","o":["day","week","month"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"unyaka","o":["unyaka","inyanga","usuku"],"a":0},
{"t":"mc","q":"Review — count up: zintlanu, zintandathu, … what comes next?","o":["sixhenxe","sibhozo","lithoba"],"a":0},
{"t":"mc","q":"Review — uLwesibini carries the number two — it is…","o":["Tuesday","Wednesday","Monday"],"a":0},
{"t":"li","q":"Review — which day do you hear?","say":"iCawa","o":["iCawa","uMgqibelo","uMvulo"],"a":0},
{"t":"mc","q":"Review — Sobonana ngomso means see you…","o":["tomorrow","in the morning","on Sunday"],"a":0},
{"t":"mc","q":"The sentence that gets you fluent…","o":["Ndifunda isiXhosa yonke imihla","Andiqondi","Hamba kakuhle"],"a":0},
{"t":"mc","q":"Review — which means “child”?","o":["umntwana","igama","wena"],"a":0},
{"t":"mc","q":"Review — which means “thank you, sis”?","o":["Enkosi sisi","Ndifunda isiXhosa","Uxolo bhuti"],"a":0},
{"t":"mc","q":"Review — which means “I live”?","o":["ndihlala","kancinci","sisi"],"a":0}
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
{"id":"xh_d1_2","title":"Recognize","step":"recognize","meta":"Feelings and requests by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndilambile","o":["ndilambile","ndinxaniwe","ndifuna"],"a":0},
{"t":"mc","q":"What does ndinxaniwe mean?","o":["I am thirsty","I am hungry","I want"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndifuna","o":["ndifuna","amanzi","ndilambile"],"a":0},
{"t":"mc","q":"Ndicela amanzi means…","o":["may I have water","I am drinking water","the water is cold"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndicela amanzi","o":["Ndicela amanzi","amanzi","ndinxaniwe"],"a":0},
{"t":"mc","q":"Which one means I want?","o":["ndifuna","ndicela","ndilambile"],"a":0}
]},
{"id":"xh_d1_3","title":"Build","step":"build","meta":"Ask politely","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am hungry","s":"Ndilambi___","o":["le","la","lo"],"a":0},
{"t":"wb","q":"Build: may I have water","a":["ndicela","amanzi"],"pool":["ndicela","amanzi","ndifuna"]},
{"t":"fill","q":"Complete: I am thirsty","s":"Ndin___aniwe","o":["x","c","q"],"a":0},
{"t":"wb","q":"Build: I want water","a":["ndifuna","amanzi"],"pool":["ndifuna","amanzi","ndicela"]},
{"t":"li","q":"Which one do you hear?","say":"ndinxaniwe","o":["ndinxaniwe","ndilambile","Ndicela amanzi"],"a":0}
]},
{"id":"xh_d1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndilambile","I am hungry"],["ndinxaniwe","I am thirsty"],["amanzi","water"]]},
{"t":"li","q":"Which one do you hear?","say":"ndifuna","o":["ndifuna","ndilambile","amanzi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndifuna","I want"],["Ndicela amanzi","may I have water"]]},
{"t":"mc","q":"At a stranger you would rather use…","o":["Ndicela","Ndifuna","Iza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndilambile","o":["ndilambile","ndinxaniwe","ndifuna"],"a":0}
]},
{"id":"xh_d1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndinxaniwe mean?","o":["I am thirsty","I am hungry","I am full"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amanzi","o":["amanzi","ndifuna","ndilambile"],"a":0},
{"t":"mc","q":"The polite request for water is…","o":["Ndicela amanzi","Ndifuna amanzi","Amanzi ngoku"],"a":0},
{"t":"mc","q":"Which one means I want?","o":["ndifuna","ndilambile","ndicela"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndinxaniwe","o":["ndinxaniwe","amanzi","Ndicela amanzi"],"a":0},
{"t":"mc","q":"Review — what does ukutya mean?","o":["food","water","meat"],"a":0},
{"t":"mc","q":"Review — which means “mother”?","o":["umama","ubhuti","abazali"],"a":0},
{"t":"mc","q":"Review — which means “brother”?","o":["ubhuti","utatomkhulu","umakhulu"],"a":0},
{"t":"mc","q":"Review — which means “my mother”?","o":["umama wam","Enkosi mama","Molo mama"],"a":0},
{"t":"mc","q":"Review — which means “this is my mother”?","o":["Lo ngumama wam","ubhuti wakho","Uxolo tata"],"a":0}
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
{"id":"xh_d2_2","title":"Recognize","step":"recognize","meta":"Kitchen words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"irayisi","o":["irayisi","isonka","amasi"],"a":0},
{"t":"mc","q":"What does ikofu mean?","o":["coffee","tea","bread"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iti","o":["iti","ikofu","irayisi"],"a":0},
{"t":"mc","q":"Which one means rice?","o":["irayisi","isonka","amasi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amasi","o":["amasi","iti","isonka"],"a":0},
{"t":"mc","q":"Poured over umphokoqo on a hot day…","o":["amasi","ikofu","amanzi"],"a":0}
]},
{"id":"xh_d2_3","title":"Build","step":"build","meta":"Spell the kitchen","vocab":[],"ex":[
{"t":"fill","q":"Complete: bread","s":"ison___a","o":["k","kh","q"],"a":0},
{"t":"wb","q":"Build: may I have tea","a":["ndicela","iti"],"pool":["ndicela","iti","ikofu"]},
{"t":"fill","q":"Complete: coffee","s":"iko___u","o":["f","v","ph"],"a":0},
{"t":"wb","q":"Build: may I have bread","a":["ndicela","isonka"],"pool":["ndicela","isonka","irayisi"]},
{"t":"li","q":"Which one do you hear?","say":"isonka","o":["isonka","amasi","ikofu"],"a":0}
]},
{"id":"xh_d2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["isonka","bread"],["amasi","sour milk"],["iti","tea"]]},
{"t":"li","q":"Which one do you hear?","say":"ikofu","o":["ikofu","iti","irayisi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ikofu","coffee"],["irayisi","rice"]]},
{"t":"mc","q":"You sit down to visit. Before the second sentence appears…","o":["iti","irayisi","amasi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"irayisi","o":["irayisi","amasi","isonka"],"a":0}
]},
{"id":"xh_d2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does amasi mean?","o":["sour milk","coffee","porridge"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iti","o":["iti","ikofu","amasi"],"a":0},
{"t":"mc","q":"Which one means bread?","o":["isonka","irayisi","ikofu"],"a":0},
{"t":"mc","q":"Ndicela ikofu means…","o":["may I have coffee","I am drinking coffee","the coffee is hot"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ikofu","o":["ikofu","isonka","irayisi"],"a":0},
{"t":"mc","q":"Review — which one means I am hungry?","o":["ndilambile","ndinxaniwe","ndifuna"],"a":0},
{"t":"mc","q":"Review — which means “father”?","o":["utata","oobhuti","abazali"],"a":0},
{"t":"mc","q":"Review — which means “sister”?","o":["usisi","amaXhosa","utatomkhulu"],"a":0},
{"t":"mc","q":"Review — which means “your father”?","o":["utata wakho","Lo ngumama wam","umama wam"],"a":0},
{"t":"mc","q":"Review — which means “this is my father”?","o":["Lo ngutata wam","ubhuti wakho","Enkosi mama"],"a":0}
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
{"id":"xh_d3_2","title":"Recognize","step":"recognize","meta":"Eat, drink, what","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"nditya","o":["nditya","ndisela","ntoni?"],"a":0},
{"t":"mc","q":"What does ndisela mean?","o":["I drink","I eat","I ask for"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ntoni?","o":["ntoni?","nditya","Utya ntoni?"],"a":0},
{"t":"mc","q":"Ndisela iti means…","o":["I am drinking tea","may I have tea","I like tea"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndisela iti","o":["Ndisela iti","Utya ntoni?","ndisela"],"a":0},
{"t":"mc","q":"One click apart: cela and sela. Cela means…","o":["ask for","drink","eat"],"a":0}
]},
{"id":"xh_d3_3","title":"Build","step":"build","meta":"Say what you eat and drink","vocab":[],"ex":[
{"t":"fill","q":"Complete: I eat","s":"Ndi___a","o":["ty","tsh","t"],"a":0},
{"t":"wb","q":"Build: I am drinking coffee","a":["ndisela","ikofu"],"pool":["ndisela","ikofu","nditya"]},
{"t":"fill","q":"Complete: what are you eating?","s":"Utya nto___?","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: I eat bread","a":["nditya","isonka"],"pool":["nditya","isonka","ndisela"]},
{"t":"li","q":"Which one do you hear?","say":"Utya ntoni?","o":["Utya ntoni?","Ndisela iti","ntoni?"],"a":0}
]},
{"id":"xh_d3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["nditya","I eat"],["ndisela","I drink"],["ntoni?","what?"]]},
{"t":"li","q":"Which one do you hear?","say":"ndisela","o":["ndisela","nditya","ntoni?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Utya ntoni?","what are you eating?"],["Ndisela iti","I am drinking tea"]]},
{"t":"mc","q":"Your question words: phi, nini, ngubani, …","o":["ntoni","yena","lam"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nditya","o":["nditya","Ndisela iti","Utya ntoni?"],"a":0}
]},
{"id":"xh_d3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ntoni mean?","o":["what?","who?","when?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndisela","o":["ndisela","nditya","ndifuna"],"a":0},
{"t":"mc","q":"Someone asks Utya ntoni? You are eating bread…","o":["Nditya isonka","Ndisela isonka","Ndicela iti"],"a":0},
{"t":"mc","q":"Which pair is one click apart?","o":["cela and sela","tya and sela","funa and cela"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"nditya","o":["nditya","ntoni?","ndisela"],"a":0},
{"t":"mc","q":"Review — which one means sour milk?","o":["amasi","amanzi","iti"],"a":0},
{"t":"mc","q":"Review — which means “grandmother”?","o":["umakhulu","umzala","umama"],"a":0},
{"t":"mc","q":"Review — which means “brothers”?","o":["oobhuti","kunye","nguye"],"a":0},
{"t":"mc","q":"Review — which means “my sister”?","o":["usisi wam","utata wakho","Uxolo tata"],"a":0},
{"t":"mc","q":"Review — which means “it is him”?","o":["nguye","oobhuti","bahlala"],"a":0}
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
{"id":"xh_d4_2","title":"Recognize","step":"recognize","meta":"Meat words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"inkukhu","o":["inkukhu","intlanzi","amaqanda"],"a":0},
{"t":"mc","q":"What does intlanzi mean?","o":["fish","chicken","meat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Nditya inyama","o":["Nditya inyama","ishisanyama","inkukhu"],"a":0},
{"t":"mc","q":"Which one means eggs?","o":["amaqanda","inkukhu","intlanzi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ishisanyama","o":["ishisanyama","intlanzi","Nditya inyama"],"a":0},
{"t":"mc","q":"Ishisanyama literally means…","o":["burn the meat","cold meat","meat house"],"a":0}
]},
{"id":"xh_d4_3","title":"Build","step":"build","meta":"Order at the fire","vocab":[],"ex":[
{"t":"fill","q":"Complete: chicken","s":"inku___u","o":["kh","k","q"],"a":0},
{"t":"wb","q":"Build: may I have meat","a":["ndicela","inyama"],"pool":["ndicela","inyama","intlanzi"]},
{"t":"fill","q":"Complete: fish","s":"in___anzi","o":["tl","hl","dl"],"a":0},
{"t":"wb","q":"Build: I am eating chicken","a":["nditya","inkukhu"],"pool":["nditya","inkukhu","amaqanda"]},
{"t":"li","q":"Which one do you hear?","say":"amaqanda","o":["amaqanda","inkukhu","ishisanyama"],"a":0}
]},
{"id":"xh_d4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ishisanyama","braai place"],["inkukhu","chicken"],["intlanzi","fish"]]},
{"t":"li","q":"Which one do you hear?","say":"intlanzi","o":["intlanzi","amaqanda","inkukhu"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["amaqanda","eggs"],["Nditya inyama","I am eating meat"]]},
{"t":"mc","q":"iqanda is to amaqanda as umXhosa is to…","o":["amaXhosa","isiXhosa","ooXhosa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"inkukhu","o":["inkukhu","intlanzi","ishisanyama"],"a":0}
]},
{"id":"xh_d4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ishisanyama mean?","o":["braai place","kitchen","fire"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Nditya inyama","o":["Nditya inyama","inkukhu","intlanzi"],"a":0},
{"t":"mc","q":"Which one means fish?","o":["intlanzi","inkukhu","inyama"],"a":0},
{"t":"mc","q":"Many eggs are…","o":["amaqanda","iqanda","amaqhude"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ishisanyama","o":["ishisanyama","amaqanda","Nditya inyama"],"a":0},
{"t":"mc","q":"Review — Utya ntoni? asks…","o":["what are you eating?","what do you want?","are you hungry?"],"a":0},
{"t":"mc","q":"Review — which means “grandfather”?","o":["utatomkhulu","kunye","umXhosa"],"a":0},
{"t":"mc","q":"Review — which means “sisters”?","o":["oosisi","utatomkhulu","usekhaya"],"a":0},
{"t":"mc","q":"Review — which means “your brother”?","o":["ubhuti wakho","usisi wam","Lo ngumama wam"],"a":0},
{"t":"mc","q":"Review — which means “respect”?","o":["intlonipho","bahlala","usisi"],"a":0}
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
{"id":"xh_d5_2","title":"Recognize","step":"recognize","meta":"Veg by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"iitapile","o":["iitapile","itumato","itswele"],"a":0},
{"t":"mc","q":"What does itswele mean?","o":["onion","tomato","maize"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"itumato","o":["itumato","iitapile","isiqhamo"],"a":0},
{"t":"mc","q":"Which one means potatoes?","o":["iitapile","itumato","umbona"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isiqhamo","o":["isiqhamo","itswele","umbona"],"a":0},
{"t":"mc","q":"Umngqusho and umphokoqo are both made from…","o":["umbona","iitapile","irayisi"],"a":0}
]},
{"id":"xh_d5_3","title":"Build","step":"build","meta":"Fill the pot","vocab":[],"ex":[
{"t":"fill","q":"Complete: maize","s":"umbo___","o":["na","no","ne"],"a":0},
{"t":"wb","q":"Build: may I have fruit","a":["ndicela","isiqhamo"],"pool":["ndicela","isiqhamo","itswele"]},
{"t":"fill","q":"Complete: fruit","s":"isi___amo","o":["qh","q","xh"],"a":0},
{"t":"wb","q":"Build: I am eating potatoes","a":["nditya","iitapile"],"pool":["nditya","iitapile","itumato"]},
{"t":"li","q":"Which one do you hear?","say":"itswele","o":["itswele","isiqhamo","iitapile"],"a":0}
]},
{"id":"xh_d5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umbona","maize"],["iitapile","potatoes"],["itumato","tomato"]]},
{"t":"li","q":"Which one do you hear?","say":"umbona","o":["umbona","itumato","itswele"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["itswele","onion"],["isiqhamo","fruit"]]},
{"t":"mc","q":"isiqhamo, isiXhosa, isiduko share the class prefix…","o":["isi-","i-","um-"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iitapile","o":["iitapile","itswele","umbona"],"a":0}
]},
{"id":"xh_d5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does iitapile mean?","o":["potatoes","tomatoes","onions"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"itumato","o":["itumato","itswele","iitapile"],"a":0},
{"t":"mc","q":"Which one means onion?","o":["itswele","itumato","isiqhamo"],"a":0},
{"t":"mc","q":"The maize behind umngqusho is…","o":["umbona","irayisi","isonka"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isiqhamo","o":["isiqhamo","umbona","itumato"],"a":0},
{"t":"mc","q":"Review — which one means chicken?","o":["inkukhu","intlanzi","inyama"],"a":0},
{"t":"mc","q":"Review — which means “hello sir”?","o":["Molo tata","Lo ngumama wam","umama wam"],"a":0},
{"t":"mc","q":"Review — which means “cousin”?","o":["umzala","isiduko","yena"],"a":0},
{"t":"mc","q":"Review — which means “this person”?","o":["lo","akekho","umakhulu"],"a":0},
{"t":"mc","q":"Review — which means “clan name”?","o":["isiduko","yena","intsapho"],"a":0}
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
{"id":"xh_d6_2","title":"Recognize","step":"recognize","meta":"Yes-feelings and no-feelings","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Uthanda ntoni?","o":["Uthanda ntoni?","ndithanda","andithandi"],"a":0},
{"t":"mc","q":"What does andithandi mean?","o":["I do not like","I like a lot","I do not eat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndithanda","o":["ndithanda","andithandi","Ndithanda iti kakhulu"],"a":0},
{"t":"mc","q":"Uthanda ntoni? asks…","o":["what do you like?","what are you eating?","do you like tea?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"andithandi","o":["andithandi","ndithanda","Uthanda ntoni?"],"a":0},
{"t":"mc","q":"Ndithanda iti kakhulu means…","o":["I like tea very much","I drink tea daily","tea is delicious"],"a":0}
]},
{"id":"xh_d6_3","title":"Build","step":"build","meta":"Say what you love","vocab":[],"ex":[
{"t":"fill","q":"Complete: I do not like","s":"___ndithandi","o":["a","e","u"],"a":0},
{"t":"wb","q":"Build: I like tea very much","a":["ndithanda","iti","kakhulu"],"pool":["ndithanda","iti","kakhulu","andithandi"]},
{"t":"fill","q":"Complete: what do you like?","s":"Uthanda nto___?","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: I like amasi","a":["ndithanda","amasi"],"pool":["ndithanda","amasi","andithandi"]},
{"t":"li","q":"Which one do you hear?","say":"Ndithanda iti kakhulu","o":["Ndithanda iti kakhulu","andithandi","ndithanda"],"a":0}
]},
{"id":"xh_d6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndithanda","I like"],["andithandi","I do not like"]]},
{"t":"li","q":"Which one do you hear?","say":"andithandi","o":["andithandi","ndithanda","Uthanda ntoni?"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uthanda ntoni?","what do you like?"],["Ndithanda iti kakhulu","I like tea very much"]]},
{"t":"mc","q":"By the same wrap, I do not eat would be…","o":["anditvi","anditye","andityi"],"a":2},
{"t":"li","q":"Which one do you hear?","say":"ndithanda","o":["ndithanda","Ndithanda iti kakhulu","andithandi"],"a":0}
]},
{"id":"xh_d6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndithanda mean?","o":["I like","I do not like","I am hungry"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uthanda ntoni?","o":["Uthanda ntoni?","Ndithanda iti kakhulu","andithandi"],"a":0},
{"t":"mc","q":"Which one means I do not like?","o":["andithandi","ndithanda","andiqondi"],"a":0},
{"t":"mc","q":"Someone offers amasi and you love it…","o":["Ndithanda amasi kakhulu","Andithandi amasi","Uthanda ntoni?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"andithandi","o":["andithandi","ndithanda","ntoni?"],"a":0},
{"t":"mc","q":"Review — which one means fruit?","o":["isiqhamo","itswele","umbona"],"a":0},
{"t":"mc","q":"Review — which means “hello madam”?","o":["Molo mama","Uxolo tata","Lo ngutata wam"],"a":0},
{"t":"mc","q":"Review — which means “family”?","o":["intsapho","oobhuti","ubhuti"],"a":0},
{"t":"mc","q":"Review — which means “who is this?”","o":["Ngubani lo?","Uphi umama?","Ukhona utata?"],"a":0},
{"t":"mc","q":"Review — which means “a Xhosa person”?","o":["umXhosa","abazali","umama"],"a":0}
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
{"id":"xh_d7_2","title":"Recognize","step":"recognize","meta":"Compliments and offers","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"mnandi","o":["mnandi","Kumnandi!","hayi enkosi"],"a":0},
{"t":"mc","q":"What does Ufuna ntoni? ask?","o":["what do you want?","what do you like?","what are you eating?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hayi enkosi","o":["hayi enkosi","Ufuna ntoni?","mnandi"],"a":0},
{"t":"mc","q":"Ndifuna ukutya means…","o":["I want food","I like food","the food is nice"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Kumnandi!","o":["Kumnandi!","Ndifuna ukutya","mnandi"],"a":0},
{"t":"mc","q":"mnandi means…","o":["delicious","hungry","full"],"a":0}
]},
{"id":"xh_d7_3","title":"Build","step":"build","meta":"Honour the cook","vocab":[],"ex":[
{"t":"fill","q":"Complete: it is delicious!","s":"Kumnan___!","o":["di","de","da"],"a":0},
{"t":"wb","q":"Build: no thank you","a":["hayi","enkosi"],"pool":["hayi","enkosi","mnandi"]},
{"t":"fill","q":"Complete: what do you want?","s":"U___na ntoni?","o":["fu","fa","fo"],"a":0},
{"t":"wb","q":"Build: I want food","a":["ndifuna","ukutya"],"pool":["ndifuna","ukutya","mnandi"]},
{"t":"li","q":"Which one do you hear?","say":"mnandi","o":["mnandi","hayi enkosi","Kumnandi!"],"a":0}
]},
{"id":"xh_d7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["mnandi","delicious"],["Kumnandi!","it is delicious!"],["hayi enkosi","no thank you"]]},
{"t":"li","q":"Which one do you hear?","say":"Ufuna ntoni?","o":["Ufuna ntoni?","Ndifuna ukutya","Kumnandi!"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ufuna ntoni?","what do you want?"],["Ndifuna ukutya","I want food"]]},
{"t":"mc","q":"The kindest way to stop a generous host…","o":["Hayi enkosi, kumnandi kakhulu","Hayi hayi hayi","Andithandi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"hayi enkosi","o":["hayi enkosi","mnandi","Ufuna ntoni?"],"a":0}
]},
{"id":"xh_d7_5","title":"Checkpoint","step":"checkpoint","meta":"Food & drink — show it all","vocab":[],"ex":[
{"t":"mc","q":"Kumnandi! tells the cook…","o":["it is delicious","you are slow","I am full"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndifuna ukutya","o":["Ndifuna ukutya","Ufuna ntoni?","hayi enkosi"],"a":0},
{"t":"mc","q":"Review — the polite request formula begins…","o":["Ndicela","Ndifuna","Nditya"],"a":0},
{"t":"mc","q":"Review — which one means I do not like?","o":["andithandi","ndithanda","andiqondi"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"amasi","o":["amasi","amanzi","iti"],"a":0},
{"t":"mc","q":"Review — an ishisanyama serves…","o":["meat from the fire","fruit and veg","tea and bread"],"a":0},
{"t":"mc","q":"Review — the plural of iqanda is…","o":["amaqanda","iziqanda","ooqanda"],"a":0},
{"t":"mc","q":"Review — which means “parents”?","o":["abazali","ikhaya","utata"],"a":0},
{"t":"mc","q":"Review — which means “he or she”?","o":["yena","ubhuti","ukhona"],"a":0},
{"t":"mc","q":"Review — which means “excuse me, sir”?","o":["Uxolo tata","ubhuti wakho","Lo ngutata wam"],"a":0}
]},

/* ---------- h1 · Rooms of the house ---------- */
{"id":"xh_h1","title":"Rooms of the house","step":"learn","meta":"Indlu inside — rooms and the yard","vocab":[["igumbi","ee-GOOM-bee","room"],["ikhitshi","ee-KHEE-tshee","kitchen"],["igumbi lokulala","ee-GOOM-bee law-koo-LAH-lah","bedroom"],["ifestile","ee-feh-STEE-leh","window"],["iyadi","ee-YAH-dee","yard"]],"ex":[
{"t":"note","tag":"Inside indlu","q":"Igumbi — the room","body":"<p>You know indlu, the house. Inside it: <b>igumbi</b> — <i>a room</i> — and the heart of every home, <b>ikhitshi</b> — <i>the kitchen</i>, where the pot lives and the talking happens.</p>","eg":[["igumbi","ee-GOOM-bee","room"],["ikhitshi","ee-KHEE-tshee","kitchen"]]},
{"t":"li","q":"Which one do you hear?","say":"ikhitshi","o":["ikhitshi","igumbi"],"a":0},
{"t":"mc","q":"What does igumbi mean?","o":["room","kitchen","house"],"a":0},
{"t":"note","tag":"Sleep and light","q":"The bedroom and the window","body":"<p><b>Igumbi lokulala</b> — literally <i>the room of sleeping</i> — is the bedroom. <b>Ifestile</b> — <i>window</i> — is an old Afrikaans borrowing (venster) gone fully Xhosa.</p>","eg":[["igumbi lokulala","ee-GOOM-bee law-koo-LAH-lah","bedroom"],["ifestile","ee-feh-STEE-leh","window"]]},
{"t":"li","q":"Which one do you hear?","say":"igumbi lokulala","o":["igumbi lokulala","igumbi"],"a":0},
{"t":"mc","q":"igumbi lokulala — the room of sleeping — is the…","o":["bedroom","kitchen","bathroom"],"a":0},
{"t":"note","tag":"Outside","q":"Iyadi — where life happens","body":"<p><b>Iyadi</b> — <i>the yard</i>. In the townships and the Eastern Cape alike, the yard is a living room under the sky: washing lines, children, neighbours leaning on the fence.</p>","eg":[["iyadi","ee-YAH-dee","yard"]]},
{"t":"li","q":"Which one do you hear?","say":"iyadi","o":["iyadi","ifestile"],"a":0},
{"t":"mc","q":"Which one means window?","o":["ifestile","iyadi","igumbi"],"a":0}
]},
{"id":"xh_h1_2","title":"Recognize","step":"recognize","meta":"Around the house by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"igumbi","o":["igumbi","ikhitshi","iyadi"],"a":0},
{"t":"mc","q":"What does ikhitshi mean?","o":["kitchen","bedroom","yard"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ifestile","o":["ifestile","iyadi","igumbi lokulala"],"a":0},
{"t":"mc","q":"Which one means yard?","o":["iyadi","igumbi","ifestile"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"igumbi lokulala","o":["igumbi lokulala","ikhitshi","igumbi"],"a":0},
{"t":"mc","q":"Where the pot lives and the talking happens…","o":["ikhitshi","igumbi lokulala","iyadi"],"a":0}
]},
{"id":"xh_h1_3","title":"Build","step":"build","meta":"Room by room","vocab":[],"ex":[
{"t":"fill","q":"Complete: kitchen","s":"ikhi___i","o":["tsh","ts","sh"],"a":0},
{"t":"wb","q":"Build: the room of sleeping","a":["igumbi","lokulala"],"pool":["igumbi","lokulala","ikhitshi"]},
{"t":"fill","q":"Complete: window","s":"ifesti___","o":["le","la","li"],"a":0},
{"t":"wb","q":"Build the word: yard","a":["iyadi"],"pool":["iyadi","igumbi","ifestile"]},
{"t":"li","q":"Which one do you hear?","say":"ikhitshi","o":["ikhitshi","ifestile","iyadi"],"a":0}
]},
{"id":"xh_h1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["igumbi","room"],["ikhitshi","kitchen"],["iyadi","yard"]]},
{"t":"li","q":"Which one do you hear?","say":"iyadi","o":["iyadi","igumbi","ikhitshi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["igumbi lokulala","bedroom"],["ifestile","window"]]},
{"t":"mc","q":"indlu is the house; igumbi is…","o":["a room inside it","the roof","the door"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ifestile","o":["ifestile","igumbi lokulala","iyadi"],"a":0}
]},
{"id":"xh_h1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does iyadi mean?","o":["yard","room","window"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"igumbi","o":["igumbi","ikhitshi","ifestile"],"a":0},
{"t":"mc","q":"Which one is the bedroom?","o":["igumbi lokulala","ikhitshi","iyadi"],"a":0},
{"t":"mc","q":"ifestile came long ago from…","o":["Afrikaans","English","Zulu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iyadi","o":["iyadi","ifestile","igumbi lokulala"],"a":0},
{"t":"mc","q":"Review — which one means door?","o":["ucango","ifestile","igumbi"],"a":0},
{"t":"mc","q":"Review — which means “1”?","o":["inye","zimbini","zintathu"],"a":0},
{"t":"mc","q":"Review — which means “7”?","o":["sixhenxe","inye","zimbini"],"a":0},
{"t":"mc","q":"Review — which means “Thursday”?","o":["uLwesine","uMvulo","uLwesibini"],"a":0},
{"t":"mc","q":"Review — which means “in the morning”?","o":["kusasa","ngomso","ngoMvulo"],"a":0}
]},

/* ---------- h2 · Things at home ---------- */
{"id":"xh_h2","title":"Things at home","step":"learn","meta":"Chair, table, bed — and umbane","vocab":[["isitulo","ee-see-TOO-law","chair"],["itafile","ee-tah-FEE-leh","table"],["ibhedi","ee-BHEH-dee","bed"],["isitya","ee-SEE-tyah","dish"],["umbane","oom-BAH-neh","electricity"]],"ex":[
{"t":"note","tag":"Sit and eat","q":"Isitulo, itafile, isitya","body":"<p><b>Isitulo</b> — <i>chair</i> (from hlala thinking: the sitting thing). <b>Itafile</b> — <i>table</i>. <b>Isitya</b> — <i>a dish</i>, the thing you eat from — hear ukutya inside it.</p>","eg":[["isitulo","ee-see-TOO-law","chair"],["itafile","ee-tah-FEE-leh","table"],["isitya","ee-SEE-tyah","dish"]]},
{"t":"li","q":"Which one do you hear?","say":"isitulo","o":["isitulo","isitya","itafile"],"a":0},
{"t":"mc","q":"What does isitya mean?","o":["dish","chair","food"],"a":0},
{"t":"note","tag":"Sleep","q":"Ibhedi","body":"<p><b>Ibhedi</b> — <i>bed</i> — with the breathy bh you know from bhuti. What lives in igumbi lokulala.</p>","eg":[["ibhedi","ee-BHEH-dee","bed"]]},
{"t":"li","q":"Which one do you hear?","say":"ibhedi","o":["ibhedi","itafile"],"a":0},
{"t":"mc","q":"ibhedi belongs in…","o":["igumbi lokulala","ikhitshi","iyadi"],"a":0},
{"t":"note","tag":"The lights","q":"Umbane — electricity","body":"<p><b>Umbane</b> — <i>electricity</i>, originally <i>lightning</i>. In South Africa this word carries feeling: when umbane goes during load-shedding, the whole street sighs together.</p>","eg":[["umbane","oom-BAH-neh","electricity"]]},
{"t":"li","q":"Which one do you hear?","say":"umbane","o":["umbane","ibhedi"],"a":0},
{"t":"mc","q":"umbane means electricity and originally…","o":["lightning","fire","the sun"],"a":0}
]},
{"id":"xh_h2_2","title":"Recognize","step":"recognize","meta":"Furniture by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"itafile","o":["itafile","isitulo","ibhedi"],"a":0},
{"t":"mc","q":"What does isitulo mean?","o":["chair","table","bed"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isitya","o":["isitya","isitulo","umbane"],"a":0},
{"t":"mc","q":"Which one means electricity?","o":["umbane","ibhedi","ifestile"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ibhedi","o":["ibhedi","umbane","itafile"],"a":0},
{"t":"mc","q":"The word hiding inside isitya is…","o":["ukutya","ukusela","ukulala"],"a":0}
]},
{"id":"xh_h2_3","title":"Build","step":"build","meta":"Furnish the house","vocab":[],"ex":[
{"t":"fill","q":"Complete: chair","s":"isitu___","o":["lo","la","le"],"a":0},
{"t":"wb","q":"Build the word: table","a":["itafile"],"pool":["itafile","isitulo","ibhedi"]},
{"t":"fill","q":"Complete: electricity","s":"umba___","o":["ne","na","no"],"a":0},
{"t":"wb","q":"Build the word: dish","a":["isitya"],"pool":["isitya","itafile","umbane"]},
{"t":"li","q":"Which one do you hear?","say":"isitulo","o":["isitulo","ibhedi","isitya"],"a":0}
]},
{"id":"xh_h2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["isitulo","chair"],["itafile","table"],["ibhedi","bed"]]},
{"t":"li","q":"Which one do you hear?","say":"umbane","o":["umbane","isitya","itafile"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["isitya","dish"],["umbane","electricity"]]},
{"t":"mc","q":"When umbane goes off, South Africans call it…","o":["load-shedding","a braai","impelaveki"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"itafile","o":["itafile","ibhedi","isitulo"],"a":0}
]},
{"id":"xh_h2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does itafile mean?","o":["table","chair","dish"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isitya","o":["isitya","isitulo","umbane"],"a":0},
{"t":"mc","q":"Which one means bed?","o":["ibhedi","itafile","igumbi"],"a":0},
{"t":"mc","q":"umbane means…","o":["electricity","water","gas"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umbane","o":["umbane","ibhedi","isitya"],"a":0},
{"t":"mc","q":"Review — which one means kitchen?","o":["ikhitshi","igumbi","iyadi"],"a":0},
{"t":"mc","q":"Review — which means “2”?","o":["zimbini","inye","zintathu"],"a":0},
{"t":"mc","q":"Review — which means “8”?","o":["sibhozo","inye","zimbini"],"a":0},
{"t":"mc","q":"Review — which means “Friday”?","o":["uLwesihlanu","uMvulo","uLwesibini"],"a":0},
{"t":"mc","q":"Review — which means “when?”","o":["nini?","Utya ntoni?","Uza kuya phi?"],"a":0}
]},

/* ---------- h3 · One thing, many things ---------- */
{"id":"xh_h3","title":"One thing, many things","step":"learn","meta":"The isi- to izi- pattern","vocab":[["izitulo","ee-zee-TOO-law","chairs"],["izitya","ee-ZEE-tyah","dishes"],["isipili","ee-see-PEE-lee","mirror"],["izipili","ee-zee-PEE-lee","mirrors"]],"ex":[
{"t":"note","tag":"The third pair","q":"isi- becomes izi-","body":"<p>Your third plural pattern, and the most regular of all: <b>isi-</b> things go plural as <b>izi-</b>. One isitulo, many <b>izitulo</b>. One isitya, many <b>izitya</b> — the washing-up word.</p>","eg":[["izitulo","ee-zee-TOO-law","chairs"],["izitya","ee-ZEE-tyah","dishes"]]},
{"t":"li","q":"One or many — which do you hear?","say":"izitulo","o":["izitulo","isitulo"],"a":0},
{"t":"mc","q":"izitya means…","o":["dishes","dish","chairs"],"a":0},
{"t":"note","tag":"Prove it","q":"Isipili, izipili","body":"<p>Test the rule on a new word: <b>isipili</b> — <i>mirror</i>. Its plural has to be… <b>izipili</b>. It is. Every isi- word you ever meet now comes with its plural for free.</p>","eg":[["isipili","ee-see-PEE-lee","mirror"],["izipili","ee-zee-PEE-lee","mirrors"]]},
{"t":"li","q":"One or many — which do you hear?","say":"izipili","o":["izipili","isipili"],"a":0},
{"t":"mc","q":"What does isipili mean?","o":["mirror","dish","chair"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izitya","o":["izitya","izitulo"],"a":0},
{"t":"mc","q":"Your three plural pairs so far…","o":["um-/aba-, oo-, isi-/izi-","only um-/aba-","e- and ngo-"],"a":0}
]},
{"id":"xh_h3_2","title":"Recognize","step":"recognize","meta":"Singular or plural, instantly","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"isipili","o":["isipili","izipili","isitya"],"a":0},
{"t":"mc","q":"The plural of isitulo is…","o":["izitulo","ositulo","amatulo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izitulo","o":["izitulo","izitya","izipili"],"a":0},
{"t":"mc","q":"Which one means mirrors?","o":["izipili","isipili","izitya"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izitya","o":["izitya","isitya","izitulo"],"a":0},
{"t":"mc","q":"After dinner you wash…","o":["izitya","izitulo","izipili"],"a":0}
]},
{"id":"xh_h3_3","title":"Build","step":"build","meta":"Swap isi- for izi-","vocab":[],"ex":[
{"t":"fill","q":"Complete: chairs","s":"___tulo","o":["izi","isi","ama"],"a":0},
{"t":"wb","q":"Build the word: dishes","a":["izitya"],"pool":["izitya","isitya","izitulo"]},
{"t":"fill","q":"Complete: mirror (just one)","s":"___pili","o":["isi","izi","oo"],"a":0},
{"t":"wb","q":"Build the word: mirrors","a":["izipili"],"pool":["izipili","isipili","izitya"]},
{"t":"li","q":"Which one do you hear?","say":"izipili","o":["izipili","izitulo","isipili"],"a":0}
]},
{"id":"xh_h3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match singular to plural","pairs":[["isitulo","izitulo"],["isitya","izitya"],["isipili","izipili"]]},
{"t":"li","q":"Which one do you hear?","say":"izitulo","o":["izitulo","isitulo","izipili"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["izitulo","chairs"],["izitya","dishes"],["izipili","mirrors"]]},
{"t":"mc","q":"isiXhosa has no plural need, but isiqhamo (fruit) pluralises to…","o":["iziqhamo","amaqhamo","ooqhamo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isipili","o":["isipili","izipili","izitya"],"a":0}
]},
{"id":"xh_h3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"The plural of isitya is…","o":["izitya","amatya","ootya"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izitya","o":["izitya","izipili","izitulo"],"a":0},
{"t":"mc","q":"What does izipili mean?","o":["mirrors","dishes","chairs"],"a":0},
{"t":"mc","q":"isi- words go plural with…","o":["izi-","aba-","ama-"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izitulo","o":["izitulo","izitya","isitulo"],"a":0},
{"t":"mc","q":"Review — which one means electricity?","o":["umbane","isipili","ifestile"],"a":0},
{"t":"mc","q":"Review — which means “3”?","o":["zintathu","inye","zimbini"],"a":0},
{"t":"mc","q":"Review — which means “9”?","o":["lithoba","inye","zimbini"],"a":0},
{"t":"mc","q":"Review — which means “Saturday”?","o":["uMgqibelo","uMvulo","uLwesibini"],"a":0},
{"t":"mc","q":"Review — which means “when are you coming?”","o":["Uza nini?","Uthanda ntoni?","Uthetha ukuthini?"],"a":0}
]},

/* ---------- h4 · Where is it? ---------- */
{"id":"xh_h4","title":"Where is it?","step":"learn","meta":"Iphi — here, there, up, down","vocab":[["Iphi imoto?","EE-pee ee-MAW-taw","where is the car?"],["apha","AH-pah","here"],["phaya","PAH-yah","over there"],["phantsi","PAHN-tsee","down"],["phezulu","peh-ZOO-loo","up"]],"ex":[
{"t":"note","tag":"Asking where","q":"Iphi — where is the thing?","body":"<p>You know Uphi? for people. For i- things the question wears i-: <b>Iphi imoto?</b> — <i>where is the car?</i> Same phi, dressed to match its noun.</p>","eg":[["Iphi imoto?","EE-pee ee-MAW-taw","where is the car?"]]},
{"t":"li","q":"Which one do you hear?","say":"Iphi imoto?","o":["Iphi imoto?","ikhitshi"],"a":0},
{"t":"mc","q":"Iphi imoto? asks…","o":["where is the car?","whose car is this?","is the car here?"],"a":0},
{"t":"note","tag":"Here and there","q":"Apha and phaya","body":"<p>The answers: <b>apha</b> — <i>here</i> — and <b>phaya</b> — <i>over there</i>, usually with a pointed chin rather than a finger. Iphi imoto? Iphaya! — it is over there.</p>","eg":[["apha","AH-pah","here"],["phaya","PAH-yah","over there"]]},
{"t":"li","q":"Here or there — which do you hear?","say":"phaya","o":["phaya","apha"],"a":0},
{"t":"mc","q":"apha means…","o":["here","over there","up"],"a":0},
{"t":"note","tag":"Up and down","q":"Phezulu and phantsi","body":"<p><b>Phezulu</b> — <i>up, on top</i>. <b>Phantsi</b> — <i>down, underneath</i>. Also the great protest word: Phantsi nge…! — down with…!</p>","eg":[["phezulu","peh-ZOO-loo","up"],["phantsi","PAHN-tsee","down"]]},
{"t":"li","q":"Up or down — which do you hear?","say":"phantsi","o":["phantsi","phezulu"],"a":0},
{"t":"mc","q":"phezulu means…","o":["up","down","here"],"a":0}
]},
{"id":"xh_h4_2","title":"Recognize","step":"recognize","meta":"Place words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"apha","o":["apha","phaya","phantsi"],"a":0},
{"t":"mc","q":"What does phaya mean?","o":["over there","here","up"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"phezulu","o":["phezulu","phantsi","phaya"],"a":0},
{"t":"mc","q":"Which one means down?","o":["phantsi","phezulu","apha"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Iphi imoto?","o":["Iphi imoto?","phaya","apha"],"a":0},
{"t":"mc","q":"Someone answers your question with a pointed chin: Iphaya. The thing is…","o":["over there","right here","upstairs"],"a":0}
]},
{"id":"xh_h4_3","title":"Build","step":"build","meta":"Point with words","vocab":[],"ex":[
{"t":"fill","q":"Complete: where is the car?","s":"I___i imoto?","o":["ph","p","f"],"a":0},
{"t":"wb","q":"Build: it is over there","a":["phaya"],"pool":["phaya","apha","phantsi"]},
{"t":"fill","q":"Complete: down","s":"phan___i","o":["ts","tsh","th"],"a":0},
{"t":"wb","q":"Build: here","a":["apha"],"pool":["apha","phaya","phezulu"]},
{"t":"li","q":"Which one do you hear?","say":"phaya","o":["phaya","phezulu","apha"],"a":0}
]},
{"id":"xh_h4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["apha","here"],["phaya","over there"],["phantsi","down"]]},
{"t":"li","q":"Which one do you hear?","say":"phantsi","o":["phantsi","phaya","phezulu"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["phezulu","up"],["Iphi imoto?","where is the car?"]]},
{"t":"mc","q":"Uphi is for people; Iphi is for…","o":["i- things","places only","questions only"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"apha","o":["apha","phantsi","Iphi imoto?"],"a":0}
]},
{"id":"xh_h4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does phantsi mean?","o":["down","up","there"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"phezulu","o":["phezulu","phaya","phantsi"],"a":0},
{"t":"mc","q":"Which one means here?","o":["apha","phaya","phezulu"],"a":0},
{"t":"mc","q":"Iphi imoto? — Iphaya! The car is…","o":["over there","here","gone"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Iphi imoto?","o":["Iphi imoto?","apha","phaya"],"a":0},
{"t":"mc","q":"Review — the plural of isipili is…","o":["izipili","amapili","oopili"],"a":0},
{"t":"mc","q":"Review — which means “4”?","o":["zine","inye","zimbini"],"a":0},
{"t":"mc","q":"Review — which means “10”?","o":["lishumi","inye","zimbini"],"a":0},
{"t":"mc","q":"Review — which means “Sunday”?","o":["iCawa","uMvulo","uLwesibini"],"a":0},
{"t":"mc","q":"Review — which means “on Monday”?","o":["ngoMvulo","kusasa","uLwesithathu"],"a":0}
]},

/* ---------- h5 · In the kitchen ---------- */
{"id":"xh_h5","title":"In the kitchen","step":"learn","meta":"Cup, pot, knife — the tools of iti","vocab":[["ikomityi","ee-kaw-MEE-tyee","cup"],["ibhotile","ee-bhaw-TEE-leh","bottle"],["imela","ee-MEH-lah","knife"],["icephe","ee-CEH-peh","spoon"],["imbiza","eem-BEE-zah","pot"]],"ex":[
{"t":"note","tag":"Tea things","q":"Ikomityi and ibhotile","body":"<p><b>Ikomityi</b> — <i>cup</i> — the vessel of every visit (iti arrives in it). <b>Ibhotile</b> — <i>bottle</i>. Both old borrowings living comfortably in the isiXhosa kitchen.</p>","eg":[["ikomityi","ee-kaw-MEE-tyee","cup"],["ibhotile","ee-bhaw-TEE-leh","bottle"]]},
{"t":"li","q":"Which one do you hear?","say":"ikomityi","o":["ikomityi","ibhotile"],"a":0},
{"t":"mc","q":"Iti arrives in…","o":["ikomityi","ibhotile","isitya"],"a":0},
{"t":"note","tag":"Cutting and stirring","q":"Imela and icephe","body":"<p><b>Imela</b> — <i>knife</i> (from Afrikaans mes). <b>Icephe</b> — <i>spoon</i> — with your dental click in the middle: ee-CLICK-peh.</p>","eg":[["imela","ee-MEH-lah","knife"],["icephe","ee-CEH-peh","spoon"]]},
{"t":"li","q":"Which one do you hear?","say":"icephe","o":["icephe","imela"],"a":0},
{"t":"mc","q":"What does imela mean?","o":["knife","spoon","cup"],"a":0},
{"t":"note","tag":"The big one","q":"Imbiza — the pot","body":"<p><b>Imbiza</b> — <i>the pot</i> — where umngqusho simmers all afternoon. A three-legged imbiza over a fire is the truest South African kitchen there is.</p>","eg":[["imbiza","eem-BEE-zah","pot"]]},
{"t":"li","q":"Which one do you hear?","say":"imbiza","o":["imbiza","icephe"],"a":0},
{"t":"mc","q":"Which one means pot?","o":["imbiza","ikomityi","ibhotile"],"a":0}
]},
{"id":"xh_h5_2","title":"Recognize","step":"recognize","meta":"Kitchen tools by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ibhotile","o":["ibhotile","ikomityi","imbiza"],"a":0},
{"t":"mc","q":"What does icephe mean?","o":["spoon","knife","pot"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"imela","o":["imela","imbiza","icephe"],"a":0},
{"t":"mc","q":"Which one means cup?","o":["ikomityi","ibhotile","isitya"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"imbiza","o":["imbiza","imela","ibhotile"],"a":0},
{"t":"mc","q":"Umngqusho simmers all afternoon in…","o":["imbiza","ikomityi","isitya"],"a":0}
]},
{"id":"xh_h5_3","title":"Build","step":"build","meta":"Set the kitchen","vocab":[],"ex":[
{"t":"fill","q":"Complete: cup","s":"ikomi___i","o":["ty","tsh","t"],"a":0},
{"t":"wb","q":"Build: may I have a spoon","a":["ndicela","icephe"],"pool":["ndicela","icephe","imela"]},
{"t":"fill","q":"Complete: pot","s":"imbi___a","o":["z","s","dl"],"a":0},
{"t":"wb","q":"Build the word: bottle","a":["ibhotile"],"pool":["ibhotile","ikomityi","imbiza"]},
{"t":"li","q":"Which one do you hear?","say":"ikomityi","o":["ikomityi","imbiza","imela"],"a":0}
]},
{"id":"xh_h5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ikomityi","cup"],["ibhotile","bottle"],["imela","knife"]]},
{"t":"li","q":"Which one do you hear?","say":"icephe","o":["icephe","imela","ikomityi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["icephe","spoon"],["imbiza","pot"]]},
{"t":"mc","q":"The click hiding in icephe is…","o":["c","x","q"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ibhotile","o":["ibhotile","imbiza","icephe"],"a":0}
]},
{"id":"xh_h5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does imbiza mean?","o":["pot","pan","cup"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"imela","o":["imela","icephe","ibhotile"],"a":0},
{"t":"mc","q":"Which one means spoon?","o":["icephe","imela","ikomityi"],"a":0},
{"t":"mc","q":"Ndicela ikomityi yeti would get you…","o":["a cup of tea","a bottle of water","a pot of food"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"icephe","o":["icephe","ikomityi","imbiza"],"a":0},
{"t":"mc","q":"Review — which one means dishes?","o":["izitya","izitulo","izipili"],"a":0},
{"t":"mc","q":"Review — which means “5”?","o":["zintlanu","inye","zimbini"],"a":0},
{"t":"mc","q":"Review — which means “Monday”?","o":["uMvulo","uLwesibini","uLwesithathu"],"a":0},
{"t":"mc","q":"Review — which means “weekend”?","o":["impelaveki","usuku","kaninzi"],"a":0},
{"t":"mc","q":"Review — which means “on Sunday”?","o":["ngeCawa","uLwesine","iCawa"],"a":0}
]},

/* ---------- h6 · What you do at home ---------- */
{"id":"xh_h6","title":"What you do at home","step":"learn","meta":"Cook, wash, sleep, wake — the home verbs","vocab":[["ndipheka","ndee-PEH-kah","I cook"],["ndihlamba","ndee-HLAHM-bah","I wash"],["ndilala","ndee-LAH-lah","I sleep"],["ndivuka","ndee-VOO-kah","I wake up"],["ndiphumla","ndee-POOM-lah","I rest"]],"ex":[
{"t":"note","tag":"The kitchen verbs","q":"Ndipheka, ndihlamba","body":"<p><b>Ndipheka</b> — <i>I cook</i>. <b>Ndihlamba</b> — <i>I wash</i> — dishes, clothes, hands; one verb covers them, with your blown hl inside.</p>","eg":[["ndipheka","ndee-PEH-kah","I cook"],["ndihlamba","ndee-HLAHM-bah","I wash"]]},
{"t":"li","q":"Which one do you hear?","say":"ndipheka","o":["ndipheka","ndihlamba"],"a":0},
{"t":"mc","q":"What does ndihlamba mean?","o":["I wash","I cook","I rest"],"a":0},
{"t":"note","tag":"Night and morning","q":"Ndilala, ndivuka","body":"<p><b>Ndilala</b> — <i>I sleep</i> — the lala of igumbi lokulala. <b>Ndivuka</b> — <i>I wake up</i>. Ndilala ebusuku, ndivuka kusasa: I sleep at night, I wake in the morning — your time words earning their keep.</p>","eg":[["ndilala","ndee-LAH-lah","I sleep"],["ndivuka","ndee-VOO-kah","I wake up"]]},
{"t":"li","q":"Sleep or wake — which do you hear?","say":"ndivuka","o":["ndivuka","ndilala"],"a":0},
{"t":"mc","q":"ndilala means…","o":["I sleep","I wake up","I wash"],"a":0},
{"t":"note","tag":"Sunday afternoon","q":"Ndiphumla — I rest","body":"<p><b>Ndiphumla</b> — <i>I rest</i> — the Sunday-afternoon verb, after church and before the evening pot.</p>","eg":[["ndiphumla","ndee-POOM-lah","I rest"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiphumla","o":["ndiphumla","ndipheka"],"a":0},
{"t":"mc","q":"Which one means I rest?","o":["ndiphumla","ndivuka","ndihlamba"],"a":0}
]},
{"id":"xh_h6_2","title":"Recognize","step":"recognize","meta":"Daily actions by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndihlamba","o":["ndihlamba","ndipheka","ndiphumla"],"a":0},
{"t":"mc","q":"What does ndivuka mean?","o":["I wake up","I sleep","I cook"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndilala","o":["ndilala","ndivuka","ndihlamba"],"a":0},
{"t":"mc","q":"Which one means I cook?","o":["ndipheka","ndihlamba","ndiphumla"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiphumla","o":["ndiphumla","ndilala","ndipheka"],"a":0},
{"t":"mc","q":"After washing izitya, on Sunday afternoon you…","o":["ndiphumla","ndivuka","ndipheka"],"a":0}
]},
{"id":"xh_h6_3","title":"Build","step":"build","meta":"Your routine in Xhosa","vocab":[],"ex":[
{"t":"fill","q":"Complete: I cook","s":"Ndiphe___","o":["ka","kha","qa"],"a":0},
{"t":"wb","q":"Build: I sleep at night","a":["ndilala","ebusuku"],"pool":["ndilala","ebusuku","kusasa"]},
{"t":"fill","q":"Complete: I wash","s":"Ndi___amba","o":["hl","dl","l"],"a":0},
{"t":"wb","q":"Build: I wake up in the morning","a":["ndivuka","kusasa"],"pool":["ndivuka","kusasa","ebusuku"]},
{"t":"li","q":"Which one do you hear?","say":"ndivuka","o":["ndivuka","ndiphumla","ndilala"],"a":0}
]},
{"id":"xh_h6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndipheka","I cook"],["ndihlamba","I wash"],["ndiphumla","I rest"]]},
{"t":"li","q":"Which one do you hear?","say":"ndipheka","o":["ndipheka","ndihlamba","ndivuka"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndilala","I sleep"],["ndivuka","I wake up"]]},
{"t":"mc","q":"Order the day: ndivuka, ndipheka, then at night…","o":["ndilala","ndiphumla","ndihlamba"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndihlamba","o":["ndihlamba","ndilala","ndiphumla"],"a":0}
]},
{"id":"xh_h6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndipheka mean?","o":["I cook","I wash","I eat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndilala","o":["ndilala","ndilambile","ndivuka"],"a":0},
{"t":"mc","q":"Which one means I wake up?","o":["ndivuka","ndilala","ndiphumla"],"a":0},
{"t":"mc","q":"Ndilala … (at night). Complete it.","o":["ebusuku","kusasa","namhlanje"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiphumla","o":["ndiphumla","ndipheka","ndihlamba"],"a":0},
{"t":"mc","q":"Review — which one means pot?","o":["imbiza","ikomityi","isitya"],"a":0},
{"t":"mc","q":"Review — which means “6”?","o":["zintandathu","inye","zimbini"],"a":0},
{"t":"mc","q":"Review — which means “Tuesday”?","o":["uLwesibini","uMvulo","uLwesithathu"],"a":0},
{"t":"mc","q":"Review — which means “week”?","o":["iveki","kusasa","uMgqibelo"],"a":0},
{"t":"mc","q":"Review — which means “often”?","o":["kaninzi","uMvulo","inyanga"],"a":0}
]},

/* ---------- h7 · In the kitchen, in the house ---------- */
{"id":"xh_h7","title":"In the kitchen, in the house","step":"learn","meta":"The -ini ending — places you are IN","vocab":[["ekhitshini","eh-khee-TSHEE-nee","in the kitchen"],["endlwini","ehn-DLWEE-nee","in the house"],["Ndipheka ekhitshini","ndee-PEH-kah eh-khee-TSHEE-nee","I cook in the kitchen"],["Ndilala ebusuku","ndee-LAH-lah eh-boo-SOO-koo","I sleep at night"]],"ex":[
{"t":"note","tag":"Being inside","q":"e-…-ini wraps the place","body":"<p>Remember eKapa — the e- that means <i>in</i>? Ordinary nouns take the full wrap, <b>e-…-ini</b>: ikhitshi becomes <b>ekhitshini</b> — <i>in the kitchen</i>; indlu becomes <b>endlwini</b> — <i>in the house</i>.</p>","eg":[["ekhitshini","eh-khee-TSHEE-nee","in the kitchen"],["endlwini","ehn-DLWEE-nee","in the house"]]},
{"t":"li","q":"Which one do you hear?","say":"ekhitshini","o":["ekhitshini","endlwini"],"a":0},
{"t":"mc","q":"ekhitshini means…","o":["in the kitchen","the kitchen","a big kitchen"],"a":0},
{"t":"note","tag":"Real sentences","q":"Put it all together","body":"<p>Now your verbs and places meet: <b>Ndipheka ekhitshini</b> — <i>I cook in the kitchen</i>. <b>Ndilala ebusuku</b> — <i>I sleep at night</i>. You are building real Xhosa sentences from parts you own.</p>","eg":[["Ndipheka ekhitshini","ndee-PEH-kah eh-khee-TSHEE-nee","I cook in the kitchen"],["Ndilala ebusuku","ndee-LAH-lah eh-boo-SOO-koo","I sleep at night"]]},
{"t":"li","q":"Which sentence do you hear?","say":"Ndipheka ekhitshini","o":["Ndipheka ekhitshini","Ndilala ebusuku"],"a":0},
{"t":"mc","q":"Ndipheka ekhitshini means…","o":["I cook in the kitchen","I eat in the kitchen","the kitchen is mine"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"endlwini","o":["endlwini","ekhitshini"],"a":0},
{"t":"mc","q":"To say IN an ordinary noun, wrap it in…","o":["e-…-ini","ngo-…-o","a-…-i"],"a":0}
]},
{"id":"xh_h7_2","title":"Recognize","step":"recognize","meta":"Places you are in, by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"endlwini","o":["endlwini","ekhitshini","indlu"],"a":0},
{"t":"mc","q":"What does endlwini mean?","o":["in the house","the house","at home"],"a":0},
{"t":"li","q":"Which sentence do you hear?","say":"Ndilala ebusuku","o":["Ndilala ebusuku","Ndipheka ekhitshini","ndilala"],"a":0},
{"t":"mc","q":"Which one means in the kitchen?","o":["ekhitshini","ikhitshi","ekhaya"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ekhitshini","o":["ekhitshini","endlwini","Ndipheka ekhitshini"],"a":0},
{"t":"mc","q":"The a-…-i wrap makes negatives; the e-…-ini wrap makes…","o":["places you are in","plurals","questions"],"a":0}
]},
{"id":"xh_h7_3","title":"Build","step":"build","meta":"Verbs meet places","vocab":[],"ex":[
{"t":"fill","q":"Complete: in the kitchen","s":"ekhitshi___","o":["ni","na","ne"],"a":0},
{"t":"wb","q":"Build: I cook in the kitchen","a":["ndipheka","ekhitshini"],"pool":["ndipheka","ekhitshini","endlwini"]},
{"t":"fill","q":"Complete: in the house","s":"endlwi___","o":["ni","na","no"],"a":0},
{"t":"wb","q":"Build: I sleep at night","a":["ndilala","ebusuku"],"pool":["ndilala","ebusuku","ekhitshini"]},
{"t":"li","q":"Which sentence do you hear?","say":"Ndilala ebusuku","o":["Ndilala ebusuku","Ndipheka ekhitshini","endlwini"],"a":0}
]},
{"id":"xh_h7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ekhitshini","in the kitchen"],["endlwini","in the house"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndipheka ekhitshini","o":["Ndipheka ekhitshini","Ndilala ebusuku","ekhitshini"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ndipheka ekhitshini","I cook in the kitchen"],["Ndilala ebusuku","I sleep at night"]]},
{"t":"mc","q":"ikhitshi is to ekhitshini as indlu is to…","o":["endlwini","indlwana","endlini kakhulu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ekhitshini","o":["ekhitshini","endlwini","ndipheka"],"a":0}
]},
{"id":"xh_h7_5","title":"Checkpoint","step":"checkpoint","meta":"Around the home — show it all","vocab":[],"ex":[
{"t":"mc","q":"endlwini means…","o":["in the house","the house","at the door"],"a":0},
{"t":"li","q":"Which sentence do you hear?","say":"Ndipheka ekhitshini","o":["Ndipheka ekhitshini","Ndilala ebusuku","ekhitshini"],"a":0},
{"t":"mc","q":"Review — the plural of isitulo is…","o":["izitulo","ositulo","abatulo"],"a":0},
{"t":"mc","q":"Review — which one means over there?","o":["phaya","apha","phantsi"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"imbiza","o":["imbiza","ikomityi","umbane"],"a":0},
{"t":"mc","q":"Review — which one means I wake up?","o":["ndivuka","ndilala","ndiphumla"],"a":0},
{"t":"mc","q":"Review — when umbane goes off it is…","o":["load-shedding","impelaveki","ishisanyama"],"a":0},
{"t":"mc","q":"Review — which means “Wednesday”?","o":["uLwesithathu","uMvulo","uLwesibini"],"a":0},
{"t":"mc","q":"Review — which means “today”?","o":["namhlanje","uLwesibini","impelaveki"],"a":0},
{"t":"mc","q":"Review — which means “day”?","o":["usuku","uLwesithathu","kusasa"],"a":0}
]},

/* ---------- t1 · Places in town ---------- */
{"id":"xh_t1","title":"Places in town","step":"learn","meta":"Shop, school, town — and iteksi","vocab":[["ivenkile","ee-vehn-KEE-leh","shop"],["isikolo","ee-see-KAW-law","school"],["idolophu","ee-daw-LAW-poo","town"],["indlela","een-DLEH-lah","road"],["iteksi","ee-TEHK-see","taxi"]],"ex":[
{"t":"note","tag":"Where you go","q":"Ivenkile and isikolo","body":"<p>The two places every day passes through: <b>ivenkile</b> — <i>the shop</i> (an old winkel borrowing) — and <b>isikolo</b> — <i>the school</i>.</p>","eg":[["ivenkile","ee-vehn-KEE-leh","shop"],["isikolo","ee-see-KAW-law","school"]]},
{"t":"li","q":"Which one do you hear?","say":"ivenkile","o":["ivenkile","isikolo"],"a":0},
{"t":"mc","q":"What does isikolo mean?","o":["school","shop","town"],"a":0},
{"t":"note","tag":"The bigger world","q":"Idolophu and indlela","body":"<p><b>Idolophu</b> — <i>town</i> (from dorp). <b>Indlela</b> — <i>the road, the way</i> — a word Xhosa also uses the way English does: the way to do things, the way home.</p>","eg":[["idolophu","ee-daw-LAW-poo","town"],["indlela","een-DLEH-lah","road"]]},
{"t":"li","q":"Which one do you hear?","say":"idolophu","o":["idolophu","indlela"],"a":0},
{"t":"mc","q":"indlela means the road and also…","o":["the way","the town","the trip"],"a":0},
{"t":"note","tag":"How South Africa moves","q":"Iteksi","body":"<p><b>Iteksi</b> — <i>the minibus taxi</i>, how most of South Africa gets anywhere. You hail one with a hand sign for your route, pay by passing coins forward, and trust the gaartjie to know where everyone is going.</p>","eg":[["iteksi","ee-TEHK-see","taxi"]]},
{"t":"li","q":"Which one do you hear?","say":"iteksi","o":["iteksi","ivenkile"],"a":0},
{"t":"mc","q":"Which one means taxi?","o":["iteksi","idolophu","imoto"],"a":0}
]},
{"id":"xh_t1_2","title":"Recognize","step":"recognize","meta":"Town words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"isikolo","o":["isikolo","ivenkile","idolophu"],"a":0},
{"t":"mc","q":"What does ivenkile mean?","o":["shop","school","road"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"indlela","o":["indlela","iteksi","idolophu"],"a":0},
{"t":"mc","q":"Which one means town?","o":["idolophu","indlela","isikolo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iteksi","o":["iteksi","indlela","isikolo"],"a":0},
{"t":"mc","q":"You pay by passing coins forward in…","o":["iteksi","ivenkile","isikolo"],"a":0}
]},
{"id":"xh_t1_3","title":"Build","step":"build","meta":"Place by place","vocab":[],"ex":[
{"t":"fill","q":"Complete: shop","s":"ivenki___","o":["le","la","li"],"a":0},
{"t":"wb","q":"Build the word: school","a":["isikolo"],"pool":["isikolo","ivenkile","iteksi"]},
{"t":"fill","q":"Complete: town","s":"idolo___u","o":["ph","p","f"],"a":0},
{"t":"wb","q":"Build the word: road","a":["indlela"],"pool":["indlela","idolophu","iteksi"]},
{"t":"li","q":"Which one do you hear?","say":"ivenkile","o":["ivenkile","iteksi","indlela"],"a":0}
]},
{"id":"xh_t1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ivenkile","shop"],["isikolo","school"],["idolophu","town"]]},
{"t":"li","q":"Which one do you hear?","say":"idolophu","o":["idolophu","isikolo","iteksi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["indlela","road"],["iteksi","taxi"]]},
{"t":"mc","q":"iteksi in South Africa usually means…","o":["a minibus on a set route","a metered cab","a bus"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"indlela","o":["indlela","ivenkile","idolophu"],"a":0}
]},
{"id":"xh_t1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does idolophu mean?","o":["town","shop","school"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isikolo","o":["isikolo","idolophu","ivenkile"],"a":0},
{"t":"mc","q":"Which one means road?","o":["indlela","iteksi","idolophu"],"a":0},
{"t":"mc","q":"ivenkile and idolophu both came from…","o":["Afrikaans","English","Zulu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iteksi","o":["iteksi","isikolo","indlela"],"a":0},
{"t":"mc","q":"Review — which one means bread?","o":["isonka","amasi","irayisi"],"a":0},
{"t":"mc","q":"Review — which means “I am hungry”?","o":["ndilambile","amanzi","iitapile"],"a":0},
{"t":"mc","q":"Review — which means “tea”?","o":["iti","itumato","Kumnandi!"],"a":0},
{"t":"mc","q":"Review — which means “I am drinking tea”?","o":["Ndisela iti","hayi enkosi","Nditya inyama"],"a":0},
{"t":"mc","q":"Review — which means “tomato”?","o":["itumato","amanzi","ndifuna"],"a":0}
]},

/* ---------- t2 · Going and coming ---------- */
{"id":"xh_t2","title":"Going and coming","step":"learn","meta":"Ndiya, ndiza — and Uya phi?","vocab":[["ndiya","NDEE-yah","I go"],["ndiza","NDEE-zah","I come"],["ndihamba","ndee-HAHM-bah","I walk"],["Uya phi?","OO-yah PEE","where are you going?"]],"ex":[
{"t":"note","tag":"One letter apart","q":"Ndiya and ndiza","body":"<p><b>Ndiya</b> — <i>I go</i>. <b>Ndiza</b> — <i>I come</i>. One consonant apart, opposite directions — listen for the y against the z.</p>","eg":[["ndiya","NDEE-yah","I go"],["ndiza","NDEE-zah","I come"]]},
{"t":"li","q":"Going or coming — which do you hear?","say":"ndiya","o":["ndiya","ndiza"],"a":0},
{"t":"mc","q":"What does ndiza mean?","o":["I come","I go","I walk"],"a":0},
{"t":"note","tag":"On foot","q":"Ndihamba","body":"<p><b>Ndihamba</b> — <i>I walk, I travel, I am off</i>. You already own its heart: hamba kakuhle — go well. Hamba is the going itself; ndi- makes it yours.</p>","eg":[["ndihamba","ndee-HAHM-bah","I walk"]]},
{"t":"li","q":"Which one do you hear?","say":"ndihamba","o":["ndihamba","ndiya"],"a":0},
{"t":"mc","q":"The goodbye hamba kakuhle literally wishes someone to…","o":["go well","sleep well","eat well"],"a":0},
{"t":"note","tag":"The daily question","q":"Uya phi?","body":"<p><b>Uya phi?</b> — <i>where are you going?</i> U- is <i>you</i>, -ya is <i>go</i>, phi is the where of Uphi and Iphi. On any road in the Eastern Cape this is not nosiness — it is a greeting.</p>","eg":[["Uya phi?","OO-yah PEE","where are you going?"]]},
{"t":"li","q":"Which one do you hear?","say":"Uya phi?","o":["Uya phi?","ndihamba"],"a":0},
{"t":"mc","q":"Uya phi? asks…","o":["where are you going?","where are you from?","are you leaving?"],"a":0}
]},
{"id":"xh_t2_2","title":"Recognize","step":"recognize","meta":"Motion verbs by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndiza","o":["ndiza","ndiya","ndihamba"],"a":0},
{"t":"mc","q":"What does ndiya mean?","o":["I go","I come","I walk"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndihamba","o":["ndihamba","ndiza","Uya phi?"],"a":0},
{"t":"mc","q":"Which one means I come?","o":["ndiza","ndiya","ndihamba"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uya phi?","o":["Uya phi?","ndiya","ndiza"],"a":0},
{"t":"mc","q":"In Uya phi?, the u- means…","o":["you","I","where"],"a":0}
]},
{"id":"xh_t2_3","title":"Build","step":"build","meta":"Set the verbs moving","vocab":[],"ex":[
{"t":"fill","q":"Complete: I go","s":"Ndi___","o":["ya","za","wa"],"a":0},
{"t":"wb","q":"Build: where are you going?","a":["Uya","phi?"],"pool":["Uya","phi?","ndiza"]},
{"t":"fill","q":"Complete: I walk","s":"Ndiha___a","o":["mb","m","nb"],"a":0},
{"t":"wb","q":"Build the word: I come","a":["ndiza"],"pool":["ndiza","ndiya","ndihamba"]},
{"t":"li","q":"Which one do you hear?","say":"ndiya","o":["ndiya","ndihamba","ndiza"],"a":0}
]},
{"id":"xh_t2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndiya","I go"],["ndiza","I come"],["ndihamba","I walk"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiza","o":["ndiza","ndihamba","ndiya"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uya phi?","where are you going?"],["hamba kakuhle","go well"]]},
{"t":"mc","q":"Someone calls Uya phi? across the road. It works as…","o":["a friendly greeting","an accusation","a warning"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndihamba","o":["ndihamba","Uya phi?","ndiya"],"a":0}
]},
{"id":"xh_t2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndihamba mean?","o":["I walk","I go","I come"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiya","o":["ndiya","ndiza","ndihamba"],"a":0},
{"t":"mc","q":"Which one means where are you going?","o":["Uya phi?","Uphi utata?","Unjani?"],"a":0},
{"t":"mc","q":"ndiya and ndiza differ by…","o":["one consonant","their prefix","their tone only"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiza","o":["ndiza","ndiya","Uya phi?"],"a":0},
{"t":"mc","q":"Review — which one means yesterday?","o":["izolo","ngomso","kusasa"],"a":0},
{"t":"mc","q":"Review — which means “I am thirsty”?","o":["ndinxaniwe","amanzi","ndisela"],"a":0},
{"t":"mc","q":"Review — which means “coffee”?","o":["ikofu","irayisi","ndisela"],"a":0},
{"t":"mc","q":"Review — which means “braai place”?","o":["ishisanyama","iti","mnandi"],"a":0},
{"t":"mc","q":"Review — which means “onion”?","o":["itswele","inkukhu","ndilambile"],"a":0}
]},

/* ---------- t3 · At the shop, at school ---------- */
{"id":"xh_t3","title":"At the shop, at school","step":"learn","meta":"The e- wrap goes to town","vocab":[["evenkileni","eh-vehn-kee-LEH-nee","at the shop"],["esikolweni","eh-see-kaw-LWEH-nee","at school"],["edolophini","eh-daw-law-PEE-nee","in town"]],"ex":[
{"t":"note","tag":"The wrap you know","q":"Evenkileni — at the shop","body":"<p>Zone 6 gave you ekhitshini, endlwini. The same e-…-ini wrap covers the town: ivenkile becomes <b>evenkileni</b> — <i>at the shop</i>. The ending bends a little to fit each word — your ear will learn the shapes faster than any rule.</p>","eg":[["evenkileni","eh-vehn-kee-LEH-nee","at the shop"]]},
{"t":"li","q":"Which one do you hear?","say":"evenkileni","o":["evenkileni","ivenkile"],"a":0},
{"t":"mc","q":"evenkileni means…","o":["at the shop","the shop","a big shop"],"a":0},
{"t":"note","tag":"Two more","q":"Esikolweni, edolophini","body":"<p>Isikolo becomes <b>esikolweni</b> — <i>at school</i> — and idolophu becomes <b>edolophini</b> — <i>in town</i>. Say them until they feel like places, not puzzles.</p>","eg":[["esikolweni","eh-see-kaw-LWEH-nee","at school"],["edolophini","eh-daw-law-PEE-nee","in town"]]},
{"t":"li","q":"Which one do you hear?","say":"esikolweni","o":["esikolweni","edolophini"],"a":0},
{"t":"mc","q":"What does edolophini mean?","o":["in town","the town","to the taxi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"edolophini","o":["edolophini","evenkileni"],"a":0},
{"t":"mc","q":"The e-…-ini wrap turns a place noun into…","o":["at or in that place","its plural","a question"],"a":0}
]},
{"id":"xh_t3_2","title":"Recognize","step":"recognize","meta":"At and in, by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"evenkileni","o":["evenkileni","esikolweni","edolophini"],"a":0},
{"t":"mc","q":"What does esikolweni mean?","o":["at school","the school","in town"],"a":0},
{"t":"li","q":"Plain or wrapped — which do you hear?","say":"esikolweni","o":["esikolweni","isikolo"],"a":0},
{"t":"mc","q":"Which one means in town?","o":["edolophini","idolophu","evenkileni"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"edolophini","o":["edolophini","evenkileni","esikolweni"],"a":0},
{"t":"mc","q":"ivenkile is to evenkileni as ikhitshi is to…","o":["ekhitshini","ikhitshini","ekhitshi"],"a":0}
]},
{"id":"xh_t3_3","title":"Build","step":"build","meta":"Wrap the places","vocab":[],"ex":[
{"t":"fill","q":"Complete: at the shop","s":"evenkile___","o":["ni","ne","na"],"a":0},
{"t":"wb","q":"Build the word: at school","a":["esikolweni"],"pool":["esikolweni","isikolo","edolophini"]},
{"t":"fill","q":"Complete: in town","s":"edolophi___","o":["ni","nu","na"],"a":0},
{"t":"wb","q":"Build the word: at the shop","a":["evenkileni"],"pool":["evenkileni","ivenkile","esikolweni"]},
{"t":"li","q":"Which one do you hear?","say":"esikolweni","o":["esikolweni","edolophini","evenkileni"],"a":0}
]},
{"id":"xh_t3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the place to the wrapped form","pairs":[["ivenkile","evenkileni"],["isikolo","esikolweni"],["idolophu","edolophini"]]},
{"t":"li","q":"Which one do you hear?","say":"edolophini","o":["edolophini","esikolweni","evenkileni"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["evenkileni","at the shop"],["esikolweni","at school"],["edolophini","in town"]]},
{"t":"mc","q":"Which set all means being AT a place?","o":["evenkileni, esikolweni, ekhitshini","ivenkile, isikolo, ikhitshi","ndiya, ndiza, ndihamba"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"evenkileni","o":["evenkileni","edolophini","esikolweni"],"a":0}
]},
{"id":"xh_t3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does evenkileni mean?","o":["at the shop","the shop","at school"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"edolophini","o":["edolophini","evenkileni","esikolweni"],"a":0},
{"t":"mc","q":"The wrapped form of isikolo is…","o":["esikolweni","esikoloni","isikolweni"],"a":0},
{"t":"mc","q":"Which one means in town?","o":["edolophini","idolophu","endlwini"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"evenkileni","o":["evenkileni","esikolweni","edolophini"],"a":0},
{"t":"mc","q":"Review — andithandi means…","o":["I do not like it","I like it","I do not know"],"a":0},
{"t":"mc","q":"Review — which means “I want”?","o":["ndifuna","ndinxaniwe","ishisanyama"],"a":0},
{"t":"mc","q":"Review — which means “rice”?","o":["irayisi","intlanzi","nditya"],"a":0},
{"t":"mc","q":"Review — which means “fish”?","o":["intlanzi","ndinxaniwe","nditya"],"a":0},
{"t":"mc","q":"Review — which means “fruit”?","o":["isiqhamo","ndinxaniwe","isonka"],"a":0}
]},

/* ---------- t4 · Riding the taxi ---------- */
{"id":"xh_t4","title":"Riding the taxi","step":"learn","meta":"Ndiya edolophini — and how to stop","vocab":[["Ndiya edolophini","NDEE-yah eh-daw-law-PEE-nee","I am going to town"],["Ndihamba ngeteksi","ndee-HAHM-bah ngeh-TEHK-see","I go by taxi"],["Yima!","YEE-mah","stop!"],["irenki","ee-REHN-kee","taxi rank"]],"ex":[
{"t":"note","tag":"Verb meets place","q":"Ndiya edolophini","body":"<p>Your going-verb and your wrapped places snap together: <b>Ndiya edolophini</b> — <i>I am going to town</i>. Answering Uya phi? is now easy: Ndiya esikolweni, ndiya evenkileni…</p>","eg":[["Ndiya edolophini","NDEE-yah eh-daw-law-PEE-nee","I am going to town"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndiya edolophini","o":["Ndiya edolophini","edolophini"],"a":0},
{"t":"mc","q":"Ndiya edolophini means…","o":["I am going to town","I live in town","I come from town"],"a":0},
{"t":"note","tag":"By taxi","q":"Nge- means by","body":"<p><b>Ndihamba ngeteksi</b> — <i>I go by taxi</i>. The little nge- is <i>by, with</i> — you met it on ngoMvulo, on Monday. Stick it on iteksi and you have transport.</p>","eg":[["Ndihamba ngeteksi","ndee-HAHM-bah ngeh-TEHK-see","I go by taxi"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndihamba ngeteksi","o":["Ndihamba ngeteksi","Ndiya edolophini"],"a":0},
{"t":"mc","q":"The nge- in ngeteksi means…","o":["by","to","from"],"a":0},
{"t":"note","tag":"Getting off","q":"Yima! and irenki","body":"<p><b>Yima!</b> — <i>stop!</i> — what you call when your corner comes (in Cape Town you will also hear an English Short left!). <b>Irenki</b> — <i>the taxi rank</i>, where every route begins.</p>","eg":[["Yima!","YEE-mah","stop!"],["irenki","ee-REHN-kee","taxi rank"]]},
{"t":"li","q":"Which one do you hear?","say":"Yima!","o":["Yima!","irenki"],"a":0},
{"t":"mc","q":"When your corner comes, you call…","o":["Yima!","Molo!","Enkosi!"],"a":0}
]},
{"id":"xh_t4_2","title":"Recognize","step":"recognize","meta":"Taxi talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"irenki","o":["irenki","iteksi","Yima!"],"a":0},
{"t":"mc","q":"What does irenki mean?","o":["taxi rank","taxi","town"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiya edolophini","o":["Ndiya edolophini","Ndihamba ngeteksi","edolophini"],"a":0},
{"t":"mc","q":"Which one means I go by taxi?","o":["Ndihamba ngeteksi","Ndiya edolophini","Yima!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Yima!","o":["Yima!","irenki","ndiya"],"a":0},
{"t":"mc","q":"Every route begins at…","o":["irenki","ivenkile","isikolo"],"a":0}
]},
{"id":"xh_t4_3","title":"Build","step":"build","meta":"Taxi sentences","vocab":[],"ex":[
{"t":"fill","q":"Complete: stop!","s":"Yi___!","o":["ma","mba","na"],"a":0},
{"t":"wb","q":"Build: I am going to town","a":["ndiya","edolophini"],"pool":["ndiya","edolophini","ngeteksi"]},
{"t":"fill","q":"Complete: taxi rank","s":"iren___","o":["ki","ke","ka"],"a":0},
{"t":"wb","q":"Build: I go by taxi","a":["ndihamba","ngeteksi"],"pool":["ndihamba","ngeteksi","edolophini"]},
{"t":"li","q":"Which one do you hear?","say":"Ndihamba ngeteksi","o":["Ndihamba ngeteksi","Ndiya edolophini","Yima!"],"a":0}
]},
{"id":"xh_t4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ndiya edolophini","I am going to town"],["Ndihamba ngeteksi","I go by taxi"]]},
{"t":"li","q":"Which one do you hear?","say":"irenki","o":["irenki","Yima!","iteksi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Yima!","stop!"],["irenki","taxi rank"]]},
{"t":"mc","q":"Uya phi? — the natural answer shape is…","o":["Ndiya edolophini","Ndihamba ngeteksi","Yima!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiya edolophini","o":["Ndiya edolophini","Ndihamba ngeteksi","irenki"],"a":0}
]},
{"id":"xh_t4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Yima! mean?","o":["stop!","go!","wait here"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndihamba ngeteksi","o":["Ndihamba ngeteksi","Ndiya edolophini","irenki"],"a":0},
{"t":"mc","q":"Which one means taxi rank?","o":["irenki","iteksi","indlela"],"a":0},
{"t":"mc","q":"Ndihamba ngeteksi — the nge- carries the meaning…","o":["by taxi","to the taxi","in the taxi rank"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Yima!","o":["Yima!","ndiya","irenki"],"a":0},
{"t":"mc","q":"Review — impelaveki means…","o":["weekend","week","holiday"],"a":0},
{"t":"mc","q":"Review — which means “water”?","o":["amanzi","itumato","ishisanyama"],"a":0},
{"t":"mc","q":"Review — which means “I eat”?","o":["nditya","irayisi","isonka"],"a":0},
{"t":"mc","q":"Review — which means “eggs”?","o":["amaqanda","Kumnandi!","ishisanyama"],"a":0},
{"t":"mc","q":"Review — which means “I like”?","o":["ndithanda","amaqanda","irayisi"],"a":0}
]},

/* ---------- t5 · Near and far ---------- */
{"id":"xh_t5","title":"Near and far","step":"learn","meta":"Kufuphi, kude — is it walkable?","vocab":[["kufuphi","koo-FOO-pee","near"],["kude","KOO-deh","far"],["Ikufuphi?","ee-koo-FOO-pee","is it near?"],["Ivenkile ikufuphi","ee-vehn-KEE-leh ee-koo-FOO-pee","the shop is near"]],"ex":[
{"t":"note","tag":"The walkable question","q":"Kufuphi and kude","body":"<p><b>Kufuphi</b> — <i>near</i>. <b>Kude</b> — <i>far</i>. The pair that decides whether you walk or wait at irenki.</p>","eg":[["kufuphi","koo-FOO-pee","near"],["kude","KOO-deh","far"]]},
{"t":"li","q":"Near or far — which do you hear?","say":"kufuphi","o":["kufuphi","kude"],"a":0},
{"t":"mc","q":"What does kude mean?","o":["far","near","here"],"a":0},
{"t":"note","tag":"Asking it","q":"Ikufuphi?","body":"<p>Xhosa asks yes-no questions with the voice alone — no extra word. <b>Ikufuphi?</b> — <i>is it near?</i> — is just it-is-near said with a rising tune. Say it flat and you have the answer instead.</p>","eg":[["Ikufuphi?","ee-koo-FOO-pee","is it near?"]]},
{"t":"li","q":"Which one do you hear?","say":"Ikufuphi?","o":["Ikufuphi?","kude"],"a":0},
{"t":"mc","q":"Xhosa turns a statement into a yes-no question with…","o":["the voice alone","a question word","word order"],"a":0},
{"t":"note","tag":"Saying it of something","q":"Ivenkile ikufuphi","body":"<p>Name the thing, then say how it sits: <b>Ivenkile ikufuphi</b> — <i>the shop is near</i>. The little i- in front of kufuphi points back at ivenkile, the way i- did in Iphi imoto?</p>","eg":[["Ivenkile ikufuphi","ee-vehn-KEE-leh ee-koo-FOO-pee","the shop is near"]]},
{"t":"li","q":"Which one do you hear?","say":"Ivenkile ikufuphi","o":["Ivenkile ikufuphi","Ikufuphi?"],"a":0},
{"t":"mc","q":"Ivenkile ikufuphi means…","o":["the shop is near","the shop is far","where is the shop?"],"a":0}
]},
{"id":"xh_t5_2","title":"Recognize","step":"recognize","meta":"Near and far by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"kude","o":["kude","kufuphi","Ikufuphi?"],"a":0},
{"t":"mc","q":"What does kufuphi mean?","o":["near","far","fast"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ikufuphi?","o":["Ikufuphi?","kufuphi","kude"],"a":0},
{"t":"mc","q":"Which one means far?","o":["kude","kufuphi","phaya"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ivenkile ikufuphi","o":["Ivenkile ikufuphi","Ikufuphi?","kufuphi"],"a":0},
{"t":"mc","q":"Idolophu ikude means the town is…","o":["far","near","closed"],"a":0}
]},
{"id":"xh_t5_3","title":"Build","step":"build","meta":"Near-and-far sentences","vocab":[],"ex":[
{"t":"fill","q":"Complete: near","s":"kufu___i","o":["ph","p","f"],"a":0},
{"t":"wb","q":"Build: the shop is near","a":["ivenkile","ikufuphi"],"pool":["ivenkile","ikufuphi","kude"]},
{"t":"fill","q":"Complete: far","s":"ku___","o":["de","da","du"],"a":0},
{"t":"wb","q":"Build: is it near?","a":["Ikufuphi?"],"pool":["Ikufuphi?","kude","kufuphi"]},
{"t":"li","q":"Which one do you hear?","say":"kufuphi","o":["kufuphi","kude","Ikufuphi?"],"a":0}
]},
{"id":"xh_t5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["kufuphi","near"],["kude","far"]]},
{"t":"li","q":"Which one do you hear?","say":"Ivenkile ikufuphi","o":["Ivenkile ikufuphi","Ikufuphi?","kude"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ikufuphi?","is it near?"],["Ivenkile ikufuphi","the shop is near"]]},
{"t":"mc","q":"If idolophu ikude, you probably need…","o":["iteksi","icephe","isitulo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kude","o":["kude","kufuphi","Ivenkile ikufuphi"],"a":0}
]},
{"id":"xh_t5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Ikufuphi? ask?","o":["is it near?","is it far?","is it open?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kufuphi","o":["kufuphi","kude","Ikufuphi?"],"a":0},
{"t":"mc","q":"Which one means far?","o":["kude","kufuphi","apha"],"a":0},
{"t":"mc","q":"Ivenkile ikufuphi — the i- before kufuphi points back at…","o":["ivenkile","the speaker","the road"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ikufuphi?","o":["Ikufuphi?","Ivenkile ikufuphi","kude"],"a":0},
{"t":"mc","q":"Review — nditya means…","o":["I eat","I drink","I cook"],"a":0},
{"t":"mc","q":"Review — which means “may I have water”?","o":["Ndicela amanzi","hayi enkosi","Ndisela iti"],"a":0},
{"t":"mc","q":"Review — which means “I drink”?","o":["ndisela","Kumnandi!","irayisi"],"a":0},
{"t":"mc","q":"Review — which means “I am eating meat”?","o":["Nditya inyama","Ndifuna ukutya","hayi enkosi"],"a":0},
{"t":"mc","q":"Review — which means “what do you like?”","o":["Uthanda ntoni?","Iphi imoto?","Uziva njani?"],"a":0}
]},

/* ---------- t6 · Asking the way ---------- */
{"id":"xh_t6","title":"Asking the way","step":"learn","meta":"Lost — and getting found","vocab":[["Ndilahlekile","ndee-lah-hleh-KEE-leh","I am lost"],["uncedo","oon-CEH-daw","help"],["Ndicela uncedo","ndee-CEH-lah oon-CEH-daw","please help me"],["Uyayazi indlela?","oo-yah-YAH-zee een-DLEH-lah","do you know the way?"]],"ex":[
{"t":"note","tag":"Say it early","q":"Ndilahlekile — I am lost","body":"<p><b>Ndilahlekile</b> — <i>I am lost</i> — the sentence to say sooner rather than later. Nobody in the Eastern Cape lets a lost stranger stay lost.</p>","eg":[["Ndilahlekile","ndee-lah-hleh-KEE-leh","I am lost"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndilahlekile","o":["Ndilahlekile","ndihamba"],"a":0},
{"t":"mc","q":"Ndilahlekile means…","o":["I am lost","I am late","I am tired"],"a":0},
{"t":"note","tag":"Asking for help","q":"Ndicela uncedo","body":"<p><b>Uncedo</b> — <i>help</i>. With your old friend ndicela: <b>Ndicela uncedo</b> — <i>please help me</i>, literally I-request help. Two clicks, and doors open.</p>","eg":[["uncedo","oon-CEH-daw","help"],["Ndicela uncedo","ndee-CEH-lah oon-CEH-daw","please help me"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndicela uncedo","o":["Ndicela uncedo","uncedo"],"a":0},
{"t":"mc","q":"What does uncedo mean?","o":["help","way","time"],"a":0},
{"t":"note","tag":"The full question","q":"Uyayazi indlela?","body":"<p><b>Uyayazi indlela?</b> — <i>do you know the way?</i> U- you, -yazi know it. Point at where you are trying to go, and the answer usually comes with a walked escort.</p>","eg":[["Uyayazi indlela?","oo-yah-YAH-zee een-DLEH-lah","do you know the way?"]]},
{"t":"li","q":"Which one do you hear?","say":"Uyayazi indlela?","o":["Uyayazi indlela?","Ndilahlekile"],"a":0},
{"t":"mc","q":"Uyayazi indlela? asks…","o":["do you know the way?","is the road far?","where is the road?"],"a":0}
]},
{"id":"xh_t6_2","title":"Recognize","step":"recognize","meta":"Lost-and-found by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"uncedo","o":["uncedo","Ndicela uncedo","indlela"],"a":0},
{"t":"mc","q":"What does Ndicela uncedo mean?","o":["please help me","I am lost","excuse me"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndilahlekile","o":["Ndilahlekile","Uyayazi indlela?","uncedo"],"a":0},
{"t":"mc","q":"Which one means do you know the way?","o":["Uyayazi indlela?","Ndilahlekile","Uya phi?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uyayazi indlela?","o":["Uyayazi indlela?","Ndicela uncedo","Ndilahlekile"],"a":0},
{"t":"mc","q":"The clicks in Ndicela uncedo are both…","o":["c","x","q"],"a":0}
]},
{"id":"xh_t6_3","title":"Build","step":"build","meta":"The lost-person toolkit","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am lost","s":"Ndilahleki___","o":["le","la","li"],"a":0},
{"t":"wb","q":"Build: please help me","a":["ndicela","uncedo"],"pool":["ndicela","uncedo","indlela"]},
{"t":"fill","q":"Complete: help","s":"un___do","o":["ce","qe","xe"],"a":0},
{"t":"wb","q":"Build: do you know the way?","a":["uyayazi","indlela?"],"pool":["uyayazi","indlela?","uncedo"]},
{"t":"li","q":"Which one do you hear?","say":"Ndicela uncedo","o":["Ndicela uncedo","Ndilahlekile","Uyayazi indlela?"],"a":0}
]},
{"id":"xh_t6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ndilahlekile","I am lost"],["uncedo","help"]]},
{"t":"li","q":"Which one do you hear?","say":"Uyayazi indlela?","o":["Uyayazi indlela?","Ndilahlekile","Ndicela uncedo"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ndicela uncedo","please help me"],["Uyayazi indlela?","do you know the way?"]]},
{"t":"mc","q":"Lost in town, your best opening line is…","o":["Uxolo, ndilahlekile","Yima!","Uya phi?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndilahlekile","o":["Ndilahlekile","uncedo","Uyayazi indlela?"],"a":0}
]},
{"id":"xh_t6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Ndilahlekile mean?","o":["I am lost","I am here","help me"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndicela uncedo","o":["Ndicela uncedo","Uyayazi indlela?","Ndilahlekile"],"a":0},
{"t":"mc","q":"Which one means help?","o":["uncedo","indlela","uxolo"],"a":0},
{"t":"mc","q":"Uyayazi indlela? — the -yazi part means…","o":["know","go","see"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"uncedo","o":["uncedo","Ndicela uncedo","indlela"],"a":0},
{"t":"mc","q":"Review — which one means chicken?","o":["inkukhu","intlanzi","iqanda"],"a":0},
{"t":"mc","q":"Review — which means “sour milk”?","o":["amasi","inkukhu","iti"],"a":0},
{"t":"mc","q":"Review — which means “what?”","o":["ntoni?","Uphi umama?","Uyaqonda?"],"a":0},
{"t":"mc","q":"Review — which means “maize”?","o":["umbona","ndisela","irayisi"],"a":0},
{"t":"mc","q":"Review — which means “I like tea very much”?","o":["Ndithanda iti kakhulu","hayi enkosi","Nditya inyama"],"a":0}
]},

/* ---------- t7 · On the way ---------- */
{"id":"xh_t7","title":"On the way","step":"learn","meta":"Si- means we — and the zone comes together","vocab":[["Sihamba ngoku","see-HAHM-bah NGAW-koo","we are leaving now"],["Ndiya esikolweni","NDEE-yah eh-see-kaw-LWEH-nee","I am going to school"],["Ndiza kusasa","NDEE-zah koo-SAH-sah","I am coming in the morning"]],"ex":[
{"t":"note","tag":"A new person","q":"Si- means we","body":"<p>Ndi- is <i>I</i>, u- is <i>you</i> — meet <b>si-</b>, <i>we</i>. <b>Sihamba ngoku</b> — <i>we are leaving now</i> — the sentence that ends every visit, said twice and meant the second time.</p>","eg":[["Sihamba ngoku","see-HAHM-bah NGAW-koo","we are leaving now"]]},
{"t":"li","q":"Which one do you hear?","say":"Sihamba ngoku","o":["Sihamba ngoku","ndihamba"],"a":0},
{"t":"mc","q":"The si- in Sihamba ngoku means…","o":["we","I","you"],"a":0},
{"t":"note","tag":"Your day in sentences","q":"Going and coming, placed and timed","body":"<p>Everything this zone taught, in two sentences you will actually say: <b>Ndiya esikolweni</b> — <i>I am going to school</i> — and <b>Ndiza kusasa</b> — <i>I am coming in the morning</i>. Verb, place, time: that is most of daily Xhosa.</p>","eg":[["Ndiya esikolweni","NDEE-yah eh-see-kaw-LWEH-nee","I am going to school"],["Ndiza kusasa","NDEE-zah koo-SAH-sah","I am coming in the morning"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndiya esikolweni","o":["Ndiya esikolweni","Ndiza kusasa"],"a":0},
{"t":"mc","q":"Ndiza kusasa means…","o":["I am coming in the morning","I am going tonight","we are leaving now"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kusasa","o":["Ndiza kusasa","Sihamba ngoku"],"a":0},
{"t":"mc","q":"Your three subject prefixes so far…","o":["ndi-, u-, si-","ndi-, i-, e-","a-, i-, u-"],"a":0}
]},
{"id":"xh_t7_2","title":"Recognize","step":"recognize","meta":"Full sentences by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Ndiya esikolweni","o":["Ndiya esikolweni","Sihamba ngoku","Ndiza kusasa"],"a":0},
{"t":"mc","q":"What does Sihamba ngoku mean?","o":["we are leaving now","I am walking home","they left already"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kusasa","o":["Ndiza kusasa","Ndiya esikolweni","Sihamba ngoku"],"a":0},
{"t":"mc","q":"Which one means I am going to school?","o":["Ndiya esikolweni","Ndiza kusasa","Ndiya edolophini"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Sihamba ngoku","o":["Sihamba ngoku","Ndiza kusasa","Ndiya esikolweni"],"a":0},
{"t":"mc","q":"Verb, place, time — Ndiya esikolweni kusasa means…","o":["I go to school in the morning","I went to school yesterday","we go to town at night"],"a":0}
]},
{"id":"xh_t7_3","title":"Build","step":"build","meta":"Assemble real Xhosa","vocab":[],"ex":[
{"t":"fill","q":"Complete: WE are leaving now","s":"___hamba ngoku","o":["Si","Ndi","U"],"a":0},
{"t":"wb","q":"Build: I am going to school","a":["ndiya","esikolweni"],"pool":["ndiya","esikolweni","kusasa"]},
{"t":"wb","q":"Build: I am coming in the morning","a":["ndiza","kusasa"],"pool":["ndiza","kusasa","ngoku"]},
{"t":"wb","q":"Build: we are leaving now","a":["sihamba","ngoku"],"pool":["sihamba","ngoku","ndiya"]},
{"t":"li","q":"Which one do you hear?","say":"Ndiya esikolweni","o":["Ndiya esikolweni","Ndiza kusasa","Sihamba ngoku"],"a":0}
]},
{"id":"xh_t7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Sihamba ngoku","we are leaving now"],["Ndiya esikolweni","I am going to school"],["Ndiza kusasa","I am coming in the morning"]]},
{"t":"li","q":"Which one do you hear?","say":"Sihamba ngoku","o":["Sihamba ngoku","Ndiya esikolweni","Ndiza kusasa"],"a":0},
{"t":"mc","q":"Uya phi? — Ndiya evenkileni. The person is heading…","o":["to the shop","to school","to the rank"],"a":0},
{"t":"mc","q":"To say WE go, si- replaces…","o":["ndi-","-ya","nge-"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kusasa","o":["Ndiza kusasa","Sihamba ngoku","Ndiya esikolweni"],"a":0}
]},
{"id":"xh_t7_5","title":"Checkpoint","step":"checkpoint","meta":"Getting around — show it all","vocab":[],"ex":[
{"t":"mc","q":"Sihamba ngoku means…","o":["we are leaving now","I am leaving now","they are gone"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiya esikolweni","o":["Ndiya esikolweni","Ndiza kusasa","Sihamba ngoku"],"a":0},
{"t":"mc","q":"Review — which one means taxi rank?","o":["irenki","iteksi","indlela"],"a":0},
{"t":"mc","q":"Review — which one means far?","o":["kude","kufuphi","phaya"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"Ndicela uncedo","o":["Ndicela uncedo","Ndilahlekile","Uyayazi indlela?"],"a":0},
{"t":"mc","q":"Review — evenkileni means…","o":["at the shop","the shop","at school"],"a":0},
{"t":"mc","q":"Review — which one means I rest?","o":["ndiphumla","ndilala","ndivuka"],"a":0},
{"t":"mc","q":"Review — which means “what are you eating?”","o":["Utya ntoni?","Unayo iswekile?","Yimalini?"],"a":0},
{"t":"mc","q":"Review — which means “potatoes”?","o":["iitapile","intlanzi","ndifuna"],"a":0},
{"t":"mc","q":"Review — which means “delicious”?","o":["mnandi","amanzi","iti"],"a":0}
]},

/* ---------- m1 · Money and the spaza ---------- */
{"id":"xh_m1","title":"Money and the spaza","step":"learn","meta":"Imali, irandi — and the shop next door","vocab":[["imali","ee-MAH-lee","money"],["irandi","ee-RAHN-dee","rand"],["ixabiso","ee-xah-BEE-saw","price"],["ispaza","ee-SPAH-zah","spaza shop"]],"ex":[
{"t":"note","tag":"What everything costs","q":"Imali and irandi","body":"<p><b>Imali</b> — <i>money</i>. <b>Irandi</b> — <i>the rand</i>, South Africa&rsquo;s currency. Imali is the stuff; irandi is the unit it comes in.</p>","eg":[["imali","ee-MAH-lee","money"],["irandi","ee-RAHN-dee","rand"]]},
{"t":"li","q":"Which one do you hear?","say":"imali","o":["imali","irandi"],"a":0},
{"t":"mc","q":"What does irandi mean?","o":["rand","money","price"],"a":0},
{"t":"note","tag":"The number on the shelf","q":"Ixabiso — the price","body":"<p><b>Ixabiso</b> — <i>the price</i> — with your lateral x click in the middle. Ask for it, argue with it, sigh at it: all of shopping lives in this word.</p>","eg":[["ixabiso","ee-xah-BEE-saw","price"]]},
{"t":"li","q":"Which one do you hear?","say":"ixabiso","o":["ixabiso","imali"],"a":0},
{"t":"mc","q":"The click inside ixabiso is…","o":["x","c","q"],"a":0},
{"t":"note","tag":"The shop next door","q":"Ispaza","body":"<p><b>Ispaza</b> — the <i>spaza shop</i>: a small shop run from a home, selling bread, airtime, sugar and everything urgent. Every township street has one, and it is open when the big shops are not.</p>","eg":[["ispaza","ee-SPAH-zah","spaza shop"]]},
{"t":"li","q":"Which one do you hear?","say":"ispaza","o":["ispaza","ixabiso"],"a":0},
{"t":"mc","q":"Ispaza is…","o":["a small shop run from a home","a supermarket","a market stall"],"a":0}
]},
{"id":"xh_m1_2","title":"Recognize","step":"recognize","meta":"Money words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"irandi","o":["irandi","imali","ispaza"],"a":0},
{"t":"mc","q":"What does imali mean?","o":["money","price","shop"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ixabiso","o":["ixabiso","ispaza","irandi"],"a":0},
{"t":"mc","q":"Which one means price?","o":["ixabiso","imali","irandi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ispaza","o":["ispaza","irandi","ixabiso"],"a":0},
{"t":"mc","q":"Bread, airtime and sugar at any hour come from…","o":["ispaza","ivenkile","irenki"],"a":0}
]},
{"id":"xh_m1_3","title":"Build","step":"build","meta":"Coin by coin","vocab":[],"ex":[
{"t":"fill","q":"Complete: money","s":"ima___","o":["li","le","la"],"a":0},
{"t":"wb","q":"Build the word: price","a":["ixabiso"],"pool":["ixabiso","imali","ispaza"]},
{"t":"fill","q":"Complete: spaza shop","s":"ispa___","o":["za","sa","tsa"],"a":0},
{"t":"wb","q":"Build the word: rand","a":["irandi"],"pool":["irandi","imali","ixabiso"]},
{"t":"li","q":"Which one do you hear?","say":"imali","o":["imali","ixabiso","ispaza"],"a":0}
]},
{"id":"xh_m1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["imali","money"],["irandi","rand"],["ixabiso","price"]]},
{"t":"li","q":"Which one do you hear?","say":"irandi","o":["irandi","ispaza","imali"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ispaza","spaza shop"],["ivenkile","shop"]]},
{"t":"mc","q":"When the big shops are closed, the street still has…","o":["ispaza","irenki","isikolo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ixabiso","o":["ixabiso","imali","irandi"],"a":0}
]},
{"id":"xh_m1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ispaza mean?","o":["spaza shop","supermarket","price"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ispaza","o":["ispaza","ixabiso","irandi"],"a":0},
{"t":"mc","q":"Which one means rand?","o":["irandi","imali","ixabiso"],"a":0},
{"t":"mc","q":"ixabiso means…","o":["price","change","money"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"irandi","o":["irandi","imali","ispaza"],"a":0},
{"t":"mc","q":"Review — which one means in the house?","o":["endlwini","ekhitshini","evenkileni"],"a":0},
{"t":"mc","q":"Review — which means “room”?","o":["igumbi","isitulo","ibhotile"],"a":0},
{"t":"mc","q":"Review — which means “table”?","o":["itafile","icephe","ekhitshini"],"a":0},
{"t":"mc","q":"Review — which means “here”?","o":["apha","isipili","icephe"],"a":0},
{"t":"mc","q":"Review — which means “in the kitchen”?","o":["ekhitshini","isipili","ndilala"],"a":0}
]},

/* ---------- m2 · How much is it? ---------- */
{"id":"xh_m2","title":"How much is it?","step":"learn","meta":"Yimalini? — and paying up","vocab":[["Yimalini?","yee-mah-LEE-nee","how much is it?"],["lishumi leerandi","lee-SHOO-mee leh-eh-RAHN-dee","ten rand"],["itshintshi","ee-TSHEEN-tshee","change"],["Nantsi imali","NAHN-tsee ee-MAH-lee","here is the money"]],"ex":[
{"t":"note","tag":"The question","q":"Yimalini?","body":"<p><b>Yimalini?</b> — <i>how much is it?</i> — literally it-is-money-how-much. The single most useful shopping word in this course. Point and ask.</p>","eg":[["Yimalini?","yee-mah-LEE-nee","how much is it?"]]},
{"t":"li","q":"Which one do you hear?","say":"Yimalini?","o":["Yimalini?","imali"],"a":0},
{"t":"mc","q":"Yimalini? asks…","o":["how much is it?","where is the money?","do you have change?"],"a":0},
{"t":"note","tag":"The answer","q":"Lishumi leerandi","body":"<p><b>Lishumi leerandi</b> — <i>it is ten rand</i>: your ishumi from the numbers zone, wearing rands. In town you will hear prices in English just as often — but the till speaks both.</p>","eg":[["lishumi leerandi","lee-SHOO-mee leh-eh-RAHN-dee","ten rand"]]},
{"t":"li","q":"Which one do you hear?","say":"lishumi leerandi","o":["lishumi leerandi","Yimalini?"],"a":0},
{"t":"mc","q":"Lishumi leerandi means…","o":["ten rand","five rand","a hundred rand"],"a":0},
{"t":"note","tag":"Handing it over","q":"Nantsi imali — and itshintshi","body":"<p><b>Nantsi imali</b> — <i>here is the money</i> — what you say as you hand it over. What comes back is <b>itshintshi</b> — <i>the change</i>.</p>","eg":[["Nantsi imali","NAHN-tsee ee-MAH-lee","here is the money"],["itshintshi","ee-TSHEEN-tshee","change"]]},
{"t":"li","q":"Which one do you hear?","say":"Nantsi imali","o":["Nantsi imali","itshintshi"],"a":0},
{"t":"mc","q":"What does itshintshi mean?","o":["change","price","coins"],"a":0}
]},
{"id":"xh_m2_2","title":"Recognize","step":"recognize","meta":"Price talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"itshintshi","o":["itshintshi","Nantsi imali","Yimalini?"],"a":0},
{"t":"mc","q":"What does Nantsi imali mean?","o":["here is the money","where is the money?","I have no money"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Yimalini?","o":["Yimalini?","lishumi leerandi","itshintshi"],"a":0},
{"t":"mc","q":"Which one means change?","o":["itshintshi","ixabiso","irandi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"lishumi leerandi","o":["lishumi leerandi","Nantsi imali","Yimalini?"],"a":0},
{"t":"mc","q":"The ishumi inside lishumi leerandi is the number…","o":["ten","two","seven"],"a":0}
]},
{"id":"xh_m2_3","title":"Build","step":"build","meta":"Ask, pay, count","vocab":[],"ex":[
{"t":"fill","q":"Complete: how much is it?","s":"Yimali___?","o":["ni","na","no"],"a":0},
{"t":"wb","q":"Build: here is the money","a":["nantsi","imali"],"pool":["nantsi","imali","itshintshi"]},
{"t":"fill","q":"Complete: change","s":"itshin___i","o":["tsh","ts","sh"],"a":0},
{"t":"wb","q":"Build: ten rand","a":["lishumi","leerandi"],"pool":["lishumi","leerandi","imali"]},
{"t":"li","q":"Which one do you hear?","say":"Yimalini?","o":["Yimalini?","Nantsi imali","lishumi leerandi"],"a":0}
]},
{"id":"xh_m2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Yimalini?","how much is it?"],["itshintshi","change"]]},
{"t":"li","q":"Which one do you hear?","say":"Nantsi imali","o":["Nantsi imali","Yimalini?","itshintshi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["lishumi leerandi","ten rand"],["Nantsi imali","here is the money"]]},
{"t":"mc","q":"Put the exchange in order: Yimalini? → lishumi leerandi → …","o":["Nantsi imali","Molo","Yima!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"itshintshi","o":["itshintshi","lishumi leerandi","Nantsi imali"],"a":0}
]},
{"id":"xh_m2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Yimalini? mean?","o":["how much is it?","here is the money","ten rand"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"lishumi leerandi","o":["lishumi leerandi","itshintshi","Nantsi imali"],"a":0},
{"t":"mc","q":"Which one means here is the money?","o":["Nantsi imali","Yimalini?","itshintshi"],"a":0},
{"t":"mc","q":"What comes back after you pay…","o":["itshintshi","ixabiso","irandi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Nantsi imali","o":["Nantsi imali","Yimalini?","lishumi leerandi"],"a":0},
{"t":"mc","q":"Review — which one means I cook?","o":["ndipheka","ndihlamba","ndithanda"],"a":0},
{"t":"mc","q":"Review — which means “kitchen”?","o":["ikhitshi","ndivuka","izitya"],"a":0},
{"t":"mc","q":"Review — which means “bed”?","o":["ibhedi","isitulo","phantsi"],"a":0},
{"t":"mc","q":"Review — which means “down”?","o":["phantsi","itafile","ikhitshi"],"a":0},
{"t":"mc","q":"Review — which means “I cook in the kitchen”?","o":["Ndipheka ekhitshini","Ndilala ebusuku","igumbi lokulala"],"a":0}
]},

/* ---------- m3 · Buying and selling ---------- */
{"id":"xh_m3","title":"Buying and selling","step":"learn","meta":"Ndithenga — and the uku- that makes a verb a name","vocab":[["ndithenga","ndee-TEHN-gah","I buy"],["ndithengisa","ndee-tehn-GEE-sah","I sell"],["ukuthenga","oo-koo-TEHN-gah","to buy"],["Ndifuna ukuthenga isonka","ndee-FOO-nah oo-koo-TEHN-gah ee-SAWN-kah","I want to buy bread"]],"ex":[
{"t":"note","tag":"Both sides of the counter","q":"Ndithenga, ndithengisa","body":"<p><b>Ndithenga</b> — <i>I buy</i>. Add -isa — the make-it-happen ending — and you cross the counter: <b>ndithengisa</b> — <i>I sell</i>, literally I-make-buy.</p>","eg":[["ndithenga","ndee-TEHN-gah","I buy"],["ndithengisa","ndee-tehn-GEE-sah","I sell"]]},
{"t":"li","q":"Buying or selling — which do you hear?","say":"ndithenga","o":["ndithenga","ndithengisa"],"a":0},
{"t":"mc","q":"What does ndithengisa mean?","o":["I sell","I buy","I pay"],"a":0},
{"t":"note","tag":"To buy","q":"Uku- makes the to-form","body":"<p>Put <b>uku-</b> in front of a verb stem and you get its <i>to</i>-form: <b>ukuthenga</b> — <i>to buy</i>. You have been saying one all along — ukutya, the food, is literally <i>to eat</i>.</p>","eg":[["ukuthenga","oo-koo-TEHN-gah","to buy"]]},
{"t":"li","q":"Which one do you hear?","say":"ukuthenga","o":["ukuthenga","ndithenga"],"a":0},
{"t":"mc","q":"ukuthenga means…","o":["to buy","I buy","the shop"],"a":0},
{"t":"note","tag":"Wanting to","q":"Ndifuna ukuthenga…","body":"<p>Ndifuna — I want — plus a to-form gives you plans: <b>Ndifuna ukuthenga isonka</b> — <i>I want to buy bread</i>. Swap the last word and you can want to buy anything you have ever learned.</p>","eg":[["Ndifuna ukuthenga isonka","ndee-FOO-nah oo-koo-TEHN-gah ee-SAWN-kah","I want to buy bread"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndifuna ukuthenga isonka","o":["Ndifuna ukuthenga isonka","ukuthenga"],"a":0},
{"t":"mc","q":"Ndifuna ukuthenga isonka means…","o":["I want to buy bread","I am selling bread","I bought bread"],"a":0}
]},
{"id":"xh_m3_2","title":"Recognize","step":"recognize","meta":"Buy and sell by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndithengisa","o":["ndithengisa","ndithenga","ukuthenga"],"a":0},
{"t":"mc","q":"What does ndithenga mean?","o":["I buy","I sell","to buy"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ukuthenga","o":["ukuthenga","ndithengisa","ndithenga"],"a":0},
{"t":"mc","q":"Which one means I sell?","o":["ndithengisa","ndithenga","ukuthenga"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndifuna ukuthenga isonka","o":["Ndifuna ukuthenga isonka","ukuthenga","ndithenga"],"a":0},
{"t":"mc","q":"The -isa ending turns buy into sell by meaning…","o":["make it happen","do it again","do it well"],"a":0}
]},
{"id":"xh_m3_3","title":"Build","step":"build","meta":"Deals in parts","vocab":[],"ex":[
{"t":"fill","q":"Complete: I buy","s":"Ndithen___","o":["ga","gisa","go"],"a":0},
{"t":"wb","q":"Build: I want to buy bread","a":["ndifuna","ukuthenga","isonka"],"pool":["ndifuna","ukuthenga","isonka","ndithengisa"]},
{"t":"fill","q":"Complete: to buy","s":"___thenga","o":["uku","ndi","u"],"a":0},
{"t":"wb","q":"Build the word: I sell","a":["ndithengisa"],"pool":["ndithengisa","ndithenga","ukuthenga"]},
{"t":"li","q":"Which one do you hear?","say":"ndithenga","o":["ndithenga","ndithengisa","ukuthenga"],"a":0}
]},
{"id":"xh_m3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndithenga","I buy"],["ndithengisa","I sell"],["ukuthenga","to buy"]]},
{"t":"li","q":"Which one do you hear?","say":"ndithengisa","o":["ndithengisa","Ndifuna ukuthenga isonka","ndithenga"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ndifuna ukuthenga isonka","I want to buy bread"],["ukutya","food"]]},
{"t":"mc","q":"Ukutya, the food, is literally…","o":["to eat","the pot","a meal"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndifuna ukuthenga isonka","o":["Ndifuna ukuthenga isonka","ndithengisa","ukuthenga"],"a":0}
]},
{"id":"xh_m3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ukuthenga mean?","o":["to buy","I buy","I sell"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndithenga","o":["ndithenga","ndithengisa","ukuthenga"],"a":0},
{"t":"mc","q":"Which one means I sell?","o":["ndithengisa","ndithenga","ukuthenga"],"a":0},
{"t":"mc","q":"Ndifuna … isonka (I want TO BUY bread). Complete it.","o":["ukuthenga","ndithenga","ithenga"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ukuthenga","o":["ukuthenga","ndithenga","ndithengisa"],"a":0},
{"t":"mc","q":"Review — umbane means…","o":["electricity","water","money"],"a":0},
{"t":"mc","q":"Review — which means “bedroom”?","o":["igumbi lokulala","Ndilala ebusuku","Ndipheka ekhitshini"],"a":0},
{"t":"mc","q":"Review — which means “electricity”?","o":["umbane","ibhotile","izitya"],"a":0},
{"t":"mc","q":"Review — which means “up”?","o":["phezulu","ndihlamba","ibhotile"],"a":0},
{"t":"mc","q":"Review — which means “I sleep at night”?","o":["Ndilala ebusuku","igumbi lokulala","Ndipheka ekhitshini"],"a":0}
]},

/* ---------- m4 · This one here ---------- */
{"id":"xh_m4","title":"This one here","step":"learn","meta":"Le, esi, eli — pointing in Xhosa","vocab":[["le mali","leh MAH-lee","this money"],["esi sitya","EH-see SEE-tyah","this dish"],["eli qanda","EH-lee QAHN-dah","this egg"],["Yimalini le?","yee-mah-LEE-nee LEH","how much is this?"]],"ex":[
{"t":"note","tag":"Pointing words","q":"This matches its noun","body":"<p>Xhosa <i>this</i> changes shape to match its noun, like everything else: <b>le mali</b> — <i>this money</i> — for i- words, <b>esi sitya</b> — <i>this dish</i> — for isi- words.</p>","eg":[["le mali","leh MAH-lee","this money"],["esi sitya","EH-see SEE-tyah","this dish"]]},
{"t":"li","q":"Which one do you hear?","say":"le mali","o":["le mali","esi sitya"],"a":0},
{"t":"mc","q":"esi sitya means…","o":["this dish","this money","that dish"],"a":0},
{"t":"note","tag":"One more shape","q":"Eli qanda","body":"<p>For iqanda-type words — the ones whose plural is ama- — <i>this</i> is <b>eli</b>: <b>eli qanda</b> — <i>this egg</i>. Three shapes, one habit: listen to the noun, and the pointing word follows.</p>","eg":[["eli qanda","EH-lee QAHN-dah","this egg"]]},
{"t":"li","q":"Which one do you hear?","say":"eli qanda","o":["eli qanda","le mali"],"a":0},
{"t":"mc","q":"eli goes with words whose plural is…","o":["ama-","izi-","oo-"],"a":0},
{"t":"note","tag":"Point and ask","q":"Yimalini le?","body":"<p>Now point at anything on the shelf: <b>Yimalini le?</b> — <i>how much is this one?</i> No noun needed — the pointing word carries the question alone.</p>","eg":[["Yimalini le?","yee-mah-LEE-nee LEH","how much is this?"]]},
{"t":"li","q":"Which one do you hear?","say":"Yimalini le?","o":["Yimalini le?","eli qanda"],"a":0},
{"t":"mc","q":"Yimalini le? asks…","o":["how much is this one?","how much are they all?","is this money?"],"a":0}
]},
{"id":"xh_m4_2","title":"Recognize","step":"recognize","meta":"This-words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"esi sitya","o":["esi sitya","eli qanda","le mali"],"a":0},
{"t":"mc","q":"What does le mali mean?","o":["this money","the money","my money"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"eli qanda","o":["eli qanda","esi sitya","Yimalini le?"],"a":0},
{"t":"mc","q":"Which one means this egg?","o":["eli qanda","esi sitya","le mali"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Yimalini le?","o":["Yimalini le?","le mali","esi sitya"],"a":0},
{"t":"mc","q":"The this-word for isitulo (an isi- word) would be…","o":["esi","le","eli"],"a":0}
]},
{"id":"xh_m4_3","title":"Build","step":"build","meta":"Match this to its noun","vocab":[],"ex":[
{"t":"fill","q":"Complete: this money","s":"___ mali","o":["le","esi","eli"],"a":0},
{"t":"wb","q":"Build: how much is this?","a":["yimalini","le?"],"pool":["yimalini","le?","esi"]},
{"t":"fill","q":"Complete: this egg","s":"___ qanda","o":["eli","le","esi"],"a":0},
{"t":"wb","q":"Build: this dish","a":["esi","sitya"],"pool":["esi","sitya","eli"]},
{"t":"li","q":"Which one do you hear?","say":"le mali","o":["le mali","eli qanda","esi sitya"],"a":0}
]},
{"id":"xh_m4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the this-word to its noun","pairs":[["le","imali"],["esi","isitya"],["eli","iqanda"]]},
{"t":"li","q":"Which one do you hear?","say":"Yimalini le?","o":["Yimalini le?","esi sitya","le mali"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["le mali","this money"],["esi sitya","this dish"],["eli qanda","this egg"]]},
{"t":"mc","q":"Pointing at a loaf on the spaza shelf, you ask…","o":["Yimalini le?","Uya phi?","Ikufuphi?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"esi sitya","o":["esi sitya","le mali","eli qanda"],"a":0}
]},
{"id":"xh_m4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does eli qanda mean?","o":["this egg","this dish","that egg"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"eli qanda","o":["eli qanda","le mali","esi sitya"],"a":0},
{"t":"mc","q":"Which one means how much is this?","o":["Yimalini le?","Yimalini?","Iphi le?"],"a":0},
{"t":"mc","q":"le, esi and eli all mean this — the noun decides…","o":["which shape to use","how loud to say it","the word order"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Yimalini le?","o":["Yimalini le?","eli qanda","esi sitya"],"a":0},
{"t":"mc","q":"Review — which one means mirror?","o":["isipili","izipili","isitya"],"a":0},
{"t":"mc","q":"Review — which means “window”?","o":["ifestile","ibhotile","phaya"],"a":0},
{"t":"mc","q":"Review — which means “chairs”?","o":["izitulo","izitya","ndipheka"],"a":0},
{"t":"mc","q":"Review — which means “cup”?","o":["ikomityi","imbiza","endlwini"],"a":0},
{"t":"mc","q":"Review — which means “it is delicious!”","o":["Kumnandi!","umbona","ndilambile"],"a":0}
]},

/* ---------- m5 · The spaza list ---------- */
{"id":"xh_m5","title":"The spaza list","step":"learn","meta":"Sugar, salt, oil, maize meal","vocab":[["iswekile","ee-sweh-KEE-leh","sugar"],["ityuwa","ee-TYOO-wah","salt"],["amafutha","ah-mah-FOO-tah","cooking oil"],["umgubo","oom-GOO-baw","maize meal"]],"ex":[
{"t":"note","tag":"Sweet and salty","q":"Iswekile and ityuwa","body":"<p>The two flavours every kitchen keeps: <b>iswekile</b> — <i>sugar</i> (suiker, gone Xhosa) — and <b>ityuwa</b> — <i>salt</i>.</p>","eg":[["iswekile","ee-sweh-KEE-leh","sugar"],["ityuwa","ee-TYOO-wah","salt"]]},
{"t":"li","q":"Which one do you hear?","say":"iswekile","o":["iswekile","ityuwa"],"a":0},
{"t":"mc","q":"What does ityuwa mean?","o":["salt","sugar","oil"],"a":0},
{"t":"note","tag":"The frying and the fetching","q":"Amafutha","body":"<p><b>Amafutha</b> — <i>cooking oil</i> (also fat in general). An ama- word through and through — there is no single drop of it.</p>","eg":[["amafutha","ah-mah-FOO-tah","cooking oil"]]},
{"t":"li","q":"Which one do you hear?","say":"amafutha","o":["amafutha","iswekile"],"a":0},
{"t":"mc","q":"amafutha means…","o":["cooking oil","flour","water"],"a":0},
{"t":"note","tag":"The staple of staples","q":"Umgubo","body":"<p><b>Umgubo</b> — <i>maize meal</i>, the ground white gold that becomes pap and umphokoqo. No spaza list is complete without it.</p>","eg":[["umgubo","oom-GOO-baw","maize meal"]]},
{"t":"li","q":"Which one do you hear?","say":"umgubo","o":["umgubo","amafutha"],"a":0},
{"t":"mc","q":"Which one means maize meal?","o":["umgubo","iswekile","ityuwa"],"a":0}
]},
{"id":"xh_m5_2","title":"Recognize","step":"recognize","meta":"Staples by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ityuwa","o":["ityuwa","iswekile","umgubo"],"a":0},
{"t":"mc","q":"What does iswekile mean?","o":["sugar","salt","maize meal"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umgubo","o":["umgubo","amafutha","ityuwa"],"a":0},
{"t":"mc","q":"Which one means cooking oil?","o":["amafutha","umgubo","iswekile"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amafutha","o":["amafutha","umgubo","iswekile"],"a":0},
{"t":"mc","q":"Pap and umphokoqo begin as…","o":["umgubo","iswekile","amafutha"],"a":0}
]},
{"id":"xh_m5_3","title":"Build","step":"build","meta":"Stock the shelf","vocab":[],"ex":[
{"t":"fill","q":"Complete: sugar","s":"isweki___","o":["le","la","li"],"a":0},
{"t":"wb","q":"Build: I want to buy sugar","a":["ndifuna","ukuthenga","iswekile"],"pool":["ndifuna","ukuthenga","iswekile","ityuwa"]},
{"t":"fill","q":"Complete: salt","s":"ityu___","o":["wa","va","ba"],"a":0},
{"t":"wb","q":"Build the word: maize meal","a":["umgubo"],"pool":["umgubo","amafutha","iswekile"]},
{"t":"li","q":"Which one do you hear?","say":"iswekile","o":["iswekile","ityuwa","amafutha"],"a":0}
]},
{"id":"xh_m5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["iswekile","sugar"],["ityuwa","salt"]]},
{"t":"li","q":"Which one do you hear?","say":"umgubo","o":["umgubo","iswekile","amafutha"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["amafutha","cooking oil"],["umgubo","maize meal"]]},
{"t":"mc","q":"Ndicela iswekile at the spaza gets you…","o":["sugar","salt","oil"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ityuwa","o":["ityuwa","umgubo","iswekile"],"a":0}
]},
{"id":"xh_m5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does umgubo mean?","o":["maize meal","sugar","cooking oil"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amafutha","o":["amafutha","ityuwa","umgubo"],"a":0},
{"t":"mc","q":"Which one means salt?","o":["ityuwa","iswekile","amafutha"],"a":0},
{"t":"mc","q":"iswekile came from the Afrikaans word for…","o":["sugar","sweets","syrup"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iswekile","o":["iswekile","amafutha","ityuwa"],"a":0},
{"t":"mc","q":"Review — which one means spoon?","o":["icephe","imela","ikomityi"],"a":0},
{"t":"mc","q":"Review — which means “yard”?","o":["iyadi","phezulu","ikhitshi"],"a":0},
{"t":"mc","q":"Review — which means “dishes”?","o":["izitya","isitya","ikomityi"],"a":0},
{"t":"mc","q":"Review — which means “bottle”?","o":["ibhotile","ikhitshi","ndihlamba"],"a":0},
{"t":"mc","q":"Review — which means “no thank you”?","o":["hayi enkosi","Ndifuna ukutya","Ndisela iti"],"a":0}
]},

/* ---------- m6 · Too expensive! ---------- */
{"id":"xh_m6","title":"Too expensive!","step":"learn","meta":"Iyadura — and talking the price down","vocab":[["iyadura","ee-yah-DOO-rah","it is expensive"],["ayiduri","ah-yee-DOO-ree","it is not expensive"],["itshiphu","ee-TSHEE-poo","it is cheap"],["Yehlisa ixabiso","yeh-HLEE-sah ee-xah-BEE-saw","lower the price"]],"ex":[
{"t":"note","tag":"Too expensive","q":"Iyadura","body":"<p><b>Iyadura</b> — <i>it is expensive</i> (duur, via Afrikaans). Said with feeling at every till in the country.</p>","eg":[["iyadura","ee-yah-DOO-rah","it is expensive"]]},
{"t":"li","q":"Which one do you hear?","say":"iyadura","o":["iyadura","Yimalini?"],"a":0},
{"t":"mc","q":"What does iyadura mean?","o":["it is expensive","it is cheap","it is broken"],"a":0},
{"t":"note","tag":"The wrap returns","q":"Ayiduri — not expensive","body":"<p>The a-…-i negative wrap you met on andithandi works on things too: <b>ayiduri</b> — <i>it is not expensive</i>. And for good news there is <b>itshiphu</b> — <i>it is cheap</i>.</p>","eg":[["ayiduri","ah-yee-DOO-ree","it is not expensive"],["itshiphu","ee-TSHEE-poo","it is cheap"]]},
{"t":"li","q":"Which one do you hear?","say":"ayiduri","o":["ayiduri","iyadura"],"a":0},
{"t":"mc","q":"ayiduri means…","o":["it is not expensive","it is very expensive","it is not cheap"],"a":0},
{"t":"note","tag":"Talking it down","q":"Yehlisa ixabiso","body":"<p>At a market stall — never at the spaza or a shop till, where prices are fixed — you may try: <b>Yehlisa ixabiso</b> — <i>lower the price</i>. Smile when you say it.</p>","eg":[["Yehlisa ixabiso","yeh-HLEE-sah ee-xah-BEE-saw","lower the price"]]},
{"t":"li","q":"Which one do you hear?","say":"Yehlisa ixabiso","o":["Yehlisa ixabiso","itshiphu"],"a":0},
{"t":"mc","q":"Yehlisa ixabiso belongs…","o":["at a market stall","at the spaza","at the bank"],"a":0}
]},
{"id":"xh_m6_2","title":"Recognize","step":"recognize","meta":"Price feelings by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"itshiphu","o":["itshiphu","iyadura","ayiduri"],"a":0},
{"t":"mc","q":"What does itshiphu mean?","o":["it is cheap","it is expensive","it is small"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iyadura","o":["iyadura","ayiduri","itshiphu"],"a":0},
{"t":"mc","q":"Which one means lower the price?","o":["Yehlisa ixabiso","Yimalini le?","Nantsi imali"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Yehlisa ixabiso","o":["Yehlisa ixabiso","iyadura","itshiphu"],"a":0},
{"t":"mc","q":"The a-…-i wrap in ayiduri does what andithandi did — it makes the verb…","o":["negative","past","polite"],"a":0}
]},
{"id":"xh_m6_3","title":"Build","step":"build","meta":"Argue the number","vocab":[],"ex":[
{"t":"fill","q":"Complete: it is expensive","s":"iyadu___","o":["ra","ri","re"],"a":0},
{"t":"wb","q":"Build: lower the price","a":["yehlisa","ixabiso"],"pool":["yehlisa","ixabiso","iyadura"]},
{"t":"fill","q":"Complete: it is NOT expensive","s":"ayidu___","o":["ri","ra","ru"],"a":0},
{"t":"wb","q":"Build the word: it is cheap","a":["itshiphu"],"pool":["itshiphu","iyadura","ayiduri"]},
{"t":"li","q":"Which one do you hear?","say":"ayiduri","o":["ayiduri","iyadura","Yehlisa ixabiso"],"a":0}
]},
{"id":"xh_m6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["iyadura","it is expensive"],["itshiphu","it is cheap"]]},
{"t":"li","q":"Which one do you hear?","say":"iyadura","o":["iyadura","itshiphu","ayiduri"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ayiduri","it is not expensive"],["Yehlisa ixabiso","lower the price"]]},
{"t":"mc","q":"Hayi, iyadura! Yehlisa ixabiso! — the shopper is…","o":["bargaining","paying","leaving"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"itshiphu","o":["itshiphu","ayiduri","iyadura"],"a":0}
]},
{"id":"xh_m6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ayiduri mean?","o":["it is not expensive","it is expensive","it is not cheap"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Yehlisa ixabiso","o":["Yehlisa ixabiso","iyadura","ayiduri"],"a":0},
{"t":"mc","q":"Which one means it is cheap?","o":["itshiphu","iyadura","ayiduri"],"a":0},
{"t":"mc","q":"Where are prices NOT negotiable?","o":["the spaza and shop tills","market stalls","street vendors"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iyadura","o":["iyadura","itshiphu","Yehlisa ixabiso"],"a":0},
{"t":"mc","q":"Review — phezulu means…","o":["up","down","near"],"a":0},
{"t":"mc","q":"Review — which means “chair”?","o":["isitulo","ifestile","isipili"],"a":0},
{"t":"mc","q":"Review — which means “mirrors”?","o":["izipili","umbane","phezulu"],"a":0},
{"t":"mc","q":"Review — which means “knife”?","o":["imela","phezulu","endlwini"],"a":0},
{"t":"mc","q":"Review — which means “what do you want?”","o":["Ufuna ntoni?","Uphi umama?","Uhlala phi?"],"a":0}
]},

/* ---------- m7 · Have you got it? ---------- */
{"id":"xh_m7","title":"Have you got it?","step":"learn","meta":"Unayo? — the whole shop in three words","vocab":[["Unayo iswekile?","oo-NAH-yaw ee-sweh-KEE-leh","do you have sugar?"],["Ndinayo","ndee-NAH-yaw","I have it"],["Andinayo","ahn-dee-NAH-yaw","I do not have it"]],"ex":[
{"t":"note","tag":"The counter question","q":"Unayo …?","body":"<p><b>Unayo iswekile?</b> — <i>do you have sugar?</i> U- you, -na- with, -yo it: do-you-with-it. Swap the last word for anything on your list.</p>","eg":[["Unayo iswekile?","oo-NAH-yaw ee-sweh-KEE-leh","do you have sugar?"]]},
{"t":"li","q":"Which one do you hear?","say":"Unayo iswekile?","o":["Unayo iswekile?","iswekile"],"a":0},
{"t":"mc","q":"Unayo iswekile? asks…","o":["do you have sugar?","how much is sugar?","is the sugar fresh?"],"a":0},
{"t":"note","tag":"Yes and no","q":"Ndinayo, andinayo","body":"<p>The answers mirror the question: <b>Ndinayo</b> — <i>I have it</i> — or, with the negative a- in front, <b>Andinayo</b> — <i>I do not have it</i>. Ewe, ndinayo. Hayi, andinayo.</p>","eg":[["Ndinayo","ndee-NAH-yaw","I have it"],["Andinayo","ahn-dee-NAH-yaw","I do not have it"]]},
{"t":"li","q":"Have or have not — which do you hear?","say":"Ndinayo","o":["Ndinayo","Andinayo"],"a":0},
{"t":"mc","q":"Andinayo means…","o":["I do not have it","I have it","I want it"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Andinayo","o":["Andinayo","Unayo iswekile?"],"a":0},
{"t":"mc","q":"Hayi, andinayo — the spaza is out of it. Your next stop…","o":["ivenkile","irenki","isikolo"],"a":0}
]},
{"id":"xh_m7_2","title":"Recognize","step":"recognize","meta":"Have and have-not by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Ndinayo","o":["Ndinayo","Andinayo","Unayo iswekile?"],"a":0},
{"t":"mc","q":"What does Ndinayo mean?","o":["I have it","I do not have it","do you have it?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Unayo iswekile?","o":["Unayo iswekile?","Ndinayo","Andinayo"],"a":0},
{"t":"mc","q":"Which one means I do not have it?","o":["Andinayo","Ndinayo","Unayo iswekile?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Andinayo","o":["Andinayo","Ndinayo","Unayo iswekile?"],"a":0},
{"t":"mc","q":"The a- at the front of Andinayo is the same a- that made…","o":["andithandi","amanzi","apha"],"a":0}
]},
{"id":"xh_m7_3","title":"Build","step":"build","meta":"Ask and answer","vocab":[],"ex":[
{"t":"fill","q":"Complete: do you have sugar?","s":"U___yo iswekile?","o":["na","ya","nga"],"a":0},
{"t":"wb","q":"Build: do you have sugar?","a":["unayo","iswekile?"],"pool":["unayo","iswekile?","ndinayo"]},
{"t":"fill","q":"Complete: I do NOT have it","s":"___dinayo","o":["An","Ndi","U"],"a":0},
{"t":"wb","q":"Build the word: I have it","a":["ndinayo"],"pool":["ndinayo","andinayo","unayo"]},
{"t":"li","q":"Which one do you hear?","say":"Unayo iswekile?","o":["Unayo iswekile?","Andinayo","Ndinayo"],"a":0}
]},
{"id":"xh_m7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Unayo iswekile?","do you have sugar?"],["Ndinayo","I have it"],["Andinayo","I do not have it"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndinayo","o":["Ndinayo","Unayo iswekile?","Andinayo"],"a":0},
{"t":"mc","q":"Unayo umgubo? — Ewe, … Complete the happy answer.","o":["ndinayo","andinayo","yimalini"],"a":0},
{"t":"mc","q":"To ask about salt instead of sugar, swap iswekile for…","o":["ityuwa","umgubo","amafutha"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Andinayo","o":["Andinayo","Ndinayo","Unayo iswekile?"],"a":0}
]},
{"id":"xh_m7_5","title":"Checkpoint","step":"checkpoint","meta":"Shopping and money — show it all","vocab":[],"ex":[
{"t":"mc","q":"Unayo iswekile? — Hayi, … The sad answer is…","o":["andinayo","ndinayo","nantsi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Unayo iswekile?","o":["Unayo iswekile?","Ndinayo","Andinayo"],"a":0},
{"t":"mc","q":"Review — Yimalini? asks…","o":["how much is it?","do you have it?","where is it?"],"a":0},
{"t":"mc","q":"Review — which one means I sell?","o":["ndithengisa","ndithenga","ukuthenga"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"Yehlisa ixabiso","o":["Yehlisa ixabiso","Nantsi imali","lishumi leerandi"],"a":0},
{"t":"mc","q":"Review — which one means maize meal?","o":["umgubo","iswekile","amafutha"],"a":0},
{"t":"mc","q":"Review — eli is the this-word for…","o":["iqanda","imali","isitya"],"a":0},
{"t":"mc","q":"Review — which means “where is the car?”","o":["Iphi imoto?","Uvela phi?","Ikufuphi?"],"a":0},
{"t":"mc","q":"Review — which means “pot”?","o":["imbiza","ndipheka","phezulu"],"a":0},
{"t":"mc","q":"Review — which means “I want food”?","o":["Ndifuna ukutya","Ndicela amanzi","Ndisela iti"],"a":0}
]},

/* ---------- w1 · Work ---------- */
{"id":"xh_w1","title":"Work","step":"learn","meta":"Umsebenzi — and the little -ya- that comes and goes","vocab":[["umsebenzi","oom-seh-BEHN-zee","work"],["ndiyasebenza","ndee-yah-seh-BEHN-zah","I work"],["Usebenza phi?","oo-seh-BEHN-zah PEE","where do you work?"],["Ndisebenza edolophini","ndee-seh-BEHN-zah eh-daw-law-PEE-nee","I work in town"]],"ex":[
{"t":"note","tag":"The word for it","q":"Umsebenzi","body":"<p><b>Umsebenzi</b> — <i>work, a job</i>. Also what you call the work itself: good work, hard work, no work — one word carries them all.</p>","eg":[["umsebenzi","oom-seh-BEHN-zee","work"]]},
{"t":"li","q":"Which one do you hear?","say":"umsebenzi","o":["umsebenzi","imali"],"a":0},
{"t":"mc","q":"What does umsebenzi mean?","o":["work","money","school"],"a":0},
{"t":"note","tag":"The long form","q":"Ndiyasebenza — the -ya- long form","body":"<p><b>Ndiyasebenza</b> — <i>I work</i>. Hear the extra -ya-? Xhosa slips it in when the verb stands alone at the end. Add a place and it drops out: <b>Ndisebenza edolophini</b> — <i>I work in town</i>. You have heard this all along — ndiyavuya, but ndifunda isiXhosa.</p>","eg":[["ndiyasebenza","ndee-yah-seh-BEHN-zah","I work"],["Ndisebenza edolophini","ndee-seh-BEHN-zah eh-daw-law-PEE-nee","I work in town"]]},
{"t":"li","q":"Long or short — which do you hear?","say":"ndiyasebenza","o":["ndiyasebenza","Ndisebenza edolophini"],"a":0},
{"t":"mc","q":"The -ya- appears when the verb…","o":["stands alone at the end","has an object after it","is negative"],"a":0},
{"t":"note","tag":"The question","q":"Usebenza phi?","body":"<p><b>Usebenza phi?</b> — <i>where do you work?</i> — the phi of Uphi and Uya phi?, doing its where-work on a new verb. Answer with your locatives: Ndisebenza edolophini, esikolweni, evenkileni…</p>","eg":[["Usebenza phi?","oo-seh-BEHN-zah PEE","where do you work?"]]},
{"t":"li","q":"Which one do you hear?","say":"Usebenza phi?","o":["Usebenza phi?","ndiyasebenza"],"a":0},
{"t":"mc","q":"Usebenza phi? asks…","o":["where do you work?","do you work?","when do you work?"],"a":0}
]},
{"id":"xh_w1_2","title":"Recognize","step":"recognize","meta":"Work talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Ndisebenza edolophini","o":["Ndisebenza edolophini","ndiyasebenza","Usebenza phi?"],"a":0},
{"t":"mc","q":"What does ndiyasebenza mean?","o":["I work","I study","I rest"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umsebenzi","o":["umsebenzi","ndiyasebenza","Usebenza phi?"],"a":0},
{"t":"mc","q":"Which one means I work in town?","o":["Ndisebenza edolophini","Ndiya edolophini","ndiyasebenza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Usebenza phi?","o":["Usebenza phi?","umsebenzi","Ndisebenza edolophini"],"a":0},
{"t":"mc","q":"Usebenza phi? — the natural answer starts…","o":["Ndisebenza…","Ndiya…","Yimalini…"],"a":0}
]},
{"id":"xh_w1_3","title":"Build","step":"build","meta":"Long form, short form","vocab":[],"ex":[
{"t":"fill","q":"Complete: I work (verb standing alone)","s":"Ndi___sebenza","o":["ya","yo","wa"],"a":0},
{"t":"wb","q":"Build: I work in town","a":["ndisebenza","edolophini"],"pool":["ndisebenza","edolophini","ndiyasebenza"]},
{"t":"fill","q":"Complete: work","s":"umsebe___i","o":["nz","ns","z"],"a":0},
{"t":"wb","q":"Build: where do you work?","a":["usebenza","phi?"],"pool":["usebenza","phi?","ndisebenza"]},
{"t":"li","q":"Which one do you hear?","say":"ndiyasebenza","o":["ndiyasebenza","umsebenzi","Usebenza phi?"],"a":0}
]},
{"id":"xh_w1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["umsebenzi","work"],["ndiyasebenza","I work"]]},
{"t":"li","q":"Which one do you hear?","say":"Usebenza phi?","o":["Usebenza phi?","Ndisebenza edolophini","umsebenzi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Usebenza phi?","where do you work?"],["Ndisebenza edolophini","I work in town"]]},
{"t":"mc","q":"Why ndiyavuya but ndifunda isiXhosa?","o":["-ya- drops when something follows the verb","-ya- marks happiness","they are different tenses"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umsebenzi","o":["umsebenzi","ndiyasebenza","Ndisebenza edolophini"],"a":0}
]},
{"id":"xh_w1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does umsebenzi mean?","o":["work","worker","school"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndisebenza edolophini","o":["Ndisebenza edolophini","Usebenza phi?","ndiyasebenza"],"a":0},
{"t":"mc","q":"Which one means where do you work?","o":["Usebenza phi?","Uya phi?","Uphi umsebenzi?"],"a":0},
{"t":"mc","q":"I work at the shop would be Ndisebenza…","o":["evenkileni","ivenkile","ekhitshini"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyasebenza","o":["ndiyasebenza","umsebenzi","Ndisebenza edolophini"],"a":0},
{"t":"mc","q":"Review — which one means taxi?","o":["iteksi","irenki","indlela"],"a":0},
{"t":"mc","q":"Review — which means “shop”?","o":["ivenkile","evenkileni","indlela"],"a":0},
{"t":"mc","q":"Review — which means “in town”?","o":["edolophini","ndiya","uncedo"],"a":0},
{"t":"mc","q":"Review — which means “is it near?”","o":["Ikufuphi?","Uya phi?","Uyayazi indlela?"],"a":0},
{"t":"mc","q":"Review — which means “month”?","o":["inyanga","iCawa","unyaka"],"a":0}
]},

/* ---------- w2 · At school ---------- */
{"id":"xh_w2","title":"At school","step":"learn","meta":"Teacher and learner — and both plurals you own","vocab":[["utitshala","oo-tee-TSHAH-lah","teacher"],["umfundi","oom-FOON-dee","learner"],["ootitshala","aw-tee-TSHAH-lah","teachers"],["abafundi","ah-bah-FOON-dee","learners"]],"ex":[
{"t":"note","tag":"The two of the classroom","q":"Utitshala and umfundi","body":"<p><b>Utitshala</b> — <i>the teacher</i>. <b>Umfundi</b> — <i>the learner</i> (South African schools say learner, not pupil) — funda, to learn, wearing a person-prefix.</p>","eg":[["utitshala","oo-tee-TSHAH-lah","teacher"],["umfundi","oom-FOON-dee","learner"]]},
{"t":"li","q":"Which one do you hear?","say":"utitshala","o":["utitshala","umfundi"],"a":0},
{"t":"mc","q":"What does umfundi mean?","o":["learner","teacher","school"],"a":0},
{"t":"note","tag":"Old friends","q":"Both plurals at once","body":"<p>Watch your two people-plurals work side by side: utitshala is a u- name-like word, so its plural is <b>ootitshala</b> — <i>teachers</i>. Umfundi is an um- word, so its plural is <b>abafundi</b> — <i>learners</i>. Nothing new — just the rules you own, earning rent.</p>","eg":[["ootitshala","aw-tee-TSHAH-lah","teachers"],["abafundi","ah-bah-FOON-dee","learners"]]},
{"t":"li","q":"One or many — which do you hear?","say":"abafundi","o":["abafundi","umfundi"],"a":0},
{"t":"mc","q":"The plural of utitshala is…","o":["ootitshala","abatitshala","iititshala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ootitshala","o":["ootitshala","utitshala"],"a":0},
{"t":"mc","q":"umfundi goes to abafundi because umfundi is…","o":["an um- person word","a u- name word","an isi- thing word"],"a":0}
]},
{"id":"xh_w2_2","title":"Recognize","step":"recognize","meta":"School people by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"umfundi","o":["umfundi","utitshala","abafundi"],"a":0},
{"t":"mc","q":"What does utitshala mean?","o":["teacher","learner","principal"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ootitshala","o":["ootitshala","abafundi","utitshala"],"a":0},
{"t":"mc","q":"Which one means learners?","o":["abafundi","ootitshala","umfundi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"abafundi","o":["abafundi","ootitshala","umfundi"],"a":0},
{"t":"mc","q":"South African schools call a pupil a…","o":["learner","student","scholar"],"a":0}
]},
{"id":"xh_w2_3","title":"Build","step":"build","meta":"People and their plurals","vocab":[],"ex":[
{"t":"fill","q":"Complete: teacher","s":"utitsha___","o":["la","lo","li"],"a":0},
{"t":"wb","q":"Build the word: learners","a":["abafundi"],"pool":["abafundi","umfundi","ootitshala"]},
{"t":"fill","q":"Complete: teachers","s":"___titshala","o":["oo","aba","ama"],"a":0},
{"t":"wb","q":"Build the word: learner","a":["umfundi"],"pool":["umfundi","abafundi","utitshala"]},
{"t":"li","q":"Which one do you hear?","say":"utitshala","o":["utitshala","umfundi","ootitshala"],"a":0}
]},
{"id":"xh_w2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match singular to plural","pairs":[["utitshala","ootitshala"],["umfundi","abafundi"]]},
{"t":"li","q":"Which one do you hear?","say":"ootitshala","o":["ootitshala","abafundi","utitshala"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["utitshala","teacher"],["umfundi","learner"],["abafundi","learners"]]},
{"t":"mc","q":"The funda inside umfundi means…","o":["learn","teach","read aloud only"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umfundi","o":["umfundi","utitshala","abafundi"],"a":0}
]},
{"id":"xh_w2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does abafundi mean?","o":["learners","teachers","schools"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"abafundi","o":["abafundi","ootitshala","umfundi"],"a":0},
{"t":"mc","q":"Which one means teachers?","o":["ootitshala","utitshala","abafundi"],"a":0},
{"t":"mc","q":"Umfundi ufunda esikolweni — the learner learns…","o":["at school","at home","in town"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"utitshala","o":["utitshala","ootitshala","abafundi"],"a":0},
{"t":"mc","q":"Review — kufuphi means…","o":["near","far","here"],"a":0},
{"t":"mc","q":"Review — which means “school”?","o":["isikolo","kufuphi","edolophini"],"a":0},
{"t":"mc","q":"Review — which means “I am going to town”?","o":["Ndiya edolophini","Ivenkile ikufuphi","Ndiza kusasa"],"a":0},
{"t":"mc","q":"Review — which means “the shop is near”?","o":["Ivenkile ikufuphi","Ndiza kusasa","Ndihamba ngeteksi"],"a":0},
{"t":"mc","q":"Review — which means “year”?","o":["unyaka","uLwesine","kusasa"],"a":0}
]},

/* ---------- w3 · The fourth pair ---------- */
{"id":"xh_w3","title":"The fourth noun pair","step":"learn","meta":"Um- things go to imi-","vocab":[["imisebenzi","ee-mee-seh-BEHN-zee","jobs"],["umzi","oom-ZEE","homestead"],["imizi","ee-MEE-zee","homesteads"]],"ex":[
{"t":"note","tag":"Not people this time","q":"Um- things go to imi-","body":"<p>Um- PEOPLE go to aba- — you know that. Um- THINGS take a different road: <b>imi-</b>. One umsebenzi, many <b>imisebenzi</b> — <i>jobs</i>. Your fourth and last big plural pair.</p>","eg":[["imisebenzi","ee-mee-seh-BEHN-zee","jobs"]]},
{"t":"li","q":"One or many — which do you hear?","say":"imisebenzi","o":["imisebenzi","umsebenzi"],"a":0},
{"t":"mc","q":"imisebenzi means…","o":["jobs","workers","job"],"a":0},
{"t":"note","tag":"The Eastern Cape word","q":"Umzi","body":"<p><b>Umzi</b> — <i>a homestead</i>: the family place, houses and kraal and yard together, the word behind so many town names (Umzimkhulu, the great homestead). Many of them: <b>imizi</b>.</p>","eg":[["umzi","oom-ZEE","homestead"],["imizi","ee-MEE-zee","homesteads"]]},
{"t":"li","q":"Which one do you hear?","say":"umzi","o":["umzi","imizi"],"a":0},
{"t":"mc","q":"What does umzi mean?","o":["homestead","house","village shop"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"imizi","o":["imizi","imisebenzi"],"a":0},
{"t":"mc","q":"Your four plural pairs, complete…","o":["um-/aba-, oo-, isi-/izi-, um-/imi-","only um-/aba-","i-/ama- alone"],"a":0}
]},
{"id":"xh_w3_2","title":"Recognize","step":"recognize","meta":"Um- and imi- by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"imisebenzi","o":["imisebenzi","imizi","umzi"],"a":0},
{"t":"mc","q":"The plural of umsebenzi is…","o":["imisebenzi","abasebenzi","oosebenzi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"imizi","o":["imizi","umzi","imisebenzi"],"a":0},
{"t":"mc","q":"Which one means homesteads?","o":["imizi","umzi","imisebenzi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umzi","o":["umzi","imizi","umsebenzi"],"a":0},
{"t":"mc","q":"Umzimkhulu, the town name, means…","o":["the great homestead","the long river","the old road"],"a":0}
]},
{"id":"xh_w3_3","title":"Build","step":"build","meta":"Swap um- for imi-","vocab":[],"ex":[
{"t":"fill","q":"Complete: jobs","s":"___sebenzi","o":["imi","aba","izi"],"a":0},
{"t":"wb","q":"Build the word: homesteads","a":["imizi"],"pool":["imizi","umzi","imisebenzi"]},
{"t":"fill","q":"Complete: homestead (just one)","s":"um___","o":["zi","zo","za"],"a":0},
{"t":"wb","q":"Build the word: jobs","a":["imisebenzi"],"pool":["imisebenzi","umsebenzi","imizi"]},
{"t":"li","q":"Which one do you hear?","say":"imisebenzi","o":["imisebenzi","umzi","imizi"],"a":0}
]},
{"id":"xh_w3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match singular to plural","pairs":[["umsebenzi","imisebenzi"],["umzi","imizi"]]},
{"t":"li","q":"Which one do you hear?","say":"umzi","o":["umzi","imisebenzi","imizi"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["imisebenzi","jobs"],["umzi","homestead"],["imizi","homesteads"]]},
{"t":"mc","q":"umntu goes to abantu but umzi goes to imizi because…","o":["people take aba-, things take imi-","umzi is borrowed","there is no rule"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"imizi","o":["imizi","umzi","imisebenzi"],"a":0}
]},
{"id":"xh_w3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does imisebenzi mean?","o":["jobs","workers","homesteads"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"imizi","o":["imizi","imisebenzi","umzi"],"a":0},
{"t":"mc","q":"The plural of umzi is…","o":["imizi","abazi","oomzi"],"a":0},
{"t":"mc","q":"Which one means homestead?","o":["umzi","indlu","iyadi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"imisebenzi","o":["imisebenzi","imizi","umzi"],"a":0},
{"t":"mc","q":"Review — which one means at the shop?","o":["evenkileni","edolophini","esikolweni"],"a":0},
{"t":"mc","q":"Review — which means “road”?","o":["indlela","esikolweni","evenkileni"],"a":0},
{"t":"mc","q":"Review — which means “I go by taxi”?","o":["Ndihamba ngeteksi","Ndiza kusasa","Sihamba ngoku"],"a":0},
{"t":"mc","q":"Review — which means “I am lost”?","o":["Ndilahlekile","ivenkile","esikolweni"],"a":0},
{"t":"mc","q":"Review — which means “every day”?","o":["yonke imihla","Ndiya edolophini","eli qanda"],"a":0}
]},

/* ---------- w4 · Doing words ---------- */
{"id":"xh_w4","title":"Everyday verbs","step":"learn","meta":"Write, teach — and the teacher who teaches","vocab":[["ndibhala","ndee-BHAH-lah","I write"],["ndifundisa","ndee-foon-DEE-sah","I teach"],["Utitshala uyafundisa","oo-tee-TSHAH-lah oo-yah-foon-DEE-sah","the teacher teaches"]],"ex":[
{"t":"note","tag":"Pen to paper","q":"Ndibhala","body":"<p><b>Ndibhala</b> — <i>I write</i> — with the breathy bh of ibhedi and bhuti. Ndibhala incwadi: I write a letter (incwadi is letter as well as book).</p>","eg":[["ndibhala","ndee-BHAH-lah","I write"]]},
{"t":"li","q":"Which one do you hear?","say":"ndibhala","o":["ndibhala","ndifunda"],"a":0},
{"t":"mc","q":"What does ndibhala mean?","o":["I write","I read","I teach"],"a":0},
{"t":"note","tag":"The -isa trick again","q":"Funda becomes fundisa","body":"<p>Zone 8 taught you -isa, the make-it-happen ending: thenga buy, thengisa sell. It works everywhere: funda <i>learn</i>, <b>ndifundisa</b> — <i>I teach</i>, literally I-make-learn.</p>","eg":[["ndifundisa","ndee-foon-DEE-sah","I teach"]]},
{"t":"li","q":"Learn or teach — which do you hear?","say":"ndifundisa","o":["ndifundisa","ndifunda"],"a":0},
{"t":"mc","q":"ndifundisa literally means…","o":["I make learn","I learn hard","I learn again"],"a":0},
{"t":"note","tag":"Someone else does it","q":"Utitshala uyafundisa","body":"<p>Third person: a person&rsquo;s doing-prefix is u-, and the lonely verb takes -ya-: <b>Utitshala uyafundisa</b> — <i>the teacher teaches</i>. Umfundi uyafunda, umama uyapheka — the pattern is everywhere now.</p>","eg":[["Utitshala uyafundisa","oo-tee-TSHAH-lah oo-yah-foon-DEE-sah","the teacher teaches"]]},
{"t":"li","q":"Which one do you hear?","say":"Utitshala uyafundisa","o":["Utitshala uyafundisa","ndifundisa"],"a":0},
{"t":"mc","q":"Utitshala uyafundisa means…","o":["the teacher teaches","the teacher learns","I teach the teacher"],"a":0}
]},
{"id":"xh_w4_2","title":"Recognize","step":"recognize","meta":"Classroom verbs by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndifundisa","o":["ndifundisa","ndibhala","Utitshala uyafundisa"],"a":0},
{"t":"mc","q":"What does ndifundisa mean?","o":["I teach","I learn","I write"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndibhala","o":["ndibhala","ndifundisa","ndithetha"],"a":0},
{"t":"mc","q":"Which one means the teacher teaches?","o":["Utitshala uyafundisa","Umfundi uyafunda","ndifundisa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Utitshala uyafundisa","o":["Utitshala uyafundisa","ndifundisa","ndibhala"],"a":0},
{"t":"mc","q":"thenga:thengisa as funda:…","o":["fundisa","funde","fundile"],"a":0}
]},
{"id":"xh_w4_3","title":"Build","step":"build","meta":"Verbs at the chalkboard","vocab":[],"ex":[
{"t":"fill","q":"Complete: I write","s":"Ndi___ala","o":["bh","b","p"],"a":0},
{"t":"wb","q":"Build: the teacher teaches","a":["utitshala","uyafundisa"],"pool":["utitshala","uyafundisa","ndifundisa"]},
{"t":"fill","q":"Complete: I teach (I make learn)","s":"Ndifundi___","o":["sa","za","la"],"a":0},
{"t":"wb","q":"Build the word: I write","a":["ndibhala"],"pool":["ndibhala","ndifundisa","ndifunda"]},
{"t":"li","q":"Which one do you hear?","say":"ndifundisa","o":["ndifundisa","Utitshala uyafundisa","ndibhala"],"a":0}
]},
{"id":"xh_w4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndibhala","I write"],["ndifundisa","I teach"],["ndifunda","I learn"]]},
{"t":"li","q":"Which one do you hear?","say":"ndibhala","o":["ndibhala","ndifundisa","Utitshala uyafundisa"],"a":0},
{"t":"match","q":"Match the doer to the deed","pairs":[["utitshala","uyafundisa"],["umfundi","uyafunda"]]},
{"t":"mc","q":"Umama uyapheka uses the same pattern as…","o":["Utitshala uyafundisa","Ndicela uncedo","Yimalini le?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Utitshala uyafundisa","o":["Utitshala uyafundisa","ndibhala","ndifundisa"],"a":0}
]},
{"id":"xh_w4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndibhala mean?","o":["I write","I teach","I read"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndifundisa","o":["ndifundisa","ndibhala","ndifunda"],"a":0},
{"t":"mc","q":"Which one means I teach?","o":["ndifundisa","ndifunda","ndibhala"],"a":0},
{"t":"mc","q":"The -isa in ndifundisa is the same -isa as in…","o":["ndithengisa","ndilambile","ndiyasebenza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Utitshala uyafundisa","o":["Utitshala uyafundisa","ndifundisa","ndibhala"],"a":0},
{"t":"mc","q":"Review — Uya phi? asks…","o":["where are you going?","where do you work?","how are you?"],"a":0},
{"t":"mc","q":"Review — which means “I go”?","o":["ndiya","kude","isikolo"],"a":0},
{"t":"mc","q":"Review — which means “stop!”","o":["Yima!","ndiza","isikolo"],"a":0},
{"t":"mc","q":"Review — which means “please help me”?","o":["Ndicela uncedo","Ndiya edolophini","Ndihamba ngeteksi"],"a":0},
{"t":"mc","q":"Review — which means “I learn Xhosa every day”?","o":["Ndifunda isiXhosa yonke imihla","le mali","sala kakuhle"],"a":0}
]},

/* ---------- w5 · The tools ---------- */
{"id":"xh_w5","title":"The tools","step":"learn","meta":"Pen, phone, computer","vocab":[["ipeni","ee-PEH-nee","pen"],["ifowuni","ee-faw-WOO-nee","phone"],["ikhompyutha","ee-kawm-PYOO-tah","computer"]],"ex":[
{"t":"note","tag":"On the desk","q":"Ipeni","body":"<p><b>Ipeni</b> — <i>pen</i>. What ndibhala happens with. English loans like this wear the i- prefix and behave like any other i- word.</p>","eg":[["ipeni","ee-PEH-nee","pen"]]},
{"t":"li","q":"Which one do you hear?","say":"ipeni","o":["ipeni","incwadi"],"a":0},
{"t":"mc","q":"What does ipeni mean?","o":["pen","paper","book"],"a":0},
{"t":"note","tag":"In every pocket","q":"Ifowuni","body":"<p><b>Ifowuni</b> — <i>phone</i>. Airtime from the spaza, WhatsApp voice notes in isiXhosa — the phone is where the language lives loudest today.</p>","eg":[["ifowuni","ee-faw-WOO-nee","phone"]]},
{"t":"li","q":"Which one do you hear?","say":"ifowuni","o":["ifowuni","ipeni"],"a":0},
{"t":"mc","q":"Which one means phone?","o":["ifowuni","ipeni","incwadi"],"a":0},
{"t":"note","tag":"At the office","q":"Ikhompyutha","body":"<p><b>Ikhompyutha</b> — <i>computer</i>. Say it out loud and hear how Xhosa reshapes borrowed words to fit its own mouth: every syllable open, every vowel full.</p>","eg":[["ikhompyutha","ee-kawm-PYOO-tah","computer"]]},
{"t":"li","q":"Which one do you hear?","say":"ikhompyutha","o":["ikhompyutha","ifowuni"],"a":0},
{"t":"mc","q":"What does ikhompyutha mean?","o":["computer","calculator","keyboard"],"a":0}
]},
{"id":"xh_w5_2","title":"Recognize","step":"recognize","meta":"Desk things by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ifowuni","o":["ifowuni","ikhompyutha","ipeni"],"a":0},
{"t":"mc","q":"What does ipeni mean?","o":["pen","phone","computer"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ikhompyutha","o":["ikhompyutha","ipeni","ifowuni"],"a":0},
{"t":"mc","q":"Which one means computer?","o":["ikhompyutha","ifowuni","ipeni"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ipeni","o":["ipeni","ifowuni","ikhompyutha"],"a":0},
{"t":"mc","q":"Airtime for ifowuni comes from…","o":["ispaza","isikolo","irenki"],"a":0}
]},
{"id":"xh_w5_3","title":"Build","step":"build","meta":"Kit the desk out","vocab":[],"ex":[
{"t":"fill","q":"Complete: phone","s":"ifowu___","o":["ni","ne","na"],"a":0},
{"t":"wb","q":"Build the word: computer","a":["ikhompyutha"],"pool":["ikhompyutha","ifowuni","ipeni"]},
{"t":"fill","q":"Complete: pen","s":"ipe___","o":["ni","na","no"],"a":0},
{"t":"wb","q":"Build: I write with a pen — ndibhala nge…","a":["ngepeni"],"pool":["ngepeni","ipeni","ngefowuni"]},
{"t":"li","q":"Which one do you hear?","say":"ikhompyutha","o":["ikhompyutha","ipeni","ifowuni"],"a":0}
]},
{"id":"xh_w5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ipeni","pen"],["ifowuni","phone"],["ikhompyutha","computer"]]},
{"t":"li","q":"Which one do you hear?","say":"ipeni","o":["ipeni","ikhompyutha","ifowuni"],"a":0},
{"t":"match","q":"Match the tool to its job","pairs":[["ipeni","ndibhala"],["ikhompyutha","ndiyasebenza"]]},
{"t":"mc","q":"ngeteksi is by taxi, so by phone is…","o":["ngefowuni","efowunini","ifowuni"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ifowuni","o":["ifowuni","ipeni","ikhompyutha"],"a":0}
]},
{"id":"xh_w5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ifowuni mean?","o":["phone","pen","computer"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ipeni","o":["ipeni","ifowuni","ikhompyutha"],"a":0},
{"t":"mc","q":"Which one means pen?","o":["ipeni","ikhompyutha","ifowuni"],"a":0},
{"t":"mc","q":"Loanwords like ipeni join Xhosa by taking…","o":["the i- prefix","the um- prefix","no prefix"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ikhompyutha","o":["ikhompyutha","ifowuni","ipeni"],"a":0},
{"t":"mc","q":"Review — which one means help?","o":["uncedo","indlela","imali"],"a":0},
{"t":"mc","q":"Review — which means “I come”?","o":["ndiza","edolophini","esikolweni"],"a":0},
{"t":"mc","q":"Review — which means “taxi rank”?","o":["irenki","kufuphi","uncedo"],"a":0},
{"t":"mc","q":"Review — which means “do you know the way?”","o":["Uyayazi indlela?","Uya phi?","Ikufuphi?"],"a":0},
{"t":"mc","q":"Review — which means “thank you, madam”?","o":["Enkosi mama","Uxolo tata","Lo ngumama wam"],"a":0}
]},

/* ---------- w6 · The working week ---------- */
{"id":"xh_w6","title":"The working week","step":"learn","meta":"Workdays, rest days — and iholide","vocab":[["Ndisebenza ngoMvulo","ndee-seh-BEHN-zah ngaw-MVOO-law","I work on Monday"],["Andisebenzi ngeCawa","ahn-dee-seh-BEHN-zee ngeh-CAH-wah","I do not work on Sunday"],["iholide","ee-haw-LEE-deh","holiday"]],"ex":[
{"t":"note","tag":"Days on duty","q":"Ndisebenza ngoMvulo","body":"<p>Your day-words and your work-verb, together: <b>Ndisebenza ngoMvulo</b> — <i>I work on Monday</i>. The nge-/ngo- day forms from the numbers zone carry the on-.</p>","eg":[["Ndisebenza ngoMvulo","ndee-seh-BEHN-zah ngaw-MVOO-law","I work on Monday"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndisebenza ngoMvulo","o":["Ndisebenza ngoMvulo","ndiyasebenza"],"a":0},
{"t":"mc","q":"Ndisebenza ngoMvulo means…","o":["I work on Monday","I work every day","I worked yesterday"],"a":0},
{"t":"note","tag":"Days off","q":"Andisebenzi ngeCawa","body":"<p>And the day you guard: <b>Andisebenzi ngeCawa</b> — <i>I do not work on Sunday</i>. The a-…-i wrap closes around sebenza exactly as it did around thanda and dura.</p>","eg":[["Andisebenzi ngeCawa","ahn-dee-seh-BEHN-zee ngeh-CAH-wah","I do not work on Sunday"]]},
{"t":"li","q":"Working or not — which do you hear?","say":"Andisebenzi ngeCawa","o":["Andisebenzi ngeCawa","Ndisebenza ngoMvulo"],"a":0},
{"t":"mc","q":"Andisebenzi ngeCawa means…","o":["I do not work on Sunday","I work on Sunday","I rest every day"],"a":0},
{"t":"note","tag":"The holiday word","q":"Iholide","body":"<p><b>Iholide</b> — <i>holiday</i>. South Africa keeps its public holidays generously, and everyone — abafundi and ootitshala most of all — counts the days to the next one.</p>","eg":[["iholide","ee-haw-LEE-deh","holiday"]]},
{"t":"li","q":"Which one do you hear?","say":"iholide","o":["iholide","impelaveki"],"a":0},
{"t":"mc","q":"What does iholide mean?","o":["holiday","weekend","Sunday"],"a":0}
]},
{"id":"xh_w6_2","title":"Recognize","step":"recognize","meta":"Workdays by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Andisebenzi ngeCawa","o":["Andisebenzi ngeCawa","Ndisebenza ngoMvulo","iholide"],"a":0},
{"t":"mc","q":"What does iholide mean?","o":["holiday","workday","weekend"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndisebenza ngoMvulo","o":["Ndisebenza ngoMvulo","Andisebenzi ngeCawa","ndiyasebenza"],"a":0},
{"t":"mc","q":"Which one means I do not work on Sunday?","o":["Andisebenzi ngeCawa","Ndisebenza ngoMvulo","Andinayo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iholide","o":["iholide","Ndisebenza ngoMvulo","Andisebenzi ngeCawa"],"a":0},
{"t":"mc","q":"The negative wrap in Andisebenzi is…","o":["a-…-i","uku-…-a","nge-…-o"],"a":0}
]},
{"id":"xh_w6_3","title":"Build","step":"build","meta":"Duty roster in Xhosa","vocab":[],"ex":[
{"t":"fill","q":"Complete: I do NOT work on Sunday","s":"___sebenzi ngeCawa","o":["Andi","Ndi","Uya"],"a":0},
{"t":"wb","q":"Build: I work on Monday","a":["ndisebenza","ngoMvulo"],"pool":["ndisebenza","ngoMvulo","ngeCawa"]},
{"t":"fill","q":"Complete: holiday","s":"iholi___","o":["de","da","di"],"a":0},
{"t":"wb","q":"Build: I do not work on Sunday","a":["andisebenzi","ngeCawa"],"pool":["andisebenzi","ngeCawa","ngoMvulo"]},
{"t":"li","q":"Which one do you hear?","say":"Ndisebenza ngoMvulo","o":["Ndisebenza ngoMvulo","iholide","Andisebenzi ngeCawa"],"a":0}
]},
{"id":"xh_w6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ndisebenza ngoMvulo","I work on Monday"],["Andisebenzi ngeCawa","I do not work on Sunday"],["iholide","holiday"]]},
{"t":"li","q":"Which one do you hear?","say":"iholide","o":["iholide","Andisebenzi ngeCawa","Ndisebenza ngoMvulo"],"a":0},
{"t":"mc","q":"To say I work on Tuesday, swap ngoMvulo for…","o":["ngoLwesibini","ngeCawa","ngoMgqibelo"],"a":0},
{"t":"mc","q":"Andisebenzi follows the same wrap as…","o":["andithandi and ayiduri","ndiyasebenza","ukuthenga"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Andisebenzi ngeCawa","o":["Andisebenzi ngeCawa","iholide","Ndisebenza ngoMvulo"],"a":0}
]},
{"id":"xh_w6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Andisebenzi ngeCawa mean?","o":["I do not work on Sunday","I work on Sunday","Sunday is a holiday"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndisebenza ngoMvulo","o":["Ndisebenza ngoMvulo","Andisebenzi ngeCawa","iholide"],"a":0},
{"t":"mc","q":"Which one means holiday?","o":["iholide","impelaveki","iCawa"],"a":0},
{"t":"mc","q":"The ngo- in ngoMvulo means…","o":["on","at","by"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iholide","o":["iholide","Ndisebenza ngoMvulo","Andisebenzi ngeCawa"],"a":0},
{"t":"mc","q":"Review — which one means I walk?","o":["ndihamba","ndiya","ndiza"],"a":0},
{"t":"mc","q":"Review — which means “at school”?","o":["esikolweni","uncedo","Yima!"],"a":0},
{"t":"mc","q":"Review — which means “near”?","o":["kufuphi","uncedo","irenki"],"a":0},
{"t":"mc","q":"Review — which means “we are leaving now”?","o":["Sihamba ngoku","Ndiza kusasa","Ndiya edolophini"],"a":0},
{"t":"mc","q":"Review — which means “home”?","o":["ikhaya","sonke","abazali"],"a":0}
]},

/* ---------- w7 · The everyday word ---------- */
{"id":"xh_w7","title":"The everyday word for work","step":"learn","meta":"Ndiyaphangela — how the street says it","vocab":[["ndiyaphangela","ndee-yah-pah-NGEH-lah","I go to work"],["Ufunda ntoni?","oo-FOON-dah NTAW-nee","what do you study?"]],"ex":[
{"t":"note","tag":"Street register","q":"Ukuphangela","body":"<p>Textbooks say sebenza. On the street, at the rank, on the phone, everyday Xhosa says <b>ndiyaphangela</b> — <i>I go to work, I am working</i>. Both are correct; phangela is what you will actually hear in Cape Town on a Monday morning.</p>","eg":[["ndiyaphangela","ndee-yah-pah-NGEH-lah","I go to work"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyaphangela","o":["ndiyaphangela","ndiyasebenza"],"a":0},
{"t":"mc","q":"ndiyaphangela is…","o":["the everyday word for working","slang to avoid","a different job"],"a":0},
{"t":"note","tag":"The student question","q":"Ufunda ntoni?","body":"<p><b>Ufunda ntoni?</b> — <i>what do you study?</i> — the ntoni of Ufuna ntoni?, now asking about learning. Answer with anything: Ndifunda isiXhosa!</p>","eg":[["Ufunda ntoni?","oo-FOON-dah NTAW-nee","what do you study?"]]},
{"t":"li","q":"Which one do you hear?","say":"Ufunda ntoni?","o":["Ufunda ntoni?","ndiyaphangela"],"a":0},
{"t":"mc","q":"Ufunda ntoni? asks…","o":["what do you study?","what do you want?","where do you study?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyaphangela","o":["ndiyaphangela","Ufunda ntoni?"],"a":0},
{"t":"mc","q":"Ufunda ntoni? — Ndifunda … The proudest answer in this app:","o":["isiXhosa","imali","iteksi"],"a":0}
]},
{"id":"xh_w7_2","title":"Recognize","step":"recognize","meta":"Street register by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Ufunda ntoni?","o":["Ufunda ntoni?","ndiyaphangela","ndiyasebenza"],"a":0},
{"t":"mc","q":"What does ndiyaphangela mean?","o":["I go to work","I go to school","I am on holiday"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyaphangela","o":["ndiyaphangela","ndiyasebenza","ndifundisa"],"a":0},
{"t":"mc","q":"Which one means what do you study?","o":["Ufunda ntoni?","Ufuna ntoni?","Usebenza phi?"],"a":0},
{"t":"li","q":"Listen closely — funda or funa?","say":"Ufunda ntoni?","o":["Ufunda ntoni?","Ufuna ntoni?"],"a":0},
{"t":"mc","q":"On a Cape Town Monday morning you will mostly hear…","o":["ndiyaphangela","ndiyasebenza","ndiphumla"],"a":0}
]},
{"id":"xh_w7_3","title":"Build","step":"build","meta":"Say it like the street","vocab":[],"ex":[
{"t":"fill","q":"Complete: I go to work (everyday word)","s":"Ndiyaphange___","o":["la","le","li"],"a":0},
{"t":"wb","q":"Build: what do you study?","a":["ufunda","ntoni?"],"pool":["ufunda","ntoni?","ufuna"]},
{"t":"fill","q":"Complete: the street word for work","s":"ukupha___ela","o":["ng","nk","mb"],"a":0},
{"t":"wb","q":"Build the word: I go to work","a":["ndiyaphangela"],"pool":["ndiyaphangela","ndiyasebenza","ufunda"]},
{"t":"li","q":"Which one do you hear?","say":"Ufunda ntoni?","o":["Ufunda ntoni?","ndiyaphangela","ndibhala"],"a":0}
]},
{"id":"xh_w7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndiyaphangela","I go to work"],["Ufunda ntoni?","what do you study?"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyaphangela","o":["ndiyaphangela","Ufunda ntoni?","ndiyasebenza"],"a":0},
{"t":"match","q":"Match the register","pairs":[["ndiyaphangela","the street says it"],["ndiyasebenza","the textbook says it"]]},
{"t":"mc","q":"Ufunda ntoni? and Ufuna ntoni? differ by…","o":["one nd","their tone","nothing"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ufunda ntoni?","o":["Ufunda ntoni?","ndiyaphangela","ndifundisa"],"a":0}
]},
{"id":"xh_w7_5","title":"Checkpoint","step":"checkpoint","meta":"Work and school — show it all","vocab":[],"ex":[
{"t":"mc","q":"ndiyaphangela means…","o":["I go to work","I go home","I study"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyaphangela","o":["ndiyaphangela","ndiyasebenza","Ufunda ntoni?"],"a":0},
{"t":"mc","q":"Review — the plural of umsebenzi is…","o":["imisebenzi","abasebenzi","oosebenzi"],"a":0},
{"t":"mc","q":"Review — which one means teachers?","o":["ootitshala","abafundi","utitshala"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"Utitshala uyafundisa","o":["Utitshala uyafundisa","ndifundisa","ndibhala"],"a":0},
{"t":"mc","q":"Review — which one means computer?","o":["ikhompyutha","ifowuni","ipeni"],"a":0},
{"t":"mc","q":"Review — which one means it is cheap?","o":["itshiphu","iyadura","ayiduri"],"a":0},
{"t":"mc","q":"Review — which means “far”?","o":["kude","Yima!","edolophini"],"a":0},
{"t":"mc","q":"Review — which means “I am going to school”?","o":["Ndiya esikolweni","Sihamba ngoku","Ndihamba ngeteksi"],"a":0},
{"t":"mc","q":"Review — which means “is father there?”","o":["Ukhona utata?","Unjani umama?","Uphi umama?"],"a":0}
]},

/* ---------- b1 · Head, hand, foot ---------- */
{"id":"xh_b1","title":"Head, hand, foot","step":"learn","meta":"The body begins","vocab":[["intloko","een-TLAW-kaw","head"],["isandla","ee-SAHN-dlah","hand"],["izandla","ee-ZAHN-dlah","hands"],["unyawo","oo-NYAH-waw","foot"]],"ex":[
{"t":"note","tag":"From the top","q":"Intloko","body":"<p><b>Intloko</b> — <i>head</i>. Also the head of anything: the head of the family, the heading of a letter. Bodies and metaphors share it, in Xhosa as in English.</p>","eg":[["intloko","een-TLAW-kaw","head"]]},
{"t":"li","q":"Which one do you hear?","say":"intloko","o":["intloko","indlela"],"a":0},
{"t":"mc","q":"What does intloko mean?","o":["head","hand","foot"],"a":0},
{"t":"note","tag":"A familiar pair","q":"Isandla, izandla","body":"<p><b>Isandla</b> — <i>hand</i> — an isi- word, so you already know its plural before you hear it: <b>izandla</b> — <i>hands</i>. The grammar is starting to pay you back.</p>","eg":[["isandla","ee-SAHN-dlah","hand"],["izandla","ee-ZAHN-dlah","hands"]]},
{"t":"li","q":"One or two — which do you hear?","say":"izandla","o":["izandla","isandla"],"a":0},
{"t":"mc","q":"izandla means…","o":["hands","hand","feet"],"a":0},
{"t":"note","tag":"On the ground","q":"Unyawo","body":"<p><b>Unyawo</b> — <i>foot</i>. What ndihamba runs on. Say the ny like the middle of canyon.</p>","eg":[["unyawo","oo-NYAH-waw","foot"]]},
{"t":"li","q":"Which one do you hear?","say":"unyawo","o":["unyawo","intloko"],"a":0},
{"t":"mc","q":"Which one means foot?","o":["unyawo","isandla","intloko"],"a":0}
]},
{"id":"xh_b1_2","title":"Recognize","step":"recognize","meta":"Body parts by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"isandla","o":["isandla","izandla","unyawo"],"a":0},
{"t":"mc","q":"What does unyawo mean?","o":["foot","hand","head"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"intloko","o":["intloko","unyawo","isandla"],"a":0},
{"t":"mc","q":"Which one means hands?","o":["izandla","isandla","unyawo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izandla","o":["izandla","isandla","intloko"],"a":0},
{"t":"mc","q":"isandla goes to izandla because it is…","o":["an isi- word","an um- word","a u- word"],"a":0}
]},
{"id":"xh_b1_3","title":"Build","step":"build","meta":"Piece by piece","vocab":[],"ex":[
{"t":"fill","q":"Complete: head","s":"intlo___","o":["ko","ka","kho"],"a":0},
{"t":"wb","q":"Build the word: hands","a":["izandla"],"pool":["izandla","isandla","unyawo"]},
{"t":"fill","q":"Complete: foot","s":"unya___","o":["wo","wa","we"],"a":0},
{"t":"wb","q":"Build the word: head","a":["intloko"],"pool":["intloko","unyawo","isandla"]},
{"t":"li","q":"Which one do you hear?","say":"unyawo","o":["unyawo","izandla","intloko"],"a":0}
]},
{"id":"xh_b1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["intloko","head"],["isandla","hand"],["unyawo","foot"]]},
{"t":"li","q":"Which one do you hear?","say":"isandla","o":["isandla","unyawo","izandla"],"a":0},
{"t":"match","q":"Match singular to plural","pairs":[["isandla","izandla"],["isitya","izitya"]]},
{"t":"mc","q":"You wash izandla before…","o":["ukutya","ukulala","ukuhamba"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"intloko","o":["intloko","isandla","unyawo"],"a":0}
]},
{"id":"xh_b1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does isandla mean?","o":["hand","foot","arm"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"izandla","o":["izandla","intloko","unyawo"],"a":0},
{"t":"mc","q":"Which one means head?","o":["intloko","unyawo","isandla"],"a":0},
{"t":"mc","q":"The plural of isandla is…","o":["izandla","amandla","oosandla"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isandla","o":["isandla","izandla","unyawo"],"a":0},
{"t":"mc","q":"Review — which one means money?","o":["imali","ixabiso","irandi"],"a":0},
{"t":"mc","q":"Review — which means “rand”?","o":["irandi","iswekile","ispaza"],"a":0},
{"t":"mc","q":"Review — which means “I sell”?","o":["ndithengisa","ixabiso","ispaza"],"a":0},
{"t":"mc","q":"Review — which means “cooking oil”?","o":["amafutha","iyadura","ityuwa"],"a":0},
{"t":"mc","q":"Review — which means “he is here”?","o":["ukhona","kunye","usisi"],"a":0}
]},

/* ---------- b2 · The face ---------- */
{"id":"xh_b2","title":"The face","step":"learn","meta":"Eye, eyes, ear, mouth — and one famous irregular","vocab":[["iliso","ee-LEE-saw","eye"],["amehlo","ah-MEH-hlaw","eyes"],["indlebe","een-DLEH-beh","ear"],["umlomo","oom-LAW-maw","mouth"]],"ex":[
{"t":"note","tag":"The exception that proves it","q":"Iliso — amehlo","body":"<p><b>Iliso</b> — <i>eye</i> — is an iqanda-type word, so you expect ama-. You get it, with a twist: <b>amehlo</b> — <i>eyes</i>. The oldest words wear their plurals a little bent; this is Xhosa&rsquo;s most famous example.</p>","eg":[["iliso","ee-LEE-saw","eye"],["amehlo","ah-MEH-hlaw","eyes"]]},
{"t":"li","q":"One or two — which do you hear?","say":"amehlo","o":["amehlo","iliso"],"a":0},
{"t":"mc","q":"The plural of iliso is…","o":["amehlo","amaliso","iziliso"],"a":0},
{"t":"note","tag":"Listening gear","q":"Indlebe","body":"<p><b>Indlebe</b> — <i>ear</i>. One letter from indlela, the road — your ear and the road to it. Listening drills are literally indlebe work.</p>","eg":[["indlebe","een-DLEH-beh","ear"]]},
{"t":"li","q":"Ear or road — which do you hear?","say":"indlebe","o":["indlebe","indlela"],"a":0},
{"t":"mc","q":"What does indlebe mean?","o":["ear","eye","road"],"a":0},
{"t":"note","tag":"Where the words come out","q":"Umlomo","body":"<p><b>Umlomo</b> — <i>mouth</i> — where all this isiXhosa finally leaves you and reaches somebody else.</p>","eg":[["umlomo","oom-LAW-maw","mouth"]]},
{"t":"li","q":"Which one do you hear?","say":"umlomo","o":["umlomo","indlebe"],"a":0},
{"t":"mc","q":"Which one means mouth?","o":["umlomo","iliso","indlebe"],"a":0}
]},
{"id":"xh_b2_2","title":"Recognize","step":"recognize","meta":"Face parts by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"iliso","o":["iliso","amehlo","umlomo"],"a":0},
{"t":"mc","q":"What does amehlo mean?","o":["eyes","eye","ears"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umlomo","o":["umlomo","iliso","indlebe"],"a":0},
{"t":"mc","q":"Which one means ear?","o":["indlebe","umlomo","iliso"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amehlo","o":["amehlo","iliso","indlebe"],"a":0},
{"t":"mc","q":"Listening exercises train your…","o":["indlebe","umlomo","amehlo"],"a":0}
]},
{"id":"xh_b2_3","title":"Build","step":"build","meta":"Feature by feature","vocab":[],"ex":[
{"t":"fill","q":"Complete: eyes","s":"ame___o","o":["hl","dl","l"],"a":0},
{"t":"wb","q":"Build the word: mouth","a":["umlomo"],"pool":["umlomo","indlebe","iliso"]},
{"t":"fill","q":"Complete: ear","s":"indle___","o":["be","ba","bo"],"a":0},
{"t":"wb","q":"Build the word: eye (just one)","a":["iliso"],"pool":["iliso","amehlo","umlomo"]},
{"t":"li","q":"Which one do you hear?","say":"indlebe","o":["indlebe","umlomo","amehlo"],"a":0}
]},
{"id":"xh_b2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["iliso","eye"],["amehlo","eyes"],["indlebe","ear"]]},
{"t":"li","q":"Which one do you hear?","say":"umlomo","o":["umlomo","amehlo","iliso"],"a":0},
{"t":"match","q":"Match the part to its work","pairs":[["indlebe","listening"],["umlomo","speaking"],["amehlo","reading"]]},
{"t":"mc","q":"iqanda goes neatly to amaqanda, but iliso bends to…","o":["amehlo","amaliso","amaso"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"iliso","o":["iliso","indlebe","umlomo"],"a":0}
]},
{"id":"xh_b2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does indlebe mean?","o":["ear","eye","mouth"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amehlo","o":["amehlo","umlomo","iliso"],"a":0},
{"t":"mc","q":"Which one means eyes?","o":["amehlo","iliso","izandla"],"a":0},
{"t":"mc","q":"umlomo means…","o":["mouth","nose","face"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umlomo","o":["umlomo","indlebe","amehlo"],"a":0},
{"t":"mc","q":"Review — which one means sugar?","o":["iswekile","ityuwa","umgubo"],"a":0},
{"t":"mc","q":"Review — which means “price”?","o":["ixabiso","imali","ndithenga"],"a":0},
{"t":"mc","q":"Review — which means “I want to buy bread”?","o":["Ndifuna ukuthenga isonka","Nantsi imali","eli qanda"],"a":0},
{"t":"mc","q":"Review — which means “maize meal”?","o":["umgubo","ispaza","iswekile"],"a":0},
{"t":"mc","q":"Review — which means “he is not here”?","o":["akekho","usisi","oobhuti"],"a":0}
]},

/* ---------- b3 · Sick and well ---------- */
{"id":"xh_b3","title":"Sick and well","step":"learn","meta":"Ndiyagula — and the word for pain","vocab":[["ndiyagula","ndee-yah-GOO-lah","I am sick"],["ubuhlungu","oo-boo-HLOON-goo","pain"],["kubuhlungu","koo-boo-HLOON-goo","it hurts"]],"ex":[
{"t":"note","tag":"The honest answer","q":"Ndiyagula","body":"<p>Unjani? does not always get ndiyaphila. Some days the honest answer is <b>ndiyagula</b> — <i>I am sick</i>. There is the -ya- again, holding up a verb with nothing after it.</p>","eg":[["ndiyagula","ndee-yah-GOO-lah","I am sick"]]},
{"t":"li","q":"Well or sick — which do you hear?","say":"ndiyagula","o":["ndiyagula","ndiyaphila"],"a":0},
{"t":"mc","q":"What does ndiyagula mean?","o":["I am sick","I am well","I am tired"],"a":0},
{"t":"note","tag":"Naming it","q":"Ubuhlungu","body":"<p><b>Ubuhlungu</b> — <i>pain</i>. An ubu- word — the prefix Xhosa uses for states and qualities, the same ubu- you will meet in ubuntu.</p>","eg":[["ubuhlungu","oo-boo-HLOON-goo","pain"]]},
{"t":"li","q":"Which one do you hear?","say":"ubuhlungu","o":["ubuhlungu","ndiyagula"],"a":0},
{"t":"mc","q":"ubuhlungu means…","o":["pain","sickness","medicine"],"a":0},
{"t":"note","tag":"Saying it","q":"Kubuhlungu","body":"<p>Put ku- in front and pain becomes a sentence: <b>kubuhlungu</b> — <i>it hurts</i>. Short, complete, and understood in any clinic in the country.</p>","eg":[["kubuhlungu","koo-boo-HLOON-goo","it hurts"]]},
{"t":"li","q":"Which one do you hear?","say":"kubuhlungu","o":["kubuhlungu","ubuhlungu"],"a":0},
{"t":"mc","q":"kubuhlungu means…","o":["it hurts","the pain","I am sick"],"a":0}
]},
{"id":"xh_b3_2","title":"Recognize","step":"recognize","meta":"Sick talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ubuhlungu","o":["ubuhlungu","kubuhlungu","ndiyagula"],"a":0},
{"t":"mc","q":"What does kubuhlungu mean?","o":["it hurts","pain","I am sick"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyagula","o":["ndiyagula","ubuhlungu","kubuhlungu"],"a":0},
{"t":"mc","q":"Which one means pain?","o":["ubuhlungu","kubuhlungu","ndiyagula"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kubuhlungu","o":["kubuhlungu","ndiyagula","ubuhlungu"],"a":0},
{"t":"mc","q":"The ubu- prefix marks…","o":["states and qualities","plurals","places"],"a":0}
]},
{"id":"xh_b3_3","title":"Build","step":"build","meta":"From pain to sentence","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am sick","s":"Ndiyagu___","o":["la","le","li"],"a":0},
{"t":"wb","q":"Build the word: it hurts","a":["kubuhlungu"],"pool":["kubuhlungu","ubuhlungu","ndiyagula"]},
{"t":"fill","q":"Complete: pain","s":"___hlungu","o":["ubu","uku","aba"],"a":0},
{"t":"wb","q":"Build the word: I am sick","a":["ndiyagula"],"pool":["ndiyagula","ndiyaphila","kubuhlungu"]},
{"t":"li","q":"Which one do you hear?","say":"ndiyagula","o":["ndiyagula","kubuhlungu","ubuhlungu"],"a":0}
]},
{"id":"xh_b3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndiyagula","I am sick"],["ubuhlungu","pain"],["kubuhlungu","it hurts"]]},
{"t":"li","q":"Which one do you hear?","say":"ubuhlungu","o":["ubuhlungu","ndiyagula","kubuhlungu"],"a":0},
{"t":"match","q":"Match the state to its opposite","pairs":[["ndiyagula","ndiyaphila"],["iyadura","itshiphu"]]},
{"t":"mc","q":"Unjani? — on a bad day the honest answer is…","o":["ndiyagula","ndiyaphila","molo"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kubuhlungu","o":["kubuhlungu","ubuhlungu","ndiyagula"],"a":0}
]},
{"id":"xh_b3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ubuhlungu mean?","o":["pain","sick","hurt (the verb)"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyagula","o":["ndiyagula","ubuhlungu","kubuhlungu"],"a":0},
{"t":"mc","q":"Which one means it hurts?","o":["kubuhlungu","ubuhlungu","ndiyagula"],"a":0},
{"t":"mc","q":"ndiyagula keeps its -ya- because…","o":["nothing follows the verb","it is negative","gula demands it"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ubuhlungu","o":["ubuhlungu","kubuhlungu","ndiyagula"],"a":0},
{"t":"mc","q":"Review — which one means it is expensive?","o":["iyadura","itshiphu","ayiduri"],"a":0},
{"t":"mc","q":"Review — which means “spaza shop”?","o":["ispaza","Andinayo","imali"],"a":0},
{"t":"mc","q":"Review — which means “this money”?","o":["le mali","lishumi leerandi","Nantsi imali"],"a":0},
{"t":"mc","q":"Review — which means “it is not expensive”?","o":["ayiduri","irandi","itshiphu"],"a":0},
{"t":"mc","q":"Review — which means “where is mother?”","o":["Uphi umama?","Ukhona utata?","Ngubani lo?"],"a":0}
]},

/* ---------- b4 · Where it hurts ---------- */
{"id":"xh_b4","title":"Where it hurts","step":"learn","meta":"Pointing at the pain","vocab":[["isisu","ee-SEE-soo","stomach"],["Intloko ibuhlungu","een-TLAW-kaw ee-boo-HLOON-goo","my head hurts"],["Kubuhlungu apha","koo-boo-HLOON-goo AH-pah","it hurts here"]],"ex":[
{"t":"note","tag":"One more part","q":"Isisu","body":"<p><b>Isisu</b> — <i>stomach</i> — the part most likely to complain, after a wedding or a dodgy braai.</p>","eg":[["isisu","ee-SEE-soo","stomach"]]},
{"t":"li","q":"Which one do you hear?","say":"isisu","o":["isisu","isandla"],"a":0},
{"t":"mc","q":"What does isisu mean?","o":["stomach","chest","back"],"a":0},
{"t":"note","tag":"Naming the ache","q":"Intloko ibuhlungu","body":"<p>Name the part, let its little prefix echo, add buhlungu: <b>Intloko ibuhlungu</b> — <i>my head hurts</i>, literally the-head it-is-painful. Isisu sibuhlungu, unyawo lubuhlungu — the echo changes, the pattern holds.</p>","eg":[["Intloko ibuhlungu","een-TLAW-kaw ee-boo-HLOON-goo","my head hurts"]]},
{"t":"li","q":"Which one do you hear?","say":"Intloko ibuhlungu","o":["Intloko ibuhlungu","kubuhlungu"],"a":0},
{"t":"mc","q":"Intloko ibuhlungu means…","o":["my head hurts","my stomach hurts","I feel dizzy"],"a":0},
{"t":"note","tag":"Or just point","q":"Kubuhlungu apha","body":"<p>No anatomy needed: touch the place and say <b>Kubuhlungu apha</b> — <i>it hurts here</i>. Your apha from the home zone, doing medical work.</p>","eg":[["Kubuhlungu apha","koo-boo-HLOON-goo AH-pah","it hurts here"]]},
{"t":"li","q":"Which one do you hear?","say":"Kubuhlungu apha","o":["Kubuhlungu apha","Intloko ibuhlungu"],"a":0},
{"t":"mc","q":"Kubuhlungu apha means…","o":["it hurts here","it hurts everywhere","my head hurts"],"a":0}
]},
{"id":"xh_b4_2","title":"Recognize","step":"recognize","meta":"Complaints by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Intloko ibuhlungu","o":["Intloko ibuhlungu","Kubuhlungu apha","isisu"],"a":0},
{"t":"mc","q":"What does Kubuhlungu apha mean?","o":["it hurts here","my head hurts","I am sick"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isisu","o":["isisu","intloko","Kubuhlungu apha"],"a":0},
{"t":"mc","q":"Which one means stomach?","o":["isisu","intloko","indlebe"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Kubuhlungu apha","o":["Kubuhlungu apha","Intloko ibuhlungu","isisu"],"a":0},
{"t":"mc","q":"Isisu sibuhlungu would mean…","o":["my stomach hurts","my head hurts","my hand hurts"],"a":0}
]},
{"id":"xh_b4_3","title":"Build","step":"build","meta":"Say where","vocab":[],"ex":[
{"t":"fill","q":"Complete: stomach","s":"isi___","o":["su","sa","so"],"a":0},
{"t":"wb","q":"Build: my head hurts","a":["intloko","ibuhlungu"],"pool":["intloko","ibuhlungu","apha"]},
{"t":"fill","q":"Complete: it hurts HERE","s":"Kubuhlungu a___a","o":["ph","p","f"],"a":0},
{"t":"wb","q":"Build: it hurts here","a":["kubuhlungu","apha"],"pool":["kubuhlungu","apha","intloko"]},
{"t":"li","q":"Which one do you hear?","say":"Intloko ibuhlungu","o":["Intloko ibuhlungu","Kubuhlungu apha","isisu"],"a":0}
]},
{"id":"xh_b4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["isisu","stomach"],["Intloko ibuhlungu","my head hurts"],["Kubuhlungu apha","it hurts here"]]},
{"t":"li","q":"Which one do you hear?","say":"isisu","o":["isisu","Intloko ibuhlungu","Kubuhlungu apha"],"a":0},
{"t":"mc","q":"After a dodgy braai, the complaint is about…","o":["isisu","intloko","unyawo"],"a":0},
{"t":"mc","q":"When you cannot name the part, you point and say…","o":["Kubuhlungu apha","Intloko ibuhlungu","ndiyaphila"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Kubuhlungu apha","o":["Kubuhlungu apha","isisu","Intloko ibuhlungu"],"a":0}
]},
{"id":"xh_b4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does isisu mean?","o":["stomach","head","foot"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Kubuhlungu apha","o":["Kubuhlungu apha","Intloko ibuhlungu","ndiyagula"],"a":0},
{"t":"mc","q":"Which one means my head hurts?","o":["Intloko ibuhlungu","Kubuhlungu apha","ndiyagula"],"a":0},
{"t":"mc","q":"In Intloko ibuhlungu, the i- before buhlungu…","o":["echoes intloko","means here","marks a question"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"isisu","o":["isisu","intloko","unyawo"],"a":0},
{"t":"mc","q":"Review — which one means over there?","o":["phaya","apha","phantsi"],"a":0},
{"t":"mc","q":"Review — which means “how much is it?”","o":["Yimalini?","Unayo iswekile?","Uza nini?"],"a":0},
{"t":"mc","q":"Review — which means “this dish”?","o":["esi sitya","eli qanda","Ndifuna ukuthenga isonka"],"a":0},
{"t":"mc","q":"Review — which means “it is cheap”?","o":["itshiphu","ityuwa","ukuthenga"],"a":0},
{"t":"mc","q":"Review — which means “she is at home”?","o":["usekhaya","isiduko","intsapho"],"a":0}
]},

/* ---------- b5 · The clinic ---------- */
{"id":"xh_b5","title":"The clinic","step":"learn","meta":"Doctor, nurse, medicine","vocab":[["ikliniki","ee-klee-NEE-kee","clinic"],["ugqirha","oo-GQEE-rah","doctor"],["unesi","oo-NEH-see","nurse"],["amayeza","ah-mah-YEH-zah","medicine"]],"ex":[
{"t":"note","tag":"Where you go","q":"Ikliniki","body":"<p><b>Ikliniki</b> — <i>the clinic</i> — the front door of healthcare in every township and village. When kubuhlungu, this is where the road leads.</p>","eg":[["ikliniki","ee-klee-NEE-kee","clinic"]]},
{"t":"li","q":"Which one do you hear?","say":"ikliniki","o":["ikliniki","isikolo"],"a":0},
{"t":"mc","q":"What does ikliniki mean?","o":["clinic","hospital","pharmacy"],"a":0},
{"t":"note","tag":"Who you meet","q":"Ugqirha and unesi","body":"<p><b>Ugqirha</b> — <i>the doctor</i> — with the big gq click in the middle, one of the hardest and proudest sounds in the language. <b>Unesi</b> — <i>the nurse</i>, who in most clinics is the one who actually sees you.</p>","eg":[["ugqirha","oo-GQEE-rah","doctor"],["unesi","oo-NEH-see","nurse"]]},
{"t":"li","q":"Which one do you hear?","say":"ugqirha","o":["ugqirha","unesi"],"a":0},
{"t":"mc","q":"What does unesi mean?","o":["nurse","doctor","patient"],"a":0},
{"t":"note","tag":"What you leave with","q":"Amayeza","body":"<p><b>Amayeza</b> — <i>medicine</i> — an ama- word, like most things that come in doses. Take them as unesi says, not as the taste suggests.</p>","eg":[["amayeza","ah-mah-YEH-zah","medicine"]]},
{"t":"li","q":"Which one do you hear?","say":"amayeza","o":["amayeza","ikliniki"],"a":0},
{"t":"mc","q":"Which one means medicine?","o":["amayeza","amanzi","amasi"],"a":0}
]},
{"id":"xh_b5_2","title":"Recognize","step":"recognize","meta":"Clinic words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"unesi","o":["unesi","ugqirha","amayeza"],"a":0},
{"t":"mc","q":"What does ugqirha mean?","o":["doctor","nurse","clinic"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"amayeza","o":["amayeza","ikliniki","unesi"],"a":0},
{"t":"mc","q":"Which one means clinic?","o":["ikliniki","ugqirha","amayeza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ugqirha","o":["ugqirha","unesi","ikliniki"],"a":0},
{"t":"mc","q":"The click in ugqirha is…","o":["q","c","x"],"a":0}
]},
{"id":"xh_b5_3","title":"Build","step":"build","meta":"Staff the ward","vocab":[],"ex":[
{"t":"fill","q":"Complete: doctor","s":"ug___rha","o":["qi","ci","xi"],"a":0},
{"t":"wb","q":"Build the word: medicine","a":["amayeza"],"pool":["amayeza","ikliniki","unesi"]},
{"t":"fill","q":"Complete: clinic","s":"iklini___","o":["ki","ke","ka"],"a":0},
{"t":"wb","q":"Build the word: nurse","a":["unesi"],"pool":["unesi","ugqirha","amayeza"]},
{"t":"li","q":"Which one do you hear?","say":"ikliniki","o":["ikliniki","amayeza","ugqirha"],"a":0}
]},
{"id":"xh_b5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ikliniki","clinic"],["ugqirha","doctor"],["unesi","nurse"]]},
{"t":"li","q":"Which one do you hear?","say":"amayeza","o":["amayeza","unesi","ikliniki"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["amayeza","medicine"],["ubuhlungu","pain"]]},
{"t":"mc","q":"In most clinics, the person who actually sees you is…","o":["unesi","ugqirha","utitshala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"unesi","o":["unesi","ugqirha","amayeza"],"a":0}
]},
{"id":"xh_b5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does amayeza mean?","o":["medicine","clinic","pain"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ugqirha","o":["ugqirha","unesi","ikliniki"],"a":0},
{"t":"mc","q":"Which one means nurse?","o":["unesi","ugqirha","umfundi"],"a":0},
{"t":"mc","q":"When kubuhlungu, the road leads to…","o":["ikliniki","ivenkile","irenki"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ikliniki","o":["ikliniki","amayeza","unesi"],"a":0},
{"t":"mc","q":"Review — which one means change (from the till)?","o":["itshintshi","imali","ixabiso"],"a":0},
{"t":"mc","q":"Review — which means “ten rand”?","o":["lishumi leerandi","esi sitya","eli qanda"],"a":0},
{"t":"mc","q":"Review — which means “this egg”?","o":["eli qanda","le mali","lishumi leerandi"],"a":0},
{"t":"mc","q":"Review — which means “lower the price”?","o":["Yehlisa ixabiso","eli qanda","esi sitya"],"a":0},
{"t":"mc","q":"Review — which means “how is your mother?”","o":["Unjani umama?","Ngubani lo?","Ukhona utata?"],"a":0}
]},

/* ---------- b6 · What the nurse says ---------- */
{"id":"xh_b6","title":"What the nurse says","step":"learn","meta":"Commands — the bare verb speaks","vocab":[["Yiza apha","YEE-zah AH-pah","come here"],["Hlala phantsi","HLAH-lah PAHN-tsee","sit down"],["Sela amayeza","SEH-lah ah-mah-YEH-zah","take the medicine"]],"ex":[
{"t":"note","tag":"Commands are bare","q":"Yiza apha","body":"<p>To command, Xhosa strips the verb bare — no ndi-, no u-: <b>Yiza apha</b> — <i>come here</i>. (Za wears a yi- when it stands at the front; most verbs need nothing at all.)</p>","eg":[["Yiza apha","YEE-zah AH-pah","come here"]]},
{"t":"li","q":"Which one do you hear?","say":"Yiza apha","o":["Yiza apha","ndiza"],"a":0},
{"t":"mc","q":"Yiza apha means…","o":["come here","go there","stand up"],"a":0},
{"t":"note","tag":"At the bench","q":"Hlala phantsi","body":"<p><b>Hlala phantsi</b> — <i>sit down</i> — the hlala of ndihlala (I live/stay) plus your phantsi. What the bench outside every clinic door is for.</p>","eg":[["Hlala phantsi","HLAH-lah PAHN-tsee","sit down"]]},
{"t":"li","q":"Which one do you hear?","say":"Hlala phantsi","o":["Hlala phantsi","Yiza apha"],"a":0},
{"t":"mc","q":"Hlala phantsi means…","o":["sit down","stand up","lie down"],"a":0},
{"t":"note","tag":"The instruction that matters","q":"Sela amayeza","body":"<p><b>Sela amayeza</b> — <i>take the medicine</i>, literally drink it — Xhosa medicine is drunk even when it is swallowed dry. The sela of ndisela, giving orders now.</p>","eg":[["Sela amayeza","SEH-lah ah-mah-YEH-zah","take the medicine"]]},
{"t":"li","q":"Which one do you hear?","say":"Sela amayeza","o":["Sela amayeza","Hlala phantsi"],"a":0},
{"t":"mc","q":"Sela amayeza literally says…","o":["drink the medicine","eat the medicine","buy the medicine"],"a":0}
]},
{"id":"xh_b6_2","title":"Recognize","step":"recognize","meta":"Commands by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Hlala phantsi","o":["Hlala phantsi","Sela amayeza","Yiza apha"],"a":0},
{"t":"mc","q":"What does Sela amayeza mean?","o":["take the medicine","fetch the medicine","the medicine is finished"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Yiza apha","o":["Yiza apha","Hlala phantsi","Sela amayeza"],"a":0},
{"t":"mc","q":"Which one means sit down?","o":["Hlala phantsi","Yiza apha","Sela amayeza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Sela amayeza","o":["Sela amayeza","Yiza apha","Hlala phantsi"],"a":0},
{"t":"mc","q":"Commands drop…","o":["the person prefix","the verb stem","the last vowel"],"a":0}
]},
{"id":"xh_b6_3","title":"Build","step":"build","meta":"Give the instruction","vocab":[],"ex":[
{"t":"fill","q":"Complete: come here","s":"___za apha","o":["Yi","Ndi","U"],"a":0},
{"t":"wb","q":"Build: sit down","a":["hlala","phantsi"],"pool":["hlala","phantsi","apha"]},
{"t":"fill","q":"Complete: take the medicine","s":"___la amayeza","o":["Se","Ce","Ze"],"a":0},
{"t":"wb","q":"Build: come here","a":["yiza","apha"],"pool":["yiza","apha","phantsi"]},
{"t":"li","q":"Which one do you hear?","say":"Yiza apha","o":["Yiza apha","Sela amayeza","Hlala phantsi"],"a":0}
]},
{"id":"xh_b6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Yiza apha","come here"],["Hlala phantsi","sit down"],["Sela amayeza","take the medicine"]]},
{"t":"li","q":"Which one do you hear?","say":"Sela amayeza","o":["Sela amayeza","Hlala phantsi","Yiza apha"],"a":0},
{"t":"mc","q":"Put the clinic visit in order: Yiza apha → Hlala phantsi → …","o":["Sela amayeza","Yima!","Ndiyaphila"],"a":0},
{"t":"mc","q":"The command form of ndisela (I drink) is…","o":["sela","yisela","usela"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Hlala phantsi","o":["Hlala phantsi","Yiza apha","Sela amayeza"],"a":0}
]},
{"id":"xh_b6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Yiza apha mean?","o":["come here","go away","hurry up"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Sela amayeza","o":["Sela amayeza","Yiza apha","Hlala phantsi"],"a":0},
{"t":"mc","q":"Which one means sit down?","o":["Hlala phantsi","Hlala phezulu","Yiza phantsi"],"a":0},
{"t":"mc","q":"A command uses the verb…","o":["bare, with no person prefix","with ndi-","with uku-"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Hlala phantsi","o":["Hlala phantsi","Sela amayeza","Yiza apha"],"a":0},
{"t":"mc","q":"Review — ukuthenga means…","o":["to buy","I buy","I sell"],"a":0},
{"t":"mc","q":"Review — which means “here is the money”?","o":["Nantsi imali","esi sitya","eli qanda"],"a":0},
{"t":"mc","q":"Review — which means “how much is this?”","o":["Yimalini le?","Unayo iswekile?","nini?"],"a":0},
{"t":"mc","q":"Review — which means “do you have sugar?”","o":["Unayo iswekile?","Yimalini?","Yimalini le?"],"a":0},
{"t":"mc","q":"Review — which means “she is well”?","o":["uphilile","yena","umama"],"a":0}
]},

/* ---------- b7 · Feeling better ---------- */
{"id":"xh_b7","title":"Feeling better","step":"learn","meta":"Uziva njani? — and the good answer","vocab":[["Uziva njani?","oo-ZEE-vah NJAH-nee","how do you feel?"],["Ndiziva ngcono","ndee-ZEE-vah NGCAW-naw","I feel better"]],"ex":[
{"t":"note","tag":"The caring question","q":"Uziva njani?","body":"<p><b>Uziva njani?</b> — <i>how do you feel?</i> — the njani of Unjani, pointed at feelings: u-zi-va, you-yourself-feel. What unesi asks at the follow-up, and what you ask a friend who was ill.</p>","eg":[["Uziva njani?","oo-ZEE-vah NJAH-nee","how do you feel?"]]},
{"t":"li","q":"Which one do you hear?","say":"Uziva njani?","o":["Uziva njani?","ndiyagula"],"a":0},
{"t":"mc","q":"Uziva njani? asks…","o":["how do you feel?","how are you?","where does it hurt?"],"a":0},
{"t":"note","tag":"The answer everyone hopes for","q":"Ndiziva ngcono","body":"<p><b>Ndiziva ngcono</b> — <i>I feel better</i> — with the soft nasal ngc click, the gentlest of the click family. The sentence that ends the clinic story well.</p>","eg":[["Ndiziva ngcono","ndee-ZEE-vah NGCAW-naw","I feel better"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndiziva ngcono","o":["Ndiziva ngcono","Uziva njani?"],"a":0},
{"t":"mc","q":"Ndiziva ngcono means…","o":["I feel better","I feel worse","I feel nothing"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uziva njani?","o":["Uziva njani?","Ndiziva ngcono"],"a":0},
{"t":"mc","q":"The zi in uziva and ndiziva means…","o":["yourself / myself","very","again"],"a":0}
]},
{"id":"xh_b7_2","title":"Recognize","step":"recognize","meta":"Feelings by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Ndiziva ngcono","o":["Ndiziva ngcono","Uziva njani?","ndiyaphila"],"a":0},
{"t":"mc","q":"What does Ndiziva ngcono mean?","o":["I feel better","how do you feel?","I am well"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uziva njani?","o":["Uziva njani?","Ndiziva ngcono","Unjani?"],"a":0},
{"t":"mc","q":"Which one means how do you feel?","o":["Uziva njani?","Unjani?","Uya phi?"],"a":0},
{"t":"li","q":"Listen closely — feel or well — which do you hear?","say":"Ndiziva ngcono","o":["Ndiziva ngcono","ndiyaphila"],"a":0},
{"t":"mc","q":"The ngc in ngcono sounds…","o":["soft and nasal","sharp like q","like plain g"],"a":0}
]},
{"id":"xh_b7_3","title":"Build","step":"build","meta":"Ask and answer","vocab":[],"ex":[
{"t":"fill","q":"Complete: how do you feel?","s":"Uziva nja___?","o":["ni","na","no"],"a":0},
{"t":"wb","q":"Build: I feel better","a":["ndiziva","ngcono"],"pool":["ndiziva","ngcono","njani?"]},
{"t":"fill","q":"Complete: I feel BETTER","s":"Ndiziva ng___no","o":["co","qo","xo"],"a":0},
{"t":"wb","q":"Build: how do you feel?","a":["uziva","njani?"],"pool":["uziva","njani?","ngcono"]},
{"t":"li","q":"Which one do you hear?","say":"Ndiziva ngcono","o":["Ndiziva ngcono","Uziva njani?","kubuhlungu"],"a":0}
]},
{"id":"xh_b7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uziva njani?","how do you feel?"],["Ndiziva ngcono","I feel better"]]},
{"t":"li","q":"Which one do you hear?","say":"Uziva njani?","o":["Uziva njani?","Ndiziva ngcono","ndiyagula"],"a":0},
{"t":"match","q":"Match the question to its answer","pairs":[["Uziva njani?","Ndiziva ngcono"],["Unjani?","Ndiyaphila"]]},
{"t":"mc","q":"The full clinic arc: ndiyagula → Sela amayeza → …","o":["Ndiziva ngcono","Kubuhlungu apha","Yiza apha"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiziva ngcono","o":["Ndiziva ngcono","Uziva njani?","ubuhlungu"],"a":0}
]},
{"id":"xh_b7_5","title":"Checkpoint","step":"checkpoint","meta":"Body and health — show it all","vocab":[],"ex":[
{"t":"mc","q":"Uziva njani? — the happy answer is…","o":["Ndiziva ngcono","ndiyagula","kubuhlungu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uziva njani?","o":["Uziva njani?","Ndiziva ngcono","Unjani?"],"a":0},
{"t":"mc","q":"Review — the plural of iliso is…","o":["amehlo","amaliso","iziliso"],"a":0},
{"t":"mc","q":"Review — which one means take the medicine?","o":["Sela amayeza","Hlala phantsi","Yiza apha"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ugqirha","o":["ugqirha","unesi","ikliniki"],"a":0},
{"t":"mc","q":"Review — which one means my head hurts?","o":["Intloko ibuhlungu","Kubuhlungu apha","ndiyagula"],"a":0},
{"t":"mc","q":"Review — which one means learners?","o":["abafundi","ootitshala","umfundi"],"a":0},
{"t":"mc","q":"Review — which means “salt”?","o":["ityuwa","ispaza","imali"],"a":0},
{"t":"mc","q":"Review — which means “I have it”?","o":["Ndinayo","amafutha","itshiphu"],"a":0},
{"t":"mc","q":"Review — which means “all of us”?","o":["sonke","usekhaya","ubhuti"],"a":0}
]},

/* ---------- p1 · What I did ---------- */
{"id":"xh_p1","title":"What I did","step":"learn","meta":"The -ile past — you have been using it all along","vocab":[["ndihambile","ndee-hahm-BEE-leh","I went"],["ndisebenzile","ndee-seh-behn-ZEE-leh","I worked"],["ndiphekile","ndee-peh-KEE-leh","I cooked"]],"ex":[
{"t":"note","tag":"The past in one ending","q":"-a becomes -ile","body":"<p>To put a verb in the past, swap its final -a for <b>-ile</b>: hamba, <b>ndihambile</b> — <i>I went</i>. That is the whole rule.</p>","eg":[["ndihambile","ndee-hahm-BEE-leh","I went"]]},
{"t":"li","q":"Now or then — which do you hear?","say":"ndihambile","o":["ndihambile","ndihamba"],"a":0},
{"t":"mc","q":"What does ndihambile mean?","o":["I went","I go","I will go"],"a":0},
{"t":"note","tag":"A familiar ending","q":"The -ile inside ndilambile","body":"<p>Here is the trick you have carried since the food zone: <b>ndilambile</b> — I am hungry — IS this ending. Lamba means get hungry; ndilambile is literally I-have-gotten-hungry. Xhosa was teaching you the past tense before you knew it existed.</p>","eg":[["ndisebenzile","ndee-seh-behn-ZEE-leh","I worked"]]},
{"t":"li","q":"Which one do you hear?","say":"ndisebenzile","o":["ndisebenzile","ndiyasebenza"],"a":0},
{"t":"mc","q":"ndilambile is secretly…","o":["a past form of lamba","a plural","a borrowed word"],"a":0},
{"t":"note","tag":"One more","q":"Ndiphekile","body":"<p><b>Ndiphekile</b> — <i>I cooked</i>. Pheka, phekile. Try it on any verb you own: funda, thenga, lala — the ending fits them all.</p>","eg":[["ndiphekile","ndee-peh-KEE-leh","I cooked"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiphekile","o":["ndiphekile","ndipheka"],"a":0},
{"t":"mc","q":"Which one means I worked?","o":["ndisebenzile","ndiyasebenza","ndihambile"],"a":0}
]},
{"id":"xh_p1_2","title":"Recognize","step":"recognize","meta":"Then and now by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndihambile","o":["ndihambile","ndisebenzile","ndiphekile"],"a":0},
{"t":"mc","q":"What does ndiphekile mean?","o":["I cooked","I cook","I ate"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndisebenzile","o":["ndisebenzile","ndihambile","ndiphekile"],"a":0},
{"t":"mc","q":"The past ending is…","o":["-ile","-isa","-ini"],"a":0},
{"t":"li","q":"Past or present — which do you hear?","say":"ndiphekile","o":["ndiphekile","ndipheka"],"a":0},
{"t":"mc","q":"The past of ndifunda would be…","o":["ndifundile","ndifundisa","ndiyafunda"],"a":0}
]},
{"id":"xh_p1_3","title":"Build","step":"build","meta":"Swap the ending","vocab":[],"ex":[
{"t":"fill","q":"Complete: I went","s":"Ndihamb___","o":["ile","a","isa"],"a":0},
{"t":"wb","q":"Build the word: I worked","a":["ndisebenzile"],"pool":["ndisebenzile","ndiyasebenza","ndihambile"]},
{"t":"fill","q":"Complete: I cooked","s":"Ndiphek___","o":["ile","a","ela"],"a":0},
{"t":"wb","q":"Build the word: I went","a":["ndihambile"],"pool":["ndihambile","ndihamba","ndiphekile"]},
{"t":"li","q":"Which one do you hear?","say":"ndihambile","o":["ndihambile","ndiphekile","ndisebenzile"],"a":0}
]},
{"id":"xh_p1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match present to past","pairs":[["ndihamba","ndihambile"],["ndipheka","ndiphekile"]]},
{"t":"li","q":"Which one do you hear?","say":"ndisebenzile","o":["ndisebenzile","ndiphekile","ndihambile"],"a":0},
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndihambile","I went"],["ndisebenzile","I worked"],["ndiphekile","I cooked"]]},
{"t":"mc","q":"Izolo ndisebenzile means…","o":["yesterday I worked","today I work","tomorrow I will work"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiphekile","o":["ndiphekile","ndisebenzile","ndihambile"],"a":0}
]},
{"id":"xh_p1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndisebenzile mean?","o":["I worked","I work","I will work"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiphekile","o":["ndiphekile","ndihambile","ndisebenzile"],"a":0},
{"t":"mc","q":"The past is made by swapping final -a for…","o":["-ile","-eni","-isa"],"a":0},
{"t":"mc","q":"ndilambile literally means…","o":["I have gotten hungry","I am eating","I was fed"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndihambile","o":["ndihambile","ndihamba","ndiphekile"],"a":0},
{"t":"mc","q":"Review — which one means teacher?","o":["utitshala","umfundi","ugqirha"],"a":0},
{"t":"mc","q":"Review — which means “where do you work?”","o":["Usebenza phi?","Ufunda ntoni?","Ungubani?"],"a":0},
{"t":"mc","q":"Review — which means “homesteads”?","o":["imizi","ootitshala","ndiyasebenza"],"a":0},
{"t":"mc","q":"Review — which means “I do not work on Sunday”?","o":["Andisebenzi ngeCawa","Ndisebenza edolophini","Utitshala uyafundisa"],"a":0},
{"t":"mc","q":"Review — which means “we live”?","o":["sihlala","kunye","oosisi"],"a":0}
]},

/* ---------- p2 · What I bought ---------- */
{"id":"xh_p2","title":"What I bought","step":"learn","meta":"The -ile that shortens","vocab":[["ndithengile","ndee-tehn-GEE-leh","I bought"],["ndifundile","ndee-foon-DEE-leh","I learned"],["Ndithenge isonka izolo","ndee-TEHN-geh ee-SAWN-kah ee-ZAW-law","I bought bread yesterday"]],"ex":[
{"t":"note","tag":"Two more pasts","q":"Ndithengile, ndifundile","body":"<p><b>Ndithengile</b> — <i>I bought</i>. <b>Ndifundile</b> — <i>I learned</i>. The ending you met in p1, spending freely.</p>","eg":[["ndithengile","ndee-tehn-GEE-leh","I bought"],["ndifundile","ndee-foon-DEE-leh","I learned"]]},
{"t":"li","q":"Which one do you hear?","say":"ndithengile","o":["ndithengile","ndifundile"],"a":0},
{"t":"mc","q":"What does ndifundile mean?","o":["I learned","I taught","I bought"],"a":0},
{"t":"note","tag":"Like -ya-, in reverse","q":"-ile shortens before an object","body":"<p>Remember how -ya- drops when something follows the verb? The past does the same trick: alone it is -ile, but before an object it shortens to -e: <b>Ndithenge isonka izolo</b> — <i>I bought bread yesterday</i>. Long when alone, short when busy — Xhosa&rsquo;s favourite rhythm.</p>","eg":[["Ndithenge isonka izolo","ndee-TEHN-geh ee-SAWN-kah ee-ZAW-law","I bought bread yesterday"]]},
{"t":"li","q":"Long or short — which do you hear?","say":"Ndithenge isonka izolo","o":["Ndithenge isonka izolo","ndithengile"],"a":0},
{"t":"mc","q":"Before an object, -ile shortens to…","o":["-e","-a","-i"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndifundile","o":["ndifundile","ndithengile"],"a":0},
{"t":"mc","q":"Ndithenge isonka izolo means…","o":["I bought bread yesterday","I will buy bread tomorrow","I am buying bread"],"a":0}
]},
{"id":"xh_p2_2","title":"Recognize","step":"recognize","meta":"Bought and learned by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndifundile","o":["ndifundile","ndithengile","Ndithenge isonka izolo"],"a":0},
{"t":"mc","q":"What does ndithengile mean?","o":["I bought","I sold","I learned"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndithenge isonka izolo","o":["Ndithenge isonka izolo","ndithengile","ndifundile"],"a":0},
{"t":"mc","q":"Which one means I learned?","o":["ndifundile","ndithengile","ndifundisa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndithengile","o":["ndithengile","ndifundile","Ndithenge isonka izolo"],"a":0},
{"t":"mc","q":"Why ndithenge and not ndithengile in the sentence?","o":["an object follows","it is negative","izolo demands it"],"a":0}
]},
{"id":"xh_p2_3","title":"Build","step":"build","meta":"Long form, short form — again","vocab":[],"ex":[
{"t":"fill","q":"Complete: I bought (verb standing alone)","s":"Ndithengi___","o":["le","la","sa"],"a":0},
{"t":"wb","q":"Build: I bought bread yesterday","a":["ndithenge","isonka","izolo"],"pool":["ndithenge","isonka","izolo","ndithengile"]},
{"t":"fill","q":"Complete: I learned","s":"Ndifund___","o":["ile","isa","a"],"a":0},
{"t":"wb","q":"Build the word: I bought","a":["ndithengile"],"pool":["ndithengile","ndithenge","ndifundile"]},
{"t":"li","q":"Which one do you hear?","say":"Ndithenge isonka izolo","o":["Ndithenge isonka izolo","ndifundile","ndithengile"],"a":0}
]},
{"id":"xh_p2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndithengile","I bought"],["ndifundile","I learned"]]},
{"t":"li","q":"Which one do you hear?","say":"ndithengile","o":["ndithengile","Ndithenge isonka izolo","ndifundile"],"a":0},
{"t":"match","q":"Match the pattern pair","pairs":[["ndiyasebenza","ndisebenza edolophini"],["ndithengile","ndithenge isonka"]]},
{"t":"mc","q":"Both -ya- and -ile shorten when…","o":["something follows the verb","the verb is borrowed","you speak fast"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndifundile","o":["ndifundile","ndithengile","Ndithenge isonka izolo"],"a":0}
]},
{"id":"xh_p2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Ndithenge isonka izolo mean?","o":["I bought bread yesterday","I sold bread yesterday","I want bread today"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndithengile","o":["ndithengile","ndifundile","ndithenga"],"a":0},
{"t":"mc","q":"Which one means I learned?","o":["ndifundile","ndifunda","ndifundisa"],"a":0},
{"t":"mc","q":"I cooked rice yesterday would be Ndipheke irayisi izolo — because…","o":["-ile shortens before the object","pheka is irregular","izolo comes last"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndifundile","o":["ndifundile","ndithengile","ndifunda"],"a":0},
{"t":"mc","q":"Review — which one means I buy?","o":["ndithenga","ndithengisa","ukuthenga"],"a":0},
{"t":"mc","q":"Review — which means “I work in town”?","o":["Ndisebenza edolophini","Andisebenzi ngeCawa","Utitshala uyafundisa"],"a":0},
{"t":"mc","q":"Review — which means “I write”?","o":["ndibhala","imizi","umzi"],"a":0},
{"t":"mc","q":"Review — which means “I go to work”?","o":["ndiyaphangela","ikhompyutha","utitshala"],"a":0},
{"t":"mc","q":"Review — which means “they live”?","o":["bahlala","uphilile","umzala"],"a":0}
]},

/* ---------- p3 · Where were you? ---------- */
{"id":"xh_p3","title":"Where were you?","step":"learn","meta":"Ubuphi? — and the bendi- that answers it","vocab":[["Ubuphi izolo?","oo-BOO-pee ee-ZAW-law","where were you yesterday?"],["Bendisekhaya","behn-dee-seh-KHAH-yah","I was at home"],["Bendigula","behn-dee-GOO-lah","I was sick"]],"ex":[
{"t":"note","tag":"The question","q":"Ubuphi izolo?","body":"<p><b>Ubuphi izolo?</b> — <i>where were you yesterday?</i> Your old friend phi, with a bu- that pushes the being into the past.</p>","eg":[["Ubuphi izolo?","oo-BOO-pee ee-ZAW-law","where were you yesterday?"]]},
{"t":"li","q":"Which one do you hear?","say":"Ubuphi izolo?","o":["Ubuphi izolo?","Uya phi?"],"a":0},
{"t":"mc","q":"Ubuphi izolo? asks…","o":["where were you yesterday?","where are you going?","where do you work?"],"a":0},
{"t":"note","tag":"The answer","q":"Bendi- — I was","body":"<p>The answer starts with <b>bendi-</b> — <i>I was</i>: <b>Bendisekhaya</b> — <i>I was at home</i> (ikhaya wearing its at-form, sekhaya). Honest excuses welcome too: <b>Bendigula</b> — <i>I was sick</i>.</p>","eg":[["Bendisekhaya","behn-dee-seh-KHAH-yah","I was at home"],["Bendigula","behn-dee-GOO-lah","I was sick"]]},
{"t":"li","q":"Which one do you hear?","say":"Bendisekhaya","o":["Bendisekhaya","Bendigula"],"a":0},
{"t":"mc","q":"Bendigula means…","o":["I was sick","I am sick","I was away"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Bendigula","o":["Bendigula","Ubuphi izolo?"],"a":0},
{"t":"mc","q":"The bendi- at the front means…","o":["I was","I will","I am"],"a":0}
]},
{"id":"xh_p3_2","title":"Recognize","step":"recognize","meta":"Past places by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Bendigula","o":["Bendigula","Bendisekhaya","Ubuphi izolo?"],"a":0},
{"t":"mc","q":"What does Bendisekhaya mean?","o":["I was at home","I am at home","I went home"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ubuphi izolo?","o":["Ubuphi izolo?","Bendisekhaya","Bendigula"],"a":0},
{"t":"mc","q":"Which one means I was sick?","o":["Bendigula","ndiyagula","Bendisekhaya"],"a":0},
{"t":"li","q":"Was or am — which do you hear?","say":"Bendigula","o":["Bendigula","ndiyagula"],"a":0},
{"t":"mc","q":"Ubuphi izolo? — Bendisemsebenzini would mean I was…","o":["at work","at home","in town"],"a":0}
]},
{"id":"xh_p3_3","title":"Build","step":"build","meta":"Yesterday, located","vocab":[],"ex":[
{"t":"fill","q":"Complete: where were you yesterday?","s":"Ubu___i izolo?","o":["ph","p","f"],"a":0},
{"t":"wb","q":"Build: I was at home","a":["bendisekhaya"],"pool":["bendisekhaya","bendigula","izolo"]},
{"t":"fill","q":"Complete: I was sick","s":"___digula","o":["Ben","Ndi","Uya"],"a":0},
{"t":"wb","q":"Build: where were you yesterday?","a":["ubuphi","izolo?"],"pool":["ubuphi","izolo?","bendisekhaya"]},
{"t":"li","q":"Which one do you hear?","say":"Bendisekhaya","o":["Bendisekhaya","Ubuphi izolo?","Bendigula"],"a":0}
]},
{"id":"xh_p3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ubuphi izolo?","where were you yesterday?"],["Bendisekhaya","I was at home"],["Bendigula","I was sick"]]},
{"t":"li","q":"Which one do you hear?","say":"Ubuphi izolo?","o":["Ubuphi izolo?","Bendigula","Bendisekhaya"],"a":0},
{"t":"match","q":"Match now to then","pairs":[["ndiyagula","Bendigula"],["ndihamba","ndihambile"]]},
{"t":"mc","q":"Ubuphi izolo? — the excuse that mentions the clinic zone…","o":["Bendigula","Bendisekhaya","Ndiziva ngcono"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Bendigula","o":["Bendigula","Bendisekhaya","Ubuphi izolo?"],"a":0}
]},
{"id":"xh_p3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Bendigula mean?","o":["I was sick","I am sick","I was tired"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ubuphi izolo?","o":["Ubuphi izolo?","Bendisekhaya","Bendigula"],"a":0},
{"t":"mc","q":"Which one means I was at home?","o":["Bendisekhaya","Bendigula","ekhaya"],"a":0},
{"t":"mc","q":"bendi- is to I was as ndi- is to…","o":["I am","you are","I will"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Bendisekhaya","o":["Bendisekhaya","Bendigula","Ubuphi izolo?"],"a":0},
{"t":"mc","q":"Review — which one means holiday?","o":["iholide","impelaveki","iCawa"],"a":0},
{"t":"mc","q":"Review — which means “learner”?","o":["umfundi","ndifundisa","iholide"],"a":0},
{"t":"mc","q":"Review — which means “I teach”?","o":["ndifundisa","ipeni","umfundi"],"a":0},
{"t":"mc","q":"Review — which means “what do you study?”","o":["Ufunda ntoni?","Usebenza phi?","Uza nini?"],"a":0},
{"t":"mc","q":"Review — which means “together”?","o":["kunye","umXhosa","sonke"],"a":0}
]},

/* ---------- p4 · Tomorrow I will ---------- */
{"id":"xh_p4","title":"Tomorrow I will","step":"learn","meta":"Ndiza ku- — the future from a verb you know","vocab":[["ndiza kuhamba","ndee-zah koo-HAHM-bah","I will go"],["ndiza kusebenza","ndee-zah koo-seh-BEHN-zah","I will work"],["Ndiza kuhamba ngomso","ndee-zah koo-HAHM-bah NGAWM-saw","I will go tomorrow"]],"ex":[
{"t":"note","tag":"Coming to do it","q":"Ndiza ku-","body":"<p>The future is built from ndiza — <i>I come</i>: <b>ndiza kuhamba</b> — <i>I will go</i>, literally I-come-to-go. What you are coming to do is what you will do. <b>Ndiza kusebenza</b> — <i>I will work</i>.</p>","eg":[["ndiza kuhamba","ndee-zah koo-HAHM-bah","I will go"],["ndiza kusebenza","ndee-zah koo-seh-BEHN-zah","I will work"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiza kuhamba","o":["ndiza kuhamba","ndiza kusebenza"],"a":0},
{"t":"mc","q":"ndiza kuhamba literally says…","o":["I come to go","I go to come","I went already"],"a":0},
{"t":"note","tag":"Stamped with a day","q":"Ndiza kuhamba ngomso","body":"<p>Add a time word and the plan is made: <b>Ndiza kuhamba ngomso</b> — <i>I will go tomorrow</i>. Past, present, future — you now hold all three.</p>","eg":[["Ndiza kuhamba ngomso","ndee-zah koo-HAHM-bah NGAWM-saw","I will go tomorrow"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kuhamba ngomso","o":["Ndiza kuhamba ngomso","ndiza kuhamba"],"a":0},
{"t":"mc","q":"Ndiza kuhamba ngomso means…","o":["I will go tomorrow","I went yesterday","I am going now"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiza kusebenza","o":["ndiza kusebenza","ndiza kuhamba"],"a":0},
{"t":"mc","q":"The ku- after ndiza is the same ku- as in…","o":["ukuthenga","kubuhlungu","kusasa"],"a":0}
]},
{"id":"xh_p4_2","title":"Recognize","step":"recognize","meta":"Plans by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndiza kusebenza","o":["ndiza kusebenza","ndiza kuhamba","Ndiza kuhamba ngomso"],"a":0},
{"t":"mc","q":"What does ndiza kusebenza mean?","o":["I will work","I worked","I am working"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kuhamba ngomso","o":["Ndiza kuhamba ngomso","ndiza kusebenza","ndiza kuhamba"],"a":0},
{"t":"mc","q":"Which one means I will go?","o":["ndiza kuhamba","ndihambile","ndihamba"],"a":0},
{"t":"li","q":"Past or future — which do you hear?","say":"ndiza kuhamba","o":["ndiza kuhamba","ndihambile"],"a":0},
{"t":"mc","q":"I will cook would be…","o":["ndiza kupheka","ndiphekile","ndipheka"],"a":0}
]},
{"id":"xh_p4_3","title":"Build","step":"build","meta":"Make plans","vocab":[],"ex":[
{"t":"fill","q":"Complete: I will go","s":"ndiza ___hamba","o":["ku","uku","kuya"],"a":0},
{"t":"wb","q":"Build: I will go tomorrow","a":["ndiza","kuhamba","ngomso"],"pool":["ndiza","kuhamba","ngomso","izolo"]},
{"t":"fill","q":"Complete: I will work","s":"ndiza kusebe___a","o":["nz","ns","z"],"a":0},
{"t":"wb","q":"Build: I will work","a":["ndiza","kusebenza"],"pool":["ndiza","kusebenza","kuhamba"]},
{"t":"li","q":"Which one do you hear?","say":"ndiza kuhamba","o":["ndiza kuhamba","Ndiza kuhamba ngomso","ndiza kusebenza"],"a":0}
]},
{"id":"xh_p4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndiza kuhamba","I will go"],["ndiza kusebenza","I will work"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kuhamba ngomso","o":["Ndiza kuhamba ngomso","ndiza kuhamba","ndiza kusebenza"],"a":0},
{"t":"match","q":"Match the time to the form","pairs":[["izolo","ndihambile"],["ngoku","ndihamba"],["ngomso","ndiza kuhamba"]]},
{"t":"mc","q":"All three tenses of hamba, in order past-present-future…","o":["ndihambile, ndihamba, ndiza kuhamba","ndihamba, ndihambile, ndiza kuhamba","ndiza kuhamba, ndihamba, ndihambile"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiza kusebenza","o":["ndiza kusebenza","ndiza kuhamba","ndisebenzile"],"a":0}
]},
{"id":"xh_p4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Ndiza kuhamba ngomso mean?","o":["I will go tomorrow","I went yesterday","I go every day"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiza kusebenza","o":["ndiza kusebenza","ndisebenzile","ndiyasebenza"],"a":0},
{"t":"mc","q":"The future is built from ndiza plus…","o":["the ku- to-form","the -ile ending","the -ya- marker"],"a":0},
{"t":"mc","q":"I will buy would be…","o":["ndiza kuthenga","ndithengile","ndithenga"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kuhamba ngomso","o":["Ndiza kuhamba ngomso","ndiza kusebenza","ndiza kuhamba"],"a":0},
{"t":"mc","q":"Review — which one means phone?","o":["ifowuni","ipeni","ikhompyutha"],"a":0},
{"t":"mc","q":"Review — which means “teachers”?","o":["ootitshala","ndiyasebenza","umzi"],"a":0},
{"t":"mc","q":"Review — which means “the teacher teaches”?","o":["Utitshala uyafundisa","Andisebenzi ngeCawa","Ndisebenza edolophini"],"a":0},
{"t":"mc","q":"Review — which means “I do not have it”?","o":["Andinayo","itshiphu","amafutha"],"a":0},
{"t":"mc","q":"Review — which means “in Khayelitsha”?","o":["eKhayelitsha","ndithetha","NdinguSipho"],"a":0}
]},

/* ---------- p5 · The weather ---------- */
{"id":"xh_p5","title":"The weather","step":"learn","meta":"Rain, cold, heat — the daily report","vocab":[["imozulu","ee-maw-ZOO-loo","weather"],["liyanetha","lee-yah-NEH-tah","it is raining"],["kuyabanda","koo-yah-BAHN-dah","it is cold"],["kushushu","koo-SHOO-shoo","it is hot"]],"ex":[
{"t":"note","tag":"The daily subject","q":"Imozulu","body":"<p><b>Imozulu</b> — <i>the weather</i> — literally the state of izulu, the sky. South Africans discuss it the way the British do, with more sunshine to report.</p>","eg":[["imozulu","ee-maw-ZOO-loo","weather"]]},
{"t":"li","q":"Which one do you hear?","say":"imozulu","o":["imozulu","izolo"],"a":0},
{"t":"mc","q":"What does imozulu mean?","o":["weather","sky","rain"],"a":0},
{"t":"note","tag":"When it falls","q":"Liyanetha","body":"<p><b>Liyanetha</b> — <i>it is raining</i> — the sky (izulu, a li- word) doing the raining, with the -ya- of a verb standing alone. In Cape Town this is a winter sentence; inland it belongs to summer thunderstorms.</p>","eg":[["liyanetha","lee-yah-NEH-tah","it is raining"]]},
{"t":"li","q":"Which one do you hear?","say":"liyanetha","o":["liyanetha","imozulu"],"a":0},
{"t":"mc","q":"liyanetha means…","o":["it is raining","it is windy","it is cloudy"],"a":0},
{"t":"note","tag":"The two complaints","q":"Kuyabanda, kushushu","body":"<p><b>Kuyabanda</b> — <i>it is cold</i>. <b>Kushushu</b> — <i>it is hot</i>. The ku- of kubuhlungu, reporting on the day instead of the body.</p>","eg":[["kuyabanda","koo-yah-BAHN-dah","it is cold"],["kushushu","koo-SHOO-shoo","it is hot"]]},
{"t":"li","q":"Hot or cold — which do you hear?","say":"kushushu","o":["kushushu","kuyabanda"],"a":0},
{"t":"mc","q":"kuyabanda means…","o":["it is cold","it is hot","it is raining"],"a":0}
]},
{"id":"xh_p5_2","title":"Recognize","step":"recognize","meta":"The report by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"kuyabanda","o":["kuyabanda","kushushu","liyanetha"],"a":0},
{"t":"mc","q":"What does kushushu mean?","o":["it is hot","it is cold","it is sunny"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"liyanetha","o":["liyanetha","kuyabanda","imozulu"],"a":0},
{"t":"mc","q":"Which one means it is raining?","o":["liyanetha","kuyabanda","kushushu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kushushu","o":["kushushu","kuyabanda","liyanetha"],"a":0},
{"t":"mc","q":"In Cape Town, liyanetha is mostly a … sentence","o":["winter","summer","spring"],"a":0}
]},
{"id":"xh_p5_3","title":"Build","step":"build","meta":"Write the forecast","vocab":[],"ex":[
{"t":"fill","q":"Complete: it is raining","s":"liyane___a","o":["th","t","nt"],"a":0},
{"t":"wb","q":"Build the word: it is cold","a":["kuyabanda"],"pool":["kuyabanda","kushushu","liyanetha"]},
{"t":"fill","q":"Complete: it is hot","s":"kushu___u","o":["sh","s","tsh"],"a":0},
{"t":"wb","q":"Build the word: weather","a":["imozulu"],"pool":["imozulu","liyanetha","kushushu"]},
{"t":"li","q":"Which one do you hear?","say":"imozulu","o":["imozulu","kushushu","kuyabanda"],"a":0}
]},
{"id":"xh_p5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["liyanetha","it is raining"],["kuyabanda","it is cold"],["kushushu","it is hot"]]},
{"t":"li","q":"Which one do you hear?","say":"kuyabanda","o":["kuyabanda","liyanetha","kushushu"],"a":0},
{"t":"match","q":"Match the ku- report to its zone","pairs":[["kubuhlungu","the body"],["kushushu","the weather"]]},
{"t":"mc","q":"Liyanetha, kuyabanda — the day calls for…","o":["staying endlwini","a braai in iyadi","a walk edolophini"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"liyanetha","o":["liyanetha","imozulu","kuyabanda"],"a":0}
]},
{"id":"xh_p5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does liyanetha mean?","o":["it is raining","it is cold","it is hot"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kushushu","o":["kushushu","kuyabanda","imozulu"],"a":0},
{"t":"mc","q":"Which one means it is cold?","o":["kuyabanda","kushushu","liyanetha"],"a":0},
{"t":"mc","q":"imozulu is literally the state of…","o":["izulu, the sky","umhlaba, the earth","umoya, the wind"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kuyabanda","o":["kuyabanda","kushushu","liyanetha"],"a":0},
{"t":"mc","q":"Review — which one means work (the noun)?","o":["umsebenzi","imisebenzi","umfundi"],"a":0},
{"t":"mc","q":"Review — which means “learners”?","o":["abafundi","ndibhala","utitshala"],"a":0},
{"t":"mc","q":"Review — which means “pen”?","o":["ipeni","imisebenzi","ndibhala"],"a":0},
{"t":"mc","q":"Review — which means “I am coming in the morning”?","o":["Ndiza kusasa","Ivenkile ikufuphi","Sihamba ngoku"],"a":0},
{"t":"mc","q":"Review — which means “in Gugulethu”?","o":["eGugulethu","bhuti","ndiyaphila"],"a":0}
]},

/* ---------- p6 · Sun and wind ---------- */
{"id":"xh_p6","title":"Sun and wind","step":"learn","meta":"Ilanga, umoya — and today stamped hot","vocab":[["ilanga","ee-LAHN-gah","sun"],["umoya","oo-MAW-yah","wind"],["Kushushu namhlanje","koo-SHOO-shoo nah-MHLAHN-jeh","it is hot today"]],"ex":[
{"t":"note","tag":"The bright one","q":"Ilanga","body":"<p><b>Ilanga</b> — <i>the sun</i> — also a day, in the counting sense: sun-up to sun-up. South Africa&rsquo;s most reliable citizen.</p>","eg":[["ilanga","ee-LAHN-gah","sun"]]},
{"t":"li","q":"Which one do you hear?","say":"ilanga","o":["ilanga","imozulu"],"a":0},
{"t":"mc","q":"What does ilanga mean?","o":["sun","moon","sky"],"a":0},
{"t":"note","tag":"The invisible one","q":"Umoya","body":"<p><b>Umoya</b> — <i>the wind</i> — and much more: air, breath, spirit. One of the deepest words in the language; for now, it is what the Cape Doctor blows through Cape Town every summer.</p>","eg":[["umoya","oo-MAW-yah","wind"]]},
{"t":"li","q":"Which one do you hear?","say":"umoya","o":["umoya","ilanga"],"a":0},
{"t":"mc","q":"umoya means wind and also…","o":["air, breath, spirit","rain and hail","dust"],"a":0},
{"t":"note","tag":"Stamping the day","q":"Kushushu namhlanje","body":"<p>Weather plus your time words: <b>Kushushu namhlanje</b> — <i>it is hot today</i>. Bendisekhaya izolo, kuyabanda ngomso — the reports write themselves now.</p>","eg":[["Kushushu namhlanje","koo-SHOO-shoo nah-MHLAHN-jeh","it is hot today"]]},
{"t":"li","q":"Which one do you hear?","say":"Kushushu namhlanje","o":["Kushushu namhlanje","kushushu"],"a":0},
{"t":"mc","q":"Kushushu namhlanje means…","o":["it is hot today","it was hot yesterday","it will be hot tomorrow"],"a":0}
]},
{"id":"xh_p6_2","title":"Recognize","step":"recognize","meta":"Sun and wind by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"umoya","o":["umoya","ilanga","imozulu"],"a":0},
{"t":"mc","q":"What does ilanga mean?","o":["sun","wind","weather"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Kushushu namhlanje","o":["Kushushu namhlanje","umoya","ilanga"],"a":0},
{"t":"mc","q":"Which one means wind?","o":["umoya","ilanga","imozulu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ilanga","o":["ilanga","umoya","Kushushu namhlanje"],"a":0},
{"t":"mc","q":"The summer wind that scours Cape Town is nicknamed…","o":["the Cape Doctor","the Berg wind","the Karoo breath"],"a":0}
]},
{"id":"xh_p6_3","title":"Build","step":"build","meta":"Sky words in place","vocab":[],"ex":[
{"t":"fill","q":"Complete: sun","s":"ilan___","o":["ga","ge","gu"],"a":0},
{"t":"wb","q":"Build: it is hot today","a":["kushushu","namhlanje"],"pool":["kushushu","namhlanje","izolo"]},
{"t":"fill","q":"Complete: wind","s":"umo___","o":["ya","yo","wa"],"a":0},
{"t":"wb","q":"Build the word: sun","a":["ilanga"],"pool":["ilanga","umoya","imozulu"]},
{"t":"li","q":"Which one do you hear?","say":"umoya","o":["umoya","ilanga","Kushushu namhlanje"],"a":0}
]},
{"id":"xh_p6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ilanga","sun"],["umoya","wind"],["imozulu","weather"]]},
{"t":"li","q":"Which one do you hear?","say":"Kushushu namhlanje","o":["Kushushu namhlanje","ilanga","umoya"],"a":0},
{"t":"match","q":"Match the report to the day","pairs":[["Kushushu namhlanje","today"],["Bendisekhaya izolo","yesterday"]]},
{"t":"mc","q":"Ilanga liphumile — the sun is out. Time for…","o":["ishisanyama in iyadi","ukulala","amayeza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ilanga","o":["ilanga","Kushushu namhlanje","umoya"],"a":0}
]},
{"id":"xh_p6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does umoya mean?","o":["wind","sun","cloud"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ilanga","o":["ilanga","umoya","imozulu"],"a":0},
{"t":"mc","q":"Which one means it is hot today?","o":["Kushushu namhlanje","Kuyabanda namhlanje","Kushushu izolo"],"a":0},
{"t":"mc","q":"Beyond wind, umoya also means…","o":["breath and spirit","thunder","the sea"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"umoya","o":["umoya","ilanga","Kushushu namhlanje"],"a":0},
{"t":"mc","q":"Review — which one means homestead?","o":["umzi","imizi","indlu"],"a":0},
{"t":"mc","q":"Review — which means “jobs”?","o":["imisebenzi","umfundi","ootitshala"],"a":0},
{"t":"mc","q":"Review — which means “computer”?","o":["ikhompyutha","ndibhala","ootitshala"],"a":0},
{"t":"mc","q":"Review — which means “I wash”?","o":["ndihlamba","ikhitshi","ibhedi"],"a":0},
{"t":"mc","q":"Review — which means “township”?","o":["ilokishi","akunani","ndikhona"],"a":0}
]},

/* ---------- p7 · Plans ---------- */
{"id":"xh_p7","title":"Plans","step":"learn","meta":"Uza kuya phi? — the zone comes together","vocab":[["Uza kuya phi?","oo-zah koo-YAH PEE","where will you go?"],["Ndiza kuya edolophini","ndee-zah koo-YAH eh-daw-law-PEE-nee","I will go to town"]],"ex":[
{"t":"note","tag":"The future question","q":"Uza kuya phi?","body":"<p>Uya phi? asked about now. The future version swaps in uza ku-: <b>Uza kuya phi?</b> — <i>where will you go?</i> Same phi, new day.</p>","eg":[["Uza kuya phi?","oo-zah koo-YAH PEE","where will you go?"]]},
{"t":"li","q":"Now or later — which do you hear?","say":"Uza kuya phi?","o":["Uza kuya phi?","Uya phi?"],"a":0},
{"t":"mc","q":"Uza kuya phi? asks…","o":["where will you go?","where are you going now?","where were you?"],"a":0},
{"t":"note","tag":"The future answer","q":"Ndiza kuya edolophini","body":"<p>And the answer wears the same clothes: <b>Ndiza kuya edolophini</b> — <i>I will go to town</i>. Ndiza kuya esikolweni, evenkileni, ekhaya — every place you own fits the frame.</p>","eg":[["Ndiza kuya edolophini","ndee-zah koo-YAH eh-daw-law-PEE-nee","I will go to town"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kuya edolophini","o":["Ndiza kuya edolophini","Uza kuya phi?"],"a":0},
{"t":"mc","q":"Ndiza kuya edolophini means…","o":["I will go to town","I went to town","I am in town"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uza kuya phi?","o":["Uza kuya phi?","Ndiza kuya edolophini"],"a":0},
{"t":"mc","q":"I will go home would be Ndiza kuya…","o":["ekhaya","ikhaya","ekhayeni"],"a":0}
]},
{"id":"xh_p7_2","title":"Recognize","step":"recognize","meta":"Future questions by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Ndiza kuya edolophini","o":["Ndiza kuya edolophini","Uza kuya phi?","ndiza kuhamba"],"a":0},
{"t":"mc","q":"What does Uza kuya phi? ask?","o":["where will you go?","where do you work?","where were you?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uza kuya phi?","o":["Uza kuya phi?","Ndiza kuya edolophini","Uya phi?"],"a":0},
{"t":"mc","q":"Which one means I will go to town?","o":["Ndiza kuya edolophini","Ndiya edolophini","Ndihambile edolophini"],"a":0},
{"t":"li","q":"Which question do you hear — now or future?","say":"Uya phi?","o":["Uya phi?","Uza kuya phi?"],"a":0},
{"t":"mc","q":"Uza kuya phi ngomso? — the fullest answer…","o":["Ndiza kuya esikolweni ngomso","Bendisekhaya izolo","Ndiya esikolweni"],"a":0}
]},
{"id":"xh_p7_3","title":"Build","step":"build","meta":"Say what will happen","vocab":[],"ex":[
{"t":"fill","q":"Complete: where will you go?","s":"U___ kuya phi?","o":["za","ya","zi"],"a":0},
{"t":"wb","q":"Build: I will go to town","a":["ndiza","kuya","edolophini"],"pool":["ndiza","kuya","edolophini","izolo"]},
{"t":"wb","q":"Build: where will you go?","a":["uza","kuya","phi?"],"pool":["uza","kuya","phi?","ngomso"]},
{"t":"wb","q":"Build: I will go to school","a":["ndiza","kuya","esikolweni"],"pool":["ndiza","kuya","esikolweni","edolophini"]},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kuya edolophini","o":["Ndiza kuya edolophini","Uza kuya phi?","ndiza kusebenza"],"a":0}
]},
{"id":"xh_p7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Uza kuya phi?","where will you go?"],["Ndiza kuya edolophini","I will go to town"]]},
{"t":"li","q":"Which one do you hear?","say":"Uza kuya phi?","o":["Uza kuya phi?","Ndiza kuya edolophini","Uya phi?"],"a":0},
{"t":"match","q":"Match the question to its time","pairs":[["Uya phi?","now"],["Uza kuya phi?","the future"],["Ubuphi izolo?","the past"]]},
{"t":"mc","q":"Three zones of questions: Uphi, Uya phi, Uza kuya phi — the constant piece is…","o":["phi","uza","ndi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiza kuya edolophini","o":["Ndiza kuya edolophini","ndiza kuhamba","Uza kuya phi?"],"a":0}
]},
{"id":"xh_p7_5","title":"Checkpoint","step":"checkpoint","meta":"Past and future — show it all","vocab":[],"ex":[
{"t":"mc","q":"Uza kuya phi? — Ndiza kuya edolophini. The plan is…","o":["town, later","town, yesterday","home, now"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uza kuya phi?","o":["Uza kuya phi?","Ndiza kuya edolophini","Ubuphi izolo?"],"a":0},
{"t":"mc","q":"Review — the past of ndihamba is…","o":["ndihambile","ndiza kuhamba","ndiyahamba"],"a":0},
{"t":"mc","q":"Review — which one means it is raining?","o":["liyanetha","kuyabanda","kushushu"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"Bendisekhaya","o":["Bendisekhaya","Bendigula","Ubuphi izolo?"],"a":0},
{"t":"mc","q":"Review — which one means sun?","o":["ilanga","umoya","imozulu"],"a":0},
{"t":"mc","q":"Review — I bought bread yesterday…","o":["Ndithenge isonka izolo","Ndiza kuthenga isonka","Ndithenga isonka"],"a":0},
{"t":"mc","q":"Review — which means “I work on Monday”?","o":["Ndisebenza ngoMvulo","Andisebenzi ngeCawa","Utitshala uyafundisa"],"a":0},
{"t":"mc","q":"Review — which means “I sleep”?","o":["ndilala","phaya","ibhedi"],"a":0},
{"t":"mc","q":"Review — which means “do you speak Xhosa?”","o":["Uthetha isiXhosa?","Igama lakho ngubani?","Ungubani?"],"a":0}
]},

/* ---------- c1 · How I feel ---------- */
{"id":"xh_c1","title":"How I feel","step":"learn","meta":"Happy, tired, afraid — the honest three","vocab":[["ndonwabile","ndaw-nwah-BEE-leh","I am happy"],["ndidiniwe","ndee-dee-NEE-weh","I am tired"],["ndiyoyika","ndee-yaw-YEE-kah","I am afraid"]],"ex":[
{"t":"note","tag":"The good one","q":"Ndonwabile","body":"<p><b>Ndonwabile</b> — <i>I am happy</i>. Hear the -ile? Like ndilambile, it is a state you have arrived in: I-have-become-glad, and still am.</p>","eg":[["ndonwabile","ndaw-nwah-BEE-leh","I am happy"]]},
{"t":"li","q":"Which one do you hear?","say":"ndonwabile","o":["ndonwabile","ndilambile"],"a":0},
{"t":"mc","q":"What does ndonwabile mean?","o":["I am happy","I am tired","I am hungry"],"a":0},
{"t":"note","tag":"The end of the day","q":"Ndidiniwe","body":"<p><b>Ndidiniwe</b> — <i>I am tired</i> — the -iwe ending is -ile&rsquo;s cousin, same arrived-state idea. The word for the taxi home after a long day of ukuphangela.</p>","eg":[["ndidiniwe","ndee-dee-NEE-weh","I am tired"]]},
{"t":"li","q":"Which one do you hear?","say":"ndidiniwe","o":["ndidiniwe","ndonwabile"],"a":0},
{"t":"mc","q":"ndidiniwe means…","o":["I am tired","I am happy","I am sick"],"a":0},
{"t":"note","tag":"The honest one","q":"Ndiyoyika","body":"<p><b>Ndiyoyika</b> — <i>I am afraid</i>. Saying it out loud is half the cure; the answer that usually comes back is Ungoyiki — do not be afraid.</p>","eg":[["ndiyoyika","ndee-yaw-YEE-kah","I am afraid"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyoyika","o":["ndiyoyika","ndidiniwe"],"a":0},
{"t":"mc","q":"Which one means I am afraid?","o":["ndiyoyika","ndonwabile","ndidiniwe"],"a":0}
]},
{"id":"xh_c1_2","title":"Recognize","step":"recognize","meta":"States of heart by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndonwabile","o":["ndonwabile","ndidiniwe","ndiyoyika"],"a":0},
{"t":"mc","q":"What does ndiyoyika mean?","o":["I am afraid","I am angry","I am tired"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndidiniwe","o":["ndidiniwe","ndiyoyika","ndonwabile"],"a":0},
{"t":"mc","q":"Which one means I am happy?","o":["ndonwabile","ndidiniwe","ndiyaphila"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyoyika","o":["ndiyoyika","ndonwabile","ndidiniwe"],"a":0},
{"t":"mc","q":"The -iwe of ndidiniwe works like…","o":["the -ile of ndilambile","the -isa of thengisa","the ku- of kushushu"],"a":0}
]},
{"id":"xh_c1_3","title":"Build","step":"build","meta":"Say the state","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am happy","s":"Ndonwabi___","o":["le","we","la"],"a":0},
{"t":"wb","q":"Build the word: I am tired","a":["ndidiniwe"],"pool":["ndidiniwe","ndonwabile","ndiyoyika"]},
{"t":"fill","q":"Complete: I am afraid","s":"Ndiyoyi___","o":["ka","kha","qa"],"a":0},
{"t":"wb","q":"Build the word: I am happy","a":["ndonwabile"],"pool":["ndonwabile","ndidiniwe","ndilambile"]},
{"t":"li","q":"Which one do you hear?","say":"ndidiniwe","o":["ndidiniwe","ndonwabile","ndiyoyika"],"a":0}
]},
{"id":"xh_c1_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndonwabile","I am happy"],["ndidiniwe","I am tired"],["ndiyoyika","I am afraid"]]},
{"t":"li","q":"Which one do you hear?","say":"ndiyoyika","o":["ndiyoyika","ndidiniwe","ndonwabile"],"a":0},
{"t":"match","q":"Match the day to the feeling","pairs":[["iholide","ndonwabile"],["umsebenzi omninzi","ndidiniwe"]]},
{"t":"mc","q":"After a long day of ukuphangela…","o":["ndidiniwe","ndonwabile","ndiyoyika"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndonwabile","o":["ndonwabile","ndiyoyika","ndidiniwe"],"a":0}
]},
{"id":"xh_c1_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ndidiniwe mean?","o":["I am tired","I am happy","I am afraid"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndonwabile","o":["ndonwabile","ndidiniwe","ndilambile"],"a":0},
{"t":"mc","q":"Which one means I am afraid?","o":["ndiyoyika","ndiyagula","ndidiniwe"],"a":0},
{"t":"mc","q":"Uziva njani? — on a good day…","o":["ndonwabile","ndidiniwe","ndiyoyika"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyoyika","o":["ndiyoyika","ndonwabile","ndiyagula"],"a":0},
{"t":"mc","q":"Review — which one means medicine?","o":["amayeza","amanzi","amafutha"],"a":0},
{"t":"mc","q":"Review — which means “head”?","o":["intloko","izandla","unyawo"],"a":0},
{"t":"mc","q":"Review — which means “mouth”?","o":["umlomo","iliso","amayeza"],"a":0},
{"t":"mc","q":"Review — which means “doctor”?","o":["ugqirha","izandla","unyawo"],"a":0},
{"t":"mc","q":"Review — which means “I speak”?","o":["ndithetha","wena","eGugulethu"],"a":0}
]},

/* ---------- c2 · Let us! ---------- */
{"id":"xh_c2","title":"Let us!","step":"learn","meta":"Masihambe — the inviting ma-","vocab":[["Masihambe!","mah-see-HAHM-beh","let us go!"],["Masitye","mah-SEE-tyeh","let us eat"],["Masithethe isiXhosa","mah-see-TEH-teh ee-see-XAW-sah","let us speak Xhosa"]],"ex":[
{"t":"note","tag":"The let-us form","q":"Ma- + si- + -e","body":"<p>Wrap ma- around si- (we) and end the verb in -e, and a command becomes an invitation: <b>Masihambe!</b> — <i>let us go!</i> Nobody is ordered; everybody is included.</p>","eg":[["Masihambe!","mah-see-HAHM-beh","let us go!"]]},
{"t":"li","q":"Which one do you hear?","say":"Masihambe!","o":["Masihambe!","Sihamba ngoku"],"a":0},
{"t":"mc","q":"Masihambe! means…","o":["let us go!","go away!","we went"],"a":0},
{"t":"note","tag":"The best invitation","q":"Masitye","body":"<p><b>Masitye</b> — <i>let us eat</i> — the sentence that follows Kulungile, ukutya kulungile: the food is ready. You will never say it alone; eating alone is un-Xhosa.</p>","eg":[["Masitye","mah-SEE-tyeh","let us eat"]]},
{"t":"li","q":"Which one do you hear?","say":"Masitye","o":["Masitye","Masihambe!"],"a":0},
{"t":"mc","q":"Masitye means…","o":["let us eat","let us go","let us cook"],"a":0},
{"t":"note","tag":"This course&rsquo;s motto","q":"Masithethe isiXhosa","body":"<p><b>Masithethe isiXhosa</b> — <i>let us speak Xhosa</i>. Say it to a Xhosa friend and watch their face. It is the single best sentence this course can give you.</p>","eg":[["Masithethe isiXhosa","mah-see-TEH-teh ee-see-XAW-sah","let us speak Xhosa"]]},
{"t":"li","q":"Which one do you hear?","say":"Masithethe isiXhosa","o":["Masithethe isiXhosa","Masitye"],"a":0},
{"t":"mc","q":"Masithethe isiXhosa means…","o":["let us speak Xhosa","I speak Xhosa","speak Xhosa!"],"a":0}
]},
{"id":"xh_c2_2","title":"Recognize","step":"recognize","meta":"Ma- by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Masitye","o":["Masitye","Masihambe!","Masithethe isiXhosa"],"a":0},
{"t":"mc","q":"What does Masihambe! mean?","o":["let us go!","come here!","we are leaving"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Masithethe isiXhosa","o":["Masithethe isiXhosa","Masitye","Masihambe!"],"a":0},
{"t":"mc","q":"Which one means let us eat?","o":["Masitye","Masihambe!","Sela amayeza"],"a":0},
{"t":"li","q":"Invitation or statement — which do you hear?","say":"Masihambe!","o":["Masihambe!","Sihamba ngoku"],"a":0},
{"t":"mc","q":"The ma- at the front turns a command into…","o":["an invitation","a question","a refusal"],"a":0}
]},
{"id":"xh_c2_3","title":"Build","step":"build","meta":"Include everybody","vocab":[],"ex":[
{"t":"fill","q":"Complete: let us go!","s":"___sihambe!","o":["Ma","Si","Ndi"],"a":0},
{"t":"wb","q":"Build: let us speak Xhosa","a":["masithethe","isiXhosa"],"pool":["masithethe","isiXhosa","masitye"]},
{"t":"fill","q":"Complete: let us eat","s":"Masit___","o":["ye","ya","yo"],"a":0},
{"t":"wb","q":"Build the word: let us go","a":["masihambe!"],"pool":["masihambe!","masitye","sihamba"]},
{"t":"li","q":"Which one do you hear?","say":"Masitye","o":["Masitye","Masithethe isiXhosa","Masihambe!"],"a":0}
]},
{"id":"xh_c2_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Masihambe!","let us go!"],["Masitye","let us eat"],["Masithethe isiXhosa","let us speak Xhosa"]]},
{"t":"li","q":"Which one do you hear?","say":"Masihambe!","o":["Masihambe!","Masitye","Masithethe isiXhosa"],"a":0},
{"t":"match","q":"Match the order to the invitation","pairs":[["Yiza apha","Masihambe!"],["Sela","Masitye"]]},
{"t":"mc","q":"Ukutya kulungile! The next word is…","o":["Masitye","Masihambe!","Yima!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Masithethe isiXhosa","o":["Masithethe isiXhosa","Masihambe!","Masitye"],"a":0}
]},
{"id":"xh_c2_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Masithethe isiXhosa mean?","o":["let us speak Xhosa","I am learning Xhosa","speak Xhosa slowly"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Masihambe!","o":["Masihambe!","Masithethe isiXhosa","Masitye"],"a":0},
{"t":"mc","q":"Which one means let us eat?","o":["Masitye","Masihambe!","Nditya"],"a":0},
{"t":"mc","q":"The let-us shape is…","o":["ma- + si- + verb ending in -e","uku- + verb","bare verb + -ni"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Masitye","o":["Masitye","Masihambe!","Masithethe isiXhosa"],"a":0},
{"t":"mc","q":"Review — which one means it hurts?","o":["kubuhlungu","ubuhlungu","kuyabanda"],"a":0},
{"t":"mc","q":"Review — which means “hand”?","o":["isandla","izandla","ikliniki"],"a":0},
{"t":"mc","q":"Review — which means “I am sick”?","o":["ndiyagula","kubuhlungu","unesi"],"a":0},
{"t":"mc","q":"Review — which means “sit down”?","o":["Hlala phantsi","Sela amayeza","Yiza apha"],"a":0},
{"t":"mc","q":"Review — which means “a little”?","o":["kancinci","umntu","unjani"],"a":0}
]},

/* ---------- c3 · Ubuntu ---------- */
{"id":"xh_c3","title":"Ubuntu","step":"learn","meta":"The word the world borrowed","vocab":[["ubuntu","oo-BOON-too","humanity"],["uluntu","oo-LOON-too","community"],["ukunceda","oo-koon-CEH-dah","to help"]],"ex":[
{"t":"note","tag":"The famous one","q":"Ubuntu","body":"<p><b>Ubuntu</b> — <i>humanity, human-ness</i> — the ubu- of states wrapped around -ntu, the human root of umntu and abantu. The proverb that carries it: umntu ngumntu ngabantu — <i>a person is a person through other people</i>.</p>","eg":[["ubuntu","oo-BOON-too","humanity"]]},
{"t":"li","q":"Which one do you hear?","say":"ubuntu","o":["ubuntu","abantu"],"a":0},
{"t":"mc","q":"umntu ngumntu ngabantu says a person is a person…","o":["through other people","through hard work","through language"],"a":0},
{"t":"note","tag":"The people around you","q":"Uluntu","body":"<p><b>Uluntu</b> — <i>the community</i> — the same -ntu root wearing ulu-. Ubuntu is the spirit; uluntu is the people it lives among.</p>","eg":[["uluntu","oo-LOON-too","community"]]},
{"t":"li","q":"Which one do you hear?","say":"uluntu","o":["uluntu","ubuntu"],"a":0},
{"t":"mc","q":"What does uluntu mean?","o":["community","humanity","family"],"a":0},
{"t":"note","tag":"Ubuntu, conjugated","q":"Ukunceda","body":"<p><b>Ukunceda</b> — <i>to help</i> — the verb inside your Ndicela uncedo. Ndiyakunceda: I will help you. It is ubuntu with its sleeves rolled up.</p>","eg":[["ukunceda","oo-koon-CEH-dah","to help"]]},
{"t":"li","q":"Which one do you hear?","say":"ukunceda","o":["ukunceda","uluntu"],"a":0},
{"t":"mc","q":"ukunceda means…","o":["to help","help (the thing)","please"],"a":0}
]},
{"id":"xh_c3_2","title":"Recognize","step":"recognize","meta":"The human root by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"uluntu","o":["uluntu","ubuntu","ukunceda"],"a":0},
{"t":"mc","q":"What does ubuntu mean?","o":["humanity","community","kindness only"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ukunceda","o":["ukunceda","uluntu","ubuntu"],"a":0},
{"t":"mc","q":"Which one means community?","o":["uluntu","ubuntu","abantu"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ubuntu","o":["ubuntu","uluntu","umntu"],"a":0},
{"t":"mc","q":"The -ntu root also lives in…","o":["umntu and abantu","imali and ixabiso","ilanga and umoya"],"a":0}
]},
{"id":"xh_c3_3","title":"Build","step":"build","meta":"One root, many words","vocab":[],"ex":[
{"t":"fill","q":"Complete: humanity","s":"ubu___u","o":["nt","nd","th"],"a":0},
{"t":"wb","q":"Build the word: to help","a":["ukunceda"],"pool":["ukunceda","uncedo","uluntu"]},
{"t":"fill","q":"Complete: community","s":"___ntu","o":["ulu","ubu","aba"],"a":0},
{"t":"wb","q":"Build the proverb: a person is a person through people","a":["umntu","ngumntu","ngabantu"],"pool":["umntu","ngumntu","ngabantu","ubuntu"]},
{"t":"li","q":"Which one do you hear?","say":"ubuntu","o":["ubuntu","ukunceda","uluntu"],"a":0}
]},
{"id":"xh_c3_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ubuntu","humanity"],["uluntu","community"],["ukunceda","to help"]]},
{"t":"li","q":"Which one do you hear?","say":"ukunceda","o":["ukunceda","ubuntu","uluntu"],"a":0},
{"t":"match","q":"Match the -ntu family","pairs":[["umntu","person"],["abantu","people"],["ubuntu","humanity"]]},
{"t":"mc","q":"Ndicela uncedo asks for help; ukunceda is…","o":["the verb to help","the helper","a thank-you"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"uluntu","o":["uluntu","ukunceda","ubuntu"],"a":0}
]},
{"id":"xh_c3_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ukunceda mean?","o":["to help","to share","to greet"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ubuntu","o":["ubuntu","uluntu","abantu"],"a":0},
{"t":"mc","q":"Which one means community?","o":["uluntu","ubuntu","umzi"],"a":0},
{"t":"mc","q":"ubuntu is built from ubu- plus the root of…","o":["umntu","indlu","ukutya"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ukunceda","o":["ukunceda","uluntu","ubuntu"],"a":0},
{"t":"mc","q":"Review — which one means nurse?","o":["unesi","ugqirha","utitshala"],"a":0},
{"t":"mc","q":"Review — which means “foot”?","o":["unyawo","umlomo","isisu"],"a":0},
{"t":"mc","q":"Review — which means “pain”?","o":["ubuhlungu","indlebe","ikliniki"],"a":0},
{"t":"mc","q":"Review — which means “take the medicine”?","o":["Sela amayeza","Yiza apha","Ndiziva ngcono"],"a":0},
{"t":"mc","q":"Review — which means “do you understand?”","o":["Uyaqonda?","Uvela phi?","Uhlala phi?"],"a":0}
]},

/* ---------- c4 · What I think ---------- */
{"id":"xh_c4","title":"What I think","step":"learn","meta":"Think, agree, disagree — politely","vocab":[["ndicinga","ndee-CEEN-gah","I think"],["ndiyavuma","ndee-yah-VOO-mah","I agree"],["andivumi","ahn-dee-VOO-mee","I disagree"]],"ex":[
{"t":"note","tag":"Opening an opinion","q":"Ndicinga","body":"<p><b>Ndicinga</b> — <i>I think</i> — with the dental c click. Ndicinga ukuba… — I think that… — is how careful opinions begin.</p>","eg":[["ndicinga","ndee-CEEN-gah","I think"]]},
{"t":"li","q":"Which one do you hear?","say":"ndicinga","o":["ndicinga","ndicela"],"a":0},
{"t":"mc","q":"What does ndicinga mean?","o":["I think","I agree","I know"],"a":0},
{"t":"note","tag":"Yes and no, grown up","q":"Ndiyavuma, andivumi","body":"<p><b>Ndiyavuma</b> — <i>I agree</i> — vuma with its lonely-verb -ya-. Wrap the negative around it and you disagree without a fight: <b>andivumi</b>. The a-…-i wrap&rsquo;s final appearance, and its most useful.</p>","eg":[["ndiyavuma","ndee-yah-VOO-mah","I agree"],["andivumi","ahn-dee-VOO-mee","I disagree"]]},
{"t":"li","q":"Agree or disagree — which do you hear?","say":"ndiyavuma","o":["ndiyavuma","andivumi"],"a":0},
{"t":"mc","q":"andivumi means…","o":["I disagree","I agree","I do not know"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"andivumi","o":["andivumi","ndicinga"],"a":0},
{"t":"mc","q":"Vuma also means to sing along — so ndiyavuma is literally…","o":["I am singing the same song","I surrender","I am loud"],"a":0}
]},
{"id":"xh_c4_2","title":"Recognize","step":"recognize","meta":"Debate by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ndiyavuma","o":["ndiyavuma","ndicinga","andivumi"],"a":0},
{"t":"mc","q":"What does ndiyavuma mean?","o":["I agree","I think","I disagree"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndicinga","o":["ndicinga","andivumi","ndiyavuma"],"a":0},
{"t":"mc","q":"Which one means I disagree?","o":["andivumi","ndiyavuma","andiqondi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"andivumi","o":["andivumi","ndiyavuma","ndicinga"],"a":0},
{"t":"mc","q":"The click in ndicinga is…","o":["c","q","x"],"a":0}
]},
{"id":"xh_c4_3","title":"Build","step":"build","meta":"Take a side","vocab":[],"ex":[
{"t":"fill","q":"Complete: I think","s":"Ndi___nga","o":["ci","qi","xi"],"a":0},
{"t":"wb","q":"Build the word: I agree","a":["ndiyavuma"],"pool":["ndiyavuma","andivumi","ndicinga"]},
{"t":"fill","q":"Complete: I disagree","s":"___divumi","o":["an","ndi","uya"],"a":0},
{"t":"wb","q":"Build the word: I think","a":["ndicinga"],"pool":["ndicinga","ndiyavuma","andivumi"]},
{"t":"li","q":"Which one do you hear?","say":"ndicinga","o":["ndicinga","ndiyavuma","andivumi"],"a":0}
]},
{"id":"xh_c4_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["ndicinga","I think"],["ndiyavuma","I agree"],["andivumi","I disagree"]]},
{"t":"li","q":"Which one do you hear?","say":"andivumi","o":["andivumi","ndicinga","ndiyavuma"],"a":0},
{"t":"match","q":"Match the word to its wrap","pairs":[["andivumi","a-…-i"],["ndiyavuma","-ya-"]]},
{"t":"mc","q":"Iyadura! — if you think it is fair, you answer…","o":["andivumi","ndiyavuma","yima"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyavuma","o":["ndiyavuma","andivumi","ndicinga"],"a":0}
]},
{"id":"xh_c4_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does andivumi mean?","o":["I disagree","I agree","I forget"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ndiyavuma","o":["ndiyavuma","ndicinga","andivumi"],"a":0},
{"t":"mc","q":"Which one means I think?","o":["ndicinga","ndiyavuma","ndiyazi"],"a":0},
{"t":"mc","q":"andivumi wears the same wrap as…","o":["andithandi and andisebenzi","ndiyavuma and ndiyasebenza","masihambe and masitye"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"andivumi","o":["andivumi","ndiyavuma","andinayo"],"a":0},
{"t":"mc","q":"Review — the plural of isandla is…","o":["izandla","amandla","iisandla"],"a":0},
{"t":"mc","q":"Review — which means “eye”?","o":["iliso","ndiyagula","izandla"],"a":0},
{"t":"mc","q":"Review — which means “stomach”?","o":["isisu","umlomo","intloko"],"a":0},
{"t":"mc","q":"Review — which means “how do you feel?”","o":["Uziva njani?","Ufunda ntoni?","Uthetha ukuthini?"],"a":0},
{"t":"mc","q":"Review — which means “I understand”?","o":["ndiyaqonda","indoda","abantwana"],"a":0}
]},

/* ---------- c5 · Telling it in order ---------- */
{"id":"xh_c5","title":"Telling it in order","step":"learn","meta":"First, then, finally — a story's bones","vocab":[["kuqala","koo-QAH-lah","first"],["emva koko","EHM-vah KAW-kaw","after that"],["ekugqibeleni","eh-koo-gqee-beh-LEH-nee","finally"]],"ex":[
{"t":"note","tag":"The opener","q":"Kuqala","body":"<p><b>Kuqala</b> — <i>first, to begin with</i> — the q click starting the story the way it starts the word. Kuqala, ndivukile… — first, I got up…</p>","eg":[["kuqala","koo-QAH-lah","first"]]},
{"t":"li","q":"Which one do you hear?","say":"kuqala","o":["kuqala","kusasa"],"a":0},
{"t":"mc","q":"What does kuqala mean?","o":["first","early","quickly"],"a":0},
{"t":"note","tag":"The middle","q":"Emva koko","body":"<p><b>Emva koko</b> — <i>after that</i> — the hinge every story turns on. Emva koko, ndiye edolophini… — after that, I went to town…</p>","eg":[["emva koko","EHM-vah KAW-kaw","after that"]]},
{"t":"li","q":"Which one do you hear?","say":"emva koko","o":["emva koko","kuqala"],"a":0},
{"t":"mc","q":"emva koko means…","o":["after that","before that","meanwhile"],"a":0},
{"t":"note","tag":"The landing","q":"Ekugqibeleni","body":"<p><b>Ekugqibeleni</b> — <i>finally, in the end</i> — a long word for the short breath before a story&rsquo;s last line. Say it slowly; the gq click sits right in the middle.</p>","eg":[["ekugqibeleni","eh-koo-gqee-beh-LEH-nee","finally"]]},
{"t":"li","q":"Which one do you hear?","say":"ekugqibeleni","o":["ekugqibeleni","emva koko"],"a":0},
{"t":"mc","q":"Which one means finally?","o":["ekugqibeleni","kuqala","emva koko"],"a":0}
]},
{"id":"xh_c5_2","title":"Recognize","step":"recognize","meta":"Story words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"emva koko","o":["emva koko","ekugqibeleni","kuqala"],"a":0},
{"t":"mc","q":"What does ekugqibeleni mean?","o":["finally","after that","first"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kuqala","o":["kuqala","emva koko","ekugqibeleni"],"a":0},
{"t":"mc","q":"Which one means after that?","o":["emva koko","kuqala","ekugqibeleni"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ekugqibeleni","o":["ekugqibeleni","kuqala","emva koko"],"a":0},
{"t":"mc","q":"The clicks in kuqala and ekugqibeleni are both…","o":["q","c","x"],"a":0}
]},
{"id":"xh_c5_3","title":"Build","step":"build","meta":"Skeleton of a story","vocab":[],"ex":[
{"t":"fill","q":"Complete: first","s":"ku___ala","o":["q","c","x"],"a":0},
{"t":"wb","q":"Build: after that","a":["emva","koko"],"pool":["emva","koko","kuqala"]},
{"t":"fill","q":"Complete: finally","s":"ekugqibele___","o":["ni","na","no"],"a":0},
{"t":"wb","q":"Build the word: first","a":["kuqala"],"pool":["kuqala","ekugqibeleni","emva"]},
{"t":"li","q":"Which one do you hear?","say":"emva koko","o":["emva koko","kuqala","ekugqibeleni"],"a":0}
]},
{"id":"xh_c5_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["kuqala","first"],["emva koko","after that"],["ekugqibeleni","finally"]]},
{"t":"li","q":"Which one do you hear?","say":"kuqala","o":["kuqala","ekugqibeleni","emva koko"],"a":0},
{"t":"match","q":"Match the story part to its word","pairs":[["the opening line","kuqala"],["the middle turn","emva koko"],["the last line","ekugqibeleni"]]},
{"t":"mc","q":"Kuqala ndivukile, … ndiye emsebenzini. The gap wants…","o":["emva koko","ekugqibeleni","kuqala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ekugqibeleni","o":["ekugqibeleni","emva koko","kuqala"],"a":0}
]},
{"id":"xh_c5_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does emva koko mean?","o":["after that","first","finally"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"kuqala","o":["kuqala","emva koko","ekugqibeleni"],"a":0},
{"t":"mc","q":"Which one means finally?","o":["ekugqibeleni","emva koko","kuqala"],"a":0},
{"t":"mc","q":"A story in order: kuqala → emva koko → …","o":["ekugqibeleni","kusasa","kuqala"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ekugqibeleni","o":["ekugqibeleni","kuqala","emva koko"],"a":0},
{"t":"mc","q":"Review — which one means come here?","o":["Yiza apha","Hlala phantsi","Yima!"],"a":0},
{"t":"mc","q":"Review — which means “eyes”?","o":["amehlo","ubuhlungu","ikliniki"],"a":0},
{"t":"mc","q":"Review — which means “my head hurts”?","o":["Intloko ibuhlungu","Ndiziva ngcono","Hlala phantsi"],"a":0},
{"t":"mc","q":"Review — which means “I feel better”?","o":["Ndiziva ngcono","Yiza apha","Sela amayeza"],"a":0},
{"t":"mc","q":"Review — which means “I am learning Xhosa”?","o":["Ndifunda isiXhosa","Uxolo bhuti","Enkosi sisi"],"a":0}
]},

/* ---------- c6 · The learner's toolkit ---------- */
{"id":"xh_c6","title":"The learner's toolkit","step":"learn","meta":"Still learning — and proud of it","vocab":[["Ndisafunda","ndee-sah-FOON-dah","I am still learning"],["Thetha kancinci","TEH-tah kahn-CEEN-cee","speak slowly"],["Uthetha ukuthini?","oo-TEH-tah oo-koo-TEE-nee","what do you mean?"]],"ex":[
{"t":"note","tag":"The -sa- form","q":"Ndisafunda","body":"<p>Slip <b>-sa-</b> after ndi- and the action is still going: <b>Ndisafunda</b> — <i>I am still learning</i>. Say it early in any conversation and every mistake after it is forgiven in advance.</p>","eg":[["Ndisafunda","ndee-sah-FOON-dah","I am still learning"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndisafunda","o":["Ndisafunda","ndifunda"],"a":0},
{"t":"mc","q":"Ndisafunda means…","o":["I am still learning","I learned","I will learn"],"a":0},
{"t":"note","tag":"Slowing the flood","q":"Thetha kancinci","body":"<p>When the answer comes back at full speed: <b>Thetha kancinci</b> — <i>speak slowly</i> — the bare-verb command you learned at the clinic, plus your old kancinci. Add sisi or bhuti to keep it warm.</p>","eg":[["Thetha kancinci","TEH-tah kahn-CEEN-cee","speak slowly"]]},
{"t":"li","q":"Which one do you hear?","say":"Thetha kancinci","o":["Thetha kancinci","Ndisafunda"],"a":0},
{"t":"mc","q":"Thetha kancinci asks someone to…","o":["speak slowly","speak up","stop talking"],"a":0},
{"t":"note","tag":"The honest question","q":"Uthetha ukuthini?","body":"<p><b>Uthetha ukuthini?</b> — <i>what do you mean?</i> — literally you-say to-say-what. Braver than nodding along, and the fastest way to actually learn.</p>","eg":[["Uthetha ukuthini?","oo-TEH-tah oo-koo-TEE-nee","what do you mean?"]]},
{"t":"li","q":"Which one do you hear?","say":"Uthetha ukuthini?","o":["Uthetha ukuthini?","Thetha kancinci"],"a":0},
{"t":"mc","q":"Uthetha ukuthini? asks…","o":["what do you mean?","why are you talking?","can you repeat it?"],"a":0}
]},
{"id":"xh_c6_2","title":"Recognize","step":"recognize","meta":"Rescue lines by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Thetha kancinci","o":["Thetha kancinci","Uthetha ukuthini?","Ndisafunda"],"a":0},
{"t":"mc","q":"What does Ndisafunda mean?","o":["I am still learning","I stopped learning","I teach"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Uthetha ukuthini?","o":["Uthetha ukuthini?","Thetha kancinci","Ndisafunda"],"a":0},
{"t":"mc","q":"Which one means speak slowly?","o":["Thetha kancinci","Uthetha ukuthini?","Andiqondi"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndisafunda","o":["Ndisafunda","Uthetha ukuthini?","Thetha kancinci"],"a":0},
{"t":"mc","q":"The -sa- in Ndisafunda means…","o":["still","already","again"],"a":0}
]},
{"id":"xh_c6_3","title":"Build","step":"build","meta":"Assemble the rescue kit","vocab":[],"ex":[
{"t":"fill","q":"Complete: I am STILL learning","s":"Ndi___funda","o":["sa","ya","za"],"a":0},
{"t":"wb","q":"Build: speak slowly","a":["thetha","kancinci"],"pool":["thetha","kancinci","ukuthini?"]},
{"t":"fill","q":"Complete: what do you mean?","s":"Uthetha ukuthi___?","o":["ni","na","no"],"a":0},
{"t":"wb","q":"Build: what do you mean?","a":["uthetha","ukuthini?"],"pool":["uthetha","ukuthini?","kancinci"]},
{"t":"li","q":"Which one do you hear?","say":"Uthetha ukuthini?","o":["Uthetha ukuthini?","Ndisafunda","Thetha kancinci"],"a":0}
]},
{"id":"xh_c6_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ndisafunda","I am still learning"],["Thetha kancinci","speak slowly"],["Uthetha ukuthini?","what do you mean?"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndisafunda","o":["Ndisafunda","Thetha kancinci","Uthetha ukuthini?"],"a":0},
{"t":"match","q":"Match the problem to the rescue","pairs":[["too fast","Thetha kancinci"],["lost the meaning","Uthetha ukuthini?"],["mistakes coming","Ndisafunda"]]},
{"t":"mc","q":"The full rescue kit, oldest member first…","o":["Andiqondi, then these three","Molo, then Enkosi","Yima, then Yiza"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Thetha kancinci","o":["Thetha kancinci","Uthetha ukuthini?","Ndisafunda"],"a":0}
]},
{"id":"xh_c6_5","title":"Checkpoint","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does Uthetha ukuthini? mean?","o":["what do you mean?","what did you say?","who are you?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Thetha kancinci","o":["Thetha kancinci","Ndisafunda","Uthetha ukuthini?"],"a":0},
{"t":"mc","q":"Which one means I am still learning?","o":["Ndisafunda","ndifundile","ndifundisa"],"a":0},
{"t":"mc","q":"Thetha kancinci, sisi — the sisi is there to…","o":["keep it warm","slow it down","make it formal"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndisafunda","o":["Ndisafunda","ndifunda","Thetha kancinci"],"a":0},
{"t":"mc","q":"Review — Uziva njani? asks…","o":["how do you feel?","how are you?","what do you mean?"],"a":0},
{"t":"mc","q":"Review — which means “ear”?","o":["indlebe","isisu","umlomo"],"a":0},
{"t":"mc","q":"Review — which means “it hurts here”?","o":["Kubuhlungu apha","Intloko ibuhlungu","Hlala phantsi"],"a":0},
{"t":"mc","q":"Review — which means “I wake up”?","o":["ndivuka","ndiphumla","itafile"],"a":0},
{"t":"mc","q":"Review — which means “meat”?","o":["inyama","uxolo","ucango"],"a":0}
]},

/* ---------- c7 · Going well ---------- */
{"id":"xh_c7","title":"Going well","step":"learn","meta":"Deep thanks — and the plural goodbye","vocab":[["Ndiyabulela","ndee-yah-boo-LEH-lah","I give thanks"],["Hambani kakuhle","hahm-BAH-nee kah-KOO-hleh","go well, all of you"]],"ex":[
{"t":"note","tag":"Deeper than enkosi","q":"Ndiyabulela","body":"<p>Enkosi thanks someone for a thing. <b>Ndiyabulela</b> — <i>I give thanks</i> — thanks them for themselves. It is what you say at the end of a visit, a kindness, or a course.</p>","eg":[["Ndiyabulela","ndee-yah-boo-LEH-lah","I give thanks"]]},
{"t":"li","q":"Which one do you hear?","say":"Ndiyabulela","o":["Ndiyabulela","enkosi"],"a":0},
{"t":"mc","q":"Ndiyabulela runs deeper than…","o":["enkosi","molo","uxolo"],"a":0},
{"t":"note","tag":"Goodbye, everyone","q":"Hambani kakuhle","body":"<p>You know hamba kakuhle for one person. For many, the command wears -ni: <b>Hambani kakuhle</b> — <i>go well, all of you</i>. Salani kakuhle if you are the one leaving them behind.</p>","eg":[["Hambani kakuhle","hahm-BAH-nee kah-KOO-hleh","go well, all of you"]]},
{"t":"li","q":"One or many — which do you hear?","say":"Hambani kakuhle","o":["Hambani kakuhle","hamba kakuhle"],"a":0},
{"t":"mc","q":"The -ni on hambani makes the command…","o":["plural","polite","past"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiyabulela","o":["Ndiyabulela","Hambani kakuhle"],"a":0},
{"t":"mc","q":"Hambani kakuhle means…","o":["go well, all of you","go well, my friend","come back soon"],"a":0}
]},
{"id":"xh_c7_2","title":"Recognize","step":"recognize","meta":"Last words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"Hambani kakuhle","o":["Hambani kakuhle","Ndiyabulela","sala kakuhle"],"a":0},
{"t":"mc","q":"What does Ndiyabulela mean?","o":["I give thanks","goodbye","I am grateful for the food"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiyabulela","o":["Ndiyabulela","Hambani kakuhle","enkosi"],"a":0},
{"t":"mc","q":"Which one means go well, all of you?","o":["Hambani kakuhle","hamba kakuhle","sala kakuhle"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Hambani kakuhle","o":["Hambani kakuhle","hamba kakuhle","Ndiyabulela"],"a":0},
{"t":"mc","q":"Left behind while others leave, you hear…","o":["Salani kakuhle","Hambani kakuhle","Yiza apha"],"a":0}
]},
{"id":"xh_c7_3","title":"Build","step":"build","meta":"Say it properly","vocab":[],"ex":[
{"t":"fill","q":"Complete: I give thanks","s":"Ndiyabule___","o":["la","le","li"],"a":0},
{"t":"wb","q":"Build: go well, all of you","a":["hambani","kakuhle"],"pool":["hambani","kakuhle","hamba"]},
{"t":"fill","q":"Complete: go well, ALL of you","s":"Hamba___ kakuhle","o":["ni","na","no"],"a":0},
{"t":"wb","q":"Build the word: I give thanks","a":["ndiyabulela"],"pool":["ndiyabulela","enkosi","hambani"]},
{"t":"li","q":"Which one do you hear?","say":"Ndiyabulela","o":["Ndiyabulela","Hambani kakuhle","sobonana"],"a":0}
]},
{"id":"xh_c7_4","title":"Mix","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Xhosa to the meaning","pairs":[["Ndiyabulela","I give thanks"],["Hambani kakuhle","go well, all of you"]]},
{"t":"li","q":"Which one do you hear?","say":"Hambani kakuhle","o":["Hambani kakuhle","Ndiyabulela","hamba kakuhle"],"a":0},
{"t":"match","q":"Match the farewell to the moment","pairs":[["hamba kakuhle","one friend leaves"],["Hambani kakuhle","the whole family leaves"],["sala kakuhle","you leave them"]]},
{"t":"mc","q":"The end of a good visit, in order: Ndiyabulela → … → sobonana","o":["Hambani kakuhle","Molo","Yimalini?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Ndiyabulela","o":["Ndiyabulela","sobonana","Hambani kakuhle"],"a":0}
]},
{"id":"xh_c7_5","title":"Checkpoint","step":"checkpoint","meta":"Twelve zones of isiXhosa — show it all","vocab":[],"ex":[
{"t":"mc","q":"Ndiyabulela means…","o":["I give thanks","goodbye","well done"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"Hambani kakuhle","o":["Hambani kakuhle","Ndiyabulela","Masihambe!"],"a":0},
{"t":"mc","q":"Review — Masithethe isiXhosa means…","o":["let us speak Xhosa","I speak Xhosa","do you speak Xhosa?"],"a":0},
{"t":"mc","q":"Review — a person is a person through other people…","o":["umntu ngumntu ngabantu","ubuntu ngumntu","abantu ngabantu"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"Ndisafunda","o":["Ndisafunda","ndicinga","ndiyavuma"],"a":0},
{"t":"mc","q":"Review — first, after that, finally…","o":["kuqala, emva koko, ekugqibeleni","kusasa, izolo, ngomso","ngoku, kancinci, kakhulu"],"a":0},
{"t":"mc","q":"Review — I am still learning, but ndonwabile: the course ends with you…","o":["happy and still learning","finished with Xhosa","back at Molo"],"a":0},
{"t":"mc","q":"Review — which means “clinic”?","o":["ikliniki","indlebe","ugqirha"],"a":0},
{"t":"mc","q":"Review — which means “I rest”?","o":["ndiphumla","phaya","ikomityi"],"a":0},
{"t":"mc","q":"Review — which means “change”?","o":["tshintsha","incwadi","ixoxo"],"a":0}
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
,
{"n":6,"t":"Around the home","d":"Rooms, furniture, kitchen tools — and your first full sentences","lessons":["xh_h1","xh_h1_2","xh_h1_3","xh_h1_4","xh_h1_5","xh_h2","xh_h2_2","xh_h2_3","xh_h2_4","xh_h2_5","xh_h3","xh_h3_2","xh_h3_3","xh_h3_4","xh_h3_5","xh_h4","xh_h4_2","xh_h4_3","xh_h4_4","xh_h4_5","xh_h5","xh_h5_2","xh_h5_3","xh_h5_4","xh_h5_5","xh_h6","xh_h6_2","xh_h6_3","xh_h6_4","xh_h6_5","xh_h7","xh_h7_2","xh_h7_3","xh_h7_4","xh_h7_5"]}
,
{"n":7,"t":"Getting around","d":"Places, going and coming, the taxi — and asking the way","lessons":["xh_t1","xh_t1_2","xh_t1_3","xh_t1_4","xh_t1_5","xh_t2","xh_t2_2","xh_t2_3","xh_t2_4","xh_t2_5","xh_t3","xh_t3_2","xh_t3_3","xh_t3_4","xh_t3_5","xh_t4","xh_t4_2","xh_t4_3","xh_t4_4","xh_t4_5","xh_t5","xh_t5_2","xh_t5_3","xh_t5_4","xh_t5_5","xh_t6","xh_t6_2","xh_t6_3","xh_t6_4","xh_t6_5","xh_t7","xh_t7_2","xh_t7_3","xh_t7_4","xh_t7_5"]}
,
{"n":8,"t":"Shopping and money","d":"Prices, buying, pointing words — and the spaza counter","lessons":["xh_m1","xh_m1_2","xh_m1_3","xh_m1_4","xh_m1_5","xh_m2","xh_m2_2","xh_m2_3","xh_m2_4","xh_m2_5","xh_m3","xh_m3_2","xh_m3_3","xh_m3_4","xh_m3_5","xh_m4","xh_m4_2","xh_m4_3","xh_m4_4","xh_m4_5","xh_m5","xh_m5_2","xh_m5_3","xh_m5_4","xh_m5_5","xh_m6","xh_m6_2","xh_m6_3","xh_m6_4","xh_m6_5","xh_m7","xh_m7_2","xh_m7_3","xh_m7_4","xh_m7_5"]}
,
{"n":9,"t":"Work and school","d":"Jobs, the classroom, the fourth plural pair — and how the street says work","lessons":["xh_w1","xh_w1_2","xh_w1_3","xh_w1_4","xh_w1_5","xh_w2","xh_w2_2","xh_w2_3","xh_w2_4","xh_w2_5","xh_w3","xh_w3_2","xh_w3_3","xh_w3_4","xh_w3_5","xh_w4","xh_w4_2","xh_w4_3","xh_w4_4","xh_w4_5","xh_w5","xh_w5_2","xh_w5_3","xh_w5_4","xh_w5_5","xh_w6","xh_w6_2","xh_w6_3","xh_w6_4","xh_w6_5","xh_w7","xh_w7_2","xh_w7_3","xh_w7_4","xh_w7_5"]}
,
{"n":10,"t":"Body and health","d":"The body, the clinic, commands — and feeling better","lessons":["xh_b1","xh_b1_2","xh_b1_3","xh_b1_4","xh_b1_5","xh_b2","xh_b2_2","xh_b2_3","xh_b2_4","xh_b2_5","xh_b3","xh_b3_2","xh_b3_3","xh_b3_4","xh_b3_5","xh_b4","xh_b4_2","xh_b4_3","xh_b4_4","xh_b4_5","xh_b5","xh_b5_2","xh_b5_3","xh_b5_4","xh_b5_5","xh_b6","xh_b6_2","xh_b6_3","xh_b6_4","xh_b6_5","xh_b7","xh_b7_2","xh_b7_3","xh_b7_4","xh_b7_5"]}
,
{"n":11,"t":"Past and future","d":"The -ile past, bendi- was, ndiza ku- future — and the weather","lessons":["xh_p1","xh_p1_2","xh_p1_3","xh_p1_4","xh_p1_5","xh_p2","xh_p2_2","xh_p2_3","xh_p2_4","xh_p2_5","xh_p3","xh_p3_2","xh_p3_3","xh_p3_4","xh_p3_5","xh_p4","xh_p4_2","xh_p4_3","xh_p4_4","xh_p4_5","xh_p5","xh_p5_2","xh_p5_3","xh_p5_4","xh_p5_5","xh_p6","xh_p6_2","xh_p6_3","xh_p6_4","xh_p6_5","xh_p7","xh_p7_2","xh_p7_3","xh_p7_4","xh_p7_5"]}
,
{"n":12,"t":"Conversation and community","d":"Feelings, invitations, ubuntu — and going well","lessons":["xh_c1","xh_c1_2","xh_c1_3","xh_c1_4","xh_c1_5","xh_c2","xh_c2_2","xh_c2_3","xh_c2_4","xh_c2_5","xh_c3","xh_c3_2","xh_c3_3","xh_c3_4","xh_c3_5","xh_c4","xh_c4_2","xh_c4_3","xh_c4_4","xh_c4_5","xh_c5","xh_c5_2","xh_c5_3","xh_c5_4","xh_c5_5","xh_c6","xh_c6_2","xh_c6_3","xh_c6_4","xh_c6_5","xh_c7","xh_c7_2","xh_c7_3","xh_c7_4","xh_c7_5"]}
];

const XH_SYM={"xh_s1":"a e i","xh_s2":"c","xh_s3":"x","xh_s4":"q","xh_s5":"xh","xh_s6":"hl","xh_s7":"Molo","xh_g1":"Unjani","xh_g2":"igama","xh_g3":"abantu","xh_g4":"bhuti","xh_g5":"eKapa","xh_g6":"phi?","xh_g7":"kancinci","xh_f1":"utata","xh_f2":"usisi","xh_f3":"wam","xh_f4":"lo","xh_f5":"isiduko","xh_f6":"ikhaya","xh_f7":"sonke","xh_n1":"1-5","xh_n2":"6-10","xh_n3":"uMvulo","xh_n4":"iCawa","xh_n5":"izolo","xh_n6":"nini?","xh_n7":"unyaka","xh_d1":"amanzi","xh_d2":"isonka","xh_d3":"nditya","xh_d4":"inyama","xh_d5":"umbona","xh_d6":"thanda","xh_d7":"mnandi","xh_h1":"igumbi","xh_h2":"isitulo","xh_h3":"isi- izi-","xh_h4":"iphi?","xh_h5":"imbiza","xh_h6":"ndipheka","xh_h7":"-ini","xh_t1":"iteksi","xh_t2":"ndiya","xh_t3":"e- -eni","xh_t4":"yima!","xh_t5":"kude","xh_t6":"indlela?","xh_t7":"si-","xh_m1":"imali","xh_m2":"yimalini?","xh_m3":"uku-","xh_m4":"le esi eli","xh_m5":"iswekile","xh_m6":"iyadura","xh_m7":"unayo?","xh_w1":"umsebenzi","xh_w2":"utitshala","xh_w3":"um- imi-","xh_w4":"-isa","xh_w5":"ifowuni","xh_w6":"iholide","xh_w7":"phangela","xh_b1":"intloko","xh_b2":"amehlo","xh_b3":"kubuhlungu","xh_b4":"apha!","xh_b5":"ikliniki","xh_b6":"yiza","xh_b7":"ngcono","xh_p1":"-ile","xh_p2":"-e","xh_p3":"bendi-","xh_p4":"ndiza ku-","xh_p5":"liyanetha","xh_p6":"ilanga","xh_p7":"uza kuya","xh_c1":"ndonwabile","xh_c2":"ma- -e","xh_c3":"ubuntu","xh_c4":"ndicinga","xh_c5":"kuqala","xh_c6":"ndisafunda","xh_c7":"-ni"};

const XH_SRS_SEED=[];

/* ---------- Art — Cape Town / Eastern Cape, secular only.
   FAR: Table Mountain with its tablecloth cloud, Lion's Head to its left
   (all right of the title safe zone; the left far ridge stays low).
   MID: warm ochre grassland hills. NEAR: green veld with whitewashed
   rondavels (thatch cones), aloe ferox with flame-orange flower spikes,
   Nguni cattle, one flat-top acacia. No religious imagery, no humans.
   Palette vars --thatch/--wall/--aloe live in index.html next to the
   other data-lang="xh" vars (light + dark). Mascot: the blue crane —
   indwe, South Africa's national bird, a mark of honour in Xhosa
   tradition (secular). Grounding: translate-y + 100·scale = near surface. */
const XH_ALOE='<g fill="var(--tree)"><path d="M50 100 C30 92 16 76 10 58 C26 70 40 82 50 93 Z"/><path d="M50 100 C70 92 84 76 90 58 C74 70 60 82 50 93 Z"/><path d="M50 99 C39 82 34 63 37 45 C45 62 51 80 53 95 Z"/><path d="M50 99 C61 82 66 63 63 45 C55 62 49 80 47 95 Z"/><path d="M49 97 C49 78 49 60 50 44 L54 62 L54 82 L52 97 Z"/></g><path d="M44 72 L35 32" stroke="var(--bark)" stroke-width="3.5" fill="none" stroke-linecap="round"/><ellipse cx="34" cy="25" rx="5" ry="11" fill="var(--aloe)"/><path d="M57 72 L64 38" stroke="var(--bark)" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="65" cy="31" rx="4.4" ry="9.5" fill="var(--aloe)"/>';
const XH_HUT='<path fill="var(--thatch)" d="M8 64 Q50 55 92 64 L57 15 Q50 10 43 15 Z"/><path fill="var(--thatch)" d="M46 12 Q50 6 54 12 L52 16 L48 16 Z" opacity=".9"/><path fill="var(--wall)" d="M16 100 L16 61 Q50 54 84 61 L84 100 Z"/><path fill="var(--tyre)" d="M42 100 L42 76 Q50 69 58 76 L58 100 Z"/>';
const XH_COW='<ellipse cx="50" cy="66" rx="27" ry="15" fill="var(--hide)"/><path d="M29 76 L27 100 M41 79 L41 100 M59 79 L59 100 M71 76 L73 100" stroke="var(--hide)" stroke-width="6" stroke-linecap="round" fill="none"/><ellipse cx="43" cy="62" rx="10" ry="6.5" fill="#E7DCC6" opacity=".85"/><path d="M24 60 Q17 68 20 79" stroke="var(--hide)" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
const XH_COW_UP=XH_COW+'<ellipse cx="81" cy="50" rx="9.5" ry="7.5" fill="var(--hide)"/><path d="M75 43 Q70 33 75 27 M87 43 Q92 33 87 27" stroke="#D8CDB8" stroke-width="3" fill="none" stroke-linecap="round"/>';
const XH_COW_DN=XH_COW+'<ellipse cx="82" cy="80" rx="9.5" ry="7.5" fill="var(--hide)"/><path d="M76 73 Q71 63 76 57 M88 73 Q93 63 88 57" stroke="#D8CDB8" stroke-width="3" fill="none" stroke-linecap="round"/>';
const XH_ACACIA='<path fill="var(--bark)" d="M48 100 L45 62 L31 36 L35 33 L49 56 L51 30 L57 30 L55 58 L71 38 L74 41 L57 62 L54 100 Z"/><path fill="var(--tree)" d="M8 36 Q22 18 50 14 Q78 18 92 36 Q78 43 50 43 Q22 43 8 36 Z"/>';
const XH_HERO='<circle class="orb-glow" cx="1060" cy="78" r="70"/><circle class="orb" cx="1060" cy="78" r="41"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="140" cy="56" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="300" cy="98" r="1.2"/><circle cx="460" cy="44" r="2"/><circle cx="620" cy="72" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="1140" cy="120" r="1.3"/><circle cx="930" cy="60" r="1.5" class="tw" style="animation-delay:2s"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="128" rx="40" ry="15"/><ellipse cx="100" cy="122" rx="28" ry="17"/><ellipse cx="30" cy="125" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="70" rx="28" ry="11"/><ellipse cx="78" cy="65" rx="22" ry="13"/><ellipse cx="26" cy="68" rx="20" ry="10"/></g>'
+'<path class="far" opacity=".45" d="M700 266 Q740 258 770 242 L778 238 L790 242 Q810 254 836 262 L836 270 L700 270 Z"/>'
+'<path class="far" d="M0 320 L0 268 Q120 262 260 265 Q420 268 560 264 L640 262 Q692 258 722 240 Q740 224 750 212 L756 206 L764 212 Q772 221 780 228 Q792 208 802 178 L808 156 L832 150 L1008 150 L1030 156 Q1044 192 1062 222 Q1084 250 1114 258 Q1152 262 1200 260 L1200 320 Z"/>'
+'<g class="snow" opacity=".5" aria-hidden="true"><ellipse cx="852" cy="148" rx="26" ry="8"/><ellipse cx="898" cy="145" rx="30" ry="9"/><ellipse cx="946" cy="147" rx="28" ry="8"/><ellipse cx="990" cy="146" rx="23" ry="8"/><ellipse cx="1016" cy="153" rx="13" ry="10" opacity=".7"/><ellipse cx="1024" cy="166" rx="8" ry="9" opacity=".45"/></g>'
+'<path class="mid" d="M0 320 L0 292 Q150 284 320 287 Q480 290 640 283 Q800 277 960 282 Q1100 286 1200 283 L1200 320 Z"/>'
+'<path class="snow" opacity=".18" d="M180 289 Q300 285.5 430 288 L430 291 Q300 288.5 182 292 Z"/>'
+'<path class="snow" opacity=".16" d="M700 281 Q820 277.5 940 280 L940 283 Q820 280.5 702 284 Z"/>'
+'<g class="near"><path d="M0 320 L0 305 Q150 297 320 299 Q480 302 640 296 Q800 291 960 295 Q1100 298 1200 293 L1200 320 Z"/><path fill="var(--snow)" opacity=".1" d="M240 301 Q400 296 560 299 L560 302 Q400 299 242 304 Z"/><path fill="var(--snow)" opacity=".1" d="M760 293 Q900 288 1040 294 L1040 297 Q900 291 762 296 Z"/></g>'
+'<g transform="translate(38,264) scale(0.4)" aria-hidden="true">'+XH_ALOE+'</g>'
+'<g transform="translate(95,250) scale(0.5)" aria-hidden="true">'+XH_HUT+'</g>'
+'<g transform="translate(185,260) scale(0.38)" aria-hidden="true">'+XH_HUT+'</g>'
+'<g transform="translate(250,267) scale(0.32)" aria-hidden="true">'+XH_ALOE+'</g>'
+'<g transform="translate(655,266) scale(0.3)" aria-hidden="true">'+XH_HUT+'</g>'
+'<g transform="translate(860,250.5) scale(0.42)" aria-hidden="true">'+XH_COW_UP+'</g>'
+'<g transform="translate(955,261) scale(0.34)" aria-hidden="true">'+XH_COW_DN+'</g>'
+'<g transform="translate(1040,261) scale(0.36)" aria-hidden="true">'+XH_ALOE+'</g>'
+'<g transform="translate(1105,245.5) scale(0.52)" aria-hidden="true">'+XH_ACACIA+'</g>';
const XH_BAND='<circle class="orb-glow" cx="1050" cy="54" r="32"/><circle class="orb" cx="1050" cy="54" r="19"/>'
+'<path class="far" opacity=".45" d="M690 164 Q720 158 742 148 L748 144 L756 148 Q770 156 788 161 L788 168 L690 168 Z"/>'
+'<path class="far" d="M0 200 L0 168 Q160 163 330 165 Q470 164 600 162 L700 161 Q744 157 772 148 Q784 136 792 124 L797 118 L803 124 Q808 131 814 128 Q822 100 828 68 L832 62 L1018 62 L1026 68 Q1034 102 1048 130 Q1064 154 1092 159 Q1140 162 1200 160 L1200 200 Z"/>'
+'<g class="snow" opacity=".48" aria-hidden="true"><ellipse cx="854" cy="60" rx="20" ry="6"/><ellipse cx="890" cy="58" rx="23" ry="7"/><ellipse cx="928" cy="60" rx="21" ry="6"/><ellipse cx="962" cy="58" rx="18" ry="6"/><ellipse cx="985" cy="64" rx="10" ry="7" opacity=".7"/></g>'
+'<path class="mid" d="M0 200 L0 182 Q150 176 320 178 Q500 180 680 175 Q860 171 1040 175 Q1140 177 1200 175 L1200 200 Z"/>'
+'<path class="snow" opacity=".18" d="M420 178 Q520 176 620 177.5 L620 180 Q520 178.5 422 181 Z"/>'
+'<g class="near"><path d="M0 200 L0 190 Q150 184 320 186 Q500 188 680 183 Q860 179 1040 183 Q1140 185 1200 182 L1200 200 Z"/></g>'
+'<g transform="translate(30,167.7) scale(0.22)" aria-hidden="true">'+XH_ALOE+'</g>'
+'<g transform="translate(1085,157.7) scale(0.26)" aria-hidden="true">'+XH_ALOE+'</g>'
+'<g transform="translate(1128,154) scale(0.3)" aria-hidden="true">'+XH_HUT+'</g>';
function XH_MASCOT(m){
  /* blue crane in the house BUST form — a big head fills the frame, chest
     rises from the bottom edge (matches the yeti/buffalo/elephant form). */
  var base='<path d="M13 64 Q13 46 22 39 Q32 33 42 39 Q51 46 51 64 Z" fill="#8FA6BC"/>' /* chest */
  +'<path d="M44 58 Q54 53 57 46 Q50 48 44 52 Z" fill="#7C93AB"/>' /* wing plume */
  +'<circle cx="32" cy="24" r="15" fill="#A9BDD1"/>' /* head */
  +'<path d="M19 14.5 Q32 4.5 45 14.5 Q32 9.5 19 14.5 Z" fill="#EDEFF2"/>' /* pale crown */
  +'<path d="M30 34.5 L48.5 41.5 L31.5 40.5 Q28.8 37.5 30 34.5 Z" fill="#C2A15A"/>' /* bill, in profile */
  +'<path d="M30 34.5 L48.5 41.5 L40 40.9" fill="none" stroke="#A8874A" stroke-width="0.8"/>'; /* bill line */
  var f;
  if(m==='cheer')f='<path d="M21.5 22.5 Q25 19.3 28.5 22.5" fill="none" stroke="#3E4750" stroke-width="2.2" stroke-linecap="round"/><path d="M35.5 22.5 Q39 19.3 42.5 22.5" fill="none" stroke="#3E4750" stroke-width="2.2" stroke-linecap="round"/><path d="M27.5 31 Q32 34.2 36.5 31" fill="none" stroke="#3E4750" stroke-width="2" stroke-linecap="round"/>';
  else if(m==='oops')f='<path d="M21.5 19.5 Q25 18.3 28.5 19.5" fill="none" stroke="#3E4750" stroke-width="1.6" stroke-linecap="round"/><path d="M35.5 19.5 Q39 18.3 42.5 19.5" fill="none" stroke="#3E4750" stroke-width="1.6" stroke-linecap="round"/><circle cx="25" cy="23" r="2.3" fill="#3E4750"/><circle cx="39" cy="23" r="2.3" fill="#3E4750"/><path d="M28.5 32.5 Q32 30.2 35.5 32.5" fill="none" stroke="#3E4750" stroke-width="1.8" stroke-linecap="round"/><path d="M49 15 Q51.5 20 49 22 Q46.5 20 49 15 Z" fill="#7EC8E3" opacity=".85"/>';
  else f='<circle cx="25" cy="23" r="2.6" fill="#3E4750"/><circle cx="39" cy="23" r="2.6" fill="#3E4750"/><circle cx="25.9" cy="22.1" r="0.7" fill="#fff"/><circle cx="39.9" cy="22.1" r="0.7" fill="#fff"/><path d="M28 31 Q32 33.8 36 31" fill="none" stroke="#3E4750" stroke-width="2" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+base+f+'</svg>';}

/* ---------- Short-term (trip) pack — a visitor to Cape Town / the Eastern
   Cape meeting Xhosa speakers. Spine: greeting-FIRST etiquette (a request
   without Molo lands rudely), mama/tata/bhuti/sisi address as the politeness
   system (no everyday please-word), the minibus-taxi ritual (hand signs, pay
   forward, Yima!/Short left), spaza + rand realities (prices often in
   English), shisanyama sharing culture, guests are always fed (Ndihluthi
   enkosi to stop), clicks earn delight not mockery. Nearly everyone also
   speaks English — this phrasebook buys warmth, not survival. ---------- */
const XH_TRIP={
title:'Short-term',
native:'Utyelelo',
frames:[
{s:' iphi?',sr:' EE-pee',en:'Where is ___?',t:'Ask where anything is',
 items:[["ivenkile","ee-vehn-KEE-leh","the shop"],["irenki","ee-REHN-kee","the taxi rank"],["ikliniki","ee-klee-NEE-kee","the clinic"],["indlela","een-DLEH-lah","the way"],["idolophu","ee-daw-LAW-poo","the town"]]},
{s:' ikufuphi?',sr:' ee-koo-FOO-pee',en:'Is ___ near?',t:'Ask if you can walk it',
 items:[["ivenkile","ee-vehn-KEE-leh","the shop"],["irenki","ee-REHN-kee","the taxi rank"],["ikliniki","ee-klee-NEE-kee","the clinic"],["idolophu","ee-daw-LAW-poo","the town"]]},
{s:'',sr:'',en:'May I have ___?',t:'Ask for anything politely',
 items:[["Ndicela amanzi","ndee-CEH-lah ah-MAHN-zee","water"],["Ndicela iti","ndee-CEH-lah EE-tee","tea"],["Ndicela ikofu","ndee-CEH-lah ee-KAW-foo","coffee"],["Ndicela isonka","ndee-CEH-lah ee-SAWN-kah","bread"],["Ndicela uncedo","ndee-CEH-lah oon-CEH-daw","help"]]},
{s:'',sr:'',en:'I am going ___',t:'Say where you are headed',
 items:[["Ndiya edolophini","NDEE-yah eh-daw-law-PEE-nee","to town"],["Ndiya ekhaya","NDEE-yah eh-KHAH-yah","home"],["Ndiya evenkileni","NDEE-yah eh-vehn-kee-LEH-nee","to the shop"],["Ndiya esikolweni","NDEE-yah eh-see-kaw-LWEH-nee","to the school"],["Ndiya eKapa","NDEE-yah eh-KAH-pah","to Cape Town"]]}
],
sections:[
{id:'first',t:'First words',d:'The ones that open every door',
 note:'Greet BEFORE anything — a request without molo lands rudely. Nearly everyone also speaks English; your isiXhosa buys warmth, not survival, and even clumsy clicks earn real delight.',
 lines:[["molo","MAW-law","hello (to one person)"],
 ["molweni","mawl-WEH-nee","hello (to several people)"],
 ["Unjani?","oon-JAH-nee","how are you?"],
 ["ndiyaphila","ndee-yah-PEE-lah","I am fine"],
 ["ndikhona","ndee-KHAW-nah","I am okay"],
 ["enkosi","ehn-KAW-see","thank you"],
 ["uxolo","oo-XAW-law","sorry · excuse me"],
 ["ewe","EH-weh","yes"],
 ["hayi","HAH-yee","no"]]},
{id:'polite',t:'Everyone is family',d:'Address people and doors open',
 note:'Elders are mama and tata, peers are bhuti and sisi — the address IS the politeness system. There is no everyday please-word; respect rides on how you call someone.',
 lines:[["Molo mama","MAW-law MAH-mah","hello, madam"],
 ["Molo tata","MAW-law TAH-tah","hello, sir"],
 ["Enkosi sisi","ehn-KAW-see SEE-see","thank you, sis"],
 ["Uxolo bhuti","oo-XAW-law BHOO-tee","excuse me, bro"],
 ["bhuti","BHOO-tee","bro (any young man)"],
 ["sisi","SEE-see","sis (any young woman)"]]},
{id:'meet',t:'Meeting someone',d:'The first minute, in isiXhosa',
 note:'Your name and where you are from will be asked within a minute — answer and ask back. It is connection, not interrogation, and it usually ends in an invitation.',
 lines:[["Igama lakho ngubani?","ee-GAH-mah LAH-kaw ngoo-BAH-nee","what is your name?"],
 ["Ungubani?","oon-goo-BAH-nee","who are you?"],
 ["Ndiyavuya ukukwazi","ndee-yah-VOO-yah oo-koo-KWAH-zee","nice to meet you"],
 ["Uvela phi?","oo-VEH-lah PEE","where are you from?"],
 ["Ndivela phesheya","ndee-VEH-lah peh-SHEH-yah","I am from overseas"],
 ["Uthetha isiXhosa?","oo-TEH-tah ee-see-XHAW-sah","do you speak Xhosa?"],
 ["Ndisafunda","ndee-sah-FOON-dah","I am still learning"]]},
{id:'hear',t:'What you will hear',d:'Meant kindly — answer warmly',
 note:'Uya phi? from a stranger on the road is friendliness, not nosiness. Wamkelekile — you are welcome — is what every host says at the door, and means it.',
 lines:[["Uya phi?","OO-yah PEE","where are you going? (a greeting)"],
 ["Kunjani?","koon-JAH-nee","how is it going?"],
 ["Wamkelekile","wahm-keh-leh-KEE-leh","you are welcome here"],
 ["Yiza apha","YEE-zah AH-pah","come here"],
 ["Uthetha ukuthini?","oo-TEH-tah oo-koo-TEE-nee","what do you mean?"],
 ["hamba kakuhle","HAHM-bah kah-KOO-hleh","go well (said to you, leaving)"],
 ["sala kakuhle","SAH-lah kah-KOO-hleh","stay well (you say it, leaving)"]]},
{id:'numbers',t:'Numbers & rands',d:'One to ten, and the till',
 note:'Prices come in English or isiXhosa, cents never — listen for leerandi, rands. Counting to ten at a market stall is worth more than exact change.',
 lines:[["inye","EE-nyeh","one"],
 ["zimbini","zeem-BEE-nee","two"],
 ["zintathu","zeen-TAH-too","three"],
 ["zine","ZEE-neh","four"],
 ["zintlanu","zeen-TLAH-noo","five"],
 ["zintandathu","zeen-tahn-DAH-too","six"],
 ["sixhenxe","see-XHEN-xeh","seven"],
 ["sibhozo","see-BAW-zaw","eight"],
 ["lithoba","lee-TAW-bah","nine"],
 ["lishumi","lee-SHOO-mee","ten"],
 ["lishumi leerandi","lee-SHOO-mee leh-eh-RAHN-dee","ten rand"],
 ["Yimalini?","yee-mah-LEE-nee","how much is it?"]]},
{id:'ride',t:'The minibus taxi',d:'How South Africa moves',
 note:'Hail with a hand sign for your route, pay by passing coins forward, and call your stop — Yima! or the English Short left! Every route begins at the rank.',
 lines:[["iteksi","ee-TEHK-see","the minibus taxi"],
 ["irenki","ee-REHN-kee","the taxi rank"],
 ["Ndiya edolophini","NDEE-yah eh-daw-law-PEE-nee","I am going to town"],
 ["Ndiya eKapa","NDEE-yah eh-KAH-pah","I am going to Cape Town"],
 ["Ndihamba ngeteksi","ndee-HAHM-bah ngeh-TEHK-see","I go by taxi"],
 ["Yima!","YEE-mah","stop!"]]},
{id:'way',t:'Finding the way',d:'Lost — briefly',
 note:'Nobody leaves a lost stranger lost — expect a walked escort, not just pointing. Name where you are going, or show it on your phone, and ask.',
 lines:[["Ndilahlekile","ndee-lah-hleh-KEE-leh","I am lost"],
 ["Uyayazi indlela?","oo-yah-YAH-zee een-DLEH-lah","do you know the way?"],
 ["Ndicela uncedo","ndee-CEH-lah oon-CEH-daw","please help me"],
 ["kufuphi","koo-FOO-pee","near"],
 ["kude","KOO-deh","far"],
 ["apha","AH-pah","here"],
 ["phaya","PAH-yah","over there"]]},
{id:'eat',t:'Eating & the braai',d:'Where the language tastes best',
 note:'A shisanyama is a braai spot — buy meat, they grill it, the tables are shared. Kumnandi! (delicious!) is the highest compliment a cook can hear.',
 lines:[["Ndilambile","ndee-lahm-BEE-leh","I am hungry"],
 ["ndinxaniwe","ndee-nxah-NEE-weh","I am thirsty"],
 ["Ndicela amanzi","ndee-CEH-lah ah-MAHN-zee","may I have water"],
 ["ukutya","oo-KOO-tyah","food"],
 ["isonka","ee-SAWN-kah","bread"],
 ["inyama","ee-NYAH-mah","meat"],
 ["ishisanyama","ee-shee-sah-NYAH-mah","braai place"],
 ["Kumnandi!","koom-NAHN-dee","it is delicious!"],
 ["hayi enkosi","HAH-yee ehn-KAW-see","no thank you"]]},
{id:'guest',t:'Being a guest',d:'You will be fed — accept',
 note:'Guests are fed, full stop — refusing everything reads as rejection. Eat something, praise it, and say Ndihluthi enkosi only when you truly cannot go on.',
 lines:[["Masitye","mah-SEE-tyeh","let us eat (you will hear it)"],
 ["Ndihluthi enkosi","ndee-HLOO-tee ehn-KAW-see","I am full, thank you"],
 ["ndonwabile","ndaw-nwah-BEE-leh","I am happy"],
 ["Ndiyabulela","ndee-yah-boo-LEH-lah","I give thanks (the deep one)"],
 ["sobonana","saw-baw-NAH-nah","see you (at the gate)"],
 ["Sobonana ngomso","saw-baw-NAH-nah NGAWM-saw","see you tomorrow"]]},
{id:'shop',t:'The spaza & the till',d:'Corner-shop isiXhosa',
 note:'The spaza is the home-run corner shop, open when nothing else is. Prices are fixed there and at tills — bargain at market stalls only, with a smile.',
 lines:[["ispaza","ee-SPAH-zah","spaza shop"],
 ["Yimalini le?","yee-mah-LEE-nee LEH","how much is this one?"],
 ["Unayo iswekile?","oo-NAH-yaw ee-sweh-KEE-leh","do you have sugar?"],
 ["Ndinayo","ndee-NAH-yaw","I have it (you will hear)"],
 ["Andinayo","ahn-dee-NAH-yaw","I do not have it (you will hear)"],
 ["Nantsi imali","NAHN-tsee ee-MAH-lee","here is the money"],
 ["itshintshi","ee-TSHEEN-tshee","change"],
 ["iyadura","ee-yah-DOO-rah","it is expensive"]]},
{id:'trouble',t:'When things go wrong',d:'The rescue kit',
 note:'Andiqondi plus Thetha kancinci rescue any conversation. For anything medical ask for ikliniki — the clinic is the front door of healthcare everywhere.',
 lines:[["andiqondi","ahn-dee-QAWN-dee","I do not understand"],
 ["Thetha kancinci","TEH-tah kahn-CEEN-cee","speak slowly"],
 ["Uthetha ukuthini?","oo-TEH-tah oo-koo-TEE-nee","what do you mean?"],
 ["ndiyagula","ndee-yah-GOO-lah","I am sick"],
 ["ikliniki","ee-klee-NEE-kee","the clinic"],
 ["ugqirha","oo-GQEE-rah","doctor"],
 ["umbane","oom-BAH-neh","electricity (when it goes: load-shedding)"]]},
{id:'connect',t:'Staying in touch',d:'Friends, not contacts',
 note:'Sobonana — we will see each other — is the goodbye between friends. Swap numbers, send a voice note in isiXhosa, and you have made a friend, not a contact.',
 lines:[["ifowuni","ee-faw-WOO-nee","phone"],
 ["Enkosi kakhulu","ehn-KAW-see kah-KOO-loo","thank you very much"],
 ["Hambani kakuhle","hahm-BAH-nee kah-KOO-hleh","go well, all of you"],
 ["Masithethe isiXhosa","mah-see-TEH-teh ee-see-XAW-sah","let us speak Xhosa"],
 ["Ndiza kuhamba ngomso","ndee-zah koo-HAHM-bah NGAWM-saw","I am leaving tomorrow"],
 ["Ndonwabile eKapa","ndaw-nwah-BEE-leh eh-KAH-pah","I have been happy in Cape Town"]]}
]};

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
  art:{hero:XH_HERO,band:XH_BAND,mascot:XH_MASCOT},
  voiceTest:v=>/^xh(\b|[-_])/i.test(v.lang)||/xhosa/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:XH_LESSONS,units:XH_UNITS,unitsIntensive:[],sym:XH_SYM,
  vowels:XH_VOWELS,cons:XH_CONS,nums:XH_NUMS,srsSeed:XH_SRS_SEED,
  trip:XH_TRIP
});
