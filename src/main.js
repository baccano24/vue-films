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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
