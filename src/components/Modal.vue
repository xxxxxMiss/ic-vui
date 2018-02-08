<template>
  <div class="demo-modal">
    <ic-button type="primary"
      @click="showAlert">alert弹窗</ic-button>
    <ic-button type="success"
      @click="showNotitle">没有标题</ic-button>
    <ic-button type="danger"
      @click="showConfirm">confirm弹窗</ic-button>
    <ic-button type="info"
      @click="showPrompt">prompt弹窗</ic-button>
    <ic-button type="warning"
      @click="showParams">传入更多参数</ic-button>
  </div>
</template>

<script>
  import Toast from '../../packages/toast/index'
  export default {
    methods: {
      showAlert () {
        this.$alert('警告信息这是一段警告信息', '温馨提示', {
          center: true,
          callback () {
            console.log('这是回调')
          }
        })
      },
      showNotitle () {
        this.$alert('只有内容，没有标题的alert', '', {
          callback () {
            console.log('确定回调')
          }
        })
      },
      showConfirm () {
        this.$confirm('这是确定弹框的内容', '温馨提示').then(action => {
          console.log('确定弹框的回调：', action)
        })
      },
      showPrompt () {
        this.$prompt('', '标题', {
          confirmButtonDisabled: false,
          inputPlaceholder: '请输入技能'
        }).then(({ value }) => {
          console.log('可以使用promise接收回调')
          console.log('input输入框的值：', value)
        })
      },
      showParams () {
        this.$prompt('这是prompt弹窗的内容', '标题', {
          center: true,
          confirmButtonText: '提交',
          showClose: false,
          inputValue: 3,
          callback (action, vm) {
            console.log('回确定调')
            console.log('prompt框的input的值：', vm.inputValue)
          },
          inputValidator (value) {
            if (+value > 10) return true
            Toast('校验失败，请重新输入')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="stylus">

</style>
