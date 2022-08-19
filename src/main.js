import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.scss'

const store = createPinia()
const catsApp = createApp(App)

catsApp
  .use(store)
  .use(router)
  .mount('#app')
