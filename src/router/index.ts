/*
 * @Date: 2022-06-06 21:24:50
 * @LastEditors: lks
 * @LastEditTime: 2022-07-06 16:40:32
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
