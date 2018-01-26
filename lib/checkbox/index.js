'use strict';

exports.__esModule = true;

var _emitter = require('mixins/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _share = require('utils/share');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "ic-checkbox", class: {
        'ic-checkbox--checked': _vm.checked,
        'ic-checkbox--disabled': _vm.disabled,
        'ic-checkbox--round': _vm.round
      } }, [_c('span', { staticClass: "ic-checkbox__wrapper" }, [_c('span', { staticClass: "ic-checkbox__inner", on: { "click": function click($event) {
          $event.stopPropagation();_vm.click($event);
        } } }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.checked, expression: "checked" }], staticClass: "ic-checkbox__input", attrs: { "type": "checkbox", "disabled": _vm.disabled }, domProps: { "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked }, on: { "change": function change($event) {
          var $$a = _vm.checked,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$el.checked) {
              $$i < 0 && (_vm.checked = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.checked = $$c;
          }
        } } })]), _vm.$slots.default ? _c('span', { staticClass: "ic-checkbox__label" }, [_vm._t("default")], 2) : _vm._e()])]);
  },

  name: 'ic-checkbox',

  mixins: [_emitter2.default],
  props: {
    value: {
      type: [Boolean, Number, String],
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
      originalValue: this.value,
      checked: this.value
    };
  },

  methods: {
    click: function click(e) {
      this.$emit('input', e.target.checked);
      this.dispatch('ic-checkbox-group', 'update:actives', this.originalValue);
    }
  },
  created: function created() {
    var parent = (0, _share.findParentByName)(this, 'ic-checkbox-group');
    this.checked = parent && parent.values.indexOf(this.value) > -1;
  }
};