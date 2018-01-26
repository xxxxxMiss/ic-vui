'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "ic-spinner", class: ['ic-spinner--' + _vm.type] }, [_vm.type === 'default' ? _c('span', { staticClass: "ic-spinner__inner", style: { color: _vm.colors[0] } }, _vm._l(12, function (i) {
      return _c('i', { key: i });
    })) : _vm._e(), _vm.type === 'circle' ? _c('span', { staticClass: "ic-spinner__inner", style: {
        'border-color': _vm.colors[0],
        'border-left-color': 'transparent'
      } }) : _vm._e(), _vm.type === 'gradient' ? _c('span', { staticClass: "ic-spinner__inner" }) : _vm._e(), _vm.type === 'crash-ball' ? _c('span', { staticClass: "ic-spinner__inner" }, _vm._l(['top', 'right', 'bottom', 'left'], function (val, index) {
      return _c('i', { class: ['ic-spinner--' + val], style: {
          'background-color': _vm.colors[index]
        } });
    })) : _vm._e()]);
  },

  name: 'ic-spinner',

  props: {
    type: {
      type: String,
      default: 'default' // crash-ball, circle
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium' // small
    }
  },
  computed: {
    colors: function colors() {
      return this.color.trim().split(/\s+/);
    }
  }
};