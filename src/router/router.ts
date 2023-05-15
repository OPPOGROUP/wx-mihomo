import KoaRouter from '@koa/router'

export type UseRouterFn = (router: KoaRouter) => void

const router = new KoaRouter

const useRouter = (fn: UseRouterFn) => {
  fn(router)
}

export {
  router,
  useRouter
}
