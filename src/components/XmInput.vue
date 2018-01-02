<template>
  <div class="demo-input">
    <h3>默认为中等大小的输入框</h3>
    <xm-input
      placeholder="填写技能名称"></xm-input>
    <xm-input
      placeholder="只有前面的icon"
      prefix-icon="card"
      clearable
      size="large"
      ></xm-input>

    <h3>size="small"，小型输入框；添加suffix-icon="iconName"可添加输入框后面的icon</h3>
    <xm-input
      type="search"
      v-model="value"
      @focus="onFocus"
      @change="onChange"
      :debounce="500"
      round
      suffix-icon="search"
      placeholder="支持搜索工作地点、职位名称、岗位要求"
      size="small"></xm-input>

    <h3>size="large"，大型输入框</h3>
    <xm-input
      :type="type"
      @click-suffix="changeType"
      placeholder="请输入密码"
      :suffix-icon="suffixIcon"
      prefix-icon="cash-back-record"></xm-input>

    <h3>带有计时器的输入框</h3>
    <xm-input
      timer
      placeholder="请输入验证码"
      prefix-icon="cash-back-record"></xm-input>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        type: 'password',
        value: '',
        suffixIcon: 'password-not-view'
      }
    },
    watch: {
      value (newVal) {
        // console.log(newVal)
      }
    },
    methods: {
      changeType () {
        if (this.type === 'password') {
          this.type = 'text'
          this.suffixIcon = 'password-view'
        } else {
          this.type = 'password'
          this.suffixIcon = 'password-not-view'
        }
      },
      onFocus () {
        console.log('focus')
      },
      onChange (val) {
        console.log('val', val)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-input
    .xm-input + .xm-input
      margin-top 20px
</style>
