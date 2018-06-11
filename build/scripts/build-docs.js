const fs = require('fs')
const path = require('path')
const uppercamelcase = require('uppercamelcase')

const pkgPath = path.resolve(__dirname, '../../packages')
const docPath = path.resolve(__dirname, '../../docs/markdown/')
const tplPath = path.resolve(__dirname, '../template/')
const excludes = ['item', 'group']

fs.readdirSync(pkgPath)
  .filter(d => excludes.indexOf(d.split('-')[1]) === -1)
  .filter(d => d !== '.DS_Store') // osx
  .filter(d => d !== 'index.js') // entry js
  .forEach(componentName => {
    fs.readdirSync(tplPath).forEach(md => {
      const content = fs.readFileSync(path.join(tplPath, md), 'utf8')
        .replace(/{{component}}/g, uppercamelcase(componentName))

      const mdPath = path.join(docPath, md.replace(/\.md/, ''), `${componentName}.md`)
      if (!fs.existsSync(mdPath)) {
        fs.writeFileSync(mdPath, content)
      }
    })
  })
