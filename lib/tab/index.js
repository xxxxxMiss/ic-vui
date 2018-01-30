'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-tab", class: {
        'ic-tab--divider': _vm.showDivider,
        'ic-tab--disperse': _vm.isDisperse
      } }, [_c('div', { staticClass: "ic-tab__inner" }, _vm._l(_vm.children, function (item, index) {
      return _c('div', { key: index, staticClass: "ic-tab__item", class: {
          'ic-tab__item--active': index === _vm.currentActive
        }, style: _vm.itemStyle, on: { "click": function click($event) {
            _vm.clickItem(index);
          } } }, [_vm._v("\n      " + _vm._s(item.title) + "\n    ")]);
    })), _c('div', { staticClass: "ic-tab__content" }, [_vm._t("default")], 2)]);
  },

  name: 'ic-tab',

  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'normal'
    },
    showDivider: {
      type: Boolean,
      default: true
    },
    cursorType: {
      type: String,
      default: 'disperse' // line
    },
    itemWidth: String
  },
  computed: {
    isDisperse: function isDisperse() {
      return this.cursorType === 'disperse';
    },
    itemStyle: function itemStyle() {
      return {
        width: this.itemWidth ? this.itemWidth : 100 / this.children.length + '%'
      };
    }
  },
  data: function data() {
    return {
      children: [],
      currentActive: this.defaultActive
    };
  },

  watch: {
    currentActive: function currentActive(newVal) {
      this.$emit('change', newVal);
    }
  },
  methods: {
    clickItem: function clickItem(index) {
      this.currentActive = index;
      this.$emit('click-item', this.currentActive);
    }
  }
};