<template>
  <div class="all_coaches">
    <!-- START:: SLIDER -->
    <main-slider></main-slider>
    <!-- END:: SLIDER -->

    <!-- START:: COACHES LIST COMPONENT CONTENT -->
    <b-container class="mt-3">
      <base-card class="my-4">
        <h2 class="text-info text-center"> Filters </h2>
      </base-card>

      <base-card class="my-4">
        <div class="controles d-flex justify-content-center align-items-center">
          <button class="btn btn-dark mx-2"> Refresh </button>

          <router-link 
            to="/register" 
            class="btn btn-outline-primary mx-2"
          > 
            Register As A Coach 
          </router-link>
        </div>
      </base-card>

      <section>
        <div
          v-if="hasCoaches"
        >
          <b-row
            class="justify-content-center my-3"
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
        </div>
        
        <base-card v-else>
          <h3 class="no_coaches mb-0 text-center"> No Coaches Found </h3>
        </base-card>
      </section>
    </b-container>
    <!-- END:: COACHES LIST COMPONENT CONTENT -->
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

<style lang="scss" scoped>
  .no_coaches {
    color: #ff7b54;
  }
</style>