<template>
  <div class="demo-upload">
    <ic-upload
      :on-success="handleSuccess"
      :on-error="handleError"
      :url="url"
      name="photo"></ic-upload>

    <input type="file" name="photo" @change="handleChange">
    <!-- <ic-upload
      :auto-upload="false"
      :show-preview="true"
      name="photo"
      upload-type="base64"></ic-upload>
    <img :src="src" alt="" ref="img"> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'http://test.dev.cheng95.com/42.php',
        src: ''
      }
    },
    methods: {
      handleSuccess (data) {
        console.log(data)
      },
      handleError (e) {
        console.log(e)
      },
      handleChange (e) {
        const file = e.target.files[0]
        console.log(file)
      }
    }
  }
</script>

<style lang="stylus">

</style>
