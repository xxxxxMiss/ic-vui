<template>
  <div class="demo-loading">
    <!-- <ic-loading></ic-loading> -->
    <!-- <ic-loading color="white" text="加载中..."></ic-loading> -->
    <ic-button type="primary" @click="showLoading">点击加载</ic-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showLoading () {
        this.$loading()
        setTimeout(_ => {
          // loading.close()
        }, 3000)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-loading
    height 1000px
</style>
