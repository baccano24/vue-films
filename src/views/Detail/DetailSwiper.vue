<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination film-swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  props: ["perview", "myclassName"],
  mounted() {
    // console.log(this.myclassName)
    new Swiper("." + this.myclassName, {
      slidesPerView: this.perview,
      spaceBetween: this.myclassName === "actorsSwiper" ? 10 : 5,
      freeMode: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
