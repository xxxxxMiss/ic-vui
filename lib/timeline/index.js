'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "ic-timeline", class: { 'ic-timeline--last': _vm.lastLine } }, [_vm._t("title", [_vm.title ? _c('li', { staticClass: "ic-timeline__header" }, [_c('ic-icon', { attrs: { "name": _vm.icon } }), _c('span', { staticClass: "ic-timeline__title" }, [_vm._v(_vm._s(_vm.title))])], 1) : _vm._e()]), _vm._l(_vm.data, function (item, index) {
      return _c('li', { key: index, staticClass: "ic-timeline__item" }, [_c('div', { staticClass: "ic-timeline__progress", class: ['ic-timeline__progress--' + _vm.lineType], style: { color: _vm.lineColor } }, [_c('i', { class: ['glyph__' + _vm.dots[index]], style: { color: _vm.dotColor } })]), _c('div', { staticClass: "ic-timeline__content" }, [_c('div', { staticClass: "ic-timeline__inner" }, [_vm._t("default", null, { item: item, index: index })], 2)])]);
    })], 2);
  },

  name: 'ic-timeline',

  props: {
    data: Array,
    dotColor: String,
    dotType: {
      type: String,
      default: 'circle' // fail, success
    },
    dotTypes: Object,
    lineColor: String,
    lineType: {
      type: String,
      default: 'dashed' // solid
    },
    lastLine: {
      type: Boolean,
      default: false
    },
    title: String,
    icon: String
  },
  computed: {
    dots: function dots() {
      var _this = this;

      var ret = [];
      for (var i = 0, l = this.data.length; i < l; i++) {
        ret[i] = this.dotType;
      }
      if (this.dotTypes) {
        (0, _keys2.default)(this.dotTypes).forEach(function (index) {
          ret[index] = _this.dotTypes[index];
        });
      }
      return ret;
    }
  }
};