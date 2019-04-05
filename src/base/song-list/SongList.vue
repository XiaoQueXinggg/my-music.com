<template>
		<ul class='song-list'>
			<li v-for="song in songs">
				<div class="content">
					<h1 class="name">{{song.name}}</h1>
					<p class="desc">{{song.singer}}.{{song.album}}</p>
				</div>
			</li>
		</ul>
</template>

<script type="text/ecmajavascript">
export default {
	props:{
		songs:{
			type:Array,
			default:''
		}
	},
	computed:{
	}
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
	.content
		padding:15px 0px 10px 40px
		width:100%
		.name
			height:20px
			line-height:25px
			margin-bottom:10px
		.desc
			color:$color-text-l
</style>