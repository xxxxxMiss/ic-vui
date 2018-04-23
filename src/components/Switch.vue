<template>
  <div class="demo-switch">
    <ic-cell
      title="large">
    </ic-cell>
    <ic-switch v-model="m1" true-value="开" false-value="关" size="large" @on-change="change">
      <span slot="open">开</span>
      <span slot="close">关</span>
    </ic-switch>

    <ic-cell
      title="defalut">
    </ic-cell>
    <ic-switch v-model="m1" true-value="开" false-value="关">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </ic-switch>

    <ic-cell
      title="small">
    </ic-cell>
    <ic-switch v-model="m1" true-value="开" false-value="关" size="small"></ic-switch>

    <ic-cell
      title="disabled">
    </ic-cell>
    <ic-switch v-model="m1" true-value="开" :disabled='true' false-value="关">
      <span slot="open">开</span>
      <span slot="close">关</span>
    </ic-switch>
  </div>
</template>

<script>
  export default {
    title: 'Switch',
    data () {
      return {
        m1: '开'
      }
    },
    methods: {
      change (event) {
        console.log(event)
      }
    }
  }
</script>
<style lang="stylus">
  .demo-switch
    div
      margin 5px 0
</style>