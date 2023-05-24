import {hoyolibClient} from "../core/proto/client";
import {CheckInRequest} from "mihomo-protocol";

const checkInReq = new CheckInRequest()
checkInReq.setGamesList([1001, 1000])
checkInReq.setUserId(100000)

hoyolibClient.checkIn(checkInReq, (err, value) => {
  if (err !== null) {
    console.log(err)
    return
  }

  if (value !== undefined) {
    const info = value.getCheckininfooverseaMap()
    info.forEach((entry, key) => {
      console.log(entry.toObject())
    })
  }
})
