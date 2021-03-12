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