import Vue from 'vue'
import Router from 'vue-router'

//  import组件
import Home from '@/components/home/home'
import Sort from '@/components/sort/sort'
import Shop from '@/components/shop/shop'
import Me from '@/components/me/me'

Vue.use(Router)  // 注册router

export default new Router({
  mode: 'history',   // 这里使用history模式提升速度，但是他依赖HTML5 History API和服务器配置
  base: __dirname,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort,
      alias: '/otherRe'    // 路由别名，注意'/'
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
