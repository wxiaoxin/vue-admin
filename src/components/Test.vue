<template>

    <div>
        <button type="button" @click="start">start</button>

        <button type="button" @click="done">done</button>

        <h4>{{count}}</h4>

        <button type="button" @click="test">提交事件</button>

        <button type="button" @click="test2">载荷10提交</button>

        <button type="button" @click="test3">对象风格的载荷5提交</button>

        <button type="button" @click="test4">分发action</button>

        <button type="button" @click="test5">分发异步action</button>

    </div>

</template>

<script>

    import NProgress from "nprogress";

    export default{
        data(){
            return {
                msg: "动画测试",
                show: true,
            }
        },
        computed: {
            count () {
                return this.$store.state.count;
            }
        },
        methods: {
            start: function () {
                this.$Progress.start();
            },
            done: function () {
                this.$Progress.finish();
            },
            test () {
                this.$store.commit("increment");
                console.log(this.$store.state.count);
            },
            test2 () {
                this.$store.commit("increWithPayLoad", {
                    amount: 10
                });
            },
            test3 () {
                this.$store.commit({
                    type: "increWithPayLoad",
                    amount: 5
                })
            },
            test4 () {
                this.$store.dispatch("incrementAction");
            },
            test5 () {
                this.$store.dispatch("asyncIncrementAction", {
                    amount: 10
                });
            }
        },
        created() {
            NProgress.done();
        }
    }
</script>

<style>


</style>