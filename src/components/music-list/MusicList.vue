<template>
	<div class="music-list">
		<div class='header' ref="header">
			<div class="header-name" ref="headerName">
				<router-link tag="div" to="/singer" class="iconfont">&#xe625;</router-link>
				<h1 class="singer-name">{{this.title}}</h1>
			</div>
			<div class="imgContent" ref="imgContent">
				<img :src="bgstyle" class="bg-image">
			</div>
		</div>
		<div class="randomPlay" ref="randomPlay">
				<span class="iconfont">&#xe626;</span>
				<span class="text">随机播放全部</span>
		</div>
		<scroll
		:listenScroll="this.listenScroll"
		@scroll="HandleScroll"
		:probeType="3"
		:data="songs"
		class="scrollSong"
		ref="list">
			<song-list :songs="songs" ref="songlist" @select="selectSong">			
			</song-list>
		</scroll>
	</div>
</template>

<script type="text/ecmajavascript">
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'
import SongList from '@/base/song-list/SongList'
import Scroll from '@/base/scroll/scroll'
export default {
	components:{
		SongList,
		Scroll
	},
	data() {
		return {
			scrollY:-1,
			probType:3,
			listenScroll:true,
			imgHeight:0,
			songHeight:0
		}
	},
	mounted() {
		this.$refs.list.$el.style.top = `${this.$refs.imgContent.clientHeight}px`
		this.$refs.header.style.Heigth = `${this.$refs.imgContent.clientHeight}px`
		this.imgHeight = this.$refs.imgContent.clientHeight
		this.songHeight = this.$refs.list.$el.clientHeight
	},
	methods:{
		HandleScroll(pos) {
			this.scrollY = pos.y
		},
		selectSong(song,index,bgImg) {
			this.selectPlay({
				list:this.songs,
				index:index,
				bgImg:this.bgImage
			})
		},
		...mapActions([
			'selectPlay'
		])
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
	},
	watch:{
		scrollY(pos) { 
			if(pos > 0) {
				this.$refs.header.style.height = ``					
				this.$refs.randomPlay.style.transform = `translate3d(-50%,0,0)`
				this.$refs.imgContent.style.height = `${pos}px`
				return
			}else {
				this.$refs.randomPlay.style.transform = `translate3d(-50%,${pos}px,0)`	
				this.$refs.list.$el.style.overflow = `visible`
				if((this.imgHeight+pos) <= 25){
					this.$refs.header.style.height = `25px`
					return 
				}	
				this.$refs.header.style.height = `${this.imgHeight+pos}px`
			}
						
		}
	}
}	
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
	.music-list
		width:100%
		.scrollSong
			position:absolute
			left:0px
			bottom:0px
			overflow:hidden
		.header
			position:relative
			width:100%
			overflow:hidden
			z-index:10
			.header-name
				position:absolute
				height:100%
				width:100%
				z-index:13	
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
			.imgContent	
				width:100%
				height:0
				padding-bottom:70%				
				.bg-image
					width:100%
		.randomPlay
			padding:5px 15px
			position:absolute
			z-index:12
			top:30%
			left:50%
			transform:translateX(-50%)
			height:30px
			width:140px
			border:2px solid #ffcd32
			border-radius:20px
			display:flex
			align-items:center
			content-items:center
			.iconfont
				display:inline-block
				text-align:center
				font-size:25px
				line-height:25px
				width:25px
				height:25px
				color:$color-theme 
			.text
				margin-left:5px
				font-size:$font-size-medium-x
				display:inline-block
				line-height:25px
				height:25px
				color:$color-theme 
</style>