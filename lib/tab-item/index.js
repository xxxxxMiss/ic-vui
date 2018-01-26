'use strict';

exports.__esModule = true;

var _share = require('utils/share');

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
      return this.parentGroup.children.indexOf(this);
    }
  },
  created: function created() {
    if (!this.parentGroup) {
      this.parentGroup = (0, _share.findParentByName)(this, 'ic-tab');
    }
    this.parentGroup.children.push(this);
  }
};