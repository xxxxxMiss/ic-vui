<template>
  <i class="ic-icon" :class="`icon-${name}`" v-on="$listeners"
    :style="{ color }">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'ic-icon',

  props: {
    name: String,
    color: String
  }
};
</script>
