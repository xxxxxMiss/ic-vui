<template>
  <transition name="modal-fade">
    <div class="xm-modal" v-show="visible"
      :class="[
        {'xm-modal--center': center}
      ]"
      @click.self="close">
      <div class="xm-modal__inner">
        <div class="xm-modal__header">
          <span class="xm-modal__title">{{title}}</span>
          <i class="xm-modal__close"
            @click="visible = false"></i>
        </div>
        <div class="xm-modal__content">
          <div v-if="message">
            {{message}}
          </div>
          <xm-input v-if="category === 'prompt'"
            autofocus
            :type="inputType"
            :placeholder="inputPlaceholder"></xm-input>
        </div>
        <div v-if="showCancelButton || showConfirmButton"
          class="xm-modal__footer">
          <xm-button v-if="showCancelButton && category !== 'alert'"
            @click="visible = false">
            {{cancelButtonText}}
          </xm-button>
          <xm-button v-if="showConfirmButton"
            type="primary"
            @click="ok">{{confirmButtonText}}</xm-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'xm-modal',

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
      inputPlaceholder: String,
      title: String,
      message: String
    },
    data () {
      return {
        visible: false,
        category: 'confirm' // alert, prompt
      }
    },
    methods: {
      close () {
        this.closeOnClickMask && (this.visible = false)
      },
      ok () {
        this.visible = false
        this.callback &&
          typeof this.callback === 'function' &&
          this.callback(this)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../theme/modal.styl'
</style>
