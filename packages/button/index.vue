<template>
  <button class="xm-btn"
    :class="[
      'xm-btn--' + type,
      'xm-btn--' + size,
      {
        'xm-btn--round': round,
        'xm-btn--block': block,
        'xm-btn--fixed': fixed
      }
    ]"
    :disabled="disabled"
    @click="onClick">
    <span class="xm-btn__text"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: 'xm-button',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      round: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick (e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/button.styl';
</style>
