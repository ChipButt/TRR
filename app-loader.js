(function(){
  function fail(e){
    console.error('Restoration Route loader failed',e);
    var r=document.getElementById('homeRoot');
    if(r)r.textContent='Restoration Route could not start. Please refresh.';
  }
  function patch(s){
    s=s.replace(/value\.split\(\s*\/\s*\n\s*\/\s*\)/,'value.split(/\\r?\\n/)');
    s=s.replace(/function shortName\(n\)\{[\s\S]*?function wrap\(t,max,lines\)\{/,
      'function shortName(n){var m={"The Piston Club":"PISTON