"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "ic-tabbar" }, [_vm._t("default")], 2);
  },

  name: 'ic-tabbar',

  props: {
    defaultActive: {
      type: [String, Number],
      default: 0
    }
  },
  data: function data() {
    return {
      currentActive: this.defaultActive,
      bars: []
    };
  }
};