<template>
  <section class="new row mt-5 d-flex flex-column ">
    <h3 class="text-center lead mt-5 pb-5">Enter your New Password</h3>
    <!-- ! loading-->
    <Loader v-if="isLoading && !isError" class="mx-auto d-block" />
    <!-- ! error-->
    <Error v-if="isError" :message="isError" class="my-5" />

    <form
      v-if="!isLoading"
      ref="form"
      @submit.prevent="onSubmit()"
      class="d-flex flex-column"
    >
      <!--password -->
      <div class="col-6 mx-auto my-3">
        <div class="form-group">
          <input
            required
            minlength="8"
            maxlength="100"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}"
            v-model.trim="password"
            type="password"
            class="form-control"
            name="password"
            placeholder="Enter Your Password"
          />
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <!--confirm password -->
      <div class="col-6 mx-auto my-3">
        <div class="form-group">
          <input
            :class="isMuchedPass ? 'is-valid' : 'is-invalid'"
            @keyup="onConfirmPassword($event)"
            required
            minlength="8"
            maxlength="100"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}"
            v-model.trim="cPassword"
            type="password"
            class="form-control"
            name="cPassword"
            placeholder="Confirm Your New Password"
          />
          <small class="form-text text-muted"></small>
        </div>
      </div>
      <button
        :disabled="!password || !cPassword || !isConfirmed"
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
import Error from '../shared/error';
import Loader from '../shared/loader.vue';
export default {
  components: { Error, Loader },
  data() {
    return {
      password: null,
      cPassword: null,
      isError: null,
      token: null,
      isLoading: false,
      isMuchedPass: false,
      isConfirmed: false,
    };
  },
  mounted() {
    this.token = this.$route.params.token;
  },
  methods: {
    onSubmit() {
      console.log(this.password);
      this.isError = null;
      this.isLoading = true;
      axios
        .post(
          'https://play-area.herokuapp.com/api/v1/auth/reset/' + this.token,
          { password: this.password }
        )
        .then((response) => {
          this.isLoading = true;
          console.log(response);
          this.$router.push('/Auth');
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.isError = err.message ? err.message : err;
        });
    },
    //! on confirming password
    onConfirmPassword(event) {
      const Password = event.target.value.trim();
      if (this.password !== Password) {
        this.isConfirmed = false;
        this.isMuchedPass = false;
        if (this.password.includes(Password)) {
          this.isMuchedPass = true;
        } else {
          this.isMuchedPass = false;
        }
      } else if (this.password === Password) {
        this.isConfirmed = true;
        this.isMuchedPass = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.new {
  min-height: 100vh;
}
</style>
