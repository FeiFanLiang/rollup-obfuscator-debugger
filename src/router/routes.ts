import { RouteRecordRaw } from 'vue-router'

const commonRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/Home/index.vue')
  },
  {
    name: 'notFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/Error/index.vue')
  }
]

export default commonRoutes
