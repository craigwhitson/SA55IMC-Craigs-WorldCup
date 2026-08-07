const CACHE='cw-final-altius-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./hero-banner.jpg','./team-photo.jpg','./south-africa-flag.svg','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./Craig_Whitson_World_Cup_2026.ics'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
