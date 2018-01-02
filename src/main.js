import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components'

Vue.config.productionTip = false

Object.keys(components).forEach(key => Vue.component(components[key].name, components[key]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
