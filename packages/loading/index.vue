<template>
  <div class="xm-loading">
    <div class="xm-loading__inner">
      <xm-spinner
        :color="color"
        :type="spinnerType"></xm-spinner>
      <span class="xm-loading__text" v-if="text">{{text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'xm-loading',

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'default'
      },
      color: {
        type: String,
        default: 'white'
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/loading.styl'
</style>
