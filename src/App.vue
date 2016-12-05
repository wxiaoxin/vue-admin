<template>
    <div id="app">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <app-main></app-main>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from "./components/layout/AppHeader.vue"
    import AppSidebar from "./components/layout/AppSidebar.vue"
    import AppMain from "./components/layout/AppMain.vue"
    import AppFooter from "./components/layout/AppFooter.vue"

    export default {
        name: 'app',
        components: {
             AppHeader, AppSidebar, AppMain, AppFooter
        }
    }
</script>

<style>
#app {

}


</style>
