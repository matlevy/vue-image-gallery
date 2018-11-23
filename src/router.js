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
          props: true,
          component: () => import(/* webpackChunkName: "about" */ './views/UserGalleries.vue')
        },
        { 
          path: 'gallery/:id', 
          name: 'user-photos',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ './views/GalleryPhotos.vue')
        },
        {
          path: 'photo/:photoId',
          name: 'user-photo',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ './views/Photo.vue')
        },
      ]
    }
  ]
})
