"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "modal-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "ic-modal", class: [{
        'ic-modal--center': _vm.center
      }], on: { "click": function click($event) {
          if ($event.target !== $event.currentTarget) {
            return null;
          }_vm.handleWrapperClick($event);
        } } }, [_c('div', { staticClass: "ic-modal__inner" }, [_c('div', { staticClass: "ic-modal__header" }, [_c('span', { staticClass: "ic-modal__title" }, [_vm._v(_vm._s(_vm.title))]), _vm.showClose ? _c('i', { staticClass: "ic-modal__close glyph__close", on: { "click": function click($event) {
          _vm.handleAction('cancel');
        } } }) : _vm._e()]), _c('div', { staticClass: "ic-modal__content" }, [_vm._t("default", [!_vm.dangerouslyUseHTMLString ? _c('p', [_vm._v(_vm._s(_vm.message))]) : _c('p', { domProps: { "innerHTML": _vm._s(_vm.message) } })]), _vm.showInput ? _c('ic-input', { ref: "input", attrs: { "type": _vm.inputType, "size": "large", "placeholder": _vm.inputPlaceholder }, model: { value: _vm.inputValue, callback: function callback($$v) {
          _vm.inputValue = $$v;
        }, expression: "inputValue" } }) : _vm._e()], 2), _vm.showCancelButton || _vm.showConfirmButton ? _c('div', { staticClass: "ic-modal__footer" }, [_vm.showCancelButton ? _c('ic-button', { nativeOn: { "click": function click($event) {
          _vm.handleAction('cancel');
        } } }, [_vm._v("\n          " + _vm._s(_vm.cancelButtonText) + "\n        ")]) : _vm._e(), _vm.showConfirmButton ? _c('ic-button', { ref: "confirm", attrs: { "type": "primary", "disabled": _vm.confirmButtonDisabled }, nativeOn: { "click": function click($event) {
          _vm.handleAction('confirm');
        } } }, [_vm._v("\n          " + _vm._s(_vm.confirmButtonText) + "\n        ")]) : _vm._e()], 1) : _vm._e()])])]);
  },

  name: 'ic-modal',

  props: {
    modal: {
      default: true
    },
    lockScroll: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    roundButton: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      visible: false,
      uid: 1,
      title: undefined,
      message: '',
      type: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      action: '',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: '',
      confirmButtonDisabled: true,
      callback: null,
      dangerouslyUseHTMLString: false
    };
  },

  watch: {
    inputValue: {
      handler: function handler(val, oldVal) {
        var _this = this;

        this.$nextTick(function (_) {
          if (_this.$type === 'prompt' && oldVal !== null) {
            if (_this.validate()) {
              _this.confirmButtonDisabled = false;
            } else {
              _this.confirmButtonDisabled = true;
            }
          }
        });
      }
    },

    visible: function visible(val) {
      var _this2 = this;

      if (val) {
        this.uid++;
        if (this.$type === 'alert' || this.$type === 'confirm') {
          this.$nextTick(function () {
            _this2.$refs.confirm.$el.focus();
          });
        }
      }
      if (this.$type !== 'prompt') return;
      if (val) {
        setTimeout(function () {
          if (_this2.$refs.input && _this2.$refs.input.$el) {
            _this2.getInputElement().focus();
          }
        }, 500);
      }
    }
  },
  methods: {
    getSafeClose: function getSafeClose() {
      var _this3 = this;

      var currentId = this.uid;
      return function () {
        _this3.$nextTick(function () {
          if (currentId === _this3.uid) _this3.doClose();
        });
      };
    },
    doClose: function doClose() {
      var _this4 = this;

      if (!this.visible) return;
      this.visible = false;
      this._closing = true;

      this.onClose && this.onClose();
      if (this.lockScroll) {
        setTimeout(function () {
          if (_this4.modal && _this4.bodyOverflow !== 'hidden') {
            document.body.style.overflow = _this4.bodyOverflow;
            document.body.style.paddingRight = _this4.bodyPaddingRight;
          }
          _this4.bodyOverflow = null;
          _this4.bodyPaddingRight = null;
        }, 200);
      }
      this.opened = false;
      setTimeout(function () {
        if (_this4.action) _this4.callback(_this4.action, _this4);
      });
    },
    handleWrapperClick: function handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction('cancel');
      }
    },
    handleAction: function handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return;
      }
      this.action = action;
      if (typeof this.beforeClose === 'function') {
        this.close = this.getSafeClose();
        this.beforeClose(action, this, this.close);
      } else {
        this.doClose();
      }
    },
    validate: function validate() {
      if (this.$type === 'prompt') {
        var inputPattern = this.inputPattern;
        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          return false;
        }
        var inputValidator = this.inputValidator;
        if (typeof inputValidator === 'function') {
          var validateResult = inputValidator(this.inputValue);
          if (validateResult === false) {
            return false;
          }
          if (typeof validateResult === 'string') {
            return false;
          }
        }
      }
      return true;
    },
    getInputElement: function getInputElement() {
      var inputRefs = this.$refs.input.$refs;
      return inputRefs.input || inputRefs.textarea;
    }
  }
};