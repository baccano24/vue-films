<template>
  <div>
    <swiper :key="picList.length" ref="mySwiper">
      <div class="swiper-slide" v-for="data in picList" :key="data.id">
        <img :src="data.url" />
      </div>
    </swiper>
    <FilmsHeader :class="isFixed ? 'fixed' : ''" />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import swiper from "@/views/Films/Swiper";
import FilmsHeader from "@/views/Films/FilmsHeader";

export default {
  name: "Films",
  data() {
    return {
      picList: [],
      isFixed: false,
    };
  },
  mounted() {

    axios.get("/mock/5c36b5d2be0a1c39bfd57589/img/page=1").then((res) => {

      this.picList = res.data.data;
    });
    window.onscroll = this.handleScroll;
  },
  beforeDestroy() {
    window.onscroll = this.null;
  },
  methods: {
    handleScroll() {
      // console.log(document.documentElement.scrollTop,this.$refs.mySwiper.$el.offsetHeight)
      if (
        document.documentElement.scrollTop >=
        this.$refs.mySwiper.$el.offsetHeight
      ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
  components: {
    swiper,
    FilmsHeader,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 200px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
