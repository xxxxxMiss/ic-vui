<template>
  <div class="demo-tab">
    <ic-tab default-active="1"
      type="filter"
      @click-item="clickItem">
      <ic-tab-item v-for="(item, index) in res"
        :key="index"
        :title="item.text">
          <ic-filter v-for="child in item.children"
            @filter-item-click="clickFilterItem(child, child.key, index)"
            :item-active-id="itemActiveId"
            :item="child"
            :key="child.key"></ic-filter>
        </ic-tab-item>
    </ic-tab>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        res: [
          {
            text: '智能排序',
            children: [
              { key: 1, label: '智能排序' },
              { key: 2, label: '积分最多' },
              { key: 3, label: '奖金最多' }
            ]
          },
          {
            text: '全部地点',
            children: [
              { key: 'all', label: '全部地点' },
              { key: 'bj', label: '北京' },
              { key: 'sh', label: '上海' },
              { key: 'sz', label: '深圳' }
            ]
          },
          {
            text: '全部礼品',
            children: [
              { key: 1, label: '小牛电动车' },
              { key: 2, label: '坚果手机' },
              { key: 3, label: '五道口一套房' }
            ]
          }
        ],
        itemActiveId: 1
      }
    },
    methods: {
      clickItem (index) {
        // console.log(index)
      },
      clickFilterItem (item, key, index) {
        this.itemActiveId = key
        this.res[index].text = item.label
      }
    }
  }
</script>

<style lang="stylus">
  .demo-tab
    font-size 14px
</style>
