"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', _vm._g({ staticClass: "van-icon", class: "van-icon-" + _vm.name }, _vm.$listeners), [_vm._t("default"), _vm.info ? _c('div', { staticClass: "van-icon__info" }, [_vm._v(_vm._s(_vm.info))]) : _vm._e()], 2);
  },

  name: 'ic-icon',

  props: {
    name: String,
    info: String
  }
};