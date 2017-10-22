import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '@/components/m-header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MHeader  // 路由中指定组件
    }
  ]
})
