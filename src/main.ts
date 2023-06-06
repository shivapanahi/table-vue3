import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createPinia } from 'pinia'


const pinia = createPinia()

createApp(App).use(router).mount('#app')
createApp(App).use(pinia)
