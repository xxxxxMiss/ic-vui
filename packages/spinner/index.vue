<template>
  <span class="ic-spinner"
    :class="[
      'ic-spinner--' + type
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

    <span v-if="type === 'gradient'"
      class="ic-spinner__inner"></span>

    <span v-if="type === 'crash-ball'"
      class="ic-spinner__inner">
      <i v-for="(val, index) in ['top', 'right', 'bottom', 'left']"
        :class="[ 'ic-spinner--' + val ]"
        :style="{
          'background-color': colors[index]
        }"></i>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'ic-spinner',

    props: {
      type: {
        type: String,
        default: 'default' // crash-ball, circle
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
