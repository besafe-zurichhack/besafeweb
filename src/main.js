// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBReCymPX_XOfraeYKpls-PnI6B8kcfV6o'
})

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueFire)
// Geocode an address.
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function (err, response) {
  if (!err) {
    console.log(response.json.results)
  }
  console.log('Error ', err)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
