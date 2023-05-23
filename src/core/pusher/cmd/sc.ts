import {WxCmd} from "../../../types/cmd";
import {hoyolibClient} from "../../proto/client";
import {ErrorCode, GameType, RegisterRequest, RegisterResponse} from 'mihomo-protocol'
import AccountType = RegisterRequest.AccountType;
import {updateCookie} from "../../../data/maria/user";

const callRpcRegister = (
  {userId, cookieToken, gamesList, accountId, accountType}: RegisterRequest.AsObject
) => new Promise<RegisterResponse>((resolve, reject) => {
  const req = new RegisterRequest()
  req.setUserId(userId)
  req.setGamesList(gamesList)
  req.setAccountId(accountId)
  req.setAccountType(accountType)
  req.setCookieToken(cookieToken)

  hoyolibClient.register(req, (err, value) => {
    if (
      err === null ||
      value === undefined ||
      value.getHeader()?.getCode() !== ErrorCode.OK
    ) {
      reject(err)
    } else {
      resolve(value)
    }
  })
})

export const cmdSC: WxCmd = {
  cmd: 'sc',
  name: 'set cookie',
  desc: '设置cookie',
  handler: async (user, content) => {
    const sendError = () => user.send('cookie不对哇, 请仔细阅读教程。', '格式错误')
    let cookie: Record<string, string>
    try {
      cookie = JSON.parse(content)
    } catch (e) {
      await sendError()
      return
    }

    const accountId = cookie['account_id']
    const cookieToken = cookie['cookie_token']
    if (accountId === undefined || cookieToken === undefined) {
      await sendError()
      return
    }

    const rpcRes = await callRpcRegister({
      userId: user.id,
      gamesList: [GameType.GENSHIN, GameType.STARRAIL],
      accountType: AccountType.CN,
      accountId,
      cookieToken
    }).catch(() => null)

    if (rpcRes !== null) {
      await updateCookie(user, JSON.stringify({accountId, cookieToken}))
      await user.send('恭喜, cookie注册成功!', '成功')
      return
    }

    await sendError()
  }
}
