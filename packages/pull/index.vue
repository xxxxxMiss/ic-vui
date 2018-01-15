<template>
  <div class="ic-pull">
    <div class="ic-pull__wrapper"
      ref="wrapper"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="ic-pull__scroller">
        <i class="glyph__arrow--down"></i>
        <slot></slot>
      </div>
      <div class="ic-pull__loading">
        <i class="ic-pull__load-arrow"
          :class="{ 'ic-pull__load-arrow--rotate': rotateArrow }"
          v-show="showPullIcon"></i>
        <ic-spinner
          v-show="showLoadingIcon"></ic-spinner>
        <i class="glyph__success"
          v-show="showDoneIcon"></i>
        <i class="glyph__close--gray"
          v-show="showFailIcon"></i>
        <span class="ic-pull__text">{{currentText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ic-pull',

    props: {
      loadingOptions: {
        type: Object,
        default: () => ({
          pullText: '上拉加载',
          triggerText: '释放立即加载',
          loadingText: '正在加载...',
          doneText: '加载完成',
          failText: '加载失败'
        })
      }
    },
    data () {
      return {
        deltaY: 0,
        touchStartY: 0,
        touchCurrentY: 0,
        currentText: this.loadingOptions.pullText,
        timer: null
      }
    },
    computed: {
      showPullIcon () {
        return this.currentText === this.loadingOptions.pullText ||
          this.currentText === this.loadingOptions.triggerText
      },
      rotateArrow () {
        return this.currentText === this.loadingOptions.triggerText
      },
      showLoadingIcon () {
        return this.currentText === this.loadingOptions.loadingText
      },
      showDoneIcon () {
        return this.currentText === this.loadingOptions.doneText
      },
      showFailIcon () {
        return this.currentText === this.loadingOptions.failText
      }
    },
    methods: {
      handleTouchStart (e) {
        this.touchCurrentY = e.type === 'touchstart'
          ? e.targetTouches[0].pageY : e.pageY
        this.touchStartY = this.touchCurrentY
        this.currentText = this.loadingOptions.pullText
      },
      handleTouchMove (e) {
        this.touchCurrentY = e.type === 'touchmove'
          ? e.targetTouches[0].pageY : e.pageY
        this.deltaY = this.touchCurrentY - this.touchStartY

        if (this.deltaY > 0) return

        this.$refs.wrapper.style = `transform: translate3d(0, ${this.deltaY}px, 0)`
        if (Math.abs(this.deltaY) > 40) this.currentText = this.loadingOptions.pullText
        if (Math.abs(this.deltaY) > 60) this.currentText = this.loadingOptions.triggerText
      },
      handleTouchEnd (e) {
        if (this.deltaY > 0) return

        if (Math.abs(this.deltaY) > 60) {
          this.currentText = this.loadingOptions.loadingText
          this.$refs.wrapper.style = `transform: translate3d(0, -50px, 0)`
          this.$emit('pull-loading', this.done)
        }
      },
      done (status) {
        if (status && status === 'fail') {
          this.currentText = this.loadingOptions.failText
        } else {
          this.currentText = this.loadingOptions.doneText
        }
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(_ => {
          this.$refs.wrapper.style = `transform: translate3d(0, 0, 0)`
        }, 500)
      }
    }
  }
</script>
