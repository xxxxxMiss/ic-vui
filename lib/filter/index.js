'use strict';

exports.__esModule = true;
exports.default = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ic-filter" }, [_c('div', { staticClass: "ic-filter__header" }, _vm._l(_vm.innerHeaders, function (val, index) {
      return _c('div', { key: index, staticClass: "ic-filter__header-item", class: {
          'ic-filter__header-item--active': _vm.currentIndex === index
        }, style: { width: 100 / _vm.innerHeaders.length + '%' }, on: { "click": function click($event) {
            _vm.clickHeaderItem(index, val);
          } } }, [_c('span', { staticClass: "ic-filter__header-text" }, [_vm._v(_vm._s(val))]), _c('ic-icon', { attrs: { "name": "arrow-down" } })], 1);
    })), _c('transition-group', { attrs: { "name": "modal-fade" } }, _vm._l(_vm.data, function (item, index) {
      return _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentIndex === index, expression: "currentIndex === index" }], key: index, staticClass: "ic-filter__content", on: { "click": _vm.clickMask } }, [_c('div', { staticClass: "ic-filter__panel" }, _vm._l(item.children, function (child, idx) {
        return _c('div', { key: idx, staticClass: "ic-filter__panel-item", on: { "click": function click($event) {
              $event.stopPropagation();_vm.clickPanelItem(child, idx, index);
            } } }, [_c('div', { staticClass: "ic-filter__row", class: {
            'ic-filter__row--active': _vm.currentPanelIndexs[_vm.currentIndex] === idx
          } }, [child.icon ? _c('ic-icon', { attrs: { "name": child.icon } }) : _vm._e(), _vm._v("\n            " + _vm._s(child[item.labelKey]) + "\n          ")], 1), _c('i', { staticClass: "ic-filter__checkbox glyph__checkbox--primary", style: {
            'display': _vm.currentPanelIndexs[_vm.currentIndex] === idx ? 'inline-block' : 'none'
          } })]);
      }))]);
    }))], 1);
  },

  name: 'ic-filter',

  props: {
    data: {
      type: Array
    },
    headers: Array,
    value: {},
    closeOnClickMask: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var headers = this.data.map(function (item) {
      return item.text;
    });
    return {
      innerHeaders: this.headers || headers,
      currentIndex: this.value,
      currentPanelIndexs: {}
    };
  },

  watch: {
    value: function value(newVal) {
      var pullEl = document.querySelector('.ic-pull__scroller');
      if (newVal === '') {
        document.body.style.overflowY = 'auto';
        pullEl && (pullEl.style.overflowY = 'auto');
      } else {
        document.body.style.overflowY = 'hidden';
        pullEl && (pullEl.style.overflowY = 'hidden');
      }
    }
  },
  methods: {
    clickPanelItem: function clickPanelItem(item, itemIndex, headerIndex) {
      this.currentPanelIndexs[headerIndex] = itemIndex;
      this.$emit('item-click', {
        item: item,
        headerIndex: headerIndex,
        itemIndex: itemIndex
      });
      this.currentIndex = '';
      this.$emit('input', '');
      this.innerHeaders.splice(headerIndex, 1, item[this.data[headerIndex].labelKey]);
    },
    clickHeaderItem: function clickHeaderItem(index, val) {
      if (this.value !== index) {
        this.currentIndex = index;
      } else {
        this.currentIndex = '';
      }
      this.$emit('input', this.currentIndex);
      this.$emit('change', this.currentIndex);
    },
    clickMask: function clickMask() {
      if (this.closeOnClickMask) {
        this.currentIndex = '';
        this.$emit('input', '');
      }
    }
  }
};