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
      },
      activeText: {
        type: String,
        default: '收起'
      },
      inactiveText: {
        type: String,
        default: '展开'
      },
      disabled: {
        type: Boolean,
        default: false
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
    watch: {
      value (val) {
        this.activeNames = [].concat(val)
      }
    },
    methods: {
      setActiveNames (activeNames) {
        activeNames = [].concat(activeNames)
        const value = this.accordion ? activeNames[0] : activeNames
        this.activeNames = activeNames
        this.$emit('input', value)
        this.$emit('change', value)
      },
      handleItemClick (item) {
        if (this.accordion) {
          this.setActiveNames(
            (this.activeNames[0] || this.activeNames[0] === 0) &&
            this.activeNames[0] === item.name
            ? '' : item.name
          )
        } else {
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
  }
</script>
