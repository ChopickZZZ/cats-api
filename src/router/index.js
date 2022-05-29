import { createRouter, createWebHashHistory } from 'vue-router'
//Using hash history mode because of the GitHub Pages bug
import AppMain from '../components/AppMain'
import AppFavourite from '../components/AppFavourite'

const router = createRouter({
  history: createWebHashHistory(),
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
