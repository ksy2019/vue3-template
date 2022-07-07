/*
 * @Date: 2022-06-28 00:29:52
 * @LastEditors: lks
 * @LastEditTime: 2022-07-06 16:31:29
 * @Description: main
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.use(ElementPlus)
app.mount('#app')
