import {Server, ServerCredentials} from "@grpc/grpc-js";
import {services} from "./service";
import {config} from "../../utils/readConfig";

const server = new Server()


for (const {def, impl} of services) {
  server.addService(def, impl)
}

export const startGrpcServer = () => new Promise<void>((resolve, reject) => {
  server.bindAsync(config.grpc.server, ServerCredentials.createInsecure(), (error, port) => {
    if (error !== null) reject(error)
    else {
      server.start()
      console.log(`grpc server listen at ${port}`)
      resolve()
    }
  })
})
