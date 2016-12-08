/**
 * Created by wxiao on 2016/12/6.
 */

export default {

    install(Vue) {

        /*自定义全局属性*/
        Vue.prototype.$myName = "zhagnsan";

        Vue.prototype.$sidebarIsShow = true;

        /*自定义全局方法*/
        Vue.prototype.checkUserName = (value) => {
            if (/\w{6,20}/.test(value)) {
                return true;
            } else {
                return false;
            }
        };

    }
}