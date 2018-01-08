<template>
  <div class="demo-header">
    <ic-header
      left-text="返回"
      left-icon="arrow-left"
      title="内推职位"
      :right-icon="['share', 'location']"></ic-header>

    <ic-header
      left-icon="arrow-left"
      right-text="预览"
      title="内推职位"
      ></ic-header>

    <ic-header
      left-icon="arrow-left"
      right-text="预览"
      title="当标题很长的时候的显示"
      ></ic-header>

    <ic-header
      left-icon="close"
      title="职位详情"
      ></ic-header>
  </div>
</template>

<style lang="stylus">
  .demo-header
    .ic-header + .ic-header
      margin-top 20px
</style>
