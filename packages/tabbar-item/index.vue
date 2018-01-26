<template>
  <li class="ic-tabbar__item"
    :class="{
      'ic-tabbar__item--active': name === tabbar.value
    }"
    @click="clickItem">
    <router-link :to="route">
      <slot>
        <ic-icon :name="icon"></ic-icon>
      </slot>
      <div class="ic-tabbar__text">{{text}}</div>
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
      name: [String, Number]
    },
    inject: ['tabbar'],
    methods: {
      clickItem () {
        this.dispatch('ic-tabbar', 'set-active', this.name)
      }
    }
  }
</script>
