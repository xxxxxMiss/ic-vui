"use strict";

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "ic-tabbar" }, [_vm._t("default")], 2);
  },

  name: 'ic-tabbar',

  props: {
    value: {}
  },
  provide: function provide() {
    return {
      tabbar: this
    };
  },
  data: function data() {
    return {
      currentActive: this.value
    };
  },

  methods: {
    setActive: function setActive(name) {
      this.currentActive = name;
      this.$emit('input', name);
      this.$emit('change', name);
    }
  },
  created: function created() {
    this.$on('set-active', this.setActive);
  }
};