<template>
  <div class="demo-checkbox">
    <ic-checkbox v-model="foo">备选项</ic-checkbox>
    <ic-checkbox v-model="bar"></ic-checkbox>
    <ic-checkbox v-model="trusly" disabled>选中禁用</ic-checkbox>
    <ic-checkbox v-model="falsly" disabled>未选中禁用</ic-checkbox>
    <ic-checkbox v-model="foo" round>圆形</ic-checkbox>

    <div class="checkbox-container" @click="handleClick">
      <ic-checkbox v-model="test" round>圆形</ic-checkbox>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        foo: false,
        bar: true,
        trusly: true,
        falsly: false,
        test: false
      }
    },
    watch: {
      bar (newVal) {
        console.log(newVal)
      }
    },
    methods: {
      handleClick () {
        this.test = !this.test
      }
    }
  }
</script>

<style lang="stylus">
  .demo-checkbox
    .ic-checkbox + .ic-checkbox
      margin-left 20px

    .checkbox-container
      text-align right
      height 50px
      background-color #eee
</style>
