<template>
  <div class="container">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from './components/footer.vue';
global.jQuery = require('../node_modules/jquery/dist/jquery');
var $ = global.jQuery;
import Navbar from './components/navbar.vue';
export default {
  components: { Navbar, $, Footer },
  mounted() {
    const expiresIn = this.$store.state.expiresIn;
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : null;
    if (token) {
      let diff = new Date(expiresIn).getTime() - Date.now();
      console.log(diff);
      if (diff > 0) {
        this.$store.state.isAuth = true;
      } else {
        this.$store.state.isAuth = false;
        this.$store.state.token = token;
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        localStorage.removeItem('expiresIn');
      }
    }
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap');
#app {
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #081221;
  background: rgb(8, 18, 33);
  background: linear-gradient(
    180deg,
    rgba(8, 18, 33, 1) 51%,
    rgba(3, 8, 15, 1) 86%
  );

  color: #c1d1e8;
  font-family: 'Mulish', sans-serif;

  a,
  router-link {
    text-decoration: none !important;
  }
  a,
  button,
  input,
  li,
  .card,
  i {
    cursor: pointer;
    border: 0;
    outline: 0;
    border-radius: 0;
  }
}
</style>
