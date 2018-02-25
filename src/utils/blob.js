import { createCanvas } from './util'
import EXIF from 'utils/exif'
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

    fileReader.onload = e => resolve(fileReader.result)

    fileReader.onerror = error => reject(error)

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
 * return a promise resolve to base64 from a file object
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
export function file2DataURL (file) {
  return new Promise((resolve, reject) => {
    function drawImage (image) {
      const canvas = createCanvas()
      const ctx = canvas.getContext('2d')
      // reset canvas default size(w: 300, h: 150)
      canvas.width = image.naturalWidth || image.width
      canvas.height = image.naturalHeight || image.height
      ctx.drawImage(image, 0, 0)
      return canvas
    }

    // createImageBitmap API not compatible with IOS11
    if (window.createImageBitmap) {
      createImageBitmap(file).then(bitmap => {
        const canvas = drawImage(bitmap)
        resolve(canvas.toDataURL(file.type))
      }).catch(error => reject(error))
    } else {
      const objUrl = URL.createObjectURL(file)
      const image = new Image()
      image.src = objUrl
      image.onload = e => {
        const canvas = drawImage(image)
        resolve(canvas.toDataURL(file.type))
        URL.revokeObjectURL(objUrl)
      }
      image.onerror = error => reject(error)
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
  const width = imageBitmap.naturalWidth
  const height = imageBitmap.naturalHeight
  const canvas = createCanvas()
  const ctx = canvas.getContext('2d')

  switch (orientation) {
    case 3: // 180
      canvas.width = width
      canvas.height = height
      ctx.rotate(Math.PI)
      ctx.drawImage(imageBitmap, -width, -height)
      break
    case 6: // 90
      canvas.width = height
      canvas.height = width
      ctx.rotate(Math.PI * 90 / 180)
      ctx.drawImage(imageBitmap, 0, -height)
      break
    case 8: // -90
      canvas.width = height
      canvas.height = width
      ctx.rotate(Math.PI * 270 / 180)
      ctx.drawImage(imageBitmap, -width, 0)
      break
    case 1: // 0
    default:
      canvas.width = width
      canvas.height = height
      ctx.drawImage(imageBitmap, 0, 0)
  }
  return canvas
}

/**
 * get a correct base64 from a inverted image on some platforms(eg: xiaomi, ios)
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
export function getCorrectBase64 (file) {
  return new Promise((resolve, reject) => {
    EXIF.getData(file, function () {
      const Orientation = EXIF.getTag(this, 'Orientation')
      const objUrl = URL.createObjectURL(file)
      const image = new Image()
      image.src = objUrl
      image.onload = e => {
        resolve(rotateImage(Orientation, image).toDataURL(file.type))
        URL.revokeObjectURL(objUrl)
      }
      image.onerror = error => reject(error)
    })
  })
}
