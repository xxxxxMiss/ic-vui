<template>
  <div class="demo-upload">
    <ic-upload
      :on-success="handleSuccess"
      :on-error="handleError"
      :url="url"
      name="photo"></ic-upload>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'http://neitui_bole.wmq.dev3.ifchange.com/resume/upload_photo'
      }
    },
    methods: {
      handleSuccess (data) {
        console.log(data)
      },
      handleError (e) {
        console.log(e)
      }
    }
  }
</script>
