import {initUserStore} from "./user";

export async function initStore() {
  let errCount = 0
  for (const fn of [
    initUserStore
  ]) {
    await fn().catch(reason => {
      errCount += 1
    })
  }
  if (errCount !== 0) {
    throw new Error(`${errCount} store init fail`)
  }
}
