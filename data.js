(function(){
  var src = "https://cdn.jsdelivr.net/gh/ChipButt/TRR@4c6946f2e45b0e8ff6d2f4d672a9e0d6a6c31638/data.js";
  document.write('<script src="' + src + '"><\/script>');
  document.write('<script>(function(){var d=window.RESTORATION_ROUTE_DATA;if(!d||!d.assets)return;var b="?build=venue-ui-2026-06-19-v3";var urls=[];for(var i=1;i<=8;i++){var u="assets/8_venue_assets_venue_"+i+"_ui.webp"+b;d.assets["venue"+i]=u;urls.push(u);}d.assets.directory="assets/8_venue_assets_garage_directory_ui.webp"+b;urls.push(d.assets.directory);d.tabAssetOverrides={};if(d.components){Object.keys(d.components).forEach(function(k){var c=d.components[k]||{};[c.broken,c.fixed].forEach(function(u){if(u)urls.push(u);});});}if(d.assets){[d.assets.repairStamp,d.assets.homeButton,d.assets.manCaveTab].forEach(function(u){if(u)urls.push(u);});}var seen={};urls.forEach(function(u){if(!u||seen[u])return;seen[u]=true;var img=new Image();img.decoding="async";img.src=u;});}})();<\/script>');
})();
