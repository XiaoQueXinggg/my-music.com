<template>
  <div class="m-header">
         <span class='icon'></span>
        <span class="text">Chicken Music</span> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'MHeader'
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
 @import "~common/stylus/variable"
 @import "~common/stylus/mixin"
 .m-header
 	position:relative
 	height:44px
 	text-align:center
 	color:$color-theme
 	font-size:0
	.icon
    display: inline-block
    margin-top: 6px
    width: 30px
    height: 32px
    margin-right: 9px
    bg-image('logo')
    background-size: 30px 32px
	 .text
      line-height: 44px
      font-size: $font-size-large
      vertical-align:top
</style>
