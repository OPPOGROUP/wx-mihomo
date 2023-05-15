import {Middleware} from "koa";

export const parseBody: Middleware = async (ctx, next) => {
  const bufferTmp: Buffer[] = []
  for await (const chunk of ctx.req) {
    bufferTmp.push(chunk)
  }
  const raw = Buffer.concat(bufferTmp).toString()

  try {
    ctx.state.body = JSON.parse(raw)
  } catch (err) {
    ctx.body = ''
    ctx.status = 404
    return
  }

  await next()
}
