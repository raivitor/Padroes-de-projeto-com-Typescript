export class DbConnection {
    private static instance: DbConnection
    private success: boolean
    private inUse: boolean

    constructor () {
      this.success = true
      this.inUse = false
    }

    public isInUse ():boolean {
      return this.inUse
    }

    public setInUse (status:boolean) {
      this.inUse = status
    }

    public query (sql: String) {
      console.log(sql)
    }
}
