import {query} from "../connection";
import {PusherUserRaw} from "../../../types/user";
import {PusherUser} from "../../../core/pusher/PusherUser";

export const getAllUser = async () => {
  const q = `SELECT * FROM user`
  return query(q).catch(() => {
    return []
  }) as Promise<PusherUserRaw[]>
}
export const insertUser = async (user: PusherUser) => {
  const q= `INSERT INTO user SET ?`
  return query(q, [user.toRaw()])
}

export const update = async (data: PusherUserRaw) => {
  const keys = Reflect.ownKeys(data).filter(key => {
    return typeof key === 'string' && key !== 'id' && Reflect.get(data, key) !== undefined
  }) as (keyof PusherUserRaw)[]

  return query(
    `update user set ${keys.map(key => `${key} = ?`).join(', ')} where id=${data.id}`,
    keys.map(key => data[key])
  )
}
