<template>
  <div id="app">
<!--    keppalive保留状态,切换页面回去当时浏览的状态   -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
