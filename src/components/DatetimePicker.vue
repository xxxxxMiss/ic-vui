<template>
  <div class="demo-datetime-picker">
    <ic-input @click="showPicker1"
      placeholder="请选择起始时间"
      v-model="date"
      readonly
      suffix-icon="go-large"
      prefix-icon="resume-education"
    ></ic-input>
    <ic-input @click="showPicker2"
      placeholder="请选择起始时间"
      v-model="date2"
      readonly
      suffix-icon="go-large"
      prefix-icon="resume-education"
    ></ic-input>


    <ic-datetime-picker
      ref="picker1"
      @confirm="handleConfirm"
      :start-date="startDate"
      :end-date="endDate"
      v-model="selectedDate"
      title="请选择时间范围"
      type="range-date"></ic-datetime-picker>

    <ic-datetime-picker
      ref="picker2"
      class="picker-hidden-date"
      v-model="selectedDate2"
      title="选择日期"
      @confirm="handleConfirm2"
      type="date"></ic-datetime-picker>
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
        selectedDate2: '2017.01',
        startDate: new Date(1950, 0, 1),
        endDate: new Date()
      }
    },
    watch: {
      selectedDate (newVal) {
        console.log('newVal: ', newVal)
        // this.date = newVal.join('-')
      }
    },
    methods: {
      showPicker1 () {
        this.$refs.picker1.open()
      },
      showPicker2 () {
        this.$refs.picker2.open()
      },
      handleConfirm (value) {
        console.log(value)
      },
      handleConfirm2 (value2) {
        if (typeof value2 === 'string') {
          this.date2 = value2
        } else {
          const year = value2.getFullYear()
          const month = value2.getMonth() + 1
          this.date2 = [year, month].join('.')
        }
      }
    },
    created () {
      setTimeout(() => {
        this.selectedDate = '2000.09'
      }, 5000)
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
