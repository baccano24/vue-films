<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <li
        v-for="data in dataList"
        :key="data.filmId"
        @click="handleChange(data.filmId)"
      >
        <img :src="data.poster" />
        <p>电影：{{ data.name }}</p>
        <p>评分：{{ data.grade }}</p>
        <p>主演：{{ data.director }}</p>
      </li>
    </ul>
    <div class="loading" v-show="isShow">正在加载中...</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataList: [],
      current: 1,
      isShow:true,
      total:0
    };
  },
  mounted() {
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4478233",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1600074905458779816624129","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      this.dataList = res.data.data.films;
      this.total=res.data.data.total
    });
  },
  methods: {
    handleChange(id) {
      // console.log(id);
      // 编程式导航,跳转
      // this.$router.push(`/detail/${id}`)
      this.$router.push({ name: "thisDetail", params: { myid: id } });
    },
    loadMore() {
      this.loading = true;
      this.current++;
      if(this.dataList.length===this.total){
        this.isShow = false;
        return
      }
      axios({
        url:
          `https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.current}&pageSize=10&type=1&k=4478233`,
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"1600074905458779816624129","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        this.dataList = [...this.dataList,...res.data.data.films]
        this.loading = false;
      });
    },
    // https://m.maizuo.com/gateway?cityId=330100&pageNum=2&pageSize=10&type=1&k=633805
    // https://m.maizuo.com/gateway?cityId=330100&pageNum=3&pageSize=10&type=1&k=9332181
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  overflow: hidden;
  li {
    background: #ccc;
    margin-bottom: 5px;
    overflow: hidden;
    padding: 10px;
    img {
      width: 30%;
      float: left;
      margin-right: 10px;
    }
  }
}
.loading{
  margin-bottom: 50px;
}
</style>
