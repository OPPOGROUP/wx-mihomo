import Koa from 'koa'
import {router} from "../router";

const app = new Koa

app.use(router.allowedMethods())
  .use(router.routes())

export const startKoa = (port: number) => {
  return new Promise<void>(resolve => {
    app.listen(port, resolve)
  })
}
