// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from "fastclick"
import 'common/stylus/index.styl'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store/index'
import '@/common/iconfont/iconfont.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
