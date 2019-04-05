<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script type="text/ecmajavascript">
import Bscroll from "better-scroll"
export default  {
	props:{
		probeType:{
			type:Number,
			default:1
		},
		click:{
			type:Number,
			default:1
		},
		data:{
			type:Array,
			default:null
		},
		listenScroll:{
			type:Boolean,
			default:false
		}
	},
	mounted () {
		setTimeout (()=>{
			this._initScroll()
		},20)
	},
	methods:{
		_initScroll() {
			if(!this.$refs.wrapper) {
				return
			}
			this.scroll=new Bscroll(this.$refs.wrapper,{
				probeType:this.probeType,
				click:this.click
			})
			if(this.listenScroll) {
				let me = this
				this.scroll.on('scroll',(pos)=>{
					me.$emit('scroll',pos)
				})
			}
		},
		enable() {
			this.scroll && this.scroll.enable()
		},
		disable() {
			this.scroll && this.scroll.disable()
		},
		scrollTo() {
			this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
		},
		scrollToElement() {
			this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
		}
	},
	watch:{
		data:function() {
			this._initScroll()
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>