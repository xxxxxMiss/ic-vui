<template>
  <div class="xm-tab__panel"
    :class="{
      'xm-tab__panel--active': index === parentGroup.currentActive
    }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'xm-tab-item',

    props: {
      title: {
        type: String,
        required: true
      },
      disabled: Boolean
    },
    computed: {
      index() {
        return this.parentGroup.items.indexOf(this)
      }
    },
    methods: {
      findParentByName () {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.name === 'xm-tab') {
            this.parentGroup = parent
            break
          }
          parent = parent.$parent
        }
      }
    },
    created () {
      this.findParentByName('xm-tab')
      this.parentGroup.items.push(this)
    },
    destroyed () {
      this.parentGroup.items.splice(this.index, 1)
    }
  }
</script>
