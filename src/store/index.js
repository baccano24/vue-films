import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabbarShow:true,
    comingList:[],
    loadding:false,
    cityName:'北京'
  },
  mutations: {//修改状态
    HideTabbar(state,data){
      state.isTabbarShow = data
    },
    ShowTabbar(state,data){
      state.isTabbarShow = data
    },
    comingListMutation(state,data){
      state.comingList = data
    },
    showloadding(state, load) {
      state.loadding = load
    },
    changeCity(state,city){
      state.cityName=city
    }

  },
  getters:{
    comingListGetter(state){
      return state.comingList.filter((item,index)=>index<3)
    },
    isloading:(state)=>{
      return state.loadding
    }

  },
  actions: {
    // 异步处理
    getComingListAction(store){
      axios({
        url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6218821",
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1600074905458779816624129","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        // this.dataList = res.data.data.films
        store.commit("comingListMutation",res.data.data.films)
      })
    },
    setloadding(context,load){
      context.commit("showloadding",load);
    }

  },
  modules: {
  }
})
