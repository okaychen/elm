<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-bottom: 1px solid #999;
  padding: 5px 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  color: #2c3e50;
}
</style>
