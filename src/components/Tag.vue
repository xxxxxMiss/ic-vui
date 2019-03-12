<template>
  <div class="demo-tag">
    <ic-tag>默认标签</ic-tag>
    <ic-tag size="large">大标签</ic-tag>
    <ic-tag type="cyan">青色标签</ic-tag>
    <ic-tag type="red">红色标签</ic-tag>
    <ic-tag :type="change() ? 'red' : 'blue'">蓝色标签</ic-tag>
    <ic-tag type="cyan">当文字很长的时候</ic-tag>
    <ic-tag type="success">成功色背景</ic-tag>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        type: 'blue',
        isValid: true
      }
    },
    methods: {
      change () {
        const r = Math.random()
        console.log('======: ', r)
        this.isValid = r > 0.5
        return r > 0.5
      }
    }
  }
</script>
