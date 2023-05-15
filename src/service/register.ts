import {PusherFollowInfo} from "../types/pusher";
import {addUser, hasUser} from "../store/user";
import {PusherUser} from "../core/pusher/PusherUser";
import {insertUser} from "../data/maria/user";

export const registerService = async (info: PusherFollowInfo) => {
  if (!hasUser(info.data.uid)) {
    const user = PusherUser.fromFollow(info)
    await insertUser(user).catch(reason => {
      console.log(reason)
    })
    addUser(user)
  }
}
