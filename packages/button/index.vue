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
    :disabled="disabled"
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
        default: 'default'
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
      endText: {
        type: String,
        default: '重新发送'
      },
      prefixIcon: String,
      suffixIcon: String
    },
    data () {
      return {
        n: 60,
        end: this.endText
      }
    },
    computed: {
      timerText () {
        return this.n === 0 ? this.end : `${this.n}s`
      }
    },
    watch: {
      n (newVal) {
        if (newVal === 0) {
          this.$emit('timer-end')
        }
      }
    },
    methods: {
      onClick (e) {
        this.$emit('click', e)
        this.timer && this.count()
      },
      count () {
        this.n = 60
        const steps = () => {
          const timer = setTimeout(_ => {
            if (this.n === 0) {
              clearTimeout(timer)
            } else {
              this.n--
              steps()
            }
          }, 1000)
        }
        steps()
      }
    },
    components: { IcIcon }
  }
</script>
