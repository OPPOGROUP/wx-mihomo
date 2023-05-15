import {UseRouterFn} from "../router";

export const getRoot: UseRouterFn = (router) => {
  router.get('/', context => {
    context.body = context.query['echostr'] ?? ''
  })
}
