/**
 * Copyright (C) 2017 微回收
 * All rights reserved
 * @Author: suchen(335167469@qq.com)
 * @Date: 2018/7/15 23:29
 * @Description:
 */
import {commonParams} from 'api/config'
import axios from 'axios'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.getVkey().then(key => {
      this.url = `http://dl.stream.qqmusic.qq.com/C100${this.mid}.m4a?vkey=${key}&uin=0&fromtag=66`
    })
  }
  // getUrl() {
  //   this.getVkey().then(key => {
  //     console.log(key)
  //   })
  // }
  getVkey() {
    const url = '/api/vkey'
    const data = Object.assign({}, commonParams, {
      loginUin: 0,
      hostUin: 0,
      format: 'json',
      platform: 'yqq',
      needNewCode: 0,
      cid: 205361747,
      uin: 0,
      songmid: this.mid,
      filename: `C400${this.mid}.m4a`,
      guid: this.getGuid()
    })
    return axios.get(url, {params: data}).then((res) => {
      return Promise.resolve(res.data.data.items[0].vkey)
    })
  }
  getGuid() {
    var t = new Date().getUTCMilliseconds()
    return Math.round(2147483647 * Math.random()) * t % 1e10
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`
    // url: `http://dl.stream.qqmusic.qq.com/${musicData.songid}.m4a?vkey=${key}fromtag=66`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
