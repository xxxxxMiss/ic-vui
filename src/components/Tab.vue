<template>
  <div class="demo-tab">
    <ic-tab
      type="filter"
      @change="changeItem"
      @click-item="clickItem">
      <ic-tab-item v-for="(item, index) in res"
        :key="index"
        :title="item.text">
          <ic-filter :visible.sync="visible"
            :items="item.children"
            :label-key="item.labelKey"
            :value-key="item.valueKey"
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
      handleClick ({item, index, valueKey, labelKey}) {
        console.log(valueKey, labelKey)
        this.res[this.tabIndex].text = item[labelKey]
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
