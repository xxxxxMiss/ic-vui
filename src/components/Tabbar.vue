<template>
  <div class="demo-tabbar">
    <ic-tabbar>
      <ic-tabbar-item v-for="(item, index) in bars"
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
        bars: [
          { icon: 'nav-job', text: '职位', path: '/tabbar' },
          { icon: 'nav-reward', text: '奖励', path: '/tabbar' },
          { icon: 'nav-schedule', text: '任务', path: '/tabbar' },
          { icon: 'nav-resume', text: '候选人', path: '/tabbar' }
        ]
      }
    }
  }
</script>

<style lang="stylus">

</style>
