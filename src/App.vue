<template>
  <div class="main_wraper">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from "./components/layouts/TheNavbar.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default {
  components: {
    "nav-bar":TheNavbar,
    "the-footer": TheFooter,
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

* {
  font-family: 'Roboto', sans-serif !important;
  box-sizing: border-box;
}

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