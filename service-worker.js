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
    "revision": "09dfbd305d52bdfbc9120c3e5484c676"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "69f42bce0dde4ffeb649b0610080bbfb"
  },
  {
    "url": "02-getting_started.html",
    "revision": "60e8d84b97740bc222b52ef340f5e2e6"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "f9a535859589719597b9d0b61fb740db"
  },
  {
    "url": "04-todomvc.html",
    "revision": "ba2e44e67094cda7555820c4ae8891f0"
  },
  {
    "url": "05-component_base.html",
    "revision": "9771b315e97a0c979b33df1e8099a710"
  },
  {
    "url": "06-transitions.html",
    "revision": "c4cb73872203137a80bc7cc439b7b9ec"
  },
  {
    "url": "07-ajax.html",
    "revision": "ef1759dbf0052cc80ffa6c2b4be2f62d"
  },
  {
    "url": "08-vue_router.html",
    "revision": "5ef13c9024fff830735a0cb874075223"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "d22fa49581bbb30c92ce016f58305cdb"
  },
  {
    "url": "10-preheat.html",
    "revision": "3057c7169366b37ff8e1b3e98e26fc67"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "266868c31449e9f1446806093875db6f"
  },
  {
    "url": "12-webpack.html",
    "revision": "214f0b19ad480d81e6690847ad8a85d3"
  },
  {
    "url": "13-vuex.html",
    "revision": "61cc32cba2ac9aa97ff95805149d42b4"
  },
  {
    "url": "404.html",
    "revision": "3980fc4988576dbf76961abe8134f010"
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
    "url": "assets/js/10.ac24085e.js",
    "revision": "ae5c6e2a3639eaf3e990363dc551fb48"
  },
  {
    "url": "assets/js/11.3670274c.js",
    "revision": "5679c9dd2987f3babde7e303fc0c334f"
  },
  {
    "url": "assets/js/12.d846643a.js",
    "revision": "2b637414203b52edcc0dd8471cd0e233"
  },
  {
    "url": "assets/js/13.d5dcaa6f.js",
    "revision": "c343d154b7aa4666820f8bb0c052da1a"
  },
  {
    "url": "assets/js/14.70e2228c.js",
    "revision": "ef2a90805654c830495d982fc68af1ce"
  },
  {
    "url": "assets/js/15.67fb1616.js",
    "revision": "60b35cfb7fa4000f74d451bb50457a67"
  },
  {
    "url": "assets/js/16.741e22c2.js",
    "revision": "a3c4316dbc507238ad34196add7e253a"
  },
  {
    "url": "assets/js/17.4af5b018.js",
    "revision": "4f6d8c1dd928ff2713ea2352731782f5"
  },
  {
    "url": "assets/js/18.b2d6c977.js",
    "revision": "e56045ec8e773b4b758b5c60c1440bae"
  },
  {
    "url": "assets/js/19.6a3cf5fe.js",
    "revision": "ad19021f9a6b083b97dedf462e65ba19"
  },
  {
    "url": "assets/js/2.d97cda64.js",
    "revision": "474334302695d5067a44dc1d14637bea"
  },
  {
    "url": "assets/js/20.726a05d2.js",
    "revision": "07e836c1d7e795ed3b9f7275377f40f1"
  },
  {
    "url": "assets/js/21.0cba4253.js",
    "revision": "cef7eebd190d51fa23f6953b62a570dd"
  },
  {
    "url": "assets/js/22.ebbeab27.js",
    "revision": "f0b8bcc1c7a7f51bf63f6f46db3aa356"
  },
  {
    "url": "assets/js/23.915fd588.js",
    "revision": "8661cde35b63e1a4d1bcd7d202b3f22a"
  },
  {
    "url": "assets/js/24.b617e271.js",
    "revision": "ecda792407ae5d22bc26f19118eab114"
  },
  {
    "url": "assets/js/25.5606f766.js",
    "revision": "3cff76a982be4346fc119a15f353d391"
  },
  {
    "url": "assets/js/26.a12cda47.js",
    "revision": "0a3eb3525e56e444890a7b3ccab8caae"
  },
  {
    "url": "assets/js/3.8f42b834.js",
    "revision": "740947ae8bfb6d9661c70330a2333616"
  },
  {
    "url": "assets/js/4.d6c4ea86.js",
    "revision": "47f8cc9588e507cfc46ebe8b789bffcc"
  },
  {
    "url": "assets/js/5.558fc4d9.js",
    "revision": "459821d28f675cc61701f35b26dda02d"
  },
  {
    "url": "assets/js/6.79604b2c.js",
    "revision": "005e48130da77963222b29224f503cc2"
  },
  {
    "url": "assets/js/7.09589270.js",
    "revision": "3d31f6b624c43a1257ba565f8f652a0b"
  },
  {
    "url": "assets/js/8.1f1fc048.js",
    "revision": "7703985053933e82832e66f8061639c5"
  },
  {
    "url": "assets/js/9.10cfc8f1.js",
    "revision": "6ef51ceeaf32ea7f6dc03aa8178ce60e"
  },
  {
    "url": "assets/js/app.59bc870c.js",
    "revision": "17fbd72b5bd7b0f4a5c4509e8685dd2f"
  },
  {
    "url": "direvtives.html",
    "revision": "b9b54d4a3f1bf860c24b724b63a00c7c"
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
    "revision": "4f693c0d3a79031be66599fa776abb03"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "40a2baf9656e061a6fdddc5d369c8e7a"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "b58b413fd3a9fbc904c936d7e9f58e5f"
  },
  {
    "url": "vue-debugging.html",
    "revision": "507306777d3151560b7a9029ce7a6d79"
  },
  {
    "url": "vue-style-guide.html",
    "revision": "a6727ab3f9da3509cb21fd33582924d2"
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
