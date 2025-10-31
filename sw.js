// sw.js (network-first for HTML, cache-first for assets)
const VERSION = 'v16';
const CORE = [
  '/', '/index.html',
  '/practice_exam1.html', '/practice_exam1-v2.html', '/practice_exam2.html',
  '/random_practice.html', '/random_practice_hard.html',
  '/algebra_quiz_notebook.html', '/algebra_units6_9_quiz.html',
  '/unit5_quick_review.html', '/unit5_polynomials_quiz.html',
  '/references.html', '/audio.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(CORE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== VERSION ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

// Network-first for HTML/navigation; cache-first for everything else
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const accept = req.headers.get('accept') || '';
  const isHTML = req.mode === 'navigate' || accept.includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
        return res;
      }).catch(() =>
        caches.match(req).then(r => r || caches.match('/index.html'))
      )
    );
  } else {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
        return res;
      }))
    );
  }
});
