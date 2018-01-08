<template>
  <div class="ic-tag"
    :class="[
      'ic-tag--' + type,
      'ic-tag--' + size
    ]">
    <slot></slot>
    <ic-icon v-if="closable"></ic-icon>
  </div>
</template>

<script>
  export default {
    name: 'ic-tag',

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
