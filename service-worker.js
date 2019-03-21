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
    "revision": "f6a71b8a71a33a5448ce7405b002cf8a"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "fab020a571948efe8da452de9c22c165"
  },
  {
    "url": "02-getting_started.html",
    "revision": "23a615e6726dedc84816d2e7c05e1dbc"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "87ef91cdc2377a42c03700c83cf0d7d0"
  },
  {
    "url": "04-todomvc.html",
    "revision": "62de1bf4baa2cfc0dcdcafea40a6ea17"
  },
  {
    "url": "05-component_base.html",
    "revision": "b5441e66e00759ad9280b0493cea622b"
  },
  {
    "url": "06-transitions.html",
    "revision": "f00315b1b7d2f5e7a3f7a6c5788f7f97"
  },
  {
    "url": "07-ajax.html",
    "revision": "c2d24d2cd2792502dfb69e16f96b80f8"
  },
  {
    "url": "08-vue_router.html",
    "revision": "c76e1a65dc66a950d31891b8bf228714"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "5e6823214bd7824edb5f67a456266845"
  },
  {
    "url": "10-preheat.html",
    "revision": "41b7aecf1f2f4b09575fe4d1787da7a8"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "c0593455f227e3d356ea148d300fae01"
  },
  {
    "url": "12-webpack.html",
    "revision": "00b3224e2afe249ce2be3b3885195d1f"
  },
  {
    "url": "404.html",
    "revision": "9b9c3b66ebed115ef19819a4dd23557a"
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
    "url": "assets/js/10.79cbe9ec.js",
    "revision": "29f69bf5c17a1168eb7b29dd6f865adf"
  },
  {
    "url": "assets/js/11.a860c000.js",
    "revision": "d446a0f93156bc44128bdb212fcea30f"
  },
  {
    "url": "assets/js/12.3b8e4c5b.js",
    "revision": "8e72b12263f420b4f1fb9ef1249e838c"
  },
  {
    "url": "assets/js/13.f41cfb16.js",
    "revision": "880df64f9bc9f90742d59ea912bc4854"
  },
  {
    "url": "assets/js/14.5007d868.js",
    "revision": "5ab87aebf79170f0dc254a84804fd01e"
  },
  {
    "url": "assets/js/15.5c3527a7.js",
    "revision": "abab70b68914aab28e64710ac84feb96"
  },
  {
    "url": "assets/js/16.ff0d5dbf.js",
    "revision": "39001d58a6c90a8b7f46645ec1b5b426"
  },
  {
    "url": "assets/js/17.e6acdef5.js",
    "revision": "cbb7c523661890a6f980ec216de7713b"
  },
  {
    "url": "assets/js/18.298cea9d.js",
    "revision": "80091404ac1fadb88e8098a17b577cba"
  },
  {
    "url": "assets/js/19.f1aee0ab.js",
    "revision": "0b5331d7595d70be5af7041b0567088f"
  },
  {
    "url": "assets/js/2.cc863467.js",
    "revision": "956c786877faa570f85f36ecdbaa11fb"
  },
  {
    "url": "assets/js/20.dfed9b66.js",
    "revision": "949785908fbbe1aa9044b19ec26958e6"
  },
  {
    "url": "assets/js/21.ef1f1fcc.js",
    "revision": "7132e21a15df22acb2693cffab541de3"
  },
  {
    "url": "assets/js/22.c159089b.js",
    "revision": "3835d6893bd73d5d2b148803476428b6"
  },
  {
    "url": "assets/js/23.4afc7c4a.js",
    "revision": "77add905035fab841381774a71fcb15b"
  },
  {
    "url": "assets/js/3.004ba6fa.js",
    "revision": "38848fee818304e4880b9fb54c5dc552"
  },
  {
    "url": "assets/js/4.fb1274b2.js",
    "revision": "9a6c5f0659251945af6b62fd3676b3bc"
  },
  {
    "url": "assets/js/5.23076650.js",
    "revision": "302865c3dfdb5a8490f73b7b0be60d42"
  },
  {
    "url": "assets/js/6.9321a41a.js",
    "revision": "26b2da231c508769e694c5f6633afb89"
  },
  {
    "url": "assets/js/7.d9cd6272.js",
    "revision": "c5512d5358707a69896b9a9c359feed3"
  },
  {
    "url": "assets/js/8.3aa4ef0b.js",
    "revision": "bb15f73b07bcb1d800f5157222da8a7d"
  },
  {
    "url": "assets/js/9.e2459478.js",
    "revision": "c7fcadbf28e18c943c8f629c5b1a76a3"
  },
  {
    "url": "assets/js/app.67d0dd94.js",
    "revision": "4967a27589eb7d2677aa01d02ba110d2"
  },
  {
    "url": "direvtives.html",
    "revision": "a60dfe7cfcdacedcdd939ed104f9f36b"
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
    "revision": "5896be57b9f079d19c9a6f690c277337"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "2083a7b9d1216ce58e1a954d80b0f328"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "46985b0f7d9aa7625044b4edf36ed090"
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
