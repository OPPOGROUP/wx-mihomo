/**
 *
 */

const fsp = require('node:fs/promises')
const path = require('node:path')


/**
 *
 * @param {string} cmd
 */
function cmdBuilder(cmd) {
  /** @type {string[]} */
  const ret = [cmd]

  /**
   *
   * @param {string} key
   * @param {string} value
   */
  const opt = (key, value) => {
    ret.push(`--${key}="${value}"`)
  }

  /**
   *
   * @param {string | string[]} params
   */
  const param = (params) => {
    if (!Array.isArray(params)) {
      params = [params]
    }
    for (const v of params) ret.push(v)
  }

  const build = () => ret.join(' ')

  return {build, opt, param}
}

async function start() {
  const protoDir = './protocol'
  const dirPath = path.resolve(protoDir)
  const targets = await filterDir(dirPath, async dirent => dirent.isDirectory())
  /**
   *
   * @param {string} target
   * @returns {{target: string, task: Promise<{name: string, protoList: string[]} | null>}}
   */
  const createTask = (target) => ({
    target,
    task: handleOneDir(target)
  })
  const getBinPath = bin => path.resolve('./node_modules/.bin', bin)

  const tasks = targets.map(createTask)

  let root = Promise.resolve()
  for (const task of tasks) {
    root = root.then(() => task.task)
      .then(res => {
        if (res !== null) {
          const {out, name, protoList} = res
          const {opt, build, param} = cmdBuilder('protoc')
          opt('proto_path', path.join(dirPath, name))
          opt('plugin', `protoc-gen-ts=${getBinPath('protoc-gen-ts')}`)
          opt('plugin', `protoc-gen-grpc=${getBinPath('grpc_tools_node_protoc_plugin')}`)
          opt('plugin', `protoc-gen-js=${getBinPath('protoc-gen-js')}`)
          opt('js_out', `import_style=commonjs,binary:${out}`)
          opt('ts_out', `service=grpc-node,mode=grpc-js:${out}`)
          opt('grpc_out', `grpc_js:${out}`)
          param(protoList)
          console.log(build())
        }
      })
      .catch(reason => {
        console.log(`echo "${reason}"`)
      })
  }

  await root
}

/**
 * @param {string} dirPath
 *
 * @returns {Promise<{name: string, protoList: string[], out: string} | null>}
 */
async function handleOneDir(dirPath) {
  const dir = await fsp.opendir(dirPath)
  /** @type {string[]} */
  const tmp = []

  for await (const dirent of dir) {
    if (dirent.isFile() && dirent.name.endsWith('.proto')) {
      tmp.push(dirent.name)
    }
  }

  if (tmp.length !== 0) {
    const out = path.resolve('./src/proto', path.basename(dirPath))
    try {
      await fsp.mkdir(out, {recursive: true})
      return {name: path.basename(dirPath), protoList: tmp, out}
    } catch (err) {
      return null
    }
  }

  return null
}

/**
 *
 * @param {string} dirPath
 * @param {(dirent: import('node:fs').Dirent) => Promise<boolean>?} filter
 *
 * @returns {Promise<string[]>}
 */
async function filterDir(dirPath, filter) {
  filter ??= async () => true
  const dir = await fsp.opendir(dirPath)
  /** @type string[] */
  const ret = []
  for await (const dirent of dir) {
    if (await filter(dirent)) {
      ret.push(path.join(dirPath, dirent.name))
    }
  }
  return ret
}

start().catch(() => {
  console.log('echo "error"')
})
