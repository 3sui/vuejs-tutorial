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
    "revision": "136671a80987a9f713b3b5037f30b436"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "09837415a7fadffb685b4952c98412ea"
  },
  {
    "url": "02-getting_started.html",
    "revision": "72f35e887d5b2ee69527f5daeb8bb647"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "cb9fb8c29a6df082e9b4b86b1eaca11e"
  },
  {
    "url": "04-todomvc.html",
    "revision": "3f66fa57bbb6349de4d73436cbef1ea1"
  },
  {
    "url": "05-component_base.html",
    "revision": "f811497c1dac61a2ebafd01018833474"
  },
  {
    "url": "06-transitions.html",
    "revision": "f9036b53571a57cccd5f86b0e78f7fe3"
  },
  {
    "url": "07-ajax.html",
    "revision": "9e9b44df0140ed4f2778d245fffd631b"
  },
  {
    "url": "08-vue_router.html",
    "revision": "e29de3c5431060eb76609cefc4a0f5e8"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "4e4855b3fcdadd735ba90deaf33c29f0"
  },
  {
    "url": "10-preheat.html",
    "revision": "d44c37d218bc8050f19c8dfdf09520d8"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "ad2acacdc36d55ee4d8a88d315e1bf4c"
  },
  {
    "url": "12-webpack.html",
    "revision": "1b31b2035a7d307e110ea7351f09234c"
  },
  {
    "url": "13-vuex.html",
    "revision": "a7e7c6e638c519798604f14fd4075c75"
  },
  {
    "url": "404.html",
    "revision": "624c4ad28fd0c4ba83a6863007cc89b9"
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
    "url": "assets/img/logo-on-white-bg.81da10d7.png",
    "revision": "81da10d7fe4e203f74c1fd5e2d316f5b"
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
    "url": "assets/img/what-is-webpack.f78661be.png",
    "revision": "f78661bef717cf2cc2c2e5158f196384"
  },
  {
    "url": "assets/js/10.474c8bed.js",
    "revision": "b1aefc11e0b3f57be905c8600aea60c6"
  },
  {
    "url": "assets/js/11.49044ca8.js",
    "revision": "57b946c12cd960590e8a6550c6195558"
  },
  {
    "url": "assets/js/12.48283dc4.js",
    "revision": "c316918d6524e3a21e9c87a6a8cf83a6"
  },
  {
    "url": "assets/js/13.95eab40d.js",
    "revision": "8bf1d89f13b31ad3d271c14579968db8"
  },
  {
    "url": "assets/js/14.5ef962cb.js",
    "revision": "39665a768a383250a553e71ba5cf3712"
  },
  {
    "url": "assets/js/15.9a0948dd.js",
    "revision": "d688c6eba2f0c104c687fac5262b749a"
  },
  {
    "url": "assets/js/16.305c18cb.js",
    "revision": "906c0c0d6d46470eac9b3e72281c934e"
  },
  {
    "url": "assets/js/17.92a4cbb3.js",
    "revision": "e15e4501023b8843f45b321ea8b932bc"
  },
  {
    "url": "assets/js/18.6a4747f9.js",
    "revision": "331fd8aa49dc702cb216d90d6848de46"
  },
  {
    "url": "assets/js/19.1fde0085.js",
    "revision": "9d86c611866d7aecb4064f33a7721945"
  },
  {
    "url": "assets/js/2.1dccfd34.js",
    "revision": "3191339d78392eef6529a5209aa90398"
  },
  {
    "url": "assets/js/20.25908e21.js",
    "revision": "fcf5e016d15bbe083910d0415014bf7e"
  },
  {
    "url": "assets/js/21.b6a657a4.js",
    "revision": "187e3bbcbf6274f6df0f623aa4c741d2"
  },
  {
    "url": "assets/js/22.1fa61698.js",
    "revision": "15bbc3e0d145693c137b0a2b2691fc6b"
  },
  {
    "url": "assets/js/23.58ed3171.js",
    "revision": "2b84010d6f4aa73404cd62b8cdf7d71d"
  },
  {
    "url": "assets/js/24.7fa52cfe.js",
    "revision": "652e5d9b364ad28a699bee63156bdc89"
  },
  {
    "url": "assets/js/25.d94365bf.js",
    "revision": "6bebf7ff89522fe3787bf4c8cf12d772"
  },
  {
    "url": "assets/js/26.a12cda47.js",
    "revision": "0a3eb3525e56e444890a7b3ccab8caae"
  },
  {
    "url": "assets/js/3.a8c12811.js",
    "revision": "3deb76112f6a98bb3ff3062dd4efd426"
  },
  {
    "url": "assets/js/4.cdc20a1f.js",
    "revision": "05ed63220e51bb6d2d08f0342432853f"
  },
  {
    "url": "assets/js/5.cecd7a67.js",
    "revision": "c821012938eaadd0ed5dda1b70d64253"
  },
  {
    "url": "assets/js/6.0fd4dc45.js",
    "revision": "986074c709e4e45d8dd034841e611346"
  },
  {
    "url": "assets/js/7.4f75e4da.js",
    "revision": "5a0c1371ba631f223da67ed47a33fb61"
  },
  {
    "url": "assets/js/8.0c40f770.js",
    "revision": "9899edbaee0d961bf66f2e890a6bcc45"
  },
  {
    "url": "assets/js/9.ecae5364.js",
    "revision": "a8a2c3bdcebc87456610cb9d4b9475a9"
  },
  {
    "url": "assets/js/app.61dd41d0.js",
    "revision": "08f7d29c04f56d35fa903c7fbea26958"
  },
  {
    "url": "direvtives.html",
    "revision": "2d7edb9611273b3da9ae62836837a882"
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
    "revision": "da985210b3b7610d624a645654ab3312"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "f0bd2f2df182391b24e6fe71b6641fc2"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "fb910556803c69e45bf62796ae3c37fa"
  },
  {
    "url": "vue-debugging.html",
    "revision": "677e26627c1fe4b2d704dcc1156690d1"
  },
  {
    "url": "vue-style-guide.html",
    "revision": "691f5bd7409bf21d3f0b8a7469b29885"
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
