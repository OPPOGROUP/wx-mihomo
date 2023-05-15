import {PusherUser} from "../core/pusher/PusherUser";
import {getAllUser} from "../data/maria/user";

const userMap = new Map<number, PusherUser>()
const uidSet = new Set<string>()

export const addUser = (user: PusherUser) => {
  userMap.set(user.id, user)
  uidSet.add(user.uid)
}

export const hasUser = (uid: string) => uidSet.has(uid)

export async function initUserStore() {
  const users = await getAllUser()
  for (const user of users) {
    addUser(PusherUser.fromRaw(user))
  }
}
