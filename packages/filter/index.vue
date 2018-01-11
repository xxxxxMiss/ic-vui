<template>
  <transition name="modal-fade">
    <div class="ic-filter" v-show="visible"
      @click="close">
      <div class="ic-filter__panel"
        :style="{ 'max-height': maxHeight }">
        <div class="ic-filter__item"
          v-for="(item, index) in items"
          :key="index"
          @click.stop="filterItemClick(item, index)">
          <div class="ic-filter__row"
            :class="{
              'ic-filter__row--active': currentActive === item.key
            }">
            <ic-icon v-if="item.icon" :name="item.icon"></ic-icon>
            {{item[labelKey]}}
          </div>
          <i class="ic-filter__checkbox glyph__checkbox--primary"
            :style="{
              'display': currentActive === item.key ? 'inline-block' : 'none'
            }"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ic-filter',

    props: {
      items: Array,
      defaultActive: {
        type: [String, Number],
        default: 0
      },
      labelKey: {
        type: String,
        default: 'label'
      },
      maxHeight: {
        type: String,
        default: '70%'
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentActive: this.defaultActive
      }
    },
    methods: {
      filterItemClick (item, index) {
        this.currentActive = item.key
        this.$emit('filter-item-click', item, index)
      },
      close () {
        this.$emit('invisible')
      }
    }
  }
</script>
