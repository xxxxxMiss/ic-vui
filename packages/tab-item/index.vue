<template>
  <div class="ic-tab__panel"
    :class="{
      'ic-tab__panel--active': index == parentGroup.currentActive
    }">
    <slot></slot>
  </div>
</template>

<script>
  import { findParentByName } from 'utils/share'

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
    created () {
      if (!this.parentGroup) {
        this.parentGroup = findParentByName(this, 'ic-tab')
      }
      this.parentGroup.children.push(this)
    }
  }
</script>
