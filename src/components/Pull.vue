<template>
  <div class="demo-pull">
    <ic-pull @pull-loading="loadData">
      <div class="pull-item"
        v-for="(val, index) in list" :key="index">
        row: {{index}}
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
      loadData (done) {
        setTimeout(_ => {
          this.supplyData()
          done()
        }, 2000)
      },
      supplyData () {
        for (let i = 0; i < 10; i++) {
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
  .demo-pull
    .pull-item
      height 44px
      line-height 44px
      padding 0 15px
      border-bottom 1px solid #eee
</style>
