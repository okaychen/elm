<template>
  <div id="app">
    <MHeader></MHeader>
    <Tab></Tab>
  </div>
</template>

<script>
  import MHeader from '@/components/m-header/m-header'
  import Tab from '@/components/tab/tab'
  export default {
    data () {
      return {
        msg: 'hello world'
      }
    },
    components: {
      MHeader,
      Tab
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 5px 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  color: #2c3e50;
}
</style>
