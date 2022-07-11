import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

// 全局过滤器
Vue.filter("reverse", (val, s) => val.split("").reverse().join(s));

new Vue({
  render: (h) => h(App),
}).$mount("#app");
