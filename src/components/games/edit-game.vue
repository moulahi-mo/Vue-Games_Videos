<template>
  <h3 class="text-center my-5">
    Edit The Video Game
  </h3>

  <section
    class="mt-5 d-flex flex-column justify-content-center align-items-center"
  >
    <!-- ! loading-->
    <Loader v-if="isLoading && !isError" class="mx-auto d-block " />
    <!-- ! error-->
    <Error v-if="isError" :message="isError" />
    <!-- ! no data-->
  </section>
  <section class="card p-3">
    <form ref="form" @submit.prevent="onSubmit()">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Edit Name ..."
          required
          minlength="3"
          maxlength="50"
          v-model.trim="game.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label>Rating (1/100)</label>
        <input
          type="number"
          class="form-control"
          placeholder="Edit Rating ..."
          required
          min="1"
          max="100"
          v-model.number="game.rating"
          name="rating"
        />
      </div>

      <div class="form-group">
        <label>Summary</label>
        <textarea
          class="form-control"
          v-model.trim="game.summary"
          required
          rows="10"
          minlength="10"
          maxlength="1000"
          name="summary"
        ></textarea>
      </div>

      <button
        :disabled="!game.name || !game.summary || !game.rating"
        type="submit"
        class="btn btn-outline-warning text-light d-block mx-auto"
      >
        Edit
      </button>
    </form>
  </section>
</template>

<script>
import Error from '../shared/error.vue';
import Loader from '../shared/loader.vue';
const axios = require('axios');
export default {
  props: ['game'],
  components: { Loader, Error },
  data() {
    return {
      isLoading: false,
      isError: null,
    };
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      this.isError = null;
      console.log(this.game);

      axios({
        method: 'put',
        data: this.game,
        url: 'http://localhost:3000/api/v1/games/edit/' + this.game._id,
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
        .then((res) => {
          console.log(res.data);
          this.isLoading = false;
          this.$refs.form.reset();
          this.$router.push({ name: 'Home' });
        })
        .catch((err) => {
          this.isLoading = false;
          this.isError = err.message ? err.message : err;
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #0e1a2b;

  form {
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
</style>
