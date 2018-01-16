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
        } } }, [_c('div', { ref: "wrapper", staticClass: "ic-dialog__wrapper", style: { width: _vm.width, height: _vm.height, 'margin-top': _vm.marginTop } }, [_c('div', { staticClass: "ic-dialog__header" }, [_vm._t("header", [_c('ic-header', { attrs: { "left-icon": "titlebar-close", "title": _vm.title }, on: { "click-left": function clickLeft($event) {
          $event.preventDefault();_vm.close($event);
        } } })])], 2), _c('div', { staticClass: "ic-dialog__content" }, [_vm._t("default")], 2), _vm.$slots.footer ? _c('div', { staticClass: "ic-dialog__footer" }, [_vm._t("footer")], 2) : _vm._e()])])]);
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
      this.closeOnClickMask && this.close();
    },
    close: function close() {
      this.$emit('update:visible', false);
    }
  }
};