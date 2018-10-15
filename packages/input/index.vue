<template>
  <div class="ic-input"
    :class="[
      'ic-input--' + size,
      {
        'ic-input--round': round,
        'ic-input--prefix': prefixIcon,
        'ic-input--suffix': suffixIcon || clearable,
        'ic-input--timer': timer || autoTimer,
        'ic-input--error': showError,
        'ic-input--focus': isFocus
      }
    ]">
    <slot name="prepend"></slot>
    <div class="ic-input__inner" @click.stop="$emit('click', $event)">
      <template v-if="type !== 'textarea'">
        <ic-icon v-if="prefixIcon"
          class="ic-icon-prefix"
          :name="prefixIcon"></ic-icon>
        <input class="ic-input__input"
          :unselectable="unselectable"
          :readonly="readonly"
          ref="input"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup.enter="handleKeyup"
          :style="style"
          v-model="currentValue"
          :type="type"
          :autofocus="autofocus"
          :placeholder="placeholder"
          v-bind="$attrs"
          >
        <ic-icon v-if="suffixIcon"
          :name="suffixIcon"
          class="ic-icon-suffix"
          @click.stop="clickSuffix"></ic-icon>
        <ic-icon v-show="showClearable"
          :style="{ color: '#bbb' }"
          name="clean"
          class="ic-icon-suffix"
          @click.stop="onClear"></ic-icon>
          <!-- use $attrs & $listeners in the future -->
        <ic-button v-if="timer || autoTimer"
          text
          timer
          :start-text="startText"
          :end-text="endText"
          :before-timer="beforeTimer"
          :timer-count="timerCount"
          :auto-timer="autoTimer"
          @timer-end="timerEnd"
          @click="timerClick"></ic-button>
      </template>

      <template v-else>
        <textarea
          class="ic-input__textarea"
          v-model="currentValue"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup.enter="handleKeyup"
          :rows="defaultRows"
          :autofocus="autofocus"
          ref="textarea"
          :style="textareaStyle"
          :placeholder="placeholder"
          v-bind="$attrs"
          :unselectable="unselectable"
          :readonly="readonly"
        ></textarea>
        <div
          ref="mirror"
          class="ic-input__textarea ic-textarea--mirror"
          contenteditable
        >{{ currentValue }}</div>
      </template>
    </div>
    <div v-show="errorMsg"
      class="ic-input__errormsg">{{ errorMsg }}</div>
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
      autoTimer: {
        type: Boolean,
        default: false
      },
      timerCount: {
        type: Number,
        default: 59
      },
      timerEnd: {
        type: Function,
        default: () => {}
      },
      startText: {
        type: String,
        default: '获取验证码'
      },
      endText: {
        type: String,
        default: '重新发送'
      },
      beforeTimer: Function,
      to: [String, Object],
      rows: {
        type: [String, Number],
        default: 3
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      showError: {
        type: Boolean,
        default: false
      },
      errorMsg: String,
      readonly: {
        type: Boolean,
        default: false
      },
      placeholder: String
    },
    computed: {
      currentValue: {
        set (v) {
          // https://github.com/vuejs/vue/issues/7042
          this.$nextTick(_ => this.$emit('input', v))
        },
        get () {
          return this.value
        }
      },
      showClearable () {
        return this.clearable && this.value && this.isFocus
      },
      style () {
        return {
          paddingRight: this.showClearable && this.suffixIcon
            ? '90px'
            : !this.showClearable && this.suffixIcon ||
              this.showClearable && !this.suffixIcon
              ? '50px'
              : '15px'
        }
      },
      unselectable () {
        return this.readonly ? 'on' : 'off'
      }
    },
    data () {
      return {
        textareaStyle: {},
        isFocus: false,
        defaultRows: this.rows
      }
    },
    methods: {
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
      },
      handleFocus (e) {
        this.isFocus = true
        // fix IOS `readonly`
        if (this.readonly) e.target.blur()
        this.$emit('focus', e)
      },
      handleBlur (e) {
        this.isFocus = false
        this.$emit('blur', e)
      },
      handleKeyup (e) {
        e.target.blur()
        this.$emit('keyup', e)
      }
    }
  }
</script>
