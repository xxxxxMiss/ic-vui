<template>
  <div class="demo-timeline">
    <ic-timeline :data="data"
      title="项目经验"
      icon="resume-project">
      <template slot-scope="{ item }">
        <span class="date">{{item.date}}</span>
        <div class="item">
          <h3 class="title">{{item.title}}</h3>
          <span class="content">{{item.content}}</span>
        </div>
      </template>
    </ic-timeline>

    <ic-timeline :data="data2"
      last-line
      :dot-types="{0: 'fail', 3: 'circle'}"
      line-color="#f64"
      line-type="solid"
      dot-type="success">
      <template slot-scope="{ item, index }">
        <span>{{item.title}}</span>
        <span class="flag">{{item.flag}}</span>
        <span class="time">{{item.date}}</span>
      </template>
    </ic-timeline>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
            date: '2016.7 - 至今',
            title: '职南针网页端 (Web)',
            content: '世界上最好的最全面覆盖率的招聘平台，帮助一切求职者和企业寻找最佳的合作机会。'
          },
          {
            date: '2015.2-2016.7',
            title: '职南针移动端 (App)',
            content: '这是一个神奇的应用，已经在各大移动平台进行发布，目前用户数量在8000万以上，是全球最大的使用率最高的招聘平台。'
          }
        ],
        data2: [
          {
            title: '入职',
            flag: '录用中'
          },
          {
            title: 'Offer',
            flag: '通过',
            date: '2017.12.07 10:23'
          },
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
    }
  }
</script>

<style lang="stylus">
  .demo-timeline
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
    .ic-timeline__item
      padding-left 0
</style>
