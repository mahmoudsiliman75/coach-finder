<template>
  <div class="main_wraper">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "./components/layouts/TheNavbar.vue";

export default {
  components: {
    "nav-bar":TheNavbar,
  },
}
</script>

<style lang="scss">
body {
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7b54;
  }
}
</style>