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
    
    5，页面数据采用封装的jsonp函数从qq音乐接口获得，父组件取得数据后，传递给子组件
    
   ![首页效果查看](https://github.com/XiaoQueXinggg/my-music.com/blob/master/src/assets/home-page.gif)
    
歌手页面开发：

    1，歌手页面的跳转使用了vue-router路由功能，点击歌手页面使用jsonp自动获取数据
    
    2，获取数据之后，对获取的数据进行清理，保留需要的数据，使用v-for双层边里，对遍历的数据用scroll组件进行封装，使得页面可以滚动。
    
    3，对字母表的每个字母添加click事件，将点击的字母的index传递给父组件，父组件根据index操作scroll组件使其滚动相应距离，再根据
    动态类的绑定，使得对应字母表的字母高亮。
    
    4，对字母表的ul组件添加触摸滚动事件，根据滚动的距离计算出当前手指处于字母的位置，传值给父组件，使得滚动列表做出相应滚动，
    并且在滚动列表使用position:fixed动态显示当前字母区域，根据滚动的距离，使得固定区域的消失具有动效果(主要依据距离使用transform实现)
 ![首页效果查看]()
    
