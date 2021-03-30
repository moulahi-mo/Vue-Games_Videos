<template>
  <div class="card p-3">
    <div class="form">
      <div class="container">
        <h5 class="mb-5">filter results</h5>
        <div class="row">
          <!-- ! name -->
          <div class="col-12 ">
            <div class="form-group">
              <label for="">Name (contains)</label>
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
          <aside
            class="col-12 d-flex justify-content-between align-items-center flex-column flex-md-row flex-lg-column w-100"
          >
            <!-- ! Minimum score -->
            <div class=" flex-grow-0 alterno minimum">
              <div class="form-group">
                <label for="">Minimum score</label>
                <input
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
                  <select class="form-control text-light" name="orderBy">
                    <option>
                      <h6>Release Date</h6>
                    </option>
                    <option>
                      <h6>Score</h6>
                    </option>
                    <option>
                      <h6>Name</h6>
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <!-- ! BUtton -->
            <button
              type="button"
              class="btn btn-primary btn-sm d-block mt-3  ml-lg-auto  flex-grow-0 alterno "
            >
              Clear
            </button>
          </aside>
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
  color: #c1d1e8;

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
