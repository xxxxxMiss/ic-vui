<template>
  <div class="demo-checkbox">
    <!-- <ic-checkbox v-model="foo">备选项</ic-checkbox>
    <ic-checkbox v-model="bar"></ic-checkbox>
    <ic-checkbox v-model="trusly" disabled>选中禁用</ic-checkbox>
    <ic-checkbox v-model="falsly" disabled>未选中禁用</ic-checkbox>
    <ic-checkbox v-model="foo" round>圆形</ic-checkbox> -->

    <ic-checkbox-group v-model="checked">
      <ic-checkbox
        v-for="(item, index) in list"
        :key="index"
        round>圆形</ic-checkbox>
    </ic-checkbox-group>
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
        list: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 }
        ],
        checked: [1, 3, 5]
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
      border-bottom 1px solid #999
</style>
