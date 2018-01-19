<template>
  <div class="ic-input"
    :class="[
      'ic-input--' + size,
      {
        'ic-input--round': round,
        'ic-input--prefix': prefixIcon,
        'ic-input--suffix': suffixIcon || clearable,
        'ic-input--timer': timer
      }
    ]">
    <slot name="prepend"></slot>
    <div class="ic-input__inner">
      <template v-if="type !== 'textarea'">
        <ic-icon v-if="prefixIcon"
          class="ic-icon-prefix"
          :name="prefixIcon"></ic-icon>
        <input class="ic-input__input"
          :style="style"
          v-model="currentValue"
          :type="type"
          :autofocus="autofocus"
          v-bind="$attrs"
          v-on="$listeners">
        <ic-icon v-if="suffixIcon"
          :name="suffixIcon"
          class="ic-icon-suffix"
          @click.stop="clickSuffix"></ic-icon>
        <ic-icon v-show="clearable && value"
          name="clean"
          class="ic-icon-suffix"
          @click.stop="onClear"></ic-icon>
        <ic-button v-if="timer"
          timer
          text
          @timer-end="timerEnd"
          @click="timerClick"></ic-button>
      </template>

      <template v-else>
        <textarea
          class="ic-input__textarea"
          v-model="currentValue"
          :rows="rows"
          :autofocus="autofocus"
          ref="textarea"
          :style="textareaStyle"
          v-bind="$attrs"
          v-on="$listeners"
        ></textarea>
        <div
          ref="mirror"
          class="ic-input__textarea ic-textarea--mirror"
          contenteditable
        >{{currentValue}}</div>
      </template>
    </div>
    <slot name="append"></slot>
  </div>
</template>

<script>
  export default {
    name: 'ic-input',

    props: {
      prefixIcon: String,
      suffixIcon: String,
      size: {
        type: String,
        default: 'medium' // large, medium, small
      },
      clearable: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      timer: {
        type: Boolean,
        default: false
      },
      value: {},
      autofocus: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      timer: {
        type: Boolean,
        default: false
      },
      timerEnd: {
        type: Function,
        default: () => {}
      },
      to: [String, Object],
      rows: {
        type: [String, Number],
        default: 3
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      }
    },
    computed: {
      currentValue: {
        set (v) {
          this.resizeTextarea()
          // https://github.com/vuejs/vue/issues/7042
          this.$nextTick(_ => this.$emit('input', v))
        },
        get () {
          return this.value
        }
      },
      style () {
        return {
          paddingRight: this.clearable && this.value && this.suffixIcon
            ? '100px'
            : this.clearable && !this.value && this.suffixIcon
              ? '50px'
              : ''
        }
      }
    },
    data () {
      return {
        textareaStyle: {}
      }
    },
    methods: {
      resizeTextarea () {
        if (this.type === 'textarea') {
          const { mirror, textarea } = this.$refs
          const mHeight = mirror.getBoundingClientRect().height
          const tHeight = textarea.getBoundingClientRect().height
          if (mHeight >= tHeight) {
            this.textareaStyle.height = `${mHeight}px`
          }
        }
      },
      onClear () {
        this.currentValue = ''
      },
      clickSuffix (e) {
        this.$emit('click-suffix', e)
        if (this.to) {
          this.$router.push(this.to)
        }
      },
      timerClick (e) {
        this.$emit('timer-click', e)
      }
    }
  }
</script>
