import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import axios from "axios";
Vue.use(Mint);
Vue.use(VueAwesomeSwiper)
import VueResource from 'vue-resource';
Vue.config.productionTip = false
Vue.use(VueResource);
import { Indicator } from "mint-ui";
import VueTouch from "vue-touch";
Vue.use(VueTouch, {name: "v-touch"});

//定义一个请求拦截器
axios.interceptors.request.use(function(config){
  Indicator.open({
    text: "加载中...",
    spinnerType: "fading-circle",
  });
  // store.state.loadding=true; //在请求发出之前进行一些操作
  return config

})
//定义一个响应拦截器
axios.interceptors.response.use(function(config){
  // store.state.loadding=false;//在这里对返回的数据进行处理
  Indicator.close();
  return config

})

//设置cookie,放在main.js

Vue.prototype.setCookie = function(c_name,value,expiredays) {
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
};


//获取cookie

Vue.prototype.getCookie=function(c_name) {
  if (document.cookie.length>0)
  {
    var  c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1
     var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
};
// 删除cookie
Vue.prototype.delCookie=function(c_name){
  this.setCookie(c_name, "", -1)
 }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
