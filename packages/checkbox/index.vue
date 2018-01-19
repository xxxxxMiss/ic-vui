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
  import emitter from 'mixins/emitter'

  export default {
    name: 'ic-checkbox',

    mixins: [emitter],
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
    data () {
      return {
        currentValue: this.value
      }
    },
    watch: {
      currentValue (newVal, oldValue) {
        this.$emit('input', newVal)
        this.dispatch('ic-checkbox-group', 'update:actives', newVal)
      }
    },
    methods: {
      setDefault (values) {
        // if (values.indexOf(this.value) > -1) this.currentValue = true
        // else this.currentValue = false
      }
    },
    created () {
      this.$on('set:default', this.setDefault)
    }
  }
</script>
