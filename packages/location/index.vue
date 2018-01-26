<template>
  <div class="ic-location">
    <div class="ic-location__content" ref="content">
      <div class="ic-location__block"
        v-for="(item, index) in normalizedData"
        :key="index"
        :data-flag="item.title">
        <div class="ic-location__icon-title" v-if="item.icon">
          <slot name="title">
            <ic-icon :name="item.icon"></ic-icon>
            <span class="ic-location__icon-text">{{item.title}}</span>
          </slot>
        </div>
        <div class="ic-location__title" v-else>
          <slot name="title">
            <span>{{item.title}}</span>
          </slot>
        </div>
        <div class="ic-location__inner">
          <ic-button
            v-for="(child, idx) in item.children"
            :key="idx"
            @click="clickItem(child, idx)"
          >{{child[displayKey]}}</ic-button>
        </div>
      </div>
    </div>
    <div class="ic-location__bar"
      :class="{ 'ic-location__bar--active': barActive }"
      @touchstart="onTouchStart"
      @touchmove.prevent="onTouchMove"
      @touchend="onTouchEnd">
      <div class="ic-location__letter"
        v-for="(val, index) in barLetters"
        :key="index">{{val}}</div>
    </div>
    <transition name="touched-fade">
      <div class="ic-location__touched"
        :class="[ 'ic-location__touched--' + touchedType ]"
        v-show="showTouched && touchedLetter">
        {{touchedLetter[0]}}
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'ic-location',

    props: {
      data: [Object, Array],
      displayKey: {
        type: String,
        default: 'name'
      },
      showTouched: {
        type: Boolean,
        default: false
      },
      touchedType: {
        type: String,
        default: 'rect' // round
      }
    },
    computed: {
      normalizedData () {
        if ('length' in this.data) return this.data

        return Object.keys(this.data).map(key => ({ title: key, children: this.data[key] }))
      },
      barLetters () {
        const ret = []
        for (let i = 0, l = this.normalizedData.length; i < l; i++) {
          ret[i] = this.normalizedData[i].title.slice(0, 2)
        }
        return ret
      }
    },
    data () {
      return {
        touchedLetter: '',
        barActive: false,
        timer: null
      }
    },
    watch: {
      touchedLetter (v) {
        if (!v) return
        const matchedBlock = document.querySelector(`.ic-location__block[data-flag^=${v}]`)
        this.$refs.content.scrollTop = matchedBlock.offsetTop
      }
    },
    methods: {
      clickItem (item, index) {
        this.$emit('item-click', item, index)
      },
      onTouchStart (e) {
        this.barActive = true
        this.computeTouch(e)
      },
      onTouchMove (e) {
        this.computeTouch(e)
      },
      onTouchEnd (e) {
        this.barActive = false
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(_ => this.touchedLetter = '', 500)
      },
      computeTouch (e) {
        let touch = e.changedTouches ? e.changedTouches[0] : e.touches[0]
        let letterHeight = touch.target.clientHeight
        let barTop = (window.innerHeight - this.barLetters.length * letterHeight) / 2
        let index = parseInt((touch.clientY - barTop) / letterHeight) - 2
        if (index >= 0 && index < this.barLetters.length) {
          this.touchedLetter = this.barLetters[index]
        }
      }
    }
  }
</script>
