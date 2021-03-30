<template>
  <section
    class="listing d-flex flex-column flex-lg-row justify-content-between mt-5"
  >
    <div class="row">
      <div class="col-12 col-lg-4">
        <Filterbox class="my-3" />
      </div>
      <div class="col-12 col-lg-8 mt-3">
        <Cards />
      </div>
    </div>
  </section>
</template>

<script>
import Cards from '../components/cards.vue';
import Filterbox from '../components/filterbox.vue';
export default {
  name: 'Home',
  components: { Filterbox, Cards },
};
</script>
<style lang="scss" scoped></style>
