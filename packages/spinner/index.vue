<template>
  <span class="xm-spinner"
    :class="[
      'xm-spinner--' + type
    ]">

    <span v-if="type === 'default'"
      :style="{color: colors[0]}"
      class="xm-spinner__inner">
      <i v-for="i in 12" :key="i"></i>
    </span>

    <span v-if="type === 'circle'"
      class="xm-spinner__inner"
      :style="{
        'border-color': colors[0],
        'border-left-color': 'transparent'
      }"></span>

    <span v-if="type === 'crash-ball'"
      class="xm-spinner__inner">
      <i v-for="(val, index) in ['top', 'right', 'bottom', 'left']"
        :class="['xm-spinner--' + val]"
        :style="{
          'background-color': colors[index]
        }"></i>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'xm-spinner',

    props: {
      type: {
        type: String,
        default: 'default' // crash-ball, circle
      },
      color: {
        type: String,
        default: ''
      }
    },
    computed: {
      colors () {
        return this.color.trim().split(/\s+/)
      }
    }
  }
</script>


<style lang="stylus">
  @import '../theme/spinner.styl'
</style>
