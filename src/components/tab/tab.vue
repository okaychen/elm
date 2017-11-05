<template>
	<div id="tabWraper">
    <div class="tabs">
      <ul>
        <li>
          <!-- 使用router-link指向定义的path -->
          <router-link :to="{ name:'Hello'  }">
            <div><img src="" alt=""></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'recommend' }">
            <div><img src="" alt=""></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name:'singer' }">
            <div><img src="" alt=""></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name:'rank' }">
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
    color: #dfffdf;
  }
  .tabs ul li{
    width: 25%;
    text-align: center;
  }
</style>