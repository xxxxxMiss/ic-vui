'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-filter" }, [_c('div', { staticClass: "ic-filter__panel" }, [_c('div', { staticClass: "ic-filter__item", on: { "click": _vm.filterItemClick } }, [_c('div', { staticClass: "ic-filter__row" }, [_vm._v(_vm._s(_vm.item[_vm.labelKey]))]), _c('i', { staticClass: "ic-filter__checkbox glyph__checkbox--primary", style: {
        'display': _vm.itemActiveId === _vm.item.key ? 'inline-block' : 'none'
      } })])])]);
  },

  name: 'ic-filter',

  props: {
    item: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemActiveId: {
      type: [String, Number],
      default: 0
    },
    labelKey: {
      type: String,
      default: 'label'
    }
  },
  methods: {
    filterItemClick: function filterItemClick() {
      this.$emit('filter-item-click');
    }
  }
};