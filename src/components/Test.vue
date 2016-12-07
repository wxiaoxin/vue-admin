<template>

    <div>
        <button type="button" @click="start">start</button>

        <button type="button" @click="done">done</button>

    </div>

</template>

<script>

    import NProgress from "nprogress";

    export default{
        data(){
            return {
                msg: "动画测试",
                show: true
            }
        },
        methods: {
            start: function () {
                this.$Progress.start();
            },
            done: function () {
                this.$Progress.finish();
            }
        },
        /*自定义组件局部指令*/
        directives: {
            /*指令的名称*/
            focus2: {
                // 指令的定义，el为指令作用的dom元素
                inserted: function (el) {
                    // 聚焦元素
                    el.focus();
                }
            }
        },
        created() {
            NProgress.done();
        }
    }
</script>

<style>


</style>