(function(){
  const APP_JS = "app.js?build=public-2026-06-09-runtime-repair-v2";

  function fail(error){
    console.error("Restoration Route loader failed", error);
    try{
      const root = document.getElementById("homeRoot");
      if(root){
        root.innerHTML = '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0c0905;color:#f6e6bd;font-family:Georgia,serif;text-align:center;padding