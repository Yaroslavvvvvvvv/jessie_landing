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
      <section>
        <div class="container">
          <div class="position-relative">
            <img src="../src/assets/images/big_jessie.png" alt="" class="mw-100">
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
      navbarColor: '#1F2022'
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import '../src/assets/styles/VStyles.scss';
</style>
