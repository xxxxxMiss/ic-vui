<template>
  <div class="demo-filter">
    <ic-filter :items="data"
      @filter-item-click="handleClick"
      @invisible="handleInvisible"
      :visible="visible"
      :defaultActive="1"></ic-filter>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: true,
        data: [
          { key: 1, label: '智能排序' },
          { key: 2, label: '积分最多' },
          { key: 3, label: '奖金最多' },
          { key: '', label: '全部礼品' },
          { key: '1', label: '小牛电动车' },
          { key: '2', label: '五道口一套房' },
          { key: '3', label: '星星一颗' },
          { key: 'all', label: '全部地点' },
          { key: 'bj', label: '北京' },
          { key: 'sh', label: '上海' },
          { key: 'sz', label: '深圳' },
          { key: 'x', label: '全部地点' },
          { key: 'y', label: '北京' },
          { key: 'z', label: '上海' },
          { key: 'sb', label: '深圳' }
        ]
      }
    },
    methods: {
      handleClick (item, index) {
        console.log(item)
        console.log(index)
      },
      handleInvisible () {
        this.visible = false
      }
    }
  }
</script>

<style lang="stylus">

</style>
