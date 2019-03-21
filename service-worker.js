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
    "revision": "6f9b8fa01d154a5ac79d22f1d90eadc0"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "f7cbc064c9645239c2ea1104c663c118"
  },
  {
    "url": "02-getting_started.html",
    "revision": "f164de14005c79226177d21f028ea0de"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "5357d01d69034336864ec382c58c3545"
  },
  {
    "url": "04-todomvc.html",
    "revision": "2e86089b215c6f52ed3f19adf9fcf7bb"
  },
  {
    "url": "05-component_base.html",
    "revision": "1e8625c52a5aa43f5696cac8bee4cd2e"
  },
  {
    "url": "06-transitions.html",
    "revision": "b182e5f61dff59fcea988d5b095ac3c6"
  },
  {
    "url": "07-ajax.html",
    "revision": "8c96b611454fb8d9f170c0bc149a1ade"
  },
  {
    "url": "08-vue_router.html",
    "revision": "f6789618e4e162f6495dc139343bef26"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "aa5b23c17e89d682b86f621765b3e6fd"
  },
  {
    "url": "10-preheat.html",
    "revision": "da643e5d453c55443544a28d4be0c091"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "d8f0b75c42f65f1cc5ab9edb475cb364"
  },
  {
    "url": "12-webpack.html",
    "revision": "a700d7b649c16eb9c0c90940b79af6c3"
  },
  {
    "url": "404.html",
    "revision": "f9a80753f2d3fc5465d83ca799891589"
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
    "url": "assets/js/10.1fc9d708.js",
    "revision": "9880065e43dde25a752215c105f6e446"
  },
  {
    "url": "assets/js/11.2cdf9d34.js",
    "revision": "cada3635cacac26f45f32f43e4911b75"
  },
  {
    "url": "assets/js/12.2e83e5ff.js",
    "revision": "15378cbda97f78f68a04e63e1b1b6bd1"
  },
  {
    "url": "assets/js/13.3fb523fd.js",
    "revision": "cd935e363389623051775322bcadf1a5"
  },
  {
    "url": "assets/js/14.8c077ef6.js",
    "revision": "aa2a4fb4a918f60eaf07c6abc7b7ff70"
  },
  {
    "url": "assets/js/15.7cdd320a.js",
    "revision": "364641e3e66e847ee5eb061f490184db"
  },
  {
    "url": "assets/js/16.8c6844d4.js",
    "revision": "f4d07363c8dd0babffc74cffbb628297"
  },
  {
    "url": "assets/js/17.334c20b3.js",
    "revision": "348c6ac64dfc49833c9242f1fca68f00"
  },
  {
    "url": "assets/js/18.f05bfc8c.js",
    "revision": "db6d69f76a948659fb9ca7862dec4da3"
  },
  {
    "url": "assets/js/19.34d3533f.js",
    "revision": "b5cfd658a0d6b40866d5e692ca54cd9a"
  },
  {
    "url": "assets/js/2.0958a3c2.js",
    "revision": "3922a4d4bcb8b2d01c5291ce50da5055"
  },
  {
    "url": "assets/js/20.1c12aab9.js",
    "revision": "01263d7c9bc3159ffecd1a4a86ab6823"
  },
  {
    "url": "assets/js/21.6696a367.js",
    "revision": "e90951089dd36b397a3aa54f6356fd18"
  },
  {
    "url": "assets/js/22.8e69d7ef.js",
    "revision": "fe79cc143e1094f186f7370d111a474e"
  },
  {
    "url": "assets/js/23.4afc7c4a.js",
    "revision": "77add905035fab841381774a71fcb15b"
  },
  {
    "url": "assets/js/3.d2feba89.js",
    "revision": "59c4c0e64f9ef3b2fc01fe8181e8c8d4"
  },
  {
    "url": "assets/js/4.fb942658.js",
    "revision": "1c1e2321d58f3289305dd255ba2a4267"
  },
  {
    "url": "assets/js/5.e3deb4f8.js",
    "revision": "9fe48a83a2e0ee86dd9592a2367d6a65"
  },
  {
    "url": "assets/js/6.18088590.js",
    "revision": "fb37bf28d21a0819f2bb05b97adfcc57"
  },
  {
    "url": "assets/js/7.0e5558ae.js",
    "revision": "997b0d8132b78d88f0120e3fbb4429e7"
  },
  {
    "url": "assets/js/8.8166b260.js",
    "revision": "2c72c4ccf2d313c142b0c4c914c00c2b"
  },
  {
    "url": "assets/js/9.9e831af9.js",
    "revision": "cb2c6c4ffc89c23074200e2ef8d5530c"
  },
  {
    "url": "assets/js/app.3e1d40f5.js",
    "revision": "ddfacac9a7c5ad3979ea83b7277adf51"
  },
  {
    "url": "direvtives.html",
    "revision": "0a85df31bd500954f1515e9be3e658d4"
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
    "revision": "91562061d61ca07213e3e303604cc958"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "ad03cf80a51a1a58df9cf71a730292d1"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "14f41f05f77544a5272f56bb1d962d45"
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
