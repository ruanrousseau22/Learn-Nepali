// JXA: enumerate every topic (5-lesson arc) across all 11 courses + the
// Nepali Intensive track. Output: JSON [{code,track,zone,zoneName,topic,title}].
function run(){
 var rd=function(pt){return ObjC.unwrap($.NSString.stringWithContentsOfFileEncodingError(
   $(pt).stringByStandardizingPath,$.NSUTF8StringEncoding,null));};
 var codes=['ur','uz','jv','km','my','bn','si','lo','mn','ps','ne'];
 var rows=[];
 codes.forEach(function(c){
   var p=null; new Function('registerPack', rd('lang/'+c+'.js'))(function(x){p=x;});
   var byId={}; p.lessons.forEach(function(l){byId[l.id]=l;});
   function walk(units,track){ (units||[]).forEach(function(u,zi){
     for(var i=0;i<u.lessons.length;i+=5){ var l=byId[u.lessons[i]];
       rows.push({code:c,track:track,zone:zi+1,zoneName:u.t,topic:l.id,title:l.title||''}); }
   }); }
   walk(p.units,'main');
   if(p.unitsIntensive&&p.unitsIntensive.length)walk(p.unitsIntensive,'intensive');
 });
 return JSON.stringify(rows);
}
