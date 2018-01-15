<template>
  <div class="demo-tab">
    <ic-tab
      type="filter"
      @change="changeItem"
      @click-item="clickItem">
      <ic-tab-item v-for="(item, index) in res"
        :key="index"
        :title="item.text">
          <ic-filter :visible="visible"
            :items="item.children"
            @invisible="visible = false"
            @filter-item-click="handleClick"></ic-filter>
      </ic-tab-item>
    </ic-tab>

    <ic-tab :default-active="1"
      :show-divider="false"
      @change="changeTabItem"
    >
      <ic-tab-item v-for="(val, index) in tabs"
        :key="index"
        :title="val">
        <div class="obtain-record">当前索引：{{index}}</div>
      </ic-tab-item>
    </ic-tab>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        tabIndex: '',
        res: [
          {
            text: '智能排序',
            children: [
              { key: 1, label: '智能排序', icon: 'sortintegral' },
              { key: 2, label: '积分最多', icon: 'sortbonus' },
              { key: 3, label: '奖金最多', icon: 'sortdefault' }
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
              { key: 3, label: '五道口一套房' },
              { key: '1', label: '小牛电动车' },
              { key: '2', label: '五道口一套房' },
              { key: '3', label: '星星一颗' },
              { key: 'all', label: '全部地点' },
              { key: 'bj', label: '北京' },
              { key: 'sh', label: '上海' },
              { key: 'sz', label: '深圳' },
              { key: 'x', label: '全部地点这是文字很长的时候显示的情况候显示的情' },
              { key: 'y', label: '北京' },
              { key: 'z', label: '上海' },
              { key: 'sb', label: '深圳' }
            ]
          }
        ],
        tabs: ['获取记录', '兑换记录', '其他的选项']
      }
    },
    methods: {
      clickItem (index) {
        this.tabIndex = index
        this.visible = !this.visible
      },
      changeItem (index) {
        this.visible = true
      },
      handleClick (item, index) {
        this.visible = false
        this.res[this.tabIndex].text = item.label
      },
      changeTabItem (index) {
        console.log('当前激活的索引：', index)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-tab
    font-size 14px
    .ic-tab + .ic-tab
      margin-top 30px

    .obtain-record
      padding 20px 15px
</style>
