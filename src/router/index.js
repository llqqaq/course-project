import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '@/views/course/index'
Vue.use(VueRouter)

/**
 * 使用webpackChunkName可以将该组件分块，可以分在同一个块内
 * 如果没有指定的webpackChunkName，每个组件会各自打包成一个js
 */

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
  },
  {
    path: '/',
    name: 'course',
    component: Course
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import(/* webpackChunkName: 'learn' */'@/views/learn/index')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'user' */'@/views/user/index')
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import(/* webpackChunkName: 'error' */'@/views/error-page/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
