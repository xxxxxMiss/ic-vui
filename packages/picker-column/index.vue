<template>
  <div class="ic-picker__column"
    @touchstart="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend="handleTouchEnd"
    ref="column"
  >
    <div class="ic-picker__item"
      :style="{
        'height': itemHeight,
        'line-height': itemHeight
      }"
      v-for="val in 11"
      :key="val">{{val}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ic-picker-column',

    props: {},
    inject: ['picker'],
    data () {
      return {
        itemHeight: this.picker.itemHeight,
        deltaY: 0,
        touchStartY: 0,
        touchCurrentY: 0
      }
    },
    methods: {
      handleTouchStart (e) {
        this.touchStartY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY
        this.touchCurrentY = this.touchStartY
      },
      handleTouchMove (e) {
        this.touchCurrentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY
        this.deltaY = this.touchCurrentY - this.touchStartY
        this.$refs.column.style = `transform: translate3d(0, ${this.deltaY}px, 0)`
      },
      handleTouchEnd (e) {}
    }
  }
</script>
