'use strict';

exports.__esModule = true;

var _props;

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-input", class: ['ic-input--' + _vm.size, {
        'ic-input--round': _vm.round,
        'ic-input--prefix': _vm.prefixIcon,
        'ic-input--suffix': _vm.suffixIcon || _vm.clearable,
        'ic-input--timer': _vm.timer
      }] }, [_vm._t("prepend"), _c('div', { staticClass: "ic-input__inner" }, [_vm.prefixIcon ? _c('ic-icon', { staticClass: "ic-icon-prefix", attrs: { "name": _vm.prefixIcon } }) : _vm._e(), _vm.type === 'checkbox' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "ic-input__input", attrs: { "readonly": _vm.readonly, "placeholder": _vm.placeholder, "name": _vm.name, "autofocus": _vm.autofocus, "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.currentValue) ? _vm._i(_vm.currentValue, null) > -1 : _vm.currentValue }, on: { "blur": _vm.onBlur, "focus": _vm.onFocus, "change": function change($event) {
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
        } } }) : _vm.type === 'radio' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "ic-input__input", attrs: { "readonly": _vm.readonly, "placeholder": _vm.placeholder, "name": _vm.name, "autofocus": _vm.autofocus, "type": "radio" }, domProps: { "checked": _vm._q(_vm.currentValue, null) }, on: { "blur": _vm.onBlur, "focus": _vm.onFocus, "change": function change($event) {
          _vm.currentValue = null;
        } } }) : _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "ic-input__input", attrs: { "readonly": _vm.readonly, "placeholder": _vm.placeholder, "name": _vm.name, "autofocus": _vm.autofocus, "type": _vm.type }, domProps: { "value": _vm.currentValue }, on: { "blur": _vm.onBlur, "focus": _vm.onFocus, "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.currentValue = $event.target.value;
        } } }), _vm.suffixIcon ? _c('ic-icon', { staticClass: "ic-icon-suffix", attrs: { "name": _vm.suffixIcon }, on: { "click": _vm.clickSuffix } }) : _vm._e(), _c('ic-icon', { directives: [{ name: "show", rawName: "v-show", value: !_vm.suffixIcon && _vm.clearable && _vm.value, expression: "!suffixIcon && clearable && value" }], staticClass: "ic-icon-suffix", attrs: { "name": "clear" }, on: { "click": _vm.onClear } }), _vm.timer ? _c('ic-button', { attrs: { "timer": "", "text": "" }, on: { "click": _vm.timerClick } }) : _vm._e()], 1), _vm._t("append")], 2);
  },

  name: 'ic-input',

  props: (_props = {
    prefixIcon: String,
    suffixIcon: String,
    size: {
      type: String,
      default: 'medium' // large, medium, small
    },
    clearable: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    timer: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: Number,
      default: 500
    },
    value: [String, Number],
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  }, _props['timer'] = {
    type: Boolean,
    default: false
  }, _props.name = String, _props),
  computed: {
    currentValue: {
      set: function set(v) {
        this.$emit('input', v);
      },
      get: function get() {
        return this.value;
      }
    }
  },
  methods: {
    onClear: function onClear() {
      this.currentValue = '';
    },
    onFocus: function onFocus(e) {
      this.$emit('focus', e);
    },
    onBlur: function onBlur(e) {
      this.$emit('blur', e);
    },
    clickSuffix: function clickSuffix(e) {
      this.$emit('click-suffix', e);
    },
    timerClick: function timerClick(e) {
      this.$emit('timer-click', e);
    }
  }
};