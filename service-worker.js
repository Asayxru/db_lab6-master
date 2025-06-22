/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9135619c74911efcb49e9e630a563764"
  },
  {
    "url": "assets/css/0.styles.def04a8b.css",
    "revision": "cb49ffec1cf1d8a9f9be0ce5257e2df2"
  },
  {
    "url": "assets/img/delmcar.a48b6275.jpg",
    "revision": "a48b6275013bf983eb8e5375cae39d39"
  },
  {
    "url": "assets/img/getmcar.89ee02fb.jpg",
    "revision": "89ee02fbee4a722a7299ea0f5f259908"
  },
  {
    "url": "assets/img/getmcarid.08da9d24.jpg",
    "revision": "08da9d24baddac318b1bb75d4793da38"
  },
  {
    "url": "assets/img/patchmcar.12b09a0a.jpg",
    "revision": "12b09a0aaf091fe8c814ecb1dd4653df"
  },
  {
    "url": "assets/img/postmcar.89868576.jpg",
    "revision": "89868576939ccbc7fcaf97f5274a0409"
  },
  {
    "url": "assets/img/relational_schema.8b4855d6.png",
    "revision": "8b4855d6df93b39fc4bc6348e9e3d2c9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.91a5986c.jpg",
    "revision": "91a5986ccccb10dbd93afd5c4fbfcabf"
  },
  {
    "url": "assets/js/1.6304c9e9.js",
    "revision": "a598ea37b7b5b18c2824383a0df1299c"
  },
  {
    "url": "assets/js/10.c2384e4e.js",
    "revision": "dbcdc4b5893fc5e9c4638c877684c206"
  },
  {
    "url": "assets/js/13.d2fb694f.js",
    "revision": "05a5cfd6e7695da0f8fa0c33369961d2"
  },
  {
    "url": "assets/js/14.b9e93bdc.js",
    "revision": "cfd4b2a6913dd043baf947c36c2eaef9"
  },
  {
    "url": "assets/js/15.35f51e7a.js",
    "revision": "e12f4159038bec2e088cb4ef591e0d98"
  },
  {
    "url": "assets/js/16.c76230f1.js",
    "revision": "6aa8bce7471daf495def7a9c20b88963"
  },
  {
    "url": "assets/js/17.099b4673.js",
    "revision": "112976ee2ea2e9365ec624e607ddff8c"
  },
  {
    "url": "assets/js/18.b94cfec0.js",
    "revision": "7380e626e33b78d543d037548c68ec59"
  },
  {
    "url": "assets/js/19.2720d40e.js",
    "revision": "a4ee836f4392c3bcc75128cbb34d6a5b"
  },
  {
    "url": "assets/js/2.93a849bd.js",
    "revision": "030cdb8b1b4609290ad211838d40cd4b"
  },
  {
    "url": "assets/js/20.07525600.js",
    "revision": "01e4ce7c637aff4f37f2a85e4146553d"
  },
  {
    "url": "assets/js/21.800aaaf0.js",
    "revision": "70c8025a45e739bfc419faf690af6707"
  },
  {
    "url": "assets/js/22.ba18d813.js",
    "revision": "7c60ff34c617c02f0c2736911514d951"
  },
  {
    "url": "assets/js/23.a79069c8.js",
    "revision": "bb3c73804cca0510e95025a8de001225"
  },
  {
    "url": "assets/js/24.b4ac0583.js",
    "revision": "c454c974046af6a728a6fed2fc8b168a"
  },
  {
    "url": "assets/js/25.fa9d2155.js",
    "revision": "d95195a7101eb5bd606b70dafe60c713"
  },
  {
    "url": "assets/js/26.86ec7267.js",
    "revision": "93a93b718b8a0635302f46e4126ae9be"
  },
  {
    "url": "assets/js/27.2dc6907d.js",
    "revision": "ff5afe6e719ecb189f0323a17459fbfa"
  },
  {
    "url": "assets/js/28.cdfaf4c1.js",
    "revision": "9d805173fc99497f3430223488d6e985"
  },
  {
    "url": "assets/js/29.e42a70f8.js",
    "revision": "695bbca498afcec357be945371607025"
  },
  {
    "url": "assets/js/3.a89161d0.js",
    "revision": "fd3218d88795348854b15b73fee454d0"
  },
  {
    "url": "assets/js/30.c725b869.js",
    "revision": "a8e2b8e0544a35c0b3492c0956622800"
  },
  {
    "url": "assets/js/31.e5848b56.js",
    "revision": "cd938b24de57e8ed3e37cc3836c11201"
  },
  {
    "url": "assets/js/32.3184e382.js",
    "revision": "7fed7987b28ab64c5dbb0e4b9cde6681"
  },
  {
    "url": "assets/js/33.f629ee7a.js",
    "revision": "07f845daa601e0a3d16fdf64299814d0"
  },
  {
    "url": "assets/js/34.fb311b83.js",
    "revision": "3fa108732fbb6bedfde4192385429033"
  },
  {
    "url": "assets/js/35.383fa773.js",
    "revision": "9c164cdeaaae5e23ef8f9fd4cc41831b"
  },
  {
    "url": "assets/js/36.752cda63.js",
    "revision": "3d46a7923c821b421a142947a42fb7f4"
  },
  {
    "url": "assets/js/37.6c831497.js",
    "revision": "055c28d3fd399f3255d29e5e41a16838"
  },
  {
    "url": "assets/js/38.ec4d630a.js",
    "revision": "df3226a6321642a791333f3149919f7f"
  },
  {
    "url": "assets/js/39.a2e8e0aa.js",
    "revision": "f60f33c72c40f50351a472eb409f2cc3"
  },
  {
    "url": "assets/js/4.d6b225b7.js",
    "revision": "555158ec7b5e53ae3f8f39e577d9543f"
  },
  {
    "url": "assets/js/41.4826330d.js",
    "revision": "a4ba666744db651e2512ed36abfb2ea4"
  },
  {
    "url": "assets/js/5.92c3f1e5.js",
    "revision": "2237af8ca00ec9263f79c6135276e72e"
  },
  {
    "url": "assets/js/6.3502d9ed.js",
    "revision": "6bd49618916146eddf9db1ecbfd99907"
  },
  {
    "url": "assets/js/7.15fc3f7c.js",
    "revision": "9db822adaed94460a9e6c58ceea3b05d"
  },
  {
    "url": "assets/js/8.43a4d023.js",
    "revision": "f6bd14b288ab8c0ec7d62fad752ec7e9"
  },
  {
    "url": "assets/js/9.a4b91347.js",
    "revision": "c8491ac11bc3b2e9ddb188e8c9d8aed3"
  },
  {
    "url": "assets/js/app.22d9825e.js",
    "revision": "0c691a8453a8d00ed92dd168fe9c952b"
  },
  {
    "url": "assets/js/vendors~docsearch.b3a8b619.js",
    "revision": "855dae665d7c26c169d6dbf2dc45cfde"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4f895df2e7cd2d00eb866bd3eba9de3e"
  },
  {
    "url": "design/index.html",
    "revision": "2d5a700928143274418c760109105642"
  },
  {
    "url": "index.html",
    "revision": "83e1ccc3b7a13658d0c47eeb8ca2748c"
  },
  {
    "url": "intro/index.html",
    "revision": "1ceb90643aba8afee3b795cd9904e8d5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "383b4dae2abb080d979f48fb31e25fae"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "bbc55a741acf2185c7ddc2381703ce5e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "86c3d56b240647c30a8092321d17c091"
  },
  {
    "url": "software/index.html",
    "revision": "8bcadfb3e972c731c7f35a57dd1cd51e"
  },
  {
    "url": "test/index.html",
    "revision": "23b4eccb0d2666701a396e4507bb228c"
  },
  {
    "url": "use cases/index.html",
    "revision": "3f391afcbe96cf050557e1d73c38cd20"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
