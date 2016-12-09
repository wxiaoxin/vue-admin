import Vue from "vue";

import App from "./App";

import store from "./store/index";
import router from "./router/router";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css"

import "./style/app.css"

new Vue({
    el: '#app',
    router,store,
    template: '<App/>',
    components: {App},
});
