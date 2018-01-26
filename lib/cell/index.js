"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-cell" }, [_vm._t("all", [_c('div', { staticClass: "ic-cell__inner" }, [_c('div', { staticClass: "ic-cell__left" }, [_vm._t("prefix", [_vm.icon ? _c('ic-icon', { attrs: { "name": _vm.icon } }) : _vm._e()]), _vm._t("title", [_c('span', { staticClass: "ic-cell__title" }, [_vm._v(_vm._s(_vm.title))])])], 2), _vm._t("suffix", [_c('div', { staticClass: "ic-cell__right" }, [_c('span', [_vm._v(_vm._s(_vm.content))]), _vm.showArrow ? _c('ic-icon', { attrs: { "name": "arrow" } }) : _vm._e()], 1)])], 2)]), _vm._t("bottom")], 2);
  },

  name: 'ic-cell',

  props: {
    title: String,
    content: String,
    icon: String,
    showArrow: {
      type: Boolean,
      default: false
    }
  }
};