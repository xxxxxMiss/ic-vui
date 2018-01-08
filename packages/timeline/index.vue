<template>
  <ul class="ic-timeline"
    :class="{ 'ic-timeline--last': lastLine }">
    <slot name="title">
      <li v-if="title"
        class="ic-timeline__header">
        <ic-icon :name="icon"></ic-icon>
        <span class="ic-timeline__title">{{title}}</span>
      </li>
    </slot>
    <li class="ic-timeline__item"
      v-for="(item, index) in data"
      :key="index">
       <div class="ic-timeline__progress"
        :class="[
          'ic-timeline__progress--' + lineType
        ]"
        :style="{ color: lineColor }">
        <i :class="[ 'glyph__' + dots[index] ]"
          :style="{ color: dotColor }">
        </i>
       </div>
       <div class="ic-timeline__content">
          <div class="ic-timeline__inner">
            <slot :item="item" :index="index"></slot>
          </div>
       </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ic-timeline',

    props: {
      data: Array,
      dotColor: String,
      dotType: {
        type: String,
        default: 'circle' // fail, success
      },
      dotTypes: Object,
      lineColor: String,
      lineType: {
        type: String,
        default: 'dashed' // solid
      },
      lastLine: {
        type: Boolean,
        default: false
      },
      title: String,
      icon: String
    },
    computed: {
      dots () {
        const ret = []
        for (let i = 0, l = this.data.length; i < l; i++) {
          ret[i] = this.dotType
        }
        if (this.dotTypes) {
          Object.keys(this.dotTypes).forEach(index => {
            ret[index] = this.dotTypes[index]
          })
        }
        return ret
      }
    }
  }
</script>
