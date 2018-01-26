"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "modal-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "ic-modal", class: [{
        'ic-modal--center': _vm.center
      }], on: { "click": function click($event) {
          if ($event.target !== $event.currentTarget) {
            return null;
          }_vm.close($event);
        } } }, [_c('div', { staticClass: "ic-modal__inner" }, [_c('div', { staticClass: "ic-modal__header" }, [_c('span', { staticClass: "ic-modal__title" }, [_vm._v(_vm._s(_vm.title))]), _vm.showClose ? _c('i', { staticClass: "ic-modal__close glyph__close", on: { "click": function click($event) {
          _vm.visible = false;
        } } }) : _vm._e()]), _c('div', { staticClass: "ic-modal__content" }, [_vm.message ? _c('div', [_vm._v("\n          " + _vm._s(_vm.message) + "\n        ")]) : _vm._e(), _vm.category === 'prompt' ? _c('ic-input', { attrs: { "size": "large", "type": _vm.inputType, "placeholder": _vm.inputPlaceholder }, model: { value: _vm.value, callback: function callback($$v) {
          _vm.value = $$v;
        }, expression: "value" } }) : _vm._e()], 1), _vm.showCancelButton || _vm.showConfirmButton ? _c('div', { staticClass: "ic-modal__footer" }, [_vm.showCancelButton && _vm.category !== 'alert' ? _c('ic-button', { on: { "click": _vm.doClose } }, [_vm._v("\n          " + _vm._s(_vm.cancelButtonText) + "\n        ")]) : _vm._e(), _vm.showConfirmButton ? _c('ic-button', { attrs: { "type": "primary" }, on: { "click": _vm.ok } }, [_vm._v(_vm._s(_vm.confirmButtonText))]) : _vm._e()], 1) : _vm._e()])])]);
  },

  name: 'ic-modal',

  props: {
    showClose: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputValue: {},
    inputValidator: Function,
    inputPlaceholder: String,
    title: String,
    message: String
  },
  data: function data() {
    return {
      visible: false,
      category: 'confirm', // alert, prompt
      value: this.inputValue
    };
  },

  watch: {
    visible: function visible(val) {
      if (val) {
        this.$nextTick(function (_) {
          var input = document.querySelector('.ic-modal .ic-input__input');
          input && input.focus();
        });
      } else {
        this.value && (this.value = '');
      }
    }
  },
  methods: {
    close: function close() {
      this.closeOnClickMask && (this.visible = false);
    },
    ok: function ok() {
      if (typeof this.inputValidator === 'function') {
        if (this.inputValidator(this.value) === true) {
          this.visible = false;
        } else return;
      } else {
        this.visible = false;
      }
      this.callback && typeof this.callback === 'function' && this.callback(this);
    },
    doClose: function doClose() {
      this.visible = false;
      this.cancel && typeof this.cancel === 'function' && this.cancel(this);
    }
  }
};