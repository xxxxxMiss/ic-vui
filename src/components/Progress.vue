<template>
  <div class="demo-progress">
    <ic-progress
      is-gradient
      :width="130"
      :stroke-width="10"
      :percentage="percentage"></ic-progress>
    <ic-button type="primary" @click="handleClick">动态改变</ic-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        percentage: 0,
        isPerfect: false
      }
    },
    methods: {
      handleClick () {
        if (this.percentage === 100) {
          this.isPerfect = true
        } else if (this.percentage === 0) {
          this.isPerfect = false
        }
        if (this.isPerfect) {
          this.percentage -= 25
        } else {
          this.percentage += 25
        }
      }
    }
  }
</script>

<style lang="stylus">
  .demo-progress
    background-color #fff
</style>
