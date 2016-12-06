import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App";

import Home from "./components/Home.vue";
import Test from "./components/Test.vue";

import Item from "./components/item/Item.vue";
import ItemDetail from "./components/item/ItemDetail.vue";

import Order from "./components/order/Order.vue";
import OrderDetail from "./components/order/OrderDetail.vue";

import "bootstrap/dist/css/bootstrap.css";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        }, {
            path: '/test',
            component: Test
        }, {
            path: "/item",
            component: Item
        }, {
            path: "/item/detail",
            component: ItemDetail
        }, {
            path: "/order",
            component: Order
        }, {
            path: "/order/detail",
            component: OrderDetail
        }
    ]
});


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router
});
