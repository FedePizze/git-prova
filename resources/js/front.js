// istanza vue e axios
window.Vue = require('vue');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';
import App from './views/App.vue';
import router from './router';

const app = new Vue ({
    el: "#root",
    render: h => h(App),
    // router utilizzo
    router
})
