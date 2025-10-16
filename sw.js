self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Don’t touch audio files — let the browser stream them
  if (url.pathname.includes('/audio/')) return;

  // For everything else, just do a normal fetch (no caching here)
  event.respondWith(fetch(event.request));
});
