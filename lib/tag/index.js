'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-tag", class: ['ic-tag--' + _vm.type, 'ic-tag--' + _vm.size] }, [_vm._t("default"), _vm.closable ? _c('ic-icon') : _vm._e()], 2);
  },

  name: 'ic-tag',

  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
};