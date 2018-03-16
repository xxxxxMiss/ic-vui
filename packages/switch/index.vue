<template>
  <div>
    <span
      :class="wrapClasses"
      @click="toggle">
      <input type="hidden" :value="currentValue">
      <span :class="innerClasses">
          <slot name="open" v-if="currentValue === trueValue"></slot>
          <slot name="close" v-if="currentValue === falseValue"></slot>
      </span>
    </span>
  </div>
</template>

<script>
  const prefixCls = 'ic-switch'
  export default {
    name: 'ic-switch',
    props: {
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: '' //['large', 'small', 'default']
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-checked`]: this.currentValue === this.trueValue,
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-${this.size}`]: !!this.size
          }
        ];
      },
      innerClasses () {
        return `${prefixCls}-inner`;
      }
    },
    methods: {
      toggle (event) {
        event.preventDefault();
        if (this.disabled) {
            return false;
        }
        const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
        this.currentValue = checked;
        this.$emit('on-change', checked);
      }
    },
    watch: {
      value (val) {
        if (val !== this.trueValue && val !== this.falseValue) {
            throw 'Value 必须是 trueValue or falseValue';
        }
        this.currentValue = val;
      }
    },
    created () {
      console.log(this.value, this.currentValue)
    }
  }
</script>
