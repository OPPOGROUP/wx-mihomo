import {PusherUser} from "../core/pusher/PusherUser";
import {getAllUser} from "../data/maria/user";

export const userMap = new Map<number, PusherUser>()
export const uidMap = new Map<string, PusherUser>()
export const sgidMap = new Map<number, PusherUser>()

export const addUser = (user: PusherUser) => {
  userMap.set(user.id, user)
  uidMap.set(user.uid, user)
  if (user.sgid !== undefined) {
    sgidMap.set(user.sgid, user)
  }
}

export async function initUserStore() {
  const users = await getAllUser()
  for (const user of users) {
    addUser(PusherUser.fromRaw(user))
  }
}
