<template>
  <div class="ic-filter">
    <div class="ic-filter__panel">
      <div class="ic-filter__item"
        @click="filterItemClick">
        <div class="ic-filter__row">{{item[labelKey]}}</div>
        <i class="ic-filter__checkbox glyph__checkbox--primary"
          :style="{
            'display': itemActiveId === item.key ? 'inline-block' : 'none'
          }"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ic-filter',

    props: {
      item: {
        type: Object,
        default: () => ({})
      },
      itemActiveId: {
        type: [String, Number],
        default: 0
      },
      labelKey: {
        type: String,
        default: 'label'
      }
    },
    methods: {
      filterItemClick () {
        this.$emit('filter-item-click')
      }
    }
  }
</script>
