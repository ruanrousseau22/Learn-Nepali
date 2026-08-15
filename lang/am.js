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
{"t":"mc","q":"ደህና ነዎት? uses the ending for…","o":["the polite you, erswo","the plain you, ante","the speaker, ine"],"a":0},
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
{"t":"mc","q":"The word for man hiding inside ወንድም is…","o":["ወንድ","ወይዘሮ","ሰው"],"a":0}
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
{"t":"mc","q":"ይህ እናቴ ነው would mean…","o":["this is my mother","my mother is home","who is my mother?"],"a":0}
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
{"t":"mc","q":"The -wa in አባቷ echoes which she-pronoun?","o":["እሷ","እሱ","እኔ"],"a":0}
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
{"t":"mc","q":"Greeting your friend&rsquo;s grandfather warmly, you call him…","o":["gash plus his first name","just plain issu","weyzerit plus his name"],"a":0},
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
{"t":"mc","q":"Review — the opposite of አለ is…","o":["የለም","እዚህ","ውስጥ"],"a":0},
{"t":"mc","q":"Review — which one means bedroom?","o":["መኝታ ቤት","ማድቤት","ሽንት ቤት"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ጠረጴዛ","o":["ጠረጴዛ","ወንበር","አልጋ"],"a":0},
{"t":"mc","q":"Review — I get up is…","o":["እነሳለሁ","እተኛለሁ","አበስላለሁ"],"a":0},
{"t":"mc","q":"Review — the famous clay coffee pot is the…","o":["ጀበና","ኩባያ","ሳህን"],"a":0}
]},

/* ---------- t1 · Places in town ---------- */
{"id":"am_t1","title":"Places in town","step":"learn","meta":"Menged, suk, gebeya — the map fills in","vocab":[["መንገድ","menged","road · street"],["ሱቅ","suk","shop"],["ገበያ","gebeya","market"],["ትምህርት ቤት","timihirt bet","school"],["ከተማ","ketema","city · town"]],"ex":[
{"t":"note","tag":"The road and the shop","q":"መንገድ and ሱቅ","body":"<p><b>መንገድ</b> <i>menged</i> — <i>road, street, way</i>. <b>ሱቅ</b> <i>suk</i> — the <i>shop</i>: the kiosk on every corner selling everything from soap to sim cards.</p>","eg":[["መንገድ","menged","road · street"],["ሱቅ","suk","shop"]]},
{"t":"li","q":"Which one do you hear?","say":"መንገድ","o":["መንገድ","ሱቅ"],"a":0},
{"t":"mc","q":"ሱቅ means…","o":["shop","road","stall"],"a":0},
{"t":"note","tag":"The big two","q":"ገበያ and ከተማ","body":"<p><b>ገበያ</b> <i>gebeya</i> — the <i>market</i>, the open-air kind that takes over whole districts. <b>ከተማ</b> <i>ketema</i> — <i>city, town</i>. Addis holds Merkato — often called Africa&rsquo;s largest open-air market.</p>","eg":[["ገበያ","gebeya","market"],["ከተማ","ketema","city · town"]]},
{"t":"li","q":"Which one do you hear?","say":"ገበያ","o":["ገበያ","ከተማ"],"a":0},
{"t":"mc","q":"ገበያ means…","o":["market","garage","square"],"a":0},
{"t":"note","tag":"Bet strikes again","q":"ትምህርት ቤት","body":"<p><b>ትምህርት ቤት</b> <i>timihirt bet</i> — literally <i>learning house</i> — <i>school</i>. The bet-compound machine from Zone 6, still building the town for you.</p>","eg":[["ትምህርት ቤት","timihirt bet","school"]]},
{"t":"li","q":"Which one do you hear?","say":"ትምህርት ቤት","o":["ትምህርት ቤት","መንገድ"],"a":0},
{"t":"mc","q":"ትምህርት ቤት literally means…","o":["learning house","book place","child house"],"a":0}
]},
{"id":"am_t1_2","title":"Hearing the town","step":"recognize","meta":"The map by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሱቅ","o":["ሱቅ","ገበያ","መንገድ"],"a":0},
{"t":"mc","q":"What does ከተማ mean?","o":["city · town","market","village"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ከተማ","o":["ከተማ","ገበያ","ትምህርት ቤት"],"a":0},
{"t":"mc","q":"Which one is the market?","o":["ገበያ","ሱቅ","ከተማ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መንገድ","o":["መንገድ","ከተማ","ሱቅ"],"a":0},
{"t":"mc","q":"Africa&rsquo;s largest open-air market is Addis&rsquo;s…","o":["Merkato","Bole","Piassa"],"a":0}
]},
{"id":"am_t1_3","title":"Building the town","step":"build","meta":"Lay out the streets","vocab":[],"ex":[
{"t":"wb","q":"Build: school (learning + house)","a":["ትምህርት","ቤት"],"pool":["ትምህርት","ቤት","ሱቅ"]},
{"t":"mc","q":"Pick the word for road","o":["መንገድ","ገበያ","ከተማ"],"a":0},
{"t":"wb","q":"Build: shop and market","a":["ሱቅ","ገበያ"],"pool":["ሱቅ","ገበያ","ከተማ"]},
{"t":"mc","q":"Pick the word for city","o":["ከተማ","መንገድ","ሱቅ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ገበያ","o":["ገበያ","ሱቅ","ከተማ"],"a":0}
]},
{"id":"am_t1_4","title":"The town in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["መንገድ","road"],["ሱቅ","shop"],["ገበያ","market"]]},
{"t":"li","q":"Which one do you hear?","say":"ትምህርት ቤት","o":["ትምህርት ቤት","ገበያ","ከተማ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ትምህርት ቤት","school"],["ከተማ","city"]]},
{"t":"mc","q":"Soap and sim cards at midnight come from…","o":["ሱቅ","ገበያ","ትምህርት ቤት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ከተማ","o":["ከተማ","መንገድ","ገበያ"],"a":0}
]},
{"id":"am_t1_5","title":"Checkpoint: the town","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"መንገድ means…","o":["road · street","market","corner"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሱቅ","o":["ሱቅ","ከተማ","ገበያ"],"a":0},
{"t":"mc","q":"Which one means school?","o":["ትምህርት ቤት","መኝታ ቤት","ሽንት ቤት"],"a":0},
{"t":"mc","q":"Review — ውስጥ comes…","o":["after its noun","before its noun","alone"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ትምህርት ቤት","o":["ትምህርት ቤት","ሱቅ","መንገድ"],"a":0}
]},

/* ---------- t2 · Going and coming ---------- */
{"id":"am_t2","title":"Going and coming","step":"learn","meta":"Ihedalehu, imetalehu — and the calls of na","vocab":[["እሄዳለሁ","ihedalehu","I go"],["እመጣለሁ","imetalehu","I come"],["ና","na","come! (to a man)"],["ነይ","ney","come! (to a woman)"]],"ex":[
{"t":"note","tag":"The motion pair","q":"እሄዳለሁ and እመጣለሁ","body":"<p><b>እሄዳለሁ</b> <i>ihedalehu</i> — <i>I go</i> — and <b>እመጣለሁ</b> <i>imetalehu</i> — <i>I come</i>. The trusty -alehu frame, now in motion.</p>","eg":[["እሄዳለሁ","ihedalehu","I go"],["እመጣለሁ","imetalehu","I come"]]},
{"t":"li","q":"Going or coming — which do you hear?","say":"እሄዳለሁ","o":["እሄዳለሁ","እመጣለሁ"],"a":0},
{"t":"mc","q":"እመጣለሁ means…","o":["I come","I go","I stay"],"a":0},
{"t":"note","tag":"The shortest command","q":"ና and ነይ","body":"<p>Come here in one syllable: <b>ና</b> <i>na</i> to a man, <b>ነይ</b> <i>ney</i> to a woman. You will hear it called across streets, markets and compounds all day.</p>","eg":[["ና","na","come! (to a man)"],["ነይ","ney","come! (to a woman)"]]},
{"t":"li","q":"To a man or a woman — which do you hear?","say":"ና","o":["ና","ነይ"],"a":0},
{"t":"mc","q":"ነይ is come! said to…","o":["a woman","a man","a group"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እመጣለሁ","o":["እመጣለሁ","እሄዳለሁ"],"a":0},
{"t":"mc","q":"ነገ እመጣለሁ means…","o":["I will come tomorrow","I came yesterday","come tomorrow!"],"a":0}
]},
{"id":"am_t2_2","title":"Hearing the motion","step":"recognize","meta":"Come and go by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ነይ","o":["ነይ","ና","እመጣለሁ"],"a":0},
{"t":"mc","q":"What does እሄዳለሁ mean?","o":["I go","I come","go!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እመጣለሁ","o":["እመጣለሁ","እሄዳለሁ","ነይ"],"a":0},
{"t":"mc","q":"Which one means come!, to a man?","o":["ና","ነይ","ሂድ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ና","o":["ና","ነይ","እሄዳለሁ"],"a":0},
{"t":"mc","q":"The -alehu on both verbs marks…","o":["I","you","now"],"a":0}
]},
{"id":"am_t2_3","title":"Building the motion","step":"build","meta":"Set yourself moving","vocab":[],"ex":[
{"t":"wb","q":"Build: I will come tomorrow","a":["ነገ","እመጣለሁ"],"pool":["ነገ","እመጣለሁ","እሄዳለሁ"]},
{"t":"mc","q":"Pick: come! (to a woman)","o":["ነይ","ና","እመጣለሁ"],"a":0},
{"t":"wb","q":"Build: today I go","a":["ዛሬ","እሄዳለሁ"],"pool":["ዛሬ","እሄዳለሁ","እመጣለሁ"]},
{"t":"mc","q":"Pick: I go","o":["እሄዳለሁ","እመጣለሁ","ና"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እሄዳለሁ","o":["እሄዳለሁ","ና","እመጣለሁ"],"a":0}
]},
{"id":"am_t2_4","title":"The motion in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እሄዳለሁ","I go"],["እመጣለሁ","I come"]]},
{"t":"li","q":"Which one do you hear?","say":"ነይ","o":["ነይ","ና","እሄዳለሁ"],"a":0},
{"t":"match","q":"Match the call to the person","pairs":[["ና","a man"],["ነይ","a woman"]]},
{"t":"mc","q":"Called across the compound to a boy: …","o":["ና!","ነይ!","እመጣለሁ!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እመጣለሁ","o":["እመጣለሁ","ነይ","እሄዳለሁ"],"a":0}
]},
{"id":"am_t2_5","title":"Checkpoint: the motion","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"እመጣለሁ means…","o":["I come","I go","come!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ና","o":["ና","ነይ","እመጣለሁ"],"a":0},
{"t":"mc","q":"Which one means I go?","o":["እሄዳለሁ","እመጣለሁ","ነይ"],"a":0},
{"t":"mc","q":"Review — ገበያ means…","o":["market","shop","street"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ነይ","o":["ነይ","ና","እሄዳለሁ"],"a":0}
]},

/* ---------- t3 · Where to? ---------- */
{"id":"am_t3","title":"Where to?","step":"learn","meta":"Wedet — and wede, the little toward","vocab":[["ወዴት","wedet","where to?"],["ወዴት ትሄዳለህ?","wedet tihedaleh?","where are you going? (to a man)"],["ወደ","wede","to · toward"],["ወደ ቤት እሄዳለሁ","wede bet ihedalehu","I am going home"]],"ex":[
{"t":"note","tag":"The direction question","q":"ወዴት","body":"<p><b>ወዴት</b> <i>wedet</i> — <i>where to?</i> — the yet of location wearing a direction. To a man: <b>ወዴት ትሄዳለህ?</b> <i>wedet tihedaleh?</i> — <i>where are you going?</i> The ti-...-eh wrap is the you-form of the verb you know as ihedalehu.</p>","eg":[["ወዴት","wedet","where to?"],["ወዴት ትሄዳለህ?","wedet tihedaleh?","where are you going? (to a man)"]]},
{"t":"li","q":"Which one do you hear?","say":"ወዴት ትሄዳለህ?","o":["ወዴት ትሄዳለህ?","ወዴት"],"a":0},
{"t":"mc","q":"ወዴት ትሄዳለህ? asks…","o":["where are you going?","where are you from?","where is it?"],"a":0},
{"t":"note","tag":"The toward word","q":"ወደ","body":"<p><b>ወደ</b> <i>wede</i> — <i>to, toward</i> — and unlike wist, it goes BEFORE its noun: <b>ወደ ቤት እሄዳለሁ</b> <i>wede bet ihedalehu</i> — <i>I am going (toward) home</i>. Swap the destination, keep the frame.</p>","eg":[["ወደ","wede","to · toward"],["ወደ ቤት እሄዳለሁ","wede bet ihedalehu","I am going home"]]},
{"t":"li","q":"Which one do you hear?","say":"ወደ ቤት እሄዳለሁ","o":["ወደ ቤት እሄዳለሁ","ወደ"],"a":0},
{"t":"mc","q":"ወደ ገበያ እሄዳለሁ means…","o":["I am going to the market","I came from the market","the market is far"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወደ","o":["ወደ","ወዴት"],"a":0},
{"t":"mc","q":"ወደ sits…","o":["before its noun","after its noun","at the sentence end"],"a":0}
]},
{"id":"am_t3_2","title":"Hearing where-to","step":"recognize","meta":"Directions by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ወዴት","o":["ወዴት","ወደ","የት ነው?"],"a":0},
{"t":"mc","q":"What does ወደ mean?","o":["to · toward","from","inside"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወደ ቤት እሄዳለሁ","o":["ወደ ቤት እሄዳለሁ","ወዴት ትሄዳለህ?","ወደ"],"a":0},
{"t":"mc","q":"Which one asks where are you going?","o":["ወዴት ትሄዳለህ?","የት ነው?","ማን ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወዴት ትሄዳለህ?","o":["ወዴት ትሄዳለህ?","ወደ ቤት እሄዳለሁ","ወዴት"],"a":0},
{"t":"mc","q":"The ti-…-eh wrap in ትሄዳለህ marks…","o":["you (a man)","I","she"],"a":0}
]},
{"id":"am_t3_3","title":"Building where-to","step":"build","meta":"Frame and destination","vocab":[],"ex":[
{"t":"wb","q":"Build: I am going home","a":["ወደ","ቤት","እሄዳለሁ"],"pool":["ወደ","ቤት","እሄዳለሁ","ወዴት"]},
{"t":"mc","q":"Pick the toward word","o":["ወደ","ወዴት","ውስጥ"],"a":0},
{"t":"wb","q":"Build: I am going to the market","a":["ወደ","ገበያ","እሄዳለሁ"],"pool":["ወደ","ገበያ","እሄዳለሁ","ቤት"]},
{"t":"wb","q":"Build: where are you going? (to a man)","a":["ወዴት","ትሄዳለህ?"],"pool":["ወዴት","ትሄዳለህ?","እሄዳለሁ"]},
{"t":"li","q":"Which one do you hear?","say":"ወደ","o":["ወደ","ወዴት","ቤት"],"a":0}
]},
{"id":"am_t3_4","title":"Where-to in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ወዴት","where to?"],["ወደ","to · toward"],["ወደ ቤት እሄዳለሁ","I am going home"]]},
{"t":"li","q":"Which one do you hear?","say":"ወደ ቤት እሄዳለሁ","o":["ወደ ቤት እሄዳለሁ","ወደ","ወዴት ትሄዳለህ?"],"a":0},
{"t":"match","q":"Match the little word to its position","pairs":[["ወደ","before the noun"],["ውስጥ","after the noun"]]},
{"t":"mc","q":"ወዴት ትሄዳለህ? — ወደ ትምህርት ቤት. The man is heading…","o":["to school","to the shop","home"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወዴት","o":["ወዴት","ወደ ቤት እሄዳለሁ","ወደ"],"a":0}
]},
{"id":"am_t3_5","title":"Checkpoint: where-to","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ወደ ቤት እሄዳለሁ means…","o":["I am going home","I am at home","come home!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወዴት ትሄዳለህ?","o":["ወዴት ትሄዳለህ?","ወዴት","ወደ"],"a":0},
{"t":"mc","q":"ወዴት asks…","o":["where to?","from where?","where is it?"],"a":0},
{"t":"mc","q":"Review — ና means…","o":["come! (to a man)","go!","wait!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወደ ቤት እሄዳለሁ","o":["ወደ ቤት እሄዳለሁ","ወዴት ትሄዳለህ?","እመጣለሁ"],"a":0}
]},

/* ---------- t4 · The minibus ---------- */
{"id":"am_t4","title":"The minibus","step":"learn","meta":"Taksi, weyala — and the shout that stops it","vocab":[["ታክሲ","taksi","minibus taxi"],["ወያላ","weyala","conductor"],["ወራጅ አለ!","weraj alle!","getting off! (someone is descending)"],["ባጃጅ","bajaj","three-wheeler"]],"ex":[
{"t":"note","tag":"How Addis moves","q":"ታክሲ and ወያላ","body":"<p>In Addis, <b>ታክሲ</b> <i>taksi</i> means the blue-white MINIBUS running fixed routes. Hanging from its door is the <b>ወያላ</b> <i>weyala</i> — the conductor — chanting destinations at speed and collecting fares. Listen for your stop in the chant.</p>","eg":[["ታክሲ","taksi","minibus taxi"],["ወያላ","weyala","conductor"]]},
{"t":"li","q":"Which one do you hear?","say":"ወያላ","o":["ወያላ","ታክሲ"],"a":0},
{"t":"mc","q":"The ወያላ&rsquo;s job is…","o":["chanting routes and taking fares","driving","selling tickets at a booth"],"a":0},
{"t":"note","tag":"The magic shout","q":"ወራጅ አለ!","body":"<p>To get off, shout <b>ወራጅ አለ!</b> <i>weraj alle!</i> — literally <i>there is a descender!</i> — your አለ from Zone 6 stopping traffic. The driver pulls over; you hop out; the chant resumes.</p>","eg":[["ወራጅ አለ!","weraj alle!","getting off! (someone is descending)"]]},
{"t":"li","q":"Which one do you hear?","say":"ወራጅ አለ!","o":["ወራጅ አለ!","ወያላ"],"a":0},
{"t":"mc","q":"ወራጅ አለ! literally announces…","o":["there is a descender","stop the car","open the door"],"a":0},
{"t":"note","tag":"The little blue one","q":"ባጃጅ","body":"<p><b>ባጃጅ</b> <i>bajaj</i> — the three-wheeled tuk-tuk (named for its Indian maker) that rules the smaller towns where minibuses thin out. Cheap, loud, everywhere.</p>","eg":[["ባጃጅ","bajaj","three-wheeler"]]},
{"t":"li","q":"Which one do you hear?","say":"ባጃጅ","o":["ባጃጅ","ታክሲ"],"a":0},
{"t":"mc","q":"ባጃጅ means…","o":["the three-wheeler","the big bus","the bicycle"],"a":0}
]},
{"id":"am_t4_2","title":"Hearing the ride","step":"recognize","meta":"Street transport by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ታክሲ","o":["ታክሲ","ባጃጅ","ወያላ"],"a":0},
{"t":"mc","q":"What does ወያላ mean?","o":["conductor","driver","passenger"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወራጅ አለ!","o":["ወራጅ አለ!","ታክሲ","ባጃጅ"],"a":0},
{"t":"mc","q":"Which one is the three-wheeler?","o":["ባጃጅ","ታክሲ","ወያላ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ባጃጅ","o":["ባጃጅ","ወራጅ አለ!","ታክሲ"],"a":0},
{"t":"mc","q":"In Addis, ታክሲ usually means…","o":["a fixed-route minibus","a metered cab","a bus"],"a":0}
]},
{"id":"am_t4_3","title":"Building the ride","step":"build","meta":"Board, ride, escape","vocab":[],"ex":[
{"t":"wb","q":"Build the shout: getting off!","a":["ወራጅ","አለ!"],"pool":["ወራጅ","አለ!","ወያላ"]},
{"t":"mc","q":"Pick the conductor","o":["ወያላ","ታክሲ","ባጃጅ"],"a":0},
{"t":"wb","q":"Build: I am going to the city by ride words","a":["ወደ","ከተማ","እሄዳለሁ"],"pool":["ወደ","ከተማ","እሄዳለሁ","ታክሲ"]},
{"t":"mc","q":"Pick the minibus","o":["ታክሲ","ባጃጅ","ወያላ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወያላ","o":["ወያላ","ባጃጅ","ወራጅ አለ!"],"a":0}
]},
{"id":"am_t4_4","title":"The ride in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ታክሲ","minibus"],["ወያላ","conductor"],["ባጃጅ","three-wheeler"]]},
{"t":"li","q":"Which one do you hear?","say":"ወራጅ አለ!","o":["ወራጅ አለ!","ወያላ","ባጃጅ"],"a":0},
{"t":"match","q":"Match the moment to the phrase","pairs":[["your stop approaches","ወራጅ አለ!"],["the fare is due","ወያላ"]]},
{"t":"mc","q":"The አለ in ወራጅ አለ is the same አለ as in…","o":["ቡና አለ?","አለ ማን?","ወዴት አለ?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ታክሲ","o":["ታክሲ","ወራጅ አለ!","ወያላ"],"a":0}
]},
{"id":"am_t4_5","title":"Checkpoint: the ride","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ወራጅ አለ! means…","o":["getting off!","all aboard!","hurry up!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ባጃጅ","o":["ባጃጅ","ታክሲ","ወያላ"],"a":0},
{"t":"mc","q":"Which one chants the destinations?","o":["ወያላ","ታክሲ","ባጃጅ"],"a":0},
{"t":"mc","q":"Review — ወደ means…","o":["to · toward","from","inside"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወራጅ አለ!","o":["ወራጅ አለ!","ባጃጅ","ታክሲ"],"a":0}
]},

/* ---------- t5 · Near and far ---------- */
{"id":"am_t5","title":"Near and far","step":"learn","meta":"Kirb, ruk — walk it or ride it","vocab":[["ቅርብ","kirb","near"],["ሩቅ","ruk","far"],["ቅርብ ነው?","kirb new?","is it near?"],["በጣም ሩቅ ነው","betam ruk new","it is very far"]],"ex":[
{"t":"note","tag":"The deciding pair","q":"ቅርብ and ሩቅ","body":"<p><b>ቅርብ</b> <i>kirb</i> — <i>near</i> — and <b>ሩቅ</b> <i>ruk</i> — <i>far</i>. Between them they decide every journey: walk it, or wave down a taksi.</p>","eg":[["ቅርብ","kirb","near"],["ሩቅ","ruk","far"]]},
{"t":"li","q":"Near or far — which do you hear?","say":"ቅርብ","o":["ቅርብ","ሩቅ"],"a":0},
{"t":"mc","q":"ሩቅ means…","o":["far","near","next"],"a":0},
{"t":"note","tag":"Asking it","q":"ቅርብ ነው?","body":"<p><b>ቅርብ ነው?</b> <i>kirb new?</i> — <i>is it near?</i> — the ነው question you have built five times already, now saving your legs.</p>","eg":[["ቅርብ ነው?","kirb new?","is it near?"]]},
{"t":"li","q":"Which one do you hear?","say":"ቅርብ ነው?","o":["ቅርብ ነው?","ቅርብ"],"a":0},
{"t":"mc","q":"ቅርብ ነው? asks…","o":["is it near?","is it far?","is it open?"],"a":0},
{"t":"note","tag":"The honest answer","q":"በጣም ሩቅ ነው","body":"<p>And the answer that changes plans: <b>በጣም ሩቅ ነው</b> <i>betam ruk new</i> — <i>it is VERY far</i> — your betam amplifier back on duty. Time to shout for a taksi.</p>","eg":[["በጣም ሩቅ ነው","betam ruk new","it is very far"]]},
{"t":"li","q":"Which one do you hear?","say":"በጣም ሩቅ ነው","o":["በጣም ሩቅ ነው","ቅርብ ነው?"],"a":0},
{"t":"mc","q":"በጣም ሩቅ ነው means…","o":["it is very far","it is a little far","it is near enough"],"a":0}
]},
{"id":"am_t5_2","title":"Hearing the distance","step":"recognize","meta":"Near and far by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሩቅ","o":["ሩቅ","ቅርብ","ቅርብ ነው?"],"a":0},
{"t":"mc","q":"What does ቅርብ mean?","o":["near","far","here"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በጣም ሩቅ ነው","o":["በጣም ሩቅ ነው","ቅርብ ነው?","ሩቅ"],"a":0},
{"t":"mc","q":"Which one asks is it near?","o":["ቅርብ ነው?","የት ነው?","ቅርብ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቅርብ ነው?","o":["ቅርብ ነው?","በጣም ሩቅ ነው","ቅርብ"],"a":0},
{"t":"mc","q":"ገበያው ሩቅ ነው means the market is…","o":["far","near","closed"],"a":0}
]},
{"id":"am_t5_3","title":"Building the distance","step":"build","meta":"Measure before you march","vocab":[],"ex":[
{"t":"wb","q":"Build: is it near?","a":["ቅርብ","ነው?"],"pool":["ቅርብ","ነው?","ሩቅ"]},
{"t":"mc","q":"Pick the word for far","o":["ሩቅ","ቅርብ","ወደ"],"a":0},
{"t":"wb","q":"Build: it is very far","a":["በጣም","ሩቅ","ነው"],"pool":["በጣም","ሩቅ","ነው","ቅርብ"]},
{"t":"mc","q":"Pick the word for near","o":["ቅርብ","ሩቅ","እዚህ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቅርብ","o":["ቅርብ","ሩቅ","ቅርብ ነው?"],"a":0}
]},
{"id":"am_t5_4","title":"The distance in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ቅርብ","near"],["ሩቅ","far"]]},
{"t":"li","q":"Which one do you hear?","say":"በጣም ሩቅ ነው","o":["በጣም ሩቅ ነው","ቅርብ ነው?","ሩቅ"],"a":0},
{"t":"match","q":"Match the answer to the action","pairs":[["ቅርብ ነው","walk"],["በጣም ሩቅ ነው","taksi"]]},
{"t":"mc","q":"ሽንት ቤት ቅርብ ነው? combines which two zones?","o":["home and distance","food and family","time and names"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሩቅ","o":["ሩቅ","ቅርብ","በጣም ሩቅ ነው"],"a":0}
]},
{"id":"am_t5_5","title":"Checkpoint: the distance","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ቅርብ ነው? asks…","o":["is it near?","is it far?","is it here?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቅርብ ነው?","o":["ቅርብ ነው?","ሩቅ","በጣም ሩቅ ነው"],"a":0},
{"t":"mc","q":"Which one means far?","o":["ሩቅ","ቅርብ","እዚያ"],"a":0},
{"t":"mc","q":"Review — ወራጅ አለ! shouts…","o":["getting off!","speeding up!","full taxi!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በጣም ሩቅ ነው","o":["በጣም ሩቅ ነው","ቅርብ ነው?","ሩቅ"],"a":0}
]},

/* ---------- t6 · Lost — and found ---------- */
{"id":"am_t6","title":"Lost — and found","step":"learn","meta":"Tefahu — the same tefa as the vanishing light","vocab":[["ጠፋሁ","tefahu","I am lost"],["እርዳኝ","irdagn","help me"],["መንገዱ የት ነው?","mengedu yet new?","where is the road?"]],"ex":[
{"t":"note","tag":"Vanished","q":"ጠፋሁ","body":"<p><b>ጠፋሁ</b> <i>tefahu</i> — <i>I am lost</i> — literally <i>I vanished</i>, the same tefa as mebrat tefa, the vanished light. Say it with a smile and someone WILL walk you home; Ethiopian hospitality does not leave people lost.</p>","eg":[["ጠፋሁ","tefahu","I am lost"]]},
{"t":"li","q":"Which one do you hear?","say":"ጠፋሁ","o":["ጠፋሁ","ወዴት"],"a":0},
{"t":"mc","q":"ጠፋሁ literally says…","o":["I vanished","I stopped","I arrived"],"a":0},
{"t":"note","tag":"The direct ask","q":"እርዳኝ","body":"<p><b>እርዳኝ</b> <i>irdagn</i> — <i>help me</i>. With your please attached — እባክህ እርዳኝ — it opens every door in the country.</p>","eg":[["እርዳኝ","irdagn","help me"]]},
{"t":"li","q":"Which one do you hear?","say":"እርዳኝ","o":["እርዳኝ","ጠፋሁ"],"a":0},
{"t":"mc","q":"እባክህ እርዳኝ means…","o":["please help me","excuse me sir","I am fine"],"a":0},
{"t":"note","tag":"The -u that points","q":"መንገዱ የት ነው?","body":"<p><b>መንገዱ የት ነው?</b> <i>mengedu yet new?</i> — <i>where is THE road?</i> That little <b>-u</b> on መንገድ is Amharic&rsquo;s <i>the</i> — glued on the end, like everything else in this language.</p>","eg":[["መንገዱ የት ነው?","mengedu yet new?","where is the road?"]]},
{"t":"li","q":"Which one do you hear?","say":"መንገዱ የት ነው?","o":["መንገዱ የት ነው?","ጠፋሁ"],"a":0},
{"t":"mc","q":"The -u on መንገዱ works as…","o":["the","my","a"],"a":0}
]},
{"id":"am_t6_2","title":"Hearing the rescue","step":"recognize","meta":"Lost-talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እርዳኝ","o":["እርዳኝ","ጠፋሁ","መንገዱ የት ነው?"],"a":0},
{"t":"mc","q":"What does ጠፋሁ mean?","o":["I am lost","help me","I am late"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መንገዱ የት ነው?","o":["መንገዱ የት ነው?","እርዳኝ","ጠፋሁ"],"a":0},
{"t":"mc","q":"Which one means help me?","o":["እርዳኝ","ጠፋሁ","ይቅርታ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጠፋሁ","o":["ጠፋሁ","መንገዱ የት ነው?","እርዳኝ"],"a":0},
{"t":"mc","q":"The lost-person opener, politely…","o":["ይቅርታ, ጠፋሁ","ቻው, ጠፋሁ","እሺ, እርዳኝ"],"a":0}
]},
{"id":"am_t6_3","title":"Building the rescue","step":"build","meta":"The three-line lifeline","vocab":[],"ex":[
{"t":"wb","q":"Build: please help me (to a man)","a":["እባክህ","እርዳኝ"],"pool":["እባክህ","እርዳኝ","ጠፋሁ"]},
{"t":"mc","q":"Pick: I am lost","o":["ጠፋሁ","እርዳኝ","ቅርብ"],"a":0},
{"t":"wb","q":"Build: where is the road?","a":["መንገዱ","የት","ነው?"],"pool":["መንገዱ","የት","ነው?","ወዴት"]},
{"t":"mc","q":"Pick: help me","o":["እርዳኝ","ጠፋሁ","ና"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እርዳኝ","o":["እርዳኝ","መንገዱ የት ነው?","ጠፋሁ"],"a":0}
]},
{"id":"am_t6_4","title":"The rescue in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ጠፋሁ","I am lost"],["እርዳኝ","help me"],["መንገዱ የት ነው?","where is the road?"]]},
{"t":"li","q":"Which one do you hear?","say":"ጠፋሁ","o":["ጠፋሁ","እርዳኝ","መንገዱ የት ነው?"],"a":0},
{"t":"match","q":"Match the tefa","pairs":[["ጠፋሁ","I vanished (lost)"],["መብራት ጠፋ","the light vanished"]]},
{"t":"mc","q":"Lost in Merkato, your full script is…","o":["ይቅርታ, ጠፋሁ — እባክህ እርዳኝ","ቻው — ወራጅ አለ!","እሺ — በቃኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መንገዱ የት ነው?","o":["መንገዱ የት ነው?","ጠፋሁ","እርዳኝ"],"a":0}
]},
{"id":"am_t6_5","title":"Checkpoint: the rescue","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"እርዳኝ means…","o":["help me","save us","follow me"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጠፋሁ","o":["ጠፋሁ","መንገዱ የት ነው?","እርዳኝ"],"a":0},
{"t":"mc","q":"The -u ending on mengedu means…","o":["the","my","this"],"a":0},
{"t":"mc","q":"Review — በጣም ሩቅ ነው means…","o":["it is very far","it is very near","it is too late"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መንገዱ የት ነው?","o":["መንገዱ የት ነው?","እርዳኝ","ጠፋሁ"],"a":0}
]},

/* ---------- t7 · Let us go ---------- */
{"id":"am_t7","title":"Let us go","step":"learn","meta":"Inihid — and the word that slows the world down","vocab":[["እንሂድ","inihid","let us go"],["ቀስ በል","qes bel","slow down (to a man)"],["ቆይ","qoy","wait"]],"ex":[
{"t":"note","tag":"The rallying cry","q":"እንሂድ","body":"<p><b>እንሂድ</b> <i>inihid</i> — <i>let us go!</i> — cousin of እንብላ, let us eat. The inclusive in- makes plans out of company: come on, all of us, now.</p>","eg":[["እንሂድ","inihid","let us go"]]},
{"t":"li","q":"Which one do you hear?","say":"እንሂድ","o":["እንሂድ","እንብላ"],"a":0},
{"t":"mc","q":"እንሂድ means…","o":["let us go","go away","I am going"],"a":0},
{"t":"note","tag":"The brake","q":"ቀስ በል","body":"<p><b>ቀስ በል</b> <i>qes bel</i> — <i>slow down, take it easy</i> — said to a man (ቀስ በይ <i>qes bey</i> to a woman). To drivers, to fast talkers, to life. One of Amharic&rsquo;s most useful little levers.</p>","eg":[["ቀስ በል","qes bel","slow down (to a man)"]]},
{"t":"li","q":"Which one do you hear?","say":"ቀስ በል","o":["ቀስ በል","እንሂድ"],"a":0},
{"t":"mc","q":"ቀስ በል tells someone to…","o":["slow down","speed up","turn around"],"a":0},
{"t":"note","tag":"The pause button","q":"ቆይ","body":"<p><b>ቆይ</b> <i>qoy</i> — <i>wait</i> — one tight syllable that holds taxis, friends and arguments. ቆይ, ወያላ! — wait, conductor!</p>","eg":[["ቆይ","qoy","wait"]]},
{"t":"li","q":"Which one do you hear?","say":"ቆይ","o":["ቆይ","ቀስ በል"],"a":0},
{"t":"mc","q":"ቆይ means…","o":["wait","hurry","stop forever"],"a":0}
]},
{"id":"am_t7_2","title":"Hearing the go-words","step":"recognize","meta":"Momentum by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ቀስ በል","o":["ቀስ በል","ቆይ","እንሂድ"],"a":0},
{"t":"mc","q":"What does ቆይ mean?","o":["wait","go","slow"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንሂድ","o":["እንሂድ","ቀስ በል","ቆይ"],"a":0},
{"t":"mc","q":"Which one means slow down?","o":["ቀስ በል","ቆይ","እንሂድ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቆይ","o":["ቆይ","እንሂድ","ቀስ በል"],"a":0},
{"t":"mc","q":"እንሂድ and እንብላ share the in- of…","o":["let us","I will","you all"],"a":0}
]},
{"id":"am_t7_3","title":"Building the go-words","step":"build","meta":"Momentum, managed","vocab":[],"ex":[
{"t":"wb","q":"Build: let us go to the market","a":["ወደ","ገበያ","እንሂድ"],"pool":["ወደ","ገበያ","እንሂድ","ቆይ"]},
{"t":"mc","q":"Pick: wait","o":["ቆይ","ቀስ በል","ና"],"a":0},
{"t":"wb","q":"Build: slow down (to a man)","a":["ቀስ","በል"],"pool":["ቀስ","በል","ቆይ"]},
{"t":"mc","q":"Pick: let us go","o":["እንሂድ","እንብላ","እሄዳለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እንሂድ","o":["እንሂድ","ቆይ","ቀስ በል"],"a":0}
]},
{"id":"am_t7_4","title":"The go-words in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እንሂድ","let us go"],["ቀስ በል","slow down"],["ቆይ","wait"]]},
{"t":"li","q":"Which one do you hear?","say":"ቆይ","o":["ቆይ","ቀስ በል","እንሂድ"],"a":0},
{"t":"match","q":"Match the moment to the word","pairs":[["the bajaj takes a corner too fast","ቀስ በል"],["the taksi starts to leave","ቆይ"]]},
{"t":"mc","q":"Friends, coffee done, market waiting: …","o":["እንሂድ!","ቆይ!","ጠፋሁ!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቀስ በል","o":["ቀስ በል","እንሂድ","ቆይ"],"a":0}
]},
{"id":"am_t7_5","title":"Checkpoint: Zone 7 complete","step":"checkpoint","meta":"Getting around — show it all","vocab":[],"ex":[
{"t":"mc","q":"እንሂድ means…","o":["let us go","I am going","go!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቀስ በል","o":["ቀስ በል","ቆይ","እንሂድ"],"a":0},
{"t":"mc","q":"Review — the shout that stops the minibus…","o":["ወራጅ አለ!","ቀስ በል!","እንሂድ!"],"a":0},
{"t":"mc","q":"Review — ወዴት ትሄዳለህ? asks a man…","o":["where he is going","where he is from","when he leaves"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ጠፋሁ","o":["ጠፋሁ","እርዳኝ","ቆይ"],"a":0},
{"t":"mc","q":"Review — the three-wheeler is the…","o":["ባጃጅ","ታክሲ","ወያላ"],"a":0},
{"t":"mc","q":"Review — ቅርብ means…","o":["near","far","fast"],"a":0}
]},

/* ---------- m1 · Money ---------- */
{"id":"am_m1","title":"Money","step":"learn","meta":"Birr, genzeb — what the market runs on","vocab":[["ብር","birr","birr (the currency)"],["ገንዘብ","genzeb","money"],["ዋጋ","waga","price"],["ሳንቲም","santim","coin · cent"]],"ex":[
{"t":"note","tag":"The currency","q":"ብር and ገንዘብ","body":"<p><b>ብር</b> <i>birr</i> — Ethiopia&rsquo;s currency, literally <i>silver</i>. <b>ገንዘብ</b> <i>genzeb</i> — <i>money</i> in general. Ten birr, a pocket of genzeb.</p>","eg":[["ብር","birr","birr (the currency)"],["ገንዘብ","genzeb","money"]]},
{"t":"li","q":"Which one do you hear?","say":"ብር","o":["ብር","ገንዘብ"],"a":0},
{"t":"mc","q":"ብር literally means…","o":["silver","gold","paper"],"a":0},
{"t":"note","tag":"The number on the tag","q":"ዋጋ","body":"<p><b>ዋጋ</b> <i>waga</i> — <i>price</i>, also <i>worth</i>. The word every negotiation orbits.</p>","eg":[["ዋጋ","waga","price"]]},
{"t":"li","q":"Which one do you hear?","say":"ዋጋ","o":["ዋጋ","ብር"],"a":0},
{"t":"mc","q":"ዋጋ means…","o":["price","tax","weight"],"a":0},
{"t":"note","tag":"The small stuff","q":"ሳንቲም","body":"<p><b>ሳንቲም</b> <i>santim</i> — <i>coin, cent</i> (from centime). Mostly historical now — prices live in whole birr — but the word survives in change-counting and old sayings.</p>","eg":[["ሳንቲም","santim","coin · cent"]]},
{"t":"li","q":"Which one do you hear?","say":"ሳንቲም","o":["ሳንቲም","ዋጋ"],"a":0},
{"t":"mc","q":"ሳንቲም came from the French word…","o":["centime","sentiment","centre"],"a":0}
]},
{"id":"am_m1_2","title":"Hearing the money","step":"recognize","meta":"Currency by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ገንዘብ","o":["ገንዘብ","ብር","ዋጋ"],"a":0},
{"t":"mc","q":"What does ገንዘብ mean?","o":["money","price","bank"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዋጋ","o":["ዋጋ","ሳንቲም","ገንዘብ"],"a":0},
{"t":"mc","q":"Which one is the currency of Ethiopia?","o":["ብር","ሳንቲም","ዋጋ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ብር","o":["ብር","ዋጋ","ሳንቲም"],"a":0},
{"t":"mc","q":"አስር ብር means…","o":["ten birr","one coin","big money"],"a":0}
]},
{"id":"am_m1_3","title":"Building the money","step":"build","meta":"Count the notes","vocab":[],"ex":[
{"t":"wb","q":"Build: ten birr","a":["አስር","ብር"],"pool":["አስር","ብር","ዋጋ"]},
{"t":"mc","q":"Pick the word for price","o":["ዋጋ","ብር","ገንዘብ"],"a":0},
{"t":"wb","q":"Build: five birr","a":["አምስት","ብር"],"pool":["አምስት","ብር","ሳንቲም"]},
{"t":"mc","q":"Pick the word for money","o":["ገንዘብ","ብር","ዋጋ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ገንዘብ","o":["ገንዘብ","ዋጋ","ብር"],"a":0}
]},
{"id":"am_m1_4","title":"The money in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ብር","birr"],["ገንዘብ","money"],["ዋጋ","price"]]},
{"t":"li","q":"Which one do you hear?","say":"ሳንቲም","o":["ሳንቲም","ብር","ገንዘብ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሳንቲም","coin"],["ገበያ","market"]]},
{"t":"mc","q":"Modern Ethiopian prices live mostly in…","o":["whole birr","santim","dollars"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዋጋ","o":["ዋጋ","ገንዘብ","ሳንቲም"],"a":0}
]},
{"id":"am_m1_5","title":"Checkpoint: the money","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ገንዘብ means…","o":["money","silver","change"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ብር","o":["ብር","ሳንቲም","ዋጋ"],"a":0},
{"t":"mc","q":"Which one means price?","o":["ዋጋ","ብር","ገንዘብ"],"a":0},
{"t":"mc","q":"Review — እንሂድ means…","o":["let us go","let us eat","let us buy"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሳንቲም","o":["ሳንቲም","ገንዘብ","ብር"],"a":0}
]},

/* ---------- m2 · How much is it? ---------- */
{"id":"am_m2","title":"How much is it?","step":"learn","meta":"Sint new — the question you trained for","vocab":[["ስንት ነው?","sint new?","how much is it?"],["ይህ ስንት ነው?","yih sint new?","how much is this?"],["መልስ","mels","change (money back)"]],"ex":[
{"t":"note","tag":"Sint returns","q":"ስንት ነው?","body":"<p>The sint that asked the time now asks the price: <b>ስንት ነው?</b> <i>sint new?</i> — <i>how much is it?</i> One question word, two of life&rsquo;s great mysteries.</p>","eg":[["ስንት ነው?","sint new?","how much is it?"]]},
{"t":"li","q":"Which one do you hear?","say":"ስንት ነው?","o":["ስንት ነው?","ስንት ሰዓት ነው?"],"a":0},
{"t":"mc","q":"ስንት ነው? asks…","o":["how much is it?","what time is it?","how far is it?"],"a":0},
{"t":"note","tag":"Point first","q":"ይህ ስንት ነው?","body":"<p>Add your pointing word: <b>ይህ ስንት ነው?</b> <i>yih sint new?</i> — <i>how much is THIS?</i> No vocabulary required on the far side of the pointing finger.</p>","eg":[["ይህ ስንት ነው?","yih sint new?","how much is this?"]]},
{"t":"li","q":"Which one do you hear?","say":"ይህ ስንት ነው?","o":["ይህ ስንት ነው?","ስንት ነው?"],"a":0},
{"t":"mc","q":"ይህ ስንት ነው? means…","o":["how much is this?","what is this?","is this mine?"],"a":0},
{"t":"note","tag":"What comes back","q":"መልስ","body":"<p><b>መልስ</b> <i>mels</i> — <i>change</i>, literally <i>a return</i> (the same word answers questions and returns money — both come back to you).</p>","eg":[["መልስ","mels","change (money back)"]]},
{"t":"li","q":"Which one do you hear?","say":"መልስ","o":["መልስ","ዋጋ"],"a":0},
{"t":"mc","q":"መልስ at the till means…","o":["change","receipt","discount"],"a":0}
]},
{"id":"am_m2_2","title":"Hearing the price question","step":"recognize","meta":"Till talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ይህ ስንት ነው?","o":["ይህ ስንት ነው?","ስንት ነው?","መልስ"],"a":0},
{"t":"mc","q":"What does መልስ mean?","o":["change","price","coin"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስንት ነው?","o":["ስንት ነው?","ይህ ስንት ነው?","ዋጋ"],"a":0},
{"t":"mc","q":"Which one points AND asks?","o":["ይህ ስንት ነው?","ስንት ነው?","የት ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መልስ","o":["መልስ","ስንት ነው?","ብር"],"a":0},
{"t":"mc","q":"Sint asks prices here and asked … in Zone 4","o":["the time","the way","names"],"a":0}
]},
{"id":"am_m2_3","title":"Building the price question","step":"build","meta":"Ask like a shopper","vocab":[],"ex":[
{"t":"wb","q":"Build: how much is it?","a":["ስንት","ነው?"],"pool":["ስንት","ነው?","ይህ"]},
{"t":"mc","q":"Pick the word for change","o":["መልስ","ዋጋ","ብር"],"a":0},
{"t":"wb","q":"Build: how much is this?","a":["ይህ","ስንት","ነው?"],"pool":["ይህ","ስንት","ነው?","መልስ"]},
{"t":"wb","q":"Build: how much is the bread? (dabo sint new?)","a":["ዳቦ","ስንት","ነው?"],"pool":["ዳቦ","ስንት","ነው?","ብር"]},
{"t":"li","q":"Which one do you hear?","say":"ስንት ነው?","o":["ስንት ነው?","መልስ","ይህ ስንት ነው?"],"a":0}
]},
{"id":"am_m2_4","title":"The price question in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ስንት ነው?","how much is it?"],["ይህ ስንት ነው?","how much is this?"],["መልስ","change"]]},
{"t":"li","q":"Which one do you hear?","say":"ይህ ስንት ነው?","o":["ይህ ስንት ነው?","መልስ","ስንት ነው?"],"a":0},
{"t":"match","q":"Match the question to its zone","pairs":[["ስንት ሰዓት ነው?","time"],["ስንት ነው?","price"]]},
{"t":"mc","q":"Holding up a scarf at Merkato, you ask…","o":["ይህ ስንት ነው?","ማን ነው?","የት ነው?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መልስ","o":["መልስ","ይህ ስንት ነው?","ስንት ነው?"],"a":0}
]},
{"id":"am_m2_5","title":"Checkpoint: the price question","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ይህ ስንት ነው? means…","o":["how much is this?","what is that?","how many are there?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስንት ነው?","o":["ስንት ነው?","ይህ ስንት ነው?","ዋጋ"],"a":0},
{"t":"mc","q":"Which one means change?","o":["መልስ","ዋጋ","ሳንቲም"],"a":0},
{"t":"mc","q":"Review — ብር literally means…","o":["silver","money","coin"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይህ ስንት ነው?","o":["ይህ ስንት ነው?","ስንት ነው?","መልስ"],"a":0}
]},

/* ---------- m3 · I want, I buy ---------- */
{"id":"am_m3","title":"I want, I buy","step":"learn","meta":"Ifeligalehu — the engine of every purchase","vocab":[["እፈልጋለሁ","ifeligalehu","I want"],["እገዛለሁ","igezalehu","I buy"],["ውሃ እፈልጋለሁ","wiha ifeligalehu","I want water"]],"ex":[
{"t":"note","tag":"The wanting verb","q":"እፈልጋለሁ","body":"<p><b>እፈልጋለሁ</b> <i>ifeligalehu</i> — <i>I want</i> — may be the hardest-working verb in your Amharic. Name the thing, then want it: <b>ውሃ እፈልጋለሁ</b> <i>wiha ifeligalehu</i> — <i>I want water</i>. Thing first, verb last — the Amharic way.</p>","eg":[["እፈልጋለሁ","ifeligalehu","I want"],["ውሃ እፈልጋለሁ","wiha ifeligalehu","I want water"]]},
{"t":"li","q":"Which one do you hear?","say":"እፈልጋለሁ","o":["እፈልጋለሁ","ውሃ እፈልጋለሁ"],"a":0},
{"t":"mc","q":"ውሃ እፈልጋለሁ means…","o":["I want water","water is wanted","give me water"],"a":0},
{"t":"note","tag":"The buying verb","q":"እገዛለሁ","body":"<p><b>እገዛለሁ</b> <i>igezalehu</i> — <i>I buy</i>. ዳቦ እገዛለሁ — I am buying bread. Wanting and buying: the whole shopper&rsquo;s toolkit in two -alehu verbs.</p>","eg":[["እገዛለሁ","igezalehu","I buy"]]},
{"t":"li","q":"Want or buy — which do you hear?","say":"እገዛለሁ","o":["እገዛለሁ","እፈልጋለሁ"],"a":0},
{"t":"mc","q":"እገዛለሁ means…","o":["I buy","I sell","I want"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውሃ እፈልጋለሁ","o":["ውሃ እፈልጋለሁ","እገዛለሁ"],"a":0},
{"t":"mc","q":"ዳቦ እገዛለሁ means…","o":["I am buying bread","the bread is cheap","I baked bread"],"a":0}
]},
{"id":"am_m3_2","title":"Hearing the wanting","step":"recognize","meta":"Wants and buys by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እገዛለሁ","o":["እገዛለሁ","እፈልጋለሁ","ውሃ እፈልጋለሁ"],"a":0},
{"t":"mc","q":"What does እፈልጋለሁ mean?","o":["I want","I buy","I need money"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውሃ እፈልጋለሁ","o":["ውሃ እፈልጋለሁ","እፈልጋለሁ","እገዛለሁ"],"a":0},
{"t":"mc","q":"Which one means I buy?","o":["እገዛለሁ","እፈልጋለሁ","እበላለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እፈልጋለሁ","o":["እፈልጋለሁ","እገዛለሁ","ውሃ እፈልጋለሁ"],"a":0},
{"t":"mc","q":"The thing you want goes…","o":["before the verb","after the verb","anywhere"],"a":0}
]},
{"id":"am_m3_3","title":"Building the wanting","step":"build","meta":"Name it, want it","vocab":[],"ex":[
{"t":"wb","q":"Build: I want water","a":["ውሃ","እፈልጋለሁ"],"pool":["ውሃ","እፈልጋለሁ","እገዛለሁ"]},
{"t":"mc","q":"Pick: I buy","o":["እገዛለሁ","እፈልጋለሁ","እሄዳለሁ"],"a":0},
{"t":"wb","q":"Build: I want coffee","a":["ቡና","እፈልጋለሁ"],"pool":["ቡና","እፈልጋለሁ","ውሃ"]},
{"t":"wb","q":"Build: I am buying bread","a":["ዳቦ","እገዛለሁ"],"pool":["ዳቦ","እገዛለሁ","እፈልጋለሁ"]},
{"t":"li","q":"Which one do you hear?","say":"እገዛለሁ","o":["እገዛለሁ","ውሃ እፈልጋለሁ","እፈልጋለሁ"],"a":0}
]},
{"id":"am_m3_4","title":"The wanting in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እፈልጋለሁ","I want"],["እገዛለሁ","I buy"],["ውሃ እፈልጋለሁ","I want water"]]},
{"t":"li","q":"Which one do you hear?","say":"እፈልጋለሁ","o":["እፈልጋለሁ","እገዛለሁ","ውሃ እፈልጋለሁ"],"a":0},
{"t":"match","q":"Match the frame","pairs":[["ቡና እፈልጋለሁ","I want coffee"],["ዳቦ እገዛለሁ","I am buying bread"]]},
{"t":"mc","q":"At the suk, your all-purpose opener is a noun plus…","o":["እፈልጋለሁ","ነው","አለ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውሃ እፈልጋለሁ","o":["ውሃ እፈልጋለሁ","እፈልጋለሁ","እገዛለሁ"],"a":0}
]},
{"id":"am_m3_5","title":"Checkpoint: the wanting","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"እገዛለሁ means…","o":["I buy","I want","I take"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እፈልጋለሁ","o":["እፈልጋለሁ","ውሃ እፈልጋለሁ","እገዛለሁ"],"a":0},
{"t":"mc","q":"ውሃ እፈልጋለሁ means…","o":["I want water","I bought water","water, please"],"a":0},
{"t":"mc","q":"Review — መልስ means…","o":["change","price","market"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውሃ እፈልጋለሁ","o":["ውሃ እፈልጋለሁ","እገዛለሁ","እፈልጋለሁ"],"a":0}
]},

/* ---------- m4 · Expensive, cheap — and the magic word ---------- */
{"id":"am_m4","title":"Expensive, cheap — and the magic word","step":"learn","meta":"Wid new — then qenes and smile","vocab":[["ውድ ነው","wid new","it is expensive"],["ርካሽ ነው","rikash new","it is cheap"],["ቀንስ","qenes","reduce it! (bargaining)"],["በጣም ውድ ነው","betam wid new","it is very expensive"]],"ex":[
{"t":"note","tag":"The shopper&rsquo;s verdicts","q":"ውድ ነው and ርካሽ ነው","body":"<p><b>ውድ ነው</b> <i>wid new</i> — <i>it is expensive</i> (wid also means <i>dear, beloved</i> — expensive things and dear people share a word). <b>ርካሽ ነው</b> <i>rikash new</i> — <i>it is cheap</i>.</p>","eg":[["ውድ ነው","wid new","it is expensive"],["ርካሽ ነው","rikash new","it is cheap"]]},
{"t":"li","q":"Expensive or cheap — which do you hear?","say":"ውድ ነው","o":["ውድ ነው","ርካሽ ነው"],"a":0},
{"t":"mc","q":"ውድ also means…","o":["dear · beloved","broken","rare"],"a":0},
{"t":"note","tag":"Turning the dial","q":"በጣም ውድ ነው","body":"<p>Amplify with your betam: <b>በጣም ውድ ነው</b> <i>betam wid new</i> — <i>it is VERY expensive</i> — best delivered with theatrical disbelief. Bargaining at the gebeya is expected theater; at the suk, prices are mostly fixed.</p>","eg":[["በጣም ውድ ነው","betam wid new","it is very expensive"]]},
{"t":"li","q":"Which one do you hear?","say":"በጣም ውድ ነው","o":["በጣም ውድ ነው","ውድ ነው"],"a":0},
{"t":"mc","q":"Bargaining is expected at…","o":["the gebeya, not the suk","the suk, not the gebeya","banks"],"a":0},
{"t":"note","tag":"The magic word","q":"ቀንስ","body":"<p><b>ቀንስ</b> <i>qenes</i> — <i>reduce it!</i> — the one-word engine of every negotiation, delivered warmly. ውድ ነው, ቀንስ! — it is expensive, come down! The seller expects it; the dance is the point.</p>","eg":[["ቀንስ","qenes","reduce it! (bargaining)"]]},
{"t":"li","q":"Which one do you hear?","say":"ቀንስ","o":["ቀንስ","ርካሽ ነው"],"a":0},
{"t":"mc","q":"ቀንስ asks the seller to…","o":["lower the price","wrap it up","weigh it"],"a":0}
]},
{"id":"am_m4_2","title":"Hearing the verdicts","step":"recognize","meta":"Price feelings by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ርካሽ ነው","o":["ርካሽ ነው","ውድ ነው","ቀንስ"],"a":0},
{"t":"mc","q":"What does ቀንስ mean?","o":["reduce it!","wrap it!","keep it!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውድ ነው","o":["ውድ ነው","በጣም ውድ ነው","ርካሽ ነው"],"a":0},
{"t":"mc","q":"Which one means it is cheap?","o":["ርካሽ ነው","ውድ ነው","ቀንስ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በጣም ውድ ነው","o":["በጣም ውድ ነው","ውድ ነው","ቀንስ"],"a":0},
{"t":"mc","q":"The bargaining dance is…","o":["expected theater","rude","rare"],"a":0}
]},
{"id":"am_m4_3","title":"Building the verdicts","step":"build","meta":"Judge, then negotiate","vocab":[],"ex":[
{"t":"wb","q":"Build: it is very expensive","a":["በጣም","ውድ","ነው"],"pool":["በጣም","ውድ","ነው","ቀንስ"]},
{"t":"mc","q":"Pick the magic bargaining word","o":["ቀንስ","መልስ","ዋጋ"],"a":0},
{"t":"wb","q":"Build: it is cheap","a":["ርካሽ","ነው"],"pool":["ርካሽ","ነው","ውድ"]},
{"t":"wb","q":"Build: it is expensive — reduce it!","a":["ውድ","ነው","ቀንስ"],"pool":["ውድ","ነው","ቀንስ","ርካሽ"]},
{"t":"li","q":"Which one do you hear?","say":"ርካሽ ነው","o":["ርካሽ ነው","ቀንስ","ውድ ነው"],"a":0}
]},
{"id":"am_m4_4","title":"The verdicts in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ውድ ነው","expensive"],["ርካሽ ነው","cheap"],["ቀንስ","reduce it!"]]},
{"t":"li","q":"Which one do you hear?","say":"ቀንስ","o":["ቀንስ","ውድ ነው","ርካሽ ነው"],"a":0},
{"t":"match","q":"Match the place to the pricing","pairs":[["ገበያ","negotiable"],["ሱቅ","mostly fixed"]]},
{"t":"mc","q":"The full Merkato script: ይህ ስንት ነው? … በጣም ውድ ነው! …","o":["ቀንስ!","መልስ!","አለ!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውድ ነው","o":["ውድ ነው","ርካሽ ነው","በጣም ውድ ነው"],"a":0}
]},
{"id":"am_m4_5","title":"Checkpoint: the verdicts","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ቀንስ means…","o":["reduce it!","take it!","count it!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቀንስ","o":["ቀንስ","ውድ ነው","ርካሽ ነው"],"a":0},
{"t":"mc","q":"Which one means it is expensive?","o":["ውድ ነው","ርካሽ ነው","ዋጋ ነው"],"a":0},
{"t":"mc","q":"Review — እፈልጋለሁ means…","o":["I want","I buy","I have"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በጣም ውድ ነው","o":["በጣም ውድ ነው","ርካሽ ነው","ቀንስ"],"a":0}
]},

/* ---------- m5 · The shopping list ---------- */
{"id":"am_m5","title":"The shopping list","step":"learn","meta":"Sugar, salt, oil, flour — the suk basics","vocab":[["ስኳር","sikwar","sugar"],["ጨው","chew","salt"],["ዘይት","zeyit","oil"],["ዱቄት","duket","flour"]],"ex":[
{"t":"note","tag":"Sweet and salty","q":"ስኳር and ጨው","body":"<p><b>ስኳር</b> <i>sikwar</i> — <i>sugar</i> — and <b>ጨው</b> <i>chew</i> — <i>salt</i> — with the tight ጨ leading. The buna needs one; the wet needs the other.</p>","eg":[["ስኳር","sikwar","sugar"],["ጨው","chew","salt"]]},
{"t":"li","q":"Which one do you hear?","say":"ስኳር","o":["ስኳር","ጨው"],"a":0},
{"t":"mc","q":"ጨው means…","o":["salt","sugar","spice"],"a":0},
{"t":"note","tag":"The kitchen pair","q":"ዘይት and ዱቄት","body":"<p><b>ዘይት</b> <i>zeyit</i> — <i>cooking oil</i> — and <b>ዱቄት</b> <i>duket</i> — <i>flour</i>, the sack that becomes dabo and, as teff flour, injera itself.</p>","eg":[["ዘይት","zeyit","oil"],["ዱቄት","duket","flour"]]},
{"t":"li","q":"Which one do you hear?","say":"ዘይት","o":["ዘይት","ዱቄት"],"a":0},
{"t":"mc","q":"ዱቄት means…","o":["flour","oil","rice"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጨው","o":["ጨው","ስኳር"],"a":0},
{"t":"mc","q":"Injera begins as a flour of…","o":["teff","wheat","corn"],"a":0}
]},
{"id":"am_m5_2","title":"Hearing the list","step":"recognize","meta":"Staples by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ዱቄት","o":["ዱቄት","ዘይት","ስኳር"],"a":0},
{"t":"mc","q":"What does ስኳር mean?","o":["sugar","salt","flour"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጨው","o":["ጨው","ዱቄት","ዘይት"],"a":0},
{"t":"mc","q":"Which one means oil?","o":["ዘይት","ጨው","ዱቄት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስኳር","o":["ስኳር","ጨው","ዱቄት"],"a":0},
{"t":"mc","q":"The tight consonant opens…","o":["ጨው","ስኳር","ዘይት"],"a":0}
]},
{"id":"am_m5_3","title":"Building the list","step":"build","meta":"Fill the basket","vocab":[],"ex":[
{"t":"wb","q":"Build: I want sugar","a":["ስኳር","እፈልጋለሁ"],"pool":["ስኳር","እፈልጋለሁ","ጨው"]},
{"t":"mc","q":"Pick the word for salt","o":["ጨው","ስኳር","ዘይት"],"a":0},
{"t":"wb","q":"Build: is there oil? (zeyit alle?)","a":["ዘይት","አለ?"],"pool":["ዘይት","አለ?","የለም"]},
{"t":"mc","q":"Pick the word for flour","o":["ዱቄት","ዘይት","ስኳር"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዘይት","o":["ዘይት","ስኳር","ጨው"],"a":0}
]},
{"id":"am_m5_4","title":"The list in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ስኳር","sugar"],["ጨው","salt"],["ዘይት","oil"]]},
{"t":"li","q":"Which one do you hear?","say":"ዱቄት","o":["ዱቄት","ጨው","ስኳር"],"a":0},
{"t":"match","q":"Match the staple to the dish","pairs":[["ዱቄት","ዳቦ"],["ስኳር","ቡና"]]},
{"t":"mc","q":"ጨው አለ? — የለም. The shop is out of…","o":["salt","sugar","oil"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጨው","o":["ጨው","ዘይት","ዱቄት"],"a":0}
]},
{"id":"am_m5_5","title":"Checkpoint: the list","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ዘይት means…","o":["oil","salt","butter"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስኳር","o":["ስኳር","ዱቄት","ጨው"],"a":0},
{"t":"mc","q":"Which one means flour?","o":["ዱቄት","ዘይት","ስኳር"],"a":0},
{"t":"mc","q":"Review — ቀንስ means…","o":["reduce it!","it is cheap","wrap it"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዱቄት","o":["ዱቄት","ስኳር","ዘይት"],"a":0}
]},

/* ---------- m6 · At the counter ---------- */
{"id":"am_m6","title":"At the counter","step":"learn","meta":"Yistugn — the polite give-me that opens shops","vocab":[["ይስጡኝ","yistugn","please give me (polite)"],["ስኳር አለ?","sikwar alle?","is there sugar?"],["አንድ ኪሎ","and kilo","one kilo"]],"ex":[
{"t":"note","tag":"The counter verb","q":"ይስጡኝ","body":"<p><b>ይስጡኝ</b> <i>yistugn</i> — <i>please give me</i> — the polite request that runs every counter in Ethiopia. ስኳር ይስጡኝ — please give me sugar. Politeness built into the verb itself, erswo-style.</p>","eg":[["ይስጡኝ","yistugn","please give me (polite)"]]},
{"t":"li","q":"Which one do you hear?","say":"ይስጡኝ","o":["ይስጡኝ","እርዳኝ"],"a":0},
{"t":"mc","q":"ይስጡኝ politely asks someone to…","o":["give you something","help you","wait"],"a":0},
{"t":"note","tag":"Check first","q":"ስኳር አለ?","body":"<p>Your alle pair earns money now: <b>ስኳር አለ?</b> <i>sikwar alle?</i> — <i>is there sugar?</i> The answer is አለ or የለም, and the whole economy runs on the exchange.</p>","eg":[["ስኳር አለ?","sikwar alle?","is there sugar?"]]},
{"t":"li","q":"Which one do you hear?","say":"ስኳር አለ?","o":["ስኳር አለ?","ይስጡኝ"],"a":0},
{"t":"mc","q":"ስኳር አለ? asks…","o":["is there sugar?","how much is sugar?","give me sugar"],"a":0},
{"t":"note","tag":"How much of it","q":"አንድ ኪሎ","body":"<p><b>አንድ ኪሎ</b> <i>and kilo</i> — <i>one kilo</i> — your Zone 4 numbers meeting the scale. አንድ ኪሎ ስኳር ይስጡኝ — one kilo of sugar, please.</p>","eg":[["አንድ ኪሎ","and kilo","one kilo"]]},
{"t":"li","q":"Which one do you hear?","say":"አንድ ኪሎ","o":["አንድ ኪሎ","ስኳር አለ?"],"a":0},
{"t":"mc","q":"አንድ ኪሎ means…","o":["one kilo","one bag","one birr"],"a":0}
]},
{"id":"am_m6_2","title":"Hearing the counter","step":"recognize","meta":"Requests by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ስኳር አለ?","o":["ስኳር አለ?","አንድ ኪሎ","ይስጡኝ"],"a":0},
{"t":"mc","q":"What does ይስጡኝ mean?","o":["please give me","please help me","please wait"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አንድ ኪሎ","o":["አንድ ኪሎ","ይስጡኝ","ስኳር አለ?"],"a":0},
{"t":"mc","q":"The yes-answer to ስኳር አለ? is…","o":["አለ","የለም","ቀንስ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይስጡኝ","o":["ይስጡኝ","ስኳር አለ?","አንድ ኪሎ"],"a":0},
{"t":"mc","q":"The politeness in ይስጡኝ comes from…","o":["the erswo-style verb form","saying it twice","a bow"],"a":0}
]},
{"id":"am_m6_3","title":"Building the counter","step":"build","meta":"The whole purchase","vocab":[],"ex":[
{"t":"wb","q":"Build: is there sugar?","a":["ስኳር","አለ?"],"pool":["ስኳር","አለ?","ይስጡኝ"]},
{"t":"mc","q":"Pick: please give me","o":["ይስጡኝ","እርዳኝ","ቀንስ"],"a":0},
{"t":"wb","q":"Build: one kilo of sugar, please","a":["አንድ","ኪሎ","ስኳር","ይስጡኝ"],"pool":["አንድ","ኪሎ","ስኳር","ይስጡኝ","አለ?"]},
{"t":"wb","q":"Build: please give me salt","a":["ጨው","ይስጡኝ"],"pool":["ጨው","ይስጡኝ","ስኳር"]},
{"t":"li","q":"Which one do you hear?","say":"ስኳር አለ?","o":["ስኳር አለ?","ይስጡኝ","አንድ ኪሎ"],"a":0}
]},
{"id":"am_m6_4","title":"The counter in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ይስጡኝ","please give me"],["ስኳር አለ?","is there sugar?"],["አንድ ኪሎ","one kilo"]]},
{"t":"li","q":"Which one do you hear?","say":"ይስጡኝ","o":["ይስጡኝ","አንድ ኪሎ","ስኳር አለ?"],"a":0},
{"t":"match","q":"Match the step to the phrase","pairs":[["check availability","ስኳር አለ?"],["make the request","ይስጡኝ"]]},
{"t":"mc","q":"The complete counter visit, in order…","o":["ስኳር አለ? → አንድ ኪሎ ይስጡኝ → አመሰግናለሁ","ቀንስ → የለም → ቻው","ውድ ነው → አለ → እንሂድ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አንድ ኪሎ","o":["አንድ ኪሎ","ስኳር አለ?","ይስጡኝ"],"a":0}
]},
{"id":"am_m6_5","title":"Checkpoint: the counter","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ይስጡኝ means…","o":["please give me","I will take it","hand it over"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አንድ ኪሎ","o":["አንድ ኪሎ","ይስጡኝ","ስኳር አለ?"],"a":0},
{"t":"mc","q":"ስኳር አለ? uses which little giant from Zone 6?","o":["አለ","ነው","ውስጥ"],"a":0},
{"t":"mc","q":"Review — which one means salt?","o":["ጨው","ስኳር","ዘይት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይስጡኝ","o":["ይስጡኝ","ስኳር አለ?","አንድ ኪሎ"],"a":0}
]},

/* ---------- m7 · The price numbers ---------- */
{"id":"am_m7","title":"The price numbers","step":"learn","meta":"Haya, hamsa, meto — where prices actually live","vocab":[["ሃያ","haya","twenty"],["ሃምሳ","hamsa","fifty"],["መቶ","meto","hundred"]],"ex":[
{"t":"note","tag":"Beyond ten","q":"ሃያ and ሃምሳ","body":"<p>Real prices need bigger numbers: <b>ሃያ</b> <i>haya</i> — <i>twenty</i> — and <b>ሃምሳ</b> <i>hamsa</i> — <i>fifty</i>. ሃምሳ ብር — fifty birr — is the shape of most everyday price answers.</p>","eg":[["ሃያ","haya","twenty"],["ሃምሳ","hamsa","fifty"]]},
{"t":"li","q":"Twenty or fifty — which do you hear?","say":"ሃያ","o":["ሃያ","ሃምሳ"],"a":0},
{"t":"mc","q":"ሃምሳ means…","o":["fifty","twenty","forty"],"a":0},
{"t":"note","tag":"The round one","q":"መቶ","body":"<p><b>መቶ</b> <i>meto</i> — <i>one hundred</i>. መቶ ብር, the green note that anchors the wallet. From and to meto, you can now follow any price in the country.</p>","eg":[["መቶ","meto","hundred"]]},
{"t":"li","q":"Which one do you hear?","say":"መቶ","o":["መቶ","ሃምሳ"],"a":0},
{"t":"mc","q":"መቶ ብር means…","o":["one hundred birr","fifty birr","big money"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሃምሳ","o":["ሃምሳ","ሃያ"],"a":0},
{"t":"mc","q":"ሃያ ብር means…","o":["twenty birr","two birr","ten birr"],"a":0}
]},
{"id":"am_m7_2","title":"Hearing the price numbers","step":"recognize","meta":"Big numbers by ear","vocab":[],"ex":[
{"t":"li","q":"Which number do you hear?","say":"ሃምሳ","o":["ሃምሳ","መቶ","ሃያ"],"a":0},
{"t":"mc","q":"What does ሃያ mean?","o":["twenty","fifty","hundred"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"መቶ","o":["መቶ","ሃያ","ሃምሳ"],"a":0},
{"t":"mc","q":"Which one is one hundred?","o":["መቶ","ሃምሳ","አስር"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ሃያ","o":["ሃያ","ሃምሳ","መቶ"],"a":0},
{"t":"mc","q":"Most everyday price answers arrive shaped like…","o":["ሃምሳ ብር","አንድ ሳንቲም","መቶ ኪሎ"],"a":0}
]},
{"id":"am_m7_3","title":"Building the price numbers","step":"build","meta":"Prices out loud","vocab":[],"ex":[
{"t":"wb","q":"Build: fifty birr","a":["ሃምሳ","ብር"],"pool":["ሃምሳ","ብር","መቶ"]},
{"t":"mc","q":"Pick: one hundred","o":["መቶ","ሃያ","ሃምሳ"],"a":0},
{"t":"wb","q":"Build: twenty birr","a":["ሃያ","ብር"],"pool":["ሃያ","ብር","ሃምሳ"]},
{"t":"wb","q":"Build: one hundred birr","a":["መቶ","ብር"],"pool":["መቶ","ብር","ሃያ"]},
{"t":"li","q":"Which number do you hear?","say":"መቶ","o":["መቶ","ሃምሳ","ሃያ"],"a":0}
]},
{"id":"am_m7_4","title":"The price numbers in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the number to its value","pairs":[["ሃያ","20"],["ሃምሳ","50"],["መቶ","100"]]},
{"t":"li","q":"Which number do you hear?","say":"ሃያ","o":["ሃያ","መቶ","ሃምሳ"],"a":0},
{"t":"match","q":"Match the exchange","pairs":[["ይህ ስንት ነው?","ሃምሳ ብር"],["ውድ ነው!","ቀንስ!"]]},
{"t":"mc","q":"The scarf costs ሃምሳ ብር; you offer ሃያ; you might settle at…","o":["a number between","መቶ","ሳንቲም"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ሃምሳ","o":["ሃምሳ","ሃያ","መቶ"],"a":0}
]},
{"id":"am_m7_5","title":"Checkpoint: Zone 8 complete","step":"checkpoint","meta":"Shopping and money — show it all","vocab":[],"ex":[
{"t":"mc","q":"መቶ means…","o":["hundred","fifty","thousand"],"a":0},
{"t":"li","q":"Which number do you hear?","say":"ሃምሳ","o":["ሃምሳ","መቶ","ሃያ"],"a":0},
{"t":"mc","q":"Review — ይህ ስንት ነው? asks…","o":["how much is this?","what is this?","is this cheap?"],"a":0},
{"t":"mc","q":"Review — the polite give-me is…","o":["ይስጡኝ","እርዳኝ","ቀንስ"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ቀንስ","o":["ቀንስ","መልስ","ዋጋ"],"a":0},
{"t":"mc","q":"Review — bargaining belongs at…","o":["the gebeya","the suk","the bank"],"a":0},
{"t":"mc","q":"Review — እገዛለሁ means…","o":["I buy","I want","I pay"],"a":0}
]},

/* ---------- w1 · Work ---------- */
{"id":"am_w1","title":"Work","step":"learn","meta":"Sira — and the you-wrap asking where","vocab":[["ስራ","sira","work · job"],["እሰራለሁ","iseralehu","I work"],["የት ትሰራለህ?","yet tiseraleh?","where do you work? (to a man)"]],"ex":[
{"t":"note","tag":"The noun and the verb","q":"ስራ and እሰራለሁ","body":"<p><b>ስራ</b> <i>sira</i> — <i>work, a job</i> — and its verb <b>እሰራለሁ</b> <i>iseralehu</i> — <i>I work</i> (also <i>I make, I do</i> — sira covers all three). The -alehu machine, employed.</p>","eg":[["ስራ","sira","work · job"],["እሰራለሁ","iseralehu","I work"]]},
{"t":"li","q":"Which one do you hear?","say":"ስራ","o":["ስራ","እሰራለሁ"],"a":0},
{"t":"mc","q":"እሰራለሁ means…","o":["I work","work","worker"],"a":0},
{"t":"note","tag":"Asking where","q":"የት ትሰራለህ?","body":"<p>The you-wrap from ትሄዳለህ returns: <b>የት ትሰራለህ?</b> <i>yet tiseraleh?</i> — <i>where do you work?</i> (to a man; to a woman it ends -yalesh). Small talk&rsquo;s second question, right after the greetings.</p>","eg":[["የት ትሰራለህ?","yet tiseraleh?","where do you work? (to a man)"]]},
{"t":"li","q":"Which one do you hear?","say":"የት ትሰራለህ?","o":["የት ትሰራለህ?","እሰራለሁ"],"a":0},
{"t":"mc","q":"የት ትሰራለህ? asks…","o":["where do you work?","where are you going?","what do you do?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እሰራለሁ","o":["እሰራለሁ","ስራ"],"a":0},
{"t":"mc","q":"Beyond work, ስራ also covers…","o":["making and doing","resting","selling"],"a":0}
]},
{"id":"am_w1_2","title":"Hearing the work","step":"recognize","meta":"Work talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እሰራለሁ","o":["እሰራለሁ","ስራ","የት ትሰራለህ?"],"a":0},
{"t":"mc","q":"What does ስራ mean?","o":["work · job","office","worker"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"የት ትሰራለህ?","o":["የት ትሰራለህ?","እሰራለሁ","ስራ"],"a":0},
{"t":"mc","q":"Which one means I work?","o":["እሰራለሁ","ስራ","ትሰራለህ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስራ","o":["ስራ","የት ትሰራለህ?","እሰራለሁ"],"a":0},
{"t":"mc","q":"The ti-…-eh wrap marks…","o":["you (a man)","I","we"],"a":0}
]},
{"id":"am_w1_3","title":"Building the work","step":"build","meta":"Employment in parts","vocab":[],"ex":[
{"t":"wb","q":"Build: where do you work? (to a man)","a":["የት","ትሰራለህ?"],"pool":["የት","ትሰራለህ?","እሰራለሁ"]},
{"t":"mc","q":"Pick: I work","o":["እሰራለሁ","ስራ","ትሰራለህ?"],"a":0},
{"t":"wb","q":"Build: I work in the city","a":["ከተማ","ውስጥ","እሰራለሁ"],"pool":["ከተማ","ውስጥ","እሰራለሁ","ስራ"]},
{"t":"mc","q":"Pick the word for work","o":["ስራ","ሱቅ","ገንዘብ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"የት ትሰራለህ?","o":["የት ትሰራለህ?","ስራ","እሰራለሁ"],"a":0}
]},
{"id":"am_w1_4","title":"The work in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ስራ","work"],["እሰራለሁ","I work"],["የት ትሰራለህ?","where do you work?"]]},
{"t":"li","q":"Which one do you hear?","say":"ስራ","o":["ስራ","እሰራለሁ","የት ትሰራለህ?"],"a":0},
{"t":"match","q":"Match the wrap to the person","pairs":[["እሰራለሁ","I"],["ትሰራለህ","you (man)"]]},
{"t":"mc","q":"Small talk order in Ethiopia: greetings, then usually…","o":["የት ትሰራለህ?","ስንት ነው?","ወራጅ አለ!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እሰራለሁ","o":["እሰራለሁ","የት ትሰራለህ?","ስራ"],"a":0}
]},
{"id":"am_w1_5","title":"Checkpoint: the work","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ስራ means…","o":["work · job","salary","office"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እሰራለሁ","o":["እሰራለሁ","ስራ","የት ትሰራለህ?"],"a":0},
{"t":"mc","q":"Which one asks where do you work?","o":["የት ትሰራለህ?","ወዴት ትሄዳለህ?","ምን ነው?"],"a":0},
{"t":"mc","q":"Review — መቶ means…","o":["hundred","fifty","twenty"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስራ","o":["ስራ","ገንዘብ","ሱቅ"],"a":0}
]},

/* ---------- w2 · Student and teacher ---------- */
{"id":"am_w2","title":"Student and teacher","step":"learn","meta":"Temari, astemari — one root, both sides of the desk","vocab":[["ተማሪ","temari","student"],["አስተማሪ","astemari","teacher"],["ተማሪዎች","temariwoch","students"]],"ex":[
{"t":"note","tag":"One root, two jobs","q":"ተማሪ and አስተማሪ","body":"<p><b>ተማሪ</b> <i>temari</i> — <i>student, learner</i>. Add the little <b>as-</b> — the make-it-happen prefix — and you cross the desk: <b>አስተማሪ</b> <i>astemari</i> — <i>teacher</i>, one-who-makes-learn.</p>","eg":[["ተማሪ","temari","student"],["አስተማሪ","astemari","teacher"]]},
{"t":"li","q":"Student or teacher — which do you hear?","say":"ተማሪ","o":["ተማሪ","አስተማሪ"],"a":0},
{"t":"mc","q":"አስተማሪ literally means…","o":["one who makes learn","head learner","school elder"],"a":0},
{"t":"note","tag":"The plural after vowels","q":"ተማሪዎች","body":"<p>Your -och plural wears a w after vowels: <b>ተማሪዎች</b> <i>temariwoch</i> — <i>students</i>. Same rule you saw in ሰዎች; now you own both shapes.</p>","eg":[["ተማሪዎች","temariwoch","students"]]},
{"t":"li","q":"One or many — which do you hear?","say":"ተማሪዎች","o":["ተማሪዎች","ተማሪ"],"a":0},
{"t":"mc","q":"ተማሪዎች means…","o":["students","teachers","classes"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አስተማሪ","o":["አስተማሪ","ተማሪዎች"],"a":0},
{"t":"mc","q":"After a vowel, -och becomes…","o":["-woch","-yoch","-koch"],"a":0}
]},
{"id":"am_w2_2","title":"Hearing the classroom","step":"recognize","meta":"Desk sides by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"አስተማሪ","o":["አስተማሪ","ተማሪ","ተማሪዎች"],"a":0},
{"t":"mc","q":"What does ተማሪ mean?","o":["student","teacher","school"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተማሪዎች","o":["ተማሪዎች","አስተማሪ","ተማሪ"],"a":0},
{"t":"mc","q":"Which one means teacher?","o":["አስተማሪ","ተማሪ","ተማሪዎች"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተማሪ","o":["ተማሪ","ተማሪዎች","አስተማሪ"],"a":0},
{"t":"mc","q":"The as- prefix turns learn into…","o":["make-learn (teach)","learn again","learn badly"],"a":0}
]},
{"id":"am_w2_3","title":"Building the classroom","step":"build","meta":"Both sides of the desk","vocab":[],"ex":[
{"t":"wb","q":"Build: teacher (as + temari)","a":["አስ","ተማሪ"],"pool":["አስ","ተማሪ","ዎች"]},
{"t":"mc","q":"Pick: students","o":["ተማሪዎች","ተማሪ","አስተማሪ"],"a":0},
{"t":"wb","q":"Build: students (temari + woch)","a":["ተማሪ","ዎች"],"pool":["ተማሪ","ዎች","አስ"]},
{"t":"mc","q":"Pick: student","o":["ተማሪ","አስተማሪ","ተማሪዎች"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተማሪዎች","o":["ተማሪዎች","ተማሪ","አስተማሪ"],"a":0}
]},
{"id":"am_w2_4","title":"The classroom in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ተማሪ","student"],["አስተማሪ","teacher"],["ተማሪዎች","students"]]},
{"t":"li","q":"Which one do you hear?","say":"ተማሪ","o":["ተማሪ","አስተማሪ","ተማሪዎች"],"a":0},
{"t":"match","q":"Match singular to plural","pairs":[["ተማሪ","ተማሪዎች"],["ሰው","ሰዎች"]]},
{"t":"mc","q":"They all meet at the…","o":["ትምህርት ቤት","ማድቤት","ሽንት ቤት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አስተማሪ","o":["አስተማሪ","ተማሪዎች","ተማሪ"],"a":0}
]},
{"id":"am_w2_5","title":"Checkpoint: the classroom","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"አስተማሪ means…","o":["teacher","student","principal"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተማሪዎች","o":["ተማሪዎች","አስተማሪ","ተማሪ"],"a":0},
{"t":"mc","q":"Which one means students?","o":["ተማሪዎች","ተማሪ","አስተማሪዎች"],"a":0},
{"t":"mc","q":"Review — የት ትሰራለህ? asks…","o":["where do you work?","what do you study?","where do you live?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተማሪ","o":["ተማሪ","ተማሪዎች","አስተማሪ"],"a":0}
]},

/* ---------- w3 · I am learning Amharic ---------- */
{"id":"am_w3","title":"I am learning Amharic","step":"learn","meta":"Imaralehu — say the proudest sentence","vocab":[["እማራለሁ","imaralehu","I learn"],["አማርኛ እማራለሁ","amarigna imaralehu","I am learning Amharic"],["መጽሐፍ","metsihaf","book"]],"ex":[
{"t":"note","tag":"The learning verb","q":"እማራለሁ","body":"<p><b>እማራለሁ</b> <i>imaralehu</i> — <i>I learn</i> — the very root that named both temari and the language you are inside right now.</p>","eg":[["እማራለሁ","imaralehu","I learn"]]},
{"t":"li","q":"Which one do you hear?","say":"እማራለሁ","o":["እማራለሁ","እሰራለሁ"],"a":0},
{"t":"mc","q":"እማራለሁ means…","o":["I learn","I teach","I read"],"a":0},
{"t":"note","tag":"Say it proudly","q":"አማርኛ እማራለሁ","body":"<p><b>አማርኛ እማራለሁ</b> <i>amarigna imaralehu</i> — <i>I am learning Amharic</i>. Deploy it anywhere in Ethiopia and watch the smiles: it is the sentence that opens every door this course can open.</p>","eg":[["አማርኛ እማራለሁ","amarigna imaralehu","I am learning Amharic"]]},
{"t":"li","q":"Which one do you hear?","say":"አማርኛ እማራለሁ","o":["አማርኛ እማራለሁ","እማራለሁ"],"a":0},
{"t":"mc","q":"አማርኛ እማራለሁ means…","o":["I am learning Amharic","I speak Amharic","teach me Amharic"],"a":0},
{"t":"note","tag":"The companion","q":"መጽሐፍ","body":"<p><b>መጽሐፍ</b> <i>metsihaf</i> — <i>book</i> — with the tight ጽ in its heart. Ethiopia has written books in this script for the better part of two thousand years.</p>","eg":[["መጽሐፍ","metsihaf","book"]]},
{"t":"li","q":"Which one do you hear?","say":"መጽሐፍ","o":["መጽሐፍ","እማራለሁ"],"a":0},
{"t":"mc","q":"መጽሐፍ means…","o":["book","paper","pen"],"a":0}
]},
{"id":"am_w3_2","title":"Hearing the learning","step":"recognize","meta":"Study by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"አማርኛ እማራለሁ","o":["አማርኛ እማራለሁ","እማራለሁ","መጽሐፍ"],"a":0},
{"t":"mc","q":"What does መጽሐፍ mean?","o":["book","school","letter"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እማራለሁ","o":["እማራለሁ","አማርኛ እማራለሁ","መጽሐፍ"],"a":0},
{"t":"mc","q":"Which one is the proudest sentence in this app?","o":["አማርኛ እማራለሁ","ውድ ነው","ራበኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መጽሐፍ","o":["መጽሐፍ","እማራለሁ","አማርኛ እማራለሁ"],"a":0},
{"t":"mc","q":"temari, astemari and imaralehu all share the root of…","o":["learning","working","reading"],"a":0}
]},
{"id":"am_w3_3","title":"Building the learning","step":"build","meta":"The sentence that smiles back","vocab":[],"ex":[
{"t":"wb","q":"Build: I am learning Amharic","a":["አማርኛ","እማራለሁ"],"pool":["አማርኛ","እማራለሁ","መጽሐፍ"]},
{"t":"mc","q":"Pick the word for book","o":["መጽሐፍ","ተማሪ","ወንበር"],"a":0},
{"t":"wb","q":"Build: I want a book","a":["መጽሐፍ","እፈልጋለሁ"],"pool":["መጽሐፍ","እፈልጋለሁ","እማራለሁ"]},
{"t":"mc","q":"Pick: I learn","o":["እማራለሁ","እሰራለሁ","እገዛለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አማርኛ እማራለሁ","o":["አማርኛ እማራለሁ","መጽሐፍ","እማራለሁ"],"a":0}
]},
{"id":"am_w3_4","title":"The learning in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እማራለሁ","I learn"],["አማርኛ እማራለሁ","I am learning Amharic"],["መጽሐፍ","book"]]},
{"t":"li","q":"Which one do you hear?","say":"መጽሐፍ","o":["መጽሐፍ","አማርኛ እማራለሁ","እማራለሁ"],"a":0},
{"t":"match","q":"Match the root family","pairs":[["ተማሪ","the learner"],["አስተማሪ","the make-learner"],["እማራለሁ","I learn"]]},
{"t":"mc","q":"The taxi driver asks why you speak Amharic; you say…","o":["አማርኛ እማራለሁ","ተማሪዎች","መጽሐፍ አለ?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እማራለሁ","o":["እማራለሁ","መጽሐፍ","አማርኛ እማራለሁ"],"a":0}
]},
{"id":"am_w3_5","title":"Checkpoint: the learning","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"አማርኛ እማራለሁ means…","o":["I am learning Amharic","Amharic is easy","I know Amharic"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እማራለሁ","o":["እማራለሁ","አማርኛ እማራለሁ","እሰራለሁ"],"a":0},
{"t":"mc","q":"Which one means book?","o":["መጽሐፍ","ተማሪ","ወረቀት"],"a":0},
{"t":"mc","q":"Review — the as- of አስተማሪ means…","o":["make-it-happen","again","not"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መጽሐፍ","o":["መጽሐፍ","እማራለሁ","ተማሪ"],"a":0}
]},

/* ---------- w4 · The desk tools ---------- */
{"id":"am_w4","title":"The desk tools","step":"learn","meta":"Pen, paper, phone — two of them Italian","vocab":[["እስክሪብቶ","iskribto","pen"],["ወረቀት","wereket","paper"],["ስልክ","silk","phone"],["ኮምፒውተር","kompiwter","computer"]],"ex":[
{"t":"note","tag":"The Italian pen","q":"እስክሪብቶ","body":"<p><b>እስክሪብቶ</b> <i>iskribto</i> — <i>pen</i> — Italian scritto gone Amharic, a souvenir of the 1930s that stayed in every pocket. Loanwords in Amharic dress in fidel and behave like everyone else.</p>","eg":[["እስክሪብቶ","iskribto","pen"]]},
{"t":"li","q":"Which one do you hear?","say":"እስክሪብቶ","o":["እስክሪብቶ","መጽሐፍ"],"a":0},
{"t":"mc","q":"እስክሪብቶ arrived from…","o":["Italian","English","French"],"a":0},
{"t":"note","tag":"The paper and the phone","q":"ወረቀት and ስልክ","body":"<p><b>ወረቀት</b> <i>wereket</i> — <i>paper</i> (cousin of Arabic waraqa). <b>ስልክ</b> <i>silk</i> — <i>phone</i> — originally the telegraph wire; now the device that holds this app.</p>","eg":[["ወረቀት","wereket","paper"],["ስልክ","silk","phone"]]},
{"t":"li","q":"Which one do you hear?","say":"ስልክ","o":["ስልክ","ወረቀት"],"a":0},
{"t":"mc","q":"ስልክ originally named…","o":["the telegraph wire","the bell","the letter"],"a":0},
{"t":"note","tag":"The newcomer","q":"ኮምፒውተር","body":"<p><b>ኮምፒውተር</b> <i>kompiwter</i> — <i>computer</i> — English, refitted with full fidel vowels. Say it and hear how Amharic digests a borrowed word whole.</p>","eg":[["ኮምፒውተር","kompiwter","computer"]]},
{"t":"li","q":"Which one do you hear?","say":"ኮምፒውተር","o":["ኮምፒውተር","ስልክ"],"a":0},
{"t":"mc","q":"ኮምፒውተር means…","o":["computer","calculator","printer"],"a":0}
]},
{"id":"am_w4_2","title":"Hearing the tools","step":"recognize","meta":"Desk kit by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ወረቀት","o":["ወረቀት","እስክሪብቶ","ስልክ"],"a":0},
{"t":"mc","q":"What does ስልክ mean?","o":["phone","pen","wire"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ኮምፒውተር","o":["ኮምፒውተር","ወረቀት","ስልክ"],"a":0},
{"t":"mc","q":"Which one means paper?","o":["ወረቀት","እስክሪብቶ","መጽሐፍ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እስክሪብቶ","o":["እስክሪብቶ","ኮምፒውተር","ወረቀት"],"a":0},
{"t":"mc","q":"Loanwords in Amharic…","o":["dress in fidel and behave normally","stay in Latin letters","are avoided"],"a":0}
]},
{"id":"am_w4_3","title":"Building the tools","step":"build","meta":"Kit the desk","vocab":[],"ex":[
{"t":"wb","q":"Build: pen and paper","a":["እስክሪብቶ","ወረቀት"],"pool":["እስክሪብቶ","ወረቀት","ስልክ"]},
{"t":"mc","q":"Pick the phone","o":["ስልክ","ኮምፒውተር","እስክሪብቶ"],"a":0},
{"t":"wb","q":"Build: I want a pen","a":["እስክሪብቶ","እፈልጋለሁ"],"pool":["እስክሪብቶ","እፈልጋለሁ","ወረቀት"]},
{"t":"mc","q":"Pick the computer","o":["ኮምፒውተር","ስልክ","ወረቀት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ስልክ","o":["ስልክ","እስክሪብቶ","ኮምፒውተር"],"a":0}
]},
{"id":"am_w4_4","title":"The tools in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እስክሪብቶ","pen"],["ወረቀት","paper"],["ስልክ","phone"]]},
{"t":"li","q":"Which one do you hear?","say":"ወረቀት","o":["ወረቀት","ስልክ","ኮምፒውተር"],"a":0},
{"t":"match","q":"Match the tool to the era","pairs":[["እስክሪብቶ","the 1930s"],["ኮምፒውተር","today"]]},
{"t":"mc","q":"This very app lives inside your…","o":["ስልክ","ወረቀት","መጽሐፍ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ኮምፒውተር","o":["ኮምፒውተር","ወረቀት","እስክሪብቶ"],"a":0}
]},
{"id":"am_w4_5","title":"Checkpoint: the tools","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ወረቀት means…","o":["paper","pen","page"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እስክሪብቶ","o":["እስክሪብቶ","ስልክ","ወረቀት"],"a":0},
{"t":"mc","q":"Which one means phone?","o":["ስልክ","ኮምፒውተር","እስክሪብቶ"],"a":0},
{"t":"mc","q":"Review — መጽሐፍ means…","o":["book","paper","school"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ወረቀት","o":["ወረቀት","ኮምፒውተር","ስልክ"],"a":0}
]},

/* ---------- w5 · The workplaces ---------- */
{"id":"am_w5","title":"The workplaces","step":"learn","meta":"Biro, bank, hospital, hotel — the loanword district","vocab":[["ቢሮ","biro","office"],["ባንክ","bank","bank"],["ሆስፒታል","hospital","hospital"],["ሆቴል","hotel","hotel"]],"ex":[
{"t":"note","tag":"The office","q":"ቢሮ","body":"<p><b>ቢሮ</b> <i>biro</i> — <i>office</i> — another Italian guest (ufficio&rsquo;s cousin bureau) that never left. ቢሮ ውስጥ እሰራለሁ — I work in an office.</p>","eg":[["ቢሮ","biro","office"]]},
{"t":"li","q":"Which one do you hear?","say":"ቢሮ","o":["ቢሮ","ቤት"],"a":0},
{"t":"mc","q":"ቢሮ means…","o":["office","shop","desk"],"a":0},
{"t":"note","tag":"The institutions","q":"ባንክ and ሆስፒታል","body":"<p><b>ባንክ</b> <i>bank</i> and <b>ሆስፒታል</b> <i>hospital</i> — English guests, fidel passports. You already know how to find them: ባንክ የት ነው?</p>","eg":[["ባንክ","bank","bank"],["ሆስፒታል","hospital","hospital"]]},
{"t":"li","q":"Which one do you hear?","say":"ሆስፒታል","o":["ሆስፒታል","ባንክ"],"a":0},
{"t":"mc","q":"ባንክ የት ነው? asks…","o":["where is the bank?","is there a bank?","how far is the bank?"],"a":0},
{"t":"note","tag":"The traveler&rsquo;s base","q":"ሆቴል","body":"<p><b>ሆቴል</b> <i>hotel</i> — your bed, your locked door, and in Ethiopia often your restaurant too: many hotels are known more for lunch than lodging.</p>","eg":[["ሆቴል","hotel","hotel"]]},
{"t":"li","q":"Which one do you hear?","say":"ሆቴል","o":["ሆቴል","ሆስፒታል"],"a":0},
{"t":"mc","q":"Ethiopian hotels are often known for…","o":["their food","their pools","their gardens"],"a":0}
]},
{"id":"am_w5_2","title":"Hearing the workplaces","step":"recognize","meta":"Institutions by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ባንክ","o":["ባንክ","ቢሮ","ሆቴል"],"a":0},
{"t":"mc","q":"What does ቢሮ mean?","o":["office","bureau drawer","bank"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሆቴል","o":["ሆቴል","ሆስፒታል","ባንክ"],"a":0},
{"t":"mc","q":"Which one is the hospital?","o":["ሆስፒታል","ሆቴል","ቢሮ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቢሮ","o":["ቢሮ","ባንክ","ሆቴል"],"a":0},
{"t":"mc","q":"ሆስፒታል and ሆቴል differ by…","o":["their endings","their first letter","nothing"],"a":0}
]},
{"id":"am_w5_3","title":"Building the workplaces","step":"build","meta":"The town&rsquo;s pillars","vocab":[],"ex":[
{"t":"wb","q":"Build: where is the bank?","a":["ባንክ","የት","ነው?"],"pool":["ባንክ","የት","ነው?","ቢሮ"]},
{"t":"mc","q":"Pick the office","o":["ቢሮ","ባንክ","ሆቴል"],"a":0},
{"t":"wb","q":"Build: I work in an office","a":["ቢሮ","ውስጥ","እሰራለሁ"],"pool":["ቢሮ","ውስጥ","እሰራለሁ","ባንክ"]},
{"t":"mc","q":"Pick the hotel","o":["ሆቴል","ሆስፒታል","ቢሮ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሆስፒታል","o":["ሆስፒታል","ሆቴል","ባንክ"],"a":0}
]},
{"id":"am_w5_4","title":"The workplaces in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ቢሮ","office"],["ባንክ","bank"],["ሆቴል","hotel"]]},
{"t":"li","q":"Which one do you hear?","say":"ሆቴል","o":["ሆቴል","ባንክ","ሆስፒታል"],"a":0},
{"t":"match","q":"Match the need to the place","pairs":[["money","ባንክ"],["a bed","ሆቴል"],["a doctor","ሆስፒታል"]]},
{"t":"mc","q":"ቢሮ ውስጥ እሰራለሁ uses which Zone-6 word?","o":["ውስጥ","አለ","ወደ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ባንክ","o":["ባንክ","ቢሮ","ሆቴል"],"a":0}
]},
{"id":"am_w5_5","title":"Checkpoint: the workplaces","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ቢሮ means…","o":["office","bank","office chair"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሆቴል","o":["ሆቴል","ሆስፒታል","ቢሮ"],"a":0},
{"t":"mc","q":"Which one is the hospital?","o":["ሆስፒታል","ሆቴል","ባንክ"],"a":0},
{"t":"mc","q":"Review — እስክሪብቶ means…","o":["pen","paper","pencil"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቢሮ","o":["ቢሮ","ሆቴል","ባንክ"],"a":0}
]},

/* ---------- w6 · The working week ---------- */
{"id":"am_w6","title":"The working week","step":"learn","meta":"Iske — from Monday until Friday","vocab":[["እስከ","iske","until"],["ከሰኞ እስከ ዓርብ","ke-sanyo iske arb","from Monday to Friday"],["ዕረፍት","ereft","rest · break · holiday"]],"ex":[
{"t":"note","tag":"The until word","q":"እስከ","body":"<p><b>እስከ</b> <i>iske</i> — <i>until</i>. Pair it with the ke- of ከየት: <b>ከሰኞ እስከ ዓርብ</b> <i>ke-sanyo iske arb</i> — <i>from Monday to Friday</i> — the shape of every schedule in the country.</p>","eg":[["እስከ","iske","until"],["ከሰኞ እስከ ዓርብ","ke-sanyo iske arb","from Monday to Friday"]]},
{"t":"li","q":"Which one do you hear?","say":"ከሰኞ እስከ ዓርብ","o":["ከሰኞ እስከ ዓርብ","እስከ"],"a":0},
{"t":"mc","q":"ከ … እስከ … builds…","o":["from … to …","either … or …","not … but …"],"a":0},
{"t":"note","tag":"What the week earns","q":"ዕረፍት","body":"<p><b>ዕረፍት</b> <i>ereft</i> — <i>rest, a break, holiday</i>. The word for lunch breaks, school holidays and the deep Sunday exhale after a week of sira.</p>","eg":[["ዕረፍት","ereft","rest · break · holiday"]]},
{"t":"li","q":"Which one do you hear?","say":"ዕረፍት","o":["ዕረፍት","እስከ"],"a":0},
{"t":"mc","q":"ዕረፍት covers…","o":["rest, breaks and holidays","only sleep","only weekends"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እስከ","o":["እስከ","ዕረፍት"],"a":0},
{"t":"mc","q":"ከሰኞ እስከ ዓርብ እሰራለሁ means…","o":["I work Monday to Friday","I rest Monday to Friday","Monday is far from Friday"],"a":0}
]},
{"id":"am_w6_2","title":"Hearing the week","step":"recognize","meta":"Schedules by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እስከ","o":["እስከ","ዕረፍት","ከሰኞ እስከ ዓርብ"],"a":0},
{"t":"mc","q":"What does ዕረፍት mean?","o":["rest · break","work","weekend only"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ከሰኞ እስከ ዓርብ","o":["ከሰኞ እስከ ዓርብ","እስከ","ዕረፍት"],"a":0},
{"t":"mc","q":"Which one means until?","o":["እስከ","ከ","ወደ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዕረፍት","o":["ዕረፍት","ከሰኞ እስከ ዓርብ","እስከ"],"a":0},
{"t":"mc","q":"The ke- in ከሰኞ is the same ke- as in…","o":["ከየት","ቀንስ","ኪሎ"],"a":0}
]},
{"id":"am_w6_3","title":"Building the week","step":"build","meta":"Schedule yourself","vocab":[],"ex":[
{"t":"wb","q":"Build: from Monday to Friday","a":["ከሰኞ","እስከ","ዓርብ"],"pool":["ከሰኞ","እስከ","ዓርብ","ዕረፍት"]},
{"t":"mc","q":"Pick the word for rest","o":["ዕረፍት","እስከ","ስራ"],"a":0},
{"t":"wb","q":"Build: from Monday to Friday I work","a":["ከሰኞ","እስከ","ዓርብ","እሰራለሁ"],"pool":["ከሰኞ","እስከ","ዓርብ","እሰራለሁ","ዕረፍት"]},
{"t":"mc","q":"Pick the word for until","o":["እስከ","ከ","ውስጥ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ከሰኞ እስከ ዓርብ","o":["ከሰኞ እስከ ዓርብ","ዕረፍት","እስከ"],"a":0}
]},
{"id":"am_w6_4","title":"The week in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["እስከ","until"],["ከሰኞ እስከ ዓርብ","Monday to Friday"],["ዕረፍት","rest"]]},
{"t":"li","q":"Which one do you hear?","say":"ዕረፍት","o":["ዕረፍት","እስከ","ከሰኞ እስከ ዓርብ"],"a":0},
{"t":"match","q":"Match the day to its role","pairs":[["ከሰኞ እስከ ዓርብ","ስራ"],["እሁድ","ዕረፍት"]]},
{"t":"mc","q":"ከጠዋት እስከ ማታ would mean…","o":["from morning until evening","every morning","tomorrow evening"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እስከ","o":["እስከ","ዕረፍት","ከሰኞ እስከ ዓርብ"],"a":0}
]},
{"id":"am_w6_5","title":"Checkpoint: the week","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ዕረፍት means…","o":["rest · break","overtime","meeting"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ከሰኞ እስከ ዓርብ","o":["ከሰኞ እስከ ዓርብ","እስከ","ዕረፍት"],"a":0},
{"t":"mc","q":"እስከ means…","o":["until","from","since"],"a":0},
{"t":"mc","q":"Review — ቢሮ means…","o":["office","bank","break room"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዕረፍት","o":["ዕረፍት","ከሰኞ እስከ ዓርብ","እስከ"],"a":0}
]},

/* ---------- w7 · What do you do? ---------- */
{"id":"am_w7","title":"What do you do?","step":"learn","meta":"Min — the last great question word","vocab":[["ምን","min","what"],["ምን ትሰራለህ?","min tiseraleh?","what do you do? (to a man)"],["ተማሪ ነኝ","temari negn","I am a student"]],"ex":[
{"t":"note","tag":"The missing piece","q":"ምን","body":"<p><b>ምን</b> <i>min</i> — <i>what</i> — completes your question-word set: man (who), yet (where), sint (how much), and now min. You met its shadow inside እንደምን — how — long ago.</p>","eg":[["ምን","min","what"]]},
{"t":"li","q":"Which one do you hear?","say":"ምን","o":["ምን","ማን"],"a":0},
{"t":"mc","q":"ምን means…","o":["what","who","which"],"a":0},
{"t":"note","tag":"The career question","q":"ምን ትሰራለህ?","body":"<p><b>ምን ትሰራለህ?</b> <i>min tiseraleh?</i> — <i>what do you do?</i> — literally what do-you-work. The answer wears your oldest friend ነኝ: <b>ተማሪ ነኝ</b> <i>temari negn</i> — <i>I am a student</i>.</p>","eg":[["ምን ትሰራለህ?","min tiseraleh?","what do you do? (to a man)"],["ተማሪ ነኝ","temari negn","I am a student"]]},
{"t":"li","q":"Which one do you hear?","say":"ምን ትሰራለህ?","o":["ምን ትሰራለህ?","የት ትሰራለህ?"],"a":0},
{"t":"mc","q":"ምን ትሰራለህ? asks…","o":["what do you do?","where do you work?","when do you work?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተማሪ ነኝ","o":["ተማሪ ነኝ","ምን ትሰራለህ?"],"a":0},
{"t":"mc","q":"ተማሪ ነኝ means…","o":["I am a student","I was a student","students exist"],"a":0}
]},
{"id":"am_w7_2","title":"Hearing the what","step":"recognize","meta":"Careers by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ተማሪ ነኝ","o":["ተማሪ ነኝ","ምን ትሰራለህ?","ምን"],"a":0},
{"t":"mc","q":"What does ምን mean?","o":["what","who","where"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ምን","o":["ምን","ማን","ምን ትሰራለህ?"],"a":0},
{"t":"mc","q":"Which one answers ምን ትሰራለህ??","o":["ተማሪ ነኝ","ደህና ነኝ","ቤት ነኝ"],"a":0},
{"t":"li","q":"Listen closely — min or man?","say":"ምን ትሰራለህ?","o":["ምን ትሰራለህ?","ማን ነው?"],"a":0},
{"t":"mc","q":"Your four question words are man, yet, sint and…","o":["ምን","ነው","እስከ"],"a":0}
]},
{"id":"am_w7_3","title":"Building the what","step":"build","meta":"Ask and answer the career question","vocab":[],"ex":[
{"t":"wb","q":"Build: what do you do? (to a man)","a":["ምን","ትሰራለህ?"],"pool":["ምን","ትሰራለህ?","ነኝ"]},
{"t":"mc","q":"Pick: I am a student","o":["ተማሪ ነኝ","ተማሪ ነው","አስተማሪ ነኝ"],"a":0},
{"t":"wb","q":"Build: I am a student","a":["ተማሪ","ነኝ"],"pool":["ተማሪ","ነኝ","ምን"]},
{"t":"wb","q":"Build: I am a teacher","a":["አስተማሪ","ነኝ"],"pool":["አስተማሪ","ነኝ","ተማሪ"]},
{"t":"li","q":"Which one do you hear?","say":"ምን ትሰራለህ?","o":["ምን ትሰራለህ?","ተማሪ ነኝ","ምን"],"a":0}
]},
{"id":"am_w7_4","title":"The what in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ምን","what"],["ምን ትሰራለህ?","what do you do?"],["ተማሪ ነኝ","I am a student"]]},
{"t":"li","q":"Which one do you hear?","say":"ምን","o":["ምን","ተማሪ ነኝ","ምን ትሰራለህ?"],"a":0},
{"t":"match","q":"Match the question word to its ask","pairs":[["ማን","who"],["ምን","what"],["የት","where"]]},
{"t":"mc","q":"ምን ትሰራለህ? — አስተማሪ ነኝ. The man is…","o":["a teacher","a student","an office worker"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተማሪ ነኝ","o":["ተማሪ ነኝ","ምን","ምን ትሰራለህ?"],"a":0}
]},
{"id":"am_w7_5","title":"Checkpoint: Zone 9 complete","step":"checkpoint","meta":"Work and school — show it all","vocab":[],"ex":[
{"t":"mc","q":"ምን ትሰራለህ? asks…","o":["what do you do?","where do you go?","who are you?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተማሪ ነኝ","o":["ተማሪ ነኝ","ምን ትሰራለህ?","አስተማሪ"],"a":0},
{"t":"mc","q":"Review — the make-learn teacher is…","o":["አስተማሪ","ተማሪ","ተማሪዎች"],"a":0},
{"t":"mc","q":"Review — from Monday to Friday…","o":["ከሰኞ እስከ ዓርብ","ከዓርብ እስከ ሰኞ","ከጠዋት እስከ ማታ"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"አማርኛ እማራለሁ","o":["አማርኛ እማራለሁ","ተማሪ ነኝ","እማራለሁ"],"a":0},
{"t":"mc","q":"Review — which one means office?","o":["ቢሮ","ባንክ","ሆቴል"],"a":0},
{"t":"mc","q":"Review — ዕረፍት means…","o":["rest · break","salary","meeting"],"a":0}
]},

/* ---------- b1 · The body ---------- */
{"id":"am_b1","title":"The body","step":"learn","meta":"Ras, ij, igir — head to toe","vocab":[["ራስ","ras","head"],["እጅ","ij","hand"],["እግር","igir","foot · leg"],["ሆድ","hod","stomach"]],"ex":[
{"t":"note","tag":"From the top","q":"ራስ","body":"<p><b>ራስ</b> <i>ras</i> — <i>head</i> — also <i>self</i> (rase = myself) and the old royal title Ras, head-of-armies. One small word, a lot of history.</p>","eg":[["ራስ","ras","head"]]},
{"t":"li","q":"Which one do you hear?","say":"ራስ","o":["ራስ","ስራ"],"a":0},
{"t":"mc","q":"ራስ means head and also…","o":["self","hair","chief only"],"a":0},
{"t":"note","tag":"The workers","q":"እጅ and እግር","body":"<p><b>እጅ</b> <i>ij</i> — <i>hand</i> — the right one being the injera hand. <b>እግር</b> <i>igir</i> — <i>foot, leg</i> — what carries you when it is kirb, and complains when it is ruk.</p>","eg":[["እጅ","ij","hand"],["እግር","igir","foot · leg"]]},
{"t":"li","q":"Hand or foot — which do you hear?","say":"እጅ","o":["እጅ","እግር"],"a":0},
{"t":"mc","q":"እግር means…","o":["foot · leg","arm","knee"],"a":0},
{"t":"note","tag":"The middle","q":"ሆድ","body":"<p><b>ሆድ</b> <i>hod</i> — <i>stomach, belly</i> — the part rabegn speaks for, and the first to review your injera decisions.</p>","eg":[["ሆድ","hod","stomach"]]},
{"t":"li","q":"Which one do you hear?","say":"ሆድ","o":["ሆድ","ራስ"],"a":0},
{"t":"mc","q":"ሆድ means…","o":["stomach","chest","back"],"a":0}
]},
{"id":"am_b1_2","title":"Hearing the body","step":"recognize","meta":"Parts by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"እግር","o":["እግር","እጅ","ሆድ"],"a":0},
{"t":"mc","q":"What does ራስ mean?","o":["head","hand","hair"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሆድ","o":["ሆድ","ራስ","እግር"],"a":0},
{"t":"mc","q":"Which one means hand?","o":["እጅ","እግር","ሆድ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ራስ","o":["ራስ","ሆድ","እጅ"],"a":0},
{"t":"mc","q":"The injera hand is…","o":["the right","the left","either"],"a":0}
]},
{"id":"am_b1_3","title":"Building the body","step":"build","meta":"Assemble yourself","vocab":[],"ex":[
{"t":"wb","q":"Build: head and stomach","a":["ራስ","ሆድ"],"pool":["ራስ","ሆድ","እጅ"]},
{"t":"mc","q":"Pick the word for foot","o":["እግር","እጅ","ራስ"],"a":0},
{"t":"wb","q":"Build: hand and foot","a":["እጅ","እግር"],"pool":["እጅ","እግር","ሆድ"]},
{"t":"mc","q":"Pick the word for stomach","o":["ሆድ","ራስ","እግር"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እጅ","o":["እጅ","እግር","ራስ"],"a":0}
]},
{"id":"am_b1_4","title":"The body in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ራስ","head"],["እጅ","hand"],["እግር","foot"]]},
{"t":"li","q":"Which one do you hear?","say":"ሆድ","o":["ሆድ","እግር","ራስ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሆድ","stomach"],["ራስ","self"]]},
{"t":"mc","q":"ራበኝ speaks for which part?","o":["ሆድ","ራስ","እጅ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"እግር","o":["እግር","ሆድ","እጅ"],"a":0}
]},
{"id":"am_b1_5","title":"Checkpoint: the body","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"እጅ means…","o":["hand","foot","arm"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ራስ","o":["ራስ","እጅ","ሆድ"],"a":0},
{"t":"mc","q":"Which one means stomach?","o":["ሆድ","እግር","ራስ"],"a":0},
{"t":"mc","q":"Review — ምን means…","o":["what","who","where"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሆድ","o":["ሆድ","ራስ","እግር"],"a":0}
]},

/* ---------- b2 · The face ---------- */
{"id":"am_b2","title":"The face","step":"learn","meta":"Eye, ear, mouth, nose","vocab":[["ዓይን","ayn","eye"],["ጆሮ","joro","ear"],["አፍ","af","mouth"],["አፍንጫ","afincha","nose"]],"ex":[
{"t":"note","tag":"The watchers","q":"ዓይን and ጆሮ","body":"<p><b>ዓይን</b> <i>ayn</i> — <i>eye</i> — and <b>ጆሮ</b> <i>joro</i> — <i>ear</i>. Between them they have carried your whole course: eyes on the fidel, ears on the clips.</p>","eg":[["ዓይን","ayn","eye"],["ጆሮ","joro","ear"]]},
{"t":"li","q":"Which one do you hear?","say":"ዓይን","o":["ዓይን","ጆሮ"],"a":0},
{"t":"mc","q":"ጆሮ means…","o":["ear","eye","cheek"],"a":0},
{"t":"note","tag":"The talkers","q":"አፍ and አፍንጫ","body":"<p><b>አፍ</b> <i>af</i> — <i>mouth</i> — and its taller neighbor <b>አፍንጫ</b> <i>afincha</i> — <i>nose</i>. Notice af hiding inside afincha; Amharic likes its anatomy related.</p>","eg":[["አፍ","af","mouth"],["አፍንጫ","afincha","nose"]]},
{"t":"li","q":"Mouth or nose — which do you hear?","say":"አፍንጫ","o":["አፍንጫ","አፍ"],"a":0},
{"t":"mc","q":"The word hiding inside አፍንጫ is…","o":["አፍ","ዓይን","እጅ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጆሮ","o":["ጆሮ","ዓይን"],"a":0},
{"t":"mc","q":"አፍ means…","o":["mouth","nose","lip"],"a":0}
]},
{"id":"am_b2_2","title":"Hearing the face","step":"recognize","meta":"Features by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"አፍ","o":["አፍ","አፍንጫ","ዓይን"],"a":0},
{"t":"mc","q":"What does ዓይን mean?","o":["eye","ear","face"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አፍንጫ","o":["አፍንጫ","አፍ","ጆሮ"],"a":0},
{"t":"mc","q":"Which one means ear?","o":["ጆሮ","ዓይን","አፍ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዓይን","o":["ዓይን","ጆሮ","አፍ"],"a":0},
{"t":"mc","q":"Listening exercises train your…","o":["ጆሮ","ዓይን","አፍ"],"a":0}
]},
{"id":"am_b2_3","title":"Building the face","step":"build","meta":"Feature by feature","vocab":[],"ex":[
{"t":"wb","q":"Build: eye and ear","a":["ዓይን","ጆሮ"],"pool":["ዓይን","ጆሮ","አፍ"]},
{"t":"mc","q":"Pick the word for nose","o":["አፍንጫ","አፍ","ጆሮ"],"a":0},
{"t":"wb","q":"Build: mouth, then nose","a":["አፍ","አፍንጫ"],"pool":["አፍ","አፍንጫ","ዓይን"]},
{"t":"mc","q":"Pick the word for eye","o":["ዓይን","ጆሮ","አፍንጫ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አፍ","o":["አፍ","ዓይን","አፍንጫ"],"a":0}
]},
{"id":"am_b2_4","title":"The face in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ዓይን","eye"],["ጆሮ","ear"],["አፍ","mouth"]]},
{"t":"li","q":"Which one do you hear?","say":"ጆሮ","o":["ጆሮ","አፍንጫ","ዓይን"],"a":0},
{"t":"match","q":"Match the part to its work","pairs":[["ዓይን","reading fidel"],["ጆሮ","hearing clips"],["አፍ","speaking"]]},
{"t":"mc","q":"አፍንጫ contains af because the nose sits…","o":["above the mouth","below the eyes","beside the ear"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አፍንጫ","o":["አፍንጫ","ጆሮ","አፍ"],"a":0}
]},
{"id":"am_b2_5","title":"Checkpoint: the face","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ጆሮ means…","o":["ear","eye","nose"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዓይን","o":["ዓይን","አፍ","ጆሮ"],"a":0},
{"t":"mc","q":"Which one means nose?","o":["አፍንጫ","አፍ","ዓይን"],"a":0},
{"t":"mc","q":"Review — ራስ means…","o":["head · self","hair","hat"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጆሮ","o":["ጆሮ","ዓይን","አፍንጫ"],"a":0}
]},

/* ---------- b3 · It hurts ---------- */
{"id":"am_b3","title":"It hurts","step":"learn","meta":"Amemegn — pain happens to you, like hunger","vocab":[["አመመኝ","amemegn","I am sick · it pains me"],["ህመም","himem","pain · illness"],["ራሴን አመመኝ","rasen amemegn","my head hurts"]],"ex":[
{"t":"note","tag":"The rabegn pattern returns","q":"አመመኝ","body":"<p>Like hunger, sickness happens TO you: <b>አመመኝ</b> <i>amemegn</i> — <i>it pained me</i> — <i>I am sick</i>. Same -egn ending as rabegn and temagn: Amharic&rsquo;s way of saying the body acted first.</p>","eg":[["አመመኝ","amemegn","I am sick · it pains me"]]},
{"t":"li","q":"Which one do you hear?","say":"አመመኝ","o":["አመመኝ","ራበኝ"],"a":0},
{"t":"mc","q":"አመመኝ follows the it-got-me pattern of…","o":["ራበኝ","ነኝ","አለ"],"a":0},
{"t":"note","tag":"Naming it","q":"ህመም","body":"<p><b>ህመም</b> <i>himem</i> — <i>pain, illness</i> — the noun behind the verb. የራስ ህመም — a headache, literally head-pain.</p>","eg":[["ህመም","himem","pain · illness"]]},
{"t":"li","q":"Which one do you hear?","say":"ህመም","o":["ህመም","አመመኝ"],"a":0},
{"t":"mc","q":"ህመም means…","o":["pain · illness","medicine","fever"],"a":0},
{"t":"note","tag":"Saying where","q":"ራሴን አመመኝ","body":"<p>Name the part with its my-ending, then the verb: <b>ራሴን አመመኝ</b> <i>rasen amemegn</i> — <i>my head hurts</i>. ሆዴን አመመኝ — my stomach hurts. The clinic sentence, ready to go.</p>","eg":[["ራሴን አመመኝ","rasen amemegn","my head hurts"]]},
{"t":"li","q":"Which one do you hear?","say":"ራሴን አመመኝ","o":["ራሴን አመመኝ","አመመኝ"],"a":0},
{"t":"mc","q":"ራሴን አመመኝ means…","o":["my head hurts","I hurt my head","heads hurt"],"a":0}
]},
{"id":"am_b3_2","title":"Hearing the hurt","step":"recognize","meta":"Complaints by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ህመም","o":["ህመም","ራሴን አመመኝ","አመመኝ"],"a":0},
{"t":"mc","q":"What does አመመኝ mean?","o":["I am sick","I am tired","I am sad"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ራሴን አመመኝ","o":["ራሴን አመመኝ","ህመም","አመመኝ"],"a":0},
{"t":"mc","q":"Which one means pain?","o":["ህመም","አመመኝ","ራስ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አመመኝ","o":["አመመኝ","ህመም","ራሴን አመመኝ"],"a":0},
{"t":"mc","q":"ሆዴን አመመኝ would mean…","o":["my stomach hurts","my head hurts","my foot hurts"],"a":0}
]},
{"id":"am_b3_3","title":"Building the hurt","step":"build","meta":"Say where it hurts","vocab":[],"ex":[
{"t":"wb","q":"Build: my head hurts","a":["ራሴን","አመመኝ"],"pool":["ራሴን","አመመኝ","ህመም"]},
{"t":"mc","q":"Pick the word for pain","o":["ህመም","አመመኝ","ራሴን"],"a":0},
{"t":"wb","q":"Build the word: it pained me","a":["አመመ","ኝ"],"pool":["አመመ","ኝ","ህመም"]},
{"t":"mc","q":"Pick: I am sick","o":["አመመኝ","ራበኝ","ጠማኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ራሴን አመመኝ","o":["ራሴን አመመኝ","አመመኝ","ህመም"],"a":0}
]},
{"id":"am_b3_4","title":"The hurt in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["አመመኝ","I am sick"],["ህመም","pain"],["ራሴን አመመኝ","my head hurts"]]},
{"t":"li","q":"Which one do you hear?","say":"አመመኝ","o":["አመመኝ","ራሴን አመመኝ","ህመም"],"a":0},
{"t":"match","q":"Match the -egn family","pairs":[["ራበኝ","hunger got me"],["ጠማኝ","thirst got me"],["አመመኝ","sickness got me"]]},
{"t":"mc","q":"የራስ ህመም is literally…","o":["head-pain (a headache)","brain fever","hair trouble"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ህመም","o":["ህመም","አመመኝ","ራሴን አመመኝ"],"a":0}
]},
{"id":"am_b3_5","title":"Checkpoint: the hurt","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ራሴን አመመኝ means…","o":["my head hurts","I am dizzy","my hand hurts"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አመመኝ","o":["አመመኝ","ህመም","ራበኝ"],"a":0},
{"t":"mc","q":"Which one means pain · illness?","o":["ህመም","ሆድ","መድሃኒት"],"a":0},
{"t":"mc","q":"Review — ጆሮ means…","o":["ear","eye","nose"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ህመም","o":["ህመም","ራሴን አመመኝ","አመመኝ"],"a":0}
]},

/* ---------- b4 · The clinic ---------- */
{"id":"am_b4","title":"The clinic","step":"learn","meta":"Hakim bet — the house of the doctor","vocab":[["ሐኪም","hakim","doctor"],["ሐኪም ቤት","hakim bet","clinic · hospital"],["ነርስ","ners","nurse"],["መድሃኒት","medhanit","medicine"]],"ex":[
{"t":"note","tag":"The doctor and the house","q":"ሐኪም and ሐኪም ቤት","body":"<p><b>ሐኪም</b> <i>hakim</i> — <i>doctor</i> — and, with the bet machine, <b>ሐኪም ቤት</b> <i>hakim bet</i> — <i>doctor-house</i>: the clinic. Amharic built its whole medical system out of words you own.</p>","eg":[["ሐኪም","hakim","doctor"],["ሐኪም ቤት","hakim bet","clinic · hospital"]]},
{"t":"li","q":"Which one do you hear?","say":"ሐኪም ቤት","o":["ሐኪም ቤት","ሐኪም"],"a":0},
{"t":"mc","q":"ሐኪም ቤት literally means…","o":["doctor-house","sick-house","medicine-house"],"a":0},
{"t":"note","tag":"The one who sees you","q":"ነርስ","body":"<p><b>ነርስ</b> <i>ners</i> — <i>nurse</i> — often the first and kindest face at any hakim bet.</p>","eg":[["ነርስ","ners","nurse"]]},
{"t":"li","q":"Which one do you hear?","say":"ነርስ","o":["ነርስ","ሐኪም"],"a":0},
{"t":"mc","q":"ነርስ means…","o":["nurse","doctor","patient"],"a":0},
{"t":"note","tag":"What you leave with","q":"መድሃኒት","body":"<p><b>መድሃኒት</b> <i>medhanit</i> — <i>medicine</i> — from an ancient root meaning rescue. Take it as the hakim says.</p>","eg":[["መድሃኒት","medhanit","medicine"]]},
{"t":"li","q":"Which one do you hear?","say":"መድሃኒት","o":["መድሃኒት","ነርስ"],"a":0},
{"t":"mc","q":"መድሃኒት means…","o":["medicine","bandage","checkup"],"a":0}
]},
{"id":"am_b4_2","title":"Hearing the clinic","step":"recognize","meta":"Care by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሐኪም","o":["ሐኪም","ሐኪም ቤት","ነርስ"],"a":0},
{"t":"mc","q":"What does መድሃኒት mean?","o":["medicine","doctor","clinic"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መድሃኒት","o":["መድሃኒት","ሐኪም","ነርስ"],"a":0},
{"t":"mc","q":"Which one is the clinic?","o":["ሐኪም ቤት","ሐኪም","መድሃኒት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሐኪም ቤት","o":["ሐኪም ቤት","መድሃኒት","ሐኪም"],"a":0},
{"t":"mc","q":"The root behind መድሃኒት means…","o":["rescue","bitter","plant"],"a":0}
]},
{"id":"am_b4_3","title":"Building the clinic","step":"build","meta":"The care compound","vocab":[],"ex":[
{"t":"wb","q":"Build: clinic (doctor + house)","a":["ሐኪም","ቤት"],"pool":["ሐኪም","ቤት","ነርስ"]},
{"t":"mc","q":"Pick the nurse","o":["ነርስ","ሐኪም","መድሃኒት"],"a":0},
{"t":"wb","q":"Build: where is the clinic?","a":["ሐኪም","ቤት","የት","ነው?"],"pool":["ሐኪም","ቤት","የት","ነው?","ነርስ"]},
{"t":"mc","q":"Pick the medicine","o":["መድሃኒት","ነርስ","ሐኪም"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሐኪም","o":["ሐኪም","ነርስ","ሐኪም ቤት"],"a":0}
]},
{"id":"am_b4_4","title":"The clinic in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሐኪም","doctor"],["ነርስ","nurse"],["መድሃኒት","medicine"]]},
{"t":"li","q":"Which one do you hear?","say":"ነርስ","o":["ነርስ","ሐኪም","መድሃኒት"],"a":0},
{"t":"match","q":"Match the bet compound","pairs":[["ሐኪም ቤት","clinic"],["ትምህርት ቤት","school"]]},
{"t":"mc","q":"አመመኝ! Your next stop is…","o":["ሐኪም ቤት","ትምህርት ቤት","ሆቴል"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መድሃኒት","o":["መድሃኒት","ሐኪም ቤት","ነርስ"],"a":0}
]},
{"id":"am_b4_5","title":"Checkpoint: the clinic","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ሐኪም ቤት means…","o":["clinic · hospital","pharmacy","doctor&rsquo;s home"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ነርስ","o":["ነርስ","መድሃኒት","ሐኪም"],"a":0},
{"t":"mc","q":"Which one means medicine?","o":["መድሃኒት","ህመም","ሐኪም"],"a":0},
{"t":"mc","q":"Review — አመመኝ means…","o":["I am sick","I am hungry","I am cold"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሐኪም","o":["ሐኪም","ሐኪም ቤት","ነርስ"],"a":0}
]},

/* ---------- b5 · What the nurse says ---------- */
{"id":"am_b5","title":"What the nurse says","step":"learn","meta":"Sit, lie down, take it — the care commands","vocab":[["ተቀመጥ","tekemet","sit down! (to a man)"],["ተኛ","tegna","lie down! (to a man)"],["መድሃኒት ውሰድ","medhanit wised","take the medicine (to a man)"]],"ex":[
{"t":"note","tag":"The waiting bench","q":"ተቀመጥ","body":"<p><b>ተቀመጥ</b> <i>tekemet</i> — <i>sit down!</i> — to a man (ተቀመጪ <i>tekemechi</i> to a woman). The first thing any clinic bench asks of you.</p>","eg":[["ተቀመጥ","tekemet","sit down! (to a man)"]]},
{"t":"li","q":"Which one do you hear?","say":"ተቀመጥ","o":["ተቀመጥ","ተማሪ"],"a":0},
{"t":"mc","q":"ተቀመጥ commands…","o":["sit down","stand up","come in"],"a":0},
{"t":"note","tag":"The examination","q":"ተኛ","body":"<p><b>ተኛ</b> <i>tegna</i> — <i>lie down!</i> — the same root as your እተኛለሁ, I sleep. The examination table speaks in commands you already half-know.</p>","eg":[["ተኛ","tegna","lie down! (to a man)"]]},
{"t":"li","q":"Which one do you hear?","say":"ተኛ","o":["ተኛ","ተቀመጥ"],"a":0},
{"t":"mc","q":"ተኛ shares its sleep-root with…","o":["እተኛለሁ","እነሳለሁ","እበላለሁ"],"a":0},
{"t":"note","tag":"The instruction that matters","q":"መድሃኒት ውሰድ","body":"<p><b>መድሃኒት ውሰድ</b> <i>medhanit wised</i> — <i>take the medicine</i> — wised being <i>take!</i> The sentence to obey exactly as prescribed, ferenj time or habesha time confirmed.</p>","eg":[["መድሃኒት ውሰድ","medhanit wised","take the medicine (to a man)"]]},
{"t":"li","q":"Which one do you hear?","say":"መድሃኒት ውሰድ","o":["መድሃኒት ውሰድ","ተኛ"],"a":0},
{"t":"mc","q":"መድሃኒት ውሰድ means…","o":["take the medicine","buy the medicine","the medicine is here"],"a":0}
]},
{"id":"am_b5_2","title":"Hearing the commands","step":"recognize","meta":"Care orders by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ተኛ","o":["ተኛ","ተቀመጥ","መድሃኒት ውሰድ"],"a":0},
{"t":"mc","q":"What does ተቀመጥ mean?","o":["sit down!","lie down!","stand!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መድሃኒት ውሰድ","o":["መድሃኒት ውሰድ","ተኛ","ተቀመጥ"],"a":0},
{"t":"mc","q":"Which one means lie down?","o":["ተኛ","ተቀመጥ","ውሰድ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተቀመጥ","o":["ተቀመጥ","መድሃኒት ውሰድ","ተኛ"],"a":0},
{"t":"mc","q":"The clinic visit order…","o":["ተቀመጥ → ተኛ → መድሃኒት ውሰድ","ተኛ → ተቀመጥ → ና","ውሰድ → ተኛ → በላ"],"a":0}
]},
{"id":"am_b5_3","title":"Building the commands","step":"build","meta":"Follow the nurse","vocab":[],"ex":[
{"t":"wb","q":"Build: take the medicine","a":["መድሃኒት","ውሰድ"],"pool":["መድሃኒት","ውሰድ","ተኛ"]},
{"t":"mc","q":"Pick: sit down!","o":["ተቀመጥ","ተኛ","ና"],"a":0},
{"t":"wb","q":"Build the word: lie down (te + gna)","a":["ተ","ኛ"],"pool":["ተ","ኛ","ቀ"]},
{"t":"mc","q":"Pick: lie down!","o":["ተኛ","ተቀመጥ","ውሰድ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተቀመጥ","o":["ተቀመጥ","ተኛ","መድሃኒት ውሰድ"],"a":0}
]},
{"id":"am_b5_4","title":"The commands in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ተቀመጥ","sit down!"],["ተኛ","lie down!"],["መድሃኒት ውሰድ","take the medicine"]]},
{"t":"li","q":"Which one do you hear?","say":"መድሃኒት ውሰድ","o":["መድሃኒት ውሰድ","ተቀመጥ","ተኛ"],"a":0},
{"t":"match","q":"Match the command family","pairs":[["ብላ","eat!"],["ና","come!"],["ተቀመጥ","sit!"]]},
{"t":"mc","q":"When taking medicine on a schedule, confirm…","o":["habesha or ferenj time","the pharmacy name","the color"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተኛ","o":["ተኛ","መድሃኒት ውሰድ","ተቀመጥ"],"a":0}
]},
{"id":"am_b5_5","title":"Checkpoint: the commands","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"መድሃኒት ውሰድ means…","o":["take the medicine","bring the medicine","the medicine works"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ተኛ","o":["ተኛ","ተቀመጥ","ና"],"a":0},
{"t":"mc","q":"Which one means sit down?","o":["ተቀመጥ","ተኛ","ውሰድ"],"a":0},
{"t":"mc","q":"Review — ሐኪም ቤት means…","o":["clinic","school","office"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መድሃኒት ውሰድ","o":["መድሃኒት ውሰድ","ተኛ","ተቀመጥ"],"a":0}
]},

/* ---------- b6 · Feeling better ---------- */
{"id":"am_b6","title":"Feeling better","step":"learn","meta":"Yishalegnal — the recovery report","vocab":[["ይሻለኛል","yishalegnal","I feel better"],["ደክሞኛል","dekmognal","I am tired"],["ውሃ ጠጣ","wiha tetta","drink water! (to a man)"]],"ex":[
{"t":"note","tag":"The good report","q":"ይሻለኛል","body":"<p><b>ይሻለኛል</b> <i>yishalegnal</i> — <i>it is better for me</i> — <i>I feel better</i>. The -egn family again, this time delivering good news.</p>","eg":[["ይሻለኛል","yishalegnal","I feel better"]]},
{"t":"li","q":"Which one do you hear?","say":"ይሻለኛል","o":["ይሻለኛል","አመመኝ"],"a":0},
{"t":"mc","q":"ይሻለኛል means…","o":["I feel better","I feel worse","I am cured"],"a":0},
{"t":"note","tag":"The honest report","q":"ደክሞኛል","body":"<p><b>ደክሞኛል</b> <i>dekmognal</i> — <i>I am tired</i> — tiredness, like hunger and pain, arriving on its own feet. The end-of-day word for workers, travelers and language learners.</p>","eg":[["ደክሞኛል","dekmognal","I am tired"]]},
{"t":"li","q":"Which one do you hear?","say":"ደክሞኛል","o":["ደክሞኛል","ይሻለኛል"],"a":0},
{"t":"mc","q":"ደክሞኛል means…","o":["I am tired","I am sick","I am lazy"],"a":0},
{"t":"note","tag":"The universal advice","q":"ውሃ ጠጣ","body":"<p><b>ውሃ ጠጣ</b> <i>wiha tetta</i> — <i>drink water!</i> — tetta being the command twin of your እጠጣለሁ. Ethiopia&rsquo;s grandmothers and doctors agree on this one.</p>","eg":[["ውሃ ጠጣ","wiha tetta","drink water! (to a man)"]]},
{"t":"li","q":"Which one do you hear?","say":"ውሃ ጠጣ","o":["ውሃ ጠጣ","ደክሞኛል"],"a":0},
{"t":"mc","q":"ውሃ ጠጣ commands…","o":["drink water","fetch water","boil water"],"a":0}
]},
{"id":"am_b6_2","title":"Hearing the recovery","step":"recognize","meta":"Reports by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ደክሞኛል","o":["ደክሞኛል","ይሻለኛል","ውሃ ጠጣ"],"a":0},
{"t":"mc","q":"What does ይሻለኛል mean?","o":["I feel better","I am tired","it is over"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውሃ ጠጣ","o":["ውሃ ጠጣ","ደክሞኛል","ይሻለኛል"],"a":0},
{"t":"mc","q":"Which one means I am tired?","o":["ደክሞኛል","ይሻለኛል","አመመኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይሻለኛል","o":["ይሻለኛል","ውሃ ጠጣ","ደክሞኛል"],"a":0},
{"t":"mc","q":"ጠጣ is the command twin of…","o":["እጠጣለሁ","እበላለሁ","እሄዳለሁ"],"a":0}
]},
{"id":"am_b6_3","title":"Building the recovery","step":"build","meta":"Report and prescribe","vocab":[],"ex":[
{"t":"wb","q":"Build: drink water! (to a man)","a":["ውሃ","ጠጣ"],"pool":["ውሃ","ጠጣ","ብላ"]},
{"t":"mc","q":"Pick: I feel better","o":["ይሻለኛል","ደክሞኛል","አመመኝ"],"a":0},
{"t":"wb","q":"Build the word: I am tired (dekmo + gnal)","a":["ደክሞ","ኛል"],"pool":["ደክሞ","ኛል","ይሻለ"]},
{"t":"mc","q":"Pick: I am tired","o":["ደክሞኛል","ይሻለኛል","ራበኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይሻለኛል","o":["ይሻለኛል","ደክሞኛል","ውሃ ጠጣ"],"a":0}
]},
{"id":"am_b6_4","title":"The recovery in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ይሻለኛል","I feel better"],["ደክሞኛል","I am tired"],["ውሃ ጠጣ","drink water!"]]},
{"t":"li","q":"Which one do you hear?","say":"ውሃ ጠጣ","o":["ውሃ ጠጣ","ይሻለኛል","ደክሞኛል"],"a":0},
{"t":"match","q":"Match the arc","pairs":[["አመመኝ","the bad day"],["መድሃኒት ውሰድ","the treatment"],["ይሻለኛል","the good news"]]},
{"t":"mc","q":"ደክሞኛል after a long hike — the one-word prescription is…","o":["ዕረፍት","ቀንስ","ገበያ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ደክሞኛል","o":["ደክሞኛል","ውሃ ጠጣ","ይሻለኛል"],"a":0}
]},
{"id":"am_b6_5","title":"Checkpoint: the recovery","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ደክሞኛል means…","o":["I am tired","I feel better","I slept"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ይሻለኛል","o":["ይሻለኛል","ደክሞኛል","አመመኝ"],"a":0},
{"t":"mc","q":"Which one means drink water!?","o":["ውሃ ጠጣ","ውሃ አለ","ውሃ እፈልጋለሁ"],"a":0},
{"t":"mc","q":"Review — መድሃኒት ውሰድ means…","o":["take the medicine","the medicine is gone","medicine helps"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ውሃ ጠጣ","o":["ውሃ ጠጣ","ደክሞኛል","ይሻለኛል"],"a":0}
]},

/* ---------- b7 · Health — and no problem ---------- */
{"id":"am_b7","title":"Health — and no problem","step":"learn","meta":"Tena, chigir yellem — the zone comes full circle","vocab":[["ጤና","tena","health"],["ችግር","chigir","problem"],["ችግር የለም","chigir yellem","no problem"]],"ex":[
{"t":"note","tag":"Full circle","q":"ጤና","body":"<p><b>ጤና</b> <i>tena</i> — <i>health</i> — the very word inside ጤና ይስጥልኝ, the formal greeting you learned in Zone 2: <i>may health be given for me</i>. Ethiopia has been wishing you tena since your first hello.</p>","eg":[["ጤና","tena","health"]]},
{"t":"li","q":"Which one do you hear?","say":"ጤና","o":["ጤና","ጠዋት"],"a":0},
{"t":"mc","q":"ጤና hides inside which greeting?","o":["ጤና ይስጥልኝ","ሰላም ነው?","እንደምን አደርክ?"],"a":0},
{"t":"note","tag":"The trouble word","q":"ችግር","body":"<p><b>ችግር</b> <i>chigir</i> — <i>problem, trouble</i> — with the tight ጭ inside. Now for the phrase that dissolves it…</p>","eg":[["ችግር","chigir","problem"]]},
{"t":"li","q":"Which one do you hear?","say":"ችግር","o":["ችግር","ጤና"],"a":0},
{"t":"mc","q":"ችግር means…","o":["problem","danger","pain"],"a":0},
{"t":"note","tag":"The national reassurance","q":"ችግር የለም","body":"<p><b>ችግር የለም</b> <i>chigir yellem</i> — <i>no problem</i> — your yellem doing its finest work. Late taxi, changed plan, spilled buna: chigir yellem. Half philosophy, half national motto.</p>","eg":[["ችግር የለም","chigir yellem","no problem"]]},
{"t":"li","q":"Which one do you hear?","say":"ችግር የለም","o":["ችግር የለም","ችግር"],"a":0},
{"t":"mc","q":"ችግር የለም means…","o":["no problem","big problem","whose problem?"],"a":0}
]},
{"id":"am_b7_2","title":"Hearing the reassurance","step":"recognize","meta":"Calm by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ችግር","o":["ችግር","ችግር የለም","ጤና"],"a":0},
{"t":"mc","q":"What does ጤና mean?","o":["health","peace","strength"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ችግር የለም","o":["ችግር የለም","ጤና","ችግር"],"a":0},
{"t":"mc","q":"Which one means no problem?","o":["ችግር የለም","ችግር አለ","የለም"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ጤና","o":["ጤና","ችግር","ችግር የለም"],"a":0},
{"t":"mc","q":"ችግር የለም is best described as…","o":["half philosophy, half motto","an apology","a complaint"],"a":0}
]},
{"id":"am_b7_3","title":"Building the reassurance","step":"build","meta":"Trouble, dissolved","vocab":[],"ex":[
{"t":"wb","q":"Build: no problem","a":["ችግር","የለም"],"pool":["ችግር","የለም","አለ"]},
{"t":"mc","q":"Pick the word for health","o":["ጤና","ችግር","ህመም"],"a":0},
{"t":"wb","q":"Build: the formal greeting (health + be-given)","a":["ጤና","ይስጥልኝ"],"pool":["ጤና","ይስጥልኝ","የለም"]},
{"t":"mc","q":"Pick the word for problem","o":["ችግር","ጤና","ህመም"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ችግር የለም","o":["ችግር የለም","ችግር","ጤና"],"a":0}
]},
{"id":"am_b7_4","title":"The reassurance in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ጤና","health"],["ችግር","problem"],["ችግር የለም","no problem"]]},
{"t":"li","q":"Which one do you hear?","say":"ጤና","o":["ጤና","ችግር የለም","ችግር"],"a":0},
{"t":"match","q":"Match the yellem family","pairs":[["ችግር የለም","no problem"],["ስኳር የለም","no sugar"]]},
{"t":"mc","q":"The taxi is late; your Ethiopian friend shrugs:…","o":["ችግር የለም","ችግር አለ","ጤና ይስጥልኝ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ችግር","o":["ችግር","ጤና","ችግር የለም"],"a":0}
]},
{"id":"am_b7_5","title":"Checkpoint: Zone 10 complete","step":"checkpoint","meta":"Body and health — show it all","vocab":[],"ex":[
{"t":"mc","q":"ችግር የለም means…","o":["no problem","get well","no pain"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ችግር የለም","o":["ችግር የለም","ጤና","ችግር"],"a":0},
{"t":"mc","q":"Review — ራሴን አመመኝ means…","o":["my head hurts","my hand hurts","I am dizzy"],"a":0},
{"t":"mc","q":"Review — the clinic is the…","o":["ሐኪም ቤት","ሆቴል","ቢሮ"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ይሻለኛል","o":["ይሻለኛል","ደክሞኛል","አመመኝ"],"a":0},
{"t":"mc","q":"Review — take the medicine is…","o":["መድሃኒት ውሰድ","ውሃ ጠጣ","ተቀመጥ"],"a":0},
{"t":"mc","q":"Review — ጤና hides inside…","o":["ጤና ይስጥልኝ","ችግር የለም","ደህና ነህ?"],"a":0}
]},

/* ---------- p1 · What I did ---------- */
{"id":"am_p1","title":"What I did","step":"learn","meta":"Hedku, belahu — the past in one ending","vocab":[["ሄድኩ","hedku","I went"],["በላሁ","belahu","I ate"],["ሰራሁ","serahu","I worked"]],"ex":[
{"t":"note","tag":"The past ending","q":"-ku and -hu","body":"<p>The past strips the verb down and ends it in <b>-ku/-hu</b> — <i>I did</i>: <b>ሄድኩ</b> <i>hedku</i> — <i>I went</i>. Compare እሄዳለሁ, I go: the long -alehu machinery falls away and the bare past remains.</p>","eg":[["ሄድኩ","hedku","I went"]]},
{"t":"li","q":"Now or then — which do you hear?","say":"ሄድኩ","o":["ሄድኩ","እሄዳለሁ"],"a":0},
{"t":"mc","q":"ሄድኩ means…","o":["I went","I go","I will go"],"a":0},
{"t":"note","tag":"Two more pasts","q":"በላሁ and ሰራሁ","body":"<p><b>በላሁ</b> <i>belahu</i> — <i>I ate</i> — and <b>ሰራሁ</b> <i>serahu</i> — <i>I worked</i>. Short, punchy, done: the past tense sounds finished because it is.</p>","eg":[["በላሁ","belahu","I ate"],["ሰራሁ","serahu","I worked"]]},
{"t":"li","q":"Ate or worked — which do you hear?","say":"በላሁ","o":["በላሁ","ሰራሁ"],"a":0},
{"t":"mc","q":"በላሁ means…","o":["I ate","I eat","eat!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰራሁ","o":["ሰራሁ","በላሁ"],"a":0},
{"t":"mc","q":"Compared with እሰራለሁ, the past ሰራሁ is…","o":["shorter and finished","longer","the same"],"a":0}
]},
{"id":"am_p1_2","title":"Hearing the past","step":"recognize","meta":"Then by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሰራሁ","o":["ሰራሁ","ሄድኩ","በላሁ"],"a":0},
{"t":"mc","q":"What does ሄድኩ mean?","o":["I went","I came","I go"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሄድኩ","o":["ሄድኩ","በላሁ","ሰራሁ"],"a":0},
{"t":"mc","q":"Which one means I worked?","o":["ሰራሁ","በላሁ","ሄድኩ"],"a":0},
{"t":"li","q":"Past or present — which do you hear?","say":"በላሁ","o":["በላሁ","እበላለሁ"],"a":0},
{"t":"mc","q":"The past I-ending is…","o":["-ku/-hu","-alehu","-egn"],"a":0}
]},
{"id":"am_p1_3","title":"Building the past","step":"build","meta":"Yesterday&rsquo;s verbs","vocab":[],"ex":[
{"t":"wb","q":"Build: I went to the market","a":["ወደ","ገበያ","ሄድኩ"],"pool":["ወደ","ገበያ","ሄድኩ","እሄዳለሁ"]},
{"t":"mc","q":"Pick: I ate","o":["በላሁ","እበላለሁ","ብላ"],"a":0},
{"t":"wb","q":"Build: I ate injera","a":["እንጀራ","በላሁ"],"pool":["እንጀራ","በላሁ","ሰራሁ"]},
{"t":"mc","q":"Pick: I worked","o":["ሰራሁ","እሰራለሁ","ስራ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሄድኩ","o":["ሄድኩ","ሰራሁ","በላሁ"],"a":0}
]},
{"id":"am_p1_4","title":"The past in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match present to past","pairs":[["እሄዳለሁ","ሄድኩ"],["እበላለሁ","በላሁ"],["እሰራለሁ","ሰራሁ"]]},
{"t":"li","q":"Which one do you hear?","say":"በላሁ","o":["በላሁ","ሄድኩ","ሰራሁ"],"a":0},
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ሄድኩ","I went"],["በላሁ","I ate"]]},
{"t":"mc","q":"እንጀራ በላሁ means…","o":["I ate injera","I eat injera","eat the injera"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሰራሁ","o":["ሰራሁ","በላሁ","ሄድኩ"],"a":0}
]},
{"id":"am_p1_5","title":"Checkpoint: the past","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ሰራሁ means…","o":["I worked","I work","work!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በላሁ","o":["በላሁ","ሰራሁ","ሄድኩ"],"a":0},
{"t":"mc","q":"Which one means I went?","o":["ሄድኩ","እሄዳለሁ","ሂድ"],"a":0},
{"t":"mc","q":"Review — ችግር የለም means…","o":["no problem","no work","nothing left"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሄድኩ","o":["ሄድኩ","በላሁ","ሰራሁ"],"a":0}
]},

/* ---------- p2 · Yesterday I… ---------- */
{"id":"am_p2","title":"Yesterday I…","step":"learn","meta":"Tinant + past verbs — telling your day","vocab":[["መጣሁ","metahu","I came"],["ገዛሁ","gezahu","I bought"],["ትናንት ሄድኩ","tinant hedku","yesterday I went"]],"ex":[
{"t":"note","tag":"Two more arrivals","q":"መጣሁ and ገዛሁ","body":"<p><b>መጣሁ</b> <i>metahu</i> — <i>I came</i> — and <b>ገዛሁ</b> <i>gezahu</i> — <i>I bought</i>. The -hu ending is doing all the past-tense work now; the verbs just change their front halves.</p>","eg":[["መጣሁ","metahu","I came"],["ገዛሁ","gezahu","I bought"]]},
{"t":"li","q":"Came or bought — which do you hear?","say":"መጣሁ","o":["መጣሁ","ገዛሁ"],"a":0},
{"t":"mc","q":"ገዛሁ means…","o":["I bought","I buy","buy!"],"a":0},
{"t":"note","tag":"Anchor it in time","q":"ትናንት ሄድኩ","body":"<p>Add your Zone 4 anchor: <b>ትናንት ሄድኩ</b> <i>tinant hedku</i> — <i>yesterday I went</i>. ትናንት ገበያ ሄድኩ, ዳቦ ገዛሁ — yesterday I went to the market, I bought bread. You are narrating now.</p>","eg":[["ትናንት ሄድኩ","tinant hedku","yesterday I went"]]},
{"t":"li","q":"Which one do you hear?","say":"ትናንት ሄድኩ","o":["ትናንት ሄድኩ","ሄድኩ"],"a":0},
{"t":"mc","q":"ትናንት ሄድኩ means…","o":["yesterday I went","tomorrow I go","today I went"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ገዛሁ","o":["ገዛሁ","መጣሁ"],"a":0},
{"t":"mc","q":"ዳቦ ገዛሁ means…","o":["I bought bread","I want bread","I ate bread"],"a":0}
]},
{"id":"am_p2_2","title":"Hearing yesterday","step":"recognize","meta":"Narration by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ገዛሁ","o":["ገዛሁ","መጣሁ","ትናንት ሄድኩ"],"a":0},
{"t":"mc","q":"What does መጣሁ mean?","o":["I came","I come","come!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ትናንት ሄድኩ","o":["ትናንት ሄድኩ","መጣሁ","ገዛሁ"],"a":0},
{"t":"mc","q":"Which one means I bought?","o":["ገዛሁ","እገዛለሁ","መጣሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መጣሁ","o":["መጣሁ","ገዛሁ","ሄድኩ"],"a":0},
{"t":"mc","q":"Present እመጣለሁ becomes past…","o":["መጣሁ","ገዛሁ","መጣ"],"a":0}
]},
{"id":"am_p2_3","title":"Building yesterday","step":"build","meta":"Narrate the trip","vocab":[],"ex":[
{"t":"wb","q":"Build: yesterday I went","a":["ትናንት","ሄድኩ"],"pool":["ትናንት","ሄድኩ","መጣሁ"]},
{"t":"mc","q":"Pick: I came","o":["መጣሁ","ገዛሁ","እመጣለሁ"],"a":0},
{"t":"wb","q":"Build: I bought bread","a":["ዳቦ","ገዛሁ"],"pool":["ዳቦ","ገዛሁ","በላሁ"]},
{"t":"wb","q":"Build: yesterday I went to the market","a":["ትናንት","ገበያ","ሄድኩ"],"pool":["ትናንት","ገበያ","ሄድኩ","ገዛሁ"]},
{"t":"li","q":"Which one do you hear?","say":"ትናንት ሄድኩ","o":["ትናንት ሄድኩ","ገዛሁ","መጣሁ"],"a":0}
]},
{"id":"am_p2_4","title":"Yesterday in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["መጣሁ","I came"],["ገዛሁ","I bought"],["ትናንት ሄድኩ","yesterday I went"]]},
{"t":"li","q":"Which one do you hear?","say":"መጣሁ","o":["መጣሁ","ትናንት ሄድኩ","ገዛሁ"],"a":0},
{"t":"match","q":"Match present to past","pairs":[["እመጣለሁ","መጣሁ"],["እገዛለሁ","ገዛሁ"]]},
{"t":"mc","q":"The full story: ትናንት ገበያ ሄድኩ, ዳቦ…","o":["ገዛሁ","እገዛለሁ","ግዛ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ገዛሁ","o":["ገዛሁ","መጣሁ","ትናንት ሄድኩ"],"a":0}
]},
{"id":"am_p2_5","title":"Checkpoint: yesterday","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ገዛሁ means…","o":["I bought","I came","I sold"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መጣሁ","o":["መጣሁ","ገዛሁ","በላሁ"],"a":0},
{"t":"mc","q":"ትናንት ሄድኩ means…","o":["yesterday I went","today I go","I went far"],"a":0},
{"t":"mc","q":"Review — በላሁ means…","o":["I ate","I eat","eat!"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ትናንት ሄድኩ","o":["ትናንት ሄድኩ","መጣሁ","ገዛሁ"],"a":0}
]},

/* ---------- p3 · Where were you? ---------- */
{"id":"am_p3","title":"Where were you?","step":"learn","meta":"Neber — the was of every story","vocab":[["ነበርኩ","neberku","I was"],["የት ነበርክ?","yet neberk?","where were you? (to a man)"],["ቤት ነበርኩ","bet neberku","I was at home"]],"ex":[
{"t":"note","tag":"The was verb","q":"ነበርኩ","body":"<p><b>ነበርኩ</b> <i>neberku</i> — <i>I was</i> — the past of being itself, wearing the same -ku as hedku. Every memory you will ever tell in Amharic leans on neber.</p>","eg":[["ነበርኩ","neberku","I was"]]},
{"t":"li","q":"Which one do you hear?","say":"ነበርኩ","o":["ነበርኩ","ነኝ"],"a":0},
{"t":"mc","q":"ነበርኩ means…","o":["I was","I am","I will be"],"a":0},
{"t":"note","tag":"The question","q":"የት ነበርክ?","body":"<p><b>የት ነበርክ?</b> <i>yet neberk?</i> — <i>where were you?</i> — to a man (-sh to a woman). And the homebody answer: <b>ቤት ነበርኩ</b> <i>bet neberku</i> — <i>I was at home</i>.</p>","eg":[["የት ነበርክ?","yet neberk?","where were you? (to a man)"],["ቤት ነበርኩ","bet neberku","I was at home"]]},
{"t":"li","q":"Question or answer — which do you hear?","say":"የት ነበርክ?","o":["የት ነበርክ?","ቤት ነበርኩ"],"a":0},
{"t":"mc","q":"የት ነበርክ? asks…","o":["where were you?","where are you?","where will you be?"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤት ነበርኩ","o":["ቤት ነበርኩ","የት ነበርክ?"],"a":0},
{"t":"mc","q":"ቤት ነበርኩ means…","o":["I was at home","I am at home","my house was there"],"a":0}
]},
{"id":"am_p3_2","title":"Hearing the was","step":"recognize","meta":"Memories by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ቤት ነበርኩ","o":["ቤት ነበርኩ","ነበርኩ","የት ነበርክ?"],"a":0},
{"t":"mc","q":"What does ነበርኩ mean?","o":["I was","I am","I stayed"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"የት ነበርክ?","o":["የት ነበርክ?","ቤት ነበርኩ","ነበርኩ"],"a":0},
{"t":"mc","q":"Which one answers የት ነበርክ??","o":["ቤት ነበርኩ","ቤት ነኝ","የት ነው?"],"a":0},
{"t":"li","q":"Was or am — which do you hear?","say":"ነበርኩ","o":["ነበርኩ","ነኝ"],"a":0},
{"t":"mc","q":"ሆስፒታል ነበርኩ would mean…","o":["I was at the hospital","I am a doctor","the hospital was here"],"a":0}
]},
{"id":"am_p3_3","title":"Building the was","step":"build","meta":"Place yourself in the past","vocab":[],"ex":[
{"t":"wb","q":"Build: where were you? (to a man)","a":["የት","ነበርክ?"],"pool":["የት","ነበርክ?","ነበርኩ"]},
{"t":"mc","q":"Pick: I was","o":["ነበርኩ","ነኝ","ነው"],"a":0},
{"t":"wb","q":"Build: I was at home","a":["ቤት","ነበርኩ"],"pool":["ቤት","ነበርኩ","ነበርክ?"]},
{"t":"wb","q":"Build: I was at the market","a":["ገበያ","ነበርኩ"],"pool":["ገበያ","ነበርኩ","ቤት"]},
{"t":"li","q":"Which one do you hear?","say":"ነበርኩ","o":["ነበርኩ","የት ነበርክ?","ቤት ነበርኩ"],"a":0}
]},
{"id":"am_p3_4","title":"The was in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ነበርኩ","I was"],["የት ነበርክ?","where were you?"],["ቤት ነበርኩ","I was at home"]]},
{"t":"li","q":"Which one do you hear?","say":"የት ነበርክ?","o":["የት ነበርክ?","ነበርኩ","ቤት ነበርኩ"],"a":0},
{"t":"match","q":"Match now to then","pairs":[["ነኝ","ነበርኩ"],["እሄዳለሁ","ሄድኩ"]]},
{"t":"mc","q":"የት ነበርክ? — ሐኪም ቤት ነበርኩ. The man was…","o":["at the clinic","at school","at the bank"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ቤት ነበርኩ","o":["ቤት ነበርኩ","የት ነበርክ?","ነበርኩ"],"a":0}
]},
{"id":"am_p3_5","title":"Checkpoint: the was","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ቤት ነበርኩ means…","o":["I was at home","I am home","home was small"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ነበርኩ","o":["ነበርኩ","ቤት ነበርኩ","የት ነበርክ?"],"a":0},
{"t":"mc","q":"Which one asks where were you?","o":["የት ነበርክ?","የት ነው?","ወዴት ትሄዳለህ?"],"a":0},
{"t":"mc","q":"Review — ትናንት ሄድኩ means…","o":["yesterday I went","yesterday I came","today I went"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"የት ነበርክ?","o":["የት ነበርክ?","ቤት ነበርኩ","ነበርኩ"],"a":0}
]},

/* ---------- p4 · Tomorrow and now ---------- */
{"id":"am_p4","title":"Tomorrow and now","step":"learn","meta":"One form, two tenses — the -alehu secret","vocab":[["ነገ እሄዳለሁ","nege ihedalehu","tomorrow I will go"],["አሁን","ahun","now"],["በኋላ","behuala","later"]],"ex":[
{"t":"note","tag":"The secret you already own","q":"ነገ እሄዳለሁ","body":"<p>Good news: Amharic&rsquo;s future IS the -alehu form you have used all course. Add a time word and it points forward: <b>ነገ እሄዳለሁ</b> <i>nege ihedalehu</i> — <i>tomorrow I will go</i>. One form, present and future both; the time word steers.</p>","eg":[["ነገ እሄዳለሁ","nege ihedalehu","tomorrow I will go"]]},
{"t":"li","q":"Which one do you hear?","say":"ነገ እሄዳለሁ","o":["ነገ እሄዳለሁ","እሄዳለሁ"],"a":0},
{"t":"mc","q":"Amharic&rsquo;s future tense is…","o":["the -alehu form plus a time word","a new ending","borrowed from English"],"a":0},
{"t":"note","tag":"The steering words","q":"አሁን and በኋላ","body":"<p><b>አሁን</b> <i>ahun</i> — <i>now</i> — and <b>በኋላ</b> <i>behuala</i> — <i>later, afterwards</i>. አሁን እሄዳለሁ — I am going now; በኋላ እመጣለሁ — I will come later. The steering wheel of every plan.</p>","eg":[["አሁን","ahun","now"],["በኋላ","behuala","later"]]},
{"t":"li","q":"Now or later — which do you hear?","say":"አሁን","o":["አሁን","በኋላ"],"a":0},
{"t":"mc","q":"በኋላ means…","o":["later","now","before"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በኋላ","o":["በኋላ","አሁን"],"a":0},
{"t":"mc","q":"በኋላ እመጣለሁ means…","o":["I will come later","I came late","come later!"],"a":0}
]},
{"id":"am_p4_2","title":"Hearing the plans","step":"recognize","meta":"Time-steering by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"በኋላ","o":["በኋላ","አሁን","ነገ እሄዳለሁ"],"a":0},
{"t":"mc","q":"What does አሁን mean?","o":["now","later","soon"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ነገ እሄዳለሁ","o":["ነገ እሄዳለሁ","በኋላ","አሁን"],"a":0},
{"t":"mc","q":"Which one means tomorrow I will go?","o":["ነገ እሄዳለሁ","ትናንት ሄድኩ","አሁን እሄዳለሁ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አሁን","o":["አሁን","በኋላ","ነገ"],"a":0},
{"t":"mc","q":"The tense-steering is done by…","o":["time words","new endings","tone"],"a":0}
]},
{"id":"am_p4_3","title":"Building the plans","step":"build","meta":"Steer the verb","vocab":[],"ex":[
{"t":"wb","q":"Build: tomorrow I will go","a":["ነገ","እሄዳለሁ"],"pool":["ነገ","እሄዳለሁ","ሄድኩ"]},
{"t":"mc","q":"Pick the word for now","o":["አሁን","በኋላ","ነገ"],"a":0},
{"t":"wb","q":"Build: I will come later","a":["በኋላ","እመጣለሁ"],"pool":["በኋላ","እመጣለሁ","መጣሁ"]},
{"t":"wb","q":"Build: I am going now","a":["አሁን","እሄዳለሁ"],"pool":["አሁን","እሄዳለሁ","በኋላ"]},
{"t":"li","q":"Which one do you hear?","say":"ነገ እሄዳለሁ","o":["ነገ እሄዳለሁ","አሁን","በኋላ"],"a":0}
]},
{"id":"am_p4_4","title":"The plans in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ነገ እሄዳለሁ","tomorrow I will go"],["አሁን","now"],["በኋላ","later"]]},
{"t":"li","q":"Which one do you hear?","say":"አሁን","o":["አሁን","ነገ እሄዳለሁ","በኋላ"],"a":0},
{"t":"match","q":"Match the time to the tense","pairs":[["ትናንት","ሄድኩ"],["ነገ","እሄዳለሁ"]]},
{"t":"mc","q":"All three tenses of go: ሄድኩ, እሄዳለሁ — and the future is the same -alehu form plus…","o":["a time word","a fourth ending","nothing works"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በኋላ","o":["በኋላ","አሁን","ነገ እሄዳለሁ"],"a":0}
]},
{"id":"am_p4_5","title":"Checkpoint: the plans","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ነገ እሄዳለሁ means…","o":["tomorrow I will go","yesterday I went","I go daily"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"በኋላ","o":["በኋላ","አሁን","ነገ"],"a":0},
{"t":"mc","q":"Which one means now?","o":["አሁን","በኋላ","ዛሬ"],"a":0},
{"t":"mc","q":"Review — ነበርኩ means…","o":["I was","I am","I stayed"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"አሁን","o":["አሁን","በኋላ","ትናንት"],"a":0}
]},

/* ---------- p5 · The weather ---------- */
{"id":"am_p5","title":"The weather","step":"learn","meta":"Rain, cold, heat, sun — the highland sky","vocab":[["ዝናብ","zinab","rain"],["ብርድ","bird","cold"],["ሙቀት","muket","heat"],["ፀሐይ","tsehay","sun"]],"ex":[
{"t":"note","tag":"The two seasons","q":"ዝናብ","body":"<p><b>ዝናብ</b> <i>zinab</i> — <i>rain</i>. Highland Ethiopia lives by it: the long kiremt rains of July and August feed the whole year. When zinab comes, umbrellas bloom across Addis.</p>","eg":[["ዝናብ","zinab","rain"]]},
{"t":"li","q":"Which one do you hear?","say":"ዝናብ","o":["ዝናብ","ገንዘብ"],"a":0},
{"t":"mc","q":"The great rains of July-August are called…","o":["kiremt","bereka","meskel"],"a":0},
{"t":"note","tag":"The highland surprise","q":"ብርድ and ሙቀት","body":"<p><b>ብርድ</b> <i>bird</i> — <i>cold</i> — and <b>ሙቀት</b> <i>muket</i> — <i>heat</i>. Addis sits at 2,355 meters: visitors pack for Africa and meet mountain evenings. Bird is real; bring a jacket.</p>","eg":[["ብርድ","bird","cold"],["ሙቀት","muket","heat"]]},
{"t":"li","q":"Cold or heat — which do you hear?","say":"ብርድ","o":["ብርድ","ሙቀት"],"a":0},
{"t":"mc","q":"Addis evenings surprise visitors with…","o":["ብርድ","ሙቀት","ዝናብ"],"a":0},
{"t":"note","tag":"The reliable one","q":"ፀሐይ","body":"<p><b>ፀሐይ</b> <i>tsehay</i> — <i>sun</i> — thirteen months of it, as the tourism slogan says. Also a beloved name.</p>","eg":[["ፀሐይ","tsehay","sun"]]},
{"t":"li","q":"Which one do you hear?","say":"ፀሐይ","o":["ፀሐይ","ዝናብ"],"a":0},
{"t":"mc","q":"ፀሐይ means…","o":["sun","sky","moon"],"a":0}
]},
{"id":"am_p5_2","title":"Hearing the sky","step":"recognize","meta":"Weather by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሙቀት","o":["ሙቀት","ብርድ","ዝናብ"],"a":0},
{"t":"mc","q":"What does ዝናብ mean?","o":["rain","cloud","storm"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ብርድ","o":["ብርድ","ሙቀት","ፀሐይ"],"a":0},
{"t":"mc","q":"Which one means sun?","o":["ፀሐይ","ዝናብ","ሙቀት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዝናብ","o":["ዝናብ","ፀሐይ","ብርድ"],"a":0},
{"t":"mc","q":"Addis sits at about…","o":["2,355 meters","500 meters","4,000 meters"],"a":0}
]},
{"id":"am_p5_3","title":"Building the sky","step":"build","meta":"Forecast in fidel","vocab":[],"ex":[
{"t":"wb","q":"Build: rain and cold","a":["ዝናብ","ብርድ"],"pool":["ዝናብ","ብርድ","ፀሐይ"]},
{"t":"mc","q":"Pick the word for heat","o":["ሙቀት","ብርድ","ፀሐይ"],"a":0},
{"t":"wb","q":"Build: sun and heat","a":["ፀሐይ","ሙቀት"],"pool":["ፀሐይ","ሙቀት","ዝናብ"]},
{"t":"mc","q":"Pick the word for rain","o":["ዝናብ","ብርድ","ሙቀት"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ፀሐይ","o":["ፀሐይ","ሙቀት","ዝናብ"],"a":0}
]},
{"id":"am_p5_4","title":"The sky in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ዝናብ","rain"],["ብርድ","cold"],["ፀሐይ","sun"]]},
{"t":"li","q":"Which one do you hear?","say":"ብርድ","o":["ብርድ","ዝናብ","ሙቀት"],"a":0},
{"t":"match","q":"Match the season to its sky","pairs":[["kiremt","ዝናብ"],["the dry season","ፀሐይ"]]},
{"t":"mc","q":"The jacket you packed is for…","o":["ብርድ","ሙቀት","ዝናብ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሙቀት","o":["ሙቀት","ፀሐይ","ብርድ"],"a":0}
]},
{"id":"am_p5_5","title":"Checkpoint: the sky","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ብርድ means…","o":["cold","rain","wind"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዝናብ","o":["ዝናብ","ብርድ","ፀሐይ"],"a":0},
{"t":"mc","q":"Which one means sun?","o":["ፀሐይ","ሙቀት","ዝናብ"],"a":0},
{"t":"mc","q":"Review — አሁን means…","o":["now","later","today"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ፀሐይ","o":["ፀሐይ","ዝናብ","ሙቀት"],"a":0}
]},

/* ---------- p6 · Talking about the sky ---------- */
{"id":"am_p6","title":"Talking about the sky","step":"learn","meta":"Bird new — the weather meets the new engine","vocab":[["ብርድ ነው","bird new","it is cold"],["ሙቀት ነው","muket new","it is hot"],["ዛሬ ብርድ ነው","zare bird new","today it is cold"]],"ex":[
{"t":"note","tag":"The report frame","q":"ብርድ ነው","body":"<p>Weather reports run on your oldest engine: <b>ብርድ ነው</b> <i>bird new</i> — <i>it is cold</i> — and <b>ሙቀት ነው</b> <i>muket new</i> — <i>it is hot</i>. Say them while reaching for a jacket or a fan respectively.</p>","eg":[["ብርድ ነው","bird new","it is cold"],["ሙቀት ነው","muket new","it is hot"]]},
{"t":"li","q":"Cold or hot — which do you hear?","say":"ብርድ ነው","o":["ብርድ ነው","ሙቀት ነው"],"a":0},
{"t":"mc","q":"ሙቀት ነው means…","o":["it is hot","it is warm water","the heat left"],"a":0},
{"t":"note","tag":"Stamp the day","q":"ዛሬ ብርድ ነው","body":"<p>Anchor it: <b>ዛሬ ብርድ ነው</b> <i>zare bird new</i> — <i>today it is cold</i>. Swap in ዝናብ for rain reports; the frame never changes. Weather small talk unlocked.</p>","eg":[["ዛሬ ብርድ ነው","zare bird new","today it is cold"]]},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ ብርድ ነው","o":["ዛሬ ብርድ ነው","ብርድ ነው"],"a":0},
{"t":"mc","q":"ዛሬ ብርድ ነው means…","o":["today it is cold","yesterday was cold","the cold season"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሙቀት ነው","o":["ሙቀት ነው","ብርድ ነው"],"a":0},
{"t":"mc","q":"ዛሬ ዝናብ ነው would report…","o":["rain today","sun today","cold tomorrow"],"a":0}
]},
{"id":"am_p6_2","title":"Hearing the reports","step":"recognize","meta":"Sky talk by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"ሙቀት ነው","o":["ሙቀት ነው","ዛሬ ብርድ ነው","ብርድ ነው"],"a":0},
{"t":"mc","q":"What does ብርድ ነው mean?","o":["it is cold","it is hot","it is windy"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ ብርድ ነው","o":["ዛሬ ብርድ ነው","ሙቀት ነው","ብርድ ነው"],"a":0},
{"t":"mc","q":"Which one means it is hot?","o":["ሙቀት ነው","ብርድ ነው","ፀሐይ ነው"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ብርድ ነው","o":["ብርድ ነው","ሙቀት ነው","ዛሬ ብርድ ነው"],"a":0},
{"t":"mc","q":"The weather frame is powered by…","o":["ነው","አለ","ነኝ"],"a":0}
]},
{"id":"am_p6_3","title":"Building the reports","step":"build","meta":"Say the sky","vocab":[],"ex":[
{"t":"wb","q":"Build: it is cold","a":["ብርድ","ነው"],"pool":["ብርድ","ነው","ሙቀት"]},
{"t":"mc","q":"Pick: it is hot","o":["ሙቀት ነው","ብርድ ነው","ዝናብ"],"a":0},
{"t":"wb","q":"Build: today it is cold","a":["ዛሬ","ብርድ","ነው"],"pool":["ዛሬ","ብርድ","ነው","ሙቀት"]},
{"t":"wb","q":"Build: it is hot","a":["ሙቀት","ነው"],"pool":["ሙቀት","ነው","ብርድ"]},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ ብርድ ነው","o":["ዛሬ ብርድ ነው","ብርድ ነው","ሙቀት ነው"],"a":0}
]},
{"id":"am_p6_4","title":"The reports in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["ብርድ ነው","it is cold"],["ሙቀት ነው","it is hot"],["ዛሬ ብርድ ነው","today it is cold"]]},
{"t":"li","q":"Which one do you hear?","say":"ብርድ ነው","o":["ብርድ ነው","ዛሬ ብርድ ነው","ሙቀት ነው"],"a":0},
{"t":"match","q":"Match the report to the response","pairs":[["ብርድ ነው","a jacket"],["ሙቀት ነው","a fan"]]},
{"t":"mc","q":"Addis evening, jacket time — the report is…","o":["ብርድ ነው","ሙቀት ነው","ፀሐይ ነው"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ሙቀት ነው","o":["ሙቀት ነው","ብርድ ነው","ዛሬ ብርድ ነው"],"a":0}
]},
{"id":"am_p6_5","title":"Checkpoint: the reports","step":"checkpoint","meta":"Show what stuck","vocab":[],"ex":[
{"t":"mc","q":"ዛሬ ብርድ ነው means…","o":["today it is cold","it will be cold","the cold is here"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ብርድ ነው","o":["ብርድ ነው","ሙቀት ነው","ዝናብ"],"a":0},
{"t":"mc","q":"Which one means it is hot?","o":["ሙቀት ነው","ብርድ ነው","ፀሐይ"],"a":0},
{"t":"mc","q":"Review — ዝናብ means…","o":["rain","cold","cloud"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"ዛሬ ብርድ ነው","o":["ዛሬ ብርድ ነው","ሙቀት ነው","ብርድ ነው"],"a":0}
]},

/* ---------- p7 · When? ---------- */
{"id":"am_p7","title":"When?","step":"learn","meta":"Meche — the question set completes","vocab":[["መቼ","meche","when"],["መቼ ትመጣለህ?","meche timetaleh?","when are you coming? (to a man)"]],"ex":[
{"t":"note","tag":"The final question word","q":"መቼ","body":"<p><b>መቼ</b> <i>meche</i> — <i>when?</i> — completes the set: man, min, yet, sint, wedet and now meche. Six keys; every door in the language.</p>","eg":[["መቼ","meche","when"]]},
{"t":"li","q":"Which one do you hear?","say":"መቼ","o":["መቼ","ምን"],"a":0},
{"t":"mc","q":"መቼ asks…","o":["when","where","what"],"a":0},
{"t":"note","tag":"The visit question","q":"መቼ ትመጣለህ?","body":"<p><b>መቼ ትመጣለህ?</b> <i>meche timetaleh?</i> — <i>when are you coming?</i> — the question every Ethiopian household asks a friend. The answer uses everything you own: ነገ እመጣለሁ, በኋላ እመጣለሁ, ከሰዓት…</p>","eg":[["መቼ ትመጣለህ?","meche timetaleh?","when are you coming? (to a man)"]]},
{"t":"li","q":"Which one do you hear?","say":"መቼ ትመጣለህ?","o":["መቼ ትመጣለህ?","መቼ"],"a":0},
{"t":"mc","q":"መቼ ትመጣለህ? asks…","o":["when are you coming?","when did you come?","are you coming?"],"a":0},
{"t":"li","q":"Listen closely — meche or min?","say":"መቼ ትመጣለህ?","o":["መቼ ትመጣለህ?","ምን ትሰራለህ?"],"a":0},
{"t":"mc","q":"A good answer to መቼ ትመጣለህ? is…","o":["ነገ እመጣለሁ","ትናንት ሄድኩ","ቤት ነበርኩ"],"a":0}
]},
{"id":"am_p7_2","title":"Hearing the when","step":"recognize","meta":"Appointments by ear","vocab":[],"ex":[
{"t":"li","q":"Which one do you hear?","say":"መቼ","o":["መቼ","መቼ ትመጣለህ?","ምን"],"a":0},
{"t":"mc","q":"What does መቼ mean?","o":["when","how","why"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መቼ ትመጣለህ?","o":["መቼ ትመጣለህ?","ምን ትሰራለህ?","መቼ"],"a":0},
{"t":"mc","q":"The six question keys are man, min, yet, sint, wedet and…","o":["መቼ","ነው","እስከ"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መቼ","o":["መቼ","ማን","ምን"],"a":0},
{"t":"mc","q":"መቼ ገዛህ? would ask…","o":["when did you buy it?","what did you buy?","where did you buy it?"],"a":0}
]},
{"id":"am_p7_3","title":"Building the when","step":"build","meta":"Set the appointment","vocab":[],"ex":[
{"t":"wb","q":"Build: when are you coming? (to a man)","a":["መቼ","ትመጣለህ?"],"pool":["መቼ","ትመጣለህ?","እመጣለሁ"]},
{"t":"mc","q":"Pick the word for when","o":["መቼ","ምን","የት"],"a":0},
{"t":"wb","q":"Build the answer: I will come tomorrow","a":["ነገ","እመጣለሁ"],"pool":["ነገ","እመጣለሁ","መቼ"]},
{"t":"wb","q":"Build the answer: I will come later","a":["በኋላ","እመጣለሁ"],"pool":["በኋላ","እመጣለሁ","አሁን"]},
{"t":"li","q":"Which one do you hear?","say":"መቼ ትመጣለህ?","o":["መቼ ትመጣለህ?","መቼ","ነገ እሄዳለሁ"],"a":0}
]},
{"id":"am_p7_4","title":"The when in the wild","step":"mix","meta":"Everything from this topic, mixed","vocab":[],"ex":[
{"t":"match","q":"Match the Amharic to the meaning","pairs":[["መቼ","when"],["መቼ ትመጣለህ?","when are you coming?"]]},
{"t":"li","q":"Which one do you hear?","say":"መቼ","o":["መቼ","መቼ ትመጣለህ?","ማን"],"a":0},
{"t":"match","q":"Match the question to the answer","pairs":[["መቼ ትመጣለህ?","ነገ እመጣለሁ"],["የት ነበርክ?","ቤት ነበርኩ"]]},
{"t":"mc","q":"Remember the two clocks: when the answer is a time, confirm…","o":["habesha or ferenj","the day twice","the address"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መቼ ትመጣለህ?","o":["መቼ ትመጣለህ?","ምን ትሰራለህ?","መቼ"],"a":0}
]},
{"id":"am_p7_5","title":"Checkpoint: Zone 11 complete","step":"checkpoint","meta":"Past and future — show it all","vocab":[],"ex":[
{"t":"mc","q":"መቼ ትመጣለህ? — ነገ እመጣለሁ. The visit is…","o":["tomorrow","today","later tonight"],"a":0},
{"t":"li","q":"Which one do you hear?","say":"መቼ","o":["መቼ","ምን","ማን"],"a":0},
{"t":"mc","q":"Review — the past of እሄዳለሁ is…","o":["ሄድኩ","ሂድ","እሄዳለሁ ነበር"],"a":0},
{"t":"mc","q":"Review — the future is the -alehu form plus…","o":["a time word","a new ending","nothing"],"a":0},
{"t":"li","q":"Review — which one do you hear?","say":"ዛሬ ብርድ ነው","o":["ዛሬ ብርድ ነው","ሙቀት ነው","ዝናብ"],"a":0},
{"t":"mc","q":"Review — ነበርኩ means…","o":["I was","I am","I went"],"a":0},
{"t":"mc","q":"Review — the July-August rains are the…","o":["kiremt","bereka","meskel"],"a":0}
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
,
{"n":7,"t":"Getting around","d":"The minibus and its weyala, where-to, near and far — and weraj alle!","lessons":["am_t1","am_t1_2","am_t1_3","am_t1_4","am_t1_5","am_t2","am_t2_2","am_t2_3","am_t2_4","am_t2_5","am_t3","am_t3_2","am_t3_3","am_t3_4","am_t3_5","am_t4","am_t4_2","am_t4_3","am_t4_4","am_t4_5","am_t5","am_t5_2","am_t5_3","am_t5_4","am_t5_5","am_t6","am_t6_2","am_t6_3","am_t6_4","am_t6_5","am_t7","am_t7_2","am_t7_3","am_t7_4","am_t7_5"]}
,
{"n":8,"t":"Shopping and money","d":"Birr, sint new, the bargaining dance — and the counter script","lessons":["am_m1","am_m1_2","am_m1_3","am_m1_4","am_m1_5","am_m2","am_m2_2","am_m2_3","am_m2_4","am_m2_5","am_m3","am_m3_2","am_m3_3","am_m3_4","am_m3_5","am_m4","am_m4_2","am_m4_3","am_m4_4","am_m4_5","am_m5","am_m5_2","am_m5_3","am_m5_4","am_m5_5","am_m6","am_m6_2","am_m6_3","am_m6_4","am_m6_5","am_m7","am_m7_2","am_m7_3","am_m7_4","am_m7_5"]}
,
{"n":9,"t":"Work and school","d":"Sira, the temari root — and the last great question word","lessons":["am_w1","am_w1_2","am_w1_3","am_w1_4","am_w1_5","am_w2","am_w2_2","am_w2_3","am_w2_4","am_w2_5","am_w3","am_w3_2","am_w3_3","am_w3_4","am_w3_5","am_w4","am_w4_2","am_w4_3","am_w4_4","am_w4_5","am_w5","am_w5_2","am_w5_3","am_w5_4","am_w5_5","am_w6","am_w6_2","am_w6_3","am_w6_4","am_w6_5","am_w7","am_w7_2","am_w7_3","am_w7_4","am_w7_5"]}
,
{"n":10,"t":"Body and health","d":"The body, the hakim bet — and chigir yellem","lessons":["am_b1","am_b1_2","am_b1_3","am_b1_4","am_b1_5","am_b2","am_b2_2","am_b2_3","am_b2_4","am_b2_5","am_b3","am_b3_2","am_b3_3","am_b3_4","am_b3_5","am_b4","am_b4_2","am_b4_3","am_b4_4","am_b4_5","am_b5","am_b5_2","am_b5_3","am_b5_4","am_b5_5","am_b6","am_b6_2","am_b6_3","am_b6_4","am_b6_5","am_b7","am_b7_2","am_b7_3","am_b7_4","am_b7_5"]}
,
{"n":11,"t":"Past and future","d":"The -ku past, neber, one-form future — and the highland sky","lessons":["am_p1","am_p1_2","am_p1_3","am_p1_4","am_p1_5","am_p2","am_p2_2","am_p2_3","am_p2_4","am_p2_5","am_p3","am_p3_2","am_p3_3","am_p3_4","am_p3_5","am_p4","am_p4_2","am_p4_3","am_p4_4","am_p4_5","am_p5","am_p5_2","am_p5_3","am_p5_4","am_p5_5","am_p6","am_p6_2","am_p6_3","am_p6_4","am_p6_5","am_p7","am_p7_2","am_p7_3","am_p7_4","am_p7_5"]}
];

const AM_SYM={"am_s1":"ለ ሉ ላ","am_s2":"መ ም","am_s3":"ሰላም","am_s4":"ተ ጠ","am_s5":"ማን","am_s6":"ላም","am_s7":"እሺ","am_g1":"ደህና ነህ?","am_g2":"ስም","am_g3":"እንደምን","am_g4":"እርስዎ","am_g5":"ከየት?","am_g6":"ሰዎች","am_g7":"ቻው","am_f1":"አባት","am_f2":"ቤተሰብ","am_f3":"አባቴ","am_f4":"ይህ","am_f5":"አባቷ","am_f6":"ጋሽ","am_f7":"ማን ነው?","am_n1":"1 2 3","am_n2":"6 7 8","am_n3":"ሰኞ","am_n4":"እሁድ","am_n5":"ስንት?","am_n6":"ሀበሻ ሰዓት","am_n7":"ዓመት","am_d1":"እንጀራ","am_d2":"ቡና","am_d3":"እባክህ","am_d4":"ብላ!","am_d5":"ዶሮ ወጥ","am_d6":"በጣም","am_d7":"ጉርሻ","am_h1":"ቤት","am_h2":"ማድቤት","am_h3":"ወንበር","am_h4":"የት ነው?","am_h5":"ጀበና","am_h6":"አበስላለሁ","am_h7":"ውስጥ","am_t1":"ገበያ","am_t2":"ና","am_t3":"ወደ","am_t4":"ታክሲ","am_t5":"ሩቅ","am_t6":"ጠፋሁ","am_t7":"እንሂድ","am_m1":"ብር","am_m2":"ስንት ነው?","am_m3":"እፈልጋለሁ","am_m4":"ቀንስ","am_m5":"ስኳር","am_m6":"ይስጡኝ","am_m7":"መቶ","am_w1":"ስራ","am_w2":"ተማሪ","am_w3":"እማራለሁ","am_w4":"ስልክ","am_w5":"ቢሮ","am_w6":"እስከ","am_w7":"ምን?","am_b1":"ራስ","am_b2":"ዓይን","am_b3":"አመመኝ","am_b4":"ሐኪም ቤት","am_b5":"ተቀመጥ","am_b6":"ይሻለኛል","am_b7":"ችግር የለም","am_p1":"ሄድኩ","am_p2":"ትናንት","am_p3":"ነበርኩ","am_p4":"ነገ","am_p5":"ዝናብ","am_p6":"ብርድ ነው","am_p7":"መቼ?"};

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
