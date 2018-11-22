import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    },
    {
      path: '/gallery/:id',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "about" */ './views/Gallery.vue')
    }
  ]
})
