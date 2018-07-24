/**
 * Copyright (C) 2017 微回收
 * All rights reserved
 * @Author: suchen(335167469@qq.com)
 * @Date: 2018/7/15 22:55
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutation'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
