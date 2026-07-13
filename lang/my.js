/* ===== BURMESE (MYANMAR) LANGUAGE PACK (Zone 1 · The Script) =====
   Romanization scheme (ASCII only, enforced — no Burmese script in rom fields):
   - Aspiration is shown by an h BEFORE the letter: hk (ခ), hs (ဆ), ht (ထ), hp (ဖ).
     This keeps "th" free for သ, which is genuinely the "th" of "thin" (/θ/).
     (This is the John Okell "Burmese by Ear" convention — pronunciation-faithful.)
   - Plain/voiced stops: k(က) g(ဂ) · s(စ) z(ဇ) · t(တ) d(ဒ) · p(ပ) b(ဗ)
   - Nasals: ng(င) ny(ည) n(န) m(မ) · glides: y(ယ,ရ) w(ဝ) l(လ) · h(ဟ) · a(အ)
   - Every consonant carries a built-in "a"; vowel signs change it (ကာ kaa, ကု ku…).
   - Burmese is TONAL (three tones: low, high, creaky). Tone is taught by ear via
     the recorded audio, not marked in this beginner romanization. Real Burmese
     has few word-spaces — the app never asks you to type it (tap-only). */

const MY_UNITS=[
  {n:1,t:'The Script',d:'မြန်မာအက္ခရာ — read & sound out Burmese',lessons:['my_c1','my_c1_2','my_c1_3','my_c1_4','my_c1_5','my_c2','my_c2_2','my_c2_3','my_c2_4','my_c2_5','my_c3','my_c3_2','my_c3_3','my_c3_4','my_c3_5','my_c4','my_c4_2','my_c4_3','my_c4_4','my_c4_5','my_c5','my_c5_2','my_c5_3','my_c5_4','my_c5_5','my_v1','my_v1_2','my_v1_3','my_v1_4','my_v1_5','my_v2','my_v2_2','my_v2_3','my_v2_4','my_v2_5']},
];

const MY_SYM={my_c1:'က',my_c2:'စ',my_c3:'တ',my_c4:'ပ',my_c5:'သ',my_v1:'ကာ',my_v2:'ရေ'};

const MY_VOWELS=[['အာ','aa'],['အိ','i'],['အီ','ii'],['အု','u'],['အူ','uu'],['အေ','e'],['အဲ','eh'],['အော','aw'],['အို','o'],['အံ','an']];
/* full traditional 33 for the Alphabet reference. Several are rare Pali-only
   twins (ဃ ဈ ဋ ဌ ဍ ဎ ဏ ဓ ဘ ဠ) that share a sound with a common letter and are
   never taught in the lessons. Note: ဎ (U+100E) has no recorded clip — edge-tts
   returns no audio for it — so it gracefully falls back to device TTS. */
const MY_CONS=[['က','ka'],['ခ','hka'],['ဂ','ga'],['ဃ','ga'],['င','nga'],['စ','sa'],['ဆ','hsa'],['ဇ','za'],['ဈ','za'],['ည','nya'],['ဋ','ta'],['ဌ','hta'],['ဍ','da'],['ဎ','da'],['ဏ','na'],['တ','ta'],['ထ','hta'],['ဒ','da'],['ဓ','da'],['န','na'],['ပ','pa'],['ဖ','hpa'],['ဗ','ba'],['ဘ','ba'],['မ','ma'],['ယ','ya'],['ရ','ya'],['လ','la'],['ဝ','wa'],['သ','tha'],['ဟ','ha'],['ဠ','la'],['အ','a']];
const MY_NUMS=[['၀','0'],['၁','1'],['၂','2'],['၃','3'],['၄','4'],['၅','5'],['၆','6'],['၇','7'],['၈','8'],['၉','9']];
const MY_SRS_SEED=[['မင်္ဂလာပါ','Mingalaba','Hello'],['ကျေးဇူးတင်ပါတယ်','Kyeizu tin ba deh','Thank you'],['ဟုတ်ကဲ့','Houq keh','Yes'],['မဟုတ်ဘူး','Mahouq bu','No'],['ရေ','Ye','Water'],['ထမင်း','Htamin','Rice / meal'],['လူ','Lu','Person'],['ကောင်း','Kaung','Good'],['ကြီး','Kyi','Big'],['ငယ်','Ngeh','Small / young'],['ဒီနေ့','Di neh','Today'],['ပျော်','Pyaw','Happy'],['လက်ဖက်ရည်','Lahpeq yeh','Tea'],['ကျွန်တော်','Kyanaw','I (man speaking)'],['ကျွန်မ','Kyama','I (woman speaking)']];

const MY_LESSONS=[
/* ===================== ZONE 1 · THE SCRIPT ===================== */
/* --- Topic 1: velars က ခ ဂ င --- */
{id:'my_c1',title:'First letters',step:'learn',meta:'က ခ ဂ င & how Burmese works',vocab:[['က','ka','consonant: k'],['ခ','hka','consonant: k with a puff'],['ဂ','ga','consonant: g'],['င','nga','consonant: ng']],ex:[
{t:'note',tag:'Start here',q:'Meet Burmese script',body:'<p>Burmese is written in round, bubbly letters called <b>မြန်မာအက္ခရာ</b>, left to right. Spaces separate <b>phrases</b>, not every word. You will never type — you just <b>listen and tap</b>.</p><p>Every consonant carries a built-in <b>"a"</b> sound, so the very first letter <span class="deva">က</span> is already read <b>ka</b>.</p>',tip:'Tap the speaker on any letter to hear it.'},
{t:'note',tag:'A puff of air',q:'က and ခ',body:'<p><span class="deva">က</span> = <b>ka</b> — a plain k.</p><p><span class="deva">ခ</span> = <b>hka</b> — the same k but said with a <b>puff of air</b>. In this course, an <b>h before a letter</b> means "add a puff": hk, hs, ht, hp.</p>',eg:[['က','ka','plain k'],['ခ','hka','k + a puff']]},
{t:'mc',q:'What sound does this letter make?',d:'က',r:'ka',o:['ka','hka','ga','nga'],a:0},
{t:'mc',q:'And this one?',d:'ခ',r:'hka',o:['hka','ka','ga','nga'],a:0},
{t:'note',tag:'Voice it',q:'ဂ and င',body:'<p><span class="deva">ဂ</span> = <b>ga</b>, like the g in "go".</p><p><span class="deva">င</span> = <b>nga</b> — the ng of "sing". In Burmese it can even <b>start</b> a word.</p>',eg:[['ဂ','ga','g as in go'],['င','nga','ng as in sing']]},
{t:'mc',q:'What sound does this letter make?',d:'ဂ',r:'ga',o:['ga','ka','hka','nga'],a:0},
{t:'mc',q:'Which letter is the ng sound?',d:'င',r:'nga',o:['nga','ga','ka','hka'],a:0}]},
{id:'my_c1_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot က ခ ဂ င',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'က',o:['က','ခ','ဂ','င'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဂ',o:['ဂ','က','ခ','င'],a:0},
{t:'mc',q:'Which letter says ka?',o:['က','ခ','ဂ','င'],a:0},
{t:'mc',q:'Which letter says nga?',o:['င','ဂ','ခ','က'],a:0},
{t:'li',q:'Listen — which letter?',say:'ခ',o:['ခ','က','ဂ','င'],a:0},
{t:'mc',q:'ခ sounds like ka but with…',d:'ခ',r:'hka',o:['a puff of air','a hum','two beats','a whisper'],a:0},
{t:'li',q:'Listen — which letter?',say:'င',o:['င','ဂ','က','ခ'],a:0}]},
{id:'my_c1_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['က','ka'],['ခ','hka'],['ဂ','ga'],['င','nga']]},
{t:'mc',q:'Which letter says ga?',o:['ဂ','က','ခ','င'],a:0},
{t:'mc',q:'Which letter says hka?',o:['ခ','ဂ','က','င'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဂ',o:['ဂ','ခ','င','က'],a:0},
{t:'mc',q:'The h in hka tells you to…',o:['add a puff of air','make it silent','say it twice','lower your voice'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['င','nga'],['ဂ','ga'],['ခ','hka'],['က','ka']]}]},
{id:'my_c1_4',title:'Mix it',step:'mix',meta:'All four letters together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'င',r:'nga',o:['nga','ga','ka','hka'],a:0},
{t:'li',q:'Listen — which letter?',say:'က',o:['က','ခ','ဂ','င'],a:0},
{t:'mc',q:'Which is the puffed (aspirated) k?',o:['ခ','က','ဂ','င'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဂ',r:'ga',o:['ga','ka','nga','hka'],a:0},
{t:'li',q:'Listen — which letter?',say:'ခ',o:['ခ','က','ဂ','င'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['က','ka'],['ဂ','ga'],['င','nga'],['ခ','hka']]},
{t:'mc',q:'Every Burmese consonant has a built-in…',o:['"a" sound','tone mark','space after it','capital form'],a:0}]},
{id:'my_c1_5',title:'Checkpoint',step:'checkpoint',meta:'က ခ ဂ င mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'က',r:'ka',o:['ka','ga','hka','nga'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဂ',o:['ဂ','ခ','င','က'],a:0},
{t:'mc',q:'Which letter says nga?',o:['င','ဂ','က','ခ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ခ',r:'hka',o:['hka','ka','ga','nga'],a:0},
{t:'li',q:'Listen — which letter?',say:'င',o:['င','က','ဂ','ခ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['က','ka'],['ခ','hka'],['ဂ','ga'],['င','nga']]}]},

/* --- Topic 2: sibilants စ ဆ ဇ ည --- */
{id:'my_c2',title:'Hissing sounds',step:'learn',meta:'စ ဆ ဇ ည',vocab:[['စ','sa','consonant: s'],['ဆ','hsa','consonant: s with a puff'],['ဇ','za','consonant: z'],['ည','nya','consonant: ny']],ex:[
{t:'note',tag:'Hiss it',q:'စ and ဆ',body:'<p><span class="deva">စ</span> = <b>sa</b>, the s of "see".</p><p><span class="deva">ဆ</span> = <b>hsa</b> — s said with a <b>puff of air</b> (there is our h again).</p>',eg:[['စ','sa','s as in see'],['ဆ','hsa','s + a puff']]},
{t:'mc',q:'What sound does this letter make?',d:'စ',r:'sa',o:['sa','hsa','za','nya'],a:0},
{t:'mc',q:'And this one?',d:'ဆ',r:'hsa',o:['hsa','sa','za','nya'],a:0},
{t:'note',tag:'Buzz & nose',q:'ဇ and ည',body:'<p><span class="deva">ဇ</span> = <b>za</b>, the z of "zoo" — it buzzes.</p><p><span class="deva">ည</span> = <b>nya</b>, like the "ni" in "onion".</p>',eg:[['ဇ','za','z as in zoo'],['ည','nya','ny as in onion']]},
{t:'mc',q:'What sound does this letter make?',d:'ဇ',r:'za',o:['za','sa','hsa','nya'],a:0},
{t:'mc',q:'Which letter is the ny sound?',d:'ည',r:'nya',o:['nya','za','sa','hsa'],a:0}]},
{id:'my_c2_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot စ ဆ ဇ ည',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'စ',o:['စ','ဆ','ဇ','ည'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဇ',o:['ဇ','စ','ဆ','ည'],a:0},
{t:'mc',q:'Which letter says sa?',o:['စ','ဆ','ဇ','ည'],a:0},
{t:'mc',q:'Which letter says nya?',o:['ည','ဇ','ဆ','စ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဆ',o:['ဆ','စ','ဇ','ည'],a:0},
{t:'mc',q:'ဆ is…',d:'ဆ',r:'hsa',o:['s with a puff','z with a hum','ng','plain s'],a:0},
{t:'li',q:'Listen — which letter?',say:'ည',o:['ည','ဇ','ဆ','စ'],a:0}]},
{id:'my_c2_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['စ','sa'],['ဆ','hsa'],['ဇ','za'],['ည','nya']]},
{t:'mc',q:'Which letter says za?',o:['ဇ','စ','ဆ','ည'],a:0},
{t:'mc',q:'Which letter says hsa?',o:['ဆ','စ','ဇ','ည'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဇ',o:['ဇ','ဆ','ည','စ'],a:0},
{t:'mc',q:'ဇ is voiced — it buzzes like…',o:['z in zoo','s in see','h in hat','k in kite'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ည','nya'],['ဇ','za'],['ဆ','hsa'],['စ','sa']]}]},
{id:'my_c2_4',title:'Mix it',step:'mix',meta:'All four together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ည',r:'nya',o:['nya','za','sa','hsa'],a:0},
{t:'li',q:'Listen — which letter?',say:'စ',o:['စ','ဆ','ဇ','ည'],a:0},
{t:'mc',q:'Which is the puffed (aspirated) s?',o:['ဆ','စ','ဇ','ည'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဇ',r:'za',o:['za','sa','nya','hsa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဆ',o:['ဆ','စ','ဇ','ည'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['စ','sa'],['ဇ','za'],['ည','nya'],['ဆ','hsa']]}]},
{id:'my_c2_5',title:'Checkpoint',step:'checkpoint',meta:'စ ဆ ဇ ည mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'စ',r:'sa',o:['sa','za','hsa','nya'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဇ',o:['ဇ','ဆ','ည','စ'],a:0},
{t:'mc',q:'Which letter says nya?',o:['ည','ဇ','စ','ဆ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဆ',r:'hsa',o:['hsa','sa','za','nya'],a:0},
{t:'li',q:'Listen — which letter?',say:'ည',o:['ည','စ','ဇ','ဆ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['စ','sa'],['ဆ','hsa'],['ဇ','za'],['ည','nya']]}]},

/* --- Topic 3: dentals တ ထ ဒ န --- */
{id:'my_c3',title:'T, D & N',step:'learn',meta:'တ ထ ဒ န',vocab:[['တ','ta','consonant: t'],['ထ','hta','consonant: t with a puff'],['ဒ','da','consonant: d'],['န','na','consonant: n']],ex:[
{t:'note',tag:'Tongue on teeth',q:'တ and ထ',body:'<p><span class="deva">တ</span> = <b>ta</b>.</p><p><span class="deva">ထ</span> = <b>hta</b> — t said with a <b>puff of air</b>.</p>',eg:[['တ','ta','t'],['ထ','hta','t + a puff']]},
{t:'mc',q:'What sound does this letter make?',d:'တ',r:'ta',o:['ta','hta','da','na'],a:0},
{t:'mc',q:'And this one?',d:'ထ',r:'hta',o:['hta','ta','da','na'],a:0},
{t:'note',tag:'Voice & nose',q:'ဒ and န',body:'<p><span class="deva">ဒ</span> = <b>da</b>. <span class="deva">န</span> = <b>na</b>.</p><p>Heads-up: Burmese has a second, rounder set of these letters (<span class="deva">ဋ ဌ ဍ ဎ ဏ</span>) borrowed from Pali. They are <b>rare and sound the same</b> — learn <span class="deva">တ ထ ဒ န</span> first.</p>',eg:[['ဒ','da','d'],['န','na','n']]},
{t:'mc',q:'What sound does this letter make?',d:'ဒ',r:'da',o:['da','ta','hta','na'],a:0},
{t:'mc',q:'Which letter says na?',d:'န',r:'na',o:['na','da','ta','hta'],a:0}]},
{id:'my_c3_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot တ ထ ဒ န',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'တ',o:['တ','ထ','ဒ','န'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဒ',o:['ဒ','တ','ထ','န'],a:0},
{t:'mc',q:'Which letter says ta?',o:['တ','ထ','ဒ','န'],a:0},
{t:'mc',q:'Which letter says na?',o:['န','ဒ','ထ','တ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ထ',o:['ထ','တ','ဒ','န'],a:0},
{t:'mc',q:'ထ is…',d:'ထ',r:'hta',o:['t with a puff','d with a hum','n','plain t'],a:0},
{t:'li',q:'Listen — which letter?',say:'န',o:['န','ဒ','တ','ထ'],a:0}]},
{id:'my_c3_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['တ','ta'],['ထ','hta'],['ဒ','da'],['န','na']]},
{t:'mc',q:'Which letter says da?',o:['ဒ','တ','ထ','န'],a:0},
{t:'mc',q:'Which letter says hta?',o:['ထ','တ','ဒ','န'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဒ',o:['ဒ','ထ','န','တ'],a:0},
{t:'mc',q:'The rare Pali twins ဋ ဌ ဍ ဎ ဏ are…',o:['said the same as တ ထ ဒ န','completely new sounds','vowels','numbers'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['န','na'],['ဒ','da'],['ထ','hta'],['တ','ta']]}]},
{id:'my_c3_4',title:'Mix it',step:'mix',meta:'All four together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'န',r:'na',o:['na','da','ta','hta'],a:0},
{t:'li',q:'Listen — which letter?',say:'တ',o:['တ','ထ','ဒ','န'],a:0},
{t:'mc',q:'Which is the puffed (aspirated) t?',o:['ထ','တ','ဒ','န'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဒ',r:'da',o:['da','ta','na','hta'],a:0},
{t:'li',q:'Listen — which letter?',say:'ထ',o:['ထ','တ','ဒ','န'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['တ','ta'],['ဒ','da'],['န','na'],['ထ','hta']]}]},
{id:'my_c3_5',title:'Checkpoint',step:'checkpoint',meta:'တ ထ ဒ န mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'တ',r:'ta',o:['ta','da','hta','na'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဒ',o:['ဒ','ထ','န','တ'],a:0},
{t:'mc',q:'Which letter says na?',o:['န','ဒ','တ','ထ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ထ',r:'hta',o:['hta','ta','da','na'],a:0},
{t:'li',q:'Listen — which letter?',say:'န',o:['န','တ','ဒ','ထ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['တ','ta'],['ထ','hta'],['ဒ','da'],['န','na']]}]},

/* --- Topic 4: labials ပ ဖ ဗ မ --- */
{id:'my_c4',title:'P, B & M',step:'learn',meta:'ပ ဖ ဗ မ',vocab:[['ပ','pa','consonant: p'],['ဖ','hpa','consonant: p with a puff'],['ဗ','ba','consonant: b'],['မ','ma','consonant: m']],ex:[
{t:'note',tag:'Lips together',q:'ပ and ဖ',body:'<p><span class="deva">ပ</span> = <b>pa</b>.</p><p><span class="deva">ဖ</span> = <b>hpa</b> — p with a <b>puff of air</b>. It is NOT an "f" — the h just means the puff.</p>',eg:[['ပ','pa','p'],['ဖ','hpa','p + a puff']]},
{t:'mc',q:'What sound does this letter make?',d:'ပ',r:'pa',o:['pa','hpa','ba','ma'],a:0},
{t:'mc',q:'And this one?',d:'ဖ',r:'hpa',o:['hpa','pa','ba','ma'],a:0},
{t:'note',tag:'Voice & hum',q:'ဗ and မ',body:'<p><span class="deva">ဗ</span> = <b>ba</b>. <span class="deva">မ</span> = <b>ma</b>.</p><p>(There is also a rare Pali twin of ba, <span class="deva">ဘ</span> — same sound, seldom needed.)</p>',eg:[['ဗ','ba','b'],['မ','ma','m']]},
{t:'mc',q:'What sound does this letter make?',d:'ဗ',r:'ba',o:['ba','pa','hpa','ma'],a:0},
{t:'mc',q:'Which letter says ma?',d:'မ',r:'ma',o:['ma','ba','pa','hpa'],a:0}]},
{id:'my_c4_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot ပ ဖ ဗ မ',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ပ',o:['ပ','ဖ','ဗ','မ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဗ',o:['ဗ','ပ','ဖ','မ'],a:0},
{t:'mc',q:'Which letter says pa?',o:['ပ','ဖ','ဗ','မ'],a:0},
{t:'mc',q:'Which letter says ma?',o:['မ','ဗ','ဖ','ပ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဖ',o:['ဖ','ပ','ဗ','မ'],a:0},
{t:'mc',q:'ဖ is p with a puff — it is NOT…',d:'ဖ',r:'hpa',o:['an f sound','a b sound','an m sound','a p sound'],a:0},
{t:'li',q:'Listen — which letter?',say:'မ',o:['မ','ဗ','ပ','ဖ'],a:0}]},
{id:'my_c4_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ပ','pa'],['ဖ','hpa'],['ဗ','ba'],['မ','ma']]},
{t:'mc',q:'Which letter says ba?',o:['ဗ','ပ','ဖ','မ'],a:0},
{t:'mc',q:'Which letter says hpa?',o:['ဖ','ပ','ဗ','မ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဗ',o:['ဗ','ဖ','မ','ပ'],a:0},
{t:'mc',q:'ဗ and မ are both made with the…',o:['lips','throat','tongue tip','nose only'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['မ','ma'],['ဗ','ba'],['ဖ','hpa'],['ပ','pa']]}]},
{id:'my_c4_4',title:'Mix it',step:'mix',meta:'All four together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'မ',r:'ma',o:['ma','ba','pa','hpa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ပ',o:['ပ','ဖ','ဗ','မ'],a:0},
{t:'mc',q:'Which is the puffed (aspirated) p?',o:['ဖ','ပ','ဗ','မ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဗ',r:'ba',o:['ba','pa','ma','hpa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဖ',o:['ဖ','ပ','ဗ','မ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ပ','pa'],['ဗ','ba'],['မ','ma'],['ဖ','hpa']]}]},
{id:'my_c4_5',title:'Checkpoint',step:'checkpoint',meta:'ပ ဖ ဗ မ mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ပ',r:'pa',o:['pa','ba','hpa','ma'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဗ',o:['ဗ','ဖ','မ','ပ'],a:0},
{t:'mc',q:'Which letter says ma?',o:['မ','ဗ','ပ','ဖ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဖ',r:'hpa',o:['hpa','pa','ba','ma'],a:0},
{t:'li',q:'Listen — which letter?',say:'မ',o:['မ','ပ','ဗ','ဖ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ပ','pa'],['ဖ','hpa'],['ဗ','ba'],['မ','ma']]}]},

/* --- Topic 5: the remaining consonants ယ ရ လ ဝ သ ဟ အ --- */
{id:'my_c5',title:'The last letters',step:'learn',meta:'ယ ရ လ ဝ သ ဟ အ',vocab:[['ယ','ya','consonant: y'],['ရ','ya','consonant: y (the old ra)'],['လ','la','consonant: l'],['ဝ','wa','consonant: w'],['သ','tha','consonant: th (as in thin)'],['ဟ','ha','consonant: h'],['အ','a','the vowel-carrier a']],ex:[
{t:'note',tag:'Gliding letters',q:'ယ ရ လ ဝ',body:'<p><span class="deva">ယ</span> = <b>ya</b>. <span class="deva">ရ</span> = also <b>ya</b> — it is the old "ra", now said ya. <span class="deva">လ</span> = <b>la</b>. <span class="deva">ဝ</span> = <b>wa</b>.</p>',eg:[['ယ','ya','y'],['ရ','ya','y (old ra)'],['လ','la','l'],['ဝ','wa','w']]},
{t:'mc',q:'What sound does this letter make?',d:'လ',r:'la',o:['la','ya','wa','ha'],a:0},
{t:'mc',q:'And this one?',d:'ဝ',r:'wa',o:['wa','la','ya','ha'],a:0},
{t:'note',tag:'The special three',q:'သ ဟ အ',body:'<p><span class="deva">သ</span> = <b>tha</b> — the <b>th</b> of "thin" (never a hard t!).</p><p><span class="deva">ဟ</span> = <b>ha</b>. <span class="deva">အ</span> = <b>a</b> — a carrier that simply holds a bare vowel.</p>',eg:[['သ','tha','th as in thin'],['ဟ','ha','h'],['အ','a','a (carrier)']]},
{t:'mc',q:'Which letter is the "th" sound (as in thin)?',d:'သ',r:'tha',o:['tha','ta','sa','ha'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဟ',r:'ha',o:['ha','la','wa','a'],a:0}]},
{id:'my_c5_2',title:'Spot the letter',step:'recognize',meta:'Hear & spot သ ဟ လ ဝ အ',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'သ',o:['သ','ဟ','ဝ','လ'],a:0},
{t:'li',q:'Listen — which letter?',say:'လ',o:['လ','ဝ','ဟ','သ'],a:0},
{t:'mc',q:'Which letter says tha (th in thin)?',o:['သ','ဟ','ဝ','လ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဝ',o:['ဝ','လ','ဟ','သ'],a:0},
{t:'mc',q:'Which letter is the vowel-carrier a?',o:['အ','ဟ','ဝ','သ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဟ',o:['ဟ','သ','လ','ဝ'],a:0},
{t:'mc',q:'ယ and ရ are both said…',o:['ya','wa','la','tha'],a:0}]},
{id:'my_c5_3',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['သ','tha'],['ဟ','ha'],['လ','la'],['ဝ','wa'],['အ','a']]},
{t:'mc',q:'Which letter says wa?',o:['ဝ','လ','ဟ','သ'],a:0},
{t:'li',q:'Listen — which letter?',say:'သ',o:['သ','လ','ဝ','ဟ'],a:0},
{t:'mc',q:'Which is "th" as in thin, NOT a hard t?',o:['သ','တ','ထ','ဒ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ယ','ya'],['လ','la'],['ဝ','wa'],['ဟ','ha']]},
{t:'mc',q:'What sound does this letter make?',d:'အ',r:'a',o:['a','ha','wa','la'],a:0}]},
{id:'my_c5_4',title:'Mix it',step:'mix',meta:'All seven together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'သ',r:'tha',o:['tha','ta','sa','ha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဟ',o:['ဟ','ဝ','လ','သ'],a:0},
{t:'mc',q:'Which letter is the old "ra", now said ya?',o:['ရ','ယ','လ','ဝ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဝ',r:'wa',o:['wa','ya','la','ha'],a:0},
{t:'li',q:'Listen — which letter?',say:'လ',o:['လ','ဟ','သ','ဝ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['သ','tha'],['ဟ','ha'],['အ','a'],['ဝ','wa']]},
{t:'mc',q:'The letter သ is easy to read as a "t", but it is really…',o:['th as in thin','a hard t','an s','silent'],a:0}]},
{id:'my_c5_5',title:'Checkpoint',step:'checkpoint',meta:'ယ ရ လ ဝ သ ဟ အ mastered?',vocab:[],ex:[
{t:'mc',q:'Which letter says tha?',o:['သ','ဟ','ဝ','လ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဝ',o:['ဝ','ဟ','လ','သ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဟ',r:'ha',o:['ha','la','wa','tha'],a:0},
{t:'mc',q:'Which letter says la?',o:['လ','ဝ','ဟ','အ'],a:0},
{t:'li',q:'Listen — which letter?',say:'သ',o:['သ','ဟ','ဝ','လ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ယ','ya'],['လ','la'],['ဝ','wa'],['သ','tha'],['ဟ','ha']]}]},

/* --- Topic 6: vowels on consonants --- */
{id:'my_v1',title:'Adding vowels',step:'learn',meta:'ကာ ကိ ကု ကေ ကို ကော',vocab:[['ကာ','kaa','k + long a'],['ကိ','ki','k + i'],['ကု','ku','k + u'],['ကေ','ke','k + e'],['ကို','ko','k + o'],['ကော','kaw','k + aw']],ex:[
{t:'note',tag:'Change the vowel',q:'The built-in "a"',body:'<p>Every consonant already says "a": <span class="deva">က</span> = <b>ka</b>. Add a <b>vowel sign</b> and that "a" changes.</p><p><span class="deva">ကာ</span> adds a little tail for a long <b>kaa</b>.</p>',eg:[['က','ka','built-in a'],['ကာ','kaa','long aa']]},
{t:'note',tag:'Signs all around',q:'ကိ ကု ကေ ကို ကော',body:'<p><span class="deva">ကိ</span> = <b>ki</b>, <span class="deva">ကု</span> = <b>ku</b>, <span class="deva">ကေ</span> = <b>ke</b>, <span class="deva">ကို</span> = <b>ko</b>, <span class="deva">ကော</span> = <b>kaw</b>.</p><p>A sign can sit above, below, before or after the letter — but you always read the <b>consonant first</b>, then the vowel.</p>',eg:[['ကိ','ki','i'],['ကု','ku','u'],['ကေ','ke','e'],['ကို','ko','o']]},
{t:'mc',q:'What does this say?',d:'ကာ',r:'kaa',o:['kaa','ki','ku','ke'],a:0},
{t:'mc',q:'What does this say?',d:'ကု',r:'ku',o:['ku','ki','ke','ko'],a:0},
{t:'mc',q:'What does this say?',d:'ကေ',r:'ke',o:['ke','ku','ki','kaw'],a:0},
{t:'mc',q:'What does this say?',d:'ကို',r:'ko',o:['ko','ka','ku','ke'],a:0}]},
{id:'my_v1_2',title:'Hear the vowel',step:'recognize',meta:'Spot the vowel on က',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ကာ',o:['ကာ','ကိ','ကု','ကေ'],a:0},
{t:'li',q:'Listen — which one?',say:'ကို',o:['ကို','ကာ','ကေ','ကု'],a:0},
{t:'mc',q:'Which is ku?',o:['ကု','ကာ','ကိ','ကေ'],a:0},
{t:'li',q:'Listen — which one?',say:'ကေ',o:['ကေ','ကာ','ကို','ကု'],a:0},
{t:'mc',q:'Which is ki?',o:['ကိ','ကု','ကေ','ကာ'],a:0},
{t:'li',q:'Listen — which one?',say:'ကော',o:['ကော','ကာ','ကို','ကေ'],a:0},
{t:'mc',q:'You read the consonant first, then…',o:['add the vowel sign','ignore the sign','read right to left','double it'],a:0}]},
{id:'my_v1_3',title:'Pair them up',step:'build',meta:'Match syllable and sound',vocab:[],ex:[
{t:'match',q:'Match syllable and sound',pairs:[['ကာ','kaa'],['ကိ','ki'],['ကု','ku'],['ကေ','ke'],['ကို','ko']]},
{t:'mc',q:'Which is kaw?',o:['ကော','ကာ','ကို','ကေ'],a:0},
{t:'li',q:'Listen — which one?',say:'ကု',o:['ကု','ကာ','ကေ','ကို'],a:0},
{t:'mc',q:'Which is ko?',o:['ကို','ကာ','ကု','ကေ'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['ကေ','ke'],['ကို','ko'],['ကော','kaw'],['ကာ','kaa']]},
{t:'mc',q:'A vowel sign changes the letter’s built-in…',o:['a','k','tone only','nothing'],a:0}]},
{id:'my_v1_4',title:'Mix it',step:'mix',meta:'All the vowels together',vocab:[],ex:[
{t:'mc',q:'What does this say?',d:'ကော',r:'kaw',o:['kaw','ko','kaa','ke'],a:0},
{t:'li',q:'Listen — which one?',say:'ကိ',o:['ကိ','ကု','ကေ','ကာ'],a:0},
{t:'mc',q:'Which is kaa (long a)?',o:['ကာ','ကု','ကေ','ကို'],a:0},
{t:'mc',q:'What does this say?',d:'ကေ',r:'ke',o:['ke','ki','ko','ku'],a:0},
{t:'li',q:'Listen — which one?',say:'ကို',o:['ကို','ကာ','ကေ','ကု'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['ကာ','kaa'],['ကု','ku'],['ကို','ko'],['ကော','kaw']]}]},
{id:'my_v1_5',title:'Checkpoint',step:'checkpoint',meta:'Vowels mastered?',vocab:[],ex:[
{t:'mc',q:'What does this say?',d:'ကာ',r:'kaa',o:['kaa','ku','ke','ko'],a:0},
{t:'li',q:'Listen — which one?',say:'ကေ',o:['ကေ','ကာ','ကို','ကု'],a:0},
{t:'mc',q:'Which is ku?',o:['ကု','ကာ','ကိ','ကေ'],a:0},
{t:'mc',q:'What does this say?',d:'ကို',r:'ko',o:['ko','kaw','ka','ke'],a:0},
{t:'li',q:'Listen — which one?',say:'ကော',o:['ကော','ကာ','ကေ','ကို'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['ကာ','kaa'],['ကိ','ki'],['ကု','ku'],['ကေ','ke'],['ကို','ko']]}]},

/* --- Topic 7: tones & first real words --- */
{id:'my_v2',title:'Tones & first words',step:'learn',meta:'ရေ လူ ကောင်း မင်္ဂလာပါ',vocab:[['ရေ','ye','water'],['လူ','lu','person'],['ကောင်း','kaung','good'],['မင်္ဂလာပါ','mingalaba','hello']],ex:[
{t:'note',tag:'Burmese sings',q:'Three tones',body:'<p>Burmese has <b>three tones</b> — low, high and creaky. The <b>same syllable</b> said at a different pitch can be a <b>different word</b>.</p><p>You will not memorise rules for this — you will <b>listen and copy</b> the recording. Your ear does the work.</p>',tip:'The speaker button is your best friend for tones.'},
{t:'note',tag:'Your first words',q:'ရေ · လူ · ကောင်း',body:'<p>Sound these out — you can read them now! <span class="deva">ရေ</span> = <b>ye</b> (water) · <span class="deva">လူ</span> = <b>lu</b> (person) · <span class="deva">ကောင်း</span> = <b>kaung</b> (good).</p>',eg:[['ရေ','ye','water'],['လူ','lu','person'],['ကောင်း','kaung','good']]},
{t:'mc',q:'What does ရေ mean?',d:'ရေ',o:['water','person','good','hello'],a:0},
{t:'mc',q:'What does လူ mean?',d:'လူ',o:['person','water','good','tea'],a:0},
{t:'note',tag:'Say hello',q:'မင်္ဂလာပါ',body:'<p>The everyday Burmese greeting is <span class="deva">မင်္ဂလာပါ</span> — <b>mingalaba</b>. Tap to hear it, then say it back.</p>',eg:[['မင်္ဂလာပါ','mingalaba','hello']]},
{t:'mc',q:'How do you greet someone?',d:'မင်္ဂလာပါ',o:['mingalaba','ye','lu','kaung'],a:0},
{t:'li',q:'Listen — which word?',say:'ရေ',o:['ရေ','လူ','ကောင်း','မင်္ဂလာပါ'],a:0}]},
{id:'my_v2_2',title:'Hear the words',step:'recognize',meta:'ရေ လူ ကောင်း မင်္ဂလာပါ',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'လူ',o:['လူ','ရေ','ကောင်း','မင်္ဂလာပါ'],a:0},
{t:'mc',q:'Which word means "good"?',o:['ကောင်း','ရေ','လူ','မင်္ဂလာပါ'],a:0},
{t:'li',q:'Listen — which word?',say:'ကောင်း',o:['ကောင်း','ရေ','လူ','မင်္ဂလာပါ'],a:0},
{t:'mc',q:'What does ရေ mean?',d:'ရေ',o:['water','tea','person','good'],a:0},
{t:'mc',q:'Burmese has how many main tones?',o:['three','one','five','none'],a:0},
{t:'li',q:'Listen — which word?',say:'မင်္ဂလာပါ',o:['မင်္ဂလာပါ','ရေ','လူ','ကောင်း'],a:0},
{t:'mc',q:'Why does listening matter so much in Burmese?',o:['tones change the meaning','letters are silent','words are backwards','there are no vowels'],a:0}]},
{id:'my_v2_3',title:'Pair them up',step:'build',meta:'Match word and meaning',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ရေ','water'],['လူ','person'],['ကောင်း','good'],['မင်္ဂလာပါ','hello']]},
{t:'mc',q:'What does လူ mean?',d:'လူ',o:['person','water','good','hello'],a:0},
{t:'li',q:'Listen — which word?',say:'ရေ',o:['ရေ','လူ','ကောင်း','မင်္ဂလာပါ'],a:0},
{t:'mc',q:'The greeting mingalaba is written…',o:['မင်္ဂလာပါ','ရေ','ကောင်း','လူ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['မင်္ဂလာပါ','hello'],['ကောင်း','good'],['လူ','person'],['ရေ','water']]}]},
{id:'my_v2_4',title:'Mix it',step:'mix',meta:'Words & tones together',vocab:[],ex:[
{t:'mc',q:'What does ကောင်း mean?',d:'ကောင်း',o:['good','water','person','hello'],a:0},
{t:'li',q:'Listen — which word?',say:'လူ',o:['လူ','ရေ','ကောင်း','မင်္ဂလာပါ'],a:0},
{t:'mc',q:'Which word means water?',o:['ရေ','လူ','ကောင်း','မင်္ဂလာပါ'],a:0},
{t:'mc',q:'Three tones means the same sound can be…',o:['different words','always one word','a question','silent'],a:0},
{t:'li',q:'Listen — which word?',say:'ကောင်း',o:['ကောင်း','ရေ','လူ','မင်္ဂလာပါ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ရေ','water'],['လူ','person'],['မင်္ဂလာပါ','hello'],['ကောင်း','good']]}]},
{id:'my_v2_5',title:'Checkpoint',step:'checkpoint',meta:'You can read Burmese!',vocab:[],ex:[
{t:'mc',q:'How do you say hello?',d:'မင်္ဂလာပါ',o:['mingalaba','ye','lu','kaung'],a:0},
{t:'li',q:'Listen — which word?',say:'ရေ',o:['ရေ','လူ','ကောင်း','မင်္ဂလာပါ'],a:0},
{t:'mc',q:'What does လူ mean?',d:'လူ',o:['person','water','good','hello'],a:0},
{t:'mc',q:'Which word means good?',o:['ကောင်း','ရေ','လူ','မင်္ဂလာပါ'],a:0},
{t:'li',q:'Listen — which word?',say:'မင်္ဂလာပါ',o:['မင်္ဂလာပါ','ရေ','လူ','ကောင်း'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ရေ','water'],['လူ','person'],['ကောင်း','good'],['မင်္ဂလာပါ','hello']]}]},
];

/* ---------- per-language art (secular: Shan hills, timber house, toddy palms,
   rice paddies — NO pagodas/temples, per the art rule) ---------- */
const MY_HERO='<circle class="orb-glow" cx="922" cy="96" r="74"/><circle class="orb" cx="922" cy="96" r="45"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="130" cy="60" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="250" cy="108" r="1.2"/><circle cx="366" cy="48" r="2"/><circle cx="478" cy="124" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="566" cy="72" r="1.6"/><circle cx="684" cy="42" r="1.3" class="tw" style="animation-delay:.6s"/><circle cx="792" cy="114" r="1.8"/><circle cx="864" cy="150" r="1.3"/><circle cx="1020" cy="64" r="1.6" class="tw" style="animation-delay:1.8s"/><circle cx="1092" cy="120" r="1.4"/><circle cx="1136" cy="46" r="1.2"/><circle cx="180" cy="140" r="1.5"/><circle cx="326" cy="152" r="1.3" class="tw" style="animation-delay:2.3s"/><circle cx="626" cy="136" r="1.5"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="74" rx="28" ry="11"/><ellipse cx="78" cy="69" rx="22" ry="13"/><ellipse cx="26" cy="72" rx="20" ry="10"/></g>'
/* far: rolling Shan hills */
+'<path class="far" d="M0 214 Q110 168 220 202 Q330 164 440 200 Q550 166 660 200 Q770 162 880 200 Q990 168 1100 200 Q1155 184 1200 196 L1200 320 L0 320 Z"/>'
/* mid: closer hills, a timber house on posts & two toddy palms */
+'<path class="mid" d="M0 320 L0 276 Q220 250 440 268 Q680 288 900 262 Q1050 246 1200 268 L1200 320 Z '
+'M598 268 L598 232 L606 232 L606 268 Z M646 270 L646 232 L654 232 L654 270 Z M694 270 L694 232 L702 232 L702 270 Z M742 268 L742 232 L750 232 L750 268 Z '
+'M586 236 L586 200 L762 200 L762 236 Z M566 206 L674 150 L782 206 Z '
+'M600 268 L620 236 L627 236 L607 268 Z '
+'M492 262 C495 234 493 210 496 186 L500 187 C498 210 501 236 499 264 Z '
+'M497 184 C484 176 470 174 459 178 C472 178 484 182 495 188 Z M497 184 C508 174 521 171 532 175 C521 176 509 181 499 188 Z M497 184 C491 170 482 163 471 161 C482 168 490 176 495 186 Z M497 184 C503 170 512 163 523 161 C512 168 503 176 498 186 Z M497 184 C497 168 493 157 485 151 C491 160 494 172 495 184 Z"/>'
/* near: rice paddies + a toddy palm */
+'<g class="near"><path d="M0 298 Q160 262 320 294 Q480 320 640 288 Q800 258 960 296 Q1080 314 1200 292 L1200 320 L0 320 Z"/>'
+'<path d="M980 302 C986 262 982 222 988 188 L994 190 C990 224 996 262 992 304 Z"/>'
+'<path d="M991 186 C968 172 944 170 924 178 C946 176 970 182 989 192 Z"/><path d="M991 186 C1010 168 1034 164 1056 172 C1036 172 1012 180 994 192 Z"/><path d="M991 186 C980 164 962 152 940 150 C962 158 978 170 988 190 Z"/><path d="M991 186 C1002 162 1020 150 1044 148 C1022 156 1004 170 995 190 Z"/><path d="M991 186 C990 160 982 140 966 130 C978 144 986 164 989 188 Z"/>'
+'<circle cx="986" cy="190" r="3"/><circle cx="997" cy="190" r="3"/><circle cx="991" cy="195" r="3"/>'
+'</g>';
const MY_BAND='<circle class="orb-glow" cx="1046" cy="54" r="36"/><circle class="orb" cx="1046" cy="54" r="21"/>'
+'<path class="far" d="M0 150 Q80 126 160 144 Q240 124 320 142 Q400 124 480 142 Q560 124 640 142 Q720 124 800 142 Q880 124 960 142 Q1040 126 1120 142 Q1160 134 1200 142 L1200 200 L0 200 Z"/>'
+'<path class="mid" d="M0 200 L0 172 Q300 162 600 170 Q900 178 1200 166 L1200 200 Z '
+'M576 170 L576 144 L582 144 L582 170 Z M608 172 L608 144 L614 144 L614 172 Z M640 172 L640 144 L646 144 L646 172 Z M672 170 L672 144 L678 144 L678 170 Z '
+'M568 146 L568 122 L686 122 L686 146 Z M554 126 L627 90 L700 126 Z '
+'M578 170 L592 148 L598 148 L584 170 Z"/>'
+'<g class="near"><path d="M0 184 Q300 158 600 176 Q900 194 1200 172 L1200 200 L0 200 Z"/>'
+'<path d="M958 186 C962 162 960 142 964 124 L969 126 C966 144 970 166 968 188 Z"/>'
+'<path d="M966 122 C950 112 934 110 920 116 C936 114 952 118 964 126 Z"/><path d="M966 122 C980 108 996 104 1010 110 C996 110 980 116 968 126 Z"/><path d="M966 122 C958 104 946 96 932 94 C946 102 956 110 964 124 Z"/><path d="M966 122 C974 104 986 96 1000 94 C986 102 976 110 968 124 Z"/>'
+'</g>';
/* mascot: a friendly Burmese cat (warm sable-brown, copper eyes) */
function MY_MASCOT(m){var base='<path d="M14 21 L20 6 L28 20 Z" fill="#8A6A52"/><path d="M50 21 L44 6 L36 20 Z" fill="#8A6A52"/><path d="M17.5 18 L21 9 L25 18 Z" fill="#E4B4A2"/><path d="M46.5 18 L43 9 L39 18 Z" fill="#E4B4A2"/><circle cx="32" cy="34" r="21" fill="#9A7A62"/><ellipse cx="32" cy="41" rx="12.5" ry="9" fill="#EEDDC8"/><circle cx="20" cy="41" r="3" fill="var(--crimson)" opacity="0.18"/><circle cx="44" cy="41" r="3" fill="var(--crimson)" opacity="0.18"/><path d="M30 39 L34 39 L32 42 Z" fill="#7A4A3A"/><g stroke="#EEDDC8" stroke-width="1" stroke-linecap="round" opacity=".85"><line x1="20" y1="41" x2="9" y2="39"/><line x1="20" y1="43" x2="9" y2="45"/><line x1="44" y1="41" x2="55" y2="39"/><line x1="44" y1="43" x2="55" y2="45"/></g>';
  var f;
  if(m==='cheer')f='<path d="M22 32 Q25 28.5 28 32" fill="none" stroke="#3a2a1e" stroke-width="2.2" stroke-linecap="round"/><path d="M36 32 Q39 28.5 42 32" fill="none" stroke="#3a2a1e" stroke-width="2.2" stroke-linecap="round"/><path d="M28 44 Q32 48 36 44" fill="none" stroke="#7A4A3A" stroke-width="1.8" stroke-linecap="round"/>';
  else if(m==='oops')f='<path d="M21.5 30 Q25 28.5 28.5 30" fill="none" stroke="#3a2a1e" stroke-width="1.5" stroke-linecap="round"/><path d="M35.5 30 Q39 28.5 42.5 30" fill="none" stroke="#3a2a1e" stroke-width="1.5" stroke-linecap="round"/><circle cx="25" cy="34" r="2.4" fill="#3a2a1e"/><circle cx="39" cy="34" r="2.4" fill="#3a2a1e"/><circle cx="32" cy="45" r="1.8" fill="none" stroke="#7A4A3A" stroke-width="1.5"/><path d="M50 22 Q52.5 27 50 29 Q47.5 27 50 22 Z" fill="#7EC8E3" opacity=".85"/>';
  else f='<ellipse cx="25" cy="33" rx="2.6" ry="3.3" fill="#3a2a1e"/><ellipse cx="39" cy="33" rx="2.6" ry="3.3" fill="#3a2a1e"/><circle cx="25.9" cy="32" r="0.8" fill="#fff"/><circle cx="39.9" cy="32" r="0.8" fill="#fff"/><path d="M28 44 Q32 47 36 44" fill="none" stroke="#7A4A3A" stroke-width="1.6" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+base+f+'</svg>';}

/* register the pack — the engine picks it up via switchLang('my') */
registerPack({
  code:'my',
  name:'Burmese',
  nativeName:'မြန်မာ',
  ttsLocale:'my-MM',
  script:/[က-႟]/, /* Myanmar Unicode block */
  audioBase:'audio-my/',
  storageKey:'sajilo_my',
  brand:{h1:'Learn <em>Burmese</em>'},
  alpha:{native:'မြန်မာအက္ခရာ',vowels:'သရ',cons:'ဗျည်း',nums:'ဂဏန်း'},
  art:{hero:MY_HERO,band:MY_BAND,mascot:MY_MASCOT},
  voiceTest:v=>/^my(\b|[-_])/i.test(v.lang)||/burmese|myanmar/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:MY_LESSONS,units:MY_UNITS,unitsIntensive:[],sym:MY_SYM,
  vowels:MY_VOWELS,cons:MY_CONS,nums:MY_NUMS,srsSeed:MY_SRS_SEED
});
