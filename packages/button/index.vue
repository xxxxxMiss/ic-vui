<template>
  <button class="ic-btn"
    :class="[
      'ic-btn--' + type,
      'ic-btn--' + size,
      {
        'ic-btn--round': round,
        'ic-btn--block': block,
        'ic-btn--fixed': fixed,
        'ic-btn--text': text
      }
    ]"
    :disabled="isDisabled"
    @click="onClick">
    <span class="ic-btn__text">
      <ic-icon
        v-if="prefixIcon"
        class="ic-btn--prefix-icon"
        :name="prefixIcon"
      ></ic-icon>
      <slot>{{ timerText }}</slot>
      <ic-icon
        v-if="suffixIcon"
        class="ic-btn--suffix-icon"
        :name="suffixIcon"
      ></ic-icon>
    </span>
  </button>
</template>

<script>
  import IcIcon from '../icon'

  export default {
    name: 'ic-button',

    props: {
      type: {
        type: String,
        default: 'default' // sucess, info, danger, primary
      },
      size: {
        type: String,
        default: 'normal' // large, small, mini
      },
      round: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      },
      text: {
        type: Boolean,
        default: false
      },
      timer: {
        type: Boolean,
        default: false
      },
      autoTimer: {
        type: Boolean,
        default: false
      },
      timerCount: {
        type: Number,
        default: 59
      },
      beforeTimer: Function,
      startText: {
        type: String,
        default: '获取验证码'
      },
      endText: {
        type: String,
        default: '重新发送'
      },
      prefixIcon: String,
      suffixIcon: String
    },
    data () {
      return {
        n: this.timerCount,
        end: this.endText,
        timerID: null,
        isDisabled: this.disabled
      }
    },
    computed: {
      timerText () {
        return this.timerID === null
            ? this.startText
            : this.n === 0 ? this.end : `${this.n}s`
      }
    },
    watch: {
      n (newVal) {
        if (newVal === 0) {
          this.$emit('timer-end')
        }
      },
      disabled (newVal) {
        this.isDisabled = newVal
      },
      autoTimer (newVal) {
        if (newVal) {
          this.count()
        }
      }
    },
    methods: {
      isValid () {
        return typeof this.beforeTimer === 'function' && this.beforeTimer()
      },
      onClick (e) {
        if (this.timer || this.autoTimer) {
          if (typeof this.beforeTimer === 'function') {
            if (this.beforeTimer()) {
              this.$emit('click', e)
              this.count()
            }
          } else {
            this.$emit('click', e)
            this.count()
          }
        } else {
          this.$emit('click', e)
        }
      },
      count () {
        const startUp = () => {
          this.n = this.timerCount
          this.isDisabled = true
          const steps = () => {
            if (this.n === 0) {
              clearTimeout(this.timerID)
              this.isDisabled = false
            } else {
              this.timerID = setTimeout(_ => {
                this.n--
                steps()
              }, 1000)
            }
          }
          steps()
        }
        if (typeof this.beforeTimer === 'function') {
          if (this.beforeTimer()) {
            startUp()
          }
        } else {
          startUp()
        }
      }
    },
    mounted () {
      this.autoTimer && this.count()
    },
    components: { IcIcon }
  }
</script>
