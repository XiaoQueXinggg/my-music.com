<template>
  <div class="singer">
  	<list-view
  	@select="selectSinger" 
  	:data="items"
  	></list-view>
  	<router-view>
  	</router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import {ERR_OK} from "@/api/config"
import {getSingerList} from "@/api/singer"
import ListView from "@/base/listview/listview"
import {mapMutations} from 'vuex'
const HOT_NAME = "热门数据"
const HOT_SINGER_LEN = 10
export default {
	name:"Singer",
	components:{
		ListView
	},
	data () {
		return {
			singers:[],
			items:[],
			alpha:""
		}
	},
	computed:{
		itemslist() {
			if(this.items.length) {
				return this.items
			}
		}
	},
	methods:{
		selectSinger(singer) {
			this.$router.push({
				path:`/singer/${singer.id}`
			}),
			this.setSinger(singer)
		},
		_getSingerList() {
			getSingerList().then((res)=>{				
				if (res.code === ERR_OK) {
					this.singers = res.data.list
					this._normalizeSinger(this.singers)
				}								
			})
		},
		_normalizeSinger(list) {
			let map = {
				hot:{
					title:HOT_NAME,
					items:[]
				}
			}
			list.forEach((item, index) => {
				if(index < HOT_SINGER_LEN) {
					map.hot.items.push({
						id:item.Fsinger_mid,
						name:item.Fsinger_name,
						avatar:'https://y.gtimg.cn/music/photo_new/T001R300x300M000'+item.Fsinger_mid+'.jpg?max_age=2592000'
					})
				}
				const key = item.Findex
				if (!map[key]) {
					map[key]={
						title:item.Findex,
						items:[]
					}
				}
				map[key].items.push({
					id:item.Fsinger_mid,
					name:item.Fsinger_name,
					avatar:'https://y.gtimg.cn/music/photo_new/T001R300x300M000'+item.Fsinger_mid+'.jpg?max_age=2592000'
				}) 
				
			})
			let hot = []
			let ret = []
			for (let key in map) {
				let val = map[key]
				if (val.title.match(/[a-zA-Z]/)) {
					ret.push(val)
				} else if(val.title === HOT_NAME){
					hot.push(val)
				}
			}
			ret.sort((a,b) => {
				return a.title.charCodeAt(0)-b.title.charCodeAt(0)
			})
			this.items=hot.concat(ret)
		},
		...mapMutations({
			setSinger:'SET_SINGER'
		})		
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