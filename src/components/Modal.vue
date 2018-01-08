<template>
  <div class="demo-modal">
    <xm-button type="primary"
      @click="showAlert">alert弹窗</xm-button>
    <xm-button type="danger"
      @click="showConfirm">confirm弹窗</xm-button>
  </div>
</template>

<script>
  import modal from '../../packages/modal/index'

  export default {
    methods: {
      showAlert () {
        modal({
          title: '温馨提示',
          message: '这是内容部分',
          category: 'alert'
        })
      },
      showConfirm () {
        modal({
          title: 'prompt弹框',
          category: 'prompt',
          inputPlaceholder: '请填写技能名称',
          closeOnClickMask: false,
          callback (vm) {
            console.log(vm)
            console.log(vm.title)
          }
        })
      }
    }
  }
</script>

<style lang="stylus">

</style>
