import jsonp from '@/common/js/jsonp.js'
import {commonParams,options} from "./config.js"
import axios from 'axios'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
export function getSingerList() {
	const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
	const data = Object.assign({},commonParams,{
		channel:"singer",
		page:'list',
		pagesize:100,
		pagenum:1,
		hostUin:0,
		needNewCode:0,
		platform:"yqq",
		g_tk:1664029744
	})
	return jsonp(url,data,options)
}