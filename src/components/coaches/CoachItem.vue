<template>
  <b-list-group>
    <base-card class="my-3">
      <b-list-group-item>
        <h3> {{ fullName }} </h3>
        <h5> $ {{ rate }} / Hour </h5>

        <div>
          <b-badge 
            pill 
            v-for="area in areas"
            :key="area"
            class="mx-2 my-3 p-2"
            :class="area"
          >
            {{ area }}
          </b-badge>
        </div>

        <div class="actions">
          <router-link 
            :to="coachContactLink" 
            class="btn btn-outline-info mx-2"
          > 
            Contact 
          </router-link>

          <router-link 
            :to="coachDetailsLink" 
            class="btn btn-outline-success mx-2"
          > 
            View Details 
          </router-link>
        </div>
      </b-list-group-item>
    </base-card>
  </b-list-group>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],

  computed: {
    fullName() {
      return `${this.firstName} ${this.firstName}`;
    },

    coachContactLink() {
      return `/coaches/${this.id}/contact`;
    },

    coachDetailsLink() {
      return `/coaches/${this.id}/`;
    }
  },
}
</script>

<style lang="scss" scoped>

.list-group {
  .main_card {
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.04);
    }
    .list-group-item {
      border: none;
      padding: 0;
      h3 {
        margin-inline-start: 15px;
        color: #ff7b54;
      }
      h5 {
        margin-inline-start: 15px;
        margin-bottom: 0;
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
    }
  }

}

</style>