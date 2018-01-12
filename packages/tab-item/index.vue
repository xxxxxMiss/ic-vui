<template>
  <div class="ic-tab__panel"
    :class="{
      'ic-tab__panel--active': index == parentGroup.currentActive
    }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ic-tab-item',

    props: {
      title: {
        type: String,
        required: true
      },
      disabled: Boolean
    },
    computed: {
      index() {
        return this.parentGroup.children.indexOf(this)
      }
    },
    methods: {
      findParentByName () {
        if (!this.parentGroup) {
          let parent = this.$parent
          while (parent) {
            if (parent.$options.name === 'ic-tab') {
              this.parentGroup = parent
              break
            }
            parent = parent.$parent
          }
        }
      }
    },
    created () {
      this.findParentByName('ic-tab')
      this.parentGroup.children.push(this)
    },
    mounted () {
      console.log('333')
    }
  }
</script>
