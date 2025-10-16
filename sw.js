// sw.js (safe cache-first shell, skip audio)
const CACHE = 'v2';

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE)));

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip big audio files so the network can stream them
  if (url.pathname.includes('/audio/')) return;

  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetched = fetch(event.request).then(network => {
        if (network.ok && network.type !== 'opaque') {
          const copy = network.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return network;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
