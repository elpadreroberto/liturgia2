const CACHE='liturgia2-v1';
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html','./app.js'])));
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin||event.request.method!=='GET')return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const cached=await cache.match(event.request);
    const network=fetch(event.request).then(response=>{
      if(response&&response.ok)cache.put(event.request,response.clone());
      return response;
    }).catch(()=>null);
    if(cached){event.waitUntil(network);return cached}
    const fresh=await network;
    return fresh||new Response('Sin conexión y sin copia guardada.',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}});
  })());
});
