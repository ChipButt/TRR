const APP_BUILD = "launch-audit-2026-10-04-v2";
const CACHE = "restoration-route-public-static-" + APP_BUILD;
const ASSETS = [
  'index.html',
  'app.js',
  'data.js',
  'jsQR.js',
  'styles.css',
  'manifest.webmanifest',
  'assets/home_ui.webp',
  'assets/menu_ui.webp',
  'assets/trr_logo_menu.png',
  'assets/cog_loader.png',
  'assets/banter_box.webp',
  'assets/garage_directory_exact_from_json.webp',
  'assets/wall_map_exact_from_json.webp',
  'assets/component_assets_scanner_tool_transparent.webp',
  'assets/engine_damaged_true_transparent.webp',
  'assets/component_assets_exhaust_broken.png',
  'assets/component_assets_fuel_tank_broken.png',
  'assets/component_assets_gearbox_broken.webp',
  'assets/component_assets_headlight_broken.png',
  'assets/component_assets_horn_fixed.png',
  'assets/component_assets_oil_filter_broken.webp',
  'assets/component_assets_radiator_broken.webp',
  'assets/component_assets_wheel_broken.png',
  'assets/menu_buttons_restoration_route_button_profile_true_alpha.webp',
  'assets/menu_buttons_restoration_route_button_issues_true_alpha.webp',
  'assets/restoration_route_invite_friends_keyed.png',
  'assets/restoration_route_set_up_meet_keyed.png'
]

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
