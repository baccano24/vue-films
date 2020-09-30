<template>
  <div>
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <ul>
      <router-link to="/films" tag="li" active-class="myActive"><i class="iconfont icon-bingjiling"></i>Films</router-link>
      <router-link to="/cinema" tag="li" active-class="myActive"><i class="iconfont icon-guoyin"></i>Cinema</router-link>
      <router-link to="/center" tag="li" active-class="myActive"><i class="iconfont icon-kafei"></i>Center</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabBar",
};
</script>

<style lang="scss" scoped >
ul{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: white;
  display: flex;
  z-index: 9999;
  margin-top: 50px;
  li{
    background: skyblue;
    flex: 1;
    line-height: 50px;
    text-align: center;
    .iconfont{
      font-size: 25px;
    }
  }
  .myActive{
    color:red
  }
}
</style>
