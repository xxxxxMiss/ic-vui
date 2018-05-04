<template>
  <div class="ic-progress">
    <div class="ic-progress-circle"
      :style="{height: width + 'px', width: width + 'px'}">
      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient">
            <stop v-for="(item, index) in gradients"
              :offset="item.offset"
              :stop-color="item.color"
              :key="index"></stop>
          </linearGradient>
        </defs>
        <path class="ic-progress-circle__track"
          :d="trackPath" stroke="#eee"
          :stroke-width="relativeStrokeWidth"
          stroke-linecap="round"
          fill="none"></path>
        <path class="ic-progress-circle__path"
          :d="trackPath"
          stroke-linecap="round"
          :stroke="stroke"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="circlePathStyle"></path>
      </svg>
    </div>
    <div class="ic-progress__text"
      v-if="showText">
      <slot>{{ percentage }}%</slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ic-progress',

    props: {
      percentage: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
      },
      strokeWidth: {
        type: Number,
        default: 6
      },
      textInside: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 126
      },
      showText: {
        type: Boolean,
        default: true
      },
      status: String,
      gradients: {
        type: Array,
        default: () => {
          return [
            { color: '#FF8030', offset: '50%' },
            { color: '#FF6644', offset: '100%' }
          ]
        }
      },
      isGradient: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      relativeStrokeWidth () {
        return (this.strokeWidth / this.width * 100).toFixed(1)
      },
      trackPath () {
        const radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10)
        return `M 16 84 A ${radius} ${radius} 0 1 1 ${radius * 2 - 8} 84`
      },
      perimeter () {
        const radius = 50 - parseFloat(this.relativeStrokeWidth) / 3
        return 2 * Math.PI * radius * 4 / 5
      },
      circlePathStyle () {
        const perimeter = this.perimeter
        return {
          strokeDasharray: `${perimeter}px,${perimeter}px`,
          strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
          transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
      },
      stroke () {
        let ret
        switch (this.status) {
          case 'success':
            ret = '#13ce66'
            break
          case 'exception':
            ret = '#ff4949'
            break
          default:
            ret = '#FF6644'
        }
        return this.isGradient ? 'url(#gradient)' : ret
      },
      progressTextSize () {
        return this.type === 'line'
          ? 12 + this.strokeWidth * 0.4
          : this.width * 0.111111 + 2
      }
    }
  }
</script>
