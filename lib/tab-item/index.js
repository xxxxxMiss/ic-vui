'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-tab__panel", class: {
        'ic-tab__panel--active': _vm.index == _vm.parentGroup.currentActive
      } }, [_vm._t("default")], 2);
  },

  name: 'ic-tab-item',

  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean
  },
  computed: {
    index: function index() {
      return this.parentGroup.items.indexOf(this);
    }
  },
  methods: {
    findParentByName: function findParentByName() {
      if (!this.parentGroup) {
        var parent = this.$parent;
        while (parent) {
          if (parent.$options.name === 'ic-tab') {
            this.parentGroup = parent;
            break;
          }
          parent = parent.$parent;
        }
      }
    }
  },
  created: function created() {
    this.findParentByName('ic-tab');
    this.parentGroup.items.push(this);
  }
};