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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "00-content_introduction.html",
    "revision": "82408883a1d83301d1c7f9157b8cc169"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "b253bf0bcb335e456f2f023283e5d83a"
  },
  {
    "url": "02-getting_started.html",
    "revision": "9529e91b9a103ef59fd4378c1af13a39"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "0d67021e2ed99b5b309db5c8e4232b82"
  },
  {
    "url": "04-todomvc.html",
    "revision": "83be8d31b61f9ee918a8e44a7ffeba73"
  },
  {
    "url": "05-component_base.html",
    "revision": "f2e36b5ed589f6616967826fa71859a7"
  },
  {
    "url": "06-transitions.html",
    "revision": "1370ca88d69101930c70a792b719b29d"
  },
  {
    "url": "07-ajax.html",
    "revision": "06159ed163e338f1a905d798e460c0d2"
  },
  {
    "url": "08-vue_router.html",
    "revision": "eb7245326e9c6c5bf29f69c0352ea86f"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "eca8f721772137ab650c1c4522f675fa"
  },
  {
    "url": "10-preheat.html",
    "revision": "65231e6e87dd49b522bd31089fd3abcb"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "f5540271d2f000e3bb09a2983518981b"
  },
  {
    "url": "12-webpack.html",
    "revision": "2b66eaf568b4a93f5ea933d1c6290a3a"
  },
  {
    "url": "404.html",
    "revision": "a85ee145f9cab7686e3242872991814d"
  },
  {
    "url": "assets/css/0.styles.f9563ee1.css",
    "revision": "78b5c8e85f0f7be11de082209c821c25"
  },
  {
    "url": "assets/img/006tNc79ly1fmgrsgfs25j30h40cdgng.6ff807b0.jpg",
    "revision": "6ff807b0ab3b435a92bb5e3a10aed84d"
  },
  {
    "url": "assets/img/1552609706793.8a33e051.png",
    "revision": "8a33e0517741c844e2f7faf58ac77df4"
  },
  {
    "url": "assets/img/1552730416710.0e4d9830.png",
    "revision": "0e4d98300f9cce011cd30b00232f1bfb"
  },
  {
    "url": "assets/img/1552730504674.6e1f8385.png",
    "revision": "6e1f838505e476747235c276eff83167"
  },
  {
    "url": "assets/img/1552730534647.f82bbcad.png",
    "revision": "f82bbcad39497b0e07f47cf9f6ce50cd"
  },
  {
    "url": "assets/img/1552730563178.ba16b076.png",
    "revision": "ba16b076c52026a7b9d158b93a658f9f"
  },
  {
    "url": "assets/img/1552730755074.17d34710.png",
    "revision": "17d34710daac2aaba32ede22b674d353"
  },
  {
    "url": "assets/img/1552730773305.bfd0af04.png",
    "revision": "bfd0af04d9ff3aae7be331c626a407cd"
  },
  {
    "url": "assets/img/1552730860508.721bd3fa.png",
    "revision": "721bd3fa75fa2963e51c2215baabaefd"
  },
  {
    "url": "assets/img/1552730942292.1d41aa9d.png",
    "revision": "1d41aa9d780474855f481c457680e858"
  },
  {
    "url": "assets/img/1552731512732.b249b855.png",
    "revision": "b249b855c31ca540acf1b4624aa41ff6"
  },
  {
    "url": "assets/img/1552844831280.f644aa04.png",
    "revision": "f644aa04003391ac9e1da1301ff8bdfe"
  },
  {
    "url": "assets/img/1552879713681.915595f0.png",
    "revision": "915595f0701671d486d436cb54d8edb0"
  },
  {
    "url": "assets/img/1552975362250.228c505f.png",
    "revision": "228c505f6cd5e9aef61917d6d6e5711a"
  },
  {
    "url": "assets/img/1552975766859.acf02633.png",
    "revision": "acf02633280bc1b3d5bf502f2e2ffc3b"
  },
  {
    "url": "assets/img/1552975889659.e0386400.png",
    "revision": "e038640042f071dfc45b79c4e27e2f07"
  },
  {
    "url": "assets/img/1552975972041.b2f3205c.png",
    "revision": "b2f3205c520799283880dfc9e3d1e438"
  },
  {
    "url": "assets/img/1552976013304.b6a28ded.png",
    "revision": "b6a28ded2344d6f7ac5f8be10f028f6c"
  },
  {
    "url": "assets/img/1552976160013.543453cf.png",
    "revision": "543453cf9f5a66753faa393e2c5146c9"
  },
  {
    "url": "assets/img/1553140274639.12e6e4ab.png",
    "revision": "12e6e4abb1b7796bd158a66535031d17"
  },
  {
    "url": "assets/img/1553140540883.d5ef40bd.png",
    "revision": "d5ef40bd002d1a16637454d7f9ab7932"
  },
  {
    "url": "assets/img/1553140616129.7694d0ba.png",
    "revision": "7694d0baa9635c9e32ad2a826845e073"
  },
  {
    "url": "assets/img/1553141186574.b2647f3b.png",
    "revision": "b2647f3b6e95d33d9b82c258a2b9e8da"
  },
  {
    "url": "assets/img/1553141352000.2a21e5f3.png",
    "revision": "2a21e5f3be1c86bb01ba09ca0799ab96"
  },
  {
    "url": "assets/img/1553141511202.ed7c77b8.png",
    "revision": "ed7c77b8adacc872f8a1f5e8827fc587"
  },
  {
    "url": "assets/img/1553141627713.71ab2995.png",
    "revision": "71ab299593ecea4d3c04b66e08c789e7"
  },
  {
    "url": "assets/img/1553141839374.6d763310.png",
    "revision": "6d7633101ebdd516c17c9f21cd01e4c2"
  },
  {
    "url": "assets/img/1553141895306.0268242b.png",
    "revision": "0268242b9c01ea2494a5849716ca1cc9"
  },
  {
    "url": "assets/img/1553141967849.ecf28efa.png",
    "revision": "ecf28efad84fbabe13cb5fb61a47db14"
  },
  {
    "url": "assets/img/1553142055828.2d4fd860.png",
    "revision": "2d4fd86067e7bf195aec260d1d4b69f2"
  },
  {
    "url": "assets/img/1553142134758.3f391ee9.png",
    "revision": "3f391ee9a81b831c4db14b7b4c74f71f"
  },
  {
    "url": "assets/img/1553142198580.6f6a59b7.png",
    "revision": "6f6a59b786791713b9a0d1e76be22c11"
  },
  {
    "url": "assets/img/1553153073431.ea512e1e.png",
    "revision": "ea512e1ececbd8c1eeace2a02b9397f5"
  },
  {
    "url": "assets/img/1553155523220.f1c1385f.png",
    "revision": "f1c1385ff9dad4c598203d295adc7bc3"
  },
  {
    "url": "assets/img/1553156109560.42bb6335.png",
    "revision": "42bb6335ba77fdedf7644525c58e3eaa"
  },
  {
    "url": "assets/img/hot-reload.d2aa27b9.gif",
    "revision": "d2aa27b9ebb38b8550207af7284b5e27"
  },
  {
    "url": "assets/img/http-guard.8b957287.png",
    "revision": "8b95728702052352728b60a0688b5b1e"
  },
  {
    "url": "assets/img/illustration-home-inverted.91b07808be.91b07808.png",
    "revision": "91b07808be4b7a52f807a1a5d6f03dfb"
  },
  {
    "url": "assets/img/mvvm.edd0080f.png",
    "revision": "edd0080fb145315fbc96164c219fee7e"
  },
  {
    "url": "assets/img/README0.d5c13542.png",
    "revision": "d5c13542d4b2fc8bffde63fd6f8bc43d"
  },
  {
    "url": "assets/img/role-rights-tree.74d14c81.png",
    "revision": "74d14c81a241cf2c7467835c1261e416"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/todomvc-component.a6b47bb9.png",
    "revision": "a6b47bb9edd617149ca9963faff07581"
  },
  {
    "url": "assets/js/10.8f92c338.js",
    "revision": "c351caf5a60e094d39904bc670255b80"
  },
  {
    "url": "assets/js/11.9b0f1195.js",
    "revision": "77a1ef58ca245e73e646bfc7f4b80f40"
  },
  {
    "url": "assets/js/12.d846643a.js",
    "revision": "2b637414203b52edcc0dd8471cd0e233"
  },
  {
    "url": "assets/js/13.4ddb5709.js",
    "revision": "3d5a816c3f9a236fa7c2add04c04d615"
  },
  {
    "url": "assets/js/14.ff522c97.js",
    "revision": "259b5201c20553164f9a0ba35f23df4e"
  },
  {
    "url": "assets/js/15.d579ac5b.js",
    "revision": "63c9d03b399d40481920ecc50dc4975d"
  },
  {
    "url": "assets/js/16.814169bc.js",
    "revision": "977810dda59b55d462332f45a4f5d23f"
  },
  {
    "url": "assets/js/17.be3a7e53.js",
    "revision": "bbd30126d28c06bc6708854941eb9fb2"
  },
  {
    "url": "assets/js/18.41a02d8e.js",
    "revision": "b212757d89f44d95e481702ffc9176d7"
  },
  {
    "url": "assets/js/19.a82bd31d.js",
    "revision": "d8a985d3a65e5799a38454271ac5038c"
  },
  {
    "url": "assets/js/2.aec7bc96.js",
    "revision": "48e7da8ac2704430de9c85a9cbcc9cbb"
  },
  {
    "url": "assets/js/20.07a92c0b.js",
    "revision": "e349490740f4db673f6d70c58ffc3bbf"
  },
  {
    "url": "assets/js/21.30195fe0.js",
    "revision": "30cf8f1ca97f9c10aab483fedbdccf71"
  },
  {
    "url": "assets/js/22.0bc2d52e.js",
    "revision": "89efb6da18c226495be2194ff74f52fd"
  },
  {
    "url": "assets/js/23.4afc7c4a.js",
    "revision": "77add905035fab841381774a71fcb15b"
  },
  {
    "url": "assets/js/3.4609fcd4.js",
    "revision": "fdb903b6ba715fa859d919b3877febd3"
  },
  {
    "url": "assets/js/4.6271afe5.js",
    "revision": "8bc87ff2be385f563e49bcc482b6cc85"
  },
  {
    "url": "assets/js/5.15f60dbe.js",
    "revision": "1a96d8746f2471c15573a196faaedb14"
  },
  {
    "url": "assets/js/6.66abe792.js",
    "revision": "67bf2686f5182e9133f3a73e73e9cc7a"
  },
  {
    "url": "assets/js/7.8ffb135f.js",
    "revision": "1b6b92cf09a8223f739a22170fb6b05a"
  },
  {
    "url": "assets/js/8.bd99ae11.js",
    "revision": "7507c8813a756aad22ab2eaa26210e78"
  },
  {
    "url": "assets/js/9.f21083e6.js",
    "revision": "491bf4c2039b3363c1c568b29da2543a"
  },
  {
    "url": "assets/js/app.8aa9e5b1.js",
    "revision": "c297c24f8ab63aa209af6ff63edddbfd"
  },
  {
    "url": "direvtives.html",
    "revision": "765ef859992b46403a2b252217017784"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "index.html",
    "revision": "41f1f50dee9b63a6e5e78fc6c595845c"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "d1dd5f83df18f108db2a4a04436af4f3"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "82cf38250c4db56565ad31c9c7311c3a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
