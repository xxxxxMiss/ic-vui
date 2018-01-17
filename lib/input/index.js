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
      }] }, [_vm._t("prepend"), _c('div', { staticClass: "ic-input__inner" }, [_vm.type !== 'textarea' ? [_vm.prefixIcon ? _c('ic-icon', { staticClass: "ic-icon-prefix", attrs: { "name": _vm.prefixIcon } }) : _vm._e(), _vm.type === 'checkbox' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "ic-input__input", style: _vm.style, attrs: { "readonly": _vm.readonly, "placeholder": _vm.placeholder, "name": _vm.name, "autofocus": _vm.autofocus, "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.currentValue) ? _vm._i(_vm.currentValue, null) > -1 : _vm.currentValue }, on: { "blur": _vm.onBlur, "focus": _vm.onFocus, "change": function change($event) {
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
        } } }) : _vm.type === 'radio' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "ic-input__input", style: _vm.style, attrs: { "readonly": _vm.readonly, "placeholder": _vm.placeholder, "name": _vm.name, "autofocus": _vm.autofocus, "type": "radio" }, domProps: { "checked": _vm._q(_vm.currentValue, null) }, on: { "blur": _vm.onBlur, "focus": _vm.onFocus, "change": function change($event) {
          _vm.currentValue = null;
        } } }) : _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "ic-input__input", style: _vm.style, attrs: { "readonly": _vm.readonly, "placeholder": _vm.placeholder, "name": _vm.name, "autofocus": _vm.autofocus, "type": _vm.type }, domProps: { "value": _vm.currentValue }, on: { "blur": _vm.onBlur, "focus": _vm.onFocus, "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.currentValue = $event.target.value;
        } } }), _vm.suffixIcon ? _c('ic-icon', { staticClass: "ic-icon-suffix", attrs: { "name": _vm.suffixIcon }, on: { "click": _vm.clickSuffix } }) : _vm._e(), _c('ic-icon', { directives: [{ name: "show", rawName: "v-show", value: _vm.clearable && _vm.value, expression: "clearable && value" }], staticClass: "ic-icon-suffix", attrs: { "name": "clean" }, on: { "click": _vm.onClear } }), _vm.timer ? _c('ic-button', { attrs: { "timer": "", "text": "" }, on: { "timer-end": _vm.timerEnd, "click": _vm.timerClick } }) : _vm._e()] : [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "textarea", staticClass: "ic-input__textarea", style: _vm.textareaStyle, attrs: { "readonly": _vm.readonly, "placeholder": _vm.placeholder, "name": _vm.name, "rows": _vm.rows, "autofocus": _vm.autofocus }, domProps: { "value": _vm.currentValue }, on: { "blur": _vm.onBlur, "focus": _vm.onFocus, "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.currentValue = $event.target.value;
        } } }), _c('div', { ref: "mirror", staticClass: "ic-input__textarea ic-textarea--mirror", attrs: { "contenteditable": "" } }, [_vm._v(_vm._s(_vm.currentValue))])]], 2), _vm._t("append")], 2);
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
  }, _props.timerEnd = {
    type: Function,
    default: function _default() {}
  }, _props.to = [String, Object], _props.name = String, _props.rows = {
    type: [String, Number],
    default: 3
  }, _props.autosize = {
    type: [Boolean, Object],
    default: false
  }, _props),
  computed: {
    currentValue: {
      set: function set(v) {
        this.resizeTextarea();
        this.$emit('input', v);
      },
      get: function get() {
        return this.value;
      }
    },
    style: function style() {
      return {
        paddingRight: this.clearable && this.value && this.suffixIcon ? '100px' : this.clearable && !this.value && this.suffixIcon ? '50px' : ''
      };
    }
  },
  data: function data() {
    return {
      textareaStyle: {}
    };
  },

  methods: {
    resizeTextarea: function resizeTextarea() {
      if (this.type === 'textarea') {
        var _$refs = this.$refs,
            mirror = _$refs.mirror,
            textarea = _$refs.textarea;

        var mHeight = mirror.getBoundingClientRect().height;
        var tHeight = textarea.getBoundingClientRect().height;
        if (mHeight >= tHeight) {
          this.textareaStyle.height = mHeight + 'px';
        }
      }
    },
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
      if (this.to) {
        this.$router.push(this.to);
      }
    },
    timerClick: function timerClick(e) {
      this.$emit('timer-click', e);
    }
  }
};