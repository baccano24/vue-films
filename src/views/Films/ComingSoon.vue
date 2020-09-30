<template>
  <div>
    <ul>
      <li
        v-for="data in $store.state.comingList"
        :key="data.filmId"
        @click="handleClick(data.filmId, data.isPresale)"
      >
        <img :src="data.poster" />
        <p>电影：{{ data.name }}</p>
        <p>评分：{{ data.grade }}</p>
        <p>主演：{{ data.director }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { MessageBox } from "mint-ui";
Vue.filter("changePath", function (data) {
  return data.replace("w.h", "128.180");
});
export default {
  data() {
    return {};
  },
  methods: {
    handleClick(id, data) {
      if (!data) {
        MessageBox({
          title: "提示",
          message: "该影片还没有排期，看看其他电影吧",
          showCancelButton: true,
        }).then((res) => {
          // console.log(res)
          if (res === "confirm") {
            this.$router.push(`/film`)
          }
        });
      }
      this.$router.push({ name: "thisDetail", params: { myid: id } });
    },
  },
  mounted() {
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch("getComingListAction");
    } else {
      // 使用缓存数据
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  margin-bottom: 50px;
  li {
    overflow: hidden;
    padding: 10px;
    background: thistle;
    margin-bottom: 10px;
    img {
      float: left;
      margin-right: 10px;
      width: 30%;
    }
    p {
      line-height: 25px;
    }
  }
}
</style>
