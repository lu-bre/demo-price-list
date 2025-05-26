'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/logs/refs/remotes/origin/main": "f8f249b2a9a2e590fda69dffb7bce971",
".git/logs/refs/heads/main": "016923465c72e1e4fb5cb6ae088fc7e6",
".git/logs/HEAD": "016923465c72e1e4fb5cb6ae088fc7e6",
".git/index": "7ef994262e9f0fff2d0cded40d961aef",
".git/objects/ac/da2cbd67152bd1fea54a7987de979b8951a8d2": "4e581e0671662258f0b3eb5098a76f16",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/f6/159e0581a65c7b809f10ffd72ed393e575a466": "0346c0b4f661844a6772244514c37a81",
".git/objects/f6/d82e6664fcfa71cce50c71976a5b762fdafba7": "ccc9720e26c6d5dd1df0b0656933d59e",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/67bc9f5e7b13902c914177f177249f48745b12": "9f98c6e4a64549cb27c52d62123d5944",
".git/objects/25/34a13c262294b694d9490ca10a1a9df5e505f2": "27b6b163e4f94be434b377672a95a77b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/26/6d52e95851c8a5c72c71af69af5075f2c6de31": "899cc631fe4452822a227b380790219c",
".git/objects/f0/e8772249d6cb541f69facb595fb0ff86f97f81": "2057e6c21ab53fd225486a2d4bbb1d3c",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/104b27e70a4576e9176e7ab1a58b4ffb495c69": "1e7c69bc4e74b831d05b15bbe7c5bee2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/d5/d1d60a83c4767a0ae18171ae14d58fc6a75956": "3df190551f93872e93b4a357ef2779a7",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/ed/322a09a34060bbaef67b639b04ce6ffe175a9d": "d5dc619e754e1e6ee54fc4d62dbc5b07",
".git/objects/6a/ab01a010338f46b401b73c3c366e072bd00b83": "8043c686ae1450521af6b5436275805d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/69/ab4d758adf91cc852c62e1956418e94197aea1": "5d18aaa431e654dfee884323dfa82d52",
".git/objects/69/2adf85c41fa2453e30acd1a814335a20e999e3": "e8041d6fa3a73227a83ecd9b8ed71286",
".git/objects/ec/b99bfc342f339ba228e0a11907e4c52adc4b73": "a53a3d590f0be6f09f4aec804ce89e1d",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/2b/5d8f3f1b5ac33920b135fcc5b9a3c7c860150a": "9d335243e306f0df426904c3ba01c66d",
".git/objects/2b/6e52d3397ec636a88704ddb5e5db570c35c891": "dd0fc1e9136de72e8a1b304a77c25e8d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/03bf1bcdfa089275c47d0e09ad70afb3cf257b": "334e1ec0638292a6c6fe86d0b12886cb",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/fa/db68a3eea20354e9bbd41e19f9a6e596897718": "c6f58ed546b85e31932b6f0ab9665320",
".git/objects/ba/e480e7619ebbc15dcf0d5d3f7f42afa7a2c8c3": "ddb3788d10485d60d820d20a761bc09e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d3/bae87808f8e378f0e56a9ca8c16870670b1033": "23fbcbd634d92767cc46152cd0fd81b8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/64/e89530e939c22a94bae11adbc8907989ebdb90": "b76b8c797bd36fe62e856725320f2d61",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/dd/b70f5afdaf00c8eef486f22b216ef2caea83e4": "ec008b5a9c4e91b0d9913c85e8572679",
".git/objects/5d/65f316f38ff469118a6978afddc49216c52a80": "141f1818ceacbfb8ab2f482508774c89",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/ca/7b935443c03d2cfc09b967c697a64bfbe2817c": "2dbe0379b7733730f5e5e1c770fb3db3",
".git/objects/75/7a18ea938e585550939f5391669c955145aa5d": "f3a7015d7ecc0dda04ef91b9a0466919",
".git/objects/98/3049913c933981eb9a54196a927a00605364ad": "55931cd44481ab6f16ef28ca63ae76a8",
".git/objects/21/e69878d33f4ca2e7321cb4bb04ce1e14a5f041": "a7480f683c41047e9fc19e746590c777",
".git/objects/21/684ee20ddc928852cf60b57a9d0e723a512931": "118d975563d72407edc98272618d5242",
".git/objects/f1/778cbdfdefdd544299a0bd3ae8525bdbe78b40": "bce5a7923c09e40679a5fa06471de974",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/2f/42dbe8a67f583d843f86a193254235d652c6ac": "869d00e8023fb8b434b843ffa0de9afc",
".git/objects/2f/54b96ee1dc701d7c41fbcab389b0519dfe5ffa": "1ad1a1dc9d1ae96359f8f4b8596148e1",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/d4/07e7f9ac6f8547f19ece5e11022f162245b85a": "f7c78402380d875f0fc4a2ae74af8825",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/15/5f4e643ef5a89855a6134b23756141dc6b6891": "8af6c00b348a878c0f5d820c2fd119d5",
".git/objects/15/afc61734bef61734bb3593595a7b373077e627": "9269b89efb761ae9598c5fb8baf24729",
".git/objects/43/22555514a3438f9f0b9f3026c098760cacec83": "80450b9c5a73dd2b5e08947e4a809858",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/42/7c43c3635de00acb6fcf943c47494aea6d88c1": "54c99431c34f0421752dde2362d39105",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/71b68907ebf165f3925bb1b9c8b51c2204023e": "289edeb34ad96ec104e698c9d8126f31",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/bd/b3c343aa591cd8b5d3ad60bfc2883b1468ef5f": "96705c43bf563ae27c4f73263322bdf2",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/e7/f5390ca08cf94aab18916e5f0a98e0e352d38b": "d58888c0de4aa7c25ff63f53430b1cb1",
".git/objects/e7/3e642461e9f221d4ca7625331c3213b788f17d": "268853be7a84f85d109df7714cafe965",
".git/objects/a2/bcea2c3200f30ca501c84d9a17f8288fd6a7a3": "a4557ed78d69fffc17510e4ceff477ee",
".git/objects/2e/614922abfea0205555465dc5572801182e41ed": "95e6b458ba7625c92ccd978e0dfde9cf",
".git/objects/52/9e5bffcb4d6ff43ec33275e426ef0e516bd9a4": "10527084f7e87d49063b86ccc14df59d",
".git/objects/f8/c6ef275fe7fd55468170a06488c61655b0212e": "77285a775057bd273d0305f3ee0f33d9",
".git/objects/39/ae890dfdaabc50bc2eaf4b0d1f6900189f3155": "df2f39c17447e881b97dbb0746f7e646",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/39/82937397402d29eb6d7780c35396cc112a4e31": "62750625499ae41de4aad77f0170449b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/4d62f215442fc765ad697d386bb152c15e9734": "ef01f68f17186a3b8e03772bb83a41b9",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/config": "ab8293b1b3e6805c34db19915005c049",
".git/COMMIT_EDITMSG": "38ca492f928ec1ff0bcc093847dc17ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/refs/remotes/origin/main": "cae5dea354c2bb934750e089f1962105",
".git/refs/heads/main": "cae5dea354c2bb934750e089f1962105",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"flutter_bootstrap.js": "86329f301a3ff341c4983be60f0f2d33",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "3015c64c715535f9df8110147ec08d97",
"version.json": "f9f0a87e6719a7dcb249c3948966e212",
"main.dart.js": "9ea2ad1e17def382e70ac68adca7ecde",
"index.html": "1b487e351b1b976f08dbc8aaed7f5926",
"/": "1b487e351b1b976f08dbc8aaed7f5926",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"assets/NOTICES": "26b838d34762c4b653f91cdbe1d63f30",
"assets/AssetManifest.json": "dc5aaeffa560e2944213e425fb1468a3",
"assets/AssetManifest.bin.json": "e867c277c7a6783a396948673a5509a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "836b9509fedcb1d6713262f1d88b0161",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0c37c24b40b8c8c50453473bc792a57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/logo_bw.png": "881747e816f524b193aefa499c2611e9",
"assets/assets/logo.svg": "e96675ba064202381510b3e6231f16c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
