'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-tab", class: {
        'ic-tab--filter': _vm.type === 'filter'
      } }, [_c('div', { staticClass: "ic-tab__inner" }, _vm._l(_vm.items, function (item, index) {
      return _c('div', { key: index, staticClass: "ic-tab__item", class: {
          'ic-tab__item--active': index == _vm.currentActive
        }, on: { "click": function click($event) {
            _vm.clickItem(index);
          } } }, [_vm.type === 'filter' ? [_c('span', { staticClass: "ic-tab__text" }, [_vm._v(_vm._s(item.title))]), _c('i', { staticClass: "ic-arrow" })] : _vm._e(), _vm.type === 'normal' ? [_vm._v("\n        " + _vm._s(item.title) + "\n      ")] : _vm._e()], 2);
    })), _c('div', { staticClass: "ic-tab__content" }, [_vm._t("default")], 2)]);
  },

  name: 'ic-tab',

  props: {
    defaultActive: {
      type: [String, Number],
      default: 0
    },
    type: {
      type: String,
      default: 'normal' // filter
    }
  },
  computed: {
    active: function active() {
      return this.type !== 'filter' ? this.defaultActive : '';
    }
  },
  data: function data() {
    return {
      items: [],
      currentActive: this.active
    };
  },

  methods: {
    clickItem: function clickItem(index) {
      this.currentActive = index;
      this.$emit('click-item', index);
    }
  }
};