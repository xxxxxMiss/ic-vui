<template>
  <div class="demo-tab">
    <ic-tab :default-active="defaultActive"
      :show-divider="false"
      @change="changeTabItem"
      item-width="124px"
      active-text-color="#008C58"
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
        defaultActive: 0,
        tabs: ['获取记录', '兑换记录']
      }
    },
    methods: {
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
