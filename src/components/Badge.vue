<template>
  <div class="demo-badge">
    <xm-badge>89</xm-badge>
    <xm-badge>1</xm-badge>
    <xm-badge></xm-badge>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus">
  .demo-badge
    .xm-badge + .xm-badge
      margin-left 15px
</style>
