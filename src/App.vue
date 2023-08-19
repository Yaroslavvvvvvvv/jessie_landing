<template>
  <div id="app">
    <header>
      <div class="container pt-4 pb-4">
        <b-navbar toggleable type="dark" variant="dark" class="my_navbar">
          <b-navbar-brand href="#" class="my_logo animated fadeInDown">Jessie.</b-navbar-brand>

          <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Portfolio</b-nav-item>
              <b-nav-item href="#">Blog</b-nav-item>
              <b-nav-item href="#">Client reviews</b-nav-item>
              <b-nav-item href="#">Contact me</b-nav-item>
              <button class="btn my-2 my-sm-0 btn-lg my_button" type="submit">Schedule a call</button>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <main>
      <section class="first_section">
        <div class="container pt-2 pb-4">
          <div class="row">
            <div class="col-lg-10 col-md-10 col-sm-12">
              <div class="position-relative">
                <img src="../src/assets/images/big_jessie.png" alt="" class="mw-100 h-auto">
                <div class="position-absolute">
                  <h2 class="second_header animated fadeInRightBig">Pro<br>photographer</h2>
                </div>
                <div class="position-absolute d-flex">
                  <hr class="color_line">
                  <p class="left_text animated fadeInRightBig">Let’s take your<br>photographs to next level</p>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-12">
              <p class="first_text animated animated rotateInDownLeft">Hello there, Nice to meet you. I am</p>
              <h1 class="first_header animated animated slideInRight">Jessie</h1>
              <p class="second_text ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do<br>
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
import 'vue2-animate/dist/vue2-animate.min.css';

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
