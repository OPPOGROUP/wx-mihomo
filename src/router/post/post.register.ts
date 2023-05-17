import {UseRouterFn} from "../router";
import {parseBody} from "../../utils/parseBody";
import {isPusherFollowInfo, isPusherUpMsg} from "../../utils/checkBody";
import {registerService} from "../../service/register";
import {handleUpCmd} from "../../service/upCmd";

export const postRegister: UseRouterFn = (router) => {
  router.post('/register', async (ctx, next) => {
    await next()
    const postBody = ctx.state.body
    ctx.body = ''
    ctx.status = 200
    if (isPusherFollowInfo(postBody)) {
      await registerService(postBody)
    } else if (isPusherUpMsg(postBody)) {
      await handleUpCmd(postBody)
    } else {
      ctx.body = 'not found'
      ctx.status = 404
    }
  }, parseBody)
}
