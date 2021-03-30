<template>
  <div class="row">
    <div
      class="col-12 col-md-6 mx-auto contact d-flex flex-column align-items-start mt-5"
    >
      <h3 class=" text-uppercase  text-light my-4">
        get in touch
      </h3>
      <p class="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        consectetur ad totam fugit, nemo libero molestiae commodi maxime
        voluptas ea.
      </p>
      <FormContact class="mt-5" />
    </div>
    <!-- <div class="col-12 col-md-6 mx-auto mt-5">
      <FormContact />
    </div> -->
  </div>
</template>

<script>
import FormContact from '../components/form-contact';
export default {
  components: {
    FormContact,
  },
};
</script>

<style lang="scss" scoped>
.row {
  color: #c1d1e8;
}
</style>
