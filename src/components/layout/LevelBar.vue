<template>

    <section class="app-level-bar">
        <div class="container-fluid">

            <ol class="breadcrumb">
                <li v-for="(p, index) in pathArr">
                    <router-link :to="pathArr[index]">{{pathArr[index]}}</router-link>
                </li>
            </ol>

        </div>

    </section>

</template>

<script>
    export default{
        data(){
            return {
                title: "",
                path: this.$route.path,
                pathArr: [],
            }
        },
        watch: {
            $route (val, oldVal) {
                this.path = val.path;
                let tempPathArr = val.path.split("/");
                this.pathArr = tempPathArr.slice(1, tempPathArr.length);
            }
        }
    }
</script>

<style>


</style>