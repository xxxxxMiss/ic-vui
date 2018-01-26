"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "modal-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "ic-filter", on: { "click": _vm.close } }, [_c('div', { staticClass: "ic-filter__panel", style: { 'max-height': _vm.maxHeight } }, _vm._l(_vm.items, function (item, index) {
      return _c('div', { key: index, staticClass: "ic-filter__item", on: { "click": function click($event) {
            $event.stopPropagation();_vm.filterItemClick(item, index);
          } } }, [_c('div', { staticClass: "ic-filter__row", class: {
          'ic-filter__row--active': _vm.currentActive === item[_vm.valueKey]
        } }, [item.icon ? _c('ic-icon', { attrs: { "name": item.icon } }) : _vm._e(), _vm._v("\n          " + _vm._s(item[_vm.labelKey]) + "\n        ")], 1), _c('i', { staticClass: "ic-filter__checkbox glyph__checkbox--primary", style: {
          'display': _vm.currentActive === item[_vm.valueKey] ? 'inline-block' : 'none'
        } })]);
    }))])]);
  },

  name: 'ic-filter',

  props: {
    items: Array,
    defaultActive: {
      type: [String, Number],
      default: 0
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: [String, Number],
      default: 'value'
    },
    maxHeight: {
      type: String,
      default: '70%'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentActive: this.defaultActive
    };
  },

  methods: {
    filterItemClick: function filterItemClick(item, index) {
      this.currentActive = item[this.valueKey];
      this.close();
      this.$emit('filter-item-click', {
        item: item,
        index: index,
        valueKey: this.valueKey,
        labelKey: this.labelKey
      });
    },
    close: function close() {
      this.$emit('update:visible', false);
    }
  }
};