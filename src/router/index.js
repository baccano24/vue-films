import Vue from 'vue'
import VueRouter from 'vue-router'

import Films from '@/views/Films'
import NowPlaying from '@/views/Films/NowPlaying'
import ComingSoon from '@/views/Films/ComingSoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Detail from '@/views/Detail'
import City from '@/views/City'
Vue.use(VueRouter)

const auth = {
  isLogin(){
    return false;
  }
}

const routes = [
  {
    path:'/films',
    name:'Films',
    component:Films,
    children:[
      {
        path:'nowPlaying',
        component:NowPlaying
      },
      {
        path:'comingSoon',
        component:ComingSoon
      },
      {
        path:'',
        redirect:'/films/nowPlaying'
      },
    ]
  },
  {
    path:'/detail/:myid',
    name:'thisDetail',
    component:Detail
  },
  {
    path:'/cinema',
    name:'Cinema',
    component:Cinema
  },
  {
    path:'/center',
    name:'Center',
    component:Center
  },
  {
    path:'/city',
    name:'City',
    component:City
  },
  {
    path:'*',
    redirect:'/films'
  }
]





const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   // ...
//   if(to.path==='/center'){
//     console.log("盘查")
//     if(auth.isLogin()){
//       next();
//     }else{
//       next('/login');
//     }
//   }else{
//     next();
//   }
// })

export default router
