self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("kazoop-pwa-cache")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/firebase-messaging-sw.js",
          "/icons/Icon-192.png",
          "/icons/Icon-512.png",
        ])
      )
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    (async function () {
      try {
        var res = await fetch(event.request);
        var cache = await caches.open("cache");
        cache.put(event.request.url, res.clone());
        return res;
      } catch (error) {
        return caches.match(event.request);
      }
    })()
  );
});
