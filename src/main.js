import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.scss'

const catsApp = createApp(App)
catsApp
  .use(store)
  .use(router)
  .mount('#app')
