<template>
  <div class="ic-tab"
  :class="{
    'ic-tab--filter': type === 'filter',
    'ic-tab--divider': showDivider,
    'ic-tab--disperse': isDisperse
  }">
    <div class="ic-tab__inner">
      <div class="ic-tab__item"
        :style="{ width: (100 / children.length) + '%'}"
        :class="{
          'ic-tab__item--active': index === currentActive
        }"
        v-for="(item, index) in children"
        :key="index"
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
      <div v-if="type === 'normal' && cursorType !== 'disperse'"
        class="ic-tab__cursor"></div>
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
        default: 'normal' // filter
      },
      showDivider: {
        type: Boolean,
        default: true
      },
      cursorType: {
        type: String,
        default: 'disperse' // line
      }
    },
    computed: {
      isDisperse () {
        return this.type !== 'filter' && this.cursorType === 'disperse'
      }
    },
    data () {
      return {
        children: [],
        currentActive: this.type !== 'filter' ? this.defaultActive : ''
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
        this.$emit('click-item', index)
      }
    }
  }
</script>
