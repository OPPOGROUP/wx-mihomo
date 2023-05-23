import {WxCmd} from "../../../types/cmd";
import {redisClient} from "../../../data/redis/client";

const commentsList = 'comments'

export const cmdSL: WxCmd = {
  cmd: 'sc',
  name: 'send msg to LongSang',
  desc: '给隆桑留言',
  handler: async (user, content) => {
    await redisClient.lPush(commentsList, JSON.stringify({
      ...user.toRaw(),
      content,
      time: Date.now()
    }))
  }
}
