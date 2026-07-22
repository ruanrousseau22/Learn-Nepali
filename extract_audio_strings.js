/* extract_audio_strings.js — regenerate a language's audio strings file from its pack.
   JXA (no Node on this Mac):
     osascript -l JavaScript extract_audio_strings.js ne          # lang/ne.js  -> audio_strings.json
     osascript -l JavaScript extract_audio_strings.js km          # lang/km.js  -> audio_strings_km.json
     osascript -l JavaScript extract_audio_strings.js ne --check  # compare only, write nothing
   Run from the repo root, then: python3 generate_audio.py --lang <code>

   Spoken-string rules (verified July 2026 by reproducing both committed files
   byte-for-byte): per lesson — vocab[0], every say, mc d + correct option o[a],
   fill s with ___ filled by o[a], wb a.join(' '), match pairs[i][0], tr a.
   Lessons run in unit order (main units, then unitsIntensive), then the
   alphabet (vowels, cons, nums), then the SRS seed deck; dedup by first
   occurrence. step:'test' lessons are skipped (tests are muted and deal
   already-recorded questions). Keep only strings matching the pack's `script`
   regex, and drop strings made ONLY of combining marks (e.g. a bare Khmer
   dependent vowel — unpronounceable on its own). */
ObjC.import('Foundation');

function readFile(p){
  var s=$.NSString.stringWithContentsOfFileEncodingError(p,$.NSUTF8StringEncoding,null);
  if(s.isNil&&s.isNil())throw new Error('cannot read '+p);
  return ObjC.unwrap(s);
}
function writeFile(p,txt){
  $(txt).writeToFileAtomicallyEncodingError(p,true,$.NSUTF8StringEncoding,null);
}
function loadPackFromSource(src){
  /* browser stubs: the ne slice runs a few harmless top-level statements
     (SMOOTH media query, modal wiring) that expect these globals */
  var stubs='var __el={onclick:null,addEventListener:function(){},classList:{add:function(){},remove:function(){},toggle:function(){}}};'
    +'var window={matchMedia:function(){return {matches:false};},supabase:null};'
    +'var matchMedia=window.matchMedia;var speechSynthesis={};'
    +'var document={addEventListener:function(){},getElementById:function(){return __el;},querySelector:function(){return null;},querySelectorAll:function(){return [];}};'
    +'var localStorage={getItem:function(){return null;},setItem:function(){},removeItem:function(){}};'
    +'var navigator={};\n';
  /* two capture routes: lang/<code>.js calls our injected registerPack param;
     the index.html slice hoists its own `function registerPack` into a local
     PACKS map, so also hand PACKS back after the slice has run */
  var packs={};
  var tail=';\nif(typeof PACKS!=="undefined")__cap(PACKS);';
  (new Function('registerPack','__cap',stubs+src+tail))(
    function(p){packs[p.code]=p;},
    function(P){for(var k in P)packs[k]=P[k];});
  var codes=Object.keys(packs);
  if(!codes.length)throw new Error('registerPack was never called');
  return packs[codes[0]];
}
/* Nepali used to live inline in index.html and needed a slice-then-eval loader.
   The July 2026 payload split moved it to lang/ne.js, so it now loads exactly
   like every other pack — loadNePack is gone. */
/* combining-marks-only test: Khmer dependent vowels & signs + Devanagari
   matras/signs + Sinhala signs (ං ඃ, hal kirima ්, dependent vowels ා-ෟ ෲ ෳ)
   + Bengali vowel signs & hasanta (া-ৌ ্ ৗ) */
var COMBINING_ONLY=/^[ា-៓ऀ-ःऺ-ॏ॑-ॗॢ-ॣං-ඃ්ා-ෟෲ-ෳা-্ৗ]+$/;

/* Latin-script packs (uz, jv) cannot be filtered with a script regex — it
   cannot tell Uzbek "rahmat" from English "thank you". Only `mc` is genuinely
   ambiguous: its `d` prompt and its options may be English meanings. Every
   other spoken field is native by construction. So for a `latin:true` pack we
   first collect the native vocabulary from the unambiguous fields, then accept
   an mc string only if it also appears there. Non-Latin packs are untouched —
   they still go through pack.script, so all 8 shipped strings files are
   byte-identical. */
function nativeVocab(pack){
  var set={};
  function mark(s){if(typeof s==='string'&&s)set[s]=1;}
  (pack.lessons||[]).forEach(function(l){
    if(l.step==='test')return;
    (l.vocab||[]).forEach(function(v){mark(v[0]);});
    (l.ex||[]).forEach(function(e){
      if(e.say)mark(e.say);
      if(e.t==='wb')mark(e.a.join(' '));
      if(e.t==='match')e.pairs.forEach(function(pr){mark(pr[0]);});
      if(e.t==='tr')mark(e.a);
    });
  });
  ['vowels','cons','nums','srsSeed'].forEach(function(k){
    (pack[k]||[]).forEach(function(v){mark(v[0]);});});
  return set;
}
function extract(pack){
  var out=[],seen={};
  var native=pack.latin?nativeVocab(pack):null;
  /* `ambiguous` marks strings that may legitimately be English (mc only) */
  function add(s,ambiguous){
    if(typeof s!=='string'||!s)return;
    if(pack.latin){ if(ambiguous&&!native[s])return; }
    else if(!pack.script.test(s))return;
    if(COMBINING_ONLY.test(s))return;
    if(seen[s])return;
    seen[s]=1;out.push(s);
  }
  var ids={};
  (pack.units||[]).forEach(function(u){u.lessons.forEach(function(id){ids[id]=1;});});
  (pack.unitsIntensive||[]).forEach(function(u){u.lessons.forEach(function(id){ids[id]=1;});});
  pack.lessons.forEach(function(l){
    if(!ids[l.id]||l.step==='test')return;
    (l.vocab||[]).forEach(function(v){add(v[0]);});
    (l.ex||[]).forEach(function(e){
      if(e.say)add(e.say);
      if(e.t==='mc'){if(e.d)add(e.d,1);add(e.o[e.a],1);}
      if(e.t==='fill')add(e.s.replace('___',e.o[e.a]));
      if(e.t==='wb')add(e.a.join(' '));
      if(e.t==='match')e.pairs.forEach(function(p){add(p[0]);});
      if(e.t==='tr')add(e.a);
    });
  });
  (pack.vowels||[]).forEach(function(v){add(v[0]);});
  (pack.cons||[]).forEach(function(v){add(v[0]);});
  (pack.nums||[]).forEach(function(v){add(v[0]);});
  (pack.srsSeed||[]).forEach(function(v){add(v[0]);});
  /* the Short trip phrasebook (bn) — its lines are spoken too, and come last
     so existing files stay byte-identical up to this point */
  ((pack.trip&&pack.trip.sections)||[]).forEach(function(sec){
    (sec.lines||[]).forEach(function(l){add(l[0]);});});
  /* the sentence-frame builder assembles noun + suffix, and each assembled
     sentence is spoken, so it needs a clip too */
  ((pack.trip&&pack.trip.frames)||[]).forEach(function(f){
    (f.items||[]).forEach(function(it){add(it[0]+f.s);});});
  return out;
}
/* match python json.dump(..., ensure_ascii=False, indent=0): one string per line */
function serialize(arr){return '[\n'+arr.map(function(s){return JSON.stringify(s);}).join(',\n')+'\n]';}

function run(argv){
  var lang=argv[0],check=argv.indexOf('--check')>=0;
  var conf={ne:{src:'lang/ne.js',out:'audio_strings.json'},km:{src:'lang/km.js',out:'audio_strings_km.json'},my:{src:'lang/my.js',out:'audio_strings_my.json'},si:{src:'lang/si.js',out:'audio_strings_si.json'},lo:{src:'lang/lo.js',out:'audio_strings_lo.json'},ps:{src:'lang/ps.js',out:'audio_strings_ps.json'},mn:{src:'lang/mn.js',out:'audio_strings_mn.json'},bn:{src:'lang/bn.js',out:'audio_strings_bn.json'},nef:{src:'faith/ne.js',out:'audio_strings_nef.json'},kmf:{src:'faith/km.js',out:'audio_strings_kmf.json'},myf:{src:'faith/my.js',out:'audio_strings_myf.json'},sif:{src:'faith/si.js',out:'audio_strings_sif.json'},lof:{src:'faith/lo.js',out:'audio_strings_lof.json'},psf:{src:'faith/ps.js',out:'audio_strings_psf.json'},bnf:{src:'faith/bn.js',out:'audio_strings_bnf.json'},mnf:{src:'faith/mn.js',out:'audio_strings_mnf.json'}}[lang];
  if(!conf)return 'usage: osascript -l JavaScript extract_audio_strings.js ne|km|my|si|lo|ps|mn|bn|nef|kmf|myf|sif|lof|psf|bnf|mnf [--check]';
  var cwd=ObjC.unwrap($.NSFileManager.defaultManager.currentDirectoryPath)+'/';
  var strings;
  if(/f$/.test(lang)){ /* every faith pack shares the nef extraction rules */
    /* faith story reader: the spoken strings are the Nepali side of every
       paragraph (paras[i][0]) plus each section note ([0] of the triple),
       in story order, deduped */
    var faith=null;
    new Function('registerFaith',readFile(cwd+conf.src))(function(p){faith=p;});
    if(!faith)throw new Error('registerFaith never called in '+conf.src);
    var out=[],seen={};
    function addF(t){if(typeof t!=='string'||!t||seen[t])return;seen[t]=1;out.push(t);}
    (faith.stories||[]).forEach(function(st){
      if(st.overview)(st.overview.paras||[]).forEach(function(p){addF(p[0]);});
      (st.sections||[]).forEach(function(s){
      (s.paras||[]).forEach(function(p){addF(p[0]);});
      if(s.note&&s.note.length)addF(s.note[0]);});});
    strings=out;
  }else{
    var pack=loadPackFromSource(readFile(cwd+conf.src));
    strings=extract(pack);
  }
  var txt=serialize(strings);
  var old=null;try{old=readFile(cwd+conf.out);}catch(e){}
  var same=old===txt;
  if(check)return conf.out+': '+(same?'MATCHES the pack ('+(txt.split('\n').length-2)+' strings)':'*** DIFFERS from the pack — rerun without --check to regenerate ***');
  if(same)return conf.out+' already up to date ('+(txt.split('\n').length-2)+' strings)';
  writeFile(cwd+conf.out,txt);
  return 'wrote '+conf.out+' ('+(txt.split('\n').length-2)+' strings'+(old?'; was '+(old.split('\n').length-2):'')+') — now run: python3 generate_audio.py --lang '+lang;
}
