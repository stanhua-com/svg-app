// router/modules/snap.js

import Layout from '@/components/layout/index.vue'

export default [
  {
    path: '/snap',
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: 'SnapSvg',
          fixed: true
        },
        component: () => import('@/views/snap/index.vue')
      },
      {
        path: 'clock',
        meta: {
          title: 'clock-SnapSvg',
          fixed: true
        },
        component: () => import('@/views/snap/clock.vue')
      }
    ]
  }
]