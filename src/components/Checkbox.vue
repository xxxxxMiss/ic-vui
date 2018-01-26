<template>
  <div class="demo-checkbox">
    <ul>
      <li><ic-checkbox v-model="foo">备选项</ic-checkbox></li>
      <li><ic-checkbox v-model="bar"></ic-checkbox></li>
      <li><ic-checkbox v-model="trusly" disabled>选中禁用</ic-checkbox></li>
      <li><ic-checkbox v-model="falsly" disabled>未选中禁用</ic-checkbox></li>
      <li><ic-checkbox v-model="foo1" round>圆形</ic-checkbox></li>
    </ul>

    <div class="test" @click="clickTest">
      <ic-checkbox v-model="test">测试</ic-checkbox>
    </div>


    <ic-checkbox-group v-model="checked">
        <ic-checkbox v-for="(item, index) in list"
          v-model="item.id"
          :key="index"
          round>{{item.label}}</ic-checkbox>
    </ic-checkbox-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        foo: false,
        foo1: false,
        bar: true,
        trusly: true,
        falsly: false,
        test: false,
        list: [
          { id: 'A', label: '南京' },
          { id: 'B', label: '上海' },
          { id: 'C', label: '广州' },
          { id: 'D', label: '深圳' },
          { id: 'E', label: '北京' }
        ],
        checked: ['B', 'E']
      }
    },
    watch: {
      bar (newVal) {
        console.log(newVal)
      },
      checked (newVal) {
        console.log('newVal: ')
        console.log(newVal)
      }
    },
    methods: {
      clickItem (e, item, index) {
        console.log(`第${index}条记录`)
      },
      clickTest () {
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
    ul
      margin 10px 15px 30px
      li
        margin 15px
    .list-item
      padding 10px 15px
      margin-bottom 10px
      border-bottom 1px solid #eee
    .test
      padding 20px 15px
      background-color #eee
</style>
