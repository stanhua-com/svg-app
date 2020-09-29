// router/modules/common.js

import Layout from '@/components/layout/index.vue'

import HomePage from '@/views/index.vue'

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'login',
        meta: {
          title: '登录'
        },
        component: HomePage
      }
    ]
  }
]