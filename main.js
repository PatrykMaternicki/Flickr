import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import Modules from './modules/Forms-Module.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from './store/Store.js';


Vue.use(BootstrapVue)

// console.log(Store);
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
