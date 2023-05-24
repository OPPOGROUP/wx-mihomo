import {createLogger} from "bunyan";

export const logger = createLogger({
  name: 'default',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: "error",
      path: './def-error.log'
    }
  ]
})
