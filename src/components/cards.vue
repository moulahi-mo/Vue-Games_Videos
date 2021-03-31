<template>
  <Toast
    @onToastClose="isToast = false"
    v-if="isToast"
    :message="{
      header: 'Delete',
      sub: 'deleting video Game ..',
      message: `video game with id : ${toDelete} , was successfully deleted`,
    }"
  />
  <section v-if="games.length > 0">
    <div
      v-for="game in FilterFromDeleted"
      :key="game._id"
      class="card p-2 py-3 mb-2"
      :id="game._id"
    >
      <Modal
        @onDelete="onDelete($event)"
        @onClose="onClose()"
        id="modal"
        :idg="game._id"
        :game="game"
        v-if="isModale && toDelete === game._id"
      />

      <div class="row m-auto">
        <div
          class="order-2 order-sm-1 col-12 col-sm-3 d-flex flex-column justify-content-center align-items-center m-auto  "
        >
          <img
            src="../assets/holder.png"
            alt=""
            class="img-fluid  d-block mx-auto my-5 my-sm-0"
          />
          <!-- buttons -->
          <aside class="icons d-flex mt-sm-3 mb-5 mb-sm-0">
            <i
              class="material-icons   text-primary "
              data-toggle="tooltip"
              data-placement="top"
              title="More Details"
            >
              <router-link :to="{ name: 'Details', params: { id: game._id } }"
                >loupe</router-link
              >
            </i>
            <i
              data-toggle="tooltip"
              data-placement="top"
              title="Edit Game"
              class="material-icons  text-warning  mx-3"
            >
              <router-link
                class="text-warning"
                :to="{
                  name: 'Details',
                  params: { id: game._id },
                  query: { type: 'edit' },
                }"
              >
                create
              </router-link>
            </i>

            <i
              data-toggle="modal"
              data-target="#modal"
              @click.self="onRemove(game._id)"
              data-placement="top"
              title="Delete Game"
              class="material-icons  text-danger "
              >delete</i
            >
          </aside>
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
import Toast from '../components/shared/toast';
import Modal from './shared/modal.vue';
export default {
  components: { Toast, Modal },
  props: ['games'],
  data() {
    return {
      toDelete: null,

      // isToast: false,
      isModale: false,
    };
  },
  methods: {
    onRemove(id) {
      this.isModale = true;
      this.toDelete = id;
      // this.isToast = true;
      console.log(id);
    },
    onClose() {
      this.isModale = false;
    },
    onDelete(id) {
      this.FilterFromDeleted(id);
    },
  },
  computed: {
    FilterFromDeleted(id) {
      if (id) {
        this.games.forEach((game, index) => {
          if (game._id === id) {
            this.games.splice(index, 1);
          }
        });
        return this.games;
      } else {
        return this.games;
      }
    },

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
