<template>
  <transition name="loading-fade">
    <div @touchmove.prevent="() => {}"
      class="ic-loading"
      v-show="visible">
      <div class="ic-loading__inner">
        <slot>
          <ic-spinner
            :color="color"
            :type="spinnerType">
          </ic-spinner>
        </slot>
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
      },
      visible: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
