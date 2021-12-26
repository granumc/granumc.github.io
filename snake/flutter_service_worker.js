'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-maskable-192.png": "1b9c085e4b7c16ad19724b07104b7aab",
"icons/Icon-maskable-512.png": "048a6e8784fef1ca16b0fcde84f181b0",
"icons/Icon-512.png": "048a6e8784fef1ca16b0fcde84f181b0",
"icons/Icon-192.png": "1b9c085e4b7c16ad19724b07104b7aab",
"version.json": "6f9506ed96ba6b3ac328b9be9cf7c518",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/fruits/strawberry-96.png": "0783d0078a013849a677c906be0e1acd",
"assets/assets/images/fruits/radish-96.png": "3d44581d37411cc00368360afed9e97a",
"assets/assets/images/fruits/paprika-96.png": "3a589d484eca7ec4184e97e706fe1d1f",
"assets/assets/images/fruits/blueberry-96.png": "c8977dc182c8c64f2696dc8d35cfb781",
"assets/assets/images/fruits/broccoli-96.png": "b42907c5a4a1bc190a5df577169b3bcc",
"assets/assets/images/fruits/raspberry-96.png": "79029654886efab3b5280f968642a4a4",
"assets/assets/images/fruits/beet-96.png": "a6de3ac7f3db68334159a0ccde39f368",
"assets/assets/images/fruits/corn-96.png": "e83a4ffbbcb78dfce46a81229346f36f",
"assets/assets/images/fruits/mint-96.png": "5badf2250fa0ffc4cda197864609953c",
"assets/assets/images/fruits/pear-96.png": "14ec6b8d75fa2e4db369318495d3c963",
"assets/assets/images/fruits/cherry-96.png": "cec376ebfeceeb601907527ec76d23d7",
"assets/assets/images/fruits/watermelon-96.png": "2a921a8d2839d841d2cc5bd26ea2ddc8",
"assets/assets/images/fruits/peach-96.png": "ae8987153b736a5217640e72355803bd",
"assets/assets/images/fruits/apple-96.png": "fedce394a5f039caf8f2a08c82b0806f",
"assets/assets/images/fruits/tomato-96.png": "17f9a942a12a46fe3c0ab70b3297e4df",
"assets/assets/images/fruits/mushroom-96.png": "f01e299ceadf3837ce53154999b97373",
"assets/assets/images/fruits/grape-96.png": "c76b2fed3864f3022a2afcf9af0d56f3",
"assets/assets/images/fruits/spinach-96.png": "d7cb3a09c2be42938fe36e7f47acbb76",
"assets/assets/images/fruits/pumpkin-96.png": "41f2def31168ff364f4e5cbcb2cc9c54",
"assets/assets/images/fruits/wholeWatermelon-96.png": "c4d948b9090eb2d4443fc2f8f8f1ac10",
"assets/assets/images/fruits/pineapple-96.png": "f4bf5bd8ee433373dcb386c02a6ac570",
"assets/assets/images/fruits/artichoke-96.png": "a831a041739c4e132559a7d4c7e7bb0d",
"assets/assets/images/fruits/wheat-96.png": "2eaa4d640608c4691722a1e6ed15af71",
"assets/assets/images/fruits/apricot-96.png": "e864302ecee2b9188df86e64ae82c4d2",
"assets/assets/images/fruits/plum-96.png": "6c49fa8f02bce80578a212806f46f37d",
"assets/assets/images/ui/grid3-96.png": "a9dbdb2cd680d26e9940983a3eddc3ec",
"assets/assets/images/ui/speed-slow-96.png": "a9d1510ddc57d9166e5f66d1c44e8288",
"assets/assets/images/ui/speed-fast-96.png": "4c877246518b6b86a5be70684c58c244",
"assets/assets/images/ui/ball1-96.png": "5071bcf2606bf3efafcf996e82105040",
"assets/assets/images/ui/grid4-96.png": "f77f59e221bb4e5536a4c81ee75ba202",
"assets/assets/images/ui/speed-normal-96.png": "f1f7679dfb106aeeae5f72c1330c8dbe",
"assets/assets/images/ui/ball3-96.png": "7488fe244503d40f8f8e32152959dc9d",
"assets/assets/images/ui/swipe-256.png": "935474377f12ff120274a3176b4e2dcf",
"assets/assets/images/ui/keyboard-256.png": "d5ea153cab00faf348ecef69bfe7d94b",
"assets/assets/images/ui/fruits-96.png": "ade23d21e6da32219e100553763e0b51",
"assets/assets/images/ui/winner-96.png": "828a3bfad55f1937c888ff13bc849750",
"assets/assets/images/ui/grid2-96.png": "eafe30b52e7aa843765de540e0b3826b",
"assets/assets/images/ui/ball5-96.png": "e44b64e3e4d0eca890e158f12b4c879c",
"assets/NOTICES": "56283561c7c299bbd18456cae1c5551d",
"assets/AssetManifest.json": "c21c783489140bba28718c8da78710dd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "87b49d876a18a9d5e36b133e1c89ce50",
"favicon.ico": "12995f2c37bba030bd528c82bea76749",
"index.html": "287e1534c0061ba97460faf223d6de7a",
"/": "287e1534c0061ba97460faf223d6de7a",
"manifest.json": "c56e79fe8766b931504cafaca3855361",
"main.dart.js": "98914c8546db49fdfc55e6bb8401497e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
