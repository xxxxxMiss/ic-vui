<template>
  <i class="van-icon" :class="`van-icon-${name}`" v-on="$listeners">
    <slot></slot>
    <div v-if="info" class="van-icon__info">{{ info }}</div>
  </i>
</template>

<script>
export default {
  name: 'xm-icon',

  props: {
    name: String,
    info: String
  }
};
</script>

<style lang="stylus">
  @import '../theme/tmp/icon.css'
</style>
