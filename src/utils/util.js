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
