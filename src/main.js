// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// var VueFire = require('vuefire')
// var Firebase = require('firebase')
// explicit installation required in module environments
// Vue.use(VueFire)

// var firebaseApp = firebase.initializeApp({ ... })
// var db = firebaseApp.database()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
