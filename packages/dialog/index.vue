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
        <div v-if="showHeader"
          class="ic-dialog__header"
          :class="{
            'ic-dialog__header--left-close': isLeftClose,
            'ic-dialog__header--divider': showHeaderDivider
          }">
          <slot name="header">
            <i class="glyph__close" v-if="showClose"
              @click.stop="close"></i>
            <span v-if="title">{{title}}</span>
          </slot>
        </div>
        <div class="ic-dialog__content">
          <slot></slot>
        </div>
        <div class="ic-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
        <div class="ic-dialog__ghost"
          :class="[
            'ic-dialog__ghost--' + ghostPosition,
            { 'ic-dialog__ghost--line': showGhostLine }
          ]"
          v-if="showGhost"
          @click.stop="closeGhost">
          <i class="glyph__close"></i>
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
      },
      showClose: {
        type: Boolean,
        default: true
      },
      isLeftClose: {
        type: Boolean,
        default: false
      },
      showGhost: {
        type: Boolean,
        default: false
      },
      ghostPosition: {
        type: String,
        default: 'bottom' // bottom-end, top, top-end
      },
      showGhostLine: {
        type: Boolean,
        default: false
      },
      showHeaderDivider: {
        type: Boolean,
        default: false
      },
      showHeader: {
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
        this.closeOnClickMask && this.$emit('update:visible', false)
      },
      close () {
        this.showClose && this.$emit('update:visible', false)
      },
      closeGhost () {
        this.$emit('update:visible', false)
        this.$emit('ghost-close')
      }
    }
  }
</script>
