import {router, useRouter, UseRouterFn} from "./router";

import {getRoot} from "./get/get.root";

for (const mod of [
  getRoot
]) useRouter(mod)


export {
  router
}
