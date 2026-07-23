const CACHE='sa-imc-v3-1';
const ASSETS=['./','./index.html','./calendar.html','./manifest.webmanifest','./SA55_IMC_Complete_Calendar_v2.ics','./SA55_IMC_5_August_Training.ics'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request))));
