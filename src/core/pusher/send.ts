import {config} from "../../utils/readConfig";
import {PusherSendBody, PusherSendResBody} from "../../types/pusher";
import {logger} from "../../utils/logger";
const appToken = config.pusher.appToken
const pusherSendUrl = 'https://wxpusher.zjiecode.com/api/send/message'

const baseSend = (body: string) => fetch(pusherSendUrl, {
  headers: { 'Content-Type': 'application/json' },
  body,
  method: 'POST'
})
  .then(res => res.json() as Promise<PusherSendResBody>)
  .catch(reason => {
    logger.debug({name: 'pusher', reason})
  })

export const sendWithUid = (uid: string | string[], content: string, summary?: string, ct?: 1 | 2) => {
  const uids = Array.isArray(uid) ? uid : [uid]
  summary ??= ''
  const tmp: PusherSendBody = {
    appToken,
    content,
    summary,
    contentType: ct ?? 1,
    uids
  }
  return baseSend(JSON.stringify(tmp))
}
