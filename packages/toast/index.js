import Vue from 'vue'
import ToastOptions from './toast.vue'

let toastVm

const defaultOptions = {
  duration: 3000,
  visible: true,
  position: 'middle',
  icon: '',
  close () {
    toastVm.timer && clearTimeout(toastVm.timer)
    toastVm.timer = null
    toastVm.visible = false
  }
}

const createInstance = () => {
  if (!toastVm) {
    const ToastConstructor = Vue.extend(ToastOptions)
    toastVm = new ToastConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(toastVm.$el)
  }
}

const Toast = options => {
  createInstance()

  options = typeof options === 'string' ? { message: options, icon: '' } : options
  options = Object.assign(defaultOptions, options)
  // trigger update
  Object.assign(toastVm, options)

  toastVm.timer = setTimeout(() => {
    toastVm.close()
  }, toastVm.duration)

  return toastVm
}

export default Toast
