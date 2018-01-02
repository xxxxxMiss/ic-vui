<template>
  <div class="demo-checkbox">
    <xm-checkbox v-model="foo">备选项</xm-checkbox>
    <xm-checkbox v-model="bar"></xm-checkbox>
    <xm-checkbox v-model="trusly" disabled>选中禁用</xm-checkbox>
    <xm-checkbox v-model="falsly" disabled>未选中禁用</xm-checkbox>
    <xm-checkbox v-model="foo" round>圆形</xm-checkbox>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        foo: false,
        bar: true,
        trusly: true,
        falsly: false
      }
    },
    watch: {
      bar (newVal) {
        console.log(newVal)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-checkbox
    .xm-checkbox + .xm-checkbox
      margin-left 20px
</style>
