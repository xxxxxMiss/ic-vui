<template>
  <header class="ic-header"
    :class="{ 'ic-header--divider': showDivider }"
    :style="{
      'background-color': theme,
      'color': color
    }">
    <div v-if="leftText || leftIcon"
      class="ic-header__left"
      @click="clickLeft">
      <ic-icon v-if="leftIcon" :name="leftIcon"></ic-icon>
      <span v-if="leftText">{{ leftText }}</span>
    </div>
    <div v-if="title"
      class="ic-header__title">
      {{ title }}
    </div>
    <div v-if="rightIcon || rightText"
      class="ic-header__right">
      <template v-if="rightIcon">
        <ic-icon
          v-for="(val, index) in rightOption"
          :key="index"
          :name="val"
          @click="clickRight($event, index)"
        ></ic-icon>
      </template>
      <span v-if="rightText"
        @click="clickRight">{{ rightText }}</span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'ic-header',

    props: {
      theme: {
        type: String,
        default: '#fff'
      },
      color: {
        type: String,
        default: '#333'
      },
      title: String,
      leftText: String,
      leftIcon: String,
      rightIcon: [String, Array],
      rightText: String,
      showDivider: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      rightOption () {
        return typeof this.rightIcon === 'string'
          ? [this.rightIcon]
          : this.rightIcon
      }
    },
    methods: {
      clickLeft (e) {
        this.$emit('click-left', e)
      },
      clickRight (e, index) {
        this.$emit('click-right', e, index)
      }
    }
  }
</script>
