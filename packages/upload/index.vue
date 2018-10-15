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
  import { getCorrectBase64, file2DataURL } from 'utils/blob'

  export default {
    name: 'ic-upload',

    props: {
      icon: {
        type: String,
        default: 'titlebar-settings'
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
        if (typeof this.onRequest !== 'function' && !this.name) {
          throw new Error('you must supply a `name` prop')
        }
        formData.append(this.name, this.uploadType != 'formdata' ? base64 : file)
        if (this.data) {
          Object.keys(this.data).forEach(key => formData.append(key, this.data[key]))
        }

        // TODO: support upload multiple files and upload manually
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
        const loading = this.$loading()
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
          loading.close()
          if (typeof this.onSuccess === 'function') {
            this.onSuccess(data)
          }
        })
        .catch(e => {
          loading.close()
          if (typeof this.onError === 'function') {
            this.onError(e)
          }
        })
      },
      changeFile (e) {
        const files = e.target.files
        if (!files || files.length < 1) return

        const file = files[0]
        if (this.uploadType === 'formdata') {
          return this.upload(file)
        }

        if (/image\/jpe?g/i.test(file.type)) {
          getCorrectBase64(file).then(base64 => {
            this.afterRead && typeof this.afterRead === 'function' &&
            this.afterRead(base64, file)
            this.readSucc = true
            this.previewSrc = base64

            this.upload(file, base64)
          }).catch(error => {
            console.error(error)
            this.readSucc = false
          })
        } else {
          file2DataURL(file).then(base64 => {
            this.afterRead && typeof this.afterRead === 'function' &&
            this.afterRead(base64, file)
            this.readSucc = true
            this.previewSrc = base64

            this.upload(file, base64)
          }).catch(error => {
            console.error(error)
            this.readSucc = false
          })
        }
      }
    }
  }
</script>
