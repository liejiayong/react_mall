# 积分商城


## 目录结构说明

```
   ├── README.md
   ├── build                        // webpack 构建工具配置文件夹
   │   └── webpack.prod.config.js   // 生产环境配置
   ├── config                       // 一些用户选项
   │   └── index.js                 // 一些可定制化的用户选项，协助配置 webpack
   ├── dist                         // 生产编译后的文件
   │   └── index.html
   ├── package.json
   ├── src                          // 源码目录
   │   ├── api                      // 归纳一些需要 http 请求的 api
   │   │   ├── request.js           // 封装的网络请求模块
   │   │   └── root.js              // 某个模块的 网络请求部分
   │   ├── components               // 展示型组件，按照容器组件分文件夹
   │   │   ├── App                  // App 容器组件子组件文件夹
   │   │   │   └── index.js
   │   ├── containers               // 容器组件
   │   │   ├── App.js
   │   │   ├── Home.js
   │   │   └── Test.js
   │   ├── index.js                 // react 入口文件
   │   ├── modules                  // redux 模块，包括 reducer 部分与 action 部分
   │   │   ├── reducers.js          // 合并后的总的 reducer
   │   │   ├── home                 // 对应某个容器组件，集中了这个容器的 数据和 action
   │   │   │   ├── actions.js
   │   │   │   └── reducer.js
   │   │   └── types-constant.jsv   // 抽出来的 type 常量
   │   ├── router
   │   │   ├── Bundle.js            // 配置按需加载的外层组件
   │   │   ├── lazyLoad.js          // 嵌套按需加载组件的方法
   │   │   └── routes.js            // 基本路由配置
   │   ├── static                   // 静态资源 图片、音频、视频等
   │   ├── store                    // store 配置
   │   │   ├── configureStore.js
   │   │   └── index.js
   │   ├── style                    // 样式文件
   │   │   └── app.less
   │   ├── template                 // 页面模板
   │   └── utils                    // 公用的工具
   │       └── index.js
   └── yarn.lock
```
