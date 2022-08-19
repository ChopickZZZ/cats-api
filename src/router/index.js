import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: () => import('@/views/FavouriteCats')
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
