<template>
  <div class="demo-tabbar">
    <ic-tabbar v-model="defaultActive"
      @change="handleChange">
      <ic-tabbar-item v-for="(item, index) in bars"
        active-text-color="#008C58"
        :name="index"
        :route="item.path"
        :key="index"
        :icon="item.icon"
        :text="item.text"></ic-tabbar-item>
    </ic-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultActive: 0,
        bars: [
          { icon: 'nav-job', text: '职位', path: '/tabbar' },
          { icon: 'nav-reward', text: '奖励', path: '/tabbar' },
          { icon: 'nav-schedule', text: '任务', path: '/tabbar' },
          { icon: 'nav-resume', text: '候选人', path: '/tabbar' }
        ]
      }
    },
    watch: {
      defaultActive (newVal) {
        console.log('当前激活name: ', newVal)
      }
    },
    methods: {
      handleChange (name) {
        console.log('也可以通过change事件来获得当前激活：', name)
      }
    }
  }
</script>

<style lang="stylus">

</style>
