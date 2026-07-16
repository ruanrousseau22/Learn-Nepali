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
  {n:3,t:'Say a sentence',d:'The sentence engine — verbs, no & questions',lessons:['my_this','my_this_2','my_this_3','my_this_4','my_this_5','my_verb','my_verb_2','my_verb_3','my_verb_4','my_verb_5','my_fut','my_fut_2','my_fut_3','my_fut_4','my_fut_5','my_neg','my_neg_2','my_neg_3','my_neg_4','my_neg_5','my_yn','my_yn_2','my_yn_3','my_yn_4','my_yn_5','my_wh','my_wh_2','my_wh_3','my_wh_4','my_wh_5','my_want','my_want_2','my_want_3','my_want_4','my_want_5']},
  {n:4,t:'Where & with',d:'The little particles မှာ ကို က နဲ့ & real life',lessons:['my_hma','my_hma_2','my_hma_3','my_hma_4','my_hma_5','my_ko','my_ko_2','my_ko_3','my_ko_4','my_ko_5','my_ka','my_ka_2','my_ka_3','my_ka_4','my_ka_5','my_neh','my_neh_2','my_neh_3','my_neh_4','my_neh_5','my_kin','my_kin_2','my_kin_3','my_kin_4','my_kin_5','my_food','my_food_2','my_food_3','my_food_4','my_food_5','my_shop','my_shop_2','my_shop_3','my_shop_4','my_shop_5']},
  {n:5,t:'How many',d:'Counters, kyat, bargaining, time & the week',lessons:['my_clf','my_clf_2','my_clf_3','my_clf_4','my_clf_5','my_hownum','my_hownum_2','my_hownum_3','my_hownum_4','my_hownum_5','my_money','my_money_2','my_money_3','my_money_4','my_money_5','my_bignum','my_bignum_2','my_bignum_3','my_bignum_4','my_bignum_5','my_buy','my_buy_2','my_buy_3','my_buy_4','my_buy_5','my_time','my_time_2','my_time_3','my_time_4','my_time_5','my_days','my_days_2','my_days_3','my_days_4','my_days_5']},
  {n:6,t:'Describe it',d:'Adjectives, colors, feelings, weather & health',lessons:['my_adj','my_adj_2','my_adj_3','my_adj_4','my_adj_5','my_taste','my_taste_2','my_taste_3','my_taste_4','my_taste_5','my_color','my_color_2','my_color_3','my_color_4','my_color_5','my_cmp','my_cmp_2','my_cmp_3','my_cmp_4','my_cmp_5','my_feel','my_feel_2','my_feel_3','my_feel_4','my_feel_5','my_wx','my_wx_2','my_wx_3','my_wx_4','my_wx_5','my_body','my_body_2','my_body_3','my_body_4','my_body_5']},
];

const MY_SYM={my_c1:'က',my_c2:'စ',my_c3:'တ',my_c4:'ပ',my_c5:'သ',my_v1:'ကာ',my_v2:'ရေ',my_greet:'နေ',my_pron:'သူ',my_num1:'၅',my_num2:'၂၀',my_court:'ဟုတ်',my_intro:'နာမည်',my_day:'မနက်',my_this:'ဒါ',my_verb:'တယ်',my_fut:'မယ်',my_neg:'ဘူး',my_yn:'လား',my_wh:'လဲ',my_want:'ချင်',my_hma:'မှာ',my_ko:'ကို',my_ka:'ဘယ်က',my_neh:'နဲ့',my_kin:'ဦး',my_food:'ဟင်း',my_shop:'ဆိုင်',my_clf:'ယောက်',my_hownum:'ဘယ်နှ',my_money:'ကျပ်',my_bignum:'ထောင်',my_buy:'ဝယ်',my_time:'နာရီ',my_days:'စနေ',my_adj:'ကြီး',my_taste:'ပူ',my_color:'အနီ',my_cmp:'ပို',my_feel:'ပျော်',my_wx:'မိုး',my_body:'ဆေး'};

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

/* ===================== ZONE 3 · SAY A SENTENCE =====================
   The Burmese "grammar engine": verb-final sentences with the ...တယ်/...မယ်
   endings, negation မ...ဘူး, questions ...လား/...လဲ, want ...ချင်.
   Sequenced per Okell (Burmese by Ear U1–2) & Mesher (L1–3). */
/* --- Topic 1: this & that + polite ပါ --- */
{id:'my_this',title:'This & that',step:'learn',meta:'ဒါ အဲဒါ ဟိုဟာ + polite ပါ',vocab:[['ဒါ','da','this'],['အဲဒါ','eh da','that (near you)'],['ဟိုဟာ','ho ha','that one over there'],['ဒါဘာလဲ','da ba leh','what is this?'],['ဒါရေပါ','da ye ba','this is water']],ex:[
{t:'note',tag:'Zone 3',q:'The sentence engine',body:'<p>You can read, greet and count. Zone 3 gives you the <b>machine that builds Burmese sentences</b>. Start by pointing: <span class="deva">ဒါ</span> <b>da</b> = this · <span class="deva">အဲဒါ</span> <b>eh da</b> = that (near you) · <span class="deva">ဟိုဟာ</span> <b>ho ha</b> = that one over there.</p>',eg:[['ဒါ','da','this'],['အဲဒါ','eh da','that'],['ဟိုဟာ','ho ha','that over there']]},
{t:'mc',q:'Which means "this"?',o:['ဒါ','အဲဒါ','ဟိုဟာ','ဘာ'],a:0},
{t:'mc',q:'What does this mean?',d:'အဲဒါ',o:['that (near you)','this','that one over there','what'],a:0},
{t:'note',tag:'No word for "is"',q:'ဒါ ... ပါ',body:'<p>To say "this is X", Burmese simply says <span class="deva">ဒါ X ပါ</span> — <b>no word for "is" at all</b>. The <span class="deva">ပါ</span> is the polite finisher you already know from <span class="deva">မင်္ဂလာပါ</span>.</p><p><span class="deva">ဒါရေပါ</span> <b>da ye ba</b> = This is water.</p>',eg:[['ဒါရေပါ','da ye ba','this is water']]},
{t:'mc',q:'How do you say "This is water"?',o:['ဒါရေပါ','ဒါဘာလဲ','အဲဒါ','ဟိုဟာ'],a:0},
{t:'note',tag:'Ask what',q:'ဒါဘာလဲ',body:'<p><span class="deva">ဘာ</span> <b>ba</b> = what. Point and ask <span class="deva">ဒါဘာလဲ</span> <b>da ba leh</b> — "What is this?" You will meet that little <span class="deva">လဲ</span> properly later in this zone.</p>',eg:[['ဒါဘာလဲ','da ba leh','what is this?']]},
{t:'mc',q:'How do you ask "What is this?"',o:['ဒါဘာလဲ','ဒါရေပါ','အဲဒါ','မင်္ဂလာပါ'],a:0},
{t:'li',q:'Listen — which line?',say:'ဒါဘာလဲ',o:['ဒါဘာလဲ','ဒါရေပါ','အဲဒါ','ဟိုဟာ'],a:0}]},
{id:'my_this_2',title:'Hear it',step:'recognize',meta:'Spot ဒါ အဲဒါ ဟိုဟာ',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ဒါ',o:['ဒါ','အဲဒါ','ဟိုဟာ','ဘာ'],a:0},
{t:'mc',q:'Which means "that one over there"?',o:['ဟိုဟာ','ဒါ','အဲဒါ','ဘာ'],a:0},
{t:'li',q:'Listen — which word?',say:'ဟိုဟာ',o:['ဟိုဟာ','ဒါ','အဲဒါ','ဘာ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဒါရေပါ',o:['this is water','what is this?','that is far','water is good'],a:0},
{t:'mc',q:'In ဒါရေပါ, the word for "is" is…',o:['not needed — Burmese skips it','ဒါ','ရေ','ပါ'],a:0},
{t:'li',q:'Listen — which word?',say:'အဲဒါ',o:['အဲဒါ','ဒါ','ဟိုဟာ','ဘာ'],a:0},
{t:'mc',q:'ပါ at the end of a sentence makes it…',o:['polite','negative','a question','louder'],a:0}]},
{id:'my_this_3',title:'Put it together',step:'build',meta:'Point & say what it is',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ဒါ','this'],['အဲဒါ','that (near you)'],['ဟိုဟာ','that over there'],['ဒါဘာလဲ','what is this?']]},
{t:'wb',q:'Build: This is water',a:['ဒါ','ရေ','ပါ'],pool:['ဒါ','ရေ','ပါ','ဘာ']},
{t:'mc',q:'Someone points at your cup and asks ဒါဘာလဲ. They want to know…',o:['what it is','who you are','how you feel','where you live'],a:0},
{t:'li',q:'Listen — which line?',say:'ဒါရေပါ',o:['ဒါရေပါ','ဒါဘာလဲ','အဲဒါ','ဟိုဟာ'],a:0},
{t:'wb',q:'Build: What is this?',a:['ဒါ','ဘာ','လဲ'],pool:['ဒါ','ဘာ','လဲ','ပါ']},
{t:'match',q:'Match word and meaning',pairs:[['ဟိုဟာ','that over there'],['ဒါရေပါ','this is water'],['အဲဒါ','that (near you)'],['ဒါ','this']]}]},
{id:'my_this_4',title:'Mix it',step:'mix',meta:'This, that & what',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဟိုဟာ',o:['that one over there','this','that (near you)','what is this?'],a:0},
{t:'li',q:'Listen — which line?',say:'ဒါဘာလဲ',o:['ဒါဘာလဲ','ဒါရေပါ','ဟိုဟာ','အဲဒါ'],a:0},
{t:'mc',q:'Which is the polite finisher heard in မင်္ဂလာပါ and ဒါရေပါ?',o:['ပါ','ဒါ','ဘာ','လဲ'],a:0},
{t:'wb',q:'Build: This is water',a:['ဒါ','ရေ','ပါ'],pool:['ဒါ','ရေ','ပါ','လဲ']},
{t:'li',q:'Listen — which word?',say:'အဲဒါ',o:['အဲဒါ','ဟိုဟာ','ဒါ','ဘာ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဒါ','this'],['ဟိုဟာ','that over there'],['ဒါဘာလဲ','what is this?'],['ဒါရေပါ','this is water']]}]},
{id:'my_this_5',title:'Checkpoint',step:'checkpoint',meta:'This & that mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "this"?',o:['ဒါ','ဟိုဟာ','အဲဒါ','ဘာ'],a:0},
{t:'li',q:'Listen — which line?',say:'ဒါရေပါ',o:['ဒါရေပါ','ဒါဘာလဲ','အဲဒါ','ဟိုဟာ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဒါဘာလဲ',o:['what is this?','this is water','that over there','hello'],a:0},
{t:'mc',q:'"This is X" in Burmese is simply…',o:['ဒါ X ပါ','X is ဒါ','ဒါ is X','X ဒါ လား'],a:0},
{t:'li',q:'Listen — which word?',say:'ဟိုဟာ',o:['ဟိုဟာ','အဲဒါ','ဒါ','ဘာ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဒါ','this'],['အဲဒါ','that (near you)'],['ဟိုဟာ','that over there'],['ဒါဘာလဲ','what is this?']]}]},

/* --- Topic 2: core verbs + ...တယ် (the verb goes LAST) --- */
{id:'my_verb',title:'The verb goes last',step:'learn',meta:'စား သောက် သွား လာ နေ + တယ်',vocab:[['စားတယ်','sa de','eat / eats'],['သောက်တယ်','thauq de','drink / drinks'],['သွားတယ်','thwa de','go / goes'],['လာတယ်','la de','come / comes'],['နေတယ်','ne de','live / stay'],['ထမင်းစားတယ်','htamin sa de','eat a meal']],ex:[
{t:'note',tag:'The big rule',q:'Verb LAST, then တယ်',body:'<p>A Burmese sentence ends with its <b>verb</b>, and a statement seals the verb with <span class="deva">တယ်</span> <b>de</b>: <span class="deva">စားတယ်</span> = eat · <span class="deva">သွားတယ်</span> = go.</p><p>So "I eat rice" is literally <b>I – rice – eat</b>: <span class="deva">ကျွန်တော် ထမင်း စားတယ်</span>.</p>',eg:[['စားတယ်','sa de','eat'],['သွားတယ်','thwa de','go']]},
{t:'mc',q:'Which means "eat"?',o:['စားတယ်','သောက်တယ်','သွားတယ်','လာတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'သွားတယ်',o:['go','come','eat','drink'],a:0},
{t:'note',tag:'The freebie',q:'No conjugation. Ever.',body:'<p>Good news: <span class="deva">စားတယ်</span> works for <b>I, you, he, she, we and they</b> — Burmese verbs never change for the person. No gender, no plural agreement, no verb tables to memorise.</p><p>Burmese also loves to <b>drop the subject</b> when it is obvious: just <span class="deva">စားတယ်</span> can be a whole sentence — "(I) eat."</p>',eg:[['သောက်တယ်','thauq de','drink'],['လာတယ်','la de','come']]},
{t:'mc',q:'Which means "drink"?',o:['သောက်တယ်','စားတယ်','နေတယ်','လာတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'နေတယ်',o:['live / stay','eat','go','drink'],a:0},
{t:'mc',q:'"I eat rice" in Burmese order is…',o:['I – rice – eat','I – eat – rice','rice – I – eat','eat – I – rice'],a:0},
{t:'li',q:'Listen — which verb?',say:'စားတယ်',o:['စားတယ်','သွားတယ်','သောက်တယ်','လာတယ်'],a:0}]},
{id:'my_verb_2',title:'Hear the verbs',step:'recognize',meta:'Spot each verb',vocab:[],ex:[
{t:'li',q:'Listen — which verb?',say:'သွားတယ်',o:['သွားတယ်','လာတယ်','စားတယ်','နေတယ်'],a:0},
{t:'mc',q:'Which means "come"?',o:['လာတယ်','သွားတယ်','စားတယ်','သောက်တယ်'],a:0},
{t:'li',q:'Listen — which verb?',say:'သောက်တယ်',o:['သောက်တယ်','စားတယ်','သွားတယ်','နေတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ထမင်းစားတယ်',o:['eat a meal','drink water','go home','come here'],a:0},
{t:'mc',q:'A Burmese statement ends with…',o:['the verb + တယ်','the subject','a question word','the object'],a:0},
{t:'li',q:'Listen — which verb?',say:'လာတယ်',o:['လာတယ်','သွားတယ်','နေတယ်','စားတယ်'],a:0},
{t:'mc',q:'How does စားတယ် change when "they" eat instead of "I"?',o:['it does not change at all','add -s','it doubles','tone goes up'],a:0}]},
{id:'my_verb_3',title:'Put it together',step:'build',meta:'Build verb-last sentences',vocab:[],ex:[
{t:'match',q:'Match verb and meaning',pairs:[['စားတယ်','eat'],['သောက်တယ်','drink'],['သွားတယ်','go'],['လာတယ်','come']]},
{t:'wb',q:'Build: I eat a meal (man speaking)',a:['ကျွန်တော်','ထမင်း','စားတယ်'],pool:['ကျွန်တော်','ထမင်း','စားတယ်','သောက်တယ်']},
{t:'mc',q:'Which means "live / stay"?',o:['နေတယ်','လာတယ်','စားတယ်','သွားတယ်'],a:0},
{t:'li',q:'Listen — which verb?',say:'နေတယ်',o:['နေတယ်','လာတယ်','သွားတယ်','သောက်တယ်'],a:0},
{t:'wb',q:'Build: She drinks water',a:['သူ','ရေ','သောက်တယ်'],pool:['သူ','ရေ','သောက်တယ်','စားတယ်']},
{t:'match',q:'Match verb and meaning',pairs:[['နေတယ်','live / stay'],['လာတယ်','come'],['ထမင်းစားတယ်','eat a meal'],['သွားတယ်','go']]}]},
{id:'my_verb_4',title:'Mix it',step:'mix',meta:'All five verbs',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'စားတယ်',o:['eat','drink','come','stay'],a:0},
{t:'li',q:'Listen — which one?',say:'ထမင်းစားတယ်',o:['ထမင်းစားတယ်','စားတယ်','သောက်တယ်','သွားတယ်'],a:0},
{t:'mc',q:'Which verb would you use for "go to the market"?',o:['သွားတယ်','လာတယ်','နေတယ်','စားတယ်'],a:0},
{t:'wb',q:'Build: He eats a meal',a:['သူ','ထမင်း','စားတယ်'],pool:['သူ','ထမင်း','စားတယ်','နေတယ်']},
{t:'li',q:'Listen — which verb?',say:'သွားတယ်',o:['သွားတယ်','သောက်တယ်','လာတယ်','စားတယ်'],a:0},
{t:'match',q:'Match verb and meaning',pairs:[['စားတယ်','eat'],['နေတယ်','live / stay'],['လာတယ်','come'],['သောက်တယ်','drink']]}]},
{id:'my_verb_5',title:'Checkpoint',step:'checkpoint',meta:'Verbs mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "go"?',o:['သွားတယ်','လာတယ်','စားတယ်','နေတယ်'],a:0},
{t:'li',q:'Listen — which verb?',say:'သောက်တယ်',o:['သောက်တယ်','စားတယ်','သွားတယ်','လာတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လာတယ်',o:['come','go','eat','live'],a:0},
{t:'wb',q:'Build: I eat a meal (woman speaking)',a:['ကျွန်မ','ထမင်း','စားတယ်'],pool:['ကျွန်မ','ထမင်း','စားတယ်','လာတယ်']},
{t:'mc',q:'Burmese verbs conjugate for person and number…',o:['never — same form for everyone','always','only in the past','only for "they"'],a:0},
{t:'match',q:'Match verb and meaning',pairs:[['စားတယ်','eat'],['သောက်တယ်','drink'],['သွားတယ်','go'],['နေတယ်','live / stay']]}]},

/* --- Topic 3: future / intention ...မယ် --- */
{id:'my_fut',title:'Will do: မယ်',step:'learn',meta:'သွားမယ် စားမယ် လာမယ် လုပ်မယ်',vocab:[['သွားမယ်','thwa meh','will go'],['စားမယ်','sa meh','will eat'],['လာမယ်','la meh','will come'],['လုပ်တယ်','louq de','do / work'],['လုပ်မယ်','louq meh','will do'],['မနက်ဖြန်လာမယ်','ma neq hpyan la meh','will come tomorrow']],ex:[
{t:'note',tag:'Swap the ending',q:'တယ် → မယ်',body:'<p>You know <span class="deva">တယ်</span> seals a statement. Swap it for <span class="deva">မယ်</span> <b>meh</b> and the sentence points to the <b>future</b> — "will / going to":</p><p><span class="deva">သွားတယ်</span> go → <span class="deva">သွားမယ်</span> will go. You have already said it in <span class="deva">သွားတော့မယ်</span> (goodbye) and <span class="deva">တွေ့မယ်</span> (see you)!</p>',eg:[['သွားမယ်','thwa meh','will go'],['စားမယ်','sa meh','will eat']]},
{t:'mc',q:'Which means "will go"?',o:['သွားမယ်','သွားတယ်','လာမယ်','စားမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'စားမယ်',o:['will eat','eats','will go','will come'],a:0},
{t:'note',tag:'One more verb',q:'လုပ် — do',body:'<p><span class="deva">လုပ်တယ်</span> <b>louq de</b> = do / work. <span class="deva">လုပ်မယ်</span> <b>louq meh</b> = will do.</p><p>With yesterday-you already knowing <span class="deva">မနက်ဖြန်</span> (tomorrow): <span class="deva">မနက်ဖြန်လာမယ်</span> — "(I) will come tomorrow."</p>',eg:[['လုပ်မယ်','louq meh','will do'],['မနက်ဖြန်လာမယ်','ma neq hpyan la meh','will come tomorrow']]},
{t:'mc',q:'Which means "will do"?',o:['လုပ်မယ်','လုပ်တယ်','သွားမယ်','လာမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မနက်ဖြန်လာမယ်',o:['will come tomorrow','came yesterday','eats today','will go tonight'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားမယ်',o:['သွားမယ်','သွားတယ်','စားမယ်','လာမယ်'],a:0}]},
{id:'my_fut_2',title:'Hear the future',step:'recognize',meta:'တယ် or မယ်?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'စားမယ်',o:['စားမယ်','စားတယ်','သွားမယ်','လာမယ်'],a:0},
{t:'mc',q:'Which means "will come"?',o:['လာမယ်','လာတယ်','သွားမယ်','လုပ်မယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'လုပ်မယ်',o:['လုပ်မယ်','လုပ်တယ်','လာမယ်','စားမယ်'],a:0},
{t:'mc',q:'သွားတယ် vs သွားမယ် — the difference is…',o:['go vs will go','come vs go','eat vs drink','no difference'],a:0},
{t:'mc',q:'What does this mean?',d:'လုပ်တယ်',o:['do / work','will do','go','will come'],a:0},
{t:'li',q:'Listen — which one?',say:'မနက်ဖြန်လာမယ်',o:['မနက်ဖြန်လာမယ်','မနက်ဖြန်','လာမယ်','သွားမယ်'],a:0},
{t:'mc',q:'The ending that points to the future is…',o:['မယ်','တယ်','ပါ','လား'],a:0}]},
{id:'my_fut_3',title:'Put it together',step:'build',meta:'Say what you will do',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['သွားမယ်','will go'],['စားမယ်','will eat'],['လာမယ်','will come'],['လုပ်မယ်','will do']]},
{t:'wb',q:'Build: I will go tomorrow (woman speaking)',a:['ကျွန်မ','မနက်ဖြန်','သွားမယ်'],pool:['ကျွန်မ','မနက်ဖြန်','သွားမယ်','သွားတယ်']},
{t:'mc',q:'To turn စားတယ် into "will eat", you say…',o:['စားမယ်','စားပါ','စားလား','မစားဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'လာမယ်',o:['လာမယ်','လာတယ်','သွားမယ်','လုပ်မယ်'],a:0},
{t:'wb',q:'Build: He will eat a meal',a:['သူ','ထမင်း','စားမယ်'],pool:['သူ','ထမင်း','စားမယ်','စားတယ်']},
{t:'match',q:'Match line and meaning',pairs:[['မနက်ဖြန်လာမယ်','will come tomorrow'],['လုပ်တယ်','do / work'],['စားတယ်','eat'],['သွားမယ်','will go']]}]},
{id:'my_fut_4',title:'Mix it',step:'mix',meta:'Now & later together',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'သွားမယ်',o:['will go','goes','will come','will eat'],a:0},
{t:'li',q:'Listen — which one?',say:'စားတယ်',o:['စားတယ်','စားမယ်','သောက်တယ်','လုပ်တယ်'],a:0},
{t:'mc',q:'Your friend says မနက်ဖြန်လာမယ်. They will come…',o:['tomorrow','today','tonight','never'],a:0},
{t:'wb',q:'Build: I will do (it) tomorrow (man speaking)',a:['ကျွန်တော်','မနက်ဖြန်','လုပ်မယ်'],pool:['ကျွန်တော်','မနက်ဖြန်','လုပ်မယ်','လုပ်တယ်']},
{t:'li',q:'Listen — which one?',say:'လုပ်တယ်',o:['လုပ်တယ်','လုပ်မယ်','စားတယ်','လာတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['စားမယ်','will eat'],['လာတယ်','come'],['သွားမယ်','will go'],['လုပ်မယ်','will do']]}]},
{id:'my_fut_5',title:'Checkpoint',step:'checkpoint',meta:'Future mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "will eat"?',o:['စားမယ်','စားတယ်','စားလား','လာမယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားမယ်',o:['သွားမယ်','သွားတယ်','လာမယ်','စားမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လုပ်မယ်',o:['will do','does','will go','will eat'],a:0},
{t:'wb',q:'Build: She will come tomorrow',a:['သူ','မနက်ဖြန်','လာမယ်'],pool:['သူ','မနက်ဖြန်','လာမယ်','လာတယ်']},
{t:'mc',q:'Statements end in တယ်; future/intention ends in…',o:['မယ်','ဘူး','လား','ပါ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['သွားမယ်','will go'],['စားမယ်','will eat'],['လာမယ်','will come'],['မနက်ဖြန်လာမယ်','will come tomorrow']]}]},

/* --- Topic 4: negation မ...ဘူး --- */
{id:'my_neg',title:'Saying no: မ…ဘူး',step:'learn',meta:'မစားဘူး မသွားဘူး မသိဘူး',vocab:[['မစားဘူး','ma sa bu','does not eat'],['မသွားဘူး','ma thwa bu','does not go'],['မသောက်ဘူး','ma thauq bu','does not drink'],['သိတယ်','thi de','know'],['မသိဘူး','ma thi bu','do not know']],ex:[
{t:'note',tag:'The no-sandwich',q:'မ + verb + ဘူး',body:'<p>To say NO, Burmese wraps the verb in a little sandwich: <span class="deva">မ</span> <b>ma</b> before it, <span class="deva">ဘူး</span> <b>bu</b> after it — and <span class="deva">တယ်</span> disappears.</p><p><span class="deva">စားတယ်</span> eat → <span class="deva">မစားဘူး</span> do not eat. You already know one: <span class="deva">မဟုတ်ဘူး</span> — "no / not so".</p>',eg:[['မစားဘူး','ma sa bu','do not eat'],['မသွားဘူး','ma thwa bu','do not go']]},
{t:'mc',q:'Which means "does not eat"?',o:['မစားဘူး','စားတယ်','မသွားဘူး','စားမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မသွားဘူး',o:['does not go','will go','goes','does not come'],a:0},
{t:'note',tag:'Know & not know',q:'သိတယ် · မသိဘူး',body:'<p><span class="deva">သိတယ်</span> <b>thi de</b> = know. Its negative is one of the most useful lines in Burmese: <span class="deva">မသိဘူး</span> <b>ma thi bu</b> — "I do not know."</p>',eg:[['သိတယ်','thi de','know'],['မသိဘူး','ma thi bu','do not know']]},
{t:'mc',q:'How do you say "I do not know"?',o:['မသိဘူး','သိတယ်','မစားဘူး','မဟုတ်ဘူး'],a:0},
{t:'mc',q:'In the no-sandwich, တယ်…',o:['disappears','stays put','doubles','moves first'],a:0},
{t:'li',q:'Listen — which one?',say:'မသိဘူး',o:['မသိဘူး','သိတယ်','မစားဘူး','မသွားဘူး'],a:0}]},
{id:'my_neg_2',title:'Hear the no',step:'recognize',meta:'Yes-form or no-form?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'မစားဘူး',o:['မစားဘူး','စားတယ်','မသောက်ဘူး','မသွားဘူး'],a:0},
{t:'mc',q:'Which means "does not drink"?',o:['မသောက်ဘူး','သောက်တယ်','မစားဘူး','မသိဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'သိတယ်',o:['သိတယ်','မသိဘူး','စားတယ်','သွားတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မသောက်ဘူး',o:['does not drink','drinks','does not eat','will drink'],a:0},
{t:'mc',q:'The two pieces of the no-sandwich are…',o:['မ and ဘူး','တယ် and မယ်','ပါ and လား','ဒါ and ဘာ'],a:0},
{t:'li',q:'Listen — which one?',say:'မသွားဘူး',o:['မသွားဘူး','သွားတယ်','မစားဘူး','မသိဘူး'],a:0},
{t:'mc',q:'မဟုတ်ဘူး (no / not so) is built from ဟုတ် with…',o:['the same မ…ဘူး sandwich','a question word','the future မယ်','the polite ပါ'],a:0}]},
{id:'my_neg_3',title:'Put it together',step:'build',meta:'Build the no-sandwich',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['မစားဘူး','does not eat'],['မသွားဘူး','does not go'],['မသောက်ဘူး','does not drink'],['မသိဘူး','do not know']]},
{t:'wb',q:'Build: He does not drink',a:['သူ','မသောက်ဘူး'],pool:['သူ','မသောက်ဘူး','သောက်တယ်']},
{t:'mc',q:'Turn သွားတယ် into "does not go":',o:['မသွားဘူး','သွားမယ်','သွားလား','သွားပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'မသောက်ဘူး',o:['မသောက်ဘူး','မစားဘူး','သောက်တယ်','မသွားဘူး'],a:0},
{t:'wb',q:'Build: I do not know (man speaking)',a:['ကျွန်တော်','မသိဘူး'],pool:['ကျွန်တော်','မသိဘူး','သိတယ်']},
{t:'match',q:'Match line and meaning',pairs:[['သိတယ်','know'],['မသိဘူး','do not know'],['စားတယ်','eat'],['မစားဘူး','does not eat']]}]},
{id:'my_neg_4',title:'Mix it',step:'mix',meta:'Yes-forms & no-forms',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မသိဘူး',o:['do not know','know','do not go','do not eat'],a:0},
{t:'li',q:'Listen — which one?',say:'စားတယ်',o:['စားတယ်','မစားဘူး','သိတယ်','မသိဘူး'],a:0},
{t:'mc',q:'A friend offers coffee. To say you do not drink it:',o:['မသောက်ဘူး','သောက်တယ်','မသွားဘူး','မစားဘူး'],a:0},
{t:'wb',q:'Build: She does not go',a:['သူ','မသွားဘူး'],pool:['သူ','မသွားဘူး','သွားမယ်']},
{t:'li',q:'Listen — which one?',say:'မစားဘူး',o:['မစားဘူး','စားမယ်','မသောက်ဘူး','မသိဘူး'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['မသွားဘူး','does not go'],['မသောက်ဘူး','does not drink'],['သိတယ်','know'],['မစားဘူး','does not eat']]}]},
{id:'my_neg_5',title:'Checkpoint',step:'checkpoint',meta:'Saying no mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "do not know"?',o:['မသိဘူး','သိတယ်','မစားဘူး','မဟုတ်ဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'မသွားဘူး',o:['မသွားဘူး','သွားတယ်','မသောက်ဘူး','မစားဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'မစားဘူး',o:['does not eat','eats','will eat','does not drink'],a:0},
{t:'wb',q:'Build: I do not go (woman speaking)',a:['ကျွန်မ','မသွားဘူး'],pool:['ကျွန်မ','မသွားဘူး','သွားတယ်']},
{t:'mc',q:'The negative of စားတယ် is…',o:['မစားဘူး','စားမယ်','စားဘူး','မစားတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['မစားဘူး','does not eat'],['မသောက်ဘူး','does not drink'],['မသိဘူး','do not know'],['သိတယ်','know']]}]},

/* --- Topic 5: yes/no questions ...လား --- */
{id:'my_yn',title:'Asking: …လား',step:'learn',meta:'သွားလား စားမလား ဟုတ်လား',vocab:[['သွားလား','thwa la','going? / do you go?'],['စားမလား','sa ma la','will you eat?'],['ဟုတ်တယ်','houq de','that is right'],['ဟုတ်လား','houq la','really? / is that so?'],['ရတယ်','ya de','it is OK / can do'],['ရလား','ya la','is it OK?']],ex:[
{t:'note',tag:'Just add လား',q:'Statement → question',body:'<p>Yes/no questions could not be easier: put <span class="deva">လား</span> <b>la</b> at the end. <span class="deva">သွားလား</span> = "Going?" You met it long ago in <span class="deva">နေကောင်းလား</span>.</p><p>For future questions, မယ် shrinks to <span class="deva">မ</span>: <span class="deva">စားမလား</span> — "Will you eat?"</p>',eg:[['သွားလား','thwa la','going?'],['စားမလား','sa ma la','will you eat?']]},
{t:'mc',q:'Which asks "Will you eat?"',o:['စားမလား','စားမယ်','စားတယ်','မစားဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'သွားလား',o:['going? / do you go?','will you go?','does not go','go!'],a:0},
{t:'note',tag:'Answer by echo',q:'ဟုတ်တယ် · ရတယ်',body:'<p>Burmese usually answers by <b>echoing the verb</b>: သွားလား? → <span class="deva">သွားတယ်</span> (yes, I go) or <span class="deva">မသွားဘူး</span> (no).</p><p>Two all-purpose replies: <span class="deva">ဟုတ်တယ်</span> <b>houq de</b> "that is right" and <span class="deva">ရတယ်</span> <b>ya de</b> "it is OK / can do". Ask them back: <span class="deva">ဟုတ်လား</span> really? · <span class="deva">ရလား</span> is it OK?</p>',eg:[['ဟုတ်တယ်','houq de','that is right'],['ရတယ်','ya de','it is OK']]},
{t:'mc',q:'Which means "that is right"?',o:['ဟုတ်တယ်','ဟုတ်လား','ရလား','မဟုတ်ဘူး'],a:0},
{t:'mc',q:'How do you ask "Is it OK?"',o:['ရလား','ရတယ်','ဟုတ်တယ်','သွားလား'],a:0},
{t:'li',q:'Listen — which one?',say:'ဟုတ်လား',o:['ဟုတ်လား','ဟုတ်တယ်','ရလား','သွားလား'],a:0}]},
{id:'my_yn_2',title:'Hear the question',step:'recognize',meta:'Statement or question?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'သွားလား',o:['သွားလား','သွားတယ်','စားမလား','ရလား'],a:0},
{t:'mc',q:'Which means "really? / is that so?"',o:['ဟုတ်လား','ဟုတ်တယ်','ရတယ်','သွားလား'],a:0},
{t:'li',q:'Listen — which one?',say:'ရတယ်',o:['ရတယ်','ရလား','ဟုတ်တယ်','စားမလား'],a:0},
{t:'mc',q:'What does this mean?',d:'စားမလား',o:['will you eat?','do you eat?','I will eat','do not eat'],a:0},
{t:'mc',q:'The word that turns a statement into a yes/no question is…',o:['လား','လဲ','ဘူး','ပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'စားမလား',o:['စားမလား','စားမယ်','သွားလား','ရလား'],a:0},
{t:'mc',q:'Someone asks သွားလား and you ARE going. A natural reply:',o:['သွားတယ်','မသွားဘူး','ဘာ','ဟိုဟာ'],a:0}]},
{id:'my_yn_3',title:'Put it together',step:'build',meta:'Ask & answer',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['သွားလား','going?'],['စားမလား','will you eat?'],['ဟုတ်လား','really?'],['ရလား','is it OK?']]},
{t:'wb',q:'Build: Will you eat a meal?',a:['ထမင်း','စားမလား'],pool:['ထမင်း','စားမလား','စားမယ်']},
{t:'mc',q:'Someone asks ရလား (is it OK?). To say yes:',o:['ရတယ်','ရလား','မသိဘူး','ဟုတ်လား'],a:0},
{t:'li',q:'Listen — which one?',say:'ဟုတ်တယ်',o:['ဟုတ်တယ်','ဟုတ်လား','ရတယ်','ရလား'],a:0},
{t:'wb',q:'Build: Are you going tomorrow?',a:['မနက်ဖြန်','သွားမလား'],pool:['မနက်ဖြန်','သွားမလား','သွားတယ်']},
{t:'match',q:'Match question and yes-answer',pairs:[['သွားလား','သွားတယ်'],['ရလား','ရတယ်'],['ဟုတ်လား','ဟုတ်တယ်']]}]},
{id:'my_yn_4',title:'Mix it',step:'mix',meta:'Questions & answers',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ရလား',o:['is it OK?','it is OK','really?','will you eat?'],a:0},
{t:'li',q:'Listen — which one?',say:'ရလား',o:['ရလား','ရတယ်','ဟုတ်လား','သွားလား'],a:0},
{t:'mc',q:'Your friend says something surprising. You say…',o:['ဟုတ်လား','ဟုတ်တယ်','မသွားဘူး','ဒါပါ'],a:0},
{t:'mc',q:'Someone asks စားမလား and you will NOT eat. You reply…',o:['မစားဘူး','စားတယ်','ဟုတ်တယ်','ရတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားတယ်',o:['သွားတယ်','သွားလား','စားမလား','ရတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ဟုတ်တယ်','that is right'],['ရတယ်','it is OK'],['သွားလား','going?'],['စားမလား','will you eat?']]}]},
{id:'my_yn_5',title:'Checkpoint',step:'checkpoint',meta:'Questions mastered?',vocab:[],ex:[
{t:'mc',q:'How do you ask "Going?"',o:['သွားလား','သွားတယ်','သွားမယ်','မသွားဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'ဟုတ်လား',o:['ဟုတ်လား','ဟုတ်တယ်','ရလား','ရတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရတယ်',o:['it is OK / can do','is it OK?','that is right','really?'],a:0},
{t:'mc',q:'In future questions like စားမလား, the piece before လား is…',o:['မ (shrunk from မယ်)','ဘူး','တယ်','ပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'စားမလား',o:['စားမလား','စားမယ်','ရလား','သွားလား'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['သွားလား','going?'],['ဟုတ်လား','really?'],['ရလား','is it OK?'],['ဟုတ်တယ်','that is right']]}]},

/* --- Topic 6: wh-questions ...လဲ --- */
{id:'my_wh',title:'What, where, who',step:'learn',meta:'ဘာ ဘယ်မှာ ဘယ်သူ + လဲ',vocab:[['ဘာ','ba','what'],['ဘယ်မှာ','beh hma','where'],['ဘယ်သူ','beh thu','who'],['ဘာစားမလဲ','ba sa ma leh','what will you eat?'],['ဘယ်သူလဲ','beh thu leh','who is it?'],['ဘယ်မှာလဲ','beh hma leh','where is it?']],ex:[
{t:'note',tag:'The other question',q:'လား vs လဲ',body:'<p>Yes/no questions end in <span class="deva">လား</span>. Questions with a <b>question word</b> — what, where, who — end in <span class="deva">လဲ</span> <b>leh</b> instead.</p><p>You have used it all along: <span class="deva">နာမည်ဘယ်လိုခေါ်လဲ</span> (what is your name?) and <span class="deva">ဒါဘာလဲ</span> (what is this?).</p>',eg:[['ဘာ','ba','what'],['ဒါဘာလဲ','da ba leh','what is this?']]},
{t:'mc',q:'Which means "what"?',o:['ဘာ','ဘယ်သူ','ဘယ်မှာ','ဒါ'],a:0},
{t:'mc',q:'Question-word questions end in…',o:['လဲ','လား','ဘူး','တယ်'],a:0},
{t:'note',tag:'Where & who',q:'ဘယ်မှာ · ဘယ်သူ',body:'<p>The ဘ-family: <span class="deva">ဘယ်မှာ</span> <b>beh hma</b> = where · <span class="deva">ဘယ်သူ</span> <b>beh thu</b> = who.</p><p><span class="deva">ဘယ်သူလဲ</span> = Who is it? · <span class="deva">ဘယ်မှာလဲ</span> = Where is it? · <span class="deva">ဘာစားမလဲ</span> = What will you eat?</p>',eg:[['ဘယ်မှာလဲ','beh hma leh','where is it?'],['ဘယ်သူလဲ','beh thu leh','who is it?']]},
{t:'mc',q:'Which means "where"?',o:['ဘယ်မှာ','ဘယ်သူ','ဘာ','လဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘာစားမလဲ',o:['what will you eat?','will you eat?','who is eating?','where do you eat?'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်သူလဲ',o:['ဘယ်သူလဲ','ဘယ်မှာလဲ','ဒါဘာလဲ','ဘာစားမလဲ'],a:0}]},
{id:'my_wh_2',title:'Hear the question words',step:'recognize',meta:'Spot ဘာ ဘယ်မှာ ဘယ်သူ',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဘာ',o:['ဘာ','ဘယ်သူ','ဘယ်မှာ','ဒါ'],a:0},
{t:'mc',q:'Which means "who"?',o:['ဘယ်သူ','ဘယ်မှာ','ဘာ','သူ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်မှာလဲ',o:['ဘယ်မှာလဲ','ဘယ်သူလဲ','ဒါဘာလဲ','ဘာစားမလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်သူလဲ',o:['who is it?','where is it?','what is it?','how is it?'],a:0},
{t:'mc',q:'Someone knocks. You call out…',o:['ဘယ်သူလဲ','ဘယ်မှာလဲ','ဘာစားမလဲ','ရလား'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘာစားမလဲ',o:['ဘာစားမလဲ','ဘယ်သူလဲ','ဘယ်မှာလဲ','စားမလား'],a:0},
{t:'mc',q:'ဘာ, ဘယ်မှာ and ဘယ်သူ all begin with the same…',o:['ဘ — the question family','tone','vowel','ending'],a:0}]},
{id:'my_wh_3',title:'Put it together',step:'build',meta:'Ask real questions',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ဘာ','what'],['ဘယ်မှာ','where'],['ဘယ်သူ','who'],['ဘယ်သူလဲ','who is it?']]},
{t:'wb',q:'Build: What will you eat?',a:['ဘာ','စားမလဲ'],pool:['ဘာ','စားမလဲ','စားမလား']},
{t:'mc',q:'You lost your keys. You ask…',o:['ဘယ်မှာလဲ','ဘယ်သူလဲ','ဘာစားမလဲ','ဟုတ်လား'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်မှာ',o:['ဘယ်မှာ','ဘယ်သူ','ဘာ','ဘယ်မှာလဲ'],a:0},
{t:'wb',q:'Build: What is this?',a:['ဒါ','ဘာ','လဲ'],pool:['ဒါ','ဘာ','လဲ','လား']},
{t:'match',q:'Match question and meaning',pairs:[['ဘာစားမလဲ','what will you eat?'],['ဘယ်မှာလဲ','where is it?'],['ဒါဘာလဲ','what is this?'],['ဘယ်သူလဲ','who is it?']]}]},
{id:'my_wh_4',title:'Mix it',step:'mix',meta:'လား & လဲ together',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဘယ်မှာလဲ',o:['where is it?','who is it?','what is it?','is it OK?'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်သူ',o:['ဘယ်သူ','ဘယ်မှာ','ဘာ','သူ'],a:0},
{t:'mc',q:'"Will you eat?" (yes/no) vs "What will you eat?" end in…',o:['လား vs လဲ','လဲ vs လား','both လား','both လဲ'],a:0},
{t:'wb',q:'Build: Who is it?',a:['ဘယ်သူ','လဲ'],pool:['ဘယ်သူ','လဲ','လား']},
{t:'li',q:'Listen — which one?',say:'ဒါဘာလဲ',o:['ဒါဘာလဲ','ဘယ်သူလဲ','ဘယ်မှာလဲ','ဘာစားမလဲ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဘာ','what'],['ဘယ်သူ','who'],['ဘယ်မှာ','where'],['ဘာစားမလဲ','what will you eat?']]}]},
{id:'my_wh_5',title:'Checkpoint',step:'checkpoint',meta:'Question words mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "where"?',o:['ဘယ်မှာ','ဘာ','ဘယ်သူ','လဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်သူလဲ',o:['ဘယ်သူလဲ','ဘယ်မှာလဲ','ဘာစားမလဲ','ဒါဘာလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘာ',o:['what','who','where','this'],a:0},
{t:'mc',q:'Which question word fits: "___ လာမလဲ" (who will come?)',o:['ဘယ်သူ','ဘာ','ဘယ်မှာ','ဒါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်မှာလဲ',o:['ဘယ်မှာလဲ','ဘယ်သူလဲ','ဘာ','ဒါဘာလဲ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဘာ','what'],['ဘယ်မှာ','where'],['ဘယ်သူ','who'],['ဘယ်သူလဲ','who is it?']]}]},

/* --- Topic 7: want ...ချင် + like ကြိုက် --- */
{id:'my_want',title:'Want & like',step:'learn',meta:'စားချင်တယ် ကြိုက်တယ်',vocab:[['စားချင်တယ်','sa chin de','want to eat'],['သွားချင်တယ်','thwa chin de','want to go'],['သောက်ချင်တယ်','thauq chin de','want to drink'],['ကြိုက်တယ်','kyaiq de','like'],['မကြိုက်ဘူး','ma kyaiq bu','do not like'],['မစားချင်ဘူး','ma sa chin bu','do not want to eat']],ex:[
{t:'note',tag:'Slot it in',q:'verb + ချင် + တယ်',body:'<p>To want to DO something, slide <span class="deva">ချင်</span> <b>chin</b> between the verb and its ending: <span class="deva">စားချင်တယ်</span> = want to eat · <span class="deva">သွားချင်တယ်</span> = want to go.</p>',eg:[['စားချင်တယ်','sa chin de','want to eat'],['သွားချင်တယ်','thwa chin de','want to go']]},
{t:'mc',q:'Which means "want to eat"?',o:['စားချင်တယ်','စားတယ်','စားမယ်','မစားဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'သွားချင်တယ်',o:['want to go','want to eat','will go','goes'],a:0},
{t:'note',tag:'Liking things',q:'ကြိုက်တယ်',body:'<p>To like a THING, use <span class="deva">ကြိုက်တယ်</span> <b>kyaiq de</b>: <span class="deva">လက်ဖက်ရည်ကြိုက်တယ်</span> — "(I) like tea."</p><p>The no-sandwich still works on everything: <span class="deva">မကြိုက်ဘူး</span> do not like · <span class="deva">မစားချင်ဘူး</span> do not want to eat.</p>',eg:[['ကြိုက်တယ်','kyaiq de','like'],['မကြိုက်ဘူး','ma kyaiq bu','do not like']]},
{t:'mc',q:'Which means "like"?',o:['ကြိုက်တယ်','ချင်တယ်','သိတယ်','ရတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မစားချင်ဘူး',o:['do not want to eat','want to eat','do not eat','will not eat'],a:0},
{t:'li',q:'Listen — which one?',say:'ကြိုက်တယ်',o:['ကြိုက်တယ်','မကြိုက်ဘူး','စားချင်တယ်','သိတယ်'],a:0}]},
{id:'my_want_2',title:'Hear the wants',step:'recognize',meta:'Spot ချင် & ကြိုက်',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'စားချင်တယ်',o:['စားချင်တယ်','စားတယ်','သွားချင်တယ်','ကြိုက်တယ်'],a:0},
{t:'mc',q:'Which means "want to drink"?',o:['သောက်ချင်တယ်','သောက်တယ်','စားချင်တယ်','ကြိုက်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'မကြိုက်ဘူး',o:['မကြိုက်ဘူး','ကြိုက်တယ်','မစားချင်ဘူး','မသိဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'ကြိုက်တယ်',o:['like','want to eat','know','it is OK'],a:0},
{t:'mc',q:'ချင် slides in between…',o:['the verb and its ending','two nouns','subject and verb','မ and ဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားချင်တယ်',o:['သွားချင်တယ်','သွားတယ်','စားချင်တယ်','သောက်ချင်တယ်'],a:0},
{t:'mc',q:'Wanting to DO uses ချင်; liking a THING uses…',o:['ကြိုက်တယ်','ရတယ်','ဟုတ်တယ်','နေတယ်'],a:0}]},
{id:'my_want_3',title:'Put it together',step:'build',meta:'Say what you want',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['စားချင်တယ်','want to eat'],['သွားချင်တယ်','want to go'],['သောက်ချင်တယ်','want to drink'],['ကြိုက်တယ်','like']]},
{t:'wb',q:'Build: I want to drink water (man speaking)',a:['ကျွန်တော်','ရေ','သောက်ချင်တယ်'],pool:['ကျွန်တော်','ရေ','သောက်ချင်တယ်','စားချင်တယ်']},
{t:'mc',q:'Turn သွားတယ် into "want to go":',o:['သွားချင်တယ်','သွားမယ်','သွားလား','မသွားဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'သောက်ချင်တယ်',o:['သောက်ချင်တယ်','စားချင်တယ်','သွားချင်တယ်','ကြိုက်တယ်'],a:0},
{t:'wb',q:'Build: I like tea (woman speaking)',a:['ကျွန်မ','လက်ဖက်ရည်','ကြိုက်တယ်'],pool:['ကျွန်မ','လက်ဖက်ရည်','ကြိုက်တယ်','သောက်တယ်']},
{t:'match',q:'Match line and meaning',pairs:[['မကြိုက်ဘူး','do not like'],['မစားချင်ဘူး','do not want to eat'],['ကြိုက်တယ်','like'],['စားချင်တယ်','want to eat']]}]},
{id:'my_want_4',title:'Mix it',step:'mix',meta:'Wants, likes & everything',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'သောက်ချင်တယ်',o:['want to drink','want to eat','drinks','do not drink'],a:0},
{t:'li',q:'Listen — which one?',say:'မစားချင်ဘူး',o:['မစားချင်ဘူး','စားချင်တယ်','မကြိုက်ဘူး','မစားဘူး'],a:0},
{t:'mc',q:'You are offered food you dislike. Politely honest:',o:['မကြိုက်ဘူး','ကြိုက်တယ်','ဟုတ်တယ်','ရလား'],a:0},
{t:'wb',q:'Build: Do you want to eat a meal?',a:['ထမင်း','စားချင်လား'],pool:['ထမင်း','စားချင်လား','စားချင်တယ်']},
{t:'li',q:'Listen — which one?',say:'ကြိုက်တယ်',o:['ကြိုက်တယ်','မကြိုက်ဘူး','ရတယ်','သိတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['သွားချင်တယ်','want to go'],['ကြိုက်တယ်','like'],['မကြိုက်ဘူး','do not like'],['သောက်ချင်တယ်','want to drink']]}]},
{id:'my_want_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 3 engine complete!',vocab:[],ex:[
{t:'mc',q:'Which means "want to go"?',o:['သွားချင်တယ်','သွားတယ်','သွားမယ်','သွားလား'],a:0},
{t:'li',q:'Listen — which one?',say:'စားချင်တယ်',o:['စားချင်တယ်','စားတယ်','သောက်ချင်တယ်','ကြိုက်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မကြိုက်ဘူး',o:['do not like','like','do not want','do not know'],a:0},
{t:'wb',q:'Build: I want to go tomorrow (man speaking)',a:['ကျွန်တော်','မနက်ဖြန်','သွားချင်တယ်'],pool:['ကျွန်တော်','မနက်ဖြန်','သွားချင်တယ်','သွားမယ်']},
{t:'mc',q:'Statement, future, no, question, want — the endings are…',o:['တယ် · မယ် · မ…ဘူး · လား/လဲ · ချင်','all ပါ','all တယ်','random'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['စားချင်တယ်','want to eat'],['မစားချင်ဘူး','do not want to eat'],['ကြိုက်တယ်','like'],['သွားချင်တယ်','want to go']]}]},

/* ===================== ZONE 4 · WHERE & WITH =====================
   The little postpositional particles that do the work English word order
   does: မှာ (at/in), ကို (to/object), က (from/subject), နဲ့ (with/and) —
   plus the people you meet (kin terms as address) and food & the teashop.
   Sequenced per Mesher L3–4/L7 & Okell U2–3 (cafés). */
/* --- Topic 1: မှာ — at & in + places --- */
{id:'my_hma',title:'At & in: မှာ',step:'learn',meta:'အိမ် ဈေး ဆိုင် ကျောင်း + မှာ',vocab:[['မှာ','hma','at / in'],['အိမ်','ein','house / home'],['ဈေး','zei','market'],['ဆိုင်','hsaing','shop'],['ကျောင်း','kyaung','school'],['အိမ်မှာနေတယ်','ein hma ne de','stay at home']],ex:[
{t:'note',tag:'Little words, big work',q:'Particles',body:'<p>English shows who-does-what by word order. Burmese does it with <b>little particles glued after the noun</b>. This zone gives you the big four: <span class="deva">မှာ</span> at/in · <span class="deva">ကို</span> to · <span class="deva">က</span> from · <span class="deva">နဲ့</span> with.</p><p>First, <span class="deva">မှာ</span> <b>hma</b>: <span class="deva">အိမ်မှာ</span> = at home. You met it hiding in <span class="deva">ဘယ်မှာ</span> (where = which-at!).</p>',eg:[['မှာ','hma','at / in'],['အိမ်','ein','house / home']]},
{t:'mc',q:'Which means "house / home"?',o:['အိမ်','ဈေး','ဆိုင်','ကျောင်း'],a:0},
{t:'mc',q:'"At home" is…',o:['အိမ်မှာ','မှာအိမ်','အိမ်က','အိမ်ကို'],a:0},
{t:'note',tag:'Places',q:'ဈေး ဆိုင် ကျောင်း',body:'<p>Three places you will use daily: <span class="deva">ဈေး</span> <b>zei</b> = market · <span class="deva">ဆိုင်</span> <b>hsaing</b> = shop · <span class="deva">ကျောင်း</span> <b>kyaung</b> = school.</p><p><span class="deva">အိမ်မှာနေတယ်</span> — "(I) stay at home."</p>',eg:[['ဈေး','zei','market'],['ဆိုင်','hsaing','shop'],['ကျောင်း','kyaung','school']]},
{t:'mc',q:'Which means "market"?',o:['ဈေး','ဆိုင်','ကျောင်း','အိမ်'],a:0},
{t:'mc',q:'What does this mean?',d:'အိမ်မှာနေတယ်',o:['stay at home','go to school','come from the market','eat at the shop'],a:0},
{t:'li',q:'Listen — which place?',say:'ကျောင်း',o:['ကျောင်း','ဈေး','ဆိုင်','အိမ်'],a:0}]},
{id:'my_hma_2',title:'Hear the places',step:'recognize',meta:'Spot each place',vocab:[],ex:[
{t:'li',q:'Listen — which place?',say:'အိမ်',o:['အိမ်','ဈေး','ဆိုင်','ကျောင်း'],a:0},
{t:'mc',q:'Which means "shop"?',o:['ဆိုင်','ဈေး','ကျောင်း','အိမ်'],a:0},
{t:'li',q:'Listen — which place?',say:'ဈေး',o:['ဈေး','ဆိုင်','အိမ်','ကျောင်း'],a:0},
{t:'mc',q:'What does this mean?',d:'ကျောင်း',o:['school','market','shop','home'],a:0},
{t:'mc',q:'The particle that means "at / in" is…',o:['မှာ','ကို','က','နဲ့'],a:0},
{t:'li',q:'Listen — which one?',say:'အိမ်မှာနေတယ်',o:['အိမ်မှာနေတယ်','အိမ်','ဈေး','ကျောင်း'],a:0},
{t:'mc',q:'ဘယ်မှာ (where) is literally…',o:['which + at','who + at','what + to','this + in'],a:0}]},
{id:'my_hma_3',title:'Put it together',step:'build',meta:'Say where things happen',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['အိမ်','house / home'],['ဈေး','market'],['ဆိုင်','shop'],['ကျောင်း','school']]},
{t:'wb',q:'Build: (I) stay at home',a:['အိမ်','မှာ','နေတယ်'],pool:['အိမ်','မှာ','နေတယ်','ကို']},
{t:'mc',q:'"At the market" is…',o:['ဈေးမှာ','ဈေးကို','မှာဈေး','ဈေးနဲ့'],a:0},
{t:'li',q:'Listen — which place?',say:'ဆိုင်',o:['ဆိုင်','ဈေး','ကျောင်း','အိမ်'],a:0},
{t:'wb',q:'Build: (He) eats at school',a:['ကျောင်း','မှာ','စားတယ်'],pool:['ကျောင်း','မှာ','စားတယ်','နေတယ်']},
{t:'match',q:'Match word and meaning',pairs:[['မှာ','at / in'],['အိမ်မှာနေတယ်','stay at home'],['ဈေး','market'],['ကျောင်း','school']]}]},
{id:'my_hma_4',title:'Mix it',step:'mix',meta:'Places & မှာ together',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဈေး',o:['market','shop','school','house'],a:0},
{t:'li',q:'Listen — which place?',say:'အိမ်',o:['အိမ်','ကျောင်း','ဆိုင်','ဈေး'],a:0},
{t:'mc',q:'Where does သူ အိမ်မှာ စားတယ် say he eats?',o:['at home','at school','at the market','at the shop'],a:0},
{t:'wb',q:'Build: (I) drink tea at the shop',a:['ဆိုင်','မှာ','လက်ဖက်ရည်','သောက်တယ်'],pool:['ဆိုင်','မှာ','လက်ဖက်ရည်','သောက်တယ်','စားတယ်']},
{t:'li',q:'Listen — which place?',say:'ကျောင်း',o:['ကျောင်း','ဈေး','အိမ်','ဆိုင်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['အိမ်','house / home'],['ဆိုင်','shop'],['မှာ','at / in'],['ဈေး','market']]}]},
{id:'my_hma_5',title:'Checkpoint',step:'checkpoint',meta:'Places mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "school"?',o:['ကျောင်း','ဈေး','ဆိုင်','အိမ်'],a:0},
{t:'li',q:'Listen — which one?',say:'အိမ်မှာနေတယ်',o:['အိမ်မှာနေတယ်','ကျောင်း','ဈေး','အိမ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆိုင်',o:['shop','market','school','home'],a:0},
{t:'wb',q:'Build: (She) stays at home',a:['အိမ်','မှာ','နေတယ်'],pool:['အိမ်','မှာ','နေတယ်','သွားတယ်']},
{t:'mc',q:'"At school" is…',o:['ကျောင်းမှာ','ကျောင်းကို','ကျောင်းက','မှာကျောင်း'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['အိမ်','house / home'],['ဈေး','market'],['ဆိုင်','shop'],['ကျောင်း','school']]}]},

/* --- Topic 2: ကို — to & object --- */
{id:'my_ko',title:'To: ကို',step:'learn',meta:'ရန်ကုန်ကိုသွားမယ်',vocab:[['ကို','ko','to / object marker'],['ရန်ကုန်','yangoun','Yangon'],['မန္တလေး','mandale','Mandalay'],['ရန်ကုန်ကိုသွားမယ်','yangoun go thwa meh','will go to Yangon'],['ဈေးကိုသွားတယ်','zei go thwa de','go to the market']],ex:[
{t:'note',tag:'Going TO',q:'place + ကို + go',body:'<p><span class="deva">ကို</span> <b>ko</b> marks where you are going TO — and more generally the thing the verb acts on.</p><p><span class="deva">ရန်ကုန်ကိုသွားမယ်</span> = "(I) will go to Yangon." Notice the order again: place — ကို — verb last.</p>',eg:[['ကို','ko','to'],['ဈေးကိုသွားတယ်','zei go thwa de','go to the market']]},
{t:'mc',q:'The particle for going TO a place is…',o:['ကို','မှာ','က','နဲ့'],a:0},
{t:'mc',q:'What does this mean?',d:'ဈေးကိုသွားတယ်',o:['go to the market','stay at the market','come from the market','like the market'],a:0},
{t:'note',tag:'Two big cities',q:'ရန်ကုန် · မန္တလေး',body:'<p>Two places every Burmese learner talks about: <span class="deva">ရန်ကုန်</span> <b>yangoun</b> — Yangon, the biggest city — and <span class="deva">မန္တလေး</span> <b>mandale</b> — Mandalay, the old royal capital in the north.</p>',eg:[['ရန်ကုန်','yangoun','Yangon'],['မန္တလေး','mandale','Mandalay']]},
{t:'mc',q:'Which is Yangon?',o:['ရန်ကုန်','မန္တလေး','ကျောင်း','ဈေး'],a:0},
{t:'mc',q:'What does this mean?',d:'ရန်ကုန်ကိုသွားမယ်',o:['will go to Yangon','went to Yangon','stay in Yangon','come from Yangon'],a:0},
{t:'li',q:'Listen — which city?',say:'မန္တလေး',o:['မန္တလေး','ရန်ကုန်','ဈေး','ကျောင်း'],a:0}]},
{id:'my_ko_2',title:'Hear it',step:'recognize',meta:'Spot ကို & the cities',vocab:[],ex:[
{t:'li',q:'Listen — which city?',say:'ရန်ကုန်',o:['ရန်ကုန်','မန္တလေး','ကျောင်း','ဆိုင်'],a:0},
{t:'mc',q:'Which is Mandalay?',o:['မန္တလေး','ရန်ကုန်','ဈေး','အိမ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဈေးကိုသွားတယ်',o:['ဈေးကိုသွားတယ်','ရန်ကုန်ကိုသွားမယ်','ဈေး','အိမ်မှာနေတယ်'],a:0},
{t:'mc',q:'ဈေးမှာ vs ဈေးကို — the difference is…',o:['at the market vs to the market','to vs from','market vs shop','no difference'],a:0},
{t:'mc',q:'What does this mean?',d:'ကို',o:['to / object marker','at / in','from','with'],a:0},
{t:'li',q:'Listen — which one?',say:'ရန်ကုန်ကိုသွားမယ်',o:['ရန်ကုန်ကိုသွားမယ်','ဈေးကိုသွားတယ်','မန္တလေး','ရန်ကုန်'],a:0},
{t:'mc',q:'In ရန်ကုန်ကိုသွားမယ်, the verb sits…',o:['last, as always','first','in the middle','nowhere'],a:0}]},
{id:'my_ko_3',title:'Put it together',step:'build',meta:'Go places',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ကို','to'],['ရန်ကုန်','Yangon'],['မန္တလေး','Mandalay'],['ဈေးကိုသွားတယ်','go to the market']]},
{t:'wb',q:'Build: (I) will go to Yangon',a:['ရန်ကုန်','ကို','သွားမယ်'],pool:['ရန်ကုန်','ကို','သွားမယ်','မှာ']},
{t:'mc',q:'"To school" is…',o:['ကျောင်းကို','ကျောင်းမှာ','ကျောင်းက','ကိုကျောင်း'],a:0},
{t:'li',q:'Listen — which city?',say:'မန္တလေး',o:['မန္တလေး','ရန်ကုန်','ဆိုင်','ဈေး'],a:0},
{t:'wb',q:'Build: (She) goes to the market',a:['ဈေး','ကို','သွားတယ်'],pool:['ဈေး','ကို','သွားတယ်','နေတယ်']},
{t:'match',q:'Match line and meaning',pairs:[['ရန်ကုန်ကိုသွားမယ်','will go to Yangon'],['အိမ်မှာနေတယ်','stay at home'],['ဈေးကိုသွားတယ်','go to the market'],['မန္တလေး','Mandalay']]}]},
{id:'my_ko_4',title:'Mix it',step:'mix',meta:'မှာ & ကို together',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မန္တလေး',o:['Mandalay','Yangon','market','school'],a:0},
{t:'li',q:'Listen — which one?',say:'ကို',o:['ကို','မှာ','က','နဲ့'],a:0},
{t:'mc',q:'To say you will TRAVEL to Mandalay:',o:['မန္တလေးကိုသွားမယ်','မန္တလေးမှာနေတယ်','မန္တလေးက','မန္တလေးနဲ့'],a:0},
{t:'wb',q:'Build: Will you go to Yangon?',a:['ရန်ကုန်','ကို','သွားမလား'],pool:['ရန်ကုန်','ကို','သွားမလား','သွားမယ်']},
{t:'li',q:'Listen — which one?',say:'ဈေးကိုသွားတယ်',o:['ဈေးကိုသွားတယ်','ဈေး','ရန်ကုန်ကိုသွားမယ်','အိမ်မှာနေတယ်'],a:0},
{t:'match',q:'Match particle and job',pairs:[['မှာ','at / in'],['ကို','to'],['လား','yes/no question'],['တယ်','statement ending']]}]},
{id:'my_ko_5',title:'Checkpoint',step:'checkpoint',meta:'ကို mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "will go to Yangon"?',o:['ရန်ကုန်ကိုသွားမယ်','ရန်ကုန်မှာနေတယ်','ရန်ကုန်ကလာတယ်','ရန်ကုန်'],a:0},
{t:'li',q:'Listen — which city?',say:'ရန်ကုန်',o:['ရန်ကုန်','မန္တလေး','ဈေး','အိမ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဈေးကိုသွားတယ်',o:['go to the market','at the market','from the market','like the market'],a:0},
{t:'wb',q:'Build: (I) will go to Mandalay',a:['မန္တလေး','ကို','သွားမယ်'],pool:['မန္တလေး','ကို','သွားမယ်','လာမယ်']},
{t:'mc',q:'ကို marks…',o:['where you go TO','where you are AT','where you come FROM','who you are WITH'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ကို','to'],['ရန်ကုန်','Yangon'],['မန္တလေး','Mandalay'],['မှာ','at / in']]}]},

/* --- Topic 3: က — from & who does it --- */
{id:'my_ka',title:'From: က',step:'learn',meta:'ဘယ်က အိမ်ကလာတယ်',vocab:[['က','ga','from / subject marker'],['ဘယ်က','beh ga','from where'],['အိမ်ကလာတယ်','ein ga la de','come from home'],['ကျောင်းကလာတယ်','kyaung ga la de','come from school'],['ကျွန်တော်က','kyanaw ga','as for me, I…']],ex:[
{t:'note',tag:'Coming FROM',q:'place + က + come',body:'<p><span class="deva">က</span> <b>ga</b> marks where something comes FROM: <span class="deva">အိမ်ကလာတယ်</span> = "(I) come from home."</p><p>You already ask it every day: <span class="deva">ဘယ်ကလာလဲ</span> — where do you come from? — is ဘယ် + <b>က</b> + လာ + လဲ!</p>',eg:[['ဘယ်က','beh ga','from where'],['အိမ်ကလာတယ်','ein ga la de','come from home']]},
{t:'mc',q:'The particle for coming FROM is…',o:['က','ကို','မှာ','နဲ့'],a:0},
{t:'mc',q:'What does this mean?',d:'အိမ်ကလာတယ်',o:['come from home','go home','stay at home','like home'],a:0},
{t:'note',tag:'Pointing at the doer',q:'ကျွန်တော်က…',body:'<p>The same <span class="deva">က</span> can sit after the <b>subject</b> to spotlight who you are talking about: <span class="deva">ကျွန်တော်က</span> — "as for me, I…". Burmese speakers reach for it constantly when comparing people: <span class="deva">ကျွန်တော်က လက်ဖက်ရည် ကြိုက်တယ်</span> — me, I like tea.</p>',eg:[['ကျွန်တော်က','kyanaw ga','as for me, I…']]},
{t:'mc',q:'ကျွန်တော်က means…',o:['as for me, I…','to me','with me','at my house'],a:0},
{t:'mc',q:'What does this mean?',d:'ကျောင်းကလာတယ်',o:['come from school','go to school','stay at school','school is good'],a:0},
{t:'li',q:'Listen — which one?',say:'အိမ်ကလာတယ်',o:['အိမ်ကလာတယ်','ကျောင်းကလာတယ်','အိမ်မှာနေတယ်','ဘယ်က'],a:0}]},
{id:'my_ka_2',title:'Hear it',step:'recognize',meta:'Spot the froms',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဘယ်က',o:['ဘယ်က','ဘယ်မှာ','ဘယ်သူ','ဘာ'],a:0},
{t:'mc',q:'Which means "come from school"?',o:['ကျောင်းကလာတယ်','ကျောင်းကိုသွားတယ်','ကျောင်းမှာနေတယ်','ကျောင်း'],a:0},
{t:'li',q:'Listen — which one?',say:'ကျွန်တော်က',o:['ကျွန်တော်က','ကျွန်တော်','ကျွန်မ','ကျွန်တော်တို့'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်က',o:['from where','from home','to where','who'],a:0},
{t:'mc',q:'ဘယ်ကလာလဲ asks about…',o:['where you come from','where you are going','what you eat','who you are'],a:0},
{t:'li',q:'Listen — which one?',say:'ကျောင်းကလာတယ်',o:['ကျောင်းကလာတယ်','အိမ်ကလာတယ်','ကျောင်း','ဘယ်က'],a:0},
{t:'mc',q:'The three place-particles so far: at, to, from =',o:['မှာ · ကို · က','က · ကို · မှာ','တယ် · မယ် · ဘူး','ပါ · လား · လဲ'],a:0}]},
{id:'my_ka_3',title:'Put it together',step:'build',meta:'Say where from',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['က','from'],['ဘယ်က','from where'],['အိမ်ကလာတယ်','come from home'],['ကျွန်တော်က','as for me, I…']]},
{t:'wb',q:'Build: (He) comes from school',a:['ကျောင်း','က','လာတယ်'],pool:['ကျောင်း','က','လာတယ်','သွားတယ်']},
{t:'mc',q:'"From the market" is…',o:['ဈေးက','ဈေးကို','ဈေးမှာ','ဈေးနဲ့'],a:0},
{t:'li',q:'Listen — which one?',say:'အိမ်ကလာတယ်',o:['အိမ်ကလာတယ်','ကျောင်းကလာတယ်','အိမ်','အိမ်မှာနေတယ်'],a:0},
{t:'wb',q:'Build: As for me, I like tea (man speaking)',a:['ကျွန်တော်က','လက်ဖက်ရည်','ကြိုက်တယ်'],pool:['ကျွန်တော်က','လက်ဖက်ရည်','ကြိုက်တယ်','သောက်တယ်']},
{t:'match',q:'Match particle and job',pairs:[['က','from'],['ကို','to'],['မှာ','at / in'],['နဲ့','with / and']]}]},
{id:'my_ka_4',title:'Mix it',step:'mix',meta:'All three place-particles',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ကျွန်တော်က',o:['as for me, I…','to me','from you','at home'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်က',o:['ဘယ်က','ဘယ်မှာ','ဘာ','ဘယ်သူ'],a:0},
{t:'mc',q:'အိမ်ကလာတယ် vs အိမ်ကိုသွားတယ် —',o:['from home vs to home','to home vs from home','both mean at home','both mean from home'],a:0},
{t:'wb',q:'Build: Where do you come from?',a:['ဘယ်က','လာ','လဲ'],pool:['ဘယ်က','လာ','လဲ','လား']},
{t:'li',q:'Listen — which one?',say:'ကျောင်းကလာတယ်',o:['ကျောင်းကလာတယ်','အိမ်ကလာတယ်','ကျောင်းကိုသွားတယ်','ဘယ်က'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['အိမ်ကလာတယ်','come from home'],['ဈေးကိုသွားတယ်','go to the market'],['အိမ်မှာနေတယ်','stay at home'],['ကျွန်တော်က','as for me, I…']]}]},
{id:'my_ka_5',title:'Checkpoint',step:'checkpoint',meta:'က mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "from where"?',o:['ဘယ်က','ဘယ်မှာ','ဘယ်သူ','ဘယ်ကို'],a:0},
{t:'li',q:'Listen — which one?',say:'ကျွန်တော်က',o:['ကျွန်တော်က','ကျွန်တော်','ဘယ်က','ကျွန်မ'],a:0},
{t:'mc',q:'What does this mean?',d:'အိမ်ကလာတယ်',o:['come from home','go to home','stay at home','home is far'],a:0},
{t:'wb',q:'Build: (She) comes from the market',a:['ဈေး','က','လာတယ်'],pool:['ဈေး','က','လာတယ်','မှာ']},
{t:'mc',q:'at / to / from =',o:['မှာ / ကို / က','ကို / က / မှာ','က / မှာ / ကို','မှာ / က / ကို'],a:0},
{t:'match',q:'Match particle and job',pairs:[['မှာ','at / in'],['ကို','to'],['က','from'],['လဲ','question-word ending']]}]},

/* --- Topic 4: နဲ့ — with & and --- */
{id:'my_neh',title:'With & and: နဲ့',step:'learn',meta:'သူငယ်ချင်း မိသားစု + နဲ့',vocab:[['နဲ့','neh','with / and'],['သူငယ်ချင်း','thangeh chin','friend'],['မိသားစု','mi tha zu','family'],['ရေနဲ့ထမင်း','ye neh htamin','water and rice'],['သူငယ်ချင်းနဲ့သွားမယ်','thangeh chin neh thwa meh','will go with a friend']],ex:[
{t:'note',tag:'The friendly particle',q:'နဲ့',body:'<p><span class="deva">နဲ့</span> <b>neh</b> does two jobs: <b>and</b> between things — <span class="deva">ရေနဲ့ထမင်း</span> water and rice — and <b>with</b> someone: <span class="deva">သူငယ်ချင်းနဲ့</span> with a friend.</p>',eg:[['နဲ့','neh','with / and'],['ရေနဲ့ထမင်း','ye neh htamin','water and rice']]},
{t:'mc',q:'Which particle means "with / and"?',o:['နဲ့','မှာ','ကို','က'],a:0},
{t:'mc',q:'What does this mean?',d:'ရေနဲ့ထမင်း',o:['water and rice','water or rice','rice at home','water from home'],a:0},
{t:'note',tag:'Your people',q:'သူငယ်ချင်း · မိသားစု',body:'<p><span class="deva">သူငယ်ချင်း</span> <b>thangeh chin</b> = friend. <span class="deva">မိသားစု</span> <b>mi tha zu</b> = family.</p><p><span class="deva">သူငယ်ချင်းနဲ့သွားမယ်</span> — "(I) will go with a friend."</p>',eg:[['သူငယ်ချင်း','thangeh chin','friend'],['မိသားစု','mi tha zu','family']]},
{t:'mc',q:'Which means "friend"?',o:['သူငယ်ချင်း','မိသားစု','ဆရာ','သူတို့'],a:0},
{t:'mc',q:'What does this mean?',d:'သူငယ်ချင်းနဲ့သွားမယ်',o:['will go with a friend','friend will come','go to a friend','from a friend'],a:0},
{t:'li',q:'Listen — which word?',say:'မိသားစု',o:['မိသားစု','သူငယ်ချင်း','နဲ့','ကျောင်း'],a:0}]},
{id:'my_neh_2',title:'Hear it',step:'recognize',meta:'Spot နဲ့ & the people',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'သူငယ်ချင်း',o:['သူငယ်ချင်း','မိသားစု','သူတို့','ဆရာ'],a:0},
{t:'mc',q:'Which means "family"?',o:['မိသားစု','သူငယ်ချင်း','အိမ်','သူတို့'],a:0},
{t:'li',q:'Listen — which one?',say:'ရေနဲ့ထမင်း',o:['ရေနဲ့ထမင်း','ရေ','ထမင်း','နဲ့'],a:0},
{t:'mc',q:'What does this mean?',d:'နဲ့',o:['with / and','at / in','to','from'],a:0},
{t:'mc',q:'"Tea and water" would be…',o:['လက်ဖက်ရည်နဲ့ရေ','လက်ဖက်ရည်ကရေ','လက်ဖက်ရည်မှာရေ','လက်ဖက်ရည်ကိုရေ'],a:0},
{t:'li',q:'Listen — which one?',say:'သူငယ်ချင်းနဲ့သွားမယ်',o:['သူငယ်ချင်းနဲ့သွားမယ်','သူငယ်ချင်း','မိသားစု','ရေနဲ့ထမင်း'],a:0},
{t:'mc',q:'To say WHO you do something with, glue နဲ့ after…',o:['the person','the verb','တယ်','yourself'],a:0}]},
{id:'my_neh_3',title:'Put it together',step:'build',meta:'And & with',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['နဲ့','with / and'],['သူငယ်ချင်း','friend'],['မိသားစု','family'],['ရေနဲ့ထမင်း','water and rice']]},
{t:'wb',q:'Build: (I) will go with a friend',a:['သူငယ်ချင်း','နဲ့','သွားမယ်'],pool:['သူငယ်ချင်း','နဲ့','သွားမယ်','က']},
{t:'mc',q:'"With family" is…',o:['မိသားစုနဲ့','မိသားစုက','မိသားစုကို','မိသားစုမှာ'],a:0},
{t:'li',q:'Listen — which word?',say:'နဲ့',o:['နဲ့','မှာ','က','ကို'],a:0},
{t:'wb',q:'Build: water and tea',a:['ရေ','နဲ့','လက်ဖက်ရည်'],pool:['ရေ','နဲ့','လက်ဖက်ရည်','ထမင်း']},
{t:'match',q:'Match particle and job',pairs:[['နဲ့','with / and'],['က','from'],['ကို','to'],['မှာ','at / in']]}]},
{id:'my_neh_4',title:'Mix it',step:'mix',meta:'All four particles',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မိသားစု',o:['family','friend','teacher','people'],a:0},
{t:'li',q:'Listen — which one?',say:'ရေနဲ့ထမင်း',o:['ရေနဲ့ထမင်း','ရေ','သူငယ်ချင်းနဲ့သွားမယ်','ထမင်း'],a:0},
{t:'mc',q:'မိသားစုနဲ့ အိမ်မှာ စားတယ် means eating…',o:['with family at home','with friends at school','alone at the market','at a shop with tea'],a:0},
{t:'wb',q:'Build: (She) eats with family at home',a:['မိသားစု','နဲ့','အိမ်','မှာ','စားတယ်'],pool:['မိသားစု','နဲ့','အိမ်','မှာ','စားတယ်','ကို']},
{t:'li',q:'Listen — which word?',say:'သူငယ်ချင်း',o:['သူငယ်ချင်း','မိသားစု','ဆရာ','သူ'],a:0},
{t:'match',q:'Match particle and job',pairs:[['မှာ','at / in'],['ကို','to'],['က','from'],['နဲ့','with / and']]}]},
{id:'my_neh_5',title:'Checkpoint',step:'checkpoint',meta:'The four particles!',vocab:[],ex:[
{t:'mc',q:'Which means "friend"?',o:['သူငယ်ချင်း','မိသားစု','ဘယ်သူ','သူ'],a:0},
{t:'li',q:'Listen — which one?',say:'သူငယ်ချင်းနဲ့သွားမယ်',o:['သူငယ်ချင်းနဲ့သွားမယ်','ရေနဲ့ထမင်း','မိသားစု','သူငယ်ချင်း'],a:0},
{t:'mc',q:'What does this mean?',d:'ရေနဲ့ထမင်း',o:['water and rice','water with tea','rice from home','rice at the shop'],a:0},
{t:'wb',q:'Build: (I) will eat with family',a:['မိသားစု','နဲ့','စားမယ်'],pool:['မိသားစု','နဲ့','စားမယ်','မှာ']},
{t:'mc',q:'at, to, from, with =',o:['မှာ ကို က နဲ့','နဲ့ က ကို မှာ','ကို မှာ နဲ့ က','က နဲ့ မှာ ကို'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['နဲ့','with / and'],['သူငယ်ချင်း','friend'],['မိသားစု','family'],['မှာ','at / in']]}]},

/* --- Topic 5: kin terms as address — the Burmese "you" --- */
{id:'my_kin',title:'Aunties & uncles',step:'learn',meta:'ဦး ဒေါ် အစ်ကို အစ်မ ဆရာ',vocab:[['ဦး','u','U — older man (Mr)'],['ဒေါ်','daw','Daw — older woman (Ms)'],['အစ်ကို','ako','older brother'],['အစ်မ','ama','older sister'],['ဆရာ','hsaya','teacher / sir'],['ဆရာမ','hsayama','teacher (woman)']],ex:[
{t:'note',tag:'The Burmese you',q:'Say the person, not "you"',body:'<p>Real Burmese conversation mostly <b>avoids</b> "you". Instead you address people as family, by age: an older man is <span class="deva">ဦး</span> <b>u</b> (uncle / Mr), an older woman <span class="deva">ဒေါ်</span> <b>daw</b> (auntie / Ms).</p><p>These same words sit in names: U Nu, Daw Aung San Suu Kyi.</p>',eg:[['ဦး','u','older man / Mr'],['ဒေါ်','daw','older woman / Ms']]},
{t:'mc',q:'An older man is addressed as…',o:['ဦး','ဒေါ်','အစ်မ','ဆရာမ'],a:0},
{t:'mc',q:'What does ဒေါ် mean?',d:'ဒေါ်',o:['older woman / Ms','older man / Mr','older brother','teacher'],a:0},
{t:'note',tag:'Brothers, sisters & teachers',q:'အစ်ကို အစ်မ ဆရာ',body:'<p>Someone a little older: <span class="deva">အစ်ကို</span> <b>ako</b> older brother · <span class="deva">အစ်မ</span> <b>ama</b> older sister. (Young men and women are also called <span class="deva">ကို</span> Ko and <span class="deva">မ</span> Ma before their names.)</p><p>Anyone you respect — a teacher, a doctor, a boss — is <span class="deva">ဆရာ</span> <b>hsaya</b> (man) or <span class="deva">ဆရာမ</span> <b>hsayama</b> (woman).</p>',eg:[['အစ်ကို','ako','older brother'],['အစ်မ','ama','older sister'],['ဆရာ','hsaya','teacher']]},
{t:'mc',q:'Which means "older sister"?',o:['အစ်မ','အစ်ကို','ဒေါ်','ဆရာမ'],a:0},
{t:'mc',q:'A woman teacher is…',o:['ဆရာမ','ဆရာ','ဒေါ်','အစ်မ'],a:0},
{t:'li',q:'Listen — which word?',say:'ဆရာ',o:['ဆရာ','ဆရာမ','ဒေါ်','ဦး'],a:0}]},
{id:'my_kin_2',title:'Hear the titles',step:'recognize',meta:'Spot each address word',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ဦး',o:['ဦး','ဒေါ်','အစ်ကို','ဆရာ'],a:0},
{t:'mc',q:'Which means "older brother"?',o:['အစ်ကို','အစ်မ','ဦး','ဆရာ'],a:0},
{t:'li',q:'Listen — which word?',say:'အစ်မ',o:['အစ်မ','အစ်ကို','ဒေါ်','ဆရာမ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆရာ',o:['teacher / sir','older brother','uncle','friend'],a:0},
{t:'mc',q:'Why does Burmese avoid the word "you"?',o:['family terms feel more polite','there is no word for you','it is hard to say','it is literary only'],a:0},
{t:'li',q:'Listen — which word?',say:'ဒေါ်',o:['ဒေါ်','ဦး','အစ်မ','ဆရာမ'],a:0},
{t:'mc',q:'In the name Daw Khin, ဒေါ် shows the person is…',o:['a respected woman','a respected man','a child','a place'],a:0}]},
{id:'my_kin_3',title:'Put it together',step:'build',meta:'Address people right',vocab:[],ex:[
{t:'match',q:'Match title and person',pairs:[['ဦး','older man / Mr'],['ဒေါ်','older woman / Ms'],['အစ်ကို','older brother'],['အစ်မ','older sister']]},
{t:'mc',q:'Your friend is a bit older than you (a man). Call him…',o:['အစ်ကို','ဦး','ဆရာမ','ဒေါ်'],a:0},
{t:'li',q:'Listen — which word?',say:'အစ်ကို',o:['အစ်ကို','အစ်မ','ဦး','ဆရာ'],a:0},
{t:'mc',q:'Your (male) doctor deserves the respect word…',o:['ဆရာ','အစ်ကို','ဒေါ်','မ'],a:0},
{t:'match',q:'Match title and person',pairs:[['ဆရာ','teacher / sir'],['ဆရာမ','teacher (woman)'],['ဦး','older man / Mr'],['အစ်မ','older sister']]},
{t:'mc',q:'A young woman named Khin is politely called…',o:['မ Khin','ဦး Khin','ကို Khin','ဆရာ Khin'],a:0}]},
{id:'my_kin_4',title:'Mix it',step:'mix',meta:'All the titles',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အစ်ကို',o:['older brother','older sister','uncle','teacher'],a:0},
{t:'li',q:'Listen — which word?',say:'ဆရာမ',o:['ဆရာမ','ဆရာ','အစ်မ','ဒေါ်'],a:0},
{t:'mc',q:'An older woman selling fruit at the market — address her as…',o:['ဒေါ်','ဦး','အစ်ကို','ဆရာ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆရာမ',o:['teacher (woman)','teacher (man)','older sister','Ms'],a:0},
{t:'li',q:'Listen — which word?',say:'ဦး',o:['ဦး','ဒေါ်','အစ်ကို','ဆရာ'],a:0},
{t:'match',q:'Match title and person',pairs:[['ဦး','older man / Mr'],['ဒေါ်','older woman / Ms'],['ဆရာ','teacher / sir'],['အစ်ကို','older brother']]}]},
{id:'my_kin_5',title:'Checkpoint',step:'checkpoint',meta:'Titles mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "older woman / Ms"?',o:['ဒေါ်','ဦး','အစ်မ','ဆရာမ'],a:0},
{t:'li',q:'Listen — which word?',say:'အစ်မ',o:['အစ်မ','အစ်ကို','ဒေါ်','ဆရာ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဦး',o:['older man / Mr','older woman / Ms','older brother','friend'],a:0},
{t:'mc',q:'Instead of "you", Burmese speakers prefer…',o:['kin terms & titles','pointing','the persons age','silence'],a:0},
{t:'li',q:'Listen — which word?',say:'ဆရာ',o:['ဆရာ','ဆရာမ','ဦး','အစ်ကို'],a:0},
{t:'match',q:'Match title and person',pairs:[['ဦး','older man / Mr'],['ဒေါ်','older woman / Ms'],['အစ်ကို','older brother'],['ဆရာမ','teacher (woman)']]}]},

/* --- Topic 6: food & drink --- */
{id:'my_food',title:'Food & drink',step:'learn',meta:'ဟင်း ငါး ကြက်သား ကော်ဖီ',vocab:[['ဟင်း','hin','curry / dish'],['ငါး','nga','fish'],['ကြက်သား','kyeq tha','chicken'],['သစ်သီး','thiq thi','fruit'],['ကော်ဖီ','kaw hpi','coffee'],['နို့','no','milk']],ex:[
{t:'note',tag:'On the table',q:'ထမင်း & ဟင်း',body:'<p>A Burmese meal is <span class="deva">ထမင်း</span> (rice) plus <span class="deva">ဟင်း</span> <b>hin</b> — the curries and dishes around it. "Eat a meal" is literally "eat rice"!</p><p><span class="deva">ငါး</span> <b>nga</b> = fish — yes, written and said exactly like the number five! Context tells you which is which.</p>',eg:[['ဟင်း','hin','curry / dish'],['ငါး','nga','fish']]},
{t:'mc',q:'Which means "curry / dish"?',o:['ဟင်း','ထမင်း','ငါး','နို့'],a:0},
{t:'mc',q:'ငါး means fish AND…',d:'ငါး',o:['the number five','the number nine','water','rice'],a:0},
{t:'note',tag:'More tastes',q:'ကြက်သား သစ်သီး ကော်ဖီ နို့',body:'<p><span class="deva">ကြက်သား</span> <b>kyeq tha</b> = chicken · <span class="deva">သစ်သီး</span> <b>thiq thi</b> = fruit · <span class="deva">ကော်ဖီ</span> <b>kaw hpi</b> = coffee · <span class="deva">နို့</span> <b>no</b> = milk.</p>',eg:[['ကြက်သား','kyeq tha','chicken'],['သစ်သီး','thiq thi','fruit'],['ကော်ဖီ','kaw hpi','coffee']]},
{t:'mc',q:'Which means "chicken"?',o:['ကြက်သား','ငါး','သစ်သီး','ဟင်း'],a:0},
{t:'mc',q:'What does this mean?',d:'ကော်ဖီ',o:['coffee','milk','tea','fruit'],a:0},
{t:'li',q:'Listen — which food?',say:'သစ်သီး',o:['သစ်သီး','ကြက်သား','ဟင်း','ငါး'],a:0}]},
{id:'my_food_2',title:'Hear the foods',step:'recognize',meta:'Spot each food',vocab:[],ex:[
{t:'li',q:'Listen — which food?',say:'ဟင်း',o:['ဟင်း','ငါး','နို့','ကော်ဖီ'],a:0},
{t:'mc',q:'Which means "milk"?',o:['နို့','ကော်ဖီ','ရေ','လက်ဖက်ရည်'],a:0},
{t:'li',q:'Listen — which food?',say:'ကြက်သား',o:['ကြက်သား','သစ်သီး','ဟင်း','ကော်ဖီ'],a:0},
{t:'mc',q:'What does this mean?',d:'သစ်သီး',o:['fruit','chicken','fish','curry'],a:0},
{t:'mc',q:'A Burmese meal is rice plus…',o:['ဟင်း — the dishes around it','နို့','ကော်ဖီ','သစ်သီး'],a:0},
{t:'li',q:'Listen — which drink?',say:'ကော်ဖီ',o:['ကော်ဖီ','နို့','ရေ','လက်ဖက်ရည်'],a:0},
{t:'mc',q:'Which means "fish"?',o:['ငါး','ကြက်သား','ဟင်း','သစ်သီး'],a:0}]},
{id:'my_food_3',title:'Put it together',step:'build',meta:'Order of the day',vocab:[],ex:[
{t:'match',q:'Match food and meaning',pairs:[['ဟင်း','curry / dish'],['ငါး','fish'],['ကြက်သား','chicken'],['သစ်သီး','fruit']]},
{t:'wb',q:'Build: (I) eat fish curry — fish curry eat',a:['ငါး','ဟင်း','စားတယ်'],pool:['ငါး','ဟင်း','စားတယ်','သောက်တယ်']},
{t:'mc',q:'You want something to DRINK. Pick the drinkable pair:',o:['ကော်ဖီနဲ့နို့','ငါးနဲ့ဟင်း','ကြက်သားနဲ့ထမင်း','သစ်သီးနဲ့ဟင်း'],a:0},
{t:'li',q:'Listen — which food?',say:'ငါး',o:['ငါး','ဟင်း','နို့','ကြက်သား'],a:0},
{t:'wb',q:'Build: (I) drink coffee with milk — coffee milk-with drink',a:['ကော်ဖီ','နို့','နဲ့','သောက်တယ်'],pool:['ကော်ဖီ','နို့','နဲ့','သောက်တယ်','စားတယ်']},
{t:'match',q:'Match food and meaning',pairs:[['ကော်ဖီ','coffee'],['နို့','milk'],['ထမင်း','rice / meal'],['ငါး','fish']]}]},
{id:'my_food_4',title:'Mix it',step:'mix',meta:'Foods, drinks & sentences',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ကြက်သား',o:['chicken','fish','fruit','curry'],a:0},
{t:'li',q:'Listen — which food?',say:'နို့',o:['နို့','ကော်ဖီ','ရေ','ငါး'],a:0},
{t:'mc',q:'ကြက်သားဟင်း ကြိုက်တယ် means…',o:['(I) like chicken curry','(I) eat fish','(I) drink coffee','(I) want fruit'],a:0},
{t:'wb',q:'Build: Do you like fruit?',a:['သစ်သီး','ကြိုက်လား'],pool:['သစ်သီး','ကြိုက်လား','ကြိုက်တယ်']},
{t:'li',q:'Listen — which food?',say:'ဟင်း',o:['ဟင်း','ငါး','သစ်သီး','ထမင်း'],a:0},
{t:'match',q:'Match food and meaning',pairs:[['သစ်သီး','fruit'],['ကြက်သား','chicken'],['နို့','milk'],['ဟင်း','curry / dish']]}]},
{id:'my_food_5',title:'Checkpoint',step:'checkpoint',meta:'Foods mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "fruit"?',o:['သစ်သီး','ကြက်သား','ငါး','ဟင်း'],a:0},
{t:'li',q:'Listen — which drink?',say:'ကော်ဖီ',o:['ကော်ဖီ','နို့','လက်ဖက်ရည်','ရေ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဟင်း',o:['curry / dish','rice','fish','fruit'],a:0},
{t:'wb',q:'Build: (I) want to eat chicken',a:['ကြက်သား','စားချင်တယ်'],pool:['ကြက်သား','စားချင်တယ်','သောက်ချင်တယ်']},
{t:'mc',q:'The word that is both "five" and "fish":',o:['ငါး','ဆယ်','နှစ်','ကိုး'],a:0},
{t:'match',q:'Match food and meaning',pairs:[['ဟင်း','curry / dish'],['ကြက်သား','chicken'],['ကော်ဖီ','coffee'],['နို့','milk']]}]},

/* --- Topic 7: at the teashop — order politely --- */
{id:'my_shop',title:'At the teashop',step:'learn',meta:'…ပေးပါ & ဒါပဲ',vocab:[['လက်ဖက်ရည်ဆိုင်','lahpeq yeh hsaing','teashop'],['ပေးပါ','pei ba','please give…'],['ရေပေးပါ','ye pei ba','water, please'],['လက်ဖက်ရည်ပေးပါ','lahpeq yeh pei ba','tea, please'],['ဒါပဲ','da beh','that is all'],['ကောင်းတယ်','kaung de','it is good']],ex:[
{t:'note',tag:'The teashop',q:'လက်ဖက်ရည်ဆိုင်',body:'<p>The <span class="deva">လက်ဖက်ရည်ဆိုင်</span> <b>lahpeq yeh hsaing</b> — teashop — is the living room of Myanmar: tea, snacks, football and long conversations. Time to order.</p>',eg:[['လက်ဖက်ရည်ဆိုင်','lahpeq yeh hsaing','teashop']]},
{t:'mc',q:'A လက်ဖက်ရည်ဆိုင် is a…',d:'လက်ဖက်ရည်ဆိုင်',o:['teashop','school','market','house'],a:0},
{t:'note',tag:'Ordering',q:'thing + ပေးပါ',body:'<p>To order, name the thing and add <span class="deva">ပေးပါ</span> <b>pei ba</b> — "please give": <span class="deva">ရေပေးပါ</span> water, please · <span class="deva">လက်ဖက်ရည်ပေးပါ</span> tea, please.</p><p>ပေး = give + our polite ပါ. Spot how polite requests end in ပါ, just like မင်္ဂလာပါ.</p>',eg:[['ရေပေးပါ','ye pei ba','water, please'],['လက်ဖက်ရည်ပေးပါ','lahpeq yeh pei ba','tea, please']]},
{t:'mc',q:'How do you ask for water?',o:['ရေပေးပါ','ရေသောက်တယ်','ရေကြိုက်တယ်','ဒါရေပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'လက်ဖက်ရည်ပေးပါ',o:['tea, please','I like tea','this is tea','tea is good'],a:0},
{t:'note',tag:'Wrap it up',q:'ဒါပဲ · ကောင်းတယ်',body:'<p>Done ordering? <span class="deva">ဒါပဲ</span> <b>da beh</b> — "that is all." Enjoying it? <span class="deva">ကောင်းတယ်</span> <b>kaung de</b> — "it is good!"</p>',eg:[['ဒါပဲ','da beh','that is all'],['ကောင်းတယ်','kaung de','it is good']]},
{t:'mc',q:'The waiter asks if you want more. You are done:',o:['ဒါပဲ','ပေးပါ','ကောင်းတယ်','ရလား'],a:0},
{t:'li',q:'Listen — which line?',say:'လက်ဖက်ရည်ပေးပါ',o:['လက်ဖက်ရည်ပေးပါ','ရေပေးပါ','ဒါပဲ','ကောင်းတယ်'],a:0}]},
{id:'my_shop_2',title:'Hear the order',step:'recognize',meta:'Spot each line',vocab:[],ex:[
{t:'li',q:'Listen — which line?',say:'ရေပေးပါ',o:['ရေပေးပါ','လက်ဖက်ရည်ပေးပါ','ဒါပဲ','ကောင်းတယ်'],a:0},
{t:'mc',q:'Which means "that is all"?',o:['ဒါပဲ','ပေးပါ','ဒါရေပါ','ရတယ်'],a:0},
{t:'li',q:'Listen — which line?',say:'ဒါပဲ',o:['ဒါပဲ','ဒါ','ဒါရေပါ','ဒါဘာလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ကောင်းတယ်',o:['it is good','it is bad','that is all','please give'],a:0},
{t:'mc',q:'The polite "please give" is…',o:['ပေးပါ','ပေးတယ်','ပေးလား','ပေးမယ်'],a:0},
{t:'li',q:'Listen — which line?',say:'ကောင်းတယ်',o:['ကောင်းတယ်','ဒါပဲ','ရေပေးပါ','ရတယ်'],a:0},
{t:'mc',q:'Which shop sells လက်ဖက်ရည်?',o:['လက်ဖက်ရည်ဆိုင်','ကျောင်း','အိမ်','ဈေး'],a:0}]},
{id:'my_shop_3',title:'Put it together',step:'build',meta:'Order like a local',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ရေပေးပါ','water, please'],['လက်ဖက်ရည်ပေးပါ','tea, please'],['ဒါပဲ','that is all'],['ကောင်းတယ်','it is good']]},
{t:'wb',q:'Build: Coffee, please',a:['ကော်ဖီ','ပေးပါ'],pool:['ကော်ဖီ','ပေးပါ','ပေးတယ်']},
{t:'mc',q:'To order chicken curry, say…',o:['ကြက်သားဟင်းပေးပါ','ကြက်သားဟင်းကြိုက်တယ်','ဒါပဲ','ကောင်းတယ်'],a:0},
{t:'li',q:'Listen — which line?',say:'ဒါပဲ',o:['ဒါပဲ','ဒါဘာလဲ','ရေပေးပါ','ကောင်းတယ်'],a:0},
{t:'wb',q:'Build: Water and tea, please',a:['ရေ','နဲ့','လက်ဖက်ရည်','ပေးပါ'],pool:['ရေ','နဲ့','လက်ဖက်ရည်','ပေးပါ','ဒါပဲ']},
{t:'match',q:'Match line and meaning',pairs:[['လက်ဖက်ရည်ဆိုင်','teashop'],['ပေးပါ','please give…'],['ဒါပဲ','that is all'],['ရေပေးပါ','water, please']]}]},
{id:'my_shop_4',title:'Mix it',step:'mix',meta:'The whole visit',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ရေပေးပါ',o:['water, please','this is water','I drink water','water is good'],a:0},
{t:'li',q:'Listen — which line?',say:'လက်ဖက်ရည်ဆိုင်',o:['လက်ဖက်ရည်ဆိုင်','လက်ဖက်ရည်','လက်ဖက်ရည်ပေးပါ','ဆိုင်'],a:0},
{t:'mc',q:'The tea arrives and it is delicious. You say…',o:['ကောင်းတယ်','ဒါပဲ','မကြိုက်ဘူး','ဘယ်မှာလဲ'],a:0},
{t:'wb',q:'Build: Milk tea, please — tea milk-with please-give',a:['လက်ဖက်ရည်','နို့','နဲ့','ပေးပါ'],pool:['လက်ဖက်ရည်','နို့','နဲ့','ပေးပါ','သောက်တယ်']},
{t:'li',q:'Listen — which line?',say:'ကောင်းတယ်',o:['ကောင်းတယ်','မကြိုက်ဘူး','ဒါပဲ','ရတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ကော်ဖီ','coffee'],['ပေးပါ','please give…'],['ကောင်းတယ်','it is good'],['ဒါပဲ','that is all']]}]},
{id:'my_shop_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 4 complete!',vocab:[],ex:[
{t:'mc',q:'How do you order tea?',o:['လက်ဖက်ရည်ပေးပါ','လက်ဖက်ရည်ကြိုက်တယ်','လက်ဖက်ရည်ဆိုင်','ဒါပဲ'],a:0},
{t:'li',q:'Listen — which line?',say:'ရေပေးပါ',o:['ရေပေးပါ','လက်ဖက်ရည်ပေးပါ','ကောင်းတယ်','ဒါပဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဒါပဲ',o:['that is all','what is this?','please give','it is good'],a:0},
{t:'wb',q:'Build: Fruit, please',a:['သစ်သီး','ပေးပါ'],pool:['သစ်သီး','ပေးပါ','စားတယ်']},
{t:'mc',q:'Polite requests end in the same syllable as မင်္ဂလာပါ:',o:['ပါ','တယ်','လား','ဘူး'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ရေပေးပါ','water, please'],['ဒါပဲ','that is all'],['ကောင်းတယ်','it is good'],['လက်ဖက်ရည်ဆိုင်','teashop']]}]},

/* ===================== ZONE 5 · HOW MANY =====================
   Numbers in action: classifiers (noun + number + classifier), money in
   kyat, prices & bargaining, clock time, days of the week. Sequenced per
   Mesher L5–6/L9 & Okell U1 (prices) / U2 (counting). */
/* --- Topic 1: classifiers ယောက် ခု ကောင် --- */
{id:'my_clf',title:'Counting words',step:'learn',meta:'noun + number + ယောက်/ခု/ကောင်',vocab:[['ယောက်','yauq','counter for people'],['ခု','hku','counter for things'],['ကောင်','kaung','counter for animals'],['ကလေး','hkalei','child'],['ကလေးနှစ်ယောက်','hkalei hna yauq','two children'],['သုံးခု','thoun hku','three (things)']],ex:[
{t:'note',tag:'Zone 5',q:'The counting recipe',body:'<p>Burmese never says "two children". It says <b>child – two – person-counter</b>: <span class="deva">ကလေးနှစ်ယောက်</span>.</p><p>The recipe is always <b>noun + number + counter</b>. People take <span class="deva">ယောက်</span> <b>yauq</b>, things take <span class="deva">ခု</span> <b>hku</b>, animals take <span class="deva">ကောင်</span> <b>kaung</b>.</p>',eg:[['ယောက်','yauq','people'],['ခု','hku','things'],['ကောင်','kaung','animals']]},
{t:'mc',q:'Which counter is for people?',o:['ယောက်','ခု','ကောင်','ရာ'],a:0},
{t:'mc',q:'Which counter is for things?',o:['ခု','ယောက်','ကောင်','ဆယ်'],a:0},
{t:'note',tag:'Say it lighter',q:'တစ် → ta · နှစ် → hna',body:'<p>Before a counter, <span class="deva">တစ်</span> and <span class="deva">နှစ်</span> relax: <b>tiq → ta</b>, <b>hniq → hna</b>. So <span class="deva">ကလေးနှစ်ယောက်</span> is said <b>hkalei hna yauq</b>. You have already said it in <span class="deva">တစ်ဆိတ်လောက်</span> (ta hseiq lauk)!</p><p><span class="deva">ကလေး</span> <b>hkalei</b> = child.</p>',eg:[['ကလေးနှစ်ယောက်','hkalei hna yauq','two children'],['သုံးခု','thoun hku','three things']]},
{t:'mc',q:'What does this mean?',d:'ကလေးနှစ်ယောက်',o:['two children','two dogs','three children','two cups'],a:0},
{t:'mc',q:'Before a counter, နှစ် (two) is said…',o:['hna','hniq','hse','htaung'],a:0},
{t:'li',q:'Listen — which one?',say:'ကလေးနှစ်ယောက်',o:['ကလေးနှစ်ယောက်','ကလေး','သုံးခု','ယောက်'],a:0}]},
{id:'my_clf_2',title:'Hear the counters',step:'recognize',meta:'Spot ယောက် ခု ကောင်',vocab:[],ex:[
{t:'li',q:'Listen — which counter?',say:'ယောက်',o:['ယောက်','ခု','ကောင်','ကလေး'],a:0},
{t:'mc',q:'Which counter is for animals?',o:['ကောင်','ယောက်','ခု','ခွက်'],a:0},
{t:'li',q:'Listen — which word?',say:'ကလေး',o:['ကလေး','ကောင်','ယောက်','ခု'],a:0},
{t:'mc',q:'What does this mean?',d:'သုံးခု',o:['three (things)','three (people)','three (animals)','thirty'],a:0},
{t:'mc',q:'"Two people" is လူနှစ်ယောက် — the order is…',o:['noun + number + counter','counter + noun + number','number + noun + counter','any order'],a:0},
{t:'li',q:'Listen — which counter?',say:'ခု',o:['ခု','ကောင်','ယောက်','ဒါ'],a:0},
{t:'mc',q:'A dog would be counted with…',o:['ကောင်','ယောက်','ခု','ရာ'],a:0}]},
{id:'my_clf_3',title:'Put it together',step:'build',meta:'Count people & things',vocab:[],ex:[
{t:'match',q:'Match counter and use',pairs:[['ယောက်','people'],['ခု','things'],['ကောင်','animals'],['ကလေး','child']]},
{t:'wb',q:'Build: two children — child two counter',a:['ကလေး','နှစ်','ယောက်'],pool:['ကလေး','နှစ်','ယောက်','ခု']},
{t:'mc',q:'"Three things" is…',o:['သုံးခု','သုံးယောက်','သုံးကောင်','ခုသုံး'],a:0},
{t:'li',q:'Listen — which one?',say:'သုံးခု',o:['သုံးခု','သုံးဆယ်','ကလေးနှစ်ယောက်','ခု'],a:0},
{t:'wb',q:'Build: two people — person two counter',a:['လူ','နှစ်','ယောက်'],pool:['လူ','နှစ်','ယောက်','ကောင်']},
{t:'match',q:'Match phrase and meaning',pairs:[['ကလေးနှစ်ယောက်','two children'],['သုံးခု','three (things)'],['လူ','person'],['ကောင်','counter for animals']]}]},
{id:'my_clf_4',title:'Mix it',step:'mix',meta:'All three counters',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ယောက်',o:['counter for people','counter for things','counter for animals','child'],a:0},
{t:'li',q:'Listen — which word?',say:'ကောင်',o:['ကောင်','ကောင်း','ယောက်','ခု'],a:0},
{t:'mc',q:'ငါးနှစ်ကောင် means…',o:['two fish','two children','five fish','two people'],a:0},
{t:'wb',q:'Build: three children',a:['ကလေး','သုံး','ယောက်'],pool:['ကလေး','သုံး','ယောက်','ကောင်']},
{t:'li',q:'Listen — which one?',say:'ကလေး',o:['ကလေး','ကလေးနှစ်ယောက်','ခု','လူ'],a:0},
{t:'mc',q:'ကောင် (counter) and ကောင်း (good) differ by…',o:['tone — listen closely','nothing','the first letter','word order'],a:0}]},
{id:'my_clf_5',title:'Checkpoint',step:'checkpoint',meta:'Counters mastered?',vocab:[],ex:[
{t:'mc',q:'Which counter goes with people?',o:['ယောက်','ခု','ကောင်','နာရီ'],a:0},
{t:'li',q:'Listen — which one?',say:'ကလေးနှစ်ယောက်',o:['ကလေးနှစ်ယောက်','သုံးခု','ကလေး','လူနှစ်ယောက်'],a:0},
{t:'mc',q:'What does this mean?',d:'ကလေး',o:['child','animal','person','counter'],a:0},
{t:'wb',q:'Build: two children',a:['ကလေး','နှစ်','ယောက်'],pool:['ကလေး','နှစ်','ယောက်','ငါး']},
{t:'mc',q:'The Burmese counting recipe is…',o:['noun + number + counter','number + counter + noun','counter first','number last'],a:0},
{t:'match',q:'Match counter and use',pairs:[['ယောက်','people'],['ခု','things'],['ကောင်','animals'],['သုံးခု','three (things)']]}]},

/* --- Topic 2: cups & how many — ခွက် + ဘယ်နှ --- */
{id:'my_hownum',title:'How many?',step:'learn',meta:'ဘယ်နှ + counter · ခွက်',vocab:[['ဘယ်နှ','beh hna','how many'],['ဘယ်နှယောက်လဲ','beh hna yauq leh','how many people?'],['ခွက်','hkweq','cup / glass'],['လက်ဖက်ရည်နှစ်ခွက်','lahpeq yeh hna hkweq','two cups of tea'],['တစ်ခွက်ပေးပါ','ta hkweq pei ba','one cup, please']],ex:[
{t:'note',tag:'Ask how many',q:'ဘယ်နှ + counter + လဲ',body:'<p>You know the ဘ-family: ဘာ, ဘယ်မှာ, ဘယ်သူ. Add <span class="deva">ဘယ်နှ</span> <b>beh hna</b> = how many. It always brings the counter along: <span class="deva">ဘယ်နှယောက်လဲ</span> — how many <b>people</b>?</p>',eg:[['ဘယ်နှ','beh hna','how many'],['ဘယ်နှယောက်လဲ','beh hna yauq leh','how many people?']]},
{t:'mc',q:'Which means "how many"?',o:['ဘယ်နှ','ဘယ်မှာ','ဘယ်သူ','ဘယ်က'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်နှယောက်လဲ',o:['how many people?','how many things?','how much is it?','who is it?'],a:0},
{t:'note',tag:'Back to the teashop',q:'ခွက် — cups',body:'<p>Drinks get their own counter: <span class="deva">ခွက်</span> <b>hkweq</b> = cup. Now you can order properly: <span class="deva">လက်ဖက်ရည်နှစ်ခွက်</span> two teas · <span class="deva">တစ်ခွက်ပေးပါ</span> — one cup, please!</p>',eg:[['ခွက်','hkweq','cup'],['တစ်ခွက်ပေးပါ','ta hkweq pei ba','one cup, please']]},
{t:'mc',q:'What does this mean?',d:'လက်ဖက်ရည်နှစ်ခွက်',o:['two cups of tea','two teashops','one cup of tea','two cups of coffee'],a:0},
{t:'mc',q:'How do you ask for one cup?',o:['တစ်ခွက်ပေးပါ','နှစ်ခွက်','ဘယ်နှခွက်လဲ','ခွက်'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်ခွက်ပေးပါ',o:['တစ်ခွက်ပေးပါ','လက်ဖက်ရည်နှစ်ခွက်','ခွက်','ရေပေးပါ'],a:0}]},
{id:'my_hownum_2',title:'Hear it',step:'recognize',meta:'Spot ဘယ်နှ & ခွက်',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဘယ်နှ',o:['ဘယ်နှ','ဘယ်မှာ','ဘယ်သူ','ဘယ်က'],a:0},
{t:'mc',q:'Which means "cup"?',o:['ခွက်','ခု','ကောင်','ခွဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'လက်ဖက်ရည်နှစ်ခွက်',o:['လက်ဖက်ရည်နှစ်ခွက်','လက်ဖက်ရည်','တစ်ခွက်ပေးပါ','လက်ဖက်ရည်ဆိုင်'],a:0},
{t:'mc',q:'What does this mean?',d:'တစ်ခွက်ပေးပါ',o:['one cup, please','two cups, please','how many cups?','the cup is good'],a:0},
{t:'mc',q:'"How many children?" is…',o:['ကလေးဘယ်နှယောက်လဲ','ကလေးဘယ်မှာလဲ','ကလေးဘယ်သူလဲ','ကလေးလား'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်နှယောက်လဲ',o:['ဘယ်နှယောက်လဲ','ဘယ်နှ','ဘယ်သူလဲ','ဘယ်မှာလဲ'],a:0},
{t:'mc',q:'ဘယ်နှ always brings along…',o:['the right counter','a color','the verb first','nothing'],a:0}]},
{id:'my_hownum_3',title:'Put it together',step:'build',meta:'Order by the cup',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ဘယ်နှ','how many'],['ခွက်','cup'],['ဘယ်နှယောက်လဲ','how many people?'],['တစ်ခွက်ပေးပါ','one cup, please']]},
{t:'wb',q:'Build: Two cups of tea, please — tea two cup please-give',a:['လက်ဖက်ရည်','နှစ်','ခွက်','ပေးပါ'],pool:['လက်ဖက်ရည်','နှစ်','ခွက်','ပေးပါ','ယောက်']},
{t:'mc',q:'To ask "how many cups?", say…',o:['ဘယ်နှခွက်လဲ','ဘယ်နှယောက်လဲ','ဘယ်မှာလဲ','ခွက်လား'],a:0},
{t:'li',q:'Listen — which one?',say:'ခွက်',o:['ခွက်','ခု','ခွဲ','ကောင်'],a:0},
{t:'wb',q:'Build: One coffee, please — coffee one cup please-give',a:['ကော်ဖီ','တစ်','ခွက်','ပေးပါ'],pool:['ကော်ဖီ','တစ်','ခွက်','ပေးပါ','နှစ်']},
{t:'match',q:'Match line and meaning',pairs:[['လက်ဖက်ရည်နှစ်ခွက်','two cups of tea'],['ကလေးနှစ်ယောက်','two children'],['ဘယ်နှ','how many'],['ခွက်','cup']]}]},
{id:'my_hownum_4',title:'Mix it',step:'mix',meta:'Counting in real life',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဘယ်နှ',o:['how many','how much','where','who'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်နှယောက်လဲ',o:['ဘယ်နှယောက်လဲ','ဘယ်နှ','ဘယ်သူလဲ','တစ်ခွက်ပေးပါ'],a:0},
{t:'mc',q:'The waiter asks ဘယ်နှခွက်လဲ. You want two:',o:['နှစ်ခွက်','နှစ်ယောက်','နှစ်ခု','ဆယ်'],a:0},
{t:'wb',q:'Build: Water two cups, please',a:['ရေ','နှစ်','ခွက်','ပေးပါ'],pool:['ရေ','နှစ်','ခွက်','ပေးပါ','ခု']},
{t:'li',q:'Listen — which one?',say:'လက်ဖက်ရည်နှစ်ခွက်',o:['လက်ဖက်ရည်နှစ်ခွက်','တစ်ခွက်ပေးပါ','လက်ဖက်ရည်ပေးပါ','ခွက်'],a:0},
{t:'mc',q:'Counting people at your table uses…',o:['ယောက်','ခွက်','ကောင်','ခု'],a:0}]},
{id:'my_hownum_5',title:'Checkpoint',step:'checkpoint',meta:'How many mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "how many people?"',o:['ဘယ်နှယောက်လဲ','ဘယ်နှခွက်လဲ','ဘယ်သူလဲ','ဘယ်လောက်လဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်ခွက်ပေးပါ',o:['တစ်ခွက်ပေးပါ','နှစ်ခွက်','ရေပေးပါ','ခွက်'],a:0},
{t:'mc',q:'What does this mean?',d:'ခွက်',o:['cup / glass','plate','counter for people','half'],a:0},
{t:'wb',q:'Build: Two coffees, please',a:['ကော်ဖီ','နှစ်','ခွက်','ပေးပါ'],pool:['ကော်ဖီ','နှစ်','ခွက်','ပေးပါ','ယောက်']},
{t:'mc',q:'ဘယ်နှ means…',o:['how many','how much money','what time','which place'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ဘယ်နှယောက်လဲ','how many people?'],['တစ်ခွက်ပေးပါ','one cup, please'],['ခွက်','cup'],['ဘယ်နှ','how many']]}]},

/* --- Topic 3: money & prices --- */
{id:'my_money',title:'Money & prices',step:'learn',meta:'ကျပ် ပိုက်ဆံ ဘယ်လောက်လဲ',vocab:[['ပိုက်ဆံ','paiq hsan','money'],['ကျပ်','kyaq','kyat (Myanmar money)'],['ဘယ်လောက်လဲ','beh lauq leh','how much?'],['ဒါဘယ်လောက်လဲ','da beh lauq leh','how much is this?'],['ဈေးကြီးတယ်','zei kyi de','it is expensive'],['ဈေးပေါတယ်','zei paw de','it is cheap']],ex:[
{t:'note',tag:'Kyat',q:'ပိုက်ဆံ · ကျပ်',body:'<p><span class="deva">ပိုက်ဆံ</span> <b>paiq hsan</b> = money. Myanmar money is the <span class="deva">ကျပ်</span> <b>kyaq</b> — the kyat.</p><p>Point at anything and ask <span class="deva">ဒါဘယ်လောက်လဲ</span> <b>da beh lauq leh</b> — how much is this? (ဘယ်လောက် = how much, for amounts; ဘယ်နှ counts pieces.)</p>',eg:[['ကျပ်','kyaq','kyat'],['ဒါဘယ်လောက်လဲ','da beh lauq leh','how much is this?']]},
{t:'mc',q:'Which means "money"?',o:['ပိုက်ဆံ','ကျပ်','ဈေး','ခွက်'],a:0},
{t:'mc',q:'How do you ask "How much is this?"',o:['ဒါဘယ်လောက်လဲ','ဒါဘာလဲ','ဘယ်နှယောက်လဲ','ဒါဘယ်မှာလဲ'],a:0},
{t:'note',tag:'Dear or a deal',q:'ဈေးကြီး · ဈေးပေါ',body:'<p>Remember <span class="deva">ဈေး</span> (market)? It also means <b>price</b>. A price can be big — <span class="deva">ဈေးကြီးတယ်</span> expensive — or plentiful-cheap: <span class="deva">ဈေးပေါတယ်</span> cheap.</p>',eg:[['ဈေးကြီးတယ်','zei kyi de','expensive'],['ဈေးပေါတယ်','zei paw de','cheap']]},
{t:'mc',q:'What does this mean?',d:'ဈေးကြီးတယ်',o:['it is expensive','it is cheap','it is the market','it is money'],a:0},
{t:'mc',q:'Which means "it is cheap"?',o:['ဈေးပေါတယ်','ဈေးကြီးတယ်','ဈေးကိုသွားတယ်','ပိုက်ဆံ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဒါဘယ်လောက်လဲ',o:['ဒါဘယ်လောက်လဲ','ဒါဘာလဲ','ဈေးကြီးတယ်','ပိုက်ဆံ'],a:0}]},
{id:'my_money_2',title:'Hear the prices',step:'recognize',meta:'Spot the money words',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ပိုက်ဆံ',o:['ပိုက်ဆံ','ကျပ်','ဈေး','ခွက်'],a:0},
{t:'mc',q:'Myanmar money is the…',o:['ကျပ်','ပိုက်ဆံ','ဈေး','ရာ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဈေးပေါတယ်',o:['ဈေးပေါတယ်','ဈေးကြီးတယ်','ဈေးကိုသွားတယ်','ဒါဘယ်လောက်လဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်လောက်လဲ',o:['how much?','how many people?','where is it?','what is this?'],a:0},
{t:'mc',q:'ဘယ်လောက် vs ဘယ်နှ —',o:['amounts vs counted pieces','pieces vs amounts','both the same','places vs people'],a:0},
{t:'li',q:'Listen — which one?',say:'ဈေးကြီးတယ်',o:['ဈေးကြီးတယ်','ဈေးပေါတယ်','ကြီးတယ်','ဒါဘယ်လောက်လဲ'],a:0},
{t:'mc',q:'ဈေး means market AND…',o:['price','money','shop','cup'],a:0}]},
{id:'my_money_3',title:'Put it together',step:'build',meta:'Talk prices',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ပိုက်ဆံ','money'],['ကျပ်','kyat'],['ဒါဘယ်လောက်လဲ','how much is this?'],['ဈေးပေါတယ်','it is cheap']]},
{t:'wb',q:'Build: How much is this?',a:['ဒါ','ဘယ်လောက်','လဲ'],pool:['ဒါ','ဘယ်လောက်','လဲ','လား']},
{t:'mc',q:'The price is shockingly high. You mutter…',o:['ဈေးကြီးတယ်','ဈေးပေါတယ်','ကောင်းတယ်','ရတယ်'],a:0},
{t:'li',q:'Listen — which word?',say:'ကျပ်',o:['ကျပ်','ပိုက်ဆံ','ခွက်','ဈေး'],a:0},
{t:'wb',q:'Build: The fish is expensive — fish price-big',a:['ငါး','ဈေးကြီးတယ်'],pool:['ငါး','ဈေးကြီးတယ်','ဈေးပေါတယ်']},
{t:'match',q:'Match line and meaning',pairs:[['ဈေးကြီးတယ်','expensive'],['ဈေးပေါတယ်','cheap'],['ဘယ်လောက်လဲ','how much?'],['ပိုက်ဆံ','money']]}]},
{id:'my_money_4',title:'Mix it',step:'mix',meta:'Prices in the market',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဒါဘယ်လောက်လဲ',o:['how much is this?','what is this?','how many are these?','is this cheap?'],a:0},
{t:'li',q:'Listen — which one?',say:'ပိုက်ဆံ',o:['ပိုက်ဆံ','ကျပ်','ဈေးပေါတယ်','ဈေး'],a:0},
{t:'mc',q:'A good deal! You smile:',o:['ဈေးပေါတယ်','ဈေးကြီးတယ်','မကြိုက်ဘူး','ဘယ်နှယောက်လဲ'],a:0},
{t:'wb',q:'Build: How much is the fish?',a:['ငါး','ဘယ်လောက်','လဲ'],pool:['ငါး','ဘယ်လောက်','လဲ','ဘယ်နှ']},
{t:'li',q:'Listen — which one?',say:'ဈေးကြီးတယ်',o:['ဈေးကြီးတယ်','ဈေးပေါတယ်','ဒါဘယ်လောက်လဲ','ကျပ်'],a:0},
{t:'mc',q:'For "how much water" (an amount), use…',o:['ဘယ်လောက်','ဘယ်နှ','ဘယ်သူ','ဘယ်မှာ'],a:0}]},
{id:'my_money_5',title:'Checkpoint',step:'checkpoint',meta:'Money mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "kyat"?',o:['ကျပ်','ပိုက်ဆံ','ဈေး','ရာ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဒါဘယ်လောက်လဲ',o:['ဒါဘယ်လောက်လဲ','ဈေးပေါတယ်','ဒါဘာလဲ','ဘယ်နှယောက်လဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဈေးပေါတယ်',o:['it is cheap','it is expensive','it is the market','it is far'],a:0},
{t:'wb',q:'Build: How much is this?',a:['ဒါ','ဘယ်လောက်','လဲ'],pool:['ဒါ','ဘယ်လောက်','လဲ','ပေးပါ']},
{t:'mc',q:'Amounts (money, water) ask with…',o:['ဘယ်လောက်','ဘယ်နှ','ဘာ','ဘယ်သူ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ကျပ်','kyat'],['ပိုက်ဆံ','money'],['ဈေးကြီးတယ်','expensive'],['ဒါဘယ်လောက်လဲ','how much is this?']]}]},

/* --- Topic 4: hundreds & thousands --- */
{id:'my_bignum',title:'Big numbers',step:'learn',meta:'ရာ ထောင် သောင်း — kyat prices',vocab:[['ရာ','ya','hundred'],['ထောင်','htaung','thousand'],['သောင်း','thaung','ten thousand'],['ငါးရာ','nga ya','five hundred (၅၀၀)'],['တစ်ထောင်','ta htaung','one thousand (၁၀၀၀)'],['ငါးထောင်ကျပ်','nga htaung kyaq','five thousand kyat']],ex:[
{t:'note',tag:'Real prices',q:'ရာ · ထောင် · သောင်း',body:'<p>Kyat prices live in the hundreds and thousands. You know <span class="deva">ရာ</span> <b>ya</b> = hundred. Now: <span class="deva">ထောင်</span> <b>htaung</b> = thousand · <span class="deva">သောင်း</span> <b>thaung</b> = ten thousand.</p><p>Stack them just like ဆယ်: <span class="deva">ငါးရာ</span> 500 · <span class="deva">တစ်ထောင်</span> 1000 · <span class="deva">ငါးထောင်</span> 5000.</p>',eg:[['ငါးရာ','nga ya','500'],['တစ်ထောင်','ta htaung','1000'],['သောင်း','thaung','10,000']]},
{t:'mc',q:'Which means "thousand"?',o:['ထောင်','ရာ','သောင်း','ဆယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ငါးရာ',o:['five hundred','five thousand','fifty','five hundred thousand'],a:0},
{t:'note',tag:'Listen for the h',q:'ထောင် vs သောင်း',body:'<p>Careful ears: <span class="deva">ထောင်</span> <b>htaung</b> (1000) starts with the puffed t; <span class="deva">သောင်း</span> <b>thaung</b> (10,000) starts with the soft th of "thin". A 9000-kyat difference!</p><p><span class="deva">ငါးထောင်ကျပ်</span> — five thousand kyat, a typical taxi ride across town.</p>',eg:[['ငါးထောင်ကျပ်','nga htaung kyaq','5000 kyat']]},
{t:'mc',q:'What does this mean?',d:'တစ်ထောင်',o:['one thousand','one hundred','ten thousand','ten'],a:0},
{t:'mc',q:'သောင်း is…',o:['ten thousand','one thousand','one hundred','one million'],a:0},
{t:'li',q:'Listen — which one?',say:'ငါးထောင်ကျပ်',o:['ငါးထောင်ကျပ်','ငါးရာ','တစ်ထောင်','သောင်း'],a:0}]},
{id:'my_bignum_2',title:'Hear the amounts',step:'recognize',meta:'ရာ ထောင် သောင်း by ear',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ရာ',o:['ရာ','ထောင်','သောင်း','ဆယ်'],a:0},
{t:'mc',q:'Which is 500?',o:['ငါးရာ','ငါးထောင်','ငါးဆယ်','ငါး'],a:0},
{t:'li',q:'Listen — which one?',say:'ထောင်',o:['ထောင်','သောင်း','ရာ','ကျပ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ငါးထောင်ကျပ်',o:['5000 kyat','500 kyat','50,000 kyat','5 kyat'],a:0},
{t:'mc',q:'ထောင် vs သောင်း — the difference you hear is…',o:['ht (puff) vs th (soft)','nothing','the vowel','the tone only'],a:0},
{t:'li',q:'Listen — which one?',say:'သောင်း',o:['သောင်း','ထောင်','ရာ','သုံး'],a:0},
{t:'mc',q:'တစ်ထောင် is said…',o:['ta htaung','tiq htaung','ta thaung','hna htaung'],a:0}]},
{id:'my_bignum_3',title:'Put it together',step:'build',meta:'Build kyat prices',vocab:[],ex:[
{t:'match',q:'Match amount and meaning',pairs:[['ရာ','hundred'],['ထောင်','thousand'],['သောင်း','ten thousand'],['ငါးရာ','five hundred']]},
{t:'wb',q:'Build: five thousand kyat',a:['ငါး','ထောင်','ကျပ်'],pool:['ငါး','ထောင်','ကျပ်','ရာ']},
{t:'mc',q:'"Three hundred" is…',o:['သုံးရာ','သုံးထောင်','သုံးဆယ်','သုံးသောင်း'],a:0},
{t:'li',q:'Listen — which one?',say:'ငါးရာ',o:['ငါးရာ','ငါးထောင်','ငါးဆယ်','ငါး'],a:0},
{t:'wb',q:'Build: two thousand kyat',a:['နှစ်','ထောင်','ကျပ်'],pool:['နှစ်','ထောင်','ကျပ်','သောင်း']},
{t:'match',q:'Match amount and figure',pairs:[['ငါးရာ','500'],['တစ်ထောင်','1000'],['ငါးထောင်ကျပ်','5000 kyat'],['သောင်း','10,000']]}]},
{id:'my_bignum_4',title:'Mix it',step:'mix',meta:'Prices big & small',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ထောင်',o:['thousand','hundred','ten thousand','ten'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်ထောင်',o:['တစ်ထောင်','ငါးထောင်ကျပ်','ငါးရာ','သောင်း'],a:0},
{t:'mc',q:'The taxi driver says ငါးထောင်. That is…',o:['5000 kyat','500 kyat','50 kyat','5 kyat'],a:0},
{t:'wb',q:'Build: How much? Five hundred kyat. — 500 kyat',a:['ငါး','ရာ','ကျပ်'],pool:['ငါး','ရာ','ကျပ်','ထောင်']},
{t:'li',q:'Listen — which one?',say:'ကျပ်',o:['ကျပ်','ရာ','ထောင်','ပိုက်ဆံ'],a:0},
{t:'mc',q:'From small to large:',o:['ဆယ် · ရာ · ထောင် · သောင်း','ရာ · ဆယ် · သောင်း · ထောင်','ထောင် · ရာ · ဆယ် · သောင်း','သောင်း · ထောင် · ရာ · ဆယ်'],a:0}]},
{id:'my_bignum_5',title:'Checkpoint',step:'checkpoint',meta:'Big numbers mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "ten thousand"?',o:['သောင်း','ထောင်','ရာ','ဆယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ငါးထောင်ကျပ်',o:['ငါးထောင်ကျပ်','ငါးရာ','တစ်ထောင်','ကျပ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ငါးရာ',o:['500','5000','50','50,000'],a:0},
{t:'wb',q:'Build: one thousand kyat',a:['တစ်','ထောင်','ကျပ်'],pool:['တစ်','ထောင်','ကျပ်','ရာ']},
{t:'mc',q:'1000 is said…',o:['ta htaung','ta thaung','tiq ya','ta hkweq'],a:0},
{t:'match',q:'Match amount and figure',pairs:[['ရာ','100'],['ထောင်','1000'],['သောင်း','10,000'],['ငါးရာ','500']]}]},

/* --- Topic 5: buying, selling & bargaining --- */
{id:'my_buy',title:'Buy & bargain',step:'learn',meta:'ဝယ်တယ် ရောင်းတယ် လျှော့ပေးပါ',vocab:[['ဝယ်တယ်','weh de','buy'],['ရောင်းတယ်','yaung de','sell'],['ဝယ်ချင်တယ်','weh chin de','want to buy'],['လျှော့ပေးပါ','shaw pei ba','please lower the price'],['ယူမယ်','yu meh','(I) will take it']],ex:[
{t:'note',tag:'At the stall',q:'ဝယ် · ရောင်း',body:'<p><span class="deva">ဝယ်တယ်</span> <b>weh de</b> = buy · <span class="deva">ရောင်းတယ်</span> <b>yaung de</b> = sell. All your engine parts fit: <span class="deva">ဝယ်ချင်တယ်</span> want to buy · <span class="deva">ဝယ်မလား</span> will you buy?</p>',eg:[['ဝယ်တယ်','weh de','buy'],['ရောင်းတယ်','yaung de','sell']]},
{t:'mc',q:'Which means "buy"?',o:['ဝယ်တယ်','ရောင်းတယ်','ယူမယ်','ပေးပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဝယ်ချင်တယ်',o:['want to buy','want to sell','will take it','bought it'],a:0},
{t:'note',tag:'The magic words',q:'လျှော့ပေးပါ · ယူမယ်',body:'<p>Market bargaining is friendly sport. Smile and ask <span class="deva">လျှော့ပေးပါ</span> <b>shaw pei ba</b> — "please lower it" (လျှော့ reduce + our ပေးပါ).</p><p>Deal struck? <span class="deva">ယူမယ်</span> <b>yu meh</b> — "I will take it!" (ယူ = take.)</p>',eg:[['လျှော့ပေးပါ','shaw pei ba','please lower the price'],['ယူမယ်','yu meh','(I) will take it']]},
{t:'mc',q:'How do you ask for a better price?',o:['လျှော့ပေးပါ','ယူမယ်','ဝယ်တယ်','ဒါပဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ယူမယ်',o:['(I) will take it','(I) will sell it','lower the price','it is cheap'],a:0},
{t:'li',q:'Listen — which one?',say:'လျှော့ပေးပါ',o:['လျှော့ပေးပါ','ယူမယ်','ဝယ်ချင်တယ်','ရောင်းတယ်'],a:0}]},
{id:'my_buy_2',title:'Hear the deal',step:'recognize',meta:'Spot the market lines',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဝယ်တယ်',o:['ဝယ်တယ်','ရောင်းတယ်','ယူမယ်','ဝယ်ချင်တယ်'],a:0},
{t:'mc',q:'Which means "sell"?',o:['ရောင်းတယ်','ဝယ်တယ်','ယူမယ်','လျှော့ပေးပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ယူမယ်',o:['ယူမယ်','ဝယ်မယ်','လျှော့ပေးပါ','ရောင်းတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လျှော့ပေးပါ',o:['please lower the price','please give a cup','I will take it','it is expensive'],a:0},
{t:'mc',q:'The seller at the stall does what?',o:['ရောင်းတယ်','ဝယ်တယ်','ကလေး','နေတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဝယ်ချင်တယ်',o:['ဝယ်ချင်တယ်','ဝယ်တယ်','စားချင်တယ်','ယူမယ်'],a:0},
{t:'mc',q:'လျှော့ပေးပါ ends in the polite…',o:['ပါ','တယ်','လား','ဘူး'],a:0}]},
{id:'my_buy_3',title:'Put it together',step:'build',meta:'Strike a deal',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ဝယ်တယ်','buy'],['ရောင်းတယ်','sell'],['လျှော့ပေးပါ','please lower the price'],['ယူမယ်','(I) will take it']]},
{t:'wb',q:'Build: I want to buy fruit (woman speaking)',a:['ကျွန်မ','သစ်သီး','ဝယ်ချင်တယ်'],pool:['ကျွန်မ','သစ်သီး','ဝယ်ချင်တယ်','ရောင်းတယ်']},
{t:'mc',q:'ဈေးကြီးတယ်… then you say…',o:['လျှော့ပေးပါ','ယူမယ်','ကောင်းတယ်','ရတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ရောင်းတယ်',o:['ရောင်းတယ်','ဝယ်တယ်','ယူမယ်','လာတယ်'],a:0},
{t:'wb',q:'Build: Will you buy fish?',a:['ငါး','ဝယ်မလား'],pool:['ငါး','ဝယ်မလား','ဝယ်တယ်']},
{t:'match',q:'Match line and meaning',pairs:[['ဝယ်ချင်တယ်','want to buy'],['ယူမယ်','(I) will take it'],['ဈေးပေါတယ်','it is cheap'],['လျှော့ပေးပါ','please lower the price']]}]},
{id:'my_buy_4',title:'Mix it',step:'mix',meta:'A whole market visit',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဝယ်တယ်',o:['buy','sell','take','give'],a:0},
{t:'li',q:'Listen — which one?',say:'ယူမယ်',o:['ယူမယ်','ဝယ်တယ်','လာမယ်','စားမယ်'],a:0},
{t:'mc',q:'Bargaining went well — 500 off. You close with…',o:['ယူမယ်','လျှော့ပေးပါ','မဝယ်ဘူး','ဘယ်လောက်လဲ'],a:0},
{t:'wb',q:'Build: I will not buy (it) — not-buy',a:['မဝယ်ဘူး'],pool:['မဝယ်ဘူး','ဝယ်မယ်']},
{t:'li',q:'Listen — which one?',say:'ဝယ်တယ်',o:['ဝယ်တယ်','ရောင်းတယ်','ဝယ်ချင်တယ်','ယူမယ်'],a:0},
{t:'match',q:'Match the market flow',pairs:[['ဒါဘယ်လောက်လဲ','how much is this?'],['ဈေးကြီးတယ်','it is expensive'],['လျှော့ပေးပါ','please lower the price'],['ယူမယ်','(I) will take it']]}]},
{id:'my_buy_5',title:'Checkpoint',step:'checkpoint',meta:'Bargaining mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "want to buy"?',o:['ဝယ်ချင်တယ်','ရောင်းတယ်','ယူမယ်','ဝယ်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'လျှော့ပေးပါ',o:['လျှော့ပေးပါ','ပေးပါ','ယူမယ်','ဝယ်ချင်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရောင်းတယ်',o:['sell','buy','take','reduce'],a:0},
{t:'wb',q:'Build: I will take it — take + future',a:['ယူ','မယ်'],pool:['ယူ','မယ်','တယ်']},
{t:'mc',q:'The friendly bargaining opener is…',o:['လျှော့ပေးပါ','မဝယ်ဘူး','ရောင်းတယ်','ဒါပဲ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ဝယ်တယ်','buy'],['ရောင်းတယ်','sell'],['ယူမယ်','(I) will take it'],['ဝယ်ချင်တယ်','want to buy']]}]},

/* --- Topic 6: clock time --- */
{id:'my_time',title:'What time is it?',step:'learn',meta:'နာရီ မိနစ် ခွဲ',vocab:[['နာရီ','nayi','hour / o’clock / clock'],['မိနစ်','miniq','minute'],['ခွဲ','hkweh','half past'],['ဘယ်နှနာရီလဲ','beh hna nayi leh','what time is it?'],['သုံးနာရီ','thoun nayi','three o’clock'],['သုံးနာရီခွဲ','thoun nayi hkweh','half past three']],ex:[
{t:'note',tag:'Clock words',q:'နာရီ · မိနစ်',body:'<p><span class="deva">နာရီ</span> <b>nayi</b> is the hour, the o’clock and the clock itself. <span class="deva">မိနစ်</span> <b>miniq</b> = minute.</p><p>Ask the time with your how-many word: <span class="deva">ဘယ်နှနာရီလဲ</span> <b>beh hna nayi leh</b> — literally "how many hours?"</p>',eg:[['နာရီ','nayi','hour / clock'],['ဘယ်နှနာရီလဲ','beh hna nayi leh','what time is it?']]},
{t:'mc',q:'Which means "hour / o’clock"?',o:['နာရီ','မိနစ်','ခွဲ','ရာ'],a:0},
{t:'mc',q:'How do you ask the time?',o:['ဘယ်နှနာရီလဲ','ဘယ်လောက်လဲ','ဘယ်နှယောက်လဲ','ဘယ်မှာလဲ'],a:0},
{t:'note',tag:'On the half',q:'number + နာရီ (+ ခွဲ)',body:'<p>Saying the time is pure recipe: number + <span class="deva">နာရီ</span>. <span class="deva">သုံးနာရီ</span> = three o’clock.</p><p>Add <span class="deva">ခွဲ</span> <b>hkweh</b> (split-in-half) for half past: <span class="deva">သုံးနာရီခွဲ</span> = 3:30.</p>',eg:[['သုံးနာရီ','thoun nayi','3:00'],['သုံးနာရီခွဲ','thoun nayi hkweh','3:30']]},
{t:'mc',q:'What does this mean?',d:'သုံးနာရီ',o:['three o’clock','three minutes','half past three','three hundred'],a:0},
{t:'mc',q:'What does this mean?',d:'သုံးနာရီခွဲ',o:['half past three','three o’clock','a third','three thirty-three'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်နှနာရီလဲ',o:['ဘယ်နှနာရီလဲ','သုံးနာရီ','နာရီ','မိနစ်'],a:0}]},
{id:'my_time_2',title:'Hear the time',step:'recognize',meta:'Spot hours & halves',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'နာရီ',o:['နာရီ','မိနစ်','ခွဲ','ရာ'],a:0},
{t:'mc',q:'Which means "minute"?',o:['မိနစ်','နာရီ','ခွဲ','မနက်'],a:0},
{t:'li',q:'Listen — which one?',say:'သုံးနာရီခွဲ',o:['သုံးနာရီခွဲ','သုံးနာရီ','ဘယ်နှနာရီလဲ','သုံးမိနစ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ခွဲ',o:['half past','quarter past','minute','hour'],a:0},
{t:'mc',q:'"Five o’clock" is…',o:['ငါးနာရီ','ငါးမိနစ်','ငါးရာ','ငါးခွဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'မိနစ်',o:['မိနစ်','နာရီ','မနက်','ခွဲ'],a:0},
{t:'mc',q:'ဘယ်နှနာရီလဲ literally asks…',o:['how many hours?','how much time costs?','which clock?','when tomorrow?'],a:0}]},
{id:'my_time_3',title:'Put it together',step:'build',meta:'Tell the time',vocab:[],ex:[
{t:'match',q:'Match time and meaning',pairs:[['နာရီ','hour / clock'],['မိနစ်','minute'],['ခွဲ','half past'],['ဘယ်နှနာရီလဲ','what time is it?']]},
{t:'wb',q:'Build: half past three',a:['သုံး','နာရီ','ခွဲ'],pool:['သုံး','နာရီ','ခွဲ','မိနစ်']},
{t:'mc',q:'"Ten o’clock" is…',o:['ဆယ်နာရီ','ဆယ်မိနစ်','နာရီဆယ်','ဆယ်ခွဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'သုံးနာရီ',o:['သုံးနာရီ','သုံးနာရီခွဲ','သုံးမိနစ်','သုံးခု'],a:0},
{t:'wb',q:'Build: What time is it?',a:['ဘယ်နှ','နာရီ','လဲ'],pool:['ဘယ်နှ','နာရီ','လဲ','လား']},
{t:'match',q:'Match time and clock',pairs:[['သုံးနာရီ','3:00'],['သုံးနာရီခွဲ','3:30'],['ငါးနာရီ','5:00'],['ဆယ်နာရီ','10:00']]}]},
{id:'my_time_4',title:'Mix it',step:'mix',meta:'Times through the day',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဘယ်နှနာရီလဲ',o:['what time is it?','how many minutes?','which clock is it?','how long?'],a:0},
{t:'li',q:'Listen — which one?',say:'ခွဲ',o:['ခွဲ','ခွက်','ခု','နာရီ'],a:0},
{t:'mc',q:'Your friend says မနက် ဆယ်နာရီ — meet at…',o:['10 in the morning','10 at night','half past ten','10 minutes'],a:0},
{t:'wb',q:'Build: five o’clock in the evening — evening five hour',a:['ညနေ','ငါး','နာရီ'],pool:['ညနေ','ငါး','နာရီ','မနက်']},
{t:'li',q:'Listen — which one?',say:'သုံးနာရီခွဲ',o:['သုံးနာရီခွဲ','သုံးနာရီ','ငါးနာရီ','မိနစ်'],a:0},
{t:'match',q:'Match time and meaning',pairs:[['မနက်','morning'],['ညနေ','evening'],['နာရီ','hour / clock'],['ခွဲ','half past']]}]},
{id:'my_time_5',title:'Checkpoint',step:'checkpoint',meta:'Time mastered?',vocab:[],ex:[
{t:'mc',q:'How do you ask "What time is it?"',o:['ဘယ်နှနာရီလဲ','ဘယ်လောက်လဲ','ဘယ်သူလဲ','ဘယ်နှယောက်လဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'သုံးနာရီ',o:['သုံးနာရီ','သုံးနာရီခွဲ','သုံးမိနစ်','ဆယ်နာရီ'],a:0},
{t:'mc',q:'What does this mean?',d:'မိနစ်',o:['minute','hour','half','morning'],a:0},
{t:'wb',q:'Build: half past five',a:['ငါး','နာရီ','ခွဲ'],pool:['ငါး','နာရီ','ခွဲ','မိနစ်']},
{t:'mc',q:'Half past = number + နာရီ +…',o:['ခွဲ','မိနစ်','ခု','ရာ'],a:0},
{t:'match',q:'Match time and clock',pairs:[['ငါးနာရီ','5:00'],['ငါးနာရီခွဲ','5:30'],['သုံးနာရီ','3:00'],['ဆယ်နာရီ','10:00']]}]},

/* --- Topic 7: days of the week --- */
{id:'my_days',title:'Days of the week',step:'learn',meta:'တနင်္လာ … တနင်္ဂနွေ',vocab:[['တနင်္လာ','ta nin la','Monday'],['အင်္ဂါ','in ga','Tuesday'],['ဗုဒ္ဓဟူး','bouq da hu','Wednesday'],['ကြာသပတေး','kya tha ba dei','Thursday'],['သောကြာ','thauq kya','Friday'],['စနေ','sa nei','Saturday'],['တနင်္ဂနွေ','ta nin ga nwei','Sunday']],ex:[
{t:'note',tag:'The week',q:'Monday to Wednesday',body:'<p>Burmese days are named after the planets, like ours. Add <span class="deva">နေ့</span> (day) when you speak: <span class="deva">တနင်္လာနေ့</span> "on Monday".</p><p><span class="deva">တနင်္လာ</span> <b>ta nin la</b> Monday · <span class="deva">အင်္ဂါ</span> <b>in ga</b> Tuesday · <span class="deva">ဗုဒ္ဓဟူး</span> <b>bouq da hu</b> Wednesday.</p>',eg:[['တနင်္လာ','ta nin la','Monday'],['အင်္ဂါ','in ga','Tuesday'],['ဗုဒ္ဓဟူး','bouq da hu','Wednesday']]},
{t:'mc',q:'Which is Monday?',o:['တနင်္လာ','အင်္ဂါ','စနေ','သောကြာ'],a:0},
{t:'mc',q:'What day is အင်္ဂါ?',d:'အင်္ဂါ',o:['Tuesday','Monday','Wednesday','Friday'],a:0},
{t:'note',tag:'To the weekend',q:'Thursday to Sunday',body:'<p><span class="deva">ကြာသပတေး</span> <b>kya tha ba dei</b> Thursday · <span class="deva">သောကြာ</span> <b>thauq kya</b> Friday · <span class="deva">စနေ</span> <b>sa nei</b> Saturday · <span class="deva">တနင်္ဂနွေ</span> <b>ta nin ga nwei</b> Sunday.</p><p>Spot the twins: Monday တနင်္<b>လာ</b>, Sunday တနင်္ဂ<b>နွေ</b>.</p>',eg:[['သောကြာ','thauq kya','Friday'],['စနေ','sa nei','Saturday'],['တနင်္ဂနွေ','ta nin ga nwei','Sunday']]},
{t:'mc',q:'Which is Friday?',o:['သောကြာ','ကြာသပတေး','စနေ','တနင်္ဂနွေ'],a:0},
{t:'mc',q:'What day is စနေ?',d:'စနေ',o:['Saturday','Sunday','Friday','Monday'],a:0},
{t:'li',q:'Listen — which day?',say:'တနင်္ဂနွေ',o:['တနင်္ဂနွေ','တနင်္လာ','စနေ','သောကြာ'],a:0}]},
{id:'my_days_2',title:'Hear the days',step:'recognize',meta:'Spot each day',vocab:[],ex:[
{t:'li',q:'Listen — which day?',say:'တနင်္လာ',o:['တနင်္လာ','တနင်္ဂနွေ','အင်္ဂါ','စနေ'],a:0},
{t:'mc',q:'Which is Wednesday?',o:['ဗုဒ္ဓဟူး','ကြာသပတေး','အင်္ဂါ','သောကြာ'],a:0},
{t:'li',q:'Listen — which day?',say:'သောကြာ',o:['သောကြာ','ကြာသပတေး','စနေ','တနင်္လာ'],a:0},
{t:'mc',q:'What day is ကြာသပတေး?',d:'ကြာသပတေး',o:['Thursday','Tuesday','Friday','Wednesday'],a:0},
{t:'mc',q:'"On Monday" adds which word?',o:['နေ့ — တနင်္လာနေ့','မှာ only','လဲ','ခွဲ'],a:0},
{t:'li',q:'Listen — which day?',say:'အင်္ဂါ',o:['အင်္ဂါ','တနင်္လာ','ဗုဒ္ဓဟူး','စနေ'],a:0},
{t:'mc',q:'The weekend pair is…',o:['စနေ + တနင်္ဂနွေ','တနင်္လာ + အင်္ဂါ','သောကြာ + ဗုဒ္ဓဟူး','ကြာသပတေး + သောကြာ'],a:0}]},
{id:'my_days_3',title:'Put it together',step:'build',meta:'Plan your week',vocab:[],ex:[
{t:'match',q:'Match day and meaning',pairs:[['တနင်္လာ','Monday'],['အင်္ဂါ','Tuesday'],['ဗုဒ္ဓဟူး','Wednesday'],['ကြာသပတေး','Thursday']]},
{t:'mc',q:'Which day comes after သောကြာ (Friday)?',o:['စနေ','တနင်္ဂနွေ','တနင်္လာ','ဗုဒ္ဓဟူး'],a:0},
{t:'li',q:'Listen — which day?',say:'စနေ',o:['စနေ','သောကြာ','တနင်္ဂနွေ','ညနေ'],a:0},
{t:'wb',q:'Build: (I) will go on Saturday — Saturday-day go-will',a:['စနေနေ့','သွားမယ်'],pool:['စနေနေ့','သွားမယ်','သွားတယ်']},
{t:'match',q:'Match day and meaning',pairs:[['သောကြာ','Friday'],['စနေ','Saturday'],['တနင်္ဂနွေ','Sunday'],['တနင်္လာ','Monday']]},
{t:'mc',q:'Which day is the twin of Monday တနင်္လာ?',o:['တနင်္ဂနွေ','အင်္ဂါ','စနေ','သောကြာ'],a:0}]},
{id:'my_days_4',title:'Mix it',step:'mix',meta:'All seven days',vocab:[],ex:[
{t:'mc',q:'What day is ဗုဒ္ဓဟူး?',d:'ဗုဒ္ဓဟူး',o:['Wednesday','Thursday','Tuesday','Sunday'],a:0},
{t:'li',q:'Listen — which day?',say:'ကြာသပတေး',o:['ကြာသပတေး','သောကြာ','တနင်္လာ','အင်္ဂါ'],a:0},
{t:'mc',q:'Your friend says စနေနေ့ တွေ့မယ် — see you on…',o:['Saturday','Sunday','Friday','Monday'],a:0},
{t:'wb',q:'Build: (I) will come on Friday — Friday-day come-will',a:['သောကြာနေ့','လာမယ်'],pool:['သောကြာနေ့','လာမယ်','လာတယ်']},
{t:'li',q:'Listen — which day?',say:'တနင်္လာ',o:['တနင်္လာ','တနင်္ဂနွေ','စနေ','ဗုဒ္ဓဟူး'],a:0},
{t:'match',q:'Match day and meaning',pairs:[['အင်္ဂါ','Tuesday'],['ဗုဒ္ဓဟူး','Wednesday'],['သောကြာ','Friday'],['တနင်္ဂနွေ','Sunday']]}]},
{id:'my_days_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 5 complete!',vocab:[],ex:[
{t:'mc',q:'Which is Sunday?',o:['တနင်္ဂနွေ','တနင်္လာ','စနေ','သောကြာ'],a:0},
{t:'li',q:'Listen — which day?',say:'ဗုဒ္ဓဟူး',o:['ဗုဒ္ဓဟူး','ကြာသပတေး','အင်္ဂါ','တနင်္လာ'],a:0},
{t:'mc',q:'What day is သောကြာ?',d:'သောကြာ',o:['Friday','Thursday','Saturday','Tuesday'],a:0},
{t:'mc',q:'Monday · Tuesday · Wednesday =',o:['တနင်္လာ · အင်္ဂါ · ဗုဒ္ဓဟူး','အင်္ဂါ · တနင်္လာ · ဗုဒ္ဓဟူး','စနေ · သောကြာ · အင်္ဂါ','တနင်္ဂနွေ · စနေ · သောကြာ'],a:0},
{t:'li',q:'Listen — which day?',say:'စနေ',o:['စနေ','ညနေ','တနင်္ဂနွေ','သောကြာ'],a:0},
{t:'match',q:'Match day and meaning',pairs:[['တနင်္လာ','Monday'],['ကြာသပတေး','Thursday'],['စနေ','Saturday'],['တနင်္ဂနွေ','Sunday']]}]},

/* ===================== ZONE 6 · DESCRIBE IT =====================
   Adjectives ARE verbs in Burmese (stative verbs): ကြီးတယ် "bigs".
   Tastes, colors, comparisons ပို/ထက်/အ…ဆုံး, feelings, the three
   seasons, body & health. Per Mesher L8/L10 & Okell topical units. */
/* --- Topic 1: adjectives are verbs --- */
{id:'my_adj',title:'Describing words',step:'learn',meta:'ကြီးတယ် သေးတယ် — adjectives are verbs',vocab:[['ကြီးတယ်','kyi de','is big'],['သေးတယ်','thei de','is small'],['ဆိုးတယ်','hso de','is bad'],['အသစ်','a thiq','new'],['အဟောင်း','a haung','old (things)'],['မကောင်းဘူး','ma kaung bu','is not good']],ex:[
{t:'note',tag:'Zone 6',q:'Adjectives ARE verbs',body:'<p>Here is a Burmese secret: there is no separate word for "is big". <span class="deva">ကြီး</span> works exactly like a verb — <span class="deva">ကြီးတယ်</span> "it bigs" = it is big.</p><p>That means everything you know works: <span class="deva">မကြီးဘူး</span> not big · <span class="deva">ကြီးလား</span> is it big? You have been doing this since <span class="deva">ကောင်းတယ်</span>!</p>',eg:[['ကြီးတယ်','kyi de','is big'],['သေးတယ်','thei de','is small']]},
{t:'mc',q:'Which means "is big"?',o:['ကြီးတယ်','သေးတယ်','ဆိုးတယ်','ကောင်းတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'သေးတယ်',o:['is small','is big','is bad','is new'],a:0},
{t:'note',tag:'Good, bad, new, old',q:'ဆိုး · အသစ် · အဟောင်း',body:'<p><span class="deva">ဆိုးတယ်</span> <b>hso de</b> = is bad. And the flip of good you already own: <span class="deva">မကောင်းဘူး</span> — not good.</p><p>Things are <span class="deva">အသစ်</span> <b>a thiq</b> (new) or <span class="deva">အဟောင်း</span> <b>a haung</b> (old): ဖုန်းအသစ် a new phone.</p>',eg:[['ဆိုးတယ်','hso de','is bad'],['အသစ်','a thiq','new'],['အဟောင်း','a haung','old (things)']]},
{t:'mc',q:'Which means "new"?',o:['အသစ်','အဟောင်း','ဆိုးတယ်','သေးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မကောင်းဘူး',o:['is not good','is good','is not big','is not new'],a:0},
{t:'li',q:'Listen — which one?',say:'ကြီးတယ်',o:['ကြီးတယ်','သေးတယ်','ဆိုးတယ်','ကောင်းတယ်'],a:0}]},
{id:'my_adj_2',title:'Hear the qualities',step:'recognize',meta:'Spot each describing word',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'သေးတယ်',o:['သေးတယ်','ကြီးတယ်','ဆိုးတယ်','သိတယ်'],a:0},
{t:'mc',q:'Which means "is bad"?',o:['ဆိုးတယ်','ကောင်းတယ်','ကြီးတယ်','မကောင်းဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆိုးတယ်',o:['ဆိုးတယ်','သေးတယ်','ဆိုတယ်','ကြီးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'အဟောင်း',o:['old (things)','new','big','small'],a:0},
{t:'mc',q:'"Is it big?" is simply…',o:['ကြီးလား','ကြီးတယ်','မကြီးဘူး','အကြီး'],a:0},
{t:'li',q:'Listen — which one?',say:'အသစ်',o:['အသစ်','အဟောင်း','သစ်သီး','သေးတယ်'],a:0},
{t:'mc',q:'Burmese adjectives behave like…',o:['verbs','nouns','particles','numbers'],a:0}]},
{id:'my_adj_3',title:'Put it together',step:'build',meta:'Describe things',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ကြီးတယ်','is big'],['သေးတယ်','is small'],['ဆိုးတယ်','is bad'],['အသစ်','new']]},
{t:'wb',q:'Build: The house is big — house bigs',a:['အိမ်','ကြီးတယ်'],pool:['အိမ်','ကြီးတယ်','သေးတယ်']},
{t:'mc',q:'"Not small" is…',o:['မသေးဘူး','သေးတယ်','မကြီးဘူး','သေးလား'],a:0},
{t:'li',q:'Listen — which one?',say:'အဟောင်း',o:['အဟောင်း','အသစ်','ဟင်း','ဆိုးတယ်'],a:0},
{t:'wb',q:'Build: Is the shop big? — shop bigs-question',a:['ဆိုင်','ကြီးလား'],pool:['ဆိုင်','ကြီးလား','ကြီးတယ်']},
{t:'match',q:'Match word and meaning',pairs:[['အဟောင်း','old (things)'],['မကောင်းဘူး','is not good'],['ကောင်းတယ်','is good'],['သေးတယ်','is small']]}]},
{id:'my_adj_4',title:'Mix it',step:'mix',meta:'Qualities everywhere',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဆိုးတယ်',o:['is bad','is small','is old','is not good'],a:0},
{t:'li',q:'Listen — which one?',say:'မကောင်းဘူး',o:['မကောင်းဘူး','ကောင်းတယ်','မကြီးဘူး','ဆိုးတယ်'],a:0},
{t:'mc',q:'ကလေးက သေးတယ် means…',o:['the child is small','the child is big','the child is bad','the small child left'],a:0},
{t:'wb',q:'Build: The market is not good',a:['ဈေး','မကောင်းဘူး'],pool:['ဈေး','မကောင်းဘူး','ကောင်းတယ်']},
{t:'li',q:'Listen — which one?',say:'ကြီးလား',o:['ကြီးလား','ကြီးတယ်','သေးလား','ဆိုးတယ်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ကြီးတယ်','is big'],['ဆိုးတယ်','is bad'],['အသစ်','new'],['အဟောင်း','old (things)']]}]},
{id:'my_adj_5',title:'Checkpoint',step:'checkpoint',meta:'Describing mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "is small"?',o:['သေးတယ်','ကြီးတယ်','ဆိုးတယ်','အသစ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆိုးတယ်',o:['ဆိုးတယ်','ကြီးတယ်','သေးတယ်','မကောင်းဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'အသစ်',o:['new','old','small','good'],a:0},
{t:'wb',q:'Build: The teashop is good',a:['လက်ဖက်ရည်ဆိုင်','ကောင်းတယ်'],pool:['လက်ဖက်ရည်ဆိုင်','ကောင်းတယ်','ဆိုးတယ်']},
{t:'mc',q:'To negate any describing word:',o:['မ + word + ဘူး','word + လား','အ + word','word + မယ်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ကြီးတယ်','is big'],['သေးတယ်','is small'],['အသစ်','new'],['မကောင်းဘူး','is not good']]}]},

/* --- Topic 2: hot, cold & tastes --- */
{id:'my_taste',title:'Hot, cold & tasty',step:'learn',meta:'ပူ အေး စပ် ချို',vocab:[['ပူတယ်','pu de','is hot'],['အေးတယ်','ei de','is cold'],['စပ်တယ်','saq de','is spicy'],['ချိုတယ်','cho de','is sweet'],['လက်ဖက်ရည်ပူတယ်','lahpeq yeh pu de','the tea is hot'],['ရေအေးတယ်','ye ei de','the water is cold']],ex:[
{t:'note',tag:'Feel it',q:'ပူ · အေး',body:'<p><span class="deva">ပူတယ်</span> <b>pu de</b> = is hot · <span class="deva">အေးတယ်</span> <b>ei de</b> = is cold. Weather, tea, soup — same words.</p><p><span class="deva">လက်ဖက်ရည်ပူတယ်</span> — careful, the tea is hot!</p>',eg:[['ပူတယ်','pu de','is hot'],['အေးတယ်','ei de','is cold']]},
{t:'mc',q:'Which means "is hot"?',o:['ပူတယ်','အေးတယ်','စပ်တယ်','ချိုတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရေအေးတယ်',o:['the water is cold','the water is hot','the tea is cold','cold water, please'],a:0},
{t:'note',tag:'Taste it',q:'စပ် · ချို',body:'<p>Two tastes rule Myanmar tables: <span class="deva">စပ်တယ်</span> <b>saq de</b> — spicy! — and <span class="deva">ချိုတယ်</span> <b>cho de</b> — sweet (that teashop tea is famously sweet).</p>',eg:[['စပ်တယ်','saq de','is spicy'],['ချိုတယ်','cho de','is sweet']]},
{t:'mc',q:'Which means "is spicy"?',o:['စပ်တယ်','ချိုတယ်','ပူတယ်','အေးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ချိုတယ်',o:['is sweet','is spicy','is sour','is cold'],a:0},
{t:'li',q:'Listen — which one?',say:'စပ်တယ်',o:['စပ်တယ်','ချိုတယ်','ပူတယ်','အေးတယ်'],a:0}]},
{id:'my_taste_2',title:'Hear the tastes',step:'recognize',meta:'Spot ပူ အေး စပ် ချို',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ပူတယ်',o:['ပူတယ်','အေးတယ်','စပ်တယ်','ချိုတယ်'],a:0},
{t:'mc',q:'Which means "is cold"?',o:['အေးတယ်','ပူတယ်','ချိုတယ်','စပ်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ရေအေးတယ်',o:['ရေအေးတယ်','လက်ဖက်ရည်ပူတယ်','အေးတယ်','ရေ'],a:0},
{t:'mc',q:'What does this mean?',d:'စပ်တယ်',o:['is spicy','is sweet','is salty','is hot (temperature)'],a:0},
{t:'mc',q:'Teashop tea is famously…',o:['ချိုတယ်','စပ်တယ်','အေးတယ်','ဆိုးတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ချိုတယ်',o:['ချိုတယ်','ကျိုတယ်','စပ်တယ်','ပူတယ်'],a:0},
{t:'mc',q:'ပူတယ် can describe…',o:['weather AND food','only weather','only food','only people'],a:0}]},
{id:'my_taste_3',title:'Put it together',step:'build',meta:'Say how it tastes',vocab:[],ex:[
{t:'match',q:'Match taste and meaning',pairs:[['ပူတယ်','is hot'],['အေးတယ်','is cold'],['စပ်တယ်','is spicy'],['ချိုတယ်','is sweet']]},
{t:'wb',q:'Build: The curry is spicy',a:['ဟင်း','စပ်တယ်'],pool:['ဟင်း','စပ်တယ်','ချိုတယ်']},
{t:'mc',q:'"The coffee is hot" is…',o:['ကော်ဖီပူတယ်','ကော်ဖီအေးတယ်','ကော်ဖီချိုတယ်','ကော်ဖီပေးပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'အေးတယ်',o:['အေးတယ်','ပူတယ်','ချိုတယ်','နေတယ်'],a:0},
{t:'wb',q:'Build: Is the curry spicy?',a:['ဟင်း','စပ်လား'],pool:['ဟင်း','စပ်လား','စပ်တယ်']},
{t:'match',q:'Match line and meaning',pairs:[['လက်ဖက်ရည်ပူတယ်','the tea is hot'],['ရေအေးတယ်','the water is cold'],['ချိုတယ်','is sweet'],['စပ်တယ်','is spicy']]}]},
{id:'my_taste_4',title:'Mix it',step:'mix',meta:'Tastes at the table',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အေးတယ်',o:['is cold','is hot','is sweet','is fresh'],a:0},
{t:'li',q:'Listen — which one?',say:'လက်ဖက်ရည်ပူတယ်',o:['လက်ဖက်ရည်ပူတယ်','ရေအေးတယ်','ပူတယ်','လက်ဖက်ရည်ချိုတယ်'],a:0},
{t:'mc',q:'One bite and your eyes water. The curry…',o:['စပ်တယ်','ချိုတယ်','အေးတယ်','ကောင်းတယ်'],a:0},
{t:'wb',q:'Build: Cold water, please — water cold-cold give',a:['ရေ','အေးအေး','ပေးပါ'],pool:['ရေ','အေးအေး','ပေးပါ','ပူပူ']},
{t:'li',q:'Listen — which one?',say:'ချိုတယ်',o:['ချိုတယ်','ကျိုတယ်','စပ်တယ်','အေးတယ်'],a:0},
{t:'match',q:'Match taste and meaning',pairs:[['ပူတယ်','is hot'],['စပ်တယ်','is spicy'],['ချိုတယ်','is sweet'],['ရေအေးတယ်','the water is cold']]}]},
{id:'my_taste_5',title:'Checkpoint',step:'checkpoint',meta:'Tastes mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "is sweet"?',o:['ချိုတယ်','စပ်တယ်','ပူတယ်','အေးတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'စပ်တယ်',o:['စပ်တယ်','ချိုတယ်','ပူတယ်','ဆိုးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လက်ဖက်ရည်ပူတယ်',o:['the tea is hot','the tea is sweet','the water is hot','hot tea, please'],a:0},
{t:'wb',q:'Build: The fish curry is sweet',a:['ငါးဟင်း','ချိုတယ်'],pool:['ငါးဟင်း','ချိုတယ်','စပ်တယ်']},
{t:'mc',q:'Hot / cold / spicy / sweet =',o:['ပူ · အေး · စပ် · ချို','အေး · ပူ · ချို · စပ်','ပူ · စပ် · အေး · ချို','ချို · စပ် · အေး · ပူ'],a:0},
{t:'match',q:'Match taste and meaning',pairs:[['ပူတယ်','is hot'],['အေးတယ်','is cold'],['စပ်တယ်','is spicy'],['ချိုတယ်','is sweet']]}]},

/* --- Topic 3: colors --- */
{id:'my_color',title:'Colors',step:'learn',meta:'အနီ အပြာ အဝါ အစိမ်း အဖြူ အမည်း',vocab:[['အနီ','a ni','red'],['အပြာ','a pya','blue'],['အဝါ','a wa','yellow'],['အစိမ်း','a sein','green'],['အဖြူ','a hpyu','white'],['အမည်း','a meh','black']],ex:[
{t:'note',tag:'The အ trick',q:'Colors wear အ',body:'<p>Color words wear the little prefix <span class="deva">အ</span>: <span class="deva">အနီ</span> <b>a ni</b> red · <span class="deva">အပြာ</span> <b>a pya</b> blue · <span class="deva">အဝါ</span> <b>a wa</b> yellow.</p><p>Add <span class="deva">ရောင်</span> (color/shade) for "the color red": အနီရောင်.</p>',eg:[['အနီ','a ni','red'],['အပြာ','a pya','blue'],['အဝါ','a wa','yellow']]},
{t:'mc',q:'Which is "red"?',o:['အနီ','အပြာ','အဝါ','အစိမ်း'],a:0},
{t:'mc',q:'What does this mean?',d:'အပြာ',o:['blue','red','yellow','green'],a:0},
{t:'note',tag:'Three more',q:'အစိမ်း · အဖြူ · အမည်း',body:'<p><span class="deva">အစိမ်း</span> <b>a sein</b> green (also "raw"!) · <span class="deva">အဖြူ</span> <b>a hpyu</b> white · <span class="deva">အမည်း</span> <b>a meh</b> black.</p>',eg:[['အစိမ်း','a sein','green'],['အဖြူ','a hpyu','white'],['အမည်း','a meh','black']]},
{t:'mc',q:'Which is "green"?',o:['အစိမ်း','အဖြူ','အမည်း','အနီ'],a:0},
{t:'mc',q:'What does this mean?',d:'အဖြူ',o:['white','black','blue','yellow'],a:0},
{t:'li',q:'Listen — which color?',say:'အနီ',o:['အနီ','အပြာ','အဝါ','အမည်း'],a:0}]},
{id:'my_color_2',title:'Hear the colors',step:'recognize',meta:'Spot each color',vocab:[],ex:[
{t:'li',q:'Listen — which color?',say:'အပြာ',o:['အပြာ','အဝါ','အနီ','အဖြူ'],a:0},
{t:'mc',q:'Which is "yellow"?',o:['အဝါ','အဖြူ','အနီ','အစိမ်း'],a:0},
{t:'li',q:'Listen — which color?',say:'အစိမ်း',o:['အစိမ်း','အမည်း','အဖြူ','အနီ'],a:0},
{t:'mc',q:'What does this mean?',d:'အမည်း',o:['black','white','green','blue'],a:0},
{t:'mc',q:'အစိမ်း also means…',o:['raw','cooked','ripe','old'],a:0},
{t:'li',q:'Listen — which color?',say:'အဖြူ',o:['အဖြူ','အပြာ','အဝါ','အစိမ်း'],a:0},
{t:'mc',q:'"The color red" (with the color word) is…',o:['အနီရောင်','အနီတယ်','နီပါ','ရောင်နီ'],a:0}]},
{id:'my_color_3',title:'Put it together',step:'build',meta:'Color your world',vocab:[],ex:[
{t:'match',q:'Match color and meaning',pairs:[['အနီ','red'],['အပြာ','blue'],['အဝါ','yellow'],['အစိမ်း','green']]},
{t:'mc',q:'Rice is which color?',o:['အဖြူ','အမည်း','အနီ','အပြာ'],a:0},
{t:'li',q:'Listen — which color?',say:'အဝါ',o:['အဝါ','အပြာ','အနီ','အဖြူ'],a:0},
{t:'wb',q:'Build: I like blue (man speaking)',a:['ကျွန်တော်','အပြာ','ကြိုက်တယ်'],pool:['ကျွန်တော်','အပြာ','ကြိုက်တယ်','အနီ']},
{t:'match',q:'Match color and meaning',pairs:[['အဖြူ','white'],['အမည်း','black'],['အနီ','red'],['အဝါ','yellow']]},
{t:'mc',q:'Fresh green vegetables are…',o:['အစိမ်း','အမည်း','အဝါ','အဖြူ'],a:0}]},
{id:'my_color_4',title:'Mix it',step:'mix',meta:'All six colors',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အဝါ',o:['yellow','white','green','red'],a:0},
{t:'li',q:'Listen — which color?',say:'အမည်း',o:['အမည်း','အစိမ်း','အနီ','အဖြူ'],a:0},
{t:'mc',q:'Strong teashop coffee is…',o:['အမည်း','အဖြူ','အပြာ','အစိမ်း'],a:0},
{t:'wb',q:'Build: Do you like red?',a:['အနီ','ကြိုက်လား'],pool:['အနီ','ကြိုက်လား','ကြိုက်တယ်']},
{t:'li',q:'Listen — which color?',say:'အစိမ်း',o:['အစိမ်း','အသစ်','အမည်း','အပြာ'],a:0},
{t:'match',q:'Match color and meaning',pairs:[['အနီ','red'],['အစိမ်း','green'],['အဖြူ','white'],['အမည်း','black']]}]},
{id:'my_color_5',title:'Checkpoint',step:'checkpoint',meta:'Colors mastered?',vocab:[],ex:[
{t:'mc',q:'Which is "white"?',o:['အဖြူ','အမည်း','အဝါ','အပြာ'],a:0},
{t:'li',q:'Listen — which color?',say:'အနီ',o:['အနီ','အဝါ','အပြာ','အစိမ်း'],a:0},
{t:'mc',q:'What does this mean?',d:'အစိမ်း',o:['green','blue','yellow','black'],a:0},
{t:'wb',q:'Build: I like green (woman speaking)',a:['ကျွန်မ','အစိမ်း','ကြိုက်တယ်'],pool:['ကျွန်မ','အစိမ်း','ကြိုက်တယ်','အပြာ']},
{t:'mc',q:'Color words wear the prefix…',o:['အ','မ','ဘ','တ'],a:0},
{t:'match',q:'Match color and meaning',pairs:[['အပြာ','blue'],['အဝါ','yellow'],['အဖြူ','white'],['အနီ','red']]}]},

/* --- Topic 4: comparisons ပို / ထက် / အ…ဆုံး --- */
{id:'my_cmp',title:'Bigger & best',step:'learn',meta:'ပို…တယ် ထက် အ…ဆုံး',vocab:[['ပို','po','more'],['ပိုကြီးတယ်','po kyi de','is bigger'],['ပိုကောင်းတယ်','po kaung de','is better'],['ထက်','htaq','than'],['အကြီးဆုံး','a kyi zoun','the biggest'],['အကောင်းဆုံး','a kaung zoun','the best']],ex:[
{t:'note',tag:'More of it',q:'ပို + verb',body:'<p>To compare, slide <span class="deva">ပို</span> <b>po</b> (more) in front of the describing verb: <span class="deva">ပိုကြီးတယ်</span> bigger · <span class="deva">ပိုကောင်းတယ်</span> better.</p><p>"Than" is <span class="deva">ထက်</span> after the loser: <span class="deva">ဒါထက် ပိုကြီးတယ်</span> — bigger than this.</p>',eg:[['ပိုကြီးတယ်','po kyi de','is bigger'],['ထက်','htaq','than']]},
{t:'mc',q:'Which means "is bigger"?',o:['ပိုကြီးတယ်','ကြီးတယ်','အကြီးဆုံး','ကြီးလား'],a:0},
{t:'mc',q:'What does this mean?',d:'ပိုကောင်းတယ်',o:['is better','is best','is good','is bigger'],a:0},
{t:'note',tag:'The very most',q:'အ + verb + ဆုံး',body:'<p>Superlatives wrap the verb in <span class="deva">အ</span>…<span class="deva">ဆုံး</span>: <span class="deva">အကြီးဆုံး</span> <b>a kyi zoun</b> the biggest · <span class="deva">အကောင်းဆုံး</span> <b>a kaung zoun</b> the best.</p>',eg:[['အကြီးဆုံး','a kyi zoun','the biggest'],['အကောင်းဆုံး','a kaung zoun','the best']]},
{t:'mc',q:'Which means "the best"?',o:['အကောင်းဆုံး','ပိုကောင်းတယ်','ကောင်းတယ်','အကြီးဆုံး'],a:0},
{t:'mc',q:'What does this mean?',d:'ထက်',o:['than','more','most','with'],a:0},
{t:'li',q:'Listen — which one?',say:'ပိုကောင်းတယ်',o:['ပိုကောင်းတယ်','ကောင်းတယ်','အကောင်းဆုံး','ပိုကြီးတယ်'],a:0}]},
{id:'my_cmp_2',title:'Hear the comparison',step:'recognize',meta:'more / than / most',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ပို',o:['ပို','ထက်','ပူ','ပါ'],a:0},
{t:'mc',q:'Which means "the biggest"?',o:['အကြီးဆုံး','ပိုကြီးတယ်','ကြီးတယ်','အကြီး'],a:0},
{t:'li',q:'Listen — which one?',say:'အကောင်းဆုံး',o:['အကောင်းဆုံး','ပိုကောင်းတယ်','ကောင်းတယ်','အကြီးဆုံး'],a:0},
{t:'mc',q:'What does this mean?',d:'ပိုကြီးတယ်',o:['is bigger','is the biggest','is big','more or less'],a:0},
{t:'mc',q:'"Sweeter" would be…',o:['ပိုချိုတယ်','အချိုဆုံး','ချိုတယ်','ချိုထက်'],a:0},
{t:'li',q:'Listen — which one?',say:'ထက်',o:['ထက်','ပို','ဆုံး','တစ်'],a:0},
{t:'mc',q:'The superlative recipe is…',o:['အ + verb + ဆုံး','ပို + verb','verb + ထက်','မ + verb + ဘူး'],a:0}]},
{id:'my_cmp_3',title:'Put it together',step:'build',meta:'Compare things',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ပိုကြီးတယ်','is bigger'],['ပိုကောင်းတယ်','is better'],['အကြီးဆုံး','the biggest'],['အကောင်းဆုံး','the best']]},
{t:'wb',q:'Build: This is better — this more-goods',a:['ဒါ','ပိုကောင်းတယ်'],pool:['ဒါ','ပိုကောင်းတယ်','အကောင်းဆုံး']},
{t:'mc',q:'"Cheaper" is…',o:['ဈေးပိုပေါတယ်','ဈေးပေါတယ်','အပေါဆုံး','ဈေးထက်'],a:0},
{t:'li',q:'Listen — which one?',say:'အကြီးဆုံး',o:['အကြီးဆုံး','ပိုကြီးတယ်','အကောင်းဆုံး','ကြီးတယ်'],a:0},
{t:'wb',q:'Build: bigger than this — this-than more-bigs',a:['ဒါထက်','ပိုကြီးတယ်'],pool:['ဒါထက်','ပိုကြီးတယ်','အကြီးဆုံး']},
{t:'match',q:'Match line and meaning',pairs:[['ပို','more'],['ထက်','than'],['အကောင်းဆုံး','the best'],['ပိုကြီးတယ်','is bigger']]}]},
{id:'my_cmp_4',title:'Mix it',step:'mix',meta:'Compare everything',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အကြီးဆုံး',o:['the biggest','bigger','big','than big'],a:0},
{t:'li',q:'Listen — which one?',say:'ပိုကြီးတယ်',o:['ပိုကြီးတယ်','အကြီးဆုံး','ကြီးတယ်','ပိုကောင်းတယ်'],a:0},
{t:'mc',q:'Two mangoes; you want the sweeter one. It is…',o:['ပိုချိုတယ်','ပိုစပ်တယ်','အချိုဆုံး','ပိုပူတယ်'],a:0},
{t:'wb',q:'Build: The teashop is the best',a:['လက်ဖက်ရည်ဆိုင်','အကောင်းဆုံး','ပါ'],pool:['လက်ဖက်ရည်ဆိုင်','အကောင်းဆုံး','ပါ','ပိုကောင်းတယ်']},
{t:'li',q:'Listen — which one?',say:'အကောင်းဆုံး',o:['အကောင်းဆုံး','အကြီးဆုံး','ပိုကောင်းတယ်','ကောင်းတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ပိုကောင်းတယ်','is better'],['အကြီးဆုံး','the biggest'],['ထက်','than'],['ပို','more']]}]},
{id:'my_cmp_5',title:'Checkpoint',step:'checkpoint',meta:'Comparisons mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "is better"?',o:['ပိုကောင်းတယ်','အကောင်းဆုံး','ကောင်းတယ်','ကောင်းလား'],a:0},
{t:'li',q:'Listen — which one?',say:'ထက်',o:['ထက်','ပို','ဆုံး','ကက်'],a:0},
{t:'mc',q:'What does this mean?',d:'အကောင်းဆုံး',o:['the best','better','good','the biggest'],a:0},
{t:'wb',q:'Build: This one is bigger',a:['ဒါက','ပိုကြီးတယ်'],pool:['ဒါက','ပိုကြီးတယ်','အကြီးဆုံး']},
{t:'mc',q:'more · than · most =',o:['ပို · ထက် · အ…ဆုံး','ထက် · ပို · အ…ဆုံး','အ…ဆုံး · ပို · ထက်','ပို · အ…ဆုံး · ထက်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ပိုကြီးတယ်','is bigger'],['ပိုကောင်းတယ်','is better'],['အကြီးဆုံး','the biggest'],['အကောင်းဆုံး','the best']]}]},

/* --- Topic 5: feelings --- */
{id:'my_feel',title:'Feelings',step:'learn',meta:'ပျော် ဝမ်းနည်း ပင်ပန်း ဆာ ကြောက်',vocab:[['ပျော်တယ်','pyaw de','is happy'],['ဝမ်းနည်းတယ်','wun neh de','is sad'],['ပင်ပန်းတယ်','pin ban de','is tired'],['ဗိုက်ဆာတယ်','baiq hsa de','is hungry'],['ရေဆာတယ်','ye hsa de','is thirsty'],['ကြောက်တယ်','kyauq de','is afraid']],ex:[
{t:'note',tag:'How you feel',q:'ပျော် · ဝမ်းနည်း · ပင်ပန်း',body:'<p>Feelings are stative verbs too. <span class="deva">ပျော်တယ်</span> <b>pyaw de</b> happy (you met ပျော် in Zone 1!) · <span class="deva">ဝမ်းနည်းတယ်</span> <b>wun neh de</b> sad · <span class="deva">ပင်ပန်းတယ်</span> <b>pin ban de</b> tired.</p>',eg:[['ပျော်တယ်','pyaw de','is happy'],['ဝမ်းနည်းတယ်','wun neh de','is sad'],['ပင်ပန်းတယ်','pin ban de','is tired']]},
{t:'mc',q:'Which means "is happy"?',o:['ပျော်တယ်','ဝမ်းနည်းတယ်','ပင်ပန်းတယ်','ကြောက်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ပင်ပန်းတယ်',o:['is tired','is sad','is happy','is hungry'],a:0},
{t:'note',tag:'Belly talk',q:'ဗိုက်ဆာ · ရေဆာ · ကြောက်',body:'<p>Hungry is literally <b>belly-hungry</b>: <span class="deva">ဗိုက်ဆာတယ်</span> <b>baiq hsa de</b>. Thirsty is <b>water-hungry</b>: <span class="deva">ရေဆာတယ်</span>!</p><p>And <span class="deva">ကြောက်တယ်</span> <b>kyauq de</b> = is afraid.</p>',eg:[['ဗိုက်ဆာတယ်','baiq hsa de','is hungry'],['ရေဆာတယ်','ye hsa de','is thirsty'],['ကြောက်တယ်','kyauq de','is afraid']]},
{t:'mc',q:'Which means "is hungry"?',o:['ဗိုက်ဆာတယ်','ရေဆာတယ်','ပင်ပန်းတယ်','ပျော်တယ်'],a:0},
{t:'mc',q:'ရေဆာတယ် is literally…',d:'ရေဆာတယ်',o:['water-hungry = thirsty','water-cold = cool','water-good = fresh','water-big = flood'],a:0},
{t:'li',q:'Listen — which one?',say:'ပျော်တယ်',o:['ပျော်တယ်','ကြောက်တယ်','ပင်ပန်းတယ်','ဝမ်းနည်းတယ်'],a:0}]},
{id:'my_feel_2',title:'Hear the feelings',step:'recognize',meta:'Spot each feeling',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဝမ်းနည်းတယ်',o:['ဝမ်းနည်းတယ်','ပျော်တယ်','ပင်ပန်းတယ်','ကြောက်တယ်'],a:0},
{t:'mc',q:'Which means "is afraid"?',o:['ကြောက်တယ်','ကြိုက်တယ်','ပျော်တယ်','ဆာတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဗိုက်ဆာတယ်',o:['ဗိုက်ဆာတယ်','ရေဆာတယ်','ပင်ပန်းတယ်','ဝမ်းနည်းတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဝမ်းနည်းတယ်',o:['is sad','is happy','is tired','is sorry'],a:0},
{t:'mc',q:'ကြောက်တယ် vs ကြိုက်တယ် —',o:['afraid vs like','like vs afraid','both mean like','both mean afraid'],a:0},
{t:'li',q:'Listen — which one?',say:'ပင်ပန်းတယ်',o:['ပင်ပန်းတယ်','ပျော်တယ်','ဗိုက်ဆာတယ်','ကြောက်တယ်'],a:0},
{t:'mc',q:'After a long day of lessons you might say…',o:['ပင်ပန်းတယ်','ကြောက်တယ်','ဝမ်းနည်းတယ်','ရေဆာတယ်'],a:0}]},
{id:'my_feel_3',title:'Put it together',step:'build',meta:'Say how you feel',vocab:[],ex:[
{t:'match',q:'Match feeling and meaning',pairs:[['ပျော်တယ်','is happy'],['ဝမ်းနည်းတယ်','is sad'],['ပင်ပန်းတယ်','is tired'],['ကြောက်တယ်','is afraid']]},
{t:'wb',q:'Build: I am hungry (man speaking)',a:['ကျွန်တော်','ဗိုက်ဆာတယ်'],pool:['ကျွန်တော်','ဗိုက်ဆာတယ်','ရေဆာတယ်']},
{t:'mc',q:'"Not afraid" is…',o:['မကြောက်ဘူး','ကြောက်တယ်','မကြိုက်ဘူး','ကြောက်လား'],a:0},
{t:'li',q:'Listen — which one?',say:'ရေဆာတယ်',o:['ရေဆာတယ်','ဗိုက်ဆာတယ်','ရေအေးတယ်','ပျော်တယ်'],a:0},
{t:'wb',q:'Build: Are you tired?',a:['ပင်ပန်း','လား'],pool:['ပင်ပန်း','လား','တယ်']},
{t:'match',q:'Match feeling and meaning',pairs:[['ဗိုက်ဆာတယ်','is hungry'],['ရေဆာတယ်','is thirsty'],['ပျော်တယ်','is happy'],['ပင်ပန်းတယ်','is tired']]}]},
{id:'my_feel_4',title:'Mix it',step:'mix',meta:'Feelings in sentences',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ကြောက်တယ်',o:['is afraid','likes','is tired','is sad'],a:0},
{t:'li',q:'Listen — which one?',say:'ပျော်တယ်',o:['ပျော်တယ်','ပင်ပန်းတယ်','ကြောက်တယ်','ဝမ်းနည်းတယ်'],a:0},
{t:'mc',q:'Lunchtime! Your stomach growls:',o:['ဗိုက်ဆာတယ်','ရေဆာတယ်','ပင်ပန်းတယ်','ဝမ်းနည်းတယ်'],a:0},
{t:'wb',q:'Build: I am thirsty (woman speaking)',a:['ကျွန်မ','ရေဆာတယ်'],pool:['ကျွန်မ','ရေဆာတယ်','ဗိုက်ဆာတယ်']},
{t:'li',q:'Listen — which one?',say:'ကြောက်တယ်',o:['ကြောက်တယ်','ကြိုက်တယ်','ပျော်တယ်','ကောင်းတယ်'],a:0},
{t:'match',q:'Match feeling and meaning',pairs:[['ပျော်တယ်','is happy'],['ဝမ်းနည်းတယ်','is sad'],['ရေဆာတယ်','is thirsty'],['ကြောက်တယ်','is afraid']]}]},
{id:'my_feel_5',title:'Checkpoint',step:'checkpoint',meta:'Feelings mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "is sad"?',o:['ဝမ်းနည်းတယ်','ပျော်တယ်','ပင်ပန်းတယ်','ကြောက်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ပင်ပန်းတယ်',o:['ပင်ပန်းတယ်','ပျော်တယ်','ဝမ်းနည်းတယ်','ဗိုက်ဆာတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဗိုက်ဆာတယ်',o:['is hungry','is thirsty','stomach hurts','is full'],a:0},
{t:'wb',q:'Build: I am happy (man speaking)',a:['ကျွန်တော်','ပျော်တယ်'],pool:['ကျွန်တော်','ပျော်တယ်','ဝမ်းနည်းတယ်']},
{t:'mc',q:'Thirsty is literally…',o:['water-hungry','belly-empty','mouth-dry','tea-wanting'],a:0},
{t:'match',q:'Match feeling and meaning',pairs:[['ပျော်တယ်','is happy'],['ပင်ပန်းတယ်','is tired'],['ဗိုက်ဆာတယ်','is hungry'],['ကြောက်တယ်','is afraid']]}]},

/* --- Topic 6: weather & the three seasons --- */
{id:'my_wx',title:'Weather & seasons',step:'learn',meta:'မိုး နေ လေ + ရာသီ',vocab:[['မိုး','mo','rain'],['မိုးရွာတယ်','mo ywa de','it is raining'],['နေပူတယ်','ne pu de','it is sunny & hot'],['လေ','lei','wind'],['နွေရာသီ','nwei yathi','the hot season'],['မိုးရာသီ','mo yathi','the rainy season'],['ဆောင်းရာသီ','hsaung yathi','the cool season']],ex:[
{t:'note',tag:'Sky talk',q:'မိုး · နေ · လေ',body:'<p><span class="deva">မိုး</span> <b>mo</b> = rain (and the sky). <span class="deva">မိုးရွာတယ်</span> — it is raining. <span class="deva">နေ</span> — the sun, same word as "stay"! — gives <span class="deva">နေပူတယ်</span> — sunny and hot. <span class="deva">လေ</span> <b>lei</b> = wind.</p>',eg:[['မိုးရွာတယ်','mo ywa de','it is raining'],['နေပူတယ်','ne pu de','sunny & hot'],['လေ','lei','wind']]},
{t:'mc',q:'Which means "it is raining"?',o:['မိုးရွာတယ်','နေပူတယ်','လေ','မိုးရာသီ'],a:0},
{t:'mc',q:'What does this mean?',d:'နေပူတယ်',o:['it is sunny & hot','it is raining','it is windy','it is cool'],a:0},
{t:'note',tag:'Three seasons',q:'ရာသီ',body:'<p>Myanmar has <b>three</b> seasons (<span class="deva">ရာသီ</span> <b>yathi</b>): <span class="deva">နွေရာသီ</span> the hot season (Mar–May) · <span class="deva">မိုးရာသီ</span> the rainy season (Jun–Oct) · <span class="deva">ဆောင်းရာသီ</span> the cool season (Nov–Feb).</p>',eg:[['နွေရာသီ','nwei yathi','hot season'],['မိုးရာသီ','mo yathi','rainy season'],['ဆောင်းရာသီ','hsaung yathi','cool season']]},
{t:'mc',q:'How many seasons does Myanmar have?',o:['three','four','two','five'],a:0},
{t:'mc',q:'What does this mean?',d:'မိုးရာသီ',o:['the rainy season','the hot season','the cool season','the rain'],a:0},
{t:'li',q:'Listen — which one?',say:'မိုးရွာတယ်',o:['မိုးရွာတယ်','နေပူတယ်','မိုးရာသီ','လေ'],a:0}]},
{id:'my_wx_2',title:'Hear the weather',step:'recognize',meta:'Spot rain, sun & wind',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'မိုး',o:['မိုး','လေ','နေ','မို့'],a:0},
{t:'mc',q:'Which means "wind"?',o:['လေ','မိုး','နေ','ရာသီ'],a:0},
{t:'li',q:'Listen — which one?',say:'နေပူတယ်',o:['နေပူတယ်','မိုးရွာတယ်','ပူတယ်','နေကောင်းတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆောင်းရာသီ',o:['the cool season','the hot season','the rainy season','the windy day'],a:0},
{t:'mc',q:'June to October in Myanmar is…',o:['မိုးရာသီ','နွေရာသီ','ဆောင်းရာသီ','စနေ'],a:0},
{t:'li',q:'Listen — which one?',say:'နွေရာသီ',o:['နွေရာသီ','မိုးရာသီ','ဆောင်းရာသီ','ရာသီ'],a:0},
{t:'mc',q:'နေ means the sun and also…',o:['stay / live','rain','wind','cold'],a:0}]},
{id:'my_wx_3',title:'Put it together',step:'build',meta:'Talk about the sky',vocab:[],ex:[
{t:'match',q:'Match weather and meaning',pairs:[['မိုးရွာတယ်','it is raining'],['နေပူတယ်','sunny & hot'],['လေ','wind'],['မိုး','rain']]},
{t:'wb',q:'Build: It is raining today — today rain falls',a:['ဒီနေ့','မိုးရွာတယ်'],pool:['ဒီနေ့','မိုးရွာတယ်','နေပူတယ်']},
{t:'mc',q:'"Is it raining?" is…',o:['မိုးရွာလား','မိုးရွာတယ်','မိုးရာသီလား','နေပူလား'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆောင်းရာသီ',o:['ဆောင်းရာသီ','နွေရာသီ','မိုးရာသီ','ဆောင်း'],a:0},
{t:'wb',q:'Build: The hot season is very hot — hot-season hots',a:['နွေရာသီ','ပူတယ်'],pool:['နွေရာသီ','ပူတယ်','အေးတယ်']},
{t:'match',q:'Match season and time',pairs:[['နွေရာသီ','hot season'],['မိုးရာသီ','rainy season'],['ဆောင်းရာသီ','cool season'],['ရာသီ','season']]}]},
{id:'my_wx_4',title:'Mix it',step:'mix',meta:'All weathers',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မိုးရွာတယ်',o:['it is raining','it is sunny','it is windy','the rainy season'],a:0},
{t:'li',q:'Listen — which one?',say:'လေ',o:['လေ','လေး','မိုး','နေ'],a:0},
{t:'mc',q:'Grey sky, first drops. You grab an umbrella:',o:['မိုးရွာတယ်','နေပူတယ်','ဆောင်းရာသီ','လေ'],a:0},
{t:'wb',q:'Build: The cool season is cold',a:['ဆောင်းရာသီ','အေးတယ်'],pool:['ဆောင်းရာသီ','အေးတယ်','ပူတယ်']},
{t:'li',q:'Listen — which one?',say:'မိုးရာသီ',o:['မိုးရာသီ','နွေရာသီ','ဆောင်းရာသီ','မိုးရွာတယ်'],a:0},
{t:'match',q:'Match weather and meaning',pairs:[['နေပူတယ်','sunny & hot'],['မိုးရွာတယ်','it is raining'],['နွေရာသီ','hot season'],['ဆောင်းရာသီ','cool season']]}]},
{id:'my_wx_5',title:'Checkpoint',step:'checkpoint',meta:'Weather mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "rain"?',o:['မိုး','လေ','နေ','ရာသီ'],a:0},
{t:'li',q:'Listen — which one?',say:'နေပူတယ်',o:['နေပူတယ်','မိုးရွာတယ်','ပူတယ်','နွေရာသီ'],a:0},
{t:'mc',q:'What does this mean?',d:'နွေရာသီ',o:['the hot season','the rainy season','the cool season','the sunny day'],a:0},
{t:'mc',q:'Myanmar’s three seasons are…',o:['hot · rainy · cool','spring · summer · autumn','wet · dry · windy','hot · cold · mild'],a:0},
{t:'li',q:'Listen — which one?',say:'မိုးရွာတယ်',o:['မိုးရွာတယ်','မိုးရာသီ','မိုး','နေပူတယ်'],a:0},
{t:'match',q:'Match weather and meaning',pairs:[['မိုး','rain'],['လေ','wind'],['မိုးရွာတယ်','it is raining'],['မိုးရာသီ','rainy season']]}]},

/* --- Topic 7: body & health --- */
{id:'my_body',title:'Body & health',step:'learn',meta:'ခေါင်း ဗိုက် နာ ဆေး ဆရာဝန်',vocab:[['ခေါင်း','gaung','head'],['ဗိုက်','baiq','stomach / belly'],['ခေါင်းကိုက်တယ်','gaung kaiq de','have a headache'],['ဗိုက်နာတယ်','baiq na de','stomach hurts'],['ဆေး','hsei','medicine'],['ဆရာဝန်','hsaya wun','doctor'],['နေမကောင်းဘူး','ne ma kaung bu','not feeling well']],ex:[
{t:'note',tag:'Where it hurts',q:'ခေါင်း · ဗိုက် + ကိုက်/နာ',body:'<p><span class="deva">ခေါင်း</span> <b>gaung</b> = head · <span class="deva">ဗိုက်</span> <b>baiq</b> = belly (you know it from ဗိုက်ဆာတယ်!).</p><p>Pain: <span class="deva">ခေါင်းကိုက်တယ်</span> headache (ကိုက် = ache/bite) · <span class="deva">ဗိုက်နာတယ်</span> stomach hurts (နာ = hurt).</p>',eg:[['ခေါင်းကိုက်တယ်','gaung kaiq de','headache'],['ဗိုက်နာတယ်','baiq na de','stomach hurts']]},
{t:'mc',q:'Which means "head"?',o:['ခေါင်း','ဗိုက်','ဆေး','ကောင်း'],a:0},
{t:'mc',q:'What does this mean?',d:'ခေါင်းကိုက်တယ်',o:['have a headache','stomach hurts','feel dizzy','head is big'],a:0},
{t:'note',tag:'Getting help',q:'ဆေး · ဆရာဝန် · နေမကောင်းဘူး',body:'<p><span class="deva">ဆေး</span> <b>hsei</b> = medicine · <span class="deva">ဆရာဝန်</span> <b>hsaya wun</b> = doctor (a respected ဆရာ!).</p><p>And the all-purpose "I am unwell": <span class="deva">နေမကောင်းဘူး</span> — the exact flip of <span class="deva">နေကောင်းလား</span> from your very first lesson.</p>',eg:[['ဆေး','hsei','medicine'],['ဆရာဝန်','hsaya wun','doctor'],['နေမကောင်းဘူး','ne ma kaung bu','not feeling well']]},
{t:'mc',q:'Which means "medicine"?',o:['ဆေး','ဈေး','ဆရာဝန်','ခေါင်း'],a:0},
{t:'mc',q:'What does this mean?',d:'နေမကောင်းဘူး',o:['not feeling well','feeling great','not staying home','the weather is bad'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆရာဝန်',o:['ဆရာဝန်','ဆရာ','ဆရာမ','ဆေး'],a:0}]},
{id:'my_body_2',title:'Hear the aches',step:'recognize',meta:'Spot the health words',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ခေါင်း',o:['ခေါင်း','ဗိုက်','ကောင်း','ခေါင်းကိုက်တယ်'],a:0},
{t:'mc',q:'Which means "stomach hurts"?',o:['ဗိုက်နာတယ်','ခေါင်းကိုက်တယ်','ဗိုက်ဆာတယ်','နေမကောင်းဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆေး',o:['ဆေး','ဈေး','ဆယ်','ဆိုင်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆရာဝန်',o:['doctor','teacher','nurse','medicine'],a:0},
{t:'mc',q:'ဗိုက်ဆာတယ် vs ဗိုက်နာတယ် —',o:['hungry vs stomach-ache','stomach-ache vs hungry','both hungry','both hurt'],a:0},
{t:'li',q:'Listen — which one?',say:'နေမကောင်းဘူး',o:['နေမကောင်းဘူး','နေကောင်းပါတယ်','နေကောင်းလား','မကောင်းဘူး'],a:0},
{t:'mc',q:'ဆေး (medicine) vs ဈေး (market) differ in…',o:['the first letter — hs vs z','nothing','the vowel','the tone only'],a:0}]},
{id:'my_body_3',title:'Put it together',step:'build',meta:'Explain what hurts',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ခေါင်း','head'],['ဗိုက်','stomach'],['ဆေး','medicine'],['ဆရာဝန်','doctor']]},
{t:'wb',q:'Build: I have a headache (man speaking)',a:['ကျွန်တော်','ခေါင်းကိုက်တယ်'],pool:['ကျွန်တော်','ခေါင်းကိုက်တယ်','ဗိုက်နာတယ်']},
{t:'mc',q:'You feel awful. Tell your friend…',o:['နေမကောင်းဘူး','နေကောင်းပါတယ်','ကောင်းတယ်','ပျော်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဗိုက်နာတယ်',o:['ဗိုက်နာတယ်','ဗိုက်ဆာတယ်','ခေါင်းကိုက်တယ်','နာတယ်'],a:0},
{t:'wb',q:'Build: Medicine, please',a:['ဆေး','ပေးပါ'],pool:['ဆေး','ပေးပါ','ဈေး']},
{t:'match',q:'Match line and meaning',pairs:[['ခေါင်းကိုက်တယ်','headache'],['ဗိုက်နာတယ်','stomach hurts'],['နေမကောင်းဘူး','not feeling well'],['ဆေး','medicine']]}]},
{id:'my_body_4',title:'Mix it',step:'mix',meta:'A visit to the doctor',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဗိုက်နာတယ်',o:['stomach hurts','is hungry','head aches','is unwell'],a:0},
{t:'li',q:'Listen — which one?',say:'ခေါင်းကိုက်တယ်',o:['ခေါင်းကိုက်တယ်','ဗိုက်နာတယ်','ခေါင်း','ကိုက်တယ်'],a:0},
{t:'mc',q:'Who do you see when ဆေး is not enough?',o:['ဆရာဝန်','ဆရာ','အစ်ကို','ဒေါ်'],a:0},
{t:'wb',q:'Build: I am not feeling well (woman speaking)',a:['ကျွန်မ','နေမကောင်းဘူး'],pool:['ကျွန်မ','နေမကောင်းဘူး','နေကောင်းပါတယ်']},
{t:'li',q:'Listen — which one?',say:'ဗိုက်',o:['ဗိုက်','ခေါင်း','ဆေး','ကိုက်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဗိုက်','stomach'],['ခေါင်း','head'],['ဆရာဝန်','doctor'],['နေမကောင်းဘူး','not feeling well']]}]},
{id:'my_body_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 6 complete!',vocab:[],ex:[
{t:'mc',q:'Which means "doctor"?',o:['ဆရာဝန်','ဆရာမ','ဆေး','ဦး'],a:0},
{t:'li',q:'Listen — which one?',say:'နေမကောင်းဘူး',o:['နေမကောင်းဘူး','နေကောင်းလား','မကောင်းဘူး','နေကောင်းပါတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆေး',o:['medicine','market','shop','pain'],a:0},
{t:'wb',q:'Build: My head aches — head bites',a:['ခေါင်း','ကိုက်တယ်'],pool:['ခေါင်း','ကိုက်တယ်','နာတယ်']},
{t:'mc',q:'The flip of နေကောင်းလား when you are ill:',o:['နေမကောင်းဘူး','နေကောင်းပါတယ်','မသိဘူး','ဝမ်းနည်းတယ်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ခေါင်း','head'],['ဗိုက်','stomach'],['ဆေး','medicine'],['ဆရာဝန်','doctor']]}]},
];

/* ---------- per-language art (secular: dramatic Hpa-an-style karst limestone
   peaks over a misty Inle lake, forested foothills with soft reflections, and a
   lone leg-rowing fisherman — NO pagodas/temples, per the art rule).
   The left/center stays OPEN WATER so the "Learn Burmese" title reads clear
   (CLAUDE.md title-zone rule); the karst cluster lives right of x≈700, still
   visible beside the title on the phone crop. The fisherman, birds & reeds
   carry the `art-detail` class and are hidden ≤560px to keep mobile calm. */
const MY_HERO='<circle class="orb-glow" cx="1120" cy="118" r="52"/><circle class="orb" cx="1120" cy="118" r="33"/><g class="hero-stars" aria-hidden="true"><circle cx="130" cy="60" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="250" cy="108" r="1.2"/><circle cx="366" cy="48" r="2"/><circle cx="478" cy="124" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="566" cy="72" r="1.6"/><circle cx="684" cy="42" r="1.3" class="tw" style="animation-delay:.6s"/><circle cx="792" cy="114" r="1.8"/><circle cx="864" cy="150" r="1.3"/><circle cx="1092" cy="120" r="1.4"/><circle cx="1136" cy="46" r="1.2"/><circle cx="180" cy="140" r="1.5"/><circle cx="326" cy="152" r="1.3" class="tw" style="animation-delay:2.3s"/><circle cx="626" cy="136" r="1.5"/></g><g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g><g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g><g class="art-detail" fill="none" stroke="var(--mtn-mid)" stroke-width="1.8" stroke-linecap="round" opacity=".5" aria-hidden="true"><path d="M150 92 q6 -5 12 0 q6 -5 12 0"/><path d="M210 108 q5 -4.5 10 0 q5 -4.5 10 0"/><path d="M96 120 q5 -4.5 10 0 q5 -4.5 10 0"/></g><path class="far" d="M90 236 C105.4 226.8 125.0 222.7 160.0 222.0 C195.0 222.7 214.6 226.8 230 236 Z M280 236 C297.6 222.8 320.0 217.0 360.0 216.0 C400.0 217.0 422.4 222.8 440 236 Z M490 236 C503.2 227.4 520.0 223.7 550.0 223.0 C580.0 223.7 596.8 227.4 610 236 Z"/><path class="far" d="M0 236 L670 236 C680.0 189.2 697.5 161.9 720.0 158.0 C745.0 186.6 747.0 210.0 755.0 210.0 C763.0 210.0 761.0 155.1 790.0 88.0 C819.0 155.1 824.5 210.0 832.5 210.0 C840.5 210.0 851.0 181.2 875.0 146.0 C899.0 181.2 904.5 210.0 912.5 210.0 C920.5 210.0 914.0 147.9 950.0 72.0 C986.0 147.9 984.5 210.0 992.5 210.0 C1000.5 210.0 1009.0 177.6 1035.0 138.0 C1061.0 177.6 1059.5 210.0 1067.5 210.0 C1075.5 210.0 1079.0 164.1 1100.0 108.0 C1118.9 114.4 1133.6 159.2 1142 236 L1200 236 L1200 320 L0 320 Z"/><g class="snow" opacity=".25"><ellipse cx="350" cy="232" rx="240" ry="10"/></g><g class="snow" opacity=".33"><ellipse cx="910" cy="228" rx="250" ry="15"/><ellipse cx="1080" cy="230" rx="110" ry="12"/></g><g class="mid" opacity=".16"><path d="M754 238 C765.6 252.0 777.2 266.0 790.0 266.0 C802.8 266.0 814.4 252.0 826 238 Z"/><path d="M905 238 C919.8 258.0 934.2 278.0 950.0 278.0 C965.8 278.0 980.2 258.0 995 238 Z"/></g><g class="mid"><path d="M425 274 C431.6 260.8 440.0 255.0 455.0 254.0 C470.0 255.0 478.4 260.8 485 274 Z"/><path d="M581 274 C588.5 259.5 598.0 253.1 615.0 252.0 C632.0 253.1 641.5 259.5 649 274 Z"/><path d="M700 238 C713.2 190.5 730.0 169.6 760.0 166.0 C790.0 169.6 806.8 190.5 820 238 Z"/><path d="M873 238 C891.0 179.9 914.0 154.4 955.0 150.0 C996.0 154.4 1019.0 179.9 1037 238 Z"/><path d="M1040 238 C1051.0 194.4 1065.0 175.3 1090.0 172.0 C1115.0 175.3 1129.0 194.4 1140 238 Z"/></g><g class="snow" opacity=".5"><rect x="150" y="266" width="120" height="3" rx="1.5"/><rect x="360" y="278" width="150" height="3" rx="1.5"/><rect x="620" y="270" width="110" height="3" rx="1.5"/><rect x="820" y="282" width="130" height="3" rx="1.5"/><rect x="1030" y="268" width="90" height="3" rx="1.5"/></g><g class="mid art-detail"><path d="M148 283 Q222 273 296 281 L290 290 Q222 282 154 290 Z"/><circle cx="256" cy="245" r="4.6"/><path d="M251 250 L260 249 L264 272 L255 273 Z"/><path d="M257 272 L255 282 L260 282 L263 272 Z"/><path d="M261 256 L279 250 L280.3 253 L262 259 Z"/><path d="M279 250 L294 288 L290.5 289.3 L276 253 Z"/><path d="M258 260 L242 272 L244 275 L260 263 Z"/></g><g class="near"><path d="M0 320 L0 302 Q200 293 400 300 Q640 309 880 298 Q1040 291 1200 300 L1200 320 Z"/><path class="art-detail" d="M70 303 L75 285 L78 297 L82 283 L85 298 L90 288 L93 305 Z"/><path class="art-detail" d="M1120 301 L1125 284 L1128 296 L1132 282 L1135 297 L1140 287 L1142 303 Z"/></g>';
const MY_BAND='<circle class="orb-glow" cx="950" cy="84" r="30"/><circle class="orb" cx="950" cy="84" r="18"/><path class="far" d="M176 152 C190.1 144.1 208.0 140.6 240.0 140.0 C272.0 140.6 289.9 144.1 304 152 Z M404 152 C418.5 142.1 437.0 137.8 470.0 137.0 C503.0 137.8 521.5 142.1 536 152 Z"/><path class="far" d="M0 152 L778 152 C788.4 105.2 806.6 77.9 830.0 74.0 C856.0 105.9 862.0 132.0 870.0 132.0 C878.0 132.0 888.0 120.3 910.0 106.0 C932.0 120.3 939.5 132.0 947.5 132.0 C955.5 132.0 955.0 98.7 985.0 58.0 C1015.0 98.7 1017.0 132.0 1025.0 132.0 C1033.0 132.0 1042.0 117.6 1065.0 100.0 C1085.7 102.6 1101.8 120.8 1111 152 L1200 152 L1200 200 L0 200 Z"/><g class="snow" opacity=".3"><ellipse cx="950" cy="146" rx="200" ry="9"/></g><g class="mid"><path d="M808 154 C819.4 135.5 834.0 127.4 860.0 126.0 C886.0 127.4 900.6 135.5 912 154 Z"/><path d="M960 154 C973.2 131.6 990.0 121.7 1020.0 120.0 C1050.0 121.7 1066.8 131.6 1080 154 Z"/></g><g class="snow" opacity=".45"><rect x="220" y="168" width="120" height="2.5" rx="1.25"/><rect x="470" y="174" width="110" height="2.5" rx="1.25"/><rect x="680" y="180" width="90" height="2.5" rx="1.25"/></g><g class="mid art-detail"><path d="M522 180 Q580 171 640 178 L635 187 Q580 178 527 187 Z"/><circle cx="584" cy="151" r="3.6"/><path d="M581 155 L588 155 L590 178 L583 178 Z"/><path d="M588 160 L609 152 L610.3 155 L589 163 Z"/><path d="M609 152 L622 187 L618.5 188.3 L605.5 154 Z"/></g><g class="near"><path d="M0 200 L0 188 Q200 181 400 186 Q650 191 900 184 Q1050 181 1200 187 L1200 200 Z"/><path class="art-detail" d="M120 189 L124 175 L127 183 L131 173 L134 184 L138 177 L140 190 Z"/></g>';
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
