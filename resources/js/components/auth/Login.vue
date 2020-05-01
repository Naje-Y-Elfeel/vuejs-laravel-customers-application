<template>
    <div class="login row col-12 justify-content-center">
        <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Please Login</h4>
                
                <form @submit.prevent="authenticate">
                    <div class="form-group row">
                        <label class="col-md-3">Email:</label>
                        <input type="email" class="form-control col-md-8" v-model="form.email">
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3">Password:</label>
                        <input type="password" class="form-control col-md-8" v-model="form.password">
                    </div>
                    <p class="text-right">
                        <button type="submit" class="btn btn-primary ml-auto">Login</button>
                    </p>
                    <div class="form-group row" v-if="authError">
                        <p class="error mt-3">
                            {{ authError }}
                        </p>
                    </div>
                </form>

              </div>
            </div>
        </div>
    </div>
</template>

<script>
import {login} from '../../helpers/auth';

export default {
    data(){
        return {
            form: {
                email: '',
                password: ''
            }, 
            error: null
        }
    }, 
    methods: {
        authenticate(){
//            this.$store.dispatch('login');

            login(this.$data.form)
                .then( (res) => {
                    this.$store.commit("loginSuccess", res);
                    this.$router.push({path: '/'});
                })
                .catch( (error) => {
                    this.$store.commit("loginFailed", {error});
                })
        }
    }, 
    computed: {
        authError(){
            return this.$store.getters.authError;
        }
    }
}
</script>

<style scoped>
.error{
    text-align: center;
    color: red;
}
</style>