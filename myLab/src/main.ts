import { createApp } from 'vue'
import router from './router'
const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'


import { createPinia } from 'pinia'
app.use(createPinia())

import App from './App.vue'
app.use(router)
app.use(ElementPlus)
app.mount('#app')
