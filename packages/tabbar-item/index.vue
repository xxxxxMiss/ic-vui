<template>
  <li class="ic-tabbar__item"
    :class="{
      'ic-tabbar__item--active': index == parentGroup.currentActive
    }">
    <router-link :to="route">
      <slot>
        <ic-icon :name="icon"></ic-icon>
      </slot>
      <div class="ic-tabbar__text">{{text}}</div>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'ic-tabbar-item',

    props: {
      icon: String,
      text: String,
      route: [String, Object]
    },
    computed: {
      index () {
        return this.parentGroup.bars.indexOf(this)
      }
    },
    methods: {
      findParent () {
        if (!this.parentGroup) {
          let parent = this.$parent
          while (parent) {
            if (parent.$options.name === 'ic-tabbar') {
              this.parentGroup = parent
              break
            }
            parent = parent.$parent
          }
        }
      }
    },
    created () {
      this.findParent()
      this.parentGroup.bars.push(this)
    }
  }
</script>
