<template>
  <div class="demo-spinner">
    <p><code>type="crash-ball"</code></p>
    <xm-spinner type="crash-ball"></xm-spinner>

    <p>默认类型</p>
    <xm-spinner></xm-spinner>

    <p>当<code>type="crash-ball"</code>时，可以传入一个颜色数组，顺序依次为<code>上</code><code>右</code><code>下</code><code>左</code></p>
    <xm-spinner type="crash-ball"
      :color="'#3B99FF #EDF9F9 #FFEEEE #FF6644'"></xm-spinner>

    <p><code>type="circle"</code>颜色字符串</p>
    <xm-spinner type="circle"></xm-spinner>
  </div>
</template>

<style lang="stylus">
  .demo-spinner
    .xm-spinner + .xm-spinner
      margin-left 20px
    code
      color blue
</style>

