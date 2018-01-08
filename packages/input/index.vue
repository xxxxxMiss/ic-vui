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
          v-model="currentValue"
          :readonly="readonly"
          :placeholder="placeholder"
          :type="type"
          :name="name"
          :autofocus="autofocus"
          @blur="onBlur"
          @focus="onFocus">
        <ic-icon v-if="suffixIcon"
          :name="suffixIcon"
          class="ic-icon-suffix"
          @click="clickSuffix"></ic-icon>
        <ic-icon v-show="!suffixIcon && clearable && value"
          name="clean"
          class="ic-icon-suffix"
          @click="onClear"></ic-icon>
        <ic-button v-if="timer"
          timer
          text
          @click="timerClick"></ic-button>
      </template>

      <template v-else>
        <textarea
          class="ic-input__textarea"
          v-model="currentValue"
          :readonly="readonly"
          :placeholder="placeholder"
          :name="name"
          :rows="rows"
          :autofocus="autofocus"
          @blur="onBlur"
          @focus="onFocus"
          ref="textarea"
          :style="textareaStyle"
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
      value: [String, Number],
      autofocus: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      readonly: {
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
      to: [String, Object],
      name: String,
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
          this.$emit('input', v)
        },
        get () {
          return this.value
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
      onFocus (e) {
        this.$emit('focus', e)
      },
      onBlur (e) {
        this.$emit('blur', e)
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
