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
  {n:2,t:'Foundations',d:'Greetings, people, numbers & your day',lessons:['my_greet','my_greet_2','my_greet_3','my_greet_4','my_greet_5','my_pron','my_pron_2','my_pron_3','my_pron_4','my_pron_5','my_num1','my_num1_2','my_num1_3','my_num1_4','my_num1_5','my_num2','my_num2_2','my_num2_3','my_num2_4','my_num2_5','my_court','my_court_2','my_court_3','my_court_4','my_court_5','my_intro','my_intro_2','my_intro_3','my_intro_4','my_intro_5','my_day','my_day_2','my_day_3','my_day_4','my_day_5']},
];

const MY_SYM={my_c1:'က',my_c2:'စ',my_c3:'တ',my_c4:'ပ',my_c5:'သ',my_v1:'ကာ',my_v2:'ရေ',my_greet:'နေ',my_pron:'သူ',my_num1:'၅',my_num2:'၂၀',my_court:'ဟုတ်',my_intro:'နာမည်',my_day:'မနက်'};

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

/* ===================== ZONE 2 · FOUNDATIONS ===================== */
/* --- Topic 1: greetings --- */
{id:'my_greet',title:'Greetings',step:'learn',meta:'Hello, how are you & goodbye',vocab:[['မင်္ဂလာပါ','mingalaba','hello'],['နေကောင်းလား','ne kaung la','how are you'],['နေကောင်းပါတယ်','ne kaung ba de','I am well'],['သွားတော့မယ်','thwa daw meh','goodbye'],['တွေ့မယ်','twei meh','see you']],ex:[
{t:'note',tag:'Zone 2',q:'Everyday Burmese',body:'<p>You can read now — time to <b>talk</b>. You already know <span class="deva">မင်္ဂလာပါ</span> <b>mingalaba</b> (hello). Let us add a few warm everyday lines.</p>',tip:'Keep tapping the speaker to copy the tones.'},
{t:'note',tag:'How are you?',q:'နေကောင်းလား',body:'<p><span class="deva">နေ</span> (ne) = to be / stay, <span class="deva">ကောင်း</span> (kaung) = well — you know it! — and <span class="deva">လား</span> (la) turns it into a yes/no question. So <span class="deva">နေကောင်းလား</span> = "Are you well?"</p><p>Reply: <span class="deva">နေကောင်းပါတယ်</span> <b>ne kaung ba de</b> — I am well.</p>',eg:[['နေကောင်းလား','ne kaung la','how are you'],['နေကောင်းပါတယ်','ne kaung ba de','I am well']]},
{t:'mc',q:'Which means "How are you?"',o:['နေကောင်းလား','နေကောင်းပါတယ်','မင်္ဂလာပါ','တွေ့မယ်'],a:0},
{t:'mc',q:'You are asked နေကောင်းလား. A good reply is…',d:'နေကောင်းလား',o:['နေကောင်းပါတယ်','မင်္ဂလာပါ','သွားတော့မယ်','တွေ့မယ်'],a:0},
{t:'note',tag:'Saying bye',q:'သွားတော့မယ် · တွေ့မယ်',body:'<p>To leave, say <span class="deva">သွားတော့မယ်</span> <b>thwa daw meh</b> — "I will be going now". Or a light <span class="deva">တွေ့မယ်</span> <b>twei meh</b> — "See you!"</p>',eg:[['သွားတော့မယ်','thwa daw meh','goodbye'],['တွေ့မယ်','twei meh','see you']]},
{t:'mc',q:'How do you say goodbye (I will be going)?',o:['သွားတော့မယ်','မင်္ဂလာပါ','နေကောင်းလား','နေကောင်းပါတယ်'],a:0},
{t:'li',q:'Listen — which greeting?',say:'မင်္ဂလာပါ',o:['မင်္ဂလာပါ','နေကောင်းလား','သွားတော့မယ်','တွေ့မယ်'],a:0}]},
{id:'my_greet_2',title:'Hear the greetings',step:'recognize',meta:'Spot each line',vocab:[],ex:[
{t:'li',q:'Listen — which line?',say:'နေကောင်းလား',o:['နေကောင်းလား','နေကောင်းပါတယ်','မင်္ဂလာပါ','သွားတော့မယ်'],a:0},
{t:'mc',q:'Which means "I am well"?',o:['နေကောင်းပါတယ်','နေကောင်းလား','တွေ့မယ်','မင်္ဂလာပါ'],a:0},
{t:'li',q:'Listen — which line?',say:'သွားတော့မယ်',o:['သွားတော့မယ်','တွေ့မယ်','မင်္ဂလာပါ','နေကောင်းလား'],a:0},
{t:'mc',q:'The particle လား at the end of a sentence makes it a…',o:['yes/no question','command','number','greeting'],a:0},
{t:'li',q:'Listen — which line?',say:'တွေ့မယ်',o:['တွေ့မယ်','သွားတော့မယ်','နေကောင်းပါတယ်','မင်္ဂလာပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'နေကောင်းပါတယ်',o:['I am well','hello','goodbye','see you'],a:0},
{t:'mc',q:'Which word means "hello"?',o:['မင်္ဂလာပါ','တွေ့မယ်','နေကောင်းလား','သွားတော့မယ်'],a:0}]},
{id:'my_greet_3',title:'Put it together',step:'build',meta:'Greet and reply',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['မင်္ဂလာပါ','hello'],['နေကောင်းလား','how are you'],['နေကောင်းပါတယ်','I am well'],['သွားတော့မယ်','goodbye']]},
{t:'mc',q:'Someone says မင်္ဂလာပါ. You reply…',o:['မင်္ဂလာပါ','သွားတော့မယ်','တွေ့မယ်','နေကောင်းလား'],a:0},
{t:'li',q:'Listen — which line?',say:'နေကောင်းပါတယ်',o:['နေကောင်းပါတယ်','နေကောင်းလား','မင်္ဂလာပါ','တွေ့မယ်'],a:0},
{t:'mc',q:'Which means "see you"?',o:['တွေ့မယ်','မင်္ဂလာပါ','နေကောင်းလား','သွားတော့မယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['တွေ့မယ်','see you'],['နေကောင်းလား','how are you'],['မင်္ဂလာပါ','hello'],['နေကောင်းပါတယ်','I am well']]}]},
{id:'my_greet_4',title:'Mix it',step:'mix',meta:'All the greetings',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'သွားတော့မယ်',o:['goodbye','hello','I am well','see you'],a:0},
{t:'li',q:'Listen — which line?',say:'မင်္ဂလာပါ',o:['မင်္ဂလာပါ','နေကောင်းပါတယ်','သွားတော့မယ်','တွေ့မယ်'],a:0},
{t:'mc',q:'How do you ask if someone is well?',o:['နေကောင်းလား','နေကောင်းပါတယ်','မင်္ဂလာပါ','တွေ့မယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'တွေ့မယ်',o:['see you','hello','sorry','I am well'],a:0},
{t:'li',q:'Listen — which line?',say:'နေကောင်းလား',o:['နေကောင်းလား','နေကောင်းပါတယ်','မင်္ဂလာပါ','သွားတော့မယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['မင်္ဂလာပါ','hello'],['သွားတော့မယ်','goodbye'],['တွေ့မယ်','see you'],['နေကောင်းပါတယ်','I am well']]}]},
{id:'my_greet_5',title:'Checkpoint',step:'checkpoint',meta:'Greetings mastered?',vocab:[],ex:[
{t:'mc',q:'Say hello:',o:['မင်္ဂလာပါ','သွားတော့မယ်','နေကောင်းလား','တွေ့မယ်'],a:0},
{t:'li',q:'Listen — which line?',say:'နေကောင်းပါတယ်',o:['နေကောင်းပါတယ်','နေကောင်းလား','မင်္ဂလာပါ','သွားတော့မယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'နေကောင်းလား',o:['how are you','I am well','goodbye','hello'],a:0},
{t:'mc',q:'Say goodbye (I will be going):',o:['သွားတော့မယ်','မင်္ဂလာပါ','နေကောင်းပါတယ်','တွေ့မယ်'],a:0},
{t:'li',q:'Listen — which line?',say:'တွေ့မယ်',o:['တွေ့မယ်','မင်္ဂလာပါ','သွားတော့မယ်','နေကောင်းလား'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['မင်္ဂလာပါ','hello'],['နေကောင်းလား','how are you'],['နေကောင်းပါတယ်','I am well'],['တွေ့မယ်','see you']]}]},

/* --- Topic 2: pronouns --- */
{id:'my_pron',title:'People',step:'learn',meta:'I, you, he/she, we, they',vocab:[['ကျွန်တော်','kyanaw','I (man speaking)'],['ကျွန်မ','kyama','I (woman speaking)'],['ခင်ဗျား','hkamya','you (man speaking)'],['ရှင်','shin','you (woman speaking)'],['သူ','thu','he / she'],['ကျွန်တော်တို့','kyanaw do','we'],['သူတို့','thu do','they']],ex:[
{t:'note',tag:'Who is who',q:'I: ကျွန်တော် / ကျွန်မ',body:'<p>Burmese has a polite word for "I" that depends on the <b>speaker</b>: a man says <span class="deva">ကျွန်တော်</span> <b>kyanaw</b>, a woman says <span class="deva">ကျွန်မ</span> <b>kyama</b>.</p>',eg:[['ကျွန်တော်','kyanaw','I — man speaking'],['ကျွန်မ','kyama','I — woman speaking']]},
{t:'mc',q:'A man says "I" as…',o:['ကျွန်တော်','ကျွန်မ','ခင်ဗျား','သူ'],a:0},
{t:'mc',q:'A woman says "I" as…',o:['ကျွန်မ','ကျွန်တော်','ရှင်','သူ'],a:0},
{t:'note',tag:'You & who',q:'ခင်ဗျား / ရှင် / သူ',body:'<p>"You" also depends on the speaker: a man says <span class="deva">ခင်ဗျား</span> <b>hkamya</b>, a woman says <span class="deva">ရှင်</span> <b>shin</b>. And one handy word, <span class="deva">သူ</span> <b>thu</b>, means <b>both</b> "he" and "she".</p>',eg:[['ခင်ဗျား','hkamya','you — man speaking'],['ရှင်','shin','you — woman speaking'],['သူ','thu','he / she']]},
{t:'mc',q:'Which word means both "he" and "she"?',o:['သူ','ခင်ဗျား','ကျွန်တော်','ရှင်'],a:0},
{t:'note',tag:'Make it plural',q:'Add တို့',body:'<p>Add <span class="deva">တို့</span> (do) to make a pronoun plural: <span class="deva">ကျွန်တော်တို့</span> = <b>we</b>, <span class="deva">သူတို့</span> = <b>they</b>.</p><p>Tip: Burmese speakers are polite and often <b>drop</b> pronouns, or use a name or title instead.</p>',eg:[['ကျွန်တော်တို့','kyanaw do','we'],['သူတို့','thu do','they']]},
{t:'mc',q:'How do you say "they"?',o:['သူတို့','ကျွန်တော်တို့','သူ','ရှင်'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'သူ',o:['သူ','ခင်ဗျား','ကျွန်မ','ရှင်'],a:0}]},
{id:'my_pron_2',title:'Hear the people',step:'recognize',meta:'Spot each pronoun',vocab:[],ex:[
{t:'li',q:'Listen — which pronoun?',say:'ကျွန်တော်',o:['ကျွန်တော်','ကျွန်မ','ခင်ဗျား','သူ'],a:0},
{t:'mc',q:'Which means "I" for a woman?',o:['ကျွန်မ','ကျွန်တော်','ရှင်','သူတို့'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'ရှင်',o:['ရှင်','ခင်ဗျား','သူ','ကျွန်မ'],a:0},
{t:'mc',q:'What does this mean?',d:'သူတို့',o:['they','we','you','he / she'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'ကျွန်မ',o:['ကျွန်မ','ကျွန်တော်','သူ','ခင်ဗျား'],a:0},
{t:'mc',q:'ခင်ဗျား is "you" said by a…',o:['man','woman','child','group'],a:0},
{t:'mc',q:'Which means "we"?',o:['ကျွန်တော်တို့','သူတို့','ကျွန်တော်','ခင်ဗျား'],a:0}]},
{id:'my_pron_3',title:'Put it together',step:'build',meta:'Match people',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ကျွန်တော်','I (man)'],['ကျွန်မ','I (woman)'],['သူ','he / she'],['သူတို့','they']]},
{t:'mc',q:'Which means "you" when a woman speaks?',o:['ရှင်','ခင်ဗျား','ကျွန်မ','သူ'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'သူတို့',o:['သူတို့','ကျွန်တော်တို့','သူ','ရှင်'],a:0},
{t:'mc',q:'The suffix တို့ makes a pronoun…',o:['plural','a question','polite','past'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ခင်ဗျား','you (man)'],['ရှင်','you (woman)'],['ကျွန်တော်တို့','we'],['သူတို့','they']]}]},
{id:'my_pron_4',title:'Mix it',step:'mix',meta:'All the pronouns',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ကျွန်တော်',o:['I (man speaking)','you','he / she','we'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'ခင်ဗျား',o:['ခင်ဗျား','ရှင်','ကျွန်တော်','သူ'],a:0},
{t:'mc',q:'Which word covers both "he" and "she"?',o:['သူ','သူတို့','ရှင်','ကျွန်မ'],a:0},
{t:'mc',q:'What does this mean?',d:'ကျွန်တော်တို့',o:['we','they','I','you'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'ကျွန်တော်',o:['ကျွန်တော်','ကျွန်မ','သူ','ခင်ဗျား'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ကျွန်မ','I (woman)'],['ခင်ဗျား','you (man)'],['သူ','he / she'],['ကျွန်တော်တို့','we']]}]},
{id:'my_pron_5',title:'Checkpoint',step:'checkpoint',meta:'People mastered?',vocab:[],ex:[
{t:'mc',q:'A man says "I" as…',o:['ကျွန်တော်','ကျွန်မ','သူ','ရှင်'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'ရှင်',o:['ရှင်','ခင်ဗျား','ကျွန်မ','သူ'],a:0},
{t:'mc',q:'What does this mean?',d:'သူ',o:['he / she','they','we','you'],a:0},
{t:'mc',q:'Which means "they"?',o:['သူတို့','ကျွန်တော်တို့','သူ','ခင်ဗျား'],a:0},
{t:'li',q:'Listen — which pronoun?',say:'ကျွန်မ',o:['ကျွန်မ','ကျွန်တော်','သူတို့','ခင်ဗျား'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ကျွန်တော်','I (man)'],['ရှင်','you (woman)'],['သူ','he / she'],['သူတို့','they']]}]},

/* --- Topic 3: numbers 1–10 --- */
{id:'my_num1',title:'Numbers 1–10',step:'learn',meta:'တစ် နှစ် သုံး … ဆယ်',vocab:[['တစ်','tiq','one (၁)'],['နှစ်','hniq','two (၂)'],['သုံး','thoun','three (၃)'],['လေး','le','four (၄)'],['ငါး','nga','five (၅)'],['ခြောက်','chauq','six (၆)'],['ခုနစ်','hkuniq','seven (၇)'],['ရှစ်','shiq','eight (၈)'],['ကိုး','ko','nine (၉)'],['ဆယ်','hse','ten (၁၀)']],ex:[
{t:'note',tag:'Numbers 1–5',q:'တစ် နှစ် သုံး လေး ငါး',body:'<p><span class="deva">၁ တစ်</span> <b>tiq</b> · <span class="deva">၂ နှစ်</span> <b>hniq</b> · <span class="deva">၃ သုံး</span> <b>thoun</b> · <span class="deva">၄ လေး</span> <b>le</b> · <span class="deva">၅ ငါး</span> <b>nga</b>.</p><p>Burmese has its own digits too: <span class="deva">၁ ၂ ၃ ၄ ၅</span>.</p>',eg:[['တစ်','tiq','1'],['နှစ်','hniq','2'],['သုံး','thoun','3'],['ငါး','nga','5']]},
{t:'mc',q:'Which number is this?',d:'၃',o:['thoun (3)','hniq (2)','le (4)','nga (5)'],a:0},
{t:'mc',q:'Which word means "five"?',o:['ငါး','လေး','သုံး','နှစ်'],a:0},
{t:'note',tag:'Numbers 6–10',q:'ခြောက် ခုနစ် ရှစ် ကိုး ဆယ်',body:'<p><span class="deva">၆ ခြောက်</span> <b>chauq</b> · <span class="deva">၇ ခုနစ်</span> <b>hkuniq</b> · <span class="deva">၈ ရှစ်</span> <b>shiq</b> · <span class="deva">၉ ကိုး</span> <b>ko</b> · <span class="deva">၁၀ ဆယ်</span> <b>hse</b>.</p>',eg:[['ခြောက်','chauq','6'],['ရှစ်','shiq','8'],['ကိုး','ko','9'],['ဆယ်','hse','10']]},
{t:'mc',q:'Which number is this?',d:'၈',o:['shiq (8)','chauq (6)','ko (9)','hse (10)'],a:0},
{t:'li',q:'Listen — which number?',say:'ခြောက်',o:['ခြောက်','ကိုး','ဆယ်','ရှစ်'],a:0},
{t:'mc',q:'Which word means "ten"?',o:['ဆယ်','ကိုး','ရှစ်','ခုနစ်'],a:0}]},
{id:'my_num1_2',title:'Hear the numbers',step:'recognize',meta:'Spot 1–10',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'သုံး',o:['သုံး','လေး','ငါး','နှစ်'],a:0},
{t:'mc',q:'Which number is this?',d:'၇',o:['hkuniq (7)','chauq (6)','shiq (8)','ko (9)'],a:0},
{t:'li',q:'Listen — which number?',say:'ကိုး',o:['ကိုး','ဆယ်','ရှစ်','ခြောက်'],a:0},
{t:'mc',q:'Which is "two"?',o:['နှစ်','သုံး','လေး','တစ်'],a:0},
{t:'li',q:'Listen — which number?',say:'ဆယ်',o:['ဆယ်','ကိုး','ငါး','သုံး'],a:0},
{t:'mc',q:'Which number is this?',d:'၄',o:['le (4)','thoun (3)','nga (5)','hniq (2)'],a:0},
{t:'mc',q:'Which is "one"?',o:['တစ်','နှစ်','ကိုး','လေး'],a:0}]},
{id:'my_num1_3',title:'Put it together',step:'build',meta:'Match numbers',vocab:[],ex:[
{t:'match',q:'Match number and word',pairs:[['တစ်','one'],['နှစ်','two'],['သုံး','three'],['လေး','four'],['ငါး','five']]},
{t:'mc',q:'Which is "seven"?',o:['ခုနစ်','ခြောက်','ရှစ်','ကိုး'],a:0},
{t:'li',q:'Listen — which number?',say:'ရှစ်',o:['ရှစ်','ခြောက်','ကိုး','ဆယ်'],a:0},
{t:'mc',q:'Which number is this?',d:'၆',o:['chauq (6)','shiq (8)','le (4)','hse (10)'],a:0},
{t:'match',q:'Match number and word',pairs:[['ခြောက်','six'],['ခုနစ်','seven'],['ရှစ်','eight'],['ကိုး','nine'],['ဆယ်','ten']]}]},
{id:'my_num1_4',title:'Mix it',step:'mix',meta:'All of 1–10',vocab:[],ex:[
{t:'mc',q:'Which number is this?',d:'၉',o:['ko (9)','chauq (6)','hse (10)','shiq (8)'],a:0},
{t:'li',q:'Listen — which number?',say:'ငါး',o:['ငါး','လေး','သုံး','နှစ်'],a:0},
{t:'mc',q:'Which is "ten"?',o:['ဆယ်','ကိုး','ရှစ်','ခုနစ်'],a:0},
{t:'li',q:'Listen — which number?',say:'တစ်',o:['တစ်','နှစ်','သုံး','လေး'],a:0},
{t:'mc',q:'Which number is this?',d:'၅',o:['nga (5)','le (4)','thoun (3)','chauq (6)'],a:0},
{t:'match',q:'Match number and word',pairs:[['တစ်','one'],['သုံး','three'],['ငါး','five'],['ခုနစ်','seven'],['ကိုး','nine']]}]},
{id:'my_num1_5',title:'Checkpoint',step:'checkpoint',meta:'1–10 mastered?',vocab:[],ex:[
{t:'mc',q:'Which number is this?',d:'၂',o:['hniq (2)','tiq (1)','thoun (3)','le (4)'],a:0},
{t:'li',q:'Listen — which number?',say:'ခုနစ်',o:['ခုနစ်','ခြောက်','ရှစ်','ကိုး'],a:0},
{t:'mc',q:'Which is "four"?',o:['လေး','သုံး','ငါး','နှစ်'],a:0},
{t:'mc',q:'Which number is this?',d:'၁၀',o:['hse (10)','ko (9)','shiq (8)','chauq (6)'],a:0},
{t:'li',q:'Listen — which number?',say:'ဆယ်',o:['ဆယ်','ကိုး','ရှစ်','ငါး'],a:0},
{t:'match',q:'Match number and word',pairs:[['နှစ်','two'],['လေး','four'],['ခြောက်','six'],['ရှစ်','eight'],['ဆယ်','ten']]}]},

/* --- Topic 4: numbers 11–100 --- */
{id:'my_num2',title:'Numbers to 100',step:'learn',meta:'Teens, tens & ရာ',vocab:[['ဆယ့်တစ်','hse tiq','eleven (၁၁)'],['ဆယ့်နှစ်','hse hniq','twelve (၁၂)'],['ဆယ့်ငါး','hse nga','fifteen (၁၅)'],['နှစ်ဆယ်','hniq hse','twenty (၂၀)'],['သုံးဆယ်','thoun hse','thirty (၃၀)'],['တစ်ရာ','tiq ya','one hundred (၁၀၀)']],ex:[
{t:'note',tag:'Teens: ten-and',q:'ဆယ့် + unit',body:'<p>For 11–19, start with <span class="deva">ဆယ့်</span> <b>hse</b> ("ten-and") then the unit: <span class="deva">ဆယ့်တစ်</span> = 11, <span class="deva">ဆယ့်နှစ်</span> = 12, <span class="deva">ဆယ့်ငါး</span> = 15.</p>',eg:[['ဆယ့်တစ်','hse tiq','11'],['ဆယ့်နှစ်','hse hniq','12'],['ဆယ့်ငါး','hse nga','15']]},
{t:'mc',q:'Which is "eleven"?',o:['ဆယ့်တစ်','ဆယ့်နှစ်','နှစ်ဆယ်','ဆယ်'],a:0},
{t:'mc',q:'Which number is this?',d:'၁၂',o:['hse hniq (12)','hse tiq (11)','hniq hse (20)','hse nga (15)'],a:0},
{t:'note',tag:'Tens: unit-ten',q:'unit + ဆယ်',body:'<p>For 20, 30, 40…, put the unit <b>first</b>: <span class="deva">နှစ်ဆယ်</span> (2 × 10 = 20), <span class="deva">သုံးဆယ်</span> (3 × 10 = 30). Notice the order flips!</p><p>And 100 is <span class="deva">ရာ</span> <b>ya</b> — <span class="deva">တစ်ရာ</span> = one hundred.</p>',eg:[['နှစ်ဆယ်','hniq hse','20'],['သုံးဆယ်','thoun hse','30'],['တစ်ရာ','tiq ya','100']]},
{t:'mc',q:'Which is "twenty"?',o:['နှစ်ဆယ်','သုံးဆယ်','ဆယ့်နှစ်','တစ်ရာ'],a:0},
{t:'mc',q:'Which means "one hundred"?',o:['တစ်ရာ','ဆယ်','နှစ်ဆယ်','ဆယ့်တစ်'],a:0},
{t:'li',q:'Listen — which number?',say:'သုံးဆယ်',o:['သုံးဆယ်','နှစ်ဆယ်','ဆယ့်နှစ်','တစ်ရာ'],a:0}]},
{id:'my_num2_2',title:'Hear the numbers',step:'recognize',meta:'Spot 11–100',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'ဆယ့်တစ်',o:['ဆယ့်တစ်','ဆယ့်နှစ်','နှစ်ဆယ်','ဆယ့်ငါး'],a:0},
{t:'mc',q:'Which is "fifteen"?',o:['ဆယ့်ငါး','ဆယ့်နှစ်','နှစ်ဆယ်','သုံးဆယ်'],a:0},
{t:'li',q:'Listen — which number?',say:'နှစ်ဆယ်',o:['နှစ်ဆယ်','ဆယ့်နှစ်','သုံးဆယ်','တစ်ရာ'],a:0},
{t:'mc',q:'For the "teens", which word comes FIRST?',o:['ဆယ့် (ten)','the unit','ရာ (hundred)','နှစ် (two)'],a:0},
{t:'li',q:'Listen — which number?',say:'တစ်ရာ',o:['တစ်ရာ','နှစ်ဆယ်','သုံးဆယ်','ဆယ့်ငါး'],a:0},
{t:'mc',q:'What does this mean?',d:'သုံးဆယ်',o:['thirty','thirteen','three','three hundred'],a:0}]},
{id:'my_num2_3',title:'Put it together',step:'build',meta:'Build the numbers',vocab:[],ex:[
{t:'match',q:'Match number and value',pairs:[['ဆယ့်တစ်','11'],['ဆယ့်နှစ်','12'],['ဆယ့်ငါး','15'],['နှစ်ဆယ်','20'],['သုံးဆယ်','30']]},
{t:'mc',q:'Which is "twelve"?',o:['ဆယ့်နှစ်','ဆယ့်တစ်','နှစ်ဆယ်','ဆယ့်ငါး'],a:0},
{t:'li',q:'Listen — which number?',say:'ဆယ့်ငါး',o:['ဆယ့်ငါး','ဆယ့်တစ်','နှစ်ဆယ်','သုံးဆယ်'],a:0},
{t:'mc',q:'How is 20 built?',o:['unit then ten (နှစ်ဆယ်)','ten then unit (ဆယ့်နှစ်)','just ရာ','just ဆယ်'],a:0},
{t:'match',q:'Match number and value',pairs:[['နှစ်ဆယ်','20'],['သုံးဆယ်','30'],['တစ်ရာ','100'],['ဆယ့်ငါး','15']]}]},
{id:'my_num2_4',title:'Mix it',step:'mix',meta:'Teens & tens together',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဆယ့်တစ်',o:['eleven','twenty','one','one hundred'],a:0},
{t:'li',q:'Listen — which number?',say:'သုံးဆယ်',o:['သုံးဆယ်','နှစ်ဆယ်','ဆယ့်နှစ်','တစ်ရာ'],a:0},
{t:'mc',q:'Which means "one hundred"?',o:['တစ်ရာ','ဆယ်','နှစ်ဆယ်','ဆယ့်ငါး'],a:0},
{t:'mc',q:'Which is "twenty"?',o:['နှစ်ဆယ်','ဆယ့်နှစ်','သုံးဆယ်','တစ်ရာ'],a:0},
{t:'li',q:'Listen — which number?',say:'ဆယ့်နှစ်',o:['ဆယ့်နှစ်','ဆယ့်တစ်','နှစ်ဆယ်','ဆယ့်ငါး'],a:0},
{t:'match',q:'Match number and value',pairs:[['ဆယ့်တစ်','11'],['ဆယ့်ငါး','15'],['နှစ်ဆယ်','20'],['တစ်ရာ','100']]}]},
{id:'my_num2_5',title:'Checkpoint',step:'checkpoint',meta:'To 100 mastered?',vocab:[],ex:[
{t:'mc',q:'Which is "eleven"?',o:['ဆယ့်တစ်','နှစ်ဆယ်','ဆယ့်နှစ်','တစ်ရာ'],a:0},
{t:'li',q:'Listen — which number?',say:'နှစ်ဆယ်',o:['နှစ်ဆယ်','သုံးဆယ်','ဆယ့်နှစ်','တစ်ရာ'],a:0},
{t:'mc',q:'What does this mean?',d:'တစ်ရာ',o:['one hundred','eleven','ten','twenty'],a:0},
{t:'mc',q:'Which is "thirty"?',o:['သုံးဆယ်','နှစ်ဆယ်','ဆယ့်သုံး','တစ်ရာ'],a:0},
{t:'li',q:'Listen — which number?',say:'ဆယ့်ငါး',o:['ဆယ့်ငါး','ဆယ့်တစ်','နှစ်ဆယ်','သုံးဆယ်'],a:0},
{t:'match',q:'Match number and value',pairs:[['ဆယ့်နှစ်','12'],['ဆယ့်ငါး','15'],['နှစ်ဆယ်','20'],['သုံးဆယ်','30'],['တစ်ရာ','100']]}]},

/* --- Topic 5: courtesy --- */
{id:'my_court',title:'Courtesy',step:'learn',meta:'Thanks, sorry, yes & no',vocab:[['ကျေးဇူးတင်ပါတယ်','kyeizu tin ba de','thank you'],['ရပါတယ်','ya ba de','you are welcome'],['တောင်းပန်ပါတယ်','taun ban ba de','sorry'],['တစ်ဆိတ်လောက်','ta hseiq lauk','excuse me'],['ဟုတ်ကဲ့','houq keh','yes'],['မဟုတ်ဘူး','ma houq bu','no']],ex:[
{t:'note',tag:'Thanks',q:'ကျေးဇူးတင်ပါတယ်',body:'<p><span class="deva">ကျေးဇူးတင်ပါတယ်</span> <b>kyeizu tin ba de</b> — thank you. The reply is a warm <span class="deva">ရပါတယ်</span> <b>ya ba de</b> — "it is fine / you are welcome".</p>',eg:[['ကျေးဇူးတင်ပါတယ်','kyeizu tin ba de','thank you'],['ရပါတယ်','ya ba de','you are welcome']]},
{t:'mc',q:'How do you say "thank you"?',o:['ကျေးဇူးတင်ပါတယ်','ရပါတယ်','တောင်းပန်ပါတယ်','ဟုတ်ကဲ့'],a:0},
{t:'mc',q:'Someone thanks you. You reply…',o:['ရပါတယ်','ကျေးဇူးတင်ပါတယ်','မဟုတ်ဘူး','တစ်ဆိတ်လောက်'],a:0},
{t:'note',tag:'Sorry & excuse me',q:'တောင်းပန် · တစ်ဆိတ်လောက်',body:'<p><span class="deva">တောင်းပန်ပါတယ်</span> <b>taun ban ba de</b> — I am sorry. To get by or get attention, say <span class="deva">တစ်ဆိတ်လောက်</span> <b>ta hseiq lauk</b> — excuse me / just a moment.</p>',eg:[['တောင်းပန်ပါတယ်','taun ban ba de','sorry'],['တစ်ဆိတ်လောက်','ta hseiq lauk','excuse me']]},
{t:'mc',q:'How do you say "sorry"?',o:['တောင်းပန်ပါတယ်','ကျေးဇူးတင်ပါတယ်','ဟုတ်ကဲ့','ရပါတယ်'],a:0},
{t:'note',tag:'Yes & no',q:'ဟုတ်ကဲ့ · မဟုတ်ဘူး',body:'<p><span class="deva">ဟုတ်ကဲ့</span> <b>houq keh</b> — yes (polite). <span class="deva">မဟုတ်ဘူး</span> <b>ma houq bu</b> — no. Notice the <span class="deva">မ</span> (ma) in front flips it to "not".</p><p>Small word, big politeness: adding <span class="deva">ပါ</span> (ba) to almost anything makes it softer.</p>',eg:[['ဟုတ်ကဲ့','houq keh','yes'],['မဟုတ်ဘူး','ma houq bu','no']]},
{t:'li',q:'Listen — which word?',say:'ဟုတ်ကဲ့',o:['ဟုတ်ကဲ့','မဟုတ်ဘူး','ရပါတယ်','ကျေးဇူးတင်ပါတယ်'],a:0}]},
{id:'my_court_2',title:'Hear the courtesies',step:'recognize',meta:'Spot each phrase',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'ကျေးဇူးတင်ပါတယ်',o:['ကျေးဇူးတင်ပါတယ်','ရပါတယ်','တောင်းပန်ပါတယ်','ဟုတ်ကဲ့'],a:0},
{t:'mc',q:'Which means "no"?',o:['မဟုတ်ဘူး','ဟုတ်ကဲ့','ရပါတယ်','တစ်ဆိတ်လောက်'],a:0},
{t:'li',q:'Listen — which phrase?',say:'တောင်းပန်ပါတယ်',o:['တောင်းပန်ပါတယ်','ကျေးဇူးတင်ပါတယ်','ရပါတယ်','မဟုတ်ဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'ရပါတယ်',o:['you are welcome','thank you','sorry','no'],a:0},
{t:'li',q:'Listen — which phrase?',say:'မဟုတ်ဘူး',o:['မဟုတ်ဘူး','ဟုတ်ကဲ့','ရပါတယ်','တစ်ဆိတ်လောက်'],a:0},
{t:'mc',q:'The little word ပါ (ba) added to a phrase makes it more…',o:['polite','loud','past','plural'],a:0}]},
{id:'my_court_3',title:'Put it together',step:'build',meta:'Match the courtesies',vocab:[],ex:[
{t:'match',q:'Match phrase and meaning',pairs:[['ကျေးဇူးတင်ပါတယ်','thank you'],['ရပါတယ်','you are welcome'],['တောင်းပန်ပါတယ်','sorry'],['ဟုတ်ကဲ့','yes']]},
{t:'mc',q:'How do you say "excuse me"?',o:['တစ်ဆိတ်လောက်','ဟုတ်ကဲ့','ကျေးဇူးတင်ပါတယ်','ရပါတယ်'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ဟုတ်ကဲ့',o:['ဟုတ်ကဲ့','မဟုတ်ဘူး','ရပါတယ်','တောင်းပန်ပါတယ်'],a:0},
{t:'mc',q:'Which means "yes"?',o:['ဟုတ်ကဲ့','မဟုတ်ဘူး','တစ်ဆိတ်လောက်','ရပါတယ်'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['တစ်ဆိတ်လောက်','excuse me'],['မဟုတ်ဘူး','no'],['ဟုတ်ကဲ့','yes'],['ကျေးဇူးတင်ပါတယ်','thank you']]}]},
{id:'my_court_4',title:'Mix it',step:'mix',meta:'All the courtesies',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'တောင်းပန်ပါတယ်',o:['sorry','thank you','yes','you are welcome'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ရပါတယ်',o:['ရပါတယ်','ကျေးဇူးတင်ပါတယ်','မဟုတ်ဘူး','ဟုတ်ကဲ့'],a:0},
{t:'mc',q:'How do you say "thank you"?',o:['ကျေးဇူးတင်ပါတယ်','တောင်းပန်ပါတယ်','ရပါတယ်','တစ်ဆိတ်လောက်'],a:0},
{t:'mc',q:'What does this mean?',d:'မဟုတ်ဘူး',o:['no','yes','sorry','thank you'],a:0},
{t:'li',q:'Listen — which phrase?',say:'တစ်ဆိတ်လောက်',o:['တစ်ဆိတ်လောက်','တောင်းပန်ပါတယ်','ရပါတယ်','ဟုတ်ကဲ့'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ကျေးဇူးတင်ပါတယ်','thank you'],['တောင်းပန်ပါတယ်','sorry'],['ဟုတ်ကဲ့','yes'],['မဟုတ်ဘူး','no']]}]},
{id:'my_court_5',title:'Checkpoint',step:'checkpoint',meta:'Courtesy mastered?',vocab:[],ex:[
{t:'mc',q:'Say "thank you":',o:['ကျေးဇူးတင်ပါတယ်','ရပါတယ်','ဟုတ်ကဲ့','တစ်ဆိတ်လောက်'],a:0},
{t:'li',q:'Listen — which phrase?',say:'မဟုတ်ဘူး',o:['မဟုတ်ဘူး','ဟုတ်ကဲ့','ရပါတယ်','တောင်းပန်ပါတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရပါတယ်',o:['you are welcome','sorry','no','excuse me'],a:0},
{t:'mc',q:'Which means "yes"?',o:['ဟုတ်ကဲ့','မဟုတ်ဘူး','ရပါတယ်','တစ်ဆိတ်လောက်'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ကျေးဇူးတင်ပါတယ်',o:['ကျေးဇူးတင်ပါတယ်','တောင်းပန်ပါတယ်','ရပါတယ်','မဟုတ်ဘူး'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['ကျေးဇူးတင်ပါတယ်','thank you'],['ရပါတယ်','you are welcome'],['တောင်းပန်ပါတယ်','sorry'],['မဟုတ်ဘူး','no']]}]},

/* --- Topic 6: introductions --- */
{id:'my_intro',title:'Introductions',step:'learn',meta:'Name, meeting & where from',vocab:[['နာမည်','nameh','name'],['နာမည်ဘယ်လိုခေါ်လဲ','nameh beh lo hkaw leh','what is your name'],['တွေ့ရတာဝမ်းသာပါတယ်','twei ya da wun tha ba de','nice to meet you'],['ဘယ်ကလာလဲ','beh ga la leh','where are you from'],['မြန်မာ','myanma','Myanmar / Burmese'],['နိုင်ငံ','naingngan','country']],ex:[
{t:'note',tag:'Names',q:'နာမည်',body:'<p><span class="deva">နာမည်</span> <b>nameh</b> = name. To ask a name: <span class="deva">နာမည်ဘယ်လိုခေါ်လဲ</span> <b>nameh beh lo hkaw leh</b> — literally "name, how is it called?"</p>',eg:[['နာမည်','nameh','name'],['နာမည်ဘယ်လိုခေါ်လဲ','nameh beh lo hkaw leh','what is your name']]},
{t:'mc',q:'Which means "name"?',o:['နာမည်','နိုင်ငံ','မြန်မာ','ဘယ်ကလာလဲ'],a:0},
{t:'mc',q:'How do you ask "what is your name"?',o:['နာမည်ဘယ်လိုခေါ်လဲ','ဘယ်ကလာလဲ','တွေ့ရတာဝမ်းသာပါတယ်','နိုင်ငံ'],a:0},
{t:'note',tag:'Nice to meet you',q:'တွေ့ရတာဝမ်းသာပါတယ်',body:'<p>When you meet someone: <span class="deva">တွေ့ရတာဝမ်းသာပါတယ်</span> <b>twei ya da wun tha ba de</b> — glad to meet you. <span class="deva">ဝမ်းသာ</span> (wun tha) literally means "happy" (belly-good!).</p>',eg:[['တွေ့ရတာဝမ်းသာပါတယ်','twei ya da wun tha ba de','nice to meet you']]},
{t:'mc',q:'Which means "nice to meet you"?',o:['တွေ့ရတာဝမ်းသာပါတယ်','နာမည်','ဘယ်ကလာလဲ','မြန်မာ'],a:0},
{t:'note',tag:'Where from',q:'ဘယ်ကလာလဲ',body:'<p><span class="deva">ဘယ်ကလာလဲ</span> <b>beh ga la leh</b> — where are you from? A country is a <span class="deva">နိုင်ငံ</span> <b>naingngan</b>, and this one is <span class="deva">မြန်မာ</span> <b>myanma</b> — Myanmar.</p>',eg:[['ဘယ်ကလာလဲ','beh ga la leh','where are you from'],['မြန်မာ','myanma','Myanmar'],['နိုင်ငံ','naingngan','country']]},
{t:'li',q:'Listen — which word?',say:'မြန်မာ',o:['မြန်မာ','နိုင်ငံ','နာမည်','ဘယ်ကလာလဲ'],a:0}]},
{id:'my_intro_2',title:'Hear the introductions',step:'recognize',meta:'Spot each phrase',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'နာမည်',o:['နာမည်','နိုင်ငံ','မြန်မာ','ဘယ်ကလာလဲ'],a:0},
{t:'mc',q:'Which means "where are you from"?',o:['ဘယ်ကလာလဲ','နာမည်ဘယ်လိုခေါ်လဲ','တွေ့ရတာဝမ်းသာပါတယ်','နိုင်ငံ'],a:0},
{t:'li',q:'Listen — which word?',say:'နိုင်ငံ',o:['နိုင်ငံ','မြန်မာ','နာမည်','ဘယ်ကလာလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'မြန်မာ',o:['Myanmar','country','name','hello'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ဘယ်ကလာလဲ',o:['ဘယ်ကလာလဲ','နာမည်ဘယ်လိုခေါ်လဲ','တွေ့ရတာဝမ်းသာပါတယ်','မြန်မာ'],a:0},
{t:'mc',q:'ဝမ်းသာ (wun tha) literally means…',o:['happy (belly-good)','country','name','tired'],a:0}]},
{id:'my_intro_3',title:'Put it together',step:'build',meta:'Match the phrases',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['နာမည်','name'],['နိုင်ငံ','country'],['မြန်မာ','Myanmar'],['ဘယ်ကလာလဲ','where are you from']]},
{t:'mc',q:'Which asks "what is your name"?',o:['နာမည်ဘယ်လိုခေါ်လဲ','ဘယ်ကလာလဲ','နိုင်ငံ','မြန်မာ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'တွေ့ရတာဝမ်းသာပါတယ်',o:['တွေ့ရတာဝမ်းသာပါတယ်','ဘယ်ကလာလဲ','နာမည်ဘယ်လိုခေါ်လဲ','နိုင်ငံ'],a:0},
{t:'mc',q:'Which means "country"?',o:['နိုင်ငံ','မြန်မာ','နာမည်','ဘယ်ကလာလဲ'],a:0},
{t:'match',q:'Match phrase and meaning',pairs:[['တွေ့ရတာဝမ်းသာပါတယ်','nice to meet you'],['နာမည်ဘယ်လိုခေါ်လဲ','what is your name'],['မြန်မာ','Myanmar'],['နိုင်ငံ','country']]}]},
{id:'my_intro_4',title:'Mix it',step:'mix',meta:'All the introductions',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'နိုင်ငံ',o:['country','name','Myanmar','hello'],a:0},
{t:'li',q:'Listen — which word?',say:'မြန်မာ',o:['မြန်မာ','နိုင်ငံ','နာမည်','ဘယ်ကလာလဲ'],a:0},
{t:'mc',q:'How do you greet a new person (nice to meet you)?',o:['တွေ့ရတာဝမ်းသာပါတယ်','ဘယ်ကလာလဲ','နာမည်','မြန်မာ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်ကလာလဲ',o:['where are you from','what is your name','nice to meet you','your country'],a:0},
{t:'li',q:'Listen — which word?',say:'နာမည်',o:['နာမည်','နိုင်ငံ','မြန်မာ','တွေ့ရတာဝမ်းသာပါတယ်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['နာမည်','name'],['ဘယ်ကလာလဲ','where are you from'],['မြန်မာ','Myanmar'],['တွေ့ရတာဝမ်းသာပါတယ်','nice to meet you']]}]},
{id:'my_intro_5',title:'Checkpoint',step:'checkpoint',meta:'Introductions mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "name"?',o:['နာမည်','နိုင်ငံ','မြန်မာ','ဘယ်ကလာလဲ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ဘယ်ကလာလဲ',o:['ဘယ်ကလာလဲ','နာမည်ဘယ်လိုခေါ်လဲ','နိုင်ငံ','မြန်မာ'],a:0},
{t:'mc',q:'What does this mean?',d:'မြန်မာ',o:['Myanmar','country','name','yes'],a:0},
{t:'mc',q:'How do you ask "what is your name"?',o:['နာမည်ဘယ်လိုခေါ်လဲ','ဘယ်ကလာလဲ','တွေ့ရတာဝမ်းသာပါတယ်','နိုင်ငံ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'တွေ့ရတာဝမ်းသာပါတယ်',o:['တွေ့ရတာဝမ်းသာပါတယ်','ဘယ်ကလာလဲ','နာမည်ဘယ်လိုခေါ်လဲ','မြန်မာ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['နာမည်','name'],['နိုင်ငံ','country'],['မြန်မာ','Myanmar'],['တွေ့ရတာဝမ်းသာပါတယ်','nice to meet you']]}]},

/* --- Topic 7: your day --- */
{id:'my_day',title:'Your day',step:'learn',meta:'Today, tomorrow & times of day',vocab:[['ဒီနေ့','di neh','today'],['မနက်ဖြန်','ma neq hpyan','tomorrow'],['မနေ့က','ma neh ga','yesterday'],['မနက်','ma neq','morning'],['ညနေ','nya ne','evening'],['ည','nya','night']],ex:[
{t:'note',tag:'Today & around it',q:'ဒီနေ့ · မနက်ဖြန် · မနေ့က',body:'<p><span class="deva">ဒီနေ့</span> <b>di neh</b> = today · <span class="deva">မနက်ဖြန်</span> <b>ma neq hpyan</b> = tomorrow · <span class="deva">မနေ့က</span> <b>ma neh ga</b> = yesterday. The word <span class="deva">နေ့</span> (neh) means "day".</p>',eg:[['ဒီနေ့','di neh','today'],['မနက်ဖြန်','ma neq hpyan','tomorrow'],['မနေ့က','ma neh ga','yesterday']]},
{t:'mc',q:'Which means "today"?',o:['ဒီနေ့','မနက်ဖြန်','မနေ့က','ည'],a:0},
{t:'mc',q:'Which means "tomorrow"?',o:['မနက်ဖြန်','ဒီနေ့','မနေ့က','မနက်'],a:0},
{t:'note',tag:'Times of day',q:'မနက် · ညနေ · ည',body:'<p><span class="deva">မနက်</span> <b>ma neq</b> = morning · <span class="deva">ညနေ</span> <b>nya ne</b> = evening · <span class="deva">ည</span> <b>nya</b> = night.</p>',eg:[['မနက်','ma neq','morning'],['ညနေ','nya ne','evening'],['ည','nya','night']]},
{t:'mc',q:'Which means "morning"?',o:['မနက်','ည','ညနေ','ဒီနေ့'],a:0},
{t:'li',q:'Listen — which word?',say:'ည',o:['ည','မနက်','ညနေ','ဒီနေ့'],a:0},
{t:'mc',q:'Which means "night"?',o:['ည','မနက်','မနေ့က','ဒီနေ့'],a:0}]},
{id:'my_day_2',title:'Hear the day',step:'recognize',meta:'Spot each word',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ဒီနေ့',o:['ဒီနေ့','မနက်ဖြန်','မနေ့က','မနက်'],a:0},
{t:'mc',q:'Which means "yesterday"?',o:['မနေ့က','ဒီနေ့','မနက်ဖြန်','ညနေ'],a:0},
{t:'li',q:'Listen — which word?',say:'မနက်',o:['မနက်','ည','ညနေ','ဒီနေ့'],a:0},
{t:'mc',q:'What does this mean?',d:'ညနေ',o:['evening','morning','night','today'],a:0},
{t:'li',q:'Listen — which word?',say:'မနက်ဖြန်',o:['မနက်ဖြန်','မနေ့က','ဒီနေ့','မနက်'],a:0},
{t:'mc',q:'The word နေ့ (neh) means…',o:['day','night','morning','year'],a:0}]},
{id:'my_day_3',title:'Put it together',step:'build',meta:'Match the day',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ဒီနေ့','today'],['မနက်ဖြန်','tomorrow'],['မနေ့က','yesterday'],['မနက်','morning']]},
{t:'mc',q:'Which means "evening"?',o:['ညနေ','မနက်','ည','ဒီနေ့'],a:0},
{t:'li',q:'Listen — which word?',say:'ည',o:['ည','ညနေ','မနက်','မနေ့က'],a:0},
{t:'mc',q:'Which means "tomorrow"?',o:['မနက်ဖြန်','မနေ့က','ဒီနေ့','ညနေ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['မနက်','morning'],['ညနေ','evening'],['ည','night'],['ဒီနေ့','today']]}]},
{id:'my_day_4',title:'Mix it',step:'mix',meta:'All the day words',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မနေ့က',o:['yesterday','tomorrow','today','morning'],a:0},
{t:'li',q:'Listen — which word?',say:'ညနေ',o:['ညနေ','ည','မနက်','ဒီနေ့'],a:0},
{t:'mc',q:'Which means "today"?',o:['ဒီနေ့','မနက်ဖြန်','မနေ့က','ည'],a:0},
{t:'mc',q:'What does this mean?',d:'မနက်',o:['morning','night','evening','day'],a:0},
{t:'li',q:'Listen — which word?',say:'မနက်ဖြန်',o:['မနက်ဖြန်','မနေ့က','ဒီနေ့','ညနေ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဒီနေ့','today'],['မနက်ဖြန်','tomorrow'],['မနေ့က','yesterday'],['ည','night']]}]},
{id:'my_day_5',title:'Checkpoint',step:'checkpoint',meta:'Your day mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "today"?',o:['ဒီနေ့','မနက်ဖြန်','မနေ့က','မနက်'],a:0},
{t:'li',q:'Listen — which word?',say:'ည',o:['ည','ညနေ','မနက်','ဒီနေ့'],a:0},
{t:'mc',q:'What does this mean?',d:'မနက်ဖြန်',o:['tomorrow','yesterday','today','evening'],a:0},
{t:'mc',q:'Which means "morning"?',o:['မနက်','ည','ညနေ','မနေ့က'],a:0},
{t:'li',q:'Listen — which word?',say:'ဒီနေ့',o:['ဒီနေ့','မနက်','မနေ့က','ညနေ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဒီနေ့','today'],['မနက်ဖြန်','tomorrow'],['မနက်','morning'],['ည','night']]}]},
];

/* ---------- per-language art (secular: dramatic Hpa-an-style karst limestone
   peaks over a misty Inle lake, forested foothills with soft reflections, and a
   lone leg-rowing fisherman — NO pagodas/temples, per the art rule).
   The left/center stays OPEN WATER so the "Learn Burmese" title reads clear
   (CLAUDE.md title-zone rule); the karst cluster lives right of x≈700, still
   visible beside the title on the phone crop. The fisherman, birds & reeds
   carry the `art-detail` class and are hidden ≤560px to keep mobile calm. */
const MY_HERO='<circle class="orb-glow" cx="1120" cy="56" r="52"/><circle class="orb" cx="1120" cy="56" r="33"/><g class="hero-stars" aria-hidden="true"><circle cx="130" cy="60" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="250" cy="108" r="1.2"/><circle cx="366" cy="48" r="2"/><circle cx="478" cy="124" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="566" cy="72" r="1.6"/><circle cx="684" cy="42" r="1.3" class="tw" style="animation-delay:.6s"/><circle cx="792" cy="114" r="1.8"/><circle cx="864" cy="150" r="1.3"/><circle cx="1092" cy="120" r="1.4"/><circle cx="1136" cy="46" r="1.2"/><circle cx="180" cy="140" r="1.5"/><circle cx="326" cy="152" r="1.3" class="tw" style="animation-delay:2.3s"/><circle cx="626" cy="136" r="1.5"/></g><g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g><g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g><g class="art-detail" fill="none" stroke="var(--mtn-mid)" stroke-width="1.8" stroke-linecap="round" opacity=".5" aria-hidden="true"><path d="M150 92 q6 -5 12 0 q6 -5 12 0"/><path d="M210 108 q5 -4.5 10 0 q5 -4.5 10 0"/><path d="M96 120 q5 -4.5 10 0 q5 -4.5 10 0"/></g><path class="far" d="M90 236 C105.4 226.8 125.0 222.7 160.0 222.0 C195.0 222.7 214.6 226.8 230 236 Z M280 236 C297.6 222.8 320.0 217.0 360.0 216.0 C400.0 217.0 422.4 222.8 440 236 Z M490 236 C503.2 227.4 520.0 223.7 550.0 223.0 C580.0 223.7 596.8 227.4 610 236 Z"/><path class="far" d="M0 236 L701 236 C711.8 184.4 730.7 154.3 755.0 150.0 C782.0 183.0 784.5 210.0 792.5 210.0 C800.5 210.0 799.0 153.3 830.0 84.0 C861.0 153.3 867.0 210.0 875.0 210.0 C883.0 210.0 895.0 183.0 920.0 150.0 C945.0 183.0 952.0 210.0 960.0 210.0 C968.0 210.0 961.0 147.0 1000.0 70.0 C1039.0 147.0 1037.0 210.0 1045.0 210.0 C1053.0 210.0 1062.0 178.5 1090.0 140.0 C1118.0 178.5 1117.0 210.0 1125.0 210.0 C1133.0 210.0 1140.0 165.9 1160.0 112.0 C1178.0 118.2 1192.0 161.6 1200 236 L1200 236 L1200 320 L0 320 Z"/><g class="snow" opacity=".25"><ellipse cx="350" cy="232" rx="240" ry="10"/></g><g class="snow" opacity=".33"><ellipse cx="960" cy="228" rx="270" ry="15"/><ellipse cx="1130" cy="230" rx="120" ry="12"/></g><g class="mid" opacity=".16"><path d="M792 238 C804.0 253.0 816.4 268.0 830.0 268.0 C843.6 268.0 856.0 253.0 868 238 Z"/><path d="M952 238 C967.2 259.0 982.8 280.0 1000.0 280.0 C1017.2 280.0 1032.8 259.0 1048 238 Z"/></g><g class="mid"><path d="M214 272 C221.9 257.5 232.0 251.1 250.0 250.0 C268.0 251.1 278.1 257.5 286 272 Z"/><path d="M425 274 C431.6 260.8 440.0 255.0 455.0 254.0 C470.0 255.0 478.4 260.8 485 274 Z"/><path d="M734 238 C748.5 187.8 767.0 165.8 800.0 162.0 C833.0 165.8 851.5 187.8 866 238 Z"/><path d="M917 238 C936.4 178.6 961.0 152.5 1005.0 148.0 C1049.0 152.5 1073.6 178.6 1093 238 Z"/><path d="M1110 238 C1122.1 191.8 1137.5 171.5 1165.0 168.0 C1192.5 171.5 1207.9 191.8 1220 238 Z"/></g><g class="snow" opacity=".5"><rect x="150" y="266" width="120" height="3" rx="1.5"/><rect x="360" y="278" width="150" height="3" rx="1.5"/><rect x="620" y="270" width="110" height="3" rx="1.5"/><rect x="820" y="282" width="130" height="3" rx="1.5"/><rect x="1030" y="268" width="90" height="3" rx="1.5"/></g><g class="mid art-detail"><path d="M148 283 Q222 273 296 281 L290 290 Q222 282 154 290 Z"/><circle cx="256" cy="245" r="4.6"/><path d="M251 250 L260 249 L264 272 L255 273 Z"/><path d="M257 272 L255 282 L260 282 L263 272 Z"/><path d="M261 256 L279 250 L280.3 253 L262 259 Z"/><path d="M279 250 L294 288 L290.5 289.3 L276 253 Z"/><path d="M258 260 L242 272 L244 275 L260 263 Z"/></g><g class="near"><path d="M0 320 L0 302 Q200 293 400 300 Q640 309 880 298 Q1040 291 1200 300 L1200 320 Z"/><path class="art-detail" d="M70 303 L75 285 L78 297 L82 283 L85 298 L90 288 L93 305 Z"/><path class="art-detail" d="M1120 301 L1125 284 L1128 296 L1132 282 L1135 297 L1140 287 L1142 303 Z"/></g>';
const MY_BAND='<circle class="orb-glow" cx="720" cy="44" r="30"/><circle class="orb" cx="720" cy="44" r="18"/><path class="far" d="M176 152 C190.1 144.1 208.0 140.6 240.0 140.0 C272.0 140.6 289.9 144.1 304 152 Z M404 152 C418.5 142.1 437.0 137.8 470.0 137.0 C503.0 137.8 521.5 142.1 536 152 Z"/><path class="far" d="M0 152 L834 152 C845.2 102.8 864.8 74.1 890.0 70.0 C918.0 104.1 927.0 132.0 935.0 132.0 C943.0 132.0 956.0 119.8 980.0 105.0 C1004.0 119.8 1012.0 132.0 1020.0 132.0 C1028.0 132.0 1027.0 96.9 1060.0 54.0 C1093.0 96.9 1097.0 132.0 1105.0 132.0 C1113.0 132.0 1125.0 116.7 1150.0 98.0 C1172.5 100.7 1190.0 119.6 1200 152 L1200 152 L1200 200 L0 200 Z"/><g class="snow" opacity=".3"><ellipse cx="1000" cy="146" rx="200" ry="9"/></g><g class="mid"><path d="M864 154 C876.3 134.2 892.0 125.5 920.0 124.0 C948.0 125.5 963.7 134.2 976 154 Z"/><path d="M1024 154 C1038.5 130.2 1057.0 119.8 1090.0 118.0 C1123.0 119.8 1141.5 130.2 1156 154 Z"/></g><g class="snow" opacity=".45"><rect x="220" y="168" width="120" height="2.5" rx="1.25"/><rect x="470" y="174" width="110" height="2.5" rx="1.25"/><rect x="680" y="180" width="90" height="2.5" rx="1.25"/></g><g class="mid art-detail"><path d="M522 180 Q580 171 640 178 L635 187 Q580 178 527 187 Z"/><circle cx="584" cy="151" r="3.6"/><path d="M581 155 L588 155 L590 178 L583 178 Z"/><path d="M588 160 L609 152 L610.3 155 L589 163 Z"/><path d="M609 152 L622 187 L618.5 188.3 L605.5 154 Z"/></g><g class="near"><path d="M0 200 L0 188 Q200 181 400 186 Q650 191 900 184 Q1050 181 1200 187 L1200 200 Z"/><path class="art-detail" d="M120 189 L124 175 L127 183 L131 173 L134 184 L138 177 L140 190 Z"/></g>';
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
