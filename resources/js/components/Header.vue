<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <router-link class="navbar-brand" to="/">CUSTOMERS MANAGEMENT SYSTEM</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ml-auto">

          <template v-if="!currentUser">
            <li>
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li>
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
          </template>

          <template v-else>
            <li>
              <router-link to="/customers" class="nav-link">Customers</router-link>
            </li>
            <li class="nav-item dropdown">
              <a id="navbarDropdown" class="nav-link dropdown-toggle" role="button" 
                aria-expanded="false" data-toggle="dropdown" aria-haspopup="true" href="#">
                 {{ currentUser.name}} <span class="caret"></span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a href="#" v-on:click.prevent="logout" class="dropdown-item">Logout</a>
              </div>
            </li>
          </template>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.commit('logout');
      this.$router.push('/login');
    }
  }, 
  computed: {
    currentUser(){
      return this.$store.getters.currentUser;
    }
  }
}
</script>

<style>

</style>