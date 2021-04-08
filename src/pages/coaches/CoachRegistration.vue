<template>
  <div class="registeration d-flex justify-content-center align-items-center"> 
    <b-container>
      <b-row class="justify-content-center my-5">
        <b-col cols="9">
          <base-card> 
            <h2 class="mb-4"> Register As A Coach Now! </h2>
            <coach-form @save-data="saveData"></coach-form>
          </base-card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
  components: {
    CoachForm,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/addCoach', data);
      this.$router.replace('/coaches');
    }
  }
}
</script>

<style lang="scss" scoped>
.registeration {
  min-height: calc( 100vh - 103px );

  .main_card {
    h2 {
      text-align: center;
      color: #ff7b54;
    }
  }
}
</style>