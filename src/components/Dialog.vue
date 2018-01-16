<template>
  <div class="demo-dialog">
    <ic-button type="primary" @click="visible = true">点击显示</ic-button>
    <ic-dialog :visible.sync="visible"
      title="选择所在城市">
     <ic-location :data="cities"
       show-touched
       @item-click="clickItem"></ic-location>
    </ic-dialog>

    <ic-button type="success" @click="visible2 = true">自定义dialog大小</ic-button>
    <ic-dialog height="37%" width="80%"
      title="自定义标题"
      :show-close="false"
      :close-on-click-mask="false"
      :visible.sync="visible2">
      <ic-tag type="cyan">青色</ic-tag>
      <p>这里有很多内容</p>
      <p>这里有很多内容</p>
      <p>这里有很多内容</p>
      <p>这里有很多内容</p>
      <p>这里有很多内容</p>
      <p>这里有很多内容</p>
      <p>这里有很多内容</p>
      <div slot="footer">
        <ic-button type="primary" @click="visible2 = false">知道了</ic-button>
      </div>
    </ic-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        visible2: false,
        cities: [
          {
            title: '热',
            children: [
              { shortName: 'sh', name: '上海' },
              { shortName: 'bj', name: '北京' },
              { shortName: 'gz', name: '广州' },
              { shortName: 'sz', name: '深圳' },
              { shortName: 'tj', name: '天津' },
              { shortName: 'hz', name: '杭州' },
              { shortName: 'cd', name: '成都' },
              { shortName: 'wh', name: '武汉' },
              { shortName: 'xa', name: '西安' },
              { shortName: 'nj', name: '南京' },
              { shortName: 'cq', name: '重庆' }
            ]
          },
          {
            title: 'A',
            children: [
              { shortName: 'as', name: '鞍山' },
              { shortName: 'ah', name: '安庆' },
              { shortName: 'as', name: '安顺' },
              { shortName: 'ay', name: '安阳' },
              { shortName: 'ad', name: '安达' }
            ]
          },
          {
            title: 'B',
            children: [
              { shortName: 'bc', name: '白城' },
              { shortName: 'bd', name: '保定' },
              { shortName: 'bj', name: '毕节' },
              { shortName: 'bj', name: '北京' },
              { shortName: 'bj', name: '北京' },
              { shortName: 'bj', name: '北京' },
              { shortName: 'bj', name: '北京' }
            ]
          },
          {
            title: 'C',
            children: [
              { shortName: 'cd', name: '承德' },
              { shortName: 'cz', name: '沧州' },
              { shortName: 'cz', name: '长治' },
              { shortName: 'cf', name: '赤峰' },
              { shortName: 'cy', name: '朝阳' },
              { shortName: 'cc', name: '长春' },
              { shortName: 'cz', name: '常州' },
              { shortName: 'cz', name: '滁州' },
              { shortName: 'cz', name: '池州' },
              { shortName: 'cs', name: '长沙' },
              { shortName: 'cd', name: '常德' },
              { shortName: 'cz', name: '潮州' }
            ]
          },
          {
            title: 'D',
            children: [
              { shortName: 'cd', name: '大同' },
              { shortName: 'cz', name: '大连' },
              { shortName: 'cz', name: '丹东' },
              { shortName: 'cf', name: '大庆' },
              { shortName: 'cy', name: '大兴安岭' },
              { shortName: 'cc', name: '东营' },
              { shortName: 'cz', name: '德州' },
              { shortName: 'cz', name: '东莞' },
              { shortName: 'cz', name: '德阳' },
              { shortName: 'cs', name: '达州' },
              { shortName: 'cd', name: '大理' },
              { shortName: 'cz', name: '定西' }
            ]
          },
          {
            title: 'F',
            children: [
              { shortName: 'cd', name: '抚顺' },
              { shortName: 'cz', name: '阜新' },
              { shortName: 'cz', name: '阜阳' },
              { shortName: 'cf', name: '大庆' },
              { shortName: 'cy', name: '福州' },
              { shortName: 'cc', name: '抚州' },
              { shortName: 'cz', name: '佛山' }
            ]
          },
          {
            title: 'G',
            children: [
              { shortName: 'cd', name: '赣州' },
              { shortName: 'cz', name: '广州' },
              { shortName: 'cz', name: '桂林' },
              { shortName: 'cf', name: '贵州' },
              { shortName: 'cy', name: '广元' },
              { shortName: 'cc', name: '广安' },
              { shortName: 'cz', name: '贵阳' },
              { shortName: 'cz', name: '甘南' },
              { shortName: 'cz', name: '固原' }
            ]
          },
          {
            title: 'H',
            children: [
              { shortName: 'cd', name: '赣州' },
              { shortName: 'cz', name: '广州' },
              { shortName: 'cz', name: '桂林' },
              { shortName: 'cf', name: '贵州' },
              { shortName: 'cy', name: '广元' },
              { shortName: 'cc', name: '广安' },
              { shortName: 'cz', name: '贵阳' },
              { shortName: 'cz', name: '甘南' },
              { shortName: 'cz', name: '固原' }
            ]
          },
          {
            title: 'J',
            children: [
              { shortName: 'cd', name: '赣州' },
              { shortName: 'cz', name: '广州' },
              { shortName: 'cz', name: '桂林' },
              { shortName: 'cf', name: '贵州' },
              { shortName: 'cy', name: '广元' },
              { shortName: 'cc', name: '广安' },
              { shortName: 'cz', name: '贵阳' },
              { shortName: 'cz', name: '甘南' },
              { shortName: 'cz', name: '固原' }
            ]
          },
          {
            title: 'K',
            children: [
              { shortName: 'cd', name: '赣州' },
              { shortName: 'cz', name: '广州' },
              { shortName: 'cz', name: '桂林' },
              { shortName: 'cf', name: '贵州' },
              { shortName: 'cy', name: '广元' },
              { shortName: 'cc', name: '广安' },
              { shortName: 'cz', name: '贵阳' },
              { shortName: 'cz', name: '甘南' },
              { shortName: 'cz', name: '固原' }
            ]
          },
          {
            title: 'L',
            children: [
              { shortName: 'cd', name: '赣州' },
              { shortName: 'cz', name: '广州' },
              { shortName: 'cz', name: '桂林' },
              { shortName: 'cf', name: '贵州' },
              { shortName: 'cy', name: '广元' },
              { shortName: 'cc', name: '广安' },
              { shortName: 'cz', name: '贵阳' },
              { shortName: 'cz', name: '甘南' },
              { shortName: 'cz', name: '固原' }
            ]
          },
          {
            title: 'M',
            children: [
              { shortName: 'cd', name: '赣州' },
              { shortName: 'cz', name: '广州' },
              { shortName: 'cz', name: '桂林' },
              { shortName: 'cf', name: '贵州' },
              { shortName: 'cy', name: '广元' },
              { shortName: 'cc', name: '广安' },
              { shortName: 'cz', name: '贵阳' },
              { shortName: 'cz', name: '甘南' },
              { shortName: 'cz', name: '固原' }
            ]
          },
          {
            title: 'N',
            children: [
              { shortName: 'cd', name: '赣州' },
              { shortName: 'cz', name: '广州' },
              { shortName: 'cz', name: '桂林' },
              { shortName: 'cf', name: '贵州' },
              { shortName: 'cy', name: '广元' },
              { shortName: 'cc', name: '广安' },
              { shortName: 'cz', name: '贵阳' },
              { shortName: 'cz', name: '甘南' },
              { shortName: 'cz', name: '固原' }
            ]
          }
        ]
      }
    },
    methods: {
      clickItem (item, index) {
        console.log(item)
        console.log(index)
      }
    }
  }
</script>

<style lang="stylus">
</style>
