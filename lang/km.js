/* ===== KHMER LANGUAGE PACK (early access: Zone 1 Script + Zone 2 Foundations) =====
   Romanization scheme (ASCII only, enforced — no Khmer script in rom fields):
   - aspirates kh chh th ph; ng (ង), nh (ញ)
   - consonant names carry their series vowel: a-series ka kha cha... o-series ko kho ngo cho...
   - vowels (a-series reading): aa e ey oe eu o ou uo aeu oea ie ei ae ai ao av om am ah
   - words are romanized as pronounced: khnhom, suosdey, arkun, phteah, thngai, tuk
   Two consonant series color every vowel; subscripts (ជើង) written with coeng ្.
   Real Khmer has no spaces between words — word-builder tiles are teaching aids. */

const KM_UNITS=[
  {n:1,t:'The Script',d:'អក្សរខ្មែរ — read & sound out Khmer',lessons:['km_c1','km_c1_2','km_c1_3','km_c1_4','km_c1_5','km_c2','km_c2_2','km_c2_3','km_c2_4','km_c2_5','km_c3','km_c3_2','km_c3_3','km_c3_4','km_c3_5','km_c4','km_c4_2','km_c4_3','km_c4_4','km_c4_5','km_v1','km_v1_2','km_v1_3','km_v1_4','km_v1_5','km_v2','km_v2_2','km_v2_3','km_v2_4','km_v2_5','km_sub','km_sub_2','km_sub_3','km_sub_4','km_sub_5']},
  {n:2,t:'Foundations',d:'Greetings, people & numbers',lessons:['km_greet','km_greet_2','km_greet_3','km_greet_4','km_greet_5','km_pron','km_pron_2','km_pron_3','km_pron_4','km_pron_5','km_num1','km_num1_2','km_num1_3','km_num1_4','km_num1_5','km_num2','km_num2_2','km_num2_3','km_num2_4','km_num2_5','km_court','km_court_2','km_court_3','km_court_4','km_court_5','km_intro','km_intro_2','km_intro_3','km_intro_4','km_intro_5','km_day','km_day_2','km_day_3','km_day_4','km_day_5']},
];

const KM_SYM={km_c1:'ក',km_c2:'ច',km_c3:'ត',km_c4:'ស',km_v1:'កា',km_v2:'គោ',km_sub:'ខ្ម',km_greet:'សួ',km_pron:'ខ្ញុំ',km_num1:'១',km_num2:'២០',km_court:'សូម',km_intro:'ឈ្មោះ',km_day:'ថ្ងៃ'};

const KM_VOWELS=[['អា','aa'],['អិ','e'],['អី','ey'],['អឹ','oe'],['អឺ','eu'],['អុ','o'],['អូ','ou'],['អួ','uo'],['អើ','aeu'],['អឿ','oea'],['អៀ','ie'],['អេ','ei'],['អែ','ae'],['អៃ','ai'],['អោ','ao'],['អៅ','av'],['អុំ','om'],['អំ','am'],['អះ','ah']];
const KM_CONS=[['ក','ka'],['ខ','kha'],['គ','ko'],['ឃ','kho'],['ង','ngo'],['ច','cha'],['ឆ','chha'],['ជ','cho'],['ឈ','chho'],['ញ','nho'],['ដ','da'],['ឋ','tha'],['ឌ','do'],['ឍ','tho'],['ណ','na'],['ត','ta'],['ថ','tha'],['ទ','to'],['ធ','tho'],['ន','no'],['ប','ba'],['ផ','pha'],['ព','po'],['ភ','pho'],['ម','mo'],['យ','yo'],['រ','ro'],['ល','lo'],['វ','vo'],['ស','sa'],['ហ','ha'],['ឡ','la'],['អ','a']];
const KM_NUMS=[['០','0'],['១','1'],['២','2'],['៣','3'],['៤','4'],['៥','5'],['៦','6'],['៧','7'],['៨','8'],['៩','9']];
const KM_SRS_SEED=[['សួស្តី','Suosdey','Hello'],['អរគុណ','Arkun','Thank you'],['សុំទោស','Som toh','Excuse me / Sorry'],['បាទ','Baat','Yes (men say)'],['ចាស','Chaah','Yes (women say)'],['ទេ','Te','No / Not'],['ទឹក','Tuk','Water'],['បាយ','Bay','Rice / Food'],['ផ្ទះ','Phteah','House / Home'],['មនុស្ស','Monuh','Person'],['ល្អ','Laor','Good'],['ធំ','Thom','Big'],['តូច','Touch','Small'],['ថ្ងៃនេះ','Thngai nih','Today'],['ស្អែក','Saaek','Tomorrow'],['លុយ','Luy','Money'],['ផ្លូវ','Phlov','Road / Way'],['ភ្នំ','Phnom','Mountain'],['សប្បាយ','Sabay','Happy'],['តែ','Tae','Tea']];

const KM_LESSONS=[
/* ===================== ZONE 1 · THE SCRIPT ===================== */
{id:'km_c1',emoji:'ក',title:'First letters',step:'learn',meta:'ក ខ គ ឃ ង & the two series',vocab:[['ក','ka','consonant: k (a-series)'],['ខ','kha','consonant: kh (a-series)'],['គ','ko','consonant: k (o-series)'],['ឃ','kho','consonant: kh (o-series)'],['ង','ngo','consonant: ng (o-series)']],ex:[
{t:'note',tag:'Start here',q:'Meet Khmer script',body:'<p>Khmer is written in <b>អក្សរខ្មែរ</b>, left to right, with <b>no spaces between words</b>. You will never have to type it — in these lessons you just <b>listen and tap</b>.</p><p>Khmer consonants come in <b>two series</b>: a light <b>a-series</b> and a deep <b>o-series</b>. The series changes how vowels sound — it is the key to reading Khmer.</p>',tip:'Tap the speaker on any letter to hear it.'},
{t:'note',tag:'The two series',q:'ក and គ',body:'<p><span class="deva">ក</span> = <b>ka</b> — the k sound with a light built-in "a".</p><p><span class="deva">គ</span> = <b>ko</b> — the same k sound, but the deep series gives it a built-in "o". Same shape idea, different voice.</p>',eg:[['ក','ka','k + a (light series)'],['គ','ko','k + o (deep series)']]},
{t:'mc',q:'What sound does this letter make?',d:'ក',r:'ka',o:['ka','ko','kha','ngo'],a:0},
{t:'mc',q:'And this one?',d:'គ',r:'ko',o:['ko','ka','kho','ngo'],a:0},
{t:'note',tag:'Add breath',q:'ខ and ឃ',body:'<p>Add a puff of air and you get the aspirated pair: <span class="deva">ខ</span> = <b>kha</b> (a-series) and <span class="deva">ឃ</span> = <b>kho</b> (o-series).</p><p><span class="deva">ង</span> = <b>ngo</b> — the ng of "sing". In Khmer it can even start a word.</p>',eg:[['ខ','kha','kh + a'],['ឃ','kho','kh + o'],['ង','ngo','ng + o']]},
{t:'mc',q:'What sound does this letter make?',d:'ខ',r:'kha',o:['kha','ka','kho','ngo'],a:0},
{t:'mc',q:'And this one?',d:'ឃ',r:'kho',o:['kho','kha','ko','ngo'],a:0},
{t:'mc',q:'Which letter is the ng sound?',d:'ង',r:'ngo',o:['ngo','ko','kha','ka'],a:0}]},
{id:'km_c1_2',emoji:'ក',title:'Spot the series',step:'recognize',meta:'Hear & spot ក ខ គ ឃ ង',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ក',o:['ក','គ','ខ','ង'],a:0},
{t:'li',q:'Listen — which letter?',say:'គ',o:['គ','ក','ឃ','ង'],a:0},
{t:'mc',q:'Which letter says ka?',o:['ក','គ','ខ','ឃ'],a:0},
{t:'mc',q:'Which letter says kho?',o:['ឃ','ខ','គ','ង'],a:0},
{t:'li',q:'Listen — which letter?',say:'ង',o:['ង','ឃ','ក','គ'],a:0},
{t:'mc',q:'ក is a-series. Which letter is its o-series partner?',d:'ក',r:'ka',o:['គ','ខ','ង','ឃ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ខ',o:['ខ','ក','គ','ង'],a:0}]},
{id:'km_c1_3',emoji:'ក',title:'Pair them up',step:'build',meta:'Match sounds to letters',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ក','ka'],['ខ','kha'],['គ','ko'],['ឃ','kho'],['ង','ngo']]},
{t:'mc',q:'Which letter says ko?',o:['គ','ក','ឃ','ខ'],a:0},
{t:'mc',q:'Which letter says kha?',o:['ខ','ឃ','ក','គ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ឃ',o:['ឃ','ខ','គ','ក'],a:0},
{t:'mc',q:'Aspirated means…',d:'ខ',r:'kha',o:['said with a puff of air','said while humming','said twice','whispered'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ង','ngo'],['គ','ko'],['ខ','kha'],['ក','ka']]}]},
{id:'km_c1_4',emoji:'ក',title:'Mix it',step:'mix',meta:'All five letters together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ង',r:'ngo',o:['ngo','ko','kho','ka'],a:0},
{t:'li',q:'Listen — which letter?',say:'ក',o:['ក','ខ','ឃ','គ'],a:0},
{t:'mc',q:'Which is the o-series k?',o:['គ','ក','ខ','ង'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ខ',r:'kha',o:['kha','kho','ka','ngo'],a:0},
{t:'li',q:'Listen — which letter?',say:'គ',o:['គ','ង','ក','ឃ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ក','ka'],['គ','ko'],['ង','ngo'],['ឃ','kho']]},
{t:'mc',q:'The two series matter because…',o:['they change how vowels sound','they change the word order','they show politeness','they mark questions'],a:0}]},
{id:'km_c1_5',emoji:'ក',title:'Checkpoint',step:'checkpoint',meta:'ក ខ គ ឃ ង mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ក',r:'ka',o:['ka','ko','kha','kho'],a:0},
{t:'li',q:'Listen — which letter?',say:'ឃ',o:['ឃ','គ','ខ','ក'],a:0},
{t:'mc',q:'Which letter says ngo?',o:['ង','ឃ','គ','ក'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'គ',r:'ko',o:['ko','ka','kho','ngo'],a:0},
{t:'li',q:'Listen — which letter?',say:'ខ',o:['ខ','ឃ','ក','គ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ខ','kha'],['ឃ','kho'],['ក','ka'],['ង','ngo'],['គ','ko']]},
{t:'mc',q:'ខ and ឃ share the kh sound. What differs?',o:['their series (a vs o)','their loudness','one is silent','nothing'],a:0}]},

{id:'km_c2',emoji:'ច',title:'Ch, nh & d rows',step:'learn',meta:'ច ឆ ជ ឈ ញ · ដ ឋ ឌ ឍ ណ',vocab:[['ច','cha','consonant: ch (a-series)'],['ឆ','chha','consonant: chh (a-series)'],['ជ','cho','consonant: ch (o-series)'],['ឈ','chho','consonant: chh (o-series)'],['ញ','nho','consonant: nh (o-series)'],['ដ','da','consonant: d (a-series)'],['ណ','na','consonant: n (a-series)']],ex:[
{t:'note',tag:'The ch row',q:'ច ឆ ជ ឈ ញ',body:'<p>The ch row works exactly like the k row: <span class="deva">ច</span> <b>cha</b>, <span class="deva">ឆ</span> <b>chha</b> (breathy), then their deep partners <span class="deva">ជ</span> <b>cho</b> and <span class="deva">ឈ</span> <b>chho</b>.</p><p><span class="deva">ញ</span> = <b>nho</b> — the ny of "canyon".</p>',eg:[['ច','cha','ch + a'],['ជ','cho','ch + o'],['ញ','nho','ny sound']]},
{t:'mc',q:'What sound does this letter make?',d:'ច',r:'cha',o:['cha','cho','chha','nho'],a:0},
{t:'mc',q:'And this one?',d:'ជ',r:'cho',o:['cho','cha','chho','nho'],a:0},
{t:'mc',q:'And this one?',d:'ញ',r:'nho',o:['nho','ngo','cho','cha'],a:0},
{t:'note',tag:'The d row',q:'ដ ឋ ឌ ឍ ណ',body:'<p><span class="deva">ដ</span> = <b>da</b> and <span class="deva">ណ</span> = <b>na</b> — both a-series.</p><p><span class="deva">ឋ ឌ ឍ</span> are rare letters you will mostly meet in old or formal words — recognize them and move on.</p>',eg:[['ដ','da','d + a'],['ណ','na','n + a']]},
{t:'mc',q:'What sound does this letter make?',d:'ដ',r:'da',o:['da','ta','na','cha'],a:0},
{t:'mc',q:'And this one?',d:'ណ',r:'na',o:['na','da','nho','ngo'],a:0},
{t:'mc',q:'And this one?',d:'ឆ',r:'chha',o:['chha','cha','chho','kha'],a:0}]},
{id:'km_c2_2',emoji:'ច',title:'Hear the ch row',step:'recognize',meta:'Hear & spot the new letters',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ច',o:['ច','ជ','ឆ','ញ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ជ',o:['ជ','ច','ឈ','ដ'],a:0},
{t:'mc',q:'Which letter says chha?',o:['ឆ','ឈ','ច','ជ'],a:0},
{t:'mc',q:'Which letter says na?',o:['ណ','ញ','ង','ដ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ដ',o:['ដ','ណ','ច','ត'],a:0},
{t:'li',q:'Listen — which letter?',say:'ញ',o:['ញ','ង','ជ','ណ'],a:0},
{t:'mc',q:'ច is a-series. Its o-series partner is…',d:'ច',r:'cha',o:['ជ','ឆ','ញ','ឈ'],a:0}]},
{id:'km_c2_3',emoji:'ច',title:'Build the rows',step:'build',meta:'Match & pick',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ច','cha'],['ឆ','chha'],['ជ','cho'],['ឈ','chho'],['ញ','nho']]},
{t:'match',q:'Match letter and sound',pairs:[['ដ','da'],['ណ','na'],['ច','cha'],['ជ','cho']]},
{t:'mc',q:'Which letter says cho?',o:['ជ','ច','ឈ','ឆ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ឈ',o:['ឈ','ឆ','ជ','ច'],a:0},
{t:'mc',q:'Which letter says da?',o:['ដ','ណ','ត','ច'],a:0},
{t:'mc',q:'ញ nho sounds like…',d:'ញ',r:'nho',o:['ny in canyon','ng in sing','n in net','ch in chat'],a:0}]},
{id:'km_c2_4',emoji:'ច',title:'Mix it',step:'mix',meta:'k, ch & d rows together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ឈ',r:'chho',o:['chho','chha','cho','kho'],a:0},
{t:'li',q:'Listen — which letter?',say:'ណ',o:['ណ','ដ','ញ','ង'],a:0},
{t:'mc',q:'Which letter says cha?',o:['ច','ជ','ក','ដ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ឆ',o:['ឆ','ច','ឈ','ខ'],a:0},
{t:'mc',q:'Which of these is o-series?',o:['ជ','ច','ដ','ណ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ក','ka'],['ច','cha'],['ដ','da'],['ញ','nho']]},
{t:'mc',q:'What sound does this letter make?',d:'ដ',r:'da',o:['da','do','ta','na'],a:0}]},
{id:'km_c2_5',emoji:'ច',title:'Checkpoint',step:'checkpoint',meta:'Ten letters down',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ច',r:'cha',o:['cha','cho','ka','da'],a:0},
{t:'li',q:'Listen — which letter?',say:'ជ',o:['ជ','ឈ','ច','ញ'],a:0},
{t:'mc',q:'Which letter says nho?',o:['ញ','ង','ណ','ន'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ណ',r:'na',o:['na','da','nho','ngo'],a:0},
{t:'li',q:'Listen — which letter?',say:'ច',o:['ច','ឆ','ជ','ក'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ឆ','chha'],['ឈ','chho'],['ដ','da'],['ណ','na'],['ញ','nho']]},
{t:'mc',q:'The breathy (aspirated) pair of the ch row is…',o:['ឆ and ឈ','ច and ជ','ដ and ណ','ក and គ'],a:0}]},

{id:'km_c3',emoji:'ត',title:'T & p rows',step:'learn',meta:'ត ថ ទ ធ ន · ប ផ ព ភ ម',vocab:[['ត','ta','consonant: t (a-series)'],['ថ','tha','consonant: th (a-series)'],['ទ','to','consonant: t (o-series)'],['ធ','tho','consonant: th (o-series)'],['ន','no','consonant: n (o-series)'],['ប','ba','consonant: b (a-series)'],['ផ','pha','consonant: ph (a-series)'],['ព','po','consonant: p (o-series)'],['ភ','pho','consonant: ph (o-series)'],['ម','mo','consonant: m (o-series)']],ex:[
{t:'note',tag:'The t row',q:'ត ថ ទ ធ ន',body:'<p><span class="deva">ត</span> <b>ta</b> and breathy <span class="deva">ថ</span> <b>tha</b>; deep partners <span class="deva">ទ</span> <b>to</b> and <span class="deva">ធ</span> <b>tho</b>.</p><p><span class="deva">ន</span> = <b>no</b> — the everyday n.</p>',eg:[['ត','ta','t + a'],['ទ','to','t + o'],['ន','no','n + o']]},
{t:'mc',q:'What sound does this letter make?',d:'ត',r:'ta',o:['ta','to','tha','da'],a:0},
{t:'mc',q:'And this one?',d:'ទ',r:'to',o:['to','ta','tho','no'],a:0},
{t:'mc',q:'And this one?',d:'ន',r:'no',o:['no','na','mo','ngo'],a:0},
{t:'note',tag:'The p row',q:'ប ផ ព ភ ម',body:'<p><span class="deva">ប</span> <b>ba</b> and breathy <span class="deva">ផ</span> <b>pha</b>; deep partners <span class="deva">ព</span> <b>po</b> and <span class="deva">ភ</span> <b>pho</b>.</p><p><span class="deva">ម</span> = <b>mo</b> — the m sound.</p>',eg:[['ប','ba','b + a'],['ព','po','p + o'],['ម','mo','m + o']]},
{t:'mc',q:'What sound does this letter make?',d:'ប',r:'ba',o:['ba','po','pha','mo'],a:0},
{t:'mc',q:'And this one?',d:'ព',r:'po',o:['po','ba','pho','mo'],a:0},
{t:'mc',q:'And this one?',d:'ម',r:'mo',o:['mo','no','po','ba'],a:0}]},
{id:'km_c3_2',emoji:'ត',title:'Hear t & p',step:'recognize',meta:'Hear & spot the new letters',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ត',o:['ត','ទ','ថ','ដ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ប',o:['ប','ព','ផ','ម'],a:0},
{t:'mc',q:'Which letter says tho?',o:['ធ','ថ','ទ','ត'],a:0},
{t:'mc',q:'Which letter says pha?',o:['ផ','ភ','ប','ព'],a:0},
{t:'li',q:'Listen — which letter?',say:'ម',o:['ម','ន','ព','ប'],a:0},
{t:'li',q:'Listen — which letter?',say:'ទ',o:['ទ','ត','ធ','ន'],a:0},
{t:'mc',q:'ប is a-series. Its o-series partner is…',d:'ប',r:'ba',o:['ព','ផ','ភ','ម'],a:0}]},
{id:'km_c3_3',emoji:'ត',title:'Build the rows',step:'build',meta:'Match & pick',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['ត','ta'],['ថ','tha'],['ទ','to'],['ធ','tho'],['ន','no']]},
{t:'match',q:'Match letter and sound',pairs:[['ប','ba'],['ផ','pha'],['ព','po'],['ភ','pho'],['ម','mo']]},
{t:'mc',q:'Which letter says to?',o:['ទ','ត','ធ','ដ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ភ',o:['ភ','ផ','ព','ប'],a:0},
{t:'mc',q:'Which letter says mo?',o:['ម','ន','ង','ញ'],a:0},
{t:'mc',q:'ដ da vs ត ta — listen closely. ដ is like…',d:'ដ',r:'da',o:['d in dog','t in top','th in thin','n in net'],a:0}]},
{id:'km_c3_4',emoji:'ត',title:'Mix it',step:'mix',meta:'Twenty letters together',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ធ',r:'tho',o:['tho','tha','to','pho'],a:0},
{t:'li',q:'Listen — which letter?',say:'ផ',o:['ផ','ភ','ប','ថ'],a:0},
{t:'mc',q:'Which letter says ba?',o:['ប','ព','ផ','ម'],a:0},
{t:'li',q:'Listen — which letter?',say:'ន',o:['ន','ណ','ម','ង'],a:0},
{t:'mc',q:'Which of these is a-series?',o:['ត','ទ','ព','ម'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ត','ta'],['ប','ba'],['ព','po'],['ន','no']]},
{t:'mc',q:'What sound does this letter make?',d:'ភ',r:'pho',o:['pho','pha','po','tho'],a:0}]},
{id:'km_c3_5',emoji:'ត',title:'Checkpoint',step:'checkpoint',meta:'t & p rows mastered?',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ត',r:'ta',o:['ta','to','da','tha'],a:0},
{t:'li',q:'Listen — which letter?',say:'ព',o:['ព','ប','ភ','ម'],a:0},
{t:'mc',q:'Which letter says no?',o:['ន','ណ','ម','ញ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'ផ',r:'pha',o:['pha','pho','ba','po'],a:0},
{t:'li',q:'Listen — which letter?',say:'ថ',o:['ថ','ធ','ត','ទ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ទ','to'],['ធ','tho'],['ផ','pha'],['ភ','pho'],['ម','mo']]},
{t:'mc',q:'ន and ណ both say n. What differs?',o:['their series (o vs a)','their loudness','one is silent','nothing'],a:0}]},

{id:'km_c4',emoji:'ស',title:'The last letters',step:'learn',meta:'យ រ ល វ ស ហ ឡ អ',vocab:[['យ','yo','consonant: y (o-series)'],['រ','ro','consonant: r (o-series)'],['ល','lo','consonant: l (o-series)'],['វ','vo','consonant: v (o-series)'],['ស','sa','consonant: s (a-series)'],['ហ','ha','consonant: h (a-series)'],['ឡ','la','consonant: l (a-series)'],['អ','a','consonant: silent base (a-series)']],ex:[
{t:'note',tag:'Smooth sounds',q:'យ រ ល វ',body:'<p>Four smooth o-series letters: <span class="deva">យ</span> <b>yo</b>, <span class="deva">រ</span> <b>ro</b> (lightly rolled), <span class="deva">ល</span> <b>lo</b>, <span class="deva">វ</span> <b>vo</b>.</p>',eg:[['យ','yo','y + o'],['រ','ro','r + o'],['ល','lo','l + o'],['វ','vo','v + o']]},
{t:'mc',q:'What sound does this letter make?',d:'យ',r:'yo',o:['yo','ro','lo','vo'],a:0},
{t:'mc',q:'And this one?',d:'រ',r:'ro',o:['ro','lo','yo','vo'],a:0},
{t:'note',tag:'S, h & the quiet one',q:'ស ហ ឡ អ',body:'<p><span class="deva">ស</span> <b>sa</b>, <span class="deva">ហ</span> <b>ha</b>, <span class="deva">ឡ</span> <b>la</b> — all a-series.</p><p><span class="deva">អ</span> is special: a silent seat for vowels, said <b>a</b> on its own. Khmer children learn vowels on it: អា អី អូ.</p>',eg:[['ស','sa','s + a'],['ហ','ha','h + a'],['អ','a','silent base']]},
{t:'mc',q:'What sound does this letter make?',d:'ស',r:'sa',o:['sa','ha','la','cha'],a:0},
{t:'mc',q:'And this one?',d:'ហ',r:'ha',o:['ha','sa','a','kha'],a:0},
{t:'mc',q:'And this one?',d:'អ',r:'a',o:['a (silent base)','ha','ngo','ro'],a:0},
{t:'mc',q:'And this one?',d:'ល',r:'lo',o:['lo','ro','la','yo'],a:0}]},
{id:'km_c4_2',emoji:'ស',title:'Hear them',step:'recognize',meta:'Hear & spot the last letters',vocab:[],ex:[
{t:'li',q:'Listen — which letter?',say:'ស',o:['ស','ហ','ល','យ'],a:0},
{t:'li',q:'Listen — which letter?',say:'រ',o:['រ','ល','យ','វ'],a:0},
{t:'mc',q:'Which letter says vo?',o:['វ','យ','រ','ល'],a:0},
{t:'mc',q:'Which letter is the silent base?',o:['អ','ហ','ស','ឡ'],a:0},
{t:'li',q:'Listen — which letter?',say:'ហ',o:['ហ','ស','អ','ខ'],a:0},
{t:'li',q:'Listen — which letter?',say:'យ',o:['យ','វ','រ','ល'],a:0},
{t:'mc',q:'ល and ឡ both say l. ឡ is…',d:'ឡ',r:'la',o:['a-series','o-series','silent','a vowel'],a:0}]},
{id:'km_c4_3',emoji:'ស',title:'Build it',step:'build',meta:'Match & pick',vocab:[],ex:[
{t:'match',q:'Match letter and sound',pairs:[['យ','yo'],['រ','ro'],['ល','lo'],['វ','vo']]},
{t:'match',q:'Match letter and sound',pairs:[['ស','sa'],['ហ','ha'],['ឡ','la'],['អ','a']]},
{t:'mc',q:'Which letter says ro?',o:['រ','ល','យ','ឡ'],a:0},
{t:'li',q:'Listen — which letter?',say:'វ',o:['វ','យ','ព','ភ'],a:0},
{t:'mc',q:'Which letter says sa?',o:['ស','ហ','ច','ឆ'],a:0},
{t:'mc',q:'Vowel drills like អា អី live on which letter?',o:['អ','ហ','ក','ង'],a:0}]},
{id:'km_c4_4',emoji:'ស',title:'Mix it',step:'mix',meta:'All 33 in play',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'វ',r:'vo',o:['vo','yo','ro','lo'],a:0},
{t:'li',q:'Listen — which letter?',say:'ឡ',o:['ឡ','ល','រ','ហ'],a:0},
{t:'mc',q:'Which letter says ha?',o:['ហ','ស','អ','ឃ'],a:0},
{t:'li',q:'Listen — which letter?',say:'អ',o:['អ','ហ','ស','យ'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['ស','sa'],['រ','ro'],['ម','mo'],['ង','ngo']]},
{t:'mc',q:'Which of these is o-series?',o:['រ','ស','ហ','ឡ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'យ',r:'yo',o:['yo','vo','lo','ngo'],a:0}]},
{id:'km_c4_5',emoji:'ស',title:'Checkpoint',step:'checkpoint',meta:'All 33 consonants met',vocab:[],ex:[
{t:'mc',q:'What sound does this letter make?',d:'ស',r:'sa',o:['sa','ha','la','a'],a:0},
{t:'li',q:'Listen — which letter?',say:'ល',o:['ល','ឡ','រ','យ'],a:0},
{t:'mc',q:'Which letter is the silent vowel seat?',o:['អ','ស','ហ','វ'],a:0},
{t:'mc',q:'What sound does this letter make?',d:'រ',r:'ro',o:['ro','lo','yo','vo'],a:0},
{t:'li',q:'Listen — which letter?',say:'ស',o:['ស','ហ','ថ','ច'],a:0},
{t:'match',q:'Match letter and sound',pairs:[['យ','yo'],['វ','vo'],['ហ','ha'],['អ','a'],['ឡ','la']]},
{t:'mc',q:'How many consonants does Khmer have?',o:['33','26','40','12'],a:0}]},

{id:'km_v1',emoji:'ា',title:'Vowels I',step:'learn',meta:'ា ិ ី ុ ូ េ — one sign, two sounds',vocab:[['អា','aa','vowel: aa'],['អី','ei','vowel: ei'],['អុ','o','vowel: o (short)'],['អូ','ou','vowel: ou (long)'],['អេ','e','vowel: e'],['តា','taa','grandfather'],['ទា','tea','duck'],['បាយ','bay','rice / cooked rice'],['ចេក','chek','banana'],['បី','bei','three'],['កូន','koun','child']],ex:[
{t:'note',tag:'How vowels attach',q:'Vowel signs',body:'<p>Khmer vowels are <b>signs that attach to a consonant</b> — after it (<span class="deva">កា</span>), on top (<span class="deva">កី</span>), underneath (<span class="deva">កូ</span>), or even <b>in front</b>: in <span class="deva">ចេក</span> (banana) the <span class="deva">េ</span> is written before the <span class="deva">ច</span> but read after it!</p>',tip:'You never write vowels alone — they always ride a consonant.'},
{t:'note',tag:'One sign, two sounds',q:'កា vs គា',body:'<p>Here is the series magic: the same sign <span class="deva">ា</span> says <b>aa</b> after an a-series letter but <b>ea</b> after an o-series letter.</p><p><span class="deva">តា</span> <b>taa</b> = grandfather · <span class="deva">ទា</span> <b>tea</b> = duck. Same vowel sign — different series, different sound.</p>',eg:[['តា','taa','grandfather (a-series)'],['ទា','tea','duck (o-series)']]},
{t:'mc',q:'How is this read?',d:'កា',r:'kaa',o:['kaa','kea','ko','ke'],a:0},
{t:'mc',q:'And this?',d:'គា',r:'kea',o:['kea','kaa','kou','kei'],a:0},
{t:'mc',q:'What does បាយ mean?',d:'បាយ',r:'bay',o:['rice','water','banana','duck'],a:0},
{t:'mc',q:'How is this read?',d:'បី',r:'bei',o:['bei','bay','bou','ba'],a:0},
{t:'mc',q:'What does ចេក mean?',d:'ចេក',r:'chek',o:['banana','rice','child','grandfather'],a:0},
{t:'mc',q:'What does កូន mean?',d:'កូន',r:'koun',o:['child','cow','duck','three'],a:0}]},
{id:'km_v1_2',emoji:'ា',title:'Hear the vowels',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'តា',o:['តា','ទា','បី','កា'],a:0},
{t:'li',q:'Listen — which word?',say:'បាយ',o:['បាយ','បី','ចេក','ទា'],a:0},
{t:'mc',q:'Which word says tea (duck)?',o:['ទា','តា','ចេក','កូន'],a:0},
{t:'li',q:'Listen — which word?',say:'ចេក',o:['ចេក','បាយ','កូន','តា'],a:0},
{t:'mc',q:'Which word says koun (child)?',o:['កូន','គោ','ចេក','បី'],a:0},
{t:'li',q:'Listen — which word?',say:'បី',o:['បី','បាយ','តា','ទា'],a:0},
{t:'mc',q:'ា after an o-series letter sounds like…',o:['ea','aa','ou','ai'],a:0}]},
{id:'km_v1_3',emoji:'ា',title:'Build words',step:'build',meta:'Match & complete',vocab:[],ex:[
{t:'match',q:'Match Khmer and meaning',pairs:[['បាយ','rice'],['ចេក','banana'],['តា','grandfather'],['ទា','duck'],['កូន','child']]},
{t:'mc',q:'Which word is bei (three)?',o:['បី','បាយ','ប','បូ'],a:0},
{t:'fill',q:'Complete: grandfather = ___',s:'___',o:['តា','ទា','កា','គា'],a:0},
{t:'li',q:'Listen — which word?',say:'កូន',o:['កូន','ចេក','តា','បាយ'],a:0},
{t:'match',q:'Match sound and word',pairs:[['taa','តា'],['tea','ទា'],['bay','បាយ'],['bei','បី']]},
{t:'mc',q:'How is this read?',d:'ទូ',r:'tu',o:['tu','tou','taa','tei'],a:0}]},
{id:'km_v1_4',emoji:'ា',title:'Mix it',step:'mix',meta:'Letters + vowels together',vocab:[],ex:[
{t:'mc',q:'How is this read?',d:'តា',r:'taa',o:['taa','tea','ta','tou'],a:0},
{t:'li',q:'Listen — which word?',say:'ទា',o:['ទា','តា','បី','គា'],a:0},
{t:'mc',q:'What does បី mean?',d:'បី',r:'bei',o:['three','rice','two','child'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['កូន','child'],['បី','three'],['ចេក','banana'],['បាយ','rice']]},
{t:'li',q:'Listen — which word?',say:'តា',o:['តា','កា','ទា','បា'],a:0},
{t:'mc',q:'The vowel that is written before its consonant is…',o:['េ','ា','ូ','ី'],a:0},
{t:'mc',q:'What does បាយ mean?',d:'បាយ',r:'bay',o:['rice','banana','duck','house'],a:0}]},
{id:'km_v1_5',emoji:'ា',title:'Checkpoint',step:'checkpoint',meta:'First vowels mastered?',vocab:[],ex:[
{t:'mc',q:'How is this read?',d:'គា',r:'kea',o:['kea','kaa','kou','kuo'],a:0},
{t:'li',q:'Listen — which word?',say:'ចេក',o:['ចេក','បាយ','បី','កូន'],a:0},
{t:'mc',q:'Which word says taa (grandfather)?',o:['តា','ទា','កា','ណា'],a:0},
{t:'mc',q:'What does កូន mean?',d:'កូន',r:'koun',o:['child','cow','fish','moon'],a:0},
{t:'li',q:'Listen — which word?',say:'បាយ',o:['បាយ','បី','ទា','តា'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['តា','grandfather'],['ទា','duck'],['បី','three'],['ចេក','banana'],['កូន','child']]},
{t:'mc',q:'Why do តា and ទា sound different?',o:['different consonant series','different vowels','one is a question','loudness'],a:0}]},

{id:'km_v2',emoji:'ោ',title:'Vowels II',step:'learn',meta:'ែ ៃ ោ ះ ំ ួ — and real words',vocab:[['អែ','ae','vowel: ae'],['អៃ','ai','vowel: ai'],['អោ','ao','vowel: ao'],['ខែ','khae','month / moon'],['ដៃ','dai','hand'],['គោ','kou','cow'],['កោះ','kaoh','island'],['សេះ','seh','horse'],['មួយ','muoy','one'],['ដំរី','damrei','elephant'],['ចាំ','cham','to wait / remember']],ex:[
{t:'note',tag:'Wrap-around vowels',q:'ោ hugs its letter',body:'<p>Some vowels wrap <b>around</b> the consonant: <span class="deva">គោ</span> <b>kou</b> (cow) has a piece on the left and a piece on the right of <span class="deva">គ</span>.</p><p><span class="deva">ខែ</span> <b>khae</b> = month or moon · <span class="deva">ដៃ</span> <b>dai</b> = hand.</p>',eg:[['គោ','kou','cow'],['ខែ','khae','month / moon'],['ដៃ','dai','hand']]},
{t:'note',tag:'Tiny finishers',q:'ំ and ះ',body:'<p>Two small signs end a syllable: the circle <span class="deva">ំ</span> adds <b>m</b> — <span class="deva">ដំរី</span> <b>damrei</b> (elephant); the pair of dots <span class="deva">ះ</span> adds a breathy <b>h</b> — <span class="deva">សេះ</span> <b>seh</b> (horse), <span class="deva">កោះ</span> <b>kaoh</b> (island).</p>',eg:[['ដំរី','damrei','elephant'],['សេះ','seh','horse'],['កោះ','kaoh','island']]},
{t:'mc',q:'What does ខែ mean?',d:'ខែ',r:'khae',o:['month / moon','hand','cow','island'],a:0},
{t:'mc',q:'How is this read?',d:'ដៃ',r:'dai',o:['dai','dae','dao','dam'],a:0},
{t:'mc',q:'What does គោ mean?',d:'គោ',r:'kou',o:['cow','horse','elephant','duck'],a:0},
{t:'mc',q:'What does ដំរី mean?',d:'ដំរី',r:'damrei',o:['elephant','island','moon','hand'],a:0},
{t:'mc',q:'How is this read?',d:'មួយ',r:'muoy',o:['muoy','mai','mou','mea'],a:0},
{t:'mc',q:'What does សេះ mean?',d:'សេះ',r:'seh',o:['horse','cow','fish','dog'],a:0}]},
{id:'km_v2_2',emoji:'ោ',title:'Hear them',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'គោ',o:['គោ','ខែ','ដៃ','កោះ'],a:0},
{t:'li',q:'Listen — which word?',say:'ដៃ',o:['ដៃ','ខែ','សេះ','គោ'],a:0},
{t:'mc',q:'Which word says khae (month)?',o:['ខែ','ដៃ','គោ','ចាំ'],a:0},
{t:'li',q:'Listen — which word?',say:'ដំរី',o:['ដំរី','មួយ','សេះ','កោះ'],a:0},
{t:'mc',q:'Which word says kaoh (island)?',o:['កោះ','គោ','សេះ','ខែ'],a:0},
{t:'li',q:'Listen — which word?',say:'មួយ',o:['មួយ','ដៃ','ចាំ','បី'],a:0},
{t:'mc',q:'Which word says cham (to wait)?',o:['ចាំ','ចេក','ខែ','ដៃ'],a:0}]},
{id:'km_v2_3',emoji:'ោ',title:'Build words',step:'build',meta:'Match & complete',vocab:[],ex:[
{t:'match',q:'Match Khmer and meaning',pairs:[['ខែ','month'],['ដៃ','hand'],['គោ','cow'],['សេះ','horse'],['ដំរី','elephant']]},
{t:'fill',q:'Complete: island = ___',s:'___',o:['កោះ','គោ','ខែ','សេះ'],a:0},
{t:'mc',q:'Which word is muoy (one)?',o:['មួយ','បី','ខែ','ចាំ'],a:0},
{t:'li',q:'Listen — which word?',say:'សេះ',o:['សេះ','កោះ','ខែ','គោ'],a:0},
{t:'match',q:'Match sound and word',pairs:[['khae','ខែ'],['dai','ដៃ'],['kou','គោ'],['kaoh','កោះ']]},
{t:'mc',q:'The little circle ំ adds which sound?',o:['m','h','ng','s'],a:0}]},
{id:'km_v2_4',emoji:'ោ',title:'Mix it',step:'mix',meta:'All vowels together',vocab:[],ex:[
{t:'mc',q:'What does ដៃ mean?',d:'ដៃ',r:'dai',o:['hand','foot','moon','cow'],a:0},
{t:'li',q:'Listen — which word?',say:'ខែ',o:['ខែ','ដៃ','គោ','សេះ'],a:0},
{t:'mc',q:'How is this read?',d:'ចាំ',r:'cham',o:['cham','chaa','chai','chek'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['មួយ','one'],['កោះ','island'],['ដំរី','elephant'],['គោ','cow']]},
{t:'li',q:'Listen — which word?',say:'កោះ',o:['កោះ','គោ','ចាំ','ខែ'],a:0},
{t:'mc',q:'What does មួយ mean?',d:'មួយ',r:'muoy',o:['one','two','three','month'],a:0},
{t:'mc',q:'ះ at the end of a word adds…',o:['a breathy h','an m','an ng','nothing'],a:0}]},
{id:'km_v2_5',emoji:'ោ',title:'Checkpoint',step:'checkpoint',meta:'You can read syllables!',vocab:[],ex:[
{t:'mc',q:'What does គោ mean?',d:'គោ',r:'kou',o:['cow','horse','island','moon'],a:0},
{t:'li',q:'Listen — which word?',say:'ដំរី',o:['ដំរី','សេះ','មួយ','គោ'],a:0},
{t:'mc',q:'Which word says dai (hand)?',o:['ដៃ','ខែ','តា','ចាំ'],a:0},
{t:'mc',q:'What does កោះ mean?',d:'កោះ',r:'kaoh',o:['island','cow','wait','hand'],a:0},
{t:'li',q:'Listen — which word?',say:'ចាំ',o:['ចាំ','ខែ','ដៃ','មួយ'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['សេះ','horse'],['ដំរី','elephant'],['ខែ','month'],['មួយ','one'],['ដៃ','hand']]},
{t:'mc',q:'What does ចាំ mean?',d:'ចាំ',r:'cham',o:['to wait / remember','to eat','to go','to sleep'],a:0}]},

{id:'km_sub',emoji:'្',title:'Stacked letters',step:'learn',meta:'ជើង — consonants that tuck underneath',vocab:[['ខ្ញុំ','khnhom','I / me'],['ផ្ទះ','phteah','house'],['ឆ្កែ','chhkae','dog'],['ឆ្មា','chhma','cat'],['ភ្នំ','phnom','mountain'],['ថ្ងៃ','thngai','day / sun'],['ត្រី','trei','fish'],['ស្រែ','srae','rice field'],['ផ្លូវ','phlov','road'],['ឆ្នាំ','chhnam','year']],ex:[
{t:'note',tag:'Letters that stack',q:'Meet the ជើង',body:'<p>Two consonants can share one syllable: the second one shrinks and <b>tucks underneath</b> the first. Khmer calls this its <b>ជើង</b> (foot).</p><p><span class="deva">ភ</span> + <span class="deva">ន</span> = <span class="deva">ភ្ន</span> — say them together: <span class="deva">ភ្នំ</span> <b>phnom</b> (mountain), as in Phnom Penh!</p>',eg:[['ភ្នំ','phnom','mountain'],['ផ្ទះ','phteah','house']]},
{t:'note',tag:'Words you will use daily',q:'ខ្ញុំ — I',body:'<p><span class="deva">ខ្ញុំ</span> <b>khnhom</b> means <b>I / me</b> — the most useful stacked word in Khmer.</p><p>Animals too: <span class="deva">ឆ្កែ</span> <b>chhkae</b> (dog), <span class="deva">ឆ្មា</span> <b>chhma</b> (cat), <span class="deva">ត្រី</span> <b>trei</b> (fish).</p>',eg:[['ខ្ញុំ','khnhom','I / me'],['ឆ្កែ','chhkae','dog'],['ឆ្មា','chhma','cat']]},
{t:'mc',q:'What does ខ្ញុំ mean?',d:'ខ្ញុំ',r:'khnhom',o:['I / me','you','house','dog'],a:0},
{t:'mc',q:'How is this read?',d:'ភ្នំ',r:'phnom',o:['phnom','phteah','phlov','pheak'],a:0},
{t:'mc',q:'What does ផ្ទះ mean?',d:'ផ្ទះ',r:'phteah',o:['house','road','mountain','year'],a:0},
{t:'mc',q:'What does ឆ្កែ mean?',d:'ឆ្កែ',r:'chhkae',o:['dog','cat','fish','cow'],a:0},
{t:'mc',q:'What does ថ្ងៃ mean?',d:'ថ្ងៃ',r:'thngai',o:['day / sun','night','moon','year'],a:0},
{t:'mc',q:'How is this read?',d:'ត្រី',r:'trei',o:['trei','tei','ri','tri-i'],a:0}]},
{id:'km_sub_2',emoji:'្',title:'Hear the stacks',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ខ្ញុំ',o:['ខ្ញុំ','ភ្នំ','ថ្ងៃ','ផ្ទះ'],a:0},
{t:'li',q:'Listen — which word?',say:'ឆ្មា',o:['ឆ្មា','ឆ្កែ','ត្រី','ស្រែ'],a:0},
{t:'mc',q:'Which word says phteah (house)?',o:['ផ្ទះ','ផ្លូវ','ភ្នំ','ថ្ងៃ'],a:0},
{t:'li',q:'Listen — which word?',say:'ថ្ងៃ',o:['ថ្ងៃ','ឆ្នាំ','ត្រី','ខ្ញុំ'],a:0},
{t:'mc',q:'Which word says phlov (road)?',o:['ផ្លូវ','ផ្ទះ','ភ្នំ','ស្រែ'],a:0},
{t:'li',q:'Listen — which word?',say:'ត្រី',o:['ត្រី','ស្រែ','ឆ្មា','ឆ្កែ'],a:0},
{t:'mc',q:'Which word says chhnam (year)?',o:['ឆ្នាំ','ឆ្មា','ឆ្កែ','ចាំ'],a:0}]},
{id:'km_sub_3',emoji:'្',title:'Build the stacks',step:'build',meta:'Match & complete',vocab:[],ex:[
{t:'match',q:'Match Khmer and meaning',pairs:[['ខ្ញុំ','I / me'],['ផ្ទះ','house'],['ឆ្កែ','dog'],['ឆ្មា','cat'],['ភ្នំ','mountain']]},
{t:'fill',q:'Complete: fish = ___',s:'___',o:['ត្រី','ស្រែ','ថ្ងៃ','ឆ្នាំ'],a:0},
{t:'mc',q:'ភ + ន stacked gives…',o:['ភ្ន','ភន','នភ','ភ្ភ'],a:0},
{t:'li',q:'Listen — which word?',say:'ភ្នំ',o:['ភ្នំ','ខ្ញុំ','ផ្ទះ','ឆ្នាំ'],a:0},
{t:'match',q:'Match sound and word',pairs:[['thngai','ថ្ងៃ'],['srae','ស្រែ'],['phlov','ផ្លូវ'],['chhnam','ឆ្នាំ']]},
{t:'mc',q:'Real Khmer writing separates words with…',o:['nothing — no spaces','commas','dots','wide gaps'],a:0}]},
{id:'km_sub_4',emoji:'្',title:'Mix it',step:'mix',meta:'Stacks everywhere',vocab:[],ex:[
{t:'mc',q:'What does ស្រែ mean?',d:'ស្រែ',r:'srae',o:['rice field','road','river','house'],a:0},
{t:'li',q:'Listen — which word?',say:'ផ្ទះ',o:['ផ្ទះ','ផ្លូវ','ភ្នំ','ត្រី'],a:0},
{t:'mc',q:'Which word says chhma (cat)?',o:['ឆ្មា','ឆ្កែ','ឆ្នាំ','ត្រី'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['ថ្ងៃ','day'],['ឆ្នាំ','year'],['ផ្លូវ','road'],['ត្រី','fish']]},
{t:'li',q:'Listen — which word?',say:'ស្រែ',o:['ស្រែ','ត្រី','ឆ្មា','ថ្ងៃ'],a:0},
{t:'mc',q:'What does ភ្នំ mean?',d:'ភ្នំ',r:'phnom',o:['mountain','city','house','island'],a:0},
{t:'mc',q:'Phnom Penh literally starts with the word for…',o:['mountain','river','king','market'],a:0}]},
{id:'km_sub_5',emoji:'្',title:'Checkpoint',step:'checkpoint',meta:'You can read Khmer!',vocab:[],ex:[
{t:'note',tag:'One last sign',q:'The little ់',body:'<p>You will often see a tiny <span class="deva">់</span> on the last letter of a word — it clips the vowel short: <span class="deva">មាន់</span> <b>moan</b> (chicken), <span class="deva">រស់</span> <b>ruos</b> (to live).</p><p>From here you will see Khmer script everywhere. You can always tap the speaker to hear anything, and toggle romanization in Settings.</p>'},
{t:'mc',q:'What does ខ្ញុំ mean?',d:'ខ្ញុំ',r:'khnhom',o:['I / me','you','they','name'],a:0},
{t:'li',q:'Listen — which word?',say:'ឆ្កែ',o:['ឆ្កែ','ឆ្មា','គោ','សេះ'],a:0},
{t:'mc',q:'Which word says thngai (day)?',o:['ថ្ងៃ','ឆ្នាំ','ខែ','ដៃ'],a:0},
{t:'mc',q:'What does ផ្លូវ mean?',d:'ផ្លូវ',r:'phlov',o:['road','house','field','year'],a:0},
{t:'li',q:'Listen — which word?',say:'ឆ្នាំ',o:['ឆ្នាំ','ចាំ','ឆ្មា','ថ្ងៃ'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['ត្រី','fish'],['ស្រែ','rice field'],['ផ្ទះ','house'],['ភ្នំ','mountain'],['ឆ្មា','cat']]},
{t:'mc',q:'The small sign ្ (coeng) does what?',o:['tucks the next consonant underneath','makes a vowel long','marks a question','ends a sentence'],a:0}]},

/* ===================== ZONE 2 · FOUNDATIONS ===================== */
{id:'km_greet',emoji:'🙏',title:'Hello & thank you',step:'learn',meta:'Your first Khmer words',vocab:[['សួស្តី','suosdey','hello'],['ជំរាបសួរ','chumreap suor','hello (formal, with a bow)'],['អរគុណ','arkun','thank you'],['បាទ','baat','yes (men say)'],['ចាស','chaah','yes (women say)'],['ទេ','te','no / not'],['លាហើយ','lea haey','goodbye'],['សុខសប្បាយទេ','sok sabay te','how are you?'],['សុខសប្បាយ','sok sabay','fine / well']],ex:[
{t:'note',tag:'Say hello',q:'សួស្តី!',body:'<p><span class="deva">សួស្តី</span> <b>suosdey</b> — hello, any time of day. For elders or formal moments use <span class="deva">ជំរាបសួរ</span> <b>chumreap suor</b> with palms together.</p><p><span class="deva">អរគុណ</span> <b>arkun</b> = thank you.</p>',eg:[['សួស្តី','suosdey','hello'],['អរគុណ','arkun','thank you']]},
{t:'note',tag:'Yes depends on you',q:'បាទ / ចាស',body:'<p>Khmer has two words for <b>yes</b>: men say <span class="deva">បាទ</span> <b>baat</b>, women say <span class="deva">ចាស</span> <b>chaah</b>.</p><p><b>No</b> is <span class="deva">ទេ</span> <b>te</b> — it also tags the end of negative sentences.</p>',eg:[['បាទ','baat','yes (men)'],['ចាស','chaah','yes (women)'],['ទេ','te','no']]},
{t:'mc',q:'What does សួស្តី mean?',d:'សួស្តី',r:'suosdey',o:['hello','goodbye','thank you','yes'],a:0},
{t:'mc',q:'What does អរគុណ mean?',d:'អរគុណ',r:'arkun',o:['thank you','hello','sorry','no'],a:0},
{t:'mc',q:'A man says yes with…',o:['បាទ','ចាស','ទេ','សួស្តី'],a:0},
{t:'mc',q:'What does ទេ mean?',d:'ទេ',r:'te',o:['no / not','yes','maybe','please'],a:0},
{t:'mc',q:'How do you ask how are you?',d:'សុខសប្បាយទេ',r:'sok sabay te',o:['sok sabay te','suosdey','arkun','lea haey'],a:0},
{t:'mc',q:'What does លាហើយ mean?',d:'លាហើយ',r:'lea haey',o:['goodbye','hello','welcome','thank you'],a:0}]},
{id:'km_greet_2',emoji:'🙏',title:'Hear the greetings',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'សួស្តី',o:['សួស្តី','អរគុណ','លាហើយ','ចាស'],a:0},
{t:'li',q:'Listen — which word?',say:'អរគុណ',o:['អរគុណ','សួស្តី','បាទ','ទេ'],a:0},
{t:'mc',q:'Which word means goodbye?',o:['លាហើយ','សួស្តី','ចាស','បាទ'],a:0},
{t:'li',q:'Listen — which word?',say:'បាទ',o:['បាទ','ចាស','ទេ','តា'],a:0},
{t:'mc',q:'A woman says yes with…',o:['ចាស','បាទ','ទេ','អរគុណ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'សុខសប្បាយទេ',o:['សុខសប្បាយទេ','សុខសប្បាយ','សួស្តី','លាហើយ'],a:0},
{t:'mc',q:'Someone asks sok sabay te? You feel fine. Reply…',o:['សុខសប្បាយ','ទេ','លាហើយ','សុំទោស'],a:0}]},
{id:'km_greet_3',emoji:'🙏',title:'Build greetings',step:'build',meta:'Match & assemble',vocab:[],ex:[
{t:'match',q:'Match Khmer and meaning',pairs:[['សួស្តី','hello'],['អរគុណ','thank you'],['លាហើយ','goodbye'],['ទេ','no'],['បាទ','yes (men)']]},
{t:'wb',q:'Build: how are you?',a:['សុខសប្បាយ','ទេ'],pool:['សុខសប្បាយ','ទេ','អរគុណ','សួស្តី'],r:'sok sabay te'},
{t:'fill',q:'Complete: thank you = ___',s:'___',o:['អរគុណ','សួស្តី','ចាស','ទេ'],a:0},
{t:'li',q:'Listen — which word?',say:'លាហើយ',o:['លាហើយ','សួស្តី','ចាស','អរគុណ'],a:0},
{t:'match',q:'Match sound and word',pairs:[['suosdey','សួស្តី'],['arkun','អរគុណ'],['chaah','ចាស'],['te','ទេ']]},
{t:'mc',q:'The formal hello with palms together is…',o:['ជំរាបសួរ','សួស្តី','លាហើយ','សុខសប្បាយ'],a:0}]},
{id:'km_greet_4',emoji:'🙏',title:'Mix it',step:'mix',meta:'Greetings in action',vocab:[],ex:[
{t:'mc',q:'You meet a friend in the morning. Say…',o:['សួស្តី','លាហើយ','ទេ','សុំទោស'],a:0},
{t:'li',q:'Listen — which word?',say:'ចាស',o:['ចាស','បាទ','ចា','ទា'],a:0},
{t:'mc',q:'Someone hands you tea. Say…',o:['អរគុណ','លាហើយ','ទេ','សួស្តី'],a:0},
{t:'wb',q:'Build: hello, how are you?',a:['សួស្តី','សុខសប្បាយ','ទេ'],pool:['សួស្តី','សុខសប្បាយ','ទេ','អរគុណ','បាទ'],r:'suosdey sok sabay te'},
{t:'li',q:'Listen — which phrase?',say:'សុខសប្បាយ',o:['សុខសប្បាយ','សុខសប្បាយទេ','សួស្តី','អរគុណ'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['ជំរាបសួរ','hello (formal)'],['សុខសប្បាយ','fine / well'],['លាហើយ','goodbye'],['អរគុណ','thank you']]},
{t:'mc',q:'Leaving your friends for the day, say…',o:['លាហើយ','សួស្តី','ចាស','សុខសប្បាយទេ'],a:0}]},
{id:'km_greet_5',emoji:'🙏',title:'Checkpoint',step:'checkpoint',meta:'Greetings mastered?',vocab:[],ex:[
{t:'mc',q:'What does អរគុណ mean?',d:'អរគុណ',r:'arkun',o:['thank you','hello','goodbye','sorry'],a:0},
{t:'li',q:'Listen — which word?',say:'សួស្តី',o:['សួស្តី','លាហើយ','សុខសប្បាយ','ជំរាបសួរ'],a:0},
{t:'mc',q:'A woman answers yes with…',o:['ចាស','បាទ','ទេ','ណា'],a:0},
{t:'wb',q:'Build: how are you?',a:['សុខសប្បាយ','ទេ'],pool:['សុខសប្បាយ','ទេ','លាហើយ','បាទ'],r:'sok sabay te'},
{t:'li',q:'Listen — which word?',say:'ទេ',o:['ទេ','ទា','តា','ចាស'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['សួស្តី','hello'],['លាហើយ','goodbye'],['អរគុណ','thank you'],['សុខសប្បាយទេ','how are you?'],['បាទ','yes (men)']]},
{t:'mc',q:'What does សុខសប្បាយ mean?',d:'សុខសប្បាយ',r:'sok sabay',o:['fine / well','tired','hungry','busy'],a:0}]},

{id:'km_pron',emoji:'👤',title:'I, you & this',step:'learn',meta:'ខ្ញុំ អ្នក គាត់ + nih & nuh',vocab:[['ខ្ញុំ','khnhom','I / me'],['អ្នក','neak','you'],['គាត់','koat','he / she'],['នាង','neang','she (young woman)'],['យើង','yeung','we'],['ពួកគេ','puok ke','they'],['វា','vea','it'],['នេះ','nih','this'],['នោះ','nuh','that']],ex:[
{t:'note',tag:'People words',q:'ខ្ញុំ and អ្នក',body:'<p><span class="deva">ខ្ញុំ</span> <b>khnhom</b> = I · <span class="deva">អ្នក</span> <b>neak</b> = you (polite and safe in most situations).</p><p><span class="deva">គាត់</span> <b>koat</b> = he or she · <span class="deva">យើង</span> <b>yeung</b> = we · <span class="deva">ពួកគេ</span> <b>puok ke</b> = they.</p>',eg:[['ខ្ញុំ','khnhom','I'],['អ្នក','neak','you'],['គាត់','koat','he / she']]},
{t:'note',tag:'Point at things',q:'នេះ and នោះ',body:'<p><span class="deva">នេះ</span> <b>nih</b> = this (near me) · <span class="deva">នោះ</span> <b>nuh</b> = that (over there).</p><p>They follow the noun: <span class="deva">ផ្ទះនេះ</span> <b>phteah nih</b> = this house.</p>',eg:[['នេះ','nih','this'],['នោះ','nuh','that']]},
{t:'mc',q:'What does ខ្ញុំ mean?',d:'ខ្ញុំ',r:'khnhom',o:['I / me','you','we','they'],a:0},
{t:'mc',q:'What does អ្នក mean?',d:'អ្នក',r:'neak',o:['you','I','he','it'],a:0},
{t:'mc',q:'What does យើង mean?',d:'យើង',r:'yeung',o:['we','they','you','she'],a:0},
{t:'mc',q:'What does នេះ mean?',d:'នេះ',r:'nih',o:['this','that','here','it'],a:0},
{t:'mc',q:'What does គាត់ mean?',d:'គាត់',r:'koat',o:['he / she','it','we','you'],a:0},
{t:'mc',q:'What does ពួកគេ mean?',d:'ពួកគេ',r:'puok ke',o:['they','we','you two','people'],a:0}]},
{id:'km_pron_2',emoji:'👤',title:'Hear the pronouns',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ខ្ញុំ',o:['ខ្ញុំ','អ្នក','យើង','វា'],a:0},
{t:'li',q:'Listen — which word?',say:'អ្នក',o:['អ្នក','នាង','នេះ','គាត់'],a:0},
{t:'mc',q:'Which word means we?',o:['យើង','ពួកគេ','ខ្ញុំ','អ្នក'],a:0},
{t:'li',q:'Listen — which word?',say:'គាត់',o:['គាត់','ពួកគេ','វា','នាង'],a:0},
{t:'mc',q:'Which word means that?',o:['នោះ','នេះ','វា','ណា'],a:0},
{t:'li',q:'Listen — which word?',say:'នេះ',o:['នេះ','នោះ','នាង','ទេ'],a:0},
{t:'mc',q:'Which word means it?',o:['វា','គាត់','នាង','នេះ'],a:0}]},
{id:'km_pron_3',emoji:'👤',title:'Build with pronouns',step:'build',meta:'Match & assemble',vocab:[],ex:[
{t:'match',q:'Match Khmer and meaning',pairs:[['ខ្ញុំ','I'],['អ្នក','you'],['គាត់','he / she'],['យើង','we'],['ពួកគេ','they']]},
{t:'wb',q:'Build: this house',a:['ផ្ទះ','នេះ'],pool:['ផ្ទះ','នេះ','នោះ','ខ្ញុំ'],r:'phteah nih'},
{t:'fill',q:'Complete: ___ សុខសប្បាយ (I am fine)',s:'___ សុខសប្បាយ',o:['ខ្ញុំ','អ្នក','វា','នេះ'],a:0},
{t:'li',q:'Listen — which word?',say:'យើង',o:['យើង','ពួកគេ','នាង','អ្នក'],a:0},
{t:'match',q:'Match sound and word',pairs:[['khnhom','ខ្ញុំ'],['neak','អ្នក'],['nih','នេះ'],['nuh','នោះ']]},
{t:'wb',q:'Build: that dog',a:['ឆ្កែ','នោះ'],pool:['ឆ្កែ','នោះ','នេះ','ឆ្មា'],r:'chhkae nuh'}]},
{id:'km_pron_4',emoji:'👤',title:'Mix it',step:'mix',meta:'Pronouns in sentences',vocab:[],ex:[
{t:'mc',q:'What does នាង mean?',d:'នាង',r:'neang',o:['she (young woman)','he','we','you'],a:0},
{t:'li',q:'Listen — which word?',say:'ពួកគេ',o:['ពួកគេ','យើង','គាត់','អ្នក'],a:0},
{t:'wb',q:'Build: I am fine',a:['ខ្ញុំ','សុខសប្បាយ'],pool:['ខ្ញុំ','សុខសប្បាយ','អ្នក','ទេ'],r:'khnhom sok sabay'},
{t:'mc',q:'ផ្ទះនោះ means…',d:'ផ្ទះនោះ',r:'phteah nuh',o:['that house','this house','my house','a house'],a:0},
{t:'li',q:'Listen — which word?',say:'នោះ',o:['នោះ','នេះ','នាង','ណា'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['វា','it'],['នាង','she'],['នេះ','this'],['នោះ','that']]},
{t:'mc',q:'Which is the polite everyday you?',o:['អ្នក','វា','ពួកគេ','នាង'],a:0}]},
{id:'km_pron_5',emoji:'👤',title:'Checkpoint',step:'checkpoint',meta:'People words mastered?',vocab:[],ex:[
{t:'mc',q:'What does ខ្ញុំ mean?',d:'ខ្ញុំ',r:'khnhom',o:['I / me','you','he','we'],a:0},
{t:'li',q:'Listen — which word?',say:'នាង',o:['នាង','អ្នក','យើង','វា'],a:0},
{t:'wb',q:'Build: this cat',a:['ឆ្មា','នេះ'],pool:['ឆ្មា','នេះ','នោះ','ឆ្កែ'],r:'chhma nih'},
{t:'mc',q:'What does យើង mean?',d:'យើង',r:'yeung',o:['we','they','I','it'],a:0},
{t:'li',q:'Listen — which word?',say:'វា',o:['វា','នាង','ទា','ណា'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['ខ្ញុំ','I'],['អ្នក','you'],['ពួកគេ','they'],['នេះ','this'],['គាត់','he / she']]},
{t:'wb',q:'Build: I am fine (reply politely)',a:['ខ្ញុំ','សុខសប្បាយ','អរគុណ'],pool:['ខ្ញុំ','សុខសប្បាយ','អរគុណ','ទេ','នេះ'],r:'khnhom sok sabay arkun'}]},

{id:'km_num1',emoji:'១',title:'Numbers 0–10',step:'learn',meta:'Count on one hand — literally',vocab:[['សូន្យ','soun','zero (0 ០)'],['មួយ','muoy','one (1 ១)'],['ពីរ','pi','two (2 ២)'],['បី','bei','three (3 ៣)'],['បួន','buon','four (4 ៤)'],['ប្រាំ','pram','five (5 ៥)'],['ប្រាំមួយ','pram muoy','six (6 ៦)'],['ប្រាំពីរ','pram pi','seven (7 ៧)'],['ប្រាំបី','pram bei','eight (8 ៨)'],['ប្រាំបួន','pram buon','nine (9 ៩)'],['ដប់','dop','ten (10 ១០)']],ex:[
{t:'note',tag:'Count to five',q:'មួយ ពីរ បី បួន ប្រាំ',body:'<p><span class="deva">មួយ</span> <b>muoy</b> 1 · <span class="deva">ពីរ</span> <b>pi</b> 2 · <span class="deva">បី</span> <b>bei</b> 3 · <span class="deva">បួន</span> <b>buon</b> 4 · <span class="deva">ប្រាំ</span> <b>pram</b> 5.</p><p>Khmer digits have their own shapes too: ១ ២ ៣ ៤ ៥.</p>',eg:[['មួយ','muoy','1'],['ពីរ','pi','2'],['បី','bei','3'],['បួន','buon','4'],['ប្រាំ','pram','5']]},
{t:'note',tag:'Five plus…',q:'The clever part',body:'<p>Six to nine are literally <b>five + something</b>: <span class="deva">ប្រាំមួយ</span> <b>pram muoy</b> (5+1=6), <span class="deva">ប្រាំពីរ</span> <b>pram pi</b> (5+2=7), <span class="deva">ប្រាំបី</span> <b>pram bei</b> (5+3=8), <span class="deva">ប្រាំបួន</span> <b>pram buon</b> (5+4=9). Ten is <span class="deva">ដប់</span> <b>dop</b>.</p>',eg:[['ប្រាំមួយ','pram muoy','6'],['ដប់','dop','10']]},
{t:'mc',q:'What is មួយ?',d:'មួយ',r:'muoy',o:['1','2','5','10'],a:0},
{t:'mc',q:'What is បួន?',d:'បួន',r:'buon',o:['4','3','8','9'],a:0},
{t:'mc',q:'What is ប្រាំ?',d:'ប្រាំ',r:'pram',o:['5','4','6','10'],a:0},
{t:'mc',q:'What is ប្រាំពីរ?',d:'ប្រាំពីរ',r:'pram pi',o:['7','6','2','9'],a:0},
{t:'mc',q:'What is ដប់?',d:'ដប់',r:'dop',o:['10','5','1','0'],a:0},
{t:'mc',q:'Which digit is ៣?',o:['3','2','8','6'],a:0}]},
{id:'km_num1_2',emoji:'១',title:'Hear the numbers',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'ពីរ',o:['ពីរ','បី','មួយ','បួន'],a:0},
{t:'li',q:'Listen — which number?',say:'ប្រាំ',o:['ប្រាំ','ប្រាំមួយ','បួន','ដប់'],a:0},
{t:'mc',q:'Which word is 8?',o:['ប្រាំបី','ប្រាំបួន','បី','ប្រាំពីរ'],a:0},
{t:'li',q:'Listen — which number?',say:'ដប់',o:['ដប់','ប្រាំ','ទា','បួន'],a:0},
{t:'mc',q:'Which word is 0?',o:['សូន្យ','មួយ','ដប់','បួន'],a:0},
{t:'li',q:'Listen — which number?',say:'ប្រាំបួន',o:['ប្រាំបួន','ប្រាំបី','បួន','ប្រាំ'],a:0},
{t:'mc',q:'Which digit is ៧?',o:['7','1','9','4'],a:0}]},
{id:'km_num1_3',emoji:'១',title:'Build numbers',step:'build',meta:'Match & compose',vocab:[],ex:[
{t:'match',q:'Match number and word',pairs:[['មួយ','1'],['ពីរ','2'],['បី','3'],['បួន','4'],['ប្រាំ','5']]},
{t:'wb',q:'Build: six (5+1)',a:['ប្រាំ','មួយ'],pool:['ប្រាំ','មួយ','បី','ដប់'],r:'pram muoy'},
{t:'wb',q:'Build: eight (5+3)',a:['ប្រាំ','បី'],pool:['ប្រាំ','បី','បួន','ពីរ'],r:'pram bei'},
{t:'match',q:'Match digit and word',pairs:[['១','មួយ'],['៣','បី'],['៥','ប្រាំ'],['១០','ដប់']]},
{t:'fill',q:'Complete: 9 = ប្រាំ + ___',s:'ប្រាំ___',o:['បួន','បី','ពីរ','មួយ'],a:0},
{t:'mc',q:'Which word is 4?',o:['បួន','បី','ប្រាំ','ពីរ'],a:0}]},
{id:'km_num1_4',emoji:'១',title:'Mix it',step:'mix',meta:'0–10 in action',vocab:[],ex:[
{t:'mc',q:'What is ប្រាំមួយ?',d:'ប្រាំមួយ',r:'pram muoy',o:['6','5','7','1'],a:0},
{t:'li',q:'Listen — which number?',say:'បួន',o:['បួន','បី','ប្រាំបួន','ពីរ'],a:0},
{t:'mc',q:'ត្រី បី means…',d:'ត្រី បី',r:'trei bei',o:['three fish','two fish','big fish','fish soup'],a:0},
{t:'match',q:'Match digit and word',pairs:[['២','ពីរ'],['៤','បួន'],['៦','ប្រាំមួយ'],['៩','ប្រាំបួន']]},
{t:'li',q:'Listen — which number?',say:'មួយ',o:['មួយ','ពីរ','ដប់','បួន'],a:0},
{t:'wb',q:'Build: seven (5+2)',a:['ប្រាំ','ពីរ'],pool:['ប្រាំ','ពីរ','មួយ','បី'],r:'pram pi'},
{t:'mc',q:'What is សូន្យ?',d:'សូន្យ',r:'soun',o:['0','10','5','100'],a:0}]},
{id:'km_num1_5',emoji:'១',title:'Checkpoint',step:'checkpoint',meta:'Count to ten!',vocab:[],ex:[
{t:'mc',q:'What is ប្រាំបី?',d:'ប្រាំបី',r:'pram bei',o:['8','7','9','3'],a:0},
{t:'li',q:'Listen — which number?',say:'បី',o:['បី','ពីរ','បួន','ប្រាំ'],a:0},
{t:'wb',q:'Build: nine (5+4)',a:['ប្រាំ','បួន'],pool:['ប្រាំ','បួន','បី','មួយ'],r:'pram buon'},
{t:'mc',q:'Which digit is ៥?',o:['5','6','4','9'],a:0},
{t:'li',q:'Listen — which number?',say:'ប្រាំពីរ',o:['ប្រាំពីរ','ប្រាំបី','ពីរ','ប្រាំ'],a:0},
{t:'match',q:'Match number and word',pairs:[['ដប់','10'],['ប្រាំមួយ','6'],['បួន','4'],['សូន្យ','0'],['ពីរ','2']]},
{t:'mc',q:'The Khmer trick for 6–9 is…',o:['five + something','ten minus something','doubling','new words'],a:0}]},

{id:'km_num2',emoji:'២',title:'Numbers 11–100',step:'learn',meta:'Tens, and money-counting',vocab:[['ដប់មួយ','dop muoy','eleven (10+1)'],['ដប់ប្រាំ','dop pram','fifteen (10+5)'],['ម្ភៃ','mphei','twenty'],['សាមសិប','samsep','thirty'],['សែសិប','saesep','forty'],['ហាសិប','hasep','fifty'],['ហុកសិប','hoksep','sixty'],['ចិតសិប','chetsep','seventy'],['ប៉ែតសិប','paetsep','eighty'],['កៅសិប','kavsep','ninety'],['មួយរយ','muoy roy','one hundred']],ex:[
{t:'note',tag:'The teens',q:'ដប់ + number',body:'<p>Teens are simply <b>ten + digit</b>: <span class="deva">ដប់មួយ</span> <b>dop muoy</b> 11, <span class="deva">ដប់ពីរ</span> <b>dop pi</b> 12 … <span class="deva">ដប់ប្រាំបួន</span> <b>dop pram buon</b> 19.</p>',eg:[['ដប់មួយ','dop muoy','11'],['ដប់ប្រាំ','dop pram','15']]},
{t:'note',tag:'The tens',q:'ម្ភៃ and the -sep family',body:'<p>Twenty is special: <span class="deva">ម្ភៃ</span> <b>mphei</b>. From thirty the tens rhyme: <span class="deva">សាមសិប</span> <b>samsep</b> 30, <span class="deva">សែសិប</span> <b>saesep</b> 40, <span class="deva">ហាសិប</span> <b>hasep</b> 50 … and <span class="deva">មួយរយ</span> <b>muoy roy</b> = 100.</p>',eg:[['ម្ភៃ','mphei','20'],['ហាសិប','hasep','50'],['មួយរយ','muoy roy','100']]},
{t:'mc',q:'What is ដប់មួយ?',d:'ដប់មួយ',r:'dop muoy',o:['11','10','12','21'],a:0},
{t:'mc',q:'What is ម្ភៃ?',d:'ម្ភៃ',r:'mphei',o:['20','12','30','2'],a:0},
{t:'mc',q:'What is ហាសិប?',d:'ហាសិប',r:'hasep',o:['50','40','60','15'],a:0},
{t:'mc',q:'What is មួយរយ?',d:'មួយរយ',r:'muoy roy',o:['100','10','1000','90'],a:0},
{t:'mc',q:'What is សាមសិប?',d:'សាមសិប',r:'samsep',o:['30','13','40','33'],a:0},
{t:'mc',q:'21 would be ម្ភៃ + …',o:['មួយ','ដប់','ពីរ','រយ'],a:0}]},
{id:'km_num2_2',emoji:'២',title:'Hear the tens',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which number?',say:'ម្ភៃ',o:['ម្ភៃ','ដប់','សាមសិប','មួយ'],a:0},
{t:'li',q:'Listen — which number?',say:'ហាសិប',o:['ហាសិប','ហុកសិប','សែសិប','ប៉ែតសិប'],a:0},
{t:'mc',q:'Which word is 40?',o:['សែសិប','សាមសិប','ហាសិប','កៅសិប'],a:0},
{t:'li',q:'Listen — which number?',say:'មួយរយ',o:['មួយរយ','មួយ','ម្ភៃ','ដប់មួយ'],a:0},
{t:'mc',q:'Which word is 90?',o:['កៅសិប','ប៉ែតសិប','ចិតសិប','ហុកសិប'],a:0},
{t:'li',q:'Listen — which number?',say:'ដប់ប្រាំ',o:['ដប់ប្រាំ','ដប់មួយ','ប្រាំ','ហាសិប'],a:0},
{t:'mc',q:'Which word is 70?',o:['ចិតសិប','ហុកសិប','ប៉ែតសិប','សាមសិប'],a:0}]},
{id:'km_num2_3',emoji:'២',title:'Build big numbers',step:'build',meta:'Compose tens + units',vocab:[],ex:[
{t:'match',q:'Match number and word',pairs:[['ម្ភៃ','20'],['សាមសិប','30'],['ហាសិប','50'],['មួយរយ','100']]},
{t:'wb',q:'Build: twelve (10+2)',a:['ដប់','ពីរ'],pool:['ដប់','ពីរ','ម្ភៃ','មួយ'],r:'dop pi'},
{t:'wb',q:'Build: twenty-five',a:['ម្ភៃ','ប្រាំ'],pool:['ម្ភៃ','ប្រាំ','ដប់','បួន'],r:'mphei pram'},
{t:'match',q:'Match number and word',pairs:[['សែសិប','40'],['ហុកសិប','60'],['ប៉ែតសិប','80'],['កៅសិប','90']]},
{t:'fill',q:'Complete: 100 = ___ រយ',s:'___រយ',o:['មួយ','ដប់','ម្ភៃ','ប្រាំ'],a:0},
{t:'wb',q:'Build: thirty-one',a:['សាមសិប','មួយ'],pool:['សាមសិប','មួយ','ម្ភៃ','បី'],r:'samsep muoy'}]},
{id:'km_num2_4',emoji:'២',title:'Mix it',step:'mix',meta:'Numbers everywhere',vocab:[],ex:[
{t:'mc',q:'What is កៅសិប?',d:'កៅសិប',r:'kavsep',o:['90','19','9','40'],a:0},
{t:'li',q:'Listen — which number?',say:'សាមសិប',o:['សាមសិប','សែសិប','ហាសិប','ម្ភៃ'],a:0},
{t:'wb',q:'Build: fifty-five',a:['ហាសិប','ប្រាំ'],pool:['ហាសិប','ប្រាំ','ហុកសិប','បួន'],r:'hasep pram'},
{t:'mc',q:'ដប់ប្រាំបី is…',d:'ដប់ប្រាំបី',r:'dop pram bei',o:['18','15','13','58'],a:0},
{t:'li',q:'Listen — which number?',say:'ប៉ែតសិប',o:['ប៉ែតសិប','ចិតសិប','កៅសិប','ហាសិប'],a:0},
{t:'match',q:'Match number and word',pairs:[['ដប់មួយ','11'],['ម្ភៃ','20'],['ចិតសិប','70'],['មួយរយ','100']]},
{t:'mc',q:'Which is bigger?',o:['កៅសិប','សាមសិប','ម្ភៃ','ដប់ប្រាំ'],a:0}]},
{id:'km_num2_5',emoji:'២',title:'Checkpoint',step:'checkpoint',meta:'Up to one hundred!',vocab:[],ex:[
{t:'mc',q:'What is ហុកសិប?',d:'ហុកសិប',r:'hoksep',o:['60','16','70','6'],a:0},
{t:'li',q:'Listen — which number?',say:'សែសិប',o:['សែសិប','សាមសិប','ហាសិប','ម្ភៃ'],a:0},
{t:'wb',q:'Build: ninety-nine',a:['កៅសិប','ប្រាំបួន'],pool:['កៅសិប','ប្រាំបួន','ប៉ែតសិប','បួន'],r:'kavsep pram buon'},
{t:'mc',q:'What is ចិតសិប?',d:'ចិតសិប',r:'chetsep',o:['70','17','7','60'],a:0},
{t:'li',q:'Listen — which number?',say:'ដប់មួយ',o:['ដប់មួយ','មួយ','ម្ភៃមួយ','ដប់'],a:0},
{t:'match',q:'Match number and word',pairs:[['ម្ភៃ','20'],['ហាសិប','50'],['ប៉ែតសិប','80'],['មួយរយ','100'],['ដប់ប្រាំ','15']]},
{t:'mc',q:'44 in Khmer is…',o:['សែសិបបួន','សាមសិបបួន','សែសិបប្រាំ','បួនសិប'],a:0}]},

{id:'km_court',emoji:'🤲',title:'Please & sorry',step:'learn',meta:'Polite survival phrases',vocab:[['សូម','som','please'],['សុំទោស','som toh','sorry / excuse me'],['មិនអីទេ','min ei te','it is okay / no problem'],['ជួយ','chuoy','to help'],['ជួយខ្ញុំផង','chuoy khnhom phang','please help me'],['យល់','yol','to understand'],['ខ្ញុំមិនយល់ទេ','khnhom min yol te','I do not understand'],['និយាយម្តងទៀត','niyeay mdong tiet','say it again'],['យឺតៗ','yeut yeut','slowly']],ex:[
{t:'note',tag:'Smooth the way',q:'សូម and សុំទោស',body:'<p><span class="deva">សូម</span> <b>som</b> starts polite requests — please. <span class="deva">សុំទោស</span> <b>som toh</b> = sorry, or excuse me to get attention.</p><p>The gracious reply: <span class="deva">មិនអីទេ</span> <b>min ei te</b> — it is okay.</p>',eg:[['សូម','som','please'],['សុំទោស','som toh','sorry'],['មិនអីទេ','min ei te','it is okay']]},
{t:'note',tag:'When you are lost',q:'ខ្ញុំមិនយល់ទេ',body:'<p>Wrap a verb in <span class="deva">មិន</span> … <span class="deva">ទេ</span> to say <b>not</b>: <span class="deva">ខ្ញុំមិនយល់ទេ</span> <b>khnhom min yol te</b> = I do not understand.</p><p>Then ask: <span class="deva">និយាយម្តងទៀត</span> <b>niyeay mdong tiet</b> (say it again) · <span class="deva">យឺតៗ</span> <b>yeut yeut</b> (slowly). The little <span class="deva">ៗ</span> repeats the word before it!</p>',eg:[['ខ្ញុំមិនយល់ទេ','khnhom min yol te','I do not understand'],['យឺតៗ','yeut yeut','slowly']]},
{t:'mc',q:'What does សុំទោស mean?',d:'សុំទោស',r:'som toh',o:['sorry / excuse me','thank you','please','goodbye'],a:0},
{t:'mc',q:'What does មិនអីទេ mean?',d:'មិនអីទេ',r:'min ei te',o:['it is okay','I am sorry','help me','say it again'],a:0},
{t:'mc',q:'What does ជួយ mean?',d:'ជួយ',r:'chuoy',o:['to help','to speak','to go','to understand'],a:0},
{t:'mc',q:'What does ខ្ញុំមិនយល់ទេ mean?',d:'ខ្ញុំមិនយល់ទេ',r:'khnhom min yol te',o:['I do not understand','I understand','I am fine','I am lost'],a:0},
{t:'mc',q:'The sign ៗ means…',o:['repeat the word before it','question','full stop','silence'],a:0},
{t:'mc',q:'What does យឺតៗ mean?',d:'យឺតៗ',r:'yeut yeut',o:['slowly','loudly','quickly','again'],a:0}]},
{id:'km_court_2',emoji:'🤲',title:'Hear the phrases',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which phrase?',say:'សុំទោស',o:['សុំទោស','សូម','មិនអីទេ','អរគុណ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'មិនអីទេ',o:['មិនអីទេ','ខ្ញុំមិនយល់ទេ','សុំទោស','ទេ'],a:0},
{t:'mc',q:'Which phrase asks for help?',o:['ជួយខ្ញុំផង','និយាយម្តងទៀត','សុំទោស','យឺតៗ'],a:0},
{t:'li',q:'Listen — which word?',say:'សូម',o:['សូម','សុំទោស','ជួយ','យល់'],a:0},
{t:'mc',q:'Which phrase means say it again?',o:['និយាយម្តងទៀត','ខ្ញុំមិនយល់ទេ','មិនអីទេ','ជួយខ្ញុំផង'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ខ្ញុំមិនយល់ទេ',o:['ខ្ញុំមិនយល់ទេ','មិនអីទេ','ខ្ញុំសុខសប្បាយ','សុំទោស'],a:0},
{t:'mc',q:'Which word means to understand?',o:['យល់','ជួយ','សូម','ទៅ'],a:0}]},
{id:'km_court_3',emoji:'🤲',title:'Build politeness',step:'build',meta:'Match & assemble',vocab:[],ex:[
{t:'match',q:'Match Khmer and meaning',pairs:[['សូម','please'],['សុំទោស','sorry'],['មិនអីទេ','it is okay'],['ជួយ','to help'],['យល់','to understand']]},
{t:'wb',q:'Build: please help me',a:['ជួយ','ខ្ញុំ','ផង'],pool:['ជួយ','ខ្ញុំ','ផង','សូម','ទេ'],r:'chuoy khnhom phang'},
{t:'wb',q:'Build: I do not understand',a:['ខ្ញុំ','មិន','យល់','ទេ'],pool:['ខ្ញុំ','មិន','យល់','ទេ','ជួយ'],r:'khnhom min yol te'},
{t:'li',q:'Listen — which phrase?',say:'និយាយម្តងទៀត',o:['និយាយម្តងទៀត','យឺតៗ','មិនអីទេ','ជួយខ្ញុំផង'],a:0},
{t:'match',q:'Match sound and phrase',pairs:[['som toh','សុំទោស'],['min ei te','មិនអីទេ'],['yeut yeut','យឺតៗ'],['chuoy','ជួយ']]},
{t:'fill',q:'Complete: ខ្ញុំមិន___ទេ (I do not understand)',s:'ខ្ញុំមិន___ទេ',o:['យល់','ជួយ','ទៅ','ចាំ'],a:0}]},
{id:'km_court_4',emoji:'🤲',title:'Mix it',step:'mix',meta:'Politeness in action',vocab:[],ex:[
{t:'mc',q:'You bump into someone at the market. Say…',o:['សុំទោស','មិនអីទេ','សួស្តី','អរគុណ'],a:0},
{t:'mc',q:'They smile and reply…',o:['មិនអីទេ','សុំទោស','ទេ','លាហើយ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ជួយខ្ញុំផង',o:['ជួយខ្ញុំផង','ខ្ញុំមិនយល់ទេ','និយាយម្តងទៀត','សុំទោស'],a:0},
{t:'wb',q:'Build: sorry, say it again',a:['សុំទោស','និយាយម្តងទៀត'],pool:['សុំទោស','និយាយម្តងទៀត','មិនអីទេ','យឺតៗ'],r:'som toh niyeay mdong tiet'},
{t:'mc',q:'Someone speaks too fast. Ask them to speak…',o:['យឺតៗ','ម្តងទៀត','ខ្លាំង','ឥឡូវ'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['ជួយខ្ញុំផង','please help me'],['និយាយម្តងទៀត','say it again'],['យឺតៗ','slowly'],['សូម','please']]},
{t:'li',q:'Listen — which word?',say:'យល់',o:['យល់','យឺត','ជួយ','យប់'],a:0}]},
{id:'km_court_5',emoji:'🤲',title:'Checkpoint',step:'checkpoint',meta:'Polite & prepared',vocab:[],ex:[
{t:'mc',q:'What does សូម mean?',d:'សូម',r:'som',o:['please','sorry','help','yes'],a:0},
{t:'li',q:'Listen — which phrase?',say:'សុំទោស',o:['សុំទោស','សូម','សួស្តី','មិនអីទេ'],a:0},
{t:'wb',q:'Build: I do not understand',a:['ខ្ញុំ','មិន','យល់','ទេ'],pool:['ខ្ញុំ','មិន','យល់','ទេ','ផង'],r:'khnhom min yol te'},
{t:'mc',q:'What does និយាយម្តងទៀត mean?',d:'និយាយម្តងទៀត',r:'niyeay mdong tiet',o:['say it again','speak slowly','I understand','help me'],a:0},
{t:'li',q:'Listen — which phrase?',say:'យឺតៗ',o:['យឺតៗ','យល់','មិនអីទេ','ជួយ'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['សុំទោស','sorry'],['មិនអីទេ','it is okay'],['ជួយខ្ញុំផង','please help me'],['យឺតៗ','slowly'],['យល់','to understand']]},
{t:'mc',q:'The pattern មិន … ទេ makes a sentence…',o:['negative','a question','polite','past tense'],a:0}]},

{id:'km_intro',emoji:'🪪',title:'Introduce yourself',step:'learn',meta:'Name, country & learning Khmer',vocab:[['ឈ្មោះ','chhmuoh','name'],['ខ្ញុំឈ្មោះសុខា','khnhom chhmuoh Sokha','my name is Sokha'],['អ្នកឈ្មោះអ្វី','neak chhmuoh avei','what is your name?'],['អ្វី','avei','what'],['មកពី','mok pi','to come from'],['ប្រទេស','prateh','country'],['កម្ពុជា','kampuchea','Cambodia'],['ភាសាខ្មែរ','pheasa khmer','Khmer language'],['រៀន','rien','to learn'],['ខ្ញុំរៀនភាសាខ្មែរ','khnhom rien pheasa khmer','I am learning Khmer']],ex:[
{t:'note',tag:'Who are you?',q:'ឈ្មោះ — name',body:'<p><span class="deva">ខ្ញុំឈ្មោះ</span> <b>khnhom chhmuoh</b> … = my name is … Ask back: <span class="deva">អ្នកឈ្មោះអ្វី?</span> <b>neak chhmuoh avei?</b></p><p><span class="deva">អ្វី</span> <b>avei</b> (what) sits at the <b>end</b> of the question — Khmer questions keep normal word order.</p>',eg:[['ខ្ញុំឈ្មោះសុខា','khnhom chhmuoh Sokha','my name is Sokha'],['អ្នកឈ្មោះអ្វី','neak chhmuoh avei','what is your name?']]},
{t:'note',tag:'Where from?',q:'មកពី — come from',body:'<p><span class="deva">ខ្ញុំមកពី</span> <b>khnhom mok pi</b> … = I come from … <span class="deva">ប្រទេស</span> <b>prateh</b> = country; Cambodia is <span class="deva">កម្ពុជា</span> <b>kampuchea</b>.</p><p>And the sentence of this whole app: <span class="deva">ខ្ញុំរៀនភាសាខ្មែរ</span> <b>khnhom rien pheasa khmer</b> — I am learning Khmer!</p>',eg:[['មកពី','mok pi','come from'],['កម្ពុជា','kampuchea','Cambodia'],['រៀន','rien','to learn']]},
{t:'mc',q:'What does ឈ្មោះ mean?',d:'ឈ្មោះ',r:'chhmuoh',o:['name','country','language','person'],a:0},
{t:'mc',q:'What does អ្វី mean?',d:'អ្វី',r:'avei',o:['what','who','where','when'],a:0},
{t:'mc',q:'What does មកពី mean?',d:'មកពី',r:'mok pi',o:['to come from','to go to','to live in','to learn'],a:0},
{t:'mc',q:'What does កម្ពុជា mean?',d:'កម្ពុជា',r:'kampuchea',o:['Cambodia','country','Khmer language','Phnom Penh'],a:0},
{t:'mc',q:'What does រៀន mean?',d:'រៀន',r:'rien',o:['to learn','to read','to speak','to help'],a:0},
{t:'mc',q:'ខ្ញុំរៀនភាសាខ្មែរ means…',d:'ខ្ញុំរៀនភាសាខ្មែរ',r:'khnhom rien pheasa khmer',o:['I am learning Khmer','I speak Khmer well','I am from Cambodia','I like Khmer food'],a:0}]},
{id:'km_intro_2',emoji:'🪪',title:'Hear introductions',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ឈ្មោះ',o:['ឈ្មោះ','ឆ្មា','ភាសា','អ្វី'],a:0},
{t:'li',q:'Listen — which phrase?',say:'អ្នកឈ្មោះអ្វី',o:['អ្នកឈ្មោះអ្វី','ខ្ញុំឈ្មោះសុខា','អ្នកមកពីណា','សុខសប្បាយទេ'],a:0},
{t:'mc',q:'Which word means country?',o:['ប្រទេស','កម្ពុជា','ភាសា','ផ្ទះ'],a:0},
{t:'li',q:'Listen — which word?',say:'កម្ពុជា',o:['កម្ពុជា','ភាសាខ្មែរ','ប្រទេស','មកពី'],a:0},
{t:'mc',q:'Which phrase means I am learning Khmer?',o:['ខ្ញុំរៀនភាសាខ្មែរ','ខ្ញុំមកពីកម្ពុជា','ខ្ញុំឈ្មោះសុខា','ខ្ញុំមិនយល់ទេ'],a:0},
{t:'li',q:'Listen — which word?',say:'រៀន',o:['រៀន','មក','យល់','និយាយ'],a:0},
{t:'mc',q:'Which word means what?',o:['អ្វី','អ្នក','ណា','នេះ'],a:0}]},
{id:'km_intro_3',emoji:'🪪',title:'Build introductions',step:'build',meta:'Say who you are',vocab:[],ex:[
{t:'match',q:'Match Khmer and meaning',pairs:[['ឈ្មោះ','name'],['អ្វី','what'],['មកពី','come from'],['ប្រទេស','country'],['រៀន','to learn']]},
{t:'wb',q:'Build: my name is Sokha',a:['ខ្ញុំ','ឈ្មោះ','សុខា'],pool:['ខ្ញុំ','ឈ្មោះ','សុខា','អ្វី','អ្នក'],r:'khnhom chhmuoh Sokha'},
{t:'wb',q:'Build: what is your name?',a:['អ្នក','ឈ្មោះ','អ្វី'],pool:['អ្នក','ឈ្មោះ','អ្វី','ខ្ញុំ','មកពី'],r:'neak chhmuoh avei'},
{t:'fill',q:'Complete: ខ្ញុំ___ពីកម្ពុជា (I come from Cambodia)',s:'ខ្ញុំ___ពីកម្ពុជា',o:['មក','ទៅ','រៀន','ឈ្មោះ'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ខ្ញុំរៀនភាសាខ្មែរ',o:['ខ្ញុំរៀនភាសាខ្មែរ','អ្នកឈ្មោះអ្វី','ខ្ញុំមិនយល់ទេ','ខ្ញុំសុខសប្បាយ'],a:0},
{t:'match',q:'Match sound and word',pairs:[['chhmuoh','ឈ្មោះ'],['avei','អ្វី'],['kampuchea','កម្ពុជា'],['rien','រៀន']]}]},
{id:'km_intro_4',emoji:'🪪',title:'Mix it',step:'mix',meta:'A real first conversation',vocab:[],ex:[
{t:'mc',q:'Someone asks អ្នកឈ្មោះអ្វី? They want your…',d:'អ្នកឈ្មោះអ្វី',r:'neak chhmuoh avei',o:['name','country','age','job'],a:0},
{t:'wb',q:'Build: I come from Cambodia',a:['ខ្ញុំ','មកពី','កម្ពុជា'],pool:['ខ្ញុំ','មកពី','កម្ពុជា','ប្រទេស','រៀន'],r:'khnhom mok pi kampuchea'},
{t:'li',q:'Listen — which word?',say:'ភាសាខ្មែរ',o:['ភាសាខ្មែរ','កម្ពុជា','ប្រទេស','ឈ្មោះ'],a:0},
{t:'mc',q:'What does ភាសាខ្មែរ mean?',d:'ភាសាខ្មែរ',r:'pheasa khmer',o:['Khmer language','Cambodia','Khmer person','Khmer script'],a:0},
{t:'wb',q:'Build: I am learning Khmer',a:['ខ្ញុំ','រៀន','ភាសាខ្មែរ'],pool:['ខ្ញុំ','រៀន','ភាសាខ្មែរ','មកពី','អ្វី'],r:'khnhom rien pheasa khmer'},
{t:'match',q:'Match Khmer and meaning',pairs:[['ខ្ញុំឈ្មោះសុខា','my name is Sokha'],['អ្នកឈ្មោះអ្វី','what is your name?'],['កម្ពុជា','Cambodia'],['ភាសាខ្មែរ','Khmer language']]},
{t:'mc',q:'Question words like អ្វី go…',o:['at the end of the sentence','at the start','before the verb','anywhere'],a:0}]},
{id:'km_intro_5',emoji:'🪪',title:'Checkpoint',step:'checkpoint',meta:'You can introduce yourself!',vocab:[],ex:[
{t:'mc',q:'What does ប្រទេស mean?',d:'ប្រទេស',r:'prateh',o:['country','city','language','name'],a:0},
{t:'li',q:'Listen — which phrase?',say:'ខ្ញុំឈ្មោះសុខា',o:['ខ្ញុំឈ្មោះសុខា','អ្នកឈ្មោះអ្វី','ខ្ញុំមកពីកម្ពុជា','ខ្ញុំរៀនភាសាខ្មែរ'],a:0},
{t:'wb',q:'Build: what is your name?',a:['អ្នក','ឈ្មោះ','អ្វី'],pool:['អ្នក','ឈ្មោះ','អ្វី','សុខា','ខ្ញុំ'],r:'neak chhmuoh avei'},
{t:'mc',q:'What does មកពី mean?',d:'មកពី',r:'mok pi',o:['to come from','to go to','to be named','to study'],a:0},
{t:'li',q:'Listen — which word?',say:'ប្រទេស',o:['ប្រទេស','កម្ពុជា','ភាសា','ផ្ទះ'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['ឈ្មោះ','name'],['មកពី','come from'],['រៀន','to learn'],['ភាសាខ្មែរ','Khmer language'],['អ្វី','what']]},
{t:'wb',q:'Build: I am learning Khmer',a:['ខ្ញុំ','រៀន','ភាសាខ្មែរ'],pool:['ខ្ញុំ','រៀន','ភាសាខ្មែរ','កម្ពុជា','ទេ'],r:'khnhom rien pheasa khmer'}]},

{id:'km_day',emoji:'☀️',title:'Today & tomorrow',step:'learn',meta:'Time words for daily life',vocab:[['ថ្ងៃនេះ','thngai nih','today'],['ស្អែក','saaek','tomorrow'],['ម្សិលមិញ','msel minh','yesterday'],['ព្រឹក','pruk','morning'],['ល្ងាច','lngeach','evening'],['យប់','yup','night'],['ទៅ','tov','to go'],['ផ្សារ','phsar','market'],['ថ្ងៃ','thngai','day'],['ខែ','khae','month'],['ឆ្នាំ','chhnam','year']],ex:[
{t:'note',tag:'Anchor your day',q:'ថ្ងៃនេះ — today',body:'<p>You already know <span class="deva">ថ្ងៃ</span> (day) and <span class="deva">នេះ</span> (this) — so <span class="deva">ថ្ងៃនេះ</span> <b>thngai nih</b> = today. <span class="deva">ស្អែក</span> <b>saaek</b> = tomorrow · <span class="deva">ម្សិលមិញ</span> <b>msel minh</b> = yesterday.</p>',eg:[['ថ្ងៃនេះ','thngai nih','today'],['ស្អែក','saaek','tomorrow'],['ម្សិលមិញ','msel minh','yesterday']]},
{t:'note',tag:'Parts of the day',q:'ព្រឹក ល្ងាច យប់',body:'<p><span class="deva">ព្រឹក</span> <b>pruk</b> morning · <span class="deva">ល្ងាច</span> <b>lngeach</b> evening · <span class="deva">យប់</span> <b>yup</b> night.</p><p><span class="deva">ថ្ងៃនេះខ្ញុំទៅផ្សារ</span> <b>thngai nih khnhom tov phsar</b> — today I go to the market.</p>',eg:[['ព្រឹក','pruk','morning'],['យប់','yup','night'],['ទៅ','tov','to go'],['ផ្សារ','phsar','market']]},
{t:'mc',q:'What does ថ្ងៃនេះ mean?',d:'ថ្ងៃនេះ',r:'thngai nih',o:['today','tomorrow','yesterday','tonight'],a:0},
{t:'mc',q:'What does ស្អែក mean?',d:'ស្អែក',r:'saaek',o:['tomorrow','today','morning','yesterday'],a:0},
{t:'mc',q:'What does ព្រឹក mean?',d:'ព្រឹក',r:'pruk',o:['morning','evening','night','noon'],a:0},
{t:'mc',q:'What does ទៅ mean?',d:'ទៅ',r:'tov',o:['to go','to come','to eat','to sleep'],a:0},
{t:'mc',q:'What does ផ្សារ mean?',d:'ផ្សារ',r:'phsar',o:['market','house','school','road'],a:0},
{t:'mc',q:'What does យប់ mean?',d:'យប់',r:'yup',o:['night','day','evening','year'],a:0}]},
{id:'km_day_2',emoji:'☀️',title:'Hear time words',step:'recognize',meta:'Pick what you hear',vocab:[],ex:[
{t:'li',q:'Listen — which word?',say:'ថ្ងៃនេះ',o:['ថ្ងៃនេះ','ស្អែក','ថ្ងៃ','ម្សិលមិញ'],a:0},
{t:'li',q:'Listen — which word?',say:'ស្អែក',o:['ស្អែក','ស្រែ','ល្ងាច','ព្រឹក'],a:0},
{t:'mc',q:'Which word means yesterday?',o:['ម្សិលមិញ','ស្អែក','ថ្ងៃនេះ','យប់'],a:0},
{t:'li',q:'Listen — which word?',say:'ព្រឹក',o:['ព្រឹក','ផ្សារ','ត្រី','ល្ងាច'],a:0},
{t:'mc',q:'Which word means evening?',o:['ល្ងាច','ព្រឹក','យប់','ថ្ងៃ'],a:0},
{t:'li',q:'Listen — which word?',say:'ផ្សារ',o:['ផ្សារ','ផ្ទះ','ផ្លូវ','ស្រែ'],a:0},
{t:'mc',q:'Which word means to go?',o:['ទៅ','មក','ទា','ទេ'],a:0}]},
{id:'km_day_3',emoji:'☀️',title:'Build time phrases',step:'build',meta:'Match & assemble',vocab:[],ex:[
{t:'match',q:'Match Khmer and meaning',pairs:[['ថ្ងៃនេះ','today'],['ស្អែក','tomorrow'],['ម្សិលមិញ','yesterday'],['ព្រឹក','morning'],['យប់','night']]},
{t:'wb',q:'Build: today I go to the market',a:['ថ្ងៃនេះ','ខ្ញុំ','ទៅ','ផ្សារ'],pool:['ថ្ងៃនេះ','ខ្ញុំ','ទៅ','ផ្សារ','ស្អែក','ផ្ទះ'],r:'thngai nih khnhom tov phsar'},
{t:'fill',q:'Complete: tomorrow = ___',s:'___',o:['ស្អែក','ម្សិលមិញ','ថ្ងៃនេះ','ល្ងាច'],a:0},
{t:'li',q:'Listen — which word?',say:'ល្ងាច',o:['ល្ងាច','យប់','ព្រឹក','ថ្ងៃ'],a:0},
{t:'match',q:'Match sound and word',pairs:[['thngai nih','ថ្ងៃនេះ'],['saaek','ស្អែក'],['pruk','ព្រឹក'],['phsar','ផ្សារ']]},
{t:'wb',q:'Build: I go home',a:['ខ្ញុំ','ទៅ','ផ្ទះ'],pool:['ខ្ញុំ','ទៅ','ផ្ទះ','ផ្សារ','មក'],r:'khnhom tov phteah'}]},
{id:'km_day_4',emoji:'☀️',title:'Mix it',step:'mix',meta:'Your day in Khmer',vocab:[],ex:[
{t:'mc',q:'What does ម្សិលមិញ mean?',d:'ម្សិលមិញ',r:'msel minh',o:['yesterday','tomorrow','last year','tonight'],a:0},
{t:'li',q:'Listen — which word?',say:'យប់',o:['យប់','យល់','ល្ងាច','ព្រឹក'],a:0},
{t:'wb',q:'Build: tomorrow I go to the market',a:['ស្អែក','ខ្ញុំ','ទៅ','ផ្សារ'],pool:['ស្អែក','ខ្ញុំ','ទៅ','ផ្សារ','ថ្ងៃនេះ','ផ្ទះ'],r:'saaek khnhom tov phsar'},
{t:'mc',q:'ថ្ងៃ ខែ ឆ្នាំ in order mean…',o:['day, month, year','day, week, month','sun, moon, star','today, tomorrow, yesterday'],a:0},
{t:'li',q:'Listen — which word?',say:'ម្សិលមិញ',o:['ម្សិលមិញ','ស្អែក','ថ្ងៃនេះ','ល្ងាច'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['ល្ងាច','evening'],['ទៅ','to go'],['ផ្សារ','market'],['ឆ្នាំ','year']]},
{t:'mc',q:'Morning in Khmer is…',o:['ព្រឹក','យប់','ល្ងាច','ខែ'],a:0}]},
{id:'km_day_5',emoji:'☀️',title:'Checkpoint',step:'checkpoint',meta:'Zone 2 complete — more coming!',vocab:[],ex:[
{t:'mc',q:'What does ស្អែក mean?',d:'ស្អែក',r:'saaek',o:['tomorrow','yesterday','today','morning'],a:0},
{t:'li',q:'Listen — which word?',say:'ថ្ងៃ',o:['ថ្ងៃ','ថ្ងៃនេះ','ខែ','ឆ្នាំ'],a:0},
{t:'wb',q:'Build: today I go home',a:['ថ្ងៃនេះ','ខ្ញុំ','ទៅ','ផ្ទះ'],pool:['ថ្ងៃនេះ','ខ្ញុំ','ទៅ','ផ្ទះ','ផ្សារ','ស្អែក'],r:'thngai nih khnhom tov phteah'},
{t:'mc',q:'What does ល្ងាច mean?',d:'ល្ងាច',r:'lngeach',o:['evening','morning','night','noon'],a:0},
{t:'li',q:'Listen — which word?',say:'ទៅ',o:['ទៅ','ទេ','ទា','មក'],a:0},
{t:'match',q:'Match Khmer and meaning',pairs:[['ថ្ងៃនេះ','today'],['ម្សិលមិញ','yesterday'],['ព្រឹក','morning'],['យប់','night'],['ផ្សារ','market']]},
{t:'mc',q:'អរគុណ — you finished the Khmer early access! More zones are…',o:['on the way','finished','cancelled','imaginary'],a:0}]},
];

/* ---- Cambodian scenery & mascot ----
   Same layer classes as the Nepali art (orb / far / mid / near, clouds, stars)
   so the engine CSS — palette vars, cloud drift, star twinkle — applies as-is.
   far = jungle treeline · mid = rural stilt house + distant palms (secular
   imagery only — no temples or religious symbols, per Ruan) · near = rice
   paddies with a sugar palm. Mascot = baby elephant (ដំរី — taught in Zone 1!). */
const KM_HERO='<circle class="orb-glow" cx="930" cy="94" r="76"/><circle class="orb" cx="930" cy="94" r="46"/>'
+'<g class="hero-stars" aria-hidden="true"><circle cx="120" cy="58" r="1.6" class="tw" style="animation-delay:0s"/><circle cx="240" cy="104" r="1.2"/><circle cx="360" cy="46" r="2"/><circle cx="470" cy="122" r="1.4" class="tw" style="animation-delay:1.1s"/><circle cx="560" cy="70" r="1.6"/><circle cx="675" cy="40" r="1.3" class="tw" style="animation-delay:.6s"/><circle cx="785" cy="112" r="1.8"/><circle cx="870" cy="150" r="1.3"/><circle cx="1015" cy="62" r="1.6" class="tw" style="animation-delay:1.8s"/><circle cx="1085" cy="118" r="1.4"/><circle cx="1130" cy="44" r="1.2"/><circle cx="175" cy="138" r="1.5"/><circle cx="320" cy="152" r="1.3" class="tw" style="animation-delay:2.3s"/><circle cx="620" cy="134" r="1.5"/></g>'
+'<g class="cloud c1" aria-hidden="true"><ellipse cx="58" cy="96" rx="34" ry="14"/><ellipse cx="90" cy="90" rx="26" ry="16"/><ellipse cx="28" cy="93" rx="24" ry="12"/></g>'
+'<g class="cloud c2" aria-hidden="true"><ellipse cx="64" cy="124" rx="40" ry="15"/><ellipse cx="100" cy="118" rx="28" ry="17"/><ellipse cx="30" cy="121" rx="26" ry="13"/></g>'
+'<g class="cloud c3" aria-hidden="true"><ellipse cx="52" cy="74" rx="28" ry="11"/><ellipse cx="78" cy="69" rx="22" ry="13"/><ellipse cx="26" cy="72" rx="20" ry="10"/></g>'
/* jungle treeline */
+'<path class="far" d="M0 236 Q45 212 90 228 Q135 206 180 224 Q225 204 270 222 Q315 206 360 224 Q405 208 450 226 Q495 206 540 224 Q585 204 630 222 Q675 208 720 226 Q765 206 810 224 Q855 204 900 222 Q945 208 990 226 Q1035 206 1080 224 Q1125 208 1160 222 Q1180 214 1200 220 L1200 320 L0 320 Z"/>'
/* rural Cambodia: low fields, a stilt house & distant palms */
+'<path class="mid" d="M0 320 L0 284 Q300 270 600 280 Q900 290 1200 276 L1200 320 Z '
+'M598 282 L598 240 L606 240 L606 282 Z M646 284 L646 240 L654 240 L654 284 Z M694 284 L694 240 L702 240 L702 284 Z M742 282 L742 240 L750 240 L750 282 Z '
+'M586 244 L586 206 L762 206 L762 244 Z M566 212 L674 154 L782 212 Z '
+'M600 282 L620 246 L627 246 L607 282 Z '
+'M488 272 C490 248 488 226 491 202 L495 203 C493 226 496 248 494 273 Z '
+'M493 200 C480 192 466 190 455 194 C468 194 480 198 491 204 Z M493 200 C504 190 517 187 528 191 C517 192 505 197 495 204 Z M493 200 C487 186 478 179 467 177 C478 184 486 192 491 202 Z M493 200 C499 186 508 179 519 177 C508 184 499 192 494 202 Z M493 200 C493 184 489 173 481 167 C487 176 490 188 491 200 Z '
+'M524 268 C527 240 525 212 528 186 L532 187 C530 212 533 242 531 270 Z '
+'M529 184 C515 175 500 173 488 177 C502 177 515 181 527 188 Z M529 184 C541 173 555 170 567 174 C555 176 542 181 531 188 Z M529 184 C522 169 512 161 500 159 C512 167 521 175 527 186 Z M529 184 C536 169 546 161 558 159 C546 167 537 175 531 186 Z M529 184 C529 167 524 155 515 148 C522 158 526 171 527 184 Z"/>'
/* rice paddies + sugar palms */
+'<g class="near"><path d="M0 296 Q160 258 320 290 Q480 318 640 284 Q800 254 960 292 Q1080 312 1200 288 L1200 320 L0 320 Z"/>'
+'<path d="M975 300 C981 260 977 220 983 186 L989 188 C985 222 991 260 987 302 Z"/>'
+'<path d="M986 184 C963 170 939 168 919 176 C941 174 965 180 984 190 Z"/><path d="M986 184 C1005 166 1029 162 1051 170 C1031 170 1007 178 989 190 Z"/><path d="M986 184 C975 162 957 150 935 148 C957 156 973 168 983 188 Z"/><path d="M986 184 C997 160 1015 148 1039 146 C1017 154 999 168 990 188 Z"/><path d="M986 184 C985 158 977 138 961 128 C973 142 981 162 984 186 Z"/><path d="M986 184 C993 158 1003 140 1021 130 C1007 144 995 164 989 187 Z"/><path d="M986 184 C959 184 937 192 923 208 C945 198 967 192 985 190 Z"/><path d="M987 184 C1013 186 1035 194 1047 210 C1027 198 1005 192 988 190 Z"/>'
+'<circle cx="981" cy="188" r="3"/><circle cx="992" cy="188" r="3"/><circle cx="986" cy="193" r="3"/>'
+'</g>';
const KM_BAND='<circle class="orb-glow" cx="1046" cy="54" r="36"/><circle class="orb" cx="1046" cy="54" r="21"/>'
+'<path class="far" d="M0 148 Q60 128 120 142 Q180 124 240 140 Q300 122 360 138 Q420 124 480 140 Q540 124 600 138 Q660 124 720 140 Q780 124 840 138 Q900 124 960 140 Q1020 126 1080 140 Q1140 126 1200 140 L1200 200 L0 200 Z"/>'
+'<path class="mid" d="M0 200 L0 174 Q300 164 600 172 Q900 180 1200 168 L1200 200 Z '
+'M576 172 L576 146 L582 146 L582 172 Z M608 174 L608 146 L614 146 L614 174 Z M640 174 L640 146 L646 146 L646 174 Z M672 172 L672 146 L678 146 L678 172 Z '
+'M568 148 L568 124 L686 124 L686 148 Z M554 128 L627 92 L700 128 Z '
+'M578 172 L592 150 L598 150 L584 172 Z '
+'M486 168 C489 146 487 128 490 110 L494 111 C492 128 495 148 493 170 Z '
+'M491 108 C478 100 464 98 453 102 C466 102 478 106 489 112 Z M491 108 C502 98 515 95 526 99 C515 100 503 105 493 112 Z M491 108 C485 94 476 87 465 85 C476 92 484 100 489 110 Z M491 108 C497 94 506 87 517 85 C506 92 497 100 492 110 Z M491 108 C491 92 487 81 479 75 C485 84 488 96 489 108 Z"/>'
+'<g class="near"><path d="M0 184 Q300 158 600 176 Q900 194 1200 172 L1200 200 L0 200 Z"/>'
+'<path d="M954 186 C958 162 956 142 960 124 L965 126 C962 144 966 166 964 188 Z"/>'
+'<path d="M962 122 C946 112 930 110 916 116 C932 114 948 118 960 126 Z"/><path d="M962 122 C976 108 992 104 1006 110 C992 110 976 116 964 126 Z"/><path d="M962 122 C954 104 942 96 928 94 C942 102 952 110 960 124 Z"/><path d="M962 122 C970 104 982 96 996 94 C982 102 972 110 964 124 Z"/><path d="M962 122 C962 102 956 88 946 80 C954 92 958 106 960 122 Z"/>'
+'</g>';
function KM_MASCOT(m){var base='<ellipse cx="11" cy="30" rx="10" ry="12" fill="#9FB9D0"/><ellipse cx="53" cy="30" rx="10" ry="12" fill="#9FB9D0"/><ellipse cx="12" cy="30" rx="5.5" ry="7.5" fill="#C9D9E8"/><ellipse cx="52" cy="30" rx="5.5" ry="7.5" fill="#C9D9E8"/><circle cx="32" cy="32" r="20" fill="#B7CBDD"/><circle cx="20" cy="40" r="3" fill="var(--crimson)" opacity="0.18"/><circle cx="44" cy="40" r="3" fill="var(--crimson)" opacity="0.18"/><path d="M25.5 46 Q23.5 50 25.8 52.5 Q27 49.5 27 46.5 Z" fill="#F6F9FC"/><path d="M38.5 46 Q40.5 50 38.2 52.5 Q37 49.5 37 46.5 Z" fill="#F6F9FC"/>';
  var f;
  if(m==='cheer')f='<path d="M22 31 Q25 27.5 28 31" fill="none" stroke="#2f2a24" stroke-width="2.2" stroke-linecap="round"/><path d="M36 31 Q39 27.5 42 31" fill="none" stroke="#2f2a24" stroke-width="2.2" stroke-linecap="round"/><circle cx="19.5" cy="40.5" r="3.4" fill="var(--crimson)" opacity="0.22"/><circle cx="44.5" cy="40.5" r="3.4" fill="var(--crimson)" opacity="0.22"/><path d="M32 37 C32 43 36 46.5 41.5 45.5 C38.5 50 30.5 49 28.5 42.5 L28.5 37 Z" fill="#A9BFD3"/><circle cx="41.8" cy="44.6" r="1.7" fill="#A9BFD3"/>';
  else if(m==='oops')f='<path d="M21.5 28.5 Q25 27 28.5 28.5" fill="none" stroke="#2f2a24" stroke-width="1.5" stroke-linecap="round"/><path d="M35.5 28.5 Q39 27 42.5 28.5" fill="none" stroke="#2f2a24" stroke-width="1.5" stroke-linecap="round"/><circle cx="25" cy="33" r="2.5" fill="#2f2a24"/><circle cx="39" cy="33" r="2.5" fill="#2f2a24"/><path d="M32 38 C32 45 31.5 50 28.5 53.5 C33.5 53 35.5 48.5 35.5 42.5 L35.5 38 Z" fill="#A9BFD3"/><path d="M50 22 Q52.5 27 50 29 Q47.5 27 50 22 Z" fill="#7EC8E3" opacity=".85"/>';
  else f='<circle cx="25" cy="32" r="2.6" fill="#2f2a24"/><circle cx="39" cy="32" r="2.6" fill="#2f2a24"/><circle cx="25.9" cy="31.1" r="0.7" fill="#fff"/><circle cx="39.9" cy="31.1" r="0.7" fill="#fff"/><path d="M32 38 C32 45 30 49.5 25.5 51.5 C30.5 52 34.5 48.5 35 42.5 L35 38 Z" fill="#A9BFD3"/><circle cx="25.9" cy="51" r="1.6" fill="#A9BFD3"/>';
  return '<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+base+f+'</svg>';}

/* register the pack — the engine picks it up via switchLang('km') */
registerPack({
  code:'km',
  name:'Khmer',
  nativeName:'ខ្មែរ',
  ttsLocale:'km-KH',
  script:/[ក-៿]/, /* Khmer block: consonants, vowels, signs & digits */
  audioBase:'audio-km/',
  storageKey:'sajilo_km',
  brand:{glyph:'ខ',h1:'Learn <em>Khmer</em>'},
  alpha:{native:'អក្សរខ្មែរ',vowels:'ស្រៈ',cons:'ព្យញ្ជនៈ',nums:'លេខ'},
  art:{hero:KM_HERO,band:KM_BAND,mascot:KM_MASCOT},
  voiceTest:v=>/^km(\b|[-_])/i.test(v.lang)||/khmer/i.test(v.name),
  fbVoiceTest:v=>false,
  fbVoiceName:'',
  lessons:KM_LESSONS,units:KM_UNITS,unitsIntensive:[],sym:KM_SYM,
  vowels:KM_VOWELS,cons:KM_CONS,nums:KM_NUMS,srsSeed:KM_SRS_SEED
});
