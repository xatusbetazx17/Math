/* Simple service worker for offline caching */
const CACHE_NAME = 'math-study-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './unit5_polynomials_quiz.html',
  './unit5_quick_review.html',
  './references.html',
  './manifest.webmanifest'
];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE)));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null))))
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((res) => res || fetch(event.request)));
});
