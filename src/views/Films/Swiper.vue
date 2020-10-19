<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import Vue from "vue";
import axios from "axios";

export default {
  mounted() {
    new Swiper(".swiper-container", {
      loopAdditionalSlides: 3,
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2000,
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // observer: true, //修改swiper自己或子元素时，自动初始化swiper
      // observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  margin-bottom: -4px;
  img {
    margin: 0 auto;
  }
  .swiper-slide {
    text-align: center;
  }
}
</style>
