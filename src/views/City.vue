<template>
  <div>
    <mt-index-list>
      <mt-index-section :index="data.index" v-for="data in dataList" :key="data.index">
        <div v-for="item in data.list" :key="item.cityId" @click="handleClick(item.cityId)">
          <mt-cell :title="item.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    axios({
      url: `https://m.maizuo.com/gateway?k=9551199`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1600074905458779816624129","bc":"330100"}',
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      this.dataList = this.handleCity(res.data.data.cities);
      // console.log(this.dataList)
    });
  },
  methods: {
    handleCity(dataList) {
      // console.log(dataList);
      var letterArr = [];
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      // console.log(letterArr);

      var newList = [];
      for (var j = 0; j < letterArr.length; j++) {
        var arr= dataList.filter(item=>item.pinyin.substring(0,1)===letterArr[j].toLowerCase())
        // console.log(arr)
        if(arr.length>0){
          newList.push({
            index:letterArr[j],
            list:arr
          })
        }
      }
      // console.log(newList)
      return newList
    },
    handleClick(id){
      // console.log(data)
      localStorage.setItem("cityId",id)
      this.$router.push(`/cinema`)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
