<template>
  <nav aria-label="Page navigation ">
    <ul class="pagination justify-content-center">
      <li :class="{ disabled: !pagination.previousPage }" class="page-item">
        <a @click.self="onPreviousPage()" class="page-link">Previous</a>
      </li>
      <li v-if="pagination.nextPage" class="page-item">
        <a
          @click.self="$emit('onPagination', pagination.nextPage - 1)"
          class="page-link"
          >{{ pagination.nextPage - 1 }}
        </a>
      </li>
      <li v-if="pagination.nextPage" class="page-item">
        <a
          @click.self="$emit('onPagination', pagination.nextPage)"
          class="page-link"
        >
          {{ pagination.nextPage }}
        </a>
      </li>
      <li v-if="pagination.nextPage" class="page-item">
        <a
          @click.self="$emit('onPagination', pagination.nextPage + 1)"
          class="page-link"
        >
          {{ pagination.nextPage + 1 }}
        </a>
      </li>
      <li :class="{ disabled: !pagination.nextPage }" class="page-item">
        <a @click.self="onNextPage()" class="page-link">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pagination'],
  data() {
    return {
      newGamesPage: [],
      nextPage: this.pagination.nextPage,
      previousPage: this.pagination.previousPage,
    };
  },
  methods: {
    onNextPage() {
      this.$emit('onPagination', this.nextPage);
    },
    onPreviousPage() {
      this.$emit('onPagination', this.previousPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination .page-item a {
  background-color: #0e1a2b;
  //   color: #c1d1e8;
}
</style>
