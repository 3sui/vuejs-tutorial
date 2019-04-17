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
    "revision": "db41edb91f2f5e9224165bbc04a9203d"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "4b8b033172faec261ab9141e68386c4c"
  },
  {
    "url": "02-getting_started.html",
    "revision": "c6da74e4b5222ce3abf9e4f020820ffd"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "0f7f6e13460648b8c2f25c1e1615e2f1"
  },
  {
    "url": "04-todomvc.html",
    "revision": "64f2dc5b6a6574205ed8d5486b9094bc"
  },
  {
    "url": "05-component_base.html",
    "revision": "3fa399ac050a8e0b7f6a3cbbdf8c18c7"
  },
  {
    "url": "06-transitions.html",
    "revision": "4d0c9c5781e4ced1e8bbea1188e75f75"
  },
  {
    "url": "07-ajax.html",
    "revision": "1cb749d28d265b18f1d5426464ecfc89"
  },
  {
    "url": "08-vue_router.html",
    "revision": "6a91503be865b8922b4c240d4aeba7f8"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "df987049d7aeb2f62cd89cf88c2b81d4"
  },
  {
    "url": "10-preheat.html",
    "revision": "df073120f308c5455b4322a749bca8c6"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "5fbf0b5d29293580463a95b07ed4692b"
  },
  {
    "url": "12-webpack.html",
    "revision": "c500b4f8b05c6b124a1ac478bcfc7850"
  },
  {
    "url": "13-vuex.html",
    "revision": "616d0ff7d2da368f6e22bdc08d1a6c8d"
  },
  {
    "url": "404.html",
    "revision": "7538cade7c7615e1e3b456f8fdc30048"
  },
  {
    "url": "assets/css/0.styles.cffdcd5c.css",
    "revision": "b9aa09856ab907b8413bf6207d708afa"
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
    "url": "assets/img/1555163278802.cf18d59d.png",
    "revision": "cf18d59de0cc3edc41e90e25e82c10d1"
  },
  {
    "url": "assets/img/devtools-timetravel.fca84f3f.gif",
    "revision": "fca84f3fb8a8d10274eb2fc7ed9b65f9"
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
    "url": "assets/js/10.c6efbdef.js",
    "revision": "ae35397dfd9870591851e515e78d0302"
  },
  {
    "url": "assets/js/11.a11cb36a.js",
    "revision": "5b2f05e96e51dce99d538abb7f5b8ce2"
  },
  {
    "url": "assets/js/12.846f8dcd.js",
    "revision": "b661bbcc77bf49eecb96184faab25f65"
  },
  {
    "url": "assets/js/13.8d1c1acc.js",
    "revision": "522662c941e07bf41c9d3c9fb3ad51a9"
  },
  {
    "url": "assets/js/14.714dc6d9.js",
    "revision": "2d46b72f7b291dcd38a4890356f39837"
  },
  {
    "url": "assets/js/15.66263245.js",
    "revision": "9fe590f1bfe70a51f50849123c367543"
  },
  {
    "url": "assets/js/16.32b85243.js",
    "revision": "5706c96055177e014ca115b9c52ba864"
  },
  {
    "url": "assets/js/17.4d1381c1.js",
    "revision": "4ef923a614378bdc19518387b3d214ca"
  },
  {
    "url": "assets/js/18.7b9f719a.js",
    "revision": "df0819428a19a9a74a73a0d445b00a14"
  },
  {
    "url": "assets/js/19.523c52c4.js",
    "revision": "0e1bb3979542192f584d5a1ebf34b0f5"
  },
  {
    "url": "assets/js/2.037eb429.js",
    "revision": "050397222c0ddf601c7dc5522cf317b3"
  },
  {
    "url": "assets/js/20.61152edb.js",
    "revision": "86744b8993d971cfeb062013de2bcbaa"
  },
  {
    "url": "assets/js/21.b809e92c.js",
    "revision": "93fa43982675f01b6d07c60c805b24eb"
  },
  {
    "url": "assets/js/22.8edc95f9.js",
    "revision": "6c72928584a054660cb060ab488847d6"
  },
  {
    "url": "assets/js/23.80f870f2.js",
    "revision": "316784b43b7981b9ccf6225089f70e4d"
  },
  {
    "url": "assets/js/24.65441736.js",
    "revision": "1724054d661acf59edd6029000c9f156"
  },
  {
    "url": "assets/js/25.1b1ed7af.js",
    "revision": "f41bc8bce6cc9748b4b56c85dd7096f2"
  },
  {
    "url": "assets/js/26.a12cda47.js",
    "revision": "0a3eb3525e56e444890a7b3ccab8caae"
  },
  {
    "url": "assets/js/3.b40024b9.js",
    "revision": "6c9930e6b01f0a9d0b076f0e4fe75d59"
  },
  {
    "url": "assets/js/4.4c47cb74.js",
    "revision": "47350e0ee38c74d4301f9828a1e146c7"
  },
  {
    "url": "assets/js/5.c92d9385.js",
    "revision": "628f9af44b363c1c7d6061181ae29163"
  },
  {
    "url": "assets/js/6.a51d0796.js",
    "revision": "58109609914d13f4776c2c97310de42e"
  },
  {
    "url": "assets/js/7.422d9e01.js",
    "revision": "9543f71944964fd7662c3c315a9efc2e"
  },
  {
    "url": "assets/js/8.ddd2a661.js",
    "revision": "9cae5d105110d29c1aa37b45dd4daae7"
  },
  {
    "url": "assets/js/9.95ff7d96.js",
    "revision": "d00e3ce5bf0d04d629d0813abc9ffbb0"
  },
  {
    "url": "assets/js/app.e35b40b9.js",
    "revision": "fe3ecec1549f1f1f2d8d79d346aea9e9"
  },
  {
    "url": "direvtives.html",
    "revision": "6e84f706c2627f90587baab743c139df"
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
    "revision": "118b4e3a8c99c2defcfcb4b0057a2d48"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "b3ed6ae6fda7551d1f1deeb800a8cf63"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "668e50800bced19fde4dd70421139046"
  },
  {
    "url": "vue-debugging.html",
    "revision": "cf27bb20bca8cb9cc3a9824b923be27d"
  },
  {
    "url": "vue-style-guide.html",
    "revision": "a70db242803bdd092740351209a0e233"
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
