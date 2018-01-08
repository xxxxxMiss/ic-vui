'use strict';

exports.__esModule = true;

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
  center: false,
  title: '',
  message: '',
  visible: true,
  category: 'confirm',
  inputType: 'text',
  inputPlaceholder: '',
  callback: function callback() {}
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
  modalVm.visible = true;
  return modalVm;
};

var modal = function modal(options) {
  createInstance();
  (0, _assign2.default)(modalVm, options);
  return modalVm;
};

_vue2.default.prototype.$alert = function (options) {
  if (typeof options === 'string') {
    options = { message: options };
  }
  options = (0, _assign2.default)(defaultOptions, options, {
    category: 'alert'
  });

  return modal(options);
};

_vue2.default.prototype.$confirm = function (options) {
  if (typeof options === 'string') {
    options = { message: options };
  }
  options = (0, _assign2.default)(defaultOptions, options, {
    category: 'confirm'
  });

  return modal(options);
};

exports.default = modal;