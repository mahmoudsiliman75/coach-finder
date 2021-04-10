<template>
  <div class="coach_details">
    <b-container>
      <b-row class="justify-content-center">

        <b-col 
          cols="12"
          md="8"
          class="mb-4"
        >
          <section>
            <base-card>
              <h2> {{ fullName }} </h2>
              <h4> ${{ rate }} / Hour </h4>
            </base-card>
          </section>
        </b-col>

        <b-col 
          cols="12"
          md="8"
          class="mb-4"
        >
          <section>
            <base-card>
              <header class="mb-4" v-if="!this.$route.path.includes('/contact')">
                <h2> Interested? Reach Out Now! </h2>
                <router-link :to="contactLink" class="btn btn-outline-info"> Contact </router-link>
              </header>

              <router-view></router-view>
            </base-card>
          </section>
        </b-col>

        <b-col 
          cols="12"
          md="8"
          class="mb-4"
        >
          <section>
            <base-card>
              <b-badge 
                pill 
                v-for="area in selectedCoach.areas"
                :key="area"
                class="mx-2 my-3 p-2"
                :class="area"
              >
                {{ area }}
              </b-badge>

              <p> {{ description }} </p>
            </base-card>
          </section>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';

export default {
  components: { BaseCard },

  props: ['id'],

  data() {
    return {
      selectedCoach: null,
    }
  },

  computed: {
    fullName() {
      return this.selectedCoach.firstName +' '+ this.selectedCoach.lastName;
    },

    rate() {
      return this.selectedCoach.hourlyRate;
    },

    contactLink() {
      return `/coaches/${this.selectedCoach.id}/contact`
    },

    description() {
      return this.selectedCoach.description
    },
  },

  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find( coach =>  coach.id == this.id )
  }
}
</script>

<style lang="scss" scoped>
  .coach_details {
    min-height: calc(100vh - 103px);
    padding: 35px;
    h2 {
      color: #ff7b54;
    }

    h4 {
      color: #777;
    }

    .badge {
      &.frontend {
        background-color: #fdb827;
        color: #fff;
      }
      &.backend {
        background-color: #34626c;
        color: #fff;
      }
      &.career {
        background-color: #6155a6;
        color: #fff;
      }
    }

    p {
      font-size: 18px;
      color: #777;
      margin-inline-start: 15px;
    }
  }
</style>
