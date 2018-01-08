'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('header', { staticClass: "ic-header" }, [_c('div', { staticClass: "ic-header__left" }, [_c('ic-icon', { attrs: { "name": _vm.leftIcon } }), _vm.leftText ? _c('span', [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()], 1), _c('div', { staticClass: "ic-header__title" }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _c('div', { staticClass: "ic-header__right" }, [_vm.rightIcon ? _vm._l(_vm.rightOption, function (val, index) {
      return _c('ic-icon', { key: index, attrs: { "name": val } });
    }) : _vm._e(), _vm.rightText ? _c('span', [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()], 2)]);
  },

  name: 'ic-header',

  props: {
    title: String,
    leftText: String,
    leftIcon: String,
    rightIcon: [String, Array],
    rightText: String
  },
  computed: {
    rightOption: function rightOption() {
      return typeof this.rightIcon === 'string' ? [this.rightIcon] : this.rightIcon;
    }
  }
};