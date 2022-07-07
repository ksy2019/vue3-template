/*
 * @Date: 2022-07-06 16:39:41
 * @LastEditors: lks
 * @LastEditTime: 2022-07-06 17:33:06
 * @Description: vue-router_routes
 */
export default [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('..//views/Index//index.vue')
    }
  ]