import "dotenv/config.js"
import express from 'express'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'

import { pool } from "./db.js"

const PORT = process.env.PORT ?? 8000
const app = express()

app.use(cors())
app.use(express.json())

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

// create a new todo
app.post('/todos', (req, res) => {
  const {user_email, title, progress, date} = req.body
  console.log(user_email, title, progress, date)
  const id = uuidv4()

  try {
    pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`,
    [id, user_email, title, progress, date])
  } catch (err) {
    console.log(err)
  }
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))