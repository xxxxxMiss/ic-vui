<template>
  <li class="ic-collapse__item"
    :class="{
      'ic-collapse__item--active': active
    }">
    <div class="ic-collapse__header"
      @click="clickItem">
      <div class="ic-collapse__title">
        <slot name="title">{{title}}</slot>
        <div v-if="subtitle"
          class="ic-collapse__subtitle">{{subtitle}}</div>
      </div>
      <div class="ic-collapse__weathercock">
        <span>{{weathercockText}}</span>
        <i class="ic-arrow"></i>
      </div>
    </div>
    <transition name="collapse">
      <div class="ic-collapse__panel" v-show="active">
        <slot></slot>
      </div>
    </transition>
  </li>
</template>

<script>
  export default {
    name: 'ic-collapse-item',

    props: {
      title: String,
      subtitle: String,
      name: [String, Number]
    },
    inject: ['collapse'],
    computed: {
      active () {
        return this.collapse.activeNames.indexOf(this.name) > -1
      },
      weathercockText () {
        return this.active ? '收起' : '展开'
      }
    },
    methods: {
      clickItem () {
        this.collapse.handleItemClick(this)
      }
    }
  }
</script>
