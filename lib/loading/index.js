'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-loading" }, [_c('div', { staticClass: "ic-loading__inner" }, [_c('ic-spinner', { attrs: { "color": _vm.color, "type": _vm.spinnerType } }), _vm.text ? _c('span', { staticClass: "ic-loading__text" }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()], 1)]);
  },

  name: 'ic-loading',

  props: {
    text: String,
    spinnerType: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: 'white'
    }
  }
};