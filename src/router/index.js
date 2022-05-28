import { createRouter, createWebHistory } from 'vue-router'

import AppMain from '../components/AppMain'
import AppFavourite from '../components/AppFavourite'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppMain
    },
    {
      path: '/favourite',
      component: AppFavourite
    },
    {
      path: '/:notFound(.*)',
      redirect: '/'
    }
  ]
})

export default router
