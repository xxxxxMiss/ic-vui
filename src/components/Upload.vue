<template>
  <div class="demo-upload">
    <!-- <ic-upload
      :on-success="handleSuccess"
      :on-error="handleError"
      :url="url"
      name="photo"></ic-upload> -->

    <input type="file" name="photo" @change="handleChange">
    <ic-upload :auto-upload="false" upload-type="base64"
      read-type="arraybuffer" :after-read="afterRead"></ic-upload>
  </div>
</template>

<script>
  import EXIF from 'utils/exif'

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
      },
      handleChange (e) {
        const file = e.target.files[0]
        console.log(EXIF)
        EXIF.readFromBinaryFile(file, function () {
          const allMetadata = EXIF.getAllTags(this)
          console.log(allMetadata)
        })
      },
      afterRead (arraybuffer) {
        console.log('======')
        const f = EXIF.readFromBinaryFile(arraybuffer)
        console.log(f)
      }
    }
  }
</script>

<style lang="stylus">

</style>
