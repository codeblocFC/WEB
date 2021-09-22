import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import {uppering,removingLine} from '@/filters';
import router from '@/router';

Vue.config.productionTip = false

Vue.filter('uppering',uppering);
Vue.filter('removingLine',removingLine);
Vue.use(BootstrapVue);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
