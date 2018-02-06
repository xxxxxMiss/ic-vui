import { createCanvas } from './util'
/**
 * 获取blob中的数据，这个blob对象的来源可以是:
 * ①<input />元素，DataTransfer, mozGetFile() on HTMLCanvasElement
 * @param  {[type]} blob  [description]
 * @param  {[string]} type  [type of return data]
 * 'arraybuffer', 'binarystring', 'dataurl', 'text'
 * @return {[type]}       [description]
 */
export function getBlobData (blob, type = 'dataurl') {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.onload = function (e) {
      resolve(fileReader.result)
    }

    fileReader.onerror = function (e) {
      reject(e)
    }

    switch (type) {
      case 'arraybuffer':
        return fileReader.readAsArrayBuffer(blob)
      case 'binarystring':
        return fileReader.readAsBinaryString(blob)
      case 'text':
        return fileReader.readAsText(blob)
      case 'dataurl':
      default:
        return fileReader.readAsDataURL(blob)
    }
  })
}

export function canvas2DataURL (canvas, mimeType = 'image/png', quality = 0.92) {
  canvas = typeof canvas === 'string' ? document.getElementById(canvas) : canvas
  if (canvas == null) canvas = createCanvas()
  return canvas.toDataURL(mimeType, quality)
}

/**
 * 读取本地的文件的内容转化为base64显示在页面上，并返回base64的结果的promise
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
export function file2DataURL (input) {
  if (typeof input === 'string') {
    input = document.getElementById(input)
  }

  if (!input ||
    (input && !input.nodeType) ||
    (input && input.nodeType && input.nodeType !== 1)) return

  input.addEventListener('change', (e) => {
    const files = e.target.files

    if (files && files.length > 0) {
      return getBlobData(files[0]).then(result => {
        input.src = result
        return result
      })
    }
  })
}

export function image2Canvas (image, canvas) {
  return new Promise((resolve, reject) => {
    const isUrl = /^(http:\/\/|https:\/\/|\.\/|\.\.\/|\/)/.test(image)

    if (isUrl) {
      const url = image
      image = new Image()
      image.src = url
    } else {
      image = typeof image === 'string' ? document.getElementById(image) : image
    }

    if (image == null) return

    canvas = typeof canvas === 'string' ? document.getElementById(canvas) : canvas

    if (canvas == null) {
      canvas = createCanvas()
    }
    image.onload = function () {
      const ctx = canvas.getContext('2d')
      createImageBitmap(this, 0, 0)
        .then(imageBitmap => {
          ctx.drawImage(imageBitmap, 0, 0)
          resolve(canvas)
        })
    }
    image.onerror = (e) => reject(e)
  })
}

export function rotateImage (orientation, imageBitmap) {
  const { width, height } = imageBitmap
  const canvas = createCanvas()
  const ctx = canvas.getContext('2d')

  switch (orientation) {
    case 1: // 0
      canvas.width = width
      canvas.height = height
      ctx.drawImage(imageBitmap, 0, 0)
      break
    case 3: // 180
      canvas.width = width
      canvas.height = height
      ctx.rotate(Math.PI)
      ctx.drawImage(imageBitmap, -width, -height)
      break
    case 6: // 90
      canvas.width = height
      canvas.height = width
      ctx.rotate(Math.PI * 270 / 180)
      ctx.drawImage(imageBitmap, -width, 0)
      break
    case 8: // -90
      canvas.width = height
      canvas.height = width
      ctx.rotate(Math.PI * 90 / 180)
      ctx.drawImage(imageBitmap, 0, -height)
      break
  }
  return canvas
}

export function getBitmapCanvas (image, orientation) {
  return new Promise((resolve, reject) => {
    createImageBitmap(image)
      .then(imageBitmap => {
        resolve(rotateImage(orientation, imageBitmap))
      }).catch(error => reject(error))
  })
}
