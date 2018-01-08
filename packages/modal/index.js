import Vue from 'vue'
import modalOptions from './modal.vue'

const defaultOptions = {
  showClose: true,
  cancelButtonText: '取消',
  confirmButtonText: '确定',
  showCancelButton: true,
  showConfirmButton: true,
  closeOnClickMask: true,
  center: false,
  title: '',
  message: '',
  visible: true,
  category: 'confirm',
  inputType: 'text',
  inputPlaceholder: '',
  callback () {}
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
  modalVm.visible = true
  return modalVm
}

const modal = options => {
  createInstance()
  Object.assign(modalVm, options)
  return modalVm
}

Vue.prototype.$alert = options => {
  if (typeof options === 'string' ) {
    options = { message: options }
  }
  options = Object.assign(defaultOptions, options, {
    category: 'alert'
  })

  return modal(options)
}

Vue.prototype.$confirm = options => {
  if (typeof options === 'string') {
    options = { message: options }
  }
  options = Object.assign(defaultOptions, options, {
    category: 'confirm'
  })

  return modal(options)
}

export default modal

