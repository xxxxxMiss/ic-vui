<template>
  <div class="demo-popup">
    <ic-input @click="showPopup"
      v-model="degree"
      readonly
      suffix-icon="go-large"
      prefix-icon="resume-education"
    ></ic-input>
    <ic-popup :visible.sync="visible">
      <ic-picker rotate-effect
        @change="changeValue1"
        :items="items1"></ic-picker>
    </ic-popup>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        degree: '专科',
        items1: [
          {
            flex: 1,
            values: ['专科', '本科', '研究生', '硕士', '博士']
          }
        ]
      }
    },
    methods: {
      showPopup () {
        this.visible = true
      },
      changeValue1 (picker, values) {
        this.degree = values[0]
      }
    }
  }
</script>

<style lang="stylus">
  .demo-popup
    padding 25px 15px
</style>
