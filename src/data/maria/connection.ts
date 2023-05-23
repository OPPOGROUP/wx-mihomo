import {createPool, MysqlError} from 'mysql'
import {config} from "../../utils/readConfig";

const conPool = createPool({
  connectionLimit: 10,
  ...(config.maria)
})

export const query = (s: string, payload?: any[]) => {
  return new Promise((resolve, reject) => {
    conPool.getConnection((err, connection) => {
      if (err) { reject(err) }
      else {
        connection.query(s, payload, (err, result) => {
          connection.release()
          if (err) { reject(err) }
          else {
            resolve(result)
          }
        })
      }
    })
  })
}
