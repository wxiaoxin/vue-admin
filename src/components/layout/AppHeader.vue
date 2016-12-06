<template>
    <section class="app-header">

        <div class="navbar yh-navbar navbar-default navbar-fixed-top" role="navigation">

            <div class="navbar-header yh-navbar-header">
                <a href="#" class="yh-navbar-brand">
                    <img src="../../assets/logo.png" alt="logo">
                </a>

                <ul class="navbar-nav nav navbar-right" style="margin-right: 10px">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">管理员&nbsp;&nbsp;<span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">信息</a></li>
                            <li><a href="#">设置</a></li>
                        </ul>
                    </li>
                </ul>

            </div>

        </div>

    </section>
</template>


<script>

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }

</script>

<style>

.yh-navbar {
    box-shadow:0px 0px 2px rgba(0, 0, 0, 0.2)
}

.yh-navbar-header {
    text-align: center;
    width: 100%
}

.yh-navbar-brand {
    float: none;
    margin: 0 auto;
    margin-top: 10px;
    display:inline-block;
}

.yh-navbar-brand > img  {
    height: 30px;
}
    

</style>