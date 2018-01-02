<template>
  <div class="demo-header">
    <xm-header
      left-text="返回"
      left-icon="arrow-left"
      title="内推职位"
      :right-icon="['share', 'location']"></xm-header>

    <xm-header
      left-icon="arrow-left"
      right-text="预览"
      title="内推职位"
      ></xm-header>

    <xm-header
      left-icon="arrow-left"
      right-text="预览"
      title="当标题很长的时候的显示"
      ></xm-header>

    <xm-header
      left-icon="close"
      title="职位详情"
      ></xm-header>
  </div>
</template>

<style lang="stylus">
  .demo-header
    .xm-header + .xm-header
      margin-top 20px
</style>
