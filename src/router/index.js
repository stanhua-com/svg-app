// router/index.js

import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout/index.vue'
import HomePage from '@/views/index.vue'

Vue.use(Router)

let _routes = [{
  path: '/',
  component: Layout,
  children: [
    {
      path: '',
      meta: {
        title: '首页',
        alive: true,
        fixed: true
      },
      component: HomePage
    },
  ]
}]
const _routeCtx = require.context('./modules', true, /\.js$/i)

_routeCtx.keys().forEach(key => {
  _routeCtx(key).default.forEach(c => {
    _routes.push(c)
  })
})

_routes.push({
  path: '/',
  component: Layout,
  children: [
    {
      path: '*',
      meta: {
        title: '页面不存在',
        active: '404'
      },
      component: () => import('@/views/common/notFound.vue')
    }
  ]
})

const router = new Router({
  mode: 'history',
  routes: _routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router