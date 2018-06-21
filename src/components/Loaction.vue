<template>
  <div class="demo-location">
    <ic-header
      title="选择所在城市"
      left-icon="close-window"></ic-header>
    <ic-location :data="city"
      displayKey="name"
      show-touched
      touched-type="round"
      @item-click="clickItem"></ic-location>
  </div>
</template>

<script>
  export default {
    data () {
      // const hostCity = require('mock/host-city.json')
      // const city = require('mock/city.json')
      // city['热'] = hostCity
      // const s = Object.keys(city).map(key => ({ title: key, children: city[key] }))
      return {
        city: []
      }
    },
    methods: {
      clickItem (item, index) {
        console.log(item)
        console.log(index)
      }
    }
  }
</script>
