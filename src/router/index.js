import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/routerComponents/goods'
import Ratings from '@/components/routerComponents/ratings'
import Seller from '@/components/routerComponents/sellers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active-link',
  routes: [{
      path: '/',
      name: 'Home',
      component: Goods,
      meta: {
        title: '首页'
      }
    }, {
      path: '/good',
      name: 'Goods',
      component: Goods,
      meta: {
        title: '商品'
      }
    }, {
      path: '/rating',
      name: 'Ratings',
      component: Ratings,
      meta: {
        title: '评论'
      }
    }, {
      path: '/seller',
      name: 'Seller',
      component: Seller,
      meta: {
        title: '商家'
      }
    }]
})
