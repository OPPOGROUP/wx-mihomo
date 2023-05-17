import {config} from "../../utils/readConfig";
import {PusherSendBody, PusherSendResBody} from "../../types/pusher";
const appToken = config.pusher.appToken
const pusherSendUrl = 'https://wxpusher.zjiecode.com/api/send/message'

const baseSend = (body: string) => fetch(pusherSendUrl, {
  headers: { 'Content-Type': 'application/json' },
  body,
  method: 'POST'
}).then(res => res.json() as Promise<PusherSendResBody>)

export const sendWithUid = (uid: string | string[], content: string, summary?: string) => {
  const uids = Array.isArray(uid) ? uid : [uid]
  summary ??= ''
  const tmp: PusherSendBody = {
    appToken,
    content,
    summary,
    contentType: 1,
    uids
  }
  return baseSend(JSON.stringify(tmp))
}
