import pg from 'pg'

console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)
export const pool = new pg.Pool({
    user: 'postgres',
    password: process.env.PASSWORD,
    // password: "",
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
  })