import {WxCmd} from "../../../types/cmd";

export const cmdSC: WxCmd = {
  cmd: 'sc',
  name: 'set cookie',
  desc: '设置cookie',
  handler: async (user, content) => {
    let cookie: Record<string, string>
    try {
      cookie = JSON.parse(content)
    } catch (e) {
      await user.send('cookie不对哇, 请仔细阅读教程。', '格式错误')
      return
    }


  }
}
