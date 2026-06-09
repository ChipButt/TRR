(function(){
  const BUILD = "public-2026-06-09-app-loader-hotfix";

  function showError(err){
    console.error("Restoration Route loader failed", err);
    try{
      const root=document.getElementById("homeRoot");
      if(root){
        root.innerHTML='<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0c0905;color:#f6e6bd;font-family:Georgia,serif;text-align:center;padding:24px"><div><h1 style="margin:0 0 12px">Restoration Route</h1><p style="margin:0">The app had trouble