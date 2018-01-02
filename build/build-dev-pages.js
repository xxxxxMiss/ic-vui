const { resolve } = require('path')
const fs = require('fs')
const upperCamelCase = require('uppercamelcase')
const decamelize = require('decamelize')
const version = require('../package.json').version
const TIPS = '// This file is generated automatically by build-dev-pages.js\n'

const writeComponent = resolve(__dirname, '../src/components.js')
const writeDevPage = resolve(__dirname, '../src/components/')
const writeRouter = resolve(__dirname, '../src/router/index.js')
const packages = resolve(__dirname, '../packages')
const excludeComponents = ['theme']

const coms = fs.readdirSync(packages)
  .filter(c => excludeComponents.indexOf(c) === -1)

const intallList = []
const importList = coms.map(c => {
    const componentName = upperCamelCase(`xm-${c}`)
    intallList.push(componentName)
    return `import ${componentName} from '~/${c}'`
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

const routes = intallList.map(c => {
  return `  {\n      path: '/${decamelize(c, '-').replace('xm-', '')}',\n      component: ${c}\n    }`
})
const pages = fs.readdirSync(writeDevPage)
  .map(c => {
    const basename = c.replace('.vue', '')
    return `import ${basename} from '../components/${basename}'`
  })

const routerContent = `${TIPS}
import Vue from 'vue'
import Router from 'vue-router'

${pages.join('\n')}

Vue.use(Router)

export default new Router({
  routes: [
  ${routes.join(',\n  ')}
  ]
})
`

fs.writeFileSync(writeComponent, componentContent)
fs.writeFileSync(writeRouter, routerContent)
