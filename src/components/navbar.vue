<template>
  <ul class="nav d-flex justify-content-between">
    <!-- <div class="d-flex">
      <h3 class="display-3 text-scondary text-uppercase mb-5 ml-3">
        video games
      </h3>
      <h3 class="display-3 text-scondary text-uppercase mb-5 ml-5">contact</h3>
    </div> -->
    <div class="d-flex flex-column flex-sm-row">
      <li class="mt-4">
        <router-link :to="{ name: 'Home' }"> <h3>video games</h3> </router-link>
      </li>
      <li class="mt-4">
        <router-link :to="{ name: 'Contact' }"> <h3>contact</h3> </router-link>
      </li>
    </div>

    <router-link :to="{ name: 'Auth' }">
      <button type="button" class="btn d-block mt-3 ">
        <i class="material-icons small">person</i>
        Login
      </button>
    </router-link>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  padding-top: 50px;
  display: flex;

  li h3 {
    text-transform: uppercase;
    font-weight: 1.5rem;
    margin-left: 50px;

    color: #fff;
  }
  router-link {
    text-decoration: none !important;
  }
  .btn {
    color: #c1d1e8;
    background-color: #5692e8;
    padding: 6px 20px !important;
  }
}
</style>
