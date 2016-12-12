<template>


    <section class="app-main">

        <transition mode="out-in"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                    appear>
            <router-view></router-view>
        </transition>

    </section>

</template>


<script>

    import LevelBar from "./LevelBar.vue";

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            LevelBar
        }
    }


</script>

<style>

.app-main {
    z-index: 1000;
    background: #f5f5f5;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    position: absolute;
    top: 50px;
    right: 0px;
    left: 180px;
    bottom: 0px;
}


@media (min-width: 768px) {
  .app-main {
    left: 0px;
  }
}

@media (min-width: 992px) {
    .app-main {
        left: 180px;
    }
}


</style>
