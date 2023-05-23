import {CheckinResults, OpwxService, PushResponse} from "mihomo-protocol";
import {GrpcService, GrpcServiceImplFn} from "../../../types/grpc_server";

const pushCheckinResults: GrpcServiceImplFn<CheckinResults, PushResponse> = (call, callback) => {
  call.request.getResultsList()
}

export const opwxService: GrpcService = {
  def: OpwxService,
  impl: {
    pushCheckinResults
  }
}
