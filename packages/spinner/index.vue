<template>
  <div class="ic-spinner"
    :class="[
      'ic-spinner--' + type,
      'ic-spinner--' + size
    ]">

    <span v-if="type === 'default'"
      :style="{ color: colors[0] }"
      class="ic-spinner__inner">
      <i v-for="i in 12" :key="i"></i>
    </span>

    <span v-if="type === 'circle'"
      class="ic-spinner__inner"
      :style="{
        'border-color': colors[0],
        'border-left-color': 'transparent'
      }"></span>

    <div v-if="type === 'gradient'"
      class="ic-spinner__inner">
      <div class="ic-spinner--gradient-left"></div>
      <div class="ic-spinner--gradient-top"></div>
      <div class="ic-spinner--gradient-bottom"></div>
      <div class="ic-spinner--gradient-patch"></div>
    </div>

    <span v-if="type === 'crash-ball'"
      class="ic-spinner__inner">
      <i v-for="(val, index) in ['top', 'right', 'bottom', 'left']"
        :class="[ 'ic-spinner--' + val ]"
        :style="{
          'background-color': colors[index]
        }"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ic-spinner',

    props: {
      type: {
        type: String,
        default: 'default' // crash-ball, circle, gradient
      },
      color: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'medium' // small
      }
    },
    computed: {
      colors () {
        return this.color.trim().split(/\s+/)
      }
    }
  }
</script>
