import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/registration',
    name: 'Register',
    meta: {layout: 'empty'},
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/new-publication',
    name: 'NewPublication',
    meta: {layout: 'main'},
    component: () => import('@/views/NewPublication.vue')
  },
  {
    path: '/all-publications',
    name: 'AllPublications',
    meta: {layout: 'main'},
    component: () => import('@/views/AllPublications.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
