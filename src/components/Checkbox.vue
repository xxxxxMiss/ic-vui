<template>
  <div class="demo-checkbox">
    <ic-checkbox v-model="foo">备选项</ic-checkbox>
    <ic-checkbox v-model="bar"></ic-checkbox>
    <ic-checkbox v-model="trusly" disabled>选中禁用</ic-checkbox>
    <ic-checkbox v-model="falsly" disabled>未选中禁用</ic-checkbox>
    <ic-checkbox v-model="foo" round>圆形</ic-checkbox>
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
    .ic-checkbox + .ic-checkbox
      margin-left 20px
</style>
