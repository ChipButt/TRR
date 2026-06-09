(function(){
  const u='app.js?build=public-2026-06-09-app-loader-hotfix';
  const lf=String.fromCharCode(10);
  function fail(e){console.error('Restoration Route loader failed',e);const r=document.getElementById('homeRoot');if(r)r.textContent='Restoration Route could not start. Please refresh.';}
  function patch(s){
    s=s.replace(/value\.split\(\s*\/\s*\n\s*\/\s*\)/,'value.split(/\\r?\\n/)');
    s=s.replace(/function shortName\(n\)\{[\s\S]*?function wrap\(/,
      'function shortName(n){return n'
      +'.replace("The Piston Club","PISTON\\\\nCLUB")'
      +'.replace("Oily Rag","OILY\\\\nRAG")'
      +'.replace("Seven Mile","SEVEN\\\\nMILE")'
      +'.replace("Mr. Watson’s","MR.\\\\nW