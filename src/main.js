// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'

import routes from './base/router'
import store from './vuex/store'
import Vuex from 'vuex'

const router = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
// 在Vue中全局使用mint-ui
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
