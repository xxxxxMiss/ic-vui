<template>
  <i class="ic-icon" :class="['icon-' + name]"
    :style="{ color: color || '' }"
    v-on="$listeners">
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
}
</script>
