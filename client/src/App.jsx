import { useEffect, useState } from 'react'

import ListHeader from "./components/ListHeader"
import ListItem from "./components/ListItem"
import "./App.css"

const App = () => {
  const userEmail = 'd.legizynski@gmail.com'
  const [ tasks, setTasks ] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => getData, [])

  console.log(tasks)

  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      <ListHeader listName={'Holiday tick list'} getData={getData} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
    </div>
  )
}

export default App
