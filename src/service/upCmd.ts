import {PusherUpMsg} from "../types/pusher";
import {uidMap} from "../store/user";
import {cmdMap} from "../core/pusher/cmd";

const parseContent = (s: string): [string, string] | null => {
  const chunks = s.split(' ')
  if (chunks.length === 2 && chunks[0].length <= 4) {
    return [chunks[0], chunks[1]]
  }
  return null
}

export const handleUpCmd = async (msg: PusherUpMsg) => {
  const user = uidMap.get(msg.data.uid)
  if (user === undefined) return

  const parsedContent = parseContent(msg.data.content)
  if (parsedContent === null) return

  const cmdHandler = cmdMap.get(parsedContent[0])
  if (cmdHandler === undefined) return

  await cmdHandler.handler(user, parsedContent[1])
}
