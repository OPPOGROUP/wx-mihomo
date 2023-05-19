import {UseRouterFn} from "../router";
import {cmdMap} from "../../core/pusher/cmd";

const createCmdCache = () => {
  const tmp: {cmd: string, name: string, desc: string}[] = []
  for (const {cmd, name, desc} of cmdMap.values()) {
    tmp.push({cmd, name, desc})
  }
  return Buffer.from(JSON.stringify(tmp), 'utf-8')
}

const cmdCache = createCmdCache()

export const getCmd: UseRouterFn = (router) => {
  router.options('/cmd', context => {
    context.status = 204
    context.set('Access-Control-Allow-Origin', 'https://op.cdl.zone')
    context.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    context.body = undefined
  })

  router.get('/cmd', context => {
    context.body = cmdCache
    context.set('Content-Type', 'application/json')
    context.set('Access-Control-Allow-Origin', 'https://op.cdl.zone')
    context.status = 200
  })
}
