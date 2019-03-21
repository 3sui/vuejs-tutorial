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
    "revision": "d2bf3bcd4dabc6976ec2892b4082809b"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "cf0a2fb4acbea467039e8f687971219c"
  },
  {
    "url": "02-getting_started.html",
    "revision": "341a355d767c7cb9540005a2791a32f0"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "e35b5ef0ce6b1abe75fb6810b39d8f8e"
  },
  {
    "url": "04-todomvc.html",
    "revision": "245c3c1c53c7fbdd37c80e744697ed34"
  },
  {
    "url": "05-component_base.html",
    "revision": "78c93bb33a249da897183dc97ab9c786"
  },
  {
    "url": "06-transitions.html",
    "revision": "f5c89390381147c96695f678ab83ae1b"
  },
  {
    "url": "07-ajax.html",
    "revision": "c88b60121333e484d65bfce9a84638b6"
  },
  {
    "url": "08-vue_router.html",
    "revision": "30e6fbd0dc6cb03cd29d9eaac52d42ef"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "1ec13c0d08fe6a53ac332444527697b2"
  },
  {
    "url": "10-preheat.html",
    "revision": "7229739221e77cd504fc125ef040f39f"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "03711ea386eaf4ddcf84ba254741a272"
  },
  {
    "url": "12-webpack.html",
    "revision": "853c07b4d9ac9d9c8ee2fe292cd9130b"
  },
  {
    "url": "404.html",
    "revision": "0aa2aca7a253400b33be3878d5af7342"
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
    "url": "assets/js/10.65f7fe8f.js",
    "revision": "4119271e925dc26ceed3acbc79da9cf0"
  },
  {
    "url": "assets/js/11.834abbd8.js",
    "revision": "d13dd6be9f20aee51e7b9994c8f98c61"
  },
  {
    "url": "assets/js/12.6b1eccfa.js",
    "revision": "c9da1e251e9315e66cb9c80ed9d9d84b"
  },
  {
    "url": "assets/js/13.05ad8198.js",
    "revision": "987b4145eaf316309ce80b1af02b580a"
  },
  {
    "url": "assets/js/14.8858dc3c.js",
    "revision": "d51feb30944ba9d4089f1862f958f84a"
  },
  {
    "url": "assets/js/15.582e0c99.js",
    "revision": "e73528ac7a8dc3e45e71e8db1b7ceaed"
  },
  {
    "url": "assets/js/16.11d0f70d.js",
    "revision": "f7a411868b344516722e432d83f4ce37"
  },
  {
    "url": "assets/js/17.122b7cad.js",
    "revision": "8dfd96700fad841f0b257b77677dfde8"
  },
  {
    "url": "assets/js/18.d96d2e33.js",
    "revision": "54226079ca4ebc33ffdd66c4f9aa7cdc"
  },
  {
    "url": "assets/js/19.315ea39c.js",
    "revision": "300c57ea5751f24a8b727d1429b4daff"
  },
  {
    "url": "assets/js/2.482832a0.js",
    "revision": "117f1e6be16b2e4a3c171ac31119fcec"
  },
  {
    "url": "assets/js/20.775266b5.js",
    "revision": "32716e6d1c27e86bb665005275d48fda"
  },
  {
    "url": "assets/js/21.44eb6cd2.js",
    "revision": "cc756ce5cd5fe45d2eb5af31bd24dc0d"
  },
  {
    "url": "assets/js/22.8841b783.js",
    "revision": "dc7ffcb9393965353a18fd86809a42b2"
  },
  {
    "url": "assets/js/23.4afc7c4a.js",
    "revision": "77add905035fab841381774a71fcb15b"
  },
  {
    "url": "assets/js/3.cda4a111.js",
    "revision": "64f48bf1e8518e05204e161f17774260"
  },
  {
    "url": "assets/js/4.35c28009.js",
    "revision": "667422e90d3605c53ca86ba437a56d03"
  },
  {
    "url": "assets/js/5.97c5f6ed.js",
    "revision": "fb5d47a14d40f7f035c4bac24284fe4d"
  },
  {
    "url": "assets/js/6.1369b73b.js",
    "revision": "35ef14c78eb1bb32995ff1d37adc3d3d"
  },
  {
    "url": "assets/js/7.ec5767ad.js",
    "revision": "e9cd423e189b596d0abd6d425d97f9df"
  },
  {
    "url": "assets/js/8.c292a582.js",
    "revision": "3e4615ea1f3ac3bc2ee10d34c9d4a7a0"
  },
  {
    "url": "assets/js/9.b92e8302.js",
    "revision": "18a572fadcaae8773be6a0c6b784abee"
  },
  {
    "url": "assets/js/app.b7a52a0f.js",
    "revision": "da09db07356c7b5536080a0eb8edcb3e"
  },
  {
    "url": "direvtives.html",
    "revision": "bebe14acf459f0489f25fb633b272b64"
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
    "revision": "b6ff969f9bc036cb6a2d39e5033eccf9"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "e6751c66fc5d1850159b5eec682a9068"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "041396f8606b73f32fc63c6cd12eef2a"
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
