<template>

    <div>
        <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">

        <button @click="show = !show">
            Toggle render
        </button>
        <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight">
            <p v-if="show">hello</p>
        </transition>
    </div>


</template>

<script>

    export default{
        data(){
            return {
                msg: "动画测试",
                show: true
            }
        }
    }
</script>

<style>

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}


</style>