<template>
  <div class="demo-button">
    <p>
      <xm-button>默认按钮</xm-button>
      <xm-button type="primary">主要按钮</xm-button>
      <xm-button type="success">成功按钮</xm-button>
    </p>
    <p>
      <xm-button type="warning">警告按钮</xm-button>
      <xm-button type="danger">危险按钮</xm-button>
      <xm-button type="info">信息按钮</xm-button>
    </p>

    <p>
      <xm-button round>默认按钮</xm-button>
      <xm-button type="primary" round>主要按钮</xm-button>
      <xm-button type="success" round>成功按钮</xm-button>
    </p>
    <p>
      <xm-button type="warning">警告按钮</xm-button>
      <xm-button type="danger">危险按钮</xm-button>
      <xm-button type="info">信息按钮</xm-button>
    </p>

    <p>
      <xm-button size="large" type="primary">主要按钮</xm-button>
      <xm-button size="small" type="success">成功按钮</xm-button>
      <xm-button size="mini" type="warning">警告按钮</xm-button>
    </p>

    <p>
      <xm-button type="success">
        <xm-icon name="success"></xm-icon>
        <span>支付成功</span>
      </xm-button>
      <xm-button type="primary" prefix-icon="" suffix-icon="">
        <span>编辑</span>
        <xm-icon name="edit-data"></xm-icon>
      </xm-button>
    </p>

    <p>
      <xm-button disabled>禁用按钮</xm-button>
      <xm-button disabled type="danger">
        <xm-icon name="close"></xm-icon>
        <span>禁用按钮</span>
      </xm-button>
    </p>
    <p>
      <xm-button type="primary" fixed>
        <xm-icon name="after-sale"></xm-icon>
        <span>底部固定按钮 (1)</span>
      </xm-button>
    </p>

    <p class="btn-block">
      <xm-button size="large" block>默认块按钮</xm-button>
      <xm-button size="large" block type="primary">主色块按钮</xm-button>
    </p>

    <p>
      <xm-button>
        <xm-spinner></xm-spinner>
        <span>底部固定按钮 (1)</span>
      </xm-button>
    </p>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus">
  .demo-button
      .xm-btn + .xm-btn
        margin-left 10px
      .btn-block .xm-btn
        margin-top 20px
        margin-left 0
</style>
