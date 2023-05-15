import { parse } from 'yaml'
import { readFileSync } from 'node:fs'
import {AppConfig} from "../types/config";

const requiredKey: string[] = [
  'pusher.appToken'
]

function getConfig(): AppConfig {
  const configRaw = readFileSync('./wx.config.yml', 'utf-8')
  const ret = parse(configRaw)
  const isInConfig = (key: string): boolean => true //todo

  const errKeys: string[] = []
  for (const need of requiredKey) {
    if (!isInConfig(need)) {
      errKeys.push(need)
    }
  }

  if (errKeys.length !== 0) {
    throw new Error(`config ${errKeys} not find`)
  }

  return ret
}
const config = getConfig()

export {
  config
}
