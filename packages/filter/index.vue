<template>
  <div class="ic-filter">
    <div class="ic-filter__header">
      <div class="ic-filter__header-item"
        :style="{ width: (100 / innerHeaders.length) + '%' }"
        :class="{
          'ic-filter__header-item--active': currentIndex === index
        }"
        v-for="(val, index) in innerHeaders"
        :key="index"
        @click="clickHeaderItem(index, val)">
        <span class="ic-filter__header-text">{{ val }}</span>
        <ic-icon name="arrow-down"></ic-icon>
      </div>
    </div>
    <transition-group name="modal-fade">
      <div class="ic-filter__content"
        v-show="currentIndex === index"
        v-for="(item, index) in data"
        :key="index"
        @click="clickMask">
        <div class="ic-filter__panel">
          <div class="ic-filter__panel-item"
            v-for="(child, idx) in item.children"
            :key="idx"
            @click.stop="clickPanelItem(child, idx, index)"
          >
            <div class="ic-filter__row"
              :class="{
                'ic-filter__row--active': currentPanelIndexs[currentIndex] === idx
              }">
              <ic-icon v-if="child.icon" :name="child.icon"></ic-icon>
              {{ child[item.labelKey] }}
            </div>
            <i class="ic-filter__checkbox glyph__checkbox--primary"
              :style="{
                'display': currentPanelIndexs[currentIndex] === idx ? 'inline-block' : 'none'
              }"></i>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'ic-filter',

    props: {
      data: {
        type: Array
      },
      headers: Array,
      value: {},
      closeOnClickMask: {
        type: Boolean,
        default: true
      }
    },
    data () {
      const headers = this.data.map(item => item.text)
      return {
        innerHeaders: this.headers || headers,
        currentIndex: this.value,
        currentPanelIndexs: {}
      }
    },
    watch: {
      value (newVal) {
        const pullEl = document.querySelector('.ic-pull__scroller')
        if (newVal === '') {
          document.body.style.overflowY = 'auto'
          pullEl && (pullEl.style.overflowY = 'auto')
        } else {
          document.body.style.overflowY = 'hidden'
          pullEl && (pullEl.style.overflowY = 'hidden')
        }
        // caution: (0 != '' => false, 0 !== '' => true)
        this.$emit('visible-change', newVal !== '')
      }
    },
    methods: {
      clickPanelItem (item, itemIndex, headerIndex) {
        this.currentPanelIndexs[headerIndex] = itemIndex
        this.$emit('item-click', {
          item,
          headerIndex,
          itemIndex
        })
        this.currentIndex = ''
        this.$emit('input', '')
        this.innerHeaders.splice(
          headerIndex, 1, item[this.data[headerIndex].labelKey]
        )
      },
      clickHeaderItem (index, val) {
        if (this.value !== index) {
          this.currentIndex = index
        } else {
          this.currentIndex = ''
        }
        this.$emit('input', this.currentIndex)
        this.$emit('change', this.currentIndex)
      },
      clickMask () {
        if (this.closeOnClickMask) {
          this.currentIndex = ''
          this.$emit('input', '')
        }
      }
    }
  }
</script>
