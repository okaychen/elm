# vue-ele

# Libraries
下面是一些核心的依赖
- vue（^2.5.2）
- vue-router（^3.0.1）：vue官方的路由插件
- vue-resource：提供了web请求服务的vue插件
- express：node.js的web开发框架
- stylus：css预处理器

# Feature
下面是你可能会注意到的一些特征
- vue 2.0 + express + stylus
- 数据mock
- 处理移动端一像素
- stricky footer 布局

# Thanks
该项目是本人学习黄轶老师（ustbhuangyi）慕课网 「Vue.js 高仿饿了么外卖 App」课程完成，

课程地址：http://coding.imooc.com/class/74.html

希望大家体恤老师的劳动成果，通过正版渠道购买.

另外，该项目完全是本人在学习过程中一行一行敲写，主要有以下区别和修改（[查看具体修改点这里]()）：

- data.json从根目录调整到`/mock/data.json`

- 新版vuecli中webpack模板删掉了`dev-server.js`，使用`devServer.before(app)`完成 mock data 的接口

- 路由配置调整到`'./src/router/index.js'`

- 重定向从`router.go()`更改为`{path:'/',redirect:'/goods'}`

- 页面中路由指定从v-link指令更改为`<router-link :to="{name:'seller'}"></router-link>`

- vue 2.0移除了v-for中的$index,$key，改为`(item,index) in seller.supports`，以这种v-for遍历方式，使用index索引

- vue 2.0废弃了v-el,v-ref，改为`ref='menuWrapper'`，以这种方式，并在js中通过`this.$refs.menuWrapepr`获取元素

...待续
