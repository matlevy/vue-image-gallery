import Vue from 'vue'
import Router from 'vue-router'
import Users from './views/Users.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    },
    {
      path: '/gallery/:id',
      name: 'gallery-photos',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/GalleryPhotos.vue')
    },
    {
      path: '/photo/:id',
      name: 'photo',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/Photo.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue'),
      children: [
        { 
          path: 'gallery', 
          name: 'user-gallery',
          component: () => import(/* webpackChunkName: "about" */ './views/UserGalleries.vue')
        },
      ]
    }
  ]
})
