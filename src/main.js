import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";
import Toast from "components/common/toast/index.js";
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false

// $bus事件仓库,事件总线,管理事件
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(Toast);

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyLoad, {
  loading: require("assets/img/common/placeholder.png")
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
