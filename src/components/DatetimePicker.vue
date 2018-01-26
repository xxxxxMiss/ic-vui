<template>
  <div class="demo-datetime-picker">
    <ic-input @click="showPopup"
      placeholder="请选择起始时间"
      v-model="date"
      readonly
      suffix-icon="go-large"
      prefix-icon="resume-education"
    ></ic-input>
    <ic-popup :visible.sync="visible">
      <ic-datetime-picker v-model="selectedDate"
        type="range-date"></ic-datetime-picker>
    </ic-popup>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        date: '',
        selectedDate: ''
      }
    },
    watch: {
      selectedDate (newVal) {
        console.log('newVal: ', newVal)
      }
    },
    methods: {
      showPopup () {
        this.visible = true
      }
    }
  }
</script>
