const pkg = require('./package.json')
const fsp = require('node:fs/promises')

fsp.writeFile('./dist/package.json', JSON.stringify({
  dependencies: pkg.dependencies,
  scripts: {
    start: 'node main.js | bunyan'
  }
}, null, 4))
