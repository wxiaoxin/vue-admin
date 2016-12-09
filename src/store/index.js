import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 仓库
export default new Vuex.Store({
    state: {
        showSidebar: false
    },
    mutations: {
        toggleSidebar (state, showSidebar) {
            state.showSidebar = showSidebar;
        }
    },
    actions: {
        // 延迟500毫秒更改sidebar状态
        toggleSidebar (context, showSidebar) {
            setTimeout(() => {
                context.commit("toggleSidebar", showSidebar);
            }, 500);
        }
    }
});
