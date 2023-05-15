import {startKoa} from "./app";

async function start() {
  await startKoa(11452)
  console.log('listen at 11452')
}

start().catch(reason => {
  console.log(reason)
})
