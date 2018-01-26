<template>
  <div class="demo-spinner">
    <p><code>type="crash-ball"</code></p>
    <ic-spinner type="crash-ball"></ic-spinner>

    <p>默认类型</p>
    <ic-spinner></ic-spinner>

    <p>当<code>type="crash-ball"</code>时，可以传入一个颜色数组，顺序依次为<code>上</code><code>右</code><code>下</code><code>左</code></p>
    <ic-spinner type="crash-ball"
      :color="'#3B99FF #EDF9F9 #FFEEEE #FF6644'"></ic-spinner>

    <p><code>type="circle"</code>颜色字符串</p>
    <ic-spinner type="circle"></ic-spinner>

    <p><code>type="gradient"</code>渐变圆环</p>
    <ic-spinner type="gradient"></ic-spinner>
  </div>
</template>

<style lang="stylus">
  .demo-spinner
    .ic-spinner + .ic-spinner
      margin-left 20px
    code
      color blue
</style>

