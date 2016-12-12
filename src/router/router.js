/**
 * Created by wxiao on 2016/12/9.
 *
 * 路由
 */

import Vue from "vue";
import VueRouter from "vue-router"

import Home from "../views/Home.vue"

import Item from "../views/item/Item.vue"
import ItemDetail from "../views/item/ItemDetail.vue"

import Order from "../views/order/Order.vue"
import OrderDetail from "../views/order/OrderDetail.vue"

Vue.use(VueRouter);

// 路由
export default new VueRouter({
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
            path: "/items",
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