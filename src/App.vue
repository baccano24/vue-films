<template>
  <div>
    <!-- <input ref="msg" type="text" />
    <button @click="handleAdd()">ADD</button>
    <ul>
      <li v-for="data in dataList" :key="data">{{data}}</li>
    </ul>
    <navBar>
      <button @click="isShow=!isShow">navBar-click</button>
    </navBar>
    <sideBar v-show="isShow" /> -->
    <!-- <ul>
      <li v-for="data in movieList" :key="data.id">{{ data.nm }}</li>
    </ul> -->
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <tabBar v-show="isTabbarShow"></tabBar>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import navBar from "./components/navBar";
// import sideBar from "./components/sideBar";
import tabBar from "./components/tabBar"
import {mapState} from 'vuex'
import axios from "axios";
export default {
  data() {
    return {
      dataList: [],
      // isShow: false,
      movieList: [],
    };
  },
  methods: {
    handleAdd() {
      this.dataList.push(this.$refs.msg.value);
    },
  },
  mounted() {
    axios.get("/ajax/movieOnInfoList?token=").then((res) => {
      this.movieList = res.data.movieList;
    });
  },
  components: {
    // navBar,
    // sideBar,
    tabBar
  },
  // computed: {
  //   isShow(){
  //     return this.$store.state.isTabbarShow

  //   }
  // },
  computed:{
    ...mapState(["isTabbarShow"])
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
  touch-action: none;
}
ul {
  list-style: none;
}
</style>
