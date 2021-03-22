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
      <div
        v-if="hasCoaches"
      >
        <b-container>
          <b-row
            class="justify-content-center py-5"
          >
            <b-col 
              cols="12" 
              md="6"
              v-for="coach in filteredCoaches"
              :key="coach.id"
            >
              <coach-item
                :id="coach.id"
                :firstName="coach.firstName"
                :lastName="coach.lastName"
                :rate="coach.hourlyRate"
                :areas="coach.areas"
              ></coach-item>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <h3 v-else> No Coaches Found </h3>
    </section>
  </div>
</template>

<script>
import TheSlider from "../../components/ui/TheSlider.vue";
import CoachItem from "../../components/coaches/CoachItem.vue";

export default {
  components: {
    "main-slider": TheSlider,
    "coach-item": CoachItem,
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