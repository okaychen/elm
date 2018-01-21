# vue-ele

该项目是本人学习黄轶老师（ustbhuangyi）慕课网 「Vue.js 高仿饿了么外卖 App」课程完成，

课程地址：http://coding.imooc.com/class/74.html

希望大家体恤老师的劳动成果，通过正版渠道购买.

另外，该项目完全是本人在学习过程中一行一行敲写，主要有以下区别和修改（[查看具体修改点这里]()）：

- data.json从根目录调整到`/mock/data.json`

- 新版vuecli中webpack模板删掉了`dev-server.js`，使用`devServer.before(app)`完成 mock data 的接口

- 路由配置调整到`'./src/router/index.js'`

- 重定向从`router.go()`更改为`{path:'/',redirect:'/goods'}`

- 页面中路由指定从v-link指令更改为`<router-link :to="{name:'seller'}"></router-link>`

...待续
