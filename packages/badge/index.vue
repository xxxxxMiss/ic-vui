<template>
  <span class="ic-badge"
    :class="{
      'ic-badge--dot': !$slots.default
    }">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'ic-badge',

    props: {
      blink: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
