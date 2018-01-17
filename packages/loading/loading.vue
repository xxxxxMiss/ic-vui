<template>
  <transition name="loading-fade">
    <div class="ic-loading" v-show="visible">
      <div class="ic-loading__inner">
        <ic-spinner
          :color="color"
          :type="spinnerType"
        ></ic-spinner>
        <span class="ic-loading__text" v-if="text">{{text}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ic-loading',

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'default'
      },
      color: {
        type: String,
        default: 'white'
      }
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>
