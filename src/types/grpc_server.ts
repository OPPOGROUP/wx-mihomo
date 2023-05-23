import {sendUnaryData, ServerUnaryCall, ServiceDefinition, UntypedServiceImplementation} from "@grpc/grpc-js";

export interface GrpcService {
  def: ServiceDefinition
  impl: UntypedServiceImplementation
}

export type GrpcServiceImplFn<REQ, RES> = (call: ServerUnaryCall<REQ, RES>, callback: sendUnaryData<RES>) => void
