<template>
  <transition name="toast-fade">
    <div v-show="visible"
      class="xm-toast"
      :class="[
        'xm-toast--' + position,
        {
          'xm-toast--icon': icon
        }
      ]">
      <xm-icon v-if="icon"
        :name="icon"></xm-icon>
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'xm-toast',
    props: {
      position: {
        type: String,
        default: 'middle' // top bottom
      },
      message: String,
      icon: String,
      duration: Number
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/toast.styl'
</style>
