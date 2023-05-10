import "dotenv/config.js"
import express from "express"
import cors from "cors"
import { v4 as uuidv4 } from "uuid"

import { pool } from "./db.js"

const PORT = process.env.PORT ?? 8000
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
	res.send("hello Dark")
})

// get all todos
app.get("/todos/:userEmail", async (req, res) => {
	const { userEmail } = req.params

	try {
		const todos = await pool.query("SELECT * FROM todos WHERE user_email = $1", [userEmail])
		res.json(todos.rows)
	} catch (err) {
		console.log(err)
	}
})

// create a new todo
app.post("/todos", async (req, res) => {
	const { user_email, title, progress, date } = req.body
	console.log(user_email, title, progress, date)
	const id = uuidv4()

	try {
		const newTodo = await pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`, [
			id,
			user_email,
			title,
			progress,
			date,
		])
		res.json(newTodo)
	} catch (err) {
		console.log(err)
	}
})

// edit a todo
app.put("/todos/:id", async (req, res) => {
	const { id } = req.params
	const { user_email, title, progress, date } = req.body

	try {
		const editTodo = await pool.query("UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;", [
			user_email,
			title,
			progress,
			date,
			id,
		])
		res.json(editTodo)
	} catch (err) {
		console.log(err)
	}
})

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params

  try {
		const deleteTodo = await pool.query("DELETE FROM todos WHERE id = $1;", [ id ])
		res.json(deleteTodo)
	} catch (err) {
		console.log(err)
	}
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
