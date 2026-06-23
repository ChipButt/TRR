(function(){
  const APP_JS = "app.js?build=venue-ui-2026-06-23-v28";

  function fail(error){
    console.error("Restoration Route loader failed", error);
    try{
      const root = document.getElementById("homeRoot");
      if(root){
        root.innerHTML = '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0c0905;color:#f6e6bd;font-family:Georgia,serif;text-align:center;padding:24px"><div><h1 style="margin:0 0 12px">Restoration Route</h1><p style="margin:0">The app had trouble starting. Please refresh once.</p></div></div>';
      }
    }catch(_){}
  }

  const script = document.createElement("script");
  script.src = APP_JS;
  script.defer = true;
  script.onerror = fail;
  document.head.appendChild(script);
})();
