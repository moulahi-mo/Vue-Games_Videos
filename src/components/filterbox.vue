<template>
  <div class="card p-3">
    <form ref="form">
      <div class="container">
        <h5 class="mb-5">filter results</h5>
        <div class="row">
          <!-- ! name -->
          <div class="col-12 ">
            <div class="form-group">
              <label for="">Name (contains)</label>
              <input
                v-model="term"
                @keyup="onSearch($event)"
                type="text"
                class="form-control"
                name="name"
                id=""
                placeholder=""
              />
              <small class="form-text text-muted"></small>
            </div>
          </div>
          <aside
            class="col-12 d-flex justify-content-between align-items-center flex-column flex-md-row flex-lg-column w-100"
          >
            <!-- ! Minimum score -->
            <div class=" flex-grow-0 alterno minimum">
              <div class="form-group">
                <label for="">Minimum score</label>
                <input
                  v-model="minimum"
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder=""
                />
                <small class="form-text text-muted"></small>
              </div>
            </div>
            <!-- ! Order by -->
            <div class="w-100 mx-5 flex-grow-1">
              <div class="form-group">
                <label for="">Order by</label>
                <div class="d-flex">
                  <i class="material-icons medium p-1 bg-primary"
                    >arrow_upward</i
                  >
                  <select
                    class="form-control text-light"
                    name="orderBy"
                    v-model="orderBy"
                    @change="onOrderBy()"
                  >
                    <option>
                      <h6 value="date">Release Date</h6>
                    </option>
                    <option>
                      <h6 value="score">Score</h6>
                    </option>
                    <option>
                      <h6 value="name">Name</h6>
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <!-- ! BUtton -->
            <button
              @click.self="onClear()"
              type="button"
              class="btn btn-primary btn-sm d-block mt-3  ml-lg-auto  flex-grow-0 alterno "
            >
              Clear
            </button>
          </aside>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['games'],
  data() {
    return {
      term: null,
      list: this.games,
      orderBy: null,
      minimum: null,
    };
  },
  methods: {
    onSearch(e) {
      this.term = e.target.value.trim();
      this.games = this.list;
      // this.$emit('onSearchByName', this.filterByName);
    },
    onClear() {
      this.$refs.form.reset();

      this.$emit('onClearing');
    },
    onOrderBy() {
      console.log(this.orderBy);
      if (this.orderBy) {
        this.filterByorder(this.orderBy.toLowerCase());
        this.$emit('onOrderByChoice', this.games);
      } else if (this.orderBy == null) {
        this.$emit('onOrderByChoice', this.list);
      }
    },
    filterByorder(choice) {
      switch (choice) {
        case 'name':
          this.games.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case 'score':
          this.games.sort((a, b) => b.rating - a.rating);
          break;

        case 'date':
          this.games.sort(
            (a, b) =>
              new Date(a.first_release_date).getTime() -
              new Date(b.first_release_date).getTime()
          );
          break;

        default:
      }
    },
  },
  computed: {
    // filterByName() {
    //   return this.games.filter((game) => {
    //     if (game.name.includes(this.term) || game.summary.includes(this.term)) {
    //       // document.getElementById(game._id).classList.remove('d-none');
    //       return game;
    //     }
    //     //  else {
    //     //   // document.getElementById(game._id).classList.add('d-none');
    //     //   return;
    //     // }
    //   });
    // },
    // filterByorder(choice) {
    //   switch (choice) {
    //     case 'name':
    //       this.games.sort((a, b) => a.name - b.name);
    //       break;
    //     case 'score':
    //       this.games.sort((a, b) => a.rating - b.rating);
    //       break;
    //     case 'date':
    //       this.games.sort(
    //         (a, b) =>
    //           new Date(a.first_release_date).getTime() -
    //           new Date(b.first_release_date).getTime()
    //       );
    //       break;
    //     default:
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #0e1a2b;
  color: #c1d1e8;

  form {
    label span {
      color: #5692e8;
    }
    .form-control {
      background-color: #182c47;
      border: 0;
      outline: 0;
    }
    .btn {
      background-color: #5692e8;
      padding: 5px 10px;
    }
    textarea {
      resize: none;
    }
  }
}

@media (max-width: 767px) {
  .alterno {
    width: 100%;
  }
}
@media (min-width: 992px) {
  .minimum {
    width: 100%;
  }
}
</style>
