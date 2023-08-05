<template>
  <div id="app">
    <header>
      <div class="container pt-4 pb-4">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class=" my_logo" href="#">Jessie.</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-auto">
              <li class="nav-item pr-3">
                <a class="nav-link my_item" href="#">Portfolio</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item pr-3">
                <a class="nav-link" href="#">Client reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact me</a>
              </li>
            </ul>
            <button class="btn my-2 my-sm-0 my_button" type="submit">Schedule a call</button>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <section class="first_section">
        <div class="container pt-4 pb-4">
          <div class="row">
            <div class="col-lg-10 col-md-10 col-sm-12">
              <div class="position-relative">
                <img src="../src/assets/images/big_jessie.png" alt="" class="mw-100 h-auto">
                <div class="position-absolute">
                  <h2 class="second_header">Pro<br>photographer</h2>
                </div>
                <div class="position-absolute d-flex">
                  <hr class="color_line">
                  <p class="left_text">Let’s take your<br>photographs to next level</p>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-12">
              <p class="first_text">Hello there, Nice to meet you. I am</p>
              <h1 class="first_header">Jessie</h1>
              <p class="second_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do<br>
                amet sint. Velit officia consequat duis enim velit mollit.<br>
                Exercitation veniam consequat sunt nostrud amet. Amet minim<br>
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
              <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background=""
                  img-width="350"
                  img-height="233"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                  class="small_carousel"
              >
                <b-carousel-slide>
                  <template #img>
                    <img
                        class="d-block img-fluid mw-100 h-100 ml-auto mr-auto"
                        width="350"
                        height="233"
                        src="../src/assets/images/portfolio/my_first.jpg"
                        alt="image slot"
                    >
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                        class="d-block img-fluid mw-100 h-100 ml-auto mr-auto"
                        width="350"
                        height="233"
                        src="../src/assets/images/portfolio/my_second.jpg"
                        alt="image slot"
                    >
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                        class="d-block img-fluid mw-100 h-100 ml-auto mr-auto"
                        width="350"
                        height="233"
                        src="../src/assets/images/portfolio/my_third.jpg"
                        alt="image slot"
                    >
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template #img>
                    <img
                        class="d-block img-fluid mw-100 h-100 ml-auto mr-auto"
                        width="350"
                        height="233"
                        src="../src/assets/images/portfolio/my_fourth.jpg"
                        alt="image slot"
                    >
                  </template>
                </b-carousel-slide>

                <b-carousel-slide>
                  <template #img>
                    <img
                        class="d-block img-fluid mw-100 h-100 ml-auto mr-auto"
                        width="350"
                        height="233"
                        src="../src/assets/images/portfolio/my_fifth.jpg"
                        alt="image slot"
                    >
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>




export default {
  name: 'App',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
@import '../src/assets/styles/VStyles.scss';
</style>
