export interface PusherFollowInfo {
  action: 'app_subscribe'
  data: {
    appId: number
    appName: string
    source: 'scan' | 'link' | 'command'
    userName: string
    userHeadImg: string
    time: number
    uid: string
    extra: string
  }
}

export interface PusherSendBody {
  appToken: string
  content: string
  summary: string
  contentType: 1 | 2
  uids: string[]
  url?: string
}

export interface PusherSendResData {
  uid: string
  messageContentId: number
  sendRecordId: number
  code: number
  status: string
}

export interface PusherSendResBody {
  code: number
  msg: string
  data: PusherSendResData[]
  success: boolean
}
