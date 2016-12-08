<template>
    <div id="app">
        <transition name="fade">
            <app-header></app-header>
        </transition>

        <transition name="slide-fade">
            <app-sidebar :show="show"></app-sidebar>
        </transition>

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

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

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
