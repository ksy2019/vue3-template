/*
 * @Date: 2022-07-06 16:20:27
 * @LastEditors: lks
 * @LastEditTime: 2022-07-06 16:31:01
 * @Description: vuex仓库的入口文件
 */

import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

const store = createStore({
    state,
    mutations,
    actions
})

export default store