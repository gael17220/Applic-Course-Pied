self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // Un Service Worker basique pour valider les critères PWA de Chrome
  event.respondWith(fetch(event.request).catch(() => new Response('Offline')));
});
