import pg from 'pg'

export const pool = new pg.Pool({
    user: "postgres",
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
  })