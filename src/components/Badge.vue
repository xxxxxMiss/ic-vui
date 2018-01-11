<template>
  <div class="demo-badge">
    <ic-badge>89</ic-badge>
    <ic-badge>1</ic-badge>
    <ic-badge></ic-badge>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus">
  .demo-badge
    .ic-badge + .ic-badge
      margin-left 15px
</style>
