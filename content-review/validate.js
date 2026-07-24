// JXA: validate one course pack. Usage: osascript -l JavaScript content-review/validate.js <lang>
function run(argv){
 var lang=argv[0];
 var rd=function(pt){return ObjC.unwrap($.NSString.stringWithContentsOfFileEncodingError(
   $(pt).stringByStandardizingPath,$.NSUTF8StringEncoding,null));};
 var p=null;
 try{ new Function('registerPack', rd('lang/'+lang+'.js'))(function(x){p=x;}); }
 catch(e){ return JSON.stringify({parseError:e.message}); }
 var scriptRe={ur:/[؀-ۿ]/,uz:null,jv:null}[lang]||/[؀-ۿ]/;
 var probs=[], romLeak=[];
 // native->rom map from all vocab, to catch same-sound listen options
 var rom={}; p.lessons.forEach(function(l){(l.vocab||[]).forEach(function(v){if(v[0]&&v[1])rom[v[0]]=v[1];});});
 // romanization must not contain native script
 p.lessons.forEach(function(l){
   (l.vocab||[]).forEach(function(v){ if(v[1]&&scriptRe.test(v[1]))romLeak.push(l.id+' vocab '+v[0]); });
   (l.ex||[]).forEach(function(e,i){var w=l.id+'#'+i;
     if(e.r&&scriptRe.test(e.r))romLeak.push(w+' r');
     if(e.t==='mc'||e.t==='li'){
       if(!(e.a>=0&&e.a<e.o.length))probs.push(w+' a-range');
       var seen={}; e.o.forEach(function(o){if(seen[o])probs.push(w+' dup-opt'); seen[o]=1;});
       if(e.r&&e.o.indexOf(e.r)>=0)probs.push(w+' r=opt');
       if(e.d&&e.o.indexOf(e.d)>=0)probs.push(w+' d=opt');
       if(e.t==='li'&&e.o[e.a]!==e.say)probs.push(w+' li-a!=say');
       if(e.t==='li'){var rs={}; e.o.forEach(function(o){var r=rom[o]; if(r){if(rs[r])probs.push(w+' li-same-sound:'+r); rs[r]=1;}});}
     }
     if(e.t==='match'){var ks={},vs={}; (e.pairs||[]).forEach(function(pr){
       if(ks[pr[0]])probs.push(w+' dupkey'); if(vs[pr[1]])probs.push(w+' dupval'); ks[pr[0]]=1;vs[pr[1]]=1;});}
     if(e.t==='wb'){var pool=e.pool||e.a; e.a.forEach(function(x){if(pool.indexOf(x)<0)probs.push(w+' wb-ans-not-in-pool');});}
   });
 });
 // structure: topics of 5 in order
 var order=['learn','recognize','build','mix','checkpoint'], byId={}, badStruct=0, topics=0;
 p.lessons.forEach(function(l){byId[l.id]=l;});
 (p.units||[]).forEach(function(u){for(var i=0;i<u.lessons.length;i+=5){topics++;
   for(var j=0;j<5;j++){var l=byId[u.lessons[i+j]]; if(!l||l.step!==order[j])badStruct++;}}});
 return JSON.stringify({parses:true, lessons:p.lessons.length, topics:topics, badStruct:badStruct,
   integrityProblems:probs, romLeaks:romLeak}, null, 1);
}
