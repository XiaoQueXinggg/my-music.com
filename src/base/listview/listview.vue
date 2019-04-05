<template>
	<scroll
	class="Listview"
	:data="data"
	ref="listview"
	:listenScroll="this.listenScroll"
	@scroll="scroll"
	:probeType="probeType"
	>
		<ul>
			<li  v-for="group in data" class="List-group" ref="listGroup">
				<h1
				class="List-group-title"
				ref="group.title"
				>{{group.title}}</h1>
				<ul>
					<li
					@click="selectItem(item)"
					v-for="item in group.items"
					class='List-group-item'
					>
						<img :src="item.avatar" class="avatar">
						<span class="name">{{item.name}}</span>
					</li>
				</ul>
			</li>
		</ul>
		<div
		class="alphabet"
		@touchstart="onTouchStart"
		@touchmove="onTouchMove"
		>
			<ul class="alphabet-group">
				<li v-for="(group,index) in data"
				class='item'
				:class="{'current': currentIndex===index}"
				:data-index="index"
				>
				{{group.title}}</li>
			</ul>
		</div>
		<div class="fixed-list" v-show="fixedTitle" ref='fixed'>
			<h1 class="fixed-title">{{fixedTitle}}</h1>
		</div>
	</scroll>
</template>

<script type="text/ecmajavascript">
import Scroll from "@/base/scroll/scroll"
import {getData} from "@/common/js/dom"
const Title_Height = 30
export default {
	created() {
		this.probeType=3
 	},
	props:{
		data:{
			type:Array,
			default:[]
		}
	},
	data () {
		return {
			touch:{

			},
			listenScroll:true,
			targetHeight:20,
			scrollY:-1,
			currentIndex:0,
			listHeight:[],
			diff:-1,
			titleHeight:30,
			fixedTop:0
		}
	},
	computed:{
		fixedTitle() {
			if(this.scrollY>0){
				return 
			}
			return this.data[this.currentIndex]? this.data[this.currentIndex].title : ''
			
		}
	},
	methods:{
		selectItem(item){
			this.$emit("select",item)
		},
		onTouchStart(e) {
			let targetIndex = getData(e.target,'index')
			let firstTouch = e.touches[0]
			this.touch.y1 = firstTouch.pageY
			this.touch.targetIndex=targetIndex
			this.$refs.listview.scrollToElement(this.$refs.listGroup[targetIndex],0)
		},
		onTouchMove(e) {
			let firstTouch = e.touches[0]
			this.touch.y2=firstTouch.pageY
			let delta = (this.touch.y2-this.touch.y1) / this.targetHeight | 0 
			let targetIndex = parseInt(this.touch.targetIndex)+delta
			this.$refs.listview.scrollToElement(this.$refs.listGroup[targetIndex],0)
		},
		scroll(pos) {
			this.scrollY=pos.y
		},
		_calculateHeight() {
			this.listHeight = []
			let list = this.$refs.listGroup
			let listLen = this.$refs.listGroup.length
			let height = 0
			this.listHeight.push(height)
			for(let i = 0; i< listLen;i++) {
				height += list[i].clientHeight
				this.listHeight.push(height)
			}
		}	
	},
	watch:{
		data() {
			setTimeout(() => {
				this._calculateHeight()
			},20)
		},
		scrollY(newY) {
			const listHeight = this.listHeight
			const Y = Math.abs(newY) | 0 
			for (let i = 0;i<listHeight.length; i++) {
				let height1 = listHeight[i]
				let height2 = listHeight[i+1]
				if(Y >= height1 && Y < height2){
					this.diff = height2 +newY
					this.currentIndex = i
				}
			}
		},
		diff(newVal) {
			let fixedTop = (newVal > 0 && newVal < Title_Height) ? newVal - Title_Height : 0
			if (this.fixedTop === fixedTop) {
				return 
			}
			this.fixedTop = fixedTop
			this.$refs.fixed.style.transform =`translate3d(0,${fixedTop}px,0)`
		}
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
		position:relative
		background:$color-background
		height:100%
		width:100%
		overflow:hidden
		.alphabet
			position:absolute
			top:50%
			transform:translateY(-50%)
			right:0
			width:30px
			.item
				line-height:20px
				text-align:center
				font-size:$font-size-medium-x
				overflow:hidden
				height:20px
				color:$color-text-l
				&.current
					color:$color-theme
		.List-group
			padding-bottom:20px
			.List-group-title
				margin-bottom:10px
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
		.fixed-list
			position:absolute
			top:0
			width:100%
			.fixed-title
				margin-bottom:10px
				color:$color-text-ll
				background:$color-highlight-background
				font-size:$font-size-small
				height:30px
				padding-left:30px
				line-height:30px
		
</style>