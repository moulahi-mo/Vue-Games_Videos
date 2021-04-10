<template>
  <section class="reset row mt-5 d-flex flex-column ">
    <h3 class="text-center lead mt-5 pb-5">Enter your valid email address</h3>

    <!-- ! error-->
    <Error v-if="isError" :message="isError" class="my-5" />

    <form ref="form" @submit.prevent="onSubmit()" class="d-flex flex-column">
      <div class="col-6 mx-auto my-3">
        <div class="form-group">
          <input
            required
            minlength="5"
            maxlength="50"
            pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)"
            v-model.trim="email"
            type="email"
            class="form-control"
            name="email"
            placeholder="Enter Your Password"
          />
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <button
        :disabled="!email"
        type="submit"
        class="btn btn-warning btn-sm mx-auto mt-3 d-block px-3"
      >
        Reset Password
      </button>
    </form>
  </section>
</template>

<script>
const axios = require('axios');
import Error from '../components/shared/error';
export default {
  data() {
    return {
      email: null,
      isError: null,
    };
  },
  mounted() {
    console.log(location.hostname);
  },
  methods: {
    onSubmit() {
      axios
        .post('https://play-area.herokuapp.com/api/v1/auth/reset', {
          email: this.email,
          //* client hostname +protocol +port
          host:
            location.protocol + '//' + location.hostname + ':' + location.port,
        })
        .then((res) => {
          console.log(res);
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
          this.isError = err;
        });

      console.log(this.email);
    },
  },
};
</script>

<style lang="scss" scoped>
.reset {
  min-height: 100vh;
}
</style>
