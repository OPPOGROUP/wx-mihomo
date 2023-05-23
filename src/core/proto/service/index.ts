import {GrpcService} from "../../../types/grpc_server";
import {opwxService} from "./opwx";

export const services: GrpcService[] = [
  opwxService
]
