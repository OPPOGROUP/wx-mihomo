import {PusherUser} from "../core/pusher/PusherUser";

type WxCmdHandler = (user: PusherUser, content: string) => Promise<void>

export interface WxCmd {
  cmd: string
  name: string
  desc: string
  handler: WxCmdHandler
}
