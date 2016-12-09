<template>
    <div>
        <h1>{{title}}</h1>

        <h4>{{count}}</h4>

    </div>
</template>



<script>

    export default{
        data(){
            return{
                title:"主页",
                localCount: 100,
                count: this.$store.state.count,
            }
        },
    }

</script>
