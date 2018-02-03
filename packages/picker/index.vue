<template>
  <div class="ic-picker" :class="{ 'ic-picker--3d': rotateEffect }">
    <div class="ic-picker__toolbar" v-if="showToolbar">
      <slot>
        <!-- <ic-button text @click="handleCancel">取消</ic-button>
        <ic-button text @click="handleOk">确定</ic-button> -->
      </slot>
    </div>
    <div class="ic-picker__items">
      <picker-column v-for="(item, index) in items"
        :key="index"
        :valueKey="valueKey"
        :values="item.values || []"
        :text-align="item.textAlign || 'center'"
        :visible-item-count="visibleItemCount"
        :class-name="item.className"
        :flex="item.flex"
        v-model="values[item.valueIndex]"
        :rotate-effect="rotateEffect"
        :divider="item.divider"
        :content="item.content"
        :itemHeight="itemHeight"
        :default-index="item.defaultIndex">
      </picker-column>
      <div class="ic-picker__highlight"
        :style="{
          height: itemHeight + 'px',
          marginTop: -itemHeight / 2 + 'px'
        }"></div>
    </div>
  </div>
</template>

<script>
  import PickerColumn from './picker-column.vue'

  export default {
    name: 'ic-picker',

    props: {
      items: {
        type: Array,
        default: () => []
      },
      showToolbar: {
        type: Boolean,
        default: false
      },
      visibleItemCount: {
        type: Number,
        default: 5
      },
      valueKey: String,
      rotateEffect: {
        type: Boolean,
        default: false
      },
      itemHeight: {
        type: Number,
        default: 36
      }
    },
    computed: {
      // get every item default value
      values: {
        get () {
          const values = []
          let valueIndexCount = 0
          this.items.forEach(item => {
            if (!item.divider) {
              item.valueIndex = valueIndexCount++
              values[item.valueIndex] = (item.values || [])[item.defaultIndex] || ''
            }
          })
          return values
        }
      },
      // get the number of not divider item
      itemCount () {
        let result = 0
        this.items.forEach(function (item) {
          if (!item.divider) result++
        })
        return result
      }
    },
    methods: {
      handleCancel () {
        this.$emit('cancel')
      },
      handleConfirm () {
        this.$emit('confirm', this.values)
      },
      itemValueChange () {
        this.$emit('change', this, this.values)
      },
      // get not divider child component by index
      getItem (itemIndex) {
        let count = 0
        let target
        const children = this.$children.filter(child => child.$options.name === 'picker-column')

        this.items.forEach(function(item, index) {
          if (!item.divider) {
            if (itemIndex === count) {
              target = children[index]
            }
            count++
          }
        })

        return target
      },
      getItemValue (index) {
        const item = this.getItem(index)
        if (item) {
          return item.currentValue
        }
        return null
      },
      setItemValue (index, value) {
        const item = this.getItem(index)
        if (item) {
          item.currentValue = value
        }
      },
      getItemValues (index) {
        const item = this.getItem(index)
        if (item) {
          return item.mutatingValues
        }
        return null
      },
      setItemValues (index, values) {
        const item = this.getItem(index)
        if (item) {
          item.mutatingValues = values
        }
      },
      getValues () {
        return this.values
      },
      setValues (values) {
        const itemCount = this.itemCount
        values = values || []
        if (itemCount !== values.length) {
          throw new Error('values length is not equal item count.')
        }
        values.forEach((value, index) => {
          this.setItemValue(index, value)
        })
      }
    },
    created() {
      this.$on('itemValueChange', this.itemValueChange)
      this.itemValueChange()
    },
    components: { PickerColumn }
  }
</script>
