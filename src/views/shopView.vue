<template>
  <div class="shopView">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
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
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from "../components/header/header.vue";


const ERR_OK = 0;

export default {
  name:'shop-view',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    // vue resource
    this.$http.get('api/seller').then((res) => {
      res = res.body;
      if(res.errno === ERR_OK){
        this.seller = res.data;
        console.log(this.seller);
      }
    })

  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../common/stylus/mixin.styl";

.shopView
  .tab 
    display: flex
    height: 40px
    width: 100%
    line-height: 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      text-align: center
      flex: 1
      & > a
        display block
        text-decoration none
        color rgb(77,85,93)
        font-size 14px
        &.active
          color rgb(240,20,20)
</style>
