import "./utils/readConfig";
import "./data/redis/client"
import "./data/maria/connection"
import {startKoa} from "./app";
import {initStore} from "./store";
import {startGrpcServer} from "./core/proto/server";

initStore()
  .then(() => startKoa(11452))
  .then(() => startGrpcServer())
  .then(() => {
    console.log('koa listen at 11452')
  })
