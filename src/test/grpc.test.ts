import {RegisterRequest} from "mihomo-protocol";
import AccountType = RegisterRequest.AccountType;

import {hoyolibClient} from "../core/proto/client";

const createRegisterReq = (raw: RegisterRequest.AsObject) => {
  const ret = new RegisterRequest()
  ret.setAccountId(raw.accountId)
  ret.setAccountType(raw.accountType)
  ret.setCookieToken(raw.cookieToken)
  ret.setGamesList(raw.gamesList)
  ret.setUserId(100000)
  return ret
}

const req = createRegisterReq({
  accountId: '54952585',
  accountType: AccountType.OVERSEA,
  cookieToken: 'Vf32ivK4VtdlhW8e7yTd1umxdkkgj7DNUeK4KYvX',
  gamesList: [1001, 1000],
  userId: 0
})

hoyolibClient.register(req, {
  deadline: Date.now() + 3000
},(err, value) => {
  if (err !== null) {
    console.log(err)
    return
  }

  if (value !== undefined) {
    const header = value.getHeader()
    if (header !== undefined) {
      console.log(header.toObject())
    }
  }
})
