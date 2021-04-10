<template>
  <ul class="nav d-flex justify-content-between flex-column flex-md-row">
    <div class="d-flex flex-column flex-sm-row">
      <li class="mt-4">
        <router-link :to="{ name: 'Home' }"> <h3>video games</h3> </router-link>
      </li>
      <li class="mt-4">
        <router-link :to="{ name: 'Contact' }"> <h3>contact</h3> </router-link>
      </li>
    </div>
    <!-- !  Login-->
    <router-link v-if="!auth" :to="{ name: 'Auth' }" class="mt-3 ml-5">
      <button
        type="button"
        class="login btn d-block mt-3 text-warning font-weight-bold"
      >
        <i class="material-icons small">person</i>
        Login
      </button>
    </router-link>
    <!-- !  Logout-->
    <div v-if="auth" class="mt-3 ml-5">
      <button
        @click="onLogout()"
        type="button"
        class="login btn d-block mt-3 text-light font-weight-bold"
      >
        <i class="material-icons small">logout</i>
        Logout
      </button>
    </div>
  </ul>
</template>

<script>
const axios = require('axios');
export default {
  methods: {
    async onLogout() {
      try {
        await axios({
          method: 'post',
          data: {},
          url: 'https://play-area.herokuapp.com/api/v1/auth/logout',
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem('token')
                ? localStorage.getItem('token')
                : null
            }`,
          },
        });
        // ! need to register the token in local storage to send it in headers for loggin out
        this.$store.state.isAuth = false;
        this.$store.state.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        localStorage.removeItem('expiresIn');
        this.$router.push({ name: 'Auth' });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    auth() {
      return this.$store.state.isAuth;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding-top: 50px;
  display: flex;

  li h3 {
    text-transform: uppercase;
    font-weight: 1.5rem;
    margin-left: 50px;

    color: #fff;
  }
  router-link {
    text-decoration: none !important;
  }
  .btn {
    color: #c1d1e8;
    background-color: #5692e8;
    padding: 6px 20px !important;
  }
  .login {
    color: goldenrod;

    box-shadow: 0 0 65px rgb(255, 230, 0), 0 0 0 1px hsla(0, 0%, 100%, 0.1),
      0 2px 2px rgba(0, 0, 0, 0.0274351), 0 4px 4px rgba(0, 0, 0, 0.0400741),
      0 10px 8px rgba(0, 0, 0, 0.0499982), 0 15px 15px rgba(0, 0, 0, 0.0596004),
      0 30px 30px rgba(0, 0, 0, 0.0709366), 0 70px 65px rgba(0, 0, 0, 0.09);
  }
}
</style>
