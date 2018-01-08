<template>
  <div class="ic-cell">
    <slot name="all">
      <div class="ic-cell__inner">
        <div class="ic-cell__left">
          <slot name="prefix">
            <ic-icon v-if="icon" :name="icon"></ic-icon>
          </slot>
          <slot name="title">
            <span class="ic-cell__title">{{title}}</span>
          </slot>
        </div>
        <slot name="suffix">
          <div class="ic-cell__right">
            <span>{{content}}</span>
            <ic-icon v-if="showArrow" name="arrow"></ic-icon>
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
    name: 'ic-cell',

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
