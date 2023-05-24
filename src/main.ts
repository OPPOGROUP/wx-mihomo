//preload module
import "./utils/readConfig";
import "./data/redis/client"
import "./data/maria/connection"
import "./core/proto/client"

import {startKoa} from "./app";
import {initStore} from "./store";
import {startGrpcServer} from "./core/proto/server";
import {config} from "./utils/readConfig";
import {logger} from "./utils/logger";

const initLogger = logger.child({action: 'init'})

initStore()
  .then(() => startKoa(config.http.port))
  .then(() => {
    initLogger.info({
      name: 'http',
      port: config.http.port
    })
  })
  .then(() => startGrpcServer())
  .then(() => {
    initLogger.info({
      name: 'grpc server',
      url: config.grpc.server
    })
  })
  .catch((reason) => {
    initLogger.error(reason.message)
  })
