import { useEffect } from 'react'

import ListHeader from "./components/ListHeader"
import "./App.css"

const App = () => {
  const userEmail = 'd.legizynski@gmail.com'
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      console.log(json)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => getData, [])

  return (
    <div className="app">
      <ListHeader listName={'Holiday tick list'} />
    </div>
  )
}

export default App
