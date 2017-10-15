// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import * as VueGoogleMaps from 'vue2-google-maps'
// import '@/theme/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueFire)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBReCymPX_XOfraeYKpls-PnI6B8kcfV6o',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

// var Highcharts = require('highcharts')
// console.log('Highcharts', Highcharts)
// Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

// Create the chart

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
