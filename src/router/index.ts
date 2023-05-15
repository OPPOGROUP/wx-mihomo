import {router, useRouter, UseRouterFn} from "./router";

import {getRoot} from "./get/get.root";
import {postRegister} from "./post/post.register";

for (const mod of [
  getRoot,
  postRegister
]) useRouter(mod)


export {
  router
}
