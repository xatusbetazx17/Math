// sw.js (replace CACHE_NAME and add new URLs)
const CACHE_NAME = 'math-v4';
const ASSETS = [
  './',
  './index.html',
  './algebra_quiz_notebook.html',
  './algebra_units6_9_quiz.html',
  './unit5_quick_review.html',
  './unit5_polynomials_quiz.html',
  './practice_exam1.html',      // NEW
  './random_practice.html',     // NEW
  './references.html'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME&&caches.delete(k)))));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
