import Vue from 'vue';
import router from './router';

import index from './components/index';

require('./bootstrap');

const app = new Vue({
    el: '#app',

    components: {
        index,
    },

    router,
});
