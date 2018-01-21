<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{name:'goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'ratings'}">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'seller'}">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/header/header.vue";

export default {
  components: {
    "v-header": header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app 
  .tab 
    display: flex;
    height: 40px;
    width: 100%;
    line-height: 40px;

    .tab-item 
      text-align: center;
      flex: 1;
</style>
