import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '~/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    hidden: true,
    component: () => import('~/views/login').then(m => m.default || m)
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('~/views/dashboard').then(m => m.default || m),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('~/views/form').then(m => m.default || m),
        meta: { title: 'form', icon: 'form' }
      }
    ]
  }
]

export const asyncRouterMap = []

export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })
}
