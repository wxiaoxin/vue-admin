/**
 * Created by wxiao on 2016/12/8.
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // 状态
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    // 修改
    mutations: {
        // 事件类型 和 回调函数
        increment (state) {
            state.count++;
        },
        decrement (state) {
            state.count--;
        },
        // 提交载荷
        increWithPayLoad (state, payLoad) {
            state.count += payLoad.amount;
        }
    },
    // getters
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodoCount: (state, getters) => {
            return getters.doneTodos.length;
        }
    },
    // action
    actions: {
        incrementAction (context) {
            context.commit("increment");
        },
        // 异步
        asyncIncrementAction (context, payLoad) {
            setTimeout(() => {
                context.commit("increWithPayLoad", payLoad);
            }, 1500);
        }
    }
});
