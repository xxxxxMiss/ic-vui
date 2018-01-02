<template>
  <header class="xm-header">
    <div class="xm-header__left">
      <xm-icon :name="leftIcon"></xm-icon>
      <span v-if="leftText">{{leftText}}</span>
    </div>
    <div class="xm-header__title">
      {{title}}
    </div>
    <div class="xm-header__right">
      <template v-if="rightIcon">
        <xm-icon v-for="(val, index) in rightOption"
          :key="index"
          :name="val"></xm-icon>
      </template>
      <span v-if="rightText">{{rightText}}</span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'xm-header',

    props: {
      title: String,
      leftText: String,
      leftIcon: String,
      rightIcon: [String, Array],
      rightText: String
    },
    computed: {
      rightOption () {
        return typeof this.rightIcon === 'string'
          ? [this.rightIcon]
          : this.rightIcon
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/header.styl'
</style>
