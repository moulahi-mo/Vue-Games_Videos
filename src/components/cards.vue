<template>
  <section v-if="games.length > 0">
    <div
      v-for="game in games"
      :key="game._id"
      class="card p-2 py-3 mb-2"
      :id="game._id"
    >
      <div class="row m-auto">
        <div class="order-2 order-sm-1 col-12 col-sm-3  m-auto  ">
          <img
            src="../assets/holder.png"
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
  </section>
</template>

<script>
export default {
  components: {},
  props: ['games'],
  data() {
    return {};
  },
  methods: {},
  computed: {
    // filterGamesReder() {
    //   return this.games.map((game) => {
    //     return { _id: game._id, name, summary, rating, first_release_date };
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;900&display=swap');
$basic: #0e1a2b;
.card {
  img {
    width: 100px;
    height: 60%;
  }
  background: $basic;
  color: #c1d1e8;
  .rounded-circle {
    width: 44px;
    height: 44px;
    font-family: 'Mulish', sans-serif;
    font-size: 1.75rem;
  }
}
</style>
