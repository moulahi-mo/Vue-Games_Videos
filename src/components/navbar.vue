<template>
  <ul class="nav ">
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
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  li h3 {
    text-transform: uppercase;
    font-weight: 1.5rem;
    margin-left: 50px;

    color: #fff;
  }
  router-link {
    text-decoration: none !important;
  }
}
</style>
