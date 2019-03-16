# 第9章 Vue CLI

[Vue CLI](https://cli.vuejs.org/) 是 Vue 的脚手架工具，它可以帮助我们快速生成 Vue 基础项目代码，提供开箱即用的功能特性。

- 基础代码目录结构
- 开发服务
- 本地调试
- 代码部署
- 热加载
- 单元测试
- ...

![illustration-home-inverted.91b07808be.png](./assets/illustration-home-inverted.91b07808be.png)

- 官方文档：https://cli.vuejs.org/
- GitHub：https://github.com/vuejs/vue-cli



### 版本

- Vue CLI 2.x（更适合学习）
  - 保留了很多的配置项，非常适合自定义
- Vue CLI 3.x
  - 更傻瓜化了，用户体验更好了
  - 目前还处于开发阶段，还没有正式发布
  - 但是 GitHub 仓库首页已经直接指向 dev 版本了

## 开始

安装：

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

初始化：

```bash
vue create my-project
```

启动开发模式：

```bash
npm run dev
```

## 目录结构

```

```

## 组件化构建模型图

## .vue 单文件组件

## ECMAScript 6 Module

## `npm run dev`

![1531878199154](assets/1531878199154.png)

- `package.json`
- `scripts`
- dev

```bash
# --inline 行内输出提示信息
# --progress 显示打包进度条
# --config 用来指定打包的配置文件
webpack-dev-server --inline --progress --config build/webpack.dev.conf.js
```

![1531878316607](assets/1531878316607.png)

开发的时候：

```bash
# 使用的是 base + dev 配置文件
npm run dev
```

打包发布的时候：

```bash
# 使用的是 base + prod
npm run build
```

## Vue CLI 3（还没有正式发布）

- 号称是零配置，也不需要看到配置文件

依赖

- Node 8.9 +，推荐 8.11 +

安装：

- 卸载之前的
  - `npm uninstall --global vue-cli`
- 安装最新的 `npm install --global @vue/cli`

快速原型：

- `npm install -g @vue/cli-service-globalA`
