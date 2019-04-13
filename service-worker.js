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
    "revision": "67386de18298160de5da92e7bbd416fb"
  },
  {
    "url": "01-vue_introduction.html",
    "revision": "10912dac3e93847ba60081a7adec90ea"
  },
  {
    "url": "02-getting_started.html",
    "revision": "73b9655aeb1828aac0f9b9eb8fcdb6c0"
  },
  {
    "url": "03-template_syntax.html",
    "revision": "ca7b0375718d1922b0882368cfeb6da1"
  },
  {
    "url": "04-todomvc.html",
    "revision": "6efeadf96190e31c65ab3b6e5df3568a"
  },
  {
    "url": "05-component_base.html",
    "revision": "b198ceb2307c09393b51a55ea11a6ebb"
  },
  {
    "url": "06-transitions.html",
    "revision": "66d784f4ae2aa6508f7321a274c2b3d9"
  },
  {
    "url": "07-ajax.html",
    "revision": "4c3ccfb0d75122015453db59856f49a1"
  },
  {
    "url": "08-vue_router.html",
    "revision": "07752ae65d7d359fb7095f0116b48d48"
  },
  {
    "url": "09-vue_cli.html",
    "revision": "51728d41b02bf4038317d0d1b2374ff7"
  },
  {
    "url": "10-preheat.html",
    "revision": "051e27787526a604d2cfccea8e627055"
  },
  {
    "url": "11-pinyougou.html",
    "revision": "c6cc90fe788bb81de79387acd87fd401"
  },
  {
    "url": "12-webpack.html",
    "revision": "09f168ce752a50d0fb1eb5aa6ba3e13e"
  },
  {
    "url": "13-vuex.html",
    "revision": "804449f2d33d1d0642cf4419bf5ac250"
  },
  {
    "url": "404.html",
    "revision": "5ed740904ed03e2b9985b40216bbac1d"
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
    "url": "assets/js/11.c37469a5.js",
    "revision": "845a33ef76794e2b65fd11c10ecdf541"
  },
  {
    "url": "assets/js/12.b92647d2.js",
    "revision": "d1b0aa1c6e1a5c25667399c40bc08470"
  },
  {
    "url": "assets/js/13.cbf4e9b2.js",
    "revision": "643d444138c8491ce577b4b90ed8cc32"
  },
  {
    "url": "assets/js/14.7e37d39f.js",
    "revision": "0e284896caa0cee3b3b451d4e1b23d78"
  },
  {
    "url": "assets/js/15.5af843c7.js",
    "revision": "a5ec4d78fd087efe70a614db87e30a6b"
  },
  {
    "url": "assets/js/16.d44d759a.js",
    "revision": "39d7e0b1ad44004f34a48315c866acfe"
  },
  {
    "url": "assets/js/17.65f10b9d.js",
    "revision": "b831b4f999bd4560b07e9126e7debf78"
  },
  {
    "url": "assets/js/18.3b3791c7.js",
    "revision": "ccef2984e52052920d08c7f475585a6f"
  },
  {
    "url": "assets/js/19.3c488b2a.js",
    "revision": "562cd2fdd62c2e590a81f0f96f4e7e43"
  },
  {
    "url": "assets/js/2.422130ee.js",
    "revision": "2fd0ffe912faa14ef6fb4b0e91bc7f89"
  },
  {
    "url": "assets/js/20.25908e21.js",
    "revision": "fcf5e016d15bbe083910d0415014bf7e"
  },
  {
    "url": "assets/js/21.0cba4253.js",
    "revision": "cef7eebd190d51fa23f6953b62a570dd"
  },
  {
    "url": "assets/js/22.51076707.js",
    "revision": "1e43d584ed5cb5770177459c46257ac0"
  },
  {
    "url": "assets/js/23.9964b8dc.js",
    "revision": "baaf27f178e72e67f59cbe9d995329f6"
  },
  {
    "url": "assets/js/24.4dc94da0.js",
    "revision": "27698f2cae0e3adc948f3c82131f3686"
  },
  {
    "url": "assets/js/25.e236c7c7.js",
    "revision": "e82593754eb2edad032aaafb6a0bf0fe"
  },
  {
    "url": "assets/js/26.a12cda47.js",
    "revision": "0a3eb3525e56e444890a7b3ccab8caae"
  },
  {
    "url": "assets/js/3.8f1ed214.js",
    "revision": "29a36f3b229d89eb180d6bb63da35db2"
  },
  {
    "url": "assets/js/4.cdc20a1f.js",
    "revision": "05ed63220e51bb6d2d08f0342432853f"
  },
  {
    "url": "assets/js/5.47cd3cfa.js",
    "revision": "11c7af434dab9b9618af474c12454c88"
  },
  {
    "url": "assets/js/6.96942e1b.js",
    "revision": "c9a8102cd862eeb83861938dc4f7d4d4"
  },
  {
    "url": "assets/js/7.1eff77bd.js",
    "revision": "1b882a375a30b0d73bfc456770adc8ba"
  },
  {
    "url": "assets/js/8.d7139dc6.js",
    "revision": "edccc60b8989dcdf21c8b544fe65ba11"
  },
  {
    "url": "assets/js/9.0fd8f333.js",
    "revision": "3fcabe0d454bd72b7b9a82bb852ef7b7"
  },
  {
    "url": "assets/js/app.e3b22ae0.js",
    "revision": "7d1a40dfbaecbc8645a312af954d67c2"
  },
  {
    "url": "direvtives.html",
    "revision": "307f5736c9547f778c8d0574a073cb99"
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
    "revision": "014472c1e293db21ca2b4d3be4f31649"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mvvm.html",
    "revision": "b670be0855db11574c33a9b46f9aae7e"
  },
  {
    "url": "vue-cli-example.html",
    "revision": "35962e6b9cfcf7e7c963d9c2cb934c69"
  },
  {
    "url": "vue-debugging.html",
    "revision": "802a61b4b98695c80505cd65131c14b7"
  },
  {
    "url": "vue-style-guide.html",
    "revision": "ac249b4924c02dcd47e1d47ddc0ebdcd"
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
