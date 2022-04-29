import { DbConnection } from './DbConnection'

export class DbConnectionPool {
    private static singleton: DbConnectionPool
    private maxConnections: Number = 2
    private connectionsPool: Array<DbConnection> = [];

    constructor () {
      for (let i = 0; i < this.maxConnections; i++) {
        this.connectionsPool.push(new DbConnection())
      }
    }

    public static getInstance () {
      if (!DbConnectionPool.singleton) {
        DbConnectionPool.singleton = new DbConnectionPool()
      }
      return DbConnectionPool.singleton
    }

    public getConnection (): any {
      let available: any = null
      this.connectionsPool.forEach(conn => {
        if (!conn.isInUse()) {
          available = conn
        }
      })
      if (available == null) {
        console.log('No Connections avaiable')
        return null
      }
      available.setInUse(true)
      return available
    }

    public leaveConnection (conn: DbConnection) {
      conn.setInUse(false)
    }
}
