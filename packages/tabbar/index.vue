<template>
  <ul class="ic-tabbar">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'ic-tabbar',

    props: {
      value: {}
    },
    provide () {
      return {
        tabbar: this
      }
    },
    data () {
      return {
        currentActive: this.value
      }
    },
    methods: {
      setActive (name) {
        this.currentActive = name
        this.$emit('input', name)
        this.$emit('change', name)
      }
    },
    created () {
      this.$on('set-active', this.setActive)
    }
  }
</script>
