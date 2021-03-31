<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
global.jQuery = require('../node_modules/jquery/dist/jquery');
var $ = global.jQuery;
import Navbar from './components/navbar.vue';
export default {
  components: { Navbar, $ },
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
