'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "ic-badge", class: {
        'ic-badge--dot': !_vm.$slots.default
      } }, [_vm._t("default")], 2);
  },

  name: 'ic-badge',

  props: {
    blink: {
      type: Boolean,
      default: false
    }
  }
};