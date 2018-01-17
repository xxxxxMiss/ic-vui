<template>
  <div class="demo-picker">
    <ic-picker rotate-effect
      @change="changeValue"
      :items="items"></ic-picker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      }
    },
    methods: {
      changeValue (picker, values) {
        console.log(picker)
        console.log(values)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-picker
    color #333
</style>
