/* ===== BURMESE (MYANMAR) LANGUAGE PACK (12 zones · 84 topics · 420 lessons) =====
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
  {n:7,t:'Then & now',d:'Past ခဲ့, right-now နေ, ever ဖူး, can & must',lessons:['my_past','my_past_2','my_past_3','my_past_4','my_past_5','my_prog','my_prog_2','my_prog_3','my_prog_4','my_prog_5','my_ever','my_ever_2','my_ever_3','my_ever_4','my_ever_5','my_pri','my_pri_2','my_pri_3','my_pri_4','my_pri_5','my_can','my_can_2','my_can_3','my_can_4','my_can_5','my_must','my_must_2','my_must_3','my_must_4','my_must_5','my_req','my_req_2','my_req_3','my_req_4','my_req_5']},
  {n:8,t:'Out & about',d:'Rides, directions, tickets, hotel & the calendar',lessons:['my_go','my_go_2','my_go_3','my_go_4','my_go_5','my_dir','my_dir_2','my_dir_3','my_dir_4','my_dir_5','my_farnear','my_farnear_2','my_farnear_3','my_farnear_4','my_farnear_5','my_tik','my_tik_2','my_tik_3','my_tik_4','my_tik_5','my_hotel','my_hotel_2','my_hotel_3','my_hotel_4','my_hotel_5','my_month','my_month_2','my_month_3','my_month_4','my_month_5','my_phone','my_phone_2','my_phone_3','my_phone_4','my_phone_5']},
  {n:9,t:'Say more',d:'But, because, if — thinking, jobs & getting help',lessons:['my_conj','my_conj_2','my_conj_3','my_conj_4','my_conj_5','my_if','my_if_2','my_if_3','my_if_4','my_if_5','my_think','my_think_2','my_think_3','my_think_4','my_think_5','my_job','my_job_2','my_job_3','my_job_4','my_job_5','my_hobby','my_hobby_2','my_hobby_3','my_hobby_4','my_hobby_5','my_home','my_home_2','my_home_3','my_home_4','my_home_5','my_help','my_help_2','my_help_3','my_help_4','my_help_5']},
  {n:10,t:'Your Burmese life',d:'Family, age, not-yet သေး, languages & your day',lessons:['my_deg','my_deg_2','my_deg_3','my_deg_4','my_deg_5','my_fam2','my_fam2_2','my_fam2_3','my_fam2_4','my_fam2_5','my_age','my_age_2','my_age_3','my_age_4','my_age_5','my_yet','my_yet_2','my_yet_3','my_yet_4','my_yet_5','my_lang','my_lang_2','my_lang_3','my_lang_4','my_lang_5','my_now','my_now_2','my_now_3','my_now_4','my_now_5','my_story','my_story_2','my_story_3','my_story_4','my_story_5']},
  {n:11,t:'Little extras',d:'Need, pace, the longyi, animals & nature',lessons:['my_need','my_need_2','my_need_3','my_need_4','my_need_5','my_manner','my_manner_2','my_manner_3','my_manner_4','my_manner_5','my_wear','my_wear_2','my_wear_3','my_wear_4','my_wear_5','my_animal','my_animal_2','my_animal_3','my_animal_4','my_animal_5','my_nature','my_nature_2','my_nature_3','my_nature_4','my_nature_5','my_mem','my_mem_2','my_mem_3','my_mem_4','my_mem_5','my_together','my_together_2','my_together_3','my_together_4','my_together_5']},
  {n:12,t:'Make Myanmar home',d:'Lakhs, errands, guests, fruit & the polite polish',lessons:['my_lakh','my_lakh_2','my_lakh_3','my_lakh_4','my_lakh_5','my_ord','my_ord_2','my_ord_3','my_ord_4','my_ord_5','my_errand','my_errand_2','my_errand_3','my_errand_4','my_errand_5','my_feel2','my_feel2_2','my_feel2_3','my_feel2_4','my_feel2_5','my_visit','my_visit_2','my_visit_3','my_visit_4','my_visit_5','my_fruit','my_fruit_2','my_fruit_3','my_fruit_4','my_fruit_5','my_cap','my_cap_2','my_cap_3','my_cap_4','my_cap_5']},
];

const MY_SYM={my_c1:'က',my_c2:'စ',my_c3:'တ',my_c4:'ပ',my_c5:'သ',my_v1:'ကာ',my_v2:'ရေ',my_greet:'နေ',my_pron:'သူ',my_num1:'၅',my_num2:'၂၀',my_court:'ဟုတ်',my_intro:'နာမည်',my_day:'မနက်',my_this:'ဒါ',my_verb:'တယ်',my_fut:'မယ်',my_neg:'ဘူး',my_yn:'လား',my_wh:'လဲ',my_want:'ချင်',my_hma:'မှာ',my_ko:'ကို',my_ka:'ဘယ်က',my_neh:'နဲ့',my_kin:'ဦး',my_food:'ဟင်း',my_shop:'ဆိုင်',my_clf:'ယောက်',my_hownum:'ဘယ်နှ',my_money:'ကျပ်',my_bignum:'ထောင်',my_buy:'ဝယ်',my_time:'နာရီ',my_days:'စနေ',my_adj:'ကြီး',my_taste:'ပူ',my_color:'အနီ',my_cmp:'ပို',my_feel:'ပျော်',my_wx:'မိုး',my_body:'ဆေး',my_past:'ခဲ့',my_prog:'နေတယ်',my_ever:'ဖူး',my_pri:'ပြီ',my_can:'နိုင်',my_must:'ရမယ်',my_req:'ပါ',my_go:'ကား',my_dir:'ညာ',my_farnear:'ဝေး',my_tik:'ဘူတာ',my_hotel:'အခန်း',my_month:'လ',my_phone:'ဖုန်း',my_conj:'လို့',my_if:'ရင်',my_think:'ထင်',my_job:'အလုပ်',my_hobby:'ဘောလုံး',my_home:'အိမ်',my_help:'ကူညီ',my_deg:'အရမ်း',my_fam2:'အမေ',my_age:'အသက်',my_yet:'သေး',my_lang:'စကား',my_now:'အခု',my_story:'အရင်',my_need:'လို',my_manner:'မြန်',my_wear:'ဝတ်',my_animal:'ခွေး',my_nature:'တောင်',my_mem:'မေ့',my_together:'အတူ',my_lakh:'သိန်း',my_ord:'ပထမ',my_errand:'ဘဏ်',my_feel2:'စိတ်',my_visit:'ဧည့်',my_fruit:'သီး',my_cap:'နော်'};

const MY_VOWELS=[['အာ','aa'],['အိ','i'],['အီ','ii'],['အု','u'],['အူ','uu'],['အေ','e'],['အဲ','eh'],['အော','aw'],['အို','o'],['အံ','an']];
/* full traditional 33 for the Alphabet reference. Several are rare Pali-only
   twins (ဃ ဈ ဋ ဌ ဍ ဎ ဏ ဓ ဘ ဠ) that share a sound with a common letter and are
   never taught in the lessons. Note: ဎ (U+100E) has no recorded clip — edge-tts
   returns no audio for it — so it gracefully falls back to device TTS. */
const MY_CONS=[['က','ka'],['ခ','hka'],['ဂ','ga'],['ဃ','ga'],['င','nga'],['စ','sa'],['ဆ','hsa'],['ဇ','za'],['ဈ','za'],['ည','nya'],['ဋ','ta'],['ဌ','hta'],['ဍ','da'],['ဎ','da'],['ဏ','na'],['တ','ta'],['ထ','hta'],['ဒ','da'],['ဓ','da'],['န','na'],['ပ','pa'],['ဖ','hpa'],['ဗ','ba'],['ဘ','ba'],['မ','ma'],['ယ','ya'],['ရ','ya'],['လ','la'],['ဝ','wa'],['သ','tha'],['ဟ','ha'],['ဠ','la'],['အ','a']];
const MY_NUMS=[['၀','0'],['၁','1'],['၂','2'],['၃','3'],['၄','4'],['၅','5'],['၆','6'],['၇','7'],['၈','8'],['၉','9']];
const MY_SRS_SEED=[['မင်္ဂလာပါ','Mingalaba','Hello'],['ကျေးဇူးတင်ပါတယ်','Kyeizu tin ba de','Thank you'],['ဟုတ်ကဲ့','Houq keh','Yes'],['မဟုတ်ဘူး','Mahouq bu','No'],['ရေ','Ye','Water'],['ထမင်း','Htamin','Rice / meal'],['လူ','Lu','Person'],['ကောင်း','Kaung','Good'],['ကြီး','Kyi','Big'],['ငယ်','Ngeh','Small / young'],['ဒီနေ့','Di neh','Today'],['ပျော်','Pyaw','Happy'],['လက်ဖက်ရည်','Lahpeq yeh','Tea'],['ကျွန်တော်','Kyanaw','I (man speaking)'],['ကျွန်မ','Kyama','I (woman speaking)']];

const MY_LESSONS=[
/* ===================== ZONE 1 · THE SCRIPT ===================== */
/* --- Topic 1: velars က ခ ဂ င --- */
{id:'my_c1',title:'First letters',step:'learn',meta:'က ခ ဂ င & how Burmese works',vocab:[['က','ka','consonant: k'],['ခ','hka','consonant: k with a puff'],['ဂ','ga','consonant: g'],['င','nga','consonant: ng']],ex:[
{t:'note',tag:'Start here',q:'Meet Burmese script',body:'<p>Burmese is written in round, bubbly letters called <b>မြန်မာအက္ခရာ</b>, left to right. Spaces separate <b>phrases</b>, not every word. You will never type — you just <b>listen and tap</b>.</p><p>Every consonant carries a built-in <b>"a"</b> sound, so the very first letter <span class="deva">က</span> is already read <b>ka</b>.</p>',tip:'Tap the speaker on any letter to hear it.'},
{t:'note',tag:'A puff of air',q:'က and ခ',body:'<p><span class="deva">က</span> = <b>ka</b> — a plain k.</p><p><span class="deva">ခ</span> = <b>hka</b> — the same k but said with a <b>puff of air</b>. In this course, an <b>h before a letter</b> means "add a puff": hk, hs, ht, hp.</p>',eg:[['က','ka','plain k'],['ခ','hka','k + a puff']]},
{t:'mc',q:'What sound does this letter make?',d:'က',o:['ka','hka','ga','nga'],a:0},
{t:'mc',q:'And this one?',d:'ခ',o:['hka','ka','ga','nga'],a:0},
{t:'note',tag:'Voice it',q:'ဂ and င',body:'<p><span class="deva">ဂ</span> = <b>ga</b>, like the g in "go".</p><p><span class="deva">င</span> = <b>nga</b> — the ng of "sing". In Burmese it can even <b>start</b> a word.</p>',eg:[['ဂ','ga','g as in go'],['င','nga','ng as in sing']]},
{t:'mc',q:'What sound does this letter make?',d:'ဂ',o:['ga','ka','hka','nga'],a:0},
{t:'mc',q:'Which letter is the ng sound?',d:'င',o:['nga','ga','ka','hka'],a:0}]},
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
{t:'mc',q:'What sound does this letter make?',d:'င',o:['nga','ga','ka','hka'],a:0},
{t:'li',q:'Listen — which letter?',say:'က',o:['က','ခ','ဂ','င'],a:0},
{t:'mc',q:'Which is the puffed (aspirated) k?',o:['ခ','က','ဂ','င'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဂ',o:['ga','ka','nga','hka'],a:0},
{t:'li',q:'Listen — which letter?',say:'ခ',o:['ခ','က','ဂ','င'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['က','ka'],['ဂ','ga'],['င','nga'],['ခ','hka']]},
{t:'mc',q:'Every Burmese consonant has a built-in…',o:['"a" sound','tone mark','space after it','capital form'],a:0}]},
{id:'my_c1_5',title:'Checkpoint',step:'checkpoint',meta:'က ခ ဂ င mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'က',o:['ka','ga','hka','nga'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဂ',o:['ဂ','ခ','င','က'],a:0},
{t:'mc',q:'Which letter says nga?',o:['င','ဂ','က','ခ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ခ',o:['hka','ka','ga','nga'],a:0},
{t:'li',q:'Listen — which letter?',say:'င',o:['င','က','ဂ','ခ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['က','ka'],['ခ','hka'],['ဂ','ga'],['င','nga']]}]},

/* --- Topic 2: sibilants စ ဆ ဇ ည --- */
{id:'my_c2',title:'The s family',step:'learn',meta:'စ ဆ ဇ ည',vocab:[['စ','sa','consonant: s'],['ဆ','hsa','consonant: s with a puff'],['ဇ','za','consonant: z'],['ည','nya','consonant: ny']],ex:[
{t:'note',tag:'Hiss it',q:'စ and ဆ',body:'<p><span class="deva">စ</span> = <b>sa</b>, the s of "see".</p><p><span class="deva">ဆ</span> = <b>hsa</b> — s said with a <b>puff of air</b> (there is our h again).</p>',eg:[['စ','sa','s as in see'],['ဆ','hsa','s + a puff']]},
{t:'mc',q:'What sound does this letter make?',d:'စ',o:['sa','hsa','za','nya'],a:0},
{t:'mc',q:'And this one?',d:'ဆ',o:['hsa','sa','za','nya'],a:0},
{t:'note',tag:'Buzz & nose',q:'ဇ and ည',body:'<p><span class="deva">ဇ</span> = <b>za</b>, the z of "zoo" — it buzzes.</p><p><span class="deva">ည</span> = <b>nya</b>, like the "ni" in "onion".</p>',eg:[['ဇ','za','z as in zoo'],['ည','nya','ny as in onion']]},
{t:'mc',q:'What sound does this letter make?',d:'ဇ',o:['za','sa','hsa','nya'],a:0},
{t:'mc',q:'Which letter is the ny sound?',d:'ည',o:['nya','za','sa','hsa'],a:0}]},
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
{t:'mc',q:'What sound does this letter make?',d:'ည',o:['nya','za','sa','hsa'],a:0},
{t:'li',q:'Listen — which letter?',say:'စ',o:['စ','ဆ','ဇ','ည'],a:0},
{t:'mc',q:'Which is the puffed (aspirated) s?',o:['ဆ','စ','ဇ','ည'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဇ',o:['za','sa','nya','hsa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဆ',o:['ဆ','စ','ဇ','ည'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['စ','sa'],['ဇ','za'],['ည','nya'],['ဆ','hsa']]}]},
{id:'my_c2_5',title:'Checkpoint',step:'checkpoint',meta:'စ ဆ ဇ ည mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'စ',o:['sa','za','hsa','nya'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဇ',o:['ဇ','ဆ','ည','စ'],a:0},
{t:'mc',q:'Which letter says nya?',o:['ည','ဇ','စ','ဆ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဆ',o:['hsa','sa','za','nya'],a:0},
{t:'li',q:'Listen — which letter?',say:'ည',o:['ည','စ','ဇ','ဆ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['စ','sa'],['ဆ','hsa'],['ဇ','za'],['ည','nya']]}]},

/* --- Topic 3: dentals တ ထ ဒ န --- */
{id:'my_c3',title:'T, D & N',step:'learn',meta:'တ ထ ဒ န',vocab:[['တ','ta','consonant: t'],['ထ','hta','consonant: t with a puff'],['ဒ','da','consonant: d'],['န','na','consonant: n']],ex:[
{t:'note',tag:'Tongue on teeth',q:'တ and ထ',body:'<p><span class="deva">တ</span> = <b>ta</b>.</p><p><span class="deva">ထ</span> = <b>hta</b> — t said with a <b>puff of air</b>.</p>',eg:[['တ','ta','t'],['ထ','hta','t + a puff']]},
{t:'mc',q:'What sound does this letter make?',d:'တ',o:['ta','hta','da','na'],a:0},
{t:'mc',q:'And this one?',d:'ထ',o:['hta','ta','da','na'],a:0},
{t:'note',tag:'Voice & nose',q:'ဒ and န',body:'<p><span class="deva">ဒ</span> = <b>da</b>. <span class="deva">န</span> = <b>na</b>.</p><p>Heads-up: Burmese has a second, rounder set of these letters (<span class="deva">ဋ ဌ ဍ ဎ ဏ</span>) borrowed from Pali. They are <b>rare and sound the same</b> — learn <span class="deva">တ ထ ဒ န</span> first.</p>',eg:[['ဒ','da','d'],['န','na','n']]},
{t:'mc',q:'What sound does this letter make?',d:'ဒ',o:['da','ta','hta','na'],a:0},
{t:'mc',q:'Which letter says na?',d:'န',o:['na','da','ta','hta'],a:0}]},
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
{t:'mc',q:'What sound does this letter make?',d:'န',o:['na','da','ta','hta'],a:0},
{t:'li',q:'Listen — which letter?',say:'တ',o:['တ','ထ','ဒ','န'],a:0},
{t:'mc',q:'Which is the puffed (aspirated) t?',o:['ထ','တ','ဒ','န'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဒ',o:['da','ta','na','hta'],a:0},
{t:'li',q:'Listen — which letter?',say:'ထ',o:['ထ','တ','ဒ','န'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['တ','ta'],['ဒ','da'],['န','na'],['ထ','hta']]}]},
{id:'my_c3_5',title:'Checkpoint',step:'checkpoint',meta:'တ ထ ဒ န mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'တ',o:['ta','da','hta','na'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဒ',o:['ဒ','ထ','န','တ'],a:0},
{t:'mc',q:'Which letter says na?',o:['န','ဒ','တ','ထ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ထ',o:['hta','ta','da','na'],a:0},
{t:'li',q:'Listen — which letter?',say:'န',o:['န','တ','ဒ','ထ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['တ','ta'],['ထ','hta'],['ဒ','da'],['န','na']]}]},

/* --- Topic 4: labials ပ ဖ ဗ မ --- */
{id:'my_c4',title:'P, B & M',step:'learn',meta:'ပ ဖ ဗ မ',vocab:[['ပ','pa','consonant: p'],['ဖ','hpa','consonant: p with a puff'],['ဗ','ba','consonant: b'],['မ','ma','consonant: m']],ex:[
{t:'note',tag:'Lips together',q:'ပ and ဖ',body:'<p><span class="deva">ပ</span> = <b>pa</b>.</p><p><span class="deva">ဖ</span> = <b>hpa</b> — p with a <b>puff of air</b>. It is NOT an "f" — the h just means the puff.</p>',eg:[['ပ','pa','p'],['ဖ','hpa','p + a puff']]},
{t:'mc',q:'What sound does this letter make?',d:'ပ',o:['pa','hpa','ba','ma'],a:0},
{t:'mc',q:'And this one?',d:'ဖ',o:['hpa','pa','ba','ma'],a:0},
{t:'note',tag:'Voice & hum',q:'ဗ and မ',body:'<p><span class="deva">ဗ</span> = <b>ba</b>. <span class="deva">မ</span> = <b>ma</b>.</p><p>(There is also a rare Pali twin of ba, <span class="deva">ဘ</span> — same sound, seldom needed.)</p>',eg:[['ဗ','ba','b'],['မ','ma','m']]},
{t:'mc',q:'What sound does this letter make?',d:'ဗ',o:['ba','pa','hpa','ma'],a:0},
{t:'mc',q:'Which letter says ma?',d:'မ',o:['ma','ba','pa','hpa'],a:0}]},
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
{t:'mc',q:'What sound does this letter make?',d:'မ',o:['ma','ba','pa','hpa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ပ',o:['ပ','ဖ','ဗ','မ'],a:0},
{t:'mc',q:'Which is the puffed (aspirated) p?',o:['ဖ','ပ','ဗ','မ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဗ',o:['ba','pa','ma','hpa'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဖ',o:['ဖ','ပ','ဗ','မ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ပ','pa'],['ဗ','ba'],['မ','ma'],['ဖ','hpa']]}]},
{id:'my_c4_5',title:'Checkpoint',step:'checkpoint',meta:'ပ ဖ ဗ မ mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ပ',o:['pa','ba','hpa','ma'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဗ',o:['ဗ','ဖ','မ','ပ'],a:0},
{t:'mc',q:'Which letter says ma?',o:['မ','ဗ','ပ','ဖ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဖ',o:['hpa','pa','ba','ma'],a:0},
{t:'li',q:'Listen — which letter?',say:'မ',o:['မ','ပ','ဗ','ဖ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ပ','pa'],['ဖ','hpa'],['ဗ','ba'],['မ','ma']]}]},

/* --- Topic 5: the remaining consonants ယ ရ လ ဝ သ ဟ အ --- */
{id:'my_c5',title:'The last letters',step:'learn',meta:'ယ ရ လ ဝ သ ဟ အ',vocab:[['ယ','ya','consonant: y'],['ရ','ya','consonant: y (the old ra)'],['လ','la','consonant: l'],['ဝ','wa','consonant: w'],['သ','tha','consonant: th (as in thin)'],['ဟ','ha','consonant: h'],['အ','a','the vowel-carrier a']],ex:[
{t:'note',tag:'Gliding letters',q:'ယ ရ လ ဝ',body:'<p><span class="deva">ယ</span> = <b>ya</b>. <span class="deva">ရ</span> = also <b>ya</b> — it is the old "ra", now said ya. <span class="deva">လ</span> = <b>la</b>. <span class="deva">ဝ</span> = <b>wa</b>.</p>',eg:[['ယ','ya','y'],['ရ','ya','y (old ra)'],['လ','la','l'],['ဝ','wa','w']]},
{t:'mc',q:'What sound does this letter make?',d:'လ',o:['la','ya','wa','ha'],a:0},
{t:'mc',q:'And this one?',d:'ဝ',o:['wa','la','ya','ha'],a:0},
{t:'note',tag:'The special three',q:'သ ဟ အ',body:'<p><span class="deva">သ</span> = <b>tha</b> — the <b>th</b> of "thin" (never a hard t!).</p><p><span class="deva">ဟ</span> = <b>ha</b>. <span class="deva">အ</span> = <b>a</b> — a carrier that simply holds a bare vowel.</p>',eg:[['သ','tha','th as in thin'],['ဟ','ha','h'],['အ','a','a (carrier)']]},
{t:'mc',q:'Which letter is the "th" sound (as in thin)?',d:'သ',o:['tha','ta','sa','ha'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဟ',o:['ha','la','wa','a'],a:0}]},
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
{t:'mc',q:'What sound does this letter make?',d:'အ',o:['a','ha','wa','la'],a:0}]},
{id:'my_c5_4',title:'Mix it',step:'mix',meta:'All seven together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'သ',o:['tha','ta','sa','ha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဟ',o:['ဟ','ဝ','လ','သ'],a:0},
{t:'mc',q:'Which letter is the old "ra", now said ya?',o:['ရ','ယ','လ','ဝ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဝ',o:['wa','ya','la','ha'],a:0},
{t:'li',q:'Listen — which letter?',say:'လ',o:['လ','ဟ','သ','ဝ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['သ','tha'],['ဟ','ha'],['အ','a'],['ဝ','wa']]},
{t:'mc',q:'The letter သ is easy to read as a "t", but it is really…',o:['th as in thin','a hard t','an s','silent'],a:0}]},
{id:'my_c5_5',title:'Checkpoint',step:'checkpoint',meta:'ယ ရ လ ဝ သ ဟ အ mastered?',vocab:[],ex:[
{t:'mc',q:'Which letter says tha?',o:['သ','ဟ','ဝ','လ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ဝ',o:['ဝ','ဟ','လ','သ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ဟ',o:['ha','la','wa','tha'],a:0},
{t:'mc',q:'Which letter says la?',o:['လ','ဝ','ဟ','အ'],a:0},
{t:'li',q:'Listen — which letter?',say:'သ',o:['သ','ဟ','ဝ','လ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ယ','ya'],['လ','la'],['ဝ','wa'],['သ','tha'],['ဟ','ha']]}]},

/* --- Topic 6: vowels on consonants --- */
{id:'my_v1',title:'Adding vowels',step:'learn',meta:'ကာ ကိ ကု ကေ ကို ကော',vocab:[['ကာ','kaa','k + long a'],['ကိ','ki','k + i'],['ကု','ku','k + u'],['ကေ','ke','k + e'],['ကို','ko','k + o'],['ကော','kaw','k + aw']],ex:[
{t:'note',tag:'Change the vowel',q:'The built-in "a"',body:'<p>Every consonant already says "a": <span class="deva">က</span> = <b>ka</b>. Add a <b>vowel sign</b> and that "a" changes.</p><p><span class="deva">ကာ</span> adds a little tail for a long <b>kaa</b>.</p>',eg:[['က','ka','built-in a'],['ကာ','kaa','long aa']]},
{t:'note',tag:'Signs all around',q:'ကိ ကု ကေ ကို ကော',body:'<p><span class="deva">ကိ</span> = <b>ki</b>, <span class="deva">ကု</span> = <b>ku</b>, <span class="deva">ကေ</span> = <b>ke</b>, <span class="deva">ကို</span> = <b>ko</b>, <span class="deva">ကော</span> = <b>kaw</b>.</p><p>A sign can sit above, below, before or after the letter — but you always read the <b>consonant first</b>, then the vowel.</p>',eg:[['ကိ','ki','i'],['ကု','ku','u'],['ကေ','ke','e'],['ကို','ko','o']]},
{t:'mc',q:'What does this say?',d:'ကာ',o:['kaa','ki','ku','ke'],a:0},
{t:'mc',q:'What does this say?',d:'ကု',o:['ku','ki','ke','ko'],a:0},
{t:'mc',q:'What does this say?',d:'ကေ',o:['ke','ku','ki','kaw'],a:0},
{t:'mc',q:'What does this say?',d:'ကို',o:['ko','ka','ku','ke'],a:0}]},
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
{t:'mc',q:'What does this say?',d:'ကော',o:['kaw','ko','kaa','ke'],a:0},
{t:'li',q:'Listen — which one?',say:'ကိ',o:['ကိ','ကု','ကေ','ကာ'],a:0},
{t:'mc',q:'Which is kaa (long a)?',o:['ကာ','ကု','ကေ','ကို'],a:0},
{t:'mc',q:'What does this say?',d:'ကေ',o:['ke','ki','ko','ku'],a:0},
{t:'li',q:'Listen — which one?',say:'ကို',o:['ကို','ကာ','ကေ','ကု'],a:0},
{t:'match',q:'Match syllable and sound',pairs:[['ကာ','kaa'],['ကု','ku'],['ကို','ko'],['ကော','kaw']]}]},
{id:'my_v1_5',title:'Checkpoint',step:'checkpoint',meta:'Vowels mastered?',vocab:[],ex:[
{t:'mc',q:'What does this say?',d:'ကာ',o:['kaa','ku','ke','ko'],a:0},
{t:'li',q:'Listen — which one?',say:'ကေ',o:['ကေ','ကာ','ကို','ကု'],a:0},
{t:'mc',q:'Which is ku?',o:['ကု','ကာ','ကိ','ကေ'],a:0},
{t:'mc',q:'What does this say?',d:'ကို',o:['ko','kaw','ka','ke'],a:0},
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

/* ===================== ZONE 7 · THEN & NOW =====================
   Time-depth & ability: past ခဲ့, happening-now နေ, ever ဖူး, already ပြီ,
   can နိုင် vs know-how တတ်, must ရ, polite requests verb+ပါ.
   Per Wikipedia Burmese grammar (verb particles) & Mesher L7 (have-ever). */
/* --- Topic 1: the past with ခဲ့ --- */
{id:'my_past',title:'Back then: ခဲ့',step:'learn',meta:'သွားခဲ့တယ် — yesterday & before',vocab:[['သွားခဲ့တယ်','thwa geh de','went'],['စားခဲ့တယ်','sa geh de','ate'],['လာခဲ့တယ်','la geh de','came'],['ဝယ်ခဲ့တယ်','weh geh de','bought'],['မနေ့ကသွားခဲ့တယ်','ma neh ga thwa geh de','went yesterday']],ex:[
{t:'note',tag:'Zone 7',q:'Time travel with ခဲ့',body:'<p>Here is a relief: <span class="deva">တယ်</span> already covers the past — <span class="deva">မနေ့က စားတယ်</span> "ate yesterday" is fine. But Burmese loves to mark "back then, over there" with <span class="deva">ခဲ့</span> <b>geh</b> slotted before the ending: <span class="deva">သွားခဲ့တယ်</span> — went.</p><p>It slots exactly where ချင် goes: verb + ခဲ့ + တယ်.</p>',eg:[['သွားခဲ့တယ်','thwa geh de','went'],['စားခဲ့တယ်','sa geh de','ate']]},
{t:'mc',q:'Which means "went"?',o:['သွားခဲ့တယ်','သွားတယ်','သွားမယ်','သွားချင်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'စားခဲ့တယ်',o:['ate','will eat','is eating','wants to eat'],a:0},
{t:'note',tag:'With yesterday',q:'မနေ့က + ခဲ့',body:'<p>Pair it with <span class="deva">မနေ့က</span> (yesterday — note the "from" particle က hiding in it!): <span class="deva">မနေ့ကသွားခဲ့တယ်</span> — "(I) went yesterday."</p><p>The negative wraps as always: <span class="deva">မသွားခဲ့ဘူး</span> — did not go.</p>',eg:[['မနေ့ကသွားခဲ့တယ်','ma neh ga thwa geh de','went yesterday'],['ဝယ်ခဲ့တယ်','weh geh de','bought']]},
{t:'mc',q:'Which means "bought"?',o:['ဝယ်ခဲ့တယ်','ဝယ်တယ်','ဝယ်မယ်','ရောင်းတယ်'],a:0},
{t:'mc',q:'"Did not go" is…',o:['မသွားခဲ့ဘူး','သွားခဲ့တယ်','မသွားဘူးခဲ့','သွားမယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားခဲ့တယ်',o:['သွားခဲ့တယ်','သွားတယ်','စားခဲ့တယ်','လာခဲ့တယ်'],a:0}]},
{id:'my_past_2',title:'Hear the past',step:'recognize',meta:'Then or now?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'စားခဲ့တယ်',o:['စားခဲ့တယ်','စားတယ်','သွားခဲ့တယ်','ဝယ်ခဲ့တယ်'],a:0},
{t:'mc',q:'Which means "came"?',o:['လာခဲ့တယ်','လာတယ်','လာမယ်','သွားခဲ့တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဝယ်ခဲ့တယ်',o:['ဝယ်ခဲ့တယ်','ဝယ်တယ်','သွားခဲ့တယ်','ရောင်းတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မနေ့ကသွားခဲ့တယ်',o:['went yesterday','will go tomorrow','goes today','went last year'],a:0},
{t:'mc',q:'ခဲ့ slots in…',o:['between the verb and its ending','at the very start','after တယ်','before the subject'],a:0},
{t:'li',q:'Listen — which one?',say:'လာခဲ့တယ်',o:['လာခဲ့တယ်','လာတယ်','စားခဲ့တယ်','သွားခဲ့တယ်'],a:0},
{t:'mc',q:'မနေ့က hides which little particle?',o:['က (from)','ကို (to)','မှာ (at)','နဲ့ (with)'],a:0}]},
{id:'my_past_3',title:'Put it together',step:'build',meta:'Tell what happened',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['သွားခဲ့တယ်','went'],['စားခဲ့တယ်','ate'],['လာခဲ့တယ်','came'],['ဝယ်ခဲ့တယ်','bought']]},
{t:'wb',q:'Build: (I) went to the market yesterday',a:['မနေ့က','ဈေး','ကို','သွားခဲ့တယ်'],pool:['မနေ့က','ဈေး','ကို','သွားခဲ့တယ်','သွားမယ်']},
{t:'mc',q:'Turn ဝယ်တယ် into "bought":',o:['ဝယ်ခဲ့တယ်','ဝယ်မယ်','ဝယ်ချင်တယ်','မဝယ်ဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'မနေ့ကသွားခဲ့တယ်',o:['မနေ့ကသွားခဲ့တယ်','သွားခဲ့တယ်','မနေ့က','သွားတယ်'],a:0},
{t:'wb',q:'Build: (She) ate fish curry yesterday',a:['မနေ့က','ငါးဟင်း','စားခဲ့တယ်'],pool:['မနေ့က','ငါးဟင်း','စားခဲ့တယ်','စားမယ်']},
{t:'match',q:'Match time and line',pairs:[['မနေ့က','yesterday'],['ဒီနေ့','today'],['မနက်ဖြန်','tomorrow'],['သွားခဲ့တယ်','went']]}]},
{id:'my_past_4',title:'Mix it',step:'mix',meta:'Past, present & future',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'လာခဲ့တယ်',o:['came','will come','comes','wants to come'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားတယ်',o:['သွားတယ်','သွားခဲ့တယ်','သွားမယ်','လာတယ်'],a:0},
{t:'mc',q:'Yesterday, today, tomorrow — went, go, will go:',o:['သွားခဲ့တယ် · သွားတယ် · သွားမယ်','သွားမယ် · သွားတယ် · သွားခဲ့တယ်','သွားတယ် · သွားမယ် · သွားခဲ့တယ်','all သွားတယ်'],a:0},
{t:'wb',q:'Build: (He) bought fruit yesterday',a:['မနေ့က','သစ်သီး','ဝယ်ခဲ့တယ်'],pool:['မနေ့က','သစ်သီး','ဝယ်ခဲ့တယ်','ဝယ်မယ်']},
{t:'li',q:'Listen — which one?',say:'စားခဲ့တယ်',o:['စားခဲ့တယ်','စားမယ်','ဝယ်ခဲ့တယ်','စားချင်တယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['သွားခဲ့တယ်','went'],['သွားတယ်','go'],['သွားမယ်','will go'],['မသွားခဲ့ဘူး','did not go']]}]},
{id:'my_past_5',title:'Checkpoint',step:'checkpoint',meta:'The past mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "ate"?',o:['စားခဲ့တယ်','စားတယ်','စားမယ်','စားနေတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဝယ်ခဲ့တယ်',o:['ဝယ်ခဲ့တယ်','ဝယ်တယ်','လာခဲ့တယ်','စားခဲ့တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မနေ့ကသွားခဲ့တယ်',o:['went yesterday','going today','will go tomorrow','never went'],a:0},
{t:'wb',q:'Build: (I) came yesterday',a:['မနေ့က','လာခဲ့တယ်'],pool:['မနေ့က','လာခဲ့တယ်','လာမယ်']},
{t:'mc',q:'The past marker that slots before တယ် is…',o:['ခဲ့','ချင်','နေ','ဖူး'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['စားခဲ့တယ်','ate'],['လာခဲ့တယ်','came'],['ဝယ်ခဲ့တယ်','bought'],['သွားခဲ့တယ်','went']]}]},

/* --- Topic 2: happening now with နေ --- */
{id:'my_prog',title:'Right now: နေ',step:'learn',meta:'စားနေတယ် — in the middle of it',vocab:[['စားနေတယ်','sa ne de','is eating'],['လုပ်နေတယ်','louq ne de','is doing / working'],['လာနေတယ်','la ne de','is coming'],['မိုးရွာနေတယ်','mo ywa ne de','it is raining (right now)'],['ဘာလုပ်နေလဲ','ba louq ne leh','what are you doing?']],ex:[
{t:'note',tag:'Caught in the act',q:'verb + နေ + တယ်',body:'<p>Remember <span class="deva">နေ</span> = stay? Slot it after a verb and the action is <b>going on right now</b>: <span class="deva">စားနေတယ်</span> — is eating (literally "eat-staying").</p><p><span class="deva">မိုးရွာနေတယ်</span> — it is raining, right now, look out the window.</p>',eg:[['စားနေတယ်','sa ne de','is eating'],['မိုးရွာနေတယ်','mo ywa ne de','raining right now']]},
{t:'mc',q:'Which means "is eating (now)"?',o:['စားနေတယ်','စားတယ်','စားခဲ့တယ်','စားမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လုပ်နေတယ်',o:['is doing / working','did','will do','must do'],a:0},
{t:'note',tag:'The classic question',q:'ဘာလုပ်နေလဲ',body:'<p>Now you can ask the most Burmese of questions: <span class="deva">ဘာလုပ်နေလဲ</span> <b>ba louq ne leh</b> — "What are you doing?"</p><p>Answer with any verb + နေတယ်: <span class="deva">ထမင်းစားနေတယ်</span> — eating!</p>',eg:[['ဘာလုပ်နေလဲ','ba louq ne leh','what are you doing?'],['လာနေတယ်','la ne de','is coming']]},
{t:'mc',q:'How do you ask "What are you doing?"',o:['ဘာလုပ်နေလဲ','ဘာစားမလဲ','ဘယ်မှာလဲ','ဘာလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'မိုးရွာနေတယ်',o:['it is raining right now','it rained','it will rain','the rainy season'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘာလုပ်နေလဲ',o:['ဘာလုပ်နေလဲ','လုပ်နေတယ်','ဘာစားမလဲ','ဘယ်သူလဲ'],a:0}]},
{id:'my_prog_2',title:'Hear it happening',step:'recognize',meta:'Now or in general?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'စားနေတယ်',o:['စားနေတယ်','စားတယ်','စားခဲ့တယ်','လုပ်နေတယ်'],a:0},
{t:'mc',q:'Which means "is coming"?',o:['လာနေတယ်','လာတယ်','လာခဲ့တယ်','လာမယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'မိုးရွာနေတယ်',o:['မိုးရွာနေတယ်','မိုးရွာတယ်','မိုးရာသီ','နေပူတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘာလုပ်နေလဲ',o:['what are you doing?','what did you do?','what will you do?','where are you?'],a:0},
{t:'mc',q:'The right-now marker နေ is the same word as…',o:['stay / live','sun','rain','go'],a:0},
{t:'li',q:'Listen — which one?',say:'လုပ်နေတယ်',o:['လုပ်နေတယ်','လုပ်တယ်','စားနေတယ်','လာနေတယ်'],a:0},
{t:'mc',q:'စားနေတယ် is literally…',o:['eat-staying','eat-going','eat-wanting','eat-finished'],a:0}]},
{id:'my_prog_3',title:'Put it together',step:'build',meta:'Say what is happening',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['စားနေတယ်','is eating'],['လုပ်နေတယ်','is working'],['လာနေတယ်','is coming'],['မိုးရွာနေတယ်','raining right now']]},
{t:'wb',q:'Build: What are you doing?',a:['ဘာ','လုပ်နေ','လဲ'],pool:['ဘာ','လုပ်နေ','လဲ','လား']},
{t:'mc',q:'Someone asks ဘာလုပ်နေလဲ while you eat. Reply…',o:['ထမင်းစားနေတယ်','ထမင်းစားမယ်','ထမင်းစားခဲ့တယ်','မစားဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'လာနေတယ်',o:['လာနေတယ်','လာတယ်','လုပ်နေတယ်','စားနေတယ်'],a:0},
{t:'wb',q:'Build: He is eating a meal now',a:['သူ','ထမင်း','စားနေတယ်'],pool:['သူ','ထမင်း','စားနေတယ်','စားခဲ့တယ်']},
{t:'match',q:'Match line and meaning',pairs:[['ဘာလုပ်နေလဲ','what are you doing?'],['စားနေတယ်','is eating'],['မိုးရွာနေတယ်','raining right now'],['လုပ်နေတယ်','is working']]}]},
{id:'my_prog_4',title:'Mix it',step:'mix',meta:'ခဲ့ and နေ together',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'လာနေတယ်',o:['is coming','came','will come','comes sometimes'],a:0},
{t:'li',q:'Listen — which one?',say:'မိုးရွာနေတယ်',o:['မိုးရွာနေတယ်','မိုးရွာတယ်','နေပူတယ်','မိုးရာသီ'],a:0},
{t:'mc',q:'Phone rings mid-meal. "I am eating!" =',o:['စားနေတယ်','စားခဲ့တယ်','စားမယ်','စားချင်တယ်'],a:0},
{t:'wb',q:'Build: It is raining right now — rain falls-staying',a:['မိုး','ရွာနေတယ်'],pool:['မိုး','ရွာနေတယ်','ရွာခဲ့တယ်']},
{t:'li',q:'Listen — which one?',say:'စားခဲ့တယ်',o:['စားခဲ့တယ်','စားနေတယ်','စားတယ်','လုပ်နေတယ်'],a:0},
{t:'match',q:'Match marker and meaning',pairs:[['ခဲ့','back then'],['နေ','right now'],['မယ်','future'],['ချင်','want to']]}]},
{id:'my_prog_5',title:'Checkpoint',step:'checkpoint',meta:'Right now mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "is working"?',o:['လုပ်နေတယ်','လုပ်တယ်','လုပ်ခဲ့တယ်','လုပ်မယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘာလုပ်နေလဲ',o:['ဘာလုပ်နေလဲ','ဘာစားမလဲ','လုပ်နေတယ်','ဘယ်မှာလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'စားနေတယ်',o:['is eating','ate','will eat','eats daily'],a:0},
{t:'wb',q:'Build: She is coming now',a:['သူ','လာနေတယ်'],pool:['သူ','လာနေတယ်','လာခဲ့တယ်']},
{t:'mc',q:'"In the middle of doing it" slots which word before တယ်?',o:['နေ','ခဲ့','ဖူး','ရ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['စားနေတယ်','is eating'],['လာနေတယ်','is coming'],['လုပ်နေတယ်','is working'],['ဘာလုပ်နေလဲ','what are you doing?']]}]},

/* --- Topic 3: ever / have-you-ever ဖူး --- */
{id:'my_ever',title:'Ever: ဖူး',step:'learn',meta:'သွားဖူးတယ် — life experience',vocab:[['သွားဖူးတယ်','thwa hpu de','have been (there)'],['စားဖူးတယ်','sa hpu de','have eaten / tried'],['မစားဖူးဘူး','ma sa hpu bu','have never eaten'],['ရန်ကုန်ကိုသွားဖူးလား','yangoun go thwa hpu la','have you ever been to Yangon?'],['တစ်ခါ','ta hka','once / one time']],ex:[
{t:'note',tag:'Life experience',q:'verb + ဖူး',body:'<p><span class="deva">ဖူး</span> <b>hpu</b> marks "ever, at least once in life": <span class="deva">သွားဖူးတယ်</span> — I have been there · <span class="deva">စားဖူးတယ်</span> — I have tried (eating) it.</p><p>The great traveler question: <span class="deva">ရန်ကုန်ကိုသွားဖူးလား</span> — Have you ever been to Yangon?</p>',eg:[['သွားဖူးတယ်','thwa hpu de','have been'],['စားဖူးတယ်','sa hpu de','have tried']]},
{t:'mc',q:'Which means "have been (there)"?',o:['သွားဖူးတယ်','သွားနေတယ်','သွားခဲ့တယ်','သွားမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'စားဖူးတယ်',o:['have eaten / tried it','am eating','ate yesterday','will eat'],a:0},
{t:'note',tag:'Never ever',q:'မ…ဖူးဘူး · တစ်ခါ',body:'<p>"Never" is the no-sandwich around ဖူး: <span class="deva">မစားဖူးဘူး</span> — never eaten it. (Yes, ဖူး and ဘူး rhyme — ears open!)</p><p><span class="deva">တစ်ခါ</span> <b>ta hka</b> = once, one time.</p>',eg:[['မစားဖူးဘူး','ma sa hpu bu','never eaten'],['တစ်ခါ','ta hka','once']]},
{t:'mc',q:'Which means "have never eaten"?',o:['မစားဖူးဘူး','စားဖူးတယ်','မစားဘူး','စားခဲ့တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'တစ်ခါ',o:['once / one time','one cup','one person','first'],a:0},
{t:'li',q:'Listen — which one?',say:'ရန်ကုန်ကိုသွားဖူးလား',o:['ရန်ကုန်ကိုသွားဖူးလား','ရန်ကုန်ကိုသွားမယ်','သွားဖူးတယ်','မစားဖူးဘူး'],a:0}]},
{id:'my_ever_2',title:'Hear the experience',step:'recognize',meta:'Ever or never?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'သွားဖူးတယ်',o:['သွားဖူးတယ်','သွားခဲ့တယ်','သွားနေတယ်','စားဖူးတယ်'],a:0},
{t:'mc',q:'Which asks "Have you ever been to Yangon?"',o:['ရန်ကုန်ကိုသွားဖူးလား','ရန်ကုန်ကိုသွားမလား','ရန်ကုန်မှာနေလား','ရန်ကုန်ကဘယ်မှာလဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'မစားဖူးဘူး',o:['မစားဖူးဘူး','စားဖူးတယ်','မစားဘူး','မစားချင်ဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'သွားဖူးတယ်',o:['have been there','am going','went yesterday','will go'],a:0},
{t:'mc',q:'ဖူး (ever) and ဘူး (not) —',o:['rhyme — listen for the first sound','are the same word','never meet','both mean never'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်ခါ',o:['တစ်ခါ','တစ်ခု','တစ်ခွက်','တစ်ယောက်'],a:0},
{t:'mc',q:'Answering သွားဖူးလား with "yes, once":',o:['တစ်ခါသွားဖူးတယ်','မသွားဖူးဘူး','သွားမယ်','သွားနေတယ်'],a:0}]},
{id:'my_ever_3',title:'Put it together',step:'build',meta:'Swap experiences',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['သွားဖူးတယ်','have been'],['စားဖူးတယ်','have tried'],['မစားဖူးဘူး','never eaten'],['တစ်ခါ','once']]},
{t:'wb',q:'Build: Have you ever been to Mandalay?',a:['မန္တလေး','ကို','သွားဖူးလား'],pool:['မန္တလေး','ကို','သွားဖူးလား','သွားမလား']},
{t:'mc',q:'"I have never been" is…',o:['မသွားဖူးဘူး','သွားဖူးတယ်','မသွားဘူး','မသွားခဲ့ဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'စားဖူးတယ်',o:['စားဖူးတယ်','သွားဖူးတယ်','မစားဖူးဘူး','စားနေတယ်'],a:0},
{t:'wb',q:'Build: (I) have tried fish curry once',a:['ငါးဟင်း','တစ်ခါ','စားဖူးတယ်'],pool:['ငါးဟင်း','တစ်ခါ','စားဖူးတယ်','စားနေတယ်']},
{t:'match',q:'Match marker and meaning',pairs:[['ဖူး','ever (life experience)'],['နေ','right now'],['ခဲ့','back then'],['မ…ဖူးဘူး','never']]}]},
{id:'my_ever_4',title:'Mix it',step:'mix',meta:'Ever, now & then',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မစားဖူးဘူး',o:['have never eaten it','do not eat it','did not eat it','am not eating'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားဖူးတယ်',o:['သွားဖူးတယ်','သွားဖူးလား','မသွားဖူးဘူး','သွားခဲ့တယ်'],a:0},
{t:'mc',q:'A friend offers durian. You have never tried it:',o:['မစားဖူးဘူး','စားဖူးတယ်','မစားချင်ဘူး','စားနေတယ်'],a:0},
{t:'wb',q:'Build: Have you ever eaten chicken curry?',a:['ကြက်သားဟင်း','စားဖူးလား'],pool:['ကြက်သားဟင်း','စားဖူးလား','စားဖူးတယ်']},
{t:'li',q:'Listen — which one?',say:'တစ်ခါ',o:['တစ်ခါ','နှစ်ခါ','တစ်ခု','ခဏ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['သွားဖူးတယ်','have been'],['သွားနေတယ်','is going now'],['သွားခဲ့တယ်','went'],['သွားမယ်','will go']]}]},
{id:'my_ever_5',title:'Checkpoint',step:'checkpoint',meta:'Ever mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "have tried (eating)"?',o:['စားဖူးတယ်','စားနေတယ်','စားခဲ့တယ်','စားရမယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'မစားဖူးဘူး',o:['မစားဖူးဘူး','စားဖူးတယ်','မသွားဖူးဘူး','မစားဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'ရန်ကုန်ကိုသွားဖူးလား',o:['have you ever been to Yangon?','will you go to Yangon?','are you in Yangon?','did you go to Yangon yesterday?'],a:0},
{t:'wb',q:'Build: (I) have been once',a:['တစ်ခါ','သွားဖူးတယ်'],pool:['တစ်ခါ','သွားဖူးတယ်','သွားနေတယ်']},
{t:'mc',q:'The life-experience marker is…',o:['ဖူး','ဘူး','နေ','ခဲ့'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['စားဖူးတယ်','have tried'],['မစားဖူးဘူး','never eaten'],['တစ်ခါ','once'],['သွားဖူးတယ်','have been']]}]},

/* --- Topic 4: already / change of state ပြီ --- */
{id:'my_pri',title:'Already: ပြီ',step:'learn',meta:'ရောက်ပြီ စားပြီးပြီ',vocab:[['ပြီးပြီ','pi bi','finished / done'],['စားပြီးပြီ','sa pi bi','already eaten'],['ရောက်ပြီ','yauq pi','arrived / here now'],['ရပြီ','ya bi','got it / OK now'],['ရောက်တယ်','yauq de','arrive / reach']],ex:[
{t:'note',tag:'The news ending',q:'…ပြီ',body:'<p><span class="deva">ပြီ</span> announces <b>news — something has just become true</b>: <span class="deva">ရောက်ပြီ</span> <b>yauq pi</b> "(we have) arrived!" (<span class="deva">ရောက်</span> = arrive) · <span class="deva">ရပြီ</span> "got it / OK now!"</p>',eg:[['ရောက်ပြီ','yauq pi','arrived!'],['ရပြီ','ya bi','got it / OK now']]},
{t:'mc',q:'The taxi stops at your street. The driver says…',o:['ရောက်ပြီ','သွားမယ်','ထွက်မယ်','ရပြီလား'],a:0},
{t:'mc',q:'What does this mean?',d:'ရပြီ',o:['got it / OK now','arrived','finished eating','not yet'],a:0},
{t:'note',tag:'All done',q:'ပြီး + ပြီ',body:'<p><span class="deva">ပြီး</span> = to finish. So <span class="deva">ပြီးပြီ</span> <b>pi bi</b> = "finished!" and <span class="deva">စားပြီးပြီ</span> <b>sa pi bi</b> = "(I have) already eaten" — the polite answer when a host offers more.</p>',eg:[['ပြီးပြီ','pi bi','finished'],['စားပြီးပြီ','sa pi bi','already eaten']]},
{t:'mc',q:'Which means "already eaten"?',o:['စားပြီးပြီ','စားနေတယ်','စားဖူးတယ်','စားမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ပြီးပြီ',o:['finished / done','starting','not yet','again'],a:0},
{t:'li',q:'Listen — which one?',say:'ရောက်ပြီ',o:['ရောက်ပြီ','ရပြီ','ပြီးပြီ','ရောက်တယ်'],a:0}]},
{id:'my_pri_2',title:'Hear the news',step:'recognize',meta:'Spot the ပြီ lines',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ပြီးပြီ',o:['ပြီးပြီ','ရပြီ','ရောက်ပြီ','စားပြီးပြီ'],a:0},
{t:'mc',q:'Which means "arrive / reach"?',o:['ရောက်တယ်','ရတယ်','လာတယ်','ထွက်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'စားပြီးပြီ',o:['စားပြီးပြီ','ပြီးပြီ','စားနေတယ်','စားဖူးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရောက်ပြီ',o:['arrived / here now','will arrive','never arrived','leaving now'],a:0},
{t:'mc',q:'ပြီ announces…',o:['news that just became true','a question','a wish','the past long ago'],a:0},
{t:'li',q:'Listen — which one?',say:'ရပြီ',o:['ရပြီ','ရတယ်','ရလား','ပြီးပြီ'],a:0},
{t:'mc',q:'Your host offers a third helping. Pat your belly:',o:['စားပြီးပြီ','စားမယ်','ဗိုက်ဆာတယ်','မစားဖူးဘူး'],a:0}]},
{id:'my_pri_3',title:'Put it together',step:'build',meta:'Announce the news',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ပြီးပြီ','finished'],['စားပြီးပြီ','already eaten'],['ရောက်ပြီ','arrived'],['ရပြီ','got it / OK now']]},
{t:'wb',q:'Build: (I have) already eaten a meal',a:['ထမင်း','စားပြီးပြီ'],pool:['ထမင်း','စားပြီးပြီ','စားနေတယ်']},
{t:'mc',q:'The bus pulls into ဘူတာ… everyone calls:',o:['ရောက်ပြီ','ထွက်ပြီ','ရပြီ','ပြီးပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'ရောက်တယ်',o:['ရောက်တယ်','ရောက်ပြီ','ရတယ်','ထွက်တယ်'],a:0},
{t:'wb',q:'Build: The work is finished — work finish-already',a:['အလုပ်','ပြီးပြီ'],pool:['အလုပ်','ပြီးပြီ','လုပ်နေတယ်']},
{t:'match',q:'Match ending and job',pairs:[['ပြီ','news! just became true'],['တယ်','plain statement'],['မယ်','future'],['လား','yes/no question']]}]},
{id:'my_pri_4',title:'Mix it',step:'mix',meta:'News all around',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'စားပြီးပြီ',o:['already eaten','still eating','never eaten','will eat'],a:0},
{t:'li',q:'Listen — which one?',say:'ရောက်ပြီ',o:['ရောက်ပြီ','ရောက်တယ်','ရပြီ','ထွက်ပြီ'],a:0},
{t:'mc',q:'Homework done, pencil down. You announce…',o:['ပြီးပြီ','လုပ်နေတယ်','လုပ်မယ်','မပြီးဘူး'],a:0},
{t:'wb',q:'Build: The rain has arrived — rain arrive-news',a:['မိုး','ရောက်ပြီ'],pool:['မိုး','ရောက်ပြီ','ရွာနေတယ်']},
{t:'li',q:'Listen — which one?',say:'စားပြီးပြီ',o:['စားပြီးပြီ','စားပြီ','ပြီးပြီ','စားဖူးတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ရောက်ပြီ','arrived'],['ရပြီ','OK now'],['ပြီးပြီ','finished'],['ရောက်တယ်','arrive / reach']]}]},
{id:'my_pri_5',title:'Checkpoint',step:'checkpoint',meta:'ပြီ mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "finished"?',o:['ပြီးပြီ','ရပြီ','ရောက်ပြီ','ပြီလား'],a:0},
{t:'li',q:'Listen — which one?',say:'ရပြီ',o:['ရပြီ','ရတယ်','ရောက်ပြီ','ပြီးပြီ'],a:0},
{t:'mc',q:'What does this mean?',d:'ရောက်တယ်',o:['arrive / reach','arrived just now','leave','return'],a:0},
{t:'wb',q:'Build: (I have) already eaten',a:['စားပြီးပြီ'],pool:['စားပြီးပြီ','စားနေတယ်']},
{t:'mc',q:'"We are here!" =',o:['ရောက်ပြီ','ရပြီ','သွားပြီ','လာပြီလား'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ပြီးပြီ','finished'],['စားပြီးပြီ','already eaten'],['ရပြီ','got it / OK now'],['ရောက်ပြီ','arrived']]}]},

/* --- Topic 5: can နိုင် & know-how တတ် --- */
{id:'my_can',title:'Can & know how',step:'learn',meta:'နိုင် vs တတ် + မြန်မာလို',vocab:[['ပြောတယ်','pyaw de','speak / say'],['မြန်မာလို','myanma lo','in Burmese'],['ပြောတတ်တယ်','pyaw daq de','know how to speak'],['သွားနိုင်တယ်','thwa naing de','can go (possible)'],['မသွားနိုင်ဘူး','ma thwa naing bu','cannot go'],['နည်းနည်း','neh neh','a little']],ex:[
{t:'note',tag:'Two cans',q:'နိုင် vs တတ်',body:'<p>Burmese splits "can" in two. <span class="deva">နိုင်</span> <b>naing</b> = can, it is possible: <span class="deva">သွားနိုင်တယ်</span> — I can go. <span class="deva">တတ်</span> <b>taq</b> = can because you <b>learned how</b>: <span class="deva">ပြောတတ်တယ်</span> — I know how to speak.</p><p><span class="deva">ပြော</span> <b>pyaw</b> = speak (careful: ပျော် pyaw = happy — tone twins!).</p>',eg:[['သွားနိုင်တယ်','thwa naing de','can go'],['ပြောတတ်တယ်','pyaw daq de','know how to speak']]},
{t:'mc',q:'Which means "can go (it is possible)"?',o:['သွားနိုင်တယ်','သွားတတ်တယ်','သွားချင်တယ်','သွားရမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ပြောတတ်တယ်',o:['know how to speak','can possibly speak','want to speak','spoke'],a:0},
{t:'note',tag:'Your proudest line',q:'မြန်မာလို နည်းနည်း',body:'<p><span class="deva">မြန်မာလို</span> <b>myanma lo</b> = in Burmese (လို = "like/as"). <span class="deva">နည်းနည်း</span> <b>neh neh</b> = a little.</p><p>Put your whole course in one sentence: <span class="deva">မြန်မာလို နည်းနည်း ပြောတတ်တယ်</span> — "I can speak a little Burmese." Say it to a real person this week!</p>',eg:[['မြန်မာလို','myanma lo','in Burmese'],['နည်းနည်း','neh neh','a little']]},
{t:'mc',q:'Which means "in Burmese"?',o:['မြန်မာလို','မြန်မာ','မြန်မာက','မြန်မာနဲ့'],a:0},
{t:'mc',q:'What does this mean?',d:'နည်းနည်း',o:['a little','a lot','never','always'],a:0},
{t:'li',q:'Listen — which one?',say:'ပြောတတ်တယ်',o:['ပြောတတ်တယ်','ပြောတယ်','သွားနိုင်တယ်','ပျော်တယ်'],a:0}]},
{id:'my_can_2',title:'Hear the ability',step:'recognize',meta:'နိုင် or တတ်?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'သွားနိုင်တယ်',o:['သွားနိုင်တယ်','သွားတယ်','မသွားနိုင်ဘူး','ပြောတတ်တယ်'],a:0},
{t:'mc',q:'Which means "speak / say"?',o:['ပြောတယ်','ပျော်တယ်','ပြီးပြီ','ပေးပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'နည်းနည်း',o:['နည်းနည်း','နာရီ','နှစ်','နေတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မသွားနိုင်ဘူး',o:['cannot go','do not want to go','never went','must not go'],a:0},
{t:'mc',q:'Swimming, reading, speaking Burmese — learned skills take…',o:['တတ်','နိုင်','ချင်','ဖူး'],a:0},
{t:'li',q:'Listen — which one?',say:'မြန်မာလို',o:['မြန်မာလို','မြန်မာ','မန္တလေး','မြန်မာနိုင်ငံ'],a:0},
{t:'mc',q:'ပြော (speak) vs ပျော် (happy) differ by…',o:['tone & a tiny sound — listen','spelling only','meaning only','nothing'],a:0}]},
{id:'my_can_3',title:'Put it together',step:'build',meta:'Say what you can do',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['သွားနိုင်တယ်','can go'],['ပြောတတ်တယ်','know how to speak'],['မသွားနိုင်ဘူး','cannot go'],['နည်းနည်း','a little']]},
{t:'wb',q:'Build: I can speak a little Burmese (man speaking)',a:['ကျွန်တော်','မြန်မာလို','နည်းနည်း','ပြောတတ်တယ်'],pool:['ကျွန်တော်','မြန်မာလို','နည်းနည်း','ပြောတတ်တယ်','ပြောနေတယ်']},
{t:'mc',q:'"Cannot come" is…',o:['မလာနိုင်ဘူး','လာနိုင်တယ်','မလာချင်ဘူး','မလာခဲ့ဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'မသွားနိုင်ဘူး',o:['မသွားနိုင်ဘူး','သွားနိုင်တယ်','မသွားချင်ဘူး','မသွားဖူးဘူး'],a:0},
{t:'wb',q:'Build: Can you go tomorrow?',a:['မနက်ဖြန်','သွားနိုင်လား'],pool:['မနက်ဖြန်','သွားနိုင်လား','သွားနိုင်တယ်']},
{t:'match',q:'Match "can" and its kind',pairs:[['နိုင်','possible'],['တတ်','learned skill'],['ချင်','want to'],['ရ','allowed / must']]}]},
{id:'my_can_4',title:'Mix it',step:'mix',meta:'Abilities in action',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မြန်မာလို',o:['in Burmese','Myanmar country','to Myanmar','Burmese person'],a:0},
{t:'li',q:'Listen — which one?',say:'ပြောတယ်',o:['ပြောတယ်','ပျော်တယ်','ပြောတတ်တယ်','ပေးပါ'],a:0},
{t:'mc',q:'Rain floods the road. You phone ahead:',o:['မလာနိုင်ဘူး','လာတတ်တယ်','လာချင်တယ်','လာဖူးတယ်'],a:0},
{t:'wb',q:'Build: She knows how to speak Burmese',a:['သူ','မြန်မာလို','ပြောတတ်တယ်'],pool:['သူ','မြန်မာလို','ပြောတတ်တယ်','ပြောနိုင်လား']},
{t:'li',q:'Listen — which one?',say:'နည်းနည်း',o:['နည်းနည်း','နီးတယ်','အေးအေး','နှစ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ပြောတယ်','speak'],['ပြောတတ်တယ်','know how to speak'],['သွားနိုင်တယ်','can go'],['နည်းနည်း','a little']]}]},
{id:'my_can_5',title:'Checkpoint',step:'checkpoint',meta:'Can mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "know how to speak"?',o:['ပြောတတ်တယ်','ပြောနိုင်တယ်','ပြောချင်တယ်','ပြောနေတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'မြန်မာလို',o:['မြန်မာလို','နည်းနည်း','မြန်မာ','ပြောတတ်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မသွားနိုင်ဘူး',o:['cannot go','will not go','never went','must not go'],a:0},
{t:'wb',q:'Build: I can speak a little Burmese (woman speaking)',a:['ကျွန်မ','မြန်မာလို','နည်းနည်း','ပြောတတ်တယ်'],pool:['ကျွန်မ','မြန်မာလို','နည်းနည်း','ပြောတတ်တယ်','ကြိုက်တယ်']},
{t:'mc',q:'Possible vs learned-skill =',o:['နိုင် vs တတ်','တတ် vs နိုင်','နိုင် vs ချင်','ရ vs နိုင်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['သွားနိုင်တယ်','can go'],['ပြောတတ်တယ်','know how to speak'],['မြန်မာလို','in Burmese'],['နည်းနည်း','a little']]}]},

/* --- Topic 6: must / have to ရ --- */
{id:'my_must',title:'Have to: ရ',step:'learn',meta:'သွားရမယ် — duties & rules',vocab:[['သွားရမယ်','thwa ya meh','must go / have to go'],['လုပ်ရမယ်','louq ya meh','must do'],['အလုပ်','alouq','work (noun)'],['အလုပ်လုပ်တယ်','alouq louq de','to work'],['မလုပ်ရဘူး','ma louq ya bu','not allowed to do']],ex:[
{t:'note',tag:'Duty calls',q:'verb + ရ + မယ်',body:'<p>You know <span class="deva">ရ</span> as "OK / get" (<span class="deva">ရတယ်</span>, <span class="deva">ရပြီ</span>). Slotted after a verb with မယ် it becomes <b>must</b>: <span class="deva">သွားရမယ်</span> — I have to go · <span class="deva">လုပ်ရမယ်</span> — I must do it.</p>',eg:[['သွားရမယ်','thwa ya meh','must go'],['လုပ်ရမယ်','louq ya meh','must do']]},
{t:'mc',q:'Which means "must go"?',o:['သွားရမယ်','သွားနိုင်တယ်','သွားချင်တယ်','သွားဖူးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လုပ်ရမယ်',o:['must do','can do','want to do','did'],a:0},
{t:'note',tag:'Work & rules',q:'အလုပ် · မ…ရဘူး',body:'<p><span class="deva">အလုပ်</span> <b>alouq</b> = work (the verb လုပ် wearing the noun-making အ, like the colors!). <span class="deva">အလုပ်လုပ်တယ်</span> = to work.</p><p>Negated, ရ means <b>not allowed</b>: <span class="deva">မလုပ်ရဘူး</span> — you may not do that.</p>',eg:[['အလုပ်','alouq','work'],['မလုပ်ရဘူး','ma louq ya bu','not allowed']]},
{t:'mc',q:'Which means "work (noun)"?',o:['အလုပ်','လုပ်တယ်','အသစ်','လုပ်ရမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မလုပ်ရဘူး',o:['not allowed to do it','must do it','cannot manage it','did not do it'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားရမယ်',o:['သွားရမယ်','သွားမယ်','လုပ်ရမယ်','သွားနိုင်တယ်'],a:0}]},
{id:'my_must_2',title:'Hear the duty',step:'recognize',meta:'Must, may & may not',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'လုပ်ရမယ်',o:['လုပ်ရမယ်','လုပ်မယ်','သွားရမယ်','မလုပ်ရဘူး'],a:0},
{t:'mc',q:'Which means "to work"?',o:['အလုပ်လုပ်တယ်','အလုပ်','လုပ်ရမယ်','လုပ်နေပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'အလုပ်',o:['အလုပ်','လုပ်တယ်','အလုပ်လုပ်တယ်','အသုပ်'],a:0},
{t:'mc',q:'What does this mean?',d:'သွားရမယ်',o:['must go','may go','went','can go'],a:0},
{t:'mc',q:'A "no entry" sign says, in spirit…',o:['မဝင်ရဘူး — may not enter','ဝင်ရမယ်','ဝင်နိုင်တယ်','ဝင်ချင်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'အလုပ်လုပ်တယ်',o:['အလုပ်လုပ်တယ်','အလုပ်','လုပ်နေတယ်','လုပ်ရမယ်'],a:0},
{t:'mc',q:'ရ after a verb + မယ် means…',o:['must / have to','maybe','want to','already'],a:0}]},
{id:'my_must_3',title:'Put it together',step:'build',meta:'State your duties',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['သွားရမယ်','must go'],['လုပ်ရမယ်','must do'],['မလုပ်ရဘူး','not allowed'],['အလုပ်','work (noun)']]},
{t:'wb',q:'Build: I must go to work tomorrow (man speaking)',a:['ကျွန်တော်','မနက်ဖြန်','အလုပ်','သွားရမယ်'],pool:['ကျွန်တော်','မနက်ဖြန်','အလုပ်','သွားရမယ်','သွားချင်တယ်']},
{t:'mc',q:'"Must eat" is…',o:['စားရမယ်','စားနိုင်တယ်','စားချင်တယ်','စားပြီးပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'မလုပ်ရဘူး',o:['မလုပ်ရဘူး','လုပ်ရမယ်','မလုပ်ဘူး','မသွားရဘူး'],a:0},
{t:'wb',q:'Build: She works at the school',a:['သူ','ကျောင်း','မှာ','အလုပ်လုပ်တယ်'],pool:['သူ','ကျောင်း','မှာ','အလုပ်လုပ်တယ်','နေတယ်']},
{t:'match',q:'Match marker and force',pairs:[['ရမယ်','must'],['နိုင်','can (possible)'],['တတ်','know how'],['မ…ရဘူး','not allowed']]}]},
{id:'my_must_4',title:'Mix it',step:'mix',meta:'Duties & abilities',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အလုပ်လုပ်တယ်',o:['to work','must work','the work','can work'],a:0},
{t:'li',q:'Listen — which one?',say:'သွားရမယ်',o:['သွားရမယ်','သွားရဘူး','သွားမယ်','လုပ်ရမယ်'],a:0},
{t:'mc',q:'The teashop closes; you point at your watch:',o:['သွားရမယ်','သွားဖူးတယ်','မသွားနိုင်ဘူး','သွားနေတယ်'],a:0},
{t:'wb',q:'Build: Do you have to go?',a:['သွားရ','မလား'],pool:['သွားရ','မလား','မယ်']},
{t:'li',q:'Listen — which one?',say:'အလုပ်',o:['အလုပ်','ဗိုက်','လုပ်တယ်','အခန်း'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['သွားရမယ်','must go'],['မလုပ်ရဘူး','not allowed'],['အလုပ်လုပ်တယ်','to work'],['လုပ်ရမယ်','must do']]}]},
{id:'my_must_5',title:'Checkpoint',step:'checkpoint',meta:'Must mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "must do"?',o:['လုပ်ရမယ်','လုပ်နိုင်တယ်','လုပ်ချင်တယ်','လုပ်နေတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'အလုပ်လုပ်တယ်',o:['အလုပ်လုပ်တယ်','လုပ်ရမယ်','အလုပ်','မလုပ်ရဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'မလုပ်ရဘူး',o:['not allowed to do','must do','cannot do','did not do'],a:0},
{t:'wb',q:'Build: I must go home (woman speaking)',a:['ကျွန်မ','အိမ်','ကို','သွားရမယ်'],pool:['ကျွန်မ','အိမ်','ကို','သွားရမယ်','သွားဖူးတယ်']},
{t:'mc',q:'ရ shows up as "OK" (ရတယ်), "got it" (ရပြီ) and…',o:['must (ရမယ်)','ever (ဖူး)','still (နေ)','want (ချင်)'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['သွားရမယ်','must go'],['အလုပ်','work (noun)'],['မလုပ်ရဘူး','not allowed'],['အလုပ်လုပ်တယ်','to work']]}]},

/* --- Topic 7: polite requests & commands verb + ပါ --- */
{id:'my_req',title:'Please do: verb + ပါ',step:'learn',meta:'လာပါ ထိုင်ပါ ခဏစောင့်ပါ',vocab:[['လာပါ','la ba','please come'],['ထိုင်ပါ','htain ba','please sit'],['စားပါ','sa ba','please eat'],['ခဏ','hkana','a moment'],['ခဏစောင့်ပါ','hkana saun ba','wait a moment, please']],ex:[
{t:'note',tag:'Gentle commands',q:'verb + ပါ',body:'<p>To ask someone to do something, just say the bare verb + our polite <span class="deva">ပါ</span>: <span class="deva">လာပါ</span> come! · <span class="deva">ထိုင်ပါ</span> sit down! (<span class="deva">ထိုင်</span> = sit) · <span class="deva">စားပါ</span> — eat, please! (what every host says).</p><p>You have used this shape all along: ပေးပါ, လျှော့ပေးပါ.</p>',eg:[['လာပါ','la ba','please come'],['ထိုင်ပါ','htain ba','please sit'],['စားပါ','sa ba','please eat']]},
{t:'mc',q:'Which means "please sit"?',o:['ထိုင်ပါ','လာပါ','စားပါ','သွားပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'စားပါ',o:['please eat','I eat','ate','please give'],a:0},
{t:'note',tag:'One moment',q:'ခဏ · ခဏစောင့်ပါ',body:'<p><span class="deva">ခဏ</span> <b>hkana</b> = a moment. <span class="deva">စောင့်</span> <b>saun</b> = wait. Together, the phrase you will hear at every counter in Myanmar: <span class="deva">ခဏစောင့်ပါ</span> — "please wait a moment."</p>',eg:[['ခဏ','hkana','a moment'],['ခဏစောင့်ပါ','hkana saun ba','wait a moment, please']]},
{t:'mc',q:'Which means "wait a moment, please"?',o:['ခဏစောင့်ပါ','ခဏ','လာပါ','ထိုင်ပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'ခဏ',o:['a moment','a cup','once','slowly'],a:0},
{t:'li',q:'Listen — which one?',say:'ခဏစောင့်ပါ',o:['ခဏစောင့်ပါ','ခဏ','ထိုင်ပါ','လာပါ'],a:0}]},
{id:'my_req_2',title:'Hear the requests',step:'recognize',meta:'Spot each polite ask',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'လာပါ',o:['လာပါ','လာတယ်','စားပါ','ထိုင်ပါ'],a:0},
{t:'mc',q:'A host waves at the food and says…',o:['စားပါ','စားတယ်','စားရမယ်','စားပြီးပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'ထိုင်ပါ',o:['ထိုင်ပါ','ထိုင်','လာပါ','စားပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'ခဏစောင့်ပါ',o:['wait a moment, please','come quickly','sit here','a long time'],a:0},
{t:'mc',q:'The polite command recipe is…',o:['verb + ပါ','verb + တယ်','ပါ + verb','verb + မယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ခဏ',o:['ခဏ','ခါ','ခု','ခွက်'],a:0},
{t:'mc',q:'You already knew two verb+ပါ lines:',o:['ပေးပါ & လျှော့ပေးပါ','တယ် & မယ်','လား & လဲ','ဟုတ်ကဲ့ & ရပါတယ်'],a:0}]},
{id:'my_req_3',title:'Put it together',step:'build',meta:'Host like a local',vocab:[],ex:[
{t:'match',q:'Match request and meaning',pairs:[['လာပါ','please come'],['ထိုင်ပါ','please sit'],['စားပါ','please eat'],['ခဏစောင့်ပါ','wait a moment']]},
{t:'wb',q:'Build: Please wait a moment',a:['ခဏ','စောင့်ပါ'],pool:['ခဏ','စောင့်ပါ','ထိုင်ပါ']},
{t:'mc',q:'A guest arrives at your door. First words…',o:['လာပါ၊ ထိုင်ပါ','သွားပါ','ခဏစောင့်ပါ','မလာရဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'စားပါ',o:['စားပါ','စားတယ်','လာပါ','စားမလား'],a:0},
{t:'wb',q:'Build: Please come to my house — house to come-please',a:['အိမ်','ကို','လာပါ'],pool:['အိမ်','ကို','လာပါ','သွားပါ']},
{t:'match',q:'Match line and situation',pairs:[['ထိုင်ပါ','offering a chair'],['စားပါ','offering food'],['ခဏစောင့်ပါ','at the counter'],['လျှော့ပေးပါ','at the market']]}]},
{id:'my_req_4',title:'Mix it',step:'mix',meta:'Polite in every room',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ထိုင်ပါ',o:['please sit','please stand','please wait','please come'],a:0},
{t:'li',q:'Listen — which one?',say:'ခဏစောင့်ပါ',o:['ခဏစောင့်ပါ','ခဏ','စားပါ','ပေးပါ'],a:0},
{t:'mc',q:'The shopkeeper checks the back room. She says…',o:['ခဏစောင့်ပါ','လာပါ','ထိုင်ပါ','ဒါပဲ'],a:0},
{t:'wb',q:'Build: Please drink tea — tea drink-please',a:['လက်ဖက်ရည်','သောက်ပါ'],pool:['လက်ဖက်ရည်','သောက်ပါ','သောက်တယ်']},
{t:'li',q:'Listen — which one?',say:'လာပါ',o:['လာပါ','လာမယ်','ထိုင်ပါ','လာနေတယ်'],a:0},
{t:'match',q:'Match request and meaning',pairs:[['လာပါ','please come'],['စားပါ','please eat'],['ခဏ','a moment'],['ထိုင်ပါ','please sit']]}]},
{id:'my_req_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 7 complete!',vocab:[],ex:[
{t:'mc',q:'Which means "please come"?',o:['လာပါ','လာတယ်','လာနိုင်တယ်','လာခဲ့တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ထိုင်ပါ',o:['ထိုင်ပါ','စားပါ','လာပါ','ခဏစောင့်ပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'ခဏစောင့်ပါ',o:['wait a moment, please','come at once','sit a while','eat slowly'],a:0},
{t:'wb',q:'Build: Please eat a meal — meal eat-please',a:['ထမင်း','စားပါ'],pool:['ထမင်း','စားပါ','စားမယ်']},
{t:'mc',q:'Gentle commands = bare verb +…',o:['ပါ','တယ်','မယ်','ရ'],a:0},
{t:'match',q:'Match request and meaning',pairs:[['လာပါ','please come'],['ထိုင်ပါ','please sit'],['စားပါ','please eat'],['ခဏစောင့်ပါ','wait a moment']]}]},

/* ===================== ZONE 8 · OUT & ABOUT =====================
   Getting around Myanmar: vehicles + စီး ride, directions (ဘယ်/ညာ/
   တည့်တည့် per Okell U2 taxis & asiapearltravels directions lessons),
   far & near, tickets & stations, hotel (ရှိ have/exist), months &
   dates, phone. */
/* --- Topic 1: vehicles & riding --- */
{id:'my_go',title:'Transport',step:'learn',meta:'ကား ရထား ဆိုင်ကယ် + စီး',vocab:[['ကား','ka','car / bus'],['ဘတ်စ်ကား','baq sa ka','bus'],['တက္ကစီ','teq ka si','taxi'],['ဆိုင်ကယ်','hsain keh','motorbike'],['ရထား','ya hta','train'],['ကားစီးတယ်','ka si de','ride a car / bus']],ex:[
{t:'note',tag:'Zone 8',q:'Riding, not driving',body:'<p>Time to move! <span class="deva">ကား</span> <b>ka</b> = car (often any bus too) · <span class="deva">ဘတ်စ်ကား</span> bus · <span class="deva">တက္ကစီ</span> taxi · <span class="deva">ဆိုင်ကယ်</span> motorbike · <span class="deva">ရထား</span> train.</p><p>You <b>ride</b> them all: <span class="deva">စီးတယ်</span> <b>si de</b> — <span class="deva">ကားစီးတယ်</span> take the bus.</p>',eg:[['ကား','ka','car / bus'],['ရထား','ya hta','train'],['ကားစီးတယ်','ka si de','ride a car / bus']]},
{t:'mc',q:'Which means "train"?',o:['ရထား','ကား','တက္ကစီ','ဆိုင်ကယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ကားစီးတယ်',o:['ride a car / bus','drive a car','buy a car','wash a car'],a:0},
{t:'note',tag:'Street sounds',q:'တက္ကစီ · ဆိုင်ကယ်',body:'<p><span class="deva">တက္ကစီ</span> <b>teq ka si</b> — hear the English "taxi" hiding in Burmese clothes? <span class="deva">ဘတ်စ်ကား</span> <b>baq sa ka</b> does the same with "bus".</p><p><span class="deva">ဆိုင်ကယ်</span> <b>hsain keh</b> (motorbike) rules the roads outside Yangon.</p>',eg:[['တက္ကစီ','teq ka si','taxi'],['ဆိုင်ကယ်','hsain keh','motorbike']]},
{t:'mc',q:'Which means "taxi"?',o:['တက္ကစီ','ဘတ်စ်ကား','ရထား','ကား'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆိုင်ကယ်',o:['motorbike','bicycle','taxi','shop'],a:0},
{t:'li',q:'Listen — which one?',say:'ရထား',o:['ရထား','ကား','တက္ကစီ','ဆိုင်ကယ်'],a:0}]},
{id:'my_go_2',title:'Hear the traffic',step:'recognize',meta:'Spot each vehicle',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ကား',o:['ကား','ရထား','ခါ','ကာ'],a:0},
{t:'mc',q:'Which means "bus"?',o:['ဘတ်စ်ကား','တက္ကစီ','ဆိုင်ကယ်','ရထား'],a:0},
{t:'li',q:'Listen — which one?',say:'တက္ကစီ',o:['တက္ကစီ','ဘတ်စ်ကား','ဆိုင်ကယ်','ကားစီးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရထား',o:['train','bus','motorbike','boat'],a:0},
{t:'mc',q:'The verb for taking any vehicle is…',o:['စီးတယ်','သွားတယ်','လုပ်တယ်','ဝယ်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆိုင်ကယ်',o:['ဆိုင်ကယ်','ဆိုင်','တက္ကစီ','ကား'],a:0},
{t:'mc',q:'တက္ကစီ and ဘတ်စ်ကား are borrowed from…',o:['English','Pali','Hindi','Thai'],a:0}]},
{id:'my_go_3',title:'Put it together',step:'build',meta:'Choose your ride',vocab:[],ex:[
{t:'match',q:'Match vehicle and meaning',pairs:[['ကား','car / bus'],['တက္ကစီ','taxi'],['ဆိုင်ကယ်','motorbike'],['ရထား','train']]},
{t:'wb',q:'Build: (I) ride the train — train ride',a:['ရထား','စီးတယ်'],pool:['ရထား','စီးတယ်','သွားတယ်']},
{t:'mc',q:'"Ride a motorbike" is…',o:['ဆိုင်ကယ်စီးတယ်','ဆိုင်ကယ်သွားတယ်','ဆိုင်ကယ်ဝယ်တယ်','ဆိုင်ကယ်လုပ်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘတ်စ်ကား',o:['ဘတ်စ်ကား','ကား','တက္ကစီ','ရထား'],a:0},
{t:'wb',q:'Build: (I) will take a taxi to Yangon',a:['ရန်ကုန်','ကို','တက္ကစီ','စီးမယ်'],pool:['ရန်ကုန်','ကို','တက္ကစီ','စီးမယ်','စီးတယ်']},
{t:'match',q:'Match vehicle and meaning',pairs:[['ဘတ်စ်ကား','bus'],['ရထား','train'],['ကားစီးတယ်','ride a car / bus'],['တက္ကစီ','taxi']]}]},
{id:'my_go_4',title:'Mix it',step:'mix',meta:'On the move',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'တက္ကစီ',o:['taxi','bus','train','motorbike'],a:0},
{t:'li',q:'Listen — which one?',say:'ကားစီးတယ်',o:['ကားစီးတယ်','ကား','ရထားစီးတယ်','စီးတယ်'],a:0},
{t:'mc',q:'Cheapest way across town, weaving through traffic:',o:['ဆိုင်ကယ်','ရထား','တက္ကစီ','လေဆိပ်'],a:0},
{t:'wb',q:'Build: Have you ever ridden a train?',a:['ရထား','စီးဖူးလား'],pool:['ရထား','စီးဖူးလား','စီးတယ်']},
{t:'li',q:'Listen — which one?',say:'ရထား',o:['ရထား','ယထာ','ကား','ဘတ်စ်ကား'],a:0},
{t:'match',q:'Match vehicle and meaning',pairs:[['ကား','car / bus'],['ဆိုင်ကယ်','motorbike'],['ရထား','train'],['ဘတ်စ်ကား','bus']]}]},
{id:'my_go_5',title:'Checkpoint',step:'checkpoint',meta:'Wheels mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "motorbike"?',o:['ဆိုင်ကယ်','တက္ကစီ','ရထား','ကား'],a:0},
{t:'li',q:'Listen — which one?',say:'တက္ကစီ',o:['တက္ကစီ','ဆိုင်ကယ်','ဘတ်စ်ကား','ကား'],a:0},
{t:'mc',q:'What does this mean?',d:'ကားစီးတယ်',o:['ride a car / bus','drive fast','walk','buy a ticket'],a:0},
{t:'wb',q:'Build: (I) will ride a motorbike tomorrow',a:['မနက်ဖြန်','ဆိုင်ကယ်','စီးမယ်'],pool:['မနက်ဖြန်','ဆိုင်ကယ်','စီးမယ်','စီးခဲ့တယ်']},
{t:'mc',q:'Vehicles take which verb?',o:['စီး','စား','စောင့်','ဝယ်'],a:0},
{t:'match',q:'Match vehicle and meaning',pairs:[['တက္ကစီ','taxi'],['ရထား','train'],['ဆိုင်ကယ်','motorbike'],['ကားစီးတယ်','ride a car / bus']]}]},

/* --- Topic 2: directions --- */
{id:'my_dir',title:'Left, right, straight',step:'learn',meta:'ဘယ် ညာ တည့်တည့် ကွေ့',vocab:[['ဘယ်ဘက်','beh beq','left side'],['ညာဘက်','nya beq','right side'],['တည့်တည့်','teh deh','straight ahead'],['ညာကွေ့','nya kweh','turn right'],['ဘယ်ကွေ့','beh kweh','turn left'],['တည့်တည့်သွားပါ','teh deh thwa ba','go straight, please']],ex:[
{t:'note',tag:'Taxi talk',q:'ဘယ် · ညာ · ဘက်',body:'<p><span class="deva">ဘက်</span> <b>beq</b> = side. <span class="deva">ဘယ်ဘက်</span> = left side · <span class="deva">ညာဘက်</span> = right side.</p><p>Wait — <span class="deva">ဘယ်</span> is also "which"?! Yes: ဘယ်သူ which-person, ဘယ်ဘက် the ဘယ် side. Context (and your driver) will know.</p>',eg:[['ဘယ်ဘက်','beh beq','left side'],['ညာဘက်','nya beq','right side']]},
{t:'mc',q:'Which means "right side"?',o:['ညာဘက်','ဘယ်ဘက်','တည့်တည့်','ဘက်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်ဘက်',o:['left side','right side','which side?','straight'],a:0},
{t:'note',tag:'Steer the taxi',q:'တည့်တည့် · ကွေ့',body:'<p><span class="deva">တည့်တည့်</span> <b>teh deh</b> = straight ahead. <span class="deva">ကွေ့</span> <b>kweh</b> = turn: <span class="deva">ညာကွေ့</span> turn right · <span class="deva">ဘယ်ကွေ့</span> turn left.</p><p>Add polite ပါ to steer politely: <span class="deva">တည့်တည့်သွားပါ</span> — go straight, please.</p>',eg:[['တည့်တည့်','teh deh','straight ahead'],['ညာကွေ့','nya kweh','turn right'],['ဘယ်ကွေ့','beh kweh','turn left']]},
{t:'mc',q:'Which means "turn left"?',o:['ဘယ်ကွေ့','ညာကွေ့','တည့်တည့်','ဘယ်ဘက်'],a:0},
{t:'mc',q:'What does this mean?',d:'တည့်တည့်သွားပါ',o:['go straight, please','turn around, please','stop here, please','go slowly, please'],a:0},
{t:'li',q:'Listen — which one?',say:'ညာကွေ့',o:['ညာကွေ့','ဘယ်ကွေ့','ညာဘက်','တည့်တည့်'],a:0}]},
{id:'my_dir_2',title:'Hear the way',step:'recognize',meta:'Left or right by ear',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဘယ်ဘက်',o:['ဘယ်ဘက်','ညာဘက်','ဘယ်ကွေ့','ဘက'],a:0},
{t:'mc',q:'Which means "straight ahead"?',o:['တည့်တည့်','ကွေ့','ဘက်','ညာ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်ကွေ့',o:['ဘယ်ကွေ့','ညာကွေ့','ဘယ်ဘက်','တည့်တည့်'],a:0},
{t:'mc',q:'What does this mean?',d:'ညာဘက်',o:['right side','left side','both sides','side street'],a:0},
{t:'mc',q:'ဘယ် means left AND…',o:['which','right','straight','side'],a:0},
{t:'li',q:'Listen — which one?',say:'တည့်တည့်',o:['တည့်တည့်','ထည့်ထည့်','နည်းနည်း','ဘယ်ဘက်'],a:0},
{t:'mc',q:'"Turn" in ညာကွေ့ / ဘယ်ကွေ့ is…',o:['ကွေ့','ဘက်','ညာ','ပါ'],a:0}]},
{id:'my_dir_3',title:'Put it together',step:'build',meta:'Direct the driver',vocab:[],ex:[
{t:'match',q:'Match direction and meaning',pairs:[['ဘယ်ဘက်','left side'],['ညာဘက်','right side'],['တည့်တည့်','straight ahead'],['ညာကွေ့','turn right']]},
{t:'wb',q:'Build: Go straight, please',a:['တည့်တည့်','သွားပါ'],pool:['တည့်တည့်','သွားပါ','ကွေ့ပါ']},
{t:'mc',q:'"Turn right, please" is…',o:['ညာကွေ့ပါ','ဘယ်ကွေ့ပါ','ညာဘက်','တည့်တည့်သွားပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'တည့်တည့်သွားပါ',o:['တည့်တည့်သွားပါ','တည့်တည့်','ညာကွေ့','ဘယ်ကွေ့'],a:0},
{t:'wb',q:'Build: Turn left, please — left-turn please',a:['ဘယ်ကွေ့','ပါ'],pool:['ဘယ်ကွေ့','ပါ','ညာကွေ့']},
{t:'match',q:'Match instruction and action',pairs:[['ညာကွေ့','turn right'],['ဘယ်ကွေ့','turn left'],['တည့်တည့်သွားပါ','go straight, please'],['ခဏစောင့်ပါ','wait a moment']]}]},
{id:'my_dir_4',title:'Mix it',step:'mix',meta:'Navigate the streets',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ညာကွေ့',o:['turn right','turn left','right side','go straight'],a:0},
{t:'li',q:'Listen — which one?',say:'ညာဘက်',o:['ညာဘက်','ဘယ်ဘက်','ညာကွေ့','ဘက်'],a:0},
{t:'mc',q:'The teashop is on the LEFT. Tell the driver…',o:['ဘယ်ဘက်မှာ','ညာဘက်မှာ','တည့်တည့်','ရောက်ပြီ'],a:0},
{t:'wb',q:'Build: Turn right at the school — school at right-turn',a:['ကျောင်း','မှာ','ညာကွေ့'],pool:['ကျောင်း','မှာ','ညာကွေ့','ဘယ်ကွေ့']},
{t:'li',q:'Listen — which one?',say:'ကွေ့',o:['ကွေ့','ခွေ့','ဘက်','ခွဲ'],a:0},
{t:'match',q:'Match direction and meaning',pairs:[['တည့်တည့်','straight ahead'],['ဘယ်ဘက်','left side'],['ညာဘက်','right side'],['ဘယ်ကွေ့','turn left']]}]},
{id:'my_dir_5',title:'Checkpoint',step:'checkpoint',meta:'Directions mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "go straight, please"?',o:['တည့်တည့်သွားပါ','ညာကွေ့ပါ','ဘယ်ကွေ့ပါ','ခဏစောင့်ပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်ကွေ့',o:['ဘယ်ကွေ့','ညာကွေ့','ဘယ်ဘက်','ကွေ့'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘက်',o:['side','turn','straight','street'],a:0},
{t:'wb',q:'Build: Turn right, please',a:['ညာကွေ့','ပါ'],pool:['ညာကွေ့','ပါ','တည့်တည့်']},
{t:'mc',q:'left · right · straight =',o:['ဘယ် · ညာ · တည့်တည့်','ညာ · ဘယ် · တည့်တည့်','ဘယ် · တည့်တည့် · ညာ','ညာ · တည့်တည့် · ဘယ်'],a:0},
{t:'match',q:'Match direction and meaning',pairs:[['ဘယ်ဘက်','left side'],['ညာကွေ့','turn right'],['တည့်တည့်','straight ahead'],['ညာဘက်','right side']]}]},

/* --- Topic 3: far & near --- */
{id:'my_farnear',title:'Far & near',step:'learn',meta:'ဝေးတယ် နီးတယ် ဒီနားမှာ',vocab:[['ဝေးတယ်','wei de','is far'],['နီးတယ်','ni de','is near'],['ဝေးလား','wei la','is it far?'],['ဒီနားမှာ','di na hma','near here'],['ဟိုမှာ','ho hma','over there']],ex:[
{t:'note',tag:'How far?',q:'ဝေး · နီး',body:'<p>Two more describing verbs for the road: <span class="deva">ဝေးတယ်</span> <b>wei de</b> — it is far · <span class="deva">နီးတယ်</span> <b>ni de</b> — it is near.</p><p>Before hopping on that ဆိုင်ကယ်, ask: <span class="deva">ဝေးလား</span> — is it far?</p>',eg:[['ဝေးတယ်','wei de','is far'],['နီးတယ်','ni de','is near'],['ဝေးလား','wei la','is it far?']]},
{t:'mc',q:'Which means "is far"?',o:['ဝေးတယ်','နီးတယ်','ဝေးလား','ဒီနားမှာ'],a:0},
{t:'mc',q:'What does this mean?',d:'နီးတယ်',o:['is near','is far','is here','is small'],a:0},
{t:'note',tag:'Point it out',q:'ဒီနားမှာ · ဟိုမှာ',body:'<p><span class="deva">ဒီနားမှာ</span> <b>di na hma</b> = near here, in this area (ဒီ this + နား vicinity + our မှာ!).</p><p><span class="deva">ဟိုမှာ</span> <b>ho hma</b> = over there — the pointing word ဟို from ဟိုဟာ, plus မှာ.</p>',eg:[['ဒီနားမှာ','di na hma','near here'],['ဟိုမှာ','ho hma','over there']]},
{t:'mc',q:'Which means "near here"?',o:['ဒီနားမှာ','ဟိုမှာ','နီးတယ်','ဘယ်မှာ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဟိုမှာ',o:['over there','near here','which place','far away'],a:0},
{t:'li',q:'Listen — which one?',say:'ဝေးလား',o:['ဝေးလား','ဝေးတယ်','နီးတယ်','ဝယ်လား'],a:0}]},
{id:'my_farnear_2',title:'Hear the distance',step:'recognize',meta:'Far or near by ear',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဝေးတယ်',o:['ဝေးတယ်','နီးတယ်','ဝယ်တယ်','ဝေးလား'],a:0},
{t:'mc',q:'Which means "is it far?"',o:['ဝေးလား','ဝေးတယ်','နီးလား','ဘယ်မှာလဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဒီနားမှာ',o:['ဒီနားမှာ','ဟိုမှာ','ဒီမှာ','နီးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဝေးတယ်',o:['is far','is near','went away','is slow'],a:0},
{t:'mc',q:'ဝေးတယ် vs ဝယ်တယ် —',o:['far vs buy','buy vs far','both far','both buy'],a:0},
{t:'li',q:'Listen — which one?',say:'ဟိုမှာ',o:['ဟိုမှာ','ဒီနားမှာ','ဟိုဟာ','ဘယ်မှာ'],a:0},
{t:'mc',q:'ဒီနားမှာ is built from this + vicinity +…',o:['မှာ (at)','ကို (to)','က (from)','နဲ့ (with)'],a:0}]},
{id:'my_farnear_3',title:'Put it together',step:'build',meta:'Size up the trip',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ဝေးတယ်','is far'],['နီးတယ်','is near'],['ဒီနားမှာ','near here'],['ဟိုမှာ','over there']]},
{t:'wb',q:'Build: Is the airport far?',a:['လေဆိပ်','ဝေးလား'],pool:['လေဆိပ်','ဝေးလား','နီးတယ်']},
{t:'mc',q:'Good news — the teashop is close:',o:['နီးတယ်','ဝေးတယ်','ဝေးလား','မနီးဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'နီးတယ်',o:['နီးတယ်','ဝေးတယ်','နည်းနည်း','နေတယ်'],a:0},
{t:'wb',q:'Build: The market is near here',a:['ဈေး','ဒီနားမှာ','ရှိတယ်'],pool:['ဈေး','ဒီနားမှာ','ရှိတယ်','ဝေးတယ်']},
{t:'match',q:'Match line and meaning',pairs:[['ဝေးလား','is it far?'],['နီးတယ်','is near'],['ဟိုမှာ','over there'],['ဝေးတယ်','is far']]}]},
{id:'my_farnear_4',title:'Mix it',step:'mix',meta:'Distance decisions',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဒီနားမှာ',o:['near here','over there','far away','at which place'],a:0},
{t:'li',q:'Listen — which one?',say:'ဝေးတယ်',o:['ဝေးတယ်','ဝယ်တယ်','နီးတယ်','ဝေးလား'],a:0},
{t:'mc',q:'ဝေးတယ်! Which ride makes sense?',o:['တက္ကစီ','ခဏ','သော့','ထိုင်ပါ'],a:0},
{t:'wb',q:'Build: Is the station near? — station nears-question',a:['ဘူတာ','နီးလား'],pool:['ဘူတာ','နီးလား','ဝေးလား']},
{t:'li',q:'Listen — which one?',say:'ဟိုမှာ',o:['ဟိုမှာ','ဟိုဟာ','ဒီနားမှာ','မှာ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ဝေးတယ်','is far'],['ဒီနားမှာ','near here'],['ဝေးလား','is it far?'],['နီးတယ်','is near']]}]},
{id:'my_farnear_5',title:'Checkpoint',step:'checkpoint',meta:'Distance mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "is near"?',o:['နီးတယ်','ဝေးတယ်','နည်းနည်း','ဒီနားမှာ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဒီနားမှာ',o:['ဒီနားမှာ','ဟိုမှာ','ဘယ်မှာ','နီးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဝေးလား',o:['is it far?','is it near?','how much?','where is it?'],a:0},
{t:'wb',q:'Build: The school is over there',a:['ကျောင်း','ဟိုမှာ','ရှိတယ်'],pool:['ကျောင်း','ဟိုမှာ','ရှိတယ်','ဒီနားမှာ']},
{t:'mc',q:'far · near =',o:['ဝေး · နီး','နီး · ဝေး','ဝယ် · နီး','ဝေး · နေ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ဝေးတယ်','is far'],['နီးတယ်','is near'],['ဟိုမှာ','over there'],['ဒီနားမှာ','near here']]}]},

/* --- Topic 4: tickets & stations --- */
{id:'my_tik',title:'Tickets & stations',step:'learn',meta:'လက်မှတ် ဘူတာ လေဆိပ် ထွက်',vocab:[['လက်မှတ်','leq hmaq','ticket'],['ဘူတာ','bu ta','train station'],['လေဆိပ်','lei zeiq','airport'],['ထွက်တယ်','htweq de','leave / depart'],['အချိန်','a chein','time'],['ဘယ်အချိန်ထွက်လဲ','beh a chein htweq leh','what time does it leave?']],ex:[
{t:'note',tag:'At the counter',q:'လက်မှတ် · ဘူတာ · လေဆိပ်',body:'<p><span class="deva">လက်မှတ်</span> <b>leq hmaq</b> = ticket (literally "hand-mark"!). Buy one at the <span class="deva">ဘူတာ</span> <b>bu ta</b> (train station) or the <span class="deva">လေဆိပ်</span> <b>lei zeiq</b> (airport — "air port", literally).</p>',eg:[['လက်မှတ်','leq hmaq','ticket'],['ဘူတာ','bu ta','station'],['လေဆိပ်','lei zeiq','airport']]},
{t:'mc',q:'Which means "ticket"?',o:['လက်မှတ်','ဘူတာ','လေဆိပ်','အချိန်'],a:0},
{t:'mc',q:'What does this mean?',d:'လေဆိပ်',o:['airport','train station','bus stop','harbor'],a:0},
{t:'note',tag:'When does it go?',q:'ထွက် · အချိန်',body:'<p><span class="deva">ထွက်တယ်</span> <b>htweq de</b> = leave, depart. <span class="deva">အချိန်</span> <b>a chein</b> = time.</p><p>The traveler question: <span class="deva">ဘယ်အချိန်ထွက်လဲ</span> — what time does it leave?</p>',eg:[['ထွက်တယ်','htweq de','depart'],['ဘယ်အချိန်ထွက်လဲ','beh a chein htweq leh','what time does it leave?']]},
{t:'mc',q:'Which means "leave / depart"?',o:['ထွက်တယ်','ရောက်တယ်','သွားတယ်','စီးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်အချိန်ထွက်လဲ',o:['what time does it leave?','what time is it?','when does it arrive?','how long does it take?'],a:0},
{t:'li',q:'Listen — which one?',say:'လက်မှတ်',o:['လက်မှတ်','ဘူတာ','လေဆိပ်','အချိန်'],a:0}]},
{id:'my_tik_2',title:'Hear the journey',step:'recognize',meta:'Spot the travel words',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဘူတာ',o:['ဘူတာ','ဘူး','လေဆိပ်','ဘတ်စ်ကား'],a:0},
{t:'mc',q:'Which means "airport"?',o:['လေဆိပ်','ဘူတာ','လက်မှတ်','လေ'],a:0},
{t:'li',q:'Listen — which one?',say:'ထွက်တယ်',o:['ထွက်တယ်','ရောက်တယ်','ထိုင်တယ်','ဝယ်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'အချိန်',o:['time','ticket','hour','clock'],a:0},
{t:'mc',q:'ထွက်တယ် vs ရောက်တယ် —',o:['depart vs arrive','arrive vs depart','both depart','both arrive'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်အချိန်ထွက်လဲ',o:['ဘယ်အချိန်ထွက်လဲ','ဘယ်နှနာရီလဲ','ထွက်တယ်','အချိန်'],a:0},
{t:'mc',q:'လက်မှတ် is literally…',o:['hand-mark','paper-money','seat-paper','way-pass'],a:0}]},
{id:'my_tik_3',title:'Put it together',step:'build',meta:'Buy your passage',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['လက်မှတ်','ticket'],['ဘူတာ','train station'],['လေဆိပ်','airport'],['အချိန်','time']]},
{t:'wb',q:'Build: One ticket, please — ticket one thing please-give',a:['လက်မှတ်','တစ်','ခု','ပေးပါ'],pool:['လက်မှတ်','တစ်','ခု','ပေးပါ','ယောက်']},
{t:'mc',q:'"The train leaves" is…',o:['ရထားထွက်တယ်','ရထားရောက်တယ်','ရထားစီးတယ်','ရထားလာတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'လေဆိပ်',o:['လေဆိပ်','ဘူတာ','လက်မှတ်','လေ'],a:0},
{t:'wb',q:'Build: What time does the bus leave?',a:['ဘတ်စ်ကား','ဘယ်အချိန်','ထွက်လဲ'],pool:['ဘတ်စ်ကား','ဘယ်အချိန်','ထွက်လဲ','ရောက်လဲ']},
{t:'match',q:'Match line and meaning',pairs:[['ထွက်တယ်','depart'],['ရောက်တယ်','arrive'],['ဘယ်အချိန်ထွက်လဲ','what time does it leave?'],['လက်မှတ်','ticket']]}]},
{id:'my_tik_4',title:'Mix it',step:'mix',meta:'Catch that train',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဘူတာ',o:['train station','airport','bus','ticket'],a:0},
{t:'li',q:'Listen — which one?',say:'အချိန်',o:['အချိန်','ချိန်','အခန်း','နာရီ'],a:0},
{t:'mc',q:'Flying to Mandalay — first stop:',o:['လေဆိပ်','ဘူတာ','ဈေး','လက်ဖက်ရည်ဆိုင်'],a:0},
{t:'wb',q:'Build: Ticket, please',a:['လက်မှတ်','ပေးပါ'],pool:['လက်မှတ်','ပေးပါ','ဝယ်ပါ']},
{t:'li',q:'Listen — which one?',say:'ထွက်တယ်',o:['ထွက်တယ်','ထွက်လဲ','ရောက်တယ်','ထိုင်ပါ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဘူတာ','train station'],['လေဆိပ်','airport'],['အချိန်','time'],['ထွက်တယ်','depart']]}]},
{id:'my_tik_5',title:'Checkpoint',step:'checkpoint',meta:'Journeys mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "train station"?',o:['ဘူတာ','လေဆိပ်','ဘတ်စ်ကား','လက်မှတ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်အချိန်ထွက်လဲ',o:['ဘယ်အချိန်ထွက်လဲ','ဘယ်နှနာရီလဲ','ဘယ်အချိန်ရောက်လဲ','ထွက်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လက်မှတ်',o:['ticket','time','station','money'],a:0},
{t:'wb',q:'Build: What time does the train leave?',a:['ရထား','ဘယ်အချိန်','ထွက်လဲ'],pool:['ရထား','ဘယ်အချိန်','ထွက်လဲ','နီးလား']},
{t:'mc',q:'depart · arrive =',o:['ထွက် · ရောက်','ရောက် · ထွက်','သွား · လာ','စီး · ဆင်း'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['လက်မှတ်','ticket'],['ဘူတာ','train station'],['လေဆိပ်','airport'],['ဘယ်အချိန်ထွက်လဲ','what time does it leave?']]}]},

/* --- Topic 5: hotel & the have-verb ရှိ --- */
{id:'my_hotel',title:'At the hotel',step:'learn',meta:'ရှိ — have & there-is + အခန်း',vocab:[['ရှိတယ်','shi de','there is / have'],['မရှိဘူး','ma shi bu','there is not / do not have'],['ဟိုတယ်','ho teh','hotel'],['အခန်း','a hkan','room'],['အခန်းရှိလား','a hkan shi la','do you have a room?'],['သော့','thaw','key']],ex:[
{t:'note',tag:'The have-verb',q:'ရှိတယ် · မရှိဘူး',body:'<p>Meet the most useful verb you did not know you were missing: <span class="deva">ရှိတယ်</span> <b>shi de</b> — there is / I have. <span class="deva">မရှိဘူး</span> — there is not / I do not have.</p><p><span class="deva">ပိုက်ဆံရှိလား</span> — got money? <span class="deva">အချိန်မရှိဘူး</span> — no time!</p>',eg:[['ရှိတယ်','shi de','there is / have'],['မရှိဘူး','ma shi bu','there is not']]},
{t:'mc',q:'Which means "there is / have"?',o:['ရှိတယ်','ရတယ်','ရောက်တယ်','နေတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မရှိဘူး',o:['there is not / do not have','must not','cannot','never was'],a:0},
{t:'note',tag:'Checking in',q:'ဟိုတယ် · အခန်း · သော့',body:'<p><span class="deva">ဟိုတယ်</span> <b>ho teh</b> = hotel (another English word in Burmese clothes). <span class="deva">အခန်း</span> <b>a hkan</b> = room · <span class="deva">သော့</span> <b>thaw</b> = key.</p><p>At the desk: <span class="deva">အခန်းရှိလား</span> — do you have a room?</p>',eg:[['အခန်း','a hkan','room'],['အခန်းရှိလား','a hkan shi la','do you have a room?'],['သော့','thaw','key']]},
{t:'mc',q:'How do you ask "Do you have a room?"',o:['အခန်းရှိလား','အခန်းဘယ်မှာလဲ','အခန်းကြီးလား','အခန်းပေးပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'သော့',o:['key','room','door','lock'],a:0},
{t:'li',q:'Listen — which one?',say:'အခန်းရှိလား',o:['အခန်းရှိလား','အခန်း','ရှိတယ်','ဟိုတယ်'],a:0}]},
{id:'my_hotel_2',title:'Hear the check-in',step:'recognize',meta:'Spot the hotel words',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ရှိတယ်',o:['ရှိတယ်','မရှိဘူး','ရတယ်','ရှိလား'],a:0},
{t:'mc',q:'Which means "room"?',o:['အခန်း','ဟိုတယ်','သော့','အချိန်'],a:0},
{t:'li',q:'Listen — which one?',say:'သော့',o:['သော့','သွား','သော','ဆော့'],a:0},
{t:'mc',q:'What does this mean?',d:'ဟိုတယ်',o:['hotel','over there','that one','house'],a:0},
{t:'mc',q:'The desk answers မရှိဘူး. That means…',o:['no rooms available','rooms available','come tomorrow','too expensive'],a:0},
{t:'li',q:'Listen — which one?',say:'အခန်း',o:['အခန်း','အချိန်','ခဏ','အလုပ်'],a:0},
{t:'mc',q:'"No time!" is…',o:['အချိန်မရှိဘူး','အချိန်ရှိတယ်','အခန်းမရှိဘူး','ခဏစောင့်ပါ'],a:0}]},
{id:'my_hotel_3',title:'Put it together',step:'build',meta:'Check in smoothly',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ရှိတယ်','there is / have'],['ဟိုတယ်','hotel'],['အခန်း','room'],['သော့','key']]},
{t:'wb',q:'Build: Do you have a room?',a:['အခန်း','ရှိလား'],pool:['အခန်း','ရှိလား','ရှိတယ်']},
{t:'mc',q:'"I have money" is…',o:['ပိုက်ဆံရှိတယ်','ပိုက်ဆံမရှိဘူး','ပိုက်ဆံရတယ်','ပိုက်ဆံပေးပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'မရှိဘူး',o:['မရှိဘူး','ရှိတယ်','မသိဘူး','မရဘူး'],a:0},
{t:'wb',q:'Build: Key, please',a:['သော့','ပေးပါ'],pool:['သော့','ပေးပါ','ရှိလား']},
{t:'match',q:'Match line and meaning',pairs:[['အခန်းရှိလား','do you have a room?'],['မရှိဘူး','there is not'],['ရှိတယ်','there is'],['သော့','key']]}]},
{id:'my_hotel_4',title:'Mix it',step:'mix',meta:'A night in town',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အခန်းရှိလား',o:['do you have a room?','where is the room?','is the room big?','room key, please'],a:0},
{t:'li',q:'Listen — which one?',say:'ဟိုတယ်',o:['ဟိုတယ်','ဟိုဟာ','ဟိုမှာ','ဟုတ်တယ်'],a:0},
{t:'mc',q:'You lost your key. At the desk:',o:['သော့မရှိဘူး','သော့ရှိတယ်','အခန်းကြီးတယ်','ရောက်ပြီ'],a:0},
{t:'wb',q:'Build: Is there a teashop near here?',a:['ဒီနားမှာ','လက်ဖက်ရည်ဆိုင်','ရှိလား'],pool:['ဒီနားမှာ','လက်ဖက်ရည်ဆိုင်','ရှိလား','ရှိတယ်']},
{t:'li',q:'Listen — which one?',say:'ရှိလား',o:['ရှိလား','ရှိတယ်','ရလား','မရှိဘူး'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဟိုတယ်','hotel'],['အခန်း','room'],['သော့','key'],['မရှိဘူး','do not have']]}]},
{id:'my_hotel_5',title:'Checkpoint',step:'checkpoint',meta:'Hotel mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "key"?',o:['သော့','အခန်း','ဟိုတယ်','လက်မှတ်'],a:0},
{t:'li',q:'Listen — which one?',say:'အခန်းရှိလား',o:['အခန်းရှိလား','အခန်း','ရှိလား','ဟိုတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရှိတယ်',o:['there is / have','it is OK','arrived','know'],a:0},
{t:'wb',q:'Build: I do not have time',a:['အချိန်','မရှိဘူး'],pool:['အချိန်','မရှိဘူး','ရှိတယ်']},
{t:'mc',q:'The have/there-is verb is…',o:['ရှိ','ရ','နေ','ရောက်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ရှိတယ်','there is / have'],['အခန်း','room'],['သော့','key'],['ဟိုတယ်','hotel']]}]},

/* --- Topic 6: months, years & dates --- */
{id:'my_month',title:'Months & dates',step:'learn',meta:'လ နှစ် ရက် — the calendar',vocab:[['လ','la','month (& the moon)'],['ဒီလ','di la','this month'],['နောက်လ','nauq la','next month'],['နှစ်','hniq','year'],['ဒီနှစ်','di hniq','this year'],['ရက်','yeq','day (of the month)'],['ဘယ်နှရက်လဲ','beh hna yeq leh','what date is it?']],ex:[
{t:'note',tag:'Moon months',q:'လ · ဒီလ · နောက်လ',body:'<p><span class="deva">လ</span> <b>la</b> is the moon — and so also the month. <span class="deva">ဒီလ</span> this month (there is our ဒီ from ဒီနေ့!) · <span class="deva">နောက်လ</span> <b>nauq la</b> next month.</p>',eg:[['လ','la','month / moon'],['ဒီလ','di la','this month'],['နောက်လ','nauq la','next month']]},
{t:'mc',q:'Which means "month"?',o:['လ','နှစ်','ရက်','နေ့'],a:0},
{t:'mc',q:'What does this mean?',d:'နောက်လ',o:['next month','last month','this month','the moon'],a:0},
{t:'note',tag:'Years & dates',q:'နှစ် · ရက်',body:'<p>Surprise: <span class="deva">နှစ်</span> <b>hniq</b> = year… and also "two"! Same sound, context decides. <span class="deva">ဒီနှစ်</span> = this year.</p><p><span class="deva">ရက်</span> <b>yeq</b> = day of the month. <span class="deva">ဒီနေ့ ဘယ်နှရက်လဲ</span> — what date is today?</p>',eg:[['ဒီနှစ်','di hniq','this year'],['ရက်','yeq','date'],['ဘယ်နှရက်လဲ','beh hna yeq leh','what date is it?']]},
{t:'mc',q:'Which means "this year"?',o:['ဒီနှစ်','ဒီလ','ဒီနေ့','နောက်လ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်နှရက်လဲ',o:['what date is it?','what day of the week?','what time is it?','how many years?'],a:0},
{t:'li',q:'Listen — which one?',say:'နောက်လ',o:['နောက်လ','ဒီလ','နှစ်','လ'],a:0}]},
{id:'my_month_2',title:'Hear the calendar',step:'recognize',meta:'Month, year or date?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'လ',o:['လ','နှစ်','ရက်','လာ'],a:0},
{t:'mc',q:'Which means "year"?',o:['နှစ်','လ','ရက်','နေ့'],a:0},
{t:'li',q:'Listen — which one?',say:'ဒီနှစ်',o:['ဒီနှစ်','ဒီလ','ဒီနေ့','နှစ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရက်',o:['day of the month','week','month','hour'],a:0},
{t:'mc',q:'နှစ် means year AND…',o:['two','new','moon','day'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်နှရက်လဲ',o:['ဘယ်နှရက်လဲ','ဘယ်နှနာရီလဲ','ဘယ်နှယောက်လဲ','ရက်'],a:0},
{t:'mc',q:'လ means month because it is also the word for…',o:['the moon','the sun','the sky','the night'],a:0}]},
{id:'my_month_3',title:'Put it together',step:'build',meta:'Date your plans',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['လ','month'],['နှစ်','year'],['ရက်','date'],['နောက်လ','next month']]},
{t:'wb',q:'Build: (I) will go to Myanmar next month',a:['နောက်လ','မြန်မာ','ကို','သွားမယ်'],pool:['နောက်လ','မြန်မာ','ကို','သွားမယ်','ဒီလ']},
{t:'mc',q:'"This month" is…',o:['ဒီလ','ဒီနှစ်','ဒီနေ့','နောက်လ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဒီလ',o:['ဒီလ','ဒီနှစ်','နောက်လ','ဒီနေ့'],a:0},
{t:'wb',q:'Build: What date is today?',a:['ဒီနေ့','ဘယ်နှရက်','လဲ'],pool:['ဒီနေ့','ဘယ်နှရက်','လဲ','လား']},
{t:'match',q:'Match word and meaning',pairs:[['ဒီလ','this month'],['ဒီနှစ်','this year'],['ဒီနေ့','today'],['နောက်လ','next month']]}]},
{id:'my_month_4',title:'Mix it',step:'mix',meta:'Calendar in action',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဒီနှစ်',o:['this year','this month','today','two of these'],a:0},
{t:'li',q:'Listen — which one?',say:'ရက်',o:['ရက်','ရေ','နှစ်','လ'],a:0},
{t:'mc',q:'Your visa run is coming. "Next month I must go":',o:['နောက်လသွားရမယ်','ဒီလသွားဖူးတယ်','ဒီနှစ်လာမယ်','မနေ့ကသွားခဲ့တယ်'],a:0},
{t:'wb',q:'Build: (I) will work this year',a:['ဒီနှစ်','အလုပ်လုပ်မယ်'],pool:['ဒီနှစ်','အလုပ်လုပ်မယ်','အလုပ်လုပ်တယ်']},
{t:'li',q:'Listen — which one?',say:'ဒီနှစ်',o:['ဒီနှစ်','နှစ်','ဒီလ','ဒီနေ့'],a:0},
{t:'match',q:'Match span and word',pairs:[['ရက်','day of the month'],['လ','month'],['နှစ်','year'],['နာရီ','hour']]}]},
{id:'my_month_5',title:'Checkpoint',step:'checkpoint',meta:'Calendar mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "next month"?',o:['နောက်လ','ဒီလ','နောက်နှစ်','ဒီနှစ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်နှရက်လဲ',o:['ဘယ်နှရက်လဲ','ဘယ်နှရာလဲ','ဘယ်နှနာရီလဲ','ရက်'],a:0},
{t:'mc',q:'What does this mean?',d:'လ',o:['month / moon','year','date','week'],a:0},
{t:'wb',q:'Build: (She) will come next month',a:['နောက်လ','လာမယ်'],pool:['နောက်လ','လာမယ်','လာခဲ့တယ်']},
{t:'mc',q:'day · month · year =',o:['ရက် · လ · နှစ်','လ · ရက် · နှစ်','နှစ် · လ · ရက်','ရက် · နှစ် · လ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ရက်','date'],['ဒီလ','this month'],['ဒီနှစ်','this year'],['နောက်လ','next month']]}]},

/* --- Topic 7: phone & keeping in touch --- */
{id:'my_phone',title:'On the phone',step:'learn',meta:'ဖုန်း နံပါတ် ဆက် ပို့',vocab:[['ဖုန်း','hpoun','phone'],['နံပါတ်','nan baq','number'],['ဖုန်းဆက်တယ်','hpoun hseq de','make a call'],['စာပို့တယ်','sa po de','send a message'],['ဖုန်းနံပါတ်ဘယ်လောက်လဲ','hpoun nan baq beh lauq leh','what is your phone number?']],ex:[
{t:'note',tag:'Stay in touch',q:'ဖုန်း · နံပါတ်',body:'<p><span class="deva">ဖုန်း</span> <b>hpoun</b> = phone · <span class="deva">နံပါတ်</span> <b>nan baq</b> = number (two more English words dressed in Burmese!).</p><p>Ask for digits with the amount-question: <span class="deva">ဖုန်းနံပါတ်ဘယ်လောက်လဲ</span> — what is your phone number?</p>',eg:[['ဖုန်း','hpoun','phone'],['နံပါတ်','nan baq','number']]},
{t:'mc',q:'Which means "phone"?',o:['ဖုန်း','နံပါတ်','စာ','သော့'],a:0},
{t:'mc',q:'How do you ask for someone’s phone number?',o:['ဖုန်းနံပါတ်ဘယ်လောက်လဲ','ဖုန်းဘယ်မှာလဲ','ဖုန်းရှိလား','ဖုန်းဆက်တယ်'],a:0},
{t:'note',tag:'Call & text',q:'ဆက် · ပို့',body:'<p><span class="deva">ဖုန်းဆက်တယ်</span> <b>hpoun hseq de</b> = make a call (ဆက် = connect). <span class="deva">စာပို့တယ်</span> <b>sa po de</b> = send a message (စာ = writing, ပို့ = send).</p>',eg:[['ဖုန်းဆက်တယ်','hpoun hseq de','make a call'],['စာပို့တယ်','sa po de','send a message']]},
{t:'mc',q:'Which means "make a call"?',o:['ဖုန်းဆက်တယ်','စာပို့တယ်','ဖုန်းဝယ်တယ်','ဖုန်းရှိတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'စာပို့တယ်',o:['send a message','make a call','write a book','read a letter'],a:0},
{t:'li',q:'Listen — which one?',say:'ဖုန်းဆက်တယ်',o:['ဖုန်းဆက်တယ်','စာပို့တယ်','ဖုန်း','နံပါတ်'],a:0}]},
{id:'my_phone_2',title:'Hear the call',step:'recognize',meta:'Spot the phone words',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဖုန်း',o:['ဖုန်း','နံပါတ်','ဖုန်းဆက်တယ်','ဟုန်း'],a:0},
{t:'mc',q:'Which means "number"?',o:['နံပါတ်','ဖုန်း','ရက်','စာ'],a:0},
{t:'li',q:'Listen — which one?',say:'စာပို့တယ်',o:['စာပို့တယ်','ဖုန်းဆက်တယ်','စာ','ပို့တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဖုန်းနံပါတ်ဘယ်လောက်လဲ',o:['what is your phone number?','where is your phone?','do you have a phone?','whose number is this?'],a:0},
{t:'mc',q:'ဆက် in ဖုန်းဆက်တယ် means…',o:['connect','send','buy','hold'],a:0},
{t:'li',q:'Listen — which one?',say:'နံပါတ်',o:['နံပါတ်','ဖုန်း','နာရီ','ရာ'],a:0},
{t:'mc',q:'ဖုန်း and နံပါတ် came into Burmese from…',o:['English','Pali','Mon','Chinese'],a:0}]},
{id:'my_phone_3',title:'Put it together',step:'build',meta:'Swap numbers',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ဖုန်း','phone'],['နံပါတ်','number'],['ဖုန်းဆက်တယ်','make a call'],['စာပို့တယ်','send a message']]},
{t:'wb',q:'Build: What is your phone number?',a:['ဖုန်းနံပါတ်','ဘယ်လောက်','လဲ'],pool:['ဖုန်းနံပါတ်','ဘယ်လောက်','လဲ','လား']},
{t:'mc',q:'"(I) will call tomorrow" is…',o:['မနက်ဖြန်ဖုန်းဆက်မယ်','မနက်ဖြန်စာပို့ခဲ့တယ်','ဒီနေ့ဖုန်းဆက်တယ်','ဖုန်းနံပါတ်ဘယ်လောက်လဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဖုန်းနံပါတ်ဘယ်လောက်လဲ',o:['ဖုန်းနံပါတ်ဘယ်လောက်လဲ','ဖုန်းဆက်တယ်','ဒါဘယ်လောက်လဲ','နံပါတ်'],a:0},
{t:'wb',q:'Build: Please send a message — message send-please',a:['စာ','ပို့ပါ'],pool:['စာ','ပို့ပါ','ပို့တယ်']},
{t:'match',q:'Match action and meaning',pairs:[['ဖုန်းဆက်တယ်','make a call'],['စာပို့တယ်','send a message'],['ဖုန်း','phone'],['နံပါတ်','number']]}]},
{id:'my_phone_4',title:'Mix it',step:'mix',meta:'Keep in touch',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဖုန်းဆက်တယ်',o:['make a call','send a message','buy a phone','answer'],a:0},
{t:'li',q:'Listen — which one?',say:'စာပို့တယ်',o:['စာပို့တယ်','စားပို့တယ်','ဖုန်းဆက်တယ်','စာ'],a:0},
{t:'mc',q:'New friend at the teashop. Before leaving, ask…',o:['ဖုန်းနံပါတ်ဘယ်လောက်လဲ','ဘယ်နှရက်လဲ','အခန်းရှိလား','ဘယ်အချိန်ထွက်လဲ'],a:0},
{t:'wb',q:'Build: (I) will call tonight — night phone-call-will',a:['ည','ဖုန်းဆက်မယ်'],pool:['ည','ဖုန်းဆက်မယ်','ဖုန်းဆက်တယ်']},
{t:'li',q:'Listen — which one?',say:'ဖုန်း',o:['ဖုန်း','ဖူး','ပုန်း','နံပါတ်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဖုန်း','phone'],['စာပို့တယ်','send a message'],['နံပါတ်','number'],['ဖုန်းနံပါတ်ဘယ်လောက်လဲ','what is your number?']]}]},
{id:'my_phone_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 8 complete!',vocab:[],ex:[
{t:'mc',q:'Which means "send a message"?',o:['စာပို့တယ်','ဖုန်းဆက်တယ်','ဖုန်းဝယ်တယ်','စာဖတ်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'နံပါတ်',o:['နံပါတ်','ဖုန်း','နာရီ','ရက်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဖုန်း',o:['phone','number','message','call'],a:0},
{t:'wb',q:'Build: I will make a call tomorrow (man speaking)',a:['ကျွန်တော်','မနက်ဖြန်','ဖုန်းဆက်မယ်'],pool:['ကျွန်တော်','မနက်ဖြန်','ဖုန်းဆက်မယ်','စာပို့တယ်']},
{t:'mc',q:'call · text =',o:['ဆက် · ပို့','ပို့ · ဆက်','ဝယ် · ရောင်း','ထွက် · ရောက်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဖုန်း','phone'],['နံပါတ်','number'],['ဖုန်းဆက်တယ်','make a call'],['စာပို့တယ်','send a message']]}]},

/* ===================== ZONE 9 · SAY MORE =====================
   The conversational glue: but ဒါပေမဲ့ (standard colloquial spelling per
   Wiktionary), because/quote လို့, if ရင်, think ထင်, occupations (doer
   suffixes), hobbies, home routine, help & safety. Per Mesher L10
   (subordinate clauses, occupations) & FSI-style situational units. */
/* --- Topic 1: but, because & then --- */
{id:'my_conj',title:'But & because',step:'learn',meta:'ဒါပေမဲ့ လို့ ပြီးတော့',vocab:[['ဒါပေမဲ့','da be meh','but / however'],['လို့','lo','because (reason + လို့)'],['ပြီးတော့','pyi daw','and then / after that'],['ဘာလို့လဲ','ba lo leh','why?'],['ဗိုက်ဆာလို့စားတယ်','baiq hsa lo sa de','(I) eat because (I) am hungry']],ex:[
{t:'note',tag:'Zone 9',q:'Glue your sentences',body:'<p>You can build sentences — now join them. <span class="deva">ဒါပေမဲ့</span> <b>da be meh</b> = but. <span class="deva">ပြီးတော့</span> <b>pyi daw</b> = and then (spot ပြီး "finish" inside!).</p>',eg:[['ဒါပေမဲ့','da be meh','but'],['ပြီးတော့','pyi daw','and then']]},
{t:'mc',q:'Which means "but"?',o:['ဒါပေမဲ့','ပြီးတော့','လို့','ဒါပဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ပြီးတော့',o:['and then / after that','but','because','finally'],a:0},
{t:'note',tag:'Because',q:'reason + လို့',body:'<p>"Because" hangs <span class="deva">လို့</span> <b>lo</b> on the reason, which comes FIRST: <span class="deva">ဗိုက်ဆာလို့စားတယ်</span> — hungry-because, (I) eat.</p><p>Ask the reason with <span class="deva">ဘာလို့လဲ</span> <b>ba lo leh</b> — why? — and answer with …လို့.</p>',eg:[['ဘာလို့လဲ','ba lo leh','why?'],['ဗိုက်ဆာလို့စားတယ်','baiq hsa lo sa de','eat because hungry']]},
{t:'mc',q:'How do you ask "why?"',o:['ဘာလို့လဲ','ဘယ်လို','ဘာလဲ','ဘယ်တော့လဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဗိုက်ဆာလို့စားတယ်',o:['(I) eat because (I) am hungry','(I) am hungry but do not eat','after eating (I) am full','(I) want to eat later'],a:0},
{t:'li',q:'Listen — which one?',say:'ဒါပေမဲ့',o:['ဒါပေမဲ့','ပြီးတော့','ဘာလို့လဲ','ဒါပဲ'],a:0}]},
{id:'my_conj_2',title:'Hear the glue',step:'recognize',meta:'but / because / then',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ပြီးတော့',o:['ပြီးတော့','ဒါပေမဲ့','ပြီးပြီ','လို့'],a:0},
{t:'mc',q:'In "hungry-because I eat", the reason comes…',o:['first, wearing လို့','last','anywhere','after the verb'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘာလို့လဲ',o:['ဘာလို့လဲ','ဘာလဲ','ဘယ်လို','ဘာလုပ်နေလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဒါပေမဲ့',o:['but / however','and then','because','that is all'],a:0},
{t:'mc',q:'ကြိုက်တယ်၊ ဒါပေမဲ့ ဈေးကြီးတယ် means…',o:['I like it, but it is expensive','I like it because it is cheap','I do not like it at all','it is cheap and good'],a:0},
{t:'li',q:'Listen — which one?',say:'ဗိုက်ဆာလို့စားတယ်',o:['ဗိုက်ဆာလို့စားတယ်','ဗိုက်ဆာတယ်','စားတယ်','ဘာလို့လဲ'],a:0},
{t:'mc',q:'ပြီးတော့ contains which word you know?',o:['ပြီး (finish)','ပေး (give)','ပြော (speak)','ပို (more)'],a:0}]},
{id:'my_conj_3',title:'Put it together',step:'build',meta:'Join two thoughts',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ဒါပေမဲ့','but'],['လို့','because'],['ပြီးတော့','and then'],['ဘာလို့လဲ','why?']]},
{t:'wb',q:'Build: (I) eat because (I) am hungry — hungry-because eat',a:['ဗိုက်ဆာလို့','စားတယ်'],pool:['ဗိုက်ဆာလို့','စားတယ်','ဒါပေမဲ့']},
{t:'mc',q:'"I want to go, BUT I have no time":',o:['သွားချင်တယ်၊ ဒါပေမဲ့ အချိန်မရှိဘူး','သွားချင်လို့ အချိန်ရှိတယ်','ပြီးတော့ သွားမယ်','အချိန်ရှိရင် သွားမယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'လို့',o:['လို့','လို','လဲ','လား'],a:0},
{t:'wb',q:'Build: Why will you not eat? — why not-eat-question',a:['ဘာလို့','မစားတာလဲ'],pool:['ဘာလို့','မစားတာလဲ','စားတယ်']},
{t:'match',q:'Match line and meaning',pairs:[['ဗိုက်ဆာလို့စားတယ်','eat because hungry'],['ဒါပေမဲ့','but'],['ပြီးတော့','and then'],['ဘာလို့လဲ','why?']]}]},
{id:'my_conj_4',title:'Mix it',step:'mix',meta:'Glue in action',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဘာလို့လဲ',o:['why?','what is it?','how?','when?'],a:0},
{t:'li',q:'Listen — which one?',say:'ဒါပေမဲ့',o:['ဒါပေမဲ့','ဒါပဲ','ဒါ','ပြီးတော့'],a:0},
{t:'mc',q:'A friend skips lunch. You ask…',o:['ဘာလို့လဲ','ဘယ်သူလဲ','ဘယ်မှာလဲ','ဘယ်တော့လဲ'],a:0},
{t:'wb',q:'Build: (I) drink because (I) am thirsty',a:['ရေဆာလို့','သောက်တယ်'],pool:['ရေဆာလို့','သောက်တယ်','ဗိုက်ဆာလို့']},
{t:'li',q:'Listen — which one?',say:'ပြီးတော့',o:['ပြီးတော့','ပြီးပြီ','ပြီးရင်','ဒါပေမဲ့'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဒါပေမဲ့','but'],['ပြီးတော့','and then'],['ဘာလို့လဲ','why?'],['လို့','because']]}]},
{id:'my_conj_5',title:'Checkpoint',step:'checkpoint',meta:'Glue mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "and then"?',o:['ပြီးတော့','ဒါပေမဲ့','လို့','ရင်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘာလို့လဲ',o:['ဘာလို့လဲ','ဘာလို့','ဘာလဲ','ဘာလုပ်နေလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဒါပေမဲ့',o:['but','because','so','if'],a:0},
{t:'wb',q:'Build: (I) eat because (I) am hungry',a:['ဗိုက်ဆာလို့','စားတယ်'],pool:['ဗိုက်ဆာလို့','စားတယ်','ပြီးတော့']},
{t:'mc',q:'but · because · and then =',o:['ဒါပေမဲ့ · လို့ · ပြီးတော့','လို့ · ဒါပေမဲ့ · ပြီးတော့','ပြီးတော့ · လို့ · ဒါပေမဲ့','ဒါပေမဲ့ · ပြီးတော့ · လို့'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဒါပေမဲ့','but'],['လို့','because'],['ပြီးတော့','and then'],['ဗိုက်ဆာလို့စားတယ်','eat because hungry']]}]},

/* --- Topic 2: if/when ရင် --- */
{id:'my_if',title:'If: ရင်',step:'learn',meta:'မိုးရွာရင် — ifs & whens',vocab:[['ရင်','yin','if / when'],['မိုးရွာရင်','mo ywa yin','if it rains'],['အချိန်ရှိရင်','a chein shi yin','if (you) have time'],['ဗိုက်ဆာရင်','baiq hsa yin','if (you) are hungry'],['မိုးရွာရင်မသွားဘူး','mo ywa yin ma thwa bu','if it rains, (I) will not go']],ex:[
{t:'note',tag:'The if-tail',q:'verb + ရင်',body:'<p>"If / when" hangs <span class="deva">ရင်</span> <b>yin</b> on the condition — which comes first, just like the လို့ reason: <span class="deva">မိုးရွာရင်</span> if it rains… <span class="deva">အချိန်ရှိရင်</span> if you have time…</p>',eg:[['မိုးရွာရင်','mo ywa yin','if it rains'],['အချိန်ရှိရင်','a chein shi yin','if you have time']]},
{t:'mc',q:'Which means "if it rains"?',o:['မိုးရွာရင်','မိုးရွာတယ်','မိုးရွာလို့','မိုးရွာနေတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'အချိန်ရှိရင်',o:['if (you) have time','because there is time','there is no time','what time is it?'],a:0},
{t:'note',tag:'Then what?',q:'if-half + normal sentence',body:'<p>After the ရင်-half, just say what happens: <span class="deva">မိုးရွာရင် မသွားဘူး</span> — if it rains, I am not going. <span class="deva">ဗိုက်ဆာရင် စားပါ</span> — if you are hungry, eat!</p>',eg:[['မိုးရွာရင်မသွားဘူး','mo ywa yin ma thwa bu','if it rains, (I) will not go'],['ဗိုက်ဆာရင်','baiq hsa yin','if hungry…']]},
{t:'mc',q:'What does this mean?',d:'မိုးရွာရင်မသွားဘူး',o:['if it rains, (I) will not go','it rained, so (I) did not go','it is raining now','(I) will go although it rains'],a:0},
{t:'mc',q:'"If you are hungry, eat!" =',o:['ဗိုက်ဆာရင် စားပါ','ဗိုက်ဆာလို့ စားတယ်','ဗိုက်ဆာတယ်','စားပြီးပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'မိုးရွာရင်',o:['မိုးရွာရင်','မိုးရွာတယ်','မိုးရာသီ','မိုးရွာနေတယ်'],a:0}]},
{id:'my_if_2',title:'Hear the ifs',step:'recognize',meta:'if or because?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ရင်',o:['ရင်','ရာ','လို့','ရီ'],a:0},
{t:'mc',q:'Which means "if (you) are hungry"?',o:['ဗိုက်ဆာရင်','ဗိုက်ဆာလို့','ဗိုက်ဆာတယ်','ဗိုက်နာရင်'],a:0},
{t:'li',q:'Listen — which one?',say:'အချိန်ရှိရင်',o:['အချိန်ရှိရင်','အချိန်ရှိတယ်','အချိန်မရှိဘူး','ရှိရင်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရင်',o:['if / when','because','but','then'],a:0},
{t:'mc',q:'The condition (ရင်-half) goes…',o:['first','last','after the verb','anywhere'],a:0},
{t:'li',q:'Listen — which one?',say:'မိုးရွာရင်မသွားဘူး',o:['မိုးရွာရင်မသွားဘူး','မိုးရွာရင်','မသွားဘူး','မိုးရွာနေတယ်'],a:0},
{t:'mc',q:'လို့ vs ရင် —',o:['because vs if','if vs because','both because','both if'],a:0}]},
{id:'my_if_3',title:'Put it together',step:'build',meta:'Make a plan B',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ရင်','if / when'],['မိုးရွာရင်','if it rains'],['အချိန်ရှိရင်','if (you) have time'],['ဗိုက်ဆာရင်','if hungry']]},
{t:'wb',q:'Build: If it rains, (I) will not go',a:['မိုးရွာရင်','မသွားဘူး'],pool:['မိုးရွာရင်','မသွားဘူး','သွားမယ်']},
{t:'mc',q:'"If you have time, please come" =',o:['အချိန်ရှိရင် လာပါ','အချိန်ရှိလို့ လာတယ်','အချိန်မရှိဘူး','အခု လာပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဗိုက်ဆာရင်',o:['ဗိုက်ဆာရင်','ဗိုက်ဆာလို့','ဗိုက်ဆာတယ်','ရေဆာရင်'],a:0},
{t:'wb',q:'Build: If (you) are hungry, please eat',a:['ဗိုက်ဆာရင်','စားပါ'],pool:['ဗိုက်ဆာရင်','စားပါ','စားတယ်']},
{t:'match',q:'Match tail and job',pairs:[['ရင်','if'],['လို့','because'],['ပေမဲ့ (ဒါပေမဲ့)','but'],['ပြီးတော့','and then']]}]},
{id:'my_if_4',title:'Mix it',step:'mix',meta:'Ifs everywhere',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဗိုက်ဆာရင်',o:['if (you) are hungry','because (I) am hungry','(I) am hungry now','my stomach hurts'],a:0},
{t:'li',q:'Listen — which one?',say:'အချိန်ရှိရင်',o:['အချိန်ရှိရင်','အချိန်ရှိတယ်','အချိန်','ရှိရင်'],a:0},
{t:'mc',q:'Dark clouds gather over your picnic plan. You say…',o:['မိုးရွာရင် မသွားဘူး','မိုးရွာလို့ သွားတယ်','နေပူရင် မသွားဘူး','မိုးရွာဖူးတယ်'],a:0},
{t:'wb',q:'Build: If (I) have money, (I) will buy it',a:['ပိုက်ဆံရှိရင်','ဝယ်မယ်'],pool:['ပိုက်ဆံရှိရင်','ဝယ်မယ်','မဝယ်ဘူး']},
{t:'li',q:'Listen — which one?',say:'မိုးရွာရင်',o:['မိုးရွာရင်','မိုးရွာလို့','မိုးရာသီ','ရွာရင်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['မိုးရွာရင်','if it rains'],['အချိန်ရှိရင်','if (you) have time'],['ပိုက်ဆံရှိရင်','if (I) have money'],['ဗိုက်ဆာရင်','if hungry']]}]},
{id:'my_if_5',title:'Checkpoint',step:'checkpoint',meta:'If mastered?',vocab:[],ex:[
{t:'mc',q:'The if/when tail is…',o:['ရင်','လို့','ပါ','တော့'],a:0},
{t:'li',q:'Listen — which one?',say:'မိုးရွာရင်မသွားဘူး',o:['မိုးရွာရင်မသွားဘူး','မိုးရွာရင်','မိုးရွာလို့မသွားဘူး','မသွားဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'အချိန်ရှိရင်',o:['if (you) have time','if it is on time','because of the time','there is time'],a:0},
{t:'wb',q:'Build: If it rains, (I) will stay at home',a:['မိုးရွာရင်','အိမ်မှာ','နေမယ်'],pool:['မိုးရွာရင်','အိမ်မှာ','နေမယ်','သွားမယ်']},
{t:'mc',q:'Condition first, result after — which order is right?',o:['မိုးရွာရင် မသွားဘူး','မသွားဘူး မိုးရွာရင်','ရင်မိုးရွာ မသွားဘူး','မသွားရင် မိုးရွာဘူး'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ရင်','if / when'],['မိုးရွာရင်','if it rains'],['ဗိုက်ဆာရင်','if hungry'],['မိုးရွာရင်မသွားဘူး','if it rains, (I) will not go']]}]},

/* --- Topic 3: think, understand & say again --- */
{id:'my_think',title:'I think…',step:'learn',meta:'ထင်တယ် နားလည်တယ် ပြန်ပြောပါ',vocab:[['ထင်တယ်','htin de','think'],['ကောင်းတယ်လို့ထင်တယ်','kaung de lo htin de','(I) think it is good'],['နားလည်တယ်','na leh de','understand'],['နားမလည်ဘူး','na ma leh bu','do not understand'],['ပြန်ပြောပါ','pyan pyaw ba','please say it again']],ex:[
{t:'note',tag:'Opinions',q:'…လို့ ထင်တယ်',body:'<p><span class="deva">ထင်တယ်</span> <b>htin de</b> = think. To say WHAT you think, wrap the thought in our old friend <span class="deva">လို့</span>: <span class="deva">ကောင်းတယ်လို့ထင်တယ်</span> — "(I) think it is good." (လို့ is the quote-hook as well as "because"!)</p>',eg:[['ထင်တယ်','htin de','think'],['ကောင်းတယ်လို့ထင်တယ်','kaung de lo htin de','(I) think it is good']]},
{t:'mc',q:'Which means "think"?',o:['ထင်တယ်','သိတယ်','နားလည်တယ်','ပြောတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ကောင်းတယ်လို့ထင်တယ်',o:['(I) think it is good','it is definitely good','(I) know it is good','is it good?'],a:0},
{t:'note',tag:'Learner lifelines',q:'နားလည် · ပြန်ပြော',body:'<p><span class="deva">နားလည်တယ်</span> <b>na leh de</b> = understand (literally "ear-turns"!). <span class="deva">နားမလည်ဘူး</span> — I do not understand.</p><p>And the phrase that saves every conversation: <span class="deva">ပြန်ပြောပါ</span> <b>pyan pyaw ba</b> — please say it again (ပြန် = back/again + ပြော speak + ပါ).</p>',eg:[['နားလည်တယ်','na leh de','understand'],['နားမလည်ဘူး','na ma leh bu','do not understand'],['ပြန်ပြောပါ','pyan pyaw ba','say it again, please']]},
{t:'mc',q:'Which means "I do not understand"?',o:['နားမလည်ဘူး','နားလည်တယ်','မသိဘူး','မကြိုက်ဘူး'],a:0},
{t:'mc',q:'Someone speaks too fast. Your lifeline:',o:['ပြန်ပြောပါ','ပြောတတ်တယ်','နားလည်တယ်','ထင်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'နားမလည်ဘူး',o:['နားမလည်ဘူး','နားလည်တယ်','မသိဘူး','ပြန်ပြောပါ'],a:0}]},
{id:'my_think_2',title:'Hear the thinking',step:'recognize',meta:'think / understand / again',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ထင်တယ်',o:['ထင်တယ်','ထိုင်တယ်','သိတယ်','ထွက်တယ်'],a:0},
{t:'mc',q:'Which means "understand"?',o:['နားလည်တယ်','နားထောင်တယ်','ထင်တယ်','သိတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ပြန်ပြောပါ',o:['ပြန်ပြောပါ','ပြောပါ','ပြန်လာပါ','နားမလည်ဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'နားလည်တယ်',o:['understand','listen','hear','think'],a:0},
{t:'mc',q:'The လို့ in ကောင်းတယ်လို့ထင်တယ် works as…',o:['a quote-hook for the thought','because','if','but'],a:0},
{t:'li',q:'Listen — which one?',say:'ကောင်းတယ်လို့ထင်တယ်',o:['ကောင်းတယ်လို့ထင်တယ်','ကောင်းတယ်','ထင်တယ်','နားလည်တယ်'],a:0},
{t:'mc',q:'နားလည် is literally…',o:['ear-turns','head-opens','mind-sees','word-catches'],a:0}]},
{id:'my_think_3',title:'Put it together',step:'build',meta:'Give your take',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ထင်တယ်','think'],['နားလည်တယ်','understand'],['နားမလည်ဘူး','do not understand'],['ပြန်ပြောပါ','say it again, please']]},
{t:'wb',q:'Build: (I) think it is good',a:['ကောင်းတယ်လို့','ထင်တယ်'],pool:['ကောင်းတယ်လို့','ထင်တယ်','သိတယ်']},
{t:'mc',q:'"(I) think it is expensive" =',o:['ဈေးကြီးတယ်လို့ထင်တယ်','ဈေးကြီးတယ်','ဈေးကြီးရင်ထင်တယ်','ဈေးပေါတယ်လို့ထင်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'နားလည်တယ်',o:['နားလည်တယ်','နားမလည်ဘူး','နားထောင်တယ်','နည်းနည်း'],a:0},
{t:'wb',q:'Build: (I) do not understand. Please say it again.',a:['နားမလည်ဘူး','ပြန်ပြောပါ'],pool:['နားမလည်ဘူး','ပြန်ပြောပါ','နားလည်တယ်']},
{t:'match',q:'Match situation and line',pairs:[['too fast!','ပြန်ပြောပါ'],['got it','နားလည်တယ်'],['lost','နားမလည်ဘူး'],['my opinion','ထင်တယ်']]}]},
{id:'my_think_4',title:'Mix it',step:'mix',meta:'Thoughts out loud',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ပြန်ပြောပါ',o:['please say it again','please speak up','please translate','please listen'],a:0},
{t:'li',q:'Listen — which one?',say:'ထင်တယ်',o:['ထင်တယ်','ထွက်တယ်','ထိုင်ပါ','သိတယ်'],a:0},
{t:'mc',q:'A market auntie rattles off a price. Half of it flew by:',o:['ပြန်ပြောပါ','ဒါပဲ','ယူမယ်','နားလည်တယ်'],a:0},
{t:'wb',q:'Build: (I) think the curry is spicy',a:['ဟင်းစပ်တယ်လို့','ထင်တယ်'],pool:['ဟင်းစပ်တယ်လို့','ထင်တယ်','နားလည်တယ်']},
{t:'li',q:'Listen — which one?',say:'ပြန်ပြောပါ',o:['ပြန်ပြောပါ','ပြောပါ','ပြန်လာမယ်','နားမလည်ဘူး'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ထင်တယ်','think'],['ကောင်းတယ်လို့ထင်တယ်','(I) think it is good'],['နားမလည်ဘူး','do not understand'],['ပြန်ပြောပါ','say it again']]}]},
{id:'my_think_5',title:'Checkpoint',step:'checkpoint',meta:'Thinking mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "(I) think it is good"?',o:['ကောင်းတယ်လို့ထင်တယ်','ကောင်းတယ်','ကောင်းလား','ကောင်းတယ်လို့သိတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'နားလည်တယ်',o:['နားလည်တယ်','နားမလည်ဘူး','နားထောင်တယ်','ထင်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'နားမလည်ဘူး',o:['do not understand','do not know','do not hear','do not think so'],a:0},
{t:'wb',q:'Build: Please say it again — again speak-please',a:['ပြန်','ပြောပါ'],pool:['ပြန်','ပြောပါ','ထင်တယ်']},
{t:'mc',q:'The thought you report gets hooked with…',o:['လို့','ရင်','ကို','နဲ့'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ထင်တယ်','think'],['နားလည်တယ်','understand'],['ပြန်ပြောပါ','say it again'],['နားမလည်ဘူး','do not understand']]}]},

/* --- Topic 4: occupations & the doer suffixes --- */
{id:'my_job',title:'What do you do?',step:'learn',meta:'ဘာအလုပ်လုပ်လဲ + doers',vocab:[['ဘာအလုပ်လုပ်လဲ','ba alouq louq leh','what work do you do?'],['ကျောင်းသား','kyaung tha','student (male)'],['ကျောင်းသူ','kyaung thu','student (female)'],['လယ်သမား','leh thama','farmer'],['ဈေးသည်','zei theh','market vendor']],ex:[
{t:'note',tag:'Small talk, level up',q:'ဘာအလုပ်လုပ်လဲ',body:'<p>You know အလုပ် (work) and လုပ် (do). Together they make the classic question: <span class="deva">ဘာအလုပ်လုပ်လဲ</span> — "What work do you do?"</p>',eg:[['ဘာအလုပ်လုပ်လဲ','ba alouq louq leh','what work do you do?']]},
{t:'mc',q:'How do you ask someone their job?',o:['ဘာအလုပ်လုပ်လဲ','ဘာလုပ်နေလဲ','ဘယ်မှာလဲ','အလုပ်ရှိလား'],a:0},
{t:'note',tag:'The doer suffixes',q:'-သား/-သူ · -သမား · -သည်',body:'<p>Burmese builds job words with doer-tails: <span class="deva">ကျောင်းသား</span> school-<b>son</b> = student (m) · <span class="deva">ကျောင်းသူ</span> school-<b>she</b> = student (f) · <span class="deva">လယ်သမား</span> field-<b>worker</b> = farmer · <span class="deva">ဈေးသည်</span> market-<b>seller</b> = vendor.</p><p>You already knew two: ဆရာ and ဆရာဝန်!</p>',eg:[['ကျောင်းသား','kyaung tha','student (m)'],['လယ်သမား','leh thama','farmer'],['ဈေးသည်','zei theh','vendor']]},
{t:'mc',q:'Which means "farmer"?',o:['လယ်သမား','ဈေးသည်','ကျောင်းသား','ဆရာဝန်'],a:0},
{t:'mc',q:'What does this mean?',d:'ကျောင်းသူ',o:['student (female)','student (male)','teacher (female)','school building'],a:0},
{t:'mc',q:'Who sells you mangoes at the ဈေး?',o:['ဈေးသည်','လယ်သမား','ကျောင်းသား','ဆရာ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘာအလုပ်လုပ်လဲ',o:['ဘာအလုပ်လုပ်လဲ','ဘာလုပ်နေလဲ','အလုပ်လုပ်တယ်','ဘာလို့လဲ'],a:0}]},
{id:'my_job_2',title:'Hear the jobs',step:'recognize',meta:'Spot each worker',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ကျောင်းသား',o:['ကျောင်းသား','ကျောင်းသူ','ကျောင်း','လယ်သမား'],a:0},
{t:'mc',q:'Which means "market vendor"?',o:['ဈေးသည်','ဈေး','လယ်သမား','ဆရာမ'],a:0},
{t:'li',q:'Listen — which one?',say:'လယ်သမား',o:['လယ်သမား','ဈေးသည်','ကျောင်းသား','ဆရာဝန်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘာအလုပ်လုပ်လဲ',o:['what work do you do?','what are you doing now?','where do you work?','do you have work?'],a:0},
{t:'mc',q:'ကျောင်းသား vs ကျောင်းသူ —',o:['male vs female student','student vs teacher','young vs old','school vs university'],a:0},
{t:'li',q:'Listen — which one?',say:'ဈေးသည်',o:['ဈေးသည်','ဈေး','ဆေး','လယ်သမား'],a:0},
{t:'mc',q:'လယ်သမား grows what you eat every day:',o:['ထမင်း','လက်ဖက်ရည်','ကော်ဖီ','နို့'],a:0}]},
{id:'my_job_3',title:'Put it together',step:'build',meta:'Talk shop',vocab:[],ex:[
{t:'match',q:'Match worker and meaning',pairs:[['ကျောင်းသား','student (m)'],['ကျောင်းသူ','student (f)'],['လယ်သမား','farmer'],['ဈေးသည်','vendor']]},
{t:'wb',q:'Build: What work do you do?',a:['ဘာ','အလုပ်','လုပ်လဲ'],pool:['ဘာ','အလုပ်','လုပ်လဲ','လုပ်လား']},
{t:'mc',q:'"I am a teacher (woman)" — pick the person:',o:['ဆရာမ','ဆရာ','ကျောင်းသူ','ဈေးသည်'],a:0},
{t:'li',q:'Listen — which one?',say:'ကျောင်းသူ',o:['ကျောင်းသူ','ကျောင်းသား','ကျောင်း','သူ'],a:0},
{t:'wb',q:'Build: He is a farmer — he (topic) farmer',a:['သူက','လယ်သမား','ပါ'],pool:['သူက','လယ်သမား','ပါ','ဈေးသည်']},
{t:'match',q:'Match doer and workplace',pairs:[['ဈေးသည်','ဈေး'],['ကျောင်းသား','ကျောင်း'],['ဆရာဝန်','ဆေးရုံ'],['လယ်သမား','လယ်']]}]},
{id:'my_job_4',title:'Mix it',step:'mix',meta:'Jobs around town',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'လယ်သမား',o:['farmer','vendor','builder','driver'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘာအလုပ်လုပ်လဲ',o:['ဘာအလုပ်လုပ်လဲ','အလုပ်လုပ်တယ်','ဘာလုပ်နေလဲ','ဘာအလုပ်လဲ'],a:0},
{t:'mc',q:'New teashop friend — after names, you ask…',o:['ဘာအလုပ်လုပ်လဲ','ဘယ်လောက်လဲ','အခန်းရှိလား','ဘယ်အချိန်ထွက်လဲ'],a:0},
{t:'wb',q:'Build: I am a student (woman speaking)',a:['ကျွန်မ','ကျောင်းသူ','ပါ'],pool:['ကျွန်မ','ကျောင်းသူ','ပါ','ကျောင်းသား']},
{t:'li',q:'Listen — which one?',say:'ဈေးသည်',o:['ဈေးသည်','ဆေးဆိုင်','ဈေး','လယ်သမား'],a:0},
{t:'match',q:'Match worker and meaning',pairs:[['ကျောင်းသား','student (m)'],['လယ်သမား','farmer'],['ဈေးသည်','vendor'],['ဆရာဝန်','doctor']]}]},
{id:'my_job_5',title:'Checkpoint',step:'checkpoint',meta:'Jobs mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "student (male)"?',o:['ကျောင်းသား','ကျောင်းသူ','ကျောင်း','ဆရာ'],a:0},
{t:'li',q:'Listen — which one?',say:'လယ်သမား',o:['လယ်သမား','ဈေးသည်','ကျောင်းသူ','ဆရာမ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဈေးသည်',o:['market vendor','market','pharmacy','shopping'],a:0},
{t:'wb',q:'Build: What work does he do? — he (topic) what work does',a:['သူက','ဘာ','အလုပ်','လုပ်လဲ'],pool:['သူက','ဘာ','အလုပ်','လုပ်လဲ','လုပ်တယ်']},
{t:'mc',q:'school-son · field-worker · market-seller =',o:['student · farmer · vendor','teacher · student · farmer','vendor · farmer · student','farmer · vendor · student'],a:0},
{t:'match',q:'Match worker and meaning',pairs:[['ကျောင်းသူ','student (f)'],['လယ်သမား','farmer'],['ဈေးသည်','vendor'],['ဘာအလုပ်လုပ်လဲ','what work do you do?']]}]},

/* --- Topic 5: hobbies & free time --- */
{id:'my_hobby',title:'Free time',step:'learn',meta:'ဘောလုံး သီချင်း စာဖတ် ရေကူး',vocab:[['ဘောလုံးကန်တယ်','baw loun kan de','play football'],['သီချင်းဆိုတယ်','thachin hso de','sing'],['သီချင်းနားထောင်တယ်','thachin na htaung de','listen to music'],['စာဖတ်တယ်','sa hpaq de','read'],['ရေကူးတယ်','ye ku de','swim']],ex:[
{t:'note',tag:'Play!',q:'ဘောလုံး · သီချင်း',body:'<p><span class="deva">ဘောလုံး</span> <b>baw loun</b> = football (Myanmar is football-mad) — you <b>kick</b> it: <span class="deva">ဘောလုံးကန်တယ်</span>.</p><p><span class="deva">သီချင်း</span> <b>thachin</b> = song: <span class="deva">သီချင်းဆိုတယ်</span> sing · <span class="deva">သီချင်းနားထောင်တယ်</span> listen to music (နားထောင် = ear-place = listen!).</p>',eg:[['ဘောလုံးကန်တယ်','baw loun kan de','play football'],['သီချင်းဆိုတယ်','thachin hso de','sing']]},
{t:'mc',q:'Which means "play football"?',o:['ဘောလုံးကန်တယ်','ရေကူးတယ်','သီချင်းဆိုတယ်','စာဖတ်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'သီချင်းနားထောင်တယ်',o:['listen to music','sing a song','write a song','play music'],a:0},
{t:'note',tag:'Quiet hours',q:'စာဖတ် · ရေကူး',body:'<p><span class="deva">စာဖတ်တယ်</span> <b>sa hpaq de</b> = read (စာ writing + ဖတ် read — you know စာ from စာပို့တယ်!).</p><p><span class="deva">ရေကူးတယ်</span> <b>ye ku de</b> = swim — literally "water-cross".</p>',eg:[['စာဖတ်တယ်','sa hpaq de','read'],['ရေကူးတယ်','ye ku de','swim']]},
{t:'mc',q:'Which means "read"?',o:['စာဖတ်တယ်','စာပို့တယ်','သီချင်းဆိုတယ်','နားထောင်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရေကူးတယ်',o:['swim','drink water','wash','fish'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘောလုံးကန်တယ်',o:['ဘောလုံးကန်တယ်','ရေကူးတယ်','သီချင်းဆိုတယ်','စာဖတ်တယ်'],a:0}]},
{id:'my_hobby_2',title:'Hear the fun',step:'recognize',meta:'Spot each hobby',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'သီချင်းဆိုတယ်',o:['သီချင်းဆိုတယ်','သီချင်းနားထောင်တယ်','စာဖတ်တယ်','ဘောလုံးကန်တယ်'],a:0},
{t:'mc',q:'Which means "swim"?',o:['ရေကူးတယ်','ရေချိုးတယ်','ရေသောက်တယ်','ရေဆာတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'စာဖတ်တယ်',o:['စာဖတ်တယ်','စာပို့တယ်','ဆာတယ်','စားတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘောလုံးကန်တယ်',o:['play football','throw a ball','watch football','buy a ball'],a:0},
{t:'mc',q:'နားထောင် (listen) is literally…',o:['ear-place','ear-turn','head-hold','sound-catch'],a:0},
{t:'li',q:'Listen — which one?',say:'ရေကူးတယ်',o:['ရေကူးတယ်','ရေချိုးတယ်','ရေဆာတယ်','ရေသောက်တယ်'],a:0},
{t:'mc',q:'သီချင်းဆိုတယ် vs သီချင်းနားထောင်တယ် —',o:['sing vs listen','listen vs sing','both sing','both listen'],a:0}]},
{id:'my_hobby_3',title:'Put it together',step:'build',meta:'Share your hobbies',vocab:[],ex:[
{t:'match',q:'Match hobby and meaning',pairs:[['ဘောလုံးကန်တယ်','play football'],['သီချင်းဆိုတယ်','sing'],['စာဖတ်တယ်','read'],['ရေကူးတယ်','swim']]},
{t:'wb',q:'Build: I like to play football (man speaking)',a:['ကျွန်တော်','ဘောလုံးကန်','ချင်တယ်'],pool:['ကျွန်တော်','ဘောလုံးကန်','ချင်တယ်','တတ်တယ်']},
{t:'mc',q:'"Can you swim?" (learned skill!) =',o:['ရေကူးတတ်လား','ရေကူးနိုင်လား','ရေကူးချင်လား','ရေကူးဖူးလား'],a:0},
{t:'li',q:'Listen — which one?',say:'သီချင်းနားထောင်တယ်',o:['သီချင်းနားထောင်တယ်','သီချင်းဆိုတယ်','သီချင်း','နားလည်တယ်'],a:0},
{t:'wb',q:'Build: (I) listen to music at home',a:['အိမ်မှာ','သီချင်း','နားထောင်တယ်'],pool:['အိမ်မှာ','သီချင်း','နားထောင်တယ်','ဆိုတယ်']},
{t:'match',q:'Match hobby and place',pairs:[['ရေကူးတယ်','water'],['ဘောလုံးကန်တယ်','field'],['စာဖတ်တယ်','quiet corner'],['သီချင်းဆိုတယ်','anywhere!']]}]},
{id:'my_hobby_4',title:'Mix it',step:'mix',meta:'Weekend plans',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'စာဖတ်တယ်',o:['read','write','send a message','study hard'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘောလုံး',o:['ဘောလုံး','ဘူတာ','ဘယ်လောက်','ဘောလုံးကန်တယ်'],a:0},
{t:'mc',q:'Saturday plan with friends by the river:',o:['ရေကူးမယ်','စာဖတ်ရမယ်','အလုပ်လုပ်ရမယ်','အိပ်နေတယ်'],a:0},
{t:'wb',q:'Build: Do you sing? — song sing-know-how-question',a:['သီချင်း','ဆိုတတ်လား'],pool:['သီချင်း','ဆိုတတ်လား','ဆိုတယ်']},
{t:'li',q:'Listen — which one?',say:'ရေကူးတယ်',o:['ရေကူးတယ်','ရေချိုးတယ်','ရေအေးတယ်','ကူညီပါ'],a:0},
{t:'match',q:'Match hobby and meaning',pairs:[['သီချင်းနားထောင်တယ်','listen to music'],['ရေကူးတယ်','swim'],['ဘောလုံးကန်တယ်','play football'],['စာဖတ်တယ်','read']]}]},
{id:'my_hobby_5',title:'Checkpoint',step:'checkpoint',meta:'Hobbies mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "listen to music"?',o:['သီချင်းနားထောင်တယ်','သီချင်းဆိုတယ်','နားလည်တယ်','စာဖတ်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'စာဖတ်တယ်',o:['စာဖတ်တယ်','စာပို့တယ်','ဖတ်တယ်','စားတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'သီချင်း',o:['song','music player','singer','radio'],a:0},
{t:'wb',q:'Build: (I) play football on Saturday',a:['စနေနေ့','ဘောလုံး','ကန်တယ်'],pool:['စနေနေ့','ဘောလုံး','ကန်တယ်','ဆိုတယ်']},
{t:'mc',q:'football · song · reading · swimming =',o:['ဘောလုံး · သီချင်း · စာဖတ် · ရေကူး','သီချင်း · ဘောလုံး · ရေကူး · စာဖတ်','ဘောလုံး · စာဖတ် · သီချင်း · ရေကူး','ရေကူး · သီချင်း · စာဖတ် · ဘောလုံး'],a:0},
{t:'match',q:'Match hobby and meaning',pairs:[['ဘောလုံးကန်တယ်','play football'],['သီချင်းဆိုတယ်','sing'],['ရေကူးတယ်','swim'],['သီချင်းနားထောင်တယ်','listen to music']]}]},

/* --- Topic 6: at home — daily routine --- */
{id:'my_home',title:'At home',step:'learn',meta:'အိပ် ထ ရေချိုး + furniture',vocab:[['အိပ်တယ်','eiq de','sleep'],['ထတယ်','hta de','get up'],['ရေချိုးတယ်','ye cho de','bathe / shower'],['ကုတင်','ga din','bed'],['စားပွဲ','za bweh','table'],['တံခါး','da ga','door']],ex:[
{t:'note',tag:'Morning to night',q:'အိပ် · ထ · ရေချိုး',body:'<p>Your day at home: <span class="deva">ထတယ်</span> <b>hta de</b> get up → <span class="deva">ရေချိုးတယ်</span> <b>ye cho de</b> shower (water-bathe — cousin of ရေကူး!) → … → <span class="deva">အိပ်တယ်</span> <b>eiq de</b> sleep.</p>',eg:[['ထတယ်','hta de','get up'],['ရေချိုးတယ်','ye cho de','shower'],['အိပ်တယ်','eiq de','sleep']]},
{t:'mc',q:'Which means "sleep"?',o:['အိပ်တယ်','ထတယ်','ရေချိုးတယ်','နေတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရေချိုးတယ်',o:['bathe / shower','swim','drink water','wash clothes'],a:0},
{t:'note',tag:'Around the room',q:'ကုတင် · စားပွဲ · တံခါး',body:'<p><span class="deva">ကုတင်</span> <b>ga din</b> = bed · <span class="deva">စားပွဲ</span> <b>za bweh</b> = table (an "eating-stage"!) · <span class="deva">တံခါး</span> <b>da ga</b> = door.</p>',eg:[['ကုတင်','ga din','bed'],['စားပွဲ','za bweh','table'],['တံခါး','da ga','door']]},
{t:'mc',q:'Which means "bed"?',o:['ကုတင်','စားပွဲ','တံခါး','အခန်း'],a:0},
{t:'mc',q:'What does this mean?',d:'စားပွဲ',o:['table','plate','kitchen','meal'],a:0},
{t:'li',q:'Listen — which one?',say:'အိပ်တယ်',o:['အိပ်တယ်','ထတယ်','အိမ်','ရေချိုးတယ်'],a:0}]},
{id:'my_home_2',title:'Hear the home',step:'recognize',meta:'Spot the routine',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ထတယ်',o:['ထတယ်','အိပ်တယ်','ထွက်တယ်','ထင်တယ်'],a:0},
{t:'mc',q:'Which means "door"?',o:['တံခါး','ကုတင်','စားပွဲ','သော့'],a:0},
{t:'li',q:'Listen — which one?',say:'ရေချိုးတယ်',o:['ရေချိုးတယ်','ရေကူးတယ်','ရေသောက်တယ်','ချိုတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'အိပ်တယ်',o:['sleep','sit','stay','rest'],a:0},
{t:'mc',q:'First thing in the morning you…',o:['ထတယ်','အိပ်တယ်','ထွက်တယ်','စားပွဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'ကုတင်',o:['ကုတင်','တံခါး','ခုနစ်','စားပွဲ'],a:0},
{t:'mc',q:'The သော့ (key) opens the…',o:['တံခါး','ကုတင်','စားပွဲ','ခွက်'],a:0}]},
{id:'my_home_3',title:'Put it together',step:'build',meta:'Walk through your day',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['အိပ်တယ်','sleep'],['ထတယ်','get up'],['ရေချိုးတယ်','shower'],['တံခါး','door']]},
{t:'wb',q:'Build: (I) get up in the morning',a:['မနက်','ထတယ်'],pool:['မနက်','ထတယ်','အိပ်တယ်']},
{t:'mc',q:'"(I) sleep at night" =',o:['ညအိပ်တယ်','ညထတယ်','မနက်အိပ်တယ်','ညနေရေချိုးတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'စားပွဲ',o:['စားပွဲ','စားတယ်','ဈေး','ကုတင်'],a:0},
{t:'wb',q:'Build: (I) shower, and then eat',a:['ရေချိုးတယ်','ပြီးတော့','စားတယ်'],pool:['ရေချိုးတယ်','ပြီးတော့','စားတယ်','ဒါပေမဲ့']},
{t:'match',q:'Match thing and place',pairs:[['ကုတင်','for sleeping'],['စားပွဲ','for eating'],['တံခါး','for entering'],['သော့','for locking']]}]},
{id:'my_home_4',title:'Mix it',step:'mix',meta:'Routine & rooms',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ထတယ်',o:['get up','sleep','sit down','leave'],a:0},
{t:'li',q:'Listen — which one?',say:'တံခါး',o:['တံခါး','ကုတင်','ခဏ','တစ်ခါ'],a:0},
{t:'mc',q:'Late night, big yawn. Time to…',o:['အိပ်မယ်','ထမယ်','ရေချိုးနေတယ်','စာဖတ်ရမယ်'],a:0},
{t:'wb',q:'Build: (I) got up late today — today late get-up (နောက်ကျ nauq kya late)',a:['ဒီနေ့','နောက်ကျ','ထတယ်'],pool:['ဒီနေ့','နောက်ကျ','ထတယ်','အိပ်တယ်']},
{t:'li',q:'Listen — which one?',say:'ရေချိုးတယ်',o:['ရေချိုးတယ်','ရေကူးတယ်','ချိုတယ်','ရေအေးတယ်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['အိပ်တယ်','sleep'],['ကုတင်','bed'],['စားပွဲ','table'],['ရေချိုးတယ်','shower']]}]},
{id:'my_home_5',title:'Checkpoint',step:'checkpoint',meta:'Home mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "get up"?',o:['ထတယ်','အိပ်တယ်','ထွက်တယ်','လာတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'အိပ်တယ်',o:['အိပ်တယ်','အိမ်','ထတယ်','အိုက်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ကုတင်',o:['bed','table','door','room'],a:0},
{t:'wb',q:'Build: (I) shower in the morning',a:['မနက်','ရေချိုးတယ်'],pool:['မနက်','ရေချိုးတယ်','အိပ်တယ်']},
{t:'mc',q:'sleep · get up · shower =',o:['အိပ် · ထ · ရေချိုး','ထ · အိပ် · ရေချိုး','ရေချိုး · ထ · အိပ်','အိပ် · ရေချိုး · ထ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ထတယ်','get up'],['အိပ်တယ်','sleep'],['တံခါး','door'],['စားပွဲ','table']]}]},

/* --- Topic 7: help & staying safe --- */
{id:'my_help',title:'Help & safety',step:'learn',meta:'ကူညီပါ ရဲ ဆေးရုံ သတိထားပါ',vocab:[['ကူညီပါ','ku nyi ba','help (me), please'],['ရဲ','yeh','police'],['ဆေးရုံ','hsei youn','hospital'],['သတိထားပါ','thadi hta ba','be careful!'],['ပျောက်သွားပြီ','pyauq thwa bi','(it) is lost']],ex:[
{t:'note',tag:'When it matters',q:'ကူညီပါ',body:'<p>The one to memorise cold: <span class="deva">ကူညီပါ</span> <b>ku nyi ba</b> — help me, please. (ကူညီ = help + our ပါ.)</p><p>Who to find: <span class="deva">ရဲ</span> <b>yeh</b> police · <span class="deva">ဆေးရုံ</span> <b>hsei youn</b> hospital (a building full of ဆေး!).</p>',eg:[['ကူညီပါ','ku nyi ba','help, please'],['ရဲ','yeh','police'],['ဆေးရုံ','hsei youn','hospital']]},
{t:'mc',q:'Which means "help (me), please"?',o:['ကူညီပါ','သတိထားပါ','ခဏစောင့်ပါ','ပေးပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆေးရုံ',o:['hospital','pharmacy','clinic doctor','medicine'],a:0},
{t:'note',tag:'Watch out',q:'သတိထား · ပျောက်',body:'<p><span class="deva">သတိထားပါ</span> <b>thadi hta ba</b> — be careful! (Also what friends say instead of goodbye when you travel.)</p><p><span class="deva">ပျောက်သွားပြီ</span> <b>pyauq thwa bi</b> — it is lost / it disappeared: ဖုန်းပျောက်သွားပြီ — my phone is gone!</p>',eg:[['သတိထားပါ','thadi hta ba','be careful!'],['ပျောက်သွားပြီ','pyauq thwa bi','(it) is lost']]},
{t:'mc',q:'Which means "be careful"?',o:['သတိထားပါ','ကူညီပါ','ထိုင်ပါ','စောင့်ပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'ပျောက်သွားပြီ',o:['(it) is lost','(it) is found','(it) is broken','(it) is old'],a:0},
{t:'li',q:'Listen — which one?',say:'ကူညီပါ',o:['ကူညီပါ','သတိထားပါ','ကူညီ','လာပါ'],a:0}]},
{id:'my_help_2',title:'Hear the alarm',step:'recognize',meta:'Spot the safety words',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ရဲ',o:['ရဲ','ရေ','ရယ်','ရာ'],a:0},
{t:'mc',q:'Which means "hospital"?',o:['ဆေးရုံ','ဆေးဆိုင်','ဆေး','ဆရာဝန်'],a:0},
{t:'li',q:'Listen — which one?',say:'သတိထားပါ',o:['သတိထားပါ','ကူညီပါ','ထားပါ','စောင့်ပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'ကူညီပါ',o:['help (me), please','be careful','wait for me','come here'],a:0},
{t:'mc',q:'Your friend boards a night bus. You say…',o:['သတိထားပါ','ကူညီပါ','ပျောက်သွားပြီ','ရဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'ပျောက်သွားပြီ',o:['ပျောက်သွားပြီ','ပျော်တယ်','ရောက်ပြီ','ပြီးပြီ'],a:0},
{t:'mc',q:'ဆေးရုံ is literally…',o:['medicine-building','doctor-house','sick-place','help-hall'],a:0}]},
{id:'my_help_3',title:'Put it together',step:'build',meta:'Get help fast',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ကူညီပါ','help, please'],['ရဲ','police'],['ဆေးရုံ','hospital'],['သတိထားပါ','be careful']]},
{t:'wb',q:'Build: My phone is lost',a:['ဖုန်း','ပျောက်သွားပြီ'],pool:['ဖုန်း','ပျောက်သွားပြီ','ရောက်ပြီ']},
{t:'mc',q:'Someone is hurt — where do you take them?',o:['ဆေးရုံ','ဈေး','ဘူတာ','လက်ဖက်ရည်ဆိုင်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆေးရုံ',o:['ဆေးရုံ','ဆေးဆိုင်','ဆေး','ဈေး'],a:0},
{t:'wb',q:'Build: Where is the hospital?',a:['ဆေးရုံ','ဘယ်မှာ','လဲ'],pool:['ဆေးရုံ','ဘယ်မှာ','လဲ','ရှိလား']},
{t:'match',q:'Match problem and helper',pairs:[['ပိုက်ဆံပျောက်သွားပြီ','ရဲ'],['နေမကောင်းဘူး','ဆေးရုံ'],['နားမလည်ဘူး','ပြန်ပြောပါ'],['ဗိုက်ဆာတယ်','လက်ဖက်ရည်ဆိုင်']]}]},
{id:'my_help_4',title:'Mix it',step:'mix',meta:'Cool head, right words',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'သတိထားပါ',o:['be careful!','help me!','wait here!','watch me!'],a:0},
{t:'li',q:'Listen — which one?',say:'ကူညီပါ',o:['ကူညီပါ','ကူညီ','သတိထားပါ','လာပါ'],a:0},
{t:'mc',q:'Wallet gone at the market. First words to the ရဲ:',o:['ပိုက်ဆံပျောက်သွားပြီ၊ ကူညီပါ','ဈေးပေါတယ်','ဘယ်လောက်လဲ','ယူမယ်'],a:0},
{t:'wb',q:'Build: Please help — (I) do not understand',a:['ကူညီပါ','နားမလည်ဘူး'],pool:['ကူညီပါ','နားမလည်ဘူး','နားလည်တယ်']},
{t:'li',q:'Listen — which one?',say:'သတိထားပါ',o:['သတိထားပါ','သတိ','ကူညီပါ','ထားပါ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ရဲ','police'],['ဆေးရုံ','hospital'],['ပျောက်သွားပြီ','(it) is lost'],['ကူညီပါ','help, please']]}]},
{id:'my_help_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 9 complete!',vocab:[],ex:[
{t:'mc',q:'Which means "police"?',o:['ရဲ','ဆရာဝန်','ဆေးရုံ','ဈေးသည်'],a:0},
{t:'li',q:'Listen — which one?',say:'ပျောက်သွားပြီ',o:['ပျောက်သွားပြီ','ရောက်ပြီ','ပြီးပြီ','ပျော်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ကူညီပါ',o:['help (me), please','excuse me','be careful','call the police'],a:0},
{t:'wb',q:'Build: Be careful! It is raining.',a:['သတိထားပါ','မိုးရွာနေတယ်'],pool:['သတိထားပါ','မိုးရွာနေတယ်','နေပူတယ်']},
{t:'mc',q:'help · police · hospital =',o:['ကူညီပါ · ရဲ · ဆေးရုံ','ရဲ · ကူညီပါ · ဆေးရုံ','ဆေးရုံ · ရဲ · ကူညီပါ','ကူညီပါ · ဆေးရုံ · ရဲ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ကူညီပါ','help, please'],['သတိထားပါ','be careful'],['ဆေးရုံ','hospital'],['ရဲ','police']]}]},

/* ===================== ZONE 10 · YOUR BURMESE LIFE =====================
   The personal layer: degrees (အရမ်း/သိပ်မ), close family, age & married
   small talk, not-yet သေး, language talk, now/later/when, and telling
   your day in order. Per Mesher L10 & Okell Part 3 (names, ages, work,
   family). */
/* --- Topic 1: very & degrees --- */
{id:'my_deg',title:'Very & a bit',step:'learn',meta:'အရမ်း သိပ်မ…ဘူး နည်းနည်းပဲ',vocab:[['အရမ်း','a yan','very / really'],['အရမ်းကောင်းတယ်','a yan kaung de','really good'],['အရမ်းကြိုက်တယ်','a yan kyaiq de','really like (it)'],['သိပ်မကြိုက်ဘူး','theiq ma kyaiq bu','do not like (it) much'],['နည်းနည်းပဲ','neh neh beh','just a little']],ex:[
{t:'note',tag:'Turn it up',q:'အရမ်း + verb',body:'<p>Crank any describing verb up with <span class="deva">အရမ်း</span> <b>a yan</b> in front: <span class="deva">အရမ်းကောင်းတယ်</span> really good! · <span class="deva">အရမ်းကြိုက်တယ်</span> — I really like it!</p>',eg:[['အရမ်း','a yan','very'],['အရမ်းကောင်းတယ်','a yan kaung de','really good']]},
{t:'mc',q:'Which means "really good"?',o:['အရမ်းကောင်းတယ်','ကောင်းတယ်','ပိုကောင်းတယ်','အကောင်းဆုံး'],a:0},
{t:'mc',q:'What does this mean?',d:'အရမ်းကြိုက်တယ်',o:['really like (it)','like (it) a little','do not like (it)','used to like (it)'],a:0},
{t:'note',tag:'Turn it down',q:'သိပ်မ…ဘူး · နည်းနည်းပဲ',body:'<p>Soften a no with <span class="deva">သိပ်</span> <b>theiq</b> inside the no-sandwich: <span class="deva">သိပ်မကြိုက်ဘူး</span> — "I do not like it <b>that much</b>" (kinder than မကြိုက်ဘူး!).</p><p><span class="deva">နည်းနည်းပဲ</span> — just a little (your နည်းနည်း + the ပဲ of ဒါပဲ).</p>',eg:[['သိပ်မကြိုက်ဘူး','theiq ma kyaiq bu','do not like much'],['နည်းနည်းပဲ','neh neh beh','just a little']]},
{t:'mc',q:'The polite soft no is…',o:['သိပ်မကြိုက်ဘူး','မကြိုက်ဘူး','အရမ်းကြိုက်တယ်','မသိဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'နည်းနည်းပဲ',o:['just a little','a lot','not at all','more please'],a:0},
{t:'li',q:'Listen — which one?',say:'အရမ်းကောင်းတယ်',o:['အရမ်းကောင်းတယ်','ကောင်းတယ်','အရမ်းကြိုက်တယ်','ပိုကောင်းတယ်'],a:0}]},
{id:'my_deg_2',title:'Hear the volume',step:'recognize',meta:'Loud like, soft no',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'အရမ်း',o:['အရမ်း','အရင်','အမြဲ','ရမယ်'],a:0},
{t:'mc',q:'Which means "do not like it much"?',o:['သိပ်မကြိုက်ဘူး','မကြိုက်ဘူး','အရမ်းမကြိုက်ဘူး','နည်းနည်းပဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'သိပ်မကြိုက်ဘူး',o:['သိပ်မကြိုက်ဘူး','မကြိုက်ဘူး','အရမ်းကြိုက်တယ်','သိပ်ကောင်းတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'အရမ်း',o:['very / really','a little','too much','always'],a:0},
{t:'mc',q:'ဘယ်လောက်ကြိုက်လဲ — you LOVE it:',o:['အရမ်းကြိုက်တယ်','နည်းနည်းပဲ','သိပ်မကြိုက်ဘူး','ရပါတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'နည်းနည်းပဲ',o:['နည်းနည်းပဲ','နည်းနည်း','ဒါပဲ','အရမ်း'],a:0},
{t:'mc',q:'သိပ်မ…ဘူး is kinder than a flat no because it says…',o:['not THAT much','never','absolutely not','maybe later'],a:0}]},
{id:'my_deg_3',title:'Put it together',step:'build',meta:'Say how much',vocab:[],ex:[
{t:'match',q:'Match line and strength',pairs:[['အရမ်းကြိုက်တယ်','really like'],['ကြိုက်တယ်','like'],['သိပ်မကြိုက်ဘူး','not much'],['မကြိုက်ဘူး','do not like']]},
{t:'wb',q:'Build: The curry is really good',a:['ဟင်း','အရမ်း','ကောင်းတယ်'],pool:['ဟင်း','အရမ်း','ကောင်းတယ်','သိပ်']},
{t:'mc',q:'"It is really expensive!" =',o:['အရမ်းဈေးကြီးတယ်','ဈေးကြီးတယ်','သိပ်မကြီးဘူး','ဈေးပေါတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'အရမ်းကြိုက်တယ်',o:['အရမ်းကြိုက်တယ်','ကြိုက်တယ်','သိပ်မကြိုက်ဘူး','အရမ်းကောင်းတယ်'],a:0},
{t:'wb',q:'Build: (I) do not like coffee much',a:['ကော်ဖီ','သိပ်မကြိုက်ဘူး'],pool:['ကော်ဖီ','သိပ်မကြိုက်ဘူး','အရမ်းကြိုက်တယ်']},
{t:'match',q:'Match line and meaning',pairs:[['အရမ်း','very'],['နည်းနည်းပဲ','just a little'],['သိပ်မကြိုက်ဘူး','do not like much'],['အရမ်းကောင်းတယ်','really good']]}]},
{id:'my_deg_4',title:'Mix it',step:'mix',meta:'Dial it up & down',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'သိပ်မကြိုက်ဘူး',o:['do not like it much','really do not like it','like it a lot','do not know it'],a:0},
{t:'li',q:'Listen — which one?',say:'အရမ်းကြိုက်တယ်',o:['အရမ်းကြိုက်တယ်','အရမ်းကောင်းတယ်','ကြိုက်တယ်','မကြိုက်ဘူး'],a:0},
{t:'mc',q:'The teashop tea is life-changing. You tell the owner…',o:['အရမ်းကောင်းတယ်','နည်းနည်းပဲ','သိပ်မကောင်းဘူး','ရပါတယ်'],a:0},
{t:'wb',q:'Build: Do you speak Burmese? Just a little!',a:['မြန်မာလို','ပြောတတ်လား','နည်းနည်းပဲ'],pool:['မြန်မာလို','ပြောတတ်လား','နည်းနည်းပဲ','အရမ်း']},
{t:'li',q:'Listen — which one?',say:'အရမ်း',o:['အရမ်း','အရင်','ရမယ်','နည်းနည်း'],a:0},
{t:'match',q:'Match strength from most to least',pairs:[['အရမ်းကြိုက်တယ်','❤❤❤'],['ကြိုက်တယ်','❤❤'],['နည်းနည်းပဲ','❤'],['သိပ်မကြိုက်ဘူး','…']]}]},
{id:'my_deg_5',title:'Checkpoint',step:'checkpoint',meta:'Degrees mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "very / really"?',o:['အရမ်း','နည်းနည်း','သိပ်မ','ပို'],a:0},
{t:'li',q:'Listen — which one?',say:'သိပ်မကြိုက်ဘူး',o:['သိပ်မကြိုက်ဘူး','အရမ်းကြိုက်တယ်','မကြိုက်ဘူး','နည်းနည်းပဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'အရမ်းကောင်းတယ်',o:['really good','quite good','the best','better'],a:0},
{t:'wb',q:'Build: (I) really like Myanmar',a:['မြန်မာ','အရမ်း','ကြိုက်တယ်'],pool:['မြန်မာ','အရမ်း','ကြိုက်တယ်','သိပ်']},
{t:'mc',q:'really-like · like · just-a-little · not-much =',o:['အရမ်းကြိုက်တယ် · ကြိုက်တယ် · နည်းနည်းပဲ · သိပ်မကြိုက်ဘူး','ကြိုက်တယ် · အရမ်းကြိုက်တယ် · သိပ်မကြိုက်ဘူး · နည်းနည်းပဲ','နည်းနည်းပဲ · ကြိုက်တယ် · အရမ်းကြိုက်တယ် · သိပ်မကြိုက်ဘူး','သိပ်မကြိုက်ဘူး · နည်းနည်းပဲ · ကြိုက်တယ် · အရမ်းကြိုက်တယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['အရမ်း','very'],['သိပ်မကြိုက်ဘူး','not much'],['နည်းနည်းပဲ','just a little'],['အရမ်းကြိုက်တယ်','really like']]}]},

/* --- Topic 2: close family --- */
{id:'my_fam2',title:'Family',step:'learn',meta:'အမေ အဖေ သား သမီး',vocab:[['အမေ','a me','mother'],['အဖေ','a hpe','father'],['သား','tha','son'],['သမီး','thami','daughter'],['ကလေးရှိလား','hkalei shi la','do you have children?']],ex:[
{t:'note',tag:'The inner circle',q:'အမေ · အဖေ',body:'<p><span class="deva">အမေ</span> <b>a me</b> = mother · <span class="deva">အဖေ</span> <b>a hpe</b> = father. Like everywhere on earth, among the first words Burmese children say.</p>',eg:[['အမေ','a me','mother'],['အဖေ','a hpe','father']]},
{t:'mc',q:'Which means "mother"?',o:['အမေ','အဖေ','အစ်မ','ဒေါ်'],a:0},
{t:'mc',q:'What does this mean?',d:'အဖေ',o:['father','mother','uncle','older brother'],a:0},
{t:'note',tag:'Sons & daughters',q:'သား · သမီး · ကလေးရှိလား',body:'<p><span class="deva">သား</span> <b>tha</b> = son (you saw it in ကျောင်း<b>သား</b>!) · <span class="deva">သမီး</span> <b>thami</b> = daughter.</p><p>The friendliest small-talk question in Myanmar: <span class="deva">ကလေးရှိလား</span> — do you have children?</p>',eg:[['သား','tha','son'],['သမီး','thami','daughter'],['ကလေးရှိလား','hkalei shi la','do you have children?']]},
{t:'mc',q:'Which means "daughter"?',o:['သမီး','သား','ကလေး','အစ်မ'],a:0},
{t:'mc',q:'What does this mean?',d:'ကလေးရှိလား',o:['do you have children?','are the children here?','how many children?','is the child well?'],a:0},
{t:'li',q:'Listen — which one?',say:'အမေ',o:['အမေ','အဖေ','အစ်မ','သမီး'],a:0}]},
{id:'my_fam2_2',title:'Hear the family',step:'recognize',meta:'Spot each person',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'အဖေ',o:['အဖေ','အမေ','ဒေါ်','သား'],a:0},
{t:'mc',q:'Which means "son"?',o:['သား','သမီး','ကလေး','သူ'],a:0},
{t:'li',q:'Listen — which one?',say:'သမီး',o:['သမီး','သား','အမေ','ကလေး'],a:0},
{t:'mc',q:'What does this mean?',d:'အမေ',o:['mother','father','aunt','grandmother'],a:0},
{t:'mc',q:'ကျောင်းသား (student) hides which family word?',o:['သား (son)','သမီး (daughter)','အမေ (mother)','အဖေ (father)'],a:0},
{t:'li',q:'Listen — which one?',say:'ကလေးရှိလား',o:['ကလေးရှိလား','ကလေး','အခန်းရှိလား','ကလေးနှစ်ယောက်'],a:0},
{t:'mc',q:'Answer ကလေးရှိလား with "two children":',o:['ကလေးနှစ်ယောက်ရှိတယ်','ကလေးမရှိဘူး','ကလေးကြိုက်တယ်','နှစ်ယောက်လား'],a:0}]},
{id:'my_fam2_3',title:'Put it together',step:'build',meta:'Introduce your people',vocab:[],ex:[
{t:'match',q:'Match person and meaning',pairs:[['အမေ','mother'],['အဖေ','father'],['သား','son'],['သမီး','daughter']]},
{t:'wb',q:'Build: (I) have one daughter',a:['သမီး','တစ်','ယောက်','ရှိတယ်'],pool:['သမီး','တစ်','ယောက်','ရှိတယ်','သား']},
{t:'mc',q:'"My mother is at home" =',o:['အမေအိမ်မှာရှိတယ်','အမေအိမ်ကိုသွားတယ်','အမေအိမ်ကလာတယ်','အိမ်မှာအဖေရှိတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'သား',o:['သား','သမီး','စာ','ဆာ'],a:0},
{t:'wb',q:'Build: Do you have children?',a:['ကလေး','ရှိလား'],pool:['ကလေး','ရှိလား','ရှိတယ်']},
{t:'match',q:'Match person and meaning',pairs:[['သမီး','daughter'],['သား','son'],['ကလေးရှိလား','do you have children?'],['အဖေ','father']]}]},
{id:'my_fam2_4',title:'Mix it',step:'mix',meta:'Family talk',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'သမီး',o:['daughter','son','little sister','wife'],a:0},
{t:'li',q:'Listen — which one?',say:'အမေ',o:['အမေ','အဖေ','အမည်း','နာမည်'],a:0},
{t:'mc',q:'The vendor asks ကလေးရှိလား. You have a son:',o:['သားတစ်ယောက်ရှိတယ်','သမီးမရှိဘူး','ကလေးကြိုက်တယ်','ရှိလား'],a:0},
{t:'wb',q:'Build: Mother and father are coming',a:['အမေ','နဲ့','အဖေ','လာနေတယ်'],pool:['အမေ','နဲ့','အဖေ','လာနေတယ်','သွားနေတယ်']},
{t:'li',q:'Listen — which one?',say:'သမီး',o:['သမီး','သား','မိသားစု','အမေ'],a:0},
{t:'match',q:'Match person and meaning',pairs:[['အမေ','mother'],['သား','son'],['မိသားစု','family'],['ကလေး','child']]}]},
{id:'my_fam2_5',title:'Checkpoint',step:'checkpoint',meta:'Family mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "father"?',o:['အဖေ','အမေ','ဦး','အစ်ကို'],a:0},
{t:'li',q:'Listen — which one?',say:'ကလေးရှိလား',o:['ကလေးရှိလား','ကလေးနှစ်ယောက်','အခန်းရှိလား','ကလေး'],a:0},
{t:'mc',q:'What does this mean?',d:'သား',o:['son','daughter','child','student'],a:0},
{t:'wb',q:'Build: (I) have two sons',a:['သား','နှစ်','ယောက်','ရှိတယ်'],pool:['သား','နှစ်','ယောက်','ရှိတယ်','သမီး']},
{t:'mc',q:'mother · father · son · daughter =',o:['အမေ · အဖေ · သား · သမီး','အဖေ · အမေ · သမီး · သား','အမေ · အဖေ · သမီး · သား','အဖေ · အမေ · သား · သမီး'],a:0},
{t:'match',q:'Match person and meaning',pairs:[['အမေ','mother'],['အဖေ','father'],['သား','son'],['သမီး','daughter']]}]},

/* --- Topic 3: age & married — the small-talk trio --- */
{id:'my_age',title:'Small talk',step:'learn',meta:'အသက် အိမ်ထောင် — friendly questions',vocab:[['အသက်','a theq','age'],['အသက်ဘယ်လောက်ရှိပြီလဲ','a theq beh lauq shi bi leh','how old are you?'],['အိမ်ထောင်ရှိလား','ein daung shi la','are you married?'],['အိမ်ထောင်ရှိတယ်','ein daung shi de','(I) am married'],['အိမ်ထောင်မရှိဘူး','ein daung ma shi bu','(I) am not married']],ex:[
{t:'note',tag:'Not rude here!',q:'Age & marriage',body:'<p>In Myanmar, asking age and marriage is <b>friendly interest</b>, not nosiness — it helps people pick the right kin term for you (ဦး or ကို? ဒေါ် or မ?).</p><p><span class="deva">အသက်</span> <b>a theq</b> = age: <span class="deva">အသက်ဘယ်လောက်ရှိပြီလဲ</span> — how old are you? (Literally: age how-much have-already?)</p>',eg:[['အသက်','a theq','age'],['အသက်ဘယ်လောက်ရှိပြီလဲ','a theq beh lauq shi bi leh','how old are you?']]},
{t:'mc',q:'Which means "age"?',o:['အသက်','အသစ်','နှစ်','အချိန်'],a:0},
{t:'mc',q:'What does this mean?',d:'အသက်ဘယ်လောက်ရှိပြီလဲ',o:['how old are you?','how tall are you?','when were you born?','how long have you stayed?'],a:0},
{t:'note',tag:'Household question',q:'အိမ်ထောင်',body:'<p><span class="deva">အိမ်ထောင်</span> <b>ein daung</b> = marriage — literally "set up a house" (spot <span class="deva">အိမ်</span>!). <span class="deva">အိမ်ထောင်ရှိလား</span> — are you married?</p><p>Answers: <span class="deva">ရှိတယ်</span> yes / <span class="deva">မရှိဘူး</span> no — your have-verb doing the work.</p>',eg:[['အိမ်ထောင်ရှိလား','ein daung shi la','are you married?'],['အိမ်ထောင်ရှိတယ်','ein daung shi de','(I) am married']]},
{t:'mc',q:'How do you ask "Are you married?"',o:['အိမ်ထောင်ရှိလား','ကလေးရှိလား','အခန်းရှိလား','အိမ်ရှိလား'],a:0},
{t:'mc',q:'What does this mean?',d:'အိမ်ထောင်မရှိဘူး',o:['(I) am not married','(I) have no house','(I) am not home','(I) have no family'],a:0},
{t:'li',q:'Listen — which one?',say:'အိမ်ထောင်ရှိလား',o:['အိမ်ထောင်ရှိလား','အိမ်ထောင်ရှိတယ်','ကလေးရှိလား','အခန်းရှိလား'],a:0}]},
{id:'my_age_2',title:'Hear the questions',step:'recognize',meta:'The friendly trio',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'အသက်',o:['အသက်','အသစ်','သစ်သီး','အသံ'],a:0},
{t:'mc',q:'Which means "(I) am married"?',o:['အိမ်ထောင်ရှိတယ်','အိမ်ထောင်ရှိလား','အိမ်ထောင်မရှိဘူး','အိမ်ရှိတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'အသက်ဘယ်လောက်ရှိပြီလဲ',o:['အသက်ဘယ်လောက်ရှိပြီလဲ','အသက်','ဒါဘယ်လောက်လဲ','အိမ်ထောင်ရှိလား'],a:0},
{t:'mc',q:'What does this mean?',d:'အိမ်ထောင်',o:['marriage','household chores','home town','family name'],a:0},
{t:'mc',q:'Why do Burmese people ask your age early on?',o:['to pick the right kin term for you','to guess your salary','just teasing','for paperwork'],a:0},
{t:'li',q:'Listen — which one?',say:'အိမ်ထောင်ရှိတယ်',o:['အိမ်ထောင်ရှိတယ်','အိမ်ထောင်ရှိလား','အိမ်ထောင်မရှိဘူး','ရှိတယ်'],a:0},
{t:'mc',q:'အိမ်ထောင် hides which word you know?',o:['အိမ် (house)','ထောင် (thousand)','ထမင်း (rice)','အချိန် (time)'],a:0}]},
{id:'my_age_3',title:'Put it together',step:'build',meta:'Answer with a smile',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['အသက်','age'],['အိမ်ထောင်ရှိလား','are you married?'],['အိမ်ထောင်ရှိတယ်','(I) am married'],['အိမ်ထောင်မရှိဘူး','(I) am not married']]},
{t:'wb',q:'Build: Are you married?',a:['အိမ်ထောင်','ရှိလား'],pool:['အိမ်ထောင်','ရှိလား','ရှိတယ်']},
{t:'mc',q:'You are 25: အသက် နှစ်ဆယ့်ငါး…',o:['နှစ်ရှိပြီ','ယောက်ရှိတယ်','ကျပ်ရှိတယ်','နာရီရှိပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'အိမ်ထောင်မရှိဘူး',o:['အိမ်ထောင်မရှိဘူး','အိမ်ထောင်ရှိတယ်','မရှိဘူး','ကလေးမရှိဘူး'],a:0},
{t:'wb',q:'Build: (I) am married and have one son',a:['အိမ်ထောင်ရှိတယ်','သား','တစ်','ယောက်','ရှိတယ်'],pool:['အိမ်ထောင်ရှိတယ်','သား','တစ်','ယောက်','ရှိတယ်','သမီး']},
{t:'match',q:'Match question and answer',pairs:[['အိမ်ထောင်ရှိလား','ရှိတယ်'],['ကလေးရှိလား','နှစ်ယောက်ရှိတယ်'],['နေကောင်းလား','နေကောင်းပါတယ်'],['ဗိုက်ဆာလား','ဆာတယ်']]}]},
{id:'my_age_4',title:'Mix it',step:'mix',meta:'The teashop interview',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အိမ်ထောင်ရှိလား',o:['are you married?','do you have a house?','is your family home?','do you live alone?'],a:0},
{t:'li',q:'Listen — which one?',say:'အသက်',o:['အသက်','သတိ','အသစ်','နှစ်'],a:0},
{t:'mc',q:'The trio of friendly Myanmar questions:',o:['age · married · children','name · job · football','food · weather · prices','home · work · school'],a:0},
{t:'wb',q:'Build: (I) am not married yet — married not-have (soft no)',a:['အိမ်ထောင်','မရှိဘူး'],pool:['အိမ်ထောင်','မရှိဘူး','ရှိတယ်']},
{t:'li',q:'Listen — which one?',say:'အသက်ဘယ်လောက်ရှိပြီလဲ',o:['အသက်ဘယ်လောက်ရှိပြီလဲ','အိမ်ထောင်ရှိလား','ဘယ်လောက်လဲ','အသက်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['အသက်','age'],['အိမ်ထောင်','marriage'],['ကလေး','child'],['အသက်ဘယ်လောက်ရှိပြီလဲ','how old are you?']]}]},
{id:'my_age_5',title:'Checkpoint',step:'checkpoint',meta:'Small talk mastered?',vocab:[],ex:[
{t:'mc',q:'Which asks "How old are you?"',o:['အသက်ဘယ်လောက်ရှိပြီလဲ','အသက်ရှိလား','ဘယ်နှယောက်လဲ','ဘယ်နှရက်လဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'အိမ်ထောင်ရှိတယ်',o:['အိမ်ထောင်ရှိတယ်','အိမ်ထောင်မရှိဘူး','အိမ်ထောင်ရှိလား','ရှိတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'အသက်',o:['age','year','life story','birthday'],a:0},
{t:'wb',q:'Build: Do you have children?',a:['ကလေး','ရှိလား'],pool:['ကလေး','ရှိလား','မရှိဘူး']},
{t:'mc',q:'Being asked your age in Myanmar is…',o:['friendly — it sets the kin term','rude','a job interview','rare'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['အသက်ဘယ်လောက်ရှိပြီလဲ','how old are you?'],['အိမ်ထောင်ရှိလား','are you married?'],['ကလေးရှိလား','do you have children?'],['အိမ်ထောင်မရှိဘူး','(I) am not married']]}]},

/* --- Topic 4: not yet & still သေး --- */
{id:'my_yet',title:'Not yet: သေး',step:'learn',meta:'မ…သေးဘူး — the gentle not-yet',vocab:[['မပြီးသေးဘူး','ma pi thei bu','not finished yet'],['မစားရသေးဘူး','ma sa ya thei bu','have not eaten yet'],['မသိသေးဘူး','ma thi thei bu','do not know yet'],['မရှိသေးဘူး','ma shi thei bu','not yet / do not have yet'],['ရှိသေးတယ်','shi thei de','still have / still there']],ex:[
{t:'note',tag:'Soften the no',q:'မ…သေးဘူး',body:'<p>Slip <span class="deva">သေး</span> <b>thei</b> into the no-sandwich and "no" becomes "<b>not YET</b>": <span class="deva">မပြီးသေးဘူး</span> not finished yet · <span class="deva">မသိသေးဘူး</span> do not know yet.</p><p>Burmese loves this — "not yet" keeps every door open.</p>',eg:[['မပြီးသေးဘူး','ma pi thei bu','not finished yet'],['မသိသေးဘူး','ma thi thei bu','do not know yet']]},
{t:'mc',q:'Which means "not finished yet"?',o:['မပြီးသေးဘူး','ပြီးပြီ','မပြီးဘူး','ပြီးရင်'],a:0},
{t:'mc',q:'What does this mean?',d:'မသိသေးဘူး',o:['do not know yet','do not know at all','did not know','will never know'],a:0},
{t:'note',tag:'Eaten yet? Still there?',q:'မစားရသေးဘူး · ရှိသေးတယ်',body:'<p>Asked ထမင်းစားပြီးပြီလား (eaten yet?), answer <span class="deva">မစားရသေးဘူး</span> — not yet! (Yes — Myanmar greets friends by asking if they have eaten.)</p><p>Flip သေး into a yes: <span class="deva">ရှိသေးတယ်</span> — still have / still there.</p>',eg:[['မစားရသေးဘူး','ma sa ya thei bu','have not eaten yet'],['ရှိသေးတယ်','shi thei de','still there']]},
{t:'mc',q:'Which means "have not eaten yet"?',o:['မစားရသေးဘူး','စားပြီးပြီ','မစားဘူး','စားနေတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရှိသေးတယ်',o:['still have / still there','do not have yet','had before','will have soon'],a:0},
{t:'li',q:'Listen — which one?',say:'မပြီးသေးဘူး',o:['မပြီးသေးဘူး','ပြီးပြီ','မစားရသေးဘူး','မသိသေးဘူး'],a:0}]},
{id:'my_yet_2',title:'Hear the not-yets',step:'recognize',meta:'yet or never?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'မသိသေးဘူး',o:['မသိသေးဘူး','မသိဘူး','မရှိသေးဘူး','သိတယ်'],a:0},
{t:'mc',q:'Which means "not yet (do not have yet)"?',o:['မရှိသေးဘူး','မရှိဘူး','ရှိသေးတယ်','ရှိတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'မစားရသေးဘူး',o:['မစားရသေးဘူး','စားပြီးပြီ','မစားဘူး','မစားဖူးဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'မပြီးသေးဘူး',o:['not finished yet','completely finished','never finished','just started'],a:0},
{t:'mc',q:'မသိဘူး vs မသိသေးဘူး —',o:['do not know vs do not know YET','know vs do not know','never vs always','both the same'],a:0},
{t:'li',q:'Listen — which one?',say:'ရှိသေးတယ်',o:['ရှိသေးတယ်','မရှိသေးဘူး','ရှိတယ်','သေးတယ်'],a:0},
{t:'mc',q:'The friendly Myanmar greeting asks if you have…',o:['eaten','slept','worked','traveled'],a:0}]},
{id:'my_yet_3',title:'Put it together',step:'build',meta:'Keep doors open',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['မပြီးသေးဘူး','not finished yet'],['မစားရသေးဘူး','not eaten yet'],['မသိသေးဘူး','do not know yet'],['ရှိသေးတယ်','still have']]},
{t:'wb',q:'Build: (I) have not eaten yet',a:['မစားရသေးဘူး'],pool:['မစားရသေးဘူး','စားပြီးပြီ']},
{t:'mc',q:'ဘယ်တော့သွားမလဲ — you have no plan yet:',o:['မသိသေးဘူး','မသိဘူး','သိတယ်','မသွားဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'မရှိသေးဘူး',o:['မရှိသေးဘူး','မရှိဘူး','ရှိသေးတယ်','မသိသေးဘူး'],a:0},
{t:'wb',q:'Build: The work is not finished yet',a:['အလုပ်','မပြီးသေးဘူး'],pool:['အလုပ်','မပြီးသေးဘူး','ပြီးပြီ']},
{t:'match',q:'Match question and not-yet answer',pairs:[['စားပြီးပြီလား','မစားရသေးဘူး'],['ပြီးပြီလား','မပြီးသေးဘူး'],['သိလား','မသိသေးဘူး'],['ကလေးရှိလား','မရှိသေးဘူး']]}]},
{id:'my_yet_4',title:'Mix it',step:'mix',meta:'Yet, still & already',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မရှိသေးဘူး',o:['not yet / do not have yet','never had','still have','already gone'],a:0},
{t:'li',q:'Listen — which one?',say:'မပြီးသေးဘူး',o:['မပြီးသေးဘူး','ပြီးပြီ','မပြီးဘူး','ပြီးတော့'],a:0},
{t:'mc',q:'ထမင်းစားပြီးပြီလား? Your stomach growls…',o:['မစားရသေးဘူး','စားပြီးပြီ','မစားဖူးဘူး','စားချင်တယ်'],a:0},
{t:'wb',q:'Build: (I) do not know yet. (I) will know tomorrow.',a:['မသိသေးဘူး','မနက်ဖြန်','သိမယ်'],pool:['မသိသေးဘူး','မနက်ဖြန်','သိမယ်','သိတယ်'],},
{t:'li',q:'Listen — which one?',say:'ရှိသေးတယ်',o:['ရှိသေးတယ်','ရှိတယ်','မရှိသေးဘူး','သေးတယ်'],a:0},
{t:'match',q:'Match ending and flavor',pairs:[['ပြီ','already! (news)'],['သေး (မ…သေးဘူး)','not yet'],['ဖူး','ever in life'],['နေ','right now']]}]},
{id:'my_yet_5',title:'Checkpoint',step:'checkpoint',meta:'Not-yet mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "do not know yet"?',o:['မသိသေးဘူး','မသိဘူး','သိသေးတယ်','မသိရဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'မစားရသေးဘူး',o:['မစားရသေးဘူး','မပြီးသေးဘူး','စားပြီးပြီ','မစားချင်ဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'ရှိသေးတယ်',o:['still have / still there','not yet','have already','never had'],a:0},
{t:'wb',q:'Build: Not finished yet — please wait a moment',a:['မပြီးသေးဘူး','ခဏစောင့်ပါ'],pool:['မပြီးသေးဘူး','ခဏစောင့်ပါ','ပြီးပြီ']},
{t:'mc',q:'The "yet" that softens every no is…',o:['သေး','ဖူး','နေ','ပြီ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['မပြီးသေးဘူး','not finished yet'],['မစားရသေးဘူး','not eaten yet'],['ရှိသေးတယ်','still have'],['မရှိသေးဘူး','not yet']]}]},

/* --- Topic 5: language talk --- */
{id:'my_lang',title:'Language talk',step:'learn',meta:'စကား မြန်မာစကား အင်္ဂလိပ်လို',vocab:[['စကား','za ga','speech / language'],['မြန်မာစကား','myanma za ga','the Burmese language'],['အင်္ဂလိပ်လို','in ga leiq lo','in English'],['နိုင်ငံခြားသား','naingngan cha tha','foreigner'],['အင်္ဂလိပ်လိုပြောတတ်လား','in ga leiq lo pyaw taq la','can you speak English?']],ex:[
{t:'note',tag:'Talk about talk',q:'စကား',body:'<p><span class="deva">စကား</span> <b>za ga</b> = speech, language: <span class="deva">မြန်မာစကား</span> the Burmese language · <span class="deva">စကားပြောတယ်</span> to talk.</p><p>You know the -လို trick from မြန်မာလို: <span class="deva">အင်္ဂလိပ်လို</span> <b>in ga leiq lo</b> = in English.</p>',eg:[['စကား','za ga','speech / language'],['မြန်မာစကား','myanma za ga','Burmese'],['အင်္ဂလိပ်လို','in ga leiq lo','in English']]},
{t:'mc',q:'Which means "speech / language"?',o:['စကား','စာ','သီချင်း','နာမည်'],a:0},
{t:'mc',q:'What does this mean?',d:'အင်္ဂလိပ်လို',o:['in English','England','an English person','in Burmese'],a:0},
{t:'note',tag:'You, the foreigner',q:'နိုင်ငံခြားသား',body:'<p><span class="deva">နိုင်ငံခြားသား</span> <b>naingngan cha tha</b> = foreigner — country-outside-person (there is နိုင်ငံ from Zone 2, and the -သား doer!). That is you — and saying <span class="deva">မြန်မာစကား</span> back to people is the fastest way to make them smile.</p><p>They will ask you: <span class="deva">အင်္ဂလိပ်လိုပြောတတ်လား</span> — can you speak English?</p>',eg:[['နိုင်ငံခြားသား','naingngan cha tha','foreigner'],['အင်္ဂလိပ်လိုပြောတတ်လား','in ga leiq lo pyaw taq la','can you speak English?']]},
{t:'mc',q:'Which means "foreigner"?',o:['နိုင်ငံခြားသား','နိုင်ငံ','ကျောင်းသား','လယ်သမား'],a:0},
{t:'mc',q:'What does this mean?',d:'အင်္ဂလိပ်လိုပြောတတ်လား',o:['can you speak English?','do you like English?','are you English?','is this in English?'],a:0},
{t:'li',q:'Listen — which one?',say:'မြန်မာစကား',o:['မြန်မာစကား','မြန်မာလို','စကား','မြန်မာ'],a:0}]},
{id:'my_lang_2',title:'Hear the languages',step:'recognize',meta:'Burmese or English?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'စကား',o:['စကား','စာ','ဇယား','စားပွဲ'],a:0},
{t:'mc',q:'Which means "in English"?',o:['အင်္ဂလိပ်လို','မြန်မာလို','အင်္ဂလိပ်','စကား'],a:0},
{t:'li',q:'Listen — which one?',say:'နိုင်ငံခြားသား',o:['နိုင်ငံခြားသား','နိုင်ငံ','ကျောင်းသား','လယ်သမား'],a:0},
{t:'mc',q:'What does this mean?',d:'မြန်မာစကား',o:['the Burmese language','Myanmar country','a Burmese person','in Burmese'],a:0},
{t:'mc',q:'နိုင်ငံခြားသား is literally…',o:['country-outside-person','far-away-guest','other-language-speaker','new-face'],a:0},
{t:'li',q:'Listen — which one?',say:'အင်္ဂလိပ်လိုပြောတတ်လား',o:['အင်္ဂလိပ်လိုပြောတတ်လား','မြန်မာလိုပြောတတ်လား','အင်္ဂလိပ်လို','ပြောတတ်လား'],a:0},
{t:'mc',q:'Someone asks you that. You answer honestly…',o:['ပြောတတ်တယ်','မသွားဘူး','ဝမ်းနည်းတယ်','ရောက်ပြီ'],a:0}]},
{id:'my_lang_3',title:'Put it together',step:'build',meta:'Bridge two languages',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['စကား','language'],['မြန်မာစကား','Burmese'],['အင်္ဂလိပ်လို','in English'],['နိုင်ငံခြားသား','foreigner']]},
{t:'wb',q:'Build: Can you speak English?',a:['အင်္ဂလိပ်လို','ပြောတတ်လား'],pool:['အင်္ဂလိပ်လို','ပြောတတ်လား','ပြောတတ်တယ်']},
{t:'mc',q:'"Please say it in Burmese" =',o:['မြန်မာလိုပြောပါ','အင်္ဂလိပ်လိုပြောပါ','မြန်မာစကား','ပြန်ပြောပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'အင်္ဂလိပ်လို',o:['အင်္ဂလိပ်လို','မြန်မာလို','အင်္ဂါ','စကား'],a:0},
{t:'wb',q:'Build: (I) am learning Burmese — Burmese-language learn-staying (သင် thin learn)',a:['မြန်မာစကား','သင်နေတယ်'],pool:['မြန်မာစကား','သင်နေတယ်','ပြောနေတယ်']},
{t:'match',q:'Match line and meaning',pairs:[['မြန်မာလို','in Burmese'],['အင်္ဂလိပ်လို','in English'],['စကားပြောတယ်','to talk'],['နိုင်ငံခြားသား','foreigner']]}]},
{id:'my_lang_4',title:'Mix it',step:'mix',meta:'Between languages',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'နိုင်ငံခြားသား',o:['foreigner','citizen','traveler','translator'],a:0},
{t:'li',q:'Listen — which one?',say:'မြန်မာစကား',o:['မြန်မာစကား','မြန်မာလို','မြန်မာ','စကား'],a:0},
{t:'mc',q:'A vendor speaks fast English at you. You grin:',o:['မြန်မာလိုပြောပါ','အင်္ဂလိပ်လိုပြောပါ','ကူညီပါ','ဒါပဲ'],a:0},
{t:'wb',q:'Build: (I) speak a little Burmese (woman speaking)',a:['ကျွန်မ','မြန်မာစကား','နည်းနည်း','ပြောတတ်တယ်'],pool:['ကျွန်မ','မြန်မာစကား','နည်းနည်း','ပြောတတ်တယ်','အရမ်း']},
{t:'li',q:'Listen — which one?',say:'စကား',o:['စကား','စားပွဲ','စာ','ဇယား'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['စကား','language'],['အင်္ဂလိပ်လိုပြောတတ်လား','can you speak English?'],['မြန်မာစကား','Burmese'],['နိုင်ငံခြားသား','foreigner']]}]},
{id:'my_lang_5',title:'Checkpoint',step:'checkpoint',meta:'Language talk mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "the Burmese language"?',o:['မြန်မာစကား','မြန်မာလို','မြန်မာ','မြန်မာနိုင်ငံ'],a:0},
{t:'li',q:'Listen — which one?',say:'အင်္ဂလိပ်လိုပြောတတ်လား',o:['အင်္ဂလိပ်လိုပြောတတ်လား','အင်္ဂလိပ်လို','မြန်မာလိုပြောတတ်လား','ပြောတတ်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'စကား',o:['speech / language','story','word list','letter'],a:0},
{t:'wb',q:'Build: (I) am a foreigner, but (I) speak a little Burmese',a:['နိုင်ငံခြားသား','ပါ','ဒါပေမဲ့','မြန်မာလို','နည်းနည်း','ပြောတတ်တယ်'],pool:['နိုင်ငံခြားသား','ပါ','ဒါပေမဲ့','မြန်မာလို','နည်းနည်း','ပြောတတ်တယ်','လို့']},
{t:'mc',q:'The -လို tail turns a language name into…',o:['"in that language"','a person','a country','a school subject'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['မြန်မာစကား','Burmese'],['အင်္ဂလိပ်လို','in English'],['နိုင်ငံခြားသား','foreigner'],['စကား','language']]}]},

/* --- Topic 6: now, later & when --- */
{id:'my_now',title:'Now or later?',step:'learn',meta:'အခု နောက်မှ ဘယ်တော့',vocab:[['အခု','a hku','now'],['နောက်မှ','nauq hma','later'],['ဘယ်တော့လဲ','beh daw leh','when?'],['ဘယ်တော့လာမလဲ','beh daw la ma leh','when will you come?'],['အခုလာနိုင်လား','a hku la naing la','can you come now?']],ex:[
{t:'note',tag:'The missing word',q:'အခု — now',body:'<p>Somehow you have survived nine zones without "now": <span class="deva">အခု</span> <b>a hku</b>. <span class="deva">အခုလာနိုင်လား</span> — can you come now?</p><p>Its lazy cousin: <span class="deva">နောက်မှ</span> <b>nauq hma</b> — later (the နောက် of နောက်လ!).</p>',eg:[['အခု','a hku','now'],['နောက်မှ','nauq hma','later']]},
{t:'mc',q:'Which means "now"?',o:['အခု','နောက်မှ','ဒီနေ့','ခဏ'],a:0},
{t:'mc',q:'What does this mean?',d:'နောက်မှ',o:['later','earlier','behind','next month'],a:0},
{t:'note',tag:'Ask when',q:'ဘယ်တော့ + …လဲ',body:'<p>The last question word of the ဘ-family: <span class="deva">ဘယ်တော့</span> <b>beh daw</b> = when? (for the future). <span class="deva">ဘယ်တော့လာမလဲ</span> — when will you come?</p>',eg:[['ဘယ်တော့လဲ','beh daw leh','when?'],['ဘယ်တော့လာမလဲ','beh daw la ma leh','when will you come?']]},
{t:'mc',q:'Which asks "when (in the future)?"',o:['ဘယ်တော့လဲ','ဘယ်မှာလဲ','ဘာလို့လဲ','ဘယ်လောက်လဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘယ်တော့လာမလဲ',o:['when will you come?','why did you come?','can you come now?','who is coming?'],a:0},
{t:'li',q:'Listen — which one?',say:'အခု',o:['အခု','နောက်မှ','ခဏ','အခန်း'],a:0}]},
{id:'my_now_2',title:'Hear the timing',step:'recognize',meta:'now / later / when',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'နောက်မှ',o:['နောက်မှ','နောက်လ','အခု','နောက်ဆုံး'],a:0},
{t:'mc',q:'Which means "can you come now?"',o:['အခုလာနိုင်လား','ဘယ်တော့လာမလဲ','နောက်မှလာမယ်','အခုလာမယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်တော့လဲ',o:['ဘယ်တော့လဲ','ဘယ်လောက်လဲ','ဘယ်မှာလဲ','ဘာလို့လဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'အခု',o:['now','soon','today','already'],a:0},
{t:'mc',q:'Friend: အခုလာနိုင်လား? You are busy:',o:['နောက်မှလာမယ်','အခုလာမယ်','မလာဖူးဘူး','ရောက်ပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်တော့လာမလဲ',o:['ဘယ်တော့လာမလဲ','ဘယ်တော့လဲ','အခုလာနိုင်လား','ဘယ်ကလာလဲ'],a:0},
{t:'mc',q:'ဘယ်တော့ belongs to which family?',o:['the ဘ question family','the kin terms','the counters','the endings'],a:0}]},
{id:'my_now_3',title:'Put it together',step:'build',meta:'Pin down a time',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['အခု','now'],['နောက်မှ','later'],['ဘယ်တော့လဲ','when?'],['ခဏ','a moment']]},
{t:'wb',q:'Build: When will you come?',a:['ဘယ်တော့','လာမလဲ'],pool:['ဘယ်တော့','လာမလဲ','လာမယ်']},
{t:'mc',q:'"(I) will eat later" =',o:['နောက်မှစားမယ်','အခုစားမယ်','စားပြီးပြီ','မစားရသေးဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'အခုလာနိုင်လား',o:['အခုလာနိုင်လား','ဘယ်တော့လာမလဲ','အခု','လာနိုင်လား'],a:0},
{t:'wb',q:'Build: Can you come now?',a:['အခု','လာနိုင်လား'],pool:['အခု','လာနိုင်လား','လာမလဲ']},
{t:'match',q:'Match question and answer',pairs:[['ဘယ်တော့လာမလဲ','မနက်ဖြန်လာမယ်'],['အခုလာနိုင်လား','နောက်မှလာမယ်'],['ဘယ်မှာလဲ','ဒီနားမှာ'],['ဘယ်လောက်လဲ','ငါးရာ']]}]},
{id:'my_now_4',title:'Mix it',step:'mix',meta:'Timing is everything',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အခုလာနိုင်လား',o:['can you come now?','when will you come?','are you coming later?','did you come already?'],a:0},
{t:'li',q:'Listen — which one?',say:'အခု',o:['အခု','ခု','နောက်မှ','အခါ'],a:0},
{t:'mc',q:'ဘယ်တော့စားမလဲ — you are starving:',o:['အခုစားမယ်','နောက်မှစားမယ်','မစားသေးဘူး','စားပြီးပြီ'],a:0},
{t:'wb',q:'Build: (I) will call later',a:['နောက်မှ','ဖုန်းဆက်မယ်'],pool:['နောက်မှ','ဖုန်းဆက်မယ်','ဖုန်းဆက်တယ်']},
{t:'li',q:'Listen — which one?',say:'နောက်မှ',o:['နောက်မှ','နောက်လ','နောက်နှစ်','အခု'],a:0},
{t:'match',q:'Match time and word',pairs:[['အခု','now'],['နောက်မှ','later'],['မနက်ဖြန်','tomorrow'],['မနေ့က','yesterday']]}]},
{id:'my_now_5',title:'Checkpoint',step:'checkpoint',meta:'Timing mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "later"?',o:['နောက်မှ','အခု','ခဏ','ပြီးရင်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘယ်တော့လဲ',o:['ဘယ်တော့လဲ','ဘယ်တော့လာမလဲ','ဘာလို့လဲ','ဘယ်မှာလဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'အခု',o:['now','then','soon','first'],a:0},
{t:'wb',q:'Build: When will you go to Yangon?',a:['ရန်ကုန်','ကို','ဘယ်တော့','သွားမလဲ'],pool:['ရန်ကုန်','ကို','ဘယ်တော့','သွားမလဲ','သွားမယ်']},
{t:'mc',q:'now · later · when? =',o:['အခု · နောက်မှ · ဘယ်တော့','နောက်မှ · အခု · ဘယ်တော့','ဘယ်တော့ · နောက်မှ · အခု','အခု · ဘယ်တော့ · နောက်မှ'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['အခု','now'],['နောက်မှ','later'],['ဘယ်တော့လာမလဲ','when will you come?'],['အခုလာနိုင်လား','can you come now?']]}]},

/* --- Topic 7: tell your day — first, then, finally --- */
{id:'my_story',title:'Tell your day',step:'learn',meta:'အရင် ပြီးရင် နောက်ဆုံး + အမြဲ',vocab:[['အရင်','a yin','first / before'],['ပြီးရင်','pyi yin','after that / then'],['နောက်ဆုံး','nauq soun','finally / last'],['တစ်ခါတစ်လေ','ta hka ta lei','sometimes'],['အမြဲ','a myeh','always']],ex:[
{t:'note',tag:'In order',q:'အရင် → ပြီးရင် → နောက်ဆုံး',body:'<p>March your story in order: <span class="deva">အရင်</span> <b>a yin</b> first… <span class="deva">ပြီးရင်</span> <b>pyi yin</b> then… (ပြီး finish + ရင် when — "when finished"!) <span class="deva">နောက်ဆုံး</span> <b>nauq soun</b> finally (the ဆုံး of အကောင်းဆုံး!).</p>',eg:[['အရင်','a yin','first'],['ပြီးရင်','pyi yin','then'],['နောက်ဆုံး','nauq soun','finally']]},
{t:'mc',q:'Which means "first"?',o:['အရင်','ပြီးရင်','နောက်ဆုံး','အခု'],a:0},
{t:'mc',q:'What does this mean?',d:'ပြီးရင်',o:['after that / then','before that','finally','if it finishes'],a:0},
{t:'note',tag:'How often',q:'တစ်ခါတစ်လေ · အမြဲ',body:'<p><span class="deva">တစ်ခါတစ်လေ</span> <b>ta hka ta lei</b> = sometimes (one-time-one-time!). <span class="deva">အမြဲ</span> <b>a myeh</b> = always.</p><p><span class="deva">အမြဲလက်ဖက်ရည်ဆိုင်ကိုသွားတယ်</span> — I always go to the teashop. Us too.</p>',eg:[['တစ်ခါတစ်လေ','ta hka ta lei','sometimes'],['အမြဲ','a myeh','always']]},
{t:'mc',q:'Which means "sometimes"?',o:['တစ်ခါတစ်လေ','အမြဲ','တစ်ခါ','နောက်မှ'],a:0},
{t:'mc',q:'What does this mean?',d:'အမြဲ',o:['always','sometimes','never','often'],a:0},
{t:'li',q:'Listen — which one?',say:'နောက်ဆုံး',o:['နောက်ဆုံး','နောက်မှ','နောက်လ','အရင်'],a:0}]},
{id:'my_story_2',title:'Hear the order',step:'recognize',meta:'first / then / finally',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'အရင်',o:['အရင်','အရမ်း','ရင်','အမြဲ'],a:0},
{t:'mc',q:'Which means "finally"?',o:['နောက်ဆုံး','ပြီးရင်','အရင်','နောက်မှ'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်ခါတစ်လေ',o:['တစ်ခါတစ်လေ','တစ်ခါ','တစ်ယောက်','အမြဲ'],a:0},
{t:'mc',q:'What does this mean?',d:'အရင်',o:['first / before','always','after','last'],a:0},
{t:'mc',q:'ပြီးရင် is built from…',o:['ပြီး (finish) + ရင် (when)','ပြီ (already) + ရင်','ပြော (speak) + ရင်','ပေး (give) + ရင်'],a:0},
{t:'li',q:'Listen — which one?',say:'အမြဲ',o:['အမြဲ','အရမ်း','အမေ','မြဲ'],a:0},
{t:'mc',q:'How often do you brush your teeth? Hopefully…',o:['အမြဲ','တစ်ခါတစ်လေ','တစ်ခါ','နောက်ဆုံး'],a:0}]},
{id:'my_story_3',title:'Put it together',step:'build',meta:'Sequence a story',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['အရင်','first'],['ပြီးရင်','then'],['နောက်ဆုံး','finally'],['အမြဲ','always']]},
{t:'wb',q:'Build: First (I) shower, then (I) eat',a:['အရင်','ရေချိုးတယ်','ပြီးရင်','စားတယ်'],pool:['အရင်','ရေချိုးတယ်','ပြီးရင်','စားတယ်','နောက်ဆုံး']},
{t:'mc',q:'The story-closer is…',o:['နောက်ဆုံး','အရင်','ပြီးရင်','ဒါပေမဲ့'],a:0},
{t:'li',q:'Listen — which one?',say:'ပြီးရင်',o:['ပြီးရင်','ပြီးတော့','ပြီးပြီ','အရင်'],a:0},
{t:'wb',q:'Build: (I) sometimes play football',a:['တစ်ခါတစ်လေ','ဘောလုံး','ကန်တယ်'],pool:['တစ်ခါတစ်လေ','ဘောလုံး','ကန်တယ်','အမြဲ']},
{t:'match',q:'Match frequency',pairs:[['အမြဲ','always'],['တစ်ခါတစ်လေ','sometimes'],['တစ်ခါ','once'],['နောက်မှ','later']]}]},
{id:'my_story_4',title:'Mix it',step:'mix',meta:'Your whole day, in Burmese',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'တစ်ခါတစ်လေ',o:['sometimes','once upon a time','one by one','rarely'],a:0},
{t:'li',q:'Listen — which one?',say:'အရင်',o:['အရင်','ပြီးရင်','အရမ်း','အခု'],a:0},
{t:'mc',q:'အရင် မနက်စာစားတယ်၊ ပြီးရင် အလုပ်သွားတယ် — the order is…',o:['breakfast first, then work','work first, then breakfast','only breakfast','only work'],a:0},
{t:'wb',q:'Build: Finally, (I) sleep',a:['နောက်ဆုံး','အိပ်တယ်'],pool:['နောက်ဆုံး','အိပ်တယ်','ထတယ်']},
{t:'li',q:'Listen — which one?',say:'အမြဲ',o:['အမြဲ','တစ်ခါတစ်လေ','အရမ်း','မြဲမြဲ'],a:0},
{t:'match',q:'Match story part and word',pairs:[['အရင်','first'],['ပြီးရင်','then'],['နောက်ဆုံး','finally'],['တစ်ခါတစ်လေ','sometimes']]}]},
{id:'my_story_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 10 complete!',vocab:[],ex:[
{t:'mc',q:'Which means "then / after that"?',o:['ပြီးရင်','အရင်','နောက်ဆုံး','အမြဲ'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်ခါတစ်လေ',o:['တစ်ခါတစ်လေ','အမြဲ','တစ်ခါ','တစ်ခုတစ်လေ'],a:0},
{t:'mc',q:'What does this mean?',d:'နောက်ဆုံး',o:['finally / last','later','next','behind'],a:0},
{t:'wb',q:'Build: First tea, then work — first tea drink, then work do',a:['အရင်','လက်ဖက်ရည်','သောက်တယ်','ပြီးရင်','အလုပ်လုပ်တယ်'],pool:['အရင်','လက်ဖက်ရည်','သောက်တယ်','ပြီးရင်','အလုပ်လုပ်တယ်','နောက်ဆုံး']},
{t:'mc',q:'first · then · finally =',o:['အရင် · ပြီးရင် · နောက်ဆုံး','ပြီးရင် · အရင် · နောက်ဆုံး','နောက်ဆုံး · ပြီးရင် · အရင်','အရင် · နောက်ဆုံး · ပြီးရင်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['အရင်','first'],['ပြီးရင်','then'],['တစ်ခါတစ်လေ','sometimes'],['အမြဲ','always']]}]},

/* ===================== ZONE 11 · LITTLE EXTRAS =====================
   The everyday words that round out real conversations: need လို, slow &
   fast, clothes (longyi!), animals, nature & trips, remember/forget,
   together/alone. Per Mesher L9–10 topical vocab & Okell appendices. */
/* --- Topic 1: need, give & take --- */
{id:'my_need',title:'Need it',step:'learn',meta:'လိုတယ် ပေးတယ် ယူတယ်',vocab:[['လိုတယ်','lo de','need'],['မလိုဘူး','ma lo bu','do not need (it)'],['ပေးတယ်','pei de','give'],['ယူတယ်','yu de','take'],['ဘာလိုလဲ','ba lo leh','what do you need?']],ex:[
{t:'note',tag:'Zone 11',q:'လိုတယ် — need',body:'<p><span class="deva">လိုတယ်</span> <b>lo de</b> = need: <span class="deva">ရေလိုတယ်</span> — (I) need water. <span class="deva">မလိုဘူး</span> — no need (the polite wave-off when a vendor piles on extras).</p><p>Careful ears: <span class="deva">လို</span> need · <span class="deva">လို့</span> because · မြန်မာ<span class="deva">လို</span> in-Burmese. Small sounds, big differences!</p>',eg:[['လိုတယ်','lo de','need'],['မလိုဘူး','ma lo bu','no need']]},
{t:'mc',q:'Which means "need"?',o:['လိုတယ်','ရှိတယ်','ချင်တယ်','ရတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မလိုဘူး',o:['do not need (it)','do not have (it)','do not want (it)','do not know'],a:0},
{t:'note',tag:'Give & take',q:'ပေး · ယူ',body:'<p>You have used them inside phrases all course: bare <span class="deva">ပေးတယ်</span> <b>pei de</b> = give (the ပေး of ပေးပါ!) and <span class="deva">ယူတယ်</span> <b>yu de</b> = take (the ယူ of ယူမယ်).</p><p>Ask what someone needs: <span class="deva">ဘာလိုလဲ</span> <b>ba lo leh</b>.</p>',eg:[['ပေးတယ်','pei de','give'],['ယူတယ်','yu de','take'],['ဘာလိုလဲ','ba lo leh','what do you need?']]},
{t:'mc',q:'Which means "give"?',o:['ပေးတယ်','ယူတယ်','လိုတယ်','ရတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘာလိုလဲ',o:['what do you need?','why?','what is this?','what do you want?'],a:0},
{t:'li',q:'Listen — which one?',say:'လိုတယ်',o:['လိုတယ်','လို့','ယူတယ်','ရှိတယ်'],a:0}]},
{id:'my_need_2',title:'Hear the needs',step:'recognize',meta:'need / give / take',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'မလိုဘူး',o:['မလိုဘူး','လိုတယ်','မရှိဘူး','မယူဘူး'],a:0},
{t:'mc',q:'Which means "take"?',o:['ယူတယ်','ပေးတယ်','လိုတယ်','လာတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ပေးတယ်',o:['ပေးတယ်','ပေးပါ','ယူတယ်','ပြောတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လိုတယ်',o:['need','want','have','like'],a:0},
{t:'mc',q:'The vendor offers a plastic bag you do not need:',o:['မလိုဘူး','မရှိဘူး','မကြိုက်ဘူး','မသိဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'ဘာလိုလဲ',o:['ဘာလိုလဲ','ဘာလို့လဲ','ဘာလဲ','ဘယ်လိုလဲ'],a:0},
{t:'mc',q:'ဘာလိုလဲ vs ဘာလို့လဲ —',o:['what do you need? vs why?','why? vs what do you need?','both mean why','both mean need'],a:0}]},
{id:'my_need_3',title:'Put it together',step:'build',meta:'Ask & provide',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['လိုတယ်','need'],['မလိုဘူး','no need'],['ပေးတယ်','give'],['ယူတယ်','take']]},
{t:'wb',q:'Build: (I) need water',a:['ရေ','လိုတယ်'],pool:['ရေ','လိုတယ်','ယူတယ်']},
{t:'mc',q:'"(I) need money" =',o:['ပိုက်ဆံလိုတယ်','ပိုက်ဆံရှိတယ်','ပိုက်ဆံပေးတယ်','ပိုက်ဆံယူတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ယူတယ်',o:['ယူတယ်','ယူမယ်','ပေးတယ်','လိုတယ်'],a:0},
{t:'wb',q:'Build: What do you need?',a:['ဘာ','လိုလဲ'],pool:['ဘာ','လိုလဲ','လိုတယ်']},
{t:'match',q:'Match line and meaning',pairs:[['ဘာလိုလဲ','what do you need?'],['မလိုဘူး','no need'],['ပေးတယ်','give'],['လိုတယ်','need']]}]},
{id:'my_need_4',title:'Mix it',step:'mix',meta:'Needs met',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ယူတယ်',o:['take','give','need','buy'],a:0},
{t:'li',q:'Listen — which one?',say:'လိုတယ်',o:['လိုတယ်','မလိုဘူး','လို့','ယူတယ်'],a:0},
{t:'mc',q:'Friend heading to the shop asks ဘာလိုလဲ. You need coffee:',o:['ကော်ဖီလိုတယ်','ကော်ဖီကြိုက်တယ်','ကော်ဖီရှိတယ်','ကော်ဖီပေးတယ်'],a:0},
{t:'wb',q:'Build: (I) do not need a bag — bag no-need (အိတ် eiq bag)',a:['အိတ်','မလိုဘူး'],pool:['အိတ်','မလိုဘူး','လိုတယ်']},
{t:'li',q:'Listen — which one?',say:'ဘာလိုလဲ',o:['ဘာလိုလဲ','ဘာလဲ','ဘာလို့လဲ','ဘယ်လို'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ပေးတယ်','give'],['ယူတယ်','take'],['လိုတယ်','need'],['ဘာလိုလဲ','what do you need?']]}]},
{id:'my_need_5',title:'Checkpoint',step:'checkpoint',meta:'Needs mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "do not need"?',o:['မလိုဘူး','မရှိဘူး','မယူဘူး','မပေးဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'ပေးတယ်',o:['ပေးတယ်','ယူတယ်','ပေးပါ','ပြောတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘာလိုလဲ',o:['what do you need?','why is that?','what happened?','how much?'],a:0},
{t:'wb',q:'Build: (I) need time',a:['အချိန်','လိုတယ်'],pool:['အချိန်','လိုတယ်','ရှိတယ်']},
{t:'mc',q:'need · give · take =',o:['လို · ပေး · ယူ','ယူ · ပေး · လို','ပေး · လို · ယူ','လို · ယူ · ပေး'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['လိုတယ်','need'],['ပေးတယ်','give'],['ယူတယ်','take'],['မလိုဘူး','no need']]}]},

/* --- Topic 2: slowly & quickly --- */
{id:'my_manner',title:'Learner phrases',step:'learn',meta:'ဖြည်းဖြည်း မြန်မြန်',vocab:[['ဖြည်းဖြည်း','hpyei hpyei','slowly'],['မြန်မြန်','myan myan','quickly'],['ဖြည်းဖြည်းပြောပါ','hpyei hpyei pyaw ba','please speak slowly'],['မြန်တယ်','myan de','is fast'],['နှေးတယ်','hnei de','is slow']],ex:[
{t:'note',tag:'Double it',q:'ဖြည်းဖြည်း · မြန်မြန်',body:'<p>Burmese makes "how you do it" by <b>doubling</b>: <span class="deva">မြန်တယ်</span> fast → <span class="deva">မြန်မြန်</span> quickly · <span class="deva">ဖြည်းဖြည်း</span> <b>hpyei hpyei</b> slowly.</p><p>The learner magic phrase: <span class="deva">ဖြည်းဖြည်းပြောပါ</span> — please speak slowly!</p>',eg:[['ဖြည်းဖြည်း','hpyei hpyei','slowly'],['မြန်မြန်','myan myan','quickly'],['ဖြည်းဖြည်းပြောပါ','hpyei hpyei pyaw ba','please speak slowly']]},
{t:'mc',q:'Which means "slowly"?',o:['ဖြည်းဖြည်း','မြန်မြန်','နည်းနည်း','အရမ်း'],a:0},
{t:'mc',q:'What does this mean?',d:'ဖြည်းဖြည်းပြောပါ',o:['please speak slowly','please speak up','please say it again','please be quiet'],a:0},
{t:'note',tag:'Fast & slow',q:'မြန် · နှေး',body:'<p>The plain verbs: <span class="deva">မြန်တယ်</span> <b>myan de</b> is fast · <span class="deva">နှေးတယ်</span> <b>hnei de</b> is slow.</p><p><span class="deva">မြန်မြန်လာပါ</span> — come quickly!</p>',eg:[['မြန်တယ်','myan de','is fast'],['နှေးတယ်','hnei de','is slow']]},
{t:'mc',q:'Which means "is slow"?',o:['နှေးတယ်','မြန်တယ်','ဝေးတယ်','နီးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မြန်မြန်',o:['quickly','slowly','loudly','carefully'],a:0},
{t:'li',q:'Listen — which one?',say:'ဖြည်းဖြည်းပြောပါ',o:['ဖြည်းဖြည်းပြောပါ','ပြန်ပြောပါ','မြန်မြန်','ဖြည်းဖြည်း'],a:0}]},
{id:'my_manner_2',title:'Hear the pace',step:'recognize',meta:'fast or slow?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'မြန်မြန်',o:['မြန်မြန်','ဖြည်းဖြည်း','မြန်မာ','မြန်တယ်'],a:0},
{t:'mc',q:'Which means "is fast"?',o:['မြန်တယ်','နှေးတယ်','မြန်မြန်','ပူတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဖြည်းဖြည်း',o:['ဖြည်းဖြည်း','မြန်မြန်','နှေးတယ်','နည်းနည်း'],a:0},
{t:'mc',q:'What does this mean?',d:'နှေးတယ်',o:['is slow','is fast','is late','is near'],a:0},
{t:'mc',q:'Doubling a describing verb (မြန် → မြန်မြန်) makes…',o:['a "how you do it" word','a question','a noun','the past'],a:0},
{t:'li',q:'Listen — which one?',say:'မြန်တယ်',o:['မြန်တယ်','နှေးတယ်','မြန်မြန်','မှန်တယ်'],a:0},
{t:'mc',q:'The taxi crawls; your bus leaves soon:',o:['မြန်မြန်သွားပါ','ဖြည်းဖြည်းသွားပါ','ခဏစောင့်ပါ','တည့်တည့်သွားပါ'],a:0}]},
{id:'my_manner_3',title:'Put it together',step:'build',meta:'Set the pace',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['ဖြည်းဖြည်း','slowly'],['မြန်မြန်','quickly'],['မြန်တယ်','is fast'],['နှေးတယ်','is slow']]},
{t:'wb',q:'Build: Please speak slowly',a:['ဖြည်းဖြည်း','ပြောပါ'],pool:['ဖြည်းဖြည်း','ပြောပါ','မြန်မြန်']},
{t:'mc',q:'"Come quickly!" =',o:['မြန်မြန်လာပါ','ဖြည်းဖြည်းလာပါ','မြန်တယ်','အခုလာပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'နှေးတယ်',o:['နှေးတယ်','မြန်တယ်','နှေးနှေး','နေတယ်'],a:0},
{t:'wb',q:'Build: Please eat slowly',a:['ဖြည်းဖြည်း','စားပါ'],pool:['ဖြည်းဖြည်း','စားပါ','မြန်မြန်']},
{t:'match',q:'Match line and meaning',pairs:[['ဖြည်းဖြည်းပြောပါ','please speak slowly'],['မြန်မြန်လာပါ','come quickly'],['မြန်တယ်','is fast'],['ဖြည်းဖြည်း','slowly']]}]},
{id:'my_manner_4',title:'Mix it',step:'mix',meta:'Pace yourself',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မြန်မြန်',o:['quickly','slowly','right now','faster than'],a:0},
{t:'li',q:'Listen — which one?',say:'ဖြည်းဖြည်း',o:['ဖြည်းဖြည်း','နှေးတယ်','မြန်မြန်','ဖြည်း'],a:0},
{t:'mc',q:'The auntie machine-guns a price at you. Your move:',o:['ဖြည်းဖြည်းပြောပါ','မြန်မြန်ပြောပါ','ဒါပဲ','မလိုဘူး'],a:0},
{t:'wb',q:'Build: The train is slow, but the motorbike is fast',a:['ရထား','နှေးတယ်','ဒါပေမဲ့','ဆိုင်ကယ်','မြန်တယ်'],pool:['ရထား','နှေးတယ်','ဒါပေမဲ့','ဆိုင်ကယ်','မြန်တယ်','လို့']},
{t:'li',q:'Listen — which one?',say:'မြန်မြန်',o:['မြန်မြန်','မြန်တယ်','မြန်မာ','ဖြည်းဖြည်း'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['မြန်မြန်','quickly'],['ဖြည်းဖြည်း','slowly'],['နှေးတယ်','is slow'],['မြန်တယ်','is fast']]}]},
{id:'my_manner_5',title:'Checkpoint',step:'checkpoint',meta:'Pace mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "please speak slowly"?',o:['ဖြည်းဖြည်းပြောပါ','ပြန်ပြောပါ','မြန်မြန်ပြောပါ','ဖြည်းဖြည်းသွားပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'မြန်တယ်',o:['မြန်တယ်','မြန်မြန်','နှေးတယ်','မှားတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဖြည်းဖြည်း',o:['slowly','quietly','a little','carefully'],a:0},
{t:'wb',q:'Build: Please go slowly (to a driver)',a:['ဖြည်းဖြည်း','သွားပါ'],pool:['ဖြည်းဖြည်း','သွားပါ','မြန်မြန်']},
{t:'mc',q:'slowly · quickly =',o:['ဖြည်းဖြည်း · မြန်မြန်','မြန်မြန် · ဖြည်းဖြည်း','နှေးနှေး · ဖြည်းဖြည်း','မြန်မြန် · နည်းနည်း'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဖြည်းဖြည်း','slowly'],['မြန်မြန်','quickly'],['မြန်တယ်','is fast'],['ဖြည်းဖြည်းပြောပါ','please speak slowly']]}]},

/* --- Topic 3: clothes & the longyi --- */
{id:'my_wear',title:'Clothing & the longyi',step:'learn',meta:'အင်္ကျီ လုံချည် ဖိနပ် + ဝတ်',vocab:[['အင်္ကျီ','in ji','shirt / top'],['လုံချည်','loun ji','longyi (sarong)'],['ဖိနပ်','hpanaq','shoes / sandals'],['ဝတ်တယ်','wuq de','wear'],['ဖိနပ်ချွတ်ပါ','hpanaq chuq ba','please take off (your) shoes']],ex:[
{t:'note',tag:'Dress like a local',q:'အင်္ကျီ · လုံချည်',body:'<p><span class="deva">အင်္ကျီ</span> <b>in ji</b> = shirt/top. <span class="deva">လုံချည်</span> <b>loun ji</b> = the longyi — the wrap-around sarong worn by men and women all over Myanmar. Wear one and watch faces light up.</p><p><span class="deva">ဝတ်တယ်</span> <b>wuq de</b> = wear: <span class="deva">လုံချည်ဝတ်တယ်</span>.</p>',eg:[['အင်္ကျီ','in ji','shirt'],['လုံချည်','loun ji','longyi'],['ဝတ်တယ်','wuq de','wear']]},
{t:'mc',q:'Which is the famous Myanmar sarong?',o:['လုံချည်','အင်္ကျီ','ဖိနပ်','ခွက်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဝတ်တယ်',o:['wear','wash','buy clothes','take off'],a:0},
{t:'note',tag:'Shoes off!',q:'ဖိနပ် · ချွတ်',body:'<p><span class="deva">ဖိနပ်</span> <b>hpanaq</b> = shoes/sandals. In homes (and many shops) they come OFF — <span class="deva">ချွတ်</span> <b>chuq</b> = take off.</p><p>The sign you will see everywhere: <span class="deva">ဖိနပ်ချွတ်ပါ</span> — please remove your shoes.</p>',eg:[['ဖိနပ်','hpanaq','shoes'],['ဖိနပ်ချွတ်ပါ','hpanaq chuq ba','shoes off, please']]},
{t:'mc',q:'What does this mean?',d:'ဖိနပ်ချွတ်ပါ',o:['please take off (your) shoes','please put on shoes','shoes for sale','no shoes available'],a:0},
{t:'mc',q:'Which means "shoes"?',o:['ဖိနပ်','အင်္ကျီ','လုံချည်','ဖုန်း'],a:0},
{t:'li',q:'Listen — which one?',say:'လုံချည်',o:['လုံချည်','အင်္ကျီ','ဖိနပ်','လမ်း'],a:0}]},
{id:'my_wear_2',title:'Hear the wardrobe',step:'recognize',meta:'Spot each garment',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'အင်္ကျီ',o:['အင်္ကျီ','အင်္ဂါ','လုံချည်','အင်္ဂလိပ်'],a:0},
{t:'mc',q:'Which means "wear"?',o:['ဝတ်တယ်','ချွတ်','ဝယ်တယ်','ယူတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဖိနပ်',o:['ဖိနပ်','ဖုန်း','နံပါတ်','မိနစ်'],a:0},
{t:'mc',q:'What does this mean?',d:'လုံချည်',o:['longyi (sarong)','shirt','trousers','scarf'],a:0},
{t:'mc',q:'Entering a Burmese home, you first…',o:['ဖိနပ်ချွတ်တယ်','ဖိနပ်ဝတ်တယ်','ရေချိုးတယ်','ထိုင်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဖိနပ်ချွတ်ပါ',o:['ဖိနပ်ချွတ်ပါ','ဖိနပ်','ဖိနပ်ဝတ်ပါ','ချွတ်ပါ'],a:0},
{t:'mc',q:'ဝတ် vs ချွတ် —',o:['wear vs take off','take off vs wear','both wear','both take off'],a:0}]},
{id:'my_wear_3',title:'Put it together',step:'build',meta:'Get dressed',vocab:[],ex:[
{t:'match',q:'Match word and meaning',pairs:[['အင်္ကျီ','shirt'],['လုံချည်','longyi'],['ဖိနပ်','shoes'],['ဝတ်တယ်','wear']]},
{t:'wb',q:'Build: (I) wear a longyi',a:['လုံချည်','ဝတ်တယ်'],pool:['လုံချည်','ဝတ်တယ်','ချွတ်ပါ']},
{t:'mc',q:'"(I) want to buy a shirt" =',o:['အင်္ကျီဝယ်ချင်တယ်','အင်္ကျီဝတ်ချင်တယ်','အင်္ကျီရှိတယ်','အင်္ကျီပေးပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဝတ်တယ်',o:['ဝတ်တယ်','ဝယ်တယ်','ဝေးတယ်','ယူတယ်'],a:0},
{t:'wb',q:'Build: How much is the longyi?',a:['လုံချည်','ဘယ်လောက်','လဲ'],pool:['လုံချည်','ဘယ်လောက်','လဲ','ဝတ်တယ်']},
{t:'match',q:'Match line and meaning',pairs:[['ဖိနပ်ချွတ်ပါ','shoes off, please'],['လုံချည်ဝတ်တယ်','wear a longyi'],['အင်္ကျီ','shirt'],['ဖိနပ်','shoes']]}]},
{id:'my_wear_4',title:'Mix it',step:'mix',meta:'Dressed for Myanmar',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဖိနပ်',o:['shoes / sandals','socks','feet','floor'],a:0},
{t:'li',q:'Listen — which one?',say:'လုံချည်',o:['လုံချည်','အင်္ကျီ','လိုချင်','လမ်း'],a:0},
{t:'mc',q:'At the market you admire a green longyi:',o:['လုံချည်အစိမ်းလေးကြိုက်တယ်','ဖိနပ်ကြီးတယ်','အင်္ကျီချွတ်ပါ','လုံချည်စားချင်တယ်'],a:0},
{t:'wb',q:'Build: (I) will buy shoes at the market',a:['ဈေးမှာ','ဖိနပ်','ဝယ်မယ်'],pool:['ဈေးမှာ','ဖိနပ်','ဝယ်မယ်','ဝတ်မယ်']},
{t:'li',q:'Listen — which one?',say:'အင်္ကျီ',o:['အင်္ကျီ','လုံချည်','အကျိုး','ဖိနပ်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['ဝတ်တယ်','wear'],['ဖိနပ်ချွတ်ပါ','shoes off, please'],['လုံချည်','longyi'],['အင်္ကျီ','shirt']]}]},
{id:'my_wear_5',title:'Checkpoint',step:'checkpoint',meta:'Wardrobe mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "shirt / top"?',o:['အင်္ကျီ','လုံချည်','ဖိနပ်','အိတ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ဖိနပ်ချွတ်ပါ',o:['ဖိနပ်ချွတ်ပါ','ဖိနပ်ဝတ်ပါ','ဖိနပ်','ချွတ်ပါ'],a:0},
{t:'mc',q:'What does this mean?',d:'လုံချည်',o:['longyi','shirt','shoes','blanket'],a:0},
{t:'wb',q:'Build: (I) really like this longyi — this longyi really like',a:['ဒီ','လုံချည်','အရမ်း','ကြိုက်တယ်'],pool:['ဒီ','လုံချည်','အရမ်း','ကြိုက်တယ်','ဝတ်တယ်']},
{t:'mc',q:'shirt · longyi · shoes =',o:['အင်္ကျီ · လုံချည် · ဖိနပ်','လုံချည် · အင်္ကျီ · ဖိနပ်','ဖိနပ် · လုံချည် · အင်္ကျီ','အင်္ကျီ · ဖိနပ် · လုံချည်'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['အင်္ကျီ','shirt'],['လုံချည်','longyi'],['ဖိနပ်','shoes'],['ဝတ်တယ်','wear']]}]},

/* --- Topic 4: animals --- */
{id:'my_animal',title:'Animals',step:'learn',meta:'ခွေး ကြောင် နွား ဆင် ငှက်',vocab:[['ခွေး','hkwei','dog'],['ကြောင်','kyaung','cat'],['နွား','nwa','cow'],['ဆင်','hsin','elephant'],['ငှက်','hngeq','bird']],ex:[
{t:'note',tag:'Around the yard',q:'ခွေး · ကြောင် · နွား',body:'<p><span class="deva">ခွေး</span> <b>hkwei</b> = dog · <span class="deva">ကြောင်</span> <b>kyaung</b> = cat · <span class="deva">နွား</span> <b>nwa</b> = cow.</p><p>Wait — cat sounds like school?! <span class="deva">ကြောင်</span> (cat) vs <span class="deva">ကျောင်း</span> (school): different letters, different tones. The teashop cats do not attend class.</p>',eg:[['ခွေး','hkwei','dog'],['ကြောင်','kyaung','cat'],['နွား','nwa','cow']]},
{t:'mc',q:'Which means "dog"?',o:['ခွေး','ကြောင်','နွား','ဆင်'],a:0},
{t:'mc',q:'What does this mean?',d:'ကြောင်',o:['cat','school','dog','cow'],a:0},
{t:'note',tag:'The big & the small',q:'ဆင် · ငှက်',body:'<p><span class="deva">ဆင်</span> <b>hsin</b> = elephant — Myanmar teak country still knows them well. <span class="deva">ငှက်</span> <b>hngeq</b> = bird.</p><p>Count them all with <span class="deva">ကောင်</span>: <span class="deva">ခွေးနှစ်ကောင်</span> two dogs.</p>',eg:[['ဆင်','hsin','elephant'],['ငှက်','hngeq','bird']]},
{t:'mc',q:'Which means "elephant"?',o:['ဆင်','နွား','ခွေး','ငှက်'],a:0},
{t:'mc',q:'What does this mean?',d:'ငှက်',o:['bird','fish','cat','chicken'],a:0},
{t:'li',q:'Listen — which one?',say:'ခွေး',o:['ခွေး','ကြောင်','ခွက်','ကွေ့'],a:0}]},
{id:'my_animal_2',title:'Hear the animals',step:'recognize',meta:'Spot each animal',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ကြောင်',o:['ကြောင်','ကျောင်း','ခွေး','ကောင်'],a:0},
{t:'mc',q:'Which means "cow"?',o:['နွား','ခွေး','ဆင်','ငါး'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆင်',o:['ဆင်','စင်','ဆိုင်','သင်'],a:0},
{t:'mc',q:'What does this mean?',d:'ခွေး',o:['dog','cat','pig','goat'],a:0},
{t:'mc',q:'ကြောင် (cat) vs ကျောင်း (school) — the cat…',o:['sounds close but is a different word','is the same word','lives at school','is spelled the same'],a:0},
{t:'li',q:'Listen — which one?',say:'ငှက်',o:['ငှက်','ငါး','နွား','မြစ်'],a:0},
{t:'mc',q:'Animals are counted with…',o:['ကောင်','ယောက်','ခု','ခွက်'],a:0}]},
{id:'my_animal_3',title:'Put it together',step:'build',meta:'Count the creatures',vocab:[],ex:[
{t:'match',q:'Match animal and meaning',pairs:[['ခွေး','dog'],['ကြောင်','cat'],['နွား','cow'],['ဆင်','elephant']]},
{t:'wb',q:'Build: two dogs — dog two counter',a:['ခွေး','နှစ်','ကောင်'],pool:['ခွေး','နှစ်','ကောင်','ယောက်']},
{t:'mc',q:'"(I) have a cat" =',o:['ကြောင်ရှိတယ်','ကြောင်လိုတယ်','ကျောင်းရှိတယ်','ကြောင်စီးတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'နွား',o:['နွား','ငါး','ခွေး','နာ'],a:0},
{t:'wb',q:'Build: Have you ever ridden an elephant?',a:['ဆင်','စီးဖူးလား'],pool:['ဆင်','စီးဖူးလား','စီးတယ်']},
{t:'match',q:'Match animal and meaning',pairs:[['ငှက်','bird'],['ဆင်','elephant'],['ခွေး','dog'],['နွား','cow']]}]},
{id:'my_animal_4',title:'Mix it',step:'mix',meta:'A walk in the country',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'နွား',o:['cow','buffalo','horse','goat'],a:0},
{t:'li',q:'Listen — which one?',say:'ခွေး',o:['ခွေး','ခွက်','ကြောင်','ကွေ့'],a:0},
{t:'mc',q:'Which animal sings in the trees?',o:['ငှက်','နွား','ခွေး','ဆင်'],a:0},
{t:'wb',q:'Build: The dog is big, but the cat is small',a:['ခွေး','ကြီးတယ်','ဒါပေမဲ့','ကြောင်','သေးတယ်'],pool:['ခွေး','ကြီးတယ်','ဒါပေမဲ့','ကြောင်','သေးတယ်','နွား']},
{t:'li',q:'Listen — which one?',say:'ဆင်',o:['ဆင်','ဆိုင်','ငှက်','စာ'],a:0},
{t:'match',q:'Match animal and meaning',pairs:[['ခွေး','dog'],['ကြောင်','cat'],['ငှက်','bird'],['ဆင်','elephant']]}]},
{id:'my_animal_5',title:'Checkpoint',step:'checkpoint',meta:'Animals mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "bird"?',o:['ငှက်','ငါး','နွား','ကြောင်'],a:0},
{t:'li',q:'Listen — which one?',say:'ကြောင်',o:['ကြောင်','ကျောင်း','ခွေး','ကောင်း'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆင်',o:['elephant','horse','cow','lion'],a:0},
{t:'wb',q:'Build: (I) like dogs a lot — dog really like',a:['ခွေး','အရမ်း','ကြိုက်တယ်'],pool:['ခွေး','အရမ်း','ကြိုက်တယ်','ကြောက်တယ်']},
{t:'mc',q:'dog · cat · cow · elephant · bird =',o:['ခွေး · ကြောင် · နွား · ဆင် · ငှက်','ကြောင် · ခွေး · ဆင် · နွား · ငှက်','ခွေး · နွား · ကြောင် · ငှက် · ဆင်','ငှက် · ခွေး · ကြောင် · နွား · ဆင်'],a:0},
{t:'match',q:'Match animal and meaning',pairs:[['ခွေး','dog'],['နွား','cow'],['ဆင်','elephant'],['ငှက်','bird']]}]},

/* --- Topic 5: nature & trips --- */
{id:'my_nature',title:'Out in nature',step:'learn',meta:'တောင် မြစ် ပင်လယ် ရွာ',vocab:[['တောင်','taung','mountain'],['မြစ်','myiq','river'],['ပင်လယ်','pin leh','sea'],['သစ်ပင်','thiq pin','tree'],['ရွာ','ywa','village'],['လမ်း','lan','road / street']],ex:[
{t:'note',tag:'The landscape',q:'တောင် · မြစ် · ပင်လယ်',body:'<p><span class="deva">တောင်</span> <b>taung</b> = mountain · <span class="deva">မြစ်</span> <b>myiq</b> = river (the Ayeyarwady is THE မြစ်) · <span class="deva">ပင်လယ်</span> <b>pin leh</b> = sea.</p>',eg:[['တောင်','taung','mountain'],['မြစ်','myiq','river'],['ပင်လယ်','pin leh','sea']]},
{t:'mc',q:'Which means "river"?',o:['မြစ်','တောင်','ပင်လယ်','လမ်း'],a:0},
{t:'mc',q:'What does this mean?',d:'ပင်လယ်',o:['sea','lake','river','beach'],a:0},
{t:'note',tag:'Village & road',q:'သစ်ပင် · ရွာ · လမ်း',body:'<p><span class="deva">သစ်ပင်</span> <b>thiq pin</b> = tree · <span class="deva">ရွာ</span> <b>ywa</b> = village · <span class="deva">လမ်း</span> <b>lan</b> = road/street.</p><p>Yes — <span class="deva">ရွာ</span> is also the rain verb (<span class="deva">မိုးရွာတယ်</span>)! Same writing, context decides: villages do not fall from the sky.</p>',eg:[['သစ်ပင်','thiq pin','tree'],['ရွာ','ywa','village'],['လမ်း','lan','road']]},
{t:'mc',q:'Which means "village"?',o:['ရွာ','လမ်း','တောင်','ဆိုင်'],a:0},
{t:'mc',q:'What does this mean?',d:'သစ်ပင်',o:['tree','fruit','forest','wood'],a:0},
{t:'li',q:'Listen — which one?',say:'တောင်',o:['တောင်','ထောင်','သောင်း','ကောင်'],a:0}]},
{id:'my_nature_2',title:'Hear the land',step:'recognize',meta:'Spot the scenery',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'မြစ်',o:['မြစ်','မြန်','နှစ်','ပင်လယ်'],a:0},
{t:'mc',q:'Which means "road / street"?',o:['လမ်း','ရွာ','လယ်','လ'],a:0},
{t:'li',q:'Listen — which one?',say:'ပင်လယ်',o:['ပင်လယ်','ပင်ပန်း','သစ်ပင်','ပန်း'],a:0},
{t:'mc',q:'What does this mean?',d:'တောင်',o:['mountain','thousand','south','hill town'],a:0},
{t:'mc',q:'ရွာ means village AND appears in…',o:['မိုးရွာတယ် (it rains)','ရေကူးတယ် (swim)','ရွှေ (gold)','မြစ် (river)'],a:0},
{t:'li',q:'Listen — which one?',say:'ရွာ',o:['ရွာ','ရာ','ယွာ','လမ်း'],a:0},
{t:'mc',q:'တောင် (mountain) vs ထောင် (thousand) differ by…',o:['plain t vs puffed ht','nothing','the vowel','the ending'],a:0}]},
{id:'my_nature_3',title:'Put it together',step:'build',meta:'Plan a trip',vocab:[],ex:[
{t:'match',q:'Match place and meaning',pairs:[['တောင်','mountain'],['မြစ်','river'],['ပင်လယ်','sea'],['ရွာ','village']]},
{t:'wb',q:'Build: (I) will go to the sea next month',a:['နောက်လ','ပင်လယ်','ကို','သွားမယ်'],pool:['နောက်လ','ပင်လယ်','ကို','သွားမယ်','တောင်']},
{t:'mc',q:'"(I) swim in the river" =',o:['မြစ်မှာရေကူးတယ်','မြစ်ကိုသွားတယ်','မြစ်ကလာတယ်','မြစ်ကြီးတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'သစ်ပင်',o:['သစ်ပင်','သစ်သီး','ပင်လယ်','အသစ်'],a:0},
{t:'wb',q:'Build: The village is far — village fars',a:['ရွာ','ဝေးတယ်'],pool:['ရွာ','ဝေးတယ်','နီးတယ်']},
{t:'match',q:'Match place and meaning',pairs:[['သစ်ပင်','tree'],['လမ်း','road'],['ပင်လယ်','sea'],['တောင်','mountain']]}]},
{id:'my_nature_4',title:'Mix it',step:'mix',meta:'Across the country',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'လမ်း',o:['road / street','path only','bridge','corner'],a:0},
{t:'li',q:'Listen — which one?',say:'တောင်',o:['တောင်','ထောင်','တံခါး','ကောင်'],a:0},
{t:'mc',q:'The fisherman works on the…',o:['မြစ်','တောင်','လမ်း','စားပွဲ'],a:0},
{t:'wb',q:'Build: There are big trees in the village',a:['ရွာမှာ','သစ်ပင်','ကြီးကြီး','ရှိတယ်'],pool:['ရွာမှာ','သစ်ပင်','ကြီးကြီး','ရှိတယ်','သေးသေး']},
{t:'li',q:'Listen — which one?',say:'ပင်လယ်',o:['ပင်လယ်','ပင်ပန်းတယ်','မြစ်','လယ်'],a:0},
{t:'match',q:'Match place and meaning',pairs:[['မြစ်','river'],['ရွာ','village'],['လမ်း','road'],['သစ်ပင်','tree']]}]},
{id:'my_nature_5',title:'Checkpoint',step:'checkpoint',meta:'Nature mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "sea"?',o:['ပင်လယ်','မြစ်','တောင်','ရေ'],a:0},
{t:'li',q:'Listen — which one?',say:'မြစ်',o:['မြစ်','မြန်မာ','ပင်လယ်','နှစ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ရွာ',o:['village','rain','farm','field'],a:0},
{t:'wb',q:'Build: (I) live in a small village',a:['ရွာ','သေးသေးလေး','မှာ','နေတယ်'],pool:['ရွာ','သေးသေးလေး','မှာ','နေတယ်','ကြီးကြီး']},
{t:'mc',q:'mountain · river · sea =',o:['တောင် · မြစ် · ပင်လယ်','မြစ် · တောင် · ပင်လယ်','ပင်လယ် · မြစ် · တောင်','တောင် · ပင်လယ် · မြစ်'],a:0},
{t:'match',q:'Match place and meaning',pairs:[['တောင်','mountain'],['ပင်လယ်','sea'],['ရွာ','village'],['လမ်း','road']]}]},

/* --- Topic 6: remember & forget --- */
{id:'my_mem',title:'Remember & forget',step:'learn',meta:'မေ့ မှတ်မိ သတိရ',vocab:[['မေ့သွားပြီ','meh thwa bi','(I) forgot'],['မှတ်မိတယ်','hmaq mi de','remember'],['မမှတ်မိဘူး','ma hmaq mi bu','do not remember'],['သတိရတယ်','thadi ya de','miss (someone) / think of'],['နာမည်မေ့သွားပြီ','nameh meh thwa bi','(I) forgot the name']],ex:[
{t:'note',tag:'Oops',q:'မေ့သွားပြီ',body:'<p><span class="deva">မေ့သွားပြီ</span> <b>meh thwa bi</b> — "I forgot!" (forget + gone + the news-ပြီ: the memory has LEFT).</p><p>Most useful version: <span class="deva">နာမည်မေ့သွားပြီ</span> — I forgot the name. Say it smiling; everyone does.</p>',eg:[['မေ့သွားပြီ','meh thwa bi','(I) forgot'],['နာမည်မေ့သွားပြီ','nameh meh thwa bi','forgot the name']]},
{t:'mc',q:'Which means "(I) forgot"?',o:['မေ့သွားပြီ','မှတ်မိတယ်','သတိရတယ်','မသိဘူး'],a:0},
{t:'mc',q:'What does this mean?',d:'နာမည်မေ့သွားပြီ',o:['(I) forgot the name','(I) remember the name','what is the name?','the name is new'],a:0},
{t:'note',tag:'Still in there',q:'မှတ်မိ · သတိရ',body:'<p><span class="deva">မှတ်မိတယ်</span> <b>hmaq mi de</b> = remember · <span class="deva">မမှတ်မိဘူး</span> — I do not remember.</p><p>And the warm one: <span class="deva">သတိရတယ်</span> <b>thadi ya de</b> — to think of / <b>miss</b> someone (the သတိ of သတိထားပါ — attention turned toward a person).</p>',eg:[['မှတ်မိတယ်','hmaq mi de','remember'],['သတိရတယ်','thadi ya de','miss / think of']]},
{t:'mc',q:'Which means "remember"?',o:['မှတ်မိတယ်','မေ့သွားပြီ','သိတယ်','ထင်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'သတိရတယ်',o:['miss (someone) / think of','be careful','remember a fact','pay attention'],a:0},
{t:'li',q:'Listen — which one?',say:'မေ့သွားပြီ',o:['မေ့သွားပြီ','မှတ်မိတယ်','ပျောက်သွားပြီ','သတိရတယ်'],a:0}]},
{id:'my_mem_2',title:'Hear the memory',step:'recognize',meta:'forgot or remembered?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'မှတ်မိတယ်',o:['မှတ်မိတယ်','မမှတ်မိဘူး','မေ့သွားပြီ','မှတ်တယ်'],a:0},
{t:'mc',q:'Which means "do not remember"?',o:['မမှတ်မိဘူး','မှတ်မိတယ်','မေ့သွားပြီ','မသိသေးဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'သတိရတယ်',o:['သတိရတယ်','သတိထားပါ','မှတ်မိတယ်','သိတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မေ့သွားပြီ',o:['(I) forgot','(it) is lost','(I) am late','(it) is finished'],a:0},
{t:'mc',q:'မေ့သွားပြီ literally says the memory has…',o:['gone away (+ news ပြီ)','been written down','never existed','come back'],a:0},
{t:'li',q:'Listen — which one?',say:'နာမည်မေ့သွားပြီ',o:['နာမည်မေ့သွားပြီ','မေ့သွားပြီ','နာမည်','နာမည်မမှတ်မိဘူး'],a:0},
{t:'mc',q:'Texting a far-away friend, you might say…',o:['သတိရတယ်','သတိထားပါ','မှတ်မိတယ်','မေ့သွားပြီ'],a:0}]},
{id:'my_mem_3',title:'Put it together',step:'build',meta:'Jog your memory',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['မေ့သွားပြီ','(I) forgot'],['မှတ်မိတယ်','remember'],['မမှတ်မိဘူး','do not remember'],['သတိရတယ်','miss / think of']]},
{t:'wb',q:'Build: (I) forgot the name',a:['နာမည်','မေ့သွားပြီ'],pool:['နာမည်','မေ့သွားပြီ','မှတ်မိတယ်']},
{t:'mc',q:'You DO recall their face:',o:['မှတ်မိတယ်','မမှတ်မိဘူး','မေ့သွားပြီ','မသိဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'မမှတ်မိဘူး',o:['မမှတ်မိဘူး','မှတ်မိတယ်','မေ့သွားပြီ','မသိဘူး'],a:0},
{t:'wb',q:'Build: (I) miss my mother — mother miss',a:['အမေ့ကို','သတိရတယ်'],pool:['အမေ့ကို','သတိရတယ်','မေ့သွားပြီ']},
{t:'match',q:'Match situation and line',pairs:[['name gone!','နာမည်မေ့သွားပြီ'],['face familiar','မှတ်မိတယ်'],['friend far away','သတိရတယ်'],['blank totally','မမှတ်မိဘူး']]}]},
{id:'my_mem_4',title:'Mix it',step:'mix',meta:'Lost & found memories',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'မှတ်မိတယ်',o:['remember','forget','write down','recognize a place'],a:0},
{t:'li',q:'Listen — which one?',say:'သတိရတယ်',o:['သတိရတယ်','သတိထားပါ','ရတယ်','သိတယ်'],a:0},
{t:'mc',q:'An old friend appears. Their name escapes you:',o:['နာမည်မေ့သွားပြီ','နာမည်မှတ်မိတယ်','နာမည်ကြီးတယ်','နာမည်ဘယ်လိုခေါ်လဲ'],a:0},
{t:'wb',q:'Build: Do you remember me? — me remember-question (ကျွန်တော့်ကို kyanaw go me-object)',a:['ကျွန်တော့်ကို','မှတ်မိလား'],pool:['ကျွန်တော့်ကို','မှတ်မိလား','မှတ်မိတယ်']},
{t:'li',q:'Listen — which one?',say:'မေ့သွားပြီ',o:['မေ့သွားပြီ','ပျောက်သွားပြီ','ရောက်ပြီ','မှတ်မိတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['မေ့သွားပြီ','forgot'],['မှတ်မိတယ်','remember'],['သတိရတယ်','miss someone'],['သတိထားပါ','be careful']]}]},
{id:'my_mem_5',title:'Checkpoint',step:'checkpoint',meta:'Memory mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "(I) miss you / think of you"?',o:['သတိရတယ်','မှတ်မိတယ်','သတိထားပါ','မေ့သွားပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'မှတ်မိတယ်',o:['မှတ်မိတယ်','မမှတ်မိဘူး','မေ့သွားပြီ','မှတ်မိလား'],a:0},
{t:'mc',q:'What does this mean?',d:'မမှတ်မိဘူး',o:['do not remember','do not forget','never met','do not know yet'],a:0},
{t:'wb',q:'Build: Sorry — (I) forgot',a:['တောင်းပန်ပါတယ်','မေ့သွားပြီ'],pool:['တောင်းပန်ပါတယ်','မေ့သွားပြီ','မှတ်မိတယ်']},
{t:'mc',q:'forgot · remember · miss =',o:['မေ့သွားပြီ · မှတ်မိတယ် · သတိရတယ်','မှတ်မိတယ် · မေ့သွားပြီ · သတိရတယ်','သတိရတယ် · မှတ်မိတယ် · မေ့သွားပြီ','မေ့သွားပြီ · သတိရတယ် · မှတ်မိတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['မေ့သွားပြီ','forgot'],['မမှတ်မိဘူး','do not remember'],['သတိရတယ်','miss / think of'],['နာမည်မေ့သွားပြီ','forgot the name']]}]},

/* --- Topic 7: together, alone & the years --- */
{id:'my_together',title:'Together',step:'learn',meta:'အတူတူ လိုက်မယ် တစ်ယောက်တည်း',vocab:[['အတူတူ','atu tu','together'],['အတူတူသွားမယ်','atu tu thwa meh','(let us) go together'],['လိုက်မယ်','laiq meh','(I) will come along'],['တစ်ယောက်တည်း','ta yauq hteh','alone'],['နောက်နှစ်','nauq hniq','next year'],['မနှစ်က','ma hniq ga','last year']],ex:[
{t:'note',tag:'Come along!',q:'အတူတူ · လိုက်',body:'<p><span class="deva">အတူတူ</span> <b>atu tu</b> = together: <span class="deva">အတူတူသွားမယ်</span> — let us go together!</p><p><span class="deva">လိုက်မယ်</span> <b>laiq meh</b> — "I will come along / count me in" (လိုက် = follow).</p>',eg:[['အတူတူ','atu tu','together'],['လိုက်မယ်','laiq meh','count me in']]},
{t:'mc',q:'Which means "together"?',o:['အတူတူ','တစ်ယောက်တည်း','အမြဲ','နဲ့'],a:0},
{t:'mc',q:'What does this mean?',d:'လိုက်မယ်',o:['(I) will come along','(I) will lead','(I) will stay','(I) will wait'],a:0},
{t:'note',tag:'On your own & the years',q:'တစ်ယောက်တည်း · နှစ်',body:'<p><span class="deva">တစ်ယောက်တည်း</span> <b>ta yauq hteh</b> = alone — literally "just one person" (your counter at work!).</p><p>Complete the calendar: <span class="deva">နောက်နှစ်</span> next year · <span class="deva">မနှစ်က</span> last year (spot the "from" က!).</p>',eg:[['တစ်ယောက်တည်း','ta yauq hteh','alone'],['နောက်နှစ်','nauq hniq','next year'],['မနှစ်က','ma hniq ga','last year']]},
{t:'mc',q:'Which means "alone"?',o:['တစ်ယောက်တည်း','အတူတူ','တစ်ယောက်','တစ်ခါ'],a:0},
{t:'mc',q:'What does this mean?',d:'နောက်နှစ်',o:['next year','last year','next month','two more'],a:0},
{t:'li',q:'Listen — which one?',say:'အတူတူ',o:['အတူတူ','တစ်ယောက်တည်း','အတိအကျ','တူတူ'],a:0}]},
{id:'my_together_2',title:'Hear the company',step:'recognize',meta:'together or alone?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'လိုက်မယ်',o:['လိုက်မယ်','လာမယ်','လိုတယ်','ယူမယ်'],a:0},
{t:'mc',q:'Which means "last year"?',o:['မနှစ်က','နောက်နှစ်','ဒီနှစ်','မနေ့က'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်ယောက်တည်း',o:['တစ်ယောက်တည်း','တစ်ယောက်','အတူတူ','နှစ်ယောက်'],a:0},
{t:'mc',q:'What does this mean?',d:'အတူတူသွားမယ်',o:['(let us) go together','(I) will go alone','(they) went together','shall we go?'],a:0},
{t:'mc',q:'Friends head to the teashop; you jump up:',o:['လိုက်မယ်','မလိုက်ဘူး','တစ်ယောက်တည်းသွားမယ်','နောက်မှ'],a:0},
{t:'li',q:'Listen — which one?',say:'နောက်နှစ်',o:['နောက်နှစ်','မနှစ်က','နောက်လ','ဒီနှစ်'],a:0},
{t:'mc',q:'တစ်ယောက်တည်း is literally…',o:['just one person','one and only','first person','by myself-road'],a:0}]},
{id:'my_together_3',title:'Put it together',step:'build',meta:'Make it a plan',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['အတူတူ','together'],['လိုက်မယ်','(I) will come along'],['တစ်ယောက်တည်း','alone'],['နောက်နှစ်','next year']]},
{t:'wb',q:'Build: (Let us) go to the sea together',a:['ပင်လယ်','ကို','အတူတူ','သွားမယ်'],pool:['ပင်လယ်','ကို','အတူတူ','သွားမယ်','တစ်ယောက်တည်း']},
{t:'mc',q:'"(I) came to Myanmar last year" =',o:['မနှစ်က မြန်မာကို လာခဲ့တယ်','နောက်နှစ် မြန်မာကို လာမယ်','ဒီနှစ် မြန်မာမှာ နေတယ်','မနေ့က မြန်မာကို လာခဲ့တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'မနှစ်က',o:['မနှစ်က','နောက်နှစ်','မနေ့က','ဒီနှစ်'],a:0},
{t:'wb',q:'Build: Will you come along? — come-along-question',a:['လိုက်','မလား'],pool:['လိုက်','မလား','မယ်']},
{t:'match',q:'Match time and meaning',pairs:[['မနှစ်က','last year'],['ဒီနှစ်','this year'],['နောက်နှစ်','next year'],['နောက်လ','next month']]}]},
{id:'my_together_4',title:'Mix it',step:'mix',meta:'Company & calendars',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'တစ်ယောက်တည်း',o:['alone','together','one person came','lonely forever'],a:0},
{t:'li',q:'Listen — which one?',say:'အတူတူသွားမယ်',o:['အတူတူသွားမယ်','အတူတူ','သွားမယ်','လိုက်မယ်'],a:0},
{t:'mc',q:'ဘယ်တော့မြန်မာကိုပြန်လာမလဲ — your plan:',o:['နောက်နှစ်လာမယ်','မနှစ်ကလာခဲ့တယ်','တစ်ယောက်တည်း','မလိုက်ဘူး'],a:0},
{t:'wb',q:'Build: (I) traveled alone last year — last-year alone went',a:['မနှစ်က','တစ်ယောက်တည်း','သွားခဲ့တယ်'],pool:['မနှစ်က','တစ်ယောက်တည်း','သွားခဲ့တယ်','အတူတူ']},
{t:'li',q:'Listen — which one?',say:'လိုက်မယ်',o:['လိုက်မယ်','ယူမယ်','လာမယ်','လိုတယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['အတူတူ','together'],['တစ်ယောက်တည်း','alone'],['လိုက်မယ်','count me in'],['မနှစ်က','last year']]}]},
{id:'my_together_5',title:'Checkpoint',step:'checkpoint',meta:'Zone 11 complete!',vocab:[],ex:[
{t:'mc',q:'Which means "(let us) go together"?',o:['အတူတူသွားမယ်','တစ်ယောက်တည်းသွားမယ်','လိုက်မယ်','သွားမယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်ယောက်တည်း',o:['တစ်ယောက်တည်း','အတူတူ','တစ်ယောက်','တစ်ခါတည်း'],a:0},
{t:'mc',q:'What does this mean?',d:'မနှစ်က',o:['last year','next year','this year','last month'],a:0},
{t:'wb',q:'Build: (I) will come along too — along-will',a:['လိုက်မယ်'],pool:['လိုက်မယ်','လိုတယ်']},
{t:'mc',q:'together · alone =',o:['အတူတူ · တစ်ယောက်တည်း','တစ်ယောက်တည်း · အတူတူ','အတူတူ · တစ်ခါတည်း','နဲ့ · အတူတူ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['အတူတူ','together'],['လိုက်မယ်','(I) will come along'],['နောက်နှစ်','next year'],['တစ်ယောက်တည်း','alone']]}]},

/* ===================== ZONE 12 · MAKE MYANMAR HOME =====================
   The settling-in layer: lakh prices သိန်း/သန်း, ordinals (Pali ပထမ…),
   errands (post/bank/pharmacy/haircut), feelings round 2 (စိတ် compounds),
   guests & visiting, market fruits (the -သီး family), and the polite
   polish (ပါ inside statements, the နော် softener). */
/* --- Topic 1: lakhs & millions --- */
{id:'my_lakh',title:'Large numbers',step:'learn',meta:'သိန်း သန်း — real prices',vocab:[['သိန်း','thein','one hundred thousand (a lakh)'],['သန်း','than','one million'],['တစ်သိန်း','ta thein','100,000'],['ငွေ','ngwei','money / silver'],['ပိုက်ဆံလဲတယ်','paiq hsan leh de','exchange money']],ex:[
{t:'note',tag:'Serious kyat',q:'သိန်း · သန်း',body:'<p>Rent, motorbikes, gold — priced in <span class="deva">သိန်း</span> <b>thein</b> = 100,000 (a lakh). <span class="deva">သန်း</span> <b>than</b> = a million. <span class="deva">ဆယ်သိန်း</span> = တစ်သန်း!</p><p>Your number ladder is complete: ဆယ် · ရာ · ထောင် · သောင်း · သိန်း · သန်း.</p>',eg:[['သိန်း','thein','100,000'],['သန်း','than','1,000,000']]},
{t:'mc',q:'Which means "one hundred thousand"?',o:['သိန်း','သန်း','သောင်း','ထောင်'],a:0},
{t:'mc',q:'What does this mean?',d:'တစ်သိန်း',o:['100,000','10,000','1,000,000','1,000'],a:0},
{t:'note',tag:'Silver money',q:'ငွေ · လဲ',body:'<p><span class="deva">ငွေ</span> <b>ngwei</b> = money — literally "silver", the older word beside ပိုက်ဆံ.</p><p><span class="deva">လဲ</span> = exchange/change: <span class="deva">ပိုက်ဆံလဲတယ်</span> — exchange money (what every traveler does on day one).</p>',eg:[['ငွေ','ngwei','money / silver'],['ပိုက်ဆံလဲတယ်','paiq hsan leh de','exchange money']]},
{t:'mc',q:'Which means "exchange money"?',o:['ပိုက်ဆံလဲတယ်','ပိုက်ဆံရှိတယ်','ပိုက်ဆံလိုတယ်','ပိုက်ဆံပေးတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ငွေ',o:['money / silver','gold','bank','price'],a:0},
{t:'li',q:'Listen — which one?',say:'သိန်း',o:['သိန်း','သန်း','သောင်း','ထောင်'],a:0}]},
{id:'my_lakh_2',title:'Hear the fortune',step:'recognize',meta:'thein or than?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'သန်း',o:['သန်း','သိန်း','သောင်း','သုံး'],a:0},
{t:'mc',q:'Which means "one million"?',o:['သန်း','သိန်း','သောင်း','ရာ'],a:0},
{t:'li',q:'Listen — which one?',say:'ငွေ',o:['ငွေ','နွား','ငါး','ရွှေ'],a:0},
{t:'mc',q:'What does this mean?',d:'ပိုက်ဆံလဲတယ်',o:['exchange money','borrow money','count money','lose money'],a:0},
{t:'mc',q:'ဆယ်သိန်း equals…',o:['တစ်သန်း','တစ်သိန်း','တစ်သောင်း','တစ်ထောင်'],a:0},
{t:'li',q:'Listen — which one?',say:'တစ်သိန်း',o:['တစ်သိန်း','တစ်သန်း','တစ်သောင်း','တစ်ထောင်'],a:0},
{t:'mc',q:'The complete ladder, small to large:',o:['ဆယ် ရာ ထောင် သောင်း သိန်း သန်း','ရာ ဆယ် ထောင် သိန်း သောင်း သန်း','ဆယ် ရာ သောင်း ထောင် သိန်း သန်း','သန်း သိန်း သောင်း ထောင် ရာ ဆယ်'],a:0}]},
{id:'my_lakh_3',title:'Put it together',step:'build',meta:'Price the big things',vocab:[],ex:[
{t:'match',q:'Match amount and figure',pairs:[['သိန်း','100,000'],['သန်း','1,000,000'],['သောင်း','10,000'],['ထောင်','1,000']]},
{t:'wb',q:'Build: (I) want to exchange money',a:['ပိုက်ဆံ','လဲချင်တယ်'],pool:['ပိုက်ဆံ','လဲချင်တယ်','လဲတယ်']},
{t:'mc',q:'A motorbike costs ဆယ့်ငါးသိန်း — that is…',o:['1,500,000 kyat','150,000 kyat','15,000 kyat','15,000,000 kyat'],a:0},
{t:'li',q:'Listen — which one?',say:'ပိုက်ဆံလဲတယ်',o:['ပိုက်ဆံလဲတယ်','ပိုက်ဆံပေးတယ်','ပိုက်ဆံ','ငွေ'],a:0},
{t:'wb',q:'Build: five lakh kyat',a:['ငါး','သိန်း','ကျပ်'],pool:['ငါး','သိန်း','ကျပ်','သန်း']},
{t:'match',q:'Match word and meaning',pairs:[['ငွေ','money / silver'],['တစ်သိန်း','100,000'],['သန်း','million'],['ပိုက်ဆံလဲတယ်','exchange money']]}]},
{id:'my_lakh_4',title:'Mix it',step:'mix',meta:'Big-ticket talk',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'သန်း',o:['one million','one lakh','ten thousand','one thousand'],a:0},
{t:'li',q:'Listen — which one?',say:'သိန်း',o:['သိန်း','သန်း','သိတယ်','သောင်း'],a:0},
{t:'mc',q:'Where do you ပိုက်ဆံလဲ on arrival?',o:['ဘဏ်','ဈေးသည်','ဘူတာ','လက်ဖက်ရည်ဆိုင်'],a:0},
{t:'wb',q:'Build: How much is one lakh in dollars? — one-lakh how-much (informally)',a:['တစ်သိန်း','ဘယ်လောက်','လဲ'],pool:['တစ်သိန်း','ဘယ်လောက်','လဲ','ရှိလား']},
{t:'li',q:'Listen — which one?',say:'ငွေ',o:['ငွေ','ရွှေ','ငယ်','ကျပ်'],a:0},
{t:'match',q:'Match amount and figure',pairs:[['ထောင်','1,000'],['သောင်း','10,000'],['သိန်း','100,000'],['သန်း','1,000,000']]}]},
{id:'my_lakh_5',title:'Checkpoint',step:'checkpoint',meta:'Big money mastered?',vocab:[],ex:[
{t:'mc',q:'100,000 kyat is…',o:['တစ်သိန်း','တစ်သန်း','တစ်သောင်း','တစ်ထောင်'],a:0},
{t:'li',q:'Listen — which one?',say:'သန်း',o:['သန်း','သိန်း','ထောင်','သုံး'],a:0},
{t:'mc',q:'What does this mean?',d:'ပိုက်ဆံလဲတယ်',o:['exchange money','spend money','save money','send money'],a:0},
{t:'wb',q:'Build: (I) need to exchange money — money exchange must',a:['ပိုက်ဆံ','လဲရမယ်'],pool:['ပိုက်ဆံ','လဲရမယ်','လဲတယ်']},
{t:'mc',q:'lakh · million =',o:['သိန်း · သန်း','သန်း · သိန်း','သောင်း · သိန်း','သိန်း · သောင်း'],a:0},
{t:'match',q:'Match word and meaning',pairs:[['သိန်း','100,000'],['သန်း','million'],['ငွေ','money / silver'],['ကျပ်','kyat']]}]},

/* --- Topic 2: first, second, third --- */
{id:'my_ord',title:'First & second',step:'learn',meta:'ပထမ ဒုတိယ တတိယ',vocab:[['ပထမ','pahtama','first'],['ဒုတိယ','dutiya','second'],['တတိယ','tatiya','third'],['ပထမဆုံး','pahtama zoun','the very first / first of all'],['အတန်း','atan','class / grade']],ex:[
{t:'note',tag:'Podium words',q:'ပထမ · ဒုတိယ · တတိယ',body:'<p>Rankings borrow from Pali: <span class="deva">ပထမ</span> <b>pahtama</b> first · <span class="deva">ဒုတိယ</span> <b>dutiya</b> second · <span class="deva">တတိယ</span> <b>tatiya</b> third. You will hear them at every school and football match.</p>',eg:[['ပထမ','pahtama','first'],['ဒုတိယ','dutiya','second'],['တတိယ','tatiya','third']]},
{t:'mc',q:'Which means "first"?',o:['ပထမ','ဒုတိယ','တတိယ','အရင်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဒုတိယ',o:['second','first','third','double'],a:0},
{t:'note',tag:'Very first',q:'ပထမဆုံး · အတန်း',body:'<p>Stack ပထမ with your superlative ဆုံး: <span class="deva">ပထမဆုံး</span> — the very first / first of all.</p><p><span class="deva">အတန်း</span> <b>atan</b> = class/grade: <span class="deva">ပထမတန်း</span> — first grade.</p>',eg:[['ပထမဆုံး','pahtama zoun','the very first'],['အတန်း','atan','class / grade']]},
{t:'mc',q:'Which means "the very first"?',o:['ပထမဆုံး','ပထမ','နောက်ဆုံး','အကောင်းဆုံး'],a:0},
{t:'mc',q:'What does this mean?',d:'အတန်း',o:['class / grade','desk','test','teacher'],a:0},
{t:'li',q:'Listen — which one?',say:'ပထမ',o:['ပထမ','ဒုတိယ','တတိယ','ပထမဆုံး'],a:0}]},
{id:'my_ord_2',title:'Hear the ranking',step:'recognize',meta:'1st, 2nd or 3rd?',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဒုတိယ',o:['ဒုတိယ','တတိယ','ပထမ','ဒါပဲ'],a:0},
{t:'mc',q:'Which means "third"?',o:['တတိယ','ဒုတိယ','ပထမ','သုံး'],a:0},
{t:'li',q:'Listen — which one?',say:'တတိယ',o:['တတိယ','ဒုတိယ','ပထမ','တစ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ပထမဆုံး',o:['the very first','the very last','the best','firstly maybe'],a:0},
{t:'mc',q:'ပထမ ဒုတိယ တတိယ come from…',o:['Pali','English','Hindi','Mon'],a:0},
{t:'li',q:'Listen — which one?',say:'အတန်း',o:['အတန်း','အခန်း','အတူ','တန်း'],a:0},
{t:'mc',q:'Your team came second at football:',o:['ဒုတိယရတယ်','ပထမရတယ်','တတိယရတယ်','နောက်ဆုံးရတယ်'],a:0}]},
{id:'my_ord_3',title:'Put it together',step:'build',meta:'Line them up',vocab:[],ex:[
{t:'match',q:'Match rank and meaning',pairs:[['ပထမ','first'],['ဒုတိယ','second'],['တတိယ','third'],['ပထမဆုံး','the very first']]},
{t:'wb',q:'Build: (My) daughter is in first grade — daughter first-grade at is',a:['သမီး','ပထမတန်း','မှာ','ရှိတယ်'],pool:['သမီး','ပထမတန်း','မှာ','ရှိတယ်','ဒုတိယ']},
{t:'mc',q:'"First of all, (I) drink tea":',o:['ပထမဆုံး လက်ဖက်ရည်သောက်တယ်','ဒုတိယ လက်ဖက်ရည်သောက်တယ်','နောက်ဆုံး သောက်တယ်','တတိယ သောက်တယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ပထမဆုံး',o:['ပထမဆုံး','ပထမ','နောက်ဆုံး','အကြီးဆုံး'],a:0},
{t:'wb',q:'Build: This is (my) first time — first time is (အကြိမ် a kyein time)',a:['ပထမ','အကြိမ်','ပါ'],pool:['ပထမ','အကြိမ်','ပါ','ဒုတိယ']},
{t:'match',q:'Match rank and number',pairs:[['ပထမ','1'],['ဒုတိယ','2'],['တတိယ','3'],['အတန်း','class']]}]},
{id:'my_ord_4',title:'Mix it',step:'mix',meta:'Rankings everywhere',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'တတိယ',o:['third','thirty','three times','third place only'],a:0},
{t:'li',q:'Listen — which one?',say:'ပထမ',o:['ပထမ','ပထမဆုံး','ဒုတိယ','ထမင်း'],a:0},
{t:'mc',q:'Your ပထမဆုံး Burmese word was probably…',o:['မင်္ဂလာပါ','ဒုတိယ','ကျေးဇူး','နော်'],a:0},
{t:'wb',q:'Build: The second child is a daughter — second child (topic) daughter is',a:['ဒုတိယ','ကလေးက','သမီး','ပါ'],pool:['ဒုတိယ','ကလေးက','သမီး','ပါ','သား']},
{t:'li',q:'Listen — which one?',say:'အတန်း',o:['အတန်း','အခန်း','တန်း','ပထမ'],a:0},
{t:'match',q:'Match rank and meaning',pairs:[['ပထမဆုံး','the very first'],['ဒုတိယ','second'],['တတိယ','third'],['အတန်း','class / grade']]}]},
{id:'my_ord_5',title:'Checkpoint',step:'checkpoint',meta:'Rankings mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "second"?',o:['ဒုတိယ','ပထမ','တတိယ','နှစ်'],a:0},
{t:'li',q:'Listen — which one?',say:'တတိယ',o:['တတိယ','ဒုတိယ','ပထမ','သုံး'],a:0},
{t:'mc',q:'What does this mean?',d:'ပထမ',o:['first','best','early','before'],a:0},
{t:'wb',q:'Build: First of all, (I) will exchange money',a:['ပထမဆုံး','ပိုက်ဆံ','လဲမယ်'],pool:['ပထမဆုံး','ပိုက်ဆံ','လဲမယ်','နောက်ဆုံး']},
{t:'mc',q:'first · second · third =',o:['ပထမ · ဒုတိယ · တတိယ','ဒုတိယ · ပထမ · တတိယ','တတိယ · ဒုတိယ · ပထမ','ပထမ · တတိယ · ဒုတိယ'],a:0},
{t:'match',q:'Match rank and meaning',pairs:[['ပထမ','first'],['ဒုတိယ','second'],['တတိယ','third'],['ပထမဆုံး','the very first']]}]},

/* --- Topic 3: errands around town --- */
{id:'my_errand',title:'Errands',step:'learn',meta:'စာတိုက် ဘဏ် ဆေးဆိုင် ဆံပင်',vocab:[['စာတိုက်','sa daiq','post office'],['ဘဏ်','ban','bank'],['ဆေးဆိုင်','hsei zaing','pharmacy'],['ဆံပင်','hsabin','hair'],['ဆံပင်ညှပ်တယ်','hsabin hnyaq de','get a haircut']],ex:[
{t:'note',tag:'Around town',q:'စာတိုက် · ဘဏ် · ဆေးဆိုင်',body:'<p>Errand words built from pieces you own: <span class="deva">စာတိုက်</span> <b>sa daiq</b> = post office (letter-building!) · <span class="deva">ဘဏ်</span> <b>ban</b> = bank · <span class="deva">ဆေးဆိုင်</span> <b>hsei zaing</b> = pharmacy (medicine-shop!).</p>',eg:[['စာတိုက်','sa daiq','post office'],['ဘဏ်','ban','bank'],['ဆေးဆိုင်','hsei zaing','pharmacy']]},
{t:'mc',q:'Which means "pharmacy"?',o:['ဆေးဆိုင်','ဆေးရုံ','စာတိုက်','ဘဏ်'],a:0},
{t:'mc',q:'What does this mean?',d:'စာတိုက်',o:['post office','library','bookshop','school office'],a:0},
{t:'note',tag:'Fresh trim',q:'ဆံပင် · ညှပ်',body:'<p><span class="deva">ဆံပင်</span> <b>hsabin</b> = hair. <span class="deva">ညှပ်</span> <b>hnyaq</b> = clip/snip: <span class="deva">ဆံပင်ညှပ်တယ်</span> — get a haircut.</p><p>ဆေးဆိုင် vs ဆေးရုံ: buy medicine at the first, see doctors at the second.</p>',eg:[['ဆံပင်','hsabin','hair'],['ဆံပင်ညှပ်တယ်','hsabin hnyaq de','get a haircut']]},
{t:'mc',q:'Which means "get a haircut"?',o:['ဆံပင်ညှပ်တယ်','ဆံပင်','ရေချိုးတယ်','ဆေးဆိုင်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဘဏ်',o:['bank','shop','office','market'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆေးဆိုင်',o:['ဆေးဆိုင်','ဆေးရုံ','ဈေးဆိုင်','ဆိုင်'],a:0}]},
{id:'my_errand_2',title:'Hear the errands',step:'recognize',meta:'Spot each stop',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဘဏ်',o:['ဘဏ်','ဘူတာ','ပန်း','ဘတ်စ်ကား'],a:0},
{t:'mc',q:'Which means "hair"?',o:['ဆံပင်','သစ်ပင်','ခေါင်း','ဆေး'],a:0},
{t:'li',q:'Listen — which one?',say:'စာတိုက်',o:['စာတိုက်','စာပို့တယ်','ဈေးသည်','စာ'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆံပင်ညှပ်တယ်',o:['get a haircut','wash hair','comb hair','hair is long'],a:0},
{t:'mc',q:'ဆေးဆိုင် vs ဆေးရုံ —',o:['pharmacy vs hospital','hospital vs pharmacy','both hospitals','both shops'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆံပင်',o:['ဆံပင်','သစ်ပင်','ဆံ','ပင်လယ်'],a:0},
{t:'mc',q:'Where do you send a letter?',o:['စာတိုက်','ဘဏ်','ဆေးဆိုင်','ဘူတာ'],a:0}]},
{id:'my_errand_3',title:'Put it together',step:'build',meta:'Run the errands',vocab:[],ex:[
{t:'match',q:'Match place and meaning',pairs:[['စာတိုက်','post office'],['ဘဏ်','bank'],['ဆေးဆိုင်','pharmacy'],['ဆံပင်ညှပ်တယ်','get a haircut']]},
{t:'wb',q:'Build: (I) must go to the bank',a:['ဘဏ်','ကို','သွားရမယ်'],pool:['ဘဏ်','ကို','သွားရမယ်','စာတိုက်']},
{t:'mc',q:'Medicine ran out. Head to the…',o:['ဆေးဆိုင်','ဆေးရုံ','ဘဏ်','ဈေး'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆံပင်ညှပ်တယ်',o:['ဆံပင်ညှပ်တယ်','ဆံပင်','ရေချိုးတယ်','ညှပ်တယ်'],a:0},
{t:'wb',q:'Build: Where is the post office?',a:['စာတိုက်','ဘယ်မှာ','လဲ'],pool:['စာတိုက်','ဘယ်မှာ','လဲ','ရှိတယ်']},
{t:'match',q:'Match errand and place',pairs:[['ပိုက်ဆံလဲတယ်','ဘဏ်'],['စာပို့တယ်','စာတိုက်'],['ဆေးဝယ်တယ်','ဆေးဆိုင်'],['ဆံပင်ညှပ်တယ်','the barber']]}]},
{id:'my_errand_4',title:'Mix it',step:'mix',meta:'A busy morning',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ဆေးဆိုင်',o:['pharmacy','hospital','clinic','doctor'],a:0},
{t:'li',q:'Listen — which one?',say:'စာတိုက်',o:['စာတိုက်','ဘဏ်','စာအိတ်','ဆေးဆိုင်'],a:0},
{t:'mc',q:'ဆံပင်ရှည်လာပြီ (hair got long) — time to…',o:['ဆံပင်ညှပ်မယ်','ရေချိုးမယ်','ဆေးဝယ်မယ်','ဘဏ်သွားမယ်'],a:0},
{t:'wb',q:'Build: First the bank, then the post office',a:['အရင်','ဘဏ်','ပြီးရင်','စာတိုက်'],pool:['အရင်','ဘဏ်','ပြီးရင်','စာတိုက်','နောက်ဆုံး']},
{t:'li',q:'Listen — which one?',say:'ဘဏ်',o:['ဘဏ်','ဘာ','ဘယ်','ပန်း'],a:0},
{t:'match',q:'Match place and meaning',pairs:[['ဘဏ်','bank'],['စာတိုက်','post office'],['ဆေးဆိုင်','pharmacy'],['ဆံပင်','hair']]}]},
{id:'my_errand_5',title:'Checkpoint',step:'checkpoint',meta:'Errands mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "bank"?',o:['ဘဏ်','ဘူတာ','စာတိုက်','ဈေး'],a:0},
{t:'li',q:'Listen — which one?',say:'ဆေးဆိုင်',o:['ဆေးဆိုင်','ဆေးရုံ','ဆိုင်','ဈေး'],a:0},
{t:'mc',q:'What does this mean?',d:'ဆံပင်',o:['hair','head','comb','beard'],a:0},
{t:'wb',q:'Build: (I) will get a haircut tomorrow',a:['မနက်ဖြန်','ဆံပင်','ညှပ်မယ်'],pool:['မနက်ဖြန်','ဆံပင်','ညှပ်မယ်','ညှပ်တယ်']},
{t:'mc',q:'post office · bank · pharmacy =',o:['စာတိုက် · ဘဏ် · ဆေးဆိုင်','ဘဏ် · စာတိုက် · ဆေးရုံ','စာတိုက် · ဆေးဆိုင် · ဘဏ်','ဘဏ် · ဆေးဆိုင် · စာတိုက်'],a:0},
{t:'match',q:'Match place and meaning',pairs:[['စာတိုက်','post office'],['ဘဏ်','bank'],['ဆေးဆိုင်','pharmacy'],['ဆံပင်ညှပ်တယ်','get a haircut']]}]},

/* --- Topic 4: feelings round 2 — the စိတ် compounds --- */
{id:'my_feel2',title:'States of mind',step:'learn',meta:'စိတ်ဝင်စား ပျင်း အံ့ဩ + ဂရုစိုက်',vocab:[['စိတ်','seiq','mind / heart'],['စိတ်ဝင်စားတယ်','seiq win za de','interested'],['ပျင်းတယ်','pyin de','bored / lazy'],['အံ့ဩတယ်','an aw de','surprised / amazed'],['ဂရုစိုက်ပါ','gayu saiq ba','take care!']],ex:[
{t:'note',tag:'The mind word',q:'စိတ်',body:'<p><span class="deva">စိတ်</span> <b>seiq</b> = mind/heart — Burmese builds feelings on it. <span class="deva">စိတ်ဝင်စားတယ်</span> <b>seiq win za de</b> — interested (the mind enters and eats!).</p>',eg:[['စိတ်','seiq','mind / heart'],['စိတ်ဝင်စားတယ်','seiq win za de','interested']]},
{t:'mc',q:'Which means "interested"?',o:['စိတ်ဝင်စားတယ်','ပျင်းတယ်','အံ့ဩတယ်','ပျော်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'စိတ်',o:['mind / heart','head','soul only','idea'],a:0},
{t:'note',tag:'Bored & amazed',q:'ပျင်း · အံ့ဩ · ဂရုစိုက်',body:'<p><span class="deva">ပျင်းတယ်</span> <b>pyin de</b> = bored/lazy (the rainy-season feeling). <span class="deva">အံ့ဩတယ်</span> <b>an aw de</b> = surprised, amazed.</p><p>And the warm goodbye: <span class="deva">ဂရုစိုက်ပါ</span> <b>gayu saiq ba</b> — take care!</p>',eg:[['ပျင်းတယ်','pyin de','bored'],['အံ့ဩတယ်','an aw de','surprised'],['ဂရုစိုက်ပါ','gayu saiq ba','take care!']]},
{t:'mc',q:'Which means "bored"?',o:['ပျင်းတယ်','ပျော်တယ်','ပင်ပန်းတယ်','ပြင်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဂရုစိုက်ပါ',o:['take care!','be quick!','pay me!','watch out behind!'],a:0},
{t:'li',q:'Listen — which one?',say:'အံ့ဩတယ်',o:['အံ့ဩတယ်','ပျင်းတယ်','စိတ်ဝင်စားတယ်','ကြောက်တယ်'],a:0}]},
{id:'my_feel2_2',title:'Hear the moods',step:'recognize',meta:'Spot each state',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'စိတ်ဝင်စားတယ်',o:['စိတ်ဝင်စားတယ်','စိတ်','ပျင်းတယ်','ဝင်စားတယ်'],a:0},
{t:'mc',q:'Which means "surprised"?',o:['အံ့ဩတယ်','ပျင်းတယ်','ကြောက်တယ်','ဝမ်းနည်းတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ပျင်းတယ်',o:['ပျင်းတယ်','ပျော်တယ်','ပင်ပန်းတယ်','ပြင်းတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'စိတ်ဝင်စားတယ်',o:['interested','distracted','hungry-minded','in love'],a:0},
{t:'mc',q:'Friends part ways for a long trip:',o:['ဂရုစိုက်ပါ','ပျင်းတယ်','အံ့ဩတယ်','ထိုင်ပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဂရုစိုက်ပါ',o:['ဂရုစိုက်ပါ','သတိထားပါ','ဂရုစိုက်','ကူညီပါ'],a:0},
{t:'mc',q:'Rainy afternoon, nothing to do:',o:['ပျင်းတယ်','စိတ်ဝင်စားတယ်','အံ့ဩတယ်','မြန်မြန်'],a:0}]},
{id:'my_feel2_3',title:'Put it together',step:'build',meta:'Speak your mind',vocab:[],ex:[
{t:'match',q:'Match state and meaning',pairs:[['စိတ်ဝင်စားတယ်','interested'],['ပျင်းတယ်','bored'],['အံ့ဩတယ်','surprised'],['ဂရုစိုက်ပါ','take care!']]},
{t:'wb',q:'Build: (I) am interested in Burmese — Burmese-language interested',a:['မြန်မာစကား','စိတ်ဝင်စားတယ်'],pool:['မြန်မာစကား','စိတ်ဝင်စားတယ်','ပျင်းတယ်']},
{t:'mc',q:'"(I) am not interested" =',o:['စိတ်မဝင်စားဘူး','စိတ်ဝင်စားတယ်','မပျင်းဘူး','မအံ့ဩဘူး'],a:0},
{t:'li',q:'Listen — which one?',say:'ပျင်းတယ်',o:['ပျင်းတယ်','ပင်ပန်းတယ်','ပျော်တယ်','ပူတယ်'],a:0},
{t:'wb',q:'Build: Take care! See you!',a:['ဂရုစိုက်ပါ','တွေ့မယ်'],pool:['ဂရုစိုက်ပါ','တွေ့မယ်','ကူညီပါ']},
{t:'match',q:'Match state and meaning',pairs:[['စိတ်','mind / heart'],['အံ့ဩတယ်','surprised'],['ပျင်းတယ်','bored'],['စိတ်ဝင်စားတယ်','interested']]}]},
{id:'my_feel2_4',title:'Mix it',step:'mix',meta:'Moods in motion',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'အံ့ဩတယ်',o:['surprised / amazed','angry','confused','proud'],a:0},
{t:'li',q:'Listen — which one?',say:'စိတ်',o:['စိတ်','ဆိတ်','စစ်','သိပ်'],a:0},
{t:'mc',q:'Your friend speaks perfect Burmese after one year:',o:['အံ့ဩတယ်','ပျင်းတယ်','ကြောက်တယ်','နှေးတယ်'],a:0},
{t:'wb',q:'Build: Bored, so (I) read — bored-because read',a:['ပျင်းလို့','စာဖတ်တယ်'],pool:['ပျင်းလို့','စာဖတ်တယ်','ပျင်းရင်']},
{t:'li',q:'Listen — which one?',say:'ဂရုစိုက်ပါ',o:['ဂရုစိုက်ပါ','ဂရုစိုက်','သတိထားပါ','စိတ်ဝင်စားတယ်'],a:0},
{t:'match',q:'Match state and meaning',pairs:[['ပျင်းတယ်','bored'],['အံ့ဩတယ်','surprised'],['ဂရုစိုက်ပါ','take care!'],['စိတ်ဝင်စားတယ်','interested']]}]},
{id:'my_feel2_5',title:'Checkpoint',step:'checkpoint',meta:'Moods mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "take care!"?',o:['ဂရုစိုက်ပါ','ကူညီပါ','သတိရတယ်','ထိုင်ပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'အံ့ဩတယ်',o:['အံ့ဩတယ်','အံ့ဩ','ပျင်းတယ်','ဝမ်းသာတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ပျင်းတယ်',o:['bored / lazy','tired','sleepy','sad'],a:0},
{t:'wb',q:'Build: (I) am interested in football',a:['ဘောလုံး','စိတ်ဝင်စားတယ်'],pool:['ဘောလုံး','စိတ်ဝင်စားတယ်','အံ့ဩတယ်']},
{t:'mc',q:'interested · bored · surprised =',o:['စိတ်ဝင်စား · ပျင်း · အံ့ဩ','ပျင်း · စိတ်ဝင်စား · အံ့ဩ','အံ့ဩ · ပျင်း · စိတ်ဝင်စား','စိတ်ဝင်စား · အံ့ဩ · ပျင်း'],a:0},
{t:'match',q:'Match state and meaning',pairs:[['စိတ်ဝင်စားတယ်','interested'],['ပျင်းတယ်','bored'],['အံ့ဩတယ်','surprised'],['စိတ်','mind / heart']]}]},

/* --- Topic 5: guests & visiting --- */
{id:'my_visit',title:'Hospitality',step:'learn',meta:'ဧည့်သည် အလည်လာပါ ဝမ်းသာ ပြန်',vocab:[['ဧည့်သည်','eh theh','guest'],['အလည်လာပါ','a leh la ba','come and visit!'],['ဝမ်းသာတယ်','wun tha de','glad / delighted'],['ပြန်မယ်','pyan meh','(I) am heading back'],['ပြန်လာမယ်','pyan la meh','(I) will come back']],ex:[
{t:'note',tag:'Open doors',q:'ဧည့်သည် · အလည်လာပါ',body:'<p>Myanmar hospitality is legendary. <span class="deva">ဧည့်သည်</span> <b>eh theh</b> = guest. The invitation you WILL receive: <span class="deva">အလည်လာပါ</span> <b>a leh la ba</b> — come and visit!</p>',eg:[['ဧည့်သည်','eh theh','guest'],['အလည်လာပါ','a leh la ba','come and visit!']]},
{t:'mc',q:'Which means "guest"?',o:['ဧည့်သည်','ဈေးသည်','သူငယ်ချင်း','နိုင်ငံခြားသား'],a:0},
{t:'mc',q:'What does this mean?',d:'အလည်လာပါ',o:['come and visit!','come quickly!','come back!','come in!'],a:0},
{t:'note',tag:'Glad & going',q:'ဝမ်းသာ · ပြန်',body:'<p><span class="deva">ဝမ်းသာတယ်</span> <b>wun tha de</b> = glad — you have said it since Zone 2: တွေ့ရတာ<b>ဝမ်းသာ</b>ပါတယ် (glad to meet you)!</p><p><span class="deva">ပြန်</span> = return: <span class="deva">ပြန်မယ်</span> — I am heading back (the polite way to leave) · <span class="deva">ပြန်လာမယ်</span> — I will come back.</p>',eg:[['ဝမ်းသာတယ်','wun tha de','glad'],['ပြန်မယ်','pyan meh','heading back'],['ပြန်လာမယ်','pyan la meh','will come back']]},
{t:'mc',q:'Which means "glad / delighted"?',o:['ဝမ်းသာတယ်','ဝမ်းနည်းတယ်','ပျော်တယ်','အံ့ဩတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ပြန်မယ်',o:['(I) am heading back','(I) will repeat','(I) will reply','(I) am staying'],a:0},
{t:'li',q:'Listen — which one?',say:'အလည်လာပါ',o:['အလည်လာပါ','လာပါ','ပြန်လာမယ်','ဧည့်သည်'],a:0}]},
{id:'my_visit_2',title:'Hear the welcome',step:'recognize',meta:'Guests & goodbyes',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဧည့်သည်',o:['ဧည့်သည်','ဈေးသည်','အသည်','ညသည်'],a:0},
{t:'mc',q:'Which means "(I) will come back"?',o:['ပြန်လာမယ်','ပြန်မယ်','လာမယ်','ပြန်ပြောပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ဝမ်းသာတယ်',o:['ဝမ်းသာတယ်','ဝမ်းနည်းတယ်','ဝတ်တယ်','ဝယ်တယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဧည့်သည်',o:['guest','host','stranger','neighbor'],a:0},
{t:'mc',q:'ဝမ်းသာ vs ဝမ်းနည်း —',o:['glad vs sad','sad vs glad','both glad','both sad'],a:0},
{t:'li',q:'Listen — which one?',say:'ပြန်မယ်',o:['ပြန်မယ်','ပြန်လာမယ်','ပြောမယ်','ပြန်ပြောပါ'],a:0},
{t:'mc',q:'The evening winds down; the polite leaver says…',o:['ပြန်မယ်','ရောက်ပြီ','လိုက်မယ်','ထိုင်ပါ'],a:0}]},
{id:'my_visit_3',title:'Put it together',step:'build',meta:'Host & guest lines',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ဧည့်သည်','guest'],['အလည်လာပါ','come and visit!'],['ဝမ်းသာတယ်','glad'],['ပြန်မယ်','heading back']]},
{t:'wb',q:'Build: Please come visit (my) house — house to visit-come-please',a:['အိမ်','ကို','အလည်လာပါ'],pool:['အိမ်','ကို','အလည်လာပါ','ပြန်မယ်']},
{t:'mc',q:'"Guests have arrived!" =',o:['ဧည့်သည်ရောက်ပြီ','ဧည့်သည်ပြန်မယ်','ဧည့်သည်ရှိလား','ဧည့်သည်လာပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ပြန်လာမယ်',o:['ပြန်လာမယ်','ပြန်မယ်','လာမယ်','ပြန်သွားမယ်'],a:0},
{t:'wb',q:'Build: (I) am really glad — really glad',a:['အရမ်း','ဝမ်းသာတယ်'],pool:['အရမ်း','ဝမ်းသာတယ်','ဝမ်းနည်းတယ်']},
{t:'match',q:'Match moment and line',pairs:[['inviting','အလည်လာပါ'],['welcoming','ဝမ်းသာတယ်'],['leaving','ပြန်မယ်'],['promising','ပြန်လာမယ်']]}]},
{id:'my_visit_4',title:'Mix it',step:'mix',meta:'A perfect visit',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ပြန်လာမယ်',o:['(I) will come back','(I) am heading back','(I) just arrived','(I) will reply'],a:0},
{t:'li',q:'Listen — which one?',say:'ဝမ်းသာတယ်',o:['ဝမ်းသာတယ်','ဝမ်းနည်းတယ်','ဝန်းသာတယ်','ပျော်တယ်'],a:0},
{t:'mc',q:'Your neighbor waves you in for tea. You are the…',o:['ဧည့်သည်','ဈေးသည်','ဆရာ','လယ်သမား'],a:0},
{t:'wb',q:'Build: (I) am heading back, but (I) will come back next year',a:['ပြန်မယ်','ဒါပေမဲ့','နောက်နှစ်','ပြန်လာမယ်'],pool:['ပြန်မယ်','ဒါပေမဲ့','နောက်နှစ်','ပြန်လာမယ်','မနှစ်က']},
{t:'li',q:'Listen — which one?',say:'ဧည့်သည်',o:['ဧည့်သည်','အသည်း','ဈေးသည်','ညနေ'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['အလည်လာပါ','come and visit!'],['ဝမ်းသာတယ်','glad'],['ပြန်လာမယ်','will come back'],['ဧည့်သည်','guest']]}]},
{id:'my_visit_5',title:'Checkpoint',step:'checkpoint',meta:'Visiting mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "come and visit!"?',o:['အလည်လာပါ','ပြန်လာမယ်','လာပါ','အတူတူသွားမယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'ပြန်မယ်',o:['ပြန်မယ်','ပြန်လာမယ်','ပြောမယ်','ယူမယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဝမ်းသာတယ်',o:['glad / delighted','sad','full (of food)','warm'],a:0},
{t:'wb',q:'Build: Glad to see the guests — guests see-get glad (တွေ့ရလို့ because-of-seeing)',a:['ဧည့်သည်','တွေ့ရလို့','ဝမ်းသာတယ်'],pool:['ဧည့်သည်','တွေ့ရလို့','ဝမ်းသာတယ်','ဝမ်းနည်းတယ်']},
{t:'mc',q:'heading back · coming back =',o:['ပြန်မယ် · ပြန်လာမယ်','ပြန်လာမယ် · ပြန်မယ်','သွားမယ် · လာမယ်','ပြန်မယ် · လာမယ်'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ဧည့်သည်','guest'],['အလည်လာပါ','come and visit!'],['ပြန်မယ်','heading back'],['ဝမ်းသာတယ်','glad']]}]},

/* --- Topic 6: fruits — the သီး family --- */
{id:'my_fruit',title:'Fruits',step:'learn',meta:'သရက်သီး ငှက်ပျောသီး အုန်းသီး',vocab:[['အသီး','a thi','fruit'],['သရက်သီး','thayeq thi','mango'],['ငှက်ပျောသီး','hngeq pyaw thi','banana'],['အုန်းသီး','oun thi','coconut'],['နာနတ်သီး','na naq thi','pineapple']],ex:[
{t:'note',tag:'The သီး family',q:'Everything ends in သီး',body:'<p>Fruit words all wear <span class="deva">သီး</span> (fruit/round thing): <span class="deva">အသီး</span> fruit · <span class="deva">သရက်သီး</span> <b>thayeq thi</b> mango — Myanmar summer in one bite.</p>',eg:[['အသီး','a thi','fruit'],['သရက်သီး','thayeq thi','mango']]},
{t:'mc',q:'Which means "mango"?',o:['သရက်သီး','ငှက်ပျောသီး','အုန်းသီး','နာနတ်သီး'],a:0},
{t:'mc',q:'Fruit words end in…',o:['သီး','ပင်','စား','ချို'],a:0},
{t:'note',tag:'Stall favorites',q:'ငှက်ပျော · အုန်း · နာနတ်',body:'<p><span class="deva">ငှက်ပျောသီး</span> <b>hngeq pyaw thi</b> = banana — literally "happy-bird fruit" (there is your ငှက်!). <span class="deva">အုန်းသီး</span> <b>oun thi</b> = coconut · <span class="deva">နာနတ်သီး</span> <b>na naq thi</b> = pineapple.</p>',eg:[['ငှက်ပျောသီး','hngeq pyaw thi','banana'],['အုန်းသီး','oun thi','coconut'],['နာနတ်သီး','na naq thi','pineapple']]},
{t:'mc',q:'Which means "banana"?',o:['ငှက်ပျောသီး','သရက်သီး','နာနတ်သီး','အုန်းသီး'],a:0},
{t:'mc',q:'What does this mean?',d:'အုန်းသီး',o:['coconut','pineapple','mango','melon'],a:0},
{t:'li',q:'Listen — which one?',say:'သရက်သီး',o:['သရက်သီး','ငှက်ပျောသီး','အုန်းသီး','သစ်သီး'],a:0}]},
{id:'my_fruit_2',title:'Hear the stall',step:'recognize',meta:'Spot each fruit',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ငှက်ပျောသီး',o:['ငှက်ပျောသီး','သရက်သီး','နာနတ်သီး','ငှက်'],a:0},
{t:'mc',q:'Which means "pineapple"?',o:['နာနတ်သီး','အုန်းသီး','သရက်သီး','ငှက်ပျောသီး'],a:0},
{t:'li',q:'Listen — which one?',say:'အုန်းသီး',o:['အုန်းသီး','အသီး','နာနတ်သီး','သုံးသီး'],a:0},
{t:'mc',q:'What does this mean?',d:'သရက်သီး',o:['mango','banana','papaya','orange'],a:0},
{t:'mc',q:'ငှက်ပျောသီး is literally…',o:['happy-bird fruit','yellow-long fruit','tree-hand fruit','sweet-soft fruit'],a:0},
{t:'li',q:'Listen — which one?',say:'နာနတ်သီး',o:['နာနတ်သီး','နာနတ်','အုန်းသီး','နာရီ'],a:0},
{t:'mc',q:'Which drink hides in an အုန်းသီး?',o:['coconut water','mango juice','tea','milk'],a:0}]},
{id:'my_fruit_3',title:'Put it together',step:'build',meta:'Shop the stall',vocab:[],ex:[
{t:'match',q:'Match fruit and meaning',pairs:[['သရက်သီး','mango'],['ငှက်ပျောသီး','banana'],['အုန်းသီး','coconut'],['နာနတ်သီး','pineapple']]},
{t:'wb',q:'Build: Mango, please — mango give-please',a:['သရက်သီး','ပေးပါ'],pool:['သရက်သီး','ပေးပါ','ဝယ်ပါ']},
{t:'mc',q:'"How much are the bananas?" =',o:['ငှက်ပျောသီးဘယ်လောက်လဲ','ငှက်ပျောသီးဘယ်မှာလဲ','ငှက်ပျောသီးကြိုက်လား','ငှက်ပျောသီးရှိလား'],a:0},
{t:'li',q:'Listen — which one?',say:'အသီး',o:['အသီး','သီး','သစ်သီး','အုန်းသီး'],a:0},
{t:'wb',q:'Build: The mango is really sweet',a:['သရက်သီး','အရမ်း','ချိုတယ်'],pool:['သရက်သီး','အရမ်း','ချိုတယ်','စပ်တယ်']},
{t:'match',q:'Match fruit and meaning',pairs:[['အသီး','fruit'],['နာနတ်သီး','pineapple'],['အုန်းသီး','coconut'],['သရက်သီး','mango']]}]},
{id:'my_fruit_4',title:'Mix it',step:'mix',meta:'Five a day',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'နာနတ်သီး',o:['pineapple','coconut','jackfruit','watermelon'],a:0},
{t:'li',q:'Listen — which one?',say:'သရက်သီး',o:['သရက်သီး','သစ်သီး','နာနတ်သီး','သရက်'],a:0},
{t:'mc',q:'April in Myanmar means mountains of…',o:['သရက်သီး','အုန်းသီး','ဆေး','မိုး'],a:0},
{t:'wb',q:'Build: (I) bought bananas at the market yesterday',a:['မနေ့က','ဈေးမှာ','ငှက်ပျောသီး','ဝယ်ခဲ့တယ်'],pool:['မနေ့က','ဈေးမှာ','ငှက်ပျောသီး','ဝယ်ခဲ့တယ်','ဝယ်မယ်']},
{t:'li',q:'Listen — which one?',say:'ငှက်ပျောသီး',o:['ငှက်ပျောသီး','ငှက်','ပျော်တယ်','နာနတ်သီး'],a:0},
{t:'match',q:'Match fruit and meaning',pairs:[['သရက်သီး','mango'],['ငှက်ပျောသီး','banana'],['နာနတ်သီး','pineapple'],['အသီး','fruit']]}]},
{id:'my_fruit_5',title:'Checkpoint',step:'checkpoint',meta:'Fruits mastered?',vocab:[],ex:[
{t:'mc',q:'Which means "coconut"?',o:['အုန်းသီး','နာနတ်သီး','သရက်သီး','ငှက်ပျောသီး'],a:0},
{t:'li',q:'Listen — which one?',say:'နာနတ်သီး',o:['နာနတ်သီး','အုန်းသီး','သရက်သီး','နာရီ'],a:0},
{t:'mc',q:'What does this mean?',d:'ငှက်ပျောသီး',o:['banana','bird','mango','papaya'],a:0},
{t:'wb',q:'Build: Do you like mango? — mango like-question',a:['သရက်သီး','ကြိုက်လား'],pool:['သရက်သီး','ကြိုက်လား','ကြိုက်တယ်']},
{t:'mc',q:'mango · banana · coconut · pineapple =',o:['သရက်သီး · ငှက်ပျောသီး · အုန်းသီး · နာနတ်သီး','ငှက်ပျောသီး · သရက်သီး · နာနတ်သီး · အုန်းသီး','သရက်သီး · အုန်းသီး · ငှက်ပျောသီး · နာနတ်သီး','နာနတ်သီး · အုန်းသီး · ငှက်ပျောသီး · သရက်သီး'],a:0},
{t:'match',q:'Match fruit and meaning',pairs:[['သရက်သီး','mango'],['ငှက်ပျောသီး','banana'],['အုန်းသီး','coconut'],['နာနတ်သီး','pineapple']]}]},

/* --- Topic 7: the polite polish — course capstone --- */
{id:'my_cap',title:'Polite particles',step:'learn',meta:'ပါ everywhere + နော်',vocab:[['ဟုတ်ပါတယ်','houq pa de','yes, that is right (polite)'],['မသိပါဘူး','ma thi ba bu','(I) do not know (polite)'],['ကိစ္စမရှိပါဘူး','keiq sa ma shi ba bu','no problem'],['တော်ပြီ','taw bi','that is enough'],['နောက်တွေ့မယ်နော်','nauq twei meh naw','see you later, OK?']],ex:[
{t:'note',tag:'ပါ inside',q:'Polish any sentence',body:'<p>Final secret: <span class="deva">ပါ</span> does not just end requests — slide it INTO statements to soften them: ဟုတ်တယ် → <span class="deva">ဟုတ်ပါတယ်</span> · မသိဘူး → <span class="deva">မသိပါဘူး</span>. Same meaning, warmer voice. You heard it in နေကောင်း<b>ပါ</b>တယ် long ago!</p>',eg:[['ဟုတ်ပါတယ်','houq pa de','yes (polite)'],['မသိပါဘူး','ma thi ba bu','do not know (polite)']]},
{t:'mc',q:'The polite version of မသိဘူး is…',o:['မသိပါဘူး','မသိသေးဘူး','မသိရဘူး','သိပါတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'ဟုတ်ပါတယ်',o:['yes, that is right (polite)','really?','maybe','of course not'],a:0},
{t:'note',tag:'Smooth endings',q:'ကိစ္စမရှိပါဘူး · တော်ပြီ · နော်',body:'<p><span class="deva">ကိစ္စမရှိပါဘူး</span> <b>keiq sa ma shi ba bu</b> — no problem (ကိစ္စ = matter + your မရှိဘူး + polite ပါ). <span class="deva">တော်ပြီ</span> <b>taw bi</b> — that is enough, thanks.</p><p>And the warmest syllable in Burmese: <span class="deva">နော်</span> <b>naw</b> — "…OK?" <span class="deva">နောက်တွေ့မယ်နော်</span> — see you later, OK?</p>',eg:[['ကိစ္စမရှိပါဘူး','keiq sa ma shi ba bu','no problem'],['တော်ပြီ','taw bi','that is enough'],['နောက်တွေ့မယ်နော်','nauq twei meh naw','see you later, OK?']]},
{t:'mc',q:'Which means "no problem"?',o:['ကိစ္စမရှိပါဘူး','တော်ပြီ','မသိပါဘူး','ရပါတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'တော်ပြီ',o:['that is enough','well done','too late','it is over forever'],a:0},
{t:'li',q:'Listen — which one?',say:'နောက်တွေ့မယ်နော်',o:['နောက်တွေ့မယ်နော်','တွေ့မယ်','နောက်မှ','ဂရုစိုက်ပါ'],a:0}]},
{id:'my_cap_2',title:'Hear the polish',step:'recognize',meta:'Spot the soft touch',vocab:[],ex:[
{t:'li',q:'Listen — which one?',say:'ဟုတ်ပါတယ်',o:['ဟုတ်ပါတယ်','ဟုတ်တယ်','ဟုတ်ကဲ့','ဟုတ်လား'],a:0},
{t:'mc',q:'Which means "that is enough"?',o:['တော်ပြီ','ဒါပဲ','ပြီးပြီ','ရပြီ'],a:0},
{t:'li',q:'Listen — which one?',say:'ကိစ္စမရှိပါဘူး',o:['ကိစ္စမရှိပါဘူး','မရှိပါဘူး','မသိပါဘူး','ကိစ္စ'],a:0},
{t:'mc',q:'What does this mean?',d:'မသိပါဘူး',o:['(I) do not know (polite)','(I) really do not know!','nobody knows','(I) do not know yet'],a:0},
{t:'mc',q:'The tag နော် makes a sentence feel…',o:['warm — "…OK?"','urgent','formal','uncertain'],a:0},
{t:'li',q:'Listen — which one?',say:'တော်ပြီ',o:['တော်ပြီ','ရပြီ','ပြီးပြီ','ရောက်ပြီ'],a:0},
{t:'mc',q:'Waiter refills your cup a fourth time. Smile and say…',o:['တော်ပြီ','ကူညီပါ','ပေးပါ','မကြိုက်ဘူး'],a:0}]},
{id:'my_cap_3',title:'Put it together',step:'build',meta:'Speak warmly',vocab:[],ex:[
{t:'match',q:'Match line and meaning',pairs:[['ဟုတ်ပါတယ်','yes (polite)'],['မသိပါဘူး','do not know (polite)'],['ကိစ္စမရှိပါဘူး','no problem'],['တော်ပြီ','that is enough']]},
{t:'wb',q:'Build: See you later, OK? — later meet-will OK?',a:['နောက်','တွေ့မယ်','နော်'],pool:['နောက်','တွေ့မယ်','နော်','ပါ']},
{t:'mc',q:'Someone apologizes for being late. You wave it off:',o:['ကိစ္စမရှိပါဘူး','တော်ပြီ','မသိပါဘူး','ဟုတ်ပါတယ်'],a:0},
{t:'li',q:'Listen — which one?',say:'မသိပါဘူး',o:['မသိပါဘူး','မသိဘူး','မသိသေးဘူး','မရှိပါဘူး'],a:0},
{t:'wb',q:'Build: Yes, that is right (polite) — right-polite',a:['ဟုတ်ပါတယ်'],pool:['ဟုတ်ပါတယ်','ဟုတ်လား']},
{t:'match',q:'Match plain and polished',pairs:[['ဟုတ်တယ်','ဟုတ်ပါတယ်'],['မသိဘူး','မသိပါဘူး'],['မရှိဘူး','မရှိပါဘူး'],['ရတယ်','ရပါတယ်']]}]},
{id:'my_cap_4',title:'Mix it',step:'mix',meta:'Warm from start to finish',vocab:[],ex:[
{t:'mc',q:'What does this mean?',d:'ကိစ္စမရှိပါဘူး',o:['no problem','no time','no idea','nothing left'],a:0},
{t:'li',q:'Listen — which one?',say:'နော်',o:['နော်','နော','နောက်','နို့'],a:0},
{t:'mc',q:'ဂရုစိုက်ပါနော် means…',o:['take care, OK?','be very careful!','watch me, OK?','care about it'],a:0},
{t:'wb',q:'Build: No problem. See you later, OK?',a:['ကိစ္စမရှိပါဘူး','နောက်တွေ့မယ်နော်'],pool:['ကိစ္စမရှိပါဘူး','နောက်တွေ့မယ်နော်','တော်ပြီ']},
{t:'li',q:'Listen — which one?',say:'ဟုတ်ပါတယ်',o:['ဟုတ်ပါတယ်','ဟုတ်ကဲ့','ဟုတ်တယ်','ရပါတယ်'],a:0},
{t:'match',q:'Match line and moment',pairs:[['ကိစ္စမရှိပါဘူး','accepting an apology'],['တော်ပြီ','declining more'],['နောက်တွေ့မယ်နော်','warm goodbye'],['ဟုတ်ပါတယ်','polite agreement']]}]},
{id:'my_cap_5',title:'Checkpoint',step:'checkpoint',meta:'The course, complete!',vocab:[],ex:[
{t:'mc',q:'Which is the warm "see you later, OK?"',o:['နောက်တွေ့မယ်နော်','သွားတော့မယ်','တော်ပြီ','ဂရုစိုက်ပါ'],a:0},
{t:'li',q:'Listen — which one?',say:'ကိစ္စမရှိပါဘူး',o:['ကိစ္စမရှိပါဘူး','မသိပါဘူး','မရှိပါဘူး','ဟုတ်ပါတယ်'],a:0},
{t:'mc',q:'What does this mean?',d:'မသိပါဘူး',o:['(I) do not know (polite)','(I) know it well','nobody told me','(I) forgot'],a:0},
{t:'wb',q:'Build: That is enough. Thank you!',a:['တော်ပြီ','ကျေးဇူးတင်ပါတယ်'],pool:['တော်ပြီ','ကျေးဇူးတင်ပါတယ်','ကိစ္စမရှိပါဘူး']},
{t:'mc',q:'The polish that softens ANY statement is…',o:['ပါ slid inside','နော် in front','တယ် doubled','ဘူး removed'],a:0},
{t:'match',q:'Match line and meaning',pairs:[['ဟုတ်ပါတယ်','yes (polite)'],['ကိစ္စမရှိပါဘူး','no problem'],['တော်ပြီ','that is enough'],['နောက်တွေ့မယ်နော်','see you later, OK?']]}]},
];

/* ---------- per-language art (secular: dramatic Hpa-an-style karst limestone
   peaks over a misty Inle lake, forested foothills with soft reflections, and a
   lone leg-rowing fisherman — NO pagodas/temples, per the art rule).
   The left/center stays OPEN WATER so the "Learn Burmese" title reads clear
   (CLAUDE.md title-zone rule); the karst cluster lives right of x≈700, still
   visible beside the title on the phone crop. The fisherman, birds & reeds
   carry the `art-detail` class and are hidden ≤560px to keep mobile calm. */
const MY_HERO='<circle class="orb-glow" cx="1120" cy="118" r="52"/><circle class="orb" cx="1120" cy="118" r="33"/><g class="hero-stars" aria-hidden="true"><circle cx="130" cy="60" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="250" cy="108" r="1.2"/><circle cx="366" cy="48" r="2"/><circle cx="478" cy="124" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="566" cy="72" r="1.6"/><circle cx="684" cy="42" r="1.3" class="tw" style="animation-delay:.6s"/><circle cx="792" cy="114" r="1.8"/><circle cx="864" cy="150" r="1.3"/><circle cx="1092" cy="120" r="1.4"/><circle cx="1136" cy="46" r="1.2"/><circle cx="180" cy="140" r="1.5"/><circle cx="326" cy="152" r="1.3" class="tw" style="animation-delay:2.3s"/><circle cx="626" cy="136" r="1.5"/></g><g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g><g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g><g class="art-detail" fill="none" stroke="var(--mtn-mid)" stroke-width="1.8" stroke-linecap="round" opacity=".5" aria-hidden="true"><path d="M150 92 q6 -5 12 0 q6 -5 12 0"/><path d="M210 108 q5 -4.5 10 0 q5 -4.5 10 0"/><path d="M96 120 q5 -4.5 10 0 q5 -4.5 10 0"/></g><path class="far" d="M90 236 C105.4 226.8 125.0 222.7 160.0 222.0 C195.0 222.7 214.6 226.8 230 236 Z M280 236 C297.6 222.8 320.0 217.0 360.0 216.0 C400.0 217.0 422.4 222.8 440 236 Z M490 236 C503.2 227.4 520.0 223.7 550.0 223.0 C580.0 223.7 596.8 227.4 610 236 Z"/><path class="far" d="M0 236 L670 236 C680.0 189.2 697.5 161.9 720.0 158.0 C745.0 186.6 747.0 210.0 755.0 210.0 C763.0 210.0 761.0 155.1 790.0 88.0 C819.0 155.1 824.5 210.0 832.5 210.0 C840.5 210.0 851.0 181.2 875.0 146.0 C899.0 181.2 904.5 210.0 912.5 210.0 C920.5 210.0 914.0 147.9 950.0 72.0 C986.0 147.9 984.5 210.0 992.5 210.0 C1000.5 210.0 1009.0 177.6 1035.0 138.0 C1061.0 177.6 1059.5 210.0 1067.5 210.0 C1075.5 210.0 1079.0 164.1 1100.0 108.0 C1118.9 114.4 1133.6 159.2 1142 236 L1200 236 L1200 320 L0 320 Z"/><g class="snow" opacity=".25"><ellipse cx="350" cy="232" rx="240" ry="10"/></g><g class="snow" opacity=".33"><ellipse cx="910" cy="228" rx="250" ry="15"/><ellipse cx="1080" cy="230" rx="110" ry="12"/></g><g class="mid" opacity=".16"><path d="M754 238 C765.6 252.0 777.2 266.0 790.0 266.0 C802.8 266.0 814.4 252.0 826 238 Z"/><path d="M905 238 C919.8 258.0 934.2 278.0 950.0 278.0 C965.8 278.0 980.2 258.0 995 238 Z"/></g><g class="mid"><path d="M425 274 C431.6 260.8 440.0 255.0 455.0 254.0 C470.0 255.0 478.4 260.8 485 274 Z"/><path d="M581 274 C588.5 259.5 598.0 253.1 615.0 252.0 C632.0 253.1 641.5 259.5 649 274 Z"/><path d="M700 238 C713.2 190.5 730.0 169.6 760.0 166.0 C790.0 169.6 806.8 190.5 820 238 Z"/><path d="M873 238 C891.0 179.9 914.0 154.4 955.0 150.0 C996.0 154.4 1019.0 179.9 1037 238 Z"/><path d="M1040 238 C1051.0 194.4 1065.0 175.3 1090.0 172.0 C1115.0 175.3 1129.0 194.4 1140 238 Z"/></g><g class="snow" opacity=".5"><rect x="150" y="266" width="120" height="3" rx="1.5"/><rect x="360" y="278" width="150" height="3" rx="1.5"/><rect x="620" y="270" width="110" height="3" rx="1.5"/><rect x="820" y="282" width="130" height="3" rx="1.5"/><rect x="1030" y="268" width="90" height="3" rx="1.5"/></g><g class="mid art-detail"><path d="M148 283 Q222 273 296 281 L290 290 Q222 282 154 290 Z"/></g><g class="near"><path d="M0 320 L0 302 Q200 293 400 300 Q640 309 880 298 Q1040 291 1200 300 L1200 320 Z"/><path class="art-detail" d="M70 303 L75 285 L78 297 L82 283 L85 298 L90 288 L93 305 Z"/><path class="art-detail" d="M1120 301 L1125 284 L1128 296 L1132 282 L1135 297 L1140 287 L1142 303 Z"/></g>';
const MY_BAND='<circle class="orb-glow" cx="950" cy="84" r="30"/><circle class="orb" cx="950" cy="84" r="18"/><path class="far" d="M176 152 C190.1 144.1 208.0 140.6 240.0 140.0 C272.0 140.6 289.9 144.1 304 152 Z M404 152 C418.5 142.1 437.0 137.8 470.0 137.0 C503.0 137.8 521.5 142.1 536 152 Z"/><path class="far" d="M0 152 L778 152 C788.4 105.2 806.6 77.9 830.0 74.0 C856.0 105.9 862.0 132.0 870.0 132.0 C878.0 132.0 888.0 120.3 910.0 106.0 C932.0 120.3 939.5 132.0 947.5 132.0 C955.5 132.0 955.0 98.7 985.0 58.0 C1015.0 98.7 1017.0 132.0 1025.0 132.0 C1033.0 132.0 1042.0 117.6 1065.0 100.0 C1085.7 102.6 1101.8 120.8 1111 152 L1200 152 L1200 200 L0 200 Z"/><g class="snow" opacity=".3"><ellipse cx="950" cy="146" rx="200" ry="9"/></g><g class="mid"><path d="M808 154 C819.4 135.5 834.0 127.4 860.0 126.0 C886.0 127.4 900.6 135.5 912 154 Z"/><path d="M960 154 C973.2 131.6 990.0 121.7 1020.0 120.0 C1050.0 121.7 1066.8 131.6 1080 154 Z"/></g><g class="snow" opacity=".45"><rect x="220" y="168" width="120" height="2.5" rx="1.25"/><rect x="470" y="174" width="110" height="2.5" rx="1.25"/><rect x="680" y="180" width="90" height="2.5" rx="1.25"/></g><g class="mid art-detail"><path d="M522 180 Q580 171 640 178 L635 187 Q580 178 527 187 Z"/></g><g class="near"><path d="M0 200 L0 188 Q200 181 400 186 Q650 191 900 184 Q1050 181 1200 187 L1200 200 Z"/><path class="art-detail" d="M120 189 L124 175 L127 183 L131 173 L134 184 L138 177 L140 190 Z"/></g>';
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
  alpha:{native:'မြန်မာအက္ခရာ',vowels:'သရ',cons:'ဗျည်း',nums:'ဂဏန်း',review:'လေ့ကျင့်',settings:'ဆက်တင်'},
  art:{hero:MY_HERO,band:MY_BAND,mascot:MY_MASCOT},
  voiceTest:v=>/^my(\b|[-_])/i.test(v.lang)||/burmese|myanmar/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:MY_LESSONS,units:MY_UNITS,unitsIntensive:[],sym:MY_SYM,
  vowels:MY_VOWELS,cons:MY_CONS,nums:MY_NUMS,srsSeed:MY_SRS_SEED
});
