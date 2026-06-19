(function(){
  var src = "https://cdn.jsdelivr.net/gh/ChipButt/TRR@4c6946f2e45b0e8ff6d2f4d672a9e0d6a6c31638/data.js";
  document.write('<script src="' + src + '"><\/script>');
  document.write('<script>(function(){var d=window.RESTORATION_ROUTE_DATA;if(!d||!d.assets)return;var b="?build=venue-ui-2026-06-19-v2";for(var i=1;i<=8;i++){d.assets["venue"+i]="assets/8_venue_assets_venue_"+i+"_ui.webp"+b;}d.assets.directory="assets/8_venue_assets_garage_directory_ui.webp"+b;d.tabAssetOverrides=d.tabAssetOverrides||{};for(var j=1;j<=8;j++){d.tabAssetOverrides["assets/venue_"+j+"_ui.jpg"]="assets/8_venue_assets_venue_"+j+"_ui.webp"+b;}if(d.layout&&d.layout.venueTemplate&&Array.isArray(d.layout.venueTemplate.layers)&&!d.__venueTextLoweredV2){d.layout.venueTemplate.layers.forEach(function(l){if(l&&l.type==="text"&&typeof l.y==="number")l.y+=12;});d.__venueTextLoweredV2=true;}})();<\/script>');
})();
