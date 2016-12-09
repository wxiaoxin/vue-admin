<template>
    <div>
        <h1>{{msg}}</h1>
        <h1>{{id}}</h1>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                msg:"商品详情",
                id: this.$route.params.id
            }
        },
        created () {
        }
    }

</script>


<style>

</style>