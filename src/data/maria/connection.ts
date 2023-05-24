import {createPool, MysqlError} from 'mysql'
import {config} from "../../utils/readConfig";
import {logger} from "../../utils/logger";

const conPool = createPool({
  connectionLimit: 10,
  ...(config.maria)
})

const mariaLogger = logger.child({action: 'maria'})

export const query = (s: string, payload?: any[]) => {
  return new Promise((resolve, reject) => {
    conPool.getConnection((err, connection) => {
      if (err) {
        mariaLogger.error({name: 'connection', message: err.message})
        reject(err)
      } else {
        connection.query(s, payload, (err, result) => {
          connection.release()
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        })
      }
    })
  })
}
