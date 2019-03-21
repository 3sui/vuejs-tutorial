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
    "revision": "83492ec8e685e7dd23f85b33079feba4"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "0ac1f77672001102fa28d99ddef5738d"
  },
  {
    "url": "02-getting_started.html",
    "revision": "8fb7988416615ea34897089f5f1b7b04"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "a57bece45c0e2ffce3ba0653e9ab716f"
  },
  {
    "url": "04-todomvc.html",
    "revision": "345f2afdf4f0fd8ef085d93392d493f4"
  },
  {
    "url": "05-component_base.html",
    "revision": "e791b084478fa4add1b10c1262c62547"
  },
  {
    "url": "06-transitions.html",
    "revision": "4f0fffc35fa602dc1013f706f3c03688"
  },
  {
    "url": "07-ajax.html",
    "revision": "e4580af702fd1307d68201724471e4d8"
  },
  {
    "url": "08-vue_router.html",
    "revision": "f657675becbf7528abb602ae4b2bebd2"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "51a41a74569fc02b08cefd7c9649a0af"
  },
  {
    "url": "10-preheat.html",
    "revision": "5c178573cc33c82cddea6f1f459ea192"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "648d270d9f4afacd79e91ae19f164064"
  },
  {
    "url": "12-webpack.html",
    "revision": "08f15388c6b4c6b25d0053f98af5562a"
  },
  {
    "url": "404.html",
    "revision": "0191eab100387f66232082d6be0373ef"
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
    "url": "assets/img/README4.c314a095.png",
    "revision": "c314a095b9445a8f3c1ffbb39d005b3f"
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
    "url": "assets/js/10.2785793c.js",
    "revision": "210733aeec2dd73d27c535927b21b155"
  },
  {
    "url": "assets/js/11.0fcaed39.js",
    "revision": "7650a3c5c227d4fb300adfb5fd239b0f"
  },
  {
    "url": "assets/js/12.6fb04640.js",
    "revision": "238d59d21dd802f694fbf8e9a4c2222c"
  },
  {
    "url": "assets/js/13.436e379b.js",
    "revision": "59a3aa452290ae1a2f8477431692c1d4"
  },
  {
    "url": "assets/js/14.7bd221e6.js",
    "revision": "dbd0ef14bcae7805714f0f362ad8d3ff"
  },
  {
    "url": "assets/js/15.42df19a9.js",
    "revision": "bb301928280341c58c501b8abe697b60"
  },
  {
    "url": "assets/js/16.91cfe8d8.js",
    "revision": "1ad2915030e4f2b140a8b13bf938ba8f"
  },
  {
    "url": "assets/js/17.ff4e2e2c.js",
    "revision": "e36031884f094bbc49ec964c6defa79a"
  },
  {
    "url": "assets/js/18.fd0968b5.js",
    "revision": "04f3ce599935a918a78586806a200337"
  },
  {
    "url": "assets/js/19.b7935ef4.js",
    "revision": "356081cccec2ff7754640e369c7f08e4"
  },
  {
    "url": "assets/js/2.3387ce11.js",
    "revision": "646cc5dc44639a5c1b0f41bde5dfc4fd"
  },
  {
    "url": "assets/js/20.ca43cc09.js",
    "revision": "d83a5e882539c73bd1b880b578e20574"
  },
  {
    "url": "assets/js/21.d13f2e66.js",
    "revision": "aa3cade4c8ec13bc4f2f1c751e6aafd1"
  },
  {
    "url": "assets/js/22.1600c513.js",
    "revision": "8125a8b5a13b341cb0f6109610c2ec84"
  },
  {
    "url": "assets/js/23.4afc7c4a.js",
    "revision": "77add905035fab841381774a71fcb15b"
  },
  {
    "url": "assets/js/3.1cb01e16.js",
    "revision": "61cd541fa295e75d92da9742c8766d1f"
  },
  {
    "url": "assets/js/4.ea2f2aa8.js",
    "revision": "d39d848481fac97eabb878bacd2a7507"
  },
  {
    "url": "assets/js/5.e260a908.js",
    "revision": "1bc429f65542760b9ceb9e0a0ff626b3"
  },
  {
    "url": "assets/js/6.a7e8a312.js",
    "revision": "cec42588dc07ab0d0db8f2252c2b365a"
  },
  {
    "url": "assets/js/7.46c78f90.js",
    "revision": "3b17f9947d3742d58a40c1b47d3cd638"
  },
  {
    "url": "assets/js/8.79a06dc1.js",
    "revision": "40cd9e34d594df0c7c985a0d28fde0d6"
  },
  {
    "url": "assets/js/9.bc68f31a.js",
    "revision": "71e1b1021d937f8d78e0cd32cc2c3b71"
  },
  {
    "url": "assets/js/app.00088c91.js",
    "revision": "8a448571805e80e1d14403d47c1337cd"
  },
  {
    "url": "direvtives.html",
    "revision": "236a71f5fa52c8e7ca03991febabdf6a"
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
    "revision": "3bd6445f62cc2cac9cbeb09f6e3883ac"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "bbb7ab8abc9b6697117da21a552473f6"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "23a7cdc4801dc24d2710fb62f034885a"
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
