<template>
  <div class="recommend">
  	<scroll class="recommend-content" :data="postdiscList">
  		<div>
        <div v-if="recommends.length" class="slider-wrapper">
        <slider>
            <div v-for="item of recommends">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>   
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
            <li v-for="item of discList" class="item">
              <img :src="item.imgUrl" class="item-img">
              <div class="item-info">
                 <p class="item-desc" v-html="item.desc"></p>
                 <p class="item-count">播放量：{{item.count}}</p>
              </div>  
            </li>       
        </ul>
      </div>  
      </div>
  	</scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from "base/slider/slider"
import axios from "axios"
import Scroll from "@/base/scroll/scroll"
import {getRecommend} from "@/api/recommend.js"
import {ERR_OK} from "@/api/config.js"
export default {
	name:"Recommend",
  data () {
     return {
          recommends:[],
          discList:[]
      }
  },
  components:{
    Slider,
    Scroll
  },
  computed:{
    postdiscList () {
      if(this.discList){
        return this.discList
      }
    }
  },
	methods:{
  	_getRecommend() {
       getRecommend().then((res) => {
            if (res.code === ERR_OK) {
              this.recommends = res.data.slider
            }
      })
    },
    _getDiscList() {
          axios.get("api/discList.json").then((res)=>{
              res=res.data
              if(res.ret && res.data) {
                this.discList=res.data.discList
            }
          })
     }
	},
	created () {
	   this._getRecommend()
     this._getDiscList()
	}
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
 @import "~common/stylus/variable"
 @import "~common/stylus/mixin"
   .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
       .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          height:75px
          justify-content:center
          overflow:hidden
          .item-img
            padding:5px
            margin-left:15px
            width:60px
            height:60px           
          .item-info
            padding-left:10px
            position:relative
            flex:1
            display:flex
            flex-direction:column
            .item-desc
              line-height:30px
              font-size:$font-size-medium
              color:$color-text-l
              no-wrap()
              width:70%
           .item-count
            position:absolute
            bottom:20px
            color:$color-text-ll
            font-size:$font-size-medium
</style>