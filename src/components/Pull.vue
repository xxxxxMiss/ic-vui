<template>
  <div class="demo-pull">
    <ic-pull @infinite-scroll="loadData"
    >
      <div class="pull-item"
        v-for="(val, index) in list" :key="index">
        row: {{index}}
      </div>
      <div class="loading-bar">
        <ic-spinner></ic-spinner>
      </div>
    </ic-pull>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    methods: {
      loadData () {
        setTimeout(_ => {
          this.supplyData()
        }, 2000)
      },
      supplyData () {
        for (let i = 0; i < 20; i++) {
          this.list.push('item' + i)
        }
      }
    },
    created () {
      this.supplyData()
    }
  }
</script>

<style lang="stylus">
  html,body,#app
    overflow hidden
    height 100%
    padding 0
    .demo-pull
      height 100%
    .pull-item
      height 44px
      line-height 44px
      padding 0 15px
      border-bottom 1px solid #eee
    .loading-bar
      text-align center
</style>
