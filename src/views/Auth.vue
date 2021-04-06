<template>
  <section class="auth d-flex flex-column pb-5">
    <Login
      @isLoading="isLoading = true"
      @restart="$event.reset()"
      v-if="reset"
      :HasToRegister="HasToRegister"
    />
    <div v-if="!isLoading" class="col-12 ml-auto d-flex flex-column">
      <h6 class="text-muted text-center">
        {{
          !HasToRegister
            ? 'You are not yet a user ?'
            : 'Are you already a user ?'
        }}

        <span
          @click.self="onRegister()"
          class=" text-warning mr-3 d-inline-block"
        >
          {{ !HasToRegister ? ' Regiter Now' : ' login Now' }}
        </span>
      </h6>

      <h6 class="text-muted text-center mt-3">
        You forgot your password ?
        <router-link
          :to="{ name: 'Reset' }"
          class="text-danger mr-3 d-inline-block"
        >
          Reset Password Now
        </router-link>
      </h6>
    </div>
  </section>
</template>

<script>
import Login from '../components/auth/login.vue';
export default {
  components: { Login },
  data() {
    return {
      HasToRegister: false,
      reset: true,
      isLoading: false,
    };
  },
  methods: {
    onRegister() {
      this.reset = false;
      this.HasToRegister = !this.HasToRegister;
      this.reset = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  min-height: 100vh;
  span {
    cursor: pointer;
  }
}
</style>
