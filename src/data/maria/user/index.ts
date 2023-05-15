import {query} from "../connection";
import {config} from "../../../utils/readConfig";
import {PusherUserRaw} from "../../../types/user";
import {PusherUser} from "../../../core/pusher/PusherUser";

export const getAllUser = async () => {
  const q = `SELECT * FROM ${config.maria.database}`
  return query(q).catch(reason => {
    console.log(reason)
    return []
  }) as Promise<PusherUserRaw[]>
}

export const insertUser = async (user: PusherUser) => {
  const q= `INSERT INTO ${config.maria.database} SET ?`
  return query(q, [user.toRaw()])
}
