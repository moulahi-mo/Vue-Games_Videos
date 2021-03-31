<template>
  <Toast
    @onToastClose="isToast = false"
    v-if="isToast"
    :message="'Thank you, the message have been sent successfully'"
  />
  <div class="row">
    <div
      class="col-12 col-md-8 col-lg-6 mx-auto contact d-flex flex-column align-items-start mt-5"
    >
      <h3 class=" text-uppercase  text-light my-4">
        get in touch
      </h3>
      <p class="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        consectetur ad totam fugit, nemo libero molestiae commodi maxime
        voluptas ea.
      </p>
      <FormContact @onSending="isToast = true" class="mt-4" />
    </div>
  </div>
</template>

<script>
import FormContact from '../components/form-contact';
import Toast from '../components/shared/toast.vue';
export default {
  components: {
    FormContact,
    Toast,
  },
  data() {
    return {
      isToast: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  color: #c1d1e8;
}
</style>
