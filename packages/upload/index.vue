<template>
  <form class="ic-upload">
    <slot>
      <span class="ic-upload__wrapper">
        <ic-icon v-if="icon && !usePreview" :name="icon"></ic-icon>
      </span>
    </slot>
    <input type="file"
      :disabled="disabled"
      :name="name"
      :accept="accept"
      v-bind="$attrs"
      @change="changeFile">
    <img v-if="usePreview" :src="previewSrc" alt="图片预览">
  </form>
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
      showPreview: {
        type: Boolean,
        default: false
      },
      uploadType: {
        type: String,
        default: 'formdata' // base64
      },
      name: String,
      url: {
        type: String
      },
      headers: {
        type: Object,
        default: () => ({})
      },
      data: Object,
      multiple: {
        type: Boolean,
        default: false
      },
      credentials: {
        type: String,
        default: 'include' // 'omit', 'same-origin'
      },
      mode: {
        type: String,
        default: 'cors' // 'no-cors', 'same-origin', 'navigate'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      responseType: {
        type: String,
        default: 'json' // 'arraybuffer', 'blob', 'text', 'formdata'
      },
      autoUpload: {
        type: Boolean,
        default: true
      },
      accept: String,
      afterRead: Function,
      onSuccess: Function,
      onError: Function,
      onProgress: Function,
      beforeUpload: Function,
      onRequest: Function
    },
    data () {
      return {
        previewSrc: '',
        readSucc: false
      }
    },
    computed: {
      usePreview () {
        return this.showPreview && this.readSucc
      }
    },
    methods: {
      upload (file, base64) {
        if (!file) return
        // use yourself request method
        if (typeof this.onRequest === 'function') {
          return this.onRequest(file, base64)
        }

        const formData = new FormData()
        formData.append(this.name, this.uploadType === 'base64' ? base64 : file)
        if (this.data) {
          Object.keys(this.data).forEach(key => formData.append(key, this.data[key]))
        }

        if (typeof this.beforeUpload === 'function') {
          if (this.beforeUpload(file) === false) return
          else {
            this.autoUpload && this.fetch(formData)
          }
        } else {
          this.autoUpload && this.fetch(formData)
        }
      },
      fetch (formData) {
        fetch(this.url, {
          method: 'POST',
          headers: this.headers,
          credentials: this.credentials,
          mode: this.mode,
          body: formData
        })
        .then(res => {
          switch (this.responseType) {
            case 'json': return res.json()
            case 'blob': return res.blob()
            case 'arraybuffer': return res.arrayBuffer()
            case 'text': return res.text()
            case 'formdata': return res.formData()
          }
        })
        .then(data => {
          if (typeof this.onSuccess === 'function') {
            this.onSuccess(data)
          }
        })
        .catch(e => {
          if (typeof this.onError === 'function') {
            this.onError(e)
          }
        })
      },
      changeFile (e) {
        const files = e.target.files
        if (!files || files.length < 1) return

        if (this.uploadType === 'formdata') {
          return this.upload(files[0])
        }

        if (this.uploadType === 'base64') {
          this.getBlobData(files[0], this.readType).then(res => {
            this.afterRead && typeof this.afterRead === 'function' &&
            this.afterRead(res, files[0])
            this.readSucc = true
            this.previewSrc = res

            this.upload(files[0], res)
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
