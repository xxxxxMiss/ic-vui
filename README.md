# ic-vui

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1，fixed定位在IOS上体验非常差（有待修改页面布局）
2，可能某些组件在IOS上有兼容性问题（比如图片旋转上传，目前已修复）
3，picker组件有待优化
4，省市滑动组件在某些手机上滑动不流畅
5，目前城市定位问题还未修复，后端的ip放到头信息中，现在还无法正确传递到后端
6，提取公共的组件（比如微信分享）
7，cookie目前好像已经修复，还需要进一步观察，提取一套权限认证方案
8，自身能力急需大大提高。。。
9，组员问题

1.ios筛选列表穿透的问题
2.总是技能提示不能为空
3.年月选择器  a.应该默认是位于当前年月（不展示当前年月之后的时间），且应该定位于之前选中的位置 b.两个时间picker，第一个选择时间以后，第二个应该不展示第一个picker之前的时间
4.期望地定位问题@那聽天
