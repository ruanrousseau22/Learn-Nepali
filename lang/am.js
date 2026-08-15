/* ============================================================================
   Bhasaly language pack — AMHARIC (am) · አማርኛ
   ----------------------------------------------------------------------------
   ROMANIZATION SCHEME (all vocab[1] / ex.r / eg roms follow this exactly):
   - Lowercase ASCII syllable respelling, plain words: "selam", "dehna neh".
   - NO apostrophes anywhere (banned char in interpolated slots). Ejectives
     are written with a DOUBLED first letter: tte (ጠ), cche (ጨ), ppe (ጰ),
     ttse (ጸ); ቀ is q (standard Ethiopianist practice: qey, qen). The
     plain/ejective difference is TAUGHT in Zone 1 notes, not spelled.
   - The 6th-order vowel (ə) is written "i" inside words (siddist) and "ih"
     when naming the order alone; 1st order ä is "e" (selam not salam);
     4th order is "a". Gemination is phonemic but unwritten in fidel — roms
     carry it doubled (hulett, simmint); do NOT "fix" that mismatch.
   - Fidel NEVER appears in rom slots (script regex scan: U+1200–137F).
   AUDIO: am-ET-AmehaNeural via the NORMAL pipeline (extract_audio_strings.js
   am → generate_audio.py --lang am → audio-am/). Letters speak their own
   names in edge-tts — each verified by trimmed speech-length at build.
   STATUS: Zone 1 complete (s1–s7). NOT in LANG_CATALOG yet — the course must
   not become reachable in production until complete. Local testing:
   loadLangScript('am') + push a catalog entry in the console.
   Build plan & continuity: AMHARIC.md (repo root).
   ============================================================================ */

const AM_VOWELS=[["አ","a"],["ኡ","u"],["ኢ","i"],["ኣ","aa"],["ኤ","ay"],["እ","ih"],["ኦ","o"]];
const AM_CONS=[["ሀ","he"],["ለ","le"],["ሐ","he (older twin)"],["መ","me"],["ሠ","se (older twin)"],["ረ","re"],["ሰ","se"],["ሸ","she"],["ቀ","qe (tight k)"],["በ","be"],["ተ","te"],["ቸ","che"],["ኀ","he (rare twin)"],["ነ","ne"],["ኘ","nye"],["አ","a (carrier)"],["ከ","ke"],["ኸ","he (soft k)"],["ወ","we"],["ዐ","a (older twin)"],["ዘ","ze"],["ዠ","zhe"],["የ","ye"],["ደ","de"],["ጀ","je"],["ገ","ge"],["ጠ","tte (tight t)"],["ጨ","cche (tight ch)"],["ጰ","ppe (tight p)"],["ጸ","ttse (tight ts)"],["ፀ","ttse (older twin)"],["ፈ","fe"],["ፐ","pe"]];
const AM_NUMS=[["አንድ","and"],["ሁለት","hulett"],["ሶስት","sost"],["አራት","arat"],["አምስት","amest"],["ስድስት","siddist"],["ሰባት","sebat"],["ስምንት","simmint"],["ዘጠኝ","zetegn"],["አስር","asser"]];

const AM_LESSONS=[

/* ---------- s1 · One row, seven vowels ---------- */
{"id":"am_s1","title":"One row, seven vowels","step":"learn","meta":"The fidel — a writing system that sings","vocab":[["ለ","le","the letter le"],["ሉ","lu","the letter lu"],["ላ","la","the letter la"],["ሊ","li","the letter li"],["ሎ","lo","the letter lo"]],"ex":[
{"t":"note","tag":"How the fidel works","q":"One letter, seven dresses","body":"<p>Amharic is written in the <b>fidel</b> — and here is its secret: each consonant is ONE shape that changes slightly for each of seven vowels. Meet the l-row: <b>ለ</b> is <i>le</i>, <b>ሉ</b> is <i>lu</i>, <b>ላ</b> is <i>la</i>. Learn the shape once, and seven letters come free.</p>","eg":[["ለ","le","the letter le"],["ሉ","lu","the letter lu"],["ላ","la","the letter la"]]},
{"t":"li","q":"Which letter do you hear?","say":"ለ","o":["ለ","ላ"],"a":0},
{"t":"mc","q":"ሉ is the l-shape wearing which vowel?","o":["u","a","o"],"a":0},
{"t":"note","tag":"Two more dresses","q":"ሊ and ሎ","body":"<p><b>ሊ</b> is <i>li</i> — the little leg gets a bend. <b>ሎ</b> is <i>lo</i> — a ring on top. Seven orders in all; you have five already, and the pattern repeats for every consonant in the language.</p>","eg":[["ሊ","li","the letter li"],["ሎ","lo","the letter lo"]]},
{"t":"li","q":"Which letter do you hear?","say":"ሎ","o":["ሎ","ሊ"],"a":0},
{"t":"mc","q":"What does learning one fidel shape give you?","o":["seven letters at once","one letter","a whole word"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ላ","o":["ላ","ሉ"],"a":0},
{"t":"mc","q":"Which one is li?","o":["ሊ","ለ","ሎ"],"a":0}
]},
{"id":"am_s1_2","title":"Hearing the l-row","step":"recognize","meta":"Five orders by ear","vocab":[],"ex":[
{"t":"li","q":"Which letter do you hear?","say":"ሉ","o":["ሉ","ለ","ላ"],"a":0},
{"t":"mc","q":"ለ sounds like…","o":["le","lu","lo"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ሊ","o":["ሊ","ሎ","ሉ"],"a":0},
{"t":"mc","q":"Which one is la?","o":["ላ","ለ","ሊ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ለ","o":["ለ","ሉ","ሎ"],"a":0},
{"t":"mc","q":"The seven variants of one consonant are called its…","o":["orders","cases","tones"],"a":0}
]},
{"id":"am_s1_3","title":"Building the l-row","step":"build","meta":"Shape by shape","vocab":[],"ex":[
{"t":"mc","q":"Pick the letter le","o":["ለ","ላ","ሎ"],"a":0},
{"t":"wb","q":"Build the row in order: le, lu, la","a":["ለ","ሉ","ላ"],"pool":["ለ","ሉ","ላ","ሎ"]},
{"t":"mc","q":"Pick the letter lu","o":["ሉ","ሊ","ለ"],"a":0},
{"t":"wb","q":"Build: li, lo","a":["ሊ","ሎ"],"pool":["ሊ","ሎ","ላ"]},
{"t":"li","q":"Which letter do you hear?","say":"ሊ","o":["ሊ","ለ","ላ"],"a":0}
]},
{"id":"am_s1_4","title":"The l-row in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the letter to its sound","pairs":[["ለ","le"],["ሉ","lu"],["ላ","la"]]},
{"t":"li","q":"Which letter do you hear?","say":"ሎ","o":["ሎ","ሉ","ለ"],"a":0},
{"t":"match","q":"Match the letter to its sound","pairs":[["ሊ","li"],["ሎ","lo"]]},
{"t":"mc","q":"One shape, seven vowels — so 33 base shapes give you roughly…","o":["230 letters","33 letters","7 letters"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ላ","o":["ላ","ሊ","ሎ"],"a":0}
]},
{"id":"am_s1_5","title":"Checkpoint: the l-row","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Which one is lo?","o":["ሎ","ለ","ሉ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ለ","o":["ለ","ላ","ሎ"],"a":0},
{"t":"mc","q":"ላ sounds like…","o":["la","le","li"],"a":0},
{"t":"mc","q":"The fidel is best described as…","o":["consonant shapes dressed in seven vowels","an alphabet of single sounds","pictures of words"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ሉ","o":["ሉ","ሊ","ላ"],"a":0}
]},

/* ---------- s2 · The m-row and the bare consonant ---------- */
{"id":"am_s2","title":"The m-row and the bare consonant","step":"learn","meta":"መ — and the order with no vowel at all","vocab":[["መ","me","the letter me"],["ሙ","mu","the letter mu"],["ማ","ma","the letter ma"],["ም","m","the letter m (bare)"],["ሚ","mi","the letter mi"]],"ex":[
{"t":"note","tag":"A new row","q":"መ, ሙ, ማ","body":"<p>The m-row wears the same seven dresses you already know: <b>መ</b> <i>me</i>, <b>ሙ</b> <i>mu</i>, <b>ማ</b> <i>ma</i>. Notice you can already GUESS the shapes — that is the fidel keeping its promise.</p>","eg":[["መ","me","the letter me"],["ሙ","mu","the letter mu"],["ማ","ma","the letter ma"]]},
{"t":"li","q":"Which letter do you hear?","say":"መ","o":["መ","ማ"],"a":0},
{"t":"mc","q":"ማ sounds like…","o":["ma","me","mu"],"a":0},
{"t":"note","tag":"The special one","q":"ም — the bare consonant","body":"<p>The sixth order is special: <b>ም</b> is just <i>m</i> — no vowel, a bare consonant. This is how Amharic ends words and stacks sounds. Remember it: the sixth order is the quiet one.</p>","eg":[["ም","m","the letter m (bare)"],["ሚ","mi","the letter mi"]]},
{"t":"li","q":"Full or bare — which do you hear?","say":"ም","o":["ም","መ"],"a":0},
{"t":"mc","q":"The sixth order of any row carries…","o":["no vowel at all","the o vowel","a doubled vowel"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ሚ","o":["ሚ","ሙ"],"a":0},
{"t":"mc","q":"Which one is the bare m?","o":["ም","መ","ማ"],"a":0}
]},
{"id":"am_s2_2","title":"Hearing the m-row","step":"recognize","meta":"The new row by ear","vocab":[],"ex":[
{"t":"li","q":"Which letter do you hear?","say":"ሙ","o":["ሙ","መ","ም"],"a":0},
{"t":"mc","q":"What does መ sound like?","o":["me","ma","mi"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ማ","o":["ማ","ሚ","ሙ"],"a":0},
{"t":"mc","q":"Which one is mi?","o":["ሚ","ማ","ም"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ም","o":["ም","መ","ሙ"],"a":0},
{"t":"mc","q":"Words END in Amharic most often with which order?","o":["the bare sixth","the first","the o-order"],"a":0}
]},
{"id":"am_s2_3","title":"Building the m-row","step":"build","meta":"Same dance, new partner","vocab":[],"ex":[
{"t":"mc","q":"Pick the letter mu","o":["ሙ","ም","መ"],"a":0},
{"t":"wb","q":"Build the row in order: me, mu, ma","a":["መ","ሙ","ማ"],"pool":["መ","ሙ","ማ","ም"]},
{"t":"mc","q":"Pick the bare m","o":["ም","ማ","ሚ"],"a":0},
{"t":"wb","q":"Build: mi, then bare m","a":["ሚ","ም"],"pool":["ሚ","ም","ማ"]},
{"t":"li","q":"Which letter do you hear?","say":"መ","o":["መ","ማ","ም"],"a":0}
]},
{"id":"am_s2_4","title":"The m-row in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the letter to its sound","pairs":[["መ","me"],["ሙ","mu"],["ም","m"]]},
{"t":"li","q":"Which letter do you hear?","say":"ማ","o":["ማ","መ","ሚ"],"a":0},
{"t":"match","q":"Match the letter to its sound","pairs":[["ማ","ma"],["ሚ","mi"]]},
{"t":"mc","q":"ለ is to ል as መ is to…","o":["ም","ማ","ሙ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ሚ","o":["ሚ","ም","ማ"],"a":0}
]},
{"id":"am_s2_5","title":"Checkpoint: the m-row","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"Which one is ma?","o":["ማ","መ","ም"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ም","o":["ም","ማ","መ"],"a":0},
{"t":"mc","q":"ም is…","o":["m with no vowel","me","mo"],"a":0},
{"t":"mc","q":"Review — which one is la?","o":["ላ","ለ","ሎ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ሙ","o":["ሙ","ሚ","መ"],"a":0}
]},

/* ---------- s3 · The s-row — and your first word ---------- */
{"id":"am_s3","title":"The s-row — and your first word","step":"learn","meta":"ሰ ሱ ሳ ስ — then ሰላም","vocab":[["ሰ","se","the letter se"],["ሱ","su","the letter su"],["ሳ","sa","the letter sa"],["ስ","s","the letter s (bare)"],["ሰላም","selam","hello · peace"]],"ex":[
{"t":"note","tag":"The s-row","q":"ሰ, ሱ, ሳ, ስ","body":"<p>The s-row: <b>ሰ</b> <i>se</i>, <b>ሱ</b> <i>su</i>, <b>ሳ</b> <i>sa</i> — and the quiet sixth, <b>ስ</b> <i>s</i>. Three rows in, the system already feels like yours.</p>","eg":[["ሰ","se","the letter se"],["ሱ","su","the letter su"],["ሳ","sa","the letter sa"],["ስ","s","the letter s (bare)"]]},
{"t":"li","q":"Which letter do you hear?","say":"ሰ","o":["ሰ","ሳ"],"a":0},
{"t":"mc","q":"Which one is the bare s?","o":["ስ","ሰ","ሱ"],"a":0},
{"t":"note","tag":"The payoff","q":"ሰላም — your first word","body":"<p>Now read: <b>ሰ</b> se + <b>ላ</b> la + <b>ም</b> m — <b>ሰላም</b>, <i>selam</i>. It means <i>peace</i>, and it is how Ethiopia says <i>hello</i>. You just read your first Amharic word from letters you own.</p>","eg":[["ሰላም","selam","hello · peace"]]},
{"t":"li","q":"Which one do you hear?","say":"ሰላም","o":["ሰላም","ሰ"],"a":0},
{"t":"mc","q":"ሰላም means…","o":["hello and peace","goodbye","thank you"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ሱ","o":["ሱ","ሰ"],"a":0},
{"t":"mc","q":"ሰላም is built from…","o":["se + la + m","sa + le + mu","s + le + ma"],"a":0}
]},
{"id":"am_s3_2","title":"Hearing the s-row","step":"recognize","meta":"From letters to a word","vocab":[],"ex":[
{"t":"li","q":"Which letter do you hear?","say":"ሳ","o":["ሳ","ሰ","ስ"],"a":0},
{"t":"mc","q":"What does ሱ sound like?","o":["su","se","sa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰላም","o":["ሰላም","ሳ","ላ"],"a":0},
{"t":"mc","q":"Which one is se?","o":["ሰ","ሱ","ሳ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ስ","o":["ስ","ሰ","ሱ"],"a":0},
{"t":"mc","q":"The last letter of ሰላም is…","o":["ም","ማ","ስ"],"a":0}
]},
{"id":"am_s3_3","title":"Building selam","step":"build","meta":"Letters into greeting","vocab":[],"ex":[
{"t":"wb","q":"Build the word: selam (hello)","a":["ሰ","ላ","ም"],"pool":["ሰ","ላ","ም","ሱ"]},
{"t":"mc","q":"Pick the letter sa","o":["ሳ","ስ","ሰ"],"a":0},
{"t":"wb","q":"Build the row in order: se, su, sa","a":["ሰ","ሱ","ሳ"],"pool":["ሰ","ሱ","ሳ","ስ"]},
{"t":"mc","q":"Pick the bare s","o":["ስ","ሳ","ሱ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰላም","o":["ሰላም","ሰ","ም"],"a":0}
]},
{"id":"am_s3_4","title":"The s-row in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the letter to its sound","pairs":[["ሰ","se"],["ሱ","su"],["ስ","s"]]},
{"t":"li","q":"Which one do you hear?","say":"ሰላም","o":["ሰላም","ሳ","ሱ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሰላም","hello · peace"],["ሳ","the letter sa"]]},
{"t":"mc","q":"Reading ሰላም from three taught letters proves…","o":["the fidel unlocks whole words fast","Amharic has no vowels","words must be memorized as pictures"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ሰ","o":["ሰ","ስ","ሳ"],"a":0}
]},
{"id":"am_s3_5","title":"Checkpoint: the s-row","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ሰላም means…","o":["hello · peace","good night","welcome"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰላም","o":["ሰላም","ሰ","ላ"],"a":0},
{"t":"mc","q":"Which one is su?","o":["ሱ","ሰ","ሳ"],"a":0},
{"t":"mc","q":"Review — the bare sixth order of the m-row is…","o":["ም","መ","ማ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ሳ","o":["ሳ","ሱ","ሰ"],"a":0}
]},

/* ---------- s4 · The tight sounds ---------- */
{"id":"am_s4","title":"The tight sounds","step":"learn","meta":"Ejectives — Amharic pops its consonants","vocab":[["ተ","te","the letter te"],["ጠ","tte","the letter tte (tight t)"],["ከ","ke","the letter ke"],["ቀ","qe","the letter qe (tight k)"],["ቸ","che","the letter che"],["ጨ","cche","the letter cche (tight ch)"]],"ex":[
{"t":"note","tag":"A new kind of sound","q":"Tight consonants","body":"<p>Amharic has pairs of consonants English merges: a plain one and a TIGHT one — made by holding breath behind the tongue and popping it. Plain <b>ተ</b> <i>te</i> against tight <b>ጠ</b> (we write it <i>tte</i>). The pop is the whole difference.</p>","eg":[["ተ","te","the letter te"],["ጠ","tte","the letter tte (tight t)"]]},
{"t":"li","q":"Plain or tight — which do you hear?","say":"ጠ","o":["ጠ","ተ"],"a":0},
{"t":"mc","q":"The tight consonants are made by…","o":["popping held breath","whispering","nasal air"],"a":0},
{"t":"note","tag":"The k pair","q":"ከ and ቀ","body":"<p>Plain <b>ከ</b> <i>ke</i> against tight <b>ቀ</b> <i>qe</i> — the q of qey (red) and qen (day). Your ear will learn the pop before your mouth does; both count as progress.</p>","eg":[["ከ","ke","the letter ke"],["ቀ","qe","the letter qe (tight k)"]]},
{"t":"li","q":"Plain or tight — which do you hear?","say":"ቀ","o":["ቀ","ከ"],"a":0},
{"t":"mc","q":"We write the tight k as…","o":["q","kk","kh"],"a":0},
{"t":"note","tag":"The ch pair","q":"ቸ and ጨ","body":"<p>One more pair: plain <b>ቸ</b> <i>che</i> against tight <b>ጨ</b> <i>cche</i>. Three pairs is enough to own the idea — the rest of the tight family works exactly the same way.</p>","eg":[["ቸ","che","the letter che"],["ጨ","cche","the letter cche (tight ch)"]]},
{"t":"li","q":"Plain or tight — which do you hear?","say":"ጨ","o":["ጨ","ቸ"],"a":0},
{"t":"mc","q":"Which one is the tight ch?","o":["ጨ","ቸ","ከ"],"a":0}
]},
{"id":"am_s4_2","title":"Hearing the pop","step":"recognize","meta":"Plain vs tight by ear","vocab":[],"ex":[
{"t":"li","q":"Which letter do you hear?","say":"ተ","o":["ተ","ጠ","ከ"],"a":0},
{"t":"mc","q":"ቀ is the tight partner of…","o":["ከ","ተ","ቸ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ከ","o":["ከ","ቀ","ተ"],"a":0},
{"t":"mc","q":"Which one is plain che?","o":["ቸ","ጨ","ጠ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ጠ","o":["ጠ","ተ","ቀ"],"a":0},
{"t":"mc","q":"If you cannot pop the sound yet…","o":["hearing the difference already counts","skip these letters","use English t"],"a":0}
]},
{"id":"am_s4_3","title":"Building the pairs","step":"build","meta":"Plain beside tight","vocab":[],"ex":[
{"t":"mc","q":"Pick the tight t","o":["ጠ","ተ","ቸ"],"a":0},
{"t":"wb","q":"Build the pair: plain te, tight tte","a":["ተ","ጠ"],"pool":["ተ","ጠ","ቀ"]},
{"t":"mc","q":"Pick the plain k","o":["ከ","ቀ","ጨ"],"a":0},
{"t":"wb","q":"Build the pair: plain che, tight cche","a":["ቸ","ጨ"],"pool":["ቸ","ጨ","ተ"]},
{"t":"li","q":"Which letter do you hear?","say":"ቸ","o":["ቸ","ጨ","ከ"],"a":0}
]},
{"id":"am_s4_4","title":"The pairs in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match plain to tight","pairs":[["ተ","ጠ"],["ከ","ቀ"],["ቸ","ጨ"]]},
{"t":"li","q":"Which letter do you hear?","say":"ቀ","o":["ቀ","ከ","ጠ"],"a":0},
{"t":"match","q":"Match the letter to its sound","pairs":[["ጠ","tte"],["ቀ","qe"],["ጨ","cche"]]},
{"t":"mc","q":"qey (red) and qen (day) start with…","o":["ቀ","ከ","ጀ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ተ","o":["ተ","ቸ","ጠ"],"a":0}
]},
{"id":"am_s4_5","title":"Checkpoint: the tight sounds","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"The difference between ተ and ጠ is…","o":["a pop of held breath","the vowel","the length"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ጨ","o":["ጨ","ቸ","ቀ"],"a":0},
{"t":"mc","q":"Which one is qe?","o":["ቀ","ከ","ጠ"],"a":0},
{"t":"mc","q":"Review — ሰላም is read…","o":["selam","salom","silm"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ከ","o":["ከ","ቀ","ተ"],"a":0}
]},

/* ---------- s5 · Breath letters and the n-row ---------- */
{"id":"am_s5","title":"Breath letters and the n-row","step":"learn","meta":"ሀ, አ, ነ — and reading ማን","vocab":[["ሀ","ha","the letter ha"],["አ","a","the letter a (vowel carrier)"],["ነ","ne","the letter ne"],["ን","n","the letter n (bare)"],["ማን","man","who?"],["እኔ","ine","I · me"]],"ex":[
{"t":"note","tag":"The breath and the carrier","q":"ሀ and አ","body":"<p><b>ሀ</b> is <i>ha</i> — a soft breath. <b>አ</b> is quieter still: a carrier that holds a vowel with no consonant at all — Amharic uses it to start words like <i>Amarigna</i>. (The fidel keeps older twins of both from its classical past — same sounds, met later.)</p>","eg":[["ሀ","ha","the letter ha"],["አ","a","the letter a (vowel carrier)"]]},
{"t":"li","q":"Which letter do you hear?","say":"ሀ","o":["ሀ","አ"],"a":0},
{"t":"mc","q":"አ is best described as…","o":["a vowel carrier","a tight consonant","a number"],"a":0},
{"t":"note","tag":"The n-row","q":"ነ and ን — then read ማን","body":"<p><b>ነ</b> <i>ne</i>, and its quiet sixth <b>ን</b> <i>n</i>. Now read a real question word: <b>ማ</b> ma + <b>ን</b> n — <b>ማን</b>, <i>man</i> — <i>who?</i></p>","eg":[["ነ","ne","the letter ne"],["ን","n","the letter n (bare)"],["ማን","man","who?"]]},
{"t":"li","q":"Which one do you hear?","say":"ማን","o":["ማን","ነ"],"a":0},
{"t":"mc","q":"ማን means…","o":["who?","what?","where?"],"a":0},
{"t":"note","tag":"And read this","q":"እኔ — I","body":"<p>One more: <b>እ</b> (the carrier in its quiet sixth order) + <b>ኔ</b> (n-row wearing ay) — <b>እኔ</b>, <i>ine</i> — <i>I, me</i>. The most useful word you will ever read.</p>","eg":[["እኔ","ine","I · me"]]},
{"t":"li","q":"Which one do you hear?","say":"እኔ","o":["እኔ","ማን"],"a":0},
{"t":"mc","q":"እኔ means…","o":["I · me","you","we"],"a":0}
]},
{"id":"am_s5_2","title":"Hearing the breath letters","step":"recognize","meta":"Soft sounds by ear","vocab":[],"ex":[
{"t":"li","q":"Which letter do you hear?","say":"ነ","o":["ነ","ን","ሀ"],"a":0},
{"t":"mc","q":"What does ሀ sound like?","o":["ha","a","na"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማን","o":["ማን","እኔ","ማ"],"a":0},
{"t":"mc","q":"Which one means I?","o":["እኔ","ማን","ሰላም"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እኔ","o":["እኔ","ነ","ሰላም"],"a":0},
{"t":"mc","q":"ማን is built from…","o":["ma + bare n","man + a","m + an"],"a":0}
]},
{"id":"am_s5_3","title":"Building with breath","step":"build","meta":"Words from quiet letters","vocab":[],"ex":[
{"t":"wb","q":"Build the word: man (who?)","a":["ማ","ን"],"pool":["ማ","ን","ነ"]},
{"t":"mc","q":"Pick the vowel carrier","o":["አ","ሀ","ነ"],"a":0},
{"t":"wb","q":"Build the pair: ne, then bare n","a":["ነ","ን"],"pool":["ነ","ን","ና"]},
{"t":"mc","q":"Pick the letter ha","o":["ሀ","አ","ን"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማን","o":["ማን","እኔ","ን"],"a":0}
]},
{"id":"am_s5_4","title":"Breath letters in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the letter to its sound","pairs":[["ሀ","ha"],["አ","a"],["ን","n"]]},
{"t":"li","q":"Which one do you hear?","say":"እኔ","o":["እኔ","ማን","ሀ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ማን","who?"],["እኔ","I · me"]]},
{"t":"mc","q":"ሰላም! ማን…? — the stranger at the door is asking…","o":["who is it?","what time is it?","is it far?"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"አ","o":["አ","ሀ","ነ"],"a":0}
]},
{"id":"am_s5_5","title":"Checkpoint: breath letters","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ማን means…","o":["who?","me","hello"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማን","o":["ማን","እኔ","ነ"],"a":0},
{"t":"mc","q":"Which one means I?","o":["እኔ","ማን","አ"],"a":0},
{"t":"mc","q":"Review — the tight partner of ከ is…","o":["ቀ","ጠ","ጨ"],"a":0},
{"t":"li","q":"Which letter do you hear?","say":"ን","o":["ን","ነ","ም"],"a":0}
]},

/* ---------- s6 · Doubling — and words you can already read ---------- */
{"id":"am_s6","title":"Doubling — and words you can already read","step":"learn","meta":"Gemination, plus the fidel pays rent","vocab":[["ላም","lam","cow"],["ሌላ","layla","another · other"],["ሙሉ","mulu","full · whole"],["ሱስ","sus","addiction · habit"]],"ex":[
{"t":"note","tag":"The invisible double","q":"Letters that lean in","body":"<p>Amharic loves DOUBLED consonants — <i>hulett</i> (two) really holds its l — but the fidel does not write the doubling. Your ear carries it. Our roms write it out (hulett, simmint) so you never lose it.</p>","eg":[["ላም","lam","cow"]]},
{"t":"li","q":"Which one do you hear?","say":"ላም","o":["ላም","ላ"],"a":0},
{"t":"mc","q":"ላም — read it: la + bare m…","o":["lam, a cow","lum, a boy","lom, a lime"],"a":0},
{"t":"note","tag":"Free words","q":"ሌላ and ሙሉ","body":"<p>Read with letters you own: <b>ሌ</b> lay + <b>ላ</b> la — <b>ሌላ</b> <i>layla</i>, <i>another</i>. <b>ሙ</b> mu + <b>ሉ</b> lu — <b>ሙሉ</b> <i>mulu</i>, <i>full</i>. Every new row will keep paying like this.</p>","eg":[["ሌላ","layla","another · other"],["ሙሉ","mulu","full · whole"]]},
{"t":"li","q":"Which one do you hear?","say":"ሌላ","o":["ሌላ","ሙሉ"],"a":0},
{"t":"mc","q":"ሙሉ means…","o":["full · whole","empty","other"],"a":0},
{"t":"note","tag":"One more read","q":"ሱስ","body":"<p><b>ሱ</b> su + <b>ስ</b> s — <b>ሱስ</b> <i>sus</i>, <i>a habit you cannot drop</i> (Ethiopians say it fondly of coffee). Four real words today, all read, none memorized.</p>","eg":[["ሱስ","sus","addiction · habit"]]},
{"t":"li","q":"Which one do you hear?","say":"ሱስ","o":["ሱስ","ሌላ"],"a":0},
{"t":"mc","q":"Which one means another?","o":["ሌላ","ሙሉ","ላም"],"a":0}
]},
{"id":"am_s6_2","title":"Hearing the free words","step":"recognize","meta":"Read words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሙሉ","o":["ሙሉ","ሌላ","ሱስ"],"a":0},
{"t":"mc","q":"What does ላም mean?","o":["cow","milk","farm"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ላም","o":["ላም","ሙሉ","ማን"],"a":0},
{"t":"mc","q":"Which one means full?","o":["ሙሉ","ሱስ","ሌላ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሱስ","o":["ሱስ","ላም","ሌላ"],"a":0},
{"t":"mc","q":"The doubling in hulett is…","o":["heard but not written in fidel","written twice in fidel","optional"],"a":0}
]},
{"id":"am_s6_3","title":"Building the free words","step":"build","meta":"Read, then assemble","vocab":[],"ex":[
{"t":"wb","q":"Build the word: lam (cow)","a":["ላ","ም"],"pool":["ላ","ም","ማ"]},
{"t":"wb","q":"Build the word: mulu (full)","a":["ሙ","ሉ"],"pool":["ሙ","ሉ","ሱ"]},
{"t":"mc","q":"Pick the word for another","o":["ሌላ","ሙሉ","ሱስ"],"a":0},
{"t":"wb","q":"Build the word: sus (habit)","a":["ሱ","ስ"],"pool":["ሱ","ስ","ሰ"]},
{"t":"li","q":"Which one do you hear?","say":"ሌላ","o":["ሌላ","ሱስ","ሙሉ"],"a":0}
]},
{"id":"am_s6_4","title":"Free words in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ላም","cow"],["ሌላ","another · other"],["ሙሉ","full · whole"]]},
{"t":"li","q":"Which one do you hear?","say":"ላም","o":["ላም","ሌላ","ሱስ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሱስ","addiction · habit"],["ማን","who?"]]},
{"t":"mc","q":"Ethiopians fondly call coffee a…","o":["ሱስ","ላም","ሙሉ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሙሉ","o":["ሙሉ","ሱስ","ላም"],"a":0}
]},
{"id":"am_s6_5","title":"Checkpoint: the free words","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ሌላ means…","o":["another · other","full","cow"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሱስ","o":["ሱስ","ሙሉ","ላም"],"a":0},
{"t":"mc","q":"Which one means cow?","o":["ላም","ሌላ","ማን"],"a":0},
{"t":"mc","q":"Review — እኔ means…","o":["I · me","who?","hello"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ላም","o":["ላም","ማን","ሙሉ"],"a":0}
]},

/* ---------- s7 · Meet Amharic ---------- */
{"id":"am_s7","title":"Meet Amharic","step":"learn","meta":"Selam, eshi — the words that open Ethiopia","vocab":[["ሰላም ነው?","selam new?","is everything peaceful? (a greeting)"],["አማርኛ","amarigna","Amharic"],["አዎ","awo","yes"],["እሺ","ishi","okay · sure"]],"ex":[
{"t":"note","tag":"The greeting behind the greeting","q":"ሰላም ነው?","body":"<p>You know ሰላም. Ethiopians stretch it into a question: <b>ሰላም ነው?</b> — <i>is it peace?</i> — meaning <i>all well?</i> The answer is the same word back: ሰላም ነው. Peace offered, peace returned.</p>","eg":[["ሰላም ነው?","selam new?","is everything peaceful? (a greeting)"]]},
{"t":"li","q":"Which one do you hear?","say":"ሰላም ነው?","o":["ሰላም ነው?","ሰላም"],"a":0},
{"t":"mc","q":"ሰላም ነው? asks…","o":["is everything peaceful?","who are you?","where is it?"],"a":0},
{"t":"note","tag":"The language and the yes","q":"አማርኛ and አዎ","body":"<p><b>አማርኛ</b> — <i>amarigna</i> — is the name of this language, and you can already read its first letter. <b>አዎ</b> — <i>awo</i> — is <i>yes</i>.</p>","eg":[["አማርኛ","amarigna","Amharic"],["አዎ","awo","yes"]]},
{"t":"li","q":"Which one do you hear?","say":"አማርኛ","o":["አማርኛ","አዎ"],"a":0},
{"t":"mc","q":"አዎ means…","o":["yes","no","maybe"],"a":0},
{"t":"note","tag":"The most Ethiopian word","q":"እሺ","body":"<p><b>እሺ</b> — <i>ishi</i> — is <i>okay, sure, deal</i> — the soft agreeable yes that oils every Ethiopian conversation. You will hear it fifty times a day, and saying it well makes you instantly likeable.</p>","eg":[["እሺ","ishi","okay · sure"]]},
{"t":"li","q":"Which one do you hear?","say":"እሺ","o":["እሺ","አዎ"],"a":0},
{"t":"mc","q":"እሺ means…","o":["okay · sure","hello","thank you"],"a":0}
]},
{"id":"am_s7_2","title":"Hearing the openers","step":"recognize","meta":"First conversation by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"አዎ","o":["አዎ","እሺ","አማርኛ"],"a":0},
{"t":"mc","q":"What does አማርኛ mean?","o":["Amharic","Ethiopia","language"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰላም ነው?","o":["ሰላም ነው?","አማርኛ","ሰላም"],"a":0},
{"t":"mc","q":"Which one means okay?","o":["እሺ","አዎ","ማን"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እሺ","o":["እሺ","ሰላም ነው?","አዎ"],"a":0},
{"t":"mc","q":"The answer to ሰላም ነው? is…","o":["ሰላም ነው","አዎ ማን","ሌላ"],"a":0}
]},
{"id":"am_s7_3","title":"Building the openers","step":"build","meta":"Say your first exchange","vocab":[],"ex":[
{"t":"wb","q":"Build: is everything peaceful?","a":["ሰላም","ነው?"],"pool":["ሰላም","ነው?","እሺ"]},
{"t":"mc","q":"Pick the word for yes","o":["አዎ","እሺ","ማን"],"a":0},
{"t":"wb","q":"Build the word: ishi (okay)","a":["እ","ሺ"],"pool":["እ","ሺ","ሽ"]},
{"t":"mc","q":"Pick the name of the language","o":["አማርኛ","ሰላም","አዎ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አማርኛ","o":["አማርኛ","እሺ","ሰላም ነው?"],"a":0}
]},
{"id":"am_s7_4","title":"The openers in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሰላም ነው?","is everything peaceful?"],["አዎ","yes"],["እሺ","okay · sure"]]},
{"t":"li","q":"Which one do you hear?","say":"ሰላም ነው?","o":["ሰላም ነው?","እሺ","አዎ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አማርኛ","Amharic"],["ሰላም","hello · peace"]]},
{"t":"mc","q":"The soft agreeable word you will hear fifty times a day…","o":["እሺ","አዎ","ላም"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አዎ","o":["አዎ","አማርኛ","እሺ"],"a":0}
]},
{"id":"am_s7_5","title":"Checkpoint: Zone 1 complete","step":"checkpoint","meta":"The sounds of Amharic — show it all","vocab":[],"ex":[
{"t":"mc","q":"እሺ means…","o":["okay · sure","yes","who?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰላም ነው?","o":["ሰላም ነው?","ሰላም","አማርኛ"],"a":0},
{"t":"mc","q":"Review — one fidel shape gives you…","o":["seven letters","one letter","a sentence"],"a":0},
{"t":"mc","q":"Review — the tight partner of ተ is…","o":["ጠ","ቀ","ጨ"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ማን","o":["ማን","ላም","እኔ"],"a":0},
{"t":"mc","q":"Review — which one means another?","o":["ሌላ","ሙሉ","ሱስ"],"a":0},
{"t":"mc","q":"Review — ሰላም is both hello and…","o":["peace","goodbye","welcome"],"a":0}
]}
];

const AM_UNITS=[
{"n":1,"t":"The sounds of Amharic","d":"The fidel system, the tight consonants — and your first real words","lessons":["am_s1","am_s1_2","am_s1_3","am_s1_4","am_s1_5","am_s2","am_s2_2","am_s2_3","am_s2_4","am_s2_5","am_s3","am_s3_2","am_s3_3","am_s3_4","am_s3_5","am_s4","am_s4_2","am_s4_3","am_s4_4","am_s4_5","am_s5","am_s5_2","am_s5_3","am_s5_4","am_s5_5","am_s6","am_s6_2","am_s6_3","am_s6_4","am_s6_5","am_s7","am_s7_2","am_s7_3","am_s7_4","am_s7_5"]}
];

const AM_SYM={"am_s1":"ለ ሉ ላ","am_s2":"መ ም","am_s3":"ሰላም","am_s4":"ተ ጠ","am_s5":"ማን","am_s6":"ላም","am_s7":"እሺ"};

const AM_SRS_SEED=[];

registerPack({
  code:'am',
  name:'Amharic',
  nativeName:'አማርኛ',
  ttsLocale:'am-ET',
  script:/[ሀ-፿ᎀ-᎟ⶀ-⷟꬀-꬯]/,
  audioBase:'audio-am/',
  storageKey:'sajilo_am',
  brand:{h1:'Learn <em>Amharic</em>'},
  alpha:{native:'ፊደል',vowels:'አናባቢዎች',cons:'ተነባቢዎች',nums:'ቁጥሮች',review:'ክለሳ',settings:'ማስተካከያ'},
  voiceTest:v=>/^am(\b|[-_])/i.test(v.lang)||/amharic/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:AM_LESSONS,units:AM_UNITS,unitsIntensive:[],sym:AM_SYM,
  vowels:AM_VOWELS,cons:AM_CONS,nums:AM_NUMS,srsSeed:AM_SRS_SEED
});
