<template>
  <div class="xm-tab">
    <div class="xm-tab__inner">
      <div class="xm-tab__item"
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'xm-tab__item--active': index == currentActive
        }"
        @click="clickItem(index)">{{item.title}}</div>
    </div>
    <div class="xm-tab__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'xm-tab',

    props: {
      defaultActive: {
        type: [String, Number],
        default: 0
      }
    },
    data () {
      return {
        items: [],
        currentActive: this.defaultActive
      }
    },
    methods: {
      clickItem (index) {
        this.currentActive = index
        this.$emit('click-item', index)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/tab.styl'
</style>
