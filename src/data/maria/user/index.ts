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

const updateUser = async (user: PusherUser, key: string, value: string) => {
  return query(`update user set ${key}='${value}' where id=${user.id}`)
}

export const updateCookie = async (user: PusherUser, cookie: string) => {
  return updateUser(user, 'cookie', cookie)
}

export const updateNickname = async (user: PusherUser, nickname: string) => {
  return updateUser(user, 'nickname', nickname)
}
