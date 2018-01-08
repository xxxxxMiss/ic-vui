'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "ic-checkbox", class: {
        'ic-checkbox--checked': _vm.value,
        'ic-checkbox--disabled': _vm.disabled,
        'ic-checkbox--round': _vm.round
      } }, [_c('span', { staticClass: "ic-checkbox__wrapper" }, [_c('span', { staticClass: "ic-checkbox__inner" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "ic-checkbox__input", attrs: { "type": "checkbox", "disabled": _vm.disabled }, domProps: { "checked": Array.isArray(_vm.currentValue) ? _vm._i(_vm.currentValue, null) > -1 : _vm.currentValue }, on: { "change": function change($event) {
          var $$a = _vm.currentValue,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$el.checked) {
              $$i < 0 && (_vm.currentValue = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.currentValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.currentValue = $$c;
          }
        } } })]), _vm.$slots.default ? _c('span', { staticClass: "ic-checkbox__label" }, [_vm._t("default")], 2) : _vm._e()])]);
  },

  name: 'ic-checkbox',

  props: {
    value: {
      type: Boolean,
      required: true,
      default: false
    },
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    currentValue: function currentValue(newVal) {
      this.$emit('input', newVal);
    }
  }
};