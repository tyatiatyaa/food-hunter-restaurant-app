import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/[name]icon-1.png',
  './icons/[name]icon-2.png',
  './icons/[name]icon-3.png',
  './icons/[name]icon-4.png',
  './icons/[name]icon-5.png',
  './icons/[name]icon-6.png',
  './icons/[name]icon-7.png',
  './icons/[name]icon-8.png',
  './index.html',
  './images/logo/logo.png',
  './images/heros/hero-image_2.jpg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
