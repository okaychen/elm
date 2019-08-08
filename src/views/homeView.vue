<template>
  <div class="">

    <v-bottom></v-bottom>
    <router-view></router-view>
  </div>
</template>

<script>
  import bottom from "../components/bottom/bottom.vue";

  export default {
    name: "home-view",
    data() {
      return {}
    },
    components: {
      "v-bottom": bottom
    }
  }

</script>

<style lang="stylus">

</style>
