<template>
  <div class="ic-tab"
  :class="{
    'ic-tab--filter': type === 'filter'
  }">
    <div class="ic-tab__inner">
      <div class="ic-tab__item"
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'ic-tab__item--active': index == currentActive
        }"
        @click="clickItem(index)">
        <template
          v-if="type === 'filter'">
          <span class="ic-tab__text">{{item.title}}</span>
          <i class="ic-arrow"></i>
        </template>
        <template v-if="type === 'normal'">
          {{item.title}}
        </template>
      </div>
    </div>
    <div class="ic-tab__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ic-tab',

    props: {
      defaultActive: {
        type: [String, Number],
        default: 0
      },
      type: {
        type: String,
        default: 'normal' // filter
      }
    },
    computed: {
      active () {
        return this.type !== 'filter' ? this.defaultActive : ''
      }
    },
    data () {
      return {
        items: [],
        currentActive: this.active
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
