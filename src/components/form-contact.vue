<template>
  <div class="card p-3">
    <div class="form">
      <div class="container">
        <h5 class="mb-5">Contact Form</h5>
        <div class="row">
          <!-- ! name -->
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="">Name <span>*</span></label>
              <input
                type="text"
                class="form-control"
                name="name"
                id=""
                placeholder=""
              />
              <small class="form-text text-muted"></small>
            </div>
          </div>
          <!-- ! email -->
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label for="">Email Address <span>*</span></label>
              <input
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
                class="form-control"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <small class="form-text text-muted"></small>
            </div>
            <!-- ! BUtton -->
            <button
              type="button"
              class="btn btn-primary btn-sm ml-auto d-block px-3"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
