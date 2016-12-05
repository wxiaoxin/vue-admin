<template>
    <section class="app-main">

        <level-bar></level-bar>

        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>

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
    margin-top: 50px;
    margin-left: 180px;
    background: #f5f5f5;
    height: 100%;
    padding-left: 20px;
    padding-top: 20px;
}




</style>
