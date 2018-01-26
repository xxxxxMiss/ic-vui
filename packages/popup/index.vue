<template>
  <div class="ic-popup"
    :class="{
      'ic-popup--visible': visible
    }"
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
      }
    },
    methods: {
      close () {
        this.$emit('update:visible', false)
      }
    }
  }
</script>
