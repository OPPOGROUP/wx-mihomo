import {WxCmd} from "../../../types/cmd";
import {sendWithUid} from "../send";
import {PusherUser} from "../PusherUser";

const longUid = 'UID_3vEqPy7Qekgyj48ZBb2uxikAtEyk'

const createMsgTemplate = (user: PusherUser, content: string) => {
  return `<h1>用户留言</h1>
<h2>用户信息</h2>
<pre>${JSON.stringify(user.toRaw(), null, 4)}</pre>
<hr>
<p>${content}</p>
<hr>`
}

export const cmdSL: WxCmd = {
  cmd: 'sl',
  name: 'send msg to LongSang',
  desc: '给隆桑留言 反馈建议啥的',
  handler: async (user, content) => {
    sendWithUid(longUid, createMsgTemplate(user, content), '用户留言', 2)
  }
}
