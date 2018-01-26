<template>
  <div class="demo-upload">
    <ic-upload
      :on-success="handleSuccess"
      mode="no-cors"
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
      }
    }
  }
</script>
