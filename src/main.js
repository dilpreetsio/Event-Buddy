import Vue from 'vue'
import VueFetch from 'vue-fetch'
import App from './App'
import _ from 'lodash'
import VueLodash from 'vue-lodash'
import Item from './components/item'
import Header from './components/header'
import Footer from './components/footer'
import Index from './components/index'
import GitHubButtons from './components/githubbuttons.vue'
import router from './router'
import vueScrollto from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(VueLodash, _)
Vue.use(VueFetch)
Vue.use(vueScrollto)

Vue.component('header-component', Header)
Vue.component('footer-component', Footer)
Vue.component('github-buttons-component', GitHubButtons)
Vue.component('item', Item)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Index }
})
