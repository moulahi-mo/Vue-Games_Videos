<template>
  <div class="container">
    <section class="row login pb-5">
      <h2 class="col-12  mb-5 text-center display-4 lead my-5">
        {{ HasToRegister ? 'Register' : 'Login' }}
      </h2>

      <section
        class="col-12 mx-auto d-flex flex-column align-items-center justify-content-center "
      >
        <!-- ! loading-->
        <Loader v-if="isLoading && !isError" class="mx-auto d-block" />
        <!-- ! error-->
        <Error v-if="isError" :message="isError" class="my-5" />
      </section>

      <div v-if="!isLoading" class="col-12 col-lg-8 card mx-auto  p-3 mt-5">
        <form class="form" ref="form" @submit.prevent="onSubmit()">
          <div class="container">
            <div class="row">
              <!-- ! name -->
              <div v-if="HasToRegister" class="col-12 ">
                <div class="form-group">
                  <label for="">Name <span>*</span></label>
                  <input
                    required
                    minlength="3"
                    maxlength="100"
                    v-model="user.name"
                    type="text"
                    class="form-control"
                    name="name"
                    id=""
                    placeholder=""
                  />
                  <small class="form-text text-danger text-muted"></small>
                  <small class="form-text text-muted"></small>
                </div>
              </div>
              <!-- ! email -->
              <div class="col-12 ">
                <div class="form-group">
                  <label for=""
                    >Email Address <span v-if="HasToRegister">*</span></label
                  >
                  <input
                    required
                    minlength="5"
                    maxlength="50"
                    pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)"
                    v-model.trim="user.email"
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder=""
                  />
                  <small class="form-text text-muted"></small>
                </div>
              </div>
              <!-- ! password -->
              <div class="col-12">
                <div class="form-group">
                  <label for=""
                    >Password <span v-if="HasToRegister">*</span></label
                  >
                  <input
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}"
                    type="password"
                    required
                    minlength="8"
                    maxlength="100"
                    v-model="user.password"
                    class="form-control"
                    name="password"
                    placeholder="Your Password"
                  />
                  <small class="form-text text-muted"></small>
                </div>
              </div>
              <!-- ! confirm password -->
              <div v-if="HasToRegister" class="col-12">
                <div class="form-group">
                  <label for="">Confirm Password <span>*</span></label>
                  <input
                    :class="isMuchedPass ? 'is-valid' : 'is-invalid'"
                    @keyup="onConfirmPassword($event)"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}"
                    type="password"
                    required
                    minlength="8"
                    maxlength="100"
                    v-model="user.confirmPassword"
                    class="form-control"
                    name="confirmPassword"
                    placeholder="Confirm your Password "
                  />
                  <small class="form-text text-muted"></small>
                </div>
              </div>
              <!-- ! Login BUtton -->
              <button
                v-if="!HasToRegister"
                :disabled="!user.email || !user.password"
                type="submit"
                class="btn btn-primary btn-sm mx-auto mt-3 d-block px-3"
              >
                Login
              </button>
              <!-- ! Register BUtton -->
              <button
                v-if="HasToRegister"
                :disabled="
                  !user.name ||
                    !user.email ||
                    !user.password ||
                    !user.confirmPassword ||
                    !isConfirmed
                "
                type="submit"
                class="btn btn-primary btn-sm mx-auto mt-3 d-block px-3"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
const axios = require('axios');
import Error from '../shared/error.vue';
import Loader from '../shared/loader';
export default {
  props: ['HasToRegister'],
  components: { Error, Loader },
  data() {
    return {
      url: 'https://play-area.herokuapp.com/api/v1/auth/',
      user: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
        role: 'user',
      },
      isMuchedPass: false,
      isConfirmed: false,
      isLoading: false,
      isError: null,
    };
  },
  mounted() {
    this.$emit('restart', this.$refs.form);
    this.$refs.form.reset();
    console.log(this.$store.state.isAuth);
  },
  methods: {
    //! on login /  register
    onSubmit() {
      this.isLoading = true;
      this.$emit('isLoading');
      this.isError = null;
      //* on Register submit
      if (this.HasToRegister) {
        axios
          .post(this.url + 'signup', {
            ...this.user,
            confirmPassword: undefined,
          })
          .then((res) => {
            res.error ? (this.isError = res.error) : '';
            this.isLoading = false;
            console.log(res);
            //* get the token
            const { token, user, expiresIn } = res.data;
            this.authHundler(token, expiresIn, user._id);
            this.$router.push({ name: 'Home' });
            this.$store.state.isAuth = true;
          })
          .catch((err) => {
            this.isLoading = false;
            this.isError = err.message ? err.message : err.error;

            console.log(err);
          });
      }
      //* on Login submit
      else if (!this.HasToRegister) {
        axios
          .post(this.url + 'login', {
            email: this.user.email,
            password: this.user.password,
          })
          .then((res) => {
            this.isLoading = false;
            console.log(res);
            //* get the token
            const { token, user, expiresIn } = res.data;
            this.authHundler(token, expiresIn, user._id);
            this.$router.push({ name: 'Home' });
            this.$store.state.isAuth = true;
            console.log(this.$store.state.isAuth);
          })
          .catch((err) => {
            this.isLoading = false;
            this.isError = err.message ? err.message : err;

            console.log(err);
          });
      }
    },
    //! on confirming password
    onConfirmPassword(event) {
      const cPassword = event.target.value.trim();
      if (this.user.password !== cPassword) {
        this.isConfirmed = false;
        this.isMuchedPass = false;
        if (this.user.password.includes(cPassword)) {
          this.isMuchedPass = true;
        } else {
          this.isMuchedPass = false;
        }
      } else if (this.user.password === cPassword) {
        this.isConfirmed = true;
        this.isMuchedPass = true;
      }
    },
    //! hundle token auth
    authHundler(token, expires, uid) {
      if (token) {
        //* set token payload on the local storage
        this.$store.state.token = token;
        localStorage.setItem('token', token);
        expires.includes('30')
          ? localStorage.setItem(
              'expiresIn',
              new Date(Date.now() + 60 * 60 * 1000 * 24 * 30)
            )
          : '';
        localStorage.setItem('uid', uid);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 20px;
  .card {
    background: #0e1a2b;

    .form {
      label span {
        color: #5692e8;
      }
      .form-control {
        background-color: #182c47;
        border: 0;
        outline: 0;
        color: #c1d1e8;
      }
      .btn {
        background-color: #5692e8;
      }
      textarea {
        resize: none;
      }
    }
  }
}
</style>
