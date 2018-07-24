/**
 * Copyright (C) 2017 微回收
 * All rights reserved
 * @Author: suchen(335167469@qq.com)
 * @Date: 2018/7/14 22:54
 * @Description:
 */
export default class Singer {
  constructor({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
