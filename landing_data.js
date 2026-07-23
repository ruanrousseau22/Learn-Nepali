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
      hero:(p.art&&p.art.hero)||''   /* '' for ne — its scenery is the built-in default */
    });
  });
  return JSON.stringify(out);
}
