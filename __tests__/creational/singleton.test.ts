import { describe, expect, test } from '@jest/globals'
import { DbConnectionPool } from '../../src/creational/singleton/DbConnectionPool'
import { DbConnection } from '../../src/creational/singleton/DbConnection'

describe('Testing Singleton', () => {
  test('DbConnection must be initialize with inUse false', () => {
    const conn = new DbConnection()
    expect(conn.isInUse()).toBe(false)
  })

  test('Multiples instances from DbConnectionPool must be iqual', () => {
    const conn = DbConnectionPool.getInstance()
    const conn2 = DbConnectionPool.getInstance()
    expect(conn).toBe(conn2)
  })

  test('only 2 connections', () => {
    const pool: DbConnectionPool = DbConnectionPool.getInstance()
    const conn1: DbConnection = pool.getConnection()
    const conn2: DbConnection = pool.getConnection()
    const conn3: DbConnection = pool.getConnection()
    expect(conn1).toBeInstanceOf(DbConnection)
    expect(conn2).toBeInstanceOf(DbConnection)
    expect(conn3).toBeNull()
  })
})
