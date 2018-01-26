<template>
  <label class="ic-checkbox"
    :class="{
      'ic-checkbox--checked': checked,
      'ic-checkbox--disabled': disabled,
      'ic-checkbox--round': round
    }">
    <span class="ic-checkbox__wrapper">
      <span class="ic-checkbox__inner"
        @click.stop="click">
        <input type="checkbox"
          v-model="checked"
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
  import { findParentByName } from 'utils/share'

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
      },
    },
    data () {
      return {
        originalValue: this.value,
        checked: this.value
      }
    },
    methods: {
      click (e) {
        this.$emit('input', e.target.checked)
        this.dispatch('ic-checkbox-group', 'update:actives', this.originalValue)
      }
    },
    created () {
      const parent = findParentByName(this, 'ic-checkbox-group')
      this.checked = parent && parent.values.indexOf(this.value) > -1
    }
  }
</script>
