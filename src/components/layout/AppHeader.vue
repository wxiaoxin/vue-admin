<template>
    <section class="animated bounceInDown">

        <div class="container-fluid  yh-navbar">

            <div class="row">

                <div class="yh-navbar-menu col-md-1 col-sm-1 animated bounceInDown">
                    <button class="btn btn-default" @click="toggleSidebar">
                        菜单
                    </button>
                </div>

                <div class="yh-navbar-brand col-md-1 col-md-offset-5 col-sm-1 col-sm-offset-4">
                    <a href="#">
                        <img src="../../assets/logo.png" alt="logo">
                    </a>
                </div>

                <div class="yh-navbar-setting col-md-1 col-md-offset-5 col-sm-1 col-sm-offset-5">
                    设置
                </div>

            </div>


        </div>

    </section>
</template>


<script>

    import bus from "../../Bus";

    export default{
        data(){
            return {
                msg: 'hello vue',
                sidebarStatus: false
            }
        },
        methods: {
            toggleSidebar() {
                this.sidebarStatus = !this.sidebarStatus;
                console.log("菜单：" + this.sidebarStatus);
                bus.$emit("didi", this.sidebarStatus);
            }
        }
    }

</script>

<style>

@media (min-width: 768px) {
  .yh-navbar-menu {
    display: block
  }
}

@media (min-width: 992px) {
    .yh-navbar-menu {
        display: none;
    }
}

.yh-navbar {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid rgba(237, 44, 70, 0.5);
}

.yh-navbar-menu,
.yh-navbar-brand,
.yh-navbar-setting {
    width: 50px;
}

.yh-navbar-brand img  {
    height: 30px;
}

</style>