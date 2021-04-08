<template>
  <form @submit.prevent="submitForm">
    <b-row>
      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle">
          <input type="text" placeholder="First Name" id="first_name" v-model.trim="firstName">
          <icon name="pencil-alt" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle">
          <input type="text" placeholder="Last Name" id="last_name" v-model.trim="lastName">
          <icon name="pencil-alt" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle">
          <input type="number" min="1" placeholder="Hourly Rate" id="houyrly_rate" v-model.trim="rate">
          <icon name="dollar-sign" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" class="mb-4">
        <div class="form_controle d-block">
          <h4 class="text-center mb-3"> Areas Of Experties </h4>

          <section class="d-flex justify-content-around">
            <div>
              <input type="checkbox" id="frontend" value="frontend" v-model.number="areas">
              <label for="frontend"> Front End </label> 
            </div>

            <div>
              <input type="checkbox" id="backend" value="backend" v-model.number="areas">
              <label for="backend"> Back End </label> 
            </div>

            <div>
              <input type="checkbox" id="carrer" value="carrer" v-model.number="areas">
              <label for="carrer"> Carrer </label> 
            </div>

          </section>
        </div>
      </b-col>

      <b-col cols="12" class="mb-4">
        <div class="form_controle">
          <textarea type="text" placeholder="Descreptoin" rows="5" id="descreptoin" v-model.trim="descripion"></textarea>
          <icon name="bookmark" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" class="mb-4 d-flex align-items-center justify-content-center">
        <button class="btn btn-success"> Register </button>
      </b-col>
    </b-row>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      rate: null,
      descripion: '',
      areas: [],
    }
  },

  methods: {
    showAlert() {
      this.$swal('Registered');
    },

    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        rate: this.rate,
        desc: this.descripion,
        areas: this.areas,
      }

      this.firstName = '';
      this.lastName = '';
      this.rate = null;
      this.descripion = '';
      this.areas = [];

      console.log(formData);

      this.showAlert()
    }
  }
}
</script>

<style lang="scss" scoped>
.form_controle {
  box-shadow: 0 0 10px #555;
  border-radius: 15px;
  padding: 8px;
  display: flex;
  align-items: center;

  input,
  textarea {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
}
</style>