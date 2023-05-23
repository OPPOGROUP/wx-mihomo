import {createClient} from "redis";
import {config} from "../../utils/readConfig";

export const redisClient = createClient(config.redis)
