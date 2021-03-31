<template>
  <!-- Flexbox container for aligning the toasts -->
  <div
    aria-live="polite"
    aria-atomic="true"
    class="d-flex justify-content-center align-items-center"
    style="position: absolute;min-height: 200px;width: 337px;top: 151px;right: 22px;"
  >
    <div
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-autohide="false"
      style="position: absolute; top: 0; right: 0;"
    >
      <div class="toast-header">
        <strong class="mr-auto text-warning">{{ message.header }}</strong>
        <small class="text-muted">{{ message.sub }}</small>
        <button
          @click="$emit('onToastClose')"
          type="button"
          class="ml-2 mb-1 close text-light"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body ">
        {{ message.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
  mounted() {
    $('.toast').toast('show');
  },
};
</script>

<style lang="scss" scoped>
.toast {
  background: #0e1a2b;
  color: #c1d1e8;
  .toast-header {
    background: #0e1a2b;
    color: #c1d1e8;
  }
}
</style>
