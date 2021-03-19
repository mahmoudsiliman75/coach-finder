<template>
  <div>
    <main-slider></main-slider>
    <section>
      <h1> Filters </h1>
    </section>

    <div class="controles">
      <button> Refresh </button>
      <router-link to="/register"> Register As A Coach </router-link>
    </div>

    <section>
      <ul 
        v-if="hasCoaches"
      >
        <li
          v-for="coach in filteredCoaches"
          :key="coach.id"
        >
          {{coach.firstName}}
        </li>
      </ul>
      <h3 v-else> No Coaches Found </h3>
    </section>
  </div>
</template>

<script>
import TheSlider from "../../components/ui/TheSlider.vue";

export default {
  components: {
    "main-slider": TheSlider,
  },

  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  }
}
</script>