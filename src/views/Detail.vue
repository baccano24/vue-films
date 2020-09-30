<template>
  <div>
    <img class="poster" :src="detailPic.poster" />

    <div v-if="detailCon">
      <h2>{{detailCon.name}}</h2>
    </div>
    <h3>演职人员</h3>
    <swiper perview="4" class="actorsSwiper" myclassName="actorsSwiper">
      <div class="swiper-slide" v-for="(data,index) in detailCon.actors" :key="index">
        <img :src="data.avatarAddress" />
        <p>{{data.name}}</p>
      </div>
    </swiper>
    <h3>剧照</h3>
    <swiper class="photoSwiper" myclassName="photoSwiper" style="margin-bottom:80px" perview="3">
      <div class="swiper-slide" v-for="(data,index) in detailCon.photos" :key="index">
        <img :src="data" />
      </div>
    </swiper>
  </div>
</template>

<script>
import axios from "axios";
import swiper from "./Detail/DetailSwiper";
export default {
  data() {
    return {
      detailPic: [],
      detailCon: [],
    };
  },
  beforeMount() {
    // this.$store.state.isTabbarShow = false
    this.$store.commit("HideTabbar",false)//mutation的名字
  },
  mounted() {
    // console.log("要id获取详情信息",this.$route.params.myid)
    this.detailPic = this.$route.params.myid;
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=4498003`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1600074905458779816624129","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      // console.log(res.data.data.film);
      this.detailPic = res.data.data.film;
      this.detailCon = res.data.data.film;
    });
  },
  beforeDestroy() {
    // this.$store.state.isTabbarShow = true;
    this.$store.commit("ShowTabbar",true)
  },
  components: {
    swiper,
  },
};
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 400px;
}
h3 {
  margin: 10px 0;
}
</style>
