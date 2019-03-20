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
    "revision": "9623a985b7bb19e59ddf08f5a8aeb1f7"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "abe8cc56253e172aaeb53be410f14d3d"
  },
  {
    "url": "02-getting_started.html",
    "revision": "fc4a9256de2e783d6096e1b657e943ee"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "171912aad39097fc49d7564e55e7cec5"
  },
  {
    "url": "04-todomvc.html",
    "revision": "fad1a0958cd1dc87497e266468cecbed"
  },
  {
    "url": "05-component_base.html",
    "revision": "d57a6b540639aaf37af375ea5953e804"
  },
  {
    "url": "06-transitions.html",
    "revision": "d96aa58dcb546e99dea9fb1254ae0ec2"
  },
  {
    "url": "07-ajax.html",
    "revision": "7927c6156be49b42f99aab8672790287"
  },
  {
    "url": "08-vue_router.html",
    "revision": "7ac9c538650f81116885462dce0e7bd0"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "196e6ec327ab0fbf1eb49b17f827521c"
  },
  {
    "url": "10-preheat.html",
    "revision": "11b0a0db08795d12ae0bb6bc538fa909"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "aff60fd695b4077619d934549d5e6e13"
  },
  {
    "url": "12-webpack.html",
    "revision": "c79a8b20d047282dfaf8385f1c23bc73"
  },
  {
    "url": "404.html",
    "revision": "0abaebf87998f8ed802bfea19bde7184"
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
    "url": "assets/js/13.aba12164.js",
    "revision": "57439860845150813fd307ebb3db2d75"
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
    "url": "assets/js/17.52acfbb5.js",
    "revision": "8a8e2db016585a6f7d7e643fde0e82c1"
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
    "url": "assets/js/3.d5e88b0b.js",
    "revision": "a2fdf6f99c9ee6601777548a7a992075"
  },
  {
    "url": "assets/js/4.210947a8.js",
    "revision": "4a0e86fcf30efbed9239c22a3a4ffc29"
  },
  {
    "url": "assets/js/5.e31f2507.js",
    "revision": "d8c46f1768db38a47f1f3d1b4c247195"
  },
  {
    "url": "assets/js/6.9d513d48.js",
    "revision": "10595cf94290ab31c74f7880dcf5713d"
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
    "url": "assets/js/app.10f26906.js",
    "revision": "6c607f5a489ab14439fc141a1fb0d31b"
  },
  {
    "url": "direvtives.html",
    "revision": "87f6b5c222e1b1e743a33b4bf577fb07"
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
    "revision": "3a0d4c0ed8cae4d7b44373fb2a54b09c"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "19c98d8c17515833bd9c0e62de7fb9ea"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "ad1237327e23cf21f9c6310f1bd21104"
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
