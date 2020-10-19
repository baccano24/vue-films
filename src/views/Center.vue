<template>
  <div>
    <v-touch v-on:swipeleft="SwipeLeft" v-on:swiperight="SwipeRight">
      <div style="background: red; height: 100px">center</div>
    </v-touch>

  </div>
</template>

<script>
export default {
  name: "Center",
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log("局部盘查");
    if (true) {
      next();
    } else {
      next("/login");
    }
  },
  methods: {
    SwipeLeft() {
      console.log("向左滑");
      this.setCookie('setCookie',"13124444444",365);
    },
    SwipeRight() {
      console.log("向右滑");
      this.delCookie('setCookie');
    },
  },
  computed: {

  },
};
</script>
