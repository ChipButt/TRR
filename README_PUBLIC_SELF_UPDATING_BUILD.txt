The Restoration Route public build

Internal build ID:
public-2026-05-24-self-updating-auth-scanner-layout

This build does not require users to open the app with ?v=... after upload.

What changed:
- app.js contains an internal APP_BUILD constant.
- service-worker.js uses the same internal build ID for cache naming.
- app shell files are loaded network-first, so GitHub uploads replace old app code without relying on user-visible URL version numbers.
- when APP_BUILD changes, old editor/debug layout overrides are cleared only. User details, profile, auth memory, progress, and completed vehicle count are preserved.
- the app asks the service worker to update itself and reload once if a newer worker takes control.
