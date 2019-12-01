import 'iview/dist/styles/iview.css'; // 使用 CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import './assets/css/style.css'
import 'vue-loading-overlay/dist/vue-loading.css';


import Vue from 'vue'
import $ from 'jquery'
import App from './App.vue'
import store from './store'
import router from './router'
import iView from 'iview';
import plugs from './plugin/plugin.js'
import Loading from 'vue-loading-overlay';

Vue.use(Loading, {
  color: '#007BFF',
  loader: 'spinner',
  width: 135,
  height: 135,
  backgroundColor: '#ffffff',
  opacity: 0.5,
  zIndex: 999,
}, {})

Vue.use(plugs)

Vue.use(iView);
// Vue.use(toastr);

import 'bootstrap/dist/js/bootstrap.js'

import filters from './filter'

Object.keys(filters).forEach(a => {
  Vue.filter(a, filters[a])
});

Vue.config.productionTip = false




new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')