<template>
  <div class="demo-datetime-picker">
    <ic-input @click="showPopup"
      placeholder="请选择起始时间"
      v-model="date"
      readonly
      suffix-icon="go-large"
      prefix-icon="resume-education"
    ></ic-input>
    <ic-input @click="visible2 = true"
      placeholder="请选择起始时间"
      v-model="date2"
      readonly
      suffix-icon="go-large"
      prefix-icon="resume-education"
    ></ic-input>


    <ic-popup :visible.sync="visible">
      <ic-datetime-picker rotate-effect
        :start-date="startDate"
        :end-date="endDate"
        v-model="selectedDate"
        type="range-date"></ic-datetime-picker>

    </ic-popup>
    <ic-popup :visible.sync="visible2">
      <ic-datetime-picker class="picker-hidden-date"
        rotate-effect
        v-model="selectedDate2"
        type="date"></ic-datetime-picker>
    </ic-popup>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        visible2: false,
        date: '',
        date2: '',
        selectedDate: '',
        selectedDate2: '',
        startDate: new Date(1950, 0, 1),
        endDate: new Date()
      }
    },
    watch: {
      selectedDate (newVal) {
        console.log('newVal: ', newVal)
        this.date = newVal.join('-')
      },
      selectedDate2 (newVal) {
        const year = newVal.getFullYear()
        const month = newVal.getMonth() + 1
        this.date2 = `${year}.${month}`
      }
    },
    methods: {
      showPopup () {
        this.visible = true
      }
    }
  }
</script>

<style lang="stylus">
  .demo-datetime-picker
    .ic-input + .ic-input
      margin-top 15px
    .picker-hidden-date .ic-picker__items .ic-picker__slot:nth-of-type(3)
      display none
</style>
