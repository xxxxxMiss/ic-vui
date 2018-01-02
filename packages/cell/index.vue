<template>
  <div class="xm-cell">
    <slot name="all">
      <div class="xm-cell__inner">
        <div class="xm-cell__left">
          <slot name="prefix">
            <xm-icon v-if="icon" :name="icon"></xm-icon>
          </slot>
          <slot name="title">
            <span class="xm-cell__title">{{title}}</span>
          </slot>
        </div>
        <slot name="suffix">
          <div class="xm-cell__right">
            <span>{{content}}</span>
            <xm-icon v-if="showArrow" name="arrow"></xm-icon>
          </div>
        </slot>
      </div>
    </slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
  import XmIcon from '../icon'

  export default {
    name: 'xm-cell',

    props: {
      title: String,
      content: String,
      icon: String,
      showArrow: {
        type: Boolean,
        default: false
      }
    },
    components: { XmIcon }
  }
</script>

<style lang="stylus">
  @import '../theme/cell.styl'
</style>
