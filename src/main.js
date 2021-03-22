import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import icons from "v-svg-icons";

import BaseCard from "./components/ui/BaseCard.vue";

Vue.use(BootstrapVue);
Vue.component('base-card', BaseCard);
Vue.component("icon", icons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
