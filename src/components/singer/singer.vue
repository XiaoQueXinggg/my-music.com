<template>
  <div class="singer">
  歌手页面
  </div>
</template>

<script type="text/ecmascript-6">
import {ERR_OK} from "@/api/config"
import {getSingerList} from "@/api/singer"	
const HOT_NAME = "热门数据"
const HOT_SINGER_LEN = 10
export default {
	name:"Singer",
	data () {
		return {
			singers:[]
		}
	},
	methods:{
		_getSingerList() {
			getSingerList().then((res)=>{
				console.log(res)
				if (res.code === ERR_OK) {
					this.singers = res.data.list
				}
			})
		},
		_normalizeSinger(list) {
			let map = {
				hot: {
					title:HOT_NAME,
					items:[]
				}
			}
			list.forEach((item,index)=>{
				if (index < HOT_SINGER_LEN) {
					map.hot.items.push({
						id:item.Fsinger_mid,
						name:item.Fsinger_name,
						avator:'http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000'
					})
				}
			})
		}
	},
	created() {
		this._getSingerList()
	}
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
 @import "~common/stylus/variable"
 @import "~common/stylus/mixin"
 	.singer
 		position:fixed
 		top:88px
 		bottom:0
 		width:100%
</style>