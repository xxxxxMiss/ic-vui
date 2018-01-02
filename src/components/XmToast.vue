<template>
  <div class="demo-toast">
    <xm-button type="warning" @click="showToast1">点击显示</xm-button>
    <xm-button type="success" @click="showToast2">文字很长</xm-button>
    <xm-button type="info" @click="showToast3">传入选项</xm-button>
    <xm-button type="info" @click="showToast4">不同的位置</xm-button>
  </div>
</template>

<script>
  import Toast from '../../packages/toast/main'

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
