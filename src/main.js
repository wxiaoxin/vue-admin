import Vue from "vue";
import VueResource from "vue-resource";

import App from "./App";

import store from "./store/index";
import router from "./router/router";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css"

import "./style/app.css"

Vue.use(VueResource);

new Vue({
    el: '#app',
    router,store,
    template: '<App/>',
    components: {App},
});
