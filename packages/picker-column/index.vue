<template>
  <div class="ic-picker__column"
    @touchstart="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend="handleTouchEnd"
    ref="column"
  >
    <div class="ic-picker__item"
      v-for="val in 10"
      :key="val">{{val}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ic-picker-column',

    data () {
      return {
        deltaY: 0,
        pageY: 0
      }
    },
    methods: {
      handleTouchStart (e) {
        this.pageY = e.touches[0].pageY
        console.log('start')
      },
      handleTouchMove (e) {
        const touch = e.changedTouches ? e.changedTouches[0] : e.touches[0]
        this.deltaY += touch.pageY - this.pageY
        this.pageY = touch.pageY
        console.log(this.deltaY)
        this.$refs.column.style = `transform: translate3d(0, ${this.deltaY}px, 0)`
      },
      handleTouchEnd (e) {
        console.log('end')
      }
    }
  }
</script>
