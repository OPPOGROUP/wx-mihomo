import {HoyolibClient} from "../proto/hoyolib_pb/hoyolib_grpc_pb";
import {credentials} from "@grpc/grpc-js";
import {RegisterRequest} from "../proto/hoyolib_pb/hoyolib_pb";
import AccountType = RegisterRequest.AccountType;

const client = new HoyolibClient('hoyoapi.pilipili.moe:80', credentials.createInsecure())

const createRegisterReq = (raw: RegisterRequest.AsObject) => {
  const ret = new RegisterRequest()
  ret.setAccountId(raw.accountId)
  ret.setAccountType(raw.accountType)
  ret.setCookieToken(raw.cookieToken)
  ret.setGamesList(raw.gamesList)
  ret.setUserId(0)
  return ret
}

const req = createRegisterReq({
  accountId: '161111630',
  accountType: AccountType.CN,
  cookieToken: 'v2_GqTMod9RT0060K5Je16_rjqZP5NJ3oCyZFOW-W2gaYxEm0fVcAIxFkQB_uoMmnevNo-zBwAi3JqIEPfE24MlYERKwkdAGgwq0MceVfrL2KrPswo2s6ll',
  gamesList: [1000, 1001],
  userId: 0
})

client.register(req, {
  deadline: Date.now() + 3000
},(err, value) => {
  if (err !== null) {
    console.log('err')
    return
  }

  if (value !== undefined) {
    const header = value.getHeader()
    if (header !== undefined) {
      console.log(`grpc:register {code: ${header.getCode()}, msg: ${header.getMessage()}, userId: ${header.getUserId()}`)
    }
  }
})
