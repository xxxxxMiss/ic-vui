<template>
  <label class="xm-checkbox"
    :class="{
      'xm-checkbox--checked': value,
      'xm-checkbox--disabled': disabled,
      'xm-checkbox--round': round
    }">
    <span class="xm-checkbox__wrapper">
      <span class="xm-checkbox__inner">
        <input type="checkbox"
          v-model="currentValue"
          :disabled="disabled"
          class="xm-checkbox__input">
      </span>
      <span class="xm-checkbox__label"
        v-if="$slots.default">
        <slot></slot>
      </span>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'xm-checkbox',

    props: {
      value: {
        type: Boolean,
        required: true,
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
    data () {
      return {
        currentValue: this.value
      }
    },
    watch: {
      currentValue (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/checkbox.styl'
</style>
