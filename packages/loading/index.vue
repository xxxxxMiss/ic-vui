<template>
  <div class="ic-loading">
    <div class="ic-loading__inner">
      <ic-spinner
        :color="color"
        :type="spinnerType"
      ></ic-spinner>
      <span class="ic-loading__text" v-if="text">{{text}}</span>
    </div>
  </div>
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
    }
  }
</script>
