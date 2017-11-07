import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '@/components/m-header/m-header'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Search from '@/components/search/search'
import Rank from '@/components/rank/rank'

Vue.use(Router)  // 注册router

export default new Router({
  mode: 'history',   // 这里使用history模式提升速度，但是他依赖HTML5 History API和服务器配置
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MHeader  // 路由中指定组件
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      alias: '/otherRe'    // 路由别名，注意'/'
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'component',
      component: Search
    }
  ]
})
