<template>
  <div class="customer-view" v-if="customer">
      <table class="table">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>{{customer.id}}</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Name</td>
                  <td>{{customer.name}}</td>
              </tr>
              <tr>
                  <td>Phone</td>
                  <td>{{customer.phone}}</td>
              </tr>
              <tr>
                  <td>Email</td>
                  <td>{{customer.email}}</td>
              </tr>
              <tr>
                  <td>Website</td>
                  <td>{{customer.website}}</td>
              </tr>
          </tbody>
      </table>
      <router-link to="/customers">Back</router-link>
  </div>
</template>

<script>
export default {
    created(){
        axios.get('/api/customers/' + this.$route.params.id).then( (response) => {
            this.customer = response.data.customer
        });
    }, 
    data(){
        return {
            customer: null
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