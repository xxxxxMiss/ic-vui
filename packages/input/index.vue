<template>
  <div class="xm-input"
    :class="[
      'xm-input--' + size,
      {
        'xm-input--round': round,
        'xm-input--prefix': prefixIcon,
        'xm-input--suffix': suffixIcon || clearable,
        'xm-input--timer': timer
      }
    ]">
    <slot name="prepend"></slot>
    <div class="xm-input__inner">
      <xm-icon v-if="prefixIcon"
        class="icon-prefix"
        :name="prefixIcon"></xm-icon>
      <input class="xm-input__input"
        v-model="currentValue"
        :readonly="readonly"
        :placeholder="placeholder"
        :type="type"
        :name="name"
        :autofocus="autofocus"
        @input="onChange"
        @blur="onBlur"
        @focus="onFocus">
      <xm-icon v-if="suffixIcon"
        :name="suffixIcon"
        class="icon-suffix"
        @click="clickSuffix"></xm-icon>
      <xm-icon v-show="!suffixIcon && clearable && this.currentValue"
        name="clear"
        class="icon-suffix"
        @click="onClear"></xm-icon>
      <xm-button v-if="timer"
        size="small"
        type="text">重新获取</xm-button>
    </div>
    <slot name="append"></slot>
  </div>
</template>

<script>
  import debounce from 'debounce'

  export default {
    name: 'xm-input',

    props: {
      prefixIcon: String,
      suffixIcon: String,
      size: {
        type: String,
        default: 'medium' // large, medium, small
      },
      clearable: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      timer: {
        type: Boolean,
        default: false
      },
      debounce: {
        type: Number,
        default: 500
      },
      value: String,
      autofocus: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      readonly: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      name: String
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    watch: {
      currentValue (newVal) {
        this.$emit('input', newVal)
      }
    },
    methods: {
      onClear () {
        this.currentValue = ''
      },
      onFocus (e) {
        this.$emit('focus', e)
      },
      onBlur (e) {
        this.$emit('blur', e)
      },
      clickSuffix (e) {
        this.$emit('click-suffix', e)
      },
      onChange: debounce(function () {
        this.$emit('change', this.currentValue)
      }, this.debounce)
    }
  }
</script>

<style lang="stylus">
  @import '../theme/input.styl'
</style>
