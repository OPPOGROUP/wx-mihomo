import {UseRouterFn} from "../router";
import {parseBody} from "../../utils/parseBody";
import {isPusherFollowInfo} from "../../utils/checkBody";
import {registerService} from "../../service/register";

export const postRegister: UseRouterFn = (router) => {
  router.post('/register', async (ctx, next) => {
    await next()
    const postBody = ctx.state.body
    ctx.body = 'not found'
    ctx.status = 404
    if (isPusherFollowInfo(postBody)) {
      await registerService(postBody)
      ctx.body = ''
      ctx.status = 200
    }
  }, parseBody)
}
