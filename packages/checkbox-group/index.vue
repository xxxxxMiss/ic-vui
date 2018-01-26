<template>
  <div class="ic-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  import emitter from 'mixins/emitter'

  export default {
    name: 'ic-checkbox-group',

    mixins: [emitter],
    props: {
      value: Array,
      max: Number
    },
    data () {
      return {
        values: this.value
      }
    },
    watch: {
      values (newVal) {
        this.$emit('input', newVal)
        this.$emit('change', newVal)
      }
    },
    methods: {
      setActives (value) {
        const index = this.values.indexOf(value)
        if (index > -1) {
          this.values.splice(index, 1)
        } else {
          this.values.push(value)
        }
      }
    },
    created () {
      this.$on('update:actives', this.setActives)
    }
  }
</script>
