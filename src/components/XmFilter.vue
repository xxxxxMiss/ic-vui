<template>
  <div class="demo-filter">
    <xm-filter></xm-filter>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        filterData: {
          order: [
            { key: 1, label: '智能排序' },
            { key: 2, label: '积分最多' },
            { key: 3, label: '奖金最多' }
          ],
          city: [
            { key: '', label: '全部地点' },
            { key: 'bj', label: '北京' },
            { key: 'sh', label: '上海' },
            { key: 'sz', label: '深圳' }
          ],
          reward: [
            { key: '', label: '全部礼品' },
            { key: '1', label: '小牛电动车' },
            { key: '2', label: '五道口一套房' },
            { key: '3', label: '星星一颗' }
          ]
        }
      }
    }
  }
</script>

<style lang="stylus">

</style>
