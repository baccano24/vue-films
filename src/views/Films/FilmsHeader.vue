<template>
  <div>
    <ul>
      <router-link to="/films/nowPlaying" tag="li" active-class="active">正在热映</router-link>
      <router-link to="/films/comingSoon" tag="li" active-class="active">即将上映</router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
ul{
  width: 100%;
  background: #ff0;
  overflow: hidden;
  li{
    width: 50%;
    text-align: center;
    line-height: 50px;
    float: left;
  }
  .active{
    background: cornflowerblue;
  }
}
</style>
