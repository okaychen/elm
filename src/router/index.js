import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/good.vue';
import ratings from '../components/ratings/ratings.vue';
import seller from '../components/seller/seller.vue';
import VueResource from 'vue-resource';

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  linkActiveClass:'active',
  routes: [{
    path: '/',
    redirect: '/goods'
  }, {
    path: '/goods',
    name: 'goods',
    component: goods
  }, {
    path: '/ratings',
    name: "ratings",
    component: ratings
  }, {
    path: '/seller',
    name: 'seller',
    component: seller
  }]
})
