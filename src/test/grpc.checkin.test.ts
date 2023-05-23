import {hoyolibClient} from "../core/proto/client";
import {CheckInRequest, CheckInResponse} from "mihomo-protocol";
import CheckInStatus = CheckInResponse.CheckInStatus;

const checkInReq = new CheckInRequest()
checkInReq.setGamesList([1001])
checkInReq.setUserId(100001)

hoyolibClient.checkIn(checkInReq, (err, value) => {
  if (err !== null) {
    console.log(err)
    return
  }

  if (value !== undefined) {
    console.log(value.toObject())
  }
})
