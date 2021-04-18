<template>
  <div class="contact_coach_form">
    <div class="header_wraper">
      <h3 class="text-center"> Write Your Message To {{selectedCoach.firstName}} </h3>
    </div>
    <form @submit.prevent="submitForm">
      <b-row>
        <b-col cols="12" class="mb-4">
          <div class="form_controle" :class='!email.isValid ? "invalid" : ""'>
            <input type="email" placeholder="Your Email" id="email" v-model.trim="email.val">
            <icon name="at" size="18px" color="#777"></icon>
          </div>
        </b-col>


        <b-col cols="12" class="mb-4">
          <div class="form_controle" :class='!message.isValid ? "invalid" : ""'>
            <textarea type="text" placeholder="Message" rows="5" id="message" v-model.trim="message.val"></textarea>
            <icon name="bookmark" size="18px" color="#777"></icon>
          </div>
        </b-col>

        <b-col cols="12" class="mb-4 d-flex align-items-center justify-content-center">
          <button class="btn btn-info"> Send </button>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCoach: null,
      email: {
        val: '',
        isValid: true,
      },
      message: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    }
  },

  methods: {
    showAlert(type, message) {
      this.$swal({
        icon: type,
        title: message,
      });
    },

    formValidation() {
      if(this.email.val == '' || !this.email.val.includes('@')) {
        this.email.isValid = false;
        this.formIsValid = false;
        this.showAlert( 'error', 'Check The Data And Send Again' );
      }

      if(this.message.val == '') {
        this.message.isValid = false;
        this.formIsValid = false
        this.showAlert( 'error', 'Check The Data And Send Again' );
      }
    },

    submitForm() {
      this.formIsValid = true;
      this.email.isValid = true;
      this.message.isValid = true;

      this.formValidation();

      if (!this.formIsValid) {
        return;
      }

      if(this.formIsValid) {
        this.showAlert('success', 'Message Sent Successfuly');
        this.email.val = '';
        this.message.val = '';
      }

      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      });

      this.$router.replace('/coaches'); 
    },
  },

  created() {
    // console.log(this.$route.params.id)
    this.selectedCoach = this.$store.getters['coaches/coaches'].find( coach =>  coach.id == this.$route.params.id )
  },
}
</script>

<style lang="scss" scoped>
.header_wraper {
  h3 {
    color: #ff7b54;
  }
}

form {
  margin-top: 35px;
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
}
</style>