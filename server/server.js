import "dotenv/config.js"
import express from 'express'

import { pool } from "./db.js"

const PORT = process.env.PORT ?? 8000
const app = express()

app.get('/', (req, res) => {
  res.send('hello Dark')
})

// get all todos
app.get('/todos', async (req, res) => {
  const userEmail = "d.legizynski@gmail.com"

  try {
    const todos = await pool.query("SELECT * FROM todos WHERE user_email = $1", [userEmail])
    res.json(todos.rows)
  } catch (err) {
    console.log(err)
  }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))