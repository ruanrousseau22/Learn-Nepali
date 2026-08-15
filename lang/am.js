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
]},

/* ---------- f1 · The family ---------- */
{"id":"am_f1","title":"The family","step":"learn","meta":"Abbat, ennat — the four at the table","vocab":[["አባት","abbat","father"],["እናት","ennat","mother"],["ወንድም","wendim","brother"],["እህት","ihit","sister"]],"ex":[
{"t":"note","tag":"The parents","q":"አባት and እናት","body":"<p><b>አባት</b> <i>abbat</i> — <i>father</i> — and <b>እናት</b> <i>ennat</i> — <i>mother</i>. Hold the doubled consonants (ab-bat, en-nat): that lean-in is real Amharic pronunciation, even though the fidel does not write it.</p>","eg":[["አባት","abbat","father"],["እናት","ennat","mother"]]},
{"t":"li","q":"Which one do you hear?","say":"አባት","o":["አባት","እናት"],"a":0},
{"t":"mc","q":"What does እናት mean?","o":["mother","father","sister"],"a":0},
{"t":"note","tag":"The siblings","q":"ወንድም and እህት","body":"<p><b>ወንድም</b> <i>wendim</i> — <i>brother</i> — carries the ወንድ (man) you met in Zone 2. <b>እህት</b> <i>ihit</i> — <i>sister</i>. Ethiopians reach for these words far beyond blood: a stranger your age is already wendim or ihit.</p>","eg":[["ወንድም","wendim","brother"],["እህት","ihit","sister"]]},
{"t":"li","q":"Which one do you hear?","say":"ወንድም","o":["ወንድም","እህት"],"a":0},
{"t":"mc","q":"እህት means…","o":["sister","brother","aunt"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እህት","o":["እህት","እናት"],"a":0},
{"t":"mc","q":"The word hiding inside ወንድም is…","o":["ወንድ, man","ወይዘሮ, Mrs.","ሰው, person"],"a":0}
]},
{"id":"am_f1_2","title":"Hearing the family","step":"recognize","meta":"The four by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እናት","o":["እናት","አባት","እህት"],"a":0},
{"t":"mc","q":"What does አባት mean?","o":["father","mother","brother"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እህት","o":["እህት","ወንድም","እናት"],"a":0},
{"t":"mc","q":"Which one means brother?","o":["ወንድም","እህት","አባት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባት","o":["አባት","እህት","ወንድም"],"a":0},
{"t":"mc","q":"A stranger your own age may warmly be called…","o":["wendim or ihit","ato only","erswo only"],"a":0}
]},
{"id":"am_f1_3","title":"Building the family","step":"build","meta":"Four seats at the table","vocab":[],"ex":[
{"t":"wb","q":"Build: father and mother","a":["አባት","እናት"],"pool":["አባት","እናት","እህት"]},
{"t":"mc","q":"Pick the word for sister","o":["እህት","ወንድም","እናት"],"a":0},
{"t":"wb","q":"Build: brother and sister","a":["ወንድም","እህት"],"pool":["ወንድም","እህት","አባት"]},
{"t":"mc","q":"Pick the word for father","o":["አባት","እናት","ወንድም"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወንድም","o":["ወንድም","አባት","እህት"],"a":0}
]},
{"id":"am_f1_4","title":"The family in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አባት","father"],["እናት","mother"]]},
{"t":"li","q":"Which one do you hear?","say":"እናት","o":["እናት","እህት","አባት"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ወንድም","brother"],["እህት","sister"]]},
{"t":"mc","q":"The doubled consonant in abbat and ennat is…","o":["spoken but not written","written twice in fidel","optional"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እህት","o":["እህት","እናት","ወንድም"],"a":0}
]},
{"id":"am_f1_5","title":"Checkpoint: the family","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ወንድም mean?","o":["brother","sister","father"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባት","o":["አባት","እናት","ወንድም"],"a":0},
{"t":"mc","q":"Which one means mother?","o":["እናት","አባት","እህት"],"a":0},
{"t":"mc","q":"Review — ሰዎች means…","o":["people","person","family"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እናት","o":["እናት","እህት","አባት"],"a":0}
]},

/* ---------- f2 · Household and children ---------- */
{"id":"am_f2","title":"Household and children","step":"learn","meta":"Betesab — the family as a whole","vocab":[["ቤተሰብ","betesab","family"],["ልጅ","lij","child"],["ልጆች","lijoch","children"],["አያት","ayat","grandparent"]],"ex":[
{"t":"note","tag":"The whole house","q":"ቤተሰብ","body":"<p><b>ቤተሰብ</b> <i>betesab</i> — <i>family</i> — literally <i>house-of-people</i>. In Ethiopia the word stretches wide: cousins, in-laws, the neighbor who eats with you. Asking after someone&rsquo;s betesab is standard caring small talk.</p>","eg":[["ቤተሰብ","betesab","family"]]},
{"t":"li","q":"Which one do you hear?","say":"ቤተሰብ","o":["ቤተሰብ","አባት"],"a":0},
{"t":"mc","q":"ቤተሰብ literally means…","o":["house of people","blood line","big group"],"a":0},
{"t":"note","tag":"One child, many","q":"ልጅ → ልጆች","body":"<p><b>ልጅ</b> <i>lij</i> — <i>child</i> (also simply <i>kid</i>, <i>son or daughter</i>). Your -och plural earns its keep: <b>ልጆች</b> <i>lijoch</i> — <i>children</i>.</p>","eg":[["ልጅ","lij","child"],["ልጆች","lijoch","children"]]},
{"t":"li","q":"One or many — which do you hear?","say":"ልጆች","o":["ልጆች","ልጅ"],"a":0},
{"t":"mc","q":"ልጆች means…","o":["children","child","parents"],"a":0},
{"t":"note","tag":"The elders","q":"አያት","body":"<p><b>አያት</b> <i>ayat</i> — <i>grandparent</i>, grandmother or grandfather alike. Ethiopian households often hold three generations, and the ayat holds the stories.</p>","eg":[["አያት","ayat","grandparent"]]},
{"t":"li","q":"Which one do you hear?","say":"አያት","o":["አያት","ልጅ"],"a":0},
{"t":"mc","q":"አያት covers…","o":["grandmother and grandfather alike","grandmother only","great-uncles only"],"a":0}
]},
{"id":"am_f2_2","title":"Hearing the household","step":"recognize","meta":"The wider family by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ልጅ","o":["ልጅ","ልጆች","አያት"],"a":0},
{"t":"mc","q":"What does ቤተሰብ mean?","o":["family","house","village"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ልጆች","o":["ልጆች","ልጅ","ቤተሰብ"],"a":0},
{"t":"mc","q":"Which one means grandparent?","o":["አያት","እናት","አባት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤተሰብ","o":["ቤተሰብ","አያት","ልጆች"],"a":0},
{"t":"mc","q":"ልጅ became ልጆች the same way ሰው became…","o":["ሰዎች","ሴት","ስም"],"a":0}
]},
{"id":"am_f2_3","title":"Building the household","step":"build","meta":"The wide net of betesab","vocab":[],"ex":[
{"t":"wb","q":"Build the word: children","a":["ልጅ","ኦች"],"pool":["ልጅ","ኦች","ልጆች"]},
{"t":"mc","q":"Pick the word for family","o":["ቤተሰብ","አያት","ልጆች"],"a":0},
{"t":"wb","q":"Build: a child and a grandparent","a":["ልጅ","አያት"],"pool":["ልጅ","አያት","ልጆች"]},
{"t":"mc","q":"Pick the word for children","o":["ልጆች","ልጅ","ቤተሰብ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አያት","o":["አያት","ቤተሰብ","ልጅ"],"a":0}
]},
{"id":"am_f2_4","title":"The household in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ቤተሰብ","family"],["ልጅ","child"],["አያት","grandparent"]]},
{"t":"li","q":"Which one do you hear?","say":"ልጆች","o":["ልጆች","አያት","ቤተሰብ"],"a":0},
{"t":"match","q":"Match singular to plural","pairs":[["ልጅ","ልጆች"],["ሰው","ሰዎች"]]},
{"t":"mc","q":"Asking after someone&rsquo;s betesab is…","o":["standard caring small talk","too personal","only for relatives"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ልጅ","o":["ልጅ","ልጆች","አያት"],"a":0}
]},
{"id":"am_f2_5","title":"Checkpoint: the household","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"What does ልጆች mean?","o":["children","child","grandparents"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤተሰብ","o":["ቤተሰብ","ልጆች","አያት"],"a":0},
{"t":"mc","q":"Which one means grandparent?","o":["አያት","ቤተሰብ","ልጅ"],"a":0},
{"t":"mc","q":"Review — ጓደኛ means…","o":["friend","family","child"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ልጆች","o":["ልጆች","ቤተሰብ","ልጅ"],"a":0}
]},

/* ---------- f3 · My and your ---------- */
{"id":"am_f3","title":"My and your","step":"learn","meta":"Abbate, abbatih, abbatish — endings that own","vocab":[["አባቴ","abbate","my father"],["እናቴ","ennate","my mother"],["አባትህ","abbatih","your father (to a man)"],["አባትሽ","abbatish","your father (to a woman)"]],"ex":[
{"t":"note","tag":"The -e you already know","q":"አባቴ, እናቴ","body":"<p>Remember ስሜ — <i>my name</i>? The same little <b>-e</b> owns anything: <b>አባቴ</b> <i>abbate</i> — <i>my father</i>; <b>እናቴ</b> <i>ennate</i> — <i>my mother</i>. Amharic glues <i>my</i> onto the end of the word.</p>","eg":[["አባቴ","abbate","my father"],["እናቴ","ennate","my mother"]]},
{"t":"li","q":"Which one do you hear?","say":"አባቴ","o":["አባቴ","እናቴ"],"a":0},
{"t":"mc","q":"The -e ending means…","o":["my","your","his"],"a":0},
{"t":"note","tag":"Your — by gender again","q":"አባትህ, አባትሽ","body":"<p><i>Your</i> splits by gender exactly like neh/nesh did: <b>አባትህ</b> <i>abbatih</i> — <i>your father</i> said to a man — and <b>አባትሽ</b> <i>abbatish</i> to a woman. The -h/-sh pair follows you through the whole language.</p>","eg":[["አባትህ","abbatih","your father (to a man)"],["አባትሽ","abbatish","your father (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"አባትሽ","o":["አባትሽ","አባትህ"],"a":0},
{"t":"mc","q":"አባትህ is said to…","o":["a man","a woman","an elder"],"a":0},
{"t":"li","q":"My or your — which do you hear?","say":"እናቴ","o":["እናቴ","አባትህ"],"a":0},
{"t":"mc","q":"ስሜ and አባቴ share…","o":["the -e my ending","the same meaning","nothing"],"a":0}
]},
{"id":"am_f3_2","title":"Hearing the owners","step":"recognize","meta":"Whose family, by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"አባትህ","o":["አባትህ","አባትሽ","አባቴ"],"a":0},
{"t":"mc","q":"What does እናቴ mean?","o":["my mother","your mother","his mother"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባቴ","o":["አባቴ","አባትህ","እናቴ"],"a":0},
{"t":"mc","q":"Which one is your father, said to a woman?","o":["አባትሽ","አባትህ","አባቴ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባትሽ","o":["አባትሽ","አባቴ","አባትህ"],"a":0},
{"t":"mc","q":"Amharic attaches my and your…","o":["to the end of the word","before the word","as separate words only"],"a":0}
]},
{"id":"am_f3_3","title":"Building the owners","step":"build","meta":"Endings on, endings off","vocab":[],"ex":[
{"t":"wb","q":"Build: my father (abbat + e)","a":["አባት","ኤ"],"pool":["አባት","ኤ","ህ"]},
{"t":"mc","q":"Pick: my mother","o":["እናቴ","እናት","አባቴ"],"a":0},
{"t":"wb","q":"Build: your father, to a man (abbat + ih)","a":["አባት","ህ"],"pool":["አባት","ህ","ሽ"]},
{"t":"mc","q":"Pick: your father, to a woman","o":["አባትሽ","አባትህ","እናቴ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እናቴ","o":["እናቴ","አባቴ","አባትሽ"],"a":0}
]},
{"id":"am_f3_4","title":"The owners in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አባቴ","my father"],["አባትህ","your father (man)"],["አባትሽ","your father (woman)"]]},
{"t":"li","q":"Which one do you hear?","say":"አባትህ","o":["አባትህ","እናቴ","አባትሽ"],"a":0},
{"t":"match","q":"Match the ending to its meaning","pairs":[["-ኤ","my"],["-ህ","your (man)"],["-ሽ","your (woman)"]]},
{"t":"mc","q":"እናትሽ would mean…","o":["your mother (to a woman)","my mother","her mother"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባቴ","o":["አባቴ","አባትሽ","እናቴ"],"a":0}
]},
{"id":"am_f3_5","title":"Checkpoint: the owners","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"አባቴ means…","o":["my father","your father","the father"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባትሽ","o":["አባትሽ","አባትህ","አባቴ"],"a":0},
{"t":"mc","q":"Which one means my mother?","o":["እናቴ","እናት","አባቴ"],"a":0},
{"t":"mc","q":"Review — ቤተሰብ means…","o":["family","household chores","children"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባትህ","o":["አባትህ","አባቴ","አባትሽ"],"a":0}
]},

/* ---------- f4 · This is my… ---------- */
{"id":"am_f4","title":"This is my…","step":"learn","meta":"Yih — pointing people out","vocab":[["ይህ","yih","this"],["ይህ አባቴ ነው","yih abbate new","this is my father"],["እሱ","issu","he"],["እሷ","isswa","she"]],"ex":[
{"t":"note","tag":"Pointing","q":"ይህ","body":"<p><b>ይህ</b> <i>yih</i> — <i>this</i>. With the ነው you know from ስሜ … ነው, introductions build themselves: <b>ይህ አባቴ ነው</b> <i>yih abbate new</i> — <i>this is my father</i>.</p>","eg":[["ይህ","yih","this"],["ይህ አባቴ ነው","yih abbate new","this is my father"]]},
{"t":"li","q":"Which one do you hear?","say":"ይህ አባቴ ነው","o":["ይህ አባቴ ነው","ይህ"],"a":0},
{"t":"mc","q":"ይህ አባቴ ነው means…","o":["this is my father","my father is here","who is my father?"],"a":0},
{"t":"note","tag":"He and she","q":"እሱ and እሷ","body":"<p><b>እሱ</b> <i>issu</i> — <i>he</i>; <b>እሷ</b> <i>isswa</i> — <i>she</i>. They pair with the verb endings you keep meeting: እሱ ደህና ነው, እሷ ደህና ናት — he is well, she is well.</p>","eg":[["እሱ","issu","he"],["እሷ","isswa","she"]]},
{"t":"li","q":"He or she — which do you hear?","say":"እሷ","o":["እሷ","እሱ"],"a":0},
{"t":"mc","q":"እሱ means…","o":["he","she","they"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይህ","o":["ይህ","እሱ"],"a":0},
{"t":"mc","q":"To introduce your mother, you would say ይህች or simply…","o":["ይህ እናቴ ነው pattern with her word","ስምሽ ማን ነው?","ከየት ነሽ?"],"a":0}
]},
{"id":"am_f4_2","title":"Hearing the introductions","step":"recognize","meta":"This-is by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እሱ","o":["እሱ","እሷ","ይህ"],"a":0},
{"t":"mc","q":"What does ይህ mean?","o":["this","that","here"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይህ አባቴ ነው","o":["ይህ አባቴ ነው","ይህ","አባቴ"],"a":0},
{"t":"mc","q":"Which one means she?","o":["እሷ","እሱ","እኔ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እሷ","o":["እሷ","እሱ","እኔ"],"a":0},
{"t":"mc","q":"The ነው at the end of introductions means…","o":["is","this","my"],"a":0}
]},
{"id":"am_f4_3","title":"Building the introductions","step":"build","meta":"Point and present","vocab":[],"ex":[
{"t":"wb","q":"Build: this is my father","a":["ይህ","አባቴ","ነው"],"pool":["ይህ","አባቴ","ነው","እሱ"]},
{"t":"mc","q":"Pick the word for he","o":["እሱ","እሷ","ይህ"],"a":0},
{"t":"wb","q":"Build: this is my friend (gwadegnaye)","a":["ይህ","ጓደኛዬ","ነው"],"pool":["ይህ","ጓደኛዬ","ነው","አባቴ"]},
{"t":"mc","q":"Pick the word for she","o":["እሷ","እሱ","እናት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እሱ","o":["እሱ","ይህ","እሷ"],"a":0}
]},
{"id":"am_f4_4","title":"The introductions in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ይህ","this"],["እሱ","he"],["እሷ","she"]]},
{"t":"li","q":"Which one do you hear?","say":"ይህ","o":["ይህ","እሷ","እሱ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ይህ አባቴ ነው","this is my father"],["ደህና ነው","he is well"]]},
{"t":"mc","q":"Introducing your host father to a visitor…","o":["ይህ አባቴ ነው","አባትህ ማን ነው?","እሱ ከየት ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይህ አባቴ ነው","o":["ይህ አባቴ ነው","እሷ","ይህ"],"a":0}
]},
{"id":"am_f4_5","title":"Checkpoint: the introductions","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ይህ means…","o":["this","he","is"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እሷ","o":["እሷ","እሱ","ይህ"],"a":0},
{"t":"mc","q":"Which one means he?","o":["እሱ","እሷ","ይህ"],"a":0},
{"t":"mc","q":"Review — አባትህ means…","o":["your father (to a man)","my father","his father"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይህ","o":["ይህ","እሱ","እሷ"],"a":0}
]},

/* ---------- f5 · His and her ---------- */
{"id":"am_f5","title":"His and her","step":"learn","meta":"Abbatu, abbatwa — the endings finish the set","vocab":[["አባቱ","abbatu","his father"],["አባቷ","abbatwa","her father"],["እናቷ","ennatwa","her mother"]],"ex":[
{"t":"note","tag":"His","q":"አባቱ","body":"<p><i>His</i> is the ending <b>-u</b>: <b>አባቱ</b> <i>abbatu</i> — <i>his father</i>. Say it with እሱ: እሱ አባቱ — his father.</p>","eg":[["አባቱ","abbatu","his father"]]},
{"t":"li","q":"Which one do you hear?","say":"አባቱ","o":["አባቱ","አባቴ"],"a":0},
{"t":"mc","q":"The -u ending means…","o":["his","her","my"],"a":0},
{"t":"note","tag":"Her","q":"አባቷ, እናቷ","body":"<p><i>Her</i> is <b>-wa</b>: <b>አባቷ</b> <i>abbatwa</i> — <i>her father</i>; <b>እናቷ</b> <i>ennatwa</i> — <i>her mother</i>. Six endings now — my, your (m), your (f), polite, his, her — and they fit every noun in the language.</p>","eg":[["አባቷ","abbatwa","her father"],["እናቷ","ennatwa","her mother"]]},
{"t":"li","q":"His or her — which do you hear?","say":"አባቷ","o":["አባቷ","አባቱ"],"a":0},
{"t":"mc","q":"እናቷ means…","o":["her mother","his mother","my mother"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እናቷ","o":["እናቷ","አባቷ"],"a":0},
{"t":"mc","q":"The -wa in አባቷ echoes which pronoun?","o":["እሷ, she","እሱ, he","እኔ, I"],"a":0}
]},
{"id":"am_f5_2","title":"Hearing his and her","step":"recognize","meta":"Third-person owners by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"አባቷ","o":["አባቷ","አባቱ","እናቷ"],"a":0},
{"t":"mc","q":"What does አባቱ mean?","o":["his father","her father","my father"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እናቷ","o":["እናቷ","አባቷ","አባቱ"],"a":0},
{"t":"mc","q":"Which one means her father?","o":["አባቷ","አባቱ","አባቴ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባቱ","o":["አባቱ","እናቷ","አባቷ"],"a":0},
{"t":"mc","q":"እናቱ would mean…","o":["his mother","her mother","our mother"],"a":0}
]},
{"id":"am_f5_3","title":"Building his and her","step":"build","meta":"Finish the ending set","vocab":[],"ex":[
{"t":"wb","q":"Build: his father (abbat + u)","a":["አባት","ኡ"],"pool":["አባት","ኡ","ዋ"]},
{"t":"mc","q":"Pick: her mother","o":["እናቷ","እናቴ","አባቷ"],"a":0},
{"t":"wb","q":"Build: her father (abbat + wa)","a":["አባት","ዋ"],"pool":["አባት","ዋ","ኡ"]},
{"t":"mc","q":"Pick: his father","o":["አባቱ","አባቷ","አባትህ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባቷ","o":["አባቷ","አባቱ","እናቷ"],"a":0}
]},
{"id":"am_f5_4","title":"His and her in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አባቱ","his father"],["አባቷ","her father"],["እናቷ","her mother"]]},
{"t":"li","q":"Which one do you hear?","say":"አባቱ","o":["አባቱ","አባቷ","እናቷ"],"a":0},
{"t":"match","q":"Match the ending to the owner","pairs":[["-ኤ","me"],["-ኡ","him"],["-ዋ","her"]]},
{"t":"mc","q":"Six owner-endings on one noun — Amharic possessives are…","o":["endings glued to the word","separate little words","optional"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እናቷ","o":["እናቷ","አባቱ","አባቷ"],"a":0}
]},
{"id":"am_f5_5","title":"Checkpoint: his and her","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"አባቷ means…","o":["her father","his father","your father"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እናቷ","o":["እናቷ","አባቷ","አባቱ"],"a":0},
{"t":"mc","q":"Which one means his father?","o":["አባቱ","አባቷ","አባቴ"],"a":0},
{"t":"mc","q":"Review — ይህ አባቴ ነው means…","o":["this is my father","his father is here","my father knows"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባቱ","o":["አባቱ","እናቷ","አባቷ"],"a":0}
]},

/* ---------- f6 · Respect in the family ---------- */
{"id":"am_f6","title":"Respect in the family","step":"learn","meta":"Abbatwo, gash — honor woven into address","vocab":[["አባትዎ","abbatwo","your father (polite)"],["ጋሽ","gash","respectful address for an older man"],["ወይዘሪት","weyzerit","Miss"]],"ex":[
{"t":"note","tag":"The polite owner","q":"አባትዎ","body":"<p>The polite እርስዎ has its own owner-ending too: <b>አባትዎ</b> <i>abbatwo</i> — <i>your father</i>, said with respect. Asking an elder about their family, this is the form that honors them.</p>","eg":[["አባትዎ","abbatwo","your father (polite)"]]},
{"t":"li","q":"Plain or polite — which do you hear?","say":"አባትዎ","o":["አባትዎ","አባትህ"],"a":0},
{"t":"mc","q":"አባትዎ pairs with which pronoun?","o":["እርስዎ","አንተ","እሱ"],"a":0},
{"t":"note","tag":"Warm honor","q":"ጋሽ","body":"<p><b>ጋሽ</b> <i>gash</i> — literally <i>shield</i> — is the warm, respectful way to address an older man: Gash Kebede. It says elder-I-trust rather than stranger. Use it and watch faces soften.</p>","eg":[["ጋሽ","gash","respectful address for an older man"]]},
{"t":"li","q":"Which one do you hear?","say":"ጋሽ","o":["ጋሽ","አቶ"],"a":0},
{"t":"mc","q":"ጋሽ literally means…","o":["shield","father","chief"],"a":0},
{"t":"note","tag":"The last title","q":"ወይዘሪት","body":"<p><b>ወይዘሪት</b> <i>weyzerit</i> — <i>Miss</i> — completes your title set with አቶ and ወይዘሮ. And remember the body language: elders get the two-handed shake, and standing up when they enter.</p>","eg":[["ወይዘሪት","weyzerit","Miss"]]},
{"t":"li","q":"Which one do you hear?","say":"ወይዘሪት","o":["ወይዘሪት","ወይዘሮ"],"a":0},
{"t":"mc","q":"ወይዘሪት means…","o":["Miss","Mrs.","Madam elder"],"a":0}
]},
{"id":"am_f6_2","title":"Hearing the honor","step":"recognize","meta":"Respect forms by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"አባትዎ","o":["አባትዎ","ጋሽ","ወይዘሪት"],"a":0},
{"t":"mc","q":"What does ጋሽ mean?","o":["respectful address for an older man","Mr.","grandfather"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወይዘሪት","o":["ወይዘሪት","አባትዎ","ጋሽ"],"a":0},
{"t":"mc","q":"Which one means your father, politely?","o":["አባትዎ","አባትህ","አባቱ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጋሽ","o":["ጋሽ","ወይዘሪት","አባትዎ"],"a":0},
{"t":"mc","q":"When an elder enters the room, you…","o":["stand up","stay seated","look away"],"a":0}
]},
{"id":"am_f6_3","title":"Building the honor","step":"build","meta":"Respect, assembled","vocab":[],"ex":[
{"t":"wb","q":"Build: your father, politely (abbat + wo)","a":["አባት","ዎ"],"pool":["አባት","ዎ","ህ"]},
{"t":"mc","q":"Pick the warm address for an older man","o":["ጋሽ","አቶ","እሱ"],"a":0},
{"t":"wb","q":"Build: Gash Kebede style — gash + a name slot","a":["ጋሽ","…"],"pool":["ጋሽ","…","ወይዘሪት"]},
{"t":"mc","q":"Pick the title meaning Miss","o":["ወይዘሪት","ወይዘሮ","አቶ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባትዎ","o":["አባትዎ","ወይዘሪት","ጋሽ"],"a":0}
]},
{"id":"am_f6_4","title":"The honor in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አባትዎ","your father (polite)"],["ጋሽ","older-man address"],["ወይዘሪት","Miss"]]},
{"t":"li","q":"Which one do you hear?","say":"ጋሽ","o":["ጋሽ","አባትዎ","ወይዘሪት"],"a":0},
{"t":"match","q":"Match the title to the person","pairs":[["አቶ","Mr."],["ወይዘሮ","Mrs."],["ወይዘሪት","Miss"]]},
{"t":"mc","q":"Greeting your friend&rsquo;s grandfather warmly, you call him…","o":["ጋሽ + his name","እሱ","ወይዘሪት + his name"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወይዘሪት","o":["ወይዘሪት","ጋሽ","አባትዎ"],"a":0}
]},
{"id":"am_f6_5","title":"Checkpoint: the honor","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"አባትዎ is the polite form of…","o":["your father","my father","his father"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጋሽ","o":["ጋሽ","ወይዘሪት","አባትዎ"],"a":0},
{"t":"mc","q":"Which one means Miss?","o":["ወይዘሪት","ወይዘሮ","ጋሽ"],"a":0},
{"t":"mc","q":"Review — the -wa ending means…","o":["her","his","my"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አባትዎ","o":["አባትዎ","አባትህ","ጋሽ"],"a":0}
]},

/* ---------- f7 · Who is this? ---------- */
{"id":"am_f7","title":"Who is this?","step":"learn","meta":"Man new — the zone comes together","vocab":[["ማን ነው?","man new?","who is it?"],["ይህ ጓደኛዬ ነው","yih gwadegnaye new","this is my friend"],["ቤተሰቤ","betesebe","my family"]],"ex":[
{"t":"note","tag":"The door question","q":"ማን ነው?","body":"<p><b>ማን ነው?</b> <i>man new?</i> — <i>who is it?</i> — the knock-at-the-door question, built from two words you have owned since Zone 1. Amharic keeps rewarding attention like this.</p>","eg":[["ማን ነው?","man new?","who is it?"]]},
{"t":"li","q":"Which one do you hear?","say":"ማን ነው?","o":["ማን ነው?","ማን"],"a":0},
{"t":"mc","q":"ማን ነው? asks…","o":["who is it?","what is it?","where is it?"],"a":0},
{"t":"note","tag":"Answering with a person","q":"ይህ ጓደኛዬ ነው","body":"<p>And the answer pattern: <b>ይህ ጓደኛዬ ነው</b> <i>yih gwadegnaye new</i> — <i>this is my friend</i>. Gwadegna takes -ye for <i>my</i> because it ends in a vowel — the -e ending&rsquo;s only costume change.</p>","eg":[["ይህ ጓደኛዬ ነው","yih gwadegnaye new","this is my friend"]]},
{"t":"li","q":"Which one do you hear?","say":"ይህ ጓደኛዬ ነው","o":["ይህ ጓደኛዬ ነው","ማን ነው?"],"a":0},
{"t":"mc","q":"ይህ ጓደኛዬ ነው means…","o":["this is my friend","who is my friend?","my friend is well"],"a":0},
{"t":"note","tag":"All of them at once","q":"ቤተሰቤ","body":"<p><b>ቤተሰቤ</b> <i>betesebe</i> — <i>my family</i> — betesab wearing your -e. Introduce the whole room in one breath: ይህ ቤተሰቤ ነው — this is my family.</p>","eg":[["ቤተሰቤ","betesebe","my family"]]},
{"t":"li","q":"Which one do you hear?","say":"ቤተሰቤ","o":["ቤተሰቤ","ቤተሰብ"],"a":0},
{"t":"mc","q":"ቤተሰቤ means…","o":["my family","the family","our families"],"a":0}
]},
{"id":"am_f7_2","title":"Hearing the answers","step":"recognize","meta":"Who and mine, by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ቤተሰቤ","o":["ቤተሰቤ","ማን ነው?","ይህ ጓደኛዬ ነው"],"a":0},
{"t":"mc","q":"What does ማን ነው? mean?","o":["who is it?","whose is it?","is anyone home?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይህ ጓደኛዬ ነው","o":["ይህ ጓደኛዬ ነው","ቤተሰቤ","ማን ነው?"],"a":0},
{"t":"mc","q":"Which one means my family?","o":["ቤተሰቤ","ቤተሰብ","ጓደኛዬ"],"a":0},
{"t":"li","q":"Bare or mine — which do you hear?","say":"ቤተሰቤ","o":["ቤተሰቤ","ቤተሰብ"],"a":0},
{"t":"mc","q":"Gwadegna takes -ye instead of -e because it…","o":["ends in a vowel","is borrowed","is plural"],"a":0}
]},
{"id":"am_f7_3","title":"Building the answers","step":"build","meta":"Door, friend, family","vocab":[],"ex":[
{"t":"wb","q":"Build: who is it?","a":["ማን","ነው?"],"pool":["ማን","ነው?","ይህ"]},
{"t":"wb","q":"Build: this is my friend","a":["ይህ","ጓደኛዬ","ነው"],"pool":["ይህ","ጓደኛዬ","ነው","ቤተሰቤ"]},
{"t":"mc","q":"Pick: my family","o":["ቤተሰቤ","ቤተሰብ","ጓደኛ"],"a":0},
{"t":"wb","q":"Build: this is my family","a":["ይህ","ቤተሰቤ","ነው"],"pool":["ይህ","ቤተሰቤ","ነው","ማን"]},
{"t":"li","q":"Which one do you hear?","say":"ማን ነው?","o":["ማን ነው?","ይህ ጓደኛዬ ነው","ቤተሰቤ"],"a":0}
]},
{"id":"am_f7_4","title":"The answers in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ማን ነው?","who is it?"],["ይህ ጓደኛዬ ነው","this is my friend"],["ቤተሰቤ","my family"]]},
{"t":"li","q":"Which one do you hear?","say":"ይህ ጓደኛዬ ነው","o":["ይህ ጓደኛዬ ነው","ማን ነው?","ቤተሰቤ"],"a":0},
{"t":"match","q":"Match the question to its answer","pairs":[["ማን ነው?","ይህ ጓደኛዬ ነው"],["ደህና ነህ?","ደህና ነኝ"]]},
{"t":"mc","q":"A knock at the door — the question through the wood is…","o":["ማን ነው?","ስምህ ማን ነው?","ከየት ነህ?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማን ነው?","o":["ማን ነው?","ቤተሰቤ","ይህ ጓደኛዬ ነው"],"a":0}
]},
{"id":"am_f7_5","title":"Checkpoint: Zone 3 complete","step":"checkpoint","meta":"Family and respect — show it all","vocab":[],"ex":[
{"t":"mc","q":"ማን ነው? means…","o":["who is it?","what is this?","are you well?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤተሰቤ","o":["ቤተሰቤ","ይህ ጓደኛዬ ነው","ማን ነው?"],"a":0},
{"t":"mc","q":"Review — his father is…","o":["አባቱ","አባቷ","አባቴ"],"a":0},
{"t":"mc","q":"Review — the polite your-father is…","o":["አባትዎ","አባትህ","አባትሽ"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ልጆች","o":["ልጆች","ልጅ","ቤተሰቤ"],"a":0},
{"t":"mc","q":"Review — ጋሽ warmly addresses…","o":["an older man","a young girl","a crowd"],"a":0},
{"t":"mc","q":"Review — the -och ending makes…","o":["plurals","questions","possessives"],"a":0}
]},

/* ---------- n1 · One to five ---------- */
{"id":"am_n1","title":"One to five","step":"learn","meta":"And, hulett, sost — counting begins","vocab":[["አንድ","and","one"],["ሁለት","hulett","two"],["ሶስት","sost","three"],["አራት","arat","four"],["አምስት","amest","five"]],"ex":[
{"t":"note","tag":"The first three","q":"አንድ, ሁለት, ሶስት","body":"<p><b>አንድ</b> <i>and</i> — <i>one</i>. <b>ሁለት</b> <i>hulett</i> — <i>two</i> — with that held double t you learned to hear. <b>ሶስት</b> <i>sost</i> — <i>three</i>.</p>","eg":[["አንድ","and","one"],["ሁለት","hulett","two"],["ሶስት","sost","three"]]},
{"t":"li","q":"Which number do you hear?","say":"ሁለት","o":["ሁለት","አንድ"],"a":0},
{"t":"mc","q":"ሶስት means…","o":["three","two","five"],"a":0},
{"t":"note","tag":"Four and five","q":"አራት, አምስት","body":"<p><b>አራት</b> <i>arat</i> — <i>four</i>; <b>አምስት</b> <i>amest</i> — <i>five</i>. One hand counted. In Addis you will hear prices in these words and in English both — but the market respects a counter.</p>","eg":[["አራት","arat","four"],["አምስት","amest","five"]]},
{"t":"li","q":"Which number do you hear?","say":"አራት","o":["አራት","አምስት"],"a":0},
{"t":"mc","q":"አምስት means…","o":["five","four","three"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"አንድ","o":["አንድ","ሶስት"],"a":0},
{"t":"mc","q":"The double t in ሁለት is…","o":["held and heard, not written","written twice","silent"],"a":0}
]},
{"id":"am_n1_2","title":"Hearing one to five","step":"recognize","meta":"Small numbers by ear","vocab":[],"ex":[
{"t":"li","q":"Which number do you hear?","say":"ሶስት","o":["ሶስት","አራት","አምስት"],"a":0},
{"t":"mc","q":"What does አንድ mean?","o":["one","first","and"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"አምስት","o":["አምስት","አራት","ሁለት"],"a":0},
{"t":"mc","q":"Which one is four?","o":["አራት","አምስት","ሶስት"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ሁለት","o":["ሁለት","አንድ","አራት"],"a":0},
{"t":"mc","q":"Count up: አንድ, ሁለት, then…","o":["ሶስት","አራት","አምስት"],"a":0}
]},
{"id":"am_n1_3","title":"Building one to five","step":"build","meta":"Count on one hand","vocab":[],"ex":[
{"t":"wb","q":"Build the count: one, two, three","a":["አንድ","ሁለት","ሶስት"],"pool":["አንድ","ሁለት","ሶስት","አራት"]},
{"t":"mc","q":"Pick the number five","o":["አምስት","አራት","ሶስት"],"a":0},
{"t":"wb","q":"Build the count: four, five","a":["አራት","አምስት"],"pool":["አራት","አምስት","ሁለት"]},
{"t":"mc","q":"Pick the number one","o":["አንድ","ሁለት","አምስት"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ሶስት","o":["ሶስት","ሁለት","አምስት"],"a":0}
]},
{"id":"am_n1_4","title":"One to five in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the number to its value","pairs":[["አንድ","1"],["ሁለት","2"],["ሶስት","3"]]},
{"t":"li","q":"Which number do you hear?","say":"አንድ","o":["አንድ","አራት","ሁለት"],"a":0},
{"t":"match","q":"Match the number to its value","pairs":[["አራት","4"],["አምስት","5"]]},
{"t":"mc","q":"ሁለት ቡና means…","o":["two coffees","one coffee","five coffees"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"አራት","o":["አራት","አምስት","ሶስት"],"a":0}
]},
{"id":"am_n1_5","title":"Checkpoint: one to five","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"አራት means…","o":["four","five","two"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"አምስት","o":["አምስት","ሶስት","አንድ"],"a":0},
{"t":"mc","q":"Which one is two?","o":["ሁለት","አንድ","ሶስት"],"a":0},
{"t":"mc","q":"Review — ማን ነው? means…","o":["who is it?","how many?","what time?"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"አንድ","o":["አንድ","ሁለት","አራት"],"a":0}
]},

/* ---------- n2 · Six to ten ---------- */
{"id":"am_n2","title":"Six to ten","step":"learn","meta":"Siddist to asser — both hands full","vocab":[["ስድስት","siddist","six"],["ሰባት","sebat","seven"],["ስምንት","simmint","eight"],["ዘጠኝ","zetegn","nine"],["አስር","asser","ten"]],"ex":[
{"t":"note","tag":"Six and seven","q":"ስድስት, ሰባት","body":"<p><b>ስድስት</b> <i>siddist</i> — <i>six</i> — a workout of bare sixth-order letters. <b>ሰባት</b> <i>sebat</i> — <i>seven</i>.</p>","eg":[["ስድስት","siddist","six"],["ሰባት","sebat","seven"]]},
{"t":"li","q":"Which number do you hear?","say":"ስድስት","o":["ስድስት","ሰባት"],"a":0},
{"t":"mc","q":"ሰባት means…","o":["seven","six","eight"],"a":0},
{"t":"note","tag":"Eight and nine","q":"ስምንት, ዘጠኝ","body":"<p><b>ስምንት</b> <i>simmint</i> — <i>eight</i> — hold the double m. <b>ዘጠኝ</b> <i>zetegn</i> — <i>nine</i> — with the tight ጠ in the middle: ze-TTE-gn.</p>","eg":[["ስምንት","simmint","eight"],["ዘጠኝ","zetegn","nine"]]},
{"t":"li","q":"Which number do you hear?","say":"ዘጠኝ","o":["ዘጠኝ","ስምንት"],"a":0},
{"t":"mc","q":"The tight consonant inside ዘጠኝ is…","o":["ጠ","ተ","ቀ"],"a":0},
{"t":"note","tag":"Ten","q":"አስር","body":"<p><b>አስር</b> <i>asser</i> — <i>ten</i>. Both hands counted: the whole market toolkit from and to asser is yours.</p>","eg":[["አስር","asser","ten"]]},
{"t":"li","q":"Which number do you hear?","say":"አስር","o":["አስር","ዘጠኝ"],"a":0},
{"t":"mc","q":"አስር means…","o":["ten","nine","eight"],"a":0}
]},
{"id":"am_n2_2","title":"Hearing six to ten","step":"recognize","meta":"Big fingers by ear","vocab":[],"ex":[
{"t":"li","q":"Which number do you hear?","say":"ሰባት","o":["ሰባት","ስድስት","ስምንት"],"a":0},
{"t":"mc","q":"What does ስምንት mean?","o":["eight","seven","nine"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ስምንት","o":["ስምንት","ዘጠኝ","ሰባት"],"a":0},
{"t":"mc","q":"Which one is six?","o":["ስድስት","ሰባት","አስር"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"አስር","o":["አስር","ስድስት","ዘጠኝ"],"a":0},
{"t":"mc","q":"Count up: ሰባት, ስምንት, then…","o":["ዘጠኝ","አስር","ስድስት"],"a":0}
]},
{"id":"am_n2_3","title":"Building six to ten","step":"build","meta":"The second hand","vocab":[],"ex":[
{"t":"wb","q":"Build the count: six, seven, eight","a":["ስድስት","ሰባት","ስምንት"],"pool":["ስድስት","ሰባት","ስምንት","ዘጠኝ"]},
{"t":"mc","q":"Pick the number ten","o":["አስር","ዘጠኝ","ስምንት"],"a":0},
{"t":"wb","q":"Build the count: nine, ten","a":["ዘጠኝ","አስር"],"pool":["ዘጠኝ","አስር","ሰባት"]},
{"t":"mc","q":"Pick the number seven","o":["ሰባት","ስድስት","ስምንት"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ስድስት","o":["ስድስት","ስምንት","አስር"],"a":0}
]},
{"id":"am_n2_4","title":"Six to ten in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the number to its value","pairs":[["ስድስት","6"],["ሰባት","7"],["ስምንት","8"]]},
{"t":"li","q":"Which number do you hear?","say":"ዘጠኝ","o":["ዘጠኝ","አስር","ስምንት"],"a":0},
{"t":"match","q":"Match the number to its value","pairs":[["ዘጠኝ","9"],["አስር","10"]]},
{"t":"mc","q":"አስር ብር would be…","o":["ten birr","six birr","nine birr"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ሰባት","o":["ሰባት","ስድስት","ዘጠኝ"],"a":0}
]},
{"id":"am_n2_5","title":"Checkpoint: six to ten","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ዘጠኝ means…","o":["nine","eight","ten"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ስምንት","o":["ስምንት","ሰባት","ስድስት"],"a":0},
{"t":"mc","q":"Which one is ten?","o":["አስር","ዘጠኝ","አራት"],"a":0},
{"t":"mc","q":"Review — which one is five?","o":["አምስት","አራት","ሶስት"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ዘጠኝ","o":["ዘጠኝ","ስምንት","አስር"],"a":0}
]},

/* ---------- n3 · The weekdays ---------- */
{"id":"am_n3","title":"The weekdays","step":"learn","meta":"Sanyo to arb — the working five","vocab":[["ሰኞ","sanyo","Monday"],["ማክሰኞ","maksanyo","Tuesday"],["ረቡዕ","rebu","Wednesday"],["ሐሙስ","hamus","Thursday"],["ዓርብ","arb","Friday"]],"ex":[
{"t":"note","tag":"The week opens","q":"ሰኞ and ማክሰኞ","body":"<p><b>ሰኞ</b> <i>sanyo</i> — <i>Monday</i>. Tuesday tells you its own story: <b>ማክሰኞ</b> <i>maksanyo</i> — <i>the one after sanyo</i>. Amharic names Tuesday by leaning on Monday.</p>","eg":[["ሰኞ","sanyo","Monday"],["ማክሰኞ","maksanyo","Tuesday"]]},
{"t":"li","q":"Which day do you hear?","say":"ሰኞ","o":["ሰኞ","ማክሰኞ"],"a":0},
{"t":"mc","q":"ማክሰኞ literally means…","o":["the one after sanyo","market day","second sun"],"a":0},
{"t":"note","tag":"Midweek","q":"ረቡዕ and ሐሙስ","body":"<p><b>ረቡዕ</b> <i>rebu</i> — <i>Wednesday</i> — and <b>ሐሙስ</b> <i>hamus</i> — <i>Thursday</i>. Old Semitic number-names: the fourth and the fifth day, cousins of words used across the Red Sea.</p>","eg":[["ረቡዕ","rebu","Wednesday"],["ሐሙስ","hamus","Thursday"]]},
{"t":"li","q":"Which day do you hear?","say":"ሐሙስ","o":["ሐሙስ","ረቡዕ"],"a":0},
{"t":"mc","q":"ረቡዕ means…","o":["Wednesday","Thursday","Tuesday"],"a":0},
{"t":"note","tag":"The week exhales","q":"ዓርብ","body":"<p><b>ዓርብ</b> <i>arb</i> — <i>Friday</i> — the door to the weekend, and in much of Ethiopia a fasting day with its own quiet rhythm.</p>","eg":[["ዓርብ","arb","Friday"]]},
{"t":"li","q":"Which day do you hear?","say":"ዓርብ","o":["ዓርብ","ሐሙስ"],"a":0},
{"t":"mc","q":"ዓርብ means…","o":["Friday","Saturday","Thursday"],"a":0}
]},
{"id":"am_n3_2","title":"Hearing the weekdays","step":"recognize","meta":"The working five by ear","vocab":[],"ex":[
{"t":"li","q":"Which day do you hear?","say":"ማክሰኞ","o":["ማክሰኞ","ሰኞ","ረቡዕ"],"a":0},
{"t":"mc","q":"What does ሐሙስ mean?","o":["Thursday","Wednesday","Friday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"ረቡዕ","o":["ረቡዕ","ዓርብ","ማክሰኞ"],"a":0},
{"t":"mc","q":"Which one is Monday?","o":["ሰኞ","ማክሰኞ","ዓርብ"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"ዓርብ","o":["ዓርብ","ረቡዕ","ሰኞ"],"a":0},
{"t":"mc","q":"The days in order: ሰኞ, ማክሰኞ, then…","o":["ረቡዕ","ሐሙስ","ዓርብ"],"a":0}
]},
{"id":"am_n3_3","title":"Building the weekdays","step":"build","meta":"Line up the week","vocab":[],"ex":[
{"t":"wb","q":"Build the week: Monday, Tuesday, Wednesday","a":["ሰኞ","ማክሰኞ","ረቡዕ"],"pool":["ሰኞ","ማክሰኞ","ረቡዕ","ሐሙስ"]},
{"t":"mc","q":"Pick Friday","o":["ዓርብ","ሐሙስ","ሰኞ"],"a":0},
{"t":"wb","q":"Build: Thursday, Friday","a":["ሐሙስ","ዓርብ"],"pool":["ሐሙስ","ዓርብ","ረቡዕ"]},
{"t":"mc","q":"Pick Tuesday","o":["ማክሰኞ","ሰኞ","ረቡዕ"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"ሰኞ","o":["ሰኞ","ማክሰኞ","ዓርብ"],"a":0}
]},
{"id":"am_n3_4","title":"The weekdays in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the day to its place","pairs":[["ሰኞ","Monday"],["ረቡዕ","Wednesday"],["ዓርብ","Friday"]]},
{"t":"li","q":"Which day do you hear?","say":"ሐሙስ","o":["ሐሙስ","ዓርብ","ረቡዕ"],"a":0},
{"t":"match","q":"Match the day to its place","pairs":[["ማክሰኞ","Tuesday"],["ሐሙስ","Thursday"]]},
{"t":"mc","q":"Tuesday leans on Monday the way maksanyo leans on…","o":["ሰኞ","ረቡዕ","ዓርብ"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"ማክሰኞ","o":["ማክሰኞ","ሰኞ","ሐሙስ"],"a":0}
]},
{"id":"am_n3_5","title":"Checkpoint: the weekdays","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ሐሙስ means…","o":["Thursday","Tuesday","Friday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"ረቡዕ","o":["ረቡዕ","ማክሰኞ","ዓርብ"],"a":0},
{"t":"mc","q":"Which one is Friday?","o":["ዓርብ","ሐሙስ","ሰኞ"],"a":0},
{"t":"mc","q":"Review — which one is nine?","o":["ዘጠኝ","ስምንት","አስር"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"ሰኞ","o":["ሰኞ","ዓርብ","ረቡዕ"],"a":0}
]},

/* ---------- n4 · Weekend, today, tomorrow ---------- */
{"id":"am_n4","title":"Weekend, today, tomorrow","step":"learn","meta":"Kidame, ihud — and the moving days","vocab":[["ቅዳሜ","kidame","Saturday"],["እሁድ","ihud","Sunday"],["ዛሬ","zare","today"],["ነገ","nege","tomorrow"],["ትናንት","tinant","yesterday"]],"ex":[
{"t":"note","tag":"The weekend pair","q":"ቅዳሜ and እሁድ","body":"<p><b>ቅዳሜ</b> <i>kidame</i> — <i>Saturday</i>, the great market day across Ethiopia — and <b>እሁድ</b> <i>ihud</i> — <i>Sunday</i>, when the coffee ceremony stretches long and most of the country rests.</p>","eg":[["ቅዳሜ","kidame","Saturday"],["እሁድ","ihud","Sunday"]]},
{"t":"li","q":"Which day do you hear?","say":"ቅዳሜ","o":["ቅዳሜ","እሁድ"],"a":0},
{"t":"mc","q":"The great market day is…","o":["ቅዳሜ","እሁድ","ሰኞ"],"a":0},
{"t":"note","tag":"The moving days","q":"ዛሬ, ነገ, ትናንት","body":"<p><b>ዛሬ</b> <i>zare</i> — <i>today</i>; <b>ነገ</b> <i>nege</i> — <i>tomorrow</i>; <b>ትናንት</b> <i>tinant</i> — <i>yesterday</i>. Three small words that anchor every plan and every story you will ever tell.</p>","eg":[["ዛሬ","zare","today"],["ነገ","nege","tomorrow"],["ትናንት","tinant","yesterday"]]},
{"t":"li","q":"Which one do you hear?","say":"ነገ","o":["ነገ","ዛሬ"],"a":0},
{"t":"mc","q":"ትናንት means…","o":["yesterday","today","tomorrow"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ","o":["ዛሬ","ትናንት"],"a":0},
{"t":"mc","q":"ነገ means…","o":["tomorrow","today","yesterday"],"a":0}
]},
{"id":"am_n4_2","title":"Hearing the weekend","step":"recognize","meta":"Rest days and moving days","vocab":[],"ex":[
{"t":"li","q":"Which day do you hear?","say":"እሁድ","o":["እሁድ","ቅዳሜ","ዓርብ"],"a":0},
{"t":"mc","q":"What does ዛሬ mean?","o":["today","tomorrow","yesterday"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ትናንት","o":["ትናንት","ነገ","ዛሬ"],"a":0},
{"t":"mc","q":"Which one is Sunday?","o":["እሁድ","ቅዳሜ","ሐሙስ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ነገ","o":["ነገ","ትናንት","ዛሬ"],"a":0},
{"t":"mc","q":"The long-coffee resting day is…","o":["እሁድ","ማክሰኞ","ረቡዕ"],"a":0}
]},
{"id":"am_n4_3","title":"Building the weekend","step":"build","meta":"Weekend plus time words","vocab":[],"ex":[
{"t":"wb","q":"Build: Saturday and Sunday","a":["ቅዳሜ","እሁድ"],"pool":["ቅዳሜ","እሁድ","ዓርብ"]},
{"t":"mc","q":"Pick the word for today","o":["ዛሬ","ነገ","ትናንት"],"a":0},
{"t":"wb","q":"Build the timeline: yesterday, today, tomorrow","a":["ትናንት","ዛሬ","ነገ"],"pool":["ትናንት","ዛሬ","ነገ","እሁድ"]},
{"t":"mc","q":"Pick Saturday","o":["ቅዳሜ","እሁድ","ሰኞ"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"ቅዳሜ","o":["ቅዳሜ","እሁድ","ነገ"],"a":0}
]},
{"id":"am_n4_4","title":"The weekend in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ቅዳሜ","Saturday"],["እሁድ","Sunday"],["ዛሬ","today"]]},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ","o":["ዛሬ","ነገ","ትናንት"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ነገ","tomorrow"],["ትናንት","yesterday"]]},
{"t":"mc","q":"ዛሬ እሁድ ነው means…","o":["today is Sunday","tomorrow is Sunday","Sunday was yesterday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"እሁድ","o":["እሁድ","ቅዳሜ","ዛሬ"],"a":0}
]},
{"id":"am_n4_5","title":"Checkpoint: the weekend","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"እሁድ means…","o":["Sunday","Saturday","Friday"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ትናንት","o":["ትናንት","ዛሬ","ነገ"],"a":0},
{"t":"mc","q":"Which one means tomorrow?","o":["ነገ","ዛሬ","ትናንት"],"a":0},
{"t":"mc","q":"Review — ማክሰኞ means…","o":["Tuesday","Monday","Thursday"],"a":0},
{"t":"li","q":"Which day do you hear?","say":"ነገ","o":["ነገ","እሁድ","ትናንት"],"a":0}
]},

/* ---------- n5 · What time is it? ---------- */
{"id":"am_n5","title":"What time is it?","step":"learn","meta":"Sint se-at new — and the polite opener","vocab":[["ሰዓት","se-at","hour · time · watch"],["ስንት","sint","how many · how much"],["ስንት ሰዓት ነው?","sint se-at new?","what time is it?"],["ይቅርታ","yikirta","excuse me · sorry"]],"ex":[
{"t":"note","tag":"The time words","q":"ሰዓት and ስንት","body":"<p><b>ሰዓት</b> <i>se-at</i> is <i>hour</i>, <i>time</i> and <i>watch</i> in one word. <b>ስንት</b> <i>sint</i> — <i>how many?</i> — is about to become one of your most used words: it asks times today and prices next week.</p>","eg":[["ሰዓት","se-at","hour · time · watch"],["ስንት","sint","how many · how much"]]},
{"t":"li","q":"Which one do you hear?","say":"ሰዓት","o":["ሰዓት","ስንት"],"a":0},
{"t":"mc","q":"ስንት asks…","o":["how many","what kind","which one"],"a":0},
{"t":"note","tag":"The question","q":"ስንት ሰዓት ነው?","body":"<p>Put them together: <b>ስንት ሰዓት ነው?</b> <i>sint se-at new?</i> — <i>what time is it?</i> — literally how-many hour is-it. The ነው engine keeps running everything.</p>","eg":[["ስንት ሰዓት ነው?","sint se-at new?","what time is it?"]]},
{"t":"li","q":"Which one do you hear?","say":"ስንት ሰዓት ነው?","o":["ስንት ሰዓት ነው?","ሰዓት"],"a":0},
{"t":"mc","q":"ስንት ሰዓት ነው? literally asks…","o":["how many hour is it","which hour comes","is there time"],"a":0},
{"t":"note","tag":"Approaching a stranger","q":"ይቅርታ","body":"<p><b>ይቅርታ</b> <i>yikirta</i> — <i>excuse me</i>, also <i>sorry</i>. The polite key that opens a stranger: ይቅርታ, ስንት ሰዓት ነው? — excuse me, what time is it?</p>","eg":[["ይቅርታ","yikirta","excuse me · sorry"]]},
{"t":"li","q":"Which one do you hear?","say":"ይቅርታ","o":["ይቅርታ","ስንት"],"a":0},
{"t":"mc","q":"ይቅርታ opens…","o":["a polite request to a stranger","a meal","an argument"],"a":0}
]},
{"id":"am_n5_2","title":"Hearing the time question","step":"recognize","meta":"Clock talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ስንት","o":["ስንት","ሰዓት","ይቅርታ"],"a":0},
{"t":"mc","q":"What does ሰዓት mean?","o":["hour · time · watch","minute","day"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስንት ሰዓት ነው?","o":["ስንት ሰዓት ነው?","ይቅርታ","ሰዓት"],"a":0},
{"t":"mc","q":"Which one means excuse me?","o":["ይቅርታ","ስንት","ነው"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይቅርታ","o":["ይቅርታ","ስንት ሰዓት ነው?","ሰዓት"],"a":0},
{"t":"mc","q":"ስንት will return next zone to ask about…","o":["prices","names","weather"],"a":0}
]},
{"id":"am_n5_3","title":"Building the time question","step":"build","meta":"Polite, then precise","vocab":[],"ex":[
{"t":"wb","q":"Build: what time is it?","a":["ስንት","ሰዓት","ነው?"],"pool":["ስንት","ሰዓት","ነው?","ይቅርታ"]},
{"t":"mc","q":"Pick the polite opener","o":["ይቅርታ","ስንት","ዛሬ"],"a":0},
{"t":"wb","q":"Build: excuse me, what time is it?","a":["ይቅርታ","ስንት","ሰዓት","ነው?"],"pool":["ይቅርታ","ስንት","ሰዓት","ነው?","ዛሬ"]},
{"t":"mc","q":"Pick the word for hour","o":["ሰዓት","ስንት","ነው"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስንት ሰዓት ነው?","o":["ስንት ሰዓት ነው?","ሰዓት","ይቅርታ"],"a":0}
]},
{"id":"am_n5_4","title":"The time question in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሰዓት","hour · time"],["ስንት","how many"],["ይቅርታ","excuse me"]]},
{"t":"li","q":"Which one do you hear?","say":"ሰዓት","o":["ሰዓት","ስንት","ይቅርታ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ስንት ሰዓት ነው?","what time is it?"],["ማን ነው?","who is it?"]]},
{"t":"mc","q":"Stopping a stranger on Churchill Avenue, you begin…","o":["ይቅርታ","እሺ","ቻው"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስንት","o":["ስንት","ሰዓት","ነገ"],"a":0}
]},
{"id":"am_n5_5","title":"Checkpoint: the time question","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ስንት ሰዓት ነው? means…","o":["what time is it?","how many days?","what day is it?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይቅርታ","o":["ይቅርታ","ስንት","ሰዓት"],"a":0},
{"t":"mc","q":"ሰዓት covers hour, time and…","o":["watch","minute","calendar"],"a":0},
{"t":"mc","q":"Review — ዛሬ means…","o":["today","tomorrow","now"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰዓት","o":["ሰዓት","ይቅርታ","ስንት"],"a":0}
]},

/* ---------- n6 · The Ethiopian clock ---------- */
{"id":"am_n6","title":"The Ethiopian clock","step":"learn","meta":"The day starts at sunrise — recount everything","vocab":[["ሀበሻ ሰዓት","habesha se-at","Ethiopian time"],["ፈረንጅ ሰዓት","ferenj se-at","European time"],["ጠዋት","tewat","morning"],["ማታ","mata","evening"]],"ex":[
{"t":"note","tag":"The big secret","q":"The clock starts at sunrise","body":"<p>Ethiopia counts hours from SUNRISE, not midnight. One o&rsquo;clock — <i>and se-at</i> — is 7:00 in the morning; two is 8:00; noon is SIX. It is beautifully logical near the equator, where the sun rises at the same hour year-round — and it catches every visitor once.</p>","eg":[["ጠዋት","tewat","morning"]]},
{"t":"li","q":"Which one do you hear?","say":"ጠዋት","o":["ጠዋት","ዛሬ"],"a":0},
{"t":"mc","q":"One o&rsquo;clock Ethiopian time is…","o":["7:00 in the morning","1:00 after midnight","noon"],"a":0},
{"t":"note","tag":"Naming the two clocks","q":"ሀበሻ ሰዓት vs ፈረንጅ ሰዓት","body":"<p>When arranging anything, Ethiopians ask which clock: <b>ሀበሻ ሰዓት</b> <i>habesha se-at</i> — <i>Ethiopian time</i> — or <b>ፈረንጅ ሰዓት</b> <i>ferenj se-at</i> — <i>foreigner time</i>. Always confirm. A meeting at two can be 8 AM or 2 PM depending on the answer.</p>","eg":[["ሀበሻ ሰዓት","habesha se-at","Ethiopian time"],["ፈረንጅ ሰዓት","ferenj se-at","European time"]]},
{"t":"li","q":"Which one do you hear?","say":"ሀበሻ ሰዓት","o":["ሀበሻ ሰዓት","ፈረንጅ ሰዓት"],"a":0},
{"t":"mc","q":"Before any appointment, you confirm…","o":["habesha or ferenj time","the weather","the address twice"],"a":0},
{"t":"note","tag":"Morning and evening","q":"ጠዋት and ማታ","body":"<p><b>ጠዋት</b> <i>tewat</i> — <i>morning</i> — and <b>ማታ</b> <i>mata</i> — <i>evening</i>. Ethiopians attach them to hours to remove doubt: tewat two o&rsquo;clock (8 AM), mata two o&rsquo;clock (8 PM).</p>","eg":[["ማታ","mata","evening"]]},
{"t":"li","q":"Morning or evening — which do you hear?","say":"ማታ","o":["ማታ","ጠዋት"],"a":0},
{"t":"mc","q":"ማታ means…","o":["evening","morning","midnight"],"a":0}
]},
{"id":"am_n6_2","title":"Hearing the two clocks","step":"recognize","meta":"Sunrise counting by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ፈረንጅ ሰዓት","o":["ፈረንጅ ሰዓት","ሀበሻ ሰዓት","ሰዓት"],"a":0},
{"t":"mc","q":"What does ሀበሻ ሰዓት mean?","o":["Ethiopian time","holy time","old time"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጠዋት","o":["ጠዋት","ማታ","ዛሬ"],"a":0},
{"t":"mc","q":"Noon in Ethiopian counting is…","o":["six o&rsquo;clock","twelve o&rsquo;clock","one o&rsquo;clock"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማታ","o":["ማታ","ጠዋት","ሀበሻ ሰዓት"],"a":0},
{"t":"mc","q":"The system is logical near the equator because…","o":["sunrise barely moves all year","days are longer","clocks are rare"],"a":0}
]},
{"id":"am_n6_3","title":"Building the two clocks","step":"build","meta":"Convert without fear","vocab":[],"ex":[
{"t":"wb","q":"Build: Ethiopian time","a":["ሀበሻ","ሰዓት"],"pool":["ሀበሻ","ሰዓት","ፈረንጅ"]},
{"t":"mc","q":"8:00 in the morning, Ethiopian style, is hour…","o":["ሁለት","ስምንት","አራት"],"a":0},
{"t":"wb","q":"Build: European time","a":["ፈረንጅ","ሰዓት"],"pool":["ፈረንጅ","ሰዓት","ሀበሻ"]},
{"t":"mc","q":"10:00 in the morning, Ethiopian style, is hour…","o":["አራት","አስር","ሁለት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሀበሻ ሰዓት","o":["ሀበሻ ሰዓት","ፈረንጅ ሰዓት","ጠዋት"],"a":0}
]},
{"id":"am_n6_4","title":"The two clocks in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሀበሻ ሰዓት","Ethiopian time"],["ፈረንጅ ሰዓት","European time"]]},
{"t":"li","q":"Which one do you hear?","say":"ጠዋት","o":["ጠዋት","ማታ","ሰዓት"],"a":0},
{"t":"match","q":"Match the hour (Ethiopian → Western)","pairs":[["አንድ ሰዓት","7:00"],["ስድስት ሰዓት","noon"],["ሁለት ሰዓት","8:00"]]},
{"t":"mc","q":"Meet at two, mata — in Western terms that is…","o":["8 PM","2 PM","2 AM"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማታ","o":["ማታ","ጠዋት","ፈረንጅ ሰዓት"],"a":0}
]},
{"id":"am_n6_5","title":"Checkpoint: the two clocks","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"The Ethiopian day is counted from…","o":["sunrise","midnight","noon"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ፈረንጅ ሰዓት","o":["ፈረንጅ ሰዓት","ሀበሻ ሰዓት","ማታ"],"a":0},
{"t":"mc","q":"ጠዋት means…","o":["morning","evening","sunrise"],"a":0},
{"t":"mc","q":"Review — ስንት ሰዓት ነው? asks…","o":["what time is it?","which day is it?","how far is it?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሀበሻ ሰዓት","o":["ሀበሻ ሰዓት","ጠዋት","ፈረንጅ ሰዓት"],"a":0}
]},

/* ---------- n7 · Week, month, year ---------- */
{"id":"am_n7","title":"Week, month, year","step":"learn","meta":"Samint, wer, amet — and thirteen months of sunshine","vocab":[["ሳምንት","samint","week"],["ወር","wer","month"],["ዓመት","amet","year"],["ዛሬ ሰኞ ነው","zare sanyo new","today is Monday"]],"ex":[
{"t":"note","tag":"The bigger circles","q":"ሳምንት, ወር, ዓመት","body":"<p><b>ሳምንት</b> <i>samint</i> — <i>week</i>; <b>ወር</b> <i>wer</i> — <i>month</i>; <b>ዓመት</b> <i>amet</i> — <i>year</i>. Time&rsquo;s three biggest everyday circles.</p>","eg":[["ሳምንት","samint","week"],["ወር","wer","month"],["ዓመት","amet","year"]]},
{"t":"li","q":"Which one do you hear?","say":"ሳምንት","o":["ሳምንት","ወር"],"a":0},
{"t":"mc","q":"ዓመት means…","o":["year","month","week"],"a":0},
{"t":"note","tag":"Thirteen months of sunshine","q":"The Ethiopian calendar","body":"<p>Ethiopia keeps its own calendar: twelve months of thirty days plus a five-day thirteenth month, Pagume — the tourist slogan calls it thirteen months of sunshine. The year runs seven to eight years behind the Western count, and New Year falls in September. Recognize it; no arithmetic required.</p>","eg":[["ወር","wer","month"]]},
{"t":"li","q":"Which one do you hear?","say":"ወር","o":["ወር","ዓመት"],"a":0},
{"t":"mc","q":"The thirteenth month is called…","o":["Pagume","Meskerem","Ferenj"],"a":0},
{"t":"note","tag":"Saying the date out loud","q":"ዛሬ ሰኞ ነው","body":"<p>Day words meet the ነው engine: <b>ዛሬ ሰኞ ነው</b> <i>zare sanyo new</i> — <i>today is Monday</i>. Swap in any day; the frame holds.</p>","eg":[["ዛሬ ሰኞ ነው","zare sanyo new","today is Monday"]]},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ ሰኞ ነው","o":["ዛሬ ሰኞ ነው","ሳምንት"],"a":0},
{"t":"mc","q":"ዛሬ ሰኞ ነው means…","o":["today is Monday","Monday is tomorrow","last Monday"],"a":0}
]},
{"id":"am_n7_2","title":"Hearing the circles","step":"recognize","meta":"Week to year by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ዓመት","o":["ዓመት","ወር","ሳምንት"],"a":0},
{"t":"mc","q":"What does ሳምንት mean?","o":["week","month","year"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወር","o":["ወር","ዓመት","ሰዓት"],"a":0},
{"t":"mc","q":"Which one means year?","o":["ዓመት","ወር","ሳምንት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ ሰኞ ነው","o":["ዛሬ ሰኞ ነው","ዓመት","ወር"],"a":0},
{"t":"mc","q":"Ethiopian New Year falls in…","o":["September","January","June"],"a":0}
]},
{"id":"am_n7_3","title":"Building the circles","step":"build","meta":"Time, assembled","vocab":[],"ex":[
{"t":"wb","q":"Build the circles small to big: week, month, year","a":["ሳምንት","ወር","ዓመት"],"pool":["ሳምንት","ወር","ዓመት","ሰዓት"]},
{"t":"mc","q":"Pick the word for month","o":["ወር","ዓመት","ሳምንት"],"a":0},
{"t":"wb","q":"Build: today is Monday","a":["ዛሬ","ሰኞ","ነው"],"pool":["ዛሬ","ሰኞ","ነው","ነገ"]},
{"t":"mc","q":"Pick the word for week","o":["ሳምንት","ወር","ሰዓት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሳምንት","o":["ሳምንት","ዓመት","ወር"],"a":0}
]},
{"id":"am_n7_4","title":"The circles in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሳምንት","week"],["ወር","month"],["ዓመት","year"]]},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ ሰኞ ነው","o":["ዛሬ ሰኞ ነው","ሳምንት","ዓመት"],"a":0},
{"t":"match","q":"Match the frame","pairs":[["ዛሬ ሰኞ ነው","today is Monday"],["ዛሬ እሁድ ነው","today is Sunday"]]},
{"t":"mc","q":"Thirteen months of sunshine refers to…","o":["the Ethiopian calendar","the rainy season","daylight saving"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዓመት","o":["ዓመት","ሳምንት","ወር"],"a":0}
]},
{"id":"am_n7_5","title":"Checkpoint: Zone 4 complete","step":"checkpoint","meta":"Numbers, days and the clock — show it all","vocab":[],"ex":[
{"t":"mc","q":"ወር means…","o":["month","week","year"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ ሰኞ ነው","o":["ዛሬ ሰኞ ነው","ወር","ሳምንት"],"a":0},
{"t":"mc","q":"Review — one o&rsquo;clock habesha se-at is…","o":["7:00 AM","1:00 AM","11:00 AM"],"a":0},
{"t":"mc","q":"Review — which one is eight?","o":["ስምንት","ሰባት","ዘጠኝ"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ይቅርታ","o":["ይቅርታ","ስንት","ሰዓት"],"a":0},
{"t":"mc","q":"Review — the market day is…","o":["ቅዳሜ","ሰኞ","ረቡዕ"],"a":0},
{"t":"mc","q":"Review — ነገ means…","o":["tomorrow","yesterday","today"],"a":0}
]},

/* ---------- d1 · The staples ---------- */
{"id":"am_d1","title":"The staples","step":"learn","meta":"Injera — the plate you can eat","vocab":[["እንጀራ","injera","injera (the sourdough flatbread)"],["ወጥ","wet","stew"],["ዳቦ","dabo","bread"],["ውሃ","wiha","water"]],"ex":[
{"t":"note","tag":"The foundation","q":"እንጀራ and ወጥ","body":"<p><b>እንጀራ</b> <i>injera</i> — the great sourdough flatbread — is plate, fork and food in one: <b>ወጥ</b> <i>wet</i>, <i>stew</i>, is ladled on top and everyone tears from the same injera with the RIGHT hand. Sharing one plate is the point.</p>","eg":[["እንጀራ","injera","injera (the sourdough flatbread)"],["ወጥ","wet","stew"]]},
{"t":"li","q":"Which one do you hear?","say":"እንጀራ","o":["እንጀራ","ወጥ"],"a":0},
{"t":"mc","q":"Injera is eaten with…","o":["the right hand","a fork","the left hand"],"a":0},
{"t":"note","tag":"The loaf and the glass","q":"ዳቦ and ውሃ","body":"<p><b>ዳቦ</b> <i>dabo</i> — <i>bread</i>, the wheat loaf of breakfast. <b>ውሃ</b> <i>wiha</i> — <i>water</i>. Ambo, Ethiopia&rsquo;s beloved sparkling water, comes from a town of the same name.</p>","eg":[["ዳቦ","dabo","bread"],["ውሃ","wiha","water"]]},
{"t":"li","q":"Which one do you hear?","say":"ዳቦ","o":["ዳቦ","ውሃ"],"a":0},
{"t":"mc","q":"ውሃ means…","o":["water","bread","milk"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወጥ","o":["ወጥ","እንጀራ"],"a":0},
{"t":"mc","q":"ወጥ is served…","o":["on top of injera","in a cup","beside bread only"],"a":0}
]},
{"id":"am_d1_2","title":"Hearing the staples","step":"recognize","meta":"The table by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ውሃ","o":["ውሃ","ዳቦ","ወጥ"],"a":0},
{"t":"mc","q":"What does እንጀራ mean?","o":["the sourdough flatbread","the stew","the loaf"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወጥ","o":["ወጥ","ውሃ","እንጀራ"],"a":0},
{"t":"mc","q":"Which one means bread?","o":["ዳቦ","እንጀራ","ወጥ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንጀራ","o":["እንጀራ","ዳቦ","ውሃ"],"a":0},
{"t":"mc","q":"Everyone eats from…","o":["one shared injera","separate plates","small bowls"],"a":0}
]},
{"id":"am_d1_3","title":"Building the staples","step":"build","meta":"Set the table","vocab":[],"ex":[
{"t":"wb","q":"Build: injera and stew","a":["እንጀራ","ወጥ"],"pool":["እንጀራ","ወጥ","ዳቦ"]},
{"t":"mc","q":"Pick the word for water","o":["ውሃ","ዳቦ","ወጥ"],"a":0},
{"t":"wb","q":"Build: bread and water","a":["ዳቦ","ውሃ"],"pool":["ዳቦ","ውሃ","እንጀራ"]},
{"t":"mc","q":"Pick the word for stew","o":["ወጥ","ውሃ","ዳቦ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዳቦ","o":["ዳቦ","ወጥ","እንጀራ"],"a":0}
]},
{"id":"am_d1_4","title":"The staples in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እንጀራ","injera"],["ወጥ","stew"],["ዳቦ","bread"]]},
{"t":"li","q":"Which one do you hear?","say":"ውሃ","o":["ውሃ","እንጀራ","ዳቦ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ውሃ","water"],["ወጥ","stew"]]},
{"t":"mc","q":"Ethiopia&rsquo;s famous sparkling water is named after the town of…","o":["Ambo","Addis","Arba"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንጀራ","o":["እንጀራ","ውሃ","ወጥ"],"a":0}
]},
{"id":"am_d1_5","title":"Checkpoint: the staples","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ወጥ means…","o":["stew","bread","plate"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወጥ","o":["ወጥ","ዳቦ","ውሃ"],"a":0},
{"t":"mc","q":"Which one means water?","o":["ውሃ","ወጥ","ዳቦ"],"a":0},
{"t":"mc","q":"Review — ስንት means…","o":["how many","what time","which"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውሃ","o":["ውሃ","ዳቦ","እንጀራ"],"a":0}
]},

/* ---------- d2 · Buna — the ceremony ---------- */
{"id":"am_d2","title":"Buna — the ceremony","step":"learn","meta":"Coffee was born here, and it shows","vocab":[["ቡና","buna","coffee"],["ሻይ","shay","tea"],["ወተት","wetet","milk"]],"ex":[
{"t":"note","tag":"The birthplace","q":"ቡና","body":"<p><b>ቡና</b> <i>buna</i> — <i>coffee</i> — was discovered in Ethiopia, and drinking it is a ceremony: beans roasted over coals in front of you, ground, brewed in the black jebena pot, poured in a thin high arc. Being invited to buna is being invited to friendship.</p>","eg":[["ቡና","buna","coffee"]]},
{"t":"li","q":"Which one do you hear?","say":"ቡና","o":["ቡና","ውሃ"],"a":0},
{"t":"mc","q":"Coffee was discovered in…","o":["Ethiopia","Italy","Yemen"],"a":0},
{"t":"note","tag":"Three rounds","q":"Abol, tona, bereka","body":"<p>The ceremony pours THREE rounds — <i>abol</i>, <i>tona</i>, <i>bereka</i> — each brew a little gentler. Leaving before the third, the bereka (blessing) round, is leaving early. Budget an hour and stay for all three.</p>","eg":[["ሻይ","shay","tea"]]},
{"t":"li","q":"Which one do you hear?","say":"ሻይ","o":["ሻይ","ቡና"],"a":0},
{"t":"mc","q":"The three rounds are called…","o":["abol, tona, bereka","first, second, third","roast, grind, pour"],"a":0},
{"t":"note","tag":"The alternatives","q":"ሻይ and ወተት","body":"<p><b>ሻይ</b> <i>shay</i> — <i>tea</i>, often spiced, always sweet. <b>ወተት</b> <i>wetet</i> — <i>milk</i>. In a country of coffee, asking for shay is perfectly respectable — half of Ethiopia runs on it.</p>","eg":[["ወተት","wetet","milk"]]},
{"t":"li","q":"Which one do you hear?","say":"ወተት","o":["ወተት","ሻይ"],"a":0},
{"t":"mc","q":"ወተት means…","o":["milk","tea","sugar"],"a":0}
]},
{"id":"am_d2_2","title":"Hearing the drinks","step":"recognize","meta":"The jebena by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሻይ","o":["ሻይ","ወተት","ቡና"],"a":0},
{"t":"mc","q":"What does ቡና mean?","o":["coffee","tea","milk"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቡና","o":["ቡና","ሻይ","ውሃ"],"a":0},
{"t":"mc","q":"Which one means milk?","o":["ወተት","ሻይ","ቡና"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወተት","o":["ወተት","ቡና","ሻይ"],"a":0},
{"t":"mc","q":"Leaving a buna ceremony before the third round is…","o":["leaving early","expected","polite"],"a":0}
]},
{"id":"am_d2_3","title":"Building the drinks","step":"build","meta":"Order at the counter","vocab":[],"ex":[
{"t":"wb","q":"Build: coffee and tea","a":["ቡና","ሻይ"],"pool":["ቡና","ሻይ","ወተት"]},
{"t":"mc","q":"Pick the word for milk","o":["ወተት","ውሃ","ሻይ"],"a":0},
{"t":"wb","q":"Build: two coffees (hulett buna)","a":["ሁለት","ቡና"],"pool":["ሁለት","ቡና","ሻይ"]},
{"t":"mc","q":"Pick the word for tea","o":["ሻይ","ቡና","ወተት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቡና","o":["ቡና","ወተት","ሻይ"],"a":0}
]},
{"id":"am_d2_4","title":"The drinks in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ቡና","coffee"],["ሻይ","tea"],["ወተት","milk"]]},
{"t":"li","q":"Which one do you hear?","say":"ሻይ","o":["ሻይ","ቡና","ወተት"],"a":0},
{"t":"match","q":"Match the round to its place","pairs":[["abol","first"],["tona","second"],["bereka","third"]]},
{"t":"mc","q":"The black clay coffee pot is called the…","o":["jebena","berbere","injera"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወተት","o":["ወተት","ሻይ","ቡና"],"a":0}
]},
{"id":"am_d2_5","title":"Checkpoint: the drinks","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ቡና means…","o":["coffee","tea","ceremony"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቡና","o":["ቡና","ሻይ","ወተት"],"a":0},
{"t":"mc","q":"Which one means tea?","o":["ሻይ","ወተት","ቡና"],"a":0},
{"t":"mc","q":"Review — which one means water?","o":["ውሃ","ወተት","ወጥ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሻይ","o":["ሻይ","ወተት","ቡና"],"a":0}
]},

/* ---------- d3 · Hungry, thirsty, please ---------- */
{"id":"am_d3","title":"Hungry, thirsty, please","step":"learn","meta":"Rabegn, temagn — and the gendered please","vocab":[["ራበኝ","rabegn","I am hungry"],["ጠማኝ","temagn","I am thirsty"],["እባክህ","ibakih","please (to a man)"],["እባክሽ","ibakish","please (to a woman)"]],"ex":[
{"t":"note","tag":"The body speaks","q":"ራበኝ and ጠማኝ","body":"<p>Hunger happens TO you in Amharic: <b>ራበኝ</b> <i>rabegn</i> — <i>it hungered me</i> — <i>I am hungry</i>. <b>ጠማኝ</b> <i>temagn</i> — <i>I am thirsty</i> — with the tight ጠ you can now hear.</p>","eg":[["ራበኝ","rabegn","I am hungry"],["ጠማኝ","temagn","I am thirsty"]]},
{"t":"li","q":"Hungry or thirsty — which do you hear?","say":"ራበኝ","o":["ራበኝ","ጠማኝ"],"a":0},
{"t":"mc","q":"ራበኝ literally says hunger…","o":["happened to me","belongs to me","left me"],"a":0},
{"t":"note","tag":"Please, by gender","q":"እባክህ and እባክሽ","body":"<p>Please follows the -h/-sh rule you know: <b>እባክህ</b> <i>ibakih</i> to a man, <b>እባክሽ</b> <i>ibakish</i> to a woman. Unlike some languages, Amharic uses its please freely in everyday requests — waiters, taxis, homes.</p>","eg":[["እባክህ","ibakih","please (to a man)"],["እባክሽ","ibakish","please (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"እባክሽ","o":["እባክሽ","እባክህ"],"a":0},
{"t":"mc","q":"እባክህ is said to…","o":["a man","a woman","a group"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጠማኝ","o":["ጠማኝ","ራበኝ"],"a":0},
{"t":"mc","q":"ውሃ እባክሽ said to a waitress means…","o":["water, please","more water","cold water"],"a":0}
]},
{"id":"am_d3_2","title":"Hearing the needs","step":"recognize","meta":"Hunger and please by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እባክህ","o":["እባክህ","እባክሽ","ራበኝ"],"a":0},
{"t":"mc","q":"What does ጠማኝ mean?","o":["I am thirsty","I am hungry","I am full"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ራበኝ","o":["ራበኝ","ጠማኝ","እባክህ"],"a":0},
{"t":"mc","q":"Which one is please, to a woman?","o":["እባክሽ","እባክህ","ይቅርታ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እባክሽ","o":["እባክሽ","እባክህ","ጠማኝ"],"a":0},
{"t":"mc","q":"The tight consonant in ጠማኝ is…","o":["ጠ","ተ","ቀ"],"a":0}
]},
{"id":"am_d3_3","title":"Building the needs","step":"build","meta":"Ask nicely","vocab":[],"ex":[
{"t":"wb","q":"Build: water, please (to a woman)","a":["ውሃ","እባክሽ"],"pool":["ውሃ","እባክሽ","እባክህ"]},
{"t":"mc","q":"Pick: I am hungry","o":["ራበኝ","ጠማኝ","እባክህ"],"a":0},
{"t":"wb","q":"Build: coffee, please (to a man)","a":["ቡና","እባክህ"],"pool":["ቡና","እባክህ","እባክሽ"]},
{"t":"mc","q":"Pick: I am thirsty","o":["ጠማኝ","ራበኝ","ውሃ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ራበኝ","o":["ራበኝ","እባክሽ","ጠማኝ"],"a":0}
]},
{"id":"am_d3_4","title":"The needs in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ራበኝ","I am hungry"],["ጠማኝ","I am thirsty"]]},
{"t":"li","q":"Which one do you hear?","say":"ጠማኝ","o":["ጠማኝ","ራበኝ","እባክህ"],"a":0},
{"t":"match","q":"Match the please to the person","pairs":[["እባክህ","a man"],["እባክሽ","a woman"]]},
{"t":"mc","q":"ራበኝ! Your friend&rsquo;s natural next move is…","o":["ordering food","ordering water","leaving"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እባክህ","o":["እባክህ","ጠማኝ","እባክሽ"],"a":0}
]},
{"id":"am_d3_5","title":"Checkpoint: the needs","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ጠማኝ means…","o":["I am thirsty","I am hungry","I am tired"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እባክሽ","o":["እባክሽ","እባክህ","ራበኝ"],"a":0},
{"t":"mc","q":"Which one means I am hungry?","o":["ራበኝ","ጠማኝ","እባክህ"],"a":0},
{"t":"mc","q":"Review — ቡና means…","o":["coffee","tea","milk"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጠማኝ","o":["ጠማኝ","ራበኝ","እባክሽ"],"a":0}
]},

/* ---------- d4 · I eat, I drink ---------- */
{"id":"am_d4","title":"I eat, I drink","step":"learn","meta":"Ibelalehu — your first full verbs","vocab":[["እበላለሁ","ibelalehu","I eat"],["እጠጣለሁ","itettalehu","I drink"],["ብላ","bila","eat! (to a man)"],["ብዪ","biyi","eat! (to a woman)"]],"ex":[
{"t":"note","tag":"The I-verbs","q":"እበላለሁ and እጠጣለሁ","body":"<p>Meet the Amharic verb, wrapped both ends: <b>እበላለሁ</b> <i>ibelalehu</i> — <i>I eat</i> — and <b>እጠጣለሁ</b> <i>itettalehu</i> — <i>I drink</i>. The i- at the front and the -alehu at the back both mean I: Amharic likes to be sure.</p>","eg":[["እበላለሁ","ibelalehu","I eat"],["እጠጣለሁ","itettalehu","I drink"]]},
{"t":"li","q":"Eat or drink — which do you hear?","say":"እበላለሁ","o":["እበላለሁ","እጠጣለሁ"],"a":0},
{"t":"mc","q":"The I in ibelalehu is marked…","o":["at both ends of the verb","only at the front","only at the back"],"a":0},
{"t":"note","tag":"The host insists","q":"ብላ! ብዪ!","body":"<p>At any Ethiopian table you will hear the command: <b>ብላ</b> <i>bila</i> — <i>eat!</i> — to a man, <b>ብዪ</b> <i>biyi</i> to a woman. It is not bossiness; it is love. The correct response is to eat.</p>","eg":[["ብላ","bila","eat! (to a man)"],["ብዪ","biyi","eat! (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"ብላ","o":["ብላ","ብዪ"],"a":0},
{"t":"mc","q":"ብላ! at the table means…","o":["eat! — an act of love","hurry up","be quiet"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እጠጣለሁ","o":["እጠጣለሁ","እበላለሁ"],"a":0},
{"t":"mc","q":"እንጀራ እበላለሁ means…","o":["I eat injera","eat the injera!","injera is eaten"],"a":0}
]},
{"id":"am_d4_2","title":"Hearing the verbs","step":"recognize","meta":"Eating and drinking by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እጠጣለሁ","o":["እጠጣለሁ","እበላለሁ","ብላ"],"a":0},
{"t":"mc","q":"What does እበላለሁ mean?","o":["I eat","I drink","eat!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ብዪ","o":["ብዪ","ብላ","እበላለሁ"],"a":0},
{"t":"mc","q":"Which one means I drink?","o":["እጠጣለሁ","እበላለሁ","ብላ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ብላ","o":["ብላ","ብዪ","እጠጣለሁ"],"a":0},
{"t":"mc","q":"The -alehu ending marks…","o":["I (present)","you","they"],"a":0}
]},
{"id":"am_d4_3","title":"Building the verbs","step":"build","meta":"Sentence-making begins","vocab":[],"ex":[
{"t":"wb","q":"Build: I eat injera","a":["እንጀራ","እበላለሁ"],"pool":["እንጀራ","እበላለሁ","እጠጣለሁ"]},
{"t":"mc","q":"Pick: eat! (to a woman)","o":["ብዪ","ብላ","እበላለሁ"],"a":0},
{"t":"wb","q":"Build: I drink coffee","a":["ቡና","እጠጣለሁ"],"pool":["ቡና","እጠጣለሁ","እበላለሁ"]},
{"t":"mc","q":"Pick: eat! (to a man)","o":["ብላ","ብዪ","እጠጣለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እበላለሁ","o":["እበላለሁ","ብላ","እጠጣለሁ"],"a":0}
]},
{"id":"am_d4_4","title":"The verbs in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እበላለሁ","I eat"],["እጠጣለሁ","I drink"]]},
{"t":"li","q":"Which one do you hear?","say":"ብላ","o":["ብላ","እበላለሁ","ብዪ"],"a":0},
{"t":"match","q":"Match the command to the person","pairs":[["ብላ","a man"],["ብዪ","a woman"]]},
{"t":"mc","q":"Verb order: Amharic says injera I-eat because the verb goes…","o":["last","first","anywhere"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ብዪ","o":["ብዪ","ብላ","እበላለሁ"],"a":0}
]},
{"id":"am_d4_5","title":"Checkpoint: the verbs","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"እጠጣለሁ means…","o":["I drink","I eat","drink!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እበላለሁ","o":["እበላለሁ","እጠጣለሁ","ብላ"],"a":0},
{"t":"mc","q":"Which one is eat!, to a man?","o":["ብላ","ብዪ","እበላለሁ"],"a":0},
{"t":"mc","q":"Review — ራበኝ means…","o":["I am hungry","I am thirsty","eat!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እጠጣለሁ","o":["እጠጣለሁ","ብዪ","እበላለሁ"],"a":0}
]},

/* ---------- d5 · The wet family ---------- */
{"id":"am_d5","title":"The wet family","step":"learn","meta":"Doro wet — the queen of the table","vocab":[["ዶሮ ወጥ","doro wet","chicken stew"],["ምስር ወጥ","misir wet","lentil stew"],["ሥጋ","siga","meat"],["አትክልት","atkilt","vegetables"]],"ex":[
{"t":"note","tag":"The festival dish","q":"ዶሮ ወጥ","body":"<p><b>ዶሮ ወጥ</b> <i>doro wet</i> — <i>chicken stew</i>, slow-cooked with berbere spice and whole eggs — is Ethiopia&rsquo;s festival dish, the one holidays are measured by. If you are served doro wet, you are honored.</p>","eg":[["ዶሮ ወጥ","doro wet","chicken stew"]]},
{"t":"li","q":"Which one do you hear?","say":"ዶሮ ወጥ","o":["ዶሮ ወጥ","ወጥ"],"a":0},
{"t":"mc","q":"Being served ዶሮ ወጥ means you are…","o":["honored","early","hungry"],"a":0},
{"t":"note","tag":"The everyday hero","q":"ምስር ወጥ","body":"<p><b>ምስር ወጥ</b> <i>misir wet</i> — <i>lentil stew</i>, rich with berbere — is the everyday and fasting-day hero: meatless, cheap, magnificent.</p>","eg":[["ምስር ወጥ","misir wet","lentil stew"]]},
{"t":"li","q":"Which one do you hear?","say":"ምስር ወጥ","o":["ምስር ወጥ","ዶሮ ወጥ"],"a":0},
{"t":"mc","q":"ምስር ወጥ is made of…","o":["lentils","chicken","beef"],"a":0},
{"t":"note","tag":"The building blocks","q":"ሥጋ and አትክልት","body":"<p><b>ሥጋ</b> <i>siga</i> — <i>meat</i> — and <b>አትክልት</b> <i>atkilt</i> — <i>vegetables</i>. Between them they sort every menu in the country, including the fasting menus you will meet soon.</p>","eg":[["ሥጋ","siga","meat"],["አትክልት","atkilt","vegetables"]]},
{"t":"li","q":"Which one do you hear?","say":"ሥጋ","o":["ሥጋ","አትክልት"],"a":0},
{"t":"mc","q":"አትክልት means…","o":["vegetables","meat","spices"],"a":0}
]},
{"id":"am_d5_2","title":"Hearing the wet family","step":"recognize","meta":"Stews by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"አትክልት","o":["አትክልት","ሥጋ","ምስር ወጥ"],"a":0},
{"t":"mc","q":"What does ሥጋ mean?","o":["meat","stew","chicken"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዶሮ ወጥ","o":["ዶሮ ወጥ","ምስር ወጥ","ሥጋ"],"a":0},
{"t":"mc","q":"Which one is the lentil stew?","o":["ምስር ወጥ","ዶሮ ወጥ","አትክልት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ምስር ወጥ","o":["ምስር ወጥ","ዶሮ ወጥ","አትክልት"],"a":0},
{"t":"mc","q":"The red spice that colors most wet is…","o":["berbere","salt","ginger"],"a":0}
]},
{"id":"am_d5_3","title":"Building the wet family","step":"build","meta":"Order like you mean it","vocab":[],"ex":[
{"t":"wb","q":"Build: chicken stew","a":["ዶሮ","ወጥ"],"pool":["ዶሮ","ወጥ","ምስር"]},
{"t":"mc","q":"Pick the word for vegetables","o":["አትክልት","ሥጋ","ወጥ"],"a":0},
{"t":"wb","q":"Build: lentil stew","a":["ምስር","ወጥ"],"pool":["ምስር","ወጥ","ዶሮ"]},
{"t":"mc","q":"Pick the word for meat","o":["ሥጋ","አትክልት","ዶሮ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አትክልት","o":["አትክልት","ምስር ወጥ","ሥጋ"],"a":0}
]},
{"id":"am_d5_4","title":"The wet family in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ዶሮ ወጥ","chicken stew"],["ምስር ወጥ","lentil stew"]]},
{"t":"li","q":"Which one do you hear?","say":"ሥጋ","o":["ሥጋ","አትክልት","ዶሮ ወጥ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሥጋ","meat"],["አትክልት","vegetables"]]},
{"t":"mc","q":"The holiday table is measured by its…","o":["ዶሮ ወጥ","ምስር ወጥ","ዳቦ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዶሮ ወጥ","o":["ዶሮ ወጥ","ሥጋ","ምስር ወጥ"],"a":0}
]},
{"id":"am_d5_5","title":"Checkpoint: the wet family","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ምስር ወጥ means…","o":["lentil stew","chicken stew","meat stew"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ምስር ወጥ","o":["ምስር ወጥ","ዶሮ ወጥ","አትክልት"],"a":0},
{"t":"mc","q":"Which one means meat?","o":["ሥጋ","አትክልት","ወጥ"],"a":0},
{"t":"mc","q":"Review — ብላ means…","o":["eat! (to a man)","drink!","I eat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሥጋ","o":["ሥጋ","ምስር ወጥ","አትክልት"],"a":0}
]},

/* ---------- d6 · Delicious — and enough ---------- */
{"id":"am_d6","title":"Delicious — and enough","step":"learn","meta":"Tafach new, betam — praise the cook","vocab":[["ጣፋጭ ነው","tafach new","it is delicious"],["በጣም","betam","very"],["በጣም ጣፋጭ ነው","betam tafach new","it is very delicious"],["በቃኝ","bekagn","I have had enough"]],"ex":[
{"t":"note","tag":"The compliment","q":"ጣፋጭ ነው","body":"<p><b>ጣፋጭ ነው</b> <i>tafach new</i> — <i>it is delicious</i> — the words every cook is waiting for, with the tight ጣ leading. Say it early and mean it.</p>","eg":[["ጣፋጭ ነው","tafach new","it is delicious"]]},
{"t":"li","q":"Which one do you hear?","say":"ጣፋጭ ነው","o":["ጣፋጭ ነው","ጠማኝ"],"a":0},
{"t":"mc","q":"ጣፋጭ ነው means…","o":["it is delicious","it is hot","it is ready"],"a":0},
{"t":"note","tag":"Turning it up","q":"በጣም","body":"<p><b>በጣም</b> <i>betam</i> — <i>very</i> — Amharic&rsquo;s favorite amplifier: <b>በጣም ጣፋጭ ነው</b> <i>betam tafach new</i> — <i>VERY delicious</i>. Betam works on everything, and Ethiopians use it generously.</p>","eg":[["በጣም","betam","very"],["በጣም ጣፋጭ ነው","betam tafach new","it is very delicious"]]},
{"t":"li","q":"Plain or amplified — which do you hear?","say":"በጣም ጣፋጭ ነው","o":["በጣም ጣፋጭ ነው","ጣፋጭ ነው"],"a":0},
{"t":"mc","q":"በጣም means…","o":["very","quite","almost"],"a":0},
{"t":"note","tag":"The graceful stop","q":"በቃኝ","body":"<p>Hosts refill relentlessly — the graceful brake is <b>በቃኝ</b> <i>bekagn</i> — <i>it sufficed me, I have had enough</i> — said with a hand over the plate and a smile. Expect to say it three times before it works.</p>","eg":[["በቃኝ","bekagn","I have had enough"]]},
{"t":"li","q":"Which one do you hear?","say":"በቃኝ","o":["በቃኝ","በጣም"],"a":0},
{"t":"mc","q":"በቃኝ politely says…","o":["I have had enough","more please","not yet"],"a":0}
]},
{"id":"am_d6_2","title":"Hearing the praise","step":"recognize","meta":"Compliments by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"በጣም","o":["በጣም","በቃኝ","ጣፋጭ ነው"],"a":0},
{"t":"mc","q":"What does በቃኝ mean?","o":["I have had enough","it is delicious","more food"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጣፋጭ ነው","o":["ጣፋጭ ነው","በጣም ጣፋጭ ነው","በቃኝ"],"a":0},
{"t":"mc","q":"Which one means very delicious?","o":["በጣም ጣፋጭ ነው","ጣፋጭ ነው","በቃኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በቃኝ","o":["በቃኝ","ጣፋጭ ነው","በጣም"],"a":0},
{"t":"mc","q":"Expect to say በቃኝ how many times before it works?","o":["three","one","never"],"a":0}
]},
{"id":"am_d6_3","title":"Building the praise","step":"build","meta":"Compliment, amplify, stop","vocab":[],"ex":[
{"t":"wb","q":"Build: it is delicious","a":["ጣፋጭ","ነው"],"pool":["ጣፋጭ","ነው","በጣም"]},
{"t":"mc","q":"Pick the word for very","o":["በጣም","በቃኝ","ነው"],"a":0},
{"t":"wb","q":"Build: it is VERY delicious","a":["በጣም","ጣፋጭ","ነው"],"pool":["በጣም","ጣፋጭ","ነው","በቃኝ"]},
{"t":"mc","q":"Pick the graceful stop","o":["በቃኝ","በጣም","ብላ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በጣም ጣፋጭ ነው","o":["በጣም ጣፋጭ ነው","ጣፋጭ ነው","በቃኝ"],"a":0}
]},
{"id":"am_d6_4","title":"The praise in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ጣፋጭ ነው","it is delicious"],["በጣም","very"],["በቃኝ","enough for me"]]},
{"t":"li","q":"Which one do you hear?","say":"ጣፋጭ ነው","o":["ጣፋጭ ነው","በቃኝ","በጣም"],"a":0},
{"t":"match","q":"Match the moment to the phrase","pairs":[["first bite","በጣም ጣፋጭ ነው"],["third refill","በቃኝ"]]},
{"t":"mc","q":"The hand-over-the-plate gesture goes with…","o":["በቃኝ","ብላ","ራበኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በጣም","o":["በጣም","ጣፋጭ ነው","በቃኝ"],"a":0}
]},
{"id":"am_d6_5","title":"Checkpoint: the praise","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"በጣም ጣፋጭ ነው means…","o":["it is very delicious","it is a little sweet","I am very full"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በቃኝ","o":["በቃኝ","በጣም","ጣፋጭ ነው"],"a":0},
{"t":"mc","q":"Which one means very?","o":["በጣም","በቃኝ","ነው"],"a":0},
{"t":"mc","q":"Review — ዶሮ ወጥ is…","o":["the festival chicken stew","the lentil stew","the bread"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጣፋጭ ነው","o":["ጣፋጭ ነው","በጣም ጣፋጭ ነው","በቃኝ"],"a":0}
]},

/* ---------- d7 · At the table ---------- */
{"id":"am_d7","title":"At the table","step":"learn","meta":"Inibla, gursha — eating as friendship","vocab":[["እንብላ","inibla","let us eat"],["ጉርሻ","gursha","the honor bite (fed by hand)"],["ጾም","tsom","fasting"]],"ex":[
{"t":"note","tag":"The invitation","q":"እንብላ","body":"<p><b>እንብላ</b> <i>inibla</i> — <i>let us eat!</i> Nobody eats alone if an Ethiopian can help it: anyone nearby when food appears is waved in with this word. Accepting, even a little, honors the inviter.</p>","eg":[["እንብላ","inibla","let us eat"]]},
{"t":"li","q":"Which one do you hear?","say":"እንብላ","o":["እንብላ","ብላ"],"a":0},
{"t":"mc","q":"እንብላ means…","o":["let us eat","eat alone","the food is ready"],"a":0},
{"t":"note","tag":"The honor bite","q":"ጉርሻ","body":"<p><b>ጉርሻ</b> <i>gursha</i>: someone rolls the best morsel in injera and feeds it to you BY HAND. It is a gesture of pure affection — the bigger the gursha, the deeper the friendship. Open up and accept; refusing is refusing the love.</p>","eg":[["ጉርሻ","gursha","the honor bite (fed by hand)"]]},
{"t":"li","q":"Which one do you hear?","say":"ጉርሻ","o":["ጉርሻ","እንብላ"],"a":0},
{"t":"mc","q":"A gursha is…","o":["being fed by hand, as affection","a spice","a second helping"],"a":0},
{"t":"note","tag":"The rhythm of the menu","q":"ጾም","body":"<p><b>ጾም</b> <i>tsom</i> — <i>fasting</i>. On Wednesdays, Fridays and in fasting seasons, much of Ethiopia eats no animal products — so menus run in two lanes, and the vegan lane (yetsom) is everywhere, ancient and delicious. Worth knowing whichever lane you order from.</p>","eg":[["ጾም","tsom","fasting"]]},
{"t":"li","q":"Which one do you hear?","say":"ጾም","o":["ጾም","ጉርሻ"],"a":0},
{"t":"mc","q":"The traditional fasting days are…","o":["Wednesday and Friday","Monday and Tuesday","Saturday and Sunday"],"a":0}
]},
{"id":"am_d7_2","title":"Hearing the table","step":"recognize","meta":"Table culture by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ጉርሻ","o":["ጉርሻ","ጾም","እንብላ"],"a":0},
{"t":"mc","q":"What does ጾም mean?","o":["fasting","feast","supper"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንብላ","o":["እንብላ","ጉርሻ","ብላ"],"a":0},
{"t":"mc","q":"Which one is the honor bite?","o":["ጉርሻ","ጾም","እንብላ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጾም","o":["ጾም","እንብላ","ጉርሻ"],"a":0},
{"t":"mc","q":"Refusing a gursha reads as…","o":["refusing the affection","good manners","a diet"],"a":0}
]},
{"id":"am_d7_3","title":"Building the table","step":"build","meta":"The social meal","vocab":[],"ex":[
{"t":"wb","q":"Build: let us eat — it is delicious","a":["እንብላ","ጣፋጭ","ነው"],"pool":["እንብላ","ጣፋጭ","ነው","ጾም"]},
{"t":"mc","q":"Pick the honor bite","o":["ጉርሻ","ጾም","ወጥ"],"a":0},
{"t":"wb","q":"Build the word: fasting","a":["ጾ","ም"],"pool":["ጾ","ም","ጉ"]},
{"t":"mc","q":"Pick: let us eat","o":["እንብላ","ብላ","እበላለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንብላ","o":["እንብላ","ጾም","ጉርሻ"],"a":0}
]},
{"id":"am_d7_4","title":"The table in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እንብላ","let us eat"],["ጉርሻ","the honor bite"],["ጾም","fasting"]]},
{"t":"li","q":"Which one do you hear?","say":"ጾም","o":["ጾም","ጉርሻ","እንብላ"],"a":0},
{"t":"match","q":"Match the gesture to its meaning","pairs":[["a rolled morsel offered by hand","ጉርሻ"],["a wave toward the table","እንብላ"]]},
{"t":"mc","q":"The bigger the gursha…","o":["the deeper the friendship","the better the cook","the longer the meal"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጉርሻ","o":["ጉርሻ","እንብላ","ጾም"],"a":0}
]},
{"id":"am_d7_5","title":"Checkpoint: Zone 5 complete","step":"checkpoint","meta":"Food and drink — show it all","vocab":[],"ex":[
{"t":"mc","q":"ጉርሻ means…","o":["the honor bite","the last round","the recipe"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንብላ","o":["እንብላ","ብላ","ጉርሻ"],"a":0},
{"t":"mc","q":"Review — the coffee ceremony pours…","o":["three rounds","two rounds","one round"],"a":0},
{"t":"mc","q":"Review — I am hungry is…","o":["ራበኝ","ጠማኝ","በቃኝ"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"በጣም ጣፋጭ ነው","o":["በጣም ጣፋጭ ነው","ጣፋጭ ነው","እባክሽ"],"a":0},
{"t":"mc","q":"Review — እበላለሁ means…","o":["I eat","I drink","eat!"],"a":0},
{"t":"mc","q":"Review — the graceful I-am-full is…","o":["በቃኝ","እንብላ","በጣም"],"a":0}
]},

/* ---------- h1 · The house ---------- */
{"id":"am_h1","title":"The house","step":"learn","meta":"Bet — a word that builds half the language","vocab":[["ቤት","bet","house · home"],["በር","ber","door"],["መስኮት","meskot","window"],["ግቢ","gibi","compound · yard"]],"ex":[
{"t":"note","tag":"The keystone word","q":"ቤት","body":"<p><b>ቤት</b> <i>bet</i> — <i>house, home</i> — is about to become the busiest building block you own: Amharic names whole places by gluing words onto bet, as you will see all zone. First, the house itself.</p>","eg":[["ቤት","bet","house · home"]]},
{"t":"li","q":"Which one do you hear?","say":"ቤት","o":["ቤት","ወጥ"],"a":0},
{"t":"mc","q":"ቤት means…","o":["house and home","room","roof"],"a":0},
{"t":"note","tag":"In and out","q":"በር and መስኮት","body":"<p><b>በር</b> <i>ber</i> — <i>door</i> — and <b>መስኮት</b> <i>meskot</i> — <i>window</i>. The knock at the ber is where your ማን ነው? finally gets used.</p>","eg":[["በር","ber","door"],["መስኮት","meskot","window"]]},
{"t":"li","q":"Which one do you hear?","say":"መስኮት","o":["መስኮት","በር"],"a":0},
{"t":"mc","q":"በር means…","o":["door","window","wall"],"a":0},
{"t":"note","tag":"The space around","q":"ግቢ","body":"<p><b>ግቢ</b> <i>gibi</i> — the <i>compound</i>: the walled yard most Ethiopian homes live inside, where coffee is roasted, clothes dry and neighbors visit. Much of home life happens in the gibi, not the house.</p>","eg":[["ግቢ","gibi","compound · yard"]]},
{"t":"li","q":"Which one do you hear?","say":"ግቢ","o":["ግቢ","ቤት"],"a":0},
{"t":"mc","q":"The ግቢ is…","o":["the walled yard around the home","the roof","the front room"],"a":0}
]},
{"id":"am_h1_2","title":"Hearing the house","step":"recognize","meta":"The building by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"በር","o":["በር","ቤት","ግቢ"],"a":0},
{"t":"mc","q":"What does መስኮት mean?","o":["window","door","yard"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤት","o":["ቤት","በር","መስኮት"],"a":0},
{"t":"mc","q":"Which one means compound?","o":["ግቢ","ቤት","በር"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ግቢ","o":["ግቢ","መስኮት","ቤት"],"a":0},
{"t":"mc","q":"Coffee roasting and drying laundry happen in…","o":["the gibi","the bedroom","the street"],"a":0}
]},
{"id":"am_h1_3","title":"Building the house","step":"build","meta":"Walls, doors, windows","vocab":[],"ex":[
{"t":"wb","q":"Build: house and door","a":["ቤት","በር"],"pool":["ቤት","በር","ግቢ"]},
{"t":"mc","q":"Pick the word for window","o":["መስኮት","በር","ግቢ"],"a":0},
{"t":"wb","q":"Build: window and compound","a":["መስኮት","ግቢ"],"pool":["መስኮት","ግቢ","ቤት"]},
{"t":"mc","q":"Pick the word for house","o":["ቤት","ግቢ","በር"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መስኮት","o":["መስኮት","ግቢ","በር"],"a":0}
]},
{"id":"am_h1_4","title":"The house in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ቤት","house"],["በር","door"],["መስኮት","window"]]},
{"t":"li","q":"Which one do you hear?","say":"ግቢ","o":["ግቢ","ቤት","በር"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ግቢ","compound"],["ማን ነው?","who is it?"]]},
{"t":"mc","q":"A knock at the በር gets the question…","o":["ማን ነው?","ስንት ነው?","የት ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በር","o":["በር","መስኮት","ግቢ"],"a":0}
]},
{"id":"am_h1_5","title":"Checkpoint: the house","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ግቢ means…","o":["compound · yard","garden flowers","gate"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤት","o":["ቤት","ግቢ","መስኮት"],"a":0},
{"t":"mc","q":"Which one means door?","o":["በር","መስኮት","ቤት"],"a":0},
{"t":"mc","q":"Review — እንብላ means…","o":["let us eat","eat!","I eat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በር","o":["በር","ቤት","ግቢ"],"a":0}
]},

/* ---------- h2 · The rooms ---------- */
{"id":"am_h2","title":"The rooms","step":"learn","meta":"Bet builds every room in the house","vocab":[["ክፍል","kifil","room"],["ማድቤት","madbet","kitchen"],["መኝታ ቤት","megnita bet","bedroom"],["ሽንት ቤት","shint bet","toilet"]],"ex":[
{"t":"note","tag":"The generic room","q":"ክፍል","body":"<p><b>ክፍል</b> <i>kifil</i> — <i>room</i> (also a classroom, also a section of anything). The all-purpose divider word.</p>","eg":[["ክፍል","kifil","room"]]},
{"t":"li","q":"Which one do you hear?","say":"ክፍል","o":["ክፍል","ቤት"],"a":0},
{"t":"mc","q":"ክፍል means…","o":["room","kitchen","hall"],"a":0},
{"t":"note","tag":"Bet keeps its promise","q":"ማድቤት and መኝታ ቤት","body":"<p>Watch bet build rooms: <b>ማድቤት</b> <i>madbet</i> — <i>kitchen</i> — and <b>መኝታ ቤት</b> <i>megnita bet</i> — literally <i>sleeping house</i> — the bedroom. Amharic names places by what happens in them plus bet.</p>","eg":[["ማድቤት","madbet","kitchen"],["መኝታ ቤት","megnita bet","bedroom"]]},
{"t":"li","q":"Which one do you hear?","say":"ማድቤት","o":["ማድቤት","መኝታ ቤት"],"a":0},
{"t":"mc","q":"መኝታ ቤት literally means…","o":["sleeping house","quiet room","night place"],"a":0},
{"t":"note","tag":"The essential one","q":"ሽንት ቤት","body":"<p><b>ሽንት ቤት</b> <i>shint bet</i> — <i>the toilet</i> — the single most useful compound in any traveler&rsquo;s Amharic. Ask for it with the yet-question coming next topic and you are equipped for anything.</p>","eg":[["ሽንት ቤት","shint bet","toilet"]]},
{"t":"li","q":"Which one do you hear?","say":"ሽንት ቤት","o":["ሽንት ቤት","ማድቤት"],"a":0},
{"t":"mc","q":"ሽንት ቤት means…","o":["toilet","shower","kitchen"],"a":0}
]},
{"id":"am_h2_2","title":"Hearing the rooms","step":"recognize","meta":"Doors off the hallway","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"መኝታ ቤት","o":["መኝታ ቤት","ማድቤት","ሽንት ቤት"],"a":0},
{"t":"mc","q":"What does ማድቤት mean?","o":["kitchen","bedroom","toilet"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ክፍል","o":["ክፍል","ቤት","ማድቤት"],"a":0},
{"t":"mc","q":"Which one is the toilet?","o":["ሽንት ቤት","መኝታ ቤት","ማድቤት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሽንት ቤት","o":["ሽንት ቤት","መኝታ ቤት","ክፍል"],"a":0},
{"t":"mc","q":"Amharic names rooms by…","o":["what happens there + bet","their size","their color"],"a":0}
]},
{"id":"am_h2_3","title":"Building the rooms","step":"build","meta":"Compound by compound","vocab":[],"ex":[
{"t":"wb","q":"Build: bedroom (sleeping + house)","a":["መኝታ","ቤት"],"pool":["መኝታ","ቤት","ሽንት"]},
{"t":"mc","q":"Pick the kitchen","o":["ማድቤት","መኝታ ቤት","ክፍል"],"a":0},
{"t":"wb","q":"Build: toilet (shint + bet)","a":["ሽንት","ቤት"],"pool":["ሽንት","ቤት","መኝታ"]},
{"t":"mc","q":"Pick the word for room","o":["ክፍል","ቤት","ግቢ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማድቤት","o":["ማድቤት","ሽንት ቤት","ክፍል"],"a":0}
]},
{"id":"am_h2_4","title":"The rooms in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ክፍል","room"],["ማድቤት","kitchen"],["ሽንት ቤት","toilet"]]},
{"t":"li","q":"Which one do you hear?","say":"መኝታ ቤት","o":["መኝታ ቤት","ሽንት ቤት","ማድቤት"],"a":0},
{"t":"match","q":"Match the room to what happens there","pairs":[["ማድቤት","cooking"],["መኝታ ቤት","sleeping"]]},
{"t":"mc","q":"The most useful compound for any traveler…","o":["ሽንት ቤት","መኝታ ቤት","ማድቤት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ክፍል","o":["ክፍል","ማድቤት","መኝታ ቤት"],"a":0}
]},
{"id":"am_h2_5","title":"Checkpoint: the rooms","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ማድቤት means…","o":["kitchen","bedroom","bathroom"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሽንት ቤት","o":["ሽንት ቤት","ማድቤት","መኝታ ቤት"],"a":0},
{"t":"mc","q":"Which one means room?","o":["ክፍል","ቤት","ግቢ"],"a":0},
{"t":"mc","q":"Review — ግቢ means…","o":["compound · yard","kitchen","hall"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መኝታ ቤት","o":["መኝታ ቤት","ክፍል","ሽንት ቤት"],"a":0}
]},

/* ---------- h3 · The furniture ---------- */
{"id":"am_h3","title":"The furniture","step":"learn","meta":"Chair, table, bed — and the light","vocab":[["ወንበር","wenber","chair"],["ጠረጴዛ","terepeza","table"],["አልጋ","alga","bed"],["መብራት","mebrat","light · electricity"]],"ex":[
{"t":"note","tag":"Sitting and serving","q":"ወንበር and ጠረጴዛ","body":"<p><b>ወንበር</b> <i>wenber</i> — <i>chair</i>. <b>ጠረጴዛ</b> <i>terepeza</i> — <i>table</i> — with two tight consonants, a mouthful worth practicing.</p>","eg":[["ወንበር","wenber","chair"],["ጠረጴዛ","terepeza","table"]]},
{"t":"li","q":"Which one do you hear?","say":"ወንበር","o":["ወንበር","ጠረጴዛ"],"a":0},
{"t":"mc","q":"ጠረጴዛ means…","o":["table","chair","bench"],"a":0},
{"t":"note","tag":"Rest","q":"አልጋ","body":"<p><b>አልጋ</b> <i>alga</i> — <i>bed</i>. What the መኝታ ቤት is for.</p>","eg":[["አልጋ","alga","bed"]]},
{"t":"li","q":"Which one do you hear?","say":"አልጋ","o":["አልጋ","ወንበር"],"a":0},
{"t":"mc","q":"አልጋ belongs in…","o":["መኝታ ቤት","ማድቤት","ግቢ"],"a":0},
{"t":"note","tag":"On and off","q":"መብራት","body":"<p><b>መብራት</b> <i>mebrat</i> — <i>light</i>, and by extension <i>electricity</i>. When the power blinks — mebrat tefa, the light vanished — the whole neighborhood says it together.</p>","eg":[["መብራት","mebrat","light · electricity"]]},
{"t":"li","q":"Which one do you hear?","say":"መብራት","o":["መብራት","አልጋ"],"a":0},
{"t":"mc","q":"መብራት means…","o":["light · electricity","candle","stove"],"a":0}
]},
{"id":"am_h3_2","title":"Hearing the furniture","step":"recognize","meta":"The room by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ጠረጴዛ","o":["ጠረጴዛ","ወንበር","አልጋ"],"a":0},
{"t":"mc","q":"What does ወንበር mean?","o":["chair","table","bed"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መብራት","o":["መብራት","ጠረጴዛ","አልጋ"],"a":0},
{"t":"mc","q":"Which one means bed?","o":["አልጋ","ወንበር","መብራት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አልጋ","o":["አልጋ","መብራት","ወንበር"],"a":0},
{"t":"mc","q":"Mebrat tefa means the light…","o":["vanished","turned on","is bright"],"a":0}
]},
{"id":"am_h3_3","title":"Building the furniture","step":"build","meta":"Furnish the kifil","vocab":[],"ex":[
{"t":"wb","q":"Build: chair and table","a":["ወንበር","ጠረጴዛ"],"pool":["ወንበር","ጠረጴዛ","አልጋ"]},
{"t":"mc","q":"Pick the word for light","o":["መብራት","አልጋ","ወንበር"],"a":0},
{"t":"wb","q":"Build: bed and light","a":["አልጋ","መብራት"],"pool":["አልጋ","መብራት","ጠረጴዛ"]},
{"t":"mc","q":"Pick the word for table","o":["ጠረጴዛ","ወንበር","መብራት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወንበር","o":["ወንበር","አልጋ","ጠረጴዛ"],"a":0}
]},
{"id":"am_h3_4","title":"The furniture in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ወንበር","chair"],["ጠረጴዛ","table"],["አልጋ","bed"]]},
{"t":"li","q":"Which one do you hear?","say":"አልጋ","o":["አልጋ","ወንበር","መብራት"],"a":0},
{"t":"match","q":"Match the thing to its room","pairs":[["አልጋ","መኝታ ቤት"],["ወንበር","ክፍል"]]},
{"t":"mc","q":"Two tight consonants live inside…","o":["ጠረጴዛ","ወንበር","አልጋ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጠረጴዛ","o":["ጠረጴዛ","መብራት","ወንበር"],"a":0}
]},
{"id":"am_h3_5","title":"Checkpoint: the furniture","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ወንበር means…","o":["chair","table","cupboard"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መብራት","o":["መብራት","አልጋ","ጠረጴዛ"],"a":0},
{"t":"mc","q":"Which one means table?","o":["ጠረጴዛ","አልጋ","ወንበር"],"a":0},
{"t":"mc","q":"Review — ሽንት ቤት means…","o":["toilet","bathroom sink","kitchen"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አልጋ","o":["አልጋ","ጠረጴዛ","መብራት"],"a":0}
]},

/* ---------- h4 · Where is it? ---------- */
{"id":"am_h4","title":"Where is it?","step":"learn","meta":"Yet new — and the mighty alle/yellem pair","vocab":[["የት ነው?","yet new?","where is it?"],["እዚህ","izih","here"],["እዚያ","iziya","there"],["አለ","alle","there is · it is present"],["የለም","yellem","there is not"]],"ex":[
{"t":"note","tag":"The question","q":"የት ነው?","body":"<p><b>የት ነው?</b> <i>yet new?</i> — <i>where is it?</i> You met yet inside ከየት (from-where); alone it asks position. ሽንት ቤት የት ነው? — where is the toilet? — may be the most valuable sentence in this course.</p>","eg":[["የት ነው?","yet new?","where is it?"]]},
{"t":"li","q":"Which one do you hear?","say":"የት ነው?","o":["የት ነው?","ማን ነው?"],"a":0},
{"t":"mc","q":"የት ነው? asks…","o":["where is it?","what is it?","whose is it?"],"a":0},
{"t":"note","tag":"Here and there","q":"እዚህ and እዚያ","body":"<p>The answers: <b>እዚህ</b> <i>izih</i> — <i>here</i> — and <b>እዚያ</b> <i>iziya</i> — <i>there</i>. One vowel apart; listen for the ya.</p>","eg":[["እዚህ","izih","here"],["እዚያ","iziya","there"]]},
{"t":"li","q":"Here or there — which do you hear?","say":"እዚያ","o":["እዚያ","እዚህ"],"a":0},
{"t":"mc","q":"እዚህ means…","o":["here","there","inside"],"a":0},
{"t":"note","tag":"The existence pair","q":"አለ and የለም","body":"<p>Two tiny giants: <b>አለ</b> <i>alle</i> — <i>there is, it exists, it is present</i> — and <b>የለም</b> <i>yellem</i> — <i>there is not</i>. Shops, menus, bus stops: half of Ethiopian commerce is one word answering the other. ውሃ አለ? — የለም.</p>","eg":[["አለ","alle","there is · it is present"],["የለም","yellem","there is not"]]},
{"t":"li","q":"Is or is not — which do you hear?","say":"የለም","o":["የለም","አለ"],"a":0},
{"t":"mc","q":"ውሃ አለ? asks…","o":["is there water?","where is water?","whose water is this?"],"a":0}
]},
{"id":"am_h4_2","title":"Hearing where","step":"recognize","meta":"Position by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እዚህ","o":["እዚህ","እዚያ","የት ነው?"],"a":0},
{"t":"mc","q":"What does የለም mean?","o":["there is not","there is","maybe"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አለ","o":["አለ","የለም","እዚህ"],"a":0},
{"t":"mc","q":"Which one means there?","o":["እዚያ","እዚህ","የት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"የት ነው?","o":["የት ነው?","እዚያ","አለ"],"a":0},
{"t":"mc","q":"ሻይ አለ? — the sad answer is…","o":["የለም","አለ","እዚህ"],"a":0}
]},
{"id":"am_h4_3","title":"Building where","step":"build","meta":"Ask, point, confirm","vocab":[],"ex":[
{"t":"wb","q":"Build: where is the toilet?","a":["ሽንት","ቤት","የት","ነው?"],"pool":["ሽንት","ቤት","የት","ነው?","እዚህ"]},
{"t":"mc","q":"Pick the word for here","o":["እዚህ","እዚያ","አለ"],"a":0},
{"t":"wb","q":"Build: is there coffee? (buna alle?)","a":["ቡና","አለ?"],"pool":["ቡና","አለ?","የለም"]},
{"t":"mc","q":"Pick: there is not","o":["የለም","አለ","እዚያ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እዚያ","o":["እዚያ","እዚህ","የለም"],"a":0}
]},
{"id":"am_h4_4","title":"Where in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["የት ነው?","where is it?"],["እዚህ","here"],["እዚያ","there"]]},
{"t":"li","q":"Which one do you hear?","say":"አለ","o":["አለ","እዚያ","የለም"],"a":0},
{"t":"match","q":"Match the pair","pairs":[["አለ","there is"],["የለም","there is not"]]},
{"t":"mc","q":"ሽንት ቤት የት ነው? — እዚያ. The toilet is…","o":["over there","right here","not present"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"የለም","o":["የለም","አለ","እዚህ"],"a":0}
]},
{"id":"am_h4_5","title":"Checkpoint: where","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"የት ነው? means…","o":["where is it?","who is it?","how is it?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እዚህ","o":["እዚህ","እዚያ","አለ"],"a":0},
{"t":"mc","q":"Which one means there is?","o":["አለ","የለም","እዚህ"],"a":0},
{"t":"mc","q":"Review — መብራት means…","o":["light · electricity","water","fire"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አለ","o":["አለ","የለም","እዚያ"],"a":0}
]},

/* ---------- h5 · Cups and the jebena ---------- */
{"id":"am_h5","title":"Cups and the jebena","step":"learn","meta":"The kitchen tools — one of them famous","vocab":[["ኩባያ","kubaya","cup"],["ሳህን","sahin","plate"],["ማንኪያ","mankiya","spoon"],["ጀበና","jebena","coffee pot"]],"ex":[
{"t":"note","tag":"Cup and plate","q":"ኩባያ and ሳህን","body":"<p><b>ኩባያ</b> <i>kubaya</i> — <i>cup</i> — and <b>ሳህን</b> <i>sahin</i> — <i>plate</i> (though injera nights need none).</p>","eg":[["ኩባያ","kubaya","cup"],["ሳህን","sahin","plate"]]},
{"t":"li","q":"Which one do you hear?","say":"ኩባያ","o":["ኩባያ","ሳህን"],"a":0},
{"t":"mc","q":"ሳህን means…","o":["plate","cup","bowl"],"a":0},
{"t":"note","tag":"The spoon","q":"ማንኪያ","body":"<p><b>ማንኪያ</b> <i>mankiya</i> — <i>spoon</i> — for the breakfasts and soups that injera does not cover.</p>","eg":[["ማንኪያ","mankiya","spoon"]]},
{"t":"li","q":"Which one do you hear?","say":"ማንኪያ","o":["ማንኪያ","ኩባያ"],"a":0},
{"t":"mc","q":"ማንኪያ means…","o":["spoon","fork","knife"],"a":0},
{"t":"note","tag":"The famous one","q":"ጀበና","body":"<p><b>ጀበና</b> <i>jebena</i> — the round-bellied clay <i>coffee pot</i> from the buna ceremony, black with years of fire. Every home owns one; many are heirlooms. The shape alone means welcome.</p>","eg":[["ጀበና","jebena","coffee pot"]]},
{"t":"li","q":"Which one do you hear?","say":"ጀበና","o":["ጀበና","ማንኪያ"],"a":0},
{"t":"mc","q":"The ጀበና is used for…","o":["the coffee ceremony","serving stew","carrying water"],"a":0}
]},
{"id":"am_h5_2","title":"Hearing the tools","step":"recognize","meta":"Kitchen kit by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሳህን","o":["ሳህን","ኩባያ","ጀበና"],"a":0},
{"t":"mc","q":"What does ኩባያ mean?","o":["cup","plate","pot"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጀበና","o":["ጀበና","ሳህን","ማንኪያ"],"a":0},
{"t":"mc","q":"Which one means spoon?","o":["ማንኪያ","ኩባያ","ሳህን"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማንኪያ","o":["ማንኪያ","ጀበና","ኩባያ"],"a":0},
{"t":"mc","q":"Many jebenas are…","o":["family heirlooms","disposable","imported"],"a":0}
]},
{"id":"am_h5_3","title":"Building the tools","step":"build","meta":"Lay the tray","vocab":[],"ex":[
{"t":"wb","q":"Build: cup and plate","a":["ኩባያ","ሳህን"],"pool":["ኩባያ","ሳህን","ማንኪያ"]},
{"t":"mc","q":"Pick the coffee pot","o":["ጀበና","ኩባያ","ሳህን"],"a":0},
{"t":"wb","q":"Build: spoon and coffee pot","a":["ማንኪያ","ጀበና"],"pool":["ማንኪያ","ጀበና","ኩባያ"]},
{"t":"mc","q":"Pick the word for plate","o":["ሳህን","ማንኪያ","ጀበና"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ኩባያ","o":["ኩባያ","ማንኪያ","ሳህን"],"a":0}
]},
{"id":"am_h5_4","title":"The tools in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ኩባያ","cup"],["ሳህን","plate"],["ማንኪያ","spoon"]]},
{"t":"li","q":"Which one do you hear?","say":"ጀበና","o":["ጀበና","ኩባያ","ሳህን"],"a":0},
{"t":"match","q":"Match the tool to its drink","pairs":[["ጀበና","ቡና"],["ኩባያ","ሻይ"]]},
{"t":"mc","q":"On injera nights, the ሳህን is…","o":["not needed — injera is the plate","doubled","tiny"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሳህን","o":["ሳህን","ጀበና","ማንኪያ"],"a":0}
]},
{"id":"am_h5_5","title":"Checkpoint: the tools","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ጀበና means…","o":["coffee pot","tea kettle","water jar"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ማንኪያ","o":["ማንኪያ","ኩባያ","ጀበና"],"a":0},
{"t":"mc","q":"Which one means cup?","o":["ኩባያ","ሳህን","ማንኪያ"],"a":0},
{"t":"mc","q":"Review — የለም means…","o":["there is not","there is","not yet"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጀበና","o":["ጀበና","ሳህን","ኩባያ"],"a":0}
]},

/* ---------- h6 · What you do at home ---------- */
{"id":"am_h6","title":"What you do at home","step":"learn","meta":"Cook, wash, sleep, rise — the home verbs","vocab":[["አበስላለሁ","abeslalehu","I cook"],["አጥባለሁ","atbalehu","I wash"],["እተኛለሁ","itegnalehu","I sleep"],["እነሳለሁ","inesalehu","I get up"]],"ex":[
{"t":"note","tag":"The kitchen verbs","q":"አበስላለሁ and አጥባለሁ","body":"<p>The -alehu ending you met on ibelalehu keeps working: <b>አበስላለሁ</b> <i>abeslalehu</i> — <i>I cook</i> — and <b>አጥባለሁ</b> <i>atbalehu</i> — <i>I wash</i> (clothes, dishes, anything).</p>","eg":[["አበስላለሁ","abeslalehu","I cook"],["አጥባለሁ","atbalehu","I wash"]]},
{"t":"li","q":"Cook or wash — which do you hear?","say":"አበስላለሁ","o":["አበስላለሁ","አጥባለሁ"],"a":0},
{"t":"mc","q":"አጥባለሁ means…","o":["I wash","I cook","I clean the yard"],"a":0},
{"t":"note","tag":"Night and morning","q":"እተኛለሁ and እነሳለሁ","body":"<p><b>እተኛለሁ</b> <i>itegnalehu</i> — <i>I sleep</i> — and <b>እነሳለሁ</b> <i>inesalehu</i> — <i>I get up</i>. Remember the Ethiopian clock: getting up at one o&rsquo;clock is perfectly respectable — that is 7 AM.</p>","eg":[["እተኛለሁ","itegnalehu","I sleep"],["እነሳለሁ","inesalehu","I get up"]]},
{"t":"li","q":"Sleep or rise — which do you hear?","say":"እነሳለሁ","o":["እነሳለሁ","እተኛለሁ"],"a":0},
{"t":"mc","q":"እተኛለሁ means…","o":["I sleep","I get up","I rest"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አጥባለሁ","o":["አጥባለሁ","እነሳለሁ"],"a":0},
{"t":"mc","q":"All four verbs share the ending…","o":["-alehu, the I marker","-och, the plural","-new, the is"],"a":0}
]},
{"id":"am_h6_2","title":"Hearing the routine","step":"recognize","meta":"The day at home by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እተኛለሁ","o":["እተኛለሁ","እነሳለሁ","አበስላለሁ"],"a":0},
{"t":"mc","q":"What does አበስላለሁ mean?","o":["I cook","I wash","I eat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አጥባለሁ","o":["አጥባለሁ","አበስላለሁ","እተኛለሁ"],"a":0},
{"t":"mc","q":"Which one means I get up?","o":["እነሳለሁ","እተኛለሁ","አጥባለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እነሳለሁ","o":["እነሳለሁ","እተኛለሁ","አጥባለሁ"],"a":0},
{"t":"mc","q":"The routine in order: እነሳለሁ, አበስላለሁ, then at night…","o":["እተኛለሁ","አጥባለሁ","እበላለሁ"],"a":0}
]},
{"id":"am_h6_3","title":"Building the routine","step":"build","meta":"Your day in verbs","vocab":[],"ex":[
{"t":"wb","q":"Build: I cook wet (wet abeslalehu)","a":["ወጥ","አበስላለሁ"],"pool":["ወጥ","አበስላለሁ","አጥባለሁ"]},
{"t":"mc","q":"Pick: I sleep","o":["እተኛለሁ","እነሳለሁ","አጥባለሁ"],"a":0},
{"t":"wb","q":"Build: in the morning I get up (tewat inesalehu)","a":["ጠዋት","እነሳለሁ"],"pool":["ጠዋት","እነሳለሁ","እተኛለሁ"]},
{"t":"mc","q":"Pick: I wash","o":["አጥባለሁ","አበስላለሁ","እተኛለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አበስላለሁ","o":["አበስላለሁ","አጥባለሁ","እነሳለሁ"],"a":0}
]},
{"id":"am_h6_4","title":"The routine in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አበስላለሁ","I cook"],["አጥባለሁ","I wash"],["እተኛለሁ","I sleep"]]},
{"t":"li","q":"Which one do you hear?","say":"እተኛለሁ","o":["እተኛለሁ","አበስላለሁ","እነሳለሁ"],"a":0},
{"t":"match","q":"Match the verb to its place","pairs":[["አበስላለሁ","ማድቤት"],["እተኛለሁ","መኝታ ቤት"]]},
{"t":"mc","q":"Getting up at one o&rsquo;clock habesha time means rising at…","o":["7 AM","1 AM","noon"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እነሳለሁ","o":["እነሳለሁ","አጥባለሁ","እተኛለሁ"],"a":0}
]},
{"id":"am_h6_5","title":"Checkpoint: the routine","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"እነሳለሁ means…","o":["I get up","I sleep","I wash"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አጥባለሁ","o":["አጥባለሁ","አበስላለሁ","እተኛለሁ"],"a":0},
{"t":"mc","q":"Which one means I cook?","o":["አበስላለሁ","አጥባለሁ","እነሳለሁ"],"a":0},
{"t":"mc","q":"Review — ጀበና means…","o":["coffee pot","kettle","cup"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እተኛለሁ","o":["እተኛለሁ","እነሳለሁ","አበስላለሁ"],"a":0}
]},

/* ---------- h7 · Inside the house ---------- */
{"id":"am_h7","title":"Inside the house","step":"learn","meta":"Wist — the little word that means in","vocab":[["ውስጥ","wist","inside · in"],["ቤት ውስጥ","bet wist","in the house"],["ቤት ነኝ","bet negn","I am at home"]],"ex":[
{"t":"note","tag":"After, not before","q":"ውስጥ","body":"<p>English says IN the house; Amharic says the-house IN: <b>ውስጥ</b> <i>wist</i> — <i>inside</i> — follows its noun. <b>ቤት ውስጥ</b> <i>bet wist</i> — <i>in the house</i>. Little words come AFTER in this language — remember it once and it pays forever.</p>","eg":[["ውስጥ","wist","inside · in"],["ቤት ውስጥ","bet wist","in the house"]]},
{"t":"li","q":"Which one do you hear?","say":"ቤት ውስጥ","o":["ቤት ውስጥ","ውስጥ"],"a":0},
{"t":"mc","q":"Amharic position words come…","o":["after the noun","before the noun","anywhere"],"a":0},
{"t":"note","tag":"The homebody sentence","q":"ቤት ነኝ","body":"<p><b>ቤት ነኝ</b> <i>bet negn</i> — <i>I am at home</i> — the ነኝ of ደህና ነኝ doing location duty. The answer to every where-are-you phone call.</p>","eg":[["ቤት ነኝ","bet negn","I am at home"]]},
{"t":"li","q":"Which one do you hear?","say":"ቤት ነኝ","o":["ቤት ነኝ","ቤት ውስጥ"],"a":0},
{"t":"mc","q":"ቤት ነኝ means…","o":["I am at home","this is a house","the house exists"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውስጥ","o":["ውስጥ","ቤት ነኝ"],"a":0},
{"t":"mc","q":"ማድቤት ውስጥ would mean…","o":["in the kitchen","the kitchen door","a big kitchen"],"a":0}
]},
{"id":"am_h7_2","title":"Hearing inside","step":"recognize","meta":"Position by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ውስጥ","o":["ውስጥ","ቤት ውስጥ","ቤት ነኝ"],"a":0},
{"t":"mc","q":"What does ቤት ውስጥ mean?","o":["in the house","at home (I am)","the inner room"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤት ነኝ","o":["ቤት ነኝ","ውስጥ","ቤት ውስጥ"],"a":0},
{"t":"mc","q":"Which one means I am at home?","o":["ቤት ነኝ","ቤት ውስጥ","የት ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤት ውስጥ","o":["ቤት ውስጥ","ቤት ነኝ","ውስጥ"],"a":0},
{"t":"mc","q":"ግቢ ውስጥ means…","o":["in the compound","the compound gate","a small compound"],"a":0}
]},
{"id":"am_h7_3","title":"Building inside","step":"build","meta":"Noun first, wist after","vocab":[],"ex":[
{"t":"wb","q":"Build: in the house","a":["ቤት","ውስጥ"],"pool":["ቤት","ውስጥ","ነኝ"]},
{"t":"mc","q":"Pick: I am at home","o":["ቤት ነኝ","ቤት ውስጥ","ውስጥ"],"a":0},
{"t":"wb","q":"Build: in the kitchen","a":["ማድቤት","ውስጥ"],"pool":["ማድቤት","ውስጥ","ቤት"]},
{"t":"wb","q":"Build: I am at home","a":["ቤት","ነኝ"],"pool":["ቤት","ነኝ","ውስጥ"]},
{"t":"li","q":"Which one do you hear?","say":"ቤት ነኝ","o":["ቤት ነኝ","ቤት ውስጥ","ውስጥ"],"a":0}
]},
{"id":"am_h7_4","title":"Inside in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ውስጥ","inside"],["ቤት ውስጥ","in the house"],["ቤት ነኝ","I am at home"]]},
{"t":"li","q":"Which one do you hear?","say":"ውስጥ","o":["ውስጥ","ቤት ነኝ","ቤት ውስጥ"],"a":0},
{"t":"match","q":"Match the frame","pairs":[["ማድቤት ውስጥ","in the kitchen"],["ግቢ ውስጥ","in the compound"]]},
{"t":"mc","q":"Where-are-you phone call, answered from the sofa…","o":["ቤት ነኝ","የት ነው?","ቤት ውስጥ ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤት ውስጥ","o":["ቤት ውስጥ","ውስጥ","ቤት ነኝ"],"a":0}
]},
{"id":"am_h7_5","title":"Checkpoint: Zone 6 complete","step":"checkpoint","meta":"Around the home — show it all","vocab":[],"ex":[
{"t":"mc","q":"ቤት ውስጥ means…","o":["in the house","at my house","the house is here"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤት ነኝ","o":["ቤት ነኝ","ቤት ውስጥ","የት ነው?"],"a":0},
{"t":"mc","q":"Review — the existence pair is…","o":["አለ and የለም","እዚህ and እዚያ","ቤት and ግቢ"],"a":0},
{"t":"mc","q":"Review — which one means bedroom?","o":["መኝታ ቤት","ማድቤት","ሽንት ቤት"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ጠረጴዛ","o":["ጠረጴዛ","ወንበር","አልጋ"],"a":0},
{"t":"mc","q":"Review — I get up is…","o":["እነሳለሁ","እተኛለሁ","አበስላለሁ"],"a":0},
{"t":"mc","q":"Review — the famous clay coffee pot is the…","o":["ጀበና","ኩባያ","ሳህን"],"a":0}
]}
];

const AM_UNITS=[
{"n":1,"t":"The sounds of Amharic","d":"The fidel system, the tight consonants — and your first real words","lessons":["am_s1","am_s1_2","am_s1_3","am_s1_4","am_s1_5","am_s2","am_s2_2","am_s2_3","am_s2_4","am_s2_5","am_s3","am_s3_2","am_s3_3","am_s3_4","am_s3_5","am_s4","am_s4_2","am_s4_3","am_s4_4","am_s4_5","am_s5","am_s5_2","am_s5_3","am_s5_4","am_s5_5","am_s6","am_s6_2","am_s6_3","am_s6_4","am_s6_5","am_s7","am_s7_2","am_s7_3","am_s7_4","am_s7_5"]}
,
{"n":2,"t":"Greetings and people","d":"Dehna neh and dehna nesh, names, the polite you — and thank you","lessons":["am_g1","am_g1_2","am_g1_3","am_g1_4","am_g1_5","am_g2","am_g2_2","am_g2_3","am_g2_4","am_g2_5","am_g3","am_g3_2","am_g3_3","am_g3_4","am_g3_5","am_g4","am_g4_2","am_g4_3","am_g4_4","am_g4_5","am_g5","am_g5_2","am_g5_3","am_g5_4","am_g5_5","am_g6","am_g6_2","am_g6_3","am_g6_4","am_g6_5","am_g7","am_g7_2","am_g7_3","am_g7_4","am_g7_5"]}
,
{"n":3,"t":"Family and respect","d":"The household, the owner endings — and honor woven into address","lessons":["am_f1","am_f1_2","am_f1_3","am_f1_4","am_f1_5","am_f2","am_f2_2","am_f2_3","am_f2_4","am_f2_5","am_f3","am_f3_2","am_f3_3","am_f3_4","am_f3_5","am_f4","am_f4_2","am_f4_3","am_f4_4","am_f4_5","am_f5","am_f5_2","am_f5_3","am_f5_4","am_f5_5","am_f6","am_f6_2","am_f6_3","am_f6_4","am_f6_5","am_f7","am_f7_2","am_f7_3","am_f7_4","am_f7_5"]}
,
{"n":4,"t":"Numbers, days and the Ethiopian clock","d":"Counting, the week — and the day that starts at sunrise","lessons":["am_n1","am_n1_2","am_n1_3","am_n1_4","am_n1_5","am_n2","am_n2_2","am_n2_3","am_n2_4","am_n2_5","am_n3","am_n3_2","am_n3_3","am_n3_4","am_n3_5","am_n4","am_n4_2","am_n4_3","am_n4_4","am_n4_5","am_n5","am_n5_2","am_n5_3","am_n5_4","am_n5_5","am_n6","am_n6_2","am_n6_3","am_n6_4","am_n6_5","am_n7","am_n7_2","am_n7_3","am_n7_4","am_n7_5"]}
,
{"n":5,"t":"Food and drink","d":"Injera, the buna ceremony, the wet family — and the gursha","lessons":["am_d1","am_d1_2","am_d1_3","am_d1_4","am_d1_5","am_d2","am_d2_2","am_d2_3","am_d2_4","am_d2_5","am_d3","am_d3_2","am_d3_3","am_d3_4","am_d3_5","am_d4","am_d4_2","am_d4_3","am_d4_4","am_d4_5","am_d5","am_d5_2","am_d5_3","am_d5_4","am_d5_5","am_d6","am_d6_2","am_d6_3","am_d6_4","am_d6_5","am_d7","am_d7_2","am_d7_3","am_d7_4","am_d7_5"]}
,
{"n":6,"t":"Around the home","d":"Bet builds every room — plus where-is-it and the home verbs","lessons":["am_h1","am_h1_2","am_h1_3","am_h1_4","am_h1_5","am_h2","am_h2_2","am_h2_3","am_h2_4","am_h2_5","am_h3","am_h3_2","am_h3_3","am_h3_4","am_h3_5","am_h4","am_h4_2","am_h4_3","am_h4_4","am_h4_5","am_h5","am_h5_2","am_h5_3","am_h5_4","am_h5_5","am_h6","am_h6_2","am_h6_3","am_h6_4","am_h6_5","am_h7","am_h7_2","am_h7_3","am_h7_4","am_h7_5"]}
];

const AM_SYM={"am_s1":"ለ ሉ ላ","am_s2":"መ ም","am_s3":"ሰላም","am_s4":"ተ ጠ","am_s5":"ማን","am_s6":"ላም","am_s7":"እሺ","am_g1":"ደህና ነህ?","am_g2":"ስም","am_g3":"እንደምን","am_g4":"እርስዎ","am_g5":"ከየት?","am_g6":"ሰዎች","am_g7":"ቻው","am_f1":"አባት","am_f2":"ቤተሰብ","am_f3":"አባቴ","am_f4":"ይህ","am_f5":"አባቷ","am_f6":"ጋሽ","am_f7":"ማን ነው?","am_n1":"1 2 3","am_n2":"6 7 8","am_n3":"ሰኞ","am_n4":"እሁድ","am_n5":"ስንት?","am_n6":"ሀበሻ ሰዓት","am_n7":"ዓመት","am_d1":"እንጀራ","am_d2":"ቡና","am_d3":"እባክህ","am_d4":"ብላ!","am_d5":"ዶሮ ወጥ","am_d6":"በጣም","am_d7":"ጉርሻ","am_h1":"ቤት","am_h2":"ማድቤት","am_h3":"ወንበር","am_h4":"የት ነው?","am_h5":"ጀበና","am_h6":"አበስላለሁ","am_h7":"ውስጥ"};

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
