'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _modal = require('./modal.vue');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
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
  callback: null,
  cancel: null
};

var modalVm = void 0;

var createInstance = function createInstance() {
  if (!modalVm) {
    var ModalConstructor = _vue2.default.extend(_modal2.default);
    modalVm = new ModalConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(modalVm.$el);
  }
  return modalVm;
};

var Modal = function Modal(options) {
  createInstance();
  (0, _assign2.default)(modalVm, options);
  return modalVm;
};

_vue2.default.prototype.$alert = function (message, title, options) {
  var callback = null;
  if ((typeof title === 'undefined' ? 'undefined' : (0, _typeof3.default)(title)) === 'object') {
    options = title;
    title = '';
  }
  if (typeof title === 'function') {
    callback = title;
    title = '';
  }
  if (typeof options === 'function') {
    callback = options;
  }
  var opt = {
    message: message,
    title: title,
    callback: callback,
    category: 'alert'
  };
  return Modal((0, _assign2.default)(defaultOptions, opt, options));
};

_vue2.default.prototype.$confirm = function (message, title, options) {
  var callback = null;
  if ((typeof title === 'undefined' ? 'undefined' : (0, _typeof3.default)(title)) === 'object') {
    options = title;
    title = '';
  }
  if (typeof title === 'function') {
    callback = title;
    title = '';
  }
  if (typeof options === 'function') {
    callback = options;
  }
  var opt = {
    message: message,
    title: title,
    callback: callback,
    category: 'confirm'
  };
  return Modal((0, _assign2.default)(defaultOptions, opt, options));
};

_vue2.default.prototype.$prompt = function (message, title, options) {
  var callback = null;
  if ((typeof title === 'undefined' ? 'undefined' : (0, _typeof3.default)(title)) === 'object') {
    options = title;
    title = '';
  }
  if (typeof title === 'function') {
    callback = title;
    title = '';
  }
  if (typeof options === 'function') {
    callback = options;
  }
  var opt = {
    message: message,
    title: title,
    callback: callback,
    category: 'prompt'
  };
  if (options.inputValue) {
    defaultOptions.value = options.inputValue;
  }
  return Modal((0, _assign2.default)(defaultOptions, opt, options));
};

exports.default = Modal;