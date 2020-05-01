require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import MainApp from './components/MainApp';
import {store} from './store';
import {initialize} from './helpers/general';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

initialize(store, router);

const app = new Vue({
    el: '#app',
    render: h => h(MainApp), 
    router: router,
    store: store
});
