<template>
  <transition name="modal-fade">
    <div class="ic-modal" v-show="visible"
      :class="[{
        'ic-modal--center': center
      }]"
      @click.self="close">
      <div class="ic-modal__inner">
        <div class="ic-modal__header">
          <span class="ic-modal__title">{{title}}</span>
          <i v-if="showClose"
            class="ic-modal__close glyph__close"
            @click="visible = false"></i>
        </div>
        <div class="ic-modal__content">
          <div v-if="message">
            {{message}}
          </div>
          <ic-input v-if="category === 'prompt'"
            v-model="value"
            size="large"
            :type="inputType"
            :placeholder="inputPlaceholder"></ic-input>
        </div>
        <div v-if="showCancelButton || showConfirmButton"
          class="ic-modal__footer">
          <ic-button v-if="showCancelButton && category !== 'alert'"
            @click="doClose">
            {{cancelButtonText}}
          </ic-button>
          <ic-button v-if="showConfirmButton"
            type="primary"
            @click="ok">{{confirmButtonText}}</ic-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ic-modal',

    props: {
      showClose: {
        type: Boolean,
        default: true
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      showCancelButton: {
        type: Boolean,
        default: true
      },
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      closeOnClickMask: {
        type: Boolean,
        default: true
      },
      center: {
        type: Boolean,
        default: false
      },
      inputType: {
        type: String,
        default: 'text'
      },
      inputValue: {},
      inputValidator: Function,
      inputPlaceholder: String,
      title: String,
      message: String
    },
    data () {
      return {
        visible: false,
        category: 'confirm', // alert, prompt
        value: this.inputValue
      }
    },
    watch: {
      visible (val) {
        if (val) {
          this.$nextTick(_ => {
            const input = document.querySelector('.ic-modal .ic-input__input')
            input && input.focus()
          })
        } else {
          this.value && (this.value = '')
        }
      }
    },
    methods: {
      close () {
        this.closeOnClickMask && (this.visible = false)
      },
      ok () {
        if (typeof this.inputValidator === 'function') {
          if (this.inputValidator(this.value) === true) {
            this.visible = false
          } else return
        } else {
          this.visible = false
        }
        this.callback &&
          typeof this.callback === 'function' &&
          this.callback(this)
      },
      doClose () {
        this.visible = false
        this.cancel &&
          typeof this.cancel === 'function' &&
          this.cancel(this)
      }
    }
  }
</script>
