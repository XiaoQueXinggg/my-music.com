# vue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

音乐播放器首页开发：

    1，图片轮播使用better-scroll组件封装了一个swiper轮播组件，轮播功能有自动轮播，手动轮播，循环轮播
    
    2，首页的导航栏用vue-router组件实现了路由跳转功能，点击即可跳转其他模块
    
    3，对歌曲类型组件使用better-scroll组件实现了滚动功能
    
    3，首页的开发采用模块化开发，各个功能，组件独立为一个模块，使得开发过程更清晰，代码易读，对重复使用的代码块独立为一个模块
    ，减少代码量，方便修改。
    
    4，对播放器频繁使用的字体，颜色，背景颜色独立为一个代码块，方便后期使用，以及整体css样式的修改。
    
    5，页面数据采用jsonp的方式从qq音乐接口获得，父组件取得数据后，传递给子组件
    
   ![首页效果查看](https://github.com/XiaoQueXinggg/my-music.com/blob/master/src/assets/home-page.gif)
    
    
