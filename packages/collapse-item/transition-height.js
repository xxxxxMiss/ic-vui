export default {
  inserted (el, binding) {
    const value = binding.value
    if (value.active) {
      const offsetHeight = el.offsetHeight
      el.style.height = `${offsetHeight}px`
      el.style.transition = 'height .3s'
    }
  },
  update (el, binding) {
    const value = binding.value
    if (!value.active) {
      el.style.overflow = 'hidden'
      el.style.height = '0'
    }
  }
}
