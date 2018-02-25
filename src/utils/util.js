const hasOwnProperty = Object.prototype.hasOwnProperty

export function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

export function createObjectURL (blob) {
  return URL.createObjectURL(blob)
}

export function revokeObjectURL (objURL) {
  URL.revokeObjectURL(objURL)
}

export function createCanvas (needCtx) {
  const canvas = document.createElement('canvas')
  return needCtx ? canvas.getContext('2d') : canvas
}

export function clearCanvas (canvas) {
  canvas.clearRect(0, 0, canvas.width, canvas.height)
}

export function base64ToArrayBuffer (base64, mimeType) {
  mimeType = mimeType || base64.match(/^data:([^;]+);base64,/mgi)[1]
  base64 = base64.replace(/^data:([^;]+);base64,/mgi, '')
  const binary = window.btoa(base64)
  const len = binary.length
  const buffer = new ArrayBuffer(len)
  const view = new Uint8Array(buffer)

  for (let i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i)
  }
  return buffer
}
