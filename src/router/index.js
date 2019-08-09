import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

import homeView from '../views/homeView.vue';
import shopView from '../views/shopView.vue';
import goods from '../components/goods/good.vue';
import ratings from '../components/ratings/ratings.vue';
import seller from '../components/seller/seller.vue';

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: '/shop'
  }, {
    path: '/home',
    name: 'home',
    component: homeView
  }, {
    path: '/shop',
    name: 'shop',
    component: shopView,
    redirect:'/shop/goods',
    children: [{
      path: 'goods',
      name: 'goods',
      component: goods,
    }, {
      path: 'ratings',
      name: "ratings",
      component: ratings
    }, {
      path: 'seller',
      name: 'seller',
      component: seller
    }]
  }]
})
