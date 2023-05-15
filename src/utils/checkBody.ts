import {PusherFollowInfo} from "../types/pusher";

export const isPusherFollowInfo = (raw: any): raw is PusherFollowInfo => {
  return (
    typeof raw === 'object' &&
    raw.action === 'app_subscribe'
  )
}
