<template>
  <div class="logo_wrap">
    <img class="logo" src="../../assets/image/q.jpg" alt="">
    <span>Gemini Music</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo_wrap span{
  padding: 0 10px;
  font-size: 16px;
  color: #ffe79e;
}
.logo{
  width: 30px;
  height: 30px;
  border-radius: 100%;
  vertical-align: -8px;
}

</style>
