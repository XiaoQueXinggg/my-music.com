<template>
	<scroll class="Listview" :data=data>
		<ul>
			<li  v-for="group in data" class="List-group">
				<h1 class="List-group-title">{{group.title}}</h1>
				<ul>
					<li v-for="item in group.items" class='List-group-item'>
						<img :src="item.avatar" class="avatar">
						<span class="name">{{item.name}}</span>
					</li>
				</ul>
			</li>
		</ul>
	</scroll>
</template>

<script type="text/ecmajavascript">
import Scroll from "@/base/scroll/scroll"
export default {
	props:{
		data:Array,
		default:[]
	},
	components:{
		Scroll
	}
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
	.Listview
		background:$color-background
		width:100%
		heigth:100%
		.List-group
			width:100%
			.List-group-title
				color:$color-text-ll
				background:$color-highlight-background
				font-size:$font-size-small
				height:30px
				padding-left:30px
				line-height:30px
			.List-group-item
					display:flex
					align-items:center
					padding:5px 30px 5px 30px
				.avatar
					height:50px
					width:50px
					border-radius:50%
				.name
					margin-left:20px
					color: $color-text-l

</style>