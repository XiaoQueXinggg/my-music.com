<template>
	<transition name="slide">
		<div class="singer-detail">
			<music-list
			:title="title"
			:bgImage="bgImage"
			:songs="songs"
			></music-list>
		</div>
	</transition>
</template>

<script type="text/ecmajavascript">
import {mapGetters} from 'vuex'
import {getSingerDetail} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import {createSong} from '@/common/js/song'
import MusicList from '@/components/music-list/MusicList'
export default {
	data() {
		return {
			songs:[],
		}
	},
	components:{
		MusicList
	},
	name:"SingerDetail",
	computed:{
		...mapGetters([
			'singer'
		]),
		title() {
			return this.singer.name
		},
		bgImage() {
			return this.singer.avatar
		}
	},
	methods:{
		_getSingerDetail() {
			getSingerDetail(this.singer.id).then((res) => {
				if(res.code === ERR_OK) {
					this.songs = this._normalizeSongs(res.data.list)
				}
			})	
		},
		_normalizeSongs(list) {
			let ret = []
			list.forEach((item) => {
				let {musicData} =item
				if(musicData.albumid && musicData.albummid) {
					ret.push(createSong(musicData))
				}
 			})
 			return ret
		}
	},
	created() {
		if (!this.singer.id){
			this.$router.push('/singer')
			return
		}
		this._getSingerDetail()
	}
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
	.singer-detail
		position:fixed
		top:0
		bottom:0
		left:0
		right:0
		z-index:100
		background:$color-background
	.slide-leave-active, .slide-enter-active
		transition:all 0.3s
	.slide-leave-to, .slide-enter	
		transform:translate3d(100%,0,0)
</style>