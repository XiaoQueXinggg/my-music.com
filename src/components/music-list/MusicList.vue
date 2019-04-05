<template>
	<div class="music-list">
		<div class="header">
			<router-link tag="div" to="/singer" class="iconfont">&#xe625;</router-link>
			<h1 class="singer-name">{{this.title}}</h1>
		</div>
		<div class="bgimage"  :style="bgstyle" ref="bgImg">
			<img :src="bgstyle" class="bg-image">
		</div>
		<scroll :data="songs" class="songList" ref="list">
			<song-list :songs="songs">			
			</song-list>
		</scroll>
	</div>
</template>

<script type="text/ecmajavascript">
import SongList from '@/base/song-list/SongList'
import Scroll from '@/base/scroll/scroll'
export default {
	components:{
		SongList,
		Scroll
	},
	mounted() {
		this.$refs.list.$el.style.top = `${this.$refs.bgImg.clientHeight}px`
	},
	props:{
		title:{
			type:String,
			default:''
		},
		bgImage:{
			type:String,
			default:''
		},
		songs:{
			type:Array,
			default:[]
		}
	},
	computed:{
		bgstyle() {
			return this.bgImage
		}
	}
}	
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
	.music-list
		width:100%
		.songList
			position:absolute
			left:0px
			bottom:0px
			overflow:hidden
			top:262.633px
		.header
			position:absolute
			height:100%
			width:100%	
			.iconfont
				position:absolute
				top:0
				left:0
				height:25px
				width:25px
				text-align:center
				line-height:25px
				font-weight:bold
				color:$color-theme
			.singer-name
				text-align:center
				font-size:$font-size-large
				height:25px	
				line-height:25px
		.bgimage
			width:100%
			height:0
			padding-bottom:70%
			overflow:hidden
			.bg-image
				width:100%
</style>