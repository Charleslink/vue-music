/**
 * Copyright (C) 2017 微回收
 * All rights reserved
 * @Author: suchen(335167469@qq.com)
 * @Date: 2018/7/15 22:55
 * @Description:
 */
import * as types from './mutation-types'

const mamutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  }
}

export default mamutations
