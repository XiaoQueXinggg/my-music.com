<template>
  <div id="app">
 	<m-header></m-header>
 	<tab></tab>
 	<keep-alive>
 		<router-view>
 		</router-view>
 	</keep-alive>
 	<player>
 	</player>
  </div>
</template>

<script>
import Player from './components/player/player'
import MHeader from "./components/m-header/m-header"
import Tab from "./components/tab/tab"
export default {
  name: 'App',
  components:{
  	MHeader,
  	Tab,
  	Player
  }
}
</script>

<style lang="stylus" scoped>
 @import "~common/stylus/variable"
/* 	#app
 		color:$color-theme*/
</style>
