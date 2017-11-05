import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '@/components/m-header/m-header'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Search from '@/components/search/search'
import Rank from '@/components/rank/rank'

Vue.use(Router)  // 注册router

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MHeader  // 路由中指定组件
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
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
