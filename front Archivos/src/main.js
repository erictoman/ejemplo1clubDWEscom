import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "../node_modules/bulma/css/bulma.min.css";
import VueGamepad from "vue-gamepad";

Vue.use(VueAxios, axios);
Vue.use(VueGamepad);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
