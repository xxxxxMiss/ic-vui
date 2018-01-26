<template>
  <div class="demo-header">
    <ic-header
      @click-left="clickIcon"
      @click-right="clickRight"
      left-icon="titlebar-back"
      title="内推职位"
      :right-icon="['titlebar-share', 'titlebar-search']"></ic-header>

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

    <ic-header
      right-text="跳过"
      theme="#f5f5f5"
      ></ic-header>

    <ic-header
      right-text="跳过"
      theme="#20a0ff"
      color="#fff"
      ></ic-header>

    <ic-header
      :show-divider="false"
      right-text="跳过"
      left-icon="close"
      theme="transparent"
      ></ic-header>
  </div>
</template>

<script>
  export default {
    methods: {
      clickIcon (e) {
        console.log(e)
      },
      clickRight (e, index) {
        console.log(e)
        console.log(index)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-header
    .ic-header + .ic-header
      margin-top 20px
    .ic-header
      position relative
</style>
