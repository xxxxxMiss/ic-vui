<template>
  <li class="ic-collapse__item"
    :class="{
      'ic-collapse__item--active': active
    }">
    <div class="ic-collapse__header"
      @click="clickItem">
      <div class="ic-collapse__inner">
        <slot name="title">
          <div class="ic-collapse__title">{{ title }}</div>
        </slot>
        <div v-if="subtitle"
          class="ic-collapse__subtitle">{{ subtitle }}</div>
      </div>
      <div class="ic-collapse__weathercock">
        <span v-if="!disabled">{{ weathercockText }}</span>
        <ic-icon :name="icon"></ic-icon>
      </div>
    </div>
    <!-- <transition name="collapse"> -->
      <div class="ic-collapse__panel"
        v-show="active">
        <slot></slot>
      </div>
    <!-- </transition> -->
  </li>
</template>

<script>
  import transitionDirective from './transition-height'

  export default {
    name: 'ic-collapse-item',

    props: {
      title: String,
      subtitle: String,
      name: [String, Number],
      icon: {
        type: String,
        default: 'arrow-down'
      }
    },
    inject: ['collapse'],
    // directives: { tsh: transitionDirective },
    computed: {
      active () {
        return this.collapse.activeNames.indexOf(this.name) > -1
      },
      weathercockText () {
        return this.active
          ? this.collapse.activeText
          : this.collapse.inactiveText
      },
      disabled () {
        return this.collapse.disabled
      }
    },
    methods: {
      clickItem () {
        this.collapse.handleItemClick(this)
      }
    }
  }
</script>
