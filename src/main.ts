import { createApp } from 'vue'
import App from './App.vue'
import './style/global.css'
import 'uno.css'
import router from './router/index'
import './style/var.scss'

createApp(App).use(router).mount('#app')
