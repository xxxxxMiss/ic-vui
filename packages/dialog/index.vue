<template>
  <transition name="modal-fade">
    <div class="ic-dialog" v-show="visible"
      :class="{
        'ic-dialog--round': isRound
      }"
      @click.self="handleMaskClose"
      >
      <div class="ic-dialog__wrapper"
        ref="wrapper"
        :style="{ width, height, 'margin-top': marginTop }">
        <div class="ic-dialog__header">
          <slot name="header">
            <ic-header left-icon="titlebar-close"
              :title="title"
              @click-left.prevent="close"></ic-header>
          </slot>
        </div>
        <div class="ic-dialog__content">
          <slot></slot>
        </div>
        <div class="ic-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ic-dialog',

    props: {
      visible: {
        type: Boolean,
        default: false
      },
      closeOnClickMask: {
        type: Boolean,
        default: true
      },
      title: String,
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      round: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      isRound () {
        return this.round &&
          (this.width !== '100%' || this.height !== '100%')
      }
    },
    data () {
      return {
        marginTop: 'auto'
      }
    },
    watch: {
      visible (val) {
        if (val) {
          this.$nextTick(_ => {
            const h = this.$refs.wrapper.offsetHeight
            this.marginTop = `${-h / 2}px`
          })
        }
      }
    },
    methods: {
      handleMaskClose () {
        this.closeOnClickMask && this.close()
      },
      close () {
        this.$emit('update:visible', false)
      }
    }
  }
</script>
