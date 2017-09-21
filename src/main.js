import Vue from 'vue'
import App from './App'
import Hack from './components/hack'
import Index from './components/index'
import router from './router'

Vue.config.productionTip = false

Vue.component('hack', Hack)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Hack, Index }
})
