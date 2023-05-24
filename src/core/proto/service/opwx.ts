import {
  CheckinResults,
  ErrorCode, GameType,
  OpwxService,
  PushResponse,
  RegisterRequest,
} from "mihomo-protocol";
import {GrpcService, GrpcServiceImplFn} from "../../../types/grpc_server";
import {sgidMap} from "../../../store/user";
import AccountType = RegisterRequest.AccountType;
import {logger} from "../../../utils/logger";


const createPushRes = (raw: PushResponse.AsObject) => {
  const ret = new PushResponse()
  ret.setStatus(raw.status)
  ret.setMsg(raw.msg)
  return ret
}

const createMsgTemplate = (status: [number, number, boolean]): string => `<div>
    <span>${status[0] === AccountType.CN ? '米游社': 'hoyolab'}</span>
    <span>${status[1] === GameType.GENSHIN ? '原': '穹'}</span>
    <span style="color: ${status[2] ? 'green': 'red'}">签到${status[2] ? '成功': '失败'}</span>
</div>`

const getTime = (time: number): string => {
  const date = new Date(time)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 签到`
}

const pushCheckinResults: GrpcServiceImplFn<CheckinResults, PushResponse> = (call, callback) => {
  for (const result of call.request.getResultsList()) {
    const header = result.getHeader()

    if (header !== undefined) {
      const exist = sgidMap.get(header.getUserId())
      if (exist !== undefined) {
        if (header.getCode() === ErrorCode.OK) {
          const tmp: [number, number, boolean][] = []
          result.getCheckininfooverseaMap().forEach((entry, key) => {
            tmp.push([AccountType.OVERSEA, key, entry.getSuccess()])
          })
          result.getCheckininfocnMap().forEach((entry, key) => {
            tmp.push([AccountType.CN, key, entry.getSuccess()])
          })

          exist.send(tmp.map(createMsgTemplate).join('\n'), getTime(Date.now()), 2)
            .catch(reason => {
              logger.error({name: 'checkin', raw: exist.toRaw()})
            })
        }
      }
    }
  }

  callback(null, createPushRes({status: 0, msg: 'ok'}))
}

export const opwxService: GrpcService = {
  def: OpwxService,
  impl: {
    pushCheckinResults
  }
}
