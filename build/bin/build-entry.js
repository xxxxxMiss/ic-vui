const Components = require('./get-components')()
const { resolve } = require('path')
const fs = require('fs')
const upperCamelCase = require('uppercamelcase')
const version = require('../../package.json').version
const TIPS = '// This file is generated automatically by bin/build-entry.js\n'

const intallList = []
const importList = Components.map(c => {
    const componentName = upperCamelCase(`ic-${c}`)
    intallList.push(componentName)
    return `import ${componentName} from './${c}'`
  })

const componentContent = `${TIPS}
${importList.join('\n')}

const version = '${version}'
const components = [
  ${intallList.join(',\n  ')}
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  ${intallList.join(',\n  ')}
}

export default {
  ${intallList.join(',\n  ')}
}
`
fs.writeFileSync(resolve(__dirname, '../../packages/index.js'), componentContent)
