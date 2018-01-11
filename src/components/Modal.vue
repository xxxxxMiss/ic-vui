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
    <ic-button type="error"
      @click="showGhost">幽灵弹出</ic-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showAlert () {
        this.$alert('警告信息这是一段警告信息', '温馨提示', function () {
          console.log('这是回调')
        })
      },
      showNotitle () {
        this.$alert('只有内容，没有标题的alert', function () {
          console.log('确定回调')
        })
      },
      showConfirm () {
        this.$confirm('这是确定弹框的内容', '温馨提示', function () {
          console.log('确定弹框的回调')
        })
      },
      showPrompt () {
        this.$prompt(null, '标题', function () {
          console.log('prompt确定回调')
        })
      },
      showParams () {
        this.$prompt('这是prompt弹窗的内容', '标题', {
          center: false,
          confirmButtonText: '提交',
          showClose: false,
          callback () {
            console.log('回确定调')
          },
          cancel () {
            console.log('取消回调')
          }
        })
      },
      showGhost () {
        this.$alert('此处显示最多50个字的驳回理由，由HR在B端填写，此处显示最多50个字的驳回理由，由HR在B端填写，此处显示最多50个字', '驳回理由', {
          isGhost: true
        })
      }
    }
  }
</script>

<style lang="stylus">

</style>
