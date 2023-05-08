import "dotenv/config.js"
import express from 'express'
import cors from 'cors'

import { pool } from "./db.js"

const PORT = process.env.PORT ?? 8000
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello Dark')
})

// get all todos
app.get('/todos/:userEmail', async (req, res) => {
  const { userEmail } = req.params

  try {
    const todos = await pool.query("SELECT * FROM todos WHERE user_email = $1", [userEmail])
    res.json(todos.rows)
  } catch (err) {
    console.log(err)
  }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))