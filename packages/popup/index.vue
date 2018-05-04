<template>
  <div class="ic-popup"
    :class="[
      'ic-popup--' + direction,
      { 'ic-popup--visible': visible }
    ]"
  >
    <div @click.self="close"
      class="ic-popup__backdrop"></div>
    <div class="ic-popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ic-popup',

    props: {
      visible: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'bottom',
        validator: val => ['top', 'right', 'bottom', 'left'].indexOf(val) > -1
      }
    },
    methods: {
      close () {
        this.$emit('update:visible', false)
      }
    }
  }
</script>
