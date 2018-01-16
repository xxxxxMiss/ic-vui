<template>
  <div class="demo-collapse">
    <ic-collapse v-model="defaultActive">
      <ic-collapse-item v-for="(item, index) in data"
        :key="index"
        :title="item.position"
        :subtitle="item.status"
        :name="index">
        <ic-timeline
          last-line
          line-color="#FF6644"
          line-type="solid"
          :data="item.process"
          :dot-types="{'0': 'fail'}"
          dot-type="success">
            <template slot-scope="{ item }">
              <span>{{item.title}}</span>
              <span class="flag">{{item.flag}}</span>
              <span class="time">{{item.date}}</span>
            </template>
          </ic-timeline>
      </ic-collapse-item>
    </ic-collapse>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultActive: 1,
        data: [
          {
            position: '高级前端开发工程师',
            status: '简历不合适',
            process: [
              {
                title: '面试',
                flag: '通过',
                date: '2017.12.05 08:23'
              },
              {
                title: '评审',
                flag: '通过',
                date: '2017.11.07 11:23'
              },
              {
                title: '简历投递',
                flag: '投递成功',
                date: '2017.08.07 10:23'
              }
            ]
          },
          {
            position: '高级前端开发工程师',
            status: '面试中',
            process: [
              {
                title: '面试',
                flag: '通过',
                date: '2017.12.05 08:23'
              },
              {
                title: '评审',
                flag: '通过',
                date: '2017.11.07 11:23'
              },
              {
                title: '简历投递',
                flag: '投递成功',
                date: '2017.08.07 10:23'
              }
            ]
          }
        ]
      }
    },
    watch: {
      defaultActive (id) {
        console.log(id)
      }
    }
  }
</script>

<style lang="stylus">
  .demo-collapse
    background-color #F5F5F8
    .ic-timeline + .ic-timeline
      margin-top 25px
    .date
      color #999
      font-size 16px
    .item
      padding-top 20px
      margin-top 3px
      margin-bottom 4px
      .title
        font-size 16px
        color #333
        padding-bottom 12px
      .content
        font-size 14px
        color #666
        line-height 1.5
    .flag
      color #999
      font-size 13px
    .time
      color #666
      font-size 13px
      float right
    .sub-title
      font-size 14px
      padding-top 8px
</style>
