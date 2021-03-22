<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      fade
      controls
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      >
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.carousel {
  .carousel-inner {
    .carousel-item {
      height: calc(100vh - 63px);
    }
  }
}


</style>