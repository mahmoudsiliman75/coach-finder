<template>
  <form @submit.prevent="submitForm">
    <b-row>
      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle" :class= ' !firstName.isValid ?  "invalid" : "" '>
          <input type="text" placeholder="First Name" id="first_name" v-model.trim="firstName.val">
          <icon name="pencil-alt" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle" :class= '!lastName.isValid ?  "invalid" : ""'>
          <input type="text" placeholder="Last Name" id="last_name" v-model.trim="lastName.val">
          <icon name="pencil-alt" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle" :class= '!rate.isValid ?  "invalid" : ""'>
          <input type="number" min="1" placeholder="Hourly Rate" id="houyrly_rate" v-model.trim="rate.val">
          <icon name="dollar-sign" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" class="mb-4">
        <div class="form_controle d-block" :class= '!areas.isValid ?  "invalid" : ""'>
          <h4 class="text-center mb-3"> Areas Of Experties </h4>

          <section class="d-flex justify-content-around">
            <div>
              <input type="checkbox" id="frontend" value="frontend" v-model.number="areas.val">
              <label for="frontend"> Front End </label> 
            </div>

            <div>
              <input type="checkbox" id="backend" value="backend" v-model.number="areas.val">
              <label for="backend"> Back End </label> 
            </div>

            <div>
              <input type="checkbox" id="carrer" value="carrer" v-model.number="areas.val">
              <label for="carrer"> Carrer </label> 
            </div>

          </section>
        </div>
      </b-col>

      <b-col cols="12" class="mb-4">
        <div class="form_controle" :class= '!descripion.isValid ?  "invalid" : ""'>
          <textarea type="text" placeholder="Descreptoin" rows="5" id="descreptoin" v-model.trim="descripion.val"></textarea>
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
  emits: ['save-data'],

  data() {
    return {
      formIsValid: true,
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      descripion: {
        val: '',
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
    }
  },

  methods: {
    showAlert(type, message) {
      this.$swal({
        icon: type,
        title: message,
      });
    },

    validateForm() {
      this.formIsValid = true;

      if(this.firstName.val == '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
        this.showAlert('error', "First Name Can't Be Empty");
      }

      if(this.lastName.val == '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
        this.showAlert('error', "Last Name Can't Be Empty");
      }

      if(this.descripion.val == '') {
        this.descripion.isValid = false;
        this.formIsValid = false;
        this.showAlert('error', "Description Can't Be Empty");
      }

      if(!this.rate.val) {
        this.rate.isValid = false;
        this.formIsValid = false;
        this.showAlert('error', "Hourly Rate Can't Be Empty");
      }

      if(this.areas.val.length == 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
        this.showAlert('error', "At Least One Area Of Experties Must Be Selected");
      }
    },

    submitForm() {
      this.validateForm();

      if(!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        rate: this.rate.val,
        desc: this.descripion.val,
        areas: this.areas.val,
      }

      this.firstName.val = '';
      this.lastName.val = '';
      this.rate.val = null;
      this.descripion.val = '';
      this.areas.val = [];

      this.$emit('save-data', formData);

      this.showAlert('success', 'Registered Successfuly');
    },
  }
}
</script>

<style lang="scss" scoped>
h4 {
  color: #ff7b54;
}

.form_controle {
  box-shadow: 0 0 10px #555;
  border-radius: 15px;
  padding: 8px;
  display: flex;
  align-items: center;

  &.invalid {
    color: #f00;
    border: 1px solid red;
  }

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