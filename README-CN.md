# vue-ele

<p align="center">
  <img src="dist/static/images/home.gif" width="350" alt="home" />
  <img src="dist/static/images/pop.gif" width="350" alt="pop" />
</p>

<p align="center">
  <img src="dist/static/images/ratings.gif" width="350" alt="ratings" />
  <img src="dist/static/images/seller.gif" width="350" alt="seller" />
</p>

# Libraries

下面是一些核心的依赖

- vue（^2.5.2）
- vue-router（^3.0.1）：vue 官方的路由插件
- vue-resource：提供了 web 请求服务的 vue 插件
- express：node.js 的 web 开发框架
- stylus：css 预处理器

# Feature

下面是你可能会注意到的一些特征

- vue 2.0 + express + stylus
- 数据 mock
- 处理移动端一像素
- stricky footer 布局

# Build Setup
下面会告诉你如何安装依赖启动和打包这个项目

```sh
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# API

数据 mock api

```js
  devServer: {
    //  add data mock api
    before(app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })

      app.get('/api/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })

      app.get('/api/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })

    },
```

- seller `/api/seller`
- goods `/api/goods`
- ratings `/api/ratings`

# Thanks

- [ustbhuangyi](http://coding.imooc.com/class/74.html)
