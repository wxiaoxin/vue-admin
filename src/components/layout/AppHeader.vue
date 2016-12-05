<template>
    <section class="app-header">

        <div class="navbar navbar-default navbar-fixed-top" role="navigation" style="box-shadow:0px 0px 2px rgba(0, 0, 0, 0.2)">

            <div class="navbar-header">
                <a href="#" class="navbar-brand">
                    <img src="../../assets/logo.png" alt="logo" style="height: 30px; margin-left: 45px">
                </a>
            </div>

            <ul class="navbar-nav nav navbar-right" style="margin-right: 10px">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">个人 <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">信息</a></li>
                        <li><a href="#">设置</a></li>
                    </ul>
                </li>
            </ul>

        </div>

    </section>
</template>


<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }

</script>

<style>
    

    
</style>