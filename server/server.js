import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import { pool } from "./db.js"

const PORT = process.env.PORT ?? 8000
const app = express()

app.get('/', (req, res) => {
  res.send('hello Dark')
})

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todos")
    res.json(todos.rows)
  } catch (err) {
    console.log(err)
  }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))