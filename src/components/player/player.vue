<template>
	<div class="player" v-show="playList.length">
		<div class="normal-player" v-show='fullScreen'>
			<div class="player-header">
				<div class="iconfont" @click="back">&#xe62d;</div>
				<h1 class="song-name">{{currentSong.name}}</h1>
			</div>
			<h1 class='player-singer'>{{currentSong.singer}}</h1>	
			<div class="player-body">
				<div class="player-circle">				
					<img :src="bgImg" class="circle-bg">
				</div>
			</div>
			<div class="player-foot">
				<ul class="player-control">
					<li class="circle iconfont">&#xe653;</li>
					<li class="previous-song iconfont">&#xe63c;</li>
					<li class="player-button iconfont">&#xe626;</li>
					<li class="next-song iconfont">&#xe63e;</li>
					<li class="like-icon iconfont">&#xe627;</li>
				</ul>
			</div>
		</div> 
		<div class="mini-player" v-show='!fullScreen' @click="backNor">
			<div class="imgContent">
				<img :src="bgImg" class='img-iconfont'>
			</div>	
			<ul class="desc">
				<li class="song-name">{{currentSong.name}}</li>
				<li class="song-desc">{{currentSong.album}}</li>
			</ul>	
			<div class="iconfont">&#xe627;</div>
		</div>
	</div>
</template>

<script type="text/ecmajavascript">
import {mapGetters,mapMutations} from 'vuex'
export default {
	computed:{
		...mapGetters([
			'fullScreen',
			'playList',
			'currentSong',
			'bgImg'
		])
	},
	methods:{
		...mapMutations({
			setFullScreen:'SET_FULL_SCREEN'
		}),
		back() {
			this.setFullScreen(false)
		},
		backNor() {
			this.setFullScreen(true)
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
	.mini-player
			position:fixed
			left:0px
			right:0px
			bottom:0px
			height:70px	
			background:$color-background
			.imgContent
				position:absolute
				padding:10px
				.img-iconfont
					width:50px
					height:50px
					border-radius:50%
			.desc
				height:100%
				padding-left:70px
				.song-name
					line-height:30px
					padding-left:10px
					height:30px
				.song-desc
					height:30px
					line-height:30px
					padding-left:10px
					color:$color-text-l
			.iconfont
				position:absolute
				right:0 
				top:0
				width:70px
				height:70px
				line-height:70px
				text-align:center
				font-size:25px
	.normal-player
		position:absolute
		top:0
		bottom:0
		z-index:100
		background:$color-background
		width:100%
		.player-header
			position:relative
			.song-name
				width:100%
				height:40px
				font-size:$font-size-medium
				text-align:center
				line-height:40px
			.iconfont
				position:absolute
				width:30px
				padding:5px 5px
				height:30px
				font-size:25px
				color:$color-theme
		.player-singer
			height:30px
			line-height:30px
			text-align:center
		.player-body
			padding:10px 10px 100px 10px
			display:flex
			aline-items:center
			justify-content:center
			.player-circle
				width:300px
				height:300px
				border:6px solid $color-text-d
				border-radius:50%
				.circle-bg
					width:100%
					border-radius:50%
		.player-foot
			width:100%
			position:absolute
			bottom:0
			.player-control
				heigth:35px
				line-height:35px
				text-align:center
				padding-top:70px
				padding-bottom:100px
				color:$color-theme	
				width:100%
				.circle
					float:left
					width:20%
					font-size:25px				
				.previous-song
					float:left
					width:20%
					font-size:30px	
				.player-button
					float:left
					width:20%
					font-size:35px	
				.next-song
					float:left
					width:20%
					font-size:30px	
				.like-icon 
					float:left
					width:20%
					font-size:25px
</style>