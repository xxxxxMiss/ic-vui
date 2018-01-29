import '../packages/theme/src/index.styl'
import 'reset.css'
import Vue from 'vue'
// import zhCN from 'vee-validate/dist/locale/zh_CN'
import icValidateMsg from './local'
import { Validator } from 'vee-validate'
import App from './App'
import router from './router'
import components from '../packages'

Vue.config.productionTip = false

// Validator.localize('zh_CN', zhCN)
Validator.localize('ic_validator', icValidateMsg)
// Vue.use(VeeValidate)

Object.keys(components).forEach(key => Vue.component(components[key].name, components[key]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
