<template>
  <span class="xm-badge"
    :class="{
      'xm-badge--dot': !$slots.default
    }">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'xm-badge',

    props: {
      blink: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/badge.styl'
</style>
