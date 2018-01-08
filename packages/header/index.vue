<template>
  <header class="ic-header">
    <div class="ic-header__left">
      <ic-icon :name="leftIcon"></ic-icon>
      <span v-if="leftText">{{leftText}}</span>
    </div>
    <div class="ic-header__title">
      {{title}}
    </div>
    <div class="ic-header__right">
      <template v-if="rightIcon">
        <ic-icon
          v-for="(val, index) in rightOption"
          :key="index"
          :name="val"
        ></ic-icon>
      </template>
      <span v-if="rightText">{{rightText}}</span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'ic-header',

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
