import {WxCmd} from "../../../types/cmd";
import {update} from "../../../data/maria/user";

const isNicknameOk = (name: string): boolean => {
  return true
}

export const cmdSN: WxCmd = {
  cmd: 'sn',
  name: 'set nickname',
  desc: '设置一个昵称, 就不称呼你尼哥了',
  handler: async (user, content) => {
    if (isNicknameOk(content)) {
      user.nickname = content
      await update(user.toRaw())
    } else {
      await user.send('这个昵称有问题哦', '设置昵称失败')
    }
  }
}
