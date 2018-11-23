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
          path: '', 
          name: 'user-details',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ './views/UserDetail.vue')
        },
        { 
          path: 'gallery', 
          name: 'user-gallery',
          component: () => import(/* webpackChunkName: "about" */ './views/UserGalleries.vue')
        },
        { 
          path: 'photos/:gallery', 
          name: 'user-photos',
          component: () => import(/* webpackChunkName: "about" */ './views/GalleryPhotos.vue')
        },
      ]
    }
  ]
})
