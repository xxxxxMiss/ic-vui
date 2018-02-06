<template>
  <transition name="modal-fade">
    <div v-show="visible"
      class="ic-modal"
      :class="[{
        'ic-modal--center': center
      }]"
      @click.self="handleWrapperClick">
      <div class="ic-modal__inner">
        <div class="ic-modal__header">
          <span class="ic-modal__title">{{ title }}</span>
          <i class="ic-modal__close glyph__close"
            v-if="showClose"
            @click="handleAction('cancel')"></i>
        </div>
        <div class="ic-modal__content">
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <p v-else v-html="message"></p>
          </slot>
          <ic-input v-if="showInput"
            v-model="inputValue"
            :type="inputType"
            size="large"
            ref="input"
            :placeholder="inputPlaceholder"></ic-input>
        </div>
        <div v-if="showCancelButton || showConfirmButton"
          class="ic-modal__footer">
          <ic-button v-if="showCancelButton"
            @click.native="handleAction('cancel')">
            {{ cancelButtonText }}
          </ic-button>
          <ic-button v-if="showConfirmButton"
            type="primary"
            ref="confirm"
            :disabled="confirmButtonDisabled"
            @click.native="handleAction('confirm')">
            {{ confirmButtonText }}
          </ic-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ic-modal',

    props: {
      modal: {
        default: true
      },
      lockScroll: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      center: {
        default: false,
        type: Boolean
      },
      roundButton: {
        default: false,
        type: Boolean
      }
    },
    data () {
      return {
        visible: false,
        uid: 1,
        title: undefined,
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputType: 'text',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        action: '',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        confirmButtonLoading: false,
        cancelButtonLoading: false,
        confirmButtonClass: '',
        confirmButtonDisabled: true,
        callback: null,
        dangerouslyUseHTMLString: false,
      }
    },
    watch: {
      inputValue: {
        immediate: false,
        handler(val) {
          this.$nextTick(_ => {
            if (this.$type === 'prompt' && val !== null) {
              if (this.validate()) {
                this.confirmButtonDisabled = false
              } else {
                this.confirmButtonDisabled = true
              }
            }
          })
        }
      },

      visible (val) {
        if (val) {
          this.uid++
          if (this.$type === 'alert' || this.$type === 'confirm') {
            this.$nextTick(() => {
              this.$refs.confirm.$el.focus()
            })
          }
        }
        if (this.$type !== 'prompt') return
        if (val) {
          setTimeout(() => {
            if (this.$refs.input && this.$refs.input.$el) {
              this.getInputElement().focus()
            }
          }, 500)
        }
      }
    },
    methods: {
      getSafeClose() {
        const currentId = this.uid
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose()
          })
        }
      },
      doClose() {
        if (!this.visible) return
        this.visible = false
        this._closing = true

        this.onClose && this.onClose()
        if (this.lockScroll) {
          setTimeout(() => {
            if (this.modal && this.bodyOverflow !== 'hidden') {
              document.body.style.overflow = this.bodyOverflow
              document.body.style.paddingRight = this.bodyPaddingRight
            }
            this.bodyOverflow = null
            this.bodyPaddingRight = null
          }, 200)
        }
        this.opened = false
        setTimeout(() => {
          if (this.action) this.callback(this.action, this)
        })
      },

      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.handleAction('cancel')
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return
        }
        this.action = action
        if (typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose()
          this.beforeClose(action, this, this.close)
        } else {
          this.doClose()
        }
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            return false
          }
          var inputValidator = this.inputValidator
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue)
            if (validateResult === false) {
              return false
            }
            if (typeof validateResult === 'string') {
              return false
            }
          }
        }
        return true
      },
      getInputElement() {
        const inputRefs = this.$refs.input.$refs
        return inputRefs.input || inputRefs.textarea
      }
    }
  }
</script>
