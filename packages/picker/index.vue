<template>
  <div class="ic-picker">
    <div class="ic-picker__wrapper">
      <slot></slot>
      <div class="ic-picker__highlight"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ic-picker'
  }
</script>