import {PusherUser} from "../core/pusher/PusherUser";
import {getAllUser} from "../data/maria/user";

export const userMap = new Map<number, PusherUser>()
export const uidMap = new Map<string, PusherUser>()

export const addUser = (user: PusherUser) => {
  userMap.set(user.id, user)
  uidMap.set(user.uid, user)
}

export const hasUserByUid = (uid: string) => uidMap.has(uid)
export const hasUserById = (id: number) => userMap.has(id)

export async function initUserStore() {
  const users = await getAllUser()
  for (const user of users) {
    addUser(PusherUser.fromRaw(user))
  }
}
