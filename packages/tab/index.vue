<template>
  <div class="ic-tab"
  :class="{
    'ic-tab--divider': showDivider,
    'ic-tab--disperse': isDisperse
  }">
    <div class="ic-tab__inner">
      <div class="ic-tab__item"
        :style="itemStyle"
        :class="{
          'ic-tab__item--active': index === currentActive
        }"
        v-for="(item, index) in children"
        :key="index"
        @click="clickItem(index)">
        {{ item.title }}
      </div>
      <!-- <div class="ic-tab__cursor"></div> -->
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
        type: Number,
        default: 0
      },
      type: {
        type: String,
        default: 'normal'
      },
      showDivider: {
        type: Boolean,
        default: true
      },
      cursorType: {
        type: String,
        default: 'disperse' // line
      },
      itemWidth: String
    },
    computed: {
      isDisperse () {
        return this.cursorType === 'disperse'
      },
      itemStyle () {
        return {
          width: this.itemWidth
            ? this.itemWidth
            : `${100 / this.children.length}%`
        }
      }
    },
    data () {
      return {
        children: [],
        currentActive: this.defaultActive
      }
    },
    watch: {
      currentActive (newVal) {
        this.$emit('change', newVal)
      }
    },
    methods: {
      clickItem (index) {
        this.currentActive = index
        this.$emit('click-item', this.currentActive)
      }
    }
  }
</script>
