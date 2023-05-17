import {PusherFollowInfo, PusherUpMsg} from "../types/pusher";

export const isPusherFollowInfo = (raw: any): raw is PusherFollowInfo => {
  return (
    typeof raw === 'object' &&
    raw.action === 'app_subscribe'
  )
}

export const isPusherUpMsg = (raw: any): raw is PusherUpMsg => {
  return (
    typeof raw === 'object' &&
    raw.action === 'send_up_cmd'
  )
}
