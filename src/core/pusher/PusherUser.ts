import {PusherFollowInfo} from "../../types/pusher";
import {PusherUserRaw} from "../../types/user";
import {sendWithUid} from "./send";

let ID = 0
const getNewId = () => {
  return ++ID
}

export class PusherUser implements PusherUserRaw {
  readonly uid: string
  readonly id: number
  cookie?: string
  nickname?: string
  sgid?: number

  constructor(raw: PusherUserRaw) {
    this.uid = raw.uid
    this.id = raw.id
    if (raw.id > ID) {
      ID = raw.id
    }
    this.cookie = raw.cookie
    this.nickname = raw.nickname
    this.sgid = raw.sgid
  }

  static fromFollow(info: PusherFollowInfo) {
    return new PusherUser({
      uid: info.data.uid,
      id: getNewId()
    })
  }

  static fromRaw(raw: PusherUserRaw) {
    return new PusherUser(raw)
  }

  toRaw(): PusherUserRaw {
    return {
      uid: this.uid,
      id: this.id,
      cookie: this.cookie,
      nickname: this.nickname,
      sgid: this.sgid
    }
  }

  send(content: string, summary?: string, ct?: 1 | 2) {
    return sendWithUid(this.uid, content, summary, ct)
  }
}
