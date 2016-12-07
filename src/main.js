import Vue from "vue";
import VueRouter from "vue-router";

import NProgress from "nprogress";
import VueProgressbar from "vue-progressbar";

import App from "./App";

import Home from "./components/Home.vue";
import Test from "./components/Test.vue";

import Item from "./components/item/Item.vue";
import ItemDetail from "./components/item/ItemDetail.vue";

import Order from "./components/order/Order.vue";
import OrderDetail from "./components/order/OrderDetail.vue";

import "bootstrap/dist/css/bootstrap.css";
import "nprogress/nprogress.css";

Vue.use(VueRouter);
Vue.use(VueProgressbar, {
    color: "#ed2c46",
    failedColor: "red",
    height: "2px"
});

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "link-active",
    routes: [
        {
            path: "/",
            redirect: "/home"
        }, {
            path: "/home",
            name: "Home",
            alias: "/hh",
            component: Home
        }, {
            path: "/test",
            name: "Test",
            component: Test
        }, {
            path: "/item",
            name: "Item",
            component: Item
        }, {
            path: "/item/:id?",
            name: "ItemDetail",
            component: ItemDetail
        }, {
            path: "/order",
            name: "Order",
            component: Order
        }, {
            path: "/order/detail",
            name: "OrderDetail",
            component: OrderDetail
        }
    ]
});

NProgress.configure({showSpinner: false});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(route => {
    NProgress.done();
});


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router
});
