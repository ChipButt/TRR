const APP_BUILD = "venue-ui-2026-06-23-v22";
const CACHE = "restoration-route-public-static-" + APP_BUILD;
const ASSETS = [
  'index.html',
  'app.js',
  'data.js',
  'jsQR.js',
  'styles.css',
  'manifest.webmanifest',
  'firestore.rules',
  'assets/8_venue_assets_garage_directory_ui.webp',
  'assets/8_venue_assets_venue_1_ui.jpg',
  'assets/trr_logo_menu.png',
  'assets/cog_loader.png',
  'assets/Repair Transition Animation.webm',
  'assets/banter_box.webp',
  'assets/component_assets_exhaust_broken.png',
  'assets/component_assets_exhaust_fixed.png',
  'assets/component_assets_fuel_tank_broken.png',
  'assets/component_assets_fuel_tank_fixed.png',
  'assets/component_assets_gearbox_broken.webp',
  'assets/component_assets_gearbox_fixed.png',
  'assets/component_assets_headlight_broken.png',
  'assets/component_assets_headlight_fixed.png',
  'assets/component_assets_horn_broken.png',
  'assets/component_assets_horn_fixed.png',
  'assets/component_assets_oil_filter_broken.webp',
  'assets/component_assets_oil_filter_fixed.png',
  'assets/component_assets_radiator_broken.webp',
  'assets/component_assets_radiator_fixed.webp',
  'assets/component_assets_scanner_tool.webp',
  'assets/component_assets_scanner_tool_transparent.webp',
  'assets/component_assets_wheel_broken.png',
  'assets/component_assets_wheel_fixed.png',
  'assets/engine_damaged_true_transparent.webp',
  'assets/engine_repaired_true_transparent.webp',
  'assets/garage_directory_assets_directory_tab_buttons_garage_directory_tab_button.webp',
  'assets/garage_directory_assets_directory_tab_buttons_gilks_garage_tab_button.webp',
  'assets/garage_directory_assets_directory_tab_buttons_mr_watsons_tab_button.webp',
  'assets/garage_directory_assets_directory_tab_buttons_oily_rag_tab_button.webp',
  'assets/garage_directory_assets_directory_tab_buttons_pats_baps_tab_button.webp',
  'assets/garage_directory_assets_directory_tab_buttons_seven_mile_tab_button.webp',
  'assets/garage_directory_assets_directory_tab_buttons_the_long_itch_diner_tab_button.webp',
  'assets/garage_directory_assets_directory_tab_buttons_the_man_cave_tab_button.png',
  'assets/garage_directory_assets_directory_tab_buttons_the_piston_club_tab_button.webp',
  'assets/garage_directory_assets_home_button.webp',
  'assets/garage_directory_assets_repaired_stamp.webp',
  'assets/garage_directory_exact_from_json.webp',
  'assets/home_ui.webp',
  'assets/horn_noise.mp3',
  'assets/menu_buttons_restoration_route_button_issues_true_alpha.webp',
  'assets/menu_buttons_restoration_route_button_leaderboard_true_alpha.webp',
  'assets/menu_buttons_restoration_route_button_log_out_true_alpha.webp',
  'assets/menu_buttons_restoration_route_button_profile_true_alpha.webp',
  'assets/menu_ui.webp',
  'assets/restoration_route_invite_friends_keyed.png',
  'assets/restoration_route_set_up_meet_keyed.png',
  'assets/repair_ui_background_v78.png',
  'assets/scanner_home_button.png',
  'assets/scanner_ui.webp',
  'assets/vehicle_broken_placeholder.png',
  'assets/vehicle_fixed_placeholder.png',
  'assets/wall_map_exact_from_json.webp',
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.startsWith("restoration-route-public-static-") && k !== CACHE).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener("message", event => {
  if(event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

function networkFirst(request, fallbackKey) {
  return fetch(request, {cache:"no-store"}).then(net => {
    const copy = net.clone();
    caches.open(CACHE).then(cache => cache.put(fallbackKey || request, copy)).catch(()=>{});
    return net;
  }).catch(() => caches.match(request).then(resp => resp || (fallbackKey ? caches.match(fallbackKey) : null)));
}

function cacheFirst(request) {
  return caches.match(request).then(resp => resp || fetch(request).then(net => {
    const copy = net.clone();
    caches.open(CACHE).then(cache => cache.put(request, copy)).catch(()=>{});
    return net;
  }));
}

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const sameOrigin = url.origin === self.location.origin;
  if(!sameOrigin) return;

  const isNavigation = event.request.mode === "navigate";
  const isAppShellFile = /\/(?:index\.html|app\.js|data\.js|jsQR\.js|styles\.css|manifest\.webmanifest|service-worker\.js)$/i.test(url.pathname);

  if(isNavigation) {
    event.respondWith(networkFirst(event.request, "index.html"));
    return;
  }

  if(isAppShellFile) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(cacheFirst(event.request).catch(() => caches.match("index.html")));
});
