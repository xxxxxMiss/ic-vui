<template>
  <ul class="ic-tabbar">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'ic-tabbar',

    props: {
      defaultActive: {
        type: [String, Number],
        default: 0
      }
    },
    data () {
      return {
        currentActive: this.defaultActive,
        bars: []
      }
    }
  }
</script>
