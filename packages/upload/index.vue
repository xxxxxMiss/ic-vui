<template>
  <div class="ic-upload">
    <slot>
      <span class="ic-upload__wrapper">
        <ic-icon v-if="icon && !showPreview" :name="icon"></ic-icon>
      </span>
    </slot>
    <input type="file" v-bind="$attrs" @change="changeFile">
    <img v-if="showPreview" :src="privewSrc" alt="图片预览">
  </div>
</template>

<script>
  export default {
    name: 'ic-upload',

    props: {
      icon: {
        type: String,
        default: 'titlebar-settings'
      },
      readType: {
        type: String,
        default: 'dataurl' // arraybuffer, text
      },
      usePreview: {
        type: Boolean,
        default: true
      },
      afterRead: Function
    },
    data () {
      return {
        privewSrc: '',
        readSucc: false
      }
    },
    computed: {
      showPreview () {
        return this.usePreview && this.readSucc
      }
    },
    methods: {
      changeFile (e) {
        const files = e.target.files
        if (files && files.length > 0) {
          this.getBlobData(files[0], this.readType).then(res => {
            this.afterRead && typeof this.afterRead === 'function' &&
            this.afterRead(res, files[0])
            this.readSucc = true
            this.privewSrc = res
          }).catch(e => {
            console.error(e)
            this.readSucc = false
          })
        }
      },
      getBlobData (blob, type) {
        return new Promise((resolve, reject) => {
          const fr = new FileReader()
          fr.onload = e => resolve(fr.result)
          fr.onerror = e => reject(e)

          switch (type) {
            case 'arraybuffer':
              return fr.readAsArrayBuffer(blob)
            case 'text':
              return fr.readAsText(blob)
            case 'dataurl':
            default:
              return fr.readAsDataURL(blob)
          }
        })
      }
    }
  }
</script>
