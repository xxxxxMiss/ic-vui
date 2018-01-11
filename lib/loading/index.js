'use strict';

exports.__esModule = true;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _loading = require('./loading.vue');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadingVm = void 0;

var defaultOptions = {
  visible: true,
  text: '',
  spinnerType: 'default',
  color: 'white',
  close: function close() {
    loadingVm && (loadingVm.visible = false);
  }
};

var createInstance = function createInstance() {
  if (!loadingVm) {
    var LoadingConstructor = _vue2.default.extend(_loading2.default);
    loadingVm = new LoadingConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(loadingVm.$el);
  }
};

var Loading = function Loading(options) {
  createInstance();

  options = typeof options === 'string' ? { text: options } : options;
  // trigger update
  (0, _assign2.default)(loadingVm, defaultOptions, options);
  return loadingVm;
};

_vue2.default.prototype.$loading = function (options) {
  if (typeof options === 'string') options = { text: options };
  return Loading(options);
};

exports.default = Loading;