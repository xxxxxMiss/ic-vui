"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "toast-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "ic-toast", class: ['ic-toast--' + _vm.position, {
        'ic-toast--icon': _vm.icon
      }] }, [_vm.icon ? _c('ic-icon', { attrs: { "name": _vm.icon } }) : _vm._e(), _c('span', [_vm._v(_vm._s(_vm.message))])], 1)]);
  },

  name: 'ic-toast',
  props: {
    position: {
      type: String,
      default: 'middle' // top bottom
    },
    message: String,
    icon: String,
    duration: Number
  },
  data: function data() {
    return {
      visible: false
    };
  }
};