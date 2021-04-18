<template>
  <div class="recived_requests">
    <b-container class="d-flex justify-content-center">
      <b-col cols="9">
        <base-card>
          <header>
            <h2 class="text-center mb-3"> Requests Recived </h2>
          </header>

          <b-col cols="8" v-if="hasRequests">
            <b-list-group>

              <b-list-group-item
                v-for="request in recivedRequests"
                :key="request.id"
                class="mb-3 border"
              >
                <a :href='"mailto:"+request.userEmail'> {{ request.userEmail }} </a>
                {{ request.message }}
              </b-list-group-item>

            </b-list-group>
          </b-col>

          <h3
            class="text-center" 
            v-else
          > 
            You Haven't Any Requests Yet 
          </h3>
        </base-card>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
export default {
  components: { BaseCard },
  computed: {
    recivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  }
}
</script>

<style lang="scss" scoped>
.recived_requests {
  min-height: calc( 100vh - (63px + 40px ) );
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 40px;

  .main_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
      h2 {
        color: #ff7b54;
      }
    }

    .list-group {
      .list-group-item {
        font-size: 18px;
        a {
          display: block;
          text-decoration: none;
          font-weight: 700;
          color: #e92630;
          margin-bottom: 8px;
        }
      }
    }

    h3 {
      color: #555;
    }
  }
}
</style>