'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { staticClass: "ic-btn", class: ['ic-btn--' + _vm.type, 'ic-btn--' + _vm.size, {
        'ic-btn--round': _vm.round,
        'ic-btn--block': _vm.block,
        'ic-btn--fixed': _vm.fixed,
        'ic-btn--text': _vm.text
      }], attrs: { "disabled": _vm.disabled }, on: { "click": _vm.onClick } }, [_c('span', { staticClass: "ic-btn__text" }, [_vm.prefixIcon ? _c('ic-icon', { staticClass: "ic-btn--prefix-icon", attrs: { "name": _vm.prefixIcon } }) : _vm._e(), _vm._t("default", [_vm._v(_vm._s(_vm.timerText))]), _vm.suffixIcon ? _c('ic-icon', { staticClass: "ic-btn--suffix-icon", attrs: { "name": _vm.suffixIcon } }) : _vm._e()], 2)]);
  },

  name: 'ic-button',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    timer: {
      type: Boolean,
      default: false
    },
    endText: {
      type: String,
      default: '重新发送'
    },
    prefixIcon: String,
    suffixIcon: String
  },
  data: function data() {
    return {
      n: 60,
      end: this.endText
    };
  },

  computed: {
    timerText: function timerText() {
      return this.n === 0 ? this.end : this.n + 's';
    }
  },
  watch: {
    n: function n(newVal) {
      if (newVal === 0) {
        this.$emit('timer-end');
      }
    }
  },
  methods: {
    onClick: function onClick(e) {
      this.$emit('click', e);
      this.timer && this.count();
    },
    count: function count() {
      var _this = this;

      this.n = 60;
      var steps = function steps() {
        var timer = setTimeout(function (_) {
          if (_this.n === 0) {
            clearTimeout(timer);
          } else {
            _this.n--;
            steps();
          }
        }, 1000);
      };
      steps();
    }
  }
};