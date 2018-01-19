export function findParentByName (vm, name) {
  let parent = vm.$parent
  while (parent) {
    if (parent.$options.name === name) return parent
    parent = parent.$parent
  }
}
