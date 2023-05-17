import {PusherUpMsg} from "../types/pusher";
import {uidMap} from "../store/user";

export const handleUpCmd = async (msg: PusherUpMsg) => {
  const user = uidMap.get(msg.data.uid)
  if (user === undefined) return

  await user.send(`尼哥${user.id}号 注册成功.`, '成功')
}
