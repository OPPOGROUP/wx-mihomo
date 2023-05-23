import {WxCmd} from "../../../types/cmd";
import {updateNickname} from "../../../data/maria/user";

const isNicknameOk = (name: string): boolean => {
  return false
}

export const cmdSN: WxCmd = {
  cmd: 'sn',
  name: 'set nickname',
  desc: '设置一个昵称, 就不称呼你尼哥了',
  handler: async (user, content) => {
    if (isNicknameOk(content)) {
      await updateNickname(user, content)
    } else {
      await user.send('')
    }
  }
}
