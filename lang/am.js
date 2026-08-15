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
]},

/* ---------- g1 · Are you well? ---------- */
{"id":"am_g1","title":"Are you well?","step":"learn","meta":"Dehna neh, dehna nesh — Amharic greets by gender","vocab":[["ደህና ነህ?","dehna neh?","are you well? (to a man)"],["ደህና ነሽ?","dehna nesh?","are you well? (to a woman)"],["ደህና ነኝ","dehna negn","I am well"],["እግዚአብሔር ይመስገን","igziabher yimesgen","God be thanked (the set reply)"]],"ex":[
{"t":"note","tag":"The everyday question","q":"ደህና ነህ? · ደህና ነሽ?","body":"<p>Amharic greets by gender: to a man, <b>ደህና ነህ?</b> <i>dehna neh?</i>; to a woman, <b>ደህና ነሽ?</b> <i>dehna nesh?</i> — both mean <i>are you well?</i> The ending does the work: -h to him, -sh to her. You will switch between them all day, every day.</p>","eg":[["ደህና ነህ?","dehna neh?","are you well? (to a man)"],["ደህና ነሽ?","dehna nesh?","are you well? (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"ደህና ነህ?","o":["ደህና ነህ?","ደህና ነሽ?"],"a":0},
{"t":"mc","q":"ደህና ነሽ? is said to…","o":["a woman","a man","a group"],"a":0},
{"t":"note","tag":"The answer","q":"ደህና ነኝ","body":"<p>The answer keeps the word and swaps the ending: <b>ደህና ነኝ</b> <i>dehna negn</i> — <i>I am well</i>. Dehna is the busiest word in Amharic — well, fine, safe, okay — and you will wear it out.</p>","eg":[["ደህና ነኝ","dehna negn","I am well"]]},
{"t":"li","q":"Question or answer — which do you hear?","say":"ደህና ነኝ","o":["ደህና ነኝ","ደህና ነህ?"],"a":0},
{"t":"mc","q":"ደህና ነኝ means…","o":["I am well","are you well?","he is well"],"a":0},
{"t":"note","tag":"The reply everyone adds","q":"እግዚአብሔር ይመስገን","body":"<p>The full reply you will hear everywhere: <b>ደህና, እግዚአብሔር ይመስገን</b> — <i>fine, God be thanked</i>. It is the set formula of Ethiopian small talk, said by everyone as automatically as the English fine-thanks — learn it as one long friendly word.</p>","eg":[["እግዚአብሔር ይመስገን","igziabher yimesgen","God be thanked (the set reply)"]]},
{"t":"li","q":"Which one do you hear?","say":"እግዚአብሔር ይመስገን","o":["እግዚአብሔር ይመስገን","ደህና ነኝ"],"a":0},
{"t":"mc","q":"እግዚአብሔር ይመስገን works like the English…","o":["fine, thanks","see you later","excuse me"],"a":0}
]},
{"id":"am_g1_2","title":"Hearing the greetings","step":"recognize","meta":"He, she and the reply — by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ደህና ነሽ?","o":["ደህና ነሽ?","ደህና ነህ?","ደህና ነኝ"],"a":0},
{"t":"mc","q":"What does ደህና ነህ? mean?","o":["are you well? (to a man)","are you well? (to a woman)","I am well"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና ነኝ","o":["ደህና ነኝ","ደህና ነሽ?","እግዚአብሔር ይመስገን"],"a":0},
{"t":"mc","q":"Which one is the set reply formula?","o":["እግዚአብሔር ይመስገን","ደህና ነህ?","ሰላም ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና ነህ?","o":["ደህና ነህ?","ደህና ነኝ","ደህና ነሽ?"],"a":0},
{"t":"mc","q":"The -h / -sh endings mark…","o":["him and her","past and present","one and many"],"a":0}
]},
{"id":"am_g1_3","title":"Building the exchange","step":"build","meta":"Question, answer, formula","vocab":[],"ex":[
{"t":"wb","q":"Build: are you well? (to a man)","a":["ደህና","ነህ?"],"pool":["ደህና","ነህ?","ነሽ?"]},
{"t":"wb","q":"Build: I am well","a":["ደህና","ነኝ"],"pool":["ደህና","ነኝ","ነህ?"]},
{"t":"mc","q":"Pick the version for a woman","o":["ደህና ነሽ?","ደህና ነህ?","ደህና ነኝ"],"a":0},
{"t":"wb","q":"Build: are you well? (to a woman)","a":["ደህና","ነሽ?"],"pool":["ደህና","ነሽ?","ነኝ"]},
{"t":"li","q":"Which one do you hear?","say":"እግዚአብሔር ይመስገን","o":["እግዚአብሔር ይመስገን","ደህና ነህ?","ደህና ነኝ"],"a":0}
]},
{"id":"am_g1_4","title":"The greetings in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ደህና ነህ?","are you well? (man)"],["ደህና ነሽ?","are you well? (woman)"],["ደህና ነኝ","I am well"]]},
{"t":"li","q":"Which one do you hear?","say":"ደህና ነሽ?","o":["ደህና ነሽ?","ደህና ነኝ","ደህና ነህ?"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እግዚአብሔር ይመስገን","God be thanked"],["ሰላም ነው?","is everything peaceful?"]]},
{"t":"mc","q":"Greeting your host father in the morning, you say ደህና ነህ? He answers…","o":["ደህና, እግዚአብሔር ይመስገን","ደህና ነሽ?","ማን ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና ነኝ","o":["ደህና ነኝ","እግዚአብሔር ይመስገን","ደህና ነሽ?"],"a":0}
]},
{"id":"am_g1_5","title":"Checkpoint: are you well?","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"To a woman you ask…","o":["ደህና ነሽ?","ደህና ነህ?","ደህና ነኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና ነህ?","o":["ደህና ነህ?","ደህና ነሽ?","ደህና ነኝ"],"a":0},
{"t":"mc","q":"ደህና ነኝ means…","o":["I am well","are you well?","she is well"],"a":0},
{"t":"mc","q":"Review — እሺ means…","o":["okay · sure","yes","peace"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እግዚአብሔር ይመስገን","o":["እግዚአብሔር ይመስገን","ደህና ነኝ","ሰላም ነው?"],"a":0}
]},

/* ---------- g2 · What is your name? ---------- */
{"id":"am_g2","title":"What is your name?","step":"learn","meta":"Simih, simish — and answering with sime","vocab":[["ስምህ ማን ነው?","simih man new?","what is your name? (to a man)"],["ስምሽ ማን ነው?","simish man new?","what is your name? (to a woman)"],["ስሜ … ነው","sime ... new","my name is …"],["ስም","sim","name"]],"ex":[
{"t":"note","tag":"The question","q":"ስምህ ማን ነው?","body":"<p><b>ስም</b> <i>sim</i> is <i>name</i>. Add the endings you met in dehna neh: <b>ስምህ ማን ነው?</b> <i>simih man new?</i> — literally <i>your-name who is?</i> — to a man; <b>ስምሽ ማን ነው?</b> to a woman. Amharic asks WHO your name is, not what.</p>","eg":[["ስም","sim","name"],["ስምህ ማን ነው?","simih man new?","what is your name? (to a man)"],["ስምሽ ማን ነው?","simish man new?","what is your name? (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"ስምህ ማን ነው?","o":["ስምህ ማን ነው?","ስምሽ ማን ነው?"],"a":0},
{"t":"mc","q":"Amharic literally asks your name is…","o":["who","what","which"],"a":0},
{"t":"note","tag":"The answer","q":"ስሜ … ነው","body":"<p>The answer: <b>ስሜ … ነው</b> <i>sime … new</i> — <i>my name is …</i>. The little -e on sim means <i>my</i>. Slot your own name into the gap and you have introduced yourself in Amharic.</p>","eg":[["ስሜ … ነው","sime ... new","my name is …"]]},
{"t":"li","q":"Question or answer — which do you hear?","say":"ስሜ … ነው","o":["ስሜ … ነው","ስምህ ማን ነው?"],"a":0},
{"t":"mc","q":"ስሜ … ነው means…","o":["my name is …","your name is …","who are you?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስም","o":["ስም","ስሜ … ነው"],"a":0},
{"t":"mc","q":"The -e ending on ስሜ means…","o":["my","your","his"],"a":0}
]},
{"id":"am_g2_2","title":"Hearing the names","step":"recognize","meta":"The name exchange by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ስምሽ ማን ነው?","o":["ስምሽ ማን ነው?","ስምህ ማን ነው?","ስሜ … ነው"],"a":0},
{"t":"mc","q":"What does ስም mean?","o":["name","who","word"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስሜ … ነው","o":["ስሜ … ነው","ስም","ስምሽ ማን ነው?"],"a":0},
{"t":"mc","q":"Which one asks a WOMAN her name?","o":["ስምሽ ማን ነው?","ስምህ ማን ነው?","ስሜ … ነው"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስምህ ማን ነው?","o":["ስምህ ማን ነው?","ስምሽ ማን ነው?","ስም"],"a":0},
{"t":"mc","q":"The ማን in the question is the same ማን you learned as…","o":["who?","what?","where?"],"a":0}
]},
{"id":"am_g2_3","title":"Building the names","step":"build","meta":"Ask and introduce","vocab":[],"ex":[
{"t":"wb","q":"Build: what is your name? (to a man)","a":["ስምህ","ማን","ነው?"],"pool":["ስምህ","ማን","ነው?","ስምሽ"]},
{"t":"wb","q":"Build: my name is …","a":["ስሜ","…","ነው"],"pool":["ስሜ","…","ነው","ማን"]},
{"t":"mc","q":"Pick the word for name","o":["ስም","ማን","ነው"],"a":0},
{"t":"wb","q":"Build: what is your name? (to a woman)","a":["ስምሽ","ማን","ነው?"],"pool":["ስምሽ","ማን","ነው?","ስሜ"]},
{"t":"li","q":"Which one do you hear?","say":"ስምሽ ማን ነው?","o":["ስምሽ ማን ነው?","ስሜ … ነው","ስምህ ማን ነው?"],"a":0}
]},
{"id":"am_g2_4","title":"The names in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ስምህ ማን ነው?","your name? (man)"],["ስምሽ ማን ነው?","your name? (woman)"],["ስሜ … ነው","my name is …"]]},
{"t":"li","q":"Which one do you hear?","say":"ስም","o":["ስም","ስሜ … ነው","ማን"],"a":0},
{"t":"match","q":"Match the ending to its meaning","pairs":[["ስምህ","your name (man)"],["ስምሽ","your name (woman)"],["ስሜ","my name"]]},
{"t":"mc","q":"ሰላም! ስምሽ ማን ነው? — you are talking to…","o":["a woman","a man","a crowd"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስሜ … ነው","o":["ስሜ … ነው","ስምህ ማን ነው?","ስም"],"a":0}
]},
{"id":"am_g2_5","title":"Checkpoint: the names","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ስምህ ማን ነው? asks…","o":["a man his name","a woman her name","where you are from"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስሜ … ነው","o":["ስሜ … ነው","ስምሽ ማን ነው?","ስም"],"a":0},
{"t":"mc","q":"Which one means name?","o":["ስም","ማን","ነው"],"a":0},
{"t":"mc","q":"Review — ደህና ነኝ means…","o":["I am well","are you well?","God be thanked"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስምህ ማን ነው?","o":["ስምህ ማን ነው?","ስምሽ ማን ነው?","ስሜ … ነው"],"a":0}
]},

/* ---------- g3 · Morning, day and night ---------- */
{"id":"am_g3","title":"Morning, day and night","step":"learn","meta":"Endemin aderk — greetings that follow the sun","vocab":[["እንደምን አደርክ?","endemin aderk?","good morning (to a man)"],["እንደምን አደርሽ?","endemin adersh?","good morning (to a woman)"],["እንደምን ዋልክ?","endemin walk?","good afternoon (to a man)"],["ደህና እደር","dehna ider","good night (to a man)"],["ደህና እደሪ","dehna ideri","good night (to a woman)"]],"ex":[
{"t":"note","tag":"How mornings work","q":"እንደምን አደርክ?","body":"<p>Amharic good-mornings literally ask <i>how did you spend the night?</i>: <b>እንደምን አደርክ?</b> <i>endemin aderk?</i> to a man, <b>እንደምን አደርሽ?</b> to a woman. The answer you already own: ደህና, እግዚአብሔር ይመስገን.</p>","eg":[["እንደምን አደርክ?","endemin aderk?","good morning (to a man)"],["እንደምን አደርሽ?","endemin adersh?","good morning (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"እንደምን አደርክ?","o":["እንደምን አደርክ?","እንደምን አደርሽ?"],"a":0},
{"t":"mc","q":"The morning greeting literally asks how you spent…","o":["the night","the day","the week"],"a":0},
{"t":"note","tag":"After noon","q":"እንደምን ዋልክ?","body":"<p>Past midday the verb changes: <b>እንደምን ዋልክ?</b> <i>endemin walk?</i> — <i>how did you spend the day?</i> One system, three verbs — night, day, evening — and every greeting in Ethiopia runs on it.</p>","eg":[["እንደምን ዋልክ?","endemin walk?","good afternoon (to a man)"]]},
{"t":"li","q":"Morning or afternoon — which do you hear?","say":"እንደምን ዋልክ?","o":["እንደምን ዋልክ?","እንደምን አደርክ?"],"a":0},
{"t":"mc","q":"እንደምን ዋልክ? belongs to…","o":["the afternoon","dawn","midnight"],"a":0},
{"t":"note","tag":"Parting at night","q":"ደህና እደር","body":"<p>Good night turns the same night-verb into a wish: <b>ደህና እደር</b> <i>dehna ider</i> — <i>spend the night well</i> — to a man; <b>ደህና እደሪ</b> <i>dehna ideri</i> to a woman. Dehna, as promised, is everywhere.</p>","eg":[["ደህና እደር","dehna ider","good night (to a man)"],["ደህና እደሪ","dehna ideri","good night (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"ደህና እደሪ","o":["ደህና እደሪ","ደህና እደር"],"a":0},
{"t":"mc","q":"ደህና እደር literally wishes someone to…","o":["spend the night well","sleep late","dream sweetly"],"a":0}
]},
{"id":"am_g3_2","title":"Hearing the sun greetings","step":"recognize","meta":"Time-of-day forms by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እንደምን አደርሽ?","o":["እንደምን አደርሽ?","እንደምን አደርክ?","እንደምን ዋልክ?"],"a":0},
{"t":"mc","q":"What does እንደምን ዋልክ? mean?","o":["good afternoon (man)","good morning (man)","good night (man)"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና እደር","o":["ደህና እደር","ደህና እደሪ","እንደምን አደርክ?"],"a":0},
{"t":"mc","q":"Which one is good morning to a WOMAN?","o":["እንደምን አደርሽ?","እንደምን አደርክ?","ደህና እደሪ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንደምን አደርክ?","o":["እንደምን አደርክ?","እንደምን አደርሽ?","ደህና እደር"],"a":0},
{"t":"mc","q":"The greeting system runs on verbs for spending…","o":["the night, the day, the evening","food and drink","work and rest"],"a":0}
]},
{"id":"am_g3_3","title":"Building the sun greetings","step":"build","meta":"The right verb for the hour","vocab":[],"ex":[
{"t":"wb","q":"Build: good morning (to a man)","a":["እንደምን","አደርክ?"],"pool":["እንደምን","አደርክ?","ዋልክ?"]},
{"t":"wb","q":"Build: good night (to a man)","a":["ደህና","እደር"],"pool":["ደህና","እደር","እደሪ"]},
{"t":"mc","q":"Pick the afternoon greeting","o":["እንደምን ዋልክ?","እንደምን አደርክ?","ደህና እደር"],"a":0},
{"t":"wb","q":"Build: good morning (to a woman)","a":["እንደምን","አደርሽ?"],"pool":["እንደምን","አደርሽ?","አደርክ?"]},
{"t":"li","q":"Which one do you hear?","say":"ደህና እደሪ","o":["ደህና እደሪ","ደህና እደር","እንደምን አደርሽ?"],"a":0}
]},
{"id":"am_g3_4","title":"Sun greetings in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the greeting to its hour","pairs":[["እንደምን አደርክ?","morning"],["እንደምን ዋልክ?","afternoon"],["ደህና እደር","night (parting)"]]},
{"t":"li","q":"Which one do you hear?","say":"እንደምን ዋልክ?","o":["እንደምን ዋልክ?","እንደምን አደርክ?","ደህና እደሪ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እንደምን አደርሽ?","good morning (woman)"],["ደህና እደሪ","good night (woman)"]]},
{"t":"mc","q":"Your host mother, at breakfast, gets…","o":["እንደምን አደርሽ?","እንደምን አደርክ?","ደህና እደር"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንደምን አደርሽ?","o":["እንደምን አደርሽ?","ደህና እደሪ","እንደምን ዋልክ?"],"a":0}
]},
{"id":"am_g3_5","title":"Checkpoint: the sun greetings","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"እንደምን አደርክ? is said…","o":["in the morning, to a man","at night, to a woman","at noon, to anyone"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንደምን ዋልክ?","o":["እንደምን ዋልክ?","እንደምን አደርክ?","ደህና እደር"],"a":0},
{"t":"mc","q":"Good night to a woman is…","o":["ደህና እደሪ","ደህና እደር","እንደምን አደርሽ?"],"a":0},
{"t":"mc","q":"Review — the set reply to any how-are-you is ደህና plus…","o":["እግዚአብሔር ይመስገን","ስሜ … ነው","እሺ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና እደር","o":["ደህና እደር","ደህና እደሪ","እንደምን ዋልክ?"],"a":0}
]},

/* ---------- g4 · The polite you ---------- */
{"id":"am_g4","title":"The polite you","step":"learn","meta":"Erswo — respect built into the grammar","vocab":[["እርስዎ","erswo","you (polite)"],["ደህና ነዎት?","dehna newot?","are you well? (polite)"],["ጤና ይስጥልኝ","tena yistilign","formal greeting (may you have health)"],["አቶ","ato","Mr."],["ወይዘሮ","weyzero","Mrs."]],"ex":[
{"t":"note","tag":"Respect has its own you","q":"እርስዎ","body":"<p>For elders, officials and anyone you honor, Amharic has a separate <i>you</i>: <b>እርስዎ</b> <i>erswo</i>, with its own verb ending: <b>ደህና ነዎት?</b> <i>dehna newot?</i> — <i>are you well?</i> Using it is not stiff — it is warmth in grammar form.</p>","eg":[["እርስዎ","erswo","you (polite)"],["ደህና ነዎት?","dehna newot?","are you well? (polite)"]]},
{"t":"li","q":"Plain or polite — which do you hear?","say":"ደህና ነዎት?","o":["ደህና ነዎት?","ደህና ነህ?"],"a":0},
{"t":"mc","q":"እርስዎ is used for…","o":["elders and anyone you honor","children only","strangers only"],"a":0},
{"t":"note","tag":"The formal hello","q":"ጤና ይስጥልኝ","body":"<p><b>ጤና ይስጥልኝ</b> <i>tena yistilign</i> — literally <i>may health be given for me</i> — is the all-purpose FORMAL greeting: any person, any hour. Offices, elders, first meetings. Pair it with a slight bow, or the two-handed handshake that shows real respect.</p>","eg":[["ጤና ይስጥልኝ","tena yistilign","formal greeting (may you have health)"]]},
{"t":"li","q":"Which one do you hear?","say":"ጤና ይስጥልኝ","o":["ጤና ይስጥልኝ","ደህና ነዎት?"],"a":0},
{"t":"mc","q":"ጤና ይስጥልኝ works…","o":["for any person at any hour","only at night","only with friends"],"a":0},
{"t":"note","tag":"Titles","q":"አቶ and ወይዘሮ","body":"<p><b>አቶ</b> <i>ato</i> is <i>Mr.</i>, <b>ወይዘሮ</b> <i>weyzero</i> is <i>Mrs.</i> — Ato Kebede, Weyzero Almaz. Ethiopians use titles with FIRST names, and being greeted by name makes people genuinely happy.</p>","eg":[["አቶ","ato","Mr."],["ወይዘሮ","weyzero","Mrs."]]},
{"t":"li","q":"Which one do you hear?","say":"ወይዘሮ","o":["ወይዘሮ","አቶ"],"a":0},
{"t":"mc","q":"Titles in Ethiopia go with…","o":["first names","family names","no names"],"a":0}
]},
{"id":"am_g4_2","title":"Hearing the polite forms","step":"recognize","meta":"Respect by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እርስዎ","o":["እርስዎ","አቶ","ወይዘሮ"],"a":0},
{"t":"mc","q":"What does ደህና ነዎት? mean?","o":["are you well? (polite)","are you well? (to a man)","I am well"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጤና ይስጥልኝ","o":["ጤና ይስጥልኝ","እርስዎ","ደህና ነዎት?"],"a":0},
{"t":"mc","q":"Which one means Mrs.?","o":["ወይዘሮ","አቶ","እርስዎ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አቶ","o":["አቶ","ወይዘሮ","እርስዎ"],"a":0},
{"t":"mc","q":"The two-handed handshake shows…","o":["respect","impatience","confusion"],"a":0}
]},
{"id":"am_g4_3","title":"Building the polite forms","step":"build","meta":"Grammar that bows","vocab":[],"ex":[
{"t":"wb","q":"Build: are you well? (polite)","a":["ደህና","ነዎት?"],"pool":["ደህና","ነዎት?","ነህ?"]},
{"t":"mc","q":"Pick the polite you","o":["እርስዎ","አቶ","እኔ"],"a":0},
{"t":"wb","q":"Build: the formal greeting","a":["ጤና","ይስጥልኝ"],"pool":["ጤና","ይስጥልኝ","ነዎት?"]},
{"t":"mc","q":"Pick the title for a man","o":["አቶ","ወይዘሮ","ስም"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና ነዎት?","o":["ደህና ነዎት?","ጤና ይስጥልኝ","እርስዎ"],"a":0}
]},
{"id":"am_g4_4","title":"Polite forms in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እርስዎ","you (polite)"],["አቶ","Mr."],["ወይዘሮ","Mrs."]]},
{"t":"li","q":"Which one do you hear?","say":"ደህና ነዎት?","o":["ደህና ነዎት?","ደህና ነሽ?","ጤና ይስጥልኝ"],"a":0},
{"t":"match","q":"Match the register","pairs":[["ደህና ነህ?","a friend"],["ደህና ነዎት?","an elder"]]},
{"t":"mc","q":"Meeting the school director, you open with…","o":["ጤና ይስጥልኝ","ሰላም ነው?","እሺ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወይዘሮ","o":["ወይዘሮ","አቶ","እርስዎ"],"a":0}
]},
{"id":"am_g4_5","title":"Checkpoint: the polite you","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ደህና ነዎት? uses the ending for…","o":["እርስዎ, the polite you","አንተ, a male friend","እኔ, myself"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጤና ይስጥልኝ","o":["ጤና ይስጥልኝ","ደህና ነዎት?","ወይዘሮ"],"a":0},
{"t":"mc","q":"Which one means Mr.?","o":["አቶ","ወይዘሮ","ስም"],"a":0},
{"t":"mc","q":"Review — good morning to a man is…","o":["እንደምን አደርክ?","እንደምን አደርሽ?","ደህና እደር"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እርስዎ","o":["እርስዎ","አቶ","ስም"],"a":0}
]},

/* ---------- g5 · Where are you from? ---------- */
{"id":"am_g5","title":"Where are you from?","step":"learn","meta":"Keyet neh — and answering with ke","vocab":[["ከየት ነህ?","keyet neh?","where are you from? (to a man)"],["ከየት ነሽ?","keyet nesh?","where are you from? (to a woman)"],["ኢትዮጵያ","ityoppya","Ethiopia"],["ከአሜሪካ ነኝ","ke-amerika negn","I am from America"],["አዲስ አበባ","addis abeba","Addis Ababa"]],"ex":[
{"t":"note","tag":"The question","q":"ከየት ነህ?","body":"<p><b>ከ</b> <i>ke</i> means <i>from</i>, <b>የት</b> <i>yet</i> means <i>where</i> — so <b>ከየት ነህ?</b> <i>keyet neh?</i> is <i>from-where are you?</i> (to a man; <b>ከየት ነሽ?</b> to a woman). The endings keep doing their gender work.</p>","eg":[["ከየት ነህ?","keyet neh?","where are you from? (to a man)"],["ከየት ነሽ?","keyet nesh?","where are you from? (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"ከየት ነሽ?","o":["ከየት ነሽ?","ከየት ነህ?"],"a":0},
{"t":"mc","q":"The ከ at the front of ከየት means…","o":["from","to","in"],"a":0},
{"t":"note","tag":"The answer","q":"ከአሜሪካ ነኝ","body":"<p>Answer with ke + place + negn: <b>ከአሜሪካ ነኝ</b> <i>ke-amerika negn</i> — <i>I am from America</i>. Swap in any place on earth; the frame never changes.</p>","eg":[["ከአሜሪካ ነኝ","ke-amerika negn","I am from America"]]},
{"t":"li","q":"Which one do you hear?","say":"ከአሜሪካ ነኝ","o":["ከአሜሪካ ነኝ","ከየት ነህ?"],"a":0},
{"t":"mc","q":"ከአሜሪካ ነኝ means…","o":["I am from America","I live in America","America is far"],"a":0},
{"t":"note","tag":"The land and its heart","q":"ኢትዮጵያ and አዲስ አበባ","body":"<p><b>ኢትዮጵያ</b> <i>ityoppya</i> — <i>Ethiopia</i> — and its capital <b>አዲስ አበባ</b> <i>addis abeba</i>, which means <i>new flower</i>. Ethiopians simply say Addis.</p>","eg":[["ኢትዮጵያ","ityoppya","Ethiopia"],["አዲስ አበባ","addis abeba","Addis Ababa"]]},
{"t":"li","q":"Which one do you hear?","say":"ኢትዮጵያ","o":["ኢትዮጵያ","አዲስ አበባ"],"a":0},
{"t":"mc","q":"አዲስ አበባ literally means…","o":["new flower","high city","great mountain"],"a":0}
]},
{"id":"am_g5_2","title":"Hearing where-from","step":"recognize","meta":"Places by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ከየት ነህ?","o":["ከየት ነህ?","ከየት ነሽ?","ከአሜሪካ ነኝ"],"a":0},
{"t":"mc","q":"What does ኢትዮጵያ mean?","o":["Ethiopia","Africa","Addis Ababa"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አዲስ አበባ","o":["አዲስ አበባ","ኢትዮጵያ","ከአሜሪካ ነኝ"],"a":0},
{"t":"mc","q":"Which one means I am from America?","o":["ከአሜሪካ ነኝ","ከየት ነህ?","አዲስ አበባ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ከየት ነሽ?","o":["ከየት ነሽ?","ከየት ነህ?","ኢትዮጵያ"],"a":0},
{"t":"mc","q":"Ethiopians call their capital simply…","o":["Addis","Abeba","Yet"],"a":0}
]},
{"id":"am_g5_3","title":"Building where-from","step":"build","meta":"Question and answer","vocab":[],"ex":[
{"t":"wb","q":"Build: where are you from? (to a man)","a":["ከየት","ነህ?"],"pool":["ከየት","ነህ?","ነሽ?"]},
{"t":"wb","q":"Build: I am from America","a":["ከአሜሪካ","ነኝ"],"pool":["ከአሜሪካ","ነኝ","ነህ?"]},
{"t":"mc","q":"Pick the capital of Ethiopia","o":["አዲስ አበባ","ኢትዮጵያ","አሜሪካ"],"a":0},
{"t":"wb","q":"Build: where are you from? (to a woman)","a":["ከየት","ነሽ?"],"pool":["ከየት","ነሽ?","ነኝ"]},
{"t":"li","q":"Which one do you hear?","say":"ከአሜሪካ ነኝ","o":["ከአሜሪካ ነኝ","ከየት ነሽ?","አዲስ አበባ"],"a":0}
]},
{"id":"am_g5_4","title":"Where-from in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ከየት ነህ?","where are you from? (man)"],["ከአሜሪካ ነኝ","I am from America"],["ኢትዮጵያ","Ethiopia"]]},
{"t":"li","q":"Which one do you hear?","say":"ኢትዮጵያ","o":["ኢትዮጵያ","አዲስ አበባ","ከአሜሪካ ነኝ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አዲስ አበባ","new flower (the capital)"],["ከየት ነሽ?","where are you from? (woman)"]]},
{"t":"mc","q":"ከየት ነህ? — ከአሜሪካ ነኝ. እርስዎስ? The polite follow-up asks…","o":["and you?","really?","since when?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ከየት ነህ?","o":["ከየት ነህ?","ከየት ነሽ?","ከአሜሪካ ነኝ"],"a":0}
]},
{"id":"am_g5_5","title":"Checkpoint: where-from","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ከየት ነሽ? asks…","o":["a woman where she is from","a man where he is from","anyone their name"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አዲስ አበባ","o":["አዲስ አበባ","ኢትዮጵያ","ከየት ነህ?"],"a":0},
{"t":"mc","q":"Which one means Ethiopia?","o":["ኢትዮጵያ","አዲስ አበባ","አሜሪካ"],"a":0},
{"t":"mc","q":"Review — the polite are-you-well is…","o":["ደህና ነዎት?","ደህና ነህ?","ደህና ነኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ከየት ነሽ?","o":["ከየት ነሽ?","ከአሜሪካ ነኝ","ከየት ነህ?"],"a":0}
]},

/* ---------- g6 · People words ---------- */
{"id":"am_g6","title":"People words","step":"learn","meta":"Sew, sewoch — and your first plural","vocab":[["ሰው","sew","person"],["ሰዎች","sewoch","people"],["ጓደኛ","gwadegna","friend"],["ወንድ","wend","man"],["ሴት","set","woman"]],"ex":[
{"t":"note","tag":"One and many","q":"ሰው → ሰዎች","body":"<p><b>ሰው</b> <i>sew</i> is <i>a person</i>. Add <b>-ኦች</b> <i>-och</i> and you have <b>ሰዎች</b> <i>sewoch</i> — <i>people</i>. That little ending is THE Amharic plural; you will bolt it onto nouns for the rest of this course.</p>","eg":[["ሰው","sew","person"],["ሰዎች","sewoch","people"]]},
{"t":"li","q":"One or many — which do you hear?","say":"ሰዎች","o":["ሰዎች","ሰው"],"a":0},
{"t":"mc","q":"The plural ending is…","o":["-och","-e","-new"],"a":0},
{"t":"note","tag":"The one you choose","q":"ጓደኛ","body":"<p><b>ጓደኛ</b> <i>gwadegna</i> — <i>friend</i>. Notice the twisted <b>ጓ</b> — a consonant wearing a w: gwa. Friendship in Ethiopia comes with coffee attached, as you will soon learn.</p>","eg":[["ጓደኛ","gwadegna","friend"]]},
{"t":"li","q":"Which one do you hear?","say":"ጓደኛ","o":["ጓደኛ","ሰው"],"a":0},
{"t":"mc","q":"ጓደኛ means…","o":["friend","neighbor","teacher"],"a":0},
{"t":"note","tag":"Man and woman","q":"ወንድ and ሴት","body":"<p><b>ወንድ</b> <i>wend</i> — <i>man, male</i>; <b>ሴት</b> <i>set</i> — <i>woman, female</i>. These two also label everything the language genders — which, as you have seen, is a lot.</p>","eg":[["ወንድ","wend","man"],["ሴት","set","woman"]]},
{"t":"li","q":"Which one do you hear?","say":"ሴት","o":["ሴት","ወንድ"],"a":0},
{"t":"mc","q":"Which one means man?","o":["ወንድ","ሴት","ሰው"],"a":0}
]},
{"id":"am_g6_2","title":"Hearing the people","step":"recognize","meta":"People words by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሰው","o":["ሰው","ሰዎች","ሴት"],"a":0},
{"t":"mc","q":"What does ሰዎች mean?","o":["people","person","friends"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወንድ","o":["ወንድ","ሴት","ጓደኛ"],"a":0},
{"t":"mc","q":"Which one means woman?","o":["ሴት","ወንድ","ሰው"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጓደኛ","o":["ጓደኛ","ወንድ","ሰዎች"],"a":0},
{"t":"mc","q":"ሰው is to ሰዎች as person is to…","o":["people","persons name","friends"],"a":0}
]},
{"id":"am_g6_3","title":"Building the people","step":"build","meta":"Singular, plural, both","vocab":[],"ex":[
{"t":"wb","q":"Build the word: people","a":["ሰ","ዎች"],"pool":["ሰ","ዎች","ው"]},
{"t":"mc","q":"Pick the word for friend","o":["ጓደኛ","ሰው","ሴት"],"a":0},
{"t":"wb","q":"Build: a man and a woman (wend, set)","a":["ወንድ","ሴት"],"pool":["ወንድ","ሴት","ሰው"]},
{"t":"mc","q":"Pick the word for person","o":["ሰው","ሰዎች","ወንድ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰዎች","o":["ሰዎች","ሰው","ጓደኛ"],"a":0}
]},
{"id":"am_g6_4","title":"The people in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሰው","person"],["ሰዎች","people"],["ጓደኛ","friend"]]},
{"t":"li","q":"Which one do you hear?","say":"ሴት","o":["ሴት","ሰው","ወንድ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ወንድ","man"],["ሴት","woman"]]},
{"t":"mc","q":"ጓደኛዬ (gwadegna + ye) would mean…","o":["my friend","your friend","old friend"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወንድ","o":["ወንድ","ጓደኛ","ሴት"],"a":0}
]},
{"id":"am_g6_5","title":"Checkpoint: the people","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ሰዎች means…","o":["people","person","women"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጓደኛ","o":["ጓደኛ","ሰዎች","ሴት"],"a":0},
{"t":"mc","q":"Which one means woman?","o":["ሴት","ወንድ","ሰው"],"a":0},
{"t":"mc","q":"Review — አዲስ አበባ means…","o":["new flower","old city","far mountain"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰው","o":["ሰው","ወንድ","ሰዎች"],"a":0}
]},

/* ---------- g7 · Thank you and goodbye ---------- */
{"id":"am_g7","title":"Thank you and goodbye","step":"learn","meta":"Ameseginalehu — the longest word you will love","vocab":[["አመሰግናለሁ","ameseginalehu","thank you"],["ደህና ሁን","dehna hun","goodbye (to a man)"],["ደህና ሁኚ","dehna hugni","goodbye (to a woman)"],["ቻው","chaw","bye (informal)"]],"ex":[
{"t":"note","tag":"The big one","q":"አመሰግናለሁ","body":"<p><b>አመሰግናለሁ</b> <i>ameseginalehu</i> — <i>thank you</i>. Five syllables of gratitude: a-me-se-gi-na-le-hu. Every Ethiopian will forgive a stumble and light up at the attempt. Practice it until it rolls.</p>","eg":[["አመሰግናለሁ","ameseginalehu","thank you"]]},
{"t":"li","q":"Which one do you hear?","say":"አመሰግናለሁ","o":["አመሰግናለሁ","እግዚአብሔር ይመስገን"],"a":0},
{"t":"mc","q":"አመሰግናለሁ means…","o":["thank you","goodbye","excuse me"],"a":0},
{"t":"note","tag":"Be well","q":"ደህና ሁን","body":"<p>Goodbye is a blessing: <b>ደህና ሁን</b> <i>dehna hun</i> — <i>be well</i> — to a man; <b>ደህና ሁኚ</b> <i>dehna hugni</i> to a woman. Dehna completes its set: it greets you, answers for you, and now sees you out.</p>","eg":[["ደህና ሁን","dehna hun","goodbye (to a man)"],["ደህና ሁኚ","dehna hugni","goodbye (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"ደህና ሁን","o":["ደህና ሁን","ደህና ሁኚ"],"a":0},
{"t":"mc","q":"ደህና ሁን literally says…","o":["be well","go fast","come back"],"a":0},
{"t":"note","tag":"The quick one","q":"ቻው","body":"<p>And between friends: <b>ቻው</b> <i>chaw</i> — yes, the Italian ciao, fully at home in Ethiopia since the 1930s. Informal, warm, everywhere.</p>","eg":[["ቻው","chaw","bye (informal)"]]},
{"t":"li","q":"Which one do you hear?","say":"ቻው","o":["ቻው","ደህና ሁን"],"a":0},
{"t":"mc","q":"ቻው came to Amharic from…","o":["Italian","English","Arabic"],"a":0}
]},
{"id":"am_g7_2","title":"Hearing the farewells","step":"recognize","meta":"Thanks and goodbyes by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ደህና ሁኚ","o":["ደህና ሁኚ","ደህና ሁን","ቻው"],"a":0},
{"t":"mc","q":"What does አመሰግናለሁ mean?","o":["thank you","goodbye","good night"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቻው","o":["ቻው","ደህና ሁን","አመሰግናለሁ"],"a":0},
{"t":"mc","q":"Which one is goodbye to a WOMAN?","o":["ደህና ሁኚ","ደህና ሁን","ቻው"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አመሰግናለሁ","o":["አመሰግናለሁ","ቻው","ደህና ሁኚ"],"a":0},
{"t":"mc","q":"Count the syllables: a-me-se-gi-na-le-hu…","o":["seven","five","three"],"a":0}
]},
{"id":"am_g7_3","title":"Building the farewells","step":"build","meta":"Leave like a local","vocab":[],"ex":[
{"t":"wb","q":"Build: goodbye (to a man)","a":["ደህና","ሁን"],"pool":["ደህና","ሁን","ሁኚ"]},
{"t":"mc","q":"Pick the word for thank you","o":["አመሰግናለሁ","ቻው","ደህና ሁን"],"a":0},
{"t":"wb","q":"Build: goodbye (to a woman)","a":["ደህና","ሁኚ"],"pool":["ደህና","ሁኚ","ሁን"]},
{"t":"mc","q":"Pick the informal bye","o":["ቻው","ደህና ሁን","አመሰግናለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና ሁን","o":["ደህና ሁን","ደህና ሁኚ","ቻው"],"a":0}
]},
{"id":"am_g7_4","title":"The farewells in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አመሰግናለሁ","thank you"],["ደህና ሁን","goodbye (man)"],["ቻው","bye (informal)"]]},
{"t":"li","q":"Which one do you hear?","say":"ደህና ሁን","o":["ደህና ሁን","ቻው","ደህና ሁኚ"],"a":0},
{"t":"match","q":"Match the farewell to the person","pairs":[["ደህና ሁን","a man"],["ደህና ሁኚ","a woman"]]},
{"t":"mc","q":"Tea finished, host thanked — your parting line to her is…","o":["አመሰግናለሁ, ደህና ሁኚ","ደህና ነሽ?","ስምሽ ማን ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደህና ሁኚ","o":["ደህና ሁኚ","አመሰግናለሁ","ደህና ሁን"],"a":0}
]},
{"id":"am_g7_5","title":"Checkpoint: Zone 2 complete","step":"checkpoint","meta":"Greetings and people — show it all","vocab":[],"ex":[
{"t":"mc","q":"አመሰግናለሁ means…","o":["thank you","you are welcome","hello"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አመሰግናለሁ","o":["አመሰግናለሁ","እግዚአብሔር ይመስገን","ደህና ሁን"],"a":0},
{"t":"mc","q":"Review — to a woman, are-you-well is…","o":["ደህና ነሽ?","ደህና ነህ?","ደህና ነዎት?"],"a":0},
{"t":"mc","q":"Review — the formal any-hour greeting…","o":["ጤና ይስጥልኝ","ሰላም ነው?","ቻው"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ስምህ ማን ነው?","o":["ስምህ ማን ነው?","ከየት ነህ?","ደህና ነህ?"],"a":0},
{"t":"mc","q":"Review — the Amharic plural ending…","o":["-och","-e","-hu"],"a":0},
{"t":"mc","q":"Review — good morning literally asks how you spent…","o":["the night","the meal","the road"],"a":0}
]}
];

const AM_UNITS=[
{"n":1,"t":"The sounds of Amharic","d":"The fidel system, the tight consonants — and your first real words","lessons":["am_s1","am_s1_2","am_s1_3","am_s1_4","am_s1_5","am_s2","am_s2_2","am_s2_3","am_s2_4","am_s2_5","am_s3","am_s3_2","am_s3_3","am_s3_4","am_s3_5","am_s4","am_s4_2","am_s4_3","am_s4_4","am_s4_5","am_s5","am_s5_2","am_s5_3","am_s5_4","am_s5_5","am_s6","am_s6_2","am_s6_3","am_s6_4","am_s6_5","am_s7","am_s7_2","am_s7_3","am_s7_4","am_s7_5"]}
,
{"n":2,"t":"Greetings and people","d":"Dehna neh and dehna nesh, names, the polite you — and thank you","lessons":["am_g1","am_g1_2","am_g1_3","am_g1_4","am_g1_5","am_g2","am_g2_2","am_g2_3","am_g2_4","am_g2_5","am_g3","am_g3_2","am_g3_3","am_g3_4","am_g3_5","am_g4","am_g4_2","am_g4_3","am_g4_4","am_g4_5","am_g5","am_g5_2","am_g5_3","am_g5_4","am_g5_5","am_g6","am_g6_2","am_g6_3","am_g6_4","am_g6_5","am_g7","am_g7_2","am_g7_3","am_g7_4","am_g7_5"]}
];

const AM_SYM={"am_s1":"ለ ሉ ላ","am_s2":"መ ም","am_s3":"ሰላም","am_s4":"ተ ጠ","am_s5":"ማን","am_s6":"ላም","am_s7":"እሺ","am_g1":"ደህና ነህ?","am_g2":"ስም","am_g3":"እንደምን","am_g4":"እርስዎ","am_g5":"ከየት?","am_g6":"ሰዎች","am_g7":"ቻው"};

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
