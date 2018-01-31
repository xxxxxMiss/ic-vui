<template>
  <div class="demo-picker">
    <ic-picker
      @change="changeValue"
      :items="items"></ic-picker>

    <ic-picker
      @cancel="handleCancel"
      @confirm="handleConfirm"
      show-toolbar
      rotate-effect
      value-key="key"
      @change="changeValue1"
      :items="items1"></ic-picker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ],
        items1: [
          {
            flex: 1,
            defaultIndex: 3,
            values: [{key: '专科', value: 1}, {key: '本科', value: 2}, {key: '研究生', value: 3}, {key: '硕士', value: 4}]
          }
        ]
      }
    },
    methods: {
      handleConfirm (values) {
        console.log('当前选中的值：', values)
      },
      handleCancel () {
        console.log('取消事件。。。')
      },
      changeValue (picker, values) {
        console.log(picker)
        console.log(values)
      },
      changeValue1 (picker, values) {
        console.log(picker)
        console.log(values)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-picker
    color #333
</style>
