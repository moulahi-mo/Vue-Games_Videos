<template>
  <div class="card p-3">
    <form class="form" ref="form" @submit.prevent="onSubmit()">
      <div class="container">
        <h5 class="mb-5">Contact Form</h5>
        <div class="row">
          <!-- ! name -->
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="">Name <span>*</span></label>
              <input
                required
                minlength="3"
                maxlength="50"
                v-model="message.name"
                type="text"
                class="form-control"
                name="name"
                id=""
                placeholder=""
              />
              <small class="form-text text-danger text-muted"></small>
              <small class="form-text text-muted"></small>
            </div>
          </div>
          <!-- ! email -->
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="">Email Address <span>*</span></label>
              <input
                required
                minlength="5"
                maxlength="100"
                email
                v-model.trim="message.email"
                type="email"
                class="form-control"
                name="email"
                placeholder=""
              />
              <small class="form-text text-muted"></small>
            </div>
          </div>
          <!-- ! Message -->
          <div class="col-12">
            <div class="form-group">
              <label for="">Message <span>*</span></label>
              <textarea
                required
                minlength="10"
                maxlength="1000"
                v-model="message.message"
                class="form-control"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <small class="form-text text-muted"></small>
            </div>
            <!-- ! BUtton -->
            <button
              :disabled="!message.name || !message.email || !message.message"
              type="submit"
              class="btn btn-primary btn-sm ml-auto d-block px-3"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        name: null,
        email: null,
        message: null,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.message);

      this.$refs.form.reset();
      this.$emit('onSending');
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #0e1a2b;

  .form {
    label span {
      color: #5692e8;
    }
    .form-control {
      background-color: #182c47;
      border: 0;
      outline: 0;
      color: #c1d1e8;
    }
    .btn {
      background-color: #5692e8;
    }
    textarea {
      resize: none;
    }
  }
}
</style>
