<template>
	<div id="tabWraper">
    <div class="tabs">
      <ul>
        <li>
          <!-- 使用router-link指向定义的path -->
          <router-link :to="{ name:'home'  }">
            <div><img src="" alt=""></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'sort' }">
            <div><img src="" alt=""></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name:'shop' }">
            <div><img src="" alt=""></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name:'me' }">
            <div><img src="" alt=""></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <!-- 用router-view渲染视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style>
	.tabs{
    width: 100%;
    position: fixed;
    bottom: 0px;
    color: #ffe79e;
  }
  .tabs ul{
    /* border-top: 1px solid #eee; */
  }
  .tabs ul li{
    width: 25%;
    text-align: center;
    padding: 10px 0px;
  }
</style>