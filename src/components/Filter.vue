<template>
  <div class="demo-filter">
    <ic-filter :data="res" v-model="currentActive"></ic-filter>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentActive: '',
        res: [
          {
            text: '智能排序',
            labelKey: 'label',
            valueKey: 'key',
            children: [
              { key: 1, label: '智能排序', icon: 'sortintegral' },
              { key: 2, label: '积分最多', icon: 'sortbonus' },
              { key: 3, label: '奖金最多', icon: 'sortdefault' }
            ]
          },
          {
            text: '全部地点',
            labelKey: 'address',
            valueKey: 'sh',
            children: [
              { sh: 'all', address: '全部地点' },
              { sh: 'bj', address: '北京' },
              { sh: 'sh', address: '上海' },
              { sh: 'sz', address: '深圳' }
            ]
          },
          {
            text: '全部礼品',
            labelKey: 'text',
            valueKey: 'id',
            children: [
              { id: 1, text: '小牛电动车' },
              { id: 2, text: '坚果手机' },
              { id: 3, text: '五道口一套房' },
              { id: '1', text: '小牛电动车' },
              { id: '2', text: '五道口一套房' },
              { id: '3', text: '星星一颗' },
              { id: 'all', text: '全部地点' },
              { id: 'bj', text: '北京' },
              { id: 'sh', text: '上海' },
              { id: 'sz', text: '深圳' },
              { id: 'x', text: '全部地点这是文字很长的时候显示的情况候显示的情' },
              { id: 'y', text: '北京' },
              { id: 'z', text: '上海' },
              { id: 'sb', text: '深圳' }
            ]
          }
        ]
      }
    },
    methods: {
      handleClick (item, index) {
        console.log(item)
        console.log(index)
      }
    }
  }
</script>

<style lang="stylus">

</style>
