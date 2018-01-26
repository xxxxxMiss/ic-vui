'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('header', { staticClass: "ic-header", class: { 'ic-header--divider': _vm.showDivider }, style: {
        'background-color': _vm.theme,
        'color': _vm.color
      } }, [_c('div', { staticClass: "ic-header__left", on: { "click": _vm.clickLeft } }, [_c('ic-icon', { attrs: { "name": _vm.leftIcon } }), _vm.leftText ? _c('span', [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()], 1), _c('div', { staticClass: "ic-header__title" }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _c('div', { staticClass: "ic-header__right" }, [_vm.rightIcon ? _vm._l(_vm.rightOption, function (val, index) {
      return _c('ic-icon', { key: index, attrs: { "name": val }, on: { "click": function click($event) {
            _vm.clickRight($event, index);
          } } });
    }) : _vm._e(), _vm.rightText ? _c('span', { on: { "click": _vm.clickRight } }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()], 2)]);
  },

  name: 'ic-header',

  props: {
    theme: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#333'
    },
    title: String,
    leftText: String,
    leftIcon: String,
    rightIcon: [String, Array],
    rightText: String,
    showDivider: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    rightOption: function rightOption() {
      return typeof this.rightIcon === 'string' ? [this.rightIcon] : this.rightIcon;
    }
  },
  methods: {
    clickLeft: function clickLeft(e) {
      this.$emit('click-left', e);
    },
    clickRight: function clickRight(e, index) {
      this.$emit('click-right', e, index);
    }
  }
};