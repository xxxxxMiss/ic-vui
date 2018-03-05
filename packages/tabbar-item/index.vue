<template>
  <li class="ic-tabbar__item"
    :class="{
      'ic-tabbar__item--active': isActive
    }"
    @click="clickItem">
    <router-link :to="route" :style="style">
      <slot>
        <ic-icon :name="icon" :style="style"></ic-icon>
      </slot>
      <div class="ic-tabbar__text">{{ text }}</div>
    </router-link>
  </li>
</template>

<script>
  import emitter from 'mixins/emitter'

  export default {
    name: 'ic-tabbar-item',

    mixins: [emitter],
    props: {
      icon: String,
      text: String,
      route: [String, Object],
      name: [String, Number],
      textColor: String,
      activeTextColor: String
    },
    computed: {
      isActive () {
        return this.name === this.tabbar.value
      },
      style () {
        return {
          color: this.isActive ? this.activeTextColor : this.textColor
        }
      }
    },
    inject: ['tabbar'],
    methods: {
      clickItem () {
        this.dispatch('ic-tabbar', 'set-active', this.name)
      }
    }
  }
</script>
