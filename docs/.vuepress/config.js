const sidebar = require('./sidebar')

module.exports = {
  base: '/',
  title: 'Vue.js 入门教程',
  description: 'Vue.js - The Progressive JavaScript Framework',
  host: '0.0.0.0',
  port: 8080,
  /**
   * 指定 vuepress build 的输出目录
   * 默认 .vuepress/dist
   * 注：从根目录出发
   */
  dest: 'docs/.vuepress/dist',
  /**
   * 缓存
   */
  cache: true,

  /**
   * 如果设置成 true，VuePress 将会自动生成并且注册一个 service worker，它缓存了那些已访问过的页面的内容，用于离线访问（仅在生产环境生效）。
   * @type {Boolean}
   * 默认值: false
   */
  serviceWorker: true,

  /**
   * 是否对异步加载页面的内容开启占位符加载。如果它是一个字符串，那么它应该是自定义加载组件的名称
   */
  contentLoading: true,

  themeConfig: {
    // navbar: true,
    // nav: [
    //   { text: '基础', link: '/guide/introduction' },
    //   { text: '综合案例', link: '/eshop-admin/' }
    // ],
    repo: 'lipengzhou/vuejs-tutorial',
    repoLabel: 'GitHub',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'lipengzhou/nodejs-tutorial',
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    sidebar,
    sidebarDepth: 2
  },

  /**
   * 插件配置
   * 参考：https://vuepress.vuejs.org/zh/plugin/#using-a-plugin
   */
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom'],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format('YYYY-MM-DD hh:mm:ss')
      }
    }]
  ],

  /**
   * markdown 配置
   * 参考：https://vuepress.vuejs.org/zh/config/#markdown
   */
  markdown: {
    // 是否在每个代码块的左侧显示行号，参考 https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7
    lineNumbers: false,
    // 锚点配置，参考 https://github.com/valeriangalliat/markdown-it-anchor
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    // 这个键值对将会作为特性被增加到是外部链接的 <a> 标签上，默认的选项将会在新窗口中打开一个该外部链接。
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    // 内容导航 markdown-it-table-of-contents 的选项
    toc: { includeLevel: [2, 3] },
    // 一个用于修改当前的 markdown-it 实例的默认配置，或者应用额外的插件的函数。参考文档：https://github.com/markdown-it/markdown-it
    config: md => { /* config markdown instance */ }
  }
}
