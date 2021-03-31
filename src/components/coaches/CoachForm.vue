<template>
  <form>
    <b-row>
      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle">
          <input type="text" placeholder="First Name" id="first_name">
          <icon name="pencil-alt" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle">
          <input type="text" placeholder="Last Name" id="last_name">
          <icon name="pencil-alt" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="mb-4">
        <div class="form_controle">
          <input type="number" min="1" placeholder="Hourly Rate" id="houyrly_rate">
          <icon name="dollar-sign" size="18px" color="#777"></icon>
        </div>
      </b-col>

      <b-col cols="12" class="mb-4">
        <div class="form_controle d-block">
          <h4 class="text-center"> Areas Of Experties </h4>

          <section class="d-flex">
            <div class="d-flex">
              <input type="checkbox" id="frontend" value="frontend">
              <label for="frontend"> Front End </label> 
            </div>

            <div class="d-flex">
              <input type="checkbox" id="backend" value="backend">
              <label for="backend"> Back End </label> 
            </div>

            <div class="d-flex">
              <input type="checkbox" id="carrer" value="carrer">
              <label for="carrer"> Carrer </label> 
            </div>
          </section>
        </div>
      </b-col>

      <b-col cols="12" class="mb-4">
        <div class="form_controle">
          <textarea type="text" placeholder="Descreptoin" rows="5" id="descreptoin"></textarea>
          <icon name="bookmark" size="18px" color="#777"></icon>
        </div>
      </b-col>
    </b-row>
  </form>
</template>

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