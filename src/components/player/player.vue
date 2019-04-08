<template>
	<div class="player">
		<div class="normal-player" v-show='fullScreen'>
			
		</div> 
		<div class="mini-player" v-show='!fullScreen'>
			
		</div>
	</div>
</template>

<script type="text/ecmajavascript">
import {mapGetters} from 'vuex'
export default {
	computed:{
		...mapGetters([
			'fullScreen',
			'playList'
		])
	}
}
</script>

<style lang="stylus" scoped>
	
</style>