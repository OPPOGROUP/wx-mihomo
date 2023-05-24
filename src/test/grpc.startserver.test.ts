import {startGrpcServer} from "../core/proto/server";

startGrpcServer().then(() => {
  console.log('ok')
}).catch(reason => {
  console.log(reason)
})
