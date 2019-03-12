<template>
  <div class="demo-input">
    <h3>textarea文本域输入</h3>
    <ic-input type="textarea"
      :autosize="true"
      :rows="2"
      @focus="onFocus"
      v-model="content"
      placeholder="填写项目内容、你承担的责任、表现如何、项目成果等"></ic-input>

    <h3>默认为中等大小的输入框</h3>
    <ic-input
      @click="handleClick"
      clearable
      v-model="phone"
      @blur="validate"
      name="phone"
      placeholder="请输入手机号"></ic-input>
    <!-- <ic-input
      placeholder="只有前面的icon"
      prefix-icon="titlebar-share"
      clearable
      v-model="card"
      name="card"
      v-validate="{min: 6, max: 10}"
      size="large"
      :show-error="errors.has('card')"
      :error-msg="errors.first('card')"
      ></ic-input> -->

    <h3>size="small"，小型输入框；添加suffix-icon="iconName"可添加输入框后面的icon</h3>
    <ic-input
      v-model="keyword"
      type="search"

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
      @focus="onFocus"
      placeholder="请输入密码"
      :suffix-icon="suffixIcon"
      prefix-icon="form-password"></ic-input>

    <h3>带有计时器的输入框</h3>
    <ic-input
      timer
      :before-timer="beforeTimer"
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
    <ic-button type="primary"
      @click="validateForm"
      :disabled="disabled">提交</ic-button>
  </div>
</template>


<script>
  import Toast from '../../packages/toast/index'
  import { Validator } from 'vee-validate'
  import Joi from 'joi-browser'

  const schema = Joi.object().keys({
    oldVal: Joi.string().regex(/^[0-9a-zA-Z]$/),
    newVal: Joi.ref('oldVal')
  })
  //
  // const schema = Joi.object().keys({
  //   a: Joi.string().min(2),
  //   b: Joi.number().max(4)
  // })

  // const start = Joi.string().max(5)
  // const end = Joi.string().required()
  // const range = start.concat(end)

  export default {
    validator: null,
    data () {
      return {
        type: 'password',
        value: '',
        card: '',
        content: '',
        suffixIcon: 'eyes-closed',
        keyword: '',
        skill: '',
        phone: '',
        email: '',
        errors: null,
        autoTimer: false
      }
    },
    computed: {
      disabled () {
        return !this.phone
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
      validate () {
        const ret = Joi.validate({
          oldVal: this.content,
          newVal: this.phone
        }, schema)
        console.log(ret)
      },
      beforeTimer () {
        // some validations
        this.$toast('输入不合法')
        return false
      },
      changeType () {
        if (this.type === 'password') {
          this.type = 'text'
          this.suffixIcon = 'eyes-open'
        } else {
          this.type = 'password'
          this.suffixIcon = 'eyes-closed'
        }
      },
      handleClick (e) {
        console.log(e)
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
      },
      validateForm () {
        this.validator.validateAll({
          email: this.email,
          phone: this.phone
        }).then((result) => {
          if (result) {
            console.log('All is well')
            return
          }
          console.log('Oops!')
        })
      }
    },
    created () {
      this.validator = new Validator({
        phone: { max: 11 }
      })
      this.$set(this, 'errors', this.validator.errors)
      this.content = Date.parse('2018/09/00')
    },
    mounted () {
      this.autoTimer = true
    }
  }
</script>

<style lang="stylus">
  .demo-input
    margin-top 300px
    .ic-input + .ic-input
      margin-top 20px
    h3
      margin 15px 0
</style>
