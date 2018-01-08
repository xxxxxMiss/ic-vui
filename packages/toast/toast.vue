<template>
  <transition name="toast-fade">
    <div v-show="visible"
      class="ic-toast"
      :class="[
        'ic-toast--' + position,
        {
          'ic-toast--icon': icon
        }
      ]">
      <ic-icon v-if="icon"
        :name="icon"></ic-icon>
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ic-toast',
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
