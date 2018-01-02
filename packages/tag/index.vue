<template>
  <div class="xm-tag"
    :class="[
      'xm-tag--' + type,
      'xm-tag--' + size
    ]">
    <slot></slot>
    <xm-icon v-if="closable"></xm-icon>
  </div>
</template>

<script>
  export default {
    name: 'xm-tag',

    props: {
      type: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'normal'
      },
      closable: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/tag.styl'
</style>
