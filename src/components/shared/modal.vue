<template>
  <div :id="id" class="modal" tabindex="-1">
    <div class=" modal-dialog">
      <div class="card modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-warning">
            Delete Video Game
            <i class="warning material-icons text-danger large pt-3 ml-3">
              report_problem
            </i>
          </h5>
          <button
            @click="$emit('onClose')"
            type="button"
            class="close text-light"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="text-capitalize text-center">
            Are You Sure you want to delete : <br />
            <br />
            <span class="text-warning lead font-weight-normal">{{
              game.name
            }}</span>
          </p>
        </div>
        <div class="modal-footer ">
          <button
            @click="$emit('onClose')"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            @click="onRemove()"
            type="button"
            class="btn btn-danger text-light"
            data-dismiss="modal"
          >
            Confirm Delete
            <button hidden></button>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  props: ['idg', 'game'],
  mounted() {},
  methods: {
    async onRemove() {
      try {
        const res = await axios({
          method: 'delete',
          url: 'http://localhost:3000/api/v1/games/' + this.game._id,
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem('token')
                ? localStorage.getItem('token')
                : null
            }`,
          },
        });
        this.$emit('onDelete', game._id);
        console.log(res.data.message);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  .warning {
    font-size: 2.3rem;
  }
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
