// JXA: dump each language pack's landing-page data as JSON (no Node on this Mac).
// Run: osascript -l JavaScript scratchpad/landing_data.js
function run(){
  var rd=function(p){return ObjC.unwrap($.NSString.stringWithContentsOfFileEncodingError(
    $(p).stringByStandardizingPath,$.NSUTF8StringEncoding,null));};
  var codes=['ne','km','my','bn','si','lo','ps','mn','ur','uz','jv'];
  var out=[];
  codes.forEach(function(c){
    var p=null; new Function('registerPack', rd('lang/'+c+'.js'))(function(x){p=x;});
    var units=p.units||[];
    var mainLessons=0; units.forEach(function(u){mainLessons+=(u.lessons||[]).length;});
    out.push({
      code:p.code, name:p.name, nativeName:p.nativeName, latin:!!p.latin,
      ttsLocale:p.ttsLocale||'',
      zones:units.length, topics:Math.round(mainLessons/5), lessons:mainLessons,
      srsSeed:(p.srsSeed||[]).map(function(r){return [r[0],r[1],r[2]];}),
      nums:(p.nums||[]).map(function(r){return [r[0],r[1]];}),
      vowels:(p.vowels||[]).map(function(r){return [r[0],r[1]];}),
      cons:(p.cons||[]).map(function(r){return [r[0],r[1]];}),
      /* Short-term phrasebook, for the /<slug>-phrases pages. Notes are
         authored HTML (<b> etc) and are emitted raw on purpose — the app
         renders them the same way. Everything else is escaped downstream. */
      trip:(function(){
        var t=p.trip; if(!t)return null;
        return {
          native:t.native||'',
          sections:(t.sections||[]).map(function(s){
            return {id:s.id,t:s.t,d:s.d||'',note:s.note||'',
                    lines:(s.lines||[]).map(function(l){return [l[0],l[1],l[2]];})};
          }),
          frames:(t.frames||[]).map(function(f){
            return {s:f.s,sr:f.sr,en:f.en,t:f.t,
                    items:(f.items||[]).map(function(i){return [i[0],i[1],i[2]];})};
          })
        };
      })(),
      hero:(p.art&&p.art.hero)||''   /* '' for ne — its scenery is the built-in default */
    });
  });
  return JSON.stringify(out);
}
