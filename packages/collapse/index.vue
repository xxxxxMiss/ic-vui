<template>
  <ul class="ic-collapse">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'ic-collapse',

    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number, Array],
        default: () => []
      }
    },
    provide () {
      return {
        collapse: this
      }
    },
    data () {
      return {
        activeNames: [].concat(this.value)
      }
    },
    methods: {
      setActiveNames(activeNames) {
        const value = this.accordion ? activeNames[0] : activeNames
        this.activeNames = activeNames
        this.$emit('input', value)
        this.$emit('change', value)
      },
      handleItemClick (item) {
        const activeNames = this.activeNames.slice()
        const index = activeNames.indexOf(item.name)
        if (index > -1) {
          activeNames.splice(index, 1)
        } else {
          activeNames.push(item.name)
        }
        this.setActiveNames(activeNames)
      }
    }
  }
</script>
