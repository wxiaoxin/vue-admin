<template>
    <aside id="sidebar" class="app-sidebar animated bounceInLeft">

        <ul>

            <!-- 遍历菜单 -->
            <template v-for="(menu,index) in menus">

                <!-- 如果没有二级菜单 -->
                <li v-if="menu.subMenu == undefined" class="first-level" :class="{active: menu.status}"
                    @click="toggle(index)">
                    <router-link v-bind:to="menu.url">
                        <span class="glyphicon glyphicon-th" :class="{active: menu.status}"></span>{{menu.name}}
                    </router-link>
                </li>

                <!-- 如果有二级菜单 -->
                <li v-else class="first-level" :class="{active: menu.status}" @click="toggle(index)">
                    <router-link v-bind:to="menu.url">
                        <span class="glyphicon glyphicon-th-list" :class="{active: menu.status}"></span>{{menu.name}}
                    </router-link>
                    <!-- 遍历二级菜单 -->
                    <ul class="second-level" v-show="menu.show">
                        <template v-for="m in menu.subMenu">
                            <li>
                                <router-link v-bind:to="m.url">{{m.name}}</router-link>
                            </li>
                        </template>
                    </ul>
                </li>

            </template>

        </ul>

    </aside>

</template>

<script>

    import bus from "../../Bus";

    var menus = [
        {
            name: "主页",
            status: true,
            url: "/home"
        }, {
            name: "商品",
            status: false,
            url: "/items",
            show: false,
            subMenu: [
                {
                    name: "商品详情",
                    status: false,
                    url: "/item/detail"
                }, {
                    name: "商品评论",
                    status: false,
                    url: "/item/comment"
                }, {
                    name: "商品价格",
                    status: false,
                    url: "/item/price"
                }
            ]
        }, {
            name: "订单",
            status: false,
            url: "/order",
            show: false,
            subMenu: [
                {
                    name: "订单详情",
                    status: false,
                    url: "/order/detail"
                }, {
                    name: "订单状态",
                    status: false,
                    url: "/order/status"
                }, {
                    name: "订单价格",
                    status: false,
                    url: "/order/price"
                }
            ]
        }, {
            name: "字典",
            status: false,
            url: "/dict"
        }
    ];

    export default{
        data(){
            return {
                menus: menus,
                currentIndex: 0
            }
        },
        methods: {
            toggle (index) {
                this.menus[this.currentIndex].status = false;
                this.menus[this.currentIndex].show = false;
                this.currentIndex = index;
                this.menus[index].status = true;
                this.menus[index].show = true;
            }
        },
        watch : {
            "$store.state.showSidebar" (val, oldVal) {
                var sidebar = document.getElementById("sidebar");
                if(val) {
                    sidebar.setAttribute("style", "display:block");
                } else {
                    sidebar.setAttribute("style", "display:none");
                }
            }
        },
        created () {
            /*bus.$on("didi", (status) => {
                var sidebar = document.getElementById("sidebar");
                if(status) {
                    // sidebar.style.display = "block";
                    sidebar.setAttribute("style", "display:block");
                } else {
                    // sidebar.style.display = "none";
                    sidebar.setAttribute("style", "display:none");
                }
            });*/
        }
    }

</script>
