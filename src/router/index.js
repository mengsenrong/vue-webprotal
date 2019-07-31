import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Dynamic from '@/components/dynamic/Dynamic'

Vue.use(Router)

export default new Router({
//  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'dynamic',
      component: Dynamic
    }

  ]
  
})