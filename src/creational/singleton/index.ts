import { DbConnection } from './DbConnection'
import { DbConnectionPool } from './DbConnectionPool'

function query1 () {
  const pool: DbConnectionPool = DbConnectionPool.getInstance()
  const conn: DbConnection = pool.getConnection()
  if (conn != null) {
    conn.query('SELECT * FROM A1')
  }
}

function query2 () {
  const pool: DbConnectionPool = DbConnectionPool.getInstance()
  const conn: DbConnection = pool.getConnection()
  if (conn != null) {
    conn.query('SELECT * FROM A2')
  }
}
function query3 () {
  const pool: DbConnectionPool = DbConnectionPool.getInstance()
  const conn: DbConnection = pool.getConnection()
  if (conn != null) {
    conn.query('SELECT * FROM A3')
  }
}

query1()
query2()
query3()
