<template>
  <label class="ic-checkbox"
    :class="{
      'ic-checkbox--checked': value,
      'ic-checkbox--disabled': disabled,
      'ic-checkbox--round': round
    }">
    <span class="ic-checkbox__wrapper">
      <span class="ic-checkbox__inner">
        <input type="checkbox"
          v-model="currentValue"
          :disabled="disabled"
          class="ic-checkbox__input">
      </span>
      <span class="ic-checkbox__label"
        v-if="$slots.default">
        <slot></slot>
      </span>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'ic-checkbox',

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
