import {query} from "../connection";
import {PusherUserRaw} from "../../../types/user";
import {PusherUser} from "../../../core/pusher/PusherUser";

export const getAllUser = async () => {
  const q = `SELECT * FROM user`
  return query(q).catch(reason => {
    console.log(reason)
    return []
  }) as Promise<PusherUserRaw[]>
}

export const insertUser = async (user: PusherUser) => {
  const q= `INSERT INTO user SET ?`
  return query(q, [user.toRaw()])
}
