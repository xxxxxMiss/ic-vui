<template>
  <div class="demo-button">
    <p>
      <ic-button>默认按钮</ic-button>
      <ic-button type="primary">主要按钮</ic-button>
      <ic-button type="success">成功按钮</ic-button>
    </p>
    <p>
      <ic-button type="warning">警告按钮</ic-button>
      <ic-button type="danger">危险按钮</ic-button>
      <ic-button type="info">信息按钮</ic-button>
    </p>

    <p>
      <ic-button round>默认按钮</ic-button>
      <ic-button type="primary" round>主要按钮</ic-button>
      <ic-button type="success" round>成功按钮</ic-button>
    </p>
    <p>
      <ic-button type="warning">警告按钮</ic-button>
      <ic-button type="danger">危险按钮</ic-button>
      <ic-button type="info">信息按钮</ic-button>
    </p>

    <p>
      <ic-button size="large" type="primary">主要按钮</ic-button>
      <ic-button size="small" type="success">成功按钮</ic-button>
      <ic-button size="mini" type="warning">警告按钮</ic-button>
    </p>

    <p>
      <ic-button text>文本按钮</ic-button>
      <ic-button text timer
        end-text='重新发送'
        @timer-end="timerEnd">获取验证码</ic-button>
    </p>

    <p>
      <ic-button type="success"
        prefix-icon="success">支付成功</ic-button>
      <ic-button type="primary"
        prefix-icon="success"
        suffix-icon="close">编辑</ic-button>
    </p>

    <p>
      <ic-button disabled>禁用按钮</ic-button>
      <ic-button disabled
        type="danger">
        <span>禁用按钮</span>
      </ic-button>
    </p>
    <p>
      <ic-button type="primary" fixed
        prefix-icon="after-sale">
        底部固定按钮 (1)
      </ic-button>
    </p>

    <p class="btn-block">
      <ic-button size="large" block>默认块按钮</ic-button>
      <ic-button size="large" block type="primary">主色块按钮</ic-button>
    </p>

    <p>
      <ic-button>
        <ic-spinner></ic-spinner>
        <span>自定义</span>
      </ic-button>
    </p>
  </div>
</template>

<script>
  export default {
    methods: {
      timerEnd () {
        console.log('计时器结束')
      }
    }
  }
</script>

<style lang="stylus">
  .demo-button
      .ic-btn + .ic-btn
        margin-left 10px
      .btn-block .ic-btn
        margin-top 20px
        margin-left 0
      p
        margin 10px 0
</style>
