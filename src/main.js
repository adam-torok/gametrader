import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes.js';

Vue.use(VueAxios, axios)

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes:Routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
