<template>
  <div class="demo-input">
    <h3>textarea文本域输入</h3>
    <ic-input type="textarea"
      :autosize="true"
      @focus="onFocus"
      v-model="content"
      placeholder="填写项目内容、你承担的责任、表现如何、项目成果等"></ic-input>

    <h3>默认为中等大小的输入框</h3>
    <ic-input clearable
      v-model="skill"
      :show-error="errors.has('skill')"
      name="skill"
      v-validate="{required: true, max: 15}"
      placeholder="填写专业技能"></ic-input>
    <ic-input
      placeholder="只有前面的icon"
      prefix-icon="titlebar-share"
      clearable
      v-model="card"
      name="card"
      v-validate="{min: 6, max: 10}"
      size="large"
      :show-error="errors.has('card')"
      :error-msg="errors.first('card')"
      ></ic-input>

    <h3>size="small"，小型输入框；添加suffix-icon="iconName"可添加输入框后面的icon</h3>
    <ic-input
      v-model="keyword"
      type="search"
      @focus="onFocus"
      @blur="handleBlur"
      round
      clearable
      suffix-icon="titlebar-search"
      placeholder="支持搜索工作地点、职位名称、岗位要求"
      size="small"></ic-input>

    <h3>size="large"，大型输入框</h3>
    <ic-input
      :type="type"
      v-model="value"
      @click-suffix="changeType"
      placeholder="请输入密码"
      :suffix-icon="suffixIcon"
      prefix-icon="form-password"></ic-input>

    <h3>带有计时器的输入框</h3>
    <ic-input
      timer
      v-model="value"
      @timer-click="timerClick"
      :timer-end="showEnd"
      placeholder="请输入验证码"
      prefix-icon="form-message"></ic-input>

    <h3>静止输入，有右箭头</h3>
    <ic-input readonly
      to="/button"
      value="上海上海上海上海上海上海上海上海上海上海上海上海上海上海上海"
      suffix-icon="go-small"></ic-input>
  </div>
</template>


<script>
  import Toast from '../../packages/toast/index'
  export default {
    data () {
      return {
        type: 'password',
        value: '',
        card: '',
        content: '',
        suffixIcon: 'eyes-closed',
        keyword: '',
        skill: ''
      }
    },
    watch: {
      value (newVal) {
        console.log(newVal)
      },
      errors: {
        handler () {
          this.errors.any() && Toast(this.errors.all().join('、'))
        },
        deep: true
      }
    },
    methods: {
      changeType () {
        if (this.type === 'password') {
          this.type = 'text'
          this.suffixIcon = 'eyes-open'
        } else {
          this.type = 'password'
          this.suffixIcon = 'eyes-closed'
        }
      },
      timerClick (e) {
        console.log('do something')
      },
      onFocus () {
        console.log('focus')
      },
      handleBlur () {
        console.log('handleBlur')
      },
      onChange (val) {
        console.log('val', val)
      },
      showEnd () {
        console.log('end')
      }
    }
  }
</script>

<style lang="stylus">
  .demo-input
    .ic-input + .ic-input
      margin-top 20px
    h3
      margin 15px 0
</style>
