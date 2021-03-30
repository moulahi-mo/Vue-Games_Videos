<template>
  <section
    class="listing d-flex flex-column flex-lg-row justify-content-between mt-5"
  >
    <div v-if="!isLoading" class="row">
      <div class="col-12 col-lg-4">
        <Filterbox
          @onClearing="onClearing()"
          @onOrderByChoice="onOrderBy($event)"
          @onSearchByName="onSearchByName($event)"
          :games="games"
          class="my-3"
        />
      </div>
      <div class="col-12 col-lg-8 mt-3">
        <Cards v-if="games.length > 0" :games="games" />
      </div>
    </div>

    <!-- ! no data-->
    <div class="my-5 mx-auto" v-else>
      <NoData v-if="!isLoading || !isError" />
    </div>
    <!-- ! loading-->
    <Loader v-if="isLoading && !isError" />
    <!-- ! loading-->
    <Error v-if="isError" />
  </section>
</template>

<script>
import Cards from '../components/cards.vue';
import Filterbox from '../components/filterbox.vue';
import Error from '../components/shared/error.vue';
import Loader from '../components/shared/loader.vue';
import NoData from '../components/shared/noData.vue';
export default {
  name: 'Home',
  components: { Filterbox, Cards, NoData, Loader, Error },
  data() {
    return {
      isLoading: false,
      isError: null,
      games: [],
      list: [],
    };
  },
  mounted() {
    this.FectAllGames();
  },
  methods: {
    async FectAllGames() {
      this.isLoading = true;
      this.isError = null;
      try {
        const res = await fetch('http://localhost:3000/api/v1/games');
        const data = await res.json();
        this.games = data.data;
        this.list = this.games;
        this.isLoading = false;
        console.log(data);
      } catch (err) {
        this.isError = err.message ? err.message : err;
        this.isLoading = false;
        console.log(err);
      }
    },
    onSearchByName(games) {
      this.games = games;
    },
    onOrderBy(games) {
      this.games = games;
    },
    onClearing() {
      this.games = this.list;
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped></style>
