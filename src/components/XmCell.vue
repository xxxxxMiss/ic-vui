<template>
  <div class="demo-cell">
    <xm-cell
      icon="add"
      content="内容"
      title="标题"
      :showArrow="true">
    </xm-cell>
    <xm-cell>
      <div slot="prefix">
        <h3 class="title">高级算法工程师</h3>
        <div class="info">
          <span>上海</span> | <span>2人</span> | <span>3-5年</span> | <span>博士</span>
        </div>
      </div>
      <div slot="suffix">
        <h3 class="title">20 - 30K</h3>
        <div class="info">2天前发布</div>
      </div>
      <div slot="bottom" class="cell-bottom">
        <xm-icon name="receive-gift"></xm-icon>
        <xm-tag type="blue">20 ~ 100分</xm-tag>
        <xm-tag type="cyan">800 ~ 500元</xm-tag>
        <xm-tag type="red">IPhone8 &times;2</xm-tag>
      </div>
    </xm-cell>
  </div>
</template>

<style lang="stylus">
  .demo-cell
    .title
      margin-top 0
      margin-bottom 9px
      font-size 18px
    .info
      color #999
      font-size 13px
    .cell-bottom
      display flex
      align-items center
      padding-top 19px
      .van-icon
        margin-right 8px
      .xm-btn + .xm-btn
        margin-left 8px
</style>
