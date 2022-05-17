import Vue from 'vue';
import store from "./store";
import router from './router';

import index from './components/index';

require('./bootstrap');

const app = new Vue({
    el: '#app',

    components: {
        index,
    },

    router, store,
});
