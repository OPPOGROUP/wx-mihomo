import {initUserStore} from "./user";

export async function initStore() {
  let errCount = 0
  for (const fn of [
    initUserStore
  ]) {
    await fn().catch(reason => {
      console.log(reason)
      errCount += 1
    })
  }
  if (errCount !== 0) {
    throw new Error()
  }
}
