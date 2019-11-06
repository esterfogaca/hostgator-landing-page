import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const eventHub = new Vue();

new Vue({
  eventHub,
  render: h => h(App)
}).$mount("#app");
