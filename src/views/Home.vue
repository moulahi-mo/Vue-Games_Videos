<template>
  <section
    v-if="isAuth"
    class="home listing d-flex flex-column flex-lg-row justify-content-between mt-5 pb-5"
  >
    <div v-if="!isLoading && games.length > 0" class="row">
      <!-- ! filter box-->
      <div class="col-12 col-lg-4">
        <Filterbox
          @onClearing="onClearing()"
          @onOrderByChoice="onOrderBy($event)"
          @onSearchByName="onSearchByName($event)"
          :games="games"
          class="my-3"
        />
      </div>
      <!-- ! cards-->
      <div class="col-12 col-lg-8 mt-3">
        <Cards :games="games" />
      </div>
      <!-- ! pagnation-->
      <div class="col-12  mt-3">
        <Pagination
          @onPagination="onPagination($event)"
          :pagination="pagination"
          class="d-block mx-auto page"
        />
      </div>
    </div>
  </section>

  <!-- ! loading-->
  <Loader v-if="isLoading && !isError" class="mx-auto d-block" />
  <!-- ! error-->
  <Error v-if="isError" :message="isError" />
  <!-- ! no data-->

  <NoData
    class="my-5 mx-auto"
    v-if="!isLoading && games.length == 0 && !isError"
    :message="'no Games founds in our data base'"
  />
</template>

<script>
import Cards from '../components/cards.vue';
import Filterbox from '../components/filterbox.vue';
import Error from '../components/shared/error.vue';
import Loader from '../components/shared/loader.vue';
import NoData from '../components/shared/noData.vue';
import Pagination from '../components/shared/pagination';
export default {
  name: 'Home',
  components: { Filterbox, Cards, NoData, Loader, Error, Pagination },

  data() {
    return {
      isLoading: false,
      isError: null,
      games: [],
      list: [],
      pagination: {},
      limit: 20,
    };
  },
  mounted() {
    //* verify if user is auth to get access to games page if not auto navigate to auth page
    if (this.$store.state.isAuth) {
      this.FectAllGames();
    } else {
      this.$router.push({ name: 'Auth' });
    }
  },
  methods: {
    async FectAllGames(limit = 20, page = 1) {
      this.isLoading = true;
      this.isError = null;
      try {
        const res = await fetch(
          'https://play-area.herokuapp.com/api/v1/games?' +
            `limit=${limit}&page=${page}`
        );
        const data = await res.json();
        this.games = data.data;
        this.pagination = data.pagination;

        this.list = this.games;
        this.isLoading = false;
        console.log(data);
      } catch (err) {
        this.isLoading = false;
        this.isError = err.message ? err.message : err;

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

    //* pagination
    onPagination(page) {
      this.FectAllGames(this.limit, page);
    },
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  min-height: 100vh;
}
</style>
