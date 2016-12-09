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
            url: "/item",
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
        }, {
            name: "测试",
            status: false,
            url: "/test"
        }
    ];

    export default{
        data(){
            return {
                menus: menus,
                currentIndex: 0,
                sidebarStatus: true
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
        created () {
            bus.$on("didi", (status) => {
                this.sidebarStatus = status;
                console.log("sidebar接收：" + status);
                var sidebar = document.getElementById("sidebar");
                if(status) {
                    // sidebar.style.display = "block";
                    sidebar.setAttribute("style", "display:block");
                } else {
                    // sidebar.style.display = "none";
                    sidebar.setAttribute("style", "display:none");
                }
            });
        }
    }

</script>

<style>

@media (min-width: 768px) {
    .app-sidebar {
        display: none;
    }
}

@media (min-width: 992px) {
    .app-sidebar {
        display: block;
    }
}

.app-sidebar {
    z-index: 1023;
    top: 50px;
    width: 180px;
    height: 100%;
    padding-top: 10px;
    position: fixed;
    background: #fff;
    box-shadow: 0 2px 5px hsla(0, 0%, 7%, 0.4);
}

.app-sidebar ul {
    list-style:none;
}

.app-sidebar > ul {
    padding-left: 0px;
    margin: 0px;
}

.app-sidebar ul.second-level {
    padding-left: 32px;
}

.app-sidebar ul.second-level > li {
    width: 100%;
    padding-left: 8px;
    margin-right: 2px;
}

.app-sidebar ul.second-level > li:hover {
    background: rgba(242, 242, 242, 0.9);
}

.app-sidebar li.first-level {
    line-height: 32px;
    padding-left: 18px;
}

.app-sidebar li.active {
    border-left: 2px solid #ed2c46;
}

.app-sidebar a {
    color: #4a4a4a;
    text-decoration: none;
}

.app-sidebar a:hover {
    text-decoration: none;
    color: #000000
}

.app-sidebar a > span {
    padding-right: 12px;
}


.app-sidebar a > span.active,
.app-sidebar a.link-active {
    color: #ed2c46
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}





</style>
