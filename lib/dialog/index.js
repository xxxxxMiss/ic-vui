"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "modal-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "ic-dialog", class: {
        'ic-dialog--round': _vm.isRound
      }, on: { "click": function click($event) {
          if ($event.target !== $event.currentTarget) {
            return null;
          }_vm.handleMaskClose($event);
        } } }, [_c('div', { ref: "wrapper", staticClass: "ic-dialog__wrapper", style: { width: _vm.width, height: _vm.height, 'margin-top': _vm.marginTop } }, [_c('div', { staticClass: "ic-dialog__header", class: { 'ic-dialog__header--left-close': _vm.isLeftClose } }, [_vm._t("header", [_vm.showClose ? _c('i', { staticClass: "glyph__close", on: { "click": function click($event) {
          $event.preventDefault();_vm.close($event);
        } } }) : _vm._e(), _vm.title ? _c('span', [_vm._v(_vm._s(_vm.title))]) : _vm._e()])], 2), _c('div', { staticClass: "ic-dialog__content" }, [_vm._t("default")], 2), _vm.$slots.footer ? _c('div', { staticClass: "ic-dialog__footer" }, [_vm._t("footer")], 2) : _vm._e()])])]);
  },

  name: 'ic-dialog',

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    title: String,
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    round: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    isLeftClose: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isRound: function isRound() {
      return this.round && (this.width !== '100%' || this.height !== '100%');
    }
  },
  data: function data() {
    return {
      marginTop: 'auto'
    };
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.$nextTick(function (_) {
          var h = _this.$refs.wrapper.offsetHeight;
          _this.marginTop = -h / 2 + "px";
        });
      }
    }
  },
  methods: {
    handleMaskClose: function handleMaskClose() {
      this.closeOnClickMask && this.$emit('update:visible', false);
    },
    close: function close() {
      this.showClose && this.$emit('update:visible', false);
    }
  }
};