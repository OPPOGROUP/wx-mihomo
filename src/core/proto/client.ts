import {HoyolibClient} from "mihomo-protocol";
import {config} from "../../utils/readConfig";
import {credentials} from "@grpc/grpc-js";

const { client } = config.grpc

export const hoyolibClient = new HoyolibClient(client, credentials.createInsecure())
