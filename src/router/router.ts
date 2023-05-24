import KoaRouter from '@koa/router'
import {logger} from "../utils/logger";

export type UseRouterFn = (router: KoaRouter) => void

export const koaLogger = logger.child({action: 'koa'})

const router = new KoaRouter

const useRouter = (fn: UseRouterFn) => {
  fn(router)
}

export {
  router,
  useRouter
}
