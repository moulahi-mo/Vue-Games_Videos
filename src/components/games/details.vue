<template>
  <section v-if="!isLoading && game._id" class="mt-5 pt-5">
    <i
      @click.self="onRemove(game._id)"
      data-toggle="tooltip"
      data-placement="right"
      title="Back to Games"
      class="material-icons h1 mb-3 text-danger "
    >
      <router-link :to="{ name: 'Home' }">arrow_back</router-link>
    </i>
    <div class="card p-2 py-3 mb-2" :id="game._id">
      <div class="row m-auto">
        <div
          class="order-2 order-sm-1 col-12 col-sm-3 d-flex flex-column justify-content-center align-items-center m-auto  "
        >
          <img
            src="../../assets/holder.png"
            alt=""
            class="img-fluid  d-block mx-auto my-5 my-sm-0"
          />
        </div>
        <div class="order-3 order-sm-2 col-12 col-sm-7 d-flex flex-column ">
          <h5>{{ game.name }}</h5>
          <h6 class="text-muted">
            Release Date :
            <span>
              {{ new Date(game.first_release_date).toDateString() }}
            </span>
          </h6>
          <p>
            {{ game.summary }}
          </p>
        </div>
        <div class="order-1 order-sm-3 col-sm-2   m-auto">
          <div
            class="d-block m-auto rounded-circle h3 font-weight-bold pl-3 pt-1 bg-primary border-0"
          >
            {{ game.rating.toString().substr(0, 1) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Edit section-->

    <EditGame :game="game" v-if="isForEdit" />
  </section>

  <section
    class="mt-5 d-flex flex-column justify-content-center align-items-center"
  >
    <!-- ! loading-->
    <Loader v-if="isLoading && !isError" class="mx-auto d-block " />
    <!-- ! error-->
    <Error v-if="isError" :message="isError" />
    <!-- ! no data-->

    <NoData
      class="my-5 mx-auto"
      v-if="!isLoading && !game._id && !isError"
      :message="'no Game Details founds for this video game, in our data base'"
    />
  </section>
</template>

<script>
import Error from '../shared/error';
import Loader from '../shared/loader.vue';
import NoData from '../shared/noData.vue';
import EditGame from './edit-game.vue';
export default {
  components: { NoData, Loader, Error, EditGame },
  data() {
    return {
      isForEdit: false,
      game: {
        first_release_date: null,
        id: null,
        name: null,
        rating: null,
        summary: null,
        _id: null,
      },
      isLoading: false,
      isError: null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const type = this.$route.query.type;
    type === 'edit' ? (this.isForEdit = true) : '';

    this.fetchGame(id);
  },
  methods: {
    async fetchGame(id) {
      this.isLoading = true;
      this.isError = null;
      try {
        const res = await fetch('http://localhost:3000/api/v1/games/' + id);
        const data = await res.json();
        this.game = data.data;
        this.isLoading = false;
        console.log(data);
      } catch (err) {
        this.isLoading = false;
        this.isError = err.message ? err.message : err;
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  img {
    width: 100px;
    height: 60%;
  }
  background: #0e1a2b;
  color: #c1d1e8;
  .rounded-circle {
    width: 44px;
    height: 44px;
    font-family: 'Mulish', sans-serif;
    font-size: 1.75rem;
  }
  .icons i {
    font-size: 1.2rem;
  }
}
</style>
