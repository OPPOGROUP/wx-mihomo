import {PusherFollowInfo} from "../../types/pusher";
import {PusherUserRaw} from "../../types/user";

let ID = 0
const getNewId = () => {
  return ++ID
}

export class PusherUser {
  readonly uid: string
  readonly id: number
  constructor(raw: PusherUserRaw) {
    this.uid = raw.uid
    this.id = raw.id
    if (raw.id > ID) {
      ID = raw.id
    }
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
      id: this.id
    }
  }
}
