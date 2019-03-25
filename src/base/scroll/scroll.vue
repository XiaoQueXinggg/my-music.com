<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script type="text/ecmajavascript">
import Bscroll from "better-scroll"
export default  {
	porps:{
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
		},
		enable() {
			this.scroll && this.scroll.enable()
		},
		disable() {
			this.scroll && this.scroll.disable()
		}
	},
	watch:{
		data() {
			setTimeout (()=>{
				this._initScroll()
			},20)
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>