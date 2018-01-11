<template>
  <div class="demo-toast">
    <ic-button type="warning" @click="showToast1">点击显示</ic-button>
    <ic-button type="success" @click="showToast2">文字很长</ic-button>
    <ic-button type="info" @click="showToast3">传入选项</ic-button>
    <ic-button type="info" @click="showToast4">不同的位置</ic-button>
  </div>
</template>

<script>
  import Toast from '../../packages/toast/index'

  export default {
    methods: {
      showToast1 () {
        Toast('测试组件库')
      },
      showToast2 () {
        Toast('显示文字很长的时候会自动换行')
      },
      showToast3 () {
        Toast({
          message: '可以自定义选项',
          icon: 'like'
        })
      },
      showToast4 () {
        Toast({
          message: '显示在底部',
          position: 'bottom'
        })
      }
    }
  }
</script>
