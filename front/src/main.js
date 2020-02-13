import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
axios.baseURL = "127.0.0.1:8081";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
