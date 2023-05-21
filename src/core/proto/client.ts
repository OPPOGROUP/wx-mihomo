import {HoyolibClient} from "../../proto/hoyolib_pb/hoyolib_grpc_pb";
import {config} from "../../utils/readConfig";
import {credentials} from "@grpc/grpc-js";

const { address } = config.grpc

export const hoyolibClient = new HoyolibClient(address, credentials.createInsecure())
