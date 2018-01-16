<template>
  <div class="demo-upload">
    <ic-upload
      :after-read="afterReade"></ic-upload>
  </div>
</template>

<script>
  export default {
    methods: {
      afterReade (data, file) {
        console.log(data)
        console.log(file)
      }
    }
  }
</script>
