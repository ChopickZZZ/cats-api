import { createRouter, createWebHistory } from 'vue-router'

import AppMain from '../components/AppMain'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppMain
    }
  ]
})

export default router
