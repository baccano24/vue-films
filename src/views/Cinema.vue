<template>
  <div class="cinemaBox" :style="myStyle" ref="wrapper">
    <ul>
      <li v-for="data in cinemaList" :key="data.cinemaId">
        {{data.name}}
        <p style="font-size:12px">{{data.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from 'better-scroll'
export default {
  name: "Cinema",
  data() {
    return {
      cinemaList: [],
      myStyle:{
        height:'0px'
      }
    };
  },
  mounted() {
    // 屏幕高度
    var id = localStorage.getItem("cityId")
    this.myStyle.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=3673148`,
      headers: {
        "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1600074905458779816624129","bc":"330100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      this.cinemaList = res.data.data.cinemas;

      this.$nextTick(()=>{
        var bs = new BetterScroll(this.$refs.wrapper,{
          click:true,
          probeType:2,//更好的监听滚动事件
          pullUpLoad:true,//允许上拉
          scrollbar:{
            fade:true,
            interactive:false
          }
        })
      })
    });


  },

};
</script>
<style lang="scss" scoped>
.cinemaBox{
  overflow: hidden;
  position: relative;
  ul {
  width: 100%;
  li {
    background: pink;
    margin-bottom: 20px;
    height: 50px;
  }
}
}

</style>
