const cacheName = 'my-app-cache';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/component/card-capital.js',
  '/component/card-search.js',
  '/component/card-filter.js',
  '/component/city.json',
  '/img/clear-background.jpg',
  '/img/clear.png',
  '/img/clouds-background.jpg',
  '/img/clouds.png',
  '/img/drizzle-background.jpg',
  '/img/drizzle.png',
  '/img/rain-background.jpg',
  '/img/rain.png',
  '/img/snow-background.jpg',
  '/img/snow.png',
  '/img/humidity.png',
  '/img/wind.png',
  '/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
