'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-tab", class: {
        'ic-tab--filter': _vm.type === 'filter',
        'ic-tab--divider': _vm.showDivider,
        'ic-tab--disperse': _vm.isDisperse
      } }, [_c('div', { staticClass: "ic-tab__inner" }, [_vm._l(_vm.children, function (item, index) {
      return _c('div', { key: index, staticClass: "ic-tab__item", class: {
          'ic-tab__item--active': index === _vm.currentActive
        }, style: { width: 100 / _vm.children.length + '%' }, on: { "click": function click($event) {
            _vm.clickItem(index);
          } } }, [_vm.type === 'filter' ? [_c('span', { staticClass: "ic-tab__text" }, [_vm._v(_vm._s(item.title))]), _c('ic-icon', { attrs: { "name": "arrow-down" } })] : _vm._e(), _vm.type === 'normal' ? [_vm._v("\n        " + _vm._s(item.title) + "\n      ")] : _vm._e()], 2);
    }), _vm.type === 'normal' && _vm.cursorType !== 'disperse' ? _c('div', { staticClass: "ic-tab__cursor" }) : _vm._e()], 2), _c('div', { staticClass: "ic-tab__content" }, [_vm._t("default")], 2)]);
  },

  name: 'ic-tab',

  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'normal' // filter
    },
    showDivider: {
      type: Boolean,
      default: true
    },
    cursorType: {
      type: String,
      default: 'disperse' // line
    }
  },
  computed: {
    isDisperse: function isDisperse() {
      return this.type !== 'filter' && this.cursorType === 'disperse';
    }
  },
  data: function data() {
    return {
      children: [],
      currentActive: this.type !== 'filter' ? this.defaultActive : ''
    };
  },

  watch: {
    currentActive: function currentActive(newVal) {
      this.$emit('change', newVal);
    }
  },
  methods: {
    clickItem: function clickItem(index) {
      // if (this.type === 'filter') {
      //   if (this.currentActive === index) {
      //     this.currentActive = ''
      //   } else {
      //     this.currentActive = index
      //   }
      // } else {
      //   this.currentActive = index
      // }
      this.currentActive = index;
      this.$emit('click-item', this.currentActive);
    }
  }
};