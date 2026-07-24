// JXA: dump one zone of a course, fully, for a learner's-eye read.
// Usage: osascript -l JavaScript content-review/show.js <lang> <zone> [intensive]
function run(argv){
 var lang=argv[0], zoneN=parseInt(argv[1],10);
 var track=(argv[2]==='intensive')?'intensive':'main';
 var lean=(argv[2]==='lean'||argv[3]==='lean');
 var rd=function(pt){return ObjC.unwrap($.NSString.stringWithContentsOfFileEncodingError(
   $(pt).stringByStandardizingPath,$.NSUTF8StringEncoding,null));};
 var p=null; new Function('registerPack', rd('lang/'+lang+'.js'))(function(x){p=x;});
 var byId={}; p.lessons.forEach(function(l){byId[l.id]=l;});
 var units=(track==='intensive')?p.unitsIntensive:p.units;
 var u=units[zoneN-1];
 var out=['##### '+lang.toUpperCase()+' ZONE '+zoneN+' — '+u.t+' ('+track+') #####'];
 u.lessons.forEach(function(id){ var l=byId[id]; if(!l)return;
   out.push('\n### '+l.id+'  ['+l.step+']  '+(l.title||'')+(l.meta?'  — '+l.meta:''));
   if(l.vocab&&l.vocab.length)l.vocab.forEach(function(v){out.push('  VOCAB  '+v[0]+'  /'+v[1]+'/  = '+v[2]);});
   (l.ex||[]).forEach(function(e,i){
     if(lean && (e.t==='mc'||e.t==='li'||e.t==='match'))return;
     var s=i+'. ['+e.t+'] ';
     if(e.tag)s+='{'+e.tag+'} ';
     if(e.q)s+='Q: '+e.q+'  ';
     if(e.body)s+='NOTE: '+e.body.replace(/<\/?[^>]+>/g,'').replace(/\s+/g,' ')+'  ';
     if(e.tip)s+='TIP: '+e.tip+'  ';
     if(e.eg)s+='EG: '+e.eg+'  ';
     if(e.say)s+='SAY: '+e.say+'  ';
     if(e.s)s+='FILL: "'+e.s+'"  ';
     if(e.d)s+='PROMPT: '+e.d+'  ';
     out.push('  '+s);
     if(e.o){var mk=e.o.map(function(o,oi){return (oi===e.a?'*':' ')+o;}); out.push('       opts: '+mk.join('  |  '));}
     if(e.t==='wb'){out.push('       answer: '+e.a.join(' ')+'   pool: '+(e.pool||e.a).join(' '));}
     if(e.r)out.push('       rom: '+e.r);
     if(e.pairs)e.pairs.forEach(function(pr){out.push('       pair: '+pr[0]+'  =  '+pr[1]);});
   });
 });
 return out.join('\n');
}
