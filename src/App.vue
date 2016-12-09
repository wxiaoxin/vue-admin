<template>
    <div id="app">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <app-main></app-main>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from "./components/layout/Header.vue"
    import AppSidebar from "./components/layout/Sidebar.vue"
    import AppMain from "./components/layout/AppMain.vue"
    import AppFooter from "./components/layout/Footer.vue"

    export default {
        name: 'app',
        data () {
            return {
                show: true
            }
        },
        components: {
            AppHeader, AppSidebar, AppMain, AppFooter
        }
    }
</script>