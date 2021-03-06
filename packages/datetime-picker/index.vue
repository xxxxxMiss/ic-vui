<template>
  <ic-popup :visible.sync="visible">
    <ic-picker
      :rotate-effect="rotateEffect"
      :items="dateSlots"
      @change="onChange"
      :show-toolbar="true"
      :visible-item-count="visibleItemCount"
      ref="picker">
      <ic-button text @click="visible = false; $emit('cancle')">取消</ic-button>
      <div class="ic-picker__title" v-if="title">{{ title }}</div>
      <ic-button text @click="confirm">确定</ic-button>
    </ic-picker>
  </ic-popup>
</template>

<script>
  const FORMAT_MAP = {
    Y: 'year',
    M: 'month',
    D: 'date',
    H: 'hour',
    m: 'minute'
  }

  export default {
    name: 'ic-datetime-picker',

    props: {
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      type: {
        type: String,
        default: 'datetime' // time, date, single-date, range-date
      },
      startDate: {
        type: Date,
        default() {
          return new Date(new Date().getFullYear() - 10, 0, 1)
        }
      },
      endDate: {
        type: Date,
        default() {
          return new Date(new Date().getFullYear() + 10, 11, 31)
        }
      },
      startHour: {
        type: Number,
        default: 0
      },
      endHour: {
        type: Number,
        default: 23
      },
      yearFormat: {
        type: String,
        default: '{value}'
      },
      monthFormat: {
        type: String,
        default: '{value}'
      },
      dateFormat: {
        type: String,
        default: '{value}'
      },
      hourFormat: {
        type: String,
        default: '{value}'
      },
      minuteFormat: {
        type: String,
        default: '{value}'
      },
      visibleItemCount: {
        type: Number,
        default: 7
      },
      rotateEffect: {
        type: Boolean,
        default: false
      },
      value: null,
      title: String
    },
    data() {
      let defaultValue = []
      if (Array.isArray(this.value)) {
        defaultValue = this.value
      } else {
        defaultValue = this.value.split(/\.|\/|-/)
      }
      return {
        visible: false,
        startYear: null,
        endYear: null,
        startMonth: 1,
        endMonth: 12,
        startDay: 1,
        endDay: 31,
        currentValue: null,
        selfTriggered: false,
        dateSlots: [],
        shortMonthDates: [],
        longMonthDates: [],
        febDates: [],
        leapFebDates: [],
        defaultValue
      }
    },
    computed: {
      // 边界定义
      rims() {
        if (!this.currentValue) return {
          year: [], month: [], date: [], hour: [], min: []
        }
        let result
        if (this.type === 'time') {
          result = {
            hour: [this.startHour, this.endHour],
            min: [0, 59]
          }
          return result
        }
        result = {
          year: [this.startDate.getFullYear(), this.endDate.getFullYear()],
          month: [1, 12],
          date: [1, this.getMonthEndDay(this.getYear(this.currentValue), this.getMonth(this.currentValue))],
          hour: [0, 23],
          min: [0, 59]
        }
        this.rimDetect(result, 'start')
        this.rimDetect(result, 'end')
        return result
      },

      typeStr() {
        if (this.type === 'time') {
          return 'Hm'
        } else if (this.type === 'date') {
          return 'YMD'
        } else if (this.type === 'range-date') {
          return 'YMYM'
        } else if (this.type === 'single-date') {
          return 'YM'
        } else {
          return 'YMDHm'
        }
      }
    },

    watch: {
      value(val) {
        this.currentValue = val
      },

      rims() {
        this.generateSlots()
      },

      visible(val) {
        this.$emit('visible-change', val)
      }
    },
    methods: {
      open() {
        this.visible = true
      },

      close() {
        this.visible = false
      },
      // 闰年
      isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
      },

      isShortMonth(month) {
        return [4, 6, 9, 11].indexOf(month) > -1
      },

      getMonthEndDay(year, month) {
        if (this.isShortMonth(month)) {
          return 30
        } else if (month === 2) {
          return this.isLeapYear(year) ? 29 : 28
        } else {
          return 31
        }
      },

      getTrueValue(formattedValue) {
        if (!formattedValue) return
        while (isNaN(parseInt(formattedValue, 10))) {
          formattedValue = formattedValue.slice(1)
        }
        return parseInt(formattedValue, 10)
      },
      // get selected values
      getValue(values) {
        let value
        if (this.type === 'time') {
          value = values.map(value => ('0' + this.getTrueValue(value)).slice(-2)).join(':')
        } else if (this.type === 'range-date') {
          value = [
            values.slice(0, 2).join('.'),
            values.slice(2).join('.')
          ]
        } else {
          let year = this.getTrueValue(values[0])
          let month = this.getTrueValue(values[1])
          let date = this.getTrueValue(values[2])
          let maxDate = this.getMonthEndDay(year, month)
          if (date > maxDate) {
            this.selfTriggered = true
            date = 1
          }
          let hour = this.typeStr.indexOf('H') > -1
            ? this.getTrueValue(values[this.typeStr.indexOf('H')])
            : 0
          let minute = this.typeStr.indexOf('m') > -1
            ? this.getTrueValue(values[this.typeStr.indexOf('m')])
            : 0
          value = new Date(year, month - 1, date, hour, minute)
        }
        return value
      },

      onChange(picker) {
        let values = picker.$children
          .filter(child => child.$options.name === 'ic-picker-column')
          .filter(child => child.currentValue !== undefined).map(child => child.currentValue)
        if (this.selfTriggered) {
          this.selfTriggered = false
          return
        }
        if (values.length !== 0) {
          this.currentValue = this.getValue(values)
          this.handleValueChange()
        }
      },

      fillValues(type, start, end) {
        let values = []
        for (let i = start; i <= end; i++) {
          if (i < 10) {
            values.push(this[`${FORMAT_MAP[type]}Format`].replace('{value}', ('0' + i).slice(-2)))
          } else {
            values.push(this[`${FORMAT_MAP[type]}Format`].replace('{value}', i))
          }
        }
        return values
      },

      pushSlots(slots, type, start, end, defaultValue) {
        const values = this.fillValues(type, start, end)
        const defaultIndex = values.indexOf(defaultValue)
        slots.push({
          flex: 1,
          values,
          defaultIndex
        })
      },

      generateSlots() {
        let dateSlots = []
        const INTERVAL_MAP = {
          Y: this.rims.year,
          M: this.rims.month,
          D: this.rims.date,
          H: this.rims.hour,
          m: this.rims.min
        }
        let typesArr = this.typeStr.split('')
        typesArr.forEach((type, index) => {
          if (INTERVAL_MAP[type]) {
            this.pushSlots.apply(
              null,
              [dateSlots, type].concat(
                INTERVAL_MAP[type], this.defaultValue[index]
              )
            )
          }
        })
        if (this.typeStr === 'Hm') {
          dateSlots.splice(1, 0, {
            divider: true,
            content: ':'
          })
        }
        if (this.typeStr === 'YMYM') {
          // ;[].push.apply(dateSlots, dateSlots)
          dateSlots.splice(2, 0, {
            divider: true,
            content: '-'
          })
        }
        this.dateSlots = dateSlots
        this.handleExceededValue()
      },

      handleExceededValue() {
        let values = []
        if (this.type === 'time') {
          const currentValue = this.currentValue.split(':')
          values = [
            this.hourFormat.replace('{value}', currentValue[0]),
            this.minuteFormat.replace('{value}', currentValue[1])
          ]
        } else {
          values = [
            this.yearFormat.replace('{value}', this.getYear(this.currentValue)),
            this.monthFormat.replace('{value}', ('0' + this.getMonth(this.currentValue)).slice(-2)),
            this.dateFormat.replace('{value}', ('0' + this.getDate(this.currentValue)).slice(-2))
          ]
          if (this.type === 'datetime') {
            values.push(
              this.hourFormat.replace('{value}', ('0' + this.getHour(this.currentValue)).slice(-2)),
              this.minuteFormat.replace('{value}', ('0' + this.getMinute(this.currentValue)).slice(-2))
            )
          }
        }
        this.dateSlots.filter(child => child.values !== undefined)
          .map(slot => slot.values).forEach((slotValues, index) => {
            if (slotValues.indexOf(values[index]) === -1) {
              values[index] = slotValues[0]
            }
          })
        this.$nextTick(() => {
          this.setSlotsByValues(values)
        })
      },

      setSlotsByValues(values) {
        const setSlotValue = this.$refs.picker.setItemValue
        if (this.type === 'time') {
          setSlotValue(0, values[0])
          setSlotValue(1, values[1])
        }
        if (this.type !== 'time') {
          setSlotValue(0, values[0])
          setSlotValue(1, values[1])
          if (this.type === 'date') {
            setSlotValue(2, values[2])
          }
          if (this.type === 'datetime') {
            setSlotValue(2, values[2])
            setSlotValue(3, values[3])
            setSlotValue(4, values[4])
          }
          if (this.type === 'range-date') {
            setSlotValue(2, values[0])
            setSlotValue(3, values[1])
          }
        }
        ;[].forEach.call(
          this.$refs.picker.$children.filter(child => child.$options.name === 'ic-picker-column'),
          child => child.doOnValueChange()
        )
      },

      rimDetect(result, rim) {
        let position = rim === 'start' ? 0 : 1
        let rimDate = rim === 'start' ? this.startDate : this.endDate
        if (this.getYear(this.currentValue) === rimDate.getFullYear()) {
          result.month[position] = rimDate.getMonth() + 1
          if (this.getMonth(this.currentValue) === rimDate.getMonth() + 1) {
            result.date[position] = rimDate.getDate()
            if (this.getDate(this.currentValue) === rimDate.getDate()) {
              result.hour[position] = rimDate.getHours()
              if (this.getHour(this.currentValue) === rimDate.getHours()) {
                result.min[position] = rimDate.getMinutes()
              }
            }
          }
        }
      },

      isDateString(str) {
        return typeof str === 'string' &&
          /\d{4}(\-|\/|.)\d{1,2}(\1\d{1,2})?/.test(str)
      },

      getYear(value) {
        value = Array.isArray(value) ? value[0] : value
        const a = this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[0] :

        value.getFullYear()
      },

      getMonth(value) {
        value = Array.isArray(value) ? value[0] : value
        return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[1] : value.getMonth() + 1
      },

      getDate(value) {
        value = Array.isArray(value) ? value[0] : value
        return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[2] : value.getDate()
      },

      getHour(value) {
        value = Array.isArray(value) ? value[0] : value
        if (this.isDateString(value)) {
          const str = value.split(' ')[1] || '00:00:00'
          return str.split(':')[0]
        }
        return value.getHours()
      },

      getMinute(value) {
        value = Array.isArray(value) ? value[0] : value
        if (this.isDateString(value)) {
          const str = value.split(' ')[1] || '00:00:00'
          return str.split(':')[1]
        }
        return value.getMinutes()
      },

      confirm() {
        this.visible = false
        this.$emit('confirm', this.currentValue)
      },

      handleValueChange() {
        this.$emit('input', this.currentValue)
      }
    },

    mounted() {
      this.currentValue = this.value
      if (!this.value) {
        if (this.type.indexOf('date') > -1) {
          this.currentValue = this.startDate
        } else {
          this.currentValue = `${ ('0' + this.startHour).slice(-2) }:00`
        }
      }
      this.generateSlots()
    }
  }
</script>
