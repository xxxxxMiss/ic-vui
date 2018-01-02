<template>
  <div class="xm-filter">
    <div class="xm-filter__title">
      <div class="xm-filter__cell">
        <span class="xm-filter__text">智能排序</span>
        <i class="arrow"></i>
      </div>
      <div class="xm-filter__cell">
        <span class="xm-filter__text">全部地点</span>
        <i class="arrow"></i>
      </div>
      <div class="xm-filter__cell is-active">
        <span class="xm-filter__text">奖品名称很长的时候</span>
        <i class="arrow"></i>
      </div>
    </div>
    <div class="xm-filter__panel">
      <div class="xm-filter__mask">
        <div class="xm-filter__item" v-for="i in 20" :key="i">
          <div class="xm-filter__row">
            小牛电动车小牛电动车小牛电动车小牛电动车小牛电动车小牛电动车
          </div>
          <xm-checkbox v-model="test" round></xm-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'xm-filter',

    props: {
      showArrow: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        test: ''
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/filter.styl'
</style>

