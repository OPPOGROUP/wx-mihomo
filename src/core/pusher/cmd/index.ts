import {WxCmd} from "../../../types/cmd";
import {cmdSC} from "./sc";
import {cmdSL} from "./sl";
import {cmdSN} from "./sn";

const cmdMap = new Map<string, WxCmd>()

for (const cmd of <WxCmd[]>[
  cmdSC,
  cmdSL,
  cmdSN
]) {
  cmdMap.set(cmd.cmd, cmd)
}

export {
  cmdMap
}
