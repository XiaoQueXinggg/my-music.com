import Vue from 'vue'
import Router from 'vue-router'
import Recommend from "@/components/recommend/recommend"
import Rank from "@/components/rank/rank"
import Singer from "@/components/singer/singer"
import Search from "@/components/search/search"
import Tab from "@/components/tab/tab"
import SingerDetail from "@/components/singer-detail/SingerDetail"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/recommend"
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },{
      path: '/rank',
      name: 'Rank',
      component: Rank
    },{
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children:[
        {
          path:":id",
          component:SingerDetail
        }
      ]
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/tab',
      name: 'Tab',
      component:Tab
    }
  ]
})
