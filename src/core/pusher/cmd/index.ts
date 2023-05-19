import {WxCmd} from "../../../types/cmd";
import {cmdSC} from "./sc";

const cmdMap = new Map<string, WxCmd>()

for (const cmd of <WxCmd[]>[
  cmdSC
]) {
  cmdMap.set(cmd.cmd, cmd)
}

export {
  cmdMap
}
