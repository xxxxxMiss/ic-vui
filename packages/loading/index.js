import Vue from 'vue'
import loadingOptions from './loading.vue'

let loadingVm

const defaultOptions = {
  visible: true,
  text: '',
  spinnerType: 'default',
  color: 'white',
  close () {
    loadingVm && (loadingVm.visible = false)
  }
}

const createInstance = () => {
  if (!loadingVm) {
    const LoadingConstructor = Vue.extend(loadingOptions)
    loadingVm = new LoadingConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(loadingVm.$el)
  }
}

const Loading = options => {
  createInstance()

  options = typeof options === 'string' ? { text: options } : options
  // trigger update
  Object.assign(loadingVm, defaultOptions, options)
  return loadingVm
}

Vue.prototype.$loading = options => {
  if (typeof options === 'string')
  options = { text: options }
  return Loading(options)
}

export default Loading
