import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
Vue.use(Mint);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.prototype.bus = new Vue();