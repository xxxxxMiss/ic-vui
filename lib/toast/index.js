'use strict';

exports.__esModule = true;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _toast = require('./toast.vue');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toastVm = void 0;

var defaultOptions = {
  duration: 3000,
  visible: true,
  position: 'middle',
  icon: '',
  close: function close() {
    toastVm.timer && clearTimeout(toastVm.timer);
    toastVm.timer = null;
    toastVm.visible = false;
  }
};

var createInstance = function createInstance() {
  if (!toastVm) {
    var ToastConstructor = _vue2.default.extend(_toast2.default);
    toastVm = new ToastConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(toastVm.$el);
  }
};

var Toast = function Toast(options) {
  createInstance();

  options = typeof options === 'string' ? { message: options, icon: '' } : options;
  options = (0, _assign2.default)(defaultOptions, options);
  // trigger update
  (0, _assign2.default)(toastVm, options);

  toastVm.timer = setTimeout(function () {
    toastVm.close();
  }, toastVm.duration);

  return toastVm;
};

exports.default = Toast;