import { createApp } from 'vue'
import App from './App.vue'
import routerConfig from './router'
import '../src/assets/main.css'

const router = routerConfig

createApp(App)
  .use(router)
  .mount('#app')
