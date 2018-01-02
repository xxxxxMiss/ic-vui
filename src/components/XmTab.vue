<template>
  <div class="demo-tab">
    <xm-tab @click-item="clickItem">
      <xm-tab-item
        v-for="index in 4"
        :key="index"
        :title="'选项' + index">内容 {{index}}</xm-tab-item>
    </xm-tab>
  </div>
</template>

<script>
  export default {
    methods: {
      clickItem (index) {
        console.log(index)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-tab
    font-size 14px
</style>
