import {router, useRouter, UseRouterFn} from "./router";

import {getRoot} from "./get/get.root";
import {postRegister} from "./post/post.register";
import {getCmd} from "./get/get.cmd";

for (const mod of [
  getRoot,
  getCmd,
  postRegister
]) useRouter(mod)


export {
  router
}
