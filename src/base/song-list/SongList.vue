<template>
		<ul class='song-list'>
			<li v-for="(song,index) in songs" @click="selectItem(song,index)" class="item">
				<h1 class="name">{{song.name}}</h1>
				<p class="desc">{{song.singer}}.{{song.album}}</p>
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
	methods:{
		selectItem(song,index) {
			this.$emit('select',song,index)
		}
	},
	computed:{
	}
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
	.item
		padding:15px 0px 10px 40px
		width:100%
		.name
			height:20px
			line-height:25px
			margin-bottom:10px
		.desc
			color:$color-text-l
</style>