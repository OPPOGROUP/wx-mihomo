import {PusherFollowInfo} from "../types/pusher";
import {addUser, uidMap} from "../store/user";
import {PusherUser} from "../core/pusher/PusherUser";
import {insertUser} from "../data/maria/user";
import {logger} from "../utils/logger";

export const registerService = async (info: PusherFollowInfo) => {
  const exist = uidMap.get(info.data.uid)
  if (exist === undefined) {
    const user = PusherUser.fromFollow(info)
    await insertUser(user)
    logger.info({name: 'register', raw: user.toRaw()})
    await user.send(`感谢关注, op${user.id}号。`)
    addUser(user)
  } else {
    await exist.send(`欢迎回来！op${exist.id}号。`)
  }
}
