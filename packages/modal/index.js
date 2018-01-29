import Vue from 'vue'
import modalOptions from './modal.vue'

const defaultOptions = {
  showClose: true,
  cancelButtonText: '取消',
  confirmButtonText: '确定',
  showCancelButton: true,
  showConfirmButton: true,
  closeOnClickMask: true,
  center: true,
  title: '',
  message: '',
  visible: true,
  category: 'confirm',
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  value: '',
  inputValidator: null,
  disabled: false,
  callback: null,
  cancel: null
}

let modalVm

const createInstance = () => {
  if (!modalVm) {
    const ModalConstructor = Vue.extend(modalOptions)
    modalVm = new ModalConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(modalVm.$el)
  }
  return modalVm
}

const Modal = (message, title, options, category) => {
  createInstance()
  let callback = null
  if (typeof title === 'object') {
    options = title
    title = ''
  }
  if (typeof title === 'function') {
    callback = title
    title = ''
  }
  if (typeof options === 'function') {
    callback = options
  }
  const opt = {
    message,
    title,
    callback,
    category
  }
  Object.assign(modalVm, defaultOptions, opt)
  return modalVm
}

Vue.prototype.$alert = (message, title, options) => {
  return Modal(message, title, options, 'alert')
}

Vue.prototype.$confirm = (message, title, options) => {
  return Modal(message, title, options, 'confirm')
}

Vue.prototype.$prompt = (message, title, options) => {
  return Modal(message, title, options, 'prompt')
}

export default Modal
